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
import { getOrganizationSchema, getWebsiteSchema } from "@/utils/schemaMarkup";


const Index = () => {
  // Enhanced Schema Markup for Homepage
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Digital Marketing Agency Australia | SEO, Google Ads, Facebook Ads | Odin Digital</title>
        <meta name="description" content="Top-rated digital marketing agency in Australia. 540% average ROI. Expert SEO, Google Ads, Facebook Ads & web design. No lock-in contracts. Get your free quote today." />
        <link rel="canonical" href="https://odindigital.com.au/" />
        
        {/* Enhanced Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        
        {/* Website Schema */}
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>
      
      <Header />
      <main id="main-content">
        <Hero />
        <ClientLogos />
        <Results />
        <Credibility />
        <Problem />
        <Services />
        <Partnerships />
        <AboutUs />
        <Methodology />
        <Industries />
        <Team />
        <Process />
        <Assurance />
        <CTA />
      </main>
      <Footer />
      <Closing />
      <SideTab />
      <MarketingFormModal />
    </div>
  );
};

export default Index;
