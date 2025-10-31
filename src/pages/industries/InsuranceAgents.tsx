import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Target, 
  TrendingUp, 
  Users,
  CheckCircle2,
  Award,
  Search,
  MousePointerClick,
  BarChart3,
  Mail,
  FileText,
  Zap,
  Lock,
  Lightbulb,
  Rocket,
  UserCheck,
  LineChart,
  Smartphone,
  MessageSquare,
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

const InsuranceAgents = () => {
  const { openForm } = useMarketingForm();

  const metrics = [
    { number: "340%", label: "Average Revenue Growth" },
    { number: "250+", label: "Insurance Agencies Helped" },
    { number: "95%", label: "Client Retention Rate" },
    { number: "2.8x", label: "Average Lead Quality Increase" }
  ];

  const problems = [
    {
      icon: Lock,
      title: "The Compliance Bottleneck",
      description: "Every piece of marketing content must be legally reviewed, slowing campaign deployment and stifling creativity. Generic compliance-agnostic agencies can't navigate ASIC and insurance regulations."
    },
    {
      icon: TrendingUp,
      title: "The Cold Lead Treadmill",
      description: "Buying leads is expensive and produces low-quality prospects who aren't ready to convert. You're paying for volume, not value, and your conversion rates suffer."
    },
    {
      icon: Lightbulb,
      title: "The Intangible Product Problem",
      description: "Insurance is complex and intangible. Generic ads and landing pages don't build the trust needed. You need educational content that positions your agency as an authority before the sales conversation."
    }
  ];

  const services = [
    {
      icon: Search,
      title: "Compliance-First SEO & Content Marketing",
      description: "We build your agency's digital authority through educational content that addresses complex policy questions and consumer concerns. Every article is compliance-checked and optimised for search visibility.",
      features: [
        "Long-form educational content (life insurance guides, policy comparison articles)",
        "Local SEO optimisation for 'insurance broker near me' searches",
        "Compliance-reviewed content that builds trust and authority",
        "Technical SEO for insurance-specific queries"
      ]
    },
    {
      icon: MousePointerClick,
      title: "Hyper-Targeted PPC & Meta Ads",
      description: "We move beyond generic insurance ads to target specific life events and high-intent signals. Our campaigns deliver leads that are ready to quote, not just browse.",
      features: [
        "Google Ads campaigns targeting life event triggers (marriage, home purchase, new baby)",
        "Meta Ads focused on specific demographics and behaviours",
        "Retargeting campaigns for policy renewal and upsell opportunities",
        "Lead quality scoring and CRM integration"
      ]
    },
    {
      icon: Smartphone,
      title: "High-Converting Web Design & UX",
      description: "Your website must do more than look good—it must educate, build trust, and convert. We design insurance-specific websites that guide prospects from awareness to quote request.",
      features: [
        "Trust-building design elements (client testimonials, credentials, awards)",
        "Interactive quote calculators and comparison tools",
        "Mobile-optimised responsive design",
        "Conversion-optimised landing pages for each insurance product"
      ]
    },
    {
      icon: Zap,
      title: "CRM & Automation Integration",
      description: "We integrate your marketing with your CRM and automation tools to ensure every lead is tracked, nurtured, and optimised. No lead falls through the cracks.",
      features: [
        "HubSpot, Salesforce, or industry-specific CRM integration",
        "Automated email nurture sequences for different insurance products",
        "Lead scoring based on engagement and intent signals",
        "Pipeline reporting and attribution tracking"
      ]
    }
  ];

  const differentiators = [
    {
      icon: Shield,
      title: "Compliance-First Strategy",
      description: "We build every campaign with ASIC and industry regulations front-of-mind. Our team stays current with regulatory changes and ensures all content is legally sound before launch."
    },
    {
      icon: Award,
      title: "Focus on Trust and Authority",
      description: "Insurance is a trust-based business. We don't just drive traffic—we build your digital authority through educational content, social proof, and strategic positioning that makes prospects choose you."
    },
    {
      icon: Target,
      title: "Revenue, Not Just Leads",
      description: "We optimise for lead quality and conversion rate, not just lead volume. Our campaigns are designed to deliver prospects who are ready to quote and convert, maximising your ROI."
    },
    {
      icon: Users,
      title: "Full-Service Integration",
      description: "From SEO to PPC to web design to email automation, we manage the entire digital ecosystem. One partner, one strategy, seamless execution across all channels."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Regulatory & Market Audit",
      description: "We audit your current digital presence, review compliance requirements, and identify your highest-value insurance product segments and target markets.",
      deliverables: "Compliance audit report, competitive analysis, market opportunity assessment"
    },
    {
      step: "02",
      title: "Strategic Roadmap Development",
      description: "We develop a comprehensive digital marketing strategy tailored to your insurance products, target demographics, and business goals.",
      deliverables: "12-month strategic roadmap, channel recommendations, budget allocation, compliance framework"
    },
    {
      step: "03",
      title: "Implementation & Launch",
      description: "We execute the strategy: building campaigns, creating content, optimising your website, and integrating with your CRM.",
      deliverables: "Live campaigns, optimised website, content library, CRM integration, tracking setup"
    },
    {
      step: "04",
      title: "Continuous Compliance & Performance Optimisation",
      description: "We monitor campaign performance, test new approaches, and ensure ongoing compliance with regulatory changes.",
      deliverables: "Monthly performance reports, quarterly strategy reviews, ongoing content creation, compliance updates"
    }
  ];

  const whyChoose = [
    {
      icon: FileText,
      title: "Proven Track Record in Insurance Marketing",
      content: "We've worked with over 250 insurance agencies and brokerages, delivering an average revenue increase of 340%. We understand the unique challenges of marketing intangible products in a highly regulated industry."
    },
    {
      icon: CheckCircle2,
      title: "Compliance Expertise You Can Trust",
      content: "Our team stays current with ASIC regulations, insurance industry guidelines, and advertising standards. Every campaign is compliance-checked before launch, giving you peace of mind and protecting your agency's reputation."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Strategy",
      content: "We use advanced analytics and attribution modelling to track which channels and campaigns deliver the highest-quality leads. Our strategies are built on evidence, not assumptions, ensuring maximum ROI for your marketing spend."
    },
    {
      icon: Rocket,
      title: "Full-Service, Integrated Approach",
      content: "Rather than managing multiple vendors, you get one strategic partner who handles SEO, PPC, web design, content, and automation. This integrated approach ensures consistency, efficiency, and better results across all channels."
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
    { name: "Cosmetic Clinics", url: "/industries/cosmetic-clinics" }
  ];

  const faqs = [
    {
      question: "What is the biggest challenge in digital marketing for Insurance Agents?",
      answer: "The biggest challenge is the compliance bottleneck. Every piece of marketing content must be legally sound, which slows down campaign deployment and stifles creativity. Our compliance-first strategy is designed to navigate these regulations proactively, ensuring your campaigns are effective and legally safe."
    },
    {
      question: "How does your SEO strategy build trust for an insurance agency?",
      answer: "We use SEO to establish your agency as an educational authority. By creating long-form content that answers complex policy questions and addresses consumer concerns, we build trust before the sales conversation. This is far more effective than simply ranking for transactional keywords."
    },
    {
      question: "Are paid ads (PPC/Meta Ads) still effective for insurance leads?",
      answer: "Yes, but only when done correctly. We move beyond generic ads and use hyper-targeted campaigns focused on specific life events and high-intent signals. This delivers leads that are ready to quote, dramatically improving your conversion rate and reducing wasted ad spend."
    },
    {
      question: "How do you ensure compliance with ASIC regulations?",
      answer: "Our team includes compliance specialists who stay current with ASIC regulations and insurance industry guidelines. Every piece of content is reviewed before publication, and we maintain a compliance framework that's updated quarterly to reflect regulatory changes."
    },
    {
      question: "What types of insurance agencies do you work with?",
      answer: "We work with independent insurance brokers, multi-line insurance agencies, life insurance specialists, health insurance brokers, commercial insurance agencies, and insurance franchise networks across Australia."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy. You'll typically see initial ranking improvements within 3-4 months, with significant traffic and lead growth by 6-9 months. However, the authority you build compounds over time, creating sustainable lead generation."
    },
    {
      question: "What's your approach to generating life insurance leads?",
      answer: "We target life event triggers (marriage, home purchase, new baby) and create educational content that addresses common concerns (cost, coverage amount, policy types). This positions your agency as a trusted advisor rather than a pushy salesperson."
    },
    {
      question: "Can you integrate with our existing CRM?",
      answer: "Absolutely. We have experience integrating with HubSpot, Salesforce, and industry-specific CRMs like Applied Epic and Vertafore. This ensures every lead is tracked, scored, and nurtured appropriately."
    },
    {
      question: "How do you measure the quality of leads, not just quantity?",
      answer: "We implement lead scoring based on engagement signals (content consumed, pages visited, form fields completed) and demographic fit. We also track conversion rate from lead to quote to policy, allowing us to optimise for the highest-value prospects."
    },
    {
      question: "What makes insurance marketing different from other industries?",
      answer: "Insurance is intangible, complex, and heavily regulated. Generic marketing approaches don't work. You need educational content that builds trust, compliance-first campaigns, and a long-term nurturing strategy to convert prospects into clients."
    },
    {
      question: "Do you handle content creation in-house?",
      answer: "Yes. Our content team includes writers with insurance industry experience who understand policy details, coverage nuances, and consumer concerns. All content is compliance-reviewed before publication."
    },
    {
      question: "How do you optimise for local 'insurance broker near me' searches?",
      answer: "We implement comprehensive local SEO strategies including Google Business Profile optimisation, local content creation, citation building, and location-specific landing pages. This ensures you appear prominently for high-intent local searches."
    },
    {
      question: "What's the typical ROI for insurance agency digital marketing?",
      answer: "Our clients typically see a 3-5x ROI within the first 12 months. However, ROI varies based on your product mix, average policy value, and market competition. We provide detailed attribution reports so you can track every dollar spent and earned."
    },
    {
      question: "Can you help with policy renewal marketing?",
      answer: "Absolutely. We develop automated email campaigns and retargeting ads to engage existing clients at renewal time, increasing retention rates and creating opportunities for upsells and cross-sells."
    },
    {
      question: "Do you work with insurance agencies outside major cities?",
      answer: "Yes. We work with insurance agencies across Australia, from Sydney and Melbourne to regional areas. Our digital strategies are effective regardless of location."
    },
    {
      question: "How do you stay current with changing regulations?",
      answer: "Our compliance team monitors ASIC updates, industry publications, and regulatory changes. We update our compliance framework quarterly and proactively adjust client campaigns to maintain full compliance."
    },
    {
      question: "What's your pricing structure?",
      answer: "Our pricing is customised based on your business size, target markets, and service needs. We offer transparent, value-based pricing with no long-term lock-in contracts. Contact us for a tailored proposal."
    },
    {
      question: "Can you help with social media marketing for insurance?",
      answer: "Yes. We develop compliant social media strategies focused on education, community engagement, and targeted advertising. All social content is compliance-reviewed to ensure it meets regulatory standards."
    },
    {
      question: "How do you handle insurance product comparisons in marketing?",
      answer: "We create comparison content that's factual, balanced, and compliant with ASIC guidelines. This educational approach builds trust and positions your agency as an objective advisor rather than a biased salesperson."
    },
    {
      question: "What sets Odin Digital apart from other marketing agencies?",
      answer: "We combine deep insurance industry knowledge with proven digital marketing expertise. We're not generalists trying to learn your business—we already understand the compliance challenges, consumer psychology, and sales cycles unique to insurance. This expertise delivers better results, faster."
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
        "description": "Performance-focused digital marketing agency specialising in compliant, high-ROI client acquisition for Insurance Agents and Brokerages in Australia.",
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
        "@id": "https://growth-conduit-central.lovable.app/industries/insurance-agents#webpage",
        "url": "https://growth-conduit-central.lovable.app/industries/insurance-agents",
        "name": "Insurance Agents Marketing National Industry Hub",
        "inLanguage": "en-AU",
        "description": "Comprehensive digital marketing strategies for Insurance Agents, focusing on compliance, trust-building, SEO, PPC, and lead generation across Australia.",
        "about": {
          "@type": "Thing",
          "name": "Insurance Agents Marketing"
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
              "name": "Insurance Agents Marketing"
            }
          ]
        }
      },
      {
        "@type": "Service",
        "serviceType": "Digital Marketing for Insurance Agents",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": "Australia",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Insurance Agent Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Compliance-First SEO & Content Marketing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hyper-Targeted PPC & Meta Ads"
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
                "name": "CRM & Automation Integration"
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
          "name": "Odin Digital - Digital Marketing for Insurance Agents"
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
        <title>Insurance Agents Marketing Agency | Compliant Lead Generation & SEO | Odin Digital</title>
        <meta name="description" content="The leading Insurance Agents Marketing Agency in Australia. We build compliant, high-trust digital systems to deliver qualified, ready-to-quote clients. No lock-in contracts." />
        <meta name="keywords" content="insurance agents marketing, ecommerce agency sydney, digital agency for ecommerce, ecommerce marketing agency, digital marketing agency shopify, ecommerce company sydney" />
        <link rel="canonical" href="https://growth-conduit-central.lovable.app/industries/insurance-agents" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden min-h-[70vh] flex items-center bg-white decorative-circles">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          </div>

          {/* Floating decorative elements */}
          <div className="absolute top-20 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float"></div>
          <div className="absolute bottom-32 left-16 w-12 h-12 bg-accent/10 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          
          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 py-20 sm:py-24 lg:py-32 text-center flex flex-col items-center justify-center -ml-4">
            <nav className="mb-8 text-sm" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center justify-center gap-2 text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><ArrowRight className="w-4 h-4" /></li>
                <li><Link to="/industries" className="hover:text-primary transition-colors">Industries</Link></li>
                <li><ArrowRight className="w-4 h-4" /></li>
                <li className="text-foreground font-medium text-center">Insurance Agents Marketing</li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-charcoal leading-tight mb-6">
                Insurance Agents Marketing
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground/90 mb-8 leading-relaxed">
                Stop Buying Expensive, Cold Leads. We Build High-Trust Digital Systems That Deliver Qualified, Ready-to-Quote Clients Directly to Your Agency.
              </p>
              
              <div className="flex justify-center">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 shadow-glow bg-[#D91C5C] hover:bg-[#D91C5C]/90"
                  onClick={openForm}
                >
                  Schedule Free Strategy Session
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-10 sm:py-12 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-2">
                    {metric.number}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3 sm:mb-4">
                The Insurance Marketing Challenge
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Insurance marketing is different. Generic agencies don't understand your compliance requirements, target audience, or sales cycle.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {problems.map((problem, index) => (
                <Card key={index} className="p-4 sm:p-6 border-2 hover:border-primary/50 transition-colors">
                  <problem.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{problem.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{problem.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <div className="mb-6 sm:mb-8">
              <div className="flex justify-center mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Award key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
            <blockquote className="text-lg sm:text-xl md:text-2xl font-semibold text-charcoal mb-4 sm:mb-6 leading-relaxed">
              "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month."
            </blockquote>
            <cite className="text-sm sm:text-base text-muted-foreground not-italic">
              <strong>Evan Tsaboukos</strong>, Imperial Wealth
            </cite>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3 sm:mb-4">
                Our Insurance Marketing Services
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Four core pillars designed specifically for insurance agencies and brokerages
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
                Why Insurance Agencies Choose Odin Digital
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {differentiators.map((item, index) => (
                <Card key={index} className="p-4 sm:p-6 text-center hover:shadow-xl transition-shadow">
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3" />
                  <h3 className="text-base sm:text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
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
                A systematic approach to building your digital authority and lead generation system
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {process.map((step, index) => (
                <Card key={index} className="p-4 sm:p-6 relative flex flex-col">
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
                Why Choose Odin Digital for Your Insurance Agency?
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
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary to-secondary text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Grow Your Insurance Agency?
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Stop buying cold leads. Start building a high-trust digital system that delivers qualified, ready-to-quote clients directly to your agency. Schedule a free strategy session today.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 bg-white text-primary hover:bg-white/90"
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
        <section className="py-12 sm:py-16 lg:py-20 pb-28 md:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3 sm:mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 sm:px-6">
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline py-3 sm:py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-muted-foreground pb-3 sm:pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg md:hidden z-50">
          <Button 
            className="w-full bg-[#D91C5C] hover:bg-[#D91C5C]/90"
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

export default InsuranceAgents;