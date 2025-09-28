import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import googlePartner from "@/assets/partners/google-partner-2022.png";
import metaPartner from "@/assets/partners/meta-partner-2023.png";
import shopifyPartner from "@/assets/partners/shopify-partner.svg";
import hubspotPartner from "@/assets/partners/hubspot-certified-agency-partner.png";
import klaviyoPartner from "@/assets/partners/klaviyo-partner.webp";
import microsoftPartner from "@/assets/partners/microsoft-bing-partner.svg";
import tiktokPartner from "@/assets/partners/tiktok-partner.svg";
import linkedinPartner from "@/assets/partners/linkedin-marketing-partner.svg";

export const Partnerships = () => {
  const partners = [
    {
      name: "Google Premier Partner 2022",
      logo: googlePartner,
      alt: "Google Premier Partner 2022 Badge"
    },
    {
      name: "Meta Business Partner 2023",
      logo: metaPartner,
      alt: "Meta Business Partner 2023 Badge"
    },
    {
      name: "Shopify Partner",
      logo: shopifyPartner,
      alt: "Shopify Partner Badge"
    },
    {
      name: "HubSpot Certified Agency Partner",
      logo: hubspotPartner,
      alt: "HubSpot Certified Agency Partner Badge"
    },
    {
      name: "Klaviyo Partner",
      logo: klaviyoPartner,
      alt: "Klaviyo Partner Badge"
    },
    {
      name: "Microsoft Bing Partner",
      logo: microsoftPartner,
      alt: "Microsoft Bing Partner Badge"
    },
    {
      name: "TikTok Partner",
      logo: tiktokPartner,
      alt: "TikTok Partner Badge"
    },
    {
      name: "LinkedIn Marketing Partner",
      logo: linkedinPartner,
      alt: "LinkedIn Marketing Partner Badge"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
            We're verified and trusted by the best, here are some of our partnerships
          </h2>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="flex items-center justify-center h-24 p-4 bg-white rounded-lg border border-charcoal/10 hover:border-primary/20 transition-colors">
                    <img
                      src={partner.logo}
                      alt={partner.alt}
                      className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 bg-white border-charcoal/20 hover:bg-primary hover:text-white hover:border-primary" />
            <CarouselNext className="-right-12 bg-white border-charcoal/20 hover:bg-primary hover:text-white hover:border-primary" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};