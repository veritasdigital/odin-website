import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Button } from "@/components/ui/button";
import { 
  AlertCircle,
  FileText,
  MapPin,
  Search,
  TrendingUp,
  Target,
  Users,
  Monitor,
  Award,
  Shield,
  BarChart3,
  Zap,
  CheckCircle2,
  ArrowRight,
  Settings,
  Clock,
  DollarSign,
  Share2,
  Eye,
  MousePointer
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OnlineMarketingCompanySydney = () => {
  const { openForm } = useMarketingForm();

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Performance-focused online marketing company in Sydney, Australia. We specialize in SEO, Google Ads, Meta Ads, and web design for Sydney businesses. $574M+ in client revenue. No lock-in contracts.",
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
        "name": "Odin Digital - Online Marketing Company Sydney",
        "image": "https://growth-conduit-central.lovable.app/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sydney",
          "addressRegion": "NSW",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -33.8688,
          "longitude": 151.2093
        },
        "url": "https://growth-conduit-central.lovable.app/online-marketing-company-sydney",
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
        "serviceType": "Online Marketing Sydney",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "City",
          "name": "Sydney",
          "containedIn": {
            "@type": "State",
            "name": "New South Wales"
          }
        },
        "description": "Comprehensive online marketing services for Sydney businesses, including SEO, Google Ads, Meta Ads, and web design, focused on revenue growth and ROI."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does digital marketing cost in Sydney?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Digital marketing Sydney costs vary depending on your industry, competition, and goals. Most Sydney businesses invest $3,000 - $15,000 per month for comprehensive digital marketing (SEO, Google Ads, Meta Ads, website). Our team will provide a detailed quote during your free audit."
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
            "name": "Do you work with small Sydney businesses or only large enterprises?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work with Sydney businesses of all sizes, from small local businesses to large enterprises, offering flexible pricing and strategies designed to maximize ROI."
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
            "name": "How do you handle Sydney's high CPCs (Cost Per Click)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use advanced targeting, negative keywords, and landing page optimization to reduce wasted spend and maximize ROI even in Sydney's expensive market."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with e-commerce businesses in Sydney?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in ecommerce agency Sydney services, including SEO, Google Shopping Ads, Meta Ads, and conversion rate optimization for online stores."
            }
          },
          {
            "@type": "Question",
            "name": "What makes you different from other Sydney digital marketing agencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We focus on revenue, not vanity metrics. We offer no lock-in contracts. We provide full transparency. We operate as an integrated team, not siloed departments. And we have a proven track record of generating over $574M in client revenue."
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
        <title>Online Marketing Company Sydney | Digital Marketing Agency Sydney | Odin Digital</title>
        <meta name="description" content="Stop paying for digital marketing that doesn't deliver. Odin Digital provides online marketing Sydney services focused on revenue, not vanity metrics. No lock-in contracts. Get your free audit today." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <Header />
        <SideTab />
        <MarketingFormModal />

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background border-t border-border p-3 shadow-lg">
          <Button 
            onClick={openForm}
            className="w-full bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold py-4"
            size="lg"
          >
            Get Your FREE Sydney Marketing Audit →
          </Button>
        </div>

        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-24 overflow-hidden bg-gradient-subtle">
          {/* Floating circles */}
          <div className="absolute top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-primary/10 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full bg-secondary/10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-80 lg:h-80 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          <div className="container mx-auto max-w-6xl relative z-10 px-3 sm:px-4 md:px-6">
            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground leading-tight mt-8 sm:mt-4">
                Online Marketing Company Sydney
              </h1>
              
              <p className="hero-sub-headline text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground/90 leading-tight max-w-5xl mx-auto px-2 sm:px-4">
                Stop Paying for Digital Marketing That Doesn't Deliver Real Results. Start Dominating Sydney's Market with Proven Online Marketing Strategies That Drive Revenue, Not Just Traffic.
              </p>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4 max-w-4xl mx-auto px-2 sm:px-4">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-foreground/80">
                  The Digital Marketing Agency Sydney Businesses Trust for High-Converting Campaigns and Predictable ROI.
                </p>
                
                <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground/80">
                  Partner with Odin Digital and Watch Your Sydney Business Scale Profitably with Digital Marketing That Actually Works.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  You're tired of agencies that promise the world but deliver nothing but vanity metrics. You're sick of paying for "digital marketing services Sydney" that look impressive on paper—thousands of impressions, hundreds of clicks—but don't move the needle on your revenue. You know there's a better way, but you don't have time to waste on another agency that treats your business like just another account number.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  At Odin Digital, we don't do cookie-cutter strategies. We build integrated, revenue-focused digital marketing campaigns specifically designed for Sydney's ultra-competitive market. We combine SEO, Google Ads, Meta Ads, and conversion-optimized web design into a single, coordinated strategy that generates real, predictable revenue. And we back it up with the best guarantee in the industry: No Lock-In Contracts.
                </p>
              </div>

              {/* Trust Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto pt-4">
                <div className="text-center p-3 sm:p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">$574M+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Client Revenue Generated</div>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">95%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Client Retention Rate</div>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 col-span-2 md:col-span-1">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">283+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Successful Campaigns</div>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 md:pt-6">
                <Button 
                  onClick={openForm}
                  size="lg"
                  className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 shadow-glow hover:shadow-primary/60 transition-all duration-300 hover:scale-105"
                >
                  Get Your FREE Sydney Digital Marketing Audit <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Agitation Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                Why Most Digital Marketing Agencies Fail Sydney Businesses
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
                Sydney businesses waste millions every year on digital marketing services Sydney that look impressive on paper but deliver nothing to the bottom line. Here's why most agencies fail.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">The Vanity Metrics Trap</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  They show you charts of impressions, reach, and clicks—metrics that look good but don't pay your bills. You need revenue, not vanity metrics.
                </p>
              </div>

              <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Cookie-Cutter Strategy Problem</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  They use the same generic "best practices" for every client. Sydney's market is unique—you need a custom strategy, not a template.
                </p>
              </div>

              <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">No ROI Tracking</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  They can't tell you your cost per acquisition or return on ad spend. Without ROI tracking, you're flying blind and wasting money.
                </p>
              </div>

              <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Siloed Services Problem</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Their SEO team doesn't talk to their PPC team. Their social team doesn't talk to their web team. You get a fragmented, inefficient strategy.
                </p>
              </div>

              <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Slow Results, No Accountability</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  They lock you into 12-month contracts and deliver results "eventually." When results don't come, they blame the algorithm, not their strategy.
                </p>
              </div>

              <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Junior Account Manager Problem</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  You pay for experts but get a junior account manager who's learning on your dime. Your Sydney business deserves senior-level strategy.
                </p>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-10">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4"
              >
                <span className="hidden sm:inline">Stop the Marketing Bleed: Talk to a Sydney Digital Marketing Expert →</span>
                <span className="sm:hidden">Talk to a Sydney Expert →</span>
              </Button>
            </div>
          </div>
        </section>

        {/* SEO for Sydney Businesses */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                SEO for Sydney Businesses: Dominating Page 1 in Australia's Most Competitive Market
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
                We build digital marketing services in Sydney SEO strategies that get your business to Page 1 for the exact searches your ideal Sydney customers are using.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border">
                <Search className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Keyword Precision: Targeting Only High-Intent Sydney Searches</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  We don't waste time ranking for vanity keywords with zero commercial intent. We target the exact searches Sydney customers use when they're ready to buy.
                </p>
                <ul className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Competitor gap analysis to find untapped Sydney keywords</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Search intent mapping to prioritize high-converting terms</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Sydney-specific long-tail targeting for local dominance</span>
                  </div>
                </ul>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border">
                <Settings className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Technical SEO: Building the Foundation for Rankings</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  Before we build content, we fix the technical foundation that blocks most Sydney websites from ranking.
                </p>
                <ul className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Site speed optimization for Google's Core Web Vitals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Mobile-first indexing optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Schema markup for rich snippets and enhanced visibility</span>
                  </div>
                </ul>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Local SEO for Sydney: Owning the Google Local 3-Pack</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  For Sydney businesses serving local customers, the Google Local 3-Pack is the most valuable real estate on the internet.
                </p>
                <ul className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Google Business Profile optimization for maximum visibility</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Sydney citation building across high-authority directories</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Review generation strategy to build trust and rankings</span>
                  </div>
                </ul>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border">
                <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Content Strategy: Creating Content That Ranks and Converts Sydney Customers</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  We create content that serves two masters: Google's algorithm and your Sydney customers' buying journey.
                </p>
                <ul className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Pillar content strategy targeting competitive Sydney keywords</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Conversion-optimized landing pages for every service</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Sydney-specific content that positions you as the local authority</span>
                  </div>
                </ul>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-10">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4"
              >
                <span className="hidden sm:inline">See Our SEO Packages for Sydney Businesses →</span>
                <span className="sm:hidden">See SEO Packages →</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Google Ads Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                Google Ads for Sydney Businesses: Dominating Australia's Most Expensive Market
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
                We build digital ad agency Sydney Google Ads campaigns that deliver immediate, high-quality leads while your SEO builds momentum—even in Sydney's ultra-competitive, high-CPC market.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Keyword Precision: Targeting Only High-Intent Sydney Searches</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  In Sydney's expensive market, every click costs money. We eliminate waste by targeting only searches with proven commercial intent.
                </p>
                <ul className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Negative keyword strategy to eliminate wasted spend</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Exact match and phrase match prioritization for precision</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Search Query Report analysis to constantly refine targeting</span>
                  </div>
                </ul>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Geographic Precision: Eliminating Wasted Spend Outside Sydney</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  If you serve Sydney customers, we ensure you're only paying for Sydney clicks.
                </p>
                <ul className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Radius targeting for precise Sydney coverage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Location exclusions to eliminate waste</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Bid adjustments by Sydney suburb for maximum ROI</span>
                  </div>
                </ul>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border">
                <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Ad Copy That Converts: Sydney-Focused, Urgency-Driven</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  Generic ad copy loses to competitors. We write Sydney-specific, benefit-driven ads that compel clicks and conversions.
                </p>
                <ul className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Sydney location callouts for local trust</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Benefit-first headlines that address pain points</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">A/B testing to constantly improve performance</span>
                  </div>
                </ul>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border">
                <MousePointer className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Landing Page Optimization: Turning Sydney Clicks into Customers</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  A great ad is worthless if your landing page doesn't convert. We optimize every element to maximize conversions.
                </p>
                <ul className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Message match between ad and landing page</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Clear, benefit-driven CTAs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Mobile-optimized for Sydney's mobile-first users</span>
                  </div>
                </ul>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-10">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4"
              >
                <span className="hidden sm:inline">See Our Google Ads Packages for Sydney Businesses →</span>
                <span className="sm:hidden">See Google Ads Packages →</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Meta Ads Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                Meta Ads (Facebook & Instagram) for Sydney Businesses: Building Awareness and Trust
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
                We build content marketing services Sydney Meta Ads campaigns that build awareness, establish trust, and position you as the go-to Sydney business before someone needs your services.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Audience Precision: Targeting Sydney Customers Most Likely to Buy</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  Meta's targeting capabilities are unmatched. We build laser-focused Sydney audiences based on demographics, interests, and behavior.
                </p>
                <ul className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Custom audience building from your existing customers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Lookalike audiences to reach similar Sydney customers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Interest and behavior targeting for cold prospecting</span>
                  </div>
                </ul>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border">
                <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Creative That Converts: Sydney-Focused, Authority-Building</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  On Meta, creative is everything. We create thumb-stopping visuals and copy that build trust and drive action.
                </p>
                <ul className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Video content showcasing Sydney expertise</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Carousel ads highlighting services and results</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">A/B testing for continuous creative improvement</span>
                  </div>
                </ul>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border">
                <Share2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Full-Funnel Strategy: Building Trust Before the Sale</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  We don't just target bottom-of-funnel buyers. We build awareness and trust so when Sydney customers need your services, you're the obvious choice.
                </p>
                <ul className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Top-of-funnel awareness campaigns</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Retargeting for warm prospects</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Bottom-of-funnel conversion campaigns</span>
                  </div>
                </ul>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-10">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4"
              >
                <span className="hidden sm:inline">See Our Meta Ads Packages for Sydney Businesses →</span>
                <span className="sm:hidden">See Meta Ads Packages →</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Web Design Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                Web Design for Sydney Businesses: High-Converting Websites That Sell
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
                We build ecommerce agency Sydney and business websites that position your Sydney business as the trusted expert and convert visitors into customers at the highest possible rate.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Strategic Design: Positioning You as the Sydney Authority</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  Your website is your most powerful sales tool. We design websites that instantly establish trust and position you as the Sydney expert.
                </p>
                <ul className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Professional, modern design that builds trust</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Clear value proposition on every page</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Strategic placement of Sydney credentials and social proof</span>
                  </div>
                </ul>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border">
                <Monitor className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Mobile-First Development: Flawless Experience for Sydney Mobile Users</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  Over 70% of Sydney web traffic is mobile. We build mobile-first websites that deliver a perfect experience on every device.
                </p>
                <ul className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Responsive design that looks perfect on all devices</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Fast loading times for mobile connections</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Touch-optimized navigation and CTAs</span>
                  </div>
                </ul>
              </div>

              <div className="bg-card p-4 sm:p-5 md:p-6 rounded-lg shadow-card border border-border">
                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-3" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">SEO-Optimized from Day One</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3">
                  A beautiful website that doesn't rank is worthless. We build SEO into every website from day one.
                </p>
                <ul className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Clean, semantic code for search engine crawling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Schema markup for rich snippets</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D91C5C] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Optimized page speed for Core Web Vitals</span>
                  </div>
                </ul>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-10">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4"
              >
                <span className="hidden sm:inline">See Our Web Design Packages for Sydney Businesses →</span>
                <span className="sm:hidden">See Web Design Packages →</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                Why Sydney Businesses Choose Odin Digital
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
                We are not a generalist agency that dabbles in digital marketing. We are specialists who understand how to dominate Sydney's ultra-competitive market.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
              <div className="text-center p-4 sm:p-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#D91C5C]" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Proven Track Record</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  $574M+ in client revenue. 95% retention rate. 283+ successful campaigns. Our results speak for themselves.
                </p>
              </div>

              <div className="text-center p-4 sm:p-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-[#D91C5C]" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">No Lock-In Contracts</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  We earn your business every month. If we're not delivering ROI, you're free to leave. No penalties. No hassle.
                </p>
              </div>

              <div className="text-center p-4 sm:p-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-[#D91C5C]" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Full Transparency</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Real-time dashboards. Clear ROI reporting. You'll always know exactly where your money is going and what it's delivering.
                </p>
              </div>

              <div className="text-center p-4 sm:p-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-[#D91C5C]" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Integrated Strategy</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Our SEO, PPC, and web teams work together as one coordinated unit, not siloed departments.
                </p>
              </div>

              <div className="text-center p-4 sm:p-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-[#D91C5C]" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Sydney Expertise</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  We understand Sydney's market, competition, and customer behavior. Your strategy is built for Sydney success.
                </p>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-10">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4"
              >
                <span className="hidden sm:inline">Talk to a Sydney Digital Marketing Specialist →</span>
                <span className="sm:hidden">Talk to a Specialist →</span>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto max-w-4xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                FAQs: Your Questions About Sydney Digital Marketing Answered
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-3">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  How much does digital marketing cost in Sydney?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Digital marketing Sydney costs vary depending on your industry, competition, and goals. Most Sydney businesses invest $3,000 - $15,000 per month for comprehensive digital marketing (SEO, Google Ads, Meta Ads, website). Our team will provide a detailed quote during your free audit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  How long does it take to see results?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  SEO typically takes 3-6 months for significant results. Google Ads delivers immediate results (within days). Meta Ads typically show results within 2-4 weeks.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  Do you work with small Sydney businesses or only large enterprises?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  We work with Sydney businesses of all sizes, from small local businesses to large enterprises, offering flexible pricing and strategies designed to maximize ROI.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  How do you measure ROI?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  We implement advanced tracking to measure cost per acquisition, return on ad spend, conversion rate, and revenue impact. You will know exactly how much revenue your digital marketing is generating.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  Do you offer a performance guarantee?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  We offer the best guarantee in the industry: No Lock-In Contracts. If we are not delivering a positive ROI, you are free to leave at any time. We put the risk on us, not you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  How do you handle Sydney's high CPCs (Cost Per Click)?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  We use advanced targeting, negative keywords, and landing page optimization to reduce wasted spend and maximize ROI even in Sydney's expensive market.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  Do you work with e-commerce businesses in Sydney?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Yes. We specialize in ecommerce agency Sydney services, including SEO, Google Shopping Ads, Meta Ads, and conversion rate optimization for online stores.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  What makes you different from other Sydney digital marketing agencies?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  We focus on revenue, not vanity metrics. We offer no lock-in contracts. We provide full transparency. We operate as an integrated team, not siloed departments. And we have a proven track record of generating over $574M in client revenue.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="container mx-auto max-w-4xl relative z-10 text-center px-3 sm:px-4 md:px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
              Ready to Stop Wasting Money and Start Dominating Sydney's Market?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
              Stop settling for vanity metrics. Start working with the online marketing company Sydney that delivers real revenue and predictable ROI.
            </p>
            <Button 
              onClick={openForm}
              size="lg"
              className="bg-white text-[#D91C5C] hover:bg-white/90 font-bold text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 shadow-glow transition-all duration-300 hover:scale-105"
            >
              Claim Your FREE Sydney Digital Marketing Audit <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default OnlineMarketingCompanySydney;
