import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import heroImage from "@/assets/blog/shopify-seo-hero.jpg";
import teamImage from "@/assets/odin-team-professional.jpg";

const ShopifySEO = () => {
  return (
    <>
      <Helmet>
        <title>Shopify SEO: How to Get Your Online Store to the Top of Google | Odin Digital</title>
        <meta 
          name="description" 
          content="Want more organic traffic to your Shopify store? Our comprehensive Shopify SEO guide for Australian businesses will show you how to optimise your online store and rank higher on Google." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://odindigital.com.au/blog/blog-post-ecommerce"
            },
            "headline": "Shopify SEO: How to Get Your Online Store to the Top of Google",
            "description": "Want more organic traffic to your Shopify store? Our comprehensive Shopify SEO guide for Australian businesses will show you how to optimise your online store and rank higher on Google.",
            "image": "https://odindigital.com.au/images/blog/blog-post-ecommerce-featured.jpg",
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
                "name": "Shopify SEO: How to Get Your Online Store to the Top of Google"
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />
      
      <article className="min-h-screen bg-background pt-20">
        {/* Hero Section with Floating Elements */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-16">
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -bottom-8 left-1/3 w-80 h-80 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Breadcrumbs */}
              <nav className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-8 animate-fade-in">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-foreground">Shopify SEO: How to Get Your Online Store to the Top of Google</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in leading-tight px-2 py-1">
                Shopify SEO: How to Get Your Online Store to the Top of Google
              </h1>
              
              <div className="flex items-center justify-center space-x-6 text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Odin Digital Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>January 15, 2025</span>
                </div>
                <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  5 min read
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <img 
                  src={heroImage} 
                  alt="Shopify store owner optimizing e-commerce SEO on laptop" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Back to Blog Link */}
              <Link 
                to="/blog" 
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Blog</span>
              </Link>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Running a Shopify store is exciting. You've got great products, a beautiful website, and you're ready to make sales. But there's one problem: nobody can find your store on Google.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  You know that SEO (Search Engine Optimisation) is important, but you're not sure where to start. Shopify is a great platform, but it doesn't automatically make your store rank on Google. You need to put in the work to optimise your site.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The good news is that Shopify SEO isn't as complicated as you might think. In this guide, we'll walk you through the essential steps to get your Australian Shopify store ranking higher on Google and attracting more organic traffic.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 mb-12 border border-primary/10">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Table of Contents</h2>
                <nav className="space-y-3">
                  <a href="#why-seo-matters" className="block text-primary hover:text-primary/80 transition-colors hover:translate-x-2 transform duration-200">
                    Why SEO Matters for Your Shopify Store
                  </a>
                  <a href="#keyword-research" className="block text-primary hover:text-primary/80 transition-colors hover:translate-x-2 transform duration-200">
                    Keyword Research for E-commerce
                  </a>
                  <a href="#optimising-product-pages" className="block text-primary hover:text-primary/80 transition-colors hover:translate-x-2 transform duration-200">
                    Optimising Your Product Pages
                  </a>
                  <a href="#optimising-collection-pages" className="block text-primary hover:text-primary/80 transition-colors hover:translate-x-2 transform duration-200">
                    Optimising Your Collection Pages
                  </a>
                  <a href="#seo-friendly-content" className="block text-primary hover:text-primary/80 transition-colors hover:translate-x-2 transform duration-200">
                    Creating SEO-Friendly Content
                  </a>
                  <a href="#technical-seo" className="block text-primary hover:text-primary/80 transition-colors hover:translate-x-2 transform duration-200">
                    Technical SEO for Shopify
                  </a>
                  <a href="#building-backlinks" className="block text-primary hover:text-primary/80 transition-colors hover:translate-x-2 transform duration-200">
                    Building Backlinks
                  </a>
                </nav>
              </div>

              {/* Main Content */}
              <div className="prose prose-lg max-w-none space-y-12">
                <section id="why-seo-matters">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Why SEO Matters for Your Shopify Store</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li><strong>Free traffic:</strong> Unlike paid ads, organic traffic from Google is free. Once you rank for your target keywords, you'll get a steady stream of visitors without paying for each click.</li>
                    <li><strong>High-intent traffic:</strong> People who search on Google are actively looking for products like yours. They're much more likely to buy than someone who stumbles across your ad on social media.</li>
                    <li><strong>Long-term results:</strong> SEO is a long-term investment. Once you rank, you can maintain your position with minimal ongoing effort.</li>
                  </ul>
                </section>

                <section id="keyword-research">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Keyword Research for E-commerce</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Keyword research is the foundation of any successful <Link to="/services/seo" className="text-primary hover:text-primary/80 underline">SEO strategy</Link>. You need to know what search terms your potential customers are using to find products like yours.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Start by brainstorming a list of keywords related to your products. Then, use tools like Google Keyword Planner, Ahrefs, or SEMrush to find related keywords and see how much search volume they have.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    For e-commerce, focus on <strong>product keywords</strong> (e.g., "men's leather wallet") and <strong>long-tail keywords</strong> (e.g., "handmade leather wallet Australia").
                  </p>
                </section>

                <section id="optimising-product-pages">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Optimising Your Product Pages</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Your product pages are the most important pages on your Shopify store. Here's how to optimise them for SEO:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li><strong>Product title:</strong> Include your primary keyword in your product title. Make it descriptive and compelling.</li>
                    <li><strong>Product description:</strong> Write unique, detailed product descriptions that include your target keywords naturally. Don't just copy the manufacturer's description.</li>
                    <li><strong>Images:</strong> Use high-quality images and add descriptive alt text that includes your keywords.</li>
                    <li><strong>URL:</strong> Make sure your product URLs are clean and include your primary keyword.</li>
                    <li><strong>Reviews:</strong> Encourage customers to leave reviews. Reviews add fresh content to your pages and can improve your rankings.</li>
                  </ul>
                </section>

                {/* Mid-Post CTA */}
                <div className="my-16 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white rounded-2xl p-8 md:p-12 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                    <div className="max-w-2xl">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Ready to Dominate Google Search for Your Shopify Store?
                      </h3>
                      <p className="text-lg mb-6 text-white/90">
                        Our SEO experts specialise in e-commerce SEO and can help you attract more organic traffic and increase sales for your Australian online store.
                      </p>
                      <Link to="/services/seo">
                        <Button size="lg" variant="secondary" className="group shadow-xl hover:shadow-2xl transition-all">
                          Get Your Free SEO Audit
                          <ArrowLeft className="ml-2 h-5 w-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <section id="optimising-collection-pages">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Optimising Your Collection Pages</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Collection pages (also called category pages) are important for SEO because they can rank for broader keywords.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li><strong>Collection title:</strong> Include your primary keyword in your collection title.</li>
                    <li><strong>Collection description:</strong> Write a unique description for each collection that includes your target keywords.</li>
                    <li><strong>URL:</strong> Make sure your collection URLs are clean and descriptive.</li>
                  </ul>
                </section>

                <section id="seo-friendly-content">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Creating SEO-Friendly Content</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Blogging is one of the best ways to attract organic traffic to your Shopify store. Write blog posts that answer your customers' questions, solve their problems, and showcase your products.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    For example, if you sell coffee, you could write blog posts like "How to Brew the Perfect Cup of Coffee" or "The Best Coffee Beans for Espresso." This type of content can drive highly relevant traffic to your store and establish you as an authority in your niche.
                  </p>
                </section>

                <section id="technical-seo">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Technical SEO for Shopify</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li><strong>Site speed:</strong> Make sure your Shopify store loads quickly. Use compressed images, choose a fast theme, and minimise the number of apps you use.</li>
                    <li><strong>Mobile-friendliness:</strong> Your store should look great and work well on mobile devices. With over 50% of e-commerce traffic coming from mobile, this is crucial.</li>
                    <li><strong>XML sitemap:</strong> Shopify automatically creates an XML sitemap for you. Make sure it's submitted to Google Search Console.</li>
                    <li><strong>SSL certificate:</strong> Shopify includes a free SSL certificate, so your store should already be secure (HTTPS). This is a ranking factor for Google.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Need help with <Link to="/services/website-design" className="text-primary hover:text-primary/80 underline">website optimisation</Link>? Our team can audit your Shopify store and implement technical improvements to boost your rankings.
                  </p>
                </section>

                <section id="building-backlinks">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Building Backlinks</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Backlinks are links from other websites to your Shopify store. They're one of the most important ranking factors for Google.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Here are a few ways to build backlinks for your Shopify store:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li><strong>Guest blogging:</strong> Write articles for other websites in your industry and include a link back to your store.</li>
                    <li><strong>Influencer outreach:</strong> Reach out to influencers in your niche and ask them to feature your products.</li>
                    <li><strong>PR:</strong> Get featured in online publications and news sites. This not only builds backlinks but also increases brand awareness.</li>
                  </ul>
                </section>

                {/* Conclusion */}
                <section className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl p-8 border border-primary/10">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">The Bottom Line</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Shopify SEO takes time and effort, but the results are worth it. By following the steps in this guide, you can improve your store's search engine rankings, attract more organic traffic, and grow your Australian e-commerce business.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Need help with your Shopify SEO?</strong> Contact Odin Digital today for a free consultation and let us help you get to the top of Google!
                  </p>
                </section>
              </div>

              {/* Final CTA Section */}
              <div className="my-16">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-90"></div>
                  <div className="relative px-8 py-16 md:px-12 md:py-20 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Ready to Take Your Digital Marketing to the Next Level?
                    </h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                      Get a free, no-obligation marketing strategy session with our experts.
                    </p>
                    <Link to="/contact">
                      <Button size="lg" variant="secondary" className="shadow-2xl hover:shadow-xl transition-all text-lg px-8 py-6">
                        Get Your Free Strategy Session
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl p-8 border border-border">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <img 
                    src={teamImage} 
                    alt="Odin Digital Team" 
                    className="w-24 h-24 rounded-full object-cover shadow-lg"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2 text-foreground">Odin Digital Team</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The Odin Digital Team consists of experienced digital marketing strategists, SEO specialists, and content creators dedicated to helping Australian businesses achieve exponential growth through data-driven strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default ShopifySEO;