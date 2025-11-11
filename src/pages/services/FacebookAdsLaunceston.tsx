import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Target, TrendingUp, Users, Calendar, RefreshCw, BarChart3, MapPin, Zap, Shield, Award, Phone, Globe, DollarSign, Megaphone, PenTool } from "lucide-react";

const FacebookAdsLaunceston = () => {
  const { openForm } = useMarketingForm();

  const metrics = [
    { label: "Verified Client Revenue", value: "$574M+", icon: TrendingUp },
    { label: "Average Client ROAS", value: "5.4x", icon: DollarSign },
    { label: "Client Retention Rate", value: "95%", icon: Award },
    { label: "Campaigns Launched", value: "283+", icon: Zap },
  ];

  const painPoints = [
    {
      title: "Small Pond Saturation",
      description: "You've exhausted the local Launceston market. Every competitor is fighting over the same 70,000 people. Your ads are getting repetitive, your cost-per-click is rising, and your customer acquisition is plateauing.",
      icon: MapPin,
    },
    {
      title: "The Profitability Squeeze",
      description: "Because the local market is small and highly competitive, you're forced to compete on price, which crushes your margins. You need to find higher-margin customers outside of Launceston who haven't been hammered by your competitors.",
      icon: DollarSign,
    },
    {
      title: "Drowned Out by National Noise",
      description: "National brands with huge budgets dominate the Facebook feed. Your local-only targeting means you're always the small fish. You need a sophisticated, scalable campaign that can compete at a national level.",
      icon: Megaphone,
    },
  ];

  const testimonials = [
    {
      quote: "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
      author: "Evan Tsaboukos",
      company: "Founder, Imperial Wealth (Melbourne)",
    },
    {
      quote: "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
      author: "Fabienne Costa",
      company: "Founder, YCL Jewels (Gold Coast)",
    },
    {
      quote: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
      author: "Liam C",
      company: "Founder, Krush Organics (Sydney)",
    },
  ];

  const services = [
    {
      title: "Advanced Audience & Market Targeting",
      description: "We leverage Meta's powerful geo-targeting, interest layering, and lookalike audience tools to find your ideal customers across Melbourne, Sydney, Brisbane, and beyond. We're not guessing—we're using data-driven insights to identify untapped markets and high-intent buyers.",
      icon: Target,
    },
    {
      title: "High-Performance Creative & Copywriting",
      description: "We produce thumb-stopping video ads, carousels, and static creatives paired with conversion-focused copy. Our creative team continuously tests and iterates to beat your control ads and lower your cost-per-acquisition.",
      icon: PenTool,
    },
    {
      title: "E-commerce & Lead Generation Funnels",
      description: "Whether you're selling products or generating high-value leads, we build conversion-optimized landing pages and ad funnels specifically designed to turn cold traffic into paying customers at a profitable ROAS.",
      icon: Zap,
    },
    {
      title: "Advanced Conversion Tracking & Attribution",
      description: "We implement the Meta Pixel, Conversion API, and multi-touch attribution to track every dollar you spend back to actual revenue. You'll see exactly which campaigns, ad sets, and creatives are driving profitable results.",
      icon: BarChart3,
    },
  ];

  const differentiators = [
    {
      title: "We Build National Campaigns",
      description: "Unlike local agencies stuck in the Launceston bubble, we specialize in helping Tasmanian businesses scale nationally. We know how to find profitable mainland audiences and craft messaging that resonates beyond the island.",
      icon: Globe,
    },
    {
      title: "We Are Obsessed with ROI",
      description: "We're not here to inflate your brand awareness metrics. Our entire focus is driving measurable, profitable revenue. Every campaign decision is backed by data and ROAS optimization, not creative fluff.",
      icon: DollarSign,
    },
    {
      title: "Rapid Creative Testing",
      description: "We combat ad fatigue by producing and testing 10-20 new ad variations every month. This keeps your campaigns fresh, your engagement high, and your cost-per-result low.",
      icon: RefreshCw,
    },
    {
      title: "No Lock-In Contracts",
      description: "We don't trap you in 12-month contracts. Our 95% client retention rate is proof that our results speak for themselves. You stay because we deliver, not because you're locked in.",
      icon: Award,
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Deep Dive & Audience Discovery",
      description: "We analyze your business, your current customer data, and your competitors to identify your highest-value mainland audiences. We map out the exact demographics, interests, and behaviors of your ideal customer.",
    },
    {
      number: "02",
      title: "Campaign Build & Creative Production",
      description: "We build conversion-optimized campaign structures in Meta Ads Manager and produce high-performance ad creatives designed to stop the scroll and drive action.",
    },
    {
      number: "03",
      title: "Launch & Data Collection",
      description: "We launch your campaigns with a strategic test budget to collect performance data and identify winning ad sets, audiences, and creatives.",
    },
    {
      number: "04",
      title: "Relentless Optimisation & Scaling",
      description: "We continuously optimize your campaigns—killing losers, scaling winners, and testing new creatives—to maximize your ROAS and sustainably grow your revenue.",
    },
  ];

  const faqs = [
    {
      question: "Can a Launceston business effectively use Facebook Ads to reach mainland customers?",
      answer: "Absolutely. Facebook's powerful targeting tools allow us to specifically target your ideal customers in cities like Melbourne, Sydney, and Brisbane with customized messaging, effectively erasing the geographic barrier.",
    },
    {
      question: "How are Facebook Ads more profitable than just boosting posts?",
      answer: "Boosting posts offers very limited targeting and optimization options. A professional campaign in Meta Ads Manager allows for advanced audience creation, A/B testing, conversion tracking, and sophisticated funnel optimization, leading to a much higher Return on Ad Spend (ROAS).",
    },
    {
      question: "How much should my Launceston business spend on Facebook Ads?",
      answer: "We recommend starting with a test budget you are comfortable with (e.g., $1,500-$3,000/month). The goal is to prove a profitable ROAS quickly, then scale your investment based on the data. Many of our clients started small and now spend $10K-$50K/month profitably.",
    },
    {
      question: "What industries do you work with in Launceston?",
      answer: "We work with ambitious B2C and B2B businesses across industries—e-commerce brands, professional services, tourism operators, local manufacturers selling nationally, health and wellness clinics, and high-ticket service providers. If you have a scalable offer and want to grow beyond Launceston, we can help.",
    },
    {
      question: "How long does it take to see results from Facebook Ads?",
      answer: "You'll start seeing data within the first week, but we typically need 4-6 weeks to collect enough performance data to make aggressive optimization decisions. Most clients see a clear ROAS improvement within 60-90 days and significant revenue growth within 6 months.",
    },
    {
      question: "Do you require a long-term contract?",
      answer: "No. We work on a month-to-month basis. Our 95% client retention rate is proof that our results keep clients with us, not binding contracts.",
    },
    {
      question: "What's the difference between Facebook Ads and Google Ads?",
      answer: "Google Ads targets people actively searching for your product or service (high-intent), while Facebook Ads targets people based on their interests and behaviors (demand generation). Both are powerful, but Facebook Ads are particularly effective for building brand awareness, launching new products, and scaling e-commerce brands to cold audiences.",
    },
    {
      question: "How do you target the right mainland audience for my business?",
      answer: "We use a combination of demographic filters (age, income, location), interest targeting (what they engage with on Facebook), behavioral data (recent purchase activity), and lookalike audiences (people who resemble your existing best customers). We also layer exclusions to filter out low-value traffic.",
    },
    {
      question: "Will you create the ad creative, or do I need to provide it?",
      answer: "We can do both. We have an in-house creative team that produces high-converting video ads, static images, and carousel ads. If you have existing assets (product photos, brand videos), we'll optimize and repurpose them. If not, we'll create everything from scratch.",
    },
    {
      question: "How do you track if Facebook Ads are actually generating sales?",
      answer: "We implement the Meta Pixel and Conversion API on your website to track every action—add to cart, purchase, form submission, phone call. For e-commerce, we track revenue directly. For lead generation, we implement call tracking and CRM integration to tie ad spend back to closed deals.",
    },
    {
      question: "Can you help with the landing pages and funnels, or just the ads?",
      answer: "We build complete conversion funnels. If your current landing page or website isn't optimized for paid traffic, we'll either optimize what you have or build a new funnel designed specifically to convert Facebook traffic at a high rate.",
    },
    {
      question: "Why should I choose Odin Digital over a mainland agency?",
      answer: "We understand the unique challenge of being a Tasmanian business trying to compete nationally. We've helped multiple Launceston and Tasmanian businesses scale to the mainland profitably. You get the strategic expertise of a top-tier mainland agency with the local insight of a team that understands your market.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Facebook Ads Launceston | National ROI Agency | Odin Digital</title>
        <meta 
          name="description" 
          content="High-ROI Facebook Ads in Launceston to drive national growth. We help ambitious Tasmanian businesses acquire mainland customers profitably. No lock-in contracts." 
        />
        <meta name="keywords" content="Facebook Ads Launceston, Meta Ads Launceston, Facebook Advertising Launceston, Instagram Ads Launceston, Social Media Advertising Launceston" />
        <link rel="canonical" href="https://growth-conduit-central.lovable.app/facebook-ads-launceston" />
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Odin Digital",
            "url": "https://growth-conduit-central.lovable.app/",
            "logo": "https://growth-conduit-central.lovable.app/logo.png",
            "description": "Performance-focused Meta Ads agency providing high-ROI campaigns for Launceston businesses seeking national growth.",
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
          })}
        </script>

        {/* WebPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Facebook Ads Launceston - National Growth Meta Ads Agency",
            "url": "https://growth-conduit-central.lovable.app/facebook-ads-launceston",
            "inLanguage": "en-AU",
            "description": "Specialist Facebook & Instagram advertising for Launceston businesses. We build national ad campaigns to help you break out of the local market and achieve scalable, profitable growth.",
            "about": {
              "@type": "Service",
              "name": "Facebook Ads Launceston"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://growth-conduit-central.lovable.app/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Facebook Advertising",
                  "item": "https://growth-conduit-central.lovable.app/facebook-advertising"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Facebook Ads Launceston"
                }
              ]
            }
          })}
        </script>

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Meta Ads Agency",
            "provider": {
              "@type": "Organization",
              "name": "Odin Digital"
            },
            "areaServed": {
              "@type": "City",
              "name": "Launceston"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Facebook Ads Services for Launceston",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Advanced Audience & Market Targeting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "High-Performance Creative & Copywriting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce & Lead Generation Funnels"
                  }
                }
              ]
            }
          })}
        </script>

        {/* FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>

        {/* Review Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "Service",
              "name": "Odin Digital - Facebook Ads Launceston"
            },
            "author": {
              "@type": "Person",
              "name": "Evan Tsaboukos"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
            "publisher": {
              "@type": "Organization",
              "name": "Imperial Wealth"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <SideTab />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
            {/* Floating circles from homepage */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block mb-6">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Meta Ads Agency • Launceston
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                  Facebook Ads Launceston
                </h1>
                
                <p className="hero-sub-headline text-xl md:text-2xl lg:text-3xl mb-8 text-muted-foreground font-medium leading-relaxed">
                  Stop Shouting into the Local Void. Start a Profitable Conversation with Australia.
                  <br />
                  <span className="text-foreground">We Build High-ROI Facebook & Instagram Ad Campaigns That Find Your Ideal Customers on the Mainland and Turn Them into High-Margin Revenue.</span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    onClick={openForm}
                    size="xl" 
                    variant="cta"
                  >
                    Get Your FREE Strategy Session →
                  </Button>
                  <a href="tel:1300123456" className="text-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">1300 123 456</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof Metrics */}
          <section className="py-16 bg-accent/5">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {metrics.map((metric, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-glow transition-all duration-300 border-border/50 bg-card">
                    <metric.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-foreground">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Problem-Agitation Section */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  If You're a Launceston Business Owner, You Already Know the Problem
                </h2>
                <p className="text-lg text-muted-foreground">
                  The local market is too small. Your growth is capped. And competing on price is killing your margins.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                {painPoints.map((point, index) => (
                  <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300 border-border/50 bg-card">
                    <point.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-foreground">{point.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                  </Card>
                ))}
              </div>

              <div className="max-w-3xl mx-auto text-center mt-12">
                <p className="text-lg font-semibold text-foreground mb-6">
                  Here's the truth: If you're serious about scaling your business, you need to break out of Launceston and acquire profitable customers from the mainland.
                </p>
                <p className="text-lg text-muted-foreground">
                  And the most profitable, scalable way to do that is with strategically-built Facebook & Instagram ad campaigns designed to reach high-value mainland audiences.
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 md:py-20 bg-accent/5">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Real Results from Real Clients
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We've helped ambitious businesses across Australia scale profitably with high-ROI Meta Ads campaigns.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="p-6 bg-card border-border/50 hover:shadow-glow transition-all duration-300">
                    <div className="mb-4">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-primary">★</span>
                        ))}
                      </div>
                      <p className="text-muted-foreground italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-10">
                <Button 
                  onClick={openForm}
                  size="lg" 
                  variant="cta"
                >
                  Start Your National Growth Campaign →
                </Button>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  The 4 Pillars of a High-ROI Facebook Ads Campaign
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We don't just "boost posts." We build sophisticated, data-driven campaigns designed to find profitable customers and scale revenue.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {services.map((service, index) => (
                  <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300 border-border/50 bg-card">
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Differentiators Section */}
          <section className="py-16 md:py-20 bg-accent/5">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Why Launceston Businesses Choose Odin Digital
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We're not your typical local agency. We specialize in helping Tasmanian businesses scale nationally with profitable Meta Ads campaigns.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {differentiators.map((diff, index) => (
                  <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300 border-border/50 bg-card">
                    <diff.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-foreground">{diff.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{diff.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Our Proven 4-Step Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  From strategy to scale, we handle every aspect of your Meta Ads campaigns.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {processSteps.map((step, index) => (
                  <Card key={index} className="p-6 relative overflow-hidden hover:shadow-glow transition-all duration-300 border-border/50 bg-card">
                    <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                      {step.number}
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-10">
                <Button 
                  onClick={openForm}
                  size="lg" 
                  variant="cta"
                >
                  Book Your FREE Strategy Session →
                </Button>
              </div>
            </div>
          </section>

          {/* Why Choose Us (Expanded) */}
          <section className="py-16 md:py-20 bg-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Why Partner with Odin Digital for Your Facebook Ads?
                  </h2>
                </div>

                <div className="space-y-8">
                  <Card className="p-8 border-border/50 bg-card">
                    <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                      <Globe className="w-8 h-8 text-primary" />
                      We Specialize in National Expansion for Regional Businesses
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Most Launceston marketing agencies are stuck in the local mindset. They understand local market dynamics, but they have no experience helping businesses scale beyond Tasmania. We're different.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We've helped multiple Tasmanian businesses—from e-commerce brands to professional service firms—successfully break into mainland markets using sophisticated Meta Ads targeting. We know how to craft messaging that resonates with Sydney, Melbourne, and Brisbane audiences. We know how to identify high-value lookalike audiences on the mainland who behave like your best local customers. And we know how to scale profitably.
                    </p>
                  </Card>

                  <Card className="p-8 border-border/50 bg-card">
                    <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                      <DollarSign className="w-8 h-8 text-primary" />
                      Our Obsession is Profitable Revenue, Not Vanity Metrics
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We don't care about "brand awareness," "engagement," or "reach." We care about one thing: generating a profitable Return on Ad Spend (ROAS) that drives real revenue for your business.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Every campaign decision we make is backed by conversion data. We track pixel events, revenue attribution, and customer lifetime value to ensure every dollar you invest generates a measurable return. Our clients typically see a 5x+ ROAS, and we scale aggressively once we prove profitability.
                    </p>
                  </Card>

                  <Card className="p-8 border-border/50 bg-card">
                    <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                      <RefreshCw className="w-8 h-8 text-primary" />
                      We Combat Creative Fatigue with Constant Testing
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      One of the biggest challenges for businesses targeting smaller audiences (like Launceston) is creative fatigue. Your audience sees the same ad over and over, and they tune out. Your cost-per-click skyrockets, and your campaigns become unprofitable.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We solve this by producing and testing 10-20 new ad variations every single month. We constantly refresh your creatives, test new hooks, and iterate based on performance data. This keeps your campaigns fresh, your engagement high, and your costs low—even when targeting regional or niche audiences.
                    </p>
                  </Card>

                  <Card className="p-8 border-border/50 bg-card">
                    <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                      <Award className="w-8 h-8 text-primary" />
                      No Lock-In Contracts. Results Speak for Themselves.
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We don't trap you in 12-month contracts because we don't need to. Our client retention rate is 95% because we deliver results that make our clients money.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      You're free to leave at any time. But when you're seeing a 5x ROAS and consistent revenue growth month after month, you won't want to. That's the Odin Digital difference.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-16 md:py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-95"></div>
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Break Out of the Launceston Market and Scale Nationally?
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Book your FREE 30-minute strategy session with our team. We'll analyze your business, identify your highest-value mainland audiences, and show you exactly how we'd build a profitable Facebook Ads campaign to scale your revenue.
                </p>
                <p className="text-lg mb-8 font-semibold text-white">
                  No obligation. No sales pitch. Just a data-driven roadmap to national growth.
                </p>
                <Button 
                  onClick={openForm}
                  size="xl" 
                  className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg font-bold"
                >
                  Claim Your FREE Strategy Session Now →
                </Button>
              </div>
            </div>
          </section>

          {/* Related Service & Location Links */}
          <section className="py-16 bg-accent/5">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
                  Related Services & Locations
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">Other Services</h3>
                    <div className="space-y-2">
                      <a href="/seo-agency" className="block text-primary hover:underline">SEO Agency</a>
                      <a href="/google-ads" className="block text-primary hover:underline">Google Ads Management</a>
                      <a href="/web-design-launceston" className="block text-primary hover:underline">Web Design Launceston</a>
                      <a href="/services/email-marketing" className="block text-primary hover:underline">Email Marketing</a>
                      <a href="/instagram-advertising" className="block text-primary hover:underline">Instagram Advertising</a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">Other Tasmanian Locations</h3>
                    <div className="space-y-2">
                      <a href="/seo-launceston" className="block text-primary hover:underline">SEO Launceston</a>
                      <a href="/facebook-ads-hobart" className="block text-primary hover:underline">Facebook Ads Hobart</a>
                      <a href="/google-ads-hobart" className="block text-primary hover:underline">Google Ads Hobart</a>
                      <a href="/seo-hobart" className="block text-primary hover:underline">SEO Hobart</a>
                      <a href="/web-design-hobart" className="block text-primary hover:underline">Web Design Hobart</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
                  Frequently Asked Questions
                </h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="text-center mt-10">
                  <Button 
                    onClick={openForm}
                    size="lg" 
                    variant="cta"
                  >
                    Get Started Today →
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Mobile Sticky CTA */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-40">
            <Button 
              onClick={openForm}
              className="w-full bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 text-sm"
              size="lg"
            >
              <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="line-clamp-2">Book Free Strategy Session</span>
            </Button>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FacebookAdsLaunceston;
