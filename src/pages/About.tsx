import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Leadership } from "@/components/Leadership";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import newAgeMarketingLogo from "@/assets/logos/new-age-marketing.png";
import veritasLogo from "@/assets/logos/veritas-logo.png";
import agentConquestLogo from "@/assets/logos/agent-conquest.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-black text-charcoal mb-8 leading-tight">
                About Odin Digital: A New Era of <span className="text-primary">Digital Marketing</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">
                We're Not Just a Digital Agency; We're Your Unfair Advantage.
              </h2>
              <p className="text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed">
                In a world saturated with digital noise, Odin Digital was founded on a simple, powerful principle: <strong>every ambitious business deserves marketing that delivers real, measurable results.</strong> We are a collective of performance-obsessed marketers, strategists, and innovators who have united to challenge the status quo of the agency world.
              </p>
            </div>
          </div>
        </section>

        {/* Genesis Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-12 text-center">
                Our Genesis: A Rebellion Against the Average
              </h2>
              
              <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed space-y-6 mb-12">
                <p>
                  Our founder, Lucas Durante, spent over a decade witnessing the frustrations of business owners who were tired of the same old story: big promises, confusing reports, and a lackluster impact on the bottom line. He saw a gap between the complex, ever-changing digital landscape and the straightforward results that businesses actually need.
                </p>
                
                <p>
                  Odin Digital is the answer to that problem. It was born from a rebellion against the average, the opaque, and the ineffective. We are the agency Lucas wished he could have hired: a team that is brutally honest, relentlessly data-driven, and completely invested in the success of its partners.
                </p>
              </div>

              <Card className="p-8 bg-primary/5 border-primary/20">
                <blockquote className="text-xl italic text-charcoal/90 leading-relaxed mb-6">
                  "I founded Odin Digital to be the antidote to the traditional agency model. We're not here to sell you services; we're here to build your empire. Our success is a direct reflection of our clients' success, and that's the only metric that truly matters."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-1 bg-primary mr-4"></div>
                  <div>
                    <p className="font-bold text-charcoal">Lucas Durante</p>
                    <p className="text-charcoal/60">CEO & Founder</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
                The Odin Philosophy: Our Core Values
              </h2>
              <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
                Our values are not just words on a page; they are the operating system for every decision we make, every strategy we deploy, and every partnership we forge.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="p-8 bg-background border border-border hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-black text-primary">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Performance Over Platitudes</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    We believe in results, not rhetoric. While other agencies talk about brand awareness and engagement, we focus on the metrics that matter: revenue, ROI, and client retention.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-background border border-border hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-black text-primary">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Radical Transparency</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    We provide our partners with a crystal-clear view of their marketing performance. No black boxes, no confusing jargon, and no hidden fees.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-background border border-border hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-black text-primary">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">Partners in Prosperity</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    We are not a vendor; we are an extension of your team. Our 95% client retention rate is a testament to the strength of our partnerships.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <Leadership />

        {/* Strategic Acquisitions */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
                Strategic Acquisitions: <span className="text-primary">Expanding Our Expertise</span>
              </h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                We've strategically acquired specialized agencies to bring you unparalleled expertise across every industry and marketing channel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 bg-background border border-border hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <div className="w-20 h-20 flex items-center justify-center mb-4">
                    <img src={agentConquestLogo} alt="Agent Conquest" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Agent Conquest</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    Specialized agency focused on helping real estate agents dominate their local markets and generate quality leads.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-background border border-border hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-primary font-black text-lg">CL</span>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Conquered Leads</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    Email marketing specialists who excel at turning subscribers into customers through sophisticated automation and segmentation.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-background border border-border hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-primary font-black text-lg">PC</span>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Practice Conquest</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    Healthcare marketing experts specializing in helping medical practices generate more patients and grow their practice.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-background border border-border hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <div className="w-20 h-20 flex items-center justify-center mb-4">
                    <img src={newAgeMarketingLogo} alt="New Age Marketing" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">New Age Marketing</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    Full-service digital agency bringing fresh perspectives and innovative strategies across diverse industries.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-background border border-border hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="mb-4">
                  <div className="w-20 h-20 flex items-center justify-center mb-4">
                    <img src={veritasLogo} alt="Veritas Digital" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Veritas Digital</h3>
                  <p className="text-charcoal/80 leading-relaxed">
                    7 years of proven excellence working with billion-dollar enterprise clients, bringing enterprise-level expertise to every project.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Performance Metrics Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                The Odin Engine: Proven Performance at Scale
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                We measure our success by the success of our partners. The Odin Engine is our proprietary system of strategies, technologies, and relentless optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-4">$574M+</div>
                <div className="text-white/90 font-medium">Verified Client Revenue Contribution</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-4">540%</div>
                <div className="text-white/90 font-medium">Average Return on Investment</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-4">283+</div>
                <div className="text-white/90 font-medium">Successful Campaigns Across 6 Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-4">95%</div>
                <div className="text-white/90 font-medium">Client Retention Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
                The Odin Difference: Why We Win
              </h2>
              <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
                What makes Odin Digital the agency of choice for ambitious brands? It's our unwavering commitment to a different way of doing things.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 bg-background border border-border text-center">
                <h3 className="text-2xl font-bold text-charcoal mb-4">No Lock-In Contracts</h3>
                <p className="text-charcoal/80 leading-relaxed">
                  We believe in the power of our performance. Our partners stay with us because they want to, not because they have to.
                </p>
              </Card>

              <Card className="p-8 bg-background border border-border text-center">
                <h3 className="text-2xl font-bold text-charcoal mb-4">100% Digital Marketing Focus</h3>
                <p className="text-charcoal/80 leading-relaxed">
                  We don't do everything; we do one thing exceptionally well. Our entire operation is dedicated to mastering the digital landscape.
                </p>
              </Card>

              <Card className="p-8 bg-background border border-border text-center">
                <h3 className="text-2xl font-bold text-charcoal mb-4">Direct Access to Leadership</h3>
                <p className="text-charcoal/80 leading-relaxed">
                  You won't be passed off to a junior account manager. You will have direct access to the senior strategists driving your growth.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
              Ready to Conquer Your Digital Landscape?
            </h2>
            <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
              If you're an ambitious business owner who is tired of the average and ready for real results, then it's time to partner with Odin Digital. Let's build your empire together.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Schedule Your Free, No-Obligation Strategy Session
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;