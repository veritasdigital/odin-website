import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, TrendingUp, Target, Users, BarChart3, Mail, Search, MessageSquare, Layout, DollarSign, Shield, Award } from "lucide-react";
import { useMarketingForm } from "@/contexts/MarketingFormContext";

const OnlineMarketingCompanyCanberra = () => {
  const { openForm } = useMarketingForm();

  const challenges = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Multiple Marketing Channels Confusion",
      description: "Google Ads, Facebook Ads, SEO, email marketing—which channels should you focus on? Most Canberra businesses struggle to determine the right marketing mix for their goals."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Unclear ROI and Measurement",
      description: "You're spending thousands on marketing, but can't clearly see what's working and what's not. Without proper tracking and reporting, you're flying blind."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Poor Agency Experiences",
      description: "You've been burned by agencies that over-promise and under-deliver. Generic strategies, poor communication, and lack of accountability have left you frustrated."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Lack of Local Market Understanding",
      description: "National agencies don't understand the Canberra market. They apply one-size-fits-all strategies that don't resonate with local businesses or customers."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "High Cost Without Results",
      description: "You're paying for marketing services but not seeing tangible results. Leads aren't converting, revenue isn't growing, and you're questioning if online marketing even works."
    }
  ];

  const whyChoose = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Clear ROI Focus",
      description: "We don't measure success by vanity metrics like clicks or impressions. We focus on what matters: leads, sales, and revenue. Every campaign is built around measurable business outcomes, and we track performance rigorously to ensure your marketing investment delivers real returns."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Local Expertise",
      description: "We understand the Canberra market. We know the industries that thrive here—professional services, government contracting, healthcare, education, and hospitality. We know your customers, your competition, and how to position your business for success in the local market."
    },
    {
      icon: <Layout className="w-8 h-8 text-primary" />,
      title: "Integrated Marketing",
      description: "We don't believe in siloed tactics. We build integrated marketing systems where SEO, Google Ads, Facebook Ads, and email marketing work together to drive consistent results. This holistic approach delivers better performance and higher ROI than disconnected campaigns."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Transparent Communication",
      description: "We provide detailed monthly reporting and regular communication. You'll always know how your campaigns are performing, where your budget is going, and what we're doing to improve results. No smoke and mirrors—just clear, honest reporting."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Affordable Pricing",
      description: "We offer flexible packages starting at $1,500 per month for small businesses. Our pricing is transparent, competitive, and designed to deliver ROI. We work with businesses of all sizes to create custom solutions that fit your budget and goals."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Strategic Approach",
      description: "We start with strategy, not tactics. We take time to understand your business, goals, and target audience before recommending channels and campaigns. This strategic foundation ensures every marketing dollar is spent wisely and aligned with your business objectives."
    }
  ];

  const services = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Strategic Planning and Consultation",
      description: "We start with a comprehensive marketing audit and strategy session to understand your business, goals, and target audience.",
      features: [
        "Marketing audit and competitive analysis",
        "Customer persona development",
        "Channel selection and budget allocation",
        "Custom marketing roadmap"
      ]
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Google Ads Management",
      description: "We create and manage high-performing Google Ads campaigns that drive qualified traffic and convert visitors into customers.",
      features: [
        "Keyword research and selection",
        "Ad copy creation and testing",
        "Bid management and optimisation",
        "Conversion tracking and reporting"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Facebook and Instagram Ads",
      description: "We build targeted social media ad campaigns that reach your ideal customers and drive engagement, leads, and sales.",
      features: [
        "Audience targeting and segmentation",
        "Creative development and testing",
        "Campaign optimisation",
        "Retargeting campaigns"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "SEO Services",
      description: "We optimise your website to rank higher in Google search results and drive organic traffic to your business.",
      features: [
        "Technical SEO audits and fixes",
        "On-page optimisation",
        "Link building and content marketing",
        "Local SEO for Canberra businesses"
      ]
    },
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "Email Marketing",
      description: "We create email campaigns that nurture leads, build customer relationships, and drive repeat business.",
      features: [
        "Email list building and segmentation",
        "Campaign creation and automation",
        "A/B testing and optimisation",
        "Performance tracking and reporting"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Social Media Marketing",
      description: "We manage your social media presence to build brand awareness, engage customers, and drive traffic to your website.",
      features: [
        "Content strategy and creation",
        "Community management",
        "Social media advertising",
        "Analytics and reporting"
      ]
    }
  ];

  const process = [
    {
      number: "01",
      title: "Discovery and Strategy",
      description: "We start with a comprehensive discovery session to understand your business, goals, target audience, and competitive landscape. We conduct a marketing audit and develop a custom strategy.",
      outcome: "Custom marketing strategy and roadmap"
    },
    {
      number: "02",
      title: "Channel Selection",
      description: "Based on your goals and budget, we recommend the optimal marketing channels. We prioritise channels that will deliver the highest ROI for your specific business.",
      outcome: "Channel recommendation and budget allocation"
    },
    {
      number: "03",
      title: "Campaign Development",
      description: "We create campaigns across your selected channels—writing ad copy, designing creatives, building landing pages, and setting up tracking systems.",
      outcome: "Ready-to-launch campaigns with full tracking"
    },
    {
      number: "04",
      title: "Launch and Monitoring",
      description: "We launch your campaigns and monitor performance daily. We watch for issues, optimise bids, and ensure campaigns are running smoothly.",
      outcome: "Live campaigns with daily monitoring"
    },
    {
      number: "05",
      title: "Optimisation and Scaling",
      description: "As data comes in, we optimise campaigns for better performance. We test new audiences, ad variations, and bidding strategies to improve ROI.",
      outcome: "Improved performance and higher ROI"
    },
    {
      number: "06",
      title: "Reporting and Communication",
      description: "We provide detailed monthly reports showing campaign performance, key metrics, and recommendations. We're always available for questions and strategy discussions.",
      outcome: "Transparent reporting and open communication"
    },
    {
      number: "07",
      title: "Continuous Improvement",
      description: "Marketing is never 'done.' We continuously test, learn, and refine your campaigns to drive better results over time.",
      outcome: "Ongoing performance improvement"
    }
  ];

  const industries = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Professional Services",
      description: "Accountants, lawyers, consultants, and other professional services firms rely on online marketing to attract high-value clients.",
      solution: "We build lead generation systems that position you as the trusted expert in your field."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "E-Commerce",
      description: "Online retailers need consistent traffic and high conversion rates to compete in crowded markets.",
      solution: "We create integrated campaigns that drive qualified traffic and optimise your funnel for maximum sales."
    },
    {
      icon: <Layout className="w-8 h-8 text-primary" />,
      title: "Real Estate",
      description: "Real estate agents and agencies need to stand out in a competitive market and attract qualified buyers and sellers.",
      solution: "We build targeted campaigns that generate listing leads and connect you with motivated buyers."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Hospitality and Tourism",
      description: "Restaurants, cafes, hotels, and tourism operators need to attract local customers and tourists year-round.",
      solution: "We create seasonal campaigns that drive bookings, reservations, and foot traffic to your business."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Healthcare",
      description: "Healthcare providers need to attract new patients while maintaining trust and credibility in the community.",
      solution: "We build compliant marketing campaigns that position you as the trusted healthcare provider in Canberra."
    }
  ];

  const faqs = [
    {
      question: "How much does online marketing cost?",
      answer: "Online marketing costs vary depending on your goals, channels, and competition. We offer packages starting at $1,500 per month for small businesses and up to $10,000+ per month for larger campaigns. We're happy to discuss your budget and create a custom quote tailored to your specific needs and objectives."
    },
    {
      question: "How long does it take to see results?",
      answer: "You can see initial results within 2–4 weeks, particularly with paid advertising like Google Ads and Facebook Ads. However, it typically takes 8–12 weeks to optimise campaigns, gather sufficient data, and see consistent, scalable results. SEO typically takes 3–6 months to show significant improvement."
    },
    {
      question: "Which marketing channels should I use?",
      answer: "The best channels depend on your industry, target audience, and goals. We recommend starting with Google Ads and SEO for most businesses, as these capture high-intent search traffic. From there, we add Facebook Ads for audience building and email marketing for nurturing leads. We'll recommend the optimal mix during your strategy session."
    },
    {
      question: "Do you work with businesses in my industry?",
      answer: "Yes. We work with businesses across all industries including professional services, e-commerce, real estate, hospitality, tourism, healthcare, and more. We have proven experience helping Canberra businesses across diverse sectors achieve their marketing goals and grow their revenue."
    },
    {
      question: "How do you measure ROI?",
      answer: "We track every lead, sale, and conversion back to the marketing channel that generated it. We use advanced tracking systems including Google Analytics, conversion pixels, CRM integration, and call tracking to measure performance. You'll receive detailed monthly reports showing exactly what's working and what ROI you're achieving."
    },
    {
      question: "Do you provide transparent reporting?",
      answer: "Yes. Transparency is one of our core values. We provide detailed monthly reporting that shows campaign performance, key metrics (leads, sales, revenue), budget allocation, and recommendations for improvement. You'll always know how your marketing is performing and why. We're also available for questions and strategy discussions anytime."
    },
    {
      question: "Are there long-term contracts?",
      answer: "We offer flexible contracts to suit your needs. While we recommend a minimum 3-month commitment to allow time for optimisation and results, we're happy to work on a month-to-month basis for established clients. We're confident in our results and want you to stay because you're seeing ROI, not because you're locked into a contract."
    },
    {
      question: "Do you guarantee results?",
      answer: "While we can't guarantee specific results (no ethical agency can), we do guarantee our commitment to your success. We'll work tirelessly to optimise your campaigns, test new strategies, and drive measurable improvements. If we're not delivering results, we'll be the first to tell you and adjust the strategy."
    },
    {
      question: "What's included in the free consultation?",
      answer: "Your free consultation includes a 30-45 minute strategy session where we discuss your business, goals, current marketing efforts, and challenges. We'll provide an honest assessment of your online marketing opportunities and recommend channels and strategies. There's no obligation—just valuable insights you can use to grow your business."
    },
    {
      question: "How do I get started?",
      answer: "Simply click the 'Schedule Free Consultation' button to book a time that works for you. We'll have an initial strategy session to understand your business and goals. If we're a good fit, we'll create a custom proposal and get started on your marketing campaigns within 1–2 weeks."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://growth-conduit-central.lovable.app/#local-business",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Online marketing services for Canberra businesses.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Canberra, Australian Capital Territory",
          "addressLocality": "Canberra",
          "addressRegion": "ACT",
          "postalCode": "2600",
          "addressCountry": "AU"
        },
        "telephone": "+61-2-XXXX-XXXX",
        "email": "hello@odindigital.com.au",
        "sameAs": [
          "https://www.facebook.com/odindigital",
          "https://www.linkedin.com/company/odin-digital",
          "https://www.instagram.com/odindigital"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://growth-conduit-central.lovable.app/online-marketing-company-canberra#webpage",
        "url": "https://growth-conduit-central.lovable.app/online-marketing-company-canberra",
        "name": "Online Marketing Canberra | Measurable Results, Transparent Reporting",
        "description": "Online marketing services for Canberra businesses. Google Ads, Facebook Ads, SEO, email marketing. 110+ businesses, 240% lead increase, 185% revenue growth. Local expertise, transparent reporting.",
        "isPartOf": {
          "@id": "https://growth-conduit-central.lovable.app/#website"
        },
        "inLanguage": "en-AU",
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01"
      },
      {
        "@type": "WebSite",
        "@id": "https://growth-conduit-central.lovable.app/#website",
        "url": "https://growth-conduit-central.lovable.app/",
        "name": "Odin Digital",
        "description": "Online marketing services for Canberra businesses"
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/online-marketing-company-canberra#strategic-planning",
        "name": "Strategic Planning and Consultation",
        "description": "Strategic online marketing planning for Canberra businesses.",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#local-business"
        },
        "serviceType": "Online Marketing",
        "areaServed": {
          "@type": "City",
          "name": "Canberra"
        }
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/online-marketing-company-canberra#google-ads",
        "name": "Google Ads Management",
        "description": "Google Ads campaign management for Canberra businesses.",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#local-business"
        },
        "serviceType": "Online Marketing",
        "areaServed": {
          "@type": "City",
          "name": "Canberra"
        }
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/online-marketing-company-canberra#social-ads",
        "name": "Facebook and Instagram Ads",
        "description": "Facebook and Instagram Ads management for Canberra businesses.",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#local-business"
        },
        "serviceType": "Online Marketing",
        "areaServed": {
          "@type": "City",
          "name": "Canberra"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "AggregateRating",
        "@id": "https://growth-conduit-central.lovable.app/online-marketing-company-canberra#rating",
        "ratingValue": "4.9",
        "ratingCount": "110",
        "bestRating": "5",
        "worstRating": "1"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Online Marketing Canberra | Measurable Results, Transparent Reporting</title>
        <meta name="description" content="Online marketing services for Canberra businesses. Google Ads, Facebook Ads, SEO, email marketing. 110+ businesses, 240% lead increase, 185% revenue growth. Local expertise, transparent reporting." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <Header />

      {/* Breadcrumb Navigation */}
      <section className="pt-24 pb-4 bg-background">
        <div className="container mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/canberra" className="hover:text-primary transition-colors">Canberra</Link>
            <span>/</span>
            <span className="text-foreground">Online Marketing Canberra</span>
          </nav>
        </div>
      </section>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-br from-white via-muted/30 to-muted/20">
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-muted/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-muted/15 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-muted/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-charcoal">
                Online Marketing Canberra: Measurable Results, Transparent Reporting, Local Expertise
              </h1>
              <p className="text-xl md:text-2xl text-charcoal/90 mb-8 leading-relaxed">
                Confused by marketing ROI? Burned by generic agencies? Get strategic, data-driven online marketing built for Canberra businesses. No fluff. No lock-in contracts. Just real results.
              </p>
              <Button 
                size="lg" 
                onClick={openForm}
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-3 whitespace-normal break-words"
              >
                Schedule Free Online Marketing Consultation
              </Button>
            </div>
          </div>
        </section>


        {/* Social Proof Metrics */}
        <section className="relative py-16 bg-gradient-to-br from-white via-muted/20 to-white overflow-hidden">
          {/* Floating decorative elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">110+</div>
                <div className="text-charcoal/70">Businesses Helped</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">240%</div>
                <div className="text-charcoal/70">Lead Increase</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">185%</div>
                <div className="text-charcoal/70">Revenue Growth</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">4.9/5</div>
                <div className="text-charcoal/70">Client Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="relative py-20 bg-gradient-to-br from-muted/30 via-white to-muted/20 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-muted/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          
          {/* Floating circles */}
          <div className="absolute top-32 right-1/4 w-12 h-12 bg-white/30 backdrop-blur-sm border border-white/50 rounded-full animate-float shadow-lg" />
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-white/30 backdrop-blur-sm border border-white/50 rounded-full animate-float shadow-lg" style={{ animationDelay: "1.5s" }} />
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal animate-fade-in">The Canberra Online Marketing Challenge</h2>
              <p className="text-lg text-charcoal/70 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Online marketing is complex and challenging. Most Canberra businesses face these common obstacles when trying to grow their online presence and attract customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{challenge.icon}</div>
                    <CardTitle className="text-xl">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{challenge.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-xl text-foreground font-semibold mb-6">
                We're online marketing experts who specialise in Canberra businesses. We understand these challenges and have proven solutions to overcome them.
              </p>
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#B91849] text-white"
              >
                Learn How We Can Help
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-20 bg-gradient-to-br from-white via-muted/10 to-white overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 right-10 w-20 h-20 bg-white/25 backdrop-blur-sm border border-white/40 rounded-lg rotate-12 animate-float shadow-lg" />
          <div className="absolute bottom-32 left-10 w-14 h-14 bg-white/25 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: "2s" }} />
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal animate-fade-in">Why Canberra Businesses Choose Odin Digital</h2>
              <p className="text-lg text-charcoal/70 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                We've helped over 110 Canberra businesses achieve measurable results through integrated online marketing. Here's why they choose us over other agencies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChoose.map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{item.icon}</div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-primary/10 border-2 border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Proven Results for Canberra Businesses</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">110+</div>
                    <div className="text-muted-foreground">Businesses Helped</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">240%</div>
                    <div className="text-muted-foreground">Average Lead Increase</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">185%</div>
                    <div className="text-muted-foreground">Average Revenue Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-20 bg-gradient-to-br from-muted/30 via-white to-muted/20 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          
          {/* Floating particles */}
          <div className="absolute top-40 left-1/3 w-3 h-3 bg-primary/20 rounded-full animate-float" />
          <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal animate-fade-in">Our Online Marketing Services for Canberra Businesses</h2>
              <p className="text-lg text-charcoal/70 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                We offer comprehensive online marketing services designed to drive measurable results for your Canberra business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-[#D91C5C] hover:bg-[#B91849] text-white"
              >
                Discuss Your Marketing Needs
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative py-20 bg-gradient-to-br from-white via-muted/15 to-white overflow-hidden">
          {/* Animated blobs */}
          <div className="absolute top-20 right-1/4 w-60 h-60 bg-muted/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-1/4 w-52 h-52 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
          
          {/* Floating circles */}
          <div className="absolute top-1/3 left-10 w-10 h-10 bg-white/30 backdrop-blur-sm border border-white/50 rounded-full animate-float shadow-lg" />
          <div className="absolute bottom-1/3 right-10 w-12 h-12 bg-white/30 backdrop-blur-sm border border-white/50 rounded-lg animate-float shadow-lg" style={{ animationDelay: "2.5s" }} />
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal animate-fade-in">How We Help Canberra Businesses</h2>
              <p className="text-lg text-charcoal/70 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Our proven 7-step process ensures your online marketing delivers measurable results and continuous improvement.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground mb-2">{step.description}</p>
                    <div className="flex items-center text-sm text-primary font-semibold">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      {step.outcome}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="relative py-20 bg-gradient-to-br from-muted/30 via-white to-muted/20 overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-10 left-1/3 w-56 h-56 bg-accent/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          
          {/* Floating shapes */}
          <div className="absolute top-24 right-20 w-16 h-16 bg-white/25 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" />
          <div className="absolute bottom-24 left-20 w-14 h-14 bg-white/25 backdrop-blur-sm border border-white/40 rounded-lg rotate-45 animate-float shadow-lg" style={{ animationDelay: "1.8s" }} />
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal animate-fade-in">Online Marketing for Different Canberra Industries</h2>
              <p className="text-lg text-charcoal/70 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                We work with businesses across all industries in Canberra. Here's how we help businesses in your sector.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{industry.icon}</div>
                    <CardTitle className="text-xl">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{industry.description}</p>
                    <div className="border-t pt-4">
                      <p className="text-sm font-semibold text-primary mb-2">Our Solution:</p>
                      <p className="text-sm text-muted-foreground">{industry.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-gradient-to-br from-white via-muted/10 to-white overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-1/4 right-10 w-48 h-48 bg-muted/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-10 w-52 h-52 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          
          {/* Floating elements */}
          <div className="absolute top-40 left-1/4 w-8 h-8 bg-white/30 backdrop-blur-sm border border-white/50 rounded-full animate-float shadow-lg" />
          <div className="absolute bottom-40 right-1/4 w-10 h-10 bg-white/30 backdrop-blur-sm border border-white/50 rounded-lg animate-float shadow-lg" style={{ animationDelay: "1.2s" }} />
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal animate-fade-in">Frequently Asked Questions</h2>
                <p className="text-lg text-charcoal/70 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  Common questions about our online marketing services for Canberra businesses.
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-background border-2 rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
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

        {/* Final CTA Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
          {/* Animated pattern background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
          
          {/* Floating circles for CTA section */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full animate-float shadow-lg" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full animate-float shadow-lg" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg rotate-12 animate-float shadow-lg" style={{ animationDelay: "2.5s" }} />
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full animate-float shadow-lg" style={{ animationDelay: "0.8s" }} />
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white animate-fade-in">Get Measurable Results Today</h2>
              <p className="text-lg text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Stop wasting money on marketing that doesn't deliver results. Partner with Odin Digital and get transparent reporting, local expertise, and measurable ROI. We've helped over 110 Canberra businesses achieve their goals—let us help you achieve yours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={openForm}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-3 whitespace-normal break-words"
                >
                  Schedule Your Free Online Marketing Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t shadow-lg md:hidden z-50">
          <Button 
            onClick={openForm}
            className="w-full bg-[#D91C5C] hover:bg-[#B91849] text-white"
            size="lg"
          >
            Schedule Free Consultation
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OnlineMarketingCompanyCanberra;
