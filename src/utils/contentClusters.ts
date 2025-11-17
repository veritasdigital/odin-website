/**
 * Content Clusters Utility
 * Manages hub and spoke architecture for internal linking
 */

export interface HubPage {
  title: string;
  url: string;
  description: string;
  anchorText: string;
}

export interface SpokePage {
  title: string;
  url: string;
  city?: string;
  service?: string;
  industry?: string;
  anchorText: string;
}

export interface ContentCluster {
  hub: HubPage;
  spokes: SpokePage[];
  relatedHubs?: HubPage[];
}

/**
 * SEO Services Hub and Spokes
 */
export const seoServicesCluster: ContentCluster = {
  hub: {
    title: "SEO Services",
    url: "/services/seo",
    description: "Comprehensive SEO services across Australia",
    anchorText: "SEO services"
  },
  spokes: [
    { title: "SEO Melbourne", url: "/services/melbourne-seo", city: "Melbourne", service: "SEO", anchorText: "SEO services in Melbourne" },
    { title: "SEO Sydney", url: "/services/sydney-seo", city: "Sydney", service: "SEO", anchorText: "Sydney SEO services" },
    { title: "SEO Brisbane", url: "/services/brisbane-seo", city: "Brisbane", service: "SEO", anchorText: "Brisbane SEO agency" },
    { title: "SEO Perth", url: "/services/perth-seo", city: "Perth", service: "SEO", anchorText: "Perth SEO services" },
    { title: "SEO Adelaide", url: "/services/adelaide-seo", city: "Adelaide", service: "SEO", anchorText: "Adelaide SEO experts" },
    { title: "SEO Canberra", url: "/services/canberra-seo", city: "Canberra", service: "SEO", anchorText: "Canberra SEO services" },
    { title: "SEO Darwin", url: "/services/darwin-seo", city: "Darwin", service: "SEO", anchorText: "Darwin SEO agency" },
    { title: "SEO Gold Coast", url: "/services/gold-coast-seo", city: "Gold Coast", service: "SEO", anchorText: "Gold Coast SEO services" },
    { title: "SEO Hobart", url: "/services/hobart-seo", city: "Hobart", service: "SEO", anchorText: "Hobart SEO services" },
    { title: "SEO Launceston", url: "/services/launceston-seo", city: "Launceston", service: "SEO", anchorText: "Launceston SEO agency" },
    { title: "SEO Ballarat", url: "/services/ballarat-seo", city: "Ballarat", service: "SEO", anchorText: "Ballarat SEO services" },
    { title: "SEO Newcastle", url: "/services/newcastle-seo", city: "Newcastle", service: "SEO", anchorText: "Newcastle SEO experts" },
    { title: "Local SEO", url: "/services/local-seo", service: "Local SEO", anchorText: "local SEO services" },
    { title: "Ecommerce SEO", url: "/services/ecommerce-seo", service: "Ecommerce SEO", anchorText: "ecommerce SEO" },
  ],
  relatedHubs: [
    { title: "Google Ads Services", url: "/services/google-ads", description: "PPC management", anchorText: "Google Ads management" },
    { title: "Web Design Services", url: "/services/website-design", description: "Web design", anchorText: "web design services" },
  ]
};

/**
 * Google Ads Hub and Spokes
 */
