import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Search,
  MousePointerClick,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Shield,
  Award,
  CheckCircle,
  Sparkles,
  Crown,
  Smile,
  Star,
  AlertCircle,
  BarChart,
  Zap,
  Eye,
  MapPin,
  FileText,
  Image as ImageIcon,
  Share2,
  Layout
} from "lucide-react";

const CosmeticDentists = () => {
  const { openForm } = useMarketingForm();

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Performance-focused digital marketing agency specializing in cosmetic dentist SEO, Google Ads, Meta Ads, and web design. $574M+ in client revenue. No lock-in contracts.",
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
        "serviceType": "Digital Marketing for Cosmetic Dentists",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "description": "Comprehensive digital marketing services for cosmetic dental practices, including cosmetic dentist SEO, Google Ads, Meta Ads, and web design, focused on high-value cosmetic cases."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does digital marketing cost for cosmetic dentists?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Digital marketing for cosmetic dentists costs vary depending on your location, competition, and goals. Most cosmetic dental practices invest $3,000 - $12,000 per month for comprehensive marketing (SEO, Google Ads, Meta Ads, website). Our team will provide a detailed quote during your free audit."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google Ads delivers immediate results (cosmetic consultations within days). SEO typically takes 3-6 months for significant results. Meta Ads typically show results within 2-4 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with small cosmetic dental practices or only large practices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work with cosmetic dental practices of all sizes, from solo practitioners to multi-location practices, offering flexible pricing and strategies designed to maximize ROI."
            }
          },
          {
            "@type": "Question",
            "name": "How do you measure ROI for cosmetic dentists?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We implement advanced conversion tracking to measure cost per cosmetic consultation, cost per cosmetic case, and return on ad spend. You will know exactly how much revenue your marketing is generating."
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
            "name": "Can you help with before/after gallery optimization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We optimize your before/after galleries for SEO, mobile, and conversion to maximize their impact on consultation booking rates."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with general dentists or only cosmetic dentists?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work with both, but our cosmetic dental marketing strategies are specifically designed for practices that focus on high-value elective cosmetic procedures (veneers, implants, smile makeovers)."
            }
          },
          {
            "@type": "Question",
            "name": "How do you target high-value cosmetic patients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use cosmetic-specific keyword targeting, demographic targeting (age, income, location), and interest targeting (beauty, fashion, weddings) to ensure your ads and SEO efforts reach patients most likely to invest in cosmetic dentistry."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with financing and payment plan marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We prominently display financing options in all ad copy, landing pages, and website content, as financing is critical for converting high-value cosmetic cases."
            }
          },
          {
            "@type": "Question",
            "name": "Do you understand cosmetic dentistry procedures?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We understand the difference between veneers, crowns, implants, bridges, teeth whitening, smile makeovers, and other cosmetic procedures, and we build campaigns tailored to each procedure's unique patient intent and value."
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
        <title>Digital Marketing for Cosmetic Dentists | Cosmetic Dentist SEO & Google Ads | Odin Digital</title>
        <meta name="description" content="Stop attracting low-value patients. Odin Digital provides cosmetic dentist SEO, Google Ads, and web design focused on filling your calendar with high-value veneers, implants, and smile makeovers." />
        <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      </Helmet>

      <Header />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <Button
          onClick={openForm}
          style={{ backgroundColor: '#D91C5C' }}
          className="text-white shadow-glow"
        >
          Get FREE Audit →
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
        <div className="absolute top-1/4 right-1/3 w-10 h-10" style={{ background: 'linear-gradient(135deg, rgba(217, 28, 92, 0.15), rgba(138, 0, 0, 0.15))', borderRadius: '50%', animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20 pt-32">
          <div className="max-w-4xl mx-auto animate-slide-up text-center">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-charcoal leading-tight mb-6">
              Digital Marketing for Cosmetic Dentists
            </h1>
            
            <p className="text-2xl md:text-3xl text-charcoal font-bold leading-tight mb-6">
              Stop Paying for Marketing That Doesn't Deliver High-Value Cosmetic Cases. Start Dominating Your Local Market with Proven Strategies That Fill Your Calendar with Veneers, Implants, and Smile Makeovers.
            </p>
            
            <p className="text-xl md:text-2xl text-charcoal/80 leading-relaxed mb-4 font-semibold">
              The Digital Marketing Agency Cosmetic Dentists Trust for More High-Value Cases and Premium Patient Acquisition.
            </p>
            
            <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed mb-8 max-w-3xl mx-auto">
              Partner with Odin Digital and Watch Your Cosmetic Dental Practice Scale with Marketing That Actually Drives Revenue, Not Just Website Visits.
            </p>
            
            <div className="pt-2">
              <Button
                onClick={openForm}
                size="lg"
                style={{ backgroundColor: '#D91C5C' }}
                className="text-white text-lg px-12 py-6 h-auto shadow-glow hover:scale-105 transition-transform"
              >
                Get Your FREE Cosmetic Dental Marketing Audit →
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#D91C5C' }}>$574M+</div>
                <div className="text-sm text-charcoal/70">Client Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#D91C5C' }}>95%</div>
                <div className="text-sm text-charcoal/70">Client Retention</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-3xl font-bold" style={{ color: '#D91C5C' }}>540%</div>
                <div className="text-sm text-charcoal/70">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem/Agitation Section */}
      <section className="py-20 bg-muted decorative-circles-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
              Why Most Dental Marketing Agencies Fail Cosmetic Dentists
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Cosmetic dentists waste millions every year on cosmetic dentist marketing that looks impressive on paper but delivers nothing to the bottom line. Here's why most agencies fail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <AlertCircle className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Low-Value Patient Flood
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                They fill your calendar with cleanings and basic work, not the $10K+ veneers and implants that actually grow your practice.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Target className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Generic Dental Strategy
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                They treat your cosmetic practice like a general dentist, using the same playbook for everyone without cosmetic-specific expertise.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Crown className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl font-bold text-charcoal mb-3">
                No Cosmetic Focus
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                They don't understand the difference between veneers, implants, and smile makeovers, or how to market each procedure effectively.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <BarChart className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Vanity Metrics
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                They celebrate clicks and impressions while your calendar stays empty of high-value cosmetic consultations.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Zap className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Slow Results, No Accountability
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                They lock you into 12-month contracts with no performance guarantees, leaving you stuck with poor results.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Sparkles className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl font-bold text-charcoal mb-3">
                No Cosmetic Expertise
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                They don't know how to position you as the premium cosmetic authority or attract patients willing to invest $15K+ in their smile.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={openForm}
              size="lg"
              style={{ backgroundColor: '#D91C5C' }}
              className="text-white shadow-glow"
            >
              Stop the Marketing Bleed: Talk to a Cosmetic Dental Marketing Expert →
            </Button>
          </div>
        </div>
      </section>

      {/* 3. SEO for Cosmetic Dentists */}
      <section className="py-20 bg-white decorative-circles">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
              SEO for Cosmetic Dentists: Dominating "Veneers [City]" and High-Value Cosmetic Searches
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We build cosmetic dentist SEO strategies that get your cosmetic dental practice to Page 1 for the exact searches your ideal cosmetic patients are using when they're ready to invest in their smile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Search className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Cosmetic Keyword Targeting: Capturing High-Value Cases
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                We target the exact keywords cosmetic patients search for: "veneers [city]", "smile makeover [city]", "porcelain veneers near me", "cosmetic dentist [location]".
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Procedure-specific optimization for veneers, implants, whitening
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  High-intent keyword focus that drives cosmetic consultations
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Long-tail targeting for specific procedures and patient concerns
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <MapPin className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Local SEO: Owning the Google Local 3-Pack for Cosmetic Searches
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                We optimize your Google Business Profile and local citations to dominate the Local 3-Pack for cosmetic dental searches in your area.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Google Business Profile optimization with cosmetic focus
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Strategic review generation from cosmetic cases
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Local citation building for cosmetic dentistry authority
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <FileText className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Procedure-Specific SEO: Ranking for Your Most Profitable Services
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                We create dedicated landing pages for each cosmetic procedure, optimized to rank for high-value searches and convert visitors into consultations.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Dedicated pages for veneers, implants, whitening, makeovers
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Rich content addressing patient questions and concerns
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Strategic internal linking to guide patient journey
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <ImageIcon className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Before/After Gallery Optimization: Building Trust and Social Proof
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                We optimize your before/after galleries for maximum SEO impact and conversion, showcasing your cosmetic expertise to attract high-value patients.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Image SEO optimization for cosmetic procedure searches
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Strategic gallery placement for maximum conversion impact
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Mobile-optimized galleries that load fast and convert
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={openForm}
              size="lg"
              style={{ backgroundColor: '#D91C5C' }}
              className="text-white shadow-glow"
            >
              See Our SEO Packages for Cosmetic Dentists →
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Google Ads for Cosmetic Dentists */}
      <section className="py-20 bg-muted decorative-circles-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
              Google Ads for Cosmetic Dentists: Immediate High-Value Cosmetic Consultations
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We build Google Ads for cosmetic dentists campaigns that deliver immediate, high-value cosmetic consultations while your SEO builds momentum—even in competitive markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Target className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Cosmetic Keyword Targeting: Capturing High-Intent Patients
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                We bid on the exact searches cosmetic patients use when they're ready to book: "veneers [city]", "cosmetic dentist near me", "smile makeover cost".
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  High-intent keyword focus for immediate consultations
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Negative keyword filtering to avoid low-value clicks
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Bid optimization for maximum ROI on cosmetic procedures
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <MapPin className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Geographic Precision: Targeting Your Ideal Patient Demographics
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                We use advanced geographic and demographic targeting to reach patients in high-income areas who can afford premium cosmetic work.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Income-based targeting for high-value patient acquisition
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Geographic radius optimization around your practice
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Demographic layering to reach ideal cosmetic patients
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <FileText className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Ad Copy That Converts: Before/After, Financing, Urgency
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                We write ad copy that speaks directly to cosmetic patients' desires and objections, highlighting before/after results, financing, and limited availability.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Conversion-focused ad copy highlighting transformations
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Financing messaging to overcome price objections
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Urgency and scarcity to drive immediate booking
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <MousePointerClick className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Landing Page Optimization: Turning Clicks into Cosmetic Consultations
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                We build high-converting landing pages specifically for cosmetic procedures, with before/after galleries, financing info, and clear CTAs.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Procedure-specific landing pages that convert at 20%+
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Strategic placement of before/after galleries
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Mobile-optimized for on-the-go booking
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={openForm}
              size="lg"
              style={{ backgroundColor: '#D91C5C' }}
              className="text-white shadow-glow"
            >
              See Our Google Ads Packages for Cosmetic Dentists →
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Meta Ads for Cosmetic Dentists */}
      <section className="py-20 bg-white decorative-circles">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
              Meta Ads (Facebook & Instagram) for Cosmetic Dentists: Building Awareness and Trust
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We build Facebook Ads for cosmetic dentists campaigns that build awareness, establish trust, and position you as the go-to cosmetic dentist before someone needs your services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Users className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Audience Targeting: Reaching High-Value Cosmetic Patients
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                We target high-income demographics with interests in beauty, fashion, weddings, and personal appearance—the exact audience for cosmetic dentistry.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Interest targeting: beauty, fashion, weddings
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Demographic targeting: age, income, location
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Lookalike audiences from existing cosmetic patients
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Eye className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Creative That Converts: Before/After, Smile Transformations, Social Proof
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                We create scroll-stopping creative showcasing your best before/after transformations, patient testimonials, and smile makeover results.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Before/after imagery that stops the scroll
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Video testimonials from happy cosmetic patients
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Smile transformation stories that inspire action
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <TrendingUp className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Full-Funnel Strategy: Building Trust Before the Consultation
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                We build full-funnel campaigns that warm up prospects with educational content before retargeting them with consultation offers.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Top-of-funnel awareness campaigns
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Middle-of-funnel educational content
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Bottom-of-funnel retargeting for conversions
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={openForm}
              size="lg"
              style={{ backgroundColor: '#D91C5C' }}
              className="text-white shadow-glow"
            >
              See Our Meta Ads Packages for Cosmetic Dentists →
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Web Design for Cosmetic Dentists */}
      <section className="py-20 bg-muted decorative-circles-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
              Web Design for Cosmetic Dentists: High-Converting Websites That Drive Cosmetic Consultations
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We build cosmetic dentist website design that positions your cosmetic dental practice as the trusted local expert and converts visitors into high-value cosmetic consultations at the highest possible rate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Crown className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Premium Design: Positioning You as the Cosmetic Authority
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                We design premium websites that reflect the quality of your cosmetic work and position you as the trusted authority for smile transformations.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Luxury design that matches your premium positioning
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Professional photography and before/after showcases
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Trust signals: credentials, awards, testimonials
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <ImageIcon className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Before/After Gallery Optimization
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                We create stunning before/after galleries that showcase your best work and inspire visitors to book consultations.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Filterable galleries by procedure type
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  High-quality image optimization for fast loading
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Strategic placement throughout patient journey
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Layout className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Mobile-First, Conversion-Optimized
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                We build mobile-first websites optimized for on-the-go booking, with prominent CTAs and easy consultation scheduling.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Lightning-fast loading on all devices
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Click-to-call and one-tap booking on mobile
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Conversion rate optimization throughout
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Search className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                SEO-Optimized from Day One
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                We build websites with SEO best practices baked in, so you start ranking for cosmetic searches from day one.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Technical SEO optimization for fast indexing
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Schema markup for enhanced search visibility
                </li>
                <li className="flex items-start">
                  <span style={{ color: '#D91C5C' }} className="mr-2 mt-1">•</span>
                  Content strategy aligned with cosmetic keywords
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={openForm}
              size="lg"
              style={{ backgroundColor: '#D91C5C' }}
              className="text-white shadow-glow"
            >
              See Our Web Design Packages for Cosmetic Dentists →
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Why Cosmetic Dentists Choose Odin Digital */}
      <section className="py-20 bg-white decorative-circles">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
              Why Cosmetic Dentists Choose Odin Digital
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We are not a generalist agency that dabbles in dental marketing. We are specialists who understand how to dominate local markets for cosmetic dental practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Award className="h-12 w-12 mx-auto mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Proven Track Record
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                $574M+ in client revenue, 540% average ROI, and 95% client retention prove our strategies work.
              </p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Shield className="h-12 w-12 mx-auto mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl font-bold text-charcoal mb-3">
                No Lock-In Contracts
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Month-to-month agreements. If we don't deliver results, you're free to leave. No games.
              </p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <CheckCircle className="h-12 w-12 mx-auto mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Full Transparency
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Real-time dashboards, monthly reports, and complete visibility into where your investment goes.
              </p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Sparkles className="h-12 w-12 mx-auto mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Cosmetic-Focused Expertise
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                We understand the difference between veneers, implants, and smile makeovers—and how to market each.
              </p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Target className="h-12 w-12 mx-auto mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Local Market Domination
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                We help you own your local market for cosmetic dentistry, outranking and outperforming competitors.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={openForm}
              size="lg"
              style={{ backgroundColor: '#D91C5C' }}
              className="text-white shadow-glow"
            >
              Talk to a Cosmetic Dental Marketing Specialist →
            </Button>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-20 bg-muted decorative-circles-alt">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
              FAQs: Your Questions About Cosmetic Dental Marketing Answered
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-white shadow-card">
              <AccordionTrigger className="text-left font-semibold text-charcoal">
                How much does digital marketing cost for cosmetic dentists?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Digital marketing for cosmetic dentists costs vary depending on your location, competition, and goals. Most cosmetic dental practices invest $3,000 - $12,000 per month for comprehensive marketing (SEO, Google Ads, Meta Ads, website). Our team will provide a detailed quote during your free audit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-white shadow-card">
              <AccordionTrigger className="text-left font-semibold text-charcoal">
                How long does it take to see results?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Google Ads delivers immediate results (cosmetic consultations within days). SEO typically takes 3-6 months for significant results. Meta Ads typically show results within 2-4 weeks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-white shadow-card">
              <AccordionTrigger className="text-left font-semibold text-charcoal">
                Do you work with small cosmetic dental practices or only large practices?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                We work with cosmetic dental practices of all sizes, from solo practitioners to multi-location practices, offering flexible pricing and strategies designed to maximize ROI.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-white shadow-card">
              <AccordionTrigger className="text-left font-semibold text-charcoal">
                How do you measure ROI for cosmetic dentists?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                We implement advanced conversion tracking to measure cost per cosmetic consultation, cost per cosmetic case, and return on ad spend. You will know exactly how much revenue your marketing is generating.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-white shadow-card">
              <AccordionTrigger className="text-left font-semibold text-charcoal">
                Do you offer a performance guarantee?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                We offer the best guarantee in the industry: No Lock-In Contracts. If we are not delivering a positive ROI, you are free to leave at any time. We put the risk on us, not you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-white shadow-card">
              <AccordionTrigger className="text-left font-semibold text-charcoal">
                Can you help with before/after gallery optimization?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Absolutely. We optimize your before/after galleries for SEO, mobile, and conversion to maximize their impact on consultation booking rates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6 bg-white shadow-card">
              <AccordionTrigger className="text-left font-semibold text-charcoal">
                Do you work with general dentists or only cosmetic dentists?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                We work with both, but our cosmetic dental marketing strategies are specifically designed for practices that focus on high-value elective cosmetic procedures (veneers, implants, smile makeovers).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-6 bg-white shadow-card">
              <AccordionTrigger className="text-left font-semibold text-charcoal">
                How do you target high-value cosmetic patients?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                We use cosmetic-specific keyword targeting, demographic targeting (age, income, location), and interest targeting (beauty, fashion, weddings) to ensure your ads and SEO efforts reach patients most likely to invest in cosmetic dentistry.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border rounded-lg px-6 bg-white shadow-card">
              <AccordionTrigger className="text-left font-semibold text-charcoal">
                Can you help with financing and payment plan marketing?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Yes. We prominently display financing options in all ad copy, landing pages, and website content, as financing is critical for converting high-value cosmetic cases.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border rounded-lg px-6 bg-white shadow-card">
              <AccordionTrigger className="text-left font-semibold text-charcoal">
                Do you understand cosmetic dentistry procedures?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Yes. We understand the difference between veneers, crowns, implants, bridges, teeth whitening, smile makeovers, and other cosmetic procedures, and we build campaigns tailored to each procedure's unique patient intent and value.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 9. Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-black mb-6 leading-tight">
            Ready to Stop Attracting Low-Value Patients and Start Filling Your Calendar with High-Value Cosmetic Cases?
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-90">
            Stop settling for marketing that fills your calendar with cleanings. Start working with the digital marketing agency for cosmetic dentists that drives high-value cosmetic consultations, veneer cases, implant inquiries, and smile makeover bookings.
          </p>
          
          <Button
            onClick={openForm}
            size="xl"
            style={{ backgroundColor: '#D91C5C' }}
            className="text-white text-xl px-16 py-8 h-auto shadow-glow hover:scale-105 transition-transform"
          >
            Claim Your FREE Cosmetic Dental Marketing Audit →
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CosmeticDentists;
