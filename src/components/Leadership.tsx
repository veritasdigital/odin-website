import lucasDurante from "@/assets/lucas-durante-real.jpg";
import marketingTeam from "@/assets/marketing-team-expertise.jpg";

export const Leadership = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* CEO Message Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Image - Left */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={lucasDurante}
                alt="Lucas Durante, CEO of Odin Digital"
                className="w-full max-w-md mx-auto rounded-lg shadow-card object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-lg font-bold text-sm shadow-xl">
                CEO & Founder
              </div>
            </div>
          </div>

          {/* Content - Right */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4">
                A Message from Our CEO
              </h2>
              <h3 className="text-2xl font-bold text-primary mb-6">Lucas Durante</h3>
            </div>
            
            <blockquote className="text-lg text-charcoal/80 leading-relaxed mb-8 italic">
              "At Odin Digital, we believe that every business deserves marketing that actually works. We're not here to sell you on fancy theories or complicated strategies that sound impressive but don't deliver results. 
              
              <br /><br />
              
              Our mission is simple: to help ambitious business owners like you achieve the growth you've been working towards. We do this by cutting through the noise, focusing on what actually moves the needle, and delivering results you can measure.
              
              <br /><br />
              
              When you work with us, you're not just getting an agency - you're getting a partner who genuinely cares about your success."
            </blockquote>

            <div className="flex items-center">
              <div className="w-16 h-1 bg-primary mr-4"></div>
              <div>
                <p className="font-bold text-charcoal">Lucas Durante</p>
                <p className="text-charcoal/60">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Expertise Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left */}
          <div>
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
                182+ Years of Combined Digital Marketing Expertise
              </h2>
            </div>
            
            <div className="text-lg text-charcoal/80 leading-relaxed mb-8">
              <p className="mb-6">
                Our team isn't just experienced - we're specialists who live and breathe digital marketing. With over 182 years of combined expertise across every aspect of digital advertising, we've seen every challenge, mastered every platform, and perfected every strategy.
              </p>

              <p className="mb-6">
                This isn't a side hustle or part-time focus for us. Digital marketing is all we do, all day, every day. While other agencies spread themselves thin across multiple services, we've dedicated our entire operation to mastering the art and science of growing businesses online.
              </p>

              <p className="font-semibold text-charcoal">
                When you partner with Odin Digital, you're tapping into nearly two centuries of specialized knowledge, focused entirely on making your advertising more effective and your business more profitable.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-black text-primary mb-2">182+</div>
                <div className="text-sm text-charcoal/70 font-medium">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary mb-2">100%</div>
                <div className="text-sm text-charcoal/70 font-medium">Digital Marketing Focus</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary mb-2">24/7</div>
                <div className="text-sm text-charcoal/70 font-medium">Dedicated Expertise</div>
              </div>
            </div>
          </div>

          {/* Image - Right */}
          <div>
            <img
              src={marketingTeam}
              alt="Odin Digital marketing team collaboration"
              className="w-full rounded-lg shadow-card object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};