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
import OurIndustries from "./pages/OurIndustries";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import SkipToContent from "./components/SkipToContent";
import StrategySession from "./pages/StrategySession";
import Onboarding from "./pages/Onboarding";
import LeadMagnetBooking from "./pages/LeadMagnetBooking";
import TikTokForBusiness from "./pages/blog/TikTokForBusiness";
import GoogleAds from "./pages/services/GoogleAds";
import GoogleAdsManagement from "./pages/services/GoogleAdsManagement";
import GoogleAdsCanberra from "./pages/services/GoogleAdsCanberra";
import GoogleAdsAdelaide from "./pages/services/GoogleAdsAdelaide";
import GoogleAdsNewcastle from "./pages/services/GoogleAdsNewcastle";
import GoogleAdsBrisbane from "./pages/services/GoogleAdsBrisbane";
import SEO from "./pages/services/SEO";
import SocialMedia from "./pages/services/SocialMedia";
import SocialMediaAdvertising from "./pages/services/SocialMediaAdvertising";
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
import AccountingFirms from "./pages/industries/AccountingFirms";
import RealEstateAgents from "./pages/industries/RealEstateAgents";
import FertilityClinics from "./pages/industries/FertilityClinics";
import CosmeticClinics from "./pages/industries/CosmeticClinics";
import CosmeticDentists from "./pages/industries/CosmeticDentists";
import Orthodontists from "./pages/industries/Orthodontists";
import DentalImplants from "./pages/industries/DentalImplants";
import FamilyDentists from "./pages/industries/FamilyDentists";
import FamilyLawyers from "./pages/industries/FamilyLawyers";
import ConveyancingLawyers from "./pages/industries/ConveyancingLawyers";
import ImmigrationLawyers from "./pages/industries/ImmigrationLawyers";
import Ophthalmologists from "./pages/industries/Ophthalmologists";
import PersonalInjuryLawyers from "./pages/industries/PersonalInjuryLawyers";
import CriminalDefenseLawyers from "./pages/industries/CriminalDefenseLawyers";
import InsuranceAgents from "./pages/industries/InsuranceAgents";
import ArchitectureFirms from "./pages/industries/ArchitectureFirms";
import Plumbers from "./pages/industries/Plumbers";
import Electricians from "./pages/industries/Electricians";
import HVACContractors from "./pages/industries/HVACContractors";
import RoofingCompanies from "./pages/industries/RoofingCompanies";
import GoogleAdsSydney from "./pages/services/GoogleAdsSydney";
import GoogleAdsMelbourne from "./pages/services/GoogleAdsMelbourne";
import GoogleAdsPerth from "./pages/services/GoogleAdsPerth";
import GoogleAdsHobart from "./pages/services/GoogleAdsHobart";
import GoogleAdsGoldCoast from "./pages/services/GoogleAdsGoldCoast";
import GoldCoastSEO from "./pages/services/GoldCoastSEO";
import CanberraSEO from "./pages/services/CanberraSEO";
import NewcastleSEO from "./pages/services/NewcastleSEO";
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
import FacebookAdsHobart from "./pages/services/FacebookAdsHobart";
import FacebookAdsGoldCoast from "./pages/services/FacebookAdsGoldCoast";
import FacebookAdsCanberra from "./pages/services/FacebookAdsCanberra";
import FacebookAdsNewcastle from "./pages/services/FacebookAdsNewcastle";
import FacebookAdsDarwin from "./pages/services/FacebookAdsDarwin";
import FacebookAdsLaunceston from "./pages/services/FacebookAdsLaunceston";
import TikTokAdvertising from "./pages/services/TikTokAdvertising";
import YouTubeAdvertising from "./pages/services/YouTubeAdvertising";
import EmailMarketing from "./pages/services/EmailMarketing";
import EmailMarketingAgency from "./pages/services/EmailMarketingAgency";
import EcommerceAgency from "./pages/services/EcommerceAgency";
import WebDesignHobart from "./pages/services/WebDesignHobart";
import WebDesignGoldCoast from "./pages/services/WebDesignGoldCoast";
import WebDesignCanberra from "./pages/services/WebDesignCanberra";
import WebDesignNewcastle from "./pages/services/WebDesignNewcastle";
import SEONewcastle from "./pages/services/SEONewcastle";
import WhiteLabelSEO from "./pages/services/WhiteLabelSEO";
import OnlineMarketingCompanySydney from "./pages/services/OnlineMarketingCompanySydney";
import OnlineMarketingCompanyMelbourne from "./pages/services/OnlineMarketingCompanyMelbourne";
import OnlineMarketingCompanyAdelaide from "./pages/services/OnlineMarketingCompanyAdelaide";
import OnlineMarketingCompanyBrisbane from "./pages/services/OnlineMarketingCompanyBrisbane";
import OnlineMarketingCompanyPerth from "./pages/services/OnlineMarketingCompanyPerth";
import OnlineMarketingCompanyHobart from "./pages/services/OnlineMarketingCompanyHobart";
import OnlineMarketingCompanyGoldCoast from "./pages/services/OnlineMarketingCompanyGoldCoast";
import OnlineMarketingCompanyCanberra from "./pages/services/OnlineMarketingCompanyCanberra";
import OnlineMarketingCompanyDarwin from "./pages/services/OnlineMarketingCompanyDarwin";
import OnlineMarketingCompanyNewcastle from "./pages/services/OnlineMarketingCompanyNewcastle";
import OnlineMarketingCompanyLaunceston from "./pages/services/OnlineMarketingCompanyLaunceston";
import AISEOFutureProof from "./pages/blog/AISEOFutureProof";
import SEOChecklist2025 from "./pages/blog/SEOChecklist2025";
import LocalSEOTradies from "./pages/blog/LocalSEOTradies";
import AISEOGuide from "./pages/blog/AISEOGuide";
import LocalSEO2026 from "./pages/blog/LocalSEO2026";
import WillAIReplaceSEO from "./pages/blog/WillAIReplaceSEO";
import ContentMarketing from "./pages/blog/ContentMarketing";
import ContentMarketingMatrix from "./pages/blog/ContentMarketingMatrix";
import BeyondTheBoostPost from "./pages/blog/BeyondTheBoostPost";
import GoogleAdsGuide from "./pages/blog/GoogleAdsGuide";
import BlogPostSocialMedia from "./pages/blog/BlogPostSocialMedia";
import BlogPostEmailMarketing from "./pages/blog/BlogPostEmailMarketing";
import BlogPostAnalyticsCRO from "./pages/blog/BlogPostAnalyticsCRO";
import ConversionRateOptimisation from "./pages/blog/ConversionRateOptimisation";
import BlogPostWebDesign from "./pages/blog/BlogPostWebDesign";
import ShopifySEO from "./pages/blog/ShopifySEO";
import MarketingAutomation from "./pages/blog/MarketingAutomation";
import DigitalMarketingMistakes from "./pages/blog/DigitalMarketingMistakes";
import DigitalMarketingStrategy2026 from "./pages/blog/DigitalMarketingStrategy2026";
import DataPrivacy2026 from "./pages/blog/DataPrivacy2026";
import OurClients from "./pages/OurClients";
import DarwinSEO from "./pages/services/DarwinSEO";
import LauncestonSEO from "./pages/services/LauncestonSEO";
import BallaratSEO from "./pages/services/BallaratSEO";
import PPCManagement from "./pages/services/PPCManagement";
import PPCAgency from "./pages/services/PPCAgency";
import FacebookAdsBallarat from "./pages/services/FacebookAdsBallarat";
import WebDesignDarwin from "./pages/services/WebDesignDarwin";
import WebDesignLaunceston from "./pages/services/WebDesignLaunceston";
import WebDesignBallarat from "./pages/services/WebDesignBallarat";
import InfluencerAgency from "./pages/services/InfluencerAgency";
import PediatricDentists from "./pages/industries/PediatricDentists";
import LandscapingCompanies from "./pages/industries/LandscapingCompanies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SkipToContent />
        <MarketingFormProvider>
          <MarketingFormModal />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-clients" element={<OurClients />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<OurIndustries />} />
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
          <Route path="/seo-gold-coast" element={<GoldCoastSEO />} />
          <Route path="/seo-canberra" element={<CanberraSEO />} />
          <Route path="/seo-newcastle" element={<SEONewcastle />} />
          <Route path="/white-label-seo" element={<WhiteLabelSEO />} />
          <Route path="/online-marketing-company-sydney" element={<OnlineMarketingCompanySydney />} />
          <Route path="/online-marketing-company-melbourne" element={<OnlineMarketingCompanyMelbourne />} />
          <Route path="/online-marketing-company-adelaide" element={<OnlineMarketingCompanyAdelaide />} />
          <Route path="/online-marketing-company-brisbane" element={<OnlineMarketingCompanyBrisbane />} />
          <Route path="/online-marketing-company-perth" element={<OnlineMarketingCompanyPerth />} />
          <Route path="/online-marketing-company-hobart" element={<OnlineMarketingCompanyHobart />} />
          <Route path="/online-marketing-company-gold-coast" element={<OnlineMarketingCompanyGoldCoast />} />
          <Route path="/online-marketing-company-canberra" element={<OnlineMarketingCompanyCanberra />} />
          <Route path="/online-marketing-company-darwin" element={<OnlineMarketingCompanyDarwin />} />
          <Route path="/online-marketing-company-newcastle" element={<OnlineMarketingCompanyNewcastle />} />
          <Route path="/online-marketing-company-launceston" element={<OnlineMarketingCompanyLaunceston />} />
            <Route path="/google-ads-darwin" element={<GoogleAdsDarwin />} />
            <Route path="/google-ads-launceston" element={<GoogleAdsLaunceston />} />
            <Route path="/google-ads-ballarat" element={<GoogleAdsBallarat />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/social-media-advertising" element={<SocialMediaAdvertising />} />
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
            <Route path="/seo-darwin" element={<DarwinSEO />} />
          <Route path="/seo-launceston" element={<LauncestonSEO />} />
          <Route path="/seo-ballarat" element={<BallaratSEO />} />
            <Route path="/ppc-management" element={<PPCManagement />} />
            <Route path="/ppc-agency" element={<PPCAgency />} />
            <Route path="/industries/dermatologists" element={<Dermatologists />} />
            <Route path="/industries/dentists" element={<Dentists />} />
            <Route path="/industries/lawyers" element={<Lawyers />} />
          <Route path="/industries/cosmetic-surgeons" element={<CosmeticSurgeons />} />
          <Route path="/industries/plastic-surgeons" element={<PlasticSurgeons />} />
          <Route path="/industries/accounting-firms" element={<AccountingFirms />} />
          <Route path="/industries/real-estate-agents" element={<RealEstateAgents />} />
          <Route path="/industries/fertility-clinics" element={<FertilityClinics />} />
            <Route path="/industries/cosmetic-clinics" element={<CosmeticClinics />} />
          <Route path="/industries/cosmetic-dentists" element={<CosmeticDentists />} />
          <Route path="/industries/orthodontists" element={<Orthodontists />} />
          <Route path="/industries/dental-implants" element={<DentalImplants />} />
          <Route path="/industries/family-dentists" element={<FamilyDentists />} />
          <Route path="/industries/family-lawyers" element={<FamilyLawyers />} />
          <Route path="/industries/conveyancing-lawyers" element={<ConveyancingLawyers />} />
          <Route path="/industries/immigration-lawyers" element={<ImmigrationLawyers />} />
          <Route path="/industries/ophthalmologists" element={<Ophthalmologists />} />
            <Route path="/industries/personal-injury-lawyers" element={<PersonalInjuryLawyers />} />
            <Route path="/industries/criminal-defense-lawyers" element={<CriminalDefenseLawyers />} />
            <Route path="/industries/insurance-agents" element={<InsuranceAgents />} />
            <Route path="/industries/architecture-firms" element={<ArchitectureFirms />} />
            <Route path="/industries/plumbers" element={<Plumbers />} />
            <Route path="/industries/electricians" element={<Electricians />} />
            <Route path="/industries/hvac-contractors" element={<HVACContractors />} />
            <Route path="/industries/roofing-companies" element={<RoofingCompanies />} />
          <Route path="/industries/pediatric-dentists" element={<PediatricDentists />} />
          <Route path="/industries/landscaping-companies" element={<LandscapingCompanies />} />
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
          <Route path="/facebook-ads-hobart" element={<FacebookAdsHobart />} />
          <Route path="/facebook-ads-gold-coast" element={<FacebookAdsGoldCoast />} />
          <Route path="/facebook-ads-canberra" element={<FacebookAdsCanberra />} />
          <Route path="/facebook-ads-newcastle" element={<FacebookAdsNewcastle />} />
          <Route path="/facebook-ads-darwin" element={<FacebookAdsDarwin />} />
          <Route path="/facebook-ads-launceston" element={<FacebookAdsLaunceston />} />
          <Route path="/facebook-ads-ballarat" element={<FacebookAdsBallarat />} />
          <Route path="/web-design-darwin" element={<WebDesignDarwin />} />
          <Route path="/tiktok-advertising" element={<TikTokAdvertising />} />
          <Route path="/youtube-advertising" element={<YouTubeAdvertising />} />
          <Route path="/services/email-marketing" element={<EmailMarketing />} />
          <Route path="/email-marketing-agency" element={<EmailMarketingAgency />} />
          <Route path="/ecommerce-agency" element={<EcommerceAgency />} />
            <Route path="/web-design-hobart" element={<WebDesignHobart />} />
            <Route path="/web-design-gold-coast" element={<WebDesignGoldCoast />} />
            <Route path="/web-design-canberra" element={<WebDesignCanberra />} />
            <Route path="/web-design-newcastle" element={<WebDesignNewcastle />} />
            <Route path="/web-design-launceston" element={<WebDesignLaunceston />} />
            <Route path="/web-design-ballarat" element={<WebDesignBallarat />} />
            <Route path="/influencer-agency" element={<InfluencerAgency />} />
            <Route path="/services/facebook-ads" element={<FacebookAdvertising />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/ai-seo-future-proof-organic-strategy-2026" element={<AISEOFutureProof />} />
            <Route path="/blog/will-ai-replace-seo-a-data-backed-answer-for-worried-marketers" element={<WillAIReplaceSEO />} />
            <Route path="/blog/blog-post-content-marketing" element={<ContentMarketing />} />
            <Route path="/blog/the-content-marketing-matrix-how-to-create-content-that-actually-converts" element={<ContentMarketingMatrix />} />
            <Route path="/blog/beyond-the-boost-post-a-small-business-guide-to-strategic-paid-advertising" element={<BeyondTheBoostPost />} />
            <Route path="/blog/google-ads-guide" element={<GoogleAdsGuide />} />
            <Route path="/blog/blog-post-social-media" element={<BlogPostSocialMedia />} />
            <Route path="/blog/the-rise-of-tiktok-for-business-is-it-right-for-your-brand" element={<TikTokForBusiness />} />
            <Route path="/blog/blog-post-email-marketing" element={<BlogPostEmailMarketing />} />
            <Route path="/blog/blog-post-analytics-cro" element={<BlogPostAnalyticsCRO />} />
            <Route path="/blog/conversion-rate-optimisation-cro-secret-to-getting-more-from-existing-traffic" element={<ConversionRateOptimisation />} />
            <Route path="/blog/blog-post-web-design" element={<BlogPostWebDesign />} />
            <Route path="/blog/blog-post-ecommerce" element={<ShopifySEO />} />
            <Route path="/blog/marketing-automation-for-beginners" element={<MarketingAutomation />} />
            <Route path="/blog/the-5-most-common-digital-marketing-mistakes-small-businesses-make" element={<DigitalMarketingMistakes />} />
            <Route path="/blog/how-to-build-a-cohesive-digital-marketing-strategy-for-2026" element={<DigitalMarketingStrategy2026 />} />
            <Route path="/blog/data-privacy-in-2026-australian-businesses" element={<DataPrivacy2026 />} />
            <Route path="/blog/blog-post-seo-checklist" element={<SEOChecklist2025 />} />
            <Route path="/blog/blog-post-local-seo" element={<LocalSEOTradies />} />
          <Route path="/blog/how-ai-seo-works-a-non-technical-guide-for-business-leaders" element={<AISEOGuide />} />
          <Route path="/blog/local-seo-in-2026-complete-guide-to-dominating-your-local-market" element={<LocalSEO2026 />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/strategy-session" element={<StrategySession />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/lead-magnet-booking" element={<LeadMagnetBooking />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MarketingFormProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
