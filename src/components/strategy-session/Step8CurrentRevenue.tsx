import { useState } from "react";
import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const revenueOptions = [
  "Pre-revenue",
  "Under $25,000",
  "$25,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000+"
];

export const Step8CurrentRevenue = () => {
  const { formData, updateFormData, nextStep } = useStrategySession();
  const [revenue, setRevenue] = useState(formData.currentRevenue);

  const handleContinue = () => {
    updateFormData("currentRevenue", revenue);
    nextStep();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        What is your current average monthly revenue?
      </h2>
      <p className="text-sm text-muted-foreground">
        This helps us tailor a strategy that has a meaningful impact on your bottom line.
      </p>
      <RadioGroup value={revenue} onValueChange={setRevenue} className="space-y-4">
        {revenueOptions.map((option) => (
          <div
            key={option}
            className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-accent cursor-pointer transition-colors"
          >
            <RadioGroupItem value={option} id={option} />
            <Label htmlFor={option} className="text-lg cursor-pointer flex-1">
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
      <Button
        onClick={handleContinue}
        disabled={!revenue}
        className="w-full py-6 text-lg"
        size="lg"
      >
        Continue
      </Button>
    </div>
  );
};
