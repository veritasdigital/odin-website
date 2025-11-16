import { useState } from "react";
import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Step1Name = () => {
  const { formData, updateFormData, nextStep } = useStrategySession();
  const [name, setName] = useState(formData.name);

  const handleContinue = () => {
    if (name.trim()) {
      updateFormData("name", name);
      nextStep();
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        Before we dive in, what should we call you?
      </h2>
      <Input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="text-lg py-6"
        onKeyDown={(e) => e.key === "Enter" && handleContinue()}
      />
      <Button
        onClick={handleContinue}
        disabled={!name.trim()}
        className="w-full py-6 text-lg"
        size="lg"
      >
        Continue
      </Button>
    </div>
  );
};
