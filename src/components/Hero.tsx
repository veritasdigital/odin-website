import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import heroPerson from "@/assets/hero-person.webp";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone number must be less than 20 characters"),
  website: z.string().trim().max(255, "Website must be less than 255 characters").optional(),
});

type FormData = z.infer<typeof formSchema>;

const quoteOptions = [
  "I want to grow my revenue",
  "I need more traffic", 
  "I need more brand awareness",
  "I need more leads",
  "I need more sales",
  "All of the above"
];

export const Hero = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      formSchema.parse(formData);
      setErrors({});
      // Navigate to thank you page
      navigate("/thank-you");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<FormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };
  return (
    <section className="relative isolate overflow-hidden min-h-screen flex items-center bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
      </div>
      
      {/* Split Screen Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-20 items-center min-h-screen py-24 lg:py-32">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8 lg:space-y-10 animate-slide-up max-w-2xl">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="relative z-30 overflow-visible text-4xl md:text-5xl xl:text-6xl font-black text-charcoal leading-[0.95] tracking-tight">
                <span className="block mb-3 lg:mb-4">Accelerate Your</span>
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
                  Digital Growth
                </span>
                <span className="block mt-3 lg:mt-4 text-3xl md:text-4xl xl:text-5xl">
                  With Strategic Marketing Excellence
                </span>
              </h1>
            </div>
            
            {/* Subtitle and Description */}
            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-xl md:text-2xl lg:text-2xl text-charcoal/90 font-bold leading-tight max-w-2xl">
                Data-Driven Digital Marketing Solutions That Deliver Measurable Business Results
              </h2>
              
              <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-2xl font-light">
                At Odin Digital, we partner with ambitious businesses to develop and execute comprehensive digital marketing strategies that drive sustainable growth. Our evidence-based approach and proven methodologies have contributed to generating over $574 million in client revenue across diverse industries.
              </p>
            </div>
            
            {/* Action Button or Form */}
            <div className="pt-6">
              {!selectedOption ? (
                <div className="inline-flex items-center bg-white rounded-lg shadow-lg border border-charcoal/20">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="xl" className="px-6 py-4 text-charcoal rounded-none border-r border-charcoal/20 hover:bg-primary/5 justify-center items-center shrink-0 whitespace-nowrap">
                        {quoteOptions[0]}
                        <ChevronDown className="ml-2 h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-80 bg-white/95 backdrop-blur-lg border border-white/20 shadow-lg">
                      {quoteOptions.map((option) => (
                        <DropdownMenuItem 
                          key={option}
                          onClick={() => setSelectedOption(option)}
                          className="cursor-pointer text-charcoal hover:bg-primary/10 focus:bg-primary/10"
                        >
                          {option}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button variant="ghost" size="xl" className="shadow-none text-lg pl-12 pr-16 py-4 font-bold text-white bg-primary hover:bg-primary/90 rounded-none justify-center items-center shrink-0 whitespace-nowrap">
                    Get An Obligation Free Quote
                  </Button>
                </div>
              ) : (
                <Card className="w-full max-w-lg bg-white/95 backdrop-blur-lg border border-white/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-charcoal">Get Your Free Quote</CardTitle>
                    <CardDescription className="text-charcoal/70">
                      You selected: <span className="font-medium text-primary">{selectedOption}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-charcoal">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className={`bg-white/80 border ${errors.name ? "border-red-500" : "border-charcoal/20"}`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-charcoal">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className={`bg-white/80 border ${errors.email ? "border-red-500" : "border-charcoal/20"}`}
                          placeholder="Enter your email address"
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-charcoal">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className={`bg-white/80 border ${errors.phone ? "border-red-500" : "border-charcoal/20"}`}
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="website" className="text-charcoal">Website (Optional)</Label>
                        <Input
                          id="website"
                          value={formData.website}
                          onChange={(e) => handleInputChange("website", e.target.value)}
                          className={`bg-white/80 border ${errors.website ? "border-red-500" : "border-charcoal/20"}`}
                          placeholder="Enter your website URL"
                        />
                        {errors.website && <p className="text-sm text-red-500">{errors.website}</p>}
                      </div>
                      
                      <div className="flex gap-3 pt-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setSelectedOption(null)}
                          className="flex-1 border-charcoal/20 text-charcoal hover:bg-charcoal/5"
                        >
                          Back
                        </Button>
                        <Button type="submit" className="flex-1 shadow-primary">
                          Submit Quote Request
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8 pt-8 mt-8 border-t border-charcoal/10">
              <div className="text-left space-y-1">
                <div className="text-2xl md:text-3xl lg:text-4xl font-black mb-1 text-primary">283+</div>
                <div className="text-xs font-semibold text-charcoal/70 uppercase tracking-wider">Trusted Businesses</div>
              </div>
              <div className="text-left space-y-1">
                <div className="text-2xl md:text-3xl lg:text-4xl font-black mb-1 text-primary">$50M+</div>
                <div className="text-xs font-semibold text-charcoal/70 uppercase tracking-wider">Client Revenue</div>
              </div>
              <div className="text-left space-y-1">
                <div className="text-2xl md:text-3xl lg:text-4xl font-black mb-1 text-primary">340%</div>
                <div className="text-xs font-semibold text-charcoal/70 uppercase tracking-wider">Average ROI</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Person Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Person Image */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-lg">
                <img 
                  src={heroPerson} 
                  alt="Alexa Blake, Odin Digital General Manager" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Floating Glassy Banner */}
              <div className="absolute bottom-8 -left-4 right-8 bg-white/80 backdrop-blur-lg border border-white/40 rounded-xl shadow-lg p-4 z-10">
                <div className="text-charcoal">
                  <h3 className="font-bold text-lg">Alexa Blake</h3>
                  <p className="text-sm text-charcoal/70">Odin Digital General Manager</p>
                </div>
              </div>
              
              {/* Decorative elements around image */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-secondary/20 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/3 -left-8 w-6 h-6 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};