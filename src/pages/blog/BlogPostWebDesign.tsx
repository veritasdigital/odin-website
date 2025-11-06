import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import heroImage from "@/assets/blog/website-redesign-realistic.jpg";
import teamImage from "@/assets/odin-team-professional.jpg";

const BlogPostWebDesign = () => {
  return (
    <>
      <Helmet>
        <title>10 Signs It's Time for a Website Redesign for Your Aussie Business | Odin Digital</title>
        <meta 
          name="description" 
          content="Is your website holding your business back? Discover the 10 telltale signs that it's time for a website redesign and learn how a fresh, modern website can help you attract more customers and grow your Australian business." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://odindigital.com.au/blog/blog-post-web-design"
            },
            "headline": "10 Signs It's Time for a Website Redesign for Your Aussie Business",
            "description": "Is your website holding your business back? Discover the 10 telltale signs that it's time for a website redesign and learn how a fresh, modern website can help you attract more customers and grow your Australian business.",
            "image": "https://odindigital.com.au/images/blog/blog-post-web-design-featured.jpg",
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
                "name": "10 Signs It's Time for a Website Redesign for Your Aussie Business"
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
                <span className="text-foreground">10 Signs It's Time for a Website Redesign</span>
              </nav>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in leading-tight">
                10 Signs It's Time for a Website Redesign for Your Aussie Business
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
                  alt="Website redesign concept showing modern web design on multiple devices" 
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
                  Your website is often the first impression potential customers have of your business. If it's outdated, slow, or hard to navigate, you're losing customers before they even get a chance to see what you have to offer.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  But how do you know when it's time for a website redesign? Maybe your site is a few years old, but it still looks okay. Or maybe you're not sure if investing in a redesign will actually pay off.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In this guide, we'll walk you through the 10 signs that it's time for a website redesign for your Australian business. If you're experiencing any of these issues, it might be time to give your website a fresh new look.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 mb-12 border border-primary/10">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Table of Contents</h2>
                <nav className="space-y-3">
                  <a href="#looks-outdated" className="block text-primary hover:text-primary/80 transition-colors hover:translate-x-2 transform duration-200">
                    1. Your Website Looks Outdated
                  </a>
                  <a href="#not-mobile-friendly" className="block text-primary hover:text-primary/80 transition-colors hover:translate-x-2 transform duration-200">
                    2. It's Not Mobile-Friendly
                  </a>
                  <a href="#website-slow" className="block text-primary hover:text-primary/80 transition-colors hover:translate-x-2 transform duration-200">
                    3. Your Website is Slow
                  </a>
                  <a href="#bounce-rate-high" className="block text-primary hover:text-primary/80 transition-colors hover:translate-x-2 transform duration-200">
                    4. Your Bounce Rate is High
                  </a>
                  <a href="#not-getting-leads" className="block text-primary hover:text-primary/80 transition-colors hover:translate-x-2 transform duration-200">
                    5. You're Not Getting Leads
                  </a>
                  <a href="#not-secure" className="block text-primary hover:text-primary/80 transition-colors hover:translate-x-2 transform duration-200">
                    6. Your Website Isn't Secure
                  </a>
                  <a href="#hard-to-update" className="block text-primary hover:text-primary/80 transition-colors hover:translate-x-2 transform duration-200">
                    7. It's Hard to Update
                  </a>
                  <a href="#branding-changed" className="block text-primary hover:text-primary/80 transition-colors hover:translate-x-2 transform duration-200">
                    8. Your Branding Has Changed
                  </a>
                  <a href="#not-ranking" className="block text-primary hover:text-primary/80 transition-colors hover:translate-x-2 transform duration-200">
                    9. You're Not Ranking on Google
                  </a>
                  <a href="#competitors-better" className="block text-primary hover:text-primary/80 transition-colors hover:translate-x-2 transform duration-200">
                    10. Your Competitors Have Better Websites
                  </a>
                </nav>
              </div>

              {/* Main Content */}
              <div className="prose prose-lg max-w-none space-y-12">
                <section id="looks-outdated">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">1. Your Website Looks Outdated</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Web design trends change quickly. What looked modern five years ago can look dated today. If your website still has that early 2000s vibe with Flash animations, cluttered layouts, or Comic Sans font, it's time for a redesign.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    A modern, clean design will make your business look more professional and trustworthy. It will also improve the user experience and make it easier for visitors to find what they're looking for.
                  </p>
                </section>

                <section id="not-mobile-friendly">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">2. It's Not Mobile-Friendly</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    More than half of all web traffic now comes from mobile devices. If your website isn't optimised for mobile, you're missing out on a huge chunk of potential customers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    A mobile-friendly website should be easy to navigate on a small screen, with large buttons, readable text, and fast loading times. If your website doesn't meet these criteria, it's time for a redesign with a focus on <Link to="/services/website-design" className="text-primary hover:text-primary/80 underline">responsive web design</Link>.
                  </p>
                </section>

                <section id="website-slow">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">3. Your Website is Slow</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nobody likes waiting for a slow website to load. In fact, <strong>53% of mobile users will abandon a site if it takes longer than three seconds to load</strong>. A slow website not only frustrates your visitors, but it also hurts your search engine rankings.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    If your website is slow, it's time to optimise it or redesign it with speed in mind. Our team specialises in creating fast, high-performance websites that keep your visitors engaged.
                  </p>
                </section>

                <section id="bounce-rate-high">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">4. Your Bounce Rate is High</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your bounce rate is the percentage of visitors who leave your website after viewing only one page. A high bounce rate is a sign that your website isn't engaging or relevant to your visitors.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    There are many reasons why your bounce rate might be high, including poor design, slow loading times, or irrelevant content. A website redesign can help you address these issues and keep visitors on your site longer. Learn more about <Link to="/blog/conversion-rate-optimisation-cro-secret-to-getting-more-from-existing-traffic" className="text-primary hover:text-primary/80 underline">conversion rate optimisation</Link> to reduce your bounce rate.
                  </p>
                </section>

                {/* Mid-Post CTA */}
                <div className="my-16 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white rounded-2xl p-8 md:p-12 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                    <div className="max-w-2xl">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Ready to Transform Your Website?
                      </h3>
                      <p className="text-lg mb-6 text-white/90">
                        Our team of expert web designers can help you create a modern, high-converting website that drives real results for your Australian business.
                      </p>
                      <Link to="/services/website-design">
                        <Button size="lg" variant="secondary" className="group shadow-xl hover:shadow-2xl transition-all">
                          Get Your Free Website Audit
                          <ArrowLeft className="ml-2 h-5 w-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <section id="not-getting-leads">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">5. You're Not Getting Leads</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your website should be a lead generation machine. If it's not converting visitors into leads, something is wrong.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Maybe your calls to action aren't clear. Maybe your forms are too long. Or maybe your website just doesn't inspire trust. A website redesign can help you optimise your site for conversions and start generating more leads. Combine this with effective <Link to="/services/google-ads" className="text-primary hover:text-primary/80 underline">paid advertising strategies</Link> to maximise your results.
                  </p>
                </section>

                <section id="not-secure">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">6. Your Website Isn't Secure</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If your website doesn't have an SSL certificate (HTTPS), it's not secure. This means that any data your visitors enter on your site, such as their name, email address, or credit card information, is not encrypted.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Not only is this a security risk, but it also hurts your <Link to="/services/seo" className="text-primary hover:text-primary/80 underline">search engine rankings</Link>. Google gives preference to secure websites. If your website isn't secure, it's time to get an SSL certificate and redesign your site with security in mind.
                  </p>
                </section>

                <section id="hard-to-update">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">7. It's Hard to Update</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your website should be easy to update. If you need to hire a developer every time you want to make a small change, you're wasting time and money.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    A website redesign can give you a content management system (CMS) that makes it easy to update your content, add new pages, and make changes on the fly.
                  </p>
                </section>

                <section id="branding-changed">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">8. Your Branding Has Changed</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If your business has gone through a rebrand, your website needs to reflect that. Your website should be consistent with your brand identity, including your logo, colours, fonts, and messaging.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    A website redesign is the perfect opportunity to bring your website in line with your new branding and create a cohesive brand experience across all touchpoints.
                  </p>
                </section>

                <section id="not-ranking">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">9. You're Not Ranking on Google</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If your website isn't showing up on the first page of Google for your target keywords, you're missing out on a lot of potential traffic. There are many factors that affect your search engine rankings, including your website's design, speed, and content.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    A website redesign can help you optimise your site for SEO and start ranking higher on Google. Check out our comprehensive <Link to="/services/seo" className="text-primary hover:text-primary/80 underline">SEO services</Link> to learn more about improving your search visibility.
                  </p>
                </section>

                <section id="competitors-better">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">10. Your Competitors Have Better Websites</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Take a look at your competitors' websites. If they look more modern, professional, and user-friendly than yours, you're at a disadvantage.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Your website is a reflection of your business. If it looks worse than your competitors', potential customers might assume that your products or services are inferior as well. A website redesign can help you level the playing field and stand out from the competition.
                  </p>
                </section>

                {/* Conclusion */}
                <section className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl p-8 border border-primary/10">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">The Bottom Line</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you're experiencing any of these signs, it's time to consider a website redesign for your Australian business. A fresh, modern website can help you attract more customers, generate more leads, and grow your business.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Ready to give your website a makeover?</strong> Contact Odin Digital today for a free consultation and let us help you create a website that drives results!
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

export default BlogPostWebDesign;