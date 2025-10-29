import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
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
  Star
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
        "@type": "WebSite",
        "@id": "https://odindigital.com.au/#website",
        "url": "https://odindigital.com.au",
        "name": "Odin Digital",
        "description": "Digital marketing agency specialising in dental practice marketing",
        "publisher": { "@id": "https://odindigital.com.au/#organization" }
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/dentists#dental-seo",
        "name": "Dental SEO Services",
        "description": "Search engine optimisation for dental practices to increase organic visibility and patient acquisition.",
        "provider": { "@id": "https://odindigital.com.au/#organization" },
        "areaServed": "AU",
        "serviceType": "Search Engine Optimisation"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/dentists#google-ads",
        "name": "Dental Google Ads Management",
        "description": "Google Ads management for dental practices to reach patients actively searching for dental services.",
        "provider": { "@id": "https://odindigital.com.au/#organization" },
        "areaServed": "AU",
        "serviceType": "Pay-Per-Click Advertising"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/dentists#meta-ads",
        "name": "Dental Meta Ads Management",
        "description": "Facebook and Instagram advertising for dental practices to build brand awareness and reach new patients.",
        "provider": { "@id": "https://odindigital.com.au/#organization" },
        "areaServed": "AU",
        "serviceType": "Social Media Advertising"
      },
      {
        "@type": "Service",
        "@id": "https://odindigital.com.au/industries/dentists#web-design",
        "name": "Dental Web Design",
        "description": "Custom web design for dental practices optimised for conversion and patient acquisition.",
        "provider": { "@id": "https://odindigital.com.au/#organization" },
        "areaServed": "AU",
        "serviceType": "Web Design"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does it take to see results from dental SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO is a long-term strategy. Most practices see initial results within 3–6 months, with significant results by 6–12 months. Google Ads provides immediate results, so we often combine SEO with Google Ads for quick wins while building long-term organic traffic."
            }
          },
          {
            "@type": "Question",
            "name": "What's the typical cost of dental marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on your goals and location. A small solo practice might spend $2,000–$5,000 per month, while a larger group might spend $10,000–$25,000 per month. We work with practices of all sizes and can tailor a strategy to your budget."
            }
          },
          {
            "@type": "Question",
            "name": "Can you guarantee results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We can't guarantee specific rankings or traffic numbers because Google's algorithm is constantly changing. However, we can guarantee that we'll use proven strategies, track results carefully, and continuously optimise for better performance. Our 540% average ROI speaks to the effectiveness of our approach."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with practices outside major cities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We work with practices in regional areas, rural areas, and major cities. In fact, regional practices often see better results because there's less competition. We have experience with the unique challenges of regional marketing."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle patient privacy and compliance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Compliance is built into everything we do. We follow HIPAA and Privacy Act requirements for patient data. We don't use patient testimonials without written consent. We ensure all marketing materials comply with healthcare regulations. Your compliance is our responsibility."
            }
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

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t md:hidden">
        <Button onClick={openForm} className="w-full" size="lg" variant="cta">
          Schedule Free Consultation
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Dental Marketing Agency for Growing Practices
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Your dental practice deserves more than generic marketing. You need a partner who understands the unique challenges dentists face—patient acquisition costs that eat into your margins, appointment no-shows that waste your chair time, and competition from corporate dental chains that have ten times your budget. At Odin Digital, we've helped over 283 dental practices across Australia acquire more patients, improve retention, and grow revenue by an average of 540%.
            </p>
            <Button onClick={openForm} size="xl" variant="cta" className="w-full sm:w-auto">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Trusted by 283+ Dental Practices Across Australia
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-3xl md:text-4xl">$574M+</CardTitle>
                <CardDescription>Client Revenue Generated</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-3xl md:text-4xl">540%</CardTitle>
                <CardDescription>Average ROI</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-3xl md:text-4xl">95%</CardTitle>
                <CardDescription>Client Retention Rate</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-3xl md:text-4xl">283+</CardTitle>
                <CardDescription>Campaigns Managed</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <Button onClick={openForm} size="lg" variant="default" className="w-full sm:w-auto">
              See How We Can Help Your Practice
            </Button>
          </div>
        </div>
      </section>

      {/* The Dental Marketing Challenge */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Dental Marketing Challenge
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Running a successful dental practice requires two distinct skill sets that rarely overlap. The first is clinical excellence—the ability to diagnose oral health issues, perform complex procedures, and deliver exceptional patient care. The second is business acumen—the ability to market your practice, attract new patients, and build a thriving business that supports your clinical work.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                Most dentists excel at the first but struggle with the second. And it's not your fault. You spent years mastering dentistry, not digital marketing. But in today's competitive landscape, clinical excellence alone isn't enough. You're competing against corporate dental chains with massive marketing budgets, aggressive patient acquisition strategies, and economies of scale that make it nearly impossible to compete on price alone.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                The reality is stark—dental practices are paying $1,500–$2,500 per new patient through traditional marketing channels. Appointment no-shows waste 20–30% of your chair time. And patients are increasingly shopping for dental services based on Google reviews, website design, and online presence rather than proximity or referrals. If your practice isn't visible online, you're invisible to the patients who need you most.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                We've spent years perfecting dental practice marketing so you don't have to. Our integrated approach combines SEO, Google Ads, Meta Ads, and web design to create a patient acquisition engine that works 24/7—even when you're focused on what you do best: delivering exceptional patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dental Practices Choose Odin Digital */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Dental Practices Choose Odin Digital
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <BarChart className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Proven Results You Can Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We don't just talk about results—we deliver them. Our dental practice clients have generated over $574 million in revenue through our marketing campaigns, with an average ROI of 540%. That's not a typo. For every dollar you invest in marketing, you get back $5.40 in patient revenue.
                </p>
                <p className="text-muted-foreground">
                  But results aren't just about revenue. We track patient acquisition cost, lifetime value, appointment show rates, and conversion metrics to ensure your marketing budget works as hard as you do. Our 95% client retention rate speaks to the consistency and reliability of our approach.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Integrated Marketing That Actually Works</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Most agencies offer one-dimensional solutions: just SEO, just Google Ads, or just social media. But real growth requires an integrated strategy that combines multiple channels into a cohesive patient acquisition engine.
                </p>
                <p className="text-muted-foreground">
                  Our approach combines dental SEO to build long-term organic visibility, Google Ads for immediate patient acquisition, Meta Ads for brand awareness and patient engagement, and conversion-optimised web design to turn visitors into booked appointments. Each channel works together, amplifying the impact of your marketing budget and creating sustainable growth.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Compliance Built In</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Healthcare marketing is highly regulated, and for good reason. Patient privacy, ethical advertising, and compliance with AHPRA guidelines aren't optional—they're non-negotiable. Yet many marketing agencies don't understand the unique compliance requirements of dental practices.
                </p>
                <p className="text-muted-foreground">
                  We do. Compliance is built into every campaign we create. We follow Privacy Act requirements for patient data, ensure all testimonials have written consent, and design marketing materials that comply with healthcare advertising regulations. Your compliance is our responsibility, so you can focus on patient care without worrying about regulatory issues.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>No Lock-In Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We don't believe in trapping clients in long-term contracts. Our 95% retention rate isn't because of contractual obligations—it's because we deliver results that keep practices coming back month after month.
                </p>
                <p className="text-muted-foreground">
                  We offer flexible month-to-month agreements so you can see the value of our work before committing long-term. If we're not delivering the results you expect, you're free to walk away. No penalties, no hassles. Just honest, transparent marketing that drives real growth for your practice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Dental Practice Owners Say About Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 italic">
                  "Before Odin Digital, we were spending $3,000 per new patient on traditional marketing. Now we're paying less than $800 per patient through SEO and Google Ads, and our appointment book is consistently full 6 weeks out. The ROI has been incredible."
                </p>
                <p className="font-semibold">Dr. Sarah Mitchell</p>
                <p className="text-sm text-muted-foreground">Brighton Dental Practice, Melbourne</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 italic">
                  "What impressed me most was their understanding of compliance and patient privacy. They handled everything from consent forms to AHPRA guidelines, so I could focus on patient care without worrying about regulatory issues. True healthcare marketing experts."
                </p>
                <p className="font-semibold">Dr. James Chen</p>
                <p className="text-sm text-muted-foreground">Harbour Dental Group, Sydney</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 italic">
                  "We tried three different agencies before Odin Digital. The difference was night and day. They didn't just run ads—they built an entire patient acquisition system. Our revenue is up 127% year-over-year, and we've had to hire two additional hygienists to keep up with demand."
                </p>
                <p className="font-semibold">Dr. Rebecca Thompson</p>
                <p className="text-sm text-muted-foreground">Coastal Smiles Dental, Brisbane</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Integrated Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Integrated Dental Marketing Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Dental SEO */}
            <Card>
              <CardHeader>
                <Search className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Dental SEO Services</CardTitle>
                <CardDescription>Build Long-Term Organic Patient Flow</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  When patients search "dentist near me" or "emergency dental care," does your practice appear on the first page of Google? If not, you're losing dozens of potential patients every day to competitors who rank higher.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our dental SEO services focus on dominating local search results for high-intent keywords that drive patient bookings. We optimise your Google Business Profile, build location-specific landing pages, create content that answers patient questions, and earn high-quality backlinks that boost your authority in Google's eyes.
                </p>
                
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Local SEO optimisation for "near me" searches</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Google Business Profile optimisation and management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Service-specific landing pages (cosmetic dentistry, implants, orthodontics)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Patient-focused content creation and blogging</span>
                  </li>
                </ul>

                <p className="text-muted-foreground mb-6">
                  <strong>Benefits:</strong> SEO delivers the lowest patient acquisition cost of any marketing channel. Once you rank on page one, you'll receive a steady stream of qualified patient inquiries without paying for every click. It's the foundation of sustainable practice growth.
                </p>

                <Button onClick={openForm} variant="default" className="w-full sm:w-auto">
                  Learn More About Dental SEO
                </Button>
              </CardContent>
            </Card>

            {/* Google Ads */}
            <Card>
              <CardHeader>
                <MousePointerClick className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Dental Google Ads Management</CardTitle>
                <CardDescription>Immediate Patient Acquisition</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Google Ads is the fastest way to get your practice in front of patients who are actively searching for dental services right now. While SEO builds long-term visibility, Google Ads delivers immediate results—often within days of launching your first campaign.
                </p>
                <p className="text-muted-foreground mb-4">
                  We create hyper-targeted campaigns that reach patients at the exact moment they're searching for dental services. From emergency dental care to cosmetic dentistry, we bid on high-intent keywords that drive qualified patient inquiries while keeping your cost per acquisition low.
                </p>
                
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">High-intent keyword targeting (emergency dental, dental implants, teeth whitening)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Geographic targeting to reach patients in your service area</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Ad copy optimised for click-through and conversion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Call tracking and conversion optimisation</span>
                  </li>
                </ul>

                <p className="text-muted-foreground mb-6">
                  <strong>Benefits:</strong> Google Ads delivers immediate visibility and patient inquiries. You control your budget, target specific services, and only pay when someone clicks. It's perfect for filling gaps in your schedule or promoting high-margin services like cosmetic dentistry or implants.
                </p>

                <Button onClick={openForm} variant="default" className="w-full sm:w-auto">
                  Learn More About Google Ads
                </Button>
              </CardContent>
            </Card>

            {/* Meta Ads */}
            <Card>
              <CardHeader>
                <Share2 className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Dental Meta Ads Management</CardTitle>
                <CardDescription>Build Brand Awareness and Patient Engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Facebook and Instagram aren't just for sharing photos—they're powerful patient acquisition channels when used correctly. While Google Ads captures active searchers, Meta Ads (Facebook and Instagram) build brand awareness, nurture patient relationships, and reach patients before they even realise they need dental care.
                </p>
                <p className="text-muted-foreground mb-4">
                  We create visually compelling campaigns that showcase your practice's personality, highlight patient transformations (with consent), and educate potential patients about the importance of oral health. Our retargeting campaigns keep your practice top-of-mind for patients who visited your website but didn't book an appointment.
                </p>
                
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Before-and-after patient transformations (with consent)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Educational content about oral health and dental procedures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Retargeting campaigns to convert website visitors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Lead generation campaigns with instant booking forms</span>
                  </li>
                </ul>

                <p className="text-muted-foreground mb-6">
                  <strong>Benefits:</strong> Meta Ads build awareness with patients who aren't actively searching but may need dental care soon. It's perfect for cosmetic dentistry, orthodontics, and family dental services where visual appeal and trust-building are critical to patient acquisition.
                </p>

                <Button onClick={openForm} variant="default" className="w-full sm:w-auto">
                  Learn More About Meta Ads
                </Button>
              </CardContent>
            </Card>

            {/* Web Design */}
            <Card>
              <CardHeader>
                <Layout className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Dental Web Design</CardTitle>
                <CardDescription>Convert Visitors into Booked Appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Your website is your practice's digital storefront. If it's slow, outdated, or difficult to navigate, potential patients will leave and book with a competitor within seconds. In fact, 75% of patients judge a practice's credibility based on website design alone.
                </p>
                <p className="text-muted-foreground mb-4">
                  We design conversion-optimised dental websites that build trust, showcase your expertise, and make it effortless for patients to book appointments. From mobile-responsive design to integrated online booking, we create websites that work as hard as you do to grow your practice.
                </p>
                
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Mobile-responsive design optimised for all devices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Integrated online booking and appointment scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Service pages optimised for SEO and conversion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Patient testimonials and reviews to build trust</span>
                  </li>
                </ul>

                <p className="text-muted-foreground mb-6">
                  <strong>Benefits:</strong> A professionally designed website increases patient trust, improves conversion rates, and supports your SEO and paid advertising efforts. It's the hub of your digital marketing ecosystem, turning visitors into patients 24/7.
                </p>

                <Button onClick={openForm} variant="default" className="w-full sm:w-auto">
                  Learn More About Web Design
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work: Our Proven Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How We Work: Our Proven Process
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <CardTitle>Discovery and Audit</CardTitle>
                    <CardDescription className="mt-2">
                      We start by understanding your practice, goals, and challenges. We audit your current marketing efforts, analyse your competitors, and identify opportunities for growth.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="ml-16">
                <p className="text-muted-foreground mb-2"><strong>What We Do:</strong> Comprehensive practice assessment, competitive analysis, website audit, current marketing review.</p>
                <p className="text-muted-foreground"><strong>What You Get:</strong> Detailed audit report, competitive insights, and strategic recommendations tailored to your practice.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <CardTitle>Strategy Development</CardTitle>
                    <CardDescription className="mt-2">
                      We create a customised marketing strategy that aligns with your goals, budget, and timeline. Every practice is different, so we tailor our approach to your unique needs.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="ml-16">
                <p className="text-muted-foreground mb-2"><strong>What We Do:</strong> Define goals and KPIs, create channel-specific strategies, develop campaign timelines, set budget allocations.</p>
                <p className="text-muted-foreground"><strong>What You Get:</strong> Comprehensive marketing strategy document, campaign roadmap, and clear success metrics.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <CardTitle>Implementation</CardTitle>
                    <CardDescription className="mt-2">
                      We execute the strategy across all channels—SEO, Google Ads, Meta Ads, and web design. Our team handles everything from content creation to ad management to technical optimisation.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="ml-16">
                <p className="text-muted-foreground mb-2"><strong>What We Do:</strong> Launch SEO campaigns, create and launch ad campaigns, optimise website and landing pages, set up tracking and analytics.</p>
                <p className="text-muted-foreground"><strong>What You Get:</strong> Fully implemented campaigns, optimised website, and complete tracking infrastructure.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <CardTitle>Monitoring and Optimisation</CardTitle>
                    <CardDescription className="mt-2">
                      Marketing isn't "set it and forget it." We continuously monitor performance, test new strategies, and optimise campaigns to improve results over time.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="ml-16">
                <p className="text-muted-foreground mb-2"><strong>What We Do:</strong> Daily performance monitoring, A/B testing of ads and landing pages, budget optimisation, conversion rate improvement.</p>
                <p className="text-muted-foreground"><strong>What You Get:</strong> Ongoing performance improvements, monthly reporting, and strategic recommendations.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <CardTitle>Growth and Scaling</CardTitle>
                    <CardDescription className="mt-2">
                      As your practice grows, we scale campaigns to match. We identify new opportunities, expand into new channels, and increase budgets where we see the best returns.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="ml-16">
                <p className="text-muted-foreground mb-2"><strong>What We Do:</strong> Identify scaling opportunities, expand successful campaigns, test new channels and strategies, increase budgets strategically.</p>
                <p className="text-muted-foreground"><strong>What You Get:</strong> Sustainable, scalable growth without diminishing returns or wasted budget.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dental Marketing Solutions for Every Practice Type */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Dental Marketing Solutions for Every Practice Type
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <Users className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Solo Practitioners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Challenge:</strong> Limited time and budget to manage marketing while running a practice.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Our Solution:</strong> We handle all aspects of marketing so you can focus on patient care. Our flexible, budget-friendly packages are designed for solo practitioners who need maximum impact with minimal time investment.
                </p>
                <p className="text-muted-foreground">
                  <strong>Key Benefits:</strong> Low patient acquisition cost, consistent appointment flow, and hands-off marketing management.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Small Group Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Challenge:</strong> Balancing growth with maintaining quality patient care across multiple practitioners.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Our Solution:</strong> We create integrated campaigns that promote your practice as a whole while highlighting individual practitioners' expertise. Our strategies fill schedules for all providers without overwhelming your front desk.
                </p>
                <p className="text-muted-foreground">
                  <strong>Key Benefits:</strong> Balanced patient distribution, improved utilisation rates, and scalable growth strategies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Multi-Location Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Challenge:</strong> Managing marketing across multiple locations with different patient demographics and competitive landscapes.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Our Solution:</strong> We create location-specific strategies while maintaining brand consistency across all practices. Each location gets tailored campaigns optimised for local search and demographics.
                </p>
                <p className="text-muted-foreground">
                  <strong>Key Benefits:</strong> Centralised management, location-specific optimisation, and enterprise-level reporting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Specialised Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Challenge:</strong> Attracting patients who need specialised services like orthodontics, periodontics, or cosmetic dentistry.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Our Solution:</strong> We create highly targeted campaigns that reach patients actively searching for specialised dental services. Our content educates patients about complex procedures and positions you as the expert.
                </p>
                <p className="text-muted-foreground">
                  <strong>Key Benefits:</strong> Higher-value patients, improved case acceptance, and enhanced reputation as a specialist.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Dental Practices Fail at Marketing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Dental Practices Fail at Marketing (And How We Fix It)
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-destructive/10 rounded-full p-4 flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Inconsistent Patient Flow</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>Problem:</strong> One month you're fully booked, the next you're scrambling to fill the schedule.
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Why It Matters:</strong> Inconsistent patient flow creates revenue volatility, makes staffing difficult, and prevents you from planning for growth.
                </p>
                <p className="text-muted-foreground">
                  <strong>Our Solution:</strong> We create multi-channel campaigns that deliver consistent patient inquiries month after month. By combining SEO (long-term) with Google Ads (short-term), we smooth out the peaks and valleys in your appointment book.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
              <div className="bg-destructive/10 rounded-full p-4 flex-shrink-0">
                <DollarSign className="w-8 h-8 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">High Patient Acquisition Cost</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>Problem:</strong> You're paying $2,000+ per new patient through traditional marketing channels.
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Why It Matters:</strong> High acquisition costs eat into your margins and make it difficult to compete with corporate chains that have lower costs due to economies of scale.
                </p>
                <p className="text-muted-foreground">
                  <strong>Our Solution:</strong> We reduce patient acquisition cost through a combination of organic SEO (lowest cost per patient) and optimised Google Ads campaigns. Our average client pays less than $800 per new patient.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-destructive/10 rounded-full p-4 flex-shrink-0">
                <Layout className="w-8 h-8 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Poor Website Conversion</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>Problem:</strong> You're driving traffic to your website, but visitors aren't booking appointments.
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Why It Matters:</strong> Every visitor who leaves without booking is wasted marketing spend. A 1% conversion rate means 99 out of 100 visitors don't become patients.
                </p>
                <p className="text-muted-foreground">
                  <strong>Our Solution:</strong> We design conversion-optimised websites with clear calls-to-action, integrated online booking, and trust signals (testimonials, credentials, before-and-after photos). Our average client sees a 3–5% conversion rate—3–5x industry average.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
              <div className="bg-destructive/10 rounded-full p-4 flex-shrink-0">
                <Star className="w-8 h-8 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ignoring Online Reputation</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>Problem:</strong> Potential patients check Google reviews before booking—and your practice has few reviews or negative feedback that's never addressed.
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Why It Matters:</strong> 84% of patients trust online reviews as much as personal recommendations. A low star rating or lack of reviews costs you dozens of patients every month.
                </p>
                <p className="text-muted-foreground">
                  <strong>Our Solution:</strong> We implement reputation management strategies that encourage happy patients to leave reviews, respond professionally to negative feedback, and showcase your best reviews on your website and social media.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-destructive/10 rounded-full p-4 flex-shrink-0">
                <Zap className="w-8 h-8 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fragmented Marketing</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>Problem:</strong> You're working with different agencies for SEO, Google Ads, and social media—and none of them talk to each other.
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Why It Matters:</strong> Fragmented marketing creates inconsistent messaging, wasted budget, and missed opportunities for synergy between channels.
                </p>
                <p className="text-muted-foreground">
                  <strong>Our Solution:</strong> We provide integrated, multi-channel marketing under one roof. All campaigns work together to amplify results, reduce costs, and create a cohesive patient experience from first click to booked appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left break-words whitespace-normal">
                  How long does it take to see results from dental SEO?
                </AccordionTrigger>
                <AccordionContent>
                  SEO is a long-term strategy. Most practices see initial results within 3–6 months, with significant results by 6–12 months. Google Ads provides immediate results, so we often combine SEO with Google Ads for quick wins while building long-term organic traffic. The key is consistency—SEO compounds over time, delivering increasingly better results the longer you invest in it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left break-words whitespace-normal">
                  What's the typical cost of dental marketing?
                </AccordionTrigger>
                <AccordionContent>
                  It depends on your goals and location. A small solo practice might spend $2,000–$5,000 per month, while a larger group might spend $10,000–$25,000 per month. We work with practices of all sizes and can tailor a strategy to your budget. The key is focusing on ROI—if you're spending $5,000 per month but generating $27,000 in new patient revenue (our average 540% ROI), the investment pays for itself many times over.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left break-words whitespace-normal">
                  Can you guarantee results?
                </AccordionTrigger>
                <AccordionContent>
                  We can't guarantee specific rankings or traffic numbers because Google's algorithm is constantly changing. However, we can guarantee that we'll use proven strategies, track results carefully, and continuously optimise for better performance. Our 540% average ROI and 95% client retention rate speak to the effectiveness of our approach. We only win when you win, so we're fully invested in your success.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left break-words whitespace-normal">
                  Do you work with practices outside major cities?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. We work with practices in regional areas, rural areas, and major cities across Australia. In fact, regional practices often see better results because there's less competition and lower advertising costs. We have experience with the unique challenges of regional marketing, including smaller search volumes and the importance of word-of-mouth referrals. No matter where your practice is located, we can create a strategy that works.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left break-words whitespace-normal">
                  How do you handle patient privacy and compliance?
                </AccordionTrigger>
                <AccordionContent>
                  Compliance is built into everything we do. We follow HIPAA and Privacy Act requirements for patient data. We don't use patient testimonials or before-and-after photos without written consent. We ensure all marketing materials comply with AHPRA healthcare advertising regulations. Your compliance is our responsibility—we've worked with hundreds of dental practices and understand the regulatory landscape inside and out.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left break-words whitespace-normal">
                  What makes you different from other dental marketing agencies?
                </AccordionTrigger>
                <AccordionContent>
                  Three key differences: (1) We're dental specialists, not generalists. We only work with healthcare practices, so we understand your unique challenges and compliance requirements. (2) We provide integrated marketing, not just one service. SEO, Google Ads, Meta Ads, and web design all work together under one roof. (3) We're results-obsessed. Our 540% average ROI and 95% retention rate speak for themselves. We don't win unless you win.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left break-words whitespace-normal">
                  Do you require long-term contracts?
                </AccordionTrigger>
                <AccordionContent>
                  No. We offer flexible month-to-month agreements so you can see the value of our work before committing long-term. Our 95% client retention rate isn't because of contractual obligations—it's because we deliver consistent results that keep practices coming back month after month. If we're not delivering the results you expect, you're free to walk away. No penalties, no hassles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left break-words whitespace-normal">
                  How do you measure success?
                </AccordionTrigger>
                <AccordionContent>
                  We track metrics that matter to your practice: patient acquisition cost, lifetime patient value, appointment show rates, conversion rates, and overall ROI. We provide monthly reporting that shows exactly how many patients we've driven, how much revenue we've generated, and what your return on investment looks like. Transparency and accountability are core to our approach.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left break-words whitespace-normal">
                  Can you help with multiple practice locations?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. We have extensive experience managing marketing for multi-location dental groups. We create location-specific strategies while maintaining brand consistency across all practices. Each location gets tailored campaigns optimised for local search, demographics, and competitive landscape. You get centralised management with location-specific results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left break-words whitespace-normal">
                  What if I'm already working with another marketing agency?
                </AccordionTrigger>
                <AccordionContent>
                  We can work alongside your existing agency or take over entirely—whatever makes sense for your practice. We often audit existing campaigns and identify opportunities for improvement. In many cases, we uncover wasted budget, poor targeting, or missed opportunities that previous agencies overlooked. We're happy to provide a complimentary audit to show you where we can add value.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11">
                <AccordionTrigger className="text-left break-words whitespace-normal">
                  Do you offer services for specialised dental practices?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. We work with general dentists, cosmetic dentists, orthodontists, periodontists, oral surgeons, and other dental specialists. We understand the unique marketing challenges of specialised practices—higher patient acquisition value, longer sales cycles, more complex procedures. Our strategies are tailored to attract patients who need specialised services and are willing to invest in quality care.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12">
                <AccordionTrigger className="text-left break-words whitespace-normal">
                  How involved will I need to be in the marketing process?
                </AccordionTrigger>
                <AccordionContent>
                  As little or as much as you want. We handle everything from strategy to execution to reporting, so you can focus on patient care. We'll need some initial input (practice goals, target services, patient demographics), occasional content approval, and regular check-ins to review results. Most clients spend less than 1–2 hours per month on marketing once campaigns are up and running.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13">
                <AccordionTrigger className="text-left break-words whitespace-normal">
                  What's the first step to get started?
                </AccordionTrigger>
                <AccordionContent>
                  Schedule a free consultation. We'll discuss your practice goals, current marketing efforts, and challenges you're facing. We'll provide an honest assessment of where you stand and outline a customised strategy to help you grow. There's no obligation—just a conversation about how we can help your practice thrive. Click the "Schedule Free Consultation" button to get started.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14">
                <AccordionTrigger className="text-left break-words whitespace-normal">
                  Can you help with reputation management and online reviews?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Reputation management is a critical component of dental marketing. We implement strategies to encourage happy patients to leave reviews, monitor your online reputation across Google, Facebook, and other platforms, respond professionally to negative feedback, and showcase your best reviews on your website. A strong online reputation builds trust and drives patient bookings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15">
                <AccordionTrigger className="text-left break-words whitespace-normal">
                  Do you provide website hosting and maintenance?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. We provide complete website hosting, maintenance, and support. Your website stays fast, secure, and up-to-date without any effort on your part. We handle technical issues, security updates, content updates, and performance optimisation. You get a website that works 24/7 to attract and convert patients without the technical headaches.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Grow Your Dental Practice?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join 283+ dental practices across Australia that trust Odin Digital to drive patient growth, increase revenue, and build sustainable marketing systems. Schedule your free consultation today and discover how we can help your practice thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={openForm} size="xl" variant="secondary" className="w-full sm:w-auto">
              Schedule Your Free Consultation
            </Button>
            <Button onClick={() => window.location.href = '/services'} size="xl" variant="outline" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30">
              Learn About Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom spacing for mobile sticky CTA */}
      <div className="h-20 md:hidden" />
    </>
  );
};

export default Dentists;
