import { useState } from "react";
import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Step5WebsiteUrl = () => {
  const { formData, updateFormData, nextStep } = useStrategySession();
  const [url, setUrl] = useState(formData.websiteUrl || "");

  const handleContinue = () => {
    updateFormData("websiteUrl", url);
    nextStep();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          What's your website URL?
        </h2>
        <p className="text-muted-foreground">
          (If you don't have one, just type "no website")
        </p>
      </div>

      <div className="space-y-4">
        <Input
          type="text"
          placeholder="https://yourwebsite.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="text-lg p-6"
          autoFocus
        />

        <Button
          onClick={handleContinue}
          disabled={!url.trim()}
          className="w-full py-6 text-lg font-semibold"
          size="lg"
        >
          Continue →
        </Button>
      </div>
    </div>
  );
};
