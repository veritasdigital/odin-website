// Service Worker for caching strategies
const CACHE_NAME = 'odin-digital-v2';
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';
const IMAGE_CACHE = 'images-v2';
const FONT_CACHE = 'fonts-v2';
const API_CACHE = 'api-v1';

// Static assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/src/index.css',
  '/src/assets/odin-logo-gradient.png',
  '/application',
  '/thank-you',
];

// Font URLs to cache
const FONT_URLS = [
  'https://fonts.googleapis.com/css2',
  'https://fonts.gstatic.com',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => {
            return name !== STATIC_CACHE && name !== DYNAMIC_CACHE && name !== IMAGE_CACHE;
          })
          .map((name) => caches.delete(name))
      );
    })
  );
  return self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle font requests - cache first
  if (request.destination === 'font' || url.hostname === 'fonts.gstatic.com' || url.hostname === 'fonts.googleapis.com') {
    event.respondWith(
      caches.open(FONT_CACHE).then((cache) => {
        return cache.match(request).then((response) => {
          return (
            response ||
            fetch(request).then((fetchResponse) => {
              // Only cache successful responses
              if (fetchResponse.ok) {
                cache.put(request, fetchResponse.clone());
              }
              return fetchResponse;
            })
          );
        });
      })
    );
    return;
  }

  // Handle image requests - cache first
  if (request.destination === 'image') {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) => {
        return cache.match(request).then((response) => {
          return (
            response ||
            fetch(request).then((fetchResponse) => {
              if (fetchResponse.ok) {
                cache.put(request, fetchResponse.clone());
              }
              return fetchResponse;
            })
          );
        });
      })
    );
    return;
  }

  // Handle API requests - network first with cache fallback
  if (url.hostname === 'hook.us1.make.com' || url.pathname.includes('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Don't cache POST requests
          if (request.method === 'GET' && response.ok) {
            const responseToCache = response.clone();
            caches.open(API_CACHE).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
    return;
  }

  // Handle static assets - cache first
  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(
      caches.match(request).then((response) => {
        return response || fetch(request).then((fetchResponse) => {
          if (fetchResponse.ok) {
            caches.open(STATIC_CACHE).then((cache) => {
              cache.put(request, fetchResponse.clone());
            });
          }
          return fetchResponse;
        });
      })
    );
    return;
  }

  // Handle dynamic content - network first
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const responseToCache = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});
