import { FormData } from "@/components/application-steps/types";

export const validateStep = (step: number, formData: FormData): boolean => {
  switch (step) {
    case 1:
      return (formData.firstName || "").trim().length > 0;
    case 2:
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email || "");
    case 3:
      const phoneDigits = (formData.phone || "").replace(/\D/g, '');
      return phoneDigits.length >= 9 && phoneDigits.length <= 12;
    case 4:
      return (formData.company || "").trim().length > 0;
    case 5:
      return true; // Website is optional
    case 6:
      return (formData.challenge || "").trim().length > 0;
    case 7:
      return (formData.timeline || "").length > 0;
    case 8:
      return (formData.businessType || "").length > 0;
    case 9:
      return (formData.investment || "").length > 0;
    default:
      return false;
  }
};

export const getFormattedTimezone = (): string => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const now = new Date();
  const offset = -now.getTimezoneOffset();
  const hours = Math.floor(Math.abs(offset) / 60);
  const minutes = Math.abs(offset) % 60;
  const sign = offset >= 0 ? '+' : '-';
  const formattedOffset = `${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  return `(GMT${formattedOffset}) ${timezone}`;
};
