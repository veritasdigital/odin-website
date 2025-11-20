import { createContext, useContext, useState, ReactNode } from "react";

interface MarketingFormContextType {
  isFormOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const MarketingFormContext = createContext<MarketingFormContextType | undefined>(undefined);

export const useMarketingForm = () => {
  const context = useContext(MarketingFormContext);
  if (!context) {
    throw new Error("useMarketingForm must be used within a MarketingFormProvider");
  }
  return context;
};

interface MarketingFormProviderProps {
  children: ReactNode;
}

export const MarketingFormProvider = ({ children }: MarketingFormProviderProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };
  
  const closeForm = () => setIsFormOpen(false);

  return (
    <MarketingFormContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </MarketingFormContext.Provider>
  );
};