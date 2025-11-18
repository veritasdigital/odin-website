import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Target, Palette, Settings, TrendingUp, DollarSign, BarChart3, Users, Zap, ShoppingCart, Coffee, Briefcase, Heart, Home } from "lucide-react";
import LocationMap from "@/components/LocationMap";
import { getLocationData } from "@/utils/locationData";


const FacebookAdsBallarat = () => {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://odindigital.com.au/#local-business",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au",
        "logo": "https://odindigital.com.au/logo.png",
        "description": "Facebook Ads services for Ballarat businesses.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ballarat, Victoria",
          "addressLocality": "Ballarat",
          "addressRegion": "VIC",
          "postalCode": "3350",
          "addressCountry": "AU"
        },
        "telephone": "+61-2-8294-9334",
        "email": "hello@odindigital.com.au",
        "sameAs": [
          "https://www.facebook.com/odindigital",
          "https://www.linkedin.com/company/odin-digital",
          "https://www.instagram.com/odindigital"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://odindigital.com.au/facebook-ads-ballarat#webpage",
        "url": "https://odindigital.com.au/facebook-ads-ballarat",
        "name": "Facebook Ads Ballarat | Get More Customers with Profitable Ad Campaigns",
        "description": "Facebook Ads services for Ballarat businesses. Expert management, audience targeting, creative development. 140+ businesses, 310% revenue increase, 285% ROAS improvement.",
        "isPartOf": {
          "@id": "https://odindigital.com.au/#website"
        },
        "inLanguage": "en-AU",
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01"
      },
      {
        "@type": "WebSite",
        "@id": "https://odindigital.com.au/#website",
        "url": "https://odindigital.com.au",
        "name": "Odin Digital",
        "description": "Facebook Ads services for Ballarat businesses"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/facebook-ads-ballarat#audience-targeting",
        "name": "Audience Targeting and Segmentation",
        "description": "Precise audience targeting for Facebook Ads in Ballarat.",
        "provider": {
          "@id": "https://odindigital.com.au/#local-business"
        },
        "serviceType": "Facebook Ads",
        "areaServed": {
          "@type": "City",
          "name": "Ballarat"
        }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/facebook-ads-ballarat#creative-development",
        "name": "Ad Creative Development",
        "description": "Compelling ad creative and copy for Facebook Ads in Ballarat.",
        "provider": {
          "@id": "https://odindigital.com.au/#local-business"
        },
        "serviceType": "Facebook Ads",
        "areaServed": {
          "@type": "City",
          "name": "Ballarat"
        }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/facebook-ads-ballarat#campaign-management",
        "name": "Campaign Setup and Management",
        "description": "Facebook Ads campaign setup and management for Ballarat businesses.",
        "provider": {
          "@id": "https://odindigital.com.au/#local-business"
        },
        "serviceType": "Facebook Ads",
        "areaServed": {
          "@type": "City",
          "name": "Ballarat"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much do Facebook Ads cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Facebook Ads costs vary depending on your industry, audience, and goals. You can start with as little as $5–$10 per day. We recommend a minimum budget of $500–$1,000 per month for meaningful results."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can see initial results within 2–4 weeks. However, it typically takes 8–12 weeks to optimise campaigns and see consistent results."
            }
          },
          {
            "@type": "Question",
            "name": "What's a good ROAS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A good ROAS depends on your industry and business model. Generally, a ROAS of 3:1 or higher is considered good. We aim for 4:1 or higher for our clients."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with my industry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We help businesses in all industries. Whether you're e-commerce, retail, restaurants, professional services, healthcare, or real estate, we can help you run profitable Facebook Ads campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer a free consultation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We offer a free Facebook Ads consultation where we'll review your current campaigns (if any) and discuss your goals."
            }
          },
          {
            "@type": "Question",
            "name": "Do you also run Instagram Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Instagram Ads are part of the Meta Ads platform (formerly Facebook Ads). We manage both Facebook and Instagram ad campaigns through the same platform, ensuring consistent messaging and optimal budget allocation across both channels."
            }
          },
          {
            "@type": "Question",
            "name": "How do you scale successful campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We scale campaigns gradually by increasing budgets on winning ad sets, expanding to similar audiences, testing new creative variations, and launching campaigns in new geographic locations. We monitor performance closely to maintain ROAS as we scale."
            }
          },
          {
            "@type": "Question",
            "name": "What's the minimum budget required?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend a minimum monthly ad spend of $500–$1,000 to generate meaningful data and results. Lower budgets can work for very local businesses, but larger budgets allow for faster testing and optimisation."
            }
          },
          {
            "@type": "Question",
            "name": "How do you measure success?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We measure success based on your specific business goals. Common metrics include ROAS (Return on Ad Spend), cost per acquisition, conversion rate, click-through rate, and overall revenue generated. We provide detailed monthly reports showing all key metrics."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help small businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We work with businesses of all sizes. In fact, many of our most successful clients are small to medium Ballarat businesses. We tailor our strategies to your budget, goals, and local market."
            }
          }
        ]
      },
      {
        "@type": "AggregateRating",
        "@id": "https://odindigital.com.au/facebook-ads-ballarat#rating",
        "ratingValue": "4.9",
        "ratingCount": "140",
        "bestRating": "5",
        "worstRating": "1"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Facebook Ads Ballarat | Get More Customers with Profitable Ad Campaigns</title>
        <meta
          name="description"
          content="Facebook Ads services for Ballarat businesses. Expert management, audience targeting, creative development. 140+ businesses, 310% revenue increase, 285% ROAS improvement."
        />
        <meta name="keywords" content="Facebook Ads Ballarat, Facebook Ads services Ballarat, Facebook Ads agency Ballarat, Meta Ads Ballarat, Facebook advertising Ballarat, Instagram Ads Ballarat, Facebook Ads management Ballarat, Facebook Ads expert Ballarat" />
        <link rel="canonical" href="https://odindigital.com.au/facebook-ads-ballarat" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-background py-20 lg:py-32">
          {/* Light overlay for subtle effect */}
          <div className="absolute inset-0 bg-white/95 z-[1]" />
          
          {/* Animated background blobs */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
            <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          {/* Floating circles */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/20 rounded-full animate-pulse" />
            <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-primary/30 rounded-full animate-pulse delay-300" />
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent/20 rounded-full animate-pulse delay-500" />
            <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-primary/25 rounded-full animate-pulse delay-700" />
            <div className="absolute top-2/3 left-1/2 w-3 h-3 bg-accent/30 rounded-full animate-pulse delay-900" />
          </div>
          
          {/* Geometric shapes */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute top-10 right-20 w-20 h-20 border border-primary/10 rotate-45 animate-pulse" />
            <div className="absolute bottom-20 left-20 w-16 h-16 border border-primary/15 rotate-12 animate-pulse delay-500" />
            <div className="absolute top-1/3 left-1/4 w-12 h-12 border border-accent/10 -rotate-6 animate-pulse delay-1000" />
          </div>

          <div className="container mx-auto px-4 py-20 relative z-[2]">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Facebook Ads Ballarat: Get More Customers with Profitable Campaigns
              </h1>
              
              <p className="hero-sub-headline text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Stop wasting money on Facebook Ads that don't convert. We help Ballarat businesses run profitable campaigns that deliver real customers and real sales. 140+ businesses helped. 310% revenue increase. 285% ROAS improvement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow text-lg px-8 py-6 whitespace-normal break-words min-h-[48px]"
                >
                  <Link to="/contact">Schedule Free Facebook Ads Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Ballarat Facebook Ads Challenge */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Ballarat Facebook Ads Challenge</h2>
              
              <p className="text-lg mb-8 text-muted-foreground">
                Running profitable Facebook Ads campaigns is challenging. Most Ballarat businesses struggle to get consistent results from their Facebook advertising. They waste money on campaigns that don't convert. They target the wrong audiences. They use generic creative that doesn't stand out. And they don't have the expertise or time to optimise their campaigns for maximum return on ad spend.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <Target className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Audience Targeting Expertise</h3>
                    <p className="text-muted-foreground">
                      You need deep expertise in Facebook's targeting options to reach the right audience. Without it, you waste budget on people who will never buy.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Palette className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Compelling Creative and Copy</h3>
                    <p className="text-muted-foreground">
                      Your ads need to stop the scroll. They need compelling visuals, persuasive copy, and clear calls to action. Most businesses don't have this expertise in-house.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Settings className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Campaign Optimisation Skills</h3>
                    <p className="text-muted-foreground">
                      Facebook Ads require constant testing and optimisation. You need to know what metrics to track, when to scale, and when to pause underperforming campaigns.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <DollarSign className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Budget Management Expertise</h3>
                    <p className="text-muted-foreground">
                      Allocating budget across campaigns, ad sets, and individual ads requires expertise. Poor budget management leads to wasted spend and missed opportunities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardContent className="p-6">
                    <Zap className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Time and Resources</h3>
                    <p className="text-muted-foreground">
                      Running profitable Facebook Ads campaigns takes time. You need to monitor performance daily, test new creative, optimise targeting, and analyse results. Most business owners don't have this time.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg mt-8 text-center">
                <strong>That's why Ballarat businesses partner with Odin Digital.</strong> We're Facebook Ads experts who specialise in Ballarat. We know your market, your customers, and what works for local businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Why Ballarat Businesses Choose Odin Digital */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Ballarat Businesses Choose Odin Digital</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <TrendingUp className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">ROAS-Focused Approach</h3>
                    <p className="text-muted-foreground">
                      We're obsessed with return on ad spend. Every campaign, every ad set, every creative is optimised for maximum ROAS. We don't just drive traffic—we drive profitable conversions that grow your business. Our average client sees a 285% improvement in ROAS within the first 90 days.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Campaign Management</h3>
                    <p className="text-muted-foreground">
                      Our team of certified Facebook Ads specialists manages every aspect of your campaigns. From initial strategy to creative development to daily optimisation, we handle it all. You get a dedicated account manager who understands your business and works to achieve your goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Precision Audience Targeting</h3>
                    <p className="text-muted-foreground">
                      We use advanced targeting strategies to reach your ideal customers. From detailed demographic targeting to custom audiences based on website visitors to lookalike audiences of your best customers, we ensure your ads reach people who are most likely to convert.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Palette className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Creative Excellence</h3>
                    <p className="text-muted-foreground">
                      We create scroll-stopping ad creative that captures attention and drives action. Our in-house creative team develops compelling visuals, persuasive copy, and effective calls to action that resonate with your target audience and drive conversions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <BarChart3 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                    <p className="text-muted-foreground">
                      We've helped over 140 Ballarat businesses achieve their Facebook Ads goals. Our clients have seen an average 310% increase in revenue from Facebook Ads and a 285% improvement in ROAS. We have case studies and testimonials from businesses just like yours.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Home className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Local Ballarat Knowledge</h3>
                    <p className="text-muted-foreground">
                      We understand the Ballarat market. We know your customers, your competitors, and what works in your local area. This local knowledge informs our targeting strategies, creative development, and campaign optimisation to deliver results specific to Ballarat.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <BarChart3 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Transparent Reporting</h3>
                    <p className="text-muted-foreground">
                      You get full transparency into campaign performance. We provide detailed monthly reports showing all key metrics: ROAS, cost per acquisition, conversion rate, click-through rate, and revenue generated. You always know exactly how your campaigns are performing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <DollarSign className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Affordable Facebook Ads Services</h3>
                    <p className="text-muted-foreground">
                      We offer transparent, affordable pricing that fits your budget. No hidden fees, no long-term contracts. You can start with as little as $500–$1,000 per month in ad spend and scale as you see results. Our management fees are competitive and based on your ad spend.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Zap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quick Results</h3>
                    <p className="text-muted-foreground">
                      While Facebook Ads can take 8–12 weeks to fully optimise, you can see initial results within 2–4 weeks. We move fast, test aggressively, and optimise continuously to get you results as quickly as possible while maintaining profitability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button asChild size="lg" className="whitespace-normal break-words min-h-[48px]">
                  <Link to="/contact">Learn More About Our Approach</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Facebook Ads Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Facebook Ads Services for Ballarat Businesses</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <Target className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Audience Targeting and Segmentation</h3>
                    <p className="text-muted-foreground mb-4">
                      We identify and target your ideal customers using advanced Facebook targeting options. We create detailed customer personas, build custom audiences from your website visitors and customer lists, and develop lookalike audiences to find new customers similar to your best existing customers.
                    </p>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• Demographic and interest-based targeting</li>
                      <li>• Custom audiences from website visitors and customer data</li>
                      <li>• Lookalike audiences to find new customers</li>
                      <li>• Geographic targeting for local Ballarat businesses</li>
                    </ul>
                    <p className="text-sm font-semibold">Expected Results: Reach the right people, reduce wasted ad spend, improve conversion rates.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Palette className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Ad Creative Development</h3>
                    <p className="text-muted-foreground mb-4">
                      We create scroll-stopping ad creative that captures attention and drives action. Our creative team develops compelling visuals, persuasive copy, and effective calls to action that resonate with your target audience and drive conversions.
                    </p>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• Professional image and video ad creation</li>
                      <li>• Persuasive ad copywriting</li>
                      <li>• A/B testing of creative variations</li>
                      <li>• Regular creative refreshes to avoid ad fatigue</li>
                    </ul>
                    <p className="text-sm font-semibold">Expected Results: Higher click-through rates, better engagement, improved conversion rates.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Settings className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Campaign Setup and Management</h3>
                    <p className="text-muted-foreground mb-4">
                      We handle all aspects of campaign setup and ongoing management. From initial campaign structure to daily optimisation to performance monitoring, we manage everything so you can focus on running your business.
                    </p>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• Strategic campaign structure and setup</li>
                      <li>• Daily monitoring and optimisation</li>
                      <li>• Performance tracking and analysis</li>
                      <li>• Regular strategy reviews and adjustments</li>
                    </ul>
                    <p className="text-sm font-semibold">Expected Results: Professionally managed campaigns that deliver consistent results.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Conversion Optimisation</h3>
                    <p className="text-muted-foreground mb-4">
                      We optimise every step of the customer journey to maximise conversions. From landing page optimisation to pixel implementation to conversion tracking setup, we ensure you're capturing every possible conversion.
                    </p>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• Facebook Pixel installation and event tracking</li>
                      <li>• Landing page optimisation recommendations</li>
                      <li>• Conversion funnel analysis and improvement</li>
                      <li>• A/B testing of offers and messaging</li>
                    </ul>
                    <p className="text-sm font-semibold">Expected Results: Higher conversion rates, lower cost per acquisition, better ROAS.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <DollarSign className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Budget Optimisation and Scaling</h3>
                    <p className="text-muted-foreground mb-4">
                      We allocate your budget strategically across campaigns, ad sets, and ads to maximise return on ad spend. As we identify winning campaigns, we scale them gradually while maintaining profitability.
                    </p>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• Strategic budget allocation across campaigns</li>
                      <li>• Gradual scaling of winning campaigns</li>
                      <li>• Bid strategy optimisation</li>
                      <li>• Cost control and efficiency monitoring</li>
                    </ul>
                    <p className="text-sm font-semibold">Expected Results: Maximum ROAS, efficient budget usage, profitable scaling.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <BarChart3 className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Reporting and Analytics</h3>
                    <p className="text-muted-foreground mb-4">
                      We provide detailed reporting on all key metrics so you understand exactly how your campaigns are performing. You get monthly reports, access to a live dashboard, and regular strategy calls with your account manager.
                    </p>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• Detailed monthly performance reports</li>
                      <li>• Real-time dashboard access</li>
                      <li>• Key metric tracking (ROAS, CPA, CTR, conversions)</li>
                      <li>• Regular strategy review calls</li>
                    </ul>
                    <p className="text-sm font-semibold">Expected Results: Full transparency, data-driven decisions, continuous improvement.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How We Help Ballarat Businesses</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Strategy Development</h3>
                        <p className="text-muted-foreground mb-2">
                          We start by understanding your business, goals, target audience, and budget. We develop a comprehensive Facebook Ads strategy tailored to your specific needs.
                        </p>
                        <p className="text-sm"><strong>What we do:</strong> In-depth consultation, competitor analysis, goal setting, strategy documentation</p>
                        <p className="text-sm"><strong>What you get:</strong> Clear strategy document, defined goals and KPIs, campaign roadmap</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Audience Research</h3>
                        <p className="text-muted-foreground mb-2">
                          We research and identify your ideal customer audiences. We create detailed customer personas, analyse competitor audiences, and identify the best targeting options for your business.
                        </p>
                        <p className="text-sm"><strong>What we do:</strong> Customer persona development, audience analysis, targeting research</p>
                        <p className="text-sm"><strong>What you get:</strong> Detailed audience profiles, targeting strategy, custom and lookalike audience setup</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Creative Development</h3>
                        <p className="text-muted-foreground mb-2">
                          Our creative team develops compelling ad creative that resonates with your target audience. We create multiple variations for testing and optimisation.
                        </p>
                        <p className="text-sm"><strong>What we do:</strong> Image/video creation, copywriting, call-to-action development, A/B test planning</p>
                        <p className="text-sm"><strong>What you get:</strong> Professional ad creative, persuasive copy, multiple variations for testing</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Campaign Setup</h3>
                        <p className="text-muted-foreground mb-2">
                          We set up your campaigns with optimal structure, targeting, budget allocation, and tracking. We install the Facebook Pixel and configure conversion tracking.
                        </p>
                        <p className="text-sm"><strong>What we do:</strong> Campaign structure setup, pixel installation, conversion tracking configuration, audience setup</p>
                        <p className="text-sm"><strong>What you get:</strong> Professionally structured campaigns, complete tracking setup, optimised initial settings</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">5</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Launch and Monitoring</h3>
                        <p className="text-muted-foreground mb-2">
                          We launch your campaigns and monitor performance closely. We check metrics daily and make adjustments as needed to optimise performance.
                        </p>
                        <p className="text-sm"><strong>What we do:</strong> Campaign launch, daily monitoring, initial optimisation, performance analysis</p>
                        <p className="text-sm"><strong>What you get:</strong> Active campaigns, daily oversight, quick adjustments, regular updates</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">6</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Optimisation and Scaling</h3>
                        <p className="text-muted-foreground mb-2">
                          We continuously test, optimise, and scale your campaigns. We identify winning ad sets and scale them while pausing underperformers. We test new creative, audiences, and offers.
                        </p>
                        <p className="text-sm"><strong>What we do:</strong> A/B testing, audience expansion, creative refreshes, budget scaling, bid optimisation</p>
                        <p className="text-sm"><strong>What you get:</strong> Continuous improvement, profitable scaling, better ROAS over time</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">7</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Reporting and Communication</h3>
                        <p className="text-muted-foreground mb-2">
                          We provide detailed monthly reports and regular communication. You have a dedicated account manager who keeps you informed and works with you to achieve your goals.
                        </p>
                        <p className="text-sm"><strong>What we do:</strong> Monthly reporting, strategy review calls, ongoing communication, performance analysis</p>
                        <p className="text-sm"><strong>What you get:</strong> Full transparency, regular updates, strategic guidance, dedicated support</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Facebook Ads for Different Ballarat Industries</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <ShoppingCart className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-3">E-Commerce and Retail</h3>
                    <p className="text-muted-foreground mb-3">
                      Ballarat retail and e-commerce businesses face intense competition. You need to stand out, drive online sales, and build customer loyalty.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      <strong>Our solution:</strong> We create dynamic product ads that showcase your products to people who have visited your website. We use catalog sales campaigns to automatically promote your entire product range. We set up retargeting campaigns to bring back cart abandoners.
                    </p>
                    <p className="text-sm font-semibold">Key benefits: Increased online sales, lower cost per purchase, higher ROAS, reduced cart abandonment.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Coffee className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-3">Restaurants and Hospitality</h3>
                    <p className="text-muted-foreground mb-3">
                      Ballarat restaurants and cafes need to fill tables, especially during slower periods. You need to attract new customers and keep regulars coming back.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      <strong>Our solution:</strong> We create mouth-watering visual ads that showcase your food and atmosphere. We target local Ballarat residents with special offers and event promotions. We use location-based targeting to reach people near your venue.
                    </p>
                    <p className="text-sm font-semibold">Key benefits: More reservations, increased foot traffic, higher average order value, full tables.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Briefcase className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-3">Professional Services</h3>
                    <p className="text-muted-foreground mb-3">
                      Ballarat professional services firms (lawyers, accountants, consultants) need to generate qualified leads and build trust with potential clients.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      <strong>Our solution:</strong> We create lead generation campaigns that offer valuable content (guides, consultations, assessments) in exchange for contact information. We target decision-makers with the right demographics and interests. We nurture leads with retargeting campaigns.
                    </p>
                    <p className="text-sm font-semibold">Key benefits: More qualified leads, lower cost per lead, better lead quality, improved conversion rates.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Heart className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-3">Healthcare</h3>
                    <p className="text-muted-foreground mb-3">
                      Ballarat healthcare providers (dentists, chiropractors, medical clinics) need to attract new patients and fill appointment schedules.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      <strong>Our solution:</strong> We create compliant Facebook Ads campaigns that educate potential patients about your services. We target local Ballarat residents with specific healthcare needs. We use lead forms to make appointment booking easy.
                    </p>
                    <p className="text-sm font-semibold">Key benefits: More patient bookings, full appointment calendars, better patient quality, higher lifetime value.</p>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardContent className="p-6">
                    <Home className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-3">Real Estate</h3>
                    <p className="text-muted-foreground mb-3">
                      Ballarat real estate agents need to generate seller leads and attract qualified buyers for property listings.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      <strong>Our solution:</strong> We create property showcase ads that highlight your listings to qualified buyers. We target potential sellers with free property appraisal offers. We use location-based targeting to reach people interested in Ballarat real estate. We nurture leads with automated follow-up sequences.
                    </p>
                    <p className="text-sm font-semibold">Key benefits: More qualified buyer inquiries, more seller leads, faster property sales, increased market share.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">How much do Facebook Ads cost?</AccordionTrigger>
                  <AccordionContent>
                    Facebook Ads costs vary depending on your industry, audience, and goals. You can start with as little as $5–$10 per day. We recommend a minimum budget of $500–$1,000 per month for meaningful results. Our management fees are competitive and based on your ad spend, typically ranging from 15–20% of your monthly ad budget.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">How long does it take to see results?</AccordionTrigger>
                  <AccordionContent>
                    You can see initial results within 2–4 weeks. However, it typically takes 8–12 weeks to optimise campaigns and see consistent results. Facebook Ads require continuous testing and optimisation. The more data we collect, the better we can optimise your campaigns for maximum ROAS.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">What's a good ROAS?</AccordionTrigger>
                  <AccordionContent>
                    A good ROAS depends on your industry and business model. Generally, a ROAS of 3:1 or higher is considered good. We aim for 4:1 or higher for our clients. For e-commerce, we often achieve 5:1 or higher. For service businesses with higher profit margins, even a 2:1 ROAS can be very profitable.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">Can you help with my industry?</AccordionTrigger>
                  <AccordionContent>
                    We help businesses in all industries. Whether you're e-commerce, retail, restaurants, professional services, healthcare, or real estate, we can help you run profitable Facebook Ads campaigns. We've worked with over 140 businesses across diverse industries and have proven strategies for each.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">Do you offer a free consultation?</AccordionTrigger>
                  <AccordionContent>
                    Yes. We offer a free Facebook Ads consultation where we'll review your current campaigns (if any) and discuss your goals. We'll provide an honest assessment of whether Facebook Ads are right for your business and outline a strategy to achieve your goals. There's no obligation to work with us after the consultation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">Do you also run Instagram Ads?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Instagram Ads are part of the Meta Ads platform (formerly Facebook Ads). We manage both Facebook and Instagram ad campaigns through the same platform, ensuring consistent messaging and optimal budget allocation across both channels. Instagram is particularly effective for visual businesses like restaurants, retail, and beauty.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">How do you scale successful campaigns?</AccordionTrigger>
                  <AccordionContent>
                    We scale campaigns gradually by increasing budgets on winning ad sets, expanding to similar audiences, testing new creative variations, and launching campaigns in new geographic locations. We monitor performance closely to maintain ROAS as we scale. Rapid scaling can hurt performance, so we take a measured approach.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left">What's the minimum budget required?</AccordionTrigger>
                  <AccordionContent>
                    We recommend a minimum monthly ad spend of $500–$1,000 to generate meaningful data and results. Lower budgets can work for very local businesses, but larger budgets allow for faster testing and optimisation. The minimum budget also depends on your industry and cost per click. Competitive industries require higher budgets.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left">How do you measure success?</AccordionTrigger>
                  <AccordionContent>
                    We measure success based on your specific business goals. Common metrics include ROAS (Return on Ad Spend), cost per acquisition, conversion rate, click-through rate, and overall revenue generated. We provide detailed monthly reports showing all key metrics. We also track secondary metrics like engagement rate, reach, and frequency.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left">Can you help small businesses?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely. We work with businesses of all sizes. In fact, many of our most successful clients are small to medium Ballarat businesses. We tailor our strategies to your budget, goals, and local market. Facebook Ads can be very effective for small businesses because you can start with small budgets and scale as you see results.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-primary">
          {/* Animated background blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          {/* Floating circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/20 rounded-full animate-float animation-delay-2000"></div>
            <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-float animation-delay-4000"></div>
          </div>

          {/* Dark overlay for proper text contrast */}
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="container mx-auto px-4 relative z-[2]">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Get More Customers Today</h2>
              
              <p className="text-xl text-white/95 mb-8">
                Stop wasting money on Facebook Ads that don't work. Partner with Ballarat's leading Facebook Ads agency and start getting real customers and real sales. We've helped over 140 Ballarat businesses achieve their Facebook Ads goals. We can help you too.
              </p>

              <p className="text-lg text-white/90 mb-8">
                Schedule a free consultation today. We'll review your current campaigns (if any), discuss your goals, and outline a strategy to help you achieve profitable results from Facebook Ads. No obligation. No pressure. Just honest advice from Facebook Ads experts who care about your success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8 py-6 whitespace-normal break-words min-h-[48px]"
                >
                  <Link to="/contact">Schedule Your Free Facebook Ads Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 whitespace-normal break-words min-h-[48px]"
                >
                  <Link to="/services">Learn About Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <Button
              asChild
              className="w-full bg-white text-primary hover:bg-white/90 font-bold whitespace-normal break-words min-h-[48px]"
            >
              <a href="tel:+61282949334">Call Now: (02) 8294 9334</a>
            </Button>
          </div>
        </div>

      {/* Location Map */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <LocationMap 
            city="Ballarat"
            coordinates={getLocationData("Ballarat")?.coordinates || { lat: -37.5622, lng: 143.8503 }}
            address={getLocationData("Ballarat")?.citations.address}
          />
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default FacebookAdsBallarat;
