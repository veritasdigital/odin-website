import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Building2,
  TrendingUp,
  Target,
  Award,
  Search,
  MousePointerClick,
  Palette,
  Zap,
  Users,
  BarChart3,
  CheckCircle2,
  Lightbulb,
  Shield,
  FileText,
  Rocket,
  LineChart,
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

const ArchitectureFirms = () => {
  const { openForm } = useMarketingForm();

  const metrics = [
    { number: "$574M+", label: "Verified Client Revenue" },
    { number: "540%", label: "Average ROI on Ad Spend" },
    { number: "95%", label: "Client Retention Rate" },
    { number: "283+", label: "Successful Campaigns Delivered" }
  ];

  const painPoints = [
    {
      icon: Users,
      title: "The Unpredictable Referral Trap",
      description: "Your firm's growth is tied to word-of-mouth, which is slow, unpredictable, and doesn't allow you to choose your projects. You need a predictable, scalable system to acquire high-value clients."
    },
    {
      icon: Zap,
      title: "The Portfolio Problem (Slow Websites)",
      description: "Your website is a beautiful, image-heavy portfolio that is painfully slow, not optimized for mobile, and completely invisible on Google. It's a stunning brochure, but a terrible lead-generation tool."
    },
    {
      icon: Target,
      title: "The Low-Quality Lead Drain",
      description: "You've tried generic lead generation services that deliver low-budget, time-wasting inquiries. You need clients who are pre-qualified, understand the value of design, and are ready to commit to a substantial budget."
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
      title: "Authority-Building SEO for Architects",
      description: "Your firm needs to be found by clients searching for specific, high-end projects. Our SEO strategy focuses on long-tail, high-intent keywords like 'architect for sustainable luxury home' or 'commercial architect for heritage restoration.' We ensure your portfolio pages rank, positioning your firm as the undeniable authority in your specialization."
    },
    {
      icon: MousePointerClick,
      title: "Precision PPC & Google Ads",
      description: "We eliminate wasted ad spend by targeting clients who are actively ready to hire. We bid on high-intent keywords like 'hire residential architect [city]' and use advanced demographic and income targeting to ensure your ads only reach high-net-worth individuals and serious commercial developers."
    },
    {
      icon: Palette,
      title: "Visual Storytelling with Meta Ads",
      description: "Architecture is visual. We leverage the power of Facebook and Instagram to showcase your most stunning projects to a hyper-targeted audience. Our Meta Ads strategy focuses on aspirational visual storytelling and retargeting campaigns to keep your firm top-of-mind for clients with long decision cycles."
    },
    {
      icon: Building2,
      title: "Conversion-Focused Web Design",
      description: "We design websites that are a perfect balance of aesthetic excellence and technical performance. Your site will be fast, mobile-responsive, and structured to convert visitors into qualified leads, all while showcasing your portfolio in the best possible light. We ensure your stunning visuals load instantly and your user experience guides high-value clients to your contact form."
    }
  ];

  const whyChoose = [
    {
      icon: Target,
      title: "Quality Over Quantity",
      description: "We focus on attracting the right client—the one with the budget and vision to match your firm's expertise. Our strategies are designed to filter out low-quality inquiries."
    },
    {
      icon: Zap,
      title: "Visual Performance Experts",
      description: "We specialize in optimizing image-heavy websites for speed and SEO. Your beautiful portfolio will load instantly, satisfying both your design standards and Google's performance metrics."
    },
    {
      icon: Shield,
      title: "No Lock-In Contracts",
      description: "We believe our results should keep you with us, not a binding contract. Our 95% client retention rate proves our commitment to long-term, high-value partnerships."
    },
    {
      icon: BarChart3,
      title: "Integrated Strategy",
      description: "We provide a single point of contact for all your digital needs, ensuring your SEO, PPC, Social, and Web Design efforts are perfectly aligned and working towards a single goal: your ROI."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Deep Dive & Blueprint",
      description: "We conduct a comprehensive audit of your current digital presence and your firm's unique value proposition. We then create a detailed digital marketing blueprint tailored to your target client profile and project type."
    },
    {
      step: "02",
      title: "Foundation & Execution",
      description: "We implement the strategy, optimizing your website (the foundation) for speed and conversion, and launching targeted campaigns across SEO, PPC, and Meta Ads."
    },
    {
      step: "03",
      title: "Refinement & Reporting",
      description: "We continuously monitor, test, and refine all campaigns. We provide transparent reports focused on the metrics that matter most to your firm: qualified leads, project value, and ROI."
    },
    {
      step: "04",
      title: "Predictable Growth & Scaling",
      description: "Once we establish a profitable and predictable system for client acquisition, we work with you to strategically scale your marketing efforts to meet your firm's growth targets."
    }
  ];

  const whyPartner = [
    {
      icon: TrendingUp,
      title: "Results-Driven Approach",
      content: "Our entire process is geared toward achieving a positive ROI for your firm. We don't chase vanity metrics; we chase qualified leads and signed projects."
    },
    {
      icon: Rocket,
      title: "Cutting-Edge Technology",
      content: "We leverage the latest in marketing technology and AI-powered optimization to ensure your campaigns are efficient, targeted, and ahead of the curve. This includes using AI tools for audience segmentation, ad copy testing, and predictive analytics to find your next high-net-worth client."
    },
    {
      icon: FileText,
      title: "Direct Response Copywriting",
      content: "Our team writes copy that compels action, using a problem-agitation-solution framework that speaks directly to the needs of commercial developers and high-end residential clients."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      content: "With over $574M+ in verified client revenue and a 95% retention rate, we have the experience and results to back up our claims."
    }
  ];

  const faqs = [
    {
      question: "How much should an architecture firm spend on digital marketing?",
      answer: "The marketing budget for an architecture firm is highly dependent on its size, target market (residential vs. commercial), and growth goals. As a general rule, firms focused on growth should allocate 3% to 6% of their gross revenue to marketing. We tailor our packages to ensure a positive ROI, making your marketing spend an investment, not an expense."
    },
    {
      question: "Why is my beautiful, image-heavy website not generating leads?",
      answer: "While aesthetics are crucial, many architecture websites are slow, not mobile-optimized, and lack the technical SEO structure needed to rank on Google. We specialize in balancing stunning visuals with lightning-fast performance and conversion optimization to turn your portfolio into a lead-generating asset."
    },
    {
      question: "Is SEO or PPC better for architecture firms?",
      answer: "Both are essential. SEO builds long-term authority and organic traffic for informational searches (e.g., 'sustainable architecture design'). PPC (Google Ads) provides immediate visibility for high-intent, commercial searches (e.g., 'hire residential architect Sydney'). We recommend an integrated strategy using both for maximum impact."
    },
    {
      question: "How long does it take to see results from SEO for architects?",
      answer: "Due to the high-value, long-cycle nature of architectural projects, significant SEO results typically appear within 6 to 12 months. However, we focus on quick wins through technical SEO and high-intent keyword ranking to start generating qualified leads sooner."
    },
    {
      question: "How can social media marketing help my architecture firm?",
      answer: "Social media (especially Instagram and LinkedIn) is crucial for visual storytelling and authority building. We use Meta Ads to showcase your best projects to hyper-targeted audiences (e.g., property developers, high-net-worth individuals) and build brand recognition over the long decision cycle."
    },
    {
      question: "Do you only work with large, established firms?",
      answer: "No. We work with firms of all sizes, from boutique residential practices to large commercial firms. Our strategies are scalable and designed to deliver maximum impact for firms focused on growth and high-value projects."
    },
    {
      question: "How do you ensure our marketing attracts high-budget clients?",
      answer: "We use precision targeting across all channels. In SEO, we target long-tail keywords that indicate a serious commitment. In PPC, we use advanced demographic and income targeting to filter out low-budget inquiries, ensuring your leads are pre-qualified."
    },
    {
      question: "What is the biggest mistake architecture firms make in marketing?",
      answer: "The biggest mistake is treating marketing as a sporadic, creative exercise rather than a precise, data-driven system. They rely on 'hope' marketing (unpredictable referrals) instead of a predictable, scalable client acquisition system."
    },
    {
      question: "Can you help us with our firm's branding and positioning?",
      answer: "While we are a digital marketing agency, our strategic process includes defining your unique value proposition and positioning your firm as the authority in your niche. This foundational work informs all our digital campaigns."
    },
    {
      question: "How do you handle the long sales cycle in architecture?",
      answer: "We use a multi-channel approach to stay top-of-mind. We use retargeting ads (Meta Ads) and email nurturing sequences (Email Marketing) to continuously engage potential clients over the months or even years it takes for them to commit to a project."
    },
    {
      question: "Will you help us with our portfolio website?",
      answer: "Yes. We offer conversion-focused web design and development services. We ensure your portfolio is not only visually stunning but also technically optimized for speed, SEO, and lead capture."
    },
    {
      question: "What kind of reporting do you provide?",
      answer: "We provide transparent, monthly reports that focus on qualified leads, project inquiries, and ROI. We avoid jargon and ensure you fully understand how our efforts are contributing to your firm's bottom line."
    },
    {
      question: "Do you require a long-term contract?",
      answer: "No. We operate on a month-to-month basis with no lock-in contracts. Our performance should be the only reason you stay with us."
    },
    {
      question: "How do you integrate your services?",
      answer: "Our integrated approach ensures your SEO content feeds your social media, your PPC landing pages are optimized for conversion, and your website is the central hub for all lead capture. All channels work together seamlessly for maximum efficiency."
    },
    {
      question: "How do we get started with Odin Digital?",
      answer: "The first step is a free, no-obligation strategy session. We'll conduct a deep dive into your firm's goals and provide a clear roadmap for attracting high-value clients."
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
        "description": "Performance-focused digital marketing agency specializing in high-value client acquisition for Architecture Firms across Australia.",
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
        "@type": "Service",
        "name": "Digital Marketing Services for Architecture Firms",
        "serviceType": "Digital Marketing for Architecture Firms",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": "Australia",
        "description": "Integrated digital marketing strategy for architecture firms including SEO, PPC, Meta Ads, and conversion-focused web design to attract high-value clients and large-scale projects."
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
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Digital Marketing for Architecture Firms | Precision Strategy, High-Value Clients - Odin Digital</title>
        <meta name="description" content="Attract high-net-worth clients and large-scale projects with a strategic digital blueprint. Integrated SEO, PPC, and Web Design for Architecture Firms." />
        <link rel="canonical" href="https://growth-conduit-central.lovable.app/industries/architecture-firms" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden min-h-[70vh] flex items-center justify-center bg-white decorative-circles">
          {/* Background gradient */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          </div>

          {/* Floating decorative elements */}
          <div className="absolute top-20 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float hidden lg:block"></div>
          <div className="absolute bottom-32 left-16 w-12 h-12 bg-accent/10 rounded-lg animate-float hidden lg:block" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-secondary/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: '4s' }}></div>
          
          {/* Main content container */}
          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 sm:py-24 lg:py-32">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                {/* Breadcrumb navigation */}
                <nav className="text-sm" aria-label="Breadcrumb">
                  <ol className="flex flex-wrap items-center justify-center gap-2 text-muted-foreground">
                    <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                    <li><ArrowRight className="w-4 h-4" /></li>
                    <li><Link to="/industries" className="hover:text-primary transition-colors">Industries</Link></li>
                    <li><ArrowRight className="w-4 h-4" /></li>
                    <li className="text-foreground font-medium">Architecture Firms</li>
                  </ol>
                </nav>

                {/* Main heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-charcoal leading-tight">
                  Digital Marketing for Architecture Firms
                </h1>
                
                {/* Hero sub-headline */}
                <p className="hero-sub-headline text-base sm:text-lg md:text-xl font-semibold text-foreground/90 leading-relaxed max-w-3xl mx-auto">
                  Stop Relying on Unpredictable Referrals. Start Attracting High-Value Clients with Precision Digital Strategy.
                </p>

                {/* Description paragraphs */}
                <div className="max-w-3xl mx-auto space-y-4">
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    Your firm designs award-winning spaces. Your marketing should be just as precise. We build digital strategies that attract the high-net-worth clients and large-scale projects your firm deserves.
                  </p>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    At Odin Digital, we understand that architecture is a high-value, low-volume business. Generic marketing doesn't work. We craft integrated digital ecosystems—combining SEO, PPC, Web Design, and Social Strategy—to position your firm as the authority in your niche, ensuring every lead is a qualified opportunity.
                  </p>
                </div>
                
                {/* CTA button */}
                <div className="pt-2">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 shadow-glow bg-[#D91C5C] hover:bg-[#D91C5C]/90"
                    onClick={openForm}
                  >
                    Schedule Your FREE Digital Strategy Session
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-10 sm:py-12 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3">
                The Proof Is in the Performance
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                We're not just making promises; we're delivering verified results for professional service firms across Australia.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-2">
                    {metric.number}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3 sm:mb-4">
                The Architecture Marketing Pain Points We Solve
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Architecture is a profession of precision. Why settle for imprecise, generic marketing? We solve the core problems holding back your firm's growth.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {painPoints.map((point, index) => (
                <Card key={index} className="p-4 sm:p-6 border-2 hover:border-primary/50 transition-colors">
                  <point.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{point.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{point.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3">
                What Our Professional Clients Say
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                We partner with high-calibre professional firms to deliver measurable growth. Here's what they're saying.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-4 sm:p-6">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <blockquote className="text-sm sm:text-base text-charcoal mb-4 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-xs sm:text-sm text-muted-foreground not-italic">
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
                The Integrated Digital Strategy for Architecture Firms
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                We provide a single, cohesive strategy where every channel works to elevate your firm's profile and attract high-value clients.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
              {services.map((service, index) => (
                <Card key={index} className="p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="default" 
                size="lg" 
                className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 shadow-glow bg-[#D91C5C] hover:bg-[#D91C5C]/90"
                onClick={openForm}
              >
                Schedule Your FREE Digital Strategy Session
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-12 sm:py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3 sm:mb-4">
                Why Odin Digital is the Strategic Partner for Your Firm
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                We understand the unique challenges of the architectural industry—we are built for high-value, professional services.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {whyChoose.map((item, index) => (
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
                Our 4-Step Precision Marketing Process
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                We follow a strategic process that mirrors the precision and planning of your architectural projects.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {process.map((step, index) => (
                <Card key={index} className="p-4 sm:p-6">
                  <div className="text-4xl sm:text-5xl font-black text-primary/20 mb-3">{step.step}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-charcoal to-accent text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Why Choose Odin Digital as Your Architecture Marketing Partner?
              </h2>
              <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto">
                We are obsessed with your firm's success. Our focus is on turning your digital presence into a predictable source of high-value projects.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8">
              {whyPartner.map((item, index) => (
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

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary to-secondary text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Build a Predictable Client Acquisition System?
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Stop relying on chance referrals and start attracting the clients your firm deserves with a strategic digital blueprint.
            </p>
            <p className="text-sm sm:text-base mb-6 sm:mb-8">
              Schedule your free, no-obligation strategy session today. We'll show you the exact roadmap to dominate your architectural niche.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 bg-white text-primary hover:bg-white/90"
              onClick={openForm}
            >
              Schedule Your FREE Digital Strategy Session
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 lg:py-20 pb-28 md:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3 sm:mb-4">
                Frequently Asked Questions About Marketing for Architecture Firms
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

export default ArchitectureFirms;