import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Target,
  TrendingUp,
  Shield,
  Users,
  Search,
  FileText,
  Link2,
  BarChart3,
  CheckCircle2,
  Award,
  Briefcase,
  TrendingDown,
  Lock,
  Copy,
  DollarSign,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Zap,
  LineChart,
  Settings,
} from "lucide-react";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { ComparisonTable } from "@/components/ComparisonTable";
import { seoPackageComparison } from "@/utils/comparisonTables";

const SEOAgency = () => {
  const { openForm } = useMarketingForm();

  const problems = [
    {
      icon: <Users className="w-12 h-12 text-primary mb-4" />,
      title: "You Become a Number in a 500-Client Agency",
      description:
        "Large SEO agencies treat you as just another account number. You get assigned to a junior account manager who's juggling 30+ clients, has limited knowledge, and is reading from a script. Your calls are rushed, your questions are deflected, and your campaigns get cookie-cutter treatment.",
    },
    {
      icon: <TrendingDown className="w-12 h-12 text-primary mb-4" />,
      title: "You're Stuck in a Black Box with No Real Transparency",
      description:
        "Most SEO companies send you reports full of vanity metrics—rankings, traffic, impressions—but no real insight into how these numbers impact your revenue. You're paying thousands per month, but you have no idea what's actually being done or if it's working.",
    },
    {
      icon: <Lock className="w-12 h-12 text-primary mb-4" />,
      title: "Lock-In Contract Trap: You're Held Hostage",
      description:
        "The industry standard is a 12-month lock-in contract. Why? Because most agencies know they'll underperform, and they want to lock in your revenue before you realize you've been fleeced. These contracts are designed to protect the agency, not you.",
    },
    {
      icon: <Copy className="w-12 h-12 text-primary mb-4" />,
      title: "Generic, One-Size-Fits-All Strategy That Doesn't Work",
      description:
        "Most SEO companies use a templated approach: run an audit, make basic on-page changes, build a few low-quality links, repeat. They don't take the time to understand your business model, your customer journey, or your unique value proposition.",
    },
  ];

  const differentiators = [
    {
      icon: <DollarSign className="w-12 h-12 text-primary mb-4" />,
      title: "Revenue is Our North Star, Not Rankings",
      description:
        "We focus on the metrics that actually matter: leads, sales, and ROI. We don't just chase rankings; we build strategies that turn page-one visibility into tangible revenue growth for your business.",
    },
    {
      icon: <Shield className="w-12 h-12 text-primary mb-4" />,
      title: "No Lock-In Contracts—We Earn Your Business Monthly",
      description:
        "We operate on a month-to-month basis. If we don't deliver results, you're free to walk away. Our 95% client retention rate proves we don't need contracts to keep clients—our performance does that.",
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-primary mb-4" />,
      title: "Direct Access to Senior SEO Experts, Not Junior AMs",
      description:
        "You'll work directly with our senior strategists who have 10+ years of experience. No more dealing with inexperienced account managers. You get real expertise and strategic insights that move the needle.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary mb-4" />,
      title: "White-Hat, Sustainable Growth—No Black Hat Shortcuts",
      description:
        "We only use ethical, Google-approved SEO techniques. We build long-term authority and sustainable rankings that protect your brand, not risky tactics that lead to penalties.",
    },
  ];

  const services = [
    {
      icon: <Settings className="w-12 h-12 text-primary mb-4" />,
      title: "Technical SEO Services",
      description:
        "We fix the foundational issues holding your website back: site speed, crawlability, indexation, Core Web Vitals, schema markup, and mobile optimization. Our deep technical audits ensure your site is perfectly structured for Google.",
    },
    {
      icon: <Target className="w-12 h-12 text-primary mb-4" />,
      title: "Conversion-First Keyword Strategy",
      description:
        "We don't chase vanity keywords. We identify high-intent, commercial keywords that your ideal customers use when they're ready to buy. We prioritize revenue-driving keywords over high-volume, low-intent traffic.",
    },
    {
      icon: <FileText className="w-12 h-12 text-primary mb-4" />,
      title: "Content & On-Page SEO",
      description:
        "We create authoritative, conversion-optimized content that answers your customers' questions and guides them through the buyer journey. Every page is meticulously optimized for both search engines and conversions.",
    },
    {
      icon: <Link2 className="w-12 h-12 text-primary mb-4" />,
      title: "Strategic Link Building & Off-Page SEO",
      description:
        "We earn high-quality backlinks from authoritative, relevant websites in your industry. Our white-hat link building strategies build real authority and trust with Google, not spammy directory links.",
    },
  ];

  const phases = [
    {
      number: "01",
      title: "Deep Discovery & Competitive Analysis",
      description:
        "We analyze your business, your competitors, and your market to identify the biggest opportunities and the obstacles in your way.",
    },
    {
      number: "02",
      title: "Custom Strategy & Roadmap Development",
      description:
        "We build a bespoke SEO strategy tailored to your goals, budget, and timeline. No cookie-cutter packages—just a data-driven plan for your success.",
    },
    {
      number: "03",
      title: "Technical Foundation & On-Page Optimization",
      description:
        "We fix critical technical issues and optimize your existing pages for maximum search visibility and conversion potential.",
    },
    {
      number: "04",
      title: "Content Execution & Authority Building",
      description:
        "We create high-quality content and build authoritative backlinks that establish your brand as the go-to solution in your industry.",
    },
    {
      number: "05",
      title: "Continuous Optimization & Scaling",
      description:
        "We constantly test, refine, and scale what's working. SEO is never 'done'—we're always finding new opportunities to grow your revenue.",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Briefcase className="w-12 h-12 text-primary mb-4" />,
      title: "Corporate & B2B SEO Expertise",
      description:
        "We specialize in complex, high-value B2B and corporate SEO campaigns. We understand long sales cycles, multiple decision-makers, and high-intent lead generation.",
    },
    {
      icon: <Zap className="w-12 h-12 text-primary mb-4" />,
      title: "We Stay Ahead of Algorithm Changes",
      description:
        "Google's algorithm changes constantly. We stay on top of every update and adjust our strategies to ensure your rankings stay strong and grow over time.",
    },
    {
      icon: <Award className="w-12 h-12 text-primary mb-4" />,
      title: "Our SEO Guarantee: Performance or You Leave",
      description:
        "We can't guarantee rankings (no ethical agency can), but we guarantee commitment. If we don't deliver, you can walk away. No long-term contracts holding you hostage.",
    },
  ];

  const faqs = [
    {
      question: "What is the difference between an SEO company and an SEO agency?",
      answer:
        "An SEO company or SEO agency are often used interchangeably, but an agency typically offers a broader range of services (like content, link building, and technical SEO) under one roof. Odin Digital is a full-service search engine optimisation agency focused on delivering holistic growth for Australian businesses.",
    },
    {
      question: "How much do your SEO services Australia packages cost?",
      answer:
        "Our SEO packages in Australia are fully customized based on your goals and competition. We don't offer fixed pricing because that leads to poor results. We provide a transparent proposal outlining the investment required to achieve your revenue targets.",
    },
    {
      question: "Do you offer SEO guarantee services?",
      answer:
        "We offer the best guarantee in the industry: No Lock-In Contracts. While no ethical SEO company can guarantee rankings, we guarantee our commitment to your success. If we don't perform, you are free to leave.",
    },
    {
      question: "Why should I choose Odin Digital over other top SEO companies in Australia?",
      answer:
        "Most top SEO companies in Australia are built on old models. We are a lean, senior-level team focused on corporate and B2B SEO. We prioritize revenue over rankings, offer complete transparency, and specialize in high-intent keyword strategies.",
    },
    {
      question: "Are your SEO techniques white-hat or black-hat?",
      answer:
        "We are strictly a white-hat SEO agency. We adhere to all of Google's Webmaster Guidelines and build long-term, sustainable authority for your brand.",
    },
    {
      question: "How long does it take to see results from your search engine optimization services?",
      answer:
        "SEO is a long-term investment. You will typically see initial keyword movement within 3-4 months, with significant growth in qualified traffic and leads between 6-12 months.",
    },
    {
      question: "Do you offer local SEO services or just national campaigns?",
      answer:
        "We offer both. We are experts in local SEO for all major Australian cities (Sydney, Melbourne, Brisbane, Perth, Adelaide) and can ensure your business dominates both national and local search results.",
    },
    {
      question: "What is the best SEO company Australia has for B2B?",
      answer:
        "Odin Digital is consistently ranked among the best SEO companies in Australia for B2B and enterprise clients due to our focus on complex sales cycles and high-value leads.",
    },
    {
      question: "Do you handle both on-page SEO services and off-page SEO services?",
      answer:
        "Yes, our approach is holistic. Our on-page SEO services include comprehensive content and technical optimization, while our off-page strategy focuses on high-quality, ethical link building.",
    },
    {
      question: "How do you ensure my website achieves top search engine optimization in Australia?",
      answer:
        "We focus on three pillars: Technical Excellence, Conversion-Focused Content, and Authoritative Link Building. By mastering these, we ensure your website becomes a dominant force in the Australian search landscape.",
    },
    {
      question: "What kind of businesses do you provide business SEO services for?",
      answer:
        "We primarily partner with established businesses, B2B companies, and corporate clients who are looking to scale aggressively and understand that SEO is a long-term investment.",
    },
    {
      question: "Are you an SEO specialist Australia-wide or do you focus on specific cities?",
      answer:
        "We are an SEO specialist Australia-wide, with expertise in the unique market dynamics of every major city. We leverage national reach with local precision.",
    },
    {
      question: "Can you help with search engine marketing Australia as well as SEO?",
      answer:
        "Yes. Our expertise extends to all forms of search engine marketing in Australia, including PPC and Meta Ads. We integrate your SEO strategy with paid media for a seamless digital presence.",
    },
    {
      question: "What is the difference between SEO marketing experts and a general digital agency?",
      answer:
        "SEO marketing experts focus specifically on organic growth and search engine visibility. We are specialists, not generalists, ensuring you get the deepest level of expertise in SEO marketing in Australia.",
    },
    {
      question: "Why don't you offer an SEO guarantee services like some other companies?",
      answer:
        "Any company offering an SEO guarantee is either misleading you or using risky tactics. Our guarantee is far better: a No Lock-In Contract. We perform every month, or you leave.",
    },
  ];

  const schemaOrgJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au/",
        "logo": "https://odindigital.com.au/logo.png",
        "description":
          "Performance-focused SEO agency in Australia. We've generated over $574M in client revenue. No lock-in contracts, just results.",
        "founder": {
          "@type": "Person",
          "name": "Lucas Durante",
        },
        "slogan": "No Lock-In Contracts. Just Results.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+61-XXX-XXX-XXX",
          "contactType": "Sales",
          "areaServed": "AU",
          "availableLanguage": "English",
        },
        "sameAs": [
          "https://www.linkedin.com/company/odin-digital",
          "https://www.facebook.com/odindigital",
          "https://twitter.com/odindigital",
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://odindigital.com.au/seo-agency",
        "url": "https://odindigital.com.au/seo-agency",
        "name": "Australia's #1 SEO Agency | Odin Digital | Revenue-Focused",
        "description":
          "Tired of SEO agencies that overpromise & underdeliver? Odin Digital is Australia's top-rated SEO company, focused on revenue growth, not just rankings. $574M+ in client revenue. No lock-in contracts.",
        "isPartOf": {
          "@id": "https://odindigital.com.au/#website",
        },
      },
      {
        "@type": "Service",
        "serviceType": "Search Engine Optimization",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital",
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia",
        },
        "description":
          "Comprehensive SEO services for Australian businesses, including technical SEO, content strategy, link building, and conversion rate optimization.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "SEO Services Australia",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Corporate SEO Services Australia",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "B2B SEO Agency Services",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "On-Page SEO Services",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "SEO Services",
          "provider": {
            "@type": "Organization",
            "name": "Odin Digital"
          }
        },
        "author": {
          "@type": "Person",
          "name": "Fabienne Costa",
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "reviewBody":
          "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
        "publisher": {
          "@type": "Organization",
          "name": "Odin Digital",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Australia's #1 SEO Agency | Odin Digital | Revenue-Focused</title>
        <meta
          name="description"
          content="Tired of SEO agencies that overpromise & underdeliver? Odin Digital is Australia's top-rated SEO company, focused on revenue growth, not just rankings. $574M+ in client revenue. No lock-in contracts."
        />
        <meta
          name="keywords"
          content="SEO agency, SEO company Australia, best SEO company, corporate SEO, B2B SEO agency, search engine optimization, SEO services Australia"
        />
        <link rel="canonical" href="https://odindigital.com.au/seo-agency" />
        <script type="application/ld+json">{JSON.stringify(schemaOrgJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 pt-24 pb-6">
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
                  <Link to="/services">Services</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>SEO Agency</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Section 1: Hero */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight animate-fade-in">
                The SEO Agency Australia Trusts for Revenue Growth
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 animate-fade-in">
                Stop Getting Fleeced by SEO Charlatans. Start Growing Your Revenue.
              </h2>
              <p className="text-xl font-semibold mb-6 animate-fade-in">
                Partner with Australia's Top SEO Company and Turn Search Traffic into Sales.
              </p>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                Let's cut through the BS. The SEO industry is full of agencies that overpromise, underdeliver, and lock you into 12-month contracts so you can't escape when they fail. You've probably been burned before.
              </p>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                At Odin Digital, we do things differently. We're a performance-focused SEO agency that prioritizes your revenue over vanity metrics. We've generated over $574 million in verified client revenue, and we don't need lock-in contracts because our results speak for themselves.
              </p>
              <Button
                onClick={openForm}
                size="xl"
                className="bg-gradient-primary text-white shadow-primary hover:shadow-glow transition-all duration-300 group h-14 px-8 text-lg font-bold"
              >
                Get Your FREE SEO Strategy Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>$574M+ Client Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>95% Client Retention</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Problem/Agitation */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                The Problem: Why Most SEO Agencies Fail Australian Businesses
              </h2>
              <p className="text-lg text-muted-foreground">
                If you've been frustrated by your previous SEO company, it's not your fault. The industry is rife with "charlatans" and large agencies that operate on a flawed model.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
              {problems.map((problem, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-card transition-all duration-300 border-border"
                >
                  <div className="flex flex-col items-start">
                    {problem.icon}
                    <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button
                onClick={openForm}
                size="lg"
                className="bg-gradient-primary text-white shadow-primary hover:shadow-glow transition-all group"
              >
                Stop the Cycle: Talk to a Senior SEO Expert
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Section 3: The Odin Digital Difference */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                The Odin Digital Difference: Performance-Focused SEO Agency Australia Trusts
              </h2>
              <p className="text-lg text-muted-foreground">
                We built our entire model around solving the problems that plague the industry.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
              {differentiators.map((item, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-card transition-all duration-300 border-border"
                >
                  <div className="flex flex-col items-start">
                    {item.icon}
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button
                onClick={openForm}
                size="lg"
                className="bg-gradient-primary text-white shadow-primary hover:shadow-glow transition-all group"
              >
                See How We Can Grow Your Revenue
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Section 4: Comprehensive SEO Services */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Our Comprehensive SEO Services: Built for the Australian Market
              </h2>
              <p className="text-lg text-muted-foreground">
                As a leading SEO agency Australia-wide, we offer a full spectrum of services designed to dominate your market.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-card transition-all duration-300 border-border text-center"
                >
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button
                onClick={openForm}
                size="lg"
                className="bg-gradient-primary text-white shadow-primary hover:shadow-glow transition-all group"
              >
                Ready for a Custom SEO Strategy? Contact Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Section 5: 5-Phase SEO Success System */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Our Proprietary 5-Phase SEO Success System
              </h2>
              <p className="text-lg text-muted-foreground">
                We follow a proven, repeatable system to ensure consistent, scalable results for every client.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 mb-12">
              {phases.map((phase, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-card transition-all duration-300 border-border"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-5xl font-black text-primary/30 flex-shrink-0">
                      {phase.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button
                onClick={openForm}
                size="lg"
                className="bg-gradient-primary text-white shadow-primary hover:shadow-glow transition-all group"
              >
                Start Your 5-Phase Success Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Section 6: What Makes Us Best */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                What Makes Us the Best SEO Company Australia-Wide?
              </h2>
              <p className="text-lg text-muted-foreground">
                We are not just another SEO agency. We are your growth partners.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {whyChooseUs.map((item, index) => (
                <Card
                  key={index}
                  className="p-8 text-center hover:shadow-card transition-all duration-300 border-border"
                >
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button
                onClick={openForm}
                size="lg"
                className="bg-gradient-primary text-white shadow-primary hover:shadow-glow transition-all group"
              >
                Talk to a Corporate SEO Expert
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Section 6.5: SEO Package Comparison */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black mb-4 text-charcoal">
                  Compare Our SEO Packages
                </h2>
                <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                  Choose the SEO package that aligns with your business goals and budget. All packages include our proven methodologies and transparent reporting.
                </p>
              </div>
              <ComparisonTable
                title={seoPackageComparison.title}
                description={seoPackageComparison.description}
                rows={seoPackageComparison.rows}
              />
              <div className="text-center mt-12">
                <Button
                  onClick={openForm}
                  size="lg"
                  className="bg-gradient-primary text-white shadow-primary hover:shadow-glow transition-all group whitespace-normal break-words py-3 px-6"
                >
                  Get Custom SEO Package Recommendations
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  FAQs: Addressing Your Biggest Concerns About Hiring an SEO Agency
                </h2>
                <p className="text-lg text-muted-foreground">
                  We know you have questions, especially after being burned by other agencies. We're here to provide clear, honest answers.
                </p>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Section 8: Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Ready to Partner with the Best SEO Company in Australia?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Stop wasting budget on agencies that treat you like a number. Start working with a dedicated team of corporate SEO experts focused on your revenue growth.
              </p>
              <Button
                onClick={openForm}
                size="xl"
                className="bg-gradient-primary text-white shadow-primary hover:shadow-glow transition-all duration-300 group h-16 px-10 text-xl font-bold"
              >
                Claim Your FREE SEO Strategy Session
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50">
          <Button
            onClick={openForm}
            className="w-full bg-gradient-primary text-white shadow-primary h-12 text-base font-bold"
          >
            Get FREE Strategy Session
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default SEOAgency;
