import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Target, TrendingUp, Users, Calendar, RefreshCw, BarChart3, MapPin, Zap, Shield, Award, Phone } from "lucide-react";

const FacebookAdsDarwin = () => {
  const { openForm } = useMarketingForm();
  const locationInfo = getLocationData("darwin");

  const metrics = [
    { label: "Verified Client Revenue", value: "$574M+", icon: TrendingUp },
    { label: "Average ROI on Ad Spend", value: "540%", icon: BarChart3 },
    { label: "Client Retention Rate", value: "95%", icon: Award },
    { label: "Successful Campaigns Delivered", value: "283+", icon: Zap },
  ];

  const painPoints = [
    {
      title: "Wasting Budget on Tourists",
      description: "Your ads are being shown to short-term visitors and tourists who will never become long-term customers. This inflates your costs and makes your campaigns unprofitable. You need to target genuine Territorians.",
      icon: Target,
    },
    {
      title: "The Seasonal Strategy Nightmare",
      description: "Your marketing is unpredictable. Campaigns that work during the Dry Season (peak tourism) crash and burn during the Wet Season, leading to massive fluctuations in revenue and wasted ad spend.",
      icon: Calendar,
    },
    {
      title: "Creative Fatigue in a Small Market",
      description: "Running the same ads to a smaller, local audience causes people to tune out quickly. Your cost-per-result skyrockets because your creative isn't fresh, locally relevant, or compelling enough to stop the scroll.",
      icon: RefreshCw,
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
      title: "Hyper-Local, Territorian Targeting",
      description: "We use advanced geo-fencing and demographic filters to ensure your ads are seen by genuine Darwin residents and high-value local customers, not just short-term visitors. We focus on reaching the people who will become your long-term, repeat business.",
      icon: MapPin,
    },
    {
      title: "Dynamic Seasonal Ad Management",
      description: "We build a strategy that accounts for the Wet and Dry Seasons. We dynamically shift budget, creative, and messaging to capitalize on peak demand (e.g., tourism, outdoor events) and maintain brand awareness during quieter periods, ensuring consistent, year-round performance.",
      icon: Calendar,
    },
    {
      title: "High-Volume, Localized Creative",
      description: "We combat creative fatigue by constantly testing fresh, locally-relevant ad creative and copy. Our ads feature imagery and language that resonates with the Darwin lifestyle, local landmarks, and the unique Territorian mindset, ensuring maximum engagement and click-through rates.",
      icon: RefreshCw,
    },
    {
      title: "Advanced Conversion Tracking & ROI Proof",
      description: "We implement the Meta Pixel, Offline Conversion Tracking, and Call Tracking to connect your ad spend directly to real-world results—phone calls, bookings, and in-store visits. We provide transparent reports that prove your Return on Ad Spend (ROAS), not just vanity metrics.",
      icon: BarChart3,
    },
  ];

  const whyChoose = [
    {
      title: "Local Market Insight",
      description: "We don't just run ads; we understand the local business landscape, from hospitality and tourism to local services, ensuring your strategy is grounded in Darwin's economic reality.",
      icon: MapPin,
    },
    {
      title: "Creative Fatigue Mitigation",
      description: "Our continuous creative testing process is specifically designed for smaller markets, ensuring your audience never gets bored and your cost-per-result stays low.",
      icon: RefreshCw,
    },
    {
      title: "Budget Protection",
      description: "We aggressively use negative targeting and audience exclusions to filter out non-local traffic, protecting your budget from being wasted on short-term tourists.",
      icon: Shield,
    },
    {
      title: "No Lock-In Contracts",
      description: "We believe our results should keep you with us, not a binding contract. Our 95% client retention rate proves our commitment to long-term, high-value partnerships.",
      icon: Award,
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Local Market Audit & Customer Blueprint",
      description: "We conduct a comprehensive audit of your current Meta Ads performance, local competitors, and target customer demographics in Darwin. We then create a detailed customer acquisition blueprint tailored to your specific business and seasonal needs.",
    },
    {
      number: "02",
      title: "Campaign Build & Creative Launch",
      description: "We build out your campaign structure, implement advanced hyper-local targeting, and launch a high-volume of locally-relevant ad creative designed to stop the scroll and compel immediate action from Territorian customers.",
    },
    {
      number: "03",
      title: "Dynamic Optimization & Seasonal Shift",
      description: "We continuously monitor, test, and refine all campaigns, dynamically shifting budget and creative based on seasonal demand and performance data. We focus on the metrics that matter most: Cost Per Acquisition (CPA) and Return on Ad Spend (ROAS).",
    },
    {
      number: "04",
      title: "Scaling & Expansion",
      description: "Once we establish a profitable and predictable system for customer acquisition in Darwin, we look for opportunities to scale your success into other Northern Territory markets or expand your campaign objectives.",
    },
  ];

  const whyOdin = [
    {
      title: "Local Expertise",
      description: "We are not a generic national agency. We understand the unique challenges of the Darwin market, from the seasonal economy to the local demographics.",
    },
    {
      title: "Cutting-Edge Technology",
      description: "We leverage the latest in Meta's advertising technology and AI-powered optimization to ensure your campaigns are efficient, targeted, and ahead of the curve.",
    },
    {
      title: "Direct Response Copywriting",
      description: "Our team writes ad copy that compels immediate action, using a problem-agitation-solution framework that speaks directly to the needs of the Darwin consumer.",
    },
    {
      title: "Proven Track Record",
      description: "With over $574M+ in verified client revenue and a 95% retention rate, we have the experience and results to back up our claims in the most competitive markets.",
    },
  ];

  const faqs = [
    {
      question: "How quickly can I start seeing results from Facebook Ads in Darwin?",
      answer: "With targeted Meta Ads, we can typically start generating high-quality leads, phone calls, and bookings within 48-72 hours of campaign launch. The key is the initial setup and hyper-local targeting to ensure we hit the right audience immediately.",
    },
    {
      question: "How do you handle the seasonal changes in the Darwin market?",
      answer: "We implement a dynamic seasonal strategy. We build two distinct campaign sets (Wet Season and Dry Season) with different budgets, creative, and messaging. We automatically shift focus and budget to capitalize on peak demand during the Dry Season and maintain cost-effective brand awareness during the Wet Season.",
    },
    {
      question: "How do you ensure my ads are not shown to tourists?",
      answer: "We use advanced audience exclusion techniques, including geo-fencing, demographic filters, and interest-based targeting to exclude short-term visitors and focus exclusively on genuine Darwin residents and long-term customers. This is crucial for protecting your ad budget.",
    },
    {
      question: "Is Facebook or Instagram more effective for Darwin businesses?",
      answer: "Both are essential. Facebook is often better for older demographics and service-based businesses, while Instagram is critical for reaching younger audiences, retail, and hospitality. We run integrated campaigns across both platforms to maximize reach and efficiency.",
    },
    {
      question: "How do you measure the success of my local Darwin campaigns?",
      answer: "We focus on real-world results. We implement the Meta Pixel, Call Tracking, and, where possible, Offline Conversion Tracking to measure phone calls, form submissions, and even in-store visits directly attributed to your ad spend. Our reports focus on your Return on Ad Spend (ROAS).",
    },
    {
      question: "Why does creative fatigue happen faster in Darwin?",
      answer: "Because Darwin is a smaller market, the same ads are shown to the same people more frequently. We combat this by implementing a high-volume creative testing and rotation schedule, ensuring your audience never gets bored and your cost-per-result stays low.",
    },
    {
      question: "Can you help me target specific suburbs in Darwin?",
      answer: "Yes. We can hyper-target specific suburbs like Fannie Bay, Palmerston, or Nightcliff, allowing you to run highly localized promotions or target customers within a specific radius of your physical location.",
    },
    {
      question: "What is the biggest mistake Darwin businesses make with Meta Ads?",
      answer: "The biggest mistake is using a generic, national strategy that doesn't account for the unique seasonal economy and the need for hyper-local targeting. This leads to wasted budget and low conversion rates.",
    },
    {
      question: "Do you manage the creative design and copywriting for the ads?",
      answer: "Yes. Our service is full-service. We handle all aspects of the campaign, including strategic planning, audience targeting, ad creative design, and direct-response copywriting tailored to the Darwin consumer.",
    },
    {
      question: "Do I need a new website to run effective Facebook Ads?",
      answer: "Your website must be fast, mobile-friendly, and conversion-focused. If your current site is slow or difficult to navigate, we can optimize it or build a new one to ensure your ad traffic converts into paying customers.",
    },
    {
      question: "How much should a Darwin business budget for Facebook Ads?",
      answer: "Budget depends on your industry and goals. We work with you to determine a profitable budget based on your target Cost Per Acquisition (CPA) and the size of the local audience we need to reach.",
    },
    {
      question: "Do you require a long-term contract?",
      answer: "No. We operate on a month-to-month basis with no lock-in contracts. Our performance should be the only reason you stay with us.",
    },
    {
      question: "Can you help me promote local Darwin events or sales?",
      answer: "Absolutely. Meta Ads are perfect for promoting time-sensitive local events, sales, and special offers, allowing us to drive immediate foot traffic or bookings.",
    },
    {
      question: "How do you ensure your ad copy resonates with the 'Territorian' mindset?",
      answer: "We use language, themes, and imagery that are familiar and relevant to the local culture, avoiding generic national clichés. This builds instant rapport and trust with the local audience.",
    },
    {
      question: "How do we get started with Odin Digital?",
      answer: "The first step is a free, no-obligation Darwin Meta Ads Strategy Session. We'll audit your current performance and provide a clear roadmap for attracting more high-value, local customers.",
    },
  ];

  // Schema Markup
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://odindigital.com.au",
    "logo": "https://odindigital.com.au/odin-logo.png",
    "description": "Digital marketing agency specialising in Facebook Ads, SEO, Google Ads, and Web Design",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Australia",
      "addressCountry": "AU"
    },
    "sameAs": [
      "https://www.facebook.com/odindigital",
      "https://www.linkedin.com/company/odindigital",
      "https://www.instagram.com/odindigital"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    "name": "Odin Digital - Darwin Facebook Ads Services",
    "description": "Local Facebook Ads agency in Darwin specialising in hyper-local targeting, seasonal ad management, and high-ROI campaigns for Northern Territory businesses",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Darwin",
      "addressRegion": "NT",
      "addressCountry": "AU"
    },
    "url": "https://odindigital.com.au/facebook-ads-darwin",
    "areaServed": {
      "@type": "City",
      "name": "Darwin"
    },
    "priceRange": "$$"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facebook Ads Management in Darwin",
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital"
    },
    "description": "Customised Facebook and Instagram advertising services for Darwin businesses, including hyper-local targeting, seasonal ad management, and advanced conversion tracking",
    "areaServed": {
      "@type": "City",
      "name": "Darwin"
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

  return (
    <>
      <Helmet>
        <title>Facebook Ads Darwin | Stop Wasting Budget on Tourists - Odin Digital</title>
        <meta name="description" content="Attract high-value, local Territorian customers with Darwin's most precise Meta Ads strategy. We specialize in seasonal targeting and high-ROI campaigns." />
        <link rel="canonical" href="https://odindigital.com.au/services/facebook-ads-darwin" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />
      <SideTab />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero py-20 px-4">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Large gradient blobs */}
            <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
            
            {/* Floating circles from homepage */}
            <div className="absolute top-[15%] left-[10%] w-3 h-3 bg-primary rounded-full animate-float opacity-60" />
            <div className="absolute top-[25%] right-[15%] w-2 h-2 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
            <div className="absolute top-[60%] left-[20%] w-4 h-4 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }} />
            <div className="absolute bottom-[20%] right-[25%] w-3 h-3 bg-primary rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }} />
            <div className="absolute top-[40%] right-[8%] w-2 h-2 bg-secondary rounded-full animate-float opacity-60" style={{ animationDelay: '4s' }} />
            <div className="absolute bottom-[35%] left-[15%] w-3 h-3 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '1.5s' }} />
            
            {/* Gradient rings */}
            <div className="absolute top-[20%] right-[10%] w-64 h-64 border border-primary/20 rounded-full animate-pulse" />
            <div className="absolute bottom-[15%] left-[5%] w-80 h-80 border border-secondary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Floating particles */}
            <div className="absolute top-[30%] left-[25%] w-1 h-1 bg-primary rounded-full animate-float opacity-80" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-[50%] right-[30%] w-1 h-1 bg-secondary rounded-full animate-float opacity-70" style={{ animationDelay: '2.5s' }} />
            <div className="absolute bottom-[40%] left-[40%] w-1 h-1 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: '3.5s' }} />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10 px-4">
            <div className="text-center space-y-6 md:space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mt-12">
                Facebook Ads Darwin
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 max-w-4xl mx-auto leading-relaxed hero-sub-headline">
                Stop Wasting Ad Spend on Tourists. Attract High-Value, Local Territorian Customers with Darwin's Most Precise Meta Ads Strategy.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Darwin is a unique market. Your advertising needs to understand the seasonal shifts, the local culture, and the high cost of living. We build Meta Ads campaigns that cut through the noise, target genuine Territorian customers, and deliver a predictable flow of sales and bookings.
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                At Odin Digital, we know that generic Facebook Ads strategies fail in the Northern Territory. They waste budget on tourists, ignore the seasonal economy, and quickly suffer from creative fatigue in a smaller market. We are Darwin specialists. Our approach is built on hyper-local targeting, dynamic seasonal ad management, and locally-relevant creative that resonates with the Territorian mindset. We turn your Meta Ads budget into a reliable source of high-quality, local customers.
              </p>
              <Button 
                onClick={openForm}
                size="lg" 
                className="bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-base md:text-lg px-6 py-6 md:px-8 w-full md:w-auto whitespace-normal break-words"
              >
                Schedule Your FREE Darwin Meta Ads Strategy Session →
              </Button>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 px-4 bg-card">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              The Proof Is in the Performance
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We partner with high-calibre businesses across Australia, including those in unique, local markets like Darwin, to deliver measurable, high-ROI growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <Card key={index} className="p-6 text-center border-border hover:shadow-card transition-all duration-300 hover:scale-105 bg-background">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <div className="text-4xl font-bold text-foreground mb-2">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              The Darwin Meta Ads Pain Points We Solve
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              The Darwin market presents unique challenges. We solve the core problems that prevent local businesses from achieving predictable growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {painPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <Card key={index} className="p-8 border-l-4 border-l-primary hover:shadow-card transition-all duration-300 bg-card">
                    <Icon className="w-12 h-12 mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-4 text-foreground">{point.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              What Our Professional Clients Say
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We partner with high-performing professionals who demand results and discretion. Here's what they're saying about our partnership.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 hover:shadow-card transition-all duration-300 bg-card flex flex-col justify-between">
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Our Darwin-First Meta Ads Service
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We don't run generic campaigns. We build a Meta Ads strategy that is custom-engineered for the unique economy and demographics of Darwin and the Northern Territory.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-8 border-l-4 border-l-secondary hover:shadow-card transition-all duration-300 bg-card">
                    <Icon className="w-12 h-12 mb-4 text-secondary" />
                    <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <Button 
                onClick={openForm}
                size="lg" 
                className="bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-base md:text-lg px-6 md:px-8 w-full md:w-auto whitespace-normal break-words"
              >
                Schedule Your FREE Darwin Meta Ads Strategy Session →
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Why Odin Digital is Darwin's Meta Ads Specialist
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We understand the local economy, the seasonal shifts, and the unique challenges of advertising in the Northern Territory.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChoose.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-card transition-all duration-300 bg-card">
                    <Icon className="w-12 h-12 mb-4 text-accent" />
                    <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Our 4-Step Predictable Customer Acquisition Process
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We follow a strategic process designed to deliver a steady, high-quality stream of local Darwin customers.
            </p>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="p-8 border-l-4 border-l-primary hover:shadow-card transition-all duration-300 bg-card">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl font-bold text-primary/30">{step.number}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Odin Digital Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Why Choose Odin Digital for Your Darwin Facebook Ads?
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We are obsessed with your business growth. Our focus is on turning your Meta Ads budget into a predictable source of high-quality, local customers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyOdin.map((item, index) => (
                <Card key={index} className="p-8 border-l-4 border-l-accent hover:shadow-card transition-all duration-300 bg-card">
                  <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-hero">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Attract High-Value, Local Darwin Customers?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Stop wasting budget on tourists and start attracting the genuine Territorian customers who will become your long-term business.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Schedule your free, no-obligation Darwin Meta Ads Strategy Session today. We'll show you the exact roadmap to dominate your local market and maximize your profitability.
            </p>
            <Button 
              onClick={openForm}
              size="lg" 
              className="bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-base md:text-lg px-6 py-6 md:px-8 w-full md:w-auto whitespace-normal break-words"
            >
              Schedule Your FREE Darwin Meta Ads Strategy Session →
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Frequently Asked Questions About Facebook Ads in Darwin
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-40">
          <Button 
            onClick={openForm}
            className="w-full bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 text-sm whitespace-normal break-words"
            size="lg"
          >
            <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="line-clamp-2">Book Free Strategy Session</span>
          </Button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default FacebookAdsDarwin;