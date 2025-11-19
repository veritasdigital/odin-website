import { memo } from "react";
import { Button } from "@/components/ui/button";
import { QuestionNumber } from "./QuestionNumber";
import { StepProps } from "./types";

const investmentOptions = [
  { value: "5k-10k", label: "$5,000 - $10,000/month" },
  { value: "10k-25k", label: "$10,000 - $25,000/month" },
  { value: "25k-50k", label: "$25,000 - $50,000/month" },
  { value: "50k+", label: "$50,000+/month" }
];

export const Step9Investment = memo(({ formData, onInputChange, currentStep }: StepProps) => (
  <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
    <QuestionNumber step={currentStep} />
    <div className="space-y-2 sm:space-y-3 md:space-y-4">
      <h2 className="text-[26px] leading-[1.15] sm:text-4xl lg:text-5xl font-bold tracking-tight isolate">
        What's your monthly marketing <span className="relative inline bg-gradient-to-r from-green-200 to-green-300 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded -z-10">investment budget</span>?*
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-700">This helps us customize your marketing plan to your budget range 💰</p>
    </div>
    <div className="space-y-2.5 sm:space-y-3">
      {investmentOptions.map((option) => (
        <Button
          key={option.value}
          onClick={() => onInputChange("investment", option.value)}
          variant={formData.investment === option.value ? "default" : "outline"}
          className={`w-full text-base sm:text-lg md:text-xl py-5 sm:py-7 md:py-8 h-auto justify-start font-medium text-left rounded-xl transition-all duration-200 ${
            formData.investment === option.value 
              ? "bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-600 shadow-lg scale-[1.02]" 
              : "bg-white hover:bg-blue-50 text-gray-700 border-2 hover:border-blue-300 shadow-sm hover:shadow-md"
          }`}
        >
          <span className="mr-2.5 sm:mr-3 text-lg sm:text-xl">
            {formData.investment === option.value ? "✓" : "○"}
          </span>
          {option.label}
        </Button>
      ))}
    </div>
  </div>
));

Step9Investment.displayName = "Step9Investment";
