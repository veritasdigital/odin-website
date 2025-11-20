try {
  console.log('[DIAGNOSTIC] Step 1: main.tsx is executing.');
  
  const { createRoot } = await import("react-dom/client");
  const { default: App } = await import("./App.tsx");
  await import("./index.css");
  const { default: ErrorBoundary } = await import("./components/ErrorBoundary");
  
  console.log('[DIAGNOSTIC] Step 2: Imports are loaded.');
  
  // Wrap utility functions in try-catch for incognito/private browsing mode
  const safeInit = () => {
    try {
      // Dynamically import performance utilities
      import("./utils/performance").then(({ logWebVitals }) => {
        logWebVitals();
      }).catch(err => console.warn("Performance monitoring failed:", err));

      // Dynamically import caching utilities (may fail in incognito)
      import("./utils/caching").then(({ registerServiceWorker, preloadCriticalResources, clearExpiredCache }) => {
        registerServiceWorker();
        preloadCriticalResources();
        clearExpiredCache();
      }).catch(err => console.warn("Caching utilities failed:", err));

      // Dynamically import route prefetch
      import("./utils/routePrefetch").then(({ initializeRoutePrefetch }) => {
        initializeRoutePrefetch();
      }).catch(err => console.warn("Route prefetch failed:", err));
    } catch (error) {
      console.warn("Initialization error:", error);
    }
  };

  // Initialize utilities after DOM is ready
  safeInit();

  const rootElement = document.getElementById("root");
  console.log('[DIAGNOSTIC] Step 3: Root element found:', rootElement);
  
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  
  console.log('[DIAGNOSTIC] Step 4: Creating React root...');
  const root = createRoot(rootElement);
  
  console.log('[DIAGNOSTIC] Step 5: Rendering App component...');
  root.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
  
  console.log('[DIAGNOSTIC] Step 6: App rendered successfully!');
  
} catch (error) {
  console.error('[DIAGNOSTIC] FATAL ERROR:', error);
  document.body.innerHTML = '<div style="font-family: sans-serif; padding: 2rem; background: #fff0f0; color: #d00;"><h1>Application Error</h1><p>Critical error during startup:</p><pre>' + (error instanceof Error ? error.stack : String(error)) + '</pre></div>';
}
