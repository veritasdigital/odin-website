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

  const services = [
    {
      title: "SEO",
      url: "/services/seo",
      hasLocations: true,
      serviceSlug: "seo"
    },
    {
      title: "Google Ads",
      url: "/services/google-ads",
      hasLocations: true,
      serviceSlug: "google-ads"
    },
    {
      title: "Facebook Advertising",
      url: "/services/facebook-advertising",
      hasLocations: true,
      serviceSlug: "facebook-ads"
    },
    {
      title: "Web Design",
      url: "/services/website-design",
      hasLocations: true,
      serviceSlug: "web-design"
    },
    {
      title: "Local SEO",
      url: "/services/local-seo",
      hasLocations: false
    },
    {
      title: "Social Media Marketing",
      url: "/services/social-media",
      hasLocations: false
    },
    {
      title: "Email Marketing",
      url: "/services/email-marketing",
      hasLocations: false
    },
    {
      title: "PPC Management",
      url: "/services/ppc-management",
      hasLocations: false
    },
    {
      title: "Ecommerce SEO",
      url: "/services/ecommerce-seo",
      hasLocations: false
    },
    {
      title: "Instagram Advertising",
      url: "/services/instagram-advertising",
      hasLocations: false
    },
    {
      title: "LinkedIn Advertising",
      url: "/services/linkedin-advertising",
      hasLocations: false
    },
    {
      title: "TikTok Advertising",
      url: "/services/tiktok-advertising",
      hasLocations: false
    },
    {
      title: "YouTube Advertising",
      url: "/services/youtube-advertising",
      hasLocations: false
    },
    {
      title: "Marketing Consulting",
      url: "/services/marketing-consulting",
      hasLocations: false
    },
    {
      title: "Funnel Development",
      url: "/services/funnel-development",
      hasLocations: false
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

          {/* Services with Location Dropdowns */}
          <div>
            <h3 className="text-base font-bold mb-4">Our Services</h3>
            <div className="space-y-2">
              {services.map((service) => (
                service.hasLocations ? (
                  <Collapsible
                    key={service.title}
                    open={openIndustries.includes(service.title)}
                    onOpenChange={() => toggleIndustry(service.title)}
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-left text-white/70 hover:text-white transition-smooth group">
                      <a href={service.url} className="text-sm hover:text-white">{service.title}</a>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform ${
                          openIndustries.includes(service.title) ? 'rotate-180' : ''
                        }`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 space-y-2 pl-3">
                      {locationsByState.map((state) => (
                        <Collapsible
                          key={state.state}
                          open={openIndustries.includes(`${service.title}-${state.state}`)}
                          onOpenChange={() => toggleIndustry(`${service.title}-${state.state}`)}
                        >
                          <CollapsibleTrigger className="flex items-center justify-between w-full text-left text-white/60 hover:text-white transition-smooth group">
                            <span className="text-xs font-medium">{state.state}</span>
                            <ChevronDown 
                              className={`h-3 w-3 transition-transform ${
                                openIndustries.includes(`${service.title}-${state.state}`) ? 'rotate-180' : ''
                              }`}
                            />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-1.5 space-y-1 pl-3 bg-white/5 rounded-md p-2">
                            {state.cities.map((city) => (
                              <a 
                                key={city.slug} 
                                href={`/services/${service.serviceSlug}-${city.slug}`}
                                className="block text-xs text-white/50 hover:text-white transition-smooth"
                              >
                                {city.name}
                              </a>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <a 
                    key={service.title}
                    href={service.url}
                    className="block text-sm text-white/70 hover:text-white transition-smooth"
                  >
                    {service.title}
                  </a>
                )
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