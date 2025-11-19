import { Helmet } from "react-helmet";
import ApplicationForm from "@/components/ApplicationForm";

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
      
      <ApplicationForm />
    </>
  );
};

export default Application;
