import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { getProfessionalServiceSchema, getFAQSchema, getOrganizationSchema } from "@/utils/schemaMarkup";
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
  Eye,
  AlertCircle,
  Play,
  Film,
  Search,
  RefreshCw
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ROICalculator } from "@/components/ROICalculator";
import { socialMediaComparison } from "@/utils/serviceComparisonTables";

const YouTubeAdvertising = () => {
  const { openForm } = useMarketingForm();

  const painPoints = [
    {
      icon: BarChart3,
      title: "The Vanity Metrics Trap",
      description: "You're paying for millions of views, but those views aren't turning into customers. Most agencies optimize for views and engagement because it looks impressive on reports, but it does nothing for your bottom line."
    },
    {
      icon: AlertCircle,
      title: "The Skippable Ad Disaster",
      description: "97% of people skip your ad after 5 seconds because your creative doesn't hook them immediately. Most agencies create beautiful, polished ads that get skipped because they don't understand YouTube's unique creative requirements."
    },
    {
      icon: Target,
      title: "The Wrong Audience Problem",
      description: "Your ads are being shown to people who will never buy. Most agencies use broad demographic targeting instead of precise intent-based targeting, wasting 60-80% of your budget on irrelevant traffic."
    },
    {
      icon: RefreshCw,
      title: "The No Funnel Strategy Problem",
      description: "You're sending cold traffic directly to a sales page and wondering why conversion rates are abysmal. Most agencies don't understand how to warm up cold YouTube traffic before asking for the sale."
    },
    {
      icon: Video,
      title: "The Creative That Doesn't Hook Problem",
      description: "Your video ads look professional but fail to capture attention in the first 3 seconds. Most agencies create corporate-style videos that get ignored in a platform designed for entertainment and education."
    }
  ];

  const audienceTargeting = [
    {
      title: "In-Market Audiences: People Actively Shopping",
      description: "We target people who Google has identified as actively researching or comparing products in your category. These are high-intent buyers, not casual browsers."
    },
    {
      title: "Custom Intent Audiences: People Searching for Your Keywords",
      description: "We create custom audiences based on the exact search terms your ideal customers use on Google. If they're searching for your solution, we show them your YouTube ad."
    },
    {
      title: "Affinity Audiences: People with Relevant Interests",
      description: "We target people with demonstrated long-term interests related to your product or service. This ensures your ads reach people who actually care about what you offer."
    },
    {
      title: "Remarketing Audiences: People Who Already Know You",
      description: "We aggressively retarget people who have visited your website, watched your videos, or engaged with your brand. These warm audiences convert at 3-5x higher rates than cold traffic."
    }
  ];

  const creativeStrategy = [
    {
      title: "The 3-Second Hook: Stopping the Skip",
      description: "We use proven hook formulas that grab attention immediately: pattern interrupts, bold claims, provocative questions, or visual surprises. If we don't hook them in 3 seconds, we lose them forever."
    },
    {
      title: "The 5-Second Value Proposition: Delivering the Message Before the Skip",
      description: "We deliver the core value proposition within the first 5 seconds, before the skip button appears. Even if they skip, they've still received your message."
    },
    {
      title: "Multiple Creative Variations: Testing What Works",
      description: "We create 5-10 creative variations for every campaign, testing different hooks, value propositions, and calls-to-action. Data tells us what works; we don't guess."
    },
    {
      title: "Video Formats for Every Stage of the Funnel",
      description: "We create different video formats for different funnel stages: awareness (educational), consideration (case studies), conversion (product demos). Each stage requires different messaging."
    }
  ];

  const funnelStrategy = [
    {
      title: "Awareness Stage: Introducing Your Brand",
      description: "We use educational or entertaining content to introduce your brand to cold traffic. The goal is not to sell, but to build awareness and establish credibility."
    },
    {
      title: "Consideration Stage: Educating and Building Trust",
      description: "We nurture warm traffic with case studies, testimonials, and educational content that positions your solution as the best choice. This is where trust is built."
    },
    {
      title: "Conversion Stage: Asking for the Sale",
      description: "We show product demos, special offers, and direct-response ads to warm traffic who has been educated and nurtured. This is where the sale happens."
    },
    {
      title: "Aggressive Retargeting: Capturing the 97% Who Didn't Convert",
      description: "We retarget people who visited your site but didn't convert with aggressive offers, social proof, and urgency. Most conversions happen on the 2nd, 3rd, or 4th touch."
    }
  ];

  const adFormats = [
    {
      icon: Play,
      title: "Skippable In-Stream Ads (TrueView)",
      description: "The most common YouTube ad format. Viewers can skip after 5 seconds. Best for: brand awareness, consideration stage. We only pay when they watch 30+ seconds or take action.",
      use: "Best for building awareness and reaching large audiences cost-effectively."
    },
    {
      icon: Video,
      title: "Non-Skippable In-Stream Ads",
      description: "15-20 second ads that must be watched in full. Best for: short, punchy messages, conversion stage. Higher CPM but guaranteed views.",
      use: "Best for delivering complete messages to warm audiences."
    },
    {
      icon: Zap,
      title: "Bumper Ads",
      description: "6-second non-skippable ads. Best for: reinforcing brand messages, retargeting. Perfect for mobile viewers.",
      use: "Best for frequency and brand recall with short, memorable messages."
    },
    {
      icon: Search,
      title: "Discovery Ads (In-Feed Video Ads)",
      description: "Ads that appear in YouTube search results, alongside related videos, or on the YouTube homepage. Best for: capturing high-intent searchers.",
      use: "Best for reaching people actively searching for solutions like yours."
    }
  ];

  const metrics = [
    {
      icon: TrendingUp,
      title: "Cost Per Acquisition (CPA)",
      description: "How much it costs to acquire a new customer, not just a lead or a view. This is the metric that actually matters to your business.",
      target: "Target: Profitable CPA based on customer lifetime value"
    },
    {
      icon: BarChart3,
      title: "Return on Ad Spend (ROAS)",
      description: "For every dollar spent on YouTube ads, how many dollars in revenue are generated. This is the ultimate measure of campaign success.",
      target: "Target: Minimum 3:1 ROAS, average 5:1 ROAS"
    },
    {
      icon: Target,
      title: "Conversion Rate",
      description: "What percentage of people who watch your ad take the desired action. Low conversion rates indicate creative or targeting problems.",
      target: "Target: 2-5% for cold traffic, 10-20% for warm traffic"
    },
    {
      icon: CheckCircle,
      title: "Revenue Impact",
      description: "The total revenue generated by YouTube advertising, tracked through proper attribution. This is what your CFO cares about.",
      target: "Target: Measurable, incremental revenue growth"
    }
  ];

  const whyChoose = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "$574M+ in verified client revenue. 540% average ROI. We've tested and optimized hundreds of YouTube campaigns across dozens of industries."
    },
    {
      icon: CheckCircle,
      title: "No Lock-In Contracts",
      description: "We earn your business every month. If we're not delivering ROI, you can cancel at any time. 95% of clients stay with us year after year because we deliver results."
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description: "You get real-time access to all campaign data, detailed monthly reports, and regular strategy calls. No hiding behind vague metrics or jargon."
    },
    {
      icon: Video,
      title: "Creative Expertise",
      description: "Our in-house creative team understands YouTube's unique requirements. We create ads that hook viewers, deliver value, and drive action."
    },
    {
      icon: TrendingUp,
      title: "Conversion-Focused",
      description: "We optimize for revenue and ROI, not views or engagement. Every decision is driven by what actually moves the needle for your business."
    }
  ];

  const faqs = [
    {
      question: "How much does YouTube advertising cost?",
      answer: "YouTube advertising costs vary depending on your industry, competition, and goals. Most Australian businesses invest $2,000 - $10,000 per month for comprehensive YouTube advertising (ad spend + management). Our team will provide a detailed quote during your free audit. The key is ensuring that your YouTube ad spend generates a positive return on investment. We work with businesses of all sizes and can adapt strategies to fit your budget while maintaining effectiveness."
    },
    {
      question: "How long does it take to see results from YouTube ads?",
      answer: "YouTube ads can deliver results immediately (within days), but optimal performance typically requires 2-4 weeks of testing and optimization to find the winning creative and audience combinations. During this testing phase, we experiment with different hooks, messaging, targeting options, and funnel strategies. Once we identify what works, we scale budgets aggressively to maximize ROI. Some campaigns go viral and deliver exceptional results in the first week, while others require patient testing and iteration."
    },
    {
      question: "Do I need to create video content, or can you help with that?",
      answer: "We can work with your existing video assets and optimize them for YouTube advertising, or we can help you create new video content designed specifically for high-converting YouTube ads. Our in-house creative team understands the unique requirements of YouTube advertising: hooks that stop the skip, clear value propositions, and strong calls-to-action. We can produce everything from simple talking-head videos to high-production brand stories, depending on your needs and budget."
    },
    {
      question: "What's the difference between YouTube ads and other social media ads?",
      answer: "YouTube ads are video-based and appear on the world's second-largest search engine. They're ideal for storytelling, education, and building trust through longer-form content (15-60 seconds vs 6-15 seconds on other platforms). YouTube also has unique targeting options (in-market audiences, custom intent based on Google search behaviour) that other platforms don't offer. The audience on YouTube is also in a different mindset—they're actively seeking information and entertainment, which makes them more receptive to well-crafted video ads."
    },
    {
      question: "How do you measure ROI for YouTube advertising?",
      answer: "We implement advanced conversion tracking to measure cost per acquisition, return on ad spend, conversion rate, and revenue impact. You will know exactly how much revenue your YouTube ads are generating. We integrate YouTube conversion tracking with your CRM, e-commerce platform, and analytics tools to track the complete customer journey from ad view to purchase. We also implement view-through conversion tracking to capture conversions that happen after someone sees your ad but doesn't click immediately."
    },
    {
      question: "Can YouTube ads work for B2B businesses?",
      answer: "Absolutely. YouTube ads are highly effective for B2B businesses, especially for targeting decision-makers, educating prospects, and building trust before the sale. We use LinkedIn-style targeting (job titles, company size, industry) combined with in-market and custom intent audiences to reach B2B buyers when they're actively researching solutions. YouTube is particularly effective for B2B because it allows you to educate and build credibility through longer-form content (30-60 second ads or even 2-3 minute discovery ads)."
    },
    {
      question: "How do you prevent my ads from being skipped?",
      answer: "We use proven hook formulas to grab attention in the first 3 seconds and deliver the core value proposition within the first 5 seconds (before the skip button appears). Even if someone skips your ad, they've still received your core message. We also test multiple creative variations to find the hooks that generate the highest view-through rates. For critical conversion-stage campaigns, we use non-skippable ad formats to ensure the complete message is delivered. The key is understanding that skippable ads are not a weakness—they're an opportunity to reach massive audiences cost-effectively by only paying for engaged viewers."
    },
    {
      question: "Do you offer a performance guarantee?",
      answer: "We offer the best guarantee in the industry: No Lock-In Contracts. If we are not delivering a positive ROI, you are free to leave at any time. We put the risk on us, not you. While we can't guarantee specific results (because campaign performance depends on many factors including your offer, pricing, and market conditions), we do guarantee our process: strategic targeting, proven creative formulas, continuous optimization, and full transparency. Our 540% average ROI and 95% client retention rate demonstrate that our approach works consistently across industries."
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getProfessionalServiceSchema(
        "YouTube Advertising Services - Odin Digital",
        "Comprehensive YouTube advertising services for Australian businesses, including audience targeting, creative production, funnel strategy, and conversion tracking, focused on revenue and ROI.",
        "/youtube-advertising"
      ),
      getFAQSchema(faqs)
    ]
  };

  return (
    <>
      <Helmet>
        <title>YouTube Advertising Agency | YouTube Marketing Services | Odin Digital</title>
        <meta name="description" content="Stop wasting money on YouTube ads that don't convert. Odin Digital provides YouTube advertising services focused on revenue, not views. No lock-in contracts. Get your free audit today." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-32 md:pb-24 px-4 sm:px-6 overflow-hidden bg-gradient-subtle">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground mb-6">
                YouTube Advertising Agency
              </h1>
              
              <p className="hero-sub-headline text-xl sm:text-2xl md:text-3xl text-foreground/80 mb-6 leading-tight font-semibold">
                Stop Wasting Money on YouTube Ads That Don't Convert. Start Turning Video Views into Revenue with Proven YouTube Advertising Strategies.
              </p>

              <p className="text-lg sm:text-xl text-foreground/70 mb-4 font-medium break-words">
                The YouTube Marketing Agency Australian Businesses Trust for High-Converting Video Campaigns and Predictable ROI.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 break-words">
                Partner with Odin Digital and Watch Your YouTube Ads Drive Real Revenue, Not Just Views.
              </p>

              <Button 
                size="xl" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto whitespace-normal break-words hyphens-auto leading-tight text-base sm:text-lg"
              >
                Get Your FREE YouTube Advertising Audit →
              </Button>

              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8 sm:gap-12">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-primary">$574M+</div>
                  <div className="text-sm text-muted-foreground">Client Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Client Retention Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Agitation Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Why Most YouTube Advertising Agencies Fail to Deliver Real Results
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              Australian businesses waste millions every year on YouTube video marketing that looks impressive on paper but delivers nothing to the bottom line. Here's why most agencies fail.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
              {painPoints.map((point, index) => (
                <Card key={index} className="p-6 bg-background border-border hover:border-primary/20 transition-all text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 break-words">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words">{point.description}</p>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button 
                size="xl" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto whitespace-normal break-words hyphens-auto leading-tight text-sm sm:text-base md:text-lg px-4 sm:px-6"
              >
                Stop Wasting Money: Talk to a YouTube Advertising Expert →
              </Button>
            </div>
          </div>
        </section>

        {/* Audience Precision */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-accent/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Audience Precision: Targeting Only People Who Will Actually Buy
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              We don't waste your budget on broad demographic targeting. We use advanced YouTube audience targeting to ensure your ads are shown only to people who are most likely to buy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {audienceTargeting.map((item, index) => (
                <Card key={index} className="p-6 sm:p-8 bg-background border-border">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 break-words">{item.title}</h3>
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
                See Our YouTube Advertising Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* Creative That Hooks */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Creative That Hooks: Stopping the Skip in 3 Seconds
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              We create YouTube ad creative that hooks viewers in the first 3 seconds and delivers value immediately.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {creativeStrategy.map((item, index) => (
                <Card key={index} className="p-6 sm:p-8 bg-background border-border">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 break-words">{item.title}</h3>
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
                See Our YouTube Creative Services →
              </Button>
            </div>
          </div>
        </section>

        {/* Funnel Strategy */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-accent/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Funnel Strategy: Warming Up Cold Traffic Before the Sale
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              We don't send cold traffic directly to a sales page. We build strategic funnels that warm up cold traffic, nurture them, and convert them over time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {funnelStrategy.map((item, index) => (
                <Card key={index} className="p-6 sm:p-8 bg-background border-border">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 break-words">{item.title}</h3>
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
                See Our YouTube Funnel Strategies →
              </Button>
            </div>
          </div>
        </section>

        {/* YouTube Ad Formats */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              YouTube Ad Formats: Choosing the Right Format for Your Goal
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              We use the right YouTube ad format for your specific goal.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {adFormats.map((format, index) => (
                <Card key={index} className="p-6 bg-background border-border hover:border-primary/20 transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <format.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 break-words">{format.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 break-words">{format.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-primary mb-1">Best For:</p>
                    <p className="text-xs text-muted-foreground break-words">{format.use}</p>
                  </div>
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
                Talk to a YouTube Advertising Specialist →
              </Button>
            </div>
          </div>
        </section>

        {/* Conversion Tracking */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-accent/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Conversion Tracking: Measuring What Actually Matters
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              We don't report on vanity metrics. We report on the metrics that actually matter to your business.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-6 bg-background border-border text-center hover:border-primary/20 transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 break-words">{metric.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 break-words">{metric.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-primary font-semibold break-words">{metric.target}</p>
                  </div>
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
                See Our YouTube Advertising Reporting →
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              Why Businesses Choose Odin Digital for YouTube Advertising
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              We are not a generalist agency that dabbles in YouTube advertising. We are specialists who understand how to turn video views into revenue.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
              {whyChoose.map((item, index) => (
                <Card key={index} className="p-6 bg-background border-border hover:border-primary/20 transition-all text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 break-words">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words">{item.description}</p>
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
                Talk to a YouTube Advertising Specialist →
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-accent/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-foreground mb-4">
              FAQs: Your Questions About YouTube Advertising Answered
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16">
              Everything you need to know about YouTube advertising for your business.
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
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAgMTBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6TTI2IDM0YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDEwYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 break-words">
              Ready to Stop Paying for Views and Start Driving Real Revenue?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 break-words">
              Stop settling for vanity metrics. Start working with the YouTube advertising agency that delivers real revenue and predictable ROI.
            </p>
            <Button 
              size="xl"
              onClick={openForm}
              className="bg-white text-primary hover:bg-white/90 font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto whitespace-normal break-words hyphens-auto leading-tight"
            >
              Claim Your FREE YouTube Advertising Audit <ArrowRight className="ml-2 inline-block" />
            </Button>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="max-w-5xl mx-auto">
            <ComparisonTable
              title={socialMediaComparison.title}
              description={socialMediaComparison.description}
              rows={socialMediaComparison.rows}
            />
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-4 text-center text-charcoal">Calculate Your YouTube Advertising ROI</h2>
            <p className="text-xl text-center text-charcoal/70 mb-12">See how much revenue YouTube ads could generate for your business.</p>
            <ROICalculator />
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
            Get FREE YouTube Audit
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default YouTubeAdvertising;
