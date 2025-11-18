import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, TrendingUp, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import croHero from "@/assets/blog/cro-conversion-optimization.jpg";
import odinTeamPhoto from "@/assets/odin-team-professional.jpg";
import { blogArticles } from "@/utils/blogSchemaData";

const ConversionRateOptimisation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://odindigital.com.au/blog/conversion-rate-optimisation-cro-secret-to-getting-more-from-existing-traffic"
    },
    "headline": "Conversion Rate Optimisation (CRO): The Secret to Getting More From Your Existing Traffic",
    "description": "Learn about conversion rate optimisation (cro): the secret to getting more from your existing traffic with this comprehensive guide from Odin Digital, Australia's leading digital marketing agency.",
    "image": "https://odindigital.com.au/images/blog/conversion-rate-optimisation-cro-secret-to-getting-more-from-existing-traffic-featured.jpg",
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
    "datePublished": "2025-09-22",
    "dateModified": "2025-09-22"
  };

  const breadcrumbSchema = {
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
        "name": "Conversion Rate Optimisation (CRO): The Secret to Getting More From Your Existing Traffic"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Conversion Rate Optimisation (CRO): The Secret to Getting More From Your Existing Traffic | Odin Digital</title>
        <meta name="description" content="Learn about conversion rate optimisation (cro): the secret to getting more from your existing traffic with this comprehensive guide from Odin Digital, Australia's leading digital marketing agency." />
        <script type="application/ld+json">
          {JSON.stringify(blogPostingSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section with Floating Circles */}
        <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-white via-muted/30 to-muted/20">
          {/* Animated Background Blobs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }}></div>

          {/* Floating Particles */}
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute top-64 right-1/3 w-3 h-3 bg-accent/40 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-48 left-1/2 w-2 h-2 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>

          <div className="container relative z-10">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground">Conversion Rate Optimisation (CRO)</span>
            </nav>

            {/* Back to Blog */}
            <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <article className="max-w-4xl mx-auto">
              <header className="mb-12 animate-fade-in">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">CRO</span>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>13 min read</span>
                  </div>
                  <span>•</span>
                  <time dateTime="2025-09-22">September 22, 2025</time>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  Conversion Rate Optimisation (CRO): The Secret to Getting More From Your Existing Traffic
                </h1>

                <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  By Odin Digital Team
                </p>

                <div className="relative animate-fade-in" style={{ animationDelay: "0.8s" }}>
                  {/* Gradient Ring around image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur-2xl transform scale-105 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                  
                  <img
                    src={croHero}
                    alt="Conversion Rate Optimisation dashboard showing business metrics and analytics data"
                    className="relative w-full rounded-lg shadow-2xl ring-1 ring-primary/10 hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </header>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg leading-relaxed">
                  In the fast-paced world of digital marketing, the focus is often on getting more traffic. We spend countless hours and dollars on SEO, paid advertising, and social media campaigns, all in the pursuit of a higher visitor count. But what if the secret to exponential growth wasn't about finding new customers, but about making the most of the ones you already have?
                </p>
                <p className="text-lg leading-relaxed">
                  This is where <strong>Conversion Rate Optimisation (CRO)</strong> comes in.
                </p>
                <p className="text-lg leading-relaxed">
                  Simply put, CRO is the systematic process of increasing the percentage of website visitors who take a desired action—a conversion. This action could be anything from making a purchase or filling out a lead form to signing up for a newsletter or downloading a resource. It's about understanding <em>why</em> visitors aren't converting and fixing those roadblocks.
                </p>
              </div>

              {/* Table of Contents */}
              <nav className="relative bg-gradient-to-br from-muted/40 to-muted/20 backdrop-blur-sm rounded-lg p-8 mb-12 border border-primary/10 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: "1s" }}>
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Table of Contents</h2>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => scrollToSection('roi-of-cro')}
                      className="text-primary hover:underline text-left hover:translate-x-2 transition-transform duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      The Unbeatable ROI of CRO
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('conversion-framework')}
                      className="text-primary hover:underline text-left hover:translate-x-2 transition-transform duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      A Simple Framework for Identifying Conversion Roadblocks
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('ab-tests')}
                      className="text-primary hover:underline text-left hover:translate-x-2 transition-transform duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      5 High-Impact A/B Tests You Can Run Right Now
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('psychology')}
                      className="text-primary hover:underline text-left hover:translate-x-2 transition-transform duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      The Psychology of Conversion
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('tools')}
                      className="text-primary hover:underline text-left hover:translate-x-2 transition-transform duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Tools for Tracking and Testing
                    </button>
                  </li>
                </ul>
              </nav>

              {/* Body Content */}
              <div className="prose prose-lg max-w-none space-y-12">
                {/* Section 1: ROI of CRO */}
                <section id="roi-of-cro">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-primary" />
                    The Unbeatable ROI of CRO
                  </h2>
                  <p className="text-lg leading-relaxed mb-4">
                    Why is CRO often hailed as the highest ROI marketing activity? The answer is elegantly simple: <strong>you are optimising your existing resources.</strong>
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg border border-primary/20">
                      <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        Lower Customer Acquisition Cost
                      </h3>
                      <p className="text-muted-foreground">
                        By converting more of your current traffic, you don't need to spend more on ads or SEO to generate the same number of leads or sales. This directly lowers your CAC, making your marketing budget stretch further.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-6 rounded-lg border border-secondary/20">
                      <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-secondary" />
                        Increased Revenue Without Increased Traffic
                      </h3>
                      <p className="text-muted-foreground">
                        Imagine your website currently converts at 2%. If you can lift that to 4% through CRO, you have effectively doubled your sales without spending an extra cent on driving traffic.
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 my-6">
                    <li className="text-lg leading-relaxed">
                      <strong>Deeper Customer Understanding:</strong> The CRO process provides invaluable insights into your customers' motivations, pain points, and decision-making processes.
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>Scalability:</strong> Once you establish a high-converting website, that efficiency scales with every new visitor you acquire. It's a foundational improvement that pays dividends indefinitely.
                    </li>
                  </ul>
                  <p className="text-lg leading-relaxed bg-accent/20 p-4 rounded-lg border-l-4 border-primary">
                    In a competitive digital landscape, relying solely on traffic acquisition is a race to the bottom. <strong>Conversion rate optimisation</strong> is the strategic, sustainable path to growth.
                  </p>
                </section>

                {/* Section 2: Framework */}
                <section id="conversion-framework">
                  <h2 className="text-3xl font-bold mb-6">A Simple Framework for Identifying Conversion Roadblocks on Your Website</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Before you can fix a problem, you need to know what's broken. A powerful framework to guide this process is the <strong>Conversion Trinity</strong>—a combination of three key data sources:
                  </p>

                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-muted/40 to-muted/20 p-6 rounded-lg border border-primary/10">
                      <h3 className="text-2xl font-bold mb-4 text-primary">1. The "What" (Quantitative Data)</h3>
                      <p className="text-lg leading-relaxed mb-4">
                        This is the hard data that tells you <em>what</em> is happening on your site.
                      </p>
                      <p className="text-lg leading-relaxed mb-3">
                        <strong>Tools:</strong> Google Analytics, Adobe Analytics.
                      </p>
                      <p className="text-lg leading-relaxed mb-3">
                        <strong>Focus Areas:</strong>
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-lg leading-relaxed">• <strong>Funnel Analysis:</strong> Where are users dropping off in the conversion path?</li>
                        <li className="text-lg leading-relaxed">• <strong>Page Performance:</strong> Which pages have high bounce rates or low time-on-page?</li>
                        <li className="text-lg leading-relaxed">• <strong>Segment Analysis:</strong> Do different traffic sources have vastly different conversion rates?</li>
                      </ul>
                      <p className="text-lg leading-relaxed mt-4 font-semibold">
                        Actionable Insight: Quantitative data helps you pinpoint the problem areas.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-muted/40 to-muted/20 p-6 rounded-lg border border-primary/10">
                      <h3 className="text-2xl font-bold mb-4 text-secondary">2. The "Why" (Qualitative Data)</h3>
                      <p className="text-lg leading-relaxed mb-4">
                        This is the human data that tells you <em>why</em> users are behaving the way they are.
                      </p>
                      <p className="text-lg leading-relaxed mb-3">
                        <strong>Tools:</strong> Surveys, customer interviews, on-site polls, user testing.
                      </p>
                      <p className="text-lg leading-relaxed mb-3">
                        <strong>Focus Areas:</strong>
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-lg leading-relaxed">• <strong>Voice of Customer:</strong> What language do your customers use?</li>
                        <li className="text-lg leading-relaxed">• <strong>Friction Points:</strong> What questions or concerns aren't being answered?</li>
                        <li className="text-lg leading-relaxed">• <strong>Motivation:</strong> What is driving them to seek a solution?</li>
                      </ul>
                      <p className="text-lg leading-relaxed mt-4 font-semibold">
                        Actionable Insight: Qualitative data provides context for user intent and mindset.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-muted/40 to-muted/20 p-6 rounded-lg border border-primary/10">
                      <h3 className="text-2xl font-bold mb-4 text-accent">3. The "How" (Behavioural Data)</h3>
                      <p className="text-lg leading-relaxed mb-4">
                        This data shows you <em>how</em> users interact with page elements.
                      </p>
                      <p className="text-lg leading-relaxed mb-3">
                        <strong>Tools:</strong> Heatmaps, session recordings, scroll maps (Hotjar, Crazy Egg).
                      </p>
                      <p className="text-lg leading-relaxed mb-3">
                        <strong>Focus Areas:</strong>
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-lg leading-relaxed">• <strong>Heatmaps:</strong> Are users clicking on non-clickable elements?</li>
                        <li className="text-lg leading-relaxed">• <strong>Scroll Maps:</strong> Are users scrolling to see your key CTA?</li>
                        <li className="text-lg leading-relaxed">• <strong>Session Recordings:</strong> Watch real user sessions reveal frustrations.</li>
                      </ul>
                      <p className="text-lg leading-relaxed mt-4 font-semibold">
                        Actionable Insight: Behavioural data visualises the user experience.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Mid-Post CTA */}
                <div className="relative overflow-hidden bg-gradient-primary rounded-lg p-8 text-white my-12 shadow-glow hover:shadow-primary transition-all duration-300 transform hover:scale-[1.02] animate-fade-in">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Ready to Optimise Your Conversion Rates?</h3>
                    <p className="text-lg mb-6">
                      Our team of CRO specialists can help you implement these strategies and turn your website into a conversion machine. Get your free marketing strategy session today.
                    </p>
                    <Link to="/services/marketing-consulting">
                      <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        Get Your Free CRO Audit
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Section 3: A/B Tests */}
                <section id="ab-tests">
                  <h2 className="text-3xl font-bold mb-6">5 High-Impact A/B Tests You Can Run on Your Website Right Now</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Once you have a data-backed hypothesis, test it. Here are five high-impact A/B testing ideas:
                  </p>

                  <div className="space-y-6">
                    <div className="border-l-4 border-primary bg-muted/30 p-6 rounded-r-lg">
                      <h3 className="text-xl font-bold mb-3">1. Test the Value Proposition in Your Headline</h3>
                      <p className="text-lg leading-relaxed mb-3">
                        Your headline is the first thing a visitor sees. A weak or unclear value proposition is a major conversion killer.
                      </p>
                      <div className="bg-background p-4 rounded-lg mb-3">
                        <p className="font-semibold mb-2">Control (A):</p>
                        <p className="text-muted-foreground">"Welcome to Our Software Solution"</p>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Variant (B):</p>
                        <p className="text-foreground">"Stop Wasting Time: Our Software Automates Your Workflow and Saves You 10 Hours a Week."</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-secondary bg-muted/30 p-6 rounded-r-lg">
                      <h3 className="text-xl font-bold mb-3">2. Optimise Your Call-to-Action (CTA) Button</h3>
                      <p className="text-lg leading-relaxed mb-3">
                        A CTA that focuses on the <em>value</em> the user receives will increase click-through rate.
                      </p>
                      <div className="bg-background p-4 rounded-lg mb-3">
                        <p className="font-semibold mb-2">Control (A):</p>
                        <p className="text-muted-foreground">"Submit" or "Buy Now"</p>
                      </div>
                      <div className="bg-secondary/5 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Variant (B):</p>
                        <p className="text-foreground">"Get My Free Audit," "Start Saving Today," or "Secure My Spot"</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-accent bg-muted/30 p-6 rounded-r-lg">
                      <h3 className="text-xl font-bold mb-3">3. Introduce Social Proof and Trust Signals</h3>
                      <p className="text-lg leading-relaxed mb-3">
                        Trust is the currency of conversion. Social proof leverages the psychological principle that people follow others.
                      </p>
                      <p className="text-lg leading-relaxed">
                        Add elements like "Join 10,000 Happy Customers," security badges, or star ratings near your CTA.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary bg-muted/30 p-6 rounded-r-lg">
                      <h3 className="text-xl font-bold mb-3">4. Simplify Your Lead Forms</h3>
                      <p className="text-lg leading-relaxed mb-3">
                        Every extra field in a form is a point of friction. Only ask for the information you absolutely need.
                      </p>
                      <p className="text-lg leading-relaxed">
                        Test reducing form fields from 5 to 2 (Name and Email only) and measure the completion rate increase.
                      </p>
                    </div>

                    <div className="border-l-4 border-secondary bg-muted/30 p-6 rounded-r-lg">
                      <h3 className="text-xl font-bold mb-3">5. Test the Placement and Visibility of Key Information</h3>
                      <p className="text-lg leading-relaxed mb-3">
                        Sometimes, the problem isn't the content, but where it is located.
                      </p>
                      <p className="text-lg leading-relaxed">
                        Try moving shipping and returns policy information closer to the "Add to Cart" button to reduce cart abandonment.
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg leading-relaxed mt-6">
                    Understanding your <Link to="/blog/blog-post-analytics-cro" className="text-primary hover:underline">Google Analytics 4 data</Link> is crucial for identifying which tests to run first.
                  </p>
                </section>

                {/* Section 4: Psychology */}
                <section id="psychology">
                  <h2 className="text-3xl font-bold mb-6">The Psychology of Conversion: Understanding User Behaviour</h2>
                  
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg border border-primary/20 mb-8">
                    <h3 className="text-2xl font-bold mb-4">The Fogg Behaviour Model (B = MAT)</h3>
                    <p className="text-lg leading-relaxed mb-4">
                      A behaviour (B) only occurs when three elements converge: <strong>Motivation (M)</strong>, <strong>Ability (A)</strong>, and a <strong>Trigger (T)</strong>.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white/50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Motivation</h4>
                        <p className="text-muted-foreground">The desire to perform the action. Use compelling, benefit-driven copy.</p>
                      </div>
                      <div className="bg-white/50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Ability</h4>
                        <p className="text-muted-foreground">The ease of performing the action. Simplify forms and reduce steps.</p>
                      </div>
                      <div className="bg-white/50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Trigger</h4>
                        <p className="text-muted-foreground">The cue to act. Clear CTAs and limited-time offers.</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">Key Cognitive Biases to Leverage</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-primary/10">
                          <th className="border border-primary/20 p-3 text-left font-bold">Cognitive Bias</th>
                          <th className="border border-primary/20 p-3 text-left font-bold">Description</th>
                          <th className="border border-primary/20 p-3 text-left font-bold">CRO Application</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-primary/20 p-3 font-semibold">Social Proof</td>
                          <td className="border border-primary/20 p-3">We assume the actions of others reflect correct behaviour.</td>
                          <td className="border border-primary/20 p-3">Display testimonials, ratings, "X people bought this recently"</td>
                        </tr>
                        <tr className="bg-muted/30">
                          <td className="border border-primary/20 p-3 font-semibold">Scarcity</td>
                          <td className="border border-primary/20 p-3">We value things that are rare or limited.</td>
                          <td className="border border-primary/20 p-3">Countdown timers, limited stock warnings</td>
                        </tr>
                        <tr>
                          <td className="border border-primary/20 p-3 font-semibold">Urgency</td>
                          <td className="border border-primary/20 p-3">We act faster with time constraints.</td>
                          <td className="border border-primary/20 p-3">"Order in next 10 minutes for same-day dispatch"</td>
                        </tr>
                        <tr className="bg-muted/30">
                          <td className="border border-primary/20 p-3 font-semibold">Anchoring</td>
                          <td className="border border-primary/20 p-3">We rely on the first piece of information.</td>
                          <td className="border border-primary/20 p-3">Show original price crossed out next to sale price</td>
                        </tr>
                        <tr>
                          <td className="border border-primary/20 p-3 font-semibold">Loss Aversion</td>
                          <td className="border border-primary/20 p-3">Pain of losing is twice as powerful as gaining.</td>
                          <td className="border border-primary/20 p-3">"Don't miss out on these savings"</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <p className="text-lg leading-relaxed mt-6">
                    Combining CRO with effective <Link to="/services/website-design" className="text-primary hover:underline">website design</Link> creates a powerful conversion engine.
                  </p>
                </section>

                {/* Section 5: Tools */}
                <section id="tools">
                  <h2 className="text-3xl font-bold mb-6">Tools for Tracking User Behaviour and Running Tests</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    No CRO strategy can succeed without the right tools. Here are the essential categories:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg border border-primary/20">
                      <h3 className="font-bold text-xl mb-3">Analytics & Quantitative Data</h3>
                      <ul className="space-y-2">
                        <li className="text-lg">• <strong>Google Analytics (GA4):</strong> Industry standard for tracking</li>
                        <li className="text-lg">• <strong>Adobe Analytics:</strong> Enterprise-level alternative</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-6 rounded-lg border border-secondary/20">
                      <h3 className="font-bold text-xl mb-3">Behavioural & Qualitative Data</h3>
                      <ul className="space-y-2">
                        <li className="text-lg">• <strong>Hotjar:</strong> Heatmaps, recordings, surveys</li>
                        <li className="text-lg">• <strong>Crazy Egg:</strong> Heatmaps and scroll maps</li>
                        <li className="text-lg">• <strong>FullStory:</strong> Digital experience intelligence</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-6 rounded-lg border border-accent/20">
                      <h3 className="font-bold text-xl mb-3">A/B Testing & Experimentation</h3>
                      <ul className="space-y-2">
                        <li className="text-lg">• <strong>Optimizely:</strong> Enterprise-grade testing</li>
                        <li className="text-lg">• <strong>VWO:</strong> Comprehensive CRO platform</li>
                        <li className="text-lg">• <strong>AB Tasty:</strong> Testing & personalisation</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-primary/5 to-accent/10 p-6 rounded-lg border border-primary/20">
                      <h3 className="font-bold text-xl mb-3">Voice of Customer (VoC)</h3>
                      <ul className="space-y-2">
                        <li className="text-lg">• <strong>SurveyMonkey/Typeform:</strong> Detailed surveys</li>
                        <li className="text-lg">• <strong>Qualaroo:</strong> On-site feedback widgets</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-lg leading-relaxed mt-6">
                    Integrating these tools with your <Link to="/services/seo" className="text-primary hover:underline">SEO strategy</Link> provides a complete picture of user behaviour.
                  </p>
                </section>

                {/* Conclusion */}
                <section className="relative bg-gradient-to-br from-muted/40 to-muted/20 rounded-lg p-8 my-12 border border-primary/10 shadow-card">
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-primary/10 rounded-br-full"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-secondary/10 rounded-tl-full"></div>
                  
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Turning Your Website Into a Conversion Machine</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    <strong>Conversion rate optimisation</strong> is not a one-off project; it is a continuous, data-driven cycle of improvement. It is the most strategic investment you can make in your digital presence.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    <strong>To recap:</strong>
                  </p>
                  <ol className="space-y-2 ml-6 mb-4">
                    <li className="text-lg leading-relaxed">1. Embrace the ROI of optimising existing traffic</li>
                    <li className="text-lg leading-relaxed">2. Diagnose with the Conversion Trinity (Quantitative, Qualitative, Behavioural)</li>
                    <li className="text-lg leading-relaxed">3. Test with purpose using data-backed hypotheses</li>
                    <li className="text-lg leading-relaxed">4. Master user psychology with the Fogg Model and cognitive biases</li>
                    <li className="text-lg leading-relaxed">5. Tool up with analytics, behavioural, and testing platforms</li>
                  </ol>
                  <p className="text-lg leading-relaxed font-semibold">
                    Start your CRO journey today and watch your existing traffic deliver the growth you've been looking for.
                  </p>
                </section>
              </div>

              {/* Final CTA Section */}
              <section className="relative overflow-hidden bg-gradient-primary rounded-lg p-12 text-white text-center my-16 shadow-glow hover:shadow-primary transition-all duration-300 transform hover:scale-[1.02]">
                {/* Animated Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Take Your Digital Marketing to the Next Level?
                  </h2>
                  <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Get a free, no-obligation marketing strategy session with our experts.
                  </p>
                  <Link to="/contact">
                    <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      Get Your Free Strategy Session
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Author Bio */}
              <section className="relative bg-gradient-to-br from-muted/40 to-muted/20 rounded-lg p-8 flex items-start space-x-6 border border-primary/10 shadow-card hover:shadow-glow transition-all duration-300">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl"></div>
                
                <img
                  src={odinTeamPhoto}
                  alt="Odin Digital Team"
                  className="w-24 h-24 rounded-full object-cover ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300"
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Odin Digital Team</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Odin Digital Team consists of experienced digital marketing strategists, SEO specialists, and content creators dedicated to helping Australian businesses achieve exponential growth through data-driven strategies.
                  </p>
                </div>
              </section>
            </article>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ConversionRateOptimisation;