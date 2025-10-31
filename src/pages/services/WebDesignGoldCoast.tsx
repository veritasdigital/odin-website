import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Users, 
  Award, 
  Target,
  Zap,
  AlertCircle,
  Palette,
  Search,
  ShoppingCart,
  Settings,
  ClipboardCheck,
  Code,
  Rocket,
  MapPin,
  Lightbulb,
  Shield,
  DollarSign,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const WebDesignGoldCoast = () => {
  const { openForm } = useMarketingForm();

  const metrics = [
    { icon: TrendingUp, number: "$574M+", label: "Verified Client Revenue" },
    { icon: Target, number: "540%", label: "Average ROI on Ad Spend" },
    { icon: Users, number: "95%", label: "Client Retention Rate" },
    { icon: Award, number: "283+", label: "Successful Campaigns Delivered" }
  ];

  const problems = [
    {
      icon: AlertCircle,
      title: "The DIY Disaster",
      description: "You tried to save money with a cheap template or a drag-and-drop builder like Wix or Squarespace. Now you have a site that's slow, looks unprofessional, and doesn't show up on Google. It's a liability, not a sales tool."
    },
    {
      icon: Palette,
      title: "The \"Pretty But Useless\" Problem",
      description: "You paid a designer a fortune for a beautiful, custom website, but it doesn't generate a single lead. It's an online brochure with no strategy, no SEO, and no clear path to conversion."
    },
    {
      icon: Settings,
      title: "Technical Headaches & Hidden Fees",
      description: "Your current developer is impossible to get a hold of, charges you a fortune for simple updates, and your site is constantly breaking. You're locked into a system you don't understand and can't control."
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
      icon: Palette,
      title: "Conversion-First Custom Web Design",
      description: "We design and build bespoke websites from the ground up, ensuring they are visually stunning, lightning-fast, and strategically focused on converting visitors into customers. Whether you need a lead generation site or a complex e-commerce platform, our design process is rooted in performance."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Website Development",
      description: "Specializing in platforms like Shopify and WooCommerce, we build scalable e-commerce solutions that handle high traffic and are optimized for sales. We integrate payment gateways, inventory management, and ensure a seamless mobile checkout experience, turning your Gold Coast business into a 24/7 online retailer."
    },
    {
      icon: Code,
      title: "WordPress Development & Maintenance",
      description: "WordPress powers over 40% of the internet, but it requires expert care. We offer custom WordPress development, speed optimization, and ongoing maintenance packages to ensure your site is secure, up-to-date, and performing at its peak."
    },
    {
      icon: ClipboardCheck,
      title: "Website Audits & Redesign",
      description: "If your current Gold Coast website is underperforming, we start with a comprehensive audit. We identify bottlenecks in speed, SEO, and conversion, and then execute a strategic redesign that preserves your SEO equity while transforming your site into a modern, lead-generating machine."
    }
  ];

  const differentiators = [
    {
      icon: MapPin,
      title: "Gold Coast Market Expertise",
      description: "We understand the local demographic, the tourism industry, and the unique challenges of running a business on the Gold Coast. Our designs capture the local aesthetic while targeting the right audience."
    },
    {
      icon: Search,
      title: "Built for SEO from Day One",
      description: "Unlike most designers, we build your website with SEO as a foundational requirement, not an afterthought. This ensures your site is structured to rank well on Google from the moment it launches."
    },
    {
      icon: Zap,
      title: "Speed and Mobile-First Focus",
      description: "In the age of mobile browsing, speed is everything. We guarantee a lightning-fast, mobile-first website that provides an excellent user experience, which Google rewards with higher rankings."
    },
    {
      icon: Shield,
      title: "Transparent Pricing & No Lock-In Contracts",
      description: "You get a clear, fixed quote with no hidden fees. Our maintenance and hosting packages are flexible and month-to-month, ensuring we always earn your trust and business."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Strategy & Planning",
      description: "We start with a deep dive into your business goals, target audience, and competitive landscape. We map out the site structure, user flow, and content strategy to ensure the design is aligned with your business objectives."
    },
    {
      number: "2",
      title: "Design & Development",
      description: "Our team creates wireframes and visual mockups for your approval. Once approved, our developers build the site on a secure, scalable platform (usually WordPress), focusing on clean code, speed, and mobile responsiveness."
    },
    {
      number: "3",
      title: "Content & Testing",
      description: "We integrate your content, including persuasive copywriting and high-quality visuals. The site undergoes rigorous testing across all devices and browsers to ensure flawless functionality, speed, and SEO performance before launch."
    },
    {
      number: "4",
      title: "Launch & Optimization",
      description: "We launch your new Gold Coast website and provide comprehensive training. Our work doesn't stop there; we offer ongoing maintenance and optimization to ensure your site continues to perform and evolve with your business needs."
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "We Build Sales Tools",
      description: "We don't just build websites; we build lead-generating machines that are designed to convert. Our focus is on your ROI."
    },
    {
      icon: MapPin,
      title: "Local Knowledge, Global Standards",
      description: "We combine a deep understanding of the Gold Coast market with world-class design and development standards."
    },
    {
      icon: Lightbulb,
      title: "Full-Service Integration",
      description: "As a full-service agency, we can seamlessly integrate your new website with our SEO, PPC, and Meta Ads strategies for maximum impact."
    },
    {
      icon: Rocket,
      title: "Cutting-Edge Technology",
      description: "We leverage the latest in web technology and AI-powered optimization to ensure your site is fast, secure, and future-proof. This includes using AI tools to optimize image compression, code cleanliness, and content structure for peak performance."
    }
  ];

  const faqs = [
    {
      question: "How much does a professional website cost in Gold Coast?",
      answer: "The cost of a professional website in Gold Coast varies widely depending on the complexity, features, and size. Our projects typically start from $5,000 for a foundational lead-generation website and go up for custom e-commerce or complex development projects. We provide a clear, fixed quote after a free consultation."
    },
    {
      question: "How long does it take to build a website?",
      answer: "A typical lead-generation website takes between 4 to 8 weeks from the initial strategy session to launch. Custom e-commerce or more complex projects may take longer. We prioritize quality and strategy over rushing the process."
    },
    {
      question: "Do you offer website maintenance and support?",
      answer: "Yes, we offer flexible, month-to-month maintenance and support packages. These packages include security updates, backups, software updates, and minor content revisions to ensure your Gold Coast website remains fast, secure, and up-to-date."
    },
    {
      question: "Will my new website be mobile-friendly?",
      answer: "Absolutely. Every website we design is built using a mobile-first approach, meaning it is fully responsive and optimized to look and perform flawlessly on all devices, including smartphones and tablets."
    },
    {
      question: "What platform do you use for web development?",
      answer: "We primarily use WordPress for its flexibility, scalability, and SEO-friendliness. For e-commerce projects, we often utilize WooCommerce (on WordPress) or Shopify, depending on the client's specific needs and budget."
    },
    {
      question: "Will my website be optimized for SEO?",
      answer: "Yes. SEO is a non-negotiable part of our web design process. We implement technical SEO best practices, including site speed optimization, mobile responsiveness, clear site architecture, and initial on-page optimization, to give your Gold Coast business the best chance to rank."
    },
    {
      question: "Can you help with website copywriting?",
      answer: "Yes. We offer professional copywriting services. Our copywriters specialize in direct-response, conversion-focused copy that is designed to turn your Gold Coast visitors into paying customers."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Yes, we specialize in working with small to medium-sized businesses on the Gold Coast. We understand the budget constraints and the need for a high ROI, and we tailor our solutions accordingly."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes. We often perform strategic website redesigns. We start with a full audit to identify what's working and what's not, ensuring we preserve any existing SEO value while modernizing the design and improving conversion pathways."
    },
    {
      question: "What is the difference between web design and web development?",
      answer: "Web design focuses on the visual aesthetic and user experience (what the site looks like). Web development focuses on the technical build and functionality (how the site works). We offer both services in-house for a seamless, integrated process."
    },
    {
      question: "Do you offer e-commerce website design?",
      answer: "Yes. We build high-converting e-commerce websites tailored for the Gold Coast retail and service market, integrating advanced features like inventory management, secure payment gateways, and shipping solutions."
    },
    {
      question: "Will I own my website after it's built?",
      answer: "Absolutely. Upon final payment, you own 100% of your website, including the domain, hosting, and all intellectual property. We believe in transparency and empowering our clients."
    },
    {
      question: "What is a conversion-focused website?",
      answer: "A conversion-focused website is one that is strategically designed to guide visitors toward a specific action, such as filling out a contact form, making a purchase, or calling your business. Every element is placed to maximize lead generation."
    },
    {
      question: "How do I get started with a website project?",
      answer: "Simply click the button below to schedule your FREE, no-obligation strategy session. We'll discuss your vision, audit your current online presence, and provide a clear roadmap for your new Gold Coast website."
    },
    {
      question: "Do you offer a guarantee on your web design services?",
      answer: "While we cannot guarantee specific sales results (as that depends on your business model and market), we guarantee a professional, high-quality, fully functional website built to the agreed-upon specifications, optimized for speed, and designed for conversion."
    }
  ];

  const relatedServices = [
    { name: "Google Ads Gold Coast", url: "/google-ads-gold-coast" },
    { name: "Facebook Ads Gold Coast", url: "/facebook-ads-gold-coast" },
    { name: "SEO Gold Coast", url: "/seo-gold-coast" },
    { name: "Email Marketing", url: "/services/email-marketing" },
    { name: "Social Media Advertising", url: "/social-media-advertising" },
    { name: "Marketing Consulting", url: "/services/marketing-consulting" }
  ];

  const relatedCities = [
    { name: "Web Design Brisbane", url: "/web-design-brisbane" },
    { name: "Web Design Sydney", url: "/web-design-sydney" },
    { name: "Web Design Melbourne", url: "/web-design-melbourne" },
    { name: "Web Design Perth", url: "/web-design-perth" }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://odindigital.com.au",
    "logo": "https://odindigital.com.au/logo.png"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Odin Digital - Web Design Agency Gold Coast",
    "image": "https://odindigital.com.au/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gold Coast",
      "addressRegion": "QLD",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -28.0167,
      "longitude": 153.4000
    },
    "url": "https://odindigital.com.au/web-design-gold-coast",
    "telephone": "+61-XXX-XXX-XXX",
    "priceRange": "$$$$",
    "openingHours": "Mo-Fr 09:00-17:00"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design and Development Service",
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital"
    },
    "areaServed": {
      "@type": "City",
      "name": "Gold Coast"
    },
    "description": "Professional web design and development services for Gold Coast businesses, focused on conversion optimization and ROI."
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
        <title>Web Design Agency Gold Coast | Conversion-Focused Websites - Odin Digital</title>
        <meta name="description" content="Stop losing customers to DIY websites. Our Gold Coast web design agency builds stunning, SEO-friendly websites that generate leads and sales. No lock-in contracts." />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <Header />

        {/* Hero Section with Floating Circles */}
        <section className="relative pt-20 pb-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
          {/* Floating decorative circles */}
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/3 w-40 sm:w-64 h-40 sm:h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight px-2 mt-4 sm:mt-0">
                Web Design Agency Gold Coast
              </h1>
              
              <p className="hero-sub-headline text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary max-w-4xl mx-auto leading-tight px-2">
                Stop Losing Customers to DIY Websites. Get a Gold Coast Website That Converts.
              </p>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
                Is your website an online brochure that looks pretty but doesn't generate leads or sales? It's time for a Gold Coast web design agency that focuses on performance, not just pixels.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                At Odin Digital, we build websites that are sales tools. We combine stunning, modern design with a conversion-first strategy, ensuring your new site is fast, SEO-friendly, and optimized to turn Gold Coast visitors into paying customers. Ready to upgrade your online presence?
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 px-2">
                <Button 
                  size="xl" 
                  variant="cta"
                  onClick={openForm}
                  className="w-full sm:w-auto text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8"
                >
                  Get Your FREE Web Design & Strategy Session →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-6 sm:mb-8 md:mb-12 px-2">
              The Proof Is in the Performance
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-center mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto px-2">
              We're not just making promises; we're delivering verified results. Here's a snapshot of what our clients have achieved.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="text-center space-y-2 p-4 sm:p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mx-auto text-primary mb-2 sm:mb-3" />
                    <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground break-words">
                      {metric.number}
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-muted-foreground break-words">
                      {metric.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                Is Your Gold Coast Website a Liability, Not an Asset?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                In the competitive Gold Coast market, a poor website is costing you business every single day. We fix these common problems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <div 
                    key={index} 
                    className="p-4 sm:p-6 md:p-8 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Button
                size="lg" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6"
              >
                Stop Wasting Money: Get Your Free Audit →
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                What Our Clients Say
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Don't just take our word for it. Here's what business owners are saying about working with Odin Digital.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="p-4 sm:p-6 md:p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 italic leading-relaxed flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-3 sm:pt-4 mt-auto">
                    <p className="font-semibold text-sm sm:text-base text-foreground">{testimonial.author}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                Gold Coast Web Design & Development Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                We offer a full suite of web services designed to build, maintain, and optimize your online presence for maximum growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                <div 
                  key={index}
                  className="p-4 sm:p-6 md:p-8 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                    {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Button
                size="lg" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6"
              >
                Get Your FREE Web Design & Strategy Session →
              </Button>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                The Odin Digital Difference: Performance Over Pixels
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                We are not just designers; we are performance strategists. Here's why Gold Coast businesses choose us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="p-6 sm:p-8 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {item.description}
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
                Our Proven 4-Step Web Design Process
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                We follow a simple, transparent process to take your Gold Coast website from concept to conversion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 relative">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="p-6 sm:p-8 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 relative"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl sm:text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < processSteps.length - 1 && index % 2 === 0 && (
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
                className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6"
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
                Why Gold Coast Businesses Trust Odin Digital
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                You need a web partner who is invested in your success. Here's why we're the right choice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="p-6 sm:p-8 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
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
                className="w-full text-xs sm:text-sm md:text-base px-4 sm:px-6"
              >
                Get Your Free Website Audit →
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-primary/20 via-secondary/10 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready for a Website That Actually Works?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stop settling for a website that just sits there. Get a Gold Coast web design that drives leads, sales, and growth.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule your free, no-obligation strategy session today. We'll analyze your current online presence and show you exactly how a conversion-focused website can transform your business.
            </p>
            <Button 
              size="xl" 
              variant="cta"
              onClick={openForm}
              className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-8"
            >
              Get Your FREE Web Design & Strategy Session →
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                Frequently Asked Questions About Gold Coast Web Design
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="p-4 sm:p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3">
                    {index + 1}. {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services and Cities */}
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                  Related Services
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {relatedServices.map((service, index) => (
                    <Link 
                      key={index}
                      to={service.url}
                      className="p-3 sm:p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center min-h-[80px] sm:min-h-[100px]"
                    >
                      <span className="text-foreground font-medium hover:text-primary block text-sm sm:text-base">
                        {service.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                  Other Cities We Serve
                </h2>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {relatedCities.map((city, index) => (
                    <Link 
                      key={index}
                      to={city.url}
                      className="p-3 sm:p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center min-h-[80px] sm:min-h-[100px]"
                    >
                      <span className="text-foreground font-medium hover:text-primary block text-sm sm:text-base">
                        {city.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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
            className="w-full text-xs sm:text-sm md:text-base px-4 sm:px-6"
          >
            Get Your Free Strategy Session →
          </Button>
        </div>
      </div>
    </>
  );
};

export default WebDesignGoldCoast;
