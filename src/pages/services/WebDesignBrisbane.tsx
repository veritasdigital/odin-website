import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, TrendingUp, Users, Award, Zap, Target, Search, Smartphone, CheckCircle2, Layers, ShoppingBag, Palette, Code2 } from "lucide-react";
import { RelatedLocations } from "@/components/RelatedLocations";
import { getRelatedLocations } from "@/utils/contentClusters";

const WebDesignBrisbane = () => {
  const metrics = [
    { label: "Verified Client Revenue", value: "$574M+", icon: TrendingUp },
    { label: "Average ROI on Ad Spend", value: "540%", icon: Award },
    { label: "Client Retention Rate", value: "95%", icon: Users },
    { label: "Successful Campaigns", value: "283+", icon: Zap }
  ];

  const problems = [
    {
      title: "The Digital Brochure Trap",
      description: "You paid thousands for a \"modern\" website, but it's just a digital brochure—pretty to look at, but it doesn't capture leads, doesn't integrate with your marketing, and doesn't drive sales. Your competitors with uglier sites are outperforming you because their sites are built to convert. You're stuck with a website that looks good in screenshots but fails where it matters: your bottom line."
    },
    {
      title: "The Timeline Nightmare",
      description: "Your web design agency promised a 6-week timeline. It's now month 4, and you're still waiting on 'revisions.' Communication is poor, deadlines are missed, and you're left in the dark. Meanwhile, your business is losing opportunities every day without a functional website. You need a partner who respects your time and delivers on their promises."
    },
    {
      title: "The SEO Blind Spot",
      description: "Your new website launched, and... crickets. No organic traffic. No rankings. Your agency didn't build it with SEO in mind—slow load times, poor mobile experience, zero optimization. You're now facing the prospect of paying another agency to 'fix' what should have been done right the first time. You need a web design partner who understands that a beautiful website is worthless if no one can find it."
    }
  ];

  const testimonials = [
    {
      quote: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
      author: "Liam C",
      company: "Krush Organics (Sydney)"
    },
    {
      quote: "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
      author: "Fabienne Costa",
      company: "YCL Jewels (Gold Coast)"
    },
    {
      quote: "Lucas is honestly one of the best things that ever happened to my business. When I first started working with him, I was doing $20k months on my own, then started working with Lucas on a new product launch...that year after I was averaging over $100k a month.",
      author: "Evan Tsaboukos",
      company: "Imperial Wealth (Melbourne)"
    }
  ];

  const services = [
    {
      icon: Layers,
      title: "Conversion-Focused Website Design Brisbane",
      description: "We don't build digital brochures. We design websites with clear user paths, strategic calls-to-action, and conversion rate optimization (CRO) built in from day one. Every design decision is made to maximize your lead generation and sales. Your website becomes a revenue-generating machine, not just a pretty placeholder.",
      cta: "Get Your FREE Brisbane Website Conversion Audit"
    },
    {
      icon: Search,
      title: "SEO-Optimized Web Development Brisbane",
      description: "A beautiful website that no one can find is a wasted investment. We build sites with clean code, fast loading speeds, mobile-first design, and proper technical SEO structure from the ground up. We integrate seamlessly with our in-house SEO team to ensure your site ranks and drives organic traffic from day one. We don't just build sites—we build sites that get found.",
      cta: "Get Your FREE Brisbane SEO Website Audit"
    },
    {
      icon: ShoppingBag,
      title: "eCommerce Website Brisbane Solutions",
      description: "Selling online? We specialize in high-performance ecommerce website brisbane solutions (Shopify, WooCommerce, custom platforms) that reduce cart abandonment and increase average order value. Our sites integrate with your marketing stack to create a seamless customer journey from first click to final sale.",
      cta: "Get Your FREE Brisbane eCommerce Website Quote"
    },
    {
      icon: Code2,
      title: "Website Redesign & Optimization Brisbane",
      description: "Stuck with an underperforming site? We audit, redesign, and optimize existing websites to dramatically improve conversion rates, user experience, and search rankings. We rescue Brisbane businesses from bad web design and transform their sites into high-converting assets. If your current site isn't working, we'll make it work—or build you a better one.",
      cta: "Get Your FREE Brisbane Website Redesign Quote"
    }
  ];

  const differentiators = [
    {
      icon: Target,
      title: "Conversion-First Design Philosophy",
      description: "We're not a traditional web design agency brisbane that prioritizes aesthetics over results. We're digital marketers who happen to build incredible websites. Every element—from layout to copy to CTAs—is strategically designed to guide users toward conversion. Our websites don't just look good; they generate measurable ROI."
    },
    {
      icon: Zap,
      title: "No Lock-In Contracts",
      description: "We believe in earning your business every single month, not trapping you in long-term contracts. Our flexible, month-to-month support and maintenance plans mean we're always motivated to deliver results. If you're not happy, you're free to leave. It's that simple. This is how confident we are in our ability to deliver."
    },
    {
      icon: CheckCircle2,
      title: "Transparent, Fixed-Price Process",
      description: "No surprise fees. No scope creep. No vague timelines. We provide detailed, fixed-price quotes upfront and stick to agreed-upon timelines. You know exactly what you're getting and when you're getting it. This transparency is rare in the web design industry, and it's one of the reasons our client retention rate is 95%."
    },
    {
      icon: Smartphone,
      title: "Integrated Marketing Ecosystem",
      description: "Your website doesn't exist in a vacuum. We integrate it seamlessly with your broader digital marketing strategy—PPC, SEO, email, social. This creates a unified customer journey that maximizes lifetime value and reduces customer acquisition costs. We're not just building a site; we're building your growth engine."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy Session",
      description: "We start with an in-depth discovery session to understand your Brisbane business, your goals, your target customers, and your competition. We analyze your current site (if applicable), identify conversion barriers, and develop a comprehensive web strategy aligned with your business objectives. This isn't a cookie-cutter process—it's tailored to your unique needs."
    },
    {
      number: "02",
      title: "Conversion-Focused Design & UX",
      description: "Our design team creates wireframes and mockups that prioritize user experience and conversion optimization. We focus on clear information hierarchy, intuitive navigation, and strategic placement of calls-to-action. You'll receive multiple design concepts and have full input throughout the process. We don't move forward until you're 100% satisfied with the design."
    },
    {
      number: "03",
      title: "Development, SEO & Speed Optimization",
      description: "Our development team builds your site using clean, modern code with a focus on speed, security, and SEO. We optimize images, implement lazy loading, minimize code bloat, and ensure mobile responsiveness. We integrate tracking, analytics, and any third-party tools (CRM, email marketing, etc.) required for your business. Every site is tested rigorously before launch."
    },
    {
      number: "04",
      title: "Launch, Training & Ongoing Optimization",
      description: "We handle the entire launch process, including server setup, domain configuration, SSL certificates, and final QA testing. Post-launch, we provide comprehensive training so you can manage your site confidently. We also offer ongoing support, maintenance, and continuous conversion rate optimization to ensure your site keeps improving and generating results over time."
    }
  ];

  const whyChooseUs = [
    {
      title: "We Understand Brisbane Business Challenges",
      description: "We've worked with Brisbane businesses across industries—from local service providers to national ecommerce brands. We understand the competitive Brisbane market, local customer behavior, and the unique challenges you face. We're not a one-size-fits-all agency; we tailor our approach to your specific Brisbane market and audience."
    },
    {
      title: "We're Full-Service Digital Marketing Experts",
      description: "Unlike pure web design agencies, we offer full-service digital marketing (Google Ads, SEO, Meta Ads, email marketing). This means your website is built to integrate seamlessly with proven marketing strategies that have generated $574M+ in verified client revenue. Your website isn't just a standalone project—it's part of a holistic growth strategy."
    },
    {
      title: "We Have a Proven Track Record of Results",
      description: "Our average client achieves a 540% ROI on ad spend, and our 95% client retention rate speaks for itself. We've driven millions in revenue for our clients, and we have the testimonials and case studies to prove it. When you work with Odin Digital, you're working with a team that has a demonstrated history of delivering results."
    },
    {
      title: "We Offer Ongoing Support & Optimization",
      description: "Your website launch is just the beginning. We provide ongoing maintenance, security updates, performance monitoring, and continuous conversion rate optimization. We analyze user behavior, A/B test elements, and make data-driven improvements to keep increasing your conversion rates and revenue over time. We're your long-term growth partner."
    }
  ];

  const faqs = [
    {
      question: "Why should I hire a web design agency brisbane that focuses on conversion, not just aesthetics?",
      answer: "A stunning website that doesn't convert is a wasted investment. Most web design agency brisbane firms focus on winning design awards, but Odin Digital focuses on winning you customers. We design for the optimal user journey, clear calls-to-action, and fast loading speeds—all factors that directly impact your conversion rate and ROI. We build websites that are not just beautiful, but are engineered to generate leads and sales, making us a profit center, not a cost."
    },
    {
      question: "How long does it take your web development brisbane team to build a new website?",
      answer: "The timeline for a new website depends on its complexity (e.g., a simple small business website brisbane vs. a complex ecommerce website brisbane). However, our process is designed for maximum efficiency and transparency. We typically deliver a full website within 6-10 weeks from the project start, provided we have prompt feedback from your team. We provide a clear project timeline and stick to it, eliminating the long delays and poor communication that frustrate clients with other agencies."
    },
    {
      question: "How much does a website development company brisbane charge for a high-converting site?",
      answer: "The cost for a high-converting website development company brisbane varies based on scope, features, and complexity. We provide transparent, fixed-price quotes based on your specific needs, ensuring no hidden costs. While our investment is competitive, our focus is on maximizing your return. Given our conversion-first approach and integration with our 540% ROI marketing strategies, our websites are designed to pay for themselves quickly through increased leads and sales."
    },
    {
      question: "Do you offer website design brisbane services for small businesses?",
      answer: "Absolutely. We work with businesses of all sizes—from Brisbane startups and small businesses to established enterprises. We offer scalable website design brisbane solutions tailored to your budget and growth stage. Whether you need a simple 5-page site or a complex multi-functional platform, we have packages and custom solutions to fit your needs."
    },
    {
      question: "What makes your Brisbane web design agency different from others?",
      answer: "Three key differentiators: (1) We're conversion-focused digital marketers, not just designers, so we build sites that generate measurable ROI. (2) We offer transparent, fixed-price quotes with no lock-in contracts—we earn your business every month. (3) We integrate your website with a full-service digital marketing ecosystem (Google Ads, SEO, Meta Ads) to create a unified growth strategy. We're not just building a site; we're building your revenue engine."
    },
    {
      question: "Can you integrate my new website with Google Ads and SEO campaigns?",
      answer: "Yes, this is one of our core strengths. We have in-house Google Ads and SEO experts who work alongside our web development team. We ensure proper tracking pixels, conversion tracking, landing page optimization, and technical SEO implementation from day one. This integration ensures your paid and organic traffic converts at the highest possible rate, maximizing your ROI across all channels."
    },
    {
      question: "What platforms do you use for ecommerce website brisbane projects?",
      answer: "We specialize in Shopify and WooCommerce for ecommerce website brisbane projects, but we also build custom solutions for unique requirements. We choose the platform based on your specific needs, budget, and growth goals. Shopify is ideal for fast deployment and ease of use, while WooCommerce offers more customization and control. We'll recommend the best fit for your business during our discovery session."
    },
    {
      question: "Do you provide website hosting and maintenance after launch?",
      answer: "Yes, we offer comprehensive website hosting, maintenance, and support packages. Our plans include server management, security updates, regular backups, uptime monitoring, and performance optimization. We also offer ongoing content updates and technical support. Our goal is to be your long-term partner, ensuring your website remains fast, secure, and optimized for conversions."
    },
    {
      question: "How do you ensure my Brisbane website ranks well on Google?",
      answer: "We build every website with technical SEO best practices from the ground up: clean code, fast load times, mobile optimization, proper heading structure, schema markup, XML sitemaps, and optimized meta tags. We also offer ongoing SEO services to improve your rankings over time through content strategy, link building, and local SEO optimization. A well-designed site is the foundation; our SEO team ensures it gets found."
    },
    {
      question: "Can you redesign my existing underperforming website?",
      answer: "Absolutely. Website redesign and optimization is one of our specialties. We conduct a comprehensive audit of your current site, identify conversion barriers and technical issues, and develop a redesign strategy to dramatically improve performance. We've rescued many Brisbane businesses from poorly designed websites and transformed them into high-converting assets. If your current site isn't delivering results, we can fix it."
    },
    {
      question: "Will my new website be mobile-friendly and responsive?",
      answer: "Yes, 100%. All of our websites are built with a mobile-first approach, ensuring a flawless experience on smartphones, tablets, and desktops. With over 60% of web traffic coming from mobile devices, mobile optimization is non-negotiable. We rigorously test across multiple devices and screen sizes to ensure consistent performance and usability."
    },
    {
      question: "What if I'm not happy with the website design?",
      answer: "We work collaboratively with you throughout the design process, providing multiple design concepts and incorporating your feedback at every stage. We don't move forward until you're satisfied. Our goal is to create a website you love that also delivers results. Revisions are built into our process, and we're committed to getting it right."
    },
    {
      question: "Do you offer website content creation and copywriting?",
      answer: "Yes, we offer professional website copywriting and content creation services. Our team includes experienced copywriters who specialize in conversion-focused, SEO-optimized content. We can handle everything from homepage copy to product descriptions to blog content. Great design needs great content to convert, and we ensure your messaging is as strong as your design."
    },
    {
      question: "How do you measure the success of a website after launch?",
      answer: "We measure success through key performance indicators (KPIs) such as conversion rate, lead generation, bounce rate, time on site, and organic search rankings. We set up comprehensive analytics and tracking from day one, and we provide regular reporting so you can see exactly how your website is performing. We also conduct ongoing A/B testing and optimization to continuously improve results."
    },
    {
      question: "Can you help with website accessibility and WCAG compliance?",
      answer: "Yes, we build websites with accessibility best practices in mind, ensuring compliance with WCAG (Web Content Accessibility Guidelines) standards. This includes proper semantic HTML, alt text for images, keyboard navigation, color contrast ratios, and screen reader compatibility. Accessible websites not only serve a wider audience but also perform better in search rankings."
    },
    {
      question: "How do I get started with a free Brisbane website audit and quote?",
      answer: "Simply click the button below to schedule your FREE, no-obligation Brisbane website audit and strategy session with one of our senior strategists. We'll analyze your current site (or discuss your new site needs), identify opportunities for improvement, and provide a detailed, transparent quote within 24 hours. There's no pressure and no obligation—just actionable insights and a clear path forward."
    }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://odindigital.com.au",
    "logo": "https://odindigital.com.au/logo.png",
    "description": "Performance-focused digital marketing agency specializing in PPC, Meta Ads, Web Design, and SEO with no lock-in contracts.",
    "founder": {
      "@type": "Person",
      "name": "Lucas Durante"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://odindigital.com.au/contact"
    },
    "sameAs": [
      "https://www.linkedin.com/company/odin-digital",
      "https://www.facebook.com/odindigital",
      "https://twitter.com/odindigital"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Odin Digital - Web Design Brisbane",
    "image": "https://odindigital.com.au/brisbane-web-design.jpg",
    "url": "https://odindigital.com.au/web-design-brisbane",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brisbane",
      "addressRegion": "QLD",
      "postalCode": "4000",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.4698,
      "longitude": 153.0251
    },
    "areaServed": {
      "@type": "City",
      "name": "Brisbane"
    },
    "priceRange": "$$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design Brisbane",
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital"
    },
    "areaServed": {
      "@type": "City",
      "name": "Brisbane"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Design and Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Conversion-Focused Website Design",
            "description": "Designing websites with clear user paths and strong calls-to-action to maximize lead generation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO-Optimized Web Development",
            "description": "Building sites with clean code, fast loading speeds, and proper technical SEO structure."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "eCommerce Website Brisbane Solutions",
            "description": "Specializing in high-performance online stores (Shopify, WooCommerce) to reduce cart abandonment."
          }
        }
      ]
    }
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

  const reviewSchema = {
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
  };

  return (
    <>
      <Helmet>
        <title>Web Design Brisbane | Conversion-Focused Website Development | Odin Digital</title>
        <meta name="description" content="Brisbane's top Web Design Agency building websites that generate leads and sales. 540% average ROI. Transparent, fixed-price process. Get your free audit today." />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
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
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background overflow-x-hidden pb-24 md:pb-0">
        <Header />
        <SideTab />

        {/* Hero Section */}
        <section className="relative isolate overflow-hidden min-h-screen flex items-center bg-white">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full">
            <div className="grid grid-cols-1 gap-16 lg:gap-20 items-center min-h-screen py-24 lg:py-32">
              
              {/* Centered Text Content */}
              <div className="space-y-8 lg:space-y-10 animate-slide-up max-w-2xl mx-auto text-center">
                {/* Main Headline */}
                <div className="space-y-6">
                  <h1 className="relative z-30 overflow-visible text-4xl md:text-5xl xl:text-6xl font-black text-charcoal leading-[0.95] tracking-tight">
                    <span className="block mb-3 lg:mb-4">Brisbane's Leading</span>
                    <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
                      Web Design Agency
                    </span>
                  </h1>
                </div>
                
                {/* Subtitle and Description */}
                <div className="space-y-6 lg:space-y-8">
                  <h2 className="text-xl md:text-2xl lg:text-2xl text-charcoal/90 font-bold leading-tight max-w-2xl">
                    Tired of Pretty Sites That Don't Generate Leads or Sales?
                  </h2>
                  
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-2xl font-light">
                    Most Brisbane web design agencies build digital brochures that look nice but don't convert. At Odin Digital, we build strategic, conversion-optimized websites designed to generate measurable ROI for your business.
                  </p>

                  <p className="text-base md:text-lg text-charcoal/70 leading-relaxed max-w-2xl font-light">
                    We're not your typical Brisbane web design agency. We're digital marketing experts who happen to build incredible websites. With a proven track record of generating $574M+ in verified client revenue and an average 540% ROI on ad spend, we understand what it takes to build websites that perform.
                  </p>
                </div>
                
                {/* Action Button */}
                <div className="pt-2 flex justify-center">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="text-lg px-12 py-6 shadow-glow"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get Your FREE Brisbane Website Audit →
                  </Button>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 break-words hyphens-auto">The Numbers Don't Lie: Our Proven Track Record</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're not just making promises; we're delivering verified, measurable results for our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <Card key={index} className="p-8 text-center hover-scale border-border/50 bg-card">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <div className="text-4xl font-bold mb-2 text-foreground">{metric.value}</div>
                    <div className="text-sm font-medium text-muted-foreground">{metric.label}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 break-words hyphens-auto">Does This Sound Familiar? The Real Cost of Bad Web Design in Brisbane.</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                You've been burned before. You know the pain of working with a Brisbane web design agency that overpromises and underdelivers. These are the problems we solve.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card hover-scale">
                  <h3 className="text-xl font-bold mb-4 text-foreground break-words hyphens-auto">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 break-words hyphens-auto">What Our Clients Say About Working With Odin Digital</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what business owners are saying about the results we deliver.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card flex flex-col">
                  <p className="text-muted-foreground mb-6 italic leading-relaxed flex-grow">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 break-words hyphens-auto">Our Brisbane Web Design & Development Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer a complete suite of website design Brisbane and development services tailored to your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-8 border-border/50 bg-card hover-scale flex flex-col">
                    <Icon className="h-12 w-12 mb-6 text-primary" />
                    <h3 className="text-2xl font-bold mb-4 text-foreground break-words hyphens-auto">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{service.description}</p>
                    <Button
                      variant="cta"
                      className="w-full h-auto py-3 px-4 whitespace-normal break-words text-center mt-auto"
                      onClick={() => window.location.href = '/contact'}
                    >
                      <span className="flex items-center justify-center gap-2 flex-wrap">
                        <span>{service.cta}</span>
                        <ArrowRight className="h-4 w-4 shrink-0" />
                      </span>
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 break-words hyphens-auto">The Odin Digital Difference: Why Brisbane Businesses Choose Us</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're not just another Brisbane web design agency. Here's what makes us different—and better.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-8 border-border/50 bg-card hover-scale">
                    <Icon className="h-10 w-10 mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-4 text-foreground break-words hyphens-auto">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 break-words hyphens-auto">Our Proven 4-Step Web Design Process for Brisbane Businesses</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We follow a transparent, efficient process to deliver high-quality websites on time and on budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card hover-scale">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-4 text-foreground break-words hyphens-auto">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 break-words hyphens-auto">Why Choose Odin Digital as Your Brisbane Web Design Partner?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                You have many options for web design agencies in Brisbane. Here's why we're the right choice for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="p-8 border-border/50 bg-card hover-scale">
                  <CheckCircle2 className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-4 text-foreground break-words hyphens-auto">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 break-words hyphens-auto">Ready to Build a High-Converting Website for Your Brisbane Business?</h2>
              <p className="text-lg md:text-xl mb-10 text-muted-foreground leading-relaxed">
                Stop wasting money on pretty websites that don't convert. It's time to invest in a strategic, results-driven website that generates measurable ROI for your Brisbane business.
              </p>
              <p className="text-base md:text-lg mb-10 text-muted-foreground leading-relaxed">
                Take the first step towards transforming your online presence. Schedule your FREE, no-obligation Brisbane website audit and strategy session with one of our senior strategists today. We'll analyze your current site (or discuss your new site needs), show you exactly what's holding you back, and provide a clear, transparent quote for how we can help you build a website that drives real business growth. What do you have to lose?
              </p>
              <Button
                variant="cta"
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="text-base md:text-lg h-14 px-8 whitespace-normal break-words text-center"
              >
                Get Your FREE Brisbane Website Audit <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Other Cities Links Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Web Design Services in Other Australian Cities</h2>
              <p className="text-muted-foreground leading-relaxed">
                We also provide web design services in{' '}
                <a href="/web-design-sydney" className="text-primary hover:underline">Web Design Sydney</a>,{' '}
                <a href="/web-design-melbourne" className="text-primary hover:underline">Web Design Melbourne</a>,{' '}
                <a href="/web-design-perth" className="text-primary hover:underline">Web Design Perth</a>,{' '}
                <a href="/web-design-adelaide" className="text-primary hover:underline">Web Design Adelaide</a>,{' '}
                <a href="/web-design-canberra" className="text-primary hover:underline">Web Design Canberra</a>, and{' '}
                <a href="/web-design-gold-coast" className="text-primary hover:underline">Web Design Gold Coast</a>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 break-words hyphens-auto">Frequently Asked Questions About Web Design Brisbane</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="text-center mt-12">
                <Button
                  variant="cta"
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="text-base md:text-lg h-14 px-8 whitespace-normal break-words text-center"
                >
                  Get Your FREE Brisbane Website Audit <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50 safe-area-inset-bottom">
          <Button
            variant="cta"
            size="lg"
            className="w-full h-12"
            onClick={() => window.location.href = '/contact'}
          >
            Get FREE Audit <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>


        <RelatedLocations 
          locations={getRelatedLocations("Brisbane", "web-design")}
          title="Web Design Services in Other Australian Cities"
        />

        <Footer />
      </div>
    </>
  );
};

export default WebDesignBrisbane;
