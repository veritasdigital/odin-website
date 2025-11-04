import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Eye, Target, DollarSign, BarChart, Award, CheckCircle, TrendingUp, Zap, Search, Megaphone, Globe, Users, Monitor, Star } from "lucide-react";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Ophthalmologists = () => {
  const { openForm } = useMarketingForm();

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au",
        "logo": "https://odindigital.com.au/logo.png",
        "description": "Performance-focused digital marketing agency specializing in ophthalmologist SEO, Google Ads, Meta Ads, and web design. $574M+ in client revenue. No lock-in contracts.",
        "founder": {
          "@type": "Person",
          "name": "Lucas Durante"
        },
        "slogan": "No Lock-In Contracts. Just Results.",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "areaServed": "AU",
          "availableLanguage": "English",
          "url": "https://odindigital.com.au/contact"
        },
        "sameAs": []
      },
      {
        "@type": "Service",
        "serviceType": "Digital Marketing for Ophthalmologists",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "description": "Comprehensive digital marketing services for ophthalmology practices, including ophthalmologist SEO, Google Ads, Meta Ads, and web design, focused on high-value surgical cases."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does digital marketing cost for ophthalmologists?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Digital marketing for ophthalmologists costs vary depending on your location, competition, and goals. Most ophthalmology practices invest $3,000 - $12,000 per month for comprehensive marketing (SEO, Google Ads, Meta Ads, website). Our team will provide a detailed quote during your free audit."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google Ads delivers immediate results (surgical consultations within days). SEO typically takes 3-6 months for significant results. Meta Ads typically show results within 2-4 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with small ophthalmology practices or only large practices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work with ophthalmology practices of all sizes, from solo practitioners to multi-location practices, offering flexible pricing and strategies designed to maximize ROI."
            }
          },
          {
            "@type": "Question",
            "name": "How do you measure ROI for ophthalmologists?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We implement advanced conversion tracking to measure cost per surgical consultation, cost per surgical case, and return on ad spend. You will know exactly how much revenue your marketing is generating."
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
            "name": "Can you help with patient testimonial and outcome optimization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We optimize your patient testimonials and surgical outcomes for SEO, mobile, and conversion to maximize their impact on consultation booking rates."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with general optometrists or only ophthalmologists?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work with both, but our ophthalmology marketing strategies are specifically designed for practices that focus on high-value surgical procedures (LASIK, cataract surgery, retinal procedures)."
            }
          },
          {
            "@type": "Question",
            "name": "How do you target high-value surgical patients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use surgical-specific keyword targeting, demographic targeting (age, income, location), and interest targeting (health, wellness, vision care) to ensure your ads and SEO efforts reach patients most likely to invest in surgical eye care."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with financing and payment plan marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We prominently display financing options in all ad copy, landing pages, and website content, as financing is critical for converting high-value surgical cases."
            }
          },
          {
            "@type": "Question",
            "name": "Do you understand ophthalmology procedures?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We understand the difference between LASIK, PRK, cataract surgery, retinal procedures, glaucoma surgery, and other ophthalmology procedures, and we build campaigns tailored to each procedure's unique patient intent and value."
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

  const painPoints = [
    {
      icon: Users,
      title: "Low-Value Patient Flood",
      description: "Your marketing attracts dozens of routine eye exam patients, but you're not seeing the high-value LASIK, cataract surgery, or retinal procedure cases that actually drive revenue."
    },
    {
      icon: Target,
      title: "Generic Medical Strategy",
      description: "Your agency treats you like any other medical practice, with no understanding of surgical ophthalmology, premium lens options, or the specific patient journey for vision correction procedures."
    },
    {
      icon: Eye,
      title: "No Surgical Focus",
      description: "Your marketing attracts general inquiries, not patients actively researching LASIK surgery, premium cataract lenses, or advanced retinal treatments that generate real profit."
    },
    {
      icon: BarChart,
      title: "Vanity Metrics",
      description: "They show you website traffic and social media likes, but can't tell you how many high-value surgical consultations your marketing actually generated or what your cost per surgical case is."
    },
    {
      icon: Zap,
      title: "Slow Results, No Accountability",
      description: "You're locked into long contracts with promises of 'future results' while your competitors dominate the local market for LASIK surgeon searches and premium cataract surgery."
    },
    {
      icon: Award,
      title: "No Ophthalmology Expertise",
      description: "They don't understand the difference between LASIK, PRK, cataract surgery with premium lenses, or retinal procedures—so they can't build campaigns that resonate with patients ready to invest in surgical eye care."
    }
  ];

  const whyChoosePoints = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "$574M+ in client revenue across medical and surgical practices. We know what works because we've proven it repeatedly."
    },
    {
      icon: CheckCircle,
      title: "No Lock-In Contracts",
      description: "We earn your business every month. If we're not delivering a positive ROI, you're free to leave. We put the risk on us, not you."
    },
    {
      icon: BarChart,
      title: "Full Transparency",
      description: "You will know exactly how many surgical consultations your marketing generated, what they cost, and what your return on investment is."
    },
    {
      icon: Eye,
      title: "Ophthalmology-Focused Expertise",
      description: "We understand LASIK, cataract surgery, retinal procedures, and premium lens options. We build campaigns tailored to surgical ophthalmology."
    },
    {
      icon: TrendingUp,
      title: "Local Market Domination",
      description: "We don't just get you on Page 1. We dominate the Google Local 3-Pack and high-value surgical searches in your market."
    }
  ];

  const faqs = [
    {
      question: "How much does digital marketing cost for ophthalmologists?",
      answer: "Digital marketing for ophthalmologists costs vary depending on your location, competition, and goals. Most ophthalmology practices invest $3,000 - $12,000 per month for comprehensive marketing (SEO, Google Ads, Meta Ads, website). Our team will provide a detailed quote during your free audit."
    },
    {
      question: "How long does it take to see results?",
      answer: "Google Ads delivers immediate results (surgical consultations within days). SEO typically takes 3-6 months for significant results. Meta Ads typically show results within 2-4 weeks."
    },
    {
      question: "Do you work with small ophthalmology practices or only large practices?",
      answer: "We work with ophthalmology practices of all sizes, from solo practitioners to multi-location practices, offering flexible pricing and strategies designed to maximize ROI."
    },
    {
      question: "How do you measure ROI for ophthalmologists?",
      answer: "We implement advanced conversion tracking to measure cost per surgical consultation, cost per surgical case, and return on ad spend. You will know exactly how much revenue your marketing is generating."
    },
    {
      question: "Do you offer a performance guarantee?",
      answer: "We offer the best guarantee in the industry: No Lock-In Contracts. If we are not delivering a positive ROI, you are free to leave at any time. We put the risk on us, not you."
    },
    {
      question: "Can you help with patient testimonial and outcome optimization?",
      answer: "Absolutely. We optimize your patient testimonials and surgical outcomes for SEO, mobile, and conversion to maximize their impact on consultation booking rates."
    },
    {
      question: "Do you work with general optometrists or only ophthalmologists?",
      answer: "We work with both, but our ophthalmology marketing strategies are specifically designed for practices that focus on high-value surgical procedures (LASIK, cataract surgery, retinal procedures)."
    },
    {
      question: "How do you target high-value surgical patients?",
      answer: "We use surgical-specific keyword targeting, demographic targeting (age, income, location), and interest targeting (health, wellness, vision care) to ensure your ads and SEO efforts reach patients most likely to invest in surgical eye care."
    },
    {
      question: "Can you help with financing and payment plan marketing?",
      answer: "Yes. We prominently display financing options in all ad copy, landing pages, and website content, as financing is critical for converting high-value surgical cases."
    },
    {
      question: "Do you understand ophthalmology procedures?",
      answer: "Yes. We understand the difference between LASIK, PRK, cataract surgery, retinal procedures, glaucoma surgery, and other ophthalmology procedures, and we build campaigns tailored to each procedure's unique patient intent and value."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Marketing for Ophthalmologists | Ophthalmologist SEO & Google Ads | Odin Digital</title>
        <meta name="description" content="Stop attracting low-value patients. Odin Digital provides ophthalmologist SEO, Google Ads, and web design focused on filling your calendar with high-value LASIK, cataract surgery, and retinal procedure cases." />
        <link rel="canonical" href="https://odindigital.com.au/industries/ophthalmologists" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Header />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border shadow-lg">
        <Button 
          variant="cta" 
          size="lg" 
          className="w-full rounded-none h-auto py-3 text-xs sm:text-sm whitespace-normal"
          onClick={openForm}
        >
          Get Your FREE Ophthalmology Marketing Audit
        </Button>
      </div>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section data-nav-contrast="dark" className="gradient-hero relative overflow-hidden min-h-[90vh] flex items-center">
          {/* Floating Background Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/3 left-1/2 w-12 h-12 bg-white/5 rounded-full animate-float" style={{ animationDelay: '4s' }} />

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight mt-24 sm:mt-32">
                Digital Marketing for Ophthalmologists
              </h1>
              
              <p className="hero-sub-headline text-xl sm:text-2xl md:text-3xl text-white/95 mb-8 max-w-5xl mx-auto leading-relaxed font-semibold px-4">
                Stop Paying for Marketing That Doesn't Deliver High-Value Surgical Cases. Start Dominating Your Local Market with Proven Strategies That Fill Your Calendar with LASIK, Cataract Surgery, and Premium Lens Patients.
              </p>

              <p className="text-lg sm:text-xl text-white/90 mb-4 max-w-4xl mx-auto px-4">
                The Digital Marketing Agency Ophthalmologists Trust for More High-Value Surgical Cases and Premium Patient Acquisition.
              </p>

              <p className="text-base sm:text-lg text-white/80 mb-8 max-w-4xl mx-auto px-4">
                Partner with Odin Digital and Watch Your Ophthalmology Practice Scale with Marketing That Actually Drives Revenue, Not Just Website Visits.
              </p>

              <Button 
                variant="cta" 
                size="xl" 
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 h-auto py-3 sm:py-4 whitespace-normal mb-8"
                onClick={openForm}
              >
                Get Your FREE Ophthalmology Marketing Audit <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Problem/Agitation Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">Why Most Medical Marketing Agencies Fail Ophthalmologists</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Ophthalmologists waste millions every year on ophthalmologist marketing that looks impressive on paper but delivers nothing to the bottom line. Here's why most agencies fail.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
              {painPoints.map((point, index) => (
                <Card key={index} className="p-6 sm:p-8 hover-scale">
                  <point.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-4">{point.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 px-4">
              <Button 
                variant="cta" 
                size="xl" 
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 h-auto py-3 sm:py-4 whitespace-normal"
                onClick={openForm}
              >
                Stop the Marketing Bleed: Talk to an Ophthalmology Marketing Expert <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* SEO for Ophthalmologists */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">SEO for Ophthalmologists: Dominating "LASIK Surgeon [City]" and High-Value Surgical Searches</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                We build ophthalmologist SEO strategies that get your ophthalmology practice to Page 1 for the exact searches your ideal surgical patients are using when they're ready to invest in vision correction or cataract surgery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 px-4">
              <Card className="p-6 sm:p-8 hover-scale">
                <Search className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Surgical Keyword Targeting: Capturing High-Value Cases</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We target surgical keywords like "LASIK surgeon [city]", "cataract surgery [city]", "premium lens implants", and "retinal specialist near me"—the exact searches high-value surgical patients use when they're ready to book a consultation.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 hover-scale">
                <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Local SEO: Owning the Google Local 3-Pack for Surgical Searches</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We dominate the Google Local 3-Pack for surgical ophthalmology searches in your market, ensuring your practice appears first when local patients search for LASIK, cataract surgery, or retinal procedures.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 hover-scale">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Procedure-Specific SEO: Ranking for Your Most Profitable Services</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We build dedicated landing pages optimized for each high-value procedure you offer—LASIK, PRK, cataract surgery, premium lens implants, retinal procedures—and rank them on Page 1.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 hover-scale">
                <Star className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Patient Testimonial & Outcome Optimization: Building Trust and Social Proof</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We optimize your patient testimonials and surgical outcomes for SEO and conversion, building overwhelming social proof that drives surgical consultation bookings.
                </p>
              </Card>
            </div>

            <div className="text-center mt-12 px-4">
              <Button 
                variant="cta" 
                size="xl" 
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 h-auto py-3 sm:py-4 whitespace-normal"
                onClick={openForm}
              >
                See Our SEO Packages for Ophthalmologists <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Google Ads for Ophthalmologists */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">Google Ads for Ophthalmologists: Immediate High-Value Surgical Consultations</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                We build Google Ads for ophthalmologists campaigns that deliver immediate, high-value surgical consultations while your SEO builds momentum—even in competitive markets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 px-4">
              <Card className="p-6 sm:p-8 hover-scale">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Surgical Keyword Targeting: Capturing High-Intent Patients</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We bid on high-intent surgical keywords like "LASIK surgery cost", "best cataract surgeon near me", and "premium lens implants"—the exact searches patients use when they're ready to book a consultation.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 hover-scale">
                <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Geographic Precision: Targeting Your Ideal Patient Demographics</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We target specific ZIP codes, suburbs, and demographics most likely to invest in surgical eye care, ensuring every dollar you spend reaches high-value surgical patients.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 hover-scale">
                <Megaphone className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Ad Copy That Converts: Technology, Outcomes, Financing</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We craft ad copy that highlights your advanced technology, exceptional outcomes, and flexible financing options—the key drivers of surgical consultation bookings.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 hover-scale">
                <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Landing Page Optimization: Turning Clicks into Surgical Consultations</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We build conversion-optimized landing pages that turn ad clicks into booked surgical consultations, with patient testimonials, technology showcases, and clear CTAs.
                </p>
              </Card>
            </div>

            <div className="text-center mt-12 px-4">
              <Button 
                variant="cta" 
                size="xl" 
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 h-auto py-3 sm:py-4 whitespace-normal"
                onClick={openForm}
              >
                See Our Google Ads Packages for Ophthalmologists <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Meta Ads for Ophthalmologists */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">Meta Ads (Facebook & Instagram) for Ophthalmologists: Building Awareness and Trust</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                We build Facebook Ads for ophthalmologists campaigns that build awareness, establish trust, and position you as the go-to ophthalmologist before someone needs surgical eye care.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 px-4">
              <Card className="p-6 sm:p-8 hover-scale">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Audience Targeting: Reaching High-Value Surgical Patients</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We target demographics most likely to invest in surgical eye care—age 40+, higher income brackets, health-conscious audiences—ensuring your ads reach the right people.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 hover-scale">
                <Eye className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Creative That Converts: Patient Outcomes, Technology, Social Proof</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We create compelling video ads showcasing patient success stories, your advanced technology, and your expertise—building trust and positioning you as the surgical authority.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 hover-scale">
                <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Full-Funnel Strategy: Building Trust Before the Consultation</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We run full-funnel Meta campaigns that build awareness, nurture interest, and drive consultation bookings—ensuring patients know who you are before they need surgical eye care.
                </p>
              </Card>
            </div>

            <div className="text-center mt-12 px-4">
              <Button 
                variant="cta" 
                size="xl" 
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 h-auto py-3 sm:py-4 whitespace-normal"
                onClick={openForm}
              >
                See Our Meta Ads Packages for Ophthalmologists <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Web Design for Ophthalmologists */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">Web Design for Ophthalmologists: High-Converting Websites That Drive Surgical Consultations</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                We build ophthalmologist website design that positions your ophthalmology practice as the trusted local expert and converts visitors into high-value surgical consultations at the highest possible rate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 px-4">
              <Card className="p-6 sm:p-8 hover-scale">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Premium Design: Positioning You as the Surgical Authority</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We design premium websites that position your practice as the local surgical authority, building trust and credibility before the first consultation.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 hover-scale">
                <Star className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Patient Testimonial & Outcome Showcase</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  We prominently showcase patient testimonials, surgical outcomes, and before/after results to build social proof and drive consultation bookings.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 hover-scale">
                <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Mobile-First, Conversion-Optimized</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  70%+ of patients search on mobile. We build mobile-first websites optimized for consultation bookings, with prominent CTAs and one-click calling.
                </p>
              </Card>

              <Card className="p-6 sm:p-8 hover-scale">
                <Search className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-4">SEO-Optimized from Day One</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Every website we build is SEO-optimized from launch, with surgical keyword targeting, procedure-specific pages, and technical SEO best practices.
                </p>
              </Card>
            </div>

            <div className="text-center mt-12 px-4">
              <Button 
                variant="cta" 
                size="xl" 
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 h-auto py-3 sm:py-4 whitespace-normal"
                onClick={openForm}
              >
                See Our Web Design Packages for Ophthalmologists <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">Why Ophthalmologists Choose Odin Digital</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                We are not a generalist agency that dabbles in medical marketing. We are specialists who understand how to dominate local markets for ophthalmology practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
              {whyChoosePoints.map((point, index) => (
                <Card key={index} className="p-6 sm:p-8 hover-scale flex flex-col">
                  <point.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-4">{point.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow">
                    {point.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 px-4">
              <Button 
                variant="cta" 
                size="xl" 
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 h-auto py-3 sm:py-4 whitespace-normal"
                onClick={openForm}
              >
                Talk to an Ophthalmology Marketing Specialist <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">FAQs: Your Questions About Ophthalmology Marketing Answered</h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 sm:px-6">
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section data-nav-contrast="dark" className="py-24 gradient-hero relative overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{ animationDelay: '3s' }} />
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 sm:mb-8 px-4">
              Ready to Stop Attracting Low-Value Patients and Start Filling Your Calendar with High-Value Surgical Cases?
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Stop settling for marketing that fills your calendar with routine exams. Start working with the digital marketing agency for ophthalmologists that drives high-value surgical consultations, LASIK cases, premium cataract surgery, and retinal procedure inquiries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button 
                variant="cta" 
                size="xl" 
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 h-auto py-3 sm:py-4 whitespace-normal w-full sm:w-auto"
                onClick={openForm}
              >
                Claim Your FREE Ophthalmology Marketing Audit <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Ophthalmologists;
