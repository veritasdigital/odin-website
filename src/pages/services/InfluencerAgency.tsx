import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { 
  Search, 
  Shield, 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3,
  CheckCircle2,
  AlertCircle,
  DollarSign,
  MessageSquare,
  Award,
  Zap,
  Eye,
  FileText,
  Settings,
  ShoppingBag,
  Laptop,
  Sparkles,
  Heart,
  Coffee,
  ArrowRight
} from "lucide-react";

const InfluencerAgency = () => {
  const { openForm } = useMarketingForm();

  const challenges = [
    {
      icon: Search,
      title: "Finding the Right Influencers",
      description: "Identifying influencers who genuinely align with your brand values, target audience, and campaign goals is time-consuming and requires deep platform knowledge."
    },
    {
      icon: Shield,
      title: "Verifying Authenticity",
      description: "Fake followers, bot engagement, and inflated metrics plague the influencer industry. Without proper verification tools, you risk wasting budget on fraudulent influencers."
    },
    {
      icon: BarChart3,
      title: "Unclear ROI and Measurement",
      description: "Most brands struggle to track actual revenue attribution from influencer campaigns. You're left guessing whether the investment delivered real business results."
    },
    {
      icon: AlertCircle,
      title: "Poor Campaign Execution",
      description: "Managing relationships, negotiating contracts, approving content, and coordinating timelines across multiple influencers is operationally complex and error-prone."
    },
    {
      icon: DollarSign,
      title: "High Cost Without Results",
      description: "You're paying thousands for influencer posts but seeing minimal engagement, conversions, or sales. The disconnect between spend and results is frustrating."
    }
  ];

  const whyChoose = [
    {
      icon: Search,
      title: "Influencer Discovery and Verification",
      description: "We use proprietary tools to discover influencers who align with your brand and verify their authenticity. We analyse follower quality, engagement patterns, audience demographics, and historical performance to ensure you work with genuine, high-performing influencers—not fake accounts with bot followers."
    },
    {
      icon: Target,
      title: "Strategic Campaign Planning",
      description: "We don't just throw money at random influencers. We develop data-driven strategies that align influencer selection, content themes, posting schedules, and platform mix with your specific business goals—whether that's brand awareness, lead generation, or direct sales."
    },
    {
      icon: Heart,
      title: "Authentic Engagement Focus",
      description: "We prioritise authentic engagement over vanity metrics. We work with micro and mid-tier influencers who have genuine connections with their audiences, resulting in higher trust, better engagement rates, and superior conversion performance compared to mega-influencers with inflated follower counts."
    },
    {
      icon: BarChart3,
      title: "Transparent ROI Measurement",
      description: "We track every click, conversion, and dollar of revenue attributed to influencer campaigns. Using unique discount codes, affiliate links, and pixel tracking, we provide complete transparency into which influencers drive actual business results—not just likes and comments."
    },
    {
      icon: Settings,
      title: "End-to-End Campaign Management",
      description: "From influencer outreach and contract negotiation to content approval, campaign monitoring, and performance reporting, we handle every operational detail. You get professional campaign execution without the headache of managing dozens of influencer relationships."
    },
    {
      icon: Users,
      title: "Multi-Platform Expertise",
      description: "We specialise in Instagram, TikTok, YouTube, and emerging platforms. Our team understands the unique content formats, algorithms, and audience behaviours on each platform, ensuring your campaigns are optimised for maximum performance wherever your audience spends time."
    },
    {
      icon: MessageSquare,
      title: "Relationship Management",
      description: "We build and maintain long-term relationships with verified influencers across all major industries and niches. Our network gives you access to top-performing creators who are pre-vetted, responsive, and proven to deliver results for brands like yours."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "We've managed over 320 successful influencer campaigns across e-commerce, SaaS, fashion, fitness, and food industries. We've generated over $45 million in attributed revenue for our clients. Our campaigns deliver measurable ROI—not just vanity metrics."
    }
  ];

  const services = [
    {
      icon: Search,
      title: "Influencer Discovery and Selection",
      description: "We identify, vet, and select influencers who align with your brand and audience.",
      features: [
        "Proprietary influencer discovery tools and database access",
        "Audience demographic analysis and alignment verification",
        "Engagement quality assessment and fake follower detection",
        "Historical performance analysis and campaign benchmarking"
      ]
    },
    {
      icon: Target,
      title: "Campaign Strategy and Planning",
      description: "We develop comprehensive influencer marketing strategies aligned with your business goals.",
      features: [
        "Goal setting and KPI definition (awareness, leads, sales)",
        "Platform selection and budget allocation recommendations",
        "Content theme and messaging strategy development",
        "Campaign timeline and posting schedule planning"
      ]
    },
    {
      icon: MessageSquare,
      title: "Influencer Outreach and Negotiation",
      description: "We handle all influencer communications, negotiations, and contract management.",
      features: [
        "Professional outreach to target influencers",
        "Rate negotiation and contract terms management",
        "Legal compliance and FTC disclosure requirements",
        "Relationship management and ongoing communication"
      ]
    },
    {
      icon: FileText,
      title: "Content Development and Approval",
      description: "We work with influencers to create authentic, on-brand content that resonates with their audience.",
      features: [
        "Creative brief development and guidelines",
        "Content review and approval workflow",
        "Brand safety and messaging compliance",
        "A/B testing and creative optimisation"
      ]
    },
    {
      icon: Eye,
      title: "Campaign Management and Monitoring",
      description: "We monitor campaign performance in real-time and optimise for maximum results.",
      features: [
        "Real-time performance tracking and monitoring",
        "Engagement analysis and audience sentiment tracking",
        "Influencer coordination and timeline management",
        "Crisis management and brand safety monitoring"
      ]
    },
    {
      icon: BarChart3,
      title: "ROI Measurement and Reporting",
      description: "We provide detailed reporting on campaign performance and revenue attribution.",
      features: [
        "Revenue attribution tracking via unique codes and links",
        "Engagement metrics and audience reach analysis",
        "Cost per acquisition (CPA) and return on ad spend (ROAS) reporting",
        "Influencer performance comparison and recommendations"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery and Goal Setting",
      description: "We understand your brand, target audience, campaign goals, and budget to develop a customised influencer strategy.",
      outcome: "Clear campaign objectives and success metrics defined"
    },
    {
      number: "02",
      title: "Influencer Research and Selection",
      description: "We use our proprietary tools and influencer network to identify, vet, and select influencers who align with your brand and deliver proven results.",
      outcome: "Pre-vetted list of authentic, high-performing influencers"
    },
    {
      number: "03",
      title: "Strategy Development",
      description: "We create a comprehensive campaign strategy including platform mix, content themes, posting schedules, budget allocation, and performance KPIs.",
      outcome: "Detailed campaign roadmap and execution plan"
    },
    {
      number: "04",
      title: "Influencer Outreach and Negotiation",
      description: "We reach out to selected influencers, negotiate rates and terms, and manage all contract and legal compliance requirements.",
      outcome: "Confirmed influencer partnerships and signed agreements"
    },
    {
      number: "05",
      title: "Campaign Launch and Monitoring",
      description: "We coordinate content creation, approve posts for brand alignment, and launch the campaign across all selected platforms with real-time monitoring.",
      outcome: "Live campaign with professional content and ongoing monitoring"
    },
    {
      number: "06",
      title: "Optimisation and Scaling",
      description: "We analyse real-time performance data, identify top-performing influencers and content, and scale budget to maximise ROI.",
      outcome: "Optimised campaign performance and increased efficiency"
    },
    {
      number: "07",
      title: "Reporting and Analysis",
      description: "We provide detailed performance reports with revenue attribution, engagement metrics, and strategic recommendations for future campaigns.",
      outcome: "Complete transparency into campaign ROI and actionable insights"
    }
  ];

  const industries = [
    {
      icon: ShoppingBag,
      title: "E-Commerce and Retail",
      description: "Drive product sales through authentic influencer recommendations and user-generated content.",
      solution: "We connect you with product-focused influencers who create unboxing videos, tutorials, and authentic reviews that drive conversions."
    },
    {
      icon: Laptop,
      title: "SaaS and Technology",
      description: "Build brand awareness and generate qualified leads through thought leadership and product demonstrations.",
      solution: "We partner you with tech influencers and industry experts who create educational content and product walkthroughs that resonate with B2B audiences."
    },
    {
      icon: Sparkles,
      title: "Fashion and Beauty",
      description: "Showcase products through authentic styling content and beauty tutorials that inspire purchases.",
      solution: "We work with fashion and beauty influencers who create aspirational content, lookbooks, and tutorials that drive engagement and sales."
    },
    {
      icon: Heart,
      title: "Fitness and Wellness",
      description: "Inspire healthy lifestyles and product adoption through authentic transformation stories and workout content.",
      solution: "We connect you with fitness influencers and wellness experts who share genuine experiences and create motivational content that builds trust."
    },
    {
      icon: Coffee,
      title: "Food and Beverage",
      description: "Build appetite appeal and brand loyalty through recipe content, restaurant reviews, and product features.",
      solution: "We partner you with food bloggers and culinary influencers who create mouth-watering content that drives trial and repeat purchase."
    }
  ];

  const faqs = [
    {
      question: "How much does influencer marketing cost?",
      answer: "Influencer marketing costs vary depending on influencer tier (nano, micro, mid-tier, macro, mega), platform (Instagram, TikTok, YouTube), and campaign scope. Nano-influencers (1K–10K followers) typically charge $100–$500 per post. Micro-influencers (10K–100K) charge $500–$5,000. Mid-tier (100K–500K) charge $5,000–$25,000. Macro (500K–1M) and mega (1M+) can charge $25,000–$500,000+. We offer campaigns starting at $5,000 for small brands up to $500,000+ for enterprise campaigns. We work with all budget levels and recommend starting with micro-influencers for the best ROI."
    },
    {
      question: "How do you verify influencer authenticity?",
      answer: "We use proprietary tools and manual analysis to verify follower authenticity, engagement quality, and audience demographics. We analyse engagement patterns (likes, comments, saves, shares), audience composition (real people vs. bots), follower growth patterns (organic vs. suspicious spikes), comment quality (genuine vs. generic), and historical performance across past collaborations. We also cross-reference influencer claims with third-party analytics platforms. This multi-layered verification ensures you work with genuine influencers who have real audiences—not fake accounts with bot followers."
    },
    {
      question: "How do you measure ROI?",
      answer: "We track clicks, conversions, and revenue attribution using multiple methods: unique discount codes assigned to each influencer, affiliate tracking links with UTM parameters, pixel tracking for website conversions, and promo code redemptions. We measure engagement metrics (reach, impressions, likes, comments, shares, saves), traffic metrics (clicks, website visits, time on site), and conversion metrics (leads, sign-ups, purchases, revenue). We calculate cost per acquisition (CPA), return on ad spend (ROAS), and customer lifetime value (CLV) to provide complete transparency into which influencers drive actual business results."
    },
    {
      question: "How long does a campaign take?",
      answer: "A typical influencer marketing campaign takes 4–8 weeks from strategy development to campaign launch. Week 1–2: Discovery, goal setting, influencer research, and selection. Week 3–4: Outreach, negotiation, and contract finalisation. Week 5–6: Content development, approval, and scheduling. Week 7–8: Campaign launch and monitoring. Complex campaigns with multiple influencers, platforms, or custom content may take 8–12 weeks. Ongoing influencer partnerships and always-on campaigns run continuously with monthly optimisation and reporting."
    },
    {
      question: "Can you work with micro-influencers?",
      answer: "Yes. We specialise in micro-influencers (10K–100K followers) because they often deliver the best ROI for brands. Micro-influencers have higher engagement rates (5–10% vs. 1–3% for mega-influencers), more authentic connections with their audiences, and charge lower rates. Their followers trust their recommendations more than celebrity endorsements. We also work with nano-influencers (1K–10K) for hyper-local or niche campaigns, and mid-tier to macro influencers for larger reach campaigns. We recommend a mix based on your goals and budget."
    },
    {
      question: "What platforms do you specialise in?",
      answer: "We specialise in Instagram (feed posts, Stories, Reels), TikTok (short-form video), YouTube (long-form video, Shorts), and emerging platforms like Pinterest and Snapchat. Each platform has unique content formats, algorithms, and audience behaviours. Instagram is ideal for lifestyle, fashion, beauty, and food content. TikTok excels for viral, authentic, and entertainment-focused content. YouTube works best for in-depth product reviews, tutorials, and educational content. We recommend platform mix based on where your target audience spends time and what content format best showcases your product or service."
    },
    {
      question: "Do influencers create the content or do we?",
      answer: "Influencers create the content. Authentic influencer marketing works best when influencers use their own voice, style, and creative approach—because that's what their audience trusts. We provide creative briefs, brand guidelines, key messages, and product information, but the influencer creates content in their authentic style. We review and approve all content before publishing to ensure brand alignment and messaging consistency. This approach delivers better engagement and authenticity than brand-created content posted by influencers."
    },
    {
      question: "Do you guarantee results?",
      answer: "We don't guarantee specific sales or revenue numbers because influencer performance depends on many factors (product-market fit, pricing, offer, audience alignment, content quality). However, we do guarantee professional execution, transparent reporting, and data-driven optimisation. We track all campaigns rigorously and provide detailed performance reports. If influencers underperform, we work with you to identify issues, adjust strategy, and scale budget to top performers. Our 320+ successful campaigns and $45M+ in attributed revenue demonstrate our proven ability to deliver results."
    },
    {
      question: "How do you manage influencer relationships?",
      answer: "We handle all influencer communications, from initial outreach to ongoing relationship management. We negotiate rates and terms, manage contracts and legal compliance, coordinate content creation and approval workflows, handle payment processing, and maintain long-term relationships. Our team has established relationships with verified influencers across all major industries and niches. This network gives you access to top-performing creators who are pre-vetted, responsive, and proven to deliver results. You get professional campaign execution without the operational burden."
    },
    {
      question: "Can we do long-term influencer partnerships?",
      answer: "Absolutely. Long-term influencer partnerships often deliver better ROI than one-off campaigns. When influencers become genuine brand advocates and consistently promote your products over months or years, their audiences trust the recommendations more. We help you identify high-performing influencers from initial campaigns and develop ongoing partnership agreements. These can include monthly retainers, ambassador programmes, or performance-based arrangements. Long-term partnerships also reduce negotiation time, improve content quality, and build stronger brand associations."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://odindigital.com.au/#organization",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au",
        "logo": "https://odindigital.com.au/logo.png",
        "description": "Influencer marketing agency for brands.",
        "sameAs": [
          "https://www.facebook.com/odindigital",
          "https://www.linkedin.com/company/odin-digital",
          "https://www.instagram.com/odindigital"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://odindigital.com.au/influencer-agency#webpage",
        "url": "https://odindigital.com.au/influencer-agency",
        "name": "Influencer Marketing Agency | Authentic Campaigns, Proven Results",
        "description": "Influencer marketing agency for brands. 320+ campaigns, $45M attributed revenue. Instagram, TikTok, YouTube. Authentic engagement, transparent ROI, verified influencers.",
        "isPartOf": {
          "@id": "https://odindigital.com.au/#website"
        },
        "inLanguage": "en-AU",
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01"
      },
      {
        "@type": "WebSite",
        "@id": "https://odindigital.com.au/#website",
        "url": "https://odindigital.com.au",
        "name": "Odin Digital",
        "description": "Influencer marketing agency for brands"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/influencer-agency#discovery",
        "name": "Influencer Discovery and Selection",
        "description": "Influencer discovery, verification, and selection services.",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "serviceType": "Influencer Marketing"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/influencer-agency#strategy",
        "name": "Campaign Strategy and Planning",
        "description": "Influencer marketing strategy and campaign planning services.",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "serviceType": "Influencer Marketing"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/influencer-agency#management",
        "name": "Campaign Management and Monitoring",
        "description": "End-to-end influencer campaign management and performance monitoring.",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "serviceType": "Influencer Marketing"
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
        "@id": "https://odindigital.com.au/influencer-agency#rating",
        "ratingValue": "4.9",
        "ratingCount": "320",
        "bestRating": "5",
        "worstRating": "1"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Influencer Marketing Agency | Authentic Campaigns, Proven Results</title>
        <meta name="description" content="Influencer marketing agency for brands. 320+ campaigns, $45M attributed revenue. Instagram, TikTok, YouTube. Authentic engagement, transparent ROI, verified influencers." />
        <meta name="keywords" content="influencer marketing agency, influencer marketing services, influencer marketing company, influencer marketing management, influencer marketing strategy, Instagram influencer marketing, TikTok influencer marketing, YouTube influencer marketing" />
        <link rel="canonical" href="https://growth-conduit-central.lovable.app/influencer-agency" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Header />

      {/* Section 1: Hero */}
      <ServiceHero
        h1="Influencer Marketing Agency: Authentic Campaigns, Proven Results, Transparent ROI"
        subheadline={
          <p className="hero-sub-headline">
            Your brand deserves influencer marketing that delivers real results. Influencer marketing is one of the most effective ways to reach your target audience. Customers trust influencers more than traditional advertising. They engage with influencer content at higher rates. And they're more likely to buy products recommended by influencers they trust. But if you're struggling with finding the right influencers, unclear ROI, fake followers, or poor campaign execution, you're not alone. Most brands struggle with influencer marketing. They don't know which influencers to work with. They can't measure the ROI of campaigns. They waste money on fake influencers with fake followers. And they end up with campaigns that damage their brand reputation. That's where we come in. Odin Digital is the leading influencer marketing agency. We help brands achieve authentic, high-performing influencer campaigns. We've managed over 320 successful influencer campaigns across Instagram, TikTok, YouTube, and other platforms. We've generated over $45 million in attributed revenue for our clients. We specialise in influencer discovery, campaign strategy, authentic engagement, and transparent ROI measurement. Whether you're a startup, SMB, mid-market company, or enterprise, we can help you achieve your influencer marketing goals.
          </p>
        }
      />

      {/* Introduction */}
      <section className="pt-8 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <Button onClick={openForm} size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Schedule Free Influencer Marketing Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Section 2: The Influencer Marketing Challenge */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Influencer Marketing Challenge
            </h2>
            <p className="text-lg text-muted-foreground">
              Influencer marketing is complex and challenging. Most brands face these obstacles when trying to leverage influencer partnerships for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {challenges.slice(0, 3).map((challenge, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <challenge.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            {challenges.slice(3).map((challenge, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <challenge.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-foreground font-semibold mb-6 max-w-3xl mx-auto">
              We're influencer marketing experts who specialise in authentic campaigns. We understand these challenges and have proven solutions to overcome them.
            </p>
            <Button onClick={openForm} size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Learn How We Can Help <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3: Why Brands Choose Odin Digital */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Brands Choose Odin Digital
            </h2>
            <p className="text-lg text-muted-foreground">
              We deliver authentic, high-performing influencer campaigns that drive measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyChoose.map((item, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <item.icon className="w-10 h-10 text-primary mb-3" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">320+</div>
              <p className="text-muted-foreground">Successful Campaigns</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$45M+</div>
              <p className="text-muted-foreground">Attributed Revenue</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4.9/5</div>
              <p className="text-muted-foreground">Client Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Influencer Marketing Services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Influencer Marketing Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive influencer marketing services from discovery to ROI reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <service.icon className="w-10 h-10 text-primary mb-3" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={openForm} size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Discuss Your Campaign Needs <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 5: How We Help Brands Succeed */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Help Brands Succeed
            </h2>
            <p className="text-lg text-muted-foreground">
              Our proven 7-step process delivers authentic influencer campaigns that drive real business results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-2">{step.description}</p>
                  <div className="flex items-center text-sm text-primary font-medium">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    {step.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={openForm} size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6: Influencer Marketing for Different Industries */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Influencer Marketing for Different Industries
            </h2>
            <p className="text-lg text-muted-foreground">
              We create customised influencer strategies for your industry and target audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <industry.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold text-primary mb-2">Our Solution:</p>
                    <p className="text-sm text-muted-foreground">{industry.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Common questions about our influencer marketing services.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Get Authentic Influencer Campaigns Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stop wasting budget on fake influencers and unverified campaigns. Partner with the influencer marketing agency that delivers authentic engagement, transparent ROI, and proven results. Schedule your free consultation today and discover how we can help you achieve your influencer marketing goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={openForm} size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                Schedule Your Free Influencer Marketing Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border shadow-lg p-4">
        <Button onClick={openForm} className="w-full bg-primary hover:bg-primary/90 text-white">
          Get Your Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <Footer />
    </>
  );
};

export default InfluencerAgency;
