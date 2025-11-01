import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { CheckCircle, Lightbulb, TrendingUp, Target, BarChart3, Users, Brain, AlertTriangle, Trophy, Zap, Clock } from "lucide-react";

export default function MarketingConsulting() {
  const { openForm } = useMarketingForm();

  const painPoints = [
    "You're spending money on marketing tactics that aren't driving real results",
    "Your marketing efforts feel scattered and unfocused",
    "You're not sure which channels are actually profitable",
    "Your team lacks the strategic direction to achieve breakthrough growth",
    "You're falling behind competitors who seem to have it all figured out"
  ];

  const features = [
    "Comprehensive marketing strategy development and roadmap creation",
    "In-depth competitive analysis and market positioning strategy",
    "Growth opportunity identification and prioritization framework",
    "Marketing budget allocation optimization and ROI analysis",
    "Team training and capability development programs",
    "Ongoing strategic support and quarterly business reviews",
    "Performance auditing and optimization recommendations",
    "Custom analytics dashboards and reporting systems",
    "Market research and customer persona development",
    "Scalable marketing systems and process documentation"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "347% Faster Growth",
      description: "Clients achieve accelerated, sustainable growth with strategic guidance",
      detail: "By focusing on the 20% of activities that drive 80% of results, our clients achieve breakthrough growth in record time."
    },
    {
      icon: Target,
      title: "Crystal Clear Direction",
      description: "No more scattered efforts—every marketing action has a clear purpose and outcome",
      detail: "We eliminate the guesswork and give you a step-by-step roadmap to achieve your growth goals."
    },
    {
      icon: Brain,
      title: "182+ Years Experience",
      description: "Access to nearly two centuries of combined marketing expertise",
      detail: "Why make expensive mistakes when you can learn from ours? We've seen it all and know what works."
    }
  ];

  const consultingAreas = [
    {
      title: "Growth Strategy Development",
      description: "Build a comprehensive growth engine that scales predictably with your business",
      challenges: [
        "Unclear revenue goals and growth targets",
        "No systematic approach to customer acquisition", 
        "Marketing efforts don't align with business objectives",
        "Lack of scalable systems and processes"
      ],
      solutions: [
        "Strategic growth roadmap development",
        "Revenue forecasting and planning",
        "Customer acquisition system design",
        "Scalable process documentation"
      ]
    },
    {
      title: "Digital Transformation Strategy",
      description: "Modernize your marketing approach to compete in today's digital landscape",
      challenges: [
        "Outdated marketing methods that no longer work",
        "Technology stack that doesn't integrate properly",
        "Team lacks digital marketing expertise",
        "Competitors are gaining digital advantages"
      ],
      solutions: [
        "Digital marketing stack optimization",
        "Team training and skill development",
        "Technology integration planning",
        "Competitive digital strategy analysis"
      ]
    },
    {
      title: "Performance Optimization",
      description: "Identify and eliminate bottlenecks that prevent your marketing from reaching its potential",
      challenges: [
        "High marketing spend with low returns",
        "Don't know which channels are profitable",
        "Poor conversion rates across all campaigns",
        "Unable to scale successful campaigns"
      ],
      solutions: [
        "Marketing ROI analysis and optimization",
        "Conversion rate improvement strategies",
        "Attribution modeling and tracking setup",
        "Scaling frameworks for winning campaigns"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Strategic Assessment & Gap Analysis",
      description: "We conduct a comprehensive audit of your current marketing performance, competitive landscape, and growth opportunities.",
      details: [
        "Current marketing performance audit",
        "Competitive intelligence gathering",
        "Growth opportunity identification",
        "Resource and capability assessment"
      ]
    },
    {
      step: "02", 
      title: "Custom Strategy Development",
      description: "We create a tailored marketing strategy that aligns with your business goals and market position.",
      details: [
        "Strategic roadmap creation",
        "Channel strategy and prioritization",
        "Budget allocation optimization",
        "KPI framework development"
      ]
    },
    {
      step: "03",
      title: "Implementation Planning & Training",
      description: "We develop detailed action plans and train your team to execute the strategy effectively.",
      details: [
        "Implementation timeline development",
        "Team training and workshops",
        "Process documentation creation",
        "Technology and tool recommendations"
      ]
    },
    {
      step: "04",
      title: "Ongoing Optimization & Support",
      description: "We provide continuous guidance, monitoring, and optimization to ensure sustained growth.",
      details: [
        "Monthly performance reviews",
        "Strategy adjustments and pivots",
        "Continuous optimization recommendations",
        "Quarterly strategic planning sessions"
      ]
    }
  ];

  const packages = [
    {
      name: "Strategic Audit",
      duration: "One-time engagement",
      description: "Comprehensive marketing audit with strategic recommendations and 90-day action plan",
      features: [
        "Complete marketing performance audit",
        "Competitive analysis and benchmarking",
        "Strategic recommendations report",
        "90-day implementation roadmap",
        "One follow-up strategy session"
      ],
      bestFor: "Businesses needing clear direction"
    },
    {
      name: "Growth Partnership",
      duration: "3-6 month engagement",
      description: "Hands-on strategic partnership with ongoing implementation support and optimization",
      features: [
        "Monthly strategy sessions (2 hours each)",
        "Quarterly comprehensive reviews",
        "Team training and workshops",
        "Performance monitoring and optimization",
        "Direct access to senior strategists"
      ],
      popular: true,
      bestFor: "Businesses ready to scale rapidly"
    },
    {
      name: "Executive Advisory",
      duration: "12+ month engagement",
      description: "Long-term strategic partnership for sustained growth and market leadership",
      features: [
        "Weekly strategic consultations",
        "Comprehensive strategic planning",
        "Team development and mentoring",
        "Board-level reporting and insights",
        "Priority access to specialized expertise"
      ],
      bestFor: "Market leaders and enterprise clients"
    }
  ];

  const caseStudy = {
    client: "B2B Software Company",
    industry: "SaaS Technology",
    challenge: "Struggling with stagnant growth, unclear marketing strategy, and inefficient budget allocation across multiple disconnected campaigns",
    solution: "Complete marketing strategy overhaul with focus on ideal customer profiling, channel optimization, and scalable growth systems",
    timeframe: "6 months",
    results: [
      "463% increase in qualified leads",
      "287% improvement in customer acquisition cost",
      "152% increase in monthly recurring revenue",
      "Achieved product-market fit and scalable growth engine"
    ],
    testimonial: "The strategic clarity and execution framework we got from Odin Digital completely transformed our business. We went from struggling to find customers to having more qualified leads than we could handle."
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MarketingFormModal />
      <SideTab />
      
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden min-h-[90vh] flex items-center bg-white">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full py-24 lg:py-32">
          <div className="max-w-4xl mx-auto space-y-8 lg:space-y-10 animate-fade-in">
            {/* Badge */}
            <div className="text-center">
              <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold">
                Strategic Marketing Consulting
              </Badge>
            </div>
            
            {/* Main Headline */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-charcoal leading-[1.05] tracking-tight">
                <span className="block mb-3 lg:mb-4">Stop Guessing.</span>
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
                  Start Growing.
                </span>
              </h1>
            </div>
            
            {/* Subtitle and Description */}
            <div className="text-center space-y-6 lg:space-y-8">
              <p className="text-xl md:text-2xl text-charcoal/90 leading-relaxed max-w-3xl mx-auto">
                Get the strategic clarity and proven frameworks you need to achieve breakthrough growth without wasting time and money on tactics that don't work.
              </p>
              
              <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-r-lg max-w-3xl mx-auto">
                <p className="text-lg text-charcoal/80 font-medium">
                  <strong className="text-primary">TRUTH:</strong> Most businesses fail not because they lack effort, but because they lack strategy. The difference between struggling and thriving is often just having the right roadmap.
                </p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-12 py-6 shadow-glow"
                onClick={openForm}
              >
                Book Strategy Session
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-12 py-6"
              >
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Why Smart Business Owners Feel Lost in Their Marketing
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              You're not failing because you're not working hard enough. You're struggling because the marketing landscape has become overwhelmingly complex, and you need a trusted guide to navigate it.
            </p>
          </div>

          <div className="bg-muted/30 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6">Does This Sound Like Your Situation?</h3>
            <ul className="space-y-3">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-foreground mt-6 font-semibold">
              If you recognized your business in any of these scenarios, you're not alone. And more importantly, these problems are entirely solvable with the right strategic approach.
            </p>
          </div>
        </div>
      </section>

      {/* Consulting Areas Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              The 3 Strategic Areas That Transform Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Based on 182+ years of combined experience, these are the strategic areas that create breakthrough growth for ambitious businesses.
            </p>
          </div>

          <div className="space-y-12">
            {consultingAreas.map((area, index) => (
              <Card key={index} className="p-8 hover:shadow-glow transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{area.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{area.description}</p>
                    
                    <h4 className="font-semibold text-foreground mb-3">Common Challenges:</h4>
                    <ul className="space-y-2">
                      {area.challenges.map((challenge, challengeIndex) => (
                        <li key={challengeIndex} className="flex items-start space-x-2">
                          <AlertTriangle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Our Solutions:</h4>
                    <ul className="space-y-2">
                      {area.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              The Strategic Advantage Our Clients Gain
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This isn't just consulting. This is strategic partnership that gives you an unfair advantage in your market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-glow transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <p className="text-sm text-muted-foreground italic">{benefit.detail}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Choose Your Level of Strategic Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every business is at a different stage. Choose the consulting package that matches your current needs and growth ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`p-8 hover:shadow-glow transition-all duration-300 ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
                  <Badge className="mb-4 bg-primary text-primary-foreground">Most Popular</Badge>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-primary font-semibold mb-4">{pkg.duration}</p>
                <p className="text-muted-foreground mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Best for:</strong> {pkg.bestFor}
                  </p>
                </div>
                
                <Button 
                  variant={pkg.popular ? "cta" : "outline"} 
                  className="w-full" 
                  onClick={openForm}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Our Proven Strategic Consulting Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This is the exact methodology we use to transform struggling businesses into market leaders.
            </p>
          </div>

          <div className="space-y-12">
            {process.map((step, index) => (
              <Card key={index} className="p-8 hover:shadow-glow transition-all duration-300">
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
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">Client Success Story</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              From Stagnant Growth to Market Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How strategic consulting transformed a struggling SaaS company into an industry leader.
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
                  <h4 className="font-semibold text-foreground mb-2">Our Strategic Approach:</h4>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </div>
                
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-foreground italic">"{caseStudy.testimonial}"</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-6">Results After {caseStudy.timeframe}:</h4>
                <div className="space-y-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <BarChart3 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Ready for similar strategic transformation?</strong>
                  </p>
                  <Button variant="outline" onClick={openForm}>
                    Book My Strategy Session
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
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Ready to Stop Struggling and Start Growing?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Book a strategic consulting session and get the clarity, direction, and proven frameworks you need to achieve breakthrough growth.
          </p>
          <p className="text-lg text-white/80 mb-12">
            <strong>Fair Warning:</strong> We only work with businesses that are serious about growth. If you're looking for quick fixes or magic bullets, this isn't for you. But if you're ready to do what it takes to build a market-leading business, let's talk.
          </p>
          <Button variant="cta" size="xl" onClick={openForm}>
            <Lightbulb className="w-5 h-5 mr-2" />
            Book My Strategic Session
          </Button>
          <p className="text-sm text-white/70 mt-4">
            No commitments. No pressure. Just honest strategic guidance and a clear path forward.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}