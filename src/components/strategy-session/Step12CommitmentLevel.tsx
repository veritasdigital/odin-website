import { useStrategySession } from "@/contexts/StrategySessionContext";

export const Step12CommitmentLevel = () => {
  const { updateFormData, nextStep } = useStrategySession();

  const handleSelect = (level: number) => {
    updateFormData("commitmentLevel", level);
    setTimeout(nextStep, 300);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        On a scale of 1-10, how committed are you to achieving your growth goals?
      </h2>
      <p className="text-base text-muted-foreground">
        (1 = Just curious, 10 = Whatever it takes 🔥)
      </p>
      <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <button
            key={num}
            onClick={() => handleSelect(num)}
            className={`
              aspect-square rounded-lg text-lg font-bold transition-all duration-200
              ${num >= 8 
                ? 'bg-[#f9fafb] border-2 border-primary text-primary hover:bg-primary hover:text-white' 
                : 'bg-[#f9fafb] border-2 border-[#e5e7eb] hover:border-primary hover:bg-primary/5'
              }
            `}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};
