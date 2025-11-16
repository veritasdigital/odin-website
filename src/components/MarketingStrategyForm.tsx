import { useState } from "react";
import { X, ArrowRight, ArrowLeft, CheckCircle, Target, Users, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
interface MarketingStrategyFormProps {
  isOpen: boolean;
  onClose: () => void;
}
interface FormData {
  // Step 1
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;

  // Step 2
  industry: string;
  currentMarketing: string[];
  monthlyBudget: string;

  // Step 3
  primaryGoal: string;
  targetAudience: string;
  currentChallenges: string;
}

// Validation schemas for each step
const step1Schema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[+]?[0-9]{1,4}[\s.-]?[(]?[0-9]{1,4}[)]?[\s.-]?[0-9]{3,4}[\s.-]?[0-9]{3,4}$/, "Please enter a valid phone number"),
  company: z.string().trim().min(1, "Company name is required").max(100, "Company name must be less than 100 characters")
});
const step2Schema = z.object({
  industry: z.string().min(1, "Please select an industry"),
  monthlyBudget: z.string().min(1, "Please select a budget range")
});
const step3Schema = z.object({
  primaryGoal: z.string().min(1, "Please select a primary goal"),
  targetAudience: z.string().trim().min(1, "Target audience is required").max(500, "Target audience description must be less than 500 characters"),
  currentChallenges: z.string().trim().max(1000, "Challenges description must be less than 1000 characters")
});
export const MarketingStrategyForm = ({
  isOpen,
  onClose
}: MarketingStrategyFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    currentMarketing: [],
    monthlyBudget: "",
    primaryGoal: "",
    targetAudience: "",
    currentChallenges: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleMarketingChange = (method: string, checked: boolean) => {
    const current = formData.currentMarketing;
    if (checked) {
      updateFormData('currentMarketing', [...current, method]);
    } else {
      updateFormData('currentMarketing', current.filter(m => m !== method));
    }
  };
  const validateStep = (step: number): boolean => {
    setErrors({});
    try {
      if (step === 1) {
        step1Schema.parse({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company
        });
      } else if (step === 2) {
        step2Schema.parse({
          industry: formData.industry,
          monthlyBudget: formData.monthlyBudget
        });
      } else if (step === 3) {
        step3Schema.parse({
          primaryGoal: formData.primaryGoal,
          targetAudience: formData.targetAudience,
          currentChallenges: formData.currentChallenges
        });
      }
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Please fix the errors before continuing");
      }
      return false;
    }
  };
  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };
  const prevStep = () => {
    setErrors({});
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };
  const handleSubmit = async () => {
    if (validateStep(3)) {
      try {
        const {
          error
        } = await supabase.from('form_submissions').insert([{
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          industry: formData.industry,
          current_marketing: formData.currentMarketing,
          monthly_budget: formData.monthlyBudget,
          primary_goal: formData.primaryGoal,
          target_audience: formData.targetAudience,
          current_challenges: formData.currentChallenges
        }]);
        if (error) throw error;
        toast.success("Thank you! We'll be in touch soon with your marketing strategy.");
        onClose();
      } catch (error: any) {
        console.error('Form submission error:', error);
        
        if (error.message?.includes('row-level security') || error.message?.includes('policy')) {
          toast.error('Unable to submit form. Please contact support at info@odindigital.com.au');
        } else if (error.message?.includes('network') || error.message?.includes('fetch')) {
          toast.error('Network error. Please check your connection and try again.');
        } else {
          toast.error('Submission failed. Please try again or contact support.');
        }
      }
    }
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-0 md:p-4 overflow-hidden">
      <button onClick={onClose} className="absolute top-3 left-3 bg-white/80 hover:bg-white text-foreground rounded-full p-2 shadow-card border border-border z-[60]" aria-label="Close form">
        <X className="w-5 h-5" />
      </button>
      <div className="bg-white h-screen w-full md:max-w-5xl animate-slide-in-right shadow-2xl rounded-none md:rounded-lg flex flex-col">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side - Copy & Proof */}
          <div className="w-full md:w-2/5 bg-gradient-hero text-white flex flex-col justify-center relative flex-shrink-0 max-h-full overflow-y-auto no-scrollbar">
            {/* Close button moved to overlay container */}
            
            <div className="p-6 md:p-8 space-y-4 md:space-y-6">
              <div className="decorative-circles">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-3">
                    Get Your FREE Marketing Strategy
                  </h2>
                  <p className="text-sm md:text-base opacity-90">
                    Our expert team will analyze your business and create a custom marketing roadmap designed to 10x your leads and revenue.
                  </p>
                </div>

                <div className="space-y-4 md:space-y-5">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Target className="w-6 h-6 text-primary-glow" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Targeted Strategy</h3>
                      <p className="text-sm opacity-80">Custom approach for your industry</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Users className="w-6 h-6 text-primary-glow" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Expert Analysis</h3>
                      <p className="text-sm opacity-80">From our award-winning team</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <TrendingUp className="w-6 h-6 text-primary-glow" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Proven Results</h3>
                      <p className="text-sm opacity-80">Based on 300+ successful campaigns</p>
                    </div>
                  </div>

                  <div className="bg-white/10 p-4 rounded-lg mt-6">
                    <p className="text-sm font-medium">💡 This strategy session is completely FREE with no obligations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Multi-Step Form */}
          <div className="w-full md:w-3/5 flex flex-col max-h-full">
            <div className="p-6 md:p-8 overflow-y-auto no-scrollbar flex-1 max-h-full">
              {/* Progress Bar */}
            <div className="mb-10 md:mb-12">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Step {currentStep} of 3
                </span>
                <span className="text-sm text-primary font-medium">
                  {Math.round(currentStep / 3 * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-muted h-2 rounded-full">
                <div className="bg-gradient-primary h-2 rounded-full transition-all duration-300" style={{
                  width: `${currentStep / 3 * 100}%`
                }} />
              </div>
            </div>

            {/* Step 1: Basic Information */}
            {currentStep === 1 && <div className="space-y-8">
                <h2 className="text-xl md:text-2xl font-bold text-charcoal">Let's start with the basics</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" value={formData.firstName} onChange={e => updateFormData('firstName', e.target.value)} placeholder="John" className={errors.firstName ? "border-red-500" : ""} />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" value={formData.lastName} onChange={e => updateFormData('lastName', e.target.value)} placeholder="Smith" className={errors.lastName ? "border-red-500" : ""} />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" value={formData.email} onChange={e => updateFormData('email', e.target.value)} placeholder="john@company.com" className={errors.email ? "border-red-500" : ""} />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" value={formData.phone} onChange={e => updateFormData('phone', e.target.value)} placeholder="+1 (555) 123-4567" className={errors.phone ? "border-red-500" : ""} />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Label htmlFor="company">Company Name *</Label>
                  <Input id="company" value={formData.company} onChange={e => updateFormData('company', e.target.value)} placeholder="Your Company LLC" className={errors.company ? "border-red-500" : ""} />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>
              </div>}

            {/* Step 2: Business Details */}
            {currentStep === 2 && <div className="space-y-8">
                <h2 className="text-xl md:text-2xl font-bold text-charcoal">Tell us about your business</h2>
                
                <div>
                  <Label htmlFor="industry">Industry *</Label>
                  <Select onValueChange={value => updateFormData('industry', value)} value={formData.industry}>
                    <SelectTrigger className={errors.industry ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="legal">Legal Services</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
                </div>

                <div>
                  <Label>Current Marketing Methods (select all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {['Google Ads', 'Facebook Ads', 'SEO', 'Email Marketing', 'Content Marketing', 'Referrals'].map(method => <label key={method} className="flex items-center space-x-2">
                        <input type="checkbox" checked={formData.currentMarketing.includes(method)} onChange={e => handleMarketingChange(method, e.target.checked)} className="rounded border-gray-300 text-primary focus:ring-primary" />
                        <span className="text-sm">{method}</span>
                      </label>)}
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget">Monthly Marketing Budget *</Label>
                  <Select onValueChange={value => updateFormData('monthlyBudget', value)} value={formData.monthlyBudget}>
                    <SelectTrigger className={errors.monthlyBudget ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-5k">Under $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-plus">$50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.monthlyBudget && <p className="text-red-500 text-sm mt-1">{errors.monthlyBudget}</p>}
                </div>
              </div>}

            {/* Step 3: Goals & Challenges */}
            {currentStep === 3 && <div className="space-y-8">
                <h2 className="text-xl md:text-2xl font-bold text-charcoal">What are your goals?</h2>
                
                <div>
                  <Label htmlFor="primaryGoal">Primary Marketing Goal *</Label>
                  <Select onValueChange={value => updateFormData('primaryGoal', value)} value={formData.primaryGoal}>
                    <SelectTrigger className={errors.primaryGoal ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select your primary goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="increase-leads">Increase Leads</SelectItem>
                      <SelectItem value="boost-sales">Boost Sales</SelectItem>
                      <SelectItem value="brand-awareness">Brand Awareness</SelectItem>
                      <SelectItem value="reduce-costs">Reduce Marketing Costs</SelectItem>
                      <SelectItem value="expand-market">Expand to New Markets</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.primaryGoal && <p className="text-red-500 text-sm mt-1">{errors.primaryGoal}</p>}
                </div>

                <div>
                  <Label htmlFor="targetAudience">Target Audience *</Label>
                  <Textarea id="targetAudience" value={formData.targetAudience} onChange={e => updateFormData('targetAudience', e.target.value)} placeholder="Describe your ideal customers (age, location, interests, etc.)" rows={3} className={errors.targetAudience ? "border-red-500" : ""} />
                  {errors.targetAudience && <p className="text-red-500 text-sm mt-1">{errors.targetAudience}</p>}
                </div>

                <div>
                  <Label htmlFor="challenges">Current Marketing Challenges</Label>
                  <Textarea id="challenges" value={formData.currentChallenges} onChange={e => updateFormData('currentChallenges', e.target.value)} placeholder="What marketing challenges are you currently facing?" rows={3} className={errors.currentChallenges ? "border-red-500" : ""} />
                  {errors.currentChallenges && <p className="text-red-500 text-sm mt-1">{errors.currentChallenges}</p>}
                </div>
              </div>}

             {/* Navigation Buttons */}
             <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 mt-10 pt-8 border-t border-gray-200">
               <div className="flex gap-3 w-full md:w-auto">
                 
                 <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="flex items-center justify-center space-x-2 w-full md:w-auto">
                   <ArrowLeft className="w-4 h-4" />
                   <span>Previous</span>
                 </Button>
               </div>

              {currentStep < 3 ? <Button onClick={nextStep} className="bg-gradient-primary text-white flex items-center justify-center space-x-2 w-full md:w-auto">
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </Button> : <Button onClick={handleSubmit} className="bg-gradient-primary text-white flex items-center justify-center space-x-2 w-full md:w-auto">
                  <span>Get My Strategy</span>
                  <CheckCircle className="w-4 h-4" />
                </Button>}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};