import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Button } from "@/components/ui/button";

const goals = [
  "Increase revenue and sales",
  "Generate more qualified leads",
  "Improve marketing ROI",
  "Scale existing campaigns",
  "Launch new products/services",
  "Other"
];

export const Step3BusinessGoal = () => {
  const { formData, updateFormData, nextStep } = useStrategySession();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Perfect. Now, what's your primary business goal right now?
        </h2>
        <p className="text-muted-foreground">
          (Select one)
        </p>
      </div>

      <div className="grid gap-3">
        {goals.map((goal) => (
          <Button
            key={goal}
            onClick={() => {
              updateFormData("businessGoal", goal);
              nextStep();
            }}
            variant="outline"
            className={`p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-all duration-200 ${
              formData.businessGoal === goal ? "bg-primary text-primary-foreground" : ""
            }`}
          >
            <span className="text-lg">{goal}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
