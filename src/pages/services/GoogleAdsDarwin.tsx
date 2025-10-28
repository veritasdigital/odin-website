import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { SideTab } from "@/components/SideTab";
import { Target, Calendar, TrendingUp, Award, MapPin, BarChart3, Filter, Zap } from "lucide-react";

const GoogleAdsDarwin = () => {
  const { openForm } = useMarketingForm();

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Performance-focused Google Ads agency in Darwin. We specialize in PPC management for Darwin and NT businesses, focusing on ROI and seasonal optimization. $574M+ in client revenue. No lock-in contracts.",
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
        "@id": "https://growth-conduit-central.lovable.app/google-ads-darwin",
        "name": "Odin Digital - Google Ads Agency Darwin",
        "description": "Darwin's top PPC management company. Expert Google Ads services focusing on local targeting and seasonal optimization.",
        "url": "https://growth-conduit-central.lovable.app/google-ads-darwin",
        "telephone": "+61-XXX-XXX-XXX",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Darwin",
          "addressRegion": "NT",
          "postalCode": "0800",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-12.4634",
          "longitude": "130.8456"
        },
        "areaServed": {
          "@type": "City",
          "name": "Darwin",
          "containedIn": {
            "@type": "State",
            "name": "Northern Territory"
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
          "name": "Darwin"
        },
        "description": "Expert Pay-Per-Click (PPC) and Google Ads management services for businesses in Darwin, NT, focusing on maximum Return on Ad Spend (ROAS) and seasonal optimization.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "PPC Management Darwin Services",
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
                "name": "PPC Advertising Darwin"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tourism & Hospitality Campaigns"
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
            "name": "How much budget do I need for Google Ads in Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The required budget depends on your industry competition and target CPA. For most Darwin businesses, we recommend starting with $1,000 - $2,500 per month to allow for sufficient data collection and optimization. Our ppc management darwin team will analyze your market during your free audit and recommend a precise, efficient budget."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from ppc darwin campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike SEO, PPC delivers immediate results. You will see traffic and leads within days of launch. The first 4-6 weeks are dedicated to data collection and optimization. Significant improvements in CPA and ROAS typically occur within 2-3 months as our ppc experts darwin refine the campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Google Ads and adwords darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google Ads is the current name for the platform previously known as Google AdWords. They are the same thing. Whether you call it adwords darwin or Google Ads, we are the google ads agency darwin that manages it all."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer an adwords management darwin service with a performance guarantee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer the best guarantee in the industry: No Lock-In Contracts. Our focus on ROAS is our guarantee. If we are not generating a positive return on your ad spend, you are free to leave at any time. We put the risk on us, not you."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I choose Odin Digital over a large national google agency darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Large national agencies often apply generic strategies designed for big cities and are slow to adapt. We are a lean team of ppc experts darwin who provide hyper-focused, personalized service. We understand the Darwin market, the seasonal fluctuations, and the importance of precision in a smaller market."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manage other pay per click darwin platforms like Meta Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We are a full-service ppc agency darwin and manage campaigns across Google, Meta (Facebook/Instagram), LinkedIn, and other high-value platforms. We create a holistic ppc advertising darwin strategy for maximum reach and ROI."
            }
          },
          {
            "@type": "Question",
            "name": "How do you prevent my budget from being wasted on clicks from outside Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use precise geographic targeting (radius targeting, suburb targeting, or NT-wide targeting) to ensure your ads are only shown to people within your exact service area. We also use IP exclusions and location bid adjustments to maximize efficiency."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with seasonal campaigns for tourism businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in seasonal campaign optimization for Darwin's tourism and hospitality sectors. We scale campaigns during the Dry Season (peak tourism) and optimize for efficiency during the Wet Season."
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

  const faqs = [
    {
      question: "How much budget do I need for Google Ads in Darwin?",
      answer: "The required budget depends on your industry competition and target CPA. For most Darwin businesses, we recommend starting with $1,000 - $2,500 per month to allow for sufficient data collection and optimization. Our ppc management darwin team will analyze your market during your free audit and recommend a precise, efficient budget."
    },
    {
      question: "How long does it take to see results from ppc darwin campaigns?",
      answer: "Unlike SEO, PPC delivers immediate results. You will see traffic and leads within days of launch. The first 4-6 weeks are dedicated to data collection and optimization. Significant improvements in CPA and ROAS typically occur within 2-3 months as our ppc experts darwin refine the campaigns."
    },
    {
      question: "What is the difference between Google Ads and adwords darwin?",
      answer: "Google Ads is the current name for the platform previously known as Google AdWords. They are the same thing. Whether you call it adwords darwin or Google Ads, we are the google ads agency darwin that manages it all."
    },
    {
      question: "Do you offer an adwords management darwin service with a performance guarantee?",
      answer: "We offer the best guarantee in the industry: No Lock-In Contracts. Our focus on ROAS is our guarantee. If we are not generating a positive return on your ad spend, you are free to leave at any time. We put the risk on us, not you."
    },
    {
      question: "Why should I choose Odin Digital over a large national google agency darwin?",
      answer: "Large national agencies often apply generic strategies designed for big cities and are slow to adapt. We are a lean team of ppc experts darwin who provide hyper-focused, personalized service. We understand the Darwin market, the seasonal fluctuations, and the importance of precision in a smaller market."
    },
    {
      question: "Do you manage other pay per click darwin platforms like Meta Ads?",
      answer: "Yes. We are a full-service ppc agency darwin and manage campaigns across Google, Meta (Facebook/Instagram), LinkedIn, and other high-value platforms. We create a holistic ppc advertising darwin strategy for maximum reach and ROI."
    },
    {
      question: "How do you prevent my budget from being wasted on clicks from outside Darwin?",
      answer: "We use precise geographic targeting (radius targeting, suburb targeting, or NT-wide targeting) to ensure your ads are only shown to people within your exact service area. We also use IP exclusions and location bid adjustments to maximize efficiency."
    },
    {
      question: "Can you help with seasonal campaigns for tourism businesses?",
      answer: "Yes. We specialize in seasonal campaign optimization for Darwin's tourism and hospitality sectors. We scale campaigns during the Dry Season (peak tourism) and optimize for efficiency during the Wet Season."
    },
    {
      question: "Can you help me with my landing pages?",
      answer: "Yes. Our service includes Landing Page Optimization (CRO). Your ad is only as good as the page it sends traffic to. We ensure your landing pages are perfectly aligned with your ad copy and designed to maximize conversions."
    },
    {
      question: "What metrics do you report on?",
      answer: "We report on the metrics that matter: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Quality, and Revenue Generated. We move beyond vanity metrics like impressions and clicks to focus on what actually drives your business forward."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Google Ads Agency Darwin | PPC Management Experts | Odin Digital</title>
        <meta name="description" content="Stop wasting budget on Google Ads. Odin Digital is the PPC agency Darwin trusts for maximum ROI. Precision targeting, seasonal optimization, and no lock-in contracts. Get your free audit." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <SideTab />

        {/* Hero Section */}
        <section className="relative pt-28 md:pt-32 pb-20 md:pb-32 overflow-hidden decorative-circles">
          <div className="absolute inset-0 gradient-hero opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                Google Ads Agency Darwin
              </h1>
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Stop Wasting Your Budget. Start Dominating Your Market.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                The PPC Agency Darwin Businesses Trust for Maximum ROI in a Competitive Market.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Partner with Odin Digital and Turn Your Google Ads Budget into Verified Revenue.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
                Darwin businesses face unique challenges. The market is smaller. The competition is fierce. And most importantly, every dollar of wasted ad spend hits harder. Generic PPC strategies designed for Sydney or Melbourne simply don't work here. You need precision. You need expertise. You need an adwords management darwin team that understands your market inside and out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={openForm}
                  size="xl" 
                  variant="cta"
                  className="group"
                >
                  Get Your FREE Darwin PPC Strategy Session
                  <Target className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$574M+</div>
                  <div className="text-sm text-muted-foreground">Client Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Client Retention Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Agitation Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  The Problem: Why Most Adwords Management Darwin Agencies Fail
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Darwin businesses face unique challenges that generic adwords agency darwin providers simply don't understand.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">The Small Market Problem</h3>
                      <p className="text-muted-foreground">
                        Darwin's population is smaller. Your target audience is more limited. National agencies apply broad-brush strategies that bleed budget on irrelevant clicks. You need hyper-local precision targeting—suburb by suburb, IP by IP—not generic "NT-wide" campaigns that waste money on Alice Springs or Katherine when you only serve Darwin.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Seasonal Fluctuation Disaster</h3>
                      <p className="text-muted-foreground">
                        Darwin has two seasons: the Dry (high demand, high tourism) and the Wet (everything slows down). Most PPC agencies run the same budget and bids year-round, burning cash during low-converting months and missing out on high-value opportunities during peak season. Your campaigns need dynamic, data-driven seasonal optimization.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Geographic Waste</h3>
                      <p className="text-muted-foreground">
                        The Northern Territory is massive, but your service area is not. If you're a local business serving Darwin only, why are you paying for clicks from Palmerston, Casuarina, or worse—places hundreds of kilometers away? Most ppc darwin agencies fail to implement precise radius targeting and location exclusions, wasting 20-40% of your budget.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">"Set It and Forget It" Syndrome</h3>
                      <p className="text-muted-foreground">
                        The biggest sin in google ads agency darwin work is neglect. Agencies set up your campaigns, run them for a few months, collect their fees, and provide zero meaningful optimization. Meanwhile, your Cost Per Acquisition (CPA) skyrockets, and your Return on Ad Spend (ROAS) tanks. You need relentless, data-driven optimization—weekly at a minimum.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="text-center mt-12">
                <Button 
                  onClick={openForm}
                  size="xl" 
                  variant="cta"
                >
                  Stop the Budget Bleed: Talk to a PPC Expert
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
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  The Odin Digital Solution: Precision-Focused PPC Management Darwin
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  We are the adwords management darwin team that brings a data-science approach to your campaigns, tailored specifically for the Darwin market.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Hyper-Local Targeting: Darwin & NT Only</h3>
                  <p className="text-muted-foreground">
                    We implement surgical precision targeting. Radius targeting down to 1km. Suburb-level exclusions. IP address filtering. Location bid adjustments to ensure your budget is focused on the exact geographic area where your customers are. No wasted spend on Katherine, Tennant Creek, or tourists who will never convert.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                      <Calendar className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Seasonal Campaign Optimization</h3>
                  <p className="text-muted-foreground">
                    We analyze your historical data and build campaigns that scale aggressively during the Dry Season (April-October) when tourism and demand are high, and optimize for efficiency during the Wet Season (November-March). This dynamic approach ensures maximum ROAS year-round.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Conversion-First Campaign Structure</h3>
                  <p className="text-muted-foreground">
                    We don't focus on clicks or impressions. We focus on conversions—phone calls, form fills, and revenue. Every campaign is structured around conversion tracking, with bid strategies optimized for Target CPA and Target ROAS. We make Google's AI work for you, not against you.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                      <BarChart3 className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Transparent, ROI-Focused Reporting</h3>
                  <p className="text-muted-foreground">
                    You get a live dashboard showing exactly where every dollar is spent, what it's generating, and what we're doing to improve it. No vanity metrics. No hiding behind "brand awareness." Just clear, actionable data on CPA, ROAS, and revenue.
                  </p>
                </Card>
              </div>

              <div className="text-center mt-12">
                <Button 
                  onClick={openForm}
                  size="xl" 
                  variant="cta"
                >
                  See Our Darwin PPC Management Packages
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
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Our Google Ads Services: Built for Darwin Businesses
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  As a leading google agency darwin wide, we offer a full spectrum of PPC services designed to dominate your local market.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-8 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">
                    <Award className="w-10 h-10 text-primary mb-4" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Google Ads Management</h3>
                  <p className="text-muted-foreground">
                    Full-service campaign setup, optimization, and monthly reporting. We handle Search, Display, Shopping, and YouTube campaigns to maximize your visibility and conversions across the entire Google ecosystem.
                  </p>
                </Card>

                <Card className="p-8 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">
                    <Target className="w-10 h-10 text-primary mb-4" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Pay Per Click Darwin</h3>
                  <p className="text-muted-foreground">
                    Precision-targeted PPC campaigns that deliver high-quality leads at the lowest possible Cost Per Acquisition. We specialize in competitive Darwin industries including real estate, legal, medical, and home services.
                  </p>
                </Card>

                <Card className="p-8 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">
                    <MapPin className="w-10 h-10 text-primary mb-4" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Tourism & Hospitality Campaigns</h3>
                  <p className="text-muted-foreground">
                    We understand Darwin's tourism economy. We build campaigns that capitalize on seasonal peaks, target interstate and international visitors, and ensure your tours, hotels, and attractions dominate during the high-demand Dry Season.
                  </p>
                </Card>

                <Card className="p-8 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">
                    <Filter className="w-10 h-10 text-primary mb-4" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Landing Page Optimization (CRO)</h3>
                  <p className="text-muted-foreground">
                    Your ad is only as good as the page it sends traffic to. We analyze your landing pages, identify conversion bottlenecks, and implement CRO strategies to ensure every click has the highest possible chance of converting into a customer.
                  </p>
                </Card>
              </div>

              <div className="text-center mt-12">
                <Button 
                  onClick={openForm}
                  size="xl" 
                  variant="cta"
                >
                  Ready for a Custom Google Ads Strategy? Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  FAQs: Your Questions About Google Ads in Darwin Answered
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground">
                  We know you have specific concerns about ad spend and agency performance in a smaller market. Here are clear, honest answers.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 gradient-hero text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Stop Wasting Budget and Start Dominating Darwin?
              </h2>
              <p className="text-lg md:text-xl mb-10 opacity-90">
                Stop guessing with your ppc darwin budget. Start working with ppc experts darwin who deliver precision, transparency, and profit in Darwin's unique market.
              </p>
              <Button 
                onClick={openForm}
                size="xl" 
                className="bg-white text-primary hover:bg-white/90 font-bold text-lg"
              >
                Claim Your FREE Darwin PPC Strategy Session
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default GoogleAdsDarwin;
