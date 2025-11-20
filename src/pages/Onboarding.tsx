import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import odinLogo from "@/assets/odin-digital-logo-new.png";
import { OptimizedImage } from '@/components/OptimizedImage';

const Onboarding = () => {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Onboarding - Odin Digital</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Simple header with logo only */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16">
            <Link to="/" className="flex items-center">
              <OptimizedImage src={odinLogo} alt="Odin Digital" sizes="(max-width: 768px) 100vw, 50vw" priority className="h-10 w-auto" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main content area with iframe */}
      <main className="min-h-screen pt-16 bg-background">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-foreground">
            New Client Questionnaire
          </h1>
          <iframe
            src="https://api.leadconnectorhq.com/widget/survey/lcHOsXy17xByWadFMpaI"
            style={{ border: "none", width: "100%" }}
            scrolling="no"
            id="lcHOsXy17xByWadFMpaI"
            title="survey"
          />
        </div>
      </main>
    </>
  );
};

export default Onboarding;
