import { useStrategySession } from "@/contexts/StrategySessionContext";

export const DotProgressIndicator = () => {
  const { currentStep, totalSteps } = useStrategySession();

  return (
    <div className="fixed top-8 left-0 right-0 flex justify-center items-center gap-2 z-50">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            index < currentStep
              ? "bg-primary"
              : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};
