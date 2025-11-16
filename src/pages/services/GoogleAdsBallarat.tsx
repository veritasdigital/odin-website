import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SideTab } from "@/components/SideTab";
import { Target, MapPin, TrendingUp, Shield, Award, BarChart3, DollarSign, Users } from "lucide-react";
const GoogleAdsBallarat = () => {
  const navigate = useNavigate();
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [{
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
    }, {
      "@type": "LocalBusiness",
      "@id": "https://odindigital.com.au/google-ads-ballarat/#localbusiness",
      "name": "Odin Digital - Google Ads Agency Ballarat",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ballarat",
        "addressRegion": "VIC",
        "addressCountry": "AU"
      },
      "telephone": "03 9498 3170",
      "priceRange": "$$$",
      "servesArea": {
        "@type": "City",
        "name": "Ballarat"
      }
    }, {
      "@type": "Service",
      "@id": "https://odindigital.com.au/google-ads-ballarat/#service",
      "serviceType": "Google Ads Management Ballarat",
      "provider": {
        "@id": "https://odindigital.com.au/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Ballarat"
      },
      "description": "Professional Google Ads Management services focused on maximizing local Return on Ad Spend (ROAS) and minimizing Cost Per Acquisition (CPA) for Ballarat businesses with full transparency and no lock-in contracts.",
      "offers": {
        "@type": "Offer",
        "url": "https://odindigital.com.au/contact/"
      }
    }, {
      "@type": "Review",
      "@id": "https://odindigital.com.au/google-ads-ballarat/#review1",
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
        "name": "Sarah K."
      },
      "reviewBody": "We were hesitant about PPC after a bad experience with a Melbourne agency. Odin Digital's local focus for our Ballarat business changed everything. Their Adwords Management strategies delivered a 30% increase in local phone calls within the first two months, and the transparency is unmatched. Highly recommend to any Ballarat business.",
      "publisher": {
        "@type": "Organization",
        "name": "Ballarat Trade Services"
      }
    }, {
      "@type": "Review",
      "@id": "https://odindigital.com.au/google-ads-ballarat/#review2",
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
      "reviewBody": "Our tourism business relies heavily on local search. Odin Digital's Google Ads Management team truly understood our seasonal needs and targeted the right visitors at the right time. We achieved a 5x ROI during our peak season, and the fact that there are no lock-in contracts gives us complete peace of mind.",
      "publisher": {
        "@type": "Organization",
        "name": "Local Ballarat Attraction"
      }
    }, {
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "What makes Odin Digital the best Google Ads Agency for Ballarat businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We eliminate the conflict of interest and the \"metro bias.\" We are a performance-focused Google Ads Agency Ballarat with a no lock-in contract policy, meaning we are 100% accountable for delivering results every month. Our senior-level strategists focus exclusively on local ROAS (Return on Ad Spend) and CPA (Cost Per Acquisition), ensuring your ad budget is an investment that generates massive, measurable profit for your local business, not just a monthly expense."
        }
      }, {
        "@type": "Question",
        "name": "How do you ensure my ads are only shown to people in Ballarat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use meticulous geo-targeting and geo-fencing techniques to ensure your ads are only shown within the core Ballarat catchment area (including key suburbs like Wendouree, Alfredton, and Sebastopol). Crucially, we use exhaustive negative keyword lists to block traffic from surrounding regional areas or major cities that would waste your budget, ensuring every click is from a potential local customer."
        }
      }, {
        "@type": "Question",
        "name": "How much do your PPC Management Services cost for a local business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our fee structure is designed to align with your profitability, not your ad spend, eliminating the conflict of interest. We offer a transparent, flat-fee or performance-based model tailored to your specific local goals and budget. We guarantee a structure that incentivizes us to improve your local ROAS, not just increase your spend, making the management fee a profitable investment."
        }
      }, {
        "@type": "Question",
        "name": "Why should I hire a professional PPC Agency instead of doing it myself?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Ads is a complex, constantly evolving platform. Without senior expertise, most businesses waste significant budget on irrelevant clicks due to poor keyword targeting, inadequate negative keyword lists, and flawed bidding strategies. A professional PPC Agency Ballarat like Odin Digital has the experience and tools to achieve a lower CPA and higher ROAS than you can typically achieve in-house, making the management fee a profitable investment."
        }
      }, {
        "@type": "Question",
        "name": "What kind of results can a Ballarat business expect from Google Ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The results depend on your industry and budget, but our focus is always on tangible local outcomes: increased phone calls, more form submissions, and higher in-store foot traffic. Our clients see an average of 540% ROI on their ad spend, meaning for every dollar spent, they generate a significant profit. Our goal is to make your Google Ads campaign your most reliable source of new business."
        }
      }, {
        "@type": "Question",
        "name": "Do you manage Google's Local Service Ads (LSA)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for eligible local service businesses, we optimize your Local Service Ads (LSA) to ensure you appear at the very top of Google for high-value, immediate-need searches. We manage your budget, reviews, and profile to maximize your \"Google Guaranteed\" visibility and drive high-quality, verified leads directly to your phone."
        }
      }, {
        "@type": "Question",
        "name": "How often will I receive reports on my Google Ads performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We believe in radical transparency. You will receive a 24/7 live dashboard that provides real-time access to your campaign performance, focusing on key local financial metrics like CPA, ROAS, and conversion value. Additionally, your senior Google Ads Specialist will hold regular, scheduled strategy meetings to review the data and collaboratively plan the next steps."
        }
      }, {
        "@type": "Question",
        "name": "How do you handle the transition from an old PPC Agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We make the transition seamless and painless. We start with a full account audit to identify any hidden issues or budget bleed. We then secure full ownership of your account for you, clean up the campaign structure, and implement our proven local strategy. Our goal is to stabilize performance immediately and then begin scaling your profitable campaigns quickly."
        }
      }, {
        "@type": "Question",
        "name": "Why is a no lock-in contract policy important for a local business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A no lock-in contract policy is the ultimate guarantee of accountability. If an Adwords Agency Ballarat is confident in their performance, they don't need a contract to trap you. Our month-to-month agreement ensures that we are constantly earning your business by delivering superior local ROAS and transparency. It shifts the risk from you to us, where it belongs."
        }
      }, {
        "@type": "Question",
        "name": "Do you help with local keyword research specific to Ballarat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our local keyword research goes beyond generic terms. We identify the specific long-tail keywords that high-intent customers in Ballarat and its surrounding suburbs are using to find your services, ensuring your ads capture the most valuable local traffic."
        }
      }, {
        "@type": "Question",
        "name": "What is the difference between Google Ads and Adwords?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Adwords was the original name for Google's advertising platform. In 2018, Google rebranded the platform to Google Ads. The core function remains the same: advertising on Google Search, Display Network, YouTube, and more. When you search for an Adwords Agency or Adwords Management, you are looking for a partner who manages the current Google Ads platform. We are experts in both the legacy and modern features of the platform."
        }
      }, {
        "@type": "Question",
        "name": "Do you only work with large businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, we work with businesses of all sizes in Ballarat. Our fee structure and strategy are customized to your budget. Our no lock-in contract policy is particularly beneficial for small businesses who need flexibility and guaranteed accountability from their PPC Company Ballarat."
        }
      }, {
        "@type": "Question",
        "name": "How do you use AI in your local PPC strategy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use cutting-edge AI tools to analyze massive amounts of auction data, predict the optimal time and bid for local keywords, and automate routine tasks. However, a senior Adwords Expert makes the final strategic decision, ensuring your campaigns are always guided by human intelligence and local market knowledge, not blind automation."
        }
      }, {
        "@type": "Question",
        "name": "Can you help with my Google My Business (Google Business Profile)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, optimizing your Google Business Profile is a critical part of our local PPC strategy. We ensure your profile is fully optimized, your service areas are correctly defined, and your reviews are managed, maximizing your visibility in local map packs and Local Service Ads."
        }
      }, {
        "@type": "Question",
        "name": "How quickly can you launch a new Google Ads campaign for my Ballarat business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once the strategy is approved and we have access to your accounts, we can typically launch a new, fully optimized Google Ads campaign within 7-10 business days. This includes the time needed for deep local keyword research, ad copy creation, conversion tracking setup for phone calls, and the initial quality assurance checks."
        }
      }]
    }]
  };
  return <>
      <Helmet>
        <title>Google Ads Agency Ballarat: No Lock-In Contracts | Odin Digital</title>
        <meta name="description" content="Local Google Ads Management for Ballarat businesses. Stop wasting budget on generic strategies. Get a FREE local audit and 540% average ROI." />
        <link rel="canonical" href="https://odindigital.com.au/services/google-ads-ballarat" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        {/* Hide SideTab on mobile since we have a sticky CTA */}
        <div className="hidden md:block">
          <SideTab />
        </div>
        
        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background border-t border-border p-4 shadow-lg">
          <Button variant="cta" size="lg" className="w-full text-sm sm:text-base py-6" onClick={() => navigate('/contact')}>
            <span className="sm:hidden">Get FREE Strategy</span>
            <span className="hidden sm:inline">Get Your FREE Ballarat PPC Strategy</span>
          </Button>
        </div>

        {/* Hero Section */}
        <section data-nav-contrast="dark" className="relative min-h-[90vh] gradient-hero overflow-hidden flex items-center">
          {/* Floating Background Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
          <div className="absolute bottom-32 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{
          animationDelay: '2s'
        }} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-lg animate-float" style={{
          animationDelay: '1s'
        }} />
          <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-white/5 rounded-full animate-float" style={{
          animationDelay: '3s'
        }} />

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
            <h1 className="text-5xl font-black mb-8 mt-16 md:mt-20 text-slate-950 md:text-7xl">
              Google Ads Agency Ballarat
            </h1>
            
            <p className="text-3xl font-bold mb-8 leading-tight text-slate-950 md:text-5xl">
              Stop Paying Melbourne Prices for Generic Results.
            </p>

            <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto text-slate-950">
              The Local PPC Partner That Guarantees ROI for Ballarat Businesses.
            </p>

            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-slate-950">
              Are you tired of watching your Google Ads budget disappear with little to show for it? Frustrated by agencies that lock you into long contracts, charge exorbitant fees, and deliver vague reports filled with vanity metrics instead of actual revenue?
            </p>

            <p className="text-base md:text-lg mb-10 max-w-3xl mx-auto leading-relaxed text-slate-950">
              The truth is, most <strong className="text-pink-700">PPC management companies</strong> operate on a fundamentally flawed model: they profit from <em>increasing</em> your ad spend, not from improving your <strong className="text-white">Return on Ad Spend (ROAS)</strong>. They make more money when you spend more on Google Ads, creating a direct conflict of interest. This is the "metro markup" problem, and it's costing you thousands of dollars every single month in wasted ad budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="cta" size="lg" className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-10 py-5 sm:py-6 md:py-8 whitespace-normal leading-tight" onClick={() => navigate('/contact')}>
                <span className="sm:hidden">Get FREE Audit →</span>
                <span className="hidden sm:inline">Get Your FREE Local Google Ads Strategy Audit →</span>
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <div className="text-4xl font-black text-charcoal mb-2">$574M+</div>
                <div className="text-charcoal/70">Client Revenue Generated</div>
              </Card>
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <div className="text-4xl font-black text-charcoal mb-2">540%</div>
                <div className="text-charcoal/70">Average ROI on Ad Spend</div>
              </Card>
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <div className="text-4xl font-black text-charcoal mb-2">95%</div>
                <div className="text-charcoal/70">Client Retention Rate</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              Why Your Current PPC Strategy is Failing Your Ballarat Business
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              The Google Ads model is broken for local businesses. Here's exactly why.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 hover-scale">
                <div className="flex items-start gap-4">
                  <div className="bg-destructive/10 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">You're Paying "Metro Markup" for Generic Strategy</h3>
                    <p className="text-muted-foreground">
                      Most PPC agencies in Melbourne and Sydney charge premium fees but apply a one-size-fits-all approach to Ballarat businesses. They don't understand your local market, your seasonal fluctuations, or the specific keywords that drive calls from customers in Wendouree, Alfredton, or Sebastopol.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-scale">
                <div className="flex items-start gap-4">
                  <div className="bg-destructive/10 p-3 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Your Budget is Leaking on Irrelevant Clicks</h3>
                    <p className="text-muted-foreground">
                      Without meticulous local geo-targeting and a rigorous negative keyword strategy, your Google Ads are being shown to people who will never become your customers. This "budget bleed" can account for 30-50% of your monthly spend.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-scale">
                <div className="flex items-start gap-4">
                  <div className="bg-destructive/10 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">You're Trapped in a Contract With No Accountability</h3>
                    <p className="text-muted-foreground">
                      Many PPC management companies lock you into 6, 12, or even 24-month contracts, ensuring their revenue regardless of your results. This creates a fundamental conflict of interest: they profit from your commitment, not your performance.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover-scale">
                <div className="flex items-start gap-4">
                  <div className="bg-destructive/10 p-3 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Set It and Forget It</h3>
                    <p className="text-muted-foreground">
                      Most agencies launch your campaign and then ignore it. No ongoing optimization, no CPA reduction, no strategic adjustments. Your budget is quietly wasted month after month while they collect their fees.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="cta" size="default" className="text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 whitespace-normal leading-tight" onClick={() => navigate('/contact')}>
                <span className="sm:hidden">Talk to PPC Expert →</span>
                <span className="hidden sm:inline">Stop the Budget Bleed: Talk to a PPC Expert →</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              Why Odin Digital is the Only Google Ads Partner Your Ballarat Business Needs
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              We eliminate the conflict of interest and deliver transparent, performance-focused Google Ads management.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 hover-scale">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">No Lock-In Contracts</h3>
                <p className="text-muted-foreground mb-4">
                  Zero Conflict of Interest
                </p>
                <p className="text-sm text-muted-foreground">
                  We believe in earning your business every month, not trapping you in a long-term agreement. Our month-to-month model means we're 100% accountable for delivering superior local ROAS every single month.
                </p>
              </Card>

              <Card className="p-6 hover-scale">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Senior-Level Expertise</h3>
                <p className="text-muted-foreground mb-4">
                  Local Focus, Senior Strategy
                </p>
                <p className="text-sm text-muted-foreground">
                  Your account is managed by a senior Google Ads Specialist with years of experience optimizing campaigns for local businesses. No junior coordinators following scripts—just expert strategy.
                </p>
              </Card>

              <Card className="p-6 hover-scale">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Radical Transparency</h3>
                <p className="text-muted-foreground mb-4">
                  24/7 Live Dashboards
                </p>
                <p className="text-sm text-muted-foreground">
                  You don't have to wait for a monthly report. We provide 24/7 access to a live dashboard showing your key metrics—CPA, ROAS, conversion value—in real-time.
                </p>
              </Card>

              <Card className="p-6 hover-scale">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Performance-Based Fees</h3>
                <p className="text-muted-foreground mb-4">
                  Aligned With Your Success
                </p>
                <p className="text-sm text-muted-foreground">
                  Our transparent, flat-fee or performance-based model means our fees are tied to your success, not your budget. We're incentivized to improve your ROAS, not just spend more.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="cta" size="lg" className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7 whitespace-normal leading-tight" onClick={() => navigate('/contact')}>
                <span className="sm:hidden">See Our Strategy →</span>
                <span className="hidden sm:inline">See Our Ballarat PPC Management Approach →</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              Our Ballarat-Focused Google Ads Services
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              We don't do generic. Every strategy is built specifically for your Ballarat business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 hover-scale">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hyper-Local Search & Shopping</h3>
                <p className="text-sm text-muted-foreground">
                  We dominate the specific, high-intent search terms that Ballarat customers use. Meticulous geo-targeting ensures your ads are only shown within your core service area.
                </p>
              </Card>

              <Card className="p-6 hover-scale">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Local Service Ads (LSA)</h3>
                <p className="text-sm text-muted-foreground">
                  For eligible service businesses, we optimize your LSA profile to ensure you appear at the very top of Google with the "Google Guaranteed" badge, driving verified leads.
                </p>
              </Card>

              <Card className="p-6 hover-scale">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Full-Funnel Remarketing</h3>
                <p className="text-sm text-muted-foreground">
                  We recapture the 95% of visitors who don't convert immediately through strategic remarketing on Google Display, YouTube, and across the web.
                </p>
              </Card>

              <Card className="p-6 hover-scale">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Conversion Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Your ad is only as good as the page it sends traffic to. We optimize your landing pages to maximize conversions and ROI.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="cta" size="lg" className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7 whitespace-normal leading-tight" onClick={() => navigate('/contact')}>
                <span className="sm:hidden">Get Custom Strategy →</span>
                <span className="hidden sm:inline">Ready for a Custom Google Ads Strategy? Contact Us →</span>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16">
              Everything you need to know about our Google Ads services for Ballarat businesses.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  What makes Odin Digital the best Google Ads Agency for Ballarat businesses?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We eliminate the conflict of interest and the "metro bias." We are a performance-focused Google Ads Agency Ballarat with a no lock-in contract policy, meaning we are 100% accountable for delivering results every month. Our senior-level strategists focus exclusively on local ROAS (Return on Ad Spend) and CPA (Cost Per Acquisition), ensuring your ad budget is an investment that generates massive, measurable profit for your local business, not just a monthly expense.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  How do you ensure my ads are only shown to people in Ballarat?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We use meticulous geo-targeting and geo-fencing techniques to ensure your ads are only shown within the core Ballarat catchment area (including key suburbs like Wendouree, Alfredton, and Sebastopol). Crucially, we use exhaustive negative keyword lists to block traffic from surrounding regional areas or major cities that would waste your budget, ensuring every click is from a potential local customer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  How much do your PPC Management Services cost for a local business?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our fee structure is designed to align with your profitability, not your ad spend, eliminating the conflict of interest. We offer a transparent, flat-fee or performance-based model tailored to your specific local goals and budget. We guarantee a structure that incentivizes us to improve your local ROAS, not just increase your spend, making the management fee a profitable investment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  Why should I hire a professional PPC Agency instead of doing it myself?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Google Ads is a complex, constantly evolving platform. Without senior expertise, most businesses waste significant budget on irrelevant clicks due to poor keyword targeting, inadequate negative keyword lists, and flawed bidding strategies. A professional PPC Agency Ballarat like Odin Digital has the experience and tools to achieve a lower CPA and higher ROAS than you can typically achieve in-house, making the management fee a profitable investment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  What kind of results can a Ballarat business expect from Google Ads?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The results depend on your industry and budget, but our focus is always on tangible local outcomes: increased phone calls, more form submissions, and higher in-store foot traffic. Our clients see an average of 540% ROI on their ad spend, meaning for every dollar spent, they generate a significant profit. Our goal is to make your Google Ads campaign your most reliable source of new business.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  Do you manage Google's Local Service Ads (LSA)?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, for eligible local service businesses, we optimize your Local Service Ads (LSA) to ensure you appear at the very top of Google for high-value, immediate-need searches. We manage your budget, reviews, and profile to maximize your "Google Guaranteed" visibility and drive high-quality, verified leads directly to your phone.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  How often will I receive reports on my Google Ads performance?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We believe in radical transparency. You will receive a 24/7 live dashboard that provides real-time access to your campaign performance, focusing on key local financial metrics like CPA, ROAS, and conversion value. Additionally, your senior Google Ads Specialist will hold regular, scheduled strategy meetings to review the data and collaboratively plan the next steps.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  How do you handle the transition from an old PPC Agency?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We make the transition seamless and painless. We start with a full account audit to identify any hidden issues or budget bleed. We then secure full ownership of your account for you, clean up the campaign structure, and implement our proven local strategy. Our goal is to stabilize performance immediately and then begin scaling your profitable campaigns quickly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  Why is a no lock-in contract policy important for a local business?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A no lock-in contract policy is the ultimate guarantee of accountability. If an Adwords Agency Ballarat is confident in their performance, they don't need a contract to trap you. Our month-to-month agreement ensures that we are constantly earning your business by delivering superior local ROAS and transparency. It shifts the risk from you to us, where it belongs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  Do you help with local keyword research specific to Ballarat?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, our local keyword research goes beyond generic terms. We identify the specific long-tail keywords that high-intent customers in Ballarat and its surrounding suburbs are using to find your services, ensuring your ads capture the most valuable local traffic.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  What is the difference between Google Ads and Adwords?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Google Adwords was the original name for Google's advertising platform. In 2018, Google rebranded the platform to Google Ads. The core function remains the same: advertising on Google Search, Display Network, YouTube, and more. When you search for an Adwords Agency or Adwords Management, you are looking for a partner who manages the current Google Ads platform. We are experts in both the legacy and modern features of the platform.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  Do you only work with large businesses?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No, we work with businesses of all sizes in Ballarat. Our fee structure and strategy are customized to your budget. Our no lock-in contract policy is particularly beneficial for small businesses who need flexibility and guaranteed accountability from their PPC Company Ballarat.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  How do you use AI in your local PPC strategy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We use cutting-edge AI tools to analyze massive amounts of auction data, predict the optimal time and bid for local keywords, and automate routine tasks. However, a senior Adwords Expert makes the final strategic decision, ensuring your campaigns are always guided by human intelligence and local market knowledge, not blind automation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  Can you help with my Google My Business (Google Business Profile)?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, optimizing your Google Business Profile is a critical part of our local PPC strategy. We ensure your profile is fully optimized, your service areas are correctly defined, and your reviews are managed, maximizing your visibility in local map packs and Local Service Ads.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15" className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  How quickly can you launch a new Google Ads campaign for my Ballarat business?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Once the strategy is approved and we have access to your accounts, we can typically launch a new, fully optimized Google Ads campaign within 7-10 business days. This includes the time needed for deep local keyword research, ad copy creation, conversion tracking setup for phone calls, and the initial quality assurance checks.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section data-nav-contrast="dark" className="py-24 gradient-hero relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{
          animationDelay: '3s'
        }} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-lg animate-float" style={{
          animationDelay: '1s'
        }} />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-8 text-slate-950 md:text-6xl">
              Ready to Stop Losing Money and Start Generating Massive ROI from Google Ads?
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-slate-950">
              You don't need another "free consultation" that's really just a sales pitch. You need a real, actionable Google Ads Strategy Audit that identifies exactly where your budget is being wasted and lays out a concrete plan to fix it. If you're ready to stop paying the "metro markup," eliminate budget bleed, and finally get the local ROAS you deserve, book your free audit today.
            </p>

            <Button variant="cta" size="lg" className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-10 py-5 sm:py-6 md:py-8 whitespace-normal leading-tight" onClick={() => navigate('/contact')}>
              <span className="sm:hidden">FREE Strategy Audit →</span>
              <span className="hidden sm:inline">Get Your FREE Local Google Ads Strategy Audit →</span>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};
export default GoogleAdsBallarat;