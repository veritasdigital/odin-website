import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";
import { 
  Target, 
  TrendingUp, 
  Shield, 
  Zap,
  Search,
  MousePointerClick,
  Globe,
  BarChart3,
  Users,
  Award,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const OnlineMarketingCompanyDarwin = () => {
  const navigate = useNavigate();

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://odindigital.com.au/#organization",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au",
        "logo": {
          "@type": "ImageObject",
          "url": "https://odindigital.com.au/odin-logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "areaServed": "AU",
          "availableLanguage": "English"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://odindigital.com.au/online-marketing-company-darwin#localbusiness",
        "name": "Odin Digital - Online Marketing Company Darwin",
        "image": "https://odindigital.com.au/odin-logo.png",
        "url": "https://odindigital.com.au/online-marketing-company-darwin",
        "telephone": "+61-XXX-XXX-XXX",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "",
          "addressLocality": "Darwin",
          "addressRegion": "NT",
          "postalCode": "0800",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -12.4634,
          "longitude": 130.8456
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "17:00"
        },
        "sameAs": [
          "https://www.facebook.com/odindigital",
          "https://www.linkedin.com/company/odindigital"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/online-marketing-company-darwin#service",
        "serviceType": "Digital Marketing Services in Darwin",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Darwin",
          "containedIn": {
            "@type": "State",
            "name": "Northern Territory"
          }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local SEO & Content Strategy"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Precision-Targeted PPC & Meta Ads"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Conversion-Focused Web Design"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Strategic CRO & Analytics"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://odindigital.com.au/online-marketing-company-darwin#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is an integrated strategy important for Darwin businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In a smaller, unique market like Darwin, every marketing channel must work together to maximize impact. An integrated strategy ensures your SEO, PPC, and website are all aligned, eliminating wasted effort and delivering a cohesive brand message to the local consumer."
            }
          },
          {
            "@type": "Question",
            "name": "How do you account for the Wet and Dry Seasons in your marketing strategy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We implement a dynamic seasonal strategy. We build flexible campaigns that allow us to shift budget and creative to capitalize on peak demand during the Dry Season (e.g., tourism, events) and maintain cost-effective brand awareness during the quieter Wet Season."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure my marketing budget isn't wasted on tourists?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use advanced geo-fencing, audience exclusion, and hyper-local targeting techniques across all paid channels (PPC, Meta Ads) to focus exclusively on genuine Darwin residents and long-term customers, protecting your budget from transient traffic."
            }
          },
          {
            "@type": "Question",
            "name": "What services do you offer as a full-service online marketing company?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer a complete suite of services, including Local SEO, Content Marketing, Google Ads (PPC), Meta Ads (Facebook/Instagram), Conversion-Focused Web Design, and Advanced Analytics/CRO."
            }
          },
          {
            "@type": "Question",
            "name": "How do you measure the success of your campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We focus on the bottom line. Our reports track Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), and verified client revenue. We ensure every dollar spent is tied to a measurable, profitable outcome for your Darwin business."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I choose Odin Digital over a local Darwin agency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer the best of both worlds: the national-level expertise, technology, and proven systems of a large agency, combined with a deep, local understanding of the Darwin market that smaller local firms often lack."
            }
          },
          {
            "@type": "Question",
            "name": "Do you require a long-term contract?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. We operate on a month-to-month basis with no lock-in contracts. Our performance should be the only reason you stay with us."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help me with my website if it's outdated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in building high-performance, conversion-focused websites that serve as the foundation for all your digital marketing efforts. We can redesign your site to meet modern speed and SEO standards."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from a full-service strategy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While PPC and Meta Ads can generate leads within days, a full-service strategy (including SEO and content) typically shows significant, sustainable growth within 3 to 6 months."
            }
          },
          {
            "@type": "Question",
            "name": "What industries do you specialize in within Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We have extensive experience in high-growth Darwin sectors, including tourism, hospitality, local services (trades, medical), and professional services."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure your content resonates with the 'Territorian' mindset?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our copywriters and strategists are trained to incorporate local language, themes, and imagery that are familiar and relevant to the Northern Territory culture, building instant rapport and trust with the local audience."
            }
          },
          {
            "@type": "Question",
            "name": "What is the typical budget for a full-service online marketing strategy in Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The budget is customized based on your business goals and competitive landscape. We work with you to determine a profitable budget that targets a positive ROI."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manage social media posting and engagement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We focus on paid social media advertising (Meta Ads) for direct response and lead generation. We can integrate with your team for organic posting, but our core focus is on profitable advertising campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "How do we get started with Odin Digital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The first step is a free, no-obligation Darwin Digital Strategy Session. We'll audit your current performance and provide a clear roadmap for attracting more high-value, local customers."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help my business compete with large national chains operating in Darwin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We use hyper-local SEO and precision targeting to ensure you dominate the local search results and paid advertising spaces where large national chains often use generic, less effective strategies."
            }
          }
        ]
      }
    ]
  };

  const stats = [
    { label: "Verified Client Revenue", value: "$574M+" },
    { label: "Average ROI on Ad Spend", value: "540%" },
    { label: "Client Retention Rate", value: "95%" },
    { label: "Successful Campaigns Delivered", value: "283+" }
  ];

  const painPoints = [
    {
      icon: Target,
      title: "Fragmented Marketing & Disjointed Strategy",
      description: "You're using three different providers for SEO, PPC, and Web Design. This leads to a disjointed brand message, wasted time coordinating, and campaigns that work against each other."
    },
    {
      icon: Globe,
      title: "Lack of Local Market Understanding",
      description: "Agencies from outside the NT fail to grasp Darwin's unique seasonal economy, the importance of local events, and the specific consumer behaviour of Territorians, leading to wasted ad spend and irrelevant content."
    },
    {
      icon: BarChart3,
      title: "The 'Black Box' of Reporting",
      description: "You receive complex, confusing reports full of vanity metrics (likes, impressions) that don't translate into actual business growth. You need clear, transparent reporting focused on profit and ROI."
    }
  ];

  const services = [
    {
      icon: Search,
      title: "Local SEO & Content Strategy",
      description: "We ensure your business dominates local search results for high-intent keywords. Our strategy focuses on local link building, Google My Business optimization, and content that speaks directly to the needs of the Darwin consumer, driving organic, high-quality traffic."
    },
    {
      icon: MousePointerClick,
      title: "Precision-Targeted PPC & Meta Ads",
      description: "We manage Google Ads and Meta Ads (Facebook/Instagram) with a focus on hyper-local targeting and seasonal budget allocation. We eliminate wasted spend on tourists and focus on delivering the lowest possible Cost Per Acquisition (CPA) for genuine Territorian customers."
    },
    {
      icon: Globe,
      title: "Conversion-Focused Web Design",
      description: "Your website is the foundation. We design and build lightning-fast, mobile-first websites that are engineered for conversion. Every site is launched with full technical SEO and a clear user journey to turn visitors into leads and sales."
    },
    {
      icon: TrendingUp,
      title: "Strategic CRO & Analytics",
      description: "We continuously optimize your website and campaigns to maximize your conversion rate. Our focus on advanced analytics ensures we track every dollar spent, providing transparent reports that prove your Return on Investment (ROI)."
    }
  ];

  const whyChoose = [
    {
      icon: Target,
      title: "Local Market Insight",
      description: "We understand the unique challenges of the Darwin market, from the seasonal economy to the importance of local community trust. Our strategies are built on this local knowledge."
    },
    {
      icon: Zap,
      title: "Integrated Strategy",
      description: "We eliminate the fragmentation problem. All your digital channels work together, ensuring a cohesive brand message and maximum efficiency across SEO, PPC, and Web Design."
    },
    {
      icon: BarChart3,
      title: "Transparent ROI Reporting",
      description: "We cut through the vanity metrics. Our reports focus on the bottom line: Cost Per Acquisition (CPA) and Return on Ad Spend (ROAS), so you always know your marketing is profitable."
    },
    {
      icon: Shield,
      title: "No Lock-In Contracts",
      description: "We believe our results should keep you with us, not a binding contract. Our 95% client retention rate proves our commitment to long-term, high-value partnerships."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Comprehensive Darwin Market Audit",
      description: "We conduct a deep dive into your current digital performance, local competitors, and target customer journey. We then create a detailed, integrated strategy blueprint tailored to your specific business and the Darwin market."
    },
    {
      number: "2",
      title: "Foundation Build & Optimization",
      description: "We ensure your website is a high-performance, conversion-focused asset. We implement all technical SEO, tracking, and analytics foundations necessary for measurable success."
    },
    {
      number: "3",
      title: "Integrated Campaign Launch",
      description: "We launch cohesive campaigns across all agreed-upon channels (SEO, PPC, Meta Ads). All channels are managed by a single team, ensuring perfect alignment and budget efficiency."
    },
    {
      number: "4",
      title: "Continuous Optimization & Scaling",
      description: "We continuously monitor, test, and refine all campaigns, dynamically shifting budget and strategy based on performance data and seasonal changes. We focus on scaling your success for maximum profitability."
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "National Expertise, Local Focus",
      description: "You get the best of both worlds: the cutting-edge strategies of a national agency applied with the nuanced understanding of the Darwin market."
    },
    {
      icon: Target,
      title: "Direct Response Focus",
      description: "Our entire approach is built on direct response principles. We don't do 'brand awareness' for the sake of it; we focus on actions that generate immediate leads and sales."
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "With over $574M+ in verified client revenue and a 95% retention rate, we have the experience and results to back up our claims in the most competitive markets."
    },
    {
      icon: Users,
      title: "Full-Service Team",
      description: "Gain instant access to a full team of specialists—SEO experts, PPC managers, copywriters, and web developers—for less than the cost of a single in-house hire."
    }
  ];

  const faqs = [
    {
      question: "Why is an integrated strategy important for Darwin businesses?",
      answer: "In a smaller, unique market like Darwin, every marketing channel must work together to maximize impact. An integrated strategy ensures your SEO, PPC, and website are all aligned, eliminating wasted effort and delivering a cohesive brand message to the local consumer."
    },
    {
      question: "How do you account for the Wet and Dry Seasons in your marketing strategy?",
      answer: "We implement a dynamic seasonal strategy. We build flexible campaigns that allow us to shift budget and creative to capitalize on peak demand during the Dry Season (e.g., tourism, events) and maintain cost-effective brand awareness during the quieter Wet Season."
    },
    {
      question: "How do you ensure my marketing budget isn't wasted on tourists?",
      answer: "We use advanced geo-fencing, audience exclusion, and hyper-local targeting techniques across all paid channels (PPC, Meta Ads) to focus exclusively on genuine Darwin residents and long-term customers, protecting your budget from transient traffic."
    },
    {
      question: "What services do you offer as a full-service online marketing company?",
      answer: "We offer a complete suite of services, including Local SEO, Content Marketing, Google Ads (PPC), Meta Ads (Facebook/Instagram), Conversion-Focused Web Design, and Advanced Analytics/CRO."
    },
    {
      question: "How do you measure the success of your campaigns?",
      answer: "We focus on the bottom line. Our reports track Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), and verified client revenue. We ensure every dollar spent is tied to a measurable, profitable outcome for your Darwin business."
    },
    {
      question: "Why should I choose Odin Digital over a local Darwin agency?",
      answer: "We offer the best of both worlds: the national-level expertise, technology, and proven systems of a large agency, combined with a deep, local understanding of the Darwin market that smaller local firms often lack."
    },
    {
      question: "Do you require a long-term contract?",
      answer: "No. We operate on a month-to-month basis with no lock-in contracts. Our performance should be the only reason you stay with us."
    },
    {
      question: "Can you help me with my website if it's outdated?",
      answer: "Yes. We specialize in building high-performance, conversion-focused websites that serve as the foundation for all your digital marketing efforts. We can redesign your site to meet modern speed and SEO standards."
    },
    {
      question: "How long does it take to see results from a full-service strategy?",
      answer: "While PPC and Meta Ads can generate leads within days, a full-service strategy (including SEO and content) typically shows significant, sustainable growth within 3 to 6 months."
    },
    {
      question: "What industries do you specialize in within Darwin?",
      answer: "We have extensive experience in high-growth Darwin sectors, including tourism, hospitality, local services (trades, medical), and professional services."
    },
    {
      question: "How do you ensure your content resonates with the 'Territorian' mindset?",
      answer: "Our copywriters and strategists are trained to incorporate local language, themes, and imagery that are familiar and relevant to the Northern Territory culture, building instant rapport and trust with the local audience."
    },
    {
      question: "What is the typical budget for a full-service online marketing strategy in Darwin?",
      answer: "The budget is customized based on your business goals and competitive landscape. We work with you to determine a profitable budget that targets a positive ROI."
    },
    {
      question: "Do you manage social media posting and engagement?",
      answer: "We focus on paid social media advertising (Meta Ads) for direct response and lead generation. We can integrate with your team for organic posting, but our core focus is on profitable advertising campaigns."
    },
    {
      question: "How do we get started with Odin Digital?",
      answer: "The first step is a free, no-obligation Darwin Digital Strategy Session. We'll audit your current performance and provide a clear roadmap for attracting more high-value, local customers."
    },
    {
      question: "Can you help my business compete with large national chains operating in Darwin?",
      answer: "Absolutely. We use hyper-local SEO and precision targeting to ensure you dominate the local search results and paid advertising spaces where large national chains often use generic, less effective strategies."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Online Marketing Company Darwin | Full-Service Digital Agency - Odin Digital</title>
        <meta name="description" content="The leading Online Marketing Company in Darwin. We provide integrated SEO, PPC, and Web Design strategies tailored to the unique Northern Territory market for predictable growth." />
        <link rel="canonical" href="https://odindigital.com.au/online-marketing-company-darwin" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />
      <SideTab />

      {/* Breadcrumb Navigation */}
      <section className="pt-24 pb-4 bg-background">
        <div className="container mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>/</span>
            <a href="/darwin" className="hover:text-primary transition-colors">Darwin</a>
            <span>/</span>
            <span className="text-foreground">Online Marketing Company Darwin</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <ServiceHero
        h1="Online Marketing Company Darwin"
        subheadline="Stop Fragmenting Your Marketing. Get a Cohesive, Darwin-Centric Digital Strategy Engineered for Predictable Growth in the Northern Territory."
      />

      {/* Introduction */}
      <section className="py-16 px-4 relative overflow-hidden bg-gradient-to-br from-white via-muted/10 to-background">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in">
            <p>
              Darwin is a market of extremes: seasonal shifts, unique demographics, and a high value on local trust. A generic marketing strategy will fail. We are the full-service online marketing company that understands the Territory, delivering integrated SEO, PPC, and Web Design solutions that drive real, measurable growth.
            </p>
            <p>
              At Odin Digital, we know that local Darwin businesses are often forced to choose between an impersonal, expensive mainland agency or a small, limited local provider. We offer the best of both: the national-level expertise and technology of a large firm, combined with a deep, local understanding of the Darwin market, from the seasonal economy to the Territorian consumer. We don't just run campaigns; we build a predictable, integrated system for customer acquisition that turns your marketing budget into a reliable source of revenue.
            </p>
          </div>
          
          <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-gradient-primary text-white shadow-primary hover:shadow-glow transition-all duration-300"
            >
              Schedule Your FREE Darwin Digital Strategy Session <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary/10 rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-accent/10 rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Proof Is in the Performance
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We partner with high-calibre businesses across Australia, including those in unique, local markets like Darwin, to deliver measurable, high-ROI growth.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-glow transition-all duration-300 animate-fade-in border-primary/10 bg-white/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
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
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Darwin Digital Marketing Pain Points We Solve
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Darwin businesses face unique challenges when seeking a full-service marketing partner. We solve the core problems that prevent your business from achieving predictable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 hover:shadow-glow transition-all duration-300 animate-fade-in border-primary/10 bg-white/80 backdrop-blur-sm relative overflow-hidden group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-300" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-4 shadow-primary">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-muted/20 via-background to-muted/10 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Professional Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We partner with high-performing professionals who demand results and discretion. Here's what they're saying about our partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-glow transition-all duration-300 animate-fade-in border-primary/10 bg-white/90 backdrop-blur-sm">
              <div className="flex flex-col h-full">
                <p className="text-muted-foreground italic mb-6 flex-grow">
                  "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with."
                </p>
                <div className="mt-auto">
                  <p className="font-bold text-foreground">Fabienne Costa</p>
                  <p className="text-sm text-muted-foreground">Founder, YCL Jewels (Gold Coast)</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-glow transition-all duration-300 animate-fade-in border-primary/10 bg-white/90 backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
              <div className="flex flex-col h-full">
                <p className="text-muted-foreground italic mb-6 flex-grow">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
                </p>
                <div className="mt-auto">
                  <p className="font-bold text-foreground">Liam C</p>
                  <p className="text-sm text-muted-foreground">Founder, Krush Organics (Sydney)</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-glow transition-all duration-300 animate-fade-in border-primary/10 bg-white/90 backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col h-full">
                <p className="text-muted-foreground italic mb-6 flex-grow">
                  "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month."
                </p>
                <div className="mt-auto">
                  <p className="font-bold text-foreground">Evan Tsaboukos</p>
                  <p className="text-sm text-muted-foreground">Founder, Imperial Wealth (Melbourne)</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Integrated Darwin Online Marketing Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide a full suite of digital marketing services, all unified under a single, Darwin-centric strategy for maximum impact and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 hover:shadow-glow transition-all duration-300 animate-fade-in border-primary/10 bg-white/80 backdrop-blur-sm relative overflow-hidden group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-4 shadow-primary">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-gradient-primary text-white shadow-primary hover:shadow-glow transition-all duration-300"
            >
              Schedule Your FREE Darwin Digital Strategy Session <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 border-2 border-primary/10 rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 border-2 border-accent/10 rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Odin Digital is Darwin's Preferred Marketing Partner
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine national-level resources with the local insight needed to succeed in the Northern Territory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 hover:shadow-glow transition-all duration-300 animate-fade-in border-primary/10 bg-white/90 backdrop-blur-sm relative overflow-hidden group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-300" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-4 shadow-primary">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our 4-Step Predictable Growth System for Darwin Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a strategic process designed to deliver a steady, high-quality stream of local Darwin customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-glow transition-all duration-300 animate-fade-in border-primary/10 bg-white/80 backdrop-blur-sm relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-4 shadow-primary">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-muted/20 via-background to-muted/10 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Odin Digital as Your Online Marketing Company?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are obsessed with your business growth. Our focus is on turning your marketing spend into a predictable, profitable system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 hover:shadow-glow transition-all duration-300 animate-fade-in border-primary/10 bg-white/90 backdrop-blur-sm relative overflow-hidden group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-300" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-4 shadow-primary">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions About Online Marketing in Darwin
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-primary/10 rounded-lg px-6 bg-white/80 backdrop-blur-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-primary/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Partner with Darwin's Leading Online Marketing Company?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop dealing with fragmented strategies and start attracting high-value local customers with a cohesive, integrated digital marketing plan.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Schedule your free, no-obligation Darwin Digital Strategy Session today. We'll show you the exact roadmap to dominate your local market and maximize your profitability.
            </p>
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-gradient-primary text-white shadow-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
            >
              Schedule Your FREE Darwin Digital Strategy Session <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-primary shadow-glow z-40 md:hidden">
        <Button 
          onClick={() => navigate('/contact')}
          size="lg"
          className="w-full bg-white text-primary hover:bg-white/90 font-bold whitespace-normal h-auto py-4 text-base leading-tight break-words"
        >
          Schedule Your FREE Darwin Digital Strategy Session
        </Button>
      </div>

      <Footer />
    </>
  );
};

export default OnlineMarketingCompanyDarwin;
