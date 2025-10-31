import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Closing } from "@/components/Closing";
import { SideTab } from "@/components/SideTab";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { ArrowRight, CheckCircle2, TrendingUp, Target, Award, Users, BarChart3, Search, MousePointerClick, Share2, Code, Zap, Shield, Clock } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OnlineMarketingCompanyBrisbane = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Company Brisbane | Unified Strategy, Real ROI - Odin Digital</title>
        <meta name="description" content="Stop wasting money on fragmented marketing. We are the Brisbane digital marketing company that delivers a single, cohesive strategy for maximum leads and sales." />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://growth-conduit-central.lovable.app/#organization",
                "name": "Odin Digital",
                "url": "https://growth-conduit-central.lovable.app/",
                "logo": "https://growth-conduit-central.lovable.app/logo.png",
                "description": "Performance-focused digital marketing agency specializing in high-ROI integrated digital marketing.",
                "founder": {
                  "@type": "Person",
                  "name": "Lucas Durante"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Customer Service",
                  "url": "https://growth-conduit-central.lovable.app/contact"
                }
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://growth-conduit-central.lovable.app/#local-business-brisbane",
                "name": "Odin Digital - Digital Marketing Company Brisbane",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Brisbane",
                  "addressRegion": "QLD",
                  "addressCountry": "AU"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "QLD"
                },
                "url": "https://growth-conduit-central.lovable.app/online-marketing-company-brisbane",
                "priceRange": "$$$",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "150"
                }
              },
              {
                "@type": "Service",
                "@id": "https://growth-conduit-central.lovable.app/online-marketing-company-brisbane#service",
                "serviceType": "Digital Marketing Services",
                "provider": {
                  "@id": "https://growth-conduit-central.lovable.app/#local-business-brisbane"
                },
                "areaServed": "Brisbane",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Brisbane Digital Marketing Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Search Engine Optimisation (SEO)"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "PPC & Google Ads Management"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Meta Ads (Facebook & Instagram)"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Conversion-Focused Web Design"
                      }
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much does digital marketing cost in Brisbane?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The cost varies greatly based on the scope of work (SEO, PPC, Social) and the competitiveness of your industry. Our packages are customized to your goals and budget. We focus on achieving a positive ROI, ensuring your marketing spend is an investment, not an expense."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to see results from digital marketing?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Results vary by channel. PPC and Meta Ads can generate leads almost immediately. SEO is a long-term strategy, typically showing significant results within 4 to 6 months. We provide clear expectations and milestones for all our services."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why should I choose a Brisbane digital marketing company over a national one?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A local Brisbane agency understands the regional market nuances, the local competition, and the specific consumer behaviour in South East Queensland. This local knowledge is invaluable for creating highly targeted and effective campaigns."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer a guarantee on your results?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We guarantee to deliver a high-quality, data-driven strategy and execution based on proven best practices. While we cannot guarantee specific sales figures (as that depends on your business model), our no lock-in contracts demonstrate our confidence in delivering measurable results that keep you with us."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the difference between SEO and PPC?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "SEO (Search Engine Optimization) is about earning organic, unpaid traffic over time. PPC (Pay-Per-Click) is about buying immediate, targeted traffic through platforms like Google Ads. We recommend an integrated strategy using both for maximum impact."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you only work with large companies?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No, we specialize in working with small to medium-sized businesses in Brisbane. We understand the need for efficiency and a strong ROI, and we tailor our strategies to deliver maximum impact for growing companies."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you help with my website as well?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Your website is the foundation of your digital marketing. We offer conversion-focused web design and development services to ensure your site is fast, secure, and optimized to convert the traffic we send to it."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is your reporting process like?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We provide transparent, monthly reports that focus on the metrics that matter most: leads generated, cost per lead, and ROI. We avoid jargon and ensure you fully understand the performance of your campaigns."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer social media marketing or just advertising?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We focus on paid social media advertising (Meta Ads) for immediate, measurable results. While we don't handle organic posting, our paid strategies are designed to generate leads and sales, not just likes and shares."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is a 'holistic' digital marketing strategy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A holistic strategy means all your digital channels (SEO, PPC, Social, Web) are planned and executed together, ensuring they complement and amplify each other, leading to greater overall efficiency and results than fragmented efforts."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I have to sign a long-term contract?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. We operate on a month-to-month basis with no lock-in contracts. We believe our performance should be the reason you stay with us."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you integrate your services with my existing CRM?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We specialize in integrating our lead generation efforts with popular CRM systems like HubSpot, Salesforce, and Pipedrive to ensure seamless lead flow and tracking."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What makes your team 'experts'?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our team consists of certified specialists in Google Ads, Meta Ads, and SEO. Our expertise is proven by our track record of over $574M+ in verified client revenue and a 95% client retention rate."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I get started?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The first step is a free, no-obligation strategy session. We'll audit your current efforts and provide a clear roadmap for how we can help your Brisbane business grow."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you handle email marketing automation?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, we offer email marketing and marketing automation services, ensuring you can nurture the leads we generate and maximize the lifetime value of your customers."
                    }
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
          {/* Floating Circles Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
                Digital Marketing Company Brisbane
              </h1>
              
              <p className="hero-sub-headline text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-foreground font-semibold leading-tight px-2">
                Stop Wasting Money on Fragmented Strategies. Get a Unified Digital Marketing Plan That Delivers ROI.
              </p>

              <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 text-muted-foreground leading-relaxed px-2">
                Are you tired of juggling multiple agencies and getting mixed results? It's time for a Brisbane digital marketing company that delivers a single, cohesive strategy focused on your bottom line.
              </p>

              <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-muted-foreground leading-relaxed px-2">
                At Odin Digital, we don't just run campaigns; we build integrated digital ecosystems. We combine SEO, PPC, Social Media, and Web Design into one powerful strategy, ensuring every dollar you spend works harder to generate leads and sales in the competitive Brisbane market.
              </p>

              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary text-white hover:shadow-glow px-6 py-5 md:px-8 md:py-6 text-base md:text-lg w-full sm:w-auto">
                  Schedule Your FREE Digital Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Proof Section - Performance Metrics */}
        <section className="py-12 md:py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center">
                The Proof Is in the Performance
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-center mb-8 md:mb-12 px-2">
                We're not just making promises; we're delivering verified results. Here's a snapshot of what our clients have achieved.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-card p-4 md:p-6 lg:p-8 rounded-lg shadow-card border border-border text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">$574M+</div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Verified Client Revenue</div>
                </div>

                <div className="bg-card p-4 md:p-6 lg:p-8 rounded-lg shadow-card border border-border text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">540%</div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Average ROI on Ad Spend</div>
                </div>

                <div className="bg-card p-4 md:p-6 lg:p-8 rounded-lg shadow-card border border-border text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">95%</div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Client Retention Rate</div>
                </div>

                <div className="bg-card p-4 md:p-6 lg:p-8 rounded-lg shadow-card border border-border text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">283+</div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground">Successful Campaigns</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center">
                The Brisbane Digital Marketing Pain Points We Solve
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-center mb-8 md:mb-12 px-2">
                In a city as competitive as Brisbane, a fragmented or opaque digital strategy is a recipe for failure. We fix these common problems.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-card p-5 md:p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-3">The Fragmentation Trap</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    You have one agency doing your SEO, another running your Google Ads, and you're managing social media yourself. The result? No one is talking, and your marketing efforts are disjointed, inefficient, and expensive.
                  </p>
                </div>

                <div className="bg-card p-5 md:p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-3">The Transparency Problem</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    You're paying a premium for a "big name" agency, but you only get confusing reports filled with vanity metrics. You don't know what you're paying for or if your marketing is actually generating leads.
                  </p>
                </div>

                <div className="bg-card p-5 md:p-6 rounded-lg shadow-card border border-border sm:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-3">The Non-Local Strategy</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    You're working with an agency based in Sydney or Melbourne that doesn't understand the unique Brisbane business landscape, the local competition, or the QLD market's specific challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center">
                What Our Clients Say
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-center mb-8 md:mb-12 px-2">
                Don't just take our word for it. Here's what business owners are saying about working with Odin Digital.
              </p>

              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-card p-5 md:p-6 rounded-lg shadow-card border border-border">
                  <div className="flex items-center mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle2 key={i} className="h-4 w-4 md:h-5 md:w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 md:mb-4 italic leading-relaxed">
                    "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with."
                  </p>
                  <p className="text-xs sm:text-sm font-semibold">Fabienne Costa</p>
                  <p className="text-xs text-muted-foreground">Founder, YCL Jewels</p>
                </div>

                <div className="bg-card p-5 md:p-6 rounded-lg shadow-card border border-border">
                  <div className="flex items-center mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle2 key={i} className="h-4 w-4 md:h-5 md:w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 md:mb-4 italic leading-relaxed">
                    "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since."
                  </p>
                  <p className="text-xs sm:text-sm font-semibold">Liam C</p>
                  <p className="text-xs text-muted-foreground">Founder, Krush Organics</p>
                </div>

                <div className="bg-card p-5 md:p-6 rounded-lg shadow-card border border-border">
                  <div className="flex items-center mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle2 key={i} className="h-4 w-4 md:h-5 md:w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 md:mb-4 italic leading-relaxed">
                    "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas...that year after I was averaging over $100k a month."
                  </p>
                  <p className="text-xs sm:text-sm font-semibold">Evan Tsaboukos</p>
                  <p className="text-xs text-muted-foreground">Founder, Imperial Wealth</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">
                Our Integrated Brisbane Digital Marketing Services
              </h2>
              
              <p className="text-base md:text-lg text-muted-foreground text-center mb-8 md:mb-12">
                We offer a full suite of services that work together seamlessly to maximize your online performance.
              </p>

              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-3">Search Engine Optimisation (SEO)</h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        We ensure your Brisbane business ranks at the top of Google. Our SEO strategy focuses on high-intent keywords, technical optimization, and quality content to drive organic, sustainable traffic that converts into leads and sales.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MousePointerClick className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-3">PPC & Google Ads Management</h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        We create highly targeted, profitable PPC campaigns on Google and Bing. Our focus is on maximizing your Return on Ad Spend (ROAS) by eliminating wasted clicks and driving high-quality, ready-to-buy traffic to your website.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Share2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-3">Meta Ads (Facebook & Instagram)</h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        We leverage the power of social media to build brand awareness, generate leads, and drive direct sales. Our Meta Ads strategies use advanced targeting and compelling creative to reach your ideal Brisbane customer where they spend their time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-3">Conversion-Focused Web Design</h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Your website is the hub of your digital strategy. We design and build fast, secure, and mobile-responsive websites that are strategically optimized to convert your marketing traffic into tangible business results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8 md:mt-12">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-primary text-white hover:shadow-glow px-6 py-5 md:px-8 md:py-6 text-base md:text-lg w-full sm:w-auto">
                    Schedule Your FREE Digital Strategy Session
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">
                Why Odin Digital is Brisbane's Trusted Digital Partner
              </h2>
              
              <p className="text-base md:text-lg text-muted-foreground text-center mb-8 md:mb-12">
                We don't just manage campaigns; we become an extension of your Brisbane business.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Brisbane Market Experts</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    We are not a faceless, national agency. We understand the local economy, the competition, and the consumer behaviour unique to Brisbane and South East Queensland.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">No Lock-In Contracts</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    We believe our results should keep you with us, not a binding contract. Our 95% client retention rate speaks for itself—we earn your business every month.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Holistic, Unified Strategy</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    We provide a single point of contact for all your digital needs, ensuring your SEO, PPC, Social, and Web Design efforts are perfectly aligned and working towards a single goal: your ROI.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">100% Transparency</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    You get clear, actionable reports that focus on the metrics that matter: leads, sales, and profit. No jargon, no fluff, just the data you need to make informed decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">
                Our 4-Step Digital Marketing Strategy
              </h2>
              
              <p className="text-base md:text-lg text-muted-foreground text-center mb-8 md:mb-12">
                We follow a proven process to turn your digital presence into a predictable revenue stream.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Discovery & Strategy</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      We conduct a deep dive into your business, competitors, and target audience. We then develop a custom, integrated digital marketing strategy tailored for the Brisbane market.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Implementation & Setup</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      We execute the strategy, setting up high-converting campaigns across all chosen channels (SEO, PPC, Meta Ads) and ensuring your website is optimized for speed and conversion.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Optimization & Reporting</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      We continuously monitor, test, and optimize all campaigns to maximize performance and ROI. You receive transparent, easy-to-understand reports focused on leads and sales.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Scale & Growth</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Once we establish a profitable and predictable system, we work with you to strategically scale your campaigns, allowing your Brisbane business to achieve sustainable growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Benefits Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">
                Why Choose Odin Digital as Your Brisbane Digital Marketing Company?
              </h2>
              
              <p className="text-base md:text-lg text-muted-foreground text-center mb-8 md:mb-12">
                We are obsessed with your results. Our focus is on turning your digital marketing spend into profit.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Results-Driven Approach</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Our entire process is geared toward achieving a positive ROI for your business. We don't chase vanity metrics; we chase leads and sales.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cutting-Edge Technology</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      We leverage the latest in marketing technology and AI-powered optimization to ensure your campaigns are efficient, targeted, and ahead of the curve. This includes using AI tools for audience segmentation, ad copy testing, and predictive analytics.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Direct Response Copywriting</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Our team writes copy that compels action, using a problem-agitation-solution framework that speaks directly to your Brisbane customer's pain points.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      With over $574M+ in verified client revenue and a 95% retention rate, we have the experience and results to back up our claims.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">
                Frequently Asked Questions About Digital Marketing in Brisbane
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">How much does digital marketing cost in Brisbane?</AccordionTrigger>
                  <AccordionContent>
                    The cost varies greatly based on the scope of work (SEO, PPC, Social) and the competitiveness of your industry. Our packages are customized to your goals and budget. We focus on achieving a positive ROI, ensuring your marketing spend is an investment, not an expense.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">How long does it take to see results from digital marketing?</AccordionTrigger>
                  <AccordionContent>
                    Results vary by channel. PPC and Meta Ads can generate leads almost immediately. SEO is a long-term strategy, typically showing significant results within 4 to 6 months. We provide clear expectations and milestones for all our services.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Why should I choose a Brisbane digital marketing company over a national one?</AccordionTrigger>
                  <AccordionContent>
                    A local Brisbane agency understands the regional market nuances, the local competition, and the specific consumer behaviour in South East Queensland. This local knowledge is invaluable for creating highly targeted and effective campaigns.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">Do you offer a guarantee on your results?</AccordionTrigger>
                  <AccordionContent>
                    We guarantee to deliver a high-quality, data-driven strategy and execution based on proven best practices. While we cannot guarantee specific sales figures (as that depends on your business model), our no lock-in contracts demonstrate our confidence in delivering measurable results that keep you with us.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">What is the difference between SEO and PPC?</AccordionTrigger>
                  <AccordionContent>
                    SEO (Search Engine Optimization) is about earning organic, unpaid traffic over time. PPC (Pay-Per-Click) is about buying immediate, targeted traffic through platforms like Google Ads. We recommend an integrated strategy using both for maximum impact.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">Do you only work with large companies?</AccordionTrigger>
                  <AccordionContent>
                    No, we specialize in working with small to medium-sized businesses in Brisbane. We understand the need for efficiency and a strong ROI, and we tailor our strategies to deliver maximum impact for growing companies.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">Can you help with my website as well?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Your website is the foundation of your digital marketing. We offer conversion-focused web design and development services to ensure your site is fast, secure, and optimized to convert the traffic we send to it.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left">What is your reporting process like?</AccordionTrigger>
                  <AccordionContent>
                    We provide transparent, monthly reports that focus on the metrics that matter most: leads generated, cost per lead, and ROI. We avoid jargon and ensure you fully understand the performance of your campaigns.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left">Do you offer social media marketing or just advertising?</AccordionTrigger>
                  <AccordionContent>
                    We focus on paid social media advertising (Meta Ads) for immediate, measurable results. While we don't handle organic posting, our paid strategies are designed to generate leads and sales, not just likes and shares.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left">What is a "holistic" digital marketing strategy?</AccordionTrigger>
                  <AccordionContent>
                    A holistic strategy means all your digital channels (SEO, PPC, Social, Web) are planned and executed together, ensuring they complement and amplify each other, leading to greater overall efficiency and results than fragmented efforts.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                  <AccordionTrigger className="text-left">Do I have to sign a long-term contract?</AccordionTrigger>
                  <AccordionContent>
                    No. We operate on a month-to-month basis with no lock-in contracts. We believe our performance should be the reason you stay with us.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12">
                  <AccordionTrigger className="text-left">Can you integrate your services with my existing CRM?</AccordionTrigger>
                  <AccordionContent>
                    Yes. We specialize in integrating our lead generation efforts with popular CRM systems like HubSpot, Salesforce, and Pipedrive to ensure seamless lead flow and tracking.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-13">
                  <AccordionTrigger className="text-left">What makes your team "experts"?</AccordionTrigger>
                  <AccordionContent>
                    Our team consists of certified specialists in Google Ads, Meta Ads, and SEO. Our expertise is proven by our track record of over $574M+ in verified client revenue and a 95% client retention rate.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14">
                  <AccordionTrigger className="text-left">How do I get started?</AccordionTrigger>
                  <AccordionContent>
                    The first step is a free, no-obligation strategy session. We'll audit your current efforts and provide a clear roadmap for how we can help your Brisbane business grow.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-15">
                  <AccordionTrigger className="text-left">Do you handle email marketing automation?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer email marketing and marketing automation services, ensuring you can nurture the leads we generate and maximize the lifetime value of your customers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Ready to Transform Your Brisbane Business?
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-muted-foreground px-2">
                Stop settling for fragmented strategies and start working with a digital marketing company that delivers a unified, high-performance plan.
              </p>

              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-muted-foreground px-2">
                Schedule your free, no-obligation strategy session today. We'll show you the exact roadmap to dominate the Brisbane market.
              </p>

              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary text-white hover:shadow-glow px-6 py-5 md:px-8 md:py-6 text-base md:text-lg w-full sm:w-auto">
                  Schedule Your FREE Digital Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden shadow-lg">
        <Link to="/contact">
          <Button className="w-full bg-gradient-primary text-white hover:shadow-glow py-6 text-base font-semibold">
            Schedule Free Strategy Session
          </Button>
        </Link>
      </div>

      <Footer />
      <Closing />
      <SideTab />
      <MarketingFormModal />
    </>
  );
};

export default OnlineMarketingCompanyBrisbane;