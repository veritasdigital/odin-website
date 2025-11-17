import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import LocationContent from "@/components/LocationContent";
import { RelatedLocations } from "@/components/RelatedLocations";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { getRelatedLocations } from "@/utils/contentClusters";
import { 
  TrendingUp, 
  Target, 
  DollarSign, 
  Users, 
  Zap, 
  Shield,
  Search,
  MapPin,
  BarChart3,
  Award,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Phone,
  AlertCircle,
  Lightbulb
} from "lucide-react";
import { useMarketingForm } from "@/contexts/MarketingFormContext";

const BallaratSEO = () => {
  const navigate = useNavigate();
  const { openForm } = useMarketingForm();

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://odindigital.com.au/#organization",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au",
        "logo": "https://odindigital.com.au/logo.png",
        "description": "Digital marketing agency specialising in SEO, Google Ads, Meta Ads, and Web Design",
        "foundingDate": "2015",
        "sameAs": [],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "telephone": "+61-1300-123-456",
          "email": "hello@odindigital.com.au"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://odindigital.com.au/seo-ballarat#localbusiness",
        "name": "Odin Digital - Ballarat SEO Services",
        "image": "https://odindigital.com.au/seo-ballarat-hero.jpg",
        "description": "Local SEO agency in Ballarat specialising in small business SEO, manufacturing SEO, education SEO, and professional services SEO",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ballarat",
          "addressRegion": "VIC",
          "addressCountry": "AU"
        },
        "telephone": "+61-1300-123-456",
        "url": "https://odindigital.com.au/seo-ballarat",
        "areaServed": {
          "@type": "City",
          "name": "Ballarat"
        },
        "priceRange": "$$",
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
        "@id": "https://odindigital.com.au/seo-ballarat#service",
        "name": "SEO Services Ballarat",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "description": "Customised SEO services for Ballarat businesses, including local SEO, technical SEO, content strategy, and link building",
        "areaServed": {
          "@type": "City",
          "name": "Ballarat"
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
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ongoing SEO Management"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://odindigital.com.au/seo-ballarat#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why isn't my SEO working?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "There are usually several reasons: poor strategy, technical issues, weak content, poor link profile, or targeting the wrong keywords. We analyse your SEO and identify the specific issues. We develop a plan to fix them."
            }
          },
          {
            "@type": "Question",
            "name": "How long does SEO take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can see initial results within 2–4 weeks, but it typically takes 8–12 weeks to see consistent results. Competitive keywords take longer. We focus on quick wins first, then build long-term authority."
            }
          },
          {
            "@type": "Question",
            "name": "How much does SEO cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO costs vary based on your goals, competition, and industry. We offer flexible pricing and packages. We focus on ROI, not just cost. We're happy to discuss your budget and develop a plan that works for you."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help small businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We specialise in helping small businesses succeed with SEO. We understand the unique challenges small businesses face. We develop strategies that deliver ROI."
            }
          },
          {
            "@type": "Question",
            "name": "Do you specialise in manufacturing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialise in manufacturing SEO. We understand the manufacturing industry. We've helped manufacturing businesses win contracts through SEO."
            }
          },
          {
            "@type": "Question",
            "name": "Do you specialise in education?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialise in education SEO. We've helped education providers attract more students through SEO."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer local SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialise in local SEO for Ballarat. We optimise for local keywords. We build local citations. We optimise your Google Business Profile."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between SEO and SEM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO is organic search (free listings). SEM is paid search (Google Ads). Both are important. We offer both services and can integrate them for maximum results."
            }
          },
          {
            "@type": "Question",
            "name": "Can you guarantee rankings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No one can guarantee rankings. Anyone who promises #1 rankings is lying. We can guarantee we'll do everything right. We can guarantee we'll continuously optimise. We can guarantee we'll focus on ROI."
            }
          },
          {
            "@type": "Question",
            "name": "What if I'm not happy with results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We're confident in our work. If you're not happy, we'll work with you to improve results. We have a 95% client retention rate because we deliver results."
            }
          },
          {
            "@type": "Question",
            "name": "Do you have Ballarat experience?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialise in Ballarat SEO. We've helped dozens of Ballarat businesses succeed with SEO."
            }
          },
          {
            "@type": "Question",
            "name": "How do I know if SEO is working?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide detailed reporting. You see rankings, traffic, conversions, and ROI. We track everything and report monthly. You always know how your SEO is performing."
            }
          },
          {
            "@type": "Question",
            "name": "What's your SEO strategy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our strategy is customised for your business. We focus on high-intent, high-conversion keywords. We build topical authority. We develop a content strategy that ranks and converts. We build quality backlinks. We continuously optimise."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide ongoing support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We provide ongoing SEO management, monitoring, optimisation, and reporting. You get a dedicated account manager who's always available."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get started?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Book a free consultation with one of our SEO strategists. We'll review your current situation, identify opportunities, and show you exactly how we can help."
            }
          }
        ]
      },
      {
        "@type": "AggregateRating",
        "itemReviewed": {
          "@type": "LocalBusiness",
          "name": "Odin Digital - Ballarat SEO Services"
        },
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "283",
        "reviewCount": "283"
      }
    ]
  };

  const metrics = [
    { label: "Average ROI", value: "540%", icon: TrendingUp },
    { label: "Client Retention", value: "95%", icon: Users },
    { label: "Client Revenue", value: "$574M+", icon: DollarSign },
    { label: "Keywords Top 10", value: "17+", icon: Target },
  ];

  const problems = [
    {
      icon: AlertCircle,
      title: "Generic SEO Strategies",
      description: "Melbourne agencies treat Ballarat like any other market. They don't understand local competition, regional search behaviour, or the unique challenges of manufacturing and education sectors."
    },
    {
      icon: DollarSign,
      title: "Wasted Budget on Wrong Keywords",
      description: "You're ranking for keywords that don't convert. Generic agencies target high-volume keywords instead of high-intent, high-conversion keywords that drive actual business results."
    },
    {
      icon: Target,
      title: "Weak Local Presence",
      description: "Your Google Business Profile is underoptimised. Local citations are inconsistent. You're invisible when Ballarat customers search for your services."
    },
    {
      icon: BarChart3,
      title: "No Clear ROI Tracking",
      description: "Previous agencies report on vanity metrics like 'traffic' and 'rankings' without showing actual leads, sales, and revenue generated from SEO investment."
    },
    {
      icon: Shield,
      title: "Technical Issues Ignored",
      description: "Slow site speed, mobile issues, broken links, and indexing problems are holding you back. Generic agencies don't prioritise technical SEO because it's not glamorous."
    },
    {
      icon: Search,
      title: "Content That Doesn't Convert",
      description: "Blog posts written by overseas writers who don't understand Australian search intent or Ballarat's market. Content that ranks but doesn't generate leads or sales."
    },
    {
      icon: Zap,
      title: "Lock-In Contracts & Hidden Fees",
      description: "12-month contracts. Setup fees. 'Optimisation' fees. You're locked in with no flexibility and no transparency on what you're actually paying for."
    }
  ];

  const solutions = [
    {
      icon: MapPin,
      title: "Ballarat-Specific Strategy",
      description: "We understand Ballarat's market dynamics, competition, and customer behaviour. Our strategies are built specifically for the Ballarat business landscape."
    },
    {
      icon: Target,
      title: "High-Intent Keyword Targeting",
      description: "We target keywords that actually convert. We focus on commercial intent, local modifiers, and bottom-of-funnel keywords that drive leads and sales."
    },
    {
      icon: Shield,
      title: "Technical Excellence",
      description: "We fix technical issues first. Site speed, mobile optimisation, indexing, structured data—we ensure your technical foundation is rock-solid."
    },
    {
      icon: BarChart3,
      title: "ROI-Focused Reporting",
      description: "Every month, you see rankings, traffic, conversions, and revenue. We track the metrics that matter to your business and show clear ROI."
    },
    {
      icon: Lightbulb,
      title: "Industry Expertise",
      description: "We specialise in manufacturing, education, and professional services SEO. We understand your industry and build strategies that work for your specific sector."
    },
    {
      icon: CheckCircle2,
      title: "No Lock-In Contracts",
      description: "Month-to-month agreements. No setup fees. No hidden costs. You stay because we deliver results, not because you're locked into a contract."
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "You get a dedicated account manager who understands your business. Direct communication. Fast response times. Real partnership."
    }
  ];

  const services = [
    {
      icon: Search,
      title: "SEO Strategy and Consulting",
      description: "Comprehensive SEO audit, competitive analysis, and custom strategy development tailored to Ballarat's market and your industry.",
      cta: "Get Your Free SEO Audit"
    },
    {
      icon: MapPin,
      title: "Local SEO Optimisation",
      description: "Google Business Profile optimisation, local citations, location-specific content, and Ballarat-focused keyword targeting.",
      cta: "Boost Local Rankings"
    },
    {
      icon: Shield,
      title: "Technical SEO",
      description: "Site speed optimisation, mobile responsiveness, structured data, indexing, and technical foundation improvements.",
      cta: "Fix Technical Issues"
    },
    {
      icon: Lightbulb,
      title: "Content Strategy and Creation",
      description: "High-converting content written by Australian writers who understand Ballarat's market and your industry's search intent.",
      cta: "Build Content Authority"
    },
    {
      icon: TrendingUp,
      title: "Link Building and Authority",
      description: "Quality backlink acquisition, local partnerships, industry publications, and authority-building strategies.",
      cta: "Increase Domain Authority"
    },
    {
      icon: BarChart3,
      title: "SEO Analytics and Reporting",
      description: "Comprehensive monthly reporting on rankings, traffic, conversions, and ROI with clear action items and insights.",
      cta: "See What We Track"
    },
    {
      icon: Zap,
      title: "Ongoing SEO Management",
      description: "Continuous optimisation, monitoring, content updates, and adaptation to algorithm changes with dedicated support.",
      cta: "Get Ongoing Support"
    }
  ];

  const whyChooseUs = [
    {
      title: "Ballarat Market Expertise",
      description: "We've helped dozens of Ballarat businesses dominate local search. We understand the competitive landscape, seasonal patterns, and customer behaviour specific to Ballarat."
    },
    {
      title: "540% Average ROI",
      description: "Our clients see an average return of 540% on their SEO investment. We focus on revenue-generating keywords and conversion optimisation, not vanity metrics."
    },
    {
      title: "95% Client Retention",
      description: "Our clients stay with us because we deliver results. We build long-term partnerships based on trust, transparency, and measurable outcomes."
    },
    {
      title: "$574M+ in Client Revenue",
      description: "We've contributed to generating over $574 million in revenue for our clients across diverse industries through strategic digital marketing."
    },
    {
      title: "Manufacturing SEO Specialists",
      description: "We understand manufacturing SEO. B2B keywords, technical content, long sales cycles—we've helped manufacturers win high-value contracts through SEO."
    },
    {
      title: "Education SEO Specialists",
      description: "We specialise in education SEO. Student acquisition, course enrolments, competitive analysis—we've helped education providers grow through strategic SEO."
    },
    {
      title: "Professional Services Focus",
      description: "Legal, accounting, consulting—we understand professional services SEO. High-value clients, reputation management, authority building."
    },
    {
      title: "Transparent Pricing",
      description: "No lock-in contracts. No setup fees. No hidden costs. Clear monthly pricing with flexible packages that scale with your business."
    },
    {
      title: "Fast Response Times",
      description: "Dedicated account manager. Direct communication. Fast turnaround on requests. We're a partner, not a vendor."
    },
    {
      title: "Proven Methodology",
      description: "Data-driven strategies. Continuous testing. Regular optimisation. We use proven methodologies that deliver consistent, measurable results."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery and Audit",
      description: "Comprehensive SEO audit, competitive analysis, keyword research, and technical review to identify opportunities and issues."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Custom SEO roadmap with prioritised actions, keyword targets, content plan, and clear timeline based on your goals and budget."
    },
    {
      number: "03",
      title: "Technical Optimisation",
      description: "Fix technical issues, improve site speed, ensure mobile responsiveness, implement structured data, and optimise indexing."
    },
    {
      number: "04",
      title: "On-Page Optimisation",
      description: "Optimise existing pages, improve content quality, target high-intent keywords, and enhance user experience and conversion paths."
    },
    {
      number: "05",
      title: "Content Creation",
      description: "Develop high-quality, conversion-focused content written by Australian writers who understand Ballarat's market and your industry."
    },
    {
      number: "06",
      title: "Link Building",
      description: "Build quality backlinks through local partnerships, industry publications, content marketing, and strategic outreach."
    },
    {
      number: "07",
      title: "Monitor and Optimise",
      description: "Continuous monitoring, monthly reporting, regular optimisation, and strategic adjustments based on performance data and algorithm changes."
    }
  ];

  const faqs = [
    {
      question: "Why isn't my SEO working?",
      answer: "There are usually several reasons: poor strategy, technical issues, weak content, poor link profile, or targeting the wrong keywords. We analyse your SEO and identify the specific issues. We develop a plan to fix them."
    },
    {
      question: "How long does SEO take?",
      answer: "You can see initial results within 2–4 weeks, but it typically takes 8–12 weeks to see consistent results. Competitive keywords take longer. We focus on quick wins first, then build long-term authority."
    },
    {
      question: "How much does SEO cost?",
      answer: "SEO costs vary based on your goals, competition, and industry. We offer flexible pricing and packages. We focus on ROI, not just cost. We're happy to discuss your budget and develop a plan that works for you."
    },
    {
      question: "Can you help small businesses?",
      answer: "Absolutely. We specialise in helping small businesses succeed with SEO. We understand the unique challenges small businesses face. We develop strategies that deliver ROI."
    },
    {
      question: "Do you specialise in manufacturing?",
      answer: "Yes. We specialise in manufacturing SEO. We understand the manufacturing industry. We've helped manufacturing businesses win contracts through SEO."
    },
    {
      question: "Do you specialise in education?",
      answer: "Yes. We specialise in education SEO. We've helped education providers attract more students through SEO."
    },
    {
      question: "Do you offer local SEO?",
      answer: "Yes. We specialise in local SEO for Ballarat. We optimise for local keywords. We build local citations. We optimise your Google Business Profile."
    },
    {
      question: "What's the difference between SEO and SEM?",
      answer: "SEO is organic search (free listings). SEM is paid search (Google Ads). Both are important. We offer both services and can integrate them for maximum results."
    },
    {
      question: "Can you guarantee rankings?",
      answer: "No one can guarantee rankings. Anyone who promises #1 rankings is lying. We can guarantee we'll do everything right. We can guarantee we'll continuously optimise. We can guarantee we'll focus on ROI."
    },
    {
      question: "What if I'm not happy with results?",
      answer: "We're confident in our work. If you're not happy, we'll work with you to improve results. We have a 95% client retention rate because we deliver results."
    },
    {
      question: "Do you have Ballarat experience?",
      answer: "Yes. We specialise in Ballarat SEO. We've helped dozens of Ballarat businesses succeed with SEO."
    },
    {
      question: "How do I know if SEO is working?",
      answer: "We provide detailed reporting. You see rankings, traffic, conversions, and ROI. We track everything and report monthly. You always know how your SEO is performing."
    },
    {
      question: "What's your SEO strategy?",
      answer: "Our strategy is customised for your business. We focus on high-intent, high-conversion keywords. We build topical authority. We develop a content strategy that ranks and converts. We build quality backlinks. We continuously optimise."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes. We provide ongoing SEO management, monitoring, optimisation, and reporting. You get a dedicated account manager who's always available."
    },
    {
      question: "How do I get started?",
      answer: "Book a free consultation with one of our SEO strategists. We'll review your current situation, identify opportunities, and show you exactly how we can help."
    }
  ];

  return (
    <>
      <Helmet>
        <title>SEO Services Ballarat | Local SEO Agency | Odin Digital</title>
        <meta name="description" content="Ballarat SEO services with local expertise and proven results. 540% average ROI. No lock-in contracts. Book a free consultation." />
        <meta name="keywords" content="SEO services Ballarat, SEO company Ballarat, SEO agency Ballarat, local SEO Ballarat" />
        <link rel="canonical" href="https://odindigital.com.au/seo-ballarat" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-background/95 backdrop-blur-sm border-t border-border">
        <Button 
          variant="default"
          className="w-full h-12"
          onClick={openForm}
        >
          Book Your Free Consultation
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden min-h-screen flex items-center bg-gradient-hero">
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-muted/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />
        
        {/* Additional Gradient Rings */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-64 right-1/3 w-3 h-3 bg-secondary/25 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-48 left-1/2 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: "3.5s" }}></div>
        <div className="absolute bottom-1/4 left-2/3 w-3 h-3 bg-primary/25 rounded-full animate-float" style={{ animationDelay: "4.5s" }}></div>
        
        {/* Enhanced Decorative Floating Elements - Homepage Style */}
        <div className="absolute top-1/4 left-20 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg"></div>
        <div className="absolute bottom-1/3 right-32 w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/40 rounded-lg animate-float shadow-lg" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-7 h-7 bg-white/20 backdrop-blur-sm border border-white/40 rounded-lg animate-float shadow-lg" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-16 right-1/3 w-9 h-9 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-11 h-11 bg-white/20 backdrop-blur-sm border border-white/40 rounded-lg animate-float shadow-lg" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-1/2 left-16 w-5 h-5 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '6s' }}></div>
        
        {/* Geometric Accent Shapes */}
        <div className="absolute top-40 right-1/4 w-16 h-16 border-2 border-primary/20 rounded-lg rotate-12 animate-float" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-secondary/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-16 w-12 h-12 border-2 border-primary/15 rounded-lg -rotate-12 animate-float" style={{ animationDelay: '5.5s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16 items-center">
            {/* Left - Text Content (60%) */}
            <div className="space-y-8 lg:space-y-10 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight text-foreground">
                SEO services Ballarat
              </h1>
              
              <div className="space-y-6 lg:space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <p className="text-2xl md:text-3xl font-bold leading-tight text-foreground">
                  Ballarat SEO that actually works. Local expertise. Real results. No lock-in contracts.
                </p>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    Most Ballarat businesses waste thousands on SEO agencies that don't understand the local market. They target the wrong keywords. They ignore technical issues. They report on vanity metrics.
                  </p>
                  
                  <p className="text-base leading-relaxed">
                    We're different. We specialise in Ballarat SEO. We understand manufacturing, education, and professional services. We focus on high-intent keywords that drive actual business results. We deliver an average 540% ROI.
                  </p>
                  
                  <p className="text-base leading-relaxed">
                    No lock-in contracts. No setup fees. No hidden costs. Just transparent, results-focused SEO built specifically for Ballarat businesses.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Button 
                  size="lg" 
                  variant="default"
                  className="text-base px-8 py-6 shadow-lg hover:scale-105 transition-all duration-300"
                  onClick={openForm}
                >
                  Book Your Free SEO Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-base px-8 py-6"
                  asChild
                >
                  <a href="tel:1300123456">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 1300 123 456
                  </a>
                </Button>
              </div>
            </div>

            {/* Right - Visual Elements (40%) */}
            <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="relative aspect-square">
                {/* Large Circle */}
                <div className="absolute inset-0 bg-primary/10 border-2 border-primary/30 rounded-full animate-pulse"></div>
                
                {/* Medium Circle */}
                <div className="absolute inset-12 bg-secondary/10 border-2 border-secondary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Small Circle */}
                <div className="absolute inset-24 bg-primary/15 border-2 border-primary/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl font-black text-primary">540%</div>
                    <div className="text-lg font-semibold text-foreground">Average ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-2 border-primary">
                <metric.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-black mb-2 text-foreground">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem-Agitation Section */}
      <section className="relative py-20 md:py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-foreground">
              Why Your SEO Isn't Working in Ballarat
            </h2>
            <p className="text-lg text-muted-foreground">
              Most Ballarat businesses struggle with SEO because agencies don't understand the local market dynamics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {problems.map((problem, index) => (
              <div key={index} className="relative pl-6 border-l-4 border-secondary">
                <problem.icon className="w-10 h-10 mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-3 text-foreground">{problem.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-foreground">
              SEO Built for Ballarat
            </h2>
            <p className="text-lg text-muted-foreground">
              Our Ballarat-specific approach delivers real results for local businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <div key={index} className="relative pl-6 border-l-4 border-primary">
                <solution.icon className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3 text-foreground">{solution.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-foreground">
              Our SEO Services for Ballarat
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive SEO solutions tailored to Ballarat's market dynamics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow border-2 border-primary">
                <service.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed mb-6 text-muted-foreground">{service.description}</p>
                <Button 
                  variant="default"
                  className="w-full"
                  onClick={openForm}
                >
                  {service.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-foreground">
              Why Ballarat Businesses Choose Odin Digital for SEO
            </h2>
            <p className="text-lg text-muted-foreground">
              Proven results, local expertise, and transparent partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-lg font-bold mb-3 text-foreground">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="default"
              className="px-12 py-6 text-lg shadow-lg hover:scale-105 transition-all duration-300"
              onClick={openForm}
            >
              Book Your Free SEO Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-foreground">
              Our SEO Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A transparent, results-focused approach to dominating Ballarat search results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start bg-card p-8 rounded-lg shadow-sm border-2 border-primary">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-black text-primary">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="default"
              className="px-12 py-6 text-lg shadow-lg hover:scale-105 transition-all duration-300"
              onClick={openForm}
            >
              Start Your SEO Journey Today
            </Button>
          </div>
        </div>
      </section>

      {/* Location-Specific Content */}
      <LocationContent city="Ballarat" serviceType="SEO" />

      {/* FAQ Section */}
      <section className="relative py-20 md:py-24 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about SEO for Ballarat businesses.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6 border-2 border-primary">
                <AccordionTrigger className="text-left font-semibold hover:no-underline text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-sm text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="default"
              className="px-12 py-6 text-lg shadow-lg hover:scale-105 transition-all duration-300"
              onClick={openForm}
            >
              Book Your Free SEO Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-primary">
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Ready to Transform Your SEO?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Book your FREE, no-obligation consultation with one of our senior Ballarat SEO strategists. We'll analyse your current SEO, identify opportunities, and show you exactly how we can help you dominate local search.
          </p>
          
          <div className="flex justify-center">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white max-w-md">
              <h3 className="text-2xl font-bold mb-4">Book Your Free Consultation</h3>
              <p className="text-white/80 mb-6 text-sm">
                No pressure. No obligation. Just honest insights about how to grow your Ballarat business with SEO.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="w-full h-12 text-lg font-semibold"
                onClick={openForm}
              >
                <Calendar className="w-5 h-5 mr-2" />
                BOOK NOW
              </Button>
            </Card>
          </div>
        </div>
      </section>


      <RelatedLocations 
        locations={getRelatedLocations("Ballarat", "SEO")}
        title="SEO Services in Other Australian Cities"
      />

      <Footer />
    </>
  );
};

export default BallaratSEO;
