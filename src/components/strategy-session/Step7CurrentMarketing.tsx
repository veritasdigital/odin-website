import { useState } from "react";
import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const marketingTypes = [
  "Google Ads (Search, Display, Shopping)",
  "Facebook & Instagram Ads",
  "SEO (Search Engine Optimization)",
  "Email Marketing",
  "Content Marketing",
  "LinkedIn Ads",
  "Other Paid Advertising",
  "None - Just getting started"
];

export const Step7CurrentMarketing = () => {
  const { formData, updateFormData, nextStep } = useStrategySession();
  const [selected, setSelected] = useState<string[]>(formData.currentMarketing || []);

  const handleToggle = (type: string) => {
    setSelected(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleContinue = () => {
    updateFormData("currentMarketing", selected);
    nextStep();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          What types of marketing are you currently using?
        </h2>
        <p className="text-muted-foreground">
          (Select all that apply)
        </p>
      </div>

      <div className="space-y-3">
        {marketingTypes.map((type) => (
          <div
            key={type}
            onClick={() => handleToggle(type)}
            className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer hover:border-primary ${
              selected.includes(type) ? "border-primary bg-primary/5" : "border-border"
            }`}
          >
            <Checkbox
              checked={selected.includes(type)}
              onCheckedChange={() => handleToggle(type)}
              className="pointer-events-none"
            />
            <span className="text-lg">{type}</span>
          </div>
        ))}
      </div>

      <Button
        onClick={handleContinue}
        disabled={selected.length === 0}
        className="w-full py-6 text-lg font-semibold"
        size="lg"
      >
        Continue →
      </Button>
    </div>
  );
};
