import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Award,
  DollarSign,
  Shield,
  CheckCircle2,
  BarChart3,
  Zap,
  Eye,
  Settings,
  FileSearch,
  Rocket,
  LineChart,
  Clock,
  AlertCircle,
  UserX,
  TrendingDown,
  ChevronRight,
  MessageSquare
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PPCAgency = () => {
  const navigate = useNavigate();

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au",
        "logo": "https://odindigital.com.au/logo.png",
        "description": "Performance-focused digital marketing agency specializing in PPC, Meta Ads, Web Design, and SEO with no lock-in contracts.",
        "founder": {
          "@type": "Person",
          "name": "Lucas Durante"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "url": "https://odindigital.com.au/contact"
        },
        "sameAs": [
          "https://www.linkedin.com/company/odin-digital",
          "https://www.facebook.com/odindigital",
          "https://twitter.com/odindigital"
        ]
      },
      {
        "@type": "Service",
        "serviceType": "PPC Agency",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "50"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "PPC Management Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Ads Management"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Meta Ads Management"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Advanced Tracking Setup"
              }
            }
          ]
        }
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
            "name": "PPC Agency",
            "item": "https://odindigital.com.au/ppc-agency"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why do so many PPC Agency firms focus on vanity metrics instead of ROI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Many PPC Agency firms focus on vanity metrics (clicks, impressions, Quality Score) because they are easy to report and make the agency look busy, even if they aren't generating profit. Odin Digital focuses on the only metrics that matter: Return on Ad Spend (ROAS) and Cost Per Acquisition (CPA). Our goal is your profit, not our report card."
            }
          },
          {
            "@type": "Question",
            "name": "How does Odin Digital ensure a 540% ROI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our 540% average ROI is achieved through a combination of senior expertise, proprietary optimization processes, and radical transparency. We eliminate wasted spend, implement advanced conversion tracking (server-side), and continuously test to ensure we are always optimizing for the highest possible profit margin."
            }
          },
          {
            "@type": "Question",
            "name": "Do you only manage Google Ads, or other platforms as well?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are a full-service PPC Agency. While Google Ads is a core focus, we also manage campaigns across Meta Ads (Facebook/Instagram), LinkedIn Advertising, and other relevant platforms. Our strategy is platform-agnostic; we go where your customers are."
            }
          },
          {
            "@type": "Question",
            "name": "What makes you different from other PPC Agency firms?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are radically transparent (you own all your ad accounts and data), performance-focused (we optimize for profit, not clicks), and we offer no lock-in contracts. If we're not delivering results, you can leave at any time. We also assign senior strategists to every account, not junior account managers."
            }
          },
          {
            "@type": "Question",
            "name": "Do you require long-term contracts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. We believe in earning your business every single month. Our flexible, month-to-month agreements mean we're always motivated to deliver results. If you're not happy, you're free to leave. It's that simple."
            }
          },
          {
            "@type": "Question",
            "name": "How much does PPC Agency management cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our PPC management fees are based on your monthly ad spend and the complexity of your campaigns. We offer transparent, performance-based pricing with no hidden fees. Contact us for a custom quote tailored to your business needs."
            }
          },
          {
            "@type": "Question",
            "name": "What is your typical client ROI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our clients achieve an average ROI of 540% on their ad spend. However, ROI varies by industry, business model, and customer lifetime value. We focus on maximizing your profit margin, not just generating clicks."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with small businesses or only large enterprises?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work with businesses of all sizes, from ambitious startups to established enterprises. What matters most to us is your commitment to growth and your willingness to invest in performance-driven marketing."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike SEO, PPC can deliver results almost immediately. Most clients see initial data within the first week, with meaningful optimization insights emerging within 30-60 days. However, peak performance typically requires 90-120 days of continuous testing and refinement."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer white label PPC services for agencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer white label PPC management services for digital agencies who want to provide high-quality PPC services to their clients without hiring an in-house team. Contact us to discuss our white label solutions."
            }
          },
          {
            "@type": "Question",
            "name": "What platforms do you advertise on?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We manage campaigns across Google Ads, Meta Ads (Facebook/Instagram), LinkedIn Advertising, Microsoft Ads (Bing), TikTok Ads, and YouTube Ads. We go where your customers are, using a platform-agnostic approach."
            }
          },
          {
            "@type": "Question",
            "name": "How do you track conversions and ROI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We implement advanced conversion tracking using server-side tracking (Google Tag Manager Server-Side, Meta CAPI), enhanced conversions, and offline conversion imports. This ensures accurate attribution and helps us optimize for profit, not just clicks."
            }
          },
          {
            "@type": "Question",
            "name": "Will I own my ad accounts and data?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. You own all your ad accounts, conversion data, and intellectual property. We believe in radical transparency and will never hold your data hostage. If you decide to leave, you take everything with you."
            }
          },
          {
            "@type": "Question",
            "name": "What industries do you specialize in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We have deep experience across professional services (lawyers, accountants, dentists), e-commerce, SaaS, healthcare, and local service businesses. Our performance-first approach works across all industries."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide reporting and analytics?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We provide transparent, easy-to-understand monthly reports that focus on the metrics that matter: ROAS, CPA, conversion rate, and profit margin. No jargon, no fluff—just clear insights into your campaign performance."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get started with your PPC Agency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simply schedule a free consultation with our team. We'll audit your current campaigns (if applicable), discuss your business goals, and provide a transparent proposal with no obligation. If it's a fit, we can have your campaigns optimized and running within 7-14 days."
            }
          }
        ]
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Organization",
          "name": "Odin Digital - PPC Agency"
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

  const metrics = [
    { icon: DollarSign, label: "Verified Client Revenue", value: "$574M+" },
    { icon: TrendingUp, label: "Average ROI on Ad Spend", value: "540%" },
    { icon: Users, label: "Client Retention Rate", value: "95%" },
    { icon: Award, label: "Successful Campaigns Delivered", value: "283+" },
  ];

  const problems = [
    {
      title: "The Vanity Metrics Trap",
      description: "Your agency shows you impressive click-through rates and quality scores, but your phone isn't ringing and sales haven't moved. You're paying for metrics that make them look good, not metrics that make you money.",
      icon: TrendingDown
    },
    {
      title: "The Trust Deficit",
      description: "You've been burned before. The last PPC agency overpromised and underdelivered, locking you into a 12-month contract while your ad spend vanished into thin air. You're skeptical, and rightfully so.",
      icon: Shield
    },
    {
      title: "The Junior Manager Problem",
      description: "You signed up expecting a senior strategist, but your account is being managed by a junior account manager who's learning on your dime. Your business deserves better than a training ground.",
      icon: UserX
    }
  ];

  const testimonials = [
    {
      quote: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
      author: "Liam C",
      company: "Founder, Krush Organics"
    },
    {
      quote: "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
      author: "Evan Tsaboukos",
      company: "Founder, Imperial Wealth"
    },
    {
      quote: "Since working with Lucas and the team, our revenue has grown by over 292% and they have been a complete pleasure to work with. The transparency and results speak for themselves.",
      author: "Adriatic Furniture",
      company: "Gold Coast Business Owner"
    }
  ];

  const services = [
    {
      title: "Google Ads Management",
      description: "We build, manage, and optimize your Google Ads campaigns to drive qualified traffic and generate leads and sales. We handle everything from keyword research to bid management to conversion rate optimization.",
      icon: Target,
      link: "/services/google-ads"
    },
    {
      title: "Meta Ads Management",
      description: "Harness the power of Facebook and Instagram advertising with our data-driven Meta Ads management. We create high-converting campaigns that reach your ideal customers where they spend their time.",
      icon: Users,
      link: "/facebook-advertising"
    },
    {
      title: "Web Design & CRO",
      description: "Your landing page is where conversions happen (or die). We design high-converting landing pages and continuously optimize them to maximize your ROI from every click.",
      icon: BarChart3,
      link: "/services/website-design"
    },
    {
      title: "Advanced Tracking & Analytics",
      description: "We implement server-side tracking, enhanced conversions, and offline conversion imports to ensure accurate attribution and data-driven optimization decisions.",
      icon: LineChart,
      link: "/contact"
    }
  ];

  const differentiators = [
    {
      title: "ROI-Focused",
      description: "We're not interested in vanity metrics like clicks and impressions. We're obsessed with one thing: return on investment. We track every dollar you spend on PPC and show you exactly how much revenue it's generating for your business.",
      icon: DollarSign
    },
    {
      title: "Radical Transparency",
      description: "You own all your ad accounts and data. We provide clear, detailed reports that show you exactly how your campaigns are performing. No jargon, no excuses, just results.",
      icon: Eye
    },
    {
      title: "No Lock-In Contracts",
      description: "We believe in earning your business, not forcing it. Our flexible, month-to-month agreements mean we're always motivated to deliver results. If you're not happy, you're free to leave.",
      icon: CheckCircle2
    },
    {
      title: "Senior Expertise",
      description: "Every account is managed by a senior strategist with 10+ years of experience. No junior account managers learning on your dime. You get the A-team from day one.",
      icon: Award
    }
  ];

  const process = [
    {
      step: "1",
      title: "PPC Audit & Strategy",
      description: "We start with a comprehensive audit of your existing campaigns (or competitive landscape if you're starting fresh) to identify opportunities. We then develop a tailored PPC strategy designed to achieve your business goals and maximize ROI.",
      icon: FileSearch
    },
    {
      step: "2",
      title: "Campaign Build & Launch",
      description: "We build your PPC campaigns from the ground up, ensuring they're structured for success. We write compelling ad copy, select high-intent keywords, and set up advanced conversion tracking. We then launch your campaigns and monitor them closely.",
      icon: Rocket
    },
    {
      step: "3",
      title: "Ongoing Optimization",
      description: "We continuously optimize your campaigns to improve performance and drive better results. We A/B test ad copy, adjust bids, add negative keywords, and refine targeting to maximize your profit margin.",
      icon: Settings
    },
    {
      step: "4",
      title: "Reporting & Analysis",
      description: "We provide transparent, easy-to-understand reports that focus on the metrics that matter: ROAS, CPA, and profit. You'll always know exactly how your campaigns are performing and where your budget is going.",
      icon: BarChart3
    }
  ];

  const whyChooseUs = [
    {
      title: "We're PPC Specialists, Not Generalists",
      description: "We don't dabble in PPC. We live and breathe pay-per-click advertising. Our team of Google Ads specialists is always up-to-date with the latest platform changes, and we know what it takes to succeed in today's competitive landscape.",
      icon: Target
    },
    {
      title: "We're Performance-Obsessed",
      description: "We're not interested in vanity metrics. We're obsessed with ROI. We track every dollar you spend and show you exactly how much revenue it's generating. Our goal is your profit, not our report card.",
      icon: TrendingUp
    },
    {
      title: "We're Radically Transparent",
      description: "We believe in radical transparency and honest communication. You own all your ad accounts and data. We provide clear, detailed reports that show you exactly how your campaigns are performing. No secrets, no surprises.",
      icon: Eye
    },
    {
      title: "We're Your Growth Partner",
      description: "We're not just a service provider; we're your partner in growth. We're invested in your success, and we'll work tirelessly to help you achieve your business goals. We're always available to answer questions and provide strategic advice.",
      icon: Zap
    }
  ];

  const faqs = [
    {
      question: "Why do so many PPC Agency firms focus on vanity metrics instead of ROI?",
      answer: "Many PPC Agency firms focus on vanity metrics (clicks, impressions, Quality Score) because they are easy to report and make the agency look busy, even if they aren't generating profit. Odin Digital focuses on the only metrics that matter: Return on Ad Spend (ROAS) and Cost Per Acquisition (CPA). Our goal is your profit, not our report card."
    },
    {
      question: "How does Odin Digital ensure a 540% ROI?",
      answer: "Our 540% average ROI is achieved through a combination of senior expertise, proprietary optimization processes, and radical transparency. We eliminate wasted spend, implement advanced conversion tracking (server-side), and continuously test to ensure we are always optimizing for the highest possible profit margin."
    },
    {
      question: "Do you only manage Google Ads, or other platforms as well?",
      answer: "We are a full-service PPC Agency. While Google Ads is a core focus, we also manage campaigns across Meta Ads (Facebook/Instagram), LinkedIn Advertising, and other relevant platforms. Our strategy is platform-agnostic; we go where your customers are."
    },
    {
      question: "What makes you different from other PPC Agency firms?",
      answer: "We are radically transparent (you own all your ad accounts and data), performance-focused (we optimize for profit, not clicks), and we offer no lock-in contracts. If we're not delivering results, you can leave at any time. We also assign senior strategists to every account, not junior account managers."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No. We believe in earning your business every single month. Our flexible, month-to-month agreements mean we're always motivated to deliver results. If you're not happy, you're free to leave. It's that simple."
    },
    {
      question: "How much does PPC Agency management cost?",
      answer: "Our PPC management fees are based on your monthly ad spend and the complexity of your campaigns. We offer transparent, performance-based pricing with no hidden fees. Contact us for a custom quote tailored to your business needs."
    },
    {
      question: "What is your typical client ROI?",
      answer: "Our clients achieve an average ROI of 540% on their ad spend. However, ROI varies by industry, business model, and customer lifetime value. We focus on maximizing your profit margin, not just generating clicks."
    },
    {
      question: "Do you work with small businesses or only large enterprises?",
      answer: "We work with businesses of all sizes, from ambitious startups to established enterprises. What matters most to us is your commitment to growth and your willingness to invest in performance-driven marketing."
    },
    {
      question: "How long does it take to see results?",
      answer: "Unlike SEO, PPC can deliver results almost immediately. Most clients see initial data within the first week, with meaningful optimization insights emerging within 30-60 days. However, peak performance typically requires 90-120 days of continuous testing and refinement."
    },
    {
      question: "Do you offer white label PPC services for agencies?",
      answer: "Yes, we offer white label PPC management services for digital agencies who want to provide high-quality PPC services to their clients without hiring an in-house team. Contact us to discuss our white label solutions."
    },
    {
      question: "What platforms do you advertise on?",
      answer: "We manage campaigns across Google Ads, Meta Ads (Facebook/Instagram), LinkedIn Advertising, Microsoft Ads (Bing), TikTok Ads, and YouTube Ads. We go where your customers are, using a platform-agnostic approach."
    },
    {
      question: "How do you track conversions and ROI?",
      answer: "We implement advanced conversion tracking using server-side tracking (Google Tag Manager Server-Side, Meta CAPI), enhanced conversions, and offline conversion imports. This ensures accurate attribution and helps us optimize for profit, not just clicks."
    },
    {
      question: "Will I own my ad accounts and data?",
      answer: "Absolutely. You own all your ad accounts, conversion data, and intellectual property. We believe in radical transparency and will never hold your data hostage. If you decide to leave, you take everything with you."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have deep experience across professional services (lawyers, accountants, dentists), e-commerce, SaaS, healthcare, and local service businesses. Our performance-first approach works across all industries."
    },
    {
      question: "Do you provide reporting and analytics?",
      answer: "Yes. We provide transparent, easy-to-understand monthly reports that focus on the metrics that matter: ROAS, CPA, conversion rate, and profit margin. No jargon, no fluff—just clear insights into your campaign performance."
    },
    {
      question: "How do I get started with your PPC Agency?",
      answer: "Simply schedule a free consultation with our team. We'll audit your current campaigns (if applicable), discuss your business goals, and provide a transparent proposal with no obligation. If it's a fit, we can have your campaigns optimized and running within 7-14 days."
    }
  ];

  return (
    <>
      <Helmet>
        <title>PPC Agency | Google Ads Management Australia | 540% ROI | Odin Digital</title>
        <meta name="description" content="Stop wasting budget on vanity metrics. We are the performance-first PPC Agency delivering a proven 540% ROI on Google Ads management with no lock-in contracts. Get your free audit today." />
        <link rel="canonical" href="https://odindigital.com.au/ppc-agency" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-28 md:pt-32 pb-16">
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
          </div>

          {/* Decorative Floating Circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-[10%] w-3 h-3 rounded-full bg-gradient-primary animate-float opacity-60" />
            <div className="absolute top-1/3 right-[15%] w-2 h-2 rounded-full bg-gradient-primary animate-float opacity-40" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/4 left-[20%] w-4 h-4 rounded-full bg-gradient-primary animate-float opacity-50" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 right-[25%] w-3 h-3 rounded-full bg-gradient-primary animate-float opacity-70" style={{ animationDelay: '3s' }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              {/* Breadcrumb */}
              <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-2 text-sm">
                  <li>
                    <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                      Home
                    </Link>
                  </li>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <li>
                    <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                      Services
                    </Link>
                  </li>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <li className="text-primary font-medium">
                    PPC Agency
                  </li>
                </ol>
              </nav>

              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent animate-fade-in">
                PPC Agency
              </h1>
              
              <p className="text-2xl md:text-3xl font-semibold text-foreground leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Tired of Wasting Budget on Vanity Metrics? We Are the Performance-First PPC Agency Delivering a Proven 540% ROI.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                No lock-in contracts. No junior managers. No vanity metrics. Just transparent, performance-first Google Ads management that delivers measurable results for businesses across Australia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Button 
                  size="lg" 
                  variant="cta"
                  className="shadow-primary hover:shadow-glow transition-smooth"
                  onClick={() => navigate('/contact')}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Book Your Free PPC Audit
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/5 transition-smooth"
                  onClick={() => navigate('/services')}
                >
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-10 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
                The Proof Is in the Performance
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                We're not just making promises; we're delivering verified results. Here's a snapshot of what our clients have achieved.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <Card key={index} className="p-4 sm:p-5 md:p-6 lg:p-8 text-center hover:shadow-lg transition-shadow">
                    <Icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto mb-2 md:mb-3 text-primary" />
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 md:mb-2 bg-gradient-primary bg-clip-text text-transparent leading-tight">
                      {metric.value}
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight">
                      {metric.label}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-10 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
                Sound Familiar? You're Not Alone.
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                These are the most common pain points we hear from business owners who come to us frustrated with their current PPC Agency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <Card key={index} className="p-5 sm:p-6 md:p-7 lg:p-8 hover:shadow-lg transition-shadow">
                    <Icon className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 mb-3 md:mb-4 text-primary" />
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">{problem.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{problem.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-10 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
                What Our Clients Say
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                Don't just take our word for it. Here's what business owners are saying about working with our PPC Agency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-5 sm:p-6 md:p-7 lg:p-8 hover:shadow-lg transition-shadow flex flex-col">
                  <p className="text-xs sm:text-sm md:text-base mb-4 md:mb-5 italic text-muted-foreground flex-grow leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-3 md:pt-4 mt-auto">
                    <p className="font-bold text-xs sm:text-sm md:text-base">{testimonial.author}</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
                Our PPC Agency Services
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                We offer a complete suite of performance marketing services designed to maximize your ROI and drive sustainable business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-5 sm:p-6 md:p-8 hover:shadow-lg transition-shadow flex flex-col">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 mb-3 md:mb-4 text-primary" />
                    <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">{service.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-5 md:mb-6 flex-grow">{service.description}</p>
                    <Button 
                      onClick={() => navigate(service.link)}
                      variant="outline"
                      className="w-full whitespace-normal h-auto py-2.5 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm mt-auto"
                    >
                      Learn More →
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
                The Odin Digital Difference
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                Why choose us as your PPC Agency? Because we're obsessed with ROI and we're committed to your success.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="flex justify-center mb-3 md:mb-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
                Our Proven 4-Step PPC Process
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                We follow a simple, effective process to deliver high-performing PPC campaigns for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {process.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg md:text-xl font-bold">
                        {item.step}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3">{item.title}</h3>
                      </div>
                      <Icon className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground pl-14 md:pl-16">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
                Why Choose Odin Digital as Your PPC Agency?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                You need a PPC partner who is as obsessed with your ROI as you are. Here's why we're the right choice for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow">
                    <Icon className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-primary" />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4">{item.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-primary opacity-5 -z-10" />
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 px-2">
                Ready to Work with a PPC Agency That Delivers Results?
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-muted-foreground px-4">
                Stop wasting money on vanity metrics. It's time to partner with a PPC Agency that can deliver real, measurable ROI.
              </p>
              <p className="text-sm sm:text-base mb-6 md:mb-8 text-muted-foreground px-4">
                Schedule your FREE, no-obligation PPC audit and strategy session with one of our senior strategists today. We'll analyze your current campaigns (or competitive landscape), discuss your goals, and show you exactly how we can help you build a performance-first PPC machine. What do you have to lose?
              </p>
              <Button 
                size="xl" 
                onClick={() => navigate('/contact')}
                className="shadow-glow hover:shadow-primary/60 font-bold whitespace-normal h-auto py-3 px-6 text-sm sm:text-base"
                style={{ backgroundColor: '#D91C5C', color: 'white' }}
              >
                Get Your FREE PPC Audit & Strategy Session →
              </Button>
            </div>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
                Related Performance Marketing Services
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                Looking for other digital marketing services? We offer a full suite of performance-focused solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                <Target className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-primary" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3">SEO Agency</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  Dominate organic search with our data-driven SEO strategies.
                </p>
                <Button 
                  onClick={() => navigate('/seo-agency')}
                  variant="outline"
                  className="w-full text-xs sm:text-sm"
                >
                  Learn More →
                </Button>
              </Card>

              <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                <Users className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-primary" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3">Meta Ads Agency</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  Scale your business with high-converting Facebook & Instagram ads.
                </p>
                <Button 
                  onClick={() => navigate('/facebook-advertising')}
                  variant="outline"
                  className="w-full text-xs sm:text-sm"
                >
                  Learn More →
                </Button>
              </Card>

              <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                <BarChart3 className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-primary" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3">Web Design Agency</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  Build high-converting websites that turn visitors into customers.
                </p>
                <Button 
                  onClick={() => navigate('/services/website-design')}
                  variant="outline"
                  className="w-full text-xs sm:text-sm"
                >
                  Learn More →
                </Button>
              </Card>

              <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                <Award className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-primary" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3">Industry Solutions</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  Specialized marketing for lawyers, dentists, SaaS & more.
                </p>
                <Button 
                  onClick={() => navigate('/industries/lawyers')}
                  variant="outline"
                  className="w-full text-xs sm:text-sm"
                >
                  Explore Industries →
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
                  Frequently Asked Questions About Our PPC Agency
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg border px-4 sm:px-6">
                    <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-semibold hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-background/95 backdrop-blur-sm border-t md:hidden z-40 shadow-lg">
        <Button 
          size="lg"
          onClick={() => navigate('/contact')}
          className="w-full font-bold text-sm h-12"
          style={{ backgroundColor: '#D91C5C', color: 'white' }}
        >
          Get Your FREE Audit →
        </Button>
      </div>
    </>
  );
};

export default PPCAgency;
