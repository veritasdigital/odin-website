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
  Users, 
  Award, 
  Shield, 
  Sparkles, 
  MessageSquare, 
  Search, 
  ShoppingCart, 
  CheckCircle,
  ArrowRight,
  BarChart
} from "lucide-react";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Footer } from "@/components/Footer";

const AdelaideSEO = () => {
  const { openForm } = useMarketingForm();

  const metrics = [
    { number: "$574M+", label: "Verified Client Revenue" },
    { number: "540%", label: "Average ROI on Ad Spend" },
    { number: "95%", label: "Client Retention Rate" },
    { number: "283+", label: "Successful Campaigns" },
  ];

  const problems = [
    {
      icon: <Target className="w-12 h-12 text-primary mb-4" />,
      title: "You're Invisible on Google",
      description: "Your competitors are ranking on page 1 while you're buried on page 5. You're losing thousands of potential customers every single day to businesses that aren't even better than you.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary mb-4" />,
      title: "Your Current SEO Agency Isn't Delivering",
      description: "You're locked into a 12-month contract with an agency that sends you reports full of vanity metrics but zero real business results. Rankings are up, but sales are flat.",
    },
    {
      icon: <Users className="w-12 h-12 text-primary mb-4" />,
      title: "You're Wasting Money on the Wrong Strategy",
      description: "You've tried DIY SEO, cheap freelancers, and offshore agencies. The result? Wasted budget, zero meaningful traffic, and you're still not showing up for the searches that matter.",
    },
  ];

  const services = [
    {
      icon: <Search className="w-12 h-12 text-primary mb-4" />,
      title: "Local SEO Adelaide",
      description: "Dominate local search results and drive more customers. We optimize your Google Business Profile, build local citations, and create location-specific content to put you in front of Adelaide customers ready to buy.",
      cta: "Get Your FREE Local SEO Audit",
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-primary mb-4" />,
      title: "eCommerce SEO",
      description: "Turn your online store into a sales machine. We optimize product pages, build high-quality backlinks, and implement technical SEO strategies to increase visibility and drive more sales through your website.",
      cta: "Get Your FREE eCommerce SEO Audit",
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary mb-4" />,
      title: "Technical SEO",
      description: "Fix the technical issues holding you back. We perform deep technical analysis and optimization to ensure your site is perfectly structured for Google to crawl, index, and rank your pages.",
      cta: "Get Your FREE Technical SEO Audit",
    },
  ];

  const differentiators = [
    {
      icon: <Award className="w-12 h-12 text-primary mb-4" />,
      title: "Revenue-Focused, Not Rankings-Focused",
      description: "We don't just chase rankings. We build strategies that drive real, measurable revenue for your business. Our success is measured in your bottom line.",
    },
    {
      icon: <Shield className="w-12 h-12 text-primary mb-4" />,
      title: "No Lock-In Contracts",
      description: "We earn your business every single month. If we don't deliver, you can walk away. No questions asked. Our 95% retention rate speaks for itself.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary mb-4" />,
      title: "Transparent, Real-Time Reporting",
      description: "See exactly what we're doing and the results we're achieving through your 24/7 live dashboard. No fluff. No vanity metrics. Just real business outcomes.",
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-primary mb-4" />,
      title: "Direct Access to Senior Experts",
      description: "You'll work directly with senior SEO strategists, not junior account managers reading from a script. Get real expertise, real insights, real results.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Deep-Dive Discovery & Audit",
      description: "We analyze your website, your competitors, and your market to identify exactly what's holding you back and where the biggest opportunities are.",
    },
    {
      number: "02",
      title: "Custom Strategy & Roadmap",
      description: "We build a bespoke SEO strategy tailored to your business goals, your budget, and your timeline. No cookie-cutter packages.",
    },
    {
      number: "03",
      title: "Execution & Optimization",
      description: "Our team implements the strategy while constantly testing and refining for maximum impact. We move fast and iterate based on data.",
    },
    {
      number: "04",
      title: "Reporting & Continuous Growth",
      description: "Track your rankings, traffic, and revenue growth with transparent reporting and regular strategy calls. We scale what works.",
    },
  ];

  const whyChooseUs = [
    {
      title: "We're Not Just Another SEO Agency",
      description: "Most agencies talk about rankings and traffic. We talk about revenue and ROI. We're a digital marketing partner that understands your business goals and is committed to helping you achieve them.",
    },
    {
      title: "We've Generated $574M+ in Client Revenue",
      description: "Our strategies don't just get you to page 1—they turn your website into a revenue-generating machine that works 24/7. We've proven this across hundreds of campaigns.",
    },
    {
      title: "We're Adelaide Locals Who Understand Your Market",
      description: "We know the Adelaide business landscape. We know your customers. We know what it takes to win in this competitive market. Local knowledge gives you an edge.",
    },
    {
      title: "We Use Cutting-Edge AI Technology",
      description: "We combine human expertise with advanced AI tools to find opportunities your competitors are missing and scale faster than traditional SEO methods allow.",
    },
  ];

  const faqs = [
    {
      question: "What makes Odin Digital the best SEO company Adelaide has to offer?",
      answer: "We believe we stand out as the best SEO company in Adelaide because our entire focus is on delivering a tangible return on your investment. While other agencies get distracted by vanity metrics, we are obsessed with generating real revenue for your business. Our track record, which includes over $574 million in verified client revenue and a 540% average ROI on ad spend, speaks for itself. We combine this with deep expertise—over 182 years of combined team experience—and a commitment to radical transparency. Most importantly, we don't use lock-in contracts. Our 95% client retention rate comes from earning your business every single month by delivering results you can see and feel.",
    },
    {
      question: "How much do your SEO services in Adelaide cost?",
      answer: "The investment for our SEO services in Adelaide is customized to your specific business needs, goals, and the competitiveness of your industry. We don't offer cheap, one-size-fits-all packages because they simply don't provide the results that serious businesses need. Our comprehensive SEO campaigns are priced to deliver maximum impact and a significant ROI. To get a clear and accurate quote, the best step is to schedule a free, no-obligation SEO strategy session.",
    },
    {
      question: "How long does it take to see results from Adelaide SEO services?",
      answer: "SEO is a long-term investment in your business's growth, not an overnight fix. While you can expect to see initial positive signals and improvements within the first 3 months (like technical site health improvements and on-page optimizations), significant and sustainable growth in organic traffic, leads, and revenue typically takes 6 to 12 months. This timeline can vary based on factors like your website's age, the authority of your domain, and the intensity of competition in the Adelaide market.",
    },
    {
      question: "Do I need Local SEO for my Adelaide business?",
      answer: "Absolutely. If you have a physical location or serve a specific geographic area in Adelaide, Local SEO is critical. A huge percentage of mobile searches are for local businesses (e.g., 'plumber near me,' 'café Adelaide CBD'). A targeted local SEO campaign ensures that when customers in your area are searching for your products or services, you're the first business they find. It's one of the most effective ways to drive qualified traffic and compete with larger chains.",
    },
    {
      question: "What's included in your SEO services Adelaide?",
      answer: "Our comprehensive SEO services are designed to cover every aspect of your online presence. This includes a deep technical SEO audit, in-depth keyword research and strategy, on-page optimization, high-quality content creation, and authoritative link building. We also provide detailed, transparent reporting through a 24/7 live dashboard so you can track your progress in real-time. Every campaign is managed by a senior SEO consultant who will work closely with you to ensure your strategy is aligned with your business objectives.",
    },
    {
      question: "Why should I choose Odin Digital over a pure-play Adelaide SEO agency?",
      answer: "We offer a holistic approach. While pure-play SEO firms are limited to one channel, we are experts in the entire digital marketing mix (SEO, PPC, Meta Ads, Web Design). This means we don't just optimize your organic search; we ensure all your channels are working together. This integrated strategy is crucial in a competitive market like Adelaide, allowing us to pivot quickly and maximize your ROI across the board, giving you a significant competitive advantage.",
    },
    {
      question: "Do you require lock-in contracts for SEO Adelaide?",
      answer: "No, we don't. We are so confident in our ability to deliver measurable results that we don't need to lock our clients into long-term contracts. We work on a month-to-month basis, which keeps us accountable and ensures we are constantly striving to earn your business. This is a core part of our commitment to transparency and our client-first approach. We believe that a strong partnership is built on trust and performance, not restrictive contracts. Our 95% client retention rate is proof that this model works.",
    },
    {
      question: "How do you measure SEO success for Adelaide businesses?",
      answer: "We measure success based on the metrics that actually impact your bottom line: leads, sales, and revenue. While we track rankings and traffic, these are secondary to your return on investment. Our 24/7 reporting dashboard provides a transparent view of your key performance indicators (KPIs), including conversion rates, cost per acquisition (CPA), and overall ROI. We hold regular strategy meetings to review your progress and ensure our efforts are aligned with your financial goals. For us, success isn't about getting you to page one; it's about making page one profitable for you.",
    },
    {
      question: "How does AI SEO work for your Adelaide clients?",
      answer: "We leverage cutting-edge AI SEO tools to enhance our strategies and deliver faster, more effective results. AI helps us analyze vast amounts of data to uncover keyword opportunities, monitor competitor strategies in real-time, and identify technical issues that could be hurting your rankings. However, we don't rely on AI alone. We believe the perfect SEO strategy combines the analytical power of artificial intelligence with the creative and strategic insights of our experienced human experts. This hybrid approach allows us to create sophisticated, data-driven campaigns that are far more effective than those of a typical SEO firm Adelaide.",
    },
    {
      question: "What's the difference between SEO and Google Ads in Adelaide?",
      answer: "SEO focuses on earning organic (free) rankings in search results through optimization and content, while Google Ads is paid advertising where you pay per click. SEO takes longer to see results but delivers compounding long-term ROI. Google Ads delivers immediate traffic but stops when you stop paying. We recommend a balanced approach using both for maximum impact. Our integrated expertise in both channels allows us to create a comprehensive search strategy that dominates both organic and paid results.",
    },
    {
      question: "What's your process for SEO in Adelaide?",
      answer: "Our process is built on transparency and collaboration. It starts with a deep-dive discovery session to understand your business, goals, and customers. From there, we conduct a comprehensive audit of your website and online presence. Next, we develop a custom, data-driven strategy and a clear roadmap for the first 90 days. Once the strategy is approved, our team of senior specialists gets to work on implementation, covering technical SEO, content, and link building. Throughout the entire process, you'll have direct communication with your dedicated strategist and full visibility through your 24/7 reporting dashboard.",
    },
    {
      question: "How do you choose keywords for an Adelaide SEO campaign?",
      answer: "Our keyword selection process is purely focused on commercial intent. We use a combination of advanced tools and manual research to identify the keywords that your ideal customers are using when they are ready to make a purchase. We analyze factors like search volume, competition, and, most importantly, the intent behind the search. We prioritize money keywords—phrases that indicate a strong desire to buy—over high-volume keywords that only generate informational traffic. This ensures that the traffic we drive to your site is highly qualified and more likely to convert into actual sales and revenue.",
    },
    {
      question: "Do you offer AI-powered SEO services?",
      answer: "Absolutely. We leverage cutting-edge AI SEO technology to scale content creation, uncover hidden keyword opportunities, and automate time-consuming tasks. This allows us to deliver faster results at a better ROI while our human experts focus on strategy and creativity. AI is a powerful tool, but it's most effective when combined with human expertise and strategic thinking.",
    },
    {
      question: "Can you guarantee first-page rankings in Adelaide?",
      answer: "No reputable SEO agency Adelaide can guarantee specific rankings. Google's algorithm is constantly changing, and the Adelaide market is extremely competitive. However, we can guarantee that we will apply our proven, data-driven methodology to give you the best possible chance of achieving top rankings for your target keywords. We have a long track record of success and a 95% client retention rate, which demonstrates our ability to consistently deliver results. We are transparent about what we can and cannot control, and we focus on the metrics that truly matter: traffic, leads, and revenue.",
    },
    {
      question: "What makes your SEO packages Adelaide different?",
      answer: "Unlike other agencies that offer rigid, one-size-fits-all packages, we create completely custom solutions. We don't believe in selling you services you don't need. Instead, we start with your business goals and build a tailored strategy designed to achieve them. This means you get a more efficient, effective, and cost-effective campaign. Our packages are also flexible; we can scale our services up or down as your needs change. And because we don't have lock-in contracts, you have the freedom to adjust your investment at any time. It's a smarter, more agile approach to SEO management Adelaide.",
    },
  ];

  const schemaOrgJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://odindigital.com.au/#organization",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://odindigital.com.au/logo.png",
        },
        "description": "Performance-focused digital marketing agency specializing in PPC, Meta Ads, Web Design, and SEO with no lock-in contracts.",
        "founder": {
          "@type": "Person",
          "name": "Lucas Durante",
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "url": "https://odindigital.com.au/contact",
        },
        "sameAs": [
          "https://www.linkedin.com/company/odin-digital",
          "https://www.facebook.com/odindigital",
          "https://twitter.com/odindigital",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://odindigital.com.au/seo-adelaide/#localbusiness",
        "name": "Odin Digital - SEO Adelaide",
        "image": "https://odindigital.com.au/adelaide-seo.jpg",
        "url": "https://odindigital.com.au/seo-adelaide",
        "telephone": "+61-XXX-XXX-XXX",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Your Street Address",
          "addressLocality": "Adelaide",
          "addressRegion": "SA",
          "postalCode": "5000",
          "addressCountry": "AU",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -34.9285,
          "longitude": 138.6007,
        },
        "areaServed": {
          "@type": "City",
          "name": "Adelaide",
        },
        "priceRange": "$$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "50",
        },
      },
      {
        "@type": "Service",
        "serviceType": "SEO Services Adelaide",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital",
        },
        "areaServed": {
          "@type": "City",
          "name": "Adelaide",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "SEO Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local SEO Adelaide",
                "description": "Dominate local search results and drive more customers with powerful local SEO strategies.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "eCommerce SEO",
                "description": "Turn your online store into a sales machine with expert eCommerce SEO optimization.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technical SEO",
                "description": "Deep technical SEO analysis and optimization to fix critical site issues and improve rankings.",
              },
            },
          ],
        },
      },
      {
        "@type": "Review",
        "@id": "https://odindigital.com.au/seo-adelaide/#review",
        "itemReviewed": {
          "@id": "https://odindigital.com.au/#organization",
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Lenny Catalano",
        },
        "reviewBody": "They really took the time to understand our business, our brand, and our priorities and have consistently delivered exceptional results. Can't recommend them highly enough.",
        "publisher": {
          "@type": "Organization",
          "name": "Adriatic Furniture",
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
    ],
  };

  return (
    <>
      <Helmet>
        <title>SEO Adelaide | SEO Services Adelaide | Odin Digital</title>
        <meta
          name="description"
          content="Adelaide's top SEO company. $574M+ client revenue. We deliver real results, not excuses. No lock-in contracts. Get your free SEO audit today."
        />
        <meta
          name="keywords"
          content="SEO Adelaide, SEO services Adelaide, Adelaide SEO company, local SEO Adelaide, SEO agency Adelaide"
        />
        <link rel="canonical" href="https://odindigital.com.au/seo-adelaide" />
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 pt-4">
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
                <BreadcrumbPage>Adelaide</BreadcrumbPage>
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
                SEO Adelaide: Stop Wasting Money on SEO That Doesn't Convert
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 animate-fade-in">
                Tired of Adelaide SEO Agencies That Promise the World But Lock You Into a 12-Month Contract of Excuses?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto animate-fade-in">
                We're Odin Digital, and we're done with the SEO industry's BS. While other Adelaide SEO companies are selling you on vanity metrics like rankings and traffic, we're obsessed with one thing: growing your revenue.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in">
                We've generated over $574 million in verified client revenue. We don't need to lock you into long-term contracts because we deliver results that make you want to stay.
              </p>
              <Button
                onClick={openForm}
                size="xl"
                className="bg-gradient-primary text-white shadow-primary hover:shadow-glow transition-all duration-300 group h-14 px-8 text-lg font-bold"
              >
                Get Your FREE Adelaide SEO Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Social Proof Metrics */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                    {metric.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Problem-Agitation */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Your Adelaide SEO Isn't Working. Here's Why.
              </h2>
              <p className="text-lg text-muted-foreground">
                Most Adelaide businesses are making the same critical mistakes that keep them invisible on Google.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <Card
                  key={index}
                  className="p-8 text-center hover:shadow-card transition-all duration-300 border-border"
                >
                  <div className="flex justify-center">{problem.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Testimonials */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
                What Adelaide Businesses Say About Us
              </h2>
              <Card className="p-8 md:p-12 border-primary/20 shadow-card">
                <div className="relative">
                  <div className="text-6xl text-primary/20 absolute -top-4 -left-2">"</div>
                  <blockquote className="text-lg md:text-xl text-foreground mb-6 relative z-10 italic">
                    "They really took the time to understand our business, our brand, and our priorities and have consistently delivered exceptional results. Can't recommend them highly enough."
                  </blockquote>
                  <div className="flex items-center">
                    <div>
                      <div className="font-bold text-foreground">Lenny Catalano</div>
                      <div className="text-sm text-muted-foreground">Adriatic Furniture</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 5: Services */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Our Adelaide SEO Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Customized strategies designed to dominate your market and drive real revenue.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-card transition-all duration-300 border-border"
                >
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-center">
                    <Link to={index === 0 ? "/local-seo" : index === 1 ? "/ecommerce-seo" : "/services/seo"} className="hover:text-primary transition-colors">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                    {service.description}
                  </p>
                  <Button
                    onClick={openForm}
                    className="w-full bg-gradient-primary text-white shadow-primary hover:shadow-glow transition-all group"
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              ))}
            </div>

            {/* AI SEO Section */}
            <Card className="p-8 md:p-10 bg-primary/5 border-primary/20">
              <div className="max-w-3xl mx-auto text-center">
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">AI-Powered SEO for Adelaide Businesses</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We leverage cutting-edge <Link to="/ai-seo" className="text-primary font-semibold hover:underline">AI SEO</Link> technology to scale content creation, uncover hidden opportunities, and deliver results faster than traditional methods. Our hybrid approach combines the power of artificial intelligence with human expertise to create campaigns that outperform the competition.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 6: Differentiators */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                What Makes Odin Digital Different?
              </h2>
              <p className="text-lg text-muted-foreground">
                We're not your typical <Link to="/seo-agency" className="text-primary font-semibold hover:underline">SEO agency</Link>. Here's why Adelaide businesses choose us.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentiators.map((item, index) => (
                <Card
                  key={index}
                  className="p-8 text-center hover:shadow-card transition-all duration-300 border-border"
                >
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Process */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Our Proven 4-Step SEO Process for Adelaide Businesses
              </h2>
              <p className="text-lg text-muted-foreground">
                A transparent, data-driven approach that delivers measurable results.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="text-6xl font-black text-primary/20 mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-primary/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Why Choose Us */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Why Odin Digital is the Smartest Investment for Your Adelaide Business
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-card transition-all duration-300 border-border"
                >
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Ready to Dominate Adelaide Search Results and Drive Real Revenue?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Stop gambling with SEO agencies that lock you into contracts and deliver zero ROI. Partner with Adelaide's most results-focused <Link to="/services" className="text-primary font-semibold hover:underline">digital marketing</Link> team and start seeing real growth. Book your free strategy session today.
              </p>
              <Button
                onClick={openForm}
                size="xl"
                className="bg-gradient-primary text-white shadow-primary hover:shadow-glow transition-all duration-300 group h-16 px-10 text-xl font-bold"
              >
                Get Your FREE Adelaide SEO Strategy
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Section 10: Other Cities Links */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-muted-foreground">
                Looking for SEO services in other Australian cities? We also serve{" "}
                <Link to="/seo-sydney" className="text-primary font-semibold hover:underline">Sydney</Link>,{" "}
                <Link to="/seo-brisbane" className="text-primary font-semibold hover:underline">Brisbane</Link>,{" "}
                <Link to="/seo-melbourne" className="text-primary font-semibold hover:underline">Melbourne</Link>,{" "}
                <Link to="/seo-perth" className="text-primary font-semibold hover:underline">Perth</Link>,{" "}
                <Link to="/seo-gold-coast" className="text-primary font-semibold hover:underline">Gold Coast</Link>, and{" "}
                <Link to="/seo-canberra" className="text-primary font-semibold hover:underline">Canberra</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 11: FAQ */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
                Frequently Asked Questions About SEO Adelaide
              </h2>
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

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50">
          <Button
            onClick={openForm}
            className="w-full bg-gradient-primary text-white shadow-primary h-12 text-base font-bold"
          >
            Get FREE Audit Now
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default AdelaideSEO;
