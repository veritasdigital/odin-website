import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { CheckCircle2, Target, Zap, TrendingUp, Users, Shield, Clock, Award, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { RelatedLocations } from "@/components/RelatedLocations";
import { getRelatedLocations, getHubForService } from "@/utils/contentClusters";

const WebDesignMelbourne = () => {
  const { openForm } = useMarketingForm();
  const locationInfo = getLocationData("melbourne");
  const hub = getHubForService("Web Design");
  const relatedLocationsList = getRelatedLocations("Melbourne", "Web Design");

  const metrics = [
    { number: "540%", label: "Average ROI" },
    { number: "95%", label: "Client Retention" },
    { number: "$574M+", label: "Revenue Generated" },
    { number: "283+", label: "Happy Clients" },
  ];

  const problems = [
    {
      icon: Target,
      title: "UX/Conversion Blind Spot",
      description: "Your website looks great but doesn't convert. Most web design agencies focus on winning design awards, not winning you customers. They build sites that impress peers, not sites that generate leads and sales.",
    },
    {
      icon: Zap,
      title: "Integration Nightmare",
      description: "Your website doesn't talk to your CRM, email marketing, or analytics tools. You're losing leads because forms don't sync, tracking doesn't work, and your sales team is flying blind.",
    },
    {
      icon: TrendingUp,
      title: "High-Cost/Low-Value Trap",
      description: "You paid $15,000+ for a website that looks pretty but doesn't move the needle. No strategy. No ROI. Just a digital brochure that sits there while your competitors eat your lunch.",
    },
  ];

  const testimonials = [
    {
      name: "Liam C",
      company: "Krush Organics",
      text: "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
    },
    {
      name: "Will Wright",
      company: "The Mining Store",
      text: "We've been working with Odin Digital for over 2 years now and they've consistently delivered exceptional results. Our website conversions increased by 340% and our overall digital marketing ROI has been outstanding.",
    },
    {
      name: "Sarah M",
      company: "Adriatic Furniture",
      text: "After struggling with multiple web design agencies that delivered beautiful sites that didn't convert, Odin Digital finally gave us what we needed - a website that actually generates leads and drives sales. Best investment we've made.",
    },
  ];

  const services = [
    {
      icon: Target,
      title: "Conversion-Focused Website Design",
      description: "We don't just make your site look good - we design it to convert. Clear user paths, strong calls-to-action, and strategic placement of conversion elements mean more leads and sales.",
    },
    {
      icon: Zap,
      title: "SEO-Optimized Web Development",
      description: "Clean code, fast loading speeds, and proper technical SEO structure built in from day one. Your site will rank in Google and your customers will find you.",
    },
    {
      icon: TrendingUp,
      title: "eCommerce Website Melbourne Solutions",
      description: "High-performance online stores (Shopify, WooCommerce) designed to reduce cart abandonment and maximize revenue. We build stores that sell.",
    },
    {
      icon: Users,
      title: "CRM & Marketing Integration",
      description: "Seamless integration with your existing tools (HubSpot, Salesforce, ActiveCampaign, etc.). Forms sync, tracking works, and your team has the data they need.",
    },
  ];

  const differentiators = [
    {
      icon: Target,
      title: "Conversion-First Design",
      description: "We design for ROI, not awards. Every element serves a strategic purpose.",
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Your website talks to your CRM, email tools, and analytics platforms from day one.",
    },
    {
      icon: Shield,
      title: "No Lock-in Contracts",
      description: "Month-to-month agreements. Stay because we deliver results, not because you're trapped.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "540% average ROI, $574M+ generated for clients, 95% retention rate.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We audit your current site (if you have one), understand your business goals, and map out a conversion-focused strategy.",
    },
    {
      number: "02",
      title: "Design & Development",
      description: "We build your site with conversion, speed, and SEO in mind. You get regular updates and have full input throughout.",
    },
    {
      number: "03",
      title: "Integration & Testing",
      description: "We connect your site to your CRM, email tools, and analytics. Everything is tested thoroughly before launch.",
    },
    {
      number: "04",
      title: "Launch & Optimize",
      description: "We launch your site and monitor performance closely. Then we optimize based on real data to maximize conversions.",
    },
  ];

  const whyChooseUs = [
    {
      title: "We Focus on ROI, Not Just Design",
      description: "Beautiful design is table stakes. We focus on conversion optimization, user experience, and integration with your marketing stack to deliver measurable business results.",
    },
    {
      title: "No Lock-in Contracts",
      description: "We earn your business every month. If we're not delivering, you can leave. This keeps us accountable and focused on your success.",
    },
    {
      title: "Full-Service Digital Marketing",
      description: "We don't just build websites - we drive traffic to them with Google Ads, SEO, and Meta Ads. Your website becomes part of a cohesive revenue-generating system.",
    },
    {
      title: "Transparent Pricing & Communication",
      description: "Fixed-price quotes. Clear timelines. Regular updates. No surprises. We respect your time and your budget.",
    },
  ];

  const faqs = [
    {
      question: "Why should I hire a web design agency melbourne that focuses on conversion, not just aesthetics?",
      answer: "A stunning website that doesn't convert is a wasted investment. Most web design agency melbourne firms focus on winning design awards, but Odin Digital focuses on winning you customers. We design for the optimal user journey, clear calls-to-action, and fast loading speeds—all factors that directly impact your conversion rate and ROI. We build websites that are not just beautiful, but are engineered to generate leads and sales, making us a profit center, not a cost. This eliminates the common Melbourne frustration of having a site that looks great but fails to deliver.",
    },
    {
      question: "How long does it take your web development melbourne team to build a new website?",
      answer: "The timeline for a new website depends on its complexity (e.g., a simple small business website melbourne vs. a complex ecommerce website melbourne). However, our process is designed for maximum efficiency and transparency. We typically deliver a full website within 6-10 weeks from the project start, provided we have prompt feedback from your team. We provide a clear project timeline and stick to it, eliminating the long delays and poor communication that frustrate clients with other agencies.",
    },
    {
      question: "How much does a website development company melbourne charge for a high-converting site?",
      answer: "The cost for a high-converting website development company melbourne varies based on scope, features, and complexity. We provide transparent, fixed-price quotes based on your specific needs, ensuring no hidden costs. While our investment is competitive, our focus is on maximizing your return. Given our conversion-first approach and integration with our 540% ROI marketing strategies, our websites are designed to pay for themselves quickly through increased leads and sales.",
    },
    {
      question: "What makes your melbourne web design approach different from other agencies?",
      answer: "We're a performance marketing agency first, web design agency second. This means we approach every website as a conversion tool, not just a digital brochure. We integrate your site with your entire marketing stack (CRM, email, analytics) from day one, and we optimize based on real data. Plus, we offer no lock-in contracts—you stay because we deliver results, not because you're trapped.",
    },
    {
      question: "Can you integrate my new website with my existing CRM and marketing tools?",
      answer: "Absolutely. Seamless integration is one of our core differentiators. We work with all major platforms (HubSpot, Salesforce, ActiveCampaign, Mailchimp, Google Analytics, Facebook Pixel, etc.). We ensure your forms sync properly, tracking works correctly, and your sales team has the data they need. No more integration nightmares.",
    },
    {
      question: "Do you offer ongoing support after the website launches, or is it a one-time build?",
      answer: "We offer comprehensive ongoing support and optimization. After launch, we monitor performance, make data-driven improvements, and provide technical support. You can choose month-to-month support packages or integrate your website into our full-service digital marketing programs (which include Google Ads and SEO) for a complete revenue-generating system.",
    },
    {
      question: "How do you ensure my website will actually generate leads and sales, not just look good?",
      answer: "We use a conversion-first design methodology. This means clear user paths, strategic CTA placement, optimized forms, fast loading speeds, mobile responsiveness, and integration with your marketing tools. We also A/B test key elements and optimize based on real user data. Unlike traditional web design agencies that hand you a site and disappear, we actively work to improve your conversion rate over time.",
    },
    {
      question: "Can I see examples of websites you've built for Melbourne businesses?",
      answer: "Yes, we're happy to share case studies and portfolio examples during your free consultation. We've worked with businesses across multiple industries in Melbourne and throughout Australia, delivering measurable results like increased conversion rates, higher organic rankings, and significant ROI improvements.",
    },
    {
      question: "What if I already have a website? Can you improve it, or do I need a complete rebuild?",
      answer: "We can do either. Sometimes a strategic redesign or conversion optimization of your existing site is the most cost-effective approach. Other times, a complete rebuild makes more sense (especially if your current site has technical debt or poor code). We'll audit your current site during the free consultation and recommend the best path forward based on your goals and budget.",
    },
    {
      question: "Do you provide SEO services alongside web design melbourne?",
      answer: "Yes. We offer comprehensive <Link to='/services/seo' className='text-primary hover:underline'>SEO</Link> services and build all websites with technical SEO best practices from day one (clean code, fast loading, proper structure, mobile optimization). Many of our clients combine web design with ongoing SEO and <Link to='/services/google-ads' className='text-primary hover:underline'>Google Ads</Link> management for maximum visibility and lead generation.",
    },
    {
      question: "What platforms do you build websites on (WordPress, Shopify, custom, etc.)?",
      answer: "We work with multiple platforms depending on your needs. For ecommerce, we primarily use Shopify and WooCommerce. For business websites, we often use WordPress (highly customizable and easy for you to manage) or custom-built solutions if you need something specific. We recommend the best platform for your goals, budget, and technical requirements.",
    },
    {
      question: "How do you handle website security and ongoing maintenance?",
      answer: "Security is built in from day one (SSL certificates, secure hosting, regular updates, etc.). We also offer ongoing maintenance packages that include security monitoring, software updates, backups, and technical support. You'll never have to worry about your site being hacked or going down.",
    },
    {
      question: "What happens if I'm not happy with the design during the project?",
      answer: "We work collaboratively throughout the process and provide regular check-ins and design reviews. You have input at every stage, and we incorporate your feedback. If something isn't working, we revise it until you're happy. Our goal is to deliver a website that exceeds your expectations and drives business results.",
    },
    {
      question: "Can you help me with website copywriting and content creation?",
      answer: "Yes. We offer conversion-focused copywriting as part of our web design packages. Our team understands how to write copy that converts (not just sounds good). We can also help with content strategy, blog creation, and ongoing content marketing if needed.",
    },
    {
      question: "How soon can we start, and what's the first step?",
      answer: "We can typically start within 1-2 weeks of signing the agreement. The first step is to book a free consultation where we'll audit your current situation (if you have a website), discuss your goals, and outline a clear plan and timeline. From there, we'll provide a transparent fixed-price quote and get started as soon as you're ready.",
    },
    {
      question: "Do you work with businesses outside of Melbourne?",
      answer: "Yes. While we specialize in serving Melbourne businesses, we work with clients across Australia and internationally. Our process is designed to be fully remote-friendly, with regular video check-ins and collaborative tools. Distance is not a barrier to delivering exceptional results.",
    },
  ];

  const otherCities = [
    { name: "Sydney", url: "/web-design-sydney" },
    { name: "Brisbane", url: "/web-design-brisbane" },
    { name: "Perth", url: "/web-design-perth" },
    { name: "Adelaide", url: "/web-design-adelaide" },
    { name: "Canberra", url: "/web-design-canberra" },
    { name: "Gold Coast", url: "/web-design-gold-coast" },
  ];

  // Schema markup
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://growth-conduit-central.lovable.app/",
    "logo": "https://growth-conduit-central.lovable.app/logo.png",
    "description": "Performance-focused digital marketing agency specializing in PPC, Meta Ads, Web Design, and SEO with no lock-in contracts.",
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
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Odin Digital - Web Design Melbourne",
    "image": "https://growth-conduit-central.lovable.app/melbourne-web-design.jpg",
    "url": "https://growth-conduit-central.lovable.app/web-design-melbourne",
    "telephone": "+61-XXX-XXX-XXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "postalCode": "3000",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -37.8136,
      "longitude": 144.9631
    },
    "areaServed": {
      "@type": "City",
      "name": "Melbourne"
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
    "serviceType": "Web Design Melbourne",
    "provider": {
      "@type": "Organization",
      "name": "Odin Digital"
    },
    "areaServed": {
      "@type": "City",
      "name": "Melbourne"
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
            "name": "eCommerce Website Melbourne Solutions",
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
        "text": faq.answer.replace(/<[^>]*>/g, '')
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
        <title>Web Design Melbourne | Conversion-Focused Website Development | Odin Digital</title>
        <meta name="description" content="Melbourne's top Web Design Agency building websites that generate leads and sales. 540% average ROI. Seamless CRM integration. Get your free audit today." />
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

      <div className="min-h-screen bg-background">
        <Header />

        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs items={[
            { label: "Services", path: "/services" },
            { label: "Melbourne Web Design", path: "/services/web-design-melbourne" }
          ]} />
        </div>

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
                    <span className="block mb-3 lg:mb-4">Melbourne's Leading</span>
                    <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
                      Web Design Agency
                    </span>
                  </h1>
                </div>
                
                {/* Subtitle and Description */}
                <div className="space-y-6 lg:space-y-8">
                  <h2 className="text-xl md:text-2xl lg:text-2xl text-charcoal/90 font-bold leading-tight max-w-2xl">
                    Stop Paying for Ferrari Websites with Bicycle Wheels. You Need a Site That Actually Converts.
                  </h2>
                  
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-2xl font-light">
                    Most web design agencies charge $15,000+ for websites that look stunning but don't generate leads or sales. They focus on winning design awards, not winning you customers.
                  </p>

                  <p className="text-base md:text-lg text-charcoal/70 leading-relaxed max-w-2xl font-light">
                    At Odin Digital, we build websites that are beautiful AND convert. Conversion-focused design. Seamless CRM integration. Lightning-fast performance. SEO-optimized from day one. We've generated $574M+ for our clients with a 540% average ROI.
                  </p>
                </div>
                
                {/* Action Button */}
                <div className="pt-2 flex justify-center">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="text-lg px-12 py-6 shadow-glow"
                    onClick={openForm}
                  >
                    Get Your FREE Melbourne Web Design Quote →
                  </Button>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 break-words overflow-wrap-anywhere">
                    {metric.number}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground break-words overflow-wrap-anywhere">
                    {metric.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Problem-Agitation Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              Why Your Website Isn't Working
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto break-words overflow-wrap-anywhere">
              Most Melbourne businesses are frustrated with their websites. Here's why:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <problem.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 break-words overflow-wrap-anywhere">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground break-words overflow-wrap-anywhere leading-relaxed">
                    {problem.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 break-words overflow-wrap-anywhere">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <p className="text-muted-foreground mb-4 italic break-words overflow-wrap-anywhere leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="font-bold break-words overflow-wrap-anywhere">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground break-words overflow-wrap-anywhere">
                    {testimonial.company}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              Our Web Design and Development Services
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto break-words overflow-wrap-anywhere">
              We offer comprehensive web design and development services tailored to your business needs.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 break-words overflow-wrap-anywhere">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground break-words overflow-wrap-anywhere leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6 break-words overflow-wrap-anywhere">
                We also integrate seamlessly with your existing <Link to="/services/google-ads" className="text-primary hover:underline">Google Ads</Link>, <Link to="/services/seo" className="text-primary hover:underline">SEO</Link>, and <Link to="/services/meta-ads" className="text-primary hover:underline">Meta Ads</Link> strategies for maximum impact.
              </p>
              <Button
                onClick={openForm}
                size="lg"
                className="bg-gradient-primary text-primary-foreground shadow-primary hover:shadow-glow"
              >
                Book Your Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 break-words overflow-wrap-anywhere">
              Why Choose Odin Digital
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentiators.map((diff, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                  <diff.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-lg sm:text-xl font-bold mb-3 break-words overflow-wrap-anywhere">
                    {diff.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground break-words overflow-wrap-anywhere leading-relaxed">
                    {diff.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 break-words overflow-wrap-anywhere">
              Our Web Design Process
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto break-words overflow-wrap-anywhere">
              A proven, transparent process that delivers results.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="p-6 hover:shadow-xl transition-shadow h-full">
                    <div className="text-4xl sm:text-5xl font-bold text-primary/20 mb-4 break-words overflow-wrap-anywhere">
                      {step.number}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 break-words overflow-wrap-anywhere">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground break-words overflow-wrap-anywhere leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 break-words overflow-wrap-anywhere">
              Why Melbourne Businesses Choose Odin Digital
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 break-words overflow-wrap-anywhere">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground break-words overflow-wrap-anywhere leading-relaxed">
                    {reason.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 break-words overflow-wrap-anywhere">
              Ready to Build a Website That Actually Converts?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto break-words overflow-wrap-anywhere leading-relaxed">
              Stop settling for websites that look good but don't generate leads or sales. Let's build you a conversion-focused website that drives real business results.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto break-words overflow-wrap-anywhere leading-relaxed">
              Book a free consultation with one of our web design strategists. We'll audit your current site (if you have one), discuss your goals, and show you exactly how we can help.
            </p>
            <Button
              onClick={openForm}
              size="lg"
              className="bg-gradient-primary text-primary-foreground px-8 py-6 text-base sm:text-lg rounded-lg shadow-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Website Audit
            </Button>
          </div>
        </section>

        {/* Other Cities Links */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <p className="text-center text-muted-foreground break-words overflow-wrap-anywhere">
              We also offer web design services in:{" "}
              {otherCities.map((city, index) => (
                <span key={city.url}>
                  <Link to={city.url} className="text-primary hover:underline">
                    Web Design {city.name}
                  </Link>
                  {index < otherCities.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 break-words overflow-wrap-anywhere">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline break-words overflow-wrap-anywhere py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground break-words overflow-wrap-anywhere leading-relaxed pb-4">
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t z-50">
          <Button
            onClick={openForm}
            className="w-full bg-gradient-primary text-primary-foreground shadow-primary hover:shadow-glow"
            size="lg"
          >
            Get Your Free Audit
          </Button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default WebDesignMelbourne;
