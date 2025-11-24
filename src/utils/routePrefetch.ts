/**
 * Intelligent route-based prefetching utilities
 * Speeds up navigation by preloading likely next pages
 */

interface PrefetchOptions {
  priority?: 'high' | 'low';
  delay?: number;
}

const prefetchedRoutes = new Set<string>();

/**
 * Prefetch a route by creating a link element
 */
export const prefetchRoute = (route: string, options: PrefetchOptions = {}) => {
  // Avoid duplicate prefetches
  if (prefetchedRoutes.has(route)) {
    return;
  }

  const { priority = 'low', delay = 0 } = options;

  const prefetch = () => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = route;
    link.as = 'document';
    
    if (priority === 'high') {
      link.setAttribute('importance', 'high');
    }

    document.head.appendChild(link);
    prefetchedRoutes.add(route);
  };

  if (delay > 0) {
    setTimeout(prefetch, delay);
  } else {
    prefetch();
  }
};

/**
 * Prefetch multiple routes
 */
export const prefetchRoutes = (routes: string[], options: PrefetchOptions = {}) => {
  routes.forEach((route, index) => {
    // Stagger prefetches to avoid overwhelming the browser
    const delay = (options.delay || 0) + (index * 100);
    prefetchRoute(route, { ...options, delay });
  });
};

/**
 * Intelligent prefetch based on user behavior
 * Prefetches likely next pages when user hovers over links
 */
export const setupHoverPrefetch = () => {
  const handleLinkHover = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const link = target.closest('a');
    
    if (link && link.href) {
      const url = new URL(link.href);
      
      // Only prefetch internal links
      if (url.origin === window.location.origin) {
        prefetchRoute(url.pathname, { priority: 'high' });
      }
    }
  };

  // Use passive listener for better performance
  document.addEventListener('mouseover', handleLinkHover, { passive: true });
  
  return () => {
    document.removeEventListener('mouseover', handleLinkHover);
  };
};

/**
 * Prefetch based on viewport visibility
 * Prefetches routes for links currently in viewport
 */
export const setupViewportPrefetch = () => {
  if (!('IntersectionObserver' in window)) {
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link = entry.target as HTMLAnchorElement;
          const url = new URL(link.href);
          
          if (url.origin === window.location.origin) {
            prefetchRoute(url.pathname, { priority: 'low', delay: 1000 });
          }
          
          observer.unobserve(link);
        }
      });
    },
    {
      rootMargin: '50px',
    }
  );

  // Observe all internal links
  const links = document.querySelectorAll('a[href^="/"]');
  links.forEach((link) => observer.observe(link));

  return () => {
    observer.disconnect();
  };
};

/**
 * Route-specific prefetch strategies based on common navigation patterns
 */
export const prefetchStrategy = {
  homepage: () => {
    // From homepage, users commonly go to services or about
    prefetchRoutes([
      '/services/seo',
      '/services/google-ads',
      '/services/social-media',
      '/about',
      '/our-clients',
    ], { priority: 'low', delay: 2000 });
  },
  
  services: () => {
    // From services, users often check other services or contact
    prefetchRoutes([
      '/contact',
      '/application',
      '/strategy-session',
    ], { priority: 'low', delay: 1000 });
  },
  
  blog: () => {
    // From blog, users read related articles
    prefetchRoutes([
      '/blog',
      '/contact',
    ], { priority: 'low', delay: 1500 });
  },

  industries: () => {
    // From industries, users contact or view services
    prefetchRoutes([
      '/contact',
      '/services',
      '/application',
    ], { priority: 'low', delay: 1000 });
  },
};

/**
 * Initialize intelligent prefetching
 */
export const initializeRoutePrefetch = () => {
  // Only run in production and when browser is idle
  if (process.env.NODE_ENV !== 'production') return;
  
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      setupHoverPrefetch();
    }, { timeout: 5000 });
  }
};
