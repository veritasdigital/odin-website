import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Globe, Users, TrendingUp, Award, CheckCircle, Target, Shield, Heart, MessageSquare, Zap, Clock, Star, FileText, Video, Search, Megaphone, Mail, BarChart } from "lucide-react";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ImmigrationLawyers = () => {
  const { openForm } = useMarketingForm();

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://odindigital.com.au/#organization",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au",
        "logo": "https://odindigital.com.au/logo.png",
        "description": "Performance-focused digital marketing agency specializing in high-trust, multicultural client acquisition for Immigration Law Firms in Australia.",
        "founder": {
          "@type": "Person",
          "name": "Lucas Durante"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "url": "https://odindigital.com.au/contact"
        },
        "sameAs": [
          "https://www.linkedin.com/company/odin-digital",
          "https://www.facebook.com/odindigital",
          "https://twitter.com/odindigital"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://odindigital.com.au/industries/immigration-lawyers#webpage",
        "url": "https://odindigital.com.au/industries/immigration-lawyers",
        "name": "Immigration Lawyers Marketing National Industry Hub",
        "inLanguage": "en-AU",
        "description": "Comprehensive digital marketing strategies for Immigration Lawyers, focusing on building trust, reaching multicultural audiences, SEO, and PPC across Australia.",
        "about": {
          "@type": "Thing",
          "name": "Immigration Lawyers Marketing"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://odindigital.com.au/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Industries",
              "item": "https://odindigital.com.au/industries"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Immigration Lawyers Marketing"
            }
          ]
        }
      },
      {
        "@type": "Service",
        "serviceType": "Digital Marketing for Immigration Lawyers",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": "Australia",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Immigration Lawyers Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "High-Trust Website & Video Content Hubs"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Multicultural SEO & Content Marketing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hyper-Targeted PPC & Meta Ads"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Automated Intake, Follow-Up & Review Generation"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the most effective way to get more immigration clients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A niche-focused, multicultural approach is best. This includes multilingual SEO to capture high-intent searches in different languages, hyper-targeted PPC ads for specific visa types, and video marketing to build trust and emotional connection."
            }
          },
          {
            "@type": "Question",
            "name": "How can I build trust with potential clients who don't speak English well?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By speaking their language—literally and figuratively. We create multilingual website content, video subtitles, and ad campaigns. We also help you craft messaging that shows a deep understanding of their cultural background and the challenges they face."
            }
          },
          {
            "@type": "Question",
            "name": "How much should an immigration law firm spend on marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While some suggest 7-10% of revenue, we focus on Return on Investment (ROI). The key is to track your Cost Per Signed Retainer. We start with a budget you're comfortable with and scale up as we prove profitability."
            }
          }
        ]
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Odin Digital - Digital Marketing for Immigration Lawyers"
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
      }
    ]
  };

  const socialProof = [
    { number: "290%", label: "Average Client Increase" },
    { number: "52%", label: "Cost Per Client Reduction" },
    { number: "240+", label: "Law Firms Served" },
    { number: "15+", label: "Years Experience" }
  ];

  const problems = [
    {
      icon: Shield,
      title: "The Trust Deficit",
      description: "Immigration clients are making life-changing decisions. They need overwhelming trust before they hire you, but most law firm websites feel cold, corporate, and impersonal—failing to build the emotional connection required."
    },
    {
      icon: Globe,
      title: "The Multicultural Marketing Gap",
      description: "Your ideal clients speak Mandarin, Arabic, Hindi, Spanish—not just English. But your marketing speaks only one language, leaving millions in potential revenue on the table and missing diverse communities who need your help."
    },
    {
      icon: TrendingUp,
      title: "The Leaky Intake Funnel",
      description: "Enquiries come in, but they ghost after the first call. Your intake process isn't optimized for conversion, follow-up is inconsistent, and you're losing high-value retainers to competitors who respond faster and build trust better."
    }
  ];

  const testimonials = [
    {
      quote: "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
      author: "Evan Tsaboukos",
      company: "Imperial Wealth"
    },
    {
      quote: "The multicultural approach transformed our practice. We're now reaching communities we never connected with before, and our retainer sign-up rate has doubled.",
      author: "Sarah Chen",
      company: "Migration Partners Law"
    },
    {
      quote: "Odin Digital doesn't just do marketing—they understand the immigration law business. Their intake optimization alone has been worth 10x our investment.",
      author: "Michael Rodriguez",
      company: "Visa Solutions Group"
    }
  ];

  const services = [
    {
      icon: Video,
      title: "High-Trust Website & Video Content Hubs",
      description: "We build conversion-optimized websites that feel warm, empathetic, and trustworthy. Your story, your expertise, and your success stories are showcased through professional video content that builds overwhelming trust before the first consultation.",
      features: [
        "Empathetic, culturally-sensitive web design",
        "Professional video testimonials and case studies",
        "Multilingual content hubs",
        "Mobile-optimized consultation booking",
        "Trust signals and credibility markers"
      ],
      results: "A website that converts visitors into booked consultations at 3-5x the industry average, with prospects arriving pre-sold on your expertise."
    },
    {
      icon: Search,
      title: "Multicultural SEO & Content Marketing",
      description: "We rank your firm for high-intent searches in multiple languages. From 'partner visa lawyer Sydney' to '配偶签证律师悉尼', we capture demand across every community you serve.",
      features: [
        "Multilingual keyword research and optimization",
        "Culturally-relevant content creation",
        "Local SEO for multiple locations",
        "Technical SEO and site speed optimization",
        "Authority link building"
      ],
      results: "Dominate search results in English and target languages, capturing high-intent traffic from diverse communities actively searching for immigration help."
    },
    {
      icon: Megaphone,
      title: "Hyper-Targeted PPC & Meta Ads",
      description: "We run laser-focused ad campaigns targeting specific visa types, nationalities, and life stages. Your ads speak directly to skilled workers, partners, students, and families in their language with messaging that resonates.",
      features: [
        "Visa-specific ad campaigns (Partner, Skilled, Student, Family)",
        "Multilingual ad copy and landing pages",
        "Audience targeting by nationality and language",
        "Retargeting campaigns for warm leads",
        "Continuous A/B testing and optimization"
      ],
      results: "Qualified consultation bookings from people ready to hire, with Cost Per Signed Retainer tracking showing clear ROI on every dollar spent."
    },
    {
      icon: Mail,
      title: "Automated Intake, Follow-Up & Review Generation",
      description: "We plug your leaky funnel with automated systems that nurture every lead, follow up consistently, and convert more enquiries into paying clients. Plus, we generate authentic reviews that build social proof at scale.",
      features: [
        "Automated lead nurture sequences",
        "CRM integration and lead tracking",
        "Consultation reminder systems",
        "Post-case review generation",
        "Referral request automation"
      ],
      results: "Dramatically higher enquiry-to-retainer conversion rates, more consistent cash flow, and a growing library of 5-star reviews that attract more premium clients."
    }
  ];

  const differentiators = [
    {
      icon: Heart,
      title: "We Build Trust at Scale",
      description: "Immigration law is about hope, family, and futures. We don't just market your services—we tell your story in a way that builds deep emotional trust with people making the most important decisions of their lives."
    },
    {
      icon: Globe,
      title: "We Speak Your Clients' Language",
      description: "Literally. Our multicultural marketing strategies reach communities in their native languages, with culturally-appropriate messaging that resonates and converts at rates generic marketing can never achieve."
    },
    {
      icon: Target,
      title: "We Focus on Revenue, Not Vanity Metrics",
      description: "We don't care about likes and followers. We track Cost Per Signed Retainer, Client Lifetime Value, and ROI. Every strategy is optimized for one thing: putting more high-value clients into your pipeline."
    },
    {
      icon: Zap,
      title: "We Plug Your Leaky Funnel",
      description: "Most firms lose 60-80% of enquiries due to poor follow-up and weak intake processes. We fix that with proven automation, nurture systems, and conversion optimization that turns more enquiries into retainers."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Niche & Competitor Deep Dive",
      description: "We analyze your specific visa types, target nationalities, and competitive landscape. We identify the exact multicultural audiences you should target and the messages that will resonate with them most powerfully."
    },
    {
      number: "02",
      title: "Trust-Building Content & Website Optimization",
      description: "We build or optimize your website to be a high-trust conversion machine. Professional video content, client success stories, and culturally-appropriate messaging across multiple languages."
    },
    {
      number: "03",
      title: "Multichannel Traffic Generation",
      description: "We launch integrated SEO, PPC, and Meta Ads campaigns targeting your ideal clients in their languages. Every campaign is laser-focused on visa-specific searches and community-specific audiences."
    },
    {
      number: "04",
      title: "Continuous Performance & Intake Optimization",
      description: "We monitor Cost Per Signed Retainer obsessively, optimize your intake process to convert more enquiries, and scale what works. Monthly reporting shows exactly how many retainers your marketing generated and at what cost."
    }
  ];

  const whyChooseUs = [
    {
      title: "Immigration Law Marketing Expertise",
      description: "We've worked with over 240 law firms, with deep expertise in immigration law marketing. We understand visa categories, processing times, client anxieties, and the complex buyer journey from initial research to signed retainer. We know what works because we've proven it repeatedly across dozens of immigration practices.",
      points: [
        "Proven experience with 50+ immigration law firms",
        "Deep understanding of visa types and client psychology",
        "Track record of 290% average client increase",
        "Specialized knowledge of immigration buyer journey"
      ]
    },
    {
      title: "Multicultural Marketing Mastery",
      description: "Australia is beautifully diverse, and your marketing should reflect that. We create campaigns in Mandarin, Cantonese, Arabic, Hindi, Spanish, Vietnamese, and more. We understand cultural nuances, community-specific pain points, and how to build trust across different backgrounds. This isn't just translation—it's culturally-intelligent marketing that connects and converts.",
      points: [
        "Multilingual campaigns in 10+ languages",
        "Cultural sensitivity and community understanding",
        "Native speaker content creation and ad copywriting",
        "Community-specific targeting and messaging"
      ]
    },
    {
      title: "Trust-Building Through Video & Storytelling",
      description: "Immigration clients need to feel before they buy. We produce high-quality video content that showcases your expertise, empathy, and success stories. Client testimonials in multiple languages, explainer videos for complex visa types, and 'day in the life' content that humanizes your practice. Video builds trust at scale—and trust drives retainers.",
      points: [
        "Professional video production and editing",
        "Client success stories and testimonials",
        "Multilingual video content with subtitles",
        "Empathetic storytelling that builds emotional connection"
      ]
    },
    {
      title: "Intake Funnel Optimization & Revenue Focus",
      description: "We don't stop at generating enquiries—we help you convert them. Our intake optimization systems include automated follow-up sequences, consultation reminder systems, lead nurture campaigns, and CRM integration. We track every enquiry through to signed retainer, optimizing for conversion at every stage. This is where most agencies fail, and where we excel. Our focus is on Cost Per Signed Retainer and ROI, not vanity metrics. You'll know exactly how many retainers your marketing generated, what they cost, and what your return is. No fluff, just revenue.",
      points: [
        "Automated lead nurture and follow-up systems",
        "CRM integration and conversion tracking",
        "Consultation booking optimization",
        "Cost Per Signed Retainer tracking and optimization",
        "Revenue-focused reporting and analytics"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is the most effective way to get more immigration clients?",
      answer: "A niche-focused, multicultural approach is best. This includes multilingual SEO to capture high-intent searches in different languages, hyper-targeted PPC ads for specific visa types, and video marketing to build trust and emotional connection. The key is to speak your clients' language (literally), understand their cultural context, and build overwhelming trust before the first consultation."
    },
    {
      question: "How can I build trust with potential clients who don't speak English well?",
      answer: "By speaking their language—literally and figuratively. We create multilingual website content, video subtitles, and ad campaigns. We also help you craft messaging that shows a deep understanding of their cultural background and the challenges they face. Professional video testimonials from past clients who share their cultural background are particularly powerful."
    },
    {
      question: "How much should an immigration law firm spend on marketing?",
      answer: "While some suggest 7-10% of revenue, we focus on Return on Investment (ROI). The key is to track your Cost Per Signed Retainer. We start with a budget you're comfortable with ($3,000-$10,000/month is typical) and scale up as we prove profitability. If we're generating retainers at $500 each and your average client value is $5,000+, the ROI is clear."
    },
    {
      question: "How long does it take to see results from immigration law marketing?",
      answer: "PPC and Meta Ads can generate consultations within days. SEO typically takes 3-6 months to build meaningful traction. Video content and trust-building assets deliver ongoing value that compounds over time. We set realistic expectations upfront and provide monthly reporting showing exactly how many consultations and retainers your marketing generated."
    },
    {
      question: "Do you work with small immigration law firms or solo practitioners?",
      answer: "Absolutely. We work with practices of all sizes, from solo practitioners to multi-partner firms. We have service packages and pricing options designed specifically for smaller practices. Small firms often have the advantage of personal service and specialized expertise—we help you communicate that effectively."
    },
    {
      question: "How do you handle marketing for different visa types (Partner, Skilled, Student, Family)?",
      answer: "We create visa-specific marketing campaigns with targeted messaging, landing pages, and ad campaigns for each category. Partner visas emphasize family reunion and relationship support. Skilled visas highlight career opportunities and pathways to PR. Student visas focus on education and future opportunities. Each campaign speaks directly to the unique hopes and concerns of that audience."
    },
    {
      question: "Can you help with marketing in languages other than English?",
      answer: "Yes, multilingual marketing is one of our core strengths. We create campaigns in Mandarin, Cantonese, Arabic, Hindi, Spanish, Vietnamese, Korean, and more. This includes translated website content, multilingual ad campaigns, and video content with subtitles. We work with native speakers to ensure cultural appropriateness and authentic messaging."
    },
    {
      question: "How do you track the ROI of immigration law marketing?",
      answer: "We track Cost Per Consultation, Cost Per Signed Retainer, and overall ROI. We integrate with your CRM or case management system to follow leads from initial enquiry through to signed retainer. Monthly reports show exactly how many consultations and retainers came from each marketing channel, what they cost, and what your return is."
    },
    {
      question: "What makes immigration law marketing different from other legal marketing?",
      answer: "Immigration law involves higher emotional stakes, longer decision cycles, and more diverse audiences than most practice areas. Clients are making life-changing decisions for themselves and their families. They need overwhelming trust, cultural understanding, and empathy. Marketing must build deep emotional connection, speak multiple languages, and demonstrate genuine understanding of their cultural context."
    },
    {
      question: "How do you optimize the consultation-to-retainer conversion rate?",
      answer: "We implement automated follow-up sequences, consultation reminder systems, and post-consultation nurture campaigns. We help you identify where leads drop off in your intake process and fix those gaps. We also train your team on consultative selling techniques that build trust and close more retainers. Many firms lose 60-80% of enquiries due to poor follow-up—we fix that."
    },
    {
      question: "Do you create video content for immigration law firms?",
      answer: "Yes, video is a core part of our trust-building strategy. We produce client testimonials, case study videos, visa explainer content, and 'meet the team' videos. Video builds trust faster and more effectively than any other medium. We can film on-site at your office or provide guidance for self-filmed content."
    },
    {
      question: "How do you compete against cheap online DIY visa services?",
      answer: "We position you as the expert professional who provides personalized service, deep expertise, and peace of mind that DIY services can't match. We create content that educates potential clients about the risks of DIY applications and the value of professional representation. We emphasize your success rates, your understanding of complex cases, and your personal support throughout the process."
    },
    {
      question: "Can you help with Google My Business and local SEO for immigration lawyers?",
      answer: "Absolutely. Local SEO is crucial for immigration lawyers. We optimize your Google Business Profile, generate authentic client reviews, and ensure you rank for location-specific searches like 'immigration lawyer Sydney' or 'partner visa lawyer Melbourne'. We also create location-specific landing pages for firms with multiple offices."
    },
    {
      question: "How do you generate reviews for immigration law firms?",
      answer: "We implement automated review request systems that ask happy clients for feedback at the right time (after visa approval or successful outcome). We make it easy for clients to leave reviews on Google, Facebook, and legal directories. We also help you respond professionally to all reviews, positive or negative."
    },
    {
      question: "What is your pricing structure for immigration law marketing?",
      answer: "We offer flexible pricing based on your goals and budget. Typical monthly retainers range from $3,000-$10,000+ depending on the scope of services (SEO, PPC, video, website, etc.). We also offer project-based pricing for website builds or video production. We provide transparent pricing upfront and never lock you into long-term contracts."
    },
    {
      question: "Do you have experience marketing for specific immigration niches (e.g., business visas, asylum, citizenship)?",
      answer: "Yes, we've worked with firms specializing in business and investment visas, partner and family visas, skilled migration, student visas, asylum and refugee law, and citizenship applications. We understand the unique marketing challenges and opportunities in each niche and create targeted campaigns accordingly."
    },
    {
      question: "How do you handle marketing compliance for legal services advertising?",
      answer: "We ensure all marketing complies with legal advertising regulations in each Australian state. We avoid making guarantees about outcomes, ensure all testimonials are authentic and compliant, and follow best practices for legal services marketing. We're experienced in navigating the regulatory landscape for law firm marketing."
    },
    {
      question: "Can you help with content marketing and thought leadership for immigration lawyers?",
      answer: "Absolutely. We create blog content, visa guides, policy update articles, and thought leadership pieces that position you as the expert in your field. This content builds SEO authority, attracts organic traffic, and establishes you as the go-to resource for immigration information. We can also help with LinkedIn content and industry commentary."
    },
    {
      question: "How do you measure success beyond just website traffic?",
      answer: "We measure what matters: consultations booked, retainers signed, cost per signed retainer, client lifetime value, and overall ROI. We also track conversion rates at each stage of your funnel, from initial enquiry to signed retainer. Our reporting shows you exactly how your marketing investment translates into revenue."
    },
    {
      question: "Why should I choose Odin Digital over other marketing agencies?",
      answer: "Because we specialize in immigration law marketing with proven results (290% average client increase, 52% cost reduction). We understand the unique challenges of building trust with diverse, multicultural audiences. We focus on revenue, not vanity metrics. We track Cost Per Signed Retainer, not just clicks. And we've helped over 50 immigration practices build predictable, scalable client acquisition systems. Our expertise, multicultural capabilities, and revenue focus make us the ideal partner for ambitious immigration law firms."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Immigration Lawyers Marketing Agency | Client Acquisition | Odin Digital</title>
        <meta name="description" content="The leading Immigration Lawyers Marketing Agency in Australia. We build high-trust, multicultural marketing systems to attract high-value, retainer-ready clients. No lock-in contracts." />
        <meta name="keywords" content="immigration lawyers marketing, immigration law marketing, immigration attorney marketing, visa lawyer marketing, migration agent marketing, immigration law firm marketing, immigration lawyer SEO, immigration lawyer Google Ads" />
        <link rel="canonical" href="https://odindigital.com.au/industries/immigration-lawyers" />
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
          Schedule Free Consultation
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
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight mt-24 sm:mt-32">
                Immigration Lawyers Marketing
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-8 max-w-5xl mx-auto leading-relaxed font-semibold px-4">
                Stop Competing on Price and Start Competing on Trust. We Build Digital Ecosystems That Attract High-Value, Retainer-Ready Clients for Your Immigration Law Firm.
              </p>

              <Button 
                variant="cta" 
                size="xl" 
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 h-auto py-3 sm:py-4 whitespace-normal mb-8"
                onClick={openForm}
              >
                Schedule Free Immigration Marketing Consultation <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
              {socialProof.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black text-primary mb-2">{item.number}</div>
                  <div className="text-sm sm:text-base text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">The Immigration Law Marketing Challenge</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Immigration lawyers face unique challenges that generic marketing agencies simply don't understand.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 px-4">
              {problems.map((problem, index) => (
                <Card key={index} className="p-6 sm:p-8 hover-scale">
                  <problem.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-4">{problem.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">What Our Clients Say</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 px-4">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 sm:p-8 hover-scale flex flex-col">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="inline-block w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 italic leading-relaxed flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold text-sm sm:text-base">{testimonial.author}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section - 4 Pillars */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">Our 4 Core Marketing Pillars</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive marketing services designed specifically for immigration law practices.
              </p>
            </div>

            <div className="space-y-8 px-4">
              {services.map((service, index) => (
                <Card key={index} className="p-6 sm:p-8 hover-scale">
                  <div className="flex items-start gap-6">
                    <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mb-4">
                        <p className="font-semibold mb-2 text-sm sm:text-base">Key Features:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-muted-foreground">
                          {service.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <p className="font-semibold mb-2 text-sm sm:text-base">Expected Results:</p>
                        <p className="text-sm sm:text-base text-muted-foreground">{service.results}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 px-4">
              <Button 
                variant="cta" 
                size="xl" 
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 h-auto py-3 sm:py-4 whitespace-normal"
                onClick={openForm}
              >
                Discuss Your Marketing Needs <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">Why Immigration Lawyers Choose Odin Digital</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                We're not just another marketing agency. We're immigration law marketing specialists.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 px-4">
              {differentiators.map((item, index) => (
                <Card key={index} className="p-6 sm:p-8 hover-scale">
                  <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">Our Proven 4-Step Process</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to building your immigration law practice.
              </p>
            </div>

            <div className="space-y-8 px-4">
              {process.map((step, index) => (
                <Card key={index} className="p-6 sm:p-8 hover-scale">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl sm:text-5xl font-black text-primary/20 flex-shrink-0">{step.number}</div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Expanded Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">The Odin Digital Advantage</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Deep expertise in immigration law marketing with proven results.
              </p>
            </div>

            <div className="space-y-12 px-4">
              {whyChooseUs.map((section, index) => (
                <Card key={index} className="p-6 sm:p-8 hover-scale">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">{section.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm sm:text-base text-muted-foreground">{point}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 px-4">
              <Button 
                variant="cta" 
                size="xl" 
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 h-auto py-3 sm:py-4 whitespace-normal"
                onClick={openForm}
              >
                Learn More About Our Approach <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section data-nav-contrast="dark" className="py-24 gradient-hero relative overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{ animationDelay: '3s' }} />
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 sm:mb-8 px-4">
              Ready to Attract More High-Value Immigration Clients?
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Stop competing on price. Start building overwhelming trust. Generate a predictable stream of retainer-ready clients who value your expertise.
            </p>

            <p className="text-base sm:text-lg text-white/80 mb-8 max-w-3xl mx-auto px-4">
              Schedule your free, no-obligation immigration law marketing consultation today. We'll analyze your current marketing, identify opportunities, and show you exactly how we can help you scale your practice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button 
                variant="cta" 
                size="xl" 
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 h-auto py-3 sm:py-4 whitespace-normal w-full sm:w-auto"
                onClick={openForm}
              >
                Schedule Your Free Immigration Marketing Consultation <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Related Services & Location Links */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">Related Services & Locations</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 px-4">
              <div>
                <h3 className="text-xl font-bold mb-4">Core Services</h3>
                <ul className="space-y-2">
                  <li><a href="/services/seo" className="text-primary hover:underline">SEO Agency</a></li>
                  <li><a href="/services/google-ads" className="text-primary hover:underline">Google Ads Management</a></li>
                  <li><a href="/services/facebook-advertising" className="text-primary hover:underline">Meta Ads Agency</a></li>
                  <li><a href="/services/website-design" className="text-primary hover:underline">Web Design Agency</a></li>
                  <li><a href="/services/email-marketing" className="text-primary hover:underline">Email Marketing</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Location Services</h3>
                <ul className="space-y-2">
                  <li><a href="/services/seo/sydney" className="text-primary hover:underline">SEO Sydney</a></li>
                  <li><a href="/services/google-ads/melbourne" className="text-primary hover:underline">Google Ads Melbourne</a></li>
                  <li><a href="/services/facebook-ads/hobart" className="text-primary hover:underline">Facebook Ads Hobart</a></li>
                  <li><a href="/services/web-design/hobart" className="text-primary hover:underline">Web Design Hobart</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 px-4">
              <h3 className="text-xl font-bold mb-4 text-center">Other Industries We Serve</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/industries/cosmetic-surgeons" className="text-primary hover:underline">Cosmetic Surgeons</a>
                <a href="/industries/real-estate-agents" className="text-primary hover:underline">Real Estate Agents</a>
                <a href="/industries/personal-injury-lawyers" className="text-primary hover:underline">Personal Injury Lawyers</a>
                <a href="/industries/orthodontists" className="text-primary hover:underline">Orthodontists</a>
                <a href="/industries/plumbers" className="text-primary hover:underline">Plumbers</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">Frequently Asked Questions</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Everything you need to know about immigration lawyer marketing.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 sm:px-6">
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-12 px-4">
              <Button 
                variant="cta" 
                size="xl" 
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 h-auto py-3 sm:py-4 whitespace-normal"
                onClick={openForm}
              >
                Get Your Questions Answered <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ImmigrationLawyers;