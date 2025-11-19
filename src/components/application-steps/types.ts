export interface FormData {
  firstName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  challenge: string;
  timeline: string;
  businessType: string;
  investment: string;
  timezone: string;
}

export interface StepProps {
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  currentStep: number;
}
