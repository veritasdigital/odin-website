import { useState } from "react";
import { X, ArrowRight, ArrowLeft, CheckCircle, Target, Users, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

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

export const MarketingStrategyForm = ({ isOpen, onClose }: MarketingStrategyFormProps) => {
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
    currentChallenges: "",
  });

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMarketingChange = (method: string, checked: boolean) => {
    const current = formData.currentMarketing;
    if (checked) {
      updateFormData('currentMarketing', [...current, method]);
    } else {
      updateFormData('currentMarketing', current.filter(m => m !== method));
    }
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center md:justify-end">
      <div className="bg-white h-full w-full max-w-5xl animate-slide-in-right shadow-2xl mx-0 md:mx-0 my-0 md:my-4 rounded-none md:rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side - Copy & Proof */}
          <div className="w-full md:w-2/5 bg-gradient-hero text-white flex flex-col justify-center relative flex-shrink-0 md:min-h-full">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-10 md:left-2 text-white hover:text-primary transition-colors z-50 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-6 md:p-8 lg:p-16 space-y-4 md:space-y-8">
              <div className="decorative-circles">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Get Your FREE Marketing Strategy
                  </h2>
                  <p className="text-base md:text-lg opacity-90">
                    Our expert team will analyze your business and create a custom marketing roadmap designed to 10x your leads and revenue.
                  </p>
                </div>

                <div className="space-y-4 md:space-y-6">
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
                </div>

                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-sm font-medium">💡 This strategy session is completely FREE with no obligations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Multi-Step Form */}
          <div className="w-full md:w-3/5 flex flex-col overflow-hidden">
            <div className="p-4 md:p-8 overflow-y-auto flex-1">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Step {currentStep} of 3
                </span>
                <span className="text-sm text-primary font-medium">
                  {Math.round((currentStep / 3) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-muted h-2 rounded-full">
                <div 
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                />
              </div>
            </div>

            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-charcoal">Let's start with the basics</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => updateFormData('company', e.target.value)}
                    placeholder="Your Company LLC"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Business Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-charcoal">Tell us about your business</h3>
                
                <div>
                  <Label htmlFor="industry">Industry *</Label>
                  <Select onValueChange={(value) => updateFormData('industry', value)}>
                    <SelectTrigger>
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
                </div>

                <div>
                  <Label>Current Marketing Methods (select all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {['Google Ads', 'Facebook Ads', 'SEO', 'Email Marketing', 'Content Marketing', 'Referrals'].map((method) => (
                      <label key={method} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.currentMarketing.includes(method)}
                          onChange={(e) => handleMarketingChange(method, e.target.checked)}
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget">Monthly Marketing Budget *</Label>
                  <Select onValueChange={(value) => updateFormData('monthlyBudget', value)}>
                    <SelectTrigger>
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
                </div>
              </div>
            )}

            {/* Step 3: Goals & Challenges */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-charcoal">What are your goals?</h3>
                
                <div>
                  <Label htmlFor="primaryGoal">Primary Marketing Goal *</Label>
                  <Select onValueChange={(value) => updateFormData('primaryGoal', value)}>
                    <SelectTrigger>
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
                </div>

                <div>
                  <Label htmlFor="targetAudience">Target Audience *</Label>
                  <Textarea
                    id="targetAudience"
                    value={formData.targetAudience}
                    onChange={(e) => updateFormData('targetAudience', e.target.value)}
                    placeholder="Describe your ideal customers (age, location, interests, etc.)"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="challenges">Current Marketing Challenges</Label>
                  <Textarea
                    id="challenges"
                    value={formData.currentChallenges}
                    onChange={(e) => updateFormData('currentChallenges', e.target.value)}
                    placeholder="What marketing challenges are you currently facing?"
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 mt-8 pt-8 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center justify-center space-x-2 w-full md:w-auto"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>

              {currentStep < 3 ? (
                <Button
                  onClick={nextStep}
                  className="bg-gradient-primary text-white flex items-center justify-center space-x-2 w-full md:w-auto"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-primary text-white flex items-center justify-center space-x-2 w-full md:w-auto"
                >
                  <span>Get My Strategy</span>
                  <CheckCircle className="w-4 h-4" />
                </Button>
              )}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};