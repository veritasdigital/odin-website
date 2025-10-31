import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { 
  Mail, 
  Target, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Settings,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Rocket,
  Globe
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EmailMarketingAgency = () => {
  const { openForm } = useMarketingForm();

  const metrics = [
    { number: "4400%", label: "Average ROI from Email Marketing" },
    { number: "38:1", label: "Return for Every Dollar Spent" },
    { number: "99%", label: "Inbox Delivery Rate" },
    { number: "3.5x", label: "Higher Conversions vs. Social Media" }
  ];

  const problems = [
    {
      title: "The Spammy Newsletter Trap",
      description: "You're blasting generic emails to your entire list and wondering why open rates are plummeting and unsubscribes are rising."
    },
    {
      title: "The Automation Abyss",
      description: "You know automation is the answer, but you're drowning in complex platforms, broken workflows, and sequences that never get finished."
    },
    {
      title: "The Siloed Strategy",
      description: "Your email marketing exists in a bubble, disconnected from your SEO and PPC efforts, leaving massive revenue on the table."
    }
  ];

  const services = [
    {
      icon: Target,
      title: "Advanced Segmentation & Personalisation",
      description: "We don't send one-size-fits-all emails. We build dynamic segments based on behaviour, demographics, and purchase history to deliver hyper-relevant messages."
    },
    {
      icon: Zap,
      title: "Full-Funnel Automation & Nurturing",
      description: "From welcome sequences to abandoned cart recovery to post-purchase upsells—we automate every stage of the customer journey."
    },
    {
      icon: Shield,
      title: "Deliverability & Technical Compliance",
      description: "We handle SPF, DKIM, DMARC, list hygiene, and sender reputation management so your emails actually reach the inbox."
    },
    {
      icon: Settings,
      title: "Email-to-Core-Service Integration",
      description: "We integrate your email strategy with SEO and PPC to create a unified, high-ROI marketing engine."
    }
  ];

  const differentiators = [
    {
      icon: Rocket,
      title: "Automation-First Approach",
      description: "We build systems that work while you sleep, nurturing leads and driving conversions 24/7."
    },
    {
      icon: Shield,
      title: "Deliverability is Our Obsession",
      description: "A 99% inbox delivery rate isn't luck—it's the result of technical excellence and best practices."
    },
    {
      icon: BarChart3,
      title: "Performance-Driven Strategy",
      description: "Every campaign is tested, measured, and optimised for maximum ROI."
    },
    {
      icon: Globe,
      title: "Integrated Marketing Ecosystem",
      description: "Email doesn't exist in isolation. We connect it seamlessly with your SEO, PPC, and web design."
    }
  ];

  const process = [
    {
      step: 1,
      title: "Audit & Strategy",
      description: "We audit your current email marketing, identify gaps, and build a custom strategy aligned with your business goals."
    },
    {
      step: 2,
      title: "Technical Setup & Deliverability Foundation",
      description: "We configure all technical requirements (SPF, DKIM, DMARC) and establish a pristine sender reputation."
    },
    {
      step: 3,
      title: "Segmentation & Automation Build",
      description: "We create dynamic segments and build out full-funnel automation sequences tailored to your customer journey."
    },
    {
      step: 4,
      title: "Ongoing Optimisation & Reporting",
      description: "We continuously test, measure, and refine your campaigns to maximise performance and ROI."
    }
  ];

  const whyChooseUs = [
    {
      title: "Proven Track Record",
      description: "We've helped businesses achieve 4400% ROI through strategic email marketing and automation."
    },
    {
      title: "Technical Excellence",
      description: "Our team handles the complex technical setup so you can focus on running your business."
    },
    {
      title: "Integrated Approach",
      description: "We connect email with SEO, PPC, and web design for maximum impact across all channels."
    },
    {
      title: "Transparent Reporting",
      description: "You'll always know exactly how your campaigns are performing with detailed analytics and insights."
    }
  ];

  const relatedServices = [
    { name: "SEO Agency", url: "/seo-agency" },
    { name: "Google Ads Management", url: "/google-ads-management" },
    { name: "Meta Ads Agency", url: "/facebook-advertising" },
    { name: "Web Design Agency", url: "/website-design" }
  ];

  const relatedIndustries = [
    { name: "Cosmetic Surgeons", url: "/industries/cosmetic-surgeons" },
    { name: "Real Estate Agents", url: "/industries/real-estate-agents" },
    { name: "Personal Injury Lawyers", url: "/industries/personal-injury-lawyers" },
    { name: "Cosmetic Clinics", url: "/industries/cosmetic-clinics" }
  ];

  const faqs = [
    {
      question: "What kind of ROI can I expect from email marketing?",
      answer: "Email marketing consistently delivers the highest ROI of any digital channel, with an industry benchmark of around 4400%. Our focus is on maximizing this return through advanced segmentation and automation."
    },
    {
      question: "How do you ensure my emails don't end up in the spam folder?",
      answer: "We are obsessive about deliverability and technical compliance. We handle all the necessary technical setup (SPF, DKIM, DMARC) and maintain strict list hygiene to ensure a pristine sender reputation."
    },
    {
      question: "What is \"full-funnel automation\" and why do I need it?",
      answer: "Full-funnel automation means building sequences for every stage of the customer journey—from a welcome series for new leads to abandoned cart recovery and post-purchase upsells. This ensures every lead is nurtured automatically, maximizing conversions."
    },
    {
      question: "Do you work with businesses outside of Australia?",
      answer: "While we're based in Australia and specialize in the Australian market, we work with businesses globally. Our email marketing strategies are effective regardless of location."
    },
    {
      question: "What email platforms do you work with?",
      answer: "We work with all major email platforms including Klaviyo, Mailchimp, ActiveCampaign, HubSpot, and more. We'll recommend the best platform based on your specific needs and budget."
    },
    {
      question: "How long does it take to see results?",
      answer: "You'll typically see initial results within 30-60 days as we set up your technical foundation and launch your first campaigns. However, email marketing compounds over time—the longer you run it, the better it performs."
    },
    {
      question: "What's the difference between email marketing and email automation?",
      answer: "Email marketing refers to the overall strategy and campaigns, while email automation specifically refers to triggered sequences that run automatically based on user behavior. We focus heavily on automation because it scales your efforts without scaling your workload."
    },
    {
      question: "How do you integrate email with SEO and PPC?",
      answer: "We use email to nurture leads generated from SEO and PPC, create remarketing lists for paid campaigns, and leverage your email data to inform content strategy and keyword targeting."
    },
    {
      question: "What makes your agency different from others?",
      answer: "Our automation-first approach, obsession with deliverability, and integrated marketing strategy set us apart. We don't just send emails—we build revenue-generating systems."
    },
    {
      question: "Do I need a large email list to get started?",
      answer: "No. While a larger list helps, we can help you build and grow your list from scratch. Quality always beats quantity—a small, engaged list will outperform a large, unengaged one."
    },
    {
      question: "How often will you send emails on my behalf?",
      answer: "The frequency depends on your industry, audience, and goals. We'll develop a sending cadence that maximizes engagement without overwhelming your subscribers."
    },
    {
      question: "Will I have input on the email content?",
      answer: "Absolutely. We work collaboratively with you to ensure all messaging aligns with your brand voice and business objectives. You'll have approval over all campaigns before they're sent."
    },
    {
      question: "What metrics do you track and report on?",
      answer: "We track open rates, click-through rates, conversion rates, revenue per email, list growth, unsubscribe rates, and overall ROI. You'll receive regular reports with actionable insights."
    },
    {
      question: "How do you handle list building and growth?",
      answer: "We implement strategic lead magnets, landing pages, and signup forms across your website and marketing channels. We also ensure compliance with all anti-spam laws."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We work across multiple industries including e-commerce, B2B services, healthcare, legal, real estate, and high-ticket service providers. Our strategies are customized for each industry's unique needs."
    },
    {
      question: "What's your pricing structure?",
      answer: "Our pricing is customized based on your list size, complexity, and goals. We offer flexible packages to suit businesses of all sizes. Contact us for a personalized quote."
    }
  ];

  const schemaMarkup = {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Odin Digital",
      "url": "https://growth-conduit-central.lovable.app/",
      "logo": "https://growth-conduit-central.lovable.app/logo.png",
      "description": "Performance-focused digital marketing agency specializing in high-ROI integrated email marketing and automation across Australia.",
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
    },
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Email Marketing and Automation",
      "provider": {
        "@type": "Organization",
        "name": "Odin Digital - Email Marketing Agency"
      },
      "areaServed": "Australia",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Email Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Advanced Segmentation & Personalisation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full-Funnel Automation & Nurturing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Deliverability & Technical Compliance"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Email-to-Core-Service Integration"
            }
          }
        ]
      }
    },
    faq: {
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
    },
    review: {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "Service",
        "name": "Odin Digital - Email Marketing Agency"
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
    }
  };

  return (
    <>
      <Helmet>
        <title>Email Marketing Agency Australia | Automated Funnels & 4400% ROI | Odin Digital</title>
        <meta name="description" content="The leading Email Marketing Agency in Australia. We build high-converting, automated email funnels that integrate with your SEO and PPC for maximum ROI. No spam, just performance." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup.organization)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup.service)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup.faq)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup.review)}
        </script>
      </Helmet>

      <Header />
      
      <div className="min-h-screen pb-32 md:pb-0">
        {/* Section 1: Hero Section */}
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
          {/* Floating Circles Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute top-40 right-20 w-48 h-48 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
            <div className="absolute bottom-20 left-1/3 w-40 h-40 md:w-80 md:h-80 bg-accent/10 rounded-full blur-3xl animate-float" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent pb-2 mt-8 md:mt-0">
                Email Marketing Agency
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground mb-6 md:mb-8 leading-tight px-2">
                Your business needs consistent revenue, not unpredictable sales spikes. Email marketing is the most powerful channel for building customer relationships and driving predictable growth—delivering an average ROI of 4400%. But most businesses are wasting money on generic newsletters that nobody reads. You need strategic, automated email funnels that nurture leads, drive conversions, and maximize customer lifetime value. At Odin Digital, we've helped over 500 businesses across Australia build high-performing email marketing systems that generate consistent revenue and create loyal customers, with our average client achieving a 340% increase in email-driven revenue.
              </p>

              <Button 
                onClick={openForm}
                size="xl"
                variant="cta"
                className="text-sm sm:text-base md:text-lg lg:text-xl whitespace-normal h-auto px-6 sm:px-8 py-3 sm:py-4 leading-tight w-full sm:w-auto"
              >
                Get Your FREE Email Marketing Audit
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Social Proof Metrics */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-4 md:p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {metric.number}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    {metric.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Problem-Agitation */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                If Email Marketing Feels Like Shouting Into the Void, You're Not Alone
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
                Most businesses are making these critical mistakes with their email marketing:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {problems.map((problem, index) => (
                <Card key={index} className="p-4 md:p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-primary">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 text-primary">
                    {problem.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {problem.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Testimonials */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center px-2">
                What Our Clients Say
              </h2>

              <Card className="p-6 md:p-8 lg:p-12 shadow-2xl">
                <div className="flex items-center mb-4 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-base sm:text-lg md:text-xl mb-4 md:mb-6 italic leading-relaxed">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-bold text-base sm:text-lg">Liam C</div>
                    <div className="text-sm sm:text-base text-muted-foreground">Krush Organics</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 5: Services - The 4 Pillars */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
                The 4 Pillars of Our Email Marketing Service
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
                We don't just send emails. We build automated revenue engines that integrate seamlessly with your <a href="/seo-agency" className="text-primary hover:underline">SEO</a> and <a href="/google-ads-management" className="text-primary hover:underline">PPC</a> strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="p-4 md:p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 md:mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Differentiators */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
                Why We're Different
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {differentiators.map((diff, index) => (
                <Card key={index} className="p-4 md:p-6 hover:shadow-xl transition-all duration-300">
                  <diff.icon className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mb-3 md:mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">
                    {diff.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {diff.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Process */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
                Our Process
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
                From strategy to execution, we handle everything to ensure your email marketing delivers maximum ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {process.map((step, index) => (
                <Card key={index} className="p-4 md:p-6 relative hover:shadow-xl transition-all duration-300">
                  <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 mt-2 md:mt-4">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Why Choose Us */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
                Why Choose Odin Digital as Your Email Marketing Agency?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="p-4 md:p-6 hover:shadow-xl transition-all duration-300">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 md:mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {reason.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Final CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-secondary to-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
                Ready to Stop Wasting Money on Email Marketing That Doesn't Work?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 px-2">
                Get a FREE email marketing audit and discover exactly what's holding your campaigns back.
              </p>
              <Button 
                onClick={openForm}
                size="xl"
                className="bg-white text-primary hover:bg-white/90 text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 sm:py-4 h-auto whitespace-normal leading-tight w-full sm:w-auto"
              >
                Schedule Your FREE Audit Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Section 10: Related Services & Industries */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                    Related Services
                  </h2>
                  <div className="space-y-2 md:space-y-3">
                    {relatedServices.map((service, index) => (
                      <a
                        key={index}
                        href={service.url}
                        className="block p-3 md:p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm sm:text-base">{service.name}</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 ml-2" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                    Industries We Serve
                  </h2>
                  <div className="space-y-2 md:space-y-3">
                    {relatedIndustries.map((industry, index) => (
                      <a
                        key={index}
                        href={industry.url}
                        className="block p-3 md:p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm sm:text-base">{industry.name}</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 ml-2" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: FAQ */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center px-2">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Mobile spacer to avoid footer overlap */}
        <div className="h-20 md:hidden" aria-hidden="true" />

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border z-40 md:hidden">
          <Button 
            onClick={openForm}
            size="lg"
            variant="cta"
            className="w-full text-xs sm:text-sm md:text-base whitespace-normal h-auto px-4 py-4 leading-tight"
          >
            Get Your FREE Email Marketing Audit
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EmailMarketingAgency;