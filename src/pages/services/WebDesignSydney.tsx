import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, TrendingUp, Users, Award, Zap, Target, Search, Smartphone, CheckCircle2, Layers, ShoppingBag, Code2, Palette, Gauge, Globe } from "lucide-react";

const WebDesignSydney = () => {
  const stats = [
    { label: "Average ROI", value: "540%", icon: TrendingUp },
    { label: "Client Retention", value: "95%", icon: Users },
    { label: "Revenue Generated", value: "$574M+", icon: Award },
    { label: "Happy Clients", value: "283+", icon: Zap }
  ];

  const problems = [
    {
      title: "Outdated Design That Hurts Your Brand",
      description: "Your website looks like it's from 2010. Visitors bounce within seconds because it screams 'unprofessional.' In today's digital-first world, your website is your storefront. An outdated design doesn't just look bad—it actively damages your brand credibility and drives customers to your competitors."
    },
    {
      title: "Poor User Experience That Drives People Away",
      description: "Confusing navigation. Unclear calls-to-action. Visitors can't find what they're looking for. They leave frustrated, and you lose sales. A website that frustrates users is worse than no website at all. Every click matters, every second counts."
    },
    {
      title: "Slow Load Times That Cost You Customers",
      description: "Your website takes 8+ seconds to load. 53% of mobile users abandon sites that take longer than 3 seconds. Every extra second of load time costs you customers and revenue. Speed isn't a nice-to-have; it's a business necessity."
    },
    {
      title: "Not Mobile-Optimised in a Mobile-First World",
      description: "Over 60% of web traffic comes from mobile devices. If your website doesn't work perfectly on mobile, you're literally turning away the majority of your potential customers. Google penalises non-mobile-friendly sites in search rankings. You're invisible when it matters most."
    },
    {
      title: "No Clear Calls-to-Action or Conversion Strategy",
      description: "Visitors land on your site and... nothing. No clear next step. No compelling reason to take action. Your website is a digital brochure, not a sales tool. You're getting traffic but zero conversions. Every visitor should have a clear path to becoming a customer."
    },
    {
      title: "Poor SEO Integration That Keeps You Invisible",
      description: "Your website has all the features but zero traffic because no one can find it on Google. SEO isn't something you bolt on later—it needs to be built into the foundation. Without proper SEO, you're invisible to potential customers searching for exactly what you offer."
    },
    {
      title: "Difficult to Update and Maintain",
      description: "Want to add a blog post? Update a price? Change a photo? You need to call your developer and wait 2 weeks. A modern website should be easy for you to update yourself. You shouldn't be held hostage by your web developer for simple content changes."
    },
    {
      title: "No Ongoing Support When Things Break",
      description: "Your website crashes at 3 AM on a Friday. Good luck getting hold of your developer. Websites need ongoing maintenance, security updates, and support. Without it, you're one hack or technical issue away from losing your entire online presence."
    }
  ];

  const solutions = [
    {
      icon: Palette,
      title: "Modern, Aesthetically Excellent Design",
      description: "We design websites that look stunning and reflect your brand perfectly. Clean, modern design that builds trust and credibility from the first glance."
    },
    {
      icon: Users,
      title: "User-Centric Design That Works",
      description: "Intuitive navigation, clear information hierarchy, and seamless user journeys. We design for humans, not robots."
    },
    {
      icon: Gauge,
      title: "Lightning-Fast Performance",
      description: "Our websites load in under 2 seconds. Fast websites rank higher, convert better, and keep users engaged."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Perfect on every device. Beautiful on desktop, flawless on mobile. Responsive design built from the ground up."
    },
    {
      icon: Target,
      title: "Conversion-Focused Design",
      description: "Clear calls-to-action, strategic placement, persuasive copy. Every element designed to guide visitors toward conversion."
    },
    {
      icon: Search,
      title: "SEO-Integrated from the Start",
      description: "Proper structure, clean code, fast load times, schema markup. Your website will rank on Google from day one."
    },
    {
      icon: Code2,
      title: "Easy to Update and Maintain",
      description: "User-friendly CMS (WordPress or similar). Update your own content without calling a developer. Full training included."
    },
    {
      icon: CheckCircle2,
      title: "Ongoing Support and Maintenance",
      description: "Regular updates, security monitoring, backups, and 24/7 support. We're here when you need us."
    },
    {
      icon: TrendingUp,
      title: "Transparent Pricing and Clear ROI",
      description: "Fixed-price quotes. No hidden fees. Clear timelines. Your website should pay for itself through increased conversions."
    }
  ];

  const services = [
    {
      icon: Globe,
      title: "Website Design and Development",
      description: "Custom website design and development tailored to your business. Modern design, clean code, fast performance. We build websites that represent your brand and drive results."
    },
    {
      icon: ShoppingBag,
      title: "E-commerce Website Design",
      description: "High-converting online stores built on Shopify, WooCommerce, or custom platforms. Product pages optimised for sales, streamlined checkout, secure payments, inventory management."
    },
    {
      icon: Layers,
      title: "Website Redesign",
      description: "Transform your outdated website into a modern, high-converting asset. We'll migrate your content, improve design and UX, boost performance, and maintain your SEO."
    },
    {
      icon: Code2,
      title: "WordPress Development",
      description: "Custom WordPress websites, theme customisation, plugin development, and WordPress optimisation. Flexible, user-friendly, and perfect for businesses that want control."
    },
    {
      icon: Smartphone,
      title: "Responsive Website Design",
      description: "Websites that work perfectly on all devices and screen sizes. Mobile-first design approach ensures your site looks and functions flawlessly everywhere."
    },
    {
      icon: Gauge,
      title: "Website Performance Optimisation",
      description: "Speed up your slow website. Image optimisation, code minification, caching, CDN setup. Most websites load in under 2 seconds after our optimisation."
    },
    {
      icon: Search,
      title: "Website SEO Integration",
      description: "SEO built into the foundation of your website. Proper structure, metadata, schema markup, fast load times, mobile optimisation, SEO-friendly content."
    },
    {
      icon: Target,
      title: "Conversion Rate Optimisation (CRO)",
      description: "Optimise your website for maximum conversions. A/B testing, heat mapping, user behaviour analysis, strategic improvements to increase leads and sales."
    }
  ];

  const whyChooseUs = [
    "540% Average ROI",
    "95% Client Retention",
    "$574M+ in Revenue Generated",
    "Modern, Award-Winning Design",
    "Lightning-Fast Performance",
    "Mobile-First Approach",
    "Conversion-Focused",
    "Ongoing Support Included",
    "Transparent Pricing",
    "Local Expertise, National Scale"
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery and Strategy",
      description: "We start by understanding your business, goals, target audience, and competitors. We audit your current situation (if you have a website) and develop a comprehensive strategy aligned with your business objectives."
    },
    {
      number: "02",
      title: "Design and Wireframing",
      description: "Our design team creates wireframes and mockups that prioritise user experience and conversions. We focus on clean design, clear information hierarchy, and strategic placement of calls-to-action. You'll have full input throughout the design process."
    },
    {
      number: "03",
      title: "Development and Optimisation",
      description: "Our development team builds your website using clean, modern code with a focus on speed, security, and SEO. We optimise for performance, implement tracking and analytics, and integrate any third-party tools you need."
    },
    {
      number: "04",
      title: "Launch and Ongoing Support",
      description: "We handle the entire launch process, provide comprehensive training, and offer ongoing support and maintenance. Your website stays secure, fast, and up-to-date. We're here to help you succeed."
    }
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "It depends on the complexity and scope of your project. A simple website might take 4–6 weeks. A more complex website with e-commerce or custom functionality might take 8–12 weeks. We'll give you a timeline during the discovery phase."
    },
    {
      question: "How much does a website cost?",
      answer: "It depends on your requirements. A simple brochure website might cost $3,000–$8,000. A more complex website with e-commerce or custom functionality might cost $10,000–$30,000+. We offer flexible pricing options and can work within your budget."
    },
    {
      question: "Why is my website not converting?",
      answer: "There are usually several reasons: poor design or user experience, unclear calls-to-action, slow load times, not mobile-optimised, or weak copy. We analyse your website and identify the specific issues."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely. We can redesign your website to improve design, user experience, performance, and conversions. We'll migrate your existing content and set up redirects to maintain your SEO."
    },
    {
      question: "Do you offer WordPress development?",
      answer: "Yes. We specialise in WordPress development. Custom WordPress websites, theme customisation, plugin development, and WordPress optimisation. WordPress is flexible and user-friendly."
    },
    {
      question: "How do you ensure my website is mobile-friendly?",
      answer: "We design for mobile first. We test on all devices and screen sizes. We use responsive design techniques to ensure your website looks and works perfectly on mobile. Mobile optimisation is built in from the start."
    },
    {
      question: "How do you improve website speed?",
      answer: "We optimise images, minify code, set up caching, use a CDN, and optimise hosting. We monitor performance and continuously look for improvements. Most of our websites load in under 2 seconds."
    },
    {
      question: "How do you integrate SEO into web design?",
      answer: "SEO is built in from the start. We use proper structure, metadata, schema markup, fast load times, mobile optimisation, and SEO-friendly content. Your website will rank in Google."
    },
    {
      question: "Can you build e-commerce websites?",
      answer: "Yes. We specialise in building high-converting e-commerce websites. Product pages optimised for sales, streamlined checkout, secure payment integration, and inventory management."
    },
    {
      question: "What CMS do you recommend?",
      answer: "We typically recommend WordPress for most businesses. It's flexible, user-friendly, and perfect for businesses that want to manage their own content. We can also use other platforms depending on your needs."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes. We provide ongoing support, maintenance, updates, security patches, and monitoring. Your website stays secure, fast, and up-to-date. We're here to help."
    },
    {
      question: "How do you measure website success?",
      answer: "We track metrics like traffic, conversions, bounce rate, time on page, and ROI. We provide regular reports and recommendations for improvement. We focus on business results, not just vanity metrics."
    },
    {
      question: "Can you help with website copy?",
      answer: "Yes. We can help with copywriting, page structure, calls-to-action, and persuasive messaging. We understand conversion psychology and write copy designed to convert."
    },
    {
      question: "What if I want to switch web hosts or platforms later?",
      answer: "We build websites using standard technologies and provide full documentation. You'll have complete access to your website and can switch platforms or hosts if you want. You're not locked in."
    },
    {
      question: "How do you handle website security?",
      answer: "We implement security best practices: SSL certificates, regular updates, security monitoring, backups, and secure coding practices. Your website and your customers' data are protected."
    },
    {
      question: "Can you integrate my website with my CRM or other tools?",
      answer: "Yes. We can integrate your website with CRM systems, email marketing platforms, analytics tools, and other business software. We'll make sure your website works with your existing systems."
    },
    {
      question: "What's the difference between web design and web development?",
      answer: "Web design is about how the website looks and feels (visual design, user experience). Web development is about how the website works (coding, functionality, backend). We do both."
    },
    {
      question: "Do you offer website maintenance packages?",
      answer: "Yes. We offer ongoing maintenance packages that include updates, security patches, monitoring, backups, and support. You can focus on your business while we take care of your website."
    },
    {
      question: "How do you approach website accessibility?",
      answer: "We build websites that are accessible to everyone, including people with disabilities. We follow WCAG guidelines and best practices for accessibility. Your website should work for everyone."
    },
    {
      question: "What's your process for getting feedback and revisions?",
      answer: "We're collaborative. We show you work in progress and get your feedback regularly. We make revisions based on your input. We don't launch until you're happy with the result."
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Odin Digital",
    "description": "Web design and development agency in Sydney specialising in modern, high-converting websites",
    "image": "https://odindigital.com.au/logo.png",
    "url": "https://odindigital.com.au/web-design-sydney",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    },
    "areaServed": {
      "@type": "City",
      "name": "Sydney"
    },
    "priceRange": "$3000-$30000",
    "serviceType": "Web Design and Development",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "283"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Design and Development",
    "description": "Professional web design and development services including responsive design, e-commerce, WordPress development, and conversion optimisation",
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital",
      "url": "https://odindigital.com.au"
    },
    "areaServed": "Sydney, Australia",
    "serviceType": "Web Design and Development"
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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://odindigital.com.au",
    "logo": "https://odindigital.com.au/logo.png",
    "description": "Digital marketing agency in Australia offering PPC, Meta Ads, Web Design, and SEO services",
    "sameAs": [
      "https://www.facebook.com/odindigital",
      "https://www.instagram.com/odindigital",
      "https://www.linkedin.com/company/odindigital"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "hello@odindigital.com.au"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "283"
    }
  };

  return (
    <>
      <Helmet>
        <title>Web Design Sydney | Modern, High-Converting Websites | Odin Digital</title>
        <meta name="description" content="Professional web design and development in Sydney. Modern design, fast performance, mobile-optimised, conversion-focused. 283+ happy clients. Book your free consultation." />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background overflow-x-hidden pb-24 md:pb-0">
        <Header />
        <SideTab />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20 md:pt-40 md:pb-32">
          {/* Floating Circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 break-words overflow-wrap-anywhere">
                Web design Sydney
              </h1>
              <p className="hero-sub-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground/90 break-words overflow-wrap-anywhere leading-tight">
                Your website isn't converting because it's not designed for conversions.
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-6 text-muted-foreground leading-relaxed break-words overflow-wrap-anywhere">
                Stop settling for outdated, slow, non-converting websites. At Odin Digital, we design and develop websites that look beautiful, load fast, and drive real business results. We've helped 283+ businesses across Australia transform their online presence from a liability into their most powerful sales tool.
              </p>
              <p className="text-sm sm:text-base md:text-lg mb-10 text-muted-foreground leading-relaxed break-words overflow-wrap-anywhere">
                From e-commerce platforms to professional services websites, we build websites that work as hard as you do. Modern design. User-centric experience. Lightning-fast performance. Built for conversions.
              </p>
              <p className="text-sm sm:text-base md:text-lg mb-10 text-muted-foreground leading-relaxed break-words overflow-wrap-anywhere font-semibold">
                No templates. No shortcuts. Just strategic, results-driven web design.
              </p>
              <Button
                variant="cta"
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="text-base md:text-lg h-14 px-8 whitespace-normal break-words text-center"
              >
                Book Your Free Consultation <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="p-8 text-center hover-scale border-border/50 bg-card">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <div className="text-4xl font-bold mb-2 text-foreground">{stat.value}</div>
                    <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-words overflow-wrap-anywhere">Why Your Website Isn't Working</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                If any of these sound familiar, it's time for a change.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {problems.map((problem, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card hover-scale">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-foreground break-words overflow-wrap-anywhere">{problem.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words overflow-wrap-anywhere">{problem.description}</p>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                variant="cta"
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="text-base md:text-lg h-14 px-8 whitespace-normal break-words text-center"
              >
                Book Your Free Consultation <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-words overflow-wrap-anywhere">Web Design That Drives Results</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We solve every pain point with strategic, conversion-focused web design.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <Card key={index} className="p-8 border-border/50 bg-card hover-scale">
                    <Icon className="h-10 w-10 mb-4 text-primary" />
                    <h3 className="text-lg sm:text-xl font-bold mb-4 text-foreground break-words overflow-wrap-anywhere">{solution.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words overflow-wrap-anywhere">{solution.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-words overflow-wrap-anywhere">Our Web Design and Development Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive web design solutions tailored to your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-8 border-border/50 bg-card hover-scale">
                    <Icon className="h-10 w-10 mb-4 text-primary" />
                    <h3 className="text-base sm:text-lg font-bold mb-4 text-foreground break-words overflow-wrap-anywhere">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed break-words overflow-wrap-anywhere">{service.description}</p>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <Button
                variant="cta"
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="text-base md:text-lg h-14 px-8 whitespace-normal break-words text-center"
              >
                Book Your Free Consultation <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-words overflow-wrap-anywhere">Why Sydney Businesses Choose Odin Digital</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Results that speak for themselves.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="p-6 border-border/50 bg-card hover-scale text-center">
                  <CheckCircle2 className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <p className="text-sm sm:text-base font-semibold text-foreground break-words overflow-wrap-anywhere">{reason}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-words overflow-wrap-anywhere">Our Web Design Process</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A transparent, collaborative process that delivers results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card hover-scale">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-foreground break-words overflow-wrap-anywhere">{step.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words overflow-wrap-anywhere">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 break-words overflow-wrap-anywhere">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:text-primary break-words overflow-wrap-anywhere">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-2 break-words overflow-wrap-anywhere">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 break-words overflow-wrap-anywhere">Ready to Build a Website That Actually Converts?</h2>
              <p className="text-base sm:text-lg md:text-xl mb-10 text-muted-foreground leading-relaxed break-words overflow-wrap-anywhere">
                Stop settling for outdated, non-converting websites. Let's build a website that drives real business results.
              </p>
              <p className="text-sm sm:text-base md:text-lg mb-10 text-muted-foreground leading-relaxed break-words overflow-wrap-anywhere">
                Book a free consultation with one of our web design strategists. We'll discuss your goals, audit your current situation (if you have a website), and show you exactly how we can help.
              </p>
              <Button
                variant="cta"
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="text-base md:text-lg h-14 px-8 whitespace-normal break-words text-center"
              >
                Book Your Free Consultation <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
              </Button>
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
            Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default WebDesignSydney;
