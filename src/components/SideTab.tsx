import { MessageSquare } from "lucide-react";
import { useMarketingForm } from "@/contexts/MarketingFormContext";

export const SideTab = () => {
  const { openForm } = useMarketingForm();

  return (
    <>
    {/* Desktop positioning */}
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:block">
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

    {/* Mobile positioning - bottom of screen */}
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <button
        onClick={openForm}
        className="bg-gradient-primary text-white px-8 py-4 rounded-full shadow-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-pulse-glow flex items-center space-x-3 text-center"
      >
        <MessageSquare className="w-5 h-5" />
        <div className="font-bold text-sm tracking-wider">
          FREE MARKETING STRATEGY
        </div>
      </button>
    </div>
    </>
  );
};