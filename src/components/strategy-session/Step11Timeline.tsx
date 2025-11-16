import { useState } from "react";
import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const timelineOptions = [
  "Immediately",
  "Within 2 weeks",
  "2-4 weeks",
  "1-3 months",
  "Just researching"
];

export const Step11Timeline = () => {
  const { formData, updateFormData, nextStep } = useStrategySession();
  const [timeline, setTimeline] = useState(formData.timeline);

  const handleSelect = (value: string) => {
    setTimeline(value);
    updateFormData("timeline", value);
    nextStep();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        How soon do you want to get started?
      </h2>
      <div className="space-y-4">
        {timelineOptions.map((option) => (
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
