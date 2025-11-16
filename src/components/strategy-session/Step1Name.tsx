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
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
          Before we dive in, what should we call you?
        </h2>
        <p className="text-muted-foreground">We'll personalize your experience</p>
      </div>
      <Input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="text-lg py-7 px-6 border-2 focus:border-primary transition-colors"
        onKeyDown={(e) => e.key === "Enter" && handleContinue()}
        autoFocus
      />
      <Button
        onClick={handleContinue}
        disabled={!name.trim()}
        className="w-full py-7 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
        size="lg"
      >
        Continue →
      </Button>
    </div>
  );
};
