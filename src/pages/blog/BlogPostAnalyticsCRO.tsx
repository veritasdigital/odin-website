import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import conversionOptimizationHero from "@/assets/blog/conversion-optimization.jpg";
import odinTeamPhoto from "@/assets/odin-team-professional.jpg";

const BlogPostAnalyticsCRO = () => {
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
      "@id": "https://odindigital.com.au/blog/blog-post-analytics-cro"
    },
    "headline": "Google Analytics 4 for Beginners: A Guide for Aussie Business Owners",
    "description": "Confused by Google Analytics 4? Our beginner-friendly guide for Australian business owners will help you understand the basics, set up your account, and start tracking your website's performance.",
    "image": "https://odindigital.com.au/images/blog/blog-post-analytics-cro-featured.jpg",
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
        "name": "Google Analytics 4 for Beginners: A Guide for Aussie Business Owners"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Google Analytics 4 for Beginners: A Guide for Aussie Business Owners | Odin Digital</title>
        <meta name="description" content="Confused by Google Analytics 4? Our beginner-friendly guide for Australian business owners will help you understand the basics, set up your account, and start tracking your website's performance." />
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

          <div className="container relative z-10">{/* ... keep existing code ... */}
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground">Google Analytics 4 for Beginners</span>
            </nav>

            {/* Back to Blog */}
            <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <article className="max-w-4xl mx-auto">
              <header className="mb-12 animate-fade-in">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>{/* ... keep existing code ... */}
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">CRO</span>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>5 min read</span>
                  </div>
                  <span>•</span>
                  <time dateTime="2025-01-15">January 15, 2025</time>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  Google Analytics 4 for Beginners: A Guide for Aussie Business Owners
                </h1>

                <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>{/* ... keep existing code ... */}
                  By Odin Digital Team
                </p>

                <div className="relative animate-fade-in" style={{ animationDelay: "0.8s" }}>
                  {/* Gradient Ring around image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur-2xl transform scale-105 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                  
                  <img
                    src={conversionOptimizationHero}
                    alt="Google Analytics 4 dashboard showing business analytics and conversion data"
                    className="relative w-full rounded-lg shadow-2xl ring-1 ring-primary/10 hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>{/* ... keep existing code ... */}
              </header>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg leading-relaxed">
                  If you're running a website for your Australian business, you need to know how it's performing. How many people are visiting your site? Where are they coming from? What pages are they looking at? And most importantly, are they taking the actions you want them to take?
                </p>
                <p className="text-lg leading-relaxed">
                  That's where Google Analytics comes in. Google Analytics is a free tool that helps you track and analyse your website traffic. It gives you valuable insights into your audience's behaviour, so you can make data-driven decisions to improve your website and grow your business.
                </p>
                <p className="text-lg leading-relaxed">
                  In July 2023, Google replaced Universal Analytics with Google Analytics 4 (GA4). If you're new to Google Analytics or you're still using Universal Analytics, this guide will help you get started with GA4.
                </p>
              </div>

              {/* Table of Contents */}
              <nav className="relative bg-gradient-to-br from-muted/40 to-muted/20 backdrop-blur-sm rounded-lg p-8 mb-12 border border-primary/10 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: "1s" }}>
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Table of Contents</h2>{/* ... keep existing code ... */}
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => scrollToSection('what-is-ga4')}
                      className="text-primary hover:underline text-left hover:translate-x-2 transition-transform duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      What is Google Analytics 4?
                    </button>
                  </li>{/* ... keep existing code ... */}
                  <li>
                    <button
                      onClick={() => scrollToSection('why-use-ga4')}
                      className="text-primary hover:underline text-left hover:translate-x-2 transition-transform duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Why Should You Use Google Analytics 4?
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('setting-up-ga4')}
                      className="text-primary hover:underline text-left hover:translate-x-2 transition-transform duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Setting Up Google Analytics 4
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('understanding-interface')}
                      className="text-primary hover:underline text-left hover:translate-x-2 transition-transform duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Understanding the GA4 Interface
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('key-metrics')}
                      className="text-primary hover:underline text-left hover:translate-x-2 transition-transform duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Key Metrics to Track
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('creating-report')}
                      className="text-primary hover:underline text-left hover:translate-x-2 transition-transform duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      Creating Your First Report
                    </button>
                  </li>{/* ... keep existing code ... */}
                </ul>
              </nav>

              {/* Body Content */}
              <div className="prose prose-lg max-w-none space-y-12">
                {/* Section 1 */}
                <section id="what-is-ga4">
                  <h2 className="text-3xl font-bold mb-4">What is Google Analytics 4?</h2>
                  <p className="text-lg leading-relaxed">
                    Google Analytics 4 (GA4) is the latest version of Google's web analytics platform. It's designed to give you a more complete picture of your customers' journey across different devices and platforms.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Unlike Universal Analytics, which was based on sessions and pageviews, GA4 is based on events. This means it tracks every interaction a user has with your website, from page views to button clicks to video plays.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="why-use-ga4">
                  <h2 className="text-3xl font-bold mb-4">Why Should You Use Google Analytics 4?</h2>
                  <ul className="space-y-3">
                    <li className="text-lg leading-relaxed">
                      <strong>It's the future:</strong> Universal Analytics stopped collecting data in July 2023. If you want to continue tracking your website's performance, you need to switch to GA4.
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>Better cross-platform tracking:</strong> GA4 can track users across different devices and platforms, giving you a more complete picture of their journey.
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>More powerful insights:</strong> GA4 uses machine learning to give you predictive insights, such as which users are most likely to convert.
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>Privacy-focused:</strong> GA4 is designed with privacy in mind and is compliant with regulations like GDPR.
                    </li>
                  </ul>
                </section>

                {/* Mid-Post CTA */}
                <div className="relative overflow-hidden bg-gradient-primary rounded-lg p-8 text-white my-12 shadow-glow hover:shadow-primary transition-all duration-300 transform hover:scale-[1.02] animate-fade-in">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">{/* ... keep existing code ... */}
                    <h3 className="text-2xl font-bold mb-4">Ready to Optimise Your Digital Marketing?</h3>
                    <p className="text-lg mb-6">
                      Our team of digital marketing experts can help you set up and interpret your analytics data to drive real business results. Get your free marketing strategy session today.
                    </p>
                    <Link to="/services/marketing-consulting">
                      <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        Get Your Free Strategy Session
                      </Button>
                    </Link>
                  </div>
                </div>{/* ... keep existing code ... */}

                {/* Section 3 */}
                <section id="setting-up-ga4">
                  <h2 className="text-3xl font-bold mb-4">Setting Up Google Analytics 4</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    Setting up GA4 is relatively straightforward. Here's what you need to do:
                  </p>
                  <ol className="list-decimal list-inside space-y-3">
                    <li className="text-lg leading-relaxed">
                      <strong>Create a Google Analytics account:</strong> If you don't already have one, go to analytics.google.com and sign up for a free account.
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>Create a GA4 property:</strong> A property is a website or app that you want to track. Follow the prompts to create a new GA4 property.
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>Add the tracking code to your website:</strong> Google will give you a tracking code (also called a tag) that you need to add to every page of your website. If you're using a platform like WordPress, you can use a plugin to add the code automatically.
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>Verify that it's working:</strong> Once you've added the tracking code, go back to Google Analytics and check that data is being collected.
                    </li>
                  </ol>
                  <p className="text-lg leading-relaxed mt-4">
                    If you need help with your <Link to="/services/website-design" className="text-primary hover:underline">website design and development</Link>, our team can assist with implementing GA4 tracking correctly from the start.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="understanding-interface">
                  <h2 className="text-3xl font-bold mb-4">Understanding the GA4 Interface</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    The GA4 interface is different from Universal Analytics, so it might take some time to get used to. Here are the main sections:
                  </p>
                  <ul className="space-y-3">
                    <li className="text-lg leading-relaxed">
                      <strong>Home:</strong> This is your dashboard, where you can see a snapshot of your website's performance.
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>Reports:</strong> This is where you can view detailed reports on your website's traffic, user behaviour, and conversions.
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>Explore:</strong> This is where you can create custom reports and dig deeper into your data.
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>Advertising:</strong> This is where you can track your advertising campaigns.
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>Configure:</strong> This is where you can set up events, conversions, and other settings.
                    </li>
                  </ul>
                </section>

                {/* Section 5 */}
                <section id="key-metrics">
                  <h2 className="text-3xl font-bold mb-4">Key Metrics to Track</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    There are hundreds of metrics you can track in GA4, but here are a few of the most important ones for beginners:
                  </p>
                  <ul className="space-y-3">
                    <li className="text-lg leading-relaxed">
                      <strong>Users:</strong> The number of unique visitors to your website.
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>Sessions:</strong> The number of times users visit your website.
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>Pageviews:</strong> The number of pages viewed on your website.
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>Bounce rate:</strong> The percentage of users who leave your website after viewing only one page.
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>Average session duration:</strong> The average amount of time users spend on your website.
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>Conversions:</strong> The number of times users complete a desired action, such as filling out a form or making a purchase.
                    </li>
                  </ul>
                  <p className="text-lg leading-relaxed mt-4">
                    Understanding these metrics is crucial for optimising your <Link to="/services/seo" className="text-primary hover:underline">SEO strategy</Link> and improving your overall digital marketing performance.
                  </p>
                </section>

                {/* Section 6 */}
                <section id="creating-report">
                  <h2 className="text-3xl font-bold mb-4">Creating Your First Report</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    Once you've got some data in GA4, you can start creating reports. Here's how to create a simple report:
                  </p>
                  <ol className="list-decimal list-inside space-y-3">
                    <li className="text-lg leading-relaxed">
                      <strong>Go to the Reports section.</strong>
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>Choose a report template:</strong> GA4 has several pre-built report templates, such as "Acquisition" (where your traffic is coming from) and "Engagement" (how users are interacting with your site).
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>Customise your report:</strong> You can add filters, change the date range, and add additional dimensions and metrics.
                    </li>
                    <li className="text-lg leading-relaxed">
                      <strong>Save your report:</strong> Once you're happy with your report, you can save it for future use.
                    </li>
                  </ol>
                  <p className="text-lg leading-relaxed mt-4">
                    These insights can help inform your <Link to="/services/google-ads" className="text-primary hover:underline">Google Ads campaigns</Link> and other paid advertising efforts.
                  </p>
                </section>

                {/* Conclusion */}
                <section className="relative bg-gradient-to-br from-muted/40 to-muted/20 rounded-lg p-8 my-12 border border-primary/10 shadow-card">
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-primary/10 rounded-br-full"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-secondary/10 rounded-tl-full"></div>
                  
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">The Bottom Line</h2>{/* ... keep existing code ... */}
                  <p className="text-lg leading-relaxed">
                    Google Analytics 4 might seem intimidating at first, but it's a powerful tool that can help you understand your website's performance and make data-driven decisions to grow your Australian business.
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    <strong>Final tip:</strong> Don't try to track everything at once. Start with the key metrics that matter most to your business, and gradually expand your tracking as you become more comfortable with the platform.
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    <strong>Need help setting up and interpreting your Google Analytics 4 data? Contact Odin Digital today for a free consultation!</strong>
                  </p>
                </section>
              </div>

              {/* Final CTA Section */}
              <section className="relative overflow-hidden bg-gradient-primary rounded-lg p-12 text-white text-center my-16 shadow-glow hover:shadow-primary transition-all duration-300 transform hover:scale-[1.02]">
                {/* Animated Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
                
                <div className="relative z-10">{/* ... keep existing code ... */}
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
              </section>{/* ... keep existing code ... */}

              {/* Author Bio */}
              <section className="relative bg-gradient-to-br from-muted/40 to-muted/20 rounded-lg p-8 flex items-start space-x-6 border border-primary/10 shadow-card hover:shadow-glow transition-all duration-300">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl"></div>
                
                <img
                  src={odinTeamPhoto}
                  alt="Odin Digital Team"
                  className="w-24 h-24 rounded-full object-cover ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300"
                />
                <div className="relative z-10">{/* ... keep existing code ... */}
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

export default BlogPostAnalyticsCRO;
