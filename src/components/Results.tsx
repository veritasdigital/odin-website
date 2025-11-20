import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";
import brandIconSubtle from "@/assets/brand-icon-subtle.png";
import yclJewelry from "@/assets/ycl-jewelry.jpg";
import adriaticFurniture from "@/assets/adriatic-furniture.jpg";
import bulkBuysAustralia from "@/assets/bulk-buys-australia.jpg";
import krushOrganics from "@/assets/krush-organics.png";
import evanTsaboukos from "@/assets/evan-tsaboukos.webp";
import willWrightMiningStore from "@/assets/will-wright-mining-store.webp";

export const Results = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);

  const testimonials = [
    {
      company: "Adriatic Furniture",
      result: "Brand & Business Excellence",
      quote: "They really took the time to understand our business, our brand and our priorities and have consistently delivered exceptional results. Can't recommend them highly enough",
      author: "Lenny Catalano",
      title: "Founder",
      location: "Melbourne, Australia",
      image: adriaticFurniture
    },
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
      company: "Mining Store",
      result: "Outstanding Service & Results",
      quote: "We've been working with Lucas and the team since 2021, before we partnered up we'd been with a lot of agencies that didn't take the time to understand our business properly, we had a LOT of ad account and ad rejection issues and were constantly frustrated with the general \"agency experience\". But things have never been better, we have details and in depth understanding of our analytics and data, and even when things aren't perfect, they tell it like it is so we can do something about it instead of giving us the run around which is super refreshing.",
      author: "Will Wright",
      title: "Founder",
      location: "Melbourne, Australia",
      image: willWrightMiningStore
    },
    {
      company: "Bulk Buys Australia",
      result: "Excellent Results in Short Time",
      quote: "We've been working with them for the last couple of months and have been extremely pleased with the results the team has achieved in such a short time. Results and services provided by the team has been excellent!",
      author: "Eda",
      title: "Director",
      location: "Melbourne, Australia",
      image: bulkBuysAustralia
    },
    {
      company: "Krush Organics",
      result: "$100k First Month + 5x ROI",
      quote: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys and can't recommend them highly enough",
      author: "Liam C",
      title: "Founder",
      location: "Sydney, Australia",
      image: krushOrganics
    },
    {
      company: "Imperial Wealth",
      result: "From $20k to $100k+ Monthly Revenue",
      quote: "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month. He went way beyond just handling SEO and ads - he dropped so much knowledge on me about pricing, funnels, and how to actually structure things to scale. If you're serious about your business, working with Lucas is a high leverage move.",
      author: "Evan Tsaboukos",
      title: "Founder",
      location: "Melbourne, Australia",
      image: evanTsaboukos
    }
  ];

  useEffect(() => {
    if (!carouselApi) return;

    const updateCurrentSlide = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", updateCurrentSlide);
    updateCurrentSlide();

    return () => {
      carouselApi.off("select", updateCurrentSlide);
    };
  }, [carouselApi]);

  return (
    <section id="results" className="relative pt-12 pb-6 bg-gradient-to-br from-accent/5 to-primary/5 overflow-hidden">
      {/* Decorative Brand Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5 pointer-events-none">
        <img src={brandIconSubtle} alt="" className="w-full h-full animate-[spin_40s_linear_infinite]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Real results from real businesses. See how our strategic approach transforms companies across industries.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel 
            className="w-full" 
            opts={{ align: "start", loop: true }}
            setApi={setCarouselApi}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4">
                  <Card className="relative overflow-hidden bg-white border border-charcoal/10 hover:border-primary/30 transition-all duration-500 hover:shadow-elegant group">
                    <div className="flex flex-col lg:flex-row">
                      {/* Image Section */}
                      {testimonial.image && (
                      <div className="lg:w-1/2 relative overflow-hidden flex items-center justify-center min-h-[200px]">
                          <OptimizedImage 
                            src={testimonial.image} 
                            alt={`${testimonial.company} product`}
                            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            width={511}
                            height={640}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      )}
                      
                      {/* Content Section */}
                      <div className={`p-6 ${testimonial.image ? 'lg:w-1/2' : 'w-full'} flex flex-col justify-center relative`}>
                        <div className="absolute top-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                          <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M10 8v8l-4 8h6l4-8v-8zM22 8v8l-4 8h6l4-8v-8z"/>
                          </svg>
                        </div>
                        
                        <div className="flex items-center mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        <div className="mb-3">
                          <h3 className="text-xl font-bold text-charcoal mb-1.5">{testimonial.company}</h3>
                          <div className="inline-block bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-2 rounded-full font-bold text-sm mb-2.5">
                            {testimonial.result}
                          </div>
                          <blockquote className="text-charcoal/80 leading-relaxed text-lg italic">
                            "{testimonial.company === 'Imperial Wealth' ? (
                              <>
                                Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.
                                <br />
                                <br />
                                He went way beyond just handling SEO and ads - he dropped so much knowledge on me about pricing, funnels, and how to actually structure things to scale. If you're serious about your business, working with Lucas is a high leverage move.
                              </>
                            ) : (
                              testimonial.quote
                            )}"
                          </blockquote>
                        </div>
                        
                        <div className="border-t border-charcoal/10 pt-3 mt-auto">
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
            <CarouselPrevious className="-left-12 top-1/2 h-12 w-12 border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300" />
            <CarouselNext className="-right-12 top-1/2 h-12 w-12 border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300" />
          </Carousel>

          {/* Enhanced Pagination Dots */}
          <div className="flex justify-center mt-3 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => carouselApi?.scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-6 bg-primary shadow-glow' 
                    : 'w-1.5 bg-charcoal/20 hover:bg-primary/50 hover:w-3'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};