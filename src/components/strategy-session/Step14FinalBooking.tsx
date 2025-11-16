import { useState } from "react";
import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

export const Step14FinalBooking = () => {
  const { formData, updateFormData } = useStrategySession();
  const [phone, setPhone] = useState(formData.phone);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!phone.trim()) return;

    setIsSubmitting(true);
    updateFormData("phone", phone);

    try {
      const { error } = await supabase.from("strategy_session_submissions").insert({
        name: formData.name,
        email: formData.email,
        business_type: formData.businessType,
        current_marketing: formData.currentMarketing,
        marketing_budget: formData.marketingBudget,
        website_url: formData.websiteUrl,
        business_description: formData.businessDescription,
        current_revenue: formData.currentRevenue,
        target_revenue: formData.targetRevenue,
        biggest_obstacle: formData.biggestObstacle,
        timeline: formData.timeline,
        commitment_level: formData.commitmentLevel,
        phone: phone,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("Thank you! Your information has been submitted.");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting your information. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="space-y-8 animate-fade-in text-center">
        <div className="flex justify-center">
          <CheckCircle2 className="w-20 h-20 text-primary" />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Amazing! It looks like we can definitely help you.
          </h2>
          <p className="text-xl text-muted-foreground">
            The final step is to book a time for your free strategy session.
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-8">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/your-calendly-link"
            style={{ minWidth: "320px", height: "700px" }}
          />
          <p className="text-sm text-muted-foreground mt-4">
            Can't find a suitable time? Call us at 1300 ODIN AU or email strategy@odindigital.com.au
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Amazing! It looks like we can definitely help you.
        </h2>
        <p className="text-xl text-muted-foreground">
          The final step is to book a time for your free strategy session.
        </p>
      </div>
      <div className="space-y-4">
        <label className="text-lg font-medium text-foreground">
          What's the best phone number to reach you?
        </label>
        <Input
          type="tel"
          placeholder="+61 4XX XXX XXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="text-lg py-6"
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
      </div>
      <Button
        onClick={handleSubmit}
        disabled={!phone.trim() || isSubmitting}
        className="w-full py-6 text-lg"
        size="lg"
      >
        {isSubmitting ? "Submitting..." : "Book My Strategy Session"}
      </Button>
    </div>
  );
};
