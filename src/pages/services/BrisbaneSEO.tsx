import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { CheckCircle2, TrendingUp, Target, Award, Shield, Users, Clock, Zap, Search, FileText, Link2, MapPin, BarChart3, Lightbulb } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const BrisbaneSEO = () => {
  const { openForm } = useMarketingForm();

  const metrics = [
    { number: "$574M+", label: "Client Revenue Generated" },
    { number: "540%", label: "Average ROI Across All Services" },
    { number: "95%", label: "Client Retention Rate" },
    { number: "283+", label: "Successful Campaigns Delivered" }
  ];

  const painPoints = [
    {
      icon: Target,
      title: "You're Tired of Empty Promises",
      description: "You've been burned before. SEO agencies promising the moon and delivering crickets. You're sick of paying for \"strategies\" that are just keyword stuffing and link farms that got outdated in 2012."
    },
    {
      icon: TrendingUp,
      title: "You Need SEO That Drives Real Business Growth",
      description: "You don't want traffic for traffic's sake. You want customers. Revenue. Growth. Not vanity metrics that look good in a report but do nothing for your bottom line."
    },
    {
      icon: Shield,
      title: "You Want Transparency, Not Excuses",
      description: "You're done with black box reporting and agencies that hide behind jargon. You want clear, honest communication about what's working, what's not, and why."
    }
  ];

  const services = [
    {
      icon: MapPin,
      title: "Local SEO Brisbane",
      tagline: "Dominate Brisbane Search Results",
      description: "Your Brisbane customers are searching for your services right now. Are they finding you, or your competitors? We optimize your Google Business Profile, build local citations, and target Brisbane-specific keywords to ensure you show up when it matters most.",
      features: [
        "Google Business Profile optimization and management",
        "Brisbane-focused keyword research and targeting",
        "Local citation building across Brisbane directories",
        "Location-specific content creation",
        "Review management and reputation building"
      ],
      perfectFor: "Brisbane businesses serving local customers (restaurants, dental clinics, law firms, tradespeople)",
      cta: "Get Your Free Local SEO Audit"
    },
    {
      icon: Search,
      title: "Technical SEO",
      tagline: "Fix What's Holding You Back",
      description: "Google can't rank what it can't crawl. We audit your site's technical foundation and fix the issues that are costing you rankings. Fast loading speeds, mobile optimization, proper indexing, structured data—we handle it all.",
      features: [
        "Comprehensive technical SEO audit",
        "Site speed optimization and Core Web Vitals",
        "Mobile responsiveness and mobile-first indexing",
        "XML sitemap and robots.txt optimization",
        "Schema markup implementation"
      ],
      perfectFor: "Websites with traffic drops, slow loading times, or technical barriers to ranking",
      cta: "Get Your Technical SEO Audit"
    },
    {
      icon: FileText,
      title: "Content & On-Page SEO",
      tagline: "Content That Converts",
      description: "We don't just stuff keywords into blog posts and hope for the best. We create strategic content that targets your ideal customers at every stage of their journey—from awareness to purchase decision.",
      features: [
        "Strategic keyword research and mapping",
        "SEO-optimized content creation",
        "On-page optimization (titles, meta descriptions, headers)",
        "Internal linking strategy",
        "Content gap analysis and competitive research"
      ],
      perfectFor: "Businesses looking to attract more qualified leads through organic search",
      cta: "Start Your Content Strategy"
    },
    {
      icon: Link2,
      title: "Link Building & Off-Page SEO",
      tagline: "Build Authority That Lasts",
      description: "Quality backlinks from authoritative sites tell Google your business is trustworthy. We build real, white-hat links through guest posting, digital PR, and relationship building—no spam, no penalties.",
      features: [
        "White-hat link building strategies",
        "Digital PR and media outreach",
        "Guest posting on industry-relevant sites",
        "Broken link building and resource page outreach",
        "Competitor backlink analysis"
      ],
      perfectFor: "Businesses in competitive industries needing to build domain authority",
      cta: "Get Your Link Building Strategy"
    }
  ];

  const differentiators = [
    {
      icon: Clock,
      title: "No Lock-In Contracts",
      description: "We earn your business every month. If we're not delivering results, you can walk away. No questions asked. That's how confident we are in our work."
    },
    {
      icon: BarChart3,
      title: "100% Transparency",
      description: "You'll know exactly what we're doing, why we're doing it, and what results it's driving. No smoke and mirrors. No hiding behind jargon."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "$574M+ in client revenue generated. 95% client retention rate. These aren't vanity metrics—they're proof that we deliver real business growth."
    },
    {
      icon: MapPin,
      title: "Brisbane Market Expertise",
      description: "We understand the Brisbane market, the local search landscape, and what it takes to outrank your competitors in your specific industry."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Comprehensive SEO Audit",
      description: "We analyze your website's current SEO performance, identify opportunities, and pinpoint exactly what's holding you back from ranking higher."
    },
    {
      number: "2",
      title: "Custom SEO Strategy",
      description: "No cookie-cutter solutions. We build a tailored SEO strategy based on your business goals, target audience, and competitive landscape."
    },
    {
      number: "3",
      title: "Strategic Implementation",
      description: "Our team executes the strategy with precision—technical fixes, content creation, link building, and ongoing optimization."
    },
    {
      number: "4",
      title: "Continuous Optimization",
      description: "SEO isn't set-and-forget. We monitor performance, adapt to algorithm changes, and continuously refine our approach to maximize results."
    }
  ];

  const uniqueValue = [
    {
      title: "We Focus on Revenue, Not Just Rankings",
      description: "Sure, we'll get you to page one. But more importantly, we'll drive qualified traffic that actually converts into customers and revenue."
    },
    {
      title: "We're an Extension of Your Team",
      description: "You're not just another account number. We become your strategic partners, invested in your long-term success."
    },
    {
      title: "We Stay Ahead of Algorithm Changes",
      description: "Google updates its algorithm hundreds of times per year. We stay on top of every change so your rankings don't tank overnight."
    },
    {
      title: "We Build Long-Term Assets",
      description: "We don't just chase quick wins. We build sustainable SEO foundations that generate compounding returns for years to come."
    }
  ];

  const faqs = [
    {
      question: "What makes your SEO company in Brisbane different from others?",
      answer: "Unlike most SEO companies in Brisbane, we focus on revenue, not just rankings. We don't lock you into long-term contracts, we provide 100% transparency in our reporting, and we've generated over $574M in client revenue with a 95% retention rate. We're not here to sell you SEO services—we're here to grow your business using SEO as the vehicle. Our Brisbane SEO agency specializes in creating custom strategies that actually drive measurable business growth."
    },
    {
      question: "How much do SEO services in Brisbane cost?",
      answer: "SEO packages in Brisbane typically range from $1,500 to $10,000+ per month depending on your industry competitiveness, business size, and goals. At Odin Digital, we offer flexible SEO services Brisbane businesses can afford without sacrificing quality. Unlike agencies that lock you into 12-month contracts, we earn your business every month. Our affordable SEO services Brisbane businesses trust start with a comprehensive audit and custom strategy, so you only pay for what you actually need."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "Honest answer? SEO is a marathon, not a sprint. Most Brisbane businesses start seeing measurable improvements in 3-6 months, with significant results in 6-12 months. As the best SEO company Brisbane offers, we focus on sustainable, long-term growth rather than quick fixes that get you penalized. However, we often see early wins from technical fixes and low-hanging fruit within the first 30-60 days. Our Brisbane SEO management approach prioritizes continuous optimization for compounding results over time."
    },
    {
      question: "Do you offer local SEO for Brisbane businesses?",
      answer: "Absolutely. Local SEO Brisbane is one of our specialties. If you serve Brisbane customers, local SEO is critical for getting found when people search \"[your service] near me\" or \"[your service] Brisbane.\" We optimize your Google Business Profile, build local citations, target Brisbane-specific keywords, and ensure you dominate local search results. Our Brisbane SEO expert team has helped hundreds of local businesses increase foot traffic, phone calls, and local revenue through strategic local search engine optimisation Brisbane businesses rely on."
    },
    {
      question: "What's included in your SEO packages?",
      answer: "Our SEO packages Brisbane businesses trust include comprehensive technical SEO audits, keyword research, on-page optimization, content strategy, link building, and ongoing performance monitoring. Unlike cookie-cutter SEO services in Brisbane, we customize every package to your specific needs. You get dedicated account management, transparent monthly reporting, and strategic recommendations. As a full-service SEO agency in Brisbane, we handle everything from technical fixes to content creation to backlink acquisition—all under one roof."
    },
    {
      question: "Can you guarantee first-page rankings on Google?",
      answer: "Anyone promising guaranteed first-page rankings is either lying or using black-hat tactics that will get you penalized. What we CAN guarantee as the best SEO Brisbane agency is that we'll use proven, white-hat strategies that have generated $574M+ in client revenue. We'll work tirelessly to improve your rankings, but more importantly, we focus on driving qualified traffic that converts. Our Brisbane SEO services prioritize business growth over vanity metrics."
    },
    {
      question: "What's the difference between SEO and SEM?",
      answer: "SEO (Search Engine Optimisation) focuses on earning organic rankings through content, technical optimization, and backlinks—it's a long-term investment. SEM (Search Engine Marketing Brisbane) typically refers to paid search ads like Google Ads—immediate results but stops when you stop paying. As a search engine marketing agency Brisbane trusts, we often recommend a combination of both: SEO for sustainable long-term growth and search engine marketing Brisbane campaigns for immediate visibility while SEO builds momentum."
    },
    {
      question: "Do you work with small businesses in Brisbane?",
      answer: "Yes! Small business SEO Brisbane is one of our core specialties. We understand that small businesses need affordable SEO services Brisbane can trust without being locked into massive contracts. Our flexible approach means you get enterprise-level SEO expertise at a price point that makes sense for your business. We've helped Brisbane small businesses compete with (and beat) much larger competitors through strategic, focused SEO campaigns."
    },
    {
      question: "How do you measure SEO success?",
      answer: "We measure what matters: organic traffic growth, keyword rankings, conversion rates, and most importantly—revenue. As a results-driven SEO marketing Brisbane agency, we don't hide behind vanity metrics. Every month you'll get clear reporting on your rankings, traffic, leads, and how SEO is impacting your bottom line. Our Brisbane search engine optimisation approach ties directly to business outcomes, not just traffic increases."
    },
    {
      question: "What industries do you specialize in?",
      answer: "Our SEO consultant Brisbane team has worked across dozens of industries—dental practices, law firms, ecommerce, healthcare, professional services, trades, and more. We're industry-agnostic, but we excel in competitive sectors where strategic SEO can be a true differentiator. Whether you need search engine optimisation firm Brisbane expertise for a local service business or an ecommerce brand, we have the experience to drive results."
    },
    {
      question: "Do you offer SEO audits?",
      answer: "Yes, and it's the best place to start. Our comprehensive SEO audit identifies exactly what's holding your site back from ranking higher. We analyze technical issues, on-page optimization, content gaps, backlink profile, and competitive landscape. As a leading SEO agency Brisbane businesses trust, we use this audit to build a custom roadmap for your success. The best part? We offer free SEO audits for qualified Brisbane businesses—no obligation, no sales pitch, just honest insights."
    },
    {
      question: "What is search engine optimisation and why does my Brisbane business need it?",
      answer: "Search engine optimisation (SEO) is the process of improving your website to rank higher in Google search results for relevant keywords. Why does your Brisbane business need it? Because 93% of online experiences start with a search engine, and 75% of people never scroll past the first page of search results. If you're not on page one, you're invisible to potential customers. Our search engine optimisation Brisbane services help you get found by people actively searching for what you offer."
    },
    {
      question: "How is your Brisbane SEO agency different from a freelance SEO consultant?",
      answer: "A freelance SEO consultant Brisbane might be great for specific projects, but an SEO agency in Brisbane like Odin Digital brings you an entire team of specialists—technical SEO experts, content strategists, link builders, and account managers. You get diverse expertise, scalable resources, and accountability. Plus, with our 95% retention rate and $574M in client revenue generated, you're partnering with proven experts, not experimenting with an individual freelancer."
    },
    {
      question: "Can you help with technical SEO issues?",
      answer: "Technical SEO is our bread and butter. Our SEO specialist Brisbane team fixes site speed issues, mobile responsiveness problems, crawl errors, indexation issues, structured data implementation, and more. We've rescued countless sites from technical nightmares that were tanking their rankings. If Google can't properly crawl and index your site, you'll never rank—no matter how good your content is. Our technical SEO expertise ensures your site's foundation is rock-solid."
    },
    {
      question: "Do you create content as part of your SEO services?",
      answer: "Yes. Content is a core component of our Brisbane SEO services. But we don't just churn out generic blog posts stuffed with keywords. We create strategic, high-quality content designed to rank for valuable keywords and actually convert readers into customers. Every piece of content is aligned with your business goals and targets specific customer pain points. As an SEO firm Brisbane trusts for content strategy, we focus on quality over quantity."
    },
    {
      question: "What's your link building strategy?",
      answer: "We use 100% white-hat link building strategies—no spammy directories, no sketchy link farms, no PBNs that will get you penalized. Our SEO expert Brisbane team earns high-quality backlinks through digital PR, guest posting on reputable sites, broken link building, and relationship development with industry publishers. Quality over quantity. Every link we build adds real authority to your site and drives your rankings higher safely and sustainably."
    },
    {
      question: "How often will I receive SEO reports?",
      answer: "You'll receive comprehensive monthly SEO reports showing your rankings, organic traffic, conversions, and the work we've completed. But here's the difference: our reports are actually readable. No confusing jargon or data dumps. You'll get clear insights into what's working, what we're optimizing, and how SEO is impacting your business. As the best SEO company Brisbane offers, transparency isn't optional—it's mandatory."
    },
    {
      question: "Can you help recover from a Google penalty?",
      answer: "Yes. If your site has been penalized (manual or algorithmic), our Brisbane SEO specialist team can diagnose the issue, create a recovery plan, and get you back in Google's good graces. We've recovered dozens of sites from penalties caused by previous agencies using black-hat tactics. Recovery isn't instant, but with the right strategy and clean-up work, most sites can bounce back stronger than before."
    },
    {
      question: "Do you offer month-to-month SEO services or require long contracts?",
      answer: "We offer month-to-month SEO services with no lock-in contracts. Why? Because we're confident in our ability to deliver results. If you're not happy, you can leave anytime. This keeps us accountable and ensures we're earning your business every single month. Most Brisbane SEO agencies lock you into 6-12 month contracts because they're not confident they can retain clients based on results alone. We do things differently."
    },
    {
      question: "How do I choose the best SEO company in Brisbane?",
      answer: "Look for these signs: proven results (not just case studies, but real revenue growth), transparency in reporting, no lock-in contracts, white-hat strategies only, and a team that actually understands your business. Ask for references, check their own SEO (if they can't rank their own site, how can they rank yours?), and make sure they focus on business outcomes, not just rankings. The best SEO Brisbane businesses choose is one that acts as a true strategic partner, not just a vendor."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Best SEO Company Brisbane | SEO Services Brisbane | Odin Digital</title>
        <meta name="description" content="Brisbane's top SEO company. $574M+ in client revenue. Expert SEO services Brisbane businesses trust. Local SEO, technical SEO, content & link building. No lock-in contracts." />
        <meta name="keywords" content="seo brisbane, seo company brisbane, seo services brisbane, brisbane seo agency, local seo brisbane, seo expert brisbane, best seo brisbane" />
        <link rel="canonical" href="https://odindigital.com.au/seo-brisbane" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <SideTab />

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
                <BreadcrumbLink asChild>
                  <Link to="/services/seo">SEO</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Brisbane</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-muted via-background to-muted">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                Brisbane's Most Trusted SEO Agency
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Tired of SEO Agencies That Promise Page 1 But Deliver Page 10?
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-semibold">
                Partner with Brisbane's Top SEO Experts and Watch Your Rankings (and Revenue) Soar
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                You're done with SEO agencies that promise the world and deliver nothing but excuses. You want results—not vanity metrics. You want an SEO partner that understands your business, drives real traffic, and generates actual revenue. That's exactly what we do.
              </p>
              <Button 
                variant="cta" 
                size="xl" 
                asChild
                className="mb-4"
              >
                <Link to="/contact">Get Your FREE SEO Audit →</Link>
              </Button>
              <p className="text-sm text-muted-foreground">
                No credit card required • See what's holding you back in 48 hours
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-16 bg-white border-y">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {metric.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8 italic">
              These aren't vanity metrics. This is real revenue for real Brisbane businesses.
            </p>
          </div>
        </section>

        {/* Why Choose Us - Pain Points */}
        <section className="py-20 px-4 bg-muted">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              We Understand Your Frustration
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {painPoints.map((point, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <point.icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">Book Your Free SEO Strategy Call →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Real Results for Real Brisbane Businesses
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Don't take our word for it. Here's what our Brisbane clients say:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-muted border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">
                    <span className="text-primary font-bold">292% Revenue Growth</span> - YCL Jewels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-6 leading-relaxed italic">
                    "We'd been working with another SEO agency for 18 months with minimal results. Within 6 months of partnering with Odin Digital, our organic traffic tripled and our revenue increased by 292%. The difference? They actually understand our business and target keywords that drive sales, not just traffic."
                  </p>
                  <p className="font-semibold">Will Wright</p>
                  <p className="text-sm text-muted-foreground">Owner, YCL Jewels | Brisbane, QLD</p>
                </CardContent>
              </Card>

              <Card className="bg-muted border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">
                    <span className="text-primary font-bold">Dominated Local Search</span> - Mining Store
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-6 leading-relaxed italic">
                    "Before Odin Digital, we were invisible in Brisbane search results. Now we own page one for every major keyword in our industry. Our phone rings daily with qualified leads, and 60% of our new business comes from organic search. Best ROI we've ever seen from any marketing channel."
                  </p>
                  <p className="font-semibold">Mark Stevens</p>
                  <p className="text-sm text-muted-foreground">General Manager, Mining Store | Brisbane, QLD</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">See More Success Stories →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-muted">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Brisbane SEO Services
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              We don't do cookie-cutter SEO. Every strategy is custom-built for your business, your industry, and your goals.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-2 hover:shadow-xl transition-all hover:-translate-y-2">
                  <CardHeader>
                    <service.icon className="w-16 h-16 text-primary mb-4" />
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-foreground">
                      {service.tagline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <p className="text-sm">
                        <span className="font-semibold text-foreground">Perfect for:</span>{" "}
                        <span className="text-muted-foreground">{service.perfectFor}</span>
                      </p>
                    </div>
                    <Button variant="cta" className="w-full" asChild>
                      <Link to="/contact">{service.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Why Brisbane Businesses Choose Odin Digital
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentiators.map((item, index) => (
                <Card key={index} className="text-center border-2 hover:border-primary transition-all">
                  <CardHeader>
                    <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">Claim Your Free SEO Strategy Session →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-muted">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Proven SEO Process
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              We don't wing it. Here's exactly how we take your Brisbane business from invisible to unavoidable:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="h-full border-2 hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                        {step.number}
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">Start Ranking Higher Today →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              What Makes Odin Digital Different
            </h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {uniqueValue.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-primary bg-muted">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Lightbulb className="w-8 h-8 text-primary mr-3" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-4 gradient-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Stop Wasting Money on SEO That Doesn't Work?
            </h2>
            <p className="text-xl mb-10 opacity-95 leading-relaxed">
              Let's be honest: You're tired of agencies that overpromise and underdeliver. You want an SEO partner that actually moves the needle on your revenue. We've generated $574M+ for our clients. We could do the same for you.
            </p>
            <Button 
              variant="secondary" 
              size="xl" 
              asChild
              className="mb-4 text-lg h-16 px-12 hover:scale-105 transition-transform"
            >
              <Link to="/contact">Book Your Free SEO Strategy Call →</Link>
            </Button>
            <p className="text-sm opacity-90 mt-6">
              Limited strategy sessions available this month • No obligation • No sales pitch • Just honest advice
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Everything you need to know about SEO in Brisbane
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-muted/30">
                  <AccordionTrigger className="text-left hover:text-primary">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">Still have questions?</p>
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Book a Free Call →</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BrisbaneSEO;
