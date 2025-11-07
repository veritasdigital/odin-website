import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Award,
  MapPin,
  Search,
  LineChart,
  Shield,
  CheckCircle2,
  DollarSign,
  Globe,
  Palmtree,
  Building2,
  BarChart3,
  FileSearch,
  Link2,
  ClipboardCheck,
  MessageSquare,
  ChevronDown
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DarwinSEO = () => {
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
        "@type": "LocalBusiness",
        "name": "Odin Digital (Darwin)",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Darwin",
          "addressRegion": "NT",
          "addressCountry": "AU"
        },
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Search Engine Optimisation",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "City",
          "name": "Darwin"
        },
        "description": "Professional SEO services in Darwin. We build high-converting, ROI-focused SEO campaigns for Darwin businesses.",
        "name": "SEO Company Darwin"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does SEO cost in Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of SEO in Darwin can vary depending on the competitiveness of your industry and the scope of your campaign. We offer a range of affordable SEO packages for Darwin businesses, and we provide a detailed, transparent quote after a free consultation."
            }
          },
          {
            "@type": "Question",
            "name": "Is SEO worth it for my Darwin small business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, SEO is one of the most cost-effective ways to generate leads and sales for your Darwin small business. By ranking for high-value keywords in your local market, you can attract a steady stream of qualified customers who are actively looking for your products or services."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from SEO in Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While you can start seeing results from SEO within a few months, it typically takes 6-12 months to achieve significant, long-term results. SEO is a long-term investment, but the rewards can be enormous."
            }
          },
          {
            "@type": "Question",
            "name": "What is local SEO and why is it important for my Darwin business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local SEO is the process of optimizing your website to rank for local keywords in Darwin. It is essential for any business that serves a local customer base, as it helps you get found by customers who are searching for your products or services in your area."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help me rank outside of Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we can help you rank for broader keywords across the Northern Territory and Australia-wide. We will develop a comprehensive content strategy and build high-quality backlinks to establish your authority and drive traffic from all over the country."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between SEO and Google Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO is the process of optimizing your website to rank organically in the search results, while Google Ads is a form of paid advertising where you pay to have your ads shown at the top of the search results. Both can be effective, and we can help you determine the right mix for your Darwin business."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer seasonal SEO services for tourism businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in creating seasonal SEO strategies for Darwin's tourism and hospitality businesses. We can help you capture the attention of tourists during the peak dry season and maintain your online presence during the off-season."
            }
          },
          {
            "@type": "Question",
            "name": "How do you build backlinks for a Darwin business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use a variety of proven strategies to build high-quality backlinks for our Darwin clients, including local business directories, guest blogging, and content marketing. We focus on building natural, relevant backlinks that will improve your authority and drive traffic to your website."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with B2B businesses in the mining and government sectors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we have experience developing and implementing successful SEO strategies for B2B businesses in the mining and government sectors. We can help you target decision-makers and generate leads from these lucrative industries."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I choose a local Darwin SEO company?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Choosing a local Darwin SEO company gives you a significant advantage over working with a mainland agency. We understand the local market, the seasonal fluctuations, and the unique challenges of doing business in the Top End. We can provide a more personalized service and are always available to meet in person to discuss your campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "What is a good ROI for SEO in Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A good ROI for SEO in Darwin is typically 5x - 10x your investment. However, this can vary depending on your industry, your profit margins, and your customer lifetime value. We focus on maximizing your ROI and providing you with a clear return on your investment."
            }
          },
          {
            "@type": "Question",
            "name": "How do you track the results of your SEO campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use a variety of tools to track the results of our SEO campaigns, including Google Analytics, Google Search Console, and third-party rank tracking software. We provide you with regular, detailed reports that show you exactly how your campaigns are performing."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer a free SEO audit for Darwin businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer a free, no-obligation SEO audit for Darwin businesses. We will analyze your website, identify your strengths and weaknesses, and provide you with a clear roadmap for improving your online presence."
            }
          },
          {
            "@type": "Question",
            "name": "What are your SEO packages for Darwin businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer a range of affordable SEO packages for Darwin businesses, starting from just $800 per month. We will work with you to develop a custom package that meets your specific needs and budget."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get a free quote for your Darwin SEO services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simply click the button below to schedule your FREE, no-obligation consultation with one of our senior Darwin strategists. We will discuss your project in detail and provide you with a comprehensive quote within 24 hours. There's no pressure and no obligation."
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
      title: "You're Losing to Mainland Competitors",
      description: "Your website is buried on page 5 of Google, while larger competitors from Sydney and Melbourne are dominating the search results. You feel like you can't compete with their massive marketing budgets and established online presence.",
      icon: Target
    },
    {
      title: "You've Been Burned by Generic SEO Agencies",
      description: "You've paid for expensive SEO services from mainland agencies that don't understand the Darwin market. They've given you a one-size-fits-all solution that has delivered zero results, and you're left feeling ripped off and frustrated.",
      icon: Shield
    },
    {
      title: "You're Missing Out on the Tourist Dollar",
      description: "Your business relies on the seasonal influx of tourists during the dry season, but you're struggling to capture their attention online. You're missing out on a massive opportunity to grow your business and you don't know how to fix it.",
      icon: Palmtree
    }
  ];

  const services = [
    {
      title: "Local SEO Darwin",
      description: "We'll optimize your website to rank for high-value local keywords in Darwin. We'll build your local citations, optimize your Google Business Profile, and create location-specific content to ensure you're the first choice for customers in your area.",
      icon: MapPin,
      cta: "Get Your FREE Darwin Local SEO Quote →"
    },
    {
      title: "Regional & National SEO",
      description: "Ready to expand your reach beyond Darwin? We can help you rank for broader keywords across the Northern Territory and Australia-wide. We'll develop a comprehensive content strategy and build high-quality backlinks to establish your authority and drive traffic from all over the country.",
      icon: Globe,
      cta: "Get Your FREE National SEO Quote →"
    },
    {
      title: "Tourism & Seasonal SEO",
      description: "We specialize in creating seasonal SEO strategies for Darwin's tourism and hospitality businesses. We'll help you capture the attention of tourists during the peak dry season and maintain your online presence during the off-season. We'll optimize your website for popular tourist keywords and create content that showcases the best of what Darwin has to offer.",
      icon: Palmtree,
      cta: "Get Your FREE Tourism SEO Quote →"
    }
  ];

  const differentiators = [
    {
      title: "Darwin Market Experts",
      description: "We're not a generic agency from down south. We are a team of digital marketing experts who understand the unique challenges and opportunities of the Darwin market. We know your customers, your competitors, and what it takes to succeed in the NT.",
      icon: MapPin
    },
    {
      title: "Proven Results in Small Markets",
      description: "We have a proven track record of helping businesses in small, isolated markets like Darwin achieve incredible results. We know how to dominate local search and build a powerful online presence, even with limited search volume.",
      icon: TrendingUp
    },
    {
      title: "Transparent & Affordable",
      description: "We believe in transparent pricing and clear, honest communication. We offer affordable SEO packages for Darwin businesses and we'll never lock you into a long-term contract. We're confident that you'll be so happy with the results that you'll want to stick with us for the long haul.",
      icon: DollarSign
    },
    {
      title: "No Lock-In Contracts",
      description: "We believe in earning your business, not forcing it. Our flexible, month-to-month agreements mean we're always motivated to deliver results. If you're not happy, you're free to leave. It's that simple.",
      icon: Shield
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "SEO Audit & Strategy",
      description: "We start with a comprehensive SEO audit of your website to identify your strengths, weaknesses, and opportunities. We then develop a tailored SEO strategy that is designed to achieve your business goals and dominate the Darwin market.",
      icon: FileSearch
    },
    {
      number: "2",
      title: "On-Page & Technical SEO",
      description: "We optimize your website's on-page and technical SEO to ensure it is search engine friendly. We'll optimize your titles, meta descriptions, and content, and we'll fix any technical issues that may be holding you back.",
      icon: Search
    },
    {
      number: "3",
      title: "Content & Link Building",
      description: "We create high-quality, engaging content that is designed to attract your ideal customers and build your authority online. We then build high-quality backlinks to your website to further boost your rankings and drive traffic.",
      icon: Link2
    },
    {
      number: "4",
      title: "Reporting & Optimization",
      description: "We provide you with regular, detailed reports that show you exactly how your SEO campaigns are performing. We track key metrics like keyword rankings, organic traffic, and conversions, so you can see the direct impact of our work on your bottom line. We then use this data to continuously optimize your campaigns and drive even better results.",
      icon: BarChart3
    }
  ];

  const whyChooseUs = [
    {
      title: "We're Darwin SEO Specialists",
      description: "We're not a big, faceless agency from Sydney or Melbourne. We are a team of digital marketing experts who specialize in helping businesses in Darwin and the NT succeed online. We understand the local market, the seasonal fluctuations, and the unique opportunities of the Top End.",
      icon: MapPin
    },
    {
      title: "We're ROI-Focused",
      description: "We're not interested in vanity metrics like rankings and traffic. We're obsessed with one thing: return on investment. We track every dollar you spend on SEO and show you exactly how much revenue it's generating for your business.",
      icon: DollarSign
    },
    {
      title: "We're Transparent & Honest",
      description: "We believe in radical transparency and honest communication. We provide you with clear, detailed reports that show you exactly how your campaigns are performing. We'll always be upfront with you about what's working and what's not. No jargon, no excuses, just results.",
      icon: ClipboardCheck
    },
    {
      title: "We're Your Partner in Growth",
      description: "We're not just a service provider; we're your partner in growth. We're invested in your success, and we'll work tirelessly to help you achieve your business goals. We're always available to answer your questions, provide advice, and help you navigate the ever-changing world of SEO.",
      icon: Users
    }
  ];

  const faqs = [
    {
      question: "How much does SEO cost in Darwin?",
      answer: "The cost of SEO in Darwin can vary depending on the competitiveness of your industry and the scope of your campaign. We offer a range of affordable SEO packages for Darwin businesses, and we provide a detailed, transparent quote after a free consultation."
    },
    {
      question: "Is SEO worth it for my Darwin small business?",
      answer: "Yes, SEO is one of the most cost-effective ways to generate leads and sales for your Darwin small business. By ranking for high-value keywords in your local market, you can attract a steady stream of qualified customers who are actively looking for your products or services."
    },
    {
      question: "How long does it take to see results from SEO in Darwin?",
      answer: "While you can start seeing results from SEO within a few months, it typically takes 6-12 months to achieve significant, long-term results. SEO is a long-term investment, but the rewards can be enormous."
    },
    {
      question: "What is local SEO and why is it important for my Darwin business?",
      answer: "Local SEO is the process of optimizing your website to rank for local keywords in Darwin. It is essential for any business that serves a local customer base, as it helps you get found by customers who are searching for your products or services in your area."
    },
    {
      question: "Can you help me rank outside of Darwin?",
      answer: "Yes, we can help you rank for broader keywords across the Northern Territory and Australia-wide. We will develop a comprehensive content strategy and build high-quality backlinks to establish your authority and drive traffic from all over the country."
    },
    {
      question: "What is the difference between SEO and Google Ads?",
      answer: "SEO is the process of optimizing your website to rank organically in the search results, while Google Ads is a form of paid advertising where you pay to have your ads shown at the top of the search results. Both can be effective, and we can help you determine the right mix for your Darwin business."
    },
    {
      question: "Do you offer seasonal SEO services for tourism businesses?",
      answer: "Yes, we specialize in creating seasonal SEO strategies for Darwin's tourism and hospitality businesses. We can help you capture the attention of tourists during the peak dry season and maintain your online presence during the off-season."
    },
    {
      question: "How do you build backlinks for a Darwin business?",
      answer: "We use a variety of proven strategies to build high-quality backlinks for our Darwin clients, including local business directories, guest blogging, and content marketing. We focus on building natural, relevant backlinks that will improve your authority and drive traffic to your website."
    },
    {
      question: "Do you work with B2B businesses in the mining and government sectors?",
      answer: "Yes, we have experience developing and implementing successful SEO strategies for B2B businesses in the mining and government sectors. We can help you target decision-makers and generate leads from these lucrative industries."
    },
    {
      question: "Why should I choose a local Darwin SEO company?",
      answer: "Choosing a local Darwin SEO company gives you a significant advantage over working with a mainland agency. We understand the local market, the seasonal fluctuations, and the unique challenges of doing business in the Top End. We can provide a more personalized service and are always available to meet in person to discuss your campaigns."
    },
    {
      question: "What is a good ROI for SEO in Darwin?",
      answer: "A good ROI for SEO in Darwin is typically 5x - 10x your investment. However, this can vary depending on your industry, your profit margins, and your customer lifetime value. We focus on maximizing your ROI and providing you with a clear return on your investment."
    },
    {
      question: "How do you track the results of your SEO campaigns?",
      answer: "We use a variety of tools to track the results of our SEO campaigns, including Google Analytics, Google Search Console, and third-party rank tracking software. We provide you with regular, detailed reports that show you exactly how your campaigns are performing."
    },
    {
      question: "Do you offer a free SEO audit for Darwin businesses?",
      answer: "Yes, we offer a free, no-obligation SEO audit for Darwin businesses. We will analyze your website, identify your strengths and weaknesses, and provide you with a clear roadmap for improving your online presence."
    },
    {
      question: "What are your SEO packages for Darwin businesses?",
      answer: "We offer a range of affordable SEO packages for Darwin businesses, starting from just $800 per month. We will work with you to develop a custom package that meets your specific needs and budget."
    },
    {
      question: "How do I get a free quote for your Darwin SEO services?",
      answer: "Simply click the button below to schedule your FREE, no-obligation consultation with one of our senior Darwin strategists. We will discuss your project in detail and provide you with a comprehensive quote within 24 hours. There's no pressure and no obligation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>SEO Company Darwin | Odin Digital</title>
        <meta name="description" content="Darwin's leading SEO company. We build high-converting, ROI-focused SEO campaigns that generate leads and sales. Get your free Darwin SEO quote." />
        <link rel="canonical" href="https://odindigital.com.au/seo-darwin" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-delayed" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                SEO Company Darwin
              </h1>
              
              <p className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent leading-tight">
                Stop Being Invisible Online. Start Dominating the Darwin Market.
              </p>

              <p className="text-lg md:text-xl mb-6 text-muted-foreground max-w-3xl mx-auto">
                Are you struggling to get found by customers in Darwin and the NT? It's time for a local SEO company that understands the unique challenges of the Top End and delivers real, measurable results.
              </p>

              <p className="text-base md:text-lg mb-10 text-muted-foreground max-w-3xl mx-auto">
                In Darwin, you can't afford to be invisible. At Odin Digital, we don't just offer generic SEO; we provide tailored SEO strategies that help you dominate the local Darwin market and reach customers across the Northern Territory. With no lock-in contracts and a focus on radical transparency, we're the Darwin SEO partner you can trust. Ready to finally get your business on the map?
              </p>

              <Button 
                size="xl" 
                onClick={() => navigate('/contact')}
                className="shadow-glow hover:shadow-primary/60 font-bold whitespace-normal h-auto py-3 px-6 text-sm sm:text-base"
                style={{ backgroundColor: '#D91C5C', color: 'white' }}
              >
                Get Your FREE Darwin SEO Quote →
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Proof Is in the Performance
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're not just making promises; we're delivering verified results. Here's a snapshot of what our clients have achieved.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Is Your Business Invisible in the Top End?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                You know you have a great business, but you're struggling to get found by customers in Darwin. It's a common and frustrating problem for businesses in the NT.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                    <Icon className="w-12 h-12 mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what business owners are saying about working with Odin Digital.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-6 hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 flex-grow">
                  "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with."
                </p>
                <div className="mt-auto">
                  <div className="font-semibold">Fabienne Costa</div>
                  <div className="text-sm text-muted-foreground">Founder, YCL Jewels (Gold Coast)</div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 flex-grow">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
                </p>
                <div className="mt-auto">
                  <div className="font-semibold">Liam C</div>
                  <div className="text-sm text-muted-foreground">Founder, Krush Organics (Sydney)</div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 flex-grow">
                  "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month."
                </p>
                <div className="mt-auto">
                  <div className="font-semibold">Evan Tsaboukos</div>
                  <div className="text-sm text-muted-foreground">Founder, Imperial Wealth (Melbourne)</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                SEO Services for Darwin & the NT
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer a complete suite of professional SEO services to help your Darwin business dominate the local market and reach customers across the Northern Territory.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                    <Icon className="w-12 h-12 mb-4 text-primary" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <Button 
                      onClick={() => navigate('/contact')}
                      className="w-full whitespace-normal h-auto py-3 px-4 text-sm"
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
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Odin Digital Difference: Your Darwin SEO Company
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Why choose us as your SEO company in Darwin? Because we understand the Top End and we're committed to your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {differentiators.map((diff, index) => {
                const Icon = diff.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <Icon className="w-10 h-10 mb-4 text-primary" />
                    <h3 className="text-lg font-bold mb-3">{diff.title}</h3>
                    <p className="text-sm text-muted-foreground">{diff.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Proven 4-Step SEO Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We follow a simple, effective process to deliver high-performing SEO campaigns for our Darwin clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                    <Icon className="w-10 h-10 mb-4 text-primary mt-4" />
                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Odin Digital as Your Darwin SEO Partner?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                You need an SEO partner who understands the unique challenges of the Darwin market. Here's why we're the right choice for your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {whyChooseUs.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                    <Icon className="w-12 h-12 mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Dominate the Darwin Market?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stop being invisible online. It's time to partner with a Darwin SEO company that can deliver real, measurable results.
              </p>
              <p className="text-base text-muted-foreground mb-8">
                Take the first step towards transforming your online presence. Schedule your FREE, no-obligation SEO consultation and quote with one of our senior Darwin strategists today. We'll analyze your current online presence, discuss your goals, and show you exactly how we can help you build an SEO machine that drives real business growth in the Top End. What do you have to lose?
              </p>
              <Button 
                size="xl" 
                onClick={() => navigate('/contact')}
                className="shadow-glow hover:shadow-primary/60 font-bold whitespace-normal h-auto py-3 px-6 text-sm sm:text-base"
                style={{ backgroundColor: '#D91C5C', color: 'white' }}
              >
                Get Your FREE Darwin SEO Quote →
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions About SEO in Darwin
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-4 left-0 right-0 z-50 md:hidden px-4">
          <Button 
            size="lg"
            onClick={() => navigate('/contact')}
            className="w-full shadow-glow font-bold whitespace-normal h-auto py-3 px-4 text-sm"
            style={{ backgroundColor: '#D91C5C', color: 'white' }}
          >
            Get Your FREE Darwin SEO Quote →
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default DarwinSEO;
