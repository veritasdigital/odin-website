import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SideTab } from '@/components/SideTab';
import { useMarketingForm } from '@/contexts/MarketingFormContext';
import LocationContent from '@/components/LocationContent';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, TrendingUp, Eye, MapPin, BarChart, DollarSign, Shield, RefreshCw, Zap, Award, FileText, Users } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { RelatedLocations } from "@/components/RelatedLocations";
import { getRelatedLocations } from "@/utils/contentClusters";
const GoogleAdsSydney = () => {
  const {
    openForm
  } = useMarketingForm();
  const [showStickyButton, setShowStickyButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://odindigital.com.au/google-ads-sydney#professionalservice",
    "name": "Google Ads Management Sydney",
    "description": "Performance-focused Google Ads agency in Sydney. We specialize in PPC management for Sydney businesses, focusing on ROI and competitive intelligence in Australia's most expensive market. $574M+ in client revenue. No lock-in contracts.",
    "url": "https://odindigital.com.au/google-ads-sydney",
    "provider": {
      "@id": "https://odindigital.com.au/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Sydney",
      "containedIn": {
        "@type": "State",
        "name": "New South Wales"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "283",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$$"
  };
  const problemPoints = [{
    icon: DollarSign,
    title: "High CPC Crisis",
    description: "Sydney has the highest CPCs in Australia. In competitive industries like law, finance, and healthcare, you can easily pay $50-$150+ per click. If your adwords management sydney agency isn't aggressively optimizing for Quality Score and CPC reduction, you are hemorrhaging money."
  }, {
    icon: MapPin,
    title: "Geographic Waste",
    description: "Most adwords management sydney agencies don't properly set up location targeting. Your ads are shown to people in regional NSW or even interstate who will never become your customers. You're paying premium Sydney CPCs for clicks from people who can't use your service."
  }, {
    icon: Eye,
    title: "Set It and Forget It",
    description: "A typical google agency sydney will set up your campaigns and then do minimal optimization. In Sydney's ultra-competitive market, search trends change daily. Competitors adjust their strategies hourly. If your campaigns are not actively monitored and optimized daily, you are being left behind."
  }, {
    icon: BarChart,
    title: "Vanity Metrics",
    description: "Your last adwords agency sydney probably sent you monthly reports full of impressions, clicks, and CTR. But none of these metrics pay your bills. What matters is your Cost Per Acquisition (CPA) and Return on Ad Spend (ROAS). If your agency isn't laser-focused on these, you are wasting money."
  }, {
    icon: Target,
    title: "Competitive Blindness",
    description: "Sydney is Australia's most competitive market. If your ppc sydney agency isn't monitoring what your competitors are doing daily, adjusting bids, and adapting to market changes, you are fighting blind. Most agencies don't do this. We do."
  }, {
    icon: FileText,
    title: "Landing Page Disaster",
    description: "Your ad is only as good as the landing page it sends traffic to. Most agencies don't optimize landing pages. They send expensive Sydney clicks to generic, poorly-converting pages. This is why your CPA is sky-high and your ROAS is terrible."
  }];
  const solutions = [{
    icon: MapPin,
    title: "Hyper-Local Targeting: Your Service Area Only",
    description: "We set up precise geographic targeting to ensure your ads are only shown to people within your exact service area. Whether it's a specific suburb, a radius from your business, or Sydney metro-wide, we eliminate geographic waste completely."
  }, {
    icon: TrendingUp,
    title: "Conversion-First Campaign Structure",
    description: "We don't optimize for clicks. We optimize for conversions. Every keyword, ad group, and bid adjustment is designed to lower your CPA and increase your ROAS. Your campaigns are built to generate revenue, not vanity metrics."
  }, {
    icon: RefreshCw,
    title: "Active, Daily Optimization with Competitive Intelligence",
    description: "We review your campaigns daily, analyzing performance, adjusting bids, testing new ad copy, and monitoring competitor activity. We treat your budget like our own because we know that efficiency is the key to profitability in Sydney's expensive market."
  }, {
    icon: Zap,
    title: "Landing Page Optimization (CRO)",
    description: "We optimize your landing pages to ensure maximum conversion rates, aligning messaging, design, and calls to action. In Sydney's market where CPCs are sky-high, improving your conversion rate by even 20% can double your profitability."
  }, {
    icon: Shield,
    title: "Transparent, ROI-Focused Reporting",
    description: "Our reports focus on the metrics that matter: CPA, ROAS, Revenue Generated, and Customer Lifetime Value. You will always know exactly where your budget is going and what it is returning. No fluff. No misleading data. Just clear, actionable insights."
  }];
  const services = [{
    icon: DollarSign,
    title: "Google Ads Management",
    description: "Full-service management of your Google Search, Display, Shopping, and YouTube campaigns. We handle everything from keyword research to ad creation, bid management, and ongoing optimization."
  }, {
    icon: Zap,
    title: "Pay Per Click Sydney",
    description: "Precision-focused PPC campaigns across Google, Meta, LinkedIn, and other platforms designed to maximize ROI. We eliminate waste, target high-intent searchers, and focus on the metrics that actually drive business growth."
  }, {
    icon: Target,
    title: "Landing Page Optimization (CRO)",
    description: "Your ad is only as good as the page it sends traffic to. We optimize your landing pages to ensure maximum conversion rates, aligning messaging, design, and calls to action to maximize your Sydney ad spend."
  }, {
    icon: Award,
    title: "Retargeting Campaigns",
    description: "Most visitors don't convert on their first visit. We set up strategic retargeting campaigns to re-engage visitors and guide them back to conversion, maximizing the value of every Sydney click."
  }, {
    icon: BarChart,
    title: "Competitive Intelligence & Market Analysis",
    description: "We actively monitor your competitors daily, analyzing their ad copy, landing pages, and bidding strategies. We use this intelligence to keep you one step ahead in Sydney's ultra-competitive market."
  }];
  const whyChooseUs = [{
    icon: MapPin,
    title: "Sydney Market Expertise",
    description: "We understand the unique challenges of Sydney's ultra-competitive market. We know which suburbs to target, how to handle high CPCs, and how to outmaneuver your competitors."
  }, {
    icon: Award,
    title: "Proven Track Record",
    description: "$574M+ in verified client revenue. 95% client retention rate. We have delivered exceptional ROAS for Sydney businesses across dozens of industries."
  }, {
    icon: Shield,
    title: "No Lock-In Contracts",
    description: "We don't trap you in long-term contracts. Our focus on ROAS is our guarantee. If we're not generating a positive return, you're free to leave at any time. We put the risk on us, not you."
  }, {
    icon: Eye,
    title: "Full Transparency",
    description: "You will have full access to your Google Ads account and our detailed reports. We focus on the metrics that matter: CPA, ROAS, and Revenue Generated. No smoke and mirrors. Just results."
  }];
  const faqs = [{
    question: "How much budget do I need for Google Ads in Sydney?",
    answer: "The required budget depends on your industry competition and target CPA. For most Sydney businesses, we recommend starting with $3,000 - $6,000 per month to allow for sufficient data collection and optimization in this highly competitive market. Our ppc management sydney team will analyze your market during your free audit and recommend a precise, efficient budget."
  }, {
    question: "How long does it take to see results from ppc sydney campaigns?",
    answer: "Unlike SEO, PPC delivers immediate results. You will see traffic and leads within days of launch. The first 4-6 weeks are dedicated to data collection and optimization. Significant improvements in CPA and ROAS typically occur within 2-3 months as our ppc experts sydney refine the campaigns."
  }, {
    question: "What is the difference between Google Ads and adwords sydney?",
    answer: "Google Ads is the current name for the platform previously known as Google AdWords. They are the same thing. Whether you call it adwords sydney or Google Ads, we are the google ads agency sydney that manages it all."
  }, {
    question: "Do you offer an adwords management sydney service with a performance guarantee?",
    answer: "We offer the best guarantee in the industry: No Lock-In Contracts. Our focus on ROAS is our guarantee. If we are not generating a positive return on your ad spend, you are free to leave at any time. We put the risk on us, not you."
  }, {
    question: "Why should I choose Odin Digital over a large national google agency sydney?",
    answer: "Large national agencies often apply generic strategies and are slow to adapt. We are a lean team of ppc experts sydney who provide hyper-focused, personalized service. We understand the Sydney market, we monitor your competitors daily, and we focus on your ROAS, not our retainer."
  }, {
    question: "Do you manage other pay per click sydney platforms like Meta Ads?",
    answer: "Yes. We are a full-service ppc agency sydney and manage campaigns across Google, Meta (Facebook/Instagram), LinkedIn, and other high-value platforms. We create a holistic ppc advertising sydney strategy for maximum reach and ROI."
  }, {
    question: "How do you prevent my budget from being wasted on clicks from outside my service area?",
    answer: "We use precise geographic targeting (radius targeting, suburb targeting, or region-wide targeting) to ensure your ads are only shown to people within your exact service area. We also use IP exclusions and location bid adjustments to maximize efficiency. This is especially critical in Sydney's large, diverse market."
  }, {
    question: "Can you help me with my landing pages?",
    answer: "Yes. Our service includes Landing Page Optimization (CRO). Your ad is only as good as the page it sends traffic to. We ensure your landing pages are perfectly aligned with your ad copy and designed to maximize conversions. In Sydney's expensive market, this is non-negotiable."
  }, {
    question: "What metrics do you report on?",
    answer: "We report on the metrics that matter: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Quality, Revenue Generated, and Customer Lifetime Value (CLV). We move beyond vanity metrics like impressions and clicks to focus on what actually drives your business forward."
  }, {
    question: "How is your adwords management company sydney different from others?",
    answer: "We are obsessed with efficiency and ROI. We don't just manage your campaigns—we treat your budget like our own. We actively monitor your competitors daily and adjust your strategy to ensure you stay ahead. Our 95% client retention rate is proof that we consistently deliver value, month after month."
  }, {
    question: "How do you handle Sydney's high CPCs?",
    answer: "We use a combination of strategies to reduce CPCs and improve ROI: Quality Score Optimization (reduce CPCs by 20-50%), Aggressive Negative Keywords (filter out low-intent traffic), Audience Layering (target high-intent buyers only), and Landing Page Optimization (improve conversion rates so you can afford higher CPCs and still maintain profitability)."
  }, {
    question: "Do you offer ppc company reviews or case studies?",
    answer: "Yes. We have numerous case studies and client testimonials demonstrating our ability to deliver exceptional ROAS in competitive markets like Sydney. Contact us for specific examples relevant to your industry."
  }];
  return <>
      <Helmet>
        <title>Google Ads Agency Sydney | PPC Management Experts | Odin Digital</title>
        <meta name="description" content="Stop burning money on Google Ads. Odin Digital is the PPC agency Sydney trusts for maximum ROI in Australia's most competitive market. Precision targeting, daily optimization, no lock-in contracts." />
        <link rel="canonical" href="https://odindigital.com.au/services/google-ads-sydney" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <Header />
      <SideTab />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:py-24 lg:py-32 overflow-hidden gradient-hero">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-glow" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 animate-slide-up leading-tight text-slate-950 lg:text-6xl">
                Sydney Google Ads Agency: Stop Burning Money. Start Dominating Australia's Biggest Market.
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6 leading-snug text-slate-950 md:text-3xl">
                The PPC Agency Sydney Businesses Trust for Maximum ROI in Australia's Most Competitive Digital Market.
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed text-slate-950">
                Partner with Odin Digital and Turn Your Google Ads Budget into Verified Revenue.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
                <div className="bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg">
                  <p className="text-2xl md:text-3xl font-bold text-slate-950">$574M+</p>
                  <p className="text-xs md:text-sm text-slate-950">Client Revenue</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg">
                  <p className="text-2xl md:text-3xl font-bold text-slate-950">95%</p>
                  <p className="text-xs md:text-sm text-slate-950">Client Retention</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg">
                  <p className="text-2xl md:text-3xl font-bold text-slate-950">10+</p>
                  <p className="text-xs md:text-sm text-slate-950">Years Experience</p>
                </div>
              </div>

              <Button onClick={openForm} size="xl" className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white text-sm md:text-base lg:text-lg px-4 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6 shadow-primary transition-smooth w-full sm:w-auto leading-tight whitespace-normal break-words text-center h-auto min-h-[3rem]">
                Get FREE Sydney PPC Strategy →
              </Button>
            </div>
          </div>
        </section>

        {/* Problem/Agitation Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                The Problem: Why Most Adwords Management Sydney Agencies Fail
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Sydney businesses face the most intense digital advertising competition in Australia. Generic adwords agency sydney providers simply can't compete.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {problemPoints.map((point, index) => {
              const Icon = point.icon;
              return <Card key={index} className="p-5 md:p-6 lg:p-8 shadow-card hover:shadow-primary transition-smooth bg-card">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{point.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  </Card>;
            })}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Button onClick={openForm} size="lg" className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-primary transition-smooth w-full sm:w-auto text-sm md:text-base px-6 md:px-8 py-4 md:py-5 whitespace-normal break-words text-center leading-tight h-auto min-h-[3rem]">
                Stop the Budget Bleed: Talk to a PPC Expert →
              </Button>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                The Odin Digital Solution: Precision-Focused PPC Management Sydney
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We are the adwords management sydney team that eliminates waste and maximizes every dollar of your ad spend.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return <Card key={index} className="p-5 md:p-6 shadow-card hover:shadow-primary transition-smooth bg-card">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3 leading-snug">{solution.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{solution.description}</p>
                  </Card>;
            })}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Button onClick={openForm} size="lg" className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-primary transition-smooth w-full sm:w-auto text-sm md:text-base px-6 md:px-8 py-4 md:py-5 whitespace-normal break-words text-center leading-tight h-auto min-h-[3rem]">
                See Our Sydney PPC Packages →
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                Our Google Ads Services: Built for Sydney's Competitive Market
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                As a leading google agency sydney wide, we offer a full spectrum of PPC services designed to dominate your local market.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => {
              const Icon = service.icon;
              return <Card key={index} className="p-5 md:p-6 shadow-card hover:shadow-primary transition-smooth bg-card">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3 leading-snug">{service.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{service.description}</p>
                  </Card>;
            })}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Button onClick={openForm} size="lg" className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-primary transition-smooth w-full sm:w-auto text-sm md:text-base px-4 md:px-6 lg:px-8 py-4 md:py-5 whitespace-normal break-words text-center leading-tight h-auto min-h-[3rem]">
                Ready for a Custom Strategy? →
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                Why Sydney Businesses Choose Odin Digital
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We are not a generalist agency that dabbles in PPC. We are specialists who understand the unique challenges of Sydney's ultra-competitive market.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {whyChooseUs.map((reason, index) => {
              const Icon = reason.icon;
              return <Card key={index} className="p-5 md:p-6 shadow-card hover:shadow-primary transition-smooth bg-card">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3 leading-snug">{reason.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{reason.description}</p>
                  </Card>;
            })}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Button onClick={openForm} size="lg" className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-primary transition-smooth w-full sm:w-auto text-sm md:text-base px-6 md:px-8 py-4 md:py-5 whitespace-normal break-words text-center leading-tight h-auto min-h-[3rem]">
                Talk to a Sydney PPC Specialist →
              </Button>
            </div>
          </div>
        </section>

        {/* Location-Specific Content */}
        <LocationContent city="Sydney" serviceType="Google Ads" />

        {/* FAQ Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                FAQs: Your Questions About Google Ads in Sydney Answered
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We know you have specific concerns about ad spend and agency performance in Sydney's expensive market. Here are clear, honest answers.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-4 md:px-6 shadow-card">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary text-sm md:text-base py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight text-slate-950 lg:text-5xl">
                Ready to Stop Burning Money and Start Dominating Sydney?
              </h2>
              <p className="text-lg md:text-xl mb-6 md:mb-8 leading-relaxed text-slate-950">
                Stop guessing with your ppc sydney budget. Start working with ppc experts sydney who deliver precision, transparency, and profit in Australia's most competitive market.
              </p>
              <Button onClick={openForm} size="xl" className="bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white text-sm md:text-base lg:text-lg px-4 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6 shadow-primary transition-smooth w-full sm:w-auto leading-tight whitespace-normal break-words text-center h-auto min-h-[3rem]">
                Claim FREE Sydney PPC Strategy →
              </Button>
            </div>
          </div>
        </section>
      </main>


      <RelatedLocations 
        locations={getRelatedLocations("Sydney", "google-ads")}
        title="Google Ads Services in Other Australian Cities"
      />

      <Footer />

      {/* Sticky Mobile CTA */}
      {showStickyButton && <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white shadow-lg md:hidden border-t border-border">
          <Button onClick={openForm} className="w-full bg-[#D91C5C] hover:bg-[#D91C5C]/90 text-white shadow-primary text-sm py-5 whitespace-normal break-words text-center leading-tight h-auto min-h-[3rem]">
            Get FREE Strategy Session →
          </Button>
        </div>}

      <MarketingFormModal />
    </>;
};
export default GoogleAdsSydney;