import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, TrendingUp, Users, Zap, Target, BarChart3, Sparkles, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const SocialMediaAdvertisingAdelaide = () => {
  const { openForm } = useMarketingForm();

  const stats = [
    { number: "$574M+", label: "Verified Client Revenue" },
    { number: "540%", label: "Average ROI on Ad Spend" },
    { number: "95%", label: "Client Retention Rate" },
    { number: "283+", label: "Successful Campaigns Delivered" },
  ];

  const problems = [
    {
      title: "Bad Traffic from Meta Ads",
      description: "You're getting clicks, but they're from the wrong people. Your Meta Ads are attracting tire-kickers, not buyers. Your CPA is sky-high, and your ROAS is embarrassingly low. The targeting is broken, and you're essentially training Meta's AI on bad data, making the problem worse every day.",
    },
    {
      title: "Creative Fatigue Is Killing Your Campaigns",
      description: "Your ads worked for a week, maybe two. Now they're stale. Your CTR is dropping, your CPM is rising, and you don't have the design resources or time to constantly create new, scroll-stopping creative. You're stuck running the same tired ads and watching your performance decline.",
    },
    {
      title: "Broken Tracking & Attribution",
      description: "Since iOS 14.5, your tracking has been a mess. You can't accurately attribute sales to your Meta Ads. Your conversion data is incomplete, your retargeting is broken, and you have no idea if your campaigns are actually profitable. You're flying blind, and it's costing you money every single day.",
    },
  ];

  const testimonials = [
    {
      quote: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
      author: "Liam C",
      company: "Founder, Krush Organics (Sydney)",
    },
    {
      quote: "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
      author: "Fabienne Costa",
      company: "Founder, YCL Jewels (Gold Coast)",
    },
    {
      quote: "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
      author: "Evan Tsaboukos",
      company: "Founder, Imperial Wealth (Melbourne)",
    },
  ];

  const services = [
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Meta Ads Management (Facebook & Instagram)",
      description: "Full-service Meta Ads management focused on maximizing qualified leads and sales. We handle everything from campaign strategy and ad creation to daily optimization and performance reporting.",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Advanced Server-Side Tracking",
      description: "Implementation of Conversions API for accurate revenue attribution despite iOS updates. We ensure your tracking is bulletproof so you can make data-driven decisions with confidence.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "High-Converting Creative Strategy",
      description: "Continuous creative testing and refresh to combat ad fatigue. Our in-house design team produces scroll-stopping ads that drive action and keep your campaigns performing at peak levels.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Conversion Rate Optimization",
      description: "We optimize your entire funnel, from ad to landing page, ensuring every dollar of ad spend generates maximum return. Our CRO strategies have helped clients double their conversion rates.",
    },
  ];

  const differentiators = [
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: "540% Average ROI",
      description: "We don't aim for incremental gains. Our strategies deliver a 540% average return on ad spend by focusing on qualified traffic and relentless optimization.",
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "No Lock-In Contracts",
      description: "We earn your business every single month. No lock-in contracts means we're accountable for delivering results, not just collecting retainers.",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
      title: "Radical Transparency",
      description: "You'll have direct access to your ad accounts and receive clear reports focused on leads, sales, and revenue—not vanity metrics.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Adelaide-Based Expertise",
      description: "We understand the Adelaide market and have helped dozens of local businesses achieve massive growth through strategic Meta Ads campaigns.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Free Strategy Audit",
      description: "We analyze your current Meta Ads accounts, identify wasted spend, and show you exactly where the biggest opportunities are. No obligation, just actionable insights.",
    },
    {
      number: "2",
      title: "Custom Campaign Strategy",
      description: "We build a custom Meta Ads strategy tailored to your business goals, target audience, and budget. This includes campaign structure, audience targeting, and creative direction.",
    },
    {
      number: "3",
      title: "Implementation & Tracking Setup",
      description: "We implement your campaigns with bulletproof tracking (Conversions API), create high-converting ad creative, and set up performance dashboards for complete transparency.",
    },
    {
      number: "4",
      title: "Continuous Optimization & Reporting",
      description: "We monitor performance daily, test new creative weekly, and provide monthly reports showing your exact ROI. We refine and scale what works, and cut what doesn't.",
    },
  ];

  const whyChooseUs = [
    {
      title: "We're Revenue-Focused, Not Vanity Metric-Focused",
      description: "Likes and shares are great, but revenue is better. Our entire approach is built around driving measurable financial results for your business.",
    },
    {
      title: "We Fix Broken Tracking First",
      description: "Most agencies ignore tracking. We don't. We implement server-side tracking (Conversions API) to ensure accurate attribution and retargeting, even with iOS privacy changes.",
    },
    {
      title: "We're Creative Powerhouses",
      description: "Creative is king on Meta. Our in-house design team produces fresh, scroll-stopping ads that combat fatigue and keep your campaigns profitable long-term.",
    },
    {
      title: "We Have the Results to Prove It",
      description: "With over $574M in verified client revenue and a 95% retention rate, our track record speaks for itself. We've helped hundreds of businesses achieve their growth goals.",
    },
  ];

  const faqs = [
    {
      question: "Why should I hire a social media ad agency Adelaide instead of managing Meta Ads myself?",
      answer: "While managing your own Meta Ads can seem simple, the platform's complexity, constant algorithm changes, and the need for continuous creative testing make it a full-time job. A professional social media ad agency Adelaide firm like Odin Digital has the expertise, tools, and time to manage your campaigns for maximum profitability. We spot costly mistakes, implement advanced server-side tracking, and optimize for conversion data, not just clicks. Our team's singular focus is on achieving a high ROI, which is why our clients see a 540% average return. Hiring us isn't an expense; it's an investment that frees up your time and ensures your budget is working as hard as possible to generate qualified leads and sales.",
    },
    {
      question: "What is the difference between a social media advertising company Adelaide and a social media marketing company?",
      answer: "A social media marketing company often focuses on organic content, community management, and brand awareness. A social media advertising company Adelaide, like Odin Digital, focuses on paid advertising (Meta Ads, TikTok Ads, etc.) to drive immediate, measurable results like leads and sales. We are a social media lead generation agency Adelaide, meaning our priority is your direct return on ad spend (ROAS), not vanity metrics like likes and shares.",
    },
    {
      question: "How much does it cost to hire a digital marketing agency ads Adelaide?",
      answer: "The cost to hire a digital marketing agency ads Adelaide can vary widely, but our pricing is based on a percentage of your ad spend, ensuring our success is directly tied to yours. We don't offer cheap, fixed-price packages because they rarely work. Our custom strategies are built to deliver maximum ROI, not minimum cost. The best way to determine the exact investment is through a free strategy session. We'll analyze your goals and current spend, and provide a transparent proposal that details both the management fee and the expected return, ensuring you see us as a profit centre, not a cost.",
    },
    {
      question: "What is the average ROI for Meta Ads in Adelaide?",
      answer: "The industry benchmark for Meta Ads ROI is around 122%, but we believe you deserve much better. At Odin Digital, our Adelaide clients achieve an average ROI of 540% (a 5.4:1 ratio) on their ad spend. We achieve this through sophisticated targeting, high-converting creative, server-side tracking implementation, and relentless conversion rate optimization.",
    },
    {
      question: "How long does it take to see results from social media advertising Adelaide campaigns?",
      answer: "You can start seeing initial results (clicks, engagement) within days of launching a campaign. However, achieving optimal, highly profitable results typically takes 2 to 3 months. This time is crucial for gathering conversion data, refining your audience targeting, A/B testing creative, and optimizing your sales funnel. Meta's algorithm needs time to learn, and we need time to identify what works best for your specific business.",
    },
    {
      question: "Do you offer other digital marketing services beyond social media advertising Adelaide?",
      answer: "Yes, we are a full-service digital marketing agency. Beyond social media advertising, we specialize in Google Ads, SEO, and web design. Our integrated approach ensures all your marketing channels work together to maximize your overall ROI.",
    },
    {
      question: "What makes Odin Digital different from other Adelaide social media advertising agencies?",
      answer: "We offer radical transparency, no lock-in contracts, and a proven 540% average ROI. We're not interested in long-term contracts that lock you in regardless of performance. We earn your business every single month by delivering measurable results. Our Adelaide-based team understands the local market and has a track record of helping businesses like yours achieve massive growth.",
    },
    {
      question: "Do you work with small businesses in Adelaide?",
      answer: "Absolutely. We specialize in helping small to medium-sized Adelaide businesses achieve significant growth through strategic Meta Ads campaigns. We understand that small businesses need to be extremely efficient with their budget, which is why our strategies focus on maximizing qualified leads and sales, not vanity metrics.",
    },
    {
      question: "How do you handle creative for Meta Ads campaigns?",
      answer: "We have an in-house creative team that produces high-converting ad creative specifically designed for Meta platforms. We continuously test new creative to combat ad fatigue and keep your campaigns performing at peak levels. Creative is the #1 factor in Meta Ads success, and we treat it as such.",
    },
    {
      question: "What is server-side tracking and why is it important?",
      answer: "Server-side tracking (Conversions API) sends conversion data directly from your server to Meta, bypassing browser limitations like iOS privacy changes. This ensures accurate attribution, better retargeting, and more reliable campaign optimization. Without it, you're flying blind. We implement Conversions API for all our clients to ensure bulletproof tracking.",
    },
    {
      question: "Do you offer a free audit of my existing Meta Ads accounts?",
      answer: "Yes, we offer a FREE, no-obligation Meta Ads audit for Adelaide businesses. We'll dive deep into your account structure, audience targeting, ad creative, and tracking setup. We'll identify immediate areas of wasted spend and show you exactly where the biggest opportunities for profit are. This audit is performed by a senior strategist and will provide you with actionable insights, regardless of whether you decide to partner with us.",
    },
    {
      question: "What kind of businesses do you work with in Adelaide?",
      answer: "We work with a wide range of Adelaide businesses, from e-commerce stores to service providers, B2B companies, and local retailers. If you have a product or service to sell and want to generate qualified leads or sales profitably, we can help.",
    },
    {
      question: "How do you measure success for social media advertising Adelaide campaigns?",
      answer: "We measure success using the metrics that matter to your business: leads, sales, cost per acquisition (CPA), and return on ad spend (ROAS). We track the entire customer journey using Meta Pixel and Conversions API, and provide you with clear, easy-to-understand reports that show exactly how your investment is performing.",
    },
    {
      question: "What platforms do you advertise on?",
      answer: "We specialize in Meta Ads (Facebook and Instagram), which is where we see the best results for most Adelaide businesses. However, we also have experience with TikTok Ads, LinkedIn Ads, and Google Ads. We'll recommend the best platforms for your business based on your specific goals and target audience.",
    },
    {
      question: "Do you require a minimum ad spend?",
      answer: "We typically recommend a minimum monthly ad spend of $3,000 to $5,000 to achieve meaningful results with Meta Ads. This ensures we have enough data to optimize campaigns effectively and generate a significant return. If your budget is lower, we'll be transparent about what's realistic and help you plan for growth.",
    },
    {
      question: "Can you help if my Meta Ads account has been banned or restricted?",
      answer: "Yes, we have extensive experience dealing with Meta Ads account restrictions and bans. We can help you understand why it happened, appeal the decision, and implement best practices to prevent future issues. In many cases, we can get your account reinstated and back to running profitable campaigns.",
    },
  ];

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
    "@type": "ProfessionalService",
    "name": "Odin Digital - Social Media Ad Agency Adelaide",
    "image": "https://growth-conduit-central.lovable.app/adelaide-social-ads.jpg",
    "url": "https://growth-conduit-central.lovable.app/social-media-advertising-adelaide",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Adelaide",
      "addressRegion": "SA",
      "postalCode": "5000",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -34.9285,
      "longitude": 138.6007
    },
    "areaServed": {
      "@type": "City",
      "name": "Adelaide"
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
    "serviceType": "Social Media Advertising Adelaide",
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital"
    },
    "areaServed": {
      "@type": "City",
      "name": "Adelaide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Social Media Advertising Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
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
        <title>Social Media Ad Agency Adelaide | Meta Ads Management | Odin Digital</title>
        <meta name="description" content="Adelaide's top Social Media Ad Agency. Stop wasting budget on bad traffic and start generating qualified leads. 540% average ROI. No lock-in contracts. Get your free audit today." />
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

      <div className="min-h-screen bg-background">
        <Header />

        {/* Breadcrumbs */}
        <div className="bg-muted/30 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <span>/</span>
              <Link to="/services/social-media" className="hover:text-primary transition-colors">Social Media</Link>
              <span>/</span>
              <span className="text-foreground">Adelaide</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-12 md:py-24">
          {/* Floating decorative circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/10 animate-float"></div>
            <div className="absolute bottom-32 left-20 w-24 h-24 md:w-36 md:h-36 rounded-full bg-accent/10 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary-glow/10 animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-16 text-center">
            <div className="space-y-4 md:space-y-8 animate-slide-up break-words">
              <h1 className="text-[8vw] sm:text-4xl md:text-6xl xl:text-7xl font-black text-gray-900 leading-tight tracking-tight break-words px-2 mt-8 md:mt-12">
                Social Media Ad Agency Adelaide
              </h1>
              
              <p className="text-[4.5vw] sm:text-2xl md:text-4xl font-bold text-gray-800 leading-tight tracking-tight break-words max-w-4xl mx-auto hero-sub-headline px-2">
                Tired of Your Meta Ads Budget Training AI and Delivering Zero Qualified Leads?
              </p>

              <div className="prose prose-lg mx-auto text-gray-700 max-w-3xl break-words px-2">
                <p className="text-sm sm:text-base md:text-xl leading-relaxed break-words mb-4">
                  Most Adelaide businesses are wasting thousands on Meta Ads that attract the wrong people. Your budget is training Meta's AI on bad data, making your campaigns worse every day. It's time to stop the bleeding.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words">
                  At Odin Digital, we're Adelaide's most results-driven social media ad agency. We deliver a 540% average ROI by focusing on qualified traffic, server-side tracking, and continuous creative testing. No lock-in contracts. No vanity metrics. Just measurable, profitable growth.
                </p>
              </div>

              <div className="pt-2 px-2">
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="w-full sm:w-auto text-sm sm:text-base whitespace-normal break-words min-h-[48px]"
                >
                  Get Your FREE Meta Ads Audit →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">The Proof Is in the Performance</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                We're not just making promises; we're delivering verified results for Adelaide businesses.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center shadow-card">
                  <CardContent className="pt-6">
                    <div className="text-3xl md:text-5xl font-black text-primary mb-2">{stat.number}</div>
                    <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12 px-2">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 break-words">
                Does This Sound Familiar? Your Meta Ads Aren't Working.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto break-words">
                You're investing in Meta Ads, but you're not seeing the results you need. It's frustrating, and it's costing you money.
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
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what business owners are saying about working with Odin Digital.
              </p>
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
                Social Media Advertising Services for Adelaide Businesses
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto break-words">
                We offer a complete suite of social media advertising services designed to turn your ad spend into predictable, profitable growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 flex flex-col">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-lg md:text-xl lg:text-2xl break-words">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-sm md:text-base leading-relaxed break-words">
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
                Get Your FREE Strategy Session →
              </Button>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Why Choose Odin Digital as Your Adelaide Social Media Ad Agency?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                We're not like other agencies. Here's what makes us different.
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
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Proven 4-Step Process</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                We follow a simple, effective process to deliver consistent, measurable results for Adelaide businesses.
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
                Why Adelaide Businesses Choose Odin Digital
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 break-words">{reason.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed break-words">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 md:py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 break-words">
              Ready to Stop Wasting Money on Bad Traffic?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-800 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto break-words">
              Stop training Meta's AI on unqualified leads and start investing in a strategy that delivers real, measurable ROI. Let us show you what's possible.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed break-words">
              Take the first step towards unlocking your business's true growth potential. Schedule your FREE, no-obligation Meta Ads audit with one of our senior strategists today. We'll analyze your current campaigns, identify wasted spend, and show you exactly how we can help you achieve a 540% average ROI.
            </p>
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="shadow-glow w-full sm:w-auto min-h-[48px] whitespace-normal break-words text-sm md:text-base px-4 md:px-6"
            >
              Get Your FREE Meta Ads Audit →
            </Button>
          </div>
        </section>

        {/* Other Cities Section */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Social Media Advertising Services in Other Australian Cities
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We also provide expert social media advertising services in{" "}
                <Link to="/social-media-ads-sydney" className="text-primary hover:underline">Sydney</Link>,{" "}
                <Link to="/social-media-ads-melbourne" className="text-primary hover:underline">Melbourne</Link>,{" "}
                <Link to="/social-media-ads-brisbane" className="text-primary hover:underline">Brisbane</Link>,{" "}
                <Link to="/social-media-ads-perth" className="text-primary hover:underline">Perth</Link>,{" "}
                <Link to="/social-media-ads-canberra" className="text-primary hover:underline">Canberra</Link>, and{" "}
                <Link to="/social-media-ads-gold-coast" className="text-primary hover:underline">Gold Coast</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions About Social Media Advertising Adelaide
              </h2>
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
            className="w-full min-h-[48px] text-sm font-semibold"
          >
            Get FREE Audit →
          </Button>
        </div>
      </div>
    </>
  );
};

export default SocialMediaAdvertisingAdelaide;
