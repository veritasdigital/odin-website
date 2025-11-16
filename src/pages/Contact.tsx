import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    revenue: "",
    challenges: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0] || formData.name;
      const lastName = nameParts.slice(1).join(' ') || '';
      
      const { error } = await supabase.from("form_submissions").insert({
        first_name: firstName,
        last_name: lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.companyName,
        monthly_budget: formData.revenue,
        industry: "Not specified",
        primary_goal: "Contact form inquiry",
        target_audience: formData.website || "Not specified",
        current_challenges: formData.challenges
      });

      if (error) throw error;

      toast.success("Thank you! We'll be in touch soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        website: "",
        revenue: "",
        challenges: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "03 9498 3170",
      action: "Call Now",
      href: "tel:0394983170"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "hello@odindigital.com.au",
      action: "Send Email",
      href: "mailto:hello@odindigital.com.au"
    }
  ];

  const offices = [
    {
      city: "Melbourne",
      address: "11 Wilson Street, South Yarra VIC 3141",
      phone: "03 9498 3170",
      email: "hello@odindigital.com.au"
    },
    {
      city: "Sydney",
      address: "Opening Soon",
      phone: "03 9498 3170",
      email: "hello@odindigital.com.au",
      openingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SideTab />
      
      {/* Hero Section with Form */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-muted/30 to-muted/20 pt-32 pb-24">
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-muted/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-muted/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }} />
        
        {/* Floating Particles */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-muted/20 rounded-full animate-float"></div>
        <div className="absolute top-64 right-1/3 w-3 h-3 bg-muted/25 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-48 left-1/2 w-2 h-2 bg-muted/15 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-black text-charcoal leading-tight">
                  <span className="block mb-2">Let's Accelerate</span>
                  <span className="block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                    Your Growth
                  </span>
                </h1>
                <p className="text-xl text-charcoal/70 leading-relaxed max-w-xl">
                  Ready to transform your digital presence? Fill out the form and our team will get back to you within 24 hours with a customized strategy.
                </p>
              </div>

              {/* Quick Contact Info */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:0394983170" className="text-lg text-charcoal hover:text-primary transition-colors">
                    03 9498 3170
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:hello@odindigital.com.au" className="text-lg text-charcoal hover:text-primary transition-colors">
                    hello@odindigital.com.au
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <p className="text-lg text-charcoal">
                    11 Wilson Street, South Yarra VIC 3141
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div id="contact-form" className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-charcoal font-semibold">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="mt-2 border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-charcoal font-semibold">Business Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="mt-2 border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-charcoal font-semibold">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+61 4XX XXX XXX"
                    className="mt-2 border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="companyName" className="text-charcoal font-semibold">Company Name *</Label>
                  <Input
                    id="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Your Company Pty Ltd"
                    className="mt-2 border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="website" className="text-charcoal font-semibold">Website</Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://yourcompany.com"
                    className="mt-2 border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="revenue" className="text-charcoal font-semibold">Annual Revenue *</Label>
                  <Select
                    value={formData.revenue}
                    onValueChange={(value) => setFormData({ ...formData, revenue: value })}
                    required
                  >
                    <SelectTrigger id="revenue" className="mt-2 border-border">
                      <SelectValue placeholder="Select revenue range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-500k">$0 - $500K</SelectItem>
                      <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                      <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                      <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                      <SelectItem value="10m-50m">$10M - $50M</SelectItem>
                      <SelectItem value="50m+">$50M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="challenges" className="text-charcoal font-semibold">What are your biggest marketing challenges?</Label>
                  <Textarea
                    id="challenges"
                    value={formData.challenges}
                    onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                    placeholder="Tell us about your current marketing challenges and goals..."
                    className="mt-2 border-border min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 py-6 text-lg font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
              Prefer to Reach Out Directly?
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Choose the most convenient way to connect with our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-glow transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-4">{method.title}</h3>
                  <p className="text-charcoal/70 mb-6">{method.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={method.href}>{method.action}</a>
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Visit us at our offices across Australia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <Card key={index} className="p-8 hover:shadow-glow transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <div className="flex items-start mb-6">
                  <MapPin className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal mb-2">{office.city}</h3>
                    {office.openingSoon ? (
                      <p className="text-primary font-semibold text-lg">{office.address}</p>
                    ) : (
                      <p className="text-charcoal/70">{office.address}</p>
                    )}
                  </div>
                </div>
                
                {!office.openingSoon && (
                  <div className="space-y-3 ml-9">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-charcoal/60 mr-3" />
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-charcoal hover:text-primary transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-charcoal/60 mr-3" />
                      <a href={`mailto:${office.email}`} className="text-charcoal hover:text-primary transition-colors">
                        {office.email}
                      </a>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}