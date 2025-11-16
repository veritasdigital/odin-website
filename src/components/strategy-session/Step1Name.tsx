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
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
          Before we dive in, what should we call you?
        </h2>
        <p className="text-base text-muted-foreground">We'll personalize your experience</p>
      </div>
      <Input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="text-base h-auto py-3.5 px-4"
        onKeyDown={(e) => e.key === "Enter" && handleContinue()}
        autoFocus
      />
      <Button
        onClick={handleContinue}
        disabled={!name.trim()}
        className="w-full h-auto py-4 text-lg font-semibold"
        size="lg"
      >
        Continue →
      </Button>
    </div>
  );
};
