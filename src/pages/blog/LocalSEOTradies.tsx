import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { blogArticles } from "@/utils/blogSchemaData";
import { 
  MapPin, 
  Star, 
  Search, 
  FileText, 
  Link as LinkIcon, 
  List, 
  PenTool, 
  Smartphone, 
  Code, 
  TrendingUp,
  Calendar,
  Clock,
  User,
  ArrowRight,
  CheckCircle,
  Target,
  Zap
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import localSeoImage from "@/assets/blog/local-seo-strategies.jpg";
import odinTeamImage from "@/assets/odin-team-real.jpg";

const LocalSEOTradies = () => {
  const { openForm } = useMarketingForm();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Local SEO for Tradies: 10 Tips to Get More Local Customers | Odin Digital</title>
        <meta 
          name="description" 
          content="Are you a tradie struggling to get found online? Our local SEO guide will show you 10 practical tips to rank higher in local search results and attract more customers in your area." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://odindigital.com.au/blog/blog-post-local-seo"
            },
            "headline": "Local SEO for Tradies: 10 Tips to Get More Local Customers",
            "description": "Are you a tradie struggling to get found online? Our local SEO guide will show you 10 practical tips to rank higher in local search results and attract more customers in your area.",
            "image": "https://odindigital.com.au/images/blog/blog-post-local-seo-featured.jpg",
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
            "datePublished": "2025-01-16",
            "dateModified": "2025-01-16"
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
                "name": "Local SEO for Tradies: 10 Tips to Get More Local Customers"
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />
      <MarketingFormModal />
      <SideTab />

      {/* Breadcrumb Navigation */}
      <section className="pt-32 pb-8 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs items={[
            { label: "Blog", path: "/blog" },
            { label: "Local SEO for Tradies", path: "/blog/local-seo-tradies" }
          ]} />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-primary/60 rounded-full animate-bounce delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Odin Digital Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>January 16, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>

          {/* H1 with Gradient */}
          <h1 className="text-4xl md:text-6xl font-black text-center mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Local SEO for Tradies:
            </span>
            <br />
            <span className="text-foreground">
              10 Tips to Get More Local Customers
            </span>
          </h1>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 group">
            <img 
              src={localSeoImage} 
              alt="Local SEO strategies for tradies to attract more customers"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">10</div>
                  <div className="text-sm text-muted-foreground">Actionable Tips</div>
                </div>
              </div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">Local</div>
                  <div className="text-sm text-muted-foreground">Focus</div>
                </div>
              </div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">Fast</div>
                  <div className="text-sm text-muted-foreground">Results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              As a tradie in Australia, most of your customers come from your local area. Whether you're a plumber, electrician, carpenter, or landscaper, you need to be visible when people in your area search for your services.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              That's where <Link to="/services/local-seo" className="text-primary hover:underline font-semibold">local SEO</Link> comes in. Local SEO is the process of optimising your online presence to attract more business from local searches. When someone searches for "plumber near me" or "electrician in Sydney," you want to be at the top of the results.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              In this guide, we'll give you <strong>10 practical tips</strong> to improve your local SEO and get more customers for your trade business.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-background rounded-2xl p-8 border border-border shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <List className="w-6 h-6 mr-3 text-primary" />
              Table of Contents
            </h2>
            <nav className="space-y-3">
              <a href="#google-business-profile" className="block text-lg text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-2 transform">
                1. Claim and Optimise Your Google Business Profile
              </a>
              <a href="#get-reviews" className="block text-lg text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-2 transform">
                2. Get More Online Reviews
              </a>
              <a href="#local-keywords" className="block text-lg text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-2 transform">
                3. Use Local Keywords on Your Website
              </a>
              <a href="#location-pages" className="block text-lg text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-2 transform">
                4. Create Location-Specific Pages
              </a>
              <a href="#build-citations" className="block text-lg text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-2 transform">
                5. Build Local Citations
              </a>
              <a href="#online-directories" className="block text-lg text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-2 transform">
                6. Get Listed in Online Directories
              </a>
              <a href="#local-content" className="block text-lg text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-2 transform">
                7. Create Local Content
              </a>
              <a href="#optimise-mobile" className="block text-lg text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-2 transform">
                8. Optimise for Mobile
              </a>
              <a href="#schema-markup" className="block text-lg text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-2 transform">
                9. Use Schema Markup
              </a>
              <a href="#local-backlinks" className="block text-lg text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-2 transform">
                10. Build Local Backlinks
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Tip 1 */}
          <section id="google-business-profile" className="mb-16 scroll-mt-24">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="w-1 h-full bg-gradient-to-b from-primary to-transparent absolute left-8 top-16"></div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  1. Claim and Optimise Your Google Business Profile
                </h2>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none ml-22">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Your <strong>Google Business Profile</strong> (formerly Google My Business) is the most important thing you can do for local SEO. This is the listing that appears in Google Maps and the local search results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Here's how to optimise it:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground"><strong>Claim your listing:</strong> If you haven't already, go to google.com/business and claim your listing.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground"><strong>Fill out every section:</strong> Add your business name, address, phone number, website, hours, and services.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground"><strong>Choose the right categories:</strong> Select the categories that best describe your business.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground"><strong>Add photos:</strong> Upload high-quality photos of your work, your team, and your vehicles.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground"><strong>Post regular updates:</strong> Share news, offers, and updates to keep your profile active.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Tip 2 */}
          <section id="get-reviews" className="mb-16 scroll-mt-24">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  2. Get More Online Reviews
                </h2>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none ml-22">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Online reviews are crucial for local SEO. The more positive reviews you have, the higher you'll rank in local search results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Here's how to get more reviews:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground"><strong>Ask your customers:</strong> After you complete a job, ask your happy customers to leave a review on Google.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground"><strong>Make it easy:</strong> Send them a direct link to your Google review page.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground"><strong>Respond to reviews:</strong> Always respond to reviews, both positive and negative. This shows that you care about your customers.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Tip 3 */}
          <section id="local-keywords" className="mb-16 scroll-mt-24">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Search className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  3. Use Local Keywords on Your Website
                </h2>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none ml-22">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Your <Link to="/services/website-design" className="text-primary hover:underline font-semibold">website</Link> should include keywords that people in your area are searching for. For example, instead of just "plumber," use "plumber in Bondi" or "emergency plumber Sydney."
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Include these keywords in your:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Page titles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Headings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Meta descriptions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Body content</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Tip 4 */}
          <section id="location-pages" className="mb-16 scroll-mt-24">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  4. Create Location-Specific Pages
                </h2>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none ml-22">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                If you serve multiple areas, create a separate page for each location. For example, if you're a plumber who serves Sydney, Bondi, and Manly, create a page for each area.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Each page should include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">The location name in the page title and headings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Information about your services in that area</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Local landmarks or suburbs you serve</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Customer testimonials from that area</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Mid-Post CTA */}
          <section className="my-16">
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 md:p-12 text-center shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Dominate Local Search Results?
              </h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Our team of <Link to="/services/seo" className="text-white underline font-semibold hover:text-white/80">local SEO experts</Link> can help you implement these strategies and get more customers. Get your free marketing strategy session today.
              </p>
              <Button 
                variant="secondary" 
                size="xl" 
                onClick={openForm}
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
              >
                Get Your Free Strategy Session
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </section>

          {/* Tip 5 */}
          <section id="build-citations" className="mb-16 scroll-mt-24">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <LinkIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  5. Build Local Citations
                </h2>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none ml-22">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                A citation is any mention of your business name, address, and phone number (NAP) on another website. Citations help Google verify that your business is legitimate and improve your local rankings.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Make sure your NAP is <strong>consistent across all citations</strong>. Even small differences (like "St" vs "Street") can hurt your rankings.
              </p>
            </div>
          </section>

          {/* Tip 6 */}
          <section id="online-directories" className="mb-16 scroll-mt-24">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                  <List className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  6. Get Listed in Online Directories
                </h2>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none ml-22">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Get your business listed in online directories like:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">TrueLocal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Yellow Pages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Yelp</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">HiPages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">ServiceSeeking</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The more places your business is listed, the more visible you'll be online.
              </p>
            </div>
          </section>

          {/* Tip 7 */}
          <section id="local-content" className="mb-16 scroll-mt-24">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  7. Create Local Content
                </h2>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none ml-22">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Write blog posts about topics that are relevant to your local area. For example:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">"Common Plumbing Problems in Sydney Homes"</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">"How to Prepare Your Brisbane Home for Storm Season"</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">"The Best Materials for Outdoor Decking in Melbourne"</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This shows Google that you're an expert in your local area and helps you rank for local keywords.
              </p>
            </div>
          </section>

          {/* Tip 8 */}
          <section id="optimise-mobile" className="mb-16 scroll-mt-24">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  8. Optimise for Mobile
                </h2>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none ml-22">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Most people searching for local services are on their phones. Make sure your website is mobile-friendly with:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">A responsive design that works on all screen sizes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Large, easy-to-tap buttons</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Fast loading times</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Click-to-call phone numbers</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Tip 9 */}
          <section id="schema-markup" className="mb-16 scroll-mt-24">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  9. Use Schema Markup
                </h2>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none ml-22">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Schema markup is code that you add to your website to help search engines understand your content. For local businesses, you should use <strong>LocalBusiness schema</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This helps Google display rich snippets in the search results, such as your business hours, phone number, and reviews.
              </p>
            </div>
          </section>

          {/* Tip 10 */}
          <section id="local-backlinks" className="mb-16 scroll-mt-24">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  10. Build Local Backlinks
                </h2>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none ml-22">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Backlinks from local websites can boost your local SEO. Here are a few ways to get them:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Sponsor a local sports team or charity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Get featured in local news sites or blogs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Partner with other local businesses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">Join your local chamber of commerce</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Visual Stats Card */}
          <div className="my-16 bg-gradient-to-br from-muted/50 to-background rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Local SEO Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  46%
                </div>
                <p className="text-muted-foreground">of Google searches are local</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                  88%
                </div>
                <p className="text-muted-foreground">of mobile local searches result in calls or visits within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  76%
                </div>
                <p className="text-muted-foreground">of people who search for something nearby visit a business within a day</p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Conclusion</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Local SEO is essential for tradies who want to attract more customers in their area. By following these 10 tips, you can improve your visibility in local search results and grow your business.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Remember, <strong>local SEO is an ongoing process</strong>. It takes time to see results, but with patience and consistency, you'll start ranking higher and getting more customers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>Final tip:</strong> Track your progress using tools like Google Analytics and Google Search Console. Monitor your rankings, website traffic, and leads to see what's working and what needs improvement.
              </p>
            </div>
          </section>

        </div>
      </article>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Take Your Digital Marketing to the Next Level?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Get a free, no-obligation marketing strategy session with our experts.
          </p>
          <Button 
            variant="secondary" 
            size="xl" 
            onClick={openForm}
            className="bg-white text-primary hover:bg-white/90 shadow-2xl"
          >
            Get Your Free Strategy Session
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-background rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <img 
                src={odinTeamImage} 
                alt="Odin Digital Team"
                className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-2">Odin Digital Team</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Odin Digital Team consists of experienced digital marketing strategists, SEO specialists, and content creators dedicated to helping Australian businesses achieve exponential growth through data-driven strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocalSEOTradies;