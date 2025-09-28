import { Header } from "@/components/Header";
import { ClientLogos } from "@/components/ClientLogos";
import { Hero } from "@/components/Hero";
import { Partnerships } from "@/components/Partnerships";
import { Credibility } from "@/components/Credibility";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { Methodology } from "@/components/Methodology";
import { Results } from "@/components/Results";
import { Leadership } from "@/components/Leadership";
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
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ClientLogos />
      <Credibility />
      <Problem />
      <Partnerships />
      <Services />
      <Results />
      <Methodology />
      <Leadership />
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
