import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { ArrowRight, Target, TrendingUp, Users, DollarSign, CheckCircle2, AlertCircle, Zap, Shield, Award, BarChart3, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

const OnlineMarketingCompanyLaunceston = () => {
  const { openForm } = useMarketingForm();

  const painPoints = [
    {
      icon: AlertCircle,
      title: "The \"Small Pond\" Problem",
      description: "You've saturated the local Launceston market. Your customer acquisition costs are rising, and your competitors are fighting over the same small pool of customers. You need national reach to scale, but don't know how to cost-effectively acquire customers across Australia."
    },
    {
      icon: DollarSign,
      title: "The \"Tassie Tax\" on Profitability",
      description: "Higher freight costs and operating expenses erode your margins. You can't compete on price alone against mainland businesses, so you need to attract high-margin customers who value quality and expertise—but your current marketing attracts price-shoppers, not premium buyers."
    },
    {
      icon: Target,
      title: "Disconnected Marketing Efforts",
      description: "You're running SEO with one provider, Google Ads with another, and trying to manage Facebook yourself. Nothing works together. You're wasting budget on duplicate efforts, and missing the compounding effect of an integrated system."
    }
  ];

  const services = [
    {
      icon: BarChart3,
      title: "Local SEO & Content Strategy",
      description: "Build national authority and long-term organic traffic with SEO strategies that position you as the premium choice, not the cheapest option.",
      link: "/seo-launceston"
    },
    {
      icon: Target,
      title: "Precision-Targeted PPC & Meta Ads",
      description: "Launch high-ROI campaigns that find your ideal customers across Australia and convert them with messaging that overcomes the \"mainland vs. Tassie\" objection.",
      link: "/google-ads-launceston"
    },
    {
      icon: Zap,
      title: "Conversion-Focused Web Design",
      description: "Create high-converting websites that justify premium pricing, build trust with mainland customers, and turn visitors into high-margin sales.",
      link: "/web-design-launceston"
    },
    {
      icon: TrendingUp,
      title: "Strategic CRO & Analytics",
      description: "Relentlessly optimize every step of your funnel to lower your CPA and maximize profit per customer—essential for overcoming the \"Tassie Tax.\"",
      link: "/contact"
    }
  ];

  const differentiators = [
    {
      icon: Zap,
      title: "We Build Integrated Systems, Not Siloed Tactics",
      description: "Your SEO informs your PPC strategy. Your PPC data optimizes your Facebook Ads. Your website is designed to convert all traffic sources. Everything works together to lower your CPA and maximize ROI."
    },
    {
      icon: Shield,
      title: "Mainland-Caliber Expertise, Local Focus",
      description: "We combine world-class digital marketing expertise with a deep understanding of the Tasmanian market and the unique challenges Launceston businesses face when scaling nationally."
    },
    {
      icon: DollarSign,
      title: "Profit-Obsessed, Not Traffic-Obsessed",
      description: "We don't chase vanity metrics. We focus relentlessly on Cost Per Acquisition (CPA), Customer Lifetime Value (CLV), and Return on Ad Spend (ROAS)—the metrics that actually grow your profit."
    },
    {
      icon: Award,
      title: "No Lock-In Contracts, Just Results",
      description: "We don't trap you with 12-month contracts. Our clients stay because we deliver measurable, profitable results month after month. If we're not performing, you can leave anytime."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Comprehensive Launceston Market & Competitor Deep Dive",
      description: "We audit your current marketing, analyze your local and national competitors, identify your highest-margin customer segments, and map out the exact integrated strategy to achieve predictable national growth."
    },
    {
      number: "02",
      title: "Foundation Build & Optimization",
      description: "We optimize your website for conversions, set up proper tracking and analytics, build your baseline SEO authority, and create the infrastructure for a high-performing integrated system."
    },
    {
      number: "03",
      title: "Launch the Integrated Growth Engine",
      description: "We launch coordinated campaigns across SEO, Google Ads, and Meta Ads—each channel feeding data and insights to the others, creating a compounding effect that systematically lowers your CPA while scaling your reach."
    },
    {
      number: "04",
      title: "Continuous Optimization & Scaling",
      description: "We obsessively test, refine, and scale your campaigns. We double down on what's working, ruthlessly cut what's not, and continuously feed performance insights across all channels to maximize your ROI and profit margins."
    }
  ];

  const faqs = [
    {
      question: "Why is an integrated online marketing strategy essential for Launceston businesses?",
      answer: "Because of the \"Small Pond\" problem. An integrated strategy allows you to use SEO for long-term authority, PPC for immediate leads, and Meta Ads for national reach, creating a cohesive system that breaks through local market limitations and overcomes the \"Tassie Tax\" on profitability."
    },
    {
      question: "How does your integrated approach lower my Cost Per Acquisition (CPA)?",
      answer: "By making each channel more efficient. For example, we use profitable keywords from your Google Ads to inform your SEO content strategy, and we use website visitors from SEO to create highly targeted, low-cost remarketing audiences on Facebook. This creates a compounding effect that systematically drives down your CPA over time."
    },
    {
      question: "What is the \"Tassie Tax\" and how does your marketing strategy address it?",
      answer: "The \"Tassie Tax\" refers to the higher operating costs (like freight) faced by Tasmanian businesses. We address this by relentlessly focusing on Conversion Rate Optimisation (CRO) and attracting high-margin customers who value quality over price, ensuring your profit per customer is high enough to absorb the extra costs and remain highly profitable."
    },
    {
      question: "How do you help Launceston businesses attract mainland customers?",
      answer: "We use geo-targeted campaigns to reach high-intent customers across Australia, create messaging that builds trust and overcomes the \"Tassie\" objection, and design high-converting landing pages that position you as a premium national provider, not just a local option. We also use retargeting and nurture sequences to move prospects from awareness to purchase."
    },
    {
      question: "What marketing budget do Launceston businesses typically need to see results?",
      answer: "For a meaningful integrated strategy, we recommend a minimum of $3,000-$5,000/month in ad spend across Google Ads and Meta Ads, plus our management fee. Businesses investing $8,000-$15,000/month typically see the best ROI and fastest scaling. We'll provide a specific recommendation based on your industry, goals, and competitive landscape during your strategy session."
    },
    {
      question: "Why should I choose your agency over a local Launceston marketing company?",
      answer: "We combine mainland-caliber expertise with local market understanding. We've managed over $50M in ad spend across Australia and delivered $574M+ in verified client revenue. Most local agencies lack the scale, specialization, and integrated approach required to cost-effectively scale Launceston businesses nationally. We also offer full transparency, senior-level strategist management, and no lock-in contracts."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No. We don't believe in locking clients into 12-month contracts. We work on a month-to-month basis because we're confident in our ability to deliver measurable, profitable results. Our 95% client retention rate speaks for itself—our clients stay because we perform, not because they're contractually obligated."
    },
    {
      question: "Can you help if my website needs a redesign before we start marketing?",
      answer: "Absolutely. In fact, we often recommend a conversion-focused website redesign as part of the integrated strategy. A high-converting website is essential for lowering your CPA and maximizing ROI. We offer professional web design services specifically for Launceston businesses targeting national growth. Visit our <a href=\"/web-design-launceston\" class=\"text-primary hover:underline\">Web Design Launceston</a> page for more information."
    },
    {
      question: "How long does it take to see results from an integrated online marketing strategy?",
      answer: "You'll typically see initial results from PPC and Meta Ads within 2-4 weeks as we gather data and optimize campaigns. SEO takes longer—expect meaningful organic traffic growth in 3-6 months. The integrated system delivers compounding results, with the best ROI typically seen 6-12 months in as all channels mature and feed insights to each other."
    },
    {
      question: "Do you specialize in certain industries in Launceston?",
      answer: "We work with ambitious Launceston businesses across all industries—manufacturing, professional services, e-commerce, tourism, healthcare, education, and more. Our integrated approach is industry-agnostic, but we tailor the specific tactics and messaging to your unique market, competitive landscape, and customer segments."
    },
    {
      question: "How do you measure success? What metrics do you focus on?",
      answer: "We focus on profit-driving metrics, not vanity metrics. Specifically: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Customer Lifetime Value (CLV), and overall revenue and profit growth. We provide full transparency with monthly reports showing exactly how your marketing investment is performing against these KPIs."
    },
    {
      question: "Can you create Launceston and Tasmania-focused content and campaigns?",
      answer: "Yes. While our strategy is designed to help you scale nationally, we absolutely incorporate Launceston-specific and Tasmanian-focused content and campaigns where relevant. This is particularly important for building local authority, leveraging local events, and creating community trust that translates into national credibility."
    },
    {
      question: "What if my marketing budget is limited right now?",
      answer: "We recommend starting with the highest-impact channels first—typically Google Ads for immediate leads and foundational SEO for long-term growth. We can design a phased approach that fits your current budget and scales as you see ROI. During your strategy session, we'll provide a realistic roadmap based on your specific budget and growth goals."
    },
    {
      question: "How does your pricing work?",
      answer: "Our pricing is transparent and performance-aligned. We charge a management fee (typically a percentage of ad spend with a minimum monthly fee) plus your actual ad spend budget. We'll provide a detailed proposal during your strategy session based on your specific goals, industry, and required services. No hidden fees, no surprises."
    },
    {
      question: "How do I get started?",
      answer: "Click the \"Schedule Your FREE Launceston Digital Strategy Session\" button to book a no-obligation consultation. We'll audit your current marketing, discuss your goals and challenges, analyze your competitive landscape, and provide a customized roadmap for predictable national growth. If it's a good fit, we'll outline next steps. If not, you'll still walk away with actionable insights."
    }
  ];

  const testimonials = [
    {
      quote: "We engaged Odin Digital to redesign our website, help with our SEO and run paid ads (both Google and Meta). I am delighted with the results. Lucas and his team are extremely professional, knowledgeable and very easy to work with. I highly recommend Odin Digital.",
      author: "Fabienne Costa",
      company: "YCL Jewels",
      rating: 5
    },
    {
      quote: "We have been working with Odin Digital for a number of months now and couldn't be happier. They have been instrumental in helping us scale our business through SEO and Paid Ads. Highly recommend.",
      author: "Liam C",
      company: "Krush Organics",
      rating: 5
    },
    {
      quote: "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
      author: "Evan Tsaboukos",
      company: "Imperial Wealth",
      rating: 5
    }
  ];

  const jsonLd = {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Odin Digital",
      "url": "https://growth-conduit-central.lovable.app/",
      "logo": "https://growth-conduit-central.lovable.app/logo.png",
      "description": "Performance-focused online marketing company providing integrated digital systems for Launceston businesses seeking national growth.",
      "founder": {
        "@type": "Person",
        "name": "Lucas Durante"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "url": "https://growth-conduit-central.lovable.app/contact"
      },
      "sameAs": [
        "https://www.linkedin.com/company/odin-digital",
        "https://www.facebook.com/odindigital",
        "https://twitter.com/odindigital"
      ]
    },
    webpage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Online Marketing Company Launceston - Integrated Digital Systems",
      "url": "https://growth-conduit-central.lovable.app/online-marketing-company-launceston",
      "inLanguage": "en-AU",
      "description": "Odin Digital is the mainland-caliber online marketing company for Launceston businesses. We build integrated digital systems to drive predictable, national ROI.",
      "about": {
        "@type": "Service",
        "name": "Online Marketing Company Launceston"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://growth-conduit-central.lovable.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Launceston",
            "item": "https://growth-conduit-central.lovable.app/launceston"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Online Marketing Company Launceston"
          }
        ]
      }
    },
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Online Marketing Company",
      "provider": {
        "@type": "Organization",
        "name": "Odin Digital"
      },
      "areaServed": {
        "@type": "City",
        "name": "Launceston"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Online Marketing Services for Launceston",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Launceston"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Google Ads Launceston"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Facebook Ads Launceston"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Design Launceston"
            }
          }
        ]
      }
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/<[^>]*>/g, '')
        }
      }))
    },
    review: {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "Service",
        "name": "Odin Digital - Online Marketing Company Launceston"
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
    }
  };

  return (
    <>
      <Helmet>
        <title>Online Marketing Company Launceston | National Growth | Odin Digital</title>
        <meta name="description" content="Overcome the 'Tassie Tax.' We are the mainland-caliber online marketing company in Launceston building integrated digital systems for predictable, high-margin revenue from across Australia." />
        <meta name="keywords" content="online marketing company launceston, digital marketing launceston, seo launceston, ppc launceston, google ads launceston, facebook ads launceston, web design launceston" />
        <link rel="canonical" href="https://growth-conduit-central.lovable.app/online-marketing-company-launceston" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd.organization)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd.webpage)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd.service)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd.faq)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd.review)}
        </script>
      </Helmet>

      <Header />

      {/* Breadcrumb Navigation */}
      <section className="pt-24 pb-4 bg-background">
        <div className="container mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/launceston" className="hover:text-primary transition-colors">Launceston</Link>
            <span>/</span>
            <span className="text-foreground">Online Marketing Company Launceston</span>
          </nav>
        </div>
      </section>

      {/* Section 1: Hero */}
      <ServiceHero
        h1="Online Marketing Company Launceston"
        subheadline={
          <p className="hero-sub-headline">
            Stop Being Limited by the Bass Strait. We Are the Mainland-Caliber Online Marketing Company That Builds Integrated Digital Systems to Overcome the "Tassie Tax" and Drive Predictable, High-Margin Revenue from Across Australia.
          </p>
        }
      />

      {/* Introduction */}
      <section className="pt-8 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              If you're an ambitious business owner in Launceston, you already know the challenge: the local market is too small to support serious growth, but scaling nationally is expensive and complex. You're tired of being held back by geography and rising costs. You need a proven system to profitably acquire high-margin customers across Australia—not generic mainland strategies that ignore the unique challenges of Tasmanian businesses.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are Odin Digital, and we specialize in building integrated online marketing systems for ambitious Launceston businesses. We combine SEO, Google Ads, Meta Ads, and conversion-focused web design into a cohesive, ROI-obsessed engine that systematically lowers your Cost Per Acquisition (CPA) and drives predictable national revenue—despite the "Tassie Tax."
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Social Proof Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$574M+</div>
              <p className="text-muted-foreground">In Verified Client Revenue</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">540%</div>
              <p className="text-muted-foreground">Average ROI on Ad Spend</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Client Retention Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">283+</div>
              <p className="text-muted-foreground">Successful Campaigns Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Problem-Agitation */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The National Growth Challenge Facing Launceston Businesses
            </h2>
            <p className="text-lg text-muted-foreground">
              You're ambitious. You've built a great business. But these three challenges are holding you back from national scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {painPoints.map((point, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <point.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={openForm} size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Schedule Your FREE Launceston Digital Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from real businesses who chose an integrated approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic flex-grow">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Services (4 Pillars) */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The 4 Pillars of Our Integrated Online Marketing System
            </h2>
            <p className="text-lg text-muted-foreground">
              Each pillar works independently, but together they create a compounding effect that systematically lowers your CPA and scales your national revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <Card className="border-border/50 hover:border-primary transition-all duration-300 h-full">
                  <CardHeader>
                    <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                    <div className="mt-4 flex items-center text-primary text-sm font-medium">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={openForm} size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Schedule Your FREE Launceston Digital Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6: Differentiators */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Launceston Businesses Choose Odin Digital
            </h2>
            <p className="text-lg text-muted-foreground">
              We're not another generic marketing agency. Here's what makes us different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {differentiators.map((item, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <item.icon className="w-10 h-10 text-primary mb-3" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Process */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Proven 4-Step Process
            </h2>
            <p className="text-lg text-muted-foreground">
              How we build your integrated growth engine and drive predictable national revenue.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={openForm} size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Schedule Your FREE Launceston Digital Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 8: Extended Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Why Launceston's Most Ambitious Businesses Choose Odin Digital
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-primary mr-3" />
                  We Understand the Unique Challenges of Scaling from Launceston
                </h3>
                <p className="text-muted-foreground leading-relaxed ml-9">
                  Most mainland agencies have no idea what it's like to run a business in Launceston. They don't understand the "Small Pond" problem, the "Tassie Tax" on freight and logistics, or the difficulty of building trust with mainland customers who are skeptical of Tasmanian providers. We do. We've helped Launceston businesses overcome these exact challenges and scale profitably across Australia. We know how to position you as a premium national provider, not just a "local Tassie business."
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-primary mr-3" />
                  We Build Integrated Systems, Not Disconnected Campaigns
                </h3>
                <p className="text-muted-foreground leading-relaxed ml-9">
                  Most agencies treat SEO, Google Ads, Facebook Ads, and web design as separate services. They run siloed campaigns that don't talk to each other, wasting your budget on duplicate efforts. We build <strong>integrated systems</strong> where every channel feeds data and insights to the others. Your Google Ads data informs your SEO content strategy. Your SEO traffic becomes highly targeted, low-cost Facebook remarketing audiences. Your website is designed to convert traffic from all sources. This integrated approach creates a compounding effect that systematically drives down your CPA and maximizes ROI—essential for overcoming the "Tassie Tax."
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-primary mr-3" />
                  We're Obsessed with Profit, Not Vanity Metrics
                </h3>
                <p className="text-muted-foreground leading-relaxed ml-9">
                  Too many agencies brag about impressions, clicks, and "engagement." These are vanity metrics that don't pay the bills. We focus relentlessly on the metrics that actually drive profit: <strong>Cost Per Acquisition (CPA)</strong>, <strong>Return on Ad Spend (ROAS)</strong>, <strong>Customer Lifetime Value (CLV)</strong>, and <strong>total revenue growth</strong>. Every strategy, every campaign, every optimization is evaluated against one question: "Does this increase profit?" This profit obsession is critical for Launceston businesses facing higher operating costs—you need every marketing dollar to work harder, and we make sure it does.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-primary mr-3" />
                  You Get Senior-Level Strategists, Not Junior Account Managers
                </h3>
                <p className="text-muted-foreground leading-relaxed ml-9">
                  Many agencies hand your account off to inexperienced junior staff who lack the strategic depth to navigate complex challenges like scaling from Launceston to a national market. Not here. You work directly with senior-level strategists who have managed over $50M in ad spend, delivered $574M+ in verified client revenue, and have deep expertise in building integrated growth systems for ambitious businesses. You get mainland-caliber expertise focused 100% on your success.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button onClick={openForm} size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Schedule Your FREE Launceston Digital Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Overcome the "Tassie Tax" and Scale Nationally?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule your FREE Launceston Digital Strategy Session today. We'll audit your current marketing, identify your biggest growth opportunities, and provide a customized roadmap for predictable national revenue. No obligation. No sales pitch. Just actionable insights.
            </p>
            <Button onClick={openForm} size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
              Schedule Your FREE Launceston Digital Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 10: Related Service & Location Links */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Explore Our Core Services & Other Tasmanian Locations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <LinkIcon className="w-5 h-5 mr-2 text-primary" />
                    Our Core Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/ppc-agency" className="text-primary hover:underline">PPC Agency</Link>
                    </li>
                    <li>
                      <Link to="/seo-agency" className="text-primary hover:underline">SEO Agency</Link>
                    </li>
                    <li>
                      <Link to="/meta-ads-agency" className="text-primary hover:underline">Meta Ads Agency</Link>
                    </li>
                    <li>
                      <Link to="/web-design-agency" className="text-primary hover:underline">Web Design Agency</Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <LinkIcon className="w-5 h-5 mr-2 text-primary" />
                    Other Tasmanian Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/seo-hobart" className="text-primary hover:underline">SEO Hobart</Link>
                    </li>
                    <li>
                      <Link to="/google-ads-hobart" className="text-primary hover:underline">Google Ads Hobart</Link>
                    </li>
                    <li>
                      <Link to="/facebook-ads-hobart" className="text-primary hover:underline">Facebook Ads Hobart</Link>
                    </li>
                    <li>
                      <Link to="/web-design-hobart" className="text-primary hover:underline">Web Design Hobart</Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Everything you need to know about working with Odin Digital in Launceston.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-12">
              <Button onClick={openForm} size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Schedule Your FREE Launceston Digital Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border shadow-lg p-4">
        <Button onClick={openForm} className="w-full bg-primary hover:bg-primary/90 text-white">
          Get Your FREE Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <Footer />
    </>
  );
};

export default OnlineMarketingCompanyLaunceston;
