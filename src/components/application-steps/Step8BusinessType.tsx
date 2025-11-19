import { memo } from "react";
import { Button } from "@/components/ui/button";
import { QuestionNumber } from "./QuestionNumber";
import { StepProps } from "./types";

const businessTypes = [
  { value: "b2b", label: "B2B" },
  { value: "b2c", label: "B2C" },
  { value: "both", label: "Both B2B & B2C" },
  { value: "ecommerce", label: "E-commerce" }
];

export const Step8BusinessType = memo(({ formData, onInputChange, currentStep }: StepProps) => (
  <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
    <QuestionNumber step={currentStep} />
    <h2 className="text-[26px] leading-[1.15] sm:text-4xl lg:text-5xl font-bold tracking-tight isolate">
      What <span className="relative inline bg-gradient-to-r from-green-200 to-green-300 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded -z-10">type</span> of business are you?*
    </h2>
    <div className="space-y-2.5 sm:space-y-3">
      {businessTypes.map((type) => (
        <Button
          key={type.value}
          onClick={() => onInputChange("businessType", type.value)}
          variant={formData.businessType === type.value ? "default" : "outline"}
          className={`w-full text-base sm:text-lg md:text-xl py-5 sm:py-7 md:py-8 h-auto justify-start font-medium text-left rounded-xl transition-all duration-200 ${
            formData.businessType === type.value 
              ? "bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-600 shadow-lg scale-[1.02]" 
              : "bg-white hover:bg-blue-50 text-gray-700 border-2 hover:border-blue-300 shadow-sm hover:shadow-md"
          }`}
        >
          <span className="mr-2.5 sm:mr-3 text-lg sm:text-xl">
            {formData.businessType === type.value ? "✓" : "○"}
          </span>
          {type.label}
        </Button>
      ))}
    </div>
  </div>
));

Step8BusinessType.displayName = "Step8BusinessType";
