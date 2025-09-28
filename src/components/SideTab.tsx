import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { MarketingStrategyForm } from "./MarketingStrategyForm";

export const SideTab = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-primary text-white px-4 py-8 rounded-l-lg shadow-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <MessageSquare className="w-5 h-5 mb-2 mx-auto" />
          <span className="font-bold text-sm tracking-wider">
            FREE MARKETING STRATEGY
          </span>
        </button>
      </div>
      
      <MarketingStrategyForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};