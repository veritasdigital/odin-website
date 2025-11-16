import { useStrategySession } from "@/contexts/StrategySessionContext";

export const ProgressBar = () => {
  const { currentStep, totalSteps, progress } = useStrategySession();

  return (
    <div className="w-full mb-12">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-foreground">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-semibold text-primary">{Math.round(progress)}% Complete</span>
      </div>
      <div className="w-full h-2.5 bg-[#e5e7eb] rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
