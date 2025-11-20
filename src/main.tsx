import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { logWebVitals } from "./utils/performance";
import { registerServiceWorker, preloadCriticalResources, clearExpiredCache } from "./utils/caching";
import { initializeRoutePrefetch } from "./utils/routePrefetch";

// Initialize Core Web Vitals monitoring
logWebVitals();

// Register service worker for caching
registerServiceWorker();

// Preload critical resources
preloadCriticalResources();

// Clear expired cache on load
clearExpiredCache();

// Initialize intelligent route prefetching
initializeRoutePrefetch();

createRoot(document.getElementById("root")!).render(<App />);
