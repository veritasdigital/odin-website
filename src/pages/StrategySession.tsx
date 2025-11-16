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
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] via-background to-[#f8f9fa]">
      <Helmet>
        <title>Free 30-Minute Growth Strategy Session | Odin Digital</title>
        <meta
          name="description"
          content="Claim your 100% FREE, no-obligation 30-minute growth strategy call. Get a custom roadmap to accelerate your business growth."
        />
      </Helmet>
      
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-20 md:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12 md:mb-16 space-y-6 animate-fade-in">
              <div className="inline-block">
                <div className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/30">
                  Limited Spots Available
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Free 30-Minute
                <br />
                Growth Strategy Session
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Claim your <span className="font-semibold text-foreground">100% FREE</span>, no-obligation 30-minute growth strategy call 
                (a <span className="font-semibold text-foreground">$1,000 value</span>). 
                This is exclusively for ambitious businesses ready to accelerate their growth.
              </p>
              
              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-foreground font-semibold text-lg">4.9/5</span>
                </div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
                <span className="text-muted-foreground text-base">
                  Trusted by <span className="font-semibold text-foreground">283+</span> businesses
                </span>
              </div>
            </div>

            {/* Form Container */}
            <div className="max-w-[600px] mx-auto bg-white rounded-2xl overflow-hidden animate-scale-in" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 20px rgba(0, 0, 0, 0.1)' }}>
              <div className="p-8 md:p-12">
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
              <div className="px-8 py-6 mt-8">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Secure & Confidential</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L18 12" transform="rotate(45 12 12)" />
                    </svg>
                    <span>No Credit Card Required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
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
