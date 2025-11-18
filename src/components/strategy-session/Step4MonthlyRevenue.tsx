import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Button } from "@/components/ui/button";

const revenueRanges = [
  "Under $25k",
  "$25k - $50k",
  "$50k - $100k",
  "$100k - $250k",
  "$250k - $500k",
  "$500k+"
];

export const Step4MonthlyRevenue = () => {
  const { formData, updateFormData, nextStep } = useStrategySession();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          To make sure we're a good fit, what's your approximate monthly revenue?
        </h2>
        <p className="text-muted-foreground">
          We're asking this so we only prescribe strategies that will have a meaningful impact on your business.
        </p>
      </div>

      <div className="grid gap-3">
        {revenueRanges.map((range) => (
          <Button
            key={range}
            onClick={() => {
              updateFormData("monthlyRevenue", range);
              nextStep();
            }}
            variant="outline"
            className={`p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-all duration-200 ${
              formData.monthlyRevenue === range ? "bg-primary text-primary-foreground" : ""
            }`}
          >
            <span className="text-lg">{range}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
