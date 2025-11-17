import { Helmet } from "react-helmet";
import odinLogo from "@/assets/odin-digital-logo.png";

const LeadMagnetBooking = () => {
  return (
    <>
      <Helmet>
        <title>Book Your Strategy Session | Odin Digital</title>
        <meta name="description" content="Select a meeting time that suits you best for your strategy session with Odin Digital." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <header className="border-b border-border py-6">
          <div className="container mx-auto px-4">
            <img src={odinLogo} alt="Odin Digital" className="h-12" />
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            Last Step! Select A Meeting Time That Suits You Best
          </h1>

          <div className="max-w-4xl mx-auto">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/8tp0FEL5RNqYH0wwRjUN" 
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }} 
              scrolling="no" 
              id="XdtsI24khl150RzT0cUK_1763364059706"
            />
            <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
          </div>
        </main>
      </div>
    </>
  );
};

export default LeadMagnetBooking;
