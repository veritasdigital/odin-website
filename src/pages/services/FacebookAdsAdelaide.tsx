import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  TrendingUp,
  Users,
  Award,
  Zap,
  AlertCircle,
  Target,
  CheckCircle,
  Rocket,
  Search,
  DollarSign,
  Headphones,
  BarChart,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";
import { ServiceHero } from "@/components/ServiceHero";

const FacebookAdsAdelaide = () => {
  const { openForm } = useMarketingForm();

  const metrics = [
    { icon: DollarSign, value: "$574M+", label: "Verified Client Revenue" },
    { icon: TrendingUp, value: "540%", label: "Average ROI on Ad Spend" },
    { icon: Users, value: "95%", label: "Client Retention Rate (No Lock-In)" },
    { icon: Award, value: "283+", label: "Successful Campaigns Delivered" },
  ];

  const problems = [
    {
      icon: AlertCircle,
      title: "The \"Meta Ads Don't Work\" Lie",
      description:
        "You've been told by gurus, agencies, or even your own team that Facebook and Instagram ads are \"dead\" or \"too expensive.\" The truth? It's not the platform; it's the strategy. Poor creative, broken tracking, and generic targeting are the real killers. You need an Adelaide agency that understands the current Meta Ads landscape and can deliver results, not excuses.",
    },
    {
      icon: Target,
      title: "The Low-Quality Lead Trap",
      description:
        "You're getting clicks and even leads, but they're terrible. Unqualified tire-kickers, fake inquiries, and people who ghost you after the first call. Your sales team is wasting time on leads that were never going to convert. You need an agency that focuses on Sales Qualified Leads (SQLs), not vanity metrics.",
    },
    {
      icon: Clock,
      title: "The Black Box Agency",
      description:
        "Your current agency sends you a monthly PDF report full of charts, jargon, and metrics you don't understand. You have no idea what's actually happening with your ad spend, and when you ask questions, you get vague answers. You're locked into a 12-month contract with no clear ROI. You deserve radical transparency and accountability.",
    },
  ];

  const services = [
    {
      icon: Rocket,
      title: "ROI-Driven Campaign Strategy",
      description:
        "We don't just \"run ads.\" We build comprehensive, data-driven Meta Ads strategies designed to maximize your return on ad spend (ROAS). Every campaign is tailored to your business goals, targeting high-intent users who are ready to buy. We focus on sustainable, profitable growth, not just vanity metrics.",
      cta: "Get Your FREE Adelaide Meta Ads Audit →",
    },
    {
      icon: BarChart,
      title: "Creative Testing & Optimization",
      description:
        "Meta Ads fatigue quickly. We run continuous, data-driven creative testing to ensure your ads stay fresh, engaging, and highly effective. We test new ad copy, visuals, formats, and hooks every week to maximize performance and keep your cost per acquisition (CPA) low.",
      cta: "Get Your FREE Adelaide Creative Audit →",
    },
    {
      icon: Search,
      title: "Advanced Tracking & Attribution (Conversion API)",
      description:
        "iOS 14+ updates broke traditional tracking for most advertisers. We implement robust tracking solutions, including the Meta Conversion API (CAPI), to ensure accurate attribution and reporting. You'll know exactly where your leads and sales are coming from, down to the last dollar.",
      cta: "Get Your FREE Adelaide Tracking Audit →",
    },
    {
      icon: Users,
      title: "Full-Funnel Meta Ads Management",
      description:
        "We manage the entire Meta Ads funnel, from top-of-funnel awareness campaigns to bottom-of-funnel retargeting and conversion campaigns. We optimize each stage to guide prospects smoothly from discovery to purchase, maximizing your lifetime customer value (LCV).",
      cta: "Get Your FREE Adelaide Funnel Audit →",
    },
  ];

  const differentiators = [
    {
      icon: TrendingUp,
      title: "540% Average ROI",
      description:
        "We've consistently delivered an average 540% return on ad spend for our clients. Our campaigns are built for profitability, not just clicks. Every dollar you spend is strategically invested to generate maximum revenue.",
    },
    {
      icon: Shield,
      title: "No Lock-In Contracts",
      description:
        "We believe in earning your business every month, not trapping you in long-term contracts. Our flexible, month-to-month agreements mean we're always motivated to deliver exceptional results. If you're not happy, you're free to leave.",
    },
    {
      icon: CheckCircle,
      title: "Radical Transparency",
      description:
        "You'll have full access to your Meta Ads account and live reporting dashboards 24/7. We provide clear, jargon-free explanations of your campaign performance. No smoke and mirrors, no black boxes—just honest, data-driven insights.",
    },
    {
      icon: Headphones,
      title: "Adelaide-Based Expertise",
      description:
        "We understand the Adelaide market, your customers, and your local competitors. We're not a faceless overseas agency or a cookie-cutter franchise. You'll work directly with experienced Adelaide strategists who care about your success.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Free Meta Ads Audit & Strategy Session",
      description:
        "We start with a deep-dive audit of your current Meta Ads campaigns (or your market if you're starting fresh). We analyze your targeting, creative, tracking, and funnel to identify opportunities for improvement. You'll receive a customized Adelaide Meta Ads growth strategy, completely free.",
    },
    {
      number: "02",
      title: "Campaign Setup & Creative Development",
      description:
        "Our team builds your campaign infrastructure from the ground up. We implement advanced tracking (including Conversion API), develop high-converting ad creative, and set up optimized audience targeting. Everything is designed for maximum ROI from day one.",
    },
    {
      number: "03",
      title: "Launch, Monitor & Optimize",
      description:
        "We launch your campaigns and monitor performance daily. We make data-driven optimizations to improve your cost per lead, conversion rate, and ROAS. Our team tests new creative, audiences, and strategies continuously to scale your results.",
    },
    {
      number: "04",
      title: "Transparent Reporting & Scaling",
      description:
        "You'll receive clear, actionable reports that show exactly how your Meta Ads investment is performing. We focus on the metrics that matter: leads, sales, and ROI. As your campaigns prove profitable, we strategically scale your ad spend to grow your business.",
    },
  ];

  const whyChooseUs = [
    {
      icon: TrendingUp,
      title: "We Focus on Sales Qualified Leads, Not Vanity Metrics",
      description:
        "We don't care about likes, shares, or impressions. We care about generating high-quality leads that turn into paying customers. Our campaigns are optimized for the bottom line: your revenue and profit.",
    },
    {
      icon: Zap,
      title: "We're Meta Ads & PPC Specialists",
      description:
        "Meta Ads is all we do. We're not a generalist agency that dabbles in everything. Our team is laser-focused on mastering Facebook and Instagram advertising, which means you get cutting-edge expertise and strategies that work in 2025.",
    },
    {
      icon: DollarSign,
      title: "We Offer Performance-Based Pricing",
      description:
        "Our success is directly tied to yours. We offer transparent, performance-based pricing that aligns our incentives with your business goals. No hidden fees, no surprises—just a clear partnership focused on delivering measurable ROI.",
    },
    {
      icon: Headphones,
      title: "We Provide Ongoing Support & Optimization",
      description:
        "Our relationship doesn't end after launch. We provide continuous optimization, creative testing, and strategic support to ensure your campaigns continue to deliver results month after month. We're your long-term growth partner, not a one-time vendor.",
    },
  ];

  const faqs = [
    {
      question: "Why are my Facebook Ads not working, and how can an Adelaide agency fix them?",
      answer:
        "The common belief that Facebook Ads \"don't work anymore\" is a myth. The reality is that the platform has become more complex, requiring advanced strategy and technical setup. Most campaigns fail due to poor creative, broken tracking, or generic audience targeting. Our Facebook Ads agency Adelaide team specializes in fixing these issues by implementing the Conversion API for accurate tracking, running continuous creative testing, and focusing on high-intent audiences to ensure your budget is spent on quality leads.",
    },
    {
      question: "How do you ensure you deliver high-quality leads, not just clicks?",
      answer:
        "Delivering high-quality leads is our primary focus. We achieve this through two key methods. First, we use advanced targeting and custom audiences to reach only the most qualified prospects. Second, we optimize the entire funnel, including the landing page and ad creative, to pre-qualify the lead before they click. Our reporting focuses on Sales Qualified Leads (SQLs) and Customer Acquisition Cost (CAC), not just clicks or impressions.",
    },
    {
      question: "How much does it cost to hire an Adelaide Facebook Ads management company?",
      answer:
        "The cost to hire an Adelaide Facebook Ads management company varies based on your ad spend and the complexity of your campaigns. We offer transparent, performance-based pricing, typically a percentage of your ad spend. This ensures our success is directly tied to yours. We don't have hidden fees or long-term lock-in contracts. The best way to determine the exact investment is through a free, no-obligation strategy session where we will analyze your goals and provide a custom proposal.",
    },
    {
      question: "What is the Conversion API, and why is it important for my Adelaide business?",
      answer:
        "The Meta Conversion API (CAPI) is a server-side tracking solution that sends conversion data directly from your website server to Meta, bypassing browser-based tracking limitations caused by iOS 14+ updates and ad blockers. This is critical for accurate attribution and campaign optimization. Without CAPI, you're likely under-reporting conversions by 30-50%, which means Meta's algorithm can't optimize effectively. We implement CAPI for all our Adelaide clients to ensure your campaigns have the best data possible.",
    },
    {
      question: "How long does it take to see results from Facebook Ads in Adelaide?",
      answer:
        "Most Adelaide businesses start seeing initial results (leads, traffic, sales) within the first 7-14 days of launching a well-optimized Meta Ads campaign. However, it typically takes 30-60 days to fully optimize the campaign, test creative, and refine targeting for maximum ROI. Meta's algorithm requires time to learn and optimize. We provide weekly updates and are always transparent about what to expect during the ramp-up period.",
    },
    {
      question: "Do you offer month-to-month contracts, or am I locked in for 12 months?",
      answer:
        "We offer flexible, month-to-month contracts with no long-term lock-in. We believe in earning your business every single month by delivering exceptional results. If you're not happy with our service or the results we're generating, you're free to leave at any time. This approach keeps us accountable and ensures we're always focused on your success.",
    },
    {
      question: "What makes you different from other Adelaide Meta Ads agencies?",
      answer:
        "We're different because we focus on three core principles: (1) Radical Transparency—you have full access to your account and live dashboards; (2) No Lock-In Contracts—we earn your business monthly; and (3) ROI Obsession—we care about your bottom line, not vanity metrics. Our 540% average ROI and 95% client retention rate speak for themselves. We're also a local Adelaide team, so you'll work directly with experienced strategists who understand your market.",
    },
    {
      question: "Can you help me with Facebook Ads if I'm just starting out?",
      answer:
        "Absolutely. We work with Adelaide businesses at all stages, from startups launching their first campaign to established brands looking to scale profitably. If you're new to Meta Ads, we'll guide you through the entire process, from strategy and setup to creative development and optimization. We'll ensure your first campaign is built for success from day one.",
    },
    {
      question: "How much should I spend on Facebook Ads per month in Adelaide?",
      answer:
        "The ideal ad spend depends on your business model, goals, and industry. For most Adelaide businesses, we recommend starting with a minimum of $2,000-$5,000 per month in ad spend to allow Meta's algorithm to gather sufficient data and optimize effectively. For e-commerce brands, budgets of $10,000+ per month are common. During your free strategy session, we'll provide a customized budget recommendation based on your specific situation.",
    },
    {
      question: "Do you only run Facebook Ads, or do you also run Instagram Ads?",
      answer:
        "We run both Facebook and Instagram Ads through Meta's unified Ads Manager platform. In fact, most of our campaigns run across both Facebook and Instagram simultaneously to maximize reach and performance. We'll also leverage other Meta placements like Messenger, Audience Network, and Facebook Marketplace when appropriate for your business.",
    },
    {
      question: "What industries do you specialize in for Adelaide Facebook Ads?",
      answer:
        "We have experience managing high-performing Meta Ads campaigns for a wide range of Adelaide industries, including e-commerce, professional services (legal, accounting, financial planning), healthcare and medical clinics, B2B services, education and training, home services (solar, HVAC, construction), and more. Our data-driven approach allows us to quickly adapt to any industry and deliver results.",
    },
    {
      question: "How do you handle ad creative? Do I need to provide my own images and videos?",
      answer:
        "We offer flexible creative solutions. If you have existing brand assets (images, videos, logos), we can optimize and adapt them for Meta Ads. If you don't have creative assets, we can provide guidance on sourcing or creating high-performing ad creative. For an additional fee, we also offer full creative production services, including graphic design, video editing, and copywriting.",
    },
    {
      question: "Will I have access to my Facebook Ads account, or will you control everything?",
      answer:
        "You will always maintain full ownership and access to your Meta Ads account. We operate as an authorized user on your Business Manager, which means you can see everything we're doing in real-time. We believe in radical transparency, and you should never feel locked out of your own advertising account. You can revoke our access at any time.",
    },
    {
      question: "Can you integrate Facebook Ads with my existing marketing efforts (SEO, Google Ads, etc.)?",
      answer:
        "Yes, we specialize in integrated digital marketing strategies. We can coordinate your Meta Ads campaigns with your existing SEO, Google Ads, and web design efforts to create a cohesive, multi-channel growth strategy. In fact, combining Meta Ads with Google Ads and SEO often produces the best overall ROI, as each channel reinforces the others. If you're interested in a comprehensive approach, we offer full-service digital marketing packages.",
    },
    {
      question: "What kind of reporting will I receive, and how often?",
      answer:
        "You'll receive detailed, easy-to-understand reports on a weekly or monthly basis (depending on your preference). Our reports focus on the metrics that matter most to your business: leads generated, cost per lead, conversion rate, ROAS, and total revenue attributed to Meta Ads. You'll also have 24/7 access to live dashboards where you can check your campaign performance at any time. We're always available for calls or meetings to discuss results and strategy.",
    },
    {
      question: "How do I get started with your Adelaide Facebook Ads management services?",
      answer:
        "Getting started is simple. Click the button below to schedule your FREE, no-obligation Meta Ads audit and strategy session. We'll analyze your current situation (or your market if you're new to Meta Ads), identify opportunities, and provide you with a customized growth plan. If we're a good fit, we'll move forward with onboarding and campaign setup. There's no pressure and no obligation. What do you have to lose?",
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
    "name": "Odin Digital - Facebook Ads Agency Adelaide",
    "image": "https://growth-conduit-central.lovable.app/adelaide-facebook-ads.jpg",
    "url": "https://growth-conduit-central.lovable.app/facebook-ads-adelaide",
    "telephone": "+61-1300-123-456",
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
    "serviceType": "Facebook Ads Management Adelaide",
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
      "name": "Facebook Ads Management Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ROI-Driven Campaign Strategy",
            "description": "Building campaigns that target high-intent users and maximize return on ad spend (ROAS)."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Creative Testing & Optimization",
            "description": "Continuous, data-driven creative testing to ensure ads stay fresh and highly effective."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Advanced Tracking & Attribution (Conversion API)",
            "description": "Implementing robust tracking, including Conversion API, for accurate attribution and reporting."
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
        <title>Facebook Ads Agency Adelaide | Meta Ads Management for 540% ROI | Odin Digital</title>
        <meta
          name="description"
          content="Adelaide's top Facebook Ads Agency focused on high-quality leads and sales. 540% average ROI. No lock-in contracts. Get your free audit today."
        />
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

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 sm:py-32">
          {/* Floating circles from homepage */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 mt-12 break-words overflow-wrap-anywhere">
                Facebook Ads Agency Adelaide
              </h1>
              
              <p className="hero-sub-headline text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground break-words overflow-wrap-anywhere">
                Tired of Hearing That Meta Ads "Don't Work Anymore"? You Need an Adelaide Agency Focused on 540% ROI, Not Excuses.
              </p>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto break-words overflow-wrap-anywhere">
                Are you sick of wasting money on Facebook and Instagram ads that deliver low-quality leads, broken tracking, and zero ROI? It's time for a Meta Ads agency in Adelaide that focuses on high-intent audiences, radical transparency, and measurable results.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-3xl mx-auto break-words overflow-wrap-anywhere">
                The myth that "Meta Ads don't work anymore" is costing Adelaide businesses millions in lost revenue. The reality? Meta Ads work incredibly well when you have the right strategy, creative, and tracking in place. At Odin Digital, we specialize in building high-converting Facebook and Instagram ad campaigns that generate Sales Qualified Leads (SQLs) and deliver an average 540% return on ad spend. No lock-in contracts. No vanity metrics. Just transparent, performance-focused Meta Ads management that drives real business growth. Ready to stop believing the lies and start seeing real results?
              </p>

              <Button
                onClick={openForm}
                size="lg"
                className="bg-gradient-primary text-primary-foreground px-8 py-6 text-base sm:text-lg rounded-lg shadow-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 whitespace-normal h-auto"
              >
                Get Your FREE Adelaide Meta Ads Audit →
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              The Proof Is in the Performance
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              We're not just making promises; we're delivering verified results. Here's a snapshot of what our clients have achieved.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                  <metric.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <div className="text-3xl sm:text-4xl font-bold mb-2 text-primary break-words overflow-wrap-anywhere">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground break-words overflow-wrap-anywhere">
                    {metric.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              Does This Sound Familiar? Your Adelaide Meta Ads Aren't Delivering.
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              You're spending money on Facebook and Instagram ads, but you're not seeing the leads, sales, or ROI you were promised. It's a frustrating and expensive problem.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <problem.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 break-words overflow-wrap-anywhere">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground break-words overflow-wrap-anywhere">
                    {problem.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 break-words overflow-wrap-anywhere">
              What Our Clients Say
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-6 flex flex-col">
                <p className="text-muted-foreground mb-4 italic break-words overflow-wrap-anywhere flex-grow">
                  "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with."
                </p>
                <div className="mt-auto">
                  <p className="font-semibold">Fabienne Costa</p>
                  <p className="text-sm text-muted-foreground">Founder, YCL Jewels (Gold Coast)</p>
                </div>
              </Card>

              <Card className="p-6 flex flex-col">
                <p className="text-muted-foreground mb-4 italic break-words overflow-wrap-anywhere flex-grow">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
                </p>
                <div className="mt-auto">
                  <p className="font-semibold">Liam C</p>
                  <p className="text-sm text-muted-foreground">Founder, Krush Organics (Sydney)</p>
                </div>
              </Card>

              <Card className="p-6 flex flex-col">
                <p className="text-muted-foreground mb-4 italic break-words overflow-wrap-anywhere flex-grow">
                  "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month."
                </p>
                <div className="mt-auto">
                  <p className="font-semibold">Evan Tsaboukos</p>
                  <p className="text-sm text-muted-foreground">Founder, Imperial Wealth (Melbourne)</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              Facebook Ads Services for Adelaide Businesses
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              We offer a complete suite of professional Meta Ads management services to help your Adelaide business succeed with Facebook and Instagram advertising.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow flex flex-col">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 break-words overflow-wrap-anywhere">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow break-words overflow-wrap-anywhere">
                    {service.description}
                  </p>
                  <Button
                    onClick={openForm}
                    className="bg-gradient-primary text-primary-foreground shadow-primary hover:shadow-glow w-full whitespace-normal h-auto"
                  >
                    {service.cta}
                  </Button>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center max-w-3xl mx-auto">
              <p className="text-muted-foreground break-words overflow-wrap-anywhere">
                Looking for a comprehensive digital marketing strategy? We also offer{" "}
                <a href="/services/google-ads" className="text-primary hover:underline">Google Ads</a>,{" "}
                <a href="/services/seo" className="text-primary hover:underline">SEO</a>, and{" "}
                <a href="/services/web-design" className="text-primary hover:underline">Web Design</a> services to complement your Meta Ads campaigns.
              </p>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              The Odin Digital Difference: Your Adelaide Meta Ads Agency
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              Why choose us as your Facebook Ads agency in Adelaide? Because we deliver results, not excuses.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentiators.map((diff, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                  <diff.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-lg sm:text-xl font-bold mb-3 break-words overflow-wrap-anywhere">
                    {diff.title}
                  </h3>
                  <p className="text-muted-foreground break-words overflow-wrap-anywhere">
                    {diff.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              Our Proven 4-Step Meta Ads Process
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              We follow a simple, effective process to deliver high-performing Meta Ads campaigns that drive real ROI for our Adelaide clients.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="p-6 hover:shadow-xl transition-shadow h-full">
                    <div className="text-4xl sm:text-5xl font-bold text-primary/20 mb-4 break-words overflow-wrap-anywhere">
                      {step.number}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 break-words overflow-wrap-anywhere">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground break-words overflow-wrap-anywhere">
                      {step.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              Why Choose Odin Digital as Your Adelaide Facebook Ads Partner?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              You have a lot of choices when it comes to Meta Ads agencies in Adelaide. Here's why we're the right choice for your business.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 break-words overflow-wrap-anywhere">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground break-words overflow-wrap-anywhere">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 break-words overflow-wrap-anywhere">
              Ready to Build a High-Converting Meta Ads Strategy in Adelaide?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto break-words overflow-wrap-anywhere">
              Stop wasting money on low-quality leads and broken tracking. It's time to invest in a Meta Ads strategy that delivers measurable ROI.
            </p>
            <p className="text-base text-muted-foreground mb-10 max-w-3xl mx-auto break-words overflow-wrap-anywhere">
              Take the first step towards transforming your Adelaide business with Meta Ads. Schedule your FREE, no-obligation Meta Ads audit and strategy session with one of our senior strategists today. We'll analyze your current campaigns (or your market if you're starting fresh), identify opportunities, and show you exactly how we can help you achieve 540% ROI. What do you have to lose?
            </p>
            <Button
              onClick={openForm}
              size="lg"
              className="bg-gradient-primary text-primary-foreground px-8 py-6 text-base sm:text-lg rounded-lg shadow-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 whitespace-normal h-auto"
            >
              Get Your FREE Adelaide Meta Ads Audit →
            </Button>
          </div>
        </section>

        {/* Other Cities Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 break-words overflow-wrap-anywhere">
              Facebook Ads Services in Other Australian Cities
            </h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto break-words overflow-wrap-anywhere">
              We also provide professional Meta Ads management services in{" "}
              <a href="/meta-ads-sydney" className="text-primary hover:underline">Sydney</a>,{" "}
              <a href="/meta-ads-melbourne" className="text-primary hover:underline">Melbourne</a>,{" "}
              <a href="/meta-ads-perth" className="text-primary hover:underline">Perth</a>,{" "}
              <a href="/meta-ads-brisbane" className="text-primary hover:underline">Brisbane</a>,{" "}
              <a href="/meta-ads-canberra" className="text-primary hover:underline">Canberra</a>, and{" "}
              <a href="/meta-ads-gold-coast" className="text-primary hover:underline">Gold Coast</a>. No matter where you're located, we can help you build high-converting Facebook and Instagram ad campaigns.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 break-words overflow-wrap-anywhere">
              Frequently Asked Questions About Facebook Ads in Adelaide
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left break-words overflow-wrap-anywhere">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground break-words overflow-wrap-anywhere">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t z-50">
          <Button
            onClick={openForm}
            className="w-full bg-gradient-primary text-primary-foreground shadow-primary hover:shadow-glow whitespace-normal h-auto"
            size="lg"
          >
            Get Your Free Audit
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default FacebookAdsAdelaide;
