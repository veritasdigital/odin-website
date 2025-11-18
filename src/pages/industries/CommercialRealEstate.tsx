import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Building2, Target, TrendingUp, Database, FileText, BarChart3 } from "lucide-react";

const CommercialRealEstate = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+61-2-8000-0000",
          "contactType": "customer service"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Digital Marketing for Commercial Real Estate",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "name": "Digital Marketing for Commercial Real Estate",
        "description": "Data-driven digital marketing services for commercial real estate firms, including CRE lead generation, commercial property SEO, and website design optimized for high-value investor inquiries.",
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Commercial Real Estate Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Property SEO"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "CRE Lead Generation (PPC)"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Real Estate Website Design"
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
            "name": "What is the most effective digital marketing channel for Commercial Real Estate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The most effective channel is a balanced, integrated strategy. Commercial Property SEO builds long-term authority and ensures your data is visible, while CRE Lead Generation (PPC) provides immediate, highly-qualified investor inquiries."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure the leads are qualified investors and not tire-kickers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use a combination of precision targeting in PPC/Meta Ads, ad copy that filters for high-value intent (e.g., 'Download Investment Analysis,' 'Confidential Consultation'), and conversion forms that require specific qualifying information."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from CRE marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PPC and targeted Meta Ads can generate qualified inquiries within weeks. SEO is a long-term authority play, typically showing significant results in 9-18 months. We focus on a blended strategy for both immediate and sustained deal flow."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle the marketing of specific property listings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We build dedicated, data-rich landing pages for each listing, optimized for commercial property SEO and integrated with targeted PPC campaigns to drive qualified traffic directly to the property's authoritative hub on your site."
            }
          },
          {
            "@type": "Question",
            "name": "What makes your commercial real estate website design different?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our commercial real estate website design focuses on data presentation, speed, and authority. We specialize in designing intuitive interfaces for property search, data visualization, and conversion-optimized forms for high-value leads."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with brokers, developers, or property management firms?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work with all three: individual top-tier brokers, large development firms, and commercial property management companies, tailoring our strategy to the specific transaction type (sales, leasing, investment)."
            }
          },
          {
            "@type": "Question",
            "name": "How do you measure success in the Commercial Real Estate market?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We measure success based on Sales Qualified Leads (SQLs), Deal Value, Pipeline Velocity, and the number of high-value report downloads. We track every lead from the first touch to the final closed deal."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help us leverage our proprietary market data for marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Leveraging your proprietary data is a core component of our strategy. We optimize your market reports and investment analysis for search engines and use them as high-value lead magnets in PPC and Meta Ads campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "What is 'Commercial Property SEO'?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It's an SEO strategy that moves beyond generic terms to target high-value, data-driven keywords related to investment analysis, cap rates, zoning, and specific property types (e.g., industrial, office, retail)."
            }
          },
          {
            "@type": "Question",
            "name": "Do you integrate with our CRM and listing management systems?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Seamless integration with your CRM (e.g., Salesforce, HubSpot, specific CRE platforms) and listing management systems is non-negotiable to ensure accurate lead routing and deal flow reporting."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle the long sales cycle common in CRE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use sophisticated retargeting and email nurturing campaigns to build trust and maintain brand presence over the long decision-making period, providing data and authority at every touchpoint."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer a performance guarantee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer the best guarantee in the industry: No Lock-In Contracts. Our 95% client retention rate is a testament to our performance. We put the risk on us, not you."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help us with digital marketing for a new development project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in pre-leasing and pre-sale marketing for new developments, using targeted campaigns to attract anchor tenants and early-stage investors."
            }
          },
          {
            "@type": "Question",
            "name": "How do you optimize broker profile pages for search?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We optimize broker profiles for hyper-local and specialization-based keywords (e.g., 'industrial broker in Melbourne,' 'office leasing specialist Sydney CBD'), ensuring they are visible to potential clients."
            }
          },
          {
            "@type": "Question",
            "name": "What is the typical budget for a comprehensive CRE digital marketing strategy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Budgets are typically substantial, reflecting the high value of a single transaction. A comprehensive strategy covering investor targeting, data authority, and lead generation often requires a minimum investment of $10,000 - $50,000+ per month. We provide a detailed, data-driven quote after a strategy session."
            }
          }
        ]
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "name": "Commercial Real Estate Deal Flow Success",
        "author": {
          "@type": "Person",
          "name": "A Commercial Property Developer"
        },
        "reviewBody": "Odin Digital understands that CRE is a data-driven business. They transformed our website into an authoritative data hub and their targeted PPC campaigns have drastically reduced our low-quality leads, allowing our brokers to focus on qualified investors. Their reporting on deal value and pipeline velocity is exactly what we needed."
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Digital Marketing for Commercial Real Estate | Data-Driven Deal Flow | Odin Digital</title>
        <meta name="description" content="Stop chasing low-quality leads. Odin Digital provides data-driven digital marketing for commercial real estate, specializing in CRE lead generation, investment property SEO, and high-value deal flow." />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-muted/30 to-muted/20 mt-20">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-20 w-80 h-80 bg-muted/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-accent/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-accent/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-2/3 right-1/2 w-2 h-2 bg-accent/30 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
        </div>

        {/* Floating Circles */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-accent/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-10 w-40 h-40 border-2 border-primary/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-10 w-28 h-28 border-2 border-accent/5 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-primary/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>

        {/* Geometric Shapes */}
        <div className="absolute top-32 left-1/4 w-16 h-16 border-2 border-primary/10 rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-1/4 w-20 h-20 border-2 border-accent/10 rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-12 h-12 border border-primary/10 rounded-lg rotate-6 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-14 h-14 border border-accent/10 rounded-lg -rotate-12 animate-pulse" style={{ animationDelay: '1.8s' }}></div>

        {/* Additional Decorative Elements */}
        <div className="absolute top-40 left-1/2 w-1 h-16 bg-gradient-to-b from-primary/20 to-transparent rotate-12"></div>
        <div className="absolute bottom-40 right-1/2 w-1 h-20 bg-gradient-to-t from-accent/20 to-transparent -rotate-12"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-charcoal">
              Digital Marketing for Commercial Real Estate
            </h1>
            <p className="hero-sub-headline text-xl md:text-2xl mb-8 text-charcoal/70 max-w-3xl mx-auto">
              Data-Driven Strategies for High-Value Deal Flow. Stop Chasing Low-Quality Leads. Start Attracting Qualified Investors.
            </p>
            <Button asChild size="lg" className="whitespace-normal break-words py-3 px-6">
              <Link to="/contact">Request Your Data-Driven CRE Marketing Audit →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative py-12 bg-gradient-to-br from-white via-muted/30 to-muted/20 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-muted/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-muted/15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-accent/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-charcoal">
            Why Most Marketing Agencies Fail Commercial Real Estate Firms
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-charcoal">The Low-Quality Lead Flood</h3>
                <p className="text-charcoal/70 flex-grow">
                  Most agencies optimize for the cheapest lead. We focus on Sales Qualified Leads (SQLs) and Investor Inquiries who meet specific capital requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <Database className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-charcoal">The Data Invisibility Problem</h3>
                <p className="text-charcoal/70 flex-grow">
                  Your market data is your competitive edge. We implement commercial property SEO to ensure your investment reports rank highly.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <Building2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-charcoal">Slow Digital Adoption</h3>
                <p className="text-charcoal/70 flex-grow">
                  An outdated website erodes investor confidence. We build fast, secure websites that present complex data with clarity and authority.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-charcoal">Long Sales Cycle Stagnation</h3>
                <p className="text-charcoal/70 flex-grow">
                  We create data-driven content and use retargeting to nurture leads through the entire process with necessary analysis at every touchpoint.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <FileText className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-charcoal">Fragmented Listing Strategy</h3>
                <p className="text-charcoal/70 flex-grow">
                  Relying on third-party sites means losing control. We build your website as the authoritative hub for direct control and better conversion.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <BarChart3 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-charcoal">Vanity Metrics Over ROI</h3>
                <p className="text-charcoal/70 flex-grow">
                  We focus on SQLs, Deal Value, and Pipeline Velocity—not impressions and clicks. We integrate with your CRM for actual deal flow reporting.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="whitespace-normal break-words py-3 px-6">
              <Link to="/contact">Talk to a Data-Driven CRE Marketing Expert →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-12 bg-gradient-to-br from-muted/10 via-white to-muted/20 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-accent/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-40 right-10 w-24 h-24 border-2 border-primary/10 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-20 h-20 border-2 border-accent/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-charcoal">
            Our Data-Driven Commercial Real Estate Marketing Services
          </h2>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Commercial Property SEO */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">
                Commercial Property SEO: Establishing Market Authority
              </h3>
              <p className="text-charcoal/70 mb-6">
                We build commercial property SEO strategies that get your investment opportunities, market reports, and broker profiles to Page 1 for the exact searches your ideal investors and tenants are using.
              </p>
              <ul className="space-y-3 text-charcoal/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Investment-Focused Content Optimization:</strong> We optimize for high-value keywords like "Sydney office space cap rates" and "industrial property investment analysis."</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Technical SEO for Data Portals:</strong> We ensure your site is technically flawless, optimizing for speed and mobile-first indexing for large data sets.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Authority-Driven Link Building:</strong> We earn backlinks from financial news outlets and industry associations to boost domain authority.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Local SEO for Broker Profiles:</strong> We optimize broker profiles for hyper-local searches like "commercial real estate broker near me."</span>
                </li>
              </ul>
            </div>

            {/* CRE Lead Generation (PPC) */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">
                CRE Lead Generation (PPC): Precision Targeting for Investors
              </h3>
              <p className="text-charcoal/70 mb-6">
                We build PPC campaigns that deliver immediate, qualified investor inquiries while maintaining a healthy Cost Per Qualified Lead (CPQL).
              </p>
              <ul className="space-y-3 text-charcoal/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Precision Investor Targeting:</strong> We target high-net-worth investors, fund managers, and corporate real estate decision-makers.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Funnel-Aligned Ad Copy:</strong> Our ad copy focuses on data, ROI, and exclusive access to filter out low-intent users.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Competitor Conquesting:</strong> We capture users searching for competitors, positioning your firm as the data-driven alternative.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Landing Page Optimization for Data Capture:</strong> We maximize downloads of market reports and confidential consultation requests.</span>
                </li>
              </ul>
            </div>

            {/* Meta Ads */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">
                Meta Ads for Commercial Real Estate: Authority and Retargeting
              </h3>
              <p className="text-charcoal/70 mb-6">
                We build Meta Ads campaigns that leverage the platform for brand authority, content distribution, and sophisticated retargeting.
              </p>
              <ul className="space-y-3 text-charcoal/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Content Distribution for Authority:</strong> We promote your market reports and thought leadership to establish your firm as the go-to authority.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Retargeting for Long Sales Cycles:</strong> We nurture website visitors with data-driven content through the long decision-making process.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Lookalike Audience Strategy:</strong> We create lookalike audiences based on your most valuable clients for maximum ROI.</span>
                </li>
              </ul>
            </div>

            {/* Website Design */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">
                Commercial Real Estate Website Design: The Data Hub
              </h3>
              <p className="text-charcoal/70 mb-6">
                We build commercial real estate website design that positions your firm as the authoritative data hub and converts visitors into qualified investor leads.
              </p>
              <ul className="space-y-3 text-charcoal/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Data-Driven Presentation:</strong> We design intuitive interfaces for property search and data visualization with clarity and speed.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Conversion-Optimized for SQLs:</strong> We prioritize CTAs for Report Downloads and Confidential Consultations to maximize qualified leads.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Technical Excellence and Security:</strong> Your website is built on a robust framework capable of handling large property databases.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Broker Profile Integration:</strong> We design high-converting broker profiles showcasing expertise and transaction history.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="whitespace-normal break-words py-3 px-6">
              <Link to="/contact">See Our CRE Marketing Packages →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative py-12 bg-gradient-to-br from-white via-muted/20 to-muted/30 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-muted/15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-muted/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2.5s' }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-accent/20 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-charcoal">
            Why Commercial Real Estate Firms Choose Odin Digital
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <h3 className="text-xl font-bold mb-3 text-charcoal">Proven Track Record in High-Value B2B</h3>
                <p className="text-charcoal/70 flex-grow">
                  We've generated over $574 million in client revenue with a significant track record in high-value B2B sectors where data and ROI are paramount.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <h3 className="text-xl font-bold mb-3 text-charcoal">Focus on Deal Flow, Not Vanity Metrics</h3>
                <p className="text-charcoal/70 flex-grow">
                  Our reporting focuses on Sales Qualified Leads (SQLs), Deal Value, and Pipeline Velocity—the metrics that truly grow your business.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <h3 className="text-xl font-bold mb-3 text-charcoal">Data-Centric Approach</h3>
                <p className="text-charcoal/70 flex-grow">
                  We understand cap rates, zoning, and market trends. Our strategies leverage your proprietary data to attract sophisticated investors.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <h3 className="text-xl font-bold mb-3 text-charcoal">Full Transparency and Partnership</h3>
                <p className="text-charcoal/70 flex-grow">
                  We provide full access to analytics and reporting. We view ourselves as a confidential partner, not just a vendor.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <h3 className="text-xl font-bold mb-3 text-charcoal">No Lock-In Contracts</h3>
                <p className="text-charcoal/70 flex-grow">
                  Our 95% client retention rate is earned, not enforced. We offer month-to-month service because we're confident in our results.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <h3 className="text-xl font-bold mb-3 text-charcoal">CRM Integration Expertise</h3>
                <p className="text-charcoal/70 flex-grow">
                  Seamless integration with your CRM and listing systems ensures accurate lead routing and comprehensive deal flow reporting.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="whitespace-normal break-words py-3 px-6">
              <Link to="/contact">Schedule Your Confidential Deal Flow Strategy Session →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 bg-gradient-to-br from-muted/20 via-white to-muted/10 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-10 w-64 h-64 bg-muted/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-muted/15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-1/3 w-16 h-16 border-2 border-primary/10 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-accent/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-charcoal">
            FAQs: Your Questions About Commercial Real Estate Marketing Answered
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  What is the most effective digital marketing channel for Commercial Real Estate?
                </AccordionTrigger>
                <AccordionContent>
                  The most effective channel is a balanced, integrated strategy. Commercial Property SEO builds long-term authority and ensures your data is visible, while CRE Lead Generation (PPC) provides immediate, highly-qualified investor inquiries.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  How do you ensure the leads are qualified investors and not tire-kickers?
                </AccordionTrigger>
                <AccordionContent>
                  We use a combination of precision targeting in PPC/Meta Ads, ad copy that filters for high-value intent (e.g., "Download Investment Analysis," "Confidential Consultation"), and conversion forms that require specific qualifying information.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  How long does it take to see results from CRE marketing?
                </AccordionTrigger>
                <AccordionContent>
                  PPC and targeted Meta Ads can generate qualified inquiries within weeks. SEO is a long-term authority play, typically showing significant results in 9-18 months. We focus on a blended strategy for both immediate and sustained deal flow.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  How do you handle the marketing of specific property listings?
                </AccordionTrigger>
                <AccordionContent>
                  We build dedicated, data-rich landing pages for each listing, optimized for commercial property SEO and integrated with targeted PPC campaigns to drive qualified traffic directly to the property's authoritative hub on your site.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  What makes your commercial real estate website design different?
                </AccordionTrigger>
                <AccordionContent>
                  Our commercial real estate website design focuses on data presentation, speed, and authority. We specialize in designing intuitive interfaces for property search, data visualization, and conversion-optimized forms for high-value leads.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Do you work with brokers, developers, or property management firms?
                </AccordionTrigger>
                <AccordionContent>
                  We work with all three: individual top-tier brokers, large development firms, and commercial property management companies, tailoring our strategy to the specific transaction type (sales, leasing, investment).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  How do you measure success in the Commercial Real Estate market?
                </AccordionTrigger>
                <AccordionContent>
                  We measure success based on Sales Qualified Leads (SQLs), Deal Value, Pipeline Velocity, and the number of high-value report downloads. We track every lead from the first touch to the final closed deal.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  Can you help us leverage our proprietary market data for marketing?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Leveraging your proprietary data is a core component of our strategy. We optimize your market reports and investment analysis for search engines and use them as high-value lead magnets in PPC and Meta Ads campaigns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">
                  What is "Commercial Property SEO"?
                </AccordionTrigger>
                <AccordionContent>
                  It's an SEO strategy that moves beyond generic terms to target high-value, data-driven keywords related to investment analysis, cap rates, zoning, and specific property types (e.g., industrial, office, retail).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left">
                  Do you integrate with our CRM and listing management systems?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. Seamless integration with your CRM (e.g., Salesforce, HubSpot, specific CRE platforms) and listing management systems is non-negotiable to ensure accurate lead routing and deal flow reporting.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11">
                <AccordionTrigger className="text-left">
                  How do you handle the long sales cycle common in CRE?
                </AccordionTrigger>
                <AccordionContent>
                  We use sophisticated retargeting and email nurturing campaigns to build trust and maintain brand presence over the long decision-making period, providing data and authority at every touchpoint.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12">
                <AccordionTrigger className="text-left">
                  Do you offer a performance guarantee?
                </AccordionTrigger>
                <AccordionContent>
                  We offer the best guarantee in the industry: No Lock-In Contracts. Our 95% client retention rate is a testament to our performance. We put the risk on us, not you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13">
                <AccordionTrigger className="text-left">
                  Can you help us with digital marketing for a new development project?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. We specialize in pre-leasing and pre-sale marketing for new developments, using targeted campaigns to attract anchor tenants and early-stage investors.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14">
                <AccordionTrigger className="text-left">
                  How do you optimize broker profile pages for search?
                </AccordionTrigger>
                <AccordionContent>
                  We optimize broker profiles for hyper-local and specialization-based keywords (e.g., "industrial broker in Melbourne," "office leasing specialist Sydney CBD"), ensuring they are visible to potential clients.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15">
                <AccordionTrigger className="text-left">
                  What is the typical budget for a comprehensive CRE digital marketing strategy?
                </AccordionTrigger>
                <AccordionContent>
                  Budgets are typically substantial, reflecting the high value of a single transaction. A comprehensive strategy covering investor targeting, data authority, and lead generation often requires a minimum investment of $10,000 - $50,000+ per month. We provide a detailed, data-driven quote after a strategy session.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-charcoal">
            Ready to Stop Chasing Low-Quality Leads and Start Attracting Qualified Investors?
          </h2>
          <p className="text-xl text-charcoal/70 mb-8 max-w-3xl mx-auto">
            Stop settling for generic marketing that doesn't understand the data and the deal. Start working with the commercial real estate marketing agency that drives high-value deal flow and establishes your firm as the market authority.
          </p>
          <Button asChild size="lg" className="whitespace-normal break-words py-3 px-6">
            <Link to="/contact">Schedule Your Confidential Deal Flow Strategy Session →</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CommercialRealEstate;
