import { useState } from "react";
import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const budgetOptions = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+"
];

export const Step5MarketingBudget = () => {
  const { formData, updateFormData, nextStep } = useStrategySession();
  const [budget, setBudget] = useState(formData.marketingBudget);

  const handleSelect = (value: string) => {
    setBudget(value);
    updateFormData("marketingBudget", value);
    nextStep();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          What's your monthly marketing budget?
        </h2>
        <p className="text-base text-muted-foreground">
          We ask this to make sure we recommend strategies that are a good fit for your goals. No judgment! 😉
        </p>
      </div>
      <div className="space-y-3">
        {budgetOptions.map((option) => (
          <div
            key={option}
            className="flex items-center space-x-3 p-4 rounded-lg bg-[#f9fafb] border-2 border-[#e5e7eb] hover:border-primary hover:bg-primary/5 cursor-pointer transition-all"
            onClick={() => handleSelect(option)}
          >
            <Label className="text-base cursor-pointer flex-1">
              {option}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};
