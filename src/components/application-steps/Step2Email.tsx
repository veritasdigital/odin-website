import { memo } from "react";
import { Input } from "@/components/ui/input";
import { QuestionNumber } from "./QuestionNumber";
import { StepProps } from "./types";

export const Step2Email = memo(({ formData, onInputChange, onKeyPress, currentStep }: StepProps) => (
  <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
    <QuestionNumber step={currentStep} />
    <div className="space-y-2 sm:space-y-3 md:space-y-4">
      <h2 className="text-[26px] leading-[1.15] sm:text-4xl lg:text-5xl font-bold tracking-tight isolate">
        What's your best contact <span className="relative inline bg-gradient-to-r from-green-200 to-green-300 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded -z-10">email address</span> {formData.firstName}?*
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-700">So we can personally deliver you a custom, obligation free Marketing Plan ✨</p>
    </div>
    <Input
      type="email"
      value={formData.email}
      onChange={(e) => onInputChange("email", e.target.value)}
      onKeyPress={onKeyPress}
      placeholder="your@email.com"
      className="text-lg sm:text-xl md:text-2xl py-4 sm:py-6 md:py-7 focus:border-blue-500 focus:bg-blue-50/30 border-2 focus:border-3 focus:ring-4 focus:ring-blue-100 transition-all duration-200 rounded-xl shadow-sm"
      autoFocus
    />
  </div>
));

Step2Email.displayName = "Step2Email";
