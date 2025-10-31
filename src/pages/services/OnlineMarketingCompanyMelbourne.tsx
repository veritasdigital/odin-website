import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  AlertCircle,
  FileText,
  MapPin,
  Search,
  TrendingUp,
  Target,
  Users,
  Monitor,
  Award,
  Shield,
  BarChart3,
  Zap,
  CheckCircle2,
  ArrowRight,
  Settings,
  Clock,
  DollarSign,
  Share2,
  Eye,
  MousePointer,
  Layers
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OnlineMarketingCompanyMelbourne = () => {
  const { openForm } = useMarketingForm();

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Performance-focused digital marketing agency specializing in high-ROI integrated digital marketing in Melbourne.",
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
        "name": "Odin Digital - Digital Marketing Company Melbourne",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Melbourne",
          "addressRegion": "VIC",
          "addressCountry": "AU"
        },
        "areaServed": {
          "@type": "State",
          "name": "VIC"
        },
        "url": "https://growth-conduit-central.lovable.app/online-marketing-company-melbourne",
        "telephone": "+61-XXX-XXX-XXX",
        "priceRange": "$$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "150"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Integrated Digital Marketing Strategy",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Odin Digital - Digital Marketing Company Melbourne"
        },
        "areaServed": "Melbourne",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Melbourne Digital Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Performance SEO"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "High-ROI Paid Media"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Surgical Social Media Ads"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Conversion-Focused Web Design"
              }
            }
          ]
        }
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "LocalBusiness",
          "name": "Odin Digital - Digital Marketing Company Melbourne"
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is your digital marketing strategy different from other Melbourne agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus on a holistic, unified strategy. Most agencies specialize in one area (SEO or PPC). We integrate all four pillars—SEO, PPC, Social, and Web Design—into a single, cohesive system, ensuring maximum efficiency and a higher ROI."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure my budget isn't wasted in Melbourne's competitive market?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus on Cost Per Qualified Lead (CPQL), not just clicks. Our strategies are built on radical transparency and surgical targeting, ensuring every dollar spent contributes directly to a measurable revenue goal."
        }
      },
      {
        "@type": "Question",
        "name": "Do you use lock-in contracts for your digital marketing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We believe our value should be proven every month. Our No Lock-in Contracts policy is a testament to our confidence in delivering exceptional, predictable results, which is why we maintain a 95% client retention rate."
        }
      },
      {
        "@type": "Question",
        "name": "What results can I expect from your integrated digital marketing strategy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our clients see an average 540% ROI across their integrated campaigns. By aligning SEO, PPC, Social, and Web Design into one cohesive strategy, we eliminate inefficiencies and maximize every marketing dollar."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from your digital marketing services in Melbourne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO typically shows significant results in 3-6 months. PPC and Social Ads can deliver immediate results within days to weeks. Our integrated approach accelerates overall performance by creating synergy between all channels."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with businesses of all sizes in Melbourne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We work with small businesses, mid-sized companies, and large enterprises across Melbourne. Our strategies scale to your business size and goals, ensuring ROI-focused campaigns regardless of budget."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure the success of your digital marketing campaigns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We track Cost Per Qualified Lead (CPQL), conversion rates, revenue attribution, and overall ROI. You'll have access to real-time dashboards showing exactly how your marketing investment translates to business growth."
        }
      },
      {
        "@type": "Question",
        "name": "What makes your SEO strategy different for Melbourne businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our SEO isn't siloed—it's integrated with your PPC and content strategy. We target high-intent keywords, optimize for conversions (not just rankings), and ensure your SEO efforts support your overall revenue goals."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle Melbourne's high cost-per-click (CPC) for PPC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use surgical targeting, negative keyword strategies, and landing page optimization to maximize Quality Score and reduce wasted spend. Our integrated approach ensures PPC works in harmony with SEO and social for better overall efficiency."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate with our existing marketing efforts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We audit your current marketing stack and integrate seamlessly, filling gaps and optimizing existing efforts. Our goal is to create a unified strategy that leverages what's working and fixes what isn't."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide transparent reporting for all your digital marketing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Radical transparency is one of our core values. You'll receive detailed monthly reports and have 24/7 access to real-time dashboards showing performance across all channels—SEO, PPC, Social, and Web."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you specialize in for Melbourne digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work across all industries but have particular expertise in professional services, e-commerce, healthcare, legal, and B2B SaaS. Our integrated approach adapts to any industry's unique challenges and opportunities."
        }
      },
      {
        "@type": "Question",
        "name": "How often will I communicate with your team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll have a dedicated account manager for regular communication. We provide monthly strategy reviews, weekly performance updates, and are available for ad-hoc calls as needed. Transparency and communication are paramount."
        }
      },
      {
        "@type": "Question",
        "name": "What is your pricing structure for digital marketing in Melbourne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing is customized based on your goals, industry, and competition. We offer transparent, performance-based pricing with no hidden fees. Contact us for a free audit and personalized quote."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer website design as part of your digital marketing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Conversion-focused web design is the fourth pillar of our integrated strategy. We build websites optimized for conversions, speed, and SEO—ensuring your site works in perfect harmony with your marketing campaigns."
        }
      },
      {
        "@type": "Question",
        "name": "What sets your social media advertising apart from other Melbourne agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We don't run generic awareness campaigns. Our social ads are surgically targeted, data-driven, and integrated with your SEO and PPC strategy to create a cohesive customer journey that maximizes conversions and ROI."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Digital Marketing Company Melbourne | Holistic Strategy & 540% ROI | Odin Digital</title>
        <meta name="description" content="The leading Digital Marketing Company Melbourne. We provide a unified, high-ROI strategy across SEO, PPC, Meta Ads, and Web Design. No fragmentation, just performance." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <Header />
        <SideTab />
        <MarketingFormModal />

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background border-t border-border p-3 shadow-lg">
          <Button 
            onClick={openForm}
            className="w-full bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold py-4"
            size="lg"
          >
            Get Your FREE Melbourne Audit →
          </Button>
        </div>

        {/* Breadcrumbs */}
        <div className="bg-muted/30 py-3 sm:py-4">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
              <span>/</span>
              <span className="text-foreground">Digital Marketing Melbourne</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-24 overflow-hidden bg-gradient-subtle">
          {/* Floating circles */}
          <div className="absolute top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-primary/10 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full bg-secondary/10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-80 lg:h-80 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          <div className="container mx-auto max-w-6xl relative z-10 px-3 sm:px-4 md:px-6">
            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground leading-tight">
                Digital Marketing Company Melbourne
              </h1>
              
              <p className="hero-sub-headline text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground/90 leading-tight max-w-5xl mx-auto px-2 sm:px-4">
                Tired of Fragmented Strategies and Generalist Agencies? We Deliver a Holistic, High-ROI Digital Marketing Strategy with a Proven 540% Return.
              </p>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4 max-w-4xl mx-auto px-2 sm:px-4">
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Most Melbourne businesses work with multiple agencies—one for SEO, another for PPC, a third for social media. The result? Fragmented strategies, wasted budgets, and mediocre results. At Odin Digital, we integrate all four pillars of digital marketing—SEO, PPC, Social Media Ads, and Web Design—into a single, unified strategy designed to maximize ROI and eliminate inefficiencies.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  We don't just manage campaigns. We build revenue engines. Our holistic approach has delivered an average 540% ROI for Melbourne businesses, and we back it up with radical transparency and no lock-in contracts.
                </p>
              </div>

              <div className="pt-3 sm:pt-4 md:pt-6">
                <Button 
                  onClick={openForm}
                  size="lg"
                  className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 shadow-glow hover:shadow-primary/60 transition-all duration-300 hover:scale-105"
                >
                  Get Your FREE Melbourne Digital Marketing Audit <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
              <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1">540%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Average Client ROI</div>
              </div>
              <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1">$574M+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Client Revenue Generated</div>
              </div>
              <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1">95%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Client Retention Rate</div>
              </div>
              <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1">283+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Successful Campaigns</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                The Problem with Most Melbourne Digital Marketing Agencies
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
                Fragmented strategies waste budgets and deliver mediocre results. Here's what's broken—and how we fix it.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <Layers className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">The Fragmentation Trap</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  You hire one agency for SEO, another for PPC, a third for social. None of them talk to each other. Your strategy is siloed, inefficient, and expensive. You're paying for duplication, not performance.
                </p>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Black Box Reporting</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Most agencies show you vanity metrics: clicks, impressions, rankings. But they can't tell you your Cost Per Qualified Lead (CPQL) or how marketing contributes to revenue. You're flying blind.
                </p>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Rising Costs, Falling Returns</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Melbourne's CPCs are skyrocketing. Without an integrated strategy that maximizes Quality Score and conversion rates, you're burning money on campaigns that don't convert.
                </p>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-10">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4"
              >
                <span className="hidden sm:inline">Stop Wasting Your Budget: Get Your FREE Integrated Strategy Audit →</span>
                <span className="sm:hidden">Get FREE Audit →</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                What Our Melbourne Clients Say
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Real results from real businesses using our integrated digital marketing strategy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 items-stretch">
              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border flex flex-col h-full">
                <div className="flex items-center mb-3">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#D91C5C] mr-2" />
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">500% ROI</div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 flex-grow">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
                </p>
                <div className="font-semibold text-xs sm:text-sm text-left mt-auto pt-2">Liam C - Krush Organics</div>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border flex flex-col h-full">
                <div className="flex items-center mb-3">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#D91C5C] mr-2" />
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">292% Growth</div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 flex-grow">
                  "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with."
                </p>
                <div className="font-semibold text-xs sm:text-sm text-left mt-auto pt-2">Fabienne Costa - YCL Jewels</div>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border flex flex-col h-full">
                <div className="flex items-center mb-3">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#D91C5C] mr-2" />
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">5x Revenue</div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 flex-grow">
                  "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month."
                </p>
                <div className="font-semibold text-xs sm:text-sm text-left mt-auto pt-2">Evan Tsaboukos - Imperial Wealth</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - 4 Pillars */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                The 4 Pillars of Our Integrated Melbourne Digital Marketing Strategy
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
                Unlike fragmented agencies, we unify SEO, PPC, Social Media Ads, and Web Design into one cohesive, high-ROI strategy.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <Search className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">
                  <Link to="/seo-agency" className="hover:text-primary transition-colors">Performance SEO</Link>
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Not rankings for the sake of rankings—we target high-intent keywords that drive qualified leads and revenue. Integrated with your PPC and content strategy for maximum efficiency.
                </p>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">
                  <Link to="/ppc-agency" className="hover:text-primary transition-colors">High-ROI Paid Media</Link>
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Google Ads and Bing Ads optimized for Cost Per Qualified Lead (CPQL), not just clicks. We maximize Quality Score and conversion rates while working in harmony with your SEO strategy.
                </p>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <Share2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">
                  <Link to="/meta-ads-agency" className="hover:text-primary transition-colors">Surgical Social Media Ads</Link>
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Facebook, Instagram, and LinkedIn ads that don't just build awareness—they drive conversions. Integrated with your overall customer journey for a seamless experience.
                </p>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <Monitor className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">
                  <Link to="/web-design-agency" className="hover:text-primary transition-colors">Conversion-Focused Web Design</Link>
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Your website isn't a brochure—it's a revenue engine. We design high-converting sites optimized for speed, SEO, and user experience, ensuring your traffic converts.
                </p>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-10">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4"
              >
                <span className="hidden sm:inline">See How We Integrate These 4 Pillars for Your Business →</span>
                <span className="sm:hidden">See Our Strategy →</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                Why Melbourne Businesses Choose Odin Digital
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
                We're not another generalist agency. We're specialists in integrated, high-ROI digital marketing.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              <div className="text-center p-4 sm:p-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-[#D91C5C]" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Integrated, Holistic Strategy</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  We don't silo services. SEO, PPC, Social, and Web Design work together in perfect harmony to maximize efficiency and ROI.
                </p>
              </div>

              <div className="text-center p-4 sm:p-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-[#D91C5C]" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">540% Average ROI</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Our integrated approach delivers proven results. We focus on Cost Per Qualified Lead (CPQL) and revenue attribution, not vanity metrics.
                </p>
              </div>

              <div className="text-center p-4 sm:p-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-[#D91C5C]" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Radical Transparency</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Real-time dashboards. Clear ROI reporting. You'll always know exactly where your money goes and what it delivers.
                </p>
              </div>

              <div className="text-center p-4 sm:p-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-[#D91C5C]" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">No Lock-In Contracts</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  We earn your business every month. If we're not delivering ROI, you're free to leave. No penalties. No hassle. That's confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                Our 4-Step Integrated Strategy Process
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
                From audit to execution, we build a unified strategy designed to maximize your Melbourne business growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 items-stretch">
              <div className="relative flex flex-col h-full">
                <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border flex flex-col h-full">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#D91C5C] text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg mb-3">1</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Integrated Strategy Blueprint</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    We audit your current marketing, identify gaps and opportunities across SEO, PPC, Social, and Web, then build a unified strategy that aligns all four pillars to your revenue goals.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col h-full">
                <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border flex flex-col h-full">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#D91C5C] text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg mb-3">2</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Unified Campaign Launch</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    We execute across all channels simultaneously—SEO content supports PPC landing pages, social ads retarget website visitors, and web design optimizes for conversions.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col h-full">
                <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border flex flex-col h-full">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#D91C5C] text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg mb-3">3</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Data-Driven Optimization</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    We continuously monitor performance across all channels, using real-time data to refine targeting, messaging, and conversion paths for maximum ROI.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col h-full">
                <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border flex flex-col h-full">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#D91C5C] text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg mb-3">4</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Scale & Dominate</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    As performance improves, we scale winning campaigns while maintaining efficiency, helping your Melbourne business dominate your market.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-10">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4"
              >
                <span className="hidden sm:inline">Start Your Integrated Strategy Today →</span>
                <span className="sm:hidden">Start Today →</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                Why Partner with Odin Digital for Your Melbourne Digital Marketing?
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 items-center">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Melbourne Market Expertise</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3">
                    We understand Melbourne's competitive landscape, high CPCs, and unique customer behavior. Our strategies are tailored to Melbourne businesses, not generic templates.
                  </p>
                </div>
                <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D91C5C]" />
                      <span className="text-xs sm:text-sm">Local market intelligence</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D91C5C]" />
                      <span className="text-xs sm:text-sm">Melbourne-specific targeting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D91C5C]" />
                      <span className="text-xs sm:text-sm">Competitive analysis</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 items-center">
                <div className="order-2 md:order-1 bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D91C5C]" />
                      <span className="text-xs sm:text-sm">Dedicated account manager</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D91C5C]" />
                      <span className="text-xs sm:text-sm">24/7 dashboard access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D91C5C]" />
                      <span className="text-xs sm:text-sm">Monthly strategy reviews</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">White-Glove Service</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3">
                    You'll have a dedicated account manager who knows your business inside-out, plus 24/7 access to real-time performance dashboards across all channels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related City & Service Links */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                Explore Our Digital Marketing Services
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              <Link to="/ppc-agency" className="bg-card p-3 sm:p-4 rounded-lg shadow-card border border-border hover:shadow-lg hover:border-primary/50 transition-all group text-center">
                <h3 className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">PPC Agency</h3>
              </Link>
              <Link to="/seo-agency" className="bg-card p-3 sm:p-4 rounded-lg shadow-card border border-border hover:shadow-lg hover:border-primary/50 transition-all group text-center">
                <h3 className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">SEO Agency</h3>
              </Link>
              <Link to="/meta-ads-agency" className="bg-card p-3 sm:p-4 rounded-lg shadow-card border border-border hover:shadow-lg hover:border-primary/50 transition-all group text-center">
                <h3 className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">Meta Ads Agency</h3>
              </Link>
              <Link to="/web-design-agency" className="bg-card p-3 sm:p-4 rounded-lg shadow-card border border-border hover:shadow-lg hover:border-primary/50 transition-all group text-center">
                <h3 className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">Web Design Agency</h3>
              </Link>
              <Link to="/google-ads-melbourne" className="bg-card p-3 sm:p-4 rounded-lg shadow-card border border-border hover:shadow-lg hover:border-primary/50 transition-all group text-center">
                <h3 className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">Google Ads Melbourne</h3>
              </Link>
              <Link to="/facebook-ads-melbourne" className="bg-card p-3 sm:p-4 rounded-lg shadow-card border border-border hover:shadow-lg hover:border-primary/50 transition-all group text-center">
                <h3 className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">Facebook Ads Melbourne</h3>
              </Link>
              <Link to="/web-design-melbourne" className="bg-card p-3 sm:p-4 rounded-lg shadow-card border border-border hover:shadow-lg hover:border-primary/50 transition-all group text-center">
                <h3 className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">Web Design Melbourne</h3>
              </Link>
              <Link to="/online-marketing-company-sydney" className="bg-card p-3 sm:p-4 rounded-lg shadow-card border border-border hover:shadow-lg hover:border-primary/50 transition-all group text-center">
                <h3 className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">Sydney Digital Marketing</h3>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30 pb-16 sm:pb-20 md:pb-24">
          <div className="container mx-auto max-w-4xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                Frequently Asked Questions About Digital Marketing in Melbourne
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-3">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  How is your digital marketing strategy different from other Melbourne agencies?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  We focus on a holistic, unified strategy. Most agencies specialize in one area (SEO or PPC). We integrate all four pillars—SEO, PPC, Social, and Web Design—into a single, cohesive system, ensuring maximum efficiency and a higher ROI.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  How do you ensure my budget isn't wasted in Melbourne's competitive market?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  We focus on Cost Per Qualified Lead (CPQL), not just clicks. Our strategies are built on radical transparency and surgical targeting, ensuring every dollar spent contributes directly to a measurable revenue goal.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  Do you use lock-in contracts for your digital marketing services?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  No. We believe our value should be proven every month. Our No Lock-in Contracts policy is a testament to our confidence in delivering exceptional, predictable results, which is why we maintain a 95% client retention rate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  What results can I expect from your integrated digital marketing strategy?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Our clients see an average 540% ROI across their integrated campaigns. By aligning SEO, PPC, Social, and Web Design into one cohesive strategy, we eliminate inefficiencies and maximize every marketing dollar.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  How long does it take to see results from your digital marketing services in Melbourne?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  SEO typically shows significant results in 3-6 months. PPC and Social Ads can deliver immediate results within days to weeks. Our integrated approach accelerates overall performance by creating synergy between all channels.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  Do you work with businesses of all sizes in Melbourne?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Yes. We work with small businesses, mid-sized companies, and large enterprises across Melbourne. Our strategies scale to your business size and goals, ensuring ROI-focused campaigns regardless of budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  How do you measure the success of your digital marketing campaigns?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  We track Cost Per Qualified Lead (CPQL), conversion rates, revenue attribution, and overall ROI. You'll have access to real-time dashboards showing exactly how your marketing investment translates to business growth.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  What makes your SEO strategy different for Melbourne businesses?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Our SEO isn't siloed—it's integrated with your PPC and content strategy. We target high-intent keywords, optimize for conversions (not just rankings), and ensure your SEO efforts support your overall revenue goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  How do you handle Melbourne's high cost-per-click (CPC) for PPC?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  We use surgical targeting, negative keyword strategies, and landing page optimization to maximize Quality Score and reduce wasted spend. Our integrated approach ensures PPC works in harmony with SEO and social for better overall efficiency.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  Can you integrate with our existing marketing efforts?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Absolutely. We audit your current marketing stack and integrate seamlessly, filling gaps and optimizing existing efforts. Our goal is to create a unified strategy that leverages what's working and fixes what isn't.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  Do you provide transparent reporting for all your digital marketing services?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Yes. Radical transparency is one of our core values. You'll receive detailed monthly reports and have 24/7 access to real-time dashboards showing performance across all channels—SEO, PPC, Social, and Web.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  What industries do you specialize in for Melbourne digital marketing?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  We work across all industries but have particular expertise in professional services, e-commerce, healthcare, legal, and B2B SaaS. Our integrated approach adapts to any industry's unique challenges and opportunities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  How often will I communicate with your team?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  You'll have a dedicated account manager for regular communication. We provide monthly strategy reviews, weekly performance updates, and are available for ad-hoc calls as needed. Transparency and communication are paramount.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  What is your pricing structure for digital marketing in Melbourne?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Our pricing is customized based on your goals, industry, and competition. We offer transparent, performance-based pricing with no hidden fees. Contact us for a free audit and personalized quote.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  Do you offer website design as part of your digital marketing services?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Yes. Conversion-focused web design is the fourth pillar of our integrated strategy. We build websites optimized for conversions, speed, and SEO—ensuring your site works in perfect harmony with your marketing campaigns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-16" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  What sets your social media advertising apart from other Melbourne agencies?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  We don't run generic awareness campaigns. Our social ads are surgically targeted, data-driven, and integrated with your SEO and PPC strategy to create a cohesive customer journey that maximizes conversions and ROI.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="container mx-auto max-w-4xl relative z-10 text-center px-3 sm:px-4 md:px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
              Ready to Stop Wasting Money on Fragmented Marketing?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
              Partner with Melbourne's leading integrated digital marketing agency. Get your free audit and discover how we can deliver 540% ROI for your business.
            </p>
            <Button 
              onClick={openForm}
              size="lg"
              className="bg-white text-[#D91C5C] hover:bg-white/90 font-bold text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 shadow-glow transition-all duration-300 hover:scale-105"
            >
              Claim Your FREE Melbourne Digital Marketing Audit <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default OnlineMarketingCompanyMelbourne;
