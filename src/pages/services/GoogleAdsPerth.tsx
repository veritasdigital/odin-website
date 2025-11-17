import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import LocationContent from "@/components/LocationContent";
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
  Zap,
  ShoppingCart,
  MapPin
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

export default function GoogleAdsPerth() {
  const { openForm } = useMarketingForm();
  const [showStickyButton, setShowStickyButton] = useState(false);

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
        "url": "https://odindigital.com.au",
        "logo": "https://odindigital.com.au/logo.png",
        "sameAs": [],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+61-1300-123-456",
          "contactType": "sales"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "Odin Digital",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Perth",
          "addressRegion": "WA",
          "addressCountry": "AU"
        },
        "telephone": "+61-1300-123-456",
        "url": "https://odindigital.com.au/google-ads-perth",
        "priceRange": "$$$"
      },
      {
        "@type": "Service",
        "serviceType": "PPC Management",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Perth"
        },
        "description": "Professional Google Ads and PPC management services in Perth to maximize your return on ad spend (ROAS) in a high-CPC market. We focus on high-conversion strategies with no lock-in contracts.",
        "name": "Perth Google Ads Management"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does PPC management cost in Perth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PPC management costs in Perth are often higher than in smaller cities due to the competitive nature of the market. You can expect to pay a flat monthly fee typically ranging from $1,000 to $5,000+, or 10-20% of your total ad spend, depending on the complexity of your campaigns. At Odin Digital, we focus on a flat-fee structure that is tied to performance. We understand that in a high-CPC city like Perth, maximizing your ROI is paramount. We provide a transparent quote after a free audit, ensuring our fee is an investment that generates a significant, predictable return."
            }
          },
          {
            "@type": "Question",
            "name": "What is the average ROI I can expect from Google Ads in Perth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While results vary by industry, our clients achieve an average ROI of 540% on their ad spend. In a high-cost market like Perth, achieving this ROI requires extreme efficiency. We achieve this by focusing on hyper-efficient keyword targeting, relentless conversion rate optimization (CRO) to maximize the value of every expensive click, and advanced bidding strategies. We are obsessed with turning your ad spend into a predictable profit center, backing our claims with verified client revenue of over $574M."
            }
          },
          {
            "@type": "Question",
            "name": "Why are my current Google Ads not converting in Perth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In Perth, the most common reason for low conversion is poor Conversion Rate Optimization (CRO). You might be paying high CPCs, but if your landing page is generic or slow, you're wasting that money. The three main culprits are: Poor Targeting, Weak Ad Copy, or Bad Landing Pages. Our free audit will pinpoint the exact reason your ads are underperforming. We fix the entire funnel, from the keyword to the final sale, ensuring your Perth business gets the leads it deserves."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from PPC management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PPC is the fastest way to get visibility. You can typically see initial results (clicks, impressions, conversions) within the first few weeks of launching a campaign. However, achieving optimal, highly profitable results in the competitive Perth market usually takes 2 to 3 months. This time is spent gathering data, refining bidding strategies, A/B testing ad copy, and optimizing your landing pages for maximum conversion. For Perth businesses that need leads now, PPC is the ideal channel."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer services for small business PPC in Perth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in helping Perth small businesses thrive with PPC. We understand that small businesses need to be extremely efficient with their budget, especially given the high CPCs in the city. Our strategy for small business PPC focuses on hyper-local targeting, long-tail keywords, and low-cost, high-intent opportunities. We help you compete effectively with larger players by being smarter and more focused with your Google Ads spend, driving immediate and measurable growth."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Google Ads and SEO for a Perth business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google Ads (PPC) provides immediate, paid visibility, ideal for instant leads and sales. SEO (Search Engine Optimization) is the process of earning those top spots organically over time, which builds long-term, sustainable traffic. In Perth, many businesses use PPC to get immediate leads while waiting for their SEO to kick in. We recommend a dual strategy, but PPC is the fastest way to get your business in front of ready-to-buy customers."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I hire a Perth Google Ads consultant instead of doing it myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In a high-CPC market like Perth, hiring a professional Google Ads consultant is a necessity, not a luxury. The risk of wasted ad spend is too high for a DIY approach. A professional consultant will save you money and time while maximizing your ROI. We have access to advanced tools, spend countless hours managing accounts, and understand the complex bidding algorithms. Hiring an expert ensures your budget is optimized for maximum profitability, turning your ad account from an expense into a reliable profit engine."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of transparency can I expect from your PPC management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer radical transparency. You will have direct access to your Google Ads account, and our monthly reports focus exclusively on the metrics that matter to your business: leads, sales, and ROI. We never hide behind vanity metrics like clicks and impressions. You will know exactly how much you spent, how many leads you generated, and what your return on investment was. Our 95% client retention rate is a direct result of this commitment to honesty and clear, performance-focused communication."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer a free audit of my existing Perth Google Ads account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer a FREE, no-obligation Google Ads audit. If you're currently running ads, we will dive deep into your account structure, keyword targeting, ad copy, and landing pages. We will identify immediate areas of wasted spend—a critical step in the Perth market—and show you exactly where the biggest opportunities for profit are. This audit is performed by a senior PPC strategist and will provide you with actionable insights."
            }
          },
          {
            "@type": "Question",
            "name": "What is your process for managing Google Ads campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our process is built around maximizing your ROI. It starts with a deep audit and strategy session to understand your Perth customer. We then build a flawless campaign structure, implement advanced bidding strategies, and focus on relentless conversion rate optimization (CRO) of your landing pages. We manage negative keywords daily to eliminate wasted spend, constantly A/B test ad copy, and provide transparent, revenue-focused reporting. Our 4-step process ensures your campaign is always optimized for maximum profitability."
            }
          },
          {
            "@type": "Question",
            "name": "Do you use AI for Google Ads management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we leverage cutting-edge AI tools for advanced bidding, budget allocation, and data analysis. Google's Smart Bidding is already AI-driven, and we augment this with proprietary tools to gain a competitive edge. However, AI is only a tool. Our senior strategists provide the crucial human oversight, creative ad copy, and strategic direction that AI cannot replicate. We combine the power of AI-driven efficiency with human expertise to deliver superior results for your Perth Google Ads campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "What makes your ad copy better than my current agency's?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our ad copy is not just descriptive; it is engineered for conversion. We use direct response copywriting principles, focusing on your customer's pain points and our unique value proposition (like the 540% ROI and no lock-in contracts). We constantly A/B test headlines and descriptions to ensure we are maximizing your Quality Score and click-through rate, which lowers your cost per click—a necessity in the Perth market."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with Google Shopping and E-commerce PPC in Perth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. E-commerce PPC is one of our core specialties. We manage complex Google Shopping feeds, optimize product titles and descriptions for maximum visibility, and implement advanced bid adjustments to ensure your products are profitable. If you sell online in Perth, our e-commerce PPC strategy will turn your product listings into your most reliable source of revenue."
            }
          },
          {
            "@type": "Question",
            "name": "What are the biggest mistakes Perth businesses make with Google Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The biggest mistakes Perth businesses make are: 1) Not using negative keywords to filter out irrelevant traffic; 2) Sending traffic to the homepage which kills conversion rates; 3) Not tracking conversions properly; and 4) Ignoring Conversion Rate Optimization (CRO), which is vital in a high-CPC city. We fix all of these issues by implementing a professional, performance-driven approach."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help me set up my first Google Ads campaign in Perth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we can handle the entire setup process for your first Google Ads campaign. We start with a full strategy session, conduct in-depth keyword research, build a flawless account structure, write high-converting ad copy, and ensure all conversion tracking is correctly implemented. We will launch your campaign with a strong foundation, avoiding the common pitfalls that plague new accounts, and immediately begin the optimization process to drive profitable leads to your Perth business."
            }
          }
        ]
      }
    ]
  };

  const socialProofMetrics = [
    { number: "$574M+", label: "Verified Client Revenue" },
    { number: "540%", label: "Average ROI on Ad Spend" },
    { number: "95%", label: "Client Retention Rate" },
    { number: "283+", label: "Successful Campaigns Delivered" }
  ];

  const problemPoints = [
    {
      icon: <DollarSign className="w-10 h-10 md:w-12 md:h-12 text-[#D91C5C]" />,
      title: "High CPCs, Zero Conversions",
      description: "You're spending a fortune on Perth's competitive keywords. Your budget is draining fast, and all you're getting are expensive clicks and zero leads. You feel like you're just feeding the Google machine. The problem isn't Google Ads; it's the strategy that fails to maximize the value of every single click."
    },
    {
      icon: <AlertCircle className="w-10 h-10 md:w-12 md:h-12 text-[#D91C5C]" />,
      title: "Trapped in a Contract with Generic Strategies",
      description: "You're stuck paying a monthly retainer to an agency that doesn't understand the unique Perth market. They treat you like a number, and their generic, East Coast-focused strategy is failing to connect with your WA customer base. You feel powerless, locked into a contract that's holding your business back."
    },
    {
      icon: <BarChart className="w-10 h-10 md:w-12 md:h-12 text-[#D91C5C]" />,
      title: "Zero Transparency and Confusing Reports",
      description: "You get a monthly report filled with jargon—impressions, clicks, quality scores—but you have no idea what it actually means for your bottom line. Where are the leads? Where's the revenue? It's time for a Perth PPC agency that provides radical transparency and focuses on the metrics that matter: sales and profit."
    }
  ];

  const testimonials = [
    {
      text: "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
      name: "Fabienne Costa",
      company: "YCL Jewels (Gold Coast)"
    },
    {
      text: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
      name: "Liam C",
      company: "Krush Organics (Sydney)"
    },
    {
      text: "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
      name: "Evan Tsaboukos",
      company: "Imperial Wealth (Melbourne)"
    }
  ];

  const services = [
    {
      icon: <Search className="w-10 h-10 md:w-12 md:h-12 text-[#D91C5C]" />,
      title: "Google Search Ads Management",
      description: "In a high-CPC market like Perth, every click must count. Our Google Ads experts craft hyper-specific, high-converting ad copy and landing pages designed to capture high-intent Perth customers right when they are ready to buy. We focus on maximizing your Quality Score to lower your cost and increase your conversion rate.",
      cta: "Get Your FREE Google Ads Audit →"
    },
    {
      icon: <ShoppingCart className="w-10 h-10 md:w-12 md:h-12 text-[#D91C5C]" />,
      title: "Google Shopping & E-commerce PPC",
      description: "For Perth e-commerce businesses, we turn Google Shopping into your most reliable sales engine. We optimize your product feeds, manage complex bidding strategies, and ensure your products are front and center for WA shoppers, driving massive sales volume and a high return on ad spend (ROAS).",
      cta: "Get Your FREE E-commerce PPC Audit →"
    },
    {
      icon: <MapPin className="w-10 h-10 md:w-12 md:h-12 text-[#D91C5C]" />,
      title: "Local Service Ads (LSAs) & Maps",
      description: "For service-based Perth businesses, appearing in the Local Service Ads and Google Maps is non-negotiable for local lead generation. We manage your LSAs to ensure you get the \"Google Guaranteed\" badge and appear at the very top of local search results, driving high-quality, local leads directly to your business.",
      cta: "Get Your FREE Local PPC Strategy →"
    }
  ];

  const differentiators = [
    {
      icon: <Shield className="w-10 h-10 text-[#D91C5C]" />,
      title: "No Lock-In Contracts",
      description: "We believe in earning your business, not forcing it. Our flexible, month-to-month agreements mean we're always motivated to deliver results. If you're not happy, you're free to leave. It's that simple."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#D91C5C]" />,
      title: "540% Average ROI",
      description: "We don't aim for incremental gains. Our strategies are built on a foundation of data-driven performance that delivers a 540% average ROI on ad spend. We turn your ad budget into a predictable profit center."
    },
    {
      icon: <Users className="w-10 h-10 text-[#D91C5C]" />,
      title: "Direct Access to Senior Strategists",
      description: "When you partner with us, you work directly with our top-tier PPC experts. No junior account managers, no middlemen. You get direct access to the minds developing and executing your high-conversion Perth Google Ads strategy."
    },
    {
      icon: <Eye className="w-10 h-10 text-[#D91C5C]" />,
      title: "Radical Transparency",
      description: "We provide clear, concise reports that focus on the metrics that matter: leads, sales, and revenue. You'll always know exactly how your investment is performing and what we're doing to drive profitable growth."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Deep Dive & Strategy",
      description: "We start by getting to know your business, your goals, and your customers in the Perth area. We conduct in-depth keyword research, competitor analysis, and audience segmentation to develop a custom PPC strategy tailored to your unique needs."
    },
    {
      number: "02",
      title: "Campaign Build & Optimization",
      description: "We build your Google Ads campaigns from the ground up, focusing on a flawless structure, hyper-relevant ad groups, and high-converting ad copy. We implement advanced bidding strategies to ensure maximum visibility and efficiency, especially in a high-CPC market."
    },
    {
      number: "03",
      title: "Conversion Rate Optimization (CRO)",
      description: "A great ad is useless without a great landing page. We work with you to ensure your landing pages are optimized for conversion, reducing wasted ad spend and maximizing the return on every click. This is a crucial step for the Perth market."
    },
    {
      number: "04",
      title: "Analyze, Report & Refine",
      description: "We continuously monitor your campaign performance, providing you with transparent reports on the metrics that matter: leads, sales, and ROI. We use this data to refine our strategy and ensure we're always driving maximum profitability."
    }
  ];

  const whyChoosePoints = [
    {
      icon: <TrendingUp className="w-10 h-10 text-[#D91C5C]" />,
      title: "We're Revenue-Focused",
      description: "Clicks are great, but revenue is better. Our entire approach is built around driving measurable financial results for your business. We're not satisfied until you see a significant return on your investment."
    },
    {
      icon: <MapPin className="w-10 h-10 text-[#D91C5C]" />,
      title: "We Understand the Perth Market",
      description: "Perth is unique. We tailor our keyword research and ad copy to ensure we're speaking directly to your local customer base, avoiding the generic, ineffective strategies used by remote agencies that don't understand the WA consumer."
    },
    {
      icon: <Zap className="w-10 h-10 text-[#D91C5C]" />,
      title: "We Leverage Cutting-Edge Technology",
      description: "We use the latest AI-powered tools and technologies to gain a competitive edge in campaign management. By combining the power of artificial intelligence for bidding and optimization with our proven PPC strategies, we can deliver faster, more effective results and ensure your budget is spent efficiently."
    },
    {
      icon: <Award className="w-10 h-10 text-[#D91C5C]" />,
      title: "We Have the Results to Prove It",
      description: "With over $574M in verified client revenue and a 95% retention rate, our track record speaks for itself. We've helped hundreds of businesses like yours achieve their growth goals, and we can do the same for you."
    }
  ];

  const faqs = [
    {
      question: "How much does PPC management cost in Perth?",
      answer: "PPC management costs in Perth are often higher than in smaller cities due to the competitive nature of the market. You can expect to pay a flat monthly fee typically ranging from $1,000 to $5,000+, or 10-20% of your total ad spend, depending on the complexity of your campaigns. At Odin Digital, we focus on a flat-fee structure that is tied to performance. We understand that in a high-CPC city like Perth, maximizing your ROI is paramount. We provide a transparent quote after a free audit, ensuring our fee is an investment that generates a significant, predictable return."
    },
    {
      question: "What is the average ROI I can expect from Google Ads in Perth?",
      answer: "While results vary by industry, our clients achieve an average ROI of 540% on their ad spend. In a high-cost market like Perth, achieving this ROI requires extreme efficiency. We achieve this by focusing on hyper-efficient keyword targeting, relentless conversion rate optimization (CRO) to maximize the value of every expensive click, and advanced bidding strategies. We are obsessed with turning your ad spend into a predictable profit center, backing our claims with verified client revenue of over $574M."
    },
    {
      question: "Why are my current Google Ads not converting in Perth?",
      answer: "In Perth, the most common reason for low conversion is poor Conversion Rate Optimization (CRO). You might be paying high CPCs, but if your landing page is generic or slow, you're wasting that money. The three main culprits are: Poor Targeting, Weak Ad Copy, or Bad Landing Pages. Our free audit will pinpoint the exact reason your ads are underperforming. We fix the entire funnel, from the keyword to the final sale, ensuring your Perth business gets the leads it deserves."
    },
    {
      question: "How long does it take to see results from PPC management?",
      answer: "PPC is the fastest way to get visibility. You can typically see initial results (clicks, impressions, conversions) within the first few weeks of launching a campaign. However, achieving optimal, highly profitable results in the competitive Perth market usually takes 2 to 3 months. This time is spent gathering data, refining bidding strategies, A/B testing ad copy, and optimizing your landing pages for maximum conversion. For Perth businesses that need leads now, PPC is the ideal channel."
    },
    {
      question: "Do you offer services for small business PPC in Perth?",
      answer: "Yes, we specialize in helping Perth small businesses thrive with PPC. We understand that small businesses need to be extremely efficient with their budget, especially given the high CPCs in the city. Our strategy for small business PPC focuses on hyper-local targeting, long-tail keywords, and low-cost, high-intent opportunities. We help you compete effectively with larger players by being smarter and more focused with your Google Ads spend, driving immediate and measurable growth."
    },
    {
      question: "What is the difference between Google Ads and SEO for a Perth business?",
      answer: "Google Ads (PPC) provides immediate, paid visibility, ideal for instant leads and sales. SEO (Search Engine Optimization) is the process of earning those top spots organically over time, which builds long-term, sustainable traffic. In Perth, many businesses use PPC to get immediate leads while waiting for their SEO to kick in. We recommend a dual strategy, but PPC is the fastest way to get your business in front of ready-to-buy customers."
    },
    {
      question: "Why should I hire a Perth Google Ads consultant instead of doing it myself?",
      answer: "In a high-CPC market like Perth, hiring a professional Google Ads consultant is a necessity, not a luxury. The risk of wasted ad spend is too high for a DIY approach. A professional consultant will save you money and time while maximizing your ROI. We have access to advanced tools, spend countless hours managing accounts, and understand the complex bidding algorithms. Hiring an expert ensures your budget is optimized for maximum profitability, turning your ad account from an expense into a reliable profit engine."
    },
    {
      question: "What kind of transparency can I expect from your PPC management?",
      answer: "We offer radical transparency. You will have direct access to your Google Ads account, and our monthly reports focus exclusively on the metrics that matter to your business: leads, sales, and ROI. We never hide behind vanity metrics like clicks and impressions. You will know exactly how much you spent, how many leads you generated, and what your return on investment was. Our 95% client retention rate is a direct result of this commitment to honesty and clear, performance-focused communication."
    },
    {
      question: "Do you offer a free audit of my existing Perth Google Ads account?",
      answer: "Yes, we offer a FREE, no-obligation Google Ads audit. If you're currently running ads, we will dive deep into your account structure, keyword targeting, ad copy, and landing pages. We will identify immediate areas of wasted spend—a critical step in the Perth market—and show you exactly where the biggest opportunities for profit are. This audit is performed by a senior PPC strategist and will provide you with actionable insights."
    },
    {
      question: "What is your process for managing Google Ads campaigns?",
      answer: "Our process is built around maximizing your ROI. It starts with a deep audit and strategy session to understand your Perth customer. We then build a flawless campaign structure, implement advanced bidding strategies, and focus on relentless conversion rate optimization (CRO) of your landing pages. We manage negative keywords daily to eliminate wasted spend, constantly A/B test ad copy, and provide transparent, revenue-focused reporting. Our 4-step process ensures your campaign is always optimized for maximum profitability."
    },
    {
      question: "Do you use AI for Google Ads management?",
      answer: "Yes, we leverage cutting-edge AI tools for advanced bidding, budget allocation, and data analysis. Google's Smart Bidding is already AI-driven, and we augment this with proprietary tools to gain a competitive edge. However, AI is only a tool. Our senior strategists provide the crucial human oversight, creative ad copy, and strategic direction that AI cannot replicate. We combine the power of AI-driven efficiency with human expertise to deliver superior results for your Perth Google Ads campaigns."
    },
    {
      question: "What makes your ad copy better than my current agency's?",
      answer: "Our ad copy is not just descriptive; it is engineered for conversion. We use direct response copywriting principles, focusing on your customer's pain points and our unique value proposition (like the 540% ROI and no lock-in contracts). We constantly A/B test headlines and descriptions to ensure we are maximizing your Quality Score and click-through rate, which lowers your cost per click—a necessity in the Perth market."
    },
    {
      question: "Can you help with Google Shopping and E-commerce PPC in Perth?",
      answer: "Absolutely. E-commerce PPC is one of our core specialties. We manage complex Google Shopping feeds, optimize product titles and descriptions for maximum visibility, and implement advanced bid adjustments to ensure your products are profitable. If you sell online in Perth, our e-commerce PPC strategy will turn your product listings into your most reliable source of revenue."
    },
    {
      question: "What are the biggest mistakes Perth businesses make with Google Ads?",
      answer: "The biggest mistakes Perth businesses make are: 1) Not using negative keywords to filter out irrelevant traffic; 2) Sending traffic to the homepage which kills conversion rates; 3) Not tracking conversions properly; and 4) Ignoring Conversion Rate Optimization (CRO), which is vital in a high-CPC city. We fix all of these issues by implementing a professional, performance-driven approach."
    },
    {
      question: "Can you help me set up my first Google Ads campaign in Perth?",
      answer: "Yes, we can handle the entire setup process for your first Google Ads campaign. We start with a full strategy session, conduct in-depth keyword research, build a flawless account structure, write high-converting ad copy, and ensure all conversion tracking is correctly implemented. We will launch your campaign with a strong foundation, avoiding the common pitfalls that plague new accounts, and immediately begin the optimization process to drive profitable leads to your Perth business."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Google Ads Agency Perth | PPC Management | Odin Digital</title>
        <meta 
          name="description" 
          content="Perth's top Google Ads agency. 540% average ROI. We maximize every dollar in a high-CPC market. No lock-in contracts. Get your free PPC strategy audit." 
        />
        <link rel="canonical" href="https://odindigital.com.au/services/google-ads-perth" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <SideTab />

        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <nav className="text-xs sm:text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            {" > "}
            <Link to="/services" className="hover:text-primary">Services</Link>
            {" > "}
            <Link to="/services/google-ads" className="hover:text-primary">Google Ads</Link>
            {" > "}
            <span className="text-foreground">Perth</span>
          </nav>
        </div>

        {/* Section 1: Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight pb-2">
                Stop Wasting Money. Start Maximizing ROI. The Perth Google Ads Agency Focused on Profit.
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 text-foreground">
                Tired of Perth's high Cost-Per-Click eating your budget with zero return?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
                Look, running Google Ads in Perth is a high-stakes game. You need more than just clicks; you need a strategy that turns your high ad spend into predictable, profitable revenue. At Odin Digital, we specialize in performance-focused PPC management. We're not a generic, set-and-forget agency—we're a dedicated partner with a proven track record of delivering massive returns for businesses just like yours. With no lock-in contracts, we earn your business every single month.
              </p>
              <Button 
                onClick={openForm}
                size="xl"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 shadow-primary transition-smooth w-full sm:w-auto leading-snug whitespace-normal text-center h-auto min-h-[3rem]"
              >
                Get Your FREE Google Ads Strategy Audit →
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Social Proof Metrics */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">The Proof Is in the Performance</h2>
              <p className="text-sm md:text-base text-muted-foreground">We're not just making promises; we're delivering verified results.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
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
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                Does This Sound Familiar? Your Perth PPC Isn't Working.
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                You've invested heavily in Google Ads, but the results are nowhere to be found. Let's be honest, it's frustrating.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-10">
              {problemPoints.map((point, index) => (
                <Card key={index} className="p-6 md:p-8 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">{point.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Testimonials */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Don't just take our word for it.
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
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                Perth Google Ads Services Designed for Maximum ROI
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                We offer a complete suite of professional PPC management services to help your Perth business dominate the search results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-10">
              {services.map((service, index) => (
                <Card key={index} className="p-6 md:p-8 hover:shadow-glow transition-all duration-300 flex flex-col">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <Button 
                    onClick={openForm}
                    size="lg"
                    className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-primary transition-smooth w-full text-xs sm:text-sm h-auto py-3 leading-snug whitespace-normal"
                  >
                    {service.cta}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Differentiators */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                The Odin Digital Difference: Why We're the Best PPC Agency Perth
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                Why choose us as your Perth PPC agency? Because we do things differently.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
              {differentiators.map((diff, index) => (
                <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">{diff.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{diff.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{diff.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Process */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                Our Proven 4-Step PPC Management Process
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                We follow a simple, effective process to deliver consistent, measurable results.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
              {processSteps.map((step, index) => (
                <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300">
                  <div className="text-4xl font-bold text-[#D91C5C] mb-4">{step.number}</div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Why Choose Us */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                Why Choose Odin Digital as Your Perth PPC Partner?
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                You have a lot of choices when it comes to PPC agencies. Here's why we're the right choice for your Perth business.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
              {whyChoosePoints.map((point, index) => (
                <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">{point.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{point.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Final CTA */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Ready to Turn Your Google Ads into a Profit Machine?
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                Stop wasting money on ineffective PPC and start investing in a strategy that delivers real, measurable ROI. Let us show you what's possible.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                Take the first step towards unlocking your business's true growth potential. Schedule your FREE, no-obligation Google Ads strategy audit with one of our senior strategists today. We'll analyze your current account, identify your biggest opportunities, and show you exactly how we can help you achieve a 540% average ROI. What do you have to lose?
              </p>
              <Button 
                onClick={openForm}
                size="xl"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 shadow-primary transition-smooth w-full sm:w-auto leading-snug whitespace-normal text-center h-auto min-h-[3rem]"
              >
                Get Your FREE Google Ads Strategy Audit →
              </Button>
            </div>
          </div>
        </section>

        {/* Location-Specific Content */}
        <LocationContent city="Perth" serviceType="Google Ads" />

        {/* Section 10: FAQ */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                  Frequently Asked Questions About PPC in Perth
                </h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <Footer />
        <MarketingFormModal />
      </div>

      {/* Sticky Mobile CTA */}
      {showStickyButton && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
          <Button
            onClick={openForm}
            size="lg"
            className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-2xl px-6 py-4 text-sm font-semibold animate-pulse-glow whitespace-normal leading-snug h-auto"
          >
            Get FREE Audit →
          </Button>
        </div>
      )}
    </>
  );
}
