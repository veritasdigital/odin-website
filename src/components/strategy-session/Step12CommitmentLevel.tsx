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
      <p className="text-muted-foreground">
        (1 = Just curious, 10 = Whatever it takes 🔥)
      </p>
      <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <button
            key={num}
            onClick={() => handleSelect(num)}
            className={`
              aspect-square rounded-lg border-2 text-xl font-bold
              transition-all duration-200 hover-scale
              ${num >= 8 
                ? 'border-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground' 
                : 'border-border hover:border-primary hover:bg-accent'
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
