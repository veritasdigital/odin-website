import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Closing } from "@/components/Closing";
import { SideTab } from "@/components/SideTab";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { ArrowRight, CheckCircle2, TrendingUp, Target, Award, Users, BarChart3, Search, MousePointerClick, Share2, Code, Zap, Shield, Clock, AlertTriangle, DollarSign, MapPin } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OnlineMarketingCompanyPerth = () => {
  return (
    <>
      <Helmet>
        <title>Online Marketing Company Perth | Digital Marketing Agency Perth | Odin Digital</title>
        <meta name="description" content="Stop paying for digital marketing that doesn't deliver. Odin Digital provides online marketing Perth services focused on revenue, not vanity metrics. No lock-in contracts. Get your free audit today." />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "name": "Odin Digital",
                "url": "https://growth-conduit-central.lovable.app/",
                "logo": "https://growth-conduit-central.lovable.app/logo.png",
                "description": "Performance-focused online marketing company in Perth, Australia. We specialize in SEO, Google Ads, Meta Ads, and web design for Perth businesses. $574M+ in client revenue. No lock-in contracts.",
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
                }
              },
              {
                "@type": "LocalBusiness",
                "name": "Odin Digital - Online Marketing Company Perth",
                "image": "https://growth-conduit-central.lovable.app/logo.png",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Perth",
                  "addressRegion": "WA",
                  "addressCountry": "AU"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": -31.9505,
                  "longitude": 115.8605
                },
                "url": "https://growth-conduit-central.lovable.app/online-marketing-company-perth",
                "telephone": "+61-XXX-XXX-XXX",
                "priceRange": "$$$",
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
                }
              },
              {
                "@type": "Service",
                "serviceType": "Online Marketing Perth",
                "provider": {
                  "@type": "Organization",
                  "name": "Odin Digital"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Perth",
                  "containedIn": {
                    "@type": "State",
                    "name": "Western Australia"
                  }
                },
                "description": "Comprehensive online marketing services for Perth businesses, including SEO, Google Ads, Meta Ads, and web design, focused on revenue growth and ROI."
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much does digital marketing cost in Perth?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Digital marketing Perth costs vary depending on your industry, competition, and goals. Most Perth businesses invest $2,500 - $10,000 per month for comprehensive digital marketing (SEO, Google Ads, Meta Ads, website). Our team will provide a detailed quote during your free audit."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to see results?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "SEO typically takes 3-6 months for significant results. Google Ads delivers immediate results (within days). Meta Ads typically show results within 2-4 weeks."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you work with small Perth businesses or only large enterprises?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We work with Perth businesses of all sizes, from small local businesses to large enterprises, offering flexible pricing and strategies designed to maximize ROI."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you measure ROI?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We implement advanced tracking to measure cost per acquisition, return on ad spend, conversion rate, and revenue impact. You will know exactly how much revenue your digital marketing is generating."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer a performance guarantee?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We offer the best guarantee in the industry: No Lock-In Contracts. If we are not delivering a positive ROI, you are free to leave at any time. We put the risk on us, not you."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you handle Perth's time zone difference?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We schedule all meetings and reporting to accommodate Perth's time zone (AWST). Our team is available during Perth business hours for support and communication."
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
          })}
        </script>
      </Helmet>

      <Header />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
          {/* Floating Circles Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight px-2">
                Online Marketing Company Perth
              </h1>
              
              <p className="hero-sub-headline text-base sm:text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 text-foreground font-semibold leading-tight px-4">
                Stop Paying for Digital Marketing That Doesn't Deliver Real Results. Start Dominating Perth's Market with Proven Online Marketing Strategies That Drive Revenue, Not Just Traffic.
              </p>

              <p className="text-sm sm:text-base md:text-lg mb-3 md:mb-4 text-muted-foreground font-medium px-4">
                The Digital Marketing Agency Perth Businesses Trust for High-Converting Campaigns and Predictable ROI.
              </p>

              <p className="text-xs sm:text-sm md:text-base mb-6 md:mb-8 text-muted-foreground leading-relaxed px-4">
                Partner with Odin Digital and Watch Your Perth Business Scale Profitably with Digital Marketing That Actually Works.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 md:mb-8 px-4">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm md:text-base">$574M+ Client Revenue</span>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm md:text-base">95% Retention Rate</span>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs sm:text-sm md:text-base">No Lock-In Contracts</span>
                </div>
              </div>

              <Link to="/contact" className="block px-4">
                <Button size="lg" className="bg-gradient-primary text-white hover:shadow-glow px-4 py-4 md:px-8 md:py-6 text-xs sm:text-sm md:text-base w-full sm:w-auto whitespace-normal h-auto leading-tight">
                  Get Your FREE Perth Digital Marketing Audit
                  <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Problem/Agitation Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-center px-2">
                Why Most Digital Marketing Agencies Fail Perth Businesses
              </h2>
              
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center mb-6 md:mb-8 px-4 max-w-4xl mx-auto">
                Perth businesses waste millions every year on digital marketing services Perth that look impressive on paper but deliver nothing to the bottom line. Here's why most agencies fail.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-card p-5 md:p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 md:h-8 md:w-8 text-destructive" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-3">The Vanity Metrics Trap</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    They show you impressive graphs of website traffic, social media followers, and keyword rankings. But none of that matters if you're not getting qualified leads and sales.
                  </p>
                </div>

                <div className="bg-card p-5 md:p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 md:h-8 md:w-8 text-destructive" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-3">The East Coast Strategy Problem</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    They apply the same generic strategies they use in Sydney or Melbourne, ignoring Perth's unique market, time zone, and customer behavior.
                  </p>
                </div>

                <div className="bg-card p-5 md:p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 md:h-8 md:w-8 text-destructive" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-3">No ROI Tracking</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    They can't tell you exactly how many leads, sales, or dollars their work generated. They hide behind vague metrics and industry jargon.
                  </p>
                </div>

                <div className="bg-card p-5 md:p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 md:h-8 md:w-8 text-destructive" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-3">Siloed Services Problem</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    They only offer one service (SEO or Google Ads or Social Media), forcing you to juggle multiple vendors with no cohesive strategy.
                  </p>
                </div>

                <div className="bg-card p-5 md:p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 md:h-8 md:w-8 text-destructive" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-3">Slow Results, No Accountability</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    They promise results "in 6-12 months" with no guarantee, then lock you into a 12-month contract so you can't leave when they underdeliver.
                  </p>
                </div>

                <div className="bg-card p-5 md:p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                    <AlertTriangle className="h-6 w-6 md:h-8 md:w-8 text-destructive" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-3">Junior Account Manager Problem</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    You're sold by a senior expert but serviced by a junior account manager who's learning on your dime while juggling 20 other accounts.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8 md:mt-12 px-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-primary text-white hover:shadow-glow px-4 py-4 md:px-8 md:py-6 text-xs sm:text-sm md:text-base w-full sm:w-auto whitespace-normal h-auto leading-tight">
                    Stop the Marketing Bleed: Talk to a Perth Digital Marketing Expert
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SEO for Perth Businesses */}
        <section className="py-12 md:py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-center px-2">
                SEO for Perth Businesses: Dominating Page 1 in WA's Competitive Market
              </h2>
              
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center mb-6 md:mb-8 px-4">
                We build digital marketing strategy Perth SEO campaigns that get your business to Page 1 for the exact searches your ideal Perth customers are using.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Keyword Precision: Targeting Only High-Intent Perth Searches</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    We target high-intent, Perth-specific keywords that your ideal customers are actively searching for when they're ready to buy. No generic, low-intent keywords that waste time and resources.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Technical SEO: Building the Foundation for Rankings</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    We fix the technical issues holding your Perth business back: site speed, mobile optimization, crawlability, schema markup, and more.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Local SEO for Perth: Owning the Google Local 3-Pack</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    We optimize your Google Business Profile, build Perth-specific citations, and earn local backlinks to dominate the local 3-pack for high-intent Perth searches.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Content Strategy: Creating Content That Ranks and Converts Perth Customers</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    We create high-value content that answers the exact questions your Perth customers are asking, positioning you as the trusted authority.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8 md:mt-12 px-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-primary text-white hover:shadow-glow px-4 py-4 md:px-8 md:py-6 text-xs sm:text-sm md:text-base w-full sm:w-auto whitespace-normal h-auto leading-tight">
                    See Our SEO Packages for Perth Businesses
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Google Ads for Perth Businesses */}
        <section className="py-12 md:py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-center px-2">
                Google Ads for Perth Businesses: Immediate, High-Quality Leads
              </h2>
              
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center mb-6 md:mb-8 px-4">
                We build online marketing companies in Perth Google Ads campaigns that deliver immediate, high-quality leads while your SEO builds momentum.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Keyword Precision: Targeting Only High-Intent Perth Searches</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    We target high-intent, buyer-ready keywords that convert at the highest rate, eliminating wasted spend on low-quality clicks.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Geographic Precision: Eliminating Wasted Spend Outside Perth</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    We use advanced geographic targeting to ensure your ads only appear to high-value Perth prospects, maximizing ROI.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <MousePointerClick className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Ad Copy That Converts: Perth-Focused, Urgency-Driven</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    We write Perth-specific ad copy that speaks directly to your ideal customer's pain points and drives immediate action.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Landing Page Optimization: Turning Perth Clicks into Customers</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    We build and optimize high-converting landing pages specifically designed to turn Perth clicks into qualified leads and sales.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8 md:mt-12 px-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-primary text-white hover:shadow-glow px-4 py-4 md:px-8 md:py-6 text-xs sm:text-sm md:text-base w-full sm:w-auto whitespace-normal h-auto leading-tight">
                    See Our Google Ads Packages for Perth Businesses
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Meta Ads for Perth Businesses */}
        <section className="py-12 md:py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-center px-2">
                Meta Ads (Facebook & Instagram) for Perth Businesses: Building Awareness and Trust
              </h2>
              
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center mb-6 md:mb-8 px-4">
                We build digital media company Perth Meta Ads campaigns that build awareness, establish trust, and position you as the go-to Perth business before someone needs your services.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Audience Precision: Targeting Perth Customers Most Likely to Buy</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    We use advanced audience targeting to reach Perth customers who match your ideal customer profile, eliminating wasted spend.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Share2 className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Creative That Converts: Perth-Focused, Authority-Building</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    We create scroll-stopping creative that builds trust, positions you as the Perth expert, and drives action.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Full-Funnel Strategy: Building Trust Before the Sale</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    We build full-funnel campaigns that nurture Perth prospects from awareness to conversion, maximizing ROI.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8 md:mt-12 px-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-primary text-white hover:shadow-glow px-4 py-4 md:px-8 md:py-6 text-xs sm:text-sm md:text-base w-full sm:w-auto whitespace-normal h-auto leading-tight">
                    See Our Meta Ads Packages for Perth Businesses
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Web Design for Perth Businesses */}
        <section className="py-12 md:py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-center px-2">
                Web Design for Perth Businesses: High-Converting Websites That Sell
              </h2>
              
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center mb-6 md:mb-8 px-4">
                We build best online marketing agency Perth websites that position your Perth business as the trusted expert and convert visitors into customers at the highest possible rate.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Strategic Design: Positioning You as the Perth Authority</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    We design websites that instantly establish trust and position you as the go-to Perth expert in your industry.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Mobile-First Development: Flawless Experience for Perth Mobile Users</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Over 70% of Perth web traffic is mobile. We build sites that deliver a flawless mobile experience.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">SEO-Optimized from Day One</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    We build sites with technical SEO baked in from day one, giving you a head start on rankings.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8 md:mt-12 px-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-primary text-white hover:shadow-glow px-4 py-4 md:px-8 md:py-6 text-xs sm:text-sm md:text-base w-full sm:w-auto whitespace-normal h-auto leading-tight">
                    See Our Web Design Packages for Perth Businesses
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Perth Businesses Choose Odin Digital */}
        <section className="py-12 md:py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-center px-2">
                Why Perth Businesses Choose Odin Digital
              </h2>
              
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center mb-6 md:mb-8 px-4">
                We are not a generalist agency that dabbles in digital marketing. We are specialists who understand how to dominate Perth's unique market.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                <div className="bg-card p-5 md:p-6 rounded-lg shadow-card border border-border text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Award className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">Proven Track Record</h3>
                  <p className="text-sm text-muted-foreground">$574M+ in verified client revenue. 95% client retention rate.</p>
                </div>

                <div className="bg-card p-5 md:p-6 rounded-lg shadow-card border border-border text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">No Lock-In Contracts</h3>
                  <p className="text-sm text-muted-foreground">We earn your business every month. No long-term contracts.</p>
                </div>

                <div className="bg-card p-5 md:p-6 rounded-lg shadow-card border border-border text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <BarChart3 className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">Full Transparency</h3>
                  <p className="text-sm text-muted-foreground">Clear reporting focused on leads, sales, and ROI.</p>
                </div>

                <div className="bg-card p-5 md:p-6 rounded-lg shadow-card border border-border text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Target className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">Integrated Strategy</h3>
                  <p className="text-sm text-muted-foreground">All channels working together for maximum ROI.</p>
                </div>

                <div className="bg-card p-5 md:p-6 rounded-lg shadow-card border border-border text-center sm:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <MapPin className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">Perth Expertise</h3>
                  <p className="text-sm text-muted-foreground">We understand Perth's market and time zone.</p>
                </div>
              </div>

              <div className="text-center mt-8 md:mt-12 px-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-primary text-white hover:shadow-glow px-4 py-4 md:px-8 md:py-6 text-xs sm:text-sm md:text-base w-full sm:w-auto whitespace-normal h-auto leading-tight">
                    Talk to a Perth Digital Marketing Specialist
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center px-2">
                FAQs: Your Questions About Perth Digital Marketing Answered
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">How much does digital marketing cost in Perth?</AccordionTrigger>
                  <AccordionContent>
                    Digital marketing Perth costs vary depending on your industry, competition, and goals. Most Perth businesses invest $2,500 - $10,000 per month for comprehensive digital marketing (SEO, Google Ads, Meta Ads, website). Our team will provide a detailed quote during your free audit.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">How long does it take to see results?</AccordionTrigger>
                  <AccordionContent>
                    SEO typically takes 3-6 months for significant results. Google Ads delivers immediate results (within days). Meta Ads typically show results within 2-4 weeks.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Do you work with small Perth businesses or only large enterprises?</AccordionTrigger>
                  <AccordionContent>
                    We work with Perth businesses of all sizes, from small local businesses to large enterprises, offering flexible pricing and strategies designed to maximize ROI.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">How do you measure ROI?</AccordionTrigger>
                  <AccordionContent>
                    We implement advanced tracking to measure cost per acquisition, return on ad spend, conversion rate, and revenue impact. You will know exactly how much revenue your digital marketing is generating.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">Do you offer a performance guarantee?</AccordionTrigger>
                  <AccordionContent>
                    We offer the best guarantee in the industry: No Lock-In Contracts. If we are not delivering a positive ROI, you are free to leave at any time. We put the risk on us, not you.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">How do you handle Perth's time zone difference?</AccordionTrigger>
                  <AccordionContent>
                    We schedule all meetings and reporting to accommodate Perth's time zone (AWST). Our team is available during Perth business hours for support and communication.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-2">
                Ready to Stop Wasting Money and Start Dominating Perth's Market?
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-muted-foreground px-4">
                Stop settling for vanity metrics. Start working with the marketing agency Perth that delivers real revenue and predictable ROI.
              </p>

              <Link to="/contact" className="block px-4">
                <Button size="lg" className="bg-gradient-primary text-white hover:shadow-glow px-4 py-4 md:px-8 md:py-6 text-xs sm:text-sm md:text-base w-full sm:w-auto whitespace-normal h-auto leading-tight">
                  Claim Your FREE Perth Digital Marketing Audit
                  <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden shadow-lg">
        <Link to="/contact">
          <Button className="w-full bg-gradient-primary text-white hover:shadow-glow py-4 text-sm font-semibold whitespace-normal h-auto leading-tight">
            Get FREE Perth Marketing Audit
          </Button>
        </Link>
      </div>

      <Footer />
      <Closing />
      <SideTab />
      <MarketingFormModal />
    </>
  );
};

export default OnlineMarketingCompanyPerth;