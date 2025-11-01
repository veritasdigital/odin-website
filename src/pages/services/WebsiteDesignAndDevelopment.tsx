import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Zap, Smartphone, TrendingUp, Code, Shield, Target, LayoutTemplate, Loader, Banknote, Award, Users, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const WebsiteDesignAndDevelopment = () => {
  const { openForm } = useMarketingForm();

  const painPoints = [
    {
      icon: Loader,
      title: "Beautiful but Broken",
      description: "Your website looks stunning in screenshots, but it takes 10 seconds to load. 53% of mobile users abandon sites that take longer than 3 seconds. Beauty without speed is revenue suicide."
    },
    {
      icon: LayoutTemplate,
      title: "Template Hell",
      description: "You got sold a 'custom' website that's actually a generic WordPress template used by 10,000+ other businesses. It's slow, bloated, and screams amateur."
    },
    {
      icon: Target,
      title: "No Strategy, Just Pretty Pictures",
      description: "Your web design agency built you a website with no clear conversion path, no customer journey mapping, and no CRO strategy. It's a digital brochure, not a sales machine."
    },
    {
      icon: Shield,
      title: "Abandoned After Launch",
      description: "Your agency disappeared the moment they cashed the final payment. Now you're stuck with a website you can't update, bugs you can't fix, and no support in sight."
    },
    {
      icon: Banknote,
      title: "Hidden Costs Everywhere",
      description: "The $3,000 quote became $8,000 after 'scope creep,' change requests, and mysterious fees appeared. You feel ripped off and resentful."
    },
    {
      icon: Smartphone,
      title: "Mobile Disaster",
      description: "Your website looks great on desktop, but on mobile (where 70% of your traffic comes from), it's a broken, unclickable mess. Every mobile visitor is a lost customer."
    }
  ];

  const solutions = [
    {
      icon: Target,
      title: "Conversion-First Design: Every Element Has a Purpose",
      description: "We don't design websites to win awards. We design them to convert visitors into leads and customers. Every button placement, color choice, and headline is backed by CRO data, not subjective opinions."
    },
    {
      icon: Zap,
      title: "Speed Optimization: Sub-3-Second Load Times",
      description: "We obsess over speed because Google does. Our websites are optimized for performance, ensuring your visitors never wait, your bounce rate stays low, and your SEO rankings stay high."
    },
    {
      icon: TrendingUp,
      title: "SEO Foundation: Built to Rank from Day One",
      description: "We build SEO into every website from the ground up, including clean code, schema markup, optimized meta tags, and mobile-first design. This ensures your website is ready to rank on Google from day one."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Development: Flawless Experience on Every Device",
      description: "70% of your traffic is mobile. We design mobile-first, ensuring a flawless experience on all devices. No broken layouts, no unclickable buttons, no frustrated users."
    },
    {
      icon: Banknote,
      title: "Transparent, Fixed-Price Packages: No Hidden Costs",
      description: "We provide fixed-price packages with clear deliverables and timelines. No surprise fees, no scope creep nightmares. You know exactly what you're paying for, upfront."
    },
    {
      icon: Shield,
      title: "Ongoing Support & Maintenance: We Don't Disappear After Launch",
      description: "Unlike agencies that vanish after launch, we offer ongoing support packages to ensure your website stays fast, secure, and up-to-date. We're your long-term partner, not a one-night stand."
    }
  ];

  const services = [
    {
      icon: Users,
      title: "Small Business Website Design",
      description: "Professional websites for small businesses that need to compete with enterprise-level competitors without enterprise budgets. Focused on conversions and lead generation."
    },
    {
      icon: TrendingUp,
      title: "E-Commerce Website Design",
      description: "High-converting online stores built on Shopify, WooCommerce, and custom platforms. We maximize revenue and minimize cart abandonment with expert ecommerce website design."
    },
    {
      icon: Code,
      title: "WordPress Development",
      description: "Custom WordPress development that's fast, secure, and easy to manage. We build WordPress sites that perform like custom applications without the bloat."
    },
    {
      icon: Award,
      title: "Custom Web Development",
      description: "Bespoke web applications and websites built from scratch using modern frameworks. Perfect for businesses with unique requirements that templates can't solve."
    },
    {
      icon: CheckCircle2,
      title: "Website Redesign & Optimization",
      description: "Transform your underperforming website into a conversion machine. We redesign and optimize existing sites to improve speed, SEO, and conversion rates."
    },
    {
      icon: Target,
      title: "Landing Page Design & CRO",
      description: "High-converting landing pages designed for specific campaigns and offers. We use CRO best practices to maximize your ad spend ROI."
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "$574M+ in client revenue generated. 95% client retention rate. We don't just build websites—we build revenue engines."
    },
    {
      icon: Shield,
      title: "No Lock-In Contracts",
      description: "You own 100% of your website. No proprietary platforms, no vendor lock-in. You're free to leave anytime, but you won't want to."
    },
    {
      icon: CheckCircle2,
      title: "Full Transparency",
      description: "Fixed-price packages, clear deliverables, and regular progress updates. No surprises, no hidden fees, no BS."
    },
    {
      icon: TrendingUp,
      title: "Conversion & SEO Expertise",
      description: "We're not just designers—we're growth marketers. Our websites are optimized for conversions, speed, and SEO from day one."
    }
  ];

  const faqs = [
    {
      question: "How much does a website cost?",
      answer: "The cost depends on your needs and complexity. Small business website projects typically cost $3,000 - $7,000. E-commerce website projects typically cost $7,000 - $15,000. Custom web development projects start at $15,000+. Our website development company team will provide a detailed quote during your free consultation."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Most website design projects take 4-8 weeks from kickoff to launch. E-commerce and custom projects may take 8-12 weeks. We provide a detailed timeline with milestones during the proposal phase."
    },
    {
      question: "Do I own the website after it's built?",
      answer: "Yes. You own 100% of your website, including all files, code, and content. We don't use proprietary platforms or lock you into our services."
    },
    {
      question: "Can I update the website myself?",
      answer: "Yes. We build all websites on user-friendly platforms (WordPress, Shopify, etc.) and provide training so you can make updates yourself. We also offer ongoing support packages if you prefer us to handle updates."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Yes. All our websites are mobile-first and fully responsive, ensuring a flawless experience on all devices. We also optimize for speed on mobile connections."
    },
    {
      question: "Will my website be optimized for SEO?",
      answer: "Yes. We build SEO into every website from the ground up, including clean code, schema markup, optimized meta tags, and mobile-first design. This ensures your website is ready to rank on Google from day one."
    },
    {
      question: "Do you offer e-commerce website design?",
      answer: "Yes. We specialize in ecommerce website design and development, using Shopify, WooCommerce, and custom platforms to create online stores that maximize revenue and minimize cart abandonment."
    },
    {
      question: "What happens after the website launches?",
      answer: "We offer ongoing support and maintenance packages to ensure your website stays fast, secure, and up-to-date. We also offer CRO and SEO services to continuously improve performance."
    },
    {
      question: "Do you offer website redesign services?",
      answer: "Yes. We redesign and optimize existing websites to improve conversion rates, speed, and SEO. Perfect for businesses with outdated or underperforming websites."
    },
    {
      question: "How is your web design agency different from others?",
      answer: "We are obsessed with performance and ROI. We don't just build websites that look good—we build websites that convert. Every website is optimized for speed, SEO, and conversions from day one. Our 95% client retention rate is proof that we consistently deliver value."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Website Design and Development Australia | Web Design Agency | Odin Digital</title>
        <meta 
          name="description" 
          content="Stop losing customers to slow, ugly websites. Odin Digital is the web design agency Australia trusts for high-converting, fast, and SEO-optimized websites. E-commerce expertise and transparent pricing." 
        />
        <meta name="keywords" content="website design and development, web design agency, website design agency, website development company, ecommerce website design" />
        <link rel="canonical" href="https://growth-conduit-central.lovable.app/website-design-and-development" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "name": "Odin Digital",
                "url": "https://growth-conduit-central.lovable.app/",
                "logo": "https://growth-conduit-central.lovable.app/logo.png",
                "description": "Performance-focused website design and development agency in Australia. We specialize in high-converting, fast, and SEO-optimized websites for small businesses and e-commerce. $574M+ in client revenue. No lock-in contracts.",
                "founder": {
                  "@type": "Person",
                  "name": "Lucas Durante"
                },
                "slogan": "No Lock-In Contracts. Just Results.",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+61-XXX-XXX-XXX",
                  "contactType": "Sales",
                  "areaServed": "AU",
                  "availableLanguage": "English"
                },
                "sameAs": []
              },
              {
                "@type": "Service",
                "serviceType": "Website Design and Development",
                "provider": {
                  "@type": "Organization",
                  "name": "Odin Digital"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Australia"
                },
                "description": "Expert website design and development services for Australian businesses, focusing on conversion rate optimization, speed, and SEO.",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Website Design and Development Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Small Business Website Design"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "E-Commerce Website Design"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "WordPress Development"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Web Development"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Website Redesign & Optimization"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Landing Page Design & CRO"
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
                  "name": "Website Design and Development Services",
                  "provider": {
                    "@type": "Organization",
                    "name": "Odin Digital"
                  }
                },
                "author": {
                  "@type": "Person",
                  "name": "Fabienne Costa"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "reviewBody": "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
                "publisher": {
                  "@type": "Organization",
                  "name": "Odin Digital"
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />
      <div className="min-h-screen bg-background pt-20">
        {/* Breadcrumb Navigation */}
        <div className="bg-muted/30 py-3 px-6">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <span>/</span>
              <span className="text-foreground">Website Design and Development</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 sm:py-20 md:py-24 px-6 overflow-hidden">
          {/* Floating Circles - Same as home page */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Trust Signals */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">$574M+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Client Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">95%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Client Retention Rate</div>
                </div>
              </div>

              <h1 className="text-[7.5vw] sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
                Website Design and Development
              </h1>
              
              <p className="text-[4vw] sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-foreground/90 font-medium leading-tight hero-sub-headline">
                Stop Losing Customers to Slow, Ugly Websites. Start Converting Visitors into Revenue with a Website Built to Sell.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl mb-4 text-muted-foreground max-w-3xl mx-auto leading-relaxed font-semibold">
                The Web Design Agency Australia Trusts for High-Converting, Fast, and SEO-Optimized Websites.
              </p>

              <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Partner with Odin Digital and Turn Your Website into Your #1 Sales Engine.
              </p>

              <p className="text-xs sm:text-sm mb-6 sm:mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Your website isn't a digital brochure. It's a 24/7 sales machine—or at least it should be. Yet most Australian businesses are bleeding revenue because their websites are slow, ugly, poorly optimized, and abandoned by the agencies that built them. At Odin Digital, we are the website design agency that builds websites designed to convert visitors into customers, not just look pretty in screenshots.
              </p>
              
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="w-full sm:w-auto min-h-[48px] text-xs sm:text-sm md:text-base"
              >
                Get Your FREE Website Strategy Session <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Problem/Agitation Section */}
        <section className="py-12 sm:py-16 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Most Web Design Companies Fail to Deliver Websites That Actually Sell
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Australian businesses waste millions every year on website design projects that look good in screenshots but fail to drive revenue. Here's why most agencies fail:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
              {painPoints.map((pain, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <pain.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{pain.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs sm:text-sm">{pain.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="w-full sm:w-auto min-h-[48px] text-xs sm:text-sm"
              >
                Stop the Website Bleed: Talk to a Web Design Expert <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* The Odin Digital Solution */}
        <section className="py-12 sm:py-16 md:py-20 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                How We Build Websites That Convert Visitors into Revenue
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                We are the web design agency that eliminates waste and builds websites designed to sell, not just look pretty.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
              {solutions.map((solution, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs sm:text-sm">{solution.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="w-full sm:w-auto min-h-[48px] text-xs sm:text-sm"
              >
                See Our Website Design Packages <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Website Design and Development Services
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                As a leading website design agency, we offer a full spectrum of web design and development services designed to grow your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs sm:text-sm">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="w-full sm:w-auto min-h-[48px] text-[10px] xs:text-xs sm:text-sm px-4 sm:px-6"
              >
                <span className="whitespace-normal sm:whitespace-nowrap">
                  Ready for a Custom Website Strategy? Contact Us
                </span>
                <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 sm:py-16 md:py-20 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Australian Businesses Choose Odin Digital for Website Design
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                We are not a generalist agency that dabbles in web design. We are specialists who understand the unique challenges of building websites that convert.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs sm:text-sm">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="w-full sm:w-auto min-h-[48px] text-xs sm:text-sm"
              >
                Talk to a Website Design Specialist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                FAQs: Your Questions About Website Design and Development Answered
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                We know you have specific concerns about cost, timelines, and performance. Here are clear, honest answers.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-sm sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 sm:py-20 md:py-24 px-6 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              Ready to Stop Losing Customers and Start Converting Visitors into Revenue?
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-muted-foreground max-w-2xl mx-auto">
              Stop settling for slow, ugly, underperforming websites. Start working with a web design agency that builds websites designed to sell.
            </p>
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="w-full sm:w-auto min-h-[48px] text-xs sm:text-sm md:text-base"
            >
              Claim Your FREE Website Strategy Session <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              No lock-in contracts. No pressure. Just a clear strategy to turn your website into a revenue engine.
            </p>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden w-[calc(100%-2rem)]">
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => window.location.href = '/contact'}
            className="w-full min-h-[48px] text-xs shadow-2xl"
          >
            Get FREE Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WebsiteDesignAndDevelopment;