export const googleAdsCluster: ContentCluster = {
  hub: {
    title: "Google Ads Services",
    url: "/services/google-ads",
    description: "Expert Google Ads management across Australia",
    anchorText: "Google Ads services"
  },
  spokes: [
    { title: "Google Ads Melbourne", url: "/services/google-ads-melbourne", city: "Melbourne", service: "Google Ads", anchorText: "Google Ads in Melbourne" },
    { title: "Google Ads Sydney", url: "/services/google-ads-sydney", city: "Sydney", service: "Google Ads", anchorText: "Sydney Google Ads management" },
    { title: "Google Ads Brisbane", url: "/services/google-ads-brisbane", city: "Brisbane", service: "Google Ads", anchorText: "Brisbane Google Ads services" },
    { title: "Google Ads Perth", url: "/services/google-ads-perth", city: "Perth", service: "Google Ads", anchorText: "Perth Google Ads agency" },
    { title: "Google Ads Adelaide", url: "/services/google-ads-adelaide", city: "Adelaide", service: "Google Ads", anchorText: "Adelaide Google Ads management" },
    { title: "Google Ads Canberra", url: "/services/google-ads-canberra", city: "Canberra", service: "Google Ads", anchorText: "Canberra Google Ads services" },
    { title: "Google Ads Darwin", url: "/services/google-ads-darwin", city: "Darwin", service: "Google Ads", anchorText: "Darwin Google Ads agency" },
    { title: "Google Ads Gold Coast", url: "/services/google-ads-gold-coast", city: "Gold Coast", service: "Google Ads", anchorText: "Gold Coast Google Ads" },
    { title: "Google Ads Hobart", url: "/services/google-ads-hobart", city: "Hobart", service: "Google Ads", anchorText: "Hobart Google Ads services" },
    { title: "Google Ads Launceston", url: "/services/google-ads-launceston", city: "Launceston", service: "Google Ads", anchorText: "Launceston Google Ads" },
    { title: "Google Ads Ballarat", url: "/services/google-ads-ballarat", city: "Ballarat", service: "Google Ads", anchorText: "Ballarat Google Ads management" },
    { title: "Google Ads Newcastle", url: "/services/google-ads-newcastle", city: "Newcastle", service: "Google Ads", anchorText: "Newcastle Google Ads services" },
    { title: "PPC Management", url: "/services/ppc-management", service: "PPC Management", anchorText: "PPC management services" },
  ],
  relatedHubs: [
    { title: "SEO Services", url: "/services/seo", description: "SEO services", anchorText: "SEO services" },
    { title: "Facebook Ads", url: "/services/facebook-advertising", description: "Meta Ads", anchorText: "Facebook advertising" },
  ]
};

/**
 * Social Media Advertising Hub and Spokes
 */
export const socialMediaCluster: ContentCluster = {
  hub: {
    title: "Social Media Advertising",
    url: "/services/social-media-advertising",
    description: "Facebook, Instagram, TikTok, LinkedIn advertising",
    anchorText: "social media advertising"
  },
  spokes: [
    { title: "Facebook Ads Melbourne", url: "/services/facebook-ads-melbourne", city: "Melbourne", service: "Facebook Ads", anchorText: "Facebook Ads in Melbourne" },
    { title: "Facebook Ads Sydney", url: "/services/facebook-ads-sydney", city: "Sydney", service: "Facebook Ads", anchorText: "Sydney Facebook Ads" },
    { title: "Facebook Ads Brisbane", url: "/services/facebook-ads-brisbane", city: "Brisbane", service: "Facebook Ads", anchorText: "Brisbane Facebook advertising" },
    { title: "Facebook Ads Perth", url: "/services/facebook-ads-perth", city: "Perth", service: "Facebook Ads", anchorText: "Perth Meta Ads" },
    { title: "Facebook Ads Adelaide", url: "/services/facebook-ads-adelaide", city: "Adelaide", service: "Facebook Ads", anchorText: "Adelaide Facebook Ads" },
    { title: "Facebook Ads Canberra", url: "/services/facebook-ads-canberra", city: "Canberra", service: "Facebook Ads", anchorText: "Canberra Meta Ads" },
    { title: "Facebook Ads Darwin", url: "/services/facebook-ads-darwin", city: "Darwin", service: "Facebook Ads", anchorText: "Darwin Facebook advertising" },
    { title: "Facebook Ads Gold Coast", url: "/services/facebook-ads-gold-coast", city: "Gold Coast", service: "Facebook Ads", anchorText: "Gold Coast Facebook Ads" },
    { title: "Facebook Ads Hobart", url: "/services/facebook-ads-hobart", city: "Hobart", service: "Facebook Ads", anchorText: "Hobart Meta Ads" },
    { title: "Facebook Ads Launceston", url: "/services/facebook-ads-launceston", city: "Launceston", service: "Facebook Ads", anchorText: "Launceston Facebook Ads" },
    { title: "Facebook Ads Ballarat", url: "/services/facebook-ads-ballarat", city: "Ballarat", service: "Facebook Ads", anchorText: "Ballarat Facebook advertising" },
    { title: "Facebook Ads Newcastle", url: "/services/facebook-ads-newcastle", city: "Newcastle", service: "Facebook Ads", anchorText: "Newcastle Meta Ads" },
    { title: "Instagram Advertising", url: "/services/instagram-advertising", service: "Instagram Ads", anchorText: "Instagram advertising" },
    { title: "TikTok Advertising", url: "/services/tiktok-advertising", service: "TikTok Ads", anchorText: "TikTok advertising" },
    { title: "LinkedIn Advertising", url: "/services/linkedin-advertising", service: "LinkedIn Ads", anchorText: "LinkedIn advertising" },
  ],
  relatedHubs: [
    { title: "Google Ads Services", url: "/services/google-ads", description: "PPC management", anchorText: "Google Ads services" },
    { title: "SEO Services", url: "/services/seo", description: "SEO services", anchorText: "SEO services" },
  ]
};

