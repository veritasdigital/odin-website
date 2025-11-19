import { memo } from "react";
import { Input } from "@/components/ui/input";
import { QuestionNumber } from "./QuestionNumber";
import { StepProps } from "./types";

export const Step4Company = memo(({ formData, onInputChange, onKeyPress, currentStep }: StepProps) => (
  <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
    <QuestionNumber step={currentStep} />
    <h2 className="text-[26px] leading-[1.15] sm:text-4xl lg:text-5xl font-bold tracking-tight isolate">
      What's the <span className="relative inline bg-gradient-to-r from-green-200 to-green-300 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded -z-10">name</span> of your business?*
    </h2>
    <Input
      value={formData.company}
      onChange={(e) => onInputChange("company", e.target.value)}
      onKeyPress={onKeyPress}
      placeholder="Type your answer here..."
      className="text-lg sm:text-xl md:text-2xl py-4 sm:py-6 md:py-7 focus:border-blue-500 focus:bg-blue-50/30 border-2 focus:border-3 focus:ring-4 focus:ring-blue-100 transition-all duration-200 rounded-xl shadow-sm"
      autoFocus
    />
  </div>
));

Step4Company.displayName = "Step4Company";
