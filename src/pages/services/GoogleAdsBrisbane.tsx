import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SideTab } from '@/components/SideTab';
import { useMarketingForm } from '@/contexts/MarketingFormContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, TrendingUp, Eye, MapPin, BarChart, DollarSign, Shield, RefreshCw, Zap, Award } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { Link } from "react-router-dom";

const GoogleAdsBrisbane = () => {
  const { openForm } = useMarketingForm();
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Performance-focused Google Ads agency in Brisbane. We specialize in PPC management for Brisbane businesses, focusing on ROI and competitive intelligence. $574M+ in client revenue. No lock-in contracts.",
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
        "@id": "https://growth-conduit-central.lovable.app/google-ads-brisbane",
        "name": "Odin Digital - Google Ads Agency Brisbane",
        "description": "Brisbane's top PPC management company. Expert Google Ads services focusing on local targeting and maximum ROI.",
        "url": "https://growth-conduit-central.lovable.app/google-ads-brisbane",
        "telephone": "+61-XXX-XXX-XXX",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Brisbane",
          "addressRegion": "QLD",
          "postalCode": "4000",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-27.4698",
          "longitude": "153.0251"
        },
        "areaServed": {
          "@type": "City",
          "name": "Brisbane",
          "containedIn": {
            "@type": "State",
            "name": "Queensland"
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
          "name": "Brisbane"
        },
        "description": "Expert Pay-Per-Click (PPC) and Google Ads management services for businesses in Brisbane, QLD, focusing on maximum Return on Ad Spend (ROAS).",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "PPC Management Brisbane Services",
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
                "name": "PPC Advertising Brisbane"
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
            "name": "How much budget do I need for Google Ads in Brisbane?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The required budget depends on your industry competition and target CPA. For most Brisbane businesses, we recommend starting with $2,000 - $4,000 per month to allow for sufficient data collection and optimization in this competitive market. Our ppc management brisbane team will analyze your market during your free audit and recommend a precise, efficient budget."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from ppc brisbane campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike SEO, PPC delivers immediate results. You will see traffic and leads within days of launch. The first 4-6 weeks are dedicated to data collection and optimization. Significant improvements in CPA and ROAS typically occur within 2-3 months as our ppc experts brisbane refine the campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Google Ads and adwords brisbane?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google Ads is the current name for the platform previously known as Google AdWords. They are the same thing. Whether you call it adwords brisbane or Google Ads, we are the google ads agency brisbane that manages it all."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer an adwords management brisbane service with a performance guarantee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer the best guarantee in the industry: No Lock-In Contracts. Our focus on ROAS is our guarantee. If we are not generating a positive return on your ad spend, you are free to leave at any time. We put the risk on us, not you."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I choose Odin Digital over a large national google agency brisbane?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Large national agencies often apply generic strategies and are slow to adapt. We are a lean team of ppc experts brisbane who provide hyper-focused, personalized service. We understand the Brisbane market, we monitor your competitors, and we focus on your ROAS, not our retainer."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manage other pay per click brisbane platforms like Meta Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We are a full-service ppc agency brisbane and manage campaigns across Google, Meta (Facebook/Instagram), LinkedIn, and other high-value platforms. We create a holistic ppc advertising brisbane strategy for maximum reach and ROI."
            }
          },
          {
            "@type": "Question",
            "name": "How do you prevent my budget from being wasted on clicks from outside Brisbane?",
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
            "name": "How is your adwords management company brisbane different from others?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are obsessed with efficiency and ROI. We don't just manage your campaigns—we treat your budget like our own. We actively monitor your competitors and adjust your strategy to ensure you stay ahead. Our 95% client retention rate is proof that we consistently deliver value, month after month."
            }
          },
          {
            "@type": "Question",
            "name": "What is ppc marketing and how does it differ from SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PPC marketing (Pay-Per-Click) is a form of online advertising where you pay each time someone clicks your ad. Unlike SEO, which takes months to build, PPC delivers immediate traffic and leads. We recommend a combined strategy: PPC for immediate results, SEO for long-term dominance."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer search marketing brisbane services beyond Google Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Search marketing brisbane includes both paid (PPC) and organic (SEO) strategies. We are a full-service agency and can manage both to ensure you dominate Brisbane search results across all channels."
            }
          }
        ]
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Google Ads Brisbane Services",
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

  const problemPoints = [
    {
      icon: MapPin,
      title: "Geographic Waste",
      description: "Most adwords management brisbane agencies don't properly set up location targeting. Your ads are shown to people in Sydney, Melbourne, or regional QLD who will never become your customers. You're paying for clicks from people who can't use your service."
    },
    {
      icon: Eye,
      title: "Set It and Forget It",
      description: "A typical google agency brisbane will set up your campaigns and then do minimal optimization. Search trends change. Competitors adjust their strategies. Costs per click shift. If your campaigns are not actively monitored and optimized weekly, you are being left behind."
    },
    {
      icon: BarChart,
      title: "Vanity Metrics",
      description: "Your last adwords agency brisbane probably sent you monthly reports full of impressions, clicks, and CTR. But none of these metrics pay your bills. What matters is your Cost Per Acquisition (CPA) and Return on Ad Spend (ROAS). If your agency isn't laser-focused on these, you are wasting money."
    },
    {
      icon: Target,
      title: "Competitive Blindness",
      description: "Brisbane is a competitive market. If your ppc brisbane agency isn't monitoring what your competitors are doing, adjusting bids, and adapting to market changes, you are fighting blind. Most agencies don't do this. We do."
    }
  ];

  const solutions = [
    {
      icon: MapPin,
      title: "Hyper-Local Targeting: Brisbane-Only Traffic",
      description: "We set up precise geographic targeting to ensure your ads are only shown to people within your exact service area. Whether it's a specific suburb, a 10km radius from your business, or Brisbane metro-wide, we eliminate geographic waste completely."
    },
    {
      icon: TrendingUp,
      title: "Conversion-First Campaign Structure",
      description: "We don't optimize for clicks. We optimize for conversions. Every keyword, ad group, and bid adjustment is designed to lower your CPA and increase your ROAS. Your campaigns are built to generate revenue, not vanity metrics."
    },
    {
      icon: RefreshCw,
      title: "Active, Weekly Optimization with Competitive Intelligence",
      description: "We review your campaigns weekly, analyzing performance, adjusting bids, testing new ad copy, and monitoring competitor activity. We treat your budget like our own because we know that efficiency is the key to profitability in Brisbane's competitive market."
    },
    {
      icon: Shield,
      title: "Transparent, ROI-Focused Reporting",
      description: "Our reports focus on the metrics that matter: CPA, ROAS, and Revenue Generated. You will always know exactly where your budget is going and what it is returning. No fluff. No misleading data. Just clear, actionable insights."
    }
  ];

  const services = [
    {
      icon: DollarSign,
      title: "Google Ads Management",
      description: "Full-service management of your Google Search, Display, and Shopping campaigns. We handle everything from keyword research to ad creation, bid management, and ongoing optimization."
    },
    {
      icon: Zap,
      title: "Pay Per Click Brisbane",
      description: "Precision-focused PPC campaigns designed to maximize ROI. We eliminate waste, target high-intent searchers, and focus on the metrics that actually drive business growth."
    },
    {
      icon: Target,
      title: "Landing Page Optimization (CRO)",
      description: "Your ad is only as good as the page it sends traffic to. We optimize your landing pages to ensure maximum conversion rates, aligning messaging, design, and calls to action."
    },
    {
      icon: Award,
      title: "Retargeting Campaigns",
      description: "Most visitors don't convert on their first visit. We set up strategic retargeting campaigns to re-engage visitors and guide them back to conversion."
    }
  ];

  const faqs = [
    {
      question: "How much budget do I need for Google Ads in Brisbane?",
      answer: "The required budget depends on your industry competition and target CPA. For most Brisbane businesses, we recommend starting with $2,000 - $4,000 per month to allow for sufficient data collection and optimization in this competitive market. Our ppc management brisbane team will analyze your market during your free audit and recommend a precise, efficient budget."
    },
    {
      question: "How long does it take to see results from ppc brisbane campaigns?",
      answer: "Unlike SEO, PPC delivers immediate results. You will see traffic and leads within days of launch. The first 4-6 weeks are dedicated to data collection and optimization. Significant improvements in CPA and ROAS typically occur within 2-3 months as our ppc experts brisbane refine the campaigns."
    },
    {
      question: "What is the difference between Google Ads and adwords brisbane?",
      answer: "Google Ads is the current name for the platform previously known as Google AdWords. They are the same thing. Whether you call it adwords brisbane or Google Ads, we are the google ads agency brisbane that manages it all."
    },
    {
      question: "Do you offer an adwords management brisbane service with a performance guarantee?",
      answer: "We offer the best guarantee in the industry: No Lock-In Contracts. Our focus on ROAS is our guarantee. If we are not generating a positive return on your ad spend, you are free to leave at any time. We put the risk on us, not you."
    },
    {
      question: "Why should I choose Odin Digital over a large national google agency brisbane?",
      answer: "Large national agencies often apply generic strategies and are slow to adapt. We are a lean team of ppc experts brisbane who provide hyper-focused, personalized service. We understand the Brisbane market, we monitor your competitors, and we focus on your ROAS, not our retainer."
    },
    {
      question: "Do you manage other pay per click brisbane platforms like Meta Ads?",
      answer: "Yes. We are a full-service ppc agency brisbane and manage campaigns across Google, Meta (Facebook/Instagram), LinkedIn, and other high-value platforms. We create a holistic ppc advertising brisbane strategy for maximum reach and ROI."
    },
    {
      question: "How do you prevent my budget from being wasted on clicks from outside Brisbane?",
      answer: "We use precise geographic targeting (radius targeting, suburb targeting, or metro-wide targeting) to ensure your ads are only shown to people within your exact service area. We also use IP exclusions and location bid adjustments to maximize efficiency."
    },
    {
      question: "Can you help me with my landing pages?",
      answer: "Yes. Our service includes Landing Page Optimization (CRO). Your ad is only as good as the page it sends traffic to. We ensure your landing pages are perfectly aligned with your ad copy and designed to maximize conversions."
    },
    {
      question: "What metrics do you report on?",
      answer: "We report on the metrics that matter: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Quality, and Revenue Generated. We move beyond vanity metrics like impressions and clicks to focus on what actually drives your business forward."
    },
    {
      question: "How is your adwords management company brisbane different from others?",
      answer: "We are obsessed with efficiency and ROI. We don't just manage your campaigns—we treat your budget like our own. We actively monitor your competitors and adjust your strategy to ensure you stay ahead. Our 95% client retention rate is proof that we consistently deliver value, month after month."
    },
    {
      question: "What is ppc marketing and how does it differ from SEO?",
      answer: "PPC marketing (Pay-Per-Click) is a form of online advertising where you pay each time someone clicks your ad. Unlike SEO, which takes months to build, PPC delivers immediate traffic and leads. We recommend a combined strategy: PPC for immediate results, SEO for long-term dominance."
    },
    {
      question: "Do you offer search marketing brisbane services beyond Google Ads?",
      answer: "Yes. Search marketing brisbane includes both paid (PPC) and organic (SEO) strategies. We are a full-service agency and can manage both to ensure you dominate Brisbane search results across all channels."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Google Ads Agency Brisbane | PPC Management Experts | Odin Digital</title>
        <meta name="description" content="Stop wasting budget on Google Ads. Odin Digital is the PPC agency Brisbane trusts for maximum ROI. Precision targeting, competitive intelligence, and no lock-in contracts. Get your free audit." />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <SideTab />

        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            {" > "}
            <Link to="/services" className="hover:text-primary">Services</Link>
            {" > "}
            <Link to="/services/google-ads" className="hover:text-primary">Google Ads</Link>
            {" > "}
            <span className="text-foreground">Brisbane</span>
          </nav>
        </div>

        {/* Section 1: Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
                Brisbane Google Ads Agency: Stop Wasting Your Budget. Start Driving Real Revenue.
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-foreground">
                The PPC Agency Brisbane Businesses Trust for Maximum ROI
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Partner with Odin Digital and turn your Google Ads budget into verified revenue. No lock-in contracts. No hidden fees. Just transparent, data-driven PPC management that delivers a 540% average ROI.
              </p>
              <Button 
                onClick={openForm}
                size="xl"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white text-sm md:text-base lg:text-lg px-4 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6 shadow-primary transition-smooth w-full sm:w-auto leading-tight whitespace-normal break-words text-center h-auto min-h-[3rem]"
              >
                Get Your FREE Brisbane PPC Strategy Session →
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Social Proof Metrics */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <Card className="p-6 text-center hover:shadow-glow transition-all duration-300">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D91C5C] mb-2">
                  $574M+
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  Verified Client Revenue
                </div>
              </Card>
              <Card className="p-6 text-center hover:shadow-glow transition-all duration-300">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D91C5C] mb-2">
                  540%
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  Average ROI on Ad Spend
                </div>
              </Card>
              <Card className="p-6 text-center hover:shadow-glow transition-all duration-300">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D91C5C] mb-2">
                  95%
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  Client Retention Rate
                </div>
              </Card>
              <Card className="p-6 text-center hover:shadow-glow transition-all duration-300">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D91C5C] mb-2">
                  283+
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  Successful Campaigns
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 3: Problem-Agitation */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                The Problem: Why Most Adwords Management Brisbane Agencies Fail
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Brisbane businesses face intense competition that generic adwords agency Brisbane providers don't know how to navigate.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto mb-10">
              {problemPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <Card key={index} className="p-6 md:p-8 hover:shadow-glow transition-all duration-300">
                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#D91C5C] mb-4" />
                    <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                  </Card>
                );
              })}
            </div>
            <div className="text-center">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-primary transition-smooth w-full sm:w-auto text-sm md:text-base px-6 md:px-8 py-4 md:py-5 whitespace-normal break-words text-center leading-tight h-auto min-h-[3rem]"
              >
                Stop the Budget Bleed: Talk to a PPC Expert →
              </Button>
            </div>
          </div>
        </section>

        {/* Section 4: Solution Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                The Odin Digital Solution: Precision-Focused PPC Management Brisbane
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                We are the adwords management Brisbane team that eliminates waste and maximizes every dollar of your ad spend.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto mb-10">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300">
                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#D91C5C] mb-4" />
                    <h3 className="text-lg font-bold mb-3 leading-snug">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
                  </Card>
                );
              })}
            </div>
            <div className="text-center">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-primary transition-smooth w-full sm:w-auto text-sm md:text-base px-6 md:px-8 py-4 md:py-5 whitespace-normal break-words text-center leading-tight h-auto min-h-[3rem]"
              >
                See Our Brisbane PPC Management Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                Our Google Ads Services: Built for Brisbane Businesses
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                As a leading google agency brisbane wide, we offer a full spectrum of PPC services designed to dominate your local market.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-5 md:p-6 shadow-card hover:shadow-primary transition-smooth bg-card">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3 leading-snug">{service.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{service.description}</p>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-primary transition-smooth w-full sm:w-auto text-sm md:text-base px-4 md:px-6 lg:px-8 py-4 md:py-5 whitespace-normal break-words text-center leading-tight"
              >
                Ready for a Custom Google Ads Strategy? Contact Us →
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                FAQs: Your Questions About Google Ads in Brisbane Answered
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We know you have specific concerns about ad spend and agency performance. Here are clear, honest answers.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-4 md:px-6 shadow-card">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary text-sm md:text-base py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Ready to Stop Wasting Budget and Start Driving Sales?
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 md:mb-8 leading-relaxed">
                Stop guessing with your ppc brisbane budget. Start working with ppc experts brisbane who deliver precision, transparency, and profit.
              </p>
              <Button 
                onClick={openForm}
                size="xl"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white text-sm md:text-base lg:text-lg px-4 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6 shadow-primary transition-smooth w-full sm:w-auto leading-tight"
              >
                Claim FREE Strategy Session →
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {/* Sticky Mobile CTA */}
      {showStickyButton && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white shadow-lg md:hidden border-t border-border">
          <Button 
            onClick={openForm}
            className="w-full bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-primary text-sm py-5"
          >
            Get FREE Strategy Session →
          </Button>
        </div>
      )}

      <MarketingFormModal />
    </>
  );
};

export default GoogleAdsBrisbane;
