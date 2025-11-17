import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ROICalculator } from "@/components/ROICalculator";
import { VideoEmbed } from "@/components/VideoEmbed";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { CheckCircle, Target, TrendingUp, Users, DollarSign, Clock, BarChart3, AlertTriangle, Trophy, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";
import { HubPageLocations } from "@/components/HubPageLocations";
import { googleAdsCluster } from "@/utils/contentClusters";

export default function GoogleAds() {
  const {
    openForm
  } = useMarketingForm();
  const painPoints = ["Burning through your ad budget with nothing to show for it", "Getting clicks but zero quality leads or sales", "Competing against agencies with unlimited budgets", "Wasting time on campaigns that don't work", "Losing customers to competitors who seem to dominate search results"];
  const features = ["Strategic keyword research and competitive analysis", "Compelling ad copy that converts browsers into buyers", "Advanced bid management and budget optimization", "Landing page strategy and optimization", "Comprehensive conversion tracking and attribution", "Negative keyword management and quality score improvement", "Ad extension optimization for maximum real estate", "Detailed performance reporting with actionable insights", "A/B testing of ads, keywords, and landing pages", "Campaign restructuring for improved performance"];
  const benefits = [{
    icon: DollarSign,
    title: "Average 427% ROI",
    description: "Our clients see an average return of $4.27 for every $1 spent on Google Ads",
    detail: "This isn't a cherry-picked case study. This is the average across all our Google Ads clients over the past 12 months."
  }, {
    icon: TrendingUp,
    title: "67% Lower Cost Per Lead",
    description: "Strategic bid management and quality score optimization slashes your acquisition costs",
    detail: "While your competitors are paying premium prices, our optimization strategies consistently drive down costs."
  }, {
    icon: Target,
    title: "3x Higher Conversion Rates",
    description: "Precision targeting and compelling ad copy that turns clicks into customers",
    detail: "We don't just drive traffic. We drive the RIGHT traffic that's ready to buy what you're selling."
  }];
  const process = [{
    step: "01",
    title: "Account Audit & Competitive Intelligence",
    description: "We dissect your current campaigns and analyze what your most successful competitors are doing that you're not.",
    details: ["Complete account structure analysis", "Competitor keyword and ad copy research", "Historical performance review", "Opportunity identification"]
  }, {
    step: "02",
    title: "Strategic Campaign Architecture",
    description: "We build campaigns designed for scale, with granular targeting that ensures your budget goes to the highest-converting prospects.",
    details: ["Keyword grouping and match type strategy", "Ad group structuring for relevance", "Bidding strategy selection", "Budget allocation optimization"]
  }, {
    step: "03",
    title: "Launch & Aggressive Optimization",
    description: "Your campaigns go live with constant monitoring and daily optimizations to maximize performance from day one.",
    details: ["Real-time bid adjustments", "Ad copy split testing", "Quality score improvements", "Conversion rate optimization"]
  }, {
    step: "04",
    title: "Scale & Dominate",
    description: "As performance improves, we systematically scale winning campaigns while maintaining profitability.",
    details: ["Budget scaling strategies", "New keyword opportunities", "Additional campaign types", "Performance forecasting"]
  }];
  const featuredSnippets = [
    {
      question: "What is Google Ads?",
      answer: "Google Ads is an online advertising platform where businesses pay to display ads on Google search results and across the Google Display Network. Advertisers bid on keywords to show ads to users searching for related products or services, paying only when someone clicks their ad (pay-per-click or PPC)."
    },
    {
      question: "How does Google Ads work?",
      answer: "Google Ads works through an auction system: (1) You bid on keywords relevant to your business, (2) Google determines ad rank based on your bid and quality score, (3) Your ad appears when users search for those keywords, (4) You pay only when someone clicks your ad. Higher quality ads with better relevance get better positions at lower costs."
    },
    {
      question: "Is Google Ads worth it?",
      answer: "Google Ads is worth it for most businesses when managed properly. It delivers immediate visibility, highly targeted traffic, and measurable ROI. Our clients average 427% ROI, meaning they earn $4.27 for every $1 spent. However, success requires strategic management, continuous optimization, and proper conversion tracking."
    }
  ];

  const googleAdsVsSEO = [
    { factor: "Time to Results", googleAds: "Immediate (hours to days)", seo: "Long-term (3-12 months)" },
    { factor: "Cost Structure", googleAds: "Pay per click (ongoing)", seo: "Upfront investment + maintenance" },
    { factor: "Traffic Control", googleAds: "Instant on/off control", seo: "Gradual, long-lasting" },
    { factor: "Targeting Precision", googleAds: "Highly precise (keywords, demographics, location)", seo: "Broader organic reach" },
    { factor: "Best For", googleAds: "Immediate leads, promotions, testing", seo: "Long-term brand building, authority" }
  ];

  const caseStudy = {
    client: "Local Legal Firm",
    industry: "Legal Services",
    challenge: "Struggling to generate quality leads with previous agency campaigns burning through $8,000/month with minimal results",
    solution: "Complete campaign restructure with landing page optimization, advanced targeting, and conversion tracking overhaul",
    timeframe: "6 months",
    results: ["671% increase in qualified leads (from 12 to 93 leads per month)", "84% reduction in cost per lead (from $667 to $107)", "1,247 new clients acquired", "$2.1M in additional revenue attributed to Google Ads"],
    testimonial: "Before Odin Digital, our Google Ads were a money pit. Now they're our most profitable marketing channel. The transformation has been incredible."
  };
  const commonMistakes = [{
    mistake: "Broad Match Keywords Bleeding Budget",
    consequence: "Your ads show for irrelevant searches, wasting 40-60% of your budget on unqualified traffic",
    solution: "Precise match types and comprehensive negative keyword lists"
  }, {
    mistake: "Generic Ad Copy That Doesn't Convert",
    consequence: "Low click-through rates and high costs per click due to poor relevance scores",
    solution: "Benefit-driven ad copy with compelling calls-to-action"
  }, {
    mistake: "Poor Landing Page Experience",
    consequence: "High bounce rates and low conversion rates destroy your Quality Score and ROI",
    solution: "Optimized landing pages that match ad intent and drive conversions"
  }];

  const faqs = [
    {
      question: "How much should I spend on Google Ads?",
      answer: "Your Google Ads budget depends on your industry, competition, and business goals. Most Australian businesses see success with $3,000-$10,000 per month in ad spend. However, we can work with smaller budgets by focusing on high-intent keywords and optimizing for maximum ROI. During your free audit, we'll analyze your market and recommend a specific budget based on your cost-per-acquisition goals."
    },
    {
      question: "What's the difference between Google Ads and SEO?",
      answer: "Google Ads delivers immediate, paid traffic at the top of search results, while SEO is a long-term strategy that builds organic rankings. Google Ads gives you instant visibility and control over who sees your ads, making it perfect for testing offers and generating leads quickly. SEO takes 6-12 months but provides sustainable traffic. Most businesses benefit from using both strategies together."
    },
    {
      question: "How long does it take to see results from Google Ads?",
      answer: "Unlike SEO, Google Ads can drive traffic and leads within 24-48 hours of launching. However, optimal performance usually develops over 30-90 days as we gather data, test variations, and refine targeting. The learning phase allows our algorithms to optimize for your best-converting audiences and placements."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No. While Google Ads works best with consistent optimization over 6+ months, we don't lock you into long-term contracts. Most clients choose to continue because they see positive ROI, not because they're contractually obligated. We believe in earning your business every month through performance."
    },
    {
      question: "What makes your Google Ads management different?",
      answer: "Three things set us apart: 1) Aggressive daily optimization rather than set-and-forget management, 2) Complete transparency with full account access and detailed reporting, and 3) Strategic campaign architecture designed for scale. We don't just manage your ads—we actively hunt for opportunities to improve performance and reduce wasted spend."
    },
    {
      question: "Can you guarantee a specific ROI?",
      answer: "No reputable agency can guarantee specific ROI due to variables beyond our control (your offer, pricing, website conversion rate, market conditions). However, we do guarantee our commitment to strategic optimization, transparent reporting, and data-driven decisions. Our average client sees a 427% ROI, and we'll work tirelessly to achieve similar results for your business."
    }
  ];

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
  
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Google Ads Management Services Australia | PPC Experts | Odin Digital</title>
        <meta name="description" content="Professional Google Ads management that delivers results. Stop wasting money on underperforming campaigns. Average 427% ROI with transparent reporting and expert optimization." />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <Header />
      <MarketingFormModal />
      <SideTab />
      
      <div className="max-w-7xl mx-auto px-6 pt-24">
        <Breadcrumbs items={[
          { label: "Services", path: "/services" },
          { label: "Google Ads Management", path: "/services/google-ads" }
        ]} />
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white via-muted/30 to-muted/20">
        {/* Animated background blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-muted/15 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1.5s'
      }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-muted/10 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '3s'
      }} />
        
        {/* Floating Circles with white/glass effect */}
        <div className="absolute top-32 left-1/4 w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" />
        <div className="absolute top-64 right-1/3 w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{
        animationDelay: '1s'
      }} />
        <div className="absolute bottom-48 left-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{
        animationDelay: '2s'
      }} />
        <div className="absolute top-1/3 right-1/5 w-14 h-14 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{
        animationDelay: '2.8s'
      }} />
        
        {/* Geometric Shapes */}
        <div className="absolute top-40 right-1/4 w-24 h-24 bg-white/15 backdrop-blur-sm border border-white/30 rounded-lg rotate-45 animate-float shadow-lg" style={{
        animationDelay: '0.5s'
      }} />
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full animate-float shadow-lg" style={{
        animationDelay: '2.5s'
      }} />
        <div className="absolute -top-6 left-1/4 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg"></div>
        <div className="absolute top-1/4 left-1/5 w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/25 rounded-lg rotate-12 animate-float shadow-lg" style={{
        animationDelay: '3.2s'
      }} />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Google Ads Management</Badge>
            <h1 className="text-5xl md:text-7xl font-black text-charcoal mb-8 animate-fade-in">
              Stop Wasting Money on Google Ads That Don't Work
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/70 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              Finally, Google Ads campaigns that generate qualified leads and profitable sales instead of burning through your budget with nothing to show for it.
            </p>
            <p className="text-lg text-charcoal/60 mb-12 max-w-3xl mx-auto animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <strong className="text-charcoal">WARNING:</strong> If you're tired of Google Ads agencies that promise the world but deliver mediocre results, keep reading. What you're about to discover could be the difference between another failed campaign and the most profitable marketing investment you've ever made.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <Button variant="cta" size="xl" onClick={openForm}>
                Get My Free Google Ads Audit
              </Button>
              <Button variant="outline" size="xl" className="border-primary hover:bg-primary hover:text-white">
                See Real Results
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Are You Making These Expensive Google Ads Mistakes?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Every day, thousands of business owners watch their Google Ads budget disappear with nothing to show for it. Here's why most campaigns fail (and how to fix them):
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {commonMistakes.map((item, index) => <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300">
                <div className="flex items-start mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-foreground">{item.mistake}</h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">{item.consequence}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-primary font-semibold text-sm">{item.solution}</p>
                </div>
              </Card>)}
          </div>

          <div className="bg-muted/30 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Does This Sound Familiar?</h3>
            <ul className="space-y-3">
              {painPoints.map((point, index) => <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{point}</span>
                </li>)}
            </ul>
            <p className="text-lg text-foreground mt-6 font-semibold">
              If you nodded your head to any of these, you're not alone. But more importantly, you're not stuck with these problems forever.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              The Results Our Clients Actually Get
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These aren't hypothetical results or cherry-picked case studies. This is what happens when Google Ads are done right.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return <Card key={index} className="p-8 text-center hover:shadow-glow transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <p className="text-sm text-muted-foreground italic">{benefit.detail}</p>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8">
                Everything You Need to Dominate Google Ads
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                This isn't just campaign management. This is a complete Google Ads transformation that turns your advertising spend into your most profitable investment.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <strong>Fair warning:</strong> We don't work with every business. We're selective about our partnerships because we stake our reputation on your results. But if we work together, here's exactly what you get:
              </p>
              <Button variant="cta" size="lg" onClick={openForm}>
                See If You Qualify
              </Button>
            </div>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Your Complete Google Ads System</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>)}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Our Proven 4-Step Google Ads Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This is the exact system we use to transform struggling Google Ads campaigns into profit-generating machines.
            </p>
          </div>

          <div className="space-y-12">
            {process.map((step, index) => <Card key={index} className="p-8 hover:shadow-glow transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="text-center md:text-left">
                    <div className="w-16 h-16 mx-auto md:mx-0 mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIndex) => <div key={detailIndex} className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>)}
                    </div>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">Client Success Story</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              From $8,000/Month Budget Burn to Profitable Lead Machine
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How we transformed a failing Google Ads account into the most profitable marketing channel for a legal firm.
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-6">
                  <Trophy className="w-8 h-8 text-primary mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{caseStudy.client}</h3>
                    <p className="text-muted-foreground">{caseStudy.industry}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">The Challenge:</h4>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Our Solution:</h4>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </div>
                
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-foreground italic">"{caseStudy.testimonial}"</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-6">Results After {caseStudy.timeframe}:</h4>
                <div className="space-y-4">
                  {caseStudy.results.map((result, index) => <div key={index} className="flex items-start space-x-3">
                      <BarChart3 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{result}</span>
                    </div>)}
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Want similar results for your business?</strong>
                  </p>
                  <Button variant="outline" onClick={openForm}>
                    Get My Free Strategy Session
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

        {/* Featured Snippet Optimization */}
        <section className="py-12 px-4 bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-charcoal">Google Ads: Quick Answers</h2>
              <div className="space-y-8">
                {featuredSnippets.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-border">
                    <h2 className="text-2xl font-semibold mb-4 text-charcoal">{item.question}</h2>
                    <p className="text-lg text-charcoal/80 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-charcoal">Google Ads vs SEO: Which is Right for Your Business?</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg border border-border">
                  <thead className="bg-muted/30">
                    <tr>
                      <th className="px-6 py-4 text-left text-charcoal font-semibold">Factor</th>
                      <th className="px-6 py-4 text-left text-charcoal font-semibold">Google Ads (PPC)</th>
                      <th className="px-6 py-4 text-left text-charcoal font-semibold">SEO (Organic)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {googleAdsVsSEO.map((row, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 font-medium text-charcoal">{row.factor}</td>
                        <td className="px-6 py-4 text-charcoal/80">{row.googleAds}</td>
                        <td className="px-6 py-4 text-charcoal/80">{row.seo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-charcoal">How to Set Up Google Ads: Step-by-Step</h2>
              <div className="bg-white p-8 rounded-lg border border-border">
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <p className="text-lg text-charcoal/80 pt-1">Create a Google Ads account and set up billing information</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <p className="text-lg text-charcoal/80 pt-1">Research and select high-intent keywords relevant to your products or services</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <p className="text-lg text-charcoal/80 pt-1">Create campaign structure with organized ad groups targeting specific themes</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <p className="text-lg text-charcoal/80 pt-1">Write compelling ad copy with clear value propositions and strong calls-to-action</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">5</span>
                    <p className="text-lg text-charcoal/80 pt-1">Set up conversion tracking to measure leads, sales, and ROI accurately</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">6</span>
                    <p className="text-lg text-charcoal/80 pt-1">Launch campaigns with proper budget allocation and bidding strategies</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">7</span>
                    <p className="text-lg text-charcoal/80 pt-1">Monitor performance daily and optimize based on conversion data and cost metrics</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

      {/* All Google Ads Services by Location */}
      <HubPageLocations 
        spokes={googleAdsCluster.spokes}
        title="Google Ads Services Across Australia"
        description="Expert Google Ads management in major cities across Australia. Find your local PPC specialists below."
      />

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Video Section */}
      <VideoEmbed 
        videoId="dQw4w9WgXcQ"
        title="See Our Google Ads Process in Action"
        description="Learn how we build high-performing Google Ads campaigns that drive real results"
        className="bg-background"
      />

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
              Google Ads FAQs
            </h2>
            <p className="text-xl text-charcoal/70">
              Common questions about Google Ads management and pricing
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left text-lg font-bold text-charcoal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 gradient-hero overflow-hidden">
        {/* Dark overlay for contrast */}
        <div aria-hidden="true" className="absolute inset-0 bg-transparent" />
        
        {/* Background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float bg-pink-100" />
        <div style={{
        animationDelay: '3s'
      }} className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float bg-pink-100" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-lg animate-float" style={{
        animationDelay: '1s'
      }} />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-black mb-8 text-slate-950 md:text-6xl">
            Ready to Stop Wasting Money on Google Ads?
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-slate-950">
            Get a free, no-obligation audit of your current Google Ads performance. We'll show you exactly what's working, what's not, and the specific opportunities to improve your ROI.
          </p>
          <p className="text-lg mb-12 text-slate-950">
            <strong>Limited Time:</strong> We're currently accepting only 5 new Google Ads clients this month to ensure we can deliver the attention and results each account deserves.
          </p>
          <Button variant="cta" size="xl" onClick={openForm}>
            <Target className="w-5 h-5 mr-2" />
            Claim Your Free Google Ads Audit
          </Button>
          <p className="text-sm text-white/70 mt-4">
            No commitments. No pressure. Just an honest assessment of your current situation and a clear path forward.
          </p>
        </div>
      </section>

      <Footer />
    </div>;
}