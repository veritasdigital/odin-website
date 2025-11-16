import { useState } from "react";
import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Step2Email = () => {
  const { formData, updateFormData, nextStep } = useStrategySession();
  const [email, setEmail] = useState(formData.email);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleContinue = () => {
    if (isValidEmail(email)) {
      updateFormData("email", email);
      nextStep();
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        Great, {formData.name}! What's the best email address to send your growth strategy to?
      </h2>
      <Input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-lg py-6"
        onKeyDown={(e) => e.key === "Enter" && handleContinue()}
      />
      <Button
        onClick={handleContinue}
        disabled={!isValidEmail(email)}
        className="w-full py-6 text-lg"
        size="lg"
      >
        Continue
      </Button>
    </div>
  );
};
