import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { 
  Target, Users, RefreshCw, TrendingDown, Eye, MousePointerClick,
  Lightbulb, BarChart3, Repeat, Zap, PieChart, ShoppingCart,
  Mail, Video, Trophy, Lock, Shield, Store
} from "lucide-react";

const FacebookAdvertising = () => {
  const painPoints = [
    {
      icon: Users,
      title: "Audience Targeting Disaster",
      description: "Your ads are being shown to everyone, not just high-intent buyers. You're wasting budget on window shoppers who will never convert."
    },
    {
      icon: RefreshCw,
      title: "Creative Fatigue Crisis",
      description: "Your ads performed well initially, then died. No one is refreshing your creative or testing new angles. Your audience is ignoring you."
    },
    {
      icon: TrendingDown,
      title: "No-Funnel Problem",
      description: "Your agency is sending cold traffic straight to product pages and wondering why conversions are terrible. There's no nurturing, no warming up—just a hard sell to strangers."
    },
    {
      icon: Eye,
      title: "Retargeting Blindness",
      description: "97% of people who visit your site don't buy. Your agency isn't aggressively retargeting them, so they disappear forever."
    },
    {
      icon: TrendingDown,
      title: "Rising CPM Problem",
      description: "Your costs per thousand impressions keep rising, but your agency has no strategy to control them. They just keep spending more of your budget with diminishing returns."
    },
    {
      icon: MousePointerClick,
      title: "Landing Page Disaster",
      description: "Your Facebook ad is flawless, but the landing page it sends traffic to is a conversion killer. Slow load times, unclear messaging, no trust signals—budget wasted."
    }
  ];

  const solutions = [
    {
      icon: Target,
      title: "Audience Precision: Targeting Only High-Intent Buyers",
      description: "We don't waste your budget on everyone. We use advanced interest stacking, lookalike modeling, and behavioral data to target people who are ready to buy—not just browse."
    },
    {
      icon: Lightbulb,
      title: "Creative Testing & Refresh Strategy",
      description: "We are constantly testing new ad creatives, angles, and hooks. When an ad starts to fatigue, we replace it immediately. Your campaigns stay fresh and high-performing."
    },
    {
      icon: BarChart3,
      title: "Full-Funnel Strategy: Warming Up Cold Traffic Before the Sale",
      description: "We don't send cold traffic straight to a product page. We nurture them with valuable content first, build trust, then make the offer when they're ready."
    },
    {
      icon: Repeat,
      title: "Aggressive Retargeting: Capturing the 97% Who Didn't Buy",
      description: "Most visitors don't buy the first time. We hit them with retargeting campaigns that remind them why they were interested in the first place—and bring them back to convert."
    },
    {
      icon: Zap,
      title: "CPM Optimization: Controlling Costs While Scaling",
      description: "We actively manage your CPM through strategic ad placement, audience refinement, and creative rotation to keep costs low while maintaining reach and engagement."
    },
    {
      icon: Zap,
      title: "Landing Page Optimization (CRO)",
      description: "We don't just run ads—we ensure the pages those ads send traffic to are optimized for conversions. Fast load times, compelling copy, trust signals, and clear CTAs."
    },
    {
      icon: PieChart,
      title: "Transparent, ROI-Focused Reporting",
      description: "No more vanity metrics. We report on what matters: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Revenue Generated, and Customer Lifetime Value (CLV)."
    }
  ];

  const services = [
    {
      icon: Target,
      title: "Facebook & Instagram Ads Management",
      description: "Full-service campaign management across both platforms, designed to maximize reach, engagement, and conversions."
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Facebook Ads Management",
      description: "Specialized campaigns for online stores, including Dynamic Product Ads, Catalog Sales, and cart abandonment strategies."
    },
    {
      icon: Mail,
      title: "Lead Generation Campaigns",
      description: "Precision-targeted campaigns designed to capture high-quality leads for service-based businesses and B2B companies."
    },
    {
      icon: Video,
      title: "Video Ads & Storytelling",
      description: "Engaging video ad campaigns that tell your brand story, build trust, and drive action through compelling narratives."
    },
    {
      icon: Repeat,
      title: "Retargeting & Funnel Optimization",
      description: "Advanced retargeting strategies that capture the 97% of visitors who didn't convert on their first visit."
    },
    {
      icon: Target,
      title: "Facebook Ads Consulting & Training",
      description: "Expert consulting and training for businesses that want to understand and improve their Facebook advertising in-house."
    }
  ];

  const whyChooseUs = [
    {
      icon: Trophy,
      title: "Proven Track Record",
      description: "$574M+ in client revenue generated. 95% client retention rate. We consistently deliver results that matter."
    },
    {
      icon: Lock,
      title: "No Lock-In Contracts",
      description: "We earn your business every month. If we're not delivering ROI, you're free to leave. The risk is on us, not you."
    },
    {
      icon: Shield,
      title: "Full Transparency",
      description: "You own your ad accounts. You see every metric, every dollar spent, and every result. No black boxes, no hidden fees."
    },
    {
      icon: Store,
      title: "E-Commerce Expertise",
      description: "We specialize in e-commerce Facebook advertising, with proven strategies for scaling online stores profitably."
    }
  ];

  const faqs = [
    {
      question: "How much do facebook ads management services cost?",
      answer: "Facebook ads management cost varies depending on your ad spend and complexity. Most agencies charge 10-20% of ad spend or a flat monthly fee ($1,000 - $5,000+). Our facebook ads services start at $1,500/month for management, with transparent pricing based on your budget and goals."
    },
    {
      question: "How much budget do I need for Facebook ads?",
      answer: "The required budget depends on your industry, target CPA, and goals. For most Australian businesses, we recommend starting with $2,000 - $5,000 per month in ad spend to allow for sufficient data collection and testing. Our team will analyze your market during your free audit and recommend a precise, efficient budget."
    },
    {
      question: "How long does it take to see results from facebook advertising services?",
      answer: "Unlike SEO, Facebook ads deliver immediate results. You will see traffic and leads within days of launch. The first 4-6 weeks are dedicated to data collection, testing, and optimization. Significant improvements in CPA and ROAS typically occur within 2-3 months as our team refines the campaigns."
    },
    {
      question: "What is the difference between Facebook Ads and Instagram Ads?",
      answer: "Facebook and Instagram are both owned by Meta, and ads are managed through the same platform (Meta Ads Manager). We typically run campaigns across both platforms simultaneously to maximize reach and performance. Our facebook ads management services include Instagram as standard."
    },
    {
      question: "Do you offer a performance guarantee?",
      answer: "We offer the best guarantee in the industry: No Lock-In Contracts. Our focus on ROAS is our guarantee. If we are not generating a positive return on your ad spend, you are free to leave at any time. We put the risk on us, not you."
    },
    {
      question: "How much does Facebook advertising cost per lead?",
      answer: "Facebook advertising cost varies widely depending on your industry, target audience, and competition. On average, Australian businesses pay $10-$50 per lead. Our team will provide a detailed cost estimate during your free audit."
    },
    {
      question: "Do you work with e-commerce businesses?",
      answer: "Yes. We specialize in facebook ads for ecommerce businesses, using advanced strategies like Dynamic Product Ads, Catalog Sales campaigns, and cart abandonment retargeting to maximize revenue for online stores."
    },
    {
      question: "Can you help with landing pages?",
      answer: "Yes. Our facebook advertising services include Landing Page Optimization (CRO). Your ad is only as good as the page it sends traffic to. We ensure your landing pages are perfectly aligned with your ad copy and designed to maximize conversions."
    },
    {
      question: "What metrics do you report on?",
      answer: "We report on the metrics that matter: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Quality, Revenue Generated, and Customer Lifetime Value (CLV). We move beyond vanity metrics like impressions and engagement to focus on what actually drives your business forward."
    },
    {
      question: "How is your facebook ads management different from others?",
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
        "description": "Performance-focused Facebook ads services in Australia. We specialize in expert Facebook ads management focusing on ROAS, profitable scaling, and predictable growth. $574M+ in client revenue. No lock-in contracts.",
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
        "serviceType": "Facebook Ads Services",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "description": "Expert Facebook ads services for Australian businesses, focusing on maximum Return on Ad Spend (ROAS), profitable scaling, and predictable growth through strategic campaign management.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Facebook Ads Services",
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
                "name": "E-Commerce Facebook Ads Management"
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
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Facebook Ads Consulting & Training"
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
        "itemReviewed": {
          "@type": "Service",
          "name": "Facebook Advertising Services",
          "provider": {
            "@type": "Organization",
            "name": "Odin Digital"
          }
        },
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
        <title>Facebook Ads Services Australia | Expert Management & ROAS | Odin Digital</title>
        <meta name="description" content="Stop wasting money on Facebook ads that don't convert. Odin Digital provides expert facebook ads services focused on maximum ROAS, profitable scaling, and predictable growth. No lock-in contracts." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <>
      <Header />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-white py-12 md:py-32 px-4">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          </div>

          {/* Floating Circles - Homepage Design Elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-primary/20 rounded-full animate-float" />
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border-2 border-accent/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '6s' }} />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-slide-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-charcoal leading-tight tracking-tight mb-6 break-words">
                Facebook Ads Services
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal/90 mb-8 leading-tight break-words">
                Stop Wasting Money on Facebook Ads That Don't Convert. Start Scaling with Expert Facebook Ads Management That Delivers Real ROI.
              </p>
              <div className="text-base sm:text-lg md:text-xl text-charcoal/70 mb-10 space-y-4 leading-relaxed font-light break-words">
                <p className="font-semibold text-charcoal">
                  The Facebook Ads Services Australia Trusts for Maximum ROAS, Profitable Scaling, and Predictable Growth.
                </p>
                <p className="font-semibold text-charcoal">
                  Partner with Odin Digital and Turn Your Facebook Ads Budget into Verified Revenue with Expert Campaign Management.
                </p>
                <p>
                  You've been sold a lie by agencies that prioritize vanity metrics over real revenue. They report thousands of impressions, likes, and reach, but your bottom line hasn't moved. You're not alone—most Australian businesses are wasting money on poorly managed Facebook ads that look good on paper but deliver nothing tangible.
                </p>
                <p>
                  At Odin Digital, we cut through the noise and focus on what actually matters: Return on Ad Spend (ROAS), Cost Per Acquisition (CPA), and Revenue Growth. We don't celebrate engagement. We celebrate profit.
                </p>
                <p className="font-semibold text-charcoal">
                  No generic campaigns. No vanity metrics. No wasted budget. Just Facebook ads management that drives measurable revenue.
                </p>
              </div>
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto whitespace-normal break-words text-center text-sm sm:text-base md:text-lg px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 shadow-glow">
                <Link to="/contact">Get Your FREE Facebook Ads Audit →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-12 md:py-20 bg-muted/30 px-4">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 break-words">
                Why Most Facebook Ads Services Fail to Deliver Real Results
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto break-words">
                Australian businesses waste millions every year on facebook ads management that looks good on paper but delivers nothing to the bottom line. Here's why most providers fail.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {painPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <Card key={index} className="p-6 bg-background border-l-4 border-l-accent">
                      <Icon className="w-8 h-8 text-accent mb-4" />
                      <h3 className="text-xl font-bold mb-3 text-foreground">{point.title}</h3>
                      <p className="text-muted-foreground">{point.description}</p>
                    </Card>
                  );
                })}
              </div>
              <div className="text-center mt-10">
                <Button asChild size="lg" className="w-full sm:w-auto whitespace-normal break-words text-center">
                  <Link to="/contact">Stop the Budget Bleed: Talk to a Facebook Ads Expert →</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 break-words">
                How Our Facebook Ads Services Turn Ad Spend into Predictable Revenue
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto break-words">
                We provide facebook ads management that eliminates waste and builds campaigns designed to scale profitably.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <Card key={index} className="p-6 bg-background hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                      <Icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </Card>
                  );
                })}
              </div>
              <div className="text-center mt-10">
                <Button asChild size="lg" className="w-full sm:w-auto whitespace-normal break-words text-center">
                  <Link to="/contact">See Our Facebook Ads Management Packages →</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-20 bg-muted/30 px-4">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 break-words">
                Our Facebook Ads Services: Built to Scale Your Business
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto break-words">
                As a leading facebook advertising agency, we offer comprehensive facebook ads services designed to dominate your market.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-background">
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </Card>
                  );
                })}
              </div>
              <div className="text-center mt-12">
                <Button asChild size="lg" className="w-full sm:w-auto whitespace-normal break-words text-center">
                  <Link to="/contact">Ready for Expert Facebook Ads Management? Contact Us →</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 break-words">
                Why Australian Businesses Choose Our Facebook Ads Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto break-words">
                We are not a generalist agency that dabbles in Facebook ads. We are specialists who understand the unique challenges of scaling profitably on Meta platforms.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card key={index} className="p-6 bg-background hover:shadow-lg transition-shadow text-center">
                      <Icon className="w-10 h-10 text-primary mb-4 mx-auto" />
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  );
                })}
              </div>
              <div className="text-center mt-10">
                <Button asChild size="lg" className="w-full sm:w-auto whitespace-normal break-words text-center">
                  <Link to="/contact">Talk to a Facebook Ads Specialist →</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20 px-4 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 break-words">
                FAQs: Your Questions About Facebook Ads Services Answered
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-8 sm:mb-12 break-words">
                We know you have specific concerns about ad spend and agency performance. Here are clear, honest answers.
              </p>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border rounded-lg px-6 bg-background"
                  >
                    <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline break-words whitespace-normal">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="text-center mt-10">
                <Button asChild size="lg" className="w-full sm:w-auto whitespace-normal break-words text-center">
                  <Link to="/contact">Book Your Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-primary text-white relative overflow-hidden px-4">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 break-words">
                Ready to Stop Wasting Money and Start Scaling Profitably?
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90 leading-relaxed break-words">
                Stop guessing with your Facebook ads budget. Start working with facebook ads services experts who deliver precision, transparency, and profit.
              </p>
              <p className="text-sm sm:text-base md:text-lg mb-10 opacity-90 break-words">
                Book a free consultation with one of our Facebook ads specialists. We'll review your current campaigns (if you have any), identify opportunities, and show you exactly how we can help.
              </p>
              <Button 
                asChild
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto whitespace-normal break-words text-center text-lg px-8 py-6"
              >
                <Link to="/contact">Claim Your FREE Facebook Ads Audit →</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      </>
    </>
  );
};

export default FacebookAdvertising;
