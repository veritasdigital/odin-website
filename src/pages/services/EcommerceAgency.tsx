import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { 
  ShoppingCart,
  TrendingUp,
  Target,
  Search,
  Mail,
  Camera,
  BarChart3,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Package,
  Smartphone,
  Globe,
  Heart,
  Repeat,
  ShoppingBag,
  CreditCard,
  Award,
  Clock
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EcommerceAgency = () => {
  const { openForm } = useMarketingForm();

  const challenges = [
    {
      icon: Users,
      title: "Competition is Fierce",
      description: "Thousands of e-commerce stores compete for the same customers. Standing out requires expertise."
    },
    {
      icon: TrendingUp,
      title: "Customer Acquisition Costs Rising",
      description: "Paid advertising costs increase every year. You need better targeting and conversion to maintain profitability."
    },
    {
      icon: Target,
      title: "Conversion is the Real Challenge",
      description: "Getting traffic is one thing. Converting that traffic into paying customers is another."
    },
    {
      icon: Package,
      title: "Fragmentation Problem",
      description: "Website, marketing, inventory, customer service—all separate systems. You need integration."
    },
    {
      icon: CheckCircle,
      title: "Support Problem",
      description: "Technical issues, marketing questions, platform updates—you need ongoing support, not just a one-time build."
    }
  ];

  const whyChooseUs = [
    {
      icon: TrendingUp,
      title: "Revenue-Focused Approach",
      description: "We don't just drive traffic. We optimise for revenue. Every decision is based on ROI."
    },
    {
      icon: ShoppingCart,
      title: "Full-Service E-Commerce Expertise",
      description: "Website design, conversion optimisation, Google Ads, Meta Ads, email marketing, SEO—we handle it all."
    },
    {
      icon: Zap,
      title: "Integrated Marketing",
      description: "Your website, ads, and email work together seamlessly. No fragmentation, no wasted budget."
    },
    {
      icon: Target,
      title: "Conversion Optimisation Expertise",
      description: "We specialise in conversion rate optimisation. A 1% improvement can mean thousands in extra revenue."
    },
    {
      icon: Globe,
      title: "Platform Expertise",
      description: "Shopify, WooCommerce, custom platforms—we've built and optimised them all."
    },
    {
      icon: BarChart3,
      title: "Transparent Reporting",
      description: "You'll always know what's working and what's not. Monthly reports, real-time dashboards, full transparency."
    },
    {
      icon: CheckCircle,
      title: "Ongoing Support",
      description: "E-commerce never stops. Neither do we. Ongoing optimisation, testing, and support included."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "250+ e-commerce clients. 340% average revenue growth. Real results from real businesses."
    }
  ];

  const services = [
    {
      icon: ShoppingCart,
      title: "E-Commerce Website Design and Development",
      description: "Professional, conversion-focused e-commerce website design for Shopify, WooCommerce, and custom platforms.",
      features: [
        "Mobile-first responsive design",
        "Fast loading speeds (under 3 seconds)",
        "Intuitive navigation and user experience",
        "Payment gateway integration"
      ]
    },
    {
      icon: Target,
      title: "Conversion Rate Optimisation (CRO)",
      description: "Systematic testing and optimisation to increase your conversion rate and revenue per visitor.",
      features: [
        "A/B testing and multivariate testing",
        "User behaviour analysis and heatmapping",
        "Checkout optimisation",
        "Product page optimisation"
      ]
    },
    {
      icon: Search,
      title: "E-Commerce Google Ads Management",
      description: "Google Shopping and Search ads management to drive qualified traffic to your store.",
      features: [
        "Google Shopping campaigns",
        "Search and display campaigns",
        "Remarketing campaigns",
        "Performance Max campaigns"
      ]
    },
    {
      icon: Smartphone,
      title: "E-Commerce Meta Ads Management",
      description: "Facebook and Instagram ads management to reach your ideal customers on social media.",
      features: [
        "Dynamic product ads",
        "Catalogue sales campaigns",
        "Lookalike audience targeting",
        "Retargeting campaigns"
      ]
    },
    {
      icon: Mail,
      title: "Email Marketing and Automation",
      description: "Email marketing and automation to increase customer lifetime value and repeat purchases.",
      features: [
        "Welcome series and abandoned cart emails",
        "Post-purchase upsell sequences",
        "Customer segmentation",
        "Email list growth strategies"
      ]
    },
    {
      icon: TrendingUp,
      title: "E-Commerce SEO",
      description: "Search engine optimisation to increase organic traffic and reduce reliance on paid ads.",
      features: [
        "Product page optimisation",
        "Category page optimisation",
        "Technical SEO audits",
        "Content marketing strategy"
      ]
    },
    {
      icon: Camera,
      title: "Product Photography and Content",
      description: "Professional product photography and content creation to showcase your products beautifully.",
      features: [
        "Product photography",
        "Lifestyle photography",
        "Video content creation",
        "Product description writing"
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics and Reporting",
      description: "Comprehensive analytics and reporting to understand what's working and what's not.",
      features: [
        "Google Analytics 4 setup",
        "Custom dashboards",
        "Monthly performance reports",
        "Revenue attribution tracking"
      ]
    }
  ];

  const process = [
    {
      phase: 1,
      title: "Discovery and Audit",
      description: "We audit your current website, marketing, and sales funnel to identify opportunities.",
      whatWeDo: "Website audit, competitor analysis, customer research, conversion analysis",
      whatYouGet: "Detailed audit report with prioritised recommendations"
    },
    {
      phase: 2,
      title: "Strategy Development",
      description: "We develop a comprehensive strategy aligned with your revenue goals.",
      whatWeDo: "Revenue targets, marketing strategy, website strategy, conversion strategy",
      whatYouGet: "Strategic roadmap with timeline and expected outcomes"
    },
    {
      phase: 3,
      title: "Implementation",
      description: "We implement the strategy—website updates, marketing campaigns, optimisation.",
      whatWeDo: "Website development, campaign setup, email automation, tracking implementation",
      whatYouGet: "Fully optimised website, active marketing campaigns, automated systems"
    },
    {
      phase: 4,
      title: "Testing and Optimisation",
      description: "We test everything and optimise based on real data.",
      whatWeDo: "A/B testing, conversion testing, campaign optimisation, user testing",
      whatYouGet: "Improved conversion rates, lower costs, higher revenue"
    },
    {
      phase: 5,
      title: "Scaling",
      description: "Once we've proven what works, we scale it for maximum growth.",
      whatWeDo: "Increase ad spend, expand to new channels, grow email list, add products",
      whatYouGet: "Rapid revenue growth with maintained profitability"
    },
    {
      phase: 6,
      title: "Growth and Partnership",
      description: "We become your ongoing e-commerce partner, continuously optimising and growing.",
      whatWeDo: "Ongoing testing, new campaigns, seasonal strategy, platform updates",
      whatYouGet: "Sustained growth and long-term partnership"
    }
  ];

  const businessModels = [
    {
      icon: Heart,
      title: "Direct-to-Consumer (D2C)",
      challenge: "Standing out in a crowded market and building brand loyalty",
      solution: "Brand-focused website design, integrated marketing, customer lifetime value optimisation",
      benefits: "Higher margins, direct customer relationships, brand control"
    },
    {
      icon: ShoppingBag,
      title: "Traditional Retailers Going Online",
      challenge: "Moving from in-store to online sales without cannibalising existing revenue",
      solution: "Omnichannel strategy, inventory integration, online marketing that drives both online and in-store sales",
      benefits: "Expanded market reach, reduced reliance on foot traffic, new revenue streams"
    },
    {
      icon: Repeat,
      title: "Subscription Businesses",
      challenge: "Acquiring subscribers and reducing churn",
      solution: "Subscription-optimised checkout, retention email marketing, customer success optimisation",
      benefits: "Predictable revenue, higher customer lifetime value, better cash flow"
    },
    {
      icon: Smartphone,
      title: "Digital Products",
      challenge: "Standing out in a competitive market and preventing piracy",
      solution: "Conversion-focused sales pages, automated delivery, customer education",
      benefits: "Zero inventory costs, instant delivery, high margins"
    },
    {
      icon: Package,
      title: "Marketplace Sellers",
      challenge: "Building a brand outside of Amazon/eBay and reducing platform dependence",
      solution: "Own-brand website, integrated marketing, customer list building",
      benefits: "Higher margins, brand ownership, customer data ownership"
    },
    {
      icon: Users,
      title: "B2B E-Commerce",
      challenge: "Managing complex pricing, bulk orders, and customer accounts",
      solution: "Custom pricing functionality, account management, sales team integration",
      benefits: "Streamlined ordering, reduced admin costs, better customer experience"
    }
  ];

  const platforms = [
    {
      name: "Shopify Specialists",
      description: "Shopify is our platform of choice for most e-commerce businesses. Easy to use, powerful apps, excellent support.",
      expertise: "Custom theme development, app integration, Shopify Plus for enterprise",
      benefits: "Fast setup, reliable hosting, extensive app ecosystem, easy to manage"
    },
    {
      name: "WooCommerce Experts",
      description: "WooCommerce gives you complete control over your store. Perfect if you need custom functionality.",
      expertise: "Custom plugin development, advanced integrations, performance optimisation",
      benefits: "Complete control, unlimited customisation, cost-effective for large catalogues"
    },
    {
      name: "Custom E-Commerce Development",
      description: "For businesses with unique requirements that can't be met with standard platforms.",
      expertise: "Custom platform development, API integrations, enterprise solutions",
      benefits: "Unlimited flexibility, complete ownership, tailored to your exact needs"
    },
    {
      name: "Platform Migration",
      description: "Moving from one platform to another? We handle migrations smoothly with zero downtime.",
      expertise: "Data migration, SEO preservation, redirects, testing",
      benefits: "Zero downtime, preserved SEO rankings, smooth transition"
    }
  ];

  const caseStudies = [
    {
      type: "Fashion Brand",
      challenge: "Conversion rate of 0.8%, well below industry average of 2-3%",
      solution: "Complete website redesign, checkout optimisation, A/B testing program",
      results: [
        "Conversion rate increased to 3.2% (4x improvement)",
        "Revenue increased 340%",
        "Average order value increased 25%"
      ]
    },
    {
      type: "Subscription Box",
      challenge: "High customer acquisition cost ($45) and high churn rate (40% monthly)",
      solution: "Referral program, retention email marketing, customer success optimisation",
      results: [
        "Customer acquisition cost reduced to $28",
        "Churn rate reduced to 18%",
        "Customer lifetime value increased 180%"
      ]
    },
    {
      type: "Electronics Retailer",
      challenge: "Wanted to expand online but 90% of sales were in-store",
      solution: "E-commerce website, Google Shopping campaigns, click-and-collect functionality",
      results: [
        "Online sales grew from 10% to 45% of total revenue",
        "Overall revenue increased 220%",
        "In-store sales actually increased due to online research"
      ]
    },
    {
      type: "Digital Products",
      challenge: "Low conversion rate (1.2%) and high cart abandonment (78%)",
      solution: "Sales page redesign, trust signal optimisation, abandoned cart email sequence",
      results: [
        "Conversion rate increased to 4.8%",
        "Cart abandonment reduced to 52%",
        "Revenue increased 380%"
      ]
    }
  ];

  const faqs = [
    {
      question: "How much does an e-commerce agency cost?",
      answer: "E-commerce services vary in cost depending on scope. Website design might cost $5,000–$20,000. Ongoing marketing and optimisation might cost $2,000–$10,000+/month. We offer flexible pricing and can work within your budget. The key is focusing on ROI—if we can increase your revenue significantly, the investment pays for itself."
    },
    {
      question: "How long does it take to see results?",
      answer: "Paid advertising can deliver results immediately—you can start seeing traffic and sales within days. Website optimisation takes 2–4 weeks to test and implement. SEO takes 3–6 months to see significant results. We set realistic expectations upfront and focus on quick wins while building long-term growth."
    },
    {
      question: "What if my conversion rate is already low?",
      answer: "Low conversion rates are actually an opportunity. If we can improve your conversion rate by just 1%, that's a significant revenue increase. We specialise in conversion optimisation—A/B testing, user experience improvements, checkout optimisation. We've helped businesses double and triple their conversion rates."
    },
    {
      question: "Do you work with small e-commerce businesses?",
      answer: "Absolutely. We work with e-commerce businesses of all sizes, from startups to large enterprises. We have services and pricing for every stage. Starting small is fine—we can scale as you grow."
    },
    {
      question: "What platform do you recommend?",
      answer: "It depends on your needs. Shopify is great for most businesses—easy to use, good apps, good support. WooCommerce is good if you want more control and have technical resources. Custom solutions are good if you have unique needs. We'll recommend the best platform for your business based on your goals and budget."
    },
    {
      question: "Can you help with inventory management?",
      answer: "While we don't manage inventory directly, we integrate your e-commerce platform with inventory management systems. We can also help you set up automated inventory tracking, low-stock alerts, and supplier integrations."
    },
    {
      question: "Do you handle international shipping?",
      answer: "We can set up international shipping on your website and integrate with shipping providers. We'll help you configure shipping rates, duties, and taxes for international orders. We can also advise on international expansion strategy."
    },
    {
      question: "What about customer support?",
      answer: "We can help you set up customer support systems—live chat, help desk software, email automation. While we don't handle customer support directly, we can integrate systems and provide training for your team."
    },
    {
      question: "How do you handle payment processing?",
      answer: "We integrate with all major payment gateways—Stripe, PayPal, Square, Afterpay, etc. We'll recommend the best options for your business based on fees, features, and customer preferences."
    },
    {
      question: "What metrics do you track?",
      answer: "We track everything that matters: revenue, conversion rate, average order value, customer acquisition cost, customer lifetime value, traffic, bounce rate, cart abandonment rate. You'll have access to real-time dashboards and receive monthly reports."
    },
    {
      question: "Can you do custom development?",
      answer: "Yes. We have an in-house development team that can handle custom functionality, integrations, and platform development. If your needs go beyond standard platform features, we can build it."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "We provide ongoing marketing management, conversion optimisation, technical support, platform updates, and strategic consulting. E-commerce is constantly evolving, and we evolve with it."
    },
    {
      question: "How do you ensure our website is fast?",
      answer: "We optimise everything—image compression, code minification, content delivery networks, lazy loading, caching. We target page load times under 3 seconds. Fast websites convert better and rank higher in search."
    },
    {
      question: "What about mobile optimisation?",
      answer: "Over 60% of e-commerce traffic comes from mobile devices. Every website we build is mobile-first—designed for mobile first, then adapted for desktop. We test on real devices to ensure a perfect experience."
    },
    {
      question: "Can you help with email marketing?",
      answer: "Yes. We build complete email marketing strategies—welcome series, abandoned cart emails, post-purchase sequences, win-back campaigns, promotional emails. We use platforms like Klaviyo, Mailchimp, and ActiveCampaign."
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://growth-conduit-central.lovable.app/#organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Full-service e-commerce agency specialising in Shopify, WooCommerce, and custom e-commerce solutions.",
        "sameAs": [
          "https://www.facebook.com/odindigital",
          "https://www.linkedin.com/company/odin-digital",
          "https://www.instagram.com/odindigital"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "url": "https://growth-conduit-central.lovable.app/contact"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://growth-conduit-central.lovable.app/ecommerce-agency#webpage",
        "url": "https://growth-conduit-central.lovable.app/ecommerce-agency",
        "name": "E-Commerce Agency | Full-Service E-Commerce Solutions",
        "description": "Full-service e-commerce agency. Website design, conversion optimisation, Google Ads, Meta Ads, email marketing. 250+ clients, 340% average revenue growth.",
        "isPartOf": {
          "@id": "https://growth-conduit-central.lovable.app/#website"
        },
        "inLanguage": "en-AU",
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01"
      },
      {
        "@type": "WebSite",
        "@id": "https://growth-conduit-central.lovable.app/#website",
        "url": "https://growth-conduit-central.lovable.app",
        "name": "Odin Digital",
        "description": "E-commerce agency specialising in full-service e-commerce solutions",
        "publisher": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        }
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/ecommerce-agency#ecommerce-design",
        "name": "E-Commerce Website Design and Development",
        "description": "Professional e-commerce website design and development for Shopify, WooCommerce, and custom platforms.",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "serviceType": "E-Commerce Web Design"
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/ecommerce-agency#cro",
        "name": "Conversion Rate Optimisation (CRO)",
        "description": "E-commerce conversion rate optimisation services to increase sales and revenue.",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "serviceType": "Conversion Optimisation"
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/ecommerce-agency#google-ads",
        "name": "E-Commerce Google Ads Management",
        "description": "Google Shopping and Search ads management for e-commerce businesses.",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "serviceType": "PPC Advertising"
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/ecommerce-agency#meta-ads",
        "name": "E-Commerce Meta Ads Management",
        "description": "Facebook and Instagram ads management for e-commerce businesses.",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "serviceType": "Social Media Advertising"
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/ecommerce-agency#email",
        "name": "Email Marketing and Automation",
        "description": "Email marketing and automation for e-commerce businesses to increase customer lifetime value.",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "serviceType": "Email Marketing"
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
        "@type": "AggregateRating",
        "@id": "https://growth-conduit-central.lovable.app/ecommerce-agency#rating",
        "ratingValue": "4.9",
        "ratingCount": "250",
        "bestRating": "5",
        "worstRating": "1"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>E-Commerce Agency | Full-Service E-Commerce Solutions</title>
        <meta name="description" content="Full-service e-commerce agency. Website design, conversion optimisation, Google Ads, Meta Ads, email marketing. 250+ clients, 340% average revenue growth." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />
      
      <div className="min-h-screen pb-32 md:pb-0">
        {/* Section 1: Hero Section */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
          {/* Floating Circles Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute top-40 right-20 w-48 h-48 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
            <div className="absolute bottom-20 left-1/3 w-40 h-40 md:w-80 md:h-80 bg-accent/10 rounded-full blur-3xl animate-float" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent pb-2 mt-8 md:mt-0">
                E-Commerce Agency That Grows Your Revenue
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-6 md:mb-8 leading-tight px-2">
                Building an e-commerce business is hard. Managing an e-commerce business is harder. You're juggling website optimisation, marketing, inventory, customer service, and a hundred other things. You need a partner who understands e-commerce, who can manage the technical side, who can drive traffic, and who can convert that traffic into sales. At Odin Digital, we're a full-service e-commerce agency that specialises in growing e-commerce revenue. We've helped over 250 e-commerce businesses increase their revenue by an average of 340% through strategic website optimisation, integrated marketing, and conversion-focused design. Whether you're selling on Shopify, WooCommerce, or a custom platform, we deliver results.
              </p>

              <Button 
                onClick={openForm}
                size="xl"
                variant="cta"
                className="text-sm sm:text-base md:text-lg lg:text-xl whitespace-normal h-auto px-6 sm:px-8 py-3 sm:py-4 leading-tight w-full sm:w-auto"
              >
                Schedule Free E-Commerce Consultation
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: The E-Commerce Challenge */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                The E-Commerce Challenge
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
                E-commerce is booming—global sales exceed $5 trillion annually. But individual e-commerce businesses struggle. Here's why:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {challenges.map((challenge, index) => (
                <Card key={index} className="p-4 md:p-6 hover:shadow-xl transition-all duration-300">
                  <challenge.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 md:mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {challenge.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="max-w-3xl mx-auto text-center mt-8 md:mt-12">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2 mb-6">
                The solution? A full-service e-commerce agency that handles everything—website, marketing, optimisation, support.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Why E-Commerce Businesses Choose Odin Digital */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
                Why E-Commerce Businesses Choose Odin Digital
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="p-4 md:p-6 hover:shadow-xl transition-all duration-300">
                  <reason.icon className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mb-3 md:mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {reason.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Button 
                onClick={openForm}
                size="lg"
                variant="hero"
                className="text-sm sm:text-base md:text-lg whitespace-normal h-auto px-6 sm:px-8 py-3 sm:py-4 leading-tight w-full sm:w-auto"
              >
                Learn More About Our Approach
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Section 4: Our E-Commerce Services */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
                Our E-Commerce Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
                Full-service e-commerce solutions to grow your revenue and scale your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                  <service.icon className="w-12 h-12 sm:w-14 sm:h-14 text-primary mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm sm:text-base">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Our E-Commerce Process */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
                Our E-Commerce Process
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
                From discovery to growth, we guide you through every phase of e-commerce success.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {process.map((phase, index) => (
                <Card key={index} className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {phase.phase}
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                      {phase.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">What We Do:</h4>
                        <p className="text-sm text-muted-foreground">{phase.whatWeDo}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">What You Get:</h4>
                        <p className="text-sm text-muted-foreground">{phase.whatYouGet}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: E-Commerce for Different Business Models */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
                E-Commerce for Different Business Models
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {businessModels.map((model, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                  <model.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{model.title}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-semibold mb-1">Challenge:</h4>
                      <p className="text-muted-foreground">{model.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Our Solution:</h4>
                      <p className="text-muted-foreground">{model.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Benefits:</h4>
                      <p className="text-muted-foreground">{model.benefits}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Platform Expertise */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
                Platform Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {platforms.map((platform, index) => (
                <Card key={index} className="p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{platform.name}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    {platform.description}
                  </p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-semibold mb-1">Our Expertise:</h4>
                      <p className="text-muted-foreground">{platform.expertise}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Benefits:</h4>
                      <p className="text-muted-foreground">{platform.benefits}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: FAQ Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center px-2">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Section 9: E-Commerce Case Studies */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
                E-Commerce Case Studies
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
                Real results from real e-commerce businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <Card key={index} className="p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{study.type}</h3>
                  <div className="space-y-4 text-sm sm:text-base">
                    <div>
                      <h4 className="font-semibold mb-2">Challenge:</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Our Solution:</h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <Award className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: Final CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-secondary to-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
                Ready to Grow Your E-Commerce Revenue?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 px-2">
                Schedule a free e-commerce consultation to learn how we can increase your revenue by 340% or more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={openForm}
                  size="xl"
                  className="bg-white text-primary hover:bg-white/90 text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 sm:py-4 h-auto whitespace-normal leading-tight w-full sm:w-auto"
                >
                  Schedule Your Free E-Commerce Consultation
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile spacer to avoid footer overlap */}
        <div className="h-20 md:hidden" aria-hidden="true" />

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border z-40 md:hidden">
          <Button 
            onClick={openForm}
            size="lg"
            variant="cta"
            className="w-full text-xs sm:text-sm md:text-base whitespace-normal h-auto px-4 py-4 leading-tight"
          >
            Schedule Free E-Commerce Consultation
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EcommerceAgency;