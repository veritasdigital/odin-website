import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  TrendingUp, 
  Target, 
  FileText, 
  Shield, 
  Clock, 
  DollarSign, 
  Users,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Award,
  BarChart3,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SEONewcastle = () => {
  const { openForm } = useMarketingForm();

  const organizationSchema = {
    "@context": "https://schema.org",
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
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Odin Digital - SEO Agency Newcastle",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Newcastle",
      "addressLocality": "Newcastle",
      "addressRegion": "NSW",
      "postalCode": "2300",
      "addressCountry": "AU"
    },
    "url": "https://growth-conduit-central.lovable.app/seo-newcastle",
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
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
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
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do SEO agencies in Newcastle always say \"SEO takes time\"?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While it's true that SEO is a long-term strategy, many agencies use the \"SEO takes time\" line as an excuse for poor performance or lack of a clear plan. Our SEO agency Newcastle team sets clear, measurable milestones and focuses on high-impact technical and on-page fixes first, which often deliver noticeable results within the first 60-90 days, moving you past the frustrating waiting game."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure you deliver high-quality traffic, not just vanity rankings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus on high-intent keywords—the terms your customers use when they are ready to buy or engage. We optimize your content to satisfy that intent, ensuring that the traffic we drive is highly qualified. Our reporting focuses on Sales Qualified Leads (SQLs) and Customer Acquisition Cost (CAC) driven by organic search, not just where you rank for a random keyword."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to hire a Newcastle SEO management company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost to hire a Newcastle SEO company varies based on your website's current health and the competitiveness of your industry. We offer transparent, performance-based pricing, typically a flat monthly management fee. Crucially, we operate with no lock-in contracts, which means our value must be proven every month. The best way to determine the exact investment is through a free, no-obligation strategy session."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Odin Digital different from other Newcastle SEO companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer complete transparency, no lock-in contracts, and focus on revenue-driving results rather than vanity metrics. Our team has generated $574M+ in client revenue and maintains a 95% client retention rate because we deliver measurable ROI."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While SEO is a long-term strategy, we focus on high-impact technical and on-page fixes first, which often deliver noticeable results within the first 60-90 days. Full competitive positioning typically takes 6-12 months depending on your industry and current site health."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with businesses outside of Newcastle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, while we specialize in Newcastle SEO services, we work with businesses across Australia including Sydney, Melbourne, Brisbane, Adelaide, Canberra, and Gold Coast. Our strategies are customized for each local market."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you specialize in for SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in high-value service industries including legal, medical (cosmetic clinics, dentists, plastic surgeons), accounting, real estate, and e-commerce. Our team understands the unique compliance and competitive challenges in these sectors."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer local SEO services for Newcastle businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Local SEO is one of our core services. We optimize Google Business Profiles, build local citations, create location-specific content, and implement technical SEO to ensure Newcastle businesses dominate local search results."
        }
      },
      {
        "@type": "Question",
        "name": "Can you guarantee first page rankings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We don't make guarantees about specific rankings because search algorithms change constantly. Instead, we guarantee transparency, ethical practices, and a focus on revenue-driving results. Our track record speaks for itself with clients achieving 292%-540% revenue growth."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in your SEO audit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our comprehensive SEO audit includes technical SEO analysis, on-page optimization review, backlink profile assessment, competitor analysis, keyword opportunity identification, and a prioritized action plan with projected impact for each recommendation."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer content writing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, high-quality, SEO-optimized content is a core part of our service. We create content that satisfies search intent, engages your audience, and drives conversions—not just content stuffed with keywords."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure SEO success?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We measure success through revenue-focused metrics: organic traffic growth, Sales Qualified Leads (SQLs), Customer Acquisition Cost (CAC), conversion rate improvements, and ultimately revenue generated from organic search. Rankings are a vanity metric—we care about your bottom line."
        }
      },
      {
        "@type": "Question",
        "name": "What is your link building strategy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We only use ethical, white-hat link building strategies including digital PR, strategic partnerships, guest posting on relevant industry sites, and creating link-worthy content. We never use PBNs, link farms, or other black-hat tactics that could get your site penalized."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with e-commerce SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, e-commerce SEO is one of our specialties. We optimize product pages, category architecture, technical elements like schema markup, and create content strategies that drive qualified traffic to high-value product pages."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer ongoing SEO management or just one-time audits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer both. One-time audits are available, but SEO is an ongoing process. Our month-to-month management packages (with no lock-in contracts) include continuous optimization, content creation, technical monitoring, and strategic adjustments based on performance data."
        }
      },
      {
        "@type": "Question",
        "name": "What is AI SEO and do you offer it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI SEO involves using artificial intelligence tools to enhance keyword research, content optimization, competitor analysis, and technical SEO. Yes, we integrate AI tools into our SEO strategy to deliver faster insights and more comprehensive optimization, while maintaining the human strategic oversight that drives results."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
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
  };

  return (
    <>
      <Helmet>
        <title>SEO Agency Newcastle | Proven 540% ROI SEO Services | Odin Digital</title>
        <meta name="description" content="Stop listening to excuses. Odin Digital is the SEO Agency Newcastle businesses trust for ethical, high-performance SEO services with no lock-in contracts. Get your free audit today." />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
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
            Get Your FREE SEO Audit →
          </Button>
        </div>

        {/* Section 1: Hero Section */}
        <section className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-32 overflow-hidden bg-gradient-subtle">
          {/* Floating circles */}
          <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-primary/10 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full bg-secondary/10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-36 h-36 sm:w-52 sm:h-52 md:w-80 md:h-80 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-6">
            <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mt-8 sm:mt-4">
                SEO Agency Newcastle
              </h1>
              
              <p className="hero-sub-headline text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground/90 leading-tight max-w-5xl mx-auto px-2 sm:px-4">
                Tired of Newcastle SEO Agencies Promising the World and Delivering the Same Old "SEO Takes Time" Excuse? You Need Proof, Not Promises.
              </p>
              
              <div className="space-y-3 sm:space-y-4 md:space-y-6 max-w-4xl mx-auto px-2 sm:px-4">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  The SEO Agency Newcastle Businesses Trust for Ethical, High-Performance SEO Services That Deliver Measurable ROI—Not Excuses.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Partner with Odin Digital and Watch Your Newcastle Business Dominate Search Results with an SEO Strategy That Drives Revenue, Not Just Rankings.
                </p>
              </div>

              <div className="pt-4 sm:pt-6 md:pt-8">
                <Button 
                  onClick={openForm}
                  size="xl"
                  className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 shadow-glow hover:shadow-primary/60 transition-all duration-300 hover:scale-105"
                >
                  Get Your FREE Newcastle SEO Audit <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pt-8 sm:pt-12 md:pt-16 max-w-5xl mx-auto">
                <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">$574M+</div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Client Revenue Generated</div>
                </div>
                <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">95%</div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Client Retention Rate</div>
                </div>
                <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">540%</div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Average ROI</div>
                </div>
                <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">0</div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Lock-In Contracts</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Social Proof Metrics (already included in hero) */}

        {/* Section 3: Problem-Agitation */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
                Why Most SEO Agencies Fail Newcastle Businesses
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Newcastle businesses waste millions every year on SEO agencies that deliver excuses instead of results. Here's why most agencies fail.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-[#D91C5C] mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">The "SEO Takes Time" Lie</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  They hide behind "SEO takes time" to avoid accountability. While SEO is long-term, you should see measurable progress within 60-90 days, not excuses for 12 months.
                </p>
              </div>

              <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-[#D91C5C] mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Transparency Black Box</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  You pay thousands monthly but have no idea what they're actually doing. Generic reports with vanity metrics that don't connect to revenue.
                </p>
              </div>

              <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-[#D91C5C] mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Ranking ≠ Revenue</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  They celebrate ranking improvements while your revenue stays flat. Rankings for low-intent keywords that don't bring qualified customers.
                </p>
              </div>
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold"
              >
                Stop the SEO Bleed: Talk to a Newcastle SEO Expert →
              </Button>
            </div>
          </div>
        </section>

        {/* Section 4: Testimonials */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
                Real Results from Real Newcastle Businesses
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Don't take our word for it. Here's what our clients say about our SEO services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-card border border-border">
                <div className="flex items-center mb-3 sm:mb-4">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mr-2 sm:mr-3" />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">540% ROI</div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
                </p>
                <div className="font-semibold text-sm sm:text-base">Liam C - Krush Organics</div>
              </div>

              <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-card border border-border">
                <div className="flex items-center mb-3 sm:mb-4">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mr-2 sm:mr-3" />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">292% Growth</div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                  "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with."
                </p>
                <div className="font-semibold text-sm sm:text-base">Fabienne Costa - YCL Jewels</div>
              </div>

              <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-card border border-border">
                <div className="flex items-center mb-3 sm:mb-4">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mr-2 sm:mr-3" />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">400% Revenue</div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                  "Outstanding results. Our organic traffic increased by 400% and our revenue has followed suit. The transparency and communication is refreshing."
                </p>
                <div className="font-semibold text-sm sm:text-base">Adriatic Furniture</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Services */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
                Our Newcastle SEO Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive SEO services designed to drive qualified traffic and revenue for Newcastle businesses.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <Search className="w-10 h-10 sm:w-12 sm:h-12 text-[#D91C5C] mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Technical SEO</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                  Fix crawl errors, improve site speed, optimize site architecture, and ensure your website meets Google's technical standards.
                </p>
                <Link to="/services/technical-seo" className="text-[#D91C5C] hover:underline text-sm sm:text-base font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-[#D91C5C] mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Local SEO</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                  Dominate Newcastle local search results. Google Business Profile optimization, local citations, and location-specific content.
                </p>
                <Link to="/services/local-seo" className="text-[#D91C5C] hover:underline text-sm sm:text-base font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-[#D91C5C] mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Content Strategy</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                  High-quality, SEO-optimized content that satisfies search intent and drives conversions—not keyword-stuffed garbage.
                </p>
                <Link to="/services/seo" className="text-[#D91C5C] hover:underline text-sm sm:text-base font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-[#D91C5C] mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Link Building</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                  Ethical, white-hat link building through digital PR, strategic partnerships, and creating genuinely link-worthy content.
                </p>
                <Link to="/services/seo" className="text-[#D91C5C] hover:underline text-sm sm:text-base font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Differentiators */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
                Why Newcastle Businesses Choose Odin Digital
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                We're not like other SEO agencies. Here's what makes us different.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <div className="text-center p-4 sm:p-6 md:p-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-[#D91C5C]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">No Lock-In Contracts</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Month-to-month agreements. We earn your business every single month through results, not legal contracts.
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 md:p-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8 text-[#D91C5C]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Full Transparency</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Real-time dashboards showing exactly what we're doing and the impact it's having on your revenue.
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 md:p-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <DollarSign className="w-7 h-7 sm:w-8 sm:h-8 text-[#D91C5C]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Revenue Focus</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We measure success by your revenue growth, not vanity metrics like impressions or rankings.
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 md:p-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-[#D91C5C]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Proven Track Record</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  $574M+ in client revenue generated. 95% client retention rate. Results speak louder than promises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Process */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
                Our Proven SEO Process
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                A strategic, data-driven approach that delivers measurable results for Newcastle businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <div className="relative">
                <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-card border border-border">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D91C5C] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl mb-3 sm:mb-4">1</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Deep Audit</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Comprehensive technical SEO audit, competitor analysis, and keyword opportunity identification.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-card border border-border">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D91C5C] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl mb-3 sm:mb-4">2</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Strategic Planning</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Custom SEO strategy with prioritized action plan and clear milestones for your Newcastle market.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-card border border-border">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D91C5C] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl mb-3 sm:mb-4">3</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Implementation</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Execute technical fixes, create optimized content, and build high-quality backlinks.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-card border border-border">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D91C5C] text-white rounded-full flex items-center justify-center font-bold text-lg sm:text-xl mb-3 sm:mb-4">4</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Optimize & Scale</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Continuous monitoring, testing, and optimization to maximize your ROI and revenue growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Why Choose Us (Extended) */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
                The Odin Digital Difference
              </h2>
            </div>

            <div className="space-y-8 sm:space-y-12 md:space-y-16">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">We Focus on Revenue, Not Rankings</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                    While other agencies celebrate ranking for irrelevant keywords, we focus on high-intent keywords that drive Sales Qualified Leads (SQLs) and revenue for your Newcastle business.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Our reporting focuses on the metrics that matter: organic traffic value, conversion rates, Customer Acquisition Cost (CAC), and revenue generated from organic search.
                  </p>
                </div>
                <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-card border border-border">
                  <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#D91C5C] mb-3 sm:mb-4" />
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#D91C5C]" />
                      <span className="text-sm sm:text-base">High-Intent Keyword Targeting</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#D91C5C]" />
                      <span className="text-sm sm:text-base">Conversion-Focused Content</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#D91C5C]" />
                      <span className="text-sm sm:text-base">Revenue Attribution Tracking</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1 bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-card border border-border">
                  <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#D91C5C] mb-3 sm:mb-4" />
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#D91C5C]" />
                      <span className="text-sm sm:text-base">Real-Time Dashboards</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#D91C5C]" />
                      <span className="text-sm sm:text-base">Weekly Performance Updates</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#D91C5C]" />
                      <span className="text-sm sm:text-base">Direct Access to Your Team</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Complete Transparency</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                    No more wondering what your SEO agency is actually doing. We provide real-time dashboards showing every action we take and its impact on your business.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    You'll have direct access to your dedicated account manager and can see exactly where your investment is going and what results it's delivering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Final CTA */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="container mx-auto max-w-4xl relative z-10 text-center px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              Ready to Stop Losing Customers and Start Dominating Newcastle Search Results?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              Stop settling for SEO agencies that deliver excuses instead of results. Start working with the SEO agency Newcastle that delivers high-converting organic traffic and predictable ROI.
            </p>
            <Button 
              onClick={openForm}
              size="xl"
              className="bg-white text-[#D91C5C] hover:bg-white/90 font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 shadow-glow transition-all duration-300 hover:scale-105"
            >
              Claim Your FREE Newcastle SEO Audit <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </section>

        {/* Section 10: Other Cities Links */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
                SEO Services in Other Australian Cities
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                We provide expert SEO services across Australia
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              <Link to="/seo-sydney" className="text-center p-3 sm:p-4 md:p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#D91C5C] mx-auto mb-2" />
                <div className="font-semibold text-sm sm:text-base">Sydney</div>
              </Link>
              <Link to="/seo-melbourne" className="text-center p-3 sm:p-4 md:p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#D91C5C] mx-auto mb-2" />
                <div className="font-semibold text-sm sm:text-base">Melbourne</div>
              </Link>
              <Link to="/seo-brisbane" className="text-center p-3 sm:p-4 md:p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#D91C5C] mx-auto mb-2" />
                <div className="font-semibold text-sm sm:text-base">Brisbane</div>
              </Link>
              <Link to="/seo-adelaide" className="text-center p-3 sm:p-4 md:p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#D91C5C] mx-auto mb-2" />
                <div className="font-semibold text-sm sm:text-base">Adelaide</div>
              </Link>
              <Link to="/seo-canberra" className="text-center p-3 sm:p-4 md:p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#D91C5C] mx-auto mb-2" />
                <div className="font-semibold text-sm sm:text-base">Canberra</div>
              </Link>
              <Link to="/seo-gold-coast" className="text-center p-3 sm:p-4 md:p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#D91C5C] mx-auto mb-2" />
                <div className="font-semibold text-sm sm:text-base">Gold Coast</div>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 11: FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
                FAQs: Your Questions About Newcastle SEO Answered
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold text-left">
                  Why do SEO agencies in Newcastle always say "SEO takes time"?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                  While it's true that SEO is a long-term strategy, many agencies use the "SEO takes time" line as an excuse for poor performance or lack of a clear plan. Our SEO agency Newcastle team sets clear, measurable milestones and focuses on high-impact technical and on-page fixes first, which often deliver noticeable results within the first 60-90 days, moving you past the frustrating waiting game.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold text-left">
                  How do you ensure you deliver high-quality traffic, not just vanity rankings?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                  We focus on high-intent keywords—the terms your customers use when they are ready to buy or engage. We optimize your content to satisfy that intent, ensuring that the traffic we drive is highly qualified. Our reporting focuses on Sales Qualified Leads (SQLs) and Customer Acquisition Cost (CAC) driven by organic search, not just where you rank for a random keyword.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold text-left">
                  How much does it cost to hire a Newcastle SEO management company?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                  The cost to hire a Newcastle SEO company varies based on your website's current health and the competitiveness of your industry. We offer transparent, performance-based pricing, typically a flat monthly management fee. Crucially, we operate with no lock-in contracts, which means our value must be proven every month. The best way to determine the exact investment is through a free, no-obligation strategy session.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold text-left">
                  What makes Odin Digital different from other Newcastle SEO companies?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                  We offer complete transparency, no lock-in contracts, and focus on revenue-driving results rather than vanity metrics. Our team has generated $574M+ in client revenue and maintains a 95% client retention rate because we deliver measurable ROI.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold text-left">
                  How long does it take to see results from SEO?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                  While SEO is a long-term strategy, we focus on high-impact technical and on-page fixes first, which often deliver noticeable results within the first 60-90 days. Full competitive positioning typically takes 6-12 months depending on your industry and current site health.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold text-left">
                  Do you work with businesses outside of Newcastle?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                  Yes, while we specialize in Newcastle SEO services, we work with businesses across Australia including Sydney, Melbourne, Brisbane, Adelaide, Canberra, and Gold Coast. Our strategies are customized for each local market.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-border rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold text-left">
                  What industries do you specialize in for SEO?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                  We specialize in high-value service industries including legal, medical (cosmetic clinics, dentists, plastic surgeons), accounting, real estate, and e-commerce. Our team understands the unique compliance and competitive challenges in these sectors.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border border-border rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold text-left">
                  Do you offer local SEO services for Newcastle businesses?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                  Absolutely. Local SEO is one of our core services. We optimize Google Business Profiles, build local citations, create location-specific content, and implement technical SEO to ensure Newcastle businesses dominate local search results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border border-border rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold text-left">
                  Can you guarantee first page rankings?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                  We don't make guarantees about specific rankings because search algorithms change constantly. Instead, we guarantee transparency, ethical practices, and a focus on revenue-driving results. Our track record speaks for itself with clients achieving 292%-540% revenue growth.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border border-border rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold text-left">
                  What's included in your SEO audit?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                  Our comprehensive SEO audit includes technical SEO analysis, on-page optimization review, backlink profile assessment, competitor analysis, keyword opportunity identification, and a prioritized action plan with projected impact for each recommendation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="border border-border rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold text-left">
                  Do you offer content writing services?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                  Yes, high-quality, SEO-optimized content is a core part of our service. We create content that satisfies search intent, engages your audience, and drives conversions—not just content stuffed with keywords.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="border border-border rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold text-left">
                  How do you measure SEO success?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                  We measure success through revenue-focused metrics: organic traffic growth, Sales Qualified Leads (SQLs), Customer Acquisition Cost (CAC), conversion rate improvements, and ultimately revenue generated from organic search. Rankings are a vanity metric—we care about your bottom line.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13" className="border border-border rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold text-left">
                  What is your link building strategy?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                  We only use ethical, white-hat link building strategies including digital PR, strategic partnerships, guest posting on relevant industry sites, and creating link-worthy content. We never use PBNs, link farms, or other black-hat tactics that could get your site penalized.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14" className="border border-border rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold text-left">
                  Can you help with e-commerce SEO?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                  Yes, e-commerce SEO is one of our specialties. We optimize product pages, category architecture, technical elements like schema markup, and create content strategies that drive qualified traffic to high-value product pages.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15" className="border border-border rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold text-left">
                  Do you offer ongoing SEO management or just one-time audits?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                  We offer both. One-time audits are available, but SEO is an ongoing process. Our month-to-month management packages (with no lock-in contracts) include continuous optimization, content creation, technical monitoring, and strategic adjustments based on performance data.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-16" className="border border-border rounded-lg px-4 sm:px-6">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold text-left">
                  What is AI SEO and do you offer it?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                  AI SEO involves using artificial intelligence tools to enhance keyword research, content optimization, competitor analysis, and technical SEO. Yes, we integrate AI tools into our SEO strategy to deliver faster insights and more comprehensive optimization, while maintaining the human strategic oversight that drives results.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SEONewcastle;
