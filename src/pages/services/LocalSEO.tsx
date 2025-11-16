import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, MapPin, Phone, AlertTriangle, Link2, TrendingDown, Globe, Star, Shield, CheckCircle2, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LocalSEO = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate("/contact");
  };

  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-primary" />,
      title: "GBP Scam Epidemic",
      description: "Google Business Profile scams are rampant. Bad actors hijack listings, fake agencies promise instant rankings, and businesses lose control. You need a local SEO company that protects your digital assets."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-primary" />,
      title: "Set It and Forget It Myth",
      description: "Local SEO is not a one-time setup. Most agencies build your citations, optimize your GBP once, and disappear. The Local 3-Pack is constantly changing, requiring ongoing management and optimization."
    },
    {
      icon: <Link2 className="w-8 h-8 text-primary" />,
      title: "Inconsistent NAP Data",
      description: "Your business name, address, and phone number must be identical across hundreds of directories. One character off and Google's trust in your business plummets, killing your local rankings."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Generic National SEO",
      description: "Most agencies apply broad, national SEO strategies to local businesses. This fails because local search has unique ranking factors like GBP signals, reviews, and proximity that national SEO ignores."
    }
  ];

  const solutions = [
    {
      icon: <MapPin className="w-12 h-12 text-primary" />,
      title: "Google Business Profile (GBP) Domination",
      description: "Your GBP is the single most important factor for local rankings. We optimize every element: business category, description, hours, photos, posts, Q&A, and reviews. We manage it actively, not passively."
    },
    {
      icon: <Building className="w-12 h-12 text-primary" />,
      title: "Foundational Authority (NAP & Citations)",
      description: "We build and maintain perfectly consistent NAP data across the top local directories and industry-specific citation sources. This creates the foundational trust Google needs to rank you locally."
    },
    {
      icon: <Star className="w-12 h-12 text-primary" />,
      title: "Conversion-Focused Website SEO",
      description: "Your website must convert local visitors into customers. We optimize for local keywords, create location-specific content, and ensure your site is fast, mobile-friendly, and designed to drive phone calls."
    }
  ];

  const services = [
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Local SEO Management",
      description: "Comprehensive, ongoing management of all aspects of your local search presence."
    },
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: "Local Business Website SEO",
      description: "Location-focused website optimization designed to convert local searchers."
    },
    {
      icon: <Star className="w-10 h-10 text-primary" />,
      title: "Local Search Engine Optimization Service",
      description: "Full-spectrum local SEO strategy including GBP, citations, and reviews."
    },
    {
      icon: <Building className="w-10 h-10 text-primary" />,
      title: "Corporate Local SEO Experts",
      description: "Scalable local SEO solutions for multi-location and franchise businesses."
    }
  ];

  const faqs = [
    {
      question: "What is the Local 3-Pack and why is it so important for my business?",
      answer: "The Local 3-Pack is the block of the top three local business results displayed prominently under the map on a Google search results page. Ranking in the Local 3-Pack is critical because it captures the majority of local search clicks, driving direct phone calls, website visits, and foot traffic. If you're not there, you're losing business."
    },
    {
      question: "How is local SEO different from traditional SEO?",
      answer: "Traditional SEO focuses on broad, national rankings. Local SEO focuses on ranking in a specific geographic area. It relies heavily on factors like your Google Business Profile (GBP), customer reviews, and NAP consistency, which are less critical for national rankings. We are experts in both, but our local seo specialist team focuses on the unique local ranking signals."
    },
    {
      question: "Do you offer a local seo proposal for multi-location businesses?",
      answer: "Yes. We specialize in creating scalable local seo proposal strategies for businesses with multiple locations, franchises, or corporate structures. Our system ensures brand consistency while optimizing each individual location for its specific local market."
    },
    {
      question: "How long does it take to see results from your local seo services?",
      answer: "Local SEO can often show initial results faster than national SEO, particularly in less competitive markets. You can expect to see improvements in your GBP visibility and map rankings within 1-3 months, with significant growth in calls and foot traffic within 6 months."
    },
    {
      question: "Why do I need a local seo company when I already have a national agency?",
      answer: "If your national agency isn't actively managing your GBP, cleaning up your citations, and driving local reviews, they are failing your local strategy. You need a dedicated local seo company like Odin Digital that understands the nuances of local search and focuses on the Local 3-Pack."
    },
    {
      question: "What is NAP consistency and why is it so important for local seo australia?",
      answer: "NAP stands for Name, Address, and Phone number. Consistency means this information is identical across your website, GBP, and all online directories (citations). Inconsistent NAP data is a major red flag for Google, which can severely limit your ability to rank locally."
    },
    {
      question: "Do you manage my Google Business Profile?",
      answer: "Yes. Active, expert management of your GBP is the cornerstone of our local seo management service. This includes optimizing every field, managing photos, responding to Q&A, and implementing a review generation strategy."
    },
    {
      question: "What makes Odin Digital the best local seo company in the nation?",
      answer: "We combine national scale with local precision. Our focus on revenue, our no lock-in contracts, and our deep expertise in securing the Local 3-Pack for businesses across Australia make us the best local seo company in the nation for businesses serious about growth."
    },
    {
      question: "How do you handle negative reviews on my Google Business Profile?",
      answer: "We implement a proactive review strategy to flood your profile with positive reviews. We also provide guidance on how to professionally respond to negative reviews, mitigating damage and showing potential customers that you care about service."
    },
    {
      question: "Can you help with how to sell local seo services to my internal team?",
      answer: "While we don't teach how to sell local seo services, we provide all the transparent data and ROI reports you need to prove the value of your investment to your internal team or stakeholders. We focus on making your success undeniable."
    },
    {
      question: "What is a citation and why do I need them for local seo?",
      answer: "A citation is any online mention of your business's NAP data. Citations on high-authority local directories (like Yellow Pages, Yelp, industry-specific sites) act as trust signals to Google, proving your business is legitimate and active in the local community."
    },
    {
      question: "Do you offer local seo sydney services?",
      answer: "Yes. We have specialized knowledge and strategies for the highly competitive local seo sydney market, as well as Melbourne, Brisbane, Perth, and Adelaide. We tailor our approach to the unique competitive landscape of each city."
    },
    {
      question: "How does your local seo management service protect me from scams?",
      answer: "We secure your GBP with best practices, ensure you maintain primary ownership, and monitor for unauthorized access attempts. Our transparent, ethical approach means you never have to worry about us using risky tactics that could lead to suspension."
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Performance-focused local SEO agency in Australia. We help local businesses dominate Google Maps and the Local 3-Pack. $574M+ in client revenue. No lock-in contracts.",
        "founder": {
          "@type": "Person",
          "name": "Lucas Durante"
        },
        "slogan": "No Lock-In Contracts. Just Results.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+61-XXX-XXX-XXX",
          "contactType": "Sales",
          "areaServed": "AU",
          "availableLanguage": "English"
        },
        "sameAs": []
      },
      {
        "@type": "WebPage",
        "@id": "https://growth-conduit-central.lovable.app/local-seo",
        "url": "https://growth-conduit-central.lovable.app/local-seo",
        "name": "Local SEO Services Australia | Dominate Google Maps & Local Search",
        "description": "Stop losing customers on Google Maps. Odin Digital is the local SEO company Australia trusts to secure the Local 3-Pack and drive foot traffic. Local SEO Management, GBP Optimization, No Lock-In Contracts.",
        "isPartOf": {
          "@id": "https://growth-conduit-central.lovable.app/#website"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Local Search Engine Optimization",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "description": "Expert local SEO services for Australian businesses, focusing on Google Business Profile (GBP) optimization, citation building, and Local 3-Pack dominance.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Local SEO Services Australia",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local SEO Management"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Business Profile Optimization"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Corporate Local SEO"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Local SEO Services",
          "provider": {
            "@type": "Organization",
            "name": "Odin Digital"
          }
        },
        "author": {
          "@type": "Person",
          "name": "Fabienne Costa"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Since working with Lucas and the team, YCL's revenue has grown by over 292% and they have been a complete pleasure to work with.",
        "publisher": {
          "@type": "Organization",
          "name": "Odin Digital"
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Local SEO Services Australia | Dominate Google Maps & Local Search</title>
        <meta name="description" content="Stop losing customers on Google Maps. Odin Digital is the local SEO company Australia trusts to secure the Local 3-Pack and drive foot traffic. Local SEO Management, GBP Optimization, No Lock-In Contracts." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: "Services", path: "/services" },
            { label: "Local SEO", path: "/services/local-seo" }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-muted/30 to-muted/20 overflow-hidden">
          {/* Animated background blobs */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          
          {/* Floating circles */}
          <div className="absolute top-32 right-1/4 w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" />
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full animate-float shadow-lg" style={{ animationDelay: '1s' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Stop Losing Customers to Your Competitors on Google Maps
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
                The Local SEO Company Australia Trusts for Foot Traffic and Phone Calls
              </h2>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground">
                Partner with Odin Digital and Dominate the Local Search Results in Every Major City.
              </p>
              <p className="text-lg md:text-xl mb-10 text-muted-foreground">
                When someone in your city searches for what you sell, where do you rank? If you're not in the Local 3-Pack (the top three map results), you're invisible. And invisibility in local search means lost revenue—every single day.
              </p>
              <Button onClick={handleCTAClick} size="xl" variant="cta" className="group w-full md:w-auto text-sm md:text-lg px-6 md:px-12">
                <span className="hidden sm:inline">Get Your FREE Local SEO Audit</span>
                <span className="sm:hidden">Get FREE SEO Audit</span>
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Problem/Agitation Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Problem: Why Most Local SEO Services Fail Your Business
              </h2>
              <p className="text-lg text-muted-foreground">
                If you've struggled to rank locally, it's because most agencies don't understand the unique, high-stakes nature of local search.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {problems.map((problem, index) => (
                <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">{problem.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button onClick={handleCTAClick} variant="cta" className="group">
                Talk to a Local SEO Specialist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* The Odin Digital Solution */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Odin Digital Solution: Mastering the Local 3-Pack
              </h2>
              <p className="text-lg text-muted-foreground">
                We built our local seo company to be the definitive solution for local businesses. We focus on the three pillars of local search.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {solutions.map((solution, index) => (
                <Card key={index} className="p-8 hover:shadow-glow transition-all duration-300">
                  <div className="mb-6 flex justify-center">{solution.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{solution.title}</h3>
                  <p className="text-muted-foreground text-center">{solution.description}</p>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button onClick={handleCTAClick} variant="cta" className="group">
                See Our Local SEO Packages
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Our Local SEO Services */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Local SEO Services Australia: Built for Scalability
              </h2>
              <p className="text-lg text-muted-foreground">
                We are a national local seo specialist with local expertise in every major city.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-3 text-center">{service.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">{service.description}</p>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button onClick={handleCTAClick} variant="cta" className="group w-full md:w-auto text-sm md:text-base px-6 md:px-8">
                <span className="hidden sm:inline">Ready to Dominate Your Local Market? Contact Us</span>
                <span className="sm:hidden">Contact Us Today</span>
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                FAQs: Your Questions About Local SEO Answered
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                We know you have specific questions about local search. Here are the clear, honest answers you need.
              </p>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Stop Losing Local Customers?
              </h2>
              <p className="text-xl mb-10 text-white/90">
                Stop wasting time on generic strategies. Start dominating the Local 3-Pack and driving high-intent customers to your location.
              </p>
              <Button onClick={handleCTAClick} size="xl" className="bg-white text-primary hover:bg-white/90 group w-full md:w-auto text-sm md:text-lg px-6 md:px-12">
                <span className="hidden sm:inline">Claim Your FREE Local SEO Strategy Session</span>
                <span className="sm:hidden">Get FREE Strategy Session</span>
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        <Footer />

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t md:hidden z-50">
          <Button onClick={handleCTAClick} size="lg" variant="cta" className="w-full group">
            Get FREE Audit
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default LocalSEO;
