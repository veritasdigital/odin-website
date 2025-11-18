import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, TrendingUp, Users, Award, Zap, Target, Layout, ShoppingCart, Code, CheckCircle2, Search, Smartphone, Sparkles } from "lucide-react";
import { useMarketingForm } from "@/contexts/MarketingFormContext";

const WebDesignAdelaide = () => {
  const { openForm } = useMarketingForm();
  const locationInfo = getLocationData("adelaide");

  const metrics = [
    { label: "Verified Client Revenue", value: "$574M+", icon: TrendingUp },
    { label: "Average ROI on Ad Spend", value: "540%", icon: Award },
    { label: "Client Retention Rate", value: "95%", icon: Users },
    { label: "Successful Campaigns", value: "283+", icon: Zap }
  ];

  const problems = [
    {
      title: "Your Website Is Outdated and Slow",
      description: "Your website looks like it was built in 2010. It's slow to load, isn't mobile-friendly, and has a high bounce rate. You know you're losing customers, but you don't have the time or expertise to fix it. In today's market, an outdated website is a liability, not an asset."
    },
    {
      title: "Your DIY Website Looks Unprofessional",
      description: "You tried to save money by building your own website on Wix or Squarespace. Now, you have a site that looks amateurish, doesn't reflect your brand, and isn't ranking on Google. You've wasted countless hours and you're still not getting results. It's time for a professional solution."
    },
    {
      title: "You Were Burned by an Overpriced Agency",
      description: "You paid a local Adelaide agency thousands of dollars for a website that underdelivered. It doesn't generate leads, it's hard to update, and you feel like you were ripped off. You're hesitant to invest in another website, but you know you need to. You need a partner you can trust."
    }
  ];

  const testimonials = [
    {
      quote: "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
      author: "Fabienne Costa",
      company: "YCL Jewels (Gold Coast)"
    },
    {
      quote: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
      author: "Liam C",
      company: "Krush Organics (Sydney)"
    },
    {
      quote: "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
      author: "Evan Tsaboukos",
      company: "Imperial Wealth (Melbourne)"
    }
  ];

  const services = [
    {
      icon: Layout,
      title: "Custom Website Design",
      description: "We don't use templates. We design and build beautiful, custom websites that are tailored to your brand, your goals, and your target audience. Every website is designed to be fast, mobile-responsive, and optimised for conversions.",
      cta: "Get Your FREE Adelaide Custom Website Quote"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Website Design",
      description: "Ready to sell online? We build high-converting e-commerce websites on Shopify and WooCommerce. We focus on creating a seamless user experience, from product discovery to checkout, to maximise your sales and revenue.",
      cta: "Get Your FREE Adelaide E-commerce Website Quote"
    },
    {
      icon: Code,
      title: "WordPress Development",
      description: "We are Adelaide's WordPress experts. We build custom WordPress websites that are easy to manage, SEO-friendly, and scalable. Whether you need a simple brochure website or a complex web application, we can build it on WordPress.",
      cta: "Get Your FREE Adelaide WordPress Website Quote"
    }
  ];

  const differentiators = [
    {
      icon: Target,
      title: "Conversion-Focused Design",
      description: "We don't just build pretty websites. We build strategic, data-driven websites that are designed to convert visitors into customers. Every element of your website is carefully crafted to guide users towards a specific action, whether it's making a purchase, filling out a form, or picking up the phone."
    },
    {
      icon: Search,
      title: "SEO-Optimised from Day One",
      description: "A beautiful website is useless if no one can find it. We build every website with SEO best practices in mind, from technical SEO and site structure to on-page optimisation and local SEO. We give you the foundation you need to rank on Google and attract organic traffic."
    },
    {
      icon: Smartphone,
      title: "Fast & Mobile-Responsive",
      description: "Over 60% of website traffic comes from mobile devices. We build fast, mobile-responsive websites that provide a seamless user experience on all devices. A faster website not only improves user experience but also boosts your Google rankings."
    },
    {
      icon: Sparkles,
      title: "No Lock-In Contracts",
      description: "We believe in earning your business, not forcing it. Our flexible, month-to-month support and maintenance plans mean we're always motivated to deliver results. If you're not happy, you're free to leave. It's that simple."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We start by getting to know your Adelaide business, your goals, and your ideal customer. We conduct in-depth research and analysis to develop a comprehensive website strategy that aligns with your business objectives."
    },
    {
      number: "02",
      title: "Design & User Experience (UX)",
      description: "Our design team creates a beautiful, custom website design that is tailored to your brand and your target audience. We focus on creating an intuitive user experience that makes it easy for visitors to find what they're looking for and take action."
    },
    {
      number: "03",
      title: "Development & SEO",
      description: "Our development team brings the design to life, building a fast, mobile-responsive, and SEO-optimised website. We follow best practices for coding, security, and performance to ensure your website is built to last."
    },
    {
      number: "04",
      title: "Launch & Training",
      description: "We handle the entire launch process, from server setup and domain configuration to final testing and deployment. We also provide comprehensive training to ensure you know how to manage and update your new website."
    }
  ];

  const whyChooseUs = [
    {
      title: "We Build Websites That Convert",
      description: "We're not just designers; we're digital marketing experts. We build websites with one goal in mind: to generate leads and sales for your business. Our conversion-focused approach means your website will be a powerful sales tool, not just a digital brochure."
    },
    {
      title: "We're SEO Experts",
      description: "We have a team of in-house SEO experts who ensure your website is built to rank on Google. We handle everything from technical SEO and keyword research to on-page optimisation and content strategy. We give you the best possible chance of attracting organic traffic from day one."
    },
    {
      title: "We Offer Transparent Pricing",
      description: "We provide clear, detailed quotes with no hidden fees. We believe in transparency and honesty, and we'll work with you to find a solution that fits your budget. We offer a range of packages to suit businesses of all sizes, from startups to established enterprises."
    },
    {
      title: "We Provide Ongoing Support",
      description: "Our relationship doesn't end when your website goes live. We offer a range of ongoing support and maintenance plans to ensure your website remains fast, secure, and up-to-date. We're here to help you grow your business online."
    }
  ];

  const faqs = [
    {
      question: "How much does a website cost in Adelaide?",
      answer: "The cost of a website in Adelaide can range from $3,000 for a basic small business website to $25,000+ for a complex e-commerce or custom web application. At Odin Digital, we provide a detailed, transparent quote after a free consultation. We focus on delivering a high-quality website that provides a significant return on your investment."
    },
    {
      question: "How long does it take to build a website in Adelaide?",
      answer: "Typically, a custom website takes 4-8 weeks to design and develop. This timeline can vary depending on the complexity of the project, the number of pages, and the speed of feedback and content delivery. We will provide you with a detailed project timeline before we begin."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely. All websites we build are fully responsive and optimised for all devices, including desktops, tablets, and smartphones. With over 60% of traffic coming from mobile, a mobile-friendly website is essential for success."
    },
    {
      question: "Do you offer e-commerce website design in Adelaide?",
      answer: "Yes, we specialize in building high-converting e-commerce websites on Shopify and WooCommerce. We focus on creating a seamless user experience that makes it easy for customers to browse, purchase, and become repeat customers."
    },
    {
      question: "Will my website be optimised for search engines (SEO)?",
      answer: "Yes, every website we build is optimised for SEO from day one. We handle all aspects of technical SEO, on-page optimisation, and local SEO to give you the best possible chance of ranking on Google and attracting organic traffic."
    },
    {
      question: "Can you help me with a website redesign in Adelaide?",
      answer: "Yes, we can help you redesign your existing website to improve its performance, user experience, and conversion rates. We will work with you to identify the weaknesses of your current site and develop a new design that aligns with your business goals."
    },
    {
      question: "What is the difference between web design and web development?",
      answer: "Web design refers to the visual design and user experience of a website. Web development refers to the coding and technical implementation of the design. At Odin Digital, we have a team of expert designers and developers who work together to create a beautiful, functional, and high-performing website."
    },
    {
      question: "Do you offer website maintenance and support in Adelaide?",
      answer: "Yes, we offer a range of ongoing website maintenance and support plans to ensure your website remains fast, secure, and up-to-date. Our plans include regular software updates, security monitoring, backups, and technical support."
    },
    {
      question: "What platform do you build websites on?",
      answer: "We specialize in building websites on WordPress, which is the world's most popular content management system (CMS). We also have expertise in other platforms, including Shopify for e-commerce and custom-built solutions for complex web applications."
    },
    {
      question: "Why should I choose a local Adelaide web design agency?",
      answer: "A local Adelaide agency understands the local market, your customers, and your competitors. We can provide a more personalised service and are always available to meet in person to discuss your project. We have a proven track record of helping Adelaide businesses succeed online."
    },
    {
      question: "What do I need to provide to get started?",
      answer: "To get started, you will need to provide us with a clear understanding of your business, your goals, and your target audience. We will also need your branding guidelines (logo, colors, fonts) and any content (text, images) you would like to include on the website. We can help you with content creation if needed."
    },
    {
      question: "Will I be able to update the website myself?",
      answer: "Yes, we build all of our websites on user-friendly content management systems (CMS) like WordPress. We provide comprehensive training to ensure you know how to update and manage your new website. You will be able to easily add new pages, blog posts, images, and more."
    },
    {
      question: "Do you offer web hosting?",
      answer: "While we don't provide web hosting directly, we can recommend and help you set up high-quality web hosting with our trusted partners. We will ensure your website is hosted on a fast, secure, and reliable server."
    },
    {
      question: "What makes you different from other Adelaide web design companies?",
      answer: "We are different because we focus on conversion-focused design and SEO optimisation. We don't just build pretty websites; we build websites that generate leads and sales. Our transparent pricing, no lock-in contracts, and commitment to ROI make us the trusted choice for Adelaide businesses."
    },
    {
      question: "How do I get a free quote for my Adelaide web design project?",
      answer: "Simply click the button below to schedule your FREE, no-obligation consultation with one of our senior strategists. We will discuss your project in detail and provide you with a comprehensive quote within 24 hours. There's no pressure and no obligation."
    }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://odindigital.com.au",
    "logo": "https://odindigital.com.au/logo.png",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61-1300-123-456",
      "contactType": "sales"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Odin Digital (Adelaide)",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Adelaide",
      "addressRegion": "SA",
      "addressCountry": "AU"
    },
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design",
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital"
    },
    "areaServed": {
      "@type": "City",
      "name": "Adelaide"
    },
    "description": "Professional web design and development services in Adelaide. We build high-converting, SEO-optimised websites with no lock-in contracts.",
    "name": "Web Design Agency Adelaide"
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
        <title>Web Design Agency Adelaide | Odin Digital</title>
        <meta name="description" content="Adelaide's leading web design agency. We build high-converting, SEO-optimised websites that generate leads and sales. Get your free Adelaide web design quote." />
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

      <div className="min-h-screen bg-background overflow-x-hidden pb-24 md:pb-0">
        <Header />
        <SideTab />

        {/* Hero Section */}
        <section className="relative isolate overflow-hidden min-h-screen flex items-center bg-white">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full">
            <div className="grid grid-cols-1 gap-16 lg:gap-20 items-center min-h-screen py-24 lg:py-32">
              
              {/* Centered Text Content */}
              <div className="space-y-8 lg:space-y-10 animate-slide-up max-w-2xl mx-auto text-center">
                {/* Main Headline */}
                <div className="space-y-6">
                  <h1 className="relative z-30 overflow-visible text-4xl md:text-5xl xl:text-6xl font-black text-charcoal leading-[0.95] tracking-tight">
                    <span className="block mb-3 lg:mb-4">Adelaide's Leading</span>
                    <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
                      Web Design Agency
                    </span>
                  </h1>
                </div>
                
                {/* Subtitle and Description */}
                <div className="space-y-6 lg:space-y-8">
                  <h2 className="text-xl md:text-2xl lg:text-2xl text-charcoal/90 font-bold leading-tight max-w-2xl">
                    Your Website Should Generate Leads, Not Headaches.
                  </h2>
                  
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-2xl font-light">
                    Is your outdated, slow, or DIY website costing you customers? It's time for a professional Adelaide web design agency that builds high-converting websites designed to grow your business.
                  </p>

                  <p className="text-base md:text-lg text-charcoal/70 leading-relaxed max-w-2xl font-light">
                    In the competitive Adelaide market, your website is your most important sales tool. At Odin Digital, we build strategic, SEO-optimised, and conversion-focused digital assets that generate a measurable return on investment. Ready to turn your website into a revenue-generating machine?
                  </p>
                </div>
                
                {/* Action Button */}
                <div className="pt-2 flex justify-center">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="text-lg px-12 py-6 shadow-glow"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get Your FREE Adelaide Web Design Quote →
                  </Button>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 break-words hyphens-auto">The Proof Is in the Performance</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're not just making promises; we're delivering verified results. Here's a snapshot of what our clients have achieved.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <Card key={index} className="p-8 text-center hover-scale border-border/50 bg-card">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <div className="text-4xl font-bold mb-2 text-foreground">{metric.value}</div>
                    <div className="text-sm font-medium text-muted-foreground">{metric.label}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 break-words hyphens-auto">Does This Sound Familiar? Your Adelaide Website Isn't Working.</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                You have a website, but it's not generating the leads or sales you need. It's a common and costly problem for Adelaide businesses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card hover-scale">
                  <h3 className="text-xl font-bold mb-4 text-foreground">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 break-words hyphens-auto">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what business owners are saying about working with Odin Digital.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card flex flex-col">
                  <p className="text-muted-foreground mb-6 italic leading-relaxed flex-grow">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 break-words hyphens-auto">Web Design Services for Adelaide Businesses</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer a complete suite of professional web design and development services to help your Adelaide business succeed online.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-8 border-border/50 bg-card hover-scale">
                    <Icon className="h-12 w-12 mb-6 text-primary" />
                    <h3 className="text-2xl font-bold mb-4 text-foreground break-words hyphens-auto">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    <Button
                      variant="cta"
                      className="w-full whitespace-normal break-words text-center h-auto py-3 px-4"
                      onClick={() => window.location.href = '/contact'}
                    >
                      <span className="flex items-center justify-center gap-2 flex-wrap">
                        <span>{service.cta}</span>
                        <ArrowRight className="h-4 w-4 shrink-0" />
                      </span>
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 break-words hyphens-auto">The Odin Digital Difference: Your Adelaide Web Design Agency</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Why choose us as your web design agency in Adelaide? Because we build websites that actually make you money.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-8 border-border/50 bg-card hover-scale">
                    <Icon className="h-10 w-10 mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-4 text-foreground break-words hyphens-auto">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 break-words hyphens-auto">Our Proven 4-Step Web Design Process</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We follow a simple, effective process to deliver high-quality websites on time and on budget for our Adelaide clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card hover-scale">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-4 text-foreground break-words hyphens-auto">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 break-words hyphens-auto">Why Choose Odin Digital as Your Adelaide Web Design Partner?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                You have a lot of choices when it comes to web design agencies in Adelaide. Here's why we're the right choice for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card hover-scale">
                  <CheckCircle2 className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-4 text-foreground break-words hyphens-auto">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 break-words hyphens-auto">Ready to Build a Website That Grows Your Business in Adelaide?</h2>
              <p className="text-lg md:text-xl mb-10 text-muted-foreground leading-relaxed">
                Stop losing customers to an outdated, slow, or unprofessional website. It's time to invest in a high-converting website that generates a measurable return on investment.
              </p>
              <p className="text-base md:text-lg mb-10 text-muted-foreground leading-relaxed">
                Take the first step towards transforming your online presence. Schedule your FREE, no-obligation Adelaide web design consultation and quote with one of our senior strategists today. We'll analyze your current website, discuss your goals, and show you exactly how we can help you build a website that drives real business growth. What do you have to lose?
              </p>
              <Button
                variant="cta"
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="text-base md:text-lg h-14 px-8 whitespace-normal break-words text-center"
              >
                Get Your FREE Adelaide Web Design Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 break-words hyphens-auto">Frequently Asked Questions About Web Design in Adelaide</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="text-center mt-12">
                <Button
                  variant="cta"
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="text-base md:text-lg h-14 px-8 whitespace-normal break-words text-center"
                >
                  Get Your FREE Adelaide Web Design Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50 safe-area-inset-bottom">
          <Button
            variant="cta"
            size="lg"
            className="w-full h-12"
            onClick={() => window.location.href = '/contact'}
          >
            Get FREE Quote <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default WebDesignAdelaide;