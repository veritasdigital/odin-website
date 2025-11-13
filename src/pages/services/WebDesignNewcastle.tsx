import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  AlertCircle,
  FileQuestion,
  TrendingDown,
  UserX,
  DollarSign,
  Smartphone,
  Target,
  MousePointer,
  Shield,
  Layout,
  Zap,
  Image as ImageIcon,
  Code,
  Globe,
  Search,
  FileText,
  MapPin,
  Settings,
  Activity,
  HeadphonesIcon,
  Briefcase,
  ShoppingCart,
  Palette,
  RefreshCw,
  FileCode,
  Award,
  Lock,
  Eye,
  Users,
  TrendingUp,
  ChevronDown
} from "lucide-react";

const WebDesignNewcastle = () => {
  const { openForm } = useMarketingForm();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const painPoints = [
    {
      icon: AlertCircle,
      title: "Beautiful But Broken",
      description: "Your website looks stunning in screenshots, but it loads so slowly that customers leave before it even displays. Speed kills conversions—and your agency doesn't care."
    },
    {
      icon: FileQuestion,
      title: "Template Hell",
      description: "You paid for a 'custom' website, but it's just a pre-built template with your logo slapped on. It looks like every other site in your industry, and Google knows it."
    },
    {
      icon: TrendingDown,
      title: "No Strategy",
      description: "Your website is pretty, but there's no conversion strategy. No clear call-to-action, no compelling copy, no customer journey—just a digital brochure that doesn't sell."
    },
    {
      icon: UserX,
      title: "Abandoned After Launch",
      description: "Your web design company disappeared the moment they collected final payment. Now you're stuck with a website you can't update, and simple changes cost hundreds of dollars."
    },
    {
      icon: DollarSign,
      title: "Hidden Costs",
      description: "That $5,000 website quoted turned into $12,000 after 'essential' add-ons. Now you're locked into expensive monthly fees with no escape clause."
    },
    {
      icon: Smartphone,
      title: "Mobile Disasters",
      description: "Your website works fine on desktop, but it's a complete disaster on mobile. And since 70% of your traffic is mobile, you're losing most of your potential customers."
    }
  ];

  const conversionDesign = [
    {
      icon: Layout,
      title: "Strategic Layout: Guiding Visitors to Take Action",
      description: "We design every page with a clear conversion funnel. Visitors know exactly what to do next, from the moment they land to the moment they convert."
    },
    {
      icon: MousePointer,
      title: "Clear, Compelling CTAs: Telling Visitors What to Do Next",
      description: "Our CTAs are impossible to miss and impossible to resist. We use persuasive copy and strategic placement to maximize click-through rates."
    },
    {
      icon: Shield,
      title: "Trust Signals: Building Credibility and Reducing Anxiety",
      description: "We strategically place testimonials, reviews, certifications, and guarantees to reduce purchase anxiety and build trust with Newcastle visitors."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design: Flawless Experience on All Devices",
      description: "70% of your traffic is mobile. We design for mobile first, then scale up to desktop, ensuring a perfect experience on every device."
    }
  ];

  const speedOptimization = [
    {
      icon: ImageIcon,
      title: "Image Optimization: Reducing File Sizes Without Losing Quality",
      description: "We compress images to reduce file sizes by up to 80% without visible quality loss. Faster load times mean better conversions."
    },
    {
      icon: Code,
      title: "Code Optimization: Clean, Efficient Code",
      description: "We write clean, efficient code that loads quickly and performs smoothly. No bloated plugins or unnecessary scripts."
    },
    {
      icon: Globe,
      title: "CDN & Caching: Serving Content Faster",
      description: "We use content delivery networks and aggressive caching strategies to serve your website lightning-fast to Newcastle visitors."
    }
  ];

  const seoFoundation = [
    {
      icon: Code,
      title: "Technical SEO: Clean Code and Structure",
      description: "We build websites with clean HTML, proper heading hierarchy, schema markup, and fast load times—all ranking factors Google loves."
    },
    {
      icon: FileText,
      title: "On-Page SEO: Optimized Content and Metadata",
      description: "Every page is optimized with strategic keywords, compelling meta descriptions, and SEO-friendly URLs to maximize search visibility."
    },
    {
      icon: MapPin,
      title: "Local SEO for Newcastle: Dominating Local Search",
      description: "We optimize your website to rank for Newcastle-specific searches, helping local customers find you when they're ready to buy."
    }
  ];

  const ongoingSupport = [
    {
      icon: Settings,
      title: "Monthly Maintenance: Updates, Backups, Security",
      description: "We handle all the technical stuff—software updates, security patches, regular backups—so you can focus on running your business."
    },
    {
      icon: Activity,
      title: "Performance Monitoring: Continuous Optimization",
      description: "We continuously monitor your website's performance and make optimizations to ensure it stays fast and effective."
    },
    {
      icon: HeadphonesIcon,
      title: "Priority Support: Fast Response Times",
      description: "When you need help, we're here. Priority support means fast response times and quick resolutions to any issues."
    }
  ];

  const services = [
    {
      icon: Briefcase,
      title: "Small Business Websites",
      description: "Professional websites designed to generate leads and establish your Newcastle business as the local authority."
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Websites",
      description: "Full-featured online stores built on WooCommerce or Shopify, optimized to convert browsers into buyers."
    },
    {
      icon: Code,
      title: "WordPress Development",
      description: "Custom WordPress websites that are easy to update, SEO-friendly, and built to scale with your business."
    },
    {
      icon: Palette,
      title: "Custom Web Development",
      description: "Bespoke web applications built from scratch to meet your unique business requirements and processes."
    },
    {
      icon: RefreshCw,
      title: "Website Redesigns",
      description: "Transform your underperforming website into a high-converting revenue engine with a strategic redesign."
    },
    {
      icon: FileCode,
      title: "Landing Pages",
      description: "High-converting landing pages designed for specific campaigns, products, or services to maximize ROI."
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "$574M+ in verified client revenue. 95% client retention rate. 283+ successful campaigns delivered."
    },
    {
      icon: Lock,
      title: "No Lock-In Contracts",
      description: "Month-to-month maintenance agreements. If we're not delivering value, you're free to leave. No penalties, no hassles."
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description: "No hidden costs, no surprise fees. You'll know exactly what you're paying for and what results to expect."
    },
    {
      icon: MapPin,
      title: "Newcastle Focus",
      description: "We understand the Newcastle market, your customers, and what it takes to succeed in the local business landscape."
    },
    {
      icon: Target,
      title: "Conversion Expertise",
      description: "We don't just build websites—we build conversion machines. Every element is designed to turn visitors into customers."
    }
  ];

  const faqs = [
    {
      question: "How much does web design cost in Newcastle?",
      answer: "Web design Newcastle costs vary depending on complexity, features, and customization. Most Newcastle small business websites cost $3,000 - $8,000. E-commerce websites cost $8,000 - $20,000. Our team will provide a detailed quote during your free consultation."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Most small business websites take 4-6 weeks from kickoff to launch. E-commerce websites take 6-10 weeks. Custom web applications take 10-16 weeks."
    },
    {
      question: "Do you offer website maintenance and support?",
      answer: "Yes. We offer ongoing website maintenance packages that include updates, backups, security monitoring, and priority support."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely. We specialize in transforming underperforming websites into high-converting revenue engines."
    },
    {
      question: "Do you build e-commerce websites for Newcastle businesses?",
      answer: "Yes. We build full-featured ecommerce website Newcastle solutions on WooCommerce or Shopify."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Yes. All our websites are mobile-first, meaning they're designed to work perfectly on mobile devices first, then scaled up to desktop."
    },
    {
      question: "Will my website be optimized for search engines?",
      answer: "Yes. All our websites are built with SEO best practices from day one, giving you a strong foundation for long-term search engine visibility."
    },
    {
      question: "Do you offer a performance guarantee?",
      answer: "We offer the best guarantee in the industry: No Lock-In Contracts for ongoing maintenance. If we are not delivering ongoing value, you are free to leave at any time."
    }
  ];

  const metrics = [
    { icon: TrendingUp, number: "$574M+", label: "Verified Client Revenue" },
    { icon: Users, number: "95%", label: "Client Retention Rate" },
    { icon: Award, number: "283+", label: "Successful Campaigns" }
  ];

  const relatedServices = [
    { name: "Google Ads Newcastle", url: "/google-ads-newcastle" },
    { name: "SEO Newcastle", url: "/seo-newcastle" },
    { name: "Facebook Advertising", url: "/facebook-advertising" },
    { name: "Email Marketing", url: "/services/email-marketing" },
    { name: "Social Media Advertising", url: "/social-media-advertising" },
    { name: "Marketing Consulting", url: "/services/marketing-consulting" }
  ];

  const relatedCities = [
    { name: "Web Design Sydney", url: "/web-design-sydney" },
    { name: "Web Design Brisbane", url: "/web-design-brisbane" },
    { name: "Web Design Melbourne", url: "/web-design-melbourne" },
    { name: "Web Design Canberra", url: "/web-design-canberra" }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au",
        "logo": "https://odindigital.com.au/logo.png",
        "description": "Performance-focused web design agency in Newcastle, Australia. We specialize in fast, mobile-optimized, SEO-friendly websites that convert. $574M+ in client revenue. No lock-in contracts.",
        "founder": {
          "@type": "Person",
          "name": "Lucas Durante"
        },
        "slogan": "No Lock-In Contracts. Just Results."
      },
      {
        "@type": "LocalBusiness",
        "name": "Odin Digital - Web Design Newcastle",
        "image": "https://odindigital.com.au/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Newcastle",
          "addressRegion": "NSW",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -32.9283,
          "longitude": 151.7817
        },
        "url": "https://odindigital.com.au/web-design-newcastle",
        "priceRange": "$$$"
      },
      {
        "@type": "Service",
        "serviceType": "Web Design Newcastle",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "City",
          "name": "Newcastle"
        },
        "description": "Comprehensive web design and development services for Newcastle businesses, including small business websites, e-commerce, WordPress development, and custom web applications, focused on speed, mobile optimization, SEO, and conversions."
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
  };

  return (
    <>
      <Helmet>
        <title>Web Design Newcastle | Website Development Newcastle | Odin Digital</title>
        <meta name="description" content="Stop paying for websites that don't convert. Odin Digital provides web design Newcastle services focused on speed, mobile optimization, SEO, and conversions. No lock-in contracts. Get your free audit." />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative isolate overflow-hidden min-h-screen flex items-center bg-white">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          </div>
          
          {/* Floating Circles from Homepage */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-muted/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-muted/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-muted/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full">
            <div className="grid grid-cols-1 gap-16 lg:gap-20 items-center min-h-screen py-24 lg:py-32">
              
              {/* Centered Text Content */}
              <div className="space-y-8 lg:space-y-10 animate-slide-up max-w-2xl mx-auto text-center">
                {/* Main Headline */}
                <div className="space-y-6">
                  <h1 className="relative z-30 overflow-visible text-4xl md:text-5xl xl:text-6xl font-black text-charcoal leading-[0.95] tracking-tight">
                    <span className="block mb-3 lg:mb-4">Newcastle's Leading</span>
                    <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
                      Web Design Agency
                    </span>
                  </h1>
                </div>
                
                {/* Subtitle and Description */}
                <div className="space-y-6 lg:space-y-8">
                  <h2 className="text-xl md:text-2xl lg:text-2xl text-charcoal/90 font-bold leading-tight max-w-2xl">
                    Professional Web Design That Drives Growth
                  </h2>
                  
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-2xl font-light">
                    Stop losing customers to slow, outdated websites. We build high-converting, SEO-optimized websites designed specifically for Newcastle businesses.
                  </p>

                  <p className="text-base md:text-lg text-charcoal/70 leading-relaxed max-w-2xl font-light">
                    At Odin Digital, we create websites that work as hard as you do. Modern design. Lightning-fast performance. Built for conversions.
                  </p>
                </div>
                
                {/* Action Button */}
                <div className="pt-2 flex justify-center">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="text-lg px-12 py-6 shadow-glow whitespace-normal break-words"
                    onClick={openForm}
                  >
                    Get Your FREE Newcastle Web Design Quote →
                  </Button>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <Card key={index} className="p-6 text-center hover-scale border-border/50 bg-card">
                    <Icon className="h-10 w-10 mx-auto mb-3 text-primary" />
                    <div className="text-3xl font-bold text-primary mb-1">{metric.number}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problem/Agitation Section */}
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-24 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 text-center px-2">
              Why Most Web Design Companies Fail Newcastle Businesses
            </h2>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center max-w-3xl mx-auto px-2">
              Newcastle businesses waste millions every year on web development Newcastle projects that look impressive in screenshots but deliver nothing to the bottom line. Here's why most agencies fail.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {painPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div 
                    key={index}
                    className="p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary mb-2 sm:mb-3" />
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-1 sm:mb-2 md:mb-3">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-4 sm:mt-6 md:mt-8 lg:mt-12">
              <Button
                size="lg" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6"
              >
                Stop the Website Bleed: Talk to a Newcastle Web Design Expert →
              </Button>
            </div>
          </div>
        </section>

        {/* Conversion-Focused Design */}
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 text-center px-2">
              Conversion-Focused Design: Built to Sell, Not Just Look Good
            </h2>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center max-w-3xl mx-auto px-2">
              We don't just build pretty websites. We build website development Newcastle projects designed to convert your visitors into customers.
            </p>

            <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {conversionDesign.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary mb-2 sm:mb-3" />
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground mb-1 sm:mb-2 md:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-4 sm:mt-6 md:mt-8 lg:mt-12">
              <Button
                size="lg" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6"
              >
                See Our Newcastle Web Design Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* Speed Optimization */}
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-24 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 text-center px-2">
              Speed Optimization: Sub-3-Second Load Times
            </h2>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center max-w-3xl mx-auto px-2">
              We build web development companies Newcastle websites that load in under 3 seconds.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {speedOptimization.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="p-3 sm:p-4 md:p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mb-2 sm:mb-3 md:mb-4" />
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-12">
              <Button 
                size="lg" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6"
              >
                See Our Speed Optimization Services →
              </Button>
            </div>
          </div>
        </section>

        {/* SEO Foundation */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-center px-2">
              SEO Foundation: Built to Rank from Day One
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 md:mb-12 text-center max-w-3xl mx-auto px-2">
              We build e-commerce website design Newcastle and business websites that are optimized for search engines from day one.
            </p>

            <div className="grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {seoFoundation.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="p-3 sm:p-4 md:p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mb-2 sm:mb-3 md:mb-4" />
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-12">
              <Button 
                size="lg" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6"
              >
                See Our SEO Services for Newcastle Businesses →
              </Button>
            </div>
          </div>
        </section>

        {/* Ongoing Support */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-center px-2">
              Ongoing Support: We Don't Abandon You After Launch
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 md:mb-12 text-center max-w-3xl mx-auto px-2">
              We provide wordpress developer Newcastle services and ongoing support to ensure your website stays fast, secure, and up-to-date.
            </p>

            <div className="grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {ongoingSupport.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="p-3 sm:p-4 md:p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mb-2 sm:mb-3 md:mb-4" />
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-12">
              <Button 
                size="lg" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6"
              >
                See Our Website Maintenance Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 text-center px-2">
              Our Newcastle Web Design Services
            </h2>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center max-w-3xl mx-auto px-2">
              We offer comprehensive small business website Newcastle and enterprise web development services.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index}
                    className="p-3 sm:p-4 md:p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mb-2 sm:mb-3 md:mb-4" />
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-12">
              <Button 
                size="lg" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6"
              >
                Talk to a Newcastle Web Design Specialist →
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-24 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 text-center px-2">
              Why Newcastle Businesses Choose Odin Digital
            </h2>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center max-w-3xl mx-auto px-2">
              We are not a generalist agency that dabbles in web design. We are specialists who understand how to build websites that convert Newcastle customers.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="p-3 sm:p-4 md:p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mb-2 sm:mb-3 md:mb-4" />
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-6 sm:mt-8 md:mt-12">
              <Button 
                size="lg" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6"
              >
                Talk to a Newcastle Web Design Specialist →
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-center px-2">
              FAQs: Your Questions About Newcastle Web Design Answered
            </h2>

            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="rounded-lg bg-card border border-border overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-3 sm:p-4 md:p-5 lg:p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-foreground pr-3 sm:pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-3 sm:px-4 md:px-5 lg:px-6 pb-3 sm:pb-4 md:pb-5 lg:pb-6">
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-24 px-4 sm:px-6 bg-gradient-to-br from-primary/20 via-secondary/10 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4 lg:mb-6 px-2">
              Ready to Stop Losing Customers and Start Converting Newcastle Visitors into Revenue?
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-3 sm:mb-4 md:mb-6 lg:mb-8 max-w-2xl mx-auto px-2">
              Stop settling for websites that don't convert. Start working with the web design agency Newcastle that delivers high-converting websites and predictable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center px-2">
              <Button
                size="xl" 
                variant="cta"
                onClick={openForm}
                className="w-full sm:w-auto text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8"
              >
                Claim Your FREE Newcastle Website Audit →
              </Button>
            </div>
          </div>
        </section>

        {/* Related Services and Cities */}
        <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-24 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <div>
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
                  Related Services
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  {relatedServices.map((service, index) => (
                    <Link 
                      key={index}
                      to={service.url}
                      className="p-3 sm:p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center min-h-[80px] sm:min-h-[100px]"
                    >
                      <span className="text-foreground font-medium hover:text-primary block text-sm sm:text-base">
                        {service.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
                  Other Cities We Serve
                </h2>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  {relatedCities.map((city, index) => (
                    <Link 
                      key={index}
                      to={city.url}
                      className="p-3 sm:p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center min-h-[80px] sm:min-h-[100px]"
                    >
                      <span className="text-foreground font-medium hover:text-primary block text-sm sm:text-base">
                        {city.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <SideTab />

        {/* Mobile Sticky CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border z-50">
          <Button 
            size="lg" 
            variant="cta"
            onClick={openForm}
            className="w-full text-xs sm:text-sm md:text-base px-4 sm:px-6"
          >
            Get FREE Website Audit →
          </Button>
        </div>
      </div>
    </>
  );
};

export default WebDesignNewcastle;
