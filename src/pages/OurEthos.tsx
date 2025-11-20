import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Zap, Target, CheckCircle, Star, TrendingUp, Award, Shield, Lightbulb, Heart, Eye, Trophy, Rocket, Handshake } from "lucide-react";
import lucasDuranteImg from "@/assets/lucas-durante-new.png";
import emilyPlattImg from "@/assets/emily-platt.png";
import alfonsoRodriguezImg from "@/assets/alfonso-rodriguez.png";
import matteoBanzonImg from "@/assets/matteo-banzon.png";
import sarahMitchellImg from "@/assets/sarah-mitchell.png";
import odinTeamImg from "@/assets/odin-team-professional.jpg";
import { OptimizedImage } from '@/components/OptimizedImage';

const OurEthos = () => {
  const identityPillars = [
    {
      number: "1",
      title: "Honesty, Always.",
      description: "Isn't it true the foundation of any genuine, real and long-lasting relationship is trust? We've made a commitment from day one to always be 100% honest and authentic.",
      detail: "If we need to trust you to be honest with us, first we must show you we can be trusted by being 100% honest and authentic with you in advance. It's the only way to ensure a mutually beneficial long-term partnership for us both.",
      icon: <Shield className="h-6 w-6" />,
      gradient: "from-primary to-primary-glow"
    },
    {
      number: "2",
      title: "Integrity Is Everything.",
      description: "We believe to live a fulfilling life, you must operate with total integrity at all times because it is the foundation of how you act in any situation, professional or personal.",
      detail: "You stay true to your word, deliver on your promises, and never compromise your standards no matter who you deal with. We must always operate with bulletproof integrity.",
      icon: <Award className="h-6 w-6" />,
      gradient: "from-primary to-accent"
    },
    {
      number: "3",
      title: "Be Real.",
      description: "We believe to be real with your partners and clients, you must tell them exactly what you are feeling deep down in your heart. Not what sounds nice, but the cold hard truth without sugar-coating it in any way.",
      detail: "We care about the clients we partner with so much that we are always 100% REAL with you whether you want to hear it or not. That is why we achieve better results than any other company in the world.",
      icon: <Eye className="h-6 w-6" />,
      gradient: "from-accent to-primary"
    },
    {
      number: "4",
      title: "Excellence Is The Baseline.",
      description: "We believe in order to achieve unparalleled outcomes for your clients (we call them partners) you must view Excellence as the baseline of what's expected.",
      detail: "We are scared to the bone every single day that we are not performing at our maximum potential. We use fear to deliver results and outcomes for our clients other companies can't even generate for themselves.",
      icon: <Star className="h-6 w-6" />,
      gradient: "from-primary-glow to-primary"
    },
    {
      number: "5",
      title: "Relationships Are Priceless.",
      description: "The quality of your relationships will not only influence how enjoyable your road to success will be, but it's also the deciding factor of whether you will make it there or not.",
      detail: "You must invest as much time, energy, and resources as needed to ensure each relationship you start is a mutually beneficial one where both parties feel valued and respected.",
      icon: <Heart className="h-6 w-6" />,
      gradient: "from-primary to-secondary"
    },
    {
      number: "6",
      title: "Lead By Example.",
      description: "If you expect certain things from your loved ones, employees, and clients. Then you must lead by example. Studies have proven people model what you DO and how you ACT.",
      detail: "Your personal standards which you live by are reflected back at you in every area of your life. To quote a legend, you must be the change you want to see in the world.",
      icon: <Lightbulb className="h-6 w-6" />,
      gradient: "from-accent to-primary-glow"
    }
  ];

  const stats = [
    { 
      value: "$500M+", 
      label: "Revenue Generated",
      icon: <TrendingUp className="h-8 w-8" />,
      description: "Total revenue generated for our clients across multiple industries"
    },
    { 
      value: "40+", 
      label: "Industries Served",
      icon: <Users className="h-8 w-8" />,
      description: "Diverse range of industries we've successfully transformed"
    },
    { 
      value: "1000s", 
      label: "Customers Reached",
      icon: <Target className="h-8 w-8" />,
      description: "New customers acquired for our client partners"
    },
    { 
      value: "100%", 
      label: "Honest & Authentic",
      icon: <Award className="h-8 w-8" />,
      description: "Our commitment to total honesty and authenticity"
    }
  ];

  const team = [
    {
      name: "Lucas Durante",
      role: "CEO & FOUNDER",
      image: lucasDuranteImg
    },
    {
      name: "Emily Platt",
      role: "OPERATIONS MANAGER",
      image: emilyPlattImg
    },
    {
      name: "Alfonso Rodriguez",
      role: "GENERAL MANAGER",
      image: alfonsoRodriguezImg
    },
    {
      name: "Matteo Banzon",
      role: "HEAD OF PARTNERSHIPS",
      image: matteoBanzonImg
    },
    {
      name: "Sarah Mitchell",
      role: "HEAD OF STRATEGY",
      image: sarahMitchellImg
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Ethos - Pre-Call Success Guide | Odin Digital</title>
        <meta name="description" content="Learn about Odin Digital's identity pillars, proven track record, and what to expect from your consultation with Australia's premier digital marketing agency." />
        <meta name="keywords" content="Odin Digital ethos, marketing agency values, pre-call guide, Australian digital marketing" />
        <link rel="canonical" href="https://odindigital.com.au/our-ethos" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary-glow rounded-full blur-xl animate-blob"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-accent rounded-full blur-lg animate-blob" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-primary rounded-full blur-xl animate-blob" style={{ animationDelay: "4s" }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="animate-float mb-6">
            <Badge className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
              <Star className="h-4 w-4 mr-2" />
              Your Pre-Call Success Guide
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Ethos
          </h1>
          <div className="flex items-center justify-center mb-6">
            <Award className="h-6 w-6 text-primary-foreground mr-2" />
            <p className="text-xl text-white/90">
              The Most Important Message You'll Read in the Next 12 Months
            </p>
          </div>
        </div>
      </section>

      {/* Company Founder Statement */}
      <section className="py-16 px-6 relative">
        <div className="relative max-w-6xl mx-auto">
          <Card className="shadow-card border-border">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-primary p-3 rounded-full">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl text-foreground mb-6">
                Company Founder Statement
              </CardTitle>
              
              {/* Team Photo Section */}
              <div className="mb-8">
                <div className="relative inline-block">
                  <OptimizedImage src={odinTeamImg} alt="Odin Digital Team" sizes="(max-width: 768px) 100vw, 50vw" className="rounded-lg shadow-lg max-w-full h-auto" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 text-foreground px-8 pb-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-primary rounded-full"></div>
                <div className="space-y-6 pl-6">
                  <p className="text-lg font-medium">
                    If you are an ambitious business owner looking to grow your business, experience more freedom, and create a bigger impact on the world with your products or services...
                  </p>
                  <p className="text-xl font-bold text-foreground">
                    This may be the most important message you read in the next 12 months.
                  </p>
                  <p>
                    Why? Because the strategies, principles, and methodologies revealed in the following pages are responsible for generating over $500 million in revenue for us and our clients across 40+ industries.
                  </p>
                  <p>
                    The reality is, most business owners leave thousands of potential customers in pain, without the solutions that they offer. Simply because the quality of their marketing efforts don't reflect the quality, nor the standards they hold for their level of service.
                  </p>
                  <p>
                    On your call, we are going to help you solve this problem for good using a proven strategy we've replicated and customized countless times. So you can help more people, create a bigger impact, and profit accordingly along the way... and it all starts here.
                  </p>
                </div>
              </div>
              <div className="text-center pt-6 border-t border-border">
                <p className="font-semibold text-lg">
                  Your Partner,<br />
                  <span className="text-primary">Lucas Durante</span><br />
                  CEO & Founder, Odin Digital
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 relative bg-gradient-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-glow rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our Proven Track Record
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card text-card-foreground text-center group hover:scale-105 transition-all duration-300 shadow-card">
                <CardContent className="py-8 relative">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-primary p-3 rounded-full shadow-glow text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium mb-2">{stat.label}</div>
                  <div className="text-muted-foreground text-sm">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Identity Pillars */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-primary p-4 rounded-full shadow-glow">
                <Shield className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Identity Pillars
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              The Foundations of How We Proudly Coordinate With Our Client Partnerships and Operate Our Company
            </p>
            <div className="max-w-4xl mx-auto space-y-4">
              <p>Now just before we dive into the details of what we will be discussing on your call with us, and exactly how it's going to result in measurable outcomes which improve your life.</p>
              <p>Unlike many companies, we don't throw around a term like "core values" because "it sounds nice". Instead we embody our core values and practice living in alignment with them every day because they are a direct reflection of our self-image and identity.</p>
              <p>This is why we refer to them as our "Identity Pillars" because they are the biochemical makeup of WHO we are and how we act.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {identityPillars.map((pillar, index) => (
              <Card key={index} className="hover:scale-105 transition-all duration-300 relative overflow-hidden group shadow-card">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${pillar.gradient}`}></div>
                <CardHeader className="relative">
                  <div className="flex items-center mb-4">
                    <div className={`bg-gradient-to-r ${pillar.gradient} text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold mr-4 shadow-glow`}>
                      {pillar.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className="text-muted-foreground mr-2">{pillar.icon}</div>
                        <CardTitle className="text-xl">
                          {pillar.title}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed">{pillar.description}</p>
                  <div className="border-l-4 border-primary/20 pl-4 bg-primary/5 p-3 rounded-r">
                    <p className="text-sm italic">{pillar.detail}</p>
                  </div>
                </CardContent>
                <div className="absolute bottom-0 right-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="text-8xl font-bold text-muted">{pillar.number}</div>
                </div>
              </Card>
            ))}
          </div>

          {/* Final Word Section */}
          <div className="mt-16">
            <Card className="bg-primary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">A Final Word</h3>
                <div className="space-y-4">
                  <p>If you connected with these Identity Pillars, it gives me great pleasure to know we are already connecting together as partners on some level.</p>
                  <p>Moreover, I hope you take these principles and implement them in partnerships with your own clients. So when we help you flood your business with a conga line of new clients and customers, they'll sing your praises from the rooftops.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Intention For Your Obligation Free Call */}
      <section className="py-16 px-6 relative">
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-primary p-4 rounded-full shadow-glow">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              The Intention For Your Obligation Free Call
            </h2>
            <p className="text-xl text-muted-foreground">
              The Purpose Behind Why We Do These Calls and What You Will Get Out of It
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardContent className="p-8 space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <p className="mb-6 text-lg leading-relaxed">
                    When you are truly exceptional at what you do and understand how to position yourself in the marketplace correctly. You enjoy the pleasure of commanding premium prices for your products or service.
                  </p>
                  <p className="leading-relaxed">
                    Another perk is that you do not have to "sell clients" in the way most people traditionally view sales. Instead, you can communicate with potential partners as a trusted adviser.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-card group">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <div className="bg-gradient-primary p-2 rounded-full mr-3">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    Reason #1
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="leading-relaxed">
                      Instead of just pitching a product to anyone with a pulse and a credit card like most companies. We spend 99% of our time diagnosing what the real problem constricting your business and lifestyle is right now.
                    </p>
                    <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r">
                      <p>
                        After a crystal clear diagnosis, we often find we cannot help with the real problem you are facing and we simply aren't a good fit. In which case, you will still gain amazing value because you'll be clear on the problem and we'll point you towards someone who can help.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card group">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <div className="bg-gradient-primary p-2 rounded-full mr-3">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    Reason #2
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="leading-relaxed">
                      However if, after a thorough diagnosis, we believe we can help you solve the real problem in your business we'll show you how. We'll walk you through the exact steps you need to take in order to break through any income ceilings or business bottlenecks you are facing right now.
                    </p>
                    <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r">
                      <p className="text-sm mb-2">Often we find this involves getting you clear on the following:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Your ideal target market and the perfect messaging</li>
                        <li>What premium price point you should be charging</li>
                        <li>How to consistently attract these ideal clients at premium prices on autopilot every day</li>
                        <li>And more</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-primary text-white shadow-card">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10">
                  <Star className="h-32 w-32" />
                </div>
                <div className="relative">
                  <p className="text-xl mb-4 font-medium">
                    The most common response we get on these calls is "Wow I've never looked at it that way... it makes so much sense!"
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Why? Because we are going to be isolating exactly where you are at and what problems are standing in between you and the business of your dreams... Then crafting a step-by-step game plan which shatters those problems into little pieces while you march towards victory.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">The Intention, In Summary</h3>
                <div className="space-y-4 text-center">
                  <p>Ultimately, the purpose of the call is to see if you are a good fit for the Odin methodology while ensuring you leave the call in a much better place than when you came onto it. We'll advise you every step of the way to make that happen.</p>
                  <p className="font-semibold text-lg">
                    Your Partner,<br />
                    <span className="text-primary">Lucas Durante</span><br />
                    CEO & Founder, Odin Digital
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 px-6 relative">
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-primary p-4 rounded-full shadow-glow">
                <Users className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Meet Your Success Team
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Partner with Australia's most experienced marketing specialists who have dedicated every moment to perfecting their craft and growing your brand.
            </p>
            <div className="max-w-4xl mx-auto space-y-4">
              <p>You're not just hiring an agency—you're gaining access to a hand-picked team of marketing experts who live and breathe business growth. Each member brings unique expertise that, when combined, creates an unstoppable force for your success.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-border shadow-card hover:shadow-glow transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <OptimizedImage 
                      src={member.image} 
                      alt={`${member.name} - ${member.role} at Odin Digital`} 
                      sizes="(max-width: 768px) 100vw, 50vw" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Promise Section */}
          <div className="mt-16">
            <Card className="bg-gradient-primary text-white shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10">
                <Trophy className="h-40 w-40" />
              </div>
              <CardContent className="p-8 relative">
                <div className="text-center space-y-6">
                  <div className="flex justify-center mb-6">
                    <div className="bg-white/20 p-4 rounded-full">
                      <Rocket className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6">Our Team Promise To You</h3>
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="bg-white/20 p-3 rounded-full inline-flex mb-4">
                        <Target className="h-8 w-8" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Laser-Focused Strategy</h4>
                      <p className="text-white/80">We'll identify and eliminate the exact bottlenecks preventing your business from scaling to the next level.</p>
                    </div>
                    <div>
                      <div className="bg-white/20 p-3 rounded-full inline-flex mb-4">
                        <TrendingUp className="h-8 w-8" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Measurable Results</h4>
                      <p className="text-white/80">Every strategy we implement will have clear KPIs and measurable outcomes that directly impact your bottom line.</p>
                    </div>
                    <div>
                      <div className="bg-white/20 p-3 rounded-full inline-flex mb-4">
                        <Handshake className="h-8 w-8" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Partnership Mentality</h4>
                      <p className="text-white/80">We're not just service providers—we're invested partners who celebrate your wins as our own victories.</p>
                    </div>
                  </div>
                  <div className="border-t border-white/20 pt-6 mt-8">
                    <p className="text-xl font-medium">
                      When you work with our team, you're not just getting marketing services—you're getting a dedicated success squad that won't rest until you achieve the business breakthrough you've been dreaming of.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 px-6 relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-24 h-24 bg-primary-glow rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-primary p-4 rounded-full shadow-glow animate-float">
              <Zap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Experience More Honesty, Integrity and Profit While Creating the Dent on the Universe You Were Born to Make
          </p>
          
          <Card className="bg-card/90 backdrop-blur-sm shadow-card">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
            <CardContent className="p-8 space-y-6 relative">
              <div className="absolute top-4 right-4 opacity-5">
                <Star className="h-24 w-24" />
              </div>
              <div className="relative space-y-6">
                <p className="text-lg leading-relaxed text-center">
                  We are looking forward to discussing your goals on our call and providing you with total clarity on the next best steps to achieve them with conviction.
                </p>
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <p className="font-bold text-lg text-foreground flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary mr-2" />
                    Please show up on time, and be ready to work!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OurEthos;
