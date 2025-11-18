import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Target, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import googleAdsHero from "@/assets/blog/google-ads-hero.jpg";
import googleAdsTeam from "@/assets/blog/google-ads-team-strategy.jpg";
import googleAdsResults from "@/assets/blog/google-ads-performance-results.jpg";
import odinTeam from "@/assets/odin-team-professional.jpg";
import { blogArticles } from "@/utils/blogSchemaData";
import { getArticleSchema } from "@/utils/schemaMarkup";

const GoogleAdsGuide = () => {
  const relatedArticles = [
    {
      title: "TikTok For Business: The Complete Guide",
      description: "Learn how to leverage TikTok's massive audience for business growth with proven advertising strategies.",
      path: "/blog/tiktok-for-business",
      topic: "Social Media Marketing"
    },
    {
      title: "SEO Checklist 2025",
      description: "Complete SEO checklist to ensure your website ranks well in search engines and drives organic traffic.",
      path: "/blog/seo-checklist-2025",
      topic: "SEO"
    },
    {
      title: "Marketing Automation Guide",
      description: "Discover how marketing automation can save time and increase conversion rates for your business.",
      path: "/blog/marketing-automation",
      topic: "Marketing Automation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Google Ads for Dummies: A Guide for Australian Small Business Owners | Odin Digital</title>
        <meta 
          name="description" 
          content="Want to get your Australian small business in front of more customers? Our guide to Google Ads for dummies will teach you the basics of setting up and running a successful campaign, even if you're a complete beginner." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://odindigital.com.au/blog/google-ads-guide"
            },
            "headline": "Google Ads for Dummies: A Guide for Australian Small Business Owners",
            "description": "Want to get your Australian small business in front of more customers? Our guide to Google Ads for dummies will teach you the basics of setting up and running a successful campaign, even if you're a complete beginner.",
            "image": "https://odindigital.com.au/images/blog/google-ads-guide-featured.jpg",
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
            "datePublished": "2025-08-25",
            "dateModified": "2025-08-25"
          })}
        </script>
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
                "name": "Google Ads for Dummies: A Guide for Australian Small Business Owners"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="container mx-auto px-4 pt-20">
          <Breadcrumbs items={[
            { label: "Blog", path: "/blog" },
            { label: "Google Ads for Dummies", path: "/blog/google-ads-guide" }
          ]} />
        </div>
        
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          
          {/* Floating decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float" />
          <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-accent/10 animate-float-delayed" />
          <div className="absolute bottom-10 left-1/4 w-24 h-24 rounded-full bg-primary/10 animate-float" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumbs */}
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground">Google Ads for Dummies</span>
            </nav>

            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent leading-tight">
                Google Ads for Dummies: A Guide for Australian Small Business Owners
              </h1>

              <div className="flex items-center space-x-4 text-muted-foreground mb-8">
                <span>By Odin Digital Team</span>
                <span>•</span>
                <time dateTime="2025-01-15">15 January 2025</time>
                <span>•</span>
                <span>5 min read</span>
              </div>

              <img 
                src={googleAdsHero} 
                alt="Google Ads dashboard showing performance metrics for Australian small business" 
                className="w-full h-auto rounded-lg shadow-elegant mb-8"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  As an Australian small business owner, you're always looking for ways to reach new customers. You've probably heard of Google Ads, but you might be intimidated by the platform. It seems complicated, and you're not sure if you'll get a return on your investment.
                </p>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  But what if we told you that <Link to="/services/google-ads" className="text-primary hover:text-primary/80 font-semibold">Google Ads</Link> is one of the most effective ways to grow your business? With Google Ads, you can reach people who are actively searching for the products or services you offer. And with the right strategy, you can get a great return on your ad spend.
                </p>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  This guide is for you. We'll walk you through the basics of Google Ads, from setting up your first campaign to measuring your results. By the end of this guide, you'll have the confidence to launch your own Google Ads campaign and start attracting new customers.
                </p>
              </div>

              {/* Table of Contents */}
              <Card className="p-8 mb-12 border-primary/20 shadow-elegant backdrop-blur-sm bg-card/80 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-accent/5 blur-2xl" />
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mr-4 shadow-glow">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  Table of Contents
                </h2>
                <ul className="space-y-3 text-lg">
                  <li>
                    <a href="#what-is-google-ads" className="text-primary hover:text-primary/80 transition-colors">
                      What is Google Ads?
                    </a>
                  </li>
                  <li>
                    <a href="#is-google-ads-right" className="text-primary hover:text-primary/80 transition-colors">
                      Is Google Ads Right for Your Business?
                    </a>
                  </li>
                  <li>
                    <a href="#getting-started" className="text-primary hover:text-primary/80 transition-colors">
                      Getting Started with Google Ads
                    </a>
                  </li>
                  <li>
                    <a href="#setting-up-campaign" className="text-primary hover:text-primary/80 transition-colors">
                      Setting Up Your First Campaign
                    </a>
                  </li>
                  <li>
                    <a href="#measuring-results" className="text-primary hover:text-primary/80 transition-colors">
                      Measuring Your Results
                    </a>
                  </li>
                </ul>
              </Card>

              {/* Section: What is Google Ads */}
              <section id="what-is-google-ads" className="mb-16 relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/5 blur-2xl animate-float" />
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mr-4 shadow-glow">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    What is Google Ads?
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Google Ads is an online advertising platform where advertisers pay to display brief advertisements, service offerings, product listings, or videos to web users. It can place ads both in the results of search engines like Google Search and on non-search websites, mobile apps, and videos.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The beauty of Google Ads is that it connects you with people who are actively searching for what you offer. Unlike traditional advertising where you hope the right people see your message, <strong>Google Ads puts your business in front of customers at the exact moment they're looking for your products or services</strong>.
                  </p>
                </div>
              </section>

              {/* Section: Is Google Ads Right */}
              <section id="is-google-ads-right" className="mb-16 relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-accent/5 blur-2xl animate-float-delayed" />
                
                <img 
                  src={googleAdsTeam} 
                  alt="Australian small business team collaborating on Google Ads strategy" 
                  className="w-full h-auto rounded-lg shadow-elegant mb-8"
                />

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mr-4 shadow-glow">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Is Google Ads Right for Your Business?
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Google Ads can be a great investment for your business, but it's not right for everyone. Here are a few things to consider:
                  </p>

                  <ul className="space-y-4 text-lg text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Your budget:</strong> Google Ads can be expensive, so you need to have a realistic budget. You can start with a small budget and increase it as you start to see results.
                    </li>
                    <li>
                      <strong className="text-foreground">Your industry:</strong> Some industries are more competitive than others on Google Ads. If you're in a competitive industry, you'll need to have a well-optimised campaign to get a good return on your investment.
                    </li>
                    <li>
                      <strong className="text-foreground">Your time commitment:</strong> Google Ads requires ongoing management. You'll need to set aside time each week to monitor your campaigns and make adjustments.
                    </li>
                  </ul>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    If you're unsure whether Google Ads is right for your business, consider working with a <Link to="/services/marketing-consulting" className="text-primary hover:text-primary/80 font-semibold">digital marketing agency</Link> that can assess your situation and develop a customised strategy.
                  </p>
                </div>
              </section>

              {/* Mid-Post CTA */}
              <Card className="p-8 md:p-12 my-16 bg-gradient-primary text-white border-0 shadow-glow relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to implement these strategies for your business?
                  </h3>
                  <p className="text-lg mb-6 text-white/90">
                    Our team of digital marketing experts can help. Get your free marketing strategy session today.
                  </p>
                  <Button asChild size="lg" variant="secondary" className="shadow-lg">
                    <Link to="/services/google-ads">
                      Explore Our Google Ads Services
                    </Link>
                  </Button>
                </div>
              </Card>

              {/* Section: Getting Started */}
              <section id="getting-started" className="mb-16 relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/5 blur-2xl animate-float" />
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mr-4 shadow-glow">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Getting Started with Google Ads
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Ready to get started? Here's what you need to do:
                  </p>

                  <ol className="space-y-4 text-lg text-muted-foreground list-decimal list-inside">
                    <li>
                      <strong className="text-foreground">Create a Google Ads account:</strong> You can sign up for a free account at ads.google.com.
                    </li>
                    <li>
                      <strong className="text-foreground">Set up your billing information:</strong> You'll need to add a payment method to your account before you can start running ads.
                    </li>
                    <li>
                      <strong className="text-foreground">Link your Google Analytics account:</strong> This will allow you to track your results and see how your ads are performing.
                    </li>
                  </ol>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    If you want to combine your <Link to="/services/google-ads" className="text-primary hover:text-primary/80 font-semibold">paid advertising efforts</Link> with organic growth, consider pairing Google Ads with a comprehensive <Link to="/services/seo" className="text-primary hover:text-primary/80 font-semibold">SEO strategy</Link>.
                  </p>
                </div>
              </section>

              {/* Section: Setting Up Campaign */}
              <section id="setting-up-campaign" className="mb-16 relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-accent/5 blur-2xl animate-float-delayed" />
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mr-4 shadow-glow">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Setting Up Your First Campaign
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Now it's time to set up your first campaign. Here are the steps:
                  </p>

                  <ol className="space-y-4 text-lg text-muted-foreground list-decimal list-inside">
                    <li>
                      <strong className="text-foreground">Choose your campaign type:</strong> There are several campaign types to choose from, including Search, Display, Shopping, and Video. For your first campaign, we recommend starting with a Search campaign.
                    </li>
                    <li>
                      <strong className="text-foreground">Select your campaign goal:</strong> What do you want to achieve with your campaign? Do you want to get more website traffic, more phone calls, or more leads?
                    </li>
                    <li>
                      <strong className="text-foreground">Choose your location and language targeting:</strong> Where are your customers located? What language do they speak?
                    </li>
                    <li>
                      <strong className="text-foreground">Set your budget and bidding:</strong> How much do you want to spend per day? How much are you willing to pay per click?
                    </li>
                    <li>
                      <strong className="text-foreground">Write your ads:</strong> Your ads should be clear, concise, and compelling. They should also include a strong call to action.
                    </li>
                    <li>
                      <strong className="text-foreground">Choose your keywords:</strong> What search terms are your potential customers using to find businesses like yours? Use Google's Keyword Planner to find relevant keywords.
                    </li>
                  </ol>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Remember, your ads should direct traffic to optimised landing pages. If you need help with your website, check out our <Link to="/services/website-design" className="text-primary hover:text-primary/80 font-semibold">web design services</Link>.
                  </p>
                </div>
              </section>

              {/* Section: Measuring Results */}
              <section id="measuring-results" className="mb-16 relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/5 blur-2xl animate-float" />
                
                <img 
                  src={googleAdsResults} 
                  alt="Google Ads performance dashboard showing positive ROI and conversion metrics" 
                  className="w-full h-auto rounded-lg shadow-elegant mb-8"
                />

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mr-4 shadow-glow">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Measuring Your Results
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Once your campaign is live, you need to track your results to see what's working and what's not. Here are a few key metrics to track:
                  </p>

                  <ul className="space-y-4 text-lg text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Clicks:</strong> The number of times your ad has been clicked.
                    </li>
                    <li>
                      <strong className="text-foreground">Impressions:</strong> The number of times your ad has been shown.
                    </li>
                    <li>
                      <strong className="text-foreground">Click-through rate (CTR):</strong> The percentage of people who see your ad and click on it.
                    </li>
                    <li>
                      <strong className="text-foreground">Cost per click (CPC):</strong> The average amount you pay for each click.
                    </li>
                    <li>
                      <strong className="text-foreground">Conversions:</strong> The number of times someone takes a desired action on your website, such as filling out a form or making a purchase.
                    </li>
                  </ul>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    By tracking these metrics, you can make informed decisions about how to optimise your campaigns for better results. Consider pairing your Google Ads campaigns with <Link to="/services/facebook-ads" className="text-primary hover:text-primary/80 font-semibold">Facebook advertising</Link> for a comprehensive multi-channel approach.
                  </p>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-16">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Conclusion
                  </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Google Ads can be a powerful tool for growing your Australian small business. By following the steps in this guide, you can set up a successful campaign and start attracting new customers.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Key Takeaways:</strong>
                  </p>

                  <ul className="space-y-3 text-lg text-muted-foreground">
                    <li>Google Ads connects you with people actively searching for your products or services</li>
                    <li>Start with a realistic budget and scale up as you see results</li>
                    <li>Track the right metrics to optimise your campaigns for profitability</li>
                    <li>Combine Google Ads with other marketing strategies for maximum impact</li>
                  </ul>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Final Tip:</strong> Don't be discouraged if you don't see immediate results. Google Ads success often requires testing, refinement, and patience. Monitor your campaigns regularly, make data-driven adjustments, and keep learning.
                  </p>

                  <p className="text-lg font-semibold text-foreground">
                    Need help with your Google Ads campaigns? Contact Odin Digital today for a free consultation!
                  </p>
                </div>
              </section>

              {/* Final CTA */}
              <Card className="p-8 md:p-12 mb-16 bg-gradient-primary text-white border-0 shadow-glow relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/10 blur-3xl animate-float" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/10 blur-3xl animate-float-delayed" />
                <div className="relative z-10 text-center">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Take Your Digital Marketing to the Next Level?
                  </h3>
                  <p className="text-xl mb-8 text-white/90">
                    Get a free, no-obligation marketing strategy session with our experts.
                  </p>
                  <Button asChild size="lg" variant="secondary" className="shadow-lg text-lg px-8 py-6">
                    <Link to="/contact">
                      Get Your Free Strategy Session
                    </Link>
                  </Button>
                </div>
              </Card>

              {/* Author Bio */}
              <Card className="p-8 border-primary/20 shadow-elegant backdrop-blur-sm bg-card/80 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-accent/5 blur-2xl" />
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 relative z-10">
                  <img 
                    src={odinTeam} 
                    alt="Odin Digital Team" 
                    className="w-32 h-32 rounded-full object-cover shadow-elegant"
                  />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Odin Digital Team</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The Odin Digital Team consists of experienced digital marketing strategists, SEO specialists, and content creators dedicated to helping Australian businesses achieve exponential growth through data-driven strategies.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </article>
        
        <RelatedArticles articles={relatedArticles} />

        <Footer />
      </div>
    </>
  );
};

export default GoogleAdsGuide;
