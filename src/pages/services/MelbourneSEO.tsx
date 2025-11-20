import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, TrendingUp, Target, Zap, Users } from "lucide-react";
import { Helmet } from "react-helmet";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedServices } from "@/components/RelatedServices";
import { RelatedLocations } from "@/components/RelatedLocations";
import { locationImages } from "@/utils/locationImages";
import { getLocationData } from "@/utils/locationData";
import LocationMap from "@/components/LocationMap";
import { MapPin, TrendingUp as TrendingUpIcon, Building2, DollarSign } from "lucide-react";
import { getOrganizationSchema, getLocalBusinessSchema, getServiceSchema, getFAQSchema, getBreadcrumbSchema, getWebPageSchema } from "@/utils/schemaMarkup";
import { getRelatedLocations, getRelatedServices, getHubForService } from "@/utils/contentClusters";
import { ServiceSchema } from "@/components/ServiceSchema";
import { OptimizedImage } from '@/components/OptimizedImage';

const MelbourneSEO = () => {
  const { openForm } = useMarketingForm();
  const locationInfo = getLocationData("melbourne");
  
  // Content cluster data
  const hub = getHubForService("SEO");
  const relatedLocationsList = getRelatedLocations("Melbourne", "SEO");
  const relatedServicesList = getRelatedServices("SEO", "Melbourne");

  const relatedServices = [
    {
      title: "Local SEO Services",
      description: "Dominate local search across Australia with our proven local SEO strategies and Google Business Profile optimization.",
      path: "/services/local-seo"
    },
    {
      title: "Google Ads Melbourne",
      description: "Drive immediate Melbourne traffic with PPC while building long-term organic visibility through SEO.",
      path: "/services/google-ads-melbourne"
    },
    {
      title: "Facebook Ads Melbourne",
      description: "Target Melbourne audiences with precision social media advertising to complement your SEO strategy.",
      path: "/services/facebook-ads-melbourne"
    },
    {
      title: "Web Design Melbourne",
      description: "Convert your SEO traffic into customers with Melbourne-focused, high-converting web design.",
      path: "/services/web-design-melbourne"
    }
  ];

  const cityCrossLinks = [
    { city: "Sydney", url: "/services/sydney-seo" },
    { city: "Brisbane", url: "/services/brisbane-seo" },
    { city: "Perth", url: "/services/perth-seo" },
    { city: "Adelaide", url: "/services/adelaide-seo" },
  ];

  // Count-up animation hook
  const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState<number | null>(null);
    const countRef = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            setTimeout(() => {
              setCount(0);
              
              let startTime: number | null = null;
              const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);
                
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                setCount(Math.floor(easeOutQuart * end));
                
                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };
              requestAnimationFrame(animate);
            }, 100);
          }
        },
        { threshold: 0.1 }
      );

      if (countRef.current) {
        observer.observe(countRef.current);
      }

      return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return { count, countRef };
  };

  const metrics = [
    { value: 574, suffix: "M+", label: "Verified Client Revenue" },
    { value: 540, suffix: "%", label: "Average ROI on Ad Spend" },
    { value: 95, suffix: "%", label: "Client Retention Rate" },
    { value: 283, suffix: "+", label: "Successful Campaigns" },
  ];

  const problems = [
    {
      title: "You're Ranking for the Wrong Keywords",
      description: "Your SEO agency Melbourne has you ranking for high-volume keywords that sound impressive but don't drive sales. Traffic means nothing if it's not bringing in paying customers who are actually ready to buy.",
      icon: Target,
    },
    {
      title: "Your 'Strategy' Is a Cookie-Cutter Template",
      description: "They sold you the same pre-packaged SEO service they sell everyone else. No real analysis. No customization. Just copy-paste tactics that worked five years ago but are ineffective in today's competitive Melbourne market.",
      icon: Zap,
    },
    {
      title: "You Have No Idea What You're Actually Paying For",
      description: "Monthly reports filled with jargon and vanity metrics designed to confuse you. You're stuck in a long-term contract with zero transparency, no way to measure actual ROI, and a SEO company Melbourne that profits from your confusion.",
      icon: TrendingUp,
    },
  ];

  const testimonials = [
    {
      quote: "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with. They are the only SEO agency Melbourne that truly understands e-commerce.",
      author: "Fabienne Costa",
      company: "YCL Jewels",
    },
    {
      quote: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys. They are the best SEO company Melbourne has to offer.",
      author: "Liam C",
      company: "Krush Organics",
    },
  ];

  const services = [
    {
      title: "Enterprise SEO Melbourne",
      description: "For established Melbourne businesses and corporations that need a comprehensive, data-driven approach to dominate the most competitive keywords in their industry.",
      cta: "Get Your FREE Enterprise SEO Audit →",
    },
    {
      title: "Ecommerce SEO Melbourne",
      description: "Turn your online store into a revenue-generating machine. We optimize product pages, build high-quality backlinks, and implement technical SEO strategies to increase visibility and drive more sales through your website.",
      cta: "Get Your FREE Ecommerce SEO Audit →",
    },
    {
      title: "Local SEO Melbourne",
      description: "Dominate local search results and drive foot traffic to your door. We optimize your Google Business Profile, build local citations, and create location-specific content to put you in front of customers ready to buy.",
      cta: "Get Your FREE Local SEO Audit →",
    },
  ];

  const differentiators = [
    {
      title: "No Lock-In Contracts",
      description: "We earn your business every single month. If we're not delivering results, you can walk away—no questions asked.",
      icon: CheckCircle2,
    },
    {
      title: "Senior-Level Expertise Only",
      description: "No juniors. No apprentices. Every campaign is managed by a seasoned SEO strategist with a proven track record.",
      icon: Users,
    },
    {
      title: "100% Transparent Reporting",
      description: "You'll have 24/7 access to a live dashboard showing exactly where your traffic, leads, and revenue are coming from.",
      icon: TrendingUp,
    },
    {
      title: "Performance-Focused Strategies",
      description: "We don't chase rankings for the sake of rankings. Every keyword, every piece of content, every backlink is chosen to drive revenue.",
      icon: Target,
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Audit",
      description: "We start with a deep-dive into your business, your goals, and your current online presence. We identify what's working, what's broken, and where your biggest opportunities lie.",
    },
    {
      number: "02",
      title: "Custom Strategy Development",
      description: "Based on our findings, we build a tailored SEO roadmap designed to achieve your specific revenue goals. No templates. No shortcuts.",
    },
    {
      number: "03",
      title: "Implementation & Optimization",
      description: "Our team of experts gets to work executing the strategy—optimizing your site, creating high-quality content, and building authoritative backlinks.",
    },
    {
      number: "04",
      title: "Transparent Reporting & Scaling",
      description: "You'll see exactly what we're doing and the results we're delivering in real-time. As we identify new opportunities, we scale your campaign to maximize ROI.",
    },
  ];

  const whyChooseUs = [
    {
      title: "We Focus on What Matters: Revenue",
      description: "Rankings and traffic are great, but they don't pay the bills. We build SEO strategies that drive qualified leads and increase your bottom line.",
    },
    {
      title: "We're Melbourne's Most Accountable SEO Agency",
      description: "Our 95% client retention rate speaks for itself. When you work with us, you're not just another account number—you're a partner.",
    },
    {
      title: "We Combine Local Knowledge with World-Class Strategy",
      description: "As a Melbourne-focused SEO company, we understand the unique challenges and opportunities of the Victorian market. We combine this local insight with cutting-edge, data-driven strategies used by the world's top agencies.",
    },
    {
      title: "We Use AI to Maximize Your Results",
      description: "We leverage the latest AI SEO tools to analyze data, uncover opportunities, and optimize campaigns faster and more effectively than traditional methods—giving you a competitive edge.",
    },
  ];

  const faqs = [
    {
      question: "What makes Odin Digital the best SEO company Melbourne has to offer?",
      answer: "We focus on the metric that actually matters: revenue. While other SEO agencies Melbourne chase vanity metrics like rankings and traffic, we build strategies that deliver measurable ROI. Our combination of data-driven insights, senior-level expertise, and a no-lock-in-contract policy means we are 100% accountable for your success. With over $574 million in verified client revenue, our track record is a testament to our performance-focused approach. We don't just get you to the top of Google; we turn those rankings into real, sustainable growth for your business.",
    },
    {
      question: "How much does SEO cost in Melbourne?",
      answer: "The cost of a professional SEO campaign in Melbourne is highly variable and depends on several factors, including your industry's competitiveness, the size of your website, and your growth goals. Melbourne is a competitive market, so cheap, cookie-cutter packages rarely work. At Odin Digital, we create custom strategies tailored to your specific needs. We are transparent about our pricing and will provide a detailed proposal that outlines the exact costs and expected ROI. Our goal is to provide a service that generates a significant return on your investment, not just another monthly expense.",
    },
    {
      question: "How long does SEO take to show results in Melbourne?",
      answer: "SEO is a long-term strategy, especially in a competitive city like Melbourne. While you might see some initial improvements within the first 3-6 months, it typically takes 6-12 months to see significant, lasting results that impact your revenue. Be wary of any SEO expert Melbourne who promises instant results; they are likely using black-hat tactics that can get your site penalized. We focus on building a sustainable, long-term strategy that delivers compounding returns and authority over time.",
    },
    {
      question: "Do I need Local SEO for my Melbourne business?",
      answer: "Absolutely. If you have a physical location or serve a specific geographic area in Melbourne, Local SEO Melbourne is critical. A huge percentage of mobile searches are for local businesses (e.g., \"plumber near me,\" \"cafe Carlton\"). A targeted local SEO campaign ensures that when customers in your area are searching for your products or services, you're the first business they find. It's one of the most effective ways to drive qualified, local traffic to your website and your front door, helping you compete with larger national chains.",
    },
    {
      question: "What's included in your SEO services Melbourne?",
      answer: "Our comprehensive SEO services are designed to cover every aspect of your online presence. This includes a deep technical SEO audit, in-depth keyword research and strategy, on-page optimization, high-quality content creation, and authoritative link building. We also provide detailed, transparent reporting through a 24/7 live dashboard so you can track your progress in real-time. Every campaign is managed by a senior SEO consultant Melbourne who will work closely with you to ensure your strategy is aligned with your business objectives.",
    },
    {
      question: "Why should I choose Odin Digital over a pure-play Melbourne SEO agency?",
      answer: "We offer a holistic approach. While pure-play SEO firms are limited to one channel, we are experts in the entire digital marketing mix (SEO, PPC, Meta Ads, Web Design). This means we don't just optimize your organic search; we ensure all your channels are working together. This integrated strategy is crucial in a competitive market like Melbourne, allowing us to pivot quickly and maximize your ROI across the board, giving you a significant competitive advantage.",
    },
    {
      question: "Do you require lock-in contracts for SEO Melbourne?",
      answer: "No, we don't. We are so confident in our ability to deliver measurable results that we don't need to lock our clients into long-term contracts. We work on a month-to-month basis, which keeps us accountable and ensures we are constantly striving to earn your business. This is a core part of our commitment to transparency and our client-first approach. We believe that a strong partnership is built on trust and performance, not restrictive contracts. Our 95% client retention rate is proof that this model works.",
    },
    {
      question: "How do you measure SEO success for Melbourne businesses?",
      answer: "We measure success based on the metrics that actually impact your bottom line: leads, sales, and revenue. While we track rankings and traffic, these are secondary to your return on investment. Our 24/7 reporting dashboard provides a transparent view of your key performance indicators (KPIs), including conversion rates, cost per acquisition (CPA), and overall ROI. We hold regular strategy meetings to review your progress and ensure our efforts are aligned with your financial goals. For us, success isn't about getting you to page one; it's about making page one profitable for you.",
    },
    {
      question: "How does AI SEO work for your Melbourne clients?",
      answer: "We leverage cutting-edge AI SEO tools to enhance our strategies and deliver faster, more effective results. AI helps us analyze vast amounts of data to uncover keyword opportunities, monitor competitor strategies in real-time, and identify technical issues that could be hurting your rankings. However, we don't rely on AI alone. We believe the perfect SEO strategy combines the analytical power of artificial intelligence with the creative and strategic insights of our experienced human experts. This hybrid approach allows us to create sophisticated, data-driven campaigns that are far more effective than those of a typical SEO firm Melbourne.",
    },
    {
      question: "What's your process for SEO in Melbourne?",
      answer: "Our process is built on transparency and collaboration. It starts with a deep-dive discovery session to understand your business, goals, and customers. From there, we conduct a comprehensive audit of your website and online presence. Next, we develop a custom, data-driven strategy and a clear roadmap for the first 90 days. Once the strategy is approved, our team of senior specialists gets to work on implementation, covering technical SEO, content, and link building. Throughout the entire process, you'll have direct communication with your dedicated strategist and full visibility through your 24/7 reporting dashboard.",
    },
    {
      question: "How do you choose keywords for a Melbourne SEO campaign?",
      answer: "Our keyword selection process is purely focused on commercial intent. We use a combination of advanced tools and manual research to identify the keywords that your ideal customers are using when they are ready to make a purchase. We analyze factors like search volume, competition, and, most importantly, the intent behind the search. We prioritize money keywords—phrases that indicate a strong desire to buy—over high-volume keywords that only generate informational traffic. This ensures that the traffic we drive to your site is highly qualified and more likely to convert into actual sales and revenue.",
    },
    {
      question: "Can you guarantee first-page rankings in Melbourne?",
      answer: "No reputable SEO agency Melbourne can guarantee specific rankings. Google's algorithm is constantly changing, and the Melbourne market is extremely competitive. However, we can guarantee that we will apply our proven, data-driven methodology to give you the best possible chance of achieving top rankings for your target keywords. We have a long track record of success and a 95% client retention rate, which demonstrates our ability to consistently deliver results. We are transparent about what we can and cannot control, and we focus on the metrics that truly matter: traffic, leads, and revenue.",
    },
    {
      question: "What makes your SEO packages Melbourne different?",
      answer: "Unlike other agencies that offer rigid, one-size-fits-all packages, we create completely custom solutions. We don't believe in selling you services you don't need. Instead, we start with your business goals and build a tailored strategy designed to achieve them. This means you get a more efficient, effective, and cost-effective campaign. Our packages are also flexible; we can scale our services up or down as your needs change. And because we don't have lock-in contracts, you have the freedom to adjust your investment at any time. It's a smarter, more agile approach to SEO management Melbourne.",
    },
    {
      question: "Do you work with small businesses in Melbourne?",
      answer: "Yes, we love working with small businesses! We understand the unique challenges that small businesses face in the highly competitive Melbourne market and have a proven track record of helping them compete and win against larger competitors. Our flexible, performance-focused approach is ideal for small businesses that need to make every marketing dollar count. We offer affordable SEO Melbourne solutions that are designed to deliver a strong return on investment, and our no-lock-in-contract policy provides the flexibility and peace of mind that small business owners need.",
    },
    {
      question: "Why is professional SEO important for my Melbourne business?",
      answer: "In today's digital world, your customers are looking for you online. If they can't find you, you're losing business to your competitors. Professional SEO is no longer a luxury; it's an essential investment for any business that wants to grow. A well-executed SEO campaign can increase your visibility, drive qualified traffic to your website, and generate a steady stream of leads and sales. It's the most cost-effective way to achieve sustainable, long-term growth. Trying to do SEO yourself or hiring a cheap, inexperienced provider often does more harm than good in a market as tough as Melbourne.",
    },
    {
      question: "How do you handle the technical SEO aspects of a large Melbourne website?",
      answer: "Technical SEO is our foundation. For large Melbourne businesses, we start with a comprehensive, deep-dive technical audit to identify and fix issues that are holding back your rankings. This includes site speed optimization, core web vitals, mobile responsiveness, site architecture, and complex schema markup implementation. We ensure your website is perfectly structured for Google to crawl and index efficiently, which is non-negotiable for success in the competitive Melbourne SEO landscape.",
    },
    {
      question: "What is the difference between SEO and SEM (Search Engine Marketing) in Melbourne?",
      answer: "SEO (Search Engine Optimization) focuses on organic (free) rankings, which is a long-term strategy for sustainable growth. SEM (Search Engine Marketing Melbourne) includes both SEO and paid advertising (PPC/Google Ads). We are experts in both. Our integrated approach means we can use paid search to generate immediate leads while we build your long-term organic authority, ensuring you capture maximum market share from day one.",
    },
    {
      question: "How do you ensure your content is high quality for the Melbourne audience?",
      answer: "Our content is created by senior writers who understand both SEO and direct-response copywriting. We ensure every piece of content is authoritative, addresses the specific pain points of the Melbourne market, and is optimized for commercial intent. We focus on in-depth, valuable content that establishes your brand as a thought leader, which is essential for earning the trust of skeptical Melbourne consumers and outranking your competitors.",
    },
    {
      question: "Can you help with my website design as well?",
      answer: "Yes. As a full-service digital agency, we offer professional web design services. We understand that a high-ranking website is useless if it doesn't convert. We design and build websites with conversion rate optimization (CRO) and SEO baked in from the ground up, ensuring your site is not just beautiful, but a powerful lead-generating machine. This integration of design and SEO is a major advantage over single-service SEO specialist Melbourne firms.",
    },
    {
      question: "Why should I trust your 95% client retention rate?",
      answer: "In a market where agencies rely on lock-in contracts, a 95% retention rate working month-to-month is our strongest proof of performance. It means that 19 out of 20 clients choose to stay with us every month because we are consistently delivering a positive ROI. We don't need a contract to keep you; we rely on results. This is the ultimate assurance that when you partner with Odin Digital, you are choosing an SEO company Melbourne that is committed to your long-term success.",
    },
  ];

  const schemaOrgJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://odindigital.com.au/#organization",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://odindigital.com.au/logo.png",
          "width": 250,
          "height": 60
        },
        "description": "Performance-focused digital marketing agency specializing in PPC, Meta Ads, Web Design, and SEO with no lock-in contracts.",
        "founder": {
          "@type": "Person",
          "name": "Lucas Durante"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "5"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://odindigital.com.au/seo-melbourne/#localbusiness",
        "name": "Odin Digital - SEO Melbourne",
        "image": "https://odindigital.com.au/melbourne-seo-services.jpg",
        "url": "https://odindigital.com.au/seo-melbourne/",
        "telephone": "+61-XXX-XXX-XXX",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Melbourne",
          "addressRegion": "VIC",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -37.8136,
          "longitude": 144.9631
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "17:00"
        },
        "sameAs": [
          "https://www.facebook.com/odindigital",
          "https://www.linkedin.com/company/odindigital",
          "https://www.instagram.com/odindigital"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/seo-melbourne/#enterprise-seo",
        "serviceType": "Enterprise SEO Melbourne",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Melbourne"
        },
        "description": "For established Melbourne businesses and corporations that need a comprehensive, data-driven approach to dominate the most competitive keywords in their industry.",
        "offers": {
          "@type": "Offer",
          "url": "https://odindigital.com.au/contact/"
        }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/seo-melbourne/#ecommerce-seo",
        "serviceType": "Ecommerce SEO Melbourne",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Melbourne"
        },
        "description": "Turn your online store into a revenue-generating machine. We optimize product pages, build high-quality backlinks, and implement technical SEO strategies to increase visibility and drive more sales through your website.",
        "offers": {
          "@type": "Offer",
          "url": "https://odindigital.com.au/contact/"
        }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/seo-melbourne/#local-seo",
        "serviceType": "Local SEO Melbourne",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Melbourne"
        },
        "description": "Dominate local search results and drive foot traffic to your door. We optimize your Google Business Profile, build local citations, and create location-specific content to put you in front of customers ready to buy.",
        "offers": {
          "@type": "Offer",
          "url": "https://odindigital.com.au/contact/"
        }
      },
      {
        "@type": "Review",
        "@id": "https://odindigital.com.au/seo-melbourne/#review1",
        "itemReviewed": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Fabienne Costa"
        },
        "reviewBody": "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with. They are the only SEO agency Melbourne that truly understands e-commerce.",
        "publisher": {
          "@type": "Organization",
          "name": "YCL Jewels"
        }
      },
      {
        "@type": "Review",
        "@id": "https://odindigital.com.au/seo-melbourne/#review2",
        "itemReviewed": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Liam C"
        },
        "reviewBody": "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys. They are the best SEO company Melbourne has to offer.",
        "publisher": {
          "@type": "Organization",
          "name": "Krush Organics"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq, index) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>SEO Melbourne | Dominate Google Search | Odin Digital</title>
        <meta name="description" content="Melbourne SEO services that drive real revenue. $574M+ client results. Local SEO, technical audits & link building. 540% ROI. No contracts. Free strategy call today." />
        <link rel="canonical" href="https://odindigital.com.au/seo-melbourne/" />
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 pt-24 pb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/services">Services</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>SEO Melbourne</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section with Melbourne Location Image */}
        <section className="relative isolate overflow-hidden pt-12 pb-16 px-6 bg-gradient-to-br from-white via-muted/30 to-muted/20">
          {/* Melbourne Skyline Background Image */}
          <div className="absolute inset-0 z-0">
            <picture>
              <source srcSet={locationImages.melbourne.webp} type="image/webp" />
              <OptimizedImage src={locationImages.melbourne.jpg} alt="Image" sizes="(max-width: 768px) 100vw, 50vw" priority className="w-full h-full object-cover opacity-10" alt={locationImages.melbourne.alt} />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
          </div>

          {/* Animated Background Blobs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-pulse z-[1]" />
          <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-muted/15 rounded-full blur-3xl animate-pulse z-[1]" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-muted/10 rounded-full blur-3xl animate-pulse z-[1]" style={{ animationDelay: "3s" }} />
          
          {/* Floating Particles */}
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-muted/20 rounded-full animate-float"></div>
          <div className="absolute top-64 right-1/3 w-3 h-3 bg-muted/25 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-48 left-1/2 w-2 h-2 bg-muted/15 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-black text-charcoal mb-6 leading-tight">
                SEO Melbourne: Stop Burning Money on SEO That Doesn't Convert
              </h1>
              <h2 className="text-2xl md:text-3xl text-charcoal/80 mb-8 font-bold">
                Tired of Melbourne SEO Agencies That Promise the World But Lock You Into a 12-Month Contract of Excuses?
              </h2>
              <p className="text-lg md:text-xl text-charcoal/70 mb-6 leading-relaxed">
                You've been burned before. You paid a Melbourne SEO agency thousands of dollars, and all you got was a bunch of technical jargon, zero transparency, and rankings for keywords that don't bring in a single dollar of revenue.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
                Here's the truth: The problem isn't SEO. The problem is the typical SEO company Melbourne that treats you like a number. At Odin Digital, we don't do lock-in contracts. We don't waste your time on vanity metrics. We focus on one thing: Driving real, measurable revenue for your business.
              </p>
              <Button variant="cta" size="xl" asChild className="mb-4 w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 whitespace-normal break-words">
                <Link to="/contact">
                  Get Your FREE Melbourne SEO Strategy <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground/70">
                No credit card required • See what's holding you back in 48 hours
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => {
                const MetricCounter = () => {
                  const { count, countRef } = useCountUp(metric.value);
                  return (
                    <div ref={countRef} className="relative text-3xl md:text-4xl font-bold text-primary mb-2 whitespace-nowrap [font-variant-numeric:tabular-nums]">
                      <span className="invisible">{`$${metric.value}${metric.suffix}`}</span>
                      <span className="absolute inset-0">{count !== null ? `$${count}${metric.suffix}` : '\u00A0'}</span>
                    </div>
                  );
                };

                return (
                  <Card key={index} className="text-center p-4 md:p-6">
                    <CardContent className="pt-4 md:pt-6">
                      <MetricCounter />
                      <p className="text-sm md:text-base text-muted-foreground break-words">{metric.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
              Your Melbourne SEO Isn't Working. Here's Why.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <Card key={index}>
                    <CardHeader>
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <CardTitle className="text-xl">{problem.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{problem.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Our Melbourne Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
              Our SEO Services Melbourne
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base">{service.description}</CardDescription>
                    <Button asChild className="w-full min-h-[48px]">
                      <Link to="/contact" className="px-2 sm:px-4">
                        <span className="hidden md:inline">{service.cta}</span>
                        <span className="hidden sm:inline md:hidden">Get FREE Audit →</span>
                        <span className="sm:hidden">Get FREE Audit Now</span>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
              What Makes Odin Digital the Anti-Agency?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentiators.map((diff, index) => {
                const Icon = diff.icon;
                return (
                  <Card key={index}>
                    <CardHeader>
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <CardTitle className="text-xl">{diff.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{diff.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
              Our Proven 4-Step SEO Process for Melbourne Businesses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
              Why Odin Digital is the Smartest Investment for Your Melbourne Business
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {whyChooseUs.map((reason, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Escape the Melbourne SEO Trap and Start Seeing Real Revenue?
              </h2>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground">
                Stop wasting your money on SEO agencies Melbourne that hide behind contracts and vanity metrics. Partner with Odin Digital and experience a performance-focused, transparent, and accountable approach to SEO. No lock-in contracts. No BS. Just real, measurable results that drive revenue.
              </p>
              <Button asChild size="lg" className="min-h-[48px] text-lg px-8">
                <Link to="/contact">
                  Get Your FREE Melbourne SEO Strategy <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Melbourne-Specific Statistics */}
        {locationInfo && (
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Melbourne Digital Marketing Landscape
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Understanding Melbourne's dynamic business environment
              </p>
              
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-charcoal mb-2">{locationInfo.statistics.population}</div>
                    <div className="text-sm text-muted-foreground">Population</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-charcoal mb-2">{locationInfo.statistics.businesses}</div>
                    <div className="text-sm text-muted-foreground">Active Businesses</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-charcoal mb-2">{locationInfo.statistics.gdp}</div>
                    <div className="text-sm text-muted-foreground">GDP</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <TrendingUpIcon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-charcoal mb-2">{locationInfo.statistics.growthRate}</div>
                    <div className="text-sm text-muted-foreground">Annual Growth</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Business Districts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {locationInfo.businessDistricts.map((district, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{district}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Melbourne Landmarks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {locationInfo.landmarks.map((landmark, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{landmark}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Melbourne Case Study */}
        {locationInfo?.caseStudy && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Melbourne Success Story
              </h2>
              
              <Card className="max-w-4xl mx-auto border-2 border-primary/20">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-2xl">{locationInfo.caseStudy.business}</CardTitle>
                  <CardDescription className="text-base">{locationInfo.caseStudy.industry}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-charcoal">The Challenge</h3>
                      <p className="text-muted-foreground">{locationInfo.caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-charcoal">Our Solution</h3>
                      <p className="text-muted-foreground">{locationInfo.caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-charcoal">The Results</h3>
                      <ul className="space-y-3">
                        {locationInfo.caseStudy.results.map((result, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-charcoal font-medium">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Melbourne Service Area Map */}
        {locationInfo && (
          <section className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <LocationMap 
                  city={locationInfo.city}
                  coordinates={locationInfo.coordinates}
                  address={locationInfo.citations.address}
                />
                
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Local Business Citation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold text-lg mb-2">{locationInfo.citations.name}</h3>
                    <p className="text-muted-foreground mb-3">{locationInfo.citations.description}</p>
                    <div className="space-y-1 text-sm">
                      <p><strong>Address:</strong> {locationInfo.citations.address}</p>
                      <p><strong>Phone:</strong> <a href={`tel:${locationInfo.citations.phone}`} className="text-primary hover:underline">{locationInfo.citations.phone}</a></p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}


        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t md:hidden z-50">
          <Button asChild className="w-full min-h-[48px]" size="lg">
            <Link to="/contact">
              Get FREE Strategy <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>


        {/* Related Locations - Using Content Clusters */}
        <RelatedLocations 
          locations={relatedLocationsList}
          title="SEO Services in Other Australian Cities"
        />

        <RelatedServices services={relatedServices} />

        <Footer />
      </div>
    </>
  );
};

export default MelbourneSEO;
