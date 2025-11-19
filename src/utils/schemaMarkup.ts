/**
 * Centralized Schema Markup Utilities
 * Generates JSON-LD structured data for SEO
 */

import { getLocationData } from "./locationData";

interface FAQ {
  question: string;
  answer: string;
}

interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
}

interface Service {
  name: string;
  description: string;
  areaServed?: string;
}

interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

// Base Organization Schema (for all pages)
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://odindigital.com.au/#organization",
  "name": "Odin Digital",
  "legalName": "Odin Digital Pty Ltd",
  "url": "https://odindigital.com.au",
  "logo": "https://odindigital.com.au/odin-logo.png",
  "description": "Australia's leading performance marketing agency specializing in SEO, Google Ads, Facebook Ads, and web design. Delivering measurable ROI for businesses across Melbourne, Sydney, Brisbane, and all major Australian cities.",
  "foundingDate": "2018",
  "email": "hello@odindigital.com.au",
  "telephone": "+61-1300-123-456",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Collins Street",
    "addressLocality": "Melbourne",
    "addressRegion": "VIC",
    "postalCode": "3000",
    "addressCountry": "AU"
  },
  "sameAs": [
    "https://www.facebook.com/odindigital",
    "https://www.linkedin.com/company/odin-digital",
    "https://twitter.com/odindigital",
    "https://www.instagram.com/odindigital"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "283",
    "bestRating": "5",
    "worstRating": "1"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Melbourne",
      "containedIn": { "@type": "State", "name": "Victoria" }
    },
    {
      "@type": "City",
      "name": "Sydney",
      "containedIn": { "@type": "State", "name": "New South Wales" }
    },
    {
      "@type": "City",
      "name": "Brisbane",
      "containedIn": { "@type": "State", "name": "Queensland" }
    },
    {
      "@type": "City",
      "name": "Perth",
      "containedIn": { "@type": "State", "name": "Western Australia" }
    },
    {
      "@type": "City",
      "name": "Adelaide",
      "containedIn": { "@type": "State", "name": "South Australia" }
    },
    {
      "@type": "Country",
      "name": "Australia"
    }
  ],
  "knowsAbout": [
    "Search Engine Optimization",
    "Google Ads Management",
    "Facebook Advertising",
    "Web Design",
    "Digital Marketing Strategy",
    "Conversion Rate Optimization",
    "Pay Per Click Advertising",
    "Social Media Marketing"
  ]
});

// LocalBusiness Schema for city-specific pages
export const getLocalBusinessSchema = (city: string, serviceType: string = "Digital Marketing") => {
  const locationData = getLocationData(city);
  
  if (!locationData) return null;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://odindigital.com.au/${city.toLowerCase().replace(/\s+/g, '-')}#localbusiness`,
    "name": `Odin Digital - ${city} ${serviceType}`,
    "image": `https://odindigital.com.au/locations/${city.toLowerCase().replace(/\s+/g, '-')}.jpg`,
    "description": locationData.citations.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": locationData.citations.address.split(',')[0],
      "addressLocality": locationData.city,
      "addressRegion": locationData.state,
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": locationData.coordinates.lat,
      "longitude": locationData.coordinates.lng
    },
    "url": `https://odindigital.com.au/${serviceType.toLowerCase().replace(/\s+/g, '-')}-${city.toLowerCase().replace(/\s+/g, '-')}`,
    "telephone": locationData.citations.phone,
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "283",
      "bestRating": "5"
    },
    "areaServed": {
      "@type": "City",
      "name": locationData.city,
      "containedIn": {
        "@type": "State",
        "name": locationData.fullName.split(', ')[1]
      }
    }
  };
};

// Service Schema
export const getServiceSchema = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://odindigital.com.au/services/${service.name.toLowerCase().replace(/\s+/g, '-')}#service`,
  "serviceType": service.name,
  "name": service.name,
  "description": service.description,
  "provider": {
    "@id": "https://odindigital.com.au/#organization"
  },
  "areaServed": service.areaServed || {
    "@type": "Country",
    "name": "Australia"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": `${service.name} Services`,
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "283",
    "bestRating": "5"
  }
});

// ProfessionalService Schema for service pages with testimonials
export const getProfessionalServiceSchema = (
  serviceName: string,
  description: string,
  url: string,
  areaServed?: string | { "@type": string; name: string },
  ratingValue?: string,
  reviewCount?: string
) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `https://odindigital.com.au${url}#professionalservice`,
  "name": serviceName,
  "description": description,
  "url": `https://odindigital.com.au${url}`,
  "provider": {
    "@id": "https://odindigital.com.au/#organization"
  },
  "areaServed": areaServed || {
    "@type": "Country",
    "name": "Australia"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": ratingValue || "4.9",
    "reviewCount": reviewCount || "283",
    "bestRating": "5",
    "worstRating": "1"
  },
  "priceRange": "$$"
});

// FAQ Schema
export const getFAQSchema = (faqs: FAQ[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer.replace(/<[^>]*>/g, '') // Strip HTML tags
    }
  }))
});

// Review Schema
export const getReviewSchema = (reviews: Review[]) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@id": "https://odindigital.com.au/#organization"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": reviews[0]?.rating || 5,
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": reviews[0]?.author || "Verified Client"
  },
  "reviewBody": reviews[0]?.reviewBody || "",
  "datePublished": reviews[0]?.datePublished || new Date().toISOString().split('T')[0]
});

// Aggregate Rating Schema
export const getAggregateRatingSchema = (ratingValue: string = "4.9", reviewCount: string = "283") => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://odindigital.com.au/#organization",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": ratingValue,
    "reviewCount": reviewCount,
    "bestRating": "5",
    "worstRating": "1"
  }
});

