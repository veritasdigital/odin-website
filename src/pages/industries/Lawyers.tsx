import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { 
  Search, 
  MousePointerClick, 
  Share2, 
  Layout, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Award,
  CheckCircle,
  Shield,
  Target,
  BarChart,
  Zap,
  AlertTriangle,
  FileText,
  Scale,
  Briefcase,
  MapPin,
  Clock
} from "lucide-react";

const Lawyers = () => {
  const { openForm } = useMarketingForm();

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au/",
        "logo": "https://odindigital.com.au/logo.png",
        "description": "Performance-focused digital marketing for lawyers and law firms in Australia. We specialize in SEO, Google Ads, Meta Ads, and website design for legal practices, focusing on high-value client acquisition and compliance. $574M+ in client revenue.",
        "founder": {
          "@type": "Person",
          "name": "Lucas Durante"
        },
        "slogan": "No Lock-In Contracts. Just Results.",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "areaServed": "AU",
          "availableLanguage": "English"
        },
        "sameAs": []
      },
      {
        "@type": "Service",
        "serviceType": "Digital Marketing for Lawyers",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "description": "Comprehensive digital marketing services for Australian law firms, including SEO, Google Ads, Meta Ads, and website design, focused on high-value client acquisition, compliance, and ROI.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Legal Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO for Lawyers"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Ads for Law Firms"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Meta Ads for Law Firms"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Law Firm Website Design"
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
            "name": "How much does law firm marketing cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Law firm marketing costs vary depending on your practice area, competition, and goals. Most Australian law firms invest $3,000 - $10,000 per month for comprehensive digital marketing (SEO, Google Ads, Meta Ads, website). Our team will provide a detailed quote during your free audit."
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
            "name": "How do you ensure compliance with Law Society advertising rules?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We have extensive experience with legal advertising regulations across all Australian states. All campaigns are reviewed to ensure compliance with Law Society rules and ACCC guidelines. We never make prohibited claims or breach client confidentiality."
            }
          },
          {
            "@type": "Question",
            "name": "How do you filter out low-quality leads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use precise targeting (keywords, demographics, location) and qualification mechanisms (intake forms, call screening) to ensure you only receive high-quality case inquiries that match your practice area and ideal client profile."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with all practice areas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We work with law firms across all practice areas, including family law, personal injury, commercial law, criminal defense, estate planning, conveyancing, immigration, and more. We tailor our strategies to your specific practice area."
            }
          },
          {
            "@type": "Question",
            "name": "Can you track ROI and cost per case?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We implement advanced tracking to measure cost per case inquiry, cost per case acquisition, and revenue impact. You will know exactly how much each case costs to acquire and the ROI of your marketing investment."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer website design for law firms?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in lawyer website design that is high-converting, mobile-optimized, SEO-friendly, and compliant with legal advertising regulations."
            }
          },
          {
            "@type": "Question",
            "name": "How is your legal marketing different from other agencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are obsessed with results and compliance. We understand the unique challenges of legal marketing (compliance, lead quality, practice area specialization) and tailor our strategies accordingly. Our 95% client retention rate is proof that we consistently deliver value."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with small law firms or solo practitioners?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We work with law firms of all sizes, from solo practitioners to large multi-partner firms, offering flexible pricing and strategies designed to maximize ROI."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer a performance guarantee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer the best guarantee in the industry: No Lock-In Contracts. If we are not delivering high-quality case inquiries and a positive ROI, you are free to leave at any time. We put the risk on us, not you."
            }
          }
        ]
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Marketing Services for Lawyers",
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
        <title>Digital Marketing for Lawyers & Law Firms | SEO, Google Ads, Web Design | Odin Digital</title>
        <meta name="description" content="Stop paying for legal marketing that doesn't deliver high-value clients. Odin Digital provides digital marketing for lawyers focused on premium case acquisition, compliance, and ROI. No lock-in contracts." />
        <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      </Helmet>

      <Header />
      
      <div className="container mx-auto px-4">
        <Breadcrumbs items={[
          { label: "Industries", path: "/industries" },
          { label: "Lawyers", path: "/industries/lawyers" }
        ]} />
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <Button
          onClick={openForm}
          variant="hero"
          className="shadow-glow w-full text-sm"
        >
          Get Your FREE Marketing Audit
        </Button>
      </div>

      {/* 1. Hero Section */}
      <section className="relative isolate overflow-hidden min-h-[90vh] flex items-center bg-white">
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
              Digital Marketing for Lawyers
            </h1>
            
            <p className="text-lg sm:text-2xl md:text-3xl text-charcoal font-bold leading-tight mb-4 sm:mb-6 px-2">
              Stop Paying for Legal Marketing That Doesn't Deliver High-Value Clients. Start Attracting Premium Cases with Proven Digital Marketing Built for Law Firms.
            </p>

            <p className="text-base sm:text-xl md:text-2xl text-charcoal/70 leading-relaxed mb-3 sm:mb-4 max-w-3xl mx-auto font-light px-2">
              The Digital Marketing Agency Australian Law Firms Trust for High-Value Client Acquisition and Predictable Growth.
            </p>

            <p className="text-base sm:text-xl md:text-2xl text-charcoal/70 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto font-light px-2">
              Partner with Odin Digital and Watch Your Law Firm Dominate Google, Attract Premium Clients, and Scale Profitably.
            </p>
            
            <div className="pt-2 px-4">
              <Button
                onClick={openForm}
                variant="hero"
                size="lg"
                className="shadow-glow w-full sm:w-auto text-sm sm:text-base"
              >
                Get Your FREE Law Firm Marketing Audit →
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-charcoal/10">
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-charcoal/70 px-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-primary">$574M+</div>
                  <div className="text-xs sm:text-sm">Client Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-primary">95%</div>
                  <div className="text-xs sm:text-sm">Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem/Agitation Section */}
      <section className="py-12 sm:py-20 bg-muted decorative-circles-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              Why Most Legal Marketing Agencies Fail Law Firms
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              Australian law firms waste millions every year on lawyer marketing that looks good on paper but delivers nothing to the bottom line. Here's why most agencies fail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <AlertTriangle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Low-Quality Lead Disaster</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Generic campaigns attract tire-kickers and low-value inquiries that waste your team's time without generating billable hours.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Compliance Nightmare</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Agencies unfamiliar with Law Society advertising rules expose your firm to regulatory risk and potential sanctions.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <FileText className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Generic Strategy Problem</h3>
              <p className="text-charcoal/70 leading-relaxed">
                One-size-fits-all strategies fail to account for practice area nuances, local market dynamics, and client acquisition costs.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <BarChart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">No ROI Tracking</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Without proper tracking, you have no idea which campaigns generate cases and which waste budget on vanity metrics.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Slow Results, No Accountability</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Agencies hide behind "it takes time" excuses while locking you into long-term contracts with no performance guarantees.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">No Local Focus</h3>
              <p className="text-charcoal/70 leading-relaxed">
                International or interstate agencies lack understanding of local legal markets, competition, and client behavior.
              </p>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12 px-4">
            <Button
              onClick={openForm}
              variant="default"
              size="lg"
              className="shadow-primary w-full sm:w-auto text-sm sm:text-base"
            >
              Stop the Marketing Bleed: Talk to a Legal Marketing Expert →
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Four Core Services */}
      <section className="py-12 sm:py-20 bg-white decorative-circles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              How We Attract High-Value Clients for Law Firms
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              We provide law firm marketing that eliminates waste and builds campaigns designed to attract premium clients, reduce cost per case, and scale profitably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Search className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">SEO for Lawyers</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Dominating Page 1 for High-Value Legal Searches
              </p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <MousePointerClick className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Google Ads for Law Firms</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Attracting High-Value Clients Immediately
              </p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Share2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Meta Ads for Law Firms</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Building Awareness and Nurturing Leads
              </p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Layout className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Law Firm Website Design</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                High-Converting Websites That Attract Premium Clients
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. SEO for Lawyers (Detailed) */}
      <section className="py-12 sm:py-20 bg-muted decorative-circles-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              SEO for Lawyers: Dominating Page 1 for High-Value Legal Searches
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              We build lawyer SEO strategies that get your firm to Page 1 for the exact searches your ideal clients are using.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8 border-charcoal/10 shadow-card">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Keyword Precision: Targeting Only High-Intent, High-Value Legal Searches</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We don't waste time ranking for generic terms like "lawyer Sydney." We target high-intent, practice-area-specific searches like "commercial litigation lawyer Sydney CBD" or "family law mediation Northern Beaches." These searches convert at 10–20x higher rates because users are ready to hire.
              </p>
            </Card>

            <Card className="p-8 border-charcoal/10 shadow-card">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Technical SEO: Building the Foundation for Rankings</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We audit and optimize your site's technical infrastructure—site speed, mobile responsiveness, schema markup, XML sitemaps, HTTPS security—to ensure Google can crawl, index, and rank your content efficiently.
              </p>
            </Card>

            <Card className="p-8 border-charcoal/10 shadow-card">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Local SEO for Law Firms: Owning the Google Local 3-Pack</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Most legal searches have local intent. We optimize your Google Business Profile, build local citations, earn local backlinks, and ensure you dominate the Google Local 3-Pack for your practice area and location.
              </p>
            </Card>

            <Card className="p-8 border-charcoal/10 shadow-card">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Content Strategy: Creating Content That Ranks and Converts</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We create practice-area-specific content designed to rank for high-value searches and demonstrate expertise. Blog posts, case studies, FAQs, and legal guides that answer your clients' questions and position your firm as the authority.
              </p>
            </Card>

            <Card className="p-8 border-charcoal/10 shadow-card">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Link Building for Law Firms: Earning High-Quality Legal Backlinks</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We build high-quality backlinks from legal directories, local business associations, industry publications, and relevant websites to establish your domain authority and improve rankings.
              </p>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12 px-4">
            <Button
              onClick={openForm}
              variant="default"
              size="lg"
              className="shadow-primary w-full sm:w-auto text-sm sm:text-base"
            >
              See Our SEO Packages for Law Firms →
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Google Ads for Law Firms (Detailed) */}
      <section className="py-12 sm:py-20 bg-white decorative-circles">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              Google Ads for Law Firms: Attracting High-Value Clients Immediately
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              We build Google Ads for lawyers campaigns that deliver immediate, high-quality case inquiries while your SEO builds momentum.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8 border-charcoal/10 shadow-card">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Keyword Precision: Targeting Only High-Intent Legal Searches</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We bid only on high-intent keywords that signal readiness to hire—phrases like "hire family lawyer," "personal injury compensation claim," or "business dispute lawyer." We exclude low-value terms to eliminate wasted spend.
              </p>
            </Card>

            <Card className="p-8 border-charcoal/10 shadow-card">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Geographic Precision: Eliminating Wasted Spend</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We target only the specific geographic areas you serve. If you practice in Sydney's Eastern Suburbs, we won't waste budget on clicks from Western Sydney or interstate.
              </p>
            </Card>

            <Card className="p-8 border-charcoal/10 shadow-card">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Ad Copy That Converts: Compliance-First, Results-Focused</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We write ad copy that differentiates your firm, highlights your expertise, and includes strong calls-to-action—while ensuring full compliance with Law Society advertising rules.
              </p>
            </Card>

            <Card className="p-8 border-charcoal/10 shadow-card">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Landing Page Optimization: Turning Clicks into Case Inquiries</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We design and optimize landing pages specifically for your Google Ads campaigns—clear value propositions, trust signals, and frictionless contact forms that convert clicks into case inquiries.
              </p>
            </Card>

            <Card className="p-8 border-charcoal/10 shadow-card">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Transparent, Case-Focused Reporting</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We track cost per case inquiry, cost per case acquisition, and revenue impact. You'll know exactly how much each case costs to acquire and the ROI of your investment.
              </p>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12 px-4">
            <Button
              onClick={openForm}
              variant="default"
              size="lg"
              className="shadow-primary w-full sm:w-auto text-sm sm:text-base whitespace-normal break-words"
            >
              See Our Google Ads Packages for Law Firms →
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Meta Ads for Law Firms (Detailed) */}
      <section className="py-12 sm:py-20 bg-muted decorative-circles-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              Meta Ads (Facebook & Instagram) for Law Firms: Building Awareness and Nurturing Leads
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              We build Facebook ads for lawyers and Instagram campaigns that build awareness, establish trust, and nurture potential clients through the decision-making process.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8 border-charcoal/10 shadow-card">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Audience Precision: Targeting Only Your Ideal Legal Clients</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We use Meta's advanced targeting to reach users based on demographics, interests, behaviors, and life events relevant to your practice area—new parents for family law, business owners for commercial law, accident victims for personal injury.
              </p>
            </Card>

            <Card className="p-8 border-charcoal/10 shadow-card">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Creative That Builds Trust: Compliance-First, Authority-Focused</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We create video ads, carousel ads, and static image ads that position your firm as the trusted authority—educational content, case study highlights, lawyer profiles, and client testimonials (with proper consent).
              </p>
            </Card>

            <Card className="p-8 border-charcoal/10 shadow-card">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Full-Funnel Strategy: Warming Up Cold Traffic Before the Consultation</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We don't expect users to hire a lawyer immediately after seeing one ad. We nurture them through awareness, consideration, and decision stages with strategic content that builds trust over time.
              </p>
            </Card>

            <Card className="p-8 border-charcoal/10 shadow-card">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Retargeting: Capturing the 97% Who Didn't Convert</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We retarget users who visited your website but didn't inquire, showing them tailored ads that address objections and encourage them to take the next step.
              </p>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12 px-4">
            <Button
              onClick={openForm}
              variant="default"
              size="lg"
              className="shadow-primary w-full sm:w-auto text-sm sm:text-base whitespace-normal break-words"
            >
              See Our Meta Ads Packages for Law Firms →
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Law Firm Website Design (Detailed) */}
      <section className="py-12 sm:py-20 bg-white decorative-circles">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              Law Firm Website Design: High-Converting Websites That Attract Premium Clients
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              We build lawyer website design that positions your firm as the premium choice and converts visitors into case inquiries at the highest possible rate.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8 border-charcoal/10 shadow-card">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Strategic Design: Positioning You as the Premium Choice</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We design websites that communicate professionalism, expertise, and authority—using strategic messaging, trust signals, and visual hierarchy to position you as the premium choice in your market.
              </p>
            </Card>

            <Card className="p-8 border-charcoal/10 shadow-card">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Mobile-First Development: Flawless Experience on All Devices</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Over 70% of legal searches happen on mobile. We build mobile-first websites that deliver a flawless experience on all devices—fast load times, easy navigation, and click-to-call functionality.
              </p>
            </Card>

            <Card className="p-8 border-charcoal/10 shadow-card">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Compliance-First Approach: Protecting Your Firm from Regulatory Risk</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We ensure your website complies with Law Society advertising rules—no misleading claims, proper disclaimers, privacy policies, and client testimonials with consent.
              </p>
            </Card>

            <Card className="p-8 border-charcoal/10 shadow-card">
              <h3 className="text-2xl font-bold text-charcoal mb-4">SEO-Optimized from Day One</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We build websites with SEO best practices built in—optimized site structure, fast load speeds, mobile responsiveness, schema markup, and content architecture designed to rank.
              </p>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12 px-4">
            <Button
              onClick={openForm}
              variant="default"
              size="lg"
              className="shadow-primary w-full sm:w-auto text-sm sm:text-base whitespace-normal break-words"
            >
              See Our Law Firm Website Design Packages →
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Why Law Firms Choose Odin Digital */}
      <section className="py-12 sm:py-20 bg-muted decorative-circles-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              Why Law Firms Choose Odin Digital
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              We are not a generalist agency that dabbles in legal marketing. We are specialists who understand the unique challenges of marketing for law firms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-charcoal mb-3">Proven Track Record</h3>
              <p className="text-charcoal/70 text-sm">
                $574M+ in client revenue, 95% retention rate
              </p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-charcoal mb-3">No Lock-In Contracts</h3>
              <p className="text-charcoal/70 text-sm">
                Month-to-month agreements, leave anytime
              </p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-charcoal mb-3">Full Transparency</h3>
              <p className="text-charcoal/70 text-sm">
                Track every case inquiry and ROI metric
              </p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-charcoal mb-3">Compliance Expertise</h3>
              <p className="text-charcoal/70 text-sm">
                Law Society rules built into every campaign
              </p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-charcoal mb-3">Practice Area Specialization</h3>
              <p className="text-charcoal/70 text-sm">
                Tailored strategies for your specific practice
              </p>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12 px-4">
            <Button
              onClick={openForm}
              variant="default"
              size="lg"
              className="shadow-primary w-full sm:w-auto text-sm sm:text-base"
            >
              Talk to a Legal Marketing Specialist →
            </Button>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-12 sm:py-20 bg-white decorative-circles">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              FAQs: Your Questions About Legal Marketing Answered
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70 px-4">
              We know you have specific concerns about cost, compliance, and lead quality. Here are clear, honest answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-charcoal/10 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                How much does law firm marketing cost?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Law firm marketing costs vary depending on your practice area, competition, and goals. Most Australian law firms invest $3,000 - $10,000 per month for comprehensive digital marketing (SEO, Google Ads, Meta Ads, website). Our team will provide a detailed quote during your free audit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-charcoal/10 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                How long does it take to see results from SEO?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                SEO is a long-term strategy. You will typically see initial improvements in rankings and traffic within 3-4 months, with significant results within 6-12 months. Google Ads delivers immediate results (within days).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-charcoal/10 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                How do you ensure compliance with Law Society advertising rules?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                We have extensive experience with legal advertising regulations across all Australian states. All campaigns are reviewed to ensure compliance with Law Society rules and ACCC guidelines. We never make prohibited claims or breach client confidentiality.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-charcoal/10 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                How do you filter out low-quality leads?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                We use precise targeting (keywords, demographics, location) and qualification mechanisms (intake forms, call screening) to ensure you only receive high-quality case inquiries that match your practice area and ideal client profile.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-charcoal/10 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                Do you work with all practice areas?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Yes. We work with law firms across all practice areas, including family law, personal injury, commercial law, criminal defense, estate planning, conveyancing, immigration, and more. We tailor our strategies to your specific practice area.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-charcoal/10 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                Can you track ROI and cost per case?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Yes. We implement advanced tracking to measure cost per case inquiry, cost per case acquisition, and revenue impact. You will know exactly how much each case costs to acquire and the ROI of your marketing investment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-charcoal/10 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                Do you offer website design for law firms?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Yes. We specialize in lawyer website design that is high-converting, mobile-optimized, SEO-friendly, and compliant with legal advertising regulations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-charcoal/10 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                How is your legal marketing different from other agencies?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                We are obsessed with results and compliance. We understand the unique challenges of legal marketing (compliance, lead quality, practice area specialization) and tailor our strategies accordingly. Our 95% client retention rate is proof that we consistently deliver value.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border border-charcoal/10 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                Do you work with small law firms or solo practitioners?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Yes. We work with law firms of all sizes, from solo practitioners to large multi-partner firms, offering flexible pricing and strategies designed to maximize ROI.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border border-charcoal/10 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                Do you offer a performance guarantee?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                We offer the best guarantee in the industry: No Lock-In Contracts. If we are not delivering high-quality case inquiries and a positive ROI, you are free to leave at any time. We put the risk on us, not you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-20 bg-gradient-hero decorative-circles-alt">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-charcoal">
            Ready to Stop Wasting Money and Start Attracting High-Value Clients?
          </h2>
          <p className="text-xl mb-8 text-charcoal/90">
            Stop settling for low-quality leads. Start working with the digital marketing for lawyers agency that delivers high-value case inquiries and predictable growth.
          </p>
          <Button
            onClick={openForm}
            variant="secondary"
            size="lg"
            className="shadow-glow whitespace-normal break-words"
          >
            Claim Your FREE Law Firm Marketing Audit →
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Lawyers;