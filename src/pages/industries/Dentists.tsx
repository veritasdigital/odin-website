import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import {
  Search,
  MousePointerClick,
  Share2,
  Layout,
  TrendingUp,
  Users,
  DollarSign,
  Award,
  CheckCircle,
  Shield,
  Target,
  BarChart,
  Zap,
  Clock,
  Star,
  ArrowRight
} from "lucide-react";

const Dentists = () => {
  const { openForm } = useMarketingForm();

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://odindigital.com.au/#organization",
        "name": "Odin Digital",
        "url": "https://odindigital.com.au",
        "logo": "https://odindigital.com.au/logo.png",
        "description": "Digital marketing agency specialising in dental practice marketing, SEO, Google Ads, Meta Ads, and web design.",
        "sameAs": [
          "https://www.facebook.com/odindigital",
          "https://www.linkedin.com/company/odin-digital",
          "https://www.instagram.com/odindigital"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "email": "hello@odindigital.com.au"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://odindigital.com.au/industries/dentists#webpage",
        "url": "https://odindigital.com.au/industries/dentists",
        "name": "Dental Practice Marketing Solutions | Odin Digital",
        "description": "Dental marketing agency for growing practices. SEO, Google Ads, Meta Ads, web design. 540% average ROI, 95% retention, $574M+ client revenue.",
        "isPartOf": { "@id": "https://odindigital.com.au/#website" },
        "inLanguage": "en-AU",
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://odindigital.com.au/industries/dentists#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://odindigital.com.au/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Industries",
            "item": "https://odindigital.com.au/industries"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Dentists",
            "item": "https://odindigital.com.au/industries/dentists"
          }
        ]
      },
      {
        "@type": "AggregateRating",
        "@id": "https://odindigital.com.au/industries/dentists#rating",
        "ratingValue": "4.9",
        "ratingCount": "283",
        "bestRating": "5",
        "worstRating": "1"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Dental Practice Marketing Solutions | Odin Digital</title>
        <meta name="description" content="Dental marketing agency for growing practices. SEO, Google Ads, Meta Ads, web design. 540% average ROI, 95% retention, $574M+ client revenue." />
        <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      </Helmet>

      <Header />
      
      <div className="container mx-auto px-4">
        <Breadcrumbs items={[
          { label: "Industries", path: "/industries" },
          { label: "Dentists", path: "/industries/dentists" }
        ]} />
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <Button
          onClick={openForm}
          variant="hero"
          className="shadow-glow"
        >
          Schedule Free Consultation
        </Button>
      </div>

      {/* 1. Hero Section */}
      <section className="relative isolate overflow-hidden min-h-[90vh] flex items-center bg-white">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
        </div>

        {/* Decorative floating circles */}
        <div className="absolute -top-6 left-1/4 w-12 h-12 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-secondary/20 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-6 h-6 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20 pt-32">
          <div className="max-w-4xl mx-auto animate-slide-up text-center">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-charcoal leading-tight mb-6">
              Dental Marketing Agency for Growing Practices
            </h1>
            
            <p className="text-xl md:text-2xl text-charcoal/70 leading-relaxed mb-8 max-w-3xl mx-auto font-light">
              Your dental practice deserves more than generic marketing. You need a partner who understands the unique challenges dentists face—patient acquisition costs that eat into your margins, appointment no-shows that waste your chair time, and competition from corporate dental chains that have ten times your budget. At Odin Digital, we've helped over 283 dental practices across Australia acquire more patients, improve retention, and grow revenue by an average of 540%.
            </p>
            
            <div className="pt-2">
              <Button
                onClick={openForm}
                variant="hero"
                size="lg"
                className="shadow-glow"
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Social Proof Section */}
      <section className="py-16 bg-muted decorative-circles-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
              Trusted by 283+ Dental Practices Across Australia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-charcoal mb-2">$574M+</div>
              <div className="text-charcoal/70">Client Revenue Generated</div>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-charcoal mb-2">540%</div>
              <div className="text-charcoal/70">Average ROI</div>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-charcoal mb-2">95%</div>
              <div className="text-charcoal/70">Client Retention Rate</div>
            </Card>

            <Card className="p-6 text-center border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-charcoal mb-2">283+</div>
              <div className="text-charcoal/70">Campaigns Managed</div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={openForm}
              variant="default"
              size="lg"
              className="shadow-primary"
            >
              See How We Can Help Your Practice
            </Button>
          </div>
        </div>
      </section>

      {/* 3. The Dental Marketing Challenge */}
      <section className="py-20 bg-white decorative-circles">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-8">
            The Dental Marketing Challenge
          </h2>

          <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
            <p>
              Running a successful dental practice requires two distinct skill sets: clinical excellence and business acumen. You spent years mastering dentistry, but marketing your practice is an entirely different challenge—one that most dental schools never prepare you for.
            </p>

            <p>
              The reality is stark: dental practices are paying $1,500–$2,500 per new patient through traditional marketing channels. Appointment no-shows waste 15–20% of your chair time. Meanwhile, corporate dental chains with massive marketing budgets are flooding your local market, making it harder than ever to stand out.
            </p>

            <p>
              You've probably tried various marketing approaches—maybe you hired a generalist marketing agency, or dabbled in Google Ads yourself, or invested in a new website that looks great but doesn't generate patients. The results were inconsistent, the costs kept climbing, and you were left wondering if there's a better way.
            </p>

            <p>
              We've spent years perfecting dental practice marketing. We understand the unique challenges you face, the compliance requirements you must navigate, and the patient journey from initial search to booked appointment. Most importantly, we know how to make your marketing investment work harder and deliver predictable, measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Why Dental Practices Choose Odin Digital */}
      <section className="py-20 bg-muted decorative-circles-alt">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-12 text-center">
            Why Dental Practices Choose Odin Digital
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Proven Results You Can Trust
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                We've generated over $574 million in revenue for our clients across diverse industries, with dental practices seeing an average 540% ROI. Our track record speaks for itself.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  95% client retention rate demonstrates ongoing value
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Transparent reporting so you always know where your investment goes
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Case studies and testimonials from practices like yours
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Integrated Marketing That Actually Works
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Most agencies offer one service and call it a day. We provide a comprehensive marketing ecosystem where SEO, Google Ads, Meta Ads, and web design work together synergistically.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  SEO builds long-term authority and organic patient flow
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Google Ads delivers immediate results and fills appointment gaps
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Meta Ads builds brand awareness and retargets interested patients
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Professional web design converts visitors into booked appointments
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Compliance Built In
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Healthcare marketing has unique compliance requirements. We understand HIPAA, privacy laws, and advertising restrictions, so you don't have to worry about regulatory issues.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  All marketing materials comply with healthcare advertising regulations
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Patient data handled with strict privacy protocols
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Testimonials and reviews collected with proper consent
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                No Lock-In Contracts
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                We believe in earning your business every month through exceptional results and service. That's why we don't require long-term contracts.
              </p>
              <ul className="space-y-2 text-charcoal/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Month-to-month agreements give you complete flexibility
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  Our 95% retention rate proves clients stay because they want to
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  You own all campaign data, content, and assets
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="py-20 bg-white decorative-circles">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-12 text-center">
            What Our Dental Clients Say
          </h2>
          <div className="space-y-8">
            <Card className="p-8 shadow-card border-charcoal/10">
              <div className="flex items-center mb-4">
                <Star className="text-primary h-6 w-6 mr-1" />
                <Star className="text-primary h-6 w-6 mr-1" />
                <Star className="text-primary h-6 w-6 mr-1" />
                <Star className="text-primary h-6 w-6 mr-1" />
                <Star className="text-primary h-6 w-6" />
              </div>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                "Odin Digital transformed our patient acquisition strategy. Their expertise in SEO and Google Ads helped us grow our practice by 60% in just one year."
              </p>
              <div className="font-bold text-charcoal">Dr. Sarah Mitchell, Smile Bright Dental</div>
            </Card>
            <Card className="p-8 shadow-card border-charcoal/10">
              <div className="flex items-center mb-4">
                <Star className="text-primary h-6 w-6 mr-1" />
                <Star className="text-primary h-6 w-6 mr-1" />
                <Star className="text-primary h-6 w-6 mr-1" />
                <Star className="text-primary h-6 w-6 mr-1" />
                <Star className="text-primary h-6 w-6" />
              </div>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                "The team at Odin Digital really understands the dental industry. Their compliance knowledge and marketing strategies gave us peace of mind and great results."
              </p>
              <div className="font-bold text-charcoal">Dr. James Lee, Family Dental Care</div>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Services Section */}
      <section className="py-20 bg-muted decorative-circles-alt">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-12 text-center">
            Our Dental Marketing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Search className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-charcoal mb-4">SEO for Dentists</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Improve your organic search rankings and attract more local patients actively searching for dental services.
              </p>
            </Card>
            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <MousePointerClick className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-charcoal mb-4">Google Ads Management</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Target high-intent keywords and fill appointment gaps with expertly managed pay-per-click campaigns.
              </p>
            </Card>
            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Share2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-charcoal mb-4">Meta Ads & Social Media</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Build brand awareness and retarget interested patients on Facebook and Instagram with engaging ads.
              </p>
            </Card>
            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Layout className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-charcoal mb-4">Dental Website Design</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Convert visitors into booked appointments with a professional, compliant, and user-friendly website.
              </p>
            </Card>
            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <BarChart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-charcoal mb-4">Analytics & Reporting</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Transparent monthly reports so you can track your marketing ROI and make informed decisions.
              </p>
            </Card>
            <Card className="p-8 border-charcoal/10 hover:border-primary/20 transition-colors shadow-card">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-charcoal mb-4">Ongoing Support</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Dedicated account managers and flexible month-to-month contracts to keep your marketing on track.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Process Section */}
      <section className="py-20 bg-white decorative-circles">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-12 text-center">
            Our Proven Dental Marketing Process
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="discovery">
              <AccordionTrigger>
                <Target className="mr-2 h-5 w-5 text-primary" />
                Discovery & Strategy
              </AccordionTrigger>
              <AccordionContent>
                We start by understanding your practice goals, target patients, and competitive landscape to craft a tailored marketing strategy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="implementation">
              <AccordionTrigger>
                <Zap className="mr-2 h-5 w-5 text-primary" />
                Implementation
              </AccordionTrigger>
              <AccordionContent>
                Our team executes SEO, PPC, social media, and web design initiatives with precision and compliance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="optimization">
              <AccordionTrigger>
                <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                Optimization & Growth
              </AccordionTrigger>
              <AccordionContent>
                We continuously monitor performance, optimize campaigns, and scale what works to maximize your ROI.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="reporting">
              <AccordionTrigger>
                <BarChart className="mr-2 h-5 w-5 text-primary" />
                Reporting & Insights
              </AccordionTrigger>
              <AccordionContent>
                Transparent monthly reports keep you informed and confident in your marketing investment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 8. Practice Types Section */}
      <section className="py-20 bg-muted decorative-circles-alt">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-12 text-center">
            Dental Practice Types We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-charcoal/80 text-center">
            <div>
              <h3 className="font-bold text-xl mb-2">General Dentistry</h3>
              <p>Comprehensive marketing solutions for family and general dental practices.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Cosmetic Dentistry</h3>
              <p>Attract patients seeking teeth whitening, veneers, and smile makeovers.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Orthodontics</h3>
              <p>Target patients interested in braces, Invisalign, and orthodontic care.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Pediatric Dentistry</h3>
              <p>Specialized marketing for child-focused dental practices.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Endodontics</h3>
              <p>Promote root canal therapy and related endodontic services.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Periodontics</h3>
              <p>Marketing strategies for gum disease treatment and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Common Failures Section */}
      <section className="py-20 bg-white decorative-circles">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-8 text-center">
            Common Dental Marketing Failures
          </h2>
          <ul className="list-disc list-inside space-y-4 text-charcoal/80 text-lg leading-relaxed">
            <li>Using generic marketing agencies without dental expertise</li>
            <li>Ignoring compliance and privacy regulations</li>
            <li>Relying solely on one marketing channel</li>
            <li>Failing to track and optimize campaigns</li>
            <li>Investing in websites that don’t convert visitors</li>
            <li>Long-term contracts without performance guarantees</li>
          </ul>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="py-20 bg-muted decorative-circles-alt">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq1">
              <AccordionTrigger>How long does it take to see results?</AccordionTrigger>
              <AccordionContent>
                SEO results typically take 3-6 months, while Google Ads and Meta Ads can generate leads immediately. We focus on both short-term wins and long-term growth.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq2">
              <AccordionTrigger>Are your marketing strategies compliant with healthcare regulations?</AccordionTrigger>
              <AccordionContent>
                Yes, we ensure all marketing materials comply with HIPAA and Australian healthcare advertising standards to protect your practice.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq3">
              <AccordionTrigger>Do you require long-term contracts?</AccordionTrigger>
              <AccordionContent>
                No, we offer flexible month-to-month agreements so you can stay with us as long as you see value.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq4">
              <AccordionTrigger>Can you help with website design?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We design professional, user-friendly dental websites optimized for conversions and compliance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 11. Final CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-6">
            Ready to Grow Your Dental Practice?
          </h2>
          <p className="mb-8 text-lg leading-relaxed max-w-xl mx-auto">
            Schedule a free consultation with our dental marketing experts and discover how we can help you attract more patients and increase revenue.
          </p>
          <Button
            onClick={openForm}
            variant="secondary"
            size="lg"
            className="shadow-glow"
          >
            Schedule Free Consultation
          </Button>
        </div>
      </section>

      {/* Dental Marketing Services by City - Cross Linking */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-center text-charcoal">Dental Marketing Services by City</h2>
          <p className="text-charcoal/70 text-center mb-12 max-w-2xl mx-auto">
            We help dental practices grow across Australia's major cities with specialized local marketing strategies
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Link to="/services/sydney-seo" className="group">
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-charcoal">
                  Dental SEO Sydney
                </h3>
                <p className="text-charcoal/70 mb-4">
                  Dominate Sydney's competitive dental market with expert local SEO and Google Business optimization.
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            <Link to="/services/melbourne-seo" className="group">
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-charcoal">
                  Dental SEO Melbourne
                </h3>
                <p className="text-charcoal/70 mb-4">
                  Attract high-value Melbourne patients with conversion-focused dental marketing and SEO.
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            <Link to="/services/brisbane-seo" className="group">
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-charcoal">
                  Dental SEO Brisbane
                </h3>
                <p className="text-charcoal/70 mb-4">
                  Grow your Brisbane dental practice with proven local SEO and Google Ads strategies.
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          </div>

          <div className="text-center">
            <p className="text-charcoal/70 mb-4">
              We also provide dental marketing in <Link to="/services/perth-seo" className="text-primary hover:underline font-semibold">Perth</Link>, <Link to="/services/adelaide-seo" className="text-primary hover:underline font-semibold">Adelaide</Link>, <Link to="/services/canberra-seo" className="text-primary hover:underline font-semibold">Canberra</Link>, and other Australian cities.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Dentists;
