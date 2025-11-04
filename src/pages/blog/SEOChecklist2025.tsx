import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const SEOChecklist2025 = () => {
  return (
    <>
      <Helmet>
        <title>The Ultimate SEO Checklist for Australian Small Businesses in 2025 | Odin Digital</title>
        <meta 
          name="description" 
          content="Is your small business website struggling to get noticed on Google? Our ultimate SEO checklist for Australian small businesses in 2025 will guide you through the essential steps to improve your search engine rankings, attract more customers, and grow your business." 
        />
        <link rel="canonical" href="https://growth-conduit-central.lovable.app/blog/blog-post-seo-checklist" />
        
        {/* BlogPosting Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://growth-conduit-central.lovable.app/blog/blog-post-seo-checklist"
            },
            "headline": "The Ultimate SEO Checklist for Australian Small Businesses in 2025",
            "description": "Is your small business website struggling to get noticed on Google? Our ultimate SEO checklist for Australian small businesses in 2025 will guide you through the essential steps to improve your search engine rankings, attract more customers, and grow your business.",
            "image": "https://growth-conduit-central.lovable.app/images/blog/seo-checklist-2025.jpg",
            "author": {
              "@type": "Organization",
              "name": "Odin Digital Team",
              "url": "https://growth-conduit-central.lovable.app/about"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Odin Digital",
              "logo": {
                "@type": "ImageObject",
                "url": "https://growth-conduit-central.lovable.app/logo.png"
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
                "item": "https://growth-conduit-central.lovable.app/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://growth-conduit-central.lovable.app/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "The Ultimate SEO Checklist for Australian Small Businesses in 2025"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section with Floating Circles */}
          <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-muted/20">
            {/* Floating Circles */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-40 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-slow"></div>

            <div className="container mx-auto px-4 relative z-10">
              {/* Breadcrumbs */}
              <Breadcrumb className="mb-8">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/blog">Blog</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>The Ultimate SEO Checklist for Australian Small Businesses in 2025</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                    SEO Strategy
                  </span>
                  <p className="text-muted-foreground mb-2">
                    Published by <strong>Odin Digital Team</strong> • January 15, 2025 • 5 min read
                  </p>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  The Ultimate SEO Checklist for Australian Small Businesses in 2025
                </h1>

                <p className="text-xl text-muted-foreground mb-8">
                  Your complete guide to ranking higher on Google, attracting more customers, and growing your Australian small business in 2025.
                </p>
              </div>
            </div>
          </section>

          {/* Blog Content */}
          <article className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Introduction */}
                <div className="prose prose-lg max-w-none mb-12">
                  <p className="text-lg leading-relaxed text-foreground">
                    As an Australian small business owner, you know how important it is to be visible to your local customers. In today's digital age, that means being on the first page of Google. But with so much competition, how can you make your business stand out?
                  </p>
                  
                  <p className="text-lg leading-relaxed text-foreground">
                    The answer is Search Engine Optimisation (SEO). <Link to="/services/seo" className="text-primary hover:underline font-semibold">SEO</Link> is the process of optimising your website to rank higher in search engine results pages (SERPs) for relevant keywords. The higher you rank, the more likely potential customers are to find you.
                  </p>

                  <p className="text-lg leading-relaxed text-foreground">
                    But where do you start? This ultimate SEO checklist for Australian small businesses in 2025 will walk you through the essential steps to get your website ranking and your business booming.
                  </p>
                </div>

                {/* Table of Contents */}
                <Card className="p-8 mb-12 bg-muted/30 border-primary/20">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Table of Contents</h2>
                  <nav className="space-y-3">
                    <a href="#on-page-seo" className="flex items-center text-lg text-foreground hover:text-primary transition-colors group">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-primary" />
                      <span className="group-hover:underline">On-Page SEO Checklist</span>
                    </a>
                    <a href="#off-page-seo" className="flex items-center text-lg text-foreground hover:text-primary transition-colors group">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-primary" />
                      <span className="group-hover:underline">Off-Page SEO Checklist</span>
                    </a>
                    <a href="#technical-seo" className="flex items-center text-lg text-foreground hover:text-primary transition-colors group">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-primary" />
                      <span className="group-hover:underline">Technical SEO Checklist</span>
                    </a>
                    <a href="#local-seo" className="flex items-center text-lg text-foreground hover:text-primary transition-colors group">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-primary" />
                      <span className="group-hover:underline">Local SEO Checklist</span>
                    </a>
                  </nav>
                </Card>

                {/* On-Page SEO Section */}
                <section id="on-page-seo" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">On-Page SEO Checklist</h2>
                  <p className="text-lg leading-relaxed text-foreground mb-8">
                    On-page SEO refers to the optimisation of elements on your website. These are the things you have direct control over.
                  </p>

                  <div className="space-y-10">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">1. Keyword Research</h3>
                      <ul className="space-y-3 text-lg text-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Identify your target keywords:</strong> What search terms are your potential customers using to find businesses like yours? Use tools like Google Keyword Planner, Ahrefs, or SEMrush to find relevant keywords with good search volume and low competition.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Focus on long-tail keywords:</strong> These are longer, more specific phrases (e.g., "emergency plumber in Bondi") that often have a higher conversion rate.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Map keywords to pages:</strong> Assign a primary keyword and a few secondary keywords to each page on your website.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">2. High-Quality Content</h3>
                      <ul className="space-y-3 text-lg text-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Create valuable content:</strong> Your content should be informative, engaging, and solve your audience's problems. Think blog posts, how-to guides, case studies, and videos.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Optimise your content:</strong> Naturally incorporate your target keywords into your page titles, headings, meta descriptions, and body copy.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Keep your content fresh:</strong> Regularly update your existing content and add new content to show Google that your website is active and relevant.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">3. Page Titles and Meta Descriptions</h3>
                      <ul className="space-y-3 text-lg text-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Write compelling page titles:</strong> Your page title is the first thing people see in the search results. Make it catchy and include your primary keyword.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Craft enticing meta descriptions:</strong> The meta description is the short snippet of text that appears under your page title in the search results. It should be a concise summary of the page's content and encourage users to click.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">4. Heading Tags (H1, H2, H3)</h3>
                      <ul className="space-y-3 text-lg text-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Use a single H1 tag per page:</strong> Your H1 tag should be your main heading and contain your primary keyword.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Structure your content with H2 and H3 tags:</strong> Use subheadings to break up your content and make it easier to read. Include your secondary keywords in your subheadings where it makes sense.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">5. Internal Linking</h3>
                      <ul className="space-y-3 text-lg text-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Link to other relevant pages on your website:</strong> This helps Google understand the structure of your website and the relationship between your pages. It also keeps users on your site for longer.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Mid-Post CTA */}
                <Card className="p-8 md:p-12 mb-16 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      Ready to Implement These SEO Strategies?
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Our team of <Link to="/services/seo" className="text-primary hover:underline font-semibold">SEO experts</Link> can help you implement these strategies and more. Get your free marketing strategy session today.
                    </p>
                    <Button asChild size="lg" variant="cta">
                      <Link to="/contact">
                        Get Your Free Strategy Session <ArrowRight className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </Card>

                {/* Off-Page SEO Section */}
                <section id="off-page-seo" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Off-Page SEO Checklist</h2>
                  <p className="text-lg leading-relaxed text-foreground mb-8">
                    Off-page SEO refers to activities that take place off your website to improve your rankings.
                  </p>

                  <div className="space-y-10">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">1. Link Building</h3>
                      <ul className="space-y-3 text-lg text-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Earn high-quality backlinks:</strong> Backlinks are links from other websites to your website. They are a major ranking factor. Focus on getting links from reputable and relevant websites in Australia.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Guest blogging:</strong> Write articles for other websites in your industry and include a link back to your website.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Broken link building:</strong> Find broken links on other websites and suggest your own content as a replacement.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">2. Social Media</h3>
                      <ul className="space-y-3 text-lg text-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Be active on social media:</strong> Share your content on social media platforms to drive traffic to your website and increase brand awareness.</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Engage with your audience:</strong> Respond to comments and questions to build a community around your brand.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Technical SEO Section */}
                <section id="technical-seo" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Technical SEO Checklist</h2>
                  <p className="text-lg leading-relaxed text-foreground mb-8">
                    Technical SEO refers to the optimisation of your website's backend. Our <Link to="/services/website-design" className="text-primary hover:underline font-semibold">web design team</Link> ensures all technical SEO elements are optimised from day one.
                  </p>

                  <div className="space-y-10">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">1. Website Speed</h3>
                      <ul className="space-y-3 text-lg text-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Ensure your website loads quickly:</strong> A slow website will lead to a poor user experience and a higher bounce rate. Use Google's PageSpeed Insights tool to test your website's speed and get recommendations for improvement.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">2. Mobile-Friendliness</h3>
                      <ul className="space-y-3 text-lg text-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Make sure your website is mobile-friendly:</strong> More and more people are using their phones to browse the internet. Your website should be easy to use on a small screen.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">3. Website Security</h3>
                      <ul className="space-y-3 text-lg text-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Use HTTPS:</strong> An SSL certificate encrypts the data on your website and protects your users' information. It's also a Google ranking factor.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">4. XML Sitemap</h3>
                      <ul className="space-y-3 text-lg text-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Create an XML sitemap:</strong> An XML sitemap is a file that lists all the pages on your website. It helps Google find and index your content.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Local SEO Section */}
                <section id="local-seo" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Local SEO Checklist</h2>
                  <p className="text-lg leading-relaxed text-foreground mb-8">
                    Local SEO is essential for businesses that serve a specific geographic area. Our <Link to="/services/local-seo" className="text-primary hover:underline font-semibold">local SEO services</Link> help you dominate your local market.
                  </p>

                  <div className="space-y-10">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">1. Google Business Profile</h3>
                      <ul className="space-y-3 text-lg text-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Claim and optimise your Google Business Profile:</strong> This is a free listing that appears in Google Maps and the local search results. Make sure your business name, address, and phone number (NAP) are consistent across the web.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">2. Local Citations</h3>
                      <ul className="space-y-3 text-lg text-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Build local citations:</strong> These are mentions of your business name, address, and phone number on other websites, such as online directories (e.g., Yelp, TrueLocal).</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">3. Online Reviews</h3>
                      <ul className="space-y-3 text-lg text-foreground">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-1" />
                          <span><strong>Encourage customer reviews:</strong> Positive reviews on Google and other review sites can improve your local search rankings.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <section className="mb-16">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed text-foreground">
                      By following this SEO checklist, you'll be well on your way to improving your website's search engine rankings, attracting more customers, and growing your Australian small business in 2025. <strong>SEO is an ongoing process</strong>, so be patient and consistent with your efforts.
                    </p>
                    
                    <p className="text-lg leading-relaxed text-foreground font-semibold">
                      Ready to take your SEO to the next level? Contact Odin Digital today for a free SEO audit and strategy session!
                    </p>
                  </div>
                </section>

                {/* Final CTA */}
                <Card className="p-8 md:p-12 mb-16 bg-gradient-primary text-white border-0">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Ready to Take Your Digital Marketing to the Next Level?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                      Get a free, no-obligation marketing strategy session with our experts.
                    </p>
                    <Button asChild size="xl" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                      <Link to="/contact">
                        Get Your Free Strategy Session <ArrowRight className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </Card>

                {/* Author Bio */}
                <Card className="p-8 bg-muted/30 border-primary/20">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center text-white text-3xl font-bold">
                        OD
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Odin Digital Team</h3>
                      <p className="text-foreground leading-relaxed">
                        The Odin Digital Team consists of experienced digital marketing strategists, SEO specialists, and content creators dedicated to helping Australian businesses achieve exponential growth through data-driven strategies. With over $574M+ in client revenue generated and a 95% client retention rate, our team brings proven expertise to every project.
                      </p>
                      <div className="mt-4">
                        <Link to="/about" className="text-primary hover:underline font-semibold">
                          Learn more about our team →
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SEOChecklist2025;