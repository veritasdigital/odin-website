import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SideTab } from "@/components/SideTab";
import { TrendingUp, DollarSign, Target, Monitor, Settings, ArrowDownUp, Zap, FileText, Link2, Award, Users, Shield, BarChart, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SaasCompanies = () => {
  const navigate = useNavigate();

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Industries", path: "/industries" },
    { label: "SaaS Companies", path: "/industries/saas-companies" }
  ];

  const painPoints = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "High CAC, Low CLV",
      description: "Most agencies focus on getting sign-ups without considering the cost to acquire or the lifetime value, resulting in unsustainable unit economics."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Vanity Metrics Trap",
      description: "Agencies celebrate impressions and clicks while your MRR stagnates. We focus on metrics that actually matter: CAC, CLV, and MRR growth."
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "No Funnel Alignment",
      description: "Generic marketing doesn't understand the SaaS funnel (awareness → trial → paid → retention). We build campaigns for every stage."
    },
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      title: "Generic Strategies",
      description: "What works for e-commerce or local businesses fails for SaaS. We understand product-led growth and freemium models."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Technical SEO Blindness",
      description: "Most agencies can't handle the technical complexity of SaaS platforms (large site structures, dynamic content, documentation)."
    },
    {
      icon: <ArrowDownUp className="w-8 h-8 text-primary" />,
      title: "High Churn",
      description: "Agencies focus on acquisition and ignore retention, leaving you with a leaky bucket that never fills."
    }
  ];

  const whyChoosePoints = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Proven Track Record",
      description: "$574M+ in verified client revenue. We've helped scale SaaS companies from early-stage to enterprise."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "No Lock-In Contracts",
      description: "If we're not delivering a positive ROI, you're free to leave. We put the risk on us, not you."
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: "Full Transparency",
      description: "Real-time dashboards showing CAC, CLV, MRR, and every dollar spent. No black boxes."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "SaaS Industry Expertise",
      description: "We speak your language: ARR, churn rate, product-led growth, freemium models, and unit economics."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Revenue-Focused Reporting",
      description: "We report on MRR and CAC, not impressions or clicks. Your dashboard shows what actually matters to your bottom line."
    }
  ];

  const faqs = [
    {
      question: "How much does digital marketing cost for a SaaS company?",
      answer: "Digital marketing costs for a SaaS company vary significantly based on your target market, stage of growth, and target CAC. Most high-growth SaaS companies invest $5,000 - $25,000+ per month for comprehensive marketing (SEO, PPC, Meta Ads, management fees). Our team will provide a detailed quote during your free audit."
    },
    {
      question: "How long does it take to see results from SaaS marketing?",
      answer: "PPC and Meta Ads deliver immediate sign-ups (within days). SEO typically takes 6-12 months for significant organic growth. We focus on a blended strategy to deliver both short-term sign-ups and long-term, low-CAC organic growth."
    },
    {
      question: "Do you work with B2B or B2C SaaS companies?",
      answer: "We work with both B2B and B2C SaaS companies, tailoring our strategy to the specific sales cycle and target persona of your product."
    },
    {
      question: "How do you measure success for SaaS marketing?",
      answer: "We measure success based on MRR (Monthly Recurring Revenue), CLV (Customer Lifetime Value), and CAC (Customer Acquisition Cost). We track every lead from the first click to the final paid conversion."
    },
    {
      question: "Can you help us reduce our customer churn rate?",
      answer: "Yes. Our marketing strategy includes retention-focused campaigns (email sequences, in-app messaging, retargeting) designed to keep users engaged and reduce churn, directly impacting your CLV."
    },
    {
      question: "What is the most important marketing channel for a SaaS company?",
      answer: "SEO is the most critical long-term channel for sustainable, low-CAC growth. However, PPC is essential for immediate sign-ups and market validation. A balanced, integrated approach is always best."
    },
    {
      question: "Do you help with website design and development?",
      answer: "Yes. We build high-converting websites that are optimized for speed, mobile, and SEO, ensuring your marketing efforts are not wasted on a poor website."
    },
    {
      question: "Do you offer a performance guarantee?",
      answer: "We offer the best guarantee in the industry: No Lock-In Contracts. If we are not delivering a positive ROI, you are free to leave at any time. We put the risk on us, not you."
    },
    {
      question: "How do you handle the technical SEO for a large SaaS platform?",
      answer: "We specialize in technical SEO, optimizing complex site structures, product documentation, and large-scale content for speed, crawlability, and mobile-first indexing."
    },
    {
      question: "Do you integrate with our CRM and analytics tools?",
      answer: "Absolutely. We integrate directly with your CRM (Salesforce, HubSpot, etc.) and analytics tools to ensure our reporting is based on actual revenue and user behavior, not just vanity metrics."
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
        "description": "Performance-focused digital marketing agency specialising in SaaS marketing, focused on reducing CAC, increasing CLV, and scaling MRR. $574M+ in client revenue. No lock-in contracts.",
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
        "@type": "Service",
        "serviceType": "Digital Marketing for SaaS Companies",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "description": "Comprehensive digital marketing services for SaaS companies, including SaaS SEO, PPC, Meta Ads, and web design, focused on MRR, CLV, and CAC optimisation."
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
    <div className="min-h-screen">
      <Helmet>
        <title>Digital Marketing for SaaS Companies | SaaS SEO & PPC Agency | Odin Digital</title>
        <meta name="description" content="Stop chasing vanity metrics. Odin Digital provides SaaS marketing focused on reducing CAC, increasing CLV, and scaling MRR for high-growth software companies." />
        <link rel="canonical" href="https://odindigital.com.au/industries/saas-companies" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <Header />
      
      <main id="main-content">
        <Breadcrumbs items={breadcrumbItems} />

        <ServiceHero
          h1="Digital Marketing for SaaS Companies"
          subheadline={
            <>
              <p className="hero-sub-headline text-xl md:text-2xl font-semibold mb-4">
                Stop Chasing Vanity Metrics. Start Scaling Your MRR with Marketing That Drives Qualified Sign-Ups.
              </p>
              <p className="text-base md:text-lg text-charcoal/80">
                Most SaaS companies waste thousands every month on marketing that looks impressive on paper but delivers nothing to the bottom line. We build data-driven digital marketing systems that reduce your Customer Acquisition Cost (CAC), increase Customer Lifetime Value (CLV), and scale your Monthly Recurring Revenue (MRR).
              </p>
              <div className="mt-8">
                <Button 
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg whitespace-normal break-words"
                >
                  Get Your FREE SaaS Marketing Audit →
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
                Why Most Marketing Agencies Fail SaaS Companies
              </h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                SaaS companies waste thousands every month on SaaS advertising that looks impressive on paper but delivers nothing to the bottom line. Here's why most agencies fail.
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
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 whitespace-normal break-words"
              >
                Stop Chasing Vanity Metrics: Talk to a SaaS Expert →
              </Button>
            </div>
          </div>
        </section>

        {/* SaaS SEO Section */}
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
                SaaS SEO Agency: Driving Organic Sign-Ups and Reducing CAC
              </h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                We build SaaS SEO agency strategies that get your product to Page 1 for the exact searches your ideal users are using when they're ready to solve a problem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <Zap className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Technical SEO Mastery: Optimising for Speed and Scale</h3>
                  <p className="text-charcoal/70">
                    We optimize your entire platform (product pages, documentation, feature pages) for speed, crawlability, and mobile-first indexing, ensuring Google can find and rank your content.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <FileText className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Content Strategy: Targeting Every Stage of the Funnel</h3>
                  <p className="text-charcoal/70">
                    We create content that targets users at every stage: awareness (blog posts), consideration (comparison pages), and decision (product feature pages).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <Monitor className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Product-Led SEO: Optimising Feature and Documentation Pages</h3>
                  <p className="text-charcoal/70">
                    We optimize your product pages and documentation to rank for high-intent searches, driving qualified users who are ready to sign up.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10 hover:border-primary/30 transition-all bg-white/80 backdrop-blur-sm hover:shadow-lg">
                <CardContent className="p-6">
                  <Link2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Link Building for Authority: Earning High-Value Backlinks</h3>
                  <p className="text-charcoal/70">
                    We build high-quality backlinks from authoritative industry publications and SaaS review sites to establish your platform as the trusted solution.
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
                See Our SaaS SEO Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* PPC for SaaS Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-br from-muted/30 via-white to-muted/20 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                PPC for SaaS: Qualified Sign-Ups and Low CAC
              </h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                We build PPC for SaaS campaigns that deliver immediate, qualified sign-ups while maintaining a healthy Customer Acquisition Cost (CAC).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-primary/10">
                <CardContent className="p-6">
                  <DollarSign className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">CPA and CAC Optimisation: Revenue-Focused Bidding</h3>
                  <p className="text-charcoal/70">
                    We bid based on your target CAC and CLV, ensuring every dollar spent delivers a positive ROI and sustainable unit economics.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10">
                <CardContent className="p-6">
                  <Target className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Funnel-Aligned Ad Copy: Filtering Out Tyre-Kickers</h3>
                  <p className="text-charcoal/70">
                    We write ad copy that filters out unqualified clicks and attracts users who are ready to solve a problem, reducing wasted spend.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10">
                <CardContent className="p-6">
                  <Users className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Competitor Conquesting: Capturing Users Ready to Switch</h3>
                  <p className="text-charcoal/70">
                    We target users searching for your competitors, capturing high-intent users who are actively looking for a better solution.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10">
                <CardContent className="p-6">
                  <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Landing Page Optimisation: Maximising Trial-to-Paid Conversion</h3>
                  <p className="text-charcoal/70">
                    We optimize your landing pages to convert PPC traffic into qualified trials, then into paying customers, reducing your CAC.
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
                See Our SaaS PPC Packages →
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
                Meta Ads for SaaS: Visualising the Solution and Retargeting
              </h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                We build Meta Ads for SaaS campaigns that leverage the visual nature of your product to showcase the solution and build a pipeline of warm leads.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-primary/10">
                <CardContent className="p-6">
                  <Monitor className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Visualising the Solution: Product Demos and Use Cases</h3>
                  <p className="text-charcoal/70">
                    We create video ads that demonstrate your product in action, showing users exactly how you solve their problem.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10">
                <CardContent className="p-6">
                  <Settings className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Full-Funnel Strategy: Building a Pipeline</h3>
                  <p className="text-charcoal/70">
                    We build campaigns that move users from awareness to trial, nurturing them with educational content and social proof.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10">
                <CardContent className="p-6">
                  <ArrowDownUp className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Retargeting: Reducing Churn and Maximising CLV</h3>
                  <p className="text-charcoal/70">
                    We retarget trial users with upgrade messaging and existing customers with retention campaigns to reduce churn.
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
                See Our SaaS Meta Ads Packages →
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
                SaaS Website Design: Your Conversion Engine
              </h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                We build SaaS website design that positions your product as the essential solution and converts visitors into qualified sign-ups at the highest possible rate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-primary/10">
                <CardContent className="p-6">
                  <Target className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Conversion-Optimised Design: Focusing on the Sign-Up Button</h3>
                  <p className="text-charcoal/70">
                    We design every page element to guide users toward the sign-up button, using persuasive copy, social proof, and strategic CTAs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10">
                <CardContent className="p-6">
                  <Zap className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Technical Excellence: Speed and Scalability</h3>
                  <p className="text-charcoal/70">
                    We build websites that load in under 2 seconds, are mobile-first, and scale as your user base grows.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10">
                <CardContent className="p-6">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Trust and Credibility: Case Studies and Social Proof</h3>
                  <p className="text-charcoal/70">
                    We prominently display case studies, customer logos, and testimonials to build trust and credibility.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/10">
                <CardContent className="p-6">
                  <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Product-Led Growth Integration: Seamless Trial Experience</h3>
                  <p className="text-charcoal/70">
                    We integrate seamlessly with your trial flow, ensuring the transition from website to product is smooth and frictionless.
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
                See Our SaaS Web Design Packages →
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
                Why SaaS Companies Choose Odin Digital
              </h2>
              <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                We are not a generalist agency that dabbles in software. We are specialists who understand the unique unit economics and growth challenges of SaaS.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              {whyChoosePoints.map((point, index) => (
                <Card key={index} className="border-primary/10 hover:border-primary/30 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">{point.icon}</div>
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
                Talk to a SaaS Marketing Specialist →
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
                FAQs: Your Questions About SaaS Marketing Answered
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
              Ready to Stop Wasting Money and Start Scaling Your MRR?
            </h2>
            <p className="text-lg text-charcoal/70 max-w-3xl mx-auto mb-8">
              Stop settling for generic marketing that doesn't understand your unit economics. Start working with the SaaS marketing agency that drives qualified sign-ups, reduces CAC, and scales your MRR.
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/contact')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg whitespace-normal break-words"
            >
              Claim Your FREE SaaS Marketing Audit →
            </Button>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-primary/10 md:hidden z-50">
          <Button 
            size="lg"
            onClick={() => navigate('/contact')}
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 whitespace-normal break-words"
          >
            Get Your FREE SaaS Marketing Audit →
          </Button>
        </div>
      </main>

      <Footer />
      <SideTab />
    </div>
  );
};

export default SaasCompanies;