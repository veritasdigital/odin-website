import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Card } from "@/components/ui/card";
import { Package, Briefcase } from "lucide-react";

export const Step3BusinessType = () => {
  const { updateFormData, nextStep } = useStrategySession();

  const handleSelect = (type: "products" | "services") => {
    updateFormData("businessType", type);
    nextStep();
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-3">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          Got it. So, what do you sell?
        </h2>
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
