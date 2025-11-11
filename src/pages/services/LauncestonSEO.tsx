import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { 
  TrendingUp, 
  Target, 
  DollarSign, 
  Users, 
  Zap, 
  Shield,
  Search,
  MapPin,
  BarChart3,
  Award,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Phone
} from "lucide-react";
import { useMarketingForm } from "@/contexts/MarketingFormContext";

const LauncestonSEO = () => {
  const navigate = useNavigate();
  const { openForm } = useMarketingForm();

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://odindigital.com.au/#organization",
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
        "@id": "https://odindigital.com.au/seo-launceston#localbusiness",
        "name": "Odin Digital (Launceston)",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Launceston",
          "addressRegion": "TAS",
          "addressCountry": "AU"
        },
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/seo-launceston#service",
        "serviceType": "Search Engine Optimisation",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "City",
          "name": "Launceston"
        },
        "description": "Professional SEO services in Launceston. We build high-converting, ROI-focused SEO campaigns for Launceston businesses.",
        "name": "SEO Company Launceston"
      },
      {
        "@type": "FAQPage",
        "@id": "https://odindigital.com.au/seo-launceston#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does SEO cost in Launceston?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of SEO in Launceston can vary depending on the competitiveness of your industry and the scope of your campaign. We offer a range of affordable SEO packages for Launceston businesses, and we provide a detailed, transparent quote after a free consultation."
            }
          },
          {
            "@type": "Question",
            "name": "Is SEO worth it for my Launceston small business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, SEO is one of the most cost-effective ways to generate leads and sales for your Launceston small business. By ranking for high-value keywords in your local market, you can attract a steady stream of qualified customers who are actively looking for your products or services."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from SEO in Launceston?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While you can start seeing results from SEO within a few months, it typically takes 6-12 months to achieve significant, long-term results. SEO is a long-term investment, but the rewards can be enormous."
            }
          },
          {
            "@type": "Question",
            "name": "What is local SEO and why is it important for my Launceston business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local SEO is the process of optimizing your website to rank for local keywords in Launceston. It is essential for any business that serves a local customer base, as it helps you get found by customers who are searching for your products or services in your area."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help me rank outside of Launceston?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we can help you rank for broader keywords across Tasmania and Australia-wide. We will develop a comprehensive content strategy and build high-quality backlinks to establish your authority and drive traffic from all over the country."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between SEO and Google Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO is the process of optimizing your website to rank organically in the search results, while Google Ads is a form of paid advertising where you pay to have your ads shown at the top of the search results. Both can be effective, and we can help you determine the right mix for your Launceston business."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer seasonal SEO services for tourism businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in creating seasonal SEO strategies for Launceston's tourism and hospitality businesses. We can help you capture the attention of tourists during the peak summer season and maintain your online presence during the off-season."
            }
          },
          {
            "@type": "Question",
            "name": "How do you build backlinks for a Launceston business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use a variety of proven strategies to build high-quality backlinks for our Launceston clients, including local business directories, guest blogging, and content marketing. We focus on building natural, relevant backlinks that will improve your authority and drive traffic to your website."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with small businesses and sole traders in Launceston?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in providing affordable SEO services for small businesses and sole traders in Launceston. We understand the budget constraints of small businesses and we offer a range of flexible packages to meet your specific needs."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I choose a local Launceston SEO company?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Choosing a local Launceston SEO company gives you a significant advantage over working with a mainland agency. We understand the local market, the seasonal fluctuations, and the unique challenges of doing business in Northern Tasmania. We can provide a more personalized service and are always available to meet in person to discuss your campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "What is a good ROI for SEO in Launceston?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A good ROI for SEO in Launceston is typically 5x - 10x your investment. However, this can vary depending on your industry, your profit margins, and your customer lifetime value. We focus on maximizing your ROI and providing you with a clear return on your investment."
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
            "name": "Do you offer a free SEO audit for Launceston businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer a free, no-obligation SEO audit for Launceston businesses. We will analyze your website, identify your strengths and weaknesses, and provide you with a clear roadmap for improving your online presence."
            }
          },
          {
            "@type": "Question",
            "name": "What are your SEO packages for Launceston businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer a range of affordable SEO packages for Launceston businesses, starting from just $600 per month. We will work with you to develop a custom package that meets your specific needs and budget."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get a free quote for your Launceston SEO services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simply click the button below to schedule your FREE, no-obligation consultation with one of our senior Launceston strategists. We will discuss your project in detail and provide you with a comprehensive quote within 24 hours. There's no pressure and no obligation."
            }
          }
        ]
      }
    ]
  };

  const metrics = [
    { label: "Average ROI", value: "5-10x", icon: TrendingUp },
    { label: "Client Retention", value: "94%", icon: Users },
    { label: "Local Rankings", value: "#1-#3", icon: Target },
    { label: "Starting From", value: "$600/mo", icon: DollarSign },
  ];

  const problems = [
    {
      icon: MapPin,
      title: "Small Regional Market",
      description: "Limited local search volume makes it critical to dominate every keyword and capture every opportunity in Launceston and Northern Tasmania."
    },
    {
      icon: DollarSign,
      title: "Wasted Budget on Mainland Agencies",
      description: "Generic strategies from Sydney or Melbourne agencies don't understand Launceston's unique market dynamics, seasonal tourism patterns, or local competition."
    },
    {
      icon: Target,
      title: "Hobart-Centric Competition",
      description: "Many businesses compete with Hobart-based companies for broader Tasmanian keywords, requiring smart local targeting and content strategy."
    },
    {
      icon: BarChart3,
      title: "No Clear ROI Tracking",
      description: "Previous agencies provide vague 'rankings' and 'traffic' reports without showing the actual leads, sales, and revenue generated from SEO."
    }
  ];

  const services = [
    {
      icon: MapPin,
      title: "Launceston Local SEO",
      description: "Dominate local search results for 'near me' and Launceston-specific keywords. We optimize your Google Business Profile, build local citations, and ensure you appear when locals search for your services.",
      cta: "Get Your FREE Launceston Local SEO Quote →"
    },
    {
      icon: Search,
      title: "Tasmania-Wide SEO",
      description: "Expand beyond Launceston to capture customers across Tasmania. We develop content strategies targeting Devonport, Burnie, Hobart, and regional areas to maximize your market reach.",
      cta: "Get Your FREE Tasmania SEO Quote →"
    },
    {
      icon: Award,
      title: "Tourism & Hospitality SEO",
      description: "Capture tourists during peak season with targeted SEO for accommodation, tours, wineries, and attractions. We build seasonal campaigns that drive bookings year-round.",
      cta: "Get Your FREE Tourism SEO Quote →"
    },
    {
      icon: TrendingUp,
      title: "Ecommerce SEO",
      description: "Drive online sales with product page optimization, category targeting, and content marketing. Perfect for Launceston retailers expanding beyond their physical location.",
      cta: "Get Your FREE Ecommerce SEO Quote →"
    }
  ];

  const differentiators = [
    {
      icon: Shield,
      title: "Launceston Market Expertise",
      description: "We understand the unique challenges of doing business in Northern Tasmania—from seasonal tourism fluctuations to competing with Hobart for statewide keywords."
    },
    {
      icon: DollarSign,
      title: "ROI-Focused, Not Rankings-Focused",
      description: "We don't just chase rankings. Every strategy is designed to generate measurable leads, sales, and revenue for your Launceston business."
    },
    {
      icon: Zap,
      title: "Fast, Local Service",
      description: "No waiting for mainland agencies to understand your market. We're available for in-person meetings and provide rapid response times for all Launceston clients."
    },
    {
      icon: BarChart3,
      title: "Transparent Reporting",
      description: "Monthly reports showing exactly what we've done, what results we've achieved, and the ROI you're getting from your investment."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Free Launceston SEO Audit",
      description: "We analyze your website, research your competitors in Launceston, and identify immediate opportunities for growth."
    },
    {
      number: "02",
      title: "Custom Strategy Development",
      description: "We build a tailored SEO roadmap based on your business goals, budget, and the competitive landscape in Northern Tasmania."
    },
    {
      number: "03",
      title: "On-Page Optimization",
      description: "We optimize your website's technical foundation, content, and local signals to maximize your visibility in Launceston searches."
    },
    {
      number: "04",
      title: "Content & Link Building",
      description: "We create high-quality content and build authoritative backlinks to establish your website as the go-to resource in your industry."
    },
    {
      number: "05",
      title: "Ongoing Optimization & Reporting",
      description: "We continuously monitor performance, adapt to algorithm changes, and provide transparent monthly reporting on your ROI."
    }
  ];

  const faqs = [
    {
      question: "How much does SEO cost in Launceston?",
      answer: "The cost of SEO in Launceston can vary depending on the competitiveness of your industry and the scope of your campaign. We offer a range of affordable SEO packages for Launceston businesses, and we provide a detailed, transparent quote after a free consultation."
    },
    {
      question: "Is SEO worth it for my Launceston small business?",
      answer: "Yes, SEO is one of the most cost-effective ways to generate leads and sales for your Launceston small business. By ranking for high-value keywords in your local market, you can attract a steady stream of qualified customers who are actively looking for your products or services."
    },
    {
      question: "How long does it take to see results from SEO in Launceston?",
      answer: "While you can start seeing results from SEO within a few months, it typically takes 6-12 months to achieve significant, long-term results. SEO is a long-term investment, but the rewards can be enormous."
    },
    {
      question: "What is local SEO and why is it important for my Launceston business?",
      answer: "Local SEO is the process of optimizing your website to rank for local keywords in Launceston. It is essential for any business that serves a local customer base, as it helps you get found by customers who are searching for your products or services in your area."
    },
    {
      question: "Can you help me rank outside of Launceston?",
      answer: "Yes, we can help you rank for broader keywords across Tasmania and Australia-wide. We will develop a comprehensive content strategy and build high-quality backlinks to establish your authority and drive traffic from all over the country."
    },
    {
      question: "What is the difference between SEO and Google Ads?",
      answer: "SEO is the process of optimizing your website to rank organically in the search results, while Google Ads is a form of paid advertising where you pay to have your ads shown at the top of the search results. Both can be effective, and we can help you determine the right mix for your Launceston business."
    },
    {
      question: "Do you offer seasonal SEO services for tourism businesses?",
      answer: "Yes, we specialize in creating seasonal SEO strategies for Launceston's tourism and hospitality businesses. We can help you capture the attention of tourists during the peak summer season and maintain your online presence during the off-season."
    },
    {
      question: "How do you build backlinks for a Launceston business?",
      answer: "We use a variety of proven strategies to build high-quality backlinks for our Launceston clients, including local business directories, guest blogging, and content marketing. We focus on building natural, relevant backlinks that will improve your authority and drive traffic to your website."
    },
    {
      question: "Do you work with small businesses and sole traders in Launceston?",
      answer: "Yes, we specialize in providing affordable SEO services for small businesses and sole traders in Launceston. We understand the budget constraints of small businesses and we offer a range of flexible packages to meet your specific needs."
    },
    {
      question: "Why should I choose a local Launceston SEO company?",
      answer: "Choosing a local Launceston SEO company gives you a significant advantage over working with a mainland agency. We understand the local market, the seasonal fluctuations, and the unique challenges of doing business in Northern Tasmania. We can provide a more personalized service and are always available to meet in person to discuss your campaigns."
    },
    {
      question: "What is a good ROI for SEO in Launceston?",
      answer: "A good ROI for SEO in Launceston is typically 5x - 10x your investment. However, this can vary depending on your industry, your profit margins, and your customer lifetime value. We focus on maximizing your ROI and providing you with a clear return on your investment."
    },
    {
      question: "How do you track the results of your SEO campaigns?",
      answer: "We use a variety of tools to track the results of our SEO campaigns, including Google Analytics, Google Search Console, and third-party rank tracking software. We provide you with regular, detailed reports that show you exactly how your campaigns are performing."
    },
    {
      question: "Do you offer a free SEO audit for Launceston businesses?",
      answer: "Yes, we offer a free, no-obligation SEO audit for Launceston businesses. We will analyze your website, identify your strengths and weaknesses, and provide you with a clear roadmap for improving your online presence."
    },
    {
      question: "What are your SEO packages for Launceston businesses?",
      answer: "Yes, we offer a range of affordable SEO packages for Launceston businesses, starting from just $600 per month. We will work with you to develop a custom package that meets your specific needs and budget."
    },
    {
      question: "How do I get a free quote for your Launceston SEO services?",
      answer: "Simply click the button below to schedule your FREE, no-obligation consultation with one of our senior Launceston strategists. We will discuss your project in detail and provide you with a comprehensive quote within 24 hours. There's no pressure and no obligation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>SEO Company Launceston | Odin Digital</title>
        <meta name="description" content="Launceston's leading SEO company. We build high-converting, ROI-focused SEO campaigns that generate leads and sales. Get your free Launceston SEO quote." />
        <link rel="canonical" href="https://odindigital.com.au/seo-launceston" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-background/95 backdrop-blur-sm border-t border-border">
        <Button 
          className="w-full bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white h-12"
          onClick={openForm}
        >
          Get Your FREE Quote →
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-white via-muted/30 to-muted/20">
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-muted/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-muted/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />
        
        {/* Floating Particles */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-muted/20 rounded-full animate-float"></div>
        <div className="absolute top-64 right-1/3 w-3 h-3 bg-muted/25 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-48 left-1/2 w-2 h-2 bg-muted/15 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        
        {/* Enhanced Decorative Floating Elements - Homepage Style */}
        <div className="absolute top-1/4 left-20 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg"></div>
        <div className="absolute bottom-1/3 right-32 w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/40 rounded-lg animate-float shadow-lg" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-7 h-7 bg-white/20 backdrop-blur-sm border border-white/40 rounded-lg animate-float shadow-lg" style={{ animationDelay: '5s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full py-24 lg:py-32">
          <div className="max-w-5xl mx-auto text-center">
            <div className="space-y-8 lg:space-y-10 animate-fade-in">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-charcoal leading-[0.95] tracking-tight">
                <span className="block mb-3 lg:mb-4 animate-fade-in">SEO Company</span>
                <span className="block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent pb-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  Launceston
                </span>
              </h1>
              
              <div className="space-y-6 lg:space-y-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-charcoal/90 font-bold leading-tight max-w-4xl mx-auto">
                  High-Converting SEO Campaigns That Generate Real Revenue for Northern Tasmania Businesses
                </h2>
                
                <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-3xl mx-auto font-light">
                  Stop wasting money on generic mainland agencies. We build ROI-focused SEO campaigns tailored to Launceston's unique market—from local service businesses to tourism operators competing for statewide keywords.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 pt-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button 
                size="lg" 
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white text-lg px-12 py-6 shadow-glow hover:shadow-primary hover:scale-105 transition-all duration-300"
                onClick={openForm}
              >
                Get Your FREE Launceston SEO Quote →
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-charcoal/20 text-charcoal hover:bg-charcoal/5 text-lg px-10 py-6"
                asChild
              >
                <a href="tel:1300123456">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1300 123 456
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <metric.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-muted/20 via-background to-muted/10 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6 leading-tight">
              Why Most Launceston Businesses Struggle with SEO
            </h2>
            <p className="text-xl text-charcoal/70 leading-relaxed font-light">
              Launceston's market presents unique challenges that generic SEO agencies simply don't understand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {problems.map((problem, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <problem.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-b from-background to-muted/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6 leading-tight">
              Our Launceston SEO Services
            </h2>
            <p className="text-xl text-charcoal/70 leading-relaxed font-light">
              Tailored strategies designed for Northern Tasmania's unique market dynamics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <Button 
                  className="w-full bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white h-12"
                  onClick={openForm}
                >
                  {service.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-muted/20 via-background to-muted/10 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6 leading-tight">
              Why Choose Odin Digital for Launceston SEO?
            </h2>
            <p className="text-xl text-charcoal/70 leading-relaxed font-light">
              We're not another generic agency. We're Launceston SEO specialists who understand your market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {differentiators.map((diff, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <diff.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{diff.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{diff.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="xl" 
              className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white h-12 px-8"
              onClick={openForm}
            >
              Get Your FREE Launceston SEO Quote →
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-b from-background to-muted/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6 leading-tight">
              Our Proven Launceston SEO Process
            </h2>
            <p className="text-xl text-charcoal/70 leading-relaxed font-light">
              A transparent, results-focused approach to dominating Launceston search results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-black text-primary">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="xl" 
              className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white h-12 px-8"
              onClick={openForm}
            >
              Start Your SEO Journey Today →
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-muted/20 via-background to-muted/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-charcoal/70 leading-relaxed font-light">
              Everything you need to know about SEO for Launceston businesses.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <Button 
              size="xl" 
              className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white h-12 px-8"
              onClick={openForm}
            >
              Get Your FREE Launceston SEO Quote →
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 gradient-primary overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Ready to Dominate Launceston Search Results?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Schedule your FREE, no-obligation consultation with one of our senior Launceston SEO strategists. We'll analyze your website, research your competition, and show you exactly how we can grow your business.
          </p>
          
          <div className="flex justify-center">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white max-w-md">
              <h3 className="text-2xl font-bold mb-4">Get Your Free SEO Audit</h3>
              <p className="text-white/80 mb-6">
                No pressure. No obligation. Just honest insights about how to grow your Launceston business with SEO.
              </p>
              <Button 
                size="lg" 
                className="w-full bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white h-12"
                onClick={openForm}
              >
                <Calendar className="w-5 h-5 mr-2" />
                GET YOUR FREE QUOTE NOW →
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LauncestonSEO;
