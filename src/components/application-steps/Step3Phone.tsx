import { memo } from "react";
import { Input } from "@/components/ui/input";
import { QuestionNumber } from "./QuestionNumber";
import { StepProps } from "./types";

export const Step3Phone = memo(({ formData, onInputChange, onKeyPress, currentStep }: StepProps) => (
  <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right-5 duration-300">
    <QuestionNumber step={currentStep} />
    <h2 className="text-[26px] leading-[1.15] sm:text-4xl lg:text-5xl font-bold tracking-tight isolate">
      What's your <span className="relative inline bg-gradient-to-r from-green-200 to-green-300 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded -z-10">mobile number</span> {formData.firstName}?*
    </h2>
    <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
      <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-5 py-4 sm:py-5 border-2 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm w-fit">
        <span className="text-xl sm:text-2xl md:text-3xl">🇦🇺</span>
        <span className="text-base sm:text-lg md:text-xl text-gray-700 font-medium">+61</span>
      </div>
      <Input
        type="tel"
        value={formData.phone}
        onChange={(e) => onInputChange("phone", e.target.value)}
        onKeyPress={onKeyPress}
        placeholder="0412 345 678"
        className="text-lg sm:text-xl md:text-2xl py-4 sm:py-6 md:py-7 focus:border-blue-500 focus:bg-blue-50/30 border-2 focus:border-3 focus:ring-4 focus:ring-blue-100 transition-all duration-200 rounded-xl shadow-sm flex-1"
        autoFocus
      />
    </div>
  </div>
));

Step3Phone.displayName = "Step3Phone";
