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
import LocationContent from "@/components/LocationContent";

const HobartSEO = () => {
  const { openForm } = useMarketingForm();

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
      description: "Your so-called SEO expert in Hobart has you ranking for high-volume keywords that sound impressive but don't drive sales. Traffic means nothing if it's not bringing in paying customers.",
      icon: Target,
    },
    {
      title: "Your 'Strategy' Is a Cookie-Cutter Template",
      description: "They sold you the same pre-packaged SEO service they sell everyone else. No real analysis. No customization. Just copy-paste tactics that worked in 2015.",
      icon: Zap,
    },
    {
      title: "You Have No Idea What You're Actually Paying For",
      description: "Monthly reports filled with jargon and vanity metrics. You're stuck in a long-term contract with zero transparency and no way to measure actual ROI.",
      icon: TrendingUp,
    },
  ];

  const testimonials = [
    {
      quote: "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
      author: "Fabienne Costa",
      company: "YCL Jewels",
    },
    {
      quote: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
      author: "Liam C",
      company: "Krush Organics",
    },
  ];

  const services = [
    {
      title: "Local SEO Hobart",
      description: "Dominate the local search results and drive foot traffic to your door. We optimize your Google Business Profile, build local citations, and create location-specific content that puts you in front of customers who are ready to buy.",
      cta: "Get Your FREE Local SEO Audit →",
    },
    {
      title: "Ecommerce SEO Hobart",
      description: "Turn your online store into a revenue-generating machine. We optimize your product pages, build high-quality backlinks, and implement technical SEO strategies to increase your visibility and drive more sales through your website.",
      cta: "Get Your FREE Ecommerce SEO Audit →",
    },
    {
      title: "Enterprise SEO Hobart",
      description: "For large-scale businesses that need a comprehensive, data-driven approach. We conduct in-depth technical audits, develop a robust content strategy, and build your site's authority to dominate the most competitive keywords in your industry.",
      cta: "Get Your FREE Enterprise SEO Audit →",
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
      title: "We're Hobart's Most Trusted SEO Agency",
      description: "Our 95% client retention rate speaks for itself. When you work with us, you're not just another account number—you're a partner.",
    },
    {
      title: "We Combine Local Knowledge with World-Class Strategy",
      description: "As a Hobart-based SEO company, we understand the unique challenges and opportunities of the Tasmanian market. We combine this local insight with cutting-edge, data-driven strategies used by the world's top agencies.",
    },
    {
      title: "We Use AI to Maximize Your Results",
      description: "We leverage the latest AI SEO tools to analyze data, uncover opportunities, and optimize campaigns faster and more effectively than traditional methods—giving you a competitive edge.",
    },
  ];

  const faqs = [
    {
      question: "What makes Odin Digital the best SEO company Hobart has to offer?",
      answer: "We believe we're the best SEO company for Hobart businesses because we focus on what matters: revenue. While other agencies chase vanity metrics, we build strategies that deliver measurable ROI. Our combination of data-driven insights, senior-level expertise, and a no-lock-in-contract policy means we are 100% accountable for your success. With over $574 million in verified client revenue, our track record is a testament to our performance-focused approach. We don't just get you to the top of Google; we turn those rankings into real, sustainable growth for your business.",
    },
    {
      question: "How much does SEO cost in Hobart?",
      answer: "This is one of the most common questions we get! The cost of a professional SEO campaign in Hobart depends on several factors, including your industry, the competitiveness of your keywords, and your business goals. While some agencies offer cheap, cookie-cutter packages, these often deliver poor results. At Odin Digital, we create custom strategies tailored to your specific needs. We are transparent about our pricing and will provide you with a detailed proposal that outlines the exact costs and expected ROI. Our goal is to provide a service that generates a significant return on your investment.",
    },
    {
      question: "How long does SEO take to show results in Hobart?",
      answer: "SEO is a long-term strategy, not a quick fix. While you might see some initial improvements within the first few months, it typically takes 6-12 months to see significant, lasting results. The exact timeline depends on factors like the age of your website, your industry's competitiveness, and the scope of your campaign. Be wary of any SEO agency in Hobart that promises instant results; they are likely using black-hat tactics that can get your site penalized. We focus on building a sustainable, long-term strategy that delivers compounding returns over time.",
    },
    {
      question: "Do I need local SEO for my Hobart business?",
      answer: "Absolutely. If you have a physical location or serve a specific geographic area in Hobart, local SEO is critical. A huge percentage of mobile searches are for local businesses, and if you're not visible, you're losing customers to your competitors. A targeted local SEO Hobart campaign ensures that when customers in your area are searching for your products or services, you're the first business they find. It's one of the most effective ways to drive qualified, local traffic to your website and your front door.",
    },
    {
      question: "What's included in your SEO services Hobart?",
      answer: "Our comprehensive SEO services are designed to cover every aspect of your online presence. This includes a deep technical SEO audit, in-depth keyword research and strategy, on-page optimization, high-quality content creation, and authoritative link building. We also provide detailed, transparent reporting through a 24/7 live dashboard so you can track your progress in real-time. Every campaign is managed by a senior SEO consultant who will work closely with you to ensure your strategy is aligned with your business objectives. We don't offer one-size-fits-all packages; we build custom solutions for maximum impact.",
    },
    {
      question: "Why should I choose a Hobart SEO agency over a mainland agency?",
      answer: "While a large agency in Sydney or Melbourne might seem appealing, a local Hobart SEO agency understands the unique market dynamics of Tasmania. We have a better grasp of the local economy, the competitive landscape, and the search behavior of your potential customers. This local knowledge allows us to create more targeted and effective campaigns. We can identify local keyword opportunities and build relationships with local publications for link-building, giving you a competitive edge that a mainland agency simply can't replicate. We combine this local expertise with world-class strategy.",
    },
    {
      question: "Do you require lock-in contracts for SEO Hobart?",
      answer: "No, we don't. We are so confident in our ability to deliver measurable results that we don't need to lock our clients into long-term contracts. We work on a month-to-month basis, which keeps us accountable and ensures we are constantly striving to earn your business. This is a core part of our commitment to transparency and our client-first approach. We believe that a strong partnership is built on trust and performance, not restrictive contracts. Our 95% client retention rate is proof that this model works.",
    },
    {
      question: "How do you measure SEO success for Hobart businesses?",
      answer: "We measure success based on the metrics that actually impact your bottom line: leads, sales, and revenue. While we track rankings and traffic, these are secondary to your return on investment. Our 24/7 reporting dashboard provides a transparent view of your key performance indicators (KPIs), including conversion rates, cost per acquisition (CPA), and overall ROI. We hold regular strategy meetings to review your progress and ensure our efforts are aligned with your financial goals. For us, success isn't about getting you to page one; it's about making page one profitable for you.",
    },
    {
      question: "How does AI SEO work for your Hobart clients?",
      answer: "That's a great question. We leverage cutting-edge AI SEO tools to enhance our strategies and deliver faster, more effective results. AI helps us analyze vast amounts of data to uncover keyword opportunities, monitor competitor strategies in real-time, and identify technical issues that could be hurting your rankings. However, we don't rely on AI alone. We believe the perfect SEO strategy combines the analytical power of artificial intelligence with the creative and strategic insights of our experienced human experts. This hybrid approach allows us to create sophisticated, data-driven campaigns that are far more effective than those of a typical SEO expert in Hobart.",
    },
    {
      question: "What's your process for SEO in Hobart?",
      answer: "Our process is built on transparency and collaboration. It starts with a deep-dive discovery session to understand your business, goals, and customers. From there, we conduct a comprehensive audit of your website and online presence. Next, we develop a custom, data-driven strategy and a clear roadmap for the first 90 days. Once the strategy is approved, our team of senior specialists gets to work on implementation, covering technical SEO, content, and link building. Throughout the entire process, you'll have direct communication with your dedicated strategist and full visibility through your 24/7 reporting dashboard.",
    },
    {
      question: "How do you choose keywords for a Hobart SEO campaign?",
      answer: "Our keyword selection process is purely focused on commercial intent. We use a combination of advanced tools and manual research to identify the keywords that your ideal customers are using when they are ready to make a purchase. We analyze factors like search volume, competition, and, most importantly, the intent behind the search. We prioritize money keywords—phrases that indicate a strong desire to buy—over high-volume keywords that only generate informational traffic. This ensures that the traffic we drive to your site is highly qualified and more likely to convert into actual sales and revenue.",
    },
    {
      question: "Can you guarantee first-page rankings in Hobart?",
      answer: "No reputable SEO agency can guarantee specific rankings. Google's algorithm is constantly changing, and there are too many variables at play. However, we can guarantee that we will apply our proven, data-driven methodology to give you the best possible chance of achieving top rankings for your target keywords. We have a long track record of success and a 95% client retention rate, which demonstrates our ability to consistently deliver results. We are transparent about what we can and cannot control, and we focus on the metrics that truly matter: traffic, leads, and revenue.",
    },
    {
      question: "What makes your SEO packages Hobart different?",
      answer: "Unlike other agencies that offer rigid, one-size-fits-all packages, we create completely custom solutions. We don't believe in selling you services you don't need. Instead, we start with your business goals and build a tailored strategy designed to achieve them. This means you get a more efficient, effective, and cost-effective campaign. Our packages are also flexible; we can scale our services up or down as your needs change. And because we don't have lock-in contracts, you have the freedom to adjust your investment at any time. It's a smarter, more agile approach to SEO.",
    },
    {
      question: "Do you work with small businesses in Hobart?",
      answer: "Yes, we love working with small businesses! We understand the unique challenges that small businesses face and have a proven track record of helping them compete and win against larger competitors. Our flexible, performance-focused approach is ideal for small businesses that need to make every marketing dollar count. We offer affordable SEO Hobart solutions that are designed to deliver a strong return on investment, and our no-lock-in-contract policy provides the flexibility and peace of mind that small business owners need. We're passionate about helping local businesses thrive.",
    },
    {
      question: "Why is professional SEO important for my Hobart business?",
      answer: "In today's digital world, your customers are looking for you online. If they can't find you, you're losing business to your competitors. Professional SEO is no longer a luxury; it's an essential investment for any business that wants to grow. A well-executed SEO campaign can increase your visibility, drive qualified traffic to your website, and generate a steady stream of leads and sales. It's the most cost-effective way to achieve sustainable, long-term growth. Trying to do SEO yourself or hiring a cheap, inexperienced provider often does more harm than good. A professional SEO Hobart company has the expertise to do it right.",
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
        "@id": "https://odindigital.com.au/seo-hobart/#localbusiness",
        "name": "Odin Digital - SEO Hobart",
        "image": "https://odindigital.com.au/hobart-seo-services.jpg",
        "url": "https://odindigital.com.au/seo-hobart/",
        "telephone": "+61-XXX-XXX-XXX",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hobart",
          "addressRegion": "TAS",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -42.8821,
          "longitude": 147.3272
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
        "@id": "https://odindigital.com.au/seo-hobart/#local-seo",
        "serviceType": "Local SEO Hobart",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Hobart"
        },
        "description": "Dominate the local search results and drive foot traffic to your door. We optimize your Google Business Profile, build local citations, and create location-specific content that puts you in front of customers who are ready to buy.",
        "offers": {
          "@type": "Offer",
          "url": "https://odindigital.com.au/contact/"
        }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/seo-hobart/#ecommerce-seo",
        "serviceType": "Ecommerce SEO Hobart",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Hobart"
        },
        "description": "Turn your online store into a revenue-generating machine. We optimize your product pages, build high-quality backlinks, and implement technical SEO strategies to increase your visibility and drive more sales through your website.",
        "offers": {
          "@type": "Offer",
          "url": "https://odindigital.com.au/contact/"
        }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/seo-hobart/#enterprise-seo",
        "serviceType": "Enterprise SEO Hobart",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Hobart"
        },
        "description": "For large-scale businesses that need a comprehensive, data-driven approach. We conduct in-depth technical audits, develop a robust content strategy, and build your site's authority to dominate the most competitive keywords in your industry.",
        "offers": {
          "@type": "Offer",
          "url": "https://odindigital.com.au/contact/"
        }
      },
      {
        "@type": "Review",
        "@id": "https://odindigital.com.au/seo-hobart/#review1",
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
        "reviewBody": "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
        "publisher": {
          "@type": "Organization",
          "name": "YCL Jewels"
        }
      },
      {
        "@type": "Review",
        "@id": "https://odindigital.com.au/seo-hobart/#review2",
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
        "reviewBody": "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
        "publisher": {
          "@type": "Organization",
          "name": "Krush Organics"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://odindigital.com.au/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://odindigital.com.au/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "SEO",
            "item": "https://odindigital.com.au/services/seo"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Hobart",
            "item": "https://odindigital.com.au/seo-hobart"
          }
        ]
      }
    ]
  };

  const MetricCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
    const { count, countRef } = useCountUp(value);
    const finalText = suffix === "M+" ? `$${value}M+` : `${value}${suffix}`;
    
    return (
      <div ref={countRef} className="text-center">
        <div className="relative text-4xl md:text-5xl font-bold text-primary mb-2 whitespace-nowrap [font-variant-numeric:tabular-nums]">
          <span className="invisible">{finalText}</span>
          <span className="absolute inset-0">{count !== null ? (suffix === "M+" ? `$${count}M+` : `${count}${suffix}`) : '\u00A0'}</span>
        </div>
        <div className="text-muted-foreground">{label}</div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>SEO Hobart | SEO Company Hobart | Odin Digital</title>
        <meta name="description" content="Hobart's top SEO company. $574M+ client revenue. Grow your business with performance-focused SEO. No lock-in contracts. Free strategy call." />
        <meta name="keywords" content="SEO Hobart, SEO company Hobart, SEO agency Hobart, SEO services Hobart, local SEO Hobart, ecommerce SEO Hobart, enterprise SEO Hobart, SEO expert Hobart, professional SEO Hobart, affordable SEO Hobart, AI SEO Hobart" />
        <link rel="canonical" href="https://odindigital.com.au/seo-hobart" />
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJsonLd)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Breadcrumb Navigation */}
        <section className="container mx-auto px-4 pt-24 pb-6">
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
                <BreadcrumbPage>Hobart</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>

        {/* Hero Section */}
        <section className="relative isolate overflow-hidden pt-12 pb-16 px-6 bg-gradient-to-br from-white via-muted/30 to-muted/20">
          {/* Animated Background Blobs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-muted/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-muted/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />
          
          {/* Floating Particles */}
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-muted/20 rounded-full animate-float"></div>
          <div className="absolute top-64 right-1/3 w-3 h-3 bg-muted/25 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-48 left-1/2 w-2 h-2 bg-muted/15 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-black text-charcoal mb-6 leading-tight">
                SEO Hobart: Stop Burning Money on SEO That Doesn't Convert
              </h1>
              <h2 className="text-2xl md:text-3xl text-charcoal/80 mb-8 font-bold">
                Tired of so-called SEO experts in Hobart who promise the world but deliver nothing but excuses?
              </h2>
              <p className="text-lg md:text-xl text-charcoal/70 mb-6 leading-relaxed">
                You're not alone. Most businesses are stuck paying for SEO services that generate traffic but zero revenue. They rank for keywords that don't matter, produce "reports" full of jargon, and lock you into long-term contracts that make it impossible to escape.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
                At Odin Digital, we do things differently. We're a performance-focused SEO company in Hobart that measures success by one thing only: <strong>your bottom line</strong>. We don't care about vanity metrics. We care about leads, sales, and revenue. And we back it up with a no-lock-in-contract guarantee.
              </p>
              <Button variant="cta" size="xl" asChild className="mb-4 w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 whitespace-normal break-words">
                <Link to="/contact">
                  <span className="hidden sm:inline">Get Your FREE Hobart SEO Strategy</span>
                  <span className="sm:hidden">Get FREE Strategy</span>
                  <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground/70">
                No credit card required • See what's holding you back in 48 hours
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Your Hobart SEO Isn't Working. Here's Why.
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mb-4">
                        <Icon className="w-12 h-12 text-primary" />
                      </div>
                      <CardTitle>{problem.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {problem.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="pt-6">
                    <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our SEO Services in Hobart
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                    <Button asChild variant="hero" size="sm" className="w-full group text-xs sm:text-sm md:text-base">
                      <Link to="/contact" className="px-2 sm:px-4">
                        <span className="hidden md:inline">Claim Your FREE Audit →</span>
                        <span className="hidden sm:inline md:hidden">Claim FREE Audit</span>
                        <span className="sm:hidden">Get FREE Audit Now</span>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* AI SEO Section */}
            <div className="max-w-4xl mx-auto mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-center">AI-Powered SEO for Hobart Businesses</h3>
              <p className="text-lg text-center">
                We leverage cutting-edge artificial intelligence to analyze your market, identify untapped opportunities, and optimize your campaigns faster than traditional methods. Our AI SEO tools give you a competitive advantage by uncovering insights that your competitors are missing—helping you dominate the search results in record time.
              </p>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Makes Odin Digital Different?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mb-4">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Proven 4-Step SEO Process
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-lg text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Odin Digital as Your Hobart SEO Company?
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {whyChooseUs.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Grow Your Business with an SEO Agency That Actually Delivers?
              </h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Stop wasting money on agencies that don't deliver. Book your free, no-obligation SEO strategy call today and discover exactly how we can transform your online presence into a revenue-generating machine. No sales pitch. No BS. Just a clear, actionable roadmap to dominate your market.
              </p>
              <Button asChild size="xl" variant="secondary" className="group shadow-lg hover:shadow-xl text-base md:text-lg">
                <Link to="/contact">
                  <span className="hidden sm:inline">Get Your FREE Hobart SEO Strategy</span>
                  <span className="sm:hidden">Get FREE Strategy</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Other Cities Links */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg">
                Looking for SEO services in other Australian cities? Check out our{" "}
                <Link to="/seo-sydney" className="text-primary hover:underline font-semibold">SEO Sydney</Link>,{" "}
                <Link to="/seo-brisbane" className="text-primary hover:underline font-semibold">SEO Brisbane</Link>,{" "}
                <Link to="/seo-melbourne" className="text-primary hover:underline font-semibold">SEO Melbourne</Link>,{" "}
                <Link to="/seo-perth" className="text-primary hover:underline font-semibold">SEO Perth</Link>,{" "}
                <Link to="/seo-adelaide" className="text-primary hover:underline font-semibold">SEO Adelaide</Link>, and{" "}
                <Link to="/seo-canberra" className="text-primary hover:underline font-semibold">SEO Canberra</Link> pages.
              </p>
            </div>
          </div>
        </section>

        {/* Location-Specific Content */}
        <LocationContent city="Hobart" serviceType="SEO" />

        {/* FAQ Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
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

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-3 bg-background/95 backdrop-blur-sm border-t md:hidden z-50">
          <Button asChild size="lg" variant="cta" className="w-full group text-sm">
            <Link to="/contact">
              <span className="hidden xs:inline">Get Your FREE SEO Strategy</span>
              <span className="xs:hidden">FREE Strategy</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HobartSEO;
