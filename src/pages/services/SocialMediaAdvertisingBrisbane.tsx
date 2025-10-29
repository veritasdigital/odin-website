import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, TrendingUp, Users, Zap, Target, BarChart3, Sparkles, Award, Shield, Linkedin } from "lucide-react";

const SocialMediaAdvertisingBrisbane = () => {
  const { openForm } = useMarketingForm();

  const stats = [
    { number: "$574M+", label: "Verified Client Revenue" },
    { number: "540%", label: "Average ROI on Ad Spend" },
    { number: "95%", label: "Client Retention Rate (No Lock-In Contracts)" },
    { number: "283+", label: "Successful Campaigns Delivered" },
  ];

  const problems = [
    {
      title: "Wasted Ad Spend, Zero Results",
      description: "You're spending thousands a month on Meta ads, but all you're getting are expensive clicks, low engagement, and zero leads in the competitive Brisbane market. Your ad budget is draining fast, and you feel like you're just feeding the social media machine. The problem isn't social media; it's the strategy behind it.",
    },
    {
      title: "Burned by Agencies That Don't Get Brisbane",
      description: "You're tired of working with mainland agencies (Sydney/Melbourne) that apply a one-size-fits-all approach. They don't understand the local market, your customers, or what makes Brisbane unique. You need a local partner with a proven track record of delivering real, measurable results in your city.",
    },
    {
      title: "Zero Transparency and Confusing Reports",
      description: "You get a monthly report filled with jargon—impressions, reach, engagement—but you have no idea what it actually means for your bottom line. Where are the leads? Where's the revenue? It's time for a Brisbane social media advertising agency that provides radical transparency and focuses on the metrics that matter: sales and profit.",
    },
  ];

  const testimonials = [
    {
      quote: "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
      author: "Fabienne Costa",
      company: "Founder, YCL Jewels (Gold Coast)",
    },
    {
      quote: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
      author: "Liam C",
      company: "Founder, Krush Organics (Sydney)",
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
      title: "Meta Ads (Facebook & Instagram) Management",
      description: "We are experts in Meta Ads for the Brisbane market. We go beyond simple boosting to create sophisticated, multi-funnel campaigns that guide local customers from awareness to conversion. We use advanced targeting, compelling creative, and data-driven optimization to deliver a high return on ad spend (ROAS).",
      cta: "Get Your FREE Brisbane Meta Ads Audit →",
    },
    {
      icon: <Linkedin className="w-12 h-12 text-primary" />,
      title: "LinkedIn Advertising",
      description: "For B2B businesses in Brisbane, LinkedIn is the most powerful platform for lead generation. We craft highly targeted campaigns to reach key decision-makers in your industry, driving high-quality leads and building valuable business relationships.",
      cta: "Get Your FREE Brisbane LinkedIn Ads Strategy →",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "TikTok & Pinterest Advertising",
      description: "For e-commerce and consumer brands in Brisbane, TikTok and Pinterest offer massive opportunities for growth. We create engaging, viral-worthy content and targeted ad campaigns that drive brand awareness, website traffic, and sales.",
      cta: "Get Your FREE Brisbane TikTok/Pinterest Ads Strategy →",
    },
  ];

  const differentiators = [
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "No Lock-In Contracts",
      description: "We believe in earning your business, not forcing it. Our flexible, month-to-month agreements mean we're always motivated to deliver results. If you're not happy, you're free to leave. It's that simple.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
      title: "540% Average ROI",
      description: "We don't aim for incremental gains. Our strategies are built on a foundation of data-driven performance that delivers a 540% average ROI on ad spend. We turn your ad budget into a predictable profit centre.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Brisbane Market Expertise",
      description: "We are a Brisbane-based team with deep knowledge of the local market. We understand the nuances of the Brisbane consumer, the competitive landscape, and what it takes to succeed in this city.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-primary" />,
      title: "Radical Transparency",
      description: "We provide clear, concise reports that focus on the metrics that matter: leads, sales, and revenue. You'll always know exactly how your investment is performing and what we're doing to drive profitable growth.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Deep Dive & Strategy",
      description: "We start by getting to know your Brisbane business, your goals, and your ideal local customer. We conduct in-depth audience research, competitor analysis, and creative brainstorming to develop a custom social media advertising strategy tailored to your unique needs.",
    },
    {
      number: "2",
      title: "Campaign Build & Creative Development",
      description: "We build your ad campaigns from the ground up, focusing on a flawless structure, hyper-relevant targeting for the Brisbane area, and high-converting creative (ad copy, images, videos). We handle all aspects of creative production, from concept to execution.",
    },
    {
      number: "3",
      title: "Conversion Rate Optimization (CRO)",
      description: "A great ad is useless without a great landing page or offer. We work with you to ensure your landing pages are optimized for conversion, reducing wasted ad spend and maximizing the return on every click.",
    },
    {
      number: "4",
      title: "Analyze, Report & Refine",
      description: "We continuously monitor your campaign performance, providing you with transparent reports on the metrics that matter: leads, sales, and ROI. We use this data to refine our strategy and ensure we're always driving maximum profitability.",
    },
  ];

  const whyChooseUs = [
    {
      title: "We're Revenue-Focused",
      description: "Likes and shares are great, but revenue is better. Our entire approach is built around driving measurable financial results for your business. We're not satisfied until you see a significant return on your investment.",
    },
    {
      title: "We're Experts in Creative",
      description: "In a saturated social media landscape, creative is king. We have a team of expert copywriters, designers, and videographers who create high-converting ad creative that stops the scroll and drives action.",
    },
    {
      title: "We Leverage Cutting-Edge Technology",
      description: "We use the latest AI-powered tools and technologies to gain a competitive edge in campaign management. By combining the power of artificial intelligence for bidding and optimization with our proven social media strategies, we can deliver faster, more effective results and ensure your budget is spent efficiently.",
    },
    {
      title: "We Have the Results to Prove It",
      description: "With over $574M in verified client revenue and a 95% retention rate, our track record speaks for itself. We've helped hundreds of businesses like yours achieve their growth goals, and we can do the same for you.",
    },
  ];

  const faqs = [
    {
      question: "How much does social media marketing cost in Brisbane?",
      answer: "The cost of social media marketing in Brisbane can vary, but typically ranges from $1,500 to $10,000+ per month for agency management, plus your ad spend. At Odin Digital, we provide a transparent, flat-fee structure after a free audit. We focus on ensuring our fee is an investment that generates a significant, predictable return for your Brisbane business.",
    },
    {
      question: "What is a good ROI for social media advertising in Brisbane?",
      answer: "While benchmarks vary, a good ROI for social media advertising in Brisbane is generally considered to be 3:1 or higher. At Odin Digital, our Brisbane clients achieve an average ROI of 540% (a 5.4:1 ratio) on their ad spend. We achieve this by focusing on high-intent local audiences, compelling creative, and relentless conversion rate optimization.",
    },
    {
      question: "Why are my Facebook and Instagram ads not working in Brisbane?",
      answer: "There are usually three reasons why your social media ads are failing in the competitive Brisbane market: Poor Targeting, Weak Creative, or a Bad Offer/Landing Page. Our free audit will pinpoint the exact reason your ads are underperforming and show you how to fix it.",
    },
    {
      question: "Can you help small businesses in Brisbane with social media advertising?",
      answer: "Absolutely. We specialize in helping small to medium-sized Brisbane businesses achieve significant growth through social media advertising. We understand that Brisbane businesses need to be extremely efficient with their budget. Our strategies focus on hyper-local targeting to ensure your budget is spent only on the most qualified, ready-to-buy customers in your area.",
    },
    {
      question: "Should I hire a Brisbane social media advertising agency or do it myself?",
      answer: "While you can manage your own social media ads, a professional Brisbane agency will save you time, money, and costly mistakes. The social media ad landscape is complex and constantly changing. We have the local expertise to navigate the Brisbane market and ensure your budget is optimized for maximum profitability.",
    },
    {
      question: "Do you have experience working with Brisbane businesses?",
      answer: "Yes, we have extensive experience working with a wide range of Brisbane businesses, from e-commerce brands to local service providers. We understand the unique challenges and opportunities of the Brisbane market and have a proven track record of delivering results for our local clients.",
    },
    {
      question: "Do you also create the ad content (images, videos)?",
      answer: "Yes, we are a full-service social media creative agency. We handle everything from strategy and targeting to creative development and production. Our team of expert copywriters, designers, and videographers will create high-converting ad creative that is on-brand and designed to stop the scroll and drive action.",
    },
    {
      question: "What kind of transparency can I expect?",
      answer: "We offer radical transparency. You will have direct access to your ad accounts, and our monthly reports focus exclusively on the metrics that matter to your business: leads, sales, cost per acquisition (CPA), and return on ad spend (ROAS). We never hide behind vanity metrics like likes, shares, and impressions.",
    },
    {
      question: "Do you offer a free audit of my existing social media ad accounts?",
      answer: "Yes, we offer a FREE, no-obligation social media advertising audit for Brisbane businesses. We will dive deep into your account structure, audience targeting, ad creative, and landing pages. We will identify immediate areas of wasted spend and show you exactly where the biggest opportunities for profit are.",
    },
    {
      question: "What platforms do you specialize in for the Brisbane market?",
      answer: "We are experts in Meta Ads (Facebook and Instagram), which is where we see the best results for most of our Brisbane clients. We also have extensive experience with LinkedIn Advertising for B2B lead generation in the Brisbane professional services sector.",
    },
    {
      question: "How do you track the success of social media campaigns for Brisbane businesses?",
      answer: "We track success using a combination of the Meta Pixel, Google Analytics, and our own proprietary reporting dashboards. We focus on tracking the entire customer journey, from the initial ad click to the final conversion, allowing us to accurately attribute leads and sales to our campaigns.",
    },
    {
      question: "What are the biggest mistakes Brisbane businesses make with social media ads?",
      answer: "The biggest mistakes are: 1) Not having a clear offer; 2) Poor audience targeting; 3) Weak or generic creative; 4) Sending traffic to a non-optimized landing page; and 5) Not tracking conversions properly. We fix all of these issues by implementing a professional, data-driven approach.",
    },
    {
      question: "How long does it take to see results from social media ads in Brisbane?",
      answer: "You can start seeing initial results within days of launching a campaign. However, achieving optimal, highly profitable results in the competitive Brisbane market typically takes 2 to 3 months. This time is crucial for gathering data, refining your audience targeting, and optimizing your sales funnel.",
    },
    {
      question: "Do you offer social media management services in Brisbane?",
      answer: "While our primary focus is on paid social media advertising (which delivers the fastest and most measurable ROI), we do offer social media management services for select clients. Please contact us to discuss your specific needs.",
    },
    {
      question: "Can you help me set up my first social media ad campaign in Brisbane?",
      answer: "Yes, we can handle the entire setup process for your first social media ad campaign. We will launch your campaign with a strong foundation, avoiding the common pitfalls that plague new accounts, and immediately begin the optimization process to drive profitable leads and sales to your Brisbane business.",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://odindigital.com.au",
    "logo": "https://odindigital.com.au/logo.png",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61-1300-123-456",
      "contactType": "sales"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Odin Digital (Brisbane)",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brisbane",
      "addressRegion": "QLD",
      "addressCountry": "AU"
    },
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Social Media Advertising",
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital"
    },
    "areaServed": {
      "@type": "City",
      "name": "Brisbane"
    },
    "description": "Professional social media advertising services in Brisbane, specialising in Meta (Facebook & Instagram) ads to maximise your return on ad spend (ROAS). We focus on high-conversion strategies with no lock-in contracts.",
    "name": "Social Media Ad Agency Brisbane"
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

  return (
    <>
      <Helmet>
        <title>Social Media Ad Agency Brisbane | Odin Digital</title>
        <meta name="description" content="Brisbane's leading social media advertising agency. We deliver a 540% average ROI by turning your ad spend into profit. Get your free Brisbane strategy audit." />
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
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

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
                Social Media Ad Agency Brisbane
              </h1>
              
              <p className="text-[4.5vw] sm:text-2xl md:text-4xl font-bold text-gray-800 leading-tight tracking-tight break-words max-w-4xl mx-auto hero-sub-headline px-2">
                Stop Wasting Money on Social Ads. Start Generating ROI in Brisbane.
              </p>

              <div className="prose prose-lg mx-auto text-gray-700 max-w-3xl break-words px-2">
                <p className="text-sm sm:text-base md:text-xl leading-relaxed break-words mb-4">
                  Tired of social media campaigns that deliver likes and shares but no real business? It's time for a Brisbane social media advertising agency that guarantees a 540% average ROI by focusing on what matters: sales and leads.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words">
                  Let's be honest. The Brisbane market is competitive. You need more than just a pretty feed; you need a data-driven strategy that turns your ad spend into predictable, profitable revenue. At Odin Digital, we specialise in performance-focused social media advertising for Brisbane businesses. We don't care about vanity metrics—we care about leads, sales, and profit. With no lock-in contracts, we earn your business every single month. Ready to see what a real social media strategy can do for your bottom line?
                </p>
              </div>

              <div className="pt-2 px-2">
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="w-full sm:w-auto text-sm sm:text-base whitespace-normal break-words min-h-[48px]"
                >
                  Get Your FREE Brisbane Social Media Ads Strategy Audit →
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
                We're not just making promises; we're delivering verified results.
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
                Does This Sound Familiar? Your Brisbane Social Media Ads Aren't Working.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto break-words">
                You've invested heavily in Facebook and Instagram ads, but the results are nowhere to be found. It's a common frustration for Brisbane businesses.
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
                Social Media Advertising Services for Brisbane Businesses
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto break-words">
                We offer a complete suite of professional social media advertising services to help your Brisbane business generate leads and sales across all major platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 flex flex-col">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-lg md:text-xl lg:text-2xl break-words">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <CardDescription className="text-sm md:text-base leading-relaxed break-words flex-1">
                      {service.description}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      className="w-full whitespace-normal break-words min-h-[48px] text-xs md:text-sm leading-tight py-2"
                      onClick={() => window.location.href = '/contact'}
                    >
                      {service.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                The Odin Digital Difference: Your Brisbane Social Media Ad Agency
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Why choose us as your social media advertising agency in Brisbane? Because we do things differently.
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
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Our Proven 4-Step Social Media Advertising Process
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                We follow a simple, effective process to deliver consistent, measurable results for our Brisbane clients.
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
                Why Choose Odin Digital as Your Brisbane Social Media Advertising Partner?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                You have a lot of choices when it comes to social media ad agencies in Brisbane. Here's why we're the right choice for your business.
              </p>
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
              Ready to Turn Your Social Media into a Profit Machine in Brisbane?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-800 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto break-words">
              Stop wasting money on ineffective social media ads and start investing in a strategy that delivers real, measurable ROI. Let us show you what's possible.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed break-words">
              Take the first step towards unlocking your business's true growth potential. Schedule your FREE, no-obligation Brisbane social media advertising strategy audit with one of our senior strategists today. We'll analyze your current accounts, identify your biggest opportunities, and show you exactly how we can help you achieve a 540% average ROI. What do you have to lose?
            </p>
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="shadow-glow w-full sm:w-auto min-h-[48px] whitespace-normal break-words text-sm md:text-base px-4 md:px-6"
            >
              Get Your FREE Brisbane Social Media Ads Strategy Audit →
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions About Social Media Advertising in Brisbane
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

export default SocialMediaAdvertisingBrisbane;
