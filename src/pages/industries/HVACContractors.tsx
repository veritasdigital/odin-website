import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import {
  Search,
  MousePointerClick,
  Share2,
  Layout,
  TrendingUp,
  Users,
  DollarSign,
  Award,
  CheckCircle,
  Shield,
  Target,
  BarChart,
  Zap,
  Clock,
  Star,
  Phone,
  MapPin,
  Mail,
  ThermometerSnowflake,
  Flame,
  Wrench,
  Calendar,
  TrendingDown
} from "lucide-react";

const HVACContractors = () => {
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
        "description": "HVAC marketing specialist agency for contractors and heating/cooling businesses.",
        "sameAs": [
          "https://www.facebook.com/odindigital",
          "https://www.linkedin.com/company/odin-digital",
          "https://www.instagram.com/odindigital"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "email": "hello@odindigital.com.au"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://odindigital.com.au/industries/hvac-contractors#webpage",
        "url": "https://odindigital.com.au/industries/hvac-contractors",
        "name": "HVAC Marketing for Contractors | Consistent Leads & Local Dominance",
        "description": "HVAC marketing for contractors. SEO, Google Ads, local marketing, website design. 180+ contractors, 280% average lead increase, 45% cost reduction.",
        "isPartOf": { "@id": "https://odindigital.com.au/#website" },
        "inLanguage": "en-AU",
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01"
      },
      {
        "@type": "WebSite",
        "@id": "https://odindigital.com.au/#website",
        "url": "https://odindigital.com.au",
        "name": "Odin Digital",
        "description": "HVAC marketing specialist agency",
        "publisher": { "@id": "https://odindigital.com.au/#organization" }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/hvac-contractors#hvac-seo",
        "name": "HVAC SEO (Search Engine Optimisation)",
        "description": "SEO services for HVAC contractors to improve search rankings and generate organic leads.",
        "provider": { "@id": "https://odindigital.com.au/#organization" },
        "serviceType": "SEO"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/hvac-contractors#google-ads",
        "name": "Google Ads for HVAC Contractors",
        "description": "Google Ads management for HVAC contractors to generate qualified leads.",
        "provider": { "@id": "https://odindigital.com.au/#organization" },
        "serviceType": "PPC Advertising"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/hvac-contractors#local-marketing",
        "name": "Local Marketing and Google Maps",
        "description": "Local marketing and Google Maps optimisation for HVAC contractors.",
        "provider": { "@id": "https://odindigital.com.au/#organization" },
        "serviceType": "Local Marketing"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/hvac-contractors#web-design",
        "name": "Website Design and Optimisation",
        "description": "Professional website design for HVAC contractors optimised for lead generation.",
        "provider": { "@id": "https://odindigital.com.au/#organization" },
        "serviceType": "Web Design"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does HVAC marketing cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HVAC marketing costs vary depending on scope and goals. Google Ads might cost $1,000–$5,000/month. SEO and local marketing might cost $1,500–$5,000/month. Website design might cost $3,000–$10,000. We offer flexible pricing and can work within your budget."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google Ads can deliver results immediately. SEO and local SEO take 3–6 months to see significant results. We set realistic expectations upfront."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with small HVAC contractors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We work with HVAC contractors of all sizes, from solo operators to larger companies. We have services and pricing for every stage."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle seasonal fluctuations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We create marketing strategies that address seasonal patterns. We focus on heating in winter, cooling in summer, and maintenance year-round."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with emergency service marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We help emergency service providers be visible 24/7 through Google Ads, local SEO, and local directories."
            }
          }
        ]
      },
      {
        "@type": "AggregateRating",
        "@id": "https://odindigital.com.au/industries/hvac-contractors#rating",
        "ratingValue": "4.9",
        "ratingCount": "180",
        "bestRating": "5",
        "worstRating": "1"
      }
    ]
  };

  const faqs = [
    {
      question: "How much does HVAC marketing cost?",
      answer: "HVAC marketing costs vary depending on the scope of services and your business goals. Google Ads campaigns typically range from $1,000 to $5,000 per month in ad spend, plus management fees. SEO and local marketing services generally cost between $1,500 and $5,000 per month depending on market competitiveness and the level of optimization required. Website design projects typically range from $3,000 to $10,000, depending on complexity and features. We offer flexible pricing structures and can tailor packages to work within your budget while still delivering results. During your free consultation, we'll discuss your specific goals and recommend a marketing investment that aligns with your growth objectives and expected return on investment."
    },
    {
      question: "How long does it take to see results from HVAC marketing?",
      answer: "The timeline for results varies by marketing channel. Google Ads can start delivering qualified leads within days of launch, making it ideal for immediate lead generation. Local SEO and Google Maps optimisation typically show noticeable improvement within 2-3 months, with significant results in 3-6 months as your rankings improve. Organic SEO is a longer-term investment, typically taking 4-6 months to show substantial results, but delivering the best long-term ROI. Website design and optimisation improvements can boost conversion rates immediately upon launch. We provide realistic timelines during consultation and track progress with transparent monthly reporting so you can see exactly how your investment is performing."
    },
    {
      question: "Do you work with small HVAC contractors?",
      answer: "Absolutely! We work with HVAC contractors of all sizes, from solo operators and small family businesses to larger regional companies. We understand that every HVAC contractor starts somewhere, and we have services and pricing structures designed for businesses at every stage of growth. Whether you're just starting out and need basic local visibility, or you're an established business looking to scale, we can create a customised marketing strategy that fits your budget and goals. Many of our most successful long-term partnerships started with small contractors who have grown significantly with our marketing support."
    },
    {
      question: "How do you handle seasonal fluctuations in the HVAC industry?",
      answer: "Seasonal marketing strategy is critical for HVAC contractors, and we have extensive experience managing campaigns through both peak and shoulder seasons. During winter months (October–March), we focus heavily on heating system marketing, emphasising emergency repairs, system replacements, and maintenance. Summer (April–September) shifts to cooling services, air conditioning installations, and pre-season tune-ups. During shoulder seasons, we promote preventative maintenance contracts and system inspections. We adjust ad budgets, messaging, and targeting throughout the year to maximise ROI during peak seasons while maintaining consistent visibility year-round. This strategic approach helps smooth out seasonal revenue fluctuations and ensures you're capturing demand at the right time."
    },
    {
      question: "Can you help with emergency HVAC service marketing?",
      answer: "Yes, emergency service marketing is one of our specialties for HVAC contractors. We help emergency HVAC service providers maintain 24/7 visibility through always-on Google Ads campaigns targeting emergency keywords, optimised Google Maps listings that highlight your emergency services and hours, and local directory presence on platforms where people search for urgent help. We also implement click-to-call functionality, mobile-optimised websites for quick emergency requests, and special landing pages designed for emergency service conversion. Emergency HVAC marketing requires a different approach than scheduled services, and we have proven strategies to ensure you're visible when customers need urgent help."
    },
    {
      question: "Do you work with multi-location HVAC contractors?",
      answer: "Yes, we have extensive experience managing marketing for multi-location HVAC contractors. We create localised marketing strategies for each service area while maintaining brand consistency across all locations. This includes individual Google Maps listings for each location, location-specific landing pages optimised for local search, geo-targeted advertising campaigns, and centralised reporting that shows performance by location. Multi-location marketing requires sophisticated strategy and management, and we have the systems and expertise to help you dominate multiple markets simultaneously. We'll help you scale efficiently while maintaining strong performance across all your service areas."
    },
    {
      question: "How do you measure HVAC marketing success?",
      answer: "We track comprehensive metrics that directly tie to your business results. Primary KPIs include qualified leads generated (phone calls, form submissions, chat inquiries), cost per lead and return on ad spend, website traffic and conversion rates, Google Maps visibility and rankings, and ultimately, revenue attributed to marketing efforts. We provide transparent monthly reporting with clear dashboards showing exactly where your marketing investment is going and what results it's generating. We also track secondary metrics like website engagement, local search rankings, review acquisition, and competitive positioning. Every metric we track is designed to demonstrate tangible business value and inform ongoing optimization decisions."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "Our HVAC marketing partnerships include comprehensive ongoing support. This includes monthly strategy calls to review performance and discuss optimizations, continuous campaign monitoring and adjustment based on performance data, regular reporting with actionable insights, dedicated account management with direct access to your marketing team, and proactive recommendations for improvement and growth opportunities. We also provide seasonal planning to prepare for peak periods, competitive monitoring to track market changes, and regular website updates and optimisation. HVAC marketing isn't set-and-forget—it requires continuous refinement and expertise. We're committed to being a true partner in your business growth."
    },
    {
      question: "How do you handle HVAC reputation management and reviews?",
      answer: "Reputation management is crucial for HVAC contractors, and we offer comprehensive review generation and management services. This includes automated review request systems that make it easy for satisfied customers to leave reviews, review monitoring across Google, Facebook, and industry directories, response management for both positive and negative reviews, and reputation repair strategies for contractors dealing with negative feedback. We also help you showcase positive reviews on your website and marketing materials. Reviews are a critical ranking factor for local search and a major influence on customer decisions. Our systematic approach helps you build a strong online reputation that drives more business."
    },
    {
      question: "What makes your HVAC marketing different from other agencies?",
      answer: "Our HVAC marketing expertise is built on real industry experience and proven results. Unlike general marketing agencies, we specialise in home services and understand the unique challenges HVAC contractors face—seasonal demand fluctuations, emergency service marketing, competitive markets, and the need for consistent lead flow. We've worked with over 180 HVAC contractors and generated millions in revenue for our clients. Our integrated approach combines SEO, Google Ads, local marketing, and website optimisation into cohesive strategies that deliver measurable ROI. We're not just marketers—we're growth partners who understand your business and are committed to your success."
    },
    {
      question: "Do you guarantee leads or results?",
      answer: "While we can't guarantee specific numbers (as that would be unethical and unrealistic), we do guarantee our commitment to your success and continuous improvement. We have a proven track record with HVAC contractors, averaging 280% lead increases and 45% cost reductions across our client base. We provide transparent reporting, regular communication, and data-driven optimisations to maximise your results. If something isn't working, we pivot quickly and try new approaches. Our 95% client retention rate speaks to our commitment to delivering value. During your consultation, we'll discuss realistic expectations based on your market, competition, and investment level."
    },
    {
      question: "How do you handle competitor analysis for HVAC marketing?",
      answer: "Competitive analysis is a core part of our HVAC marketing strategy. We conduct thorough research on your local competitors, analysing their Google Ads strategies, SEO rankings and keyword targeting, website design and user experience, local search visibility and review profiles, and overall marketing positioning. This intelligence informs our strategy and helps us identify opportunities to differentiate your business and capture market share. We also provide ongoing competitive monitoring to track changes in your market and adjust strategies accordingly. Understanding your competitive landscape is essential for effective HVAC marketing, and we make it a priority in every campaign."
    },
    {
      question: "What are your contract terms?",
      answer: "We believe in earning your business every month, which is why we offer flexible month-to-month agreements for most services rather than locking you into long-term contracts. We do recommend minimum 3-6 month commitments for SEO services, as search engine optimisation requires time to deliver results, but we're transparent about timelines from the start. For website design projects, we work on a project basis with clear milestones and deliverables. Our goal is to deliver such exceptional results that you choose to continue working with us, not because you're contractually obligated. We're confident in our ability to deliver value and earn long-term partnerships with our HVAC contractor clients."
    },
    {
      question: "What kind of ROI can I expect from HVAC marketing?",
      answer: "ROI varies based on factors like your market competitiveness, service pricing, lifetime customer value, and marketing investment level. Our HVAC contractor clients typically see average returns of 3:1 to 5:1 (meaning $3-$5 in revenue for every $1 spent on marketing) within the first 6-12 months. Some contractors with high-ticket services like commercial installations or complete system replacements see even higher returns. Emergency service providers often see quick ROI from Google Ads. Long-term SEO investments typically deliver the highest ROI over time. During your consultation, we'll discuss realistic ROI expectations based on your specific business model, average job value, and market conditions."
    },
    {
      question: "What marketing technology and tools do you use?",
      answer: "We leverage industry-leading marketing technology and tools to deliver results for HVAC contractors. This includes Google Ads and Google Analytics for paid advertising and tracking, advanced SEO tools for keyword research and competitive analysis, call tracking software to monitor phone lead quality and attribution, CRM integration for lead management and follow-up, heat mapping and session recording to optimise website performance, and local SEO tools for Google Maps and directory management. We also use proprietary reporting dashboards that consolidate all your marketing data in one easy-to-understand view. Our technology stack ensures we have the data and insights needed to continuously improve your marketing performance."
    }
  ];

  return (
    <>
      <Helmet>
        <title>HVAC Marketing for Contractors | Consistent Leads & Local Dominance</title>
        <meta name="description" content="HVAC marketing for contractors. SEO, Google Ads, local marketing, website design. 180+ contractors, 280% average lead increase, 45% cost reduction." />
        <link rel="canonical" href="https://odindigital.com.au/industries/hvac-contractors" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <MarketingFormModal />
        <SideTab />

        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-charcoal mb-6 md:mb-8 leading-tight">
                HVAC Marketing That Delivers Consistent Leads
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-charcoal/80 max-w-5xl mx-auto leading-relaxed mb-8 md:mb-12">
                Running an HVAC contracting business is demanding. You're managing technicians, scheduling service calls, handling emergency requests, managing inventory, and trying to keep customers happy. On top of all that, you need a steady stream of leads to keep your business growing. The problem is that most HVAC contractors struggle with inconsistent lead flow. Some months are booked solid, other months you're scrambling to find work. You need a partner who understands the HVAC business, who can deliver consistent leads, and who can help you dominate your local market. At Odin Digital, we're HVAC marketing experts. We've helped over 180 HVAC contractors generate consistent leads and grow their revenue. We specialise in HVAC SEO, Google Ads, local marketing, and integrated strategies that work for heating and cooling businesses. Whether you're a residential contractor, commercial specialist, or mixed service provider, we deliver results.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button size="lg" className="w-full sm:w-auto text-base md:text-lg py-6 md:py-7 px-6 md:px-8" onClick={openForm}>
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-charcoal mb-4 md:mb-6">
                The HVAC Contractor Challenge
              </h2>
              <p className="text-lg md:text-xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
                The HVAC industry is more competitive than ever. With seasonal demand fluctuations, increasing competition from national chains, and customers who primarily find contractors through online search, HVAC contractors face unique marketing challenges that require specialised expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              <Card className="p-6 md:p-8 border border-charcoal/10 hover:border-primary/20 transition-colors">
                <TrendingDown className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2 md:mb-3">Inconsistent Lead Generation</h3>
                <p className="text-sm md:text-base text-charcoal/70">
                  Many HVAC contractors experience feast-or-famine cycles. Busy during peak seasons, struggling during shoulder months. You need consistent, year-round lead flow to stabilise revenue and maintain your team.
                </p>
              </Card>

              <Card className="p-8 border border-charcoal/10 hover:border-primary/20 transition-colors">
                <Search className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">Online Visibility Problem</h3>
                <p className="text-charcoal/70">
                  Over 80% of customers find HVAC contractors through Google search and Google Maps. If you're not ranking in the top 3 positions, you're invisible to most potential customers, especially during emergency service searches.
                </p>
              </Card>

              <Card className="p-8 border border-charcoal/10 hover:border-primary/20 transition-colors">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">Marketing Knowledge Gap</h3>
                <p className="text-charcoal/70">
                  You're an HVAC expert, not a marketing specialist. Understanding SEO, Google Ads, conversion optimisation, and digital strategy isn't your job. You need experts who understand both HVAC and marketing.
                </p>
              </Card>

              <Card className="p-8 border border-charcoal/10 hover:border-primary/20 transition-colors">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">Seasonal Fluctuations</h3>
                <p className="text-charcoal/70">
                  HVAC demand shifts dramatically between heating and cooling seasons. Your marketing needs to adapt—promoting the right services at the right time to capture peak season demand and maintain off-season revenue.
                </p>
              </Card>

              <Card className="p-8 border border-charcoal/10 hover:border-primary/20 transition-colors">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">National Chain Competition</h3>
                <p className="text-charcoal/70">
                  Large franchise chains with massive marketing budgets dominate search results. As an independent contractor, you need smart, strategic marketing to compete effectively and win local market share.
                </p>
              </Card>

              <Card className="p-8 border border-charcoal/10 hover:border-primary/20 transition-colors">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-charcoal mb-3">Quality Lead Challenge</h3>
                <p className="text-charcoal/70">
                  Not all leads are created equal. You need qualified customers in your service area who can afford your services, not tyre-kickers, price shoppers, or people outside your territory.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-charcoal mb-6">
                These challenges are exactly why we created our specialised HVAC marketing services.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 max-w-4xl mx-auto">
                We're HVAC marketing specialists who understand the heating and cooling industry inside out. We know your challenges, your customers, and exactly what it takes to generate consistent, high-quality leads for HVAC contractors.
              </p>
              <Button size="lg" onClick={openForm}>
                Schedule Your Free Strategy Call
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-charcoal mb-4 md:mb-6">
                Why HVAC Contractors Choose Odin Digital
              </h2>
              <p className="text-lg md:text-xl text-charcoal/70 max-w-4xl mx-auto">
                We're not a general marketing agency trying to work with every industry. We specialise in home services, with deep expertise in HVAC contractor marketing. Here's what sets us apart.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <Wrench className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">HVAC Marketing Expertise</h3>
                <p className="text-muted-foreground mb-4">
                  We've worked with over 180 HVAC contractors across residential, commercial, and mixed service models. We understand your industry, your customers, your sales cycles, and the specific marketing strategies that work for heating and cooling businesses.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Seasonal marketing strategies for heating and cooling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Emergency service marketing expertise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Commercial and residential HVAC specialisation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Proven track record with 180+ HVAC contractors</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Consistent Lead Generation</h3>
                <p className="text-muted-foreground mb-4">
                  Our clients average a 280% increase in qualified leads within the first 6 months. We don't just drive traffic—we generate actual phone calls, form submissions, and quote requests from customers ready to book HVAC services.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">280% average lead increase in 6 months</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">45% average cost-per-lead reduction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Qualified leads from customers in your service area</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Transparent tracking and reporting</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Local Dominance Strategy</h3>
                <p className="text-muted-foreground mb-4">
                  We help HVAC contractors dominate their local markets through strategic SEO, Google Maps optimisation, and geo-targeted advertising. When someone in your service area searches for HVAC services, you'll be the contractor they find.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Google Maps optimisation for local visibility</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Local SEO targeting your service areas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Geo-targeted Google Ads campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Review generation and reputation management</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Integrated Marketing Approach</h3>
                <p className="text-muted-foreground mb-4">
                  We don't just do SEO or just Google Ads. We create integrated HVAC marketing strategies that combine multiple channels for maximum impact. SEO for long-term organic growth, Google Ads for immediate leads, local marketing for dominance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Multi-channel strategy (SEO, Google Ads, local, social)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Website optimised for lead conversion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Coordinated seasonal campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Unified messaging and brand consistency</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <DollarSign className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Cost-Effective Lead Generation</h3>
                <p className="text-muted-foreground mb-4">
                  Our clients see an average 45% reduction in cost per lead compared to their previous marketing efforts. We optimise every dollar of your marketing budget to generate maximum leads at the lowest possible cost.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Advanced bid optimisation for Google Ads</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Conversion rate optimisation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Negative keyword management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Quality score improvement strategies</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <Layout className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Professional Website Optimisation</h3>
                <p className="text-muted-foreground mb-4">
                  Your website is your 24/7 salesperson. We design and optimise HVAC contractor websites that convert visitors into leads through strategic design, compelling copy, clear calls-to-action, and seamless mobile experience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Mobile-optimised responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Click-to-call and instant quote request forms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Service-specific landing pages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Fast loading speeds and SEO optimisation</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <BarChart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Transparent Reporting</h3>
                <p className="text-muted-foreground mb-4">
                  You'll never wonder if your marketing is working. We provide comprehensive monthly reports showing exactly how many leads you're getting, what they're costing, and how your marketing investment is performing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Monthly performance reports and strategy calls</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Real-time dashboard access 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Clear metrics tied to business results</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Call tracking and lead attribution</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Proven Results</h3>
                <p className="text-muted-foreground mb-4">
                  We don't just promise results—we deliver them. With 180+ HVAC contractors served, 280% average lead increase, 45% cost reduction, and a 95% client retention rate, our track record speaks for itself.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">180+ HVAC contractors successfully served</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">95% client retention rate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Millions in revenue generated for clients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Case studies and client testimonials</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button variant="cta" size="xl" onClick={openForm}>
                Schedule Your Free HVAC Marketing Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                Our HVAC Marketing Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Comprehensive HVAC marketing solutions designed specifically for heating and cooling contractors. From SEO to Google Ads to website design, we cover everything you need to generate consistent leads and grow your business.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mb-12">
              <Card className="p-8 md:p-12 hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Search className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-foreground mb-4">HVAC SEO (Search Engine Optimisation)</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Dominate local search results for HVAC keywords. Our specialised HVAC SEO strategies help you rank #1 on Google for searches like "HVAC contractor near me," "air conditioning repair," and "heating system installation" in your service areas.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Local keyword research and optimisation</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">On-page SEO and technical optimisation</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Content creation for HVAC services</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Local business citation building</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Link building and authority development</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Seasonal content strategy</span>
                      </div>
                    </div>
                    <p className="text-foreground font-semibold mb-2">Expected Results:</p>
                    <p className="text-muted-foreground">
                      First-page rankings for primary HVAC keywords within 3-6 months, 200-400% increase in organic website traffic, consistent flow of qualified organic leads, reduced dependence on paid advertising over time.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 md:p-12 hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MousePointerClick className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-foreground mb-4">Google Ads for HVAC Contractors</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Get instant visibility and qualified HVAC leads through strategic Google Ads campaigns. We manage every aspect—from keyword selection to ad copywriting to bid optimisation—to generate maximum leads at the lowest possible cost.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">High-intent keyword targeting</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Conversion-optimised ad copy</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Geo-targeting to your service areas</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Advanced bid management</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Call extensions and tracking</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Continuous optimisation and A/B testing</span>
                      </div>
                    </div>
                    <p className="text-foreground font-semibold mb-2">Expected Results:</p>
                    <p className="text-muted-foreground">
                      Immediate qualified lead generation starting within days, 3:1 to 5:1 ROI on ad spend for most contractors, 30-50 qualified leads per month (depending on budget), full transparency on cost per lead and conversion metrics.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 md:p-12 hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-foreground mb-4">Local Marketing and Google Maps</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Dominate the "near me" searches and Google Maps results that drive most HVAC leads. We optimise your Google Business Profile, manage your online reputation, and ensure you're visible when customers search for HVAC contractors in your area.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Google Business Profile optimisation</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Local citation building and management</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Review generation and reputation management</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Local directory submissions</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">NAP (Name, Address, Phone) consistency</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Google Maps ranking optimisation</span>
                      </div>
                    </div>
                    <p className="text-foreground font-semibold mb-2">Expected Results:</p>
                    <p className="text-muted-foreground">
                      Top 3 Google Maps rankings for local HVAC searches, 50-100+ reviews within 6 months, increased visibility in "near me" and local search results, more phone calls and map directions from potential customers.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 md:p-12 hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Layout className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-foreground mb-4">Website Design and Optimisation</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Your website is often the first impression potential customers have of your HVAC business. We design professional, mobile-optimised websites that convert visitors into leads through strategic design, clear calls-to-action, and seamless user experience.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Mobile-responsive design</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Fast loading speeds</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Clear call-to-action placement</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Service-specific landing pages</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Click-to-call and online booking</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">SEO-optimised structure and content</span>
                      </div>
                    </div>
                    <p className="text-foreground font-semibold mb-2">Expected Results:</p>
                    <p className="text-muted-foreground">
                      Professional brand image that builds trust, 30-50% increase in website conversion rate, improved user experience on all devices, better search engine rankings due to optimised technical foundation.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 md:p-12 hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Share2 className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-foreground mb-4">Social Media Marketing</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Build brand awareness and engage with your local community through strategic social media marketing. We manage your Facebook, Instagram, and other social platforms to showcase your work, share customer testimonials, and stay top-of-mind with potential customers.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Content creation and scheduling</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Facebook and Instagram advertising</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Community engagement and response management</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Before/after project showcasing</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Seasonal campaign promotion</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Customer testimonial sharing</span>
                      </div>
                    </div>
                    <p className="text-foreground font-semibold mb-2">Expected Results:</p>
                    <p className="text-muted-foreground">
                      Increased local brand awareness and recognition, engaged community of potential customers, additional lead generation channel, enhanced reputation through social proof.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 md:p-12 hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-foreground mb-4">Email Marketing and Follow-Up</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Stay connected with past customers and nurture new leads through strategic email marketing. We create automated email sequences, seasonal promotion campaigns, and maintenance reminder systems that keep your business top-of-mind.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated lead nurture sequences</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Seasonal promotion campaigns</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Maintenance reminder systems</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Customer re-engagement campaigns</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Newsletter design and distribution</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Performance tracking and optimisation</span>
                      </div>
                    </div>
                    <p className="text-foreground font-semibold mb-2">Expected Results:</p>
                    <p className="text-muted-foreground">
                      Increased repeat business and customer lifetime value, more booked maintenance contracts, higher conversion rate on leads through nurture sequences, additional revenue from seasonal campaigns.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 md:p-12 hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Star className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-foreground mb-4">Reputation Management</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Your online reputation directly impacts your lead generation. We help you systematically generate positive reviews, manage your reputation across review platforms, and respond professionally to all feedback.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated review request systems</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Multi-platform review monitoring</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Professional review response management</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Negative review mitigation strategies</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Review showcase integration on website</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Reputation tracking and reporting</span>
                      </div>
                    </div>
                    <p className="text-foreground font-semibold mb-2">Expected Results:</p>
                    <p className="text-muted-foreground">
                      4.5+ star average rating across platforms, 50-100+ new reviews within 6 months, improved Google Maps rankings due to review volume and quality, higher conversion rates from improved reputation.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="cta" size="xl" onClick={openForm}>
                Get Your Free HVAC Marketing Strategy
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section - Continuing in next part */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                Our HVAC Marketing Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Our proven 6-phase process transforms HVAC contractor marketing from frustrating guesswork into predictable lead generation. Here's exactly how we work together to grow your business.
              </p>
            </div>

            <div className="space-y-8">
              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">Discovery and Analysis</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      We start by thoroughly understanding your business, goals, and current marketing situation through comprehensive analysis.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Business goals and target customer analysis</span>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Current marketing performance audit</span>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Competitive landscape research</span>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Service area and market opportunity assessment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">Strategy Development</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      We create a customised HVAC marketing strategy tailored to your specific business model, goals, and budget.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Channel selection and budget allocation</span>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Keyword targeting and messaging strategy</span>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Seasonal campaign planning</span>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">KPI definition and success metrics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">Implementation</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      We execute your strategy with precision, setting up all marketing channels and optimising for maximum performance.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Website optimisation and landing page creation</span>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Google Ads campaign setup and launch</span>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">SEO foundation building</span>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Local marketing and Google Maps optimisation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">Lead Generation and Optimisation</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Your campaigns go live and we continuously monitor, test, and optimise to improve lead quality and reduce costs.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Daily performance monitoring</span>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">A/B testing and conversion optimisation</span>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Bid adjustments and budget optimisation</span>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Quality score improvements</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      5
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">Reporting and Communication</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Complete transparency through detailed reporting and regular strategy calls so you always know exactly how your marketing is performing.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Monthly performance reports</span>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Regular strategy and review calls</span>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Real-time dashboard access</span>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Proactive recommendations and insights</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      6
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">Growth and Scaling</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      As your marketing performs, we identify opportunities to scale winning strategies and expand into new channels for continued growth.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Budget scaling on high-performing campaigns</span>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Geographic expansion opportunities</span>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">New service promotion strategies</span>
                      </div>
                      <div className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Additional channel integration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Types Section */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                HVAC Marketing for Different Business Types
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Every HVAC business is different. We tailor our marketing strategies to your specific business model and customer base.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Residential HVAC Contractors</h3>
                <p className="text-muted-foreground mb-4">
                  If you focus on residential heating and cooling, we help you dominate local search results for homeowner searches like "AC repair near me," "furnace installation," and "HVAC maintenance." Our strategies target homeowners making buying decisions, not just researchers.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Homeowner-focused keyword targeting</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Local neighbourhood targeting</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Seasonal campaign focus (heating/cooling)</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Commercial HVAC Contractors</h3>
                <p className="text-muted-foreground mb-4">
                  Commercial HVAC marketing requires a different approach. We help you reach facility managers, property managers, and business owners searching for commercial HVAC services, system replacements, and maintenance contracts.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Commercial keyword targeting</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">B2B-focused messaging and landing pages</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">LinkedIn and B2B channel integration</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <Wrench className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Mixed Service Providers</h3>
                <p className="text-muted-foreground mb-4">
                  If you serve both residential and commercial clients, we create segmented marketing strategies that target both audiences effectively without cannibalising budget or confusing messaging.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Separate campaign structures for each audience</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Targeted messaging for residential vs commercial</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Budget allocation based on profitability</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Emergency Service Specialists</h3>
                <p className="text-muted-foreground mb-4">
                  If emergency HVAC service is a core part of your business, we ensure you're visible 24/7 for urgent searches like "emergency AC repair" and "furnace not working." Always-on visibility when customers need you most.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">24/7 Google Ads campaigns</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Emergency keyword targeting</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Mobile-optimised click-to-call functionality</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Maintenance Contract Specialists</h3>
                <p className="text-muted-foreground mb-4">
                  If recurring maintenance contracts are your priority, we help you attract customers searching for HVAC maintenance plans, service agreements, and preventative maintenance rather than one-time repairs.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Maintenance plan promotion campaigns</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Email marketing for contract renewals</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Customer lifetime value optimisation</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Seasonal Strategy Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                Seasonal HVAC Marketing Strategy
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                HVAC demand shifts dramatically throughout the year. Our seasonal marketing strategies ensure you're promoting the right services at the right time to maximise revenue year-round.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <ThermometerSnowflake className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Winter Heating Season (October–March)</h3>
                <p className="text-muted-foreground mb-4">
                  As temperatures drop, heating becomes the priority. We shift your marketing focus to furnace services, emergency heating repairs, and system replacements.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Marketing Focus:</h4>
                    <p className="text-sm text-muted-foreground">Furnace repair, heating system installation, emergency heat loss service, heat pump maintenance</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Key Messages:</h4>
                    <p className="text-sm text-muted-foreground">"Stay warm all winter," "Emergency heating repair," "Don't freeze—call now," "New furnace installation specials"</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <Flame className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Summer Cooling Season (April–September)</h3>
                <p className="text-muted-foreground mb-4">
                  Summer heat drives cooling demand. We pivot your marketing to air conditioning services, AC installations, and emergency cooling repairs.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Marketing Focus:</h4>
                    <p className="text-sm text-muted-foreground">AC repair, air conditioning installation, emergency cooling service, AC tune-ups</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Key Messages:</h4>
                    <p className="text-sm text-muted-foreground">"Beat the heat," "Emergency AC repair," "New AC installation specials," "Pre-season tune-up offers"</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Shoulder Seasons</h3>
                <p className="text-muted-foreground mb-4">
                  During spring and fall transition periods, we focus on preventative maintenance, system inspections, and maintenance contract sales to maintain steady revenue.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Marketing Focus:</h4>
                    <p className="text-sm text-muted-foreground">Preventative maintenance, system inspections, maintenance contract sales, air quality services</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Key Messages:</h4>
                    <p className="text-sm text-muted-foreground">"Prepare for the season ahead," "Maintenance specials," "Prevent costly breakdowns," "Join our maintenance plan"</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Year-Round Strategies</h3>
                <p className="text-muted-foreground mb-4">
                  Certain services and marketing tactics work year-round. We maintain consistent visibility for these evergreen opportunities while adapting seasonal messaging.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Constant Focus:</h4>
                    <p className="text-sm text-muted-foreground">Maintenance contracts, indoor air quality, system replacements, energy efficiency upgrades</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Always-On Tactics:</h4>
                    <p className="text-sm text-muted-foreground">Google Maps optimisation, review generation, SEO, reputation management, email nurture campaigns</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions HVAC contractors ask about our marketing services
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
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

        {/* Case Studies Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                HVAC Marketing Case Studies
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Real results from real HVAC contractors. Here's how our marketing strategies have helped contractors like you grow their businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Residential HVAC Contractor</h3>
                    <p className="text-sm text-muted-foreground">Perth, WA</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">The Challenge:</h4>
                    <p className="text-muted-foreground text-sm">
                      This family-owned HVAC contractor was struggling with inconsistent lead flow and relying entirely on referrals and word-of-mouth. They had no online presence and were being dominated by larger competitors in local search results.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Our Solution:</h4>
                    <p className="text-muted-foreground text-sm">
                      We built a new website optimised for lead generation, launched targeted Google Ads campaigns for heating and cooling services, optimised their Google Business Profile for local search, and implemented a systematic review generation strategy.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Results Achieved:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">340% increase in monthly qualified leads (from 15 to 66)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">First-page Google rankings for 28 local HVAC keywords</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">4.8-star rating with 92 Google reviews</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">52% reduction in cost per lead through optimisation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Commercial HVAC Contractor</h3>
                    <p className="text-sm text-muted-foreground">Melbourne, VIC</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">The Challenge:</h4>
                    <p className="text-muted-foreground text-sm">
                      This commercial HVAC specialist wanted to expand into new markets but was virtually invisible in search results. Their existing website wasn't converting, and they had no digital marketing strategy.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Our Solution:</h4>
                    <p className="text-muted-foreground text-sm">
                      We created a commercial-focused website with case study content, launched targeted Google Ads for commercial keywords, developed service-area-specific landing pages, and implemented a LinkedIn advertising strategy.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Results Achieved:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Expanded into 3 new metropolitan markets</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Generated 42 qualified commercial leads in first 6 months</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">$2.4M in new commercial project revenue</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">7.2:1 ROI on marketing investment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Emergency Service Provider</h3>
                    <p className="text-sm text-muted-foreground">Brisbane, QLD</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">The Challenge:</h4>
                    <p className="text-muted-foreground text-sm">
                      This 24/7 emergency HVAC contractor was losing emergency calls to competitors because they weren't visible for urgent searches. They needed immediate results and round-the-clock visibility.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Our Solution:</h4>
                    <p className="text-muted-foreground text-sm">
                      We launched 24/7 Google Ads campaigns targeting emergency keywords, optimised their website for mobile with prominent click-to-call buttons, created emergency service landing pages, and implemented call tracking for attribution.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Results Achieved:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">450% increase in emergency service calls</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Top 3 visibility for all emergency HVAC keywords</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">38% increase in average emergency job value</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">4.3:1 ROI within first 90 days</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Maintenance-Focused Contractor</h3>
                    <p className="text-sm text-muted-foreground">Sydney, NSW</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">The Challenge:</h4>
                    <p className="text-muted-foreground text-sm">
                      This HVAC contractor wanted to shift from one-time repairs to recurring maintenance contracts for predictable revenue, but had no systematic way to sell and manage contracts.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Our Solution:</h4>
                    <p className="text-muted-foreground text-sm">
                      We created maintenance plan landing pages with clear value propositions, launched Google Ads targeting maintenance keywords, implemented email nurture campaigns for maintenance renewals, and developed a customer retention strategy.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Results Achieved:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">287 new maintenance contracts signed in 12 months</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">$248K in recurring annual revenue added</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">84% contract renewal rate in year two</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Stabilised cash flow and predictable revenue</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -top-20 -right-20"></div>
            <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -bottom-20 -left-20"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 md:mb-8">
              Ready to Generate Consistent HVAC Leads?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
              Stop struggling with inconsistent lead flow and seasonal revenue swings. Let's build a marketing strategy that delivers qualified HVAC leads month after month, regardless of the season. Schedule your free consultation and discover exactly how we can help you dominate your local HVAC market.
            </p>
            <p className="text-base md:text-lg text-white/80 mb-8 md:mb-12">
              During your free strategy call, we'll analyse your current marketing, identify your biggest opportunities, show you exactly what's working for your competitors, and provide a customised growth plan for your HVAC business. No obligation, no pressure—just actionable insights you can use immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-20 md:mb-0">
              <Button size="lg" onClick={openForm} className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 text-base md:text-lg py-6 md:py-7 px-6 md:px-8">
                Schedule Free Consultation
              </Button>
              <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto text-base md:text-lg py-6 md:py-7 px-6 md:px-8">
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-3 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50 shadow-lg">
          <Button size="lg" onClick={openForm} className="w-full text-base py-6">
            <Phone className="w-5 h-5 mr-2" />
            Get Free Consultation
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HVACContractors;