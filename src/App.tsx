import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MarketingFormProvider } from "@/contexts/MarketingFormContext";
import { MarketingFormModal } from "@/components/MarketingFormModal";
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
import Dentists from "./pages/industries/Dentists";
import Lawyers from "./pages/industries/Lawyers";
import CosmeticSurgeons from "./pages/industries/CosmeticSurgeons";
import PlasticSurgeons from "./pages/industries/PlasticSurgeons";
import GoogleAdsSydney from "./pages/services/GoogleAdsSydney";
import GoogleAdsMelbourne from "./pages/services/GoogleAdsMelbourne";
import GoogleAdsPerth from "./pages/services/GoogleAdsPerth";
import GoogleAdsHobart from "./pages/services/GoogleAdsHobart";
import GoogleAdsGoldCoast from "./pages/services/GoogleAdsGoldCoast";
import GoogleAdsDarwin from "./pages/services/GoogleAdsDarwin";
import GoogleAdsLaunceston from "./pages/services/GoogleAdsLaunceston";
import GoogleAdsBallarat from "./pages/services/GoogleAdsBallarat";
import FacebookAdvertising from "./pages/services/FacebookAdvertising";
import InstagramAdvertising from "./pages/services/InstagramAdvertising";
import SocialMediaAdvertisingAdelaide from "./pages/services/SocialMediaAdvertisingAdelaide";
import SocialMediaAdvertisingBrisbane from "./pages/services/SocialMediaAdvertisingBrisbane";
import SocialMediaAdvertisingSydney from "./pages/services/SocialMediaAdvertisingSydney";
import SocialMediaAdvertisingMelbourne from "./pages/services/SocialMediaAdvertisingMelbourne";
import LinkedInAdvertising from "./pages/services/LinkedInAdvertising";
import WebsiteDesignAndDevelopment from "./pages/services/WebsiteDesignAndDevelopment";
import WebDesignAdelaide from "./pages/services/WebDesignAdelaide";
import WebDesignBrisbane from "./pages/services/WebDesignBrisbane";
import WebDesignSydney from "./pages/services/WebDesignSydney";
import WebDesignMelbourne from "./pages/services/WebDesignMelbourne";
import WebDesignPerth from "./pages/services/WebDesignPerth";
import FacebookAdsAdelaide from "./pages/services/FacebookAdsAdelaide";
import FacebookAdsBrisbane from "./pages/services/FacebookAdsBrisbane";
import FacebookAdsSydney from "./pages/services/FacebookAdsSydney";
import FacebookAdsMelbourne from "./pages/services/FacebookAdsMelbourne";
import FacebookAdsPerth from "./pages/services/FacebookAdsPerth";
import EmailMarketing from "./pages/services/EmailMarketing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MarketingFormProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <MarketingFormModal />
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
            <Route path="/google-ads-melbourne" element={<GoogleAdsMelbourne />} />
            <Route path="/google-ads-perth" element={<GoogleAdsPerth />} />
            <Route path="/google-ads-hobart" element={<GoogleAdsHobart />} />
            <Route path="/google-ads-gold-coast" element={<GoogleAdsGoldCoast />} />
            <Route path="/google-ads-darwin" element={<GoogleAdsDarwin />} />
            <Route path="/google-ads-launceston" element={<GoogleAdsLaunceston />} />
            <Route path="/google-ads-ballarat" element={<GoogleAdsBallarat />} />
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
            <Route path="/industries/dentists" element={<Dentists />} />
            <Route path="/industries/lawyers" element={<Lawyers />} />
          <Route path="/industries/cosmetic-surgeons" element={<CosmeticSurgeons />} />
          <Route path="/industries/plastic-surgeons" element={<PlasticSurgeons />} />
            <Route path="/facebook-advertising" element={<FacebookAdvertising />} />
            <Route path="/instagram-advertising" element={<InstagramAdvertising />} />
            <Route path="/social-media-advertising-adelaide" element={<SocialMediaAdvertisingAdelaide />} />
            <Route path="/social-media-advertising-brisbane" element={<SocialMediaAdvertisingBrisbane />} />
            <Route path="/social-media-advertising-sydney" element={<SocialMediaAdvertisingSydney />} />
            <Route path="/social-media-advertising-melbourne" element={<SocialMediaAdvertisingMelbourne />} />
            <Route path="/linkedin-advertising" element={<LinkedInAdvertising />} />
            <Route path="/website-design-and-development" element={<WebsiteDesignAndDevelopment />} />
            <Route path="/web-design-adelaide" element={<WebDesignAdelaide />} />
            <Route path="/web-design-brisbane" element={<WebDesignBrisbane />} />
            <Route path="/web-design-sydney" element={<WebDesignSydney />} />
            <Route path="/web-design-melbourne" element={<WebDesignMelbourne />} />
            <Route path="/web-design-perth" element={<WebDesignPerth />} />
            <Route path="/facebook-ads-adelaide" element={<FacebookAdsAdelaide />} />
            <Route path="/facebook-ads-brisbane" element={<FacebookAdsBrisbane />} />
            <Route path="/facebook-ads-sydney" element={<FacebookAdsSydney />} />
          <Route path="/facebook-ads-melbourne" element={<FacebookAdsMelbourne />} />
          <Route path="/facebook-ads-perth" element={<FacebookAdsPerth />} />
            <Route path="/services/email-marketing" element={<EmailMarketing />} />
            <Route path="/services/facebook-ads" element={<FacebookAdvertising />} />
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
