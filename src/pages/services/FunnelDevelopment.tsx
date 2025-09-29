import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { CheckCircle, ArrowRight, TrendingUp, Target, BarChart3, Users, Zap } from "lucide-react";

export default function FunnelDevelopment() {
  const { openForm } = useMarketingForm();

  const features = [
    "Funnel strategy and mapping",
    "Landing page creation",
    "Email automation sequences",
    "Lead magnet development",
    "Conversion rate optimization",
    "Analytics and tracking setup",
    "A/B testing implementation",
    "Sales page optimization",
    "Thank you page creation",
    "Follow-up sequence design"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "250% Conversion Boost",
      description: "Average improvement in conversion rates with optimized funnels"
    },
    {
      icon: Target,
      title: "85% Lead Quality",
      description: "Higher quality leads that are more likely to convert to customers"
    },
    {
      icon: Zap,
      title: "3x Faster Sales",
      description: "Automated funnels that sell while you sleep"
    }
  ];

  const funnelTypes = [
    {
      title: "Lead Generation Funnel",
      description: "Capture and nurture potential customers with valuable content",
      stages: ["Traffic Source", "Landing Page", "Lead Magnet", "Email Sequence", "Sales Offer"]
    },
    {
      title: "Sales Funnel",
      description: "Direct visitors through a process that maximizes purchase probability",
      stages: ["Awareness", "Interest", "Consideration", "Purchase", "Retention"]
    },
    {
      title: "Webinar Funnel",
      description: "Build authority and sell high-ticket items through educational content",
      stages: ["Registration", "Reminder Sequence", "Webinar", "Pitch", "Follow-up"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Funnel Strategy",
      description: "Map out your customer journey and identify conversion opportunities."
    },
    {
      step: "02",
      title: "Page Creation",
      description: "Design and build high-converting landing pages and sales pages."
    },
    {
      step: "03",
      title: "Automation Setup",
      description: "Implement email sequences and automation workflows."
    },
    {
      step: "04",
      title: "Test & Optimize",
      description: "Continuously test and improve funnel performance."
    }
  ];

  const metrics = [
    { label: "Average Conversion Rate Increase", value: "250%" },
    { label: "Email Open Rate Improvement", value: "68%" },
    { label: "Customer Lifetime Value Boost", value: "180%" },
    { label: "Sales Cycle Reduction", value: "45%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MarketingFormModal />
      <SideTab />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Sales Funnels</Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
              Sales Funnel Development
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Design and optimize complete sales funnels that convert visitors into loyal customers with automated systems that work 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" onClick={openForm}>
                Build My Sales Funnel
              </Button>
              <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary">
                See Funnel Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Funnel Types Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Funnels That Drive Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We create custom sales funnels tailored to your business model and customer journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {funnelTypes.map((funnel, index) => (
              <Card key={index} className="p-8 hover:shadow-glow transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-4">{funnel.title}</h3>
                <p className="text-muted-foreground mb-6">{funnel.description}</p>
                <div className="space-y-3">
                  {funnel.stages.map((stage, stageIndex) => (
                    <div key={stageIndex} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {stageIndex + 1}
                      </div>
                      <span className="text-muted-foreground text-sm">{stage}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Why Sales Funnels Transform Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Turn your website from a digital brochure into a customer-generating machine.
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

      {/* Metrics Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Proven Funnel Performance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our data-driven approach delivers measurable improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-glow transition-all duration-300">
                <div className="text-4xl font-black text-primary mb-2">{metric.value}</div>
                <p className="text-muted-foreground text-sm">{metric.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8">
                Complete Funnel Development
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                From strategy to implementation, we build complete sales funnels that convert prospects into paying customers.
              </p>
              <Button variant="cta" size="lg" onClick={openForm}>
                Start Building Your Funnel
              </Button>
            </div>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">What's Included</h3>
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
              Our Funnel Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach that creates high-converting sales funnels.
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

      {/* Case Study Preview */}
      <section className="py-24 gradient-hero">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Funnel Success Story
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              See how we helped a coaching business scale from $10K to $100K monthly revenue.
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Online Coaching Business</h3>
                <p className="text-muted-foreground mb-6">
                  A fitness coach struggling to scale beyond 1-on-1 sessions needed a system to sell digital programs at scale.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">10x revenue increase in 6 months</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">2,500+ customers acquired</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">42% conversion rate on webinar funnel</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/50 p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-4">Funnel Architecture:</h4>
                <div className="space-y-3">
                  {["Lead Magnet: Free Workout Plan", "Email Nurture Sequence", "Webinar Registration", "Live Training & Pitch", "Sales Page & Checkout"].map((stage, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground text-sm">{stage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8">
            Ready to Build Your Sales Machine?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Let our funnel experts create an automated system that converts prospects into customers.
          </p>
          <Button variant="cta" size="xl" onClick={openForm}>
            <ArrowRight className="w-5 h-5 mr-2" />
            Get Your Funnel Strategy
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}