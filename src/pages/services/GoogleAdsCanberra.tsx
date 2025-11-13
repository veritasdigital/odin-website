import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowRight, Target, TrendingUp, Users, Award, DollarSign, BarChart3, Shield, Crosshair, CheckCircle2, AlertCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GoogleAdsCanberra = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Performance-focused Google Ads agency in Canberra. We specialize in PPC management for the ACT market, focusing on ROI and budget efficiency. $574M+ in client revenue. No lock-in contracts.",
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
        "@id": "https://growth-conduit-central.lovable.app/google-ads-canberra",
        "name": "Odin Digital - Google Ads Agency Canberra",
        "description": "Canberra's top PPC management company. Expert Google Ads services focusing on B2B and government sector targeting.",
        "url": "https://growth-conduit-central.lovable.app/google-ads-canberra",
        "telephone": "+61-XXX-XXX-XXX",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Canberra",
          "addressRegion": "ACT",
          "postalCode": "2600",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-35.2809",
          "longitude": "149.1300"
        },
        "areaServed": {
          "@type": "City",
          "name": "Canberra",
          "containedIn": {
            "@type": "State",
            "name": "ACT"
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
          "name": "Canberra"
        },
        "description": "Expert Pay-Per-Click (PPC) and Google Ads management services for businesses in Canberra, ACT, focusing on maximum Return on Ad Spend (ROAS).",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "PPC Management Canberra Services",
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
                "name": "PPC Advertising Canberra"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Corporate & Government Sector Targeting"
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
            "name": "How much budget do I need for Google Ads in Canberra?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The required budget varies based on your industry competition and target CPA. We recommend starting with a budget that allows for sufficient data collection, typically $1,500 - $3,000 per month for a focused campaign. Our ppc management canberra team will analyze your market during your audit and recommend a precise, efficient budget."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help me with adwords management company canberra services if I'm targeting the government sector?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in the nuances of B2B and government targeting. We use advanced audience lists, specific keyword targeting, and ad copy that speaks directly to the needs of the ACT's corporate and public sectors, making us the best ppc management company for this niche."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from ppc canberra campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike SEO, PPC delivers immediate results. You will see traffic and leads within days of launch. The first 4-6 weeks are dedicated to data collection and optimization. Significant improvements in CPA and ROAS typically occur within 2-3 months as our ppc experts canberra refine the campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Google Ads and adwords canberra?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google Ads is the current name for the platform previously known as Google AdWords. They are the same thing. Whether you call it adwords canberra or Google Ads, we are the google ads agency canberra that manages it all."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer an adwords management canberra service with a performance guarantee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer the best guarantee in the industry: No Lock-In Contracts. Our focus on ROAS is our guarantee. If we are not generating a positive return on your ad spend, you are free to leave. We put the risk on us, not you."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I choose Odin Digital over a large national google agency canberra?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Large national agencies often apply generic strategies and are slow to adapt. We are a lean team of ppc experts canberra who provide hyper-focused, personalized service. We understand the Canberra market, we are agile, and we focus on your ROAS, not our retainer."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manage other pay per click canberra platforms like Meta Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We are a full-service ppc agency canberra and manage campaigns across Google, Meta (Facebook/Instagram), LinkedIn, and other high-value platforms. We create a holistic ppc advertising canberra strategy for you."
            }
          },
          {
            "@type": "Question",
            "name": "How do you prevent my budget from being wasted on irrelevant clicks?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use a three-pronged approach: 1) Aggressive Negative Keywords, 2) Hyper-Specific Ad Grouping, and 3) Continuous Budget Monitoring. We filter out low-intent traffic and ensure your ads are only shown to people who are ready to buy."
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
              "text": "We report on the metrics that matter: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Quality, and Revenue Generated. We move beyond vanity metrics like impressions and clicks."
            }
          }
        ]
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Google Ads Canberra Services",
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

  const faqs = [
    {
      question: "How much budget do I need for Google Ads in Canberra?",
      answer: "The required budget varies based on your industry competition and target CPA. We recommend starting with a budget that allows for sufficient data collection, typically $1,500 - $3,000 per month for a focused campaign. Our ppc management canberra team will analyze your market during your audit and recommend a precise, efficient budget."
    },
    {
      question: "Can you help me with adwords management company canberra services if I'm targeting the government sector?",
      answer: "Yes. We specialize in the nuances of B2B and government targeting. We use advanced audience lists, specific keyword targeting, and ad copy that speaks directly to the needs of the ACT's corporate and public sectors, making us the best ppc management company for this niche."
    },
    {
      question: "How long does it take to see results from ppc canberra campaigns?",
      answer: "Unlike SEO, PPC delivers immediate results. You will see traffic and leads within days of launch. The first 4-6 weeks are dedicated to data collection and optimization. Significant improvements in CPA and ROAS typically occur within 2-3 months as our ppc experts canberra refine the campaigns."
    },
    {
      question: "What is the difference between Google Ads and adwords canberra?",
      answer: "Google Ads is the current name for the platform previously known as Google AdWords. They are the same thing. Whether you call it adwords canberra or Google Ads, we are the google ads agency canberra that manages it all."
    },
    {
      question: "Do you offer an adwords management canberra service with a performance guarantee?",
      answer: "We offer the best guarantee in the industry: No Lock-In Contracts. Our focus on ROAS is our guarantee. If we are not generating a positive return on your ad spend, you are free to leave. We put the risk on us, not you."
    },
    {
      question: "Why should I choose Odin Digital over a large national google agency canberra?",
      answer: "Large national agencies often apply generic strategies and are slow to adapt. We are a lean team of ppc experts canberra who provide hyper-focused, personalized service. We understand the Canberra market, we are agile, and we focus on your ROAS, not our retainer."
    },
    {
      question: "Do you manage other pay per click canberra platforms like Meta Ads?",
      answer: "Yes. We are a full-service ppc agency canberra and manage campaigns across Google, Meta (Facebook/Instagram), LinkedIn, and other high-value platforms. We create a holistic ppc advertising canberra strategy for you."
    },
    {
      question: "How do you prevent my budget from being wasted on irrelevant clicks?",
      answer: "We use a three-pronged approach: 1) Aggressive Negative Keywords, 2) Hyper-Specific Ad Grouping, and 3) Continuous Budget Monitoring. We filter out low-intent traffic and ensure your ads are only shown to people who are ready to buy."
    },
    {
      question: "Can you help me with my landing pages?",
      answer: "Yes. Our service includes Landing Page Optimization (CRO). Your ad is only as good as the page it sends traffic to. We ensure your landing pages are perfectly aligned with your ad copy and designed to maximize conversions."
    },
    {
      question: "What metrics do you report on?",
      answer: "We report on the metrics that matter: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Quality, and Revenue Generated. We move beyond vanity metrics like impressions and clicks."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Google Ads Agency Canberra | PPC Management Experts | Odin Digital</title>
        <meta name="description" content="Stop wasting budget on Google Ads. Odin Digital is the PPC agency Canberra trusts for maximum ROI. Precision targeting, transparent reporting, and no lock-in contracts. Get your free audit." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Section 1: Hero Section */}
        <section className="relative py-20 md:py-32 px-4 overflow-hidden bg-gradient-to-br from-white via-muted/30 to-muted/20">
          {/* Animated Background Blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-muted/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-muted/15 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Animated Background Blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Floating Circles */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/40 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.7s' }}></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-40 right-20 w-16 h-16 border-2 border-white/20 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-32 left-16 w-12 h-12 border-2 border-white/10 rotate-12"></div>

          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg animate-fade-in">
              Canberra Google Ads Agency: Stop Wasting Your Budget. Start Driving ROI.
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-white/90 drop-shadow-md animate-fade-in" style={{ animationDelay: '0.1s' }}>
              The PPC Agency Canberra Businesses Trust for Precision and Profit.
            </h2>
            <p className="text-lg mb-6 text-white/95 max-w-3xl mx-auto drop-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Partner with Odin Digital and Turn Your Google Ads Spend into Verified Revenue.
            </p>
            <p className="text-lg mb-8 text-white/90 max-w-3xl mx-auto drop-shadow animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Canberra's unique business landscape—dominated by government, professional services, and high-value B2B—demands precision in your PPC strategy. Generic google ads agency canberra providers waste your budget. We're the ppc agency canberra that delivers hyper-targeted campaigns, maximum ROI, and complete transparency. No lock-in contracts. Just results.
            </p>
            <Link to="/contact">
              <Button size="xl" className="text-base md:text-lg animate-fade-in shadow-xl" style={{ animationDelay: '0.4s' }}>
                Get Your FREE PPC Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Section 2: Social Proof Metrics */}
        <section className="py-20 px-4 bg-gradient-to-br from-accent/5 to-primary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">$574M+</div>
                <p className="text-muted-foreground">in Verified Client Revenue</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">540%</div>
                <p className="text-muted-foreground">Average ROI on advertising spend</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">95%</div>
                <p className="text-muted-foreground">Client Retention Rate</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">283+</div>
                <p className="text-muted-foreground">Successful Campaigns Delivered</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Problem/Agitation Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
              The Problem: Why Most Adwords Management Canberra Agencies Fail
            </h2>
            <p className="text-lg text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
              Canberra businesses face unique challenges that generic adwords agency canberra providers simply don't understand.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                <DollarSign className="h-12 w-12 text-destructive mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground">Budget Bleed: Spending Without Precision</h3>
                <p className="text-muted-foreground">
                  Most adwords management canberra providers use broad targeting and vague keyword strategies that waste your budget on irrelevant clicks. In Canberra's competitive, niche-driven market, this is financial suicide. Every dollar must be laser-focused.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                <AlertCircle className="h-12 w-12 text-destructive mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground">Lack of Strategic Bidding: The "Set It and Forget It" Disaster</h3>
                <p className="text-muted-foreground">
                  Generic google agency canberra teams set up campaigns and abandon them. They don't adjust bids based on real-time performance. The result? You overpay for low-value clicks while missing high-intent buyers.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                <BarChart3 className="h-12 w-12 text-destructive mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground">Black Box Metrics: Vanity Over Revenue</h3>
                <p className="text-muted-foreground">
                  They'll show you "impressions" and "clicks," but when you ask about actual revenue or ROAS (Return on Ad Spend), they dodge the question. Impressions don't pay your bills; profit does.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                <Crosshair className="h-12 w-12 text-destructive mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground">Failure to Target the ACT Economy</h3>
                <p className="text-muted-foreground">
                  Canberra's economy is unique—heavily government, B2B, and professional services. Generic ppc management canberra teams don't understand these audiences, leading to misaligned messaging and wasted spend.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/contact">
                <Button size="lg" className="text-base">
                  Stop Wasting Budget: Talk to an Adwords Expert <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: The Odin Digital Solution */}
        <section className="py-20 px-4 bg-gradient-to-br from-accent/5 to-primary/5 decorative-circles relative overflow-hidden">
          <div className="container mx-auto max-w-6xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
              The Odin Digital Solution: Precision-Focused PPC Management Canberra
            </h2>
            <p className="text-lg text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
              We are the adwords management canberra team that brings a data-science approach to your campaigns. We eliminate waste and focus your budget.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-primary group">
                <Crosshair className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground">Conversion-First Campaign Structure</h3>
                <p className="text-muted-foreground mb-6">
                  We build campaigns around your conversion goals, not generic traffic. Our ppc experts canberra team structures every ad group for maximum Quality Score and relevance, ensuring you pay less per click and convert more.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-primary group">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground">Hyper-Efficient Budget Management</h3>
                <p className="text-muted-foreground mb-6">
                  We use advanced negative keyword lists, geo-targeting, and bid adjustments to eliminate every dollar of waste. Your budget is focused exclusively on high-intent clicks that drive conversions.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-primary group">
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground">Transparent, ROI-Focused Reporting</h3>
                <p className="text-muted-foreground mb-6">
                  You have 24/7 access to a live dashboard showing CPA, ROAS, and revenue generated—not vanity metrics. Our ppc management company is built on radical transparency.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/contact">
                <Button size="lg" className="text-base">
                  See Our PPC Management Packages <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: Our Google Ads Services */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
              Our Google Ads Services: Built for Canberra's Economy
            </h2>
            <p className="text-lg text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
              As a leading google agency canberra wide, we offer a full spectrum of services designed to dominate your market.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-card border border-border text-center">
                <Target className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-4 text-foreground">Google Ads Management</h3>
                <p className="text-muted-foreground">
                  Full-service campaign setup, optimization, and ongoing management across Search, Shopping, and Display.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-card border border-border text-center">
                <DollarSign className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-4 text-foreground">Pay Per Click Canberra</h3>
                <p className="text-muted-foreground">
                  Expert PPC advertising across Google, Meta, and LinkedIn, tailored for the ACT market.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-card border border-border text-center">
                <Users className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-4 text-foreground">Corporate & Government Sector Targeting</h3>
                <p className="text-muted-foreground">
                  Specialized campaigns targeting Canberra's unique B2B and government audiences.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-card border border-border text-center">
                <TrendingUp className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-4 text-foreground">Landing Page Optimization (CRO)</h3>
                <p className="text-muted-foreground">
                  We optimize your landing pages to maximize conversions from your ad traffic.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/contact">
                <Button size="lg" className="text-base">
                  Ready for a Custom Google Ads Strategy? Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-accent/5 to-primary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
              FAQs: Addressing Your Concerns About PPC in Canberra
            </h2>
            <p className="text-lg text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
              We know you have specific concerns about ad spend and agency performance. We're here to provide clear, honest answers.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Section 6: Final CTA Section */}
        <section className="py-20 px-4 bg-gradient-primary text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Stop Wasting Budget and Start Driving Profit?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Stop guessing with your ppc canberra budget. Start working with ppc experts canberra who deliver precision and profit. Get your FREE, no-obligation PPC Strategy Session and discover exactly how much money you're leaving on the table.
            </p>
            <Link to="/contact">
              <Button size="xl" variant="secondary" className="text-base md:text-lg">
                Claim Your FREE PPC Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        <Footer />

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%] max-w-sm">
          <Link to="/contact" className="block">
            <Button size="lg" className="w-full text-sm">
              <span className="hidden xs:inline">Get Your FREE PPC Strategy Session</span>
              <span className="xs:hidden">FREE PPC Session</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GoogleAdsCanberra;
