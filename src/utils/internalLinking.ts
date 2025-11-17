/**
 * Internal Linking Helper
 * Provides contextual internal links for different content types
 */

export interface InternalLink {
  text: string;
  url: string;
  context: string;
}

export const getRelatedServiceLinks = (currentService: string): InternalLink[] => {
  const linkMap: Record<string, InternalLink[]> = {
    'seo': [
      { text: 'Local SEO services', url: '/services/local-seo', context: 'local search optimization' },
      { text: 'Google Ads management', url: '/services/google-ads-management', context: 'paid search campaigns' },
      { text: 'content marketing strategy', url: '/blog/blog-post-content-marketing', context: 'content creation' },
    ],
    'google-ads': [
      { text: 'SEO services', url: '/services/seo-agency', context: 'organic search optimization' },
      { text: 'Facebook Ads management', url: '/services/facebook-advertising', context: 'social media advertising' },
      { text: 'conversion rate optimization', url: '/blog/blog-post-analytics-cro', context: 'landing page optimization' },
    ],
    'facebook-ads': [
      { text: 'Google Ads services', url: '/services/google-ads-management', context: 'search advertising' },
      { text: 'Instagram advertising', url: '/services/instagram-advertising', context: 'visual social media' },
      { text: 'TikTok advertising', url: '/services/tiktok-advertising', context: 'short-form video ads' },
    ],
    'web-design': [
      { text: 'SEO optimization', url: '/services/seo-agency', context: 'search engine visibility' },
      { text: 'conversion rate optimization', url: '/blog/blog-post-analytics-cro', context: 'improving conversions' },
      { text: 'e-commerce solutions', url: '/services/ecommerce-agency', context: 'online store development' },
    ],
  };

  return linkMap[currentService] || [];
};

export const getCityServiceLinks = (city: string, currentService: string): InternalLink[] => {
  const services = ['seo', 'google-ads', 'facebook-ads', 'web-design'];
  return services
    .filter(s => s !== currentService)
    .map(service => ({
      text: `${service.toUpperCase()} ${city}`,
      url: `/services/${service}-${city.toLowerCase()}`,
      context: `${service} services in ${city}`,
    }));
};

export const getIndustryServiceLinks = (industry: string): InternalLink[] => {
  return [
    { text: 'SEO services', url: '/services/seo-agency', context: `SEO for ${industry}` },
    { text: 'Google Ads management', url: '/services/google-ads-management', context: `PPC advertising for ${industry}` },
    { text: 'Facebook Ads services', url: '/services/facebook-advertising', context: `social media advertising for ${industry}` },
    { text: 'web design services', url: '/services/website-design', context: `professional websites for ${industry}` },
  ];
};

export const getBlogServiceLinks = (topic: string): InternalLink[] => {
  const topicMap: Record<string, InternalLink[]> = {
    'content-marketing': [
      { text: 'SEO services', url: '/services/seo-agency', context: 'optimizing your content for search' },
      { text: 'social media marketing', url: '/services/social-media', context: 'promoting your content' },
    ],
    'seo': [
      { text: 'local SEO services', url: '/services/local-seo', context: 'local search optimization' },
      { text: 'SEO agency', url: '/services/seo-agency', context: 'professional SEO management' },
    ],
    'paid-ads': [
      { text: 'Google Ads management', url: '/services/google-ads-management', context: 'expert PPC campaigns' },
      { text: 'Facebook Ads services', url: '/services/facebook-advertising', context: 'social media advertising' },
    ],
  };

  return topicMap[topic] || [];
};

export const getCityCrossLinks = (currentCity: string, service: string): string[] => {
  const majorCities = ['sydney', 'melbourne', 'brisbane', 'perth', 'adelaide', 'canberra', 'hobart', 'darwin'];
  return majorCities
    .filter(city => city !== currentCity.toLowerCase())
    .slice(0, 4)
    .map(city => `/services/${service}-${city}`);
};
