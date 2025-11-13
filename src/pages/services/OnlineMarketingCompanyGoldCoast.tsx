import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { SideTab } from "@/components/SideTab";
import { Link } from "react-router-dom";
import { Target, TrendingUp, Shield, Zap, CheckCircle2, BarChart, Award, Users, Clock, Layers, Eye, DollarSign, TrendingDown, AlertCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const OnlineMarketingCompanyGoldCoast = () => {
  const {
    openForm
  } = useMarketingForm();
  const socialProof = [{
    number: "$574M+",
    label: "Client Revenue Generated"
  }, {
    number: "95%",
    label: "Client Retention Rate"
  }, {
    number: "3.2x",
    label: "Average ROAS"
  }, {
    number: "140+",
    label: "Businesses Helped"
  }];
  const problems = [{
    icon: DollarSign,
    title: "Ad Spend Black Hole",
    description: "You're pouring thousands into Google and Meta ads, but the cost per click keeps rising, your ROAS is shrinking, and you have no idea if it's actually driving profit."
  }, {
    icon: TrendingDown,
    title: "Feast or Famine Cycle",
    description: "Summer is profitable, but winter is brutal. Your revenue swings wildly with the seasons, and you're stuck chasing the next peak instead of building consistent growth."
  }, {
    icon: AlertCircle,
    title: "Spray and Pray Strategy",
    description: "Your SEO, Google Ads, and Facebook Ads teams don't talk to each other. You're running disconnected campaigns that waste budget and miss opportunities."
  }];
  const testimonials = [{
    name: "Evan Tsaboukos",
    company: "Imperial Wealth",
    quote: "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
    rating: 5
  }, {
    name: "Fabienne Costa",
    company: "YCL Jewels",
    quote: "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
    rating: 5
  }];
  const servicePillars = [{
    icon: Target,
    title: "High-Performance Web Design",
    description: "We build conversion-optimized websites that turn traffic into revenue, not just pretty portfolios.",
    link: "/web-design-gold-coast"
  }, {
    icon: TrendingUp,
    title: "Dominant SEO Strategies",
    description: "Rank above your competition and capture high-intent traffic that converts into customers.",
    link: "/seo-gold-coast"
  }, {
    icon: BarChart,
    title: "High-ROI Google Ads (PPC)",
    description: "Precision-targeted campaigns that maximize conversions while minimizing wasted spend.",
    link: "/google-ads-gold-coast"
  }, {
    icon: Users,
    title: "Profitable Facebook & Instagram Ads",
    description: "Creative-driven campaigns that cut through the noise and drive measurable revenue.",
    link: "/facebook-ads-gold-coast"
  }];
  const differentiators = [{
    icon: Layers,
    title: "We Build Integrated Systems, Not Siloed Tactics",
    description: "Your SEO, PPC, social, and website work together as one unified growth engine."
  }, {
    icon: DollarSign,
    title: "We Are Obsessed with Your ROI",
    description: "Every campaign is measured on revenue impact, not vanity metrics like impressions or clicks."
  }, {
    icon: Shield,
    title: "No Lock-In Contracts",
    description: "Month-to-month agreements. If we're not delivering results, you can walk away—no penalties."
  }, {
    icon: Eye,
    title: "Full Transparency",
    description: "Real-time dashboards, monthly reporting, and complete visibility into every dollar spent."
  }];
  const processSteps = [{
    number: "01",
    title: "Deep Dive & Competitive Analysis",
    timeframe: "Week 1",
    tasks: ["Audit your current marketing efforts", "Analyze your top 5 Gold Coast competitors", "Identify high-ROI opportunities"]
  }, {
    number: "02",
    title: "Build Your Integrated Strategy",
    timeframe: "Week 2",
    tasks: ["Design your custom growth roadmap", "Set measurable KPIs and revenue targets", "Map out SEO, PPC, and social campaigns"]
  }, {
    number: "03",
    title: "Launch the Integrated Growth Engine",
    timeframe: "Week 3-4",
    tasks: ["Deploy optimized campaigns across all channels", "Implement advanced tracking and analytics", "Begin driving qualified traffic"]
  }, {
    number: "04",
    title: "Optimize, Scale, Dominate",
    timeframe: "Ongoing",
    tasks: ["Continuous A/B testing and optimization", "Scale winning campaigns aggressively", "Monthly reporting and strategy refinement"]
  }];
  const whyChoosePoints = [{
    title: "We Understand the Gold Coast Market Like No One Else",
    description: "We know the competitive landscape, the seasonal dynamics, and the customer demographics. We build campaigns designed specifically for this market."
  }, {
    title: "We Focus on Profit, Not Just Traffic",
    description: "More traffic means nothing if it doesn't convert. We optimize for revenue, not vanity metrics."
  }, {
    title: "We Have a Proven Track Record",
    description: "$574M+ in client revenue generated. We've helped 140+ businesses dominate their markets."
  }, {
    title: "We Move Fast and Execute Flawlessly",
    description: "In a competitive market like the Gold Coast, speed wins. We launch campaigns fast and optimize them relentlessly."
  }];
  const relatedServices = [{
    name: "PPC Agency",
    link: "/ppc-agency"
  }, {
    name: "SEO Agency",
    link: "/seo-agency"
  }, {
    name: "Meta Ads Agency",
    link: "/meta-ads-agency"
  }, {
    name: "Web Design Agency",
    link: "/web-design-agency"
  }];
  const relatedLocations = [{
    name: "SEO Gold Coast",
    link: "/seo-gold-coast"
  }, {
    name: "Google Ads Gold Coast",
    link: "/google-ads-gold-coast"
  }, {
    name: "Facebook Ads Gold Coast",
    link: "/facebook-ads-gold-coast"
  }, {
    name: "Web Design Gold Coast",
    link: "/web-design-gold-coast"
  }];
  const faqs = [{
    question: "Why is online marketing on the Gold Coast so competitive?",
    answer: "The Gold Coast has a high density of businesses, particularly in lucrative sectors like tourism, real estate, and professional services. This, combined with its status as a major national and international destination, creates a hyper-competitive environment where every business is fighting for the same customer attention."
  }, {
    question: "What is a realistic budget for online marketing on the Gold Coast?",
    answer: "It depends on your industry and goals, but due to the competitive nature of the market, a minimum ad spend of $3,000-$5,000 per month is often required to gather meaningful data and compete effectively. The key is to focus on ROI, not just the initial spend."
  }, {
    question: "How can I compete with the big national brands on the Gold Coast?",
    answer: "You compete by being smarter, faster, and more authentic. We use niche targeting to find audiences they ignore, superior creative to cut through their noise, and a focus on ROI to ensure every dollar you spend works harder than theirs."
  }, {
    question: "How long does it take to see results from online marketing?",
    answer: "Google Ads and Facebook Ads can deliver results within days. SEO typically takes 3-6 months for significant organic growth. We focus on a blended strategy to deliver both short-term wins and long-term sustainable growth."
  }, {
    question: "Do you work with small Gold Coast businesses or only large enterprises?",
    answer: "We work with businesses of all sizes, from ambitious startups to established enterprises. What matters most is your commitment to growth and willingness to invest in ROI-focused marketing."
  }, {
    question: "How do you measure ROI for online marketing?",
    answer: "We implement advanced conversion tracking through Google Analytics, CRM integration, and call tracking to measure cost per lead, cost per sale, customer lifetime value, and return on ad spend. You'll know exactly how much revenue your marketing generates."
  }, {
    question: "What makes you different from other Gold Coast marketing agencies?",
    answer: "We build integrated systems, not siloed campaigns. Your SEO, Google Ads, Facebook Ads, and website work together as one unified growth engine. Plus, we offer no lock-in contracts and full transparency—if we're not delivering ROI, you can leave anytime."
  }, {
    question: "Can you help with website design and development?",
    answer: "Absolutely. We build high-converting, mobile-optimized websites that turn traffic into revenue. Your website is the foundation of your entire marketing system."
  }, {
    question: "How do you handle seasonal fluctuations in the Gold Coast market?",
    answer: "We actively adjust campaigns for seasonal dynamics, increasing budget during peak seasons and shifting focus to retention and email marketing during slower periods to maintain consistent revenue."
  }, {
    question: "Do you offer a performance guarantee?",
    answer: "We offer the best guarantee in the industry: No Lock-In Contracts. If we're not delivering a positive ROI, you're free to leave at any time. We put the risk on us, not you."
  }, {
    question: "What industries do you work with on the Gold Coast?",
    answer: "We work with all industries, including tourism, hospitality, real estate, professional services (lawyers, accountants, dentists), healthcare, retail, and e-commerce."
  }, {
    question: "How much does online marketing cost on the Gold Coast?",
    answer: "Investment varies based on your goals and competition. Most Gold Coast businesses invest $3,000-$10,000+ per month (including ad spend and management fees). We'll provide a detailed quote during your free audit."
  }, {
    question: "Do you work with businesses outside the Gold Coast?",
    answer: "Yes, we work with businesses across Australia. However, our deep Gold Coast market knowledge gives local businesses a significant competitive advantage."
  }, {
    question: "How quickly can you start working on my campaigns?",
    answer: "We can typically begin within 1-2 weeks of your onboarding call, depending on the complexity of your business and existing marketing infrastructure."
  }, {
    question: "What kind of reporting do you provide?",
    answer: "We provide monthly detailed reports covering all key metrics: traffic, leads, sales, cost per acquisition, ROAS, and revenue attribution. You'll also have real-time access to your campaign dashboards."
  }];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "Organization",
      "name": "Odin Digital",
      "url": "https://growth-conduit-central.lovable.app/",
      "logo": "https://growth-conduit-central.lovable.app/logo.png",
      "description": "Performance-obsessed online marketing company providing integrated digital systems for Gold Coast businesses.",
      "founder": {
        "@type": "Person",
        "name": "Lucas Durante"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "url": "https://growth-conduit-central.lovable.app/contact"
      },
      "sameAs": []
    }, {
      "@type": "WebPage",
      "name": "Online Marketing Company Gold Coast - Integrated Digital Systems",
      "url": "https://growth-conduit-central.lovable.app/online-marketing-company-gold-coast",
      "inLanguage": "en-AU",
      "description": "Odin Digital is the performance-obsessed online marketing company for Gold Coast businesses. We build integrated digital systems to drive predictable, year-round ROI.",
      "about": {
        "@type": "Service",
        "name": "Online Marketing Company Gold Coast"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://growth-conduit-central.lovable.app/"
        }, {
          "@type": "ListItem",
          "position": 2,
          "name": "Gold Coast",
          "item": "https://growth-conduit-central.lovable.app/gold-coast"
        }, {
          "@type": "ListItem",
          "position": 3,
          "name": "Online Marketing Company Gold Coast"
        }]
      }
    }, {
      "@type": "Service",
      "serviceType": "Online Marketing Company",
      "provider": {
        "@type": "Organization",
        "name": "Odin Digital"
      },
      "areaServed": {
        "@type": "City",
        "name": "Gold Coast"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Online Marketing Services for Gold Coast",
        "itemListElement": [{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Gold Coast"
          }
        }, {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads Gold Coast"
          }
        }, {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Facebook Ads Gold Coast"
          }
        }, {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design Gold Coast"
          }
        }]
      }
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
      "@type": "Review",
      "itemReviewed": {
        "@type": "Service",
        "name": "Odin Digital - Online Marketing Company Gold Coast"
      },
      "author": {
        "@type": "Person",
        "name": "Evan Tsaboukos"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
      "publisher": {
        "@type": "Organization",
        "name": "Imperial Wealth"
      }
    }]
  };
  return <>
      <Helmet>
        <title>Online Marketing Company Gold Coast | ROI-Focused | Odin Digital</title>
        <meta name="description" content="Dominate Australia's most competitive market. Odin Digital is the performance-obsessed online marketing company for Gold Coast businesses seeking predictable, year-round ROI." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <SideTab />

        {/* Breadcrumb Navigation */}
        <section className="pt-24 pb-4 bg-background">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/gold-coast" className="hover:text-primary transition-colors">Gold Coast</Link>
              <span>/</span>
              <span className="text-foreground">Online Marketing Company Gold Coast</span>
            </nav>
          </div>
        </section>

        {/* Section 1: Hero Section */}
        <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-br from-white via-muted/30 to-muted/20">
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-muted/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-muted/15 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-muted/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-charcoal">
                Online Marketing Company Gold Coast
              </h1>
              <p className="text-xl md:text-2xl text-charcoal/90 mb-8 leading-relaxed">
                In Australia's Most Competitive Market, "Good Enough" Gets You Nowhere. We Are the Performance-Obsessed Online Marketing Company That Builds High-ROI Digital Systems to Crush Your Competition and Drive Predictable, Year-Round Revenue.
              </p>
              <Button 
                size="lg" 
                onClick={openForm}
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-3 whitespace-normal break-words"
              >
                Get Your FREE Gold Coast Marketing Audit →
              </Button>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-12">
          {/* Section 2: Social Proof Metrics */}
          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {socialProof.map((metric, index) => <Card key={index} className="p-6 text-center hover-scale">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{metric.number}</div>
                  <div className="text-muted-foreground">{metric.label}</div>
                </Card>)}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" onClick={openForm} className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-3 whitespace-normal break-words">
                Get Your FREE Gold Coast Marketing Audit →
              </Button>
            </div>
          </section>

          {/* Section 3: Problem-Agitation */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Gold Coast Marketing Trap: Why Most Businesses Are Bleeding Money
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                In Australia's most competitive market, most businesses are making the same critical mistakes that waste budget and stall growth.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {problems.map((problem, index) => {
              const Icon = problem.icon;
              return <Card key={index} className="p-6 hover-scale">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </Card>;
            })}
            </div>
            <div className="text-center">
              <Button size="lg" onClick={openForm} className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-3 whitespace-normal break-words">
                Stop Wasting Money: Talk to a Gold Coast Expert →
              </Button>
            </div>
          </section>

          {/* Section 4: Testimonials */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Gold Coast Clients Say
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => <Card key={index} className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Award key={i} className="w-5 h-5 text-primary fill-primary" />)}
                  </div>
                  <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </Card>)}
            </div>
          </section>

          {/* Section 5: Service Pillars */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The 4 Pillars of Our Integrated Digital System
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We don't do siloed campaigns. These four pillars work together as one unified growth engine.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {servicePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return <Link key={index} to={pillar.link}>
                    <Card className="p-6 h-full hover-scale transition-all duration-300 hover:shadow-lg">
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                      <p className="text-muted-foreground">{pillar.description}</p>
                      <div className="mt-4 text-primary font-semibold">Learn More →</div>
                    </Card>
                  </Link>;
            })}
            </div>
            <div className="text-center">
              <Button size="lg" onClick={openForm} className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-3 whitespace-normal break-words">
                See How We Build Your Integrated System →
              </Button>
            </div>
          </section>

          {/* Section 6: Differentiators */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Gold Coast Businesses Choose Odin Digital
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're not another generalist agency. We're specialists who dominate competitive markets.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {differentiators.map((point, index) => {
              const Icon = point.icon;
              return <Card key={index} className="p-6">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </Card>;
            })}
            </div>
            <div className="text-center">
              <Button size="lg" onClick={openForm} className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-3 whitespace-normal break-words">
                Partner with the Best Gold Coast Marketing Agency →
              </Button>
            </div>
          </section>

          {/* Section 7: Process */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Proven 4-Step Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From deep competitive analysis to dominating your market in 90 days.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => <Card key={index} className="p-6 relative">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <div className="text-sm text-muted-foreground mb-4">{step.timeframe}</div>
                  <ul className="space-y-2">
                    {step.tasks.map((task, taskIndex) => <li key={taskIndex} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{task}</span>
                      </li>)}
                  </ul>
                </Card>)}
            </div>
          </section>

          {/* Section 8: Why Choose Us (Extended) */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Odin Digital Difference
              </h2>
            </div>
            <div className="space-y-8 max-w-4xl mx-auto">
              {whyChoosePoints.map((point, index) => <Card key={index} className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">{point.title}</h3>
                  <p className="text-lg text-muted-foreground">{point.description}</p>
                </Card>)}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" onClick={openForm} className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-3 whitespace-normal break-words">
                Experience the Odin Digital Difference →
              </Button>
            </div>
          </section>

          {/* Section 9: Final CTA */}
          <section className="mb-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Dominate the Gold Coast Market?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stop settling for mediocre results. Partner with the online marketing company that builds integrated digital systems to drive predictable, year-round ROI.
            </p>
            <Button size="lg" onClick={openForm} className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-3 whitespace-normal break-words">
              Claim Your FREE Gold Coast Marketing Audit →
            </Button>
          </section>

          {/* Section 10: Related Service & Location Links */}
          

          {/* Section 11: FAQ */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" onClick={openForm} className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-3 whitespace-normal break-words">
                Get Your Questions Answered: Book a Free Call →
              </Button>
            </div>
          </section>
        </div>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
          <Button size="lg" onClick={openForm} className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg px-6 py-3 whitespace-normal break-words">
            Get FREE Marketing Audit →
          </Button>
        </div>

        <Footer />
      </div>
    </>;
};
export default OnlineMarketingCompanyGoldCoast;