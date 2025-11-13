import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { CheckCircle, Search, TrendingUp, Globe, BarChart3, Users, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
export default function SEO() {
  const {
    openForm
  } = useMarketingForm();
  const features = ["Technical SEO audits and fixes", "Comprehensive keyword research", "On-page optimization", "Content strategy development", "Link building campaigns", "Local SEO optimization", "Site speed optimization", "Mobile SEO optimization", "Schema markup implementation", "Monthly progress reports"];
  const benefits = [{
    icon: TrendingUp,
    title: "150% Traffic Increase",
    description: "Average organic traffic growth within 6 months of SEO implementation"
  }, {
    icon: Globe,
    title: "Top 3 Rankings",
    description: "85% of target keywords ranking in top 3 positions on Google"
  }, {
    icon: Users,
    title: "Higher Quality Leads",
    description: "Organic traffic converts 60% better than paid advertising"
  }];
  const process = [{
    step: "01",
    title: "SEO Audit & Research",
    description: "Comprehensive analysis of your website's current SEO performance and competitor landscape."
  }, {
    step: "02",
    title: "Strategy Development",
    description: "Custom SEO roadmap with keyword targeting, content strategy, and technical improvements."
  }, {
    step: "03",
    title: "Implementation",
    description: "Execute on-page optimization, technical fixes, and content creation according to strategy."
  }, {
    step: "04",
    title: "Monitor & Optimize",
    description: "Ongoing monitoring, reporting, and optimization to maintain and improve rankings."
  }];
  const caseStudy = {
    client: "E-commerce Retailer",
    challenge: "Poor organic visibility with only 12% of traffic from search engines",
    solution: "Complete SEO overhaul including technical fixes, content optimization, and strategic link building",
    results: ["580% increase in organic traffic", "Top 3 rankings for 75+ keywords", "$2.3M additional revenue from organic search"]
  };
  return <div className="min-h-screen bg-background">
      <Header />
      <MarketingFormModal />
      <SideTab />
      
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
        
        {/* Floating Particles */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-muted/20 rounded-full animate-float"></div>
        <div className="absolute top-64 right-1/3 w-3 h-3 bg-muted/25 rounded-full animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-48 left-1/2 w-2 h-2 bg-muted/15 rounded-full animate-float" style={{
        animationDelay: '2s'
      }}></div>
        
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
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Search Engine Optimization</Badge>
            <h1 className="text-5xl md:text-7xl font-black text-charcoal mb-8 animate-fade-in">
              SEO Services
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/70 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              Improve your organic search rankings and drive sustainable long-term traffic growth with proven SEO strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <Button variant="cta" size="xl" onClick={openForm}>
                Get Free SEO Audit
              </Button>
              <Button variant="outline" size="xl" className="border-primary hover:bg-primary hover:text-white">
                View SEO Results
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Features Combined Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
              Why SEO Delivers Long-Term Results
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Unlike paid advertising, SEO builds sustainable organic traffic that compounds over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return <Card key={index} className="p-8 text-center hover:shadow-glow transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">{benefit.title}</h3>
                  <p className="text-charcoal/70">{benefit.description}</p>
                </Card>;
          })}
          </div>

          <Card className="p-8">
            <h3 className="text-2xl font-bold text-charcoal mb-6">Complete SEO Service Includes</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal/70">{feature}</span>
                </li>)}
            </ul>
            <div className="mt-8 text-center">
              <Button variant="cta" size="lg" onClick={openForm} className="whitespace-normal break-words py-3 px-6">
                Start Your SEO Journey
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Our SEO Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A data-driven approach that delivers sustainable organic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => <Card key={index} className="p-6 text-center hover:shadow-glow transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Case Study Section - Simplified */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <Card className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
                SEO Success Story
              </h2>
              <p className="text-lg text-charcoal/70">
                How we transformed an e-commerce site's organic performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">{caseStudy.client}</h3>
                <div className="mb-6">
                  <h4 className="font-semibold text-charcoal mb-2">Challenge:</h4>
                  <p className="text-charcoal/70">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Solution:</h4>
                  <p className="text-charcoal/70">{caseStudy.solution}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-charcoal mb-4">Results:</h4>
                <div className="space-y-4">
                  {caseStudy.results.map((result, index) => <div key={index} className="flex items-center space-x-3">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      <span className="text-charcoal/70">{result}</span>
                    </div>)}
                </div>
                <Button variant="outline" className="mt-6 whitespace-normal break-words py-3 px-6" onClick={openForm}>
                  Get SEO Results Like This
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
              SEO Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-bold text-charcoal">How long does SEO take to show results?</AccordionTrigger>
              <AccordionContent className="text-charcoal/70">SEO is a long-term strategy. You'll typically see initial improvements within 3-4 months, with significant results appearing after 6-12 months of consistent optimization.</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-bold text-charcoal">Do you guarantee first page rankings?</AccordionTrigger>
              <AccordionContent className="text-charcoal/70">While we can't guarantee specific rankings (no legitimate SEO company can), we guarantee improved visibility, traffic, and search performance based on our proven track record.</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-bold text-charcoal">What's included in your SEO reporting?</AccordionTrigger>
              <AccordionContent className="text-charcoal/70">Monthly reports include keyword rankings, organic traffic growth, technical improvements implemented, content performance, and strategic recommendations for continued growth.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-charcoal mb-8">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-charcoal/70 mb-12 leading-relaxed">
            Let our SEO experts build sustainable organic traffic that grows your business.
          </p>
          <Button variant="cta" size="xl" onClick={openForm} className="whitespace-normal break-words py-3 px-6">
            <Search className="w-5 h-5 mr-2" />
            Get Your Free SEO Audit
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
}