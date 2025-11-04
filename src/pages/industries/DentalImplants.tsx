import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Search,
  Target,
  Layout,
  Star,
  TrendingUp,
  Users,
  Award,
  FileText,
  MapPin,
  Globe,
  Share2,
  Megaphone,
  ArrowRight,
  AlertCircle,
  BarChart,
  Clock,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useState } from "react";

export default function DentalImplants() {
  const { openForm } = useMarketingForm();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does implant specialist marketing cost?",
      answer: "Implant marketing costs vary depending on scope and goals. Google Ads might cost $2,000–$8,000/month. SEO and local marketing might cost $2,000–$6,000/month. Website design might cost $5,000–$15,000. We offer flexible pricing and can work within your budget. Our focus is on ROI—we help you attract quality patients who are ready to proceed with treatment."
    },
    {
      question: "How long does it take to see results?",
      answer: "Google Ads can deliver results immediately, often within the first week of launching campaigns. SEO and local SEO take 3–6 months to see significant results as we build authority and rankings. Patient education content takes time to build trust and authority. We set realistic expectations upfront and provide monthly reporting so you can track progress every step of the way."
    },
    {
      question: "Do you work with small implant practices?",
      answer: "Absolutely. We work with implant practices of all sizes, from solo practitioners to large group practices. We have services and pricing for every stage of practice growth. Whether you're just starting to market implant services or looking to scale an established practice, we can tailor our approach to your needs and budget."
    },
    {
      question: "How do you handle patient privacy and compliance?",
      answer: "We take patient privacy and compliance seriously. We follow all HIPAA and dental marketing regulations in Australia. We use before/after cases with proper patient consent and anonymisation where required. All marketing materials are reviewed for compliance, and we never share patient information without explicit written consent."
    },
    {
      question: "Can you help with referral network building?",
      answer: "Yes. We help identify potential referral partners (general dentists, periodontists, oral surgeons), create professional referral marketing materials, and develop strategies to strengthen relationships. We can also help you create educational seminars, referral newsletters, and co-marketing campaigns to increase referrals from your professional network."
    },
    {
      question: "What makes your approach different from other marketing agencies?",
      answer: "We specialise exclusively in dental implant marketing. We understand the patient journey, the education required, the competitive landscape, and the clinical nuances of implant dentistry. We focus on quality patient acquisition, not just leads. We build integrated strategies that educate patients, build trust, and position you as the local implant authority."
    },
    {
      question: "How do you attract quality patients vs. tyre-kickers?",
      answer: "We use patient education content, qualification strategies, and targeted messaging to attract patients who are serious about implant treatment. Our content addresses cost concerns upfront, explains the implant process, and showcases before/after results. We also use targeting strategies in Google Ads and Facebook to reach patients with higher intent and purchasing power."
    },
    {
      question: "Can you help market financing options?",
      answer: "Yes. We help promote your financing options (payment plans, third-party financing like Afterpay or TLC Finance) through your website, ads, and patient education materials. We create messaging that addresses cost concerns and makes implants more accessible. This dramatically increases case acceptance by removing the financial barrier."
    },
    {
      question: "Do you provide monthly reporting?",
      answer: "Yes. We provide detailed monthly reporting covering all key metrics: website traffic, keyword rankings, ad performance, lead volume, cost per lead, conversion rates, and ROI. You'll have full transparency into campaign performance and can see exactly where your marketing budget is going and what results it's delivering."
    },
    {
      question: "What kind of results can I expect?",
      answer: "Results vary by practice, location, and competition. On average, our implant specialist clients see a 310% increase in quality patient enquiries within 6 months, 50% reduction in cost per patient acquisition, and 4.7x ROI on marketing spend. We focus on quality patients who are ready to proceed with treatment, not just high lead volume."
    },
    {
      question: "Can you help market complex implant cases?",
      answer: "Yes. We help market full-mouth reconstruction, All-on-4/All-on-6 implants, zygomatic implants, bone grafts, sinus lifts, and other complex procedures. We create educational content that explains these advanced procedures in patient-friendly language, showcases your expertise, and attracts patients seeking complex treatment."
    },
    {
      question: "Do you work with university-affiliated implant programs?",
      answer: "Yes. We work with university-affiliated implant programs and teaching practices. We understand the unique challenges (longer appointment times, student involvement, academic focus) and opportunities (advanced expertise, lower costs, research focus). We help position these programs as centres of excellence while attracting quality patient referrals."
    },
    {
      question: "How do you handle reputation management?",
      answer: "We implement automated review generation systems that encourage happy patients to leave Google reviews. We monitor your online reputation across Google, Facebook, and health review sites. We respond professionally to negative reviews and help resolve patient concerns. We also showcase positive reviews on your website and in marketing materials."
    },
    {
      question: "Can you integrate with my practice management software?",
      answer: "Yes. We can integrate with most practice management systems (Dentrix, Eaglesoft, Open Dental, etc.) to track leads, conversions, and ROI. We can also set up call tracking, form tracking, and CRM integration so you can see the complete patient journey from first click to booked appointment."
    },
    {
      question: "What experience do you have in dental implant marketing?",
      answer: "We've worked with over 165 dental implant specialists and implantology practices across Australia. We understand the implant patient journey, the clinical complexities, the competitive landscape, and what it takes to attract quality patients. Our team includes dental marketing specialists who have deep expertise in implant patient acquisition and practice growth."
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://growth-conduit-central.lovable.app/#organization",
        "name": "Odin Digital",
        "url": "https://growth-conduit-central.lovable.app",
        "logo": "https://growth-conduit-central.lovable.app/logo.png",
        "description": "Dental implant specialist marketing agency for implantology practices.",
        "sameAs": [
          "https://www.facebook.com/odindigital",
          "https://www.linkedin.com/company/odin-digital",
          "https://www.instagram.com/odindigital"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "email": "hello@odindigital.com.au"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://growth-conduit-central.lovable.app/industries/dental-implants#webpage",
        "url": "https://growth-conduit-central.lovable.app/industries/dental-implants",
        "name": "Dental Implant Specialist Marketing | Attract Quality Patients & Grow Your Practice",
        "description": "Dental implant specialist marketing. Patient education, referral network building, Google Ads, local marketing. 165+ specialists, 310% average patient increase, 50% cost reduction.",
        "isPartOf": {
          "@id": "https://growth-conduit-central.lovable.app/#website"
        },
        "inLanguage": "en-AU",
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01"
      },
      {
        "@type": "WebSite",
        "@id": "https://growth-conduit-central.lovable.app/#website",
        "url": "https://growth-conduit-central.lovable.app",
        "name": "Odin Digital",
        "description": "Dental implant specialist marketing agency",
        "publisher": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        }
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/industries/dental-implants#patient-education",
        "name": "Implant Patient Education Content",
        "description": "Patient education content and marketing for dental implant specialists.",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "serviceType": "Content Marketing"
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/industries/dental-implants#implant-seo",
        "name": "Implant SEO (Search Engine Optimisation)",
        "description": "SEO services for dental implant specialists to improve search rankings.",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "serviceType": "SEO"
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/industries/dental-implants#google-ads",
        "name": "Google Ads for Implant Specialists",
        "description": "Google Ads management for dental implant specialists.",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "serviceType": "PPC Advertising"
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/industries/dental-implants#local-marketing",
        "name": "Local Marketing and Google Maps",
        "description": "Local marketing and Google Maps optimisation for implant practices.",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "serviceType": "Local Marketing"
      },
      {
        "@type": "Service",
        "@id": "https://growth-conduit-central.lovable.app/industries/dental-implants#web-design",
        "name": "Website Design and Optimisation",
        "description": "Professional website design for dental implant specialists.",
        "provider": {
          "@id": "https://growth-conduit-central.lovable.app/#organization"
        },
        "serviceType": "Web Design"
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
        "@type": "AggregateRating",
        "@id": "https://growth-conduit-central.lovable.app/industries/dental-implants#rating",
        "ratingValue": "4.9",
        "ratingCount": "165",
        "bestRating": "5",
        "worstRating": "1"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dental Implant Specialist Marketing | Attract Quality Patients & Grow Your Practice</title>
        <meta name="description" content="Dental implant specialist marketing. Patient education, referral network building, Google Ads, local marketing. 165+ specialists, 310% average patient increase, 50% cost reduction." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Header />
      <MarketingFormModal />
      <SideTab />

      {/* 1. Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 gradient-hero decorative-circles relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 md:mb-8">
            Dental Implant Marketing That Attracts Quality Patients
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto leading-relaxed">
            Running a dental implant specialist practice is rewarding but challenging. You've invested years in advanced training and education. You have the expertise to transform patients' lives through implant dentistry. But attracting enough quality patients to fill your schedule is a constant struggle. Many patients don't know about implants or think they're too expensive. Your referral network is inconsistent. Your online presence isn't strong enough. And you're competing with general dentists who are now offering implant services. You need a marketing partner who understands implant dentistry, who can educate patients about implants, and who can help you attract quality patients consistently. At Odin Digital, we're dental implant marketing specialists. We've helped over 165 implant specialists and implantology practices attract more quality patients and grow their revenue. We specialise in implant patient education, referral network building, Google Ads, local marketing, and integrated strategies that work for specialist practices. Whether you're a solo practitioner, group practice, or university-affiliated program, we deliver results.
          </p>
          <Button 
            variant="cta" 
            size="xl" 
            onClick={openForm}
            className="text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 w-full sm:w-auto"
          >
            Schedule Free Implant Marketing Consultation
          </Button>
        </div>
      </section>

      {/* 2. The Challenge Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4">
              The Dental Implant Specialist Challenge
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto">
              Implant specialists face unique marketing challenges that general dentists don't experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="p-6 border-charcoal/10 shadow-card">
              <AlertCircle className="h-10 w-10 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                Low Patient Awareness
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                Many patients don't know about dental implants or understand the benefits. They think dentures or bridges are their only options.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 shadow-card">
              <Users className="h-10 w-10 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                Referral Network Inconsistency
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                Relying on general dentist referrals is unpredictable. Referrals can dry up overnight if relationships change or competitors enter the market.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 shadow-card">
              <Search className="h-10 w-10 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                Online Visibility Problem
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                Your website isn't ranking on Google. Patients can't find you online. General dentists with bigger marketing budgets dominate search results.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 shadow-card">
              <FileText className="h-10 w-10 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                Patient Education Complexity
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                Implant dentistry is complex. Patients need education about the process, timeline, costs, and benefits before they're ready to commit.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 shadow-card">
              <Target className="h-10 w-10 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3">
                Competition from General Dentists
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                More general dentists are offering implant services, creating competition and making it harder to differentiate your specialist expertise.
              </p>
            </Card>

            <Card className="p-6 border-charcoal/10 shadow-card bg-gradient-primary text-white">
              <Award className="h-10 w-10 mb-4 text-white" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                We're Implant Marketing Specialists
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                We understand these challenges because we specialise in dental implant marketing. We know how to educate patients, build referral networks, and attract quality cases.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4">
              Why Implant Specialists Choose Odin Digital
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto">
              We're not just another marketing agency. We're specialists in dental implant patient acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <Award className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Implant Marketing Expertise
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4">
                We've worked with over 165 dental implant specialists across Australia. We understand the implant patient journey, the education required, the competitive landscape, and what it takes to attract quality patients. We're not generalists—we're implant marketing specialists.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <FileText className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Patient Education Focus
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4">
                We create comprehensive patient education content that explains the implant process, addresses cost concerns, showcases before/after results, and builds trust. Educated patients are more likely to proceed with treatment and become long-term advocates for your practice.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <Users className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Referral Network Building
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4">
                We help you build and strengthen your referral network through professional marketing materials, educational seminars, referral newsletters, and relationship-building strategies. We reduce your reliance on any single referral source and create a diversified patient acquisition system.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <Target className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Quality Patient Attraction
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4">
                We focus on attracting quality patients who are ready to proceed with treatment, not just generating high volumes of unqualified leads. Our strategies target patients with higher intent, purchasing power, and understanding of implant dentistry.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <BarChart className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Integrated Marketing Approach
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4">
                We don't just run Google Ads or just do SEO. We create integrated marketing strategies that combine website optimisation, <Link to="/seo-agency" className="text-primary hover:underline">SEO</Link>, <Link to="/google-ads" className="text-primary hover:underline">Google Ads</Link>, local marketing, patient education, referral network building, and reputation management to deliver maximum results.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <Layout className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Professional Website Design
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4">
                Your website is your digital practice. We create modern, mobile-optimised websites that educate patients, showcase your expertise, and convert visitors into booked consultations. Our <Link to="/website-design" className="text-primary hover:underline">website designs</Link> are built specifically for implant specialists.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <Award className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Specialist Positioning
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4">
                We position you as the local implant authority through strategic content, thought leadership, case studies, and professional branding. We differentiate you from general dentists and highlight your specialist training, experience, and advanced capabilities.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <BarChart className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Transparent Reporting
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4">
                We provide detailed monthly reporting covering website traffic, keyword rankings, ad performance, lead volume, cost per lead, conversion rates, and ROI. You'll have full visibility into campaign performance and can see exactly what's working.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card bg-gradient-primary text-white col-span-1 md:col-span-2">
              <TrendingUp className="h-12 w-12 mb-4 text-white" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Proven Results
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
                Our implant specialist clients see an average 310% increase in quality patient enquiries within 6 months, 50% reduction in cost per patient acquisition, and 4.7x ROI on marketing spend. We focus on metrics that matter: quality patients, case acceptance, and practice revenue growth.
              </p>
              <Button 
                variant="outline" 
                className="bg-white text-primary hover:bg-white/90 border-white mt-2"
                onClick={openForm}
              >
                See How We Can Help Your Practice
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4">
              Our Dental Implant Marketing Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto">
              Comprehensive marketing solutions designed specifically for dental implant specialists and implantology practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Service 1 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card flex flex-col">
              <FileText className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Implant Patient Education Content
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4">
                We create comprehensive patient education content that explains the implant process, addresses common concerns, and builds trust.
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Before/after case studies and patient testimonials</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Procedure explanation videos and animations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Cost transparency and financing options</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">FAQ pages addressing common patient concerns</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Blog content on implant dentistry topics</span>
                </li>
              </ul>
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-primary font-semibold text-sm sm:text-base">
                  Educated patients are 3.2x more likely to proceed with treatment
                </p>
              </div>
            </Card>

            {/* Service 2 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card flex flex-col">
              <Search className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Implant SEO (Search Engine Optimisation)
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4">
                We optimise your website to rank #1 on Google for high-value implant searches in your local area.
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Technical SEO audits and optimisation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Keyword research for implant-related searches</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">On-page optimisation and content strategy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Link building from authoritative dental sites</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Monthly ranking reports and performance tracking</span>
                </li>
              </ul>
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-primary font-semibold text-sm sm:text-base">
                  Average 185% increase in organic traffic within 6 months
                </p>
              </div>
            </Card>

            {/* Service 3 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card flex flex-col">
              <Target className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Google Ads for Implant Specialists
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4">
                We create and manage high-performing Google Ads campaigns that attract quality implant patients actively searching for treatment.
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Search Ads targeting high-intent implant keywords</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Display Ads for brand awareness and remarketing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">YouTube Ads showcasing implant procedures</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Landing page optimisation for conversions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Continuous bid management and optimisation</span>
                </li>
              </ul>
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-primary font-semibold text-sm sm:text-base">
                  Average cost per quality lead: $85 (industry average: $180)
                </p>
              </div>
            </Card>

            {/* Service 4 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card flex flex-col">
              <MapPin className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Local Marketing and Google Maps
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4">
                We optimise your Google Business Profile and local presence to dominate local implant searches and Google Maps results.
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Google Business Profile optimisation and management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Local citation building and NAP consistency</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Location-specific landing pages</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Google Maps ranking optimisation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Local content creation and area guides</span>
                </li>
              </ul>
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-primary font-semibold text-sm sm:text-base">
                  78% of local mobile searches result in offline purchases
                </p>
              </div>
            </Card>

            {/* Service 5 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card flex flex-col">
              <Layout className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Website Design and Optimisation
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4">
                We design and build professional, mobile-optimised websites that showcase your implant expertise and convert visitors into patients.
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Custom website design for implant specialists</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Mobile-first responsive design</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Before/after galleries and case study showcases</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Online booking and consultation request forms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Fast loading speeds and technical optimisation</span>
                </li>
              </ul>
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-primary font-semibold text-sm sm:text-base">
                  Our websites convert 42% better than industry average
                </p>
              </div>
            </Card>

            {/* Service 6 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card flex flex-col">
              <Users className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Referral Network Building
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4">
                We help you build and strengthen your referral network through professional marketing and relationship-building strategies.
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Referral partner identification and outreach</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Professional referral marketing materials</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Educational seminars for referring dentists</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Referral newsletters and updates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Co-marketing campaigns with referral partners</span>
                </li>
              </ul>
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-primary font-semibold text-sm sm:text-base">
                  Diversified referral networks reduce dependence on any single source
                </p>
              </div>
            </Card>

            {/* Service 7 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card flex flex-col">
              <Star className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Reputation Management
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4">
                We implement automated review generation systems and protect your online reputation to build trust with potential patients.
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Automated Google review generation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Facebook and health review site monitoring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Professional response to negative reviews</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Review showcase on website and marketing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Online reputation audit and improvement plan</span>
                </li>
              </ul>
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-primary font-semibold text-sm sm:text-base">
                  92% of patients read online reviews before choosing a dentist
                </p>
              </div>
            </Card>

            {/* Service 8 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card flex flex-col">
              <Share2 className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Social Media Marketing
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-4">
                We create engaging social media content and advertising campaigns to build your brand and attract potential implant patients.
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Facebook and Instagram content strategy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Before/after case showcases (with consent)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Educational videos and patient testimonials</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Facebook and Instagram Ads targeting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-charcoal/70">Community engagement and management</span>
                </li>
              </ul>
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-primary font-semibold text-sm sm:text-base">
                  <Link to="/social-media-advertising" className="text-primary hover:underline">Social media</Link> builds brand awareness and patient trust
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Button 
              variant="cta" 
              size="lg"
              onClick={openForm}
              className="text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12"
            >
              Discuss Your Marketing Needs
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4">
              Our Implant Marketing Process
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto">
              A proven 6-phase process for attracting quality implant patients and growing your practice.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Phase 1 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-white font-black text-xl sm:text-2xl">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                    Discovery and Analysis
                  </h3>
                  <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                    We analyse your practice, target market, competitive landscape, existing marketing, and growth goals.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Practice capabilities audit</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Competitive analysis</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Website and online presence review</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Target audience identification</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 2 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-white font-black text-xl sm:text-2xl">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                    Strategy Development
                  </h3>
                  <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                    We create a customised marketing strategy tailored to your practice goals, budget, and target market.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Channel selection and prioritisation</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Budget allocation</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Content strategy</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Timeline and milestones</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 3 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-white font-black text-xl sm:text-2xl">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                    Implementation
                  </h3>
                  <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                    We execute the marketing strategy, launching campaigns, creating content, and optimising your digital presence.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Website optimisation or rebuild</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Google Ads campaign launch</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">SEO implementation</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Content creation and publishing</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 4 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-white font-black text-xl sm:text-2xl">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                    Patient Attraction and Conversion
                  </h3>
                  <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                    We drive quality traffic, generate leads, and optimise for conversions to maximise patient acquisition.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Lead generation campaigns</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Conversion rate optimisation</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Call tracking and lead attribution</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Landing page optimisation</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 5 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-white font-black text-xl sm:text-2xl">5</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                    Reporting and Communication
                  </h3>
                  <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                    We provide transparent reporting and regular communication so you can track results and ROI.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Monthly performance reports</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Regular strategy calls</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">ROI tracking</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Access to real-time dashboards</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 6 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-white font-black text-xl sm:text-2xl">6</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                    Growth and Scaling
                  </h3>
                  <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                    We continuously optimise, test new strategies, and scale successful campaigns to drive sustainable growth.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">A/B testing and optimisation</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Campaign scaling</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">New channel exploration</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/70">Long-term strategic planning</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Practice Types Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4">
              Implant Marketing for Different Practice Types
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto">
              We tailor our marketing strategies to your specific practice model and growth goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Practice Type 1 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <Users className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Solo Implant Specialists
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                If you're a solo implant specialist, you need consistent patient flow to fill your schedule without relying solely on referrals.
              </p>
              <p className="text-sm sm:text-base font-semibold text-charcoal mb-3">Our Solution:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Direct-to-patient Google Ads and SEO</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Cost-effective local marketing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Referral network diversification</span>
                </li>
              </ul>
              <div className="bg-primary/5 p-3 rounded-lg">
                <p className="text-primary font-semibold text-sm">
                  Build a predictable new patient pipeline
                </p>
              </div>
            </Card>

            {/* Practice Type 2 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <Globe className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Group Implant Practices
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                Group practices need scalable marketing systems that work across multiple locations and providers.
              </p>
              <p className="text-sm sm:text-base font-semibold text-charcoal mb-3">Our Solution:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Multi-location marketing campaigns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Centralised brand management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Location-specific landing pages</span>
                </li>
              </ul>
              <div className="bg-primary/5 p-3 rounded-lg">
                <p className="text-primary font-semibold text-sm">
                  Scale efficiently across all locations
                </p>
              </div>
            </Card>

            {/* Practice Type 3 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <Award className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                University-Affiliated Programs
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                University programs offer advanced expertise but face unique challenges with patient acquisition and awareness.
              </p>
              <p className="text-sm sm:text-base font-semibold text-charcoal mb-3">Our Solution:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Academic excellence positioning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Cost-benefit messaging</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Research-focused content marketing</span>
                </li>
              </ul>
              <div className="bg-primary/5 p-3 rounded-lg">
                <p className="text-primary font-semibold text-sm">
                  Attract patients seeking advanced care
                </p>
              </div>
            </Card>

            {/* Practice Type 4 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <Megaphone className="h-12 w-12 mb-4" style={{ color: '#D91C5C' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Mixed Specialty Practices
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                Practices offering implants alongside other specialties need differentiated marketing for each service line.
              </p>
              <p className="text-sm sm:text-base font-semibold text-charcoal mb-3">Our Solution:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Service-specific landing pages</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Multi-service campaign management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Cross-selling opportunities</span>
                </li>
              </ul>
              <div className="bg-primary/5 p-3 rounded-lg">
                <p className="text-primary font-semibold text-sm">
                  Maximise value from every patient
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Implant Services Marketing Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4">
              Marketing Specific Implant Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto">
              We create targeted marketing campaigns for each type of implant service you offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Service 1 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Single Tooth Implants
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                The most common implant procedure. We target patients who've lost a tooth or need extraction and replacement.
              </p>
              <p className="text-sm sm:text-base font-semibold text-charcoal mb-3">Marketing Strategy:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Google Ads for "tooth replacement" searches</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Before/after galleries</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Cost comparison content (vs. bridges)</span>
                </li>
              </ul>
            </Card>

            {/* Service 2 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Full Mouth Implants
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                High-value procedures like All-on-4 and All-on-6. We target patients with failing dentition or dentures.
              </p>
              <p className="text-sm sm:text-base font-semibold text-charcoal mb-3">Marketing Strategy:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Educational webinars and seminars</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Life-changing testimonial videos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Financing option promotion</span>
                </li>
              </ul>
            </Card>

            {/* Service 3 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Implant Bridges and Dentures
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                Implant-supported bridges and dentures for patients missing multiple teeth.
              </p>
              <p className="text-sm sm:text-base font-semibold text-charcoal mb-3">Marketing Strategy:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Comparison content (vs. traditional dentures)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Quality of life messaging</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">3D animations showing procedure</span>
                </li>
              </ul>
            </Card>

            {/* Service 4 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Complex Implant Cases
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                Advanced procedures requiring specialist expertise (zygomatic implants, immediate loading, etc.).
              </p>
              <p className="text-sm sm:text-base font-semibold text-charcoal mb-3">Marketing Strategy:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Expert positioning and credentials</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Case study showcases</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Referral network building</span>
                </li>
              </ul>
            </Card>

            {/* Service 5 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Bone Grafts and Sinus Lifts
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                Pre-implant procedures for patients with insufficient bone density.
              </p>
              <p className="text-sm sm:text-base font-semibold text-charcoal mb-3">Marketing Strategy:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Educational content explaining procedures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Success rate and safety messaging</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Integrated implant journey content</span>
                </li>
              </ul>
            </Card>

            {/* Service 6 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                Immediate Load Implants
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                Same-day implants and temporary teeth for patients seeking faster results.
              </p>
              <p className="text-sm sm:text-base font-semibold text-charcoal mb-3">Marketing Strategy:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Time-saving benefit messaging</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Patient convenience focus</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Advanced technology positioning</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70">
              Everything you need to know about dental implant specialist marketing.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-charcoal/10 shadow-card overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-bold text-charcoal pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Button 
              variant="cta" 
              size="lg"
              onClick={openForm}
              className="text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12"
            >
              Get Your Questions Answered
            </Button>
          </div>
        </div>
      </section>

      {/* 9. Case Studies Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-charcoal mb-3 sm:mb-4">
              Implant Marketing Success Stories
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto">
              Real results from real implant specialists we've helped grow their practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Case Study 1 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <div className="bg-primary/5 p-3 rounded-lg mb-4">
                <p className="text-primary font-black text-base sm:text-lg">Solo Implant Specialist</p>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                310% Increase in Patient Flow
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                <strong>Challenge:</strong> Solo implantologist heavily reliant on referrals from two general dentists. When one dentist retired, patient flow dropped 60%.
              </p>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                <strong>Solution:</strong> Implemented direct-to-patient Google Ads, local SEO, and patient education website. Diversified referral network to 12 dentists.
              </p>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                <strong>Results:</strong>
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">310% increase in new patient enquiries</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">45% of patients now from direct marketing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">6-month waiting list for consultations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">ROI of 5.2x on marketing spend</span>
                </li>
              </ul>
            </Card>

            {/* Case Study 2 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <div className="bg-primary/5 p-3 rounded-lg mb-4">
                <p className="text-primary font-black text-base sm:text-lg">Group Implant Practice</p>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                Expanded to 3 New Locations
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                <strong>Challenge:</strong> Multi-location group practice wanted to expand but needed predictable patient acquisition system.
              </p>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                <strong>Solution:</strong> Created centralised marketing system with location-specific landing pages, Google Ads campaigns, and unified branding.
              </p>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                <strong>Results:</strong>
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Successfully opened 3 new locations in 18 months</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Each location reached profitability within 6 months</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">280% increase in overall group revenue</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">50% reduction in cost per patient acquisition</span>
                </li>
              </ul>
            </Card>

            {/* Case Study 3 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <div className="bg-primary/5 p-3 rounded-lg mb-4">
                <p className="text-primary font-black text-base sm:text-lg">University-Affiliated Program</p>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                Tripled Patient Referrals
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                <strong>Challenge:</strong> University implant program struggled with patient recruitment for complex cases and resident training.
              </p>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                <strong>Solution:</strong> Positioned as centre of excellence for complex cases. Created educational content showcasing research and advanced capabilities.
              </p>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                <strong>Results:</strong>
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">320% increase in complex case referrals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Referrals from 45 dental practices</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Resident training capacity increased 150%</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Waiting list for All-on-4 procedures</span>
                </li>
              </ul>
            </Card>

            {/* Case Study 4 */}
            <Card className="p-6 sm:p-8 border-charcoal/10 shadow-card">
              <div className="bg-primary/5 p-3 rounded-lg mb-4">
                <p className="text-primary font-black text-base sm:text-lg">Mixed Specialty Practice</p>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                Implants Now 60% of Revenue
              </h3>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                <strong>Challenge:</strong> Practice offering implants, orthodontics, and general dentistry wanted to grow implant revenue.
              </p>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                <strong>Solution:</strong> Created dedicated implant marketing funnel, separate landing pages, and targeted Google Ads campaigns.
              </p>
              <p className="text-sm sm:text-base text-charcoal/70 mb-4">
                <strong>Results:</strong>
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Implant revenue grew from 25% to 60% of practice</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Added dedicated implant provider</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Overall practice revenue increased 180%</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">Cross-selling increased patient lifetime value 220%</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* 10. Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 gradient-hero decorative-circles relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 md:mb-8">
            Ready to Attract More Quality Implant Patients?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
            You've invested years in becoming an implant specialist. Now it's time to invest in marketing that delivers consistent, quality patient flow. We've helped over 165 implant specialists and implantology practices grow their revenue by an average of 310%. No lock-in contracts. No hidden fees. Just proven strategies that work. Schedule your free implant marketing consultation today and discover how we can help you attract more quality patients, reduce your marketing costs, and grow your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="xl"
              onClick={openForm}
              className="text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 w-full sm:w-auto"
            >
              Schedule Your Free Implant Marketing Consultation
            </Button>
            <Link to="/services">
              <Button 
                variant="outline" 
                size="xl"
                className="bg-white text-primary hover:bg-white/90 border-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 w-full sm:w-auto"
              >
                Learn About Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-charcoal/10 md:hidden z-50 shadow-lg">
        <Button 
          variant="cta" 
          size="lg"
          onClick={openForm}
          className="w-full text-sm"
        >
          Schedule Free Consultation
        </Button>
      </div>

      <Footer />
    </div>
  );
}