/**
 * Industries Hub and Spokes
 */
export const industriesCluster: ContentCluster = {
  hub: {
    title: "Industries We Serve",
    url: "/our-industries",
    description: "Specialized digital marketing for specific industries",
    anchorText: "industries we serve"
  },
  spokes: [
    { title: "Lawyers Marketing", url: "/industries/lawyers", industry: "Lawyers", anchorText: "marketing for lawyers" },
    { title: "Dentists Marketing", url: "/industries/dentists", industry: "Dentists", anchorText: "dental practice marketing" },
    { title: "Accounting Firms Marketing", url: "/industries/accounting-firms", industry: "Accountants", anchorText: "accounting firm marketing" },
    { title: "Real Estate Agents Marketing", url: "/industries/real-estate-agents", industry: "Real Estate", anchorText: "real estate marketing" },
    { title: "Plumbers Marketing", url: "/industries/plumbers", industry: "Plumbers", anchorText: "plumbing marketing" },
    { title: "Electricians Marketing", url: "/industries/electricians", industry: "Electricians", anchorText: "electrician marketing" },
    { title: "Cosmetic Surgeons Marketing", url: "/industries/cosmetic-surgeons", industry: "Cosmetic Surgery", anchorText: "cosmetic surgery marketing" },
    { title: "Orthodontists Marketing", url: "/industries/orthodontists", industry: "Orthodontists", anchorText: "orthodontic marketing" },
    { title: "Pediatric Dentists Marketing", url: "/industries/pediatric-dentists", industry: "Pediatric Dentists", anchorText: "pediatric dental marketing" },
    { title: "Family Lawyers Marketing", url: "/industries/family-lawyers", industry: "Family Law", anchorText: "family law marketing" },
    { title: "Personal Injury Lawyers Marketing", url: "/industries/personal-injury-lawyers", industry: "Personal Injury", anchorText: "personal injury lawyer marketing" },
    { title: "Immigration Lawyers Marketing", url: "/industries/immigration-lawyers", industry: "Immigration Law", anchorText: "immigration lawyer marketing" },
    { title: "Criminal Defense Lawyers Marketing", url: "/industries/criminal-defense-lawyers", industry: "Criminal Defense", anchorText: "criminal defense marketing" },
    { title: "Landscaping Companies Marketing", url: "/industries/landscaping-companies", industry: "Landscaping", anchorText: "landscaping company marketing" },
    { title: "Roofing Companies Marketing", url: "/industries/roofing-companies", industry: "Roofing", anchorText: "roofing company marketing" },
    { title: "HVAC Contractors Marketing", url: "/industries/hvac-contractors", industry: "HVAC", anchorText: "HVAC contractor marketing" },
  ],
  relatedHubs: [
    { title: "SEO Services", url: "/services/seo", description: "SEO services", anchorText: "SEO services" },
    { title: "Google Ads Services", url: "/services/google-ads", description: "PPC management", anchorText: "Google Ads management" },
  ]
};

/**
 * Web Design Hub and Spokes
 */
