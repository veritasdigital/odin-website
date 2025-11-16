import { useState } from "react";
import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const Step7BusinessDescription = () => {
  const { formData, updateFormData, nextStep } = useStrategySession();
  const [description, setDescription] = useState(formData.businessDescription);

  const handleContinue = () => {
    if (description.trim().length >= 50) {
      updateFormData("businessDescription", description);
      nextStep();
    }
  };

  const characterCount = description.length;
  const isValid = characterCount >= 50;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-3">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Tell us about your business
        </h2>
        <p className="text-base text-muted-foreground">
          What do you sell, who buys from you, and what are your price points?
        </p>
      </div>
      <div className="space-y-2">
        <Textarea
          placeholder="Tell us about your business..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="min-h-[150px] text-lg"
        />
        <p className="text-sm text-muted-foreground text-right">
          {characterCount} characters {!isValid && `(minimum 50 required)`}
        </p>
      </div>
      <Button
        onClick={handleContinue}
        disabled={!isValid}
        className="w-full py-6 text-lg"
        size="lg"
      >
        Continue
      </Button>
    </div>
  );
};
