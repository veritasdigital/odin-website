import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { CheckCircle, Search, TrendingUp, Globe, BarChart3, Users, Clock } from "lucide-react";
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
      <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
        
        {/* Animated background blobs from homepage */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '2s'
      }} />
        
        {/* Floating circles from homepage */}
        <div className="absolute top-20 right-1/4 w-32 h-32 border-2 border-white/10 rounded-full animate-float" />
        <div className="absolute bottom-32 left-1/3 w-24 h-24 border-2 border-white/10 rounded-lg animate-float" style={{
        animationDelay: '3s'
      }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-float" style={{
        animationDelay: '1.5s'
      }} />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Search Engine Optimization</Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
              SEO Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Improve your organic search rankings and drive sustainable long-term traffic growth with proven SEO strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" onClick={openForm}>
                Get Free SEO Audit
              </Button>
              <Button variant="outline" size="xl" className="border-white hover:bg-white text-pink-600">
                View SEO Results
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Why SEO Delivers Long-Term Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlike paid advertising, SEO builds sustainable organic traffic that compounds over time.
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
                  <p className="text-muted-foreground">{benefit.description}</p>
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
                Comprehensive SEO Services
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our full-service SEO approach covers every aspect of search engine optimization to maximize your organic visibility.
              </p>
              <Button variant="cta" size="lg" onClick={openForm}>
                Start Your SEO Journey
              </Button>
            </div>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">What's Included</h3>
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

      {/* Case Study Section */}
      <section className="relative py-24 gradient-hero overflow-hidden">
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
        
        {/* Background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{
        animationDelay: '3s'
      }} />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              SEO Success Story
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              How we transformed an e-commerce site's organic performance.
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{caseStudy.client}</h3>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Results:</h4>
                <div className="space-y-4">
                  {caseStudy.results.map((result, index) => <div key={index} className="flex items-center space-x-3">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">{result}</span>
                    </div>)}
                </div>
                <Button variant="outline" className="mt-6" onClick={openForm}>
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
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              SEO Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">How long does SEO take to show results?</h3>
              <p className="text-muted-foreground">SEO is a long-term strategy. You'll typically see initial improvements within 3-4 months, with significant results appearing after 6-12 months of consistent optimization.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Do you guarantee first page rankings?</h3>
              <p className="text-muted-foreground">While we can't guarantee specific rankings (no legitimate SEO company can), we guarantee improved visibility, traffic, and search performance based on our proven track record.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">What's included in your SEO reporting?</h3>
              <p className="text-muted-foreground">Monthly reports include keyword rankings, organic traffic growth, technical improvements implemented, content performance, and strategic recommendations for continued growth.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Let our SEO experts build sustainable organic traffic that grows your business.
          </p>
          <Button variant="cta" size="xl" onClick={openForm}>
            <Search className="w-5 h-5 mr-2" />
            Get Your Free SEO Audit
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
}