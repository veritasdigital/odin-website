import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { ArrowRight, Target, TrendingUp, Shield, Users, CheckCircle2, BarChart3, Building2, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const LinkedInAdvertising = () => {
  const { openForm } = useMarketingForm();

  const stats = [
    { number: "540%", label: "Average ROI for Clients" },
    { number: "₹0", label: "Lock-in Contracts", className: "px-3" },
    { number: "87%", label: "Lead Quality Improvement" },
    { number: "12+", label: "Years B2B Experience" }
  ];

  const problems = [
    {
      icon: DollarSign,
      title: "The High Cost Trap",
      description: "LinkedIn is the most expensive PPC platform, and it's easy to burn through thousands in days with nothing to show for it if you don't know the platform's hidden budget traps."
    },
    {
      icon: Target,
      title: "The Vanity Metrics Mirage",
      description: "Agencies love to show you clicks, impressions, and engagement. But if those clicks aren't turning into Sales Qualified Leads (SQLs) in your CRM, you're just paying for noise."
    },
    {
      icon: Shield,
      title: "The 'Set and Forget' Death Spiral",
      description: "LinkedIn's algorithm rewards constant optimization. Agencies that 'set and forget' campaigns are wasting your budget on declining performance while you're left wondering why the leads dried up."
    }
  ];

  const services = [
    {
      icon: Target,
      title: "Full-Service LinkedIn Campaign Management",
      description: "We handle everything from campaign setup to daily optimization, ensuring your budget is spent efficiently on the highest-quality B2B decision-makers. No vanity metrics—just SQLs."
    },
    {
      icon: BarChart3,
      title: "B2B Conversion Tracking & CRM Integration",
      description: "We integrate with your CRM (Salesforce, HubSpot, Pipedrive) to track not just clicks, but pipeline value. This means you know the exact ROI of every dollar spent on LinkedIn Ads."
    },
    {
      icon: Shield,
      title: "Budget Trap Prevention & Optimization",
      description: "LinkedIn has subtle features (like automatic bid increases and audience expansion) that can silently drain your budget. We proactively manage these to ensure every dollar is accounted for."
    },
    {
      icon: Users,
      title: "High-Value Creative & Copy Testing",
      description: "B2B decision-makers are tired of generic ads. We continuously test creative and copy variations to find what resonates with your specific ICP, maximizing your conversion rate and reducing your Cost Per SQL."
    }
  ];

  const differentiators = [
    {
      icon: CheckCircle2,
      title: "No Lock-in Contracts",
      description: "You stay because we perform, not because you're contractually obligated. Cancel anytime with 30 days' notice."
    },
    {
      icon: TrendingUp,
      title: "540% Average ROI",
      description: "Our clients see an average 540% return on their total marketing investment. We focus on profit, not just traffic."
    },
    {
      icon: Shield,
      title: "SQL-Focused, Not Click-Focused",
      description: "We optimize for Sales Qualified Leads in your CRM, not just clicks. Your sales team will thank you."
    },
    {
      icon: Building2,
      title: "B2B Expertise",
      description: "We specialize in complex B2B sales cycles, understanding the nuances of targeting decision-makers and measuring pipeline value."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Free LinkedIn Ads Audit",
      description: "We analyze your current LinkedIn campaigns (or competitors if you're new) and identify budget traps, targeting inefficiencies, and missed opportunities."
    },
    {
      number: "02",
      title: "Custom B2B Strategy Development",
      description: "We build a campaign strategy tailored to your ICP, sales cycle, and pipeline goals—not a generic template."
    },
    {
      number: "03",
      title: "Campaign Setup & CRM Integration",
      description: "We set up your campaigns with advanced conversion tracking, CRM integration, and budget safeguards to prevent wastage."
    },
    {
      number: "04",
      title: "Continuous Optimization & Reporting",
      description: "We monitor daily performance, test new creative, and provide transparent reports showing pipeline value, not just vanity metrics."
    }
  ];

  const whyChooseUs = [
    {
      title: "We Understand B2B Sales Cycles",
      description: "Unlike agencies that treat LinkedIn like Meta, we understand the long, complex B2B sales cycle. We optimize for pipeline value and SQL quality, not just immediate conversions."
    },
    {
      title: "We Prevent Budget Wastage",
      description: "LinkedIn's platform has hidden features that can silently drain your budget. We proactively manage these, ensuring your spend is efficient and accounted for."
    },
    {
      title: "We Integrate with Your CRM",
      description: "We track leads all the way to your CRM, giving you visibility into which campaigns are driving real pipeline value, not just clicks."
    },
    {
      title: "We're Transparent & Accountable",
      description: "No fluff, no vanity metrics. We show you exactly where your budget is going and what SQLs are being generated. If we're not delivering, you can leave—no lock-in contracts."
    }
  ];

  const faqs = [
    {
      question: "Why should I hire a linkedin advertising agency instead of managing it myself?",
      answer: "While managing your own LinkedIn Ads can seem straightforward, the platform's notoriously high cost and subtle budget traps make it a minefield for the inexperienced. A professional linkedin advertising agency like Odin Digital has the expertise to navigate the platform's complexities, ensuring your budget is spent efficiently on the highest-quality B2B decision-makers. We focus on maximizing your ROI, which is why our clients see a 540% average return. Hiring us isn't an expense; it's an investment that frees up your time and ensures your budget is working as hard as possible to generate Sales Qualified Leads (SQLs)."
    },
    {
      question: "What is the difference between a linkedin advertising agency and a general PPC agency?",
      answer: "A general PPC agency often focuses on high-volume, lower-cost platforms like Google and Meta. A specialized linkedin advertising agency understands the unique B2B environment of LinkedIn. We know how to leverage targeting by job title, company size, and industry, and we know the specific creative and copy that converts decision-makers. Our focus is on quality over quantity, ensuring we deliver high-value SQLs, not just clicks."
    },
    {
      question: "How much does it cost to hire a linked advertising company?",
      answer: "The cost to hire a linked advertising company can vary widely, but our pricing is based on a percentage of your ad spend, ensuring our success is directly tied to yours. We don't offer cheap, fixed-price packages because they rarely work. Our custom strategies are built to deliver maximum ROI, not minimum cost. The best way to determine the exact investment is through a free strategy session. We'll analyze your goals and current spend, and provide a transparent proposal that details both the management fee and the expected return, ensuring you see us as a profit centre, not a cost."
    },
    {
      question: "How long does it take to see results from LinkedIn Ads?",
      answer: "LinkedIn Ads typically require 30-60 days to gather enough data for meaningful optimization, especially for B2B companies with longer sales cycles. However, we often see initial SQLs within the first 2-4 weeks. The key is setting realistic expectations: LinkedIn is a long-term investment in high-quality leads, not a quick-win platform. Our transparent reporting shows you exactly what's working from day one."
    },
    {
      question: "What industries do you specialize in for LinkedIn Ads?",
      answer: "We specialize in B2B industries with complex sales cycles, including SaaS, professional services, recruitment, finance, and enterprise software. Our experience in these verticals means we understand the nuances of targeting decision-makers and measuring pipeline value, not just clicks."
    },
    {
      question: "Can LinkedIn Ads work alongside my Google Ads and SEO efforts?",
      answer: "Absolutely. LinkedIn Ads are a powerful complement to Google Ads and SEO. While Google Ads captures intent-based searches and SEO builds long-term visibility, LinkedIn Ads allow you to proactively target specific job titles, companies, and industries. This multi-channel approach ensures you're reaching decision-makers at every stage of their buying journey. We can manage all three channels for you, ensuring a cohesive strategy."
    },
    {
      question: "How do you measure the success of LinkedIn Ads campaigns?",
      answer: "We measure success by the metrics that matter to your business: Cost Per SQL, pipeline value, and ultimately, ROI. We integrate with your CRM to track leads all the way to closed deals, giving you full visibility into which campaigns are driving real revenue. Vanity metrics like clicks and impressions are reported, but they're not our focus—SQLs and pipeline are."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We have no lock-in contracts. You can cancel anytime with 30 days' notice. We believe you should stay with us because we're delivering results, not because you're contractually obligated. This policy keeps us accountable and ensures we're always working to earn your business."
    },
    {
      question: "Do you offer a free LinkedIn Ads audit?",
      answer: "Yes. We offer a completely free, no-obligation LinkedIn Ads audit where we analyze your current campaigns (or your competitors' if you're new to LinkedIn Ads) and identify budget traps, targeting inefficiencies, and missed opportunities. There's no catch—just actionable insights you can use, whether you hire us or not."
    },
    {
      question: "What makes your linkedin advertising agency different from others?",
      answer: "Three things: (1) We specialize in B2B and understand complex sales cycles, (2) We integrate with your CRM to track pipeline value, not just clicks, and (3) We have no lock-in contracts—you stay because we deliver, not because you're trapped. Our 540% average ROI speaks for itself."
    },
    {
      question: "How much should I budget for LinkedIn Ads?",
      answer: "LinkedIn is the most expensive PPC platform, so we typically recommend a minimum monthly ad budget of $3,000-$5,000 AUD to see meaningful results. However, the exact budget depends on your industry, target audience size, and goals. During our free strategy session, we'll provide a custom budget recommendation based on your specific situation."
    },
    {
      question: "Can you help with LinkedIn creative and ad copy?",
      answer: "Absolutely. We handle all creative and copy development, continuously testing variations to find what resonates with your specific ICP. B2B decision-makers are tired of generic ads, so we focus on messaging that speaks directly to their pain points and goals."
    },
    {
      question: "What is a Sales Qualified Lead (SQL) and why does it matter?",
      answer: "A Sales Qualified Lead (SQL) is a lead that meets your specific criteria for sales readiness—typically based on job title, company size, budget, and intent. Unlike general leads (which may just be curiosity clicks), SQLs are high-quality prospects that your sales team can actually close. We optimize for SQLs, not just clicks, because that's what drives real revenue."
    },
    {
      question: "How do you prevent LinkedIn's budget traps?",
      answer: "LinkedIn has several features (like automatic bid increases, audience expansion, and 'accelerated delivery') that can silently drain your budget. We proactively disable or carefully manage these features, set strict daily and lifetime budgets, and monitor spend in real-time to ensure every dollar is accounted for and spent efficiently."
    },
    {
      question: "Do you work with startups or only established businesses?",
      answer: "We work with both startups and established businesses, as long as you have a clear ICP and a minimum monthly ad budget of $3,000-$5,000 AUD. Startups benefit from our expertise in avoiding costly mistakes, while established businesses appreciate our focus on scaling profitably."
    },
    {
      question: "What CRM platforms do you integrate with?",
      answer: "We integrate with all major CRM platforms, including Salesforce, HubSpot, Pipedrive, Zoho, and others. This integration allows us to track leads all the way to closed deals, giving you full visibility into your LinkedIn Ads ROI. If you don't have a CRM yet, we can recommend one based on your needs."
    }
  ];

  return (
    <>
      <Helmet>
        <title>LinkedIn Advertising Agency | B2B Lead Generation | Odin Digital</title>
        <meta 
          name="description" 
          content="The B2B LinkedIn Advertising Agency focused on SQLs, not just clicks. Stop wasting budget and start generating qualified leads. 540% average ROI. No lock-in contracts. Get your free audit today." 
        />
        <meta name="keywords" content="linkedin advertising agency, linked advertising company, linkedin ads, b2b lead generation, sales qualified leads" />
        <link rel="canonical" href="https://growth-conduit-central.lovable.app/linkedin-advertising" />
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Odin Digital",
            "url": "https://growth-conduit-central.lovable.app/",
            "logo": "https://growth-conduit-central.lovable.app/logo.png",
            "description": "Performance-focused digital marketing agency specializing in PPC, Meta Ads, Web Design, and SEO with no lock-in contracts.",
            "founder": {
              "@type": "Person",
              "name": "Lucas Durante"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "url": "https://growth-conduit-central.lovable.app/contact"
            },
            "sameAs": [
              "https://www.linkedin.com/company/odin-digital",
              "https://www.facebook.com/odindigital",
              "https://twitter.com/odindigital"
            ]
          })}
        </script>

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "LinkedIn Advertising Agency",
            "provider": {
              "@type": "Organization",
              "name": "Odin Digital"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Australia"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "LinkedIn Advertising Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Full-Service LinkedIn Campaign Management",
                    "description": "B2B-focused campaign management for generating Sales Qualified Leads (SQLs)."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "B2B Conversion Tracking & CRM Integration",
                    "description": "Integration with CRM systems (Salesforce, HubSpot) to track pipeline value."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Budget Trap Prevention & Optimization",
                    "description": "Proactive management to avoid LinkedIn's hidden features that waste budget."
                  }
                }
              ]
            }
          })}
        </script>

        {/* FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>

        {/* Review Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "Organization",
              "name": "Odin Digital"
            },
            "author": {
              "@type": "Person",
              "name": "Liam C"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
            "publisher": {
              "@type": "Organization",
              "name": "Krush Organics"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Breadcrumb Navigation */}
        <div className="bg-muted/30 py-3 px-6">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <span>/</span>
              <Link to="/services/ppc" className="hover:text-primary transition-colors">PPC</Link>
              <span>/</span>
              <span className="text-foreground">LinkedIn Advertising</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 sm:py-20 md:py-24 px-6 overflow-hidden">
          {/* Floating Circles - Same as home page */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[7.5vw] sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
                LinkedIn Advertising Agency
              </h1>
              
              <p className="text-[4vw] sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-foreground/90 font-medium leading-tight hero-sub-headline">
                Stop Wasting Budget on LinkedIn Ads and Start Generating Qualified B2B Leads.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                LinkedIn is the most expensive PPC platform, and most agencies will burn through your budget chasing vanity metrics. At Odin Digital, we focus on Sales Qualified Leads (SQLs) and pipeline value—not just clicks. With 540% average ROI and no lock-in contracts, we're the B2B linkedin advertising agency you've been searching for.
              </p>
              
              <Button 
                variant="cta" 
                size="lg"
                onClick={openForm}
                className="w-full sm:w-auto min-h-[48px] text-xs sm:text-sm md:text-base"
              >
                Get Your Free LinkedIn Ads Audit <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof Stats */}
        <section className="py-10 sm:py-12 md:py-16 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 px-3">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 whitespace-nowrap">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-12 sm:py-16 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Most LinkedIn Ads Campaigns Fail
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                LinkedIn Ads can be the most powerful B2B lead generation channel—or the fastest way to burn cash. Here's why most campaigns fail:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <problem.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs sm:text-sm">{problem.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 md:py-20 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                What Our Clients Say
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Don't just take our word for it—here's what real clients have to say about our results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <div className="flex-1">
                      <p className="text-sm sm:text-base italic text-muted-foreground mb-4">
                        "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
                      </p>
                      <div className="font-semibold text-sm sm:text-base">Liam C</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Krush Organics</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <div className="flex-1">
                      <p className="text-sm sm:text-base italic text-muted-foreground mb-4">
                        "After burning through $20K with another agency that focused on clicks, Odin helped us pivot to SQL-focused campaigns. We're now generating 3x more qualified leads at half the cost per lead. The CRM integration was a game-changer."
                      </p>
                      <div className="font-semibold text-sm sm:text-base">Sarah M</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">SaaS Company Director</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our LinkedIn Advertising Services
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                We don't just run ads—we build B2B lead generation machines that integrate with your sales process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs sm:text-sm">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 sm:mt-12 text-center">
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Looking for other digital marketing services? We also offer <Link to="/services/google-ads" className="text-primary hover:underline">Google Ads</Link>, <Link to="/services/seo" className="text-primary hover:underline">SEO</Link>, <Link to="/services/web-design" className="text-primary hover:underline">Web Design</Link>, and <Link to="/services/meta-ads" className="text-primary hover:underline">Meta Ads</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-12 sm:py-16 md:py-20 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                What Sets Us Apart
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                We're not your typical linked advertising company. Here's why our clients choose us:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {differentiators.map((diff, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <diff.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">{diff.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs sm:text-sm">{diff.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 sm:mt-12 text-center">
              <p className="text-xs sm:text-sm text-muted-foreground">
                Our expertise in <Link to="/services/ppc" className="text-primary hover:underline">PPC</Link> and <Link to="/services" className="text-primary hover:underline">digital marketing</Link> ensures a cohesive strategy across all channels.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 sm:py-16 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Proven Process
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                From audit to optimization, here's how we turn your LinkedIn Ads into a SQL-generating machine:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="relative hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl sm:text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                    <CardTitle className="text-base sm:text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs sm:text-sm">{step.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 sm:py-16 md:py-20 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Choose Odin Digital?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                We're not just another linkedin advertising agency—we're your B2B growth partner.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs sm:text-sm">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 sm:py-20 md:py-24 px-6 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              Ready to Stop Wasting Budget and Start Generating SQLs?
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-muted-foreground max-w-2xl mx-auto">
              Get a free LinkedIn Ads audit and discover exactly where your budget is being wasted—and how to fix it.
            </p>
            <Button 
              variant="cta" 
              size="lg"
              onClick={openForm}
              className="w-full sm:w-auto min-h-[48px] text-xs sm:text-sm md:text-base"
            >
              Get Your Free LinkedIn Ads Audit
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              No lock-in contracts. No pressure. Just actionable insights.
            </p>
          </div>
        </section>

        {/* Related Services & Industry Hubs */}
        <section className="py-10 sm:py-12 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">
              Related Services & Industry Expertise
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Looking for more ways to grow your B2B business? Explore our <Link to="/services/google-ads" className="text-primary hover:underline">Google Ads</Link>, <Link to="/services/seo" className="text-primary hover:underline">SEO</Link>, and <Link to="/services/web-design" className="text-primary hover:underline">Web Design</Link> services. We also specialize in industries like <Link to="/industries/saas" className="text-primary hover:underline">SaaS</Link>, <Link to="/industries/finance" className="text-primary hover:underline">Finance</Link>, and <Link to="/industries/recruitment" className="text-primary hover:underline">Recruitment</Link>.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Everything you need to know about working with our linkedin advertising agency.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-sm sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </>
  );
};

export default LinkedInAdvertising;
