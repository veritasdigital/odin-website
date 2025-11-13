import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Code,
  Smartphone,
  TrendingUp,
  Award,
  CheckCircle2,
  Search,
  ShoppingCart,
  RotateCcw,
  BarChart,
  Headphones,
  Building2,
  Briefcase,
  Store,
  UtensilsCrossed,
  Stethoscope,
  ArrowRight,
  Lightbulb,
  Users,
  Target,
  Rocket,
  Eye,
} from "lucide-react";

const WebDesignDarwin = () => {
  const navigate = useNavigate();

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://odindigital.com.au/#local-business",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au",
        "logo": "https://odindigital.com.au/logo.png",
        "description": "Web design services for Darwin businesses.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Darwin, Northern Territory",
          "addressLocality": "Darwin",
          "addressRegion": "NT",
          "postalCode": "0800",
          "addressCountry": "AU"
        },
        "telephone": "+61-2-XXXX-XXXX",
        "email": "hello@odindigital.com.au",
        "sameAs": [
          "https://www.facebook.com/odindigital",
          "https://www.linkedin.com/company/odin-digital",
          "https://www.instagram.com/odindigital"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://odindigital.com.au/web-design-darwin#webpage",
        "url": "https://odindigital.com.au/web-design-darwin",
        "name": "Web Design Darwin | Professional Websites That Generate Leads & Sales",
        "description": "Web design services for Darwin businesses. Modern design, mobile-optimised, SEO-integrated. 95+ businesses, 180% revenue increase, 220% lead increase. Affordable, local expertise.",
        "isPartOf": {
          "@id": "https://odindigital.com.au/#website"
        },
        "inLanguage": "en-AU",
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01"
      },
      {
        "@type": "WebSite",
        "@id": "https://odindigital.com.au/#website",
        "url": "https://odindigital.com.au",
        "name": "Odin Digital",
        "description": "Web design services for Darwin businesses"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/web-design-darwin#custom-design",
        "name": "Custom Website Design",
        "description": "Custom website design for Darwin businesses.",
        "provider": {
          "@id": "https://odindigital.com.au/#local-business"
        },
        "serviceType": "Web Design",
        "areaServed": {
          "@type": "City",
          "name": "Darwin"
        }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/web-design-darwin#ecommerce",
        "name": "E-Commerce Website Design",
        "description": "E-commerce website design for Darwin businesses.",
        "provider": {
          "@id": "https://odindigital.com.au/#local-business"
        },
        "serviceType": "Web Design",
        "areaServed": {
          "@type": "City",
          "name": "Darwin"
        }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/web-design-darwin#redesign",
        "name": "Website Redesign",
        "description": "Website redesign services for Darwin businesses.",
        "provider": {
          "@id": "https://odindigital.com.au/#local-business"
        },
        "serviceType": "Web Design",
        "areaServed": {
          "@type": "City",
          "name": "Darwin"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does web design cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Web design costs vary depending on complexity and features. We offer packages starting at $2,500 for simple websites and up to $15,000+ for complex e-commerce sites. We're happy to discuss your budget and create a custom quote."
            }
          },
          {
            "@type": "Question",
            "name": "How long does web design take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A typical website takes 4–8 weeks from start to finish. Complex e-commerce sites may take longer. We'll provide a timeline during the discovery phase."
            }
          },
          {
            "@type": "Question",
            "name": "Can you redesign my existing website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialise in website redesigns. We can modernise your design, improve functionality, and increase conversion."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer e-commerce websites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialise in e-commerce websites. We integrate shopping carts, payment processing, and inventory management."
            }
          },
          {
            "@type": "Question",
            "name": "Is your web design mobile-friendly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All our websites are fully mobile-optimised. We design for mobile first."
            }
          },
          {
            "@type": "Question",
            "name": "Do you integrate SEO into your web design?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We integrate SEO best practices into every website we build. This includes optimised page structure, meta tags, fast loading times, and mobile optimisation."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer ongoing maintenance and support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We offer ongoing maintenance and support packages to keep your website secure, updated, and performing optimally."
            }
          },
          {
            "@type": "Question",
            "name": "How does the design approval process work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide design mockups for your review and feedback. You'll have opportunities to request revisions until you're completely satisfied with the design."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help businesses in my industry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We've helped Darwin businesses across all industries including real estate, professional services, e-commerce, hospitality, and healthcare."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get started?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Schedule a free consultation. We'll discuss your goals, budget, and timeline, and provide a custom proposal for your web design project."
            }
          }
        ]
      },
      {
        "@type": "AggregateRating",
        "@id": "https://odindigital.com.au/web-design-darwin#rating",
        "ratingValue": "4.9",
        "ratingCount": "95",
        "bestRating": "5",
        "worstRating": "1"
      }
    ]
  };

  const challenges = [
    { icon: Building2, title: "Limited Local Options", description: "Few Darwin-based web designers with local expertise" },
    { icon: TrendingUp, title: "High Cost Without Results", description: "Expensive agencies that don't deliver ROI" },
    { icon: RotateCcw, title: "Outdated Websites", description: "Old websites that don't represent your business" },
    { icon: Smartphone, title: "Poor Mobile Experience", description: "Websites that don't work on mobile devices" },
    { icon: Search, title: "Lack of SEO Integration", description: "Websites that don't rank on Google" },
  ];

  const benefits = [
    {
      icon: Building2,
      title: "Local Expertise",
      description: "We understand the Darwin market and can create websites that resonate with local customers."
    },
    {
      icon: Eye,
      title: "Modern Design",
      description: "Clean, professional designs that represent your business and build trust with customers."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimisation",
      description: "All our websites are fully mobile-optimised and work perfectly on all devices."
    },
    {
      icon: Search,
      title: "SEO Integration",
      description: "We integrate SEO best practices to help your website rank on Google."
    },
    {
      icon: Target,
      title: "Conversion Optimisation",
      description: "We design for conversions, not just aesthetics. Every element is optimised to generate leads."
    },
    {
      icon: Award,
      title: "Affordable Web Design",
      description: "Professional web design at prices Darwin businesses can afford."
    },
    {
      icon: RotateCcw,
      title: "Easy to Update",
      description: "User-friendly content management systems that let you update your website yourself."
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "Local support when you need it, with fast response times."
    },
    {
      icon: BarChart,
      title: "Proven Results",
      description: "95+ Darwin businesses helped, 180% revenue increase, 220% lead increase on average."
    },
  ];

  const services = [
    {
      icon: Code,
      title: "Custom Website Design",
      description: "Fully custom websites designed specifically for your business and goals.",
      features: [
        "Unique design tailored to your brand",
        "Strategic layout for maximum conversions",
        "Professional copywriting",
        "Custom functionality and features"
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Website Design",
      description: "Online stores that make it easy for customers to buy from you.",
      features: [
        "Shopping cart integration",
        "Secure payment processing",
        "Inventory management",
        "Product catalogue design"
      ]
    },
    {
      icon: RotateCcw,
      title: "Website Redesign",
      description: "Modernise your existing website to improve performance and conversions.",
      features: [
        "Design refresh to modern standards",
        "Improved user experience",
        "Mobile optimisation",
        "Conversion rate optimisation"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Optimisation",
      description: "Ensure your website works perfectly on mobile devices.",
      features: [
        "Responsive design for all screen sizes",
        "Touch-friendly navigation",
        "Fast mobile loading times",
        "Mobile-first approach"
      ]
    },
    {
      icon: Search,
      title: "SEO-Friendly Web Design",
      description: "Websites built with SEO best practices from the ground up.",
      features: [
        "Optimised page structure",
        "Fast loading speeds",
        "Clean, crawlable code",
        "SEO-ready content management"
      ]
    },
    {
      icon: Headphones,
      title: "Website Maintenance and Support",
      description: "Keep your website secure, updated, and performing optimally.",
      features: [
        "Security updates and backups",
        "Performance monitoring",
        "Content updates",
        "Technical support"
      ]
    },
  ];

  const processSteps = [
    {
      step: 1,
      icon: Lightbulb,
      title: "Discovery and Strategy",
      description: "We learn about your business, goals, and target audience to create a strategic plan."
    },
    {
      step: 2,
      icon: Eye,
      title: "Design and Planning",
      description: "We create design mockups and get your approval before development begins."
    },
    {
      step: 3,
      icon: Code,
      title: "Development and Integration",
      description: "We build your website with clean code, integrating all necessary features and functionality."
    },
    {
      step: 4,
      icon: Users,
      title: "Content Creation",
      description: "We create compelling content that resonates with your audience and drives conversions."
    },
    {
      step: 5,
      icon: Target,
      title: "Testing and Optimisation",
      description: "We test your website on all devices and browsers to ensure perfect performance."
    },
    {
      step: 6,
      icon: Rocket,
      title: "Launch and Training",
      description: "We launch your website and train you on how to manage and update it."
    },
    {
      step: 7,
      icon: Headphones,
      title: "Ongoing Support",
      description: "We provide ongoing support to keep your website secure, updated, and performing optimally."
    },
  ];

  const industries = [
    {
      icon: Building2,
      title: "Real Estate",
      description: "Property listing websites with advanced search, virtual tours, and lead capture."
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Professional websites for lawyers, accountants, consultants, and other service providers."
    },
    {
      icon: Store,
      title: "E-Commerce",
      description: "Online stores that make it easy for customers to browse and buy your products."
    },
    {
      icon: UtensilsCrossed,
      title: "Hospitality and Tourism",
      description: "Stunning websites for hotels, restaurants, and tourism businesses."
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Patient-friendly websites for medical practices, clinics, and healthcare providers."
    },
  ];

  const faqs = [
    {
      question: "How much does web design cost?",
      answer: "Web design costs vary depending on complexity and features. We offer packages starting at $2,500 for simple websites and up to $15,000+ for complex e-commerce sites. We're happy to discuss your budget and create a custom quote."
    },
    {
      question: "How long does web design take?",
      answer: "A typical website takes 4–8 weeks from start to finish. Complex e-commerce sites may take longer. We'll provide a timeline during the discovery phase."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes. We specialise in website redesigns. We can modernise your design, improve functionality, and increase conversion."
    },
    {
      question: "Do you offer e-commerce websites?",
      answer: "Yes. We specialise in e-commerce websites. We integrate shopping carts, payment processing, and inventory management."
    },
    {
      question: "Is your web design mobile-friendly?",
      answer: "Yes. All our websites are fully mobile-optimised. We design for mobile first."
    },
    {
      question: "Do you integrate SEO into your web design?",
      answer: "Yes. We integrate SEO best practices into every website we build. This includes optimised page structure, meta tags, fast loading times, and mobile optimisation."
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes. We offer ongoing maintenance and support packages to keep your website secure, updated, and performing optimally."
    },
    {
      question: "How does the design approval process work?",
      answer: "We provide design mockups for your review and feedback. You'll have opportunities to request revisions until you're completely satisfied with the design."
    },
    {
      question: "Can you help businesses in my industry?",
      answer: "Yes. We've helped Darwin businesses across all industries including real estate, professional services, e-commerce, hospitality, and healthcare."
    },
    {
      question: "How do I get started?",
      answer: "Schedule a free consultation. We'll discuss your goals, budget, and timeline, and provide a custom proposal for your web design project."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Web Design Darwin | Professional Websites That Generate Leads & Sales</title>
        <meta 
          name="description" 
          content="Web design services for Darwin businesses. Modern design, mobile-optimised, SEO-integrated. 95+ businesses, 180% revenue increase, 220% lead increase. Affordable, local expertise." 
        />
        <meta name="keywords" content="web design Darwin, website design Darwin, web design services Darwin, website development Darwin, professional web design Darwin, custom web design Darwin, responsive web design Darwin, e-commerce website Darwin, WordPress web design Darwin" />
        <link rel="canonical" href="https://odindigital.com.au/web-design-darwin" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

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
                  <span className="block mb-3 lg:mb-4">Darwin's Leading</span>
                  <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
                    Web Design Agency
                  </span>
                </h1>
              </div>
              
              {/* Subtitle and Description */}
              <div className="space-y-6 lg:space-y-8">
                <h2 className="text-xl md:text-2xl lg:text-2xl text-charcoal/90 font-bold leading-tight max-w-2xl">
                  Professional Websites That Generate Leads and Sales
                </h2>
                
                <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-2xl font-light">
                  Is your outdated, slow, or overpriced website holding your Darwin business back? It's time for a professional Darwin web design agency that delivers high-converting websites.
                </p>

                <p className="text-base md:text-lg text-charcoal/70 leading-relaxed max-w-2xl font-light">
                  At Odin Digital, we build strategic, SEO-optimised, and conversion-focused digital assets that generate a measurable return on investment. Modern design. Mobile-optimised. Built for Darwin businesses.
                </p>
              </div>
              
              {/* Action Button */}
              <div className="pt-2 flex justify-center">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg px-12 py-6 shadow-glow whitespace-normal break-words"
                  onClick={() => navigate('/contact')}
                >
                  Schedule FREE Web Design Consultation →
                </Button>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* The Darwin Web Design Challenge Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The Darwin Web Design Challenge
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Running a professional website is challenging for Darwin businesses. Here are the most common challenges we see:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <challenge.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
                    <p className="text-muted-foreground">{challenge.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-lg text-center mt-12 text-muted-foreground">
              We're web design experts who specialise in Darwin. We understand these challenges and know how to overcome them.
            </p>
          </div>
        </div>
      </section>

      {/* Why Darwin Businesses Choose Odin Digital Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Darwin Businesses Choose Odin Digital
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <benefit.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                onClick={() => navigate('/contact')}
                className="text-lg px-8 py-6 h-auto"
              >
                Learn More About Our Approach <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Web Design Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Our Web Design Services for Darwin Businesses
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              We offer comprehensive web design services to help Darwin businesses succeed online.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-8">
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Darwin Businesses Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How We Help Darwin Businesses
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Our proven 7-step process ensures your web design project is completed on time, on budget, and to your satisfaction.
            </p>
            <div className="space-y-6">
              {processSteps.map((step) => (
                <Card key={step.step} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold text-primary">STEP {step.step}</span>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Web Design for Different Darwin Industries
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              We've helped Darwin businesses across all industries create websites that generate leads and sales.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <industry.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                    <p className="text-muted-foreground">{industry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-primary">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Get Your Professional Website Today
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Stop losing customers to competitors with better websites. Schedule your free web design consultation today and discover how we can help your Darwin business succeed online. We'll review your current website (if you have one), discuss your goals, and create a custom proposal for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/contact')}
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto whitespace-normal break-words"
              >
                Schedule Your Free Web Design Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/services')}
                className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
              >
                Learn About Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary p-4 shadow-lg">
        <Button 
          className="w-full bg-white text-primary hover:bg-white/90 font-bold py-6 text-lg"
          onClick={() => navigate('/contact')}
        >
          Schedule Free Consultation
        </Button>
      </div>

      <Footer />
    </>
  );
};

export default WebDesignDarwin;
