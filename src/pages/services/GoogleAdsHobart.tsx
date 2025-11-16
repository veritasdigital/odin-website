import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Target, DollarSign, Shield, AlertCircle, Calendar, Eye, BarChart, MapPin, CheckCircle, Zap, Users, Map } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { SideTab } from "@/components/SideTab";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { Link, useNavigate } from "react-router-dom";
export default function GoogleAdsHobart() {
  const {
    openForm
  } = useMarketingForm();
  const navigate = useNavigate();
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
    "@graph": [{
      "@type": "Organization",
      "name": "Odin Digital",
      "url": "https://odindigital.com.au/",
      "logo": "https://odindigital.com.au/logo.png",
      "description": "Performance-focused Google Ads agency in Hobart. We specialize in PPC management for Hobart and Tasmanian businesses, focusing on ROI and seasonal optimization. $574M+ in client revenue. No lock-in contracts.",
      "founder": {
        "@type": "Person",
        "name": "Lucas Durante"
      },
      "slogan": "No Lock-In Contracts. Just Results.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+61-1300-123-456",
        "contactType": "Sales",
        "areaServed": "AU",
        "availableLanguage": "English"
      },
      "sameAs": []
    }, {
      "@type": "LocalBusiness",
      "@id": "https://odindigital.com.au/google-ads-hobart",
      "name": "Odin Digital - Google Ads Agency Hobart",
      "description": "Hobart's top PPC management company. Expert Google Ads services focusing on local targeting and seasonal optimization.",
      "url": "https://odindigital.com.au/google-ads-hobart",
      "telephone": "+61-1300-123-456",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hobart",
        "addressRegion": "TAS",
        "postalCode": "7000",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-42.8821",
        "longitude": "147.3272"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hobart",
        "containedIn": {
          "@type": "State",
          "name": "Tasmania"
        }
      }
    }, {
      "@type": "Service",
      "serviceType": "PPC Management",
      "provider": {
        "@type": "Organization",
        "name": "Odin Digital"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hobart"
      },
      "description": "Expert Pay-Per-Click (PPC) and Google Ads management services for businesses in Hobart, TAS, focusing on maximum Return on Ad Spend (ROAS) and seasonal optimization.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "PPC Management Hobart Services",
        "itemListElement": [{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads Management"
          }
        }, {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PPC Advertising Hobart"
          }
        }, {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tourism & Hospitality Campaigns"
          }
        }]
      }
    }, {
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "How much budget do I need for Google Ads in Hobart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The required budget depends on your industry competition and target CPA. For most Hobart businesses, we recommend starting with $1,000 - $2,500 per month to allow for sufficient data collection and optimization. Our ppc management hobart team will analyze your market during your free audit and recommend a precise, efficient budget."
        }
      }, {
        "@type": "Question",
        "name": "How long does it take to see results from ppc hobart campaigns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike SEO, PPC delivers immediate results. You will see traffic and leads within days of launch. The first 4-6 weeks are dedicated to data collection and optimization. Significant improvements in CPA and ROAS typically occur within 2-3 months as our ppc experts hobart refine the campaigns."
        }
      }, {
        "@type": "Question",
        "name": "What is the difference between Google Ads and adwords hobart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Ads is the current name for the platform previously known as Google AdWords. They are the same thing. Whether you call it adwords hobart or Google Ads, we are the google ads agency hobart that manages it all."
        }
      }, {
        "@type": "Question",
        "name": "Do you offer an adwords management hobart service with a performance guarantee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer the best guarantee in the industry: No Lock-In Contracts. Our focus on ROAS is our guarantee. If we are not generating a positive return on your ad spend, you are free to leave at any time. We put the risk on us, not you."
        }
      }, {
        "@type": "Question",
        "name": "Why should I choose Odin Digital over a large mainland google agency hobart?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Large mainland agencies often apply generic strategies designed for Sydney or Melbourne and have no understanding of Hobart's unique market. We are a lean team of ppc experts hobart who provide hyper-focused, personalized service. We understand the Hobart market, the seasonal fluctuations, and the importance of local reputation."
        }
      }, {
        "@type": "Question",
        "name": "Do you manage other pay per click hobart platforms like Meta Ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We are a full-service ppc agency hobart and manage campaigns across Google, Meta (Facebook/Instagram), LinkedIn, and other high-value platforms. We create a holistic ppc advertising hobart strategy for maximum reach and ROI."
        }
      }, {
        "@type": "Question",
        "name": "How do you prevent my budget from being wasted on clicks from mainland Australia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use precise geographic targeting (Tasmania-only targeting, Hobart-specific targeting, or suburb targeting) to ensure your ads are only shown to people within your exact service area. We also use IP exclusions and location bid adjustments to maximize efficiency."
        }
      }, {
        "@type": "Question",
        "name": "Can you help with seasonal campaigns for tourism businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialize in seasonal campaign optimization for Hobart's tourism and hospitality sectors. We scale campaigns during the peak summer season (December-February) and optimize for efficiency during the quieter winter months."
        }
      }, {
        "@type": "Question",
        "name": "Can you help me with my landing pages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our service includes Landing Page Optimization (CRO). Your ad is only as good as the page it sends traffic to. We ensure your landing pages are perfectly aligned with your ad copy and designed to maximize conversions."
        }
      }, {
        "@type": "Question",
        "name": "What metrics do you report on?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We report on the metrics that matter: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Quality, and Revenue Generated. We move beyond vanity metrics like impressions and clicks to focus on what actually drives your business forward."
        }
      }]
    }, {
      "@type": "Review",
      "itemReviewed": {
        "@type": "Service",
        "name": "Google Ads Hobart Services",
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
    }]
  };
  const problemPoints = [{
    icon: <Map className="w-10 h-10 md:w-12 md:h-12 text-[#D91C5C]" />,
    title: "Mainland Ignorance",
    description: "Your current agency doesn't understand Tasmania. They waste your budget targeting mainland Australia or use generic strategies that don't resonate with Hobart's tight-knit community."
  }, {
    icon: <MapPin className="w-10 h-10 md:w-12 md:h-12 text-[#D91C5C]" />,
    title: "Geographic Waste",
    description: "You're paying for clicks from Sydney, Melbourne, and Brisbane—people who will never become customers. Your budget is being drained on irrelevant traffic."
  }, {
    icon: <Calendar className="w-10 h-10 md:w-12 md:h-12 text-[#D91C5C]" />,
    title: "Seasonal Blindness",
    description: "Your agency runs the same campaigns year-round, ignoring Hobart's dramatic seasonal fluctuations. You're overspending in winter and missing opportunities in summer."
  }, {
    icon: <AlertCircle className="w-10 h-10 md:w-12 md:h-12 text-[#D91C5C]" />,
    title: "Set It and Forget It",
    description: "Your current provider set up your campaigns months ago and hasn't touched them since. You're stuck in a contract with an agency that doesn't care about your results."
  }];
  const solutions = [{
    icon: <Target className="w-10 h-10 text-[#D91C5C]" />,
    title: "Hyper-Local Targeting: Hobart & Tasmania Only",
    description: "We use precise geographic targeting to ensure every single ad impression is served to someone within your exact service area. No wasted clicks from the mainland. Your budget is spent only on high-intent, local customers."
  }, {
    icon: <Calendar className="w-10 h-10 text-[#D91C5C]" />,
    title: "Seasonal Campaign Optimization",
    description: "We adjust your campaigns to match Hobart's seasonal patterns. We scale aggressively during peak tourism months (December-February) and optimize for efficiency during quieter periods. Your ad spend matches market demand."
  }, {
    icon: <Zap className="w-10 h-10 text-[#D91C5C]" />,
    title: "Conversion-First Campaign Structure",
    description: "We don't optimize for clicks or impressions. We optimize for conversions and revenue. Every campaign, ad group, and keyword is structured to drive profitable actions: calls, form fills, and sales."
  }, {
    icon: <BarChart className="w-10 h-10 text-[#D91C5C]" />,
    title: "Transparent, ROI-Focused Reporting",
    description: "You'll receive monthly reports that focus on the metrics that matter: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), and Revenue Generated. No jargon, no fluff—just clear, actionable insights."
  }];
  const services = [{
    icon: <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-[#D91C5C]" />,
    title: "Google Ads Management",
    description: "Full-service Google Ads management for Hobart businesses. We handle everything from keyword research to ad copy to landing page optimization, ensuring maximum ROI from every dollar spent."
  }, {
    icon: <DollarSign className="w-10 h-10 md:w-12 md:h-12 text-[#D91C5C]" />,
    title: "Pay Per Click Hobart",
    description: "Expert PPC advertising across all major platforms (Google, Meta, LinkedIn). We create integrated campaigns that maximize reach and drive high-quality leads to your Hobart business."
  }, {
    icon: <MapPin className="w-10 h-10 md:w-12 md:h-12 text-[#D91C5C]" />,
    title: "Tourism & Hospitality Campaigns",
    description: "Specialized campaigns for Hobart's tourism sector. We understand the seasonal nature of the industry and optimize campaigns to capture high-value visitors during peak periods."
  }, {
    icon: <Users className="w-10 h-10 md:w-12 md:h-12 text-[#D91C5C]" />,
    title: "Local Service Business Campaigns",
    description: "Targeted campaigns for local service businesses (trades, professional services, retail). We focus on driving phone calls and local foot traffic from high-intent Hobart customers."
  }];
  const faqs = [{
    question: "How much budget do I need for Google Ads in Hobart?",
    answer: "The required budget depends on your industry competition and target CPA. For most Hobart businesses, we recommend starting with $1,000 - $2,500 per month to allow for sufficient data collection and optimization. Our ppc management hobart team will analyze your market during your free audit and recommend a precise, efficient budget."
  }, {
    question: "How long does it take to see results from ppc hobart campaigns?",
    answer: "Unlike SEO, PPC delivers immediate results. You will see traffic and leads within days of launch. The first 4-6 weeks are dedicated to data collection and optimization. Significant improvements in CPA and ROAS typically occur within 2-3 months as our ppc experts hobart refine the campaigns."
  }, {
    question: "What is the difference between Google Ads and adwords hobart?",
    answer: "Google Ads is the current name for the platform previously known as Google AdWords. They are the same thing. Whether you call it adwords hobart or Google Ads, we are the google ads agency hobart that manages it all."
  }, {
    question: "Do you offer an adwords management hobart service with a performance guarantee?",
    answer: "We offer the best guarantee in the industry: No Lock-In Contracts. Our focus on ROAS is our guarantee. If we are not generating a positive return on your ad spend, you are free to leave at any time. We put the risk on us, not you."
  }, {
    question: "Why should I choose Odin Digital over a large mainland google agency hobart?",
    answer: "Large mainland agencies often apply generic strategies designed for Sydney or Melbourne and have no understanding of Hobart's unique market. We are a lean team of ppc experts hobart who provide hyper-focused, personalized service. We understand the Hobart market, the seasonal fluctuations, and the importance of local reputation."
  }, {
    question: "Do you manage other pay per click hobart platforms like Meta Ads?",
    answer: "Yes. We are a full-service ppc agency hobart and manage campaigns across Google, Meta (Facebook/Instagram), LinkedIn, and other high-value platforms. We create a holistic ppc advertising hobart strategy for maximum reach and ROI."
  }, {
    question: "How do you prevent my budget from being wasted on clicks from mainland Australia?",
    answer: "We use precise geographic targeting (Tasmania-only targeting, Hobart-specific targeting, or suburb targeting) to ensure your ads are only shown to people within your exact service area. We also use IP exclusions and location bid adjustments to maximize efficiency."
  }, {
    question: "Can you help with seasonal campaigns for tourism businesses?",
    answer: "Yes. We specialize in seasonal campaign optimization for Hobart's tourism and hospitality sectors. We scale campaigns during the peak summer season (December-February) and optimize for efficiency during the quieter winter months."
  }, {
    question: "Can you help me with my landing pages?",
    answer: "Yes. Our service includes Landing Page Optimization (CRO). Your ad is only as good as the page it sends traffic to. We ensure your landing pages are perfectly aligned with your ad copy and designed to maximize conversions."
  }, {
    question: "What metrics do you report on?",
    answer: "We report on the metrics that matter: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Quality, and Revenue Generated. We move beyond vanity metrics like impressions and clicks to focus on what actually drives your business forward."
  }];
  const trustStats = [{
    number: "$574M+",
    label: "Verified Client Revenue"
  }, {
    number: "95%",
    label: "Client Retention Rate"
  }];
  return <>
      <Helmet>
        <title>Google Ads Agency Hobart | PPC Management Experts | Odin Digital</title>
        <meta name="description" content="Stop wasting budget on Google Ads. Odin Digital is the PPC agency Hobart trusts for maximum ROI. Local expertise, seasonal optimization, and no lock-in contracts. Get your free audit." />
        <link rel="canonical" href="https://odindigital.com.au/services/google-ads-hobart" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <div className="hidden md:block">
          <SideTab />
        </div>
        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background border-t border-border p-4 shadow-lg">
          <Button onClick={() => navigate('/contact')} size="lg" className="w-full bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold">
            Get FREE Strategy Session
          </Button>
        </div>

        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <nav className="text-xs sm:text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            {" > "}
            <Link to="/services" className="hover:text-primary">Services</Link>
            {" > "}
            <Link to="/services/google-ads" className="hover:text-primary">Google Ads</Link>
            {" > "}
            <span className="text-foreground">Hobart</span>
          </nav>
        </div>

        {/* Section 1: Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-white via-muted/30 to-muted/20">
          {/* Animated Background Blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-muted/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-muted/15 rounded-full filter blur-3xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
          
          {/* Animated Background Blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
          
          {/* Floating Circles */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/40 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{
          animationDelay: '0.5s'
        }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{
          animationDelay: '0.7s'
        }}></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-40 right-20 w-16 h-16 border-2 border-white/20 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-32 left-16 w-12 h-12 border-2 border-white/10 rotate-12"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl sm:text-4xl md:text-4xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight pb-2 drop-shadow-lg animate-fade-in text-slate-950 lg:text-5xl">
                Hobart Google Ads Agency: Stop Wasting Your Budget. Start Dominating Tasmania's Market.
              </h1>
              <h2 style={{
              animationDelay: '0.1s'
            }} className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6 drop-shadow-md animate-fade-in text-slate-950 lg:text-3xl">
                The PPC Agency Hobart Businesses Trust for Maximum ROI in a Tight-Knit Market.
              </h2>
              <p className="text-base md:text-lg font-medium text-foreground/80 mb-4">
                Partner with Odin Digital and Turn Your Google Ads Budget into Verified Revenue.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
                Look, running Google Ads in Hobart isn't like running them in Sydney or Melbourne. Tasmania's market is unique—smaller, tighter-knit, and highly seasonal. Most mainland agencies don't understand this. They waste your budget on broad targeting, ignore seasonal fluctuations, and deliver generic reports that don't show real ROI. At Odin Digital, we're different. We're a performance-focused PPC agency that understands Hobart. We optimize every campaign for your local market, ensuring maximum return on ad spend with complete transparency and no lock-in contracts.
              </p>
              
              {/* Trust Stats */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto mb-6 md:mb-8">
                {trustStats.map((stat, index) => <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D91C5C] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>)}
              </div>

              <Button onClick={openForm} size="xl" className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 shadow-primary transition-smooth w-full sm:w-auto leading-snug whitespace-normal text-center h-auto min-h-[3rem]">
                Get Your FREE Hobart PPC Strategy Session →
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Problem/Agitation */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                The Problem: Why Most Adwords Management Hobart Agencies Fail
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                Hobart businesses face unique challenges that mainland adwords agency hobart providers simply don't understand.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-8">
              {problemPoints.map((point, index) => <Card key={index} className="p-6 md:p-8 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">{point.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </Card>)}
            </div>
            <div className="text-center">
              <Button onClick={openForm} size="lg" className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-primary transition-smooth text-xs sm:text-sm h-auto py-3 leading-snug whitespace-normal px-6">
                Stop the Budget Bleed: Talk to a PPC Expert →
              </Button>
            </div>
          </div>
        </section>

        {/* Section 3: The Odin Digital Solution */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                The Odin Digital Solution: Precision-Focused PPC Management Hobart
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                We are the adwords management hobart team that brings a data-science approach to your campaigns, tailored specifically for the Hobart and Tasmanian market.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto mb-8">
              {solutions.map((solution, index) => <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">{solution.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
                </Card>)}
            </div>
            <div className="text-center">
              <Button onClick={openForm} size="lg" className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-primary transition-smooth text-xs sm:text-sm h-auto py-3 leading-snug whitespace-normal px-6">
                See Our Hobart PPC Management Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* Section 4: Our Google Ads Services */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                Our Google Ads Services: Built for Hobart Businesses
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                As a leading google agency hobart wide, we offer a full spectrum of PPC services designed to dominate your local market.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto mb-8">
              {services.map((service, index) => <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </Card>)}
            </div>
            <div className="text-center">
              <Button onClick={openForm} size="lg" className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-primary transition-smooth text-xs sm:text-sm h-auto py-3 leading-snug whitespace-normal px-6">
                Ready for a Custom Google Ads Strategy? Contact Us →
              </Button>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                  FAQs: Your Questions About Google Ads in Hobart Answered
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  We know you have specific concerns about ad spend and agency performance in a smaller market. Here are clear, honest answers.
                </p>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Section 6: Final CTA */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Ready to Stop Wasting Budget and Start Dominating Hobart?
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                Stop guessing with your ppc hobart budget. Start working with ppc experts hobart who deliver precision, transparency, and profit in Tasmania's unique market.
              </p>
              <Button onClick={openForm} size="xl" className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 shadow-primary transition-smooth w-full sm:w-auto leading-snug whitespace-normal text-center h-auto min-h-[3rem]">
                Claim Your FREE Hobart PPC Strategy Session →
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <MarketingFormModal />
      </div>

      {/* Sticky Mobile CTA */}
      {showStickyButton && <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
          <Button onClick={openForm} size="lg" className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-2xl px-6 py-4 text-sm font-semibold animate-pulse-glow whitespace-normal leading-snug h-auto">
            Get FREE Strategy Session →
          </Button>
        </div>}
    </>;
}