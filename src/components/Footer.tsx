import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import odinLogoWhite from "@/assets/odin-logo-white.png";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Helmet } from "react-helmet";

export const Footer = () => {
  const [openIndustries, setOpenIndustries] = useState<string[]>([]);
  const { openForm } = useMarketingForm();

  const toggleIndustry = (industry: string) => {
    setOpenIndustries(prev => 
      prev.includes(industry) 
        ? prev.filter(i => i !== industry)
        : [...prev, industry]
    );
  };

  const services = [
    {
      title: "Core Services",
      items: [
        { name: "SEO Services", url: "/services/seo" },
        { name: "Google Ads Management", url: "/services/google-ads" },
        { name: "Facebook Advertising", url: "/services/facebook-advertising" },
        { name: "Social Media Marketing", url: "/services/social-media" },
        { name: "Website Design & Development", url: "/services/website-design" },
        { name: "Email Marketing", url: "/services/email-marketing" }
      ]
    },
    {
      title: "SEO by Location",
      items: [
        { name: "SEO Sydney", url: "/services/sydney-seo" },
        { name: "SEO Melbourne", url: "/services/melbourne-seo" },
        { name: "SEO Brisbane", url: "/services/brisbane-seo" },
        { name: "SEO Perth", url: "/services/perth-seo" },
        { name: "SEO Adelaide", url: "/services/adelaide-seo" },
        { name: "SEO Canberra", url: "/services/canberra-seo" },
        { name: "SEO Gold Coast", url: "/services/gold-coast-seo" },
        { name: "SEO Newcastle", url: "/services/newcastle-seo" },
        { name: "SEO Hobart", url: "/services/hobart-seo" },
        { name: "SEO Launceston", url: "/services/launceston-seo" },
        { name: "SEO Darwin", url: "/services/darwin-seo" },
        { name: "SEO Ballarat", url: "/services/ballarat-seo" }
      ]
    },
    {
      title: "Google Ads by Location",
      items: [
        { name: "Google Ads Sydney", url: "/services/google-ads-sydney" },
        { name: "Google Ads Melbourne", url: "/services/google-ads-melbourne" },
        { name: "Google Ads Brisbane", url: "/services/google-ads-brisbane" },
        { name: "Google Ads Perth", url: "/services/google-ads-perth" },
        { name: "Google Ads Adelaide", url: "/services/google-ads-adelaide" },
        { name: "Google Ads Canberra", url: "/services/google-ads-canberra" },
        { name: "Google Ads Gold Coast", url: "/services/google-ads-gold-coast" },
        { name: "Google Ads Newcastle", url: "/services/google-ads-newcastle" },
        { name: "Google Ads Hobart", url: "/services/google-ads-hobart" },
        { name: "Google Ads Launceston", url: "/services/google-ads-launceston" },
        { name: "Google Ads Darwin", url: "/services/google-ads-darwin" },
        { name: "Google Ads Ballarat", url: "/services/google-ads-ballarat" }
      ]
    },
    {
      title: "Facebook Ads by Location",
      items: [
        { name: "Facebook Ads Sydney", url: "/services/facebook-ads-sydney" },
        { name: "Facebook Ads Melbourne", url: "/services/facebook-ads-melbourne" },
        { name: "Facebook Ads Brisbane", url: "/services/facebook-ads-brisbane" },
        { name: "Facebook Ads Perth", url: "/services/facebook-ads-perth" },
        { name: "Facebook Ads Adelaide", url: "/services/facebook-ads-adelaide" },
        { name: "Facebook Ads Canberra", url: "/services/facebook-ads-canberra" },
        { name: "Facebook Ads Gold Coast", url: "/services/facebook-ads-gold-coast" },
        { name: "Facebook Ads Newcastle", url: "/services/facebook-ads-newcastle" },
        { name: "Facebook Ads Hobart", url: "/services/facebook-ads-hobart" },
        { name: "Facebook Ads Launceston", url: "/services/facebook-ads-launceston" },
        { name: "Facebook Ads Darwin", url: "/services/facebook-ads-darwin" },
        { name: "Facebook Ads Ballarat", url: "/services/facebook-ads-ballarat" }
      ]
    },
    {
      title: "Web Design by Location",
      items: [
        { name: "Web Design Sydney", url: "/services/web-design-sydney" },
        { name: "Web Design Melbourne", url: "/services/web-design-melbourne" },
        { name: "Web Design Brisbane", url: "/services/web-design-brisbane" },
        { name: "Web Design Perth", url: "/services/web-design-perth" },
        { name: "Web Design Adelaide", url: "/services/web-design-adelaide" },
        { name: "Web Design Newcastle", url: "/services/web-design-newcastle" }
      ]
    },
    {
      title: "Specialized Services",
      items: [
        { name: "Local SEO", url: "/services/local-seo" },
        { name: "Ecommerce SEO", url: "/services/ecommerce-seo" },
        { name: "PPC Management", url: "/services/ppc-management" },
        { name: "Instagram Advertising", url: "/services/instagram-advertising" },
        { name: "LinkedIn Advertising", url: "/services/linkedin-advertising" },
        { name: "TikTok Advertising", url: "/services/tiktok-advertising" },
        { name: "YouTube Advertising", url: "/services/youtube-advertising" },
        { name: "Marketing Consulting", url: "/services/marketing-consulting" },
        { name: "Funnel Development", url: "/services/funnel-development" }
      ]
    }
  ];

  const industries = [
    {
      title: "Healthcare & Medical",
      items: [
        { name: "Dentists", url: "/industries/dentists" },
        { name: "Cosmetic Dentists", url: "/industries/cosmetic-dentists" },
        { name: "Orthodontists", url: "/industries/orthodontists" },
        { name: "Dental Implants", url: "/industries/dental-implants" },
        { name: "Family Dentists", url: "/industries/family-dentists" },
        { name: "Pediatric Dentists", url: "/industries/pediatric-dentists" },
        { name: "Cosmetic Surgeons", url: "/industries/cosmetic-surgeons" },
        { name: "Plastic Surgeons", url: "/industries/plastic-surgeons" },
        { name: "Cosmetic Clinics", url: "/industries/cosmetic-clinics" },
        { name: "Dermatologists", url: "/industries/dermatologists" },
        { name: "Ophthalmologists", url: "/industries/ophthalmologists" },
        { name: "Fertility Clinics", url: "/industries/fertility-clinics" }
      ]
    },
    {
      title: "Legal Services",
      items: [
        { name: "Lawyers", url: "/industries/lawyers" },
        { name: "Personal Injury Lawyers", url: "/industries/personal-injury-lawyers" },
        { name: "Family Lawyers", url: "/industries/family-lawyers" },
        { name: "Criminal Defense Lawyers", url: "/industries/criminal-defense-lawyers" },
        { name: "Immigration Lawyers", url: "/industries/immigration-lawyers" },
        { name: "Conveyancing Lawyers", url: "/industries/conveyancing-lawyers" }
      ]
    },
    {
      title: "Home Services & Trades",
      items: [
        { name: "Electricians", url: "/industries/electricians" },
        { name: "Plumbers", url: "/industries/plumbers" },
        { name: "Roofing Companies", url: "/industries/roofing-companies" },
        { name: "Landscaping Companies", url: "/industries/landscaping-companies" },
        { name: "HVAC Contractors", url: "/industries/hvac-contractors" }
      ]
    },
    {
      title: "Professional Services",
      items: [
        { name: "Accounting Firms", url: "/industries/accounting-firms" },
        { name: "Architecture Firms", url: "/industries/architecture-firms" },
        { name: "Insurance Agents", url: "/industries/insurance-agents" },
        { name: "Real Estate Agents", url: "/industries/real-estate-agents" },
        { name: "Commercial Real Estate", url: "/industries/commercial-real-estate" },
        { name: "Luxury Real Estate", url: "/industries/luxury-real-estate" }
      ]
    },
    {
      title: "Technology & SaaS",
      items: [
        { name: "SaaS Companies", url: "/industries/saas-companies" },
        { name: "Enterprise Software", url: "/industries/enterprise-software" },
        { name: "Pharmaceutical Companies", url: "/industries/pharmaceutical-companies" }
      ]
    },
    {
      title: "Other Industries",
      items: [
        { name: "Ecommerce Businesses", url: "/services/ecommerce-agency" },
        { name: "Franchise Businesses", url: "/industries/franchise-businesses" }
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
    "telephone": "+61394983170",
    "email": "hello@odindigital.com.au",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11 Wilson Street",
      "addressLocality": "South Yarra",
      "addressRegion": "VIC",
      "postalCode": "3141",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-37.8399",
      "longitude": "144.9929"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Melbourne"
      },
      {
        "@type": "City",
        "name": "Sydney"
      },
      {
        "@type": "City",
        "name": "Brisbane"
      },
      {
        "@type": "City",
        "name": "Perth"
      },
      {
        "@type": "City",
        "name": "Adelaide"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/odin-digital",
      "https://www.facebook.com/odindigital",
      "https://www.instagram.com/odindigital"
    ],
    "serviceType": [
      "Digital Marketing Agency",
      "SEO Services",
      "Google Ads Management",
      "Facebook Advertising",
      "Social Media Marketing",
      "Web Design",
      "Email Marketing"
    ]
  };

  return (
    <footer data-nav-contrast="dark" id="contact" className="bg-accent text-white py-16">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={odinLogoWhite} alt="Odin Digital - Strategic Digital Marketing Agency Australia" className="h-10 w-auto" />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed text-sm">
              Strategic Digital Marketing Excellence. Empowering ambitious businesses to achieve exponential growth through data-driven strategies and proven methodologies.
            </p>
            <Button variant="hero" size="lg" onClick={openForm} className="text-sm px-6 w-full whitespace-normal h-auto min-h-[3rem]">
              Get Your Free Strategy Session
            </Button>
            
            {/* Contact Info */}
            <div className="mt-8">
              <h3 className="text-base font-bold mb-3">Contact Us</h3>
              <div className="space-y-2 text-white/80 text-sm">
                <div>
                  <p className="font-semibold text-white text-xs">Phone:</p>
                  <p className="text-xs">03 9498 3170</p>
                </div>
                <div>
                  <p className="font-semibold text-white text-xs">Email:</p>
                  <p className="text-xs">hello@odindigital.com.au</p>
                </div>
                <div>
                  <p className="font-semibold text-white text-xs">Address:</p>
                  <p className="text-xs">11 Wilson Street<br />South Yarra VIC 3141</p>
                </div>
                <div>
                  <p className="font-semibold text-white text-xs">Hours:</p>
                  <p className="text-xs">Mon-Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-base font-bold mb-4">Company</h3>
            <div className="space-y-2">
              {companyLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url}
                  className="block text-sm text-white/70 hover:text-white transition-smooth"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services with Dropdowns */}
          <div>
            <h3 className="text-base font-bold mb-4">Our Services</h3>
            <div className="space-y-3">
              {services.map((serviceGroup) => (
                <Collapsible
                  key={serviceGroup.title}
                  open={openIndustries.includes(serviceGroup.title)}
                  onOpenChange={() => toggleIndustry(serviceGroup.title)}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left text-white/80 hover:text-white transition-smooth group">
                    <span className="font-semibold text-sm">{serviceGroup.title}</span>
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform ${
                        openIndustries.includes(serviceGroup.title) ? 'rotate-180' : ''
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-1.5 pl-3 bg-white/5 rounded-md p-2">
                    {serviceGroup.items.map((item, idx) => (
                      <a 
                        key={idx} 
                        href={item.url}
                        className="block text-xs text-white/60 hover:text-white transition-smooth"
                      >
                        {item.name}
                      </a>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>

          {/* Industries with Dropdowns */}
          <div>
            <h3 className="text-base font-bold mb-4">Industries We Serve</h3>
            <div className="space-y-3">
              {industries.map((industry) => (
                <Collapsible
                  key={industry.title}
                  open={openIndustries.includes(industry.title)}
                  onOpenChange={() => toggleIndustry(industry.title)}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left text-white/80 hover:text-white transition-smooth group">
                    <span className="font-semibold text-sm">{industry.title}</span>
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform ${
                        openIndustries.includes(industry.title) ? 'rotate-180' : ''
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-1.5 pl-3 bg-white/5 rounded-md p-2">
                    {industry.items.map((item, idx) => (
                      <a 
                        key={idx} 
                        href={item.url}
                        className="block text-xs text-white/60 hover:text-white transition-smooth"
                      >
                        {item.name}
                      </a>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-white/60 text-sm">
                © 2024 Odin Digital. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="/privacy" className="text-white/60 hover:text-white transition-smooth">Privacy Policy</a>
                <a href="/terms" className="text-white/60 hover:text-white transition-smooth">Terms of Service</a>
              </div>
            </div>
            <p className="text-white/60 text-sm text-center md:text-right max-w-md">
              Results vary based on industry, market conditions, and implementation of recommended strategies. 
              All performance metrics represent verified client data and collaborative achievements.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};