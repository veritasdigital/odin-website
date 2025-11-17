import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { CheckCircle, Users, Heart, Share2, MessageSquare, Camera, TrendingUp } from "lucide-react";
import { HubPageLocations } from "@/components/HubPageLocations";
import { socialMediaCluster } from "@/utils/contentClusters";

export default function SocialMedia() {
  const { openForm } = useMarketingForm();

  const features = [
    "Content strategy development",
    "Post creation and scheduling",
    "Community management",
    "Paid social advertising",
    "Influencer partnerships",
    "Social media analytics",
    "Brand voice development",
    "Crisis management",
    "Hashtag strategy",
    "Cross-platform optimization"
  ];

  const platforms = [
    { name: "Facebook", users: "2.9B+", strength: "Community Building" },
    { name: "Instagram", users: "2B+", strength: "Visual Storytelling" },
    { name: "LinkedIn", users: "900M+", strength: "B2B Networking" },
    { name: "TikTok", users: "1B+", strength: "Viral Content" },
    { name: "Twitter/X", users: "500M+", strength: "Real-time Engagement" },
    { name: "YouTube", users: "2.7B+", strength: "Video Marketing" }
  ];

  const benefits = [
    {
      icon: Users,
      title: "200% Follower Growth",
      description: "Average increase in engaged followers across all platforms"
    },
    {
      icon: Heart,
      title: "5x Engagement Rate",
      description: "Higher likes, comments, and shares with strategic content"
    },
    {
      icon: TrendingUp,
      title: "300% Lead Increase",
      description: "More qualified leads generated through social channels"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Develop platform-specific strategies aligned with your business goals and audience."
    },
    {
      step: "02",
      title: "Content Creation",
      description: "Create engaging, brand-consistent content that resonates with your target audience."
    },
    {
      step: "03",
      title: "Publishing & Engagement",
      description: "Schedule posts optimally and actively engage with your community in real-time."
    },
    {
      step: "04",
      title: "Analyze & Optimize",
      description: "Track performance metrics and continuously optimize strategy for better results."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MarketingFormModal />
      <SideTab />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white via-muted/30 to-muted/20">
        {/* Animated background blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-muted/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-muted/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        
        {/* Floating Circles with white/glass effect */}
        <div className="absolute top-32 left-1/4 w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" />
        <div className="absolute top-64 right-1/3 w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-48 left-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/5 w-14 h-14 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '2.8s' }} />
        
        {/* Geometric Shapes */}
        <div className="absolute top-40 right-1/4 w-24 h-24 bg-white/15 backdrop-blur-sm border border-white/30 rounded-lg rotate-45 animate-float shadow-lg" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full animate-float shadow-lg" style={{ animationDelay: '2.5s' }} />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Social Media Marketing</Badge>
            <h1 className="text-5xl md:text-7xl font-black text-charcoal mb-8 animate-fade-in">
              Stop Posting Into the Void
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/70 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Build brand awareness and engage your audience across all major social platforms with content that drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button variant="cta" size="xl" onClick={openForm}>
                Get Social Media Strategy
              </Button>
              <Button variant="outline" size="xl" className="border-primary hover:bg-primary hover:text-white">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              We Master Every Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each social platform has its unique audience and best practices. We know how to succeed on all of them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-glow transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-2">{platform.name}</h3>
                <p className="text-primary font-semibold mb-2">{platform.users} users</p>
                <p className="text-muted-foreground text-sm">{platform.strength}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Social Media Results That Matter
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just build followers - we build engaged communities that convert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-glow transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8">
                Complete Social Media Management
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                From strategy to execution, we handle every aspect of your social media presence so you can focus on running your business.
              </p>
              <Button variant="cta" size="lg" onClick={openForm}>
                Start Building Your Community
              </Button>
            </div>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Service Features</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Our Social Media Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A strategic approach that builds authentic engagement and drives business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-glow transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Content That Captivates
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We create diverse content formats that keep your audience engaged and coming back for more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-glow transition-all duration-300">
              <Camera className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-bold text-foreground mb-2">Visual Content</h3>
              <p className="text-muted-foreground text-sm">Eye-catching graphics, photos, and videos</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-glow transition-all duration-300">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-bold text-foreground mb-2">Engaging Copy</h3>
              <p className="text-muted-foreground text-sm">Compelling captions that drive action</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-glow transition-all duration-300">
              <Share2 className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-bold text-foreground mb-2">Viral Content</h3>
              <p className="text-muted-foreground text-sm">Shareable posts that expand your reach</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-glow transition-all duration-300">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-bold text-foreground mb-2">Community Posts</h3>
              <p className="text-muted-foreground text-sm">Content that builds loyal communities</p>
            </Card>
          </div>
        </div>
      </section>


      {/* All Social Media Services by Location */}
      <HubPageLocations 
        spokes={socialMediaCluster.spokes}
        title="Social Media Advertising Across Australia"
        description="Expert Facebook, Instagram, TikTok, and LinkedIn advertising services across major Australian cities."
      />

      {/* CTA Section */}
      <section className="relative py-24 gradient-hero overflow-hidden">
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
        
        {/* Background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{ animationDelay: '3s' }} />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Ready to Amplify Your Social Presence?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Let our social media experts build an engaged community that drives real business results.
          </p>
          <Button variant="cta" size="xl" onClick={openForm}>
            <Users className="w-5 h-5 mr-2" />
            Get Your Social Media Strategy
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}