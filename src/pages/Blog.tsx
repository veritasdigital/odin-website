import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Calendar, Clock, ArrowRight, User, TrendingUp } from "lucide-react";
import contentMatrixImage from "@/assets/content-marketing-matrix.jpg";

const Blog = () => {
  const { openForm } = useMarketingForm();

  const blogPosts = [
    {
      id: 1,
      title: "The 7 Deadly Sins of SEO: Are You Guilty of These Common Mistakes?",
      excerpt: "Discover the seven most common SEO mistakes that can sabotage your rankings and learn how to achieve SEO redemption with proven strategies.",
      image: "/api/placeholder/600/400",
      author: "Odin Digital Team",
      date: "March 20, 2024",
      readTime: "12 min read",
      category: "SEO",
      featured: true
    },
    {
      id: 2,
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
      id: 3,
      title: "Google Ads Performance Max: The Complete Guide for 2024",
      excerpt: "Discover how Performance Max campaigns can revolutionize your Google Ads strategy and drive better results across all Google properties.",
      image: "/api/placeholder/600/400",
      author: "Lucas Durante",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Paid Advertising"
    },
    {
      id: 4,
      title: "Local SEO Strategies That Actually Work in 2024",
      excerpt: "Essential local SEO tactics that help businesses dominate their local market and attract more customers from their area.",
      image: "/api/placeholder/600/400",
      author: "Sarah Marketing",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "SEO"
    },
    {
      id: 5,
      title: "Social Media Marketing Trends: What's Working Now",
      excerpt: "Stay ahead of the curve with the latest social media marketing trends and strategies that are driving engagement and conversions.",
      image: "/api/placeholder/600/400",
      author: "Digital Team",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Social Media"
    },
    {
      id: 6,
      title: "Email Marketing Automation: From Setup to Scale",
      excerpt: "Build email marketing funnels that nurture leads and convert prospects into loyal customers with proven automation strategies.",
      image: "/api/placeholder/600/400",
      author: "Marketing Automation",
      date: "February 22, 2024",
      readTime: "15 min read",
      category: "Email Marketing"
    },
    {
      id: 7,
      title: "Conversion Rate Optimization: The Complete Blueprint",
      excerpt: "Turn more visitors into customers with data-driven CRO strategies that have increased conversion rates by up to 300%.",
      image: "/api/placeholder/600/400",
      author: "CRO Specialist",
      date: "February 15, 2024",
      readTime: "11 min read",
      category: "CRO"
    }
  ];

  const categories = ["All", "Content Marketing", "Paid Advertising", "SEO", "Social Media", "Email Marketing", "CRO"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MarketingFormModal />
      <SideTab />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            Digital Marketing Insights
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights, proven strategies, and actionable tips from Australia's leading digital marketing agency.
          </p>
          <Button variant="cta" size="xl" onClick={openForm}>
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
                  <Button variant="outline" className="w-fit group">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
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
              <Card key={post.id} className="overflow-hidden hover:shadow-glow transition-all duration-300 group">
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
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 gradient-hero">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <TrendingUp className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Stay Ahead of the Competition
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Get the latest digital marketing insights, strategies, and industry updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <Button variant="cta" size="lg">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-white/70">
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