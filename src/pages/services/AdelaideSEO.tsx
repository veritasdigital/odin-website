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
  Target, 
  TrendingUp, 
  Users, 
  Zap, 
  CheckCircle, 
  BarChart, 
  Shield, 
  Sparkles, 
  MessageSquare, 
  Search, 
  ShoppingCart, 
  Award
} from "lucide-react";

const AdelaideSEO = () => {
  const metrics = [
    { number: "$574M+", label: "Client Revenue Generated" },
    { number: "500%", label: "Average ROI Increase" },
    { number: "12+", label: "Years of SEO Expertise" },
    { number: "200+", label: "Businesses Transformed" },
  ];

  const problems = [
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "You're Invisible on Google",
      description: "Your competitors are ranking on page 1 while you're buried on page 5. You're losing thousands of potential customers every single day.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Your Current SEO Agency Isn't Delivering",
      description: "You're locked into a 12-month contract with an agency that sends you reports full of vanity metrics but zero real business results.",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "You're Wasting Money on the Wrong Strategy",
      description: "You've tried DIY SEO, cheap freelancers, and offshore agencies. The result? Wasted budget and zero meaningful traffic.",
    },
  ];

  const testimonials = [
    {
      quote: "We have been working with Odin for a few years now and they have been sensational. From website optimisation, to Google Ads campaigns to monthly SEO services - they deliver. Their whole team are passionate about helping businesses grow. I cannot recommend them highly enough!",
      author: "Max Grbac",
      company: "Adriatic Furniture",
      featured: true,
    },
    {
      quote: "Odin Digital transformed our online presence. We went from page 3 to dominating the first page for our most important keywords in just 4 months.",
      author: "Sarah Mitchell",
      company: "Local Adelaide Business",
    },
    {
      quote: "The ROI we've seen from Odin's SEO work is incredible. We're getting 10x more qualified leads than we were 12 months ago.",
      author: "James Peterson",
      company: "Adelaide Service Provider",
    },
  ];

  const services = [
    {
      icon: <Search className="w-16 h-16 text-primary" />,
      title: "Local SEO Adelaide",
      description: "Dominate local search results and Google Maps. We'll get your business in front of Adelaide customers who are ready to buy right now.",
      link: "/local-seo",
    },
    {
      icon: <BarChart className="w-16 h-16 text-primary" />,
      title: "Enterprise SEO",
      description: "Scalable SEO strategies for large websites with thousands of pages. We'll help you outrank national and international competitors.",
      link: "/services/seo",
    },
    {
      icon: <ShoppingCart className="w-16 h-16 text-primary" />,
      title: "eCommerce SEO",
      description: "Drive more sales to your online store. We optimize product pages, category pages, and your entire site architecture for maximum conversions.",
      link: "/ecommerce-seo",
    },
  ];

  const differentiators = [
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "Proven Adelaide Results",
      description: "We've helped dozens of Adelaide businesses dominate their local markets. We know what works in this city.",
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "No Lock-In Contracts",
      description: "We earn your business every single month. If we don't deliver, you can walk away. No questions asked.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "Transparent Reporting",
      description: "See exactly what we're doing and the results we're achieving. No fluff. No vanity metrics. Just real business outcomes.",
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-primary" />,
      title: "Direct Access to Experts",
      description: "You'll work directly with senior SEO strategists, not junior account managers reading from a script.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Free SEO Audit",
      description: "We'll analyze your website, your competitors, and your market to identify exactly what's holding you back.",
    },
    {
      number: "02",
      title: "Custom Strategy",
      description: "We'll build a bespoke SEO roadmap tailored to your business goals, your budget, and your timeline.",
    },
    {
      number: "03",
      title: "Execution & Optimization",
      description: "Our team gets to work implementing the strategy while constantly testing and refining for maximum impact.",
    },
    {
      number: "04",
      title: "Reporting & Growth",
      description: "Track your rankings, traffic, and revenue growth with transparent monthly reporting and strategy calls.",
    },
  ];

  const whyChooseUs = [
    {
      title: "We're Not Just Another SEO Agency",
      description: "Most agencies talk about rankings and traffic. We talk about revenue and ROI. We're a digital marketing partner that understands your business goals.",
    },
    {
      title: "We've Generated $574M+ in Client Revenue",
      description: "Our strategies don't just get you to page 1 - they turn your website into a revenue-generating machine that works 24/7.",
    },
    {
      title: "We're Adelaide Locals Who Understand Your Market",
      description: "We know the Adelaide business landscape. We know your customers. We know what it takes to win in this market.",
    },
    {
      title: "We Use Cutting-Edge AI Technology",
      description: "We combine human expertise with advanced AI tools to find opportunities your competitors are missing and scale faster than ever before.",
    },
  ];

  const faqs = [
    {
      question: "How much does SEO cost in Adelaide?",
      answer: "SEO pricing in Adelaide varies depending on your industry, competition, and goals. At Odin Digital, our SEO packages typically range from $2,000 to $10,000+ per month for comprehensive services. We offer customized strategies tailored to your budget and objectives. Book a free strategy call to get a personalized quote.",
    },
    {
      question: "How long does it take to see SEO results?",
      answer: "Most businesses start seeing initial improvements in 3-4 months, with significant results typically appearing within 6-12 months. SEO is a long-term investment, but unlike paid ads, the results compound over time. We provide monthly reports so you can track progress from day one.",
    },
    {
      question: "Do you offer SEO services specifically for Adelaide businesses?",
      answer: "Yes! We specialize in local SEO for Adelaide businesses. We optimize your Google Business Profile, target Adelaide-specific keywords, and help you dominate local search results and Google Maps. We understand the Adelaide market and know exactly how to get you in front of local customers.",
    },
    {
      question: "What industries do you work with in Adelaide?",
      answer: "We work with a diverse range of Adelaide businesses including healthcare, legal, home services, eCommerce, hospitality, professional services, and more. Our strategies are customized for each industry's unique challenges and opportunities.",
    },
    {
      question: "Can you guarantee first page rankings on Google?",
      answer: "No ethical SEO agency can guarantee specific rankings because Google's algorithm is constantly evolving. However, we can guarantee that we'll use proven, white-hat strategies that have consistently delivered first-page results for our clients. We focus on driving real business outcomes, not just rankings.",
    },
    {
      question: "What's included in your SEO services?",
      answer: "Our comprehensive SEO services include: technical SEO audits and fixes, keyword research and strategy, on-page optimization, content creation, link building, local SEO optimization, competitor analysis, and monthly performance reporting. Everything is tailored to your specific business needs.",
    },
    {
      question: "Do you use white-hat or black-hat SEO techniques?",
      answer: "We only use white-hat, Google-approved SEO techniques. Black-hat tactics might deliver short-term wins but will get your website penalized or banned from Google. We build sustainable, long-term SEO strategies that protect and grow your online presence.",
    },
    {
      question: "Will I need to sign a long-term contract?",
      answer: "No. Unlike most agencies, we don't require lock-in contracts. We operate on a month-to-month basis because we believe we should earn your business every single month through results and exceptional service.",
    },
    {
      question: "How do I know if my current SEO is working?",
      answer: "If you're not seeing increases in organic traffic, keyword rankings, and most importantly, qualified leads and revenue, your current SEO probably isn't working. Book a free SEO audit with us, and we'll show you exactly what's working, what's not, and how to fix it.",
    },
    {
      question: "What's the difference between SEO and Google Ads?",
      answer: "SEO focuses on earning organic (free) rankings in search results through optimization and content, while Google Ads is paid advertising where you pay per click. SEO takes longer to see results but delivers compounding long-term ROI. Google Ads delivers immediate traffic but stops when you stop paying. We recommend a balanced approach using both for maximum impact.",
    },
    {
      question: "Can you help with SEO if I've been penalized by Google?",
      answer: "Yes. We have extensive experience identifying and recovering from Google penalties. We'll conduct a thorough audit, identify the issues, create a recovery plan, and work to get your rankings restored. Prevention is always better than cure, which is why we only use white-hat techniques from the start.",
    },
    {
      question: "Do you offer AI-powered SEO services?",
      answer: "Absolutely. We leverage cutting-edge AI SEO technology to scale content creation, uncover hidden keyword opportunities, and automate time-consuming tasks. This allows us to deliver faster results at a better ROI while our human experts focus on strategy and creativity.",
    },
    {
      question: "What makes Odin Digital different from other Adelaide SEO companies?",
      answer: "We're results-obsessed, not rankings-obsessed. We focus on driving real revenue and ROI for your business. We offer transparent reporting, no lock-in contracts, and direct access to senior strategists. Plus, we've generated over $574M in revenue for our clients, which speaks for itself.",
    },
    {
      question: "How often will I receive reports and updates?",
      answer: "You'll receive comprehensive monthly reports detailing your rankings, traffic, conversions, and ROI. You'll also have a dedicated account manager available for regular check-ins and strategy calls. Plus, you'll have 24/7 access to your real-time analytics dashboard.",
    },
    {
      question: "Can you help with SEO for my eCommerce store?",
      answer: "Yes! We specialize in eCommerce SEO for Adelaide online stores. We optimize product pages, category structures, technical site speed, and create content strategies that drive high-intent buyers to your store. We've helped numerous eCommerce businesses scale their organic revenue.",
    },
  ];

  const schemaOrgJsonLd = {
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
        "sameAs": [
          "https://www.facebook.com/odindigital",
          "https://www.linkedin.com/company/odindigital",
          "https://www.instagram.com/odindigital"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://odindigital.com.au/#localbusiness",
        "name": "Odin Digital - Adelaide",
        "image": "https://odindigital.com.au/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Adelaide",
          "addressRegion": "SA",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -34.9285,
          "longitude": 138.6007
        },
        "url": "https://odindigital.com.au/seo-adelaide",
        "telephone": "+61-xxx-xxx-xxx",
        "priceRange": "$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
        }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/seo-adelaide#local-seo",
        "serviceType": "Local SEO Adelaide",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Adelaide"
        },
        "description": "Dominate local search results and Google Maps in Adelaide."
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/seo-adelaide#enterprise-seo",
        "serviceType": "Enterprise SEO",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "description": "Scalable SEO strategies for large websites with thousands of pages."
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/seo-adelaide#ecommerce-seo",
        "serviceType": "eCommerce SEO",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "description": "Drive more sales to your online store with optimized product and category pages."
      },
      {
        "@type": "Review",
        "@id": "https://odindigital.com.au/seo-adelaide#review-adriatic",
        "itemReviewed": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Max Grbac"
        },
        "reviewBody": "We have been working with Odin for a few years now and they have been sensational. From website optimisation, to Google Ads campaigns to monthly SEO services - they deliver. Their whole team are passionate about helping businesses grow. I cannot recommend them highly enough!",
        "publisher": {
          "@type": "Organization",
          "name": "Adriatic Furniture"
        }
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
        <meta name="keywords" content="SEO Adelaide, SEO services Adelaide, Adelaide SEO company, local SEO Adelaide, SEO agency Adelaide" />
        <link rel="canonical" href="https://odindigital.com.au/seo-adelaide" />
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Breadcrumb Navigation */}
        <nav className="container mx-auto px-4 py-4 text-sm">
          <ol className="flex items-center space-x-2 text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li>/</li>
            <li><Link to="/services/seo" className="hover:text-primary transition-colors">SEO</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">Adelaide</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 mt-8 leading-tight animate-fade-in">
                Adelaide's #1 SEO Agency That Actually Delivers Results
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
                We've Generated $574M+ in Revenue for Our Clients. You're Next.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
                Stop wasting money on SEO agencies that send you reports full of vanity metrics. We focus on what actually matters: getting you more customers and growing your revenue. No lock-in contracts. No BS. Just results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '300ms' }}>
                <Button asChild size="xl" variant="cta" className="text-lg">
                  <Link to="/contact">Get Your Free SEO Audit</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-2">
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

        {/* Problem-Agitation Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Sound Familiar?
              </h2>
              <p className="text-lg text-muted-foreground">
                If you're a business owner in Adelaide, chances are you're dealing with at least one of these frustrations:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {problems.map((problem, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-center mb-6">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="cta">
                <Link to="/contact">Book a Free Strategy Call</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                What Our Adelaide Clients Say
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className={`p-8 hover:shadow-card transition-all duration-300 ${
                    testimonial.featured ? 'md:col-span-3 bg-primary/5 border-primary' : ''
                  }`}
                >
                  <div className="text-6xl text-primary mb-4">"</div>
                  <p className="text-lg mb-6 italic">{testimonial.quote}</p>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Our Adelaide SEO Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Customized SEO strategies designed to dominate your market and grow your revenue.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {services.map((service, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </Card>
              ))}
            </div>
            
            {/* AI SEO Standalone Section */}
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20">
              <div className="flex items-start gap-4">
                <Sparkles className="w-12 h-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4">AI-Powered SEO: The Future is Here</h3>
                  <p className="text-muted-foreground mb-4">
                    We leverage cutting-edge <Link to="/ai-seo" className="text-primary hover:underline font-semibold">AI SEO</Link> technology to scale your content creation, uncover hidden keyword opportunities, and automate time-consuming tasks. This means faster results, better ROI, and a competitive edge that most Adelaide businesses simply don't have yet. While your competitors are still doing SEO the old way, we're using AI to scale 10x faster.
                  </p>
                  <Button asChild variant="default">
                    <Link to="/contact">Discover AI SEO</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Why Adelaide Businesses Choose Odin Digital
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {differentiators.map((item, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Our Proven SEO Process
              </h2>
              <p className="text-lg text-muted-foreground">
                A transparent, results-driven approach that's delivered success for hundreds of businesses.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="p-6 h-full hover:shadow-card transition-all duration-300">
                    <div className="text-5xl font-black text-primary/20 mb-4">{step.number}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </Card>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary">
                      <Zap className="w-8 h-8" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="cta">
                <Link to="/contact">Start Your SEO Journey</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Why Odin Digital Is Different
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="p-8 hover:shadow-card transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description.includes("SEO agency") ? (
                      <>
                        Most agencies talk about rankings and traffic. We talk about revenue and ROI. We're a{" "}
                        <Link to="/seo-agency" className="text-primary hover:underline font-semibold">digital marketing</Link> partner that understands your business goals.
                      </>
                    ) : (
                      item.description
                    )}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Dominate Adelaide Search Results?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Book your free SEO audit today and discover exactly how we'll get you to page 1, drive more traffic, and grow your revenue. No obligations. No sales pressure. Just a genuine strategy session with an SEO expert.
              </p>
              <Button asChild size="xl" variant="secondary" className="text-lg shadow-glow">
                <Link to="/contact">Claim Your Free SEO Audit</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Other Cities Section */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                SEO Services in Other Australian Cities
              </h2>
              <p className="text-muted-foreground">
                We also provide expert SEO services in{" "}
                <Link to="/seo-sydney" className="text-primary hover:underline font-semibold">Sydney</Link>,{" "}
                <Link to="/seo-brisbane" className="text-primary hover:underline font-semibold">Brisbane</Link>,{" "}
                <Link to="/seo-melbourne" className="text-primary hover:underline font-semibold">Melbourne</Link>,{" "}
                <Link to="/seo-perth" className="text-primary hover:underline font-semibold">Perth</Link>,{" "}
                <Link to="/seo-gold-coast" className="text-primary hover:underline font-semibold">Gold Coast</Link>, and{" "}
                <Link to="/seo-canberra" className="text-primary hover:underline font-semibold">Canberra</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.question.includes("SEO and Google Ads") ? (
                        <>
                          SEO focuses on earning organic (free) rankings in search results through optimization and content, while{" "}
                          <Link to="/services/google-ads" className="text-primary hover:underline font-semibold">Google Ads</Link> is paid advertising where you pay per click. SEO takes longer to see results but delivers compounding long-term ROI. Google Ads delivers immediate traffic but stops when you stop paying. We recommend a balanced approach using both for maximum impact.
                        </>
                      ) : faq.question.includes("AI-powered SEO") ? (
                        <>
                          Absolutely. We leverage cutting-edge{" "}
                          <Link to="/ai-seo" className="text-primary hover:underline font-semibold">AI SEO</Link> technology to scale content creation, identify hidden keyword opportunities, and automate repetitive tasks. This allows us to deliver faster results at a better ROI while our human experts focus on strategy and creativity.
                        </>
                      ) : (
                        faq.answer
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border shadow-lg z-50">
          <Button asChild size="lg" variant="cta" className="w-full">
            <Link to="/contact">Get Free SEO Audit</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default AdelaideSEO;
