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
import GoogleAdsManagement from "./pages/services/GoogleAdsManagement";
import GoogleAdsCanberra from "./pages/services/GoogleAdsCanberra";
import GoogleAdsAdelaide from "./pages/services/GoogleAdsAdelaide";
import GoogleAdsNewcastle from "./pages/services/GoogleAdsNewcastle";
import GoogleAdsBrisbane from "./pages/services/GoogleAdsBrisbane";
import SEO from "./pages/services/SEO";
import SocialMedia from "./pages/services/SocialMedia";
import WebsiteDesign from "./pages/services/WebsiteDesign";
import FunnelDevelopment from "./pages/services/FunnelDevelopment";
import MarketingConsulting from "./pages/services/MarketingConsulting";
import BrisbaneSEO from "./pages/services/BrisbaneSEO";
import PerthSEO from "./pages/services/PerthSEO";
import SydneySEO from "./pages/services/SydneySEO";
import AdelaideSEO from "./pages/services/AdelaideSEO";
import HobartSEO from "./pages/services/HobartSEO";
import MelbourneSEO from "./pages/services/MelbourneSEO";
import SEOAgency from "./pages/services/SEOAgency";
import EcommerceSEO from "./pages/services/EcommerceSEO";
import LocalSEO from "./pages/services/LocalSEO";
import Dermatologists from "./pages/industries/Dermatologists";
import GoogleAdsSydney from "./pages/services/GoogleAdsSydney";

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
            <Route path="/google-ads-management" element={<GoogleAdsManagement />} />
            <Route path="/google-ads-canberra" element={<GoogleAdsCanberra />} />
            <Route path="/google-ads-adelaide" element={<GoogleAdsAdelaide />} />
            <Route path="/google-ads-newcastle" element={<GoogleAdsNewcastle />} />
            <Route path="/google-ads-brisbane" element={<GoogleAdsBrisbane />} />
            <Route path="/google-ads-sydney" element={<GoogleAdsSydney />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/seo-agency" element={<SEOAgency />} />
            <Route path="/ecommerce-seo" element={<EcommerceSEO />} />
            <Route path="/local-seo" element={<LocalSEO />} />
            <Route path="/services/social-media" element={<SocialMedia />} />
            <Route path="/services/website-design" element={<WebsiteDesign />} />
            <Route path="/services/funnel-development" element={<FunnelDevelopment />} />
            <Route path="/services/marketing-consulting" element={<MarketingConsulting />} />
            <Route path="/seo-brisbane" element={<BrisbaneSEO />} />
            <Route path="/seo-perth" element={<PerthSEO />} />
            <Route path="/seo-sydney" element={<SydneySEO />} />
            <Route path="/seo-adelaide" element={<AdelaideSEO />} />
            <Route path="/seo-hobart" element={<HobartSEO />} />
            <Route path="/seo-melbourne" element={<MelbourneSEO />} />
            <Route path="/industries/dermatologists" element={<Dermatologists />} />
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
