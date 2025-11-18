import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Button } from "@/components/ui/button";

const timelines = [
  "Immediately - I'm ready now",
  "Within the next 2 weeks",
  "2-4 weeks",
  "1-2 months",
  "Just exploring options"
];

export const Step8Timeline = () => {
  const { formData, updateFormData, nextStep } = useStrategySession();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          When are you looking to get started?
        </h2>
        <p className="text-muted-foreground">
          (Select one)
        </p>
      </div>

      <div className="grid gap-3">
        {timelines.map((timeline) => (
          <Button
            key={timeline}
            onClick={() => {
              updateFormData("timeline", timeline);
              nextStep();
            }}
            variant="outline"
            className={`p-6 h-auto text-left justify-start hover:bg-primary hover:text-primary-foreground transition-all duration-200 ${
              formData.timeline === timeline ? "bg-primary text-primary-foreground" : ""
            }`}
          >
            <span className="text-lg">{timeline}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
