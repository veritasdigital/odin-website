import { useState } from "react";
import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const options = [
  "Facebook Ads",
  "Google Ads",
  "SEO",
  "Email Marketing",
  "Content Marketing",
  "Other",
  "None"
];

export const Step4CurrentMarketing = () => {
  const { formData, updateFormData, nextStep } = useStrategySession();
  const [selected, setSelected] = useState<string[]>(formData.currentMarketing);

  const handleToggle = (option: string) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleContinue = () => {
    updateFormData("currentMarketing", selected);
    nextStep();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        What marketing activities are you currently doing?
      </h2>
      <p className="text-base text-muted-foreground">(Select all that apply)</p>
      <div className="space-y-3">
        {options.map((option) => (
          <div
            key={option}
            className="flex items-center space-x-3 p-4 rounded-lg bg-[#f9fafb] border-2 border-[#e5e7eb] hover:border-primary hover:bg-primary/5 cursor-pointer transition-all"
            onClick={() => handleToggle(option)}
          >
            <Checkbox
              checked={selected.includes(option)}
              onCheckedChange={() => handleToggle(option)}
            />
            <label className="text-base cursor-pointer flex-1">{option}</label>
          </div>
        ))}
      </div>
      <Button
        onClick={handleContinue}
        disabled={selected.length === 0}
        className="w-full h-auto py-4 text-lg"
        size="lg"
      >
        Continue
      </Button>
    </div>
  );
};
