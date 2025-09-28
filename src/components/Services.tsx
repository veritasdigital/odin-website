import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Search, TrendingUp, Zap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Strategic Paid Advertising",
      subtitle: "Precision-targeted campaigns that convert prospects into profits",
      description: "We craft and optimize high-performance advertising campaigns across Google, Facebook, LinkedIn, and emerging platforms. Every dollar spent is tracked, measured, and optimized for maximum return.",
      features: [
        "Advanced audience targeting and segmentation",
        "Conversion rate optimization and A/B testing", 
        "Multi-platform campaign management",
        "Real-time performance monitoring and optimization"
      ]
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      subtitle: "Dominate search results and claim your digital territory",
      description: "Our SEO strategies are built for long-term dominance. We don't just improve rankings – we establish your brand as the undisputed authority in your industry.",
      features: [
        "Comprehensive keyword research and strategy",
        "Technical SEO and site optimization",
        "Content strategy and creation",
        "Local SEO and Google My Business optimization"
      ]
    },
    {
      icon: TrendingUp,
      title: "Conversion Optimization",
      subtitle: "Transform visitors into customers with surgical precision",
      description: "Your website should be a revenue-generating machine. We analyze user behavior, identify conversion barriers, and implement strategic improvements that dramatically increase your bottom line.",
      features: [
        "Landing page design and optimization",
        "User experience analysis and improvement",
        "Sales funnel development and optimization", 
        "Advanced analytics and conversion tracking"
      ]
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      subtitle: "Scale your growth with intelligent systems",
      description: "We build sophisticated marketing automation systems that nurture leads, retain customers, and scale your business without scaling your workload.",
      features: [
        "Email marketing automation and sequences",
        "Lead scoring and nurturing systems",
        "Customer retention and loyalty programs",
        "CRM integration and optimization"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-playfair">
            Strategic Marketing 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Deploy our comprehensive suite of performance-driven digital marketing solutions 
            engineered for exponential business growth and market dominance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 shadow-card hover:shadow-primary transition-smooth border-0 bg-card/80 backdrop-blur-sm group hover:scale-[1.02]"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center group-hover:animate-pulse-glow">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 font-playfair">{service.title}</h3>
                  <p className="text-primary font-semibold mb-4 font-inter">{service.subtitle}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed font-inter">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="group-hover:border-primary group-hover:text-primary font-inter font-medium">
                    Explore Solution
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};