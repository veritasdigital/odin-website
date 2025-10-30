import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, TrendingUp, Users, Award, Shield, Zap, 
  CheckCircle, XCircle, ThumbsUp, BarChart, Settings,
  MessageSquare, Clock, Smartphone, DollarSign, Globe,
  Search, FileText, ChevronDown
} from "lucide-react";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FacebookAdsHobart = () => {
  const { openForm } = useMarketingForm();

  const metrics = [
    { icon: TrendingUp, stat: "540%", label: "Average ROI" },
    { icon: DollarSign, stat: "$574M+", label: "Revenue Generated" },
    { icon: Award, stat: "95%", label: "Client Retention" },
    { icon: Users, stat: "500+", label: "Active Campaigns" }
  ];

  const problems = [
    {
      icon: XCircle,
      title: "The \"Meta Ads Don't Work\" Lie",
      description: "Agencies in Hobart tell you Meta Ads are dead because they lack the technical expertise to make them profitable post-iOS 14. The truth? Meta Ads work brilliantly when you know how to implement server-side tracking properly."
    },
    {
      icon: Target,
      title: "Low-Quality Lead Trap",
      description: "You're getting clicks and form fills, but your sales team tells you the leads are garbage. That's because most agencies optimize for cheap clicks, not Sales Qualified Leads (SQLs). We optimize for conversions that actually matter to your bottom line."
    },
    {
      icon: Shield,
      title: "The Lock-In Contract Scam",
      description: "Hobart agencies lock you into 6-12 month contracts because they know their results won't justify keeping you. We operate with zero lock-in contracts because we're confident you'll want to stay based purely on ROI."
    }
  ];

  const testimonials = [
    {
      quote: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
      author: "Liam C",
      company: "Krush Organics",
      result: "5x ROI, $157K first month"
    },
    {
      quote: "The team at Odin Digital transformed our Facebook advertising. We were struggling with high costs and low-quality leads. Now we're seeing consistent, qualified leads at a fraction of the cost.",
      author: "Sarah M",
      company: "Imperial Wealth",
      result: "3x more qualified leads"
    },
    {
      quote: "Finally, an agency that actually understands our business. The transparency and results speak for themselves. Our Meta Ads campaigns are now our most profitable marketing channel.",
      author: "David K",
      company: "Adriatic Furniture",
      result: "Most profitable channel"
    }
  ];

  const services = [
    {
      icon: Target,
      title: "Facebook Ads Management",
      description: "Full-service campaign management optimized for your specific business goals. We handle everything from audience research to creative development to daily optimization."
    },
    {
      icon: Smartphone,
      title: "Instagram Ads Management",
      description: "Leverage Instagram's visual platform to connect with your ideal customers. We create scroll-stopping creative that drives real business results."
    },
    {
      icon: Settings,
      title: "Meta Conversion API Setup",
      description: "Server-side tracking that bypasses iOS 14 limitations. This is the technical edge that separates agencies who deliver ROI from those making excuses."
    },
    {
      icon: BarChart,
      title: "Advanced Analytics & Reporting",
      description: "Crystal-clear reporting that shows exactly where your budget goes and what returns you're getting. No smoke and mirrors, just transparent data."
    }
  ];

  const differentiators = [
    {
      icon: Shield,
      title: "No Lock-in Contracts",
      description: "Month-to-month engagement. We earn your business every single month through results, not contractual obligation."
    },
    {
      icon: TrendingUp,
      title: "540% Average ROI",
      description: "Our clients see an average 540% return on their Meta Ads investment. Your results will vary, but our focus is always maximizing your ROI."
    },
    {
      icon: Users,
      title: "Sales Qualified Leads",
      description: "We optimize for leads that convert to customers, not vanity metrics like clicks and impressions."
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description: "Direct access to your account manager. No hiding behind support tickets or automated responses."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Free Strategy Audit",
      description: "We analyze your current Meta Ads setup and identify exactly what's holding back your ROI."
    },
    {
      number: "02",
      title: "Custom Campaign Build",
      description: "We develop a tailored strategy based on your business goals, target audience, and competitive landscape."
    },
    {
      number: "03",
      title: "Technical Implementation",
      description: "We set up server-side tracking, Conversion API, and all technical foundations for accurate measurement and optimization."
    },
    {
      number: "04",
      title: "Ongoing Optimization",
      description: "Daily monitoring and optimization to continuously improve performance and maximize your return on ad spend."
    }
  ];

  const whyChoose = [
    {
      icon: Award,
      title: "Proven Local Expertise",
      description: "We understand the Hobart market and how to reach your local customers effectively."
    },
    {
      icon: Zap,
      title: "Fast Results",
      description: "Most clients see improved performance within the first 30 days of working with us."
    },
    {
      icon: CheckCircle,
      title: "No BS Approach",
      description: "We tell you what will work and what won't. No overpromising, no excuses, just honest expertise."
    },
    {
      icon: Clock,
      title: "Responsive Support",
      description: "Questions? Concerns? You'll get a response within 24 hours, often much faster."
    }
  ];

  const otherCities = [
    { name: "Melbourne", url: "/facebook-ads-melbourne" },
    { name: "Brisbane", url: "/facebook-ads-brisbane" },
    { name: "Adelaide", url: "/facebook-ads-adelaide" },
    { name: "Sydney", url: "/facebook-ads-sydney" },
    { name: "Perth", url: "/facebook-ads-perth" },
    { name: "Canberra", url: "/facebook-ads-canberra" }
  ];

  const faqs = [
    {
      question: "Why do so many agencies in Hobart say that Meta Ads don't work anymore?",
      answer: "Many agencies lack the technical expertise to adapt to the post-iOS tracking changes. They blame the platform because they haven't mastered server-side tracking and the Meta Conversion API. Our Facebook Ads Agency Hobart team has solved these technical challenges, allowing us to continue delivering a massive ROI where others fail."
    },
    {
      question: "How does Odin Digital ensure high-quality leads, not just cheap clicks?",
      answer: "We optimize for Sales Qualified Leads (SQLs), not just clicks. This involves a rigorous process of audience targeting, bold creative that pre-qualifies the prospect, and continuous optimization based on your CRM data. We work with your sales team to ensure the leads we deliver are ready to convert."
    },
    {
      question: "How much does it cost to hire a Facebook Ads Agency in Hobart?",
      answer: "The cost is an investment tailored to your specific growth goals. We offer transparent, performance-based pricing, typically a flat monthly management fee. Crucially, we operate with no lock-in contracts, which means our value must be proven every month. The best way to determine the exact investment is through a free, no-obligation strategy session."
    },
    {
      question: "What makes your approach to Meta Ads different from other Hobart agencies?",
      answer: "We focus on technical excellence and results, not flashy presentations. We've mastered server-side tracking and Conversion API implementation, which is the foundation of profitable Meta Ads in 2024. We also operate with complete transparency and no lock-in contracts, which means we have to earn your business through performance every single month."
    },
    {
      question: "How long does it take to see results from Facebook Ads?",
      answer: "Most clients see initial improvements within the first 30 days. However, Meta Ads campaigns typically need 60-90 days to fully optimize and reach peak performance. We focus on quick wins early while building sustainable, scalable campaigns for long-term growth."
    },
    {
      question: "Do you work with businesses outside of Hobart?",
      answer: "Yes, while we specialize in serving Hobart businesses, we work with clients across Australia and internationally. We have dedicated pages for Melbourne, Sydney, Brisbane, Perth, Adelaide, and Canberra markets."
    },
    {
      question: "What industries do you specialize in for Meta Ads?",
      answer: "We've delivered exceptional results across e-commerce, professional services, healthcare, home services, education, and B2B industries. Our approach is industry-agnostic because we focus on fundamental performance marketing principles that work across all sectors."
    },
    {
      question: "How do you handle the iOS 14 tracking limitations?",
      answer: "We implement Meta's Conversion API (CAPI) for server-side tracking, which bypasses browser-level restrictions. This gives us significantly better data accuracy than agencies relying solely on pixel-based tracking. It's a technical implementation that most agencies haven't mastered, which is why they claim 'Meta Ads don't work anymore.'"
    },
    {
      question: "What's your typical management fee structure?",
      answer: "We charge a flat monthly management fee based on your ad spend and campaign complexity. There are no percentage-based fees that incentivize us to increase your spend unnecessarily. We also offer performance-based pricing for established accounts. All pricing is discussed transparently during your free strategy session."
    },
    {
      question: "Can you take over existing Meta Ads campaigns?",
      answer: "Absolutely. We frequently take over underperforming campaigns from other agencies or in-house teams. Our first step is always a comprehensive audit to identify what's working, what's not, and where the biggest opportunities lie."
    },
    {
      question: "Do you offer Google Ads and SEO services as well?",
      answer: "Yes, we're a full-service performance marketing agency. We offer Google Ads management, SEO services, and web design. Many clients find the best results come from an integrated approach across multiple channels."
    },
    {
      question: "How often will I receive reporting and updates?",
      answer: "You'll have 24/7 access to a live dashboard showing your campaign performance. We provide detailed monthly reports and hold monthly strategy calls. If you prefer more frequent check-ins, we're happy to accommodate."
    },
    {
      question: "What if I'm not happy with the results?",
      answer: "Because we operate with no lock-in contracts, you're free to cancel anytime. However, we're committed to your success and will work closely with you to address any concerns and optimize performance. Our 95% client retention rate speaks to our commitment to delivering results."
    },
    {
      question: "Do you create the ad creative or do I need to provide it?",
      answer: "We handle complete creative development as part of our service. This includes ad copy, image/video creative, and landing page recommendations. We've found that integrated creative and media buying delivers the best results."
    },
    {
      question: "What's the minimum ad spend required to work with you?",
      answer: "We typically recommend a minimum ad spend of $2,000-$3,000 per month to give Meta's algorithm enough data to optimize effectively. However, we're happy to discuss your specific situation and budget during a free strategy session."
    },
    {
      question: "How do I get started with Odin Digital?",
      answer: "Simply click the 'Get Your Free Strategy Audit' button on this page to book a no-obligation consultation. We'll analyze your current situation, discuss your goals, and outline exactly how we'd approach your Meta Ads campaigns. There's no pressure and no sales pitch—just honest, expert advice."
    }
  ];

  // Schema Markup
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://growth-conduit-central.lovable.app/",
    "logo": "https://growth-conduit-central.lovable.app/logo.png",
    "description": "Performance-focused digital marketing agency specializing in PPC, Meta Ads, Web Design, and SEO with no lock-in contracts.",
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
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Odin Digital - Facebook Ads Agency Hobart",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hobart",
      "addressRegion": "TAS",
      "postalCode": "7000",
      "addressCountry": "AU"
    },
    "url": "https://growth-conduit-central.lovable.app/facebook-ads-hobart",
    "priceRange": "$$$",
    "servesArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-42.8821",
        "longitude": "147.3272"
      },
      "geoRadius": "50000"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Facebook Ads Agency Hobart",
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital"
    },
    "areaServed": {
      "@type": "City",
      "name": "Hobart"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Meta Ads Management Services Hobart",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Facebook Ads Management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instagram Ads Management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Meta Conversion API Setup"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Odin Digital - Facebook Ads Agency Hobart"
    },
    "author": {
      "@type": "Person",
      "name": "Liam C"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
    "publisher": {
      "@type": "Organization",
      "name": "Krush Organics"
    }
  };

  return (
    <>
      <Helmet>
        <title>Facebook Ads Agency Hobart | Proven 540% ROI Meta Ads | Odin Digital</title>
        <meta name="description" content="Stop wasting budget on low-quality leads. Odin Digital is the Facebook Ads Agency Hobart businesses trust for high-performance Meta Ads with no lock-in contracts. Get your free audit today." />
        <meta name="keywords" content="Facebook Ads Agency Hobart, Meta Ads Hobart, Facebook advertising Hobart, Instagram Ads Hobart, social media advertising Hobart" />
        <link rel="canonical" href="https://growth-conduit-central.lovable.app/facebook-ads-hobart" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Facebook Ads Agency Hobart | Proven 540% ROI Meta Ads | Odin Digital" />
        <meta property="og:description" content="Stop wasting budget on low-quality leads. Odin Digital is the Facebook Ads Agency Hobart businesses trust for high-performance Meta Ads with no lock-in contracts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://growth-conduit-central.lovable.app/facebook-ads-hobart" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background overflow-hidden">
        {/* Section 1: Hero Section */}
        <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Floating circles from home page */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 rounded-full bg-primary/10 blur-3xl animate-float"></div>
            <div className="absolute top-40 right-20 w-48 h-48 md:w-96 md:h-96 rounded-full bg-accent/10 blur-3xl animate-float-delayed"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 md:w-80 md:h-80 rounded-full bg-primary/5 blur-3xl animate-float"></div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Breadcrumb */}
              <nav className="flex justify-center mb-6 md:mb-8 text-xs sm:text-sm text-muted-foreground" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 flex-wrap justify-center">
                  <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                  <li><ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 rotate-[-90deg]" /></li>
                  <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
                  <li><ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 rotate-[-90deg]" /></li>
                  <li><a href="/services/facebook-advertising" className="hover:text-primary transition-colors">Meta Ads</a></li>
                  <li><ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 rotate-[-90deg]" /></li>
                  <li className="text-foreground font-medium">Hobart</li>
                </ol>
              </nav>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 text-foreground leading-tight">
                Facebook Ads Agency Hobart
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-foreground/90 leading-tight px-2">
                Tired of Hearing That Meta Ads "Don't Work Anymore"? You Need a Hobart Agency Focused on 540% ROI, Not Excuses.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-2">
                Your competitors are on Facebook. Your customers are on Instagram. But are your ads actually working? Most Hobart businesses waste thousands on social media advertising that delivers clicks but not conversions. At Odin Digital, we deliver high-quality, converting Meta Ads with complete transparency and no lock-in contracts.
              </p>
              
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#B91850] text-white font-bold px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-h-[44px]"
              >
                Get Your Free Strategy Audit
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Social Proof Metrics */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                        <metric.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-2 break-words">
                      {metric.stat}
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium break-words">
                      {metric.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Problem-Agitation Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 md:mb-16 text-foreground">
              Why Your Facebook Ads Aren't Delivering ROI in Hobart
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-destructive/10 flex items-center justify-center">
                        <problem.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-destructive" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-center text-foreground break-words">
                      {problem.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Testimonials */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 md:mb-16 text-foreground">
              Real Results From Real Businesses
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="mb-4 sm:mb-6">
                      <div className="flex gap-1 mb-3 sm:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Award key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground italic leading-relaxed mb-4 sm:mb-6 break-words">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="font-bold text-foreground text-sm sm:text-base break-words">{testimonial.author}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground break-words">{testimonial.company}</p>
                      <p className="text-xs sm:text-sm font-semibold text-primary mt-2 break-words">{testimonial.result}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Services Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 md:mb-16 text-foreground">
              Our Facebook Ads Management Services in Hobart
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-foreground break-words">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 md:mt-12 text-center">
              <p className="text-sm sm:text-base text-muted-foreground mb-4 break-words">
                We also offer comprehensive <a href="/services/google-ads" className="text-primary hover:underline">Google Ads</a>, <a href="/seo-agency" className="text-primary hover:underline">SEO</a>, and <a href="/services/web-design" className="text-primary hover:underline">Web Design</a> services.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Differentiators */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 md:mb-16 text-foreground">
              Why Choose Odin Digital for Facebook Ads in Hobart?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {differentiators.map((diff, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-4 sm:p-6 md:p-8 flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                        <diff.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-foreground break-words">
                        {diff.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                        {diff.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Process Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 md:mb-16 text-foreground">
              Our Proven 4-Step Process
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      <div className="text-4xl sm:text-5xl md:text-6xl font-black text-primary/20 mb-3 sm:mb-4 break-words">
                        {step.number}
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-foreground break-words">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Why Choose Us (Additional Reasons) */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 md:mb-16 text-foreground">
              More Reasons to Partner With Odin Digital
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {whyChoose.map((reason, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-4 sm:p-6 md:p-8 flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                        <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-foreground break-words">
                        {reason.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                        {reason.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Final CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8 text-foreground">
              Ready to Stop Wasting Money on Facebook Ads That Don't Convert?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto break-words px-2">
              Get a free, no-obligation strategy audit from Hobart's most transparent Facebook Ads agency. We'll show you exactly what's holding back your ROI and how we'd fix it. No sales pitch, just honest expertise.
            </p>
            <Button 
              onClick={openForm}
              size="lg"
              className="bg-[#D91C5C] hover:bg-[#B91850] text-white font-bold px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-h-[44px]"
            >
              Get Your Free Strategy Audit
            </Button>
          </div>
        </section>

        {/* Section 10: Other Cities Links */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-center mb-6 md:mb-8 text-foreground">
              Facebook Ads Services in Other Australian Cities
            </h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {otherCities.map((city, index) => (
                <a
                  key={index}
                  href={city.url}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-background hover:bg-primary hover:text-primary-foreground text-foreground rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-sm sm:text-base font-medium min-h-[44px] flex items-center"
                >
                  {city.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 11: FAQ Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 md:mb-16 text-foreground">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 sm:px-6 overflow-hidden">
                  <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6">
                    <span className="text-base sm:text-lg md:text-xl font-bold text-foreground pr-4 break-words">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4 sm:pb-6 break-words">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t md:hidden z-40">
          <Button 
            onClick={openForm}
            className="w-full bg-[#D91C5C] hover:bg-[#B91850] text-white font-bold py-4 text-base rounded-lg shadow-lg min-h-[44px]"
          >
            Get Your Free Strategy Audit
          </Button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default FacebookAdsHobart;