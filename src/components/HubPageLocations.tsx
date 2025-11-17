import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Location-based services */}
        {locationSpokes.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">
              Services by Location
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {locationSpokes.map((spoke, index) => (
                <Link key={index} to={spoke.url}>
                  <Card className="p-5 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base sm:text-lg font-semibold text-charcoal mb-1 break-words">
                          {spoke.city}
                        </h4>
                        <p className="text-xs sm:text-sm text-charcoal/60 break-words">
                          {spoke.service}
                        </p>
                      </div>
                    </div>
                    <div className="mt-auto pt-3 flex items-center text-primary text-sm font-medium group">
                      <span className="whitespace-normal break-words">View services</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
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
            <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">
              Specialized Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {serviceSpokes.map((spoke, index) => (
                <Link key={index} to={spoke.url}>
                  <Card className="p-5 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <h4 className="text-base sm:text-lg font-semibold text-charcoal mb-2 break-words">
                      {spoke.title}
                    </h4>
                    <div className="mt-auto pt-3 flex items-center text-primary text-sm font-medium group">
                      <span className="whitespace-normal break-words">Learn more</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
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
