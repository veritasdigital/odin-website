import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { locationImages } from "@/utils/locationImages";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import {
  CheckCircle, 
  TrendingUp, 
  Users, 
  Target, 
  Search, 
  BarChart, 
  Shield, 
  Zap, 
  ArrowRight,
  Building2,
  FileText,
  Link2,
  Phone,
  Globe,
  Award,
  Settings,
  LineChart
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Count-up animation hook
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const delayTimeout = setTimeout(() => {
      setCount(0);
      
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, 100);

    return () => clearTimeout(delayTimeout);
  }, [end, duration, isVisible]);

  return { count, ref: countRef };
};

const MetricCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  const finalText = suffix === "M+" ? `$${value}${suffix}` : `${value}${suffix}`;

  return (
    <Card className="p-4 sm:p-6 text-center">
      <div ref={ref} className="relative text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-2 whitespace-nowrap [font-variant-numeric:tabular-nums]">
        <span className="invisible">{finalText}</span>
        <span className="absolute inset-0">
          {count !== null ? (suffix === "M+" ? `$${count}${suffix}` : `${count}${suffix}`) : '\u00A0'}
        </span>
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground font-medium">{label}</div>
    </Card>
  );
};

const CanberraSEO = () => {
  const metrics = [
    { value: 574, suffix: "M+", label: "Verified Client Revenue" },
    { value: 540, suffix: "%", label: "Average Client ROI" },
    { value: 95, suffix: "%", label: "Client Retention Rate" },
    { value: 200, suffix: "+", label: "Businesses Scaled" },
  ];

  const painPoints = [
    {
      title: "Generic SEO Strategies That Don't Understand Canberra",
      description: "Your SEO agency treats you like every other client. They don't understand the Canberra market, government procurement, or B2G sales cycles.",
    },
    {
      title: "No Government Sector Expertise",
      description: "Most SEO companies have zero experience with government contracts, defence industry marketing, or education sector optimisation. You need specialists.",
    },
    {
      title: "Rankings Without Conversions",
      description: "You're ranking on page 1, but you're not getting the right leads. Your SEO company focuses on traffic, not qualified government contracts or high-value B2B leads.",
    },
    {
      title: "Slow Results and Vague Timelines",
      description: "Your agency keeps saying 'SEO takes time' without giving you a clear roadmap or milestones. You're left wondering if anything is actually happening.",
    },
    {
      title: "Poor Communication and Transparency",
      description: "You get monthly reports full of jargon, but no real insight into what's working. You never speak to the people actually doing the work.",
    },
    {
      title: "Cookie-Cutter Content That Doesn't Rank",
      description: "Your content is generic, uninspired, and doesn't establish thought leadership. It's not winning government contracts or attracting decision-makers.",
    },
    {
      title: "No Integration With Your Sales Process",
      description: "Your SEO exists in a vacuum. It's not aligned with your Google Ads, your sales team, or your business development goals.",
    },
    {
      title: "Lack of Industry-Specific Knowledge",
      description: "Your SEO provider doesn't understand the unique compliance requirements, tender processes, or decision-making timelines in the government and defence sectors.",
    },
  ];

  const differentiators = [
    {
      title: "Local Canberra Expertise",
      description: "We understand the Canberra market, government procurement processes, and local business dynamics. We're not outsiders trying to figure it out.",
    },
    {
      title: "Government Sector Specialists",
      description: "We specialise in B2G marketing, defence industry SEO, and education sector optimisation. We know how government buyers search and make decisions.",
    },
    {
      title: "Conversion-Focused Strategy",
      description: "We don't chase vanity metrics. We target high-intent, high-conversion keywords that drive qualified leads and government contracts.",
    },
    {
      title: "Transparent Roadmap and Milestones",
      description: "You get a clear, week-by-week roadmap with specific milestones. You always know what we're doing and why.",
    },
    {
      title: "Direct Access to SEO Strategists",
      description: "You work directly with senior SEO consultants, not junior account managers. You get expert advice, not scripted responses.",
    },
    {
      title: "Thought Leadership Content",
      description: "We develop content that establishes you as an industry authority. Content that wins government contracts and attracts decision-makers.",
    },
    {
      title: "Integrated Digital Strategy",
      description: "We align your SEO with Google Ads, social media, and your sales process. Everything works together to drive growth.",
    },
    {
      title: "Data-Driven Decision Making",
      description: "Every strategy is backed by data and analytics. We track performance, identify opportunities, and continuously optimise based on real results.",
    },
  ];

  const services = [
    {
      icon: <Target className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "SEO Strategy and Consulting",
      description: "Customised SEO strategy aligned with your business goals, market positioning, and competitive landscape. We identify opportunities and develop a roadmap to dominate your market.",
    },
    {
      icon: <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Local SEO Optimisation",
      description: "Optimise for Canberra-specific searches. We build local citations, optimise your Google Business Profile, and ensure local customers find you first.",
    },
    {
      icon: <Building2 className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Government Sector SEO",
      description: "Specialised SEO for government contractors, defence suppliers, and education providers. We understand procurement processes and buyer behaviour.",
    },
    {
      icon: <Settings className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Technical SEO",
      description: "Fix technical issues that prevent Google from crawling and indexing your site. We audit, identify problems, and implement solutions that improve performance.",
    },
    {
      icon: <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Content Strategy and Creation",
      description: "Develop thought leadership content that ranks, converts, and establishes authority. Content designed to win government contracts and attract decision-makers.",
    },
    {
      icon: <Link2 className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Link Building and Authority",
      description: "Build high-quality backlinks from authoritative sources. We develop relationships, create link-worthy content, and establish your domain authority.",
    },
    {
      icon: <LineChart className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "SEO Analytics and Reporting",
      description: "Detailed reporting on rankings, traffic, conversions, and ROI. You see exactly how SEO is impacting your bottom line.",
    },
    {
      icon: <Award className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Ongoing Optimisation",
      description: "Continuous monitoring, testing, and optimisation. We adapt to algorithm changes, competitive moves, and market shifts.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Competitive Analysis",
      description: "In-depth analysis of your competitors' SEO strategies. We identify gaps, opportunities, and develop tactics to outrank them in the Canberra market.",
    },
  ];

  const whyChooseUs = [
    {
      title: "$574M+ in Verified Client Revenue",
      description: "We're not just talking about rankings - we're talking about real, measurable revenue growth. Our clients have generated over $574 million in verified revenue.",
      stat: "$574M+",
    },
    {
      title: "540% Average ROI",
      description: "For every dollar you invest in our SEO services, our clients see an average return of $5.40. That's the kind of return that transforms businesses.",
      stat: "540%",
    },
    {
      title: "95% Client Retention Rate",
      description: "Our clients stay with us because we deliver results. A 95% retention rate speaks to the quality of our work and the relationships we build.",
      stat: "95%",
    },
    {
      title: "Canberra Market Knowledge",
      description: "We understand the local market, government procurement, and B2G sales. We're not outsiders - we're specialists who know Canberra inside out.",
      stat: "Local",
    },
    {
      title: "Government Sector Expertise",
      description: "We specialise in defence industry SEO, education sector optimisation, and government contractor marketing. We speak your language.",
      stat: "B2G",
    },
    {
      title: "Transparent Reporting",
      description: "No smoke and mirrors. No hidden fees. No BS. You always know what we're doing, why we're doing it, and what results it's generating.",
      stat: "Clear",
    },
    {
      title: "Senior Consultant Access",
      description: "You work directly with experienced SEO strategists, not junior account managers. You get expert advice from people who've done this for years.",
      stat: "Expert",
    },
    {
      title: "Integrated Strategy",
      description: "We align SEO with your Google Ads, social media, and sales process. Everything works together to drive maximum growth.",
      stat: "360°",
    },
    {
      title: "No Lock-In Contracts",
      description: "We earn your business every month. If we're not delivering results, you're free to walk away. No 12-month contracts, no exit fees.",
      stat: "Flexible",
    },
    {
      title: "Proven Results Across Industries",
      description: "We've delivered results for defence contractors, education providers, professional services, and government suppliers. We know what works.",
      stat: "200+",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery and Audit",
      description: "We analyse your current SEO performance, competitive landscape, market positioning, and business goals. We identify opportunities and gaps.",
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "We build a customised SEO strategy designed to achieve your specific revenue goals. Not generic rankings - real business outcomes.",
    },
    {
      number: "03",
      title: "Technical Optimisation",
      description: "We fix technical issues, improve site speed, optimise crawlability, and ensure Google can properly index your content.",
    },
    {
      number: "04",
      title: "Content Strategy",
      description: "We develop a content roadmap that targets high-intent keywords, establishes thought leadership, and drives conversions.",
    },
    {
      number: "05",
      title: "On-Page Optimisation",
      description: "We optimise every page for target keywords, improve internal linking, and ensure your content is structured for maximum visibility.",
    },
    {
      number: "06",
      title: "Link Building",
      description: "We build high-quality backlinks through content marketing, digital PR, and relationship building. No shady tactics, just authority.",
    },
    {
      number: "07",
      title: "Competitor Outranking",
      description: "We analyse competitor strategies and implement tactics to outrank them for high-value keywords and government contract searches.",
    },
    {
      number: "08",
      title: "Conversion Optimisation",
      description: "We ensure your SEO traffic converts into leads and contracts by optimising landing pages, CTAs, and user experience.",
    },
    {
      number: "09",
      title: "Monitor, Report, Optimise",
      description: "We continuously monitor performance, report on results, and optimise based on data. You always know how your SEO is performing.",
    },
  ];

  const faqs = [
    {
      question: "Why isn't my SEO working?",
      answer: "There are usually several reasons: poor strategy, technical issues, weak content, poor link profile, or targeting the wrong keywords. We analyse your SEO and identify the specific issues. We develop a plan to fix them.",
    },
    {
      question: "How long does SEO take?",
      answer: "You can see initial results within 2–4 weeks, but it typically takes 8–12 weeks to see consistent results. Competitive keywords take longer. We focus on quick wins first, then build long-term authority.",
    },
    {
      question: "How much does SEO cost?",
      answer: "SEO costs vary based on your goals, competition, and industry. We offer flexible pricing and packages. We focus on ROI, not just cost. We're happy to discuss your budget and develop a plan that works for you.",
    },
    {
      question: "Do you specialise in government SEO?",
      answer: "Absolutely. We specialise in government procurement and B2G marketing. We understand government buyer behaviour. We help defence contractors, education providers, and government service providers win contracts.",
    },
    {
      question: "Can you help with my industry?",
      answer: "We specialise in defence, education, professional services, and government sectors. If your industry is different, we can help. We're experienced in many industries and can develop a strategy for yours.",
    },
    {
      question: "What's your SEO strategy?",
      answer: "Our strategy is customised for your business. We focus on high-intent, high-conversion keywords. We build topical authority. We develop a content strategy that ranks and converts. We build quality backlinks. We continuously optimise.",
    },
    {
      question: "Do you do local SEO?",
      answer: "Yes. We specialise in local SEO for Canberra. We optimise for local keywords. We build local citations. We optimise your Google Business Profile. Local customers find you easily.",
    },
    {
      question: "How do I know if SEO is working?",
      answer: "We provide detailed reporting. You see rankings, traffic, conversions, and ROI. We track everything and report monthly. You always know how your SEO is performing.",
    },
    {
      question: "What's the difference between SEO and SEM?",
      answer: "SEO is organic search (free listings). SEM is paid search (Google Ads). Both are important. We offer both services and can integrate them for maximum results.",
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes. We provide ongoing SEO management, monitoring, optimisation, and reporting. You get a dedicated account manager who's always available.",
    },
    {
      question: "Can you guarantee rankings?",
      answer: "No one can guarantee rankings. Anyone who promises #1 rankings is lying. We can guarantee we'll do everything right. We can guarantee we'll continuously optimise. We can guarantee we'll focus on ROI. But rankings depend on many factors beyond our control.",
    },
    {
      question: "What if I'm not happy with results?",
      answer: "We're confident in our work. If you're not happy, we'll work with you to improve results. We have a 95% client retention rate because we deliver results.",
    },
    {
      question: "Do you have local Canberra experience?",
      answer: "Yes. We're based in Australia and specialise in the Australian market. We have extensive experience in Canberra and understand the local market dynamics.",
    },
    {
      question: "Can you help with defence sector SEO?",
      answer: "Yes. We specialise in defence sector SEO. We understand defence industry regulations, procurement processes, and buyer behaviour. We've helped defence contractors win contracts through SEO.",
    },
    {
      question: "How do I get started?",
      answer: "Book a free consultation with one of our SEO strategists. We'll review your current situation, identify opportunities, and show you exactly how we can help.",
    },
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://odindigital.com.au/#organization",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au",
        "logo": {
          "@type": "ImageObject",
          "url": "https://odindigital.com.au/logo.png"
        },
        "description": "Digital marketing agency specialising in SEO, Google Ads, Meta Ads, and Web Design",
        "foundingDate": "2015",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "telephone": "+61-1300-123-456",
          "email": "contact@odindigital.com.au"
        },
        "sameAs": [
          "https://www.facebook.com/odindigital",
          "https://www.linkedin.com/company/odindigital",
          "https://www.instagram.com/odindigital"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://odindigital.com.au/seo-canberra/#localbusiness",
        "name": "Odin Digital - Canberra SEO Services",
        "image": "https://odindigital.com.au/logo.png",
        "description": "Local SEO agency in Canberra specialising in government sector SEO, defence industry marketing, and education sector optimisation",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Canberra",
          "addressRegion": "ACT",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -35.2809,
          "longitude": 149.1300
        },
        "url": "https://odindigital.com.au/seo-canberra",
        "telephone": "+61-1300-123-456",
        "priceRange": "$$",
        "areaServed": {
          "@type": "City",
          "name": "Canberra"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "17:00"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/seo-canberra/#service",
        "name": "SEO Services Canberra",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "description": "Customised SEO services for Canberra businesses, including government sector SEO, local SEO, and industry-specific optimisation",
        "areaServed": {
          "@type": "City",
          "name": "Canberra"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "SEO Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Strategy and Consulting"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local SEO Optimisation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Government Sector SEO"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technical SEO"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Content Strategy and Creation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Link Building and Authority"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Analytics and Reporting"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://odindigital.com.au/seo-canberra/#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "AggregateRating",
        "itemReviewed": {
          "@type": "LocalBusiness",
          "name": "Odin Digital - Canberra SEO Services"
        },
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "283",
        "reviewCount": "283"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>SEO Services Canberra | Local SEO Agency | Odin Digital</title>
        <meta name="description" content="Canberra SEO services with local expertise and government sector knowledge. 540% average ROI. No lock-in contracts. Book a free consultation." />
        <meta name="keywords" content="SEO services Canberra, SEO company Canberra, SEO agency Canberra, local SEO Canberra" />
        <link rel="canonical" href="https://odindigital.com.au/seo-canberra" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <SideTab />

        {/* Breadcrumb Navigation */}
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
                <BreadcrumbLink asChild>
                  <Link to="/services/seo">SEO</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Canberra</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-background/95 backdrop-blur-sm border-t md:hidden">
          <div className="flex gap-2">
            <Link to="/contact" className="flex-1">
              <Button variant="cta" size="lg" className="w-full text-sm px-4 py-3 h-auto">
                <span className="truncate">Book Free Consultation</span>
                <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
              </Button>
            </Link>
            <a href="tel:1300123456" className="flex-shrink-0">
              <Button variant="outline" size="lg" className="h-full px-4">
                <Phone className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>

        {/* Hero Section with Canberra Location Image */}
        <section className="relative isolate overflow-hidden pt-12 pb-16 px-6 bg-gradient-to-br from-white via-muted/30 to-muted/20">
          {/* Canberra Parliament Background Image */}
          <div className="absolute inset-0 z-0">
            <picture>
              <source srcSet={locationImages.canberra.webp} type="image/webp" />
              <img 
                src={locationImages.canberra.jpg}
                alt={locationImages.canberra.alt}
                className="w-full h-full object-cover opacity-10"
                loading="eager"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
          </div>

          {/* Animated Background Blobs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-pulse z-[1]" />
          <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-muted/15 rounded-full blur-3xl animate-pulse z-[1]" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-muted/10 rounded-full blur-3xl animate-pulse z-[1]" style={{ animationDelay: "3s" }} />
          
          {/* Floating Particles */}
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-muted/20 rounded-full animate-float z-[1]"></div>
          <div className="absolute top-64 right-1/3 w-3 h-3 bg-muted/25 rounded-full animate-float z-[1]" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-48 left-1/2 w-2 h-2 bg-muted/15 rounded-float z-[1]" style={{ animationDelay: "2s" }}></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-black text-charcoal mb-6 leading-tight">
                SEO services Canberra
              </h1>
              <h2 className="text-2xl md:text-3xl text-charcoal/80 mb-8 font-bold">
                Canberra SEO that actually works. Local expertise. Government sector knowledge. Real results.
              </h2>
              <p className="text-lg md:text-xl text-charcoal/70 mb-4 leading-relaxed">
                Most SEO companies don't understand the Canberra market. They don't know government procurement. They don't specialise in B2G marketing. They treat you like every other client.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
                We're different. We specialise in Canberra SEO, government sector marketing, and defence industry optimisation. We deliver $574M+ in client revenue and a 540% average ROI.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
                No lock-in contracts. No BS. Just data-driven SEO strategies designed to win government contracts and drive real business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="cta" size="xl" className="w-full text-sm sm:text-base px-6 sm:px-8 whitespace-normal break-words">
                    <span>Book Your Free Consultation</span>
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  </Button>
                </Link>
                <a href="tel:1300123456" className="w-full sm:w-auto">
                  <Button variant="outline" size="xl" className="w-full text-sm sm:text-base px-6 sm:px-8">
                    <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>Call 1300 123 456</span>
                  </Button>
                </a>
              </div>
              <p className="text-sm text-muted-foreground/70 mt-4">
                No credit card required • See what's holding you back in 48 hours
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-3 sm:mb-4 px-2">
                Why Your SEO Isn't Working in Canberra
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                These are the most common frustrations we hear from Canberra businesses before they work with us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {painPoints.map((point, index) => (
                <Card key={index} className="p-4 sm:p-6 md:p-8 border-l-4 border-l-destructive overflow-hidden">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-3 sm:mb-4 break-words">{point.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground break-words leading-relaxed">{point.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-3 sm:mb-4 px-2">
                SEO Built for Canberra
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                We're not a generic SEO company. We're Canberra specialists who understand your market.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {differentiators.map((diff, index) => (
                <Card key={index} className="p-4 sm:p-6 md:p-8 border-l-4 border-l-primary bg-background overflow-hidden">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-3 sm:mb-4 break-words">{diff.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground break-words leading-relaxed">{diff.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-3 sm:mb-4 px-2">
                Our SEO Services for Canberra
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                Comprehensive SEO services designed to dominate the Canberra market and win government contracts.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-4 sm:p-6 md:p-8 flex flex-col overflow-hidden border-t-4 border-t-primary">
                  <div className="flex-shrink-0 mb-3 sm:mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3 break-words">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground flex-grow break-words leading-relaxed">{service.description}</p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-10 md:mt-12 px-2">
              <Link to="/contact" className="inline-block w-full sm:w-auto">
                <Button variant="cta" size="xl" className="group text-sm sm:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 h-auto w-full sm:w-auto">
                  <span>Get Your Free SEO Audit</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-3 sm:mb-4 px-2">
                Why Canberra Businesses Choose Odin Digital for SEO
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                We're not just another SEO company. We're your dedicated growth partner.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="p-4 sm:p-6 md:p-8 overflow-hidden">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden p-2">
                        <span className="text-xs sm:text-sm md:text-lg font-black text-primary text-center leading-tight">{reason.stat}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3 break-words">{reason.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground break-words leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-3 sm:mb-4 px-2">
                Our SEO Process
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                A systematic, data-driven approach that delivers consistent results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative overflow-hidden">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black text-primary/20 mb-3 sm:mb-4">{step.number}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3 break-words">{step.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground break-words leading-relaxed">{step.description}</p>
                  
                  {/* Connecting line - visible on desktop only */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20" style={{ width: 'calc(100% + 2rem)', left: '100%', transform: 'translateX(-50%)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-3 sm:mb-4 px-2">
                Integrated Digital Marketing Services
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                Combine SEO with our other services for maximum impact.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <Link to="/services/google-ads-canberra">
                <Card className="p-4 sm:p-6 hover:border-primary transition-colors cursor-pointer h-full overflow-hidden">
                  <BarChart className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3 sm:mb-4 flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 break-words">Google Ads Canberra</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground break-words leading-relaxed mb-3 sm:mb-4">Drive immediate results while your SEO builds momentum.</p>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                </Card>
              </Link>

              <Link to="/services/facebook-ads-canberra">
                <Card className="p-4 sm:p-6 hover:border-primary transition-colors cursor-pointer h-full overflow-hidden">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3 sm:mb-4 flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 break-words">Facebook Ads Canberra</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground break-words leading-relaxed mb-3 sm:mb-4">Expand your reach with targeted social media advertising.</p>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                </Card>
              </Link>

              <Link to="/services/website-design">
                <Card className="p-4 sm:p-6 hover:border-primary transition-colors cursor-pointer h-full overflow-hidden">
                  <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3 sm:mb-4 flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 break-words">Web Design</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground break-words leading-relaxed mb-3 sm:mb-4">Convert your SEO traffic with a high-performing website.</p>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                </Card>
              </Link>

              <Link to="/services/email-marketing">
                <Card className="p-4 sm:p-6 hover:border-primary transition-colors cursor-pointer h-full overflow-hidden">
                  <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3 sm:mb-4 flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 break-words">Email Marketing</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground break-words leading-relaxed mb-3 sm:mb-4">Nurture leads and drive repeat business with email.</p>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          {/* Floating circles */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 sm:mb-6 px-2">
              Ready to Transform Your SEO?
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-3 sm:mb-4 px-2">
              Stop wasting money on SEO that doesn't understand the Canberra market. Partner with specialists who know government procurement, B2G marketing, and what it takes to win contracts.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 px-2">
              Book your free consultation today and discover exactly how we can help you dominate your market and drive measurable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="cta" size="xl" className="group text-sm sm:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 h-auto w-full">
                  <span>Book Your Free Consultation Now</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:1300123456" className="w-full sm:w-auto">
                <Button variant="outline" size="xl" className="text-sm sm:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 h-auto w-full">
                  <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Call 1300 123 456</span>
                </Button>
              </a>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6 px-2">
              No lock-in contracts. No obligation. Just honest advice from SEO experts who specialise in the Canberra market.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted/30 mb-16 sm:mb-20 md:mb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-3 sm:mb-4 px-2">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-4">
                Everything you need to know about our SEO services in Canberra.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="overflow-hidden">
                  <AccordionTrigger className="text-left font-semibold text-sm sm:text-base break-words pr-8 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground break-words leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CanberraSEO;
