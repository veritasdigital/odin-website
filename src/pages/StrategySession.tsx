import { StrategySessionProvider, useStrategySession } from "@/contexts/StrategySessionContext";
import { ProgressBar } from "@/components/strategy-session/ProgressBar";
import { Step1Name } from "@/components/strategy-session/Step1Name";
import { Step2Email } from "@/components/strategy-session/Step2Email";
import { Step3BusinessType } from "@/components/strategy-session/Step3BusinessType";
import { Step4CurrentMarketing } from "@/components/strategy-session/Step4CurrentMarketing";
import { Step5MarketingBudget } from "@/components/strategy-session/Step5MarketingBudget";
import { Step6WebsiteUrl } from "@/components/strategy-session/Step6WebsiteUrl";
import { Step7BusinessDescription } from "@/components/strategy-session/Step7BusinessDescription";
import { Step8CurrentRevenue } from "@/components/strategy-session/Step8CurrentRevenue";
import { Step9TargetRevenue } from "@/components/strategy-session/Step9TargetRevenue";
import { Step10BiggestObstacle } from "@/components/strategy-session/Step10BiggestObstacle";
import { Step11Timeline } from "@/components/strategy-session/Step11Timeline";
import { Step12CommitmentLevel } from "@/components/strategy-session/Step12CommitmentLevel";
import { Step13FinalBooking } from "@/components/strategy-session/Step13FinalBooking";
import { Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const FormContent = () => {
  const { currentStep, prevStep } = useStrategySession();

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1Name />;
      case 2: return <Step2Email />;
      case 3: return <Step3BusinessType />;
      case 4: return <Step4CurrentMarketing />;
      case 5: return <Step5MarketingBudget />;
      case 6: return <Step6WebsiteUrl />;
      case 7: return <Step7BusinessDescription />;
      case 8: return <Step8CurrentRevenue />;
      case 9: return <Step9TargetRevenue />;
      case 10: return <Step10BiggestObstacle />;
      case 11: return <Step11Timeline />;
      case 12: return <Step12CommitmentLevel />;
      case 13: return <Step13FinalBooking />;
      default: return <Step1Name />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Free 30-Minute Growth Strategy Session | Odin Digital</title>
        <meta
          name="description"
          content="Claim your 100% FREE, no-obligation 30-minute growth strategy call. Get a custom roadmap to accelerate your business growth."
        />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-10 md:mb-16 space-y-6 animate-fade-in">
              <div className="inline-block">
                <div className="bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  Limited Spots Available
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Free 30-Minute
                <br />
                <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                  Growth Strategy Session
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Claim your <span className="font-semibold text-foreground">100% FREE</span>, no-obligation 30-minute growth strategy call 
                (a <span className="font-semibold text-foreground">$1,000 value</span>). 
                This is exclusively for ambitious businesses ready to accelerate their growth.
              </p>
              
              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-foreground font-semibold">4.9/5</span>
                </div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
                <span className="text-muted-foreground">
                  Trusted by <span className="font-semibold text-foreground">283+</span> businesses
                </span>
              </div>
            </div>

            {/* Form Container */}
            <div className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
              <div className="p-6 md:p-10 lg:p-12">
                {currentStep > 1 && currentStep < 13 && (
                  <Button
                    variant="ghost"
                    onClick={prevStep}
                    className="mb-6 hover:bg-accent"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                )}
                
                <ProgressBar />
                
                <div className="mt-10">
                  {renderStep()}
                </div>
              </div>
              
              {/* Trust badges footer */}
              <div className="bg-accent/30 px-6 py-4 border-t border-border">
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Secure & Confidential</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>No Credit Card Required</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>100% Free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StrategySession = () => {
  return (
    <StrategySessionProvider>
      <FormContent />
    </StrategySessionProvider>
  );
};

export default StrategySession;
