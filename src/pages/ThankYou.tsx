import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="rounded-full bg-green-50 p-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
        </div>
        
        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-charcoal">
            Thank You!
          </h1>
          <p className="text-xl text-charcoal/80 leading-relaxed">
            Your quote request has been successfully submitted.
          </p>
        </div>
        
        {/* Details Card */}
        <Card className="bg-white/80 backdrop-blur-lg border border-charcoal/10 shadow-lg text-left">
          <CardHeader>
            <CardTitle className="text-charcoal flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              What Happens Next?
            </CardTitle>
            <CardDescription className="text-charcoal/70">
              Our team will review your request and get back to you shortly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="font-semibold text-charcoal">Within 24 Hours</h3>
                <ul className="space-y-2 text-sm text-charcoal/70">
                  <li>• Initial review of your requirements</li>
                  <li>• Preliminary strategy assessment</li>
                  <li>• Contact via your preferred method</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-charcoal">Within 48 Hours</h3>
                <ul className="space-y-2 text-sm text-charcoal/70">
                  <li>• Detailed consultation call scheduled</li>
                  <li>• Custom strategy proposal</li>
                  <li>• Investment options presented</li>
                </ul>
              </div>
            </div>
            
            <div className="pt-4 border-t border-charcoal/10">
              <h3 className="font-semibold text-charcoal mb-3">Need Immediate Assistance?</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center gap-2 text-sm text-charcoal/70">
                  <Phone className="h-4 w-4" />
                  <span>1-800-ODIN-DIGITAL</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal/70">
                  <Mail className="h-4 w-4" />
                  <span>hello@odindigital.com</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" className="border-charcoal/20 text-charcoal hover:bg-charcoal/5">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild className="shadow-primary">
            <Link to="/#services">
              Explore Our Services
            </Link>
          </Button>
        </div>
        
        {/* Additional Message */}
        <div className="pt-8 border-t border-charcoal/10">
          <p className="text-sm text-charcoal/60">
            Your information is secure and will only be used to provide you with the requested quote and related communications.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default ThankYou;