import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, TrendingUp, Users, Target, BarChart3, Sparkles, Award, Zap, Instagram, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const SocialMediaAdvertisingMelbourne = () => {
  const { openForm } = useMarketingForm();

  const stats = [
    { number: "540%", label: "Average ROI" },
    { number: "95%", label: "Client Retention" },
    { number: "$574M+", label: "Revenue Generated" },
    { number: "No Lock-In", label: "Contracts" },
  ];

  const problems = [
    {
      title: "Wasted Budget Trap",
      description: "Your Meta Ads are bleeding money on unqualified clicks and low-quality leads that never convert. You're paying for traffic, not customers.",
    },
    {
      title: "Creative Fatigue",
      description: "Your ads stopped working weeks ago, but your agency hasn't refreshed the creative. Your audience is ignoring your tired, stale content.",
    },
    {
      title: "Broken Tracking",
      description: "iOS updates destroyed your conversion tracking, and your agency hasn't implemented server-side solutions. You're flying blind with no idea what's actually working.",
    },
  ];

  const services = [
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Meta Ads Management (Facebook & Instagram)",
      description: "Full-service Meta Ads management focused on maximizing qualified leads and sales, not vanity metrics.",
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Advanced Server-Side Tracking",
      description: "Implementation of Conversions API for accurate revenue attribution despite iOS updates and privacy changes.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "High-Converting Creative Strategy",
      description: "Continuous creative testing and refresh to combat ad fatigue and keep your ads performing at peak levels.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Performance Analytics & Optimization",
      description: "Real-time performance tracking with weekly optimizations focused on reducing cost per lead and increasing ROAS.",
    },
  ];

  const differentiators = [
    {
      icon: <BarChart3 className="w-10 h-10 text-primary" />,
      title: "ROI-Focused, Not Vanity Metrics",
      description: "We optimize for revenue and qualified leads, not meaningless engagement metrics that don't impact your bottom line.",
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Advanced Server-Side Tracking",
      description: "We implement Conversions API to ensure accurate tracking and attribution, even with iOS privacy updates.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-primary" />,
      title: "Continuous Creative Testing",
      description: "We refresh creative every 2-3 weeks to combat ad fatigue and maintain peak performance across all campaigns.",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
      title: "No Lock-In Contracts",
      description: "Month-to-month agreements. We earn your business every month through results, not binding contracts.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery & Audit",
      description: "We analyze your current Meta Ads performance, identify wasted spend, and uncover opportunities for immediate improvement.",
    },
    {
      number: "2",
      title: "Strategy & Setup",
      description: "We build a custom campaign structure with bulletproof tracking, audience segmentation, and high-converting creative.",
    },
    {
      number: "3",
      title: "Launch & Optimize",
      description: "We launch campaigns and continuously optimize based on real conversion data, not guesswork or vanity metrics.",
    },
    {
      number: "4",
      title: "Scale & Report",
      description: "We scale winning campaigns, kill underperformers, and provide transparent reporting on revenue and ROI.",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: "Proven Track Record",
      description: "We've generated $574M+ in revenue for our clients with an average ROI of 540%. Our results speak for themselves.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Melbourne-Based Expertise",
      description: "We understand the Melbourne market and know how to target local audiences for maximum impact and ROI.",
    },
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "Rapid Response Time",
      description: "We respond within 24-48 hours to all inquiries and proactively communicate when issues or opportunities arise.",
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Performance-Based Pricing",
      description: "Our fees are tied to your ad spend, aligning our success with yours. We only win when you win.",
    },
  ];

  const testimonials = [
    {
      quote: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
      author: "Liam C",
      company: "Founder, Krush Organics",
    },
    {
      quote: "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
      author: "Fabienne Costa",
      company: "Founder, YCL Jewels",
    },
    {
      quote: "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
      author: "Evan Tsaboukos",
      company: "Founder, Imperial Wealth",
    },
  ];

  const faqs = [
    {
      question: "Why should I hire a social media ad agency Melbourne instead of managing Meta Ads myself?",
      answer: "While managing your own Meta Ads can seem simple, the platform's complexity, constant algorithm changes, and the need for continuous creative testing make it a full-time job. A professional social media ad agency Melbourne firm like Odin Digital has the expertise, tools, and time to manage your campaigns for maximum profitability. We spot costly mistakes, implement advanced server-side tracking, and optimize for conversion data, not just clicks. Our team's singular focus is on achieving a high ROI, which is why our clients see a 540% average return. Hiring us isn't an expense; it's an investment that frees up your time and ensures your budget is working as hard as possible to generate qualified leads and sales.",
    },
    {
      question: "What is the difference between a social media advertising company Melbourne and a social media marketing company?",
      answer: "A social media marketing company often focuses on organic content, community management, and brand awareness. A social media advertising company Melbourne, like Odin Digital, focuses on paid advertising (Meta Ads, TikTok Ads, etc.) to drive immediate, measurable results like leads and sales. We are a social media lead generation agency melbourne, meaning our priority is your direct return on ad spend (ROAS), not vanity metrics like likes and shares.",
    },
    {
      question: "How much does it cost to hire a digital marketing agency ads Melbourne?",
      answer: "The cost to hire a digital marketing agency ads Melbourne can vary widely, but our pricing is based on a percentage of your ad spend, ensuring our success is directly tied to yours. We don't offer cheap, fixed-price packages because they rarely work. Our custom strategies are built to deliver maximum ROI, not minimum cost. The best way to determine the exact investment is through a free strategy session. We'll analyze your goals and current spend, and provide a transparent proposal that details both the management fee and the expected return, ensuring you see us as a profit centre, not a cost.",
    },
    {
      question: "How long does it take to see results from social media advertising?",
      answer: "You'll typically see initial results within 2-4 weeks. However, the real magic happens after 8-12 weeks when we've gathered enough data to optimize effectively. We focus on sustainable, long-term results, not quick wins that disappear.",
    },
    {
      question: "Why aren't my current Meta Ads converting?",
      answer: "There are usually several reasons: poor audience targeting (reaching the wrong people), weak creative (ads that don't resonate), broken tracking (can't see what's working), creative fatigue (stale ads), or optimizing for the wrong metric (clicks instead of conversions). We audit your campaigns and identify the specific issues holding you back.",
    },
    {
      question: "Can you help with Google Ads and SEO as well?",
      answer: "Absolutely. We offer comprehensive digital marketing services including Google Ads management and SEO. Many of our clients use multiple services to create an integrated strategy that maximizes their overall marketing ROI.",
    },
    {
      question: "Do you have lock-in contracts?",
      answer: "No. We work on a month-to-month basis. You can cancel anytime with no penalties. We're confident in our work, and we want you to stay because you're getting results, not because you're trapped in a contract.",
    },
    {
      question: "How do you calculate ROI?",
      answer: "We track every lead and conversion back to the specific ad and campaign that generated it. We calculate your cost per lead, cost per conversion, and total ROI using server-side tracking (Conversions API) for maximum accuracy. We integrate with your CRM so we can track leads all the way through your sales funnel.",
    },
    {
      question: "What if my ads aren't working? Can you fix them?",
      answer: "Yes. We continuously test and optimize. If something isn't working, we identify the issue and fix it. We might adjust targeting, refresh creative, fix tracking issues, or change bidding strategy. We're committed to improving performance week over week.",
    },
    {
      question: "How often will I hear from you?",
      answer: "You'll get a monthly report and we'll schedule a monthly strategy call. For active campaigns, we also provide weekly performance updates via email. If there are issues or opportunities, we'll reach out proactively. You can also reach out to us anytime with questions—we typically respond within 24-48 hours.",
    },
    {
      question: "What's your experience with my industry?",
      answer: "We've worked with businesses across dozens of industries—e-commerce, B2B, professional services, luxury brands, hospitality, health and wellness, and more. We understand the unique challenges and opportunities in your industry and we'll customize our approach accordingly.",
    },
    {
      question: "Can you help with creative development?",
      answer: "Yes. We have an in-house creative team that develops ads tailored to your brand and target audience. We test multiple creative variations every 2-3 weeks to combat ad fatigue and identify what works best.",
    },
    {
      question: "What if I want to switch agencies?",
      answer: "No problem. We'll provide full access to your accounts and data. We'll help with the transition to make it as smooth as possible. We're confident that once you experience our level of service and results, you won't want to leave.",
    },
    {
      question: "How much should I budget for social media advertising?",
      answer: "It depends on your industry, goals, and target market. We typically recommend starting with $2,000-$5,000 per month to gather enough data to optimize effectively. We can work with any budget and scale up as you see results.",
    },
    {
      question: "What's the difference between your service and running ads myself?",
      answer: "You can definitely run ads yourself. But managing campaigns effectively requires expertise, time, and continuous optimization. Most businesses find that hiring an expert pays for itself many times over through better results, lower cost per lead, and time saved.",
    },
    {
      question: "How do I get started?",
      answer: "Simple. Book a free strategy session with one of our strategists. We'll discuss your goals, audit your current situation, and provide recommendations. No obligation, no pressure.",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://odindigital.com.au/",
    "logo": "https://odindigital.com.au/logo.png",
    "description": "Performance-focused digital marketing agency specializing in PPC, Meta Ads, Web Design, and SEO with no lock-in contracts.",
    "founder": {
      "@type": "Person",
      "name": "Lucas Durante"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://odindigital.com.au/contact"
    },
    "sameAs": [
      "https://www.linkedin.com/company/odin-digital",
      "https://www.facebook.com/odindigital",
      "https://twitter.com/odindigital"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Odin Digital - Social Media Ad Agency Melbourne",
    "url": "https://odindigital.com.au/social-media-advertising-melbourne",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "postalCode": "3000",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -37.8136,
      "longitude": 144.9631
    },
    "areaServed": {
      "@type": "City",
      "name": "Melbourne"
    },
    "priceRange": "$$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Social Media Advertising Melbourne",
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital"
    },
    "areaServed": {
      "@type": "City",
      "name": "Melbourne"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Social Media Advertising Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Meta Ads Management (Facebook & Instagram)",
            "description": "Full-service Meta Ads management focused on maximizing qualified leads and sales."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Advanced Server-Side Tracking",
            "description": "Implementation of Conversions API for accurate revenue attribution despite iOS updates."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "High-Converting Creative Strategy",
            "description": "Continuous creative testing and refresh to combat ad fatigue."
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
      "name": "Odin Digital"
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
        <title>Social Media Ad Agency Melbourne | Meta Ads Management | Odin Digital</title>
        <meta name="description" content="Melbourne's top Social Media Ad Agency. Stop wasting budget on bad traffic and start generating qualified leads. 540% average ROI. No lock-in contracts. Get your free audit today." />
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

      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <Header />

        {/* Breadcrumb Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 text-sm text-muted-foreground">
          <ol className="flex items-center space-x-2">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li>/</li>
            <li><Link to="/services" className="hover:text-primary">PPC</Link></li>
            <li>/</li>
            <li><Link to="/services" className="hover:text-primary">Social Media</Link></li>
            <li>/</li>
            <li className="text-foreground">Melbourne</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-10 md:py-24">
          {/* Floating decorative circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/10 animate-float"></div>
            <div className="absolute bottom-32 left-20 w-24 h-24 md:w-36 md:h-36 rounded-full bg-accent/10 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary-glow/10 animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-6 md:py-16 text-center">
            <div className="space-y-3 md:space-y-8 animate-slide-up break-words">
              <h1 className="text-[7.5vw] sm:text-4xl md:text-6xl xl:text-7xl font-black text-gray-900 leading-tight tracking-tight break-words px-2 mt-6 md:mt-12">
                Social Media Ad Agency Melbourne
              </h1>
              
              <p className="text-[4vw] sm:text-2xl md:text-4xl font-bold text-gray-800 leading-tight tracking-tight break-words max-w-4xl mx-auto hero-sub-headline px-2">
                Is Your Melbourne Meta Ads Budget Being Wasted on Bad Traffic and Unqualified Leads?
              </p>

              <div className="prose prose-lg mx-auto text-gray-700 max-w-3xl break-words px-2">
                <p className="text-xs sm:text-sm md:text-lg leading-relaxed break-words mb-3">
                  If you're frustrated with wasted ad spend, creative fatigue, and broken tracking, you're not alone. Most Melbourne businesses are bleeding money on Meta Ads that drive clicks but not customers. At Odin Digital, we're a social media advertising company Melbourne that focuses on one thing: driving qualified leads and measurable ROI.
                </p>
                <p className="text-xs sm:text-sm md:text-lg leading-relaxed break-words">
                  We've helped 283+ businesses across Australia transform their social media advertising from a cost centre into a profit centre. No lock-in contracts. No jargon. Just transparent, performance-driven results.
                </p>
              </div>

              <div className="pt-1 px-2">
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="w-full sm:w-auto text-xs sm:text-sm md:text-base whitespace-normal break-words min-h-[48px] px-4"
                >
                  Get Your Free Meta Ads Audit
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Stats */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center shadow-card">
                  <CardContent className="pt-6 px-3">
                    <div className="text-2xl md:text-4xl lg:text-5xl font-black text-primary mb-2 whitespace-nowrap">{stat.number}</div>
                    <div className="text-xs md:text-sm lg:text-base text-muted-foreground whitespace-nowrap">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-10 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12 px-2">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 break-words">
                Why Your Meta Ads Aren't Working
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto break-words">
                These are the most common reasons Melbourne businesses see poor results from their Meta advertising.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl break-words">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed break-words">
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-card flex flex-col">
                  <CardContent className="pt-6 flex-1 flex flex-col">
                    <div className="mb-4 text-primary">
                      <Award className="w-10 h-10" />
                    </div>
                    <p className="text-sm md:text-base italic mb-4 leading-relaxed flex-1">"{testimonial.quote}"</p>
                    <div className="mt-auto">
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12 px-2">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 break-words">
                Our Social Media Advertising Services
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto break-words">
                Comprehensive Meta Ads management for Melbourne businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-base md:text-lg break-words">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs md:text-sm leading-relaxed break-words">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="w-full sm:w-auto min-h-[48px]"
              >
                Get Your Free Meta Ads Audit
              </Button>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                The Odin Digital Difference
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Here's how we solve each of these problems for Melbourne businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {differentiators.map((diff, index) => (
                <Card key={index} className="shadow-card text-center">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">{diff.icon}</div>
                    <h3 className="text-base md:text-lg font-bold mb-2 break-words">{diff.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed break-words">
                      {diff.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Four-Step Process</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                A simple, proven process that delivers consistent results for Melbourne businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="shadow-card relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-base md:text-lg break-words">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed break-words">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Why Melbourne Businesses Choose Odin Digital
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="shadow-card text-center">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">{reason.icon}</div>
                    <h3 className="text-base md:text-lg font-bold mb-2 break-words">{reason.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed break-words">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                We also offer comprehensive <Link to="/services/google-ads" className="text-primary hover:underline">Google Ads</Link> management, <Link to="/services/seo" className="text-primary hover:underline">SEO</Link>, and <Link to="/services/web-design" className="text-primary hover:underline">web design</Link> services to maximize your overall <Link to="/services" className="text-primary hover:underline">digital marketing</Link> ROI.
              </p>
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="w-full sm:w-auto min-h-[48px]"
              >
                Get Your Free Meta Ads Audit
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 md:py-24 bg-white text-center border-t">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 break-words">
              Ready to Stop Wasting Your Meta Ads Budget?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-800 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto break-words">
              Book a free Meta Ads audit with one of our strategists. We'll analyze your current campaigns, identify wasted spend, and show you exactly how we can improve your results.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed break-words">
              No obligation. No jargon. Just honest recommendations from Melbourne's top social media ad agency.
            </p>
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="shadow-glow w-full sm:w-auto min-h-[48px] whitespace-normal break-words text-sm md:text-base px-4 md:px-6"
            >
              Get Your Free Meta Ads Audit
            </Button>
          </div>
        </section>

        {/* Other Cities Links Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
              Social Media Advertising Services in Other Australian Cities
            </h2>
            <p className="text-sm md:text-base text-muted-foreground text-center leading-relaxed">
              We also offer social media advertising services in{" "}
              <Link to="/social-media-advertising-sydney" className="text-primary hover:underline">Sydney</Link>,{" "}
              <Link to="/social-media-ads-brisbane" className="text-primary hover:underline">Brisbane</Link>,{" "}
              <Link to="/social-media-ads-perth" className="text-primary hover:underline">Perth</Link>,{" "}
              <Link to="/social-media-advertising-adelaide" className="text-primary hover:underline">Adelaide</Link>,{" "}
              <Link to="/social-media-ads-canberra" className="text-primary hover:underline">Canberra</Link>, and{" "}
              <Link to="/social-media-ads-gold-coast" className="text-primary hover:underline">Gold Coast</Link>.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 md:px-6">
                  <AccordionTrigger className="text-left text-sm md:text-base font-semibold hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <Footer />
        <div className="hidden md:block">
          <SideTab />
        </div>

        {/* Mobile Sticky CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-3 bg-white border-t shadow-lg z-50">
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => window.location.href = '/contact'}
            className="w-full min-h-[48px] text-xs sm:text-sm font-semibold"
          >
            Get Free Audit →
          </Button>
        </div>
      </div>
    </>
  );
};

export default SocialMediaAdvertisingMelbourne;
