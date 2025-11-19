import { ArrowRight } from "lucide-react";
import { memo } from "react";

interface QuestionNumberProps {
  step: number;
}

export const QuestionNumber = memo(({ step }: QuestionNumberProps) => (
  <div className="flex items-center gap-2 text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 font-medium">
    <span className="bg-gray-100 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-sm">{step}</span>
    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
  </div>
));

QuestionNumber.displayName = "QuestionNumber";
