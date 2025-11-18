import { useState, useEffect } from "react";
import { StrategySessionProvider, useStrategySession } from "@/contexts/StrategySessionContext";
import { DotProgressIndicator } from "@/components/strategy-session/DotProgressIndicator";
import { Step1Name } from "@/components/strategy-session/Step1Name";
import { Step2Email } from "@/components/strategy-session/Step2Email";
import { Step3BusinessGoal } from "@/components/strategy-session/Step3BusinessGoal";
import { Step4MonthlyRevenue } from "@/components/strategy-session/Step4MonthlyRevenue";
import { Step5WebsiteUrl } from "@/components/strategy-session/Step5WebsiteUrl";
import { Step6BiggestChallenge } from "@/components/strategy-session/Step6BiggestChallenge";
import { Step7CurrentMarketing } from "@/components/strategy-session/Step7CurrentMarketing";
import { Step8Timeline } from "@/components/strategy-session/Step8Timeline";
import { Step9FinalBooking } from "@/components/strategy-session/Step9FinalBooking";
import { Star, ArrowLeft, Shield, CreditCard, Tag, CheckCircle2, TrendingUp, Target, BarChart3, Zap, ChevronDown, ArrowUp, Gift, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useExitIntent } from "@/hooks/useExitIntent";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const FormContent = () => {
  const { currentStep, prevStep } = useStrategySession();
  const [quizStarted, setQuizStarted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { shouldShow, resetExitIntent } = useExitIntent({ threshold: 20, maxDisplays: 1 });
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    if (shouldShow && !quizStarted) {
      setShowExitPopup(true);
    }
  }, [shouldShow, quizStarted]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = (scrollTop / scrollableHeight) * 100;
      
      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    setQuizStarted(true);
    setShowExitPopup(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleExitPopupClaim = () => {
    setShowExitPopup(false);
    scrollToForm();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1Name />;
      case 2: return <Step2Email />;
      case 3: return <Step3BusinessGoal />;
      case 4: return <Step4MonthlyRevenue />;
      case 5: return <Step5WebsiteUrl />;
      case 6: return <Step6BiggestChallenge />;
      case 7: return <Step7CurrentMarketing />;
      case 8: return <Step8Timeline />;
      case 9: return <Step9FinalBooking />;
      default: return <Step1Name />;
    }
  };

  return (
    <>
      {/* Exit Intent Popup */}
      <Dialog open={showExitPopup} onOpenChange={setShowExitPopup}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-4xl md:text-5xl font-black text-center mb-6" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
              HOLD UP THERE, TIGER.
            </DialogTitle>
            <DialogDescription className="text-center text-lg space-y-6">
              <p className="text-muted-foreground text-xl">
                Alright let's try this again, shall we? Look, it takes less than 2-minutes to fill out this form...*focus*... and then you'll get your hot little hands on a free marketing blueprint ($1,000 value).
              </p>

              {/* Funny Wait Meme GIF */}
              <div className="flex justify-center my-6">
                <img 
                  src="https://media.giphy.com/media/l0IypeKl9NJhPFMrK/giphy.gif" 
                  alt="Wait meme"
                  className="rounded-xl shadow-lg max-w-md w-full"
                />
              </div>

              <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-center gap-3 text-primary font-bold text-xl">
                  <Gift className="w-6 h-6" />
                  <span>SPECIAL BONUS FOR ACTING NOW</span>
                </div>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">
                      <span className="font-bold">FREE Competitive Analysis Report</span> ($500 value) - See exactly how you stack up against your top 3 competitors
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">
                      <span className="font-bold">Priority Scheduling</span> - Get a call slot within 48 hours instead of the standard 5-7 day wait
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">
                      <span className="font-bold">Extended 45-Minute Session</span> - Extra 15 minutes to dive deeper into your specific challenges
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <Button
                  onClick={handleExitPopupClaim}
                  size="lg"
                  className="w-full px-10 py-8 text-2xl font-black shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
                >
                  GIVE ME THE $1,000 STRATEGY FOR FREE
                </Button>

                <p className="text-xs text-muted-foreground italic">
                  Privacy Policy: There is a special place in hell for spammers and we never wanna visit.
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Header />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 pt-20">
        {/* Scroll Progress Bar */}
        {!quizStarted && (
          <div className="fixed top-20 left-0 right-0 z-50 h-1 bg-muted">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        )}

        {/* Scroll to Top Button */}
        {!quizStarted && showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-fade-in"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}

        <Helmet>
          <title>Get Your Free Digital Growth Blueprint ($1,000 Value) | Odin Digital</title>
          <meta
            name="description"
            content="Get a custom, actionable digital growth plan in a 100% free 30-minute strategy call. Proven strategies that have generated over $574 million for our clients."
          />
        </Helmet>
        
        {!quizStarted ? (
          <div className="min-h-screen">{/* Hero Section */}
          {/* Hero Section */}
          <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
                <div className="inline-block">
                  <div className="bg-primary/10 text-primary px-6 py-2.5 rounded-full text-sm font-semibold border border-primary/30 shadow-lg">
                    Limited Spots Available
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Get Your Free, Custom<br />
                  <span className="text-primary">Digital Growth Blueprint</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  (A <span className="text-primary font-bold">$1,000 Value</span>)
                </p>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  In this <span className="font-semibold text-foreground">100% free, no-obligation 30-minute strategy call</span>, we'll build you a custom, actionable plan to hit your revenue goals using the same proven strategies that have generated over <span className="font-semibold text-foreground">$574 million</span> for our clients.
                </p>
                
                <div className="pt-6">
                  <Button
                    onClick={scrollToForm}
                    size="lg"
                    className="px-12 py-7 text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    Claim My Free Growth Blueprint →
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-3 pt-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-foreground font-semibold text-lg">4.9/5 Stars</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">Trusted by <span className="font-semibold text-foreground">283+</span> Ambitious Businesses</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 max-w-2xl mx-auto">
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 border border-border/50">
                    <Tag className="w-6 h-6 text-primary" />
                    <span className="text-sm font-medium text-center">100% Free</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 border border-border/50">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <span className="text-sm font-medium text-center">No Obligation</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 border border-border/50">
                    <Shield className="w-6 h-6 text-primary" />
                    <span className="text-sm font-medium text-center">Secure & Confidential</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 border border-border/50">
                    <CreditCard className="w-6 h-6 text-primary" />
                    <span className="text-sm font-medium text-center">No Credit Card</span>
                  </div>
                </div>

                {/* Animated Scroll Indicator */}
                <div className="flex flex-col items-center gap-2 pt-12 animate-fade-in">
                  <span className="text-sm text-muted-foreground">Scroll to learn more</span>
                  <div className="animate-bounce">
                    <ChevronDown className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Problem & Agitation Section */}
          <section className="py-20 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-12">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center leading-tight">
                  Are You Tired of Marketing<br />That Doesn't Deliver?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Pain Point Cards */}
                  <div className="bg-card p-8 rounded-xl border border-border space-y-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl">😤</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Running Campaigns, Seeing No Growth</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You're running campaigns across multiple platforms, but you're not seeing the growth you expected. Marketing feels fragmented with no clear strategy.
                    </p>
                  </div>

                  <div className="bg-card p-8 rounded-xl border border-border space-y-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl">🔥</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Burning Cash, No Clear ROI</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You have no idea what's actually working and what's just burning cash. Every day without clarity is another day of wasted ad spend.
                    </p>
                  </div>

                  <div className="bg-card p-8 rounded-xl border border-border space-y-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl">📉</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Missed Growth Opportunities</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Without a data-driven plan, you're missing critical opportunities to scale. Lost revenue and lost momentum compound every single day.
                    </p>
                  </div>

                  <div className="bg-card p-8 rounded-xl border border-border space-y-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl">😵</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Constant Frustration & Uncertainty</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The constant frustration of not knowing how to scale to the next level is holding you back from achieving your true potential.
                    </p>
                  </div>
                </div>

                <div className="text-center space-y-6 pt-8">
                  <div className="inline-block px-8 py-4 bg-primary/10 border-2 border-primary/30 rounded-xl">
                    <p className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Does this sound familiar?
                    </p>
                  </div>
                  
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    If you're ready to <span className="font-semibold text-foreground">break free from this cycle</span> and finally get the clarity and results you deserve, you're in the right place.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Solution & Value Proposition Section */}
          <section className="py-20 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                    Your Custom-Built Roadmap to Scalable Growth
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    In just 30 minutes, we will personally map out your path to achieving your revenue targets. This isn't a generic sales pitch. This is a real, actionable strategy session where you'll walk away with clarity, direction, and a plan you can implement immediately—whether you work with us or not.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                    Here's Exactly What You'll Walk Away With:
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center">
                      <div className="flex flex-col items-center gap-4">
                        <Target className="w-8 h-8 text-primary flex-shrink-0" />
                        <div className="space-y-2">
                          <h4 className="text-xl font-bold text-foreground">A Deep-Dive Analysis of Your Current Marketing</h4>
                          <p className="text-muted-foreground">
                            We'll review your existing campaigns, website, and overall digital presence to identify what's working, what's not, and where the biggest opportunities lie.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center">
                      <div className="flex flex-col items-center gap-4">
                        <TrendingUp className="w-8 h-8 text-primary flex-shrink-0" />
                        <div className="space-y-2">
                          <h4 className="text-xl font-bold text-foreground">Your #1 Growth Lever Identified</h4>
                          <p className="text-muted-foreground">
                            We'll pinpoint the single biggest opportunity for you to increase revenue right now. This is the one thing that will have the most immediate impact on your bottom line.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center">
                      <div className="flex flex-col items-center gap-4">
                        <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
                        <div className="space-y-2">
                          <h4 className="text-xl font-bold text-foreground">An Actionable 3-Step Growth Plan</h4>
                          <p className="text-muted-foreground">
                            You'll leave with a clear, step-by-step plan that you can start implementing the moment you hang up the phone. No fluff, no theory—just practical, proven tactics.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center">
                      <div className="flex flex-col items-center gap-4">
                        <BarChart3 className="w-8 h-8 text-primary flex-shrink-0" />
                        <div className="space-y-2">
                          <h4 className="text-xl font-bold text-foreground">Transparent ROI Projection</h4>
                          <p className="text-muted-foreground">
                            We'll show you the potential return on investment you could expect from our recommended strategies, backed by real data from our 283+ successful campaigns.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg md:col-span-2 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <Zap className="w-8 h-8 text-primary flex-shrink-0" />
                        <div className="space-y-2">
                          <h4 className="text-xl font-bold text-foreground">Zero Pressure, Maximum Value</h4>
                          <p className="text-muted-foreground">
                            At the end of the call, you decide your next move. You can implement the plan yourself, or if it's a good fit, we can discuss working together. There's absolutely no obligation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-8">
                  <Button
                    onClick={scrollToForm}
                    size="lg"
                    className="px-12 py-7 text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    Book My Free Strategy Session →
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof & Results Section */}
          <section className="py-20 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                    Don't Just Take Our Word For It. See The Results.
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    We've helped 283+ businesses across dozens of industries achieve extraordinary growth. Here's what real clients have accomplished working with us:
                  </p>
                </div>

                {/* Client Success Stories */}
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl space-y-4 text-center">
                    <div className="flex gap-1 mb-4 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-primary">292% Revenue Growth</h3>
                    <p className="text-muted-foreground italic">
                      "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with."
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="font-semibold text-foreground">Fabienne Costa</p>
                      <p className="text-sm text-muted-foreground">Founder, YCL Jewels, Gold Coast, Australia</p>
                    </div>
                  </div>

                  <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl space-y-4 text-center">
                    <div className="flex gap-1 mb-4 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-primary">$100k First Month + 5x ROI</h3>
                    <p className="text-muted-foreground italic">
                      "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys and can't recommend them highly enough."
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="font-semibold text-foreground">Liam C</p>
                      <p className="text-sm text-muted-foreground">Founder, Krush Organics, Sydney, Australia</p>
                    </div>
                  </div>

                  <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl space-y-4 text-center">
                    <div className="flex gap-1 mb-4 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-primary">From $20k to $100k+ Monthly Revenue</h3>
                    <p className="text-muted-foreground italic">
                      "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month. He went way beyond just handling SEO and ads - he dropped so much knowledge on me about pricing, funnels, and how to actually structure things to scale."
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="font-semibold text-foreground">Evan Tsaboukos</p>
                      <p className="text-sm text-muted-foreground">Founder, Imperial Wealth, Melbourne, Australia</p>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid md:grid-cols-4 gap-6 pt-8">
                  <div className="text-center p-6 bg-card rounded-xl border border-border">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$574M+</div>
                    <div className="text-sm font-semibold text-foreground mb-1">Client Revenue Generated</div>
                    <div className="text-xs text-muted-foreground">Verified revenue contribution across all client campaigns</div>
                  </div>
                  
                  <div className="text-center p-6 bg-card rounded-xl border border-border">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">540%</div>
                    <div className="text-sm font-semibold text-foreground mb-1">Average ROI</div>
                    <div className="text-xs text-muted-foreground">For every $1 in ad spend, clients see $5.40 back</div>
                  </div>
                  
                  <div className="text-center p-6 bg-card rounded-xl border border-border">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
                    <div className="text-sm font-semibold text-foreground mb-1">Client Retention Rate</div>
                    <div className="text-xs text-muted-foreground">No lock-in contracts—clients stay because they love us</div>
                  </div>
                  
                  <div className="text-center p-6 bg-card rounded-xl border border-border">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">283+</div>
                    <div className="text-sm font-semibold text-foreground mb-1">Successful Campaigns</div>
                    <div className="text-xs text-muted-foreground">Across dozens of industries and 6 countries</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-20 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-12">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground">
                  Your Path to Clarity in 3 Simple Steps
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="relative text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Book Your Call</h3>
                    <p className="text-muted-foreground">
                      Fill out the short form below to tell us about your business, your goals, and your biggest challenges. This helps us prepare a truly customized strategy for your session—so we can hit the ground running and maximize the value of our time together.
                    </p>
                  </div>

                  <div className="relative text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Get Your Custom Blueprint</h3>
                    <p className="text-muted-foreground">
                      Join a 30-minute strategy call where one of our senior strategists will present your personalized growth plan. We'll walk you through our analysis, show you the opportunities we've identified, and answer all your questions. This is a real working session, not a sales pitch.
                    </p>
                  </div>

                  <div className="relative text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Decide Your Next Move</h3>
                    <p className="text-muted-foreground">
                      You're in control. At the end of the call, you can take the plan and implement it yourself, or if it's a good fit and you'd like our help, we can discuss what working together might look like. There's zero pressure. Our goal is to provide massive value, regardless of what you decide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who This Is For Section */}
          <section className="py-20 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground">
                  Is This Strategy Session Right For You?
                </h2>

                <p className="text-lg text-muted-foreground text-center">
                  This session is specifically designed for ambitious business owners and marketing leaders who are serious about growth. It's perfect for you if:
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start p-4 bg-card rounded-xl border border-border">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">
                      You're currently doing at least <span className="font-semibold text-foreground">$25,000/month in revenue</span> and ready to scale to the next level.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start p-4 bg-card rounded-xl border border-border">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">
                      You're frustrated with your current marketing results and know there's <span className="font-semibold text-foreground">untapped potential</span> in your business.
                    </p>
                  </div>

                  <div className="flex gap-4 items-start p-4 bg-card rounded-xl border border-border">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">
                      You're willing to invest in proven strategies that deliver <span className="font-semibold text-foreground">measurable ROI</span> (not just "brand awareness").
                    </p>
                  </div>

                  <div className="flex gap-4 items-start p-4 bg-card rounded-xl border border-border">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">
                      You value <span className="font-semibold text-foreground">transparency, data-driven decisions</span>, and a partnership approach over the typical "agency runaround."
                    </p>
                  </div>
                </div>

                <div className="pt-8 space-y-4">
                  <p className="text-lg font-semibold text-foreground text-center">
                    This session is NOT for you if:
                  </p>

                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex gap-3 items-start">
                      <span className="text-destructive">✗</span>
                      <span>You're looking for a quick fix or magic bullet.</span>
                    </p>
                    <p className="flex gap-3 items-start">
                      <span className="text-destructive">✗</span>
                      <span>You're not willing to invest in your marketing growth.</span>
                    </p>
                    <p className="flex gap-3 items-start">
                      <span className="text-destructive">✗</span>
                      <span>You're just "shopping around" with no intention of taking action.</span>
                    </p>
                  </div>
                </div>

                <p className="text-center text-lg font-semibold text-foreground pt-6">
                  We only work with businesses that are truly committed to growth. If that's you, let's talk.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                  Ready to Unlock Your Growth Potential?
                </h2>
                
                <p className="text-lg md:text-xl text-muted-foreground">
                  <span className="font-semibold text-foreground">Limited spots available.</span> We only take on a select number of strategy sessions each week to ensure we can deliver exceptional value to every business we work with.
                </p>

                <p className="text-lg text-muted-foreground">
                  Fill out the form below to claim your <span className="font-semibold text-foreground">FREE, no-obligation strategy session</span>. It takes less than 2 minutes.
                </p>

                <div className="pt-6">
                  <Button
                    onClick={scrollToForm}
                    size="lg"
                    className="px-12 py-7 text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    Book My Strategy Session Now →
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <section className="py-16 bg-muted/30 border-t border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Why We're Different</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Unlike most agencies, we don't lock you into long-term contracts. We don't hide behind confusing jargon. And we don't just talk about results—we guarantee them. Our 95% client retention rate speaks for itself. Our clients stay because they want to, not because they have to.
                  </p>
                  <p className="text-xl font-semibold text-primary pt-4">
                    Join 283+ businesses that have transformed their marketing with Odin Digital.
                  </p>
                </div>

                {/* FAQ Section */}
                <div className="space-y-6 pt-8">
                  <h3 className="text-2xl font-bold text-center text-foreground mb-8">Frequently Asked Questions</h3>
                  
                  <div className="space-y-4">
                    <div className="p-6 bg-card rounded-xl border border-border">
                      <h4 className="font-bold text-foreground mb-2">Q: Is this really free?</h4>
                      <p className="text-muted-foreground">A: Yes, 100% free. No credit card required. No hidden fees. We provide this as a way to demonstrate our expertise and help ambitious businesses like yours.</p>
                    </div>

                    <div className="p-6 bg-card rounded-xl border border-border">
                      <h4 className="font-bold text-foreground mb-2">Q: Will you just try to sell me something?</h4>
                      <p className="text-muted-foreground">A: No. This is a real strategy session where we'll provide genuine value regardless of whether we work together. At the end, if it's a good fit, we'll discuss next steps. But there's zero pressure.</p>
                    </div>

                    <div className="p-6 bg-card rounded-xl border border-border">
                      <h4 className="font-bold text-foreground mb-2">Q: How long is the session?</h4>
                      <p className="text-muted-foreground">A: 30 minutes. We respect your time and keep things focused and actionable.</p>
                    </div>

                    <div className="p-6 bg-card rounded-xl border border-border">
                      <h4 className="font-bold text-foreground mb-2">Q: Who will I be speaking with?</h4>
                      <p className="text-muted-foreground">A: You'll speak with one of our senior strategists who has extensive experience in your industry. We don't pass you off to junior team members.</p>
                    </div>

                    <div className="p-6 bg-card rounded-xl border border-border">
                      <h4 className="font-bold text-foreground mb-2">Q: What if I'm not ready to work with an agency?</h4>
                      <p className="text-muted-foreground">A: That's totally fine! You'll still walk away with a valuable plan you can implement yourself. We're here to help, regardless of what you decide.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <Footer />
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <DotProgressIndicator />
          
          <div className="w-full max-w-[600px] mx-auto">
            {currentStep > 1 && currentStep < 9 && (
              <Button
                variant="ghost"
                onClick={prevStep}
                className="mb-6 hover:bg-accent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            
            <div className="mt-10">
              {renderStep()}
            </div>
          </div>
        </div>
      )}
      </div>
    </>
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
