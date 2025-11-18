import { useState } from "react";
import { useStrategySession } from "@/contexts/StrategySessionContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const Step9FinalBooking = () => {
  const { formData, updateFormData } = useStrategySession();
  const [phone, setPhone] = useState(formData.phone || "");
  const [commitment, setCommitment] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!phone.trim() || commitment !== "yes") {
      toast({
        title: "Please complete all fields",
        description: "We need your phone number and commitment to proceed.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to Supabase
      const { error } = await supabase
        .from('strategy_session_submissions')
        .insert({
          name: formData.name || '',
          email: formData.email || '',
          business_type: formData.businessGoal || '',
          current_marketing: formData.currentMarketing || [],
          marketing_budget: formData.monthlyRevenue || '',
          website_url: formData.websiteUrl || '',
          business_description: formData.biggestChallenge || '',
          current_revenue: formData.monthlyRevenue || '',
          target_revenue: formData.monthlyRevenue || '',
          biggest_obstacle: formData.biggestChallenge || '',
          timeline: formData.timeline || '',
          commitment_level: 10,
          phone: phone
        });

      if (error) throw error;

      // Send to webhook
      await fetch('https://hook.us2.make.com/hgj85s23mw1xz7a2rmxcmqunp8bkgvlh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          businessGoal: formData.businessGoal,
          monthlyRevenue: formData.monthlyRevenue,
          websiteUrl: formData.websiteUrl,
          biggestChallenge: formData.biggestChallenge,
          currentMarketing: formData.currentMarketing,
          timeline: formData.timeline,
          phone: phone,
          commitment: "Yes, I'll be there!",
          timestamp: new Date().toISOString()
        }),
      });

      // Redirect to calendar
      window.location.href = '/ads-calendar';
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <div className="text-center mb-6 p-6 bg-primary/10 rounded-xl border border-primary/30">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Awesome! We can DEFINITELY help you.
          </h2>
          <p className="text-muted-foreground">
            Just one last thing...
          </p>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-foreground">
          What's the best phone number to reach you at?
        </h3>
        <p className="text-muted-foreground">
          We'll use this to send you a confirmation and to call you for your strategy session.
        </p>
      </div>

      <div className="space-y-6">
        <Input
          type="tel"
          placeholder="+1 (555) 123-4567"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="text-lg p-6"
          autoFocus
        />

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground">
            Do you promise to show up for your scheduled session?
          </h3>
          <p className="text-sm text-muted-foreground">
            We're giving you $1,000 worth of strategy for free, so we just want to make sure you're serious about growth.
          </p>

          <div className="grid gap-3">
            <Button
              onClick={() => setCommitment("no")}
              variant="outline"
              className={`p-6 h-auto text-left justify-start transition-all duration-200 ${
                commitment === "no" ? "border-destructive text-destructive" : "hover:border-border"
              }`}
            >
              <span className="text-lg">👎 No, I might flake</span>
            </Button>

            <Button
              onClick={() => setCommitment("yes")}
              variant="outline"
              className={`p-6 h-auto text-left justify-start transition-all duration-200 ${
                commitment === "yes" ? "bg-primary text-primary-foreground border-primary" : "hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              <span className="text-lg">👍 Yes, I'll be there!</span>
            </Button>
          </div>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!phone.trim() || commitment !== "yes" || isSubmitting}
          className="w-full py-7 text-xl font-bold"
          size="lg"
        >
          {isSubmitting ? "Booking..." : "Book My Strategy Session Now →"}
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          By clicking this button, you'll be taken to our calendar to select your preferred date and time. We respect your privacy and will never spam you.
        </p>
      </div>
    </div>
  );
};
