import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Briefcase } from "lucide-react";

interface LocationSpoke {
  title: string;
  url: string;
  city?: string;
  service?: string;
  anchorText: string;
}

interface HubPageLocationsProps {
  spokes: LocationSpoke[];
  title: string;
  description?: string;
}

export const HubPageLocations = ({ spokes, title, description }: HubPageLocationsProps) => {
  const locationSpokes = spokes.filter(spoke => spoke.city);
  const serviceSpokes = spokes.filter(spoke => !spoke.city);

  return (
    <section className="relative py-20 bg-gradient-to-br from-muted/20 via-white to-muted/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-muted/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-muted/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full animate-float animation-delay-1000" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Location-based services */}
        {locationSpokes.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">
              Services by Location
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {locationSpokes.map((spoke, index) => (
                <Link key={index} to={spoke.url} className="group">
                  <Card className="relative p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col bg-white border-muted/40 overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10 flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold text-charcoal mb-1 break-words group-hover:text-primary transition-colors">
                          {spoke.city}
                        </h4>
                        <p className="text-sm text-charcoal/60 break-words">
                          {spoke.service}
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative z-10 mt-auto pt-4 border-t border-muted/20 flex items-center text-primary text-sm font-semibold">
                      <span className="whitespace-normal break-words">View services</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform flex-shrink-0" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Service-based offerings (no location) */}
        {serviceSpokes.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">
              Specialized Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {serviceSpokes.map((spoke, index) => (
                <Link key={index} to={spoke.url} className="group">
                  <Card className="relative p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col bg-white border-muted/40 overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10 mb-4">
                      <div className="inline-flex p-3 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-6 h-6 text-accent" />
                      </div>
                      <h4 className="text-lg font-bold text-charcoal break-words group-hover:text-primary transition-colors">
                        {spoke.title}
                      </h4>
                    </div>
                    
                    <div className="relative z-10 mt-auto pt-4 border-t border-muted/20 flex items-center text-primary text-sm font-semibold">
                      <span className="whitespace-normal break-words">Learn more</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform flex-shrink-0" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
