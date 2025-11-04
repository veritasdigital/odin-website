import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Scale, Shield, TrendingUp, Users, CheckCircle, AlertCircle, Clock, Target } from "lucide-react";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FamilyLawyers = () => {
  const { openForm } = useMarketingForm();

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://odindigital.com.au/#organization",
        name: "Odin Digital",
        url: "https://odindigital.com.au",
        logo: {
          "@type": "ImageObject",
          url: "https://odindigital.com.au/odin-logo.png"
        },
        sameAs: [
          "https://www.facebook.com/odindigital",
          "https://www.linkedin.com/company/odindigital",
          "https://www.instagram.com/odindigital"
        ]
      },
      {
        "@type": "LegalService",
        "@id": "https://odindigital.com.au/industries/family-lawyers#legalservice",
        name: "Odin Digital - Digital Marketing for Family Lawyers",
        description: "Attract high-net-worth, complex family law cases with a predictable, ethical digital strategy. We specialize in SEO, PPC, and web design built for discretion and high-stakes law.",
        url: "https://odindigital.com.au/industries/family-lawyers",
        telephone: "+61-XXX-XXX-XXX",
        address: {
          "@type": "PostalAddress",
          addressCountry: "AU"
        },
        areaServed: {
          "@type": "Country",
          name: "Australia"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127"
        }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/family-lawyers#service",
        name: "Digital Marketing Services for Family Lawyers",
        provider: {
          "@id": "https://odindigital.com.au/#organization"
        },
        serviceType: "Digital Marketing for Family Law Firms",
        description: "Comprehensive digital marketing services including SEO, PPC, Meta Ads, and web design specifically for family law practices.",
        areaServed: {
          "@type": "Country",
          name: "Australia"
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How quickly can I expect to see high-value leads?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "With highly targeted PPC campaigns focused on high-net-worth keywords, we can typically start generating qualified, pre-filtered leads within 48-72 hours of campaign launch. SEO is a longer-term strategy, with significant authority and organic lead generation usually appearing within 6-12 months."
            }
          },
          {
            "@type": "Question",
            name: "Is SEO or PPC better for a family law firm?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Both are essential. PPC is critical for immediate lead generation and targeting high-value, urgent cases. SEO is vital for long-term authority, trust-building, and dominating local search results for 'divorce lawyer near me' searches. We recommend an integrated strategy using both for maximum impact."
            }
          },
          {
            "@type": "Question",
            name: "How do you ensure our marketing is compliant with legal ethics and advertising guidelines?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We adhere strictly to all Australian legal and ethical advertising guidelines. Our copy is written by direct-response experts who understand the need for compliance-first messaging, focusing on your firm's expertise, process, and consultation, never making guarantees or promises of specific outcomes."
            }
          },
          {
            "@type": "Question",
            name: "How do you filter out low-quality leads?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We implement a multi-layered filtering system. This includes: 1) Using high-cost, high-intent keywords in PPC; 2) Implementing detailed, mandatory pre-qualification forms on landing pages; and 3) Using advanced call tracking to identify and score lead quality before they reach your legal team."
            }
          },
          {
            "@type": "Question",
            name: "Why is our website design so critical in family law?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In family law, the client is often in a state of high anxiety. Your website must immediately convey trust, professionalism, and discretion. Our designs focus on clear navigation, prominent confidentiality statements, and a calm aesthetic to reduce anxiety and guide the client directly to a secure consultation booking."
            }
          },
          {
            "@type": "Question",
            name: "How do you handle reputation management and negative online reviews?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We implement automated review generation systems that encourage happy clients to leave positive feedback. For negative reviews, we provide a structured, ethical response strategy that minimizes damage and showcases your firm's professionalism and willingness to address concerns."
            }
          },
          {
            "@type": "Question",
            name: "How do you attract high-net-worth clients specifically?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We target them through: 1) PPC using keywords specific to complex financial matters and high-net-worth divorce; 2) SEO by creating authoritative content on complex property division and international family law; and 3) Web Design that reflects the sophistication and discretion required by this clientele."
            }
          },
          {
            "@type": "Question",
            name: "What is the biggest mistake family law firms make in marketing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The biggest mistake is using generic marketing that treats a family law client like a retail customer. This fails to address the emotional stakes and the need for discretion, resulting in low conversion rates and a high volume of non-qualified, low-value leads."
            }
          },
          {
            "@type": "Question",
            name: "Can you help us market specific services like child custody or property division?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We segment your marketing efforts to target clients interested in specific high-value services using dedicated landing pages, ad copy, and content strategies that establish your firm as the expert in that specific area of law."
            }
          },
          {
            "@type": "Question",
            name: "Do you require a long-term contract?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. We operate on a month-to-month basis with no lock-in contracts. Our performance should be the only reason you stay with us. We earn your business every month."
            }
          },
          {
            "@type": "Question",
            name: "How do you ensure discretion and confidentiality in your digital campaigns?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our campaigns are designed to attract, not expose. We avoid using intrusive or overly personal ad creative. Our web design emphasizes secure communication, and all data is handled with the utmost care, reflecting the high standards of confidentiality required in family law."
            }
          },
          {
            "@type": "Question",
            name: "What is the role of social media in marketing a family law firm?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Social media is used primarily for authority and reputation building, not direct lead generation. We promote thought leadership, community involvement, and positive, anonymised client outcomes to reinforce your firm's professional image and build trust over time."
            }
          },
          {
            "@type": "Question",
            name: "How do you measure success in such a competitive market?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We focus on Cost Per Qualified Lead (CPQL) and Average Case Value, not just clicks or impressions. Success is measured by the number of high-value, profitable cases that enter your firm, ensuring a strong, measurable return on your marketing investment."
            }
          },
          {
            "@type": "Question",
            name: "We have a strong referral network. Why do we need digital marketing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A strong digital presence acts as a powerful multiplier for your referral network. It ensures that when a potential client receives a referral, the first thing they see—your website and online reputation—immediately reinforces the referral and converts the lead into a paying client."
            }
          },
          {
            "@type": "Question",
            name: "How do we get started with Odin Digital?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The first step is a free, no-obligation High-Value Case Acquisition Analysis. We'll audit your current lead flow and provide a clear, strategic roadmap for attracting more complex, profitable family law cases."
            }
          }
        ]
      }
    ]
  };

  const stats = [
    { value: "$574M+", label: "Verified Client Revenue" },
    { value: "540%", label: "Average ROI on Ad Spend" },
    { value: "95%", label: "Client Retention Rate" },
    { value: "283+", label: "Successful Campaigns" }
  ];

  const painPoints = [
    {
      icon: AlertCircle,
      title: "The Lead Qualification Nightmare",
      description: "Your team is constantly fielding non-qualified calls from individuals who cannot afford your services or whose cases are outside your scope. This wastes valuable lawyer time and drains firm resources."
    },
    {
      icon: Shield,
      title: "High Emotional Stakes & Client Anxiety",
      description: "Family law clients are vulnerable and seeking discretion and trust. Generic, aggressive marketing fails to build the necessary immediate rapport, causing high-value clients to choose a competitor who appears more professional and empathetic."
    },
    {
      icon: TrendingUp,
      title: "Wasting Budget on High CPC",
      description: "The legal industry has some of the highest Cost-Per-Click (CPC) rates in the world. You're throwing thousands at untargeted PPC campaigns that are generating clicks from researchers, not clients ready to retain your firm."
    }
  ];

  const services = [
    {
      icon: Target,
      title: "Discreet, Authority-Building SEO",
      description: "In family law, trust is the ultimate ranking factor. Our SEO strategy focuses on building your firm's digital authority through high-quality, compliant content that addresses complex legal issues (e.g., property settlement, complex custody). We ensure your firm dominates local search results for high-intent terms like 'divorce lawyer near me' while maintaining a tone of professionalism and discretion."
    },
    {
      icon: TrendingUp,
      title: "Precision-Targeted, High-Value PPC",
      description: "We bypass the expensive, low-intent keywords and focus your budget exclusively on searches that signal a client is ready to hire for a high-fee case. This includes targeted Google Ads for terms like 'high-net-worth divorce lawyer' or 'complex property settlement solicitor.' We use aggressive negative keyword lists to eliminate wasted spend on low-value searches."
    },
    {
      icon: Users,
      title: "Trust-Building & Reputation Management with Meta Ads",
      description: "Social media is not for lead generation in family law; it's for reputation management and trust-building. Our Meta Ads strategy focuses on promoting your firm's expertise, community involvement, and positive, anonymised case studies. We use retargeting to keep your firm top-of-mind for potential clients who have already visited your site but need time to make a sensitive decision."
    },
    {
      icon: Scale,
      title: "Anxiety-Reducing, Conversion-Focused Web Design",
      description: "A family law website must be a sanctuary of professionalism and clarity. We build websites that are lightning-fast, mobile-responsive, and feature clear, prominent calls-to-action for a confidential consultation. The design is engineered to reduce client anxiety, establish immediate credibility, and guide high-intent users directly to a pre-qualification form that filters for high-value cases."
    }
  ];

  const differentiators = [
    {
      icon: CheckCircle,
      title: "High-Value Case Filtering",
      description: "We implement advanced lead funnels and pre-qualification forms that filter for high-net-worth and complex cases before they reach your lawyers, ensuring your team only spends time on profitable leads."
    },
    {
      icon: Shield,
      title: "Compliance-First Copywriting",
      description: "Our direct-response copy is written to be persuasive and compliant with legal advertising standards, focusing on expertise and process, never guaranteeing outcomes."
    },
    {
      icon: TrendingUp,
      title: "Reputation & Trust Domination",
      description: "We implement automated systems to generate positive reviews and strategically manage your online reputation, essential for converting clients in a high-trust field."
    },
    {
      icon: Clock,
      title: "No Lock-In Contracts",
      description: "We believe our results should keep you with us, not a binding contract. Our 95% client retention rate proves our commitment to long-term, high-value partnerships."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Practice Audit & High-Value Client Blueprint",
      description: "We conduct a comprehensive audit of your current digital footprint, local competitors, and target client demographics (e.g., high-net-worth individuals, complex property matters). We then create a detailed digital marketing blueprint tailored to attract your most profitable cases."
    },
    {
      number: "02",
      title: "Foundation & Execution",
      description: "We optimize your website for speed, discretion, and conversion. We then launch highly targeted campaigns across SEO and PPC, focusing on immediate lead generation from high-intent, high-value keywords."
    },
    {
      number: "03",
      title: "Refinement & Reporting",
      description: "We continuously monitor, test, and refine all campaigns, focusing on the metrics that matter most to your firm: Cost Per Qualified Lead (CPQL) and Average Case Value. We provide transparent, jargon-free reports that show exactly where your most profitable clients are coming from."
    },
    {
      number: "04",
      title: "Scaling & Authority Building",
      description: "Once we establish a profitable and predictable system for high-value client acquisition, we implement advanced content strategies to build your firm's national authority, allowing you to scale into new practice areas or geographic markets sustainably."
    }
  ];

  const benefits = [
    {
      title: "Legal & Professional Expertise",
      description: "We don't just do generic marketing; we understand the high-stakes nature of family law, the need for discretion, and the critical importance of ethical, compliant advertising."
    },
    {
      title: "Cutting-Edge Technology",
      description: "We leverage the latest in marketing technology and AI-powered optimization to ensure your campaigns are efficient, targeted, and ahead of the curve. This includes using AI tools for ad bidding, lead qualification, and predictive analytics to anticipate demand spikes for specific case types."
    },
    {
      title: "Direct Response Copywriting",
      description: "Our team writes copy that compels immediate, professional action, using a problem-agitation-solution framework that speaks directly to the client's need for a trusted, expert resolution to their complex matter."
    },
    {
      title: "Proven Track Record",
      description: "With over $574M+ in verified client revenue and a 95% retention rate, we have the experience and results to back up our claims in the most competitive legal markets."
    }
  ];

  const faqs = [
    {
      question: "How quickly can I expect to see high-value leads?",
      answer: "With highly targeted PPC campaigns focused on high-net-worth keywords, we can typically start generating qualified, pre-filtered leads within 48-72 hours of campaign launch. SEO is a longer-term strategy, with significant authority and organic lead generation usually appearing within 6-12 months."
    },
    {
      question: "Is SEO or PPC better for a family law firm?",
      answer: "Both are essential. PPC is critical for immediate lead generation and targeting high-value, urgent cases. SEO is vital for long-term authority, trust-building, and dominating local search results for 'divorce lawyer near me' searches. We recommend an integrated strategy using both for maximum impact."
    },
    {
      question: "How do you ensure our marketing is compliant with legal ethics and advertising guidelines?",
      answer: "We adhere strictly to all Australian legal and ethical advertising guidelines. Our copy is written by direct-response experts who understand the need for compliance-first messaging, focusing on your firm's expertise, process, and consultation, never making guarantees or promises of specific outcomes."
    },
    {
      question: "How do you filter out low-quality leads?",
      answer: "We implement a multi-layered filtering system. This includes: 1) Using high-cost, high-intent keywords in PPC; 2) Implementing detailed, mandatory pre-qualification forms on landing pages; and 3) Using advanced call tracking to identify and score lead quality before they reach your legal team."
    },
    {
      question: "Why is our website design so critical in family law?",
      answer: "In family law, the client is often in a state of high anxiety. Your website must immediately convey trust, professionalism, and discretion. Our designs focus on clear navigation, prominent confidentiality statements, and a calm aesthetic to reduce anxiety and guide the client directly to a secure consultation booking."
    },
    {
      question: "How do you handle reputation management and negative online reviews?",
      answer: "We implement automated review generation systems that encourage happy clients to leave positive feedback. For negative reviews, we provide a structured, ethical response strategy that minimizes damage and showcases your firm's professionalism and willingness to address concerns."
    },
    {
      question: "How do you attract high-net-worth clients specifically?",
      answer: "We target them through: 1) PPC using keywords specific to complex financial matters and high-net-worth divorce; 2) SEO by creating authoritative content on complex property division and international family law; and 3) Web Design that reflects the sophistication and discretion required by this clientele."
    },
    {
      question: "What is the biggest mistake family law firms make in marketing?",
      answer: "The biggest mistake is using generic marketing that treats a family law client like a retail customer. This fails to address the emotional stakes and the need for discretion, resulting in low conversion rates and a high volume of non-qualified, low-value leads."
    },
    {
      question: "Can you help us market specific services like child custody or property division?",
      answer: "Yes. We segment your marketing efforts to target clients interested in specific high-value services using dedicated landing pages, ad copy, and content strategies that establish your firm as the expert in that specific area of law."
    },
    {
      question: "Do you require a long-term contract?",
      answer: "No. We operate on a month-to-month basis with no lock-in contracts. Our performance should be the only reason you stay with us. We earn your business every month."
    },
    {
      question: "How do you ensure discretion and confidentiality in your digital campaigns?",
      answer: "Our campaigns are designed to attract, not expose. We avoid using intrusive or overly personal ad creative. Our web design emphasizes secure communication, and all data is handled with the utmost care, reflecting the high standards of confidentiality required in family law."
    },
    {
      question: "What is the role of social media in marketing a family law firm?",
      answer: "Social media is used primarily for authority and reputation building, not direct lead generation. We promote thought leadership, community involvement, and positive, anonymised client outcomes to reinforce your firm's professional image and build trust over time."
    },
    {
      question: "How do you measure success in such a competitive market?",
      answer: "We focus on Cost Per Qualified Lead (CPQL) and Average Case Value, not just clicks or impressions. Success is measured by the number of high-value, profitable cases that enter your firm, ensuring a strong, measurable return on your marketing investment."
    },
    {
      question: "We have a strong referral network. Why do we need digital marketing?",
      answer: "A strong digital presence acts as a powerful multiplier for your referral network. It ensures that when a potential client receives a referral, the first thing they see—your website and online reputation—immediately reinforces the referral and converts the lead into a paying client."
    },
    {
      question: "How do we get started with Odin Digital?",
      answer: "The first step is a free, no-obligation High-Value Case Acquisition Analysis. We'll audit your current lead flow and provide a clear, strategic roadmap for attracting more complex, profitable family law cases."
    }
  ];

  const testimonials = [
    {
      quote: "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
      author: "Fabienne Costa",
      position: "Founder, YCL Jewels",
      location: "Gold Coast"
    },
    {
      quote: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
      author: "Liam C",
      position: "Founder, Krush Organics",
      location: "Sydney"
    },
    {
      quote: "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
      author: "Evan Tsaboukos",
      position: "Founder, Imperial Wealth",
      location: "Melbourne"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Marketing for Family Lawyers | Attract High-Value Cases & Protect Reputation - Odin Digital</title>
        <meta name="description" content="Attract high-net-worth, complex family law cases with a predictable, ethical digital strategy. We specialize in SEO, PPC, and web design built for discretion and high-stakes law." />
        <meta name="keywords" content="digital marketing for family lawyers, family law marketing, divorce lawyer marketing, legal marketing agency" />
        <link rel="canonical" href="https://odindigital.com.au/industries/family-lawyers" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Header />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border shadow-lg">
        <Button 
          variant="cta" 
          size="lg" 
          className="w-full rounded-none h-auto py-3 text-xs sm:text-sm whitespace-normal"
          onClick={openForm}
        >
          Schedule Your FREE High-Value Case Acquisition Analysis →
        </Button>
      </div>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section data-nav-contrast="dark" className="gradient-hero relative overflow-hidden min-h-[90vh] flex items-center">
          {/* Floating Background Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/3 left-1/2 w-12 h-12 bg-white/5 rounded-full animate-float" style={{ animationDelay: '4s' }} />

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight mt-16 sm:mt-20">
                Digital Marketing for Family Lawyers
              </h1>
              
              <p className="hero-sub-headline text-2xl sm:text-3xl md:text-4xl font-bold text-white/95 mb-8 leading-tight max-w-5xl mx-auto">
                Stop Wasting Budget on Low-Value Leads. Attract High-Net-Worth, Complex Family Law Cases with a Predictable, Ethical Digital Strategy.
              </p>

              <div className="prose prose-lg max-w-4xl mx-auto mb-8">
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                  In family law, every case is high-stakes. Your marketing must reflect the gravity, discretion, and professionalism your clients demand. We build digital ecosystems that filter out the noise and deliver high-value, pre-qualified clients ready to engage your firm.
                </p>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                  At Odin Digital, we understand the unique challenges of family law—from the extreme emotional weight of divorce and custody battles to the ethical constraints of legal advertising. Generic marketing agencies fail because they don't understand the difference between a high-net-worth property settlement and a simple consultation. Our integrated strategy—combining Discreet SEO, High-Value PPC, Trust-Building Meta Ads, and Anxiety-Reducing Web Design—is engineered to attract the most complex and profitable cases, ensuring your firm's reputation and bottom line are protected.
                </p>
              </div>

              <Button 
                variant="cta" 
                size="xl" 
                className="text-base sm:text-lg px-6 sm:px-8 h-auto py-3 sm:py-4 whitespace-normal"
                onClick={openForm}
              >
                Schedule Your FREE High-Value Case Acquisition Analysis <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">The Proof Is in the Performance</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We partner with high-calibre professional service firms and legal practices to deliver measurable, high-ROI growth. Our results speak for themselves.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center hover-scale">
                  <div className="text-3xl md:text-4xl font-black bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">The Family Law Marketing Pain Points We Solve</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Your focus should be on achieving the best outcomes for your clients. We remove the stress of unpredictable, low-quality lead generation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {painPoints.map((point, index) => (
                <Card key={index} className="p-8 hover-scale">
                  <point.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">What Our Professional Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our clients are high-performing professionals who demand results and discretion. Here's what they're saying about our partnership.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 hover-scale">
                  <p className="text-lg mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">The Integrated Digital Strategy for High-Value Family Law Cases</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We provide a single, cohesive strategy where every channel works to attract, filter, and convert high-net-worth clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {services.map((service, index) => (
                <Card key={index} className="p-8 hover-scale">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="cta" 
                size="xl" 
                className="text-base sm:text-lg px-6 sm:px-8 h-auto py-3 sm:py-4 whitespace-normal"
                onClick={openForm}
              >
                Schedule Your FREE High-Value Case Acquisition Analysis <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Why Odin Digital is the Strategic Partner for Your Family Law Firm</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We understand the unique regulatory, ethical, and emotional landscape of family law. Our systems are built for discretion and high-value conversion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {differentiators.map((item, index) => (
                <Card key={index} className="p-8 hover-scale">
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Our 4-Step Predictable Client Acquisition Process</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We follow a strategic process designed to deliver a steady, high-quality stream of complex family law cases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="p-8 hover-scale">
                  <div className="text-5xl font-black text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Why Choose Odin Digital as Your Family Law Marketing Partner?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We are obsessed with your firm's growth and reputation. Our focus is on turning your digital presence into a predictable source of high-value cases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-8 hover-scale">
                  <CheckCircle className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section data-nav-contrast="dark" className="py-24 gradient-hero relative overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{ animationDelay: '3s' }} />
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              Ready to Build a Predictable High-Value Client Acquisition System?
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed">
              Stop relying on referrals alone and start attracting complex, high-net-worth cases with a strategic digital blueprint built for the modern legal landscape.
            </p>

            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              Schedule your free, no-obligation High-Value Case Acquisition Analysis today. We'll show you the exact roadmap to dominate your local market and maximize your firm's profitability.
            </p>

            <Button 
              variant="cta" 
              size="xl" 
              className="text-base sm:text-lg px-6 sm:px-8 h-auto py-3 sm:py-4 whitespace-normal"
              onClick={openForm}
            >
              Schedule Your FREE High-Value Case Acquisition Analysis <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Frequently Asked Questions About Marketing for Family Lawyers</h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-12">
              <Button 
                variant="cta" 
                size="xl" 
                className="text-base sm:text-lg px-6 sm:px-8 h-auto py-3 sm:py-4 whitespace-normal"
                onClick={openForm}
              >
                Schedule Your FREE High-Value Case Acquisition Analysis <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FamilyLawyers;
