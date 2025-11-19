import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Star, ArrowRight } from "lucide-react";
import odinLogo from "@/assets/odin-digital-logo-new.png";

// Australian cities for geolocation fallback
const AUSTRALIAN_CITIES = [
  "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide",
  "Gold Coast", "Newcastle", "Canberra", "Hobart", "Darwin",
  "Launceston", "Ballarat"
];

// Form validation schema
const optInSchema = z.object({
  firstName: z.string()
    .trim()
    .min(1, { message: "First name is required" })
    .max(100, { message: "First name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  mobile: z.string()
    .trim()
    .min(10, { message: "Please enter a valid mobile number" })
    .max(20, { message: "Mobile number must be less than 20 characters" })
    .regex(/^[\d\s\+\-\(\)]+$/, { message: "Please enter a valid mobile number" })
});

const OptIn = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    mobile: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userCity, setUserCity] = useState<string>("Australia");

  // Detect user's city on mount
  useEffect(() => {
    const detectCity = async () => {
      try {
        // Try to get location from IP geolocation API
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.city && AUSTRALIAN_CITIES.includes(data.city)) {
          setUserCity(data.city);
        } else if (data.country === 'AU') {
          // If in Australia but city not in our list, use a default major city
          setUserCity("Australia");
        }
      } catch (error) {
        console.log("Could not detect location, using default");
      }
    };

    detectCity();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = optInSchema.safeParse(formData);
    
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          newErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API endpoint
      // For now, just show success message
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "You'll receive instant access to your free training shortly.",
      });

      // Reset form
      setFormData({
        firstName: "",
        email: "",
        mobile: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Free Marketing Growth Session - Odin Digital</title>
        <meta name="description" content="Claim your 100% FREE no-obligation 30-minute scaling growth map call ($997 value)." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Minimal Header with Logo */}
      <header className="bg-charcoal py-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src={odinLogo} 
            alt="Odin Digital" 
            className="h-8 mx-auto"
            loading="eager"
          />
        </div>
      </header>

      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground py-3 px-4 text-center">
        <p className="text-sm md:text-base font-bold uppercase tracking-wide">
          Serving clients in: {userCity}
        </p>
      </div>

      {/* Main Content - Above the Fold */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 md:py-12">
        <div className="max-w-2xl w-full">
          
          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-charcoal leading-tight mb-4">
            Free Marketing{" "}
            <span className="text-primary">Growth Session</span>
          </h1>

          {/* Sub-Headline */}
          <p className="text-lg md:text-xl text-center text-foreground font-medium mb-8">
            Claim your <span className="font-bold text-primary">100% FREE</span> no-obligation 30-minute scaling growth map call{" "}
            <span className="font-bold">($997 value)</span>. This is strictly for business owners who want to grow. 
            If that's you, then let's scale your biz to the moon! 🚀🌙
          </p>

          {/* Lead Form */}
          <div className="bg-card border-2 border-charcoal rounded-lg p-6 md:p-8 shadow-card mb-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Name */}
              <div>
                <Label 
                  htmlFor="firstName" 
                  className="text-charcoal font-semibold text-base mb-2 block"
                >
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="h-12 text-base border-2 border-border focus:border-primary rounded-md"
                  placeholder="Enter your first name"
                  required
                />
                {errors.firstName && (
                  <p className="text-destructive text-sm mt-1">{errors.firstName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label 
                  htmlFor="email" 
                  className="text-charcoal font-semibold text-base mb-2 block"
                >
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12 text-base border-2 border-border focus:border-primary rounded-md"
                  placeholder="Enter your email address"
                  required
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Mobile */}
              <div>
                <Label 
                  htmlFor="mobile" 
                  className="text-charcoal font-semibold text-base mb-2 block"
                >
                  Mobile Number *
                </Label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="h-12 text-base border-2 border-border focus:border-primary rounded-md"
                  placeholder="Enter your mobile number"
                  required
                />
                {errors.mobile && (
                  <p className="text-destructive text-sm mt-1">{errors.mobile}</p>
                )}
              </div>

              {/* CTA Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary hover:shadow-glow transition-all duration-300 rounded-md group"
              >
                {isSubmitting ? "Processing..." : (
                  <>
                    Get Started <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-5 h-5 fill-primary text-primary"
                />
              ))}
            </div>
            <p className="text-muted-foreground font-semibold text-base">
              4.9 stars out of 678 reviews
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default OptIn;
