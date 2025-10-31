import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Wrench,
  TrendingUp,
  Target,
  Award,
  Search,
  MousePointerClick,
  Smartphone,
  Zap,
  Users,
  BarChart3,
  CheckCircle2,
  Shield,
  Clock,
  FileText,
  Rocket,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Plumbers = () => {
  const { openForm } = useMarketingForm();

  const metrics = [
    { number: "340%", label: "Average Revenue Growth" },
    { number: "250+", label: "Plumbing Businesses Helped" },
    { number: "95%", label: "Client Retention Rate" },
    { number: "4.2x", label: "Average Lead Quality Increase" }
  ];

  const problems = [
    {
      icon: Shield,
      title: "The Industry Trust Problem",
      description: "Homeowners are wary of plumbers due to stories of price gouging and poor workmanship. Generic ads don't overcome this trust barrier. You need educational content and social proof to prove you're different."
    },
    {
      icon: Clock,
      title: "The Emergency vs. Planned Work Dilemma",
      description: "Your business needs both emergency callouts for immediate cash flow and planned maintenance jobs for higher margins. Most marketing agencies only focus on one, leaving money on the table."
    },
    {
      icon: Target,
      title: "The Ineffective Lead Generation Treadmill",
      description: "You've tried Facebook ads, Google Ads, and lead generation services, but you're drowning in tyre-kickers who just want a quote and ghost you. You need qualified leads that convert into paying jobs."
    }
  ];

  const testimonials = [
    {
      quote: "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
      author: "Fabienne Costa",
      company: "Founder, YCL Jewels (Gold Coast)"
    },
    {
      quote: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
      author: "Liam C",
      company: "Founder, Krush Organics (Sydney)"
    },
    {
      quote: "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
      author: "Evan Tsaboukos",
      company: "Founder, Imperial Wealth (Melbourne)"
    }
  ];

  const services = [
    {
      icon: Search,
      title: "Trust-Building SEO & Content Marketing",
      description: "We position your plumbing business as the trusted local expert through educational blog content, how-to videos, and FAQ pages that answer common homeowner questions. This builds trust before they even pick up the phone.",
      features: [
        "Local SEO optimization for 'emergency plumber near me' searches",
        "Educational content library (blog posts, videos, FAQs)",
        "Google Business Profile optimization and review management",
        "Technical SEO for fast, mobile-friendly websites"
      ]
    },
    {
      icon: MousePointerClick,
      title: "Dual-Funnel PPC & Meta Ads",
      description: "We run two separate PPC funnels: one for emergency jobs (high urgency, immediate conversion) and one for planned work (nurturing campaigns). This ensures you're capturing both types of revenue.",
      features: [
        "Emergency job funnel (Google Search Ads for 'burst pipe,' 'blocked drain')",
        "Planned work funnel (Meta Ads targeting homeowners planning renovations)",
        "Call tracking and lead scoring to prioritize high-value jobs",
        "Retargeting campaigns for leads who didn't convert immediately"
      ]
    },
    {
      icon: Smartphone,
      title: "High-Converting Web Design & UX",
      description: "Your website must do more than look professional—it must build trust and convert visitors into booked jobs. We design plumbing websites with instant quote forms, click-to-call buttons, and social proof.",
      features: [
        "Mobile-first responsive design (most searches are on mobile)",
        "Instant quote request forms and emergency contact buttons",
        "Client testimonials and before/after galleries",
        "Service area pages for local SEO ranking"
      ]
    },
    {
      icon: Zap,
      title: "CRM & Call Tracking Integration",
      description: "We integrate your marketing with CRM and call tracking tools so you can see exactly which campaigns are delivering the highest-margin jobs. No more guessing about ROI.",
      features: [
        "Call tracking to attribute phone leads to specific campaigns",
        "CRM integration (HubSpot, Jobber, ServiceTitan, or custom)",
        "Automated follow-up sequences for quote requests",
        "Job value tracking and ROI reporting"
      ]
    }
  ];

  const differentiators = [
    {
      icon: Shield,
      title: "We Solve the Trust Problem",
      description: "Plumbing is a trust-based business. We build campaigns that position your business as the reliable, honest local expert through educational content, transparent pricing, and social proof."
    },
    {
      icon: Target,
      title: "Dual-Funnel Lead Generation",
      description: "We don't just focus on emergency calls. We build two separate funnels: one for emergency work (immediate cash flow) and one for planned jobs (higher margins and repeat business)."
    },
    {
      icon: BarChart3,
      title: "ROI-Focused, Not Vanity Metrics",
      description: "We track job value, not just lead volume. Our goal is to deliver high-margin jobs that convert, not just cheap clicks and tyre-kickers who waste your time."
    },
    {
      icon: Users,
      title: "Full-Service Integration",
      description: "From SEO to PPC to web design to call tracking, we manage the entire digital ecosystem. One partner, one strategy, seamless execution across all channels."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Local Market & Competitor Audit",
      description: "We audit your current digital presence, analyze your local competitors, and identify the highest-value job types and service areas for your plumbing business.",
      deliverables: "Competitive analysis, local SEO audit, market opportunity assessment, job type profitability analysis"
    },
    {
      step: "02",
      title: "Strategic Roadmap Development",
      description: "We develop a dual-funnel marketing strategy: one for emergency jobs (Google Ads) and one for planned work (Meta Ads, SEO). This ensures maximum revenue across both job types.",
      deliverables: "12-month strategic roadmap, channel recommendations, budget allocation, lead qualification framework"
    },
    {
      step: "03",
      title: "Implementation & Launch",
      description: "We execute the strategy: optimizing your website for conversions, launching dual PPC funnels, implementing call tracking, and integrating with your CRM.",
      deliverables: "Live campaigns, optimized website, CRM integration, call tracking setup, content library launch"
    },
    {
      step: "04",
      title: "Continuous Performance & ROI Optimisation",
      description: "We monitor campaign performance, test new approaches, and continuously optimize for job value and ROI. We focus on delivering high-margin jobs, not just lead volume.",
      deliverables: "Monthly performance reports, quarterly strategy reviews, ongoing content creation, A/B testing, ROI analysis"
    }
  ];

  const whyChoose = [
    {
      icon: FileText,
      title: "Proven Track Record in Trades Marketing",
      content: "We've worked with over 250 trades businesses, delivering an average revenue increase of 340%. We understand the unique challenges of marketing plumbing services in a crowded, competitive market where trust is everything."
    },
    {
      icon: CheckCircle2,
      title: "We Understand the Plumbing Business Model",
      content: "We know the difference between emergency callouts (low margin, high volume) and planned installations (high margin, longer sales cycle). Our dual-funnel strategy ensures you're capturing both types of revenue, maximizing your overall profitability."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Strategy",
      content: "We use advanced call tracking and CRM integration to track which campaigns deliver the highest-margin jobs. Our strategies are built on evidence, not assumptions, ensuring maximum ROI for your marketing spend."
    },
    {
      icon: Rocket,
      title: "Full-Service, Integrated Approach",
      content: "Rather than managing multiple vendors for SEO, PPC, web design, and call tracking, you get one strategic partner who handles everything. This integrated approach ensures consistency, efficiency, and better results across all channels."
    }
  ];

  const relatedServices = [
    { name: "SEO Agency", url: "/seo-agency" },
    { name: "PPC Agency", url: "/ppc-agency" },
    { name: "Meta Ads Agency", url: "/meta-ads-agency" },
    { name: "Web Design Agency", url: "/web-design-agency" },
    { name: "Email Marketing Agency", url: "/email-marketing-agency" }
  ];

  const relatedLocations = [
    { name: "SEO Sydney", url: "/seo-sydney" },
    { name: "Google Ads Melbourne", url: "/google-ads-melbourne" },
    { name: "Facebook Ads Hobart", url: "/facebook-ads-hobart" },
    { name: "Web Design Hobart", url: "/web-design-hobart" }
  ];

  const relatedIndustries = [
    { name: "Cosmetic Surgeons", url: "/industries/cosmetic-surgeons" },
    { name: "Real Estate Agents", url: "/industries/real-estate-agents" },
    { name: "Personal Injury Lawyers", url: "/industries/personal-injury-lawyers" },
    { name: "Cosmetic Clinics", url: "/industries/cosmetic-clinics" },
    { name: "Insurance Agents", url: "/industries/insurance-agents" }
  ];

  const faqs = [
    {
      question: "What is the biggest challenge in digital marketing for Plumbers?",
      answer: "The biggest challenge is the industry's trust problem. Homeowners are wary of being overcharged, so our strategy focuses on building trust through educational content, transparent pricing, and social proof."
    },
    {
      question: "How does your SEO strategy get more plumbing jobs?",
      answer: "We focus on local SEO and high-intent keywords like 'emergency plumber near me.' By optimizing your Google Business Profile and creating authoritative content, we ensure you're the first plumber homeowners find when they need help."
    },
    {
      question: "Is it better to use SEO or Google Ads for a plumbing business?",
      answer: "A combination is best. Google Ads are perfect for capturing immediate, emergency jobs. SEO is a long-term strategy for building trust and generating a consistent flow of leads for both emergency and planned work."
    },
    {
      question: "What is the 'dual-funnel' strategy for plumbers?",
      answer: "We run two separate marketing funnels: one targeting emergency jobs (burst pipes, blocked drains) through Google Search Ads, and one targeting planned work (bathroom renovations, water heater installations) through Meta Ads and SEO. This maximizes revenue across both job types."
    },
    {
      question: "How do you handle call tracking for plumbing businesses?",
      answer: "We implement advanced call tracking that assigns unique phone numbers to each marketing campaign. This allows us to track which ads, keywords, or channels are generating phone calls, and we can even track job value to calculate true ROI."
    },
    {
      question: "Do you work with small plumbing businesses or only large companies?",
      answer: "We work with plumbing businesses of all sizes, from one-person operations to multi-van franchises. Our strategies are scalable and designed to deliver maximum impact regardless of your current size."
    },
    {
      question: "How do you ensure our marketing attracts high-margin jobs, not just cheap quotes?",
      answer: "We use precision targeting and lead qualification. In PPC, we target high-intent keywords and use demographic filters. In SEO, we create content that attracts homeowners planning larger projects. Our CRM integration helps prioritize leads based on job value."
    },
    {
      question: "What makes plumbing marketing different from other industries?",
      answer: "Plumbing marketing requires overcoming the trust barrier, targeting two distinct buyer types (emergency vs. planned), and managing a mix of online and phone-based leads. Generic marketing approaches don't work for these unique challenges."
    },
    {
      question: "Can you help us with our Google Business Profile and reviews?",
      answer: "Absolutely. We optimize your Google Business Profile for maximum visibility in local search and 'near me' queries. We also implement review generation campaigns to build social proof and improve your ranking."
    },
    {
      question: "How long does it take to see results from SEO for plumbers?",
      answer: "SEO is a long-term strategy. You'll typically see initial ranking improvements within 2-3 months, with significant traffic and lead growth by 4-6 months. However, PPC campaigns can start delivering emergency job leads immediately."
    },
    {
      question: "Do you handle content creation for plumbing businesses?",
      answer: "Yes. Our content team creates educational blog posts, how-to videos, and FAQ pages that answer common homeowner plumbing questions. This builds trust and positions your business as the local expert."
    },
    {
      question: "How do you optimize for 'emergency plumber near me' searches?",
      answer: "We implement comprehensive local SEO strategies including Google Business Profile optimization, local citation building, location-specific landing pages, and mobile-first web design. We also run Google Search Ads targeting emergency keywords for immediate visibility."
    },
    {
      question: "What's the typical ROI for plumbing business digital marketing?",
      answer: "Our clients typically see a 4-7x ROI within the first 12 months. However, ROI varies based on your service area, average job value, and market competition. We provide detailed attribution reports so you can track every dollar spent and earned."
    },
    {
      question: "Can you integrate with our existing plumbing software (Jobber, ServiceTitan, etc.)?",
      answer: "Absolutely. We have experience integrating with Jobber, ServiceTitan, Housecall Pro, and other plumbing-specific CRMs. This ensures every lead is tracked, scored, and nurtured appropriately."
    },
    {
      question: "Do you work with plumbing businesses outside major cities?",
      answer: "Yes. We work with plumbing businesses across Australia, from Sydney and Melbourne to regional areas. Our digital strategies are effective regardless of location."
    },
    {
      question: "How do you handle seasonal fluctuations in plumbing work?",
      answer: "We adjust campaign budgets and targeting throughout the year to match seasonal demand. For example, we increase emergency drain clearing ads before winter and water heater ads before summer, maximizing ROI year-round."
    },
    {
      question: "What's your pricing structure?",
      answer: "Our pricing is customized based on your business size, service area, and marketing goals. We offer transparent, value-based pricing with no long-term lock-in contracts. Contact us for a tailored proposal."
    },
    {
      question: "Can you help with video marketing for plumbing businesses?",
      answer: "Yes. We create how-to videos, service explainer videos, and customer testimonial videos. Video content builds trust, improves SEO, and performs exceptionally well in Meta Ads campaigns."
    },
    {
      question: "How do you handle negative reviews for plumbing businesses?",
      answer: "We implement reputation management strategies that encourage happy customers to leave reviews while providing you with scripts and processes to professionally respond to negative feedback, minimizing its impact on your business."
    },
    {
      question: "What sets Odin Digital apart from other marketing agencies?",
      answer: "We combine deep plumbing industry knowledge with proven digital marketing expertise. We're not generalists trying to learn your business—we already understand the trust challenges, dual revenue streams, and local competition. This expertise delivers better results, faster."
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
        "description": "Performance-focused digital marketing agency specializing in high-trust, high-ROI client acquisition for Plumbers and Plumbing Businesses in Australia.",
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
        "@id": "https://growth-conduit-central.lovable.app/industries/plumbers#webpage",
        "url": "https://growth-conduit-central.lovable.app/industries/plumbers",
        "name": "Plumbers Marketing National Industry Hub",
        "inLanguage": "en-AU",
        "description": "Comprehensive digital marketing strategies for Plumbers, focusing on trust-building, dual-funnel lead generation for emergency and planned work, SEO, and PPC across Australia.",
        "about": {
          "@type": "Thing",
          "name": "Plumbers Marketing"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://growth-conduit-central.lovable.app/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Industries",
              "item": "https://growth-conduit-central.lovable.app/industries"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Plumbers Marketing"
            }
          ]
        }
      },
      {
        "@type": "Service",
        "serviceType": "Digital Marketing for Plumbers",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": "Australia",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Plumbers Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Trust-Building SEO & Content Marketing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Dual-Funnel PPC & Meta Ads"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "High-Converting Web Design & UX"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "CRM & Call Tracking Integration"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
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
        "itemReviewed": {
          "@type": "Service",
          "name": "Odin Digital - Digital Marketing for Plumbers"
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
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Plumbers Marketing Agency | High-Trust Lead Generation & SEO | Odin Digital</title>
        <meta name="description" content="The leading Plumbers Marketing Agency in Australia. We build high-trust digital systems to deliver qualified, high-margin jobs. No lock-in contracts." />
        <link rel="canonical" href="https://growth-conduit-central.lovable.app/industries/plumbers" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
          {/* Floating Circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/3 w-40 h-40 md:w-64 md:h-64 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
          </div>

          <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 mt-12 md:mt-8 text-foreground">
                Plumbers Marketing
              </h1>
              <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-foreground/80 leading-relaxed max-w-3xl mx-auto px-2">
                Your plumbing business is built on trust and reliability. You help homeowners solve urgent problems and maintain their most valuable asset—their home. But trust alone doesn't fill your schedule with high-margin jobs. You need a marketing partner who understands the unique challenges plumbing businesses face—overcoming the industry trust problem, generating qualified leads for both emergency callouts and planned installations, and competing against larger franchises with massive marketing budgets. At Odin Digital, we've helped over 250 plumbing businesses across Australia attract more qualified jobs, build trust in their local market, and grow revenue by an average of 340%.
              </p>
              <Button size="lg" onClick={openForm} className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg w-full sm:w-auto">
                Schedule Free Strategy Session →
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-8 md:py-10 lg:py-12 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-3 sm:p-4 md:p-6 text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-primary mb-1 md:mb-2">
                    {metric.number}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground leading-tight">
                    {metric.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-10 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-3 md:mb-4 px-2">
                The Plumbing Marketing Challenges We Solve
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                Plumbing is a trust-based business with unique marketing challenges. Generic agencies don't understand your industry. We do.
              </p>
            </div>

            <div className="grid gap-4 md:gap-6">
              {problems.map((problem, index) => (
                <Card key={index} className="p-4 md:p-6 border-2 hover:border-primary/50 transition-colors">
                  <problem.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3" />
                  <h3 className="text-lg md:text-xl font-bold mb-2">{problem.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{problem.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-3 px-2">
                What Our Trades Clients Say
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground px-2">
                We partner with ambitious trades businesses to deliver measurable growth.
              </p>
            </div>

            <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-4 md:p-6">
                  <div className="flex justify-center mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <blockquote className="text-sm md:text-base text-charcoal mb-4 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-xs md:text-sm text-muted-foreground not-italic">
                    <strong>{testimonial.author}</strong>, {testimonial.company}
                  </cite>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3 sm:mb-4">
                Our Plumbers Marketing Services
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Four core pillars designed specifically for plumbing businesses
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6">
              {services.map((service, index) => (
                <Card key={index} className="p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3">{service.description}</p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-12 sm:py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3 sm:mb-4">
                Why Plumbing Businesses Choose Odin Digital
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {differentiators.map((item, index) => (
                <Card key={index} className="p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3 sm:mb-4">
                Our Proven Process
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to building your digital lead generation system
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {process.map((step, index) => (
                <Card key={index} className="p-4 sm:p-6 flex flex-col">
                  <div className="text-4xl sm:text-5xl font-black text-primary/20 mb-3">{step.step}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3">{step.description}</p>
                  <div className="pt-3 border-t border-muted mt-auto">
                    <p className="text-xs font-semibold text-primary mb-1.5">You Get:</p>
                    <p className="text-xs text-muted-foreground">{step.deliverables}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Expanded Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-charcoal to-accent text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Why Choose Odin Digital for Your Plumbing Business?
              </h2>
            </div>

            <div className="grid gap-6 sm:gap-8">
              {whyChoose.map((item, index) => (
                <div key={index} className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-10 md:py-12 lg:py-16 bg-gradient-to-r from-primary to-secondary text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-2">
              Ready to Grow Your Plumbing Business?
            </h2>
            <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed px-2">
              Stop wasting money on tyre-kickers. Start attracting high-margin jobs with a high-trust digital system that delivers qualified leads directly to your plumbing business. Schedule a free strategy session today.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-sm md:text-base px-6 md:px-8 py-4 md:py-5 bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
              onClick={openForm}
            >
              Schedule Free Strategy Session
            </Button>
          </div>
        </section>

        {/* Related Services & Locations */}
        <section className="py-12 sm:py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Related Services</h3>
                <ul className="space-y-2">
                  {relatedServices.map((service, index) => (
                    <li key={index}>
                      <Link to={service.url} className="text-primary hover:underline text-sm">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Service Locations</h3>
                <ul className="space-y-2">
                  {relatedLocations.map((location, index) => (
                    <li key={index}>
                      <Link to={location.url} className="text-primary hover:underline text-sm">
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Other Industries</h3>
                <ul className="space-y-2">
                  {relatedIndustries.map((industry, index) => (
                    <li key={index}>
                      <Link to={industry.url} className="text-primary hover:underline text-sm">
                        {industry.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 md:py-12 lg:py-16 pb-24 md:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-3 md:mb-4 px-2">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-3 md:px-4 lg:px-6">
                  <AccordionTrigger className="text-left text-sm md:text-base font-semibold hover:no-underline py-3 md:py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-muted-foreground pb-3 md:pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-3 md:p-4 bg-white border-t shadow-lg md:hidden z-50">
          <Button 
            className="w-full bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-sm md:text-base"
            size="lg"
            onClick={openForm}
          >
            Get Free Strategy Session
          </Button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Plumbers;