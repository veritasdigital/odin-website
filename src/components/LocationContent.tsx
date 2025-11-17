import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getLocationData } from "@/utils/locationData";
import LocationMap from "@/components/LocationMap";
import { MapPin, TrendingUp, Building2, DollarSign, CheckCircle2 } from "lucide-react";

interface LocationContentProps {
  city: string;
  serviceType?: string; // e.g., "SEO", "Google Ads", "Web Design"
}

const LocationContent = ({ city, serviceType = "digital marketing" }: LocationContentProps) => {
  const locationInfo = getLocationData(city);

  if (!locationInfo) return null;

  return (
    <>
      {/* Local Statistics Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {locationInfo.city} Digital Marketing Landscape
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Understanding {locationInfo.city}'s dynamic business environment and market opportunities
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-charcoal mb-2">{locationInfo.statistics.population}</div>
                <div className="text-sm text-muted-foreground">Population</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-charcoal mb-2">{locationInfo.statistics.businesses}</div>
                <div className="text-sm text-muted-foreground">Active Businesses</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-charcoal mb-2">{locationInfo.statistics.gdp}</div>
                <div className="text-sm text-muted-foreground">GDP</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-charcoal mb-2">{locationInfo.statistics.growthRate}</div>
                <div className="text-sm text-muted-foreground">Annual Growth</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Key Business Districts</CardTitle>
                <CardDescription>
                  Prime {locationInfo.city} locations for {serviceType} success
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {locationInfo.businessDistricts.map((district, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-charcoal/90">{district}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{locationInfo.city} Landmarks & Attractions</CardTitle>
                <CardDescription>
                  Iconic locations that define {locationInfo.city}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {locationInfo.landmarks.map((landmark, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-charcoal/90">{landmark}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      {locationInfo.caseStudy && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              {locationInfo.city} Success Story
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Real results from our {locationInfo.city} {serviceType} campaigns
            </p>
            
            <Card className="max-w-4xl mx-auto border-2 border-primary/20 hover:shadow-xl transition-shadow">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-2xl">{locationInfo.caseStudy.business}</CardTitle>
                <CardDescription className="text-base">{locationInfo.caseStudy.industry}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-charcoal">The Challenge</h3>
                    <p className="text-muted-foreground">{locationInfo.caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-charcoal">Our Solution</h3>
                    <p className="text-muted-foreground">{locationInfo.caseStudy.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-charcoal">The Results</h3>
                    <ul className="space-y-3">
                      {locationInfo.caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Service Area Map & Citations */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <LocationMap 
              city={locationInfo.city}
              coordinates={locationInfo.coordinates}
              address={locationInfo.citations.address}
            />
            
            <Card className="mt-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Local Business Information</CardTitle>
                <CardDescription>
                  Serving {locationInfo.city} and {locationInfo.state} businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">{locationInfo.citations.name}</h3>
                <p className="text-muted-foreground mb-4">{locationInfo.citations.description}</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Address:</strong> {locationInfo.citations.address}</span>
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a 
                      href={`tel:${locationInfo.citations.phone}`} 
                      className="text-primary hover:underline font-medium"
                    >
                      {locationInfo.citations.phone}
                    </a>
                  </p>
                  <p className="text-muted-foreground mt-4">
                    <strong>Key Industries in {locationInfo.city}:</strong>{" "}
                    {locationInfo.keyIndustries.join(", ")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationContent;
