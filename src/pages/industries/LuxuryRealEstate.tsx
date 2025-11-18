import { Helmet } from 'react-helmet';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceHero } from '@/components/ServiceHero';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, TrendingUp, Award, Users, BarChart3, Shield } from 'lucide-react';

const LuxuryRealEstate = () => {
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
        "serviceType": "Digital Marketing for Luxury Real Estate",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "name": "Digital Marketing for Luxury Real Estate",
        "description": "Exclusive digital marketing services for luxury real estate agents and brokerages, including high-net-worth lead generation, brand-focused SEO, and luxury property website design.",
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Luxury Real Estate Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Exclusive Real Estate SEO"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "High-Net-Worth PPC"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Luxury Property Website Design"
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
            "name": "What is the most effective digital marketing channel for luxury real estate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The most effective channel is a balanced, integrated strategy. Exclusive Real Estate SEO builds long-term authority and trust, while High-Net-Worth PPC and Meta Ads provide immediate, highly-qualified buyer inquiries."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure the leads are high-net-worth individuals (HNWIs)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use a combination of advanced targeting methods: lookalike audiences based on existing client data, precision demographic and interest targeting, and ad copy that filters for high-value intent (e.g., 'private viewing,' 'confidential consultation')."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from luxury real estate marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PPC and targeted Meta Ads can generate qualified inquiries within weeks. SEO is a long-term authority play, typically showing significant results in 9-18 months. We focus on a blended strategy for both immediate and sustained growth."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle the marketing of off-market or confidential listings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We prioritize discretion. For off-market listings, we use highly restricted, private audience targeting via email lists and custom audiences on Meta, focusing on 'access' and 'exclusivity' without public broadcasting."
            }
          },
          {
            "@type": "Question",
            "name": "What makes your luxury property website design different?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our luxury property website design focuses on visual excellence, cinematic presentation, and a flawless user experience. The design is minimalist, elegant, and conversion-optimized for private inquiries, reflecting the prestige of the properties."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with individual agents, teams, or brokerages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work with individual top-tier agents, elite teams, and full brokerages who specialize exclusively in the luxury and high-end property market."
            }
          },
          {
            "@type": "Question",
            "name": "How do you measure success in the luxury real estate market?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We measure success based on Qualified Buyer Inquiries, Average Transaction Value, Brand Sentiment, and ultimately, Closed Sales Volume. We track every lead from the first touch to the final closing."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with branding and visual identity for a luxury real estate team?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While our core focus is digital marketing, our luxury property website design and Meta Ads teams are experts in visual storytelling and brand consistency, ensuring your digital identity matches your high-end service."
            }
          },
          {
            "@type": "Question",
            "name": "What is 'Exclusive Real Estate SEO'?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It's an SEO strategy that moves beyond generic city-level keywords to target specific, high-value enclaves and neighborhoods, positioning you as the local authority for high-end properties."
            }
          },
          {
            "@type": "Question",
            "name": "Do you integrate with our CRM and lead management systems?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We integrate directly with your CRM (e.g., Salesforce, HubSpot, Follow Up Boss) to ensure seamless lead tracking and reporting on the metrics that matter most: closed sales and transaction value."
            }
          },
          {
            "@type": "Question",
            "name": "How do you maintain brand exclusivity in a digital world?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By focusing on quality over quantity in every touchpoint: highly targeted ads, cinematic visuals, elegant website design, and content that speaks to a sophisticated, discerning audience."
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
            "name": "What kind of imagery and video do you recommend for luxury listings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend cinematic video tours, professional drone photography, and high-resolution, magazine-quality interior shots. Our campaigns are built around showcasing the lifestyle of the property."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle the long sales cycle common in luxury real estate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use sophisticated retargeting and email nurturing campaigns to build trust and maintain brand presence over the long decision-making period, ensuring you are the first call when the buyer is ready."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help us target international high-net-worth buyers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We implement geo-targeting and language-specific campaigns to reach international HNWIs who are actively looking to invest in Australian luxury property."
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
        "name": "Luxury Real Estate Marketing Success",
        "author": {
          "@type": "Person",
          "name": "A Top-Tier Real Estate Broker"
        },
        "reviewBody": "Odin Digital understands that in luxury real estate, discretion and quality are everything. They completely transformed our digital presence, moving us from generic leads to highly qualified, high-net-worth inquiries. Their website design is flawless, and their targeting is unmatched. A true partner in the high-end market."
      }
    ]
  };

  const painPoints = [
    {
      icon: Users,
      title: "Low-Quality Lead Flood",
      description: "Your inbox is full of unqualified leads from generic portals, wasting your time and diluting your focus from high-net-worth clients."
    },
    {
      icon: Award,
      title: "Eroded Exclusivity",
      description: "Your marketing looks cheap, generic, and is being broadcast to the masses, which immediately undermines the exclusive nature of your listings."
    },
    {
      icon: TrendingUp,
      title: "Poor Digital Presentation",
      description: "Your website and digital assets fail to capture the prestige and visual quality of your properties, leading to high bounce rates from discerning buyers."
    },
    {
      icon: Shield,
      title: "Lack of Discretion",
      description: "Your agency uses broad, public tactics that compromise the privacy and discretion required when dealing with high-net-worth individuals (HNWIs)."
    },
    {
      icon: CheckCircle2,
      title: "Inconsistent Brand Image",
      description: "The digital experience doesn't match the white-glove service you provide in person, creating a jarring and untrustworthy brand image."
    },
    {
      icon: BarChart3,
      title: "Vanity Metrics Over ROI",
      description: "The agency reports on clicks and impressions, but fails to deliver qualified, high-net-worth buyer inquiries."
    }
  ];

  const whyChoose = [
    {
      icon: Award,
      title: "Proven Track Record in High-Value Markets",
      description: "We've generated over $574 million in client revenue across all industries, with a significant track record in high-value sectors where trust and discretion are paramount."
    },
    {
      icon: TrendingUp,
      title: "Focus on Qualified Inquiries, Not Volume",
      description: "Our reporting is focused on Qualified Buyer Inquiries, Average Transaction Value, and Brand Sentiment. We eliminate the vanity metrics and focus on what truly grows your business."
    },
    {
      icon: Shield,
      title: "Discretion and Confidentiality",
      description: "We understand the need for confidentiality when dealing with high-net-worth clients and off-market listings. Our processes are built to ensure the utmost discretion in all campaigns."
    },
    {
      icon: CheckCircle2,
      title: "Full Transparency and Partnership",
      description: "We provide full access to your analytics and reporting. We view ourselves as a confidential partner, not just a vendor."
    },
    {
      icon: Users,
      title: "No Lock-In Contracts",
      description: "Our 95% client retention rate is earned, not enforced. We offer month-to-month service because we are confident in our ability to deliver the high-quality results your brand demands."
    }
  ];

  const faqs = [
    {
      question: "What is the most effective digital marketing channel for luxury real estate?",
      answer: "The most effective channel is a balanced, integrated strategy. Exclusive Real Estate SEO builds long-term authority and trust, while High-Net-Worth PPC and Meta Ads provide immediate, highly-qualified buyer inquiries."
    },
    {
      question: "How do you ensure the leads are high-net-worth individuals (HNWIs)?",
      answer: "We use a combination of advanced targeting methods: lookalike audiences based on existing client data, precision demographic and interest targeting, and ad copy that filters for high-value intent (e.g., 'private viewing,' 'confidential consultation')."
    },
    {
      question: "How long does it take to see results from luxury real estate marketing?",
      answer: "PPC and targeted Meta Ads can generate qualified inquiries within weeks. SEO is a long-term authority play, typically showing significant results in 9-18 months. We focus on a blended strategy for both immediate and sustained growth."
    },
    {
      question: "How do you handle the marketing of off-market or confidential listings?",
      answer: "We prioritize discretion. For off-market listings, we use highly restricted, private audience targeting via email lists and custom audiences on Meta, focusing on 'access' and 'exclusivity' without public broadcasting."
    },
    {
      question: "What makes your luxury property website design different?",
      answer: "Our luxury property website design focuses on visual excellence, cinematic presentation, and a flawless user experience. The design is minimalist, elegant, and conversion-optimized for private inquiries, reflecting the prestige of the properties."
    },
    {
      question: "Do you work with individual agents, teams, or brokerages?",
      answer: "We work with individual top-tier agents, elite teams, and full brokerages who specialize exclusively in the luxury and high-end property market."
    },
    {
      question: "How do you measure success in the luxury real estate market?",
      answer: "We measure success based on Qualified Buyer Inquiries, Average Transaction Value, Brand Sentiment, and ultimately, Closed Sales Volume. We track every lead from the first touch to the final closing."
    },
    {
      question: "Can you help with branding and visual identity for a luxury real estate team?",
      answer: "While our core focus is digital marketing, our luxury property website design and Meta Ads teams are experts in visual storytelling and brand consistency, ensuring your digital identity matches your high-end service."
    },
    {
      question: "What is 'Exclusive Real Estate SEO'?",
      answer: "It's an SEO strategy that moves beyond generic city-level keywords to target specific, high-value enclaves and neighborhoods, positioning you as the local authority for high-end properties."
    },
    {
      question: "Do you integrate with our CRM and lead management systems?",
      answer: "Absolutely. We integrate directly with your CRM (e.g., Salesforce, HubSpot, Follow Up Boss) to ensure seamless lead tracking and reporting on the metrics that matter most: closed sales and transaction value."
    },
    {
      question: "How do you maintain brand exclusivity in a digital world?",
      answer: "By focusing on quality over quantity in every touchpoint: highly targeted ads, cinematic visuals, elegant website design, and content that speaks to a sophisticated, discerning audience."
    },
    {
      question: "Do you offer a performance guarantee?",
      answer: "We offer the best guarantee in the industry: No Lock-In Contracts. Our 95% client retention rate is a testament to our performance. We put the risk on us, not you."
    },
    {
      question: "What kind of imagery and video do you recommend for luxury listings?",
      answer: "We recommend cinematic video tours, professional drone photography, and high-resolution, magazine-quality interior shots. Our campaigns are built around showcasing the lifestyle of the property."
    },
    {
      question: "How do you handle the long sales cycle common in luxury real estate?",
      answer: "We use sophisticated retargeting and email nurturing campaigns to build trust and maintain brand presence over the long decision-making period, ensuring you are the first call when the buyer is ready."
    },
    {
      question: "Can you help us target international high-net-worth buyers?",
      answer: "Yes. We implement geo-targeting and language-specific campaigns to reach international HNWIs who are actively looking to invest in Australian luxury property."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Marketing for Luxury Real Estate | Exclusive Clients | Odin Digital</title>
        <meta name="description" content="Stop chasing leads. Odin Digital provides exclusive digital marketing for luxury real estate, focusing on high-net-worth lead generation, brand exclusivity, and visual excellence." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-white via-muted/30 to-muted/20">
        <Header />
        
        <ServiceHero
          h1="Digital Marketing for Luxury Real Estate"
          subheadline="The Digital Strategy for the Top 1% of Properties. Stop Chasing Leads. Start Attracting Exclusive Clients."
        />

        {/* Pain Points Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-muted/20 animate-blob" style={{ animationDelay: '0s' }}></div>
          <div className="absolute inset-0 bg-muted/15 animate-blob" style={{ animationDelay: '2s' }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-4 text-charcoal">Why Most Marketing Agencies Fail Luxury Real Estate Professionals</h2>
            <p className="text-xl text-center mb-12 text-charcoal/80 max-w-4xl mx-auto">
              The standard marketing playbook is designed for volume, not value. Here's why most agencies are a poor fit for luxury real estate marketing.
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
                Elevate Your Brand: Talk to a Luxury Marketing Specialist →
              </Button>
            </div>
          </div>
        </section>

        {/* Exclusive Real Estate SEO Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-muted/10 animate-blob" style={{ animationDelay: '1s' }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-4 text-charcoal">Exclusive Real Estate SEO: Establishing Digital Authority and Trust</h2>
            <p className="text-xl text-center mb-12 text-charcoal/80 max-w-4xl mx-auto">
              We build exclusive real estate SEO strategies that position you as the undisputed authority for high-end properties in your target markets, attracting buyers who are actively searching for the best.
            </p>

            <div className="max-w-5xl mx-auto space-y-8">
              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Authority-Driven Content: The Voice of Expertise</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We create content that speaks to the sophisticated buyer and seller—market reports, investment analysis, and neighbourhood deep dives—establishing your expertise and building trust long before the first call.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Hyper-Local SEO for Luxury: Targeting Specific Enclaves</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Generic SEO targets cities. We target specific, high-value enclaves and neighbourhoods (e.g., "Vaucluse waterfront property," "Toorak mansion for sale"), capturing the most valuable, hyper-local search traffic.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Visual SEO Optimization: High-Resolution Imagery and Video</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  In luxury, visuals are paramount. We optimise your high-resolution property photos and cinematic video tours for search engines, ensuring they rank prominently in image and video search results.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Technical Excellence: Speed and Security</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  A slow or insecure website is a deal-breaker for HNWIs. We ensure your site is technically flawless, optimising for speed, mobile experience, and the highest levels of security and data privacy.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-3 text-lg whitespace-normal break-words"
              >
                See Our Exclusive Real Estate SEO Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* High-Net-Worth PPC Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-muted/20 animate-blob" style={{ animationDelay: '3s' }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-4 text-charcoal">High-Net-Worth Lead Generation (PPC): Discretion and Precision</h2>
            <p className="text-xl text-center mb-12 text-charcoal/80 max-w-4xl mx-auto">
              We build PPC campaigns that deliver immediate, qualified buyer inquiries while maintaining a healthy Cost Per Qualified Lead (CPQL).
            </p>

            <div className="max-w-5xl mx-auto space-y-8">
              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Precision Targeting: Reaching the Right Audience</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We use advanced demographic, interest, and behavioural targeting to reach high-net-worth individuals (HNWIs) and their trusted advisors, minimising wasted spend on unqualified traffic.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Funnel-Aligned Ad Copy: Exclusivity and Access</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Our ad copy focuses on exclusivity, private viewings, and "access to off-market listings," filtering out low-intent users and attracting prospects who value discretion and privilege.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Competitor Conquesting: Capturing Users Ready to Switch</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We build targeted campaigns to capture users searching for your competitors, positioning your brand as the superior, more exclusive alternative.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Landing Page Optimization: Maximizing Inquiry Conversion</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We ensure your PPC traffic lands on a dedicated, conversion-optimised landing page designed to maximise the private inquiry or consultation request conversion rate, not just a general contact form.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-3 text-lg whitespace-normal break-words"
              >
                See Our High-Net-Worth PPC Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* Meta Ads Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-muted/15 animate-blob" style={{ animationDelay: '4s' }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-4 text-charcoal">Meta Ads for Luxury Real Estate: Visual Storytelling and Lookalike Audiences</h2>
            <p className="text-xl text-center mb-12 text-charcoal/80 max-w-4xl mx-auto">
              We build Meta Ads for Luxury Real Estate campaigns that leverage the platform's visual nature for brand storytelling and its targeting capabilities for high-net-worth lookalike audiences.
            </p>

            <div className="max-w-5xl mx-auto space-y-8">
              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Cinematic Visual Storytelling: Capturing the Lifestyle</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Meta is a visual platform. We use stunning, cinematic video and image ads to sell the lifestyle associated with your properties, not just the features.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Lookalike Audience Strategy: Scaling High-Value Leads</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We leverage your existing client data (CRM integration) to create highly effective lookalike audiences, ensuring your ads are seen by people who share the characteristics of your most valuable clients.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Retargeting for Nurturing: The Long-Term Relationship</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  The luxury sales cycle can be long. We aggressively retarget website visitors and content downloaders with compelling, personalised content to nurture them through the decision-making process, building trust over time.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-3 text-lg whitespace-normal break-words"
              >
                See Our Luxury Meta Ads Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* Website Design Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-muted/10 animate-blob" style={{ animationDelay: '2s' }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-4 text-charcoal">Luxury Property Website Design: Your Digital Showpiece</h2>
            <p className="text-xl text-center mb-12 text-charcoal/80 max-w-4xl mx-auto">
              We build luxury property website design that serves as your digital showpiece, positioning your brand as the market leader and converting visitors into private inquiries.
            </p>

            <div className="max-w-5xl mx-auto space-y-8">
              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Visual Excellence and Performance: Flawless Presentation</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Your website must be a work of art. We prioritise large, high-resolution imagery, cinematic video integration, and a minimalist, elegant design that loads instantly and works flawlessly on all devices.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Conversion-Optimized for Discretion: Private Inquiry Focus</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We prioritise clear, prominent Calls-to-Action (CTAs) for Private Viewings and Confidential Consultations, minimising friction and maximising the qualified inquiry conversion rate.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Technical SEO Foundation: Built for Authority</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We ensure your website is built on a robust, modern framework with a flawless technical SEO foundation, ready to support your long-term authority-building strategy.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-charcoal">Brand Consistency: Digital White-Glove Service</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Every element of the design—from typography to colour palette—is meticulously crafted to reflect the exclusivity and white-glove service your brand represents.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-3 text-lg whitespace-normal break-words"
              >
                See Our Luxury Web Design Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-muted/20 animate-blob" style={{ animationDelay: '1s' }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-4 text-charcoal">Why Luxury Real Estate Professionals Choose Odin Digital</h2>
            <p className="text-xl text-center mb-12 text-charcoal/80 max-w-4xl mx-auto">
              We are not a generalist agency. We are specialists who understand that in the luxury market, discretion, quality, and exclusivity are non-negotiable.
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
                Schedule Your Confidential Consultation →
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-muted/15 animate-blob" style={{ animationDelay: '3s' }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-4 text-charcoal">FAQs: Your Questions About Luxury Real Estate Marketing Answered</h2>
            
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
              Ready to Stop Chasing Leads and Start Attracting Exclusive Clients?
            </h2>
            <p className="text-xl mb-8 text-charcoal/80 max-w-3xl mx-auto">
              Stop compromising your brand with generic, volume-based marketing. Start working with the luxury real estate marketing agency that understands the value of discretion, exclusivity, and high-net-worth lead generation.
            </p>
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-10 py-4 text-xl whitespace-normal break-words"
            >
              Schedule Your Confidential Consultation →
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default LuxuryRealEstate;
