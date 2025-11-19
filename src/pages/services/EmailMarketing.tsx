import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Target, BarChart3, Palette, Workflow, Shield, FlaskConical, LineChart, Users, ListChecks, CheckCircle2, TrendingUp } from "lucide-react";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ROICalculator } from "@/components/ROICalculator";
import { socialMediaComparison } from "@/utils/serviceComparisonTables";
const EmailMarketing = () => {
  const services = [{
    icon: Target,
    title: "Email Marketing Strategy",
    description: "We develop comprehensive email marketing strategies aligned with your business goals. Strategic planning, audience research, and goal setting to ensure your campaigns drive measurable ROI."
  }, {
    icon: Users,
    title: "List Building and Management",
    description: "Quality list building through lead magnets, landing page optimization, and ethical tactics. We focus on engaged subscribers who are ready to convert, not just vanity metrics."
  }, {
    icon: Mail,
    title: "Email Campaign Management",
    description: "End-to-end campaign management from planning to execution. We create, schedule, send, and monitor your campaigns to ensure maximum engagement and conversions."
  }, {
    icon: Palette,
    title: "Email Design and Templates",
    description: "Professional email design that reflects your brand. Mobile-optimized, visually compelling templates with clear hierarchy and compelling calls-to-action."
  }, {
    icon: Workflow,
    title: "Email Automation and Workflows",
    description: "Advanced automation workflows that nurture leads and drive conversions automatically. Welcome sequences, abandoned cart recovery, re-engagement campaigns, and more."
  }, {
    icon: Shield,
    title: "Compliance and Deliverability",
    description: "Full compliance with GDPR, CAN-SPAM, and Privacy Act. We ensure your emails reach the inbox, not the spam folder, with proper authentication and deliverability monitoring."
  }, {
    icon: FlaskConical,
    title: "A/B Testing and Optimisation",
    description: "Continuous testing of subject lines, content, send times, and creative. Data-driven optimization to improve open rates, click rates, and conversions over time."
  }, {
    icon: LineChart,
    title: "Email Analytics and Reporting",
    description: "Detailed reporting on all key metrics: open rates, click rates, conversions, ROI. Clear, transparent reporting so you always know how your campaigns are performing."
  }];
  const problems = [{
    title: "Low Open Rates and Poor Engagement",
    description: "Your emails aren't being opened, and when they are, no one is clicking. Weak subject lines, poor send timing, and generic content mean your messages are ignored."
  }, {
    title: "Poor List Quality and High Unsubscribes",
    description: "Your list is full of unengaged subscribers or purchased contacts. High unsubscribe rates and spam complaints damage your sender reputation and deliverability."
  }, {
    title: "No Strategy or Automation",
    description: "You're sending one-off campaigns with no overall strategy. There's no automation, no nurturing, no segmentation—just sporadic emails that don't drive results."
  }];
  const solutions = ["Strategic planning aligned with your business goals and customer journey", "Quality list building focused on engaged, high-intent subscribers", "Advanced segmentation and personalisation for relevant messaging", "Professional email design that's mobile-optimized and on-brand", "Automated workflows that nurture leads and drive conversions", "Full compliance with GDPR, CAN-SPAM, and deliverability best practices", "Continuous A/B testing and optimization for improved performance", "Integration with your other marketing channels for a cohesive strategy", "Transparent reporting with clear ROI metrics and actionable insights"];
  const whyChooseUs = [{
    metric: "540%",
    label: "Average ROI"
  }, {
    metric: "95%",
    label: "Client Retention"
  }, {
    metric: "$574M+",
    label: "Revenue Generated"
  }, {
    metric: "283+",
    label: "Happy Clients"
  }];
  const process = [{
    step: 1,
    title: "Strategy and Planning",
    description: "We start by understanding your business, goals, and audience. We develop a comprehensive email marketing strategy with clear objectives and KPIs."
  }, {
    step: 2,
    title: "List Building and Segmentation",
    description: "We build your list strategically through lead magnets and optimized landing pages. We segment your audience for targeted, relevant messaging."
  }, {
    step: 3,
    title: "Email Design and Creative Development",
    description: "Our designers create professional, on-brand email templates. We develop compelling copy and creative that drives engagement and conversions."
  }, {
    step: 4,
    title: "Automation and Workflow Setup",
    description: "We set up automated workflows for welcome sequences, nurturing, abandoned carts, and re-engagement. Your emails work for you 24/7."
  }, {
    step: 5,
    title: "Launch and Monitoring",
    description: "We launch your campaigns and monitor performance in real-time. We track deliverability, engagement, and conversions from day one."
  }, {
    step: 6,
    title: "Testing and Optimisation",
    description: "We continuously test subject lines, content, send times, and creative. Data-driven optimization ensures your campaigns improve over time."
  }, {
    step: 7,
    title: "Reporting and Communication",
    description: "You receive detailed reports on all key metrics and ROI. Your dedicated account manager is always available to discuss performance and strategy."
  }];
  const faqs = [{
    question: "Why are my email open rates so low?",
    answer: "There are usually several reasons: weak subject lines, poor send timing, lack of segmentation, irrelevant content, or poor list quality. We analyse your campaigns and identify the specific issues. We test different subject lines, send times, and content to improve open rates."
  }, {
    question: "How do I build a quality email list?",
    answer: "Quality list building requires a clear strategy. We develop lead magnets, optimise landing pages, use ethical list-building tactics, and focus on quality over quantity. Your list is engaged and ready to convert."
  }, {
    question: "How do I set up email automation?",
    answer: "Email automation requires planning and technical setup. We develop your automation workflows, set up sequences, configure triggers, and test everything. Your emails work for you automatically."
  }, {
    question: "What's a good email marketing strategy?",
    answer: "A good strategy starts with clear goals, understanding your audience, and planning your campaigns. We develop a strategic plan aligned with your business goals. We focus on engagement, conversions, and ROI."
  }, {
    question: "How do I measure email marketing ROI?",
    answer: "We track conversions, revenue generated, cost per conversion, and return on ad spend (ROAS). We set up proper conversion tracking and provide detailed reporting. You always know your ROI."
  }, {
    question: "What are email marketing best practices?",
    answer: "Best practices include segmentation, personalisation, A/B testing, compliance, mobile optimisation, and clear calls-to-action. We implement all of these in your campaigns."
  }, {
    question: "How do I design better emails?",
    answer: "Good email design includes mobile optimisation, clear hierarchy, compelling visuals, professional templates, and brand consistency. We design beautiful emails that reflect your brand."
  }, {
    question: "What's email list segmentation?",
    answer: "Segmentation is dividing your list into groups based on behaviour, demographics, interests, or engagement. Segmented campaigns have much higher engagement and conversion rates. We segment your list strategically."
  }, {
    question: "How do I improve email conversion rates?",
    answer: "Conversion rates improve through segmentation, personalisation, clear calls-to-action, landing page optimisation, and A/B testing. We focus on conversion optimisation in every campaign."
  }, {
    question: "What are the key email marketing metrics?",
    answer: "Key metrics include open rate, click rate, conversion rate, unsubscribe rate, bounce rate, and ROI. We track all of these and provide detailed reporting."
  }, {
    question: "Is email marketing compliant?",
    answer: "Email marketing must comply with GDPR, CAN-SPAM, and the Privacy Act. We ensure full compliance in all campaigns. We manage consent, provide unsubscribe options, and protect data."
  }, {
    question: "Can you help with email marketing for small business?",
    answer: "Absolutely. Email marketing is perfect for small businesses. It's cost-effective, high-ROI, and scalable. We help small businesses build effective email marketing programmes."
  }, {
    question: "What's the best email marketing platform?",
    answer: "There are several good platforms (Mailchimp, ConvertKit, ActiveCampaign, etc.). We help you choose the right platform for your needs and set it up properly."
  }, {
    question: "How often should I send emails?",
    answer: "It depends on your audience and goals. We test different send frequencies to find what works best. Most businesses send 1–4 emails per week."
  }, {
    question: "What's the average email marketing ROI?",
    answer: "Email marketing has an average ROI of $42 for every $1 spent (according to industry data). Our clients see even higher ROI (540% average) through strategic planning and optimisation."
  }, {
    question: "Can you integrate email with my other marketing?",
    answer: "Absolutely. We integrate your email marketing with your SEO, Google Ads, Meta Ads, and Web Design. We create a cohesive customer journey across all channels."
  }, {
    question: "How long does it take to see results?",
    answer: "You can see initial results within 2–4 weeks, but it typically takes 8–12 weeks to optimise and see consistent results. We continuously optimise to improve performance over time."
  }, {
    question: "What if my email marketing isn't working?",
    answer: "We analyse your campaigns, identify the issues, and develop a plan to fix them. We might adjust targeting, refresh creatives, optimise the landing page, or change the messaging."
  }, {
    question: "Do you offer ongoing support?",
    answer: "Yes. We provide ongoing email marketing management, monitoring, optimisation, and reporting. You get a dedicated account manager who's always available."
  }, {
    question: "How do I get started?",
    answer: "Book a free consultation with one of our email marketing strategists. We'll review your current situation, identify opportunities, and show you exactly how we can help."
  }];
  const schemaMarkup = {
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Email Marketing Services",
      description: "Professional email marketing services including strategy, design, automation, compliance, and optimisation",
      provider: {
        "@type": "Organization",
        name: "Odin Digital",
        url: "https://growth-conduit-central.lovable.app/"
      },
      areaServed: "Australia",
      serviceType: "Email Marketing Services",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "283"
      }
    },
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Odin Digital",
      url: "https://growth-conduit-central.lovable.app/",
      logo: "https://growth-conduit-central.lovable.app/logo.png",
      description: "Digital marketing agency in Australia offering PPC, Meta Ads, Web Design, SEO, and Email Marketing services",
      sameAs: ["https://www.facebook.com/odindigital", "https://www.instagram.com/odindigital", "https://www.linkedin.com/company/odindigital"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        email: "hello@odindigital.com.au"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "283"
      }
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    }
  };
  return <>
      <Helmet>
        <title>
          Email Marketing Services Australia | Strategic Campaigns & High ROI |
          Odin Digital
        </title>
        <meta name="description" content="Professional email marketing services in Australia. Strategic planning, professional design, automation, compliance. 283+ happy clients. 540% average ROI. Book your free consultation." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup.service)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup.organization)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup.faq)}
        </script>
      </Helmet>

      <>
      <Header />
      
      <div className="container mx-auto px-4 pt-20">
        <Breadcrumbs items={[
          { label: "Services", path: "/services" },
          { label: "Email Marketing", path: "/services/email-marketing" }
        ]} />
      </div>
      
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden py-12 md:py-32 px-4 bg-gradient-to-br from-white via-muted/30 to-muted/20">
          {/* Animated background blobs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-muted/15 rounded-full blur-3xl animate-pulse" style={{
            animationDelay: '1.5s'
          }} />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-muted/10 rounded-full blur-3xl animate-pulse" style={{
            animationDelay: '3s'
          }} />
          
          {/* Floating Circles with white/glass effect */}
          <div className="absolute top-32 left-1/4 w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" />
          <div className="absolute top-64 right-1/3 w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{
            animationDelay: '1s'
          }} />
          <div className="absolute bottom-48 left-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{
            animationDelay: '2s'
          }} />
          <div className="absolute top-1/3 right-1/5 w-14 h-14 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{
            animationDelay: '2.8s'
          }} />
          
          {/* Geometric Shapes */}
          <div className="absolute top-40 right-1/4 w-24 h-24 bg-white/15 backdrop-blur-sm border border-white/30 rounded-lg rotate-45 animate-float shadow-lg" style={{
            animationDelay: '0.5s'
          }} />
          <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full animate-float shadow-lg" style={{
            animationDelay: '2.5s'
          }} />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-slide-up">
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-charcoal leading-[0.95] tracking-tighter mb-10 break-words drop-shadow-sm">
                Email Marketing Services
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal/90 mb-8 leading-tight break-words">
                Your emails aren't working because you don't have a strategy.
                Let's change that.
              </p>
              <div className="text-base sm:text-lg md:text-xl text-charcoal/70 mb-10 space-y-4 leading-relaxed font-light break-words">
                <p>
                  Email marketing is one of the highest-ROI channels available.
                  When done right, it drives engagement, conversions, and
                  long-term customer loyalty. But most businesses aren't doing
                  it right.
                </p>
                <p>
                  At Odin Digital, we build email marketing campaigns that
                  actually work. Strategic planning, professional design,
                  advanced automation, and continuous optimisation. We've helped
                  283+ businesses transform their email marketing from a
                  forgotten channel into their most profitable marketing asset.
                </p>
                <p>
                  From list building to automation to compliance, we handle
                  everything. Senior expertise. Customised strategy. Transparent
                  reporting. Real results.
                </p>
                <p className="font-semibold text-charcoal">
                  No generic templates. No spray-and-pray campaigns. No wasted
                  effort. Just email marketing that drives measurable ROI.
                </p>
              </div>
              <Button asChild variant="hero" size="lg" className="text-sm sm:text-base md:text-lg px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 shadow-glow">
                <Link to="/contact">Book Your Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-12 md:py-20 bg-muted/30 px-4">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 break-words">
                Why Your Email Marketing Isn't Working
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto break-words">
                Most businesses struggle with email marketing because they're
                making the same critical mistakes. Sound familiar?
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {problems.map((problem, index) => <Card key={index} className="p-6 bg-background border-l-4 border-l-accent">
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </Card>)}
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 break-words">
                Email Marketing That Drives Results
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto break-words">
                We fix every pain point with a comprehensive, strategic approach
                to email marketing.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {solutions.map((solution, index) => <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-foreground">{solution}</p>
                  </div>)}
              </div>
              <div className="text-center mt-10">
                <Button asChild size="lg">
                  <Link to="/contact">Book Your Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-20 bg-muted/30 px-4">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 break-words">
                Our Email Marketing Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto break-words">
                Comprehensive email marketing services to drive engagement,
                conversions, and revenue.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-background">
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </Card>;
                })}
              </div>
              <div className="text-center mt-12">
                <Button asChild size="lg">
                  <Link to="/contact">Book Your Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 break-words">
                Why Australian Businesses Choose Odin Digital for Email
                Marketing
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto break-words">
                Proven results, strategic approach, and transparent reporting
                you can trust.
              </p>
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                {whyChooseUs.map((item, index) => <div key={index} className="text-center p-6 bg-gradient-primary rounded-lg text-white">
                    <div className="text-5xl font-bold mb-2">{item.metric}</div>
                    <div className="text-lg opacity-90">{item.label}</div>
                  </div>)}
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-lg">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Strategic Approach</h3>
                    <p className="text-muted-foreground">
                      Every campaign is built on a comprehensive strategy aligned
                      with your business goals and customer journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Palette className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Professional Design</h3>
                    <p className="text-muted-foreground">
                      Beautiful, mobile-optimized email templates that reflect
                      your brand and drive engagement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Workflow className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Advanced Automation</h3>
                    <p className="text-muted-foreground">
                      Sophisticated workflows that nurture leads and drive
                      conversions automatically, 24/7.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">
                      Compliance and Deliverability
                    </h3>
                    <p className="text-muted-foreground">
                      Full compliance with GDPR, CAN-SPAM, and Privacy Act. Your
                      emails reach the inbox, not spam.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FlaskConical className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">
                      Continuous Optimisation
                    </h3>
                    <p className="text-muted-foreground">
                      We continuously test and optimize every element of your
                      campaigns to improve performance over time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ListChecks className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">
                      Integration with Other Channels
                    </h3>
                    <p className="text-muted-foreground">
                      We integrate your email marketing with{" "}
                      <Link to="/services/seo" className="text-primary hover:underline">
                        SEO
                      </Link>
                      ,{" "}
                      <Link to="/services/google-ads" className="text-primary hover:underline">
                        Google Ads
                      </Link>
                      , and{" "}
                      <Link to="/services/web-design" className="text-primary hover:underline">
                        Web Design
                      </Link>{" "}
                      for a cohesive customer journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Transparent Reporting</h3>
                    <p className="text-muted-foreground">
                      Detailed reporting on all key metrics and ROI. You always
                      know exactly how your campaigns are performing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-10">
                <Button asChild size="lg">
                  <Link to="/contact">Book Your Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-20 bg-muted/30 px-4">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 break-words">
                Our Email Marketing Process
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto break-words">
                A proven 7-step process to deliver high-performing email
                marketing campaigns.
              </p>
              <div className="space-y-6">
                {process.map((step, index) => <Card key={index} className="p-6 bg-background border-l-4 border-l-primary">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Card>)}
              </div>
              <div className="text-center mt-10">
                <Button asChild size="lg">
                  <Link to="/contact">Book Your Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 break-words">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-8 sm:mb-12 break-words">
                Get answers to common questions about email marketing services.
              </p>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-background">
                    <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
              <div className="text-center mt-10">
                <Button asChild size="lg">
                  <Link to="/contact">Book Your Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-primary text-white relative overflow-hidden px-4">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 break-words">
                Ready to Transform Your Email Marketing?
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90 leading-relaxed break-words">
                Let's build an email marketing strategy that actually works.
                We'll drive engagement, conversions, and measurable ROI.
              </p>
              <p className="text-sm sm:text-base md:text-lg mb-10 opacity-90 break-words">
                Book a free consultation with one of our email marketing
                strategists. We'll review your current email marketing (if you
                have any), identify opportunities, and show you exactly how we
                can help.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/contact">Book Your Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-20 px-6 bg-muted/20">
          <div className="max-w-5xl mx-auto">
            <ComparisonTable
              title={socialMediaComparison.title}
              description={socialMediaComparison.description}
              rows={socialMediaComparison.rows}
            />
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-4 text-center text-charcoal">Calculate Your Email Marketing ROI</h2>
            <p className="text-xl text-center text-charcoal/70 mb-12">See how email marketing could generate revenue for your business.</p>
            <ROICalculator />
          </div>
        </section>
      </div>
      <Footer />
      </>
    </>;
};
export default EmailMarketing;