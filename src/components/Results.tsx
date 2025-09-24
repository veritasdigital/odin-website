import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Results = () => {
  const testimonials = [
    {
      company: "SaaS Company",
      result: "847% Revenue Growth",
      quote: "Odin Digital transformed our lead generation. We went from $50K to $473K monthly recurring revenue in 18 months. Their strategic approach and execution are unmatched.",
      author: "Marcus Chen",
      title: "CEO, TechFlow Solutions"
    },
    {
      company: "E-commerce Brand", 
      result: "$2.3M in Additional Revenue",
      quote: "The team at Odin Digital completely revolutionized our advertising strategy. We achieved a 4.2x ROAS and generated $2.3M in additional revenue in our first year working together.",
      author: "Sarah Martinez",
      title: "Founder, Luxe Lifestyle"
    },
    {
      company: "Professional Services",
      result: "312% Lead Increase",
      quote: "Our lead generation increased by 312% within 6 months. Odin Digital doesn't just run campaigns – they build growth engines that scale with your business.",
      author: "David Thompson", 
      title: "Managing Partner, Elite Consulting Group"
    },
    {
      company: "Manufacturing Company",
      result: "$5.8M Pipeline Generated",
      quote: "In 24 months, Odin Digital helped us generate $5.8M in qualified pipeline. Their B2B expertise and strategic thinking have been game-changing for our growth.",
      author: "Jennifer Walsh",
      title: "VP Marketing, Industrial Solutions Inc."
    }
  ];

  return (
    <section id="results" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Victory Stories from the 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Digital Battlefield</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real battles. See how we've helped businesses conquer their markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 shadow-card hover:shadow-primary transition-smooth border-0 bg-card/80 backdrop-blur-sm group hover:scale-[1.02]"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-primary">{testimonial.company}</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">{testimonial.result}</h3>
              </div>
              
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};