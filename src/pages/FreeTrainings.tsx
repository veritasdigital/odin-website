import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Star } from "lucide-react";
import odinLogoWhite from "@/assets/odin-logo-white.png";

const FreeTrainings = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://odin-digital.kit.com/74e5ace47c/index.js';
    script.async = true;
    script.setAttribute('data-uid', '74e5ace47c');
    
    const embedContainer = document.getElementById('convertkit-embed');
    if (embedContainer) {
      embedContainer.appendChild(script);
    }

    return () => {
      if (embedContainer && embedContainer.contains(script)) {
        embedContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Free Lead Generation Training - Odin Digital</title>
        <meta name="description" content="Get free access to our trainings covering paid ads, content, cold email, webinars, lead magnets and much more. Delivered to your inbox in seconds." />
        <meta name="keywords" content="lead generation, digital marketing training, free training, paid ads, content marketing" />
        <link rel="canonical" href="https://odindigital.com.au/free-trainings" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        {/* Header with Logo */}
        <header className="bg-gradient-primary py-4 md:py-6">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-center">
              <img 
                src={odinLogoWhite}
                alt="Odin Digital" 
                className="h-8 md:h-12"
              />
            </div>
          </div>
        </header>
        
        {/* Hero Section */}
        <main className="flex-1">
          <section className="py-12 md:py-20 px-4 md:px-6 bg-background">
            <div className="max-w-4xl mx-auto text-center">
              {/* Reviews */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 md:mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm md:text-base text-muted-foreground font-semibold">
                  3,200 Five Star Reviews
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight px-2 text-foreground">
                Get The Best Digital Marketing Training Ever
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto px-2">
                Get <span className="font-bold text-foreground">free</span> access to our trainings covering SEO, Google ads, Meta ads, A.I, websites, landing pages and much more.{" "}
                <span className="font-bold text-foreground">Delivered to your inbox in seconds.</span>
              </p>

              {/* ConvertKit Embed */}
              <div id="convertkit-embed" className="max-w-3xl mx-auto"></div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-12 md:py-20 px-4 md:px-6 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 px-2 text-foreground">
                About This Free Training
              </h2>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex gap-3 md:gap-4">
                  <span className="text-xl md:text-2xl font-bold text-primary flex-shrink-0">1.</span>
                  <p className="text-base md:text-xl text-muted-foreground">
                    Rank #1 on Google with SEO
                  </p>
                </div>
                
                <div className="flex gap-3 md:gap-4">
                  <span className="text-xl md:text-2xl font-bold text-primary flex-shrink-0">2.</span>
                  <p className="text-base md:text-xl text-muted-foreground">
                    Scale profitably with paid ads
                  </p>
                </div>
                
                <div className="flex gap-3 md:gap-4">
                  <span className="text-xl md:text-2xl font-bold text-primary flex-shrink-0">3.</span>
                  <p className="text-base md:text-xl text-muted-foreground">
                    Automate marketing with AI tools
                  </p>
                </div>
                
                <div className="flex gap-3 md:gap-4">
                  <span className="text-xl md:text-2xl font-bold text-primary flex-shrink-0">4.</span>
                  <p className="text-base md:text-xl text-muted-foreground">
                    Build high-converting landing pages
                  </p>
                </div>
                
                <div className="flex gap-3 md:gap-4 pt-4 md:pt-6 border-t border-border">
                  <span className="text-xl md:text-2xl font-bold text-primary flex-shrink-0">🎁</span>
                  <p className="text-base md:text-xl text-muted-foreground">
                    <span className="font-bold text-foreground">Bonus:</span> 3 Ways To Ethically Steal Your Competitor&apos;s Customers E-Book
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-primary py-6 md:py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <img 
                src={odinLogoWhite}
                alt="Odin Digital" 
                className="h-8 md:h-10"
              />
              <p className="text-white/80 text-xs md:text-sm">
                Copyright © Odin Digital
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FreeTrainings;
