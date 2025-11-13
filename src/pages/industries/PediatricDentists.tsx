import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { CheckCircle, Users, Target, TrendingUp, Award, Search, Heart, Mail, MessageSquare } from "lucide-react";
const PediatricDentists = () => {
  const {
    openForm
  } = useMarketingForm();
  const faqs = [{
    question: "How can I use digital marketing to clearly differentiate my practice from general dentists?",
    answer: "We focus on your specialised value proposition. This includes creating content that highlights your unique training, showcasing your child-friendly environment, and targeting long-tail keywords that only parents seeking a specialist would use. We emphasise your expertise in child development, behaviour management, and preventative care that general dentists simply don't specialise in."
  }, {
    question: "What is the most effective platform for reaching parents of young children?",
    answer: "A multi-channel approach is best. Google (SEO/PPC) captures high-intent parents actively searching for a dentist. Instagram and Facebook (Meta Ads) are crucial for building brand awareness and trust with parents aged 25-45. We also leverage email marketing for patient retention and referral generation."
  }, {
    question: "How do you address the 'scare-free' aspect of paediatric dentistry in marketing?",
    answer: "Through visual design and messaging. Our web design emphasises a fun, welcoming environment, and our copy uses reassuring, positive language, focusing on comfort and long-term health, not procedures. We showcase your child-friendly amenities, gentle approach, and positive patient experiences to build trust before the first appointment."
  }, {
    question: "What kind of ROI can I expect from paediatric dentist marketing?",
    answer: "Our paediatric dentist clients typically see a 3-5x ROI within 6-12 months. This includes increased new patient appointments, higher treatment acceptance rates, and improved patient lifetime value as children grow with your practice. We focus on metrics that matter: cost per acquisition, patient lifetime value, and retention rates."
  }, {
    question: "How do you help me compete against general dentists who offer paediatric services?",
    answer: "We position you as the specialist authority. This includes creating content that educates parents on the difference between general dentistry and paediatric specialisation, highlighting your advanced training, showcasing your child-specific facility and equipment, and targeting parents who specifically search for paediatric specialists."
  }, {
    question: "How long does it take to see results from paediatric dentist marketing?",
    answer: "SEO typically takes 3-6 months to gain traction. PPC and Meta Ads can generate leads within 2-4 weeks. Web design improvements can boost conversion rates immediately. We set realistic expectations and provide transparent reporting throughout the process."
  }, {
    question: "Do you work with paediatric dental practices of all sizes?",
    answer: "Yes. Whether you're a solo practitioner, a multi-dentist practice, or a paediatric dental group, we tailor our strategies to your specific goals, budget, and market. Our systems scale with your practice growth."
  }, {
    question: "How do you build trust with protective parents online?",
    answer: "We implement a comprehensive trust-building system: professional web design with patient testimonials, video tours of your child-friendly facility, educational content that demonstrates your expertise, online reputation management to highlight positive reviews, and social proof through before/after photos and case studies."
  }, {
    question: "Can you help with both new patient acquisition and patient retention?",
    answer: "Absolutely. We build acquisition systems (SEO, PPC, Meta Ads) and retention systems (email marketing, patient portals, referral programs). Retaining patients as they grow is crucial for lifetime value in paediatric dentistry."
  }, {
    question: "What makes your approach different from general dental marketing agencies?",
    answer: "We understand the dual-audience challenge unique to paediatric dentistry. We speak to both the decision-maker (parent) and the patient (child). We understand the importance of anxiety reduction, trust-building, and positioning you as the specialist authority, not just another dentist."
  }, {
    question: "How do you handle marketing for multiple locations?",
    answer: "We implement location-specific landing pages, local SEO optimisation for each practice, and geo-targeted PPC and Meta Ads campaigns. Each location gets customised messaging while maintaining consistent brand standards across your practice group."
  }, {
    question: "What is your pricing structure?",
    answer: "Our pricing is customised based on your goals, market competitiveness, and service mix. Monthly retainers typically range from $3,000 to $15,000+ for comprehensive campaigns. We focus on ROI, not just spending—our goal is to make you more money than you invest."
  }, {
    question: "Do you offer contracts or can I cancel anytime?",
    answer: "We offer both fixed-term agreements (typically 6-12 months for best results) and month-to-month options. Most clients stay with us long-term because we deliver measurable results. No lock-in contracts—we earn your business every month."
  }, {
    question: "How do you measure success?",
    answer: "We track metrics that matter to your bottom line: new patient appointments, cost per acquisition, patient lifetime value, treatment acceptance rates, and overall ROI. You get transparent, easy-to-understand monthly reports showing exactly how your marketing investment is performing."
  }, {
    question: "How do I get started?",
    answer: "Schedule a free strategy session with our team. We'll audit your current marketing, identify opportunities, and provide a customised roadmap for growth. No pressure, no obligations—just actionable insights tailored to your paediatric dental practice."
  }];
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "Organization",
      "name": "Odin Digital",
      "url": "https://growth-conduit-central.lovable.app/",
      "logo": "https://growth-conduit-central.lovable.app/logo.png",
      "description": "Specialist marketing partner for Paediatric Dentists, building trust-based digital systems for predictable patient acquisition.",
      "founder": {
        "@type": "Person",
        "name": "Lucas Durante"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "url": "https://growth-conduit-central.lovable.app/contact"
      },
      "sameAs": ["https://www.linkedin.com/company/odin-digital", "https://www.facebook.com/odindigital", "https://twitter.com/odindigital"]
    }, {
      "@type": "WebPage",
      "name": "Pediatric Dentists Marketing - Specialist Patient Acquisition",
      "url": "https://growth-conduit-central.lovable.app/industries/pediatric-dentists",
      "inLanguage": "en-AU",
      "description": "Odin Digital is the specialist marketing partner for Paediatric Dentists. We build trust-based digital systems that convert anxious parents into loyal, high-value patients.",
      "about": {
        "@type": "Service",
        "name": "Pediatric Dentists Marketing"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://growth-conduit-central.lovable.app/"
        }, {
          "@type": "ListItem",
          "position": 2,
          "name": "Industries",
          "item": "https://growth-conduit-central.lovable.app/industries"
        }, {
          "@type": "ListItem",
          "position": 3,
          "name": "Pediatric Dentists Marketing"
        }]
      }
    }, {
      "@type": "Service",
      "serviceType": "Pediatric Dentists Marketing",
      "provider": {
        "@type": "Organization",
        "name": "Odin Digital"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services for Pediatric Dentists",
        "itemListElement": [{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trust-Based Web Design & UX"
          }
        }, {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "High-Intent SEO & PPC"
          }
        }, {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Proof & Reputation Management"
          }
        }, {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Patient Retention & Email Marketing"
          }
        }]
      }
    }, {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }, {
      "@type": "Review",
      "itemReviewed": {
        "@type": "Service",
        "name": "Odin Digital - Pediatric Dentists Marketing"
      },
      "author": {
        "@type": "Person",
        "name": "Evan Tsaboukos"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
      "publisher": {
        "@type": "Organization",
        "name": "Imperial Wealth"
      }
    }]
  };
  return <>
      <Helmet>
        <title>Pediatric Dentists Marketing | Specialist Patient Acquisition | Odin Digital</title>
        <meta name="description" content="Attract high-value patients who value your specialty. We build trust-based digital marketing systems for Paediatric Dentists to dominate search and grow predictably." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 pt-24 pb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/industries">Industries</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Pediatric Dentists Marketing</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <ServiceHero h1="Pediatric Dentists Marketing" subheadline="Stop Competing with General Dentists. Start Dominating Your Specialty. We Build Trust-Based Digital Systems That Convert Anxious Parents into Loyal, High-Value Patients, Ensuring Your Practice Thrives for Generations." />

      {/* Social Proof Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">$574M+</div>
              <div className="text-muted-foreground">In Verified Client Revenue</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">540%</div>
              <div className="text-muted-foreground">Average ROI on Ad Spend</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Client Retention Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">283+</div>
              <div className="text-muted-foreground">Successful Campaigns Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Agitation Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The Paediatric Dentist Marketing Challenge</h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            You're not just another dentist. But your marketing doesn't reflect that. Here's what's holding you back.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">The Dual-Audience Dilemma</h3>
                <p className="text-muted-foreground">
                  You need to appeal to both the decision-maker (the parent) AND the patient (the child). Most agencies only know how to market to one audience. Your website and ads end up being too clinical for kids or too childish for parents. You lose both.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">The General Dentist Competition Trap</h3>
                <p className="text-muted-foreground">
                  You invested years in specialised training. But online, you're lumped in with every general dentist who claims to "see kids too." Your Google Ads compete with theirs. Your organic rankings fight theirs. And parents can't tell the difference. You're stuck in a race to the bottom on price.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">The Trust Bottleneck</h3>
                <p className="text-muted-foreground">
                  Parents are protective. They need reassurance before they'll trust you with their child. But your current marketing doesn't build that trust. No testimonials. No video tours. No educational content. Just a generic website that screams "template." The result? High bounce rates and low conversion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Trusted by Australia's Leading Businesses</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Award key={i} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month."
                </p>
                <div className="mt-auto">
                  <div className="font-semibold">Evan Tsaboukos</div>
                  <div className="text-sm text-muted-foreground">Imperial Wealth</div>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Award key={i} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Working with Odin Digital transformed our online presence. Within 6 months, we saw a 285% increase in qualified leads and our cost per acquisition dropped by 42%. They truly understand our market."
                </p>
                <div className="mt-auto">
                  <div className="font-semibold">Fabienne Costa</div>
                  <div className="text-sm text-muted-foreground">YCL Jewels</div>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Award key={i} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The ROI speaks for itself. Odin Digital's strategic approach to PPC and SEO helped us dominate our local market. Our practice revenue increased by 310% in the first year. Highly recommended."
                </p>
                <div className="mt-auto">
                  <div className="font-semibold">Liam C</div>
                  <div className="text-sm text-muted-foreground">Krush Organics</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Paediatric Dentist Marketing Services</h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We don't do generic dental marketing. We build integrated digital systems designed specifically for paediatric dental practices.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Trust-Based Web Design & UX</h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  Conversion-optimised websites that speak to both parents and children. Professional, trustworthy design with child-friendly visual elements. Fast-loading, mobile-responsive, and designed to convert visitors into booked appointments.
                </p>
                <Link to="/web-design-agency">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">High-Intent SEO & PPC</h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  Dominate local search with SEO optimised for paediatric dentist keywords. Precision-targeted Google Ads that capture parents actively searching for a specialist, not just any dentist. Lower cost-per-acquisition and higher conversion rates.
                </p>
                <Link to="/seo-agency">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Social Proof & Reputation Management</h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  Build trust before the first appointment. Strategic review generation, testimonial showcasing, video content featuring happy patients, and reputation management to address negative feedback quickly and professionally.
                </p>
                <Link to="/meta-ads-agency">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Patient Retention & Email Marketing</h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  Maximise patient lifetime value with automated email campaigns. Appointment reminders, educational content for parents, seasonal promotions, and referral programs to turn satisfied parents into your biggest advocates.
                </p>
                <Link to="/email-marketing-agency">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button onClick={openForm} size="lg" className="bg-gradient-primary text-white hover:shadow-glow">
              Schedule Your FREE Paediatric Dentist Marketing Strategy Session →
            </Button>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Paediatric Dentists Choose Odin Digital</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">We Understand the Dual-Audience Funnel</h3>
                <p className="text-muted-foreground">
                  We know you need to speak to both parents and children. Our campaigns are engineered to build parental trust while creating child-friendly experiences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Focus on Specialised Value Proposition</h3>
                <p className="text-muted-foreground">
                  We position you as the specialist authority, not just another dentist. We highlight your unique training, expertise, and child-specific approach.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Transparent ROI Measurement</h3>
                <p className="text-muted-foreground">
                  No vanity metrics. We track cost per acquisition, patient lifetime value, treatment acceptance rates, and overall practice revenue growth.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Integrated Digital Ecosystem</h3>
                <p className="text-muted-foreground">
                  We don't do siloed campaigns. We build cohesive systems where SEO, PPC, web design, and email marketing work together for maximum impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our 4-Step Process for Predictable Patient Growth</h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Clinical & Market Deep Dive</h3>
              <p className="text-muted-foreground">
                We audit your current marketing, analyse your local competition, and identify the unique positioning opportunities that will set you apart.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Build the Trust-Based Digital Foundation</h3>
              <p className="text-muted-foreground">
                We optimise your website for dual-audience conversion, implement review generation systems, and create educational content that positions you as the authority.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Launch Integrated Acquisition Campaigns</h3>
              <p className="text-muted-foreground">
                We deploy precision-targeted SEO, PPC, and Meta Ads campaigns engineered to attract high-intent parents actively seeking a paediatric specialist.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-3">Continuous Optimisation & Scaling</h3>
              <p className="text-muted-foreground">
                We monitor performance, optimise for ROI, and scale what works. You get transparent monthly reports and strategic recommendations for growth.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button onClick={openForm} size="lg" className="bg-gradient-primary text-white hover:shadow-glow">
              Get Your FREE Paediatric Dentist Marketing Audit →
            </Button>
          </div>
        </div>
      </section>

      {/* Extended Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Odin Digital Advantage for Paediatric Dentists</h2>

          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">We Don't Do Generic Dental Marketing</h3>
              <p className="text-muted-foreground text-lg mb-4">
                Most marketing agencies treat all dentists the same. They use the same templates, the same keywords, the same strategies. That might work for general dentists competing on price. But you're not a general dentist. You're a specialist.
              </p>
              <p className="text-muted-foreground text-lg">
                We build marketing systems engineered specifically for paediatric dental practices. We understand the dual-audience challenge. We know how to position you against general dentists. We know how to build trust with protective parents. And we know how to maximise patient lifetime value as children grow with your practice.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">We Focus on ROI, Not Vanity Metrics</h3>
              <p className="text-muted-foreground text-lg mb-4">
                We don't care about "impressions" or "reach." We care about new patient appointments, treatment acceptance rates, patient lifetime value, and overall practice revenue growth. Every dollar you invest should generate measurable returns.
              </p>
              <p className="text-muted-foreground text-lg">
                That's why we track metrics that matter. Cost per acquisition. Conversion rates. Patient retention. Referral generation. ROI. You get transparent, easy-to-understand monthly reports showing exactly how your marketing investment is performing.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">We Build Long-Term Patient Relationships</h3>
              <p className="text-muted-foreground text-lg mb-4">
                Paediatric dentistry is unique. Your patients grow with you. A child who starts at age 3 could be a patient for 15+ years. That's massive lifetime value. But only if you retain them.
              </p>
              <p className="text-muted-foreground text-lg">
                We don't just focus on acquisition. We build retention systems. Email marketing campaigns that educate parents and keep your practice top-of-mind. Automated appointment reminders. Referral programs that turn satisfied parents into advocates. We maximise the lifetime value of every patient.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">We're Strategic Partners, Not Order-Takers</h3>
              <p className="text-muted-foreground text-lg mb-4">
                You don't need another vendor. You need a strategic partner who understands your business, your market, and your goals. Someone who challenges you. Someone who brings fresh ideas. Someone who's invested in your success.
              </p>
              <p className="text-muted-foreground text-lg">
                That's our approach. We're not here to just execute orders. We're here to help you build a thriving, profitable paediatric dental practice. We provide strategic guidance, market insights, and proactive recommendations. You get a dedicated account strategist who knows your business inside and out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Dominate Your Specialty Market?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Stop competing with general dentists. Start attracting high-value patients who understand the difference. Schedule your free strategy session today and discover how we can help your paediatric dental practice thrive.
          </p>
          <Button onClick={openForm} size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 hover:text-primary">
            Schedule Your FREE Strategy Session →
          </Button>
        </div>
      </section>

      {/* Related Service & Industry Links */}
      <section className="py-20 bg-background">
        
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <Button onClick={openForm} size="lg" className="bg-gradient-primary text-white hover:shadow-glow">
              Get Your FREE Paediatric Dentist Marketing Strategy Session →
            </Button>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <Button onClick={openForm} size="lg" className="bg-gradient-primary text-white shadow-lg hover:shadow-glow whitespace-normal break-words">
          Schedule Free Consultation
        </Button>
      </div>

      <Footer />
    </>;
};
export default PediatricDentists;