import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary";

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

// Ensure root element exists
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

console.log("Mounting React app...");

createRoot(rootElement).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
