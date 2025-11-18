/**
 * Centralized blog post metadata for Article schema deployment
 */

export interface BlogArticleData {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  url: string;
}

export const blogArticles: Record<string, BlogArticleData> = {
  'ai-seo-future-proof': {
    headline: "Future-Proof Your SEO Strategy in the Age of AI",
    description: "Learn how to adapt your SEO strategy for AI-powered search engines and maintain visibility in evolving search landscapes.",
    author: "Lucas Durante",
    datePublished: "2024-01-15",
    dateModified: "2024-01-15",
    image: "https://odindigital.com.au/blog/ai-seo-future-proof.jpg",
    url: "https://odindigital.com.au/blog/ai-seo-future-proof"
  },
  'ai-seo-guide': {
    headline: "The Complete Guide to AI-Powered SEO in 2024",
    description: "Master AI-powered SEO strategies to dominate search rankings and drive organic traffic in the age of artificial intelligence.",
    author: "Lucas Durante",
    datePublished: "2024-02-10",
    dateModified: "2024-02-10",
    image: "https://odindigital.com.au/blog/ai-seo-hero.jpg",
    url: "https://odindigital.com.au/blog/ai-seo-guide"
  },
  'beyond-the-boost-post': {
    headline: "Beyond the Boost Post: Advanced Facebook Advertising Strategies",
    description: "Move beyond basic boost posts and implement advanced Facebook advertising strategies that drive real ROI.",
    author: "Sarah Mitchell",
    datePublished: "2024-03-05",
    dateModified: "2024-03-05",
    image: "https://odindigital.com.au/blog/facebook-ads-strategy.jpg",
    url: "https://odindigital.com.au/blog/beyond-the-boost-post"
  },
  'analytics-cro': {
    headline: "Analytics & Conversion Rate Optimization: Data-Driven Growth",
    description: "Learn how to use analytics and CRO to optimize your digital marketing performance and maximize conversion rates.",
    author: "Emily Platt",
    datePublished: "2024-03-20",
    dateModified: "2024-03-20",
    image: "https://odindigital.com.au/blog/cro-conversion-optimization.jpg",
    url: "https://odindigital.com.au/blog/analytics-cro"
  },
  'email-marketing': {
    headline: "Email Marketing Mastery: Build, Grow, Convert",
    description: "Master email marketing strategies to build your list, nurture leads, and convert subscribers into paying customers.",
    author: "Alfonso Rodriguez",
    datePublished: "2024-04-01",
    dateModified: "2024-04-01",
    image: "https://odindigital.com.au/blog/email-list-building-hero.jpg",
    url: "https://odindigital.com.au/blog/email-marketing"
  },
  'social-media': {
    headline: "Social Media Marketing Trends 2024: What's Working Now",
    description: "Discover the latest social media marketing trends and strategies that are driving engagement and conversions in 2024.",
    author: "Matteo Banzon",
    datePublished: "2024-04-15",
    dateModified: "2024-04-15",
    image: "https://odindigital.com.au/blog/social-media-trends.jpg",
    url: "https://odindigital.com.au/blog/social-media"
  },
  'web-design': {
    headline: "Website Design Best Practices: Conversion-Focused Design",
    description: "Learn website design best practices that prioritize user experience and maximize conversion rates for business growth.",
    author: "Lucas Durante",
    datePublished: "2024-05-01",
    dateModified: "2024-05-01",
    image: "https://odindigital.com.au/blog/website-redesign-hero.jpg",
    url: "https://odindigital.com.au/blog/web-design"
  },
  'content-marketing': {
    headline: "Content Marketing Strategy: Create Content That Converts",
    description: "Build a winning content marketing strategy that attracts your ideal audience and drives measurable business results.",
    author: "Sarah Mitchell",
    datePublished: "2024-05-15",
    dateModified: "2024-05-15",
    image: "https://odindigital.com.au/blog/content-marketing-hero.jpg",
    url: "https://odindigital.com.au/blog/content-marketing"
  },
  'content-marketing-matrix': {
    headline: "The Content Marketing Matrix: Strategic Framework for Success",
    description: "Master the content marketing matrix framework to create strategic content that drives engagement and conversions at every stage.",
    author: "Emily Platt",
    datePublished: "2024-06-01",
    dateModified: "2024-06-01",
    image: "https://odindigital.com.au/blog/content-marketing-matrix-hero.jpg",
    url: "https://odindigital.com.au/blog/content-marketing-matrix"
  },
  'conversion-rate-optimisation': {
    headline: "Conversion Rate Optimization: Turn Traffic Into Revenue",
    description: "Implement proven CRO strategies to convert more website visitors into paying customers and maximize marketing ROI.",
    author: "Alfonso Rodriguez",
    datePublished: "2024-06-15",
    dateModified: "2024-06-15",
    image: "https://odindigital.com.au/blog/conversion-optimization.jpg",
    url: "https://odindigital.com.au/blog/conversion-rate-optimisation"
  },
  'data-privacy-2026': {
    headline: "Data Privacy 2026: Preparing for the Cookieless Future",
    description: "Navigate the cookieless future and adapt your digital marketing strategy for new data privacy regulations in 2026 and beyond.",
    author: "Matteo Banzon",
    datePublished: "2024-07-01",
    dateModified: "2024-07-01",
    image: "https://odindigital.com.au/blog/data-privacy-2026-hero.jpg",
    url: "https://odindigital.com.au/blog/data-privacy-2026"
  },
  'digital-marketing-mistakes': {
    headline: "10 Digital Marketing Mistakes Costing You Thousands",
    description: "Avoid these common digital marketing mistakes that drain your budget and sabotage your growth. Learn what works instead.",
    author: "Lucas Durante",
    datePublished: "2024-07-15",
    dateModified: "2024-07-15",
    image: "https://odindigital.com.au/blog/digital-marketing-mistakes-hero.jpg",
    url: "https://odindigital.com.au/blog/digital-marketing-mistakes"
  },
  'digital-marketing-strategy-2026': {
    headline: "Digital Marketing Strategy 2026: What's Working Now",
    description: "Build a winning digital marketing strategy for 2026 with proven tactics that drive real business growth and ROI.",
    author: "Sarah Mitchell",
    datePublished: "2024-08-01",
    dateModified: "2024-08-01",
    image: "https://odindigital.com.au/blog/digital-marketing-strategy-2026.jpg",
    url: "https://odindigital.com.au/blog/digital-marketing-strategy-2026"
  },
  'google-ads-guide': {
    headline: "Google Ads Guide 2024: Maximize ROI with PPC",
    description: "Master Google Ads with this comprehensive guide to PPC advertising that delivers maximum ROI and business growth.",
    author: "Emily Platt",
    datePublished: "2024-08-15",
    dateModified: "2024-08-15",
    image: "https://odindigital.com.au/blog/google-ads-hero.jpg",
    url: "https://odindigital.com.au/blog/google-ads-guide"
  },
  'local-seo-2026': {
    headline: "Local SEO 2026: Dominate Local Search Results",
    description: "Master local SEO strategies for 2026 and dominate Google Maps and local search results to attract more customers.",
    author: "Alfonso Rodriguez",
    datePublished: "2024-09-01",
    dateModified: "2024-09-01",
    image: "https://odindigital.com.au/blog/local-seo-2026.jpg",
    url: "https://odindigital.com.au/blog/local-seo-2026"
  },
  'local-seo-tradies': {
    headline: "Local SEO for Tradies: Get More Local Jobs",
    description: "Complete local SEO guide for tradies to rank higher in local search and attract more high-value jobs in your area.",
    author: "Matteo Banzon",
    datePublished: "2024-09-15",
    dateModified: "2024-09-15",
    image: "https://odindigital.com.au/blog/local-seo-strategies.jpg",
    url: "https://odindigital.com.au/blog/local-seo-tradies"
  },
  'marketing-automation': {
    headline: "Marketing Automation 2024: Scale Your Growth",
    description: "Implement marketing automation to scale your business growth, nurture leads automatically, and maximize marketing efficiency.",
    author: "Lucas Durante",
    datePublished: "2024-10-01",
    dateModified: "2024-10-01",
    image: "https://odindigital.com.au/blog/marketing-automation-hero.jpg",
    url: "https://odindigital.com.au/blog/marketing-automation"
  },
  'seo-checklist-2025': {
    headline: "SEO Checklist 2025: Complete Technical SEO Guide",
    description: "Use this comprehensive SEO checklist to optimize your website for search engines and rank higher in 2025.",
    author: "Sarah Mitchell",
    datePublished: "2024-10-15",
    dateModified: "2024-10-15",
    image: "https://odindigital.com.au/blog/seo-deadly-sins.jpg",
    url: "https://odindigital.com.au/blog/seo-checklist-2025"
  },
  'shopify-seo': {
    headline: "Shopify SEO: Complete Guide to E-commerce Rankings",
    description: "Master Shopify SEO with this complete guide to optimizing your e-commerce store for search engines and driving organic sales.",
    author: "Emily Platt",
    datePublished: "2024-11-01",
    dateModified: "2024-11-01",
    image: "https://odindigital.com.au/blog/shopify-seo-hero.jpg",
    url: "https://odindigital.com.au/blog/shopify-seo"
  },
  'tiktok-for-business': {
    headline: "TikTok for Business: Marketing Strategy That Works",
    description: "Build a profitable TikTok marketing strategy for your business and reach millions of engaged users with viral content.",
    author: "Alfonso Rodriguez",
    datePublished: "2024-11-15",
    dateModified: "2024-11-15",
    image: "https://odindigital.com.au/blog/tiktok-business-hero-new.jpg",
    url: "https://odindigital.com.au/blog/tiktok-for-business"
  },
  'will-ai-replace-seo': {
    headline: "Will AI Replace SEO? The Future of Search Optimization",
    description: "Explore whether AI will replace SEO and learn how to adapt your search optimization strategy for the AI-powered future.",
    author: "Matteo Banzon",
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    image: "https://odindigital.com.au/blog/will-ai-replace-seo-hero.jpg",
    url: "https://odindigital.com.au/blog/will-ai-replace-seo"
  }
};
