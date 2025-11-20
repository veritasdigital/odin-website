import { OptimizedImage } from '@/components/OptimizedImage';
import fox40Logo from "@/assets/media/fox40-logo.png";
import msnLogo from "@/assets/media/msn-logo.png";
import yahooFinanceLogo from "@/assets/media/yahoo-finance-logo.png";
import businessInsiderLogo from "@/assets/media/business-insider-logo.png";
import digitalJournalLogo from "@/assets/media/digital-journal-logo.png";

export const AsSeenIn = () => {
  const mediaLogos = [
    {
      name: "FOX40",
      logo: fox40Logo,
      alt: "FOX40 News"
    },
    {
      name: "MSN",
      logo: msnLogo,
      alt: "MSN"
    },
    {
      name: "Yahoo Finance",
      logo: yahooFinanceLogo,
      alt: "Yahoo Finance"
    },
    {
      name: "Business Insider",
      logo: businessInsiderLogo,
      alt: "Business Insider"
    },
    {
      name: "Digital Journal",
      logo: digitalJournalLogo,
      alt: "Digital Journal"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            As Featured In
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our expertise and results have been recognized by leading media outlets
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {mediaLogos.map((media, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <OptimizedImage
                src={media.logo}
                alt={media.alt}
                className="h-12 w-auto max-w-[150px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
               sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};