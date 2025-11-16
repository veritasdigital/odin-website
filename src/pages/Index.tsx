import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { ClientLogos } from "@/components/ClientLogos";
import { Hero } from "@/components/Hero";
import { Partnerships } from "@/components/Partnerships";
import { Credibility } from "@/components/Credibility";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { Methodology } from "@/components/Methodology";
import { Results } from "@/components/Results";
import { AboutUs } from "@/components/AboutUs";
import { Industries } from "@/components/Industries";
import { Team } from "@/components/Team";
import { Process } from "@/components/Process";
import { Assurance } from "@/components/Assurance";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Closing } from "@/components/Closing";
import { SideTab } from "@/components/SideTab";
import { MarketingFormModal } from "@/components/MarketingFormModal";


const Index = () => {
  // Organization Schema for Homepage
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Odin Digital",
    "url": "https://odindigital.com.au",
    "logo": "https://odindigital.com.au/logo.png",
    "description": "Australia's leading digital marketing agency specializing in SEO, Google Ads, Facebook Ads, and web design. 540% average ROI, 95% client retention rate.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "hello@odindigital.com.au",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/odindigital",
      "https://www.linkedin.com/company/odin-digital",
      "https://www.instagram.com/odindigital"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "283",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Digital Marketing Agency Australia | SEO, Google Ads, Facebook Ads | Odin Digital</title>
        <meta name="description" content="Top-rated digital marketing agency in Australia. 540% average ROI. Expert SEO, Google Ads, Facebook Ads & web design. No lock-in contracts. Get your free quote today." />
        <link rel="canonical" href="https://odindigital.com.au/" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      
      <Header />
      <Hero />
      <ClientLogos />
      <Credibility />
      <Problem />
      <Results />
      <Services />
      <Partnerships />
      <AboutUs />
      <Methodology />
      <Industries />
      <Team />
      <Process />
      <Assurance />
      <CTA />
      <Footer />
      <Closing />
      <SideTab />
      <MarketingFormModal />
    </div>
  );
};

export default Index;
