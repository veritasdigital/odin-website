import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import { AsSeenIn } from "@/components/AsSeenIn";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { CheckCircle, ArrowRight, Users, TrendingUp, Target, Megaphone, Globe, Smartphone } from "lucide-react";

export default function Services() {
  const { openForm } = useMarketingForm();

  const services = [
    {
      id: "google-ads",
      icon: Target,
      title: "Google Ads Management",
      description: "Drive targeted traffic and maximize ROI with expertly managed Google Ads campaigns.",
      features: [
        "Comprehensive keyword research and strategy",
        "Ad copy creation and A/B testing",
        "Bid management and optimization",
        "Landing page optimization",
        "Detailed performance reporting",
        "Conversion tracking setup"
      ],
      benefits: "Average 300% ROI increase within 90 days"
    },
    {
      id: "seo",
      icon: TrendingUp,
      title: "Search Engine Optimization",
      description: "Improve your organic search rankings and drive sustainable long-term traffic growth.",
      features: [
        "Technical SEO audits and fixes",
        "Keyword research and content strategy",
        "On-page optimization",
        "Link building campaigns",
        "Local SEO optimization",
        "Monthly progress reports"
      ],
      benefits: "Clients see 150% organic traffic increase in 6 months"
    },
    {
      id: "social-media",
      icon: Users,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage your audience across all major social platforms.",
      features: [
        "Content strategy development",
        "Post creation and scheduling",
        "Community management",
        "Paid social advertising",
        "Influencer partnerships",
        "Social media analytics"
      ],
      benefits: "Average 200% follower growth and 5x engagement increase"
    },
    {
      id: "website-design",
      icon: Globe,
      title: "Website Design & Development",
      description: "Create stunning, conversion-optimized websites that drive results for your business.",
      features: [
        "Custom responsive web design",
        "User experience optimization",
        "E-commerce development",
        "Content management systems",
        "Speed and performance optimization",
        "Mobile-first approach"
      ],
      benefits: "Websites that convert 40% better than industry average"
    },
    {
      id: "funnel-development",
      icon: ArrowRight,
      title: "Sales Funnel Development",
      description: "Design and optimize complete sales funnels that convert visitors into loyal customers.",
      features: [
        "Funnel strategy and mapping",
        "Landing page creation",
        "Email automation sequences",
        "Lead magnet development",
        "Conversion rate optimization",
        "Analytics and tracking setup"
      ],
      benefits: "Average 250% improvement in conversion rates"
    },
    {
      id: "marketing-consulting",
      icon: Megaphone,
      title: "Marketing Consulting",
      description: "Get strategic guidance and expert advice to accelerate your marketing success.",
      features: [
        "Marketing strategy development",
        "Competitive analysis",
        "Growth opportunity identification",
        "Campaign planning and execution",
        "Team training and workshops",
        "Ongoing strategic support"
      ],
      benefits: "Clients achieve 180% faster growth with strategic guidance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MarketingFormModal />
      <SideTab />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            Our Digital Marketing Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions designed to drive growth, increase revenue, and establish your brand as the market leader.
          </p>
          <Button variant="cta" size="xl" onClick={openForm}>
            Get Your Free Strategy Session
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} id={service.id} className="p-8 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-lg">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-4">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg mb-6">
                    <p className="text-primary font-semibold">{service.benefits}</p>
                  </div>
                  
                  <Button variant="outline" className="w-full" onClick={openForm}>
                    Learn More About This Service
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* As Seen In Section */}
      <AsSeenIn />

      {/* CTA Section */}
      <section className="py-24 gradient-hero">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Let's discuss which services will drive the biggest impact for your business. Schedule your free strategy session today.
          </p>
          <Button variant="cta" size="xl" onClick={openForm}>
            Schedule My Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}