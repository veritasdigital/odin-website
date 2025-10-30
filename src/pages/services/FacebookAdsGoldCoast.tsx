import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Target, TrendingUp, Users, Lightbulb, BarChart3, Layout, MapPin, Sun, Zap, CheckCircle2, Shield, Trophy, MessageSquare, Plane, Home, Store, ShoppingCart, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import { useMarketingForm } from "@/contexts/MarketingFormContext";

const FacebookAdsGoldCoast = () => {
  const { openForm } = useMarketingForm();

  const painPoints = [
    {
      icon: MapPin,
      title: "Geographic Waste",
      description: "Your ads are being shown to people hundreds of kilometers away who will never buy from your Gold Coast business."
    },
    {
      icon: Sun,
      title: "Seasonal Blindness",
      description: "They run the same campaigns year-round, ignoring Gold Coast's tourism peaks and quiet periods."
    },
    {
      icon: Target,
      title: "No Local Strategy",
      description: "Generic campaigns that don't account for the unique Gold Coast market dynamics."
    },
    {
      icon: BarChart3,
      title: "Vanity Metrics",
      description: "They report on impressions and clicks instead of Revenue, ROAS, and Customer Acquisition Cost."
    },
    {
      icon: TrendingUp,
      title: "Rising CPM",
      description: "Your Cost Per 1,000 Impressions keeps climbing, but they have no strategy to combat it."
    },
    {
      icon: Layout,
      title: "Landing Page Disaster",
      description: "They send traffic to pages that aren't designed to convert, wasting your entire budget."
    }
  ];

  const solutions = [
    {
      icon: MapPin,
      title: "Hyper-Local Targeting: Eliminating Geographic Waste",
      description: "We use precise geo-targeting to ensure your ads reach only your target Gold Coast suburbs, eliminating wasted spend on irrelevant audiences."
    },
    {
      icon: Sun,
      title: "Seasonal Campaign Optimization: Maximizing ROI Year-Round",
      description: "We adjust campaigns based on Gold Coast's tourism patterns—summer peaks, school holidays, winter quiet periods—to maximize ROI throughout the year."
    },
    {
      icon: Users,
      title: "Audience Precision: Targeting Only High-Intent Buyers",
      description: "We use advanced audience segmentation to target only people ready to buy, not tire-kickers."
    },
    {
      icon: Lightbulb,
      title: "Creative Testing & Refresh Strategy",
      description: "We continuously test and refresh ad creative to combat ad fatigue and maintain low CPMs."
    },
    {
      icon: TrendingUp,
      title: "Full-Funnel Strategy: Warming Up Cold Traffic Before the Sale",
      description: "We build strategic funnels that educate and nurture prospects before asking for the sale."
    },
    {
      icon: Layout,
      title: "Landing Page Optimization (CRO)",
      description: "We ensure your landing pages are perfectly aligned with ad copy and designed to maximize conversions."
    },
    {
      icon: BarChart3,
      title: "Transparent, ROI-Focused Reporting",
      description: "We report on what matters: Cost Per Acquisition, ROAS, Lead Quality, and Revenue Generated."
    }
  ];

  const services = [
    {
      icon: MessageSquare,
      title: "Facebook & Instagram Ads Management for Gold Coast Businesses",
      description: "Complete campaign management across Meta platforms, optimized for the Gold Coast market."
    },
    {
      icon: Plane,
      title: "Tourism & Hospitality Facebook Ads",
      description: "Specialized campaigns for hotels, restaurants, attractions, and tours targeting both locals and tourists."
    },
    {
      icon: Home,
      title: "Real Estate Facebook Ads",
      description: "High-performing campaigns for Gold Coast real estate agents and property developers."
    },
    {
      icon: Store,
      title: "Local Services Facebook Ads",
      description: "Lead generation campaigns for local service businesses targeting Gold Coast customers."
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Facebook Ads",
      description: "Revenue-focused campaigns for online stores with advanced product catalog strategies."
    },
    {
      icon: RotateCcw,
      title: "Retargeting & Funnel Optimization",
      description: "Strategic retargeting campaigns that convert warm traffic into paying customers."
    }
  ];

  const whyChoose = [
    {
      icon: Trophy,
      title: "Proven Track Record",
      description: "$574M+ in verified client revenue. We deliver results, not excuses."
    },
    {
      icon: Shield,
      title: "No Lock-In Contracts",
      description: "We earn your business every single month. If we don't deliver, you're free to leave."
    },
    {
      icon: CheckCircle2,
      title: "Full Transparency",
      description: "You own your ad account, data, and creative. Complete visibility into every dollar spent."
    },
    {
      icon: MapPin,
      title: "Gold Coast Market Expertise",
      description: "We understand the unique challenges and opportunities of the Gold Coast market."
    }
  ];

  const faqs = [
    {
      question: "How much do facebook ads cost gold coast businesses?",
      answer: "Facebook ads gold coast costs vary depending on your industry, competition, and goals. Most Gold Coast businesses invest $2,000 - $5,000 per month in ad spend, plus management fees. Our team will provide a detailed quote during your free audit."
    },
    {
      question: "How do you target Gold Coast customers specifically?",
      answer: "We use hyper-local geo-targeting to ensure your ads are shown only to people in your target Gold Coast suburbs. We also separate campaigns for Gold Coast locals vs. tourists/visitors based on your business type."
    },
    {
      question: "Do you adjust campaigns for tourism seasonality?",
      answer: "Yes. We adjust your campaigns based on Gold Coast's tourism patterns (summer peaks, school holidays, winter quiet periods) to maximize ROI year-round."
    },
    {
      question: "How long does it take to see results?",
      answer: "Facebook ads deliver immediate results. You will see traffic and leads within days of launch. The first 4-6 weeks are dedicated to data collection, testing, and optimization. Significant improvements typically occur within 2-3 months."
    },
    {
      question: "Do you work with tourism and hospitality businesses?",
      answer: "Yes. We specialize in facebook ads gold coast for tourism and hospitality businesses (hotels, restaurants, attractions, tours), using seasonal strategies and tourist targeting."
    },
    {
      question: "Can you help with landing pages?",
      answer: "Yes. Our service includes Landing Page Optimization (CRO). We ensure your landing pages are perfectly aligned with your ad copy and designed to maximize conversions."
    },
    {
      question: "What metrics do you report on?",
      answer: "We report on Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Quality, Revenue Generated, and Geographic Performance (breaking down results by Gold Coast suburb)."
    },
    {
      question: "Do you offer a performance guarantee?",
      answer: "We offer the best guarantee in the industry: No Lock-In Contracts. If we are not generating a positive return on your ad spend, you are free to leave at any time."
    },
    {
      question: "How is your facebook advertising gold coast different from others?",
      answer: "We are obsessed with efficiency and ROI. We understand the unique Gold Coast market and tailor our strategies accordingly. We actively test, optimize, and refine your campaigns weekly."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Yes. We work with Gold Coast businesses of all sizes, offering flexible pricing and strategies designed to maximize ROI."
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Performance-focused Facebook ads agency in Gold Coast. We specialize in expert Facebook ads management for Gold Coast businesses, focusing on ROAS, hyper-local targeting, and seasonal optimization. $574M+ in client revenue.",
        "founder": {
          "@type": "Person",
          "name": "Lucas Durante"
        },
        "slogan": "No Lock-In Contracts. Just Results.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+61-XXX-XXX-XXX",
          "contactType": "Sales",
          "areaServed": "Gold Coast, QLD",
          "availableLanguage": "English"
        },
        "sameAs": []
      },
      {
        "@type": "LocalBusiness",
        "name": "Odin Digital - Gold Coast Facebook Ads",
        "image": "https://growth-conduit-central.lovable.app/logo.png",
        "@id": "https://growth-conduit-central.lovable.app/facebook-ads-gold-coast",
        "url": "https://growth-conduit-central.lovable.app/facebook-ads-gold-coast",
        "telephone": "+61-XXX-XXX-XXX",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "",
          "addressLocality": "Gold Coast",
          "addressRegion": "QLD",
          "postalCode": "",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -28.0167,
          "longitude": 153.4000
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
        "sameAs": []
      },
      {
        "@type": "Service",
        "serviceType": "Facebook Ads Management",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "City",
          "name": "Gold Coast",
          "containedIn": {
            "@type": "State",
            "name": "Queensland"
          }
        },
        "description": "Expert Facebook ads management for Gold Coast businesses, focusing on maximum Return on Ad Spend (ROAS), hyper-local targeting, and seasonal optimization.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Gold Coast Facebook Ads Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Facebook & Instagram Ads Management for Gold Coast Businesses"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tourism & Hospitality Facebook Ads"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Real Estate Facebook Ads"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local Services Facebook Ads"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-Commerce Facebook Ads"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Retargeting & Funnel Optimization"
              }
            }
          ]
        }
      },
      {
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
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Fabienne Costa"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
        "publisher": {
          "@type": "Organization",
          "name": "Odin Digital"
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Facebook Ads Gold Coast | Expert Management & ROAS | Odin Digital</title>
        <meta name="description" content="Stop wasting your Gold Coast business budget on Facebook ads that don't convert. Odin Digital provides expert facebook ads gold coast management for maximum ROAS and profitable growth. Tourism & local expertise." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-24 md:pb-0">
          {/* Floating circles - pulled from home page design */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
            <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" />
          </div>

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent break-words">
                Facebook Ads Gold Coast
              </h1>
              
              <p className="hero-sub-headline text-xl sm:text-2xl md:text-4xl font-bold text-foreground leading-tight break-words">
                Stop Wasting Your Gold Coast Business Budget on Facebook Ads That Don't Convert. Start Scaling with Expert Facebook Ads Management Built for the Gold Coast Market.
              </p>

              <div className="space-y-4 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto break-words">
                <p className="text-xl font-semibold text-foreground">
                  The Facebook Ads Agency Gold Coast Businesses Trust for Maximum ROAS and Profitable Growth.
                </p>
                <p className="text-xl font-semibold text-foreground">
                  Partner with Odin Digital and Turn Your Facebook Ads Budget into Verified Revenue in the Competitive Gold Coast Market.
                </p>
                <p>
                  Most Gold Coast businesses waste thousands of dollars every month on Facebook ads that generate clicks but not customers. Why? Because their agency is running generic campaigns designed for Sydney or Melbourne—not the unique Gold Coast market.
                </p>
                <p>
                  At Odin Digital, we specialize in <strong>facebook ads gold coast</strong> management that eliminates geographic waste, accounts for seasonal tourism fluctuations, and targets only high-intent buyers ready to purchase.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button 
                  size="xl" 
                  variant="cta"
                  onClick={openForm}
                  className="text-base sm:text-lg whitespace-normal break-words"
                >
                  Get Your FREE Gold Coast Facebook Ads Audit →
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">$574M+</div>
                  <div className="text-sm text-muted-foreground mt-2">Client Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">95%</div>
                  <div className="text-sm text-muted-foreground mt-2">Client Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">540%</div>
                  <div className="text-sm text-muted-foreground mt-2">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">0</div>
                  <div className="text-sm text-muted-foreground mt-2">Lock-In Contracts</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 break-words">
                  Why Most Facebook Ads Agencies Fail Gold Coast Businesses
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Gold Coast businesses waste millions every year on facebook advertising gold coast that looks good on paper but delivers nothing to the bottom line. Here's why most agencies fail.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {painPoints.map((point, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <point.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold break-words">{point.title}</h3>
                      <p className="text-muted-foreground break-words">{point.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button 
                  size="xl" 
                  variant="cta"
                  onClick={openForm}
                  className="whitespace-normal break-words"
                >
                  Stop the Budget Bleed: Talk to a Gold Coast Facebook Ads Expert →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 break-words">
                  How We Dominate Facebook Ads for Gold Coast Businesses
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We provide facebook ads management gold coast that eliminates waste and builds campaigns designed to scale profitably in the unique Gold Coast market.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
                {solutions.map((solution, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold break-words">{solution.title}</h3>
                      <p className="text-muted-foreground break-words">{solution.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button 
                  size="xl" 
                  variant="cta"
                  asChild
                  className="whitespace-normal break-words"
                >
                  <Link to="/contact">See Our Gold Coast Facebook Ads Packages →</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 break-words">
                  Our Gold Coast Facebook Ads Services
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  As a leading facebook advertising agency gold coast, we offer comprehensive Facebook ads services designed to dominate the Gold Coast market.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold break-words">{service.title}</h3>
                      <p className="text-muted-foreground break-words">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button 
                  size="xl" 
                  variant="cta"
                  asChild
                  className="whitespace-normal break-words"
                >
                  <Link to="/contact">Ready for Expert Gold Coast Facebook Ads Management? Contact Us →</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 break-words">
                  Why Gold Coast Businesses Choose Odin Digital
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We are not a generalist agency that dabbles in Facebook ads. We are specialists who understand the unique challenges of the Gold Coast market.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChoose.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6 space-y-4 text-center">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold break-words">{item.title}</h3>
                      <p className="text-muted-foreground break-words">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button 
                  size="xl" 
                  variant="cta"
                  onClick={openForm}
                  className="whitespace-normal break-words"
                >
                  Talk to a Gold Coast Facebook Ads Specialist →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 break-words">
                  FAQs: Your Questions About Gold Coast Facebook Ads Answered
                </h2>
                <p className="text-xl text-muted-foreground">
                  We know you have specific concerns about cost, targeting, and results. Here are clear, honest answers.
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6 border overflow-hidden">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline break-words">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground break-words">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white break-words">
                Ready to Stop Wasting Money and Start Dominating the Gold Coast Market?
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Stop guessing with your Facebook ads budget. Start working with facebook ads gold coast experts who deliver precision, transparency, and profit.
              </p>
              <Button 
                size="xl" 
                variant="secondary"
                onClick={openForm}
                className="text-base sm:text-lg whitespace-normal break-words"
              >
                Claim Your FREE Gold Coast Facebook Ads Audit →
              </Button>
            </div>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t z-40 md:hidden">
          <Button 
            size="lg" 
            variant="cta" 
            className="w-full whitespace-normal break-words"
            onClick={openForm}
          >
            Get FREE Audit →
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default FacebookAdsGoldCoast;