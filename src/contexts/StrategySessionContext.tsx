import { createContext, useContext, useState, ReactNode } from "react";

interface FormData {
  name: string;
  email: string;
  businessType: "products" | "services" | "";
  currentMarketing: string[];
  marketingBudget: string;
  websiteUrl: string;
  businessDescription: string;
  currentRevenue: string;
  targetRevenue: string;
  biggestObstacle: string;
  timeline: string;
  commitmentLevel: number;
  phone: string;
}

interface StrategySessionContextType {
  currentStep: number;
  formData: FormData;
  setCurrentStep: (step: number) => void;
  updateFormData: (field: keyof FormData, value: any) => void;
  nextStep: () => void;
  prevStep: () => void;
  totalSteps: number;
  progress: number;
}

const StrategySessionContext = createContext<StrategySessionContextType | undefined>(undefined);

export const StrategySessionProvider = ({ children }: { children: ReactNode }) => {
  const totalSteps = 13;
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    businessType: "",
    currentMarketing: [],
    marketingBudget: "",
    websiteUrl: "",
    businessDescription: "",
    currentRevenue: "",
    targetRevenue: "",
    biggestObstacle: "",
    timeline: "",
    commitmentLevel: 0,
    phone: "",
  });

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <StrategySessionContext.Provider
      value={{
        currentStep,
        formData,
        setCurrentStep,
        updateFormData,
        nextStep,
        prevStep,
        totalSteps,
        progress,
      }}
    >
      {children}
    </StrategySessionContext.Provider>
  );
};

export const useStrategySession = () => {
  const context = useContext(StrategySessionContext);
  if (!context) {
    throw new Error("useStrategySession must be used within StrategySessionProvider");
  }
  return context;
};
