import { useState } from "react";
import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Step6WebsiteUrl = () => {
  const { formData, updateFormData, nextStep } = useStrategySession();
  const [url, setUrl] = useState(formData.websiteUrl);

  const handleContinue = () => {
    if (url.trim()) {
      updateFormData("websiteUrl", url);
      nextStep();
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        What's your company's website URL?
      </h2>
      <p className="text-sm text-muted-foreground">
        If you don't have a website yet, type 'N/A'
      </p>
      <Input
        type="text"
        placeholder="https://yourcompany.com.au"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="text-base h-auto py-3.5 px-4"
        onKeyDown={(e) => e.key === "Enter" && handleContinue()}
      />
      <Button
        onClick={handleContinue}
        disabled={!url.trim()}
        className="w-full h-auto py-4 text-lg"
        size="lg"
      >
        Continue
      </Button>
    </div>
  );
};
