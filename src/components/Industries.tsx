import { Monitor, ShoppingCart, Briefcase, Heart, Factory, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Industries = () => {
  const industries = [
    {
      icon: Monitor,
      title: "Technology & Software Solutions",
      description: "Specialized strategies for technology companies, focusing on lead generation, customer acquisition optimization, and long-term value maximization for subscription-based business models."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Advanced digital marketing strategies for online retailers, including sophisticated shopping campaigns, dynamic remarketing, and conversion optimization techniques that drive sales growth and increase average order values."
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Lead generation and thought leadership strategies designed to position service providers as industry authorities while driving qualified prospect engagement and high-value client acquisition."
    },
    {
      icon: Heart,
      title: "Healthcare & Medical Services",
      description: "Compliant marketing strategies that build patient trust, provide educational value, and drive qualified appointment bookings while adhering to industry regulations and best practices."
    },
    {
      icon: Factory,
      title: "Manufacturing & B2B",
      description: "Long-cycle sales strategies that effectively nurture prospects through complex buying processes and generate qualified enterprise opportunities for industrial and B2B companies."
    },
    {
      icon: DollarSign,
      title: "Financial Services & Real Estate",
      description: "Specialized marketing approaches for regulated industries, focusing on local market penetration and lead nurturing systems that convert prospects into clients in competitive markets."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
            Industry Expertise and Specialization
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="p-8 border border-charcoal/10 hover:border-primary/20 transition-colors group">
              <industry.icon className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-charcoal mb-4">{industry.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">{industry.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};