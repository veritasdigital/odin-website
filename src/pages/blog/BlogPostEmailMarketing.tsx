import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getArticleSchema } from "@/utils/schemaMarkup";
import { blogArticles } from "@/utils/blogSchemaData";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Users, 
  Target, 
  Gift, 
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Shield,
  Megaphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import heroImage from "@/assets/blog/email-list-building-hero.jpg";
import { OptimizedImage } from '@/components/OptimizedImage';

export default function BlogPostEmailMarketing() {
  const { openForm } = useMarketingForm();

  return (
    <>
      <Helmet>
        <title>How to Build an Email List from Scratch for Your Australian Business | Odin Digital</title>
        <meta 
          name="description" 
          content="Want to build an email list but don't know where to start? Our practical guide for Australian businesses will show you proven strategies to grow your list from zero to thousands of engaged subscribers." 
        />
        <link rel="canonical" href="https://odindigital.com.au/blog/blog-post-email-marketing" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="How to Build an Email List from Scratch for Your Australian Business | Odin Digital" />
        <meta property="og:description" content="Want to build an email list but don't know where to start? Our practical guide for Australian businesses will show you proven strategies to grow your list from zero to thousands of engaged subscribers." />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content="https://odindigital.com.au/blog/blog-post-email-marketing" />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Build an Email List from Scratch for Your Australian Business" />
        <meta name="twitter:description" content="Want to build an email list but don't know where to start? Our practical guide for Australian businesses will show you proven strategies to grow your list from zero to thousands of engaged subscribers." />
        <meta name="twitter:image" content={heroImage} />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://odindigital.com.au/blog/blog-post-email-marketing"
            },
            "headline": "How to Build an Email List from Scratch for Your Australian Business",
            "description": "Want to build an email list but don't know where to start? Our practical guide for Australian businesses will show you proven strategies to grow your list from zero to thousands of engaged subscribers.",
            "image": "https://odindigital.com.au/images/blog/blog-post-email-marketing-featured.jpg",
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
            "datePublished": "2025-10-27",
            "dateModified": "2025-10-27"
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
                "name": "How to Build an Email List from Scratch for Your Australian Business"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Breadcrumb Navigation */}
        <div className="bg-background/80 backdrop-blur-sm border-b border-border/40 mt-20">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground">How to Build an Email List from Scratch</span>
            </nav>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-glow/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              {/* Animated floating particles */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-60"></div>
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent rounded-full animate-float-delayed opacity-40"></div>
                <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-primary-glow rounded-full animate-float opacity-50"></div>
              </div>

              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-gradient-primary/10 text-primary px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-primary/20">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-semibold">Email Marketing</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                  How to Build an Email List from Scratch for Your Australian Business
                </h1>

                <div className="flex items-center gap-4 mb-8 text-muted-foreground">
                  <span className="font-medium">Odin Digital Team</span>
                  <span>•</span>
                  <span>October 27, 2025</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 group">
                  <div className="absolute inset-0 z-10"></div>
                  <OptimizedImage src={heroImage} alt="Australian business owner building email marketing list" sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Email marketing is one of the most powerful tools in your digital marketing arsenal. For every dollar you spend on email marketing, you can expect an average return of $42. That's a 4,200% ROI. Not bad, right?
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                But here's the catch: you need an email list to do email marketing. And if you're starting from scratch, building that list can feel overwhelming.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                The good news is that building an email list doesn't have to be complicated or expensive. In this guide, we'll show you proven strategies to grow your email list from zero to thousands of engaged subscribers for your Australian business.
              </p>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-elegant">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  Table of Contents
                </h2>
                <nav className="space-y-3">
                  <a href="#why-email-matters" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Why Email Marketing Still Matters
                  </a>
                  <a href="#create-lead-magnet" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Create a Lead Magnet People Actually Want
                  </a>
                  <a href="#optimise-website" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Optimise Your Website for Email Capture
                  </a>
                  <a href="#use-popups" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Use Pop-ups (the Right Way)
                  </a>
                  <a href="#leverage-social-media" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Leverage Social Media
                  </a>
                  <a href="#run-contests" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Run Contests and Giveaways
                  </a>
                  <a href="#partner-businesses" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Partner with Other Businesses
                  </a>
                  <a href="#compliance" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Make Sure You're Compliant
                  </a>
                </nav>
              </div>
            </div>
          </section>

          {/* Why Email Marketing Still Matters */}
          <section id="why-email-matters" className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Why Email Marketing Still Matters
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  You might be thinking, "Isn't email marketing dead? Doesn't everyone just use social media now?"
                </p>

                <p>
                  Not quite. While <Link to="/services/social-media" className="text-primary hover:underline font-semibold">social media</Link> is important, email marketing is still one of the most effective ways to reach your audience. Here's why:
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                    <Users className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">You Own Your List</h3>
                    <p className="text-sm">Unlike social media, where the platform controls who sees your content, you own your email list. Nobody can take it away from you.</p>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                    <Target className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Higher Engagement</h3>
                    <p className="text-sm">Email has a much higher engagement rate than social media. People are more likely to read and act on an email than a social media post.</p>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                    <Mail className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Direct Communication</h3>
                    <p className="text-sm">Email allows you to communicate directly with your audience in their inbox, where they're already checking for important messages.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Create a Lead Magnet */}
          <section id="create-lead-magnet" className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Create a Lead Magnet People Actually Want
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Nobody is going to give you their email address for nothing. You need to offer them something valuable in exchange. This is called a lead magnet.
                </p>

                <p>
                  A lead magnet can be anything that provides value to your audience, such as:
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>An ebook or guide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>A checklist or template</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>A discount code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>A free trial</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>A webinar or video training</span>
                  </li>
                </ul>

                <p className="font-semibold text-foreground">
                  The key is to make sure your lead magnet is relevant to your audience and solves a specific problem they have.
                </p>
              </div>
            </div>
          </section>

          {/* Mid-Post CTA */}
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Implement These Strategies for Your Business?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Our team of digital marketing experts can help you build a high-converting email marketing strategy. Get your free marketing strategy session today.
                </p>
                <Button 
                  onClick={openForm}
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-bold"
                >
                  Get Your Free Strategy Session
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </section>

          {/* Optimise Your Website */}
          <section id="optimise-website" className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Optimise Your Website for Email Capture
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Your <Link to="/services/website-design" className="text-primary hover:underline font-semibold">website</Link> is the best place to capture email addresses. Here are a few ways to optimise it:
                </p>

                <div className="space-y-4">
                  <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">Add a Signup Form to Your Homepage</h3>
                    <p>Make it prominent and easy to find. Place it above the fold so visitors see it immediately.</p>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">Add a Signup Form to Your Blog Sidebar</h3>
                    <p>This is a great way to capture readers who are already engaged with your content.</p>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">Create a Dedicated Landing Page</h3>
                    <p>If you're running ads or promoting your lead magnet on social media, create a dedicated landing page with a signup form.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Use Pop-ups */}
          <section id="use-popups" className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <Megaphone className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Use Pop-ups (the Right Way)
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Pop-ups get a bad rap, but they're actually one of the most effective ways to capture email addresses. The key is to use them strategically and not annoy your visitors.
                </p>

                <p>Here are a few tips:</p>

                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Use exit-intent pop-ups:</strong> These pop-ups appear when a user is about to leave your site. They're less intrusive than pop-ups that appear immediately.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Offer something valuable:</strong> Don't just ask for an email address. Offer a lead magnet or discount code in exchange.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Make it easy to close:</strong> Always include a clear "X" button so users can close the pop-up if they're not interested.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Leverage Social Media */}
          <section id="leverage-social-media" className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Leverage Social Media
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Social media is a great way to promote your lead magnet and drive traffic to your signup form.
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Share your lead magnet on your social media profiles:</strong> Post about it regularly and include a link to your landing page.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Add a link to your bio:</strong> On Instagram and Twitter, add a link to your signup page in your bio.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Run social media ads:</strong> If you have the budget, run <Link to="/facebook-advertising" className="text-primary hover:underline font-semibold">Facebook ads</Link> or <Link to="/instagram-advertising" className="text-primary hover:underline font-semibold">Instagram ads</Link> promoting your lead magnet to a targeted audience.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Run Contests */}
          <section id="run-contests" className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Run Contests and Giveaways
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Contests and giveaways are a fun way to grow your email list quickly. Offer a prize that's relevant to your audience and require an email address to enter.
                </p>

                <p>
                  Just be aware that not all the people who sign up will be high-quality leads. Some people will just be entering for the prize and won't be interested in your business.
                </p>
              </div>
            </div>
          </section>

          {/* Partner with Other Businesses */}
          <section id="partner-businesses" className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Partner with Other Businesses
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Partnering with other businesses in your industry can help you reach a wider audience and grow your email list.
                </p>

                <p>
                  For example, you could co-host a webinar, create a joint lead magnet, or do a cross-promotion where you promote each other's email lists to your respective audiences.
                </p>
              </div>
            </div>
          </section>

          {/* Compliance */}
          <section id="compliance" className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Make Sure You're Compliant
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  In Australia, email marketing is regulated by the Spam Act 2003. Here are the key things you need to know:
                </p>

                <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Get Consent</h3>
                      <p>You need to get explicit consent before adding someone to your email list. This means they need to opt in, not opt out.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Include an Unsubscribe Link</h3>
                      <p>Every email you send must include a clear and easy way for people to unsubscribe.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Include Your Business Details</h3>
                      <p>Every email must include your business name and contact information.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Building an email list from scratch takes time and effort, but it's one of the best investments you can make in your Australian business. By following the strategies in this guide, you can grow a list of engaged subscribers who are interested in what you have to offer.
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Ready to take your <Link to="/services/email-marketing" className="text-primary hover:underline">email marketing</Link> to the next level?
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Take Your Digital Marketing to the Next Level?
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Get a free, no-obligation marketing strategy session with our experts.
                </p>
                <Button 
                  onClick={openForm}
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6"
                >
                  Get Your Free Strategy Session
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </section>

          {/* Author Bio */}
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      OD
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Odin Digital Team</h3>
                    <p className="text-muted-foreground">
                      The Odin Digital Team consists of experienced digital marketing strategists, SEO specialists, and content creators dedicated to helping Australian businesses achieve exponential growth through data-driven strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}