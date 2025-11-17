import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { logWebVitals } from "./utils/performance";
import { registerServiceWorker, preloadCriticalResources, clearExpiredCache } from "./utils/caching";

// Initialize Core Web Vitals monitoring
logWebVitals();

// Register service worker for caching
registerServiceWorker();

// Preload critical resources
preloadCriticalResources();

// Clear expired cache on load
clearExpiredCache();

createRoot(document.getElementById("root")!).render(<App />);
