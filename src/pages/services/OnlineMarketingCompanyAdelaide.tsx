import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Award, Target, BarChart3, Search, MousePointerClick, Share2, Code, FileText, Zap } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OnlineMarketingCompanyAdelaide = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Adelaide | Online Marketing Company</title>
        <meta name="description" content="Digital marketing experts in Adelaide. SEO, Google Ads, Meta Ads, web design, social media. 200+ Adelaide clients, 540% average ROI." />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://growth-conduit-central.lovable.app/#local-business",
                "name": "Odin Digital",
                "url": "https://growth-conduit-central.lovable.app/",
                "logo": "https://growth-conduit-central.lovable.app/logo.png",
                "description": "Digital marketing experts in Adelaide. SEO, Google Ads, Meta Ads, web design, social media marketing.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Adelaide",
                  "addressRegion": "SA",
                  "addressCountry": "AU"
                },
                "email": "hello@odindigital.com.au",
                "areaServed": {
                  "@type": "City",
                  "name": "Adelaide"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://growth-conduit-central.lovable.app/online-marketing-company-adelaide#webpage",
                "url": "https://growth-conduit-central.lovable.app/online-marketing-company-adelaide",
                "name": "Digital Marketing Adelaide | Online Marketing Company",
                "description": "Digital marketing experts in Adelaide. SEO, Google Ads, Meta Ads, web design, social media. 200+ Adelaide clients, 540% average ROI.",
                "inLanguage": "en-AU",
                "datePublished": "2024-01-01",
                "dateModified": "2024-01-01"
              },
              {
                "@type": "Service",
                "@id": "https://growth-conduit-central.lovable.app/online-marketing-company-adelaide#seo",
                "name": "Search Engine Optimisation (SEO)",
                "description": "SEO services for Adelaide businesses to improve search rankings and organic traffic.",
                "provider": {
                  "@id": "https://growth-conduit-central.lovable.app/#local-business"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Adelaide"
                },
                "serviceType": "SEO"
              },
              {
                "@type": "Service",
                "@id": "https://growth-conduit-central.lovable.app/online-marketing-company-adelaide#google-ads",
                "name": "Google Ads Management",
                "description": "Google Ads management services for Adelaide businesses to generate leads and sales.",
                "provider": {
                  "@id": "https://growth-conduit-central.lovable.app/#local-business"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Adelaide"
                },
                "serviceType": "PPC Advertising"
              },
              {
                "@type": "Service",
                "@id": "https://growth-conduit-central.lovable.app/online-marketing-company-adelaide#meta-ads",
                "name": "Meta Ads Management",
                "description": "Meta Ads (Facebook and Instagram) management for Adelaide businesses.",
                "provider": {
                  "@id": "https://growth-conduit-central.lovable.app/#local-business"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Adelaide"
                },
                "serviceType": "Social Media Advertising"
              },
              {
                "@type": "Service",
                "@id": "https://growth-conduit-central.lovable.app/online-marketing-company-adelaide#web-design",
                "name": "Web Design and Development",
                "description": "Professional web design and development for Adelaide businesses.",
                "provider": {
                  "@id": "https://growth-conduit-central.lovable.app/#local-business"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Adelaide"
                },
                "serviceType": "Web Design"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much does digital marketing cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Digital marketing costs vary depending on your goals and channels. We offer flexible pricing starting from $2,000/month for small businesses to $10,000+/month for larger enterprises. We can work within your budget."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to see results?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Google Ads can deliver results immediately. SEO typically takes 3–6 months to see significant results. Social media results depend on your strategy but usually take 2–3 months. We set realistic expectations upfront."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you guarantee results?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We can't guarantee specific rankings or traffic numbers because algorithms change. However, we can guarantee that we'll use proven strategies, track results carefully, and continuously optimise for better performance. Our 540% average ROI speaks to the effectiveness of our approach."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you work with small businesses?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. We work with businesses of all sizes, from startups to large enterprises. We have affordable options for small businesses."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What if I'm not happy with the results?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We work on a month-to-month basis with no long-term contracts. If you're not happy, you can leave. However, we're confident in our work and have a 95% client retention rate."
                    }
                  }
                ]
              },
              {
                "@type": "AggregateRating",
                "@id": "https://growth-conduit-central.lovable.app/online-marketing-company-adelaide#rating",
                "ratingValue": "4.9",
                "ratingCount": "200",
                "bestRating": "5",
                "worstRating": "1"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t border-border md:hidden">
          <Link to="/contact">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Schedule Free Consultation
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
          {/* Floating Circles Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Digital Marketing Experts for Adelaide Businesses
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 text-muted-foreground leading-relaxed">
                Your business is competing in an increasingly digital world. Customers are searching online, researching on social media, and making purchasing decisions based on what they find. If you're not visible online, you're losing customers to competitors who are. At Odin Digital, we're Adelaide's leading digital marketing experts. We've helped over 200 Adelaide businesses grow through integrated digital marketing strategies that deliver real results. Whether you need SEO, Google Ads, Meta Ads, social media marketing, or a complete digital marketing strategy, we deliver measurable results that impact your bottom line.
              </p>

              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                  Schedule Free Digital Marketing Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Adelaide Businesses Need Digital Marketing */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
                Why Adelaide Businesses Need Digital Marketing
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Adelaide's business landscape is competitive and increasingly digital. Your customers are no longer looking in the Yellow Pages—they're searching on Google, scrolling through Instagram, and asking for recommendations on Facebook. If your business isn't showing up in these places, you're invisible to potential customers.
                </p>
                
                <p className="text-lg text-muted-foreground mb-6">
                  The opportunity is massive. Adelaide businesses that embrace digital marketing are seeing unprecedented growth. They're attracting more leads, converting more customers, and growing faster than their competitors. But many Adelaide businesses are falling behind, stuck with outdated marketing strategies that no longer work.
                </p>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Strategic digital marketing can transform your business. Whether you're a professional services firm in the CBD, a manufacturer in Edinburgh Parks, a winery in the Adelaide Hills, or a retailer in Glenelg, the right digital marketing strategy can help you reach more customers, generate more leads, and grow your revenue.
                </p>
                
                <p className="text-lg text-muted-foreground">
                  Our clients see real results: increased website traffic, more qualified leads, higher conversion rates, and measurable ROI. We've helped Adelaide businesses achieve an average 540% return on investment through integrated digital marketing strategies that work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Digital Marketing Challenge */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
                The Digital Marketing Challenge Adelaide Businesses Face
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Target className="h-6 w-6 text-primary mr-2" />
                    The Expertise Barrier
                  </h3>
                  <p className="text-muted-foreground">
                    Digital marketing is complex and constantly changing. SEO, Google Ads, Meta Ads, social media—it's overwhelming. Most Adelaide business owners don't have the time or expertise to manage it effectively, and hiring internally is expensive.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <TrendingUp className="h-6 w-6 text-primary mr-2" />
                    The Cost Barrier
                  </h3>
                  <p className="text-muted-foreground">
                    Many Adelaide agencies charge premium prices that small to medium-sized businesses can't afford. Others deliver poor quality work that wastes your budget without delivering results.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <BarChart3 className="h-6 w-6 text-primary mr-2" />
                    The Accountability Problem
                  </h3>
                  <p className="text-muted-foreground">
                    Too many agencies operate in a black box. You pay the bills but have no idea what they're doing or whether it's working. There's no transparency, no clear reporting, and no accountability.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Zap className="h-6 w-6 text-primary mr-2" />
                    The Fragmentation Problem
                  </h3>
                  <p className="text-muted-foreground">
                    You hire one agency for SEO, another for Google Ads, and someone else for social media. Nothing is integrated, you're managing multiple vendors, and your marketing strategy is fragmented and inefficient.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  <strong>That's where Odin Digital comes in.</strong> We provide integrated digital marketing for Adelaide businesses—SEO, Google Ads, Meta Ads, social media, and web design—all managed by one expert team with radical transparency and a proven track record of delivering results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Adelaide Businesses Choose Odin Digital */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
                Why Adelaide Businesses Choose Odin Digital
              </h2>

              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">We're Digital Marketing Experts</h3>
                    <p className="text-muted-foreground">
                      Digital marketing is all we do. Our team specialises in SEO, Google Ads, Meta Ads, social media marketing, and web design. We've managed millions in ad spend, generated thousands of leads, and helped hundreds of Adelaide businesses grow. We know what works and what doesn't.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">We Understand Adelaide</h3>
                    <p className="text-muted-foreground">
                      We understand the Adelaide market, the competitive landscape, and the unique challenges Adelaide businesses face. From the CBD to Glenelg, from the Hills to the northern suburbs, we know how to reach Adelaide customers effectively.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Integrated Digital Marketing</h3>
                    <p className="text-muted-foreground">
                      We don't just do SEO or just Google Ads. We provide integrated digital marketing where all channels work together as part of a unified strategy. Your SEO supports your paid ads, your social media amplifies your content, and your website converts the traffic. Everything is aligned toward one goal: growing your business.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Clear ROI and Accountability</h3>
                    <p className="text-muted-foreground">
                      We believe in radical transparency. You'll know exactly what we're doing, why we're doing it, and what results we're achieving. We provide clear reporting, regular communication, and demonstrate ROI every month. Our clients achieve an average 540% return on investment.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Affordable, High-Quality Service</h3>
                    <p className="text-muted-foreground">
                      We offer premium digital marketing services at prices Adelaide businesses can afford. Whether you're a small business just getting started or an established enterprise looking to scale, we have flexible pricing options that deliver exceptional value.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Strategic Approach</h3>
                    <p className="text-muted-foreground">
                      We don't do cookie-cutter marketing. Every Adelaide business is different, and we take the time to understand your business, your customers, your competitors, and your goals. We develop custom strategies designed specifically for your business.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Long-Term Partnership</h3>
                    <p className="text-muted-foreground">
                      We're not interested in short-term wins. We build long-term partnerships with our Adelaide clients. Our 95% client retention rate speaks to the quality of our work and the results we deliver. When you succeed, we succeed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Learn More About Our Approach
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
                Our Digital Marketing Services for Adelaide Businesses
              </h2>

              <div className="space-y-8">
                {/* SEO */}
                <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Search className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">Search Engine Optimisation (SEO)</h3>
                      <p className="text-muted-foreground mb-4">
                        When Adelaide customers search for your products or services, you need to show up on the first page of Google. Our SEO services help you rank higher, attract more organic traffic, and generate qualified leads.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Local Adelaide SEO to dominate local search results</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Technical SEO to improve site performance and rankings</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Content strategy and creation to attract and engage customers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Link building and authority development</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Google Ads */}
                <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MousePointerClick className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">Google Ads Management</h3>
                      <p className="text-muted-foreground mb-4">
                        Google Ads delivers immediate results. When managed correctly, it's one of the most cost-effective ways to generate leads and sales for Adelaide businesses. We create and manage high-performing campaigns that maximise your ROI.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Search ads to capture high-intent Adelaide customers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Display ads for brand awareness and remarketing</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Shopping ads for e-commerce businesses</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Continuous optimisation to lower costs and improve results</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Meta Ads */}
                <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Share2 className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">Meta Ads Management (Facebook & Instagram)</h3>
                      <p className="text-muted-foreground mb-4">
                        Adelaide customers spend hours every day on Facebook and Instagram. Meta Ads help you reach them with targeted, engaging campaigns that build awareness, generate leads, and drive sales.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Precise audience targeting based on demographics, interests, and behaviour</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Creative ad design and copywriting that converts</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Retargeting campaigns to convert warm leads</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Detailed reporting and performance tracking</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Social Media Marketing */}
                <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">Social Media Marketing</h3>
                      <p className="text-muted-foreground mb-4">
                        Social media is where Adelaide customers discover brands, engage with content, and make purchasing decisions. We help you build a strong social media presence that attracts followers, builds trust, and drives business results.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Content creation and posting across all major platforms</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Community management and engagement</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Influencer partnerships and collaborations</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Social media strategy and planning</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Web Design */}
                <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">Web Design and Development</h3>
                      <p className="text-muted-foreground mb-4">
                        Your website is your digital shopfront. It needs to look professional, load quickly, and convert visitors into customers. We design and build high-performing websites for Adelaide businesses.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Custom website design tailored to your brand</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Mobile-responsive design for all devices</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Fast loading speeds and technical optimisation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Conversion-focused design to turn visitors into customers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Content Marketing */}
                <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">Content Marketing</h3>
                      <p className="text-muted-foreground mb-4">
                        Quality content attracts customers, builds trust, and supports all your other marketing efforts. We create valuable content that resonates with Adelaide audiences and drives business results.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Blog posts and articles optimised for SEO</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Case studies and customer success stories</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Video content and multimedia production</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Email newsletters and marketing campaigns</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
                Our Digital Marketing Process
              </h2>

              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Discovery and Audit</h3>
                    <p className="text-muted-foreground mb-2">
                      We start by understanding your business, your customers, your competitors, and your goals. We audit your existing digital presence to identify opportunities and gaps.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>What you get:</strong> Comprehensive audit report, competitive analysis, and strategic recommendations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
                    <p className="text-muted-foreground mb-2">
                      We develop a custom digital marketing strategy tailored to your business. This includes channel selection, budget allocation, target audience definition, and key performance indicators.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>What you get:</strong> Detailed strategy document, campaign roadmap, and clear success metrics.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                    <p className="text-muted-foreground mb-2">
                      We execute your strategy across all channels. This includes campaign setup, content creation, ad design, website optimisation, and technical implementation.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>What you get:</strong> Fully implemented campaigns, optimised website, and active marketing channels.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Monitoring and Optimisation</h3>
                    <p className="text-muted-foreground mb-2">
                      We continuously monitor campaign performance and make data-driven optimisations to improve results. We test, iterate, and refine to maximise ROI.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>What you get:</strong> Ongoing optimisation, A/B testing, and performance improvements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      5
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reporting and Communication</h3>
                    <p className="text-muted-foreground mb-2">
                      We provide transparent reporting on all key metrics. You'll know exactly what's working, what isn't, and what we're doing to improve results.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>What you get:</strong> Monthly performance reports, regular strategy calls, and ongoing communication.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      6
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Growth and Scaling</h3>
                    <p className="text-muted-foreground mb-2">
                      As we identify what works, we scale successful campaigns and explore new opportunities to drive even better results.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>What you get:</strong> Scaled campaigns, expanded reach, and accelerated business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Types Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
                Digital Marketing for Different Adelaide Business Types
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <h3 className="text-xl font-semibold mb-3">Professional Services</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Challenge:</strong> Lawyers, accountants, and consultants need to build trust and demonstrate expertise.
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Our solution:</strong> Content marketing, SEO, and Google Ads to position you as the expert and generate qualified leads.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Key benefits:</strong> Higher-quality leads, improved brand authority, measurable ROI.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <h3 className="text-xl font-semibold mb-3">Manufacturing</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Challenge:</strong> Adelaide manufacturers need to reach B2B customers and showcase capabilities.
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Our solution:</strong> LinkedIn advertising, SEO, and web design to reach decision-makers and showcase your expertise.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Key benefits:</strong> More qualified enquiries, stronger online presence, better lead quality.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <h3 className="text-xl font-semibold mb-3">Wine and Tourism</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Challenge:</strong> Adelaide Hills wineries and tourism operators need to attract visitors and sell experiences.
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Our solution:</strong> Instagram marketing, Google Ads, and content marketing to showcase experiences and drive bookings.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Key benefits:</strong> More bookings, increased brand awareness, higher visitor numbers.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <h3 className="text-xl font-semibold mb-3">Retail and E-Commerce</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Challenge:</strong> Adelaide retailers need to compete with online giants and drive both foot traffic and online sales.
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Our solution:</strong> E-commerce SEO, Google Shopping ads, and social media marketing to drive sales across all channels.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Key benefits:</strong> Increased sales, omnichannel presence, competitive advantage.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <h3 className="text-xl font-semibold mb-3">Hospitality</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Challenge:</strong> Adelaide restaurants, hotels, and cafes need to attract customers in a competitive market.
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Our solution:</strong> Local SEO, Meta Ads, and social media marketing to drive foot traffic and bookings.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Key benefits:</strong> More reservations, increased foot traffic, stronger local presence.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                  <h3 className="text-xl font-semibold mb-3">Healthcare and Medical</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Challenge:</strong> Adelaide healthcare providers need to attract new patients while maintaining compliance.
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Our solution:</strong> Local SEO, Google Ads, and content marketing designed for healthcare compliance.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Key benefits:</strong> More new patients, improved online reputation, compliant marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How much does digital marketing cost?</AccordionTrigger>
                  <AccordionContent>
                    Digital marketing costs vary depending on your goals and channels. We offer flexible pricing starting from $2,000/month for small businesses to $10,000+/month for larger enterprises. We can work within your budget to deliver maximum value and ROI. During our initial consultation, we'll discuss your goals and recommend a budget that makes sense for your business.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How long does it take to see results?</AccordionTrigger>
                  <AccordionContent>
                    It depends on the channel. Google Ads can deliver results immediately—often within the first week. SEO typically takes 3–6 months to see significant results as we build authority and improve rankings. Social media results depend on your strategy but usually take 2–3 months to gain traction. We set realistic expectations upfront and provide regular updates on progress.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Can you guarantee results?</AccordionTrigger>
                  <AccordionContent>
                    We can't guarantee specific rankings or traffic numbers because search algorithms and market conditions change constantly. However, we can guarantee that we'll use proven strategies, track results carefully, and continuously optimise for better performance. Our 540% average ROI and 95% client retention rate speak to the effectiveness of our approach.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you work with small businesses?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely. We work with businesses of all sizes, from startups to large enterprises. We have affordable options specifically designed for small Adelaide businesses, and we're committed to delivering exceptional value regardless of your budget. Many of our most successful clients started as small businesses and grew significantly with our help.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>What if I'm not happy with the results?</AccordionTrigger>
                  <AccordionContent>
                    We work on a month-to-month basis with no long-term contracts. If you're not happy, you can leave at any time. However, we're confident in our work and have a 95% client retention rate. We believe our results speak for themselves, and we're committed to earning your business every month.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>How do you measure success?</AccordionTrigger>
                  <AccordionContent>
                    We measure success based on the metrics that matter to your business: leads, sales, revenue, and ROI. We provide transparent reporting on all key performance indicators, including website traffic, conversion rates, cost per lead, and return on ad spend. You'll always know exactly how your campaigns are performing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>Do I need to use all your services, or can I choose just one?</AccordionTrigger>
                  <AccordionContent>
                    You can choose individual services, but we recommend an integrated approach for best results. When SEO, paid ads, social media, and web design work together as part of a unified strategy, they amplify each other's effectiveness. That said, we're flexible and can start with one service and expand as you see results.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>Will I have ongoing support, or is this a one-time project?</AccordionTrigger>
                  <AccordionContent>
                    Digital marketing is ongoing. Markets change, algorithms evolve, and competitors adapt. We provide continuous support, monitoring, and optimisation to ensure your campaigns continue to deliver results over time. We're committed to long-term partnerships with our clients.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger>Do I need a new website, or can you work with my existing one?</AccordionTrigger>
                  <AccordionContent>
                    We can work with your existing website in most cases. During our initial audit, we'll assess your current site and recommend improvements. If your website needs significant work, we'll provide recommendations and can handle the redesign. If it's performing well, we'll optimise it and integrate it into your digital marketing strategy.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger>How do you stay current with digital marketing trends?</AccordionTrigger>
                  <AccordionContent>
                    Our team continuously trains on the latest digital marketing strategies, algorithm updates, and platform changes. We attend industry conferences, maintain certifications with Google and Meta, and test new strategies before rolling them out to clients. Digital marketing is all we do, so we're always at the forefront of industry developments.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Related Links Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Related Services & Locations
              </h2>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                <Link to="/seo-agency" className="bg-card p-3 sm:p-4 rounded-lg shadow-card border border-border hover:shadow-lg hover:border-primary/50 transition-all group text-center">
                  <h3 className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">SEO Agency</h3>
                </Link>
                <Link to="/ppc-agency" className="bg-card p-3 sm:p-4 rounded-lg shadow-card border border-border hover:shadow-lg hover:border-primary/50 transition-all group text-center">
                  <h3 className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">PPC Agency</h3>
                </Link>
                <Link to="/google-ads-adelaide" className="bg-card p-3 sm:p-4 rounded-lg shadow-card border border-border hover:shadow-lg hover:border-primary/50 transition-all group text-center">
                  <h3 className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">Google Ads Adelaide</h3>
                </Link>
                <Link to="/facebook-ads-adelaide" className="bg-card p-3 sm:p-4 rounded-lg shadow-card border border-border hover:shadow-lg hover:border-primary/50 transition-all group text-center">
                  <h3 className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">Facebook Ads Adelaide</h3>
                </Link>
                <Link to="/web-design-adelaide" className="bg-card p-3 sm:p-4 rounded-lg shadow-card border border-border hover:shadow-lg hover:border-primary/50 transition-all group text-center">
                  <h3 className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">Web Design Adelaide</h3>
                </Link>
                <Link to="/online-marketing-company-melbourne" className="bg-card p-3 sm:p-4 rounded-lg shadow-card border border-border hover:shadow-lg hover:border-primary/50 transition-all group text-center">
                  <h3 className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">Melbourne Digital Marketing</h3>
                </Link>
                <Link to="/online-marketing-company-sydney" className="bg-card p-3 sm:p-4 rounded-lg shadow-card border border-border hover:shadow-lg hover:border-primary/50 transition-all group text-center">
                  <h3 className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">Sydney Digital Marketing</h3>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Grow Your Adelaide Business?
              </h2>
              
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Join over 200 Adelaide businesses that have transformed their growth with Odin Digital's integrated digital marketing strategies. We deliver an average 540% ROI with complete transparency and no lock-in contracts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Schedule Your Free Digital Marketing Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Learn About Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OnlineMarketingCompanyAdelaide;