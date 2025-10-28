import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, TrendingUp, Target, Users, Shield } from "lucide-react";
import { Helmet } from "react-helmet";

const GoogleAdsBallarat = () => {
  const navigate = useNavigate();

  const metrics = [
    { value: "$574M+", label: "Verified client revenue generated" },
    { value: "540%", label: "Average ROI on advertising spend" },
    { value: "95%", label: "Client Retention Rate" },
    { value: "283+", label: "Successful campaigns delivered" }
  ];

  const problems = [
    {
      icon: Target,
      title: "You're Paying \"Metro Markup\" for Generic Strategy",
      description: "Most PPC agencies in Melbourne and Sydney charge premium fees but apply a one-size-fits-all approach to Ballarat businesses. They don't understand your local market, your seasonal fluctuations, or the specific keywords that drive calls from customers in Wendouree, Alfredton, or Sebastopol. Their \"strategy\" is usually a copy-paste template, and your ad budget is funding their expensive overhead, not your growth."
    },
    {
      icon: TrendingUp,
      title: "Your Budget is Leaking on Irrelevant Clicks",
      description: "Without meticulous local geo-targeting and a rigorous negative keyword strategy, your Google Ads are being shown to people who will never become your customers. You're paying for clicks from Melbourne, Sydney, or even overseas, all while your real potential customers in Ballarat scroll right past your competitors because your ads aren't optimized for local intent. This \"budget bleed\" can account for 30-50% of your monthly spend, a massive hidden tax on your marketing."
    },
    {
      icon: Shield,
      title: "You're Trapped in a Contract With No Accountability",
      description: "Many PPC management companies lock you into 6, 12, or even 24-month contracts, ensuring their revenue regardless of your results. This creates a fundamental conflict of interest: they profit from your commitment, not your performance. If your campaigns aren't generating profitable ROAS (Return on Ad Spend), you're still locked in, bleeding money with no recourse. This is the old agency model, and it's designed to protect them, not you."
    }
  ];

  const services = [
    {
      title: "Hyper-Local Search & Shopping Mastery",
      description: "We don't just bid on generic keywords. We dominate the specific, high-intent search terms that Ballarat customers use to find businesses like yours. Our strategy includes meticulous geo-targeting to ensure your ads are only shown within your core service area, exhaustive negative keyword lists to block waste, and constant bid optimization to maximize your ROAS on every single dollar. For e-commerce businesses, we optimize your Shopping campaigns to appear at the top for local product searches, driving immediate purchase intent.",
      cta: "See Our Local Search Strategy →"
    },
    {
      title: "Local Service Ads (LSA) Optimization",
      description: "For eligible service businesses (plumbers, electricians, lawyers, etc.), Local Service Ads are the single most powerful tool in Google. We optimize your LSA profile to ensure you appear at the very top of Google for immediate-need searches, manage your budget and leads to maximize the \"Google Guaranteed\" badge's impact, and drive high-quality, verified phone calls directly to your business. Our LSA management is designed to make your phone ring with ready-to-buy local customers.",
      cta: "Master Local Service Ads with Us →"
    },
    {
      title: "Full-Funnel Remarketing for Local Customers",
      description: "Most PPC agencies focus solely on new clicks, ignoring the 95% of people who visit your website but don't convert immediately. Our remarketing strategy recaptures this lost traffic by displaying your ads on the Google Display Network, YouTube, and across the web to people who have already shown interest in your business. We create custom, persuasive ad creatives that re-engage potential customers and bring them back to your site to complete a purchase or inquiry, maximizing the value of every visitor.",
      cta: "Get Your Remarketing Plan →"
    }
  ];

  const differentiators = [
    {
      title: "No Lock-In Contracts, Zero Conflict of Interest",
      description: "We believe in earning your business every month, not trapping you in a long-term agreement. Our month-to-month model means that if we don't deliver superior local ROAS and radical transparency, you are free to walk away. This eliminates the fundamental conflict of interest that plagues the industry and ensures that our only motivation is your profitability."
    },
    {
      title: "Senior-Level Expertise, Local Focus",
      description: "Your account isn't managed by a junior \"account coordinator\" following a script. Every Ballarat client is assigned a senior Google Ads Specialist who has years of experience optimizing campaigns for local businesses. They understand the nuances of local search, the importance of geo-targeting, and how to maximize ROI in competitive regional markets."
    },
    {
      title: "Radical Transparency Through 24/7 Live Dashboards",
      description: "You don't have to wait for a monthly report to see how your ad budget is being spent. We provide you with 24/7 access to a live dashboard that shows your key performance metrics—Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), conversion value, and more—in real-time. You know exactly where every dollar is going and what results you're getting, at all times."
    },
    {
      title: "Performance-Based Fee Structure (Optional)",
      description: "Unlike agencies that profit from increasing your ad spend, we offer a transparent, flat-fee or performance-based model. This means our fees are tied to your success, not your budget, creating a direct incentive for us to improve your ROAS, not just spend more on ads. This is the ultimate alignment of interests."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Deep Local Market Audit",
      description: "We start with a comprehensive audit of your current PPC performance (if applicable), your local competitors' strategies, and the specific search behavior of your target customers in Ballarat. We identify the hidden opportunities and budget leaks that are costing you money."
    },
    {
      number: "02",
      title: "Custom Local Strategy Development",
      description: "Based on the audit, we create a bespoke Google Ads strategy tailored to your business, your budget, and your local market. This includes precise keyword targeting, optimized geo-fencing, custom ad copy that speaks to Ballarat customers, and a clear roadmap to achieve your revenue goals."
    },
    {
      number: "03",
      title: "Launch, Optimize, and Scale",
      description: "We launch your campaigns with best-in-class setup, then enter a rigorous optimization cycle. We constantly A/B test ad copy, adjust bids based on real-time auction data, refine negative keyword lists, and allocate budget to the highest-performing campaigns. Our goal is to find the winning formula and then scale it aggressively."
    },
    {
      number: "04",
      title: "Transparent Reporting and Strategic Meetings",
      description: "You receive regular, data-rich reports that focus on what matters: local CPA, ROAS, conversion value, and revenue generated. Your senior strategist also holds scheduled strategy meetings to review performance, discuss next steps, and collaboratively plan for growth. You are always in the loop and always in control."
    }
  ];

  const whyChoose = [
    {
      title: "We Eliminate the \"Metro Bias\" and Focus on Your Local ROI",
      description: "Large agencies in Melbourne or Sydney don't truly understand the Ballarat market. We are performance-obsessed, not geography-obsessed. Our strategies are laser-focused on maximizing your return on ad spend in your specific catchment area, ensuring that every click comes from a potential customer who can actually buy from you."
    },
    {
      title: "We Guarantee Accountability, Not Just Activity",
      description: "Many agencies are happy to show you \"impressions\" or \"clicks,\" metrics that look good but don't pay the bills. We are accountable for what matters: profitable conversions. Our no lock-in contract policy is the ultimate guarantee that we are focused on your financial outcomes, not just billing you every month."
    },
    {
      title: "We Provide Senior Expertise at a Local-Friendly Price",
      description: "You don't need to pay inflated Melbourne or Sydney agency rates to access senior-level PPC expertise. Our fee structure is designed to be fair and transparent, ensuring that the management fee is a profitable investment that generates a positive ROI on its own, not just another cost center."
    },
    {
      title: "We Use Cutting-Edge AI, Guided by Human Intelligence",
      description: "We leverage the latest AI tools and automation available in Google Ads to analyze auction data, predict optimal bids, and identify trends. However, the final strategic decisions are always made by a senior human expert who understands your business and your local market. This is the perfect blend of technology and experience."
    }
  ];

  const faqs = [
    {
      question: "What makes Odin Digital the best Google Ads Agency for Ballarat businesses?",
      answer: "We eliminate the conflict of interest and the \"metro bias.\" We are a performance-focused Google Ads Agency Ballarat with a no lock-in contract policy, meaning we are 100% accountable for delivering results every month. Our senior-level strategists focus exclusively on local ROAS (Return on Ad Spend) and CPA (Cost Per Acquisition), ensuring your ad budget is an investment that generates massive, measurable profit for your local business, not just a monthly expense."
    },
    {
      question: "How do you ensure my ads are only shown to people in Ballarat?",
      answer: "We use meticulous geo-targeting and geo-fencing techniques to ensure your ads are only shown within the core Ballarat catchment area (including key suburbs like Wendouree, Alfredton, and Sebastopol). Crucially, we use exhaustive negative keyword lists to block traffic from surrounding regional areas or major cities that would waste your budget, ensuring every click is from a potential local customer."
    },
    {
      question: "How much do your PPC Management Services cost for a local business?",
      answer: "Our fee structure is designed to align with your profitability, not your ad spend, eliminating the conflict of interest. We offer a transparent, flat-fee or performance-based model tailored to your specific local goals and budget. We guarantee a structure that incentivizes us to improve your local ROAS, not just increase your spend, making the management fee a profitable investment."
    },
    {
      question: "Why should I hire a professional PPC Agency instead of doing it myself?",
      answer: "Google Ads is a complex, constantly evolving platform. Without senior expertise, most businesses waste significant budget on irrelevant clicks due to poor keyword targeting, inadequate negative keyword lists, and flawed bidding strategies. A professional PPC Agency Ballarat like Odin Digital has the experience and tools to achieve a lower CPA and higher ROAS than you can typically achieve in-house, making the management fee a profitable investment."
    },
    {
      question: "What kind of results can a Ballarat business expect from Google Ads?",
      answer: "The results depend on your industry and budget, but our focus is always on tangible local outcomes: increased phone calls, more form submissions, and higher in-store foot traffic. Our clients see an average of 540% ROI on their ad spend, meaning for every dollar spent, they generate a significant profit. Our goal is to make your Google Ads campaign your most reliable source of new business."
    },
    {
      question: "Do you manage Google's Local Service Ads (LSA)?",
      answer: "Yes, for eligible local service businesses, we optimize your Local Service Ads (LSA) to ensure you appear at the very top of Google for high-value, immediate-need searches. We manage your budget, reviews, and profile to maximize your \"Google Guaranteed\" visibility and drive high-quality, verified leads directly to your phone."
    },
    {
      question: "How often will I receive reports on my Google Ads performance?",
      answer: "We believe in radical transparency. You will receive a 24/7 live dashboard that provides real-time access to your campaign performance, focusing on key local financial metrics like CPA, ROAS, and conversion value. Additionally, your senior Google Ads Specialist will hold regular, scheduled strategy meetings to review the data and collaboratively plan the next steps."
    },
    {
      question: "How do you handle the transition from an old PPC Agency?",
      answer: "We make the transition seamless and painless. We start with a full account audit to identify any hidden issues or budget bleed. We then secure full ownership of your account for you, clean up the campaign structure, and implement our proven local strategy. Our goal is to stabilize performance immediately and then begin scaling your profitable campaigns quickly."
    },
    {
      question: "Why is a no lock-in contract policy important for a local business?",
      answer: "A no lock-in contract policy is the ultimate guarantee of accountability. If an Adwords Agency Ballarat is confident in their performance, they don't need a contract to trap you. Our month-to-month agreement ensures that we are constantly earning your business by delivering superior local ROAS and transparency. It shifts the risk from you to us, where it belongs."
    },
    {
      question: "Do you help with local keyword research specific to Ballarat?",
      answer: "Yes, our local keyword research goes beyond generic terms. We identify the specific long-tail keywords that high-intent customers in Ballarat and its surrounding suburbs are using to find your services, ensuring your ads capture the most valuable local traffic."
    },
    {
      question: "What is the difference between Google Ads and Adwords?",
      answer: "Google Adwords was the original name for Google's advertising platform. In 2018, Google rebranded the platform to Google Ads. The core function remains the same: advertising on Google Search, Display Network, YouTube, and more. When you search for an Adwords Agency or Adwords Management, you are looking for a partner who manages the current Google Ads platform. We are experts in both the legacy and modern features of the platform."
    },
    {
      question: "Do you only work with large businesses?",
      answer: "No, we work with businesses of all sizes in Ballarat. Our fee structure and strategy are customized to your budget. Our no lock-in contract policy is particularly beneficial for small businesses who need flexibility and guaranteed accountability from their PPC Company Ballarat."
    },
    {
      question: "How do you use AI in your local PPC strategy?",
      answer: "We use cutting-edge AI tools to analyze massive amounts of auction data, predict the optimal time and bid for local keywords, and automate routine tasks. However, a senior Adwords Expert makes the final strategic decision, ensuring your campaigns are always guided by human intelligence and local market knowledge, not blind automation."
    },
    {
      question: "Can you help with my Google My Business (Google Business Profile)?",
      answer: "Yes, optimizing your Google Business Profile is a critical part of our local PPC strategy. We ensure your profile is fully optimized, your service areas are correctly defined, and your reviews are managed, maximizing your visibility in local map packs and Local Service Ads."
    },
    {
      question: "How quickly can you launch a new Google Ads campaign for my Ballarat business?",
      answer: "Once the strategy is approved and we have access to your accounts, we can typically launch a new, fully optimized Google Ads campaign within 7-10 business days. This includes the time needed for deep local keyword research, ad copy creation, conversion tracking setup for phone calls, and the initial quality assurance checks."
    }
  ];

  const testimonials = [
    {
      name: "Sarah K.",
      company: "Ballarat Trade Services",
      text: "We were hesitant about PPC after a bad experience with a Melbourne agency. Odin Digital's local focus for our Ballarat business changed everything. Their Adwords Management strategies delivered a 30% increase in local phone calls within the first two months, and the transparency is unmatched. Highly recommend to any Ballarat business."
    },
    {
      name: "Mark D.",
      company: "Local Ballarat Attraction",
      text: "Our tourism business relies heavily on local search. Odin Digital's Google Ads Management team truly understood our seasonal needs and targeted the right visitors at the right time. We achieved a 5x ROI during our peak season, and the fact that there are no lock-in contracts gives us complete peace of mind."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Google Ads Agency Ballarat: No Lock-In Contracts | Odin Digital</title>
        <meta name="description" content="Local Google Ads Management for Ballarat businesses. Stop wasting budget on generic strategies. Get a FREE local audit and 540% average ROI." />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
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
                  "width": 250,
                  "height": 60
                },
                "description": "Performance-focused digital marketing agency specializing in PPC, Meta Ads, Web Design, and SEO with no lock-in contracts.",
                "founder": {
                  "@type": "Person",
                  "name": "Lucas Durante"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5",
                  "reviewCount": "5"
                }
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://odindigital.com.au/google-ads-ballarat/#localbusiness",
                "name": "Odin Digital - Google Ads Agency Ballarat",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Ballarat",
                  "addressRegion": "VIC",
                  "addressCountry": "AU"
                },
                "telephone": "03 9498 3170",
                "priceRange": "$$$",
                "servesArea": {
                  "@type": "City",
                  "name": "Ballarat"
                }
              },
              {
                "@type": "Service",
                "@id": "https://odindigital.com.au/google-ads-ballarat/#service",
                "serviceType": "Google Ads Management Ballarat",
                "provider": {
                  "@id": "https://odindigital.com.au/#organization"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Ballarat"
                },
                "description": "Professional Google Ads Management services focused on maximizing local Return on Ad Spend (ROAS) and minimizing Cost Per Acquisition (CPA) for Ballarat businesses with full transparency and no lock-in contracts.",
                "offers": {
                  "@type": "Offer",
                  "url": "https://odindigital.com.au/contact/"
                }
              },
              {
                "@type": "Review",
                "@id": "https://odindigital.com.au/google-ads-ballarat/#review1",
                "itemReviewed": {
                  "@id": "https://odindigital.com.au/#localbusiness"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Sarah K."
                },
                "reviewBody": "We were hesitant about PPC after a bad experience with a Melbourne agency. Odin Digital's local focus for our Ballarat business changed everything. Their Adwords Management strategies delivered a 30% increase in local phone calls within the first two months, and the transparency is unmatched. Highly recommend to any Ballarat business.",
                "publisher": {
                  "@type": "Organization",
                  "name": "Ballarat Trade Services"
                }
              },
              {
                "@type": "Review",
                "@id": "https://odindigital.com.au/google-ads-ballarat/#review2",
                "itemReviewed": {
                  "@id": "https://odindigital.com.au/#localbusiness"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Mark D."
                },
                "reviewBody": "Our tourism business relies heavily on local search. Odin Digital's Google Ads Management team truly understood our seasonal needs and targeted the right visitors at the right time. We achieved a 5x ROI during our peak season, and the fact that there are no lock-in contracts gives us complete peace of mind.",
                "publisher": {
                  "@type": "Organization",
                  "name": "Local Ballarat Attraction"
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
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section data-nav-contrast="dark" className="pt-32 pb-20 px-6 bg-gradient-hero">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
                Ballarat's Premier Google Ads Agency
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Google Ads Agency Ballarat: Stop Paying Melbourne Prices for Generic Results.
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-8">
                The Local PPC Partner That Guarantees ROI for Ballarat Businesses.
              </h2>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Are you tired of watching your Google Ads budget disappear with little to show for it? Frustrated by agencies that lock you into long contracts, charge exorbitant fees, and deliver vague reports filled with vanity metrics instead of actual revenue? You're not alone, and more importantly, <strong>this is not your fault</strong>.
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                The truth is, most <strong>PPC management companies</strong> operate on a fundamentally flawed model: they profit from <em>increasing</em> your ad spend, not from improving your <strong>Return on Ad Spend (ROAS)</strong>. They make more money when you spend more on Google Ads, creating a direct conflict of interest. Worse, they use generic, templated strategies that ignore the unique needs of your <strong>Ballarat</strong> business and the specific behavior of your local customers. This is the "metro markup" problem, and it's costing you thousands of dollars every single month in wasted ad budget and lost opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="cta" 
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-8"
                  onClick={() => navigate('/contact')}
                >
                  Get Your FREE Local Google Ads Strategy Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-20 px-6 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Your Current PPC Strategy is Failing Your Ballarat Business
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              The Google Ads model is broken for local businesses. Here's exactly why.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all">
                  <problem.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 bg-muted">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Ballarat Businesses Say About Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8">
                  <div className="flex items-start mb-4">
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <CheckCircle2 key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Ballarat-Focused Google Ads Services
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              We don't do generic. Every strategy is built specifically for your Ballarat business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 flex flex-col">
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate('/contact')}
                  >
                    {service.cta}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-20 px-6 bg-accent text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Odin Digital is the Only Google Ads Partner Your Ballarat Business Needs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Proven 4-Step Process for Maximum ROI on Google Ads
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Transparent, results-driven, and built for Ballarat businesses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="p-8">
                  <div className="text-5xl font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-6 bg-muted">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Odin Digital is the Smartest Investment for Your Local Ballarat Business
            </h2>
            <div className="space-y-8">
              {whyChoose.map((item, index) => (
                <Card key={index} className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-6 bg-gradient-hero">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Stop Losing Money and Start Generating Massive ROI from Google Ads?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              You don't need another "free consultation" that's really just a sales pitch. You need a real, actionable Google Ads Strategy Audit that identifies exactly where your budget is being wasted and lays out a concrete plan to fix it. This is our commitment: a no-obligation, no-pressure audit that provides genuine value, whether you decide to work with us or not. If you're ready to stop paying the "metro markup," eliminate budget bleed, and finally get the local ROAS you deserve, book your free audit today. Your Ballarat business deserves a PPC partner that's as invested in your success as you are.
            </p>
            <Button 
              variant="cta" 
              size="lg"
              className="text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-8"
              onClick={() => navigate('/contact')}
            >
              Get Your FREE Local Google Ads Strategy Audit <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Everything you need to know about our Google Ads services for Ballarat businesses.
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <Footer />
        <SideTab />
        <MarketingFormModal />

        {/* Sticky Mobile CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border shadow-lg z-40">
          <Button 
            variant="cta" 
            size="lg"
            className="w-full text-sm px-4 py-6"
            onClick={() => navigate('/contact')}
          >
            Get FREE Strategy Audit <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default GoogleAdsBallarat;