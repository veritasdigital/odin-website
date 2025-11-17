/**
 * Comparison table data for featured snippets across service pages
 */

export interface ComparisonRow {
  feature: string;
  basic: string;
  professional: string;
  enterprise: string;
}

export interface PricingComparison {
  title: string;
  description: string;
  rows: ComparisonRow[];
}

export const seoPackageComparison: PricingComparison = {
  title: "SEO Service Packages Comparison",
  description: "Compare our SEO packages to find the perfect fit for your business goals and budget.",
  rows: [
    {
      feature: "Monthly Investment",
      basic: "$1,500 - $3,000",
      professional: "$3,000 - $7,000",
      enterprise: "$7,000+"
    },
    {
      feature: "Keywords Targeted",
      basic: "10-20 keywords",
      professional: "20-50 keywords",
      enterprise: "50+ keywords"
    },
    {
      feature: "Content Creation",
      basic: "2-4 articles/month",
      professional: "4-8 articles/month",
      enterprise: "8-15 articles/month"
    },
    {
      feature: "Link Building",
      basic: "5-10 backlinks/month",
      professional: "10-25 backlinks/month",
      enterprise: "25+ backlinks/month"
    },
    {
      feature: "Technical SEO Audits",
      basic: "Quarterly",
      professional: "Monthly",
      enterprise: "Weekly"
    },
    {
      feature: "Reporting Frequency",
      basic: "Monthly",
      professional: "Bi-weekly",
      enterprise: "Weekly + Real-time Dashboard"
    },
    {
      feature: "Dedicated Account Manager",
      basic: "Shared",
      professional: "Dedicated",
      enterprise: "Senior Strategist + Team"
    },
    {
      feature: "Best For",
      basic: "Small businesses, startups",
      professional: "Growing businesses, competitive niches",
      enterprise: "Large enterprises, national brands"
    }
  ]
};

export const googleAdsComparison: PricingComparison = {
  title: "Google Ads Management Packages",
  description: "Choose the right Google Ads management package for your advertising budget and goals.",
  rows: [
    {
      feature: "Management Fee",
      basic: "$1,000 - $2,000/month",
      professional: "$2,000 - $5,000/month",
      enterprise: "$5,000+/month"
    },
    {
      feature: "Recommended Ad Spend",
      basic: "$2,000 - $5,000/month",
      professional: "$5,000 - $20,000/month",
      enterprise: "$20,000+/month"
    },
    {
      feature: "Campaign Types",
      basic: "Search campaigns",
      professional: "Search + Display + Shopping",
      enterprise: "All campaign types + YouTube"
    },
    {
      feature: "Ad Variations Testing",
      basic: "2-3 variations per ad group",
      professional: "5-7 variations per ad group",
      enterprise: "10+ variations + Dynamic ads"
    },
    {
      feature: "Landing Page Optimization",
      basic: "Recommendations",
      professional: "A/B testing + recommendations",
      enterprise: "Full CRO service included"
    },
    {
      feature: "Reporting",
      basic: "Monthly dashboard",
      professional: "Bi-weekly + real-time access",
      enterprise: "Weekly + custom analytics"
    },
    {
      feature: "Response Time",
      basic: "24-48 hours",
      professional: "12-24 hours",
      enterprise: "Same business day"
    },
    {
      feature: "Best For",
      basic: "Local service businesses",
      professional: "E-commerce, multi-location",
      enterprise: "National brands, high-volume"
    }
  ]
};

