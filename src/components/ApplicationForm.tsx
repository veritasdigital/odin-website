import { useState, useEffect, useCallback, useMemo, memo, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface FormData {
  firstName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  description: string;
}

const ApplicationForm = memo(() => {
  const [currentStep, setCurrentStep] = useState(1);
  const [leadId, setLeadId] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 6;

  // Load from local storage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("applicationFormData");
    const savedLeadId = localStorage.getItem("applicationLeadId");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
    if (savedLeadId) {
      setLeadId(savedLeadId);
    }
  }, []);

  // Debounced save to local storage
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem("applicationFormData", JSON.stringify(formData));
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [formData]);

  const handleInputChange = useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const validateCurrentStep = useCallback((): boolean => {
    switch (currentStep) {
      case 1:
        return formData.firstName.trim().length > 0;
      case 2:
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      case 3:
        const phoneDigits = formData.phone.replace(/\D/g, '');
        return phoneDigits.length >= 9 && phoneDigits.length <= 12;
      case 4:
        return formData.company.trim().length > 0;
      case 5:
        return true; // Website is optional
      case 6:
        return formData.description.trim().length > 0;
      default:
        return false;
    }
  }, [currentStep, formData]);

  const handleNext = useCallback(async () => {
    if (!validateCurrentStep()) {
      if (currentStep === 3) {
        toast.error("Please use a real phone number");
      } else {
        toast.error("Please fill in this field to continue");
      }
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final step - submit and redirect
      setIsSubmitting(true);
      
      try {
        // You can add actual Supabase submission here
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Clear local storage
        localStorage.removeItem("applicationFormData");
        localStorage.removeItem("applicationLeadId");

        // Redirect to thank you page
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 500);
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    }
  }, [currentStep, validateCurrentStep, totalSteps]);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleNext();
    }
  }, [handleNext]);

  const questionNumber = useMemo(() => (
    <div className="flex items-center gap-2 text-base sm:text-lg text-gray-400 mb-6 font-medium">
      <span className="bg-gray-100 px-3 py-1 rounded-full">{currentStep}</span>
      <ArrowRight className="h-5 w-5" />
    </div>
  ), [currentStep]);

  const renderQuestion = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
            {questionNumber}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-[28px] leading-[1.2] sm:text-4xl lg:text-5xl font-bold tracking-tight isolate">
                Hey there! 👋 What's your <span className="relative inline bg-gradient-to-r from-green-200 to-green-300 px-2 py-1 rounded -z-10">name</span>?*
              </h2>
              <div className="space-y-2">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  Claim a free zero-obligation "A.I Performance Marketing Plan" for your business (valued at $2,500) tailor made by Australia's #1 Boutique Marketing Firm.
                </p>
                <p className="text-lg sm:text-xl text-gray-700">⭐⭐⭐⭐⭐ 4.9/5 stars by 346 clients, $325M generated. 🚀</p>
              </div>
            </div>
            <Input
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your answer here..."
              className="text-xl sm:text-2xl py-6 sm:py-7 focus:border-blue-500 focus:bg-blue-50/30 border-2 focus:border-3 focus:ring-4 focus:ring-blue-100 transition-all duration-200 rounded-xl shadow-sm"
              autoFocus
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
            {questionNumber}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-[28px] leading-[1.2] sm:text-4xl lg:text-5xl font-bold tracking-tight isolate">
                What's your best contact <span className="relative inline bg-gradient-to-r from-green-200 to-green-300 px-2 py-1 rounded -z-10">email address</span> {formData.firstName}?*
              </h2>
              <p className="text-lg sm:text-xl text-gray-700">So we can personally deliver you a custom, obligation free Marketing Plan ✨</p>
            </div>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your answer here..."
              className="text-xl sm:text-2xl py-6 sm:py-7 focus:border-blue-500 focus:bg-blue-50/30 border-2 focus:border-3 focus:ring-4 focus:ring-blue-100 transition-all duration-200 rounded-xl shadow-sm"
              autoFocus
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
            {questionNumber}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-[28px] leading-[1.2] sm:text-4xl lg:text-5xl font-bold tracking-tight isolate">
                Almost done {formData.firstName}! What's your best contact <span className="relative inline bg-gradient-to-r from-green-200 to-green-300 px-2 py-1 rounded -z-10">mobile number</span>?*
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-3 px-4 sm:px-5 py-5 border-2 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm">
                <span className="text-2xl sm:text-3xl">🇦🇺</span>
                <span className="text-lg sm:text-xl text-gray-700 font-medium">+61</span>
              </div>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="0412 345 678"
                className="flex-1 text-xl sm:text-2xl py-6 sm:py-7 focus:border-blue-500 focus:bg-blue-50/30 border-2 focus:border-3 focus:ring-4 focus:ring-blue-100 transition-all duration-200 rounded-xl shadow-sm"
                autoFocus
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
            {questionNumber}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-[28px] leading-[1.2] sm:text-4xl lg:text-5xl font-bold tracking-tight isolate">
                What's the name of your <span className="relative inline bg-gradient-to-r from-green-200 to-green-300 px-2 py-1 rounded -z-10">company</span>?*
              </h2>
              <p className="text-lg sm:text-xl text-gray-700">So we know who we are going to help grow to the next level 🚀</p>
            </div>
            <Input
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your answer here..."
              className="text-xl sm:text-2xl py-6 sm:py-7 focus:border-blue-500 focus:bg-blue-50/30 border-2 focus:border-3 focus:ring-4 focus:ring-blue-100 transition-all duration-200 rounded-xl shadow-sm"
              autoFocus
            />
          </div>
        );

      case 5:
        return (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
            {questionNumber}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-[28px] leading-[1.2] sm:text-4xl lg:text-5xl font-bold tracking-tight isolate">
                What is the <span className="relative inline bg-gradient-to-r from-green-200 to-green-300 px-2 py-1 rounded -z-10">website URL</span> for {formData.company}? (optional)
              </h2>
              <p className="text-lg sm:text-xl text-gray-700">So we can check out your website, and offer helpful advice to drive growth 😊</p>
            </div>
            <Input
              type="url"
              value={formData.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="example.com or https://www.example.com"
              className="text-xl sm:text-2xl py-6 sm:py-7 focus:border-blue-500 focus:bg-blue-50/30 border-2 focus:border-3 focus:ring-4 focus:ring-blue-100 transition-all duration-200 rounded-xl shadow-sm"
              autoFocus
            />
          </div>
        );

      case 6:
        return (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
            {questionNumber}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-[28px] leading-[1.2] sm:text-4xl lg:text-5xl font-bold tracking-tight isolate">
                {formData.firstName}, please tell us about your <span className="relative inline bg-gradient-to-r from-green-200 to-green-300 px-2 py-1 rounded -z-10">business and marketing goals</span>*
              </h2>
              <p className="text-lg sm:text-xl text-gray-700">Please be as specific as possible, so we can provide you with the best tailored strategy. 💡</p>
            </div>
            <Textarea
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Type your answer here..."
              className="text-xl sm:text-2xl py-5 sm:py-6 min-h-[160px] sm:min-h-[180px] focus:border-blue-500 focus:bg-blue-50/30 border-2 focus:border-3 focus:ring-4 focus:ring-blue-100 transition-all duration-200 rounded-xl shadow-sm resize-none"
              autoFocus
            />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen min-h-[100dvh] bg-gradient-to-b from-white to-gray-50 flex flex-col overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-8 md:px-12 py-4 sm:py-12 md:py-16">
        <div className="w-full max-w-4xl transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-4">
          {renderQuestion()}

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-8 sm:mt-10 pt-4 border-t border-gray-100">
            <div className="text-sm sm:text-base text-gray-500 font-medium">
              press <span className="font-bold text-gray-700">Enter ↵</span>
            </div>
            <Button
              onClick={handleNext}
              disabled={!validateCurrentStep() || isSubmitting}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 sm:px-12 py-6 sm:py-7 text-xl sm:text-2xl touch-manipulation shadow-xl hover:shadow-2xl transition-all duration-200 rounded-xl font-semibold active:scale-95"
            >
              {currentStep === totalSteps ? (isSubmitting ? "Submitting..." : "Submit") : "OK"}
            </Button>
          </div>

          {/* Progress indicator */}
          <div className="mt-10 sm:mt-14 flex items-center justify-center gap-2">
            {Array.from({ length: totalSteps }).map((_, idx) => (
              <div
                key={idx}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                  idx + 1 <= currentStep ? "w-10 sm:w-12 bg-gradient-to-r from-blue-600 to-blue-700" : "w-8 sm:w-10 bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

ApplicationForm.displayName = "ApplicationForm";

export default ApplicationForm;
