import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import odinLogo from "@/assets/odin-digital-logo-new.png";
import ApplicationForm from "@/components/ApplicationForm";

const OptIn = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Free Marketing Growth Session - Odin Digital</title>
        <meta name="description" content="Claim your 100% FREE no-obligation 30-minute scaling growth map call ($997 value)." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Minimal Header with Logo */}
      <header className="py-2 md:py-4 px-4">
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
      <main className="flex-1 flex items-start md:items-center justify-center px-4 py-3 md:py-12">
        {!showForm ? (
          <div className="max-w-2xl w-full text-center">
            {/* Main Headline */}
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-charcoal leading-tight mb-2 md:mb-4">
              Free Marketing{" "}
              <span className="text-primary">Growth Session</span>
            </h1>

            {/* Sub-Headline */}
            <p className="text-sm sm:text-lg md:text-xl text-foreground font-medium mb-6 md:mb-8 px-2">
              Claim your <span className="font-bold text-primary">100% FREE</span> no-obligation 30-minute scaling growth map call{" "}
              <span className="font-bold">($997 value)</span>. This is strictly for business owners who want to grow. 
              If that's you, then let's scale your biz to the moon! 🚀🌙
            </p>

            {/* CTA Button */}
            <Button
              onClick={() => setShowForm(true)}
              className="w-full max-w-md mx-auto h-12 md:h-14 text-base md:text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary hover:shadow-glow transition-all duration-300 rounded-md group"
            >
              Get Started <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        ) : (
          <div className="w-full">
            <ApplicationForm />
          </div>
        )}
      </main>
    </div>
  );
};

export default OptIn;
