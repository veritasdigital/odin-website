import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FormData } from "./application-steps/types";
import { validateStep, getFormattedTimezone } from "@/utils/formValidation";

// Lazy load step components
const Step1Name = lazy(() => import("./application-steps/Step1Name").then(m => ({ default: m.Step1Name })));
const Step2Email = lazy(() => import("./application-steps/Step2Email").then(m => ({ default: m.Step2Email })));
const Step3Phone = lazy(() => import("./application-steps/Step3Phone").then(m => ({ default: m.Step3Phone })));
const Step4Company = lazy(() => import("./application-steps/Step4Company").then(m => ({ default: m.Step4Company })));
const Step5Website = lazy(() => import("./application-steps/Step5Website").then(m => ({ default: m.Step5Website })));
const Step6Challenge = lazy(() => import("./application-steps/Step6Challenge").then(m => ({ default: m.Step6Challenge })));
const Step7Timeline = lazy(() => import("./application-steps/Step7Timeline").then(m => ({ default: m.Step7Timeline })));
const Step8BusinessType = lazy(() => import("./application-steps/Step8BusinessType").then(m => ({ default: m.Step8BusinessType })));
const Step9Investment = lazy(() => import("./application-steps/Step9Investment").then(m => ({ default: m.Step9Investment })));

const ApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    challenge: "",
    timeline: "",
    businessType: "",
    investment: "",
    timezone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 9;

  // Defer localStorage loading until after initial render
  useEffect(() => {
    requestIdleCallback(() => {
      const savedData = localStorage.getItem("applicationFormData");
      if (savedData) {
        try {
          // Try decompression first, fallback to direct parse
          let parsed;
          try {
            const decompressed = atob(savedData);
            parsed = JSON.parse(decodeURIComponent(decompressed));
          } catch {
            parsed = JSON.parse(savedData);
          }
          setFormData(prev => ({ ...prev, ...parsed, timezone: getFormattedTimezone() }));
        } catch (error) {
          console.error("Failed to parse saved data:", error);
        }
      } else {
        setFormData(prev => ({ ...prev, timezone: getFormattedTimezone() }));
      }
    });
  }, []);

  // Debounced save to localStorage with compression
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        const jsonString = JSON.stringify(formData);
        const compressed = btoa(encodeURIComponent(jsonString));
        localStorage.setItem("applicationFormData", compressed);
      } catch (error) {
        // Fallback to uncompressed if compression fails
        localStorage.setItem("applicationFormData", JSON.stringify(formData));
      }
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [formData]);

  const handleInputChange = useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleNext = useCallback(async () => {
    if (!validateStep(currentStep, formData)) {
      if (currentStep === 3) {
        toast.error("Please use a real phone number");
      } else {
        toast.error("Please fill in this field to continue");
      }
      return;
    }

    // Trigger partial webhook after phone (step 3)
    if (currentStep === 3) {
      try {
        fetch("https://hook.us1.make.com/6637ars5tejj8ke2fihovmp69iaawqb5", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.firstName,
            email: formData.email,
            phone: formData.phone,
            timezone: formData.timezone,
            timestamp: new Date().toISOString(),
          }),
        }).catch(err => console.error("Webhook error:", err));
      } catch (error) {
        console.error("Webhook error:", error);
      }
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final submission
      setIsSubmitting(true);
      
      try {
        await fetch("https://hook.us1.make.com/uesax43jouwtqy0u9zgl912kl5j0cbx6", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            name: formData.firstName,
            email: formData.email,
            phone: formData.phone,
            companyName: formData.company,
            website: formData.website,
            challenge: formData.challenge,
            timeline: formData.timeline,
            businessType: formData.businessType,
            investment: formData.investment,
            timezone: formData.timezone,
          }),
        });

        localStorage.removeItem("applicationFormData");
        localStorage.removeItem("applicationLeadId");

        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 500);
      } catch (error) {
        console.error("Submission error:", error);
        toast.error("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    }
  }, [currentStep, formData, totalSteps]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleNext();
    }
  }, [handleNext]);

  const renderStep = () => {
    const stepProps = {
      formData,
      onInputChange: handleInputChange,
      onKeyPress: handleKeyPress,
      currentStep,
    };

    const stepFallback = (
      <div className="min-h-[300px] flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );

    switch (currentStep) {
      case 1:
        return <Suspense fallback={stepFallback}><Step1Name {...stepProps} /></Suspense>;
      case 2:
        return <Suspense fallback={stepFallback}><Step2Email {...stepProps} /></Suspense>;
      case 3:
        return <Suspense fallback={stepFallback}><Step3Phone {...stepProps} /></Suspense>;
      case 4:
        return <Suspense fallback={stepFallback}><Step4Company {...stepProps} /></Suspense>;
      case 5:
        return <Suspense fallback={stepFallback}><Step5Website {...stepProps} /></Suspense>;
      case 6:
        return <Suspense fallback={stepFallback}><Step6Challenge {...stepProps} /></Suspense>;
      case 7:
        return <Suspense fallback={stepFallback}><Step7Timeline {...stepProps} /></Suspense>;
      case 8:
        return <Suspense fallback={stepFallback}><Step8BusinessType {...stepProps} /></Suspense>;
      case 9:
        return <Suspense fallback={stepFallback}><Step9Investment {...stepProps} /></Suspense>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 flex items-center justify-center p-3 sm:p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-10 md:p-14 border border-gray-100">
        <div className="mb-6 sm:mb-8 md:mb-10">
          <div className="w-full bg-gray-100 rounded-full h-2 sm:h-2.5 overflow-hidden shadow-inner">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-500 ease-out shadow-sm"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 font-medium text-center">
            Step {currentStep} of {totalSteps}
          </p>
        </div>

        {renderStep()}

        <div className="mt-6 sm:mt-8 md:mt-10 flex gap-2.5 sm:gap-3">
          {currentStep > 1 && (
            <Button
              onClick={() => setCurrentStep(currentStep - 1)}
              variant="outline"
              className="px-5 sm:px-8 py-5 sm:py-6 md:py-7 text-base sm:text-lg md:text-xl font-semibold border-2 hover:bg-gray-50 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
              disabled={isSubmitting}
            >
              ← Back
            </Button>
          )}
          <Button
            onClick={handleNext}
            disabled={isSubmitting}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-5 sm:py-6 md:py-7 text-base sm:text-lg md:text-xl font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2.5 sm:gap-3">
                <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-b-2 border-white"></div>
                <span>Submitting...</span>
              </div>
            ) : currentStep === totalSteps ? (
              "Submit Application →"
            ) : (
              "Continue →"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
