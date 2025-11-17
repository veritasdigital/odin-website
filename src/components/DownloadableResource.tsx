import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download, FileText, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface DownloadableResourceProps {
  title: string;
  description: string;
  resourceType: string;
  icon?: React.ReactNode;
  className?: string;
}

export const DownloadableResource = ({ 
  title, 
  description, 
  resourceType,
  icon,
  className = "" 
}: DownloadableResourceProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate download trigger
    setTimeout(() => {
      setIsSubmitted(true);
      toast.success("Download started! Check your email for the resource.");
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setEmail("");
        setName("");
      }, 3000);
    }, 500);
  };

  return (
    <>
      <Card 
        className={`p-6 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-background to-muted/30 ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            {icon || <FileText className="h-6 w-6 text-primary" />}
          </div>
          <div className="flex-1">
            <div className="text-xs font-semibold text-primary mb-1 uppercase tracking-wide">
              {resourceType}
            </div>
            <h3 className="text-lg font-bold mb-2 text-charcoal">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {description}
            </p>
            <div className="flex items-center text-primary font-semibold group">
              <Download className="h-4 w-4 mr-2" />
              Download Now
            </div>
          </div>
        </div>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          {!isSubmitted ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">Download {resourceType}</DialogTitle>
                <DialogDescription className="text-base">
                  Enter your details to receive <strong>{title}</strong> instantly in your inbox.
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-11 whitespace-normal break-words py-3 px-6"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Get Free {resourceType}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Success!</h3>
              <p className="text-muted-foreground">
                Check your email for the download link.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
