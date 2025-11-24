import { createRoot } from "react-dom/client";
// App is dynamically imported below to provide better error handling in production
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary";

try {
  console.log('[DIAGNOSTIC] Step 1: main.tsx is executing.');
  console.log('[DIAGNOSTIC] Step 2: Imports are loaded.');
  
  // Deferred initialization - run after app is interactive
  const deferredInit = () => {
    // Wait until page is fully loaded and idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Performance monitoring (development only)
        if (process.env.NODE_ENV === 'development') {
          import("./utils/performance").then(({ logWebVitals }) => {
            logWebVitals();
          }).catch(() => {});
        }

        // Route prefetching (production only)
        if (process.env.NODE_ENV === 'production') {
          import("./utils/routePrefetch").then(({ initializeRoutePrefetch }) => {
            initializeRoutePrefetch();
          }).catch(() => {});
        }
      }, { timeout: 3000 });
    }
  };

  // Run deferred init after window load
  if (document.readyState === 'complete') {
    deferredInit();
  } else {
    window.addEventListener('load', deferredInit, { once: true });
  }

  const rootElement = document.getElementById("root");
  console.log('[DIAGNOSTIC] Step 3: Root element found:', rootElement);
  
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  
  console.log('[DIAGNOSTIC] Step 4: Creating React root...');
  const root = createRoot(rootElement);

  // Dynamically load the App module so that any module-level errors
  // don't prevent us from showing a helpful error message.
  import("./App")
    .then(({ default: App }) => {
      console.log('[DIAGNOSTIC] Step 5: App module loaded, rendering...');
      root.render(
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      );
      console.log('[DIAGNOSTIC] Step 6: App rendered successfully!');
    })
    .catch((error) => {
      console.error('[DIAGNOSTIC] FATAL ERROR LOADING APP MODULE:', error);
      document.body.innerHTML =
        '<div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif; padding: 2rem; background: #fff0f0; color: #d00;">' +
        '<h1>Application Error</h1>' +
        '<p>Critical error while loading the application:</p>' +
        '<pre style="white-space: pre-wrap;">' +
        (error instanceof Error ? error.stack : String(error)) +
        '</pre>' +
        '</div>';
    });

} catch (error) {
  console.error('[DIAGNOSTIC] FATAL ERROR:', error);
  document.body.innerHTML = '<div style="font-family: sans-serif; padding: 2rem; background: #fff0f0; color: #d00;"><h1>Application Error</h1><p>Critical error during startup:</p><pre>' + (error instanceof Error ? error.stack : String(error)) + '</pre></div>';
}
