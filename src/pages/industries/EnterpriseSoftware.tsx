import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SideTab } from "@/components/SideTab";
import { TrendingUp, DollarSign, Target, Users, Zap, FileText, Link2, Award, Shield, BarChart, CheckCircle2, Clock, Layers, AlertCircle, UserCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EnterpriseSoftware = () => {
  const navigate = useNavigate();

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Industries", path: "/industries" },
    { label: "Enterprise Software", path: "/industries/enterprise-software" }
  ];

  const painPoints = [
    {
      icon: <AlertCircle className="w-8 h-8 text-primary" />,
      title: "Low-Quality Lead Disaster",
      description: "Your marketing team is generating leads, but they aren't qualified, and your sales team is wasting time on tire-kickers who don't have the budget or authority."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Long Sales Cycle Stagnation",
      description: "Leads enter the pipeline but stall out because the marketing content doesn't address the concerns of all stakeholders (CFO, CTO, End-User)."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "No Account-Based Strategy",
      description: "Your marketing is broad, missing the precision needed to target specific high-value accounts (ABM)."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Generic B2C Strategies",
      description: "Applying a cookie-cutter strategy that ignores the complex, multi-touch, multi-stakeholder nature of enterprise sales."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Technical SEO Blindness",
      description: "Your agency doesn't understand how to optimize your product pages, documentation, or blog for technical SEO."
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "Marketing/Sales Disconnect",
      description: "Marketing and Sales teams are not aligned on lead definitions, content needs, or pipeline goals."
    }
  ];

  const whyChoosePoints = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Proven Track Record",
      description: "$574M+ in verified client revenue. Our Enterprise clients see an average 3-5x return on their marketing investment."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "No Lock-In Contracts",
      description: "95% client retention rate is earned, not enforced. We offer month-to-month service because we're confident in our ability to deliver results."
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: "Full Transparency",
      description: "Full access to your analytics, conversion tracking, and reporting. No black boxes. Just clear, honest communication."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Enterprise Industry Expertise",
      description: "We understand the difference between a PQL and an SQL, the complexity of enterprise sales, and the need for ABM."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-primary" />,
      title: "Pipeline-Focused Reporting",
      description: "Our reports focus on SQLs, Pipeline Value, and Deal Velocity. We align our goals with your sales team's success."
    }
  ];

  const faqs = [
    {
      question: "How much does digital marketing cost for an Enterprise Software company?",
      answer: "Digital marketing costs for an Enterprise Software company are typically higher than general SaaS, reflecting the high value of a single deal. Most companies invest $10,000 - $50,000+ per month for comprehensive marketing (SEO, PPC, ABM, management fees). Our team will provide a detailed quote during your free audit."
    },
    {
      question: "How long does it take to see results from Enterprise Software marketing?",
      answer: "PPC and ABM campaigns can generate SQLs within weeks. SEO typically takes 9-18 months for significant organic growth. We focus on a blended strategy to deliver both immediate pipeline acceleration and long-term, low-CAC authority."
    },
    {
      question: "Do you specialise in B2B or B2C Enterprise Software?",
      answer: "We specialise in B2B Enterprise Software, tailoring our strategy to the complex, multi-touch, multi-stakeholder sales cycle that defines the enterprise space."
    },
    {
      question: "How do you measure success for Enterprise Software marketing?",
      answer: "We measure success based on SQLs (Sales Qualified Leads), Pipeline Value, and Deal Velocity. We track every lead from the first touch to the final closed-won deal."
    },
    {
      question: "Can you help us implement Account-Based Marketing (ABM)?",
      answer: "Yes. ABM is a core component of our strategy for Enterprise Software. We use highly targeted ads and personalised content to penetrate specific high-value accounts."
    },
    {
      question: "What is the most important marketing channel for Enterprise Software?",
      answer: "Content-driven SEO (for thought leadership and technical documentation) and highly targeted PPC/ABM campaigns are the most critical. A balanced, integrated approach is always best."
    },
    {
      question: "Do you help with website design and development?",
      answer: "Yes. We build high-converting, enterprise-grade websites that are optimised for trust, security, speed, and SQL conversion."
    },
    {
      question: "Do you offer a performance guarantee?",
      answer: "We offer the best guarantee in the industry: No Lock-In Contracts. If we are not delivering a positive ROI, you are free to leave at any time. We put the risk on us, not you."
    },
    {
      question: "How do you handle the technical SEO for a large Enterprise platform?",
      answer: "We specialise in technical SEO, optimising complex site structures, API documentation, and large-scale content for speed, crawlability, and mobile-first indexing."
    },
    {
      question: "Do you integrate with our CRM and sales enablement tools?",
      answer: "Absolutely. We integrate directly with your CRM (Salesforce, HubSpot, etc.) and sales enablement tools to ensure our reporting is based on actual pipeline health and deal velocity."
    }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au/",
        "logo": "https://odindigital.com.au/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+61-2-8000-0000",
          "contactType": "customer service"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Digital Marketing for Enterprise Software",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "name": "Digital Marketing for Enterprise Software Companies",
        "description": "Conversion-focused digital marketing services for B2B enterprise software companies, including Account-Based Marketing (ABM), SEO, PPC, and Web Design, all focused on generating Sales Qualified Leads (SQLs) and accelerating pipeline velocity.",
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Enterprise Software Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Enterprise SEO Agency Services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "PPC for Enterprise Software"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Enterprise Software Website Design"
              }
            }
          ]
        }
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
        "itemReviewed": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "name": "Enterprise Software Marketing Success",
        "author": {
          "@type": "Person",
          "name": "A Satisfied Enterprise Client"
        },
        "reviewBody": "Odin Digital fundamentally changed how we approach B2B marketing. They moved us from vanity metrics to focusing purely on Sales Qualified Leads. Our pipeline velocity has increased by 40% since we started with their ABM and Enterprise SEO strategy. Highly recommend for any high-value software company."
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Digital Marketing for Enterprise Software Companies | Odin Digital</title>
        <meta name="description" content="Stop generating low-value leads. Odin Digital provides conversion-focused digital marketing for enterprise software companies, specialising in ABM, SQL generation, and pipeline acceleration." />
        <link rel="canonical" href="https://odindigital.com.au/industries/enterprise-software" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main id="main-content">
        <Breadcrumbs items={breadcrumbItems} />

        <ServiceHero
          h1="Digital Marketing for Enterprise Software Companies"
          subheadline={
            <>
              <p className="hero-sub-headline text-xl md:text-2xl font-semibold mb-4">
                Stop Generating Low-Value Leads. Start Filling Your Pipeline with Sales-Qualified Opportunities.
              </p>
              <p className="text-base md:text-lg text-charcoal/80">
                You're selling a complex, high-value solution with a long sales cycle, multiple stakeholders, and a high barrier to entry. We provide digital marketing that eliminates waste and focuses obsessively on generating Sales Qualified Leads (SQLs), accelerating pipeline velocity, and maximising deal size.
              </p>
              <div className="mt-8">
                <Button 
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg whitespace-normal break-words"
                >
                  Get Your FREE Enterprise Software Marketing Audit →
                </Button>
              </div>
            </>
          }
        />

        {/* Pain Points Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-br from-white via-muted/30 to-muted/20 overflow-hidden">
          {/* Animated background blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-muted/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Why Most Marketing Agencies Fail Enterprise Software Companies
              </h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                Enterprise software companies waste thousands every month on <span className="font-semibold text-primary">enterprise software marketing</span> that looks impressive on paper but delivers nothing to the bottom line. Here's why most agencies fail.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {painPoints.map((point, index) => (
                <Card key={index} className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4">{point.icon}</div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">{point.title}</h3>
                    <p className="text-charcoal/70">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                onClick={() => navigate('/contact')}
                className="whitespace-normal break-words py-3 px-6"
              >
                Stop Generating Low-Value Leads: Talk to an Enterprise Expert →
              </Button>
            </div>
          </div>
        </section>

        {/* Enterprise SEO Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-br from-white via-muted/20 to-white overflow-hidden">
          {/* Floating circles */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-1/3 left-10 w-16 h-16 border-2 border-primary/10 rounded-lg rotate-12 animate-float"></div>
          <div className="absolute bottom-1/3 right-10 w-20 h-20 border-2 border-accent/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Enterprise SEO Agency: Driving Organic SQLs and Authority
              </h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                We build <span className="font-semibold text-primary">enterprise SEO agency</span> strategies that get your product to Page 1 for the exact searches your ideal buyers are using when they're ready to evaluate solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <Zap className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Technical SEO Mastery: Optimising for Scale and Security</h3>
                  <p className="text-charcoal/70">
                    Enterprise websites are often massive, complex, and highly secure. We ensure your site is technically flawless, optimising for speed, crawlability, and mobile-first indexing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <FileText className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Content Strategy: Targeting Every Stakeholder</h3>
                  <p className="text-charcoal/70">
                    We create content that targets all stakeholders at every stage: C-Suite (ROI white papers), IT (API documentation), End-User (use cases and comparisons).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <Layers className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Product-Led SEO: Optimising Documentation and API Pages</h3>
                  <p className="text-charcoal/70">
                    Your technical documentation is a goldmine for long-tail SEO. We optimise these pages to capture high-intent users searching for specific technical solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <Link2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Link Building for Authority: Earning High-Value Backlinks</h3>
                  <p className="text-charcoal/70">
                    We execute targeted link-building campaigns to earn backlinks from high-authority industry sites (Gartner, Forrester, major tech publications).
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 whitespace-normal break-words"
              >
                See Our Enterprise SEO Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* PPC for Enterprise Software Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-br from-muted/30 via-white to-muted/20 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                PPC for Enterprise Software: Qualified Demo Requests and Pipeline Acceleration
              </h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                We build <span className="font-semibold text-primary">ppc for enterprise software</span> campaigns that deliver immediate, Sales Qualified Leads (SQLs) while maintaining a healthy Cost Per SQL.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <DollarSign className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Cost Per SQL Optimisation: Revenue-Focused Bidding</h3>
                  <p className="text-charcoal/70">
                    We don't bid on clicks; we bid on qualified demo requests and SQLs. We use advanced bidding strategies to ensure your Cost Per SQL remains below your target threshold.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <Target className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Funnel-Aligned Ad Copy: Filtering Out Tire-Kickers</h3>
                  <p className="text-charcoal/70">
                    Your ad copy needs to speak directly to the enterprise pain point and the solution. We use copy that filters out low-intent users and attracts prospects ready for a demo.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <Users className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Competitor Conquesting: Capturing Users Ready to Switch</h3>
                  <p className="text-charcoal/70">
                    We build targeted campaigns to capture users searching for your competitors, positioning your product as the superior alternative for enterprise needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Landing Page Optimisation: Maximising Demo Request Conversion</h3>
                  <p className="text-charcoal/70">
                    We ensure your PPC traffic lands on a dedicated, conversion-optimised landing page designed to maximise the demo request conversion rate.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 whitespace-normal break-words"
              >
                See Our Enterprise PPC Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* Meta Ads Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-br from-white via-muted/20 to-white overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 left-1/3 w-48 h-48 bg-primary/15 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-1/3 w-48 h-48 bg-accent/15 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Meta Ads for Enterprise Software: ABM and Thought Leadership
              </h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                We build Meta Ads for Enterprise Software campaigns that leverage the platform for Account-Based Marketing (ABM) and thought leadership, rather than mass awareness.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <Target className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Account-Based Marketing (ABM): Targeting Specific Accounts</h3>
                  <p className="text-charcoal/70">
                    We use highly specific targeting (job titles, company size, industry) and custom audiences to ensure your ads are only seen by decision-makers at your target accounts.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <Award className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Thought Leadership Campaigns: Building Credibility</h3>
                  <p className="text-charcoal/70">
                    We run campaigns promoting high-value content (white papers, case studies, industry reports) to establish your company as a thought leader.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <Users className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Retargeting: Nurturing Long-Cycle Leads</h3>
                  <p className="text-charcoal/70">
                    We aggressively retarget website visitors, content downloaders, and demo abandoners with compelling, personalised content to nurture them through the long sales cycle.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 whitespace-normal break-words"
              >
                See Our Enterprise Meta Ads Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* Website Design Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-br from-muted/30 via-white to-muted/20 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-10 right-10 w-56 h-56 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Enterprise Software Website Design: Your Trust and Authority Hub
              </h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                We build <span className="font-semibold text-primary">enterprise software website design</span> that positions your product as the trusted, authoritative solution and converts visitors into Sales Qualified Leads (SQLs).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Trust and Authority Design: Building Credibility</h3>
                  <p className="text-charcoal/70">
                    Your website must exude trust. We prioritise clear security badges, compliance information, case studies, and a professional, enterprise-grade aesthetic.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <Target className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Conversion-Optimised for SQLs: Focusing on the Demo Request</h3>
                  <p className="text-charcoal/70">
                    We prioritise clear, prominent Calls-to-Action (CTAs) for Demo Requests and Consultations, minimising friction and maximising the SQL conversion rate.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <Zap className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Technical Excellence: Speed and Scalability</h3>
                  <p className="text-charcoal/70">
                    Enterprise websites must be fast and scalable. We ensure your website is built on a robust, modern framework that can handle high traffic and complex integrations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Sales Enablement Integration: Seamless Handoff</h3>
                  <p className="text-charcoal/70">
                    We ensure seamless integration with your CRM and sales enablement tools, providing your sales team with rich lead data and a smooth handoff process.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 whitespace-normal break-words"
              >
                See Our Enterprise Web Design Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-br from-white via-muted/30 to-muted/20 overflow-hidden">
          {/* Animated blobs */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Why Enterprise Software Companies Choose Odin Digital
              </h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                We are not a generalist agency that dabbles in B2B. We are specialists who understand the unique unit economics and growth challenges of Enterprise Software.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
              {whyChoosePoints.map((point, index) => (
                <Card key={index} className="text-center border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">{point.icon}</div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">{point.title}</h3>
                    <p className="text-sm text-charcoal/70">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 whitespace-normal break-words"
              >
                Talk to an Enterprise Software Marketing Specialist →
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-br from-muted/30 via-white to-muted/20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                FAQs: Your Questions About Enterprise Software Marketing Answered
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4 bg-white/80 backdrop-blur-sm rounded-lg">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-primary/10 rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left font-semibold text-charcoal hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-charcoal/70">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-muted/20 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Ready to Stop Wasting Money and Start Accelerating Your Pipeline?
            </h2>
            <p className="text-lg text-charcoal/70 max-w-3xl mx-auto mb-8">
              Stop settling for generic marketing that doesn't understand the complexity of your sales cycle. Start working with the <span className="font-semibold text-primary">enterprise software marketing agency</span> that drives SQLs, accelerates pipeline velocity, and maximises deal size.
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/contact')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg whitespace-normal break-words"
            >
              Claim Your FREE Enterprise Software Marketing Audit →
            </Button>
          </div>
        </section>

      </main>

      <SideTab />
      <Footer />
    </div>
  );
};

export default EnterpriseSoftware;