// HowTo Schema (for blog posts and guides)
export const getHowToSchema = (
  name: string,
  description: string,
  steps: HowToStep[],
  totalTime?: string,
  image?: string
) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": name,
  "description": description,
  "image": image,
  "totalTime": totalTime || "PT30M",
  "step": steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text,
    "image": step.image
  }))
});

// Article Schema (for blog posts)
export const getArticleSchema = (
  headline: string,
  description: string,
  author: string,
  datePublished: string,
  dateModified: string,
  image: string,
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": headline,
  "description": description,
  "image": image,
  "author": {
    "@type": "Person",
    "name": author
  },
  "publisher": {
    "@id": "https://odindigital.com.au/#organization"
  },
  "datePublished": datePublished,
  "dateModified": dateModified,
  "url": url,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  }
});

// VideoObject Schema
export const getVideoSchema = (
  name: string,
  description: string,
  thumbnailUrl: string,
  uploadDate: string,
  contentUrl: string,
  duration?: string
) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": name,
  "description": description,
  "thumbnailUrl": thumbnailUrl,
  "uploadDate": uploadDate,
  "contentUrl": contentUrl,
  "duration": duration || "PT5M",
  "publisher": {
    "@id": "https://odindigital.com.au/#organization"
  }
});

// Breadcrumb Schema
export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// WebPage Schema
export const getWebPageSchema = (
  name: string,
  description: string,
  url: string,
  breadcrumbItems?: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": name,
  "description": description,
  "url": url,
  "breadcrumb": breadcrumbItems ? getBreadcrumbSchema(breadcrumbItems) : undefined,
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://odindigital.com.au/#website"
  },
  "about": {
    "@id": "https://odindigital.com.au/#organization"
  }
});

// Website Schema
export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://odindigital.com.au/#website",
  "url": "https://odindigital.com.au",
  "name": "Odin Digital",
  "description": "Australia's leading digital marketing agency delivering ROI-focused SEO, Google Ads, Facebook Ads, and web design services.",
  "publisher": {
    "@id": "https://odindigital.com.au/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://odindigital.com.au/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
});

// Comprehensive Service Page Schema Generator
export const getCompleteServiceSchema = (params: {
  serviceName: string;
  serviceType: string;
  description: string;
  url: string;
  city?: string;
  benefits?: string[];
  features?: string[];
  pricing?: {
    minPrice?: string;
    maxPrice?: string;
    priceCurrency?: string;
  };
}) => {
  const {
    serviceName,
    serviceType,
    description,
    url,
    city,
    benefits = [],
    features = [],
    pricing
  } = params;

  const locationData = city ? getLocationData(city) : null;
  
  // Build area served
  const areaServed = locationData ? {
    "@type": "City",
    "name": locationData.city,
    "containedIn": {
      "@type": "State",
      "name": locationData.state
    }
  } : {
    "@type": "Country",
    "name": "Australia"
  };

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `https://odindigital.com.au${url}#service`,
    "name": serviceName,
    "serviceType": serviceType,
    "description": description,
    "url": `https://odindigital.com.au${url}`,
    "image": "https://odindigital.com.au/odin-logo.png",
    "provider": {
      "@type": "Organization",
      "@id": "https://odindigital.com.au/#organization",
      "name": "Odin Digital",
      "telephone": "+61394983170",
      "email": "hello@odindigital.com.au",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11 Wilson Street",
        "addressLocality": "South Yarra",
        "addressRegion": "VIC",
        "postalCode": "3141",
        "addressCountry": "AU"
      }
    },
    "areaServed": areaServed,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "283",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$",
    ...(pricing && {
      "offers": {
        "@type": "Offer",
        "priceCurrency": pricing.priceCurrency || "AUD",
        "price": pricing.minPrice,
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": pricing.minPrice,
          "maxPrice": pricing.maxPrice,
          "priceCurrency": pricing.priceCurrency || "AUD"
        },
        "availability": "https://schema.org/InStock",
        "url": `https://odindigital.com.au${url}`
      }
    }),
    ...(benefits.length > 0 && {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${serviceName} Benefits`,
        "itemListElement": benefits.map((benefit, index) => ({
          "@type": "Offer",
          "position": index + 1,
          "itemOffered": {
            "@type": "Service",
            "name": benefit
          }
        }))
      }
    }),
    ...(features.length > 0 && {
      "additionalProperty": features.map(feature => ({
        "@type": "PropertyValue",
        "name": "Service Feature",
        "value": feature
      }))
    })
  };
};

// Location-based Service Schema
export const getLocationServiceSchema = (params: {
  serviceName: string;
  serviceType: string;
  city: string;
  description: string;
  url: string;
}) => {
  const { serviceName, serviceType, city, description, url } = params;
  const locationData = getLocationData(city);
  
  if (!locationData) return null;

  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `https://odindigital.com.au${url}#service`,
    "name": `${serviceName} ${city}`,
    "alternateName": `${city} ${serviceName}`,
    "serviceType": serviceType,
    "description": description,
    "url": `https://odindigital.com.au${url}`,
    "image": `https://odindigital.com.au/locations/${city.toLowerCase().replace(/\s+/g, '-')}.jpg`,
    "provider": {
      "@id": "https://odindigital.com.au/#organization"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": locationData.city,
      "addressRegion": locationData.state,
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": locationData.coordinates.lat,
      "longitude": locationData.coordinates.lng
    },
    "areaServed": {
      "@type": "City",
      "name": locationData.city,
      "containedIn": {
        "@type": "State",
        "name": locationData.state
      }
    },
    "telephone": "+61394983170",
    "email": "hello@odindigital.com.au",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "283",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  };
};
