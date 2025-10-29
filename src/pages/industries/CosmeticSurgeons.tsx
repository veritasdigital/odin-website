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
  Briefcase,
  Clock,
  UserCheck,
  Star,
  TrendingDown,
  Eye
} from "lucide-react";

const CosmeticSurgeons = () => {
  const { openForm } = useMarketingForm();

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au/",
        "logo": "https://odindigital.com.au/logo.png",
        "description": "Performance-focused digital marketing agency specializing in compliant marketing for high-regulation industries like cosmetic surgery.",
        "founder": {
          "@type": "Person",
          "name": "Lucas Durante"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "areaServed": "AU",
          "availableLanguage": "English"
        },
        "sameAs": []
      },
      {
        "@type": "WebPage",
        "name": "Cosmetic Surgery Digital Marketing Agency",
        "url": "https://odindigital.com.au/industries/cosmetic-surgeons",
        "description": "The national hub page for compliant, high-ROI digital marketing services for cosmetic surgeons and plastic surgeons in Australia.",
        "inLanguage": "en-AU",
        "lastReviewed": "2025-10-30"
      },
      {
        "@type": "Service",
        "serviceType": "Digital Marketing for Cosmetic Surgeons",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": "Australia",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Cosmetic Surgery Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AHPRA Compliant SEO"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ethical PPC for Surgical Leads"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Reputation-First Social Media"
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
            "name": "How do you ensure our ads comply with AHPRA and Medical Board guidelines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Compliance is our top priority. Our team is fully trained on the AHPRA advertising guidelines for cosmetic procedures. We have a mandatory compliance checklist integrated into every campaign launch, ensuring we avoid prohibited claims, incentives, and targeting of vulnerable groups. We treat compliance as a feature, not an afterthought."
            }
          },
          {
            "@type": "Question",
            "name": "What is the most effective digital channel for acquiring high-value cosmetic surgery patients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The most effective strategy is an integrated one. Google Ads (PPC) captures high-intent patients searching for specific procedures, while SEO builds long-term authority and trust. We use Meta Ads primarily for ethical retargeting and building a community around your brand, ensuring a full-funnel approach."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle the high cost of PPC for cosmetic procedures?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We counter the high Cost Per Click (CPC) by focusing on Conversion Rate Optimization (CRO) and Patient Pre-Qualification. We ensure your ads and landing pages are so compelling and targeted that your conversion rate is significantly higher than the industry average, driving your overall Patient Acquisition Cost (PAC) down."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help us build trust and reputation online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Reputation is everything in cosmetic surgery. We integrate reputation management into every campaign, focusing on ethical patient testimonials, educational content, and strategic PR to position your practice as a trusted authority."
            }
          },
          {
            "@type": "Question",
            "name": "Do you have experience with all cosmetic procedures (surgical and non-surgical)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We have extensive experience marketing both surgical procedures (breast augmentation, rhinoplasty, liposuction, facelifts) and non-surgical treatments (injectables, laser treatments, skin rejuvenation). We tailor campaigns to the specific procedure and patient demographics."
            }
          },
          {
            "@type": "Question",
            "name": "How do you attract qualified patients vs. 'tire-kickers'?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use precise audience targeting (demographics, income brackets, search intent) and pre-qualification mechanisms (pricing transparency, procedure education, consultation forms) to ensure your leads are genuinely interested and financially capable."
            }
          },
          {
            "@type": "Question",
            "name": "What's your average Patient Acquisition Cost (PAC) for cosmetic procedures?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PAC varies significantly depending on the procedure (breast augmentation vs. Botox), location, and competition. We focus on optimizing PAC relative to the Lifetime Value (LTV) of your patients, ensuring a strong ROI. During your free strategy session, we'll provide PAC benchmarks specific to your practice."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help us rank for competitive keywords like 'breast augmentation Sydney'?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Ranking for competitive cosmetic surgery keywords requires a strategic, long-term SEO approach. We use content marketing, technical SEO, local SEO, and compliant link-building to help you dominate your local market."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle before-and-after photos in compliance with advertising rules?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We strictly adhere to AHPRA guidelines, which prohibit the use of before-and-after images in advertising. Instead, we focus on educational content, patient testimonials (text-based), and trust signals to build credibility ethically."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with both established practices and new surgeons?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We work with cosmetic surgeons at all stages—from solo practitioners launching their first practice to large multi-surgeon clinics with established patient bases. Our strategies are tailored to your specific growth stage and goals."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from SEO in the cosmetic surgery niche?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO is a 6-12 month strategy in competitive markets like cosmetic surgery. However, you will see incremental improvements in rankings and traffic within 3-4 months. For immediate results, we recommend combining SEO with Google Ads."
            }
          },
          {
            "@type": "Question",
            "name": "Can you track ROI and revenue from each marketing channel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We implement advanced tracking to measure Patient Acquisition Cost (PAC), conversion rates, and revenue attribution for each channel (SEO, PPC, Social). You will have full visibility into what's working and what's not."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer website design for cosmetic surgery practices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in high-converting, AHPRA-compliant cosmetic surgery websites that are professionally designed, mobile-optimized, and built to convert visitors into consultations."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure patient privacy and confidentiality in your marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Patient privacy is paramount. We never use identifiable patient information without explicit written consent. All testimonials and case studies are anonymized or approved by the patient. We strictly comply with privacy laws and AHPRA regulations."
            }
          },
          {
            "@type": "Question",
            "name": "What makes your cosmetic surgery marketing different from other agencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are obsessed with compliance and results. Most agencies treat cosmetic surgery like any other industry. We understand the unique challenges (AHPRA compliance, high patient expectations, reputation risk) and build strategies that deliver high-quality patient inquiries while protecting your practice's reputation."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer performance guarantees or contracts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer the best guarantee in the industry: No Lock-In Contracts. If we are not delivering high-quality patient inquiries and a positive ROI, you are free to leave at any time. We put the risk on us, not you."
            }
          }
        ]
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Organization",
          "name": "Odin Digital - Cosmetic Surgery Digital Marketing Agency"
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
        <title>Cosmetic Surgery Digital Marketing Agency | AHPRA Compliant & High-ROI | Odin Digital</title>
        <meta name="description" content="The only marketing agency for cosmetic surgeons that guarantees AHPRA compliance while delivering a proven 540% ROI. Focus on high-quality patient acquisition. Get your free strategy session." />
        <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      </Helmet>

      <Header />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <Button
          onClick={openForm}
          variant="hero"
          className="shadow-glow w-full text-sm"
        >
          Get Your FREE Strategy Session
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
              Cosmetic Surgery Digital Marketing Agency
            </h1>
            
            <p className="text-lg sm:text-2xl md:text-3xl text-charcoal font-bold leading-tight mb-6 sm:mb-8 px-2">
              Stop Gambling with Compliance. We Deliver Ethical, High-ROI Digital Marketing for Cosmetic Surgeons with a Proven 540% Return.
            </p>

            <p className="text-base sm:text-xl md:text-2xl text-charcoal/70 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto font-light px-2">
              The only digital marketing agency for cosmetic surgeons in Australia that guarantees AHPRA compliance while attracting premium patients and maximizing ROI.
            </p>
            
            <div className="pt-2 px-4">
              <Button
                onClick={openForm}
                variant="hero"
                size="lg"
                className="shadow-glow w-full sm:w-auto text-sm sm:text-base"
              >
                Get Your FREE Strategy Session →
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-charcoal/10">
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-charcoal/70 px-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-primary">540%</div>
                  <div className="text-xs sm:text-sm">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-primary">100%</div>
                  <div className="text-xs sm:text-sm">AHPRA Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-primary">$574M+</div>
                  <div className="text-xs sm:text-sm">Client Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Social Proof Metrics Section */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              The Results Speak for Themselves
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="p-6 text-center border-charcoal/10 shadow-card">
              <div className="text-4xl sm:text-5xl font-black text-primary mb-2">540%</div>
              <p className="text-charcoal/70 font-medium">Average Client ROI</p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 shadow-card">
              <div className="text-4xl sm:text-5xl font-black text-primary mb-2">100%</div>
              <p className="text-charcoal/70 font-medium">AHPRA Compliance Rate</p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 shadow-card">
              <div className="text-4xl sm:text-5xl font-black text-primary mb-2">95%</div>
              <p className="text-charcoal/70 font-medium">Client Retention</p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 shadow-card">
              <div className="text-4xl sm:text-5xl font-black text-primary mb-2">$574M+</div>
              <p className="text-charcoal/70 font-medium">Revenue Generated</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Problem/Agitation Section */}
      <section className="py-12 sm:py-20 bg-white decorative-circles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              Why Most Cosmetic Surgery Marketing Fails
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              Australian cosmetic surgeons waste thousands every month on marketing that attracts low-quality leads, violates AHPRA guidelines, or delivers zero ROI. Here's why.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">The Compliance Nightmare</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Most agencies have zero understanding of AHPRA regulations, exposing your practice to fines, sanctions, and reputation damage from non-compliant advertising.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <TrendingDown className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">High-Cost, Low-Quality Leads</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Generic campaigns attract tire-kickers and price shoppers, wasting your team's time on consultations that never convert to surgery.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">No Trust-Building Strategy</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Cosmetic surgery requires trust. Agencies that focus on clicks instead of reputation fail to position you as the trusted authority patients seek.
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
              Stop Wasting Budget: Get a Compliant Strategy →
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section className="py-12 sm:py-20 bg-muted decorative-circles-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-charcoal/10 shadow-card flex flex-col h-full">
              <div className="flex items-center gap-1 mb-4">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
              <p className="text-charcoal/80 leading-relaxed mb-4 flex-grow">
                "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div>
                  <div className="font-bold text-charcoal">Liam C</div>
                  <div className="text-sm text-charcoal/70">Krush Organics</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-charcoal/10 shadow-card flex flex-col h-full">
              <div className="flex items-center gap-1 mb-4">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
              <p className="text-charcoal/80 leading-relaxed mb-4 flex-grow">
                "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with."
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div>
                  <div className="font-bold text-charcoal">Fabienne Costa</div>
                  <div className="text-sm text-charcoal/70">YCL Jewels</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-charcoal/10 shadow-card flex flex-col h-full">
              <div className="flex items-center gap-1 mb-4">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
              <p className="text-charcoal/80 leading-relaxed mb-4 flex-grow">
                "Odin Digital has been instrumental in scaling our practice with compliant, high-converting campaigns. Their understanding of AHPRA regulations gives us complete peace of mind."
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div>
                  <div className="font-bold text-charcoal">Dr. Sarah M</div>
                  <div className="text-sm text-charcoal/70">Cosmetic Surgery Practice</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <section className="py-12 sm:py-20 bg-white decorative-circles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              How We Attract Premium Patients for Cosmetic Surgeons
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              AHPRA-compliant marketing strategies designed to build trust, attract high-value patients, and maximize ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Search className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">AHPRA-Compliant SEO</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Dominate Google for high-intent cosmetic surgery searches while maintaining strict AHPRA compliance.
              </p>
              <Button 
                onClick={openForm}
                variant="outline" 
                size="sm"
                className="w-full"
              >
                Learn More
              </Button>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <MousePointerClick className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Ethical PPC for Surgical Leads</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Attract qualified patients immediately with Google Ads campaigns optimized for conversion and compliance.
              </p>
              <Button 
                onClick={openForm}
                variant="outline" 
                size="sm"
                className="w-full"
              >
                Learn More
              </Button>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Share2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Reputation-First Social Media</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Build trust and authority through educational content and ethical social media marketing.
              </p>
              <Button 
                onClick={openForm}
                variant="outline" 
                size="sm"
                className="w-full"
              >
                Learn More
              </Button>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Layout className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">High-Converting Website Design</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Premium, AHPRA-compliant websites built to convert visitors into consultations.
              </p>
              <Button 
                onClick={openForm}
                variant="outline" 
                size="sm"
                className="w-full"
              >
                Learn More
              </Button>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12 px-4">
            <Button
              onClick={openForm}
              variant="default"
              size="lg"
              className="shadow-primary w-full sm:w-auto text-sm sm:text-base"
            >
              See How We Can Help Your Practice →
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Differentiators Section */}
      <section className="py-12 sm:py-20 bg-muted decorative-circles-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              Why Cosmetic Surgeons Choose Odin Digital
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Guaranteed AHPRA Compliance</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Every campaign is reviewed against AHPRA advertising guidelines. Zero compliance risk, guaranteed.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <UserCheck className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Pre-Qualified Patient Leads</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We filter out tire-kickers, focusing only on patients who are genuinely interested and financially capable.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <BarChart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Full ROI Transparency</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Advanced tracking for Patient Acquisition Cost (PAC), conversion rates, and revenue attribution per channel.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">No Lock-In Contracts</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We earn your business every month. If we don't deliver results, you can leave anytime. Risk-free.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Process Section */}
      <section className="py-12 sm:py-20 bg-white decorative-circles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              Our 4-Step Process to Attract Premium Patients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 border-charcoal/10 shadow-card relative">
              <div className="absolute -top-4 left-6 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">1</div>
              <Target className="h-12 w-12 text-primary mb-4 mt-2" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Strategy Session</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We audit your current marketing, identify opportunities, and build a compliant growth strategy tailored to your practice.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 shadow-card relative">
              <div className="absolute -top-4 left-6 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">2</div>
              <Zap className="h-12 w-12 text-primary mb-4 mt-2" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Campaign Launch</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We build and launch AHPRA-compliant campaigns (SEO, PPC, Social) with advanced tracking and conversion optimization.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 shadow-card relative">
              <div className="absolute -top-4 left-6 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">3</div>
              <TrendingUp className="h-12 w-12 text-primary mb-4 mt-2" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Optimization & Scaling</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We continuously optimize for lower Patient Acquisition Cost (PAC) and scale what works to maximize ROI.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 shadow-card relative">
              <div className="absolute -top-4 left-6 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">4</div>
              <BarChart className="h-12 w-12 text-primary mb-4 mt-2" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Performance Reporting</h3>
              <p className="text-charcoal/70 leading-relaxed">
                You receive transparent monthly reports showing Patient Acquisition Cost, conversion rates, and revenue impact.
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
              Start Your Strategy Session →
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Why Choose Us Section */}
      <section className="py-12 sm:py-20 bg-muted decorative-circles-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              Why We're Different
            </h2>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">We Understand the High-Stakes Nature of Cosmetic Surgery Marketing</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  Unlike generic marketing agencies, we specialize in high-regulation industries. We know that one compliance mistake can damage your reputation. We treat your practice like it's our own.
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  Every ad, landing page, and campaign is built with AHPRA compliance as the foundation—not an afterthought.
                </p>
              </div>
              <Card className="p-6 border-charcoal/10 shadow-card">
                <CheckCircle className="h-16 w-16 text-primary mb-4" />
                <h4 className="text-xl font-bold text-charcoal mb-3">Compliance-First Approach</h4>
                <p className="text-charcoal/70 leading-relaxed">
                  Our mandatory compliance checklist ensures every campaign meets AHPRA and Medical Board guidelines.
                </p>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Card className="p-6 border-charcoal/10 shadow-card lg:order-1">
                <DollarSign className="h-16 w-16 text-primary mb-4" />
                <h4 className="text-xl font-bold text-charcoal mb-3">ROI-Obsessed Strategy</h4>
                <p className="text-charcoal/70 leading-relaxed">
                  We don't just drive traffic. We focus on Patient Acquisition Cost (PAC) and Lifetime Value (LTV) to ensure every dollar delivers measurable returns.
                </p>
              </Card>
              <div className="lg:order-2">
                <h3 className="text-2xl font-bold text-charcoal mb-4">We're Obsessed with ROI, Not Vanity Metrics</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  Most agencies brag about clicks and impressions. We care about one thing: how many high-quality patient consultations we generate for your practice.
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  Our clients achieve an average 540% ROI because we optimize for revenue, not traffic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6">
            Ready to Attract Premium Patients with AHPRA-Compliant Marketing?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Get your free strategy session and discover how we can help you dominate your local market while staying 100% compliant.
          </p>
          <Button
            onClick={openForm}
            variant="outline"
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-glow w-full sm:w-auto text-sm sm:text-base"
          >
            Get Your FREE Strategy Session Now →
          </Button>
          <p className="mt-6 text-sm opacity-80">
            No lock-in contracts. No compliance risk. Just results.
          </p>
        </div>
      </section>

      {/* 10. Related Industry & Service Links */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal mb-4">
              Explore Our Other Services & Industries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <h3 className="text-lg font-bold text-charcoal mb-3">Related Industries</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/industries/dentists" className="text-primary hover:underline">
                    Digital Marketing for Dentists
                  </a>
                </li>
                <li>
                  <a href="/industries/dermatologists" className="text-primary hover:underline">
                    Digital Marketing for Dermatologists
                  </a>
                </li>
                <li>
                  <a href="/industries/lawyers" className="text-primary hover:underline">
                    Digital Marketing for Lawyers
                  </a>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <h3 className="text-lg font-bold text-charcoal mb-3">Our Core Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/seo-agency" className="text-primary hover:underline">
                    SEO Agency
                  </a>
                </li>
                <li>
                  <a href="/services/google-ads" className="text-primary hover:underline">
                    Google Ads Management
                  </a>
                </li>
                <li>
                  <a href="/facebook-advertising" className="text-primary hover:underline">
                    Meta Ads (Facebook & Instagram)
                  </a>
                </li>
                <li>
                  <a href="/services/website-design" className="text-primary hover:underline">
                    Website Design & Development
                  </a>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <h3 className="text-lg font-bold text-charcoal mb-3">Cosmetic Surgery Specific</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-charcoal/50">Cosmetic Surgery SEO (Coming Soon)</span>
                </li>
                <li>
                  <span className="text-charcoal/50">Cosmetic Surgery PPC (Coming Soon)</span>
                </li>
                <li>
                  <span className="text-charcoal/50">Cosmetic Surgery Web Design (Coming Soon)</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section className="py-12 sm:py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70">
              Everything you need to know about cosmetic surgery digital marketing
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                How do you ensure our ads comply with AHPRA and Medical Board guidelines?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Compliance is our top priority. Our team is fully trained on the AHPRA advertising guidelines for cosmetic procedures. We have a mandatory compliance checklist integrated into every campaign launch, ensuring we avoid prohibited claims, incentives, and targeting of vulnerable groups. We treat compliance as a feature, not an afterthought.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                What is the most effective digital channel for acquiring high-value cosmetic surgery patients?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                The most effective strategy is an integrated one. Google Ads (PPC) captures high-intent patients searching for specific procedures, while SEO builds long-term authority and trust. We use Meta Ads primarily for ethical retargeting and building a community around your brand, ensuring a full-funnel approach.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                How do you handle the high cost of PPC for cosmetic procedures?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                We counter the high Cost Per Click (CPC) by focusing on Conversion Rate Optimization (CRO) and Patient Pre-Qualification. We ensure your ads and landing pages are so compelling and targeted that your conversion rate is significantly higher than the industry average, driving your overall Patient Acquisition Cost (PAC) down.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                Can you help us build trust and reputation online?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Absolutely. Reputation is everything in cosmetic surgery. We integrate reputation management into every campaign, focusing on ethical patient testimonials, educational content, and strategic PR to position your practice as a trusted authority.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                Do you have experience with all cosmetic procedures (surgical and non-surgical)?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Yes. We have extensive experience marketing both surgical procedures (breast augmentation, rhinoplasty, liposuction, facelifts) and non-surgical treatments (injectables, laser treatments, skin rejuvenation). We tailor campaigns to the specific procedure and patient demographics.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                How do you attract qualified patients vs. 'tire-kickers'?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                We use precise audience targeting (demographics, income brackets, search intent) and pre-qualification mechanisms (pricing transparency, procedure education, consultation forms) to ensure your leads are genuinely interested and financially capable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                What's your average Patient Acquisition Cost (PAC) for cosmetic procedures?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                PAC varies significantly depending on the procedure (breast augmentation vs. Botox), location, and competition. We focus on optimizing PAC relative to the Lifetime Value (LTV) of your patients, ensuring a strong ROI. During your free strategy session, we'll provide PAC benchmarks specific to your practice.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                Can you help us rank for competitive keywords like 'breast augmentation Sydney'?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Yes. Ranking for competitive cosmetic surgery keywords requires a strategic, long-term SEO approach. We use content marketing, technical SEO, local SEO, and compliant link-building to help you dominate your local market.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                How do you handle before-and-after photos in compliance with advertising rules?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                We strictly adhere to AHPRA guidelines, which prohibit the use of before-and-after images in advertising. Instead, we focus on educational content, patient testimonials (text-based), and trust signals to build credibility ethically.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                Do you work with both established practices and new surgeons?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Yes. We work with cosmetic surgeons at all stages—from solo practitioners launching their first practice to large multi-surgeon clinics with established patient bases. Our strategies are tailored to your specific growth stage and goals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                How long does it take to see results from SEO in the cosmetic surgery niche?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                SEO is a 6-12 month strategy in competitive markets like cosmetic surgery. However, you will see incremental improvements in rankings and traffic within 3-4 months. For immediate results, we recommend combining SEO with Google Ads.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                Can you track ROI and revenue from each marketing channel?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Absolutely. We implement advanced tracking to measure Patient Acquisition Cost (PAC), conversion rates, and revenue attribution for each channel (SEO, PPC, Social). You will have full visibility into what's working and what's not.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                Do you offer website design for cosmetic surgery practices?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Yes. We specialize in high-converting, AHPRA-compliant cosmetic surgery websites that are professionally designed, mobile-optimized, and built to convert visitors into consultations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                How do you ensure patient privacy and confidentiality in your marketing?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Patient privacy is paramount. We never use identifiable patient information without explicit written consent. All testimonials and case studies are anonymized or approved by the patient. We strictly comply with privacy laws and AHPRA regulations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                What makes your cosmetic surgery marketing different from other agencies?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                We are obsessed with compliance and results. Most agencies treat cosmetic surgery like any other industry. We understand the unique challenges (AHPRA compliance, high patient expectations, reputation risk) and build strategies that deliver high-quality patient inquiries while protecting your practice's reputation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-16" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                Do you offer performance guarantees or contracts?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                We offer the best guarantee in the industry: No Lock-In Contracts. If we are not delivering high-quality patient inquiries and a positive ROI, you are free to leave at any time. We put the risk on us, not you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-8 sm:mt-12">
            <Button
              onClick={openForm}
              variant="default"
              size="lg"
              className="shadow-primary w-full sm:w-auto text-sm sm:text-base"
            >
              Still Have Questions? Let's Talk →
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CosmeticSurgeons;
