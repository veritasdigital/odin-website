import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import odinLogo from "@/assets/odin-logo-footer.png";
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
        { name: "Real Estate Agents", url: "/industries/real-estate-agents" }
      ]
    }
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={odinLogo} alt="Odin Digital - Strategic Digital Marketing Agency Australia" className="h-14 w-auto" />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Strategic Digital Marketing Excellence. Empowering ambitious businesses to achieve exponential growth through data-driven strategies and proven methodologies.
            </p>
            <Button variant="hero" size="lg" onClick={openForm} className="text-sm md:text-base px-4 md:px-8 w-full md:w-auto whitespace-normal h-auto min-h-[3rem] md:min-h-0">
              Get Your Free Strategy Session
            </Button>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Connect with Our Digital Marketing Experts</h3>
            <div className="space-y-4 text-white/80">
              <div>
                <p className="font-semibold text-white">Phone:</p>
                <p>03 9498 3170</p>
              </div>
              <div>
                <p className="font-semibold text-white">Email:</p>
                <p>hello@odindigital.com.au</p>
              </div>
              <div>
                <p className="font-semibold text-white">Address:</p>
                <p>11 Wilson Street<br />South Yarra VIC 3141</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6">Business Hours</h3>
            <div className="space-y-2 text-white/80">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Collapsible
                  open={openIndustries.includes("Services")}
                  onOpenChange={() => toggleIndustry("Services")}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left text-white/80 hover:text-white transition-smooth">
                    <span>Services</span>
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform ${
                        openIndustries.includes("Services") ? 'rotate-180' : ''
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-2 pl-2">
                    <a href="/services/google-ads" className="block text-sm text-white/60 hover:text-white transition-smooth">Google Ads</a>
                    <a href="/services/seo" className="block text-sm text-white/60 hover:text-white transition-smooth">SEO</a>
                    <a href="/services/social-media" className="block text-sm text-white/60 hover:text-white transition-smooth">Social Media</a>
                    <a href="/services/website-design" className="block text-sm text-white/60 hover:text-white transition-smooth">Website Design</a>
                  </CollapsibleContent>
                </Collapsible>
                <a href="/#results" className="block text-white/80 hover:text-white transition-smooth">Results</a>
                <a href="/#methodology" className="block text-white/80 hover:text-white transition-smooth">Methodology</a>
                <a href="/about" className="block text-white/80 hover:text-white transition-smooth">About</a>
                <a href="/blog" className="block text-white/80 hover:text-white transition-smooth">Blog</a>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xl font-bold mb-6">Industries we work with</h3>
            <div className="space-y-4">
              {industries.map((industry) => (
                <Collapsible
                  key={industry.title}
                  open={openIndustries.includes(industry.title)}
                  onOpenChange={() => toggleIndustry(industry.title)}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left text-white/80 hover:text-white transition-smooth">
                    <span className="font-semibold">{industry.title}</span>
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform ${
                        openIndustries.includes(industry.title) ? 'rotate-180' : ''
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 space-y-2 pl-2">
                    {industry.items.map((item, idx) => (
                      <a 
                        key={idx} 
                        href={item.url}
                        className="block text-sm text-white/60 hover:text-white transition-smooth"
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