import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, TrendingUp, Target, BarChart3, Users, Award } from "lucide-react";

const OnlineMarketingCompanyNewcastle = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://growth-conduit-central.lovable.app/#organization",
        name: "Odin Digital",
        url: "https://growth-conduit-central.lovable.app/",
        logo: {
          "@type": "ImageObject",
          url: "https://growth-conduit-central.lovable.app/odin-logo.png"
        },
        description: "Full-service digital marketing agency specializing in SEO, PPC, and Web Design for Australian businesses."
      },
      {
        "@type": "MarketingAgency",
        "@id": "https://growth-conduit-central.lovable.app/online-marketing-company-newcastle#localbusiness",
        name: "Odin Digital - Online Marketing Company Newcastle",
        image: "https://growth-conduit-central.lovable.app/odin-logo.png",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Newcastle",
          addressRegion: "NSW",
          addressCountry: "AU"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -32.9283,
          longitude: 151.7817
        },
        url: "https://growth-conduit-central.lovable.app/online-marketing-company-newcastle",
        telephone: "+61-XXX-XXX-XXX",
        priceRange: "$$",
        areaServed: {
          "@type": "City",
          name: "Newcastle"
        }
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/online-marketing-company-newcastle#service",
        serviceType: "Digital Marketing Services in Newcastle",
        provider: {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        areaServed: {
          "@type": "City",
          name: "Newcastle",
          "@id": "https://www.wikidata.org/wiki/Q57278"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Marketing Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Local SEO & Content Strategy"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Precision-Targeted PPC & Meta Ads"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Conversion-Focused Web Design"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Strategic CRO & Analytics"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://growth-conduit-central.lovable.app/online-marketing-company-newcastle#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Why is an integrated strategy important for Newcastle businesses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In a dynamic regional market like Newcastle, every marketing channel must work together to maximize impact. An integrated strategy ensures your SEO, PPC, and website are all aligned, eliminating wasted effort and delivering a cohesive brand message to the local consumer."
            }
          },
          {
            "@type": "Question",
            name: "How do you compete with large Sydney-based marketing agencies?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer the same national-level expertise and technology but with a deep, local understanding of the Newcastle market and a regional value proposition. We focus on hyper-local SEO and precision targeting where large, impersonal Sydney agencies often fail."
            }
          },
          {
            "@type": "Question",
            name: "How do you ensure my marketing budget is spent effectively in the Hunter Region?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We use hyper-local targeting and industry-specific knowledge to ensure your budget is focused on the most profitable customer segments in Newcastle, whether they are B2B in the port industry or B2C in the tourism sector."
            }
          },
          {
            "@type": "Question",
            name: "What services do you offer as a full-service online marketing company?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer a complete suite of services, including Local SEO, Content Marketing, Google Ads (PPC), Meta Ads (Facebook/Instagram), Conversion-Focused Web Design, and Advanced Analytics/CRO."
            }
          },
          {
            "@type": "Question",
            name: "How do you measure the success of your campaigns?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We focus on the bottom line. Our reports track Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), and verified client revenue. We ensure every dollar spent is tied to a measurable, profitable outcome for your Newcastle business."
            }
          },
          {
            "@type": "Question",
            name: "Why should I choose Odin Digital over a local Newcastle agency?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer the national-level systems and proven track record of a large firm, combined with the personalized service and local focus that smaller local firms provide, but with superior technical expertise."
            }
          },
          {
            "@type": "Question",
            name: "Do you require a long-term contract?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. We operate on a month-to-month basis with no lock-in contracts. Our performance should be the only reason you stay with us."
            }
          },
          {
            "@type": "Question",
            name: "Can you help me with my website if it's outdated?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We specialize in building high-performance, conversion-focused websites that serve as the foundation for all your digital marketing efforts. We can redesign your site to meet modern speed and SEO standards."
            }
          },
          {
            "@type": "Question",
            name: "How long does it take to see results from a full-service strategy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "While PPC and Meta Ads can generate leads within days, a full-service strategy (including SEO and content) typically shows significant, sustainable growth within 3 to 6 months."
            }
          },
          {
            "@type": "Question",
            name: "What industries do you specialize in within Newcastle?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We have extensive experience in high-growth Newcastle sectors, including professional services, trades, tourism, and businesses related to the port and mining industries."
            }
          },
          {
            "@type": "Question",
            name: "How do you ensure your content resonates with the local Newcastle community?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our copywriters and strategists are trained to incorporate local language, landmarks, and themes that are familiar and relevant to the Newcastle culture, building instant rapport and trust with the local audience."
            }
          },
          {
            "@type": "Question",
            name: "What is the typical budget for a full-service online marketing strategy in Newcastle?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The budget is customized based on your business goals and competitive landscape. We work with you to determine a profitable budget that targets a positive ROI."
            }
          },
          {
            "@type": "Question",
            name: "Do you manage social media posting and engagement?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We focus on paid social media advertising (Meta Ads) for direct response and lead generation. We can integrate with your team for organic posting, but our core focus is on profitable advertising campaigns."
            }
          },
          {
            "@type": "Question",
            name: "How do we get started with Odin Digital?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The first step is a free, no-obligation Newcastle Digital Strategy Session. We'll audit your current performance and provide a clear roadmap for attracting more high-value, local customers."
            }
          },
          {
            "@type": "Question",
            name: "Can you help my business compete with large national chains operating in Newcastle?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We use hyper-local SEO and precision targeting to ensure you dominate the local search results and paid advertising spaces where large national chains often use generic, less effective strategies."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Online Marketing Company Newcastle | Full-Service Digital Agency - Odin Digital</title>
        <meta name="description" content="The leading Online Marketing Company in Newcastle. We provide integrated SEO, PPC, and Web Design strategies tailored to the Hunter Region market for predictable growth." />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <ServiceHero 
        h1="Online Marketing Company Newcastle"
        subheadline="Stop Paying Sydney Prices for Generic Marketing. Get a Cohesive, Newcastle-Centric Digital Strategy Engineered for Predictable Growth in the Hunter Region."
      />

      {/* Introduction */}
      <section className="py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Newcastle is a powerhouse of industry, community, and innovation. Your marketing needs to reflect that. We are the full-service online marketing company that understands the Hunter Region, delivering integrated SEO, PPC, and Web Design solutions that drive real, measurable growth without the Sydney price tag.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Odin Digital, we know that Newcastle businesses are often caught between expensive, impersonal Sydney agencies and small, limited local providers. We offer the best of both: the national-level expertise and technology of a large firm, combined with a deep, local understanding of the Newcastle market, from the Port to the Hunter Valley. We don't just run campaigns; we build a predictable, integrated system for customer acquisition that turns your marketing budget into a reliable source of revenue.
            </p>
            <Button 
              size="lg" 
              className="mt-8 bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule Your FREE Newcastle Digital Strategy Session →
            </Button>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-10 right-20 w-32 h-32 border-2 border-primary/10 rounded-full animate-float" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-accent/10 rounded-full animate-float-delayed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">The Proof Is in the Performance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We partner with high-calibre businesses across Australia, including those in dynamic regional markets like Newcastle, to deliver measurable, high-ROI growth.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { metric: "Verified Client Revenue", value: "$574M+", icon: TrendingUp },
              { metric: "Average ROI on Ad Spend", value: "540%", icon: BarChart3 },
              { metric: "Client Retention Rate", value: "95%", icon: Users },
              { metric: "Successful Campaigns Delivered", value: "283+", icon: Award }
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-card/50 backdrop-blur border-border/50 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-0">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.metric}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/10 rotate-45" />
          <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-accent/10 rotate-12" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">The Newcastle Digital Marketing Pain Points We Solve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Newcastle businesses face unique challenges when seeking a full-service marketing partner. We solve the core problems that prevent your business from achieving predictable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "The Sydney Agency Price Trap",
                description: "You're paying premium prices to Sydney agencies that don't understand the local Newcastle economy, culture, or the specific needs of the Hunter Region. You need national expertise at a regional value."
              },
              {
                title: "Fragmented Marketing & Disjointed Strategy",
                description: "You're using multiple providers for SEO, PPC, and Web Design. This leads to a disjointed brand message, wasted time coordinating, and campaigns that work against each other."
              },
              {
                title: "Lack of Local Industry Knowledge",
                description: "Agencies fail to grasp the nuances of Newcastle's key industries (Port, Mining, Education, Tourism), resulting in generic campaigns that miss the mark with local B2B and B2C audiences."
              }
            ].map((pain, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-card to-muted/20 border-border/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4 text-foreground">{pain.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pain.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">What Our Professional Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We partner with high-performing professionals who demand results and discretion. Here's what they're saying about our partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
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
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 bg-card/50 backdrop-blur border-border/50 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-0 flex flex-col h-full">
                  <p className="text-muted-foreground italic mb-6 leading-relaxed flex-grow">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4 mt-auto">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-float-delayed" />
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Integrated Newcastle Online Marketing Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide a full suite of digital marketing services, all unified under a single, Newcastle-centric strategy for maximum impact and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "Local SEO & Content Strategy",
                description: "We ensure your business dominates local search results for high-intent keywords. Our strategy focuses on local link building, Google My Business optimization, and content that speaks directly to the needs of the Newcastle consumer, driving organic, high-quality traffic.",
                icon: Target
              },
              {
                title: "Precision-Targeted PPC & Meta Ads",
                description: "We manage Google Ads and Meta Ads (Facebook/Instagram) with a focus on hyper-local targeting and budget allocation tailored to the Hunter Region. We focus on delivering the lowest possible Cost Per Acquisition (CPA) for genuine Newcastle customers.",
                icon: TrendingUp
              },
              {
                title: "Conversion-Focused Web Design",
                description: "Your website is the foundation. We design and build lightning-fast, mobile-first websites that are engineered for conversion. Every site is launched with full technical SEO and a clear user journey to turn visitors into leads and sales.",
                icon: CheckCircle2
              },
              {
                title: "Strategic CRO & Analytics",
                description: "We continuously optimize your website and campaigns to maximize your conversion rate. Our focus on advanced analytics ensures we track every dollar spent, providing transparent reports that prove your Return on Investment (ROI).",
                icon: BarChart3
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-card to-muted/20 border-border/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-0">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule Your FREE Newcastle Digital Strategy Session →
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
        {/* Geometric decorations */}
        <div className="absolute top-10 right-10 w-40 h-40 border-2 border-primary/10 rounded-full animate-float" />
        <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-accent/10 rotate-45" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Odin Digital is Newcastle's Preferred Marketing Partner</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine national-level resources with the local insight needed to succeed in the Hunter Region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Newcastle Value, National Expertise",
                description: "We eliminate the need to choose between expensive Sydney agencies and limited local providers. You get top-tier strategy at a regional value."
              },
              {
                title: "Integrated Strategy",
                description: "We eliminate the fragmentation problem. All your digital channels work together, ensuring a cohesive brand message and maximum efficiency across SEO, PPC, and Web Design."
              },
              {
                title: "Transparent ROI Reporting",
                description: "We cut through the vanity metrics. Our reports focus on the bottom line: Cost Per Acquisition (CPA) and Return on Ad Spend (ROAS), so you always know your marketing is profitable."
              },
              {
                title: "No Lock-In Contracts",
                description: "We believe our results should keep you with us, not a binding contract. Our 95% client retention rate proves our commitment to long-term, high-value partnerships."
              }
            ].map((reason, index) => (
              <Card key={index} className="p-8 bg-card/50 backdrop-blur border-border/50 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-0">
                  <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our 4-Step Predictable Growth System for Newcastle Businesses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a strategic process designed to deliver a steady, high-quality stream of local Newcastle customers.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Comprehensive Newcastle Market Audit",
                description: "We conduct a deep dive into your current digital performance, local competitors, and target customer journey. We then create a detailed, integrated strategy blueprint tailored to your specific business and the Newcastle market."
              },
              {
                step: "2",
                title: "Foundation Build & Optimization",
                description: "We ensure your website is a high-performance, conversion-focused asset. We implement all technical SEO, tracking, and analytics foundations necessary for measurable success."
              },
              {
                step: "3",
                title: "Integrated Campaign Launch",
                description: "We launch cohesive campaigns across all agreed-upon channels (SEO, PPC, Meta Ads). All channels are managed by a single team, ensuring perfect alignment and budget efficiency."
              },
              {
                step: "4",
                title: "Continuous Optimization & Scaling",
                description: "We continuously monitor, test, and refine all campaigns, dynamically shifting budget and strategy based on performance data. We focus on scaling your success for maximum profitability."
              }
            ].map((step, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-card to-muted/20 border-border/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-0">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.step}</div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/10 rounded-full animate-float" />
        <div className="absolute bottom-10 right-20 w-40 h-40 border-2 border-accent/10 rounded-full animate-float-delayed" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Odin Digital as Your Online Marketing Company?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are obsessed with your business growth. Our focus is on turning your marketing spend into a predictable, profitable system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "National Expertise, Local Focus",
                description: "You get the best of both worlds: the cutting-edge strategies of a national agency applied with the nuanced understanding of the Newcastle market."
              },
              {
                title: "Direct Response Focus",
                description: "Our entire approach is built on direct response principles. We don't do 'brand awareness' for the sake of it; we focus on actions that generate immediate leads and sales."
              },
              {
                title: "Proven Track Record",
                description: "With over $574M+ in verified client revenue and a 95% retention rate, we have the experience and results to back up our claims in the most competitive markets."
              },
              {
                title: "Full-Service Team",
                description: "Gain instant access to a full team of specialists—SEO experts, PPC managers, copywriters, and web developers—for less than the cost of a single in-house hire."
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 bg-card/50 backdrop-blur border-border/50 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-0">
                  <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Card className="p-12 bg-gradient-to-br from-card to-muted/20 border-border/50 max-w-4xl mx-auto text-center shadow-xl animate-fade-in">
            <CardContent className="p-0">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Partner with Newcastle's Leading Online Marketing Company?</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Stop dealing with fragmented strategies and start attracting high-value local customers with a cohesive, integrated digital marketing plan.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule your free, no-obligation Newcastle Digital Strategy Session today. We'll show you the exact roadmap to dominate your local market and maximize your profitability.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-lg px-8"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule Your FREE Newcastle Digital Strategy Session →
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
        {/* Geometric shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-20 h-20 border-2 border-primary/10 rotate-45" />
          <div className="absolute bottom-20 left-20 w-32 h-32 border-2 border-accent/10 rotate-12" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions About Online Marketing in Newcastle</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Why is an integrated strategy important for Newcastle businesses?",
                  answer: "In a dynamic regional market like Newcastle, every marketing channel must work together to maximize impact. An integrated strategy ensures your SEO, PPC, and website are all aligned, eliminating wasted effort and delivering a cohesive brand message to the local consumer."
                },
                {
                  question: "How do you compete with large Sydney-based marketing agencies?",
                  answer: "We offer the same national-level expertise and technology but with a deep, local understanding of the Newcastle market and a regional value proposition. We focus on hyper-local SEO and precision targeting where large, impersonal Sydney agencies often fail."
                },
                {
                  question: "How do you ensure my marketing budget is spent effectively in the Hunter Region?",
                  answer: "We use hyper-local targeting and industry-specific knowledge to ensure your budget is focused on the most profitable customer segments in Newcastle, whether they are B2B in the port industry or B2C in the tourism sector."
                },
                {
                  question: "What services do you offer as a full-service online marketing company?",
                  answer: "We offer a complete suite of services, including Local SEO, Content Marketing, Google Ads (PPC), Meta Ads (Facebook/Instagram), Conversion-Focused Web Design, and Advanced Analytics/CRO."
                },
                {
                  question: "How do you measure the success of your campaigns?",
                  answer: "We focus on the bottom line. Our reports track Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), and verified client revenue. We ensure every dollar spent is tied to a measurable, profitable outcome for your Newcastle business."
                },
                {
                  question: "Why should I choose Odin Digital over a local Newcastle agency?",
                  answer: "We offer the national-level systems and proven track record of a large firm, combined with the personalized service and local focus that smaller local firms provide, but with superior technical expertise."
                },
                {
                  question: "Do you require a long-term contract?",
                  answer: "No. We operate on a month-to-month basis with no lock-in contracts. Our performance should be the only reason you stay with us."
                },
                {
                  question: "Can you help me with my website if it's outdated?",
                  answer: "Yes. We specialize in building high-performance, conversion-focused websites that serve as the foundation for all your digital marketing efforts. We can redesign your site to meet modern speed and SEO standards."
                },
                {
                  question: "How long does it take to see results from a full-service strategy?",
                  answer: "While PPC and Meta Ads can generate leads within days, a full-service strategy (including SEO and content) typically shows significant, sustainable growth within 3 to 6 months."
                },
                {
                  question: "What industries do you specialize in within Newcastle?",
                  answer: "We have extensive experience in high-growth Newcastle sectors, including professional services, trades, tourism, and businesses related to the port and mining industries."
                },
                {
                  question: "How do you ensure your content resonates with the local Newcastle community?",
                  answer: "Our copywriters and strategists are trained to incorporate local language, landmarks, and themes that are familiar and relevant to the Newcastle culture, building instant rapport and trust with the local audience."
                },
                {
                  question: "What is the typical budget for a full-service online marketing strategy in Newcastle?",
                  answer: "The budget is customized based on your business goals and competitive landscape. We work with you to determine a profitable budget that targets a positive ROI."
                },
                {
                  question: "Do you manage social media posting and engagement?",
                  answer: "We focus on paid social media advertising (Meta Ads) for direct response and lead generation. We can integrate with your team for organic posting, but our core focus is on profitable advertising campaigns."
                },
                {
                  question: "How do we get started with Odin Digital?",
                  answer: "The first step is a free, no-obligation Newcastle Digital Strategy Session. We'll audit your current performance and provide a clear roadmap for attracting more high-value, local customers."
                },
                {
                  question: "Can you help my business compete with large national chains operating in Newcastle?",
                  answer: "Absolutely. We use hyper-local SEO and precision targeting to ensure you dominate the local search results and paid advertising spaces where large national chains often use generic, less effective strategies."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur border border-border/50 rounded-lg px-6 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-lg px-8"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule Your FREE Newcastle Digital Strategy Session →
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t border-border md:hidden z-50 animate-slide-up">
        <Button 
          className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
          size="lg"
          onClick={() => window.location.href = '/contact'}
        >
          Get FREE Strategy Session
        </Button>
      </div>

      <Footer />
    </>
  );
};

export default OnlineMarketingCompanyNewcastle;