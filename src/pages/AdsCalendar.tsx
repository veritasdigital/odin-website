import { Helmet } from "react-helmet";
import { OptimizedImage } from '@/components/OptimizedImage';
import odinLogo from "@/assets/odin-logo-lead-magnet.png";
import { OptimizedImage } from '@/components/OptimizedImage';

const AdsCalendar = () => {
  return (
    <>
      <Helmet>
        <title>Book Your Ads Strategy Session | Odin Digital</title>
        <meta name="description" content="Select a meeting time that suits you best for your ads strategy session with Odin Digital." />
        <script type="text/javascript">
          {`
            fbq('trackCustom', 'application_t1', {
              lead_type: 'qualified',
              source: 'meta_ads'
            });
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <header className="border-b border-border py-6">
          <div className="container mx-auto px-4 flex justify-center">
            <OptimizedImage src={odinLogo} alt="Odin Digital" className="h-16" loading="eager" fetchPriority="high"  sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 pb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            Last Step! Select A Meeting Time That Suits You Best
          </h1>

          <div className="max-w-4xl mx-auto mb-12">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/9PlFVMdnbsdS5yOraVfe" 
              style={{ width: '100%', border: 'none', overflow: 'visible', height: '1000px' }} 
              scrolling="yes" 
              id="XdtsI24khl150RzT0cUK_1763374948927"
            />
            <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdsCalendar;
