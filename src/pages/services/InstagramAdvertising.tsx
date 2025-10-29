import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, TrendingUp, Users, Zap, Camera, Video, ShoppingBag, Award, Target, BarChart3, Sparkles } from "lucide-react";

const InstagramAdvertising = () => {
  const { openForm } = useMarketingForm();

  const stats = [
    { number: "$574M+", label: "Verified Client Revenue" },
    { number: "540%", label: "Average ROI on Ad Spend" },
    { number: "95%", label: "Client Retention Rate (No Lock-In Contracts)" },
    { number: "283+", label: "Successful Campaigns Delivered" },
  ];

  const problems = [
    {
      title: "Ads Not Delivering or Approved",
      description: "Your ads are stuck in review, getting rejected for unclear reasons, or simply not delivering to your target audience. You're losing valuable time and momentum while trying to navigate Meta's complex and ever-changing ad policies. It feels like you're fighting the algorithm instead of using it to your advantage.",
    },
    {
      title: "High Costs, Low Engagement",
      description: "Instagram ad clicks are expensive, and your budget is disappearing with little to show for it. You're getting a few likes and comments, but no one is clicking through to your website, and your sales are flat. You're starting to wonder if Instagram ads are even worth the investment for your business.",
    },
    {
      title: "Boosting Posts Isn't a Strategy",
      description: "You're hitting the \"Boost Post\" button and hoping for the best, but you're not seeing any real results. You know there's a more sophisticated way to run Instagram ads, but you don't have the time or expertise to learn the complexities of Meta Ads Manager. You need a professional team to build a real strategy that drives real growth.",
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

  const services = [
    {
      icon: <Video className="w-12 h-12 text-primary" />,
      title: "Instagram Reels & Video Ads",
      description: "Video is the most powerful format on Instagram. We create engaging, scroll-stopping Reels and video ads that capture attention, tell your brand story, and drive action. From concept to production, we handle everything to ensure your video content delivers maximum impact.",
      cta: "Get Your FREE Instagram Video Ads Strategy →",
    },
    {
      icon: <Camera className="w-12 h-12 text-primary" />,
      title: "Instagram Story Ads",
      description: "With over 500 million daily active users, Instagram Stories are a prime location for advertising. We create immersive, full-screen Story ads that feel native to the platform, driving high engagement and click-through rates.",
      cta: "Get Your FREE Instagram Story Ads Strategy →",
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-primary" />,
      title: "Instagram Shopping & Carousel Ads",
      description: "For e-commerce brands, Instagram Shopping and Carousel ads are essential. We create visually stunning product showcases that allow users to browse and buy directly from the app, creating a seamless path to purchase and boosting your sales.",
      cta: "Get Your FREE Instagram Shopping Ads Strategy →",
    },
  ];

  const differentiators = [
    {
      icon: <Sparkles className="w-10 h-10 text-primary" />,
      title: "Full-Service Creative Agency",
      description: "Instagram is a visual platform. We have an in-house team of expert designers, copywriters, and videographers who create high-converting, scroll-stopping ad creative that is on-brand and designed to drive action.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
      title: "540% Average ROI",
      description: "We don't aim for incremental gains. Our strategies are built on a foundation of data-driven performance that delivers a 540% average ROI on ad spend. We turn your Instagram ad budget into a predictable profit centre.",
    },
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      title: "Expert Meta Ads Management",
      description: "We are experts in the Meta Ads platform. We go beyond simple boosting to create sophisticated, multi-funnel campaigns that guide customers from awareness to conversion. We handle all technical aspects, so you don't have to.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-primary" />,
      title: "Radical Transparency",
      description: "We provide clear, concise reports that focus on the metrics that matter: leads, sales, and revenue. You'll always know exactly how your investment is performing and what we're doing to drive profitable growth.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Deep Dive & Strategy",
      description: "We start by getting to know your business, your goals, and your ideal customer. We conduct in-depth audience research, competitor analysis, and creative brainstorming to develop a custom Instagram advertising strategy tailored to your unique needs.",
    },
    {
      number: "2",
      title: "Campaign Build & Creative Development",
      description: "We build your ad campaigns from the ground up, focusing on a flawless structure, hyper-relevant targeting, and high-converting creative (ad copy, images, videos). We handle all aspects of creative production, from concept to execution.",
    },
    {
      number: "3",
      title: "Conversion Rate Optimization (CRO)",
      description: "A great ad is useless without a great landing page or offer. We work with you to ensure your landing pages are optimized for conversion, reducing wasted ad spend and maximizing the return on every click.",
    },
    {
      number: "4",
      title: "Analyze, Report & Refine",
      description: "We continuously monitor your campaign performance, providing you with transparent reports on the metrics that matter: leads, sales, and ROI. We use this data to refine our strategy and ensure we're always driving maximum profitability.",
    },
  ];

  const whyChooseUs = [
    {
      title: "We're Revenue-Focused",
      description: "Likes and shares are great, but revenue is better. Our entire approach is built around driving measurable financial results for your business. We're not satisfied until you see a significant return on your investment.",
    },
    {
      title: "We're Experts in Creative",
      description: "In a saturated social media landscape, creative is king. We have a team of expert copywriters, designers, and videographers who create high-converting ad creative that stops the scroll and drives action.",
    },
    {
      title: "We Leverage Cutting-Edge Technology",
      description: "We use the latest AI-powered tools and technologies to gain a competitive edge in campaign management. By combining the power of artificial intelligence for bidding and optimization with our proven social media strategies, we can deliver faster, more effective results and ensure your budget is spent efficiently.",
    },
    {
      title: "We Have the Results to Prove It",
      description: "With over $574M in verified client revenue and a 95% retention rate, our track record speaks for itself. We've helped hundreds of businesses like yours achieve their growth goals, and we can do the same for you.",
    },
  ];

  const faqs = [
    {
      question: "How much does Instagram advertising cost in Australia?",
      answer: "Instagram advertising costs in Australia can range from $2,000 to $15,000+ per month for agency management, plus your ad spend. The average cost per click (CPC) on Instagram is often higher than on Facebook, typically between $14 and $22 AUD. At Odin Digital, we provide a transparent, flat-fee structure after a free audit. We focus on ensuring our fee is an investment that generates a significant, predictable return, rather than just another business expense.",
    },
    {
      question: "What is a good ROI for Instagram advertising?",
      answer: "While the industry benchmark for Meta Ads ROI is around 122%, we believe a good ROI for Instagram advertising should be much higher. At Odin Digital, our clients achieve an average ROI of 540% (a 5.4:1 ratio) on their ad spend. We achieve this by focusing on high-intent audiences, compelling creative, and relentless conversion rate optimization.",
    },
    {
      question: "Why are my Instagram ads not working?",
      answer: "There are usually three reasons why your Instagram ads are failing: Poor Targeting, Weak Creative, or a Bad Offer/Landing Page. Instagram is a highly visual platform, so weak creative is often the biggest culprit. Our free audit will pinpoint the exact reason your ads are underperforming and show you how to fix it.",
    },
    {
      question: "What's the difference between boosting an Instagram post and running a campaign in Ads Manager?",
      answer: "Boosting a post is a simplified form of advertising with limited targeting and optimization options. Running a campaign in Meta Ads Manager gives you access to advanced targeting, creative formats, and bidding strategies. Boosting is fine for engagement, but for serious lead generation and sales, you need professional campaigns built in Ads Manager. We specialize in building and managing these high-performance campaigns.",
    },
    {
      question: "Can you help small businesses with Instagram advertising?",
      answer: "Absolutely. We specialize in helping small businesses achieve significant growth through Instagram advertising. We understand that small businesses need to be extremely efficient with their budget. Our strategies focus on hyper-local targeting, lookalike audiences, and low-cost, high-intent campaign objectives to ensure your budget is spent only on the most qualified, ready-to-buy customers.",
    },
    {
      question: "Instagram Ads vs. Facebook Ads: Which is better?",
      answer: "It depends on your business. Instagram is highly visual and ideal for e-commerce, fashion, beauty, and food brands. Facebook has a broader demographic and is powerful for lead generation and community building. Often, the best strategy involves a combination of both. We can help you determine the right mix for your business to maximize your overall marketing ROI.",
    },
    {
      question: "Do you also create the ad content (images, videos)?",
      answer: "Yes, we are a full-service social media creative agency. We handle everything from strategy and targeting to creative development and production. Our team of expert copywriters, designers, and videographers will create high-converting ad creative that is on-brand and designed to stop the scroll and drive action. On Instagram, high-quality creative is non-negotiable.",
    },
    {
      question: "What kind of transparency can I expect?",
      answer: "We offer radical transparency. You will have direct access to your ad accounts, and our monthly reports focus exclusively on the metrics that matter to your business: leads, sales, cost per acquisition (CPA), and return on ad spend (ROAS). We never hide behind vanity metrics like likes, shares, and impressions. Our 95% client retention rate is a direct result of this commitment to honesty and clear, performance-focused communication.",
    },
    {
      question: "Do you offer a free audit of my existing Instagram ad accounts?",
      answer: "Yes, we offer a FREE, no-obligation Instagram advertising audit. If you're currently running ads, we will dive deep into your account structure, audience targeting, ad creative, and landing pages. We will identify immediate areas of wasted spend and show you exactly where the biggest opportunities for profit are. This audit is performed by a senior Instagram strategist and will provide you with actionable insights, regardless of whether you decide to partner with us.",
    },
    {
      question: "What platforms do you specialize in?",
      answer: "We are experts in Meta Ads (Facebook and Instagram), which is where we see the best results for most of our clients. However, we also have extensive experience with LinkedIn Advertising for B2B lead generation, as well as TikTok and Pinterest Advertising for e-commerce and consumer brands. We will recommend the best platforms for your business based on your specific goals and target audience.",
    },
    {
      question: "How do you track the success of Instagram campaigns?",
      answer: "We track success using a combination of the Meta Pixel, Google Analytics, and our own proprietary reporting dashboards. We focus on tracking the entire customer journey, from the initial ad click to the final conversion. This allows us to accurately attribute leads and sales to our campaigns and make data-driven decisions to optimize performance. We provide you with a clear, easy-to-understand report that shows you exactly how your investment is performing.",
    },
    {
      question: "What are the best ad formats for Instagram?",
      answer: "The best ad formats for Instagram are Reels, Stories, and Shopping ads. Reels and Stories are highly engaging and feel native to the platform, while Shopping ads provide a seamless path to purchase for e-commerce brands. We specialize in creating high-performing ads in all of these formats.",
    },
    {
      question: "How long does it take to see results from Instagram ads?",
      answer: "You can start seeing initial results (impressions, clicks) within days of launching a campaign. However, achieving optimal, highly profitable results typically takes 2 to 3 months. This time is crucial for gathering data, refining your audience targeting, A/B testing creative, and optimizing your sales funnel.",
    },
    {
      question: "What are the biggest mistakes businesses make with Instagram ads?",
      answer: "The biggest mistakes are: 1) Not having a clear offer; 2) Poor audience targeting; 3) Weak or generic creative; 4) Sending traffic to a non-optimized landing page; and 5) Not tracking conversions properly. We fix all of these issues by implementing a professional, data-driven approach that is focused on maximizing your ROI.",
    },
    {
      question: "Can you help me set up my first Instagram ad campaign?",
      answer: "Yes, we can handle the entire setup process for your first Instagram ad campaign. We start with a full strategy session, conduct in-depth audience research, build a flawless campaign structure, create high-converting ad creative, and ensure all tracking is correctly implemented. We will launch your campaign with a strong foundation, avoiding the common pitfalls that plague new accounts, and immediately begin the optimization process to drive profitable leads and sales to your business.",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://odindigital.com.au",
    "logo": "https://odindigital.com.au/logo.png",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61-1300-123-456",
      "contactType": "sales"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Instagram Advertising Services",
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital"
    },
    "areaServed": {
      "@type": "Country",
      "name": "AU"
    },
    "description": "Professional Instagram advertising services designed to maximise your return on ad spend (ROAS). We specialise in high-converting creative and data-driven campaigns with no lock-in contracts.",
    "name": "Instagram Ads Agency"
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

  return (
    <>
      <Helmet>
        <title>Instagram Ads Agency | Instagram Advertising Services | Odin Digital</title>
        <meta name="description" content="Australia's leading Instagram ads agency. We deliver a 540% average ROI by turning your Instagram ad spend into profit. Get your free Instagram strategy audit." />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
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
              <h1 className="text-[8vw] sm:text-4xl md:text-6xl xl:text-7xl font-black text-gray-900 leading-tight tracking-tight break-words px-2">
                Instagram Ads Agency
              </h1>
              
              <p className="text-[4.5vw] sm:text-2xl md:text-4xl font-bold text-gray-800 leading-tight tracking-tight break-words max-w-4xl mx-auto hero-sub-headline px-2">
                Your Instagram Ads Should Drive Sales, Not Just Likes.
              </p>

              <div className="prose prose-lg mx-auto text-gray-700 max-w-3xl break-words px-2">
                <p className="text-sm sm:text-base md:text-xl leading-relaxed break-words mb-4">
                  Are you boosting posts and getting nothing but vanity metrics? It's time for a professional Instagram ads agency that turns your visual content into a high-performance revenue stream. We deliver a 540% average ROI by focusing on what matters: sales and leads.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words">
                  Instagram is the most powerful visual marketing platform on the planet, but it's also one of the most competitive. Simply boosting a post isn't a strategy—it's a waste of money. To succeed, you need scroll-stopping creative, sophisticated targeting, and a deep understanding of the Meta Ads platform. At Odin Digital, we're not just social media managers; we're a full-service creative and performance agency. We build data-driven Instagram advertising campaigns that deliver predictable, profitable growth. Ready to unlock the true potential of your Instagram presence?
                </p>
              </div>

              <div className="pt-2 px-2">
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="w-full sm:w-auto text-sm sm:text-base whitespace-normal break-words min-h-[48px]"
                >
                  Get Your FREE Instagram Ads Strategy Audit →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">The Proof Is in the Performance</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're not just making promises; we're delivering verified results. Here's a snapshot of what our clients have achieved.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center shadow-card hover:shadow-primary transition-all duration-300">
                  <CardContent className="pt-8 pb-6">
                    <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.number}</div>
                    <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 md:py-20 decorative-circles">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Does This Sound Familiar? Your Instagram Ads Aren't Delivering.</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                You're investing time and money into Instagram, but you're not seeing the results you need. It's a common and frustrating problem.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{problem.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what business owners are saying about working with Odin Digital.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-card flex flex-col">
                  <CardContent className="pt-6 flex-1 flex flex-col">
                    <div className="mb-4 text-primary">
                      <Award className="w-10 h-10" />
                    </div>
                    <p className="text-base italic mb-4 leading-relaxed flex-1">"{testimonial.quote}"</p>
                    <div className="mt-auto">
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20 decorative-circles-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Instagram Advertising Services Built for E-commerce & Lead Generation</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer a complete suite of Instagram advertising services designed to turn your visual content into a high-performance sales machine.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = '/contact'}
                    >
                      {service.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">The Odin Digital Difference: Why We're the Best Instagram Ads Agency</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Why choose us as your Instagram advertising agency? Because we combine creative excellence with data-driven performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentiators.map((item, index) => (
                <Card key={index} className="shadow-card text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-20 decorative-circles">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Proven 4-Step Instagram Advertising Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We follow a simple, effective process to deliver consistent, measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="pt-8 pb-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary text-white flex items-center justify-center text-xl font-bold">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Odin Digital as Your Instagram Advertising Partner?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                You have a lot of choices when it comes to Instagram ad agencies. Here's why we're the right choice for your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                      <span>{item.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-white text-center decorative-circles">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Ready to Turn Your Instagram into a Profit Machine?</h2>
            <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed max-w-3xl mx-auto">
              Stop wasting money on ineffective Instagram ads and start investing in a strategy that delivers real, measurable ROI. Let us show you what's possible.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              Take the first step towards unlocking your business's true growth potential. Schedule your FREE, no-obligation Instagram advertising strategy audit with one of our senior strategists today. We'll analyze your current accounts, identify your biggest opportunities, and show you exactly how we can help you achieve a 540% average ROI. What do you have to lose?
            </p>
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => window.location.href = '/contact'}
              className="shadow-glow"
            >
              Get Your FREE Instagram Ads Strategy Audit →
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions About Instagram Advertising</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 shadow-sm">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
            Get FREE Strategy Audit →
          </Button>
        </div>
      </div>
    </>
  );
};

export default InstagramAdvertising;
