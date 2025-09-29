import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { CheckCircle, Target, TrendingUp, Users, DollarSign, Clock, BarChart3 } from "lucide-react";

export default function GoogleAds() {
  const { openForm } = useMarketingForm();

  const features = [
    "Comprehensive keyword research and strategy",
    "Ad copy creation and A/B testing",
    "Bid management and optimization",
    "Landing page optimization",
    "Detailed performance reporting",
    "Conversion tracking setup",
    "Negative keyword management",
    "Ad extension optimization"
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Average 300% ROI",
      description: "Our clients see an average return of $3 for every $1 spent on Google Ads"
    },
    {
      icon: TrendingUp,
      title: "45% Lower CPC",
      description: "Strategic bid management reduces cost-per-click while maintaining quality traffic"
    },
    {
      icon: Target,
      title: "92% Higher CTR",
      description: "Compelling ad copy and precise targeting dramatically improve click-through rates"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Account Audit & Strategy",
      description: "We analyze your current performance and develop a comprehensive strategy tailored to your business goals."
    },
    {
      step: "02", 
      title: "Campaign Setup & Optimization",
      description: "Our experts build high-converting campaigns with optimized ad groups, keywords, and targeting settings."
    },
    {
      step: "03",
      title: "Launch & Monitor",
      description: "We launch your campaigns and continuously monitor performance, making real-time adjustments for optimal results."
    },
    {
      step: "04",
      title: "Report & Scale",
      description: "Regular performance reports and strategic scaling recommendations to maximize your advertising investment."
    }
  ];

  const caseStudy = {
    client: "Local Legal Firm",
    challenge: "Struggling to generate quality leads with previous Google Ads campaigns",
    solution: "Complete campaign restructure with landing page optimization and advanced targeting",
    results: [
      "450% increase in qualified leads",
      "62% reduction in cost per lead",
      "1,200+ new clients acquired"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MarketingFormModal />
      <SideTab />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Paid Advertising</Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
              Google Ads Management
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Drive targeted traffic and maximize ROI with expertly managed Google Ads campaigns that convert visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" onClick={openForm}>
                Get Free Google Ads Audit
              </Button>
              <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Proven Results That Speak for Themselves
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our Google Ads expertise has helped hundreds of businesses achieve exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-glow transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8">
                What's Included in Our Google Ads Management
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our comprehensive Google Ads management service covers every aspect of your campaigns to ensure maximum performance and ROI.
              </p>
              <Button variant="cta" size="lg" onClick={openForm}>
                Start Your Campaign Today
              </Button>
            </div>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Service Features</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Our Proven Google Ads Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach that has delivered consistent results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-glow transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 gradient-hero">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Client Success Story
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              See how we transformed a struggling law firm's Google Ads performance.
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{caseStudy.client}</h3>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Results:</h4>
                <div className="space-y-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="mt-6" onClick={openForm}>
                  Get Similar Results
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8">
            Ready to Dominate Google Ads?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Let our Google Ads experts create campaigns that drive qualified traffic and maximize your ROI.
          </p>
          <Button variant="cta" size="xl" onClick={openForm}>
            <Target className="w-5 h-5 mr-2" />
            Get Your Free Google Ads Strategy
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}