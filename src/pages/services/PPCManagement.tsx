import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ROICalculator } from "@/components/ROICalculator";
import { ppcComparison } from "@/utils/serviceComparisonTables";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Award,
  DollarSign,
  Shield,
  CheckCircle2,
  BarChart3,
  Zap,
  Eye,
  Settings,
  FileSearch,
  Rocket,
  ChevronDown,
  LineChart,
  Clock
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PPCManagement = () => {
  const navigate = useNavigate();

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
      },
      {
        "@type": "Service",
        "serviceType": "PPC Management",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "description": "Professional PPC management services. We build high-converting, ROI-focused PPC campaigns for businesses across Australia.",
        "name": "PPC Management Agency"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does PPC management cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of PPC management can vary depending on your ad spend and the complexity of your campaigns. We offer a range of affordable PPC management packages, and we provide a detailed, transparent quote after a free consultation."
            }
          },
          {
            "@type": "Question",
            "name": "Is PPC worth it for my small business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, PPC can be a highly effective way to generate leads and sales for your small business. By targeting high-intent keywords, you can reach customers who are actively looking for your products or services."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from PPC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike SEO, you can start seeing results from PPC almost immediately. We can launch your campaigns within a week, and you can start generating leads and sales right away."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between PPC and SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PPC is a form of paid advertising where you pay to have your ads shown at the top of the search results, while SEO is the process of optimizing your website to rank organically. Both can be effective, and we can help you determine the right mix for your business."
            }
          },
          {
            "@type": "Question",
            "name": "What is a good ROI for PPC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A good ROI for PPC is typically 4x - 8x your ad spend. However, this can vary depending on your industry, your profit margins, and your customer lifetime value. We focus on maximizing your ROI and providing you with a clear return on your investment."
            }
          },
          {
            "@type": "Question",
            "name": "How do you track the results of your PPC campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use a variety of tools to track the results of our PPC campaigns, including Google Analytics, Google Ads conversion tracking, and third-party call tracking software. We provide you with regular, detailed reports that show you exactly how your campaigns are performing."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer a free PPC audit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer a free, no-obligation PPC audit. We will analyze your existing campaigns, identify areas for improvement, and provide you with a clear roadmap for success."
            }
          },
          {
            "@type": "Question",
            "name": "What are your PPC management packages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer a range of affordable PPC management packages, starting from just $1,000 per month. We will work with you to develop a custom package that meets your specific needs and budget."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get a free quote for your PPC management services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simply click the button below to schedule your FREE, no-obligation consultation with one of our senior strategists. We will discuss your project in detail and provide you with a comprehensive quote within 24 hours. There's no pressure and no obligation."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manage ads on other platforms besides Google?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we also manage ads on Microsoft Ads (formerly Bing Ads), Facebook, Instagram, and LinkedIn. We can help you reach your target audience wherever they are online."
            }
          },
          {
            "@type": "Question",
            "name": "What is conversion rate optimization (CRO) and why is it important for PPC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Conversion rate optimization (CRO) is the process of optimizing your landing pages to convert more visitors into leads and sales. It is a critical component of any successful PPC campaign, as it helps you maximize the value of every click."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer white label PPC management for agencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer white label PPC management services for agencies. We can help you provide high-quality PPC services to your clients without having to hire an in-house team. Contact us to learn more about our white label solutions."
            }
          },
          {
            "@type": "Question",
            "name": "What is your process for creating new PPC campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We follow a proven 4-step process for creating new PPC campaigns: 1) PPC Audit & Strategy, 2) Campaign Build & Launch, 3) Ongoing Optimization, and 4) Reporting & Analysis. This ensures that your campaigns are structured for success from the very beginning."
            }
          },
          {
            "@type": "Question",
            "name": "How do you optimize existing PPC campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use a variety of proven strategies to optimize existing PPC campaigns, including A/B testing ad copy, adjusting bids, adding negative keywords, and improving quality score. We're always looking for new ways to improve your ROI."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I choose your PPC management agency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You should choose us as your PPC management agency because we're obsessed with ROI and we're committed to your success. We're not a generalist agency that dabbles in PPC; we are a team of Google Ads specialists who live and breathe pay-per-click advertising. We're always up-to-date with the latest changes to the platform, and we know what it takes to succeed."
            }
          }
        ]
      }
    ]
  };

  const metrics = [
    { icon: DollarSign, label: "Verified Client Revenue", value: "$574M+" },
    { icon: TrendingUp, label: "Average ROI on Ad Spend", value: "540%" },
    { icon: Users, label: "Client Retention Rate", value: "95%" },
    { icon: Award, label: "Successful Campaigns Delivered", value: "283+" },
  ];

  const problems = [
    {
      title: "You're Wasting Money with No Results",
      description: "Your ad spend is going up, but your sales aren't. You're getting clicks, but no conversions. You feel like you're just funding Google's bottom line with no return on your investment.",
      icon: Target
    },
    {
      title: "You've Been Burned by a Bad Agency",
      description: "You've paid for expensive PPC management services from an agency that overpromised and underdelivered. They gave you a one-size-fits-all solution that didn't work, and you're left feeling ripped off and frustrated.",
      icon: Shield
    },
    {
      title: "You Don't Have the Time or Expertise",
      description: "You're a business owner, not a Google Ads expert. You don't have the time to learn the complexities of the platform, and you're overwhelmed by the constant changes. You need a trusted partner to take it off your plate.",
      icon: Clock
    }
  ];

  const testimonials = [
    {
      quote: "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
      author: "Fabienne Costa",
      company: "Founder, YCL Jewels (Gold Coast)"
    },
    {
      quote: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
      author: "Liam C",
      company: "Founder, Krush Organics (Sydney)"
    },
    {
      quote: "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
      author: "Evan Tsaboukos",
      company: "Founder, Imperial Wealth (Melbourne)"
    }
  ];

  const services = [
    {
      title: "Google Ads Management",
      description: "We'll build, manage, and optimize your Google Ads campaigns to drive qualified traffic and generate leads and sales. We'll handle everything from keyword research to bid management to conversion rate optimization.",
      icon: Target,
      cta: "Get Your FREE Google Ads Quote →"
    },
    {
      title: "Microsoft Ads Management",
      description: "Don't neglect the second-largest search engine. We can help you reach a new audience of high-value customers with Microsoft Ads (formerly Bing Ads). We'll adapt your Google Ads campaigns for the Microsoft Ads platform and optimize them for maximum ROI.",
      icon: BarChart3,
      cta: "Get Your FREE Microsoft Ads Quote →"
    },
    {
      title: "PPC Audits & Consulting",
      description: "Not ready to commit to full-time management? We offer one-off PPC audits and consulting services to help you identify areas for improvement in your existing campaigns. We'll provide you with a detailed report and a clear roadmap for success.",
      icon: FileSearch,
      cta: "Get Your FREE PPC Audit Quote →"
    }
  ];

  const differentiators = [
    {
      title: "ROI-Focused",
      description: "We're not interested in vanity metrics like clicks and impressions. We're obsessed with one thing: return on investment. We track every dollar you spend on PPC and show you exactly how much revenue it's generating for your business.",
      icon: DollarSign
    },
    {
      title: "Transparent Reporting",
      description: "We believe in radical transparency. We provide you with clear, detailed reports that show you exactly how your campaigns are performing. No jargon, no excuses, just results.",
      icon: Eye
    },
    {
      title: "No Lock-In Contracts",
      description: "We believe in earning your business, not forcing it. Our flexible, month-to-month agreements mean we're always motivated to deliver results. If you're not happy, you're free to leave. It's that simple.",
      icon: CheckCircle2
    },
    {
      title: "Expert Campaign Setup",
      description: "We'll build your PPC campaigns from the ground up, ensuring they're structured for success. We'll fix any structural issues in your existing campaigns and stop wasted spend in its tracks.",
      icon: Settings
    }
  ];

  const process = [
    {
      step: "1",
      title: "PPC Audit & Strategy",
      description: "We start with a comprehensive PPC audit of your existing campaigns to identify your strengths, weaknesses, and opportunities. We then develop a tailored PPC strategy that is designed to achieve your business goals and maximize your ROI.",
      icon: FileSearch
    },
    {
      step: "2",
      title: "Campaign Build & Launch",
      description: "We build your PPC campaigns from the ground up, ensuring they're structured for success. We'll write compelling ad copy, select the right keywords, and set up your conversion tracking. We then launch your campaigns and monitor them closely to ensure they're performing as expected.",
      icon: Rocket
    },
    {
      step: "3",
      title: "Ongoing Optimization",
      description: "We continuously optimize your PPC campaigns to improve performance and drive even better results. We'll A/B test your ad copy, adjust your bids, and add negative keywords to stop wasted spend. We're always looking for new ways to improve your ROI.",
      icon: Settings
    },
    {
      step: "4",
      title: "Reporting & Analysis",
      description: "We provide you with regular, detailed reports that show you exactly how your PPC campaigns are performing. We track key metrics like cost per conversion, return on ad spend, and customer lifetime value, so you can see the direct impact of our work on your bottom line.",
      icon: BarChart3
    }
  ];

  const whyChooseUs = [
    {
      title: "We're Google Ads Specialists",
      description: "We're not a generalist agency that dabbles in PPC. We are a team of Google Ads specialists who live and breathe pay-per-click advertising. We're always up-to-date with the latest changes to the platform, and we know what it takes to succeed.",
      icon: Target
    },
    {
      title: "We're ROI-Focused",
      description: "We're not interested in vanity metrics like rankings and traffic. We're obsessed with one thing: return on investment. We track every dollar you spend on PPC and show you exactly how much revenue it's generating for your business.",
      icon: TrendingUp
    },
    {
      title: "We're Transparent & Honest",
      description: "We believe in radical transparency and honest communication. We provide you with clear, detailed reports that show you exactly how your campaigns are performing. We'll always be upfront with you about what's working and what's not. No jargon, no excuses, just results.",
      icon: Eye
    },
    {
      title: "We're Your Partner in Growth",
      description: "We're not just a service provider; we're your partner in growth. We're invested in your success, and we'll work tirelessly to help you achieve your business goals. We're always available to answer your questions, provide advice, and help you navigate the ever-changing world of PPC.",
      icon: Zap
    }
  ];

  const faqs = [
    {
      question: "How much does PPC management cost?",
      answer: "The cost of PPC management can vary depending on your ad spend and the complexity of your campaigns. We offer a range of affordable PPC management packages, and we provide a detailed, transparent quote after a free consultation."
    },
    {
      question: "Is PPC worth it for my small business?",
      answer: "Yes, PPC can be a highly effective way to generate leads and sales for your small business. By targeting high-intent keywords, you can reach customers who are actively looking for your products or services."
    },
    {
      question: "How long does it take to see results from PPC?",
      answer: "Unlike SEO, you can start seeing results from PPC almost immediately. We can launch your campaigns within a week, and you can start generating leads and sales right away."
    },
    {
      question: "What is the difference between PPC and SEO?",
      answer: "PPC is a form of paid advertising where you pay to have your ads shown at the top of the search results, while SEO is the process of optimizing your website to rank organically. Both can be effective, and we can help you determine the right mix for your business."
    },
    {
      question: "What is a good ROI for PPC?",
      answer: "A good ROI for PPC is typically 4x - 8x your ad spend. However, this can vary depending on your industry, your profit margins, and your customer lifetime value. We focus on maximizing your ROI and providing you with a clear return on your investment."
    },
    {
      question: "How do you track the results of your PPC campaigns?",
      answer: "We use a variety of tools to track the results of our PPC campaigns, including Google Analytics, Google Ads conversion tracking, and third-party call tracking software. We provide you with regular, detailed reports that show you exactly how your campaigns are performing."
    },
    {
      question: "Do you offer a free PPC audit?",
      answer: "Yes, we offer a free, no-obligation PPC audit. We will analyze your existing campaigns, identify areas for improvement, and provide you with a clear roadmap for success."
    },
    {
      question: "What are your PPC management packages?",
      answer: "We offer a range of affordable PPC management packages, starting from just $1,000 per month. We will work with you to develop a custom package that meets your specific needs and budget."
    },
    {
      question: "How do I get a free quote for your PPC management services?",
      answer: "Simply click the button below to schedule your FREE, no-obligation consultation with one of our senior strategists. We will discuss your project in detail and provide you with a comprehensive quote within 24 hours. There's no pressure and no obligation."
    },
    {
      question: "Do you manage ads on other platforms besides Google?",
      answer: "Yes, we also manage ads on Microsoft Ads (formerly Bing Ads), Facebook, Instagram, and LinkedIn. We can help you reach your target audience wherever they are online."
    },
    {
      question: "What is conversion rate optimization (CRO) and why is it important for PPC?",
      answer: "Conversion rate optimization (CRO) is the process of optimizing your landing pages to convert more visitors into leads and sales. It is a critical component of any successful PPC campaign, as it helps you maximize the value of every click."
    },
    {
      question: "Do you offer white label PPC management for agencies?",
      answer: "Yes, we offer white label PPC management services for agencies. We can help you provide high-quality PPC services to your clients without having to hire an in-house team. Contact us to learn more about our white label solutions."
    },
    {
      question: "What is your process for creating new PPC campaigns?",
      answer: "We follow a proven 4-step process for creating new PPC campaigns: 1) PPC Audit & Strategy, 2) Campaign Build & Launch, 3) Ongoing Optimization, and 4) Reporting & Analysis. This ensures that your campaigns are structured for success from the very beginning."
    },
    {
      question: "How do you optimize existing PPC campaigns?",
      answer: "We use a variety of proven strategies to optimize existing PPC campaigns, including A/B testing ad copy, adjusting bids, adding negative keywords, and improving quality score. We're always looking for new ways to improve your ROI."
    },
    {
      question: "Why should I choose your PPC management agency?",
      answer: "You should choose us as your PPC management agency because we're obsessed with ROI and we're committed to your success. We're not a generalist agency that dabbles in PPC; we are a team of Google Ads specialists who live and breathe pay-per-click advertising. We're always up-to-date with the latest changes to the platform, and we know what it takes to succeed."
    }
  ];

  return (
    <>
      <Helmet>
        <title>PPC Management Agency | Odin Digital</title>
        <meta name="description" content="Australia's leading PPC management agency. We build high-converting, ROI-focused PPC campaigns that generate leads and sales. Get your free PPC quote." />
        <link rel="canonical" href="https://odindigital.com.au/ppc-management" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", path: "/services" },
            { label: "PPC Management", path: "/services/ppc-management" }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="relative isolate overflow-hidden min-h-[85vh] flex items-center bg-gradient-to-br from-white via-muted/30 to-muted/20">
          {/* Animated Background Blobs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-muted/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-muted/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />
          
          {/* Floating Particles */}
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-muted/20 rounded-full animate-float"></div>
          <div className="absolute top-64 right-1/3 w-3 h-3 bg-muted/25 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-48 left-1/2 w-2 h-2 bg-muted/15 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>

          <div className="container relative z-10 mx-auto px-4 py-28 md:py-32">
            <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-charcoal leading-tight tracking-tight">
                <span className="block">PPC Management Agency</span>
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-charcoal/90 font-bold leading-tight">
                Stop Wasting Money on Google Ads. Start Generating ROI.
              </p>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-charcoal/70 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Are you tired of burning through your ad budget with nothing to show for it? It's time for a PPC management agency that is obsessed with ROI and radical transparency.
              </p>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-charcoal/70 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
                At Odin Digital, we don't just manage your PPC campaigns; we build high-converting, ROI-focused PPC machines that generate real business growth. With no lock-in contracts and a team of Google Ads specialists, we're the PPC management partner you can trust. Ready to finally get a positive return on your ad spend?
              </p>

              <div className="pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Button 
                  variant="hero"
                  size="lg" 
                  onClick={() => navigate('/contact')}
                  className="shadow-glow hover:shadow-primary hover:scale-105 transition-all duration-300 font-bold whitespace-normal h-auto py-4 px-8 sm:py-6 sm:px-12 text-base sm:text-lg"
                >
                  Get Your FREE PPC Management Quote →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-10 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
                The Proof Is in the Performance
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                We're not just making promises; we're delivering verified results. Here's a snapshot of what our clients have achieved.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <Card key={index} className="p-4 sm:p-5 md:p-6 lg:p-8 text-center hover:shadow-lg transition-shadow">
                    <Icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto mb-2 md:mb-3 text-primary" />
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 md:mb-2 bg-gradient-primary bg-clip-text text-transparent leading-tight">
                      {metric.value}
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight">
                      {metric.label}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-10 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
                Is Your Google Ads Account a Money Pit?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                You know Google Ads can be a powerful tool, but right now it feels like you're just throwing money away. It's a common and frustrating problem for businesses across Australia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <Card key={index} className="p-5 sm:p-6 md:p-7 lg:p-8 hover:shadow-lg transition-shadow">
                    <Icon className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 mb-3 md:mb-4 text-primary" />
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">{problem.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{problem.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-10 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
                What Our Clients Say
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                Don't just take our word for it. Here's what business owners are saying about working with Odin Digital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-5 sm:p-6 md:p-7 lg:p-8 hover:shadow-lg transition-shadow flex flex-col">
                  <p className="text-xs sm:text-sm md:text-base mb-4 md:mb-5 italic text-muted-foreground flex-grow leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-3 md:pt-4 mt-auto">
                    <p className="font-bold text-xs sm:text-sm md:text-base">{testimonial.author}</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
                PPC Management Services
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                We offer a complete suite of professional PPC management services to help your business generate a positive return on ad spend.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-5 sm:p-6 md:p-8 hover:shadow-lg transition-shadow flex flex-col">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 mb-3 md:mb-4 text-primary" />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-5 md:mb-6 flex-grow">{service.description}</p>
                    <Button 
                      onClick={() => navigate('/contact')}
                      className="w-full whitespace-normal h-auto py-2.5 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm mt-auto"
                      style={{ backgroundColor: '#D91C5C', color: 'white' }}
                    >
                      {service.cta}
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
                The Odin Digital Difference: Your PPC Management Agency
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                Why choose us as your PPC management agency? Because we're obsessed with ROI and we're committed to your success.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow text-center">
                    <div className="flex justify-center mb-3 md:mb-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
                Our Proven 4-Step PPC Process
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                We follow a simple, effective process to deliver high-performing PPC campaigns for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {process.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg md:text-xl font-bold">
                        {item.step}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3">{item.title}</h3>
                      </div>
                      <Icon className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground pl-14 md:pl-16">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
                Why Choose Odin Digital as Your PPC Management Partner?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                You need a PPC partner who is as obsessed with your ROI as you are. Here's why we're the right choice for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow">
                    <Icon className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-primary" />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4">{item.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-primary opacity-5 -z-10" />
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 px-2">
                Ready to Get a Positive Return on Your Ad Spend?
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-muted-foreground px-4">
                Stop wasting money on Google Ads. It's time to partner with a PPC management agency that can deliver real, measurable results.
              </p>
              <p className="text-sm sm:text-base mb-6 md:mb-8 text-muted-foreground px-4">
                Take the first step towards transforming your PPC campaigns. Schedule your FREE, no-obligation PPC consultation and quote with one of our senior strategists today. We'll analyze your current campaigns, discuss your goals, and show you exactly how we can help you build a PPC machine that drives real business growth. What do you have to lose?
              </p>
              <Button 
                size="xl" 
                onClick={() => navigate('/contact')}
                className="shadow-glow hover:shadow-primary/60 font-bold whitespace-normal h-auto py-3 px-6 text-sm sm:text-base"
                style={{ backgroundColor: '#D91C5C', color: 'white' }}
              >
                Get Your FREE PPC Management Quote →
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
                  Frequently Asked Questions About PPC Management
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg border px-4 sm:px-6">
                    <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-semibold hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-charcoal">
                Compare Our PPC Management Packages
              </h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                Select the PPC management package that delivers maximum ROI for your advertising budget.
              </p>
            </div>
            <ComparisonTable
              title={ppcComparison.title}
              description={ppcComparison.description}
              rows={ppcComparison.rows}
            />
            <div className="text-center mt-12">
              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-primary text-white shadow-primary hover:shadow-glow transition-all whitespace-normal break-words py-3 px-6"
              >
                Schedule Free PPC Consultation →
              </Button>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <ROICalculator />

        <Footer />
      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-background/95 backdrop-blur-sm border-t md:hidden z-40 shadow-lg">
        <Button 
          size="lg"
          onClick={() => navigate('/contact')}
          className="w-full font-bold text-sm h-12"
          style={{ backgroundColor: '#D91C5C', color: 'white' }}
        >
          Get Your FREE Quote →
        </Button>
      </div>
    </>
  );
};

export default PPCManagement;