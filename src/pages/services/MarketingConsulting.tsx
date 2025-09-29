import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { CheckCircle, Lightbulb, TrendingUp, Target, BarChart3, Users, Brain } from "lucide-react";

export default function MarketingConsulting() {
  const { openForm } = useMarketingForm();

  const features = [
    "Marketing strategy development",
    "Competitive analysis",
    "Growth opportunity identification",
    "Campaign planning and execution",
    "Team training and workshops",
    "Ongoing strategic support",
    "Performance auditing",
    "ROI optimization",
    "Market research",
    "Custom growth roadmaps"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "180% Faster Growth",
      description: "Clients achieve accelerated growth with strategic guidance"
    },
    {
      icon: Target,
      title: "85% Strategic Clarity",
      description: "Clear direction and prioritized action plans for maximum impact"
    },
    {
      icon: Brain,
      title: "20+ Years Experience",
      description: "Proven expertise across industries and business models"
    }
  ];

  const consultingAreas = [
    {
      title: "Growth Strategy",
      description: "Develop comprehensive strategies for sustainable business growth",
      topics: ["Market Analysis", "Customer Segmentation", "Growth Channels", "Competitive Positioning"]
    },
    {
      title: "Digital Transformation",
      description: "Guide your transition to digital-first marketing approaches",
      topics: ["Technology Stack", "Process Optimization", "Team Structure", "Change Management"]
    },
    {
      title: "Performance Optimization",
      description: "Identify and fix bottlenecks in your current marketing efforts",
      topics: ["Conversion Analysis", "Campaign Audits", "ROI Improvement", "Metric Tracking"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Business Assessment",
      description: "Comprehensive analysis of your current marketing performance and business goals."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create custom marketing strategies tailored to your specific situation."
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "Develop detailed action plans with timelines and resource requirements."
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Provide continuous guidance and optimization as strategies are executed."
    }
  ];

  const packages = [
    {
      name: "Strategic Review",
      duration: "One-time",
      description: "Comprehensive audit and strategic recommendations",
      features: [
        "Marketing audit",
        "Competitive analysis",
        "Strategic roadmap",
        "Implementation guide"
      ]
    },
    {
      name: "Growth Partnership",
      duration: "3-6 months",
      description: "Ongoing strategic support and implementation guidance",
      features: [
        "Monthly strategy sessions",
        "Quarterly reviews",
        "Team training",
        "Performance monitoring"
      ],
      popular: true
    },
    {
      name: "Executive Advisory",
      duration: "12+ months",
      description: "Long-term strategic partnership for sustained growth",
      features: [
        "Weekly consultations",
        "Strategic planning",
        "Team development",
        "Board-level reporting"
      ]
    }
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
            <Badge variant="secondary" className="mb-4">Strategic Consulting</Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
              Marketing Consulting
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Get strategic guidance and expert advice to accelerate your marketing success with proven methodologies and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" onClick={openForm}>
                Book Strategy Session
              </Button>
              <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Areas Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Strategic Consulting Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide expert guidance across all aspects of digital marketing strategy and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultingAreas.map((area, index) => (
              <Card key={index} className="p-8 hover:shadow-glow transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-4">{area.title}</h3>
                <p className="text-muted-foreground mb-6">{area.description}</p>
                <div className="space-y-2">
                  {area.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground text-sm">{topic}</span>
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
              Why Choose Our Consulting
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leverage decades of marketing expertise to accelerate your business growth.
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

      {/* Packages Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Consulting Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the level of strategic support that fits your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`p-8 hover:shadow-glow transition-all duration-300 ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
                  <Badge className="mb-4 bg-primary text-primary-foreground">Most Popular</Badge>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-primary font-semibold mb-4">{pkg.duration}</p>
                <p className="text-muted-foreground mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={pkg.popular ? "cta" : "outline"} 
                  className="w-full" 
                  onClick={openForm}
                >
                  Get Started
                </Button>
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
                Comprehensive Strategic Support
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our consulting services provide you with the strategic insights and actionable guidance needed to achieve your marketing goals.
              </p>
              <Button variant="cta" size="lg" onClick={openForm}>
                Schedule Consultation
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
              Our Consulting Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that delivers strategic clarity and actionable insights.
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

      {/* Success Metrics */}
      <section className="py-24 gradient-hero">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Consulting Impact
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our strategic guidance delivers measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="text-4xl font-black text-primary mb-2">500+</div>
              <p className="text-muted-foreground text-sm">Businesses Consulted</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-black text-primary mb-2">180%</div>
              <p className="text-muted-foreground text-sm">Average Growth Increase</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-black text-primary mb-2">$50M+</div>
              <p className="text-muted-foreground text-sm">Revenue Generated</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-black text-primary mb-2">95%</div>
              <p className="text-muted-foreground text-sm">Client Satisfaction</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Let our marketing experts provide the strategic guidance you need to achieve breakthrough results.
          </p>
          <Button variant="cta" size="xl" onClick={openForm}>
            <Lightbulb className="w-5 h-5 mr-2" />
            Book Your Strategy Session
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}