import { Header } from "@/components/Header";
import { ClientLogos } from "@/components/ClientLogos";
import { Hero } from "@/components/Hero";
import { Partnerships } from "@/components/Partnerships";
import { Credibility } from "@/components/Credibility";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { Methodology } from "@/components/Methodology";
import { Results } from "@/components/Results";
import { Industries } from "@/components/Industries";
import { Team } from "@/components/Team";
import { Process } from "@/components/Process";
import { Investment } from "@/components/Investment";
import { Assurance } from "@/components/Assurance";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Closing } from "@/components/Closing";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ClientLogos />
      <Partnerships />
      <Credibility />
      <Problem />
      <Services />
      <Results />
      <Methodology />
      <Industries />
      <Team />
      <Process />
      <Investment />
      <Assurance />
      <CTA />
      <Footer />
      <Closing />
    </div>
  );
};

export default Index;
