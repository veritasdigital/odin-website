import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Star } from "lucide-react";
import odinLogo from "@/assets/odin-digital-logo-new.png";

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
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Free Training - Odin Digital</title>
        <meta name="description" content="Get instant access to our free training on digital marketing strategies." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Minimal Header with Logo */}
      <header className="bg-gradient-to-r from-[#0A1128] to-[#1A2642] py-4 px-4">
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
      <div className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white py-3 px-4 text-center">
        <p className="text-sm md:text-base font-bold uppercase tracking-wide">
          NO STRINGS ATTACHED... 100% FREE TRAINING
        </p>
      </div>

      {/* Main Content - Above the Fold */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 md:py-12">
        <div className="max-w-2xl w-full">
          
          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-[#0A1128] leading-tight mb-4">
            How We Use{" "}
            <span className="text-[#4CAF50]">Beginner-Friendly A.I.</span>{" "}
            To Make Online
          </h1>

          {/* Sub-Headline */}
          <p className="text-lg md:text-xl text-center text-[#0A1128]/80 font-medium mb-8">
            From home, with no experience & no tech skills required.
          </p>

          {/* Lead Form */}
          <div className="bg-white border-2 border-[#0A1128] rounded-lg p-6 md:p-8 shadow-xl mb-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Name */}
              <div>
                <Label 
                  htmlFor="firstName" 
                  className="text-[#0A1128] font-semibold text-base mb-2 block"
                >
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="h-12 text-base border-2 border-[#0A1128]/20 focus:border-[#4CAF50] rounded-md"
                  placeholder="Enter your first name"
                  required
                />
                {errors.firstName && (
                  <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label 
                  htmlFor="email" 
                  className="text-[#0A1128] font-semibold text-base mb-2 block"
                >
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12 text-base border-2 border-[#0A1128]/20 focus:border-[#4CAF50] rounded-md"
                  placeholder="Enter your email address"
                  required
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Mobile */}
              <div>
                <Label 
                  htmlFor="mobile" 
                  className="text-[#0A1128] font-semibold text-base mb-2 block"
                >
                  Mobile Number *
                </Label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="h-12 text-base border-2 border-[#0A1128]/20 focus:border-[#4CAF50] rounded-md"
                  placeholder="Enter your mobile number"
                  required
                />
                {errors.mobile && (
                  <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>

              {/* CTA Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-[#4CAF50] to-[#45a049] hover:from-[#45a049] hover:to-[#3d8b40] text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-md"
              >
                {isSubmitting ? "Processing..." : "Get Instant Access Now"}
              </Button>
            </form>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-6 h-6 fill-[#FFD700] text-[#FFD700]"
                />
              ))}
            </div>
            <p className="text-[#0A1128]/70 font-semibold text-base">
              5 Star Reviews On Trustpilot
            </p>
          </div>

        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="bg-gradient-to-r from-[#0A1128] to-[#1A2642] text-white/70 py-4 px-4 text-center">
        <p className="text-xs md:text-sm">
          © {new Date().getFullYear()} Odin Digital. All rights reserved. |{" "}
          <a href="/privacy" className="hover:text-white underline">Privacy Policy</a> |{" "}
          <a href="/terms" className="hover:text-white underline">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default OptIn;
