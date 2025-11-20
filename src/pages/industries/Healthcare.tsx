import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { 
  Heart, Users, TrendingUp, Shield, Award, 
  Target, Search, BarChart3, FileText, 
  CheckCircle, Star, MessageSquare
} from "lucide-react";

const Healthcare = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Industries", path: "/industries" },
    { label: "Healthcare Marketing", path: "/industries/healthcare" }
  ];

  const painPoints = [
    {
      icon: Shield,
      title: "HIPAA Compliance Complexity",
      description: "Strict privacy regulations make digital marketing challenging. Generic agencies don't understand healthcare compliance requirements."
    },
    {
      icon: Users,
      title: "Patient Trust Deficit",
      description: "Building credibility online is difficult. Patients research extensively before choosing healthcare providers."
    },
    {
      icon: Target,
      title: "High Patient Acquisition Costs",
      description: "Healthcare keywords are expensive. Without proper targeting, ad spend quickly spirals out of control."
    },
    {
      icon: TrendingUp,
      title: "Difficulty Tracking ROI",
      description: "Connecting marketing spend to patient lifetime value is complex. Most agencies only track clicks, not patient conversions."
    },
    {
      icon: MessageSquare,
      title: "Review Management Challenges",
      description: "Online reviews significantly impact patient decisions, but many practices struggle with reputation management."
    },
    {
      icon: Search,
      title: "Local Search Dominance",
      description: "Patients search for healthcare services near them. Failing to dominate local search means losing patients to competitors."
    }
  ];

  const services = [
    {
      icon: Search,
      title: "Healthcare SEO",
      description: "Rank #1 for high-intent healthcare searches in your local area. Optimized for patient acquisition, not vanity metrics."
    },
    {
      icon: Target,
      title: "Google Ads for Healthcare",
      description: "HIPAA-compliant PPC campaigns targeting patients actively searching for your services. Maximum ROI, minimum waste."
    },
    {
      icon: BarChart3,
      title: "Social Media Marketing",
      description: "Build trust and authority through strategic content marketing on platforms where patients spend their time."
    },
    {
      icon: FileText,
      title: "Healthcare Content Marketing",
      description: "Educational content that establishes your practice as the trusted authority in your specialty."
    },
    {
      icon: Star,
      title: "Reputation Management",
      description: "Proactive review generation and management to build trust and attract more patients."
    },
    {
      icon: Award,
      title: "Website Design & CRO",
      description: "Conversion-optimized websites that turn visitors into booked appointments while maintaining HIPAA compliance."
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "HIPAA Compliance Expertise",
      description: "We understand healthcare regulations and ensure all marketing activities are fully compliant."
    },
    {
      icon: BarChart3,
      title: "Patient-Focused Tracking",
      description: "We track actual patient conversions and lifetime value, not just clicks and impressions."
    },
    {
      icon: Target,
      title: "Specialty-Specific Strategies",
      description: "Different healthcare specialties require different approaches. We customize for your unique practice."
    },
    {
      icon: TrendingUp,
      title: "Proven Healthcare Results",
      description: "We've helped healthcare providers across Australia increase patient acquisition while reducing cost per patient."
    },
    {
      icon: CheckCircle,
      title: "Transparent Reporting",
      description: "Clear, honest reporting on what's working and what's not. No hiding behind vanity metrics."
    }
  ];

  const faqs = [
    {
      question: "Is digital marketing for healthcare practices HIPAA compliant?",
      answer: "Yes, when done correctly. We ensure all marketing activities comply with HIPAA regulations, including proper handling of patient data, secure forms, and compliant retargeting strategies."
    },
    {
      question: "How much should a healthcare practice spend on digital marketing?",
      answer: "Most successful practices invest 5-10% of gross revenue in marketing. The exact amount depends on your growth goals, specialty, and local competition. We'll help you determine the optimal budget."
    },
    {
      question: "How long does it take to see results from healthcare marketing?",
      answer: "Google Ads can generate patient appointments within weeks. SEO typically takes 3-6 months to show significant results. We focus on sustainable, long-term patient acquisition strategies."
    },
    {
      question: "Do you work with all healthcare specialties?",
      answer: "Yes. We've worked with general practitioners, specialists, dental practices, cosmetic surgery clinics, fertility clinics, and more. Each specialty requires tailored messaging and targeting."
    },
    {
      question: "How do you measure success for healthcare marketing?",
      answer: "We track appointment bookings, patient acquisition cost, patient lifetime value, and overall ROI. We focus on metrics that directly impact your practice's growth and profitability."
    },
    {
      question: "Can you help with online reputation management?",
      answer: "Absolutely. We implement proactive review generation campaigns and monitor your online reputation across all major platforms to build trust and credibility."
    },
    {
      question: "What makes healthcare marketing different from other industries?",
      answer: "Healthcare requires building exceptional trust, navigating strict compliance regulations, educating patients, and focusing on long-term patient relationships rather than one-time transactions."
    },
    {
      question: "Do you create content for healthcare websites?",
      answer: "Yes. We produce HIPAA-compliant, medically accurate content that educates patients, builds authority, and improves SEO performance."
    },
    {
      question: "How do you target the right patients?",
      answer: "We use advanced demographic targeting, location-based targeting, interest-based targeting, and search intent analysis to reach patients actively seeking your specific services."
    },
    {
      question: "Can you help with patient retention, not just acquisition?",
      answer: "Yes. We implement email marketing, patient education campaigns, and automated appointment reminders to improve retention and increase patient lifetime value."
    }
  ];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://odindigital.com.au/#organization",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://odindigital.com.au/odin-digital-logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "areaServed": "AU"
        }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/healthcare#service",
        "serviceType": "Healthcare Digital Marketing",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Healthcare Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Healthcare SEO",
                "description": "Search engine optimization for healthcare practices"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Ads for Healthcare",
                "description": "HIPAA-compliant PPC campaigns for patient acquisition"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Healthcare Website Design",
                "description": "Conversion-optimized, HIPAA-compliant websites"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Reputation Management",
                "description": "Review generation and online reputation management"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://odindigital.com.au/industries/healthcare#faq",
        "mainEntity": faqs.map((faq) => ({
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
        <title>Healthcare Digital Marketing | Patient Acquisition Experts | Odin Digital</title>
        <meta 
          name="description" 
          content="HIPAA-compliant digital marketing for healthcare practices. SEO, Google Ads, and reputation management that drives patient appointments and revenue growth." 
        />
        <link rel="canonical" href="https://odindigital.com.au/industries/healthcare" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-white via-muted/30 to-muted/20">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-charcoal">
                Digital Marketing for Healthcare
              </h1>
              <p className="text-xl md:text-2xl text-charcoal/70 mb-10 leading-relaxed">
                Stop Losing Patients to Competitors. Start Dominating Local Search with HIPAA-Compliant Marketing That Drives Appointments and Revenue.
              </p>
              <Button asChild size="lg" className="whitespace-normal break-words py-3 px-6">
                <Link to="/contact">Schedule Your FREE Healthcare Marketing Audit →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-charcoal">
                Why Healthcare Practices Struggle with Digital Marketing
              </h2>
              <p className="text-lg text-center text-charcoal/70 mb-12 max-w-3xl mx-auto">
                Most healthcare marketing agencies don't understand the unique challenges of patient acquisition, compliance, and trust-building.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {painPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <Icon className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-3 text-charcoal">{point.title}</h3>
                        <p className="text-muted-foreground">{point.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-charcoal">
                Our Healthcare Marketing Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <Icon className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-3 text-charcoal">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <div className="text-center mt-12">
                <Button asChild size="lg" className="whitespace-normal break-words py-3 px-6">
                  <Link to="/contact">Get Your Custom Healthcare Marketing Strategy →</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-charcoal">
                Why Healthcare Practices Choose Odin Digital
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <Icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-3 text-charcoal">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-charcoal">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border rounded-lg px-6 bg-background"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline text-charcoal">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-primary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Attract More Patients and Grow Your Practice?
              </h2>
              <p className="text-lg md:text-xl mb-10 opacity-90">
                Schedule a free consultation with our healthcare marketing experts. We'll review your current strategy and show you exactly how we can help you dominate your local market.
              </p>
              <Button 
                asChild
                size="lg"
                variant="secondary"
                className="whitespace-normal break-words text-center px-8 py-6"
              >
                <Link to="/contact">Schedule Your FREE Healthcare Marketing Audit →</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Healthcare;
