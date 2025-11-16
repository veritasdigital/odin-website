import { useState } from "react";
import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const Step10BiggestObstacle = () => {
  const { formData, updateFormData, nextStep } = useStrategySession();
  const [obstacle, setObstacle] = useState(formData.biggestObstacle);

  const handleContinue = () => {
    if (obstacle.trim().length >= 20) {
      updateFormData("biggestObstacle", obstacle);
      nextStep();
    }
  };

  const characterCount = obstacle.length;
  const isValid = characterCount >= 20;

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        What is the #1 biggest obstacle holding you back from reaching your revenue goals?
      </h2>
      <div className="space-y-2">
        <Textarea
          placeholder="Be specific - the more detail you provide, the better we can help"
          value={obstacle}
          onChange={(e) => setObstacle(e.target.value)}
          className="min-h-[150px] text-lg"
        />
        <p className="text-sm text-muted-foreground text-right">
          {characterCount} characters {!isValid && `(minimum 20 required)`}
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
