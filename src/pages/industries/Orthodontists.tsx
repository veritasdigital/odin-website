import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Search, MousePointerClick, TrendingUp, Users, DollarSign, Target, Shield, Award, CheckCircle, Sparkles, Crown, Smile, Star, AlertCircle, BarChart, Zap, Eye, MapPin, FileText, Image as ImageIcon, Share2, Layout, ChevronRight, ArrowRight } from "lucide-react";
const Orthodontists = () => {
  const {
    openForm
  } = useMarketingForm();
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://growth-conduit-central.lovable.app/",
    "logo": "https://growth-conduit-central.lovable.app/logo.png",
    "description": "Performance-focused digital marketing agency specializing in high-trust, high-ROI patient acquisition for Orthodontists and Orthodontic Practices in Australia.",
    "founder": {
      "@type": "Person",
      "name": "Lucas Durante"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://growth-conduit-central.lovable.app/contact"
    },
    "sameAs": ["https://www.linkedin.com/company/odin-digital", "https://www.facebook.com/odindigital", "https://twitter.com/odindigital"]
  };
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Orthodontists Marketing National Industry Hub",
    "url": "https://growth-conduit-central.lovable.app/industries/orthodontists",
    "inLanguage": "en-AU",
    "description": "Comprehensive digital marketing strategies for Orthodontists, focusing on increasing case acceptance, modernizing the patient experience, SEO, and PPC across Australia.",
    "about": {
      "@type": "Thing",
      "name": "Orthodontists Marketing"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://growth-conduit-central.lovable.app/"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Industries",
        "item": "https://growth-conduit-central.lovable.app/industries"
      }, {
        "@type": "ListItem",
        "position": 3,
        "name": "Orthodontists Marketing"
      }]
    }
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Marketing for Orthodontists",
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital"
    },
    "areaServed": "Australia",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Orthodontists Marketing Services",
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "High-Converting Web Design & Patient Education Hubs"
        }
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Authority-Building SEO & Content Marketing"
        }
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Multi-Platform PPC & Meta Ads"
        }
      }, {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automated Review Generation & Reputation Management"
        }
      }]
    }
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is the most effective way to get more orthodontic patients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A multi-channel approach is best. This includes local SEO to capture high-intent searches, PPC ads for immediate visibility, and social media marketing to build your brand and reach adult patients."
      }
    }, {
      "@type": "Question",
      "name": "How can I increase my case acceptance rate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By educating and nurturing potential patients before their first appointment. We use automated email sequences, video testimonials, and high-quality website content to build trust and answer their questions upfront."
      }
    }, {
      "@type": "Question",
      "name": "How much should an orthodontic practice spend on marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A common guideline is 7-10% of gross revenue. However, we focus on return on investment (ROI). We start with a budget that you're comfortable with and scale up as we prove the ROI."
      }
    }]
  };
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Service",
      "name": "Odin Digital - Digital Marketing for Orthodontists"
    },
    "author": {
      "@type": "Person",
      "name": "Evan Tsaboukos"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
    "publisher": {
      "@type": "Organization",
      "name": "Imperial Wealth"
    }
  };
  return <>
      <Helmet>
        <title>Orthodontists Marketing Agency | Patient Acquisition & SEO | Odin Digital</title>
        <meta name="description" content="The leading Orthodontists Marketing Agency in Australia. We build digital ecosystems to increase case acceptance and deliver a predictable stream of new patient starts. No lock-in contracts." />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      </Helmet>

      <Header />

      {/* Breadcrumb Navigation */}
      <div className="bg-muted/30 py-2 sm:py-3 md:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-charcoal/60">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            <Link to="/industries" className="hover:text-primary transition-colors">Industries</Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-charcoal truncate">Orthodontists Marketing</span>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border z-50 md:hidden">
        <Button onClick={openForm} size="lg" style={{
        backgroundColor: '#D91C5C'
      }} className="text-white shadow-glow w-full">
          Get FREE Marketing Audit →
        </Button>
      </div>

      {/* 1. Hero Section */}
      <section className="relative isolate overflow-hidden min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center bg-white">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
        </div>

        {/* Decorative floating circles */}
        <div className="absolute -top-6 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-secondary/20 rounded-lg animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/2 left-10 w-4 h-4 sm:w-6 sm:h-6 bg-accent/30 rounded-full animate-float" style={{
        animationDelay: '4s'
      }}></div>
        <div className="absolute top-1/4 right-1/3 w-6 h-6 sm:w-10 sm:h-10" style={{
        background: 'linear-gradient(135deg, rgba(217, 28, 92, 0.15), rgba(138, 0, 0, 0.15))',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite',
        animationDelay: '1s'
      }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full py-8 sm:py-12 md:py-16 lg:py-20 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
          <div className="max-w-4xl mx-auto animate-slide-up text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-charcoal leading-tight mb-3 sm:mb-4 md:mb-6">
              Orthodontists Marketing
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-charcoal font-bold leading-tight mb-3 sm:mb-4 md:mb-6">
              Stop Relying on Referrals and Start Attracting High-Value Patients Directly. We Build Digital Ecosystems That Increase Case Acceptance and Deliver a Predictable Stream of New Patient Starts.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal/80 leading-relaxed mb-2 sm:mb-3 md:mb-4 font-semibold">
              The Orthodontists Marketing Agency That Understands Your Practice, Your Patients, and Your Goals.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-charcoal/70 leading-relaxed mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto">
              Partner with Odin Digital and transform your orthodontic practice with data-driven marketing strategies that drive real patient growth.
            </p>
            
            <div className="pt-2">
              <Button onClick={openForm} size="lg" style={{
              backgroundColor: '#D91C5C'
            }} className="text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 h-auto shadow-glow hover:scale-105 transition-transform w-full sm:w-auto">
                Get Your FREE Orthodontist Marketing Audit →
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold" style={{
                color: '#D91C5C'
              }}>$574M+</div>
                <div className="text-xs sm:text-sm text-charcoal/70">Client Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold" style={{
                color: '#D91C5C'
              }}>540%</div>
                <div className="text-xs sm:text-sm text-charcoal/70">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold" style={{
                color: '#D91C5C'
              }}>95%</div>
                <div className="text-xs sm:text-sm text-charcoal/70">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold" style={{
                color: '#D91C5C'
              }}>200+</div>
                <div className="text-xs sm:text-sm text-charcoal/70">Businesses Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem-Agitation Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-muted decorative-circles-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-2 sm:mb-3 md:mb-4">
              Why Most Orthodontic Marketing Fails
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-charcoal/70 max-w-3xl mx-auto px-2">
              Most orthodontists struggle with low case acceptance rates and inconsistent patient flow. Here's why traditional marketing doesn't work anymore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <Card className="p-4 sm:p-5 md:p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <AlertCircle className="h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" style={{
              color: '#D91C5C'
            }} />
              <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-2 sm:mb-3">
                Low Case Acceptance Rates
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                Most practices struggle with converting consultations into treatment starts because they're not educating patients before they walk through the door.
              </p>
            </Card>

            <Card className="p-4 sm:p-5 md:p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Target className="h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" style={{
              color: '#D91C5C'
            }} />
              <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-2 sm:mb-3">
                Digital Sophistication Gap
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                Your competitors are using advanced digital marketing while you're still relying on outdated referral programs and traditional advertising.
              </p>
            </Card>

            <Card className="p-4 sm:p-5 md:p-6 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Star className="h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" style={{
              color: '#D91C5C'
            }} />
              <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-2 sm:mb-3">
                Online Reputation Battle
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                You're losing patients to practices with better online reviews and stronger digital presence, even if your clinical expertise is superior.
              </p>
            </Card>
          </div>

          <div className="text-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <Button onClick={openForm} size="lg" style={{
            backgroundColor: '#D91C5C'
          }} className="text-white shadow-glow text-sm sm:text-base px-4 sm:px-6 md:px-8 w-full sm:w-auto">
              Stop Losing Patients: Talk to an Expert →
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white decorative-circles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4">
              Real Results From Real Clients
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto">
              See how we've helped businesses transform their digital presence and drive measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="p-6 md:p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 fill-current" style={{
                color: '#D91C5C'
              }} />
                <Star className="w-5 h-5 fill-current" style={{
                color: '#D91C5C'
              }} />
                <Star className="w-5 h-5 fill-current" style={{
                color: '#D91C5C'
              }} />
                <Star className="w-5 h-5 fill-current" style={{
                color: '#D91C5C'
              }} />
                <Star className="w-5 h-5 fill-current" style={{
                color: '#D91C5C'
              }} />
              </div>
              <p className="text-charcoal/80 leading-relaxed mb-6 italic">
                "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month."
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-charcoal">Evan Tsaboukos</p>
                <p className="text-sm text-charcoal/60">Imperial Wealth</p>
              </div>
            </Card>

            <Card className="p-6 md:p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 fill-current" style={{
                color: '#D91C5C'
              }} />
                <Star className="w-5 h-5 fill-current" style={{
                color: '#D91C5C'
              }} />
                <Star className="w-5 h-5 fill-current" style={{
                color: '#D91C5C'
              }} />
                <Star className="w-5 h-5 fill-current" style={{
                color: '#D91C5C'
              }} />
                <Star className="w-5 h-5 fill-current" style={{
                color: '#D91C5C'
              }} />
              </div>
              <p className="text-charcoal/80 leading-relaxed mb-6 italic">
                "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with. Their strategic approach to digital marketing has transformed our business."
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-charcoal">Fabienne Costa</p>
                <p className="text-sm text-charcoal/60">YCL Jewels</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Services Section - 4 Pillars */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted decorative-circles-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4">
              The 4 Pillars of Orthodontist Marketing Success
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto">
              Our comprehensive approach focuses on increasing case acceptance and multi-demographic patient acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card flex flex-col">
              <Layout className="h-12 w-12 mx-auto mb-4" style={{
              color: '#D91C5C'
            }} />
              <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                High-Converting Web Design & Patient Education Hubs
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4 flex-1">
                We build modern, mobile-optimized websites that educate patients about orthodontic treatments and drive consultation bookings.
              </p>
              <Link to="/web-design-agency" className="text-primary hover:underline text-sm font-semibold mt-auto">
                Learn More <ArrowRight className="w-4 h-4 inline" />
              </Link>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card flex flex-col">
              <Search className="h-12 w-12 mx-auto mb-4" style={{
              color: '#D91C5C'
            }} />
              <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                Authority-Building SEO & Content Marketing
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4 flex-1">
                We position your practice as the local orthodontic authority through strategic <Link to="/seo-agency" className="text-primary hover:underline">SEO</Link> and educational content.
              </p>
              <Link to="/seo-agency" className="text-primary hover:underline text-sm font-semibold mt-auto">
                Learn More <ArrowRight className="w-4 h-4 inline" />
              </Link>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card flex flex-col">
              <Target className="h-12 w-12 mx-auto mb-4" style={{
              color: '#D91C5C'
            }} />
              <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                Multi-Platform PPC & Meta Ads
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4 flex-1">
                We run targeted <Link to="/ppc-agency" className="text-primary hover:underline">PPC</Link> and <Link to="/meta-ads-agency" className="text-primary hover:underline">Meta Ads</Link> campaigns to reach both parents and adult patients.
              </p>
              <Link to="/ppc-agency" className="text-primary hover:underline text-sm font-semibold mt-auto">
                Learn More <ArrowRight className="w-4 h-4 inline" />
              </Link>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card flex flex-col">
              <Star className="h-12 w-12 mx-auto mb-4" style={{
              color: '#D91C5C'
            }} />
              <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                Automated Review Generation & Reputation Management
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4 flex-1">
                We implement automated systems to generate 5-star reviews and protect your online reputation.
              </p>
              <Button onClick={openForm} variant="link" className="text-primary hover:underline text-sm font-semibold p-0 mt-auto">
                Learn More <ArrowRight className="w-4 h-4 inline" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Differentiators Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white decorative-circles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4">
              Why Orthodontists Choose Odin Digital
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto">
              We're not just another marketing agency. We're specialists in orthodontic patient acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <CheckCircle className="h-12 w-12 mx-auto mb-4" style={{
              color: '#D91C5C'
            }} />
              <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                We Focus on Case Acceptance, Not Just Leads
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                Our strategies are designed to educate and nurture patients before their consultation, dramatically increasing conversion rates.
              </p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Sparkles className="h-12 w-12 mx-auto mb-4" style={{
              color: '#D91C5C'
            }} />
              <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                We Modernize Your Patient Experience
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                From online booking to automated follow-ups, we bring your practice into the digital age and meet modern patient expectations.
              </p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Shield className="h-12 w-12 mx-auto mb-4" style={{
              color: '#D91C5C'
            }} />
              <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                No Lock-In Contracts
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                Month-to-month agreements mean we have to earn your business every single month with proven results.
              </p>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <BarChart className="h-12 w-12 mx-auto mb-4" style={{
              color: '#D91C5C'
            }} />
              <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                Full Transparency & Real-Time Reporting
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                Access real-time dashboards showing exactly where your marketing dollars go and the ROI they generate.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted decorative-circles-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4">
              Our Proven 4-Step Process
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto">
              From audit to optimization, we handle everything so you can focus on patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="relative h-full">
              <div className="bg-white p-6 rounded-lg shadow-card border border-charcoal/10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{
                backgroundColor: '#D91C5C'
              }}>
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                  Digital Presence & Competitor Audit
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed flex-1">
                  We analyze your current digital footprint, identify opportunities, and benchmark against local competitors.
                </p>
              </div>
            </div>

            <div className="relative h-full">
              <div className="bg-white p-6 rounded-lg shadow-card border border-charcoal/10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{
                backgroundColor: '#D91C5C'
              }}>
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                  Strategy Development & Implementation
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed flex-1">
                  We create a custom marketing plan tailored to your practice goals and begin implementation immediately.
                </p>
              </div>
            </div>

            <div className="relative h-full">
              <div className="bg-white p-6 rounded-lg shadow-card border border-charcoal/10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{
                backgroundColor: '#D91C5C'
              }}>
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                  Launch & Patient Acquisition
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed flex-1">
                  We launch campaigns across all channels and start driving qualified patient inquiries to your practice.
                </p>
              </div>
            </div>

            <div className="relative h-full">
              <div className="bg-white p-6 rounded-lg shadow-card border border-charcoal/10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{
                backgroundColor: '#D91C5C'
              }}>
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                  Continuous Performance & Case Acceptance Optimization
                </h3>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed flex-1">
                  We continuously refine strategies based on data to maximize ROI and case acceptance rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us - Extended Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white decorative-circles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4">
              Why Odin Digital Is Different
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto">
              We understand the unique challenges of orthodontic marketing and have the proven track record to deliver results.
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                  <Crown className="w-6 h-6 inline mr-2" style={{
                  color: '#D91C5C'
                }} />
                  Industry-Specific Expertise
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We specialize in healthcare marketing with a deep understanding of orthodontic patient psychology, treatment cycles, and practice economics. We know what drives case acceptance and how to position your practice for premium pricing.
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  Our team has generated over $574M in client revenue across healthcare practices, with a proven track record of increasing case acceptance rates and patient lifetime value.
                </p>
              </div>
              <Card className="p-6 md:p-8 border-charcoal/10 shadow-card">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-10 h-10 mr-3" style={{
                  color: '#D91C5C'
                }} />
                  <div>
                    <div className="text-3xl font-bold text-charcoal">$574M+</div>
                    <div className="text-sm text-charcoal/60">Total Client Revenue Generated</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <Card className="p-6 md:p-8 border-charcoal/10 shadow-card order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-10 h-10 mr-3" style={{
                  color: '#D91C5C'
                }} />
                  <div>
                    <div className="text-3xl font-bold text-charcoal">540%</div>
                    <div className="text-sm text-charcoal/60">Average ROI for Clients</div>
                  </div>
                </div>
              </Card>
              <div className="order-1 md:order-2">
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                  <Target className="w-6 h-6 inline mr-2" style={{
                  color: '#D91C5C'
                }} />
                  Data-Driven Performance Marketing
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We don't do vanity metrics. Every campaign is built around measurable KPIs: cost per consultation, case acceptance rate, patient lifetime value, and return on ad spend. You'll know exactly what you're getting for your investment.
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  Our clients see an average ROI of 540%, with many achieving even higher returns as we optimize campaigns over time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                  <Shield className="w-6 h-6 inline mr-2" style={{
                  color: '#D91C5C'
                }} />
                  No Lock-In Contracts, Just Results
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  We earn your business every month with proven results. Our month-to-month agreements mean you're free to leave if we don't deliver. This keeps us accountable and ensures we're always working in your best interest.
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  With a 95% client retention rate, our results speak for themselves. Our clients stay because we deliver consistent, measurable growth.
                </p>
              </div>
              <Card className="p-6 md:p-8 border-charcoal/10 shadow-card">
                <div className="flex items-center mb-4">
                  <Award className="w-10 h-10 mr-3" style={{
                  color: '#D91C5C'
                }} />
                  <div>
                    <div className="text-3xl font-bold text-charcoal">95%</div>
                    <div className="text-sm text-charcoal/60">Client Retention Rate</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <Card className="p-6 md:p-8 border-charcoal/10 shadow-card order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <Users className="w-10 h-10 mr-3" style={{
                  color: '#D91C5C'
                }} />
                  <div>
                    <div className="text-3xl font-bold text-charcoal">200+</div>
                    <div className="text-sm text-charcoal/60">Businesses Transformed</div>
                  </div>
                </div>
              </Card>
              <div className="order-1 md:order-2">
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                  <Sparkles className="w-6 h-6 inline mr-2" style={{
                  color: '#D91C5C'
                }} />
                  Personalized Service & Strategic Partnership
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  You're not just a number to us. We work with a select group of orthodontic practices to ensure we can deliver white-glove service and strategic guidance. You'll have direct access to our senior strategists, not junior account managers.
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  We become an extension of your team, providing ongoing marketing consultation and business growth advice beyond just campaign management.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Button onClick={openForm} size="lg" style={{
            backgroundColor: '#D91C5C'
          }} className="text-white shadow-glow text-sm sm:text-base px-4 sm:px-6 md:px-8 w-full sm:w-auto">
              Partner With Us Today →
            </Button>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted decorative-circles-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70">
              Your questions about orthodontist marketing answered.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-white shadow-card">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                What is the most effective way to get more orthodontic patients?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                A multi-channel approach is best. This includes local SEO to capture high-intent searches, PPC ads for immediate visibility, and social media marketing to build your brand and reach adult patients.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-white shadow-card">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                How can I increase my case acceptance rate?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                By educating and nurturing potential patients before their first appointment. We use automated email sequences, video testimonials, and high-quality website content to build trust and answer their questions upfront.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-white shadow-card">
              <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                How much should an orthodontic practice spend on marketing?
              </AccordionTrigger>
              <AccordionContent className="text-charcoal/70 leading-relaxed">
                A common guideline is 7-10% of gross revenue. However, we focus on return on investment (ROI). We start with a budget that you're comfortable with and scale up as we prove the ROI.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 9. Final CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-charcoal to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pb-12 sm:pb-16 md:pb-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 md:mb-6 leading-tight">
            Ready to Transform Your Orthodontic Practice?
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-relaxed opacity-90 px-2">
            Stop relying on referrals and start building a predictable patient acquisition system. Partner with the orthodontist marketing agency that delivers real results.
          </p>
          
          <Button onClick={openForm} size="xl" style={{
          backgroundColor: '#D91C5C'
        }} className="text-white text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-5 md:py-6 lg:py-8 h-auto shadow-glow hover:scale-105 transition-transform w-full sm:w-auto">
            Get Your FREE Practice Growth Audit →
          </Button>
        </div>
      </section>

      {/* 10. Related Service & Location Links */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
        </div>
      </section>

      <Footer />
    </>;
};
export default Orthodontists;