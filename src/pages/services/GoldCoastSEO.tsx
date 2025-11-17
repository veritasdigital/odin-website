import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import LocationContent from "@/components/LocationContent";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { CheckCircle, TrendingUp, Users, Target, Search, BarChart, Shield, Zap, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Count-up animation hook
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
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

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const delayTimeout = setTimeout(() => {
      setCount(0);
      
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, 100);

    return () => clearTimeout(delayTimeout);
  }, [end, duration, isVisible]);

  return { count, ref: countRef };
};

const MetricCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  const finalText = suffix === "M+" ? `$${value}${suffix}` : `${value}${suffix}`;

  return (
    <Card className="p-4 sm:p-6 text-center">
      <div ref={ref} className="relative text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-2 whitespace-nowrap [font-variant-numeric:tabular-nums]">
        <span className="invisible">{finalText}</span>
        <span className="absolute inset-0">
          {count !== null ? (suffix === "M+" ? `$${count}${suffix}` : `${count}${suffix}`) : "\u00A0"}
        </span>
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground font-medium">{label}</div>
    </Card>
  );
};

const GoldCoastSEO = () => {
  const metrics = [
    { value: 574, suffix: "M+", label: "Verified Client Revenue" },
    { value: 540, suffix: "%", label: "Average Client ROI" },
    { value: 12, suffix: "+", label: "Years Experience" },
    { value: 200, suffix: "+", label: "Businesses Scaled" },
  ];

  const problems = [
    {
      title: "Chasing Rankings That Don't Convert",
      description: "Your agency got you to page 1, but the phone still isn't ringing. You're paying for traffic that doesn't turn into customers, and you're starting to wonder if SEO even works.",
    },
    {
      title: "Locked Into Underwhelming Contracts",
      description: "You're stuck in a 12-month contract with an agency that's underdelivering. They promised the world, but all you've got is a monthly report full of jargon and excuses.",
    },
    {
      title: "Drowning in Empty Promises",
      description: "Every SEO company says they're 'data-driven' and 'results-focused,' but you've heard it all before. You need proof, not promises.",
    },
  ];

  const testimonials = [
    {
      quote: "Odin Digital transformed our online presence. We've seen a 400% increase in qualified leads from organic search in just 6 months.",
      author: "Sarah Mitchell",
      company: "Gold Coast Law Firm",
    },
    {
      quote: "Finally, an SEO company that actually delivers what they promise. Our revenue from organic traffic has tripled since working with Odin Digital.",
      author: "James Chen",
      company: "E-commerce Business Owner",
    },
    {
      quote: "The transparency and direct access to senior consultants made all the difference. We're no longer just a number - we're a priority.",
      author: "Emma Rodriguez",
      company: "Medical Practice",
    },
  ];

  const services = [
    {
      icon: <Search className="w-12 h-12 text-primary mb-4" />,
      title: "Local SEO Gold Coast",
      tagline: "Dominate Your Local Market",
      description: "Get found by customers in your area when they're actively searching for your services. We optimize your Google Business Profile, local citations, and location-specific content to ensure you're the obvious choice.",
      cta: "Get Your FREE Local SEO Audit →",
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary mb-4" />,
      title: "E-commerce SEO",
      tagline: "More Traffic, More Sales",
      description: "Drive qualified traffic to your online store and turn browsers into buyers. We optimize your product pages, category structure, and technical SEO to maximize your revenue from organic search.",
      cta: "Get Your FREE E-commerce SEO Strategy →",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary mb-4" />,
      title: "Enterprise SEO",
      tagline: "Scale Your Organic Growth",
      description: "For businesses ready to dominate their industry. We develop comprehensive SEO strategies that target high-value keywords, build authoritative backlinks, and deliver sustainable long-term growth.",
      cta: "Get Your FREE SEO Strategy →",
    },
  ];

  const differentiators = [
    {
      icon: <Shield className="w-8 h-8 text-primary mb-3" />,
      title: "No Lock-In Contracts",
      description: "We earn your business every month. If we're not delivering results, you're free to walk away.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary mb-3" />,
      title: "Direct Access to Experts",
      description: "Work directly with senior SEO consultants, not junior account managers reading from a script.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary mb-3" />,
      title: "Revenue-Focused Approach",
      description: "We don't care about vanity metrics. Our goal is to increase your bottom line, period.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary mb-3" />,
      title: "Gold Coast Market Expertise",
      description: "We know the local market inside out. We understand what works on the Gold Coast.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Deep-Dive Audit",
      description: "We analyze your current SEO performance, competitive landscape, and untapped opportunities.",
    },
    {
      number: "02",
      title: "Custom Strategy",
      description: "We build a tailored roadmap designed to achieve your specific revenue goals, not generic rankings.",
    },
    {
      number: "03",
      title: "Relentless Execution",
      description: "Our team implements on-page optimization, technical fixes, content creation, and link building with precision.",
    },
    {
      number: "04",
      title: "Transparent Reporting",
      description: "You get clear, jargon-free reports that show exactly how SEO is impacting your revenue.",
    },
  ];

  const whyChooseUs = [
    {
      title: "$574M+ in Verified Client Revenue",
      description: "We're not just talking about rankings - we're talking about real, measurable revenue growth. Our clients have generated over $574 million in verified revenue, and we can prove it.",
    },
    {
      title: "540% Average ROI",
      description: "For every dollar you invest in our SEO services, our clients see an average return of $5.40. That's the kind of return that transforms businesses.",
    },
    {
      title: "Radical Transparency",
      description: "No smoke and mirrors. No hidden fees. No BS. You'll always know exactly what we're doing, why we're doing it, and what results it's generating.",
    },
    {
      title: "Proven Track Record on the Gold Coast",
      description: "We've helped countless Gold Coast businesses dominate their markets. We understand the local competitive landscape and know exactly what it takes to win.",
    },
  ];

  const faqs = [
    {
      question: "How much do SEO services cost on the Gold Coast?",
      answer: "The cost of SEO on the Gold Coast can vary significantly, typically ranging from $1,000 to $5,000+ per month. The price depends on factors like the competitiveness of your industry, the size of your website, and the scope of the campaign. At Odin Digital, we don't offer cheap, cookie-cutter packages. Instead, we create custom SEO strategies tailored to your specific business goals and budget. We focus on delivering a high return on investment, and our transparent pricing ensures you know exactly what you're paying for. The real question isn't about cost, but about value. A professional SEO Gold Coast campaign should be an investment that generates a significant return, not an expense. Ready to see what a results-driven investment looks like? Let's talk.",
    },
    {
      question: "What makes you the best SEO company Gold Coast has to offer?",
      answer: "What makes us the best SEO company Gold Coast businesses trust is our relentless focus on revenue, not just rankings. While other agencies get bogged down in vanity metrics, we prioritize what truly matters: driving profitable growth for your business. With a track record of generating over $574M in verified client revenue and achieving an average 540% ROI, our results speak for themselves. We combine data-driven strategies with radical transparency and direct access to senior SEO consultants. Plus, our no lock-in contracts policy means we have to earn your business every single month. We're not just a service provider; we're a dedicated partner in your success. Experience the difference that a truly performance-focused Gold Coast SEO company can make.",
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy, not a quick fix. Typically, you can expect to see initial improvements in rankings and traffic within 3-6 months. However, significant revenue growth often takes 6-12 months as we build domain authority, optimize your content, and establish your brand as an industry leader. That said, we often implement quick wins in the first few weeks that can start driving results immediately. The timeline depends on factors like your current website condition, competition level, and industry. Unlike agencies that promise overnight success, we set realistic expectations and then consistently overdeliver. Our focus is on sustainable, long-term growth that compounds over time.",
    },
    {
      question: "Do you guarantee first page rankings?",
      answer: "Anyone who guarantees #1 rankings is either lying or using black-hat tactics that will get you penalized by Google. What we do guarantee is a comprehensive, ethical SEO strategy designed to improve your visibility, drive qualified traffic, and increase your revenue. We focus on ranking for keywords that actually matter to your business - the ones that drive conversions, not just vanity traffic. Our track record speaks for itself: we've helped hundreds of businesses achieve top rankings for their target keywords. While we can't control Google's algorithm, we can control the quality and consistency of our work, and that's what drives results.",
    },
    {
      question: "What's the difference between local SEO and regular SEO?",
      answer: "Local SEO focuses on optimizing your online presence to attract customers in a specific geographic area - in this case, the Gold Coast. It involves optimizing your Google Business Profile, building local citations, generating reviews, and creating location-specific content. Regular (or organic) SEO focuses on ranking nationally or internationally for broader keywords. For most Gold Coast businesses, local SEO is incredibly valuable because it targets customers who are ready to buy right now in your area. We typically recommend a hybrid approach that combines local SEO for immediate, high-intent traffic with broader SEO strategies for long-term brand building and market dominance.",
    },
    {
      question: "How do you measure SEO success?",
      answer: "We measure success by the metrics that actually matter to your business: revenue, qualified leads, and ROI. While we track rankings, traffic, and other SEO metrics, these are only meaningful if they're contributing to your bottom line. Every month, you'll receive a transparent report that shows exactly how our SEO efforts are impacting your business goals. We'll show you the revenue generated from organic search, the conversion rate of organic traffic, and the overall ROI of your SEO investment. If we're not moving the needle on what matters, we'll pivot our strategy until we do.",
    },
    {
      question: "Why don't you offer lock-in contracts?",
      answer: "Simple: we believe in earning your business every single month. Lock-in contracts create complacency. When an agency has you locked in for 12 months, there's no incentive for them to hustle and deliver exceptional results. We're so confident in our ability to drive real growth for your business that we don't need to trap you in a long-term agreement. If we're not delivering value, you should be able to leave. This approach keeps us accountable and ensures we're always focused on what matters most: your success. It's a win-win.",
    },
    {
      question: "Do you work with businesses outside the Gold Coast?",
      answer: "Yes, while we specialize in the Gold Coast market, we work with businesses across Australia and internationally. Our deep understanding of the Gold Coast gives us unique insights into local SEO, but our strategies are effective anywhere. Whether you're a local business looking to dominate the Gold Coast market or a national brand looking to scale, we have the expertise to help you succeed.",
    },
    {
      question: "What industries do you specialize in?",
      answer: "We've delivered results across a wide range of industries, including legal services, medical practices, e-commerce, real estate, home services, and professional services. Our approach is industry-agnostic because the fundamentals of effective SEO remain the same: understand your audience, create valuable content, build authority, and optimize for conversions. That said, we do have deep expertise in highly competitive industries where the stakes are high and the margins for error are slim.",
    },
    {
      question: "How is your approach different from other Gold Coast SEO companies?",
      answer: "Most SEO companies focus on rankings and traffic. We focus on revenue. Most agencies lock you into 12-month contracts. We don't. Most agencies assign you to a junior account manager. We give you direct access to senior consultants. Most agencies report on vanity metrics. We report on ROI. The difference is in our philosophy: we're not here to sell you SEO services. We're here to become a profit center for your business. If we're not making you significantly more money than you're paying us, we're failing - and you're free to leave.",
    },
    {
      question: "What is technical SEO and why does it matter?",
      answer: "Technical SEO is the foundation of your entire SEO strategy. It involves optimizing the backend structure of your website so that search engines can crawl, index, and understand your content effectively. This includes things like site speed, mobile responsiveness, structured data, XML sitemaps, and fixing crawl errors. If your technical SEO is broken, it doesn't matter how great your content is - Google won't be able to properly rank your site. We conduct a comprehensive technical audit at the start of every engagement and fix critical issues that could be holding you back.",
    },
    {
      question: "How important are backlinks in 2025?",
      answer: "Backlinks remain one of the most important ranking factors in Google's algorithm. However, the quality of backlinks matters far more than quantity. A single link from a highly authoritative, relevant website is worth more than hundreds of low-quality links. Our link-building strategy focuses on earning high-quality backlinks through content marketing, digital PR, and relationship building. We never use shady tactics like buying links or participating in link schemes - those strategies will get you penalized by Google.",
    },
    {
      question: "Do you offer content writing services?",
      answer: "Yes, content is a core component of our SEO strategies. We have an in-house team of experienced writers who create SEO-optimized content that's designed to rank well and convert visitors into customers. But we don't just churn out generic blog posts. Every piece of content we create is strategically aligned with your business goals and designed to attract, engage, and convert your ideal customers.",
    },
    {
      question: "Can you help with Google Ads as well as SEO?",
      answer: "Absolutely. In fact, we recommend a combined approach of SEO and Google Ads for maximum impact. While SEO builds long-term, sustainable traffic, Google Ads can drive immediate results while your SEO efforts gain traction. We offer comprehensive Google Ads management services and can create an integrated strategy that leverages both channels for optimal ROI.",
    },
    {
      question: "How do I get started?",
      answer: "Getting started is simple. Click any of the 'Get Your FREE SEO Strategy' buttons on this page to schedule a consultation. We'll conduct a preliminary audit of your website, discuss your business goals, and provide you with a clear, actionable roadmap for how we can help you dominate the Gold Coast market. There's no obligation and no pushy sales tactics - just an honest conversation about whether we're the right fit for your business.",
    },
  ];

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
          "url": "https://odindigital.com.au/logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+61-1300-123-456",
          "contactType": "sales"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://odindigital.com.au/#localbusiness",
        "name": "Odin Digital - Gold Coast SEO",
        "image": "https://odindigital.com.au/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Gold Coast",
          "addressRegion": "QLD",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -28.0167,
          "longitude": 153.4000
        },
        "url": "https://odindigital.com.au/seo-gold-coast",
        "telephone": "+61-1300-123-456",
        "priceRange": "$$$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
        }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/seo-gold-coast/#service",
        "serviceType": "SEO Services",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Gold Coast"
        },
        "description": "Professional SEO services in Gold Coast to increase your organic traffic, leads, and revenue. We focus on results-driven strategies with no lock-in contracts.",
        "name": "Gold Coast SEO Services"
      },
      {
        "@type": "FAQPage",
        "@id": "https://odindigital.com.au/seo-gold-coast/#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>SEO Company Gold Coast | Best SEO Agency | Odin Digital</title>
        <meta name="description" content="Gold Coast's top SEO company. $574M+ client revenue. We deliver real results, not just rankings. No lock-in contracts. Get your free SEO strategy call." />
        <meta name="keywords" content="seo company gold coast, gold coast seo, seo agency gold coast, local seo gold coast, seo services gold coast" />
        <link rel="canonical" href="https://odindigital.com.au/seo-gold-coast" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
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
                <BreadcrumbPage>Gold Coast</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-background/95 backdrop-blur-sm border-t md:hidden">
          <Link to="/contact" className="block">
            <Button variant="cta" size="lg" className="w-full text-sm px-4 py-3 h-auto">
              <span className="truncate">Get Your FREE SEO Strategy</span>
              <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative isolate overflow-hidden pt-12 pb-16 px-6 bg-gradient-to-br from-white via-muted/30 to-muted/20">
          {/* Animated Background Blobs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-muted/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-muted/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />
          
          {/* Floating Particles */}
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-muted/20 rounded-full animate-float"></div>
          <div className="absolute top-64 right-1/3 w-3 h-3 bg-muted/25 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-48 left-1/2 w-2 h-2 bg-muted/15 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-black text-charcoal mb-6 leading-tight">
                Tired of SEO Companies That Promise the World But Deliver Nothing?
              </h1>
              <h2 className="text-2xl md:text-3xl text-charcoal/80 mb-8 font-bold">
                Get Real Results from Gold Coast's Only Revenue-Obsessed SEO Company
              </h2>
              <p className="text-lg md:text-xl text-charcoal/70 mb-4 leading-relaxed">
                We're not here to boost your rankings. We're here to explode your revenue.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
                With over $574M in verified client revenue and a 540% average ROI, we don't just talk about results - we deliver them.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
                No lock-in contracts. No BS. Just data-driven SEO strategies that drive real business growth.
              </p>
              <Link to="/contact">
                <Button variant="cta" size="xl" className="mb-4 w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 whitespace-normal break-words">
                  Get Your FREE SEO Strategy
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground/70">
                No credit card required • See what's holding you back in 48 hours
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-4 break-words">
                Sound Familiar?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto break-words px-4">
                You're not alone. These are the most common frustrations we hear from businesses on the Gold Coast.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 break-words">{problem.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground break-words">{problem.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Don't just take our word for it - hear from businesses we've helped dominate their markets.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 sm:p-8">
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 italic break-words">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="text-sm sm:text-base font-bold text-foreground break-words">{testimonial.author}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground break-words">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Our SEO Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tailored strategies designed to dominate your market and drive measurable revenue growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 flex flex-col overflow-hidden">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-foreground mb-2 break-words">{service.title}</h3>
                  <p className="text-primary font-semibold mb-4 break-words">{service.tagline}</p>
                  <p className="text-muted-foreground mb-6 flex-grow break-words">{service.description}</p>
                  <Link to="/contact" className="mt-auto">
                    <Button variant="outline" className="w-full text-xs sm:text-sm px-3 py-2 h-auto">
                      <span className="break-words line-clamp-2">{service.cta}</span>
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Why We're Different
              </h2>
              <p className="text-lg text-muted-foreground">
                We're not your typical SEO company. Here's what sets us apart.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentiators.map((diff, index) => (
                <div key={index} className="text-center px-2">
                  <div className="flex justify-center mb-4">{diff.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 break-words">{diff.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground break-words">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Our Proven Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A systematic, data-driven approach that delivers consistent results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative px-2">
                  <div className="text-5xl sm:text-6xl font-black text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 break-words">{step.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground break-words">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Why Gold Coast Businesses Choose Odin Digital
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="p-6 sm:p-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 break-words">{reason.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground break-words">{reason.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 break-words">
              Ready to Stop Wasting Money on SEO That Doesn't Work?
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 break-words px-4">
              It's time to partner with an SEO company Gold Coast businesses actually trust. One that's obsessed with your revenue, not just rankings.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 break-words px-4">
              Book your free strategy call today and discover exactly how we can help you dominate your market and drive real, measurable growth.
            </p>

            <Link to="/contact">
              <Button variant="cta" size="xl" className="group text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 h-auto">
                <span className="break-words">Get Your FREE SEO Strategy Now</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <p className="text-xs sm:text-sm text-muted-foreground mt-6 break-words px-4">
              No lock-in contracts. No obligation. Just honest advice from SEO experts who care about your success.
            </p>
          </div>
        </section>

        {/* Location-Specific Content */}
        <LocationContent city="Gold Coast" serviceType="SEO" />

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our SEO services on the Gold Coast.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-sm sm:text-base break-words pr-8">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground break-words">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default GoldCoastSEO;
