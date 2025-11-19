import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

const ApplicationForm = lazy(() => import("@/components/ApplicationForm"));

const Application = () => {

  return (
    <>
      <Helmet>
        <title>Free Growth Session | Odin Digital</title>
        <meta name="description" content="Claim a free zero-obligation A.I Performance Marketing Plan for your business valued at $2,500." />
        <meta name="keywords" content="growth session, marketing audit, Odin Digital" />
        <link rel="canonical" href="https://odindigital.com.au/application" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://qrpyukrdkajotbjlaacg.supabase.co" />
        <link rel="dns-prefetch" href="https://qrpyukrdkajotbjlaacg.supabase.co" />
      </Helmet>
      
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      }>
        <ApplicationForm />
      </Suspense>
    </>
  );
};

export default Application;
