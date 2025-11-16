import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Card } from "@/components/ui/card";
import { Package, Briefcase } from "lucide-react";

export const Step3BusinessType = () => {
  const { updateFormData, nextStep } = useStrategySession();

  const handleSelect = (type: "products" | "services") => {
    updateFormData("businessType", type);
    setTimeout(nextStep, 300);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
          What does your business sell?
        </h2>
        <p className="text-base text-muted-foreground">Help us understand your business model</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          className="p-8 cursor-pointer bg-[#f9fafb] border-2 border-[#e5e7eb] hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
          onClick={() => handleSelect("products")}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Package className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Products</h3>
            <p className="text-sm text-muted-foreground">Physical or digital products</p>
          </div>
        </Card>
        <Card
          className="p-8 cursor-pointer bg-[#f9fafb] border-2 border-[#e5e7eb] hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
          onClick={() => handleSelect("services")}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Services</h3>
            <p className="text-sm text-muted-foreground">Professional services</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
