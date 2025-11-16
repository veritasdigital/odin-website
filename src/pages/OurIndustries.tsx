import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Stethoscope, Briefcase, Building2, Home, Wrench, Scale,
  Heart, Smile, Eye, Users, HardHat, Zap, Shield, Target, TrendingUp
} from "lucide-react";

export default function OurIndustries() {
  const industries = [
    {
      category: "Healthcare & Medical",
      icon: Stethoscope,
      items: [
        { name: "Cosmetic Surgeons", path: "/industries/cosmetic-surgeons" },
        { name: "Plastic Surgeons", path: "/industries/plastic-surgeons" },
        { name: "Cosmetic Clinics", path: "/industries/cosmetic-clinics" },
        { name: "Dermatologists", path: "/industries/dermatologists" },
        { name: "Ophthalmologists", path: "/industries/ophthalmologists" },
        { name: "Fertility Clinics", path: "/industries/fertility-clinics" }
      ]
    },
    {
      category: "Dental Practices",
      icon: Smile,
      items: [
        { name: "General Dentists", path: "/industries/dentists" },
        { name: "Cosmetic Dentists", path: "/industries/cosmetic-dentists" },
        { name: "Orthodontists", path: "/industries/orthodontists" },
        { name: "Dental Implants", path: "/industries/dental-implants" },
        { name: "Family Dentists", path: "/industries/family-dentists" },
        { name: "Pediatric Dentists", path: "/industries/pediatric-dentists" }
      ]
    },
    {
      category: "Legal Services",
      icon: Scale,
      items: [
        { name: "Law Firms", path: "/industries/lawyers" },
        { name: "Family Lawyers", path: "/industries/family-lawyers" },
        { name: "Personal Injury Lawyers", path: "/industries/personal-injury-lawyers" },
        { name: "Criminal Defense Lawyers", path: "/industries/criminal-defense-lawyers" },
        { name: "Conveyancing Lawyers", path: "/industries/conveyancing-lawyers" },
        { name: "Immigration Lawyers", path: "/industries/immigration-lawyers" }
      ]
    },
    {
      category: "Professional Services",
      icon: Briefcase,
      items: [
        { name: "Accounting Firms", path: "/industries/accounting-firms" },
        { name: "Insurance Agents", path: "/industries/insurance-agents" },
        { name: "Real Estate Agents", path: "/industries/real-estate-agents" },
        { name: "Architecture Firms", path: "/industries/architecture-firms" }
      ]
    },
    {
      category: "Home Services & Trades",
      icon: Wrench,
      items: [
        { name: "Plumbers", path: "/industries/plumbers" },
        { name: "Electricians", path: "/industries/electricians" },
        { name: "HVAC Contractors", path: "/industries/hvac-contractors" },
        { name: "Roofing Companies", path: "/industries/roofing-companies" },
        { name: "Landscaping Companies", path: "/industries/landscaping-companies" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Industries We Serve | Digital Marketing Experts | Odin Digital</title>
        <meta name="description" content="Specialized digital marketing for healthcare, dental, legal, professional services, and home service businesses. Proven strategies for high-value industries across Australia." />
        <link rel="canonical" href="https://odindigital.com.au/industries" />
      </Helmet>
      
      <Header />
      <SideTab />

      <div className="max-w-7xl mx-auto px-6 pt-24">
        <Breadcrumbs items={[
          { label: "Industries We Serve", path: "/industries" }
        ]} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-background via-background to-muted/10">
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-charcoal mb-6">
            <span className="block mb-2">Industry-Specific</span>
            <span className="block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              Digital Marketing Expertise
            </span>
          </h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            We don't do generic marketing. We specialize in high-value industries where compliance, reputation, and expertise matter. Every strategy is tailored to your industry's unique challenges and opportunities.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((category, idx) => {
              const IconComponent = category.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-charcoal">{category.category}</h2>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link 
                          to={item.path}
                          className="text-charcoal/70 hover:text-primary transition-colors flex items-center group"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Industry Specialization Matters */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-black text-charcoal mb-12 text-center">
            Why Industry Specialization Matters
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Compliance Expertise</h3>
              <p className="text-charcoal/70">
                We understand the regulations and compliance requirements specific to your industry
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Proven Strategies</h3>
              <p className="text-charcoal/70">
                Industry-tested strategies that work, not generic one-size-fits-all approaches
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Faster Results</h3>
              <p className="text-charcoal/70">
                No learning curve. We already know what works in your industry
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-charcoal mb-8">
            Ready to Dominate Your Industry?
          </h2>
          <p className="text-xl text-charcoal/70 mb-12 leading-relaxed">
            Let's discuss how our industry-specific strategies can transform your marketing results
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">Get Your Free Strategy Session</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