export const webDesignCluster: ContentCluster = {
  hub: {
    title: "Web Design Services",
    url: "/services/website-design",
    description: "Professional web design across Australia",
    anchorText: "web design services"
  },
  spokes: [
    { title: "Web Design Melbourne", url: "/services/web-design-melbourne", city: "Melbourne", service: "Web Design", anchorText: "web design in Melbourne" },
    { title: "Web Design Sydney", url: "/services/web-design-sydney", city: "Sydney", service: "Web Design", anchorText: "Sydney web design" },
    { title: "Web Design Brisbane", url: "/services/web-design-brisbane", city: "Brisbane", service: "Web Design", anchorText: "Brisbane web design services" },
    { title: "Web Design Perth", url: "/services/web-design-perth", city: "Perth", service: "Web Design", anchorText: "Perth web design" },
    { title: "Web Design Adelaide", url: "/services/web-design-adelaide", city: "Adelaide", service: "Web Design", anchorText: "Adelaide web design agency" },
    { title: "Web Design Canberra", url: "/services/web-design-canberra", city: "Canberra", service: "Web Design", anchorText: "Canberra web design" },
    { title: "Web Design Darwin", url: "/services/web-design-darwin", city: "Darwin", service: "Web Design", anchorText: "Darwin web design services" },
    { title: "Web Design Gold Coast", url: "/services/web-design-gold-coast", city: "Gold Coast", service: "Web Design", anchorText: "Gold Coast web design" },
    { title: "Web Design Hobart", url: "/services/web-design-hobart", city: "Hobart", service: "Web Design", anchorText: "Hobart web design" },
    { title: "Web Design Launceston", url: "/services/web-design-launceston", city: "Launceston", service: "Web Design", anchorText: "Launceston web design services" },
    { title: "Web Design Ballarat", url: "/services/web-design-ballarat", city: "Ballarat", service: "Web Design", anchorText: "Ballarat web design" },
    { title: "Web Design Newcastle", url: "/services/web-design-newcastle", city: "Newcastle", service: "Web Design", anchorText: "Newcastle web design agency" },
  ],
  relatedHubs: [
    { title: "SEO Services", url: "/services/seo", description: "SEO services", anchorText: "SEO services" },
    { title: "Google Ads Services", url: "/services/google-ads", description: "PPC management", anchorText: "Google Ads management" },
  ]
};

/**
 * Get related locations for a specific city and service
 */
export function getRelatedLocations(currentCity: string, service: string): SpokePage[] {
  let cluster: ContentCluster;
  
  switch (service.toLowerCase()) {
    case 'seo':
      cluster = seoServicesCluster;
      break;
    case 'google ads':
    case 'ppc':
      cluster = googleAdsCluster;
      break;
    case 'facebook ads':
    case 'meta ads':
    case 'social media':
      cluster = socialMediaCluster;
      break;
    case 'web design':
      cluster = webDesignCluster;
      break;
    default:
      return [];
  }
  
  return cluster.spokes
    .filter(spoke => spoke.city && spoke.city !== currentCity)
    .slice(0, 4); // Return top 4 related locations
}

/**
 * Get hub page for a specific service
 */
export function getHubForService(service: string): HubPage | null {
  switch (service.toLowerCase()) {
    case 'seo':
      return seoServicesCluster.hub;
    case 'google ads':
    case 'ppc':
      return googleAdsCluster.hub;
    case 'facebook ads':
    case 'meta ads':
    case 'social media':
      return socialMediaCluster.hub;
    case 'web design':
      return webDesignCluster.hub;
    default:
      return null;
  }
}

/**
 * Get all spokes for a specific hub
 */
export function getSpokesForHub(hubUrl: string): SpokePage[] {
  const clusters = [
    seoServicesCluster,
    googleAdsCluster,
    socialMediaCluster,
    industriesCluster,
    webDesignCluster
  ];
  
  const cluster = clusters.find(c => c.hub.url === hubUrl);
  return cluster ? cluster.spokes : [];
}

/**
 * Get related services for cross-linking
 */
export function getRelatedServices(currentService: string, city?: string): SpokePage[] {
  const services = [];
  
  if (currentService !== 'SEO' && city) {
    services.push({
      title: `SEO ${city}`,
      url: `/services/${city.toLowerCase().replace(/\s+/g, '-')}-seo`,
      city,
      service: 'SEO',
      anchorText: `SEO services in ${city}`
    });
  }
  
  if (currentService !== 'Google Ads' && city) {
    services.push({
      title: `Google Ads ${city}`,
      url: `/services/google-ads-${city.toLowerCase().replace(/\s+/g, '-')}`,
      city,
      service: 'Google Ads',
      anchorText: `Google Ads in ${city}`
    });
  }
  
  if (currentService !== 'Facebook Ads' && city) {
    services.push({
      title: `Facebook Ads ${city}`,
      url: `/services/facebook-ads-${city.toLowerCase().replace(/\s+/g, '-')}`,
      city,
      service: 'Facebook Ads',
      anchorText: `Facebook Ads in ${city}`
    });
  }
  
  if (currentService !== 'Web Design' && city) {
    services.push({
      title: `Web Design ${city}`,
      url: `/services/web-design-${city.toLowerCase().replace(/\s+/g, '-')}`,
      city,
      service: 'Web Design',
      anchorText: `web design in ${city}`
    });
  }
  
  return services.slice(0, 3);
}
