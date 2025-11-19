import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import odinLogo from "@/assets/odin-digital-logo-new.png";
import ApplicationForm from "@/components/ApplicationForm";

// Australian cities for geolocation fallback
const AUSTRALIAN_CITIES = [
  "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide",
  "Gold Coast", "Newcastle", "Canberra", "Hobart", "Darwin",
  "Launceston", "Ballarat"
];

const OptIn = () => {
  const [showForm, setShowForm] = useState(false);
  const [userCity, setUserCity] = useState<string>("Australia");

  // Detect user's city on mount
  useEffect(() => {
    const detectCity = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.city && AUSTRALIAN_CITIES.includes(data.city)) {
          setUserCity(data.city);
        } else if (data.country === 'AU') {
          setUserCity("Australia");
        }
      } catch (error) {
        console.log("Could not detect location, using default");
      }
    };

    detectCity();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Free Marketing Growth Session - Odin Digital</title>
        <meta name="description" content="Claim your 100% FREE no-obligation 30-minute scaling growth map call ($997 value)." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Minimal Header with Logo */}
      <header className="py-4 md:py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src={odinLogo} 
            alt="Odin Digital" 
            className="h-5 md:h-8 mx-auto"
            loading="eager"
          />
        </div>
      </header>


      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-2 md:py-6">
        {!showForm ? (
          <div className="max-w-3xl w-full text-center font-montserrat">
            {/* Waving Emoji */}
            <div className="text-4xl md:text-5xl mb-4 md:mb-6 animate-fade-in">
              👋
            </div>

            {/* Serving Clients Banner */}
            <div className="mb-6 md:mb-8 animate-fade-in">
              <div className="inline-block px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-red-500 to-orange-500">
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wide text-white">
                  Servicing clients in: {userCity}
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-4 md:mb-6 animate-fade-in">
              FREE MARKETING{" "}
              <span className="text-primary">GROWTH SESSION</span>
            </h1>

            {/* Sub-Headline */}
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium mb-6 md:mb-8 px-2 max-w-2xl mx-auto animate-fade-in">
              Claim your <span className="font-bold text-foreground">100% FREE</span> no-obligation 30-minute scaling growth map call{" "}
              <span className="font-bold text-foreground">($1,000 value)</span>. This is strictly for people who are hungry for growth. 
              If that&apos;s you, then let&apos;s scale your biz to the moon! 🚀🌙
            </p>

            {/* CTA Button */}
            <Button
              onClick={() => setShowForm(true)}
              className="w-full max-w-md mx-auto h-12 md:h-14 text-base md:text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary hover:shadow-glow transition-all duration-300 rounded-md group mb-6 md:mb-8 animate-fade-in"
            >
              Get Started <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Reviews */}
            <div className="flex items-center justify-center gap-2 animate-fade-in">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                4.9 stars out of 127 reviews
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full animate-fade-in">
            <ApplicationForm />
          </div>
        )}
      </main>
    </div>
  );
};

export default OptIn;
