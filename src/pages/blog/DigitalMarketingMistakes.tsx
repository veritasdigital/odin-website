import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { ArrowRight, CheckCircle, Target, TrendingUp, Users, Zap, BarChart3, MousePointerClick } from "lucide-react";
import heroImage from "@/assets/blog/digital-marketing-mistakes-hero.jpg";
import teamImage from "@/assets/odin-team-professional.jpg";

const DigitalMarketingMistakes = () => {
  const { openForm } = useMarketingForm();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>The 5 Most Common Digital Marketing Mistakes Small Businesses Make (and How to Fix Them) | Odin Digital</title>
        <meta name="description" content="Learn about the 5 most common digital marketing mistakes small businesses make (and how to fix them) with this comprehensive guide from Odin Digital, Australia's leading digital marketing agency." />
        <meta name="keywords" content="small business marketing mistakes, digital marketing mistakes, marketing strategy for small business, common marketing problems, how to fix my marketing" />
        <link rel="canonical" href="https://odindigital.com.au/blog/the-5-most-common-digital-marketing-mistakes-small-businesses-make" />
        
        {/* Open Graph */}
        <meta property="og:title" content="The 5 Most Common Digital Marketing Mistakes Small Businesses Make (and How to Fix Them)" />
        <meta property="og:description" content="Learn about the 5 most common digital marketing mistakes small businesses make (and how to fix them) with this comprehensive guide from Odin Digital." />
        <meta property="og:image" content="https://odindigital.com.au/images/blog/digital-marketing-mistakes-hero.jpg" />
        <meta property="og:url" content="https://odindigital.com.au/blog/the-5-most-common-digital-marketing-mistakes-small-businesses-make" />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The 5 Most Common Digital Marketing Mistakes Small Businesses Make" />
        <meta name="twitter:description" content="Learn about the 5 most common digital marketing mistakes small businesses make (and how to fix them)." />
        <meta name="twitter:image" content="https://odindigital.com.au/images/blog/digital-marketing-mistakes-hero.jpg" />
        
        {/* BlogPosting Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://odindigital.com.au/blog/the-5-most-common-digital-marketing-mistakes-small-businesses-make"
            },
            "headline": "The 5 Most Common Digital Marketing Mistakes Small Businesses Make (and How to Fix Them)",
            "description": "Learn about the 5 most common digital marketing mistakes small businesses make (and how to fix them) with this comprehensive guide from Odin Digital, Australia's leading digital marketing agency.",
            "image": "https://odindigital.com.au/images/blog/digital-marketing-mistakes-hero.jpg",
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

        {/* BreadcrumbList Schema */}
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
                "name": "The 5 Most Common Digital Marketing Mistakes Small Businesses Make (and How to Fix Them)"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section with Floating Circles */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-muted/30 to-muted/20 py-24 lg:py-32">
          {/* Animated Background Blobs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-muted/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-muted/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />
          
          {/* Floating Particles */}
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-muted/20 rounded-full animate-float"></div>
          <div className="absolute top-64 right-1/3 w-3 h-3 bg-muted/25 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-48 left-1/2 w-2 h-2 bg-muted/15 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                <li>/</li>
                <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
                <li>/</li>
                <li className="text-foreground font-medium">The 5 Most Common Digital Marketing Mistakes</li>
              </ol>
            </nav>

            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary">
                Marketing Strategy
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-charcoal leading-tight mb-6 animate-fade-in">
              The 5 Most Common Digital Marketing Mistakes Small Businesses Make 
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                (and How to Fix Them)
              </span>
            </h1>

            {/* Meta Information */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="font-medium">Odin Digital Team</span>
              <span>•</span>
              <time dateTime="2025-01-15">15 January 2025</time>
              <span>•</span>
              <span>12 min read</span>
            </div>

            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img 
                src={heroImage} 
                alt="Small business marketing team collaborating on digital marketing strategy" 
                className="w-full h-auto object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-muted/30 py-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-card p-8 border border-border">
              <h2 className="text-2xl font-bold text-charcoal mb-6 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-primary" />
                Table of Contents
              </h2>
              <nav>
                <ul className="space-y-3">
                  <li>
                    <button onClick={() => scrollToSection('introduction')} className="text-lg text-primary hover:underline font-medium text-left">
                      Introduction: You're Not Alone—Common Struggles Are Fixable
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('mistake-1')} className="text-lg text-primary hover:underline font-medium text-left">
                      Mistake 1: No Clear Strategy (And How to Create a Simple One)
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('mistake-2')} className="text-lg text-primary hover:underline font-medium text-left">
                      Mistake 2: Inconsistent Online Presence (And How to Build a Sustainable Plan)
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('mistake-3')} className="text-lg text-primary hover:underline font-medium text-left">
                      Mistake 3: Ignoring Your Data (And the 3 Simple Metrics to Track)
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('mistake-4')} className="text-lg text-primary hover:underline font-medium text-left">
                      Mistake 4: Trying to Be Everywhere (And How to Choose the Right Platforms)
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('mistake-5')} className="text-lg text-primary hover:underline font-medium text-left">
                      Mistake 5: Not Having a Clear Call-to-Action (And How to Guide Your Customers)
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('conclusion')} className="text-lg text-primary hover:underline font-medium text-left">
                      Conclusion: Small Changes, Big Results
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="bg-white py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Introduction: You're Not Alone—Common Struggles Are Fixable
              </h2>
              
              <div className="prose prose-lg max-w-none space-y-6 text-charcoal/80 leading-relaxed">
                <p>
                  If you're a small business owner, you're likely wearing many hats: CEO, accountant, customer service representative, and, increasingly, digital marketing manager. It's a lot to juggle, and it's completely understandable if your online efforts sometimes feel like a chaotic, time-consuming drain rather than a powerful engine for growth.
                </p>

                <p>
                  The truth is, you are not alone. Many small businesses, even those with fantastic products or services, fall into the same traps when navigating the complex world of digital marketing. They invest time, money, and energy, only to see minimal return. This often leads to frustration, burnout, and the temptation to give up on digital marketing altogether.
                </p>

                <p>
                  But here's the good news: the most common <strong>digital marketing mistakes</strong> are also the most fixable. They aren't complex technical errors; they are fundamental missteps in planning and execution. By identifying these <strong>small business marketing mistakes</strong> and applying simple, actionable solutions, you can transform your digital presence from a source of stress into a reliable, high-performing asset.
                </p>

                <p>
                  This comprehensive guide is designed to help you diagnose the five most frequent <strong>common marketing problems</strong> we see at Odin Digital and provide you with a clear, step-by-step plan on <strong>how to fix my marketing</strong>. We'll show you how to move past the guesswork and build a sustainable, effective <strong>marketing strategy for small business</strong> that delivers real results.
                </p>
              </div>
            </section>

            {/* Mistake 1 */}
            <section id="mistake-1" className="mb-16 scroll-mt-24">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                    Mistake 1: No Clear Strategy (And How to Create a Simple One)
                  </h2>
                </div>
              </div>

              <div className="prose prose-lg max-w-none space-y-6 text-charcoal/80 leading-relaxed">
                <p>
                  The single biggest mistake a small business can make is treating digital marketing as a series of random, disconnected activities. You post on social media when you remember, send an email when you have a spare moment, or run a Google ad because a competitor is doing it. This is often referred to as "random acts of marketing," and it's a guaranteed way to waste resources.
                </p>

                <p>
                  A lack of a clear <strong>marketing strategy for small business</strong> means you have no defined goals, no understanding of your ideal customer, and no roadmap for success. You're driving without a destination, hoping you'll accidentally end up somewhere great.
                </p>

                <h3 className="text-2xl font-bold text-charcoal mt-8 mb-4">The Fix: Create a Simple, Focused Strategy</h3>

                <p>
                  Your strategy doesn't need to be a 50-page document. It needs to be a simple, one-page plan that answers four core questions:
                </p>

                <h4 className="text-xl font-bold text-charcoal mt-6 mb-3">1. Who are you talking to? (Your Ideal Customer)</h4>
                <p>
                  Stop trying to market to "everyone." When you market to everyone, you appeal to no one. Define your ideal customer, or "customer avatar." Give them a name, a job, a family, and a set of problems your business solves.
                </p>
                <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-r-lg my-6">
                  <p className="font-semibold text-charcoal mb-2">Actionable Step:</p>
                  <p className="text-charcoal/80 m-0">Write down three key demographics (age, location, income) and three key psychographics (goals, challenges, values) for your best customer. This clarity will inform all your content and platform choices.</p>
                </div>

                <h4 className="text-xl font-bold text-charcoal mt-6 mb-3">2. What do you want them to do? (Your Goals)</h4>
                <p>
                  Your goals must be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound. Instead of "get more sales," try: "Increase website leads by 15% in the next quarter."
                </p>
                <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-r-lg my-6">
                  <p className="font-semibold text-charcoal mb-2">Actionable Step:</p>
                  <p className="text-charcoal/80 m-0">Choose one primary business goal (e.g., increase sales, grow email list, boost brand awareness) and assign a measurable metric to it.</p>
                </div>

                <h4 className="text-xl font-bold text-charcoal mt-6 mb-3">3. What is your unique value? (Your Core Message)</h4>
                <p>
                  Why should a customer choose you over your competition? Your core message should be simple, compelling, and consistent. It's not just what you sell, but the <em>benefit</em> you provide.
                </p>
                <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-r-lg my-6">
                  <p className="font-semibold text-charcoal mb-2">Actionable Step:</p>
                  <p className="text-charcoal/80 m-0">Complete this sentence: "We help [Ideal Customer] achieve [Desired Outcome] by [Unique Solution]."</p>
                </div>

                <h4 className="text-xl font-bold text-charcoal mt-6 mb-3">4. How will you reach them? (Your Channels)</h4>
                <p>
                  Based on your ideal customer, where do they spend their time online? This is where you focus your efforts. If your customers are professionals, LinkedIn and email might be better than TikTok. If they are young consumers, Instagram and TikTok are key.
                </p>
                <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-r-lg my-6">
                  <p className="font-semibold text-charcoal mb-2">Actionable Step:</p>
                  <p className="text-charcoal/80 m-0">Select a maximum of three core channels (e.g., Google <a href="/services/seo" className="text-primary hover:underline">SEO</a>, <a href="/services/email-marketing" className="text-primary hover:underline">Email Marketing</a>, Instagram) and commit to mastering them before adding more.</p>
                </div>

                <p>
                  By answering these four questions, you've built a robust, yet simple, <strong>marketing strategy for small business</strong>.
                </p>
              </div>
            </section>

            {/* Mid-Post CTA */}
            <section className="my-16">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/20 shadow-card">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                    Ready to implement these strategies for your business?
                  </h3>
                  <p className="text-lg text-charcoal/70 mb-8">
                    Our team of digital marketing experts can help. Get your free <a href="/services/marketing-consulting" className="text-primary hover:underline font-semibold">marketing strategy</a> session today.
                  </p>
                  <Button 
                    variant="hero" 
                    size="xl" 
                    onClick={openForm}
                    className="group"
                  >
                    Get Your Free Strategy Session
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </section>

            {/* Mistake 2 */}
            <section id="mistake-2" className="mb-16 scroll-mt-24">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                    Mistake 2: Inconsistent Online Presence (And How to Build a Sustainable Plan)
                  </h2>
                </div>
              </div>

              <div className="prose prose-lg max-w-none space-y-6 text-charcoal/80 leading-relaxed">
                <p>
                  One of the most frustrating <strong>digital marketing mistakes</strong> is the "start-stop" cycle. A small business owner gets motivated, posts daily for two weeks, sees no immediate results, and then stops for two months. This inconsistency is a killer for two reasons:
                </p>

                <ol className="list-decimal list-inside space-y-3 my-6">
                  <li><strong>It confuses your audience:</strong> A sporadic presence makes your business look unprofessional, unreliable, or even closed. Customers need to see you regularly to build trust.</li>
                  <li><strong>It penalises you with algorithms:</strong> Search engines and social media platforms reward consistency. Regular, high-quality content signals to them that your business is active and valuable, boosting your visibility.</li>
                </ol>

                <h3 className="text-2xl font-bold text-charcoal mt-8 mb-4">The Fix: Build a Sustainable Content Calendar</h3>

                <p>
                  Sustainability is the key to consistency. It's better to post once a week, every week, than to post daily for a month and then disappear.
                </p>

                <h4 className="text-xl font-bold text-charcoal mt-6 mb-3">1. Audit Your Time and Resources</h4>
                <p>
                  Be realistic about what you can manage. If you only have two hours a week for marketing, don't plan for daily content creation.
                </p>
                <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-r-lg my-6">
                  <p className="font-semibold text-charcoal mb-2">Actionable Step:</p>
                  <p className="text-charcoal/80 m-0">Decide on a realistic frequency for your chosen channels (e.g., one blog post per month, two social media posts per week, one email newsletter per fortnight).</p>
                </div>

                <h4 className="text-xl font-bold text-charcoal mt-6 mb-3">2. Batch Your Content Creation</h4>
                <p>
                  Instead of creating content daily, set aside a dedicated block of time (e.g., a half-day once a month) to create all your content for the next few weeks. This allows you to stay in a creative flow and significantly reduces the mental load of switching tasks.
                </p>
                <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-r-lg my-6">
                  <p className="font-semibold text-charcoal mb-2">Actionable Step:</p>
                  <p className="text-charcoal/80 m-0">Use a simple spreadsheet or a free tool like Trello to plan out your content topics, creation dates, and publishing dates for the next 30 days.</p>
                </div>

                <h4 className="text-xl font-bold text-charcoal mt-6 mb-3">3. Repurpose, Repurpose, Repurpose</h4>
                <p>
                  You don't need to create entirely new content for every platform. A single piece of content can be repurposed across your entire online presence.
                </p>
                <div className="bg-muted/30 border-l-4 border-secondary p-6 rounded-r-lg my-6">
                  <p className="font-semibold text-charcoal mb-2">Example:</p>
                  <p className="text-charcoal/80 mb-3">Turn a single blog post (like this one) into:</p>
                  <ul className="space-y-2 ml-6 text-charcoal/80">
                    <li>• 5-7 social media posts (one for the introduction and one for each mistake).</li>
                    <li>• A short video for Instagram Reels or TikTok.</li>
                    <li>• A section in your monthly email newsletter.</li>
                  </ul>
                </div>
                <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-r-lg my-6">
                  <p className="font-semibold text-charcoal mb-2">Actionable Step:</p>
                  <p className="text-charcoal/80 m-0">For every major piece of content you create, list at least three ways you can break it down and share it on other platforms.</p>
                </div>

                <p>
                  By planning ahead and committing to a manageable schedule, you eliminate the inconsistency that plagues so many small businesses.
                </p>
              </div>
            </section>

            {/* Mistake 3 */}
            <section id="mistake-3" className="mb-16 scroll-mt-24">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                    Mistake 3: Ignoring Your Data (And the 3 Simple Metrics to Track)
                  </h2>
                </div>
              </div>

              <div className="prose prose-lg max-w-none space-y-6 text-charcoal/80 leading-relaxed">
                <p>
                  Many small business owners are afraid of data. They see Google Analytics or their social media insights dashboard and feel overwhelmed by the sheer volume of numbers. As a result, they ignore it completely, which is one of the most costly <strong>digital marketing mistakes</strong>.
                </p>

                <p>
                  Ignoring data means you are operating in the dark. You don't know which efforts are working, which are failing, and where your customers are actually coming from. You can't tell <strong>how to fix my marketing</strong> if you don't know what's broken.
                </p>

                <h3 className="text-2xl font-bold text-charcoal mt-8 mb-4">The Fix: Focus on Three Key Metrics</h3>

                <p>
                  You don't need to track everything. For a small business, focusing on three simple, high-impact metrics will give you a clear picture of your digital health. These metrics directly relate to the three stages of the customer journey: Awareness, Engagement, and Conversion.
                </p>

                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse bg-white shadow-card rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-primary/5">
                        <th className="border border-border p-4 text-left font-bold text-charcoal">Metric</th>
                        <th className="border border-border p-4 text-left font-bold text-charcoal">What It Measures</th>
                        <th className="border border-border p-4 text-left font-bold text-charcoal">Why It Matters for Small Business</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-4 font-semibold text-charcoal">1. Website Traffic (Source)</td>
                        <td className="border border-border p-4 text-charcoal/80">Where your visitors are coming from (e.g., Google Search, Social Media, Email).</td>
                        <td className="border border-border p-4 text-charcoal/80">Tells you which of your marketing channels is successfully driving people to your digital storefront. If you're spending hours on Instagram but getting no traffic, you need to change your approach.</td>
                      </tr>
                      <tr className="bg-muted/10">
                        <td className="border border-border p-4 font-semibold text-charcoal">2. Engagement Rate</td>
                        <td className="border border-border p-4 text-charcoal/80">How people interact with your content (e.g., likes, comments, shares, time on page, email open rate).</td>
                        <td className="border border-border p-4 text-charcoal/80">Measures the quality and relevance of your content. High engagement means your message is resonating with your target audience. Low engagement suggests your content is missing the mark.</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-4 font-semibold text-charcoal">3. Conversion Rate</td>
                        <td className="border border-border p-4 text-charcoal/80">The percentage of visitors who complete a desired action (e.g., make a purchase, fill out a contact form, sign up for a newsletter).</td>
                        <td className="border border-border p-4 text-charcoal/80">This is the ultimate measure of success. It tells you if your marketing is not just attracting people, but attracting the <em>right</em> people who are ready to become customers.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-r-lg my-6">
                  <p className="font-semibold text-charcoal mb-2">Actionable Step:</p>
                  <p className="text-charcoal/80 m-0">Set up Google Analytics (or a similar tool) on your website. Once a month, dedicate 30 minutes to look at these three metrics. Ask yourself: "What worked well this month, and what should I stop doing?" Use the answers to adjust your plan for the next month. This is the core of a data-driven <strong>marketing strategy for small business</strong>.</p>
                </div>
              </div>
            </section>

            {/* Mistake 4 */}
            <section id="mistake-4" className="mb-16 scroll-mt-24">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                    Mistake 4: Trying to Be Everywhere (And How to Choose the Right Platforms)
                  </h2>
                </div>
              </div>

              <div className="prose prose-lg max-w-none space-y-6 text-charcoal/80 leading-relaxed">
                <p>
                  The pressure to be everywhere is immense. Every new social media platform, every new feature, and every new trend seems to demand your attention. This leads to one of the most common <strong>small business marketing mistakes</strong>: spreading yourself too thin.
                </p>

                <p>
                  When you try to manage five or six different platforms, your content quality drops, your consistency suffers, and you end up feeling overwhelmed. You're sacrificing depth for breadth, which is a poor <strong>marketing strategy for small business</strong>.
                </p>

                <h3 className="text-2xl font-bold text-charcoal mt-8 mb-4">The Fix: Go Deep, Not Wide</h3>

                <p>
                  The solution is simple: focus your energy where your ideal customer actually spends their time. It's far better to be brilliant on one or two platforms than mediocre on five.
                </p>

                <h4 className="text-xl font-bold text-charcoal mt-6 mb-3">1. Define Your Audience's Digital Habitat</h4>
                <p>
                  Refer back to your ideal customer avatar (from Mistake 1). Where do they hang out?
                </p>
                <ul className="space-y-3 my-6 ml-6">
                  <li><strong>B2C (Business-to-Consumer):</strong> If your product is highly visual (e.g., food, fashion, home décor), Instagram and Pinterest are likely key. If your audience is older or local, <a href="/facebook-advertising" className="text-primary hover:underline">Facebook</a> remains a powerful tool.</li>
                  <li><strong>B2B (Business-to-Business):</strong> <a href="/linkedin-advertising" className="text-primary hover:underline">LinkedIn</a> is non-negotiable. Email marketing and industry-specific forums are also crucial.</li>
                  <li><strong>Service-Based Local Business:</strong> Google My Business, <a href="/local-seo" className="text-primary hover:underline">local SEO</a>, and Facebook are essential for visibility and reviews.</li>
                </ul>

                <h4 className="text-xl font-bold text-charcoal mt-6 mb-3">2. Prioritise for Resource Allocation</h4>
                <p>
                  List your top three potential platforms. Now, rank them based on two factors:
                </p>
                <ol className="list-decimal list-inside space-y-2 my-6">
                  <li><strong>Audience Fit:</strong> How many of your ideal customers are actively using this platform?</li>
                  <li><strong>Resource Fit:</strong> How easy is it for you to create content for this platform? (e.g., if you hate being on camera, don't choose TikTok as your primary channel).</li>
                </ol>
                <p>
                  Choose the platform with the highest combined score and make it your primary focus. Dedicate 80% of your social media time to this one channel.
                </p>

                <h4 className="text-xl font-bold text-charcoal mt-6 mb-3">3. Use Other Platforms as Outposts</h4>
                <p>
                  You don't have to ignore other platforms entirely, but you can treat them as "outposts." Set up a basic profile on the major ones (Twitter, LinkedIn, etc.) and simply link back to your primary channel or your website. This secures your brand name and provides a basic presence without demanding constant content creation.
                </p>

                <p>
                  By being selective, you ensure that your limited time and budget are spent on activities that will actually move the needle for your business.
                </p>
              </div>
            </section>

            {/* Mistake 5 */}
            <section id="mistake-5" className="mb-16 scroll-mt-24">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MousePointerClick className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                    Mistake 5: Not Having a Clear Call-to-Action (And How to Guide Your Customers)
                  </h2>
                </div>
              </div>

              <div className="prose prose-lg max-w-none space-y-6 text-charcoal/80 leading-relaxed">
                <p>
                  You've done the hard work: you've created a great piece of content, you've posted it consistently, and you've attracted a visitor to your <a href="/services/website-design" className="text-primary hover:underline">website</a>. But then, they leave without doing anything. Why? Because you didn't tell them what to do next.
                </p>

                <p>
                  This is the final, and perhaps most frustrating, of the <strong>digital marketing mistakes</strong>: a missing or unclear Call-to-Action (CTA). A CTA is the bridge between your content and your business goal. Without it, your customer is left standing on the edge of a cliff, unsure of where to jump.
                </p>

                <h3 className="text-2xl font-bold text-charcoal mt-8 mb-4">The Fix: Make Your CTAs Unmissable and Actionable</h3>

                <p>
                  A great CTA is clear, compelling, and present. It removes all friction and confusion from the customer journey.
                </p>

                <h4 className="text-xl font-bold text-charcoal mt-6 mb-3">1. Be Specific and Use Action Verbs</h4>
                <p>
                  Vague CTAs like "Click Here" or "Submit" are weak. Your CTA should tell the customer exactly what they will get and what they need to do.
                </p>
                <ul className="space-y-3 my-6 ml-6">
                  <li><strong>Weak:</strong> <em>Learn More</em></li>
                  <li><strong>Strong:</strong> <em>Download Your Free Marketing Checklist</em></li>
                  <li><strong>Weak:</strong> <em>Contact Us</em></li>
                  <li><strong>Strong:</strong> <em>Book Your Free 15-Minute Strategy Session</em></li>
                </ul>

                <h4 className="text-xl font-bold text-charcoal mt-6 mb-3">2. Create a Sense of Urgency or Value</h4>
                <p>
                  While you don't always need a countdown timer, your CTA should imply a benefit to acting now. Focus on the value the customer receives.
                </p>
                <div className="bg-muted/30 border-l-4 border-secondary p-6 rounded-r-lg my-6">
                  <p className="font-semibold text-charcoal mb-2">Example:</p>
                  <p className="text-charcoal/80 m-0">Instead of "Sign Up for Our Newsletter," try "Join 5,000 Local Businesses and Get Weekly Marketing Tips." This uses social proof and highlights the value.</p>
                </div>

                <h4 className="text-xl font-bold text-charcoal mt-6 mb-3">3. Place CTAs Strategically</h4>
                <p>
                  Your content should guide the customer toward the CTA naturally.
                </p>

                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse bg-white shadow-card rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-primary/5">
                        <th className="border border-border p-4 text-left font-bold text-charcoal">Location</th>
                        <th className="border border-border p-4 text-left font-bold text-charcoal">Purpose</th>
                        <th className="border border-border p-4 text-left font-bold text-charcoal">Example CTA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-4 font-semibold text-charcoal">Blog Post Body</td>
                        <td className="border border-border p-4 text-charcoal/80">Mid-content lead capture</td>
                        <td className="border border-border p-4 text-charcoal/80"><em>Get the full 5-Point Checklist (Free Download)</em></td>
                      </tr>
                      <tr className="bg-muted/10">
                        <td className="border border-border p-4 font-semibold text-charcoal">Website Homepage</td>
                        <td className="border border-border p-4 text-charcoal/80">Primary business goal</td>
                        <td className="border border-border p-4 text-charcoal/80"><em>Start Your Free Trial</em></td>
                      </tr>
                      <tr>
                        <td className="border border-border p-4 font-semibold text-charcoal">Email Signature</td>
                        <td className="border border-border p-4 text-charcoal/80">Ongoing engagement</td>
                        <td className="border border-border p-4 text-charcoal/80"><em>Connect with me on LinkedIn</em></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-r-lg my-6">
                  <p className="font-semibold text-charcoal mb-2">Actionable Step:</p>
                  <p className="text-charcoal/80 m-0">Review your top five pieces of online content (website homepage, best-performing social post, last email). Does each one have a single, clear, and compelling CTA? If not, edit them today.</p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Conclusion: Small Changes, Big Results
              </h2>

              <div className="prose prose-lg max-w-none space-y-6 text-charcoal/80 leading-relaxed">
                <p>
                  The journey of digital marketing for a small business can feel daunting, but remember that success is built on consistency and correction, not perfection. The five <strong>digital marketing mistakes</strong> we've outlined—lack of strategy, inconsistency, ignoring data, trying to be everywhere, and unclear CTAs—are not signs of failure. They are simply opportunities for improvement.
                </p>

                <p>
                  By implementing the fixes we've discussed, you are not just solving <strong>common marketing problems</strong>; you are building a resilient, data-driven, and highly effective <strong>marketing strategy for small business</strong>.
                </p>

                <p>
                  Start small. Choose one mistake to fix this week. Perhaps you'll finally define your ideal customer, or you'll commit to a sustainable content schedule. These small, deliberate changes will compound over time, transforming your digital presence and delivering the big results your business deserves.
                </p>

                <p className="text-xl font-semibold text-charcoal mt-8">
                  Ready to take the guesswork out of your marketing? Let Odin Digital help you craft a tailored strategy that works.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-charcoal/70">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Keywords Integrated:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">small business marketing mistakes</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">digital marketing mistakes</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">marketing strategy for small business</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">common marketing problems</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">how to fix my marketing</span>
                </div>
              </div>
            </section>

            {/* Author Bio */}
            <section className="mt-16 border-t border-border pt-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <img 
                    src={teamImage} 
                    alt="Odin Digital Team" 
                    className="w-32 h-32 rounded-full object-cover shadow-card"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-charcoal mb-3">About the Odin Digital Team</h3>
                  <p className="text-lg text-charcoal/70 leading-relaxed">
                    The Odin Digital Team consists of experienced digital marketing strategists, SEO specialists, and content creators dedicated to helping Australian businesses achieve exponential growth through data-driven strategies. With a proven track record of generating over $574 million in client revenue, we're passionate about empowering small businesses with the tools and knowledge they need to succeed online.
                  </p>
                  <div className="mt-6">
                    <a href="/about" className="text-primary hover:underline font-semibold inline-flex items-center gap-2">
                      Learn more about our team
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to Take Your Digital Marketing to the Next Level?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Get a free, no-obligation marketing strategy session with our experts.
            </p>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={openForm}
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 shadow-2xl group"
            >
              Get Your Free Strategy Session
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DigitalMarketingMistakes;
