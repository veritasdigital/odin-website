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
  TrendingDown,
  ArrowRight,
} from "lucide-react";
import { ServiceHero } from "@/components/ServiceHero";

const FacebookAdsSydney = () => {
  const { openForm } = useMarketingForm();

  const metrics = [
    { icon: DollarSign, value: "$574M+", label: "Revenue Generated" },
    { icon: TrendingUp, value: "540%", label: "Average ROI" },
    { icon: Users, value: "95%", label: "Client Retention" },
    { icon: Award, value: "283+", label: "Happy Clients" },
  ];

  const problems = [
    {
      icon: TrendingDown,
      title: "Inflated Costs Due to High Competition",
      description:
        "Sydney is one of the most competitive advertising markets in Australia. Your cost per click is through the roof. You're spending thousands and getting minimal results. You know there must be a better way.",
    },
    {
      icon: AlertCircle,
      title: "Lack of Senior-Level Expertise",
      description:
        "Your account is managed by a junior account manager who's learning on your budget. You need senior-level strategy and expertise, but you're getting cookie-cutter templates and generic advice.",
    },
    {
      icon: Target,
      title: "No Differentiation or Customisation",
      description:
        "Your agency uses the same approach for every client. They don't understand your business, your customers, or what makes you different. You need a customised strategy, not a one-size-fits-all template.",
    },
    {
      icon: Users,
      title: "Poor Audience Understanding",
      description:
        "Your agency doesn't understand the Sydney market or your specific audience. They're targeting everyone and wasting your budget on unqualified leads who will never convert.",
    },
    {
      icon: Shield,
      title: "Lack of Transparency and Reporting",
      description:
        "You get monthly reports full of charts and jargon, but you have no idea what's actually happening. Your agency won't give you access to your account. You feel like you're in the dark.",
    },
    {
      icon: CheckCircle,
      title: "Focus on Volume Over Quality",
      description:
        "Your agency brags about generating hundreds of leads, but they're all low-quality. Your sales team is wasting time on tire-kickers and fake inquiries. You need quality, not quantity.",
    },
    {
      icon: Clock,
      title: "Slow Response and Poor Communication",
      description:
        "It takes days to get a response from your account manager. You feel ignored. When you do get a response, it's vague and unhelpful. You deserve better service.",
    },
    {
      icon: DollarSign,
      title: "Constant Pressure to Increase Spend",
      description:
        "Every conversation is about increasing your budget. Your agency claims you need to spend more to get results, but you suspect they just want higher fees. You need honesty, not upselling.",
    },
    {
      icon: RefreshCcw,
      title: "No Ongoing Optimisation",
      description:
        "Your campaigns were set up months ago and haven't been touched since. Your agency isn't testing, isn't optimising, isn't improving performance. Your results are stagnant or declining.",
    },
    {
      icon: AlertCircle,
      title: "Hidden Costs and Surprise Fees",
      description:
        "Your invoice keeps growing with mystery charges. Setup fees, management fees, optimisation fees. You agreed to one price but you're paying another. You need transparent pricing.",
    },
  ];

  const solutions = [
    {
      icon: Award,
      title: "Senior-Level Expertise",
      description:
        "You work directly with senior strategists who have years of experience managing high-budget Facebook campaigns. No junior account managers. No learning on your budget.",
    },
    {
      icon: Target,
      title: "Customised Strategy",
      description:
        "We build a custom strategy tailored to your business, your goals, and your Sydney audience. No templates. No cookie-cutter approaches. Every campaign is unique.",
    },
    {
      icon: Rocket,
      title: "Conversion-Focused Approach",
      description:
        "We focus on conversions, not vanity metrics. Every ad, every campaign is designed to drive leads and sales. We care about your bottom line, not just clicks.",
    },
    {
      icon: BarChart,
      title: "Transparent Reporting",
      description:
        "You have full access to your account and live dashboards 24/7. We provide clear, honest reporting with no jargon. You always know exactly what's happening.",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Solutions",
      description:
        "We use strategic targeting and continuous optimisation to reduce your cost per lead and improve ROI. We make every dollar work harder for your business.",
    },
    {
      icon: RefreshCcw,
      title: "Continuous Optimisation",
      description:
        "We monitor and optimise your campaigns daily. We test new creatives, refine targeting, and improve performance continuously. We never stop optimising.",
    },
    {
      icon: MessageSquare,
      title: "Responsive Communication",
      description:
        "Your dedicated senior account manager responds within hours. We're here to support you, answer questions, and help you succeed.",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description:
        "We've generated over $574 million in revenue for our clients with an average 540% ROI. We know what works and we deliver results.",
    },
  ];

  const services = [
    {
      icon: Target,
      title: "Facebook Ads Management",
      description:
        "Full-service Facebook ads management including senior-level strategy, setup, creative development, and ongoing optimisation. We handle everything so you can focus on running your Sydney business.",
    },
    {
      icon: ShoppingCart,
      title: "Instagram Ads Management",
      description:
        "Instagram is perfect for visual brands targeting Sydney audiences. We create scroll-stopping Instagram ads that drive engagement, traffic, and sales.",
    },
    {
      icon: Users,
      title: "Lead Generation Campaigns",
      description:
        "We specialise in lead generation campaigns that deliver high-quality leads at scale in Sydney's competitive market. From strategy to landing page optimisation.",
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
        "We conduct in-depth audience research to identify your ideal Sydney customers. We use advanced targeting techniques to reach the right people at the right time.",
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
        "We've consistently delivered an average 540% return on ad spend for our clients. Our campaigns are built for profitability.",
    },
    {
      icon: Users,
      title: "95% Client Retention",
      description:
        "Our 95% client retention rate speaks for itself. We earn your business every month by delivering exceptional results.",
    },
    {
      icon: DollarSign,
      title: "$574M+ in Revenue Generated",
      description:
        "We've generated over $574 million in verified revenue for our clients. We know how to make Facebook ads work at scale.",
    },
    {
      icon: Award,
      title: "Senior-Level Expertise",
      description:
        "You work directly with senior strategists who have managed high-budget campaigns. No junior account managers.",
    },
    {
      icon: Target,
      title: "Customised Strategy",
      description:
        "Every campaign is tailored to your business and your Sydney audience. No templates, no cookie-cutter approaches.",
    },
    {
      icon: Rocket,
      title: "Conversion-Focused",
      description:
        "We're obsessed with conversions. Every campaign is designed to drive measurable results for your business.",
    },
    {
      icon: BarChart,
      title: "Transparent Reporting",
      description:
        "You have full access to your account and live dashboards. We provide clear, honest reporting on what's working.",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description:
        "We use strategic targeting and optimisation to reduce costs and improve ROI, even in Sydney's competitive market.",
    },
    {
      icon: RefreshCcw,
      title: "Continuous Optimisation",
      description:
        "We monitor, test, and optimise your campaigns daily to continuously improve performance and ROI.",
    },
    {
      icon: MessageSquare,
      title: "Responsive Communication",
      description:
        "Your dedicated senior account manager responds within hours. We're here to support you and answer questions.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Strategy and Planning",
      description:
        "We start by understanding your Sydney business, goals, and target audience. We develop a comprehensive Facebook ads strategy tailored to your specific needs.",
    },
    {
      number: "02",
      title: "Audience Targeting and Setup",
      description:
        "We conduct detailed audience research and set up precise targeting to reach your ideal Sydney customers. We configure conversion tracking and pixels.",
    },
    {
      number: "03",
      title: "Ad Creative and Copy Development",
      description:
        "Our senior team develops high-converting ad creatives and compelling copy designed to capture attention and drive action from your Sydney audience.",
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
        "We continuously test and refine. A/B testing creatives, testing audiences, optimising bids. We find what works and scale it profitably in Sydney's market.",
    },
    {
      number: "06",
      title: "Reporting and Communication",
      description:
        "You receive regular reports with clear insights and actionable recommendations. Your senior account manager is always available to discuss performance.",
    },
  ];

  const faqs = [
    {
      question: "Why are my Facebook ads so expensive in Sydney?",
      answer:
        "Sydney has high competition for ad space, which drives up costs. But the real issue is usually poor targeting and lack of optimisation. We use strategic targeting and continuous optimisation to reduce costs and improve ROI.",
    },
    {
      question: "How do you reduce cost per lead?",
      answer:
        "We use precise audience targeting, lead qualification, and landing page optimisation. We focus on quality over quantity. We also continuously A/B test and optimise to improve efficiency.",
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
        "Yes. We provide ongoing campaign management, monitoring, optimisation, and reporting. You get a dedicated senior account manager who's always available.",
    },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Odin Digital",
    "description": "Facebook and Instagram Ads agency in Sydney specialising in senior-level ads management and high-converting campaigns",
    "image": "https://growth-conduit-central.lovable.app/logo.png",
    "url": "https://growth-conduit-central.lovable.app/facebook-ads-sydney",
    "telephone": "+61-1300-123-456",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "postalCode": "2000",
      "addressCountry": "AU"
    },
    "areaServed": {
      "@type": "City",
      "name": "Sydney"
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
    "areaServed": "Sydney, Australia",
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
        <title>Facebook Ads Agency Sydney | Senior Expertise, High ROI | Odin Digital</title>
        <meta
          name="description"
          content="Professional Facebook and Instagram ads management in Sydney. Senior-level expertise, customised strategy, transparent reporting. 283+ happy clients. Book your free consultation."
        />
        <meta
          name="keywords"
          content="Facebook ads agency Sydney, Facebook ads management Sydney, Instagram ads Sydney, Meta ads Sydney, Facebook advertising Sydney"
        />
        <link rel="canonical" href="https://odindigital.com.au/services/facebook-ads-sydney" />
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
                Facebook Ads Agency Sydney
              </h1>
              
              <p className="hero-sub-headline text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground break-words overflow-wrap-anywhere">
                Your Facebook ads are expensive because Sydney is competitive. But they don't have to be.
              </p>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto break-words overflow-wrap-anywhere">
                Stop throwing money at Facebook ads that don't work. At Odin Digital, we run Facebook and Instagram ads that drive high-quality leads and measurable ROI—even in Sydney's competitive market. We've helped 283+ businesses across Australia transform their Facebook advertising into their most profitable marketing channel.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-3xl mx-auto break-words overflow-wrap-anywhere">
                From e-commerce to professional services, from startups to established brands, we know how to make Facebook ads work in Sydney. Senior expertise. Customised strategy. Transparent reporting. Real results. No junior account managers. No generic strategies. No hidden costs. Just Facebook ads that actually convert.
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
              Why Your Facebook Ads Aren't Working in Sydney
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              Sydney is expensive. But your Facebook ads don't have to be. Here's what's really holding you back.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {problems.map((problem, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <problem.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-3 break-words overflow-wrap-anywhere">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-muted-foreground break-words overflow-wrap-anywhere">
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
              Facebook Ads That Drive Results in Sydney
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              Here's how we solve each of these problems and deliver real results for your Sydney business.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              We offer a complete suite of Facebook and Instagram ads management services to help your Sydney business succeed.
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
              Why Sydney Businesses Choose Odin Digital
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              Here's what sets us apart from other Facebook ads agencies in Sydney.
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
              We follow a proven 6-step process to deliver high-performing Facebook ads campaigns for Sydney businesses.
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
              Ready to Get Better Results from Your Facebook Ads?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto break-words overflow-wrap-anywhere">
              Let's build a Facebook ads strategy that actually works in Sydney's competitive market. We'll drive high-quality leads and measurable ROI.
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

        <Footer />
      </div>
    </>
  );
};

export default FacebookAdsSydney;
