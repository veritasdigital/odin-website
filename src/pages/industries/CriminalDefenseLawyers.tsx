import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { 
  Scale, 
  TrendingUp, 
  Shield, 
  Users,
  Search,
  MousePointerClick,
  Share2,
  Palette,
  Target,
  BarChart3,
  Award,
  Clock
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CriminalDefenseLawyers() {
  const { openForm } = useMarketingForm();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://growth-conduit-central.lovable.app",
    "logo": "https://growth-conduit-central.lovable.app/logo.png",
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
    "serviceType": "Digital Marketing for Criminal Defense Lawyers",
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "description": "Specialist digital marketing services for criminal defense lawyers, including SEO, PPC, Meta Ads, and web design.",
    "name": "Digital Marketing for Criminal Defense Lawyers"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does digital marketing cost for a criminal defense law firm?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of digital marketing for a criminal defense law firm can vary depending on your goals, your market, and the services you need. We offer a range of affordable packages, and we provide a detailed, transparent quote after a free consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Is digital marketing worth it for my criminal defense practice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. With the traditional referral pool drying up, digital marketing is the most effective way to attract a consistent flow of high-value cases and grow your practice. By targeting the right keywords and platforms, you can reach potential clients at the exact moment they need you most."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With PPC and Meta Ads, you can start seeing results almost immediately. SEO is a long-term strategy that can take 3-6 months to start generating a consistent flow of leads. We recommend a combination of both for the best results."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between SEO and PPC for criminal defense lawyers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO is the process of optimizing your website to rank organically in the search results, while PPC is a form of paid advertising where you pay to have your ads shown at the top of the search results. Both can be effective, and we can help you determine the right mix for your practice."
        }
      },
      {
        "@type": "Question",
        "name": "What is a good ROI for digital marketing for a criminal defense law firm?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A good ROI for digital marketing for a criminal defense law firm is typically 3x - 5x your investment. However, this can vary depending on your case value, your profit margins, and your customer lifetime value. We focus on maximizing your ROI and providing you with a clear return on your investment."
        }
      },
      {
        "@type": "Question",
        "name": "How do you track the results of your digital marketing campaigns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use a variety of tools to track the results of our digital marketing campaigns, including Google Analytics, Google Ads conversion tracking, and third-party call tracking software. We provide you with regular, detailed reports that show you exactly how your campaigns are performing."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer a free digital marketing consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer a free, no-obligation digital marketing consultation. We will analyze your existing marketing efforts, identify areas for improvement, and provide you with a clear roadmap for success."
        }
      },
      {
        "@type": "Question",
        "name": "What are your digital marketing packages for criminal defense lawyers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a range of affordable digital marketing packages, starting from just $2,000 per month. We will work with you to develop a custom package that meets your specific needs and budget."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get a free quote for your digital marketing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply click the button below to schedule your FREE, no-obligation consultation with one of our senior strategists. We will discuss your project in detail and provide you with a comprehensive quote within 24 hours. There's no pressure and no obligation."
        }
      },
      {
        "@type": "Question",
        "name": "Do you specialize in a particular type of criminal defense?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While we have experience working with a wide range of criminal defense lawyers, we have particular expertise in marketing for DUI/DWI, drug offenses, domestic violence, and white-collar crime."
        }
      },
      {
        "@type": "Question",
        "name": "What is the most effective marketing channel for criminal defense lawyers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For immediate results, Google Ads (PPC) is the most effective marketing channel for criminal defense lawyers. For long-term, sustainable growth, SEO is the most effective channel. We recommend a combination of both for the best results."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer web design services for criminal defense lawyers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer custom web design services for criminal defense lawyers. We will build you a high-converting, professional website that is designed to turn visitors into clients."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer social media marketing for criminal defense lawyers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer strategic Meta Ads (Facebook & Instagram) campaigns for criminal defense lawyers. We can help you build your brand, reach potential clients, and stay top-of-mind with your target audience."
        }
      },
      {
        "@type": "Question",
        "name": "What makes you different from other legal marketing agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are specialists, not generalists. We only work with criminal defense lawyers, which means we have a deep understanding of your practice, your market, and your clients. We are also ROI-focused, transparent, and we don't require long-term contracts."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply click the button below to schedule your FREE, no-obligation consultation with one of our senior strategists. We will discuss your project in detail and provide you with a comprehensive quote within 24 hours. There's no pressure and no obligation."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Digital Marketing for Criminal Defense Lawyers | Odin Digital</title>
        <meta 
          name="description" 
          content="Specialist digital marketing for criminal defense lawyers. We generate high-value cases with ROI-focused SEO, PPC, Meta Ads, and web design. Get your free quote." 
        />
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
        <SideTab />
        
        {/* Section 1: Hero Section */}
        <section data-nav-contrast="dark" className="relative min-h-[90vh] gradient-hero overflow-hidden flex items-center">
          {/* Floating Background Elements - like homepage */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
          <div className="absolute bottom-40 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20">
            <div className="text-center max-w-5xl mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-charcoal mb-4 sm:mb-6 md:mb-8 leading-tight mt-16 sm:mt-20 md:mt-24 lg:mt-28 px-2">
                Digital Marketing for Criminal Defense Lawyers
              </h1>
              
              <p className="hero-sub-headline text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-charcoal/95 mb-4 sm:mb-6 md:mb-8 leading-tight px-2 sm:px-4 md:px-0">
                Stop Relying on Referrals. Start Generating High-Value Cases.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-charcoal/90 mb-4 sm:mb-6 md:mb-8 lg:mb-12 leading-relaxed max-w-4xl mx-auto px-2 sm:px-4">
                Are you tired of the feast-or-famine cycle of a referral-based practice? It's time for a digital marketing agency that specializes in generating high-value cases for criminal defense lawyers.
              </p>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-charcoal/90 mb-6 sm:mb-8 md:mb-12 leading-relaxed max-w-4xl mx-auto px-2 sm:px-4">
                At Odin Digital, we're not a generic legal marketing agency. We are a team of criminal defense marketing specialists who understand the unique challenges of your practice. We build predictable, scalable lead generation systems that deliver a steady stream of qualified clients, so you can focus on what you do best: defending your clients.
              </p>
              
              <Button 
                variant="cta" 
                size="lg" 
                onClick={openForm}
                className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg w-full sm:w-auto whitespace-normal break-words"
              >
                <span className="text-center break-words">Get Your FREE Criminal Defense Marketing Quote →</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Social Proof Metrics */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 md:mb-16">The Proof Is in the Performance</h2>
            <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 md:mb-16 max-w-4xl mx-auto px-4">
              We're not just making promises; we're delivering verified results. Here's a snapshot of what our clients have achieved.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <Card className="p-6 md:p-8 text-center gradient-border">
                <TrendingUp className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">$574M+</div>
                <p className="text-sm md:text-base text-muted-foreground">Verified Client Revenue</p>
              </Card>
              
              <Card className="p-6 md:p-8 text-center gradient-border">
                <BarChart3 className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">540%</div>
                <p className="text-sm md:text-base text-muted-foreground">Average ROI on Ad Spend</p>
              </Card>
              
              <Card className="p-6 md:p-8 text-center gradient-border">
                <Users className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">95%</div>
                <p className="text-sm md:text-base text-muted-foreground">Client Retention Rate (No Lock-In Contracts)</p>
              </Card>
              
              <Card className="p-6 md:p-8 text-center gradient-border">
                <Award className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">283+</div>
                <p className="text-sm md:text-base text-muted-foreground">Successful Campaigns Delivered</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 3: Problem-Agitation Section */}
        <section className="py-16 md:py-24 bg-muted/30 decorative-circles">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-6 md:mb-8">
              Is Your Criminal Defense Practice Facing These Marketing Challenges?
            </h2>
            <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 md:mb-16 max-w-4xl mx-auto px-4">
              You're a skilled criminal defense lawyer, but you're struggling to attract a consistent flow of high-value cases. You're not alone. The digital marketing landscape for criminal defense is fiercely competitive and unforgiving.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="p-6 md:p-8 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-1 bg-white">
                <Scale className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-4">The Referral Pool Is Drying Up</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Your traditional referral sources (bail bondsmen, court clerks, other attorneys) are no longer providing a steady stream of new clients. You're facing a feast-or-famine cycle that makes it impossible to grow your practice.
                </p>
              </Card>
              
              <Card className="p-6 md:p-8 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-1 bg-white">
                <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-4">You're Wasting Money on Low-Quality Leads</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  You've tried Google Ads or worked with a generic marketing agency, but you're getting burned by low-quality leads that don't convert. You're spending a fortune on clicks that don't turn into paying clients.
                </p>
              </Card>
              
              <Card className="p-6 md:p-8 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-1 bg-white">
                <Search className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-4">You're Invisible Online</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Potential clients are searching for criminal defense lawyers online, but they can't find you. Your website is outdated, you're not ranking on Google, and you have no social media presence. You're losing cases to your competitors every single day.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 4: Testimonials */}
        <section className="py-16 md:py-24 bg-background decorative-circles-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 md:mb-16">What Our Clients Say</h2>
            <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 md:mb-16 max-w-4xl mx-auto px-4">
              Don't just take our word for it. Here's what business owners are saying about working with Odin Digital.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="p-6 md:p-8 shadow-card hover:shadow-primary transition-all duration-300 bg-white flex flex-col">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl md:text-2xl">★</span>
                  ))}
                </div>
                <p className="text-sm md:text-base mb-4 leading-relaxed flex-grow">
                  "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with."
                </p>
                <div className="mt-auto">
                  <p className="font-bold text-sm md:text-base">Fabienne Costa</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Founder, YCL Jewels (Gold Coast)</p>
                </div>
              </Card>
              
              <Card className="p-6 md:p-8 shadow-card hover:shadow-primary transition-all duration-300 bg-white flex flex-col">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl md:text-2xl">★</span>
                  ))}
                </div>
                <p className="text-sm md:text-base mb-4 leading-relaxed flex-grow">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
                </p>
                <div className="mt-auto">
                  <p className="font-bold text-sm md:text-base">Liam C</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Founder, Krush Organics (Sydney)</p>
                </div>
              </Card>
              
              <Card className="p-6 md:p-8 shadow-card hover:shadow-primary transition-all duration-300 bg-white flex flex-col">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl md:text-2xl">★</span>
                  ))}
                </div>
                <p className="text-sm md:text-base mb-4 leading-relaxed flex-grow">
                  "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month."
                </p>
                <div className="mt-auto">
                  <p className="font-bold text-sm md:text-base">Evan Tsaboukos</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Founder, Imperial Wealth (Melbourne)</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 5: Services */}
        <section className="py-16 md:py-24 bg-muted/30 decorative-circles">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-6 md:mb-8">
              Digital Marketing Services for Criminal Defense Lawyers
            </h2>
            <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 md:mb-16 max-w-4xl mx-auto px-4">
              We offer a complete suite of digital marketing services designed to help criminal defense lawyers attract more high-value cases and grow their practice.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
              {/* SEO Service */}
              <Card className="p-6 md:p-8 shadow-card hover:shadow-primary transition-all duration-300 bg-white flex flex-col">
                <Search className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">SEO for Criminal Defense Lawyers</h3>
                <p className="text-base md:text-lg font-semibold mb-4">
                  Dominate the search results and attract a steady stream of qualified clients with our proven SEO strategies for criminal defense lawyers.
                </p>
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                  In today's digital world, your potential clients are turning to Google to find a criminal defense lawyer. If you're not on the first page of the search results, you're invisible. Our team of criminal defense SEO specialists will build a comprehensive SEO strategy that is designed to rank you for the keywords that matter most, from high-value practice area keywords (e.g., "DUI lawyer," "drug possession lawyer") to long-tail keywords that capture clients in crisis.
                </p>
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed flex-grow">
                  We'll optimize your website, build high-quality backlinks, and create compelling content that positions you as the leading criminal defense lawyer in your area. Our goal is to build a long-term, sustainable lead generation machine that delivers a consistent flow of high-value cases, so you can stop relying on referrals and take control of your case flow.
                </p>
                <Button 
                  variant="cta" 
                  onClick={openForm}
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base mt-auto"
                >
                  <span className="text-center break-words">Get Your FREE Criminal Defense SEO Quote →</span>
                </Button>
              </Card>

              {/* PPC Service */}
              <Card className="p-6 md:p-8 shadow-card hover:shadow-primary transition-all duration-300 bg-white flex flex-col">
                <MousePointerClick className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">PPC for Criminal Defense Lawyers</h3>
                <p className="text-base md:text-lg font-semibold mb-4">
                  Get immediate results and generate high-value cases with our ROI-focused PPC campaigns for criminal defense lawyers.
                </p>
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                  When a potential client is arrested, they need a lawyer now. They're not going to spend hours researching their options; they're going to click on the first result they see. With our targeted PPC campaigns, you can be that first result. We'll build and manage high-converting Google Ads campaigns that put you in front of potential clients at the exact moment they need you most.
                </p>
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed flex-grow">
                  We'll handle everything from keyword research and ad copywriting to bid management and landing page optimization. Our team of Google Ads specialists will work tirelessly to reduce your cost per lead, increase your conversion rate, and maximize your ROI. We'll track every dollar you spend and show you exactly how much revenue it's generating for your practice.
                </p>
                <Button 
                  variant="cta" 
                  onClick={openForm}
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base mt-auto"
                >
                  <span className="text-center break-words">Get Your FREE Criminal Defense PPC Quote →</span>
                </Button>
              </Card>

              {/* Meta Ads Service */}
              <Card className="p-6 md:p-8 shadow-card hover:shadow-primary transition-all duration-300 bg-white flex flex-col">
                <Share2 className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Meta Ads for Criminal Defense Lawyers</h3>
                <p className="text-base md:text-lg font-semibold mb-4">
                  Reach potential clients and build your brand with our strategic Meta Ads (Facebook & Instagram) campaigns for criminal defense lawyers.
                </p>
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                  While Google Ads is great for capturing clients in crisis, Meta Ads is a powerful tool for building your brand, reaching potential clients before they need you, and staying top-of-mind with your target audience. We'll create and manage strategic Meta Ads campaigns that are designed to build your brand, generate leads, and drive traffic to your website.
                </p>
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed flex-grow">
                  We'll use advanced targeting to reach potential clients based on their demographics, interests, and online behavior. We'll create compelling ad creative that positions you as a trusted authority in your field. And we'll track your results to ensure you're getting a positive return on your investment.
                </p>
                <Button 
                  variant="cta" 
                  onClick={openForm}
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base mt-auto"
                >
                  <span className="text-center break-words">Get Your FREE Criminal Defense Meta Ads Quote →</span>
                </Button>
              </Card>

              {/* Web Design Service */}
              <Card className="p-6 md:p-8 shadow-card hover:shadow-primary transition-all duration-300 bg-white flex flex-col">
                <Palette className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Web Design for Criminal Defense Lawyers</h3>
                <p className="text-base md:text-lg font-semibold mb-4">
                  Your website is your most important marketing asset. We'll build you a high-converting, professional website that turns visitors into clients.
                </p>
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                  In the legal industry, trust and credibility are everything. Your website is often the first impression a potential client will have of your practice. If it's outdated, unprofessional, or difficult to navigate, you're losing cases to your competitors. We'll build you a modern, mobile-friendly website that is designed to convert visitors into clients.
                </p>
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed flex-grow">
                  Our team of web design specialists will create a custom website that reflects the professionalism and expertise of your practice. We'll write compelling copy that tells your story and positions you as the leading criminal defense lawyer in your area. And we'll optimize your website for conversions, so you can turn more visitors into paying clients.
                </p>
                <Button 
                  variant="cta" 
                  onClick={openForm}
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base mt-auto"
                >
                  <span className="text-center break-words">Get Your FREE Criminal Defense Web Design Quote →</span>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 6: Differentiators */}
        <section className="py-16 md:py-24 bg-background decorative-circles-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 md:mb-16">
              The Odin Digital Difference: Your Criminal Defense Marketing Partner
            </h2>
            <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 md:mb-16 max-w-4xl mx-auto px-4">
              Why choose us as your criminal defense marketing agency? Because we're specialists, not generalists. We understand the unique challenges of your practice, and we know what it takes to succeed.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <Card className="p-6 md:p-8">
                <Target className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-4">Criminal Defense Specialization</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  We're not a generic legal marketing agency that works with every type of lawyer. We are a team of criminal defense marketing specialists who live and breathe your industry. We understand the nuances of your practice, and we know how to attract high-value cases.
                </p>
              </Card>
              
              <Card className="p-6 md:p-8">
                <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-4">ROI-Focused</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  We're not interested in vanity metrics like clicks and impressions. We're obsessed with one thing: return on investment. We track every dollar you spend and show you exactly how many high-value cases it's generating for your practice.
                </p>
              </Card>
              
              <Card className="p-6 md:p-8">
                <Shield className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-4">No Lock-In Contracts</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  We believe in earning your business, not forcing it. Our flexible, month-to-month agreements mean we're always motivated to deliver results. If you're not happy, you're free to leave. It's that simple.
                </p>
              </Card>
              
              <Card className="p-6 md:p-8">
                <Award className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-4">Full-Service Agency</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  We're a full-service digital marketing agency, which means we can handle all of your marketing needs in-house. From SEO and PPC to Meta Ads and web design, we have the expertise to build a comprehensive marketing strategy that delivers results.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 7: Process */}
        <section className="py-16 md:py-24 bg-muted/30 decorative-circles">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 md:mb-16">
              Our Proven 4-Step Digital Marketing Process for Criminal Defense Lawyers
            </h2>
            <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 md:mb-16 max-w-4xl mx-auto px-4">
              We follow a simple, effective process to deliver high-performing digital marketing campaigns for our criminal defense clients.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <Card className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg md:text-xl font-bold mb-4">Deep Dive & Strategy</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  We start with a deep dive into your practice, your market, and your goals. We'll analyze your competitors, identify your target audience, and develop a tailored digital marketing strategy that is designed to attract high-value cases and maximize your ROI.
                </p>
              </Card>
              
              <Card className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg md:text-xl font-bold mb-4">Campaign Build & Launch</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  We build your digital marketing campaigns from the ground up, ensuring they're structured for success. We'll write compelling ad copy, select the right keywords, and set up your conversion tracking. We then launch your campaigns and monitor them closely to ensure they're performing as expected.
                </p>
              </Card>
              
              <Card className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg md:text-xl font-bold mb-4">Ongoing Optimization</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  We continuously optimize your digital marketing campaigns to improve performance and drive even better results. We'll A/B test your ad copy, adjust your bids, and add negative keywords to stop wasted spend. We're always looking for new ways to improve your ROI.
                </p>
              </Card>
              
              <Card className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg md:text-xl font-bold mb-4">Reporting & Analysis</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  We provide you with regular, detailed reports that show you exactly how your digital marketing campaigns are performing. We track key metrics like cost per lead, cost per acquisition, and return on ad spend, so you can see the direct impact of our work on your bottom line.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 8: Why Choose Us */}
        <section className="py-16 md:py-24 bg-background decorative-circles-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 md:mb-16">
              Why Choose Odin Digital as Your Criminal Defense Marketing Partner?
            </h2>
            <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 md:mb-16 max-w-4xl mx-auto px-4">
              You need a marketing partner who understands the unique challenges of your practice. Here's why we're the right choice for your criminal defense law firm.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <Card className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4">We're Criminal Defense Specialists</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  We're not a generalist legal marketing agency. We are a team of criminal defense marketing specialists who live and breathe your industry. We understand the nuances of your practice, and we know how to attract high-value cases.
                </p>
              </Card>
              
              <Card className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4">We're ROI-Focused</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  We're not interested in vanity metrics like rankings and traffic. We're obsessed with one thing: return on investment. We track every dollar you spend and show you exactly how many high-value cases it's generating for your practice.
                </p>
              </Card>
              
              <Card className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4">We're Transparent & Honest</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  We believe in radical transparency and honest communication. We provide you with clear, detailed reports that show you exactly how your campaigns are performing. We'll always be upfront with you about what's working and what's not. No jargon, no excuses, just results.
                </p>
              </Card>
              
              <Card className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4">We're Your Partner in Growth</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  We're not just a service provider; we're your partner in growth. We're invested in your success, and we'll work tirelessly to help you achieve your business goals. We're always available to answer your questions, provide advice, and help you navigate the ever-changing world of digital marketing.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 9: Final CTA */}
        <section data-nav-contrast="dark" className="py-16 md:py-24 gradient-hero relative overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{ animationDelay: '3s' }} />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-charcoal mb-6 md:mb-8">
              Ready to Generate a Consistent Flow of High-Value Cases?
            </h2>
            <p className="text-lg md:text-xl text-charcoal/90 mb-8 md:mb-12 leading-relaxed px-4">
              Stop relying on referrals and take control of your case flow. It's time to partner with a digital marketing agency that specializes in generating high-value cases for criminal defense lawyers.
            </p>
            <p className="text-base md:text-lg text-charcoal/85 mb-8 md:mb-12 leading-relaxed px-4">
              Take the first step towards transforming your practice. Schedule your FREE, no-obligation digital marketing consultation and quote with one of our senior strategists today. We'll analyze your current marketing efforts, discuss your goals, and show you exactly how we can help you build a predictable, scalable lead generation system that drives real growth. What do you have to lose?
            </p>
            <Button 
              variant="cta" 
              size="lg" 
              onClick={openForm}
              className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg w-full sm:w-auto whitespace-normal break-words"
            >
              <span className="text-center break-words">Get Your FREE Criminal Defense Marketing Quote →</span>
            </Button>
          </div>
        </section>

        {/* Section 10: FAQ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-12 md:mb-16">
              Frequently Asked Questions About Digital Marketing for Criminal Defense Lawyers
            </h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  How much does digital marketing cost for a criminal defense law firm?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  The cost of digital marketing for a criminal defense law firm can vary depending on your goals, your market, and the services you need. We offer a range of affordable packages, and we provide a detailed, transparent quote after a free consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  Is digital marketing worth it for my criminal defense practice?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  Absolutely. With the traditional referral pool drying up, digital marketing is the most effective way to attract a consistent flow of high-value cases and grow your practice. By targeting the right keywords and platforms, you can reach potential clients at the exact moment they need you most.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  How long does it take to see results from digital marketing?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  With PPC and Meta Ads, you can start seeing results almost immediately. SEO is a long-term strategy that can take 3-6 months to start generating a consistent flow of leads. We recommend a combination of both for the best results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  What is the difference between SEO and PPC for criminal defense lawyers?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  SEO is the process of optimizing your website to rank organically in the search results, while PPC is a form of paid advertising where you pay to have your ads shown at the top of the search results. Both can be effective, and we can help you determine the right mix for your practice.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  What is a good ROI for digital marketing for a criminal defense law firm?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  A good ROI for digital marketing for a criminal defense law firm is typically 3x - 5x your investment. However, this can vary depending on your case value, your profit margins, and your customer lifetime value. We focus on maximizing your ROI and providing you with a clear return on your investment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  How do you track the results of your digital marketing campaigns?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  We use a variety of tools to track the results of our digital marketing campaigns, including Google Analytics, Google Ads conversion tracking, and third-party call tracking software. We provide you with regular, detailed reports that show you exactly how your campaigns are performing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  Do you offer a free digital marketing consultation?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  Yes, we offer a free, no-obligation digital marketing consultation. We will analyze your existing marketing efforts, identify areas for improvement, and provide you with a clear roadmap for success.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  What are your digital marketing packages for criminal defense lawyers?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  We offer a range of affordable digital marketing packages, starting from just $2,000 per month. We will work with you to develop a custom package that meets your specific needs and budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  How do I get a free quote for your digital marketing services?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  Simply click the button below to schedule your FREE, no-obligation consultation with one of our senior strategists. We will discuss your project in detail and provide you with a comprehensive quote within 24 hours. There's no pressure and no obligation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  Do you specialize in a particular type of criminal defense?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  While we have experience working with a wide range of criminal defense lawyers, we have particular expertise in marketing for DUI/DWI, drug offenses, domestic violence, and white-collar crime.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  What is the most effective marketing channel for criminal defense lawyers?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  For immediate results, Google Ads (PPC) is the most effective marketing channel for criminal defense lawyers. For long-term, sustainable growth, SEO is the most effective channel. We recommend a combination of both for the best results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  Do you offer web design services for criminal defense lawyers?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  Yes, we offer custom web design services for criminal defense lawyers. We will build you a high-converting, professional website that is designed to turn visitors into clients.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  Do you offer social media marketing for criminal defense lawyers?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  Yes, we offer strategic Meta Ads (Facebook & Instagram) campaigns for criminal defense lawyers. We can help you build your brand, reach potential clients, and stay top-of-mind with your target audience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  What makes you different from other legal marketing agencies?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  We are specialists, not generalists. We only work with criminal defense lawyers, which means we have a deep understanding of your practice, your market, and your clients. We are also ROI-focused, transparent, and we don't require long-term contracts.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                  How do I get started?
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground">
                  Simply click the button below to schedule your FREE, no-obligation consultation with one of our senior strategists. We will discuss your project in detail and provide you with a comprehensive quote within 24 hours. There's no pressure and no obligation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-3 sm:p-4 bg-background/95 backdrop-blur-sm border-t md:hidden z-50">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={openForm}
            className="w-full py-3 sm:py-4 text-xs sm:text-sm px-3"
          >
            <span className="text-center break-words">Get Your FREE Quote →</span>
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
}
