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

  const handleSelect = (value: string) => {
    setRevenue(value);
    updateFormData("currentRevenue", value);
    nextStep();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          What's your current monthly revenue?
        </h2>
        <p className="text-base text-muted-foreground">
          This helps us tailor a strategy that has a meaningful impact on your bottom line.
        </p>
      </div>
      <div className="space-y-4">
        {revenueOptions.map((option) => (
          <div
            key={option}
            className="flex items-center space-x-3 p-4 rounded-lg bg-[#f9fafb] border-2 border-[#e5e7eb] hover:border-primary hover:bg-primary/5 cursor-pointer transition-all"
            onClick={() => handleSelect(option)}
          >
            <Label className="text-lg cursor-pointer flex-1">
              {option}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};
