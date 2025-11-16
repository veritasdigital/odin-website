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
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        What does your business sell?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          className="p-8 cursor-pointer hover:border-primary hover:bg-accent transition-all duration-200 hover-scale"
          onClick={() => handleSelect("products")}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <Package className="w-16 h-16 text-primary" />
            <h3 className="text-2xl font-semibold">Products</h3>
          </div>
        </Card>
        <Card
          className="p-8 cursor-pointer hover:border-primary hover:bg-accent transition-all duration-200 hover-scale"
          onClick={() => handleSelect("services")}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <Briefcase className="w-16 h-16 text-primary" />
            <h3 className="text-2xl font-semibold">Services</h3>
          </div>
        </Card>
      </div>
    </div>
  );
};
