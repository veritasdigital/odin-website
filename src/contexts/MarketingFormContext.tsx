import { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();

  const openForm = () => {
    // If not on contact page, navigate there
    if (location.pathname !== "/contact") {
      navigate("/contact");
      // Wait for navigation and then scroll
      setTimeout(() => {
        const formElement = document.getElementById("contact-form");
        if (formElement) {
          formElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    } else {
      // Already on contact page, just scroll
      const formElement = document.getElementById("contact-form");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };
  
  const closeForm = () => setIsFormOpen(false);

  return (
    <MarketingFormContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </MarketingFormContext.Provider>
  );
};