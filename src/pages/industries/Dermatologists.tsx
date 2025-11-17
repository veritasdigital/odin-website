import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertTriangle,
  Shield,
  TrendingUp,
  Star,
  Search,
  MousePointerClick,
  Share2,
  Globe,
  Target,
  Award,
  Users,
  Lock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const Dermatologists = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://odindigital.com.au/industries/dermatologists#professionalservice",
    "name": "Dermatology Marketing Agency",
    "description": "The dermatology marketing agency that fills your schedule with high-value cosmetic patients. SEO, Google Ads, Meta Ads, and Web Design for dermatologists. $574M+ in client revenue. No lock-in contracts.",
    "url": "https://odindigital.com.au/industries/dermatologists",
    "provider": {
      "@id": "https://odindigital.com.au/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "283",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$"
  };

  return (
    <>
      <Helmet>
        <title>Dermatology Marketing Agency | Attract High-Value Cosmetic Patients | Odin Digital</title>
        <meta name="description" content="The dermatology marketing agency that fills your schedule with high-value cosmetic patients. SEO, Google Ads, Meta Ads, and Web Design for dermatologists. $574M+ in client revenue. No lock-in contracts." />
        <link rel="canonical" href="https://growth-conduit-central.lovable.app/industries/dermatologists" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <SideTab />
        <MarketingFormModal />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Digital Marketing for Dermatologists: Attract High-Value Cosmetic Patients and Grow Your Practice
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              The Dermatology Marketing Agency That Fills Your Schedule with the Right Patients
            </h2>
            <p className="text-xl mb-4 text-muted-foreground max-w-3xl mx-auto">
              Partner with Odin Digital and Turn Your Dermatology Practice into a Patient Magnet.
            </p>
            <p className="text-lg mb-8 text-muted-foreground max-w-3xl mx-auto">
              The challenge for dermatologists today is clear: med spas with flashy marketing and lower prices are stealing your cosmetic patients, while your schedule fills with low-margin insurance work. You need a dermatology marketing agency that understands your unique position as a board-certified medical expert and helps you attract the high-value cosmetic patients your practice deserves.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90">
                Get Your FREE Dermatology Marketing Strategy Session <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary">$574M+</div>
                <div className="text-sm text-muted-foreground">Client Revenue</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Client Retention</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Agitation Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                The Problem: Why Most Dermatology Marketing Fails
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                If your practice is struggling to attract cosmetic patients, it's not your fault. The healthcare marketing industry is broken.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4 p-6 bg-card rounded-lg border border-border">
                <AlertTriangle className="w-12 h-12 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">The Med Spa Invasion</h3>
                  <p className="text-muted-foreground">
                    Non-medical providers are flooding the market with aggressive Instagram ads, offering Botox and fillers at rock-bottom prices. They don't have your overhead, your training, or your liability—but they're winning the marketing war because they invest in digital while you rely on outdated referrals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-card rounded-lg border border-border">
                <TrendingUp className="w-12 h-12 text-warning flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">The Insurance Patient Trap</h3>
                  <p className="text-muted-foreground">
                    Your schedule is full, but your profit margins are razor-thin because you're attracting insurance patients with acne and eczema instead of cash-paying cosmetic patients seeking Botox, fillers, and laser treatments. You're working harder but earning less.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-card rounded-lg border border-border">
                <Globe className="w-12 h-12 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Your Outdated Website is a Liability</h3>
                  <p className="text-muted-foreground">
                    Your website looks like it was built in 2008 and doesn't reflect the premium, modern practice you run. It loads slowly on mobile, doesn't showcase before/after photos, and fails to convert visitors into booked appointments. First impressions matter, and yours is costing you patients.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-card rounded-lg border border-border">
                <Star className="w-12 h-12 text-warning flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">The Reputation Management Crisis</h3>
                  <p className="text-muted-foreground">
                    You have a handful of old Google reviews while your competitors (including med spas) have hundreds of glowing 5-star reviews. Prospective patients search your name, see a thin online presence, and choose someone else. You're invisible online.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Talk to a Dermatology Marketing Expert <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                The Odin Digital Solution: A Complete Digital Marketing System for Dermatology Practices
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We built our dermatology marketing agency to solve the exact problems that dermatologists face.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Strategic Positioning: Dermatologist vs. Med Spa</h3>
                <p className="text-muted-foreground">
                  We create messaging that emphasizes your board certification, medical training, and superior safety protocols. We position you as the premium, expert choice for cosmetic procedures—the anti-med spa.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">High-Value Patient Acquisition</h3>
                <p className="text-muted-foreground">
                  We use advanced audience targeting and high-intent keywords to attract patients actively searching for Botox, dermal fillers, laser skin resurfacing, and other high-margin cosmetic services—not insurance eczema consults.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Conversion-Optimized Website Design</h3>
                <p className="text-muted-foreground">
                  We build stunning, mobile-first websites that showcase your expertise through before/after galleries, video testimonials, and seamless online booking. Your website becomes a 24/7 patient acquisition machine.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Star className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Reputation Management & Review Generation</h3>
                <p className="text-muted-foreground">
                  We implement automated review request systems to flood your Google Business Profile with authentic 5-star reviews, ensuring you dominate local search results and outshine med spas in your area.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  See Our Dermatology Marketing Services <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Our 4 Core Services: Everything Your Dermatology Practice Needs to Dominate
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                As a full-service dermatology marketing agency, we provide everything you need to attract, convert, and retain high-value patients.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg border border-border hover:shadow-xl transition-all">
                <Search className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-foreground">SEO for Dermatologists (Dominate Local Search)</h3>
                <p className="text-muted-foreground mb-4">
                  We optimize your website and Google Business Profile to rank #1 for high-value keywords like "Botox near me," "dermatologist cosmetic procedures," and "laser skin treatment [city]."
                </p>
                <p className="text-sm text-muted-foreground mb-4 font-semibold">Key Deliverables:</p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Keyword research focused on cosmetic dermatology services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>On-page SEO optimization and technical site audits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Google Business Profile optimization and review management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Content marketing focused on patient education</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border hover:shadow-xl transition-all">
                <MousePointerClick className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-foreground">Google Ads for Dermatologists (Instant High-Value Leads)</h3>
                <p className="text-muted-foreground mb-4">
                  We run precision-targeted Google Ads campaigns that put your practice at the top of search results for high-intent cosmetic searches, delivering immediate leads.
                </p>
                <p className="text-sm text-muted-foreground mb-4 font-semibold">Key Deliverables:</p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Campaign structure focused on cosmetic services (Botox, fillers, lasers)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Negative keyword lists to filter out insurance queries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Conversion tracking for phone calls and form submissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Monthly performance reports with ROI analysis</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border hover:shadow-xl transition-all">
                <Share2 className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-foreground">Meta Ads (Facebook & Instagram) for Dermatologists</h3>
                <p className="text-muted-foreground mb-4">
                  We create visually stunning ad campaigns on Instagram and Facebook that showcase your before/after results and attract cosmetic patients who are actively researching procedures.
                </p>
                <p className="text-sm text-muted-foreground mb-4 font-semibold">Key Deliverables:</p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Audience targeting based on demographics and interests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>HIPAA-compliant before/after creative ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Lead generation campaigns with automated follow-up</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Retargeting campaigns to re-engage website visitors</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border hover:shadow-xl transition-all">
                <Globe className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-foreground">Web Design for Dermatologists (Your Digital Storefront)</h3>
                <p className="text-muted-foreground mb-4">
                  We design and build modern, conversion-focused websites that reflect your premium positioning and convert visitors into booked appointments.
                </p>
                <p className="text-sm text-muted-foreground mb-4 font-semibold">Key Deliverables:</p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Mobile-first, fast-loading website design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Before/after gallery and video testimonials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Online booking integration (seamless scheduling)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>SEO-optimized structure and content</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Ready to Fill Your Schedule? Contact Us <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Our Proven Process: The 5-Phase Dermatology Marketing System
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We follow a repeatable, data-driven system to ensure consistent, scalable growth for every dermatology practice we partner with.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Deep-Dive Market & Competitive Analysis</h3>
                  <p className="text-muted-foreground">
                    We audit your current online presence, analyze your local competitors (including med spas), and identify high-value keyword and patient acquisition opportunities.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Strategic Positioning & Messaging Development</h3>
                  <p className="text-muted-foreground">
                    We craft a unique value proposition that positions you as the premium, board-certified expert alternative to med spas—emphasizing safety, expertise, and superior results.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Multi-Channel Campaign Launch (SEO, Ads, Website)</h3>
                  <p className="text-muted-foreground">
                    We simultaneously launch SEO optimization, Google Ads, Meta Ads, and (if needed) a new website to create an immediate and sustained flow of high-value cosmetic patient leads.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Data-Driven Optimization & Scaling</h3>
                  <p className="text-muted-foreground">
                    We continuously monitor campaign performance, refine targeting, optimize ad creative, and scale the highest-performing campaigns to maximize your ROI.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Reputation Building & Patient Retention</h3>
                  <p className="text-muted-foreground">
                    We implement automated review request systems, patient re-engagement campaigns, and ongoing content marketing to build your reputation and maximize patient lifetime value.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Start Your 5-Phase Growth Journey <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                What Makes Us the Best Dermatology Marketing Agency?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We are not a generalist agency that dabbles in healthcare. We are specialists.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow">
                <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">HIPAA Compliance & Healthcare Expertise</h3>
                <p className="text-muted-foreground">
                  We understand the strict regulations governing healthcare marketing and ensure all campaigns, websites, and content are fully HIPAA-compliant.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow">
                <Target className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Focus on High-Value Cosmetic Patients</h3>
                <p className="text-muted-foreground">
                  We don't waste your budget on low-margin insurance patients. We target high-intent, cash-paying patients seeking cosmetic dermatology services.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow">
                <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Proven Track Record in Healthcare</h3>
                <p className="text-muted-foreground">
                  We have generated $574M+ in verified client revenue across multiple industries, including healthcare, and maintain a 95% client retention rate.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow">
                <Lock className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">No Lock-In Contracts</h3>
                <p className="text-muted-foreground">
                  We operate on a month-to-month basis. If we don't deliver results, you can leave at any time. Our results speak for themselves.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Talk to a Dermatology Marketing Specialist <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                FAQs: Your Questions About Dermatology Marketing Answered
              </h2>
              <p className="text-xl text-muted-foreground">
                We know you have specific concerns about marketing your practice. Here are clear, honest answers.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  How much does dermatology marketing cost?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our pricing is customized based on your goals, market competition, and the services you need. A typical comprehensive dermatology practice marketing strategy (SEO + Google Ads + Meta Ads + Website) ranges from $3,000 to $8,000 per month, depending on your market size and growth targets. We provide a transparent proposal during your free strategy session.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  How long does it take to see results from dermatology marketing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Google Ads and Meta Ads deliver immediate results—you'll see traffic and leads within days. SEO is a longer-term investment, with initial improvements in 3-4 months and significant growth in 6-12 months. Our approach combines both for immediate leads and long-term dominance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  Can you help me attract more cosmetic patients instead of just insurance patients?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. This is our specialty. We use advanced audience targeting, high-intent keywords, and strategic messaging to attract patients actively seeking Botox, fillers, laser treatments, and other high-margin cosmetic services. We help you shift your patient mix toward higher profitability.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  Do you handle HIPAA compliance in your marketing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. All of our campaigns, websites, and content are fully HIPAA-compliant. We understand the strict privacy regulations in healthcare and ensure all patient data and marketing materials meet legal standards.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  How do you differentiate dermatologists from med spas in your marketing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We emphasize your medical training, board certification, and superior safety protocols. We create content that educates patients on the risks of non-medical providers and positions you as the trusted, expert choice for cosmetic procedures.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  Can you help with online reviews and reputation management?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. We implement a proactive review generation strategy to flood your Google Business Profile with 5-star reviews. We also monitor your online reputation and provide guidance on responding to negative reviews professionally.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  Do you build dermatology websites?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. Our dermatology website design service includes modern, mobile-first websites with before/after galleries, online booking integration, and SEO optimization. We build websites that convert visitors into booked appointments.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  What is the ROI of dermatology marketing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our clients typically see a 3:1 to 10:1 return on their marketing investment, depending on their service mix and pricing. For example, if you invest $5,000/month and acquire 10 new Botox patients (average lifetime value $2,000 each), your ROI is 4:1 ($20,000 revenue / $5,000 spend).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  Do you offer dermatology marketing for both medical and cosmetic services?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. We create strategies that balance both. We ensure you maintain a steady flow of medical dermatology patients (for stability) while aggressively growing your high-margin cosmetic services (for profitability).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  Can you help with social media marketing for dermatologists?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. Our dermatology social media marketing service includes content creation, before/after showcases (HIPAA-compliant), and paid advertising on Instagram and Facebook to attract cosmetic patients and build your brand.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Fill Your Schedule with High-Value Patients?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Stop losing cosmetic patients to med spas. Start dominating your local market with a proven digital marketing for dermatologists strategy.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Claim Your FREE Dermatology Marketing Strategy Session <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden w-[calc(100%-2rem)]">
          <Link to="/contact" className="block">
            <Button size="lg" className="w-full bg-accent hover:bg-accent/90 shadow-lg">
              Get FREE Strategy Session <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Dermatologists;
