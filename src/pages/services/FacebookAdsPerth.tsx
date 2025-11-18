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
} from "lucide-react";
import { RelatedLocations } from "@/components/RelatedLocations";
import { getRelatedLocations } from "@/utils/contentClusters";
import { getLocationData } from "@/utils/locationData";

const FacebookAdsPerth = () => {
  const { openForm } = useMarketingForm();
  const locationInfo = getLocationData("perth");

  const metrics = [
    { icon: DollarSign, value: "$574M+", label: "Verified Client Revenue" },
    { icon: TrendingUp, value: "540%", label: "Average ROI on Ad Spend" },
    { icon: Users, value: "95%", label: "Client Retention Rate (No Lock-In)" },
    { icon: Award, value: "283+", label: "Successful Campaigns Delivered" },
  ];

  const problems = [
    {
      icon: DollarSign,
      title: "High CPCs Are Draining Your Budget",
      description:
        "You're shocked by how much you're paying for clicks in Perth. Your daily budget disappears with little to show for it, and you're constantly being outbid by larger competitors. You feel like you're just handing money to Meta with no return.",
    },
    {
      icon: Target,
      title: "Your Ads Aren't Being Seen by the Right People",
      description:
        "Your ads are getting clicks, but they're from people outside Perth or from users who have no interest in your product or service. You're wasting money on irrelevant traffic and struggling to reach your ideal customers in the local Perth market.",
    },
    {
      icon: AlertCircle,
      title: "Your Ads Are Being Rejected or Ignored",
      description:
        "Your ads are constantly being rejected for violating Facebook's complex ad policies, or they're simply being ignored in the crowded newsfeed. You're frustrated by the technical hurdles and the lack of engagement, and you're ready to give up on Facebook ads altogether.",
    },
  ];

  const services = [
    {
      icon: Rocket,
      title: "Facebook Ads Strategy & Management",
      description:
        "We develop a comprehensive Facebook ads strategy tailored to your Perth business goals. We then manage your campaigns from start to finish, including creative, copy, targeting, and optimization, to ensure you get the best possible results.",
      cta: "Get Your FREE Perth Facebook Ads Strategy Quote →",
    },
    {
      icon: Users,
      title: "Facebook Lead Generation",
      description:
        "Need more leads for your Perth business? We specialize in creating high-converting Facebook lead generation campaigns that deliver a steady stream of qualified leads directly to your inbox. We use lead forms, messenger bots, and landing pages to capture leads and nurture them into customers.",
      cta: "Get Your FREE Perth Facebook Lead Generation Quote →",
    },
    {
      icon: BarChart,
      title: "Facebook E-commerce Ads",
      description:
        "Ready to sell more products online? We build high-converting Facebook e-commerce campaigns that drive traffic, sales, and revenue for your Perth-based online store. We use dynamic product ads, retargeting, and lookalike audiences to maximize your ROI.",
      cta: "Get Your FREE Perth Facebook E-commerce Ads Quote →",
    },
  ];

  const differentiators = [
    {
      icon: Target,
      title: "Perth Market Experts",
      description:
        "We're not a faceless national agency that doesn't understand the Perth market. We are Perth locals who understand the unique challenges and opportunities of advertising in Western Australia. We know how to reach your ideal customers in Perth and what it takes to succeed in the local market.",
    },
    {
      icon: Award,
      title: "Meta Blueprint Certified",
      description:
        "Our team is Meta Blueprint certified, which means we have been trained and certified by Facebook (now Meta) in the latest best practices for Facebook advertising. We have the knowledge and expertise to create and manage high-performing Facebook ad campaigns that deliver results.",
    },
    {
      icon: Rocket,
      title: "Conversion-Focused Creative",
      description:
        "We don't just create pretty ads; we create ads that sell. Our team of expert copywriters and designers specialize in direct response advertising, and we know how to create compelling ad copy and creative that drives action and generates a measurable return on investment.",
    },
    {
      icon: Shield,
      title: "No Lock-In Contracts",
      description:
        "We believe in earning your business, not forcing it. Our flexible, month-to-month agreements mean we're always motivated to deliver results. If you're not happy, you're free to leave. It's that simple.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Research & Strategy",
      description:
        "We start by getting to know your Perth business, your goals, and your ideal customer. We conduct in-depth research into your market, your competitors, and your audience to develop a comprehensive Facebook ads strategy that is designed to deliver results.",
    },
    {
      number: "02",
      title: "Campaign & Creative Build",
      description:
        "Our team builds out your Facebook ad campaigns, including the ad sets, targeting, and creative. We write compelling ad copy, design eye-catching ad creative, and set up your campaigns for success.",
    },
    {
      number: "03",
      title: "Launch & Optimization",
      description:
        "We launch your campaigns and continuously monitor their performance. We A/B test different ad creative, copy, and targeting options to identify what's working and what's not. We then optimize your campaigns to ensure you're getting the best possible results for your ad spend.",
    },
    {
      number: "04",
      title: "Reporting & Scaling",
      description:
        "We provide you with regular, detailed reports that show you exactly how your Facebook ad campaigns are performing. We track key metrics like cost per lead, cost per acquisition, and return on ad spend, so you can see the direct impact of our work on your bottom line. We then use this data to scale your campaigns and drive even better results.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "We're Perth Locals",
      description:
        "We're not a big, faceless agency on the east coast. We're a team of local Perth digital marketing experts who live and breathe the Perth market. We understand your customers, your competitors, and what it takes to succeed in WA.",
    },
    {
      icon: TrendingUp,
      title: "We're ROI-Obsessed",
      description:
        "We're not interested in vanity metrics like likes and shares. We're obsessed with one thing: return on investment. We track every dollar you spend on Facebook ads and show you exactly how much revenue it's generating for your business.",
    },
    {
      icon: CheckCircle,
      title: "We're Transparent",
      description:
        "We provide clear, detailed reports that show you exactly how your campaigns are performing. We believe in radical transparency, and we'll always be upfront with you about what's working and what's not. No jargon, no excuses, just results.",
    },
    {
      icon: Headphones,
      title: "We're Your Partner in Growth",
      description:
        "We're not just a service provider; we're your partner in growth. We're invested in your success, and we'll work tirelessly to help you achieve your business goals. We're always available to answer your questions, provide advice, and help you navigate the ever-changing world of Facebook advertising.",
    },
  ];

  const faqs = [
    {
      question: "How much do Facebook ads cost in Perth?",
      answer:
        "The cost of Facebook ads in Perth can vary depending on your industry, your target audience, and the level of competition. We recommend a minimum ad spend of $1,000 - $3,000 per month to get meaningful results. Our management fees are separate and are based on the complexity of your campaigns.",
    },
    {
      question: "Are Facebook ads worth it for my Perth small business?",
      answer:
        "Yes, Facebook ads can be incredibly effective for Perth small businesses when managed correctly. They allow you to reach a highly targeted local audience, generate leads, and drive sales at a relatively low cost. The key is to have a solid strategy, compelling creative, and ongoing optimization.",
    },
    {
      question: "What is a good ROI for Facebook ads in Perth?",
      answer:
        "A good ROI for Facebook ads in Perth is typically 3x - 5x your ad spend. However, this can vary depending on your industry, your profit margins, and your customer lifetime value. We focus on maximizing your ROI and providing you with a clear return on your investment.",
    },
    {
      question: "How do you target a Perth audience on Facebook?",
      answer:
        "We use a variety of advanced targeting options to reach your ideal customers in Perth, including location targeting (down to the postcode level), demographic targeting (age, gender, income), interest targeting, and behavioral targeting. We also use custom audiences (e.g., your email list) and lookalike audiences to reach new customers who are similar to your existing ones.",
    },
    {
      question: "Why are my Facebook ads not delivering in Perth?",
      answer:
        "There are a number of reasons why your Facebook ads might not be delivering in Perth, including a small audience size, low bid, or ad creative that has been rejected. Our team of experts can diagnose the problem and get your campaigns back on track.",
    },
    {
      question: "What is the Facebook Pixel and why do I need it?",
      answer:
        "The Facebook Pixel is a small piece of code that you install on your website. It allows you to track conversions, retarget website visitors, and create lookalike audiences. The Facebook Pixel is essential for running successful Facebook ad campaigns.",
    },
    {
      question: "What is the difference between Facebook ads and Google ads?",
      answer:
        "Facebook ads are a form of 'interruption marketing,' where you are showing your ads to people who are not actively looking for your product or service. Google ads, on the other hand, are a form of 'intent marketing,' where you are showing your ads to people who are actively searching for your product or service. Both can be effective, and we can help you determine the right mix for your Perth business.",
    },
    {
      question: "How long does it take to see results from Facebook ads?",
      answer:
        "While you can start seeing results from Facebook ads within a few days, it typically takes 1-3 months to fully optimize your campaigns and achieve a consistent ROI. We focus on building a long-term, sustainable Facebook advertising strategy that delivers results for years to come.",
    },
    {
      question: "Do you offer Facebook ad creative services?",
      answer:
        "Yes, we have a team of expert copywriters and designers who can create high-converting ad creative for your Facebook campaigns. We will work with you to develop a unique brand voice and visual style for your ads.",
    },
    {
      question: "What is a Facebook ads funnel?",
      answer:
        "A Facebook ads funnel is a multi-step process that guides potential customers from awareness to conversion. It typically includes a top-of-funnel campaign to generate awareness, a middle-of-funnel campaign to nurture leads, and a bottom-of-funnel campaign to drive sales. We can help you build a custom Facebook ads funnel for your Perth business.",
    },
    {
      question: "Why should I hire a Perth Facebook ads agency?",
      answer:
        "Hiring a Perth Facebook ads agency gives you access to a team of local experts who understand the Perth market, your customers, and your competitors. We can provide a more personalized service and are always available to meet in person to discuss your campaigns. We have a proven track record of helping Perth businesses succeed with Facebook ads.",
    },
    {
      question: "What is A/B testing?",
      answer:
        "A/B testing is the process of testing different versions of your ads to see which one performs better. We use A/B testing to optimize your ad creative, copy, and targeting for maximum engagement and ROI.",
    },
    {
      question: "What are custom audiences and lookalike audiences?",
      answer:
        "Custom audiences are audiences that you create based on your own data, such as your email list or website visitors. Lookalike audiences are audiences that Facebook creates for you based on your custom audiences. They are a powerful way to reach new customers who are similar to your existing ones.",
    },
    {
      question: "Can you help me with my Facebook ad account if it has been disabled?",
      answer:
        "Yes, we can help you navigate the process of getting your Facebook ad account reinstated if it has been disabled. We have experience dealing with Facebook support and can help you resolve any issues that may have led to your account being disabled.",
    },
    {
      question: "How do I get a free quote for your Perth Facebook ads services?",
      answer:
        "Simply click the button below to schedule your FREE, no-obligation consultation with one of our senior Perth strategists. We will discuss your project in detail and provide you with a comprehensive quote within 24 hours. There's no pressure and no obligation.",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://growth-conduit-central.lovable.app/",
    "logo": "https://growth-conduit-central.lovable.app/logo.png",
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
    "name": "Odin Digital (Perth)",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Perth",
      "addressRegion": "WA",
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
    "serviceType": "Facebook Advertising",
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital"
    },
    "areaServed": {
      "@type": "City",
      "name": "Perth"
    },
    "description": "Professional Facebook advertising services in Perth. We build high-converting, ROI-focused Facebook ad campaigns for Perth businesses.",
    "name": "Facebook Ads Agency Perth"
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
        <title>Facebook Ads Agency Perth | Odin Digital</title>
        <meta
          name="description"
          content="Perth's leading Facebook ads agency. We build high-converting, ROI-focused Facebook ad campaigns that generate leads and sales. Get your free Perth Facebook ads quote."
        />
        <link rel="canonical" href="https://odindigital.com.au/services/facebook-ads-perth" />
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
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 sm:py-32">
          {/* Floating circles from homepage */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 mt-12 break-words overflow-wrap-anywhere">
                Facebook Ads Agency Perth
              </h1>
              
              <p className="hero-sub-headline text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground break-words overflow-wrap-anywhere">
                Stop Wasting Money on Facebook Ads. Start Generating ROI in Perth.
              </p>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto break-words overflow-wrap-anywhere">
                Are your Facebook ads failing to deliver results in the competitive Perth market? It's time for a professional Perth Facebook ads agency that turns your ad spend into a predictable stream of leads and sales.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-3xl mx-auto break-words overflow-wrap-anywhere">
                In Perth, you can't afford to burn cash on Facebook ads that don't convert. At Odin Digital, we don't just create ads; we build high-converting, data-driven Facebook advertising funnels that generate a measurable return on investment. With no lock-in contracts and a focus on radical transparency, we're the Perth Facebook ads partner you can trust. Ready to turn your Facebook ad spend into a revenue-generating machine?
              </p>

              <Button
                onClick={openForm}
                size="lg"
                className="bg-gradient-primary text-primary-foreground px-8 py-6 text-base sm:text-lg rounded-lg shadow-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 whitespace-normal break-words h-auto"
              >
                Get Your FREE Perth Facebook Ads Quote →
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
              Are Your Facebook Ads Failing in the Perth Market?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              You're spending money on Facebook ads, but you're not seeing the leads, sales, or ROI you were promised. It's a common and expensive problem for Perth businesses.
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
              Facebook Ads Services for Perth Businesses
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              We offer a complete suite of professional Facebook advertising services to help your Perth business generate a predictable stream of leads and sales.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  className="bg-gradient-primary text-primary-foreground shadow-primary hover:shadow-glow w-full whitespace-normal break-words h-auto py-3 px-6"
                >
                  {service.cta}
                </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              The Odin Digital Difference: Your Perth Facebook Ads Agency
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              Why choose us as your Facebook ads agency in Perth? Because we understand the local market and we're obsessed with ROI.
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
              Our Proven 4-Step Facebook Ads Process
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              We follow a simple, effective process to deliver high-performing Facebook ad campaigns for our Perth clients.
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
              Why Choose Odin Digital as Your Perth Facebook Ads Partner?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto break-words overflow-wrap-anywhere">
              You have a lot of choices when it comes to Facebook ads agencies in Perth. Here's why we're the right choice for your business.
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
              Ready to Get a Real Return on Your Perth Facebook Ad Spend?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto break-words overflow-wrap-anywhere">
              Stop wasting money on Facebook ads that don't work. It's time to partner with a Perth Facebook ads agency that can deliver a predictable stream of leads and sales.
            </p>
            <p className="text-base text-muted-foreground mb-10 max-w-3xl mx-auto break-words overflow-wrap-anywhere">
              Take the first step towards transforming your Facebook advertising. Schedule your FREE, no-obligation Facebook ads consultation and quote with one of our senior Perth strategists today. We'll analyze your current campaigns, discuss your goals, and show you exactly how we can help you build a Facebook ads machine that drives real business growth. What do you have to lose?
            </p>
            <Button
              onClick={openForm}
              size="lg"
              className="bg-gradient-primary text-primary-foreground px-8 py-6 text-base sm:text-lg rounded-lg shadow-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 whitespace-normal break-words h-auto"
            >
              Get Your FREE Perth Facebook Ads Quote →
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 break-words overflow-wrap-anywhere">
              Frequently Asked Questions About Facebook Ads in Perth
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
            className="w-full bg-gradient-primary text-primary-foreground shadow-primary hover:shadow-glow whitespace-normal break-words h-auto py-3 px-6"
            size="lg"
          >
            Get Your Free Quote
          </Button>
        </div>


        <RelatedLocations 
          locations={getRelatedLocations("Perth", "facebook-ads")}
          title="Facebook Ads Services in Other Australian Cities"
        />

      {/* Location Map */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <LocationMap 
            city="Perth"
            coordinates={getLocationData("Perth")?.coordinates || { lat: -31.9505, lng: 115.8605 }}
            address={getLocationData("Perth")?.citations.address}
          />
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default FacebookAdsPerth;
