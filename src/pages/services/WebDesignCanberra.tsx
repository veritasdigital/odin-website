import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Link } from "react-router-dom";
import { Palette, ShoppingCart, Code, RefreshCw, Settings, Lightbulb, CheckCircle2, Target, MapPin, Shield, TrendingUp, Users, Clock, FileText, Rocket, HeadphonesIcon, Briefcase, Building, Store, Coffee, Stethoscope, Home } from "lucide-react";
const WebDesignCanberra = () => {
  const {
    openForm
  } = useMarketingForm();
  const challenges = [{
    icon: Target,
    title: "Cost Barrier",
    description: "Many Canberra businesses think professional web design is too expensive, leading them to cheap DIY solutions that don't deliver results."
  }, {
    icon: Shield,
    title: "Quality Issues",
    description: "Low-cost web designers often cut corners, delivering websites that look unprofessional and don't work properly on mobile devices."
  }, {
    icon: HeadphonesIcon,
    title: "Support Problems",
    description: "After your website launches, many designers disappear. You're left with no support when you need updates or fixes."
  }, {
    icon: Code,
    title: "Technical Complexity",
    description: "Website technology is complex. Without expert guidance, you risk security vulnerabilities, slow performance, and poor SEO."
  }];
  const whyChooseUs = [{
    icon: MapPin,
    title: "We Understand Canberra",
    description: "We've worked with over 150 Canberra businesses across diverse industries. We understand the local market, your customers, and what works in the ACT."
  }, {
    icon: TrendingUp,
    title: "Affordable Quality",
    description: "Professional web design doesn't have to break the bank. We offer flexible pricing and payment plans to suit your budget without compromising quality."
  }, {
    icon: Target,
    title: "Conversion-Focused Design",
    description: "Your website should generate leads and sales, not just look pretty. We design every element to convert visitors into customers."
  }, {
    icon: Rocket,
    title: "Local SEO Expertise",
    description: "We optimise your website to rank in Canberra-specific searches. When locals search for your services, they'll find you first."
  }, {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "We don't disappear after launch. We provide ongoing maintenance, updates, and support to ensure your website continues to perform."
  }, {
    icon: CheckCircle2,
    title: "Proven Results",
    description: "Our Canberra clients see real results: increased traffic, more leads, and higher sales. We focus on ROI, not just aesthetics."
  }];
  const services = [{
    icon: Palette,
    title: "Website Design & Development",
    description: "Custom website design and development tailored to your brand. Modern, mobile-friendly, and optimised for conversions.",
    features: ["Custom design matching your brand", "Mobile-responsive layouts", "Fast loading speeds", "SEO-friendly structure"]
  }, {
    icon: ShoppingCart,
    title: "E-Commerce Website Design",
    description: "Full-featured online stores that drive sales. Secure payment processing, inventory management, and seamless checkout.",
    features: ["Shopify and WooCommerce platforms", "Secure payment gateway integration", "Product catalogue management", "Mobile-optimised checkout"]
  }, {
    icon: Code,
    title: "WordPress Web Design",
    description: "WordPress websites that are easy to update and manage. Flexible, scalable, and built for growth.",
    features: ["Custom WordPress themes", "Easy content management", "Plugin integration", "Training and documentation"]
  }, {
    icon: RefreshCw,
    title: "Website Redesign",
    description: "Transform your outdated website into a modern, high-performing asset. Preserve your SEO while improving conversions.",
    features: ["Comprehensive website audit", "Modern design refresh", "SEO preservation", "Performance optimisation"]
  }, {
    icon: Settings,
    title: "Website Maintenance & Support",
    description: "Keep your website secure, fast, and up-to-date. Monthly maintenance packages with unlimited support.",
    features: ["Security updates and backups", "Performance monitoring", "Content updates", "Technical support"]
  }];
  const processSteps = [{
    number: "1",
    title: "Discovery & Strategy",
    description: "We learn about your business, goals, and target audience. We research your competitors and identify opportunities.",
    deliverable: "Strategy document and project plan"
  }, {
    number: "2",
    title: "Design & Wireframing",
    description: "We create wireframes and visual designs for your approval. You see exactly what your website will look like.",
    deliverable: "Visual mockups and design concepts"
  }, {
    number: "3",
    title: "Development",
    description: "Our developers build your website using modern technology. We ensure it's fast, secure, and mobile-friendly.",
    deliverable: "Functional website on staging server"
  }, {
    number: "4",
    title: "Content Creation",
    description: "We help create compelling copy and source high-quality images. Your content is optimised for conversions and SEO.",
    deliverable: "Professional content and imagery"
  }, {
    number: "5",
    title: "Launch & Optimisation",
    description: "We launch your website and monitor performance. We make adjustments to ensure everything works perfectly.",
    deliverable: "Live website with analytics setup"
  }, {
    number: "6",
    title: "Ongoing Support",
    description: "We provide training and ongoing support. You're never left alone with technical issues or questions.",
    deliverable: "Training materials and support access"
  }];
  const businessTypes = [{
    icon: Briefcase,
    title: "Professional Services",
    description: "Law firms, accounting practices, and consulting businesses need websites that build trust and generate quality leads.",
    solution: "We create professional, authoritative websites that showcase your expertise and convert visitors into clients."
  }, {
    icon: Building,
    title: "Government Contractors",
    description: "Canberra's unique market of government contractors needs websites that demonstrate capability and compliance.",
    solution: "We design websites that highlight your credentials, past projects, and security compliance to win contracts."
  }, {
    icon: Store,
    title: "Retail & E-Commerce",
    description: "Retailers need online stores that drive sales and compete with national brands.",
    solution: "We build e-commerce platforms that are easy to manage, mobile-optimised, and designed to maximise conversions."
  }, {
    icon: Coffee,
    title: "Hospitality",
    description: "Restaurants, hotels, and cafes need websites that showcase their offerings and drive reservations.",
    solution: "We create visually stunning websites with online booking, menu displays, and mobile-friendly designs."
  }, {
    icon: Stethoscope,
    title: "Medical & Dental Practices",
    description: "Healthcare providers need websites that are informative, accessible, and compliant with privacy regulations.",
    solution: "We design patient-friendly websites with online booking, service information, and HIPAA-compliant forms."
  }, {
    icon: Home,
    title: "Real Estate",
    description: "Real estate agents need websites that showcase properties and generate leads from buyers and sellers.",
    solution: "We build property showcase websites with IDX integration, lead capture forms, and mobile-optimised search."
  }];
  const faqs = [{
    question: "How much does a website cost?",
    answer: "Website costs vary depending on complexity. A simple brochure website might cost $2,000–$4,000. An e-commerce website might cost $5,000–$10,000. A complex custom website might cost more. We offer flexible pricing and can work within your budget."
  }, {
    question: "How long does it take to build a website?",
    answer: "A typical website takes 6–12 weeks from start to finish. This includes discovery, design, development, content creation, and testing. Rush timelines are available for an additional fee."
  }, {
    question: "Can you help with content?",
    answer: "Yes. We offer professional copywriting services. Our copywriters specialise in conversion-focused content that turns visitors into customers. We can also help source professional images and graphics."
  }, {
    question: "Will my website rank in Google?",
    answer: "We optimise every website for search engines. We use SEO best practices to help your website rank for relevant keywords. However, ranking takes time. Most websites see results within 3–6 months."
  }, {
    question: "Can I update my website myself?",
    answer: "Yes. We build websites using content management systems (CMS) like WordPress that allow you to update content yourself. We provide training and documentation."
  }, {
    question: "Do you provide hosting?",
    answer: "We can recommend hosting providers or we can manage hosting for you. We ensure your hosting is fast, secure, and reliable."
  }, {
    question: "Can I make changes after the website launches?",
    answer: "Absolutely. We include a certain number of revision rounds during development. After launch, we offer maintenance packages or hourly support for updates and changes."
  }, {
    question: "Will my website work on mobile devices?",
    answer: "Every website we build is fully responsive and mobile-optimised. Your website will look great and function perfectly on all devices, from smartphones to desktop computers."
  }, {
    question: "Can you integrate with my existing systems?",
    answer: "Yes. We can integrate your website with CRM systems, email marketing platforms, booking systems, payment processors, and other third-party tools."
  }, {
    question: "How do you ensure my website is secure?",
    answer: "We implement security best practices including SSL certificates, regular updates, secure hosting, firewall protection, and regular backups. We also monitor for vulnerabilities and threats."
  }];
  const relatedServices = [{
    name: "Google Ads Canberra",
    url: "/google-ads-canberra"
  }, {
    name: "Facebook Ads Canberra",
    url: "/facebook-ads-canberra"
  }, {
    name: "SEO Canberra",
    url: "/seo-canberra"
  }, {
    name: "Email Marketing",
    url: "/services/email-marketing"
  }, {
    name: "Social Media Advertising",
    url: "/social-media-advertising"
  }, {
    name: "Marketing Consulting",
    url: "/services/marketing-consulting"
  }];
  const relatedCities = [{
    name: "Web Design Sydney",
    url: "/web-design-sydney"
  }, {
    name: "Web Design Melbourne",
    url: "/web-design-melbourne"
  }, {
    name: "Web Design Brisbane",
    url: "/web-design-brisbane"
  }, {
    name: "Web Design Gold Coast",
    url: "/web-design-gold-coast"
  }];
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "LocalBusiness",
      "@id": "https://odindigital.com.au/#local-business",
      "name": "Odin Digital",
      "url": "https://odindigital.com.au",
      "logo": "https://odindigital.com.au/logo.png",
      "description": "Professional web design and development agency in Canberra. Website design, e-commerce, WordPress, and digital marketing.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Canberra",
        "addressRegion": "ACT",
        "addressCountry": "AU"
      },
      "areaServed": {
        "@type": "City",
        "name": "Canberra"
      }
    }, {
      "@type": "WebPage",
      "@id": "https://odindigital.com.au/web-design-canberra#webpage",
      "url": "https://odindigital.com.au/web-design-canberra",
      "name": "Web Design Canberra | Professional Website Design & Development",
      "description": "Professional web design & development for Canberra businesses. Website design, e-commerce, WordPress, redesign, and support. 150+ Canberra clients.",
      "inLanguage": "en-AU"
    }, {
      "@type": "Service",
      "@id": "https://odindigital.com.au/web-design-canberra#web-design",
      "name": "Web Design & Development",
      "description": "Professional web design and development services for Canberra businesses.",
      "provider": {
        "@id": "https://odindigital.com.au/#local-business"
      },
      "areaServed": {
        "@type": "City",
        "name": "Canberra"
      },
      "serviceType": "Web Design"
    }, {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }, {
      "@type": "AggregateRating",
      "@id": "https://odindigital.com.au/web-design-canberra#rating",
      "ratingValue": "4.9",
      "ratingCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }]
  };
  return <>
      <Helmet>
        <title>Web Design Canberra | Professional Website Design & Development</title>
        <meta name="description" content="Professional web design & development for Canberra businesses. Website design, e-commerce, WordPress, redesign, and support. 150+ Canberra clients." />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <Header />

        {/* Hero Section */}
        <section className="relative isolate overflow-hidden min-h-screen flex items-center bg-white">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          </div>
          
          {/* Floating Circles from Homepage */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-muted/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-muted/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-muted/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full">
            <div className="grid grid-cols-1 gap-16 lg:gap-20 items-center min-h-screen py-24 lg:py-32">
              
              {/* Centered Text Content */}
              <div className="space-y-8 lg:space-y-10 animate-slide-up max-w-2xl mx-auto text-center">
                {/* Main Headline */}
                <div className="space-y-6">
                  <h1 className="relative z-30 overflow-visible text-4xl md:text-5xl xl:text-6xl font-black text-charcoal leading-[0.95] tracking-tight">
                    <span className="block mb-3 lg:mb-4">Canberra's Leading</span>
                    <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
                      Web Design Agency
                    </span>
                  </h1>
                </div>
                
                {/* Subtitle and Description */}
                <div className="space-y-6 lg:space-y-8">
                  <h2 className="text-xl md:text-2xl lg:text-2xl text-charcoal/90 font-bold leading-tight max-w-2xl">
                    Professional Web Design & Development for Canberra Businesses
                  </h2>
                  
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-2xl font-light">
                    Your website is often the first impression potential customers have of your business. For Canberra businesses, a professional, modern website isn't a luxury—it's a necessity.
                  </p>

                  <p className="text-base md:text-lg text-charcoal/70 leading-relaxed max-w-2xl font-light">
                    Yet many Canberra businesses are stuck with outdated websites that don't reflect their brand, don't work on mobile devices, and don't convert visitors into customers. At Odin Digital, we've helped over 150 Canberra businesses get modern, conversion-focused websites that drive real results.
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
                    Schedule FREE Website Consultation →
                  </Button>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Why Canberra Businesses Need Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8 text-center px-2">
              Why Canberra Businesses Need Professional Web Design
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 md:space-y-6 text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground px-2">
              <p>
                Canberra's business landscape is diverse and competitive. From government contractors to professional services, retail to hospitality, every business needs a strong online presence to succeed.
              </p>
              <p>
                Your website is your digital storefront. It's where potential customers learn about your services, compare you to competitors, and decide whether to contact you. A professional website builds trust, showcases your expertise, and converts visitors into customers.
              </p>
              <p>
                Yet many Canberra businesses have outdated websites that hurt their credibility. Slow loading times, poor mobile experience, and unprofessional design drive potential customers away.
              </p>
              <p>
                A professional website redesign can transform your business. Our Canberra clients see increased leads, more sales, and higher quality enquiries after launching their new websites.
              </p>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8 text-center px-2">
              The Web Design Challenge
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-12 text-center max-w-3xl mx-auto px-2">
              Canberra businesses face unique challenges when it comes to web design.
            </p>

            <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return <div key={index} className="p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary mb-2 sm:mb-3 md:mb-4" />
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                      {challenge.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                      {challenge.description}
                    </p>
                  </div>;
            })}
            </div>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-6 sm:mt-8 md:mt-12 text-center max-w-3xl mx-auto px-2">
              We've spent years perfecting web design for Canberra businesses. We understand these challenges and have developed solutions that deliver results.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8 text-center px-2">
              Why Canberra Businesses Choose Odin Digital
            </h2>

            <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return <div key={index} className="p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary mb-2 sm:mb-3 md:mb-4" />
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                      {item.description}
                    </p>
                  </div>;
            })}
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-12">
              <Button size="lg" variant="cta" onClick={openForm} className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6">
                Learn More About Our Approach →
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8 text-center px-2">
              Our Web Design Services for Canberra
            </h2>

            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {services.map((service, index) => {
              const Icon = service.icon;
              return <div key={index} className="p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start gap-3 sm:gap-4">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4">
                          {service.description}
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>)}
                        </ul>
                      </div>
                    </div>
                  </div>;
            })}
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-12">
              <Button size="lg" variant="cta" onClick={openForm} className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6">
                Get Your Free Consultation →
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8 text-center px-2">
              Our Web Design Process
            </h2>

            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {processSteps.map((step, index) => <div key={index} className="p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl sm:text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-2 sm:mb-3">
                        {step.description}
                      </p>
                      <p className="text-xs sm:text-sm text-primary font-medium">
                        Deliverable: {step.deliverable}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Business Types Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8 text-center px-2">
              Web Design for Different Canberra Business Types
            </h2>

            <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {businessTypes.map((business, index) => {
              const Icon = business.icon;
              return <div key={index} className="p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary mb-2 sm:mb-3 md:mb-4" />
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                      {business.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-2 sm:mb-3">
                      {business.description}
                    </p>
                    <p className="text-xs sm:text-sm text-primary font-medium">
                      Our Solution: {business.solution}
                    </p>
                  </div>;
            })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8 text-center px-2">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {faqs.map((faq, index) => <div key={index} className="p-3 sm:p-4 md:p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 sm:mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-primary/20 via-secondary/10 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 px-2">
              Ready to Get a Professional Website?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2">
              Stop losing customers to outdated websites. Get a modern, conversion-focused website that drives real results for your Canberra business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
              <Button size="xl" variant="cta" onClick={openForm} className="w-full sm:w-auto text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8">
                Schedule Your Free Website Consultation →
              </Button>
              <Link to="/services">
                <Button size="xl" variant="outline" className="w-full sm:w-auto text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8">
                  Learn About Our Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Services and Cities */}
        

        <Footer />
        <SideTab />

        {/* Mobile Sticky CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border z-50">
          <Button size="lg" variant="cta" onClick={openForm} className="w-full text-xs sm:text-sm md:text-base px-4 sm:px-6">
            Schedule Free Consultation →
          </Button>
        </div>
      </div>
    </>;
};
export default WebDesignCanberra;