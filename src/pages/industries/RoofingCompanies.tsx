import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import {
  Search,
  Target,
  TrendingUp,
  Users,
  DollarSign,
  Award,
  CheckCircle,
  Shield,
  BarChart,
  Zap,
  Clock,
  Star,
  Phone,
  MapPin,
  Share2,
  Wrench,
  AlertCircle,
  ThumbsDown,
  UserX
} from "lucide-react";

const RoofingCompanies = () => {
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
        "description": "Digital marketing specialist agency for roofing companies and trade businesses.",
        "sameAs": [
          "https://www.facebook.com/odindigital",
          "https://www.linkedin.com/company/odin-digital",
          "https://www.instagram.com/odindigital"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "email": "hello@odindigital.com.au"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://odindigital.com.au/#localbusiness",
        "name": "Odin Digital - Roofing Marketing Specialists",
        "image": "https://odindigital.com.au/logo.png",
        "additionalType": "RoofingContractor",
        "priceRange": "$$"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/roofing-companies#service",
        "name": "Digital Marketing Services for Roofing Companies",
        "description": "Comprehensive digital marketing services for roofing companies including Local SEO, PPC, reputation management, and web design.",
        "provider": { "@id": "https://odindigital.com.au/#organization" },
        "serviceType": "Digital Marketing"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can I start getting leads from digital marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With hyper-targeted PPC and Local Services Ads (LSAs), we can typically start generating high-urgency leads within 48-72 hours of campaign launch. SEO is a longer-term strategy, with significant results usually appearing within 6-12 months."
            }
          },
          {
            "@type": "Question",
            "name": "Is SEO or PPC better for a roofing company?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Both are essential. PPC is critical for immediate, high-urgency leads (e.g., 'emergency roof repair'). Local SEO is vital for long-term foundational growth, building trust, and dominating Google Maps for non-emergency searches. We recommend an integrated strategy using both."
            }
          }
        ]
      }
    ]
  };

  const faqs = [
    {
      question: "How quickly can I start getting leads from digital marketing?",
      answer: "With hyper-targeted PPC and Local Services Ads (LSAs), we can typically start generating high-urgency leads within 48-72 hours of campaign launch. SEO is a longer-term strategy, with significant results usually appearing within 6-12 months."
    },
    {
      question: "Is SEO or PPC better for a roofing company?",
      answer: "Both are essential. PPC is critical for immediate, high-urgency leads (e.g., 'emergency roof repair'). Local SEO is vital for long-term foundational growth, building trust, and dominating Google Maps for non-emergency searches. We recommend an integrated strategy using both."
    },
    {
      question: "How do you handle the seasonality of the roofing business?",
      answer: "We use a two-pronged approach: PPC and Meta Ads are aggressively scaled during peak seasons (storm/hail) for immediate lead capture. SEO and Content Marketing are focused on during the off-season to build long-term authority and generate non-emergency, high-value replacement leads."
    },
    {
      question: "How do you ensure I get high-quality leads, not just price shoppers?",
      answer: "We use advanced targeting in PPC and build highly specific landing pages that pre-qualify leads. We focus on keywords that indicate a higher budget and intent (e.g., 'full roof replacement cost' vs. 'cheap roof repair')."
    },
    {
      question: "Why is my Google Business Profile (GBP) so important?",
      answer: "Your GBP is the single most important asset for local service businesses. It controls your presence on Google Maps and Local Services Ads. We optimize it for maximum visibility and focus on generating and showcasing 5-star reviews to build immediate trust."
    },
    {
      question: "Can you help me get more 5-star reviews?",
      answer: "Yes. We implement automated review generation systems that prompt happy customers to leave reviews on your Google Business Profile, directly addressing the industry's trust deficit."
    },
    {
      question: "How do you compete with large, national roofing companies?",
      answer: "We use hyper-local SEO and geo-fencing in PPC to focus your efforts exactly where you operate. Customers prefer local contractors, and our strategy ensures you dominate your specific service area, outranking national chains on a local level."
    },
    {
      question: "What is the biggest mistake roofing companies make in marketing?",
      answer: "Relying solely on expensive, low-quality lead generation services (like HomeAdvisor/hipages). These services create a race to the bottom on price. We focus on building your own lead generation system, giving you control over quality and profit margins."
    },
    {
      question: "Do I need a new website?",
      answer: "If your current website is slow, not mobile-friendly, or doesn't have a clear 'Click-to-Call' button prominently displayed, then yes. We build conversion-focused websites designed to turn mobile visitors into immediate phone calls."
    },
    {
      question: "How do you handle emergency calls outside of business hours?",
      answer: "We integrate your digital campaigns with your call answering system. Our PPC campaigns can be set to run 24/7 during storm season, ensuring you capture those high-value emergency leads when competitors are offline."
    },
    {
      question: "How much does your service cost?",
      answer: "Our pricing is customized based on your service area, competition, and growth goals. We view our service as an investment, not an expense, and our goal is to deliver a positive ROI that far exceeds our fee."
    },
    {
      question: "Do you require a long-term contract?",
      answer: "No. We operate on a month-to-month basis with no lock-in contracts. Our performance should be the only reason you stay with us."
    },
    {
      question: "How do you track the quality of leads?",
      answer: "We implement advanced call tracking and form tracking. We don't just report on leads; we report on qualified leads that meet your criteria, ensuring you know exactly where your profitable jobs are coming from."
    },
    {
      question: "Will you help me with my commercial roofing leads?",
      answer: "Yes. We can segment your marketing efforts to target B2B clients (commercial property managers, strata) using different keywords, ad copy, and social media platforms (like LinkedIn) than we use for residential homeowners."
    },
    {
      question: "How do we get started with Odin Digital?",
      answer: "The first step is a free, no-obligation Lead Flow Analysis. We'll audit your current lead sources and provide a clear roadmap for dominating your local market."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Marketing for Roofing Companies | Get High-Quality Leads Year-Round - Odin Digital</title>
        <meta name="description" content="Stop the feast-or-famine cycle. Get a predictable flow of high-urgency, high-quality roofing leads with our local SEO, PPC, and web design strategy." />
        <link rel="canonical" href="https://odindigital.com.au/industries/roofing-companies" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <MarketingFormModal />
        <SideTab />

        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-12 md:pb-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-charcoal mb-4 sm:mb-6 md:mb-8 leading-tight">
                Digital Marketing for Roofing Companies
              </h1>
              <p className="hero-sub-headline text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
                Stop the Feast-or-Famine Cycle. Get a Predictable Flow of High-Quality Roofing Leads Year-Round.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-charcoal/80 max-w-5xl mx-auto leading-relaxed mb-6 sm:mb-8 md:mb-12 px-2">
                Your team is expert at keeping the water out. Our team is expert at keeping the leads in. We build digital systems that deliver high-urgency, high-value roofing jobs on demand. At Odin Digital, we understand the roofing business—it's fast-paced, highly competitive, and often driven by emergency. Generic marketing plans fail because they don't account for seasonality, local competition, or the need for immediate lead capture. We craft integrated digital ecosystems—combining Local SEO, Hyper-Targeted PPC, Social Proof, and Mobile-First Web Design—to ensure your phone rings when customers need you most.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base md:text-lg py-5 sm:py-6 md:py-7 px-6 md:px-8" onClick={openForm}>
                  Schedule Your FREE Lead Flow Analysis →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-muted/20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-charcoal mb-3 sm:mb-4 md:mb-6 px-2">
                The Proof Is in the Performance
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-4xl mx-auto px-2">
                We're not just making promises; we're delivering verified results for trade and professional service firms across Australia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <Card className="p-5 sm:p-6 md:p-8 border border-charcoal/10 text-center">
                <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary mx-auto mb-2 sm:mb-3 md:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-1 sm:mb-2">$574M+</div>
                <p className="text-xs sm:text-sm md:text-base text-charcoal/70">Verified Client Revenue</p>
              </Card>

              <Card className="p-5 sm:p-6 md:p-8 border border-charcoal/10 text-center">
                <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary mx-auto mb-2 sm:mb-3 md:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-1 sm:mb-2">540%</div>
                <p className="text-xs sm:text-sm md:text-base text-charcoal/70">Average ROI on Ad Spend</p>
              </Card>

              <Card className="p-5 sm:p-6 md:p-8 border border-charcoal/10 text-center">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary mx-auto mb-2 sm:mb-3 md:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-1 sm:mb-2">95%</div>
                <p className="text-xs sm:text-sm md:text-base text-charcoal/70">Client Retention Rate<br />(No Lock-In Contracts)</p>
              </Card>

              <Card className="p-5 sm:p-6 md:p-8 border border-charcoal/10 text-center">
                <BarChart className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary mx-auto mb-2 sm:mb-3 md:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-1 sm:mb-2">283+</div>
                <p className="text-xs sm:text-sm md:text-base text-charcoal/70">Successful Campaigns Delivered</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-charcoal mb-3 sm:mb-4 md:mb-6 px-2">
                The Roofing Marketing Pain Points We Solve
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-4xl mx-auto px-2">
                Roofing is a high-stakes business. Why trust your lead flow to low-stakes, generic marketing? We solve the core problems holding back your company's growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <Card className="p-6 md:p-8 border border-charcoal/10 hover:border-primary/20 transition-colors">
                <AlertCircle className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2 md:mb-3">The Feast-or-Famine Lead Flow</h3>
                <p className="text-sm md:text-base text-charcoal/70">
                  Your business relies on unpredictable weather events. When it rains, your phone rings off the hook. When it's dry, your crews sit idle. You need a stable, predictable system to generate leads regardless of the season.
                </p>
              </Card>

              <Card className="p-6 md:p-8 border border-charcoal/10 hover:border-primary/20 transition-colors">
                <ThumbsDown className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2 md:mb-3">The High-Cost, Low-Quality Lead Trap</h3>
                <p className="text-sm md:text-base text-charcoal/70">
                  You've tried expensive lead generation services (like HomeAdvisor or hipages) that deliver low-quality, price-shopping leads. You end up wasting time and money chasing jobs with razor-thin margins.
                </p>
              </Card>

              <Card className="p-6 md:p-8 border border-charcoal/10 hover:border-primary/20 transition-colors">
                <UserX className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2 md:mb-3">The Trust Deficit</h3>
                <p className="text-sm md:text-base text-charcoal/70">
                  The industry is plagued by "fly-by-night" operators. Customers are highly skeptical and often choose the cheapest quote, not the best quality. You need a digital presence that instantly establishes trust, authority, and professionalism.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-charcoal mb-4 md:mb-6">
                What Our Trade & Professional Clients Say
              </h2>
              <p className="text-lg md:text-xl text-charcoal/70 max-w-4xl mx-auto">
                We partner with high-calibre professional firms to deliver measurable growth. Here's what they're saying.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="p-6 md:p-8 border border-charcoal/10">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-charcoal/80 mb-4 italic">
                  "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with."
                </p>
                <p className="text-sm font-semibold text-charcoal">- Fabienne Costa, Founder, YCL Jewels (Gold Coast)</p>
              </Card>

              <Card className="p-6 md:p-8 border border-charcoal/10">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-charcoal/80 mb-4 italic">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
                </p>
                <p className="text-sm font-semibold text-charcoal">- Liam C, Founder, Krush Organics (Sydney)</p>
              </Card>

              <Card className="p-6 md:p-8 border border-charcoal/10">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-charcoal/80 mb-4 italic">
                  "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month."
                </p>
                <p className="text-sm font-semibold text-charcoal">- Evan Tsaboukos, Founder, Imperial Wealth (Melbourne)</p>
              </Card>
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-12 px-4">
              <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base md:text-lg py-5 sm:py-6 md:py-7 px-6 md:px-8" onClick={openForm}>
                Get Similar Results for Your Roofing Business
              </Button>
            </div>
          </div>
        </section>

        {/* Strategy Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-charcoal mb-4 md:mb-6">
                The Integrated Digital Strategy for Roofing Companies
              </h2>
              <p className="text-lg md:text-xl text-charcoal/70 max-w-4xl mx-auto">
                We provide a single, cohesive strategy where every channel works to capture high-urgency, high-value leads in your local service area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <Card className="p-6 md:p-8 border border-charcoal/10 hover:border-primary/20 transition-colors">
                <MapPin className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3 md:mb-4">1. Local SEO for Service Area Dominance</h3>
                <p className="text-sm md:text-base text-charcoal/70 mb-4">
                  Your customers are searching for "roof repair near me." Our SEO strategy is hyper-focused on Local SEO—dominating Google Maps, Local Services Ads (LSAs), and "near me" searches. We ensure your Google Business Profile (GBP) is optimized to rank #1 when a customer has an emergency.
                </p>
              </Card>

              <Card className="p-6 md:p-8 border border-charcoal/10 hover:border-primary/20 transition-colors">
                <Target className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3 md:mb-4">2. Hyper-Targeted PPC & Emergency Google Ads</h3>
                <p className="text-sm md:text-base text-charcoal/70 mb-4">
                  When a roof is leaking, the customer needs a solution now. We deploy aggressive, high-intent PPC campaigns that target emergency keywords like "emergency roof repair" or "hail damage roofer." We ensure your ads appear at the top of the search results 24/7 to capture those critical, time-sensitive leads.
                </p>
              </Card>

              <Card className="p-6 md:p-8 border border-charcoal/10 hover:border-primary/20 transition-colors">
                <Share2 className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3 md:mb-4">3. Reputation Building with Meta Ads & Social Proof</h3>
                <p className="text-sm md:text-base text-charcoal/70 mb-4">
                  In an industry with a trust deficit, social proof is everything. Our Meta Ads strategy focuses on showcasing your 5-star reviews, before-and-after project photos, and transparent communication. We use retargeting to stay top-of-mind for homeowners and commercial property managers.
                </p>
              </Card>

              <Card className="p-6 md:p-8 border border-charcoal/10 hover:border-primary/20 transition-colors">
                <Zap className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4" />
                <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3 md:mb-4">4. Mobile-First, Conversion-Focused Web Design</h3>
                <p className="text-sm md:text-base text-charcoal/70 mb-4">
                  Over 70% of emergency roofing searches happen on a mobile phone. Your website must be lightning-fast, mobile-responsive, and designed with a clear, prominent "Click-to-Call" button on every page. We build websites that instantly establish trust and guide the customer to call you immediately.
                </p>
              </Card>
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Button size="lg" className="text-base md:text-lg py-6 md:py-7 px-6 md:px-8" onClick={openForm}>
                Schedule Your FREE Lead Flow Analysis →
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-charcoal mb-4 md:mb-6">
                Why Odin Digital is the Strategic Partner for Your Roofing Company
              </h2>
              <p className="text-lg md:text-xl text-charcoal/70 max-w-4xl mx-auto">
                We understand the unique challenges of the trades industry—we are built for high-urgency, local service businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <Card className="p-6 md:p-8 border border-charcoal/10">
                <div className="flex items-start mb-4">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2">Local SEO & LSA Experts</h3>
                    <p className="text-sm md:text-base text-charcoal/70">
                      We specialize in the tools that matter most to roofers: Google Maps and Local Services Ads. We get you in front of the customer when they need you most.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8 border border-charcoal/10">
                <div className="flex items-start mb-4">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2">Emergency Lead Capture System</h3>
                    <p className="text-sm md:text-base text-charcoal/70">
                      Our systems are designed to capture and qualify high-urgency leads 24/7, turning unexpected weather events into predictable revenue streams.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8 border border-charcoal/10">
                <div className="flex items-start mb-4">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2">Trust & Reputation Focus</h3>
                    <p className="text-sm md:text-base text-charcoal/70">
                      We prioritize online reputation management, ensuring your 5-star reviews are front and centre to overcome the industry's trust deficit.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8 border border-charcoal/10">
                <div className="flex items-start mb-4">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2">No Lock-In Contracts</h3>
                    <p className="text-sm md:text-base text-charcoal/70">
                      We believe our results should keep you with us, not a binding contract. Our 95% client retention rate proves our commitment to long-term, high-value partnerships.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-charcoal mb-4 md:mb-6">
                Our 4-Step Predictable Lead Generation Process
              </h2>
              <p className="text-lg md:text-xl text-charcoal/70 max-w-4xl mx-auto">
                We follow a strategic process designed to deliver high-quality, high-urgency roofing leads on demand.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <Card className="p-6 md:p-8 border border-charcoal/10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4 md:mr-6">
                    <span className="text-xl md:text-2xl font-black text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-2 md:mb-3">Local Market Audit & Blueprint</h3>
                    <p className="text-sm md:text-base text-charcoal/70">
                      We conduct a comprehensive audit of your current digital presence, local competitors, and target service area. We then create a detailed digital marketing blueprint tailored to your specific trade and local market.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8 border border-charcoal/10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4 md:mr-6">
                    <span className="text-xl md:text-2xl font-black text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-2 md:mb-3">Foundation & Execution</h3>
                    <p className="text-sm md:text-base text-charcoal/70">
                      We optimize your website for mobile speed and local SEO. We then launch targeted campaigns across Google Maps, LSAs, PPC, and Meta Ads, focusing on immediate lead capture.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8 border border-charcoal/10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4 md:mr-6">
                    <span className="text-xl md:text-2xl font-black text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-2 md:mb-3">Refinement & Reporting</h3>
                    <p className="text-sm md:text-base text-charcoal/70">
                      We continuously monitor, test, and refine all campaigns, focusing on the metrics that matter most to your business: Cost Per Qualified Lead (CPQL) and Booking Rate. We provide transparent, jargon-free reports.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8 border border-charcoal/10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4 md:mr-6">
                    <span className="text-xl md:text-2xl font-black text-primary">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-2 md:mb-3">Scaling & Service Area Dominance</h3>
                    <p className="text-sm md:text-base text-charcoal/70">
                      Once we establish a profitable and predictable system for lead acquisition, we work with you to strategically scale your efforts, expanding your service area and crew size to meet demand.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Button size="lg" className="text-base md:text-lg py-6 md:py-7 px-6 md:px-8" onClick={openForm}>
                Start Your Lead Flow Transformation
              </Button>
            </div>
          </div>
        </section>

        {/* Additional Why Choose Section */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-charcoal mb-4 md:mb-6">
                Why Choose Odin Digital as Your Roofing Marketing Partner?
              </h2>
              <p className="text-lg md:text-xl text-charcoal/70 max-w-4xl mx-auto">
                We are obsessed with your company's growth. Our focus is on turning your digital presence into a predictable source of high-quality jobs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <Card className="p-6 md:p-8 border border-charcoal/10">
                <Wrench className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2 md:mb-3">Trade-Specific Expertise</h3>
                <p className="text-sm md:text-base text-charcoal/70">
                  We don't just do generic marketing; we understand the trade industry's unique challenges, from seasonality to local competition and the need for immediate response.
                </p>
              </Card>

              <Card className="p-6 md:p-8 border border-charcoal/10">
                <Zap className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2 md:mb-3">Cutting-Edge Technology</h3>
                <p className="text-sm md:text-base text-charcoal/70">
                  We leverage the latest in marketing technology and AI-powered optimization to ensure your campaigns are efficient, targeted, and ahead of the curve. This includes using AI tools for local ad bidding, lead qualification, and predictive analytics to anticipate demand spikes.
                </p>
              </Card>

              <Card className="p-6 md:p-8 border border-charcoal/10">
                <Target className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2 md:mb-3">Direct Response Copywriting</h3>
                <p className="text-sm md:text-base text-charcoal/70">
                  Our team writes copy that compels immediate action, using a problem-agitation-solution framework that speaks directly to the urgency of a leaking roof or damaged property.
                </p>
              </Card>

              <Card className="p-6 md:p-8 border border-charcoal/10">
                <Award className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2 md:mb-3">Proven Track Record</h3>
                <p className="text-sm md:text-base text-charcoal/70">
                  With over $574M+ in verified client revenue and a 95% retention rate, we have the experience and results to back up our claims.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-charcoal mb-4 md:mb-6">
                Frequently Asked Questions About Marketing for Roofing Companies
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-charcoal/10 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-charcoal hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-charcoal/70 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -top-20 -right-20"></div>
            <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -bottom-20 -left-20"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 md:mb-8">
              Ready to Build a Predictable Lead Flow System?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
              Stop relying on unpredictable weather and start attracting high-quality leads on demand with a strategic digital blueprint.
            </p>
            <p className="text-base md:text-lg text-white/80 mb-8 md:mb-12">
              Schedule your free, no-obligation lead flow analysis today. We'll show you the exact roadmap to dominate your local service area.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-20 md:mb-0">
              <Button size="lg" onClick={openForm} className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 text-base md:text-lg py-6 md:py-7 px-6 md:px-8">
                Schedule Your FREE Lead Flow Analysis →
              </Button>
            </div>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-3 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50 shadow-lg">
          <Button size="lg" onClick={openForm} className="w-full text-base py-6">
            <Phone className="w-5 h-5 mr-2" />
            Get FREE Lead Analysis
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default RoofingCompanies;
