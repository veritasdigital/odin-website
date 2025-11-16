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

  const handleContinue = () => {
    updateFormData("marketingBudget", budget);
    nextStep();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        What is your approximate monthly marketing budget?
      </h2>
      <p className="text-sm text-muted-foreground">
        This helps us understand which strategies will be most effective for you.
      </p>
      <RadioGroup value={budget} onValueChange={setBudget} className="space-y-3">
        {budgetOptions.map((option) => (
          <div
            key={option}
            className="flex items-center space-x-3 p-4 rounded-lg bg-[#f9fafb] border-2 border-[#e5e7eb] hover:border-primary hover:bg-primary/5 cursor-pointer transition-all"
          >
            <RadioGroupItem value={option} id={option} />
            <Label htmlFor={option} className="text-base cursor-pointer flex-1">
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
      <Button
        onClick={handleContinue}
        disabled={!budget}
        className="w-full h-auto py-4 text-lg"
        size="lg"
      >
        Continue
      </Button>
    </div>
  );
};
