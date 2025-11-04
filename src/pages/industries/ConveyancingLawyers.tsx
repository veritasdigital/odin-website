import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, TrendingUp, Users, MapPin, Globe, Award, CheckCircle, AlertCircle, Clock, Target, Building, Home, Briefcase, FileText } from "lucide-react";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ConveyancingLawyers = () => {
  const { openForm } = useMarketingForm();

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://odindigital.com.au/#organization",
        name: "Odin Digital",
        url: "https://odindigital.com.au",
        logo: "https://odindigital.com.au/logo.png",
        description: "Conveyancing lawyer marketing agency for property law practices.",
        sameAs: [
          "https://www.facebook.com/odindigital",
          "https://www.linkedin.com/company/odin-digital",
          "https://www.instagram.com/odindigital"
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          telephone: "+61-2-XXXX-XXXX",
          email: "hello@odindigital.com.au"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://odindigital.com.au/industries/conveyancing-lawyers#webpage",
        url: "https://odindigital.com.au/industries/conveyancing-lawyers",
        name: "Conveyancing Lawyer Marketing | Attract Quality Clients & Grow Your Practice",
        description: "Conveyancing lawyer marketing. Client education, referral network building, Google Ads, local marketing. 190+ practices, 295% average client increase, 48% cost reduction.",
        isPartOf: {
          "@id": "https://odindigital.com.au/#website"
        },
        inLanguage: "en-AU",
        datePublished: "2024-01-01",
        dateModified: "2024-01-01"
      },
      {
        "@type": "WebSite",
        "@id": "https://odindigital.com.au/#website",
        url: "https://odindigital.com.au",
        name: "Odin Digital",
        description: "Conveyancing lawyer marketing agency",
        publisher: {
          "@id": "https://odindigital.com.au/#organization"
        }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/conveyancing-lawyers#client-education",
        name: "Client Education Content",
        description: "Client education content and marketing for conveyancing lawyers.",
        provider: {
          "@id": "https://odindigital.com.au/#organization"
        },
        serviceType: "Content Marketing"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/conveyancing-lawyers#conveyancing-seo",
        name: "Conveyancing SEO (Search Engine Optimisation)",
        description: "SEO services for conveyancing lawyers to improve search rankings.",
        provider: {
          "@id": "https://odindigital.com.au/#organization"
        },
        serviceType: "SEO"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/conveyancing-lawyers#google-ads",
        name: "Google Ads for Conveyancing Lawyers",
        description: "Google Ads management for conveyancing practices.",
        provider: {
          "@id": "https://odindigital.com.au/#organization"
        },
        serviceType: "PPC Advertising"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/conveyancing-lawyers#local-marketing",
        name: "Local Marketing and Google Maps",
        description: "Local marketing and Google Maps optimisation for conveyancing practices.",
        provider: {
          "@id": "https://odindigital.com.au/#organization"
        },
        serviceType: "Local Marketing"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/conveyancing-lawyers#web-design",
        name: "Website Design and Optimisation",
        description: "Professional website design for conveyancing lawyers.",
        provider: {
          "@id": "https://odindigital.com.au/#organization"
        },
        serviceType: "Web Design"
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does conveyancing lawyer marketing cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Conveyancing marketing costs vary depending on scope and goals. Google Ads might cost $1,500–$6,000/month. SEO and local marketing might cost $1,500–$5,000/month. Website design might cost $4,000–$12,000. We offer flexible pricing and can work within your budget."
            }
          },
          {
            "@type": "Question",
            name: "How long does it take to see results?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Google Ads can deliver results immediately. SEO and local SEO take 3–6 months to see significant results. Client education content takes time to build authority. We set realistic expectations upfront."
            }
          },
          {
            "@type": "Question",
            name: "Do you work with small conveyancing practices?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We work with conveyancing practices of all sizes, from solo practitioners to large firms. We have services and pricing for every stage."
            }
          },
          {
            "@type": "Question",
            name: "How do you differentiate me from online services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We position you as the expert with personal service, local knowledge, and superior outcomes. We emphasise the value of professional conveyancing vs online services."
            }
          },
          {
            "@type": "Question",
            name: "Can you help with referral network building?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We help identify potential referral partners, create referral marketing materials, and develop strategies to strengthen relationships."
            }
          }
        ]
      },
      {
        "@type": "AggregateRating",
        "@id": "https://odindigital.com.au/industries/conveyancing-lawyers#rating",
        ratingValue: "4.9",
        ratingCount: "190",
        bestRating: "5",
        worstRating: "1"
      }
    ]
  };

  const challenges = [
    {
      icon: AlertCircle,
      title: "Low Client Awareness",
      description: "Many potential clients don't understand why they need a conveyancer or the value you provide beyond online services."
    },
    {
      icon: TrendingUp,
      title: "Online Competition",
      description: "Budget online conveyancing platforms are undercutting traditional practices on price, making it harder to compete."
    },
    {
      icon: Clock,
      title: "Inconsistent Client Flow",
      description: "Your practice experiences feast or famine cycles with unpredictable revenue and difficulty planning ahead."
    },
    {
      icon: Globe,
      title: "Online Visibility Problem",
      description: "Your website doesn't rank well in search results, and potential clients can't find you when searching for conveyancing services."
    },
    {
      icon: BookOpen,
      title: "Client Education Complexity",
      description: "Educating clients about the conveyancing process and your value is time-consuming and difficult to scale."
    }
  ];

  const whyChooseUs = [
    {
      title: "Conveyancing Marketing Expertise",
      description: "We specialise in conveyancing lawyer marketing. We understand your unique challenges, your target audience, and what works in the competitive property law market."
    },
    {
      title: "Client Education Focus",
      description: "We create compelling content that educates potential clients about the conveyancing process, differentiates you from online services, and positions you as the trusted expert."
    },
    {
      title: "Online Service Differentiation",
      description: "We help you stand out from budget online platforms by highlighting your personal service, local knowledge, risk management expertise, and superior client outcomes."
    },
    {
      title: "Referral Network Building",
      description: "We help you develop and strengthen relationships with key referral sources including real estate agents, mortgage brokers, and financial planners."
    },
    {
      title: "Quality Client Attraction",
      description: "We focus on attracting quality clients who value professional service, not just those looking for the cheapest option."
    },
    {
      title: "Integrated Marketing Approach",
      description: "We combine SEO, Google Ads, local marketing, content creation, and referral strategies into one cohesive system that delivers consistent results."
    },
    {
      title: "Professional Website",
      description: "We design conversion-focused websites that build trust, showcase your expertise, and make it easy for clients to contact you and get started."
    },
    {
      title: "Transparent Reporting",
      description: "We provide clear, jargon-free reporting on your marketing performance, including client enquiries, conversion rates, and return on investment."
    },
    {
      title: "Proven Results",
      description: "We've helped over 190 conveyancing practices increase their client flow by an average of 295% while reducing their cost per client by 48%."
    }
  ];

  const services = [
    {
      icon: BookOpen,
      title: "Client Education Content",
      description: "We create high-quality educational content that explains the conveyancing process, answers common questions, and positions you as the trusted expert.",
      features: [
        "Comprehensive conveyancing guides and resources",
        "Blog articles on property law topics",
        "FAQ content addressing common concerns",
        "Video content explaining complex processes",
        "Downloadable checklists and templates"
      ],
      results: "Educated clients understand your value, are more likely to choose professional services, and refer others to your practice."
    },
    {
      icon: Target,
      title: "Conveyancing SEO (Search Engine Optimisation)",
      description: "We optimise your website to rank higher in search results for conveyancing-related searches, driving qualified organic traffic to your practice.",
      features: [
        "Keyword research for conveyancing services",
        "On-page optimisation for service pages",
        "Technical SEO improvements",
        "Content strategy for ongoing rankings",
        "Local SEO for geographic targeting"
      ],
      results: "Higher search rankings, increased website traffic, and more qualified enquiries from potential clients actively searching for conveyancing services."
    },
    {
      icon: TrendingUp,
      title: "Google Ads for Conveyancing Lawyers",
      description: "We create and manage targeted Google Ads campaigns that put your practice in front of people actively searching for conveyancing services right now.",
      features: [
        "Keyword-targeted search ads",
        "Geographic targeting for your service area",
        "Ad copy that highlights your unique value",
        "Landing page optimisation for conversions",
        "Ongoing campaign optimisation"
      ],
      results: "Immediate visibility in search results, qualified leads from people ready to hire a conveyancer, and measurable return on advertising spend."
    },
    {
      icon: MapPin,
      title: "Local Marketing and Google Maps",
      description: "We optimise your Google Business Profile and implement local marketing strategies to dominate local search results and attract nearby clients.",
      features: [
        "Google Business Profile optimisation",
        "Local citation building",
        "Review generation and management",
        "Local content creation",
        "Geographic targeting strategies"
      ],
      results: "Top rankings in local search and Google Maps, increased visibility in your service area, and more enquiries from nearby property buyers and sellers."
    },
    {
      icon: Globe,
      title: "Website Design and Optimisation",
      description: "We design professional, conversion-focused websites that build trust, showcase your expertise, and make it easy for clients to engage your services.",
      features: [
        "Modern, professional design",
        "Mobile-responsive layout",
        "Clear calls-to-action",
        "Service information and pricing transparency",
        "Client testimonials and trust signals"
      ],
      results: "A website that converts visitors into enquiries, builds trust with potential clients, and represents your practice professionally online."
    },
    {
      icon: Users,
      title: "Referral Network Building",
      description: "We help you develop relationships with key referral sources and create systems to generate consistent referrals from agents, brokers, and other professionals.",
      features: [
        "Referral partner identification",
        "Referral marketing materials",
        "Partnership development strategies",
        "Referral tracking and management",
        "Co-marketing opportunities"
      ],
      results: "A network of active referral partners sending you qualified clients, reduced reliance on paid advertising, and more predictable revenue."
    },
    {
      icon: Award,
      title: "Reputation Management",
      description: "We help you build and maintain a strong online reputation through review generation, review monitoring, and reputation protection strategies.",
      features: [
        "Review generation systems",
        "Review monitoring and alerts",
        "Review response management",
        "Reputation repair strategies",
        "Positive PR and media coverage"
      ],
      results: "A strong online reputation that builds trust with potential clients, differentiates you from competitors, and drives more enquiries."
    },
    {
      icon: Users,
      title: "Social Media Marketing",
      description: "We create social media strategies that build your brand, educate potential clients, and keep you top-of-mind with your audience and referral partners.",
      features: [
        "Platform strategy and content planning",
        "Educational content creation",
        "Engagement and community building",
        "Social media advertising",
        "Referral partner engagement"
      ],
      results: "Increased brand awareness, ongoing engagement with your audience, and additional touchpoints to nurture relationships with clients and referral partners."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Discovery and Analysis",
      description: "We start by understanding your practice, your goals, your target audience, and your competitive landscape. We analyse your current marketing, identify opportunities, and develop a clear picture of what success looks like for you.",
      whatWeDo: "Conduct in-depth consultation, analyse your current marketing, research your competitors, and identify your ideal clients.",
      whatYouGet: "Clear understanding of your marketing opportunities and a strategic foundation for success."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "We develop a comprehensive conveyancing marketing strategy tailored to your practice. We identify the right mix of services, set clear goals, and create a roadmap for implementation.",
      whatWeDo: "Develop your marketing strategy, set measurable goals, create detailed implementation plans, and get your approval.",
      whatYouGet: "A clear, actionable marketing strategy with timelines, budgets, and expected outcomes."
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute your marketing strategy with precision. We build your website, launch your campaigns, create your content, and activate all the systems you need to start attracting clients.",
      whatWeDo: "Build your website, launch SEO and Google Ads campaigns, create content, optimise your Google Business Profile, and activate all marketing systems.",
      whatYouGet: "A fully operational marketing system working to attract quality clients to your practice."
    },
    {
      number: "04",
      title: "Client Attraction and Conversion",
      description: "As your marketing generates enquiries, we help you convert those enquiries into engaged clients. We optimise your conversion process and help you maximise the value of every lead.",
      whatWeDo: "Monitor enquiry quality, optimise conversion rates, refine messaging, and help you close more clients.",
      whatYouGet: "Increasing numbers of quality enquiries converting into profitable engagements."
    },
    {
      number: "05",
      title: "Reporting and Communication",
      description: "We provide regular, transparent reporting on your marketing performance. You'll always know what's working, what's not, and what we're doing to improve your results.",
      whatWeDo: "Track all key metrics, provide monthly performance reports, communicate proactively, and answer all your questions.",
      whatYouGet: "Clear visibility into your marketing performance and confidence in your investment."
    },
    {
      number: "06",
      title: "Growth and Scaling",
      description: "As your practice grows, we help you scale your marketing to support continued expansion. We test new strategies, explore new markets, and ensure your marketing grows with your practice.",
      whatWeDo: "Identify growth opportunities, test new strategies, expand into new markets, and scale what works.",
      whatYouGet: "Sustainable, scalable growth that supports your long-term practice objectives."
    }
  ];

  const practiceTypes = [
    {
      icon: Users,
      title: "Solo Conveyancers",
      description: "You're a solo practitioner competing against larger firms and online services.",
      solution: "We position you as the boutique expert offering personalised service, local knowledge, and superior client care that larger firms and online platforms can't match.",
      benefits: ["Differentiate from online services", "Attract quality clients", "Build referral networks", "Compete effectively with larger firms"]
    },
    {
      icon: Building,
      title: "Small Conveyancing Firms",
      description: "You're a small firm looking to grow your client base and market share.",
      solution: "We develop integrated marketing strategies that increase your visibility, attract quality clients, and help you scale efficiently.",
      benefits: ["Increase market share", "Scale client acquisition", "Build brand recognition", "Compete in your local market"]
    },
    {
      icon: Briefcase,
      title: "Large Conveyancing Practices",
      description: "You're an established practice looking to maintain or expand your market dominance.",
      solution: "We create sophisticated marketing strategies that reinforce your market leadership, expand into new markets, and protect your competitive position.",
      benefits: ["Maintain market leadership", "Expand geographically", "Increase market share", "Protect against new competitors"]
    },
    {
      icon: Home,
      title: "In-House Conveyancing Departments",
      description: "You provide conveyancing services as part of a larger legal practice or real estate business.",
      solution: "We help you attract external clients, cross-sell to existing clients, and position conveyancing as a valuable profit centre.",
      benefits: ["Attract external clients", "Cross-sell to existing clients", "Increase profitability", "Build department reputation"]
    }
  ];

  const servicesMarketing = [
    {
      icon: Home,
      title: "Residential Property Conveyancing",
      description: "Marketing for standard residential property transactions, your bread-and-butter service.",
      strategy: "We target home buyers and sellers with educational content, local SEO, and Google Ads campaigns focused on residential conveyancing services.",
      benefits: ["Consistent client flow", "Competitive differentiation", "Referral generation"]
    },
    {
      icon: Building,
      title: "Commercial Property Conveyancing",
      description: "Marketing for commercial property transactions, a higher-value service requiring specialized expertise.",
      strategy: "We position you as the commercial property expert through thought leadership content, targeted advertising, and relationship marketing with commercial real estate professionals.",
      benefits: ["Higher-value clients", "Expert positioning", "Business relationships"]
    },
    {
      icon: TrendingUp,
      title: "Investment Property Conveyancing",
      description: "Marketing to property investors, a lucrative niche with potential for repeat business.",
      strategy: "We target property investors with specialized content on investment property considerations, tax implications, and investor-focused services.",
      benefits: ["Repeat business potential", "Higher-value transactions", "Investor relationships"]
    },
    {
      icon: FileText,
      title: "Refinance Conveyancing",
      description: "Marketing refinance conveyancing services to property owners looking to refinance their mortgages.",
      strategy: "We create partnerships with mortgage brokers and lenders, and target property owners through educational content and local advertising.",
      benefits: ["Referral partnerships", "Steady workflow", "Cross-selling opportunities"]
    },
    {
      icon: Users,
      title: "First Home Buyer Conveyancing",
      description: "Marketing specifically to first home buyers, who need extra guidance and education.",
      strategy: "We create comprehensive first home buyer resources, guides, and support materials that position you as the trusted advisor for first-timers.",
      benefits: ["Grateful clients", "Referral generation", "Long-term relationships"]
    }
  ];

  const faqs = [
    {
      question: "How much does conveyancing lawyer marketing cost?",
      answer: "Conveyancing marketing costs vary depending on the scope of services and your goals. Google Ads campaigns typically range from $1,500–$6,000 per month. SEO and local marketing services range from $1,500–$5,000 per month. Professional website design projects range from $4,000–$12,000. We offer flexible pricing options and can work within your budget to create an effective marketing strategy. We provide transparent pricing upfront and ensure you understand the expected return on investment before you commit."
    },
    {
      question: "How long does it take to see results from conveyancing marketing?",
      answer: "Results timelines vary by service. Google Ads campaigns can deliver qualified enquiries immediately, often within the first few days of launching. SEO and local SEO strategies typically take 3–6 months to see significant results as we build your search rankings. Client education content and referral network building take time to build authority and relationships, with meaningful results typically appearing within 6–12 months. We set realistic expectations upfront and provide regular progress reports so you can see your marketing gaining traction."
    },
    {
      question: "Do you work with small conveyancing practices?",
      answer: "Absolutely. We work with conveyancing practices of all sizes, from solo practitioners to large multi-office firms. We understand that smaller practices often face unique challenges, including limited marketing budgets and competing against larger firms. We have services and pricing options specifically designed for solo and small practices, and we're experienced in helping smaller firms compete effectively by leveraging their advantages—personal service, local expertise, and flexibility—in their marketing."
    },
    {
      question: "How do you differentiate my practice from online conveyancing services?",
      answer: "We position you as the expert professional who offers personal service, local knowledge, risk management, and superior outcomes that online services simply cannot match. We create content that educates potential clients about the risks of online services, the value of professional conveyancing, and the peace of mind that comes from working with an experienced local conveyancer. We highlight your local market knowledge, your ability to handle complex situations, your personal availability, and the superior client experience you provide. Our messaging emphasizes value over price."
    },
    {
      question: "Can you help with building my referral network?",
      answer: "Yes, referral network building is a core component of our conveyancing marketing services. We help you identify potential referral partners (real estate agents, mortgage brokers, financial planners), create professional referral marketing materials, develop relationship-building strategies, and implement systems to track and manage referrals. We also help you create co-marketing opportunities and maintain ongoing communication with your referral partners. A strong referral network provides consistent, high-quality client flow with lower marketing costs."
    },
    {
      question: "How do you communicate my conveyancing costs to potential clients?",
      answer: "We help you communicate your fees clearly and transparently on your website and marketing materials. This includes creating pricing pages that explain your fee structure, what's included, and what represents value beyond the base fee. We find that transparency builds trust and pre-qualifies clients who value professional service. We also help you develop content that explains the cost of poor conveyancing (missed deadlines, legal issues, stress) to help clients understand the value of professional fees."
    },
    {
      question: "What metrics do you track to measure success?",
      answer: "We track comprehensive metrics including website traffic, search rankings for key conveyancing terms, enquiry volume and quality, enquiry source, cost per enquiry, enquiry-to-engagement conversion rate, return on advertising spend, and overall revenue growth. We provide monthly reports showing these metrics, trends over time, and the specific actions we're taking to improve performance. You'll always have clear visibility into your marketing performance and return on investment."
    },
    {
      question: "Do you provide ongoing support and optimisation?",
      answer: "Yes, conveyancing marketing requires ongoing management and optimisation. We continuously monitor your campaigns, test new strategies, refine your messaging, update your content, manage your online reputation, and adapt to changes in the competitive landscape. We provide ongoing support including monthly performance reviews, strategy adjustments, content updates, and responsive communication. Your marketing is a living system that we actively manage to ensure continued performance and growth."
    },
    {
      question: "How do you handle client education in marketing?",
      answer: "Client education is central to our conveyancing marketing approach. We create comprehensive resources including conveyancing process guides, FAQ sections, blog articles addressing common concerns, video content explaining complex topics, downloadable checklists and templates, and comparison content showing professional vs online services. This content educates potential clients, builds trust in your expertise, improves your search rankings, and helps clients self-qualify before contacting you. Educated clients are better clients."
    },
    {
      question: "How do you help me compete against larger conveyancing firms?",
      answer: "We help you leverage your competitive advantages: personal service, faster response times, local market knowledge, flexibility, and client relationships. We position you as the boutique alternative to impersonal larger firms. We create marketing that highlights what makes you different and better for certain types of clients. We use highly targeted local SEO and advertising to dominate your specific service area. And we help you build a strong local referral network that larger firms often struggle to maintain."
    },
    {
      question: "Can you help market commercial conveyancing services?",
      answer: "Yes, we have extensive experience marketing commercial conveyancing services. We understand that commercial clients have different needs, longer decision cycles, and higher value transactions. We create specialized content addressing commercial property considerations, develop targeted advertising for commercial clients, implement relationship marketing strategies with commercial real estate professionals, and position you as the commercial property expert. Commercial conveyancing marketing requires a sophisticated approach, and we deliver results."
    },
    {
      question: "How do you help with marketing investment property conveyancing?",
      answer: "Investment property conveyancing is a lucrative niche with strong potential for repeat business. We create specialized content addressing investor-specific concerns (due diligence, rental potential, tax implications), target advertising to property investors and investor groups, develop relationships with buyer's agents and investment property specialists, and position you as the investor-focused conveyancer. We also help you create resources and systems that provide exceptional value to investors, encouraging repeat business and referrals."
    },
    {
      question: "What role does referral marketing play in your strategy?",
      answer: "Referral marketing is crucial for conveyancing practices. We help you develop a comprehensive referral strategy including identifying high-potential referral partners, creating professional referral materials, developing relationship-building systems, implementing referral tracking, creating co-marketing opportunities, and maintaining ongoing communication. Real estate agents, mortgage brokers, and financial planners are natural referral partners, and we help you build mutually beneficial relationships that generate consistent, quality client flow."
    },
    {
      question: "How do you manage online reputation for conveyancing lawyers?",
      answer: "Online reputation is critical for conveyancing practices. We implement review generation systems to encourage satisfied clients to leave positive reviews, monitor review sites and respond promptly to reviews (positive and negative), develop reputation repair strategies if you have existing negative reviews, create positive PR and media coverage opportunities, and maintain consistent, professional online presence. A strong online reputation builds trust with potential clients and differentiates you from competitors."
    },
    {
      question: "Why should I choose Odin Digital for my conveyancing marketing?",
      answer: "We specialize in conveyancing lawyer marketing with over 190 practices served and proven results (295% average client increase, 48% cost reduction). We understand the unique challenges of conveyancing marketing, including competing with online services, inconsistent client flow, and client education needs. We provide integrated strategies combining SEO, Google Ads, content marketing, and referral building. We offer transparent pricing and reporting, and we're committed to your long-term success. Our expertise and track record make us the ideal partner for your practice growth."
    }
  ];

  const caseStudies = [
    {
      type: "Solo Conveyancer",
      challenge: "A solo conveyancer was struggling with inconsistent client flow, relying heavily on word-of-mouth referrals and experiencing unpredictable revenue month-to-month.",
      solution: "We implemented a comprehensive strategy including website redesign, local SEO optimisation, Google Ads campaigns, client education content, and a referral network development program.",
      results: "Within 12 months, monthly enquiries increased by 340%, the practice achieved 90% capacity utilisation, developed partnerships with 8 real estate agencies, and revenue grew by 285%.",
      metrics: { enquiries: "+340%", capacity: "90%", partners: "8", revenue: "+285%" }
    },
    {
      type: "Small Conveyancing Firm",
      challenge: "A 3-lawyer conveyancing firm wanted to expand but couldn't generate enough high-quality enquiries to justify hiring additional staff.",
      solution: "We created an integrated marketing system including SEO, Google Ads, referral marketing, and reputation management to generate consistent, quality client flow.",
      results: "Over 18 months, monthly enquiries increased by 425%, the firm hired 2 additional conveyancers, expanded to a second office location, and increased annual revenue by 380%.",
      metrics: { enquiries: "+425%", staff: "+2", offices: "+1", revenue: "+380%" }
    },
    {
      type: "Large Conveyancing Practice",
      challenge: "An established 12-lawyer practice was losing market share to online conveyancing services and needed to differentiate their professional services.",
      solution: "We repositioned the practice as the premium professional alternative with comprehensive client education content, thought leadership positioning, and strategic advertising.",
      results: "Within 24 months, market share increased by 18%, premium service revenue grew by 450%, client retention improved to 92%, and the practice became the recognised market leader.",
      metrics: { marketShare: "+18%", premiumRevenue: "+450%", retention: "92%", position: "#1" }
    },
    {
      type: "In-House Conveyancing Department",
      challenge: "A law firm's conveyancing department was underutilised, primarily serving existing clients, and missing opportunities for external client growth.",
      solution: "We developed a standalone conveyancing brand, implemented local SEO and Google Ads campaigns, and created systems to cross-sell conveyancing to the firm's other clients.",
      results: "Over 12 months, external enquiries increased by 520%, cross-sell conversion improved by 35%, departmental profitability increased by 240%, and the department became a major profit centre.",
      metrics: { enquiries: "+520%", crossSell: "+35%", profit: "+240%", status: "Profit Centre" }
    }
  ];

  return (
    <>
      <Helmet>
        <title>Conveyancing Lawyer Marketing | Attract Quality Clients & Grow Your Practice</title>
        <meta name="description" content="Conveyancing lawyer marketing. Client education, referral network building, Google Ads, local marketing. 190+ practices, 295% average client increase, 48% cost reduction." />
        <meta name="keywords" content="conveyancing lawyer marketing, conveyancing marketing, conveyancing client acquisition, conveyancing practice marketing, conveyancing SEO, conveyancing Google Ads" />
        <link rel="canonical" href="https://odindigital.com.au/industries/conveyancing-lawyers" />
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
                Conveyancing Marketing That Attracts Quality Clients
              </h1>
              
              <div className="prose prose-lg max-w-4xl mx-auto mb-8 px-4">
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                  Running a conveyancing law practice is demanding. You're managing complex transactions, navigating regulations, meeting tight deadlines, and keeping clients informed throughout the process. On top of all that, you need a steady stream of quality clients to keep your practice growing.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                  The problem is that most conveyancers struggle with inconsistent client flow. Some months are busy, other months are slow. You're competing with online conveyancing services that undercut on price. Your online presence isn't strong enough. And many potential clients don't understand why they need a conveyancer.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                  You need a marketing partner who understands conveyancing, who can educate clients about your value, and who can help you attract quality clients consistently. At Odin Digital, we're conveyancing lawyer marketing specialists. We've helped over 190 conveyancing practices attract more quality clients and grow their revenue. We specialise in client education, referral network building, Google Ads, local marketing, and integrated strategies that work for conveyancing practices. Whether you're a solo practitioner, small firm, or large practice, we deliver results.
                </p>
              </div>

              <Button 
                variant="cta" 
                size="xl" 
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 h-auto py-3 sm:py-4 whitespace-normal mb-8"
                onClick={openForm}
              >
                Schedule Free Conveyancing Marketing Consultation <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">The Conveyancing Lawyer Challenge</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Conveyancers face unique marketing challenges that generic marketing agencies simply don't understand.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
              {challenges.map((challenge, index) => (
                <Card key={index} className="p-6 sm:p-8 hover-scale">
                  <challenge.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-4">{challenge.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {challenge.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 px-4">
              <p className="text-lg sm:text-xl font-semibold mb-4">
                We're conveyancing marketing specialists who solve these exact challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">Why Conveyancing Lawyers Choose Odin Digital</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                We're not just another marketing agency. We're conveyancing marketing specialists with proven results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="p-6 sm:p-8 hover-scale">
                  <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
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

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">Our Conveyancing Marketing Services</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive marketing services designed specifically for conveyancing practices.
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

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">Our Conveyancing Marketing Process</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                A proven 6-phase process that delivers consistent, quality client flow.
              </p>
            </div>

            <div className="space-y-8 px-4">
              {process.map((step, index) => (
                <Card key={index} className="p-6 sm:p-8 hover-scale">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl sm:text-5xl font-black text-primary/20 flex-shrink-0">{step.number}</div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <p className="font-semibold mb-2 text-sm sm:text-base">What We Do:</p>
                          <p className="text-sm sm:text-base text-muted-foreground">{step.whatWeDo}</p>
                        </div>
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <p className="font-semibold mb-2 text-sm sm:text-base">What You Get:</p>
                          <p className="text-sm sm:text-base text-muted-foreground">{step.whatYouGet}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Types Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">Conveyancing Marketing for Different Practice Types</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Tailored marketing strategies for every type of conveyancing practice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 px-4">
              {practiceTypes.map((type, index) => (
                <Card key={index} className="p-6 sm:p-8 hover-scale">
                  <type.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">{type.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg mb-4">
                    <p className="font-semibold mb-2 text-sm sm:text-base">Our Solution:</p>
                    <p className="text-sm sm:text-base text-muted-foreground">{type.solution}</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-sm sm:text-base">Key Benefits:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-muted-foreground">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Marketing Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">Conveyancing Services Marketing</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Specialized marketing strategies for each conveyancing service you offer.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 px-4">
              {servicesMarketing.map((service, index) => (
                <Card key={index} className="p-6 sm:p-8 hover-scale">
                  <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg mb-4">
                    <p className="font-semibold mb-2 text-sm sm:text-base">Marketing Strategy:</p>
                    <p className="text-sm sm:text-base text-muted-foreground">{service.strategy}</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-sm sm:text-base">Key Benefits:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-muted-foreground">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">Conveyancing Marketing Case Studies</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                Real results from conveyancing practices just like yours.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 px-4">
              {caseStudies.map((study, index) => (
                <Card key={index} className="p-6 sm:p-8 hover-scale">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{study.type}</h3>
                    <div className="bg-destructive/10 p-4 rounded-lg mb-4">
                      <p className="font-semibold mb-2 text-sm sm:text-base">The Challenge:</p>
                      <p className="text-sm sm:text-base text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg mb-4">
                      <p className="font-semibold mb-2 text-sm sm:text-base">Our Solution:</p>
                      <p className="text-sm sm:text-base text-muted-foreground">{study.solution}</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-4">
                      <p className="font-semibold mb-2 text-sm sm:text-base">Results Achieved:</p>
                      <p className="text-sm sm:text-base text-muted-foreground">{study.results}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(study.metrics).map(([key, value], idx) => (
                        <div key={idx} className="text-center p-3 bg-background rounded-lg">
                          <div className="text-xl sm:text-2xl font-black text-primary">{value}</div>
                          <div className="text-xs sm:text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
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
                View More Case Studies <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4">Frequently Asked Questions</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Everything you need to know about conveyancing lawyer marketing.
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

        {/* Final CTA Section */}
        <section data-nav-contrast="dark" className="py-24 gradient-hero relative overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{ animationDelay: '3s' }} />
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 sm:mb-8 px-4">
              Ready to Attract More Quality Conveyancing Clients?
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Stop struggling with inconsistent client flow. Stop competing on price alone. Start attracting quality clients who value professional conveyancing services.
            </p>

            <p className="text-base sm:text-lg text-white/80 mb-8 max-w-3xl mx-auto px-4">
              Schedule your free, no-obligation conveyancing marketing consultation today. We'll analyse your current marketing, identify opportunities, and show you exactly how we can help you grow your practice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button 
                variant="cta" 
                size="xl" 
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 h-auto py-3 sm:py-4 whitespace-normal w-full sm:w-auto"
                onClick={openForm}
              >
                Schedule Your Free Conveyancing Marketing Consultation <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ConveyancingLawyers;