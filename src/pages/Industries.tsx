import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Building2,
  Laptop,
  Home,
  Store,
  Pill,
  Building,
  Smile,
  Zap,
  Trees,
  Eye,
  ArrowRight,
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      name: "SaaS Companies",
      painPoint: "High CAC and Low CLV",
      focus: "Scaling MRR and Qualified Sign-ups",
      link: "/industries/saas-companies",
      icon: Laptop,
    },
    {
      name: "Enterprise Software",
      painPoint: "Low-Quality Leads and Long Sales Cycles",
      focus: "Sales Qualified Leads (SQLs) and ABM",
      link: "/industries/enterprise-software",
      icon: Building2,
    },
    {
      name: "Luxury Real Estate",
      painPoint: "Eroded Exclusivity and Low-Quality Leads",
      focus: "High-Net-Worth Targeting and Brand Authority",
      link: "/industries/luxury-real-estate",
      icon: Home,
    },
    {
      name: "Franchise Businesses",
      painPoint: "Brand Dilution and Local Invisibility",
      focus: "Local SEO, Multi-Location PPC, and Franchisee Recruitment",
      link: "/industries/franchise-businesses",
      icon: Store,
    },
    {
      name: "Pharmaceutical Companies",
      painPoint: "Regulatory Risk and HCP Targeting Failure",
      focus: "Compliance-First SEO, HCP Digital Marketing, and Clinical Trial Recruitment",
      link: "/industries/pharmaceutical-companies",
      icon: Pill,
    },
    {
      name: "Commercial Real Estate",
      painPoint: "Data Invisibility and Low-Quality Investor Leads",
      focus: "Data-Driven Deal Flow and Commercial Property SEO",
      link: "/industries/commercial-real-estate",
      icon: Building,
    },
    {
      name: "Cosmetic Dentists",
      painPoint: "Low-Value Patients and High Competition",
      focus: "High-Value Procedure Lead Generation",
      link: "/industries/cosmetic-dentists",
      icon: Smile,
    },
    {
      name: "Electricians",
      painPoint: "Low-Value Service Calls and Local Visibility",
      focus: "Local SEO and High-Value Job Lead Generation",
      link: "/industries/electricians",
      icon: Zap,
    },
    {
      name: "Landscaping Companies",
      painPoint: "Seasonal Fluctuations and Low-Value Contracts",
      focus: "High-Value Commercial Contract Lead Generation",
      link: "/industries/landscaping-companies",
      icon: Trees,
    },
    {
      name: "Ophthalmologists",
      painPoint: "Low-Value Referrals and High-Cost Procedures",
      focus: "High-Value Procedure Lead Generation (e.g., LASIK)",
      link: "/industries/ophthalmologists",
      icon: Eye,
    },
  ];

  const schemaMarkup = {
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
          "contactType": "customer service",
        },
      },
      {
        "@type": "Service",
        "serviceType": "Digital Marketing for All Industries",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital",
        },
        "name": "Specialized Digital Marketing Agency for All Industries",
        "description":
          "Conversion-focused digital marketing services with specialized strategies for various industries including SaaS, Enterprise Software, Real Estate, Pharma, and Franchise Businesses.",
        "areaServed": {
          "@type": "Country",
          "name": "Australia",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Industry-Specific Marketing Solutions",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SaaS Marketing Strategy",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pharmaceutical Marketing Compliance",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Real Estate Lead Generation",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is an industry-specific approach better than a generalist agency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A generalist agency applies a one-size-fits-all approach, which fails to address the unique sales cycles, compliance needs, and high-value pain points of your specific industry. Our specialized industry marketing agency approach ensures every campaign is optimized for your sector's highest-value conversions.",
            },
          },
          {
            "@type": "Question",
            "name": "How do you ensure your team understands my highly specialized industry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our process begins with deep immersion, including pain-point research on industry-specific forums and a conversion-first keyword analysis that uncovers the language of your most valuable buyers. We pair this with a proven methodology to deliver expert-level results.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you only work with the industries listed above?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The industries listed are our current specializations. If you don't see your industry, we will apply our proven Conversion-First Methodology to conduct a deep-dive audit and develop a custom, specialized strategy for your market.",
            },
          },
          {
            "@type": "Question",
            "name": "How does your strategy change for B2B vs. B2C industries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For B2B (e.g., Enterprise Software, CRE), we focus on SQLs, ABM, and Pipeline Velocity. For B2C (e.g., Luxury Real Estate, Cosmetic Dentists), we focus on Qualified Buyer Inquiries, Brand Authority, and High-Value Procedure Lead Generation. The core methodology adapts to the audience and sales cycle.",
            },
          },
          {
            "@type": "Question",
            "name": "How do you handle regulatory compliance for industries like Pharma?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For highly regulated industries, we implement a compliance-first workflow with mandatory internal review steps. Our strategies focus on unbranded, educational content and compliant targeting (e.g., Regulatory Compliant Pharma SEO), minimizing risk while maximizing authority.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the typical timeline for seeing results with your specialized approach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PPC and Meta Ads campaigns can generate high-intent leads within weeks. Specialized SEO for domain authority and complex keywords typically shows significant organic growth within 9-18 months. We focus on a blended strategy for both immediate and long-term ROI.",
            },
          },
          {
            "@type": "Question",
            "name": "How do you measure success?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We measure success based on the metrics that drive your business: Sales Qualified Leads (SQLs), Deal Value, Customer Lifetime Value (CLV), and Pipeline Velocity. We integrate directly with your CRM to provide transparent, revenue-focused reporting.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you offer a performance guarantee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer the best guarantee in the industry: No Lock-In Contracts. Our 95% client retention rate is a testament to our performance. We put the risk on us, not you.",
            },
          },
          {
            "@type": "Question",
            "name": "How do you manage brand consistency across multiple digital channels?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our integrated strategy ensures that all four core services (SEO, PPC, Meta Ads, Web Design) work together, using consistent messaging, pain points, and conversion goals, all tailored to your specific industry.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you help us with both customer acquisition and talent/franchisee recruitment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. For industries like Franchises, we run dual campaigns focused on both customer sales and franchisee lead generation. For Enterprise Software, we can assist with talent acquisition by leveraging our authority-building content.",
            },
          },
        ],
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Organization",
          "name": "Odin Digital",
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "name": "Industry-Specific Marketing Success",
        "author": {
          "@type": "Person",
          "name": "A Marketing Director",
        },
        "reviewBody":
          "Odin Digital's specialized approach is a game-changer. They didn't just run a generic campaign; they understood the unique pain points of our industry and delivered a strategy that focused purely on high-value conversions. The results speak for themselves.",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency for All Industries | Specialized Solutions | Odin Digital</title>
        <meta
          name="description"
          content="Stop settling for generic marketing. Odin Digital is the specialized digital marketing agency for all industries, with tailored strategies for SaaS, Pharma, Real Estate, and more."
        />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-white via-muted/30 to-muted/20">
          {/* Enhanced Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large animated blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-muted/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-muted/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-2000" />
            <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-muted/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-4000" />
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-muted/25 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float animation-delay-3000" />
            
            {/* Medium floating particles */}
            <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-primary/5 rounded-full animate-float animation-delay-1000" />
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent/5 rounded-full animate-float animation-delay-3000" />
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-muted/15 rounded-full animate-float animation-delay-2000" />
            
            {/* Floating circles with borders */}
            <div className="absolute top-20 left-1/4 w-64 h-64 border border-primary/10 rounded-full animate-float" />
            <div className="absolute bottom-20 right-1/3 w-80 h-80 border border-accent/10 rounded-full animate-float animation-delay-2000" />
            <div className="absolute top-1/3 right-1/4 w-48 h-48 border-2 border-primary/20 rounded-full animate-float animation-delay-1000" />
            <div className="absolute bottom-1/4 left-1/3 w-56 h-56 border border-accent/15 rounded-full animate-float animation-delay-3000" />
            
            {/* Small decorative circles */}
            <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-primary/20 rounded-full animate-pulse" />
            <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-accent/20 rounded-full animate-pulse animation-delay-1000" />
            <div className="absolute top-2/3 right-1/4 w-20 h-20 bg-primary/15 rounded-full animate-pulse animation-delay-2000" />
            
            {/* Geometric shapes */}
            <div className="absolute top-1/3 left-1/4 w-32 h-32 border-l-2 border-t-2 border-primary/10 rotate-45 animate-float" />
            <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border-r-2 border-b-2 border-accent/10 -rotate-12 animate-float animation-delay-2000" />
            <div className="absolute top-1/2 right-1/2 w-40 h-40 border-2 border-muted/20 rotate-12 animate-float animation-delay-1000" />
            
            {/* Decorative gradient lines */}
            <div className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute bottom-1/3 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-accent/20 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-charcoal">
                Digital Marketing Agency for All Industries
              </h1>
              <p className="hero-sub-headline text-xl md:text-2xl lg:text-3xl mb-8 text-charcoal/90 font-semibold">
                Stop Settling for Generic Marketing. Start Working with Industry Specialists.
              </p>
              <p className="text-lg md:text-xl mb-8 text-charcoal/70 max-w-3xl mx-auto">
                In today's competitive landscape, generic marketing is a recipe for failure. Whether you're a high-growth SaaS company, a multi-location franchise, or a highly regulated pharmaceutical firm, your industry has unique challenges, compliance requirements, and sales cycles that a generalist agency simply cannot understand.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#D91C5C] to-[#8B1538] hover:from-[#8B1538] hover:to-[#5C0E25] text-white shadow-lg hover:shadow-xl transition-all duration-300 whitespace-normal break-words py-3 px-6"
              >
                <Link to="/contact">
                  Find Your Industry Solution: Request a Free Audit <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Industry Pain Points Grid */}
        <section className="relative py-12 md:py-20 bg-gradient-to-br from-muted/30 via-white to-muted/20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-72 h-72 bg-muted/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-muted/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-2000" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">
                The Universal Pain of Generic Agencies
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "The Generic Playbook Trap",
                  description: "They treat your complex B2B enterprise software like a simple B2C e-commerce store, ignoring the long sales cycle and the need for Sales Qualified Leads (SQLs).",
                },
                {
                  title: "Compliance Blindness",
                  description: "They don't understand the regulatory minefield of your industry (e.g., Pharma, Finance), exposing your brand to unnecessary risk and fines.",
                },
                {
                  title: "Low-Quality Lead Flood",
                  description: "They optimize for the cheapest click, not the most valuable customer, leaving your sales team drowning in unqualified inquiries.",
                },
                {
                  title: "Lack of Domain Authority",
                  description: "They can't speak the language of your industry, failing to create the authoritative, data-driven content that builds trust with sophisticated buyers.",
                },
                {
                  title: "Fragmented Strategy",
                  description: "They run uncoordinated campaigns across different channels, leading to inconsistent messaging and a confusing customer journey.",
                },
                {
                  title: "Vanity Metrics Over ROI",
                  description: "They report on clicks and impressions, but fail to deliver measurable revenue growth and qualified leads.",
                },
              ].map((pain, index) => (
                <Card key={index} className="border-muted/40 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-charcoal">{pain.title}</h3>
                    <p className="text-charcoal/70">{pain.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="relative py-12 md:py-20 bg-white">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full animate-float" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full animate-float animation-delay-2000" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-charcoal">
                Our Industry-Specific Approach: Precision Over Volume
              </h2>
              <p className="text-lg text-charcoal/70 mb-8 text-center">
                We believe that the most effective marketing is the most specialized marketing. Our process starts with deep immersion into your industry's specific challenges and opportunities.
              </p>

              <div className="space-y-6">
                <Card className="border-muted/40">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-charcoal">1. Deep Pain-Point Research</h3>
                    <p className="text-charcoal/70">
                      We don't guess. We research the real frustrations of your customers and competitors on platforms like Reddit and Quora. This allows us to craft pain-point-driven H2 headings and copy that immediately resonates with your ideal client.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-muted/40">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-charcoal">2. Conversion-First Keyword Strategy</h3>
                    <p className="text-charcoal/70">
                      We prioritize high-intent, high-conversion keywords over high-volume vanity keywords. Our proprietary formula: (Intent Score × 2) - Competition Score ensures every dollar is spent attracting a buyer ready to convert.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-muted/40">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-charcoal">3. Integrated, Specialist Services</h3>
                    <p className="text-charcoal/70 mb-4">
                      We provide a full suite of services, but each is executed with an industry-specific lens:
                    </p>
                    <ul className="space-y-2 text-charcoal/70">
                      <li><strong>SEO:</strong> Industry-specific domain authority and long-tail keywords</li>
                      <li><strong>PPC:</strong> Precision targeting and high-value lead filtering</li>
                      <li><strong>Meta Ads:</strong> Thought leadership and sophisticated retargeting</li>
                      <li><strong>Web Design:</strong> Conversion-optimized for your industry's needs</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Find Your Industry Solution - Table */}
        <section className="relative py-12 md:py-20 bg-gradient-to-br from-muted/20 via-white to-muted/30">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-muted/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-muted/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-2000" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">
                  Find Your Industry Solution
                </h2>
                <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                  Select your industry below to see the exact, tailored strategy we use to drive high-value conversions for businesses like yours.
                </p>
              </div>

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
                  <thead className="bg-gradient-to-r from-[#D91C5C] to-[#8B1538] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Industry</th>
                      <th className="px-6 py-4 text-left font-semibold">Core Pain Point Addressed</th>
                      <th className="px-6 py-4 text-left font-semibold">Key Service Focus</th>
                      <th className="px-6 py-4 text-left font-semibold">Link to Strategy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {industries.map((industry, index) => (
                      <tr
                        key={index}
                        className={`border-b border-muted/30 hover:bg-muted/10 transition-colors ${
                          index % 2 === 0 ? "bg-white" : "bg-muted/5"
                        }`}
                      >
                        <td className="px-6 py-4 font-medium text-charcoal">{industry.name}</td>
                        <td className="px-6 py-4 text-charcoal/70">{industry.painPoint}</td>
                        <td className="px-6 py-4 text-charcoal/70">{industry.focus}</td>
                        <td className="px-6 py-4">
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="whitespace-normal break-words"
                          >
                            <Link to={industry.link}>
                              View Strategy <ArrowRight className="ml-2 h-4 w-4 inline" />
                            </Link>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden grid gap-6">
                {industries.map((industry, index) => {
                  const Icon = industry.icon;
                  return (
                    <Card key={index} className="border-muted/40 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-gradient-to-r from-[#D91C5C] to-[#8B1538] rounded-lg">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-charcoal mb-2">{industry.name}</h3>
                          </div>
                        </div>
                        <div className="space-y-3 mb-4">
                          <div>
                            <p className="text-sm font-semibold text-charcoal/80 mb-1">Core Pain Point:</p>
                            <p className="text-charcoal/70">{industry.painPoint}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-charcoal/80 mb-1">Key Service Focus:</p>
                            <p className="text-charcoal/70">{industry.focus}</p>
                          </div>
                        </div>
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-[#D91C5C] to-[#8B1538] hover:from-[#8B1538] hover:to-[#5C0E25] text-white whitespace-normal break-words py-3"
                        >
                          <Link to={industry.link}>
                            View {industry.name} Strategy <ArrowRight className="ml-2 h-4 w-4 inline" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="text-center mt-8">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="whitespace-normal break-words py-3 px-6"
                >
                  <Link to="/contact">
                    Don't See Your Industry? Talk to a Specialist About a Custom Strategy <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Odin Digital */}
        <section className="relative py-12 md:py-20 bg-white">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full animate-float" />
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent/5 rounded-full animate-float animation-delay-2000" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-charcoal">
                Why Choose Odin Digital as Your Industry-Specific Partner?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Proven Methodology, Tailored Execution",
                    description: "Our core methodology—Conversion-First Keyword Research, Pain-Point-Driven Copy, and Integrated Reporting—is consistent. However, the execution is entirely tailored. We know the difference between a PQL and an SQL, the importance of TGA compliance, and the value of a high-net-worth lead.",
                  },
                  {
                    title: "Focus on Measurable ROI and Deal Flow",
                    description: "We eliminate vanity metrics. Our reports focus on the numbers that matter to your business: Sales Qualified Leads (SQLs), Pipeline Value, Customer Lifetime Value (CLV), and Deal Velocity.",
                  },
                  {
                    title: "Human-Written, Authority-Building Content",
                    description: "All our copy is human-written, direct-response focused, and designed to pass the highest standards of authority and trust. We build content that not only ranks but converts.",
                  },
                  {
                    title: "No Lock-In Contracts",
                    description: "Our 95% client retention rate is earned, not enforced. We offer month-to-month service because we are confident in our ability to deliver the specialized growth your industry demands.",
                  },
                ].map((item, index) => (
                  <Card key={index} className="border-muted/40 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-charcoal">{item.title}</h3>
                      <p className="text-charcoal/70">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#D91C5C] to-[#8B1538] hover:from-[#8B1538] hover:to-[#5C0E25] text-white shadow-lg hover:shadow-xl transition-all duration-300 whitespace-normal break-words py-3 px-6"
                >
                  <Link to="/contact">
                    Ready for a Specialized Strategy? Schedule Your Free Audit <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="relative py-12 md:py-20 bg-gradient-to-br from-muted/20 via-white to-muted/30">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-muted/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-muted/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-2000" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-charcoal">
                FAQs: Your Questions About Industry-Specific Marketing Answered
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Why is an industry-specific approach better than a generalist agency?",
                    answer: "A generalist agency applies a one-size-fits-all approach, which fails to address the unique sales cycles, compliance needs, and high-value pain points of your specific industry. Our specialized industry marketing agency approach ensures every campaign is optimized for your sector's highest-value conversions.",
                  },
                  {
                    question: "How do you ensure your team understands my highly specialized industry?",
                    answer: "Our process begins with deep immersion, including pain-point research on industry-specific forums and a conversion-first keyword analysis that uncovers the language of your most valuable buyers. We pair this with a proven methodology to deliver expert-level results.",
                  },
                  {
                    question: "Do you only work with the industries listed above?",
                    answer: "No. The industries listed are our current specializations. If you don't see your industry, we will apply our proven Conversion-First Methodology to conduct a deep-dive audit and develop a custom, specialized strategy for your market.",
                  },
                  {
                    question: "How does your strategy change for B2B vs. B2C industries?",
                    answer: "For B2B (e.g., Enterprise Software, CRE), we focus on SQLs, ABM, and Pipeline Velocity. For B2C (e.g., Luxury Real Estate, Cosmetic Dentists), we focus on Qualified Buyer Inquiries, Brand Authority, and High-Value Procedure Lead Generation. The core methodology adapts to the audience and sales cycle.",
                  },
                  {
                    question: "How do you handle regulatory compliance for industries like Pharma?",
                    answer: "For highly regulated industries, we implement a compliance-first workflow with mandatory internal review steps. Our strategies focus on unbranded, educational content and compliant targeting (e.g., Regulatory Compliant Pharma SEO), minimizing risk while maximizing authority.",
                  },
                  {
                    question: "What is the typical timeline for seeing results with your specialized approach?",
                    answer: "PPC and Meta Ads campaigns can generate high-intent leads within weeks. Specialized SEO for domain authority and complex keywords typically shows significant organic growth within 9-18 months. We focus on a blended strategy for both immediate and long-term ROI.",
                  },
                  {
                    question: "How do you measure success?",
                    answer: "We measure success based on the metrics that drive your business: Sales Qualified Leads (SQLs), Deal Value, Customer Lifetime Value (CLV), and Pipeline Velocity. We integrate directly with your CRM to provide transparent, revenue-focused reporting.",
                  },
                  {
                    question: "Do you offer a performance guarantee?",
                    answer: "We offer the best guarantee in the industry: No Lock-In Contracts. Our 95% client retention rate is a testament to our performance. We put the risk on us, not you.",
                  },
                  {
                    question: "How do you manage brand consistency across multiple digital channels?",
                    answer: "Our integrated strategy ensures that all four core services (SEO, PPC, Meta Ads, Web Design) work together, using consistent messaging, pain points, and conversion goals, all tailored to your specific industry.",
                  },
                  {
                    question: "Can you help us with both customer acquisition and talent/franchisee recruitment?",
                    answer: "Yes. For industries like Franchises, we run dual campaigns focused on both customer sales and franchisee lead generation. For Enterprise Software, we can assist with talent acquisition by leveraging our authority-building content.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-muted/40 rounded-lg px-6">
                    <AccordionTrigger className="text-left text-charcoal hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-charcoal/70">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-12 md:py-20 bg-gradient-to-r from-[#D91C5C] to-[#8B1538] text-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float animation-delay-2000" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Stop Settling for Generic and Start Dominating Your Market?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Stop letting a lack of specialization hold back your growth. Start working with the digital marketing agency for all industries that has the specialized knowledge to make you the authority in yours.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-[#D91C5C] hover:bg-white/90 hover:text-[#8B1538] border-white shadow-lg hover:shadow-xl transition-all duration-300 whitespace-normal break-words py-3 px-6"
              >
                <Link to="/contact">
                  Schedule Your Free Industry-Specific Strategy Session <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Industries;
