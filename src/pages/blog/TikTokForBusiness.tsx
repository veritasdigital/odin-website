import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Users, 
  Target, 
  Video, 
  DollarSign, 
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import heroImage from "@/assets/blog/tiktok-business-hero.jpg";
import demographicsImage from "@/assets/blog/tiktok-demographics.jpg";
import strategyImage from "@/assets/blog/tiktok-strategy.jpg";
import contentCreationImage from "@/assets/blog/tiktok-content-creation.jpg";
import adsMetricsImage from "@/assets/blog/tiktok-ads-metrics.jpg";
import odinTeam from "@/assets/odin-team-professional.jpg";

export default function TikTokForBusiness() {
  const { openForm } = useMarketingForm();

  return (
    <>
      <Helmet>
        <title>The Rise of TikTok for Business: Is It Right for Your Brand? | Odin Digital</title>
        <meta 
          name="description" 
          content="Learn about the rise of tiktok for business: is it right for your brand? with this comprehensive guide from Odin Digital, Australia's leading digital marketing agency." 
        />
        <link rel="canonical" href="https://odindigital.com.au/blog/the-rise-of-tiktok-for-business-is-it-right-for-your-brand" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="The Rise of TikTok for Business: Is It Right for Your Brand? | Odin Digital" />
        <meta property="og:description" content="Learn about the rise of tiktok for business: is it right for your brand? with this comprehensive guide from Odin Digital, Australia's leading digital marketing agency." />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content="https://odindigital.com.au/blog/the-rise-of-tiktok-for-business-is-it-right-for-your-brand" />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Rise of TikTok for Business: Is It Right for Your Brand?" />
        <meta name="twitter:description" content="Learn about the rise of tiktok for business: is it right for your brand? with this comprehensive guide from Odin Digital, Australia's leading digital marketing agency." />
        <meta name="twitter:image" content={heroImage} />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://odindigital.com.au/blog/the-rise-of-tiktok-for-business-is-it-right-for-your-brand"
            },
            "headline": "The Rise of TikTok for Business: Is It Right for Your Brand?",
            "description": "Learn about the rise of tiktok for business: is it right for your brand? with this comprehensive guide from Odin Digital, Australia's leading digital marketing agency.",
            "image": "https://odindigital.com.au/images/blog/tiktok-business-hero.jpg",
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
                "name": "The Rise of TikTok for Business: Is It Right for Your Brand?"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <Header />

        {/* Breadcrumb Navigation */}
        <div className="bg-background/80 backdrop-blur-sm border-b border-border/40 mt-20">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground">The Rise of TikTok for Business</span>
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
                  <Video className="w-4 h-4" />
                  <span className="text-sm font-semibold">Social Media Marketing</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent leading-tight">
                  The Rise of TikTok for Business: Is It Right for Your Brand?
                </h1>

                <div className="flex items-center gap-4 mb-8 text-muted-foreground">
                  <span className="font-medium">Odin Digital Team</span>
                  <span>•</span>
                  <span>January 15, 2025</span>
                  <span>•</span>
                  <span>13 min read</span>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={heroImage} 
                    alt="TikTok for business - small business owner creating content" 
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-elegant">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  Table of Contents
                </h2>
                <nav className="space-y-3">
                  <a href="#no-longer-teens" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    TikTok is No Longer Just for Dancing Teens
                  </a>
                  <a href="#demographics" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Who is on TikTok? A Breakdown of the User Demographics
                  </a>
                  <a href="#case-studies" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Case Studies: Brands That Are Winning on TikTok
                  </a>
                  <a href="#first-video" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    A Simple Framework for Creating Your First TikTok Video
                  </a>
                  <a href="#ads-vs-organic" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    TikTok Ads vs. Organic: Which Strategy is Right for You?
                  </a>
                  <a href="#conclusion" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    To TikTok or Not to TikTok? A Clear Decision-Making Guide
                  </a>
                </nav>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-xl text-muted-foreground leading-relaxed">
                The digital landscape is constantly shifting, and few platforms have caused a seismic shift quite like TikTok. Once dismissed as a fleeting trend for dancing teenagers, the short-form video app has matured into a global powerhouse, transforming everything from music charts to consumer purchasing habits. For any business owner or marketing professional, the question is no longer "What is TikTok?" but rather, <strong>"Is TikTok for business right for my brand?"</strong>
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                This is a critical question. With its unique algorithm and explosive growth, TikTok offers an unparalleled opportunity for organic reach and brand building. However, it also demands a different approach to content creation—one that prioritises authenticity over polish.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                In this comprehensive guide, we'll cut through the noise to provide a clear, actionable framework for deciding if TikTok deserves a place in your <strong>TikTok marketing strategy</strong>. We'll explore the current <strong>TikTok demographics</strong>, dissect successful brand case studies, and break down the simple steps to creating your first video. By the end, you'll have a clear answer to the question: <strong>should I use TikTok</strong>?
              </p>
            </div>
          </section>

          {/* TikTok is No Longer Just for Dancing Teens */}
          <section id="no-longer-teens" className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  TikTok is No Longer Just for Dancing Teens
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  The narrative that TikTok is solely a domain for Gen Z is outdated. While its roots are firmly planted in youth culture, the platform has experienced a rapid and significant expansion in its user base, making it a serious contender in the digital marketing arena.
                </p>

                <p>
                  The sheer scale of the platform is staggering. TikTok has surpassed one billion monthly active users globally, and its financial performance underscores its dominance. In 2024, the platform generated an estimated <strong>$23 billion in revenue</strong>, with a massive 77% of that coming from advertising. This is a clear signal that brands are investing heavily, recognising the platform's power to drive sales and awareness.
                </p>

                <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 my-8">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Key Insight</h3>
                      <p className="text-muted-foreground">
                        A growing number of users, particularly in younger demographics, are now using TikTok as a <strong>search engine</strong>, turning to short-form video for product reviews, local recommendations, and how-to guides. This shift means that if your brand isn't present, you're not just missing out on an advertising channel; you're missing out on a primary source of consumer information.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  The platform's unique "For You Page" (FYP) algorithm is the engine of its success. Unlike platforms that prioritise content from accounts you already follow, the FYP serves up content based on user behaviour, interests, and interactions. This means that even a brand with zero followers can have a video go viral overnight, providing an organic reach opportunity that is virtually impossible to replicate on older social media channels. This democratisation of reach is perhaps the single most compelling reason to consider a <Link to="/services/social-media" className="text-primary hover:underline font-semibold">TikTok for business</Link> presence.
                </p>
              </div>
            </div>
          </section>

          {/* Demographics Section */}
          <section id="demographics" className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Who is on TikTok? A Breakdown of the User Demographics
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground mb-8">
                <p>
                  To determine if TikTok is right for your brand, you must first understand who is actually using it. The audience is far more diverse than you might think, and the key demographics align perfectly with many small business target markets.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src={demographicsImage} 
                  alt="Diverse TikTok users in Australian cafe" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <h3 className="text-2xl font-bold mb-6 text-foreground">The Age Breakdown: Beyond Gen Z</h3>
              
              <p className="text-lg text-muted-foreground mb-6">
                While the 18-24 age group remains the largest segment, the platform's growth is increasingly driven by older users.
              </p>

              <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl overflow-hidden mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-primary text-white">
                        <th className="px-6 py-4 text-left font-semibold">Age Group</th>
                        <th className="px-6 py-4 text-left font-semibold">Percentage of Global Users</th>
                        <th className="px-6 py-4 text-left font-semibold">Key Takeaway for Business</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="px-6 py-4 font-medium">13-17</td>
                        <td className="px-6 py-4">14%</td>
                        <td className="px-6 py-4">High engagement, but ad targeting is limited. Focus on brand awareness and cultural relevance.</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors bg-primary/10">
                        <td className="px-6 py-4 font-bold">18-24</td>
                        <td className="px-6 py-4 font-bold">30.7% - 36.2%</td>
                        <td className="px-6 py-4">The core trendsetters. Ideal for fashion, beauty, tech, and lifestyle brands.</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors bg-primary/10">
                        <td className="px-6 py-4 font-bold">25-34</td>
                        <td className="px-6 py-4 font-bold">33.9%</td>
                        <td className="px-6 py-4">Young professionals and Millennials. Growing purchasing power. Excellent for financial services, home goods, and career-focused content.</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="px-6 py-4 font-medium">35-44</td>
                        <td className="px-6 py-4">15%</td>
                        <td className="px-6 py-4">Established consumers. Focus on family, travel, and niche interests.</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="px-6 py-4 font-medium">45+</td>
                        <td className="px-6 py-4">5% - 10%</td>
                        <td className="px-6 py-4">The fastest-growing segment. Opportunities for brands targeting older, more affluent consumers with specific hobbies.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6 mb-8">
                <p className="text-lg font-semibold text-foreground">
                  The data clearly shows that the platform is dominated by users aged 18 to 34, a demographic with significant disposable income and a strong preference for authentic, video-first content. If your target audience falls within this Millennial and older Gen Z bracket, your customers are already on TikTok.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-foreground">Gender and Global Reach</h3>
              
              <p className="text-lg text-muted-foreground">
                Globally, the gender split is relatively even, with a slight male majority (approximately 53.3% male and 46.5% female). This near-parity means that most brands can find their audience regardless of gender focus.
              </p>

              <p className="text-lg text-muted-foreground">
                The key takeaway here is that TikTok is no longer a niche platform. It is a mainstream channel with a vast, engaged, and increasingly diverse audience. If your current <strong>TikTok marketing strategy</strong> is non-existent because you believe your audience is "too old," it's time to re-evaluate.
              </p>
            </div>
          </section>

          {/* Mid-Post CTA */}
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-glow to-accent p-12 shadow-glow">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
                
                <div className="relative z-10 text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Dominate TikTok?
                  </h3>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Our team of <Link to="/services/social-media" className="underline hover:no-underline font-semibold">social media experts</Link> can help you create a winning TikTok strategy tailored to your business goals.
                  </p>
                  <Button 
                    onClick={openForm}
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                  >
                    Get Your Free Strategy Session
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies Section */}
          <section id="case-studies" className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Case Studies: Brands That Are Winning on TikTok
                </h2>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                The best way to understand the potential of TikTok is to look at the brands that have successfully cracked the code. Their success stories reveal a common thread: they embrace the platform's culture rather than trying to force traditional advertising onto it.
              </p>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 group">
                <img 
                  src={strategyImage} 
                  alt="Marketing team planning TikTok strategy" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="space-y-10">
                {/* Case Study 1 */}
                <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Case Study 1: e.l.f. Cosmetics – The Power of Sound</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    e.l.f. Cosmetics is often cited as a masterclass in <strong>TikTok for business</strong>. They understood early on that sound is the soul of the platform. Instead of relying on visual-only ads, they commissioned an original song, "Eyes. Lips. Face." and launched a hashtag challenge, #eyeslipsface.
                  </p>

                  <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6">
                    <p className="font-semibold text-foreground mb-2">The Lesson:</p>
                    <p className="text-muted-foreground">
                      Don't just make a video; create a moment. e.l.f. turned their brand name into a catchy, shareable sound that users <em>wanted</em> to incorporate into their own content. This is the essence of a successful <strong>TikTok marketing strategy</strong>: providing users with a creative template. The campaign generated billions of views and cemented their brand as culturally relevant.
                    </p>
                  </div>
                </div>

                {/* Case Study 2 */}
                <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Case Study 2: Duolingo – Embracing the Absurd</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    Duolingo, the language-learning app, has achieved viral success by personifying their brand mascot, Duo the Owl. Duo's videos are often bizarre, humorous, and completely unhinged, featuring the mascot in various office antics, chasing celebrities, and participating in trending sounds.
                  </p>

                  <div className="bg-accent/5 border-l-4 border-accent rounded-r-xl p-6">
                    <p className="font-semibold text-foreground mb-2">The Lesson:</p>
                    <p className="text-muted-foreground">
                      <strong>Authenticity and personality win.</strong> Duolingo's content is not about selling the app; it's about entertaining the audience and building a distinct, memorable brand personality. They understand that TikTok users value entertainment over a hard sell. Their content is "lo-fi" and reactive, making it feel less like a corporate account and more like a friend's feed.
                    </p>
                  </div>
                </div>

                {/* Case Study 3 */}
                <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Case Study 3: The Local Café – Community and Education</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    It's not just global brands that succeed. Small businesses, like local cafés, bakeries, and tradies, are using TikTok to great effect. A local baker might post a time-lapse of a complex cake decoration, a <Link to="/pages/industries/plumbers" className="text-primary hover:underline">plumber</Link> might share a quick tip on fixing a leaky tap, or a café owner might show a "day in the life" of their morning rush.
                  </p>

                  <div className="bg-primary-glow/5 border-l-4 border-primary-glow rounded-r-xl p-6">
                    <p className="font-semibold text-foreground mb-2">The Lesson:</p>
                    <p className="text-muted-foreground">
                      <strong>Provide value and a peek behind the curtain.</strong> Small businesses can leverage their local appeal and expertise. By sharing practical, educational, or simply relatable content, they build trust and drive foot traffic. This strategy works because it's inherently authentic and taps into the search behaviour of users looking for local recommendations.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mt-8">
                The common denominator across all successful <strong>TikTok for business</strong> accounts is a willingness to be playful, reactive, and to create content that feels native to the platform.
              </p>
            </div>
          </section>

          {/* A-E-T Framework Section */}
          <section id="first-video" className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  A Simple Framework for Creating Your First TikTok Video
                </h2>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                The biggest hurdle for most businesses is getting started. The pressure to create a viral hit can be paralysing. The good news is that your first video doesn't need to be a masterpiece; it just needs to be authentic.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                Here is a simple, three-step framework—the <strong>A-E-T Framework</strong>—to guide your initial <strong>TikTok marketing strategy</strong> and content creation.
              </p>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 group">
                <img 
                  src={contentCreationImage} 
                  alt="Small business owner filming TikTok content" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-glow">
                      A
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Step 1: <span className="text-primary">A</span>nalyse the Trends (The Hook)</h3>
                      <p className="text-muted-foreground">
                        TikTok content is driven by trends, sounds, and hashtags. Your first step is to spend time on the FYP to see what's currently popular.
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Scroll and Save:</strong>
                        <span className="text-muted-foreground"> Dedicate 15-30 minutes a day to scrolling. Save trending sounds and videos that are relevant to your industry or that you find genuinely entertaining.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Identify the Hook:</strong>
                        <span className="text-muted-foreground"> TikTok videos are won or lost in the first 1-3 seconds. The "hook" is the text overlay or spoken phrase that immediately grabs the viewer's attention and tells them why they should keep watching.</span>
                        <div className="mt-2 bg-primary/5 rounded-lg p-3 text-sm">
                          <em>Examples of effective hooks:</em> "You won't believe what happened next...", "3 things your plumber won't tell you...", "The secret to perfect sourdough is..."
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Keep it Short:</strong>
                        <span className="text-muted-foreground"> While TikTok allows for longer videos, aim for 7-15 seconds for your first few attempts. Shorter videos have a higher chance of being watched on repeat, which the algorithm loves.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Step 2 */}
                <div className="bg-card/50 backdrop-blur-sm border border-accent/10 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-glow">
                      E
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Step 2: <span className="text-accent">E</span>xecute with Authenticity (The Content)</h3>
                      <p className="text-muted-foreground">
                        This is where you film your content. Remember the mantra: <strong>"Don't make ads, make TikToks."</strong> High production value is often a disadvantage, as users prefer content that feels real and relatable.
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Use Your Phone:</strong>
                        <span className="text-muted-foreground"> Film vertically (9:16 aspect ratio) using your smartphone. No need for fancy cameras or lighting rigs—natural light is often best.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Show, Don't Tell:</strong>
                        <span className="text-muted-foreground"> Instead of talking <em>about</em> your product, show it in action. If you sell coffee, show the process of brewing a perfect cup. If you offer a service, show a quick, satisfying result of that service.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Incorporate the Sound:</strong>
                        <span className="text-muted-foreground"> Use the trending sound you saved in Step 1. You can use the sound as background music while you talk over it, or simply use it as the primary audio for a visual-only clip.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Australian Spelling Check:</strong>
                        <span className="text-muted-foreground"> As a brand targeting an Australian audience, remember to use Australian spelling in your on-screen text overlays and captions (e.g., "colour," "organise," "specialise").</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="bg-card/50 backdrop-blur-sm border border-primary-glow/10 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-glow to-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-glow">
                      T
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Step 3: <span className="text-primary-glow">T</span>ag and Engage (The Optimisation)</h3>
                      <p className="text-muted-foreground">
                        The final step is to optimise your video for the algorithm and encourage interaction.
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-glow mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Caption is Key:</strong>
                        <span className="text-muted-foreground"> Your caption should be short, engaging, and include a clear call-to-action (CTA). Ask a question to encourage comments, such as "What's your favourite coffee order?" or "What other plumbing tips do you need?"</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-glow mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Use Relevant Hashtags:</strong>
                        <span className="text-muted-foreground"> Use a mix of broad and niche hashtags.</span>
                        <div className="mt-2 space-y-2 text-sm">
                          <div className="bg-primary-glow/5 rounded-lg p-3">
                            <strong>Broad:</strong> #fyp, #foryoupage, #tiktokviral
                          </div>
                          <div className="bg-primary-glow/5 rounded-lg p-3">
                            <strong>Niche/Relevant:</strong> #smallbusinessaustralia, #sydneyeats, #tiktokmarketingstrategy, #tiktokforbusiness
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-glow mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Engage Immediately:</strong>
                        <span className="text-muted-foreground"> For the first hour after posting, be ready to respond to every comment. This signals to the algorithm that your content is generating discussion, which boosts its visibility.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 mt-8">
                <p className="text-lg font-semibold text-foreground">
                  By following the A-E-T Framework, you can demystify the content creation process and start building momentum on the platform. Want help implementing this? Our <Link to="/services/marketing-consulting" className="text-primary hover:underline">marketing consultants</Link> specialise in TikTok strategies for Australian businesses.
                </p>
              </div>
            </div>
          </section>

          {/* TikTok Ads vs Organic Section */}
          <section id="ads-vs-organic" className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  TikTok Ads vs. Organic: Which Strategy is Right for You?
                </h2>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                Once you've established an organic presence, the next logical step is to consider paid advertising. The decision between focusing on organic content and investing in <strong>TikTok ads</strong> depends on your budget, goals, and timeline.
              </p>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 group">
                <img 
                  src={adsMetricsImage} 
                  alt="Marketing professional reviewing TikTok ads metrics" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Organic Strategy */}
                <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">The Organic Strategy</h3>
                  <p className="text-muted-foreground mb-6 italic">(The Long Game)</p>
                  
                  <p className="text-muted-foreground mb-6">
                    The organic approach is centred on creating native, entertaining content that users discover through the FYP.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Pros:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground"><strong>High Trust and Authenticity:</strong> Organic content is perceived as more genuine, leading to higher brand affinity.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground"><strong>Free Reach:</strong> The potential for viral reach without spending a dollar is the platform's biggest draw.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground"><strong>Brand Personality Building:</strong> It allows you to develop a distinct, relatable brand voice.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Cons:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-0.5 flex-shrink-0">✕</span>
                          <span className="text-muted-foreground"><strong>Time-Intensive:</strong> Requires consistent effort, trend monitoring, and content creation.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-0.5 flex-shrink-0">✕</span>
                          <span className="text-muted-foreground"><strong>Unpredictable Results:</strong> Virality is never guaranteed, and growth can be slow initially.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-0.5 flex-shrink-0">✕</span>
                          <span className="text-muted-foreground"><strong>No Guaranteed Targeting:</strong> You rely on the algorithm to find your audience.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Paid Strategy */}
                <div className="bg-card/50 backdrop-blur-sm border border-accent/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">The Paid Strategy</h3>
                  <p className="text-muted-foreground mb-6 italic">(The Fast Track)</p>
                  
                  <p className="text-muted-foreground mb-6">
                    <strong>TikTok ads</strong> allow you to bypass the organic growth phase and put your content directly in front of a highly targeted audience.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Ad Formats:</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        TikTok offers several ad formats, including In-Feed Ads (which look like regular TikToks), TopView Ads (full-screen takeover upon opening the app), and Branded Hashtag Challenges.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Pros:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground"><strong>Precise Targeting:</strong> You can target users based on demographics, interests, behaviours, and even which creators they follow.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground"><strong>Guaranteed Reach:</strong> You pay for impressions and clicks, ensuring your message is seen.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground"><strong>Scalability:</strong> Successful campaigns can be scaled up quickly to meet sales targets.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Cons:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-0.5 flex-shrink-0">✕</span>
                          <span className="text-muted-foreground"><strong>Cost:</strong> Requires a dedicated budget, which can be prohibitive for very small businesses.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-0.5 flex-shrink-0">✕</span>
                          <span className="text-muted-foreground"><strong>Ad Fatigue:</strong> Users are savvy; poorly disguised ads are often scrolled past. Your ads must still feel like native TikTok content (lo-fi, engaging, and fun).</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 via-primary-glow/10 to-accent/10 border border-primary/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">The Hybrid Approach: The Smart TikTok Marketing Strategy</h3>
                
                <p className="text-muted-foreground mb-6">
                  For most businesses, the optimal approach is a hybrid model that leverages the strengths of both.
                </p>

                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-glow">
                      1
                    </div>
                    <div>
                      <strong className="text-foreground">Start Organic:</strong>
                      <span className="text-muted-foreground"> Use organic content to find your voice, test different content formats, and build a small, loyal following. This is your low-cost R&D phase.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-glow">
                      2
                    </div>
                    <div>
                      <strong className="text-foreground">Amplify Winners:</strong>
                      <span className="text-muted-foreground"> Once an organic video performs exceptionally well (high views, engagement, and completion rate), use <strong>TikTok ads</strong> to "Promote" that video. This is the most efficient use of your ad budget, as you are paying to amplify content that is already proven to resonate with the audience.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-glow">
                      3
                    </div>
                    <div>
                      <strong className="text-foreground">Use Spark Ads:</strong>
                      <span className="text-muted-foreground"> Spark Ads is a format that allows you to boost your own organic posts or posts from creators you partner with. This maintains the authenticity of organic content while giving you the targeting and reach of a paid campaign.</span>
                    </div>
                  </li>
                </ol>

                <p className="text-lg font-semibold text-foreground mt-6">
                  By integrating organic experimentation with strategic paid amplification, you create a powerful, cost-effective <strong>TikTok marketing strategy</strong>. Need help with your <Link to="/services/social-media-advertising" className="text-primary hover:underline">social media advertising</Link>? We're experts at hybrid approaches.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion Section */}
          <section id="conclusion" className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Conclusion: To TikTok or Not to TikTok? A Clear Decision-Making Guide
                </h2>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                The question of <strong>should I use TikTok</strong> for my business is no longer about <em>if</em> the platform is relevant, but <em>how</em> relevant it is to your specific goals.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                TikTok is a powerful, mainstream platform with a diverse and engaged audience, particularly within the lucrative 18-34 age bracket. It offers unparalleled organic reach and is rapidly becoming a key search and discovery tool for consumers.
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-6">The Decision Matrix</h3>

              <p className="text-muted-foreground mb-6">
                Use the following table to help guide your final decision:
              </p>

              <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl overflow-hidden mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-primary text-white">
                        <th className="px-6 py-4 text-left font-semibold">Factor</th>
                        <th className="px-6 py-4 text-left font-semibold">YES, You Should Be on TikTok</th>
                        <th className="px-6 py-4 text-left font-semibold">NO, You Should Wait/Reconsider</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="px-6 py-4 font-semibold">Target Audience</td>
                        <td className="px-6 py-4 text-green-600">Your primary audience is 18-44 years old.</td>
                        <td className="px-6 py-4 text-red-600">Your audience is primarily 55+ and not digitally savvy.</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="px-6 py-4 font-semibold">Content Type</td>
                        <td className="px-6 py-4 text-green-600">Your product/service is highly visual, educational, or easily demonstrated (e.g., food, fitness, DIY, fashion, B2C).</td>
                        <td className="px-6 py-4 text-red-600">Your product/service is highly technical, abstract, or requires long-form explanation (e.g., complex B2B software, highly regulated industries).</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="px-6 py-4 font-semibold">Resources</td>
                        <td className="px-6 py-4 text-green-600">You have the time or personnel to create 3-5 short, authentic videos per week.</td>
                        <td className="px-6 py-4 text-red-600">You can only manage one highly polished, expensive video per month.</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="px-6 py-4 font-semibold">Brand Tone</td>
                        <td className="px-6 py-4 text-green-600">Your brand can be playful, humorous, and embrace a "lo-fi" aesthetic.</td>
                        <td className="px-6 py-4 text-red-600">Your brand must maintain a strictly formal, corporate, or serious tone at all times.</td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition-colors">
                        <td className="px-6 py-4 font-semibold">Goal</td>
                        <td className="px-6 py-4 text-green-600">Your goal is brand awareness, community building, and driving discovery.</td>
                        <td className="px-6 py-4 text-red-600">Your goal is immediate, high-volume, low-cost lead generation (which might be better suited to search ads).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">Final Verdict</h3>

              <div className="space-y-6 text-lg text-muted-foreground mb-8">
                <p>
                  If you answered <strong className="text-green-600">YES</strong> to most of the factors above, then TikTok is a vital component of a modern <strong>TikTok marketing strategy</strong>. The risk of not being on the platform is greater than the risk of trying and failing. Start small, focus on the A-E-T Framework, and be prepared to learn and adapt.
                </p>

                <p>
                  If you answered <strong className="text-red-600">NO</strong> to most factors, it doesn't mean you should ignore TikTok entirely. It means you should monitor it closely and perhaps allocate a small budget to <strong>TikTok ads</strong> to test the waters, rather than committing to a full organic content strategy.
                </p>

                <p>
                  Ultimately, the rise of TikTok is a call for businesses to be more human, more creative, and more responsive. Embrace the chaos, provide value, and you may just find that your brand's next viral moment is waiting on the For You Page.
                </p>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6">
                <p className="text-lg font-semibold text-foreground">
                  Ready to take the leap? Our team at Odin Digital specialises in helping Australian businesses navigate TikTok and other <Link to="/services/social-media" className="text-primary hover:underline">social media platforms</Link> with confidence and strategy.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-glow to-accent p-16 shadow-2xl">
                {/* Animated background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 animate-pulse-slow animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/5 rounded-full -ml-24 -mt-24 animate-float"></div>
                
                <div className="relative z-10 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Take Your Digital Marketing to the Next Level?
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
                    Get a free, no-obligation marketing strategy session with our experts.
                  </p>
                  <Button 
                    onClick={openForm}
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-glow transform hover:scale-105 transition-all duration-300 text-xl px-12 py-8"
                  >
                    Get Your Free Strategy Session
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Author Bio Section */}
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-elegant">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <img 
                    src={odinTeam} 
                    alt="Odin Digital Team" 
                    className="w-32 h-32 rounded-full object-cover shadow-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">About the Author</h3>
                    <p className="text-lg font-semibold text-primary mb-2">Odin Digital Team</p>
                    <p className="text-muted-foreground leading-relaxed">
                      The Odin Digital Team consists of experienced digital marketing strategists, <Link to="/services/seo" className="text-primary hover:underline">SEO specialists</Link>, and content creators dedicated to helping Australian businesses achieve exponential growth through data-driven strategies. With expertise across all major digital platforms including TikTok, Google Ads, and Facebook, we help businesses navigate the ever-evolving digital landscape.
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
