import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import odinLogo from "@/assets/odin-digital-logo-new.png";
import ApplicationForm from "@/components/ApplicationForm";

const OptIn = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Helmet>
        <title>Get Your Free Growth Session - Odin Digital</title>
        <meta name="description" content="Book your free growth session with Odin Digital. Get a personalized digital marketing strategy for your business." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">
        {/* Header */}
        <div className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4">
            <img 
              src={odinLogo} 
              alt="Odin Digital" 
              className="h-10 w-auto"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {!showForm ? (
            <div className="max-w-2xl mx-auto">
              <div className="bg-card border border-border rounded-lg shadow-lg p-8 text-center space-y-6">
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    Ready to Grow Your Business?
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Complete our quick application to get started with your personalized growth strategy
                  </p>
                </div>

                <Button
                  onClick={() => setShowForm(true)}
                  className="w-full h-14 text-lg font-semibold"
                  size="lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-muted-foreground">
                  Takes about 2 minutes to complete
                </p>
              </div>
            </div>
          ) : (
            <ApplicationForm />
          )}
        </div>
      </div>
    </>
  );
};

export default OptIn;
