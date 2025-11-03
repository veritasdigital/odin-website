import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet";

interface CaseStudyProps {
  industry: string;
  clientName: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  testimonialQuote?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  services: string[];
  websiteUrl?: string;
}

const CaseStudyCard = ({ 
  industry, 
  clientName, 
  description, 
  challenge, 
  solution, 
  result, 
  testimonialQuote,
  metrics, 
  services,
  websiteUrl 
}: CaseStudyProps) => (
  <Card className="overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300">
    <CardContent className="p-0">
      <div className="grid lg:grid-cols-5 gap-8 p-8">
        {/* Left Column - Narrative */}
        <div className="lg:col-span-3 space-y-6">
          <div className="space-y-3">
            <Badge variant="secondary" className="mb-2">
              {industry} | ⭐⭐⭐⭐⭐
            </Badge>
            <h3 className="text-3xl font-bold text-foreground">{clientName}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <Target className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
                <p className="text-muted-foreground">{challenge}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Our Solution</h4>
                <p className="text-muted-foreground">{solution}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">The Result</h4>
                <p className="text-muted-foreground">{result}</p>
              </div>
            </div>
          </div>

          {testimonialQuote && (
            <div className="bg-accent/50 p-6 rounded-lg border-l-4 border-primary">
              <p className="text-foreground italic">"{testimonialQuote}"</p>
            </div>
          )}
        </div>

        {/* Right Column - Metrics */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-accent/30 rounded-lg p-6 space-y-4">
            <h4 className="font-semibold text-foreground mb-4">Campaign Performance</h4>
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex justify-between items-start pb-3 border-b border-border/50 last:border-0">
                <span className="text-sm text-muted-foreground">{metric.label}</span>
                <span className="font-semibold text-foreground text-right">{metric.value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {services.map((service, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {service}
              </Badge>
            ))}
            {websiteUrl && (
              <Badge variant="default" className="text-xs cursor-pointer">
                Visit Website
              </Badge>
            )}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const OurClients = () => {
  const caseStudies: CaseStudyProps[] = [
    {
      industry: "Furniture Retail",
      clientName: "ADRIATIC FURNITURE",
      description: "One of Australia's largest furniture retailers, family owned and operated since 1974. When they came to us, they had mastered retail but were new to ecommerce and needed an agency they could trust with their brand reputation.",
      challenge: "They needed to transition to ecommerce while maintaining brand reputation and generating positive ROI from day one without any hiccups.",
      solution: "We implemented an omni-channel marketing strategy with Google Ads, Social Media, and SEO for their best selling products and new higher margin categories.",
      result: "712% return on investment from day one and still growing. Breaking records while competitors struggled with ecommerce transition.",
      metrics: [
        { label: "Client Since", value: "2020" },
        { label: "Return on Investment", value: "712%" },
        { label: "Services Delivered", value: "Multi-Channel" },
        { label: "Business Growth", value: "Record Breaking" },
        { label: "Status", value: "Still Growing" }
      ],
      services: ["Social Media", "Google Ads", "SEO"],
      websiteUrl: "#"
    },
    {
      industry: "Jewelry",
      clientName: "YCL JEWELS",
      description: "Award-winning jewelry brand that needed to compete against industry giants like Tiffany & Co and Cartier. When they came to us, they had beautiful products but were invisible online in a market dominated by massive competitors.",
      challenge: "Breaking through in a market dominated by household names like Tiffany & Co and Cartier, while establishing brand credibility and driving sales for a smaller jewelry brand.",
      solution: "We implemented a comprehensive strategy combining Google Ads for immediate visibility, SEO to outrank competitors organically, and conversion rate optimisation to maximise every visitor.",
      result: "292% increase in monthly revenue and successfully outranking massive competitors in search results, achieving international exposure and massive sales growth.",
      metrics: [
        { label: "Client Period", value: "2018-2022" },
        { label: "Revenue Increase", value: "292%" },
        { label: "Competitor Ranking", value: "Outranked Giants" },
        { label: "Market Position", value: "Award-Winning" },
        { label: "International Reach", value: "Achieved" }
      ],
      services: ["Google Ads", "SEO", "CRO"],
      websiteUrl: "#"
    },
    {
      industry: "Consulting",
      clientName: "BOURKEHOOD",
      description: "Global innovation funding consultancy that had built a successful business through word of mouth over many years. They needed to scale beyond personal networks and create predictable lead generation systems to support their growth ambitions.",
      challenge: "Breaking free from relying solely on word-of-mouth referrals and creating a scalable lead generation system for a specialised B2B consulting service in the innovation funding space.",
      solution: "We built sophisticated sales funnels and implemented targeted Google Ads campaigns designed to capture high-intent prospects actively seeking innovation funding assistance.",
      result: "Generated $1.6M in revenue and acquired over 100 new clients in just 9 months, completely transforming their business model from reactive to proactive growth.",
      metrics: [
        { label: "Timeline", value: "9 Months" },
        { label: "Revenue Generated", value: "$1.6M" },
        { label: "New Clients", value: "100+" },
        { label: "Business Model", value: "Transformed" },
        { label: "Growth Status", value: "Scalable" }
      ],
      services: ["Sales Funnels", "Google Ads", "B2B Strategy"],
      websiteUrl: "#"
    },
    {
      industry: "Mining Equipment",
      clientName: "MINING STORE AUSTRALIA",
      description: "Leading mining equipment supplier that struggled with policy violations and ad blocks from previous agencies. They needed a partner who understood the complexities of advertising in the mining industry and could deliver consistent, compliant campaigns.",
      challenge: "Previous agencies lacked the knowledge to understand policy requirements for mining equipment advertising, resulting in constant ad blocks and poor performance without proper account management.",
      solution: "Before taking payment, we conducted a comprehensive business audit, resolved all policy issues, and implemented compliant advertising strategies with ongoing consultation and business optimisation advice.",
      result: "Achieved consistent lead flow with transparent reporting, strategic business consulting, and sustainable growth while maintaining compliance and building a long-term partnership based on trust and results.",
      metrics: [
        { label: "Client Since", value: "2021" },
        { label: "Pre-Payment Audit", value: "Completed" },
        { label: "Policy Issues", value: "Resolved" },
        { label: "Lead Flow", value: "Consistent" },
        { label: "Partnership", value: "Long-term" }
      ],
      services: ["Policy Compliance", "Business Consulting", "Transparency"],
      websiteUrl: "#"
    },
    {
      industry: "Health Supplements",
      clientName: "KRUSH ORGANICS",
      description: "Cutting-edge supplement company operating in one of the most challenging digital marketing landscapes. Traditional advertising platforms severely restrict supplement advertising, making growth extremely difficult for most companies in this space.",
      challenge: "Scaling a supplement business when traditional ad platforms like Facebook and Google severely restrict or ban supplement advertising, requiring innovative alternative marketing strategies.",
      solution: "We pioneered an innovative influencer marketing strategy combined with content marketing and email campaigns to build brand awareness and drive sales without relying on restricted ad platforms.",
      result: "Scaled from $0 to $250K monthly revenue in just 6 months, breaking industry scaling records in a sector that most agencies refuse to service due to platform restrictions.",
      testimonialQuote: "We broke scaling records in a ruthless industry that ad platforms basically refuse to service - Krush Organics Team",
      metrics: [
        { label: "Timeline", value: "6 Months" },
        { label: "Monthly Revenue", value: "$250K" },
        { label: "Starting Point", value: "$0" },
        { label: "Industry Challenge", value: "Platform Restrictions" },
        { label: "Industry Records", value: "Broken" }
      ],
      services: ["Influencer Marketing", "Content Strategy", "Email Marketing"],
      websiteUrl: "#"
    },
    {
      industry: "Legal Services",
      clientName: "ASTON LEGAL GROUP",
      description: "Family law specialists operating in one of the most competitive legal markets. They needed to reduce their client acquisition costs while maintaining the quality of leads in an industry where every click costs significantly more than most other sectors.",
      challenge: "Reducing cost per client acquisition in the ruthlessly competitive family law space where advertising costs are among the highest in any industry and competition is fierce.",
      solution: "We created highly targeted landing pages designed specifically for family law clients, combined with precision Google Ads targeting and conversion rate optimisation to maximise every dollar spent.",
      result: "Achieved a 51% reduction in cost per new client, allowing them to maximise billable hours while helping more families in need of legal assistance.",
      testimonialQuote: "51% decrease in cost per new client allowed us to maximise billables and help amazing families - Aston Legal Group Team",
      metrics: [
        { label: "Client Since", value: "2023" },
        { label: "Cost Reduction", value: "51%" },
        { label: "Industry", value: "Family Law" },
        { label: "Competition Level", value: "Ruthless" },
        { label: "Families Helped", value: "More" }
      ],
      services: ["Landing Pages", "Google Ads", "CRO"],
      websiteUrl: "#"
    },
    {
      industry: "Landscaping",
      clientName: "LADYBUG LANDSCAPING",
      description: "Toronto-based landscaping company with almost 20 years of experience providing residential, commercial and strata landscaping services. Despite their expertise and strong word-of-mouth reputation, they struggled with inconsistent lead flow that made business planning difficult.",
      challenge: "After almost 20 years in business, they had never achieved consistent lead flow. While they had recurring business and word-of-mouth, growth was unpredictable and difficult to scale.",
      solution: "We implemented a search and intent-based strategy using Google Ads and SEO to target qualified prospects looking for premium landscaping services that matched their ideal client profile.",
      result: "Generated 10-15 new enquiries per week consistently, adding $380,000 in annual revenue in the first 12 months and providing the predictable growth they had sought for decades.",
      testimonialQuote: "It's very reassuring to have a consistent source of new business - Alan Stratford, Ladybug Landscaping",
      metrics: [
        { label: "Client Since", value: "2022" },
        { label: "Annual Revenue Added", value: "$380K" },
        { label: "Weekly Enquiries", value: "10-15" },
        { label: "Business Experience", value: "20+ Years" },
        { label: "Lead Consistency", value: "Achieved" }
      ],
      services: ["Google Ads", "SEO", "Premium Targeting"]
    },
    {
      industry: "Painting Services",
      clientName: "STATEWIDE PAINTING",
      description: "Premium painting company specialising in residential and commercial services throughout the state. Despite their high-quality workmanship and customer satisfaction, they faced the challenge of unpredictable revenue streams and sporadic project enquiries that made scaling difficult.",
      challenge: "Converting from unpredictable revenue streams to consistent growth, while competing in a market where clients often prioritise cost over quality for premium painting services.",
      solution: "We launched targeted Google Ads campaigns focusing on high-intent keywords and implemented a comprehensive SEO strategy, emphasising their premium quality and customer satisfaction to attract the right clients.",
      result: "Achieved 20-25 new enquiries per week, doubled conversion rates from Google Ads, and increased organic traffic by 70%, completely transforming their business model to sustainable growth.",
      testimonialQuote: "Investing in digital marketing with this team has transformed our business - Jackson, Statewide Painting",
      metrics: [
        { label: "Client Since", value: "2022" },
        { label: "Weekly Enquiries", value: "20-25" },
        { label: "Organic Traffic Increase", value: "+70%" },
        { label: "Conversion Rate", value: "Doubled" },
        { label: "Business Model", value: "Transformed" }
      ],
      services: ["Google Ads", "SEO", "Premium Positioning"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Our Clients - Real Results & Case Studies | Odin Digital</title>
        <meta name="description" content="See exactly how our proven strategies have transformed businesses across Australia. Real results from real clients who trusted us to grow their businesses." />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-accent/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Badge variant="secondary" className="mb-4">
              Proven Results & Case Studies
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Odin Digital Reviews From Real Clients
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See exactly how our proven strategies have transformed businesses across Australia. These aren't theoretical case studies - these are real results from real clients who trusted us to grow their businesses.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">$50M+</div>
                <div className="text-sm text-muted-foreground">Total Revenue Generated</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Businesses Transformed</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">352%</div>
                <div className="text-sm text-muted-foreground">Record ROI Achievement</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">5.2X</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study Header */}
      <section className="py-12 bg-accent/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">Featured Case Study</h2>
          <p className="text-xl text-muted-foreground">
            How we helped Australia's largest furniture retailer achieve 712% ROI
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {caseStudies.map((study, idx) => (
            <CaseStudyCard key={idx} {...study} />
          ))}
        </div>
      </section>

      {/* Performance Guarantee */}
      <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <CheckCircle2 className="w-16 h-16 text-primary mx-auto" />
          <h2 className="text-4xl font-bold text-foreground">Our 90-Day Performance Guarantee</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're so confident in our ability to deliver results that we guarantee a minimum 200% increase in qualified leads within 90 days, or we'll continue working at no charge until we achieve your goals.
          </p>
          <Button variant="cta" size="lg" className="mt-6">
            Get Your Guaranteed Results
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurClients;
