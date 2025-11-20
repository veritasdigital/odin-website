import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { logWebVitals } from "./utils/performance";
import { registerServiceWorker, preloadCriticalResources, clearExpiredCache } from "./utils/caching";

// Defer non-critical CSS loading for better FCP
const loadStyles = () => {
  import("./index.css");
};

// Load styles after critical render
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadStyles);
} else {
  loadStyles();
}

// Initialize Core Web Vitals monitoring
logWebVitals();

// Register service worker for caching
registerServiceWorker();

// Preload critical resources
preloadCriticalResources();

// Clear expired cache on load
clearExpiredCache();

createRoot(document.getElementById("root")!).render(<App />);
