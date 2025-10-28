import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Target, TrendingUp, Users, Zap, Clock, BarChart, Shield, Award, Lightbulb, LineChart, MousePointerClick } from "lucide-react";
import { Link } from "react-router-dom";

const GoogleAdsNewcastle = () => {
  const { openForm } = useMarketingForm();

  const schema = {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Odin Digital",
      "url": "https://growth-conduit-central.lovable.app/",
      "logo": "https://growth-conduit-central.lovable.app/logo.png",
      "description": "Performance-focused digital marketing agency specializing in PPC, Meta Ads, Web Design, and SEO with no lock-in contracts.",
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
    },
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Odin Digital - Google Ads Newcastle",
      "image": "https://growth-conduit-central.lovable.app/newcastle-ppc.jpg",
      "url": "https://growth-conduit-central.lovable.app/google-ads-newcastle",
      "telephone": "+61-XXX-XXX-XXX",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Street Address",
        "addressLocality": "Newcastle",
        "addressRegion": "NSW",
        "postalCode": "2300",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -32.9283,
        "longitude": 151.7817
      },
      "areaServed": {
        "@type": "City",
        "name": "Newcastle"
      },
      "priceRange": "$$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "50"
      }
    },
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Google Ads Management Newcastle",
      "provider": {
        "@type": "Organization",
        "name": "Odin Digital"
      },
      "areaServed": {
        "@type": "City",
        "name": "Newcastle"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "PPC Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Google Ads Management Newcastle",
              "description": "Full-service Google Ads management focused on maximizing ROI and minimizing wasted spend."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Advanced Conversion Tracking",
              "description": "Server-side conversion tracking setup for accurate revenue attribution."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Landing Page Design",
              "description": "High-converting, mobile-first landing pages tailored for Google Ads campaigns."
            }
          }
        ]
      }
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why should I hire a Google Ads agency Newcastle instead of managing it myself?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While managing your own Google Ads can seem cost-effective, it often leads to significant wasted spend and missed opportunities. Google Ads is a complex, constantly evolving platform. A professional Google Ads agency Newcastle firm like Odin Digital has the expertise, tools, and time to manage your campaigns for maximum profitability. We spot costly mistakes, implement advanced bidding strategies, and optimize for conversion data, not just clicks. Our team's singular focus is on achieving a high ROI, which is why our clients see a 540% average return. Hiring us isn't an expense; it's an investment that frees up your time and ensures your budget is working as hard as possible to generate leads and sales."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between Google Ads management Newcastle and PPC management Newcastle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In the context of our services, the terms are often used interchangeably, but 'PPC management Newcastle' (Pay-Per-Click) is the broader term. PPC includes all paid advertising where you pay for a click, such as Google Ads, Meta Ads (Facebook/Instagram), and LinkedIn Ads. 'Google Ads management Newcastle' specifically refers to managing campaigns within the Google platform (Search, Display, Shopping, YouTube). At Odin Digital, we are experts in both. Our focus is on the entire PPC ecosystem, ensuring your ad spend is optimized across all channels to maximize your overall return on investment."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost to hire an adwords management company Newcastle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost to hire an adwords management company Newcastle can vary widely, but our pricing is based on a percentage of your ad spend, ensuring our success is directly tied to yours. We don't offer cheap, fixed-price packages because they rarely work. Our custom strategies are built to deliver maximum ROI, not minimum cost. The best way to determine the exact investment is through a free strategy session. We'll analyze your goals and current spend, and provide a transparent proposal that details both the management fee and the expected return, ensuring you see us as a profit centre, not a cost."
          }
        },
        {
          "@type": "Question",
          "name": "What Google Ads services in Newcastle does Odin Digital offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Odin Digital offers comprehensive Google Ads services in Newcastle including: Full Google Ads Account Management, Advanced Conversion Tracking & Attribution, Custom Landing Page Design & Optimization, and Free Initial Google Ads Audit. Our Newcastle-based team provides end-to-end campaign management from strategy through execution and optimization."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to sign a long-term contract?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Unlike many Google Ads agencies in Newcastle, we don't require long-term contracts or lock-in periods. We believe our results should speak for themselves. You're free to cancel at any time with 30 days' notice. We earn your business every month by delivering exceptional ROI, not by trapping you in a contract."
          }
        },
        {
          "@type": "Question",
          "name": "How is Odin Digital different from other Google Ads agencies in Newcastle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We differentiate ourselves through transparent reporting, results-focused strategies, expert team with proven track record, and no lock-in contracts. Our average client ROI is 540%, and we focus exclusively on performance metrics that matter to your bottom line. We're not interested in vanity metrics - we care about revenue, conversions, and profitability."
          }
        },
        {
          "@type": "Question",
          "name": "Can you work with my existing Google Ads campaigns, or do I need to start from scratch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We can absolutely work with your existing Google Ads campaigns. In fact, most of our Newcastle clients come to us with underperforming campaigns that need optimization. We'll conduct a comprehensive audit of your current setup, identify areas for improvement, and implement strategic changes to boost performance. Starting fresh is only necessary if your account structure is fundamentally flawed."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to see results from Google Ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can start seeing clicks and traffic immediately once campaigns are live. However, meaningful, optimized results typically emerge within 60-90 days as we gather conversion data and refine targeting. Google's algorithm needs time to learn and optimize. We focus on sustainable, long-term growth rather than quick wins that don't last."
          }
        },
        {
          "@type": "Question",
          "name": "What industries do you work with in Newcastle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with a diverse range of Newcastle businesses including e-commerce, professional services (legal, accounting, consulting), healthcare and medical practices, home services (plumbing, electrical, renovation), B2B and SaaS companies, and retail and hospitality. Our strategies are customized to each industry's unique challenges and customer journey."
          }
        },
        {
          "@type": "Question",
          "name": "Will I have a dedicated account manager?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every client at Odin Digital is assigned a dedicated account manager who understands your business, goals, and industry. Your account manager will be your primary point of contact for strategy discussions, campaign updates, and performance reviews. We believe in building long-term relationships, not treating you like a ticket number."
          }
        },
        {
          "@type": "Question",
          "name": "How often will I receive reports on my Google Ads performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You'll receive detailed monthly reports that break down all key metrics: spend, clicks, conversions, cost per acquisition, and ROI. Additionally, you have 24/7 access to a live dashboard where you can check your campaign performance anytime. We also schedule monthly strategy calls to review results and discuss optimization opportunities."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in your free Google Ads audit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our free Google Ads audit includes: comprehensive account structure analysis, keyword and targeting review, ad copy and landing page assessment, conversion tracking evaluation, budget allocation and bidding strategy review, competitive analysis, and a detailed report with actionable recommendations. There's no obligation - it's a genuinely valuable analysis of your current campaigns."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle landing page design as part of your Google Ads services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We recognize that sending traffic to a poor landing page is a waste of ad spend. We offer custom landing page design and optimization as part of our Google Ads services. Our pages are mobile-first, conversion-optimized, and designed specifically to turn clicks into customers. This integrated approach is why our campaigns consistently outperform."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with conversion tracking setup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Accurate conversion tracking is the foundation of successful Google Ads campaigns. We implement server-side conversion tracking (Google Tag Manager, GA4, and enhanced conversions) to ensure precise attribution even with browser privacy restrictions. Without proper tracking, you're flying blind - we make sure you know exactly which ads are driving revenue."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Newcastle businesses different, and how do you account for that in your Google Ads strategies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Newcastle has a unique business landscape with strong local competition and a tight-knit community. We tailor our Google Ads strategies to target Newcastle-specific search behavior, local intent keywords, and geo-targeted campaigns. We understand the local market dynamics and customer preferences, which gives our Newcastle clients a distinct advantage over generic, one-size-fits-all agency approaches."
          }
        },
        {
          "@type": "Question",
          "name": "Besides Google Ads, what other digital marketing services does Odin Digital offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In addition to Google Ads management, we offer SEO (search engine optimization), Meta Ads (Facebook and Instagram advertising), Web Design and Development, and Marketing Consulting. Our integrated approach ensures your digital marketing channels work together to maximize overall ROI. Many of our Newcastle clients benefit from a multi-channel strategy."
          }
        }
      ]
    },
    review: {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "Organization",
        "name": "Odin Digital"
      },
      "author": {
        "@type": "Person",
        "name": "Liam C"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
      "publisher": {
        "@type": "Organization",
        "name": "Krush Organics"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Google Ads Agency Newcastle | PPC Management | Odin Digital</title>
        <meta name="description" content="Newcastle's top Google Ads agency. Stop wasting budget and start converting. 540% average ROI. No lock-in contracts. Get your free audit today." />
        <script type="application/ld+json">{JSON.stringify(schema.organization)}</script>
        <script type="application/ld+json">{JSON.stringify(schema.localBusiness)}</script>
        <script type="application/ld+json">{JSON.stringify(schema.service)}</script>
        <script type="application/ld+json">{JSON.stringify(schema.faq)}</script>
        <script type="application/ld+json">{JSON.stringify(schema.review)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Section 1: Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-primary opacity-5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Newcastle's #1</span>
                <br />
                Google Ads Agency
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Stop wasting budget on underperforming campaigns. Get real ROI with transparent, results-driven Google Ads management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button onClick={openForm} size="xl" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                  GET YOUR FREE AUDIT
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Social Proof Metrics */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-background to-primary/5 border border-primary/10 hover:shadow-primary transition-all duration-300">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">540%</div>
                <div className="text-muted-foreground">Average ROI</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-background to-primary/5 border border-primary/10 hover:shadow-primary transition-all duration-300">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">100+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-background to-primary/5 border border-primary/10 hover:shadow-primary transition-all duration-300">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">$50M+</div>
                <div className="text-muted-foreground">Ad Spend Managed</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-background to-primary/5 border border-primary/10 hover:shadow-primary transition-all duration-300">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">4.9</div>
                <div className="text-muted-foreground">Client Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Problem-Agitation Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Are You <span className="bg-gradient-primary bg-clip-text text-transparent">Wasting Money</span> on Google Ads?
              </h2>
              <p className="text-xl text-muted-foreground">
                Most Newcastle businesses struggle with these common Google Ads problems:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-8 rounded-xl border border-border bg-card hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold mb-3">High Cost Per Click, Low ROI</h3>
                <p className="text-muted-foreground">
                  You're spending thousands on clicks but seeing minimal conversions. Your cost per acquisition is through the roof, and you can't figure out why.
                </p>
              </div>
              <div className="p-8 rounded-xl border border-border bg-card hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold mb-3">Wrong Audience, Wrong Results</h3>
                <p className="text-muted-foreground">
                  Your ads are showing to people who will never buy. You're attracting tire-kickers instead of serious customers ready to purchase.
                </p>
              </div>
              <div className="p-8 rounded-xl border border-border bg-card hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold mb-3">No Transparency, No Trust</h3>
                <p className="text-muted-foreground">
                  Your current agency sends vague reports filled with vanity metrics. You have no idea what's actually working or where your money is going.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Testimonials Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Real Results from <span className="bg-gradient-primary bg-clip-text text-transparent">Real Clients</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-xl bg-card border border-primary/20 hover:shadow-glow transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-bold">Liam C</div>
                    <div className="text-sm text-muted-foreground">Krush Organics</div>
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-xl bg-card border border-primary/20 hover:shadow-glow transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">
                  "After wasting money with other agencies, Odin Digital completely turned our Google Ads around. We're now seeing consistent, profitable results every month."
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-bold">Sarah M</div>
                    <div className="text-sm text-muted-foreground">Newcastle Business Owner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Complete <span className="bg-gradient-primary bg-clip-text text-transparent">Google Ads Services</span> in Newcastle
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to dominate your market with Google Ads.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-xl border border-border bg-card hover:shadow-elegant transition-all duration-300">
                <MousePointerClick className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Full Google Ads Account Management</h3>
                <p className="text-muted-foreground mb-4">
                  End-to-end campaign management: strategy, setup, optimization, and ongoing refinement. We handle everything so you can focus on running your business.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Search, Display, Shopping & YouTube campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Advanced keyword research and targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>A/B testing and continuous optimization</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-xl border border-border bg-card hover:shadow-elegant transition-all duration-300">
                <BarChart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Advanced Conversion Tracking & Attribution</h3>
                <p className="text-muted-foreground mb-4">
                  Know exactly which ads are driving revenue with our server-side conversion tracking setup. No more guesswork.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Google Tag Manager implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>GA4 and enhanced conversions setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Custom event tracking for your unique goals</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-xl border border-border bg-card hover:shadow-elegant transition-all duration-300">
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Custom Landing Page Design & Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  High-converting, mobile-first landing pages specifically designed to turn your Google Ads clicks into customers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Conversion-focused design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Fast load times for better Quality Score</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Ongoing split testing and improvements</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 rounded-xl border border-border bg-card hover:shadow-elegant transition-all duration-300">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Free Initial Google Ads Audit</h3>
                <p className="text-muted-foreground mb-4">
                  Get a comprehensive analysis of your current Google Ads performance with actionable recommendations to improve ROI.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Account structure and settings review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Keyword and ad copy analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Detailed improvement roadmap</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Differentiators Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why <span className="bg-gradient-primary bg-clip-text text-transparent">Odin Digital</span> is Different
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="p-6 rounded-xl bg-card border border-primary/20 text-center hover:shadow-glow transition-all duration-300">
                <LineChart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Transparent Reporting</h3>
                <p className="text-sm text-muted-foreground">
                  Full visibility into every dollar spent and every lead generated. No smoke and mirrors.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20 text-center hover:shadow-glow transition-all duration-300">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Results-Focused Strategy</h3>
                <p className="text-sm text-muted-foreground">
                  We optimize for revenue and conversions, not vanity metrics like impressions.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20 text-center hover:shadow-glow transition-all duration-300">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Expert Team</h3>
                <p className="text-sm text-muted-foreground">
                  Certified Google Ads specialists with years of experience managing high-budget campaigns.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20 text-center hover:shadow-glow transition-all duration-300">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">No Lock-In Contracts</h3>
                <p className="text-sm text-muted-foreground">
                  Cancel anytime with 30 days' notice. We earn your business every month.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Proven <span className="bg-gradient-primary bg-clip-text text-transparent">4-Step Process</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                  <h3 className="text-xl font-bold mb-3">Discovery & Audit</h3>
                  <p className="text-muted-foreground">
                    We analyze your business, competitors, and current campaigns to identify opportunities.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                  <h3 className="text-xl font-bold mb-3">Strategy & Setup</h3>
                  <p className="text-muted-foreground">
                    We build custom campaigns with precise targeting, compelling ad copy, and optimized landing pages.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                  <h3 className="text-xl font-bold mb-3">Launch & Monitor</h3>
                  <p className="text-muted-foreground">
                    Your campaigns go live, and we closely monitor performance daily to catch issues early.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                  <h3 className="text-xl font-bold mb-3">Optimize & Scale</h3>
                  <p className="text-muted-foreground">
                    Continuous testing and refinement to improve ROI, then scale what works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Why Choose Us Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Newcastle Businesses <span className="bg-gradient-primary bg-clip-text text-transparent">Choose Us</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Local Market Expertise</h3>
                    <p className="text-muted-foreground">
                      We understand Newcastle's unique business landscape and customer behavior. Our strategies are tailored to your local market, not copy-pasted from generic playbooks.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Data-Driven Decisions</h3>
                    <p className="text-muted-foreground">
                      Every optimization is backed by real conversion data and performance metrics. We don't guess - we test, measure, and improve based on facts.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                    <p className="text-muted-foreground">
                      Your success is our success. You'll have a dedicated account manager who knows your business inside and out, available whenever you need them.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Integrated Approach</h3>
                    <p className="text-muted-foreground">
                      Google Ads works best when integrated with <Link to="/services/seo" className="text-primary hover:underline">SEO</Link>, <Link to="/services/social-media" className="text-primary hover:underline">Meta Ads</Link>, and <Link to="/services/website-design" className="text-primary hover:underline">Web Design</Link>. We offer a complete digital marketing ecosystem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-elegant">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                  alt="Google Ads Dashboard Analytics" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Stop Wasting Money and Start Seeing Real Results?
              </h2>
              <p className="text-xl text-white/90">
                Get your free Google Ads audit and discover exactly how much revenue you're leaving on the table.
              </p>
              <Button 
                onClick={openForm} 
                size="xl" 
                className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                CLAIM YOUR FREE AUDIT NOW
              </Button>
              <p className="text-white/80 text-sm">
                No obligation. No high-pressure sales tactics. Just honest insights and actionable recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Google Ads Services in Other Australian Cities */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Google Ads Services in Other Australian Cities</h2>
              <p className="text-muted-foreground">
                We also provide expert Google Ads management in{" "}
                <Link to="/google-ads-sydney" className="text-primary hover:underline">Sydney</Link>,{" "}
                <Link to="/google-ads-brisbane" className="text-primary hover:underline">Brisbane</Link>,{" "}
                <Link to="/google-ads-melbourne" className="text-primary hover:underline">Melbourne</Link>,{" "}
                <Link to="/google-ads-perth" className="text-primary hover:underline">Perth</Link>,{" "}
                <Link to="/google-ads-gold-coast" className="text-primary hover:underline">Gold Coast</Link>, and{" "}
                <Link to="/google-ads-canberra" className="text-primary hover:underline">Canberra</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 11: FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Why should I hire a Google Ads agency Newcastle instead of managing it myself?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    While managing your own Google Ads can seem cost-effective, it often leads to significant wasted spend and missed opportunities. Google Ads is a complex, constantly evolving platform. A professional Google Ads agency Newcastle firm like Odin Digital has the expertise, tools, and time to manage your campaigns for maximum profitability. We spot costly mistakes, implement advanced bidding strategies, and optimize for conversion data, not just clicks. Our team's singular focus is on achieving a high ROI, which is why our clients see a 540% average return. Hiring us isn't an expense; it's an investment that frees up your time and ensures your budget is working as hard as possible to generate leads and sales.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    What is the difference between Google Ads management Newcastle and PPC management Newcastle?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    In the context of our services, the terms are often used interchangeably, but "PPC management Newcastle" (Pay-Per-Click) is the broader term. PPC includes all paid advertising where you pay for a click, such as Google Ads, Meta Ads (Facebook/Instagram), and LinkedIn Ads. "Google Ads management Newcastle" specifically refers to managing campaigns within the Google platform (Search, Display, Shopping, YouTube). At Odin Digital, we are experts in both. Our focus is on the entire PPC ecosystem, ensuring your ad spend is optimized across all channels to maximize your overall return on investment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    How much does it cost to hire an adwords management company Newcastle?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The cost to hire an adwords management company Newcastle can vary widely, but our pricing is based on a percentage of your ad spend, ensuring our success is directly tied to yours. We don't offer cheap, fixed-price packages because they rarely work. Our custom strategies are built to deliver maximum ROI, not minimum cost. The best way to determine the exact investment is through a free strategy session. We'll analyze your goals and current spend, and provide a transparent proposal that details both the management fee and the expected return, ensuring you see us as a profit centre, not a cost.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    What Google Ads services in Newcastle does Odin Digital offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Odin Digital offers comprehensive Google Ads services in Newcastle including: Full Google Ads Account Management, Advanced Conversion Tracking & Attribution, Custom Landing Page Design & Optimization, and Free Initial Google Ads Audit. Our Newcastle-based team provides end-to-end campaign management from strategy through execution and optimization.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Do I need to sign a long-term contract?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No. Unlike many Google Ads agencies in Newcastle, we don't require long-term contracts or lock-in periods. We believe our results should speak for themselves. You're free to cancel at any time with 30 days' notice. We earn your business every month by delivering exceptional ROI, not by trapping you in a contract.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    How is Odin Digital different from other Google Ads agencies in Newcastle?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We differentiate ourselves through transparent reporting, results-focused strategies, expert team with proven track record, and no lock-in contracts. Our average client ROI is 540%, and we focus exclusively on performance metrics that matter to your bottom line. We're not interested in vanity metrics - we care about revenue, conversions, and profitability.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Can you work with my existing Google Ads campaigns, or do I need to start from scratch?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We can absolutely work with your existing Google Ads campaigns. In fact, most of our Newcastle clients come to us with underperforming campaigns that need optimization. We'll conduct a comprehensive audit of your current setup, identify areas for improvement, and implement strategic changes to boost performance. Starting fresh is only necessary if your account structure is fundamentally flawed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    How long does it take to see results from Google Ads?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You can start seeing clicks and traffic immediately once campaigns are live. However, meaningful, optimized results typically emerge within 60-90 days as we gather conversion data and refine targeting. Google's algorithm needs time to learn and optimize. We focus on sustainable, long-term growth rather than quick wins that don't last.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    What industries do you work with in Newcastle?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We work with a diverse range of Newcastle businesses including e-commerce, professional services (legal, accounting, consulting), healthcare and medical practices, home services (plumbing, electrical, renovation), B2B and SaaS companies, and retail and hospitality. Our strategies are customized to each industry's unique challenges and customer journey.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Will I have a dedicated account manager?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes. Every client at Odin Digital is assigned a dedicated account manager who understands your business, goals, and industry. Your account manager will be your primary point of contact for strategy discussions, campaign updates, and performance reviews. We believe in building long-term relationships, not treating you like a ticket number.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    How often will I receive reports on my Google Ads performance?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You'll receive detailed monthly reports that break down all key metrics: spend, clicks, conversions, cost per acquisition, and ROI. Additionally, you have 24/7 access to a live dashboard where you can check your campaign performance anytime. We also schedule monthly strategy calls to review results and discuss optimization opportunities.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    What's included in your free Google Ads audit?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our free Google Ads audit includes: comprehensive account structure analysis, keyword and targeting review, ad copy and landing page assessment, conversion tracking evaluation, budget allocation and bidding strategy review, competitive analysis, and a detailed report with actionable recommendations. There's no obligation - it's a genuinely valuable analysis of your current campaigns.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-13" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Do you handle landing page design as part of your Google Ads services?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes. We recognize that sending traffic to a poor landing page is a waste of ad spend. We offer custom landing page design and optimization as part of our Google Ads services. Our pages are mobile-first, conversion-optimized, and designed specifically to turn clicks into customers. This integrated approach is why our campaigns consistently outperform.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Can you help with conversion tracking setup?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Absolutely. Accurate conversion tracking is the foundation of successful Google Ads campaigns. We implement server-side conversion tracking (Google Tag Manager, GA4, and enhanced conversions) to ensure precise attribution even with browser privacy restrictions. Without proper tracking, you're flying blind - we make sure you know exactly which ads are driving revenue.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-15" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    What makes Newcastle businesses different, and how do you account for that in your Google Ads strategies?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Newcastle has a unique business landscape with strong local competition and a tight-knit community. We tailor our Google Ads strategies to target Newcastle-specific search behavior, local intent keywords, and geo-targeted campaigns. We understand the local market dynamics and customer preferences, which gives our Newcastle clients a distinct advantage over generic, one-size-fits-all agency approaches.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-16" className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    Besides Google Ads, what other digital marketing services does Odin Digital offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    In addition to Google Ads management, we offer <Link to="/services/seo" className="text-primary hover:underline">SEO</Link> (search engine optimization), <Link to="/services/social-media" className="text-primary hover:underline">Meta Ads</Link> (Facebook and Instagram advertising), <Link to="/services/website-design" className="text-primary hover:underline">Web Design and Development</Link>, and <Link to="/services/marketing-consulting" className="text-primary hover:underline">Marketing Consulting</Link>. Our integrated approach ensures your digital marketing channels work together to maximize overall ROI. Many of our Newcastle clients benefit from a multi-channel strategy.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <Footer />
        <SideTab />
        <MarketingFormModal />
      </div>
    </>
  );
};

export default GoogleAdsNewcastle;
