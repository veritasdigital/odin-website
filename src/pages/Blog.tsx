import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Calendar, Clock, ArrowRight, User, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import contentMatrixImage from "@/assets/content-marketing-matrix.jpg";
import seoDeadlySins from "@/assets/blog/seo-deadly-sins.jpg";
import googleAdsPerformanceMax from "@/assets/blog/google-ads-performance-max.jpg";
import localSeoStrategies from "@/assets/blog/local-seo-strategies.jpg";
import socialMediaTrends from "@/assets/blog/social-media-trends.jpg";
import emailAutomation from "@/assets/blog/email-automation.jpg";
import conversionOptimization from "@/assets/blog/conversion-optimization.jpg";
import keywordResearchAI from "@/assets/blog/keyword-research-ai.jpg";
import aiSeoHeroImage from "@/assets/blog/ai-seo-hero.jpg";
import localSeo2026Image from "@/assets/blog/local-seo-2026.jpg";
import aiSeoFutureProofImage from "@/assets/blog/ai-seo-future-proof.jpg";
import willAIReplaceSEOImage from "@/assets/blog/will-ai-replace-seo-featured.jpg";
import contentMarketingHeroImage from "@/assets/blog/content-marketing-hero.jpg";
import contentMarketingMatrixImage from "@/assets/blog/content-marketing-matrix-hero.jpg";
import paidAdvertisingHeroImage from "@/assets/blog/paid-advertising-hero.jpg";
import googleAdsHeroImage from "@/assets/blog/google-ads-hero.jpg";
import facebookAdsCafeHeroImage from "@/assets/blog/facebook-ads-cafe-hero.jpg";
import tiktokBusinessHeroImage from "@/assets/blog/tiktok-business-hero-new.jpg";
import emailListBuildingHeroImage from "@/assets/blog/email-list-building-hero.jpg";
import conversionOptimizationHeroImage from "@/assets/blog/conversion-optimization.jpg";
import croConversionOptimizationImage from "@/assets/blog/cro-conversion-optimization.jpg";
import websiteRedesignImage from "@/assets/blog/website-redesign-signs.jpg";
import shopifySEOImage from "@/assets/blog/shopify-seo-hero.jpg";
import marketingAutomationImage from "@/assets/blog/marketing-automation-hero.jpg";
import digitalMarketingMistakesImage from "@/assets/blog/digital-marketing-mistakes-hero.jpg";
import digitalMarketingStrategy2026Image from "@/assets/blog/digital-marketing-strategy-2026.jpg";
import dataPrivacy2026Image from "@/assets/blog/data-privacy-2026-hero.jpg";

