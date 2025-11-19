import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
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

// Step 1 validation schema
const step1Schema = z.object({
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

// Step 2 validation schema
const step2Schema = z.object({
  websiteUrl: z.string()
    .trim()
    .min(1, { message: "Website URL is required" })
    .max(500, { message: "Website URL must be less than 500 characters" })
    .url({ message: "Please enter a valid URL" })
    .or(z.string().trim().min(1).regex(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/, { message: "Please enter a valid domain" })),
  companyName: z.string()
    .trim()
    .min(1, { message: "Company name is required" })
    .max(200, { message: "Company name must be less than 200 characters" })
});

const OptIn = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    mobile: "",
    websiteUrl: "",
    companyName: "",
    revenue: ""
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

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate step 1 data
    const result = step1Schema.safeParse({
      firstName: formData.firstName,
      email: formData.email,
      mobile: formData.mobile
    });
    
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

    // Move to step 2
    setCurrentStep(2);
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate step 2 data
    const result = step2Schema.safeParse({
      websiteUrl: formData.websiteUrl,
      companyName: formData.companyName
    });
    
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

    // Move to step 3
    setCurrentStep(3);
  };

  const handleRevenueSelection = async (revenue: string) => {
    setIsSubmitting(true);
    
    // Update form data with revenue selection
    const finalData = { ...formData, revenue };

    try {
      // TODO: Replace with actual API endpoint to save form data
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", finalData);
      
      // Redirect based on revenue selection
      if (revenue === "Under $500k per year") {
        navigate("/t2-ads-thank-you");
      } else {
        navigate("/ads-thank-you");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
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
      <header className="py-3 md:py-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src={odinLogo} 
            alt="Odin Digital" 
            className="h-6 md:h-8 mx-auto"
            loading="eager"
          />
        </div>
      </header>

      {/* Top Banner */}
      <div className="px-4 py-2.5 md:py-3 text-center">
        <div className="inline-block bg-muted/50 border border-border px-4 md:px-6 py-1.5 md:py-2 rounded-sm">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Serving clients in: {userCity}
          </p>
        </div>
      </div>

      {/* Main Content - Above the Fold */}
      <main className="flex-1 flex items-center justify-center px-4 py-6 md:py-12">
        <div className="max-w-2xl w-full">
          
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center text-charcoal leading-tight mb-3 md:mb-4">
            Free Marketing{" "}
            <span className="text-primary">Growth Session</span>
          </h1>

          {/* Sub-Headline */}
          <p className="text-base sm:text-lg md:text-xl text-center text-foreground font-medium mb-6 md:mb-8 px-2">
            Claim your <span className="font-bold text-primary">100% FREE</span> no-obligation 30-minute scaling growth map call{" "}
            <span className="font-bold">($997 value)</span>. This is strictly for business owners who want to grow. 
            If that's you, then let's scale your biz to the moon! 🚀🌙
          </p>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`h-2 rounded-full transition-all duration-300 ${
                  step === currentStep 
                    ? 'w-12 bg-primary' 
                    : step < currentStep 
                      ? 'w-8 bg-primary/50' 
                      : 'w-8 bg-muted'
                }`}
              />
            ))}
          </div>

          {/* Step 1: Contact Information */}
          {currentStep === 1 && (
            <div className="p-4 sm:p-6 md:p-8 mb-4 md:mb-6">
              <form onSubmit={handleStep1Submit} className="space-y-4 md:space-y-5">
                {/* First Name */}
                <div>
                  <Label 
                    htmlFor="firstName" 
                    className="text-charcoal font-semibold text-sm md:text-base mb-1.5 md:mb-2 block"
                  >
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="h-12 md:h-12 text-base border-2 border-border focus:border-primary rounded-md"
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
                    className="text-charcoal font-semibold text-sm md:text-base mb-1.5 md:mb-2 block"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12 md:h-12 text-base border-2 border-border focus:border-primary rounded-md"
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
                    className="text-charcoal font-semibold text-sm md:text-base mb-1.5 md:mb-2 block"
                  >
                    Mobile Number *
                  </Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="h-12 md:h-12 text-base border-2 border-border focus:border-primary rounded-md"
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
                  className="w-full h-12 md:h-14 text-base md:text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary hover:shadow-glow transition-all duration-300 rounded-md group"
                >
                  Continue <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          )}

          {/* Step 2: Business Information */}
          {currentStep === 2 && (
            <div className="p-4 sm:p-6 md:p-8 mb-4 md:mb-6">
              <form onSubmit={handleStep2Submit} className="space-y-4 md:space-y-5">
                {/* Website URL */}
                <div>
                  <Label 
                    htmlFor="websiteUrl" 
                    className="text-charcoal font-semibold text-sm md:text-base mb-1.5 md:mb-2 block"
                  >
                    Website URL *
                  </Label>
                  <Input
                    id="websiteUrl"
                    name="websiteUrl"
                    type="url"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    className="h-12 md:h-12 text-base border-2 border-border focus:border-primary rounded-md"
                    placeholder="https://yourwebsite.com"
                    required
                  />
                  {errors.websiteUrl && (
                    <p className="text-destructive text-sm mt-1">{errors.websiteUrl}</p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <Label 
                    htmlFor="companyName" 
                    className="text-charcoal font-semibold text-sm md:text-base mb-1.5 md:mb-2 block"
                  >
                    Company Name *
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="h-12 md:h-12 text-base border-2 border-border focus:border-primary rounded-md"
                    placeholder="Enter your company name"
                    required
                  />
                  {errors.companyName && (
                    <p className="text-destructive text-sm mt-1">{errors.companyName}</p>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  type="submit"
                  className="w-full h-12 md:h-14 text-base md:text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary hover:shadow-glow transition-all duration-300 rounded-md group"
                >
                  Continue <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          )}

          {/* Step 3: Revenue Selection */}
          {currentStep === 3 && (
            <div className="p-4 sm:p-6 md:p-8 mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-center text-charcoal mb-6">
                What's your current annual revenue?
              </h2>
              <div className="space-y-3">
                {[
                  "Under $500k per year",
                  "$500k-$1M per year",
                  "$1M-$5M per year",
                  "Over $5M per year"
                ].map((option) => (
                  <Button
                    key={option}
                    type="button"
                    onClick={() => handleRevenueSelection(option)}
                    disabled={isSubmitting}
                    className="w-full h-14 md:h-16 text-base md:text-lg font-semibold bg-card hover:bg-primary hover:text-primary-foreground border-2 border-border hover:border-primary text-charcoal transition-all duration-300 rounded-md whitespace-normal break-words py-3 px-6"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Social Proof */}
          {currentStep === 1 && (
            <div className="text-center">
              <div className="flex items-center justify-center gap-0.5 md:gap-1 mb-1.5 md:mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground font-semibold text-sm md:text-base">
                4.9 stars out of 678 reviews
              </p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default OptIn;