export const facebookAdsComparison: PricingComparison = {
  title: "Facebook & Instagram Ads Packages",
  description: "Select the Meta Ads package that aligns with your social advertising objectives.",
  rows: [
    {
      feature: "Management Fee",
      basic: "$800 - $1,500/month",
      professional: "$1,500 - $4,000/month",
      enterprise: "$4,000+/month"
    },
    {
      feature: "Recommended Ad Spend",
      basic: "$1,500 - $4,000/month",
      professional: "$4,000 - $15,000/month",
      enterprise: "$15,000+/month"
    },
    {
      feature: "Creative Assets",
      basic: "3-5 ad creatives/month",
      professional: "8-12 ad creatives/month",
      enterprise: "20+ ad creatives/month"
    },
    {
      feature: "Audience Testing",
      basic: "2-3 audience segments",
      professional: "5-8 audience segments",
      enterprise: "15+ audience segments + lookalikes"
    },
    {
      feature: "Platforms",
      basic: "Facebook + Instagram",
      professional: "Facebook + Instagram + Messenger",
      enterprise: "Full Meta suite + Audience Network"
    },
    {
      feature: "Funnel Strategy",
      basic: "Single-stage campaigns",
      professional: "Full-funnel (Awareness to Conversion)",
      enterprise: "Multi-touch attribution modeling"
    },
    {
      feature: "Retargeting",
      basic: "Basic website retargeting",
      professional: "Dynamic product retargeting",
      enterprise: "Advanced multi-platform retargeting"
    },
    {
      feature: "Best For",
      basic: "B2C local businesses",
      professional: "E-commerce, lead generation",
      enterprise: "High-volume e-commerce, SaaS"
    }
  ]
};

export const webDesignComparison: PricingComparison = {
  title: "Web Design & Development Packages",
  description: "Compare our web design packages to find the perfect solution for your online presence.",
  rows: [
    {
      feature: "Investment Range",
      basic: "$2,500 - $5,000",
      professional: "$5,000 - $15,000",
      enterprise: "$15,000+"
    },
    {
      feature: "Number of Pages",
      basic: "5-10 pages",
      professional: "10-30 pages",
      enterprise: "30+ pages or custom"
    },
    {
      feature: "Design Approach",
      basic: "Template-based customization",
      professional: "Custom design + wireframes",
      enterprise: "Full UX research + custom design"
    },
    {
      feature: "Mobile Optimization",
      basic: "Responsive design",
      professional: "Mobile-first + tablet optimization",
      enterprise: "Progressive Web App (PWA)"
    },
    {
      feature: "SEO Integration",
      basic: "Basic on-page SEO",
      professional: "Technical SEO + schema markup",
      enterprise: "Enterprise SEO + site architecture"
    },
    {
      feature: "E-commerce Features",
      basic: "Not included",
      professional: "Up to 100 products",
      enterprise: "Unlimited + advanced features"
    },
    {
      feature: "Timeline",
      basic: "4-6 weeks",
      professional: "6-10 weeks",
      enterprise: "10-16 weeks"
    },
    {
      feature: "Best For",
      basic: "Startups, small businesses",
      professional: "Established businesses",
      enterprise: "Large enterprises, complex needs"
    }
  ]
};

export const channelComparison: PricingComparison = {
  title: "Digital Marketing Channels Comparison",
  description: "Understand which digital marketing channels are best suited for your business goals.",
  rows: [
    {
      feature: "Time to Results",
      basic: "SEO: 3-6 months",
      professional: "Google Ads: 1-2 weeks",
      enterprise: "Facebook Ads: 1-2 weeks"
    },
    {
      feature: "Cost per Lead",
      basic: "$50 - $200 (long-term)",
      professional: "$30 - $150",
      enterprise: "$20 - $100"
    },
    {
      feature: "Traffic Quality",
      basic: "High intent (organic search)",
      professional: "High intent (paid search)",
      enterprise: "Interest-based targeting"
    },
    {
      feature: "Longevity of Results",
      basic: "Long-term compound growth",
      professional: "Immediate, stops when paused",
      enterprise: "Immediate, stops when paused"
    },
    {
      feature: "Best for B2B",
      basic: "Excellent",
      professional: "Excellent",
      enterprise: "Good (LinkedIn better)"
    },
    {
      feature: "Best for E-commerce",
      basic: "Excellent (long-term)",
      professional: "Excellent (Shopping ads)",
      enterprise: "Excellent (Dynamic product ads)"
    },
    {
      feature: "Best for Local Business",
      basic: "Excellent (Local SEO)",
      professional: "Excellent (Local campaigns)",
      enterprise: "Good (Local awareness)"
    },
    {
      feature: "Recommended Strategy",
      basic: "Foundation for all businesses",
      professional: "Quick wins + scalability",
      enterprise: "Brand awareness + retargeting"
    }
  ]
};
