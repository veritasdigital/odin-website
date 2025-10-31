import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { 
  CheckCircle2, 
  Target, 
  TrendingUp, 
  Zap,
  Search,
  ShoppingCart,
  Smartphone,
  BarChart3,
  Award,
  Clock,
  Shield,
  Users,
  ArrowRight,
  AlertCircle,
  XCircle,
  DollarSign
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const WebDesignHobart = () => {
  const { openForm } = useMarketingForm();

  const metrics = [
    { number: "540%", label: "Average ROI", icon: TrendingUp },
    { number: "$574M+", label: "Client Revenue Generated", icon: DollarSign },
    { number: "95%", label: "Client Retention Rate", icon: Award },
    { number: "8-12", label: "Weeks to Launch", icon: Clock }
  ];

  const problems = [
    {
      icon: AlertCircle,
      title: "Pretty But Useless",
      description: "Your current website looks great but doesn't convert visitors into customers. It's a digital brochure, not a sales machine."
    },
    {
      icon: Search,
      title: "SEO Blind Spot",
      description: "Your site isn't ranking because it wasn't built with technical SEO in mind. Beautiful design means nothing if no one can find you."
    },
    {
      icon: XCircle,
      title: "Post-Launch Abandonment",
      description: "Your previous agency built your site and disappeared. No ongoing optimization, no performance tracking, no results."
    }
  ];

  const services = [
    {
      icon: Target,
      title: "Conversion-Focused Design",
      description: "Every pixel is designed with one goal: convert visitors into customers. We use data-driven UX principles and proven CRO frameworks."
    },
    {
      icon: Search,
      title: "Technical SEO Architecture",
      description: "We build your site structure for search engines from day one. Clean code, fast load times, mobile-first design, and schema markup."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Custom Development",
      description: "High-performance e-commerce on Shopify or WooCommerce. Custom functionality tailored to your business requirements."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Responsive Design",
      description: "60%+ of your traffic is mobile. We design for mobile first, then scale up to desktop. Flawless experience on every device."
    }
  ];

  const differentiators = [
    {
      icon: BarChart3,
      title: "Performance-First Approach",
      description: "We don't measure success by how pretty your site looks. We measure it by conversion rate, revenue, and ROI."
    },
    {
      icon: Shield,
      title: "No Lock-In Contracts",
      description: "We earn your business every month. If we're not delivering results, you're free to leave. No lengthy contracts."
    },
    {
      icon: Users,
      title: "Full-Service Marketing Integration",
      description: "Your website is just one piece. We integrate it with SEO, PPC, email marketing, and analytics for maximum ROI."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "$574M+ in client revenue. 95% retention rate. We've built high-converting websites for businesses across Australia."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We audit your current site, analyze your competitors, and map out a conversion-focused strategy tailored to your business goals."
    },
    {
      step: "02",
      title: "Design & Development",
      description: "We create wireframes, design mockups, and build your site with clean code, technical SEO, and conversion optimization built in."
    },
    {
      step: "03",
      title: "Testing & Optimization",
      description: "Before launch, we test every element across devices, optimize load times, and ensure flawless functionality."
    },
    {
      step: "04",
      title: "Launch & Ongoing Growth",
      description: "We launch your site, monitor performance, and continuously optimize to improve conversion rates and ROI over time."
    }
  ];

  const faqs = [
    {
      question: "How is your web design different from other Hobart agencies?",
      answer: "Most local agencies focus on aesthetics. We focus on conversion and ROI. Every design decision is data-driven, ensuring your site is built to be a sales machine, not just a digital brochure. We integrate technical SEO and marketing automation from day one."
    },
    {
      question: "How long does it take to build a new website?",
      answer: "Our typical timeline for a high-converting, custom website is 8 to 12 weeks from discovery to launch. We prioritise quality, technical performance, and seamless integration over rushed timelines to ensure your new digital asset is built to last."
    },
    {
      question: "Do you build e-commerce websites?",
      answer: "Yes. We specialise in high-performance e-commerce development using platforms like Shopify and WooCommerce. Our focus is on optimizing the checkout process, improving site speed, and integrating all necessary marketing tools to maximise online sales."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely. We use a mobile-first design approach, meaning we design for mobile devices first and then scale up to desktop. Over 60% of your traffic will be mobile, so we ensure a flawless experience on every device."
    },
    {
      question: "Do you provide ongoing support after the website launches?",
      answer: "Yes. Unlike agencies that disappear after launch, we provide ongoing optimization, performance monitoring, security updates, and conversion rate improvements. Your website is a living asset that requires continuous optimization."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes. We specialize in website redesigns that focus on improving conversion rates and ROI. We'll audit your current site, identify what's working and what's not, and rebuild it with a performance-first approach."
    },
    {
      question: "How much does a new website cost?",
      answer: "Our custom websites typically range from $8,000 to $25,000+ depending on complexity, features, and integrations. We provide a detailed quote after our discovery phase. Remember: a cheap website that doesn't convert is more expensive than a high-ROI site."
    },
    {
      question: "Do you offer website hosting?",
      answer: "We can manage your hosting or work with your existing provider. We recommend high-performance hosting solutions that ensure fast load times and 99.9% uptime—critical factors for SEO and user experience."
    },
    {
      question: "Will I be able to update the website myself?",
      answer: "Yes. We build all websites on user-friendly content management systems (WordPress, Shopify, or custom CMS). We provide training and documentation so you can make updates easily without technical knowledge."
    },
    {
      question: "How do you ensure my website ranks in Google?",
      answer: "We build technical SEO into the foundation of your site: clean code, fast load times, mobile-first design, schema markup, and optimized site architecture. We also offer ongoing SEO services to improve your rankings over time."
    },
    {
      question: "What if I already have a website and just need optimization?",
      answer: "We offer website audits and optimization services. We'll analyze your current site, identify conversion bottlenecks and technical issues, and implement improvements to boost performance and ROI."
    },
    {
      question: "Can you integrate my website with my CRM or marketing tools?",
      answer: "Yes. We specialize in integrating websites with CRMs (HubSpot, Salesforce, etc.), email marketing platforms (Mailchimp, Klaviyo), analytics tools, and marketing automation systems for seamless data flow."
    },
    {
      question: "Do you work with businesses outside of Hobart?",
      answer: "Yes. While we specialize in serving Hobart businesses, we work with clients across Australia. We offer remote consultations and project management for businesses in Melbourne, Sydney, Brisbane, and beyond."
    },
    {
      question: "What industries do you work with?",
      answer: "We work with a wide range of industries including professional services (lawyers, accountants), healthcare (dentists, cosmetic clinics), e-commerce, B2B services, and local businesses. Our process is adaptable to any industry."
    },
    {
      question: "How do you measure website success?",
      answer: "We measure success through data: conversion rate, cost per acquisition, revenue per visitor, bounce rate, and overall ROI. We provide detailed monthly reports showing exactly how your website is performing and contributing to your bottom line."
    },
    {
      question: "What makes Odin Digital different from other web design agencies?",
      answer: "Three things: 1) We focus on ROI, not just aesthetics. 2) We offer no lock-in contracts—we earn your business every month. 3) We're a full-service marketing agency, so we integrate your website with SEO, PPC, and email marketing for maximum results."
    }
  ];

  const relatedServices = [
    { name: "PPC Management", url: "/google-ads" },
    { name: "SEO Services", url: "/seo" },
    { name: "Facebook Advertising", url: "/facebook-advertising" },
    { name: "Web Design Agency", url: "/website-design" },
    { name: "Email Marketing", url: "/services/email-marketing" },
    { name: "Social Media Advertising", url: "/social-media-advertising" }
  ];

  const relatedCities = [
    { name: "Web Design Melbourne", url: "/web-design-melbourne" },
    { name: "Web Design Brisbane", url: "/web-design-brisbane" },
    { name: "Facebook Ads Hobart", url: "/facebook-ads-hobart" },
    { name: "Google Ads Newcastle", url: "/google-ads-newcastle" },
    { name: "SEO Adelaide", url: "/adelaide-seo" },
    { name: "SEO Sydney", url: "/sydney-seo" }
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
        "description": "Performance-focused digital marketing agency specializing in high-ROI Web Design and Development in Hobart.",
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
        "@type": "LocalBusiness",
        "name": "Odin Digital - Web Design Hobart",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hobart",
          "addressRegion": "TAS",
          "addressCountry": "AU"
        },
        "areaServed": {
          "@type": "State",
          "name": "TAS"
        },
        "url": "https://growth-conduit-central.lovable.app/web-design-hobart",
        "priceRange": "$$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "150"
        }
      },
      {
        "@type": "Service",
        "serviceType": "High-Converting Web Design",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Odin Digital - Web Design Hobart"
        },
        "areaServed": "Hobart",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Hobart Web Design Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Conversion-Focused Web Design"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technical SEO Site Architecture"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-commerce & Custom Development"
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
          "@type": "LocalBusiness",
          "name": "Odin Digital - Web Design Hobart"
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
      <Header />
      <Helmet>
        <title>Web Design Hobart | High-Converting Websites with 540% ROI | Odin Digital</title>
        <meta 
          name="description" 
          content="The performance-focused Web Design Hobart agency. Stop paying for pretty pictures and start investing in a sales machine. Get a proven 540% ROI website." 
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background pt-20">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <nav className="flex text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <Link to="/website-design" className="hover:text-foreground transition-colors">Web Design</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Hobart</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden bg-background">
          {/* Floating circles background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" style={{ animation: 'float 10s ease-in-out infinite' }} />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground animate-slide-up">
                Web Design Hobart
              </h1>
              
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
                Stop Paying Hobart Developers for a Digital Brochure. We Build High-Converting Websites That Deliver a Proven 540% ROI.
              </p>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                The Web Design Hobart Agency Australian Businesses Trust for High-Converting Websites and Predictable ROI.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Partner with Odin Digital and Watch Your Website Drive Real Revenue, Not Just Traffic.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button 
                  size="xl" 
                  variant="cta"
                  onClick={openForm}
                  className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-8"
                >
                  Get Your FREE Website Audit →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="text-center space-y-2 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-primary mb-3" />
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                      {metric.number}
                    </div>
                    <div className="text-sm sm:text-base text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why Most Hobart Websites Fail to Deliver ROI
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Hobart businesses waste thousands every year on websites that look impressive but deliver nothing to the bottom line. Here's why most agencies fail.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <div 
                    key={index} 
                    className="p-6 sm:p-8 rounded-lg bg-card border border-border hover:shadow-xl transition-all duration-300 hover:border-primary/50"
                  >
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-destructive mb-4" />
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto"
              >
                Stop Wasting Money: Get Your Free Audit →
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Real Results from Real Businesses
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients say about our high-converting websites.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-lg bg-card border border-border shadow-lg flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-start space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-lg text-foreground mb-4 italic">
                    "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
                  </p>
                </div>
                <div className="flex items-center space-x-4 mt-auto">
                  <div>
                    <div className="font-bold text-foreground">Liam C</div>
                    <div className="text-sm text-muted-foreground">Krush Organics</div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-lg bg-card border border-border shadow-lg flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-start space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-lg text-foreground mb-4 italic">
                    "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with."
                  </p>
                </div>
                <div className="flex items-center space-x-4 mt-auto">
                  <div>
                    <div className="font-bold text-foreground">Fabienne Costa</div>
                    <div className="text-sm text-muted-foreground">YCL Jewels</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our High-Converting Web Design Services
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                We build websites that are designed to convert visitors into customers, not just look pretty.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index} 
                    className="p-6 rounded-lg bg-card border border-border hover:shadow-xl transition-all duration-300 hover:border-primary/50"
                  >
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Need help with <Link to="/seo" className="text-primary hover:underline">SEO</Link>, <Link to="/google-ads" className="text-primary hover:underline">PPC</Link>, or <Link to="/facebook-advertising" className="text-primary hover:underline">Meta Ads</Link>? We offer full-service marketing integration.
              </p>
              <Button 
                size="lg" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto"
              >
                See Our Web Design Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why Hobart Businesses Choose Odin Digital
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                We are not a generalist agency that dabbles in web design. We are specialists who understand how to turn websites into revenue machines.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {differentiators.map((diff, index) => {
                const Icon = diff.icon;
                return (
                  <div 
                    key={index} 
                    className="p-6 rounded-lg bg-card border border-border hover:shadow-xl transition-all duration-300"
                  >
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                      {diff.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {diff.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Proven Web Design Process
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                We follow a structured, data-driven process to ensure your website delivers maximum ROI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="p-6 rounded-lg bg-card border border-border hover:shadow-xl transition-all duration-300">
                    <div className="text-5xl font-bold text-primary/20 mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  {index < process.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-primary/30 -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto"
              >
                Start Your Web Design Project →
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                The Odin Digital Difference
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                We're not just building websites. We're building revenue-generating digital assets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Data-Driven Design Decisions</h3>
                    <p className="text-muted-foreground">Every design element is backed by data, user behavior research, and proven conversion optimization principles.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Technical SEO Built-In</h3>
                    <p className="text-muted-foreground">We don't bolt on SEO as an afterthought. It's baked into the foundation of your site from day one.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Ongoing Optimization</h3>
                    <p className="text-muted-foreground">We don't disappear after launch. We continuously test, optimize, and improve your site's performance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Full Marketing Integration</h3>
                    <p className="text-muted-foreground">Your website works seamlessly with your SEO, PPC, email marketing, and CRM for maximum efficiency.</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Online Presence?</h3>
                <p className="text-muted-foreground mb-6">
                  Get a free website audit and discover exactly how we can improve your conversion rate and ROI.
                </p>
                <Button 
                  size="lg" 
                  variant="cta"
                  onClick={openForm}
                  className="w-full"
                >
                  Get Your Free Website Audit →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Stop Paying for a Digital Brochure and Start Driving Real Revenue?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stop settling for websites that look pretty but don't convert. Start working with the Hobart web design agency that delivers real revenue and predictable ROI.
            </p>
            <Button 
              size="xl" 
              variant="cta"
              onClick={openForm}
              className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-8"
            >
              Claim Your FREE Website Audit →
            </Button>
          </div>
        </section>

        {/* Related Services & Cities */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  Related Services
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {relatedServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="p-4 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center"
                    >
                      <span className="text-foreground font-medium hover:text-primary">
                        {service.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  Other Locations
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {relatedCities.map((city, index) => (
                    <Link 
                      key={index}
                      to={city.url}
                      className="p-4 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center"
                    >
                      <span className="text-foreground font-medium hover:text-primary">
                        {city.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                FAQs: Your Questions About Web Design Hobart Answered
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Everything you need to know about our web design services.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <Footer />
        <SideTab />

        {/* Mobile Sticky CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border z-50">
          <Button 
            size="lg" 
            variant="cta"
            onClick={openForm}
            className="w-full"
          >
            Get Your Free Audit →
          </Button>
        </div>
      </div>
    </>
  );
};

export default WebDesignHobart;
