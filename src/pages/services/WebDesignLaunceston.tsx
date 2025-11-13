import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import {
  Target,
  Zap,
  Search,
  Smartphone,
  Code,
  TrendingUp,
  Users,
  Award,
  Shield,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WebDesignLaunceston = () => {
  const { openForm } = useMarketingForm();

  const metrics = [
    { value: "$574M+", label: "Verified Client Revenue" },
    { value: "540%", label: "Average ROI on Ad Spend" },
    { value: "95%", label: "Client Retention Rate" },
    { value: "283+", label: "Successful Campaigns Delivered" }
  ];

  const painPoints = [
    {
      icon: Code,
      title: "Low-Quality, Template-Based Design",
      description: "You've been burned by cheap, local designers who deliver generic, slow-loading websites built on outdated templates. Your site looks like everyone else's and fails to establish the professional trust needed in a small community."
    },
    {
      icon: Search,
      title: "The Local SEO Blind Spot",
      description: "Your website looks good but doesn't rank for local searches like \"plumber Launceston\" or \"Launceston cafe.\" It lacks the technical foundation and local optimization needed to capture customers searching on their mobile phones nearby."
    },
    {
      icon: Target,
      title: "Not a Sales Tool, Just a Brochure",
      description: "Your current site is passive. It looks nice but doesn't compel visitors to take action. It lacks clear Calls-to-Action, lead magnets, and a strategic layout designed to convert visitors into phone calls, bookings, or sales."
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
      icon: Target,
      title: "Conversion-Focused, Bespoke Design",
      description: "We start with a deep understanding of your business goals and your ideal Launceston customer. We then design a custom, modern layout that prioritizes user experience (UX) and conversion rate optimization (CRO), ensuring every page guides the visitor toward a booking, call, or sale."
    },
    {
      icon: Zap,
      title: "Technical SEO & Speed Optimization",
      description: "Speed is critical for ranking and user retention. We build sites on lightning-fast architecture, ensuring perfect Core Web Vitals scores. Every site is launched with full technical SEO implemented, including proper schema markup and a structure optimized to dominate local Launceston search results."
    },
    {
      icon: Smartphone,
      title: "Mobile-First & Local Search Ready",
      description: "Given the high volume of local searches on mobile devices in Tasmania, we design for the small screen first. Your website will be flawlessly responsive, ensuring a perfect experience whether a customer is searching from the Cataract Gorge or their home in Kings Meadows."
    },
    {
      icon: TrendingUp,
      title: "Seamless Digital Marketing Integration",
      description: "Your website is the hub of your digital strategy. We ensure seamless integration with Google Analytics, Meta Pixel, CRM systems, and all other marketing tools, making it easy to track ROI and run future SEO and PPC campaigns."
    }
  ];

  const whyChoose = [
    {
      icon: Users,
      title: "Local Market Insight",
      description: "We understand the Launceston community, the importance of local trust, and the unique needs of businesses serving both residents and the growing tourism sector."
    },
    {
      icon: Award,
      title: "Performance Guarantee",
      description: "We focus on measurable results: speed, local ranking, and conversion rate. We don't stop until your website is a high-performance asset."
    },
    {
      icon: Code,
      title: "Future-Proof Technology",
      description: "We build on modern, scalable platforms that are easy to update and maintain, ensuring your investment is protected for years to come."
    },
    {
      icon: Shield,
      title: "No Lock-In Contracts",
      description: "We believe our results should keep you with us, not a binding contract. Our 95% client retention rate proves our commitment to long-term, high-value partnerships."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery & Local Blueprint",
      description: "We conduct a deep dive into your business, competitors in Launceston, and target customer journey. We then create a detailed sitemap and wireframe focused on maximizing local conversions."
    },
    {
      number: "2",
      title: "Design & Development",
      description: "Our designers create a bespoke, modern aesthetic that aligns with your brand and the Launceston market. Our developers build the site on a fast, secure, and SEO-ready foundation, ensuring flawless mobile responsiveness."
    },
    {
      number: "3",
      title: "Content & Optimization",
      description: "We integrate your content (or write conversion-focused copy) and implement all technical SEO elements, including schema markup and speed optimization. We rigorously test the site for functionality and performance before launch."
    },
    {
      number: "4",
      title: "Launch & Post-Launch Support",
      description: "We handle the seamless launch of your new site. Post-launch, we provide training and ongoing maintenance options to ensure your website remains fast, secure, and a powerful lead-generation tool."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Conversion Rate Optimization (CRO) Focus",
      description: "Every design decision is made with conversion in mind. We strategically place CTAs and optimize user flow to maximize phone calls, form submissions, and sales."
    },
    {
      icon: Zap,
      title: "Technical Excellence",
      description: "We are specialists in building websites that meet Google's highest standards for speed and technical SEO, giving you an unfair advantage in local search rankings."
    },
    {
      icon: Code,
      title: "Direct Response Copywriting Integration",
      description: "We ensure your website copy is persuasive, speaks directly to the Launceston customer's pain points, and compels immediate action."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "With over $574M+ in verified client revenue and a 95% retention rate, we have the experience and results to back up our claims in the most competitive markets."
    }
  ];

  const faqs = [
    {
      question: "How long does it take to design and launch a new website?",
      answer: "The timeline depends on the complexity, but a typical conversion-focused website for a Launceston small business takes between 6 to 10 weeks from discovery to launch. We prioritize speed and quality over rushing the process."
    },
    {
      question: "Why is a custom design better than a template for a Launceston business?",
      answer: "Custom design ensures your website is unique, perfectly reflects your brand, and is built for maximum speed and SEO performance. Templates are generic, often slow, and make it difficult to stand out in a tight local market like Launceston."
    },
    {
      question: "How do you ensure my website ranks well in Launceston?",
      answer: "We integrate Local SEO from the ground up. This includes speed optimization (a major ranking factor), proper local schema markup, a clear site structure, and mobile-first design, all of which are essential for dominating \"near me\" and \"Launceston\" searches."
    },
    {
      question: "Will my website work well on mobile phones?",
      answer: "Absolutely. We use a mobile-first design approach. This means we design and build the mobile version of your site first, ensuring a flawless, fast, and intuitive experience for the majority of local customers searching on their phones."
    },
    {
      question: "Can you help me with my website content and copywriting?",
      answer: "Yes. We offer conversion-focused copywriting services. We ensure your content is persuasive, speaks directly to the Launceston customer's needs, and is optimized for your target keywords."
    },
    {
      question: "What platforms do you build websites on?",
      answer: "We build on modern, secure, and scalable platforms like WordPress (custom-built themes for speed) or headless CMS solutions, depending on your specific needs. We prioritize performance and ease of use for the client."
    },
    {
      question: "What is Conversion Rate Optimization (CRO) and why is it important?",
      answer: "CRO is the process of optimizing your website to increase the percentage of visitors who take a desired action (e.g., call, book, buy). It's crucial because it turns your existing traffic into more revenue without needing more visitors."
    },
    {
      question: "How much does a high-performance website cost?",
      answer: "The cost is determined by the complexity and features required. We view a website as an investment, not an expense. Our goal is to deliver a site that generates a positive ROI that far exceeds the initial cost."
    },
    {
      question: "Do you provide ongoing website maintenance and support?",
      answer: "Yes. We offer comprehensive post-launch maintenance packages that include security updates, backups, performance monitoring, and technical support to ensure your website remains fast and secure."
    },
    {
      question: "How can a Launceston business compete with large mainland companies online?",
      answer: "By focusing on hyper-local SEO and building a website that is technically superior and faster than the mainland competition. We help you dominate the local search results where mainland companies often fail to optimize."
    },
    {
      question: "Will my website be secure?",
      answer: "Security is paramount. We implement industry-leading security measures, including SSL certificates, firewalls, and regular updates, to protect your data and your customers' information."
    },
    {
      question: "Do you require a long-term contract for the design project?",
      answer: "No. The design and development project is a fixed-scope contract. We only require a long-term contract for optional ongoing maintenance and support, which is month-to-month with no lock-in contracts."
    },
    {
      question: "Can you integrate my website with my existing booking system or CRM?",
      answer: "Yes. We specialize in custom integrations with various third-party tools, including booking platforms, CRM systems, and email marketing software, to streamline your business operations."
    },
    {
      question: "How do we measure the success of the new website?",
      answer: "Success is measured by increased local search rankings, improved website speed scores, and, most importantly, a measurable increase in qualified leads, phone calls, and online sales."
    },
    {
      question: "How do we get started with Odin Digital?",
      answer: "The first step is a free, no-obligation Website Performance Audit. We'll analyze your current site and provide a clear roadmap for building a high-performance, conversion-focused website for your Launceston business."
    }
  ];

  // Schema Markup
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://odindigital.com.au",
    "logo": "https://odindigital.com.au/logo.png",
    "description": "Digital marketing agency in Australia offering PPC, Meta Ads, Web Design, and SEO services"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "WebDesignAgency",
    "name": "Odin Digital - Web Design Launceston",
    "image": "https://odindigital.com.au/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Launceston",
      "addressRegion": "TAS",
      "addressCountry": "AU"
    },
    "areaServed": {
      "@type": "City",
      "name": "Launceston"
    },
    "priceRange": "$$",
    "serviceType": "Web Design and Development"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design Services in Launceston",
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital"
    },
    "areaServed": {
      "@type": "City",
      "name": "Launceston"
    },
    "description": "Professional web design and development services in Launceston. We build high-converting, SEO-optimised websites with no lock-in contracts."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Web Design Launceston | High-Performance, SEO-Ready Websites - Odin Digital</title>
        <meta
          name="description"
          content="Stop losing customers to slow, generic websites. We build custom, mobile-first websites in Launceston engineered for speed, local SEO, and maximum conversion."
        />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative isolate overflow-hidden min-h-screen flex items-center bg-white">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          </div>
          
          {/* Floating Circles from Homepage */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full">
            <div className="grid grid-cols-1 gap-16 lg:gap-20 items-center min-h-screen py-24 lg:py-32">
              
              {/* Centered Text Content */}
              <div className="space-y-8 lg:space-y-10 animate-slide-up max-w-2xl mx-auto text-center">
                {/* Main Headline */}
                <div className="space-y-6">
                  <h1 className="relative z-30 overflow-visible text-4xl md:text-5xl xl:text-6xl font-black text-charcoal leading-[0.95] tracking-tight">
                    Web Design Launceston
                  </h1>
                </div>
                
                {/* Visual Sub-Headline */}
                <p className="hero-sub-headline text-xl md:text-2xl lg:text-3xl text-charcoal/90 font-bold leading-tight max-w-2xl">
                  Stop Losing Customers to Slow, Generic Websites. Get a High-Performance, SEO-Ready Website Engineered to Convert Launceston's Local Traffic.
                </p>
                
                {/* Description */}
                <div className="space-y-6 lg:space-y-8">
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-2xl font-light">
                    Your website is your hardest-working employee. In Launceston's tight-knit market, a slow, outdated site is costing you local customers every day. We build bespoke, conversion-focused websites that load instantly, rank locally, and turn passive visitors into active clients.
                  </p>

                  <p className="text-base md:text-lg text-charcoal/70 leading-relaxed max-w-2xl font-light">
                    At Odin Digital, we understand that Launceston businesses need more than just a pretty online brochure. You need a digital asset that is optimized for Tasmania's unique connectivity, mobile-first local searches, and the need to stand out against mainland competitors. We don't use cheap templates. We engineer high-performance websites with a focus on speed, local SEO integration, and clear Calls-to-Action (CTAs) to ensure your new site is a powerful, predictable lead-generation machine.
                  </p>
                </div>
                
                {/* Action Button */}
                <div className="pt-2 flex justify-center">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="text-lg px-12 py-6 shadow-glow whitespace-normal break-words"
                    onClick={openForm}
                  >
                    Schedule Your FREE Website Performance Audit →
                  </Button>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Trust Metrics Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">The Proof Is in the Performance</h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                We partner with high-calibre businesses across Australia, including those in unique, local markets like Launceston, to deliver measurable, high-ROI growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-8 text-center hover-scale border-border/50 bg-card">
                  <div className="text-4xl font-bold mb-2 text-primary">{metric.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{metric.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">The Launceston Web Design Pain Points We Solve</h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                Launceston businesses face unique challenges when it comes to web presence. We solve the core problems that prevent your website from generating revenue.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {painPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <Card key={index} className="p-8 border-border/50 bg-card hover-scale">
                    <Icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-4 text-charcoal">{point.title}</h3>
                    <p className="text-charcoal/70 leading-relaxed">{point.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">What Our Professional Clients Say</h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                We partner with high-performing professionals who demand results and discretion. Here's what they're saying about our partnership.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card flex flex-col">
                  <p className="text-charcoal/70 mb-6 italic leading-relaxed flex-grow">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <div className="font-semibold text-charcoal">{testimonial.author}</div>
                    <div className="text-sm text-charcoal/70">{testimonial.company}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Our High-Performance Web Design Service for Launceston</h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                We build websites that are engineered for speed, optimized for local search, and designed to convert Launceston's local and tourist traffic.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-8 border-border/50 bg-card hover-scale">
                    <Icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-4 text-charcoal">{service.title}</h3>
                    <p className="text-charcoal/70 leading-relaxed">{service.description}</p>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <Button 
                variant="cta" 
                size="lg" 
                className="text-lg px-12 py-6 whitespace-normal break-words"
                onClick={openForm}
              >
                Schedule Your FREE Website Performance Audit →
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Why Odin Digital is Launceston's Web Design Specialist</h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                We combine national-level expertise with the local understanding needed to succeed in the Tasmanian market.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChoose.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-8 text-center border-border/50 bg-card hover-scale">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg font-bold mb-3 text-charcoal">{item.title}</h3>
                    <p className="text-sm text-charcoal/70 leading-relaxed">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Our 4-Step Conversion-Focused Design Process</h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                We follow a strategic process designed to deliver a high-performance website on time and on budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card hover-scale">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-charcoal">{step.title}</h3>
                      <p className="text-charcoal/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Extended Why Choose Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Why Choose Odin Digital for Your Launceston Web Design?</h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                We are obsessed with turning your website into a profitable asset that works as hard as you do.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="p-8 border-border/50 bg-card hover-scale">
                    <Icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-4 text-charcoal">{benefit.title}</h3>
                    <p className="text-charcoal/70 leading-relaxed">{benefit.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <Card className="p-12 md:p-16 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal">
                Ready to Turn Your Website into a Launceston Lead Machine?
              </h2>
              <p className="text-lg md:text-xl text-charcoal/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                Stop relying on outdated templates and start attracting high-value local customers with a website engineered for performance and conversion.
              </p>
              <p className="text-base md:text-lg text-charcoal/70 mb-10 max-w-2xl mx-auto">
                Schedule your free, no-obligation Website Performance Audit today. We'll show you the exact roadmap to dominate your local market and maximize your profitability.
              </p>
              <Button 
                variant="cta" 
                size="lg" 
                className="text-lg px-12 py-6 whitespace-normal break-words"
                onClick={openForm}
              >
                Schedule Your FREE Website Performance Audit →
              </Button>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Frequently Asked Questions About Web Design in Launceston</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-semibold text-charcoal pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-charcoal/70 pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-border shadow-lg md:hidden z-50">
          <Button 
            variant="cta" 
            size="lg" 
            className="w-full text-base whitespace-normal break-words py-4"
            onClick={openForm}
          >
            Schedule FREE Audit →
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default WebDesignLaunceston;
