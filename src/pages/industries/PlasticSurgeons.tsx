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
  Eye,
  Building2,
  Stethoscope,
  MapPin,
  XCircle,
  Phone
} from "lucide-react";

const PlasticSurgeons = () => {
  const { openForm } = useMarketingForm();

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://odindigital.com.au/#organization",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au",
        "logo": "https://odindigital.com.au/logo.png",
        "description": "Digital marketing agency specialising in cosmetic surgery practice marketing, SEO, Google Ads, Meta Ads, and web design.",
        "sameAs": [],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "areaServed": "AU",
          "availableLanguage": "English"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://odindigital.com.au/industries/plastic-surgeons#webpage",
        "url": "https://odindigital.com.au/industries/plastic-surgeons",
        "name": "Cosmetic Surgery Marketing Solutions | Odin Digital",
        "description": "Cosmetic surgery marketing agency for growing practices. SEO, Google Ads, Meta Ads, web design. 540% average ROI, 95% retention, $574M+ client revenue.",
        "inLanguage": "en-AU",
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01"
      },
      {
        "@type": "WebSite",
        "@id": "https://odindigital.com.au/#website",
        "url": "https://odindigital.com.au",
        "name": "Odin Digital",
        "description": "Digital marketing agency specialising in cosmetic surgery practice marketing",
        "publisher": {
          "@id": "https://odindigital.com.au/#organization"
        }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/plastic-surgeons#cosmetic-seo",
        "name": "Cosmetic Surgery SEO Services",
        "description": "Search engine optimisation for cosmetic surgery practices to increase organic visibility and patient acquisition.",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "areaServed": "AU",
        "serviceType": "Search Engine Optimisation"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/plastic-surgeons#google-ads",
        "name": "Cosmetic Surgery Google Ads Management",
        "description": "Google Ads management for cosmetic surgery practices to reach patients actively searching for cosmetic procedures.",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "areaServed": "AU",
        "serviceType": "Pay-Per-Click Advertising"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/plastic-surgeons#meta-ads",
        "name": "Cosmetic Surgery Meta Ads Management",
        "description": "Facebook and Instagram advertising for cosmetic surgery practices to build brand awareness and reach new patients.",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "areaServed": "AU",
        "serviceType": "Social Media Advertising"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/plastic-surgeons#web-design",
        "name": "Plastic Surgery Web Design",
        "description": "Custom web design for cosmetic surgery practices optimised for conversion and patient acquisition.",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "areaServed": "AU",
        "serviceType": "Web Design"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does it take to see results from cosmetic surgery SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO is a long-term strategy. Most practices see initial results within 3–6 months, with significant results by 6–12 months. Google Ads provides immediate results, so we often combine SEO with Google Ads for quick wins while building long-term organic traffic."
            }
          },
          {
            "@type": "Question",
            "name": "What's the typical cost of cosmetic surgery marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on your goals and location. A solo practitioner might spend $3,000–$7,000 per month, while a larger group might spend $15,000–$30,000 per month. We work with practices of all sizes and can tailor a strategy to your budget."
            }
          },
          {
            "@type": "Question",
            "name": "Can you guarantee results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We can't guarantee specific rankings or traffic numbers because Google's algorithm is constantly changing. However, we can guarantee that we'll use proven strategies, track results carefully, and continuously optimise for better performance. Our 540% average ROI speaks to the effectiveness of our approach."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with practices outside major cities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We work with practices in regional areas, rural areas, and major cities. In fact, regional practices often see better results because there's less competition. We have experience with the unique challenges of regional marketing."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle before-and-after photo compliance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Compliance is built into everything we do. We follow Privacy Act requirements for patient photos. We ensure you have written consent before using any patient photos in marketing. We help you manage your before-and-after gallery in a compliant way. Your compliance is our responsibility."
            }
          }
        ]
      },
      {
        "@type": "AggregateRating",
        "@id": "https://odindigital.com.au/industries/plastic-surgeons#rating",
        "ratingValue": "4.9",
        "ratingCount": "283",
        "bestRating": "5",
        "worstRating": "1"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Cosmetic Surgery Marketing Solutions | Odin Digital</title>
        <meta name="description" content="Cosmetic surgery marketing agency for growing practices. SEO, Google Ads, Meta Ads, web design. 540% average ROI, 95% retention, $574M+ client revenue." />
        <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      </Helmet>

      <Header />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border shadow-lg p-4">
        <Button
          onClick={openForm}
          className="w-full bg-gradient-primary text-white hover:opacity-90 text-base px-6 py-4 h-auto font-semibold shadow-glow flex items-center justify-center"
        >
          <Phone className="mr-2 h-5 w-5" />
          Schedule Free Consultation
        </Button>
      </div>

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
              Plastic Surgery Marketing Agency for Growing Practices
            </h1>
            
            <p className="text-lg sm:text-2xl md:text-3xl text-charcoal font-bold leading-tight mb-6 sm:mb-8 px-2">
              Your cosmetic surgery practice is built on delivering exceptional results. But results alone don't fill your schedule.
            </p>

            <p className="text-base sm:text-xl md:text-2xl text-charcoal/70 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto font-light px-2">
              You need a marketing partner who understands the unique challenges plastic surgeons face—patient acquisition costs that rival the cost of surgical equipment, the complexity of before-and-after photo compliance, and competition from corporate cosmetic chains that have ten times your marketing budget. At Odin Digital, we've helped over 283 cosmetic surgery practices across Australia attract high-quality patients, build their reputation, and grow revenue by an average of 540%.
            </p>
            
            <div className="pt-2 px-4 hidden md:block">
              <Button
                onClick={openForm}
                variant="hero"
                size="lg"
                className="shadow-glow w-full sm:w-auto text-sm sm:text-base"
              >
                Schedule Free Consultation →
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-charcoal/10">
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-charcoal/70 px-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-primary">283+</div>
                  <div className="text-xs sm:text-sm">Practices Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-primary">540%</div>
                  <div className="text-xs sm:text-sm">Average ROI</div>
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

      {/* 2. Social Proof Section */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              Trusted by 283+ Cosmetic Surgery Practices Across Australia
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              We've generated over $574 million in revenue for cosmetic surgery practices across Australia. Our clients see an average ROI of 540%, and 95% of them stay with us year after year because our strategies actually work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="p-6 text-center border-charcoal/10 shadow-card">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-3" />
              <div className="text-4xl sm:text-5xl font-black text-primary mb-2">$574M+</div>
              <p className="text-charcoal/70 font-medium">Client Revenue Generated</p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 shadow-card">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
              <div className="text-4xl sm:text-5xl font-black text-primary mb-2">540%</div>
              <p className="text-charcoal/70 font-medium">Average ROI</p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 shadow-card">
              <Award className="h-12 w-12 text-primary mx-auto mb-3" />
              <div className="text-4xl sm:text-5xl font-black text-primary mb-2">95%</div>
              <p className="text-charcoal/70 font-medium">Client Retention Rate</p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 shadow-card">
              <Users className="h-12 w-12 text-primary mx-auto mb-3" />
              <div className="text-4xl sm:text-5xl font-black text-primary mb-2">283+</div>
              <p className="text-charcoal/70 font-medium">Campaigns Managed</p>
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

      {/* 3. The Cosmetic Surgery Marketing Challenge */}
      <section className="py-12 sm:py-20 bg-white decorative-circles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-6 text-center px-2">
              The Cosmetic Surgery Marketing Challenge
            </h2>

            <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed space-y-6">
              <p>
                Cosmetic surgery is a results-driven business. Your patients expect exceptional outcomes, and you deliver them. But here's the brutal truth: delivering exceptional surgical results doesn't automatically fill your schedule with new patients.
              </p>

              <p>
                In fact, most cosmetic surgeons are facing three critical marketing challenges that are quietly draining their practice's growth potential:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card className="p-6 border-charcoal/10 shadow-card">
                  <DollarSign className="h-10 w-10 text-primary mb-3" />
                  <h3 className="text-xl font-bold text-charcoal mb-2">Patient Acquisition Costs Are Brutal</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    The average cosmetic surgeon is paying $3,000–$4,000 per new patient. That's not sustainable, especially when you're competing against corporate chains with million-dollar marketing budgets.
                  </p>
                </Card>

                <Card className="p-6 border-charcoal/10 shadow-card">
                  <Shield className="h-10 w-10 text-primary mb-3" />
                  <h3 className="text-xl font-bold text-charcoal mb-2">Compliance Is a Minefield</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    Before-and-after photos, patient testimonials, pricing transparency—every marketing decision carries compliance risk. One mistake could damage your reputation or trigger regulatory scrutiny.
                  </p>
                </Card>

                <Card className="p-6 border-charcoal/10 shadow-card">
                  <TrendingDown className="h-10 w-10 text-primary mb-3" />
                  <h3 className="text-xl font-bold text-charcoal mb-2">Competition Is Fierce</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    Corporate cosmetic chains are spending 10x your marketing budget. They're dominating Google, Facebook, and Instagram. How can a solo practitioner or small group compete?
                  </p>
                </Card>
              </div>

              <p>
                The reality is brutal: cosmetic surgeons are paying more for fewer patients. Patient acquisition costs are rising every year while conversion rates are dropping. And most marketing agencies? They treat cosmetic surgery like any other business—completely ignoring the unique challenges you face.
              </p>

              <p className="font-semibold text-charcoal">
                That's where Odin Digital is different. We've spent years perfecting cosmetic surgery marketing. We understand compliance. We know how to attract high-quality patients who are ready to book consultations. And we've proven we can do it at a patient acquisition cost that makes sense for your practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Cosmetic Surgery Practices Choose Odin Digital */}
      <section className="py-12 sm:py-20 bg-muted decorative-circles-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              Why Cosmetic Surgery Practices Choose Odin Digital
            </h2>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Proven Results You Can Trust</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We've worked with 283+ cosmetic surgery practices across Australia. We've generated over $574 million in revenue for our clients. Our average client sees a 540% ROI, and 95% of them stay with us year after year.
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  These aren't vanity metrics. These are real results from real practices—solo practitioners, small groups, and multi-location clinics. We've proven we can help practices like yours attract more patients, increase revenue, and grow sustainably.
                </p>
              </div>
              <Card className="p-6 border-charcoal/10 shadow-card">
                <BarChart className="h-16 w-16 text-primary mb-4" />
                <h4 className="text-xl font-bold text-charcoal mb-3">Data-Driven Strategy</h4>
                <p className="text-charcoal/70 leading-relaxed">
                  Every decision we make is backed by data. We track patient acquisition cost, conversion rates, and revenue attribution for every marketing channel. You'll always know exactly what's working and what's not.
                </p>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Card className="p-6 border-charcoal/10 shadow-card lg:order-1">
                <CheckCircle className="h-16 w-16 text-primary mb-4" />
                <h4 className="text-xl font-bold text-charcoal mb-3">Integrated Marketing That Works</h4>
                <p className="text-charcoal/70 leading-relaxed">
                  We don't just do SEO or just do Google Ads. We build integrated marketing strategies that combine SEO, Google Ads, Meta Ads, and web design to create a full-funnel patient acquisition system that works.
                </p>
              </Card>
              <div className="lg:order-2">
                <h3 className="text-2xl font-bold text-charcoal mb-4">Integrated Marketing That Actually Works</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  Most agencies sell you one service in isolation. You get SEO without paid ads. You get Google Ads without a conversion-optimised website. You get social media without a strategy to convert followers into patients.
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  We take a different approach. We build integrated marketing strategies that combine SEO, Google Ads, Meta Ads, and web design to create a full-funnel patient acquisition system. Every channel works together to attract, nurture, and convert patients.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Compliance Expertise You Can Rely On</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  Cosmetic surgery marketing is heavily regulated. Before-and-after photos, patient testimonials, pricing claims—every marketing decision carries compliance risk.
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  At Odin Digital, compliance is built into everything we do. We follow Privacy Act requirements. We ensure you have written consent for patient photos. We help you navigate AHPRA guidelines. Your compliance is our responsibility.
                </p>
              </div>
              <Card className="p-6 border-charcoal/10 shadow-card">
                <Shield className="h-16 w-16 text-primary mb-4" />
                <h4 className="text-xl font-bold text-charcoal mb-3">100% Compliant Marketing</h4>
                <p className="text-charcoal/70 leading-relaxed">
                  We follow Privacy Act requirements, AHPRA guidelines, and advertising standards. Every campaign is reviewed for compliance before launch. Zero compliance risk, guaranteed.
                </p>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Card className="p-6 border-charcoal/10 shadow-card lg:order-1">
                <Award className="h-16 w-16 text-primary mb-4" />
                <h4 className="text-xl font-bold text-charcoal mb-3">No Lock-In Contracts</h4>
                <p className="text-charcoal/70 leading-relaxed">
                  We earn your business every month. If we don't deliver results, you can leave anytime. No long-term contracts. No cancellation fees. Risk-free partnership.
                </p>
              </Card>
              <div className="lg:order-2">
                <h3 className="text-2xl font-bold text-charcoal mb-4">No Lock-In Contracts</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  Most agencies lock you into 12-month contracts. They know their results are mediocre, so they trap you with long-term commitments.
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  We don't do that. We offer month-to-month agreements. If we don't deliver the patient flow and ROI we promise, you can walk away anytime. No penalties. No hard feelings. We put the risk on us, not you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="py-12 sm:py-20 bg-white decorative-circles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              What Cosmetic Surgery Practices Say About Us
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
                "Odin Digital has transformed our patient acquisition. Our consultation bookings have increased by 180%, and our patient acquisition cost has dropped by 40%. The team's understanding of cosmetic surgery compliance gives us complete peace of mind."
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div>
                  <div className="font-bold text-charcoal">Dr. Michael T</div>
                  <div className="text-sm text-charcoal/70">Sydney Plastic Surgery Practice</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Our Integrated Services */}
      <section className="py-12 sm:py-20 bg-muted decorative-circles-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              Our Integrated Services
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              We offer four core services designed to work together to attract, nurture, and convert high-quality cosmetic surgery patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SEO Service */}
            <Card className="p-8 border-charcoal/10 shadow-card flex flex-col h-full">
              <Search className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-charcoal mb-4">Cosmetic Surgery SEO</h3>
              
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Your potential patients are searching for cosmetic procedures on Google right now. If your practice doesn't show up on the first page, you're losing patients to your competitors. Our cosmetic surgery SEO service helps you dominate Google for high-intent searches like "breast augmentation Sydney" or "rhinoplasty Melbourne."
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="font-bold text-charcoal">What We Do:</h4>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Comprehensive SEO audit and competitor analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Keyword research targeting high-intent cosmetic surgery searches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>On-page optimisation for procedure pages and location pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Content marketing to build authority and trust</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Link building from authoritative health and medical websites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Local SEO to dominate your geographic market</span>
                  </li>
                </ul>
              </div>

              <p className="text-charcoal/70 leading-relaxed mb-6 flex-grow">
                <strong>Why It Matters:</strong> SEO is a long-term strategy that builds sustainable patient flow. Once you rank on page one, you'll receive a steady stream of high-quality patients without paying for every click. Our clients see an average 180% increase in organic traffic within 12 months.
              </p>

              <Button 
                onClick={openForm}
                variant="outline" 
                size="sm"
                className="w-full mt-auto"
              >
                Learn More About SEO
              </Button>
            </Card>

            {/* Google Ads Service */}
            <Card className="p-8 border-charcoal/10 shadow-card flex flex-col h-full">
              <MousePointerClick className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-charcoal mb-4">Google Ads for Cosmetic Surgeons</h3>
              
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Google Ads is the fastest way to attract new patients. When someone searches for "breast augmentation near me" or "best plastic surgeon in Sydney," your practice can be at the top of the search results within 24 hours. Our Google Ads management service helps you reach patients who are actively searching for cosmetic procedures.
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="font-bold text-charcoal">What We Do:</h4>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Campaign strategy and structure tailored to cosmetic surgery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Keyword research targeting high-intent, high-value searches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ad copywriting that addresses patient concerns and builds trust</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Landing page optimisation for maximum conversion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Bid management to minimise patient acquisition cost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Continuous optimisation and A/B testing</span>
                  </li>
                </ul>
              </div>

              <p className="text-charcoal/70 leading-relaxed mb-6 flex-grow">
                <strong>Why It Matters:</strong> Google Ads provides immediate results. You can start attracting new patients within 24 hours. And because we optimise for conversion, you'll see a lower patient acquisition cost than your competitors. Our clients see an average 320% ROI on Google Ads.
              </p>

              <Button 
                onClick={openForm}
                variant="outline" 
                size="sm"
                className="w-full mt-auto"
              >
                Learn More About Google Ads
              </Button>
            </Card>

            {/* Meta Ads Service */}
            <Card className="p-8 border-charcoal/10 shadow-card flex flex-col h-full">
              <Share2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-charcoal mb-4">Meta Ads (Facebook & Instagram)</h3>
              
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Not every patient knows they want cosmetic surgery—yet. Meta Ads (Facebook and Instagram) help you reach potential patients before they're actively searching. You can build brand awareness, showcase your expertise, and nurture potential patients until they're ready to book a consultation.
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="font-bold text-charcoal">What We Do:</h4>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Audience research and targeting based on demographics and interests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Creative development (images, videos, carousel ads)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Retargeting campaigns to nurture website visitors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Lead generation campaigns to capture patient information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Compliance-focused ad creative and copy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Performance tracking and optimisation</span>
                  </li>
                </ul>
              </div>

              <p className="text-charcoal/70 leading-relaxed mb-6 flex-grow">
                <strong>Why It Matters:</strong> Meta Ads help you reach patients earlier in their decision-making journey. You can build brand awareness, showcase your expertise, and stay top-of-mind until they're ready to book. Our clients see an average 240% ROI on Meta Ads.
              </p>

              <Button 
                onClick={openForm}
                variant="outline" 
                size="sm"
                className="w-full mt-auto"
              >
                Learn More About Meta Ads
              </Button>
            </Card>

            {/* Web Design Service */}
            <Card className="p-8 border-charcoal/10 shadow-card flex flex-col h-full">
              <Layout className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-charcoal mb-4">Plastic Surgery Web Design</h3>
              
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Your website is the first impression most patients have of your practice. If it's outdated, slow, or confusing, you're losing patients to competitors with better websites. Our cosmetic surgery web design service creates professional, high-converting websites that turn visitors into consultation bookings.
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="font-bold text-charcoal">What We Do:</h4>
                <ul className="space-y-2 text-charcoal/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Custom website design tailored to cosmetic surgery practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Mobile-optimised, fast-loading, and secure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Conversion-focused design with clear calls-to-action</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Procedure pages optimised for SEO and conversion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Online booking system integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Compliant before-and-after gallery management</span>
                  </li>
                </ul>
              </div>

              <p className="text-charcoal/70 leading-relaxed mb-6 flex-grow">
                <strong>Why It Matters:</strong> Your website is your digital storefront. A professional, high-converting website builds trust, showcases your expertise, and converts visitors into patients. Our clients see an average 160% increase in consultation bookings after a website redesign.
              </p>

              <Button 
                onClick={openForm}
                variant="outline" 
                size="sm"
                className="w-full mt-auto"
              >
                Learn More About Web Design
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. How We Work: Our Proven Process */}
      <section className="py-12 sm:py-20 bg-white decorative-circles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              How We Work: Our Proven Process
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              We follow a proven 5-step process to attract high-quality patients and grow your cosmetic surgery practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="p-6 border-charcoal/10 shadow-card relative">
              <div className="absolute -top-4 left-6 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">1</div>
              <Target className="h-10 w-10 text-primary mb-3 mt-2" />
              <h3 className="text-lg font-bold text-charcoal mb-2">Discovery and Audit</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                We audit your current marketing, identify opportunities, and understand your practice goals, target patients, and competitive landscape.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 shadow-card relative">
              <div className="absolute -top-4 left-6 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">2</div>
              <FileText className="h-10 w-10 text-primary mb-3 mt-2" />
              <h3 className="text-lg font-bold text-charcoal mb-2">Strategy Development</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                We create a comprehensive marketing strategy that combines SEO, Google Ads, Meta Ads, and web design to achieve your patient acquisition goals.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 shadow-card relative">
              <div className="absolute -top-4 left-6 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">3</div>
              <Zap className="h-10 w-10 text-primary mb-3 mt-2" />
              <h3 className="text-lg font-bold text-charcoal mb-2">Implementation</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                We execute the strategy—launching campaigns, optimising your website, and implementing tracking to measure results from day one.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 shadow-card relative">
              <div className="absolute -top-4 left-6 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">4</div>
              <TrendingUp className="h-10 w-10 text-primary mb-3 mt-2" />
              <h3 className="text-lg font-bold text-charcoal mb-2">Monitoring and Optimisation</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                We continuously monitor performance, test new strategies, and optimise campaigns to lower patient acquisition cost and increase ROI.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 shadow-card relative">
              <div className="absolute -top-4 left-6 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">5</div>
              <BarChart className="h-10 w-10 text-primary mb-3 mt-2" />
              <h3 className="text-lg font-bold text-charcoal mb-2">Growth and Scaling</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                As results improve, we scale what's working—increasing budgets on high-performing channels and expanding to new patient acquisition opportunities.
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
              Get Started Today →
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Cosmetic Surgery Marketing Solutions for Every Practice Type */}
      <section className="py-12 sm:py-20 bg-muted decorative-circles-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              Cosmetic Surgery Marketing Solutions for Every Practice Type
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              Whether you're a solo practitioner or a multi-location group, we have tailored marketing strategies for your practice type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-charcoal/10 shadow-card">
              <Stethoscope className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Solo Practitioners</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                <strong>Challenge:</strong> You're competing against corporate chains with massive marketing budgets. You need cost-effective marketing that delivers high-quality patients without breaking the bank.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                <strong>Our Solution:</strong> We focus on local SEO and targeted Google Ads to help you dominate your geographic market. We build a strong online reputation through patient reviews and educational content. Our strategies are designed to deliver maximum ROI with limited budgets.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                <strong>Key Benefits:</strong> Lower patient acquisition cost, higher conversion rates, sustainable patient flow without massive ad spend.
              </p>
            </Card>

            <Card className="p-8 border-charcoal/10 shadow-card">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Small Group Practices</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                <strong>Challenge:</strong> You have 2-4 surgeons and need to keep all of them busy. You need a consistent flow of high-quality patients across multiple procedures and locations.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                <strong>Our Solution:</strong> We build integrated marketing strategies that combine SEO, Google Ads, and Meta Ads to create a full-funnel patient acquisition system. We create procedure-specific campaigns and location-specific pages to capture patients across all your services.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                <strong>Key Benefits:</strong> Consistent patient flow across all surgeons, optimised patient acquisition cost, scalable growth.
              </p>
            </Card>

            <Card className="p-8 border-charcoal/10 shadow-card">
              <Building2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Multi-Location Groups</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                <strong>Challenge:</strong> You have multiple locations across different cities or states. You need centralised marketing management with location-specific campaigns to fill schedules at all locations.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                <strong>Our Solution:</strong> We create a centralised marketing strategy with location-specific execution. We build location pages optimised for local SEO, run geo-targeted Google Ads campaigns, and create unified branding across all locations while maintaining local relevance.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                <strong>Key Benefits:</strong> Centralised reporting and optimisation, consistent branding, location-specific patient acquisition.
              </p>
            </Card>

            <Card className="p-8 border-charcoal/10 shadow-card">
              <Award className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">Specialised Practices</h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                <strong>Challenge:</strong> You specialise in specific procedures (e.g., breast augmentation, rhinoplasty, body contouring). You need to attract patients who are specifically interested in your specialty.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                <strong>Our Solution:</strong> We create procedure-specific marketing campaigns that target high-intent searches and demographics most likely to be interested in your specialty. We build authority through educational content and position you as the go-to expert.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                <strong>Key Benefits:</strong> Higher conversion rates, lower patient acquisition cost, stronger brand positioning as a specialist.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 9. Why Cosmetic Surgery Practices Fail at Marketing */}
      <section className="py-12 sm:py-20 bg-white decorative-circles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4 px-2">
              Why Cosmetic Surgery Practices Fail at Marketing
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70 max-w-3xl mx-auto px-4">
              Most cosmetic surgery practices make the same marketing mistakes. Here's what we see—and how we fix it.
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Card className="p-6 border-charcoal/10 shadow-card">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">Inconsistent Patient Flow</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  <strong>The Problem:</strong> Your schedule is feast or famine. Some months you're booked solid. Other months, crickets.
                </p>
                <p className="text-charcoal/70 leading-relaxed mt-3">
                  <strong>Why It Matters:</strong> Inconsistent patient flow makes it impossible to plan, hire staff, or invest in your practice with confidence.
                </p>
              </Card>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-3">Our Solution:</h4>
                <p className="text-charcoal/70 leading-relaxed">
                  We build integrated marketing systems that deliver consistent patient flow month after month. We combine long-term SEO with immediate Google Ads results, creating a sustainable pipeline of high-quality patients. No more feast or famine.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <h4 className="text-xl font-bold text-charcoal mb-3">Our Solution:</h4>
                <p className="text-charcoal/70 leading-relaxed">
                  We optimise every stage of the patient journey—from ad click to consultation booking. We use conversion-focused landing pages, compelling ad copy, and strategic retargeting to lower patient acquisition cost. Our clients see an average 40% reduction in patient acquisition cost within 6 months.
                </p>
              </div>
              <Card className="p-6 border-charcoal/10 shadow-card lg:order-1">
                <DollarSign className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">High Patient Acquisition Cost</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  <strong>The Problem:</strong> You're paying $3,000–$4,000 per new patient. That's unsustainable, especially when many consultations don't convert to surgery.
                </p>
                <p className="text-charcoal/70 leading-relaxed mt-3">
                  <strong>Why It Matters:</strong> High patient acquisition costs eat into your profit margins and limit your ability to grow.
                </p>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Card className="p-6 border-charcoal/10 shadow-card">
                <Layout className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">Poor Website Conversion</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  <strong>The Problem:</strong> Your website gets traffic, but visitors don't book consultations. Your conversion rate is below 2%.
                </p>
                <p className="text-charcoal/70 leading-relaxed mt-3">
                  <strong>Why It Matters:</strong> You're paying for traffic that isn't converting. Every visitor who leaves without booking is wasted marketing spend.
                </p>
              </Card>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-3">Our Solution:</h4>
                <p className="text-charcoal/70 leading-relaxed">
                  We redesign your website with conversion in mind. Clear calls-to-action, trust signals, streamlined booking forms, and mobile optimisation. Our clients see an average 160% increase in consultation bookings after a website redesign.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <h4 className="text-xl font-bold text-charcoal mb-3">Our Solution:</h4>
                <p className="text-charcoal/70 leading-relaxed">
                  We integrate reputation management into every campaign. We help you collect patient reviews, showcase testimonials (compliantly), and build trust through educational content. Your online reputation becomes a patient acquisition engine.
                </p>
              </div>
              <Card className="p-6 border-charcoal/10 shadow-card lg:order-1">
                <Star className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">Ignoring Online Reputation</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  <strong>The Problem:</strong> You have inconsistent reviews, no testimonials on your website, and no strategy to build trust online.
                </p>
                <p className="text-charcoal/70 leading-relaxed mt-3">
                  <strong>Why It Matters:</strong> Cosmetic surgery is a trust-driven decision. If patients don't trust you, they won't book—no matter how good your ads are.
                </p>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Card className="p-6 border-charcoal/10 shadow-card">
                <XCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">Fragmented Marketing</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  <strong>The Problem:</strong> You're using one agency for SEO, another for Google Ads, and managing social media in-house. Nothing is integrated. Nothing is optimised.
                </p>
                <p className="text-charcoal/70 leading-relaxed mt-3">
                  <strong>Why It Matters:</strong> Fragmented marketing wastes budget and creates confusion. You're not maximising ROI because your channels aren't working together.
                </p>
              </Card>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-3">Our Solution:</h4>
                <p className="text-charcoal/70 leading-relaxed">
                  We provide integrated marketing management. SEO, Google Ads, Meta Ads, and web design all work together under one strategy, managed by one team, with one goal: attract high-quality patients and maximise ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="py-12 sm:py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-xl text-charcoal/70">
              Everything you need to know about cosmetic surgery marketing
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                How long does it take to see results from cosmetic surgery SEO?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                SEO is a long-term strategy. Most practices see initial results within 3–6 months, with significant results by 6–12 months. Google Ads provides immediate results, so we often combine SEO with Google Ads for quick wins while building long-term organic traffic. Our integrated approach ensures you start seeing patient flow immediately while building sustainable long-term growth.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                What's the typical cost of cosmetic surgery marketing?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                It depends on your goals and location. A solo practitioner might spend $3,000–$7,000 per month, while a larger group might spend $15,000–$30,000 per month. We work with practices of all sizes and can tailor a strategy to your budget. During your free consultation, we'll provide a customised proposal based on your patient acquisition goals and competitive landscape.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                Can you guarantee results?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                We can't guarantee specific rankings or traffic numbers because Google's algorithm is constantly changing. However, we can guarantee that we'll use proven strategies, track results carefully, and continuously optimise for better performance. Our 540% average ROI speaks to the effectiveness of our approach. We also offer month-to-month agreements—if we don't deliver results, you can leave anytime.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                Do you work with practices outside major cities?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Absolutely. We work with practices in regional areas, rural areas, and major cities. In fact, regional practices often see better results because there's less competition. We have experience with the unique challenges of regional marketing—building authority in smaller markets, attracting patients from wider geographic areas, and competing with metropolitan practices. Location is not a barrier to success.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white border border-charcoal/10 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                How do you handle before-and-after photo compliance?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                Compliance is built into everything we do. We follow Privacy Act requirements for patient photos. We ensure you have written consent before using any patient photos in marketing. We help you manage your before-and-after gallery in a compliant way—properly anonymised, with appropriate disclaimers, and stored securely. Your compliance is our responsibility. We treat it as a non-negotiable feature of every campaign we manage.
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

      {/* 11. Final CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6">
            Ready to Grow Your Cosmetic Surgery Practice?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Schedule a free consultation to discover how we can help you attract high-quality patients, lower your patient acquisition cost, and grow your practice with integrated marketing that actually works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={openForm}
              variant="outline"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-glow w-full sm:w-auto text-sm sm:text-base"
            >
              Schedule Your Free Consultation →
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-80">
            No lock-in contracts. No compliance risk. Just results.
          </p>
        </div>
      </section>

      {/* Related Industry & Service Links */}
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
              <h3 className="text-lg font-bold text-charcoal mb-3">Plastic Surgery Specific</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-charcoal/50">Plastic Surgery SEO (Coming Soon)</span>
                </li>
                <li>
                  <span className="text-charcoal/50">Plastic Surgery PPC (Coming Soon)</span>
                </li>
                <li>
                  <span className="text-charcoal/50">Plastic Surgery Web Design (Coming Soon)</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PlasticSurgeons;