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

  const handleContinue = () => {
    updateFormData("timeline", timeline);
    nextStep();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        How soon are you looking to implement your growth strategy?
      </h2>
      <RadioGroup value={timeline} onValueChange={setTimeline} className="space-y-4">
        {timelineOptions.map((option) => (
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
        disabled={!timeline}
        className="w-full py-6 text-lg"
        size="lg"
      >
        Continue
      </Button>
    </div>
  );
};
