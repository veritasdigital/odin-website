import lucasDurante from "@/assets/lucas-durante-real.jpg";
import marketingTeam from "@/assets/odin-team-real.jpg";
import matteoBanzon from "@/assets/matteo-banzon.png";
import sarahMitchell from "@/assets/sarah-mitchell.png";
import alfonsoRodriguez from "@/assets/alfonso-rodriguez.png";
import emilyPlatt from "@/assets/emily-platt.png";
import alexaBlake from "@/assets/hero-person-optimized.webp";
import { Card } from "@/components/ui/card";

const leadershipTeam = [
  {
    name: "Lucas Durante",
    title: "Chief Executive Officer & Founder",
    image: lucasDurante,
    bio: "Lucas founded Odin Digital with the vision of helping businesses achieve real, measurable growth through digital marketing. With over 15 years of experience in the industry, he leads our team with passion and expertise.",
    email: "lucas@odindigital.com.au",
    linkedin: "#"
  },
  {
    name: "Matteo Banzon",
    title: "Co-Founder",
    image: matteoBanzon,
    bio: "Matteo co-founded Odin Digital with a vision to revolutionize digital marketing for Australian businesses. With over 5 years of experience working with multi-national brands, he brings particular expertise in top-level marketing strategy and business development.",
    email: "matteo@odindigital.com.au",
    linkedin: "#"
  },
  {
    name: "Jake Dimo",
    title: "Co-Founder",
    image: alexaBlake,
    bio: "Jake co-founded Odin Digital with a commitment to delivering performance-driven marketing solutions. His strategic vision and hands-on approach have been instrumental in building Odin Digital into a leading Australian digital marketing agency.",
    email: "jake@odindigital.com.au",
    linkedin: "#"
  },
  {
    name: "Logan Van De Geest",
    title: "Head of Client Success",
    image: sarahMitchell,
    bio: "Logan leads our client success initiatives, ensuring every client achieves their growth objectives. With a passion for building lasting relationships and delivering exceptional results, Logan ensures our clients receive world-class service and support.",
    email: "logan@odindigital.com.au",
    linkedin: "#"
  },
  {
    name: "Alfonso Banzon",
    title: "Partner",
    image: alfonsoRodriguez,
    bio: "Alfonso is a strategic partner at Odin Digital, bringing deep expertise in digital marketing and business growth. His innovative approach and industry knowledge help drive the agency's continued success and expansion.",
    email: "alfonso@odindigital.com.au",
    linkedin: "#"
  },
  {
    name: "Kai Kellert",
    title: "Digital Strategist",
    image: emilyPlatt,
    bio: "Kai develops comprehensive digital strategies that drive measurable results for our clients. With expertise in multi-channel marketing and data analytics, Kai crafts campaigns that maximize ROI and accelerate business growth.",
    email: "kai@odindigital.com.au",
    linkedin: "#"
  },
  {
    name: "Tamuka Bangi",
    title: "Digital Strategist",
    image: alexaBlake,
    bio: "Tamuka specializes in creating data-driven digital strategies that deliver exceptional performance. With a keen eye for emerging trends and consumer behavior, Tamuka helps our clients stay ahead in the competitive digital landscape.",
    email: "tamuka@odindigital.com.au",
    linkedin: "#"
  },
  {
    name: "Abraham",
    title: "Content Director",
    image: sarahMitchell,
    bio: "Abraham leads our content strategy and creation efforts, crafting compelling narratives that engage audiences and drive conversions. With expertise in SEO, copywriting, and content marketing, Abraham ensures every piece of content delivers value.",
    email: "abraham@odindigital.com.au",
    linkedin: "#"
  },
  {
    name: "Bede Alexander",
    title: "Partner",
    image: emilyPlatt,
    bio: "Bede is a valued partner at Odin Digital, contributing strategic insights and expertise that enhance our service offerings. His collaborative approach and industry experience help shape the agency's direction and client success.",
    email: "bede@odindigital.com.au",
    linkedin: "#"
  },
  {
    name: "Sarah Mitchell",
    title: "Chief Marketing Officer",
    image: sarahMitchell,
    bio: "Sarah brings 12+ years of strategic marketing expertise, specializing in data-driven campaigns that deliver exceptional ROI. She oversees all client strategy and campaign optimization.",
    email: "sarah@odindigital.com.au",
    linkedin: "#"
  },
  {
    name: "Alexa Blake",
    title: "Head of Operations",
    image: alexaBlake,
    bio: "Alexa ensures our operations run smoothly and efficiently. With a background in project management and digital systems, she keeps our team and clients on track for success.",
    email: "alexa@odindigital.com.au",
    linkedin: "#"
  },
  {
    name: "Emily Platt",
    title: "Creative Director",
    image: alfonsoRodriguez,
    bio: "Emily leads our creative team in developing compelling campaigns that capture attention and drive engagement. Her innovative approach has helped countless brands stand out.",
    email: "emily@odindigital.com.au",
    linkedin: "#"
  }
];

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
              <div className="absolute -bottom-4 -right-4 bg-white/20 backdrop-blur-md border border-white/30 text-primary px-6 py-3 rounded-lg font-bold text-sm shadow-xl">
                Odin Digital CEO & Founder
              </div>
            </div>
          </div>

          {/* Content - Right */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
                A Message from Our CEO
              </h2>
              <p className="text-2xl font-bold text-primary mb-6">Lucas Durante</p>
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
              alt="Odin Digital marketing team collaborating on strategic campaigns and performance optimization"
              className="w-full rounded-lg shadow-card object-cover"
            />
          </div>
        </div>

        {/* Leadership Team Panel */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Our experienced leaders bring together decades of expertise in digital marketing, strategy, and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <Card key={index} className="p-6 bg-background border border-border hover:shadow-lg transition-all duration-300 group">
                <div className="text-center">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <img
                      src={leader.image}
                      alt={`${leader.name}, ${leader.title} at Odin Digital - Expert in digital marketing strategy`}
                      className="w-32 h-32 mx-auto rounded-full object-cover shadow-md group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {leader.title.split(' ')[0]}
                    </div>
                  </div>

                  {/* Name and Title */}
                  <h3 className="text-xl font-bold text-charcoal mb-2">{leader.name}</h3>
                  <p className="text-primary font-medium mb-4">{leader.title}</p>

                  {/* Bio */}
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-6">
                    {leader.bio}
                  </p>

                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};