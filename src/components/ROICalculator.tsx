import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, DollarSign, Target } from "lucide-react";

export const ROICalculator = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState<string>("");
  const [marketingBudget, setMarketingBudget] = useState<string>("");
  const [conversionRate, setConversionRate] = useState<string>("2");
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const revenue = parseFloat(monthlyRevenue) || 0;
    const budget = parseFloat(marketingBudget) || 0;
    const currentConversion = parseFloat(conversionRate) || 2;
    
    // Conservative estimates based on industry averages
    const improvedConversion = currentConversion * 1.5; // 50% improvement
    const additionalRevenue = revenue * 0.3; // 30% revenue increase
    const projectedROI = ((additionalRevenue - budget) / budget) * 100;

    return {
      currentRevenue: revenue.toLocaleString(),
      projectedRevenue: (revenue + additionalRevenue).toLocaleString(),
      additionalRevenue: additionalRevenue.toLocaleString(),
      roi: projectedROI.toFixed(0),
      improvedConversion: improvedConversion.toFixed(1),
      currentConversion: currentConversion.toFixed(1)
    };
  };

  const results = showResults ? calculateROI() : null;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="h-10 w-10 text-primary" />
            <h2 className="text-3xl md:text-4xl font-black">Marketing ROI Calculator</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how much revenue you could generate with professional digital marketing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="p-8 bg-background">
            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="revenue" className="text-base font-semibold">
                  Current Monthly Revenue ($)
                </Label>
                <Input
                  id="revenue"
                  type="number"
                  placeholder="50000"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(e.target.value)}
                  className="text-lg h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-base font-semibold">
                  Monthly Marketing Budget ($)
                </Label>
                <Input
                  id="budget"
                  type="number"
                  placeholder="5000"
                  value={marketingBudget}
                  onChange={(e) => setMarketingBudget(e.target.value)}
                  className="text-lg h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="conversion" className="text-base font-semibold">
                  Current Conversion Rate (%)
                </Label>
                <Input
                  id="conversion"
                  type="number"
                  step="0.1"
                  placeholder="2.0"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(e.target.value)}
                  className="text-lg h-12"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-lg font-semibold whitespace-normal break-words py-3 px-6"
              >
                Calculate Your Potential ROI
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                * Results are estimates based on industry averages and past client results
              </p>
            </form>
          </Card>

          {/* Results Display */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            {!showResults ? (
              <div className="text-center space-y-4">
                <TrendingUp className="h-16 w-16 text-primary mx-auto" />
                <p className="text-lg text-muted-foreground">
                  Enter your details to see your potential ROI
                </p>
              </div>
            ) : (
              <div className="space-y-6 w-full">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-6 text-charcoal">Your Projected Results</h3>
                </div>

                <div className="grid gap-4">
                  <div className="bg-background p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <p className="text-sm font-semibold text-muted-foreground">Additional Monthly Revenue</p>
                    </div>
                    <p className="text-3xl font-black text-primary">${results?.additionalRevenue}</p>
                  </div>

                  <div className="bg-background p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-5 w-5 text-primary" />
                      <p className="text-sm font-semibold text-muted-foreground">Projected ROI</p>
                    </div>
                    <p className="text-3xl font-black text-accent">{results?.roi}%</p>
                  </div>

                  <div className="bg-background p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <p className="text-sm font-semibold text-muted-foreground">Conversion Rate Improvement</p>
                    </div>
                    <p className="text-2xl font-black text-charcoal">
                      {results?.currentConversion}% → {results?.improvedConversion}%
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Ready to achieve these results?
                  </p>
                  <Button 
                    className="w-full whitespace-normal break-words py-3 px-6" 
                    asChild
                  >
                    <a href="/contact">Schedule Your Free Strategy Session</a>
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