const Blog = () => {
  const { openForm } = useMarketingForm();

  const blogPosts = [
    {
      id: 28,
      title: "Data Privacy in 2026: What Australian Businesses Need to Know",
      excerpt: "Learn about data privacy in 2026: what australian businesses need to know with this comprehensive guide from Odin Digital, Australia's leading digital marketing agency.",
      image: dataPrivacy2026Image,
      author: "Odin Digital Team",
      date: "15 January 2025",
      readTime: "14 min read",
      category: "Data Privacy",
      featured: false,
      link: "/blog/data-privacy-in-2026-australian-businesses"
    },
    {
      id: 27,
      title: "Putting It All Together: How to Build a Cohesive Digital Marketing Strategy for 2026",
      excerpt: "Learn about putting it all together: how to build a cohesive digital marketing strategy for 2026 with this comprehensive guide from Odin Digital, Australia's leading digital marketing agency.",
      image: digitalMarketingStrategy2026Image,
      author: "Odin Digital Team",
      date: "15 January 2025",
      readTime: "15 min read",
      category: "Digital Marketing Strategy",
      featured: false,
      link: "/blog/how-to-build-a-cohesive-digital-marketing-strategy-for-2026"
    },
    {
      id: 26,
      title: "The 5 Most Common Digital Marketing Mistakes Small Businesses Make (and How to Fix Them)",
      excerpt: "Learn about the 5 most common digital marketing mistakes small businesses make (and how to fix them) with this comprehensive guide from Odin Digital, Australia's leading digital marketing agency.",
      image: digitalMarketingMistakesImage,
      author: "Odin Digital Team",
      date: "15 January 2025",
      readTime: "12 min read",
      category: "Digital Marketing",
      featured: false,
      link: "/blog/the-5-most-common-digital-marketing-mistakes-small-businesses-make"
    },
    {
      id: 25,
      title: "Marketing Automation for Beginners: How to Nurture Leads While You Sleep",
      excerpt: "Learn about marketing automation for beginners: how to nurture leads while you sleep with this comprehensive guide from Odin Digital, Australia's leading digital marketing agency.",
      image: marketingAutomationImage,
      author: "Odin Digital Team",
      date: "15 January 2025",
      readTime: "14 min read",
      category: "Marketing Automation",
      featured: false,
      link: "/blog/marketing-automation-for-beginners"
    },
    {
      id: 24,
      title: "Shopify SEO: How to Get Your Online Store to the Top of Google",
      excerpt: "Want more organic traffic to your Shopify store? Our comprehensive Shopify SEO guide for Australian businesses will show you how to optimise your online store and rank higher on Google.",
      image: shopifySEOImage,
      author: "Odin Digital Team",
      date: "15 January 2025",
      readTime: "5 min read",
      category: "E-commerce",
      featured: false,
      link: "/blog/blog-post-ecommerce"
    },
    {
      id: 23,
      title: "10 Signs It's Time for a Website Redesign for Your Aussie Business",
      excerpt: "Is your website holding your business back? Discover the 10 telltale signs that it's time for a website redesign and learn how a fresh, modern website can help you attract more customers and grow your Australian business.",
      image: websiteRedesignImage,
      author: "Odin Digital Team",
      date: "15 January 2025",
      readTime: "5 min read",
      category: "Web Design",
      featured: false,
      link: "/blog/blog-post-web-design"
    },
    {
      id: 22,
      title: "Conversion Rate Optimisation (CRO): The Secret to Getting More From Your Existing Traffic",
      excerpt: "Learn about conversion rate optimisation (cro): the secret to getting more from your existing traffic with this comprehensive guide from Odin Digital, Australia's leading digital marketing agency.",
      image: croConversionOptimizationImage,
      author: "Odin Digital Team",
      date: "15 January 2025",
      readTime: "13 min read",
      category: "CRO",
      featured: false,
      link: "/blog/conversion-rate-optimisation-cro-secret-to-getting-more-from-existing-traffic"
    },
    {
      id: 21,
      title: "Google Analytics 4 for Beginners: A Guide for Aussie Business Owners",
      excerpt: "Confused by Google Analytics 4? Our beginner-friendly guide for Australian business owners will help you understand the basics, set up your account, and start tracking your website's performance.",
      image: conversionOptimizationHeroImage,
      author: "Odin Digital Team",
      date: "15 January 2025",
      readTime: "5 min read",
      category: "CRO",
      featured: false,
      link: "/blog/blog-post-analytics-cro"
    },
    {
      id: 20,
      title: "How to Build an Email List from Scratch for Your Australian Business",
      excerpt: "Want to build an email list but don't know where to start? Our practical guide for Australian businesses will show you proven strategies to grow your list from zero to thousands of engaged subscribers.",
      image: emailListBuildingHeroImage,
      author: "Odin Digital Team",
      date: "15 January 2025",
      readTime: "5 min read",
      category: "Email Marketing",
      featured: false,
      link: "/blog/blog-post-email-marketing"
    },
    {
      id: 17,
      title: "Google Ads for Dummies: A Guide for Australian Small Business Owners",
      excerpt: "Want to get your Australian small business in front of more customers? Learn the basics of setting up and running a successful Google Ads campaign, even if you're a complete beginner.",
      image: googleAdsHeroImage,
      author: "Odin Digital Team",
      date: "15 January 2025",
      readTime: "5 min read",
      category: "Paid Advertising",
      featured: false,
      link: "/blog/google-ads-guide"
    },
    {
      id: 18,
      title: "Facebook Ads for Australian Cafes & Restaurants: A Recipe for Success",
      excerpt: "Struggling to get more bums on seats in your Australian cafe or restaurant? Learn how to create targeted Facebook Ads campaigns that attract local foodies and turn them into regular customers.",
      image: facebookAdsCafeHeroImage,
      author: "Odin Digital Team",
      date: "15 January 2025",
      readTime: "5 min read",
      category: "Social Media",
      featured: false,
      link: "/blog/blog-post-social-media"
    },
    {
      id: 19,
      title: "The Rise of TikTok for Business: Is It Right for Your Brand?",
      excerpt: "Learn about the rise of TikTok for business and whether it's the right platform for your brand with this comprehensive guide from Odin Digital.",
      image: tiktokBusinessHeroImage,
      author: "Odin Digital Team",
      date: "15 January 2025",
      readTime: "13 min read",
      category: "Social Media",
      featured: false,
      link: "/blog/the-rise-of-tiktok-for-business-is-it-right-for-your-brand"
    },
    {
      id: 1,
      title: "Will AI Replace SEO? A Data-Backed Answer for Worried Marketers",
      excerpt: "The question every SEO professional is asking. Dive into the data, understand the impact of AI Overviews on organic traffic, and discover why strategic human oversight is more critical than ever.",
      image: willAIReplaceSEOImage,
      author: "Odin Digital Team",
      date: "15 January 2025",
      readTime: "15 min read",
      category: "AI & SEO",
      featured: true,
      link: "/blog/will-ai-replace-seo-a-data-backed-answer-for-worried-marketers"
    },
    {
      id: 2,
      title: "How to Write Blog Posts That Your Aussie Customers Will Actually Read",
      excerpt: "Are your blog posts falling flat? Learn how to write engaging, SEO-friendly blog posts that your Australian customers will love to read and share.",
      image: contentMarketingHeroImage,
      author: "Odin Digital Team",
      date: "15 January 2025",
      readTime: "5 min read",
      category: "Content Marketing",
      featured: false,
      link: "/blog/blog-post-content-marketing"
    },
    {
      id: 3,
      title: "The Content Marketing Matrix: How to Create Content That Actually Converts",
      excerpt: "Learn about the content marketing matrix: how to create content that actually converts with this comprehensive guide from Odin Digital.",
      image: contentMarketingMatrixImage,
      author: "Odin Digital Team",
      date: "15 January 2025",
      readTime: "13 min read",
      category: "Content Marketing",
      featured: false,
      link: "/blog/the-content-marketing-matrix-how-to-create-content-that-actually-converts"
    },
    {
      id: 16,
      title: "Beyond the Boost Post: A Small Business Guide to Strategic Paid Advertising",
      excerpt: "Move beyond random acts of advertising and build a data-driven strategy that delivers measurable ROI.",
      image: paidAdvertisingHeroImage,
      author: "Odin Digital Team",
      date: "15 January 2025",
      readTime: "13 min read",
      category: "Paid Advertising",
      featured: false,
      link: "/blog/beyond-the-boost-post-a-small-business-guide-to-strategic-paid-advertising"
    },
    {
      id: 4,
      title: "AI SEO is Here: How to Future-Proof Your Organic Strategy in 2026",
      excerpt: "The future of search is conversational and AI-driven. Learn how to adapt your SEO strategy for AI Overviews, Answer Engine Optimization, and the evolving digital landscape of 2026.",
      image: aiSeoFutureProofImage,
      author: "Odin Digital Team",
      date: "January 2026",
      readTime: "10 min read",
      category: "AI & SEO",
      featured: false,
      link: "/blog/ai-seo-future-proof-organic-strategy-2026"
    },
    {
      id: 5,
      title: "Local SEO in 2026: The Complete Guide to Dominating Your Local Market",
      excerpt: "Master the art of local SEO with this comprehensive 2026 guide. Learn proven strategies to boost your Google Business Profile, get more reviews, and dominate your local market.",
      image: localSeo2026Image,
      author: "Odin Digital Team",
      date: "January 15, 2025",
      readTime: "12 min read",
      category: "SEO",
      featured: false,
      link: "/blog/local-seo-in-2026-complete-guide-to-dominating-your-local-market"
    },
    {
      id: 6,
      title: "How AI SEO Works: A Non-Technical Guide for Business Leaders",
      excerpt: "Demystify AI SEO for your business. Learn how search engines use AI to understand user intent and discover practical strategies to create content that ranks.",
      image: aiSeoHeroImage,
      author: "Odin Digital Team",
      date: "January 15, 2025",
      readTime: "13 min read",
      category: "AI & SEO",
      featured: false,
      link: "/blog/how-ai-seo-works-a-non-technical-guide-for-business-leaders"
    },
    {
      id: 7,
      title: "Local SEO for Tradies: 10 Tips to Get More Local Customers",
      excerpt: "Are you a tradie struggling to get found online? Our local SEO guide will show you 10 practical tips to rank higher in local search results and attract more customers in your area.",
      image: localSeoStrategies,
      author: "Odin Digital Team",
      date: "January 16, 2025",
      readTime: "5 min read",
      category: "SEO",
      featured: false,
      link: "/blog/blog-post-local-seo"
    },
    {
      id: 8,
      title: "The Ultimate SEO Checklist for Australian Small Businesses in 2025",
      excerpt: "Is your small business website struggling to get noticed on Google? Our ultimate SEO checklist will guide you through the essential steps to improve your search engine rankings, attract more customers, and grow your business.",
      image: keywordResearchAI,
      author: "Odin Digital Team",
      date: "January 12, 2025",
      readTime: "10 min read",
      category: "SEO",
      featured: false,
      link: "/blog/blog-post-seo-checklist"
    },
    {
      id: 9,
      title: "The 7 Deadly Sins of SEO: Are You Guilty of These Common Mistakes?",
      excerpt: "Discover the seven most common SEO mistakes that can sabotage your rankings and learn how to achieve SEO redemption with proven strategies.",
      image: seoDeadlySins,
      author: "Odin Digital Team",
      date: "March 20, 2024",
      readTime: "12 min read",
      category: "SEO",
      featured: false
    },
    {
      id: 10,
      title: "The Content Marketing Matrix: A Simple Framework for Creating Content That Attracts, Engages, and Converts",
      excerpt: "Content marketing can often feel like a chaotic, never-ending treadmill. Learn our simple framework to bring clarity and strategic intent to your content efforts.",
      image: contentMatrixImage,
      author: "Odin Digital Team",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Content Marketing",
      featured: false
    },
    {
      id: 11,
      title: "Google Ads Performance Max: The Complete Guide for 2024",
      excerpt: "Discover how Performance Max campaigns can revolutionize your Google Ads strategy and drive better results across all Google properties.",
      image: googleAdsPerformanceMax,
      author: "Lucas Durante",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Paid Advertising"
    },
    {
      id: 12,
      title: "Local SEO Strategies That Actually Work in 2024",
      excerpt: "Essential local SEO tactics that help businesses dominate their local market and attract more customers from their area.",
      image: localSeoStrategies,
      author: "Sarah Marketing",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "SEO"
    },
    {
      id: 13,
      title: "Social Media Marketing Trends: What's Working Now",
      excerpt: "Stay ahead of the curve with the latest social media marketing trends and strategies that are driving engagement and conversions.",
      image: socialMediaTrends,
      author: "Digital Team",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Social Media"
    },
    {
      id: 14,
      title: "Email Marketing Automation: From Setup to Scale",
      excerpt: "Build email marketing funnels that nurture leads and convert prospects into loyal customers with proven automation strategies.",
      image: emailAutomation,
      author: "Marketing Automation",
      date: "February 22, 2024",
      readTime: "15 min read",
      category: "Email Marketing"
    },
    {
      id: 15,
      title: "Conversion Rate Optimization: The Complete Blueprint",
      excerpt: "Turn more visitors into customers with data-driven CRO strategies that have increased conversion rates by up to 300%.",
      image: conversionOptimization,
      author: "CRO Specialist",
      date: "February 15, 2024",
      readTime: "11 min read",
      category: "CRO"
    }
  ];

  const categories = ["All", "AI & SEO", "Content Marketing", "Paid Advertising", "SEO", "Social Media", "Email Marketing", "CRO"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MarketingFormModal />
      <SideTab />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 to-background overflow-hidden">
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

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8">
            Digital Marketing Insights
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights, proven strategies, and actionable tips from Australia's leading digital marketing agency.
          </p>
          <Button variant="default" size="xl" onClick={openForm}>
            Get Your Free Marketing Strategy
          </Button>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map(post => (
        <section key={post.id} className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Featured Article</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Insights</h2>
            </div>
            
            <Card className="overflow-hidden hover:shadow-glow transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link to={post.link || "#"}>
                    <Button variant="outline" className="w-fit group">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      ))}

      {/* Category Filter */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Link 
                key={post.id} 
                to={post.link || "#"} 
                className="block"
              >
                <Card className="overflow-hidden hover:shadow-glow transition-all duration-300 group h-full">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-br from-white via-muted/30 to-muted/20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
            Stay Ahead of the Competition
          </h2>
          <p className="text-xl text-charcoal/70 mb-12 leading-relaxed">
            Get the latest digital marketing insights, strategies, and industry updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <Button variant="cta" size="lg" className="whitespace-normal break-words">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-charcoal/60">
            Join 5,000+ business owners getting weekly marketing insights
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Ready to Implement These Strategies?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Our team of digital marketing experts can help you implement these proven strategies for your business.
          </p>
          <Button variant="cta" size="xl" onClick={openForm}>
            Schedule Your Free Strategy Session
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;