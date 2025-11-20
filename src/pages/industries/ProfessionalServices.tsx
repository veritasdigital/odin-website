import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { 
  Briefcase, Users, TrendingUp, Target, Award, 
  Search, BarChart3, FileText, Shield,
  CheckCircle, Star, MessageSquare, DollarSign
} from "lucide-react";

const ProfessionalServices = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Industries", path: "/industries" },
    { label: "Professional Services Marketing", path: "/industries/professional-services" }
  ];

  const painPoints = [
    {
      icon: DollarSign,
      title: "High Client Acquisition Costs",
      description: "Professional services keywords are expensive. Without precision targeting, you're burning budget on unqualified leads."
    },
    {
      icon: Users,
      title: "Difficulty Building Trust Online",
      description: "Clients choose professionals they trust. Building credibility digitally requires a strategic approach most agencies don't understand."
    },
    {
      icon: Target,
      title: "Long Sales Cycles",
      description: "Professional services aren't impulse purchases. You need nurture campaigns that maintain engagement over weeks or months."
    },
    {
      icon: Search,
      title: "Local Search Competition",
      description: "Clients search for professionals near them. Failing to dominate local search means losing high-value clients to competitors."
    },
    {
      icon: MessageSquare,
      title: "Generating Quality Leads",
      description: "Not all leads are equal. Most marketing generates tire-kickers, not qualified prospects ready to engage your services."
    },
    {
      icon: TrendingUp,
      title: "Proving Marketing ROI",
      description: "Connecting marketing spend to client lifetime value is complex. Most agencies track clicks, not client acquisition and retention."
    }
  ];

  const services = [
    {
      icon: Search,
      title: "Professional Services SEO",
      description: "Rank #1 for high-intent searches in your service area. Optimized for qualified lead generation, not vanity traffic."
    },
    {
      icon: Target,
      title: "Google Ads for Professionals",
      description: "Precision-targeted PPC campaigns that generate qualified enquiries from prospects actively seeking your expertise."
    },
    {
      icon: BarChart3,
      title: "LinkedIn Marketing",
      description: "Establish thought leadership and generate B2B leads through strategic LinkedIn advertising and content marketing."
    },
    {
      icon: FileText,
      title: "Content Marketing & Authority Building",
      description: "Position yourself as the trusted expert through strategic content that educates prospects and builds credibility."
    },
    {
      icon: Star,
      title: "Reputation Management",
      description: "Proactive review generation and reputation monitoring to build trust and attract high-value clients."
    },
    {
      icon: Award,
      title: "Website Design & CRO",
      description: "Conversion-optimized websites that establish credibility and turn visitors into qualified leads."
    }
  ];

  const whyChooseUs = [
    {
      icon: Briefcase,
      title: "B2B & Professional Services Expertise",
      description: "We understand the unique challenges of marketing professional services with long sales cycles and high-value clients."
    },
    {
      icon: BarChart3,
      title: "Lead Quality Over Quantity",
      description: "We focus on generating qualified leads that match your ideal client profile, not just maximizing lead volume."
    },
    {
      icon: Target,
      title: "Multi-Touch Attribution",
      description: "We track the entire client journey from first touch to engagement, giving you visibility into what's actually working."
    },
    {
      icon: TrendingUp,
      title: "Proven Professional Services Results",
      description: "We've helped accounting firms, law practices, consultancies, and other professional services across Australia grow revenue."
    },
    {
      icon: CheckCircle,
      title: "Transparent, Honest Reporting",
      description: "Clear reporting on lead quality, cost per acquisition, and client lifetime value. No hiding behind vanity metrics."
    }
  ];

  const industries = [
    "Accounting & Tax Services",
    "Legal Services & Law Firms",
    "Management Consulting",
    "Financial Planning & Advisory",
    "Architecture & Engineering",
    "IT Consulting & Technology Services",
    "HR Consulting & Recruitment",
    "Marketing & Advertising Agencies",
    "Business Coaching & Training",
    "Real Estate & Property Services"
  ];

  const faqs = [
    {
      question: "How much should professional services firms spend on marketing?",
      answer: "Most successful professional services firms invest 5-12% of gross revenue in marketing. The exact amount depends on your growth goals, competition level, and current market position. We'll help you determine the optimal budget for your specific situation."
    },
    {
      question: "How long does it take to see results from professional services marketing?",
      answer: "Google Ads can generate qualified leads within weeks. SEO typically takes 3-6 months to show significant results. Given the longer sales cycles in professional services, expect 2-3 months from initial lead to client engagement."
    },
    {
      question: "Do you work with all types of professional services?",
      answer: "Yes. We've worked with accounting firms, law practices, consultancies, financial advisors, architects, engineers, and more. Each profession requires tailored messaging and targeting strategies."
    },
    {
      question: "How do you measure success for professional services marketing?",
      answer: "We track qualified lead generation, cost per acquisition, client lifetime value, and overall ROI. We focus on metrics that directly impact your firm's growth and profitability, not vanity metrics."
    },
    {
      question: "Can you help with thought leadership and authority building?",
      answer: "Absolutely. We develop comprehensive content strategies including blog articles, whitepapers, case studies, and LinkedIn content to establish you as the trusted authority in your field."
    },
    {
      question: "How do you generate high-quality leads, not just high volume?",
      answer: "We use advanced targeting criteria including job titles, company size, industry, and search intent to reach decision-makers actively seeking your services. We also implement lead scoring and qualification processes."
    },
    {
      question: "What makes professional services marketing different?",
      answer: "Professional services require exceptional trust-building, longer nurture cycles, emphasis on expertise and credentials, and focus on relationship-building rather than transactional sales."
    },
    {
      question: "Do you create content for professional services websites?",
      answer: "Yes. We produce high-quality content that demonstrates expertise, addresses client pain points, and improves SEO performance while maintaining your professional brand voice."
    },
    {
      question: "How do you target the right decision-makers?",
      answer: "We use LinkedIn targeting, job title targeting, company size filters, and industry-specific keywords to reach decision-makers with budget authority actively seeking professional services."
    },
    {
      question: "Can you help with client retention and referrals?",
      answer: "Yes. We implement email marketing, client education campaigns, and automated touchpoints to improve client retention, increase lifetime value, and generate referrals."
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
        "@id": "https://odindigital.com.au/industries/professional-services#service",
        "serviceType": "Professional Services Digital Marketing",
        "provider": {
          "@id": "https://odindigital.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Professional Services Marketing",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Services SEO",
                "description": "Search engine optimization for professional service firms"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Ads for Professionals",
                "description": "Targeted PPC campaigns for qualified lead generation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "LinkedIn Marketing",
                "description": "B2B lead generation through LinkedIn advertising"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Authority Building",
                "description": "Content marketing and thought leadership development"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://odindigital.com.au/industries/professional-services#faq",
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
        <title>Professional Services Marketing | Lead Generation Experts | Odin Digital</title>
        <meta 
          name="description" 
          content="Digital marketing for professional services. Generate qualified leads, build authority, and grow revenue with SEO, Google Ads, and LinkedIn marketing." 
        />
        <link rel="canonical" href="https://odindigital.com.au/industries/professional-services" />
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
                Digital Marketing for Professional Services
              </h1>
              <p className="text-xl md:text-2xl text-charcoal/70 mb-10 leading-relaxed">
                Stop Wasting Budget on Unqualified Leads. Start Attracting High-Value Clients with Marketing That Builds Authority and Drives Revenue.
              </p>
              <Button asChild size="lg" className="whitespace-normal break-words py-3 px-6">
                <Link to="/contact">Schedule Your FREE Marketing Strategy Session →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-charcoal">
                Why Professional Services Struggle with Digital Marketing
              </h2>
              <p className="text-lg text-center text-charcoal/70 mb-12 max-w-3xl mx-auto">
                Most marketing agencies don't understand the unique challenges of professional services: long sales cycles, high-value clients, and trust-based selling.
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
                Our Professional Services Marketing Solutions
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
                  <Link to="/contact">Get Your Custom Marketing Strategy →</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-charcoal">
                Professional Services We Help Grow
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {industries.map((industry, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex items-center">
                      <CheckCircle className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                      <p className="text-lg font-semibold text-charcoal">{industry}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-charcoal">
                Why Professional Services Choose Odin Digital
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
        <section className="py-20 bg-muted/30">
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
                Ready to Attract High-Value Clients and Grow Your Firm?
              </h2>
              <p className="text-lg md:text-xl mb-10 opacity-90">
                Schedule a free consultation with our professional services marketing experts. We'll review your current strategy and show you exactly how we can help you dominate your market.
              </p>
              <Button 
                asChild
                size="lg"
                variant="secondary"
                className="whitespace-normal break-words text-center px-8 py-6"
              >
                <Link to="/contact">Schedule Your FREE Strategy Session →</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ProfessionalServices;
