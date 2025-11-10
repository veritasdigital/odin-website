import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { SideTab } from "@/components/SideTab";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar } from "lucide-react";

export default function Contact() {
  const { openForm } = useMarketingForm();

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Free Strategy Session",
      description: "Book a 30-minute consultation to discuss your marketing goals",
      action: "Schedule Now",
      primary: true
    },
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
      <MarketingFormModal />
      <SideTab />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Ready to accelerate your business growth? Let's discuss how our digital marketing expertise can drive measurable results for your company.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Let's Start the Conversation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the most convenient way to connect with our team of digital marketing experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className={`p-8 text-center hover:shadow-glow transition-all duration-300 ${method.primary ? 'ring-2 ring-primary' : ''}`}>
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${method.primary ? 'bg-gradient-primary' : 'bg-muted'}`}>
                    <IconComponent className={`w-8 h-8 ${method.primary ? 'text-white' : 'text-foreground'}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{method.title}</h3>
                  <p className="text-muted-foreground mb-6">{method.description}</p>
                  {method.primary ? (
                    <Button variant="cta" className="w-full" onClick={openForm}>
                      {method.action}
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full" asChild>
                      <a href={method.href}>{method.action}</a>
                    </Button>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Our Offices
            </h2>
            <p className="text-xl text-muted-foreground">
              We're located in Australia's major business centers, ready to serve clients nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {offices.map((office, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {office.city} Office
                  {office.openingSoon && <span className="text-lg text-muted-foreground font-normal ml-2">- Opening Soon</span>}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{office.address}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="text-muted-foreground">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">How quickly can we expect to see results?</h3>
              <p className="text-muted-foreground">Most clients see initial improvements within 30-60 days, with significant results typically achieved within 90 days. Timeline varies based on your current situation and chosen services.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Do you work with businesses in all industries?</h3>
              <p className="text-muted-foreground">Yes, we have experience across various industries including healthcare, legal, e-commerce, B2B services, and more. Our strategies are tailored to your specific industry and target audience.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">What makes Odin Digital different from other agencies?</h3>
              <p className="text-muted-foreground">We focus on data-driven strategies, transparent reporting, and building long-term partnerships. Our team combines technical expertise with creative innovation to deliver measurable results.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Can we schedule a call outside business hours?</h3>
              <p className="text-muted-foreground">Absolutely! We understand that business owners have busy schedules. We're happy to accommodate calls outside standard business hours to fit your availability.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 gradient-primary overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-lg animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Book your free 30-minute strategy session and discover how we can accelerate your business growth.
          </p>
          
          <div className="flex justify-center">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white max-w-md">
              <h3 className="text-2xl font-bold mb-4">Schedule Your Free Consultation</h3>
              <p className="text-white/80 mb-6">
                Meet with our team to discuss your business objectives and explore how our digital marketing expertise can drive measurable results.
              </p>
              <Button variant="cta" size="lg" className="w-full" onClick={openForm}>
                <Calendar className="w-5 h-5 mr-2" />
                SCHEDULE NOW
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}