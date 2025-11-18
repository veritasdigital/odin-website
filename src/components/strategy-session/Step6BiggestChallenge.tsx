import { useState } from "react";
import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const Step6BiggestChallenge = () => {
  const { formData, updateFormData, nextStep } = useStrategySession();
  const [challenge, setChallenge] = useState(formData.biggestChallenge || "");

  const handleContinue = () => {
    updateFormData("biggestChallenge", challenge);
    nextStep();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Almost done! What's the #1 biggest challenge or obstacle holding you back from hitting your revenue goals right now?
        </h2>
        <p className="text-muted-foreground">
          Be as specific as you can—this helps us prepare the most valuable strategy for your session.
        </p>
      </div>

      <div className="space-y-4">
        <Textarea
          placeholder="Tell us about your biggest challenge..."
          value={challenge}
          onChange={(e) => setChallenge(e.target.value)}
          className="min-h-[150px] text-lg p-4"
          autoFocus
        />

        <Button
          onClick={handleContinue}
          disabled={!challenge.trim()}
          className="w-full py-6 text-lg font-semibold"
          size="lg"
        >
          Continue →
        </Button>
      </div>
    </div>
  );
};
