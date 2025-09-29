import { Card } from "@/components/ui/card";
import lucasDuranteImage from "@/assets/lucas-durante-new.png";
import odinTeamReal from "@/assets/odin-team-real.jpg";

export const AboutUs = () => {
  const values = [
    {
      number: "1",
      title: "Performance Over Platitudes",
      description: "We focus on the metrics that matter: revenue, ROI, and client retention."
    },
    {
      number: "2", 
      title: "Radical Transparency",
      description: "Crystal-clear view of your marketing performance. No black boxes, no confusing jargon."
    },
    {
      number: "3",
      title: "Partners in Prosperity", 
      description: "We're an extension of your team. Our 95% client retention rate proves it."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* About Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
            About Odin Digital: Your <span className="text-primary">Unfair Advantage</span>
          </h2>
          <p className="text-xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
            We're not just a digital agency; we're a collective of performance-obsessed marketers who have united to challenge the status quo. <strong>Every ambitious business deserves marketing that delivers real, measurable results.</strong>
          </p>
        </div>

        {/* CEO Message */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={lucasDuranteImage} 
                alt="Lucas Durante, CEO & Founder of Odin Digital" 
                className="w-full rounded-lg shadow-lg"
              />
              {/* Glassy signature bubble that runs off the picture */}
              <div className="absolute -bottom-6 -right-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-primary mr-4"></div>
                  <div>
                    <p className="font-bold text-charcoal">Lucas Durante</p>
                    <p className="text-charcoal/80 text-sm">Chief Executive Officer</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-black text-charcoal mb-6">
                A Message from Our CEO
              </h3>
              <blockquote className="text-lg text-charcoal/90 leading-relaxed mb-6 italic">
                "At Odin Digital, we believe that every business deserves marketing that actually works. We're not here to sell you on fancy theories or complicated strategies that sound impressive but don't deliver results.
                <br /><br />
                Our mission is simple: to help ambitious business owners like you achieve the growth you've been working towards. We do this by cutting through the noise, focusing on what actually moves the needle, and delivering results you can measure.
                <br /><br />
                When you work with us, you're not just getting an agency - you're getting a partner who genuinely cares about your success."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Team Experience Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
                182+ Years of Combined 
                <span className="text-primary block">Digital Marketing Expertise</span>
              </h3>
              <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
                <p>
                  Our team isn't just experienced - we're specialists who live and breathe digital marketing. With over 182 years of combined expertise across every aspect of digital advertising, we've seen every challenge, mastered every platform, and perfected every strategy.
                </p>
                <p>
                  This isn't a side hustle or part-time focus for us. Digital marketing is all we do, all day, every day. While other agencies spread themselves thin across multiple services, we've dedicated our entire operation to mastering the art and science of growing businesses online.
                </p>
                <p>
                  When you partner with Odin Digital, you're tapping into nearly two centuries of specialized knowledge, focused entirely on making your advertising more effective and your business more profitable.
                </p>
              </div>
              
              {/* Stats */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center md:text-left">
                  <div className="text-3xl font-black text-primary mb-1">182+</div>
                  <div className="text-sm font-medium text-charcoal/70">Years Combined Experience</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-3xl font-black text-primary mb-1">100%</div>
                  <div className="text-sm font-medium text-charcoal/70">Digital Marketing Focus</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-3xl font-black text-primary mb-1">24/7</div>
                  <div className="text-sm font-medium text-charcoal/70">Dedicated Expertise</div>
                </div>
              </div>
            </div>
            
            {/* Image - Right Side */}
            <div className="relative">
              <img 
                src={odinTeamReal}
                alt="Odin Digital marketing team" 
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
              The Odin Philosophy: Our Core Values
            </h3>
            <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
              Our values are the operating system for every decision we make, every strategy we deploy, and every partnership we forge.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 bg-background border border-border hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-black text-primary">{value.number}</span>
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-4">{value.title}</h4>
                  <p className="text-charcoal/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Acquisitions */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
              Strategic Acquisitions: <span className="text-primary">Expanding Our Expertise</span>
            </h3>
            <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
              We've strategically acquired specialized agencies to bring you unparalleled expertise across every industry and marketing channel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-background border border-border hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-black text-lg">AC</span>
                </div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Agent Conquest</h4>
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
                <h4 className="text-xl font-bold text-charcoal mb-2">Conquered Leads</h4>
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
                <h4 className="text-xl font-bold text-charcoal mb-2">Practice Conquest</h4>
                <p className="text-charcoal/80 leading-relaxed">
                  Healthcare marketing experts specializing in helping medical practices generate more patients and grow their practice.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-background border border-border hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-black text-lg">NAM</span>
                </div>
                <h4 className="text-xl font-bold text-charcoal mb-2">New Age Marketing</h4>
                <p className="text-charcoal/80 leading-relaxed">
                  Full-service digital agency bringing fresh perspectives and innovative strategies across diverse industries.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-background border border-border hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-black text-lg">VD</span>
                </div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Veritas Digital</h4>
                <p className="text-charcoal/80 leading-relaxed">
                  7 years of proven excellence working with billion-dollar enterprise clients, bringing enterprise-level expertise to every project.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-black text-charcoal mb-6">
            What Actually Makes Us <span className="text-primary">Different</span>
          </h3>
          <p className="text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed mb-4">
            While other agencies make bold promises and lock you into long contracts, we've built our entire business model around one simple principle: <strong>earn your trust every single month.</strong>
          </p>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            These aren't just marketing statements—they're the operational realities that define how we work with every single client.
          </p>
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 bg-background border border-border text-center">
            <h4 className="text-lg font-bold text-charcoal mb-3">No Lock-In Contracts</h4>
            <p className="text-charcoal/80 text-sm leading-relaxed">
              Our partners stay because they want to, not because they have to.
            </p>
          </Card>

          <Card className="p-6 bg-background border border-border text-center">
            <h4 className="text-lg font-bold text-charcoal mb-3">100% Digital Marketing Focus</h4>
            <p className="text-charcoal/80 text-sm leading-relaxed">
              We do one thing exceptionally well: mastering the digital landscape.
            </p>
          </Card>

          <Card className="p-6 bg-background border border-border text-center">
            <h4 className="text-lg font-bold text-charcoal mb-3">Direct Access to Leadership</h4>
            <p className="text-charcoal/80 text-sm leading-relaxed">
              Direct access to senior strategists driving your growth.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};