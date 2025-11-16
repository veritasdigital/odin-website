import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
      <Header />
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Free 30-Minute Growth Strategy Session
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Claim your 100% FREE, no-obligation 30-minute growth strategy call (a $1,000 value). 
              This is exclusively for ambitious businesses ready to accelerate their growth. 
              If that's you, let's create your custom roadmap to success.
            </p>
            
            {/* Social Proof */}
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-foreground font-medium">
                4.9 stars from 283+ happy clients
              </span>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-10 shadow-lg">
            {currentStep > 1 && currentStep < 13 && (
              <Button
                variant="ghost"
                onClick={prevStep}
                className="mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            
            <ProgressBar />
            
            <div className="mt-8">
              {renderStep()}
            </div>
          </div>
        </div>
      </div>

      <Footer />
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
