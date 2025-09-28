import { MessageSquare } from "lucide-react";
import { useMarketingForm } from "@/contexts/MarketingFormContext";

export const SideTab = () => {
  const { openForm } = useMarketingForm();

  return (
    <>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={openForm}
          className="bg-gradient-primary text-white px-6 py-4 rounded-l-lg shadow-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-pulse-glow flex flex-col items-center text-center"
        >
          <MessageSquare className="w-5 h-5 mb-2" />
          <div className="font-bold text-sm tracking-wider leading-tight">
            <div>FREE</div>
            <div>MARKETING</div>
            <div>STRATEGY</div>
          </div>
        </button>
      </div>
    </>
  );
};