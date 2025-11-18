import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { CheckCircle, TrendingUp, Users, Target, Zap, Award, ArrowRight, MessageSquare, Video, BarChart3, RefreshCw } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getLocationData } from "@/utils/locationData";
import LocationMap from "@/components/LocationMap";

const FacebookAdsNewcastle = () => {
  const { openForm } = useMarketingForm();
  const locationInfo = getLocationData("newcastle");

  const socialProof = [
    { number: "$574M+", label: "Verified Client Revenue" },
    { number: "540%", label: "Average ROI on Ad Spend" },
    { number: "95%", label: "Client Retention Rate" },
    { number: "283+", label: "Successful Campaigns Delivered" }
  ];

  const problems = [
    {
      title: "Wasted Ad Spend on Generic Strategies",
      description: "You've tried running ads yourself or hired a mainland agency that doesn't understand Newcastle. Your budget is draining fast on generic campaigns that fail to resonate with local Novocastrians, resulting in a poor return on investment."
    },
    {
      title: "Creative Fatigue & The Scroll Stopper Problem",
      description: "Your ads look the same as everyone else's. You're constantly \"boosting posts\" with static, uninspired creative that your audience scrolls right past. You lack a strategic creative process to keep your ads fresh and engaging."
    },
    {
      title: "Low Conversion Rates from High Traffic",
      description: "You're getting clicks, but those clicks aren't turning into leads, bookings, or sales. This is a common sign that your landing page experience is broken or your offer isn't optimized for the high-intent traffic we drive."
    }
  ];

  const services = [
    {
      icon: Target,
      title: "Strategic Campaign Setup & Management",
      description: "We don't rely on basic \"boost post\" tactics. Our team builds sophisticated campaign structures optimized for your specific business goal—whether it's lead generation, e-commerce sales, or local foot traffic.",
      features: [
        "Audience Research: Deep dive into the Newcastle demographic",
        "Full-Funnel Strategy: Awareness, Consideration, and Conversion",
        "Conversion API & Pixel Setup: Flawless tracking for accurate data"
      ]
    },
    {
      icon: Video,
      title: "Conversion-Focused Creative Development",
      description: "Creative is the single most important factor for success on Facebook and Instagram. Our in-house creative team develops high-performing ad concepts that are tested rigorously.",
      features: [
        "Video Ads: High-impact, short-form video that captures attention",
        "Image & Carousel Ads: Optimized for various placements",
        "Ad Copywriting: Direct-response copy that drives action"
      ]
    },
    {
      icon: RefreshCw,
      title: "Advanced Retargeting & Remarketing",
      description: "The majority of sales happen after the first touch. We build advanced retargeting campaigns that bring back warm leads who have engaged with your content.",
      features: [
        "Website visitor retargeting campaigns",
        "Engagement-based custom audiences",
        "Email list lookalike audiences"
      ]
    }
  ];

  const whyChoose = [
    {
      title: "Newcastle Market Specialists",
      description: "We understand the local economy, the major industries, and the consumer behaviour of the Hunter region. We don't use generic, off-the-shelf strategies; our campaigns are tailored to resonate with the Newcastle audience."
    },
    {
      title: "Conversion Rate Optimization (CRO) Focused",
      description: "We don't just send traffic; we ensure that traffic converts. We analyze your landing pages, offers, and entire customer journey to maximize the return on every single click you pay for."
    },
    {
      title: "Transparent Reporting & No Lock-In Contracts",
      description: "We believe in earning your business every month. You'll receive clear, jargon-free reports showing exactly where your money is going and the verifiable ROI it's generating. If you're not happy, you're free to leave."
    },
    {
      title: "Creative-First, Data-Driven Approach",
      description: "We combine high-impact creative with rigorous data analysis. Every ad is a test, and every test informs the next iteration, ensuring your campaigns are constantly improving and delivering better results."
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Strategy",
      description: "We start with a deep dive into your business, your ideal customer, and your competitive landscape in Newcastle. We define clear, measurable goals and build a comprehensive Meta Ads strategy to achieve them."
    },
    {
      step: "2",
      title: "Creative & Technical Setup",
      description: "Our team designs high-converting ad creative and copy. Simultaneously, we ensure all the technical elements are flawless: Meta Pixel, Conversion API, and audience segmentation are perfectly configured."
    },
    {
      step: "3",
      title: "Launch, Monitor & Optimize",
      description: "We launch your campaigns and monitor performance daily. We rigorously A/B test ad creative, audiences, and offers. We aggressively cut underperforming ads and scale what works."
    },
    {
      step: "4",
      title: "Reporting & Scaling",
      description: "You receive weekly and monthly reports that focus on key business metrics (Leads, Sales, ROAS), not just vanity metrics. We use this data to plan the next phase of scaling."
    }
  ];

  const whyChooseSecondary = [
    {
      icon: Target,
      title: "Local Expertise, Global Standards",
      description: "While we understand the nuances of the Newcastle market, our strategies are built on global best practices, ensuring you get world-class results right here in the Hunter region."
    },
    {
      icon: TrendingUp,
      title: "Focus on Conversions",
      description: "We are a direct-response agency. Every ad, every campaign, and every dollar is focused on generating a measurable return for your business."
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "We leverage the latest in ad technology and AI-powered optimization to ensure your campaigns are always running at peak efficiency. This allows us to find high-value customers faster and cheaper than traditional methods."
    },
    {
      icon: CheckCircle,
      title: "No Long-Term Risk",
      description: "Our month-to-month agreement means we're constantly working to earn your business. Your success is our only contract."
    }
  ];

  const faqs = [
    {
      question: "How much should a Newcastle business budget for Facebook Ads?",
      answer: "The budget for Facebook Ads varies significantly based on your industry, competition, and goals. We recommend starting with a minimum of $1,000 to $1,500 per month for ad spend to allow for adequate testing and optimization, plus our management fee. We'll work with you to determine a budget that aligns with your desired ROI."
    },
    {
      question: "Are Facebook Ads still effective in 2025?",
      answer: "Yes, absolutely. With over 2.9 billion active users globally, Facebook (Meta) remains the most powerful platform for targeted advertising. The key is moving beyond simple boosting and implementing a sophisticated, full-funnel strategy with high-quality creative, which is where we specialize."
    },
    {
      question: "What is the difference between Facebook Ads and Google Ads?",
      answer: "Google Ads (PPC) is intent-based (people are actively searching for your service now). Facebook Ads is interruption-based (we target people based on their demographics and interests, even if they aren't searching right now). Both are essential for a complete digital strategy."
    },
    {
      question: "How long does it take to see results from Facebook Ads?",
      answer: "You can start seeing results (clicks, impressions, leads) within the first week of launch. However, significant, consistent ROI typically takes 4-6 weeks as our team gathers data, optimizes audiences, and refines the ad creative."
    },
    {
      question: "Do you only manage Facebook Ads, or Instagram Ads too?",
      answer: "We manage the entire Meta Ads ecosystem, which includes both Facebook and Instagram, as well as Messenger and Audience Network placements. We strategically allocate your budget to the platforms that deliver the best performance."
    },
    {
      question: "Do you require a long-term contract?",
      answer: "No. We operate on a flexible, month-to-month agreement. We believe our results should be the reason you stay, not a contract."
    },
    {
      question: "Why should I hire an agency instead of doing it myself?",
      answer: "Running high-performing Meta Ads requires a deep understanding of the platform's algorithms, constant creative testing, data analysis, and advanced tracking setup (like Conversion API). We save you time, prevent costly mistakes, and deliver a higher ROI than most businesses can achieve in-house."
    },
    {
      question: "What kind of creative works best for Newcastle businesses?",
      answer: "Authentic, high-quality video content that speaks directly to a local pain point or desire tends to perform best. We focus on creative that looks native to the platform and is highly engaging, rather than polished, generic stock footage."
    },
    {
      question: "Will you help me set up the Meta Pixel and Conversion API?",
      answer: "Yes, absolutely. A flawless tracking setup is the foundation of a successful campaign. We handle the complete technical setup, ensuring you have accurate data for optimization and retargeting."
    },
    {
      question: "How often will I receive performance reports?",
      answer: "You will receive detailed performance reports weekly, focusing on key metrics like ROAS, cost per lead, and overall campaign health. We also schedule monthly calls to review the data and plan the strategy for the next 30 days."
    },
    {
      question: "Do you specialize in a specific industry in Newcastle?",
      answer: "We have a proven track record across various high-growth Newcastle industries, including e-commerce, trades, professional services, and local retail. Our process is adaptable to any business model focused on lead generation or online sales."
    },
    {
      question: "What is your process for managing my ad budget?",
      answer: "We treat your budget as our own. We use a data-driven approach, aggressively shifting spend away from underperforming ads and scaling up the top performers. Our goal is to maximize your return on ad spend (ROAS) every single day."
    },
    {
      question: "Do you offer services other than Facebook Ads?",
      answer: "Yes, Odin Digital is a full-service digital agency. We also specialize in SEO, Google Ads (PPC), and high-converting Web Design, ensuring a cohesive and powerful digital strategy."
    },
    {
      question: "How do you ensure my ads reach the right people in Newcastle?",
      answer: "We use a combination of precise geographic targeting, custom audiences (e.g., website visitors, customer lists), lookalike audiences, and deep interest-based targeting to ensure your ads are only shown to the most qualified potential customers in the Newcastle area."
    },
    {
      question: "How do I get started with my Newcastle Facebook Ads campaign?",
      answer: "Simply click the button below to schedule your FREE, no-obligation strategy session. We'll analyze your current situation and show you a clear path to generating a profitable return on your Meta Ads investment."
    }
  ];

  const schemaMarkup = {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Odin Digital",
      "url": "https://growth-conduit-central.lovable.app/",
      "logo": "https://growth-conduit-central.lovable.app/logo.png",
      "description": "Performance-focused digital marketing agency specializing in high-ROI Meta Ads management in Newcastle.",
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
    },
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Odin Digital - Facebook Ads Agency Newcastle",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Newcastle",
        "addressRegion": "NSW",
        "addressCountry": "AU"
      },
      "areaServed": {
        "@type": "City",
        "name": "Newcastle"
      },
      "url": "https://growth-conduit-central.lovable.app/facebook-ads-newcastle",
      "priceRange": "$$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      }
    },
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Facebook Ads Management",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Odin Digital - Facebook Ads Agency Newcastle"
      },
      "areaServed": "Newcastle",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Newcastle Facebook Ads Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Strategic Campaign Setup & Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Conversion-Focused Creative Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Advanced Retargeting & Remarketing"
            }
          }
        ]
      }
    },
    faqPage: {
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
    }
  };

  return (
    <>
      <Helmet>
        <title>Facebook Ads Agency Newcastle | Generate ROI with Meta Ads - Odin Digital</title>
        <link rel="canonical" href="https://odindigital.com.au/services/facebook-ads-newcastle" />
        <meta name="description" content="Stop wasting money on Facebook Ads. Our Newcastle Meta Ads agency specializes in high-ROI campaigns, creative testing, and transparent reporting. No lock-in contracts." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup.organization)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup.localBusiness)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup.service)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup.faqPage)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-32 px-6 overflow-hidden bg-gradient-subtle">
          {/* Floating circles decoration */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6">
                Facebook Ads Agency Newcastle
              </h1>
              
              <p className="hero-sub-headline text-xl sm:text-2xl md:text-3xl text-foreground/80 mb-8 leading-tight font-semibold">
                Stop Wasting Money on Social Ads. Start Generating Real ROI in Newcastle.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto break-words">
                Are you tired of boosting posts with zero results? It's time for a Facebook Ads agency that understands the Newcastle market and delivers a measurable return on your ad spend.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto break-words">
                At Odin Digital, we don't just manage your campaigns; we optimize them for profit. We understand the unique challenges of the Newcastle business landscape, from the competitive local market to the need for creative that truly resonates with Novocastrians. We build strategic, full-funnel Facebook and Instagram ad campaigns that turn scrolls into sales.
              </p>

              <Button 
                size="xl" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto whitespace-normal break-words hyphens-auto leading-tight text-base sm:text-lg"
              >
                Get Your FREE Facebook Ads Strategy Session →
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-16 bg-accent/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              The Proof Is in the Performance
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We're not just making promises; we're delivering verified results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {socialProof.map((metric, index) => (
                <Card key={index} className="p-6 sm:p-8 text-center bg-background border-border hover:shadow-elegant transition-all">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-2">{metric.number}</div>
                  <div className="text-sm sm:text-base text-muted-foreground font-medium break-words">{metric.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Is Your Newcastle Business Facing These Facebook Ads Frustrations?
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              You know Facebook and Instagram are where your customers are, but your ads aren't cutting through.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="p-6 sm:p-8 bg-background border-border hover:border-primary/20 transition-colors">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 break-words">{problem.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">{problem.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-6 bg-accent/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what business owners are saying about working with Odin Digital.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="p-6 sm:p-8 bg-background border-border flex flex-col">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-foreground mb-6 italic leading-relaxed flex-grow break-words">
                  "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with."
                </p>
                <div className="mt-auto">
                  <div className="font-bold text-foreground break-words">Fabienne Costa</div>
                  <div className="text-sm text-muted-foreground break-words">Founder, YCL Jewels (Gold Coast)</div>
                </div>
              </Card>

              <Card className="p-6 sm:p-8 bg-background border-border flex flex-col">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-foreground mb-6 italic leading-relaxed flex-grow break-words">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
                </p>
                <div className="mt-auto">
                  <div className="font-bold text-foreground break-words">Liam C</div>
                  <div className="text-sm text-muted-foreground break-words">Founder, Krush Organics (Sydney)</div>
                </div>
              </Card>

              <Card className="p-6 sm:p-8 bg-background border-border flex flex-col">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-foreground mb-6 italic leading-relaxed flex-grow break-words">
                  "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month."
                </p>
                <div className="mt-auto">
                  <div className="font-bold text-foreground break-words">Evan Tsaboukos</div>
                  <div className="text-sm text-muted-foreground break-words">Founder, Imperial Wealth (Melbourne)</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Our Facebook Ads Services for Newcastle Businesses
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              We provide a full-service Meta Ads solution designed to maximize your return on ad spend (ROAS) in the competitive Newcastle market.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {services.map((service, index) => (
                <Card key={index} className="p-6 sm:p-8 bg-background border-border hover:border-primary/20 transition-all group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 break-words">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 break-words">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-sm text-muted-foreground flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="break-words">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="xl" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto whitespace-normal break-words hyphens-auto leading-tight text-base sm:text-lg"
              >
                Get Your FREE Facebook Ads Strategy Session →
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 px-6 bg-accent/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Why Choose Odin Digital as Your Newcastle Facebook Ads Agency?
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              In a city full of digital agencies, why partner with us? Because we focus on what truly matters: your bottom line.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {whyChoose.map((item, index) => (
                <Card key={index} className="p-6 sm:p-8 bg-background border-border">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 break-words">{item.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Our Proven 4-Step Meta Ads Success Process
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              We follow a simple, transparent process to take your Facebook and Instagram advertising from an expense to a predictable revenue stream.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-primary/20 z-0" />
                  )}
                  <Card className="p-6 sm:p-8 bg-background border-border relative z-10 h-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-black mb-4 sm:mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 break-words">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">{step.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Secondary Section */}
        <section className="py-24 px-6 bg-accent/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Why Choose Odin Digital for Your Newcastle Facebook Ads?
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              You need a partner who understands both the technology and the local market. We deliver both.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              {whyChooseSecondary.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 sm:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 break-words">{item.title}</h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed break-words">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-6 bg-gradient-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAgMTBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6TTI2IDM0YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDEwYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 break-words">
              Ready to Transform Your Facebook Ads ROI in Newcastle?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90 break-words">
              Stop guessing and start growing. It's time to partner with the leading Facebook Ads agency in Newcastle that is obsessed with your return on investment.
            </p>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-white/90 break-words max-w-3xl mx-auto">
              Schedule your free, no-obligation strategy session today. We'll analyze your current ad performance, identify immediate opportunities for improvement, and show you exactly how we can turn your Meta Ads into a reliable, scalable source of new business.
            </p>
            <Button 
              size="xl"
              onClick={openForm}
              className="bg-white text-primary hover:bg-white/90 font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto whitespace-normal break-words hyphens-auto leading-tight"
            >
              Get Your FREE Facebook Ads Strategy Session <ArrowRight className="ml-2 inline-block" />
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Frequently Asked Questions About Facebook Ads in Newcastle
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16">
              Everything you need to know about Facebook Ads in Newcastle
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground break-words">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-3 sm:p-4 bg-background border-t border-border md:hidden z-40">
          <Button 
            size="lg" 
            variant="cta"
            onClick={openForm}
            className="w-full whitespace-normal break-words hyphens-auto leading-tight text-sm sm:text-base"
          >
            <MessageSquare className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            Get FREE Strategy Session
          </Button>
        </div>

      {/* Location Map */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <LocationMap 
            city="Newcastle"
            coordinates={getLocationData("Newcastle")?.coordinates || { lat: -32.9283, lng: 151.7817 }}
            address={getLocationData("Newcastle")?.citations.address}
          />
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default FacebookAdsNewcastle;
