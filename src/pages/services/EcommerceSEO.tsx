import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, ShoppingCart, TrendingUp, Search, Zap, Shield, Target, CheckCircle2, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ROICalculator } from "@/components/ROICalculator";
import { seoPackageComparison } from "@/utils/comparisonTables";

const EcommerceSEO = () => {
  const navigate = useNavigate();
  const [, setMobileCtaVisible] = useState(false);

  const handleCTAClick = () => {
    navigate("/contact");
  };

  const metrics = [
    { value: "$574M+", label: "in Verified Client Revenue" },
    { value: "540%", label: "Average ROI on Ad Spend" },
    { value: "95%", label: "Client Retention Rate" },
    { value: "283+", label: "Successful Campaigns Delivered" }
  ];

  const problems = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Driving Traffic to the Wrong Pages",
      description: "Most agencies focus on informational keywords that bring tire-kickers, not buyers. We focus exclusively on transactional keywords that drive revenue."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Technical Errors Killing Your Rankings",
      description: "Duplicate content, poor site architecture, and slow page speed are silently destroying your organic potential. Generic agencies miss these critical issues."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Traffic Without Conversions",
      description: "Your SEO agency celebrates traffic increases while your conversion rate stays flat. We optimize for revenue, not vanity metrics."
    }
  ];

  const services = [
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Technical E-commerce SEO Audits",
      description: "We conduct deep technical audits specifically for online stores, identifying crawling issues, duplicate content, and structural problems that are bleeding your rankings.",
      cta: "Get Your Technical Audit Checklist"
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Transactional Keyword Strategy & Content",
      description: "We target high-intent, transactional keywords that bring customers ready to buy, not browse. Our content strategy focuses on conversion-optimized product and category pages.",
      cta: "See Our Keyword Strategy"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Conversion Rate Optimization (CRO) Integration",
      description: "We don't just drive traffic—we optimize your entire funnel to convert that traffic into sales. CRO is built into every aspect of our SEO strategy.",
      cta: "Start Converting More Sales"
    }
  ];

  const differentiators = [
    {
      icon: <ShoppingCart className="w-10 h-10 text-primary" />,
      title: "E-commerce Specialists, Not Generalists",
      description: "We exclusively focus on online stores. We understand the unique technical challenges, from massive product catalogs to complex filtering systems."
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Revenue is Our North Star",
      description: "We report on sales and revenue generated from organic search, not just rankings. Our success is measured by your bottom line."
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "No Lock-In Contracts",
      description: "We earn your business every month by delivering results. Our 95% retention rate proves our model works."
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
      title: "Platform Expertise",
      description: "Whether you're on Shopify, WooCommerce, Magento, or BigCommerce, we know the SEO quirks and opportunities of your platform."
    }
  ];

  const process = [
    {
      number: "1",
      title: "Technical Foundation & Audit",
      description: "We start with a comprehensive technical audit, identifying and fixing all critical issues that are preventing your store from ranking."
    },
    {
      number: "2",
      title: "Transactional Keyword Strategy",
      description: "We build a keyword strategy focused exclusively on high-intent, revenue-generating terms that align with your product catalog."
    },
    {
      number: "3",
      title: "Content & On-Page Optimization",
      description: "We optimize your product pages, category pages, and create conversion-focused content that ranks and sells."
    },
    {
      number: "4",
      title: "Authority Building & CRO",
      description: "We build authoritative links to your store while continuously optimizing for conversion rate to maximize ROI from organic traffic."
    }
  ];

  const whyChooseUs = [
    {
      title: "We Understand E-commerce Economics",
      description: "We know your margins, your CAC, and your LTV. We build SEO strategies that make financial sense for your business model."
    },
    {
      title: "Proven Track Record",
      description: "We've generated over $574M in client revenue. Our e-commerce clients see an average revenue increase of 292% within 18 months."
    },
    {
      title: "Integrated Strategy",
      description: "We integrate SEO with your PPC and Meta Ad campaigns to create a cohesive, high-performing digital marketing ecosystem."
    },
    {
      title: "Transparent Reporting",
      description: "You'll receive monthly reports showing exactly how much revenue your organic channel is generating, with full transparency on our activities."
    }
  ];

  const faqs = [
    {
      question: "What makes Odin Digital the best E-commerce SEO Agency?",
      answer: "We are revenue-obsessed. Our specialization in e-commerce means we understand the unique technical and content challenges of online stores. We don't just optimize for Google; we optimize for your checkout page. Our focus on transactional keywords, structured data, and CRO integration ensures that the traffic we drive is highly qualified and converts at a higher rate. With a proven track record of increasing e-commerce revenue by over 292% for clients, we deliver performance without the risk of lock-in contracts."
    },
    {
      question: "How is E-commerce SEO different from regular SEO?",
      answer: "E-commerce SEO is far more complex. Regular SEO focuses on a few dozen pages; e-commerce involves thousands of product and category pages, leading to massive technical challenges like crawling, indexing, and duplicate content. It requires deep expertise in structured data (Product, Review, Offer schema) and a laser focus on transactional keywords. A generalist agency will likely break your site; we specialize in the technical and content nuances required to succeed in this highly competitive space."
    },
    {
      question: "How much do your E-commerce SEO services cost?",
      answer: "The cost of E-commerce SEO services varies widely based on the size of your product catalog, your platform's complexity, and the competitiveness of your niche. Since this is a highly specialized service, it typically ranges from $2,500 to $8,000+ per month. We are transparent about our pricing and will provide a custom proposal after a comprehensive audit. Our goal is to ensure our service is an investment that generates a significant positive ROI, not a cost that drains your profit margins."
    },
    {
      question: "Do you work with specific E-commerce platforms (Shopify, Magento, etc.)?",
      answer: "Yes, we are platform-agnostic but platform-expert. We have deep experience working with all major platforms, including Shopify, Shopify Plus, WooCommerce, Magento, BigCommerce, and custom-built solutions. Each platform has its own set of SEO quirks and limitations, and our technical team knows exactly how to navigate and overcome them. We turn your platform's limitations into a competitive advantage through specialized technical implementation and optimization."
    },
    {
      question: "How long does it take to see results from E-commerce SEO?",
      answer: "You can expect to see initial improvements in technical health and keyword rankings within 3-6 months. However, significant, revenue-impacting results—such as a substantial increase in organic transactions and a higher conversion rate—typically take 6-12 months. E-commerce SEO is a long-term investment that builds compounding returns. We focus on sustainable, white-hat strategies that protect your store from penalties and ensure long-term, profitable growth."
    },
    {
      question: "What are the biggest technical issues you fix for online stores?",
      answer: "The most common and damaging technical issues we fix include crawling and indexing errors caused by massive site size, poor internal linking structures, slow page speed (especially on product pages), incorrect implementation of structured data (which prevents rich snippets), and fixing duplicate content issues across product variants and filter pages. Addressing these technical foundations is the first critical step to unlocking your store's organic potential."
    },
    {
      question: "How do you handle duplicate content on product pages?",
      answer: "Duplicate content is the bane of E-commerce SEO. We tackle this by implementing canonical tags correctly, ensuring product variants are handled properly, and, most importantly, by creating unique, high-quality, conversion-focused descriptions for your key products and category pages. We also advise on which filter pages should be indexed and which should be blocked to conserve crawl budget and focus authority on your money pages."
    },
    {
      question: "What is the role of structured data in E-commerce SEO?",
      answer: "Structured data (or schema markup) is vital for e-commerce. We implement Product schema (for pricing and availability), Review schema (for star ratings), and Offer schema to help your products appear as rich snippets in Google search results. These rich snippets drastically increase your click-through rate (CTR) and help Google understand your product offerings, giving you a massive advantage over competitors who ignore this crucial technical detail."
    },
    {
      question: "Do you offer E-commerce SEO management services?",
      answer: "Yes, our E-commerce SEO management is a comprehensive, ongoing service. It includes continuous technical monitoring, monthly content strategy and creation, authoritative link building, and regular performance reviews. We act as your outsourced, in-house SEO team, constantly adapting to algorithm updates and market changes to ensure your organic channel is always performing at its peak. Our month-to-month contracts ensure we are always accountable for the quality of our management."
    },
    {
      question: "How do you ensure your SEO efforts lead to a higher conversion rate?",
      answer: "We integrate CRO into every step of our SEO process. We don't just drive traffic; we analyze the behavior of that traffic once it lands. We optimize page layouts, CTA placement, site speed, and mobile experience to reduce friction and increase the likelihood of a purchase. Our reporting focuses on conversion rate and revenue, not just rankings, ensuring our goals are perfectly aligned with your business's financial success."
    },
    {
      question: "Can you help my online store compete with Amazon or eBay?",
      answer: "Yes, but the strategy is different. You can't beat them on volume, but you can beat them on niche and authority. We focus on long-tail, highly specific keywords that Amazon and eBay often ignore. We build brand authority through high-quality content and link building, and we leverage your unique value proposition (e.g., local sourcing, specialized knowledge) to connect with customers seeking an alternative to the marketplaces."
    },
    {
      question: "Do you require lock-in contracts for E-commerce SEO?",
      answer: "No, we don't. We are so confident in our ability to deliver measurable, profitable results that we don't need to lock our clients into long-term contracts. We work on a month-to-month basis, which keeps us accountable and ensures we are constantly striving to earn your business. Our 95% client retention rate is the best proof that our performance-first model works for our clients."
    },
    {
      question: "What is the role of AI SEO in E-commerce?",
      answer: "AI is a powerful tool for managing the scale of e-commerce. We use AI SEO to automate the analysis of thousands of product and keyword data points, identify technical errors instantly, and suggest optimization opportunities across your entire catalog. This allows our human strategists to focus on the high-level, creative, and strategic tasks that drive the most revenue, giving you a significant efficiency advantage."
    },
    {
      question: "What kind of results can I expect from your E-commerce SEO services?",
      answer: "You can expect a significant increase in organic traffic that is highly qualified, a measurable increase in your overall conversion rate, and a higher average transaction value. Our goal is to make your organic search channel your most profitable marketing channel. We report on actual sales and revenue generated from organic search, so you will always know the exact ROI of your investment with us."
    },
    {
      question: "Can you integrate SEO with my PPC and Meta Ad campaigns?",
      answer: "Absolutely. As a full-service digital agency, we excel at integrated strategy. We use data from your PPC and Meta Ad campaigns (e.g., high-converting keywords, best-performing product groups) to inform and accelerate your SEO strategy. This synergy ensures that every dollar spent across all channels is maximized, giving you a cohesive and powerful digital presence that is far more effective than siloed marketing efforts."
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://growth-conduit-central.lovable.app/#organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://growth-conduit-central.lovable.app/logo.png",
          "width": 250,
          "height": 60
        },
        "description": "Performance-focused digital marketing agency specializing in PPC, Meta Ads, Web Design, and E-commerce SEO with no lock-in contracts.",
        "founder": {
          "@type": "Person",
          "name": "Lucas Durante"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "5"
        }
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/ecommerce-seo/#service",
        "serviceType": "E-commerce SEO Services",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "description": "Specialized E-commerce SEO services designed to maximize organic revenue for online stores, focusing on technical SEO, transactional keyword strategy, and conversion rate optimization (CRO).",
        "offers": {
          "@type": "Offer",
          "url": "https://growth-conduit-central.lovable.app/contact/"
        }
      },
      {
        "@type": "Review",
        "@id": "https://growth-conduit-central.lovable.app/ecommerce-seo/#review1",
        "itemReviewed": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Fabienne Costa"
        },
        "reviewBody": "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with. They are the only E-commerce SEO Agency that truly understands how to turn organic traffic into significant sales.",
        "publisher": {
          "@type": "Organization",
          "name": "YCL Jewels"
        }
      },
      {
        "@type": "Review",
        "@id": "https://growth-conduit-central.lovable.app/ecommerce-seo/#review2",
        "itemReviewed": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Liam C"
        },
        "reviewBody": "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI. Their E-commerce SEO management is second to none, focusing on profitable keywords that actually move the needle.",
        "publisher": {
          "@type": "Organization",
          "name": "Krush Organics"
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
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>E-commerce SEO Agency | E-commerce SEO Services | Odin Digital</title>
        <meta name="description" content="E-commerce SEO Agency focused on revenue. $574M+ client revenue. Stop driving traffic, start driving sales. No lock-in contracts. Free strategy call." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", path: "/services" },
            { label: "Ecommerce SEO", path: "/services/ecommerce-seo" }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-muted/30 to-muted/20 overflow-hidden">
          {/* Animated background blobs */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          
          {/* Floating circles */}
          <div className="absolute top-32 right-1/4 w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" />
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '1s' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                E-commerce SEO: Stop Driving Traffic. Start Driving Revenue.
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
                Your Online Store Deserves an E-commerce SEO Agency That Focuses on Conversions, Not Just Clicks.
              </h2>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground">
                Most e-commerce SEO agencies are obsessed with increasing your traffic. They celebrate when your sessions go up, even if your revenue stays flat. That's not SEO—that's vanity metrics masquerading as growth.
              </p>
              <p className="text-lg md:text-xl mb-10 text-muted-foreground">
                At Odin Digital, we are an E-commerce SEO Agency built differently. We don't care about driving traffic to your blog. We care about driving revenue to your bank account. Every keyword we target, every page we optimize, and every link we build is designed with one goal: to increase your online sales.
              </p>
              <Button onClick={handleCTAClick} size="xl" variant="cta" className="group w-full md:w-auto text-sm md:text-lg px-6 md:px-12">
                <span className="hidden sm:inline">Get Your FREE E-commerce SEO Strategy</span>
                <span className="sm:hidden">Get FREE SEO Strategy</span>
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Your Current E-commerce SEO Strategy is Failing
              </h2>
              <p className="text-lg text-muted-foreground">
                If your online store isn't dominating organic search, it's because your current approach is fundamentally broken.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {problems.map((problem, index) => (
                <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">{problem.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Real Results from Real E-commerce Businesses
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">
                  "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with. They are the only E-commerce SEO Agency that truly understands how to turn organic traffic into significant sales."
                </p>
                <div className="font-semibold">Fabienne Costa</div>
                <div className="text-sm text-muted-foreground">YCL Jewels</div>
              </Card>
              <Card className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI. Their E-commerce SEO management is second to none, focusing on profitable keywords that actually move the needle."
                </p>
                <div className="font-semibold">Liam C</div>
                <div className="text-sm text-muted-foreground">Krush Organics</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our E-commerce SEO Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive solutions designed to maximize your online store's organic revenue.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-glow transition-all duration-300">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button onClick={handleCTAClick} variant="outline" className="w-full group text-xs sm:text-sm">
                    <span className="truncate">{service.cta}</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Odin Digital is the Only E-commerce SEO Partner You Need
              </h2>
              <p className="text-lg text-muted-foreground">
                We're not just another agency. We're your dedicated growth partners.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {differentiators.map((diff, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{diff.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{diff.title}</h3>
                      <p className="text-muted-foreground">{diff.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Proven 4-Step Process for E-commerce SEO Success
              </h2>
              <p className="text-lg text-muted-foreground">
                A systematic approach designed to deliver consistent, scalable results.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              {process.map((step, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-lg text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Odin Digital is the Smartest Investment for Your Online Store
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Stop Losing Sales to Technical Errors and Generic SEO?
              </h2>
              <p className="text-xl mb-10 text-white/90">
                Your online store has massive untapped potential. The only question is: are you ready to unlock it? Partner with an E-commerce SEO Agency that is obsessed with your revenue, not our ego. No lock-in contracts. Just results.
              </p>
              <Button onClick={handleCTAClick} size="xl" className="bg-white text-primary hover:bg-white/90 group w-full md:w-auto text-sm md:text-lg px-6 md:px-12">
                <span className="hidden sm:inline">Get Your FREE E-commerce SEO Strategy</span>
                <span className="sm:hidden">Get FREE SEO Strategy</span>
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                Get answers to common questions about our E-commerce SEO services.
              </p>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-charcoal">
                Compare Our E-commerce SEO Packages
              </h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                Choose the e-commerce SEO package that drives maximum organic revenue for your online store.
              </p>
            </div>
            <ComparisonTable
              title={seoPackageComparison.title}
              description={seoPackageComparison.description}
              rows={seoPackageComparison.rows}
            />
            <div className="text-center mt-12">
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="bg-gradient-primary text-white shadow-primary hover:shadow-glow transition-all whitespace-normal break-words py-3 px-6"
              >
                Schedule Free E-commerce SEO Consultation →
              </Button>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <ROICalculator />

        <Footer />

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t md:hidden z-50">
          <Button onClick={handleCTAClick} size="lg" variant="cta" className="w-full group">
            Get FREE Strategy
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default EcommerceSEO;
