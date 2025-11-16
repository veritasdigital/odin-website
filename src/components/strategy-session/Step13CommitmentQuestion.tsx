import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Card } from "@/components/ui/card";
import { ThumbsUp, X } from "lucide-react";

export const Step13CommitmentQuestion = () => {
  const { nextStep } = useStrategySession();
  const [showNoMessage, setShowNoMessage] = useState(false);

  const handleYes = () => {
    nextStep();
  };

  const handleNo = () => {
    setShowNoMessage(true);
  };

  if (showNoMessage) {
    return (
      <div className="space-y-6 animate-fade-in text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          No problem! We understand.
        </h2>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Feel free to come back when you're ready to commit to growing your business. We'll be here!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Last question, and it's an important one...
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We dedicate significant time to prepare for these strategy sessions. If you book a call, can we trust you to show up on time?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <Card
          className="p-8 cursor-pointer bg-[#f9fafb] border-2 border-[#e5e7eb] hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
          onClick={handleYes}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <ThumbsUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Yes, I'll be there! 👍</h3>
            <p className="text-sm text-muted-foreground">I'm committed to growing my business</p>
          </div>
        </Card>
        <Card
          className="p-8 cursor-pointer bg-[#f9fafb] border-2 border-[#e5e7eb] hover:border-destructive hover:bg-destructive/5 transition-all duration-200 group"
          onClick={handleNo}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
              <X className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-xl font-bold">No, I can't commit right now</h3>
            <p className="text-sm text-muted-foreground">I need more time to think</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

import { useState } from "react";
