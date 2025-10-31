import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  TrendingUp, 
  Target, 
  FileText,
  CheckCircle2,
  ArrowRight,
  Award,
  BarChart3,
  Users,
  Zap,
  Search,
  AlertCircle,
  Clock,
  DollarSign
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WhiteLabelSEO = () => {
  const { openForm } = useMarketingForm();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://growth-conduit-central.lovable.app/",
    "logo": "https://growth-conduit-central.lovable.app/logo.png",
    "description": "Performance-focused digital marketing agency specializing in PPC, Meta Ads, Web Design, and SEO with no lock-in contracts.",
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
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "White Label SEO Services",
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital"
    },
    "description": "Professional white label SEO fulfillment for marketing agencies, digital consultants, and web design firms across Australia."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is White Label SEO and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "White Label SEO is a service where one agency (us) provides SEO fulfillment to another agency (you). We work entirely behind the scenes, and you rebrand our services and reports as your own. It allows you to offer a complete SEO solution to your clients without hiring and managing an in-house team."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure the quality of your SEO work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our work is managed by an Australian-based team and adheres strictly to ethical, white-hat SEO best practices. We focus on long-term, sustainable growth through high-quality content, technical excellence, and manual, high-authority link building. We never use risky or black-hat tactics that could jeopardize your client's domain."
        }
      },
      {
        "@type": "Question",
        "name": "Will my clients know that I am using a white label partner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We operate with 100% discretion. All communication with you is confidential, and all reports and dashboards are fully white-labeled and branded with your agency's logo and colours. We are the silent, expert extension of your team."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle client communication?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our standard process is to communicate only with your agency's account manager. You maintain the direct client relationship. However, if you require it, we can join client calls as a 'senior SEO specialist' from your team—we adapt to whatever model best suits your client relationship."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of reporting do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive monthly reports that are fully white-labeled and ready for client presentation. These reports include key metrics like keyword ranking progress, organic traffic growth, conversion tracking, and a detailed breakdown of the work completed, all presented in a clear, easy-to-understand format."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can we onboard a new client?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once we have a signed agreement, we can typically complete the initial technical audit and strategy development within 48-72 hours. This allows your agency to start delivering value and reporting progress to your client almost immediately."
        }
      },
      {
        "@type": "Question",
        "name": "Can you handle a sudden influx of new SEO clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our program is designed for instant scalability. We maintain the capacity and infrastructure to handle rapid growth, allowing your agency to take on new business without worrying about fulfillment bottlenecks or compromising quality."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer services other than general SEO (e.g., Local SEO, Technical SEO)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our white label services cover the full spectrum of SEO, including Local SEO optimization (Google Business Profile management), in-depth Technical SEO audits, content strategy, and high-authority link building."
        }
      },
      {
        "@type": "Question",
        "name": "What are the costs involved in your white label program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing is structured to ensure a healthy profit margin for your agency. We offer transparent, tiered pricing based on the level of fulfillment required. We view our service as a profit center for your agency, not a cost."
        }
      },
      {
        "@type": "Question",
        "name": "Do you require a long-term contract?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We operate on a month-to-month basis with no lock-in contracts. We believe our quality and reliability should be the only reason you stay with us."
        }
      },
      {
        "@type": "Question",
        "name": "How does your white label service protect my agency's reputation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By guaranteeing quality, using ethical practices, and providing transparent reporting, we ensure that every result we deliver is a positive reflection on your agency. We mitigate the risk of client churn caused by poor SEO performance."
        }
      },
      {
        "@type": "Question",
        "name": "How do we get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The first step is a free, confidential Agency Scalability Audit. We'll analyze your current service gaps and show you exactly how our white label program can integrate seamlessly to boost your profitability."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide training for my sales team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide your sales team with the necessary training and collateral to confidently sell our SEO services. This includes pitch decks, case studies, and a clear understanding of the value proposition."
        }
      },
      {
        "@type": "Question",
        "name": "Can we set our own pricing for the services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. You set the final client price. Our goal is to provide you with a high-quality fulfillment cost that allows you to maintain a strong, profitable margin while offering competitive client pricing."
        }
      },
      {
        "@type": "Question",
        "name": "What makes your link building ethical and safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We only engage in manual outreach to secure natural, editorial links from reputable websites. We strictly avoid PBNs, link farms, or any form of manipulative link scheme, ensuring the long-term safety and growth of your client's domain."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>White Label SEO for Agencies | Scale Instantly & Protect Your Brand - Odin Digital</title>
        <meta name="description" content="Stop risking your reputation on unreliable SEO providers. Partner with Odin Digital for guaranteed quality, 100% transparent, white-labeled SEO fulfillment that maximizes your profit margins." />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <Header />
        <SideTab />
        <MarketingFormModal />

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background border-t border-border p-3 shadow-lg">
          <Button 
            onClick={openForm}
            className="w-full bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold py-4"
            size="lg"
          >
            Schedule Your FREE Agency Audit →
          </Button>
        </div>

        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-24 overflow-hidden bg-gradient-subtle">
          {/* Floating circles */}
          <div className="absolute top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-primary/10 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full bg-secondary/10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-80 lg:h-80 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          <div className="container mx-auto max-w-6xl relative z-10 px-3 sm:px-4 md:px-6">
            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-foreground leading-tight mt-8 sm:mt-4">
                White Label SEO
              </h1>
              
              <p className="hero-sub-headline text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground/90 leading-tight max-w-5xl mx-auto px-2 sm:px-4">
                Protect Your Brand, Scale Instantly, and Deliver Guaranteed SEO Results with Australia's Most Reliable White Label Partner.
              </p>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4 max-w-4xl mx-auto px-2 sm:px-4">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  You've built your agency's reputation on trust and quality. Don't risk it on a cheap, unreliable SEO provider. We are the silent, expert extension of your team, providing ethical, high-performance SEO fulfillment that protects your client relationships and maximizes your profit margins.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  At Odin Digital, we understand the high-stakes risk of outsourcing. A poor white label partner can destroy years of hard-earned trust in a single reporting cycle. That's why we've engineered a white label SEO program built on three core pillars: Guaranteed Quality, 100% Transparency, and Seamless Integration.
                </p>
              </div>

              <div className="pt-3 sm:pt-4 md:pt-6">
                <Button 
                  onClick={openForm}
                  size="lg"
                  className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 shadow-glow hover:shadow-primary/60 transition-all duration-300 hover:scale-105"
                >
                  Schedule Your FREE Agency Scalability Audit <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Metrics */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                The Proof Is in the Performance
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                We are the trusted fulfillment partner for high-calibre agencies and professional service firms across Australia. Our results are your results.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
              <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1">$574M+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Verified Client Revenue</div>
              </div>
              <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1">540%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Average ROI</div>
              </div>
              <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1">95%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Client Retention</div>
              </div>
              <div className="text-center p-3 sm:p-4 md:p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1">283+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Successful Campaigns</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                The White Label SEO Pain Points We Solve
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Stop losing clients and wasting time managing unreliable partners. We solve the core problems that hold back agency scalability and profitability.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Inconsistent Quality & Client Churn</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  You've tried cheap overseas providers whose work is generic, uses risky tactics, and ultimately fails to deliver results. This leads to frustrated clients, difficult conversations, and the dreaded client churn.
                </p>
              </div>

              <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">The Black Box of Reporting</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Your current partner sends vague, unbranded reports that you can't confidently present to your clients. You lack transparency, making it impossible to answer client questions and eroding your agency's credibility.
                </p>
              </div>

              <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Capacity & Overhead Limits</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  You are turning away profitable SEO business because you lack the internal capacity to fulfill it. Hiring, training, and managing an in-house SEO team is expensive, time-consuming, and limits your ability to scale instantly.
                </p>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-10">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold"
              >
                Stop the Agency Bleed: Get Your FREE Audit →
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                What Our Professional Clients Say
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                We partner with high-performing professionals who demand results and discretion.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 items-stretch">
              <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border flex flex-col h-full">
                <div className="flex items-center mb-2 sm:mb-3">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#D91C5C] mr-2" />
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">292% Growth</div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-2 sm:mb-3">
                  "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with."
                </p>
                <div className="font-semibold text-xs sm:text-sm text-left mt-auto pt-2">Fabienne Costa - YCL Jewels (Gold Coast)</div>
              </div>

              <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border flex flex-col h-full">
                <div className="flex items-center mb-2 sm:mb-3">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#D91C5C] mr-2" />
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">500% ROI</div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-2 sm:mb-3">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
                </p>
                <div className="font-semibold text-xs sm:text-sm text-left mt-auto pt-2">Liam C - Krush Organics (Sydney)</div>
              </div>

              <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border flex flex-col h-full">
                <div className="flex items-center mb-2 sm:mb-3">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#D91C5C] mr-2" />
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">5x Revenue</div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-2 sm:mb-3">
                  "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month."
                </p>
                <div className="font-semibold text-xs sm:text-sm text-left mt-auto pt-2">Evan Tsaboukos - Imperial Wealth (Melbourne)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                Your Full-Service White Label SEO Fulfillment Partner
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                We provide a complete, end-to-end SEO solution that you can brand and resell as your own, instantly expanding your service offering.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <Search className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Technical SEO Audit & Fix</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Deep-dive technical audit to identify and fix foundational issues. Site speed optimization, core web vitals, schema markup, and crawl error fixes.
                </p>
              </div>

              <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">High-Authority Link Building</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Manual, ethical outreach to secure high-DA links from relevant, quality Australian sources. Build genuine authority and protect from penalties.
                </p>
              </div>

              <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Conversion-Focused Content</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Content strategy targeting high-commercial intent keywords, authoritative pillar pages, optimized to drive client leads—not just traffic.
                </p>
              </div>

              <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-shadow">
                <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-2 sm:mb-3" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Branded Reporting & Communication</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Fully white-labeled reports you can present directly. Dedicated Australian account manager for seamless integration into your workflow.
                </p>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-10">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold"
              >
                Schedule Your FREE Agency Scalability Audit →
              </Button>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                Our 4 Key Differentiators: Why Agencies Choose Odin
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                We are not a vendor; we are a strategic partner. Our program is designed to protect your brand and maximize your profitability.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <div className="text-center p-3 sm:p-4 md:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-[#D91C5C]" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Australian-Based, Ethical Expertise</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  All strategy, reporting, and communication handled by our expert Australian team. Only ethical, white-hat techniques that guarantee long-term results.
                </p>
              </div>

              <div className="text-center p-3 sm:p-4 md:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-[#D91C5C]" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">100% Transparent, White-Labeled</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Dedicated, branded dashboard with real-time access to all campaign data, keyword rankings, and progress. Full control maintained.
                </p>
              </div>

              <div className="text-center p-3 sm:p-4 md:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-[#D91C5C]" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Instant, Risk-Free Scalability</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Scale your SEO offering overnight without massive overhead. Pay only for fulfillment you need, take on any size client with confidence.
                </p>
              </div>

              <div className="text-center p-3 sm:p-4 md:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#D91C5C]" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Reputation Protection Guarantee</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  95% client retention rate proves our quality. Results we deliver reinforce your agency's reputation, not damage it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                Our 4-Step Seamless Onboarding Process
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                We make it simple to integrate our expertise into your agency's service delivery, often in less than 48 hours.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 items-stretch">
              <div className="relative flex flex-col h-full">
                <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border flex flex-col h-full">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#D91C5C] text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg mb-2 sm:mb-3">1</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Agency Audit & Service Blueprint</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    Confidential audit of your current needs, service gaps, and capacity. Customized white label service blueprint to maximize profit margins.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col h-full">
                <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border flex flex-col h-full">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#D91C5C] text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg mb-2 sm:mb-3">2</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Client Onboarding & Strategy</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    You introduce us or we remain silent. We conduct keyword research and strategy development for you to present as your own.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col h-full">
                <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border flex flex-col h-full">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#D91C5C] text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg mb-2 sm:mb-3">3</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Execution & Reporting</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    Our team executes the strategy. Real-time progress access and fully branded monthly reports for client presentation.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col h-full">
                <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border flex flex-col h-full">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#D91C5C] text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg mb-2 sm:mb-3">4</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Scale & Profit</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    As clients see results, scale the service. We handle increased demand seamlessly, allowing growth without adding staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                Why Partner with Odin Digital?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                We are obsessed with your agency's success. Your reputation is our most valuable asset, and we treat it that way.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 items-center">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">True Partnership Model</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-2 sm:mb-3">
                    We view ourselves as a silent, integrated department within your agency. We are not a vendor; we are a dedicated team of SEO specialists focused on making you look good.
                  </p>
                </div>
                <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-2 sm:mb-3" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#D91C5C]" />
                      <span className="text-xs sm:text-sm">Dedicated Account Manager</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#D91C5C]" />
                      <span className="text-xs sm:text-sm">Australian-Based Team</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#D91C5C]" />
                      <span className="text-xs sm:text-sm">100% Confidential Service</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 items-center">
                <div className="order-2 md:order-1 bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-2 sm:mb-3" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#D91C5C]" />
                      <span className="text-xs sm:text-sm">AI-Powered Strategy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#D91C5C]" />
                      <span className="text-xs sm:text-sm">Competitive Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#D91C5C]" />
                      <span className="text-xs sm:text-sm">Predictive Content Planning</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Advanced AI-Powered Strategy</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-2 sm:mb-3">
                    We leverage the latest in AI and data analytics for competitive analysis, keyword gap identification, and predictive content planning, ensuring your clients always receive a cutting-edge strategy.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 items-center">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Focus on Client Retention</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-2 sm:mb-3">
                    Our entire process is designed to deliver consistent, measurable results that keep your clients happy and paying month after month. Your client retention is our primary KPI.
                  </p>
                </div>
                <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-card border border-border">
                  <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-[#D91C5C] mb-2 sm:mb-3" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#D91C5C]" />
                      <span className="text-xs sm:text-sm">No Lock-In Contracts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#D91C5C]" />
                      <span className="text-xs sm:text-sm">Month-to-Month Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#D91C5C]" />
                      <span className="text-xs sm:text-sm">Quality-Driven Retention</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-10">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white font-bold"
              >
                Partner with Australia's Best White Label SEO →
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="container mx-auto max-w-4xl relative z-10 text-center px-3 sm:px-4 md:px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
              Ready to Scale Your Agency's SEO Offering?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              Stop struggling with fulfillment and start focusing on client strategy and growth. Partner with the white label experts who guarantee quality and protect your brand.
            </p>
            <Button 
              onClick={openForm}
              size="lg"
              className="bg-white text-[#D91C5C] hover:bg-white/90 font-bold text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 shadow-glow transition-all duration-300 hover:scale-105"
            >
              Schedule Your FREE Agency Scalability Audit <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 pb-16 sm:pb-20 md:pb-24">
          <div className="container mx-auto max-w-4xl px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
                Frequently Asked Questions About White Label SEO
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-3">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  What is White Label SEO and how does it work?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  White Label SEO is a service where one agency (us) provides SEO fulfillment to another agency (you). We work entirely behind the scenes, and you rebrand our services and reports as your own. It allows you to offer a complete SEO solution to your clients without hiring and managing an in-house team.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  How do you ensure the quality of your SEO work?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Our work is managed by an Australian-based team and adheres strictly to ethical, white-hat SEO best practices. We focus on long-term, sustainable growth through high-quality content, technical excellence, and manual, high-authority link building. We never use risky or black-hat tactics that could jeopardize your client's domain.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  Will my clients know that I am using a white label partner?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  No. We operate with 100% discretion. All communication with you is confidential, and all reports and dashboards are fully white-labeled and branded with your agency's logo and colours. We are the silent, expert extension of your team.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  How do you handle client communication?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Our standard process is to communicate only with your agency's account manager. You maintain the direct client relationship. However, if you require it, we can join client calls as a "senior SEO specialist" from your team—we adapt to whatever model best suits your client relationship.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  What kind of reporting do you provide?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  We provide comprehensive monthly reports that are fully white-labeled and ready for client presentation. These reports include key metrics like keyword ranking progress, organic traffic growth, conversion tracking, and a detailed breakdown of the work completed, all presented in a clear, easy-to-understand format.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  How quickly can we onboard a new client?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Once we have a signed agreement, we can typically complete the initial technical audit and strategy development within 48-72 hours. This allows your agency to start delivering value and reporting progress to your client almost immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  Can you handle a sudden influx of new SEO clients?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Yes. Our program is designed for instant scalability. We maintain the capacity and infrastructure to handle rapid growth, allowing your agency to take on new business without worrying about fulfillment bottlenecks or compromising quality.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  Do you offer services other than general SEO?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Yes. Our white label services cover the full spectrum of SEO, including Local SEO optimization (Google Business Profile management), in-depth Technical SEO audits, content strategy, and high-authority link building.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  What are the costs involved in your white label program?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Our pricing is structured to ensure a healthy profit margin for your agency. We offer transparent, tiered pricing based on the level of fulfillment required. We view our service as a profit center for your agency, not a cost.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  Do you require a long-term contract?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  No. We operate on a month-to-month basis with no lock-in contracts. We believe our quality and reliability should be the only reason you stay with us.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  How does your white label service protect my agency's reputation?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  By guaranteeing quality, using ethical practices, and providing transparent reporting, we ensure that every result we deliver is a positive reflection on your agency. We mitigate the risk of client churn caused by poor SEO performance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  How do we get started?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  The first step is a free, confidential Agency Scalability Audit. We'll analyze your current service gaps and show you exactly how our white label program can integrate seamlessly to boost your profitability.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  Do you provide training for my sales team?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Yes. We provide your sales team with the necessary training and collateral to confidently sell our SEO services. This includes pitch decks, case studies, and a clear understanding of the value proposition.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  Can we set our own pricing for the services?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Absolutely. You set the final client price. Our goal is to provide you with a high-quality fulfillment cost that allows you to maintain a strong, profitable margin while offering competitive client pricing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15" className="border border-border rounded-lg px-3 sm:px-4 md:px-6">
                <AccordionTrigger className="text-xs sm:text-sm md:text-base font-semibold text-left">
                  What makes your link building ethical and safe?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  We only engage in manual outreach to secure natural, editorial links from reputable websites. We strictly avoid PBNs, link farms, or any form of manipulative link scheme, ensuring the long-term safety and growth of your client's domain.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default WhiteLabelSEO;