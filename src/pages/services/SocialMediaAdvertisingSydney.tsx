import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, TrendingUp, Users, Target, BarChart3, Sparkles, Award, Zap, Instagram } from "lucide-react";

const SocialMediaAdvertisingSydney = () => {
  const { openForm } = useMarketingForm();

  const stats = [
    { number: "540%", label: "Average ROI" },
    { number: "95%", label: "Client Retention" },
    { number: "$574M+", label: "Revenue Generated" },
    { number: "No Lock-In", label: "Contracts" },
  ];

  const problems = [
    {
      title: "Low-Quality Leads",
      description: "You're getting clicks, but they're not converting into paying customers. Your ad budget is disappearing into a black hole of unqualified traffic.",
    },
    {
      title: "Lack of Transparency",
      description: "Your current agency sends you jargon-filled reports with no clear connection to your bottom line. You have no idea what's actually working.",
    },
    {
      title: "Generic Strategies",
      description: "One-size-fits-all campaigns that ignore your industry's unique challenges and opportunities. No customization, no expertise, no results.",
    },
  ];

  const solutions = [
    {
      icon: <BarChart3 className="w-10 h-10 text-primary" />,
      title: "Transparent, ROI-Focused Reporting",
      description: "Clear reports that show exactly how your ad spend translates into leads, sales, and revenue. No jargon, no hidden metrics.",
    },
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      title: "Industry-Specific Strategies",
      description: "Custom campaigns built for your specific industry, target audience, and business goals. We've worked across dozens of industries and understand what works.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
      title: "Performance-Based Pricing",
      description: "Our fees are transparent and based on results, not a percentage of your ad spend. We succeed when you succeed.",
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Rapid Response",
      description: "We respond within 24-48 hours to all inquiries and proactively communicate when issues or opportunities arise.",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
      title: "Advanced Tracking",
      description: "We implement bulletproof tracking and attribution so you can see exactly which ads are driving your best customers.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-primary" />,
      title: "No Lock-In Contracts",
      description: "Month-to-month agreements. We earn your business every single month through results, not contracts.",
    },
  ];

  const services = [
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Meta Ads Management",
      description: "Full-service Facebook and Instagram advertising management focused on driving qualified leads and measurable ROI.",
    },
    {
      icon: <Instagram className="w-12 h-12 text-primary" />,
      title: "Instagram Advertising",
      description: "Engage your audience with scroll-stopping Instagram ads that drive awareness, engagement, and conversions.",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Lead Generation Campaigns",
      description: "Purpose-built campaigns designed to capture high-quality leads at the lowest possible cost per acquisition.",
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Audience Segmentation",
      description: "Sophisticated targeting strategies that put your ads in front of your ideal customers at the perfect time.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "Creative Development",
      description: "In-house creative team that produces high-converting ad creative and continuously tests new variations.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Conversion Rate Optimization",
      description: "Optimize your entire funnel from ad click to conversion to maximize ROI on every dollar spent.",
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "AI-Powered Optimization",
      description: "Leverage cutting-edge AI and machine learning to optimize bidding, targeting, and creative performance.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery and Strategy",
      description: "We start by understanding your business, goals, target audience, and current challenges. We audit your existing campaigns and develop a custom strategy tailored to your needs.",
    },
    {
      number: "2",
      title: "Campaign Setup and Launch",
      description: "We build your campaigns from the ground up with bulletproof tracking, sophisticated targeting, and high-converting creative. Everything is tested before launch.",
    },
    {
      number: "3",
      title: "Optimization and Scaling",
      description: "We continuously monitor performance, test new variations, and scale what's working. We optimize for conversions, not vanity metrics.",
    },
    {
      number: "4",
      title: "Reporting and Continuous Improvement",
      description: "Monthly reports show exactly how your investment is performing. We provide strategic recommendations and implement continuous improvements.",
    },
  ];

  const testimonials = [
    {
      quote: "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
      author: "Fabienne Costa",
      company: "Founder, YCL Jewels (Gold Coast)",
    },
    {
      quote: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
      author: "Liam C",
      company: "Founder, Krush Organics (Sydney)",
    },
    {
      quote: "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
      author: "Evan Tsaboukos",
      company: "Founder, Imperial Wealth (Melbourne)",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to see results from social media advertising?",
      answer: "You'll typically see initial results within 2–4 weeks. However, the real magic happens after 8–12 weeks when we've gathered enough data to optimise effectively. We focus on sustainable, long-term results, not quick wins.",
    },
    {
      question: "Why aren't my current social media ads converting?",
      answer: "There are usually several reasons: poor audience targeting (reaching the wrong people), weak creative (ads that don't resonate), poor landing page experience (people click but don't convert), or optimising for the wrong metric (clicks instead of conversions). We audit your campaigns and identify the specific issues.",
    },
    {
      question: "What's your management fee?",
      answer: "We charge a transparent fee based on results, not a percentage of your ad spend. This varies depending on your industry and campaign complexity, but typically ranges from $1,500–$5,000 per month plus ad spend. We're happy to discuss your specific situation.",
    },
    {
      question: "Do you have lock-in contracts?",
      answer: "No. We work on a month-to-month basis. You can cancel anytime with no penalties. We're confident in our work, and we want you to stay because you're getting results.",
    },
    {
      question: "Can you manage both Meta and Instagram ads?",
      answer: "Absolutely. Meta owns both platforms, and we manage campaigns across both. In fact, we typically run integrated campaigns that leverage both platforms to maximise reach and results.",
    },
    {
      question: "How do you calculate ROI?",
      answer: "We track every lead and conversion back to the specific ad and campaign that generated it. We calculate your cost per lead, cost per conversion, and total ROI. We integrate with your CRM so we can track leads all the way through your sales funnel.",
    },
    {
      question: "What if my ads aren't working? Can you fix them?",
      answer: "Yes. We continuously test and optimise. If something isn't working, we identify the issue and fix it. We might adjust targeting, creative, landing pages, or bidding strategy. We're committed to improving performance.",
    },
    {
      question: "How often will I hear from you?",
      answer: "You'll get a monthly report and we'll schedule a monthly strategy call. If there are issues or opportunities, we'll reach out proactively. You can also reach out to us anytime with questions—we typically respond within 24–48 hours.",
    },
    {
      question: "What's your experience with my industry?",
      answer: "We've worked with businesses across dozens of industries—e-commerce, B2B, professional services, luxury brands, hospitality, and more. We understand the unique challenges and opportunities in your industry and we'll customise our approach accordingly.",
    },
    {
      question: "Can you help with creative development?",
      answer: "Yes. We have an in-house creative team that develops ads tailored to your brand and target audience. We test multiple creative variations to identify what works best.",
    },
    {
      question: "What if I want to switch agencies?",
      answer: "No problem. We'll provide full access to your accounts and data. We'll help with the transition to make it as smooth as possible. We're confident that once you experience our level of service and results, you won't want to leave.",
    },
    {
      question: "How much should I budget for social media advertising?",
      answer: "It depends on your industry, goals, and target market. We typically recommend starting with $2,000–$5,000 per month to gather enough data to optimise effectively. We can work with any budget and scale up as you see results.",
    },
    {
      question: "What's the difference between your service and running ads myself?",
      answer: "You can definitely run ads yourself. But managing campaigns effectively requires expertise, time, and continuous optimisation. Most businesses find that hiring an expert pays for itself many times over through better results and lower cost per lead.",
    },
    {
      question: "Do you offer services beyond social media advertising?",
      answer: "Yes. We also offer Google Ads management, SEO, and web design. Many of our clients use multiple services to create an integrated digital marketing strategy.",
    },
    {
      question: "How do I get started?",
      answer: "Simple. Book a free consultation with one of our strategists. We'll discuss your goals, audit your current situation, and provide recommendations. No obligation, no pressure.",
    },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Odin Digital",
    "description": "Social media advertising agency in Sydney specialising in Meta Ads, Instagram Ads, and lead generation",
    "url": "https://odindigital.com.au/social-media-advertising-sydney",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    },
    "areaServed": {
      "@type": "City",
      "name": "Sydney"
    },
    "priceRange": "$1500-$5000",
    "serviceType": "Social Media Advertising Management",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "283"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Advertising Management",
    "description": "Professional social media advertising services including Meta Ads, Instagram Ads, and lead generation",
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital",
      "url": "https://odindigital.com.au"
    },
    "areaServed": "Sydney, Australia",
    "serviceType": "Digital Marketing"
  };

  const faqSchema = {
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
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://odindigital.com.au",
    "logo": "https://odindigital.com.au/logo.png",
    "description": "Digital marketing agency in Australia offering PPC, Meta Ads, Web Design, and SEO services",
    "sameAs": [
      "https://www.facebook.com/odindigital",
      "https://www.instagram.com/odindigital",
      "https://www.linkedin.com/company/odindigital"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "283"
    }
  };

  return (
    <>
      <Helmet>
        <title>Social Media Ad Agency Sydney | Odin Digital</title>
        <meta name="description" content="Stop wasting money on low-quality social media ads. Odin Digital is a Sydney social media advertising agency focused on transparent ROI and qualified leads. Book your free consultation." />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-12 md:py-24">
          {/* Floating decorative circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/10 animate-float"></div>
            <div className="absolute bottom-32 left-20 w-24 h-24 md:w-36 md:h-36 rounded-full bg-accent/10 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary-glow/10 animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-16 text-center">
            <div className="space-y-4 md:space-y-8 animate-slide-up break-words">
              <h1 className="text-[8vw] sm:text-4xl md:text-6xl xl:text-7xl font-black text-gray-900 leading-tight tracking-tight break-words px-2 mt-8 md:mt-12">
                Social media ad agency Sydney
              </h1>
              
              <p className="text-[4.5vw] sm:text-2xl md:text-4xl font-bold text-gray-800 leading-tight tracking-tight break-words max-w-4xl mx-auto hero-sub-headline px-2">
                Your social media ads aren't converting because your agency is optimising for clicks, not leads.
              </p>

              <div className="prose prose-lg mx-auto text-gray-700 max-w-3xl break-words px-2">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words">
                  Stop wasting money on low-quality clicks and vanity metrics. At Odin Digital, we're a social media ad agency in Sydney that focuses on one thing: driving qualified leads and measurable ROI. We've helped 283+ businesses across Australia transform their social media advertising from a cost centre into a profit centre.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words">
                  No lock-in contracts. No jargon. Just transparent, performance-driven results.
                </p>
              </div>

              <div className="pt-2 px-2">
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="w-full sm:w-auto text-sm sm:text-base whitespace-normal break-words min-h-[48px]"
                >
                  Book Your Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12 px-2">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 break-words">
                Why Your Social Media Ads Aren't Working
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto break-words">
                These are the most common reasons Sydney businesses see poor results from their social media advertising.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl break-words">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed break-words">
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">The Odin Digital Difference</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Here's how we solve each of these problems for Sydney businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="shadow-card text-center">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">{solution.icon}</div>
                    <h3 className="text-base md:text-lg font-bold mb-2 break-words">{solution.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed break-words">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="w-full sm:w-auto min-h-[48px]"
              >
                Book Your Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12 px-2">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 break-words">
                Our Social Media Advertising Services
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto break-words">
                Comprehensive social media advertising solutions for Sydney businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.slice(0, 6).map((service, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-base md:text-lg break-words">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs md:text-sm leading-relaxed break-words">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 7th service - full width */}
            <div className="mt-6 md:mt-8">
              <Card className="shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div>{services[6].icon}</div>
                    <CardTitle className="text-base md:text-lg break-words">{services[6].title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs md:text-sm leading-relaxed break-words">
                    {services[6].description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Why Sydney Businesses Choose Odin Digital
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center shadow-card">
                  <CardContent className="pt-6">
                    <div className="text-3xl md:text-5xl font-black text-primary mb-2 whitespace-nowrap">{stat.number}</div>
                    <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-card flex flex-col">
                  <CardContent className="pt-6 flex-1 flex flex-col">
                    <div className="mb-4 text-primary">
                      <Award className="w-10 h-10" />
                    </div>
                    <p className="text-sm md:text-base italic mb-4 leading-relaxed flex-1">"{testimonial.quote}"</p>
                    <div className="mt-auto">
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="w-full sm:w-auto min-h-[48px]"
              >
                Book Your Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Four-Step Process</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                A simple, proven process that delivers consistent results for Sydney businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="shadow-card relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <CardHeader className="pt-8">
                    <CardTitle className="text-base md:text-lg break-words">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed break-words">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4 md:px-6">
                  <AccordionTrigger className="text-left text-sm md:text-base font-semibold hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 md:py-24 bg-white text-center border-t">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 break-words">
              Ready to Transform Your Social Media Advertising?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-800 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto break-words">
              Stop wasting money on low-quality clicks. Start driving qualified leads with transparent, performance-driven social media advertising.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed break-words">
              Book a free consultation with one of our strategists. We'll audit your current situation and show you exactly how we can improve your results.
            </p>
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="shadow-glow w-full sm:w-auto min-h-[48px] whitespace-normal break-words text-sm md:text-base px-4 md:px-6"
            >
              Book Your Free Consultation
            </Button>
          </div>
        </section>

        <Footer />
        <div className="hidden md:block">
          <SideTab />
        </div>

        {/* Mobile Sticky CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-3 bg-white border-t shadow-lg z-50">
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => window.location.href = '/contact'}
            className="w-full min-h-[48px] text-sm font-semibold"
          >
            Book Free Consultation →
          </Button>
        </div>
      </div>
    </>
  );
};

export default SocialMediaAdvertisingSydney;
