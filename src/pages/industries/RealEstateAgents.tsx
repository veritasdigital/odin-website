import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Home,
  TrendingUp,
  DollarSign,
  Award,
  Users,
  Target,
  Phone,
  Search,
  MousePointerClick,
  Share2,
  Layout,
  CheckCircle2,
  Shield,
  Zap,
  BarChart,
  Clock,
  AlertCircle,
  MessageSquare,
  Settings,
  ChevronRight,
  MapPin,
  Eye,
  TrendingDown,
  UserCheck,
  PlayCircle
} from "lucide-react";

const RealEstateAgents = () => {
  const { openForm } = useMarketingForm();

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Performance-focused digital marketing agency specializing in lead generation and brand authority for real estate agents.",
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
      {
        "@type": "WebPage",
        "name": "Real Estate Digital Marketing Agency",
        "url": "https://growth-conduit-central.lovable.app/industries/real-estate-agents",
        "description": "The national hub page for predictable, high-quality lead generation and brand authority building for real estate agents in Australia.",
        "inLanguage": "en-AU",
        "lastReviewed": "2025-10-30"
      },
      {
        "@type": "Service",
        "serviceType": "Digital Marketing for Real Estate Agents",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": "Australia",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Real Estate Lead Generation Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Vendor Appraisal Lead Generation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Real Estate Brand Authority SEO"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Automated Lead Nurturing Funnels"
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
            "name": "How does Odin Digital generate higher quality leads than the major portals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We generate higher quality leads by owning the traffic source and using pre-qualification funnels. Instead of relying on generic portal leads, we use targeted PPC and Meta Ads to attract prospects who are actively searching for an agent or are showing high intent to sell. Our funnels then nurture and qualify these leads before they ever reach your phone."
            }
          },
          {
            "@type": "Question",
            "name": "Do you focus more on attracting vendors (listings) or buyers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We focus on vendor appraisals as they are the highest value lead. Our strategies are engineered to position you as the local expert, which naturally attracts property owners considering selling. While we generate buyer leads to support your sales process, our primary goal is to increase your listing inventory."
            }
          },
          {
            "@type": "Question",
            "name": "How do you solve the \"follow-up problem\" that most agents face?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We solve the follow-up problem through full-funnel automation. We integrate our lead generation directly with your CRM and set up automated, personalized email and SMS nurturing sequences. This ensures every lead is consistently touched with valuable content, warming them up until they are ready for a personal call or appraisal booking."
            }
          },
          {
            "@type": "Question",
            "name": "What is your pricing model?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our pricing is transparent and based on your specific needs and market. Most agents invest between $3,000-$8,000/month for a comprehensive strategy including SEO, PPC, and funnel automation. We provide a custom proposal after our discovery call that breaks down exactly where your investment goes and the projected ROI."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to start seeing results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PPC and Meta Ads campaigns can start generating leads within 7-14 days. SEO and brand authority building typically show meaningful results within 3-6 months. We focus on quick wins (PPC) while building long-term authority (SEO), so you see both immediate and compounding results."
            }
          },
          {
            "@type": "Question",
            "name": "Do you guarantee a specific number of leads or appraisals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We don't guarantee a specific number because real estate markets vary significantly by location and price point. What we do guarantee is full transparency, data-driven optimization, and a relentless focus on ROI. Our 540% average ROI and 95% client retention rate demonstrate our commitment to delivering results."
            }
          },
          {
            "@type": "Question",
            "name": "Can I cancel anytime?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We work on month-to-month agreements with no lock-in contracts. We believe we should earn your business every month through results, not trap you in a long-term contract."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with agents in small towns or regional areas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. In fact, regional markets often present excellent opportunities because there is less competition. Our strategies are tailored to your specific market size and dynamics, whether you're in Sydney, Melbourne, or a regional town."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle competing agents in the same area?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We maintain strict exclusivity in defined service areas. We will not work with direct competitors in your farm area to ensure your investment isn't competing against itself. Your success is our priority."
            }
          },
          {
            "@type": "Question",
            "name": "What makes your approach different from other real estate marketing agencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We focus on full-funnel automation, not just ad clicks. Most agencies stop at lead generation. We build the entire system: traffic generation, lead capture, nurturing automation, and CRM integration. This means higher conversion rates and better ROI on every dollar spent."
            }
          },
          {
            "@type": "Question",
            "name": "Do you integrate with my existing CRM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We integrate with all major real estate CRMs including REX, Box+Dice, MyDesktop, and others. This ensures seamless lead flow and automated follow-up without disrupting your existing workflows."
            }
          },
          {
            "@type": "Question",
            "name": "Will I need to create a lot of content?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Minimal. We'll guide you through recording a few short videos and testimonials, but we handle the content strategy, copywriting, and design. Our goal is to leverage your expertise without consuming your time."
            }
          },
          {
            "@type": "Question",
            "name": "How do you track ROI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We implement full attribution tracking from ad click to closed sale. You'll have a dashboard showing cost per lead, cost per appraisal, and ultimately, cost per listing. Combined with your average commission, you'll have complete visibility into your marketing ROI."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with personal branding as well as lead generation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. In fact, we believe they go hand-in-hand. Our SEO strategies are designed to build your personal brand as the local authority, which naturally attracts higher quality leads and reduces your cost per acquisition over time."
            }
          },
          {
            "@type": "Question",
            "name": "What if I'm already doing some marketing myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We'll audit your current efforts and identify what's working and what's not. We can either take over completely, or integrate with your existing activities to fill gaps and amplify results. Our goal is maximum ROI, not ego."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer website design as part of your services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We build high-converting real estate websites optimized for lead capture and brand authority. Our sites are mobile-first, fast-loading, and integrate seamlessly with your CRM and marketing automation."
            }
          }
        ]
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Organization",
          "name": "Odin Digital - Real Estate Digital Marketing Agency"
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
    ]
  };

  return (
    <>
      <Helmet>
        <title>Real Estate Digital Marketing Agency | Predictable Leads & Brand Authority | Odin Digital</title>
        <meta name="description" content="Stop the lead rollercoaster. We are the Real Estate Digital Marketing Agency that delivers predictable, high-quality vendor leads and builds your personal brand authority with a proven 540% ROI." />
        <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      </Helmet>

      <Header />

      {/* Breadcrumb Navigation */}
      <div className="bg-background-subtle py-3 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center text-sm text-charcoal/60">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/industries" className="hover:text-primary transition-colors">Industries</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-charcoal font-medium">Real Estate Agents</span>
          </nav>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border shadow-lg p-4">
        <Button
          onClick={openForm}
          style={{ backgroundColor: '#D91C5C' }}
          className="w-full text-white hover:opacity-90 text-base px-6 py-4 h-auto font-semibold shadow-glow flex items-center justify-center"
        >
          <Phone className="mr-2 h-5 w-5" />
          Get Your FREE Strategy Call
        </Button>
      </div>

      <div className="pb-20 md:pb-0">
        {/* 1. Hero Section */}
        <section className="relative isolate overflow-hidden min-h-[90vh] flex items-center bg-white pb-20 md:pb-0">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          </div>

          {/* Decorative floating circles */}
          <div className="absolute -top-6 left-1/4 w-12 h-12 bg-primary/20 rounded-full animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-secondary/20 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-10 w-6 h-6 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full py-12 sm:py-20 pt-24 sm:pt-32">
            <div className="max-w-4xl mx-auto animate-slide-up text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-charcoal leading-tight mb-4 sm:mb-6">
                Real Estate Digital Marketing Agency
              </h1>
              
              <p className="text-lg sm:text-2xl md:text-3xl text-charcoal font-bold leading-tight mb-6 sm:mb-8 px-2 hero-sub-headline">
                Tired of the Real Estate Lead Rollercoaster? We Deliver Predictable, High-Quality Leads and Build Your Brand Authority with a Proven 540% Return.
              </p>

              <p className="text-base sm:text-lg text-charcoal/70 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
                Stop wasting money on low-quality portal leads that never convert. Partner with the real estate digital marketing agency that delivers vendor appraisals, builds your personal brand, and automates your entire lead nurturing process.
              </p>
              
              <div className="pt-2 px-4 hidden md:block">
                <Button
                  onClick={openForm}
                  style={{ backgroundColor: '#D91C5C' }}
                  size="lg"
                  className="text-white hover:opacity-90 shadow-glow text-sm sm:text-base px-8 py-6 h-auto font-semibold"
                >
                  Get Your FREE Strategy Call →
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-charcoal/10">
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-charcoal/70 px-4">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-black" style={{ color: '#D91C5C' }}>540%</div>
                    <div className="text-xs sm:text-sm">Average ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-black" style={{ color: '#D91C5C' }}>$574M+</div>
                    <div className="text-xs sm:text-sm">Client Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-black" style={{ color: '#D91C5C' }}>95%</div>
                    <div className="text-xs sm:text-sm">Client Retention</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Social Proof Metrics */}
        <section className="py-12 sm:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
                Real Results from Real Estate Agents Just Like You
              </h2>
              <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
                We've helped hundreds of agents break free from the portal dependency and build predictable, profitable lead generation systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <Card className="p-6 text-center border-charcoal/10 shadow-card">
                <DollarSign className="h-12 w-12 mx-auto mb-3" style={{ color: '#D91C5C' }} />
                <div className="text-4xl sm:text-5xl font-black mb-2" style={{ color: '#D91C5C' }}>$574M+</div>
                <p className="text-charcoal/70 font-medium">Client Revenue Generated</p>
              </Card>

              <Card className="p-6 text-center border-charcoal/10 shadow-card">
                <TrendingUp className="h-12 w-12 mx-auto mb-3" style={{ color: '#D91C5C' }} />
                <div className="text-4xl sm:text-5xl font-black mb-2" style={{ color: '#D91C5C' }}>540%</div>
                <p className="text-charcoal/70 font-medium">Average ROI</p>
              </Card>

              <Card className="p-6 text-center border-charcoal/10 shadow-card">
                <Award className="h-12 w-12 mx-auto mb-3" style={{ color: '#D91C5C' }} />
                <div className="text-4xl sm:text-5xl font-black mb-2" style={{ color: '#D91C5C' }}>95%</div>
                <p className="text-charcoal/70 font-medium">Client Retention Rate</p>
              </Card>

              <Card className="p-6 text-center border-charcoal/10 shadow-card">
                <Users className="h-12 w-12 mx-auto mb-3" style={{ color: '#D91C5C' }} />
                <div className="text-4xl sm:text-5xl font-black mb-2" style={{ color: '#D91C5C' }}>283+</div>
                <p className="text-charcoal/70 font-medium">Campaigns Managed</p>
              </Card>
            </div>
          </div>
        </section>

        {/* 3. Problem-Agitation Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
                The Real Estate Lead Generation Problem
              </h2>
              <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
                You're stuck on the lead rollercoaster—high costs, low quality, and unpredictable results. Here's why the old model is broken.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="p-6 border-charcoal/10 shadow-card">
                <DollarSign className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-2">The High-Cost, Low-Quality Portal Lead Trap</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  You're paying $100-$300+ per lead from portals, and 80% of them are tyre-kickers or already working with another agent. The portals own the relationship, not you.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <AlertCircle className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-2">The Follow-Up Problem</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  You know you should follow up consistently, but you're too busy. Leads go cold, opportunities are missed, and your cost per acquisition keeps climbing.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <TrendingDown className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-2">The Brand Authority Gap</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Generic leads don't know who you are. They're shopping based on price, not trust. Without personal brand authority, you're just another agent competing on commission splits.
                </p>
              </Card>
            </div>

            <div className="text-center mt-8 sm:mt-12 px-4">
              <Button
                onClick={openForm}
                style={{ backgroundColor: '#D91C5C' }}
                size="lg"
                className="text-white hover:opacity-90 shadow-primary w-full sm:w-auto text-sm sm:text-base px-8 py-6 h-auto font-semibold"
              >
                Break Free from the Lead Rollercoaster →
              </Button>
            </div>
          </div>
        </section>

        {/* 4. Testimonials Section */}
        <section className="py-12 sm:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
                What Real Estate Agents Say About Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="p-6 border-charcoal/10 shadow-card flex flex-col h-full">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="h-5 w-5" style={{ color: '#D91C5C', fill: '#D91C5C' }} />
                  ))}
                </div>
                <p className="text-charcoal/80 mb-4 flex-grow italic leading-relaxed">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
                </p>
                <div className="border-t border-charcoal/10 pt-4 mt-auto">
                  <p className="font-bold text-charcoal">Liam C</p>
                  <p className="text-sm text-charcoal/60">Krush Organics</p>
                </div>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card flex flex-col h-full">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="h-5 w-5" style={{ color: '#D91C5C', fill: '#D91C5C' }} />
                  ))}
                </div>
                <p className="text-charcoal/80 mb-4 flex-grow italic leading-relaxed">
                  "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with."
                </p>
                <div className="border-t border-charcoal/10 pt-4 mt-auto">
                  <p className="font-bold text-charcoal">Fabienne Costa</p>
                  <p className="text-sm text-charcoal/60">YCL Jewellery</p>
                </div>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card flex flex-col h-full">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="h-5 w-5" style={{ color: '#D91C5C', fill: '#D91C5C' }} />
                  ))}
                </div>
                <p className="text-charcoal/80 mb-4 flex-grow italic leading-relaxed">
                  "The team at Odin Digital has transformed our lead generation. We're getting higher quality appraisals at half the cost of portal leads, and the automated follow-up means we're converting more of them."
                </p>
                <div className="border-t border-charcoal/10 pt-4 mt-auto">
                  <p className="font-bold text-charcoal">Sarah M</p>
                  <p className="text-sm text-charcoal/60">Principal Agent, Sydney</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* 5. Services Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
                Our Real Estate Lead Generation Services
              </h2>
              <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
                We build complete lead generation systems that attract, nurture, and convert high-quality vendor appraisals while building your personal brand authority.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <Card className="p-6 border-charcoal/10 shadow-card flex flex-col h-full">
                <Search className="h-12 w-12 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  <Link to="/seo-agency" className="hover:underline">SEO</Link> for Real Estate
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4 flex-grow">
                  Dominate local search results and build brand authority. We optimize your website and content to rank #1 for high-intent searches like "[suburb] real estate agent" and "sell my house [area]".
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card flex flex-col h-full">
                <MousePointerClick className="h-12 w-12 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  <Link to="/ppc-agency" className="hover:underline">PPC</Link> Lead Generation
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4 flex-grow">
                  Generate immediate, high-quality vendor appraisal leads with Google Ads. We target property owners actively searching for an agent, not generic portal browsers.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card flex flex-col h-full">
                <Share2 className="h-12 w-12 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  <Link to="/meta-ads-agency" className="hover:underline">Meta Ads</Link> & Retargeting
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4 flex-grow">
                  Build awareness and nurture prospects with Facebook and Instagram campaigns. We target property owners in your farm area and retarget website visitors until they're ready to book an appraisal.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card flex flex-col h-full">
                <Layout className="h-12 w-12 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  <Link to="/web-design-agency" className="hover:underline">Website Design</Link> & Funnels
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4 flex-grow">
                  High-converting websites and landing pages optimized for lead capture. We build automated nurturing funnels that turn cold traffic into warm appraisal bookings.
                </p>
              </Card>
            </div>

            <div className="text-center mt-8 sm:mt-12 px-4">
              <Button
                onClick={openForm}
                style={{ backgroundColor: '#D91C5C' }}
                size="lg"
                className="text-white hover:opacity-90 shadow-primary w-full sm:w-auto text-sm sm:text-base px-8 py-6 h-auto font-semibold"
              >
                See How We Can Help Your Business →
              </Button>
            </div>
          </div>
        </section>

        {/* 6. Differentiators Section */}
        <section className="py-12 sm:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
                Why Real Estate Agents Choose Odin Digital
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <Card className="p-6 text-center border-charcoal/10 shadow-card">
                <Zap className="h-12 w-12 mx-auto mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-lg font-bold text-charcoal mb-2">Full-Funnel Automation Expertise</h3>
                <p className="text-charcoal/70 text-sm">
                  We don't just drive traffic—we build complete systems that capture, nurture, and convert leads automatically.
                </p>
              </Card>

              <Card className="p-6 text-center border-charcoal/10 shadow-card">
                <Target className="h-12 w-12 mx-auto mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-lg font-bold text-charcoal mb-2">Vendor-First Strategy</h3>
                <p className="text-charcoal/70 text-sm">
                  We focus on vendor appraisals (not buyer leads) because they're 10x more valuable to your business.
                </p>
              </Card>

              <Card className="p-6 text-center border-charcoal/10 shadow-card">
                <BarChart className="h-12 w-12 mx-auto mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-lg font-bold text-charcoal mb-2">Complete Transparency</h3>
                <p className="text-charcoal/70 text-sm">
                  Full visibility into ad spend, lead costs, and ROI. No hidden fees, no surprises—just results.
                </p>
              </Card>

              <Card className="p-6 text-center border-charcoal/10 shadow-card">
                <CheckCircle2 className="h-12 w-12 mx-auto mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-lg font-bold text-charcoal mb-2">No Lock-In Contracts</h3>
                <p className="text-charcoal/70 text-sm">
                  Month-to-month agreements. We earn your business through results, not trapping you in long-term contracts.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* 7. Process Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
                Our Proven 4-Step Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <Card className="p-6 border-charcoal/10 shadow-card relative">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#D91C5C' }}>1</div>
                <h3 className="text-xl font-bold text-charcoal mb-3 mt-2">Discovery & Strategy</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We audit your current marketing, analyze your competition, and build a custom strategy tailored to your market and goals.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card relative">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#D91C5C' }}>2</div>
                <h3 className="text-xl font-bold text-charcoal mb-3 mt-2">Build & Launch</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We build your campaigns, landing pages, and automation funnels. Then we launch and start driving qualified traffic immediately.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card relative">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#D91C5C' }}>3</div>
                <h3 className="text-xl font-bold text-charcoal mb-3 mt-2">Optimize & Scale</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We continuously test and optimize campaigns to reduce cost per lead and increase conversion rates, scaling what works.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card relative">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#D91C5C' }}>4</div>
                <h3 className="text-xl font-bold text-charcoal mb-3 mt-2">Report & Refine</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Monthly reporting with full transparency into spend, leads, and ROI. We refine strategy based on data and your feedback.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* 8. Why Choose Us Section */}
        <section className="py-12 sm:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
                Real Estate Marketing That Actually Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <Card className="p-8 border-charcoal/10 shadow-card">
                <Shield className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
                <h3 className="text-2xl font-bold text-charcoal mb-4">We Own the Traffic, You Own the Leads</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  Unlike portal leads where you're renting access, we help you build your own traffic sources. Your website, your brand, your leads—forever.
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  This means your cost per lead decreases over time as your brand authority grows, while portal costs keep climbing.
                </p>
              </Card>

              <Card className="p-8 border-charcoal/10 shadow-card">
                <Settings className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
                <h3 className="text-2xl font-bold text-charcoal mb-4">Automated Follow-Up That Actually Converts</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We build automated email and SMS nurturing sequences that keep your leads warm until they're ready to book an appraisal—without you lifting a finger.
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  This solves the follow-up problem and ensures you're maximizing the value of every lead generated.
                </p>
              </Card>

              <Card className="p-8 border-charcoal/10 shadow-card">
                <Eye className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
                <h3 className="text-2xl font-bold text-charcoal mb-4">Personal Brand Authority = Lower Costs</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  Our SEO and content strategies position you as the local expert. When prospects already know and trust you, they're pre-sold before the first call.
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  This dramatically increases conversion rates and reduces price sensitivity, allowing you to win more listings at full commission.
                </p>
              </Card>

              <Card className="p-8 border-charcoal/10 shadow-card">
                <BarChart className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
                <h3 className="text-2xl font-bold text-charcoal mb-4">Full Attribution = Complete ROI Clarity</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We track every lead from ad click to closed sale. You'll know exactly which campaigns are profitable and which need optimization.
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  Combined with your average commission data, you'll have complete visibility into your marketing ROI—something most agents never achieve.
                </p>
              </Card>
            </div>

            <div className="text-center mt-8 sm:mt-12 px-4">
              <Button
                onClick={openForm}
                style={{ backgroundColor: '#D91C5C' }}
                size="lg"
                className="text-white hover:opacity-90 shadow-primary w-full sm:w-auto text-sm sm:text-base px-8 py-6 h-auto font-semibold"
              >
                Start Building Your Authority Today →
              </Button>
            </div>
          </div>
        </section>

        {/* 9. Final CTA Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 px-2">
              Ready to Break Free from the Lead Rollercoaster?
            </h2>
            <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-4">
              Book your free strategy call today and discover how we can deliver predictable, high-quality vendor appraisals while building your personal brand authority.
            </p>

            <Button
              onClick={openForm}
              style={{ backgroundColor: '#D91C5C' }}
              size="lg"
              className="text-white hover:opacity-90 shadow-glow w-full sm:w-auto text-base sm:text-lg px-8 py-6 h-auto font-semibold"
            >
              Get Your FREE Strategy Call →
            </Button>

            <p className="text-white/70 text-sm mt-6">No lock-in contracts. No pressure. Just an honest conversation about your goals.</p>
          </div>
        </section>

        {/* 10. Related Industry & Service Links */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
                Explore Our Other Industry Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/industries" className="block">
                <Card className="p-6 border-charcoal/10 shadow-card hover:shadow-lg transition-shadow h-full">
                  <Home className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                  <h3 className="text-xl font-bold text-charcoal mb-2">All Industries</h3>
                  <p className="text-charcoal/70 text-sm">Explore all our industry-specific marketing solutions</p>
                </Card>
              </Link>

              <Link to="/industries/cosmetic-surgeons" className="block">
                <Card className="p-6 border-charcoal/10 shadow-card hover:shadow-lg transition-shadow h-full">
                  <UserCheck className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                  <h3 className="text-xl font-bold text-charcoal mb-2">Cosmetic Surgeons</h3>
                  <p className="text-charcoal/70 text-sm">Patient acquisition strategies for cosmetic surgery practices</p>
                </Card>
              </Link>

              <Link to="/industries/dentists" className="block">
                <Card className="p-6 border-charcoal/10 shadow-card hover:shadow-lg transition-shadow h-full">
                  <Users className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                  <h3 className="text-xl font-bold text-charcoal mb-2">Dentists</h3>
                  <p className="text-charcoal/70 text-sm">Attract new patients and grow your dental practice</p>
                </Card>
              </Link>

              <Link to="/industries/real-estate-agents/seo" className="block opacity-60 pointer-events-none">
                <Card className="p-6 border-charcoal/10 shadow-card h-full">
                  <Search className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                  <h3 className="text-xl font-bold text-charcoal mb-2">Real Estate SEO</h3>
                  <p className="text-charcoal/70 text-sm">Coming Soon: Dominate local search rankings</p>
                </Card>
              </Link>

              <Link to="/industries/real-estate-agents/facebook-ads" className="block opacity-60 pointer-events-none">
                <Card className="p-6 border-charcoal/10 shadow-card h-full">
                  <Share2 className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                  <h3 className="text-xl font-bold text-charcoal mb-2">Facebook Ads for Real Estate</h3>
                  <p className="text-charcoal/70 text-sm">Coming Soon: Target property owners in your area</p>
                </Card>
              </Link>

              <Link to="/industries/real-estate-agents/web-design" className="block opacity-60 pointer-events-none">
                <Card className="p-6 border-charcoal/10 shadow-card h-full">
                  <Layout className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                  <h3 className="text-xl font-bold text-charcoal mb-2">Real Estate Website Design</h3>
                  <p className="text-charcoal/70 text-sm">Coming Soon: High-converting agent websites</p>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* 11. FAQ Section */}
        <section className="py-12 sm:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How does Odin Digital generate higher quality leads than the major portals?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  We generate higher quality leads by owning the traffic source and using pre-qualification funnels. Instead of relying on generic portal leads, we use targeted PPC and Meta Ads to attract prospects who are actively searching for an agent or are showing high intent to sell. Our funnels then nurture and qualify these leads before they ever reach your phone.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Do you focus more on attracting vendors (listings) or buyers?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  We focus on vendor appraisals as they are the highest value lead. Our strategies are engineered to position you as the local expert, which naturally attracts property owners considering selling. While we generate buyer leads to support your sales process, our primary goal is to increase your listing inventory.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  How do you solve the "follow-up problem" that most agents face?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  We solve the follow-up problem through full-funnel automation. We integrate our lead generation directly with your CRM and set up automated, personalized email and SMS nurturing sequences. This ensures every lead is consistently touched with valuable content, warming them up until they are ready for a personal call or appraisal booking.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  What is your pricing model?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Our pricing is transparent and based on your specific needs and market. Most agents invest between $3,000-$8,000/month for a comprehensive strategy including SEO, PPC, and funnel automation. We provide a custom proposal after our discovery call that breaks down exactly where your investment goes and the projected ROI.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  How long does it take to start seeing results?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  PPC and Meta Ads campaigns can start generating leads within 7-14 days. SEO and brand authority building typically show meaningful results within 3-6 months. We focus on quick wins (PPC) while building long-term authority (SEO), so you see both immediate and compounding results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Do you guarantee a specific number of leads or appraisals?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  We don't guarantee a specific number because real estate markets vary significantly by location and price point. What we do guarantee is full transparency, data-driven optimization, and a relentless focus on ROI. Our 540% average ROI and 95% client retention rate demonstrate our commitment to delivering results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  Can I cancel anytime?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Yes. We work on month-to-month agreements with no lock-in contracts. We believe we should earn your business every month through results, not trap you in a long-term contract.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  Do you work with agents in small towns or regional areas?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Absolutely. In fact, regional markets often present excellent opportunities because there is less competition. Our strategies are tailored to your specific market size and dynamics, whether you're in Sydney, Melbourne, or a regional town.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">
                  How do you handle competing agents in the same area?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  We maintain strict exclusivity in defined service areas. We will not work with direct competitors in your farm area to ensure your investment isn't competing against itself. Your success is our priority.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left">
                  What makes your approach different from other real estate marketing agencies?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  We focus on full-funnel automation, not just ad clicks. Most agencies stop at lead generation. We build the entire system: traffic generation, lead capture, nurturing automation, and CRM integration. This means higher conversion rates and better ROI on every dollar spent.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11">
                <AccordionTrigger className="text-left">
                  Do you integrate with my existing CRM?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Yes. We integrate with all major real estate CRMs including REX, Box+Dice, MyDesktop, and others. This ensures seamless lead flow and automated follow-up without disrupting your existing workflows.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12">
                <AccordionTrigger className="text-left">
                  Will I need to create a lot of content?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Minimal. We'll guide you through recording a few short videos and testimonials, but we handle the content strategy, copywriting, and design. Our goal is to leverage your expertise without consuming your time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13">
                <AccordionTrigger className="text-left">
                  How do you track ROI?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  We implement full attribution tracking from ad click to closed sale. You'll have a dashboard showing cost per lead, cost per appraisal, and ultimately, cost per listing. Combined with your average commission, you'll have complete visibility into your marketing ROI.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14">
                <AccordionTrigger className="text-left">
                  Can you help with personal branding as well as lead generation?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Absolutely. In fact, we believe they go hand-in-hand. Our SEO strategies are designed to build your personal brand as the local authority, which naturally attracts higher quality leads and reduces your cost per acquisition over time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15">
                <AccordionTrigger className="text-left">
                  What if I'm already doing some marketing myself?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  We'll audit your current efforts and identify what's working and what's not. We can either take over completely, or integrate with your existing activities to fill gaps and amplify results. Our goal is maximum ROI, not ego.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-16">
                <AccordionTrigger className="text-left">
                  Do you offer website design as part of your services?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Yes. We build high-converting real estate websites optimized for lead capture and brand authority. Our sites are mobile-first, fast-loading, and integrate seamlessly with your CRM and marketing automation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default RealEstateAgents;
