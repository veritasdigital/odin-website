import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, CheckCircle2, TrendingUp, Users, DollarSign, Target, Shield, Clock, Award, BarChart3, Heart, MessageSquare, Microscope, Building2, MapPin } from "lucide-react";

const FertilityClinics = () => {
  const { openForm } = useMarketingForm();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "How long does it take to see results from fertility clinic SEO?",
      answer: "SEO is a long-term strategy. Most clinics see initial results within 3–6 months, with significant results by 6–12 months. Google Ads provides immediate results, so we often combine SEO with Google Ads for quick wins while building long-term organic traffic."
    },
    {
      question: "What's the typical cost of fertility clinic marketing?",
      answer: "It depends on your goals and location. A solo practitioner might spend $3,000–$7,000 per month, while a larger clinic might spend $15,000–$30,000 per month. We work with clinics of all sizes and can tailor a strategy to your budget."
    },
    {
      question: "Can you guarantee results?",
      answer: "We can't guarantee specific rankings or traffic numbers because Google's algorithm is constantly changing. However, we can guarantee that we'll use proven strategies, track results carefully, and continuously optimise for better performance. Our 540% average ROI speaks to the effectiveness of our approach."
    },
    {
      question: "Do you work with clinics outside major cities?",
      answer: "Absolutely. We work with clinics in regional areas, rural areas, and major cities. In fact, regional clinics often see better results because there's less competition. We have experience with the unique challenges of regional marketing."
    },
    {
      question: "How do you handle compliance with SART and FDA regulations?",
      answer: "Compliance is built into everything we do. We follow SART reporting requirements and FDA regulations for fertility marketing. We ensure all claims about success rates are accurate and compliant. We help you navigate the regulatory landscape. Your compliance is our responsibility."
    },
    {
      question: "Do you specialise in IVF marketing or all fertility treatments?",
      answer: "We specialise in marketing for all fertility treatments, including IVF, IUI, egg freezing, donor egg programs, surrogacy, fertility preservation, and male factor infertility. We tailor our messaging to your clinic's specific specialisations and treatment offerings."
    },
    {
      question: "How do you measure success for fertility clinic marketing?",
      answer: "We track multiple metrics including patient inquiries, consultation bookings, cost per patient acquisition, organic traffic growth, keyword rankings, conversion rates, and ultimately, new patient revenue. We provide monthly reports with clear ROI data."
    },
    {
      question: "Do you offer contracts or can we cancel anytime?",
      answer: "We offer no lock-in contracts. You can cancel at any time with 30 days' notice. We believe in earning your business every month through results, not binding contracts. Our 95% client retention rate proves our commitment to results."
    },
    {
      question: "How do you handle the emotional sensitivity required in fertility marketing?",
      answer: "We understand fertility is deeply personal and emotional. Our copywriters are trained in empathetic messaging that builds hope without making unrealistic promises. We avoid insensitive language and focus on compassion, understanding, and proven results."
    },
    {
      question: "What makes your fertility clinic marketing different from other agencies?",
      answer: "We specialise exclusively in healthcare marketing, with deep experience in fertility clinics. We understand the unique patient journey, compliance requirements, high acquisition costs, and emotional sensitivity required. We're not a generalist agency experimenting with fertility marketing—we're specialists."
    },
    {
      question: "How quickly can we start seeing patient inquiries?",
      answer: "Google Ads campaigns can generate patient inquiries within 1–2 weeks of launch. SEO takes 3–6 months for initial results. Meta Ads typically generate awareness and inquiries within 2–4 weeks. We recommend an integrated approach for both short-term and long-term results."
    },
    {
      question: "Do you create content for patient education?",
      answer: "Yes. We create SEO-optimised blog content, fertility guides, treatment explainers, success story pages, and educational resources that position your clinic as the trusted authority. Content marketing is essential for fertility clinics to build trust and educate patients."
    },
    {
      question: "How do you reduce patient acquisition costs?",
      answer: "We reduce costs through precise targeting, conversion rate optimisation, A/B testing, retargeting campaigns, and long-term SEO investment. By improving conversion rates and building organic traffic, we lower your cost per patient acquisition over time."
    },
    {
      question: "Can you help with online reputation management?",
      answer: "Yes. We help fertility clinics manage their online reputation through review generation, review response strategies, and reputation monitoring. Positive reviews are crucial for fertility clinics because patients are making deeply personal decisions."
    },
    {
      question: "What kind of reporting do you provide?",
      answer: "We provide monthly reports with key metrics including patient inquiries, cost per acquisition, keyword rankings, organic traffic, conversion rates, and ROI. All reports are transparent, easy to understand, and tied to your business goals."
    },
    {
      question: "Do you work with multi-location fertility clinic groups?",
      answer: "Yes. We have experience managing marketing for multi-location groups. We create location-specific landing pages, local SEO strategies, and centralised reporting while maintaining brand consistency across all locations."
    },
    {
      question: "How do you handle the long decision-making cycle for fertility patients?",
      answer: "We use full-funnel marketing strategies including retargeting, email nurturing, educational content, and remarketing campaigns to stay top-of-mind throughout the 3–12 month decision-making process. We understand fertility patients need time and information."
    },
    {
      question: "Can you help us compete against large fertility networks?",
      answer: "Absolutely. We specialise in helping independent clinics and smaller groups compete against large networks. We use local SEO, personalised messaging, patient success stories, and community-focused marketing to position you as the personal, trusted alternative to corporate fertility chains."
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://growth-conduit-central.lovable.app/#organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Digital marketing agency specialising in fertility clinic marketing, SEO, Google Ads, Meta Ads, and web design.",
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
        "@id": "https://growth-conduit-central.lovable.app/industries/fertility-clinics#webpage",
        "url": "https://growth-conduit-central.lovable.app/industries/fertility-clinics",
        "name": "Fertility Clinic Marketing Solutions | Odin Digital",
        "description": "Fertility clinic marketing agency for growing practices. SEO, Google Ads, Meta Ads, web design. 540% average ROI, 95% retention, $574M+ client revenue.",
        "isPartOf": {
          "@id": "https://growth-conduit-central.lovable.app/#website"
        },
        "inLanguage": "en-AU",
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01"
      },
      {
        "@type": "WebSite",
        "@id": "https://growth-conduit-central.lovable.app/#website",
        "url": "https://growth-conduit-central.lovable.app",
        "name": "Odin Digital",
        "description": "Digital marketing agency specialising in fertility clinic marketing",
        "publisher": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        }
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/industries/fertility-clinics#fertility-seo",
        "name": "Fertility Clinic SEO Services",
        "description": "Search engine optimisation for fertility clinics to increase organic visibility and patient acquisition.",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "areaServed": "AU",
        "serviceType": "Search Engine Optimisation"
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/industries/fertility-clinics#google-ads",
        "name": "Fertility Clinic Google Ads Management",
        "description": "Google Ads management for fertility clinics to reach patients actively searching for fertility treatment.",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "areaServed": "AU",
        "serviceType": "Pay-Per-Click Advertising"
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/industries/fertility-clinics#meta-ads",
        "name": "Fertility Clinic Meta Ads Management",
        "description": "Facebook and Instagram advertising for fertility clinics to build brand awareness and reach new patients.",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "areaServed": "AU",
        "serviceType": "Social Media Advertising"
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/industries/fertility-clinics#web-design",
        "name": "Fertility Clinic Web Design",
        "description": "Custom web design for fertility clinics optimised for conversion and patient acquisition.",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "areaServed": "AU",
        "serviceType": "Web Design"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "AggregateRating",
        "@id": "https://growth-conduit-central.lovable.app/industries/fertility-clinics#rating",
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
        <title>Fertility Clinic Marketing Solutions | Odin Digital</title>
        <meta name="description" content="Fertility clinic marketing agency for growing practices. SEO, Google Ads, Meta Ads, web design. 540% average ROI, 95% retention, $574M+ client revenue." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />
      <SideTab />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        {/* Floating Circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Fertility Clinic Marketing Agency for Growing Practices
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-foreground/90 font-medium leading-relaxed">
              Your fertility clinic is built on hope. You help couples and individuals achieve their dream of having a baby. But hope alone doesn't fill your consultation schedule. You need a marketing partner who understands the unique challenges fertility clinics face—patient acquisition costs that rival the cost of treatment cycles, the emotional sensitivity required in fertility marketing, and competition from large fertility networks that have ten times your marketing budget. At Odin Digital, we've helped over 283 fertility clinics across Australia attract more patients, build trust, and grow revenue by an average of 540%.
            </p>
            <Button size="lg" onClick={openForm} className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white px-8 py-6 text-lg">
              Schedule Free Consultation →
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Trusted by 283+ Fertility Clinics Across Australia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold mb-2 text-primary">$574M+</div>
              <div className="text-muted-foreground">Client Revenue Generated</div>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold mb-2 text-primary">540%</div>
              <div className="text-muted-foreground">Average ROI</div>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold mb-2 text-primary">95%</div>
              <div className="text-muted-foreground">Client Retention Rate</div>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold mb-2 text-primary">283+</div>
              <div className="text-muted-foreground">Campaigns Managed</div>
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" onClick={openForm} className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white">
              See How We Can Help Your Clinic →
            </Button>
          </div>
        </div>
      </section>

      {/* The Fertility Clinic Marketing Challenge */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Fertility Clinic Marketing Challenge</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Running a successful fertility clinic requires two distinct skill sets: clinical excellence in reproductive medicine and marketing expertise to attract patients. You've mastered the first. But the second? That's where most fertility clinics struggle.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              The reality is stark—fertility clinics are paying $5,000–$7,000 per new patient through traditional advertising channels. That's not just expensive. It's unsustainable. And it's eating into your profits faster than you can scale your practice.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Meanwhile, your patients are on a deeply emotional journey. They need empathy, education, and trust—not aggressive sales tactics. The decision-making cycle is long (3–12 months), competition is fierce (especially from large networks), and compliance requirements are strict.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              We've spent years perfecting fertility clinic marketing. We understand the patient journey, the compliance landscape, and the economics of patient acquisition. We know how to reduce your cost per patient while increasing quality and volume.
            </p>
          </div>
        </div>
      </section>

      {/* Why Fertility Clinics Choose Odin Digital */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Fertility Clinics Choose Odin Digital</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proven Results You Can Trust</h3>
                  <p className="text-muted-foreground">We've helped 283+ fertility clinics grow their patient base and revenue. Our average client achieves a 540% ROI. We track every metric, from patient inquiries to cost per acquisition to revenue generated.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Integrated Marketing That Actually Works</h3>
                  <p className="text-muted-foreground">We don't just run Google Ads or SEO in isolation. We build integrated marketing systems that combine SEO, Google Ads, Meta Ads, and high-converting websites to create a predictable patient acquisition engine.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Emotional Intelligence and Sensitivity</h3>
                  <p className="text-muted-foreground">We understand fertility is deeply personal. Our copywriters are trained in empathetic messaging that builds hope without making unrealistic promises. We avoid insensitive language and focus on compassion, understanding, and proven results.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Compliance Expertise You Can Rely On</h3>
                  <p className="text-muted-foreground">We follow SART reporting requirements and FDA regulations. We ensure all claims about success rates are accurate and compliant. Your compliance is our responsibility.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">No Lock-In Contracts</h3>
                  <p className="text-muted-foreground">We earn your business every month through results, not binding contracts. You can cancel at any time with 30 days' notice. Our 95% retention rate proves we deliver value month after month.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Fertility Clinic Owners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-muted/30 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Award key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">"Working with Odin Digital transformed our patient flow. We went from inconsistent inquiries to 40+ qualified consultations per month. Their understanding of the fertility patient journey is exceptional."</p>
              <div className="font-semibold">Dr. Sarah Mitchell</div>
              <div className="text-sm text-muted-foreground">Sydney Fertility Specialists</div>
            </div>
            <div className="bg-muted/30 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Award key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">"Our cost per patient acquisition dropped from $6,200 to $2,800 within six months. The ROI is incredible. Odin Digital understands how to attract high-quality patients, not just clicks."</p>
              <div className="font-semibold">James Chen</div>
              <div className="text-sm text-muted-foreground">Melbourne IVF Centre</div>
            </div>
            <div className="bg-muted/30 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Award key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">"As a regional clinic competing against large networks, we needed a marketing edge. Odin Digital's local SEO and patient education content positioned us as the trusted local choice. Patient volume is up 320%."</p>
              <div className="font-semibold">Dr. Emma Thompson</div>
              <div className="text-sm text-muted-foreground">Brisbane Reproductive Health</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Integrated Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Integrated Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* SEO Service */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <Target className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Fertility Clinic SEO</h3>
              <p className="text-muted-foreground mb-4">
                We build SEO strategies that get your clinic to Page 1 for the exact searches your ideal patients are using—"IVF clinic near me," "best fertility doctor [city]," "egg freezing cost," and hundreds of other high-intent keywords.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Local SEO to dominate Google's Local 3-Pack</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Educational content that builds trust and attracts organic traffic</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Technical SEO optimisation for maximum visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>High-quality backlinks from medical and fertility authorities</span>
                </li>
              </ul>
              <Button onClick={openForm} className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white">
                Learn More →
              </Button>
            </div>

            {/* Google Ads Service */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <BarChart3 className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Google Ads for Fertility Clinics</h3>
              <p className="text-muted-foreground mb-4">
                We build Google Ads campaigns that deliver immediate, high-quality patient inquiries. No wasted spend on unqualified clicks. Every dollar is optimised for patient acquisition.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Keyword targeting for high-intent searches</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Geographic precision to eliminate wasted spend</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Conversion-optimised landing pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Transparent reporting with clear ROI tracking</span>
                </li>
              </ul>
              <Button onClick={openForm} className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white">
                Learn More →
              </Button>
            </div>

            {/* Meta Ads Service */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <Heart className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Meta Ads for Fertility Clinics</h3>
              <p className="text-muted-foreground mb-4">
                We build Facebook and Instagram campaigns that build awareness, establish trust, and nurture potential patients through the 3–12 month decision-making process.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Audience precision targeting ideal patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Trust-building creative with patient success stories</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Full-funnel strategy to warm up cold traffic</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Retargeting campaigns to capture interested prospects</span>
                </li>
              </ul>
              <Button onClick={openForm} className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white">
                Learn More →
              </Button>
            </div>

            {/* Web Design Service */}
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <Microscope className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-4">Fertility Clinic Web Design</h3>
              <p className="text-muted-foreground mb-4">
                We build websites that position your clinic as the trusted choice and convert visitors into patient inquiries at the highest possible rate. Every element is optimised for conversion.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Trust-building design with patient testimonials and success stories</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Mobile-first development for flawless experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Educational content that positions you as the authority</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>SEO-optimised from day one</span>
                </li>
              </ul>
              <Button onClick={openForm} className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white">
                Learn More →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work: Our Proven Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How We Work: Our Proven Process</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Discovery and Audit</h3>
                <p className="text-muted-foreground">We analyse your current marketing, competitive landscape, patient demographics, and goals. We identify gaps, opportunities, and quick wins.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Strategy Development</h3>
                <p className="text-muted-foreground">We create a customised marketing strategy that integrates SEO, Google Ads, Meta Ads, and web design into a cohesive patient acquisition system.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Implementation</h3>
                <p className="text-muted-foreground">We launch campaigns, optimise your website, build educational content, and set up tracking to measure every metric that matters.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">4</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Monitoring and Optimisation</h3>
                <p className="text-muted-foreground">We continuously monitor performance, A/B test creative and landing pages, and optimise campaigns to reduce cost per patient and increase volume.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">5</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Growth and Scaling</h3>
                <p className="text-muted-foreground">As we prove ROI, we scale your campaigns to attract more patients, reduce costs, and maximise revenue. We provide monthly reports with clear, actionable insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fertility Clinic Marketing Solutions for Every Practice Type */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Fertility Clinic Marketing Solutions for Every Practice Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-background p-6 rounded-lg">
              <Building2 className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-3">Solo Practitioners</h3>
              <p className="text-muted-foreground mb-3"><strong>Challenge:</strong> Limited budget, competing against large networks.</p>
              <p className="text-muted-foreground mb-3"><strong>Our Solution:</strong> Cost-effective local SEO, targeted Google Ads, and personal branding to position you as the trusted local expert.</p>
              <p className="text-muted-foreground"><strong>Benefits:</strong> Predictable patient flow without breaking the bank.</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <Users className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-3">Small Clinic Groups</h3>
              <p className="text-muted-foreground mb-3"><strong>Challenge:</strong> Building brand awareness and competing for market share.</p>
              <p className="text-muted-foreground mb-3"><strong>Our Solution:</strong> Integrated SEO, Google Ads, and Meta Ads to build awareness and drive consultations.</p>
              <p className="text-muted-foreground"><strong>Benefits:</strong> Increased market share and patient volume.</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <MapPin className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-3">Multi-Location Groups</h3>
              <p className="text-muted-foreground mb-3"><strong>Challenge:</strong> Consistent branding and local relevance across multiple locations.</p>
              <p className="text-muted-foreground mb-3"><strong>Our Solution:</strong> Location-specific landing pages, centralised reporting, and brand-consistent messaging.</p>
              <p className="text-muted-foreground"><strong>Benefits:</strong> Scale marketing efficiently while maintaining local relevance.</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <Microscope className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-3">Specialised Clinics</h3>
              <p className="text-muted-foreground mb-3"><strong>Challenge:</strong> Reaching niche patient demographics (e.g., LGBTQ+, single parents, egg freezing).</p>
              <p className="text-muted-foreground mb-3"><strong>Our Solution:</strong> Targeted messaging, niche keyword targeting, and specialised content marketing.</p>
              <p className="text-muted-foreground"><strong>Benefits:</strong> Attract your ideal patient demographic with precision targeting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fertility Clinics Fail at Marketing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Fertility Clinics Fail at Marketing</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 items-start">
              <Clock className="w-10 h-10 text-destructive flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Inconsistent Patient Flow</h3>
                <p className="text-muted-foreground mb-2"><strong>The Problem:</strong> Relying on referrals and word-of-mouth creates feast-or-famine patient flow.</p>
                <p className="text-muted-foreground mb-2"><strong>Why It Matters:</strong> Inconsistent revenue makes it impossible to plan, hire staff, or invest in growth.</p>
                <p className="text-muted-foreground"><strong>Our Solution:</strong> Predictable patient acquisition through integrated digital marketing.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <DollarSign className="w-10 h-10 text-destructive flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">High Patient Acquisition Cost</h3>
                <p className="text-muted-foreground mb-2"><strong>The Problem:</strong> Paying $5,000–$7,000 per patient through traditional advertising.</p>
                <p className="text-muted-foreground mb-2"><strong>Why It Matters:</strong> Unsustainable costs eat into profits and limit growth.</p>
                <p className="text-muted-foreground"><strong>Our Solution:</strong> Lower acquisition costs through SEO, optimised Google Ads, and conversion rate optimisation.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <Shield className="w-10 h-10 text-destructive flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Poor Website Conversion</h3>
                <p className="text-muted-foreground mb-2"><strong>The Problem:</strong> Beautiful websites that don't convert visitors into patient inquiries.</p>
                <p className="text-muted-foreground mb-2"><strong>Why It Matters:</strong> You're wasting traffic and ad spend on a website that doesn't sell.</p>
                <p className="text-muted-foreground"><strong>Our Solution:</strong> Conversion-optimised web design with clear calls-to-action and trust-building elements.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <Award className="w-10 h-10 text-destructive flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Ignoring Online Reputation</h3>
                <p className="text-muted-foreground mb-2"><strong>The Problem:</strong> Failing to actively manage reviews and online reputation.</p>
                <p className="text-muted-foreground mb-2"><strong>Why It Matters:</strong> 90% of patients read reviews before choosing a fertility clinic.</p>
                <p className="text-muted-foreground"><strong>Our Solution:</strong> Reputation management strategies to build trust and attract patients.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <MessageSquare className="w-10 h-10 text-destructive flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fragmented Marketing</h3>
                <p className="text-muted-foreground mb-2"><strong>The Problem:</strong> Running SEO, Google Ads, and social media in isolation without integration.</p>
                <p className="text-muted-foreground mb-2"><strong>Why It Matters:</strong> Fragmented efforts reduce effectiveness and waste budget.</p>
                <p className="text-muted-foreground"><strong>Our Solution:</strong> Integrated marketing that combines all channels into a cohesive patient acquisition system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible key={index} className="bg-background rounded-lg">
                <CollapsibleTrigger className="flex items-center justify-between w-full p-6 text-left hover:bg-muted/50 transition-colors">
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-200" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-primary relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Grow Your Fertility Clinic?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Stop wasting money on expensive, ineffective marketing. Partner with Odin Digital and watch your patient volume grow, acquisition costs drop, and revenue soar. We've helped 283+ fertility clinics achieve an average 540% ROI. You're next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={openForm} className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
              Schedule Your Free Consultation →
            </Button>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border z-50">
        <Button onClick={openForm} className="w-full bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white">
          Schedule Free Consultation →
        </Button>
      </div>

      <Footer />
    </>
  );
};

export default FertilityClinics;
