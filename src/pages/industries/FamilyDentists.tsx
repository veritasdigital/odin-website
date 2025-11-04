import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import {
  CheckCircle,
  Target,
  TrendingUp,
  Users,
  Award,
  BarChart3,
  Search,
  MousePointer,
  Megaphone,
  Globe,
  Clock,
  Shield,
  Zap,
  Phone,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FamilyDentists = () => {
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
        "description": "Digital marketing agency specialising in family dental practices.",
        "sameAs": [
          "https://www.facebook.com/odindigital",
          "https://www.linkedin.com/company/odin-digital",
          "https://www.instagram.com/odindigital"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "telephone": "+61-2-XXXX-XXXX",
          "email": "hello@odindigital.com.au"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://odindigital.com.au/#localbusiness",
        "name": "Odin Digital - Family Dentist Marketing",
        "image": "https://odindigital.com.au/logo.png",
        "url": "https://odindigital.com.au/industries/family-dentists",
        "telephone": "+61-2-XXXX-XXXX",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AU"
        }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/family-dentists#service",
        "name": "Digital Marketing Services for Family Dentists",
        "description": "Integrated digital marketing strategy for family dental practices including Local SEO, PPC, Meta Ads, and patient recall automation.",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "serviceType": "Digital Marketing"
      },
      {
        "@type": "WebPage",
        "@id": "https://odindigital.com.au/industries/family-dentists#webpage",
        "url": "https://odindigital.com.au/industries/family-dentists",
        "name": "Digital Marketing for Family Dentists | Attract New Patients & Maximize Recall - Odin Digital",
        "description": "Stop losing patients to the clinic down the street. Our integrated strategy delivers high-value patient bookings, improves recall rates, and builds trust for your dental practice.",
        "isPartOf": {
          "@id": "https://odindigital.com.au/#website"
        },
        "inLanguage": "en-AU",
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01"
      },
      {
        "@type": "WebSite",
        "@id": "https://odindigital.com.au/#website",
        "url": "https://odindigital.com.au",
        "name": "Odin Digital",
        "description": "Digital marketing agency for family dental practices",
        "publisher": {
          "@id": "https://odindigital.com.au/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can I start seeing new patient bookings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With targeted PPC and Meta Ads, we can typically start generating new patient calls and form submissions within 48-72 hours of campaign launch. SEO is a longer-term strategy, with significant results usually appearing within 6-12 months."
            }
          },
          {
            "@type": "Question",
            "name": "Is SEO or PPC better for a dental practice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Both are essential. PPC is critical for immediate new patient acquisition and promoting high-value services (e.g., implants). Local SEO is vital for long-term foundational growth, building trust, and dominating Google Maps for 'dentist near me' searches. We recommend an integrated strategy using both."
            }
          },
          {
            "@type": "Question",
            "name": "How do you help with patient retention and recall?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We implement automated email and SMS marketing sequences that are triggered based on a patient's last visit. This system ensures patients are reminded for their 6-month check-ups, significantly improving recall rates and patient lifetime value."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure I attract high-value patients (e.g., cosmetic, implants)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We deploy highly specific PPC campaigns that target keywords related to high-value services (e.g., 'dental implants cost,' 'cosmetic dentist consultation'). The website copy and design are also optimized to educate and convert these high-intent visitors."
            }
          },
          {
            "@type": "Question",
            "name": "Why is my Google Business Profile (GBP) so important?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your GBP is the single most important asset for local service businesses. It controls your presence on Google Maps and Local Services Ads. We optimize it for maximum visibility and focus on generating and showcasing 5-star reviews to build immediate trust and overcome patient anxiety."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help me manage negative online reviews?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We implement automated review generation systems that encourage happy patients to leave positive reviews. For negative reviews, we provide a structured, ethical response strategy that minimizes damage and shows potential patients that you care."
            }
          },
          {
            "@type": "Question",
            "name": "How do you compete with large, corporate dental chains?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use hyper-local SEO and geo-fencing in PPC to focus your efforts exactly on your local service area. We help you highlight your unique family-focused care, ensuring you dominate your specific suburb and stand out from generic corporate chains."
            }
          },
          {
            "@type": "Question",
            "name": "What is the biggest mistake dental practices make in marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Relying solely on word-of-mouth or generic, untargeted advertising. This leads to unpredictable growth and a high cost of patient acquisition. We focus on building your own predictable, measurable patient acquisition system."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a new website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If your current website is slow, not mobile-friendly, or doesn't clearly convey trust and professionalism, then yes. We build conversion-focused websites designed to ease patient anxiety and guide them immediately to the 'Book Now' button."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure my marketing complies with AHPRA guidelines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We adhere strictly to AHPRA's guidelines for health practitioners. Our copy and ad creatives are always professional, evidence-based, and focused on the patient experience, ensuring ethical and compliant marketing."
            }
          },
          {
            "@type": "Question",
            "name": "How much does your service cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our pricing is customized based on your practice size, competition, and growth goals. We view our service as an investment, not an expense, and our goal is to deliver a positive ROI that far exceeds our fee by maximizing patient lifetime value."
            }
          },
          {
            "@type": "Question",
            "name": "Do you require a long-term contract?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. We operate on a month-to-month basis with no lock-in contracts. Our performance should be the only reason you stay with us."
            }
          },
          {
            "@type": "Question",
            "name": "How do you track the quality of patient leads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We implement advanced call tracking and form tracking. We don't just report on leads; we report on qualified patient leads that meet your criteria, ensuring you know exactly where your profitable bookings are coming from."
            }
          },
          {
            "@type": "Question",
            "name": "Will you help me promote specific services like Invisalign or whitening?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can segment your marketing efforts to target patients interested in specific high-value services using dedicated landing pages, ad copy, and social media campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "How do we get started with Odin Digital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The first step is a free, no-obligation Patient Acquisition Analysis. We'll audit your current patient flow and provide a clear roadmap for dominating your local market and maximizing patient retention."
            }
          }
        ]
      },
      {
        "@type": "AggregateRating",
        "@id": "https://odindigital.com.au/industries/family-dentists#rating",
        "ratingValue": "4.9",
        "ratingCount": "283",
        "bestRating": "5",
        "worstRating": "1"
      }
    ]
  };

  return (
    <>
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t shadow-lg p-4">
        <Button size="lg" className="w-full bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 text-sm sm:text-base whitespace-normal h-auto py-3" asChild>
          <Link to="/contact">Schedule FREE Analysis →</Link>
        </Button>
      </div>

      <Helmet>
        <title>Digital Marketing for Family Dentists | Attract New Patients & Maximize Recall - Odin Digital</title>
        <meta
          name="description"
          content="Stop losing patients to the clinic down the street. Our integrated strategy delivers high-value patient bookings, improves recall rates, and builds trust for your dental practice."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      </Helmet>

      <div className="min-h-screen pb-20 md:pb-0">
        <Header />

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-charcoal/10 p-4 shadow-lg">
          <Button
            onClick={openForm}
            variant="cta"
            size="lg"
            className="w-full text-xs sm:text-sm whitespace-normal h-auto py-3"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
            <span>SCHEDULE FREE ANALYSIS</span>
          </Button>
        </div>

        {/* Hero Section */}
        <section data-nav-contrast="dark" className="gradient-hero relative overflow-hidden py-20 sm:py-32">
          {/* Floating Circles */}
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-lg animate-float" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                Digital Marketing for Family Dentists
              </h1>
              
              <p className="hero-sub-headline text-2xl sm:text-3xl md:text-4xl text-white/95 font-bold mb-8 leading-tight max-w-5xl mx-auto">
                Stop Losing Patients to the Clinic Down the Street. Attract High-Value, Long-Term Patients with a Predictable Digital Strategy.
              </p>

              <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed">
                You're focused on creating healthy smiles. We're focused on creating a healthy patient schedule. We build digital systems that deliver a steady flow of new patient bookings and ensure high recall rates.
              </p>

              <p className="text-base sm:text-lg text-white/85 mb-10 max-w-4xl mx-auto leading-relaxed">
                At Odin Digital, we understand the unique challenges of running a family dental practice—from high local competition to the critical need for patient trust and retention. Generic marketing plans fail because they don't account for patient anxiety, the importance of HICAPS, or the high cost of acquiring a new patient. We craft integrated digital ecosystems—combining Local SEO, Targeted PPC, Patient-Centric Web Design, and Recall Automation—to ensure your chairs are always full.
              </p>

              <Button
                onClick={openForm}
                variant="cta"
                size="xl"
                className="text-sm sm:text-base md:text-lg shadow-glow whitespace-normal h-auto py-3 sm:py-4"
              >
                Schedule Your FREE Patient Acquisition Analysis →
              </Button>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-4">
                The Proof Is in the Performance
              </h2>
              <p className="text-lg sm:text-xl text-charcoal/70 max-w-3xl mx-auto">
                We're not just making promises; we're delivering verified results for professional service firms and medical practices across Australia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <Card className="p-6 sm:p-8 text-center border-charcoal/10 shadow-card">
                <div className="text-4xl sm:text-5xl font-black text-primary mb-2">$574M+</div>
                <div className="text-sm sm:text-base text-charcoal/70 font-medium">Verified Client Revenue</div>
              </Card>

              <Card className="p-6 sm:p-8 text-center border-charcoal/10 shadow-card">
                <div className="text-4xl sm:text-5xl font-black text-primary mb-2">540%</div>
                <div className="text-sm sm:text-base text-charcoal/70 font-medium">Average ROI on Ad Spend</div>
              </Card>

              <Card className="p-6 sm:p-8 text-center border-charcoal/10 shadow-card">
                <div className="text-4xl sm:text-5xl font-black text-primary mb-2">95%</div>
                <div className="text-sm sm:text-base text-charcoal/70 font-medium">Client Retention Rate<br />(No Lock-In Contracts)</div>
              </Card>

              <Card className="p-6 sm:p-8 text-center border-charcoal/10 shadow-card">
                <div className="text-4xl sm:text-5xl font-black text-primary mb-2">283+</div>
                <div className="text-sm sm:text-base text-charcoal/70 font-medium">Successful Campaigns Delivered</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-4">
                The Dental Marketing Pain Points We Solve
              </h2>
              <p className="text-lg sm:text-xl text-charcoal/70 max-w-3xl mx-auto">
                Running a dental practice is demanding. Why add the stress of ineffective marketing? We solve the core problems holding back your practice's growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                  High Patient Acquisition Cost
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                  You know the cost of acquiring a new patient is high, but you're still spending too much on generic advertising that brings in low-value, one-off patients. You need a system that attracts high-value, long-term family patients.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                  The Recall & Retention Nightmare
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                  You're constantly chasing patients for their 6-month check-ups. Your manual recall system is inefficient, and you're losing valuable revenue and patient relationships due to forgotten appointments.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                  Standing Out in a Saturated Market
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                  Every suburb has a dentist. It's hard to differentiate your practice beyond price. You need a digital presence that immediately establishes trust, highlights your unique care philosophy, and overcomes patient anxiety.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-4">
                What Our Professional Clients Say
              </h2>
              <p className="text-lg sm:text-xl text-charcoal/70 max-w-3xl mx-auto">
                We partner with high-calibre professional firms to deliver measurable growth. Here's what they're saying.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card flex flex-col">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-charcoal/80 italic mb-4 leading-relaxed flex-grow">
                  "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with."
                </p>
                <p className="text-sm font-bold text-charcoal mt-auto">
                  Fabienne Costa, Founder, YCL Jewels (Gold Coast)
                </p>
              </Card>

              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card flex flex-col">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-charcoal/80 italic mb-4 leading-relaxed flex-grow">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since."
                </p>
                <p className="text-sm font-bold text-charcoal mt-auto">
                  Liam C, Founder, Krush Organics (Sydney)
                </p>
              </Card>

              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card flex flex-col">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-charcoal/80 italic mb-4 leading-relaxed flex-grow">
                  "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month."
                </p>
                <p className="text-sm font-bold text-charcoal mt-auto">
                  Evan Tsaboukos, Founder, Imperial Wealth (Melbourne)
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Strategy Section */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-4">
                The Integrated Digital Strategy for Family Dentists
              </h2>
              <p className="text-lg sm:text-xl text-charcoal/70 max-w-3xl mx-auto">
                We provide a single, cohesive strategy where every channel works to attract new patients and ensure high patient recall rates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <Search className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                  1. Local SEO for New Patient Attraction
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                  New patients are searching for a "family dentist near me." Our SEO strategy is hyper-focused on Local SEO—dominating Google Maps, Local Services Ads (LSAs), and "near me" searches. We ensure your Google Business Profile (GBP) is optimized to rank #1 when a family needs a new clinic.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <MousePointer className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                  2. High-Value PPC & Targeted Google Ads
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                  We deploy targeted PPC campaigns that focus on high-value services like dental implants, cosmetic dentistry, and clear aligners. Instead of wasting budget on low-value clicks, we focus on keywords that signal high-intent and high-value procedures, ensuring a stronger ROI.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <Megaphone className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                  3. Patient Recall & Trust Building with Meta Ads
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                  Our Meta Ads strategy focuses on two key areas: building trust by showcasing patient testimonials and practice culture, and patient recall by using retargeting campaigns to gently remind existing patients about their 6-month check-ups and special offers.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                  4. Anxiety-Reducing, Conversion-Focused Web Design
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                  A dental website must be professional, easy to navigate, and reduce patient anxiety. We build websites that are lightning-fast, mobile-responsive, and feature clear information on services, HICAPS, and a prominent "Book Now" button. The design focuses on conveying a sense of calm and expertise.
                </p>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                onClick={openForm}
                variant="cta"
                size="lg"
                className="text-sm sm:text-base whitespace-normal h-auto py-3"
              >
                Schedule Your FREE Patient Acquisition Analysis →
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-4">
                Why Odin Digital is the Strategic Partner for Your Dental Practice
              </h2>
              <p className="text-lg sm:text-xl text-charcoal/70 max-w-3xl mx-auto">
                We understand the unique challenges of the medical and professional services industry—we are built for high-trust, high-retention businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                  Patient Recall Automation
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                  We implement advanced email and SMS automation systems to ensure your patient recall rates are maximised, turning one-off visits into long-term family patients.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                  High-Value Case Focus
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                  We specialise in attracting patients interested in high-value procedures (implants, cosmetic) through targeted advertising and website optimisation.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                  Anxiety-Reducing Design
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                  Our web design and content strategy is crafted to overcome dental anxiety, building trust and professionalism from the first click.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                  No Lock-In Contracts
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                  We believe our results should keep you with us, not a binding contract. Our 95% client retention rate proves our commitment to long-term, high-value partnerships.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-4">
                Our 4-Step Predictable Patient Acquisition Process
              </h2>
              <p className="text-lg sm:text-xl text-charcoal/70 max-w-3xl mx-auto">
                We follow a strategic process designed to deliver high-quality, long-term patients on demand.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                      Practice Audit & Patient Blueprint
                    </h3>
                    <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                      We conduct a comprehensive audit of your current digital presence, local competitors, and target patient demographics. We then create a detailed digital marketing blueprint tailored to your specific practice and local market.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                      Foundation & Execution
                    </h3>
                    <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                      We optimise your website for mobile speed and local SEO. We then launch targeted campaigns across Google Maps, PPC, and Meta Ads, focusing on immediate new patient bookings.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                      Refinement & Reporting
                    </h3>
                    <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                      We continuously monitor, test, and refine all campaigns, focusing on the metrics that matter most to your practice: Cost Per Qualified Patient (CPQP) and Patient Lifetime Value (PLV). We provide transparent, jargon-free reports.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                      Scaling & Retention
                    </h3>
                    <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                      Once we establish a profitable and predictable system for new patient acquisition, we implement advanced automation to maximise patient recall and retention, ensuring your practice scales sustainably.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-4">
                Why Choose Odin Digital as Your Dental Marketing Partner?
              </h2>
              <p className="text-lg sm:text-xl text-charcoal/70 max-w-3xl mx-auto">
                We are obsessed with your practice's growth. Our focus is on turning your digital presence into a predictable source of high-quality patient bookings.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                  Medical & Professional Expertise
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                  We don't just do generic marketing; we understand the medical industry's unique challenges, from patient anxiety to ethical advertising guidelines and the critical need for trust.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                  Cutting-Edge Technology
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                  We leverage the latest in marketing technology and AI-powered optimisation to ensure your campaigns are efficient, targeted, and ahead of the curve. This includes using AI tools for ad bidding, lead qualification, and predictive analytics to anticipate demand spikes.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                  Direct Response Copywriting
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                  Our team writes copy that compels immediate action, using a problem-agitation-solution framework that speaks directly to the patient's need for a trusted, professional dental experience.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
                <BarChart3 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                  Proven Track Record
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                  With over $574M+ in verified client revenue and a 95% retention rate, we have the experience and results to back up our claims.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-4">
                Frequently Asked Questions About Marketing for Family Dentists
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white border border-charcoal/10 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                  How quickly can I start seeing new patient bookings?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  With targeted PPC and Meta Ads, we can typically start generating new patient calls and form submissions within 48-72 hours of campaign launch. SEO is a longer-term strategy, with significant results usually appearing within 6-12 months.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white border border-charcoal/10 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                  Is SEO or PPC better for a dental practice?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Both are essential. PPC is critical for immediate new patient acquisition and promoting high-value services (e.g., implants). Local SEO is vital for long-term foundational growth, building trust, and dominating Google Maps for "dentist near me" searches. We recommend an integrated strategy using both.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white border border-charcoal/10 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                  How do you help with patient retention and recall?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  We implement automated email and SMS marketing sequences that are triggered based on a patient's last visit. This system ensures patients are reminded for their 6-month check-ups, significantly improving recall rates and patient lifetime value.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white border border-charcoal/10 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                  How do you ensure I attract high-value patients (e.g., cosmetic, implants)?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  We deploy highly specific PPC campaigns that target keywords related to high-value services (e.g., "dental implants cost," "cosmetic dentist consultation"). The website copy and design are also optimized to educate and convert these high-intent visitors.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white border border-charcoal/10 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                  Why is my Google Business Profile (GBP) so important?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Your GBP is the single most important asset for local service businesses. It controls your presence on Google Maps and Local Services Ads. We optimize it for maximum visibility and focus on generating and showcasing 5-star reviews to build immediate trust and overcome patient anxiety.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white border border-charcoal/10 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                  Can you help me manage negative online reviews?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Yes. We implement automated review generation systems that encourage happy patients to leave positive reviews. For negative reviews, we provide a structured, ethical response strategy that minimizes damage and shows potential patients that you care.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white border border-charcoal/10 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                  How do you compete with large, corporate dental chains?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  We use hyper-local SEO and geo-fencing in PPC to focus your efforts exactly on your local service area. We help you highlight your unique family-focused care, ensuring you dominate your specific suburb and stand out from generic corporate chains.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white border border-charcoal/10 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                  What is the biggest mistake dental practices make in marketing?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Relying solely on word-of-mouth or generic, untargeted advertising. This leads to unpredictable growth and a high cost of patient acquisition. We focus on building your own predictable, measurable patient acquisition system.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-white border border-charcoal/10 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                  Do I need a new website?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  If your current website is slow, not mobile-friendly, or doesn't clearly convey trust and professionalism, then yes. We build conversion-focused websites designed to ease patient anxiety and guide them immediately to the "Book Now" button.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-white border border-charcoal/10 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                  How do you ensure my marketing complies with AHPRA guidelines?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  We adhere strictly to AHPRA's guidelines for health practitioners. Our copy and ad creatives are always professional, evidence-based, and focused on the patient experience, ensuring ethical and compliant marketing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="bg-white border border-charcoal/10 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                  How much does your service cost?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Our pricing is customized based on your practice size, competition, and growth goals. We view our service as an investment, not an expense, and our goal is to deliver a positive ROI that far exceeds our fee by maximizing patient lifetime value.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="bg-white border border-charcoal/10 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                  Do you require a long-term contract?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  No. We operate on a month-to-month basis with no lock-in contracts. Our performance should be the only reason you stay with us.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13" className="bg-white border border-charcoal/10 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                  How do you track the quality of patient leads?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  We implement advanced call tracking and form tracking. We don't just report on leads; we report on qualified patient leads that meet your criteria, ensuring you know exactly where your profitable bookings are coming from.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14" className="bg-white border border-charcoal/10 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                  Will you help me promote specific services like Invisalign or whitening?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  Yes. We can segment your marketing efforts to target patients interested in specific high-value services using dedicated landing pages, ad copy, and social media campaigns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15" className="bg-white border border-charcoal/10 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                  How do we get started with Odin Digital?
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 leading-relaxed">
                  The first step is a free, no-obligation Patient Acquisition Analysis. We'll audit your current patient flow and provide a clear roadmap for dominating your local market and maximizing patient retention.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section data-nav-contrast="dark" className="py-20 sm:py-32 gradient-hero relative overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{ animationDelay: '3s' }} />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Build a Predictable Patient Acquisition System?
            </h2>
            
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop relying on word-of-mouth and start attracting high-value, long-term patients with a strategic digital blueprint.
            </p>

            <p className="text-base sm:text-lg text-white/85 mb-10 max-w-3xl mx-auto leading-relaxed">
              Schedule your free, no-obligation patient acquisition analysis today. We'll show you the exact roadmap to dominate your local market and maximizing patient retention.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={openForm}
                variant="cta"
                size="xl"
                className="text-sm sm:text-base md:text-lg shadow-glow whitespace-normal h-auto py-3 sm:py-4"
              >
                Schedule Your FREE Patient Acquisition Analysis →
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FamilyDentists;
