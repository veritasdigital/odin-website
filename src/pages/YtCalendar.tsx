import { Helmet } from "react-helmet";
import { OptimizedImage } from '@/components/OptimizedImage';
import odinLogo from "@/assets/odin-logo-lead-magnet.png";
import { OptimizedImage } from '@/components/OptimizedImage';

const YtCalendar = () => {
  return (
    <>
      <Helmet>
        <title>Book Your YouTube Ads Strategy Session | Odin Digital</title>
        <meta name="description" content="Select a meeting time that suits you best for your YouTube ads strategy session with Odin Digital." />
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
              src="https://api.leadconnectorhq.com/widget/booking/f5RXi3gcl4oJWNA5BW29" 
              style={{ width: '100%', border: 'none', overflow: 'hidden', height: '1000px' }} 
              scrolling="no" 
              id="XdtsI24khl150RzT0cUK_1763417148753"
            />
            <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
          </div>
        </main>
      </div>
    </>
  );
};

export default YtCalendar;
