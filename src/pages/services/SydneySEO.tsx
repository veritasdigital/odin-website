import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import LocationContent from "@/components/LocationContent";
import { RelatedLocations } from "@/components/RelatedLocations";
import LocationMap from "@/components/LocationMap";
import { getLocationData } from "@/utils/locationData";
import { useEffect, useRef, useState } from "react";
import { locationImages } from "@/utils/locationImages";
import { 
  TrendingUp, 
  Target, 
  Users, 
  Award,
  Search,
  Code,
  FileText,
  Link2,
  CheckCircle,
  Clock,
  BarChart3,
  Shield
} from "lucide-react";
import { getRelatedLocations, getHubForService } from "@/utils/contentClusters";
import { ServiceSchema } from "@/components/ServiceSchema";
import { OptimizedImage } from '@/components/OptimizedImage';

const SydneySEO = () => {
  const locationInfo = getLocationData("sydney");
  const hub = getHubForService("SEO");
  const relatedLocationsList = getRelatedLocations("Sydney", "SEO");
  
  // Count-up animation hook
  const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    useEffect(() => {
      if (!isVisible) return;

      const delayTimeout = setTimeout(() => {
        setCount(0);
        
        let startTime: number | null = null;
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(easeOutQuart * end));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        requestAnimationFrame(animate);
      }, 100);

      return () => clearTimeout(delayTimeout);
    }, [isVisible, end, duration]);

    return { count, ref };
  };

  // Social Proof Metrics
  const metrics = [
    { number: 574, suffix: "M+", prefix: "$", label: "Client Revenue Generated" },
    { number: 540, suffix: "%", prefix: "", label: "Average ROI Across All Services" },
    { number: 95, suffix: "%", prefix: "", label: "Client Retention Rate" },
    { number: 283, suffix: "+", prefix: "", label: "Successful Campaigns Delivered" }
  ];

  const MetricCard = ({ metric }: { metric: typeof metrics[0] }) => {
    const { count, ref } = useCountUp(metric.number);
    
    return (
      <div ref={ref} className="animate-fade-in">
      <div className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-2 whitespace-nowrap [font-variant-numeric:tabular-nums]">
          <span className="invisible">{`${metric.prefix}${metric.number}${metric.suffix}`}</span>
          <span className="absolute inset-0">{count !== null ? `${metric.prefix}${count}${metric.suffix}` : '\u00A0'}</span>
        </div>
        <div className="text-xs sm:text-sm md:text-base text-muted-foreground px-2">
          {metric.label}
        </div>
      </div>
    );
  };

  // Problem Cards
  const problems = [
    {
      icon: <Target className="w-12 h-12 text-primary mb-4" />,
      title: "You're Tired of Agencies That Overpromise and Underdeliver",
      description: "You've been burned by SEO agencies before. They promised you the world, took your money, and delivered little more than fancy reports filled with metrics that don't translate to actual business growth."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary mb-4" />,
      title: "You Need SEO That Actually Drives Business Growth",
      description: "You don't just want higher rankings—you want more qualified leads, more sales, and a stronger bottom line. You need an SEO partner who understands that rankings are just a means to an end, not the end itself."
    },
    {
      icon: <Users className="w-12 h-12 text-primary mb-4" />,
      title: "You Want Transparency, Not Technical Jargon",
      description: "You're tired of being kept in the dark with vague updates and technical jargon that sounds impressive but means nothing. You want clear communication, honest reporting, and a partner who treats you like an intelligent business owner."
    }
  ];

  // Services
  const services = [
    {
      icon: <Search className="w-12 h-12 text-primary mb-4" />,
      title: "Local SEO Sydney",
      tagline: "Dominate Sydney's Local Search Results",
      description: "If you're a Sydney-based business targeting local customers, Local SEO is your secret weapon. We optimize your Google Business Profile, build local citations, and create location-specific content that helps you show up when Sydney customers search for what you offer.",
      perfectFor: "Service-based businesses, retail stores, restaurants, professional services firms",
      cta: "Get Your Free Local SEO Audit"
    },
    {
      icon: <Code className="w-12 h-12 text-primary mb-4" />,
      title: "Technical SEO",
      tagline: "Fix What's Holding You Back",
      description: "Technical SEO is the foundation of all SEO success. We audit your site for crawlability issues, fix indexing problems, optimize site speed, improve mobile usability, and ensure search engines can easily access and understand your content.",
      perfectFor: "E-commerce sites, large websites, businesses with existing traffic that's underperforming",
      cta: "Get Your Technical SEO Audit"
    },
    {
      icon: <FileText className="w-12 h-12 text-primary mb-4" />,
      title: "Content & On-Page SEO",
      tagline: "Content That Ranks and Converts",
      description: "We create content strategies that align with your business goals and your customers' search intent. From keyword research to content creation to on-page optimization, we ensure every page on your site is working to drive traffic and conversions.",
      perfectFor: "B2B companies, professional services, businesses with complex products/services",
      cta: "Start Your Content Strategy"
    },
    {
      icon: <Link2 className="w-12 h-12 text-primary mb-4" />,
      title: "Link Building & Off-Page SEO",
      tagline: "Build Authority That Google Rewards",
      description: "Backlinks are still one of Google's most important ranking factors. We build high-quality, relevant backlinks through digital PR, content marketing, and strategic outreach—no spammy tactics, no shortcuts, just real authority.",
      perfectFor: "Competitive industries, businesses looking to build brand authority, companies targeting high-value keywords",
      cta: "Get Your Link Building Strategy"
    }
  ];

  // Differentiators
  const differentiators = [
    {
      icon: <CheckCircle className="w-10 h-10 text-primary mb-4" />,
      title: "No Lock-In Contracts",
      description: "We earn your business every single month. You can cancel anytime."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-primary mb-4" />,
      title: "100% Transparency",
      description: "You'll always know exactly what we're doing, why we're doing it, and what results it's driving."
    },
    {
      icon: <Award className="w-10 h-10 text-primary mb-4" />,
      title: "Proven Track Record",
      description: "$574M+ in client revenue speaks for itself."
    },
    {
      icon: <Users className="w-10 h-10 text-primary mb-4" />,
      title: "Sydney Market Expertise",
      description: "We understand the unique dynamics of the Sydney market and know how to help you win locally."
    }
  ];

  // Process Steps
  const processSteps = [
    {
      number: "1",
      title: "Comprehensive SEO Audit",
      description: "We start by auditing your current SEO performance, identifying what's working, what's not, and where the biggest opportunities lie."
    },
    {
      number: "2",
      title: "Custom SEO Strategy",
      description: "Based on the audit, we develop a tailored SEO strategy aligned with your business goals, target audience, and competitive landscape."
    },
    {
      number: "3",
      title: "Strategic Implementation",
      description: "Our team gets to work implementing the strategy—fixing technical issues, optimizing content, building links, and monitoring performance."
    },
    {
      number: "4",
      title: "Continuous Optimization",
      description: "SEO isn't a set-it-and-forget-it strategy. We continuously test, measure, and optimize to ensure you're getting the best possible results."
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "What makes Odin Digital the best SEO company Sydney has to offer?",
      answer: "Odin Digital stands out as Sydney's leading SEO company because we focus on what actually matters: revenue growth. While other agencies obsess over vanity metrics like keyword rankings, we're laser-focused on driving qualified traffic that converts into customers. Our track record speaks for itself—we've generated over $574M in revenue for our clients with an average ROI of 540%. Plus, we offer complete transparency, no lock-in contracts, and a 95% client retention rate."
    },
    {
      question: "How much do SEO services Sydney cost?",
      answer: "SEO services in Sydney typically range from $2,000 to $10,000+ per month, depending on the scope of work, competitiveness of your industry, and the agency you choose. At Odin Digital, we offer customized SEO packages tailored to your specific business goals and budget. Rather than offering one-size-fits-all pricing, we assess your needs during a free strategy session and provide a transparent quote based on what it will actually take to achieve your goals."
    },
    {
      question: "What's included in your SEO agency Sydney services?",
      answer: "Our comprehensive SEO agency services include: Local SEO (Google Business Profile optimization, local citations, location-based content), Technical SEO (site audits, crawlability fixes, speed optimization), Content & On-Page SEO (keyword research, content strategy, on-page optimization), and Link Building (digital PR, content marketing, strategic outreach). Every client receives a custom strategy, monthly reporting, and direct access to their account manager."
    },
    {
      question: "How is a Sydney SEO agency different from agencies in other cities?",
      answer: "A Sydney SEO agency brings unique local market knowledge and expertise. We understand Sydney's competitive business landscape, local search behaviors, and regional nuances that impact SEO strategy. From optimizing for Sydney-specific keywords to understanding local competitors and building Sydney-based citations and backlinks, a local agency like Odin Digital has the insights and connections that remote agencies simply can't match."
    },
    {
      question: "What should I look for in a Sydney SEO company?",
      answer: "When choosing a Sydney SEO company, look for: proven results (ask for case studies and client testimonials), transparency (clear reporting and honest communication), no lock-in contracts (agencies confident in their work don't need to lock you in), technical expertise (SEO is complex and requires specialized knowledge), and strategic thinking (they should understand your business, not just your keywords). At Odin Digital, we excel in all these areas."
    },
    {
      question: "How do I find the best SEO company Sydney businesses trust?",
      answer: "Finding the best SEO company in Sydney requires research. Look for agencies with strong case studies, real client testimonials, transparent pricing, and a proven track record of driving revenue growth. Check their own website—if they can't rank their own site, how will they rank yours? Read reviews, ask for references, and schedule consultations with multiple agencies. Odin Digital has been trusted by 283+ successful campaigns and maintains a 95% client retention rate."
    },
    {
      question: "What does an SEO consultant Sydney do differently than an agency?",
      answer: "An SEO consultant in Sydney typically works independently or with a small team, offering more personalized service and often lower costs. However, consultants may lack the resources, team expertise, and scalability of a full-service SEO agency. At Odin Digital, we combine the best of both worlds—personalized attention from dedicated account managers with the full resources and expertise of a proven agency team."
    },
    {
      question: "How does search engine optimisation Sydney work?",
      answer: "Search engine optimisation in Sydney works by improving your website's visibility in search results for relevant keywords that Sydney customers are searching for. This involves technical optimization (making your site fast and crawlable), on-page SEO (optimizing content and structure), off-page SEO (building authoritative backlinks), and local SEO (optimizing for Sydney-specific searches). The goal is to increase organic traffic from qualified prospects who are actively searching for your products or services."
    },
    {
      question: "What are typical SEO packages Sydney agencies offer?",
      answer: "SEO packages in Sydney typically fall into three tiers: Basic ($2,000-$4,000/month) includes foundational SEO, keyword research, and on-page optimization. Mid-tier ($4,000-$7,000/month) adds content creation, link building, and local SEO. Premium ($7,000-$10,000+/month) includes comprehensive strategies for competitive markets, extensive content, aggressive link building, and technical optimization. At Odin Digital, we customize packages to your specific needs rather than forcing you into pre-built tiers."
    },
    {
      question: "Why should I hire an SEO expert Sydney instead of doing it myself?",
      answer: "Hiring an SEO expert in Sydney saves you time, prevents costly mistakes, and delivers faster results. SEO requires specialized technical knowledge, constant learning to keep up with algorithm changes, expensive tools, and significant time investment. An experienced SEO expert brings years of knowledge, proven strategies, established processes, and industry connections. At Odin Digital, our team has delivered $574M+ in client revenue—results that would take years to achieve on your own."
    },
    {
      question: "What makes professional SEO Sydney different from basic SEO?",
      answer: "Professional SEO in Sydney goes far beyond basic keyword optimization. It includes comprehensive technical audits, advanced competitive analysis, strategic content planning, authoritative link building, conversion rate optimization, and continuous performance monitoring. Professional SEO is data-driven, strategic, and focused on ROI—not just rankings. At Odin Digital, we treat SEO as a revenue-generating channel, not just a marketing expense."
    },
    {
      question: "How does search engine optimisation in Sydney differ from other cities?",
      answer: "Search engine optimisation in Sydney requires understanding the local market dynamics, competitive landscape, and regional search behaviors unique to Sydney. This includes optimizing for Sydney-specific keywords, building local citations, understanding Sydney's business ecosystem, and creating content that resonates with Sydney audiences. Local expertise makes a significant difference in results, which is why working with a Sydney-based agency like Odin Digital provides a competitive advantage."
    },
    {
      question: "How long does SEO take to show results?",
      answer: "SEO typically takes 3-6 months to show meaningful results, though some improvements can be seen earlier. The timeline depends on your starting point, competition level, and the scope of work. Quick wins like technical fixes can improve performance within weeks, while competitive keyword rankings may take 6-12 months. We provide transparent timelines and set realistic expectations during your free strategy session."
    },
    {
      question: "Do you guarantee #1 rankings?",
      answer: "No, and you should be wary of any agency that does. Google's algorithm is complex and constantly changing—no one can guarantee specific rankings. What we do guarantee is a strategic, data-driven approach focused on driving qualified traffic and revenue. Our 540% average ROI and 95% client retention rate demonstrate that our focus on real business results works better than chasing ranking promises."
    },
    {
      question: "Will SEO work for my industry?",
      answer: "Yes. We've successfully delivered SEO results for businesses across dozens of industries—from e-commerce and professional services to healthcare, finance, and industrial B2B. Every industry has unique challenges and opportunities, and we customize our approach accordingly. During your free strategy session, we'll discuss your specific industry, competition, and goals to create a tailored plan."
    },
    {
      question: "What's the difference between SEO and Google Ads?",
      answer: "SEO drives organic (unpaid) traffic through improved search rankings, while Google Ads drives paid traffic through advertisements. SEO takes longer to show results but builds long-term, sustainable traffic. Google Ads delivers immediate results but stops when you stop paying. The best strategy often combines both—Google Ads for immediate results while SEO builds long-term growth. We offer both services and can help you determine the right mix for your business."
    }
  ];

  return (
    <>
      <Helmet>
        <title>SEO Sydney | Drive Sales with Expert SEO | Odin Digital</title>
        <meta 
          name="description" 
          content="Sydney SEO services that convert traffic to customers. $574M+ revenue generated. Technical SEO, local rankings & link building. 540% ROI. No contracts. Free audit today." 
        />
        <meta name="keywords" content="seo sydney, seo agency sydney, seo company sydney, sydney seo agency, sydney seo company, best seo company sydney, seo consultant sydney, search engine optimisation sydney, seo packages sydney, seo expert sydney, professional seo sydney, sydney search engine optimisation" />
        <link rel="canonical" href="https://odindigital.com.au/seo-sydney" />
      </Helmet>

      {/* Comprehensive Location Service Schema */}
      <ServiceSchema
        serviceName="SEO Services Sydney"
        serviceType="Search Engine Optimization"
        city="Sydney"
        description="Expert SEO services in Sydney delivering measurable results. We specialize in technical SEO, local search optimization, content strategy, and link building to drive qualified traffic and revenue growth for Sydney businesses. Our data-driven approach has generated $574M+ in client revenue."
        url="/services/sydney-seo"
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "SEO", url: "/services/seo" },
          { name: "Sydney SEO", url: "/services/sydney-seo" }
        ]}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <SideTab />

        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 pt-24 pb-6">
          <Breadcrumbs items={[
            { label: "Services", path: "/services" },
            { label: "Sydney SEO", path: "/services/sydney-seo" }
          ]} />
        </div>

        {/* Hero Section with Sydney Location Image */}
        <section className="relative isolate overflow-hidden pt-12 pb-16 px-6 bg-gradient-to-br from-white via-muted/30 to-muted/20">
          {/* Sydney Harbor Background Image */}
          <div className="absolute inset-0 z-0">
            <picture>
              <source srcSet={locationImages.sydney.webp} type="image/webp" />
              <OptimizedImage 
                src={locationImages.sydney.jpg} 
                alt={locationImages.sydney.alt} 
                sizes="(max-width: 768px) 100vw, 50vw" 
                priority 
                className="w-full h-full object-cover opacity-10" />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
          </div>

          {/* Animated Background Blobs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-pulse z-[1]" />
          <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-muted/15 rounded-full blur-3xl animate-pulse z-[1]" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-muted/10 rounded-full blur-3xl animate-pulse z-[1]" style={{ animationDelay: "3s" }} />
          
          {/* Floating Particles */}
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-muted/20 rounded-full animate-float z-[1]"></div>
          <div className="absolute top-64 right-1/3 w-3 h-3 bg-muted/25 rounded-full animate-float z-[1]" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-48 left-1/2 w-2 h-2 bg-muted/15 rounded-full animate-float z-[1]" style={{ animationDelay: "2s" }}></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-black text-charcoal mb-6 leading-tight">
                Stop Paying for SEO That Doesn't Deliver Results
              </h1>
              <h2 className="text-2xl md:text-3xl text-charcoal/80 mb-8 font-bold">
                Partner with Sydney's Leading SEO Experts and Dominate Local Search
              </h2>
              <p className="text-lg md:text-xl text-charcoal/70 mb-10 leading-relaxed">
                You're here because you're tired of SEO agencies that overpromise and underdeliver. You've watched your competitors climb the rankings while your business stagnates. You've invested in SEO before, only to see little to no return. That ends now.
              </p>
              <Link to="/contact">
                <Button variant="cta" size="xl" className="mb-4 w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 whitespace-normal break-words">
                  Get Your FREE SEO Audit →
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground/70">
                No credit card required • See what's holding you back in 48 hours
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              {metrics.map((metric, index) => (
                <MetricCard key={index} metric={metric} />
              ))}
            </div>
            <p className="text-center text-sm md:text-base text-muted-foreground mt-8 max-w-3xl mx-auto px-4">
              These aren't vanity metrics. This is real revenue for real businesses across Australia.
            </p>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">We Get It. You're Frustrated.</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                And you have every right to be.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 md:p-8">
                    {problem.icon}
                    <h3 className="text-lg md:text-xl font-bold mb-4">{problem.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{problem.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" variant="cta" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8">
                  Book Your Free SEO Strategy Call →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">Real Results for Real Businesses</h2>
              <p className="text-lg md:text-xl text-muted-foreground">Don't just take our word for it</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6 md:p-8">
                  <div className="text-4xl md:text-6xl text-primary font-black mb-4">292%</div>
                  <p className="text-base md:text-lg mb-6 italic">
                    "Odin Digital didn't just improve our rankings—they transformed our entire business. Our organic revenue grew by 292% in the first year, and we've become the go-to brand in our industry."
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold">YCL Jewels</p>
                    <p className="text-sm text-muted-foreground">E-commerce, Sydney</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6 md:p-8">
                  <div className="text-4xl md:text-6xl text-primary font-black mb-4">437%</div>
                  <p className="text-base md:text-lg mb-6 italic">
                    "We tried three other SEO agencies before Odin Digital, and none of them delivered. Within six months, our organic traffic increased by 437%, and we're now closing deals we never would have reached before."
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold">The Mining Store</p>
                    <p className="text-sm text-muted-foreground">Industrial B2B, Australia-wide</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" variant="cta" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8">
                  See More Success Stories →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">Our SEO Services</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                We don't offer cookie-cutter SEO packages. Every strategy is custom-built for your business, your goals, and your market.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 md:p-8">
                    {service.icon}
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-base md:text-lg text-primary font-semibold mb-4">{service.tagline}</p>
                    <p className="text-sm md:text-base text-muted-foreground mb-4">{service.description}</p>
                    <div className="bg-muted/50 p-4 rounded-lg mb-6">
                      <p className="text-xs md:text-sm font-semibold mb-2">Perfect for:</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{service.perfectFor}</p>
                    </div>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full sm:w-auto text-sm sm:text-base">
                        {service.cta} →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">Why Choose Odin Digital?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentiators.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex justify-center">{item.icon}</div>
                    <h3 className="text-lg md:text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" variant="cta" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8">
                  Claim Your Free SEO Strategy Session →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">Our Process</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Simple, transparent, and proven to deliver results
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-black mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20" style={{ transform: 'translateX(-50%)' }}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" variant="cta" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8">
                  Start Ranking Higher Today →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">What Makes Us Different</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-background p-6 md:p-8 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                  <TrendingUp className="text-primary" />
                  We Focus on Revenue, Not Just Rankings
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Rankings are great, but they don't pay the bills. We optimize for keywords that drive qualified traffic and conversions—because at the end of the day, what matters is your bottom line.
                </p>
              </div>
              <div className="bg-background p-6 md:p-8 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                  <Users className="text-primary" />
                  We're an Extension of Your Team
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  You won't get pawned off to a junior account manager. You'll work directly with experienced SEO strategists who understand your business and are invested in your success.
                </p>
              </div>
              <div className="bg-background p-6 md:p-8 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                  <Clock className="text-primary" />
                  We Stay Ahead of Algorithm Changes
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Google's algorithm changes constantly. We stay on top of every update, so you don't have to worry about your rankings tanking overnight.
                </p>
              </div>
              <div className="bg-background p-6 md:p-8 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                  <Shield className="text-primary" />
                  We Build Long-Term Assets
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Our SEO strategies focus on building long-term assets—high-quality content, authoritative backlinks, and technical foundations that continue to deliver results for years to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                Ready to Stop Wasting Money on SEO That Doesn't Work?
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90">
                If you're serious about growing your business through SEO, we're ready to help. Book a free, no-obligation strategy session, and let's talk about how we can help you dominate Sydney's search results.
              </p>
              <Link to="/contact">
                <Button size="xl" variant="secondary" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 bg-white text-primary hover:bg-white/90">
                  Book Your Free SEO Strategy Call →
                </Button>
              </Link>
              <p className="text-xs sm:text-sm mt-6 opacity-75">
                Limited strategy sessions available this month • No obligation • No sales pitch • Just honest advice
              </p>
            </div>
          </div>
        </section>

        {/* Location-Specific Content */}
        <LocationContent city="Sydney" serviceType="SEO" />

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">Frequently Asked Questions</h2>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Everything you need to know about our SEO services
                </p>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-background">
                    <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="text-center mt-12">
                <p className="text-base md:text-lg mb-6">Still have questions?</p>
                <Link to="/contact">
                  <Button size="lg" variant="cta" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8">
                    Book a Free Call →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* Related Locations */}
        <RelatedLocations 
          locations={relatedLocationsList}
          title="SEO Services in Other Australian Cities"
        />

        <Footer />

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t shadow-lg md:hidden z-50">
          <Link to="/contact" className="block">
            <Button size="lg" variant="cta" className="w-full">
              Get Your Free SEO Audit →
            </Button>
          </Link>
        </div>
      </div>

      {/* BreadcrumbList Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
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
                "name": "Services",
                "item": "https://odindigital.com.au/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "SEO",
                "item": "https://odindigital.com.au/services/seo"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Sydney",
                "item": "https://odindigital.com.au/seo-sydney"
              }
            ]
          })}
        </script>
      </Helmet>
    </>
  );
};

export default SydneySEO;