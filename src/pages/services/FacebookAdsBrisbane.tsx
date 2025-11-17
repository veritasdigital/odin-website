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
  DollarSign,
  AlertCircle,
  Target,
  CheckCircle,
  Rocket,
  Search,
  Headphones,
  BarChart,
  Shield,
  Zap,
  RefreshCcw,
  MessageSquare,
  ShoppingCart,
  Clock,
  ArrowRight,
} from "lucide-react";
import { ServiceHero } from "@/components/ServiceHero";
import { RelatedLocations } from "@/components/RelatedLocations";
import { getRelatedLocations } from "@/utils/contentClusters";

const FacebookAdsBrisbane = () => {
  const { openForm } = useMarketingForm();

  const metrics = [
    { icon: DollarSign, value: "$574M+", label: "Revenue Generated" },
    { icon: TrendingUp, value: "540%", label: "Average ROI" },
    { icon: Users, value: "95%", label: "Client Retention" },
    { icon: Award, value: "283+", label: "Happy Clients" },
  ];

  const problems = [
    {
      icon: AlertCircle,
      title: "Low-Quality Leads That Don't Convert",
      description:
        "You're getting clicks and even leads, but they're terrible. Tire-kickers, fake inquiries, and people who ghost you. Your sales team is wasting time on leads that were never going to convert.",
    },
    {
      icon: Shield,
      title: "Lack of Transparency and Reporting",
      description:
        "Your agency sends a monthly PDF report full of charts you don't understand. You have no idea what's actually happening with your ad spend. When you ask questions, you get vague answers.",
    },
    {
      icon: DollarSign,
      title: "High Cost Per Lead",
      description:
        "You're spending thousands on Facebook ads but your cost per lead is through the roof. You know something's wrong but you don't know how to fix it. You're bleeding money.",
    },
    {
      icon: Clock,
      title: "Slow Response and Poor Communication",
      description:
        "Your account manager takes days to respond. You feel like just another client number. They don't understand your business or your goals. You're frustrated and feeling ignored.",
    },
    {
      icon: Target,
      title: "No Conversion Focus or Strategy",
      description:
        "Your agency is running ads but there's no real strategy. No conversion tracking. No optimisation. They're just throwing money at Facebook and hoping something sticks.",
    },
    {
      icon: Zap,
      title: "Generic, One-Size-Fits-All Approach",
      description:
        "Your agency uses the same template for every client. They don't understand your industry, your customers, or what makes your business unique. You need a custom strategy.",
    },
  ];

  const solutions = [
    {
      icon: Rocket,
      title: "Conversion-Focused Strategy",
      description:
        "We don't just run ads. We build comprehensive, data-driven strategies designed to drive conversions. Every campaign is tailored to your business goals and optimised for ROI.",
    },
    {
      icon: BarChart,
      title: "Transparent Reporting",
      description:
        "You'll have full access to your account and live dashboards 24/7. We provide clear, jargon-free explanations of your campaign performance. No smoke and mirrors, just honest data.",
    },
    {
      icon: CheckCircle,
      title: "High-Quality Lead Generation",
      description:
        "We use precise audience targeting and lead qualification to ensure you get high-quality leads that are ready to convert. Quality over quantity, always.",
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description:
        "We've worked with 283+ businesses across every industry. E-commerce, professional services, retail, hospitality. We know what works and what doesn't.",
    },
    {
      icon: MessageSquare,
      title: "Responsive Communication",
      description:
        "You'll have a dedicated account manager who responds within hours, not days. We're here to support you and answer your questions whenever you need us.",
    },
    {
      icon: RefreshCcw,
      title: "Continuous Optimisation",
      description:
        "We monitor and optimise your campaigns daily. Testing new creatives, refining targeting, and improving performance. We never stop optimising.",
    },
  ];

  const services = [
    {
      icon: Target,
      title: "Facebook Ads Management",
      description:
        "Full-service Facebook ads management including strategy, setup, creative development, and ongoing optimisation. We handle everything so you can focus on running your business.",
    },
    {
      icon: ShoppingCart,
      title: "Instagram Ads Management",
      description:
        "Instagram is a powerful platform for visual brands. We create scroll-stopping Instagram ads that drive engagement, traffic, and sales for your Brisbane business.",
    },
    {
      icon: Users,
      title: "Lead Generation Campaigns",
      description:
        "We specialise in lead generation campaigns that deliver high-quality leads at scale. From strategy to landing page optimisation, we drive leads that convert.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Ads",
      description:
        "We help e-commerce brands scale profitably with Facebook and Instagram ads. Product ads, carousel ads, dynamic retargeting. We drive sales and ROAS.",
    },
    {
      icon: TrendingUp,
      title: "Conversion Rate Optimisation",
      description:
        "Getting clicks is easy. Getting conversions is hard. We optimise every step of your funnel, from ad creative to landing page, to maximise your conversion rate.",
    },
    {
      icon: Search,
      title: "Audience Targeting and Research",
      description:
        "We conduct in-depth audience research to identify your ideal customers. We use advanced targeting techniques to reach the right people at the right time.",
    },
    {
      icon: Rocket,
      title: "Ad Creative Development",
      description:
        "Great ads start with great creative. We develop high-converting ad copy and visuals that capture attention, communicate value, and drive action.",
    },
    {
      icon: RefreshCcw,
      title: "Retargeting and Remarketing",
      description:
        "Most people don't convert on the first visit. We build strategic retargeting campaigns to bring back warm leads and turn them into paying customers.",
    },
  ];

  const whyChooseUs = [
    {
      icon: TrendingUp,
      title: "540% Average ROI",
      description:
        "We've consistently delivered an average 540% return on ad spend for our clients. Our campaigns are built for profitability, not just vanity metrics.",
    },
    {
      icon: Users,
      title: "95% Client Retention",
      description:
        "Our 95% client retention rate speaks for itself. We earn your business every month by delivering exceptional results and outstanding service.",
    },
    {
      icon: DollarSign,
      title: "$574M+ in Revenue Generated",
      description:
        "We've generated over $574 million in verified revenue for our clients. We know how to make Facebook ads work at scale.",
    },
    {
      icon: Rocket,
      title: "Conversion-Focused",
      description:
        "We're obsessed with conversions. Every campaign, every ad, every landing page is designed to drive measurable results for your business.",
    },
    {
      icon: BarChart,
      title: "Transparent Reporting",
      description:
        "You'll have full access to your account and live dashboards. We provide clear, honest reporting on what's working and what's not.",
    },
    {
      icon: CheckCircle,
      title: "High-Quality Leads",
      description:
        "We focus on delivering high-quality leads that are ready to convert. No tire-kickers, no fake leads, just qualified prospects.",
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description:
        "We've worked with businesses across every industry and we know what works. We bring proven strategies and fresh insights to every campaign.",
    },
    {
      icon: Headphones,
      title: "Responsive Communication",
      description:
        "Your dedicated account manager responds within hours. We're here to support you, answer questions, and help you succeed.",
    },
    {
      icon: RefreshCcw,
      title: "Continuous Optimisation",
      description:
        "We never set and forget. We monitor, test, and optimise your campaigns daily to continuously improve performance and ROI.",
    },
    {
      icon: Shield,
      title: "No Hidden Costs",
      description:
        "Our pricing is transparent and straightforward. No hidden fees, no surprise charges, no upselling. You know exactly what you're paying.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Strategy and Planning",
      description:
        "We start by understanding your business, goals, and target audience. We develop a comprehensive Facebook ads strategy tailored to your specific needs.",
    },
    {
      number: "02",
      title: "Audience Targeting and Setup",
      description:
        "We conduct detailed audience research and set up precise targeting to reach your ideal customers. We configure conversion tracking and pixels.",
    },
    {
      number: "03",
      title: "Ad Creative and Copy Development",
      description:
        "Our team develops high-converting ad creatives and compelling copy designed to capture attention and drive action from your Brisbane audience.",
    },
    {
      number: "04",
      title: "Campaign Launch and Monitoring",
      description:
        "We launch your campaigns and monitor performance closely. We track every metric and ensure everything is running smoothly from day one.",
    },
    {
      number: "05",
      title: "Optimisation and Scaling",
      description:
        "We continuously test and refine. A/B testing creatives, testing audiences, optimising bids. We find what works and scale it profitably.",
    },
    {
      number: "06",
      title: "Reporting and Communication",
      description:
        "You'll receive regular reports with clear insights and actionable recommendations. Your account manager is always available to discuss performance.",
    },
  ];

  const faqs = [
    {
      question: "How much do Facebook ads cost?",
      answer:
        "Facebook ads can cost as little as a few dollars per day or thousands per day, depending on your goals and budget. We work with budgets from $500/month to $50,000+/month. We'll help you determine the right budget for your goals.",
    },
    {
      question: "How long does it take to see results from Facebook ads?",
      answer:
        "You can see initial results within 1–2 weeks, but it typically takes 4–6 weeks to optimise and see consistent results. We continuously optimise to improve performance over time.",
    },
    {
      question: "Why aren't my Facebook ads converting?",
      answer:
        "There are usually several reasons: poor audience targeting, weak ad creative, unclear call-to-action, poor landing page experience, or lack of conversion tracking. We analyse your campaigns and identify the specific issues.",
    },
    {
      question: "What's the average cost per lead?",
      answer:
        "It depends on your industry and target audience. Typical cost per lead ranges from $5–$50, depending on the industry and competition. We focus on high-quality leads, not just cheap leads.",
    },
    {
      question: "Do you manage Instagram ads?",
      answer:
        "Yes. We specialise in Instagram ads. Instagram is a powerful platform for visual brands, and we know how to make it work.",
    },
    {
      question: "Can you help with e-commerce ads?",
      answer:
        "Absolutely. We specialise in e-commerce Facebook and Instagram ads. Product ads, carousel ads, dynamic ads, and retargeting. We drive sales and ROI for e-commerce businesses.",
    },
    {
      question: "How do you ensure high-quality leads?",
      answer:
        "We use precise audience targeting, lead qualification, and landing page optimisation. We focus on quality over quantity. Your leads are pre-qualified and ready to convert.",
    },
    {
      question: "What's your approach to Facebook ads strategy?",
      answer:
        "We start with your business goals and target audience. We develop a strategic plan that includes audience targeting, ad creative, landing page optimisation, and conversion tracking. We continuously optimise based on performance data.",
    },
    {
      question: "How do you measure Facebook ads ROI?",
      answer:
        "We track conversions, cost per lead, and return on ad spend (ROAS). We set up proper conversion tracking and provide detailed reporting. You always know your ROI.",
    },
    {
      question: "What's the difference between Facebook and Meta ads?",
      answer:
        "Meta is Facebook's parent company. 'Meta ads' typically refers to ads on Meta's platforms: Facebook, Instagram, and Messenger. We manage ads across all Meta platforms.",
    },
    {
      question: "Can you help with social media ads beyond Facebook?",
      answer:
        "Yes. We manage ads on Facebook, Instagram, and Messenger. We can also help with Google Ads, LinkedIn ads, and other platforms.",
    },
    {
      question: "How do you improve Facebook ads performance?",
      answer:
        "We continuously test and refine. A/B testing creatives, testing audiences, testing landing pages, testing messaging. We find what works and scale it.",
    },
    {
      question: "What if my Facebook ads aren't working?",
      answer:
        "We analyse your campaigns, identify the issues, and develop a plan to fix them. We might adjust targeting, refresh creatives, optimise the landing page, or change the messaging.",
    },
    {
      question: "How often do you optimise campaigns?",
      answer:
        "We review and optimise campaigns daily. We monitor performance, make adjustments, test new creatives, and refine targeting continuously.",
    },
    {
      question: "Do you offer ongoing support and management?",
      answer:
        "Yes. We provide ongoing campaign management, monitoring, optimisation, and reporting. You get a dedicated account manager who's always available.",
    },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Odin Digital",
    "description": "Facebook and Instagram Ads agency in Brisbane specialising in high-converting ads management",
    "image": "https://growth-conduit-central.lovable.app/logo.png",
    "url": "https://growth-conduit-central.lovable.app/facebook-ads-brisbane",
    "telephone": "+61-1300-123-456",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brisbane",
      "addressRegion": "QLD",
      "postalCode": "4000",
      "addressCountry": "AU"
    },
    "areaServed": {
      "@type": "City",
      "name": "Brisbane"
    },
    "priceRange": "$500-$50000",
    "serviceType": "Facebook and Instagram Ads Management",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "283"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facebook and Instagram Ads Management",
    "description": "Professional Facebook and Instagram ads management services including lead generation, e-commerce ads, conversion optimisation, and audience targeting",
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital",
      "url": "https://growth-conduit-central.lovable.app"
    },
    "areaServed": "Brisbane, Australia",
    "serviceType": "Facebook and Instagram Ads Management"
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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://growth-conduit-central.lovable.app",
    "logo": "https://growth-conduit-central.lovable.app/logo.png",
    "description": "Digital marketing agency in Australia offering PPC, Meta Ads, Web Design, and SEO services",
    "sameAs": [
      "https://www.facebook.com/odindigital",
      "https://www.instagram.com/odindigital",
      "https://www.linkedin.com/company/odindigital"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+61-1300-123-456",
      "email": "hello@odindigital.com.au"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "283"
    }
  };

  return (
    <>
      <Helmet>
        <title>Facebook Ads Agency Brisbane | High-Converting Ads Management | Odin Digital</title>
        <meta
          name="description"
          content="Professional Facebook and Instagram ads management in Brisbane. High-quality leads, transparent reporting, proven ROI. 283+ happy clients. Book your free consultation."
        />
        <link rel="canonical" href="https://odindigital.com.au/services/facebook-ads-brisbane" />
        <meta
          name="keywords"
          content="Facebook ads agency Brisbane, Facebook ads management Brisbane, Instagram ads Brisbane, Meta ads Brisbane, Facebook advertising Brisbane"
        />
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
          {JSON.stringify(organizationSchema)}
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
                Facebook Ads Agency Brisbane
              </h1>
              
              <p className="hero-sub-headline text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground break-words overflow-wrap-anywhere">
                Your Facebook ads aren't converting because they're not optimised for conversions.
              </p>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto break-words overflow-wrap-anywhere">
                Stop wasting money on Facebook ads that don't work. At Odin Digital, we run Facebook and Instagram ads that drive high-quality leads and measurable ROI. We've helped 283+ businesses across Australia transform their Facebook advertising from a money pit into their most profitable marketing channel.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-3xl mx-auto break-words overflow-wrap-anywhere">
                From e-commerce to professional services, we know how to make Facebook ads work. Precise targeting. Conversion-focused strategy. Transparent reporting. Real results. No guessing. No wasted budget. Just Facebook ads that actually convert.
              </p>

              <Button
                onClick={openForm}
                size="lg"
                className="bg-gradient-primary text-primary-foreground px-8 py-6 text-base sm:text-lg rounded-lg shadow-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 whitespace-normal h-auto"
              >
                Book Your Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
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
              Why Your Facebook Ads Aren't Working
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              You're spending money on Facebook ads, but you're not seeing the results you were promised. Sound familiar?
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Solution Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              Facebook Ads That Drive Results
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              Here's how we solve each of these problems and deliver real results for your Brisbane business.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <solution.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 break-words overflow-wrap-anywhere">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground break-words overflow-wrap-anywhere">
                    {solution.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              Our Facebook and Instagram Ads Services
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              We offer a complete suite of Facebook and Instagram ads management services to help your Brisbane business succeed.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow flex flex-col">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-3 break-words overflow-wrap-anywhere">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground break-words overflow-wrap-anywhere flex-grow">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                onClick={openForm}
                size="lg"
                className="bg-gradient-primary text-primary-foreground px-8 py-6 text-base sm:text-lg rounded-lg shadow-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 whitespace-normal h-auto"
              >
                Book Your Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              Why Brisbane Businesses Choose Odin Digital
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              Here's what sets us apart from other Facebook ads agencies in Brisbane.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                  <item.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-lg font-bold mb-3 break-words overflow-wrap-anywhere">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground break-words overflow-wrap-anywhere">
                    {item.description}
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
              Our Facebook Ads Process
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              We follow a proven 6-step process to deliver high-performing Facebook ads campaigns for Brisbane businesses.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 break-words overflow-wrap-anywhere">
              Frequently Asked Questions
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

        {/* Final CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 break-words overflow-wrap-anywhere">
              Ready to Stop Wasting Money on Facebook Ads?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto break-words overflow-wrap-anywhere">
              Let's build a Facebook ads strategy that actually works. We'll drive high-quality leads and measurable ROI.
            </p>
            <p className="text-base text-muted-foreground mb-10 max-w-3xl mx-auto break-words overflow-wrap-anywhere">
              Book a free consultation with one of our Facebook ads strategists. We'll review your current campaigns (if you have any), identify opportunities, and show you exactly how we can help.
            </p>
            <Button
              onClick={openForm}
              size="lg"
              className="bg-gradient-primary text-primary-foreground px-8 py-6 text-base sm:text-lg rounded-lg shadow-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 whitespace-normal h-auto"
            >
              Book Your Free Consultation
            </Button>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t z-50">
          <Button
            onClick={openForm}
            className="w-full bg-gradient-primary text-primary-foreground shadow-primary hover:shadow-glow whitespace-normal h-auto"
            size="lg"
          >
            Book Free Consultation
          </Button>
        </div>


        <RelatedLocations 
          locations={getRelatedLocations("Brisbane", "facebook-ads")}
          title="Facebook Ads Services in Other Australian Cities"
        />

        <Footer />
      </div>
    </>
  );
};

export default FacebookAdsBrisbane;
