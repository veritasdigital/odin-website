import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import heroImage from "@/assets/blog/digital-marketing-strategy-2026.jpg";
import coreComponentsImage from "@/assets/blog/core-components-strategy.jpg";
import goalsKpisImage from "@/assets/blog/goals-kpis-dashboard.jpg";
import budgetAllocationImage from "@/assets/blog/budget-allocation.jpg";
import channelSynergyImage from "@/assets/blog/channel-synergy.jpg";

const DigitalMarketingStrategy2026 = () => {
  const { openForm } = useMarketingForm();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Putting It All Together: How to Build a Cohesive Digital Marketing Strategy for 2026 | Odin Digital</title>
        <meta name="description" content="Learn about putting it all together: how to build a cohesive digital marketing strategy for 2026 with this comprehensive guide from Odin Digital, Australia's leading digital marketing agency." />
        <meta name="keywords" content="digital marketing strategy 2026, cohesive marketing plan, marketing goals and KPIs, marketing budget allocation, integrated marketing strategy" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Putting It All Together: How to Build a Cohesive Digital Marketing Strategy for 2026 | Odin Digital" />
        <meta property="og:description" content="Learn about putting it all together: how to build a cohesive digital marketing strategy for 2026 with this comprehensive guide from Odin Digital, Australia's leading digital marketing agency." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://odindigital.com.au/blog/how-to-build-a-cohesive-digital-marketing-strategy-for-2026" />
        <meta property="og:image" content="https://odindigital.com.au/images/blog/how-to-build-a-cohesive-digital-marketing-strategy-for-2026-featured.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Putting It All Together: How to Build a Cohesive Digital Marketing Strategy for 2026 | Odin Digital" />
        <meta name="twitter:description" content="Learn about putting it all together: how to build a cohesive digital marketing strategy for 2026 with this comprehensive guide from Odin Digital, Australia's leading digital marketing agency." />
        <meta name="twitter:image" content="https://odindigital.com.au/images/blog/how-to-build-a-cohesive-digital-marketing-strategy-for-2026-featured.jpg" />
        
        {/* Schema Markup - BlogPosting */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://odindigital.com.au/blog/how-to-build-a-cohesive-digital-marketing-strategy-for-2026"
            },
            "headline": "Putting It All Together: How to Build a Cohesive Digital Marketing Strategy for 2026",
            "description": "Learn about putting it all together: how to build a cohesive digital marketing strategy for 2026 with this comprehensive guide from Odin Digital, Australia's leading digital marketing agency.",
            "image": "https://odindigital.com.au/images/blog/how-to-build-a-cohesive-digital-marketing-strategy-for-2026-featured.jpg",
            "author": {
              "@type": "Organization",
              "name": "Odin Digital Team",
              "url": "https://odindigital.com.au/about"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Odin Digital",
              "logo": {
                "@type": "ImageObject",
                "url": "https://odindigital.com.au/logo.png"
              }
            },
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-15"
          })}
        </script>

        {/* Schema Markup - BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
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
                "name": "Blog",
                "item": "https://odindigital.com.au/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Putting It All Together: How to Build a Cohesive Digital Marketing Strategy for 2026"
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />
      <MarketingFormModal />
      <SideTab />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden gradient-hero">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">Putting It All Together: How to Build a Cohesive Digital Marketing Strategy for 2026</span>
          </nav>

          {/* Category Badge */}
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Digital Marketing Strategy
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-black text-foreground mb-8 leading-tight">
            Putting It All Together: How to Build a Cohesive Digital Marketing Strategy for 2026
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-12">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>Odin Digital Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>15 January 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>15 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={heroImage} 
              alt="Digital Marketing Strategy 2026 Planning" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Table of Contents */}
          <div className="bg-muted/50 rounded-xl p-8 mb-12 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Table of Contents</h2>
            <nav className="space-y-3">
              <a href="#introduction" className="block text-primary hover:underline font-medium">
                Introduction: From Scattered Tactics to a Unified Strategy
              </a>
              <a href="#core-components" className="block text-primary hover:underline font-medium">
                The 5 Core Components of a Modern Digital Marketing Strategy
              </a>
              <a href="#goals-kpis" className="block text-primary hover:underline font-medium">
                How to Set Realistic Goals and KPIs for Your Marketing
              </a>
              <a href="#budgeting" className="block text-primary hover:underline font-medium">
                Budgeting for Growth: How to Allocate Your Marketing Spend
              </a>
              <a href="#synergy" className="block text-primary hover:underline font-medium">
                The Power of Synergy: How Each Channel Works Together
              </a>
              <a href="#conclusion" className="block text-primary hover:underline font-medium">
                Conclusion: Your Roadmap for Sustainable Digital Growth in 2026
              </a>
            </nav>
          </div>

          {/* Introduction */}
          <section id="introduction" className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Introduction: From Scattered Tactics to a Unified Strategy
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              For the small business owner in Australia, the digital landscape can often feel like a vast, untamed wilderness. You might be posting on social media one day, tinkering with your Google Ads the next, and occasionally sending out an email newsletter. These are all valid <strong>digital marketing tactics</strong>, but when they operate in isolation—scattered and uncoordinated—they rarely deliver the sustainable, predictable growth your business needs.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              The truth is, in 2026, the era of 'set and forget' marketing or relying on a single, silver-bullet channel is well and truly over. Consumers are savvier, competition is fiercer, and the algorithms are constantly evolving. What worked last year might be obsolete tomorrow. To thrive, not just survive, small businesses need to move beyond scattered tactics and embrace a truly <strong>cohesive marketing plan</strong>.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              A cohesive, or <strong>integrated marketing strategy</strong>, is the blueprint that aligns all your digital efforts towards a single, overarching business objective. It ensures that your <Link to="/services/seo" className="text-primary hover:underline">search engine optimisation (SEO)</Link> efforts support your content marketing, your social media amplifies your email campaigns, and every dollar of your <strong>marketing budget allocation</strong> is working in harmony. This article is your comprehensive guide to building a robust <strong>digital marketing strategy 2026</strong>—a roadmap designed specifically for the Australian small business owner looking for sustainable growth. We will explore how to transition from a reactive marketing approach to a proactive, data-driven system that delivers consistent results, even as the digital landscape continues to shift.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We'll break down the core components, show you how to set meaningful <strong>marketing goals and KPIs</strong>, and detail how to budget effectively. By the end, you'll have the knowledge to transform your marketing from a series of random acts into a powerful, unified engine for success.
            </p>
          </section>

          {/* Core Components */}
          <section id="core-components" className="prose prose-lg max-w-none mb-16">
            {/* Section Header with Visual Elements */}
            <div className="relative mb-12 decorative-circles">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 relative z-10">
                The 5 Core Components of a Modern Digital Marketing Strategy
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-8 relative z-10">
                A modern, cohesive digital marketing strategy is built on five foundational pillars. Think of these as the essential departments of your marketing engine. Ignoring any one of them will create a weak link that compromises the entire structure.
              </p>

              {/* Feature Image */}
              <div className="rounded-2xl overflow-hidden shadow-card mb-8 relative z-10">
                <img 
                  src={coreComponentsImage} 
                  alt="Marketing team collaborating on the 5 core components of digital marketing strategy" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
              1. Audience and Customer Journey Mapping
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Before you spend a single cent or write a single word, you must know <em>who</em> you are talking to and <em>how</em> they buy.
            </p>

            <ul className="space-y-4 mb-6">
              <li className="text-muted-foreground leading-relaxed">
                <strong>Define Your Ideal Customer (Buyer Persona):</strong> Go beyond basic demographics. What are their pain points? What are their aspirations? Where do they spend their time online? Crucially, what are their <em>information sources</em>? Are they on LinkedIn, Instagram, or reading industry newsletters? For example, a small business owner selling artisanal coffee beans might define their persona as "Sarah, a 35-year-old Melbourne café owner who values sustainability and is time-poor." Understanding these nuances allows you to tailor your messaging and choose the right channels, ensuring your marketing spend is not wasted on irrelevant audiences. This deep dive into your customer's psyche is the first, and most critical, step in building a truly <strong>cohesive marketing plan</strong>.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong>Map the Customer Journey:</strong> This involves documenting the steps a potential customer takes from first awareness of your brand to becoming a loyal advocate.
                <ul className="mt-3 space-y-2 ml-6">
                  <li><strong>Awareness:</strong> They realise they have a problem (e.g., "I need a new website").</li>
                  <li><strong>Consideration:</strong> They research solutions (e.g., searching "best web designers Sydney").</li>
                  <li><strong>Decision:</strong> They choose a provider (e.g., contacting your business).</li>
                  <li><strong>Retention:</strong> They become a repeat customer. At this stage, your focus shifts to fostering loyalty and encouraging referrals, often through exclusive email offers or community building.</li>
                </ul>
                A cohesive strategy ensures you have the right content and message for <em>each</em> stage.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
              2. Content and Value Proposition
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Content is the fuel of your digital marketing engine. It's how you attract, engage, and convert your audience.
            </p>

            <ul className="space-y-4 mb-6">
              <li className="text-muted-foreground leading-relaxed">
                <strong>The Value Proposition:</strong> This is the single, clearest reason why a customer should buy from you and not your competitor. It must be woven into all your content. For a small accounting firm, the value proposition might be: "We make tax compliance simple and stress-free for Australian sole traders."
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong>Content Strategy:</strong> This is the plan for what content you will create, when, and where. It should directly address the pain points identified in your customer journey map. This includes blog posts, videos, case studies, social media snippets, and downloadable guides. Focus on quality over quantity.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
              3. Owned Digital Assets (Website and Email)
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              These are the channels you fully control, making them the most valuable assets in your strategy.
            </p>

            <ul className="space-y-4 mb-6">
              <li className="text-muted-foreground leading-relaxed">
                <strong>The Website (Your Digital Shopfront):</strong> Your website must be fast, mobile-friendly, and designed for conversion. It is the central hub where all other marketing channels drive traffic. Ensure your contact forms work, your site loads quickly (a crucial <Link to="/services/seo" className="text-primary hover:underline">SEO</Link> factor), and the user experience is seamless.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong>Email Marketing:</strong> Email remains one of the highest return-on-investment (ROI) channels. It allows for direct, personalised communication. Use it for nurturing leads, announcing new products, and building customer loyalty. Your <Link to="/services/email-marketing" className="text-primary hover:underline">email list</Link> is a proprietary asset that no social media algorithm can take away.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
              4. Traffic Generation (Paid and Organic)
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              This component focuses on getting qualified eyes onto your owned assets. It is typically split into two main areas:
            </p>

            <ul className="space-y-4 mb-6">
              <li className="text-muted-foreground leading-relaxed">
                <strong>Organic Traffic (SEO and Social):</strong> This is traffic that comes to you naturally, without paying for the click. It requires a long-term investment in high-quality content and technical SEO to rank well in search engines. Consistent, valuable social media posting also falls into this category.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong>Paid Traffic (PPC and Paid Social):</strong> This involves paying for visibility, such as <Link to="/services/google-ads" className="text-primary hover:underline">Google Ads</Link> (PPC - Pay-Per-Click) or boosted posts on <Link to="/services/facebook-advertising" className="text-primary hover:underline">Facebook/Instagram</Link>. Paid channels offer immediate visibility and are excellent for testing new offers or targeting specific, high-intent audiences.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
              5. Measurement and Optimisation
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you can't measure it, you can't manage it. This component is the feedback loop that ensures your strategy is constantly improving.
            </p>

            <ul className="space-y-4 mb-6">
              <li className="text-muted-foreground leading-relaxed">
                <strong>Analytics Setup:</strong> You must have robust tracking in place (e.g., Google Analytics 4) to monitor website traffic, conversion rates, and user behaviour.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong>Regular Reporting:</strong> Dedicate time each month to review your data. Which channels are driving the most leads? Which content pieces are performing best?
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong>A/B Testing:</strong> Continuously test different headlines, calls-to-action (CTAs), and ad copy to find what resonates best with your audience. Optimisation is not a one-off task; it is a continuous process of refinement.
              </li>
            </ul>
          </section>

          {/* Mid-Post CTA */}
          <div className="my-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to implement these strategies for your business?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our team of <Link to="/services/marketing-consulting" className="text-primary hover:underline font-semibold">digital marketing experts</Link> can help you build a cohesive strategy that delivers real results. Get your free marketing strategy session today.
            </p>
            <Button variant="cta" size="lg" onClick={openForm}>
              Get Your Free Strategy Session
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Goals and KPIs */}
          <section id="goals-kpis" className="prose prose-lg max-w-none mb-16">
            {/* Section Header with Visual Elements */}
            <div className="relative mb-12 decorative-circles-alt">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-1/4 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 relative z-10">
                How to Set Realistic Goals and KPIs for Your Marketing
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-8 relative z-10">
                A <strong>cohesive marketing plan</strong> needs a destination. Without clear, measurable goals, you can't determine if your strategy is working. For small business owners, the best framework for setting goals is the <strong>SMART</strong> framework, followed by defining the key performance indicators (<strong>KPIs</strong>) that track your progress.
              </p>

              {/* Feature Image */}
              <div className="rounded-2xl overflow-hidden shadow-card mb-8 relative z-10">
                <img 
                  src={goalsKpisImage} 
                  alt="Marketing analytics dashboard showing KPIs and performance metrics" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
              The SMART Goal Framework
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your overarching marketing goal should be:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground leading-relaxed">
                <strong>S</strong>pecific: Clearly defined, not vague. (e.g., "Increase website traffic" is vague; "Increase organic website traffic by 20%" is specific).
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong>M</strong>easurable: Quantifiable so you can track progress.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong>A</strong>chievable: Realistic given your resources and budget.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong>R</strong>elevant: Aligned with your overall business objectives (e.g., increasing sales).
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong>T</strong>ime-bound: Has a clear deadline (e.g., "by the end of Q4 2026").
              </li>
            </ul>

            <div className="bg-accent/10 border-l-4 border-primary p-6 rounded-r-lg mb-6">
              <p className="text-foreground font-semibold mb-2">Example SMART Goal for a Small Business:</p>
              <p className="text-muted-foreground leading-relaxed">
                "Increase qualified leads generated through the website contact form by 15% within the next six months (January 1, 2026, to June 30, 2026)."
              </p>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Defining Key Performance Indicators (KPIs)
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              KPIs are the metrics you track to see if you are on track to hit your SMART goal. They are the pulse of your <strong>digital marketing strategy 2026</strong>.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border p-4 text-left font-bold text-foreground">Marketing Goal</th>
                    <th className="border border-border p-4 text-left font-bold text-foreground">Example KPIs to Track</th>
                    <th className="border border-border p-4 text-left font-bold text-foreground">Why it Matters for Small Business</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-4 text-muted-foreground"><strong>Increase Brand Awareness</strong></td>
                    <td className="border border-border p-4 text-muted-foreground">Website Traffic (Unique Visitors), Social Media Impressions, Mentions/Shares, Search Engine Ranking for non-branded keywords.</td>
                    <td className="border border-border p-4 text-muted-foreground">Ensures your business is top-of-mind when a potential customer is ready to buy.</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4 text-muted-foreground"><strong>Generate Leads</strong></td>
                    <td className="border border-border p-4 text-muted-foreground">Conversion Rate (Website Forms), Cost Per Lead (CPL), Email Sign-up Rate, Lead Quality Score.</td>
                    <td className="border border-border p-4 text-muted-foreground">Directly measures the effectiveness of your content and traffic generation efforts.</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4 text-muted-foreground"><strong>Increase Sales/Revenue</strong></td>
                    <td className="border border-border p-4 text-muted-foreground">Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), Marketing-Originated Revenue, Average Order Value (AOV).</td>
                    <td className="border border-border p-4 text-muted-foreground">The ultimate measure of marketing success—how much revenue is directly attributable to your efforts.</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4 text-muted-foreground"><strong>Improve Customer Retention</strong></td>
                    <td className="border border-border p-4 text-muted-foreground">Customer Lifetime Value (CLV), Repeat Purchase Rate, Email Open/Click-Through Rates for loyalty campaigns.</td>
                    <td className="border border-border p-4 text-muted-foreground">It is significantly cheaper to retain an existing customer than to acquire a new one.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              When setting your <strong>marketing goals and KPIs</strong>, focus on <strong>lagging indicators</strong> (the final result, like sales) and <strong>leading indicators</strong> (the actions that predict the result, like website traffic or form submissions). By tracking leading indicators, you can adjust your <strong>cohesive marketing plan</strong> <em>before</em> it's too late.
            </p>
          </section>

          {/* Budgeting */}
          <section id="budgeting" className="prose prose-lg max-w-none mb-16">
            {/* Section Header with Visual Elements */}
            <div className="relative mb-12 decorative-circles">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-16 right-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-12 left-1/4 w-52 h-52 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 relative z-10">
                Budgeting for Growth: How to Allocate Your Marketing Spend
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-8 relative z-10">
                For the small business owner, every dollar counts. Your <strong>marketing budget allocation</strong> must be strategic, not speculative. A common mistake is to spend all the budget on the most visible channel (like paid ads) without investing in the foundational assets (like the website and content).
              </p>

              {/* Feature Image */}
              <div className="rounded-2xl overflow-hidden shadow-card mb-8 relative z-10">
                <img 
                  src={budgetAllocationImage} 
                  alt="Marketing budget allocation planning with financial charts and pie graphs" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
              The 70/20/10 Rule for Marketing Budgeting: A Framework for Strategic Allocation
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              A useful framework for allocating your budget is the 70/20/10 rule, which balances proven strategies with innovation:
            </p>

            <ol className="space-y-6 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground text-lg">70% - Core & Proven:</strong> Allocate the majority of your budget to the channels and tactics that have already proven to deliver the best ROI for your business. This is your foundation. This portion is dedicated to maintaining and optimising your most reliable growth drivers. It's about consistency and ensuring your existing systems—like your <Link to="/services/website-design" className="text-primary hover:underline">website</Link>, core SEO, and successful email sequences—are running at peak performance. This is where you invest in the <em>maintenance</em> of your success.
                <ul className="mt-3 ml-6 space-y-2">
                  <li><em>Example:</em> If email marketing and local SEO have consistently delivered 80% of your leads, they get the bulk of the funding. This includes maintenance of your website, core content creation, and established PPC campaigns.</li>
                </ul>
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground text-lg">20% - Emerging & Growth:</strong> Dedicate a portion to scaling up successful tactics or exploring new, high-potential channels. This is the budget for calculated expansion. If a new social media platform is showing promise, or if a specific PPC campaign has a high-quality score but needs more budget to scale, this is where that funding comes from. The goal here is to identify the next '70%' channel.
                <ul className="mt-3 ml-6 space-y-2">
                  <li><em>Example:</em> If you see a competitor succeeding on TikTok, or if a new Google feature (like AI Overviews) presents an opportunity, this is where you fund the pilot project. This is about taking calculated risks to find the next '70%'.</li>
                </ul>
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground text-lg">10% - Innovation & Experimentation:</strong> This small, dedicated pot is for pure experimentation with high-risk, high-reward ideas. This is your 'R&D' budget. It's okay if these experiments fail; the value is in the learning. Perhaps you test a new AI-driven marketing tool, a niche podcast sponsorship, or a completely different content format. This ensures your <strong>digital marketing strategy 2026</strong> remains future-proof and adaptable.
                <ul className="mt-3 ml-6 space-y-2">
                  <li><em>Example:</em> Testing a completely new ad format, investing in a new marketing technology, or creating a piece of content that is outside your usual style. The goal is learning, not immediate ROI.</li>
                </ul>
              </li>
            </ol>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
              Strategic Allocation by Channel
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              While the 70/20/10 rule guides the <em>type</em> of spend, you also need to consider the <em>channel</em> allocation.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border p-4 text-left font-bold text-foreground">Channel</th>
                    <th className="border border-border p-4 text-left font-bold text-foreground">Investment Type</th>
                    <th className="border border-border p-4 text-left font-bold text-foreground">Small Business Focus for 2026</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-4 text-muted-foreground"><strong>Owned Assets (Website/Email)</strong></td>
                    <td className="border border-border p-4 text-muted-foreground">Fixed Cost (Hosting, Software)</td>
                    <td className="border border-border p-4 text-muted-foreground"><strong>MUST BE 1st PRIORITY.</strong> Ensure a fast, secure, and mobile-optimised website. Invest in a quality email platform.</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4 text-muted-foreground"><strong>Content Marketing (SEO)</strong></td>
                    <td className="border border-border p-4 text-muted-foreground">Time/Labour Cost (Writers, Editors)</td>
                    <td className="border border-border p-4 text-muted-foreground"><strong>Long-Term ROI.</strong> Focus on high-quality, in-depth content that answers specific customer questions and targets your digital marketing strategy 2026 keywords.</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4 text-muted-foreground"><strong>Paid Advertising (PPC/Social)</strong></td>
                    <td className="border border-border p-4 text-muted-foreground">Variable Cost (Ad Spend)</td>
                    <td className="border border-border p-4 text-muted-foreground"><strong>Short-Term Results.</strong> Use to drive immediate traffic, test offers, and target high-intent customers. Crucially, track your Cost Per Acquisition (CPA).</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4 text-muted-foreground"><strong>Social Media</strong></td>
                    <td className="border border-border p-4 text-muted-foreground">Time/Labour Cost (Community Management)</td>
                    <td className="border border-border p-4 text-muted-foreground"><strong>Engagement & Awareness.</strong> Focus on 1-2 platforms where your target audience is most active. Don't try to be everywhere.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-accent/10 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-foreground font-semibold mb-2">Key Takeaway:</p>
              <p className="text-muted-foreground leading-relaxed">
                Never view marketing as an expense; view it as an investment. The goal of your <strong>marketing budget allocation</strong> is to reduce your Customer Acquisition Cost (CAC) and increase your Customer Lifetime Value (CLV).
              </p>
            </div>
          </section>

          {/* Synergy */}
          <section id="synergy" className="prose prose-lg max-w-none mb-16">
            {/* Section Header with Visual Elements */}
            <div className="relative mb-12 decorative-circles-alt">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 -left-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-8 right-1/4 w-56 h-56 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 relative z-10">
                The Power of Synergy: How Each Channel Works Together
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                The 'cohesive' part of your <strong>cohesive marketing plan</strong> is the synergy—the idea that the combined effect of your channels is greater than the sum of their individual parts. This is the essence of an <strong>integrated marketing strategy</strong>.
              </p>

              {/* Feature Image */}
              <div className="rounded-2xl overflow-hidden shadow-card mb-8 relative z-10">
                <img 
                  src={channelSynergyImage} 
                  alt="Digital marketing channels working together in synergy - SEO, social media, email, and paid ads" 
                  className="w-full h-auto"
                />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                Here is how the major channels should interlock:
              </p>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
              1. SEO and Content Marketing: The Engine Room
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              These two are inseparable. <Link to="/services/seo" className="text-primary hover:underline">SEO (Search Engine Optimisation)</Link> is the process of making your content discoverable, and content is what gives SEO something to optimise.
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <p className="text-foreground font-semibold mb-3">The Workflow:</p>
              <ol className="space-y-2 ml-6">
                <li className="text-muted-foreground"><strong>Keyword Research:</strong> Identify the terms your target audience is searching for (e.g., "best small business accounting software Australia").</li>
                <li className="text-muted-foreground"><strong>Content Creation:</strong> Write a comprehensive, high-quality blog post or guide targeting that keyword.</li>
                <li className="text-muted-foreground"><strong>On-Page SEO:</strong> Optimise the content with clear headings, internal links, and meta descriptions.</li>
                <li className="text-muted-foreground"><strong>Promotion:</strong> Use your social media and email channels to promote the new content, which drives traffic and signals to search engines that the content is valuable.</li>
              </ol>
            </div>

            <div className="bg-accent/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
              <p className="text-foreground font-semibold mb-2">Synergy in Action:</p>
              <p className="text-muted-foreground leading-relaxed">
                A high-ranking blog post (SEO success) drives organic traffic to your website. This traffic is then offered a lead magnet (e.g., a free e-book) in exchange for their email address (Content/Email success).
              </p>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
              2. Paid Ads (PPC) and Retargeting: The Conversion Accelerator
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Paid advertising is not just about acquiring new customers; it's a powerful tool for accelerating conversions from people who already know you.
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <p className="text-foreground font-semibold mb-3">The Workflow:</p>
              <ol className="space-y-2 ml-6">
                <li className="text-muted-foreground"><strong>Initial Awareness:</strong> Run broad Google Search Ads or Facebook Ads to introduce your brand to a new, cold audience.</li>
                <li className="text-muted-foreground"><strong>Website Visit:</strong> A user clicks the ad and lands on your website. They browse but don't buy.</li>
                <li className="text-muted-foreground"><strong>Retargeting:</strong> You use a small, highly effective retargeting ad campaign (e.g., on <Link to="/services/facebook-advertising" className="text-primary hover:underline">Facebook</Link> or a display network) to show that user a specific ad for the product they viewed, often with a small discount.</li>
              </ol>
            </div>

            <div className="bg-accent/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
              <p className="text-foreground font-semibold mb-2">Synergy in Action:</p>
              <p className="text-muted-foreground leading-relaxed">
                The initial paid ad is expensive, but the retargeting ad is cheap and highly effective because the user is already familiar with your brand. This <strong>integrated marketing strategy</strong> dramatically lowers your overall Cost Per Acquisition (CPA).
              </p>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
              3. Social Media and Customer Service: The Feedback Loop
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Social media is often seen as a broadcast channel, but its true power lies in its ability to foster two-way communication and provide invaluable customer insights.
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <p className="text-foreground font-semibold mb-3">The Workflow:</p>
              <ol className="space-y-2 ml-6">
                <li className="text-muted-foreground"><strong>Promotion:</strong> You post a link to your latest blog post on social media.</li>
                <li className="text-muted-foreground"><strong>Engagement:</strong> A customer comments with a question or a complaint.</li>
                <li className="text-muted-foreground"><strong>Service:</strong> Your team responds quickly and professionally, resolving the issue publicly or moving it to a private channel.</li>
                <li className="text-muted-foreground"><strong>Insight:</strong> The customer service team feeds the common questions/complaints back to the content team.</li>
              </ol>
            </div>

            <div className="bg-accent/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
              <p className="text-foreground font-semibold mb-2">Synergy in Action:</p>
              <p className="text-muted-foreground leading-relaxed">
                The content team uses the customer service feedback to create new, highly relevant content (e.g., a FAQ page or a new blog post addressing the common issue). This improves SEO, reduces customer service load, and demonstrates that your business listens—a massive win for brand loyalty.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
              4. Email Marketing and Customer Lifetime Value (CLV)
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Email is the bridge between a one-time purchaser and a loyal, repeat customer.
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <p className="text-foreground font-semibold mb-3">The Workflow:</p>
              <ol className="space-y-2 ml-6">
                <li className="text-muted-foreground"><strong>Acquisition:</strong> A new customer makes a purchase.</li>
                <li className="text-muted-foreground"><strong>Nurturing:</strong> They are automatically entered into an email sequence that provides value, such as tips on using the product, related content, or exclusive early access to sales.</li>
                <li className="text-muted-foreground"><strong>Retention:</strong> The emails encourage repeat purchases and referrals.</li>
              </ol>
            </div>

            <div className="bg-accent/10 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-foreground font-semibold mb-2">Synergy in Action:</p>
              <p className="text-muted-foreground leading-relaxed">
                Your <Link to="/services/email-marketing" className="text-primary hover:underline">email list</Link> is the perfect, low-cost channel to promote your new content, driving traffic back to your website and keeping your brand top-of-mind. This consistent engagement is the key to increasing CLV, which is the ultimate goal of any <strong>digital marketing strategy 2026</strong>.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Conclusion: Your Roadmap for Sustainable Digital Growth in 2026
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Building a <strong>cohesive marketing plan</strong> is not about doing more; it's about doing what you do with greater intention and alignment. For the small business owner, the goal is to stop feeling overwhelmed by the sheer number of digital channels and start seeing them as a unified team working towards a common goal.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The key takeaways for your <strong>digital marketing strategy 2026</strong> are:
            </p>

            <ol className="space-y-4 mb-6">
              <li className="text-muted-foreground leading-relaxed">
                <strong>Commit to the Long Game:</strong> Sustainable growth is a marathon, not a sprint. While paid advertising offers quick wins, true business resilience comes from investing in your owned assets and organic channels (SEO and content).
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong>Embrace Data as Your Compass:</strong> Move beyond guesswork. Use your <strong>marketing goals and KPIs</strong> to guide every decision, ensuring your <strong>marketing budget allocation</strong> is always directed towards the highest-impact activities.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong>Think Cohesion, Not Channels:</strong> The true power of your strategy lies in the synergy between your channels. Ensure your SEO, content, social, and email efforts are all speaking the same language and reinforcing the same core message.
              </li>
            </ol>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Finally, remember that your <strong>digital marketing strategy 2026</strong> is a living document, not a static plan. The digital world is constantly changing, and your strategy must be flexible enough to adapt. Regularly review your KPIs, listen to your customers, and be prepared to pivot your tactics based on data. This commitment to continuous optimisation is what separates the businesses that merely survive from those that truly dominate their market.
            </p>

            <p className="text-muted-foreground italic">
              This article was written for Odin Digital and is intended as general advice for small business owners in the Australian market.
            </p>
          </section>

          {/* Final CTA */}
          <div className="my-16 bg-primary rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to Take Your Digital Marketing to the Next Level?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation marketing strategy session with our experts.
            </p>
            <Link to="/contact">
              <Button variant="cta" size="xl" className="bg-white text-primary hover:bg-white/90">
                Get Your Free Strategy Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Author Bio */}
          <div className="bg-muted/50 rounded-xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">About the Author</h3>
            <p className="text-muted-foreground leading-relaxed">
              The Odin Digital Team consists of experienced digital marketing strategists, SEO specialists, and content creators dedicated to helping Australian businesses achieve exponential growth through data-driven strategies.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default DigitalMarketingStrategy2026;