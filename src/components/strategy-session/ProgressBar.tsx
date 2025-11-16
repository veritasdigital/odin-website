import { useStrategySession } from "@/contexts/StrategySessionContext";

export const ProgressBar = () => {
  const { currentStep, totalSteps, progress } = useStrategySession();

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-foreground">{Math.round(progress)}%</span>
      </div>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
