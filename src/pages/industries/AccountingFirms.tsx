import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Calculator,
  TrendingDown,
  FileText,
  Clock,
  Target,
  MapPin,
  Search,
  MousePointerClick,
  Share2,
  Layout,
  CheckCircle2,
  Shield,
  Award,
  Users,
  BarChart,
  Phone,
  DollarSign,
  Tag,
  AlertCircle,
  Eye,
  Link as LinkIcon,
  Smartphone,
  Trophy,
  Lock
} from "lucide-react";

const AccountingFirms = () => {
  const { openForm } = useMarketingForm();

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Performance-focused digital marketing for accounting firms in Australia. We specialize in SEO, Google Ads, Meta Ads, and website design for accountants, focusing on high-value client acquisition and premium positioning. $574M+ in client revenue.",
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
        "@type": "Service",
        "serviceType": "Digital Marketing for Accounting Firms",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "description": "Comprehensive digital marketing services for Australian accounting firms, including SEO, Google Ads, Meta Ads, and website design, focused on high-value client acquisition, premium positioning, and ROI.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Accounting Firm Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO for Accountants"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Ads for Accounting Firms"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Meta Ads for Accounting Firms"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Accounting Firm Website Design"
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
            "name": "How much does accounting firm marketing cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Accounting firm marketing costs vary depending on your specialization, competition, and goals. Most Australian accounting firms invest $2,000 - $8,000 per month for comprehensive digital marketing (SEO, Google Ads, Meta Ads, website). Our team will provide a detailed quote during your free audit."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO is a long-term strategy. You will typically see initial improvements in rankings and traffic within 3-4 months, with significant results within 6-12 months. Google Ads delivers immediate results (within days)."
            }
          },
          {
            "@type": "Question",
            "name": "How do you filter out low-value clients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use precise targeting (keywords, demographics, location) and positioning strategies to ensure you attract high-value clients who can afford your services and value your expertise, not price-shoppers."
            }
          },
          {
            "@type": "Question",
            "name": "How do you position us as premium instead of cheap?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We focus on value-based messaging, highlighting your expertise, specialization, and advisory approach. We avoid competing on price and instead position you as the trusted authority."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with all accounting specializations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We work with accounting firms across all specializations, including tax, audit, advisory, SMSF, business services, bookkeeping, and more. We tailor our strategies to your specific specialization."
            }
          },
          {
            "@type": "Question",
            "name": "Can you track ROI and cost per client?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We implement advanced tracking to measure cost per client inquiry, cost per client acquisition, and revenue impact. You will know exactly how much each client costs to acquire and the ROI of your marketing investment."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer website design for accounting firms?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in accountant website design that is high-converting, mobile-optimized, SEO-friendly, and positions you as the premium choice."
            }
          },
          {
            "@type": "Question",
            "name": "How is your accounting marketing different from other agencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are obsessed with results and premium positioning. We understand the unique challenges of accounting firm marketing (low-value clients, commoditization, specialization) and tailor our strategies accordingly. Our 95% client retention rate is proof that we consistently deliver value."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with small accounting firms or sole practitioners?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We work with accounting firms of all sizes, from sole practitioners to large multi-partner firms, offering flexible pricing and strategies designed to maximize ROI."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer a performance guarantee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer the best guarantee in the industry: No Lock-In Contracts. If we are not delivering high-quality client inquiries and a positive ROI, you are free to leave at any time. We put the risk on us, not you."
            }
          }
        ]
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Marketing Services for Accounting Firms",
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
        <title>Digital Marketing for Accounting Firms | SEO, Google Ads, Web Design | Odin Digital</title>
        <meta name="description" content="Stop paying for accounting marketing that doesn't deliver high-value clients. Odin Digital provides digital marketing for accounting firms focused on premium client acquisition and ROI. No lock-in contracts." />
        <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      </Helmet>

      <Header />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border shadow-lg p-4">
        <Button
          onClick={openForm}
          style={{ backgroundColor: '#D91C5C' }}
          className="w-full text-white hover:opacity-90 text-base px-6 py-4 h-auto font-semibold shadow-glow flex items-center justify-center"
        >
          <Phone className="mr-2 h-5 w-5" />
          Get Your FREE Marketing Audit
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
                Digital Marketing for Accounting Firms
              </h1>
              
              <p className="text-lg sm:text-2xl md:text-3xl text-charcoal font-bold leading-tight mb-6 sm:mb-8 px-2">
                Stop Paying for Accounting Marketing That Doesn't Deliver High-Value Clients. Start Attracting Premium Clients with Proven Digital Marketing Built for Accounting Firms.
              </p>

              <p className="text-base sm:text-xl md:text-2xl text-charcoal/90 leading-relaxed mb-4 sm:mb-6 max-w-3xl mx-auto font-semibold px-2">
                The Digital Marketing Agency Australian Accounting Firms Trust for High-Value Client Acquisition and Predictable Growth.
              </p>

              <p className="text-base sm:text-lg text-charcoal/70 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
                Partner with Odin Digital and Watch Your Accounting Firm Dominate Google, Attract Premium Clients, and Scale Profitably. We specialize in eliminating low-value client inquiries and positioning your firm as the premium choice in your market.
              </p>
              
              <div className="pt-2 px-4 hidden md:block">
                <Button
                  onClick={openForm}
                  style={{ backgroundColor: '#D91C5C' }}
                  size="lg"
                  className="text-white hover:opacity-90 shadow-glow text-sm sm:text-base px-8 py-6 h-auto font-semibold"
                >
                  Get Your FREE Accounting Firm Marketing Audit →
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-charcoal/10">
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-charcoal/70 px-4">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-black" style={{ color: '#D91C5C' }}>$574M+</div>
                    <div className="text-xs sm:text-sm">Client Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-black" style={{ color: '#D91C5C' }}>95%</div>
                    <div className="text-xs sm:text-sm">Client Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-black" style={{ color: '#D91C5C' }}>540%</div>
                    <div className="text-xs sm:text-sm">Average ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Problem/Agitation Section */}
        <section className="py-12 sm:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
                Why Most Marketing Agencies Fail Accounting Firms
              </h2>
              <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
                Australian accounting firms waste millions every year on accountant marketing that looks good on paper but delivers nothing to the bottom line. Here's why most agencies fail.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="p-6 border-charcoal/10 shadow-card">
                <TrendingDown className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-2">Low-Value Client Disaster</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Most agencies drive traffic without filtering for high-value clients. You end up wasting time on price-shoppers and tyre-kickers who will never become profitable clients.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <Tag className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-2">Commoditization Problem</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Generic marketing positions you as just another accountant competing on price. You need marketing that positions you as the premium choice, not the cheapest option.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <FileText className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-2">Generic Strategy Problem</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Cookie-cutter strategies don't work for accounting firms. You need specialized campaigns that understand your market, your competition, and your ideal client profile.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <BarChart className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-2">No ROI Tracking</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Most agencies can't tell you the cost per client or ROI. You're flying blind, spending money without knowing if it's generating profitable returns.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <Clock className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-2">Slow Results, No Accountability</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Agencies promise results "in 6-12 months" with long lock-in contracts. You're stuck paying for campaigns that aren't delivering while your competitors steal market share.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <MapPin className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-2">No Local Focus</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  National campaigns waste budget on areas you don't serve. You need hyper-local targeting that dominates your specific service area and attracts nearby clients.
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
                Stop the Marketing Bleed: Talk to an Accounting Marketing Expert →
              </Button>
            </div>
          </div>
        </section>

        {/* 3. The Four Core Services */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
                How We Attract High-Value Clients for Accounting Firms
              </h2>
              <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
                We provide accounting firm marketing that eliminates waste and builds campaigns designed to attract premium clients, reduce cost per client, and scale profitably.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <Card className="p-6 border-charcoal/10 shadow-card flex flex-col h-full">
                <Search className="h-12 w-12 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-2">SEO for Accountants</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4 flex-grow">
                  Dominating Page 1 for High-Value Accounting Searches
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card flex flex-col h-full">
                <MousePointerClick className="h-12 w-12 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-2">Google Ads</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4 flex-grow">
                  Attracting High-Value Clients Immediately
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card flex flex-col h-full">
                <Share2 className="h-12 w-12 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-2">Meta Ads</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4 flex-grow">
                  Building Awareness and Nurturing Leads
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card flex flex-col h-full">
                <Layout className="h-12 w-12 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-2">Website Design</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4 flex-grow">
                  High-Converting Websites That Attract Premium Clients
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* 4. SEO for Accountants (Detailed) */}
        <section className="py-12 sm:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
                SEO for Accountants: Dominating Page 1 for High-Value Accounting Searches
              </h2>
              <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
                We build accountant SEO strategies that get your firm to Page 1 for the exact searches your ideal clients are using.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="p-6 border-charcoal/10 shadow-card">
                <Target className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-3">Keyword Precision: Targeting Only High-Intent, High-Value Accounting Searches</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We target keywords that attract premium clients, not price-shoppers. "Tax accountant for high-net-worth individuals" instead of "cheap tax return." Every keyword is vetted for commercial intent and client value.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <CheckCircle2 className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-3">Technical SEO: Building the Foundation for Rankings</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We optimize site speed, mobile experience, schema markup, and technical infrastructure to ensure Google can crawl, index, and rank your site effectively. Technical excellence is non-negotiable.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <MapPin className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-3">Local SEO for Accounting Firms: Owning the Google Local 3-Pack</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We optimize your Google Business Profile, build local citations, and implement geo-targeted strategies to ensure you dominate local searches in your service area. Local visibility drives high-intent inquiries.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <FileText className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-3">Content Strategy: Creating Content That Ranks and Converts</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We create authoritative, SEO-optimized content that answers client questions, builds trust, and positions you as the expert. Every piece is designed to rank on Page 1 and convert readers into clients.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card md:col-span-2">
                <LinkIcon className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-3">Link Building for Accounting Firms: Earning High-Quality Accounting Backlinks</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We build high-quality backlinks from authoritative accounting and finance websites to boost your domain authority and rankings. No spammy tactics—only white-hat link building that delivers long-term results.
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
                See Our SEO Packages for Accounting Firms →
              </Button>
            </div>
          </div>
        </section>

        {/* 5. Google Ads for Accounting Firms (Detailed) */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
                Google Ads for Accounting Firms: Attracting High-Value Clients Immediately
              </h2>
              <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
                We build Google Ads for accountants campaigns that deliver immediate, high-quality client inquiries while your SEO builds momentum.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="p-6 border-charcoal/10 shadow-card">
                <Target className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-3">Keyword Precision: Targeting Only High-Intent Accounting Searches</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We target keywords with commercial intent and filter out low-value searches. "SMSF accountant near me" gets clicks. "Free tax advice" gets excluded. Every dollar is spent on high-value prospects.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <MapPin className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-3">Geographic Precision: Eliminating Wasted Spend</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We target only your service area with radius targeting and location exclusions. No more paying for clicks from people 200 kilometers away who will never become clients.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <FileText className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-3">Ad Copy That Converts: Value-Focused, Premium Positioning</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We write ad copy that positions you as the premium choice, not the cheapest option. We highlight your specialization, expertise, and value—attracting clients who care about quality, not price.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <Layout className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-3">Landing Page Optimization: Turning Clicks into Client Inquiries</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We create high-converting landing pages that match search intent, build trust, and guide visitors to book a consultation. Every element is tested and optimized for maximum conversion.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card md:col-span-2">
                <BarChart className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-3">Transparent, Client-Focused Reporting</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We track cost per lead, cost per client, and ROI with complete transparency. You'll know exactly how much each client costs to acquire and the profitability of your campaigns.
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
                See Our Google Ads Packages for Accounting Firms →
              </Button>
            </div>
          </div>
        </section>

        {/* 6. Meta Ads for Accounting Firms (Detailed) */}
        <section className="py-12 sm:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
                Meta Ads (Facebook & Instagram) for Accounting Firms: Building Awareness and Nurturing Leads
              </h2>
              <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
                We build Facebook ads for accountants and Instagram campaigns that build awareness, establish trust, and nurture potential clients through the decision-making process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="p-6 border-charcoal/10 shadow-card">
                <Users className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-3">Audience Precision: Targeting Only Your Ideal Accounting Clients</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We use demographic, interest, and behavioral targeting to reach business owners, high-net-worth individuals, and professionals who need your services. No wasted impressions on unqualified audiences.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <Shield className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-3">Creative That Builds Trust: Authority-Focused, Value-Driven</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We create professional ad creatives that position you as the trusted authority. Educational content, client testimonials, and value-driven messaging build credibility before the first conversation.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <Target className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-3">Full-Funnel Strategy: Warming Up Cold Traffic Before the Consultation</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We don't just ask for the sale on the first impression. We nurture prospects with educational content, case studies, and social proof to build trust before they book a consultation.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <Eye className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-3">Retargeting: Capturing the 97% Who Didn't Convert</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Most visitors don't convert on the first visit. We implement retargeting campaigns that bring them back with targeted offers, testimonials, and reminders to book a consultation.
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
                See Our Meta Ads Packages for Accounting Firms →
              </Button>
            </div>
          </div>
        </section>

        {/* 7. Accounting Firm Website Design (Detailed) */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
                Accounting Firm Website Design: High-Converting Websites That Attract Premium Clients
              </h2>
              <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
                We build accountant website design that positions your firm as the premium choice and converts visitors into client inquiries at the highest possible rate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="p-6 border-charcoal/10 shadow-card">
                <Trophy className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-3">Strategic Design: Positioning You as the Premium Choice</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We design websites that communicate professionalism, expertise, and value. Every design element positions you as the premium choice, not the cheapest option.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <Smartphone className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-3">Mobile-First Development: Flawless Experience on All Devices</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Over 60% of visitors will view your site on mobile. We build mobile-first websites that deliver a flawless experience on every device, ensuring you never lose a lead to poor mobile performance.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <Award className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-3">Trust-Building Elements: Credentials, Testimonials, Case Studies</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We integrate credentials, client testimonials, and case studies to build immediate trust. Your visitors need proof—we provide it in a way that converts browsers into buyers.
                </p>
              </Card>

              <Card className="p-6 border-charcoal/10 shadow-card">
                <Search className="h-10 w-10 mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-xl font-bold text-charcoal mb-3">SEO-Optimized from Day One</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Every website we build is SEO-optimized from launch. Clean code, fast load times, schema markup, and keyword-optimized content ensure your site ranks from day one.
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
                See Our Accounting Firm Website Design Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* 8. Why Accounting Firms Choose Odin Digital */}
        <section className="py-12 sm:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
                Why Accounting Firms Choose Odin Digital
              </h2>
              <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
                We are not a generalist agency that dabbles in accounting marketing. We are specialists who understand the unique challenges of marketing for accounting firms.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
              <Card className="p-6 text-center border-charcoal/10 shadow-card">
                <Trophy className="h-12 w-12 mx-auto mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-lg font-bold text-charcoal mb-2">Proven Track Record</h3>
                <p className="text-charcoal/70 text-sm">
                  $574M+ in client revenue. 540% average ROI. 95% client retention.
                </p>
              </Card>

              <Card className="p-6 text-center border-charcoal/10 shadow-card">
                <Lock className="h-12 w-12 mx-auto mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-lg font-bold text-charcoal mb-2">No Lock-In Contracts</h3>
                <p className="text-charcoal/70 text-sm">
                  We earn your business every month. No long-term contracts. Cancel anytime.
                </p>
              </Card>

              <Card className="p-6 text-center border-charcoal/10 shadow-card">
                <BarChart className="h-12 w-12 mx-auto mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-lg font-bold text-charcoal mb-2">Full Transparency</h3>
                <p className="text-charcoal/70 text-sm">
                  Complete transparency on spend, performance, and ROI. No hidden fees.
                </p>
              </Card>

              <Card className="p-6 text-center border-charcoal/10 shadow-card">
                <Calculator className="h-12 w-12 mx-auto mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-lg font-bold text-charcoal mb-2">Specialization Expertise</h3>
                <p className="text-charcoal/70 text-sm">
                  We understand accounting firms, your market, and your client acquisition challenges.
                </p>
              </Card>

              <Card className="p-6 text-center border-charcoal/10 shadow-card">
                <Award className="h-12 w-12 mx-auto mb-3" style={{ color: '#D91C5C' }} />
                <h3 className="text-lg font-bold text-charcoal mb-2">Premium Positioning</h3>
                <p className="text-charcoal/70 text-sm">
                  We position you as the premium choice, attracting high-value clients, not price-shoppers.
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
                Talk to an Accounting Marketing Specialist →
              </Button>
            </div>
          </div>
        </section>

        {/* 9. FAQ Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
                FAQs: Your Questions About Accounting Firm Marketing Answered
              </h2>
              <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
                We know you have specific concerns about cost, lead quality, and positioning. Here are clear, honest answers.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How much does accounting firm marketing cost?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Accounting firm marketing costs vary depending on your specialization, competition, and goals. Most Australian accounting firms invest $2,000 - $8,000 per month for comprehensive digital marketing (SEO, Google Ads, Meta Ads, website). Our team will provide a detailed quote during your free audit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  How long does it take to see results from SEO?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  SEO is a long-term strategy. You will typically see initial improvements in rankings and traffic within 3-4 months, with significant results within 6-12 months. Google Ads delivers immediate results (within days).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  How do you filter out low-value clients?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  We use precise targeting (keywords, demographics, location) and positioning strategies to ensure you attract high-value clients who can afford your services and value your expertise, not price-shoppers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  How do you position us as premium instead of cheap?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  We focus on value-based messaging, highlighting your expertise, specialization, and advisory approach. We avoid competing on price and instead position you as the trusted authority.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Do you work with all accounting specializations?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Yes. We work with accounting firms across all specializations, including tax, audit, advisory, SMSF, business services, bookkeeping, and more. We tailor our strategies to your specific specialization.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Can you track ROI and cost per client?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Yes. We implement advanced tracking to measure cost per client inquiry, cost per client acquisition, and revenue impact. You will know exactly how much each client costs to acquire and the ROI of your marketing investment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  Do you offer website design for accounting firms?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Yes. We specialize in accountant website design that is high-converting, mobile-optimized, SEO-friendly, and positions you as the premium choice.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  How is your accounting marketing different from other agencies?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  We are obsessed with results and premium positioning. We understand the unique challenges of accounting firm marketing (low-value clients, commoditization, specialization) and tailor our strategies accordingly. Our 95% client retention rate is proof that we consistently deliver value.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">
                  Do you work with small accounting firms or sole practitioners?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Yes. We work with accounting firms of all sizes, from sole practitioners to large multi-partner firms, offering flexible pricing and strategies designed to maximize ROI.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left">
                  Do you offer a performance guarantee?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  We offer the best guarantee in the industry: No Lock-In Contracts. If we are not delivering high-quality client inquiries and a positive ROI, you are free to leave at any time. We put the risk on us, not you.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* 10. Final CTA Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 px-2">
              Ready to Stop Wasting Money and Start Attracting High-Value Clients?
            </h2>
            <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-4">
              Stop settling for low-value clients. Start working with the digital marketing for accounting firms agency that delivers high-value client inquiries and predictable growth.
            </p>

            <Button
              onClick={openForm}
              style={{ backgroundColor: '#D91C5C' }}
              size="lg"
              className="text-white hover:opacity-90 shadow-glow w-full sm:w-auto text-base sm:text-lg px-8 py-6 h-auto font-semibold"
            >
              Claim Your FREE Accounting Firm Marketing Audit →
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AccountingFirms;
