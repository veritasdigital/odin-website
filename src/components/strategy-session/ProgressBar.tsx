import { useStrategySession } from "@/contexts/StrategySessionContext";

export const ProgressBar = () => {
  const { currentStep, totalSteps, progress } = useStrategySession();

  return (
    <div className="w-full mb-10">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-semibold text-foreground">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-semibold text-primary">{Math.round(progress)}% Complete</span>
      </div>
      <div className="w-full h-3 bg-muted rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-700 ease-out shadow-lg"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
