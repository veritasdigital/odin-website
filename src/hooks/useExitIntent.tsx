import { useEffect, useState } from 'react';

interface UseExitIntentOptions {
  threshold?: number;
  maxDisplays?: number;
  cookieExpiry?: number;
}

export const useExitIntent = (options: UseExitIntentOptions = {}) => {
  const {
    threshold = 20,
    maxDisplays = 1,
    cookieExpiry = 24 * 60 * 60 * 1000, // 24 hours
  } = options;

  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const STORAGE_KEY = 'exit-intent-shown';
    
    // Check if we've already shown the popup
    const checkIfShown = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return false;
      
      const data = JSON.parse(stored);
      const now = Date.now();
      
      // Check if cookie expired
      if (now > data.expiry) {
        localStorage.removeItem(STORAGE_KEY);
        return false;
      }
      
      // Check if max displays reached
      return data.count >= maxDisplays;
    };

    if (checkIfShown()) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the viewport
      if (e.clientY <= threshold && !checkIfShown()) {
        setShouldShow(true);
        
        // Update storage
        const stored = localStorage.getItem(STORAGE_KEY);
        const data = stored ? JSON.parse(stored) : { count: 0 };
        
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            count: data.count + 1,
            expiry: Date.now() + cookieExpiry,
          })
        );
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [threshold, maxDisplays, cookieExpiry]);

  const resetExitIntent = () => setShouldShow(false);

  return { shouldShow, resetExitIntent };
};
