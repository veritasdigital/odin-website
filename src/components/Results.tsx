import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Results = () => {
  const testimonials = [
    {
      company: "TechFlow Solutions",
      result: "Significant Revenue Growth",
      quote: "Odin Digital's strategic approach to lead generation transformed our business development process. We experienced substantial growth in monthly recurring revenue over an 18-month partnership. Their systematic methodology and execution capabilities are exceptional.",
      author: "Marcus Chen",
      title: "CEO"
    },
    {
      company: "Luxe Lifestyle",
      result: "Substantial Revenue Increase",
      quote: "The team at Odin Digital completely redesigned our advertising strategy, resulting in significant improvements in return on ad spend and overall revenue growth. Their expertise and strategic thinking have been invaluable to our business expansion.",
      author: "Sarah Martinez",
      title: "Founder"
    },
    {
      company: "Elite Consulting Group",
      result: "Enhanced Lead Generation",
      quote: "Our lead generation capabilities improved dramatically within six months of partnering with Odin Digital. They don't just execute campaigns – they build comprehensive growth systems that scale effectively with business development.",
      author: "David Thompson",
      title: "Managing Partner"
    },
    {
      company: "Industrial Solutions Inc.",
      result: "Pipeline Development",
      quote: "Over a 24-month period, Odin Digital helped us develop a substantial qualified sales pipeline. Their B2B marketing expertise and strategic approach have been instrumental in our growth trajectory.",
      author: "Jennifer Walsh",
      title: "VP Marketing"
    }
  ];

  return (
    <section id="results" className="py-24 bg-accent/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
            Client Success Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-white border border-charcoal/10 hover:border-primary/20 transition-colors">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">{testimonial.company}</h3>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                  {testimonial.result}
                </p>
                <blockquote className="text-charcoal/70 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              
              <div className="border-t border-charcoal/10 pt-4">
                <p className="font-semibold text-charcoal">{testimonial.author}</p>
                <p className="text-charcoal/60 text-sm">{testimonial.title}, {testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};