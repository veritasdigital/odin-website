import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  TrendingUp,
  Users,
  Award,
  Zap,
  AlertCircle,
  Clock,
  Smartphone,
  Target,
  CheckCircle,
  Rocket,
  Search,
  DollarSign,
  Headphones,
} from "lucide-react";
import { AsSeenIn } from "@/components/AsSeenIn";
import heroPerson from "@/assets/hero-person-new.png";
import { RelatedLocations } from "@/components/RelatedLocations";
import { getRelatedLocations } from "@/utils/contentClusters";
import { getLocationData } from "@/utils/locationData";
import LocationMap from "@/components/LocationMap";

const WebDesignPerth = () => {
  const { openForm } = useMarketingForm();
  const locationInfo = getLocationData("perth");

  const metrics = [
    { icon: DollarSign, value: "$574M+", label: "Verified Client Revenue" },
    { icon: TrendingUp, value: "540%", label: "Average ROI on Ad Spend" },
    { icon: Users, value: "95%", label: "Client Retention Rate (No Lock-In)" },
    { icon: Award, value: "283+", label: "Successful Campaigns Delivered" },
  ];

  const problems = [
    {
      icon: AlertCircle,
      title: "You're Paying Premium Prices for Average Results",
      description:
        "You hired a local Perth agency that charged east-coast prices but delivered a generic, underperforming website. You feel isolated and overcharged, wondering if you'll ever see a return on your investment. You need an agency that provides exceptional value, not just a premium invoice.",
    },
    {
      icon: Clock,
      title: "Your Website Is a Relic from 2010",
      description:
        "Your website is slow, clunky, and looks terrible on a mobile phone. You know it's costing you customers, especially in a market as competitive as Perth, but you don't have the time or technical skills to fix it. Your digital front door is actively turning people away.",
    },
    {
      icon: Target,
      title: "Your Agency Doesn't Understand Your Industry",
      description:
        "Your web design agency uses the same template for a local cafe as they do for your B2B industrial services company. They don't understand the nuances of the Perth market or the specific needs of industries like mining, resources, and professional services. You need a partner who speaks your language.",
    },
  ];

  const services = [
    {
      icon: Rocket,
      title: "Custom Website Design",
      description:
        "We don't use templates. We design and build beautiful, custom websites that are tailored to your brand, your goals, and your target audience. Every website is designed to be fast, mobile-responsive, and optimised for conversions.",
      cta: "Get Your FREE Perth Custom Website Quote →",
    },
    {
      icon: DollarSign,
      title: "E-commerce Website Design",
      description:
        "Ready to sell online? We build high-converting e-commerce websites on Shopify and WooCommerce. We focus on creating a seamless user experience, from product discovery to checkout, to maximise your sales and revenue.",
      cta: "Get Your FREE Perth E-commerce Website Quote →",
    },
    {
      icon: Zap,
      title: "WordPress Development",
      description:
        "We are Perth's WordPress experts. We build custom WordPress websites that are easy to manage, SEO-friendly, and scalable. Whether you need a simple brochure website or a complex web application, we can build it on WordPress.",
      cta: "Get Your FREE Perth WordPress Website Quote →",
    },
  ];

  const differentiators = [
    {
      icon: Target,
      title: "Conversion-Focused Design",
      description:
        "We don't just build pretty websites. We build strategic, data-driven websites that are designed to convert visitors into customers. Every element of your website is carefully crafted to guide users towards a specific action.",
    },
    {
      icon: Search,
      title: "SEO-Optimised from Day One",
      description:
        "A beautiful website is useless if no one can find it. We build every website with SEO best practices in mind, from technical SEO and site structure to on-page optimisation and local SEO.",
    },
    {
      icon: Smartphone,
      title: "Fast & Mobile-Responsive",
      description:
        "Over 60% of website traffic comes from mobile devices. We build fast, mobile-responsive websites that provide a seamless user experience on all devices.",
    },
    {
      icon: CheckCircle,
      title: "No Lock-In Contracts",
      description:
        "We believe in earning your business, not forcing it. Our flexible, month-to-month support and maintenance plans mean we're always motivated to deliver results. If you're not happy, you're free to leave.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We start by getting to know your Perth business, your goals, and your ideal customer. We conduct in-depth research and analysis to develop a comprehensive website strategy that aligns with your business objectives.",
    },
    {
      number: "02",
      title: "Design & User Experience (UX)",
      description:
        "Our design team creates a beautiful, custom website design that is tailored to your brand and your target audience. We focus on creating an intuitive user experience that makes it easy for visitors to find what they're looking for and take action.",
    },
    {
      number: "03",
      title: "Development & SEO",
      description:
        "Our development team brings the design to life, building a fast, mobile-responsive, and SEO-optimised website. We follow best practices for coding, security, and performance to ensure your website is built to last.",
    },
    {
      number: "04",
      title: "Launch & Training",
      description:
        "We handle the entire launch process, from server setup and domain configuration to final testing and deployment. We also provide comprehensive training to ensure you know how to manage and update your new website.",
    },
  ];

  const whyChooseUs = [
    {
      icon: TrendingUp,
      title: "We Build Websites That Convert",
      description:
        "We're not just designers; we're digital marketing experts. We build websites with one goal in mind: to generate leads and sales for your business. Our conversion-focused approach means your website will be a powerful sales tool, not just a digital brochure.",
    },
    {
      icon: Search,
      title: "We're SEO Experts",
      description:
        "We have a team of in-house SEO experts who ensure your website is built to rank on Google. We handle everything from technical SEO and keyword research to on-page optimisation and content strategy.",
    },
    {
      icon: DollarSign,
      title: "We Offer Transparent Pricing",
      description:
        "We provide clear, detailed quotes with no hidden fees. We believe in transparency and honesty, and we'll work with you to find a solution that fits your budget. We offer a range of packages to suit businesses of all sizes.",
    },
    {
      icon: Headphones,
      title: "We Provide Ongoing Support",
      description:
        "Our relationship doesn't end when your website goes live. We offer a range of ongoing support and maintenance plans to ensure your website remains fast, secure, and up-to-date. We're here to help you grow your business online.",
    },
  ];

  const faqs = [
    {
      question: "How much does a website cost in Perth?",
      answer:
        "The cost of a website in Perth can range from $3,500 for a basic small business website to $30,000+ for a complex e-commerce or custom web application. At Odin Digital, we provide a detailed, transparent quote after a free consultation. We focus on delivering a high-quality website that provides a significant return on your investment.",
    },
    {
      question: "How long does it take to build a website in Perth?",
      answer:
        "Typically, a custom website takes 4-8 weeks to design and develop. This timeline can vary depending on the complexity of the project, the number of pages, and the speed of feedback and content delivery. We will provide you with a detailed project timeline before we begin.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely. All websites we build are fully responsive and optimised for all devices, including desktops, tablets, and smartphones. With over 60% of traffic coming from mobile, a mobile-friendly website is essential for success.",
    },
    {
      question: "Do you offer e-commerce website design in Perth?",
      answer:
        "Yes, we specialize in building high-converting e-commerce websites on Shopify and WooCommerce. We focus on creating a seamless user experience that makes it easy for customers to browse, purchase, and become repeat customers.",
    },
    {
      question: "Will my website be optimised for search engines (SEO)?",
      answer:
        "Yes, every website we build is optimised for SEO from day one. We handle all aspects of technical SEO, on-page optimisation, and local SEO to give you the best possible chance of ranking on Google and attracting organic traffic.",
    },
    {
      question: "Can you help me with a website redesign in Perth?",
      answer:
        "Yes, we can help you redesign your existing website to improve its performance, user experience, and conversion rates. We will work with you to identify the weaknesses of your current site and develop a new design that aligns with your business goals.",
    },
    {
      question: "What is the difference between web design and web development?",
      answer:
        "Web design refers to the visual design and user experience of a website. Web development refers to the coding and technical implementation of the design. At Odin Digital, we have a team of expert designers and developers who work together to create a beautiful, functional, and high-performing website.",
    },
    {
      question: "Do you offer website maintenance and support in Perth?",
      answer:
        "Yes, we offer a range of ongoing website maintenance and support plans to ensure your website remains fast, secure, and up-to-date. Our plans include regular software updates, security monitoring, backups, and technical support.",
    },
    {
      question: "What platform do you build websites on?",
      answer:
        "We specialize in building websites on WordPress, which is the world's most popular content management system (CMS). We also have expertise in other platforms, including Shopify for e-commerce and custom-built solutions for complex web applications.",
    },
    {
      question: "Why should I choose a local Perth web design agency?",
      answer:
        "A local Perth agency understands the local market, your customers, and your competitors. We can provide a more personalised service and are always available to meet in person to discuss your project. We have a proven track record of helping Perth businesses succeed online.",
    },
    {
      question: "What do I need to provide to get started?",
      answer:
        "To get started, you will need to provide us with a clear understanding of your business, your goals, and your target audience. We will also need your branding guidelines (logo, colors, fonts) and any content (text, images) you would like to include on the website. We can help you with content creation if needed.",
    },
    {
      question: "Will I be able to update the website myself?",
      answer:
        "Yes, we build all of our websites on user-friendly content management systems (CMS) like WordPress. We provide comprehensive training to ensure you know how to update and manage your new website. You will be able to easily add new pages, blog posts, images, and more.",
    },
    {
      question: "Do you offer web hosting?",
      answer:
        "While we don't provide web hosting directly, we can recommend and help you set up high-quality web hosting with our trusted partners. We will ensure your website is hosted on a fast, secure, and reliable server.",
    },
    {
      question: "What makes you different from other Perth web design companies?",
      answer:
        "We are different because we focus on conversion-focused design and SEO optimisation. We don't just build pretty websites; we build websites that generate leads and sales. Our transparent pricing, no lock-in contracts, and commitment to ROI make us the trusted choice for Perth businesses.",
    },
    {
      question: "How do I get a free quote for my Perth web design project?",
      answer:
        "Simply click the button below to schedule your FREE, no-obligation consultation with one of our senior strategists. We will discuss your project in detail and provide you with a comprehensive quote within 24 hours. There's no pressure and no obligation.",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://growth-conduit-central.lovable.app/",
    "logo": "https://growth-conduit-central.lovable.app/logo.png",
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
    "name": "Odin Digital (Perth)",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Perth",
      "addressRegion": "WA",
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
      "name": "Perth"
    },
    "description": "Professional web design and development services in Perth. We build high-converting, SEO-optimised websites with no lock-in contracts.",
    "name": "Web Design Agency Perth"
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
        <title>Web Design Agency Perth | Odin Digital</title>
        <meta
          name="description"
          content="Perth's leading web design agency. We build high-converting, SEO-optimised websites that generate leads and sales. Get your free Perth web design quote."
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
          
          {/* Split Screen Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full">
            <div className="grid grid-cols-1 gap-16 lg:gap-20 items-center min-h-screen py-24 lg:py-32">
              
              {/* Left Side - Text Content */}
              <div className="space-y-8 lg:space-y-10 animate-slide-up max-w-2xl mx-auto text-center">
                {/* Main Headline */}
                <div className="space-y-6">
                  <h1 className="relative z-30 overflow-visible text-4xl md:text-5xl xl:text-6xl font-black text-charcoal leading-[0.95] tracking-tight">
                    <span className="block mb-3 lg:mb-4">Perth's Leading</span>
                    <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
                      Web Design Agency
                    </span>
                  </h1>
                </div>
                
                {/* Subtitle and Description */}
                <div className="space-y-6 lg:space-y-8">
                  <h2 className="text-xl md:text-2xl lg:text-2xl text-charcoal/90 font-bold leading-tight max-w-2xl">
                    Your Website Should Drive Growth, Not Costs.
                  </h2>
                  
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-2xl font-light">
                    Is your outdated, slow, or overpriced website holding your Perth business back? It's time for a professional Perth web design agency that delivers high-converting websites without the east coast price tag.
                  </p>

                  <p className="text-base md:text-lg text-charcoal/70 leading-relaxed max-w-2xl font-light">
                    In the competitive Perth market, you need a website that performs. A slow, unprofessional, or broken site doesn't just look bad—it actively drives potential customers to your competitors. At Odin Digital, we don't just build pretty websites; we build strategic, SEO-optimised, and conversion-focused digital assets that generate a measurable return on investment.
                  </p>
                </div>
                
                {/* Action Button */}
                <div className="pt-2 flex justify-center">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="text-lg px-12 py-6 shadow-glow"
                    onClick={openForm}
                  >
                    Get Your FREE Perth Web Design Quote →
                  </Button>
                </div>
              </div>
              
              
            </div>
          </div>
        </section>

        {/* As Seen In Section */}
        <AsSeenIn />

        {/* Social Proof Metrics Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              The Proof Is in the Performance
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              We're not just making promises; we're delivering verified results. Here's a snapshot of what our clients have achieved.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                  <metric.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <div className="text-3xl sm:text-4xl font-bold mb-2 text-primary break-words overflow-wrap-anywhere">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground break-words overflow-wrap-anywhere">
                    {metric.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              Does This Sound Familiar? Your Perth Website Isn't Delivering.
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              You have a website, but it's failing to generate the leads and sales your Perth business needs to thrive. It's a common and expensive problem.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <problem.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 break-words overflow-wrap-anywhere">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground break-words overflow-wrap-anywhere">
                    {problem.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 break-words overflow-wrap-anywhere">
              What Our Clients Say
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-6 flex flex-col">
                <p className="text-muted-foreground mb-4 italic break-words overflow-wrap-anywhere flex-grow">
                  "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with."
                </p>
                <div className="mt-auto">
                  <p className="font-semibold">Fabienne Costa</p>
                  <p className="text-sm text-muted-foreground">Founder, YCL Jewels (Gold Coast)</p>
                </div>
              </Card>

              <Card className="p-6 flex flex-col">
                <p className="text-muted-foreground mb-4 italic break-words overflow-wrap-anywhere flex-grow">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
                </p>
                <div className="mt-auto">
                  <p className="font-semibold">Liam C</p>
                  <p className="text-sm text-muted-foreground">Founder, Krush Organics (Sydney)</p>
                </div>
              </Card>

              <Card className="p-6 flex flex-col">
                <p className="text-muted-foreground mb-4 italic break-words overflow-wrap-anywhere flex-grow">
                  "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month."
                </p>
                <div className="mt-auto">
                  <p className="font-semibold">Evan Tsaboukos</p>
                  <p className="text-sm text-muted-foreground">Founder, Imperial Wealth (Melbourne)</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              Web Design Services for Perth Businesses
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              We offer a complete suite of professional web design and development services to help your Perth business succeed online.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow flex flex-col">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 break-words overflow-wrap-anywhere">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow break-words overflow-wrap-anywhere">
                    {service.description}
                  </p>
                  <Button
                    onClick={openForm}
                    className="bg-gradient-primary text-primary-foreground shadow-primary hover:shadow-glow w-full whitespace-normal break-words h-auto py-3 px-6"
                  >
                    {service.cta}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              The Odin Digital Difference: Your Perth Web Design Agency
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              Why choose us as your web design agency in Perth? Because we build websites that actually make you money.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentiators.map((diff, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                  <diff.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-lg sm:text-xl font-bold mb-3 break-words overflow-wrap-anywhere">
                    {diff.title}
                  </h3>
                  <p className="text-muted-foreground break-words overflow-wrap-anywhere">
                    {diff.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              Our Proven 4-Step Web Design Process
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              We follow a simple, effective process to deliver high-quality websites on time and on budget for our Perth clients.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="p-6 hover:shadow-xl transition-shadow h-full">
                    <div className="text-4xl sm:text-5xl font-bold text-primary/20 mb-4 break-words overflow-wrap-anywhere">
                      {step.number}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 break-words overflow-wrap-anywhere">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground break-words overflow-wrap-anywhere">
                      {step.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              Why Choose Odin Digital as Your Perth Web Design Partner?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              You have a lot of choices when it comes to web design agencies in Perth. Here's why we're the right choice for your business.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 break-words overflow-wrap-anywhere">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground break-words overflow-wrap-anywhere">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 sm:p-12 bg-white/80 backdrop-blur-sm border-2 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center space-y-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Ready to Build a Website That Grows Your Business in Perth?
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg sm:text-xl text-charcoal/80 leading-relaxed">
                      Stop losing customers to an outdated, slow, or unprofessional website. It's time to invest in a high-converting website that generates a measurable return on investment.
                    </p>
                    <p className="text-base sm:text-lg text-charcoal/70 leading-relaxed">
                      Take the first step towards transforming your online presence. Schedule your FREE, no-obligation Perth web design consultation and quote with one of our senior strategists today. We'll analyse your current website, discuss your goals, and show you exactly how we can help you build a website that drives real business growth. What do you have to lose?
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button
                      onClick={openForm}
                      variant="hero"
                      size="lg"
                      className="text-lg px-12 py-6 shadow-glow"
                    >
                      Get Your FREE Perth Web Design Quote →
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 break-words overflow-wrap-anywhere">
              Frequently Asked Questions About Web Design in Perth
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left break-words overflow-wrap-anywhere">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground break-words overflow-wrap-anywhere">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t z-50">
          <Button
            onClick={openForm}
            className="w-full bg-gradient-primary text-primary-foreground shadow-primary hover:shadow-glow whitespace-normal h-auto"
            size="lg"
          >
            Get Your Free Quote
          </Button>
        </div>


        <RelatedLocations 
          locations={getRelatedLocations("Perth", "web-design")}
          title="Web Design Services in Other Australian Cities"
        />

      {/* Location Map */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <LocationMap 
            city="Perth"
            coordinates={getLocationData("Perth")?.coordinates || { lat: -31.9505, lng: 115.8605 }}
            address={getLocationData("Perth")?.citations.address}
          />
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default WebDesignPerth;