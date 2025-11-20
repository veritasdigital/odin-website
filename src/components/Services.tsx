import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Search, TrendingUp, Zap } from "lucide-react";
import { PictureImage } from "@/components/PictureImage";
import brandIconVibrant from "@/assets/brand-icon-vibrant.png";
import brandIconSubtle from "@/assets/brand-icon-subtle.png";

export const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Strategic Paid Advertising",
      subtitle: "Performance-focused campaigns designed for optimal return on investment",
      description: "We develop and manage sophisticated advertising campaigns across Google Ads, Facebook, LinkedIn, and emerging platforms. Our approach emphasizes precise targeting, continuous optimization, and transparent performance tracking to maximize your marketing investment.",
      features: [
        "Advanced audience segmentation and targeting strategies",
        "Comprehensive A/B testing and conversion rate optimization",
        "Multi-platform campaign coordination and management",
        "Real-time performance monitoring and strategic adjustments"
      ],
      url: "/services/google-ads"
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      subtitle: "Long-term organic visibility and authority building",
      description: "Our SEO strategies focus on establishing your business as a recognized authority in your industry while driving qualified organic traffic. We implement comprehensive optimization techniques that deliver sustainable results over time.",
      features: [
        "In-depth keyword research and competitive analysis",
        "Technical SEO audits and website optimization",
        "Content strategy development and implementation",
        "Local SEO and Google Business Profile optimization"
      ],
      url: "/services/seo"
    },
    {
      icon: TrendingUp,
      title: "Conversion Rate Optimization",
      subtitle: "Systematic improvement of website performance and user experience",
      description: "We analyze user behavior patterns and implement data-driven improvements to increase conversion rates and maximize the value of your existing traffic. Our systematic approach identifies and addresses conversion barriers throughout the customer journey.",
      features: [
        "Landing page design and optimization testing",
        "User experience analysis and improvement recommendations",
        "Sales funnel development and optimization",
        "Advanced analytics implementation and conversion tracking"
      ],
      url: "/services/funnel-development"
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      subtitle: "Scalable systems for lead nurturing and customer retention",
      description: "We design and implement sophisticated marketing automation systems that nurture leads, retain customers, and scale your marketing efforts efficiently. Our automation strategies help you maintain consistent communication while reducing manual workload.",
      features: [
        "Email marketing automation and lead nurturing sequences",
        "Lead scoring and qualification systems",
        "Customer retention and loyalty program development",
        "CRM integration and workflow optimization"
      ],
      url: "/services/marketing-consulting"
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Brand Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src={brandIconSubtle} 
          alt="" 
          className="absolute top-10 right-10 w-64 h-64 opacity-20 animate-[spin_30s_linear_infinite]"
        />
        <img 
          src={brandIconSubtle} 
          alt="" 
          className="absolute bottom-20 left-10 w-48 h-48 opacity-15 animate-[spin_35s_linear_infinite_reverse]"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
            Comprehensive Digital Marketing Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative p-8 border border-charcoal/10 hover:border-primary/20 transition-all duration-300 overflow-hidden">
              {/* Subtle brand icon on hover */}
              <div className="absolute top-4 right-4 w-16 h-16 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <PictureImage src={brandIconVibrant} alt="" className="w-full h-full animate-[spin_8s_linear_infinite]" loading="lazy" />
              </div>
              
              <div className="relative z-10 flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-charcoal mb-2">{service.title}</h3>
                  <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-wider">
                    {service.subtitle}
                  </p>
                  <p className="text-charcoal/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-charcoal/70 flex items-start">
                        <span className="text-primary mr-2 mt-1.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="default" size="sm" asChild>
                    <a href={service.url}>Learn More</a>
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