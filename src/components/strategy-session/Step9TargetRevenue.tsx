import { useState } from "react";
import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Step9TargetRevenue = () => {
  const { formData, updateFormData, nextStep } = useStrategySession();
  const [target, setTarget] = useState(formData.targetRevenue);

  const handleContinue = () => {
    if (target.trim()) {
      updateFormData("targetRevenue", target);
      nextStep();
    }
  };

  const formatCurrency = (value: string) => {
    const numbers = value.replace(/[^\d]/g, "");
    if (!numbers) return "";
    return "$" + new Intl.NumberFormat().format(parseInt(numbers));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(formatCurrency(e.target.value));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        What is your target monthly revenue for the next 12 months?
      </h2>
      <Input
        type="text"
        placeholder="$100,000"
        value={target}
        onChange={handleChange}
        className="text-lg py-6"
        onKeyDown={(e) => e.key === "Enter" && handleContinue()}
      />
      <Button
        onClick={handleContinue}
        disabled={!target.trim()}
        className="w-full py-6 text-lg"
        size="lg"
      >
        Continue
      </Button>
    </div>
  );
};
