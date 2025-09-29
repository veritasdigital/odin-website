import { Card } from "@/components/ui/card";

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
            <div>
              <img 
                src="/src/assets/lucas-durante-real.jpg" 
                alt="Lucas Durante, CEO & Founder of Odin Digital" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-black text-charcoal mb-6">
                A Message from Our CEO
              </h3>
              <blockquote className="text-lg text-charcoal/90 leading-relaxed mb-6 italic">
                "I founded Odin Digital to be the antidote to the traditional agency model. We're not here to sell you services; we're here to build your empire. Our success is a direct reflection of our clients' success, and that's the only metric that truly matters."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-1 bg-primary mr-4"></div>
                <div>
                  <p className="font-bold text-charcoal">Lucas Durante</p>
                  <p className="text-charcoal/60">CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Experience */}
        <div className="mb-20">
          <Card className="p-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
                182+ Years of Combined 
                <span className="text-primary block">Digital Marketing Expertise</span>
              </h3>
              <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
                Our leadership team brings together decades of experience from the world's most demanding digital marketing environments. This isn't just knowledge—it's battle-tested expertise that drives results.
              </p>
            </div>
          </Card>
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