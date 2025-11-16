import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceHero } from "@/components/ServiceHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { CheckCircle, Users, Target, TrendingUp, Award, Search, Leaf, Phone, MapPin } from "lucide-react";
const LandscapingCompanies = () => {
  const {
    openForm
  } = useMarketingForm();
  const faqs = [{
    question: "How much does landscaping marketing cost?",
    answer: "Landscaping marketing costs vary depending on your goals, location, and competition. We offer packages starting at $1,500 per month for small contractors and up to $10,000+ per month for larger campaigns. We're happy to discuss your budget and create a custom quote."
  }, {
    question: "How long does it take to see results?",
    answer: "You can see initial results within 2–4 weeks. However, it typically takes 8–12 weeks to optimise campaigns and see consistent results. SEO takes longer (3–6 months) but provides long-term results."
  }, {
    question: "What marketing channels work best for landscaping companies?",
    answer: "Google Ads and SEO are the most effective for capturing high-intent customers actively searching for landscaping services. Facebook and Instagram Ads work well for brand awareness and showcasing your portfolio. We recommend an integrated approach combining multiple channels."
  }, {
    question: "Can you help with seasonal fluctuations?",
    answer: "Yes. We develop marketing strategies that address seasonal fluctuations. We help you generate leads year-round by adjusting budgets during peak season and focusing on planning services during slow periods. This smooths out seasonal revenue swings."
  }, {
    question: "Do you provide transparent reporting?",
    answer: "Yes. We provide detailed monthly reporting showing leads generated, cost per lead, conversion rates, and ROI. You'll receive easy-to-understand dashboards and regular communication so you always know how your marketing is performing."
  }, {
    question: "Do I need to sign a long-term contract?",
    answer: "We offer both fixed-term agreements (typically 6-12 months for best results) and month-to-month options. Most clients stay with us long-term because we deliver measurable results. No lock-in contracts—we earn your business every month."
  }, {
    question: "Can you guarantee results?",
    answer: "While we can't guarantee specific results (no ethical agency can), we do guarantee our effort, expertise, and transparent communication. We track and optimise for metrics that matter: leads, conversions, and ROI. Our 95% client retention rate speaks to our results."
  }, {
    question: "Do you offer a free consultation?",
    answer: "Yes. We offer a free landscaping marketing consultation where we'll audit your current marketing, analyse your local competition, and provide actionable recommendations. No pressure, no obligations—just valuable insights for your business."
  }, {
    question: "How do you help us get more customer reviews?",
    answer: "We implement automated review generation systems that make it easy for happy customers to leave reviews on Google, Facebook, and industry-specific platforms. We also help you respond professionally to all reviews, building trust with potential customers."
  }, {
    question: "Can you help our website rank higher on Google?",
    answer: "Yes. We specialise in local SEO for landscaping companies. This includes optimising your Google Business Profile, building location-specific pages, creating service-specific content, and earning quality backlinks. Most clients see significant ranking improvements within 3-6 months."
  }, {
    question: "Do you build websites for landscaping companies?",
    answer: "Yes. We design professional, mobile-responsive websites optimised for conversions. Our websites showcase your portfolio, highlight customer testimonials, and include clear calls-to-action that convert visitors into leads. Typical timeline is 4-8 weeks."
  }, {
    question: "Can you work with small landscaping contractors?",
    answer: "Absolutely. We work with landscaping companies of all sizes—from solo contractors to large commercial landscaping firms. We tailor our strategies and pricing to fit your specific goals, budget, and market."
  }, {
    question: "How do we compete with larger landscaping companies?",
    answer: "We position you as the local expert and leverage your unique strengths: personalised service, local knowledge, specialised expertise. Through targeted local SEO, Google Ads, and review management, we help you dominate your service area even against larger competitors."
  }, {
    question: "Can you help market commercial landscaping services?",
    answer: "Yes. We create specialised campaigns for commercial landscaping including LinkedIn advertising, industry-specific SEO, and targeting property managers, facilities managers, and commercial developers. We understand the longer sales cycles and relationship-based nature of commercial work."
  }, {
    question: "How do I get started?",
    answer: "Schedule a free strategy session with our team. We'll audit your current marketing, identify opportunities, and provide a customised roadmap for growth. No pressure, no obligations—just actionable insights tailored to your landscaping business."
  }];
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "Organization",
      "name": "Odin Digital",
      "url": "https://growth-conduit-central.lovable.app/",
      "logo": "https://growth-conduit-central.lovable.app/logo.png",
      "description": "Landscaping marketing services for landscape contractors.",
      "founder": {
        "@type": "Person",
        "name": "Lucas Durante"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "url": "https://growth-conduit-central.lovable.app/contact"
      },
      "sameAs": ["https://www.linkedin.com/company/odin-digital", "https://www.facebook.com/odindigital", "https://twitter.com/odindigital"]
    }, {
      "@type": "WebPage",
      "name": "Landscaping Company Marketing | Consistent Leads, Proven Results",
      "url": "https://growth-conduit-central.lovable.app/industries/landscaping-companies",
      "inLanguage": "en-AU",
      "description": "Landscaping marketing services for landscape contractors. SEO, Google Ads, Facebook Ads, web design. 150+ companies, $8M attributed revenue. Consistent leads, local expertise, affordable pricing.",
      "about": {
        "@type": "Service",
        "name": "Landscaping Company Marketing"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://growth-conduit-central.lovable.app/"
        }, {
          "@type": "ListItem",
          "position": 2,
          "name": "Industries",
          "item": "https://growth-conduit-central.lovable.app/industries"
        }, {
          "@type": "ListItem",
          "position": 3,
          "name": "Landscaping Company Marketing"
        }]
      }
    }, {
      "@type": "Service",
      "serviceType": "Landscaping Company Marketing",
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
        "name": "Digital Marketing Services for Landscaping Companies",
        "itemListElement": [{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Search Engine Optimisation (SEO)"
          }
        }, {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads Management"
          }
        }, {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Facebook and Instagram Ads"
          }
        }, {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Website Design"
          }
        }]
      }
    }, {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }, {
      "@type": "Review",
      "itemReviewed": {
        "@type": "Service",
        "name": "Odin Digital - Landscaping Company Marketing"
      },
      "author": {
        "@type": "Person",
        "name": "Evan Tsaboukos"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
      "publisher": {
        "@type": "Organization",
        "name": "Imperial Wealth"
      }
    }, {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }]
  };
  return <>
      <Helmet>
        <title>Landscaping Company Marketing | Consistent Leads, Proven Results | Odin Digital</title>
        <meta name="description" content="Landscaping marketing services for landscape contractors. SEO, Google Ads, Facebook Ads, web design. 150+ companies, $8M attributed revenue. Consistent leads, local expertise, affordable pricing." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 pt-24 pb-4">
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
                <Link to="/industries">Industries</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Landscaping Company Marketing</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <ServiceHero h1="Landscaping Company Marketing: Consistent Leads, Proven Results, Local Expertise" subheadline="Your landscaping business deserves marketing that generates consistent, reliable leads. Landscaping is a seasonal business, but you can smooth out the fluctuations with the right marketing strategy. Customers search online for landscapers. They look on Google, Facebook, Instagram, and review sites. They read reviews and testimonials. They check out your website and portfolio. But if you're struggling with inconsistent leads, poor online visibility, high customer acquisition costs, or lack of digital marketing knowledge, you're not alone. Most landscaping companies struggle with marketing. They rely on word-of-mouth and local directories. They don't have a professional website. They don't show up on Google. They don't have customer reviews. And they don't have a consistent way to generate leads. That's where we come in. Odin Digital is the leading landscaping marketing agency. We help landscaping companies generate consistent, reliable leads through integrated marketing. We've helped over 150 landscaping companies grow their business. We've generated over $8 million in attributed revenue for our clients. We specialise in SEO, Google Ads, Facebook Ads, website design, and reputation management. Whether you're a solo contractor, small crew, or mid-size company, we can help you achieve your landscaping marketing goals." />

      {/* Social Proof Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">150+</div>
              <div className="text-muted-foreground">Landscaping Companies Helped</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">$8M+</div>
              <div className="text-muted-foreground">In Attributed Revenue</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Client Retention Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">4.9/5</div>
              <div className="text-muted-foreground">Average Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Agitation Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The Landscaping Marketing Challenge</h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Landscaping marketing is complex and challenging. Here's what's holding you back.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Inconsistent Lead Generation</h3>
                <p className="text-muted-foreground">
                  Your leads fluctuate wildly from month to month. Some months you're booked solid, other months you're scrambling for work. You rely on word-of-mouth and hope customers find you. There's no predictable system for generating consistent leads.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Poor Online Visibility</h3>
                <p className="text-muted-foreground">
                  When customers search for landscaping services in your area, you don't show up. Your competitors dominate Google search results and maps. Your outdated or non-existent website doesn't convert visitors into leads. You're invisible online.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">High Customer Acquisition Cost</h3>
                <p className="text-muted-foreground">
                  You're spending money on marketing but not seeing results. Your cost per lead is too high. You waste budget on broad advertising that doesn't reach your ideal customers. You can't track ROI because you don't know what's working and what's not.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Trusted by Australia's Leading Businesses</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Award key={i} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month."
                </p>
                <div className="mt-auto">
                  <div className="font-semibold">Evan Tsaboukos</div>
                  <div className="text-sm text-muted-foreground">Imperial Wealth</div>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Award key={i} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Working with Odin Digital transformed our online presence. Within 6 months, we saw a 285% increase in qualified leads and our cost per acquisition dropped by 42%. They truly understand our market."
                </p>
                <div className="mt-auto">
                  <div className="font-semibold">Fabienne Costa</div>
                  <div className="text-sm text-muted-foreground">YCL Jewels</div>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Award key={i} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The ROI speaks for itself. Odin Digital's strategic approach to PPC and SEO helped us dominate our local market. Our practice revenue increased by 310% in the first year. Highly recommended."
                </p>
                <div className="mt-auto">
                  <div className="font-semibold">Liam C</div>
                  <div className="text-sm text-muted-foreground">Krush Organics</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Landscaping Companies Choose Odin Digital</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Consistent Lead Generation</h3>
                <p className="text-muted-foreground">
                  We build integrated marketing systems that generate predictable, consistent leads year-round. No more feast or famine—just steady, reliable growth.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Local Market Expertise</h3>
                <p className="text-muted-foreground">
                  We understand local landscaping markets across Australia. We know your competition, your customers, and the seasonal trends that impact your business.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Affordable, Scalable Pricing</h3>
                <p className="text-muted-foreground">
                  We offer flexible pricing that fits your budget and scales with your growth. From solo contractors to large commercial firms, we have solutions that deliver ROI.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Transparent ROI Tracking</h3>
                <p className="text-muted-foreground">
                  No vanity metrics. We track leads, conversions, cost per acquisition, and revenue. You get easy-to-understand monthly reports showing exactly how your marketing investment performs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Landscaping Marketing Services</h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Integrated digital marketing designed specifically for landscaping companies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Search Engine Optimisation (SEO)</h3>
                <p className="text-muted-foreground mb-6">
                  Dominate local search results with SEO optimised for landscaping services. We optimise your Google Business Profile, build service-specific pages, create local content, and earn quality backlinks to rank higher.
                </p>
                <Link to="/seo-agency">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Google Ads Management</h3>
                <p className="text-muted-foreground mb-6">
                  Capture high-intent customers actively searching for landscaping services. We create precision-targeted Google Ads campaigns optimised for conversions, not just clicks. Lower cost per lead, higher ROI.
                </p>
                <Link to="/google-ads">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Facebook & Instagram Ads</h3>
                <p className="text-muted-foreground mb-6">
                  Build brand awareness and showcase your portfolio with targeted social media advertising. We create visually stunning ads that reach homeowners in your service area and drive qualified leads.
                </p>
                <Link to="/facebook-advertising">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Professional Website Design</h3>
                <p className="text-muted-foreground mb-6">
                  Conversion-optimised websites that showcase your work and convert visitors into leads. Mobile-responsive, fast-loading, with portfolio galleries, testimonials, and clear calls-to-action.
                </p>
                <Link to="/website-design">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Reputation Management</h3>
                <p className="text-muted-foreground mb-6">
                  Build trust with automated review generation systems. We make it easy for happy customers to leave reviews on Google, Facebook, and industry platforms. Professional review response management included.
                </p>
                <Link to="/social-media">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Content Marketing</h3>
                <p className="text-muted-foreground mb-6">
                  Establish authority with educational content that attracts customers. Blog posts, project galleries, seasonal guides, and video content that ranks on Google and builds trust with prospects.
                </p>
                <Link to="/email-marketing-agency">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button onClick={openForm} size="lg" className="bg-gradient-primary text-white hover:shadow-glow">
              Schedule Your FREE Landscaping Marketing Strategy Session →
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our 7-Step Process for Predictable Growth</h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Discovery & Strategy</h3>
              <p className="text-muted-foreground">
                We audit your current marketing, analyse your local competition, and identify your unique positioning opportunities in the market.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Website Optimisation</h3>
              <p className="text-muted-foreground">
                We optimise your website for conversions, implement portfolio showcases, add customer testimonials, and create clear calls-to-action.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">SEO Implementation</h3>
              <p className="text-muted-foreground">
                We optimise your Google Business Profile, build service pages, create local content, and implement technical SEO best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-3">Paid Advertising</h3>
              <p className="text-muted-foreground">
                We launch precision-targeted Google Ads and Facebook/Instagram campaigns engineered to generate leads at the lowest cost per acquisition.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">5</div>
              <h3 className="text-xl font-bold mb-3">Reputation Building</h3>
              <p className="text-muted-foreground">
                We implement automated review generation systems and professional review management to build your online reputation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">6</div>
              <h3 className="text-xl font-bold mb-3">Monitoring & Optimisation</h3>
              <p className="text-muted-foreground">
                We continuously monitor performance, A/B test campaigns, and optimise for maximum ROI and lowest cost per lead.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">7</div>
              <h3 className="text-xl font-bold mb-3">Reporting & Communication</h3>
              <p className="text-muted-foreground">
                You get transparent monthly reports showing leads, conversions, ROI, and strategic recommendations for continued growth.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button onClick={openForm} size="lg" className="bg-gradient-primary text-white hover:shadow-glow">
              Get Your FREE Landscaping Marketing Audit →
            </Button>
          </div>
        </div>
      </section>

      {/* Landscaping Services We Help Market */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Landscaping Services We Help Market</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <Leaf className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Residential Landscaping</h3>
                <p className="text-muted-foreground">
                  Garden design, lawn installation, softscaping, hardscaping, outdoor living spaces, pool landscaping, and maintenance services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Leaf className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Commercial Landscaping</h3>
                <p className="text-muted-foreground">
                  Property management, HOA services, corporate campuses, retail centers, industrial facilities, and municipal contracts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Leaf className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Lawn Care Services</h3>
                <p className="text-muted-foreground">
                  Mowing, fertilisation, aeration, weed control, pest management, seasonal cleanup, and turf management programs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Leaf className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Hardscaping Services</h3>
                <p className="text-muted-foreground">
                  Paver installation, retaining walls, outdoor kitchens, fire pits, patios, walkways, driveways, and structural elements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Leaf className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Tree Services</h3>
                <p className="text-muted-foreground">
                  Tree removal, pruning, trimming, stump grinding, emergency services, arborist consultations, and tree health care.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Leaf className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Irrigation Services</h3>
                <p className="text-muted-foreground">
                  Sprinkler installation, drip systems, smart irrigation, repairs, maintenance, water management, and efficiency audits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Landscaping Marketing by Location</h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We serve landscaping companies across Australia with local market expertise.
          </p>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">Locations We Serve</h3>
                    <p className="text-muted-foreground mb-4">
                      We provide landscaping marketing services across all major Australian cities and regional areas. Our local market expertise ensures your campaigns are optimised for your specific service area.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Sydney</li>
                          <li>• Melbourne</li>
                          <li>• Brisbane</li>
                          <li>• Perth</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Adelaide</li>
                          <li>• Canberra</li>
                          <li>• Gold Coast</li>
                          <li>• Sunshine Coast</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Newcastle</li>
                          <li>• Wollongong</li>
                          <li>• Darwin</li>
                          <li>• Hobart</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      Plus regional areas across New South Wales, Victoria, Queensland, Western Australia, South Australia, Tasmania, ACT, and Northern Territory.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <Button onClick={openForm} variant="outline">
                    Get Started in Your Area
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <Button onClick={openForm} size="lg" className="bg-gradient-primary text-white hover:shadow-glow">
              Get Your FREE Landscaping Marketing Strategy Session →
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Consistent Landscaping Leads Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Stop relying on word-of-mouth and seasonal fluctuations. Start generating consistent, predictable leads with integrated digital marketing. Schedule your free strategy session today and discover how we can help your landscaping business thrive.
          </p>
          <Button onClick={openForm} size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 hover:text-primary">
            Schedule Your FREE Strategy Session →
          </Button>
        </div>
      </section>

      {/* Related Service & Industry Links */}
      <section className="py-20 bg-background">
        
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <Button onClick={openForm} size="lg" className="bg-gradient-primary text-white shadow-lg hover:shadow-glow whitespace-normal break-words">
          Schedule Free Consultation
        </Button>
      </div>

      <Footer />
    </>;
};
export default LandscapingCompanies;