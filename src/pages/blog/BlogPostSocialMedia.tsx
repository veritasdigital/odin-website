import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ChevronRight, Coffee, Target, Camera, Users, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/blog/facebook-ads-cafe-hero.jpg";
import strategyImage from "@/assets/blog/facebook-ads-strategy.jpg";
import foodVisualsImage from "@/assets/blog/facebook-ads-food-visuals.jpg";
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

        {/* Hero Section with Floating Circles */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
          {/* Animated Background Circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-40 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-primary">Social Media Strategy</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                Facebook Ads for Australian Cafes & Restaurants: A Recipe for Success
              </h1>
              <div className="flex items-center justify-center gap-4 text-muted-foreground mb-8">
                <span>By Odin Digital Team</span>
                <span>•</span>
                <time dateTime="2025-01-15">{publishDate}</time>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Modern Australian cafe with customers enjoying food and coffee" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Running a cafe or restaurant in Australia is a tough gig. The competition is fierce, and it can be hard to stand out from the crowd. You know you need to get the word out, but traditional advertising is expensive and often ineffective.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                That's where <Link to="/services/facebook-ads" className="text-primary font-semibold hover:underline">Facebook Ads</Link> comes in. With over 16 million active users in Australia, Facebook is a powerful tool for reaching your target audience. You can target people based on their location, interests, and even their past behaviour. This means you can get your ads in front of people who are most likely to be interested in your cafe or restaurant.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                This guide will show you how to create a successful <strong>Facebook Ads campaign</strong> for your Australian cafe or restaurant. We'll cover everything from setting up your campaign to creating ads that get results.
              </p>
            </div>

            {/* Table of Contents */}
            <Card className="mb-12 border-2 border-primary/20">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Coffee className="h-6 w-6 text-primary" />
                  Table of Contents
                </h2>
                <nav className="space-y-2">
                  <a href="#why-facebook-ads" className="block text-primary hover:underline font-medium">
                    Why Facebook Ads are Perfect for Cafes and Restaurants
                  </a>
                  <a href="#setting-up-campaign" className="block text-primary hover:underline font-medium">
                    Setting Up Your Facebook Ads Campaign
                  </a>
                  <a href="#creating-ads" className="block text-primary hover:underline font-medium">
                    Creating Mouth-Watering Ads
                  </a>
                  <a href="#targeting" className="block text-primary hover:underline font-medium">
                    Targeting the Right People
                  </a>
                  <a href="#measuring-success" className="block text-primary hover:underline font-medium">
                    Measuring Your Success
                  </a>
                </nav>
              </CardContent>
            </Card>

            {/* Section 1: Why Facebook Ads are Perfect */}
            <section id="why-facebook-ads" className="mb-16 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Why Facebook Ads are Perfect for Cafes and Restaurants
                </h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <ul className="space-y-3">
                  <li><strong>Hyper-local targeting:</strong> You can target people who live or work near your cafe or restaurant.</li>
                  <li><strong>Interest-based targeting:</strong> You can target people who are interested in food, coffee, dining out, and other related topics.</li>
                  <li><strong>Visual platform:</strong> Facebook is a visual platform, which is perfect for showcasing your delicious food and drinks.</li>
                  <li><strong>Cost-effective:</strong> You can start with a small budget and scale up as you see results.</li>
                </ul>
              </div>
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={strategyImage} 
                  alt="Marketing team discussing Facebook advertising strategy" 
                  className="w-full h-auto"
                />
              </div>
            </section>

            {/* Mid-Post CTA */}
            <Card className="mb-16 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Fill Your Tables with Facebook Ads?</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Our team of <Link to="/services/social-media" className="text-primary font-semibold hover:underline">social media advertising experts</Link> can help you create campaigns that drive real results for your cafe or restaurant.
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/contact">Get Your Free Strategy Session</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Section 2: Setting Up Campaign */}
            <section id="setting-up-campaign" className="mb-16 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Setting Up Your Facebook Ads Campaign
                </h2>
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

            {/* Section 3: Creating Ads */}
            <section id="creating-ads" className="mb-16 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Creating Mouth-Watering Ads
                </h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <ul className="space-y-3">
                  <li><strong>Use high-quality photos and videos:</strong> Your visuals are the most important part of your ad. Make sure they are professional and appetising.</li>
                  <li><strong>Write compelling copy:</strong> Your ad copy should be short, snappy, and to the point. Use emojis to add some personality.</li>
                  <li><strong>Include a strong call to action:</strong> Tell people what you want them to do, whether it's "Book Now," "View Menu," or "Get Directions."</li>
                </ul>
              </div>
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={foodVisualsImage} 
                  alt="Professional food photography of cafe dishes and coffee" 
                  className="w-full h-auto"
                />
              </div>
            </section>

            {/* Section 4: Targeting */}
            <section id="targeting" className="mb-16 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Targeting the Right People
                </h2>
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

            {/* Section 5: Measuring Success */}
            <section id="measuring-success" className="mb-16 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Measuring Your Success
                </h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <ul className="space-y-3">
                  <li><strong>Track your key metrics:</strong> Keep an eye on your reach, engagement, click-through rate, and cost per result.</li>
                  <li><strong>Use the Facebook Pixel:</strong> The Facebook Pixel is a piece of code that you can add to your website to track conversions and measure the return on your ad spend.</li>
                  <li><strong>A/B test your ads:</strong> Test different images, copy, and targeting options to see what works best.</li>
                </ul>
                <p>
                  For more insights on measuring advertising performance, check out our guide on <Link to="/services/google-ads" className="text-primary font-semibold hover:underline">Google Ads management</Link> which covers similar measurement principles.
                </p>
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

            {/* Final CTA Section */}
            <Card className="mb-16 bg-primary text-primary-foreground overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80"></div>
              <CardContent className="p-12 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Take Your Digital Marketing to the Next Level?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Get a free, no-obligation marketing strategy session with our experts.
                </p>
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                  <Link to="/contact">Get Your Free Strategy Session</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Author Bio */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img 
                    src={odinTeamImage} 
                    alt="Odin Digital Team" 
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">About the Odin Digital Team</h3>
                    <p className="text-muted-foreground leading-relaxed">
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
