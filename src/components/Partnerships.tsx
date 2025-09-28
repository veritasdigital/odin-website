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

  // Duplicate the partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
            We're verified and trusted by the best, here are some of our partnerships
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll hover:pause-animation">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-60 mx-4 flex items-center justify-center h-24 p-4 bg-white rounded-lg border border-charcoal/10 hover:shadow-glow transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-h-16 max-w-full object-contain transition-all duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};