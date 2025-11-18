import { Helmet } from 'react-helmet';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceHero } from '@/components/ServiceHero';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, TrendingUp, Award, Users, BarChart3, Shield, MapPin, Target, Zap, Network } from 'lucide-react';

const FranchiseBusinesses = () => {
  const navigate = useNavigate();

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+61-2-8000-0000",
          "contactType": "customer service"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Digital Marketing for Franchise Businesses",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "name": "Digital Marketing for Franchise Businesses",
        "description": "Scalable digital marketing services for multi-location franchise businesses, including Local SEO, multi-location PPC management, and franchisee lead generation campaigns.",
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Franchise Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local SEO for Franchises"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Multi-Location PPC Management"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Franchise Website Development"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the biggest challenge in digital marketing for franchise businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The biggest challenge is balancing brand consistency with local optimization. Our system solves this by providing a centralized platform that enforces brand guidelines while allowing for hyper-local SEO and PPC targeting."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle Local SEO for dozens of locations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use a systematic approach focused on Google Business Profile (GBP) mastery, ensuring every location has an optimized, consistent profile, coupled with a robust strategy for local citation and review management."
            }
          },
          {
            "@type": "Question",
            "name": "How do you manage the co-op marketing fund?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We implement multi-location PPC management with transparent, unified reporting. Every dollar is tracked to the specific location and campaign, proving ROI to both the corporate office and individual franchisees."
            }
          },
          {
            "@type": "Question",
            "name": "Do you help with franchisee recruitment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Franchisee lead generation is a core part of our strategy. We run targeted campaigns on Google and Meta to attract qualified candidates interested in buying a franchise territory."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure brand consistency across all local pages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our franchise website development solution uses a centralized platform that enforces corporate design and messaging, only allowing franchisees to customize essential local information like hours and local promotions."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from franchise marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local PPC and Meta Ads can drive immediate foot traffic and sales within weeks. Local SEO is a long-term strategy, typically showing significant local ranking improvements within 6-12 months."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of reporting do you provide to franchisees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide a unified, transparent dashboard that shows the performance of the entire network and granular, location-specific data, including leads, calls, and foot traffic attributed to their local marketing spend."
            }
          },
          {
            "@type": "Question",
            "name": "Can you integrate with our existing CRM and lead routing system?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Seamless integration with your central CRM (e.g., Salesforce, HubSpot) and lead routing system is a non-negotiable part of our franchise website development and lead generation process."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with new or established franchise systems?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work with both. Our system is scalable for established networks and provides the essential foundation for new franchise systems looking to launch their first few territories successfully."
            }
          },
          {
            "@type": "Question",
            "name": "What is the role of Meta Ads in franchise marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Meta Ads are crucial for two things: local brand awareness and running highly targeted franchisee recruitment campaigns to attract new owners."
            }
          },
          {
            "@type": "Question",
            "name": "How do you prevent franchisees from running their own, off-brand marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide a superior, high-performing, and easy-to-use centralized system that makes running their own marketing unnecessary and inefficient. Our transparent reporting also proves the value of the centralized system."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer a performance guarantee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer the best guarantee in the industry: No Lock-In Contracts. Our 95% client retention rate is a testament to our performance. We put the risk on us, not you."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle local promotions and seasonal campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our centralized platform allows the corporate office to push national campaigns instantly, while also providing a controlled interface for franchisees to run approved local promotions."
            }
          },
          {
            "@type": "Question",
            "name": "What is the typical budget for a franchise marketing system?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Budgets vary widely based on the number of locations and expansion goals. A comprehensive system for an established franchise typically involves a centralized management fee plus a local marketing budget (co-op fund) per location. We provide a detailed, transparent quote after a system audit."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help us optimize our franchisee recruitment landing pages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We specialize in conversion-focused design and copy for franchisee lead generation pages, ensuring they attract high-quality, financially qualified candidates."
            }
          }
        ]
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "name": "Franchise Marketing System Success",
        "author": {
          "@type": "Person",
          "name": "A National Franchise CEO"
        },
        "reviewBody": "Odin Digital provided the scalable system we desperately needed. They solved our brand consistency issues while simultaneously making every single one of our local franchisees visible in search. Their transparent reporting and dual focus on customer sales and franchisee recruitment has been a game-changer for our network's growth."
      }
    ]
  };

  const painPoints = [
    {
      icon: Award,
      title: "Brand Dilution Disaster",
      description: "Every franchisee is doing their own thing, leading to inconsistent messaging, poor quality ads, and a fragmented brand experience that confuses customers."
    },
    {
      icon: MapPin,
      title: "Local SEO Black Hole",
      description: "Your national site ranks well, but individual locations are invisible in local search results, losing high-intent 'near me' traffic to independent competitors."
    },
    {
      icon: BarChart3,
      title: "Co-op Fund Waste",
      description: "Your shared marketing budget is being spent on generic, untargeted campaigns that fail to drive foot traffic or local sales for individual franchisees."
    },
    {
      icon: Users,
      title: "Franchisee Lead Drought",
      description: "You're struggling to attract qualified, high-quality candidates to buy new territories and expand your network."
    },
    {
      icon: Network,
      title: "Technology Overload",
      description: "Managing a website, social media, and local listings for dozens of locations is a logistical nightmare that drains corporate resources."
    },
    {
      icon: TrendingUp,
      title: "Reporting Chaos",
      description: "You lack a unified, transparent reporting system to prove the ROI of the marketing spend to both the corporate office and individual franchisees."
    }
  ];

  const whyChoose = [
    {
      icon: Zap,
      title: "Proven System for Scale",
      description: "We have a proven, repeatable system for launching and managing marketing for dozens to hundreds of locations, ensuring consistency and efficiency across the board."
    },
    {
      icon: Target,
      title: "Dual Focus: Customer and Franchisee Leads",
      description: "We are one of the few agencies that excels at both customer acquisition for existing locations and high-quality franchisee lead generation for network expansion."
    },
    {
      icon: BarChart3,
      title: "Transparent, Unified Reporting",
      description: "Our unified dashboard provides the transparency needed to manage co-op funds and prove ROI to both the corporate office and every individual franchisee."
    },
    {
      icon: Shield,
      title: "No Lock-In Contracts",
      description: "Our 95% client retention rate is earned, not enforced. We offer month-to-month service because we are confident in our ability to deliver the scalable growth your network needs."
    },
    {
      icon: Network,
      title: "Multi-Location Expertise",
      description: "We understand the complexity of GBP, local citations, geo-fencing, and lead routing—the essential components of successful franchise marketing."
    }
  ];

  const faqs = [
    {
      question: "What is the biggest challenge in digital marketing for franchise businesses?",
      answer: "The biggest challenge is balancing brand consistency with local optimization. Our system solves this by providing a centralized platform that enforces brand guidelines while allowing for hyper-local SEO and PPC targeting."
    },
    {
      question: "How do you handle Local SEO for dozens of locations?",
      answer: "We use a systematic approach focused on Google Business Profile (GBP) mastery, ensuring every location has an optimized, consistent profile, coupled with a robust strategy for local citation and review management."
    },
    {
      question: "How do you manage the co-op marketing fund?",
      answer: "We implement multi-location PPC management with transparent, unified reporting. Every dollar is tracked to the specific location and campaign, proving ROI to both the corporate office and individual franchisees."
    },
    {
      question: "Do you help with franchisee recruitment?",
      answer: "Yes. Franchisee lead generation is a core part of our strategy. We run targeted campaigns on Google and Meta to attract qualified candidates interested in buying a franchise territory."
    },
    {
      question: "How do you ensure brand consistency across all local pages?",
      answer: "Our franchise website development solution uses a centralized platform that enforces corporate design and messaging, only allowing franchisees to customise essential local information like hours and local promotions."
    },
    {
      question: "How long does it take to see results from franchise marketing?",
      answer: "Local PPC and Meta Ads can drive immediate foot traffic and sales within weeks. Local SEO is a long-term strategy, typically showing significant local ranking improvements within 6-12 months."
    },
    {
      question: "What kind of reporting do you provide to franchisees?",
      answer: "We provide a unified, transparent dashboard that shows the performance of the entire network and granular, location-specific data, including leads, calls, and foot traffic attributed to their local marketing spend."
    },
    {
      question: "Can you integrate with our existing CRM and lead routing system?",
      answer: "Absolutely. Seamless integration with your central CRM (e.g., Salesforce, HubSpot) and lead routing system is a non-negotiable part of our franchise website development and lead generation process."
    },
    {
      question: "Do you work with new or established franchise systems?",
      answer: "We work with both. Our system is scalable for established networks and provides the essential foundation for new franchise systems looking to launch their first few territories successfully."
    },
    {
      question: "What is the role of Meta Ads in franchise marketing?",
      answer: "Meta Ads are crucial for two things: local brand awareness and running highly targeted franchisee recruitment campaigns to attract new owners."
    },
    {
      question: "How do you prevent franchisees from running their own, off-brand marketing?",
      answer: "We provide a superior, high-performing, and easy-to-use centralised system that makes running their own marketing unnecessary and inefficient. Our transparent reporting also proves the value of the centralised system."
    },
    {
      question: "Do you offer a performance guarantee?",
      answer: "We offer the best guarantee in the industry: No Lock-In Contracts. Our 95% client retention rate is a testament to our performance. We put the risk on us, not you."
    },
    {
      question: "How do you handle local promotions and seasonal campaigns?",
      answer: "Our centralised platform allows the corporate office to push national campaigns instantly, while also providing a controlled interface for franchisees to run approved local promotions."
    },
    {
      question: "What is the typical budget for a franchise marketing system?",
      answer: "Budgets vary widely based on the number of locations and expansion goals. A comprehensive system for an established franchise typically involves a centralised management fee plus a local marketing budget (co-op fund) per location. We provide a detailed, transparent quote after a system audit."
    },
    {
      question: "Can you help us optimize our franchisee recruitment landing pages?",
      answer: "Yes. We specialise in conversion-focused design and copy for franchisee lead generation pages, ensuring they attract high-quality, financially qualified candidates."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Marketing for Franchise Businesses | Multi-Location Growth | Odin Digital</title>
        <meta name="description" content="Stop managing chaos. Odin Digital provides scalable digital marketing for franchise businesses, specializing in Local SEO, multi-location PPC, and franchisee lead generation." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-white via-muted/30 to-muted/20">
        <Header />
        
        <ServiceHero
          h1="Digital Marketing for Franchise Businesses"
          subheadline="The Scalable System for Multi-Location Growth. Stop Managing Chaos. Start Dominating Every Territory."
        />

        {/* Pain Points Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-muted/20 animate-blob" style={{ animationDelay: '0s' }}></div>
          <div className="absolute inset-0 bg-muted/15 animate-blob" style={{ animationDelay: '2s' }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-4 text-charcoal">Why Most Marketing Agencies Fail Franchise Businesses</h2>
            <p className="text-xl text-center mb-12 text-charcoal/80 max-w-4xl mx-auto">
              The standard marketing playbook is not built for scale or local optimization. Here's why most agencies are a poor fit for franchise marketing.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {painPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <Card key={index} className="backdrop-blur-sm bg-white/80 border-primary/10 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-charcoal">{point.title}</h3>
                      <p className="text-charcoal/70 leading-relaxed">{point.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-3 text-lg whitespace-normal break-words"
              >
                Stop Wasting Co-op Funds: Talk to a Franchise Marketing Expert →
              </Button>
            </div>
          </div>
        </section>

        {/* Local SEO Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-muted/10 animate-blob" style={{ animationDelay: '1s' }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-4 text-charcoal">Local SEO for Franchises: Dominating Every "Near Me" Search</h2>
            <p className="text-xl text-center mb-12 text-charcoal/80 max-w-4xl mx-auto">
              We build local SEO for franchises strategies that ensure every single one of your locations is the first result when a customer searches for your service "near me."
            </p>

            <div className="max-w-5xl mx-auto space-y-8">
              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Google Business Profile (GBP) Mastery</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We take control of and optimise every single Google Business Profile for your network, ensuring accurate information, consistent branding, and a strategy for generating and managing local reviews.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Hyper-Local Content Strategy</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We create location-specific landing pages and content that are optimised for local keywords (e.g., "best pizza in Sydney," "gym near Brisbane CBD"), driving high-intent traffic directly to the nearest franchisee.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Citation and Directory Management</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We ensure your Name, Address, and Phone Number (NAP) is consistent across hundreds of local directories and citation sources, which is critical for local search ranking authority.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Review Management and Generation</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We implement a system for generating a consistent stream of positive, local reviews, which is one of the most powerful factors in local search ranking and customer trust.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-3 text-lg whitespace-normal break-words"
              >
                See Our Local SEO for Franchises Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* Multi-Location PPC Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-muted/20 animate-blob" style={{ animationDelay: '3s' }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-4 text-charcoal">Multi-Location PPC Management: Driving Foot Traffic and Local Sales</h2>
            <p className="text-xl text-center mb-12 text-charcoal/80 max-w-4xl mx-auto">
              We build multi-location PPC management campaigns that deliver immediate, localised sales while maintaining a healthy Cost Per Acquisition (CPA) across the network.
            </p>

            <div className="max-w-5xl mx-auto space-y-8">
              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Geo-Fencing and Radius Targeting</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We use advanced geo-fencing and radius targeting to ensure your ads are only shown to customers within the precise service area of each individual franchisee, eliminating wasted national spend.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Centralised Ad Copy and Asset Management</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We maintain a centralised library of high-performing ad copy and creative assets, ensuring brand consistency while allowing for local price or promotion customisation.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Budget Allocation and Co-op Fund Reporting</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We manage the complex budget allocation across all locations, providing transparent reporting that clearly shows how the co-op fund is performing at the national and local level.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Conversion Tracking for Every Location</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We implement advanced conversion tracking to accurately attribute every lead, call, and foot traffic visit to the correct location and campaign, providing clear ROI for every franchisee.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-3 text-lg whitespace-normal break-words"
              >
                See Our Multi-Location PPC Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* Meta Ads Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-muted/15 animate-blob" style={{ animationDelay: '4s' }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-4 text-charcoal">Meta Ads for Franchise Businesses: Brand Consistency and Franchisee Recruitment</h2>
            <p className="text-xl text-center mb-12 text-charcoal/80 max-w-4xl mx-auto">
              We build Meta Ads for Franchise Businesses campaigns that serve the dual purpose of driving local customer sales and attracting high-quality franchisee candidates.
            </p>

            <div className="max-w-5xl mx-auto space-y-8">
              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Brand Awareness and Local Sales Campaigns</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We run two distinct campaign types: a national campaign to build brand authority and local campaigns that target customers within each territory with location-specific offers.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Franchisee Recruitment Campaigns</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We use highly specific targeting (demographics, interests, net worth) to attract qualified candidates interested in buying a franchise, filling your pipeline with potential new owners.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Centralised Creative Asset Management</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We manage all creative assets centrally, ensuring every local ad maintains the high visual standards of the national brand, preventing brand dilution.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-3 text-lg whitespace-normal break-words"
              >
                See Our Franchise Meta Ads Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* Website Development Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-muted/10 animate-blob" style={{ animationDelay: '2s' }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-4 text-charcoal">Franchise Website Development: Scalable and Consistent</h2>
            <p className="text-xl text-center mb-12 text-charcoal/80 max-w-4xl mx-auto">
              We build franchise website development solutions that provide a single, scalable platform for your entire network, balancing corporate control with local flexibility.
            </p>

            <div className="max-w-5xl mx-auto space-y-8">
              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Centralised Platform with Local Pages</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We build a single, robust website platform with individual, SEO-optimised landing pages for every location, allowing for centralised updates and local content customisation.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Lead Routing and CRM Integration</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We ensure all customer leads are automatically routed to the correct local franchisee and seamlessly integrated with your central CRM and lead management system.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Mobile-First and Speed Optimised</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  With customers searching on the go, every location page is built to be lightning-fast and flawlessly mobile-optimised, which is critical for local search ranking.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Brand Consistency Enforcement</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  The platform is designed to enforce brand guidelines, ensuring every local page maintains the corporate look and feel while allowing franchisees to update local information easily.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-3 text-lg whitespace-normal break-words"
              >
                See Our Franchise Web Development Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-muted/20 animate-blob" style={{ animationDelay: '1s' }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-4 text-charcoal">Why Franchise Businesses Choose Odin Digital</h2>
            <p className="text-xl text-center mb-12 text-charcoal/80 max-w-4xl mx-auto">
              We are specialists who understand the unique operational and marketing challenges of multi-location businesses. We don't just run campaigns; we build scalable systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {whyChoose.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="backdrop-blur-sm bg-white/80 border-primary/10 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-charcoal">{item.title}</h3>
                      <p className="text-charcoal/70 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <Button 
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-3 text-lg whitespace-normal break-words"
              >
                Schedule Your Franchise Growth Strategy Session →
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-muted/15 animate-blob" style={{ animationDelay: '3s' }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-4 text-charcoal">FAQs: Your Questions About Franchise Marketing Answered</h2>
            
            <div className="max-w-4xl mx-auto mt-12">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="backdrop-blur-sm bg-white/80 border border-primary/10 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-charcoal hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-charcoal/70 leading-relaxed pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
          <div className="absolute inset-0 bg-muted/10 animate-blob" style={{ animationDelay: '0s' }}></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
              Ready to Stop Managing Chaos and Start Dominating Every Territory?
            </h2>
            <p className="text-xl mb-8 text-charcoal/80 max-w-3xl mx-auto">
              Stop letting fragmented marketing hold back your network's growth. Start working with the franchise marketing agency that builds scalable systems, enforces brand consistency, and drives local sales in every territory.
            </p>
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-10 py-4 text-xl whitespace-normal break-words"
            >
              Schedule Your Franchise Growth Strategy Session →
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FranchiseBusinesses;
