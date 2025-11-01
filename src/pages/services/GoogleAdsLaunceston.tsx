import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SideTab } from "@/components/SideTab";
import { Target, MapPin, TrendingUp, Shield, Award, BarChart3, DollarSign, Users } from "lucide-react";

const GoogleAdsLaunceston = () => {
  const navigate = useNavigate();

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Performance-focused Google Ads agency in Launceston. We specialize in PPC management for Launceston and Northern Tasmania businesses, focusing on ROI and regional competition strategy. $574M+ in client revenue. No lock-in contracts.",
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
        "@id": "https://growth-conduit-central.lovable.app/google-ads-launceston",
        "name": "Odin Digital - Google Ads Agency Launceston",
        "description": "Launceston's top PPC management company. Expert Google Ads services focusing on regional targeting and statewide competition strategy.",
        "url": "https://growth-conduit-central.lovable.app/google-ads-launceston",
        "telephone": "+61-XXX-XXX-XXX",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Launceston",
          "addressRegion": "TAS",
          "postalCode": "7250",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-41.4332",
          "longitude": "147.1441"
        },
        "areaServed": {
          "@type": "City",
          "name": "Launceston",
          "containedIn": {
            "@type": "State",
            "name": "Tasmania"
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
          "name": "Launceston"
        },
        "description": "Expert Pay-Per-Click (PPC) and Google Ads management services for businesses in Launceston, TAS, focusing on maximum Return on Ad Spend (ROAS) and regional competition strategy.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "PPC Management Launceston Services",
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
                "name": "PPC Advertising Launceston"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Regional & Statewide Campaigns"
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
            "name": "How much budget do I need for Google Ads in Launceston?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The required budget depends on your industry competition and target CPA. For most Launceston businesses, we recommend starting with $1,000 - $2,500 per month to allow for sufficient data collection and optimization. Our ppc management launceston team will analyze your market during your free audit and recommend a precise, efficient budget."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from ppc launceston campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike SEO, PPC delivers immediate results. You will see traffic and leads within days of launch. The first 4-6 weeks are dedicated to data collection and optimization. Significant improvements in CPA and ROAS typically occur within 2-3 months as our ppc experts launceston refine the campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Google Ads and adwords launceston?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google Ads is the current name for the platform previously known as Google AdWords. They are the same thing. Whether you call it adwords launceston or Google Ads, we are the google ads agency launceston that manages it all."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer an adwords management launceston service with a performance guarantee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer the best guarantee in the industry: No Lock-In Contracts. Our focus on ROAS is our guarantee. If we are not generating a positive return on your ad spend, you are free to leave at any time. We put the risk on us, not you."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I choose Odin Digital over a large mainland google agency launceston?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Large mainland agencies often apply generic strategies designed for Sydney or Melbourne and have no understanding of Launceston's unique regional market. We are a lean team of ppc experts launceston who provide hyper-focused, personalized service. We understand the Launceston market, the competition with Hobart, and the importance of local reputation in Northern Tasmania."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manage other pay per click launceston platforms like Meta Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We are a full-service ppc agency launceston and manage campaigns across Google, Meta (Facebook/Instagram), LinkedIn, and other high-value platforms. We create a holistic ppc advertising launceston strategy for maximum reach and ROI."
            }
          },
          {
            "@type": "Question",
            "name": "How do you prevent my budget from being wasted on clicks from outside Launceston?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use precise geographic targeting (Launceston-only targeting, Northern Tasmania targeting, or Tasmania-wide targeting) to ensure your ads are only shown to people within your exact service area. We also use IP exclusions and location bid adjustments to maximize efficiency."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help Launceston businesses compete with Hobart for statewide customers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in positioning Launceston businesses to compete effectively with Hobart-based businesses for statewide Tasmanian customers. We use competitive intelligence, messaging, and targeting strategies to ensure you capture your fair share of the statewide market."
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
          }
        ]
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Google Ads Launceston Services",
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
        <title>Google Ads Agency Launceston | PPC Management Experts | Odin Digital</title>
        <meta 
          name="description" 
          content="Stop wasting budget on Google Ads. Odin Digital is the PPC agency Launceston trusts for maximum ROI. Regional expertise, statewide strategy, and no lock-in contracts. Get your free audit." 
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        {/* Hide SideTab on mobile since we have a sticky CTA */}
        <div className="hidden md:block">
          <SideTab />
        </div>
        
        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background border-t border-border p-4 shadow-lg">
          <Button 
            variant="cta" 
            size="lg"
            className="w-full text-sm sm:text-base py-6"
            onClick={() => navigate('/contact')}
          >
            <span className="sm:hidden">Get FREE Strategy</span>
            <span className="hidden sm:inline">Get Your FREE Launceston PPC Strategy</span>
          </Button>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[90vh] bg-white overflow-hidden flex items-center">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          </div>

          {/* Floating Background Elements */}
          <div className="absolute top-20 left-10 w-12 h-12 bg-primary/20 rounded-full animate-float" />
          <div className="absolute bottom-32 right-20 w-8 h-8 bg-secondary/20 rounded-lg animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-10 h-10 bg-primary/10 rounded-lg animate-float" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
            <h1 className="text-5xl md:text-7xl font-black text-charcoal mb-8 mt-16 md:mt-20 leading-[0.95] tracking-tight">
              <span className="block mb-2">Google Ads Agency</span>
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Launceston
              </span>
            </h1>
            
            <p className="text-3xl md:text-5xl font-bold text-charcoal mb-8 leading-tight">
              Stop Wasting Your Budget on Clicks That Don't Convert. Start Dominating Tasmania's Second-Largest Market.
            </p>

            <p className="text-xl md:text-2xl text-charcoal/90 mb-6 max-w-4xl mx-auto font-bold">
              The PPC Agency Launceston Businesses Trust for Maximum ROI in a Tight-Knit Regional Market.
            </p>

            <p className="text-lg md:text-xl text-charcoal/80 mb-8 max-w-4xl mx-auto">
              Partner with Odin Digital and Turn Your Google Ads Budget into Verified Revenue.
            </p>

            <p className="text-base md:text-lg text-charcoal/70 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Launceston is Tasmania's second-largest city, with a unique competitive landscape that requires precision targeting and an understanding of regional market dynamics. Generic, mainland-designed Google Ads strategies fail here because they ignore the reality of Northern Tasmania's tight-knit business community, the distinct competition with Hobart, and the importance of local reputation in a regional market. Odin Digital is the <strong className="text-charcoal font-semibold">adwords agency launceston</strong> that delivers hyper-local precision and statewide competitive strategy, ensuring every dollar of your ad spend generates maximum return.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-12 py-6 shadow-glow"
                onClick={() => navigate('/contact')}
              >
                <span className="sm:hidden">Get FREE Strategy →</span>
                <span className="hidden sm:inline">Get Your FREE Launceston PPC Strategy Session →</span>
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-white border border-charcoal/10 rounded-xl shadow-card hover:shadow-primary transition-smooth">
                <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">$574M+</div>
                <div className="text-charcoal/70 font-medium">Client Revenue Generated</div>
              </div>
              <div className="p-6 bg-white border border-charcoal/10 rounded-xl shadow-card hover:shadow-primary transition-smooth">
                <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">95%</div>
                <div className="text-charcoal/70 font-medium">Client Retention Rate</div>
              </div>
              <div className="p-6 bg-white border border-charcoal/10 rounded-xl shadow-card hover:shadow-primary transition-smooth">
                <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">0</div>
                <div className="text-charcoal/70 font-medium">Lock-In Contracts</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              Why Most PPC Agencies Fail Launceston Businesses
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              Launceston businesses face unique challenges that mainland <strong>adwords agency launceston</strong> providers simply don't understand.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 hover-scale">
                <div className="flex items-start gap-4">
                  <div className="bg-destructive/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Mainland Ignorance</h3>
                    <p className="text-muted-foreground">
                      Most Google Ads agencies are based in Sydney or Melbourne and have zero understanding of the Launceston market. They apply generic, high-population strategies designed for capital cities, resulting in wasted ad spend on irrelevant traffic and missed opportunities in the Northern Tasmania region.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-scale">
                <div className="flex items-start gap-4">
                  <div className="bg-destructive/10 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Geographic Waste</h3>
                    <p className="text-muted-foreground">
                      Generic agencies fail to implement precise targeting, leading to budget waste on clicks from people in Hobart, interstate, or outside your service area entirely. In a regional market like Launceston, every dollar counts, and geographic precision is non-negotiable.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-scale">
                <div className="flex items-start gap-4">
                  <div className="bg-destructive/10 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Regional Competition Blindness</h3>
                    <p className="text-muted-foreground">
                      Launceston businesses often compete with Hobart-based companies for statewide customers. Mainland agencies have no understanding of this dynamic and fail to position your business effectively against the larger Hobart market, leaving you at a strategic disadvantage.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-scale">
                <div className="flex items-start gap-4">
                  <div className="bg-destructive/10 p-3 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Set It and Forget It</h3>
                    <p className="text-muted-foreground">
                      Most <strong>ppc agency launceston</strong> providers launch your campaign and then ignore it. No ongoing optimization, no CPA reduction, no strategic adjustments. Your budget is quietly wasted month after month while they collect their fees.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                variant="cta" 
                size="default"
                className="text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 whitespace-normal leading-tight"
                onClick={() => navigate('/contact')}
              >
                <span className="sm:hidden">Talk to PPC Expert →</span>
                <span className="hidden sm:inline">Stop the Budget Bleed: Talk to a PPC Expert →</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              How We Eliminate Waste and Maximize Every Dollar of Your Ad Spend
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              We are the <strong>adwords management launceston</strong> team that brings a data-science approach to your campaigns, tailored specifically for the Launceston and Northern Tasmania market.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 hover-scale">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hyper-Local & Regional Targeting</h3>
                <p className="text-muted-foreground mb-4">
                  Launceston, Northern Tasmania, or Statewide
                </p>
                <p className="text-sm text-muted-foreground">
                  We implement precise geographic targeting to ensure your ads reach the exact audience you serve—whether that's Launceston city, the broader Northern Tasmania region, or statewide. No more wasted clicks from people outside your service area.
                </p>
              </Card>

              <Card className="p-6 hover-scale">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Regional Competition Strategy</h3>
                <p className="text-muted-foreground mb-4">
                  Positioning Launceston Businesses to Win Statewide
                </p>
                <p className="text-sm text-muted-foreground">
                  We understand the competitive dynamics between Launceston and Hobart. We craft messaging and targeting strategies that position your Launceston business to compete effectively for statewide Tasmanian customers, ensuring you capture your fair share of the market.
                </p>
              </Card>

              <Card className="p-6 hover-scale">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Conversion-First Campaign Structure</h3>
                <p className="text-muted-foreground mb-4">
                  Built to Generate Revenue, Not Just Clicks
                </p>
                <p className="text-sm text-muted-foreground">
                  Our campaigns are architected around one goal: maximizing your Return on Ad Spend (ROAS). We focus on high-intent keywords, compelling ad copy, and conversion-optimized landing pages that turn clicks into customers and revenue.
                </p>
              </Card>

              <Card className="p-6 hover-scale">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transparent, ROI-Focused Reporting</h3>
                <p className="text-muted-foreground mb-4">
                  Know Exactly What You're Getting for Your Investment
                </p>
                <p className="text-sm text-muted-foreground">
                  We provide clear, jargon-free reporting focused on the metrics that matter: Cost Per Acquisition (CPA), ROAS, and Revenue Generated. You'll always know exactly how your campaigns are performing and what return you're getting.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                variant="cta" 
                size="lg"
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7 whitespace-normal leading-tight"
                onClick={() => navigate('/contact')}
              >
                <span className="sm:hidden">See Packages →</span>
                <span className="hidden sm:inline">See Our Launceston PPC Management Packages →</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              Our Google Ads Services: Built for Launceston Businesses
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              As a leading <strong>google agency launceston</strong> wide, we offer a full spectrum of PPC services designed to dominate your regional market.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 hover-scale">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Google Ads Management</h3>
                <p className="text-sm text-muted-foreground">
                  Full-service Google Ads management from strategy to execution to optimization. We handle Search, Display, Shopping, and Video campaigns with a focus on maximum ROAS.
                </p>
              </Card>

              <Card className="p-6 hover-scale">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Pay Per Click Launceston</h3>
                <p className="text-sm text-muted-foreground">
                  Strategic PPC advertising across Google, Meta, LinkedIn, and other high-value platforms. We create a holistic <strong>ppc advertising launceston</strong> strategy for maximum reach and ROI.
                </p>
              </Card>

              <Card className="p-6 hover-scale">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Regional & Statewide Campaigns</h3>
                <p className="text-sm text-muted-foreground">
                  Specialized campaigns designed to target Launceston, Northern Tasmania, or expand statewide to compete effectively with Hobart-based businesses.
                </p>
              </Card>

              <Card className="p-6 hover-scale">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Local Service Business Campaigns</h3>
                <p className="text-sm text-muted-foreground">
                  Tailored campaigns for local service businesses (trades, healthcare, professional services) designed to generate high-quality local leads in the Launceston area.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                variant="cta" 
                size="lg"
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7 whitespace-normal leading-tight"
                onClick={() => navigate('/contact')}
              >
                <span className="sm:hidden">Get Custom Strategy →</span>
                <span className="hidden sm:inline">Ready for a Custom Google Ads Strategy? Contact Us →</span>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              FAQs: Your Questions About Google Ads in Launceston Answered
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16">
              We know you have specific concerns about ad spend and agency performance in a regional market. Here are clear, honest answers.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  How much budget do I need for Google Ads in Launceston?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The required budget depends on your industry competition and target CPA. For most Launceston businesses, we recommend starting with $1,000 - $2,500 per month to allow for sufficient data collection and optimization. Our <strong>ppc management launceston</strong> team will analyze your market during your free audit and recommend a precise, efficient budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  How long does it take to see results from ppc launceston campaigns?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Unlike SEO, PPC delivers immediate results. You will see traffic and leads within days of launch. The first 4-6 weeks are dedicated to data collection and optimization. Significant improvements in CPA and ROAS typically occur within 2-3 months as our <strong>ppc experts launceston</strong> refine the campaigns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  What is the difference between Google Ads and adwords launceston?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Google Ads is the current name for the platform previously known as Google AdWords. They are the same thing. Whether you call it <strong>adwords launceston</strong> or Google Ads, we are the <strong>google ads agency launceston</strong> that manages it all.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  Do you offer an adwords management launceston service with a performance guarantee?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer the best guarantee in the industry: No Lock-In Contracts. Our focus on ROAS is our guarantee. If we are not generating a positive return on your ad spend, you are free to leave at any time. We put the risk on us, not you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  Why should I choose Odin Digital over a large mainland google agency launceston?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Large mainland agencies often apply generic strategies designed for Sydney or Melbourne and have no understanding of Launceston's unique regional market. We are a lean team of <strong>ppc experts launceston</strong> who provide hyper-focused, personalized service. We understand the Launceston market, the competition with Hobart, and the importance of local reputation in Northern Tasmania.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  Do you manage other pay per click launceston platforms like Meta Ads?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. We are a full-service <strong>ppc agency launceston</strong> and manage campaigns across Google, Meta (Facebook/Instagram), LinkedIn, and other high-value platforms. We create a holistic <strong>ppc advertising launceston</strong> strategy for maximum reach and ROI.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  How do you prevent my budget from being wasted on clicks from outside Launceston?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We use precise geographic targeting (Launceston-only targeting, Northern Tasmania targeting, or Tasmania-wide targeting) to ensure your ads are only shown to people within your exact service area. We also use IP exclusions and location bid adjustments to maximize efficiency.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  Can you help Launceston businesses compete with Hobart for statewide customers?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. We specialize in positioning Launceston businesses to compete effectively with Hobart-based businesses for statewide Tasmanian customers. We use competitive intelligence, messaging, and targeting strategies to ensure you capture your fair share of the statewide market.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  Can you help me with my landing pages?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. Our service includes Landing Page Optimization (CRO). Your ad is only as good as the page it sends traffic to. We ensure your landing pages are perfectly aligned with your ad copy and designed to maximize conversions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  What metrics do you report on?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We report on the metrics that matter: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Quality, and Revenue Generated. We move beyond vanity metrics like impressions and clicks to focus on what actually drives your business forward.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section data-nav-contrast="dark" className="py-24 gradient-hero relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              Ready to Stop Wasting Budget and Start Dominating Launceston?
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Stop guessing with your <strong>ppc launceston</strong> budget. Start working with <strong>ppc experts launceston</strong> who deliver precision, transparency, and profit in Northern Tasmania's unique regional market.
            </p>

            <Button 
              variant="cta" 
              size="lg"
              className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-10 py-5 sm:py-6 md:py-8 whitespace-normal leading-tight"
              onClick={() => navigate('/contact')}
            >
              <span className="sm:hidden">FREE Strategy Session →</span>
              <span className="hidden sm:inline">Claim Your FREE Launceston PPC Strategy Session →</span>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default GoogleAdsLaunceston;