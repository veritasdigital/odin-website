import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MapPin,
  AlertTriangle,
  Target,
  TrendingUp,
  Eye,
  MousePointerClick,
  BarChart3,
  RefreshCw,
  Search,
  Repeat,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";

const GoogleAdsAdelaide = () => {
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Performance-focused Google Ads agency in Adelaide. We specialize in PPC management for Adelaide businesses, focusing on ROI and budget efficiency. $574M+ in client revenue. No lock-in contracts.",
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
        "@type": "LocalBusiness",
        "@id": "https://growth-conduit-central.lovable.app/google-ads-adelaide",
        "name": "Odin Digital - Google Ads Agency Adelaide",
        "description": "Adelaide's top PPC management company. Expert Google Ads services focusing on local targeting and maximum ROI.",
        "url": "https://growth-conduit-central.lovable.app/google-ads-adelaide",
        "telephone": "+61-XXX-XXX-XXX",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Adelaide",
          "addressRegion": "SA",
          "postalCode": "5000",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-34.9285",
          "longitude": "138.6007"
        },
        "areaServed": {
          "@type": "City",
          "name": "Adelaide",
          "containedIn": {
            "@type": "State",
            "name": "South Australia"
          }
        }
      },
      {
        "@type": "Service",
        "serviceType": "PPC Management",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "City",
          "name": "Adelaide"
        },
        "description": "Expert Pay-Per-Click (PPC) and Google Ads management services for businesses in Adelaide, SA, focusing on maximum Return on Ad Spend (ROAS).",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "PPC Management Adelaide Services",
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
                "name": "PPC Advertising Adelaide"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Landing Page Optimization"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much budget do I need for Google Ads in Adelaide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The required budget depends on your industry competition and target CPA. For most Adelaide businesses, we recommend starting with $1,500 - $3,000 per month to allow for sufficient data collection and optimization. Our ppc management adelaide team will analyze your market during your free audit and recommend a precise, efficient budget."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from ppc adelaide campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike SEO, PPC delivers immediate results. You will see traffic and leads within days of launch. The first 4-6 weeks are dedicated to data collection and optimization. Significant improvements in CPA and ROAS typically occur within 2-3 months as our ppc experts adelaide refine the campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Google Ads and adwords adelaide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google Ads is the current name for the platform previously known as Google AdWords. They are the same thing. Whether you call it adwords adelaide or Google Ads, we are the google ads agency adelaide that manages it all."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer an adwords management adelaide service with a performance guarantee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer the best guarantee in the industry: No Lock-In Contracts. Our focus on ROAS is our guarantee. If we are not generating a positive return on your ad spend, you are free to leave at any time. We put the risk on us, not you."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I choose Odin Digital over a large national google agency adelaide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Large national agencies often apply generic strategies and are slow to adapt. We are a lean team of ppc experts adelaide who provide hyper-focused, personalized service. We understand the Adelaide market, we are agile, and we focus on your ROAS, not our retainer."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manage other pay per click adelaide platforms like Meta Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We are a full-service ppc agency adelaide and manage campaigns across Google, Meta (Facebook/Instagram), LinkedIn, and other high-value platforms. We create a holistic ppc advertising adelaide strategy for maximum reach and ROI."
            }
          },
          {
            "@type": "Question",
            "name": "How do you prevent my budget from being wasted on clicks from outside Adelaide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use precise geographic targeting (radius targeting, suburb targeting, or metro-wide targeting) to ensure your ads are only shown to people within your exact service area. We also use IP exclusions and location bid adjustments to maximize efficiency."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help me with my landing pages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our service includes Landing Page Optimization (CRO). Your ad is only as good as the page it sends traffic to. We ensure your landing pages are perfectly aligned with your ad copy and designed to maximize conversions."
            }
          },
          {
            "@type": "Question",
            "name": "What metrics do you report on?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We report on the metrics that matter: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Quality, and Revenue Generated. We move beyond vanity metrics like impressions and clicks to focus on what actually drives your business forward."
            }
          },
          {
            "@type": "Question",
            "name": "How is your adwords management company adelaide different from others?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are obsessed with efficiency and ROI. We don't just manage your campaigns—we treat your budget like our own. Our 95% client retention rate is proof that we consistently deliver value, month after month."
            }
          }
        ]
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
        <title>Google Ads Agency Adelaide | PPC Management Experts | Odin Digital</title>
        <meta name="description" content="Stop wasting budget on Google Ads. Odin Digital is the PPC agency Adelaide trusts for maximum ROI. Precision targeting, transparent reporting, and no lock-in contracts. Get your free audit." />
        <link rel="canonical" href="https://growth-conduit-central.lovable.app/google-ads-adelaide" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <SideTab />
        <MarketingFormModal />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Adelaide Google Ads Agency: Stop Wasting Your Budget. Start Driving Sales.
            </h1>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6 text-primary">
              The PPC Agency Adelaide Businesses Trust for Maximum ROI and Zero Wasted Spend.
            </h2>
            <p className="text-base md:text-xl mb-4 text-muted-foreground max-w-3xl mx-auto">
              Partner with Odin Digital and Turn Your Google Ads Budget into Verified Revenue.
            </p>
            <p className="text-sm md:text-lg mb-8 text-muted-foreground max-w-3xl mx-auto">
              If you're an Adelaide business owner throwing thousands into Google Ads each month with little to show for it, you're not alone. Most PPC agencies treat your budget like a bottomless pit, padding their retainers while your ROAS remains abysmal. We're different. We're a precision-focused adwords management adelaide team that treats your ad spend like our own—because your success is our reputation.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-sm md:text-lg px-4 md:px-8 py-4 md:py-6 bg-accent hover:bg-accent/90">
                Get Your FREE Adelaide PPC Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary">$574M+</div>
                <div className="text-sm text-muted-foreground">Client Revenue</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Client Retention</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Agitation Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                The Problem: Why Most Adwords Management Adelaide Agencies Fail
              </h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Adelaide businesses have unique challenges that generic national adwords agency adelaide providers don't understand.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4 p-6 bg-card rounded-lg border border-border">
                <MapPin className="w-12 h-12 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Geographic Waste: Paying for Clicks from Melbourne and Sydney</h3>
                  <p className="text-muted-foreground">
                    National agencies run broad campaigns that bleed your budget on clicks from people who will never step foot in Adelaide. If you're a local service business—plumber, dentist, lawyer—you need Adelaide-only traffic. Generic campaigns waste 30-50% of your budget on irrelevant geography.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-card rounded-lg border border-border">
                <AlertTriangle className="w-12 h-12 text-warning flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Set It and Forget It (Then Send You a Bill)</h3>
                  <p className="text-muted-foreground">
                    Most adwords management company adelaide teams set up your campaigns once, collect their monthly retainer, and ignore you. Meanwhile, your CPA balloons, your ads become stale, and your competitors outbid you. You deserve an agency that actively optimizes your campaigns weekly.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-card rounded-lg border border-border">
                <Eye className="w-12 h-12 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Vanity Metrics Over Real ROI</h3>
                  <p className="text-muted-foreground">
                    Your current google agency adelaide sends you monthly reports showing "10,000 impressions!" and "500 clicks!"—but they conveniently ignore the fact that you got 2 leads and zero sales. Impressions don't pay the bills. Revenue does.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-card rounded-lg border border-border">
                <Target className="w-12 h-12 text-warning flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Keyword Mismatch: Targeting Searches That Never Convert</h3>
                  <p className="text-muted-foreground">
                    They bid on broad, high-volume keywords that sound impressive but attract tire-kickers and freebie-seekers. Meanwhile, your actual buyers—the ones searching high-intent, long-tail keywords—are clicking on your competitor's ads.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" className="text-sm md:text-base px-4 md:px-6 py-4 bg-accent hover:bg-accent/90">
                  Stop the Budget Bleed: Talk to a PPC Expert <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                The Odin Digital Solution: Precision-Focused PPC Management Adelaide
              </h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
                We are the adwords management adelaide team that eliminates waste and maximizes every dollar of your ad spend.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Hyper-Local Targeting: Adelaide-Only Traffic</h3>
                <p className="text-muted-foreground">
                  We use radius targeting, suburb-level targeting, and IP exclusions to ensure 100% of your clicks come from people who can actually buy from you. No more wasted spend on interstate browsers.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Conversion-First Campaign Structure</h3>
                <p className="text-muted-foreground">
                  We build campaigns around high-intent keywords that drive leads and sales—not vanity traffic. We obsess over your Cost Per Acquisition (CPA) and Return on Ad Spend (ROAS), not impressions.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <RefreshCw className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Active, Weekly Optimization</h3>
                <p className="text-muted-foreground">
                  Our ppc experts adelaide actively manage your campaigns every week—testing new ad copy, adjusting bids, adding negative keywords, and killing underperforming ads. We never set it and forget it.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <BarChart3 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Transparent, ROI-Focused Reporting</h3>
                <p className="text-muted-foreground">
                  You'll see exactly where every dollar goes and how many leads/sales it generates. We report on what matters: CPA, ROAS, Revenue, and Lead Quality. No fluff. No spin. Just results.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" className="text-sm md:text-base px-4 md:px-6 py-4 bg-accent hover:bg-accent/90">
                  See Our Adelaide PPC Management Packages <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                Our Google Ads Services: Built for Adelaide Businesses
              </h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
                As a leading google agency adelaide wide, we offer a full spectrum of PPC services designed to dominate your local market.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Search className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Google Ads Management</h3>
                <p className="text-muted-foreground">
                  Full-service management of Search, Display, Shopping, and YouTube campaigns. We handle strategy, execution, and ongoing optimization to maximize your ROI.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <MousePointerClick className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Pay Per Click Adelaide</h3>
                <p className="text-muted-foreground">
                  Expert PPC management across all major platforms (Google, Meta, LinkedIn) with a laser focus on Adelaide-specific targeting and local market nuances.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Landing Page Optimization (CRO)</h3>
                <p className="text-muted-foreground">
                  Your ad gets the click, but your landing page gets the sale. We optimize your pages for maximum conversion rates using A/B testing and CRO best practices.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Repeat className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Retargeting Campaigns</h3>
                <p className="text-muted-foreground">
                  Most visitors don't convert on their first visit. We set up retargeting campaigns to bring them back and close the sale, maximizing your customer lifetime value.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" className="text-sm md:text-base px-4 md:px-6 py-4 bg-accent hover:bg-accent/90">
                  Ready for a Custom Google Ads Strategy? Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                FAQs: Your Questions About Google Ads in Adelaide Answered
              </h2>
              <p className="text-base md:text-xl text-muted-foreground">
                We know you have specific concerns about ad spend and agency performance. Here are clear, honest answers.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How much budget do I need for Google Ads in Adelaide?
                </AccordionTrigger>
                <AccordionContent>
                  The required budget depends on your industry competition and target CPA. For most Adelaide businesses, we recommend starting with $1,500 - $3,000 per month to allow for sufficient data collection and optimization. Our ppc management adelaide team will analyze your market during your free audit and recommend a precise, efficient budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  How long does it take to see results from ppc adelaide campaigns?
                </AccordionTrigger>
                <AccordionContent>
                  Unlike SEO, PPC delivers immediate results. You will see traffic and leads within days of launch. The first 4-6 weeks are dedicated to data collection and optimization. Significant improvements in CPA and ROAS typically occur within 2-3 months as our ppc experts adelaide refine the campaigns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  What is the difference between Google Ads and adwords adelaide?
                </AccordionTrigger>
                <AccordionContent>
                  Google Ads is the current name for the platform previously known as Google AdWords. They are the same thing. Whether you call it adwords adelaide or Google Ads, we are the google ads agency adelaide that manages it all.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Do you offer an adwords management adelaide service with a performance guarantee?
                </AccordionTrigger>
                <AccordionContent>
                  We offer the best guarantee in the industry: No Lock-In Contracts. Our focus on ROAS is our guarantee. If we are not generating a positive return on your ad spend, you are free to leave at any time. We put the risk on us, not you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Why should I choose Odin Digital over a large national google agency adelaide?
                </AccordionTrigger>
                <AccordionContent>
                  Large national agencies often apply generic strategies and are slow to adapt. We are a lean team of ppc experts adelaide who provide hyper-focused, personalized service. We understand the Adelaide market, we are agile, and we focus on your ROAS, not our retainer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Do you manage other pay per click adelaide platforms like Meta Ads?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. We are a full-service ppc agency adelaide and manage campaigns across Google, Meta (Facebook/Instagram), LinkedIn, and other high-value platforms. We create a holistic ppc advertising adelaide strategy for maximum reach and ROI.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  How do you prevent my budget from being wasted on clicks from outside Adelaide?
                </AccordionTrigger>
                <AccordionContent>
                  We use precise geographic targeting (radius targeting, suburb targeting, or metro-wide targeting) to ensure your ads are only shown to people within your exact service area. We also use IP exclusions and location bid adjustments to maximize efficiency.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  Can you help me with my landing pages?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Our service includes Landing Page Optimization (CRO). Your ad is only as good as the page it sends traffic to. We ensure your landing pages are perfectly aligned with your ad copy and designed to maximize conversions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">
                  What metrics do you report on?
                </AccordionTrigger>
                <AccordionContent>
                  We report on the metrics that matter: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Quality, and Revenue Generated. We move beyond vanity metrics like impressions and clicks to focus on what actually drives your business forward.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left">
                  How is your adwords management company adelaide different from others?
                </AccordionTrigger>
                <AccordionContent>
                  We are obsessed with efficiency and ROI. We don't just manage your campaigns—we treat your budget like our own. Our 95% client retention rate is proof that we consistently deliver value, month after month.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Stop Wasting Budget and Start Driving Sales?
            </h2>
            <p className="text-base md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Stop guessing with your ppc adelaide budget. Start working with ppc experts adelaide who deliver precision, transparency, and profit.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-sm md:text-lg px-4 md:px-8 py-4 md:py-6">
                Claim Your FREE Adelaide PPC Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        {showStickyButton && (
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border md:hidden z-50 shadow-lg">
            <Link to="/contact" className="block">
              <Button size="lg" className="w-full text-sm px-4 py-3 bg-accent hover:bg-accent/90">
                Get Your FREE Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default GoogleAdsAdelaide;
