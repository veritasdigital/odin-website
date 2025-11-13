import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { CheckCircle, ArrowRight, TrendingUp, Target, BarChart3, Users, Zap, AlertTriangle, Trophy, DollarSign } from "lucide-react";
import { AsSeenIn } from "@/components/AsSeenIn";
import { useNavigate } from "react-router-dom";
export default function FunnelDevelopment() {
  const {
    openForm
  } = useMarketingForm();
  const navigate = useNavigate();
  const painPoints = ["Your website gets traffic but visitors leave without buying anything", "You're generating leads but they're not converting to paying customers", "Your sales process is scattered across multiple disconnected platforms", "You don't know where prospects drop off in your customer journey", "Your competitors seem to convert visitors better than you do"];
  const features = ["Complete funnel strategy and customer journey mapping", "High-converting landing page design and development", "Email automation sequences that nurture and convert", "Lead magnets and irresistible offers that capture attention", "Conversion rate optimization through strategic A/B testing", "Advanced analytics and conversion tracking setup", "Sales page optimization for maximum persuasion", "Follow-up sequences that turn maybe's into yes's", "Abandoned cart recovery systems that rescue lost sales", "Upsell and cross-sell strategies that maximize revenue per customer"];
  const benefits = [{
    icon: TrendingUp,
    title: "487% Conversion Improvement",
    description: "Average increase in conversion rates with our optimized funnel systems",
    detail: "This isn't just traffic. This is turning more of your existing visitors into paying customers with better funnel architecture."
  }, {
    icon: DollarSign,
    title: "3.7x Revenue Per Visitor",
    description: "Dramatic increase in revenue generated from the same amount of traffic",
    detail: "By optimizing every step of the customer journey, we extract maximum value from every visitor to your site."
  }, {
    icon: Zap,
    title: "24/7 Automated Sales",
    description: "Funnels that sell your products and services while you sleep",
    detail: "Once built, these systems work around the clock to convert prospects into customers without your constant involvement."
  }];
  const funnelTypes = [{
    title: "Lead Generation Funnel",
    description: "Capture high-quality leads with irresistible offers and nurture them into customers",
    stages: ["Targeted Traffic", "Compelling Landing Page", "Valuable Lead Magnet", "Email Nurture Sequence", "Sales Conversion"],
    bestFor: "Service businesses, consultants, agencies"
  }, {
    title: "E-commerce Sales Funnel",
    description: "Maximize online sales with optimized product pages and cart recovery systems",
    stages: ["Product Discovery", "Product Pages", "Shopping Cart", "Checkout Process", "Post-Purchase Upsells"],
    bestFor: "Online stores, product-based businesses"
  }, {
    title: "Webinar Sales Funnel",
    description: "Build authority and sell high-ticket items through educational content",
    stages: ["Registration Page", "Reminder Sequence", "Live Webinar", "Sales Presentation", "Limited-Time Offer"],
    bestFor: "Coaches, course creators, high-ticket services"
  }];
  const process = [{
    step: "01",
    title: "Customer Journey Analysis",
    description: "We map your customer's entire journey from first touch to final purchase, identifying every leak and opportunity.",
    details: ["Current funnel performance audit", "Customer behavior analysis", "Conversion bottleneck identification", "Competitor funnel research"]
  }, {
    step: "02",
    title: "Strategic Funnel Architecture",
    description: "We design a conversion-optimized funnel that guides prospects naturally toward purchase decisions.",
    details: ["Funnel strategy and flow mapping", "Offer creation and positioning", "Content strategy for each stage", "Technical platform selection"]
  }, {
    step: "03",
    title: "Build & Optimize",
    description: "We create every component of your funnel and continuously test to improve performance.",
    details: ["Landing page design and development", "Email sequence creation", "Automation setup and testing", "Initial conversion optimization"]
  }, {
    step: "04",
    title: "Scale & Maximize",
    description: "As your funnel proves successful, we systematically scale and add additional revenue streams.",
    details: ["Performance monitoring and analysis", "Split testing and optimization", "Scaling strategies implementation", "Additional funnel development"]
  }];
  const caseStudy = {
    client: "Online Fitness Coaching Business",
    industry: "Health & Fitness Coaching",
    challenge: "Struggling to scale beyond 1-on-1 sessions, inconsistent lead generation, and low-converting website that wasn't building their business",
    solution: "Complete funnel overhaul with lead magnet funnel, webinar sales system, and automated email sequences that nurture prospects into high-value customers",
    timeframe: "4 months",
    results: ["2,847% increase in email subscribers", "743% increase in monthly revenue", "87% of sales now happen automatically through the funnel", "Scaled from $8K to $67K monthly recurring revenue"],
    testimonial: "This funnel completely transformed our business. We went from struggling to book clients to having a waitlist of people wanting to work with us. The system sells our programs 24/7 without us having to constantly chase leads."
  };
  const commonFunnelMistakes = [{
    mistake: "Too Many Steps in the Funnel",
    consequence: "Each additional step loses 20-30% of prospects, killing your conversion rates",
    solution: "Streamlined funnels with only essential steps that move prospects toward purchase"
  }, {
    mistake: "Generic, One-Size-Fits-All Approach",
    consequence: "Low engagement and conversion because the message doesn't resonate with specific audiences",
    solution: "Targeted funnels designed for specific customer segments and their unique needs"
  }, {
    mistake: "No Follow-Up or Abandonment Recovery",
    consequence: "You lose 97% of visitors who don't convert immediately, wasting massive opportunities",
    solution: "Comprehensive follow-up sequences and retargeting campaigns that bring prospects back"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      <MarketingFormModal />
      <SideTab />
      
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-white via-muted/30 to-muted/20">
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
        <div className="absolute top-1/4 left-1/5 w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/25 rounded-lg rotate-12 animate-float shadow-lg" style={{
        animationDelay: '3.2s'
      }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full py-24 lg:py-32">
          <div className="max-w-4xl mx-auto space-y-8 lg:space-y-10 animate-fade-in">
            {/* Badge */}
            <div className="text-center">
              <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold">
                Sales Funnel Development
              </Badge>
            </div>
            
            {/* Main Headline */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-charcoal leading-[1.05] tracking-tight">
                <span className="block mb-3 lg:mb-4">Turn Your Website Into a</span>
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
                  Customer-Generating Machine
                </span>
              </h1>
            </div>
            
            {/* Subtitle and Description */}
            <div className="text-center space-y-6 lg:space-y-8">
              <p className="text-xl md:text-2xl text-charcoal/90 leading-relaxed max-w-3xl mx-auto">
                Stop losing 97% of your website visitors forever. Build automated sales funnels that convert strangers into customers and customers into raving fans.
              </p>
              
              <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-r-lg max-w-3xl mx-auto">
                <p className="text-lg text-charcoal/80 font-medium">
                  <strong className="text-primary">REALITY CHECK:</strong> If your website isn't systematically moving visitors toward a purchase decision, you're essentially running an expensive digital brochure. It's time to build a real sales system.
                </p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="lg" className="text-lg px-12 py-6 shadow-glow" onClick={() => navigate('/contact')}>
                Build My Sales Funnel
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-12 py-6 border-2" onClick={() => navigate('/contact')}>
                See Funnel Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* As Featured In Section */}
      <AsSeenIn />

      {/* Problem Agitation Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Why Your Current "Funnel" Is Bleeding Money
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Most businesses don't have a funnel at all—they have a leaky bucket. Here's why 97% of your website visitors leave without buying anything:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {commonFunnelMistakes.map((item, index) => <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300">
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
            <h3 className="text-2xl font-bold text-foreground mb-6">Does This Sound Like Your Business?</h3>
            <ul className="space-y-3">
              {painPoints.map((point, index) => <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{point}</span>
                </li>)}
            </ul>
            <p className="text-lg text-foreground mt-6 font-semibold">
              If you recognized your business in any of these scenarios, you're not alone. But the good news is that every one of these problems is solvable with the right funnel strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Funnel Types Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              The 3 Types of Funnels That Actually Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Not all funnels are created equal. Here are the three proven funnel types we use to transform businesses and why they work so effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {funnelTypes.map((funnel, index) => <Card key={index} className="p-8 hover:shadow-glow transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-4">{funnel.title}</h3>
                <p className="text-muted-foreground mb-6">{funnel.description}</p>
                <div className="space-y-3 mb-6">
                  {funnel.stages.map((stage, stageIndex) => <div key={stageIndex} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {stageIndex + 1}
                      </div>
                      <span className="text-muted-foreground text-sm">{stage}</span>
                    </div>)}
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong>Best for:</strong> {funnel.bestFor}
                  </p>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              The Results Our Funnel Clients Actually Get
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These aren't theoretical improvements. This is what happens when you replace a leaky website with a conversion-optimized sales system.
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
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8">
                Everything You Need to Build a Revenue-Generating Funnel
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                This isn't just funnel building. This is a complete revenue system that transforms how your business acquires and converts customers.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <strong>Fair warning:</strong> Our funnels work so well that you'll need to be prepared for a significant increase in qualified leads and sales. Make sure your fulfillment systems can handle the growth.
              </p>
              <Button variant="cta" size="lg" onClick={openForm}>
                Start Building My Funnel
              </Button>
            </div>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Your Complete Funnel System</h3>
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
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Our Proven 4-Step Funnel Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This is the exact system we use to build funnels that consistently convert 3-5x better than typical websites.
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
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">Client Success Story</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              From $8K to $67K Monthly Revenue in 4 Months
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How we built an automated sales system that scaled a fitness coaching business beyond their wildest expectations.
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
                    Get My Funnel Strategy Session
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 gradient-hero">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-8 text-slate-950 md:text-6xl">
            Ready to Build Your Revenue-Generating Funnel?
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-slate-950">
            Get a custom funnel strategy session where we'll map out exactly how to turn your website visitors into paying customers.
          </p>
          <p className="text-lg mb-12 text-slate-950">
            <strong>Limited Time:</strong> We're only accepting 4 new funnel projects this month to ensure we can deliver the attention and results each project deserves.
          </p>
          <Button variant="cta" size="xl" onClick={openForm}>
            <ArrowRight className="w-5 h-5 mr-2" />
            Get My Funnel Strategy Session
          </Button>
          <p className="text-sm text-white/70 mt-4">
            No commitments. No pressure. Just a clear roadmap to turning your traffic into revenue.
          </p>
        </div>
      </section>

      <Footer />
    </div>;
}