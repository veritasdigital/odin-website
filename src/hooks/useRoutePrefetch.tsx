import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { prefetchStrategy } from '@/utils/routePrefetch';

/**
 * Hook to automatically prefetch likely next routes based on current page
 */
export const useRoutePrefetch = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // Determine which prefetch strategy to use based on current route
    if (path === '/') {
      prefetchStrategy.homepage();
    } else if (path.startsWith('/services/')) {
      prefetchStrategy.services();
    } else if (path.startsWith('/blog/')) {
      prefetchStrategy.blog();
    } else if (path.startsWith('/industries/')) {
      prefetchStrategy.industries();
    }
  }, [location.pathname]);
};
