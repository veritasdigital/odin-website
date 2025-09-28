import { useMarketingForm } from "@/contexts/MarketingFormContext";
import { MarketingStrategyForm } from "./MarketingStrategyForm";

export const MarketingFormModal = () => {
  const { isFormOpen, closeForm } = useMarketingForm();

  return <MarketingStrategyForm isOpen={isFormOpen} onClose={closeForm} />;
};