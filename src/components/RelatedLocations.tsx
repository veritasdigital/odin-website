import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

interface RelatedLocation {
  title: string;
  url: string;
  city?: string;
  anchorText: string;
}

interface RelatedLocationsProps {
  locations: RelatedLocation[];
  title?: string;
}

export const RelatedLocations = ({ locations, title = "Our Services in Other Cities" }: RelatedLocationsProps) => {
  if (!locations || locations.length === 0) return null;

  return (
    <section className="py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">{title}</h2>
          <p className="text-base text-charcoal/70 max-w-2xl mx-auto">
            We provide expert digital marketing services across Australia
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {locations.map((location, index) => (
            <Link key={index} to={location.url}>
              <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-charcoal mb-1 break-words">
                      {location.title}
                    </h3>
                    {location.city && (
                      <p className="text-xs sm:text-sm text-charcoal/60">
                        {location.city}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-auto pt-3 flex items-center text-primary text-sm font-medium group">
                  <span className="whitespace-normal break-words">Learn more</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
