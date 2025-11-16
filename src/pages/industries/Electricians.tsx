import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, TrendingUp, Target, Award, Search, MousePointerClick, Smartphone, Users, BarChart3, CheckCircle2, Shield, Clock, FileText, Rocket, Phone, AlertCircle, MapPin, DollarSign, Wrench, Building2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const Electricians = () => {
  const {
    openForm
  } = useMarketingForm();
  const metrics = [{
    number: "$574M+",
    label: "Client Revenue Generated"
  }, {
    number: "95%",
    label: "Client Retention Rate"
  }, {
    number: "340%",
    label: "Average Revenue Growth"
  }, {
    number: "500+",
    label: "Campaigns Managed"
  }];
  const painPoints = [{
    icon: Phone,
    title: "No Emergency Calls",
    description: "Your phone isn't ringing with emergency calls because your marketing isn't targeting the right keywords at the right time. You're invisible when homeowners need you most."
  }, {
    icon: Target,
    title: "Generic Strategy",
    description: "Generic marketing agencies don't understand electrical contractors. They treat you like every other business, missing the urgency, licensing, and trust factors that drive electrical leads."
  }, {
    icon: MapPin,
    title: "No Local Focus",
    description: "Your ads are being shown to people outside your service area, wasting your budget on clicks that will never convert into booked jobs."
  }, {
    icon: BarChart3,
    title: "Vanity Metrics",
    description: "Your agency reports on clicks and impressions, but you care about emergency calls, booked jobs, and revenue. They're measuring the wrong things."
  }, {
    icon: Clock,
    title: "Slow Results",
    description: "SEO takes too long, and your agency isn't running Google Ads to capture immediate emergency calls. You're losing jobs to competitors every single day."
  }, {
    icon: Shield,
    title: "No Trade Knowledge",
    description: "Your agency doesn't understand electrical licensing, insurance requirements, or the difference between residential, commercial, and emergency work. They're guessing."
  }];
  const testimonials = [{
    quote: "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
    author: "Fabienne Costa",
    company: "Founder, YCL Jewels (Gold Coast)"
  }, {
    quote: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
    author: "Liam C",
    company: "Founder, Krush Organics (Sydney)"
  }, {
    quote: "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
    author: "Evan Tsaboukos",
    company: "Founder, Imperial Wealth (Melbourne)"
  }];
  const seoServices = [{
    title: "Emergency Keyword Targeting: Capturing High-Value Urgent Jobs",
    description: "We optimize for high-intent emergency keywords like 'emergency electrician near me,' 'after hours electrician,' and 'electrician urgent' to capture the most profitable jobs when they're searching."
  }, {
    title: "Local SEO: Owning the Google Local 3-Pack",
    description: "We optimize your Google Business Profile, build local citations, and create location-specific content to dominate the Local 3-Pack for your service area."
  }, {
    title: "Service-Specific SEO: Ranking for Your Most Profitable Services",
    description: "We create dedicated landing pages for commercial electrical, residential rewiring, safety switches, and other high-margin services to maximize visibility and conversions."
  }, {
    title: "Technical SEO: Fast, Mobile-Optimized Websites",
    description: "We ensure your website loads instantly on mobile devices, passes Core Web Vitals, and provides a seamless user experience that converts visitors into calls."
  }];
  const googleAdsServices = [{
    title: "Emergency Call Campaigns: Capturing Urgent, High-Value Jobs",
    description: "We run 24/7 Google Search campaigns targeting emergency keywords to capture high-value urgent jobs the moment homeowners search for help."
  }, {
    title: "Geographic Precision: Eliminating Wasted Spend Outside Your Service Area",
    description: "We use radius targeting and suburb-level exclusions to ensure your ads only show to customers within your service area, eliminating geographic waste."
  }, {
    title: "Ad Copy That Converts: Urgency, Trust, and Clear CTAs",
    description: "We write ad copy that emphasizes speed, licensing, insurance, and 24/7 availability to maximize click-through rates and conversion rates."
  }, {
    title: "Call Tracking: Measuring Every Lead and Job",
    description: "We implement advanced call tracking to measure cost per call, cost per booked job, and return on ad spend so you know exactly what's working."
  }];
  const metaAdsServices = [{
    title: "Audience Targeting: Reaching Homeowners and Property Managers",
    description: "We target homeowners, property managers, and commercial property owners based on demographics, location, and behavior to build awareness before they need you."
  }, {
    title: "Creative That Builds Trust: Before/After, Safety, Licensing",
    description: "We create visual content showcasing your work, safety certifications, licensing, and customer testimonials to build trust and credibility."
  }, {
    title: "Full-Funnel Strategy: Building Trust Before the Emergency",
    description: "We use retargeting campaigns to stay top-of-mind so when an emergency happens, your electrical business is the first one they call."
  }];
  const webDesignServices = [{
    title: "Trust-Building Design: Licensing, Insurance, Safety, Reviews",
    description: "We prominently display your electrical license, insurance, safety certifications, and customer reviews to build immediate trust and credibility."
  }, {
    title: "Mobile-First, Click-to-Call Optimization",
    description: "We design mobile-first websites with prominent click-to-call buttons, ensuring emergency calls are just one tap away on mobile devices."
  }, {
    title: "Service Pages That Rank and Convert",
    description: "We create dedicated service pages for emergency electrical, commercial work, rewiring, and other services that rank in search and convert visitors into calls."
  }, {
    title: "SEO-Optimized from Day One",
    description: "Every website we build is optimized for search engines from launch, with fast load times, mobile optimization, and proper technical SEO implementation."
  }];
  const whyChoose = [{
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "We've generated $574M+ in revenue for our clients with a 95% retention rate. Our track record speaks for itself."
  }, {
    icon: FileText,
    title: "No Lock-In Contracts",
    description: "We offer no lock-in contracts. You can cancel at any time with 30 days' notice. We earn your business every month through results."
  }, {
    icon: BarChart3,
    title: "Full Transparency",
    description: "We provide detailed monthly reports showing exactly where your marketing dollars go and what results they generate. No smoke and mirrors."
  }, {
    icon: Zap,
    title: "Trade-Focused Expertise",
    description: "We understand electrical contractors, licensing requirements, and the difference between emergency, residential, and commercial work."
  }, {
    icon: Target,
    title: "Local Market Domination",
    description: "We specialize in dominating local markets through comprehensive SEO, Google Ads, and reputation management strategies."
  }, {
    icon: Rocket,
    title: "Rapid Results & Scale",
    description: "We combine immediate Google Ads results with long-term SEO growth to fill your calendar now while building sustainable lead generation for the future."
  }];
  const faqs = [{
    question: "How much does digital marketing cost for electricians?",
    answer: "Digital marketing for electricians costs vary depending on your service area, competition, and goals. Most electrical contractors invest $2,000 - $8,000 per month for comprehensive marketing (SEO, Google Ads, Meta Ads, website). Our team will provide a detailed quote during your free audit."
  }, {
    question: "How long does it take to see results?",
    answer: "Google Ads delivers immediate results (emergency calls within days). SEO typically takes 3-6 months for significant results. Meta Ads typically show results within 2-4 weeks."
  }, {
    question: "Do you work with small electrical businesses or only large contractors?",
    answer: "We work with electrical contractors of all sizes, from solo sparkies to large commercial contractors, offering flexible pricing and strategies designed to maximize ROI."
  }, {
    question: "How do you measure ROI for electricians?",
    answer: "We implement advanced call tracking and conversion tracking to measure cost per call, cost per booked job, and return on ad spend. You will know exactly how much revenue your marketing is generating."
  }, {
    question: "Do you offer a performance guarantee?",
    answer: "We offer the best guarantee in the industry: No Lock-In Contracts. If we are not delivering a positive ROI, you are free to leave at any time. We put the risk on us, not you."
  }, {
    question: "Can you help with emergency call optimization?",
    answer: "Absolutely. We specialize in emergency keyword targeting, 24/7 ad scheduling, and click-to-call optimization to maximize emergency call volume."
  }, {
    question: "Do you work with commercial electrical contractors?",
    answer: "Yes. We create dedicated campaigns for commercial electrical contractors, including long-tail commercial keywords, LinkedIn advertising, and commercial project lead generation."
  }, {
    question: "How do you handle local service area targeting?",
    answer: "We use hyper-local targeting (suburb-level, radius targeting) to ensure your ads and SEO efforts are focused only on customers within your service area, eliminating geographic waste."
  }, {
    question: "Can you help with Google Local 3-Pack rankings?",
    answer: "Yes. We specialize in Google Business Profile optimization, local citations, review generation, and location-specific content to help you dominate the Local 3-Pack."
  }, {
    question: "Do you understand electrical licensing and compliance?",
    answer: "Yes. We understand the importance of highlighting your electrical license, insurance, safety certifications, and compliance in all marketing materials to build trust and credibility."
  }];
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "Organization",
      "name": "Odin Digital",
      "url": "https://growth-conduit-central.lovable.app/",
      "logo": "https://growth-conduit-central.lovable.app/logo.png",
      "description": "Performance-focused digital marketing agency specializing in electrician SEO, Google Ads, Meta Ads, and web design. $574M+ in client revenue. No lock-in contracts.",
      "founder": {
        "@type": "Person",
        "name": "Lucas Durante"
      },
      "slogan": "No Lock-In Contracts. Just Results.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+61-XXX-XXX-XXX",
        "contactType": "Sales",
        "areaServed": "AU",
        "availableLanguage": "English"
      },
      "sameAs": []
    }, {
      "@type": "Service",
      "serviceType": "Digital Marketing for Electricians",
      "provider": {
        "@type": "Organization",
        "name": "Odin Digital"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "description": "Comprehensive digital marketing services for electrical contractors, including electrician SEO, Google Ads, Meta Ads, and web design, focused on emergency calls and high-value jobs."
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
        "name": "Marketing Services for Electricians",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        }
      },
      "author": {
        "@type": "Person",
        "name": "Fabienne Costa"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
      "publisher": {
        "@type": "Organization",
        "name": "Odin Digital"
      }
    }]
  };
  return <>
      <Helmet>
        <title>Digital Marketing for Electricians | Electrician SEO & Google Ads | Odin Digital</title>
        <meta name="description" content="Stop paying for marketing that doesn't deliver emergency calls. Odin Digital provides electrician SEO, Google Ads, and web design focused on filling your calendar with profitable electrical work." />
        <link rel="canonical" href="https://growth-conduit-central.lovable.app/industries/electricians" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />
      
      <div className="container mx-auto px-4">
        <Breadcrumbs items={[
          { label: "Industries", path: "/industries" },
          { label: "Electricians", path: "/industries/electricians" }
        ]} />
      </div>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-muted/30 to-muted/20">
          {/* Animated background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-muted/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-muted/15 rounded-full blur-3xl animate-float" style={{
            animationDelay: '2s'
          }}></div>
            <div className="absolute top-1/2 left-1/3 w-40 h-40 md:w-64 md:h-64 bg-muted/10 rounded-full blur-3xl animate-float" style={{
            animationDelay: '4s'
          }}></div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent/30 rounded-full animate-float" style={{
            animationDelay: '1s'
          }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{
            animationDelay: '3s'
          }}></div>
          </div>

          <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 mt-12 md:mt-8 text-charcoal">
                Digital Marketing for Electricians
              </h1>
              <p className="hero-sub-headline text-xl md:text-2xl lg:text-3xl font-semibold text-charcoal/90 mb-4 md:mb-6 leading-tight px-2">
                Stop Paying for Marketing That Doesn't Deliver Emergency Calls and High-Value Jobs. Start Dominating Your Local Market with Proven Strategies That Fill Your Calendar with Profitable Work.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-charcoal/70 mb-3 md:mb-4 leading-relaxed px-2">
                The Digital Marketing Agency Electrical Contractors Trust for More Emergency Calls, Commercial Jobs, and Residential Projects.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-charcoal/70 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
                Partner with Odin Digital and Watch Your Electrical Business Scale with Marketing That Actually Drives Revenue, Not Just Website Visits.
              </p>
              <Button size="lg" onClick={openForm} className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg w-full sm:w-auto whitespace-normal break-words">
                Get Your FREE Electrical Contractor Marketing Audit →
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-8 md:py-10 lg:py-12 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {metrics.map((metric, index) => <Card key={index} className="p-3 sm:p-4 md:p-6 text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-primary mb-1 md:mb-2">
                    {metric.number}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground leading-tight">
                    {metric.label}
                  </div>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-10 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-3 md:mb-4 px-2">
                Why Most Marketing Agencies Fail Electrical Contractors
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                Electrical contractors waste millions every year on electrician marketing that looks impressive on paper but delivers nothing to the bottom line. Here's why most agencies fail.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
              {painPoints.map((point, index) => <Card key={index} className="p-4 md:p-6 border-2 hover:border-primary/50 transition-colors">
                  <point.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3" />
                  <h3 className="text-lg md:text-xl font-bold mb-2">{point.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{point.description}</p>
                </Card>)}
            </div>

            <div className="text-center">
              <Button size="lg" onClick={openForm} className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8">
                <span className="hidden sm:inline">Stop the Marketing Bleed: Talk to an Electrical Contractor Marketing Expert →</span>
                <span className="sm:hidden">Talk to a Marketing Expert →</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-10 md:py-12 lg:py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-3 px-2">
                What Our Clients Say
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground px-2">
                We partner with ambitious businesses to deliver measurable growth.
              </p>
            </div>

            <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => <Card key={index} className="p-4 md:p-6 flex flex-col">
                  <div className="flex justify-center mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => <Award key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-yellow-500" />)}
                  </div>
                  <blockquote className="text-sm md:text-base text-charcoal mb-4 leading-relaxed italic flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-xs md:text-sm text-muted-foreground not-italic mt-auto">
                    <strong>{testimonial.author}</strong>, {testimonial.company}
                  </cite>
                </Card>)}
            </div>
          </div>
        </section>

        {/* SEO for Electricians Section */}
        <section className="py-10 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-3 md:mb-4 px-2">
                SEO for Electricians: Dominating "Emergency Electrician Near Me" and Local Searches
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                We build electrician marketing SEO strategies that get your electrical business to Page 1 for the exact searches your ideal customers are using when they need an electrician.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {seoServices.map((service, index) => <Card key={index} className="p-4 md:p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>)}
            </div>

            <div className="text-center">
              <Button size="lg" onClick={openForm} className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white w-full sm:w-auto">
                See Our SEO Packages for Electricians →
              </Button>
            </div>
          </div>
        </section>

        {/* Google Ads for Electricians Section */}
        <section className="py-10 md:py-12 lg:py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-3 md:mb-4 px-2">
                Google Ads for Electricians: Immediate Emergency Calls and High-Value Leads
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                We build Google Ads for electricians campaigns that deliver immediate, high-quality leads while your SEO builds momentum—even in competitive markets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {googleAdsServices.map((service, index) => <Card key={index} className="p-4 md:p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>)}
            </div>

            <div className="text-center">
              <Button size="lg" onClick={openForm} className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white w-full sm:w-auto">
                See Our Google Ads Packages for Electricians →
              </Button>
            </div>
          </div>
        </section>

        {/* Meta Ads for Electricians Section */}
        <section className="py-10 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-3 md:mb-4 px-2">
                Meta Ads (Facebook & Instagram) for Electricians: Building Trust and Awareness
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                We build Facebook Ads for electricians campaigns that build awareness, establish trust, and position you as the go-to electrician before someone needs your services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {metaAdsServices.map((service, index) => <Card key={index} className="p-4 md:p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>)}
            </div>

            <div className="text-center">
              <Button size="lg" onClick={openForm} className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white w-full sm:w-auto">
                See Our Meta Ads Packages for Electricians →
              </Button>
            </div>
          </div>
        </section>

        {/* Web Design for Electricians Section */}
        <section className="py-10 md:py-12 lg:py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-3 md:mb-4 px-2">
                Web Design for Electricians: High-Converting Websites That Drive Calls and Jobs
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                We build electrician website design that positions your electrical business as the trusted local expert and converts visitors into emergency calls and booked jobs at the highest possible rate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {webDesignServices.map((service, index) => <Card key={index} className="p-4 md:p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>)}
            </div>

            <div className="text-center">
              <Button size="lg" onClick={openForm} className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white w-full sm:w-auto">
                See Our Web Design Packages for Electricians →
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-10 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-3 md:mb-4 px-2">
                Why Electrical Contractors Choose Odin Digital
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                We are not a generalist agency that dabbles in trades marketing. We are specialists who understand how to dominate local markets for electrical contractors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((item, index) => <Card key={index} className="p-4 md:p-6 hover:shadow-xl transition-shadow">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>)}
            </div>

            <div className="text-center mt-8">
              <Button size="lg" onClick={openForm} className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white w-full sm:w-auto">
                Talk to an Electrical Contractor Marketing Specialist →
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 md:py-12 lg:py-16 pb-24 md:pb-16 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal mb-3 md:mb-4 px-2">
                FAQs: Your Questions About Electrician Marketing Answered
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-3 md:px-4 lg:px-6">
                  <AccordionTrigger className="text-left text-sm md:text-base font-semibold hover:no-underline py-3 md:py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-muted-foreground pb-3 md:pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-10 md:py-12 lg:py-16 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 px-2 text-slate-50 lg:text-4xl">
              Ready to Stop Losing Emergency Calls and Start Dominating Your Local Market?
            </h2>
            <p className="text-sm md:text-base mb-6 md:mb-8 leading-relaxed px-2 text-slate-50 lg:text-lg">
              Stop settling for marketing that doesn't deliver. Start working with the digital marketing agency for electricians that fills your calendar with emergency calls, commercial contracts, and high-value residential projects.
            </p>
            <Button variant="secondary" size="lg" className="text-sm md:text-base px-6 md:px-8 py-4 md:py-5 bg-white text-primary hover:bg-white/90 w-full sm:w-auto whitespace-normal break-words" onClick={openForm}>
              Claim Your FREE Electrical Contractor Marketing Audit →
            </Button>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-3 md:p-4 bg-white border-t shadow-lg md:hidden z-50">
          <Button className="w-full bg-primary hover:bg-primary/90 text-sm md:text-base whitespace-normal break-words" size="lg" onClick={openForm}>
            Get Free Marketing Audit
          </Button>
        </div>
      </main>

      <Footer />
    </>;
};
export default Electricians;