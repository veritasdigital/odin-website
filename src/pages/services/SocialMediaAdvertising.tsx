import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Target, 
  Search, 
  BarChart, 
  Shield, 
  Zap, 
  ArrowRight,
  Building2,
  FileText,
  Link2,
  Phone,
  Globe,
  Award,
  Settings,
  LineChart,
  Eye,
  MousePointer,
  DollarSign,
  Megaphone
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Count-up animation hook
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const delayTimeout = setTimeout(() => {
      setCount(0);
      
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, 100);

    return () => clearTimeout(delayTimeout);
  }, [end, duration, isVisible]);

  return { count, ref: countRef };
};

const MetricCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);

return (
    <Card className="p-4 sm:p-6 text-center">
      <div ref={ref} className="relative text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-2 whitespace-nowrap [font-variant-numeric:tabular-nums]">
        <span className="invisible">{suffix === "M+" ? `$${value}${suffix}` : `${value}${suffix}`}</span>
        <span className="absolute inset-0">
          {count !== null ? (suffix === "M+" ? `$${count}${suffix}` : `${count}${suffix}`) : '\u00A0'}
        </span>
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground font-medium">{label}</div>
    </Card>
  );
};

const SocialMediaAdvertising = () => {
  const metrics = [
    { value: 574, suffix: "M+", label: "Verified Client Revenue" },
    { value: 540, suffix: "%", label: "Average Client ROI" },
    { value: 95, suffix: "%", label: "Client Retention Rate" },
    { value: 283, suffix: "+", label: "Campaigns Managed" },
  ];

  const painPoints = [
    {
      title: "Low-Quality Leads",
      description: "You're getting clicks, but they're not converting. The leads are unqualified, tire-kickers who never buy. You're wasting money on traffic that doesn't translate to revenue.",
    },
    {
      title: "Lack of Transparency",
      description: "Your agency doesn't explain their strategy. You don't know what they're doing with your budget. Monthly reports are filled with jargon and vanity metrics that don't show real ROI.",
    },
    {
      title: "High Cost Per Lead",
      description: "Your cost per lead keeps climbing. You're spending more to get fewer results. Your agency keeps asking for bigger budgets without improving performance.",
    },
    {
      title: "Poor Audience Targeting",
      description: "Your ads are reaching the wrong people. They're not targeted to your ideal customer. You're paying for impressions from people who will never buy from you.",
    },
    {
      title: "No Ongoing Optimisation",
      description: "Your agency set up your campaigns months ago and hasn't touched them since. Performance is declining, but nobody's testing, adjusting, or improving your ads.",
    },
    {
      title: "Slow Response Time",
      description: "You have questions, but your agency takes days to respond. You want to make changes, but they're always too busy. You feel like just another account number.",
    },
    {
      title: "Pressure to Spend More",
      description: "Your agency's solution to every problem is \"increase your budget.\" They never talk about improving efficiency. They're incentivized to spend your money, not maximise your ROI.",
    },
    {
      title: "Hidden Fees",
      description: "Your invoice includes charges you didn't expect. Management fees, setup fees, optimization fees. The total cost is much higher than quoted.",
    },
  ];

  const solutions = [
    {
      title: "High-Quality Leads",
      description: "We target high-intent audiences who are ready to buy. We optimize for conversions, not just clicks. Our leads convert into customers, not just tire-kickers.",
    },
    {
      title: "Transparent Communication",
      description: "We explain our strategy in plain English. You always know what we're doing and why. Our reports focus on business outcomes: leads, sales, and ROI.",
    },
    {
      title: "Affordable Pricing",
      description: "We offer competitive, transparent pricing with no hidden fees. We focus on maximizing your ROI, not your ad spend. Our clients see an average 540% return on investment.",
    },
    {
      title: "Precise Audience Targeting",
      description: "We use advanced targeting to reach your ideal customers. We create custom and lookalike audiences based on your best clients. We continuously refine targeting based on performance data.",
    },
    {
      title: "Continuous Optimisation",
      description: "We monitor campaigns daily and optimise constantly. We test new ad variations weekly. We make data-driven adjustments to improve performance month over month.",
    },
    {
      title: "Responsive Support",
      description: "You'll have a dedicated account manager who responds within 24 hours. We're proactive in communicating changes and opportunities. You're a partner, not just an account number.",
    },
    {
      title: "Results-Focused",
      description: "We optimize for your business goals, not our commission. We focus on reducing cost per lead and increasing conversion rates. Our success is measured by your ROI, not your ad spend.",
    },
    {
      title: "Customised Strategy",
      description: "We build a bespoke strategy for your business, industry, and goals. We don't use cookie-cutter templates. Every campaign is designed specifically for your unique needs.",
    },
  ];

  const services = [
    {
      icon: <Users className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Facebook Ads Management",
      description: "Full-service Facebook advertising management including strategy, creative development, campaign setup, and ongoing optimization. We maximize your ROI on the world's largest social platform.",
    },
    {
      icon: <Megaphone className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Instagram Ads Management",
      description: "Instagram advertising designed to build brand awareness and drive conversions. Perfect for visual products, e-commerce, and lifestyle brands targeting younger demographics.",
    },
    {
      icon: <Target className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Audience Targeting and Segmentation",
      description: "Advanced audience research and segmentation to reach your ideal customers. We create custom audiences, lookalike audiences, and detailed targeting based on demographics, interests, and behaviors.",
    },
    {
      icon: <Eye className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Ad Creative Development",
      description: "Eye-catching ad creative that stops the scroll and drives clicks. We test multiple variations to find what resonates with your audience and drives conversions.",
    },
    {
      icon: <MousePointer className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Landing Page Optimisation",
      description: "Conversion-focused landing pages that turn clicks into customers. We optimize layout, copy, and calls-to-action to maximize your conversion rate and ROI.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Conversion Rate Optimisation",
      description: "Systematic testing and optimization to improve your conversion rates. We analyze your funnel, identify drop-off points, and implement improvements that increase sales.",
    },
    {
      icon: <BarChart className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Analytics and Reporting",
      description: "Comprehensive reporting on campaign performance, cost per lead, conversion rates, and ROI. You always know exactly how your campaigns are performing and what we're doing to improve results.",
    },
    {
      icon: <Settings className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />,
      title: "Ongoing Campaign Management",
      description: "Continuous monitoring, testing, and optimization of your campaigns. We adapt to algorithm changes, test new strategies, and ensure your ads stay profitable month after month.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Proven Results",
      description: "Our clients see an average 540% ROI. We've generated over $574 million in client revenue. Our 95% retention rate proves we deliver consistent, measurable results.",
      stat: "540%",
    },
    {
      title: "Quality-Focused Approach",
      description: "We optimize for high-quality leads that convert, not just clicks and impressions. We focus on business outcomes that matter: sales, revenue, and profitable growth.",
      stat: "Quality",
    },
    {
      title: "Transparent Communication",
      description: "No smoke and mirrors. No hidden fees. No BS. You always know what we're doing, why we're doing it, and what results it's generating.",
      stat: "Clear",
    },
    {
      title: "Affordable Pricing",
      description: "Competitive rates with no long-term lock-in contracts. We earn your business every month by delivering results. If we're not performing, you're free to leave.",
      stat: "Fair",
    },
    {
      title: "Customised Strategy",
      description: "Every business is unique. We build bespoke strategies designed for your specific goals, industry, and competitive landscape. No cookie-cutter templates.",
      stat: "Custom",
    },
    {
      title: "Continuous Optimisation",
      description: "We monitor campaigns daily and optimize constantly. We test new variations weekly. We make data-driven improvements month after month.",
      stat: "Always",
    },
    {
      title: "Responsive Support",
      description: "Dedicated account managers who respond within 24 hours. Direct access to senior strategists. We're proactive in communicating changes and opportunities.",
      stat: "24h",
    },
    {
      title: "Industry Expertise",
      description: "We've managed campaigns across dozens of industries. We understand what works in your market. We bring proven strategies and fresh perspectives.",
      stat: "Expert",
    },
    {
      title: "Scalability",
      description: "Whether you're spending $500/month or $50,000/month, we have the expertise and infrastructure to scale your campaigns profitably.",
      stat: "Scale",
    },
    {
      title: "Partnership Approach",
      description: "We're not just a vendor—we're your growth partner. Your success is our success. We're invested in your long-term growth, not just this month's commission.",
      stat: "Partner",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Strategy Development",
      description: "We start with discovery: understanding your business, goals, target audience, and competitive landscape. We develop a customized strategy designed to achieve your specific objectives.",
    },
    {
      number: "02",
      title: "Audience Research",
      description: "We research your ideal customers: demographics, interests, behaviors, and pain points. We create detailed audience segments and identify the best targeting options for your campaigns.",
    },
    {
      number: "03",
      title: "Creative Development",
      description: "We develop compelling ad creative that resonates with your audience. We test multiple variations to find what drives the highest engagement and conversion rates.",
    },
    {
      number: "04",
      title: "Campaign Setup",
      description: "We build your campaigns with precise targeting, optimized budgets, and conversion-focused objectives. We implement tracking to measure every metric that matters.",
    },
    {
      number: "05",
      title: "Launch and Monitoring",
      description: "We launch your campaigns and monitor performance closely in the first 48 hours. We make quick adjustments to ensure strong initial performance.",
    },
    {
      number: "06",
      title: "Testing and Optimisation",
      description: "We continuously test new audiences, creative, copy, and placements. We analyze performance data and make data-driven optimizations to improve results.",
    },
    {
      number: "07",
      title: "Reporting and Communication",
      description: "We provide monthly reports showing key metrics: impressions, clicks, conversions, cost per lead, and ROI. We explain what's working and what we're optimizing.",
    },
    {
      number: "08",
      title: "Continuous Improvement",
      description: "We never stop optimizing. We adapt to algorithm changes, test new strategies, and ensure your campaigns stay profitable month after month.",
    },
  ];

  const faqs = [
    {
      question: "How much does social media advertising cost?",
      answer: "Pricing varies based on your goals, budget, and industry. We offer flexible pricing models starting from $500/month in ad spend management. Our management fees are transparent and competitive. We're happy to discuss your budget and develop a plan that works for you. The key is ROI—our average client sees a 540% return on investment, so the question isn't how much it costs, but how much revenue you'll generate.",
    },
    {
      question: "How long does it take to see results?",
      answer: "You can see initial results within 1–2 weeks of launching your campaigns. Consistent, optimized results typically take 4–8 weeks as we test different audiences and creative. Competitive industries may take longer. We focus on quick wins first—improving landing pages, refining targeting, optimizing existing campaigns—then build long-term, sustainable growth. The good news is that social media advertising delivers faster results than SEO or other long-term strategies.",
    },
    {
      question: "What's a good ROI for social media advertising?",
      answer: "It depends on your industry and goals. Our average client sees a 540% ROI, meaning for every dollar spent, they generate $5.40 in revenue. E-commerce typically sees 200–400% ROI. Professional services (lawyers, accountants, consultants) may see 300–600% ROI. Lead generation businesses often see 400–800% ROI. B2B companies with longer sales cycles may see lower initial ROI but higher lifetime value. We focus on maximising your specific ROI based on your business model and customer lifetime value.",
    },
    {
      question: "Do you guarantee results?",
      answer: "We can't guarantee specific results—no ethical agency can. Algorithm changes, market conditions, and competitive factors are beyond anyone's control. However, we're confident in our approach. We have a 95% client retention rate because we consistently deliver results. If you're not seeing results after 90 days, we'll work with you to improve your strategy, adjust targeting, or pivot to different platforms. Our track record speaks for itself: $574M+ in client revenue and 540% average ROI.",
    },
    {
      question: "What's the difference between Facebook and Instagram ads?",
      answer: "Facebook is better for reaching a broad audience, driving conversions, and targeting specific demographics and interests. It works well for lead generation, e-commerce, and professional services. Instagram is better for visual products, lifestyle brands, and building brand awareness with younger demographics (18-34). It's ideal for fashion, beauty, food, travel, and fitness. The good news? Both platforms use the same ad platform (Meta Ads Manager), so we can run integrated campaigns that leverage the strengths of both. We strategically use both platforms based on your goals and audience.",
    },
    {
      question: "How do you target the right audience?",
      answer: "We use a multi-layered targeting approach. First, we analyze your best existing customers to understand demographics, interests, and behaviors. Second, we create custom audiences from your customer lists, website visitors, and email subscribers. Third, we build lookalike audiences—people similar to your best customers. Fourth, we use detailed interest and behavior targeting. Fifth, we test different audiences and double down on what works. We continuously refine targeting based on performance data, conversion rates, and ROI. The result? Your ads reach people who are most likely to become customers.",
    },
    {
      question: "What if my ads aren't converting?",
      answer: "We'll conduct a full funnel analysis to identify where prospects are dropping off. We'll review your ad creative, copy, targeting, and landing pages. We'll test different variations to find what resonates. We'll optimize your landing page for conversions—improving headlines, calls-to-action, trust signals, and reducing friction. We'll adjust your targeting to focus on higher-intent audiences. We'll test different offers and messaging. Most conversion issues are fixable with the right strategy and testing. Our 95% client retention rate proves we know how to turn underperforming campaigns into profit centers.",
    },
    {
      question: "Can you help with landing page optimisation?",
      answer: "Absolutely. Landing page optimization is critical to campaign success. We can review your existing landing pages and provide recommendations, or we can build new conversion-focused landing pages from scratch. We optimize headlines, copy, calls-to-action, forms, trust signals, and page speed. We test different layouts and elements to improve conversion rates. Many clients see 2-3x conversion rate improvements just from landing page optimization. Better landing pages mean lower cost per lead and higher ROI on your ad spend.",
    },
    {
      question: "How often do you optimise campaigns?",
      answer: "We monitor campaigns daily to catch issues quickly and capitalize on opportunities. We make tactical optimizations (pausing underperforming ads, increasing budgets on winners) throughout the week. We test new ad variations weekly. We conduct comprehensive performance reviews and strategic optimizations monthly. We're constantly analyzing data, testing hypotheses, and making improvements. Social media advertising requires active management—algorithms change, audiences shift, and competition evolves. Ongoing optimization is what separates profitable campaigns from money pits.",
    },
    {
      question: "What reporting do I get?",
      answer: "We provide comprehensive monthly reports showing: impressions, reach, clicks, click-through rate (CTR), cost per click (CPC), conversions, conversion rate, cost per lead, cost per acquisition, and ROI. We explain what's working, what we're testing, and what we're optimizing. We tie campaign performance directly to your business goals—leads, sales, and revenue. No jargon, no vanity metrics, no smoke and mirrors. You always know exactly how your campaigns are performing and what we're doing to improve results. We're also available for quarterly strategy reviews to discuss long-term planning.",
    },
    {
      question: "Can you work with my existing ads?",
      answer: "Yes. We can take over management of your existing campaigns. We'll conduct a full audit to understand what's working and what's not. We'll identify opportunities for immediate improvement. We'll optimize your targeting, creative, and budgets. We'll fix technical issues and tracking problems. Many clients come to us frustrated with their current agency or DIY results. We've turned hundreds of underperforming campaigns into profit centers. If you're running ads but not seeing results, we can help.",
    },
    {
      question: "What if I want to pause my campaigns?",
      answer: "No problem. We offer flexible engagement with no long-term lock-in contracts. You can pause or stop campaigns anytime. There are valid reasons to pause—seasonality, product launches, budget constraints. When you're ready to resume, we'll help you restart strategically. That said, most clients don't want to pause once they see our results. Our 95% retention rate and 540% average ROI mean clients typically scale up, not pause. But the choice is always yours.",
    },
    {
      question: "Do you handle other platforms?",
      answer: "We specialize in Facebook and Instagram ads (Meta platform), which represent the largest social media advertising opportunity. We also offer Google Ads, LinkedIn Ads, SEO, Web Design, and Email Marketing services. If you're interested in an integrated, multi-channel approach, we can coordinate campaigns across platforms to maximize your overall ROI. Many clients start with Facebook/Instagram and expand to other channels as they see success.",
    },
    {
      question: "How do I get started?",
      answer: "Book a free consultation with one of our social media advertising specialists. We'll discuss your business, goals, current marketing efforts, and budget. We'll explain our process and develop a customized strategy proposal. There's no obligation—just honest advice about whether social media advertising is right for your business. If it's a good fit, we'll outline next steps, timelines, and expected results. Click 'Get Your Free Social Media Audit' to schedule your consultation.",
    },
    {
      question: "What makes you different from other agencies?",
      answer: "Five key differentiators: First, we focus on quality leads and conversions, not just clicks and impressions. Second, we're radically transparent about our strategy, performance, and results. Third, we offer affordable pricing with no hidden fees or long-term contracts. Fourth, we provide responsive, personalized service—you're not just an account number. Fifth, we have a proven track record: $574M+ in client revenue, 540% average ROI, and 95% client retention rate. We're not the cheapest agency, but we deliver the best ROI. We earn your business every month by delivering measurable results.",
    },
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://odindigital.com.au/#organization",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au",
        "logo": {
          "@type": "ImageObject",
          "url": "https://odindigital.com.au/logo.png"
        },
        "description": "Digital marketing agency specialising in SEO, Google Ads, Meta Ads, Web Design, and Email Marketing",
        "sameAs": [
          "https://www.facebook.com/odindigital",
          "https://www.instagram.com/odindigital",
          "https://www.linkedin.com/company/odindigital"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "telephone": "+61-2-XXXX-XXXX",
          "email": "hello@odindigital.com.au"
        }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/social-media-advertising/#service",
        "name": "Social Media Advertising",
        "description": "High-quality, converting social media advertising for Facebook and Instagram. Transparent, affordable pricing. 540% average ROI.",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "areaServed": "AU",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Social Media Advertising Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Facebook Ads Management"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Instagram Ads Management"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Audience Targeting and Segmentation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ad Creative Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Landing Page Optimisation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Conversion Rate Optimisation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Analytics and Reporting"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ongoing Campaign Management"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://odindigital.com.au/social-media-advertising/#faq",
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
        <title>Social Media Advertising Agency | High-Quality Leads | Odin Digital</title>
        <meta name="description" content="Affordable, transparent social media advertising for businesses. High-quality leads. 540% average ROI. No lock-in contracts. Get started today." />
        <meta name="keywords" content="Social media advertising, social media ad agency, Facebook ads, Instagram ads, social media marketing, paid social media, social media lead generation" />
        <link rel="canonical" href="https://odindigital.com.au/social-media-advertising" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <SideTab />
        
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", path: "/services" },
            { label: "Social Media Advertising", path: "/services/social-media-advertising" }
          ]} />
        </div>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-background/95 backdrop-blur-sm border-t md:hidden">
          <div className="flex gap-2">
            <Link to="/contact" className="flex-1">
              <Button variant="cta" size="lg" className="w-full text-sm px-4 py-3 h-auto">
                <span className="truncate">Get Free Social Media Audit</span>
                <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
              </Button>
            </Link>
            <a href="tel:1300123456" className="flex-shrink-0">
              <Button variant="outline" size="lg" className="h-full px-4">
                <Phone className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-8 sm:py-12 md:py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-white via-muted/30 to-muted/20">
          {/* Animated background blobs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-muted/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-muted/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
          
          {/* Floating Circles with white/glass effect */}
          <div className="absolute top-32 left-1/4 w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" />
          <div className="absolute top-64 right-1/3 w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-48 left-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 right-1/5 w-14 h-14 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '2.8s' }} />
          
          {/* Geometric Shapes */}
          <div className="absolute top-40 right-1/4 w-24 h-24 bg-white/15 backdrop-blur-sm border border-white/30 rounded-lg rotate-45 animate-float shadow-lg" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full animate-float shadow-lg" style={{ animationDelay: '2.5s' }} />
          
          <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground mb-3 sm:mb-4 md:mb-6 leading-tight px-1 sm:px-2 mt-16 sm:mt-8 md:mt-0">
                Social Media Advertising
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-primary mb-4 sm:mb-6 md:mb-8 px-1 sm:px-2 leading-snug">
                Get high-quality leads from Facebook and Instagram. Transparent, affordable social media advertising that actually converts.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-2 sm:mb-3 md:mb-4 max-w-3xl mx-auto px-1 sm:px-2 leading-relaxed">
                Your competitors are on Facebook. Your customers are on Instagram. But are your ads actually working?
              </p>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-2 sm:mb-3 md:mb-4 max-w-3xl mx-auto px-1 sm:px-2 leading-relaxed">
                Most businesses waste thousands on social media advertising. They get clicks, but not conversions. They get impressions, but not customers. They pay for leads that never convert.
              </p>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-2 sm:mb-3 md:mb-4 max-w-3xl mx-auto px-1 sm:px-2 leading-relaxed">
                At Odin Digital, we deliver high-quality, converting social media advertising. Our average client sees a 540% return on investment. We maintain a 95% client retention rate. We've generated over $574 million in client revenue.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-1 sm:px-2 leading-relaxed">
                We don't just run ads. We optimise for conversions. We target the right people. We deliver measurable results.
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center px-1 sm:px-2">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="cta" size="xl" className="group text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 lg:py-5 h-auto w-full">
                    <span>Get Your Free Social Media Audit</span>
                    <ArrowRight className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:1300123456" className="w-full sm:w-auto">
                  <Button variant="outline" size="xl" className="text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 lg:py-5 h-auto w-full">
                    <Phone className="mr-1.5 sm:mr-2 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span>Call 1300 123 456</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 leading-tight">
                Why Your Social Media Ads Aren't Working
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
                These are the most common frustrations we hear from businesses before they work with us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {painPoints.map((point, index) => (
                <Card key={index} className="p-3 sm:p-4 md:p-6 lg:p-8 border-l-4 border-l-destructive overflow-hidden">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4 break-words leading-tight">{point.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-words leading-relaxed">{point.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 leading-tight">
                Social Media Advertising Built for Conversions
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
                We solve the problems that plague most social media advertising campaigns.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="p-3 sm:p-4 md:p-6 lg:p-8 border-l-4 border-l-primary bg-background overflow-hidden">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4 break-words leading-tight">{solution.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-words leading-relaxed">{solution.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 leading-tight">
                Our Social Media Advertising Services
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
                Comprehensive social media advertising services designed to drive qualified leads and real revenue.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col overflow-hidden border-t-4 border-t-primary">
                  <div className="flex-shrink-0 mb-2 sm:mb-3 md:mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-1.5 sm:mb-2 md:mb-3 break-words leading-tight">{service.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground flex-grow break-words leading-relaxed">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 leading-tight">
                Why Businesses Choose Odin Digital for Social Media Advertising
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
                We're not just another agency. We're your dedicated growth partner.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="p-3 sm:p-4 md:p-6 lg:p-8 overflow-hidden">
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden p-1.5 sm:p-2">
                        <span className="text-[10px] sm:text-xs md:text-sm lg:text-lg font-black text-primary text-center leading-tight break-all">{reason.stat}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-1.5 sm:mb-2 md:mb-3 break-words leading-tight">{reason.title}</h3>
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-words leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 leading-tight">
                How We Deliver Results
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
                A systematic, transparent approach that delivers measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative overflow-hidden">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary/20 mb-2 sm:mb-3 md:mb-4">{step.number}</div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-1.5 sm:mb-2 md:mb-3 break-words leading-tight">{step.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-words leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          {/* Floating circles */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-foreground mb-3 sm:mb-4 md:mb-6 px-1 sm:px-2 leading-tight">
              Ready to Get High-Quality Leads?
            </h2>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 leading-relaxed">
              Stop wasting money on social media ads that don't convert. Partner with an agency that has driven $574M+ in client revenue and a 540% average ROI.
            </p>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 px-1 sm:px-2 leading-relaxed">
              Book your free social media audit today and discover exactly how we can help you get high-quality leads and drive measurable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center px-1 sm:px-2">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="cta" size="xl" className="group text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 lg:py-5 h-auto w-full">
                  <span>Get Your Free Social Media Audit Now</span>
                  <ArrowRight className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:1300123456" className="w-full sm:w-auto">
                <Button variant="outline" size="xl" className="text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 lg:py-5 h-auto w-full">
                  <Phone className="mr-1.5 sm:mr-2 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span>Call 1300 123 456</span>
                </Button>
              </a>
            </div>

            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-3 sm:mt-4 md:mt-6 px-1 sm:px-2 leading-relaxed">
              No lock-in contracts. No obligation. Just honest advice from social media advertising experts who deliver real results.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-2 sm:mb-3 md:mb-4 px-1 sm:px-2 leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground px-2 sm:px-4 leading-relaxed">
                Everything you need to know about our social media advertising services.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="overflow-hidden">
                  <AccordionTrigger className="text-left font-semibold text-xs sm:text-sm md:text-base break-words pr-6 sm:pr-8 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm md:text-base text-muted-foreground break-words leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SocialMediaAdvertising;