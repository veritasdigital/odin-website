import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
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
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

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
  }, [end, duration, isVisible]);

  return { count, ref: countRef };
};

const MetricCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);

  return (
    <Card className="p-4 sm:p-6 text-center">
      <div ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-2 break-words">
        {suffix === "M+" ? `$${count}${suffix}` : `${count}${suffix}`}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground font-medium break-words">{label}</div>
    </Card>
  );
};

const NewcastleSEO = () => {
  const metrics = [
    { value: 574, suffix: "M+", label: "Verified Client Revenue" },
    { value: 540, suffix: "%", label: "Average Client ROI" },
    { value: 95, suffix: "%", label: "Client Retention Rate" },
    { value: 200, suffix: "+", label: "Businesses Scaled" },
  ];

  const painPoints = [
    {
      title: "The \"SEO Takes Time\" Lie",
      description: "Your current agency keeps saying \"SEO takes time\" without showing you a roadmap, milestones, or any real proof that they're making progress. You're stuck in the dark, paying monthly fees with no idea if anything is actually working.",
    },
    {
      title: "The Transparency Black Box",
      description: "You get monthly reports filled with jargon, vanity metrics, and pretty graphs—but no clear insight into what's actually driving results. You never speak to the people doing the work. You have no idea what's happening under the hood.",
    },
    {
      title: "High-Traffic, Low-Conversion Syndrome",
      description: "Your SEO company brags about traffic and rankings, but you're not getting high-quality leads. The traffic doesn't convert. Your phone doesn't ring. Your revenue doesn't move. You're paying for vanity metrics, not business growth.",
    },
  ];

  const testimonials = [
    {
      name: "Liam C",
      company: "Krush Organics",
      text: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
      rating: 5,
    },
    {
      name: "Will W",
      company: "Imperial Wealth",
      text: "The team at Odin have been instrumental in growing our business. Their strategic approach to SEO and digital marketing has delivered measurable results and a strong ROI.",
      rating: 5,
    },
    {
      name: "John D",
      company: "Adriatic Furniture",
      text: "Working with Odin Digital has transformed our online presence. Their expertise in SEO has helped us reach more customers and grow our revenue significantly.",
      rating: 5,
    },
  ];

  const services = [
    {
      icon: <Settings className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Technical SEO",
      description: "Fix the technical issues that prevent Google from crawling and indexing your site properly. We audit your site, identify problems, and implement solutions that improve your search visibility.",
      link: "/services/technical-seo",
    },
    {
      icon: <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Content Strategy",
      description: "Develop high-quality, optimized content that ranks in search engines and converts visitors into customers. We create content that establishes your authority and drives business results.",
      link: null,
    },
    {
      icon: <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Local SEO",
      description: "Dominate local search results in Newcastle. We optimize your Google Business Profile, build local citations, and ensure you appear when customers in your area are searching for your services.",
      link: "/local-seo",
    },
    {
      icon: <Link2 className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Link Building",
      description: "Build high-quality backlinks that boost your domain authority and search rankings. We use ethical, white-hat link building strategies that deliver long-term results.",
      link: null,
    },
  ];

  const differentiators = [
    {
      title: "Ethical SEO Practices Only",
      description: "No black-hat tactics. No shady link schemes. No tricks that could get you penalized. We use only white-hat, sustainable SEO strategies that Google rewards, not punishes.",
    },
    {
      title: "No Lock-in Contracts",
      description: "We don't trap you in 12-month contracts because we're confident in our work. You're free to leave anytime. We earn your business every single month by delivering results.",
    },
    {
      title: "High-Intent Keyword Focus",
      description: "We don't waste time on vanity keywords that don't convert. We target high-intent keywords—the terms your customers use when they're ready to buy—and optimize your content to satisfy that intent.",
    },
    {
      title: "Transparent Reporting",
      description: "No smoke and mirrors. No hidden fees. No BS. You get clear, actionable reports that show exactly what we're doing, why we're doing it, and what results it's generating.",
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
      title: "No Lock-In Contracts",
      description: "We earn your business every month. If we're not delivering results, you're free to walk away. No 12-month contracts, no exit fees.",
      stat: "Flexible",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Audit",
      description: "We analyze your current SEO performance, identify technical issues, audit your content, and review your backlink profile to understand where you stand.",
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "We build a customized SEO roadmap designed to achieve your specific revenue goals. Not generic rankings—real business outcomes with clear milestones.",
    },
    {
      number: "03",
      title: "Technical Optimization",
      description: "We fix technical SEO issues, improve site speed, optimize crawlability, and ensure Google can properly index your content.",
    },
    {
      number: "04",
      title: "Ongoing Optimization",
      description: "We continuously monitor performance, adapt to algorithm changes, and optimize based on data. You always know how your SEO is performing.",
    },
  ];

  const faqs = [
    {
      question: "Why do SEO agencies in Newcastle always say \"SEO takes time\"?",
      answer: "While it's true that SEO is a long-term strategy, many agencies use the \"SEO takes time\" line as an excuse for poor performance or lack of a clear plan. Our seo agency newcastle team sets clear, measurable milestones and focuses on high-impact technical and on-page fixes first, which often deliver noticeable results within the first 60-90 days, moving you past the frustrating waiting game.",
    },
    {
      question: "How do you ensure you deliver high-quality traffic, not just vanity rankings?",
      answer: "We focus on high-intent keywords—the terms your customers use when they are ready to buy or engage. We optimize your content to satisfy that intent, ensuring that the traffic we drive is highly qualified. Our reporting focuses on Sales Qualified Leads (SQLs) and Customer Acquisition Cost (CAC) driven by organic search, not just where you rank for a random keyword.",
    },
    {
      question: "How much does it cost to hire a Newcastle SEO management company?",
      answer: "The cost to hire a newcastle seo company varies based on your website's current health and the competitiveness of your industry. We offer transparent, performance-based pricing, typically a flat monthly management fee. Crucially, we operate with no lock-in contracts, which means our value must be proven every month. The best way to determine the exact investment is through a free, no-obligation strategy session.",
    },
    {
      question: "What makes your SEO agency different from other Newcastle SEO companies?",
      answer: "Unlike other agencies, we focus on ethical SEO practices, transparent reporting, and high-intent keyword targeting. We don't lock you into long-term contracts, and we prioritize conversions over vanity metrics. Our 540% average ROI and 95% client retention rate speak for themselves.",
    },
    {
      question: "Can you guarantee first-page rankings on Google?",
      answer: "No ethical SEO agency can guarantee specific rankings because Google's algorithm is constantly changing and influenced by hundreds of factors. What we can guarantee is that we'll implement proven SEO strategies, provide transparent reporting, and focus on driving qualified traffic that converts into revenue.",
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "You can typically see initial improvements in 60-90 days, especially from technical fixes and on-page optimizations. More competitive keywords may take 6-12 months to rank highly. We focus on quick wins first while building long-term authority.",
    },
    {
      question: "Do you use white-hat or black-hat SEO techniques?",
      answer: "We exclusively use white-hat, ethical SEO techniques that comply with Google's guidelines. We never use black-hat tactics like keyword stuffing, cloaking, or link schemes that could result in penalties and harm your website's long-term performance.",
    },
    {
      question: "What is your approach to link building?",
      answer: "We build high-quality, relevant backlinks through content marketing, digital PR, guest posting on authoritative sites, and relationship building. We focus on quality over quantity and never use link farms or paid link schemes.",
    },
    {
      question: "How do you measure SEO success?",
      answer: "We measure success based on business outcomes: organic traffic growth, keyword rankings for high-intent terms, conversion rates, Sales Qualified Leads (SQLs), and ultimately, revenue generated from organic search. We provide detailed monthly reports that tie SEO performance directly to your bottom line.",
    },
    {
      question: "Will I have a dedicated account manager?",
      answer: "Yes. You'll have a dedicated SEO strategist who knows your business, understands your goals, and is always available to answer questions. You won't be passed around to junior team members or left wondering who's working on your account.",
    },
    {
      question: "Do you offer local SEO services for Newcastle businesses?",
      answer: "Absolutely. We specialize in local SEO for Newcastle businesses, including Google Business Profile optimization, local citation building, local link building, and location-specific content strategies to help you dominate local search results.",
    },
    {
      question: "Can you help with technical SEO issues?",
      answer: "Yes. Technical SEO is one of our core strengths. We audit and fix issues like site speed, mobile responsiveness, crawlability, indexation problems, structured data, XML sitemaps, robots.txt, and more. Many of our clients see quick wins from technical fixes alone.",
    },
    {
      question: "What industries do you specialize in?",
      answer: "We work with businesses across various industries, including e-commerce, professional services, healthcare, legal, real estate, home services, and B2B companies. Our strategies are customized to each industry's unique competitive landscape and customer behavior.",
    },
    {
      question: "How do you stay up-to-date with Google algorithm changes?",
      answer: "Our team continuously monitors Google algorithm updates, industry news, and SEO best practices. We test new strategies, analyze data, and adapt our approach to ensure our clients stay ahead of the curve and maintain strong search visibility.",
    },
    {
      question: "What happens if I'm not happy with the results?",
      answer: "Because we don't lock you into contracts, you're free to leave at any time if you're not satisfied. However, our 95% client retention rate shows that most clients are very happy with our work. We're also committed to transparent communication and will work with you to address any concerns.",
    },
    {
      question: "Do you offer other digital marketing services besides SEO?",
      answer: "Yes. We offer a full suite of digital marketing services including Google Ads, Meta Ads (Facebook/Instagram), Web Design, Email Marketing, and AI SEO. We can integrate these services with your SEO strategy for maximum impact.",
    },
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://growth-conduit-central.lovable.app/#organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://growth-conduit-central.lovable.app/logo.png"
        },
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
        "@type": "LocalBusiness",
        "@id": "https://growth-conduit-central.lovable.app/seo-newcastle/#localbusiness",
        "name": "Odin Digital - SEO Agency Newcastle",
        "image": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Newcastle SEO agency delivering proven results with ethical SEO practices and no lock-in contracts",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Placeholder Street Name",
          "addressLocality": "Newcastle",
          "addressRegion": "NSW",
          "postalCode": "2300",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-32.926667",
          "longitude": "151.778333"
        },
        "url": "https://growth-conduit-central.lovable.app/seo-newcastle",
        "telephone": "+61 2 XXXXXXXX",
        "priceRange": "$$$",
        "servesArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "-32.926667",
            "longitude": "151.778333"
          },
          "geoRadius": "50000"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "50"
        }
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/seo-newcastle/#service",
        "serviceType": "SEO Services Newcastle",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "City",
          "name": "Newcastle"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "SEO Packages Newcastle",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technical SEO Audit"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local SEO Management"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Enterprise SEO Strategy"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://growth-conduit-central.lovable.app/seo-newcastle/#faq",
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
        "@type": "Review",
        "itemReviewed": {
          "@type": "Organization",
          "name": "Odin Digital - SEO Agency Newcastle"
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

  return (
    <>
      <Helmet>
        <title>SEO Agency Newcastle | Proven 540% ROI SEO Services | Odin Digital</title>
        <meta name="description" content="Stop listening to excuses. Odin Digital is the SEO Agency Newcastle businesses trust for ethical, high-performance SEO services with no lock-in contracts. Get your free audit today." />
        <meta name="keywords" content="SEO agency Newcastle, Newcastle SEO, SEO services Newcastle, SEO company Newcastle, local SEO Newcastle" />
        <link rel="canonical" href="https://odindigital.com.au/seo-newcastle" />
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
                <BreadcrumbPage>Newcastle</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-background/95 backdrop-blur-sm border-t md:hidden">
          <div className="flex gap-2">
            <Link to="/contact" className="flex-1">
              <Button variant="cta" size="lg" className="w-full text-sm px-4 py-3 h-auto">
                <span className="truncate">Get Free SEO Audit</span>
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

        {/* Hero Section */}
        <section className="relative py-8 sm:py-12 md:py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          {/* Floating circles - design elements from home page */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground mb-3 sm:mb-4 md:mb-6 leading-tight px-1 sm:px-2 mt-16 sm:mt-8 md:mt-0">
                SEO Agency Newcastle
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-primary mb-4 sm:mb-6 md:mb-8 px-1 sm:px-2 leading-snug">`
                Tired of Newcastle SEO Agencies Promising the World and Delivering the Same Old "SEO Takes Time" Excuse? You Need Proof, Not Promises.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-2 sm:mb-3 md:mb-4 max-w-3xl mx-auto px-1 sm:px-2 leading-relaxed">
                Most Newcastle SEO agencies talk a big game. They promise first-page rankings, explosive growth, and transformational results. Then reality hits: vague timelines, mysterious "algorithms," and zero transparency about what's actually being done.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-2 sm:mb-3 md:mb-4 max-w-3xl mx-auto px-1 sm:px-2 leading-relaxed">
                We're different. We're an SEO agency that delivers $574M+ in verified client revenue and a 540% average ROI. We use ethical, white-hat SEO strategies that Google rewards, not punishes.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-1 sm:px-2 leading-relaxed">
                No lock-in contracts. No BS. Just transparent, data-driven SEO that drives real business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center px-1 sm:px-2">`
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="cta" size="xl" className="group text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 lg:py-5 h-auto w-full">
                    <span>Get Your Free SEO Audit</span>
                    <ArrowRight className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:1300123456" className="w-full sm:w-auto">
                  <Button variant="outline" size="xl" className="text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 lg:py-5 h-auto w-full">
                    <Phone className="mr-1.5 sm:mr-2 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span>Call 1300 123 456</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 leading-tight">
                The 3 Biggest Lies Newcastle SEO Agencies Tell You
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
                Sound familiar? Here's what Newcastle businesses tell us before they switch to our SEO services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">`
              {painPoints.map((point, index) => (
                <Card key={index} className="p-3 sm:p-4 md:p-6 lg:p-8 border-l-4 border-l-destructive overflow-hidden">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4 break-words leading-tight">{point.title}</h3>`
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-words leading-relaxed">{point.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 leading-tight">
                Real Results From Real Clients
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
                Don't just take our word for it. Here's what our clients say about our SEO services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-3 sm:p-4 md:p-6 lg:p-8 overflow-hidden bg-background flex flex-col">
                  <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-2 sm:mb-3 md:mb-4 break-words leading-relaxed italic flex-grow">"{testimonial.text}"</p>
                  <div className="mt-auto">
                    <p className="text-xs sm:text-sm md:text-base font-bold text-foreground break-words">{testimonial.name}</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground break-words">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 leading-tight">
                Our Core SEO Services
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
                Comprehensive SEO services designed to drive qualified traffic and real revenue growth.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col overflow-hidden border-t-4 border-t-primary">
                  <div className="flex-shrink-0 mb-2 sm:mb-3 md:mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-1.5 sm:mb-2 md:mb-3 break-words leading-tight">
                    {service.link ? (
                      <Link to={service.link} className="hover:text-primary transition-colors">
                        {service.title}
                      </Link>
                    ) : (
                      service.title
                    )}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground flex-grow break-words leading-relaxed">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 leading-tight">
                What Makes Us Different
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
                We're not your typical SEO agency. Here's why Newcastle businesses choose us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {differentiators.map((diff, index) => (
                <Card key={index} className="p-3 sm:p-4 md:p-6 lg:p-8 border-l-4 border-l-primary bg-background overflow-hidden">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4 break-words leading-tight">{diff.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-words leading-relaxed">{diff.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 leading-tight">
                Our SEO Process
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
                A systematic, transparent approach that delivers measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative overflow-hidden">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary/20 mb-2 sm:mb-3 md:mb-4">{step.number}</div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-1.5 sm:mb-2 md:mb-3 break-words leading-tight">{step.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-words leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 leading-tight">
                Why Newcastle Businesses Choose Odin Digital
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
                We're not just another SEO agency. We're your dedicated growth partner.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="p-3 sm:p-4 md:p-6 lg:p-8 overflow-hidden">
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden p-1.5 sm:p-2">
                        <span className="text-[10px] sm:text-xs md:text-sm lg:text-lg font-black text-primary text-center leading-tight">{reason.stat}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-1.5 sm:mb-2 md:mb-3 break-words leading-tight">{reason.title}</h3>
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-words leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Other Cities Links Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">`
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 leading-tight">
                SEO Services in Other Cities
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
                We provide expert SEO services across Australia's major cities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <Link to="/seo-sydney">
                <Card className="p-3 sm:p-4 md:p-6 hover:border-primary transition-colors cursor-pointer h-full overflow-hidden">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1.5 sm:mb-2 break-words leading-tight">SEO Sydney</h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground break-words leading-relaxed mb-2 sm:mb-3 md:mb-4">Dominate search results in Australia's largest market.</p>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                </Card>
              </Link>

              <Link to="/seo-melbourne">
                <Card className="p-3 sm:p-4 md:p-6 hover:border-primary transition-colors cursor-pointer h-full overflow-hidden">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1.5 sm:mb-2 break-words leading-tight">SEO Melbourne</h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground break-words leading-relaxed mb-2 sm:mb-3 md:mb-4">Drive organic growth in Melbourne's competitive market.</p>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                </Card>
              </Link>

              <Link to="/seo-brisbane">
                <Card className="p-3 sm:p-4 md:p-6 hover:border-primary transition-colors cursor-pointer h-full overflow-hidden">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1.5 sm:mb-2 break-words leading-tight">SEO Brisbane</h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground break-words leading-relaxed mb-2 sm:mb-3 md:mb-4">Increase your visibility in Queensland's capital.</p>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                </Card>
              </Link>

              <Link to="/seo-adelaide">
                <Card className="p-3 sm:p-4 md:p-6 hover:border-primary transition-colors cursor-pointer h-full overflow-hidden">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1.5 sm:mb-2 break-words leading-tight">SEO Adelaide</h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground break-words leading-relaxed mb-2 sm:mb-3 md:mb-4">Grow your Adelaide business with local SEO expertise.</p>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                </Card>
              </Link>

              <Link to="/seo-canberra">
                <Card className="p-3 sm:p-4 md:p-6 hover:border-primary transition-colors cursor-pointer h-full overflow-hidden">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1.5 sm:mb-2 break-words leading-tight">SEO Canberra</h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground break-words leading-relaxed mb-2 sm:mb-3 md:mb-4">Specialized SEO for government and B2G markets.</p>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                </Card>
              </Link>

              <Link to="/seo-gold-coast">
                <Card className="p-3 sm:p-4 md:p-6 hover:border-primary transition-colors cursor-pointer h-full overflow-hidden">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1.5 sm:mb-2 break-words leading-tight">SEO Gold Coast</h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground break-words leading-relaxed mb-2 sm:mb-3 md:mb-4">Attract more customers on the Gold Coast.</p>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 leading-tight">
                Integrated Digital Marketing Services
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
                Combine SEO with our other services for maximum impact.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <Link to="/services/google-ads">
                <Card className="p-3 sm:p-4 md:p-6 hover:border-primary transition-colors cursor-pointer h-full overflow-hidden">
                  <BarChart className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mb-2 sm:mb-3 md:mb-4 flex-shrink-0" />
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1.5 sm:mb-2 break-words leading-tight">Google Ads</h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground break-words leading-relaxed mb-2 sm:mb-3 md:mb-4">Drive immediate results while your SEO builds momentum.</p>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                </Card>
              </Link>

              <Link to="/services/facebook-ads">
                <Card className="p-3 sm:p-4 md:p-6 hover:border-primary transition-colors cursor-pointer h-full overflow-hidden">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mb-2 sm:mb-3 md:mb-4 flex-shrink-0" />
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1.5 sm:mb-2 break-words leading-tight">Meta Ads</h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground break-words leading-relaxed mb-2 sm:mb-3 md:mb-4">Expand your reach with targeted social media advertising.</p>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                </Card>
              </Link>

              <Link to="/services/web-design">
                <Card className="p-3 sm:p-4 md:p-6 hover:border-primary transition-colors cursor-pointer h-full overflow-hidden">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mb-2 sm:mb-3 md:mb-4 flex-shrink-0" />
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1.5 sm:mb-2 break-words leading-tight">Web Design</h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground break-words leading-relaxed mb-2 sm:mb-3 md:mb-4">Convert your SEO traffic with a high-performing website.</p>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                </Card>
              </Link>

              <Link to="/services/email-marketing">
                <Card className="p-3 sm:p-4 md:p-6 hover:border-primary transition-colors cursor-pointer h-full overflow-hidden">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mb-2 sm:mb-3 md:mb-4 flex-shrink-0" />
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1.5 sm:mb-2 break-words leading-tight">Email Marketing</h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground break-words leading-relaxed mb-2 sm:mb-3 md:mb-4">Nurture leads and drive repeat business with email.</p>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">`
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          {/* Floating circles */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-foreground mb-3 sm:mb-4 md:mb-6 px-1 sm:px-2 leading-tight">
              Ready to See Real SEO Results?
            </h2>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 leading-relaxed">
              Stop wasting money on Newcastle SEO agencies that promise the world and deliver excuses. Partner with an agency that has driven $574M+ in verified client revenue and a 540% average ROI.
            </p>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 px-1 sm:px-2 leading-relaxed">
              Book your free SEO audit today and discover exactly how we can help you dominate search results and drive measurable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center px-1 sm:px-2">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="cta" size="xl" className="group text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 lg:py-5 h-auto w-full">
                  <span>Get Your Free SEO Audit Now</span>
                  <ArrowRight className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:1300123456" className="w-full sm:w-auto">
                <Button variant="outline" size="xl" className="text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 lg:py-5 h-auto w-full">
                  <Phone className="mr-1.5 sm:mr-2 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span>Call 1300 123 456</span>
                </Button>
              </a>
            </div>

            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-3 sm:mt-4 md:mt-6 px-1 sm:px-2 leading-relaxed">`
              No lock-in contracts. No obligation. Just honest advice from SEO experts who deliver real results.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground px-2 sm:px-4 leading-relaxed">
                Everything you need to know about our SEO services in Newcastle.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="overflow-hidden">
                  <AccordionTrigger className="text-left font-semibold text-xs sm:text-sm md:text-base break-words pr-6 sm:pr-8 hover:no-underline">`
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground break-words leading-relaxed">
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

export default NewcastleSEO;
