import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { 
  Target, TrendingDown, Zap, Users, MousePointerClick, 
  BarChart3, Eye, RefreshCw, Lightbulb, FileText,
  ShoppingCart, Mail, Video, Repeat, Trophy,
  Shield, Lock, PieChart, Store
} from "lucide-react";

const FacebookAdvertising = () => {
  const { openForm } = useMarketingForm();

  const painPoints = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Vanity Metrics Trap",
      description: "Your agency reports thousands of impressions, likes, and reach but your revenue hasn't moved. You're paying for attention, not sales."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Audience Targeting Disaster",
      description: "Your ads are being shown to everyone, not just high-intent buyers. You're wasting budget on window shoppers who will never convert."
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Creative Fatigue Crisis",
      description: "Your ads performed well initially, then died. No one is refreshing your creative or testing new angles. Your audience is ignoring you."
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "No-Funnel Problem",
      description: "Your agency is sending cold traffic straight to product pages and wondering why conversions are terrible. There's no nurturing, no warming up—just a hard sell to strangers."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Retargeting Blindness",
      description: "97% of people who visit your site don't buy. Your agency isn't aggressively retargeting them, so they disappear forever."
    },
    {
      icon: <MousePointerClick className="w-8 h-8" />,
      title: "Landing Page Disaster",
      description: "Your Facebook ad is flawless, but the landing page it sends traffic to is a conversion killer. Slow load times, unclear messaging, no trust signals—budget wasted."
    }
  ];

  const solutions = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Audience Precision: Targeting Only High-Intent Buyers",
      description: "We don't waste your budget on everyone. We use advanced interest stacking, lookalike modeling, and behavioral data to target people who are ready to buy—not just browse."
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Creative Testing & Refresh Strategy",
      description: "We are constantly testing new ad creatives, angles, and hooks. When an ad starts to fatigue, we replace it immediately. Your campaigns stay fresh and high-performing."
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Full-Funnel Strategy: Warming Up Cold Traffic Before the Sale",
      description: "We don't send cold traffic straight to a product page. We nurture them with valuable content first, build trust, then make the offer when they're ready."
    },
    {
      icon: <Repeat className="w-10 h-10" />,
      title: "Aggressive Retargeting: Capturing the 97% Who Didn't Buy",
      description: "Most visitors don't buy the first time. We hit them with retargeting campaigns that remind them why they were interested in the first place—and bring them back to convert."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Landing Page Optimization (CRO)",
      description: "We don't just run ads—we ensure the pages those ads send traffic to are optimized for conversions. Fast load times, compelling copy, trust signals, and clear CTAs."
    },
    {
      icon: <PieChart className="w-10 h-10" />,
      title: "Transparent, ROI-Focused Reporting",
      description: "No more vanity metrics. We report on what matters: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Revenue Generated, and Customer Lifetime Value (CLV)."
    }
  ];

  const services = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Facebook & Instagram Ads Management",
      description: "Full-service campaign management across both platforms, designed to maximize reach, engagement, and conversions."
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-Commerce Facebook Ads",
      description: "Specialized campaigns for online stores, including Dynamic Product Ads, Catalog Sales, and cart abandonment strategies."
    },
    {
      icon: <Mail className="w-12 h-12" />,
      title: "Lead Generation Campaigns",
      description: "Precision-targeted campaigns designed to capture high-quality leads for service-based businesses and B2B companies."
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Video Ads & Storytelling",
      description: "Engaging video ad campaigns that tell your brand story, build trust, and drive action through compelling narratives."
    },
    {
      icon: <Repeat className="w-12 h-12" />,
      title: "Retargeting & Funnel Optimization",
      description: "Advanced retargeting strategies that capture the 97% of visitors who didn't convert on their first visit."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "Proven Track Record",
      description: "$574M+ in client revenue generated. 95% client retention rate. We consistently deliver results that matter."
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "No Lock-In Contracts",
      description: "We earn your business every month. If we're not delivering ROI, you're free to leave. The risk is on us, not you."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Full Transparency",
      description: "You own your ad accounts. You see every metric, every dollar spent, and every result. No black boxes, no hidden fees."
    },
    {
      icon: <Store className="w-10 h-10" />,
      title: "E-Commerce Expertise",
      description: "We specialize in e-commerce Facebook advertising, with proven strategies for scaling online stores profitably."
    }
  ];

  const faqs = [
    {
      question: "How much budget do I need for Facebook ads?",
      answer: "The required budget depends on your industry, target CPA, and goals. For most Australian businesses, we recommend starting with $2,000 - $5,000 per month to allow for sufficient data collection and testing. Our facebook advertising agency team will analyze your market during your free audit and recommend a precise, efficient budget."
    },
    {
      question: "How long does it take to see results from Facebook ads?",
      answer: "Unlike SEO, Facebook ads deliver immediate results. You will see traffic and leads within days of launch. The first 4-6 weeks are dedicated to data collection, testing, and optimization. Significant improvements in CPA and ROAS typically occur within 2-3 months as our fb ads agency team refines the campaigns."
    },
    {
      question: "What is the difference between Facebook Ads and Instagram Ads?",
      answer: "Facebook and Instagram are both owned by Meta, and ads are managed through the same platform (Meta Ads Manager). We typically run campaigns across both platforms simultaneously to maximize reach and performance. Our facebook marketing agency team will determine the optimal platform mix for your business."
    },
    {
      question: "Do you offer a performance guarantee?",
      answer: "We offer the best guarantee in the industry: No Lock-In Contracts. Our focus on ROAS is our guarantee. If we are not generating a positive return on your ad spend, you are free to leave at any time. We put the risk on us, not you."
    },
    {
      question: "How much does Facebook advertising cost?",
      answer: "Facebook advertising cost varies widely depending on your industry, target audience, and competition. On average, Australian businesses pay $1-$5 per click and $10-$50 per lead. Our team will provide a detailed cost estimate during your free audit."
    },
    {
      question: "Do you work with e-commerce businesses?",
      answer: "Yes. We specialize in facebook ads agency for ecommerce businesses, using advanced strategies like Dynamic Product Ads, Catalog Sales campaigns, and cart abandonment retargeting to maximize revenue for online stores."
    },
    {
      question: "Can you help with landing pages?",
      answer: "Yes. Our service includes Landing Page Optimization (CRO). Your ad is only as good as the page it sends traffic to. We ensure your landing pages are perfectly aligned with your ad copy and designed to maximize conversions."
    },
    {
      question: "What metrics do you report on?",
      answer: "We report on the metrics that matter: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Quality, Revenue Generated, and Customer Lifetime Value (CLV). We move beyond vanity metrics like impressions and engagement to focus on what actually drives your business forward."
    },
    {
      question: "Do you offer affordable Facebook advertising?",
      answer: "Yes. We offer flexible pricing based on your budget and goals. Our affordable facebook advertising packages start at $2,000/month in ad spend, with transparent agency fees. We focus on maximizing ROI, not maximizing our retainer."
    },
    {
      question: "How is your best facebook marketing agency different from others?",
      answer: "We are obsessed with efficiency and ROI. We don't just manage your campaigns—we treat your budget like our own. We actively test, optimize, and refine your campaigns weekly to ensure you stay ahead of the competition. Our 95% client retention rate is proof that we consistently deliver value, month after month."
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
        "description": "Performance-focused Facebook advertising agency in Australia. We specialize in Facebook and Instagram ads management, focusing on ROAS and e-commerce growth. $574M+ in client revenue. No lock-in contracts.",
        "founder": {
          "@type": "Person",
          "name": "Lucas Durante"
        },
        "slogan": "No Lock-In Contracts. Just Results.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+61-XXX-XXX-XXX",
          "contactType": "Sales",
          "areaServed": "AU",
          "availableLanguage": "English"
        },
        "sameAs": []
      },
      {
        "@type": "Service",
        "serviceType": "Facebook Advertising",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "description": "Expert Facebook and Instagram advertising services for Australian businesses, focusing on maximum Return on Ad Spend (ROAS) and e-commerce growth.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Facebook Advertising Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Facebook & Instagram Ads Management"
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
                "name": "Lead Generation Campaigns"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Video Ads & Storytelling"
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
        <title>Facebook Advertising Agency Australia | Meta Ads Experts | Odin Digital</title>
        <meta name="description" content="Stop burning money on Facebook ads. Odin Digital is the Facebook marketing agency Australia trusts for maximum ROAS. E-commerce expertise, funnel strategy, and no lock-in contracts." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://growth-conduit-central.lovable.app/facebook-advertising" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background overflow-x-hidden">
        <Header />

        {/* Hero Section */}
        <section className="relative isolate overflow-visible md:overflow-hidden flex items-center bg-background pt-28 pb-16 md:pt-0 md:pb-0 md:min-h-[85vh]">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          </div>

          {/* Floating Circles */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float blur-xl hidden md:block"></div>
          <div className="absolute bottom-32 right-20 w-40 h-40 bg-secondary/10 rounded-full animate-float blur-xl hidden md:block" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/10 rounded-full animate-float blur-xl hidden md:block" style={{ animationDelay: '4s' }}></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-16 md:py-24 text-center">
            <div className="space-y-6 md:space-y-8 animate-slide-up break-words overflow-visible">
              <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-black text-foreground leading-snug break-words">
                Facebook Advertising Agency
              </h1>
              
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground/90 leading-snug break-words max-w-4xl mx-auto">
                Stop Burning Money on Facebook Ads That Don't Convert. Start Scaling Profitably with Campaigns That Actually Work.
              </p>

              <div className="space-y-3 md:space-y-4 text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                <p className="font-semibold text-foreground break-words">
                  The Facebook Marketing Agency Australia Trusts for Maximum ROAS and Predictable Growth.
                </p>
                <p className="font-semibold text-foreground break-words">
                  Partner with Odin Digital and Turn Your Facebook Ads Budget into Verified Revenue.
                </p>
                <p className="break-words">
                  You've been sold a lie by Facebook advertising agencies that prioritize vanity metrics over real revenue. They report thousands of impressions, likes, and reach, but your bottom line hasn't moved. You're not alone—most Australian businesses are wasting money on poorly managed Facebook ads that look good on paper but deliver nothing tangible.
                </p>
                <p className="break-words">
                  At Odin Digital, we are the facebook marketing agency that cuts through the noise and focuses on what actually matters: Return on Ad Spend (ROAS), Cost Per Acquisition (CPA), and Revenue Growth. We don't celebrate engagement. We celebrate profit.
                </p>
              </div>

              <div className="pt-4 md:pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="cta" 
                  size="xl"
                  onClick={openForm}
                  className="w-full sm:w-auto text-sm md:text-base"
                >
                  Get Your FREE Facebook Ads Strategy Session →
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="pt-6 md:pt-8 flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm font-bold text-foreground/80 break-words">
                <div>$574M+ in Client Revenue</div>
                <div className="hidden sm:block">•</div>
                <div>95% Client Retention</div>
                <div className="hidden sm:block">•</div>
                <div>No Lock-In Contracts</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 md:py-24 px-4 sm:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-snug break-words">
                Why Most Facebook Advertising Agencies Fail to Deliver Real Results
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto break-words">
                Australian businesses waste millions every year on facebook ads australia campaigns that look good on paper but deliver nothing to the bottom line. Here's why most agencies fail.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {painPoints.map((point, index) => (
                <Card key={index} className="hover:shadow-glow transition-all duration-300 border-2">
                  <CardHeader>
                    <div className="text-primary mb-4">{point.icon}</div>
                    <CardTitle className="text-lg md:text-xl break-words">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-muted-foreground break-words">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={openForm}
                className="w-full sm:w-auto text-sm md:text-base whitespace-normal"
              >
                Stop the Budget Bleed: Talk to a Facebook Ads Expert →
              </Button>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 md:py-24 px-4 sm:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-snug break-words">
                How We Turn Facebook Ads into a Predictable Revenue Engine
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto break-words">
                We are the best facebook marketing agency that eliminates waste and builds campaigns designed to scale profitably.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {solutions.map((solution, index) => (
                <Card key={index} className="hover:shadow-primary transition-all duration-300">
                  <CardHeader>
                    <div className="text-primary mb-4">{solution.icon}</div>
                    <CardTitle className="text-base md:text-lg break-words">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-muted-foreground break-words">{solution.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={openForm}
                className="w-full sm:w-auto text-sm md:text-base whitespace-normal"
              >
                See Our Facebook Ads Management Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 px-4 sm:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-snug break-words">
                Our Facebook Advertising Services: Built to Scale Your Business
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto break-words">
                As a leading digital agency facebook wide, we offer a full spectrum of Meta advertising services designed to dominate your market.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8 md:mb-12">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-glow transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="text-primary mb-4 flex justify-center">{service.icon}</div>
                    <CardTitle className="text-base md:text-lg break-words">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground break-words">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={openForm}
                className="w-full sm:w-auto text-sm md:text-base whitespace-normal"
              >
                Ready for a Custom Facebook Ads Strategy? Contact Us →
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 px-4 sm:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-snug break-words">
                Why Australian Businesses Choose Odin Digital for Facebook Advertising
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto break-words">
                We are not a generalist agency that dabbles in Facebook ads. We are specialists who understand the unique challenges of scaling profitably on Meta platforms.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="hover:shadow-primary transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="text-primary mb-4 flex justify-center">{reason.icon}</div>
                    <CardTitle className="text-base md:text-lg break-words">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground break-words">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={openForm}
                className="w-full sm:w-auto text-sm md:text-base whitespace-normal"
              >
                Talk to a Facebook Ads Specialist →
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 px-4 sm:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-snug break-words">
                FAQs: Your Questions About Facebook Advertising Answered
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground break-words">
                We know you have specific concerns about ad spend and agency performance. Here are clear, honest answers.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-4 md:px-6">
                  <AccordionTrigger className="text-left text-sm md:text-base font-semibold hover:text-primary py-4 break-words">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground break-words">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-8 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden mb-20 md:mb-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black break-words">
              Ready to Stop Burning Money and Start Scaling Profitably?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl break-words">
              Stop guessing with your facebook advertising budget. Start working with facebook ads expert specialists who deliver precision, transparency, and profit.
            </p>
            <Button 
              variant="default" 
              size="xl"
              onClick={openForm}
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 w-full sm:w-auto text-sm md:text-base whitespace-normal"
            >
              Claim Your FREE Facebook Ads Strategy Session →
            </Button>
          </div>
        </section>

        <Footer />
        <SideTab />
      </div>
    </>
  );
};

export default FacebookAdvertising;
