import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import LocationContent from "@/components/LocationContent";
import { RelatedLocations } from "@/components/RelatedLocations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  TrendingUp, 
  Target, 
  DollarSign, 
  Shield,
  AlertCircle,
  Search,
  Laptop,
  Users,
  Award,
  Clock,
  BarChart,
  CheckCircle,
  MessageSquare,
  Eye,
  Settings,
  Zap
} from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { SideTab } from "@/components/SideTab";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { Link } from "react-router-dom";
import { getRelatedLocations, getHubForService } from "@/utils/contentClusters";
import LocationMap from "@/components/LocationMap";
import { getLocationData } from "@/utils/locationData";

export default function GoogleAdsMelbourne() {
  const { openForm } = useMarketingForm();
  const [showStickyButton, setShowStickyButton] = useState(false);
  const hub = getHubForService("Google Ads");
  const relatedLocationsList = getRelatedLocations("Melbourne", "Google Ads");

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Performance-focused digital marketing agency specializing in PPC, Meta Ads, Web Design, and SEO with no lock-in contracts.",
        "founder": {
          "@type": "Person",
          "name": "Lucas Durante"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "url": "https://growth-conduit-central.lovable.app/contact"
        },
        "sameAs": [
          "https://www.linkedin.com/company/odin-digital",
          "https://www.facebook.com/odindigital",
          "https://twitter.com/odindigital"
        ]
      },
      {
        "@type": "ProfessionalService",
        "name": "Odin Digital - Google Ads Melbourne",
        "image": "https://growth-conduit-central.lovable.app/melbourne-ppc.jpg",
        "url": "https://growth-conduit-central.lovable.app/google-ads-melbourne",
        "telephone": "+61-XXX-XXX-XXX",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Melbourne",
          "addressRegion": "VIC",
          "postalCode": "3000",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -37.8136,
          "longitude": 144.9631
        },
        "areaServed": {
          "@type": "City",
          "name": "Melbourne"
        },
        "priceRange": "$$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "50"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Google Ads Management Melbourne",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "City",
          "name": "Melbourne"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "PPC Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Ads Management Melbourne",
                "description": "Full-service Google Ads management focused on maximizing ROI and minimizing wasted spend."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Advanced Conversion Tracking",
                "description": "Server-side conversion tracking setup for accurate revenue attribution."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Landing Page Design",
                "description": "High-converting, mobile-first landing pages tailored for Google Ads campaigns."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why should I hire a Google Ads agency Melbourne instead of managing it myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While managing your own Google Ads can seem cost-effective, it often leads to significant wasted spend and missed opportunities. Google Ads is a complex, constantly evolving platform. A professional Google Ads agency Melbourne firm like Odin Digital has the expertise, tools, and time to manage your campaigns for maximum profitability. We spot costly mistakes, implement advanced bidding strategies, and optimize for conversion data, not just clicks. Our team's singular focus is on achieving a high ROI, which is why our clients see a 540% average return. Hiring us isn't an expense; it's an investment that frees up your time and ensures your budget is working as hard as possible to generate leads and sales."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Google Ads management Melbourne and PPC management Melbourne?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In the context of our services, the terms are often used interchangeably, but 'PPC management Melbourne' (Pay-Per-Click) is the broader term. PPC includes all paid advertising where you pay for a click, such as Google Ads, Meta Ads (Facebook/Instagram), and LinkedIn Ads. 'Google Ads management Melbourne' specifically refers to managing campaigns within the Google platform (Search, Display, Shopping, YouTube). At Odin Digital, we are experts in both. Our focus is on the entire PPC ecosystem, ensuring your ad spend is optimized across all channels to maximize your overall return on investment."
            }
          },
          {
            "@type": "Question",
            "name": "How much does it cost to hire an adwords management company Melbourne?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost to hire an adwords management company Melbourne can vary widely, but our pricing is based on a percentage of your ad spend, ensuring our success is directly tied to yours. We don't offer cheap, fixed-price packages because they rarely work. Our custom strategies are built to deliver maximum ROI, not minimum cost. The best way to determine the exact investment is through a free strategy session. We'll analyze your goals and current spend, and provide a transparent proposal that details both the management fee and the expected return, ensuring you see us as a profit centre, not a cost."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from a PPC agency Melbourne?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike SEO, which can take 6-12 months, Google Ads delivers immediate visibility. You'll start seeing traffic and data within days of launch. However, optimal performance requires ongoing optimization. Most Melbourne businesses see meaningful improvements in CPA and ROAS within the first 60-90 days as we refine targeting, ad copy, and bidding strategies based on real conversion data. The key is partnering with a PPC agency Melbourne that actively manages and optimizes your campaigns daily, not quarterly."
            }
          },
          {
            "@type": "Question",
            "name": "What industries do you specialize in for Google Ads management Melbourne?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work with a diverse range of Melbourne-based businesses, including e-commerce, professional services (legal, accounting, medical), home services (plumbing, HVAC, landscaping), B2B SaaS, and retail. Our approach is customized for each industry, focusing on your specific customer journey, competitive landscape, and profit margins. Whether you're a local service provider or a national brand targeting Melbourne customers, we have the expertise to drive results."
            }
          },
          {
            "@type": "Question",
            "name": "Do you only do Google Ads, or do you offer other services like SEO and Meta Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While we specialize in Google Ads and PPC management Melbourne, we also offer comprehensive digital marketing services including SEO, Meta Ads (Facebook/Instagram), LinkedIn Ads, and custom web design. Our integrated approach ensures all your marketing channels work together to maximize overall ROI. Many of our clients start with Google Ads and expand into other services as they see results."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure my Google Ads budget isn't wasted?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Budget efficiency is our top priority. We use a combination of precise keyword targeting (eliminating wasteful broad match keywords), geographic targeting (ensuring ads only show to Melbourne-area customers), negative keyword lists (blocking irrelevant searches), conversion tracking (only bidding on actions that drive revenue), and daily performance monitoring. Unlike agencies that 'set and forget,' we actively review and optimize your campaigns daily to ensure every dollar is working toward your goals."
            }
          },
          {
            "@type": "Question",
            "name": "What makes Odin Digital different from other PPC management Melbourne agencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Three core differences: (1) No Lock-In Contracts – We earn your business every month. (2) 100% Transparency – You own your Google Ads account, and we give you full access and weekly updates. (3) ROI Obsession – We're not satisfied with 'good enough.' Our 540% average ROI and 95% client retention rate prove we're maniacally focused on driving actual revenue, not just clicks. We're a boutique agency that treats your business like our own."
            }
          },
          {
            "@type": "Question",
            "name": "Can you take over my existing Google Ads campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. In fact, most of our clients come to us after poor experiences with other agencies or DIY attempts. We'll conduct a comprehensive audit of your existing campaigns, identify what's working (and what's not), and implement immediate improvements. Typically, we can reduce wasted spend by 30-50% in the first month while simultaneously improving lead quality and conversion rates."
            }
          },
          {
            "@type": "Question",
            "name": "How do you measure success for Google Ads campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We focus on business outcomes, not vanity metrics. The key performance indicators (KPIs) we track include: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Conversion Rate, Revenue Generated, and Customer Lifetime Value (CLV). Our goal is simple: ensure you're making more money than you're spending. Every optimization decision is made with these ROI-focused metrics in mind."
            }
          },
          {
            "@type": "Question",
            "name": "Do you require a minimum ad spend budget?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While we can work with budgets as low as $2,000/month, we recommend a minimum of $3,000-$5,000/month for Melbourne businesses to see meaningful results in competitive industries. Google Ads requires enough budget to gather statistically significant data and test multiple ad variations. During your free strategy session, we'll provide an honest assessment of what budget is needed to achieve your specific goals in your market."
            }
          },
          {
            "@type": "Question",
            "name": "What is your contract length and cancellation policy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We operate on a month-to-month basis with no long-term lock-in contracts. You can cancel with 30 days' written notice at any time. We believe in earning your business every single month through results and exceptional service. Our 95% client retention rate shows that when you're seeing a strong ROI, there's no reason to leave."
            }
          },
          {
            "@type": "Question",
            "name": "How often will I receive reports and updates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You'll receive weekly email updates with key performance metrics and a comprehensive monthly report detailing campaign performance, optimizations made, and strategic recommendations. You'll also have 24/7 access to your Google Ads account and our custom reporting dashboard. Plus, your dedicated account manager is available via phone or email for questions anytime."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with landing page design for my Google Ads campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. In fact, we insist on it for many clients. A poorly designed landing page can kill an otherwise great Google Ads campaign. We offer custom landing page design and optimization as part of our service, ensuring your ads send traffic to high-converting pages that are optimized for mobile, load fast, and have a clear call-to-action (CTA). This is a key differentiator from agencies that only focus on the ads themselves."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer Google Ads services in other Australian cities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, while we specialize in Melbourne, we also provide expert Google Ads management for businesses across Australia. If you're based in another city, we can tailor our strategies to your local market."
            }
          },
          {
            "@type": "Question",
            "name": "What is the first step to get started with Odin Digital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simple: Book a free, no-obligation strategy session. We'll audit your current Google Ads setup (or analyze your competitive landscape if you're starting fresh), identify immediate opportunities, and provide a clear, transparent proposal outlining expected costs and ROI. There's zero pressure, and you'll walk away with actionable insights whether you hire us or not."
            }
          }
        ]
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "author": {
          "@type": "Person",
          "name": "Liam C"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
        "publisher": {
          "@type": "Organization",
          "name": "Krush Organics"
        }
      }
    ]
  };

  const socialProofMetrics = [
    { number: "$574M+", label: "Client Revenue Generated" },
    { number: "540%", label: "Average ROI" },
    { number: "95%", label: "Client Retention Rate" },
    { number: "15+", label: "Years Combined Experience" }
  ];

  const problemPoints = [
    {
      icon: <DollarSign className="w-8 h-8 text-[#D91C5C]" />,
      title: "Wasting Budget on Irrelevant Clicks",
      description: "Your current agency's broad keyword targeting is draining your budget on clicks that will never convert, leaving you frustrated and out of pocket."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-[#D91C5C]" />,
      title: "Zero Transparency or Communication",
      description: "You're paying for 'management' but have no idea what's actually happening. Monthly reports are vague, and your agency is impossible to reach when you need answers."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#D91C5C]" />,
      title: "Focusing on Vanity Metrics, Not Revenue",
      description: "Your agency brags about impressions and clicks, but your bank account tells a different story. Where are the actual leads and sales?"
    }
  ];

  const testimonials = [
    {
      name: "Liam C",
      company: "Krush Organics",
      text: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
    },
    {
      name: "Fabienne Costa",
      company: "YCL Jewels",
      text: "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with."
    },
    {
      name: "Will Wright",
      company: "The Mining Store",
      text: "Odin Digital's strategic approach to Google Ads transformed our online presence. Their focus on ROI, not just clicks, has been game-changing for our business."
    }
  ];

  const services = [
    {
      icon: <Search className="w-10 h-10 text-[#D91C5C]" />,
      title: "Google Ads Management Melbourne",
      description: "Full-service campaign setup, optimization, and ongoing management with a laser focus on ROI. We handle Search, Display, Shopping, and YouTube campaigns. We also offer comprehensive <a href='/services/seo' class='text-[#D91C5C] underline hover:text-[#D91C5C]/80'>SEO</a> services to complement your paid strategy."
    },
    {
      icon: <BarChart className="w-10 h-10 text-[#D91C5C]" />,
      title: "Advanced Conversion Tracking",
      description: "Server-side tracking setup to accurately attribute every lead and sale back to your Google Ads spend, giving you total clarity on performance."
    },
    {
      icon: <Laptop className="w-10 h-10 text-[#D91C5C]" />,
      title: "Custom Landing Page Design",
      description: "High-converting, mobile-first landing pages built specifically for your Google Ads campaigns to maximize your conversion rate. Learn more about our <a href='/services/web-design' class='text-[#D91C5C] underline hover:text-[#D91C5C]/80'>web design</a> services."
    },
    {
      icon: <Target className="w-10 h-10 text-[#D91C5C]" />,
      title: "Retargeting & Remarketing",
      description: "Sophisticated retargeting campaigns across Google Display and YouTube to re-engage visitors who didn't convert the first time. We also run <a href='/services/meta-ads' class='text-[#D91C5C] underline hover:text-[#D91C5C]/80'>Meta Ads</a> for multi-channel retargeting."
    }
  ];

  const differentiators = [
    {
      icon: <Shield className="w-10 h-10 text-[#D91C5C]" />,
      title: "No Lock-In Contracts",
      description: "We earn your business every single month. Cancel anytime with 30 days notice. Our 95% retention rate speaks for itself."
    },
    {
      icon: <Eye className="w-10 h-10 text-[#D91C5C]" />,
      title: "100% Transparency",
      description: "Full access to your Google Ads account, weekly performance updates, and a dedicated account manager who actually answers your calls."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-[#D91C5C]" />,
      title: "ROI-Focused Reporting",
      description: "We report on what matters: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), and revenue generated. No fluff, just results."
    },
    {
      icon: <Users className="w-10 h-10 text-[#D91C5C]" />,
      title: "Melbourne Market Expertise",
      description: "We understand Melbourne's competitive digital landscape and know exactly how to position your business to win in this market."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Free Strategy Session",
      description: "We audit your current Google Ads setup (or competitive landscape if you're starting fresh) and identify immediate opportunities for improvement."
    },
    {
      number: "02",
      title: "Custom Campaign Build",
      description: "We build conversion-optimized campaigns tailored to your business goals, target audience, and budget, with precision keyword research and ad copy testing."
    },
    {
      number: "03",
      title: "Launch & Optimize",
      description: "Your campaigns go live, and we begin daily monitoring and weekly optimization cycles to improve performance and reduce wasted spend."
    },
    {
      number: "04",
      title: "Scale & Grow",
      description: "As we hit your target CPA and ROAS goals, we systematically scale your winning campaigns to maximize revenue while maintaining profitability."
    }
  ];

  const whyChoosePoints = [
    {
      icon: <Award className="w-10 h-10 text-[#D91C5C]" />,
      title: "Proven Track Record",
      description: "$574M+ in client revenue, 540% average ROI, and a 95% client retention rate. Our results speak louder than any sales pitch."
    },
    {
      icon: <Clock className="w-10 h-10 text-[#D91C5C]" />,
      title: "Fast Turnaround",
      description: "Most agencies take 4-6 weeks to get started. We can have your campaigns live within 7-10 days, getting you results faster."
    },
    {
      icon: <Settings className="w-10 h-10 text-[#D91C5C]" />,
      title: "Active Management",
      description: "Your campaigns are actively monitored and optimized daily, not just set-and-forget like most agencies do."
    },
    {
      icon: <Zap className="w-10 h-10 text-[#D91C5C]" />,
      title: "Data-Driven Decisions",
      description: "Every optimization is backed by data and testing, not guesswork. We let the numbers guide our strategy."
    }
  ];

  const faqs = [
    {
      question: "Why should I hire a Google Ads agency Melbourne instead of managing it myself?",
      answer: "While managing your own Google Ads can seem cost-effective, it often leads to significant wasted spend and missed opportunities. Google Ads is a complex, constantly evolving platform. A professional Google Ads agency Melbourne firm like Odin Digital has the expertise, tools, and time to manage your campaigns for maximum profitability. We spot costly mistakes, implement advanced bidding strategies, and optimize for conversion data, not just clicks. Our team's singular focus is on achieving a high ROI, which is why our clients see a 540% average return. Hiring us isn't an expense; it's an investment that frees up your time and ensures your budget is working as hard as possible to generate leads and sales."
    },
    {
      question: "What is the difference between Google Ads management Melbourne and PPC management Melbourne?",
      answer: "In the context of our services, the terms are often used interchangeably, but 'PPC management Melbourne' (Pay-Per-Click) is the broader term. PPC includes all paid advertising where you pay for a click, such as Google Ads, Meta Ads (Facebook/Instagram), and LinkedIn Ads. 'Google Ads management Melbourne' specifically refers to managing campaigns within the Google platform (Search, Display, Shopping, YouTube). At Odin Digital, we are experts in both. Our focus is on the entire PPC ecosystem, ensuring your ad spend is optimized across all channels to maximize your overall return on investment."
    },
    {
      question: "How much does it cost to hire an adwords management company Melbourne?",
      answer: "The cost to hire an adwords management company Melbourne can vary widely, but our pricing is based on a percentage of your ad spend, ensuring our success is directly tied to yours. We don't offer cheap, fixed-price packages because they rarely work. Our custom strategies are built to deliver maximum ROI, not minimum cost. The best way to determine the exact investment is through a free strategy session. We'll analyze your goals and current spend, and provide a transparent proposal that details both the management fee and the expected return, ensuring you see us as a profit centre, not a cost."
    },
    {
      question: "How long does it take to see results from a PPC agency Melbourne?",
      answer: "Unlike SEO, which can take 6-12 months, Google Ads delivers immediate visibility. You'll start seeing traffic and data within days of launch. However, optimal performance requires ongoing optimization. Most Melbourne businesses see meaningful improvements in CPA and ROAS within the first 60-90 days as we refine targeting, ad copy, and bidding strategies based on real conversion data. The key is partnering with a PPC agency Melbourne that actively manages and optimizes your campaigns daily, not quarterly."
    },
    {
      question: "What industries do you specialize in for Google Ads management Melbourne?",
      answer: "We work with a diverse range of Melbourne-based businesses, including e-commerce, professional services (legal, accounting, medical), home services (plumbing, HVAC, landscaping), B2B SaaS, and retail. Our approach is customized for each industry, focusing on your specific customer journey, competitive landscape, and profit margins. Whether you're a local service provider or a national brand targeting Melbourne customers, we have the expertise to drive results."
    },
    {
      question: "Do you only do Google Ads, or do you offer other services like SEO and Meta Ads?",
      answer: "While we specialize in Google Ads and PPC management Melbourne, we also offer comprehensive digital marketing services including <a href='/services/seo' class='text-[#D91C5C] underline'>SEO</a>, <a href='/services/meta-ads' class='text-[#D91C5C] underline'>Meta Ads</a> (Facebook/Instagram), LinkedIn Ads, and custom <a href='/services/web-design' class='text-[#D91C5C] underline'>web design</a>. Our integrated approach ensures all your marketing channels work together to maximize overall ROI. Many of our clients start with Google Ads and expand into other services as they see results."
    },
    {
      question: "How do you ensure my Google Ads budget isn't wasted?",
      answer: "Budget efficiency is our top priority. We use a combination of precise keyword targeting (eliminating wasteful broad match keywords), geographic targeting (ensuring ads only show to Melbourne-area customers), negative keyword lists (blocking irrelevant searches), conversion tracking (only bidding on actions that drive revenue), and daily performance monitoring. Unlike agencies that 'set and forget,' we actively review and optimize your campaigns daily to ensure every dollar is working toward your goals."
    },
    {
      question: "What makes Odin Digital different from other PPC management Melbourne agencies?",
      answer: "Three core differences: (1) No Lock-In Contracts – We earn your business every month. (2) 100% Transparency – You own your Google Ads account, and we give you full access and weekly updates. (3) ROI Obsession – We're not satisfied with 'good enough.' Our 540% average ROI and 95% client retention rate prove we're maniacally focused on driving actual revenue, not just clicks. We're a boutique agency that treats your business like our own."
    },
    {
      question: "Can you take over my existing Google Ads campaigns?",
      answer: "Absolutely. In fact, most of our clients come to us after poor experiences with other agencies or DIY attempts. We'll conduct a comprehensive audit of your existing campaigns, identify what's working (and what's not), and implement immediate improvements. Typically, we can reduce wasted spend by 30-50% in the first month while simultaneously improving lead quality and conversion rates."
    },
    {
      question: "How do you measure success for Google Ads campaigns?",
      answer: "We focus on business outcomes, not vanity metrics. The key performance indicators (KPIs) we track include: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Conversion Rate, Revenue Generated, and Customer Lifetime Value (CLV). Our goal is simple: ensure you're making more money than you're spending. Every optimization decision is made with these ROI-focused metrics in mind."
    },
    {
      question: "Do you require a minimum ad spend budget?",
      answer: "While we can work with budgets as low as $2,000/month, we recommend a minimum of $3,000-$5,000/month for Melbourne businesses to see meaningful results in competitive industries. Google Ads requires enough budget to gather statistically significant data and test multiple ad variations. During your free strategy session, we'll provide an honest assessment of what budget is needed to achieve your specific goals in your market."
    },
    {
      question: "What is your contract length and cancellation policy?",
      answer: "We operate on a month-to-month basis with no long-term lock-in contracts. You can cancel with 30 days' written notice at any time. We believe in earning your business every single month through results and exceptional service. Our 95% client retention rate shows that when you're seeing a strong ROI, there's no reason to leave."
    },
    {
      question: "How often will I receive reports and updates?",
      answer: "You'll receive weekly email updates with key performance metrics and a comprehensive monthly report detailing campaign performance, optimizations made, and strategic recommendations. You'll also have 24/7 access to your Google Ads account and our custom reporting dashboard. Plus, your dedicated account manager is available via phone or email for questions anytime."
    },
    {
      question: "Can you help with landing page design for my Google Ads campaigns?",
      answer: "Yes. In fact, we insist on it for many clients. A poorly designed landing page can kill an otherwise great Google Ads campaign. We offer custom landing page design and optimization as part of our service, ensuring your ads send traffic to high-converting pages that are optimized for mobile, load fast, and have a clear call-to-action (CTA). This is a key differentiator from agencies that only focus on the ads themselves."
    },
    {
      question: "Do you offer Google Ads services in other Australian cities?",
      answer: "Yes, while we specialize in Melbourne, we also provide expert Google Ads management for businesses across Australia. If you're based in another city, we can tailor our strategies to your local market."
    },
    {
      question: "What is the first step to get started with Odin Digital?",
      answer: "Simple: Book a free, no-obligation strategy session. We'll audit your current Google Ads setup (or analyze your competitive landscape if you're starting fresh), identify immediate opportunities, and provide a clear, transparent proposal outlining expected costs and ROI. There's zero pressure, and you'll walk away with actionable insights whether you hire us or not."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Google Ads Agency Melbourne | PPC Management | Odin Digital</title>
        <meta 
          name="description" 
          content="Melbourne's top Google Ads agency. Stop wasting budget and start converting. 540% average ROI. No lock-in contracts. Get your free audit today." 
        />
        <link rel="canonical" href="https://odindigital.com.au/services/google-ads-melbourne" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <SideTab />

        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            {" > "}
            <Link to="/services" className="hover:text-primary">Services</Link>
            {" > "}
            <Link to="/services/ppc" className="hover:text-primary">PPC</Link>
            {" > "}
            <span className="text-foreground">Melbourne</span>
          </nav>
        </div>

        {/* Section 1: Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight pb-2">
                Google Ads Agency Melbourne: Stop Wasting Budget. Start Converting.
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-foreground">
                The PPC Agency Melbourne Businesses Trust for Maximum ROI
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Partner with Odin Digital and turn your Google Ads budget into verified revenue. No lock-in contracts. No hidden fees. Just transparent, data-driven PPC management that delivers a 540% average ROI.
              </p>
              <Button 
                onClick={openForm}
                size="xl"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white text-sm md:text-base lg:text-lg px-4 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6 shadow-primary transition-smooth w-full sm:w-auto leading-tight whitespace-normal break-words text-center h-auto min-h-[3rem]"
              >
                Get Your FREE Melbourne PPC Strategy Session →
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Social Proof Metrics */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {socialProofMetrics.map((metric, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-glow transition-all duration-300">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D91C5C] mb-2">
                    {metric.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {metric.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Problem-Agitation */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                The Problem: Why Most Adwords Management Melbourne Agencies Fail
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Melbourne businesses face intense digital advertising competition. Generic adwords agency Melbourne providers simply can't compete.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-10">
              {problemPoints.map((point, index) => (
                <Card key={index} className="p-6 md:p-8 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">{point.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-primary transition-smooth w-full sm:w-auto text-sm md:text-base px-6 md:px-8 py-4 md:py-5 whitespace-normal break-words text-center leading-tight h-auto min-h-[3rem]"
              >
                Stop the Budget Bleed: Talk to a PPC Expert →
              </Button>
            </div>
          </div>
        </section>

        {/* Section 4: Testimonials */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                What Our Melbourne Clients Say
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Real results from real businesses
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 md:p-8 hover:shadow-glow transition-all duration-300 flex flex-col">
                  <MessageSquare className="w-8 h-8 text-[#D91C5C] mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed italic flex-grow">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4 mt-auto">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Services */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Our Google Ads Services: Built for Melbourne's Market
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                As a leading PPC agency Melbourne wide, we offer a full spectrum of Google Ads services designed to dominate your local market.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-10">
              {services.map((service, index) => (
                <Card key={index} className="p-6 md:p-8 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: service.description }} />
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-primary transition-smooth w-full sm:w-auto text-sm md:text-base px-6 md:px-8 py-4 md:py-5 whitespace-normal break-words text-center leading-tight h-auto min-h-[3rem]"
              >
                Ready for a Custom Google Ads Strategy? →
              </Button>
            </div>
          </div>
        </section>

        {/* Section 6: Differentiators */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Why Melbourne Businesses Choose Odin Digital
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                We are not a generalist agency. We are PPC specialists who understand Melbourne's competitive market.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {differentiators.map((diff, index) => (
                <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">{diff.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{diff.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{diff.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Process */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Our Proven Process
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                From strategy to scale, here's how we deliver results
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <Card key={index} className="p-6 md:p-8 hover:shadow-glow transition-all duration-300 relative">
                  <div className="text-5xl font-bold text-[#D91C5C]/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Why Choose Us */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                The Odin Digital Advantage
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                What sets us apart from other <Link to="/services/ppc" className="text-[#D91C5C] underline">PPC</Link> agencies
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-10">
              {whyChoosePoints.map((point, index) => (
                <Card key={index} className="p-6 md:p-8 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">{point.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-primary transition-smooth w-full sm:w-auto text-sm md:text-base px-6 md:px-8 py-4 md:py-5 whitespace-normal break-words text-center leading-tight h-auto min-h-[3rem]"
              >
                Talk to a Melbourne PPC Specialist →
              </Button>
            </div>
          </div>
        </section>

        {/* Section 9: Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Stop Wasting Budget and Start Converting?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Stop guessing with your PPC Melbourne budget. Start working with PPC experts Melbourne who deliver precision, transparency, and profit.
              </p>
              <Button 
                onClick={openForm}
                size="xl"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white text-sm md:text-base lg:text-lg px-4 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6 shadow-primary transition-smooth w-full sm:w-auto leading-tight whitespace-normal break-words text-center h-auto min-h-[3rem]"
              >
                Claim Your FREE Melbourne PPC Strategy Session →
              </Button>
            </div>
          </div>
        </section>

        {/* Section 10: Other Cities Links */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Google Ads Services in Other Australian Cities</h3>
              <p className="text-muted-foreground leading-relaxed">
                We also provide expert Google Ads management for businesses in{" "}
                <Link to="/google-ads-sydney" className="text-[#D91C5C] underline hover:text-[#D91C5C]/80">Sydney</Link>,{" "}
                <Link to="/google-ads-brisbane" className="text-[#D91C5C] underline hover:text-[#D91C5C]/80">Brisbane</Link>,{" "}
                <Link to="/google-ads-perth" className="text-[#D91C5C] underline hover:text-[#D91C5C]/80">Perth</Link>,{" "}
                <Link to="/google-ads-gold-coast" className="text-[#D91C5C] underline hover:text-[#D91C5C]/80">Gold Coast</Link>,{" "}
                <Link to="/google-ads-canberra" className="text-[#D91C5C] underline hover:text-[#D91C5C]/80">Canberra</Link>, and{" "}
                <Link to="/google-ads-newcastle" className="text-[#D91C5C] underline hover:text-[#D91C5C]/80">Newcastle</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Location-Specific Content */}
        <LocationContent city="Melbourne" serviceType="Google Ads" />

        {/* Section 11: FAQ */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  FAQs: Your Questions About Google Ads in Melbourne Answered
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Clear, honest answers to your most common questions
                </p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>


        {/* Related Locations */}
        <RelatedLocations 
          locations={relatedLocationsList}
          title="Google Ads Services in Other Cities"
        />

        <Footer />
        <MarketingFormModal />

        {/* Sticky Mobile CTA */}
        {showStickyButton && (
          <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white shadow-lg md:hidden border-t border-border">
            <Button 
              onClick={openForm}
              className="w-full bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-primary text-sm py-5 whitespace-normal break-words text-center leading-tight h-auto min-h-[3rem]"
            >
              Get FREE Strategy Session →
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
