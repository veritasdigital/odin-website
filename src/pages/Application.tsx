import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

const ApplicationForm = lazy(() => import("@/components/ApplicationForm"));

// Optimized loading spinner (pure CSS)
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
    <div className="relative">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-500"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
    </div>
  </div>
);

const Application = () => {
  return (
    <>
      <Helmet>
        <title>Free Growth Session | Odin Digital</title>
        <meta name="description" content="Claim a free zero-obligation A.I Performance Marketing Plan for your business valued at $2,500." />
        <meta name="keywords" content="growth session, marketing audit, Odin Digital" />
        <link rel="canonical" href="https://odindigital.com.au/application" />
        <meta name="robots" content="noindex, nofollow" />
        
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://hook.us1.make.com" />
        <link rel="preconnect" href="https://qrpyukrdkajotbjlaacg.supabase.co" />
        <link rel="dns-prefetch" href="https://hook.us1.make.com" />
        <link rel="dns-prefetch" href="https://qrpyukrdkajotbjlaacg.supabase.co" />
      </Helmet>
      
      <Suspense fallback={<LoadingSpinner />}>
        <ApplicationForm />
      </Suspense>
    </>
  );
};

export default Application;
