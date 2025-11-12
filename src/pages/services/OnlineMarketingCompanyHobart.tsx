import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { SideTab } from "@/components/SideTab";
import { 
  Target, TrendingDown, BarChart, Layers, Clock, Users,
  CheckCircle2, Shield, Eye, MapPin, Award
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OnlineMarketingCompanyHobart = () => {
  const { openForm } = useMarketingForm();

  const painPoints = [
    {
      icon: MapPin,
      title: "Mainland Ignorance",
      description: "Generic agencies copy-paste mainland strategies that ignore Hobart's unique market dynamics, wasting your budget."
    },
    {
      icon: TrendingDown,
      title: "Vanity Metrics Trap",
      description: "Agencies brag about likes, impressions, and traffic but deliver zero leads, sales, or revenue growth."
    },
    {
      icon: BarChart,
      title: "No ROI Tracking",
      description: "Most agencies can't tell you cost per lead, cost per sale, or ROAS—leaving you blind to what's actually working."
    },
    {
      icon: Layers,
      title: "Siloed Services",
      description: "Your SEO, Google Ads, and Facebook Ads teams don't talk to each other, creating fragmented campaigns."
    },
    {
      icon: Clock,
      title: "Slow Results, No Accountability",
      description: "Agencies lock you into 12-month contracts, deliver slow results, and blame the 'algorithm' when they fail."
    },
    {
      icon: Users,
      title: "Junior Account Managers",
      description: "Your budget is managed by inexperienced juniors while senior strategists work on bigger clients."
    }
  ];

  const solutions = [
    {
      title: "Integrated Strategy: All Channels Working Together",
      description: "We don't do siloed campaigns. Your SEO, Google Ads, Meta Ads, and website work together in a unified strategy designed to maximize conversions and minimize wasted spend."
    },
    {
      title: "Hobart-Specific Targeting: Precision in a Unique Market",
      description: "We understand Hobart's tourism-driven economy, seasonal fluctuations, and local demographics. We build campaigns that target the right people at the right time."
    },
    {
      title: "Conversion-First Web Design: Your Website as a Sales Tool",
      description: "We build high-converting, mobile-optimized websites designed to turn traffic into leads and sales—not just pretty portfolios."
    },
    {
      title: "Full Transparency & Accountability: No Lock-In Contracts",
      description: "We provide monthly reporting with real metrics (cost per lead, ROAS, revenue attribution). If we're not delivering ROI, you can leave—no penalties, no lock-ins."
    },
    {
      title: "Senior Strategist Management: Experienced Hands on Your Budget",
      description: "Your campaigns are managed by senior strategists with 10+ years of experience, not junior account managers learning on your dollar."
    }
  ];

  const whyChoose = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "$574M+ in client revenue generated. We have the results to back up our claims."
    },
    {
      icon: Shield,
      title: "No Lock-In Contracts",
      description: "Month-to-month agreements. Leave anytime if we're not delivering ROI."
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description: "Real-time dashboards, monthly reporting, and complete visibility into campaign performance."
    },
    {
      icon: MapPin,
      title: "Hobart Market Expertise",
      description: "We understand the nuances of the Tasmanian market, from tourism peaks to local demographics."
    },
    {
      icon: Target,
      title: "Local Focus, National Expertise",
      description: "We combine local market knowledge with national-level strategy and execution."
    },
    {
      icon: CheckCircle2,
      title: "Results-Driven Campaigns",
      description: "Every campaign is built around measurable outcomes—leads, sales, and revenue, not vanity metrics."
    }
  ];

  const faqs = [
    {
      question: "How much does digital marketing cost in Hobart?",
      answer: "Digital marketing costs in Hobart vary depending on your industry, competition, and goals. Most Hobart businesses invest $2,000 - $8,000 per month for comprehensive marketing (SEO, Google Ads, Meta Ads, management fees). Our team will provide a detailed quote during your free audit."
    },
    {
      question: "How long does it take to see results from online marketing?",
      answer: "Google Ads and Meta Ads deliver immediate results (leads/sales within days). SEO typically takes 3-6 months for significant results. We focus on a blended strategy to deliver both short-term wins and long-term growth."
    },
    {
      question: "Do you work with small Hobart businesses or only large businesses?",
      answer: "We work with Hobart businesses of all sizes, from solo operators to multi-location companies, offering flexible pricing and strategies designed to maximize ROI."
    },
    {
      question: "How do you measure ROI for online marketing?",
      answer: "We implement advanced conversion tracking (Google Analytics, CRM integration) to measure cost per lead, cost per sale, and return on ad spend. You will know exactly how much revenue your marketing is generating."
    },
    {
      question: "Can you help with website design and development?",
      answer: "Absolutely. We build high-converting websites that are optimized for speed, mobile, and SEO, ensuring your marketing efforts are not wasted on a poor website."
    },
    {
      question: "Do you only target Hobart or can you target all of Tasmania?",
      answer: "We can target Hobart only, Southern Tasmania, or all of Tasmania—whatever makes sense for your business. We recommend starting hyper-local (Hobart + 20km) and expanding once we've proven ROI."
    },
    {
      question: "What industries do you work with in Hobart?",
      answer: "We work with all industries, including tourism, professional services (lawyers, accountants), healthcare (dentists, physios), retail, hospitality, and trades."
    },
    {
      question: "How do you combat the seasonal fluctuations in the Hobart market?",
      answer: "We actively adjust campaigns for seasonal fluctuations, increasing budget and targeting during tourism peaks (summer) and shifting focus to local, essential services during quieter periods."
    },
    {
      question: "Do you offer a performance guarantee?",
      answer: "We offer the best guarantee in the industry: No Lock-In Contracts. If we are not delivering a positive ROI, you are free to leave at any time. We put the risk on us, not you."
    },
    {
      question: "Do you understand the unique challenges of the Tasmanian market?",
      answer: "Yes. We understand the importance of local community, the impact of tourism, and the need for a nuanced strategy that respects the Tasmanian economy, unlike generic mainland agencies."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Performance-focused digital marketing agency specializing in online marketing for Hobart and Tasmanian businesses. $574M+ in client revenue. No lock-in contracts.",
        "founder": {
          "@type": "Person",
          "name": "Lucas Durante"
        },
        "slogan": "No Lock-In Contracts. Just Results.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+61-XXX-XXX-XXX",
          "contactType": "Sales",
          "areaServed": "AU",
          "availableLanguage": "English"
        },
        "sameAs": []
      },
      {
        "@type": "LocalBusiness",
        "name": "Odin Digital - Online Marketing Hobart",
        "image": "https://growth-conduit-central.lovable.app/hobart-online-marketing.jpg",
        "@id": "https://growth-conduit-central.lovable.app/online-marketing-company-hobart",
        "url": "https://growth-conduit-central.lovable.app/online-marketing-company-hobart",
        "telephone": "+61-XXX-XXX-XXX",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Servicing Hobart and Tasmania",
          "addressLocality": "Hobart",
          "addressRegion": "TAS",
          "postalCode": "7000",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -42.8821,
          "longitude": 147.3272
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
        "sameAs": []
      },
      {
        "@type": "Service",
        "serviceType": "Online Marketing Hobart",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "City",
          "name": "Hobart",
          "containedIn": {
            "@type": "State",
            "name": "Tasmania"
          }
        },
        "description": "Integrated online marketing services for Hobart and Tasmanian businesses, focused on leads, sales, and revenue growth."
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Fabienne Costa"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
        "publisher": {
          "@type": "Organization",
          "name": "Odin Digital"
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Online Marketing Company Hobart | Digital Marketing Agency Tasmania | Odin Digital</title>
        <meta name="description" content="Stop wasting money on generic strategies. Odin Digital provides integrated online marketing services in Hobart focused on leads, sales, and revenue—not vanity metrics." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <SideTab />

        {/* Breadcrumb Navigation */}
        <section className="pt-8 pb-4 bg-background">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <span>/</span>
              <a href="/hobart" className="hover:text-primary transition-colors">Hobart</a>
              <span>/</span>
              <span className="text-foreground">Online Marketing Company Hobart</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <ServiceHero
          h1="Online Marketing Company Hobart"
          subheadline={
            <>
              Stop Wasting Your Budget on Mainland Strategies. Start Dominating Tasmania with Online Marketing That Drives Real Revenue.
            </>
          }
        />

        <div className="container mx-auto px-6 py-12">
          {/* Trust Signals */}
          <div className="text-center mb-16">
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">$574M+</div>
                <div className="text-muted-foreground">Client Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">95%</div>
                <div className="text-muted-foreground">Client Retention Rate</div>
              </div>
            </div>
            <Button 
              size="lg" 
              onClick={openForm}
              className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white"
            >
              Get Your FREE Hobart Online Marketing Audit →
            </Button>
          </div>

          {/* Problem Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Most Digital Marketing Agencies Fail Hobart Businesses
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Hobart businesses waste thousands every month on digital marketing in Hobart that looks impressive on paper but delivers nothing to the bottom line. Here's why most agencies fail.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {painPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <Card key={index} className="p-6">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </Card>
                );
              })}
            </div>
            <div className="text-center">
              <Button 
                size="lg" 
                onClick={openForm}
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white"
              >
                Stop the Marketing Bleed: Talk to a Hobart Expert →
              </Button>
            </div>
          </section>

          {/* Solution Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How We Dominate Online Marketing for Hobart Businesses
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide digital marketing services in Hobart that eliminate waste and build integrated campaigns designed to drive leads, sales, appointments, and revenue for Hobart businesses.
              </p>
            </div>
            <div className="space-y-6 mb-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button 
                size="lg" 
                onClick={openForm}
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white"
              >
                See Our Digital Marketing Packages for Hobart →
              </Button>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Hobart Businesses Choose Odin Digital
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We are not a generalist agency that dabbles in digital marketing. We are specialists who understand how to dominate local markets like Hobart.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {whyChoose.map((point, index) => {
                const Icon = point.icon;
                return (
                  <Card key={index} className="p-6 text-center">
                    <Icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </Card>
                );
              })}
            </div>
            <div className="text-center">
              <Button 
                size="lg" 
                onClick={openForm}
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white"
              >
                Talk to a Hobart Digital Marketing Specialist →
              </Button>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                FAQs: Your Questions About Online Marketing in Hobart Answered
              </h2>
            </div>
            <div className="max-w-3xl mx-auto mb-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="text-center">
              <Button 
                size="lg" 
                onClick={openForm}
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white"
              >
                Get Your Questions Answered: Book a Free Call →
              </Button>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Stop Wasting Money and Start Dominating Hobart with Online Marketing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stop settling for generic strategies and wasted budget. Start working with the digital marketing agency in Hobart that drives real leads, sales, and revenue for Tasmanian businesses.
            </p>
            <Button 
              size="lg" 
              onClick={openForm}
              className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white"
            >
              Claim Your FREE Hobart Online Marketing Audit →
            </Button>
          </section>
        </div>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
          <Button 
            size="lg" 
            onClick={openForm}
            className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-lg whitespace-normal break-words"
          >
            Get FREE Hobart Marketing Audit →
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default OnlineMarketingCompanyHobart;
