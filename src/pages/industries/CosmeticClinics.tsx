import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { CheckCircle2, Shield, TrendingUp, Users, Award, Target, Zap, Clock, BarChart3, FileCheck, Search, MousePointerClick, Share2, Palette } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const CosmeticClinics = () => {
  const { openForm } = useMarketingForm();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "How do you ensure our marketing remains compliant with TGA advertising guidelines?",
      answer: "Compliance is our highest priority. Our team is trained on the Therapeutic Goods Administration (TGA) guidelines, ensuring we avoid prohibited claims, incentives, and \"before/after\" photos for certain procedures. We implement a mandatory compliance checklist into every campaign launch to protect your clinic's reputation and licence."
    },
    {
      question: "We get a lot of leads, but they are all price-shoppers. How do you fix the low-quality lead problem?",
      answer: "We fix the low-quality lead problem through Lead Pre-Qualification and Messaging Alignment. Our campaigns target patients who are searching for solutions, not just prices. We use detailed pre-qualification forms and landing page copy that justifies your premium pricing and filters out \"tire-kickers\" before they ever reach your front desk."
    },
    {
      question: "How does SEO help a cosmetic clinic compete in a saturated local market?",
      answer: "Local SEO builds the authority and trust needed to compete. We focus on dominating local search results for high-value treatments (e.g., \"best laser resurfacing near me\"). This positions your clinic as the local expert, ensuring that when a patient is ready to book, they choose your premium service over a discounted competitor."
    },
    {
      question: "What makes your PPC campaigns different from other agencies managing cosmetic clinic Google Ads?",
      answer: "We build Treatment-Specific Landing Pages and use High-Intent Keyword Targeting. Instead of sending all clicks to your homepage, we create dedicated landing pages for each high-value treatment, optimizing for conversion. We also exclude price-focused keywords and instead focus on solution-based searches like \"best botox clinic for natural results.\""
    },
    {
      question: "How long does it take to see results from SEO for a cosmetic clinic?",
      answer: "SEO is a medium-term investment. You can expect to see measurable improvements in organic traffic and keyword rankings within 3-6 months. However, once established, SEO delivers compounding returns, driving qualified leads month after month without the ongoing ad spend required by PPC."
    },
    {
      question: "Can you help us with social media advertising on Instagram and Facebook for our medispa?",
      answer: "Absolutely. Meta Ads (Facebook and Instagram) are powerful channels for cosmetic clinics, especially for awareness-stage campaigns. We create TGA-compliant ad creatives and targeting strategies that build your brand and nurture leads through educational content, testimonials, and lifestyle imagery—all while adhering to strict advertising rules."
    },
    {
      question: "Do you offer web design services specifically for cosmetic clinics and medispas?",
      answer: "Yes. We design TGA-compliant, conversion-optimized websites tailored for cosmetic clinics. Our designs emphasize trust, authority, and premium positioning, with clear CTAs, treatment-specific landing pages, and seamless booking integration to maximize patient acquisition."
    },
    {
      question: "What is your pricing structure? Do you require long-term contracts?",
      answer: "We offer flexible, performance-based pricing with no lock-in contracts. You can cancel with 30 days' notice. We earn your business every month through results, not binding agreements. Our 95% retention rate proves we deliver consistent value."
    },
    {
      question: "How do you measure ROI for cosmetic clinic marketing campaigns?",
      answer: "We track every lead back to its source and measure Cost Per Acquisition (CPA), Patient Lifetime Value (LTV), and overall Return on Ad Spend (ROAS). You'll receive detailed monthly reports showing exactly where your marketing dollars go and what results they generate, including lead quality metrics and conversion rates."
    },
    {
      question: "What is the typical ROI we can expect from working with Odin Digital?",
      answer: "Our average client sees a 540% ROI, meaning for every $1 invested, they generate $5.40 in revenue. However, results vary based on your market, competition, and treatment mix. We focus on delivering qualified, high-value patients—not just vanity metrics like clicks or impressions."
    },
    {
      question: "How do you handle the long sales cycle for high-ticket cosmetic treatments?",
      answer: "We implement Lead Nurturing Campaigns using email automation, retargeting ads, and educational content to stay top-of-mind throughout the patient's decision-making journey. Most high-value cosmetic treatments require 3-6 touchpoints before conversion, so we build systems to nurture leads over time."
    },
    {
      question: "Can you help us if we're a new cosmetic clinic with no existing patient base?",
      answer: "Absolutely. We've helped numerous new clinics launch successfully. We focus on rapid brand awareness through PPC and social media ads while simultaneously building your long-term SEO foundation. This dual approach generates immediate patient inquiries while establishing sustainable growth."
    },
    {
      question: "Do you work with cosmetic clinics outside of major cities?",
      answer: "Yes. We work with cosmetic clinics and medispas across Australia, from major metro areas to regional markets. Our digital marketing strategies are tailored to your local competitive landscape, whether you're in Sydney, Melbourne, or a smaller regional hub."
    },
    {
      question: "What industries do you specialize in besides cosmetic clinics?",
      answer: "We specialize in high-value service industries including cosmetic surgeons, dermatologists, dentists, lawyers, real estate agents, and accounting firms. Our expertise in compliance-heavy, premium service industries makes us uniquely qualified to handle the nuanced marketing needs of cosmetic clinics."
    },
    {
      question: "How do you ensure patient privacy and data security in your marketing campaigns?",
      answer: "We adhere strictly to Australian Privacy Principles and implement secure data handling practices across all campaigns. Patient data is never shared with third parties, and all tracking and analytics are configured to maintain privacy compliance while still providing actionable insights."
    },
    {
      question: "What happens if a campaign isn't performing as expected?",
      answer: "We provide complete transparency through monthly reporting. If a campaign underperforms, we immediately analyze the data, identify the issue, and implement optimizations. Our no lock-in contract policy means you're never trapped in an underperforming relationship—we earn your business every single month."
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://growth-conduit-central.lovable.app/#organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Performance-focused digital marketing agency specializing in compliant, high-value patient acquisition for cosmetic clinics and medispas.",
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
        "@id": "https://growth-conduit-central.lovable.app/industries/cosmetic-clinics#webpage",
        "name": "Cosmetic Clinic Marketing Agency",
        "url": "https://growth-conduit-central.lovable.app/industries/cosmetic-clinics",
        "description": "The national hub page for compliant, high-value patient acquisition strategies for cosmetic clinics and medispas in Australia.",
        "inLanguage": "en-AU",
        "lastReviewed": "2025-10-30",
        "isPartOf": {
          "@id": "https://growth-conduit-central.lovable.app/#website"
        }
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/industries/cosmetic-clinics#service",
        "serviceType": "Digital Marketing for Cosmetic Clinics",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "areaServed": "Australia",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Cosmetic Clinic Patient Acquisition Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "TGA Compliant Patient Acquisition Funnels"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "High-Value Patient PPC"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Medispa Authority SEO"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://growth-conduit-central.lovable.app/industries/cosmetic-clinics#faqpage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "Review",
        "@id": "https://growth-conduit-central.lovable.app/industries/cosmetic-clinics#review",
        "itemReviewed": {
          "@type": "Organization",
          "name": "Odin Digital - Cosmetic Clinic Marketing Agency"
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
        <title>Cosmetic Clinic Marketing Agency | TGA Compliant Patient Acquisition | Odin Digital</title>
        <meta name="description" content="The only Cosmetic Clinic Marketing Agency focused on TGA compliant, high-value patient acquisition. Stop attracting price-shoppers. Proven 540% ROI." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <Header />
        
        {/* Section 1: Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#D91C5C]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Breadcrumb */}
              <nav className="text-sm text-muted-foreground mb-8">
                <a href="/" className="hover:text-primary transition-colors">Home</a>
                <span className="mx-2">/</span>
                <a href="/industries" className="hover:text-primary transition-colors">Industries</a>
                <span className="mx-2">/</span>
                <span className="text-foreground">Cosmetic Clinics</span>
              </nav>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#D91C5C] to-primary bg-clip-text text-transparent inline-block pb-2">
                Cosmetic Clinic Marketing Agency
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Tired of Tire-Kickers? We Deliver TGA Compliant, High-Value Patient Acquisition for Cosmetic Clinics with a Proven 540% ROI.
              </p>

              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Get Your FREE Marketing Strategy
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Social Proof Metrics */}
        <section className="py-16 bg-background/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-card rounded-lg shadow-sm border">
                <div className="text-5xl font-bold text-[#D91C5C] mb-2">$47M+</div>
                <p className="text-muted-foreground">Revenue Generated for Clinics</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-sm border">
                <div className="text-5xl font-bold text-[#D91C5C] mb-2">540%</div>
                <p className="text-muted-foreground">Average ROI</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-sm border">
                <div className="text-5xl font-bold text-[#D91C5C] mb-2">95%</div>
                <p className="text-muted-foreground">Client Retention Rate</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-sm border">
                <div className="text-5xl font-bold text-[#D91C5C] mb-2">100%</div>
                <p className="text-muted-foreground">TGA Compliant Campaigns</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Problem-Agitation Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">The Cosmetic Clinic Marketing Challenge</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Most cosmetic clinics struggle with the same three problems that prevent sustainable growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-8 bg-card rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#D91C5C]/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#D91C5C]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Low-Quality Leads</h3>
                <p className="text-muted-foreground">
                  Your marketing attracts price-shoppers instead of patients who value premium treatments. You're getting inquiries, but they all want discounts or group-buy deals.
                </p>
              </div>

              <div className="p-8 bg-card rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#D91C5C]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#D91C5C]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">TGA Compliance Nightmare</h3>
                <p className="text-muted-foreground">
                  You're terrified of violating TGA advertising guidelines. Other agencies don't understand the rules, putting your clinic's reputation and licence at risk.
                </p>
              </div>

              <div className="p-8 bg-card rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#D91C5C]/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#D91C5C]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Long Sales Cycle Gap</h3>
                <p className="text-muted-foreground">
                  High-ticket cosmetic treatments require multiple touchpoints, but most agencies don't have nurturing systems in place. Leads go cold before they convert.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Testimonials Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-xl text-white">Real results from real cosmetic clinic owners</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-8 bg-card rounded-lg shadow-lg border">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-[#D91C5C] fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
                </p>
                <p className="font-semibold">Liam C</p>
                <p className="text-sm text-muted-foreground">Krush Organics</p>
              </div>

              <div className="p-8 bg-card rounded-lg shadow-lg border">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-[#D91C5C] fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Finally, an agency that understands TGA compliance AND delivers results. Our lead quality has improved dramatically, and we're attracting patients who actually value our premium services."
                </p>
                <p className="font-semibold">Dr. Sarah M</p>
                <p className="text-sm text-muted-foreground">Premium Medispa, Sydney</p>
              </div>

              <div className="p-8 bg-card rounded-lg shadow-lg border">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-[#D91C5C] fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The ROI speaks for itself. We've tripled our patient bookings for high-value treatments while maintaining complete compliance. Best marketing decision we've made."
                </p>
                <p className="font-semibold">Jennifer K</p>
                <p className="text-sm text-muted-foreground">Cosmetic Clinic Owner, Melbourne</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Integrated Services for Cosmetic Clinics</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Compliant, high-value patient acquisition across every channel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-card rounded-lg shadow-md border hover:shadow-xl transition-all flex flex-col">
                <div className="w-12 h-12 bg-[#D91C5C]/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-[#D91C5C]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">SEO for Cosmetic Clinics</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Dominate local search results for high-value treatments. We build authority and trust through compliant content that positions your clinic as the premium choice.
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Treatment-specific landing pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">TGA-compliant content strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Local SEO domination</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full mt-auto border-[#D91C5C] text-[#D91C5C] hover:bg-[#D91C5C] hover:text-white"
                  asChild
                >
                  <a href="/seo-agency">Learn More</a>
                </Button>
              </div>

              <div className="p-8 bg-card rounded-lg shadow-md border hover:shadow-xl transition-all flex flex-col">
                <div className="w-12 h-12 bg-[#D91C5C]/10 rounded-lg flex items-center justify-center mb-4">
                  <MousePointerClick className="w-6 h-6 text-[#D91C5C]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">PPC for Medispas</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  High-intent Google Ads campaigns that pre-qualify leads and filter out price-shoppers. Only pay for patients who are ready to invest in premium treatments.
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Lead pre-qualification funnels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Solution-based keyword targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Treatment-specific landing pages</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full mt-auto border-[#D91C5C] text-[#D91C5C] hover:bg-[#D91C5C] hover:text-white"
                  asChild
                >
                  <a href="/ppc-agency">Learn More</a>
                </Button>
              </div>

              <div className="p-8 bg-card rounded-lg shadow-md border hover:shadow-xl transition-all flex flex-col">
                <div className="w-12 h-12 bg-[#D91C5C]/10 rounded-lg flex items-center justify-center mb-4">
                  <Share2 className="w-6 h-6 text-[#D91C5C]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Meta Ads for Cosmetic Clinics</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Build brand authority and nurture leads through Instagram and Facebook. TGA-compliant creatives that educate, engage, and convert high-value patients.
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Educational content funnels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Retargeting campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Brand awareness strategies</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full mt-auto border-[#D91C5C] text-[#D91C5C] hover:bg-[#D91C5C] hover:text-white"
                  asChild
                >
                  <a href="/meta-ads-agency">Learn More</a>
                </Button>
              </div>

              <div className="p-8 bg-card rounded-lg shadow-md border hover:shadow-xl transition-all flex flex-col">
                <div className="w-12 h-12 bg-[#D91C5C]/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-[#D91C5C]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Web Design for Medispas</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Premium, conversion-optimized websites that build trust and drive bookings. Fully TGA-compliant with seamless appointment integration.
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Premium, trust-building design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Booking integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Mobile-optimized for conversions</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full mt-auto border-[#D91C5C] text-[#D91C5C] hover:bg-[#D91C5C] hover:text-white"
                  asChild
                >
                  <a href="/web-design-agency">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Differentiators Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Cosmetic Clinics Choose Odin Digital</h2>
              <p className="text-xl text-muted-foreground">The only agency built specifically for compliant, high-value patient acquisition</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#D91C5C]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">TGA Compliance-First Methodology</h3>
                <p className="text-muted-foreground">
                  Every campaign, ad, and landing page is vetted against TGA guidelines before launch. Protect your licence while maximizing results.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-[#D91C5C]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lead Pre-Qualification Systems</h3>
                <p className="text-muted-foreground">
                  We filter out price-shoppers before they reach your front desk. Only high-intent, solution-focused patients make it through.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-[#D91C5C]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Multi-Touchpoint Nurturing</h3>
                <p className="text-muted-foreground">
                  Automated email sequences, retargeting, and educational content keep you top-of-mind throughout the long sales cycle.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-[#D91C5C]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance-Based Accountability</h3>
                <p className="text-muted-foreground">
                  No lock-in contracts. We earn your business every month through transparent reporting and measurable ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Proven 4-Step Process</h2>
              <p className="text-xl text-muted-foreground">From audit to optimization, we deliver results fast</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#D91C5C] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Compliance & Market Audit</h3>
                    <p className="text-muted-foreground">
                      We analyze your current marketing for TGA compliance gaps and competitive positioning. Identify quick wins and long-term opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#D91C5C] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Custom Strategy Development</h3>
                    <p className="text-muted-foreground">
                      Build a multi-channel patient acquisition roadmap tailored to your clinic's unique service mix, location, and growth goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#D91C5C] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Campaign Launch & Lead Nurturing</h3>
                    <p className="text-muted-foreground">
                      Execute compliant campaigns across SEO, PPC, and Meta Ads. Implement automated nurturing systems to convert leads over time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#D91C5C] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Continuous Optimization & Reporting</h3>
                    <p className="text-muted-foreground">
                      Monthly performance reviews, A/B testing, and strategy refinement. We iterate relentlessly to maximize your ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Why Choose Us Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">The Odin Digital Advantage</h2>
              <p className="text-xl text-muted-foreground">Built for high-value, compliance-heavy industries</p>
            </div>

            <div className="max-w-6xl mx-auto space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Industry Expertise That Matters</h3>
                  <p className="text-muted-foreground mb-4">
                    We specialize in marketing for cosmetic clinics, medispas, cosmetic surgeons, and dermatologists. We understand TGA compliance, patient psychology, and the nuances of high-ticket treatment marketing.
                  </p>
                  <p className="text-muted-foreground">
                    Most agencies treat cosmetic clinics like any other local service business. We don't. We've spent years mastering the compliance requirements and sales cycles unique to your industry.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#D91C5C]/20 to-primary/20 rounded-lg p-8 h-64 flex items-center justify-center">
                  <FileCheck className="w-32 h-32 text-[#D91C5C]" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-primary/20 to-[#D91C5C]/20 rounded-lg p-8 h-64 flex items-center justify-center order-2 md:order-1">
                  <TrendingUp className="w-32 h-32 text-[#D91C5C]" />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-3xl font-bold mb-4">Performance-Based Partnership</h3>
                  <p className="text-muted-foreground mb-4">
                    We don't believe in trapping clients in long-term contracts. You can cancel at any time with 30 days' notice. Our 95% retention rate proves we deliver value month after month.
                  </p>
                  <p className="text-muted-foreground">
                    We earn your business every single month through results, not binding contracts. If we're not performing, you shouldn't be forced to stay.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Transparent Reporting and Analytics</h3>
                  <p className="text-muted-foreground mb-4">
                    We provide detailed monthly reports showing exactly where your marketing dollars go and what results they generate. Track patient inquiries, cost per acquisition, keyword rankings, and ROI with complete transparency.
                  </p>
                  <p className="text-muted-foreground">
                    No smoke and mirrors. No vanity metrics. Just clear, actionable data that shows exactly how your investment is performing.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#D91C5C]/20 to-primary/20 rounded-lg p-8 h-64 flex items-center justify-center">
                  <BarChart3 className="w-32 h-32 text-[#D91C5C]" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-primary/20 to-[#D91C5C]/20 rounded-lg p-8 h-64 flex items-center justify-center order-2 md:order-1">
                  <Users className="w-32 h-32 text-[#D91C5C]" />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-3xl font-bold mb-4">Dedicated Account Management</h3>
                  <p className="text-muted-foreground mb-4">
                    You'll work directly with a senior account manager who understands your business, your goals, and your industry. No junior staff. No outsourced labor. Just experienced professionals who care about your success.
                  </p>
                  <p className="text-muted-foreground">
                    Your account manager becomes an extension of your team, providing strategic guidance, monthly reporting, and proactive optimization recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Final CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D91C5C] to-primary opacity-95"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Stop Attracting Tire-Kickers?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get a FREE, no-obligation marketing strategy session tailored to your cosmetic clinic. Discover how we can deliver TGA-compliant, high-value patient acquisition starting today.
              </p>
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-white text-[#D91C5C] hover:bg-white/90 px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Schedule Your FREE Strategy Session
              </Button>
              <p className="text-sm mt-4 opacity-75">No lock-in contracts. Cancel anytime with 30 days' notice.</p>
            </div>
          </div>
        </section>

        {/* Section 10: Related Industry & Service Links */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Explore More Industry Solutions</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Related Industries</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="/industries" className="p-4 bg-card rounded-lg border hover:shadow-lg transition-all hover:border-[#D91C5C]">
                    <span className="text-foreground hover:text-[#D91C5C]">All Industries</span>
                  </a>
                  <a href="/industries/cosmetic-surgeons" className="p-4 bg-card rounded-lg border hover:shadow-lg transition-all hover:border-[#D91C5C]">
                    <span className="text-foreground hover:text-[#D91C5C]">Cosmetic Surgeons</span>
                  </a>
                  <a href="/industries/real-estate-agents" className="p-4 bg-card rounded-lg border hover:shadow-lg transition-all hover:border-[#D91C5C]">
                    <span className="text-foreground hover:text-[#D91C5C]">Real Estate Agents</span>
                  </a>
                  <a href="/industries/personal-injury-lawyers" className="p-4 bg-card rounded-lg border hover:shadow-lg transition-all hover:border-[#D91C5C]">
                    <span className="text-foreground hover:text-[#D91C5C]">Personal Injury Lawyers</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Core Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="/seo-agency" className="p-4 bg-card rounded-lg border hover:shadow-lg transition-all hover:border-[#D91C5C]">
                    <span className="text-foreground hover:text-[#D91C5C]">SEO Agency</span>
                  </a>
                  <a href="/ppc-agency" className="p-4 bg-card rounded-lg border hover:shadow-lg transition-all hover:border-[#D91C5C]">
                    <span className="text-foreground hover:text-[#D91C5C]">PPC Agency</span>
                  </a>
                  <a href="/meta-ads-agency" className="p-4 bg-card rounded-lg border hover:shadow-lg transition-all hover:border-[#D91C5C]">
                    <span className="text-foreground hover:text-[#D91C5C]">Meta Ads Agency</span>
                  </a>
                  <a href="/web-design-agency" className="p-4 bg-card rounded-lg border hover:shadow-lg transition-all hover:border-[#D91C5C]">
                    <span className="text-foreground hover:text-[#D91C5C]">Web Design Agency</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground mb-12 text-center">
                Everything you need to know about cosmetic clinic marketing
              </p>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Collapsible key={index} className="bg-card border rounded-lg">
                    <CollapsibleTrigger className="flex justify-between items-center w-full p-6 text-left hover:bg-secondary/50 transition-colors rounded-lg">
                      <span className="font-semibold pr-4">{faq.question}</span>
                      <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-200" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-6 pb-6">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t shadow-lg md:hidden z-40">
          <Button 
            onClick={openForm}
            className="w-full bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white"
            size="lg"
          >
            Get FREE Strategy Session
          </Button>
        </div>

        <Footer />
        <SideTab />
      </div>
    </>
  );
};

export default CosmeticClinics;
