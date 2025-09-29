import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Leadership } from "@/components/Leadership";
import { Team } from "@/components/Team";
import { Credibility } from "@/components/Credibility";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-charcoal mb-6">
              About <span className="text-primary">Odin Digital</span>
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              We're a team of digital marketing specialists dedicated to helping ambitious business owners achieve the growth they've been working towards.
            </p>
          </div>
        </section>

        {/* Leadership Section */}
        <Leadership />

        {/* Credibility Section */}
        <Credibility />

        {/* Team Section */}
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default About;