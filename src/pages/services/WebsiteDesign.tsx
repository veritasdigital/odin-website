import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { CheckCircle, Globe, Smartphone, Zap, BarChart3, Users, Monitor } from "lucide-react";

export default function WebsiteDesign() {
  const { openForm } = useMarketingForm();

  const features = [
    "Custom responsive web design",
    "User experience optimization",
    "E-commerce development",
    "Content management systems",
    "Speed and performance optimization",
    "Mobile-first approach",
    "SEO-friendly architecture",
    "Security implementation",
    "Analytics integration",
    "Ongoing maintenance support"
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: "40% Better Conversions",
      description: "Our websites convert significantly better than industry averages"
    },
    {
      icon: Zap,
      title: "3x Faster Loading",
      description: "Optimized for speed with sub-3 second loading times"
    },
    {
      icon: Smartphone,
      title: "100% Mobile Ready",
      description: "Perfect user experience across all devices and screen sizes"
    }
  ];

  const services = [
    {
      title: "Business Websites",
      description: "Professional websites that establish credibility and drive leads",
      features: ["Custom Design", "Contact Forms", "SEO Optimization", "Content Management"]
    },
    {
      title: "E-commerce Stores",
      description: "Online stores built to maximize sales and customer satisfaction",
      features: ["Product Catalogs", "Payment Integration", "Inventory Management", "Order Tracking"]
    },
    {
      title: "Landing Pages",
      description: "High-converting pages designed for specific campaigns and goals",
      features: ["A/B Testing", "Conversion Optimization", "Campaign Integration", "Lead Capture"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We understand your business goals, target audience, and technical requirements."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create visual designs and interactive prototypes for your approval."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build your website with clean code and thorough testing across devices."
    },
    {
      step: "04",
      title: "Launch & Optimize",
      description: "Deploy your website and continuously optimize for better performance."
    }
  ];

  const technologies = [
    "WordPress", "Shopify", "React", "HTML5/CSS3", "JavaScript", "PHP", "WooCommerce", "Custom CMS"
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
            <Badge variant="secondary" className="mb-4">Web Development</Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
              Website Design & Development
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create stunning, conversion-optimized websites that drive results and provide exceptional user experiences across all devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" onClick={openForm}>
                Get Website Quote
              </Button>
              <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Website Solutions for Every Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From simple business websites to complex e-commerce platforms, we build solutions that grow with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-glow transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
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
              Websites That Deliver Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our websites aren't just beautiful - they're built to convert visitors into customers.
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
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8">
                Complete Website Development
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                From initial concept to ongoing maintenance, we provide everything you need for a successful online presence.
              </p>
              <Button variant="cta" size="lg" onClick={openForm}>
                Start Your Website Project
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
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach that ensures your website is delivered on time and exceeds expectations.
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

      {/* Technologies Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Modern Technologies We Use
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use the latest web technologies to build fast, secure, and scalable websites.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-glow transition-all duration-300">
                <span className="text-foreground font-medium">{tech}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Built for Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-glow transition-all duration-300">
              <Monitor className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-bold text-foreground mb-2">Responsive Design</h3>
              <p className="text-muted-foreground text-sm">Perfect on desktop, tablet, and mobile</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-glow transition-all duration-300">
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-bold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground text-sm">Optimized for speed and performance</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-glow transition-all duration-300">
              <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-bold text-foreground mb-2">SEO Optimized</h3>
              <p className="text-muted-foreground text-sm">Built with search engines in mind</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-hero">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Let our web development experts create a website that drives results for your business.
          </p>
          <Button variant="cta" size="xl" onClick={openForm}>
            <Globe className="w-5 h-5 mr-2" />
            Get Your Website Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}