import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Target, 
  Zap, 
  Award, 
  ArrowRight, 
  MessageSquare, 
  Video, 
  BarChart3, 
  Lightbulb,
  Rocket,
  ShoppingCart,
  Smartphone,
  Heart,
  Dumbbell
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TikTokAdvertising = () => {
  const { openForm } = useMarketingForm();

  const whyChoose = [
    {
      icon: Target,
      title: "We Understand TikTok's Algorithm",
      description: "TikTok's algorithm is fundamentally different from Facebook or Instagram. We've spent years studying how content goes viral, what triggers the algorithm to push your ads to more users, and how to optimise creative for maximum reach. We use this knowledge to ensure your ads get seen by the right people at the right time."
    },
    {
      icon: Video,
      title: "We Create Authentic Content That Performs",
      description: "Polished corporate ads fail on TikTok. The platform rewards authentic, native-looking content that feels like it belongs in a user's feed. Our creative team knows how to produce ads that don't look like ads—content that entertains, educates, and drives action without breaking the scroll."
    },
    {
      icon: BarChart3,
      title: "We Navigate Attribution and Tracking",
      description: "TikTok's attribution model is notoriously challenging. We implement advanced tracking solutions including TikTok Pixel, conversion API, and third-party analytics to give you accurate data on campaign performance. You'll know exactly which ads are driving sales and which need optimisation."
    },
    {
      icon: TrendingUp,
      title: "We Optimise for Real ROI",
      description: "We don't optimise for vanity metrics like views or likes. We focus on the metrics that matter: cost per acquisition, return on ad spend, and customer lifetime value. Our campaigns are built to generate profitable sales, not just engagement."
    },
    {
      icon: Users,
      title: "We Understand Your Target Audience",
      description: "TikTok's audience is unique. Gen Z and younger millennials have different expectations, pain points, and buying behaviours. We know what resonates with this demographic because we've tested hundreds of campaigns across different industries."
    },
    {
      icon: CheckCircle,
      title: "No Lock-In Contracts",
      description: "We earn your business every month. If you're not happy with the results, you can cancel at any time. 95% of our clients stay with us year after year because we deliver results, not because they're locked into a contract."
    }
  ];

  const services = [
    {
      icon: Lightbulb,
      title: "Campaign Strategy and Planning",
      description: "Before launching any campaign, we develop a comprehensive strategy tailored to your business goals, target audience, and budget.",
      features: [
        "Audience research and targeting strategy",
        "Competitor analysis and market positioning",
        "Campaign objective definition (awareness, consideration, conversion)",
        "Budget allocation and timeline planning"
      ]
    },
    {
      icon: Video,
      title: "Creative Development and Production",
      description: "Our in-house creative team produces TikTok-native content that stops the scroll and drives action.",
      features: [
        "Concept development and scripting",
        "Professional video production or creator partnerships",
        "A/B testing multiple creative variations",
        "Continuous creative iteration based on performance data"
      ]
    },
    {
      icon: Rocket,
      title: "Campaign Management and Optimisation",
      description: "We manage every aspect of your TikTok advertising campaigns, continuously optimising for better performance.",
      features: [
        "Campaign setup and launch",
        "Daily monitoring and bid optimisation",
        "Audience refinement based on performance",
        "Budget scaling for winning campaigns"
      ]
    },
    {
      icon: BarChart3,
      title: "Reporting and Analytics",
      description: "You'll receive transparent, jargon-free reports that show exactly how your campaigns are performing.",
      features: [
        "Weekly performance dashboards",
        "Monthly strategy review calls",
        "Attribution tracking and ROI analysis",
        "Actionable insights and recommendations"
      ]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery and Strategy",
      description: "We start with a deep dive into your business, target audience, and campaign goals. We develop a comprehensive TikTok advertising strategy that aligns with your business objectives.",
      whatYouGet: "Strategic roadmap, audience targeting plan, creative brief"
    },
    {
      step: "2",
      title: "Creative Development",
      description: "Our creative team develops TikTok-native content concepts. We produce multiple creative variations to test different hooks, messaging, and formats.",
      whatYouGet: "3-5 creative concepts, professional video production, A/B testing plan"
    },
    {
      step: "3",
      title: "Campaign Launch",
      description: "We set up your campaigns in TikTok Ads Manager, implement tracking pixels and conversion API, and launch your ads with optimised targeting and bidding strategies.",
      whatYouGet: "Campaign setup, tracking implementation, initial performance data"
    },
    {
      step: "4",
      title: "Continuous Optimisation",
      description: "We monitor campaigns daily, adjusting bids, budgets, and targeting to improve performance. We test new creative variations and scale winning campaigns.",
      whatYouGet: "Daily optimisation, weekly performance reports, ongoing creative testing"
    },
    {
      step: "5",
      title: "Scaling and Growth",
      description: "Once we identify winning campaigns, we scale budgets strategically to maximise ROI. We expand to new audiences and test additional creative concepts to drive sustained growth.",
      whatYouGet: "Scaled campaigns, expanded reach, increased revenue"
    }
  ];

  const businessTypes = [
    {
      icon: ShoppingCart,
      title: "E-Commerce Businesses",
      challenge: "Driving impulse purchases from a scrolling audience",
      solution: "We create thumb-stopping product showcases and user-generated content that drives immediate action",
      benefits: "High conversion rates, viral potential, strong ROAS"
    },
    {
      icon: Rocket,
      title: "SaaS and Tech Startups",
      challenge: "Explaining complex products to a younger audience",
      solution: "We simplify your message with engaging educational content and use cases that resonate with Gen Z",
      benefits: "Brand awareness, qualified signups, reduced CAC"
    },
    {
      icon: Heart,
      title: "Beauty and Fashion Brands",
      challenge: "Standing out in a saturated market",
      solution: "We leverage TikTok trends, creator partnerships, and authentic tutorials to build brand loyalty",
      benefits: "Viral growth, influencer amplification, community building"
    },
    {
      icon: ShoppingCart,
      title: "Food and Beverage Brands",
      challenge: "Creating appetite appeal in a social feed",
      solution: "We produce crave-worthy content that showcases products in action and drives store visits or online orders",
      benefits: "Increased foot traffic, online orders, brand recognition"
    },
    {
      icon: Dumbbell,
      title: "Fitness and Wellness Brands",
      challenge: "Building trust and credibility with a sceptical audience",
      solution: "We create transformation stories, educational content, and community-building campaigns",
      benefits: "Engaged community, program signups, subscription growth"
    }
  ];

  const faqs = [
    {
      question: "Is TikTok right for my business?",
      answer: "TikTok works best for businesses targeting Gen Z and younger millennials (ages 16-35). If your target audience is primarily 45+, TikTok might not be the right platform. However, TikTok's user base is expanding to older demographics. We'll be honest about whether TikTok makes sense for your business before you invest. During our free consultation, we'll analyse your target audience and recommend whether TikTok is a good fit."
    },
    {
      question: "How much does TikTok advertising cost?",
      answer: "TikTok advertising costs vary depending on your industry, target audience, and campaign goals. Most businesses spend $1,000–$10,000 per month on ad spend to see meaningful results. Our management fee is separate and depends on the scope of services (creative production, campaign management, reporting). We can work with any budget and will be transparent about expected results based on your investment. We'll never recommend a budget that won't deliver results."
    },
    {
      question: "How long does it take to see results?",
      answer: "TikTok can deliver fast results compared to other platforms. Some campaigns start generating sales within days of launch. However, we typically recommend a 30-day test period to validate the strategy, gather performance data, and optimise campaigns before scaling budget. During this period, we test multiple creative variations, refine targeting, and identify winning campaigns. After the initial test period, we can scale budgets to drive sustained growth."
    },
    {
      question: "Can you guarantee results?",
      answer: "We can't guarantee specific results because TikTok's algorithm is unpredictable and performance varies by industry, audience, and creative. However, we can guarantee that we'll use proven strategies, test continuously, optimise for better performance, and provide transparent reporting. Our 540% average ROI across all clients speaks to the effectiveness of our approach. If we don't think TikTok will work for your business, we'll tell you upfront."
    },
    {
      question: "How do you handle content creation?",
      answer: "We have an in-house creative team that can produce TikTok content from concept to final edit. We can also work with creators and influencers if that's a better fit for your brand. Many successful TikTok ads use user-generated content (UGC) that feels authentic rather than polished corporate videos. We'll discuss options during our strategy session and recommend the best approach for your business and budget."
    },
    {
      question: "How do you track conversions and ROI?",
      answer: "We implement TikTok Pixel and Conversion API to track conversions accurately. We also integrate with Google Analytics and your e-commerce platform (Shopify, WooCommerce, etc.) to verify attribution. For lead generation campaigns, we track form submissions and phone calls. We provide weekly dashboards and monthly reports showing cost per acquisition, return on ad spend, and overall ROI. You'll have full transparency into campaign performance."
    },
    {
      question: "What kind of creative works best on TikTok?",
      answer: "Authentic, native-looking content performs best on TikTok. Polished corporate ads typically fail because they look out of place in a user's feed. The best TikTok ads feel like organic content—entertaining, educational, or inspiring rather than salesy. We use hooks that grab attention in the first 3 seconds, clear calls-to-action, and multiple creative variations to test what resonates with your audience. Trends, sounds, and formats change constantly, so we continuously test and iterate."
    },
    {
      question: "Do you work with influencers?",
      answer: "Yes, we can coordinate influencer partnerships as part of your TikTok advertising strategy. Influencer content often performs well as paid ads because it's authentic and trusted by the audience. We have relationships with creators across various niches and can help identify, negotiate with, and manage influencer partnerships. This is typically an add-on service to our core campaign management."
    },
    {
      question: "How is TikTok different from Facebook and Instagram ads?",
      answer: "TikTok's algorithm, audience, and content format are fundamentally different. TikTok prioritises entertainment and authenticity over polished marketing. The algorithm is more unpredictable, which means viral potential is higher but so is the risk. Attribution is more challenging due to platform limitations. The audience is younger and expects different content. Strategies that work on Facebook often fail on TikTok. That's why you need a specialist who understands these differences."
    },
    {
      question: "What industries do you have experience with?",
      answer: "We've managed TikTok campaigns for e-commerce, SaaS, beauty and fashion brands, food and beverage companies, fitness and wellness businesses, education providers, and service-based businesses. We have particular expertise in direct-to-consumer brands and businesses targeting younger demographics. If your industry isn't listed, we'll be upfront about whether we have relevant experience or if we're the right fit."
    },
    {
      question: "Do you offer month-to-month contracts?",
      answer: "Yes, we operate on flexible month-to-month agreements after an initial 90-day commitment. We believe our results should be the reason you stay, not a long-term contract. 95% of our clients continue working with us year after year because we deliver results. If you're not happy, you can cancel at any time after the initial period."
    },
    {
      question: "How do you ensure brand safety on TikTok?",
      answer: "We use TikTok's brand safety controls to exclude your ads from appearing near inappropriate content. We monitor campaigns daily to ensure your brand is represented appropriately. We also review all creative before launch to ensure it aligns with your brand guidelines. If you have specific brand safety concerns or requirements, we'll implement additional safeguards."
    },
    {
      question: "Can you help with TikTok organic content as well?",
      answer: "While our core service is paid TikTok advertising, we can provide strategic guidance on organic content as part of a comprehensive TikTok strategy. Many successful brands use a combination of organic content for community building and paid ads for customer acquisition. We can refer you to content creators or social media managers if you need dedicated organic content production."
    },
    {
      question: "Do you service businesses outside Australia?",
      answer: "Yes, while we're based in Australia, we manage TikTok campaigns for businesses globally. TikTok is available in most countries, and we can target audiences anywhere in the world. During our consultation, we'll discuss your target markets and ensure we can deliver results in your specific regions."
    },
    {
      question: "What's the first step to get started?",
      answer: "Schedule a free consultation using the button below. We'll discuss your business goals, target audience, and whether TikTok is the right platform for you. If it makes sense to move forward, we'll develop a custom strategy and proposal. There's no obligation, and we'll be honest about whether we're the right fit for your business."
    }
  ];

  const testimonials = [
    {
      quote: "We were sceptical about TikTok at first, but Odin Digital completely changed our mind. They created content that actually resonated with our younger audience, and we saw a 6x return on our first campaign. The creative team is phenomenal.",
      name: "Sarah Mitchell",
      business: "E-Commerce Fashion Brand",
      result: "600% ROAS in first 60 days"
    },
    {
      quote: "Other agencies couldn't crack TikTok's algorithm, but Odin did. They understand what works on the platform and produce content that doesn't look like ads. Our cost per acquisition dropped by 40% compared to Facebook.",
      name: "James Chen",
      business: "SaaS Startup",
      result: "40% lower CPA than Meta Ads"
    },
    {
      quote: "The transparency and communication from Odin Digital is unmatched. They send weekly reports, respond to questions immediately, and genuinely care about our success. We've worked with 5 agencies before, and Odin is the only one we're keeping.",
      name: "Emily Rodriguez",
      business: "Beauty & Wellness Brand",
      result: "95% client retention rate"
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://growth-conduit-central.lovable.app/#organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Digital marketing agency specialising in TikTok advertising, Google Ads, Meta Ads, SEO, and web design.",
        "sameAs": [
          "https://www.facebook.com/odindigital",
          "https://www.linkedin.com/company/odin-digital",
          "https://www.instagram.com/odindigital"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "url": "https://growth-conduit-central.lovable.app/contact"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://growth-conduit-central.lovable.app/tiktok-advertising#webpage",
        "url": "https://growth-conduit-central.lovable.app/tiktok-advertising",
        "name": "TikTok Advertising Services | Odin Digital",
        "description": "TikTok ads management for businesses. Campaign strategy, creative production, optimisation, and reporting. 540% average ROI, 95% retention.",
        "isPartOf": {
          "@id": "https://growth-conduit-central.lovable.app/#website"
        },
        "inLanguage": "en-AU"
      },
      {
        "@type": "WebSite",
        "@id": "https://growth-conduit-central.lovable.app/#website",
        "url": "https://growth-conduit-central.lovable.app",
        "name": "Odin Digital",
        "description": "Digital marketing agency specialising in TikTok advertising and digital marketing",
        "publisher": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        }
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/tiktok-advertising#tiktok-ads",
        "name": "TikTok Advertising Services",
        "description": "TikTok ads management including campaign strategy, creative production, campaign management, and reporting.",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "areaServed": "AU",
        "serviceType": "Social Media Advertising"
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
        "@id": "https://growth-conduit-central.lovable.app/tiktok-advertising#rating",
        "ratingValue": "4.9",
        "ratingCount": "283",
        "bestRating": "5",
        "worstRating": "1"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>TikTok Advertising Services | Odin Digital</title>
        <meta name="description" content="TikTok ads management for businesses. Campaign strategy, creative production, optimisation, and reporting. 540% average ROI, 95% retention." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-32 px-6 overflow-hidden bg-gradient-subtle">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6">
                TikTok Ads Management for Businesses That Want Real Results
              </h1>
              
              <p className="hero-sub-headline text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed break-words">
                TikTok is the fastest-growing social media platform in the world, with over 1.5 billion active users. For businesses, TikTok represents an unprecedented opportunity to reach younger audiences with authentic, engaging content. But TikTok advertising is fundamentally different from Facebook, Instagram, or Google Ads. The algorithm is unpredictable. The content requirements are unique. The audience is unforgiving of inauthentic marketing. Most businesses who try TikTok ads on their own fail spectacularly. At Odin Digital, we've cracked the code on TikTok advertising. Our clients average a 540% return on investment, and 95% stay with us year after year. We know what works because we've tested it with hundreds of campaigns.
              </p>

              <Button 
                size="xl" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto whitespace-normal break-words hyphens-auto leading-tight text-base sm:text-lg"
              >
                Schedule Free Consultation →
              </Button>
            </div>
          </div>
        </section>

        {/* Why TikTok Matters */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6">
                Why TikTok Advertising Matters Now
              </h2>
              
              <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p className="break-words">
                  TikTok has fundamentally changed how younger audiences discover products. Unlike traditional social media, where users primarily connect with friends and family, TikTok's "For You Page" algorithm exposes users to content from brands and creators they've never heard of. This creates an unprecedented opportunity for businesses to reach new customers at scale.
                </p>
                
                <p className="break-words">
                  A single viral TikTok ad can generate thousands of sales overnight. We've seen clients go from unknown to industry leaders because one piece of content resonated with TikTok's algorithm. The platform rewards creativity, authenticity, and entertainment value—not just big advertising budgets.
                </p>
                
                <p className="break-words">
                  However, the barrier to entry is high. TikTok's unique content format, unpredictable algorithm, and younger audience mean that strategies that work on Facebook or Instagram often fail spectacularly on TikTok. Most businesses waste thousands of dollars on poorly performing campaigns before giving up.
                </p>
                
                <p className="break-words">
                  At Odin Digital, we've spent years mastering TikTok advertising. We understand what makes content go viral, how to navigate the platform's attribution challenges, and how to create authentic ads that drive real business results. If you're ready to tap into TikTok's massive audience without wasting money on trial and error, we can help.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The TikTok Challenge */}
        <section className="py-24 px-6 bg-accent/5">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6 text-center">
                The TikTok Advertising Challenge
              </h2>
              
              <p className="text-lg sm:text-xl text-center text-muted-foreground mb-12 break-words">
                TikTok advertising is not Facebook advertising. Here's why most businesses struggle.
              </p>

              <div className="space-y-8">
                <Card className="p-6 sm:p-8 bg-background border-border">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                    Challenge 1: Polished Ads Don't Work
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed break-words">
                    On Facebook or Instagram, professional, polished ads perform well. On TikTok, they fail. The platform's audience expects authentic, entertaining content that feels native to their feed. Corporate-looking ads get scrolled past immediately. You need content that looks like it was created by a friend, not a marketing team.
                  </p>
                </Card>

                <Card className="p-6 sm:p-8 bg-background border-border">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                    Challenge 2: Attribution and Tracking Challenges
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed break-words">
                    TikTok's attribution model is notoriously unreliable. The platform often under-reports conversions, making it difficult to measure true ROI. Without advanced tracking setup (Conversion API, UTM parameters, third-party analytics), you're flying blind. Most businesses can't accurately track which TikTok ads are driving sales.
                  </p>
                </Card>

                <Card className="p-6 sm:p-8 bg-background border-border">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                    Challenge 3: Unpredictable Algorithm
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed break-words">
                    TikTok's algorithm is a black box. What works one week might fail the next. Trends change overnight. The platform prioritises entertainment value over everything else, which means your ad performance can vary wildly. You need a team that continuously tests, iterates, and adapts to the platform's constant changes.
                  </p>
                </Card>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg sm:text-xl text-muted-foreground mb-6 break-words">
                  We've built a proven system to overcome these challenges and deliver consistent results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Why Businesses Choose Odin Digital
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              We're TikTok advertising specialists who deliver real, measurable results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {whyChoose.map((item, index) => (
                <Card key={index} className="p-6 sm:p-8 bg-background border-border hover:border-primary/20 transition-all group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 break-words">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">{item.description}</p>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button 
                size="xl" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto whitespace-normal break-words hyphens-auto leading-tight text-base sm:text-lg"
              >
                Learn More About Our Approach →
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 px-6 bg-accent/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Our TikTok Advertising Services
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              Full-service TikTok advertising from strategy to execution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 sm:p-8 bg-background border-border hover:border-primary/20 transition-all">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 break-words">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 break-words">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-sm text-muted-foreground flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="break-words">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline"
                    onClick={openForm}
                    className="w-full sm:w-auto whitespace-normal break-words"
                  >
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              Our proven 5-step process for TikTok advertising success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
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
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 break-words">{step.description}</p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs sm:text-sm font-semibold text-primary mb-2">What You Get:</p>
                      <p className="text-xs sm:text-sm text-muted-foreground break-words">{step.whatYouGet}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Types */}
        <section className="py-24 px-6 bg-accent/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              TikTok Advertising for Different Business Types
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              Tailored strategies for your industry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {businessTypes.map((type, index) => (
                <Card key={index} className="p-6 sm:p-8 bg-background border-border">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground break-words">{type.title}</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Challenge:</p>
                      <p className="text-sm sm:text-base text-muted-foreground break-words">{type.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Our Solution:</p>
                      <p className="text-sm sm:text-base text-muted-foreground break-words">{type.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-2">Key Benefits:</p>
                      <p className="text-sm sm:text-base text-muted-foreground break-words">{type.benefits}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-16">
              What Our Clients Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 sm:p-8 bg-background border-border flex flex-col">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-foreground mb-6 italic leading-relaxed flex-grow break-words">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto">
                    <div className="font-bold text-foreground break-words">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground break-words">{testimonial.business}</div>
                    <div className="text-sm text-primary font-semibold mt-2 break-words">{testimonial.result}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-accent/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16">
              Everything you need to know about TikTok advertising.
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

        {/* Final CTA */}
        <section className="py-24 px-6 bg-gradient-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAgMTBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6TTI2IDM0YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDEwYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 break-words">
              Ready to Reach TikTok's Massive Audience?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 break-words">
              Stop wasting money on ads that don't work. Partner with TikTok advertising specialists who understand the platform, create authentic content, and deliver real ROI. Schedule your free consultation today and discover how we can transform your TikTok advertising results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="xl"
                onClick={openForm}
                className="bg-white text-primary hover:bg-white/90 font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto whitespace-normal break-words hyphens-auto leading-tight"
              >
                Schedule Your Free TikTok Advertising Consultation <ArrowRight className="ml-2 inline-block" />
              </Button>
            </div>
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
            Schedule Free Consultation
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default TikTokAdvertising;
