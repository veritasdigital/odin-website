import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Target, Users, FileCheck, Lock, TrendingUp } from "lucide-react";

const PharmaceuticalCompanies = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app/",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+61-2-8000-0000",
          "contactType": "customer service"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Digital Marketing for Pharmaceutical Companies",
        "provider": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "name": "Digital Marketing for Pharmaceutical Companies",
        "description": "Compliance-first digital marketing services for pharmaceutical companies, including regulatory compliant SEO, HCP digital marketing, clinical trial recruitment advertising, and pharma website compliance.",
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Pharmaceutical Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Regulatory Compliant Pharma SEO"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "HCP Digital Marketing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Clinical Trial Recruitment Advertising"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the biggest regulatory challenge in pharmaceutical digital marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The biggest challenge is ensuring TGA/FDA compliance in all ad copy and claims. Our compliance-first workflow and mandatory internal review steps are designed specifically to mitigate this risk."
            }
          },
          {
            "@type": "Question",
            "name": "How do you target Healthcare Professionals (HCPs) compliantly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We specialize in HCP digital marketing, using compliant, closed ad networks, professional data segments, and content syndication platforms to reach specific specialists with scientific, evidence-based content."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help us with clinical trial recruitment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We run highly targeted PPC and Meta Ads campaigns for clinical trial recruitment advertising, ethically reaching specific patient demographics with compliant, IRB-approved messaging to accelerate enrollment."
            }
          },
          {
            "@type": "Question",
            "name": "What is 'Regulatory Compliant Pharma SEO'?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It's an SEO strategy that focuses on optimizing unbranded disease awareness and educational content, ensuring your scientific authority ranks highly while strictly adhering to TGA/FDA guidelines on claims and product promotion."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure our website meets accessibility (WCAG) standards?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our pharma website compliance and design process includes mandatory WCAG checks, ensuring your digital assets are accessible to all patients and users, which is a key component of modern regulatory compliance."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from pharma digital marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PPC and clinical trial recruitment campaigns can yield immediate results. Regulatory compliant pharma SEO is a long-term authority play, typically showing significant organic growth in 9-18 months."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle the TGA/FDA submission process for digital assets?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While we do not act as your regulatory counsel, our compliance-first workflow ensures all digital assets are prepared to meet submission standards, significantly reducing the burden on your internal regulatory team."
            }
          },
          {
            "@type": "Question",
            "name": "How do you measure success in pharmaceutical digital marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We measure success based on high-value conversions: HCP sign-ups for educational content, clinical trial pre-screenings, scientific white paper downloads, and overall brand authority and trust signals."
            }
          },
          {
            "@type": "Question",
            "name": "What is the role of Meta Ads in a regulated industry like Pharma?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Meta Ads are primarily used for compliant, unbranded disease awareness campaigns (DTC) and highly targeted clinical trial recruitment advertising, avoiding direct product promotion."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with both prescription (Rx) and over-the-counter (OTC) products?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We tailor our strategy to the specific regulatory requirements of both Rx and OTC products, ensuring all campaigns are compliant with the relevant TGA/FDA guidelines."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure the accuracy of scientific claims in digital content?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All content is developed using an evidence-based approach, referencing peer-reviewed studies and official product information, and is subject to a mandatory internal review by our scientific communication strategists."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer a performance guarantee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer the best guarantee in the industry: No Lock-In Contracts. Our 95% client retention rate is a testament to our performance. We put the risk on us, not you."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help us integrate our digital assets with our Medical Information (MI) system?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our pharma website compliance and design team specializes in integrating digital assets with MI systems to ensure seamless, compliant delivery of product information to HCPs and patients."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle adverse event reporting (AER) requirements on digital platforms?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We ensure all digital platforms include clear, compliant mechanisms for adverse event reporting, adhering to all necessary regulatory requirements."
            }
          },
          {
            "@type": "Question",
            "name": "What is the typical budget for a comprehensive pharma digital marketing strategy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Budgets are typically substantial, reflecting the complexity and high value of the industry. A comprehensive strategy covering HCP targeting, patient awareness, and SEO often requires a minimum investment of $20,000 - $100,000+ per month. We provide a detailed, compliance-focused quote after a strategy session."
            }
          }
        ]
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Organization",
          "name": "Odin Digital"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "name": "Pharmaceutical Digital Compliance Success",
        "author": {
          "@type": "Person",
          "name": "A Global Pharma Marketing Director"
        },
        "reviewBody": "Odin Digital is the only agency we trust with our digital strategy. Their compliance-first workflow is non-negotiable, and their expertise in HCP targeting and clinical trial recruitment has significantly accelerated our time-to-market while mitigating regulatory risk. They are true partners who understand the science and the law."
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Digital Marketing for Pharmaceutical Companies | Compliance-First | Odin Digital</title>
        <meta name="description" content="Stop risking fines. Odin Digital provides compliance-first digital marketing for pharmaceutical companies, specializing in HCP targeting, clinical trial recruitment, and regulatory compliant SEO." />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-muted/30 to-muted/20 mt-20">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-20 w-80 h-80 bg-muted/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-accent/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-accent/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-2/3 right-1/2 w-2 h-2 bg-accent/30 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
        </div>

        {/* Floating Circles */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-accent/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-10 w-40 h-40 border-2 border-primary/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-10 w-28 h-28 border-2 border-accent/5 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-primary/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>

        {/* Geometric Shapes */}
        <div className="absolute top-32 left-1/4 w-16 h-16 border-2 border-primary/10 rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-1/4 w-20 h-20 border-2 border-accent/10 rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-12 h-12 border border-primary/10 rounded-lg rotate-6 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-14 h-14 border border-accent/10 rounded-lg -rotate-12 animate-pulse" style={{ animationDelay: '1.8s' }}></div>

        {/* Additional Decorative Elements */}
        <div className="absolute top-40 left-1/2 w-1 h-16 bg-gradient-to-b from-primary/20 to-transparent rotate-12"></div>
        <div className="absolute bottom-40 right-1/2 w-1 h-20 bg-gradient-to-t from-accent/20 to-transparent -rotate-12"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-charcoal">
              Digital Marketing for Pharmaceutical Companies
            </h1>
            <p className="hero-sub-headline text-xl md:text-2xl mb-8 text-charcoal/70 max-w-3xl mx-auto">
              Compliance-First Digital Strategies for a Regulated World. Stop Risking Fines. Start Building Trust and Authority.
            </p>
            <Button asChild size="lg" className="whitespace-normal break-words py-3 px-6">
              <Link to="/contact">Request Your Confidential, Compliance-Focused Audit →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative py-12 bg-gradient-to-br from-white via-muted/30 to-muted/20 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-muted/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-muted/15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-accent/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-charcoal">
            Why Most Marketing Agencies Fail Pharmaceutical Companies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-charcoal">The Regulatory Risk Nightmare</h3>
                <p className="text-charcoal/70 flex-grow">
                  Most agencies don't understand TGA/FDA guidelines, leading to non-compliant ad copy and massive fines. We implement a compliance-first workflow with mandatory review steps.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-charcoal">The HCP Targeting Failure</h3>
                <p className="text-charcoal/70 flex-grow">
                  Generic agencies use broad targeting. We specialize in HCP digital marketing using advanced data segmentation to reach exact specialists.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-charcoal">The Clinical Trial Bottleneck</h3>
                <p className="text-charcoal/70 flex-grow">
                  Clinical trial delays cost millions. We use targeted campaigns to ethically recruit specific patient demographics and accelerate enrollment.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <FileCheck className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-charcoal">Scientific Content Invisibility</h3>
                <p className="text-charcoal/70 flex-grow">
                  Your peer-reviewed studies are buried. We implement regulatory compliant pharma SEO to establish your brand as the authoritative source.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <Lock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-charcoal">Slow Digital Adoption</h3>
                <p className="text-charcoal/70 flex-grow">
                  An outdated website erodes trust. We ensure your digital hub is fast, secure, accessible (WCAG), and meets all regulatory standards.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-charcoal">Fragmented Audience Strategy</h3>
                <p className="text-charcoal/70 flex-grow">
                  Uncoordinated campaigns waste budget. We build integrated strategies coordinating DTC, HCP, and investor campaigns for consistent messaging.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="whitespace-normal break-words py-3 px-6">
              <Link to="/contact">Talk to a Compliance-Focused Pharma Marketing Expert →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-12 bg-gradient-to-br from-muted/10 via-white to-muted/20 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-accent/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-40 right-10 w-24 h-24 border-2 border-primary/10 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-20 h-20 border-2 border-accent/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-charcoal">
            Our Compliance-First Pharmaceutical Marketing Services
          </h2>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Regulatory Compliant Pharma SEO */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">
                Regulatory Compliant Pharma SEO: Building Scientific Authority
              </h3>
              <p className="text-charcoal/70 mb-6">
                We build regulatory compliant pharma SEO strategies that ensure your scientific and medical content ranks highly, establishing your brand as a trusted, authoritative source for patients and HCPs.
              </p>
              <ul className="space-y-3 text-charcoal/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Scientific Content Optimization:</strong> We optimize peer-reviewed studies and disease awareness pages using E-E-A-T principles.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Technical SEO for Large Platforms:</strong> We ensure your site is technically flawless, optimizing for speed, crawlability, and security.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Compliance-First Keyword Strategy:</strong> We only target keywords that align with TGA/FDA guidelines, focusing on unbranded disease awareness.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Link Building for Trust:</strong> We earn backlinks from high-authority medical institutions and scientific journals.</span>
                </li>
              </ul>
            </div>

            {/* PPC for Pharmaceutical Companies */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">
                PPC for Pharmaceutical Companies: Targeted Precision and Compliance
              </h3>
              <p className="text-charcoal/70 mb-6">
                We build PPC campaigns that deliver immediate, compliant results, whether targeting HCPs or recruiting patients for clinical trials.
              </p>
              <ul className="space-y-3 text-charcoal/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>HCP Digital Marketing:</strong> We use medical journal ad networks and professional data segments to reach exact specialists.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Clinical Trial Recruitment Advertising:</strong> We run focused campaigns to find right patient demographics quickly and ethically.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Compliance-First Ad Copy:</strong> Every ad is written with compliance as top priority, avoiding unapproved claims.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Conversion Tracking for Scientific Goals:</strong> We track HCP sign-ups, patient pre-screenings, and scientific white paper downloads.</span>
                </li>
              </ul>
            </div>

            {/* Meta Ads */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">
                Meta Ads for Pharmaceutical Companies: Disease Awareness and Ethical Targeting
              </h3>
              <p className="text-charcoal/70 mb-6">
                We build Meta Ads campaigns that focus on compliant disease awareness and ethical patient education.
              </p>
              <ul className="space-y-3 text-charcoal/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Disease Awareness Campaigns (DTC):</strong> We run compliant Direct-to-Consumer campaigns focused on unbranded disease awareness.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Ethical Patient Targeting:</strong> We use broad, compliant targeting while avoiding sensitive health categories.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Clinical Trial Recruitment:</strong> We reach specific patient populations with compliant, IRB-approved messaging.</span>
                </li>
              </ul>
            </div>

            {/* Pharma Website Compliance */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-charcoal">
                Pharma Website Compliance and Design: Trust and Authority Hub
              </h3>
              <p className="text-charcoal/70 mb-6">
                We build pharma website compliance and design solutions that position your company as a trusted source while meeting all regulatory requirements.
              </p>
              <ul className="space-y-3 text-charcoal/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Compliance-First Design:</strong> Your website is designed to meet TGA/FDA requirements with clear disclaimers and WCAG standards.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Scientific Content Presentation:</strong> We design intuitive interfaces for presenting complex data to HCPs and patients.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>HCP Portal Integration:</strong> We integrate secure portals for Healthcare Professionals with restricted access to proprietary data.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Mobile-First and Accessibility (WCAG):</strong> Every site is flawlessly mobile-optimized and meets WCAG accessibility standards.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="whitespace-normal break-words py-3 px-6">
              <Link to="/contact">See Our Pharma Marketing Packages →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative py-12 bg-gradient-to-br from-white via-muted/20 to-muted/30 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-muted/15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-muted/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2.5s' }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-accent/20 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-charcoal">
            Why Pharmaceutical Companies Choose Odin Digital
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <h3 className="text-xl font-bold mb-3 text-charcoal">Compliance-First Workflow</h3>
                <p className="text-charcoal/70 flex-grow">
                  Our workflow includes mandatory compliance checks at every stage, minimizing your regulatory risk.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <h3 className="text-xl font-bold mb-3 text-charcoal">Scientific and Medical Expertise</h3>
                <p className="text-charcoal/70 flex-grow">
                  Our team includes strategists with backgrounds in medical writing and scientific communication.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <h3 className="text-xl font-bold mb-3 text-charcoal">Focus on High-Value Conversions</h3>
                <p className="text-charcoal/70 flex-grow">
                  We track conversions that matter: HCP engagement, clinical trial pre-screenings, and scientific downloads.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <h3 className="text-xl font-bold mb-3 text-charcoal">No Lock-In Contracts</h3>
                <p className="text-charcoal/70 flex-grow">
                  Our 95% client retention rate is earned, not enforced. We offer month-to-month service.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <h3 className="text-xl font-bold mb-3 text-charcoal">Integrated Strategy</h3>
                <p className="text-charcoal/70 flex-grow">
                  We build a unified digital strategy coordinating all your audience campaigns (HCP, Patient, Investor).
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardContent className="flex flex-col h-full p-6">
                <h3 className="text-xl font-bold mb-3 text-charcoal">Proven Track Record</h3>
                <p className="text-charcoal/70 flex-grow">
                  We've generated over $574 million in client revenue with rigorous, ethical, results-driven strategies.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="whitespace-normal break-words py-3 px-6">
              <Link to="/contact">Schedule Your Confidential Compliance Strategy Session →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 bg-gradient-to-br from-muted/20 via-white to-muted/10 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-10 w-64 h-64 bg-muted/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-muted/15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-1/3 w-16 h-16 border-2 border-primary/10 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-accent/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-charcoal">
            FAQs: Your Questions About Pharmaceutical Marketing Answered
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  What is the biggest regulatory challenge in pharmaceutical digital marketing?
                </AccordionTrigger>
                <AccordionContent>
                  The biggest challenge is ensuring TGA/FDA compliance in all ad copy and claims. Our compliance-first workflow and mandatory internal review steps are designed specifically to mitigate this risk.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  How do you target Healthcare Professionals (HCPs) compliantly?
                </AccordionTrigger>
                <AccordionContent>
                  We specialize in HCP digital marketing, using compliant, closed ad networks, professional data segments, and content syndication platforms to reach specific specialists with scientific, evidence-based content.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Can you help us with clinical trial recruitment?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. We run highly targeted PPC and Meta Ads campaigns for clinical trial recruitment advertising, ethically reaching specific patient demographics with compliant, IRB-approved messaging to accelerate enrollment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  What is "Regulatory Compliant Pharma SEO"?
                </AccordionTrigger>
                <AccordionContent>
                  It's an SEO strategy that focuses on optimizing unbranded disease awareness and educational content, ensuring your scientific authority ranks highly while strictly adhering to TGA/FDA guidelines on claims and product promotion.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  How do you ensure our website meets accessibility (WCAG) standards?
                </AccordionTrigger>
                <AccordionContent>
                  Our pharma website compliance and design process includes mandatory WCAG checks, ensuring your digital assets are accessible to all patients and users, which is a key component of modern regulatory compliance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  How long does it take to see results from pharma digital marketing?
                </AccordionTrigger>
                <AccordionContent>
                  PPC and clinical trial recruitment campaigns can yield immediate results. Regulatory compliant pharma SEO is a long-term authority play, typically showing significant organic growth in 9-18 months.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  Do you handle the TGA/FDA submission process for digital assets?
                </AccordionTrigger>
                <AccordionContent>
                  While we do not act as your regulatory counsel, our compliance-first workflow ensures all digital assets are prepared to meet submission standards, significantly reducing the burden on your internal regulatory team.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  How do you measure success in pharmaceutical digital marketing?
                </AccordionTrigger>
                <AccordionContent>
                  We measure success based on high-value conversions: HCP sign-ups for educational content, clinical trial pre-screenings, scientific white paper downloads, and overall brand authority and trust signals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">
                  What is the role of Meta Ads in a regulated industry like Pharma?
                </AccordionTrigger>
                <AccordionContent>
                  Meta Ads are primarily used for compliant, unbranded disease awareness campaigns (DTC) and highly targeted clinical trial recruitment advertising, avoiding direct product promotion.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left">
                  Do you work with both prescription (Rx) and over-the-counter (OTC) products?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. We tailor our strategy to the specific regulatory requirements of both Rx and OTC products, ensuring all campaigns are compliant with the relevant TGA/FDA guidelines.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11">
                <AccordionTrigger className="text-left">
                  How do you ensure the accuracy of scientific claims in digital content?
                </AccordionTrigger>
                <AccordionContent>
                  All content is developed using an evidence-based approach, referencing peer-reviewed studies and official product information, and is subject to a mandatory internal review by our scientific communication strategists.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12">
                <AccordionTrigger className="text-left">
                  Do you offer a performance guarantee?
                </AccordionTrigger>
                <AccordionContent>
                  We offer the best guarantee in the industry: No Lock-In Contracts. Our 95% client retention rate is a testament to our performance. We put the risk on us, not you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13">
                <AccordionTrigger className="text-left">
                  Can you help us integrate our digital assets with our Medical Information (MI) system?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Our pharma website compliance and design team specializes in integrating digital assets with MI systems to ensure seamless, compliant delivery of product information to HCPs and patients.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14">
                <AccordionTrigger className="text-left">
                  How do you handle adverse event reporting (AER) requirements on digital platforms?
                </AccordionTrigger>
                <AccordionContent>
                  We ensure all digital platforms include clear, compliant mechanisms for adverse event reporting, adhering to all necessary regulatory requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15">
                <AccordionTrigger className="text-left">
                  What is the typical budget for a comprehensive pharma digital marketing strategy?
                </AccordionTrigger>
                <AccordionContent>
                  Budgets are typically substantial, reflecting the complexity and high value of the industry. A comprehensive strategy covering HCP targeting, patient awareness, and SEO often requires a minimum investment of $20,000 - $100,000+ per month. We provide a detailed, compliance-focused quote after a strategy session.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-charcoal">
            Ready to Stop Risking Fines and Start Accelerating Scientific Communication?
          </h2>
          <p className="text-xl text-charcoal/70 mb-8 max-w-3xl mx-auto">
            Stop settling for generic marketing that exposes you to regulatory risk. Start working with the pharmaceutical marketing agency that builds compliant, authoritative, and results-driven digital strategies.
          </p>
          <Button asChild size="lg" className="whitespace-normal break-words py-3 px-6">
            <Link to="/contact">Schedule Your Confidential Compliance Strategy Session →</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PharmaceuticalCompanies;
