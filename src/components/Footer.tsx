import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import odinLogoWhite from "@/assets/odin-logo-white.png";
import { Helmet } from "react-helmet";
import { OptimizedImage } from '@/components/OptimizedImage';

export const Footer = () => {
  const [locationsOpen, setLocationsOpen] = useState(false);

  const locationsByState = [
    {
      state: "New South Wales",
      cities: [
        { name: "Sydney", slug: "sydney" },
        { name: "Newcastle", slug: "newcastle" }
      ]
    },
    {
      state: "Victoria",
      cities: [
        { name: "Melbourne", slug: "melbourne" },
        { name: "Ballarat", slug: "ballarat" }
      ]
    },
    {
      state: "Queensland",
      cities: [
        { name: "Brisbane", slug: "brisbane" },
        { name: "Gold Coast", slug: "gold-coast" }
      ]
    },
    {
      state: "Western Australia",
      cities: [
        { name: "Perth", slug: "perth" }
      ]
    },
    {
      state: "South Australia",
      cities: [
        { name: "Adelaide", slug: "adelaide" }
      ]
    },
    {
      state: "Australian Capital Territory",
      cities: [
        { name: "Canberra", slug: "canberra" }
      ]
    },
    {
      state: "Tasmania",
      cities: [
        { name: "Hobart", slug: "hobart" },
        { name: "Launceston", slug: "launceston" }
      ]
    },
    {
      state: "Northern Territory",
      cities: [
        { name: "Darwin", slug: "darwin" }
      ]
    }
  ];

  const serviceCategories = [
    {
      title: "Primary Services",
      services: [
        { name: "Google Ads", url: "/services/google-ads" },
        { name: "Facebook Advertising", url: "/services/facebook-advertising" },
        { name: "TikTok Advertising", url: "/services/tiktok-advertising" },
        { name: "Instagram Advertising", url: "/services/instagram-advertising" },
        { name: "LinkedIn Advertising", url: "/services/linkedin-advertising" },
        { name: "YouTube Advertising", url: "/services/youtube-advertising" },
        { name: "PPC Management", url: "/services/ppc-management" }
      ]
    },
    {
      title: "SEO Services",
      services: [
        { name: "SEO", url: "/services/seo" },
        { name: "Local SEO", url: "/services/local-seo" },
        { name: "Ecommerce SEO", url: "/services/ecommerce-seo" }
      ]
    },
    {
      title: "Web & Funnel Services",
      services: [
        { name: "Web Design", url: "/services/website-design" },
        { name: "Funnel Development", url: "/services/funnel-development" }
      ]
    },
    {
      title: "Marketing Services",
      services: [
        { name: "Social Media Marketing", url: "/services/social-media" },
        { name: "Email Marketing", url: "/services/email-marketing" },
        { name: "Marketing Consulting", url: "/services/marketing-consulting" }
      ]
    }
  ];

  const companyLinks = [
    { name: "About Us", url: "/about" },
    { name: "Our Ethos", url: "/our-ethos" },
    { name: "Our Clients", url: "/our-clients" },
    { name: "Our Industries", url: "/our-industries" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://odindigital.com.au/#organization",
    "name": "Odin Digital",
    "legalName": "Odin Digital Pty Ltd",
    "url": "https://odindigital.com.au",
    "logo": "https://odindigital.com.au/odin-logo.png",
    "description": "Strategic Digital Marketing Excellence. Empowering ambitious businesses to achieve exponential growth through data-driven strategies and proven methodologies.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Level 1, 12 River Street",
      "addressLocality": "South Yarra",
      "addressRegion": "VIC",
      "postalCode": "3141",
      "addressCountry": "AU"
    },
    "telephone": "+61-1300-858-250",
    "email": "hello@odindigital.com.au",
    "sameAs": [
      "https://www.facebook.com/odindigitalau",
      "https://www.linkedin.com/company/odindigital",
      "https://www.instagram.com/odindigital"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    }
  };

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <OptimizedImage src={odinLogoWhite} alt="Odin Digital Logo" sizes="(max-width: 768px) 100vw, 50vw" className="h-8 w-auto mb-6" />
            <p className="text-white/80 text-sm leading-relaxed">
              Strategic Digital Marketing Excellence. Empowering ambitious businesses to achieve exponential growth.
            </p>
            <div className="space-y-2">
              <p className="text-white/80 text-sm">Level 1, 12 River Street</p>
              <p className="text-white/80 text-sm">South Yarra, VIC 3141</p>
              <p className="text-white/80 text-sm">Australia</p>
              <a href="tel:1300858250" className="text-white/80 text-sm hover:text-white transition-colors block">
                Phone: 1300 858 250
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.url}>
                  <a 
                    href={link.url} 
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Categories - Spanning 3 columns */}
          {serviceCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-bold mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.services.map((service) => (
                  <li key={service.url}>
                    <a 
                      href={service.url} 
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Collapsible Locations by State */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <Collapsible open={locationsOpen} onOpenChange={setLocationsOpen}>
            <CollapsibleTrigger className="w-full flex items-center justify-between py-4 hover:text-white/90 transition-colors group">
              <h3 className="text-xl font-bold">Service Locations Across Australia</h3>
              <ChevronDown className="w-5 h-5 transition-transform group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 pt-6 pb-4">
                {locationsByState.map((location) => (
                  <div key={location.state}>
                    <h4 className="font-semibold mb-3 text-white text-sm">{location.state}</h4>
                    <ul className="space-y-2">
                      {location.cities.map((city) => (
                        <li key={city.slug}>
                          <a 
                            href={`/services/${city.slug}-seo`} 
                            className="text-white/70 hover:text-white transition-colors text-sm"
                          >
                            {city.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/60 text-sm text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Odin Digital Pty Ltd. All rights reserved.</p>
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
