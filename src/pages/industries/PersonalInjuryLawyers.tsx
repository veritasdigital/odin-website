import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { CheckCircle2, Shield, TrendingUp, Users, Award, Target, Zap, Clock, BarChart3, FileCheck, Search, MousePointerClick, Share2, Palette, Scale, Gavel } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
const PersonalInjuryLawyers = () => {
  const {
    openForm
  } = useMarketingForm();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const faqs = [{
    question: "How do you ensure our marketing remains compliant with legal advertising rules?",
    answer: "Compliance is our highest priority. Our team is trained on the Legal Profession Uniform Law and state-specific rules (e.g., QLD/NSW restrictions). We integrate a mandatory compliance checklist into every campaign launch, ensuring we avoid prohibited language, sensationalism, and direct approaches to injured people."
  }, {
    question: "Why is personal injury PPC so expensive, and how do you manage the cost?",
    answer: "Personal injury PPC is expensive because the client lifetime value (CLV) is extremely high, driving up competition. We manage the cost by focusing on Case Pre-Qualification and Conversion Rate Optimisation (CRO). We use hyper-specific keywords and pre-qualify leads on the landing page, ensuring your high CPC only results in high-value, qualified case enquiries."
  }, {
    question: "How does SEO help a personal injury law firm with a long sales cycle?",
    answer: "SEO builds the long-term trust and authority necessary for a long sales cycle. By ranking for terms that answer a prospect's initial questions (e.g., \"how long do I have to file a claim?\"), you become the trusted resource. When they are ready to hire a lawyer months later, your firm is already the authority in their mind."
  }, {
    question: "We get a lot of leads, but most are low-value or time-wasters. How do you fix this?",
    answer: "We fix low-quality lead problems through Case Pre-Qualification Systems and Strategic Targeting. Our landing pages use qualifying questions (injury severity, liability clarity, case timeline) to filter out frivolous inquiries before they reach your intake team. We also exclude keywords that attract non-viable cases."
  }, {
    question: "How do you compete with personal injury marketing aggregators and lead generation companies?",
    answer: "We build your own proprietary case pipeline instead of relying on shared lead aggregators. Through SEO and branded PPC campaigns, we establish your firm as the direct authority, eliminating the need to compete for expensive, shared leads. This reduces cost per case and increases case quality."
  }, {
    question: "What makes your PPC campaigns different from other agencies managing personal injury Google Ads?",
    answer: "We build Case-Type-Specific Landing Pages and use Negative Keyword Sculpting. Instead of sending all clicks to a generic contact page, we create dedicated landing pages for each case type (motor vehicle accidents, workplace injuries, medical negligence). We also exclude low-intent and unqualified searches to maximize ROI."
  }, {
    question: "How long does it take to see results from SEO for a personal injury law firm?",
    answer: "SEO is a medium to long-term investment. You can expect to see measurable improvements in organic traffic and keyword rankings within 4-6 months. However, once established, SEO delivers compounding returns, driving qualified case inquiries month after month without the ongoing ad spend required by PPC."
  }, {
    question: "Can you help us with social media advertising for personal injury cases?",
    answer: "Yes, but with compliance-first guardrails. Meta Ads (Facebook and Instagram) are powerful for awareness-stage campaigns and retargeting. We create compliant ad creatives that educate and build trust without violating legal advertising restrictions. This keeps your firm top-of-mind throughout the long decision-making process."
  }, {
    question: "Do you offer web design services specifically for personal injury law firms?",
    answer: "Absolutely. We design compliance-focused, conversion-optimized websites tailored for personal injury firms. Our designs emphasize trust, authority, and ethical practice, with clear CTAs, case-type-specific landing pages, and seamless case submission integration to maximize case acquisition."
  }, {
    question: "What is your pricing structure? Do you require long-term contracts?",
    answer: "We offer flexible, performance-based pricing with no lock-in contracts. You can cancel with 30 days' notice. We earn your business every month through results, not binding agreements. Our 95% retention rate proves we deliver consistent value."
  }, {
    question: "How do you measure ROI for personal injury marketing campaigns?",
    answer: "We track every case inquiry back to its source and measure Cost Per Case Acquisition, Case Value, and overall Return on Ad Spend (ROAS). You'll receive detailed monthly reports showing exactly where your marketing dollars go and what results they generate, including case quality metrics and conversion rates."
  }, {
    question: "What is the typical ROI we can expect from working with Odin Digital?",
    answer: "Our average client sees a 540% ROI, meaning for every $1 invested, they generate $5.40 in revenue. However, results vary based on your market, competition, and case mix. We focus on delivering qualified, high-value cases—not just vanity metrics like clicks or impressions."
  }, {
    question: "How do you handle the ethical restrictions around advertising to injured people?",
    answer: "We strictly adhere to the prohibition on direct approaches to injured people. Our campaigns focus on Educational Content Marketing and Brand Authority Building. We attract clients who are actively seeking help, rather than soliciting individuals who may not yet be aware they have a claim."
  }, {
    question: "Can you help us if we're a new personal injury law firm with no existing client base?",
    answer: "Absolutely. We've helped numerous new firms launch successfully. We focus on rapid brand awareness through PPC and social media ads while simultaneously building your long-term SEO foundation. This dual approach generates immediate case inquiries while establishing sustainable growth."
  }, {
    question: "Do you work with personal injury law firms outside of major cities?",
    answer: "Yes. We work with personal injury firms across Australia, from major metro areas to regional markets. Our digital marketing strategies are tailored to your local competitive landscape, whether you're in Sydney, Melbourne, or a smaller regional hub."
  }, {
    question: "What happens if a campaign isn't performing as expected?",
    answer: "We provide complete transparency through monthly reporting. If a campaign underperforms, we immediately analyze the data, identify the issue, and implement optimizations. Our no lock-in contract policy means you're never trapped in an underperforming relationship—we earn your business every single month."
  }];
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "Organization",
      "@id": "https://growth-conduit-central.lovable.app/#organization",
      "name": "Odin Digital",
      "url": "https://growth-conduit-central.lovable.app/",
      "logo": "https://growth-conduit-central.lovable.app/logo.png",
      "description": "Performance-focused digital marketing agency specializing in compliant, high-value case acquisition for personal injury law firms.",
      "founder": {
        "@type": "Person",
        "name": "Lucas Durante"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "url": "https://growth-conduit-central.lovable.app/contact"
      },
      "sameAs": ["https://www.linkedin.com/company/odin-digital", "https://www.facebook.com/odindigital", "https://twitter.com/odindigital"]
    }, {
      "@type": "WebPage",
      "@id": "https://growth-conduit-central.lovable.app/industries/personal-injury-lawyers#webpage",
      "name": "Personal Injury Lawyer Marketing Agency",
      "url": "https://growth-conduit-central.lovable.app/industries/personal-injury-lawyers",
      "description": "The national hub page for compliant, high-value case acquisition strategies for personal injury lawyers in Australia.",
      "inLanguage": "en-AU",
      "lastReviewed": "2025-10-30",
      "isPartOf": {
        "@id": "https://growth-conduit-central.lovable.app/#website"
      }
    }, {
      "@type": "Service",
      "@id": "https://growth-conduit-central.lovable.app/industries/personal-injury-lawyers#service",
      "serviceType": "Digital Marketing for Personal Injury Lawyers",
      "provider": {
        "@id": "https://growth-conduit-central.lovable.app/#organization"
      },
      "areaServed": "Australia",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Personal Injury Case Acquisition Services",
        "itemListElement": [{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Compliant Case Pre-Qualification Funnels"
          }
        }, {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "High-Value Case PPC"
          }
        }, {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Law Firm Authority SEO"
          }
        }]
      }
    }, {
      "@type": "FAQPage",
      "@id": "https://growth-conduit-central.lovable.app/industries/personal-injury-lawyers#faqpage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }, {
      "@type": "Review",
      "@id": "https://growth-conduit-central.lovable.app/industries/personal-injury-lawyers#review",
      "itemReviewed": {
        "@type": "Organization",
        "name": "Odin Digital - Personal Injury Lawyer Marketing Agency"
      },
      "author": {
        "@type": "Person",
        "name": "Liam C"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys.",
      "publisher": {
        "@type": "Organization",
        "name": "Krush Organics"
      }
    }]
  };
  return <>
      <Helmet>
        <title>Personal Injury Lawyer Marketing Agency | Compliant & High-Value Cases | Odin Digital</title>
        <meta name="description" content="The only Personal Injury Lawyer Marketing Agency focused on compliant, high-value case acquisition. Stop wasting budget on junk leads. Proven 540% ROI." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <Header />
        
        {/* Section 1: Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#D91C5C]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Breadcrumb */}
              <nav className="text-sm text-muted-foreground mb-8">
                <a href="/" className="hover:text-primary transition-colors">Home</a>
                <span className="mx-2">/</span>
                <a href="/industries" className="hover:text-primary transition-colors">Industries</a>
                <span className="mx-2">/</span>
                <span className="text-foreground">Personal Injury Lawyers</span>
              </nav>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#D91C5C] to-primary bg-clip-text text-transparent inline-block pb-2 leading-tight">
                Personal Injury Lawyer Marketing Agency
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed px-4 md:px-0">
                Stop Wasting Budget on Junk Leads and Unethical Tactics. We Deliver High-Value, Compliant Case Generation for Personal Injury Lawyers with a Proven 540% ROI.
              </p>

              <Button onClick={openForm} size="lg" className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full md:w-auto">
                <span className="text-center">Get Your FREE Marketing Strategy</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Social Proof Metrics */}
        <section className="py-16 bg-background/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center p-6 bg-card rounded-lg shadow-sm border">
                <div className="text-4xl md:text-5xl font-bold text-[#D91C5C] mb-2">$47M+</div>
                <p className="text-sm md:text-base text-muted-foreground">Revenue Generated for Firms</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-sm border">
                <div className="text-4xl md:text-5xl font-bold text-[#D91C5C] mb-2">540%</div>
                <p className="text-sm md:text-base text-muted-foreground">Average ROI</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-sm border">
                <div className="text-4xl md:text-5xl font-bold text-[#D91C5C] mb-2">95%</div>
                <p className="text-sm md:text-base text-muted-foreground">Client Retention Rate</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-sm border">
                <div className="text-4xl md:text-5xl font-bold text-[#D91C5C] mb-2">100%</div>
                <p className="text-sm md:text-base text-muted-foreground">Compliant Campaigns</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Problem-Agitation Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Personal Injury Marketing Challenge</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Most personal injury law firms struggle with the same three problems that prevent sustainable growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              <div className="p-6 md:p-8 bg-card rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#D91C5C]/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#D91C5C]" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Low-Quality Leads & High Costs</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Your PPC budget is bleeding money on unqualified leads. You're paying $300+ per click only to get time-wasters, frivolous claims, or people who aren't ready to hire.
                </p>
              </div>

              <div className="p-6 md:p-8 bg-card rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#D91C5C]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#D91C5C]" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Compliance Nightmare</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  You're terrified of violating legal advertising rules. Other agencies don't understand the restrictions, putting your firm's reputation and licence at risk.
                </p>
              </div>

              <div className="p-6 md:p-8 bg-card rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#D91C5C]/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#D91C5C]" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Aggregator Dependency</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  You're stuck buying overpriced, shared leads from aggregators. You have no control over lead quality, and you're competing with 5 other firms for the same case.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Testimonials Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg md:text-xl text-white">Real results from real law firm partners</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              <div className="p-6 md:p-8 bg-card rounded-lg shadow-lg border">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Award key={i} className="w-5 h-5 text-[#D91C5C] fill-current" />)}
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-4 italic">
                  "We started marketing with Odin when we were just launching our brand and we did $157K in our first month together at a 5x ROI and things have only improved in the 18 months since. I literally refer all of my friends to these guys."
                </p>
                <p className="font-semibold text-sm md:text-base">Liam C</p>
                <p className="text-xs md:text-sm text-muted-foreground">Krush Organics</p>
              </div>

              <div className="p-6 md:p-8 bg-card rounded-lg shadow-lg border">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Award key={i} className="w-5 h-5 text-[#D91C5C] fill-current" />)}
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-4 italic">
                  "Finally, an agency that understands legal advertising compliance AND delivers results. Our case quality has improved dramatically, and we're attracting clients who actually have viable claims."
                </p>
                <p className="font-semibold text-sm md:text-base">Michael T</p>
                <p className="text-xs md:text-sm text-muted-foreground">Personal Injury Partner, Sydney</p>
              </div>

              <div className="p-6 md:p-8 bg-card rounded-lg shadow-lg border">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Award key={i} className="w-5 h-5 text-[#D91C5C] fill-current" />)}
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-4 italic">
                  "The ROI speaks for itself. We've cut our dependence on lead aggregators by 70% while tripling our high-value case inquiries. Best investment we've made."
                </p>
                <p className="font-semibold text-sm md:text-base">Sarah K</p>
                <p className="text-xs md:text-sm text-muted-foreground">Law Firm Director, Melbourne</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Integrated Services for Personal Injury Firms</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Compliant, high-value case acquisition across every channel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="p-6 md:p-8 bg-card rounded-lg shadow-md border hover:shadow-xl transition-all flex flex-col">
                <div className="w-12 h-12 bg-[#D91C5C]/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-[#D91C5C]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">SEO for Law Firms</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-6 flex-grow">
                  Dominate local search results for high-value case types. We build authority and trust through compliant content that positions your firm as the go-to expert.
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm">Case-type-specific landing pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm">Compliance-focused content strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm">Local SEO domination</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-auto border-[#D91C5C] text-[#D91C5C] hover:bg-[#D91C5C] hover:text-white text-sm md:text-base" asChild>
                  <a href="/seo-agency">Learn More</a>
                </Button>
              </div>

              <div className="p-6 md:p-8 bg-card rounded-lg shadow-md border hover:shadow-xl transition-all flex flex-col">
                <div className="w-12 h-12 bg-[#D91C5C]/10 rounded-lg flex items-center justify-center mb-4">
                  <MousePointerClick className="w-6 h-6 text-[#D91C5C]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">PPC for Personal Injury</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-6 flex-grow">
                  High-intent Google Ads campaigns that pre-qualify cases and filter out time-wasters. Only pay for clients who have viable, high-value claims.
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm">Case pre-qualification funnels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm">Negative keyword sculpting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm">Case-type-specific landing pages</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-auto border-[#D91C5C] text-[#D91C5C] hover:bg-[#D91C5C] hover:text-white text-sm md:text-base" asChild>
                  <a href="/ppc-agency">Learn More</a>
                </Button>
              </div>

              <div className="p-6 md:p-8 bg-card rounded-lg shadow-md border hover:shadow-xl transition-all flex flex-col">
                <div className="w-12 h-12 bg-[#D91C5C]/10 rounded-lg flex items-center justify-center mb-4">
                  <Share2 className="w-6 h-6 text-[#D91C5C]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">Social Media for Lawyers</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-6 flex-grow">
                  Build brand authority and nurture prospects through compliant social media campaigns. Stay top-of-mind throughout the long decision cycle.
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm">Educational content funnels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm">Compliant retargeting campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm">Brand awareness strategies</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-auto border-[#D91C5C] text-[#D91C5C] hover:bg-[#D91C5C] hover:text-white text-sm md:text-base" asChild>
                  <a href="/meta-ads-agency">Learn More</a>
                </Button>
              </div>

              <div className="p-6 md:p-8 bg-card rounded-lg shadow-md border hover:shadow-xl transition-all flex flex-col">
                <div className="w-12 h-12 bg-[#D91C5C]/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-[#D91C5C]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">Web Design for Law Firms</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-6 flex-grow">
                  Professional, conversion-optimized websites that build trust and drive case submissions. Fully compliant with seamless intake integration.
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm">Trust-building, authoritative design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm">Case intake integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#D91C5C] flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm">Mobile-optimized for conversions</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-auto border-[#D91C5C] text-[#D91C5C] hover:bg-[#D91C5C] hover:text-white text-sm md:text-base" asChild>
                  <a href="/web-design-agency">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Differentiators Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Personal Injury Firms Choose Odin Digital</h2>
              <p className="text-lg md:text-xl text-muted-foreground">The only agency built specifically for compliant, high-value case acquisition</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              <div className="text-center p-4 md:p-6">
                <div className="w-16 h-16 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#D91C5C]" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Compliance-First Methodology</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Every campaign, ad, and landing page is vetted against legal advertising rules before launch. Protect your licence while maximizing results.
                </p>
              </div>

              <div className="text-center p-4 md:p-6">
                <div className="w-16 h-16 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-[#D91C5C]" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Case Pre-Qualification Systems</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  We filter out frivolous claims before they reach your intake team. Only high-intent, viable cases make it through.
                </p>
              </div>

              <div className="text-center p-4 md:p-6">
                <div className="w-16 h-16 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-[#D91C5C]" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Proprietary Case Pipeline</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Build your own case acquisition system instead of relying on expensive, shared aggregator leads.
                </p>
              </div>

              <div className="text-center p-4 md:p-6">
                <div className="w-16 h-16 bg-[#D91C5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-[#D91C5C]" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">Performance-Based Accountability</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  No lock-in contracts. We earn your business every month through transparent reporting and measurable ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven 4-Step Process</h2>
              <p className="text-lg md:text-xl text-muted-foreground">From audit to optimization, we deliver results fast</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#D91C5C] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Compliance & Competitive Audit</h3>
                    <p className="text-muted-foreground">
                      We analyze your current marketing for legal advertising compliance gaps and competitive positioning. Identify quick wins and long-term opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#D91C5C] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Custom Strategy Development</h3>
                    <p className="text-muted-foreground">
                      Build a multi-channel case acquisition roadmap tailored to your firm's unique practice areas, location, and growth goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#D91C5C] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Campaign Launch & Case Nurturing</h3>
                    <p className="text-muted-foreground">
                      Execute compliant campaigns across SEO, PPC, and Social Media. Implement automated nurturing systems to convert prospects over time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#D91C5C] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Continuous Optimization & Reporting</h3>
                    <p className="text-muted-foreground">
                      Monthly performance reviews, A/B testing, and strategy refinement. We iterate relentlessly to maximize your ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Why Choose Us Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Odin Digital Advantage</h2>
              <p className="text-lg md:text-xl text-muted-foreground">Built for high-value, compliance-heavy industries</p>
            </div>

            <div className="max-w-6xl mx-auto space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Industry Expertise That Matters</h3>
                  <p className="text-muted-foreground mb-4">
                    We specialize in marketing for personal injury lawyers, law firms, and legal professionals. We understand legal advertising compliance, case psychology, and the nuances of high-stakes case marketing.
                  </p>
                  <p className="text-muted-foreground">
                    Most agencies treat law firms like any other local service business. We don't. We've spent years mastering the compliance requirements and sales cycles unique to your industry.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#D91C5C]/20 to-primary/20 rounded-lg p-8 h-64 flex items-center justify-center">
                  <Scale className="w-32 h-32 text-[#D91C5C]" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-primary/20 to-[#D91C5C]/20 rounded-lg p-8 h-64 flex items-center justify-center order-2 md:order-1">
                  <TrendingUp className="w-32 h-32 text-[#D91C5C]" />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-3xl font-bold mb-4">Performance-Based Partnership</h3>
                  <p className="text-muted-foreground mb-4">
                    We don't believe in trapping clients in long-term contracts. You can cancel at any time with 30 days' notice. Our 95% retention rate proves we deliver value month after month.
                  </p>
                  <p className="text-muted-foreground">
                    We earn your business every single month through results, not binding contracts. If we're not performing, you shouldn't be forced to stay.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Transparent Reporting and Analytics</h3>
                  <p className="text-muted-foreground mb-4">
                    We provide detailed monthly reports showing exactly where your marketing dollars go and what results they generate. Track case inquiries, cost per acquisition, keyword rankings, and ROI with complete transparency.
                  </p>
                  <p className="text-muted-foreground">
                    No smoke and mirrors. No vanity metrics. Just clear, actionable data that shows exactly how your investment is performing.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#D91C5C]/20 to-primary/20 rounded-lg p-8 h-64 flex items-center justify-center">
                  <BarChart3 className="w-32 h-32 text-[#D91C5C]" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-primary/20 to-[#D91C5C]/20 rounded-lg p-8 h-64 flex items-center justify-center order-2 md:order-1">
                  <Users className="w-32 h-32 text-[#D91C5C]" />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-3xl font-bold mb-4">Dedicated Account Management</h3>
                  <p className="text-muted-foreground mb-4">
                    You'll work directly with a senior account manager who understands your practice, your goals, and your industry. No junior staff. No outsourced labor. Just experienced professionals who care about your success.
                  </p>
                  <p className="text-muted-foreground">
                    Your account manager becomes an extension of your team, providing strategic guidance, monthly reporting, and proactive optimization recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Final CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D91C5C] to-primary opacity-95"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white px-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Stop Wasting Budget on Junk Leads?
              </h2>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Get a FREE, no-obligation marketing strategy session tailored to your law firm. Discover how we can deliver compliant, high-value case acquisition starting today.
              </p>
              <Button onClick={openForm} size="lg" className="bg-white text-[#D91C5C] hover:bg-white/90 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 w-full md:w-auto">
                <span className="text-center">Schedule Your FREE Strategy Session</span>
              </Button>
              <p className="text-sm mt-4 opacity-75">No lock-in contracts. Cancel anytime with 30 days' notice.</p>
            </div>
          </div>
        </section>

        {/* Section 10: Related Industry & Service Links */}
        

        {/* Section 11: FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 text-center">
                Everything you need to know about personal injury lawyer marketing
              </p>

              <div className="space-y-4">
                {faqs.map((faq, index) => <Collapsible key={index} className="bg-card border rounded-lg">
                    <CollapsibleTrigger className="flex justify-between items-center w-full p-6 text-left hover:bg-secondary/50 transition-colors rounded-lg">
                      <span className="font-semibold pr-4">{faq.question}</span>
                      <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-200" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-6 pb-6">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CollapsibleContent>
                  </Collapsible>)}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t shadow-lg md:hidden z-40">
          <Button onClick={openForm} className="w-full bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white text-sm" size="lg">
            <span className="text-center">Get FREE Strategy Session</span>
          </Button>
        </div>

        <Footer />
        <SideTab />
      </div>
    </>;
};
export default PersonalInjuryLawyers;