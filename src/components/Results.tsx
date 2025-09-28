import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import yclJewelry from "@/assets/ycl-jewelry.jpg";

export const Results = () => {
  const testimonials = [
    {
      company: "YCL Jewels",
      result: "292% Revenue Growth",
      quote: "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
      author: "Fabienne Costa",
      title: "Founder",
      location: "Gold Coast, Australia",
      image: yclJewelry
    },
    {
      company: "TechFlow Solutions",
      result: "Significant Revenue Growth",
      quote: "Odin Digital's strategic approach to lead generation transformed our business development process. We experienced substantial growth in monthly recurring revenue over an 18-month partnership. Their systematic methodology and execution capabilities are exceptional.",
      author: "Marcus Chen",
      title: "CEO",
      location: "San Francisco, USA"
    },
    {
      company: "Luxe Lifestyle",
      result: "Substantial Revenue Increase",
      quote: "The team at Odin Digital completely redesigned our advertising strategy, resulting in significant improvements in return on ad spend and overall revenue growth. Their expertise and strategic thinking have been invaluable to our business expansion.",
      author: "Sarah Martinez",
      title: "Founder",
      location: "Miami, USA"
    },
    {
      company: "Elite Consulting Group",
      result: "Enhanced Lead Generation",
      quote: "Our lead generation capabilities improved dramatically within six months of partnering with Odin Digital. They don't just execute campaigns – they build comprehensive growth systems that scale effectively with business development.",
      author: "David Thompson",
      title: "Managing Partner",
      location: "London, UK"
    }
  ];

  return (
    <section id="results" className="py-24 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Real results from real businesses. See how our strategic approach transforms companies across industries.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4">
                  <Card className="relative overflow-hidden bg-white border border-charcoal/10 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                    <div className="flex flex-col lg:flex-row">
                      {/* Image Section */}
                      {testimonial.image && (
                        <div className="lg:w-1/2 h-64 lg:h-auto">
                          <img 
                            src={testimonial.image} 
                            alt={`${testimonial.company} product`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      
                      {/* Content Section */}
                      <div className={`p-8 ${testimonial.image ? 'lg:w-1/2' : 'w-full'} flex flex-col justify-center`}>
                        <div className="flex items-center mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-charcoal mb-2">{testimonial.company}</h3>
                          <p className="text-primary font-bold text-lg mb-4">
                            {testimonial.result}
                          </p>
                          <blockquote className="text-charcoal/80 leading-relaxed text-lg italic">
                            "{testimonial.quote}"
                          </blockquote>
                        </div>
                        
                        <div className="border-t border-charcoal/10 pt-6 mt-auto">
                          <p className="font-bold text-charcoal text-lg">{testimonial.author}</p>
                          <p className="text-charcoal/60 mb-1">{testimonial.title}, {testimonial.company}</p>
                          {testimonial.location && (
                            <p className="text-primary/80 text-sm font-medium">{testimonial.location}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};