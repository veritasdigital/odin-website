import { Helmet } from "react-helmet";
import odinLogo from "@/assets/odin-logo-lead-magnet.png";

const LeadMagnetBooking = () => {
  return (
    <>
      <Helmet>
        <title>Book Your Strategy Session | Odin Digital</title>
        <meta name="description" content="Select a meeting time that suits you best for your strategy session with Odin Digital." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <header className="border-b border-border py-4 md:py-6">
          <div className="container mx-auto px-4 flex justify-center">
            <img src={odinLogo} alt="Odin Digital" className="h-12 md:h-16" />
          </div>
        </header>

        <main className="flex-1 w-full px-4 py-6 md:py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-6 md:mb-12 px-2">
              Last Step! Select A Meeting Time That Suits You Best
            </h1>

            <div className="w-full overflow-hidden rounded-lg">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/8tp0FEL5RNqYH0wwRjUN" 
                style={{ 
                  width: '100%', 
                  border: 'none', 
                  overflow: 'hidden', 
                  minHeight: '600px',
                  height: '70vh',
                  maxHeight: '650px'
                }} 
                scrolling="no" 
                id="XdtsI24khl150RzT0cUK_1763364059706"
              />
              <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default LeadMagnetBooking;
