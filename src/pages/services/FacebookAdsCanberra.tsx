import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { CheckCircle, TrendingUp, Users, Target, Zap, Award, ArrowRight, MessageSquare } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RelatedLocations } from "@/components/RelatedLocations";
import { getRelatedLocations } from "@/utils/contentClusters";
import { getLocationData } from "@/utils/locationData";

const FacebookAdsCanberra = () => {
  const { openForm } = useMarketingForm();
  const locationInfo = getLocationData("canberra");

  const socialProof = [
    { number: "540%", label: "Average ROI on Meta Ads" },
    { number: "150+", label: "Canberra Businesses Served" },
    { number: "$2.8M+", label: "Revenue Generated for Clients" },
    { number: "4.9/5", label: "Client Satisfaction Rating" }
  ];

  const problems = [
    {
      title: "Audience Saturation in Canberra's Tight Market",
      description: "Canberra's limited population means your audience sees the same ads repeatedly, leading to ad fatigue, skyrocketing costs, and plummeting conversions. Generalist agencies don't understand this unique challenge."
    },
    {
      title: "The Generalist Agency Trap",
      description: "You're tired of agencies that treat your Canberra business like every other client. Cookie-cutter strategies don't work in ACT's unique market. You need surgical precision, not spray-and-pray tactics."
    },
    {
      title: "B2B & B2G Skepticism",
      description: "You've been told Facebook Ads 'don't work' for B2B or government contractors in Canberra. Wrong. With proper targeting of decision-makers and custom audiences, Meta Ads deliver high-value corporate leads traditional agencies miss."
    }
  ];

  const services = [
    {
      icon: Target,
      title: "Surgical Meta Ads Management",
      description: "Precision targeting for Canberra's compact market. We combat ad fatigue with continuous creative rotation and advanced audience segmentation to keep your CPMs low and conversions high."
    },
    {
      icon: Zap,
      title: "Advanced Conversion API Setup",
      description: "iOS 14+ destroyed Meta tracking. We rebuild it with Conversion API integration, ensuring accurate attribution and optimization even as third-party cookies disappear."
    },
    {
      icon: TrendingUp,
      title: "Creative Testing & Optimization",
      description: "In Canberra's saturated market, creative is everything. We run systematic A/B tests on copy, visuals, and hooks to find what resonates with your local audience and drives qualified leads."
    },
    {
      icon: Users,
      title: "Full-Funnel Campaign Architecture",
      description: "From cold awareness campaigns to warm retargeting sequences, we build complete funnels that nurture prospects from first touch to qualified lead, maximizing your Meta Ads ROI."
    }
  ];

  const differentiators = [
    {
      title: "Canberra Audience Specialists",
      description: "We understand ACT's unique market dynamics. Our strategies are built specifically for Canberra's government sector, professional services, and tight-knit business community."
    },
    {
      title: "Performance-Only Focus",
      description: "We don't care about vanity metrics. We optimize for Cost Per Qualified Lead (CPQL) and ROI. If it doesn't drive revenue, we don't do it."
    },
    {
      title: "Full Transparency",
      description: "You get real-time access to your campaign dashboards. No hiding behind vague reports. See exactly where every dollar goes and what it returns."
    },
    {
      title: "Proven Track Record",
      description: "540% average ROI across 150+ clients. $2.8M+ generated for Canberra businesses. Our results speak louder than any pitch deck."
    }
  ];

  const process = [
    {
      step: "1",
      title: "Deep-Dive Audit",
      description: "We analyze your current Meta Ads performance (or competitors if you're new), identify bleeding budget, and map your ideal customer profile specific to Canberra."
    },
    {
      step: "2",
      title: "Strategic Blueprint",
      description: "We build a custom Meta Ads strategy with surgical audience targeting, creative concepts, and conversion architecture designed for ACT's market dynamics."
    },
    {
      step: "3",
      title: "Flawless Execution",
      description: "Our specialists launch your campaigns with advanced tracking, Conversion API setup, and aggressive creative testing to maximize ROI from day one."
    },
    {
      step: "4",
      title: "Continuous Optimization",
      description: "We monitor daily, optimize weekly, and report transparently. Your campaigns evolve based on real performance data, not guesswork."
    }
  ];

  const whyChoose = [
    {
      title: "Local Market Expertise",
      description: "We've managed Meta Ads for over 150 Canberra businesses across government contracting, professional services, healthcare, and retail. We know what works in ACT."
    },
    {
      title: "Meta Blueprint Certified Team",
      description: "Our specialists hold official Meta certifications and stay ahead of platform changes, algorithm updates, and new targeting capabilities."
    },
    {
      title: "Data-Driven Decision Making",
      description: "Every optimization is backed by statistical significance testing. We don't make changes based on hunches—only proven performance data."
    },
    {
      title: "Dedicated Account Management",
      description: "You get a dedicated Canberra-based account manager who understands your business, responds quickly, and thinks strategically about your growth."
    }
  ];

  const faqs = [
    {
      question: "How do you combat ad fatigue in the smaller Canberra market?",
      answer: "We implement a rigorous, continuous creative testing and rotation system. We use custom audiences and lookalike models to find fresh segments, and we constantly refresh ad copy and visuals to ensure your audience doesn't see the same ad repeatedly, keeping your costs down and your conversions high."
    },
    {
      question: "How do you ensure our Meta Ads budget isn't wasted on low-quality leads?",
      answer: "We focus on Cost Per Qualified Lead (CPQL), not just clicks. We use advanced tracking (Conversion API), aggressive pre-qualification forms on landing pages, and detailed audience segmentation to ensure your budget is only spent on users most likely to convert into high-value customers."
    },
    {
      question: "Is Facebook Advertising effective for B2B or B2G businesses in Canberra?",
      answer: "Absolutely. While often seen as B2C, the decision-makers for B2B and B2G are active on social media. Our strategy targets them through job titles, company size, and specific interests, delivering high-value, corporate leads that are often missed by search-only campaigns."
    },
    {
      question: "What's the minimum ad spend required to see results?",
      answer: "We recommend a minimum of $2,000-$3,000/month for Canberra campaigns. This allows enough budget to test audiences, creative variations, and gather statistically significant data for optimization. Lower budgets risk insufficient data and wasted spend on endless testing."
    },
    {
      question: "How long does it take to see results from Meta Ads?",
      answer: "Initial results typically appear within 2-4 weeks as the Meta algorithm learns and optimizes. However, peak performance usually comes at the 60-90 day mark once we've identified winning audiences, creative, and messaging through systematic testing."
    },
    {
      question: "What makes you different from other Facebook Ads agencies in Canberra?",
      answer: "We're specialists, not generalists. While other agencies dabble in Meta Ads alongside ten other services, this is our core expertise. We understand Canberra's unique market dynamics, we're performance-focused (ROI over vanity metrics), and we provide full transparency with real-time dashboard access."
    },
    {
      question: "Do you guarantee results?",
      answer: "We don't make guarantees because too many variables are outside our control (your offer, pricing, website conversion rate, etc.). However, we do guarantee our effort: strategic planning, flawless execution, continuous optimization, and full transparency. Our 540% average ROI speaks to our track record."
    },
    {
      question: "What industries do you work with in Canberra?",
      answer: "We've successfully run Meta Ads campaigns for professional services (legal, accounting, consulting), healthcare (dental, cosmetic, allied health), B2B services, government contractors, education providers, retail, and e-commerce businesses across the ACT region."
    },
    {
      question: "How do you handle iOS 14+ tracking limitations?",
      answer: "We implement Conversion API (CAPI) to send conversion data directly from your server to Meta, bypassing browser-based tracking limitations. This ensures accurate attribution, proper campaign optimization, and maximum ROI despite Apple's privacy changes."
    },
    {
      question: "What's included in your reporting?",
      answer: "You get real-time dashboard access plus detailed monthly reports covering: spend breakdown, cost per result metrics (CPQL, CPA, ROAS), audience performance analysis, creative performance testing results, optimization actions taken, and strategic recommendations for the next period."
    },
    {
      question: "Can you integrate with our existing CRM/sales systems?",
      answer: "Yes. We integrate Meta Ads with most major CRMs (HubSpot, Salesforce, Zoho, etc.) to track leads through your entire sales funnel. This allows us to optimize for actual customers and revenue, not just leads, dramatically improving campaign ROI."
    },
    {
      question: "Do you provide creative design services?",
      answer: "Yes. Our in-house creative team produces ad copy, static images, video ads, and carousel creatives specifically designed for Meta's platform. All creative is systematically tested to identify top performers for your Canberra audience."
    },
    {
      question: "What if we've tried Facebook Ads before and they didn't work?",
      answer: "Most failed Meta Ads campaigns suffer from poor targeting, weak creative, inadequate tracking, or insufficient testing budgets. We audit your previous campaigns, identify what went wrong, and build a new strategy addressing those specific failures with proven tactics."
    },
    {
      question: "How often do you optimize our campaigns?",
      answer: "We monitor campaigns daily and make optimization adjustments 2-3 times per week based on performance data. Major strategic shifts happen during our comprehensive monthly reviews where we analyze all data and plan the next period's tests and scaling."
    },
    {
      question: "Can you scale our campaigns as we grow?",
      answer: "Absolutely. Our full-funnel approach is built for scale. As your campaigns prove profitable, we systematically increase budgets, expand to new audience segments, and layer in additional campaign objectives (awareness, consideration, conversion) to grow your revenue predictably."
    },
    {
      question: "What happens if we need to pause or cancel our campaigns?",
      answer: "You own all your campaign assets, creative, and audience data. We offer flexible month-to-month contracts (after an initial 3-month commitment), and if you need to pause, we'll export everything and provide a full handover. No lock-ins, no hostage-holding."
    }
  ];

  const relatedServices = [
    { name: "PPC Management", url: "/google-ads" },
    { name: "SEO Services", url: "/seo" },
    { name: "Meta Ads Agency", url: "/facebook-advertising" },
    { name: "Web Design", url: "/website-design" }
  ];

  const relatedCities = [
    { name: "Facebook Ads Adelaide", url: "/facebook-ads-adelaide" },
    { name: "Facebook Ads Melbourne", url: "/facebook-ads-melbourne" },
    { name: "Facebook Ads Brisbane", url: "/facebook-ads-brisbane" },
    { name: "Facebook Ads Hobart", url: "/facebook-ads-hobart" },
    { name: "Google Ads Newcastle", url: "/google-ads-newcastle" },
    { name: "Google Ads Melbourne", url: "/google-ads-melbourne" }
  ];

  const schemaMarkup = {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Odin Digital",
      "url": "https://growth-conduit-central.lovable.app/",
      "logo": "https://growth-conduit-central.lovable.app/logo.png",
      "description": "Performance-focused digital marketing agency specializing in high-ROI Meta Ads management in Canberra.",
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
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Odin Digital - Facebook Ads Agency Canberra",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Canberra",
        "addressRegion": "ACT",
        "addressCountry": "AU"
      },
      "areaServed": {
        "@type": "State",
        "name": "ACT"
      },
      "url": "https://growth-conduit-central.lovable.app/facebook-ads-canberra",
      "priceRange": "$$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      }
    },
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Facebook Ads Management",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Odin Digital - Facebook Ads Agency Canberra"
      },
      "areaServed": "Canberra",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Canberra Facebook Ads Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Surgical Meta Ads Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Advanced Conversion API Setup"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Creative Testing & Optimization"
            }
          }
        ]
      }
    },
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    review: {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Odin Digital - Facebook Ads Agency Canberra"
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
  };

  return (
    <>
      <Helmet>
        <title>Facebook Ads Agency Canberra | 540% ROI on Meta Ads | Odin Digital</title>
        <meta name="description" content="The performance-focused Facebook Ads Agency in Canberra. Stop wasting budget on ad fatigue and generalists. Get a proven 540% ROI on your Meta Ads spend." />
        <link rel="canonical" href="https://odindigital.com.au/services/facebook-ads-canberra" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup.organization)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup.localBusiness)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup.service)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup.faqPage)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup.review)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-32 px-6 overflow-hidden bg-gradient-subtle">
          {/* Floating circles decoration */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <nav className="text-sm text-muted-foreground mb-8">
              <a href="/" className="hover:text-primary">Home</a> &gt; 
              <a href="/services" className="hover:text-primary"> Services</a> &gt; 
              <a href="/facebook-advertising" className="hover:text-primary"> Meta Ads</a> &gt; 
              <span className="text-foreground"> Canberra</span>
            </nav>

            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6">
                Facebook Ads Agency Canberra
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-foreground/80 mb-8 leading-tight font-semibold">
                Tired of Generalist Agencies Wasting Your Budget in Canberra's Tight Market? We Deliver a Proven 540% ROI on Meta Ads.
              </p>

              <Button 
                size="xl" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto whitespace-normal break-words hyphens-auto leading-tight text-base sm:text-lg"
              >
                Get Your Free Meta Ads Audit →
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-16 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {socialProof.map((metric, index) => (
                <Card key={index} className="p-6 sm:p-8 text-center bg-background border-border hover:shadow-elegant transition-all">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-2">{metric.number}</div>
                  <div className="text-sm sm:text-base text-muted-foreground font-medium break-words">{metric.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Why Your Facebook Ads Are Failing in Canberra
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              The Canberra market presents unique challenges that generic strategies can't solve
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="p-6 sm:p-8 bg-background border-border hover:border-primary/20 transition-colors">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 break-words">{problem.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">{problem.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-6 bg-accent/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-16">
              Real Results from Canberra Businesses
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="p-6 sm:p-8 bg-background border-border flex flex-col">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-foreground mb-6 italic leading-relaxed flex-grow break-words">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
                </p>
                <div className="mt-auto">
                  <div className="font-bold text-foreground break-words">Liam C</div>
                  <div className="text-sm text-muted-foreground break-words">Krush Organics</div>
                </div>
              </Card>

              <Card className="p-6 sm:p-8 bg-background border-border flex flex-col">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-foreground mb-6 italic leading-relaxed flex-grow break-words">
                  "After wasting $20K with another agency, Odin rebuilt our entire Meta Ads strategy. Within 90 days, we went from $150 CPQL to $42 CPQL while doubling our lead volume. Game-changing results."
                </p>
                <div className="mt-auto">
                  <div className="font-bold text-foreground break-words">Sarah M</div>
                  <div className="text-sm text-muted-foreground break-words">Canberra Professional Services</div>
                </div>
              </Card>

              <Card className="p-6 sm:p-8 bg-background border-border flex flex-col">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-foreground mb-6 italic leading-relaxed flex-grow break-words">
                  "We thought Facebook Ads 'didn't work' for B2B in Canberra. Odin proved us wrong. They generated 47 qualified enterprise leads in 60 days with a 680% ROI. Absolutely worth every dollar."
                </p>
                <div className="mt-auto">
                  <div className="font-bold text-foreground break-words">James T</div>
                  <div className="text-sm text-muted-foreground break-words">ACT B2B Technology Company</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Our Canberra-Focused Meta Ads Services
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              Precision strategies built for ACT's unique market dynamics
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 sm:p-8 bg-background border-border hover:border-primary/20 transition-all group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 break-words">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">{service.description}</p>
                </Card>
              ))}
            </div>

            <div className="mt-8 sm:mt-12 text-center px-4">
              <p className="text-sm sm:text-base text-muted-foreground mb-6 break-words">
                Looking for other digital marketing services? We also offer{" "}
                <a href="/seo" className="text-primary hover:underline">SEO</a>,{" "}
                <a href="/google-ads" className="text-primary hover:underline">PPC</a>, and{" "}
                <a href="/website-design" className="text-primary hover:underline">Web Design</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-24 px-6 bg-accent/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-16">
              Why Canberra Businesses Choose Odin Digital
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {differentiators.map((item, index) => (
                <Card key={index} className="p-6 sm:p-8 bg-background border-border">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 break-words">{item.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Our Proven Meta Ads Process
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              A systematic approach to scaling your Canberra business with Meta Ads
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-primary/20 z-0" />
                  )}
                  <Card className="p-6 sm:p-8 bg-background border-border relative z-10 h-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-black mb-4 sm:mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 break-words">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">{step.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 px-6 bg-accent/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-16">
              The Odin Digital Difference
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              {whyChoose.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 sm:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 break-words">{item.title}</h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed break-words">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-6 bg-gradient-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAgMTBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6TTI2IDM0YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDEwYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 break-words">
              Ready to Stop Wasting Budget and Start Scaling in Canberra?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90 break-words">
              Get a free, no-obligation audit of your current Meta Ads performance (or competitor analysis if you're new). We'll show you exactly where you're bleeding budget and how we'd fix it.
            </p>
            <Button 
              size="xl"
              onClick={openForm}
              className="bg-white text-primary hover:bg-white/90 font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto whitespace-normal break-words hyphens-auto leading-tight"
            >
              Get Your Free Meta Ads Audit <ArrowRight className="ml-2 inline-block" />
            </Button>
          </div>
        </section>

        {/* Related Services & Cities */}
        <section className="py-16 px-6 bg-accent/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Related Services</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {relatedServices.map((service, index) => (
                    <a
                      key={index}
                      href={service.url}
                      className="text-sm sm:text-base text-primary hover:underline font-medium break-words"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Other Cities We Serve</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {relatedCities.map((city, index) => (
                    <a
                      key={index}
                      href={city.url}
                      className="text-sm sm:text-base text-primary hover:underline font-medium break-words"
                    >
                      {city.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16">
              Everything you need to know about Facebook Ads in Canberra
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground break-words">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-3 sm:p-4 bg-background border-t border-border md:hidden z-40">
          <Button 
            size="lg" 
            variant="cta"
            onClick={openForm}
            className="w-full whitespace-normal break-words hyphens-auto leading-tight text-sm sm:text-base"
          >
            <MessageSquare className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            Get Free Meta Ads Audit
          </Button>
        </div>


        <RelatedLocations 
          locations={getRelatedLocations("Canberra", "facebook-ads")}
          title="Facebook Ads Services in Other Australian Cities"
        />

      {/* Location Map */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <LocationMap 
            city="Canberra"
            coordinates={getLocationData("Canberra")?.coordinates || { lat: -35.2809, lng: 149.1300 }}
            address={getLocationData("Canberra")?.citations.address}
          />
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default FacebookAdsCanberra;
