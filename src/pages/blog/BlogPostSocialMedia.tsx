import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ChevronRight, Coffee, Target, Camera, Users, BarChart3, TrendingUp, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/blog/facebook-ads-cafe-hero.jpg";
import strategyImage from "@/assets/blog/facebook-ads-strategy-realistic.jpg";
import foodVisualsImage from "@/assets/blog/facebook-ads-food-visuals.jpg";
import successMetricsImage from "@/assets/blog/facebook-ads-success-metrics.jpg";
import odinTeamImage from "@/assets/odin-team-professional.jpg";

const BlogPostSocialMedia = () => {
  const publishDate = "15 January 2025";

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://odindigital.com.au/blog/blog-post-social-media"
    },
    "headline": "Facebook Ads for Australian Cafes & Restaurants: A Recipe for Success",
    "description": "Struggling to get more bums on seats in your Australian cafe or restaurant? Our guide to Facebook Ads will show you how to create targeted campaigns that attract local foodies and turn them into regular customers.",
    "image": "https://odindigital.com.au/images/blog/blog-post-social-media-featured.jpg",
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
        "name": "Facebook Ads for Australian Cafes & Restaurants: A Recipe for Success"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Facebook Ads for Australian Cafes & Restaurants | Odin Digital</title>
        <meta name="description" content="Struggling to get more bums on seats in your Australian cafe or restaurant? Our guide to Facebook Ads will show you how to create targeted campaigns that attract local foodies and turn them into regular customers." />
        <script type="application/ld+json">
          {JSON.stringify(blogPostingSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <article className="min-h-screen bg-background">
        {/* Breadcrumb Navigation */}
        <nav className="container mx-auto px-4 py-6">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <ChevronRight className="h-4 w-4" />
            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <ChevronRight className="h-4 w-4" />
            <li className="text-foreground font-medium">Facebook Ads for Australian Cafes & Restaurants</li>
          </ol>
        </nav>

        {/* Hero Section with Enhanced Design Elements */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
          {/* Animated Background Blobs - Homepage Style */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute top-64 right-1/3 w-3 h-3 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-48 left-1/2 w-2 h-2 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2.5s' }}></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm rounded-full mb-6 border border-primary/20 animate-fade-in">
                <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Social Media Strategy</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="block mb-2">Facebook Ads for</span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Australian Cafes & Restaurants:</span>
                <span className="block mt-2">A Recipe for Success</span>
              </h1>
              <div className="flex items-center justify-center gap-4 text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <span className="font-medium">By Odin Digital Team</span>
                <span>•</span>
                <time dateTime="2025-01-15" className="font-medium">{publishDate}</time>
                <span>•</span>
                <span className="font-medium">5 min read</span>
              </div>
            </div>
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl animate-fade-in transform hover:scale-[1.02] transition-transform duration-500" style={{ animationDelay: '0.6s' }}>
              <div className="relative">
                {/* Gradient Ring around image */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-lg"></div>
                <div className="relative rounded-2xl overflow-hidden bg-white ring-1 ring-primary/20">
                  <img 
                    src={heroImage} 
                    alt="Modern Australian cafe with customers enjoying food and coffee" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-16">
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-background border border-primary/10 shadow-lg">
                <div className="absolute top-4 left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
                <p className="text-xl text-muted-foreground leading-relaxed relative z-10">
                  Running a cafe or restaurant in Australia is a tough gig. The competition is fierce, and it can be hard to stand out from the crowd. You know you need to get the word out, but traditional advertising is expensive and often ineffective.
                </p>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mt-6">
                That's where <Link to="/services/facebook-ads" className="text-primary font-semibold hover:underline decoration-2 decoration-primary/30 hover:decoration-primary transition-colors">Facebook Ads</Link> comes in. With over 16 million active users in Australia, Facebook is a powerful tool for reaching your target audience. You can target people based on their location, interests, and even their past behaviour. This means you can get your ads in front of people who are most likely to be interested in your cafe or restaurant.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                This guide will show you how to create a successful <strong>Facebook Ads campaign</strong> for your Australian cafe or restaurant. We'll cover everything from setting up your campaign to creating ads that get results.
              </p>
            </div>

            {/* Table of Contents with Fun Design */}
            <Card className="mb-16 border-2 border-primary/20 shadow-xl bg-gradient-to-br from-white to-muted/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              <CardContent className="p-8 relative z-10">
                <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                    <Coffee className="h-7 w-7 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Table of Contents</span>
                </h2>
                <nav className="space-y-3">
                  <a href="#why-facebook-ads" className="block text-lg text-primary hover:underline font-semibold hover:translate-x-2 transition-transform duration-200 flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    Why Facebook Ads are Perfect for Cafes and Restaurants
                  </a>
                  <a href="#setting-up-campaign" className="block text-lg text-primary hover:underline font-semibold hover:translate-x-2 transition-transform duration-200 flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    Setting Up Your Facebook Ads Campaign
                  </a>
                  <a href="#creating-ads" className="block text-lg text-primary hover:underline font-semibold hover:translate-x-2 transition-transform duration-200 flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    Creating Mouth-Watering Ads
                  </a>
                  <a href="#targeting" className="block text-lg text-primary hover:underline font-semibold hover:translate-x-2 transition-transform duration-200 flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    Targeting the Right People
                  </a>
                  <a href="#measuring-success" className="block text-lg text-primary hover:underline font-semibold hover:translate-x-2 transition-transform duration-200 flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    Measuring Your Success
                  </a>
                </nav>
              </CardContent>
            </Card>

            {/* Section 1: Why Facebook Ads with Enhanced Visual Header */}
            <section id="why-facebook-ads" className="mb-20 scroll-mt-20">
              <div className="relative mb-8">
                {/* Decorative Background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent rounded-2xl blur-xl"></div>
                
                <div className="relative flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                    Why Facebook Ads are Perfect for Cafes and Restaurants
                  </h2>
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-primary/20 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Hyper-local targeting</h3>
                        <p className="text-muted-foreground">You can target people who live or work near your cafe or restaurant.</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 bg-gradient-to-br from-secondary/5 to-transparent border-secondary/20 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-secondary/10 rounded-lg">
                        <Target className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Interest-based targeting</h3>
                        <p className="text-muted-foreground">You can target people who are interested in food, coffee, dining out, and other related topics.</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 bg-gradient-to-br from-accent/5 to-transparent border-accent/20 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Camera className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Visual platform</h3>
                        <p className="text-muted-foreground">Facebook is a visual platform, which is perfect for showcasing your delicious food and drinks.</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-primary/20 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Cost-effective</h3>
                        <p className="text-muted-foreground">You can start with a small budget and scale up as you see results.</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              <div className="mt-10 rounded-2xl overflow-hidden shadow-2xl relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden bg-white ring-1 ring-primary/10">
                  <img 
                    src={strategyImage} 
                    alt="Marketing team discussing Facebook advertising strategy" 
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </section>

            {/* Mid-Post CTA with Enhanced Design */}
            <Card className="mb-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5 border-2 border-primary/30 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
              <CardContent className="p-10 text-center relative z-10">
                <div className="max-w-2xl mx-auto">
                  <div className="inline-block p-3 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ready to Fill Your Tables with Facebook Ads?</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Our team of <Link to="/services/social-media" className="text-primary font-bold hover:underline decoration-2">social media advertising experts</Link> can help you create campaigns that drive real results for your cafe or restaurant.
                  </p>
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <Link to="/contact">Get Your Free Strategy Session</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Setting Up Campaign with Visual Header */}
            <section id="setting-up-campaign" className="mb-20 scroll-mt-20">
              <div className="relative mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/10 via-primary/5 to-transparent rounded-2xl blur-xl"></div>
                
                <div className="relative flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-secondary to-primary rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent leading-tight">
                    Setting Up Your Facebook Ads Campaign
                  </h2>
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                <ol className="space-y-4">
                  <li><strong>Choose your objective:</strong> What do you want to achieve with your campaign? Do you want to increase brand awareness, drive website traffic, or get more people to claim an offer?</li>
                  <li><strong>Define your audience:</strong> Who do you want to reach with your ads? Be as specific as possible.</li>
                  <li><strong>Set your budget:</strong> How much do you want to spend per day or per campaign?</li>
                  <li><strong>Choose your ad placements:</strong> Where do you want your ads to appear? You can choose from Facebook, Instagram, Messenger, and the Audience Network.</li>
                </ol>
                <p>
                  If you're new to Facebook advertising, consider working with a professional <Link to="/services/facebook-ads" className="text-primary font-semibold hover:underline">Facebook Ads agency</Link> to ensure your campaigns are set up correctly from the start.
                </p>
              </div>
            </section>

            {/* Section 3: Creating Ads with Visual Header + Photo */}
            <section id="creating-ads" className="mb-20 scroll-mt-20">
              <div className="relative mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 via-primary/5 to-transparent rounded-2xl blur-xl"></div>
                
                <div className="relative flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-accent to-primary rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300">
                    <Camera className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent leading-tight">
                    Creating Mouth-Watering Ads
                  </h2>
                </div>
              </div>
              <div className="prose prose-lg max-w-none mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-primary/10 rounded-full">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span><strong className="text-primary">Use high-quality photos and videos:</strong> Your visuals are the most important part of your ad. Make sure they are professional and appetising.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-primary/10 rounded-full">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span><strong className="text-primary">Write compelling copy:</strong> Your ad copy should be short, snappy, and to the point. Use emojis to add some personality.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-primary/10 rounded-full">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span><strong className="text-primary">Include a strong call to action:</strong> Tell people what you want them to do, whether it's "Book Now," "View Menu," or "Get Directions."</span>
                  </li>
                </ul>
              </div>
              <div className="mt-10 rounded-2xl overflow-hidden shadow-2xl relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-primary/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden bg-white ring-1 ring-primary/10">
                  <img 
                    src={foodVisualsImage} 
                    alt="Professional food photography of cafe dishes and coffee" 
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </section>

            {/* Section 4: Targeting with Visual Header */}
            <section id="targeting" className="mb-20 scroll-mt-20">
              <div className="relative mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent rounded-2xl blur-xl"></div>
                
                <div className="relative flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
                    Targeting the Right People
                  </h2>
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                <ul className="space-y-3">
                  <li><strong>Location targeting:</strong> Target people within a certain radius of your cafe or restaurant.</li>
                  <li><strong>Interest targeting:</strong> Target people who have shown an interest in food, coffee, dining out, or your specific cuisine.</li>
                  <li><strong>Custom Audiences:</strong> Upload your customer list to create a Custom Audience and target your existing customers.</li>
                  <li><strong>Lookalike Audiences:</strong> Create a Lookalike Audience to reach people who are similar to your existing customers.</li>
                </ul>
                <p>
                  Understanding your target audience is crucial. Learn more about effective <Link to="/blog/beyond-the-boost-post-a-small-business-guide-to-strategic-paid-advertising" className="text-primary font-semibold hover:underline">strategic advertising approaches</Link> in our comprehensive guide.
                </p>
              </div>
            </section>

            {/* Section 5: Measuring Success with Visual Header + Photo */}
            <section id="measuring-success" className="mb-20 scroll-mt-20">
              <div className="relative mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/10 via-accent/5 to-transparent rounded-2xl blur-xl"></div>
                
                <div className="relative flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-secondary to-accent rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent leading-tight">
                    Measuring Your Success
                  </h2>
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                <ul className="space-y-3">
                  <li><strong>Track your key metrics:</strong> Keep an eye on your reach, engagement, click-through rate, and cost per result.</li>
                  <li><strong>Use the Facebook Pixel:</strong> The Facebook Pixel is a piece of code that you can add to your website to track conversions and measure the return on your ad spend.</li>
                  <li><strong>A/B test your ads:</strong> Test different images, copy, and targeting options to see what works best.</li>
                </ul>
                <p>
                  For more insights on measuring advertising performance, check out our guide on <Link to="/services/google-ads" className="text-primary font-semibold hover:underline decoration-2">Google Ads management</Link> which covers similar measurement principles.
                </p>
              </div>
              <div className="mt-10 rounded-2xl overflow-hidden shadow-2xl relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary/50 to-accent/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden bg-white ring-1 ring-primary/10">
                  <img 
                    src={successMetricsImage} 
                    alt="Cafe owner viewing successful Facebook ads campaign results" 
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Facebook Ads can be a game-changer for your Australian cafe or restaurant. By following the tips in this guide, you can create targeted campaigns that attract new customers and keep them coming back for more.
              </p>
              <p className="text-xl font-semibold">
                Ready to cook up a storm with Facebook Ads? Contact Odin Digital for a free consultation and let us help you create a campaign that gets results!
              </p>
            </div>

            {/* Final CTA Section with Homepage-Style Design */}
            <Card className="mb-16 bg-gradient-to-br from-primary to-secondary text-primary-foreground overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <CardContent className="p-12 md:p-16 text-center relative z-10">
                <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <TrendingUp className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-white drop-shadow-lg">
                  Ready to Take Your Digital Marketing to the Next Level?
                </h2>
                <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-2xl mx-auto font-light">
                  Get a free, no-obligation marketing strategy session with our experts.
                </p>
                <Button asChild size="lg" variant="secondary" className="text-lg px-10 py-7 font-bold shadow-2xl hover:shadow-white/20 transform hover:scale-105 transition-all duration-300">
                  <Link to="/contact">Get Your Free Strategy Session</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Author Bio with Enhanced Design */}
            <Card className="border-2 border-primary/20 shadow-xl bg-gradient-to-br from-white to-muted/20 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary to-secondary rounded-full blur-md"></div>
                    <img 
                      src={odinTeamImage} 
                      alt="Odin Digital Team" 
                      className="relative w-24 h-24 rounded-full object-cover ring-2 ring-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">About the Odin Digital Team</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      The Odin Digital Team consists of experienced digital marketing strategists, SEO specialists, and content creators dedicated to helping Australian businesses achieve exponential growth through data-driven strategies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPostSocialMedia;
