import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-primary/20 rounded-full animate-float" />
      
      <div className="text-center relative z-10 px-6">
        <h1 className="mb-4 text-7xl md:text-9xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">404</h1>
        <p className="mb-8 text-2xl md:text-3xl font-bold text-foreground">Oops! Page not found</p>
        <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-primary rounded-lg hover:shadow-glow transition-all duration-300">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
