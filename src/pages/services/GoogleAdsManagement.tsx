import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowRight, Target, TrendingUp, Users, Award, Search, Eye, BarChart3, CheckCircle2, Shield, Zap, TrendingDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GoogleAdsManagement = () => {
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
        "@type": "Service",
        "@id": "https://odindigital.com.au/google-ads-management/#service",
        "serviceType": "Google Ads Management",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "description": "Professional Google Ads Management services focused on maximizing Return on Ad Spend (ROAS) and minimizing Cost Per Acquisition (CPA) with full transparency and no lock-in contracts.",
        "offers": {
          "@type": "Offer",
          "url": "https://odindigital.com.au/contact/"
        }
      },
      {
        "@type": "Review",
        "@id": "https://odindigital.com.au/google-ads-management/#review1",
        "itemReviewed": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Liam C"
        },
        "reviewBody": "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI. Their Google Ads Management is second to none, focusing on profitable keywords that actually move the needle. I literally refer all of my friends to these guys.",
        "publisher": {
          "@type": "Organization",
          "name": "Krush Organics"
        }
      },
      {
        "@type": "Review",
        "@id": "https://odindigital.com.au/google-ads-management/#review2",
        "itemReviewed": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Fabienne Costa"
        },
        "reviewBody": "Odin Digital took over our complex Adwords Management account and immediately streamlined our campaigns. Within three months, our CPA dropped by 35%, and our revenue from Google Ads increased by over 120%. The transparency and communication are a breath of fresh air.",
        "publisher": {
          "@type": "Organization",
          "name": "YCL Jewels"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes Odin Digital the best Google Ads Agency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We eliminate the conflict of interest inherent in the typical agency model. We are a performance-focused Google Ads Agency with a no lock-in contract policy, meaning we are 100% accountable for delivering results every month. Our senior-level strategists focus exclusively on ROAS (Return on Ad Spend) and CPA (Cost Per Acquisition), ensuring your ad budget is an investment that generates massive, measurable profit, not just a monthly expense."
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
            "name": "How much do your Google Ads Management Services cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our fee structure is designed to align with your profitability, not your ad spend. We do not charge a percentage of your ad budget, which eliminates the conflict of interest. Instead, we offer a transparent, flat-fee or performance-based model tailored to your specific goals and budget. The exact cost depends on the complexity and size of your campaigns, but we guarantee a structure that incentivizes us to improve your ROAS, not just increase your spend."
            }
          },
          {
            "@type": "Question",
            "name": "How much should I be spending on Google Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your ideal Google Ads budget is determined by your business goals, your industry's average Cost Per Click (CPC), and your target Cost Per Acquisition (CPA). We start with a conservative test budget to gather data and then scale based on performance. We never recommend increasing your budget until we can prove that the additional spend will generate a profitable return. Our focus is on efficiency and maximizing the ROAS of every dollar spent."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I hire a Google Ads Expert Agency instead of doing it myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google Ads is a complex, constantly evolving platform. Without senior expertise, most businesses waste significant budget on irrelevant clicks due to poor keyword targeting, inadequate negative keyword lists, and flawed bidding strategies. A professional Google Ads Expert Agency like Odin Digital has the experience and tools to achieve a lower CPA and higher ROAS than you can typically achieve in-house, making the management fee a profitable investment."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manage Performance Max (PMax) campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we manage Performance Max campaigns, but we do so with human intelligence. While PMax is a powerful automation tool, it requires high-quality data and strategic oversight to be profitable. We ensure PMax is fed the right audience signals, conversion values, and creative assets, and we monitor its performance closely to prevent it from wasting budget on low-value placements. We turn the PMax black box into a transparent, high-performing asset."
            }
          },
          {
            "@type": "Question",
            "name": "How often will I receive reports on my Google Ads performance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We believe in radical transparency. You will receive a 24/7 live dashboard that provides real-time access to your campaign performance, focusing on key financial metrics like CPA, ROAS, and conversion value. Additionally, your senior Google Ads Specialist will hold regular, scheduled strategy meetings to review the data, explain the optimizations, and collaboratively plan the next steps, ensuring you are always fully informed."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help me with Google Ads Remarketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Google Remarketing Management is a critical component of our full-funnel strategy. We build highly segmented remarketing campaigns across the Display Network and YouTube to re-engage high-intent visitors who left your site without converting. This strategy significantly increases your conversion rate and ensures you capture sales that would otherwise be lost."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure my Google Ads account is protected from wasted spend?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are meticulous about eliminating wasted spend. Our primary tools are exhaustive negative keyword lists (constantly updated), precise geo-targeting, and conversion-focused bidding strategies. We also conduct regular audit checks to ensure your ads are not showing for irrelevant searches or low-value placements, ensuring your budget is always focused on high-intent buyers."
            }
          },
          {
            "@type": "Question",
            "name": "Do you require access to my website and Google Analytics?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, full access to your Google Ads account, Google Analytics, and Google Tag Manager is essential. This allows us to ensure accurate conversion tracking, analyze user behavior, and implement the necessary technical fixes to maximize your campaign performance. We operate with full transparency and security, ensuring your data is always protected."
            }
          },
          {
            "@type": "Question",
            "name": "What is a good ROAS (Return on Ad Spend) for Google Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A \"good\" ROAS varies by industry and profit margin, but generally, a 4:1 ROAS (earning $4 for every $1 spent) is considered excellent. However, we focus on *your* break-even point and profit margin. Our goal is to achieve a ROAS that makes your Google Ads campaign significantly profitable for your specific business model. We aim for the highest possible ROAS, not just an industry average."
            }
          },
          {
            "@type": "Question",
            "name": "Why is a no lock-in contract policy important for Google Ads Management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A no lock-in contract policy is the ultimate guarantee of accountability. If an Adwords Agency is confident in their performance, they don't need a contract to trap you. Our month-to-month agreement ensures that we are constantly earning your business by delivering superior ROAS and transparency. It shifts the risk from you to us, where it belongs."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle the transition from an old Google Ads Agency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We make the transition seamless and painless. We start with a full account audit to identify any hidden issues or budget bleed. We then secure full ownership of your account for you, clean up the campaign structure, and implement our proven strategy. Our goal is to stabilize performance immediately and then begin scaling your profitable campaigns quickly."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with Google Display Advertising?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We are experts in Google Display Advertising and use it strategically for both remarketing and prospecting. We focus on placing highly visual, compelling ads on relevant websites to build brand awareness and drive traffic. Unlike many agencies that treat Display as an afterthought, we integrate it into a cohesive full-funnel strategy."
            }
          },
          {
            "@type": "Question",
            "name": "What are the common mistakes made by businesses managing their own Google Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The most common mistakes are poor conversion tracking setup, using broad match keywords without negative keyword lists, setting up flawed bidding strategies, and failing to optimize landing pages. These mistakes lead to a low Quality Score, high CPC, and wasted budget. Hiring a Google Ads Specialist avoids these costly errors."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manage YouTube and Video Advertising?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, YouTube and Video advertising are powerful components of the Google Ads platform. We manage video campaigns for both direct response (driving a sale or lead) and brand awareness, using advanced targeting options to ensure your video ads reach the most relevant and high-intent audiences."
            }
          },
          {
            "@type": "Question",
            "name": "What is your approach to bidding strategies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our bidding strategies are conversion-focused and data-driven. We move beyond simple manual bidding, leveraging Smart Bidding strategies like Target CPA and Target ROAS, but always with human oversight. We ensure the system is fed accurate conversion data and value, allowing the automation to optimize for maximum profit rather than just maximum clicks."
            }
          },
          {
            "@type": "Question",
            "name": "How does your integrated approach with SEO benefit my Google Ads campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our integrated approach is a massive advantage. We use high-performing, high-converting keywords from your Google Ads campaigns to inform your SEO content strategy, and we use organic data to identify new paid opportunities. This synergy ensures you dominate the search results page (both paid and organic) and maximizes your overall market share."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with small businesses or only large corporations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work with businesses of all sizes, from small businesses with local goals to large corporations with national campaigns. Our fee structure and strategy are customized to your budget. Our no lock-in contract policy is particularly beneficial for small businesses who need flexibility and guaranteed accountability from their Adwords Management Agency."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can you launch a new Google Ads campaign?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Once the strategy is approved and we have access to your accounts, we can typically launch a new, fully optimized Google Ads campaign within 7-10 business days. This includes the time needed for deep keyword research, ad copy creation, conversion tracking setup, and the initial quality assurance checks. We prioritize precision and performance over speed."
            }
          }
        ]
      }
    ]
  };

  const faqs = [
    {
      question: "What makes Odin Digital the best Google Ads Agency?",
      answer: "We eliminate the conflict of interest inherent in the typical agency model. We are a performance-focused Google Ads Agency with a no lock-in contract policy, meaning we are 100% accountable for delivering results every month. Our senior-level strategists focus exclusively on ROAS (Return on Ad Spend) and CPA (Cost Per Acquisition), ensuring your ad budget is an investment that generates massive, measurable profit, not just a monthly expense."
    },
    {
      question: "What is the difference between Google Ads and Adwords?",
      answer: "Google Adwords was the original name for Google's advertising platform. In 2018, Google rebranded the platform to Google Ads. The core function remains the same: advertising on Google Search, Display Network, YouTube, and more. When you search for an Adwords Agency or Adwords Management, you are looking for a partner who manages the current Google Ads platform. We are experts in both the legacy and modern features of the platform."
    },
    {
      question: "How much do your Google Ads Management Services cost?",
      answer: "Our fee structure is designed to align with your profitability, not your ad spend. We do not charge a percentage of your ad budget, which eliminates the conflict of interest. Instead, we offer a transparent, flat-fee or performance-based model tailored to your specific goals and budget. The exact cost depends on the complexity and size of your campaigns, but we guarantee a structure that incentivizes us to improve your ROAS, not just increase your spend."
    },
    {
      question: "How much should I be spending on Google Ads?",
      answer: "Your ideal Google Ads budget is determined by your business goals, your industry's average Cost Per Click (CPC), and your target Cost Per Acquisition (CPA). We start with a conservative test budget to gather data and then scale based on performance. We never recommend increasing your budget until we can prove that the additional spend will generate a profitable return. Our focus is on efficiency and maximizing the ROAS of every dollar spent."
    },
    {
      question: "Why should I hire a Google Ads Expert Agency instead of doing it myself?",
      answer: "Google Ads is a complex, constantly evolving platform. Without senior expertise, most businesses waste significant budget on irrelevant clicks due to poor keyword targeting, inadequate negative keyword lists, and flawed bidding strategies. A professional Google Ads Expert Agency like Odin Digital has the experience and tools to achieve a lower CPA and higher ROAS than you can typically achieve in-house, making the management fee a profitable investment."
    },
    {
      question: "Do you manage Performance Max (PMax) campaigns?",
      answer: "Yes, we manage Performance Max campaigns, but we do so with human intelligence. While PMax is a powerful automation tool, it requires high-quality data and strategic oversight to be profitable. We ensure PMax is fed the right audience signals, conversion values, and creative assets, and we monitor its performance closely to prevent it from wasting budget on low-value placements. We turn the PMax black box into a transparent, high-performing asset."
    },
    {
      question: "How often will I receive reports on my Google Ads performance?",
      answer: "We believe in radical transparency. You will receive a 24/7 live dashboard that provides real-time access to your campaign performance, focusing on key financial metrics like CPA, ROAS, and conversion value. Additionally, your senior Google Ads Specialist will hold regular, scheduled strategy meetings to review the data, explain the optimizations, and collaboratively plan the next steps, ensuring you are always fully informed."
    },
    {
      question: "Can you help me with Google Ads Remarketing?",
      answer: "Absolutely. Google Remarketing Management is a critical component of our full-funnel strategy. We build highly segmented remarketing campaigns across the Display Network and YouTube to re-engage high-intent visitors who left your site without converting. This strategy significantly increases your conversion rate and ensures you capture sales that would otherwise be lost."
    },
    {
      question: "How do you ensure my Google Ads account is protected from wasted spend?",
      answer: "We are meticulous about eliminating wasted spend. Our primary tools are exhaustive negative keyword lists (constantly updated), precise geo-targeting, and conversion-focused bidding strategies. We also conduct regular audit checks to ensure your ads are not showing for irrelevant searches or low-value placements, ensuring your budget is always focused on high-intent buyers."
    },
    {
      question: "Do you require access to my website and Google Analytics?",
      answer: "Yes, full access to your Google Ads account, Google Analytics, and Google Tag Manager is essential. This allows us to ensure accurate conversion tracking, analyze user behavior, and implement the necessary technical fixes to maximize your campaign performance. We operate with full transparency and security, ensuring your data is always protected."
    },
    {
      question: "What is a good ROAS (Return on Ad Spend) for Google Ads?",
      answer: "A \"good\" ROAS varies by industry and profit margin, but generally, a 4:1 ROAS (earning $4 for every $1 spent) is considered excellent. However, we focus on *your* break-even point and profit margin. Our goal is to achieve a ROAS that makes your Google Ads campaign significantly profitable for your specific business model. We aim for the highest possible ROAS, not just an industry average."
    },
    {
      question: "Why is a no lock-in contract policy important for Google Ads Management?",
      answer: "A no lock-in contract policy is the ultimate guarantee of accountability. If an Adwords Agency is confident in their performance, they don't need a contract to trap you. Our month-to-month agreement ensures that we are constantly earning your business by delivering superior ROAS and transparency. It shifts the risk from you to us, where it belongs."
    },
    {
      question: "How do you handle the transition from an old Google Ads Agency?",
      answer: "We make the transition seamless and painless. We start with a full account audit to identify any hidden issues or budget bleed. We then secure full ownership of your account for you, clean up the campaign structure, and implement our proven strategy. Our goal is to stabilize performance immediately and then begin scaling your profitable campaigns quickly."
    },
    {
      question: "Can you help with Google Display Advertising?",
      answer: "Yes. We are experts in Google Display Advertising and use it strategically for both remarketing and prospecting. We focus on placing highly visual, compelling ads on relevant websites to build brand awareness and drive traffic. Unlike many agencies that treat Display as an afterthought, we integrate it into a cohesive full-funnel strategy."
    },
    {
      question: "What are the common mistakes made by businesses managing their own Google Ads?",
      answer: "The most common mistakes are poor conversion tracking setup, using broad match keywords without negative keyword lists, setting up flawed bidding strategies, and failing to optimize landing pages. These mistakes lead to a low Quality Score, high CPC, and wasted budget. Hiring a Google Ads Specialist avoids these costly errors."
    },
    {
      question: "Do you manage YouTube and Video Advertising?",
      answer: "Yes, YouTube and Video advertising are powerful components of the Google Ads platform. We manage video campaigns for both direct response (driving a sale or lead) and brand awareness, using advanced targeting options to ensure your video ads reach the most relevant and high-intent audiences."
    },
    {
      question: "What is your approach to bidding strategies?",
      answer: "Our bidding strategies are conversion-focused and data-driven. We move beyond simple manual bidding, leveraging Smart Bidding strategies like Target CPA and Target ROAS, but always with human oversight. We ensure the system is fed accurate conversion data and value, allowing the automation to optimize for maximum profit rather than just maximum clicks."
    },
    {
      question: "How does your integrated approach with SEO benefit my Google Ads campaigns?",
      answer: "Our integrated approach is a massive advantage. We use high-performing, high-converting keywords from your Google Ads campaigns to inform your SEO content strategy, and we use organic data to identify new paid opportunities. This synergy ensures you dominate the search results page (both paid and organic) and maximizes your overall market share."
    },
    {
      question: "Do you work with small businesses or only large corporations?",
      answer: "We work with businesses of all sizes, from small businesses with local goals to large corporations with national campaigns. Our fee structure and strategy are customized to your budget. Our no lock-in contract policy is particularly beneficial for small businesses who need flexibility and guaranteed accountability from their Adwords Management Agency."
    },
    {
      question: "How quickly can you launch a new Google Ads campaign?",
      answer: "Once the strategy is approved and we have access to your accounts, we can typically launch a new, fully optimized Google Ads campaign within 7-10 business days. This includes the time needed for deep keyword research, ad copy creation, conversion tracking setup, and the initial quality assurance checks. We prioritize precision and performance over speed."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Google Ads Management: No Lock-In Contracts | Google Ads Agency | Odin Digital</title>
        <meta name="description" content="Stop wasting ad spend. Performance-focused Google Ads Management with 540% average ROI. No lock-in contracts. Get your FREE audit." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Section 1: Hero Section */}
        <section className="py-20 md:py-32 px-4">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Google Ads Management: Stop Funding Your Agency's Yacht. Start Funding Your Growth.
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-muted-foreground">
              The Only Google Ads Agency That Guarantees Performance with a No Lock-In Contract Policy.
            </h2>
            <p className="text-lg mb-6 text-muted-foreground max-w-3xl mx-auto">
              Let's be brutally honest: most Google Ads agencies are designed to make them rich, not you. They bill you a percentage of your ad spend, which means they profit when you spend more, regardless of whether you make a single dollar. It's a broken system, and you've been paying for it.
            </p>
            <p className="text-lg mb-8 text-muted-foreground max-w-3xl mx-auto">
              At Odin Digital, we're different. We're a performance-focused Google Ads Management agency that only wins when you win. Our no lock-in contract policy is a guarantee: we deliver results every month, or you're free to walk away. No excuses, no excuses.
            </p>
            <Link to="/contact">
              <Button size="xl" className="text-base md:text-lg">
                Get Your FREE Google Ads Strategy Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Section 2: Social Proof Metrics */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">$574M+</div>
                <p className="text-muted-foreground">in Verified Client Revenue</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">540%</div>
                <p className="text-muted-foreground">Average ROI on advertising spend</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">95%</div>
                <p className="text-muted-foreground">Client Retention Rate</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">283+</div>
                <p className="text-muted-foreground">Successful Campaigns Delivered</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Problem-Agitation Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
              Why Your Current Google Ads Management is Failing You
            </h2>
            <p className="text-lg text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
              If you've been burned by a Google Ads agency before, you know the pain. Here's why most fail:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                <TrendingDown className="h-12 w-12 text-destructive mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground">The Percentage Fee Scam</h3>
                <p className="text-muted-foreground">
                  Most agencies charge 15-20% of your ad spend. This creates a fundamental conflict: they profit when you spend more, not when you earn more. It's legalized theft, and it's costing you tens of thousands in wasted budget every month.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                <Shield className="h-12 w-12 text-destructive mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground">Zero Accountability with Long-Term Contracts</h3>
                <p className="text-muted-foreground">
                  Agencies lock you into 6-12 month contracts because they know their performance will decline. Once they have you trapped, the urgency to deliver disappears. You're stuck funding their salaries while your ROI plummets.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                <BarChart3 className="h-12 w-12 text-destructive mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground">Vanity Metrics Over Profit</h3>
                <p className="text-muted-foreground">
                  They'll show you impressive click-through rates and tons of "impressions," but when you ask about actual revenue and ROAS (Return on Ad Spend), they dodge the question. Clicks don't pay your bills; profit does.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Testimonials Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-lg mb-6 text-foreground italic">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI. Their Google Ads Management is second to none, focusing on profitable keywords that actually move the needle. I literally refer all of my friends to these guys."
                </p>
                <div className="font-bold text-foreground">Liam C</div>
                <div className="text-sm text-muted-foreground">Krush Organics</div>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-lg mb-6 text-foreground italic">
                  "Odin Digital took over our complex Adwords Management account and immediately streamlined our campaigns. Within three months, our CPA dropped by 35%, and our revenue from Google Ads increased by over 120%. The transparency and communication are a breath of fresh air."
                </p>
                <div className="font-bold text-foreground">Fabienne Costa</div>
                <div className="text-sm text-muted-foreground">YCL Jewels</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
              Our Google Ads Management Services
            </h2>
            <p className="text-lg text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
              We deliver results across every campaign type, using proven strategies that maximize ROAS.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                <Search className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground">Search & Shopping Campaign Mastery</h3>
                <p className="text-muted-foreground mb-6">
                  We dominate high-intent search terms and product feeds, ensuring your ads appear for the keywords that convert. Our exhaustive negative keyword lists and conversion-focused bidding strategies eliminate wasted spend and drive maximum profit.
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    See Our Search Strategy <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground">Performance Max (PMax) with Human Oversight</h3>
                <p className="text-muted-foreground mb-6">
                  Performance Max can be a goldmine or a black hole. We harness its automation with senior-level human intelligence, ensuring PMax is fed the right data, audience signals, and conversion values to maximize profitability.
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    Master PMax with Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-card border border-border">
                <Eye className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground">Display, Video, and Remarketing</h3>
                <p className="text-muted-foreground mb-6">
                  We create full-funnel campaigns that re-engage high-intent visitors and build brand awareness on YouTube and the Display Network. Our remarketing strategies ensure you capture every conversion opportunity.
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    Get Your Remarketing Plan <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Differentiators Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              Why Odin Digital is the Only Google Ads Partner You Need
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">No Percentage Fees—Ever</h3>
                  <p className="text-muted-foreground">
                    We don't profit from your ad spend. Our transparent, flat-fee or performance-based pricing aligns our success with yours. When you make more money, we succeed. It's that simple.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">No Lock-In Contracts</h3>
                  <p className="text-muted-foreground">
                    We earn your business every single month. If we don't deliver measurable results, you're free to leave—no penalties, no BS. This policy forces us to be exceptional, every single day.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Senior-Level Strategists Only</h3>
                  <p className="text-muted-foreground">
                    Your account is managed by certified Google Ads Experts with years of experience, not junior staff learning on your dime. We bring deep platform knowledge and a relentless focus on ROAS and CPA optimization.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Full Transparency & Real-Time Reporting</h3>
                  <p className="text-muted-foreground">
                    You have 24/7 access to a live dashboard showing exactly where every dollar is going and what revenue it's generating. No smoke, no mirrors—just clear, honest data you can trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Process Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              Our Proven 4-Step Process for Maximum ROI on Google Ads
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Deep Account Audit</h3>
                <p className="text-muted-foreground">
                  We analyze your current campaigns (or competitive landscape if starting fresh) to identify budget bleed, wasted spend, and missed opportunities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Strategic Campaign Build</h3>
                <p className="text-muted-foreground">
                  We build conversion-focused campaigns from the ground up, leveraging advanced keyword research, compelling ad copy, and precise audience targeting.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Relentless Optimization</h3>
                <p className="text-muted-foreground">
                  We continuously test, refine, and optimize your campaigns based on real performance data, improving ROAS and reducing CPA every single month.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Scale What Works</h3>
                <p className="text-muted-foreground">
                  Once we prove profitability, we strategically scale your ad budget to maximize revenue while maintaining or improving efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Why Choose Us Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              Why Odin Digital is the Smartest Investment for Your Google Ads Budget
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">We Focus on Your Bottom Line, Not Our Commission</h3>
                <p className="text-lg text-muted-foreground">
                  Unlike percentage-based agencies, we're only successful when you're profitable. This alignment of incentives means every decision we make is designed to increase your ROAS and reduce your CPA, not to inflate your ad spend.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">No Lock-In Contracts = Maximum Accountability</h3>
                <p className="text-lg text-muted-foreground">
                  We reject the standard agency model of trapping clients in long contracts. Our month-to-month agreement forces us to deliver exceptional results every single month, or we lose your business. This accountability is your guarantee of performance.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Proven Track Record of 540% Average ROI</h3>
                <p className="text-lg text-muted-foreground">
                  We've generated over $574M in verified client revenue. Our 95% client retention rate proves that we don't just promise results—we deliver them, month after month, year after year.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Integrated Strategy with SEO for Total Market Domination</h3>
                <p className="text-lg text-muted-foreground">
                  We're not just a Google Ads agency. Our expertise in SEO, PPC, and web design allows us to create a unified strategy that dominates both paid and organic search, maximizing your overall market share and revenue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Final CTA Section */}
        <section className="py-20 px-4 bg-gradient-primary text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Stop Losing Money and Start Generating Massive ROI from Google Ads?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Stop wasting your budget on agencies that prioritize their profit over yours. Partner with Odin Digital and experience the difference of working with a Google Ads agency that's 100% accountable for your success. Get your FREE, no-obligation Google Ads Strategy Audit today and discover exactly how much money you're leaving on the table.
            </p>
            <Link to="/contact">
              <Button size="xl" variant="secondary" className="text-base md:text-lg">
                Get Your FREE Google Ads Strategy Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Section 10: FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground">
                    {faq.question}
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
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%] max-w-sm">
          <Link to="/contact" className="block">
            <Button size="lg" className="w-full text-sm">
              <span className="hidden xs:inline">Get Your FREE Strategy Audit</span>
              <span className="xs:hidden">FREE Strategy Audit</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GoogleAdsManagement;
