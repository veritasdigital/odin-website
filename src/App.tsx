import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MarketingFormProvider } from "@/contexts/MarketingFormContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import GoogleAds from "./pages/services/GoogleAds";
import SEO from "./pages/services/SEO";
import SocialMedia from "./pages/services/SocialMedia";
import WebsiteDesign from "./pages/services/WebsiteDesign";
import FunnelDevelopment from "./pages/services/FunnelDevelopment";
import MarketingConsulting from "./pages/services/MarketingConsulting";
import BrisbaneSEO from "./pages/services/BrisbaneSEO";
import PerthSEO from "./pages/services/PerthSEO";
import SydneySEO from "./pages/services/SydneySEO";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MarketingFormProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/google-ads" element={<GoogleAds />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/social-media" element={<SocialMedia />} />
            <Route path="/services/website-design" element={<WebsiteDesign />} />
            <Route path="/services/funnel-development" element={<FunnelDevelopment />} />
            <Route path="/services/marketing-consulting" element={<MarketingConsulting />} />
            <Route path="/seo-brisbane" element={<BrisbaneSEO />} />
            <Route path="/seo-perth" element={<PerthSEO />} />
            <Route path="/seo-sydney" element={<SydneySEO />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/thank-you" element={<ThankYou />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </MarketingFormProvider>
  </QueryClientProvider>
);

export default App;
