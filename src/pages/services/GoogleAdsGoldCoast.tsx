import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { ArrowRight, Target, TrendingUp, Users, Award, CheckCircle, Shield, Zap, Filter, BarChart3, Calendar, Star } from "lucide-react";

const GoogleAdsGoldCoast = () => {
  const { openForm } = useMarketingForm();

  const schemaMarkup = {
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
        "@id": "https://odindigital.com.au/google-ads-gold-coast/#localbusiness",
        "name": "Odin Digital - Google Ads Agency Gold Coast",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Gold Coast",
          "addressRegion": "QLD",
          "addressCountry": "AU"
        },
        "telephone": "1300-XXX-XXX",
        "priceRange": "$$$",
        "servesArea": {
          "@type": "City",
          "name": "Gold Coast"
        }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/google-ads-gold-coast/#service",
        "serviceType": "Google Ads Management Gold Coast",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Gold Coast"
        },
        "description": "Professional Google Ads Management services focused on high-value lead generation and maximizing Return on Ad Spend (ROAS) for Gold Coast businesses with senior expertise, full transparency, and no lock-in contracts.",
        "offers": {
          "@type": "Offer",
          "url": "https://odindigital.com.au/contact/"
        }
      },
      {
        "@type": "Review",
        "@id": "https://odindigital.com.au/google-ads-gold-coast/#review1",
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
        "reviewBody": "We are in the high-end real estate market on the Gold Coast, and we need quality leads, not just volume. Odin Digital's Google Ads Management team completely restructured our campaigns to target high-net-worth individuals, resulting in a 3x increase in qualified leads and a significant jump in our ROAS. The transparency is unmatched.",
        "publisher": {
          "@type": "Organization",
          "name": "Gold Coast Luxury Real Estate"
        }
      },
      {
        "@type": "Review",
        "@id": "https://odindigital.com.au/google-ads-gold-coast/#review2",
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
          "name": "Sarah L."
        },
        "reviewBody": "Our tourism business relies heavily on peak season performance. The generic strategy from our previous PPC Agency Gold Coast was failing us. Odin Digital implemented a dynamic, event-focused strategy that capitalized on high-demand periods, delivering a 540% ROI over the last 12 months. We couldn't be happier.",
        "publisher": {
          "@type": "Organization",
          "name": "Gold Coast Tourism Attraction"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes Odin Digital the best Google Ads Agency for Gold Coast businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are a performance-focused Google Ads Agency Gold Coast that guarantees senior-level strategy and radical transparency. In a market saturated with agencies focused on volume, our commitment is to high-value lead generation, filtering for the premium customers your business needs. Our no lock-in contract policy ensures we are 100% accountable for delivering superior ROAS every month."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure we receive high-quality leads, not just clicks?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We combat the low-quality lead problem with two main strategies: Advanced Audience Segmentation and Meticulous Negative Keyword Research. We actively block irrelevant searches and target specific demographics and psychographics that align with your ideal, high-net-worth customer profile, ensuring your budget is spent on high-intent traffic."
            }
          },
          {
            "@type": "Question",
            "name": "How much do your PPC Management Services cost for a Gold Coast business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our fee structure is designed to eliminate the conflict of interest. We offer a transparent, flat-fee or performance-based model tailored to your specific goals, ensuring we are incentivized to improve your ROAS, not just increase your ad spend. The management fee is an investment designed to generate a significant return in high-value leads."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I hire a professional PPC Agency instead of doing it myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Gold Coast auction is too competitive and expensive for in-house management unless you have a dedicated, senior-level expert. Without professional PPC Agency Gold Coast expertise, you risk massive budget wastage due to poor bidding, inadequate keyword targeting, and a failure to adapt to seasonal and event-driven spikes."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of results can a Gold Coast business expect from Google Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our clients see an average of 540% ROI on their ad spend. On the Gold Coast, this translates to dominating the most profitable keywords, significantly lowering your Cost Per Acquisition (CPA) for high-value leads, and establishing a reliable, scalable source of high-end revenue. We focus on bottom-line financial metrics, not vanity reports."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle the Gold Coast's seasonal and event-driven traffic spikes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We implement Dynamic Seasonal and Event Bidding. We use historical data and real-time trends to increase spend and bids during high-value periods (e.g., tourism season, major events) and conserve budget during quieter times. This ensures every dollar is spent at the most profitable time for your business."
            }
          },
          {
            "@type": "Question",
            "name": "How often will I receive reports on my Google Ads performance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We believe in radical transparency. You will receive a 24/7 live dashboard that provides real-time access to your campaign performance, focusing on key financial metrics like CPA, ROAS, and conversion value. Additionally, your senior Google Ads Specialist will hold regular, scheduled strategy meetings to review the data and collaboratively plan the next steps."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure our ads and landing pages match our premium Gold Coast brand?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We specialize in CRO for Premium Brands. We work with your team to ensure your ad copy, landing page design, and overall messaging align perfectly with the Gold Coast's luxury aesthetic. This professional consistency is critical for building trust and maximizing conversion rates for high-value services."
            }
          },
          {
            "@type": "Question",
            "name": "Why is a no lock-in contract policy important in the Gold Coast market?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A no lock-in contract policy is the ultimate guarantee of accountability in a market full of underperforming agencies. If a PPC Agency Gold Coast is confident in their results, they don't need a contract to trap you. Our month-to-month agreement ensures we are constantly earning your business by delivering superior performance and transparency."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manage Google's Local Service Ads (LSA)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, for eligible local service businesses, we optimize your Local Service Ads (LSA) to ensure you appear at the very top of Google for high-value, immediate-need searches. We manage your budget, reviews, and profile to maximize your 'Google Guaranteed' visibility and drive high-quality, verified leads directly to your phone."
            }
          },
          {
            "@type": "Question",
            "name": "Do you only work with large businesses on the Gold Coast?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, we work with businesses of all sizes, from high-end boutiques to established tourism operators. Our senior expertise is crucial for any business serious about dominating the competitive Gold Coast auction, regardless of size. Our fee structure is customized to your budget and profit goals."
            }
          },
          {
            "@type": "Question",
            "name": "How do you use AI in your Gold Coast PPC strategy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use cutting-edge AI tools to analyze massive amounts of auction data, predict the optimal time and bid for high-value keywords, and automate routine tasks. However, a senior Adwords Expert makes the final strategic decision, ensuring your campaigns are always guided by human intelligence and competitive market knowledge, not blind automation."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between Google Ads and Adwords?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google Adwords was the original name for Google's advertising platform. In 2018, Google rebranded the platform to Google Ads. The core function remains the same: advertising on Google Search, Display Network, YouTube, and more. When you search for an Adwords Agency or Adwords Management, you are looking for a partner who manages the current Google Ads platform. We are experts in both the legacy and modern features of the platform."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with my Google My Business (Google Business Profile)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, optimizing your Google Business Profile is a critical part of our local PPC strategy. We ensure your profile is fully optimized, your service areas are correctly defined, and your reviews are managed, maximizing your visibility in local map packs and Local Service Ads."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can you launch a new Google Ads campaign for my Gold Coast business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Once the strategy is approved and we have access to your accounts, we can typically launch a new, fully optimized Google Ads campaign within 7-10 business days. This includes the time needed for deep keyword research, ad copy creation, conversion tracking setup for phone calls, and the initial quality assurance checks."
            }
          }
        ]
      }
    ]
  };

  const faqs = [
    {
      question: "What makes Odin Digital the best Google Ads Agency for Gold Coast businesses?",
      answer: "We are a performance-focused Google Ads Agency Gold Coast that guarantees senior-level strategy and radical transparency. In a market saturated with agencies focused on volume, our commitment is to high-value lead generation, filtering for the premium customers your business needs. Our no lock-in contract policy ensures we are 100% accountable for delivering superior ROAS every month."
    },
    {
      question: "How do you ensure we receive high-quality leads, not just clicks?",
      answer: "We combat the low-quality lead problem with two main strategies: Advanced Audience Segmentation and Meticulous Negative Keyword Research. We actively block irrelevant searches and target specific demographics and psychographics that align with your ideal, high-net-worth customer profile, ensuring your budget is spent on high-intent traffic."
    },
    {
      question: "How much do your PPC Management Services cost for a Gold Coast business?",
      answer: "Our fee structure is designed to eliminate the conflict of interest. We offer a transparent, flat-fee or performance-based model tailored to your specific goals, ensuring we are incentivized to improve your ROAS, not just increase your ad spend. The management fee is an investment designed to generate a significant return in high-value leads."
    },
    {
      question: "Why should I hire a professional PPC Agency instead of doing it myself?",
      answer: "The Gold Coast auction is too competitive and expensive for in-house management unless you have a dedicated, senior-level expert. Without professional PPC Agency Gold Coast expertise, you risk massive budget wastage due to poor bidding, inadequate keyword targeting, and a failure to adapt to seasonal and event-driven spikes."
    },
    {
      question: "What kind of results can a Gold Coast business expect from Google Ads?",
      answer: "Our clients see an average of 540% ROI on their ad spend. On the Gold Coast, this translates to dominating the most profitable keywords, significantly lowering your Cost Per Acquisition (CPA) for high-value leads, and establishing a reliable, scalable source of high-end revenue. We focus on bottom-line financial metrics, not vanity reports."
    },
    {
      question: "How do you handle the Gold Coast's seasonal and event-driven traffic spikes?",
      answer: "We implement Dynamic Seasonal and Event Bidding. We use historical data and real-time trends to increase spend and bids during high-value periods (e.g., tourism season, major events) and conserve budget during quieter times. This ensures every dollar is spent at the most profitable time for your business."
    },
    {
      question: "How often will I receive reports on my Google Ads performance?",
      answer: "We believe in radical transparency. You will receive a 24/7 live dashboard that provides real-time access to your campaign performance, focusing on key financial metrics like CPA, ROAS, and conversion value. Additionally, your senior Google Ads Specialist will hold regular, scheduled strategy meetings to review the data and collaboratively plan the next steps."
    },
    {
      question: "How do you ensure our ads and landing pages match our premium Gold Coast brand?",
      answer: "We specialize in CRO for Premium Brands. We work with your team to ensure your ad copy, landing page design, and overall messaging align perfectly with the Gold Coast's luxury aesthetic. This professional consistency is critical for building trust and maximizing conversion rates for high-value services."
    },
    {
      question: "Why is a no lock-in contract policy important in the Gold Coast market?",
      answer: "A no lock-in contract policy is the ultimate guarantee of accountability in a market full of underperforming agencies. If a PPC Agency Gold Coast is confident in their results, they don't need a contract to trap you. Our month-to-month agreement ensures we are constantly earning your business by delivering superior performance and transparency."
    },
    {
      question: "Do you manage Google's Local Service Ads (LSA)?",
      answer: "Yes, for eligible local service businesses, we optimize your Local Service Ads (LSA) to ensure you appear at the very top of Google for high-value, immediate-need searches. We manage your budget, reviews, and profile to maximize your \"Google Guaranteed\" visibility and drive high-quality, verified leads directly to your phone."
    },
    {
      question: "Do you only work with large businesses on the Gold Coast?",
      answer: "No, we work with businesses of all sizes, from high-end boutiques to established tourism operators. Our senior expertise is crucial for any business serious about dominating the competitive Gold Coast auction, regardless of size. Our fee structure is customized to your budget and profit goals."
    },
    {
      question: "How do you use AI in your Gold Coast PPC strategy?",
      answer: "We use cutting-edge AI tools to analyze massive amounts of auction data, predict the optimal time and bid for high-value keywords, and automate routine tasks. However, a senior Adwords Expert makes the final strategic decision, ensuring your campaigns are always guided by human intelligence and competitive market knowledge, not blind automation."
    },
    {
      question: "What is the difference between Google Ads and Adwords?",
      answer: "Google Adwords was the original name for Google's advertising platform. In 2018, Google rebranded the platform to Google Ads. The core function remains the same: advertising on Google Search, Display Network, YouTube, and more. When you search for an Adwords Agency or Adwords Management, you are looking for a partner who manages the current Google Ads platform. We are experts in both the legacy and modern features of the platform."
    },
    {
      question: "Can you help with my Google My Business (Google Business Profile)?",
      answer: "Yes, optimizing your Google Business Profile is a critical part of our local PPC strategy. We ensure your profile is fully optimized, your service areas are correctly defined, and your reviews are managed, maximizing your visibility in local map packs and Local Service Ads."
    },
    {
      question: "How quickly can you launch a new Google Ads campaign for my Gold Coast business?",
      answer: "Once the strategy is approved and we have access to your accounts, we can typically launch a new, fully optimized Google Ads campaign within 7-10 business days. This includes the time needed for deep keyword research, ad copy creation, conversion tracking setup for phone calls, and the initial quality assurance checks."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Google Ads Agency Gold Coast: High-Value Lead PPC Experts | Odin Digital</title>
        <meta name="description" content="Stop settling for tire-kickers. Get high-value leads with senior Gold Coast PPC strategists. Transparent fees, no lock-in contracts, and 540% average ROI." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-28 pb-20 md:py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Google Ads Agency Gold Coast
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary leading-snug">
                Stop Settling for Tire-Kickers. Get High-Value Leads with a 540% Average ROI.
              </p>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
                <p>
                  The Gold Coast is one of Australia's most competitive advertising markets. Every business is fighting for the same high-value keywords, and the cost per click is skyrocketing. If you're working with a generic PPC agency that treats your Gold Coast business like just another account, you're bleeding budget on low-quality leads and irrelevant clicks.
                </p>
                <p>
                  Odin Digital is the Google Ads Agency Gold Coast businesses trust when they need precision, transparency, and a ruthless focus on Return on Ad Spend (ROAS). We don't do volume marketing. We specialize in filtering for high-intent, high-net-worth customers who are ready to buy your premium services.
                </p>
              </div>
              <Button 
                size="xl" 
                onClick={openForm}
                className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 h-auto min-h-[3.5rem] whitespace-normal leading-snug"
              >
                Get Your FREE Gold Coast PPC Strategy Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">$574M+</div>
                <p className="text-muted-foreground">Verified client revenue generated</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">540%</div>
                <p className="text-muted-foreground">Average ROI on advertising spend</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">95%</div>
                <p className="text-muted-foreground">Client Retention Rate</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">283+</div>
                <p className="text-muted-foreground">Successful campaigns delivered</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                The Three Reasons Your Gold Coast PPC Budget is Bleeding
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 space-y-4">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">You're Attracting Tire-Kickers, Not High-Value Customers</h3>
                <p className="text-muted-foreground">
                  The Gold Coast has a massive influx of tourists, bargain hunters, and people just browsing. Without hyper-specific audience targeting and ruthless negative keyword filtering, your budget is being wasted on clicks from people who will never convert into high-paying clients.
                </p>
              </Card>
              <Card className="p-8 space-y-4">
                <TrendingUp className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Your Agency is Prioritizing Ad Spend Over ROI</h3>
                <p className="text-muted-foreground">
                  Most PPC agencies on the Gold Coast charge a percentage of your ad spend. This creates a dangerous conflict of interest: they make more money when you spend more, regardless of whether those clicks turn into profit. You need a partner whose fee structure aligns with your bottom line, not just your ad budget.
                </p>
              </Card>
              <Card className="p-8 space-y-4">
                <Calendar className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Generic Campaigns Ignore Gold Coast's Seasonal Dynamics</h3>
                <p className="text-muted-foreground">
                  The Gold Coast market is driven by seasonal peaks (summer tourism, major events) and low-season lulls. A cookie-cutter Google Ads strategy will waste your budget during slow periods and miss the opportunity to dominate during high-value seasons. You need dynamic, event-focused bidding.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted/30 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-4">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg italic text-muted-foreground">
                  "We are in the high-end real estate market on the Gold Coast, and we need quality leads, not just volume. Odin Digital's Google Ads Management team completely restructured our campaigns to target high-net-worth individuals, resulting in a 3x increase in qualified leads and a significant jump in our ROAS. The transparency is unmatched."
                </p>
                <div className="font-semibold">
                  <p>Mark D.</p>
                  <p className="text-sm text-muted-foreground">Gold Coast Luxury Real Estate</p>
                </div>
              </Card>
              <Card className="p-8 space-y-4">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg italic text-muted-foreground">
                  "Our tourism business relies heavily on peak season performance. The generic strategy from our previous PPC Agency Gold Coast was failing us. Odin Digital implemented a dynamic, event-focused strategy that capitalized on high-demand periods, delivering a 540% ROI over the last 12 months. We couldn't be happier."
                </p>
                <div className="font-semibold">
                  <p>Sarah L.</p>
                  <p className="text-sm text-muted-foreground">Gold Coast Tourism Attraction</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Our Gold Coast-Focused PPC Services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 space-y-6">
                <Filter className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">High-Value Lead Filtering & Targeting</h3>
                <p className="text-muted-foreground">
                  We deploy advanced audience segmentation and negative keyword strategies to filter out tire-kickers and focus exclusively on high-intent, high-net-worth prospects who are ready to invest in your premium services.
                </p>
                <Button 
                  variant="outline" 
                  onClick={openForm}
                  className="w-full text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 h-auto min-h-[3rem] whitespace-normal leading-snug"
                >
                  Target High-Value Customers <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
              <Card className="p-8 space-y-6">
                <BarChart3 className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">CRO for Premium Brands</h3>
                <p className="text-muted-foreground">
                  Your landing pages and ad copy must reflect the Gold Coast's luxury aesthetic. We optimize every element of your conversion funnel to align with your premium brand, maximizing conversion rates for high-value services.
                </p>
                <Button 
                  variant="outline" 
                  onClick={openForm}
                  className="w-full text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 h-auto min-h-[3rem] whitespace-normal leading-snug"
                >
                  Optimize Your Conversions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
              <Card className="p-8 space-y-6">
                <Calendar className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Dynamic Seasonal & Event Bidding</h3>
                <p className="text-muted-foreground">
                  We use historical data and real-time trends to scale your campaigns during peak periods (tourism season, major events) and conserve budget during quieter times, ensuring maximum efficiency year-round.
                </p>
                <Button 
                  variant="outline" 
                  onClick={openForm}
                  className="w-full text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 h-auto min-h-[3rem] whitespace-normal leading-snug"
                >
                  Capitalize on Peak Season <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-20 bg-muted/30 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Why Odin Digital is the Only Google Ads Partner Built for the Gold Coast's Premium Market
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-4">
                <CheckCircle className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Senior-Level Strategy, Every Time</h3>
                <p className="text-muted-foreground">
                  You will never be handed off to a junior account manager. Your campaigns are managed by senior Google Ads specialists with a proven track record in the competitive Gold Coast market.
                </p>
              </Card>
              <Card className="p-8 space-y-4">
                <Shield className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">No Lock-In Contracts</h3>
                <p className="text-muted-foreground">
                  We operate on a month-to-month agreement. If we're not delivering superior ROAS, you're free to leave. This accountability forces us to perform at the highest level every single month.
                </p>
              </Card>
              <Card className="p-8 space-y-4">
                <TrendingUp className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Transparent, ROI-Focused Fee Structure</h3>
                <p className="text-muted-foreground">
                  Our fee structure is designed to align with your profit goals, not just your ad spend. We focus on maximizing your return, not inflating your monthly budget.
                </p>
              </Card>
              <Card className="p-8 space-y-4">
                <Zap className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Real-Time Reporting & 24/7 Dashboard Access</h3>
                <p className="text-muted-foreground">
                  Forget waiting for monthly PDF reports. You get 24/7 access to a live dashboard that tracks the metrics that matter: CPA, ROAS, and conversion value.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Our Proven 4-Step Process for Dominating the Gold Coast Auction
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-8 space-y-4">
                <div className="text-4xl font-bold text-primary">01</div>
                <h3 className="text-xl font-bold">Deep Market & Competitor Audit</h3>
                <p className="text-muted-foreground">
                  We analyze your competitors' ad strategies, identify high-value keywords, and uncover the gaps in the Gold Coast market that your business can dominate.
                </p>
              </Card>
              <Card className="p-8 space-y-4">
                <div className="text-4xl font-bold text-primary">02</div>
                <h3 className="text-xl font-bold">High-Intent Campaign Architecture</h3>
                <p className="text-muted-foreground">
                  We build conversion-focused campaigns with hyper-specific ad groups, advanced audience targeting, and ruthless negative keyword filtering.
                </p>
              </Card>
              <Card className="p-8 space-y-4">
                <div className="text-4xl font-bold text-primary">03</div>
                <h3 className="text-xl font-bold">Continuous Optimization & A/B Testing</h3>
                <p className="text-muted-foreground">
                  We constantly test ad copy, landing pages, and bidding strategies to improve your Cost Per Acquisition (CPA) and maximize ROAS.
                </p>
              </Card>
              <Card className="p-8 space-y-4">
                <div className="text-4xl font-bold text-primary">04</div>
                <h3 className="text-xl font-bold">Transparent, Financial Reporting</h3>
                <p className="text-muted-foreground">
                  We provide regular strategy meetings and 24/7 dashboard access, focusing on the metrics that drive profit, not vanity numbers.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Why Odin Digital is the Smartest Investment for Your Gold Coast Business
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-4">
                <Award className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">We Filter for Quality, Not Volume</h3>
                <p className="text-muted-foreground">
                  In a market flooded with tire-kickers, we deploy advanced targeting to ensure your budget is spent on high-intent, high-net-worth prospects.
                </p>
              </Card>
              <Card className="p-8 space-y-4">
                <Target className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">We Understand the Gold Coast Market</h3>
                <p className="text-muted-foreground">
                  We know the seasonal fluctuations, the competitive landscape, and the importance of capitalizing on high-value events and tourism peaks.
                </p>
              </Card>
              <Card className="p-8 space-y-4">
                <Shield className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">We Put Our Money Where Our Mouth Is</h3>
                <p className="text-muted-foreground">
                  Our no lock-in contract policy means we are 100% accountable for performance every single month. No excuses, no hiding behind long-term agreements.
                </p>
              </Card>
              <Card className="p-8 space-y-4">
                <TrendingUp className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">We Focus on ROI, Not Vanity Metrics</h3>
                <p className="text-muted-foreground">
                  We don't care about impressions or click-through rates. We care about your Cost Per Acquisition, Return on Ad Spend, and bottom-line profit.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Ready to Stop Losing Money and Start Generating Massive ROI from Google Ads?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              The Gold Coast advertising auction is too competitive for generic strategies. You need a senior-level Google Ads partner who understands the market, filters for high-value leads, and is 100% accountable for delivering superior ROAS every single month. Contact Odin Digital today for your free, no-obligation PPC strategy audit and discover how we can turn your advertising budget into a reliable, scalable source of high-end revenue.
            </p>
            <Button 
              size="xl" 
              onClick={openForm}
              className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 h-auto min-h-[3.5rem] whitespace-normal leading-snug"
            >
              Get Your FREE Gold Coast PPC Strategy Audit <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Your questions about Google Ads management on the Gold Coast, answered.
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <Footer />

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden px-4 w-full max-w-md">
          <Button 
            size="lg" 
            onClick={openForm}
            className="w-full bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-lg text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 h-auto min-h-[3rem] whitespace-normal leading-snug"
          >
            Get FREE Strategy Audit <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default GoogleAdsGoldCoast;