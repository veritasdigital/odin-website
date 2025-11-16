import googlePartner from "@/assets/partners/google-partner-2024.png";
import metaPartner from "@/assets/partners/meta-partner-2024.png";
import shopifyPartner from "@/assets/partners/shopify-partner.svg";
import hubspotPartner from "@/assets/partners/hubspot-certified-agency-partner.png";
import klaviyoPartner from "@/assets/partners/klaviyo-partner.webp";
import microsoftPartner from "@/assets/partners/microsoft-partner-2024.png";
import tiktokPartner from "@/assets/partners/tiktok-partner.svg";
import linkedinPartner from "@/assets/partners/linkedin-marketing-partner.svg";

export const Partnerships = () => {
  const partners = [
    {
      name: "Google Premier Partner 2024",
      logo: googlePartner,
      alt: "Google Premier Partner 2024 Badge"
    },
    {
      name: "Meta Business Partner 2024",
      logo: metaPartner,
      alt: "Meta Business Partner 2024 Badge"
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
      name: "Microsoft Advertising Partner",
      logo: microsoftPartner,
      alt: "Microsoft Advertising Partner Badge"
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

  // Duplicate the partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-8 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <p className="text-lg font-bold text-muted-foreground mb-4">
            Certified Partners
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 overflow-x-auto">
          {partners.slice(0, 6).map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 flex items-center justify-center h-14 p-2 bg-white rounded-lg border border-border hover:shadow-elegant transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="max-h-10 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};