import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { CheckCircle2, TrendingUp, Target, Award, Shield, Users, Clock, Zap, Search, FileText, Link2, MapPin, BarChart3, Lightbulb } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const PerthSEO = () => {
  const {
    openForm
  } = useMarketingForm();
  const metrics = [{
    number: "$574M+",
    label: "Client Revenue Generated"
  }, {
    number: "540%",
    label: "Average ROI Across All Services"
  }, {
    number: "95%",
    label: "Client Retention Rate"
  }, {
    number: "283+",
    label: "Successful Campaigns Delivered"
  }];
  const painPoints = [{
    icon: <Shield className="w-12 h-12 text-primary" />,
    title: "You're Tired of Agencies That Overpromise and Underdeliver",
    description: "You've been burned before. An agency promised you page 1 rankings, charged you thousands, and six months later you're still invisible on Google. You're tired of excuses, technical jargon, and reports that don't translate to actual business growth."
  }, {
    icon: <TrendingUp className="w-12 h-12 text-primary" />,
    title: "You Need SEO That Actually Drives Business Growth",
    description: "You don't care about rankings for the sake of rankings. You care about phone calls, form submissions, and sales. You need an SEO partner who understands that traffic means nothing if it doesn't convert into paying customers."
  }, {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "You Want Transparency, Not Technical Jargon",
    description: "You're sick of monthly reports filled with confusing metrics and industry buzzwords. You want to understand exactly what you're paying for, what's working, what's not, and how it's impacting your bottom line."
  }];
  const testimonials = [{
    company: "YCL Jewels",
    result: "292% Revenue Growth in 12 Months",
    quote: "We partnered with Odin Digital when our online sales were stagnant. Within 12 months, our revenue grew by 292%. Their SEO strategy didn't just improve our rankings—it transformed our entire business.",
    name: "Yuri Levin",
    title: "Founder",
    location: "Sydney, NSW"
  }, {
    company: "The Mining Store",
    result: "527% Increase in Organic Traffic",
    quote: "Before Odin Digital, we were invisible online. Now we dominate search results for our industry keywords. The increase in qualified traffic has been incredible—and more importantly, those visitors are converting into customers.",
    name: "Will Wright",
    title: "Director",
    location: "Perth, WA"
  }];
  const services = [{
    icon: <MapPin className="w-16 h-16 text-primary" />,
    title: "Local SEO Perth",
    tagline: "Dominate Local Search Results",
    description: "If you're a Perth-based business serving local customers, local SEO is your secret weapon. We optimize your Google Business Profile, build local citations, and create location-specific content that puts you at the top of \"near me\" searches.",
    description2: "Our local SEO strategies ensure your business appears when Perth customers are actively searching for your services. We focus on the searches that matter—the ones that drive foot traffic, phone calls, and local sales.",
    perfectFor: "Restaurants, retail stores, service providers, medical practices, and any business serving Perth customers.",
    cta: "Get Your Free Local SEO Audit →"
  }, {
    icon: <Search className="w-16 h-16 text-primary" />,
    title: "Technical SEO",
    tagline: "Fix What's Holding You Back",
    description: "Technical SEO is the foundation of your online visibility. If your website has technical issues—slow loading speeds, mobile problems, broken links, or crawlability issues—Google won't rank you, no matter how good your content is.",
    description2: "We conduct comprehensive technical audits to identify and fix issues that are killing your rankings. From site speed optimization to structured data implementation, we ensure your website meets Google's technical standards.",
    perfectFor: "E-commerce sites, large websites, businesses with complex site structures, or anyone who's been told they have \"technical issues.\"",
    cta: "Get Your Technical SEO Audit →"
  }, {
    icon: <FileText className="w-16 h-16 text-primary" />,
    title: "Content & On-Page SEO",
    tagline: "Content That Ranks and Converts",
    description: "Content is still king, but only if it's strategically created with search intent and conversion in mind. We don't just write blog posts for the sake of it—we create content that answers your customers' questions, ranks for valuable keywords, and guides them toward taking action.",
    description2: "Our on-page SEO ensures every element of your pages—from title tags to internal linking—is optimized for both search engines and user experience. We make sure your content doesn't just rank; it converts.",
    perfectFor: "Businesses looking to establish authority, attract organic traffic, and convert visitors into customers through valuable content.",
    cta: "Start Your Content Strategy →"
  }, {
    icon: <Link2 className="w-16 h-16 text-primary" />,
    title: "Link Building & Off-Page SEO",
    tagline: "Build Authority That Lasts",
    description: "Backlinks are Google's vote of confidence. But not all links are created equal. Low-quality, spammy links can actually hurt your rankings. We focus on earning high-quality, relevant backlinks from authoritative websites that boost your credibility and rankings.",
    description2: "Our off-page SEO strategies include strategic outreach, digital PR, content marketing, and relationship building with industry publications. We build links that move the needle—not just vanity metrics.",
    perfectFor: "Competitive industries, businesses looking to overtake competitors, or anyone struggling to rank despite having good content.",
    cta: "Get Your Link Building Strategy →"
  }];
  const differentiators = [{
    icon: <Shield className="w-12 h-12 text-primary" />,
    title: "No Lock-In Contracts",
    description: "We earn your business every month. No lock-in contracts, no cancellation fees. If we're not delivering results, you're free to leave."
  }, {
    icon: <CheckCircle2 className="w-12 h-12 text-primary" />,
    title: "100% Transparency",
    description: "You'll always know exactly what we're doing, why we're doing it, and how it's performing. No smoke and mirrors, no confusing jargon."
  }, {
    icon: <Award className="w-12 h-12 text-primary" />,
    title: "Proven Track Record",
    description: "$574M+ in client revenue. 95% retention rate. 540% average ROI. These aren't hypotheticals—these are real results for real businesses."
  }, {
    icon: <MapPin className="w-12 h-12 text-primary" />,
    title: "Perth Market Expertise",
    description: "We understand the Perth market, your local competitors, and the unique challenges of ranking in Western Australia."
  }];
  const processSteps = [{
    number: "1",
    icon: <Search className="w-10 h-10 text-primary" />,
    title: "Comprehensive SEO Audit",
    description: "We start with a deep-dive audit of your current SEO performance. We identify what's working, what's not, and most importantly, what opportunities you're missing."
  }, {
    number: "2",
    icon: <Target className="w-10 h-10 text-primary" />,
    title: "Custom SEO Strategy",
    description: "No cookie-cutter plans. We build a custom SEO strategy tailored to your business goals, target audience, competitive landscape, and budget."
  }, {
    number: "3",
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Strategic Implementation",
    description: "Our team gets to work implementing your strategy—technical fixes, content creation, link building, and on-page optimization—all executed with precision."
  }, {
    number: "4",
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    title: "Continuous Optimization",
    description: "SEO isn't set-and-forget. We continuously monitor performance, test new strategies, adapt to algorithm changes, and optimize for maximum ROI."
  }];
  const uniqueValue = [{
    title: "We Focus on Revenue, Not Just Rankings",
    description: "Rankings are great, but revenue is better. We focus on attracting qualified traffic that converts into paying customers. Every strategy we implement is tied back to your bottom line."
  }, {
    title: "We're an Extension of Your Team",
    description: "We don't just send monthly reports and disappear. We become part of your team, understanding your business deeply and aligning our SEO efforts with your broader marketing and business goals."
  }, {
    title: "We Stay Ahead of Algorithm Changes",
    description: "Google makes thousands of algorithm updates every year. We stay on top of every change, adapting our strategies to ensure your rankings don't just survive—they thrive."
  }, {
    title: "We Build Long-Term Assets",
    description: "We don't chase quick wins that disappear in six months. We build sustainable SEO assets—authoritative content, quality backlinks, and technical foundations—that deliver compounding returns for years."
  }];
  const faqs = [{
    question: "What makes your SEO services Perth different from other agencies?",
    answer: "Our Perth SEO services are built on three core principles: transparency, results, and accountability. Unlike agencies that lock you into long-term contracts and deliver vague reports, we provide clear, measurable results tied directly to your business goals. We've generated $574M+ in client revenue with a 95% retention rate because we focus on driving real business growth, not just improving vanity metrics. Our Perth-based expertise means we understand the local market, your competitors, and the unique challenges of ranking in Western Australia."
  }, {
    question: "How do I choose the best SEO company Perth for my business?",
    answer: "When choosing the best SEO company Perth, look for proven results, transparency, and industry expertise. Ask potential agencies for case studies with specific revenue or traffic metrics, not just rankings. Ensure they offer no lock-in contracts—good agencies earn your business every month. Check their retention rate (ours is 95%) as this indicates client satisfaction. Verify they provide transparent reporting in plain English, not technical jargon. Finally, ensure they understand your industry and the Perth market specifically. Beware of agencies promising guaranteed #1 rankings or overnight results—these are red flags."
  }, {
    question: "What SEO packages Perth do you offer?",
    answer: "Our SEO packages Perth are customized to your business needs, not one-size-fits-all templates. We offer packages covering local SEO (for Perth-based businesses serving local customers), technical SEO (fixing site speed, mobile optimization, and crawlability issues), content and on-page SEO (creating content that ranks and converts), and link building and off-page SEO (building authority through quality backlinks). Each package is tailored to your industry, competition level, and business goals. During your free strategy session, we'll recommend the right package mix for your specific situation and budget."
  }, {
    question: "How does your Perth SEO agency approach local search optimization?",
    answer: "As a Perth SEO agency, we understand that local search is critical for businesses serving Perth customers. Our local SEO approach includes optimizing your Google Business Profile for maximum visibility, building and managing local citations across directories, creating location-specific content targeting \"Perth\" and \"near me\" searches, generating and managing customer reviews, and implementing local schema markup. We focus on the searches that drive foot traffic, phone calls, and local sales. Our Perth market expertise means we know which local keywords matter most and how to outrank your local competitors."
  }, {
    question: "What can I expect from working with an SEO consultant Perth?",
    answer: "Working with our SEO consultant Perth team means partnering with experts who become an extension of your business. You can expect a comprehensive SEO audit identifying opportunities and issues, a custom strategy tailored to your goals and budget, transparent monthly reporting in plain English (not jargon), regular strategy calls to discuss performance and next steps, proactive recommendations based on algorithm changes and market trends, and direct access to your dedicated consultant—no account managers or middlemen. We focus on education, ensuring you understand exactly what we're doing and why it matters for your business."
  }, {
    question: "How long does SEO take to show results?",
    answer: "SEO is a long-term investment, not a quick fix. Most businesses start seeing measurable improvements in 3-6 months, with significant results typically appearing around the 6-12 month mark. However, timelines vary based on your industry competitiveness, current website condition, and budget. Technical SEO fixes can show quick wins within weeks, while content and link building strategies build momentum over time. Unlike paid advertising where results stop when you stop paying, SEO builds compounding returns—the longer you invest, the stronger your results become. We provide realistic timelines during your strategy session based on your specific situation."
  }, {
    question: "Do you offer search engine optimisation Perth for specific industries?",
    answer: "Yes, our search engine optimisation Perth services cover virtually every industry. We've delivered successful SEO campaigns for e-commerce businesses, professional services (legal, accounting, medical), home services (plumbing, electrical, HVAC), hospitality and tourism, retail, B2B services, healthcare providers, and many more. Each industry has unique search behaviors, competitive landscapes, and conversion paths. We tailor our SEO strategies to your specific industry, understanding your customer's search intent and creating campaigns that align with how your target audience actually searches and buys."
  }, {
    question: "What's included in your SEO audit?",
    answer: "Our comprehensive SEO audit covers technical SEO (site speed, mobile optimization, crawlability, indexation issues, structured data), on-page SEO (title tags, meta descriptions, header structure, content quality, internal linking), off-page SEO (backlink profile analysis, competitor link analysis, toxic link identification), local SEO (Google Business Profile optimization, local citations, review analysis), and competitive analysis (ranking comparison, keyword gap analysis, competitor strategies). You'll receive a detailed report identifying critical issues, quick win opportunities, and long-term strategy recommendations—all in plain English with clear action items prioritized by impact."
  }, {
    question: "How do you measure SEO success?",
    answer: "We measure SEO success by metrics that matter to your business: organic traffic growth (qualified visitors, not just numbers), keyword rankings (especially for high-intent commercial keywords), conversion rates (form submissions, phone calls, sales), revenue generated from organic search, and return on investment. While we track technical metrics like domain authority and backlinks, we always tie these back to business outcomes. You'll receive monthly reports showing exactly how SEO is impacting your bottom line. Our focus is on revenue, not vanity metrics—because rankings mean nothing if they don't drive business growth."
  }, {
    question: "What is the cost of SEO services Perth?",
    answer: "SEO services Perth pricing varies based on your industry competitiveness, current website condition, business goals, and scope of work needed. Our monthly SEO packages typically range from $2,000-$10,000+ depending on these factors. While this may seem like a significant investment, consider that our clients see an average ROI of 540%, meaning for every dollar spent, they're generating $5.40 in return. During your free strategy session, we'll provide transparent pricing based on your specific needs and expected ROI. We never lock you into long-term contracts—you stay because we deliver results, not because you're contractually obligated."
  }, {
    question: "Why should I hire a professional SEO Perth expert instead of doing it myself?",
    answer: "Hiring a professional SEO Perth expert saves you time, money, and costly mistakes. SEO requires specialized knowledge of Google's algorithm (which changes constantly), technical website optimization, content strategy, link building, and competitive analysis. Most business owners who attempt DIY SEO waste months on strategies that don't work or, worse, hurt their rankings with outdated tactics. Our team stays current with algorithm changes, has access to premium SEO tools (costing thousands monthly), and brings years of experience across hundreds of campaigns. You get proven strategies that work, not trial-and-error experimentation with your business's online visibility."
  }, {
    question: "Do you guarantee first page rankings?",
    answer: "No reputable SEO agency can guarantee specific rankings, and you should be wary of anyone who does. Google's algorithm is complex and constantly changing, making guarantees impossible and unethical. However, what we do guarantee is transparent reporting, strategic implementation based on proven best practices, continuous optimization and adaptation, and a focus on results that matter (traffic, conversions, revenue). Our 95% client retention rate and $574M+ in client revenue speak louder than any ranking guarantee. We earn your business by delivering measurable results month after month, not by making promises we can't ethically keep."
  }, {
    question: "What is the difference between SEO and SEM?",
    answer: "SEO (Search Engine Optimization) focuses on earning organic (unpaid) visibility through optimizing your website, creating quality content, and building authority. Results build over time but create long-term, sustainable traffic. SEM (Search Engine Marketing) includes both SEO and paid search advertising (Google Ads). Paid search provides immediate visibility but stops when you stop paying. SEO builds compounding returns—traffic grows over time without ongoing ad spend. For most businesses, we recommend a balanced approach: paid search for immediate results while SEO builds long-term assets. However, if you're looking for the highest ROI long-term, SEO is the clear winner."
  }, {
    question: "Can SEO help my Perth small business compete with larger companies?",
    answer: "Absolutely. SEO is one of the few marketing channels where small Perth businesses can compete with (and beat) larger competitors. Large companies often have bloated websites with technical issues, generic content, and poor local optimization. Small businesses can win by focusing on local SEO (dominating \"Perth\" and \"near me\" searches), niche targeting (ranking for specific, high-intent keywords instead of broad terms), creating personalized, high-quality content, and building genuine local citations and reviews. Our small business SEO Perth strategies are designed to find competitive gaps where you can outrank larger players and capture qualified local traffic."
  }, {
    question: "How do algorithm updates affect my rankings?",
    answer: "Google releases thousands of algorithm updates annually, with major updates several times a year. These can impact rankings positively or negatively depending on your SEO foundation. Sites with quality content, strong technical foundations, and natural backlink profiles typically benefit from updates. Sites using outdated tactics (keyword stuffing, low-quality links, thin content) often get penalized. Our approach focuses on building sustainable SEO assets that align with Google's quality guidelines, meaning our clients typically see improvements during major updates while competitors panic. We monitor every algorithm change and proactively adapt strategies to keep you ahead."
  }, {
    question: "Do you offer Perth search engine optimisation for e-commerce websites?",
    answer: "Yes, our Perth search engine optimisation services specialize in e-commerce SEO strategies that drive sales, not just traffic. E-commerce SEO requires unique approaches: product page optimization (titles, descriptions, images, schema markup), category page structure and internal linking, technical SEO for large product catalogs, content marketing for commercial keywords, and conversion rate optimization to maximize sales from organic traffic. We've helped e-commerce businesses across Australia increase organic revenue by 200-500% through strategic SEO. Whether you're on Shopify, WooCommerce, or custom platforms, we have the expertise to scale your organic sales."
  }];
  return <>
      <Helmet>
        <title>Best SEO Company Perth | SEO Services Perth | Odin Digital</title>
        <meta name="description" content="Perth's top SEO company. $574M+ in client revenue. Expert SEO services Perth businesses trust. Local SEO, technical SEO, content & link building. No lock-in contracts." />
        <meta name="keywords" content="seo perth, seo company perth, seo services perth, perth seo agency, local seo perth" />
        <link rel="canonical" href="https://odindigital.com.au/seo-perth" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <SideTab />

        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 pt-24 pb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/services">Services</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/services/seo">SEO</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Perth</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-br from-white via-muted/30 to-muted/20">
          {/* Animated background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse" />
          </div>

          {/* Floating circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-32 right-20 w-32 h-32 border-2 border-primary/20 rounded-full animate-float" />
            <div className="absolute bottom-40 left-16 w-24 h-24 border-2 border-accent/20 rounded-full animate-float-delayed" />
            <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/20 rounded-full animate-pulse" />
            <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-accent/20 rounded-full animate-float" />
          </div>

          {/* Geometric shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-24 left-1/4 w-40 h-40 border border-primary/10 rotate-45 animate-float-delayed" />
            <div className="absolute bottom-32 right-1/3 w-32 h-32 border border-accent/10 rotate-12 animate-float" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight">
                Stop Paying for SEO That Doesn't Deliver Results
              </h1>
              <h2 className="text-2xl md:text-3xl text-foreground/80 mb-8 font-bold">
                Partner with Perth's Leading SEO Experts and Dominate Local Search
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                You're tired of SEO agencies that promise page 1 rankings but leave you buried on page 10. You're sick of paying thousands for "SEO services" that deliver nothing but confusing reports and empty promises. You want results—real, measurable business growth. That's exactly what we deliver.
              </p>
              <Button variant="cta" size="xl" asChild className="mb-4 w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8">
                <Link to="/contact">Get Your FREE SEO Audit →</Link>
              </Button>
              <p className="text-sm text-muted-foreground/70">
                No credit card required • See what's holding you back in 48 hours
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {metrics.map((metric, index) => <div key={index} className="animate-fade-in" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-2">
                    {metric.number}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    {metric.label}
                  </div>
                </div>)}
            </div>
            <p className="text-center mt-8 text-muted-foreground max-w-3xl mx-auto">
              These aren't vanity metrics. This is real revenue for real businesses across Australia.
            </p>
          </div>
        </section>

        {/* Why Choose Us - Pain Points */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Why Perth Businesses Choose Odin Digital
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {painPoints.map((point, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2">
                  <CardHeader>
                    <div className="mb-4">{point.icon}</div>
                    <CardTitle className="text-2xl mb-4">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                  </CardContent>
                </Card>)}
            </div>
            <div className="text-center mt-12">
              <Button variant="cta" size="xl" asChild className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8">
                <Link to="/contact">Book Your Free SEO Strategy Call →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Real Results for Real Businesses
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => <Card key={index} className="border-l-4 border-l-primary bg-muted/30">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2">{testimonial.company}</CardTitle>
                    <CardDescription className="text-xl font-bold text-primary">
                      {testimonial.result}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p>{testimonial.title}</p>
                      <p>{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
            <div className="text-center mt-12">
              <Button variant="cta" size="lg" asChild className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8">
                <Link to="/contact">See More Success Stories →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Our Perth SEO Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive SEO solutions designed to drive rankings, traffic, and revenue
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-3xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-primary">
                      {service.tagline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      <p className="text-muted-foreground leading-relaxed">{service.description2}</p>
                      <p className="text-sm border-l-4 border-primary pl-4 py-2 bg-muted/50">
                        <span className="font-semibold">Perfect for: </span>
                        <span className="text-muted-foreground">{service.perfectFor}</span>
                      </p>
                    </div>
                    <Button variant="cta" className="w-full text-sm sm:text-base px-4 sm:px-6" asChild>
                      <Link to="/contact">{service.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                What Sets Us Apart
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentiators.map((diff, index) => <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2">
                  <CardHeader>
                    <div className="flex justify-center mb-4">{diff.icon}</div>
                    <CardTitle className="text-xl mb-4">{diff.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{diff.description}</p>
                  </CardContent>
                </Card>)}
            </div>
            <div className="text-center mt-12">
              <Button variant="cta" size="xl" asChild className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8">
                <Link to="/contact">Claim Your Free SEO Strategy Session →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Our Proven SEO Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A clear, strategic path to dominating search results
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => <div key={index} className="relative">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-black mb-4">
                      {step.number}
                    </div>
                    <div className="flex justify-center mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/30" />}
                </div>)}
            </div>
            <div className="text-center mt-12">
              <Button variant="cta" size="xl" asChild className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8">
                <Link to="/contact">Start Ranking Higher Today →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                What Makes Odin Digital Different
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {uniqueValue.map((item, index) => <div key={index} className={`${index % 2 === 0 ? 'bg-muted/30' : 'bg-white'} p-8 rounded-lg border-2`}>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 gradient-hero text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-8 text-slate-950 md:text-6xl">
              Ready to Stop Wasting Money on SEO That Doesn't Work?
            </h2>
            <p className="text-xl md:text-2xl mb-4 leading-relaxed opacity-90 text-slate-950">
              You've read this far because you're serious about growing your business through SEO. You're tired of agencies that overpromise and underdeliver. You want a partner who's as invested in your success as you are.
            </p>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90 text-slate-950">
              Here's what happens next: Book a free strategy session with our team. We'll audit your current SEO, identify opportunities, and show you exactly how we'd help you dominate search results in Perth. No obligation. No sales pitch. Just honest, actionable advice.
            </p>
            <Button variant="secondary" size="xl" asChild className="mb-4 w-full sm:w-auto text-sm sm:text-base md:text-lg h-14 sm:h-16 px-6 sm:px-12 hover:scale-105 transition-transform">
              <Link to="/contact">Book Your Free SEO Strategy Call →</Link>
            </Button>
            <p className="text-sm opacity-90 mt-6">
              Limited strategy sessions available this month • No obligation • No sales pitch • Just honest advice
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our Perth SEO services
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white border-2 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary text-lg py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">Still have questions?</p>
              <Button variant="cta" size="lg" asChild className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8">
                <Link to="/contact">Book a Free Call →</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};
export default PerthSEO;