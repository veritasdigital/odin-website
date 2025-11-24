import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MarketingFormProvider } from "@/contexts/MarketingFormContext";
import { MarketingFormModal } from "@/components/MarketingFormModal";
import { useRoutePrefetch } from "@/hooks/useRoutePrefetch";
import { RouteLoader } from "@/components/RouteLoader";
import SkipToContent from "@/components/SkipToContent";

// Configure React Query with optimized defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Internal component to trigger route prefetching
const AppContent = () => {
  useRoutePrefetch();
  return null;
};

// Lazy load all pages for optimal code splitting
const Index = lazy(() => import("@/pages/Index"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const About = lazy(() => import("@/pages/About"));
const OurEthos = lazy(() => import("@/pages/OurEthos"));
const OurClients = lazy(() => import("@/pages/OurClients"));
const Services = lazy(() => import("@/pages/Services"));
const OurIndustries = lazy(() => import("@/pages/OurIndustries"));
const Contact = lazy(() => import("@/pages/Contact"));
const StrategySession = lazy(() => import("@/pages/StrategySession"));
const Application = lazy(() => import("@/pages/Application"));
const OptIn = lazy(() => import("@/pages/OptIn"));
const FreeTrainings = lazy(() => import("@/pages/FreeTrainings"));
const ThankYou = lazy(() => import("@/pages/ThankYou"));
const FreeTrainingsThankYou = lazy(() => import("@/pages/FreeTrainingsThankYou"));
const AdsThankYou = lazy(() => import("@/pages/AdsThankYou"));
const T2AdsThankYou = lazy(() => import("@/pages/T2AdsThankYou"));
const LeadMagnetBooking = lazy(() => import("@/pages/LeadMagnetBooking"));
const AdsCalendar = lazy(() => import("@/pages/AdsCalendar"));
const YtCalendar = lazy(() => import("@/pages/YtCalendar"));
const T2AdsCalendar = lazy(() => import("@/pages/T2AdsCalendar"));
const Onboarding = lazy(() => import("@/pages/Onboarding"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));

// Blog pages
const Blog = lazy(() => import("@/pages/Blog"));
const TikTokForBusiness = lazy(() => import("@/pages/blog/TikTokForBusiness"));
const AISEOFutureProof = lazy(() => import("@/pages/blog/AISEOFutureProof"));
const SEOChecklist2025 = lazy(() => import("@/pages/blog/SEOChecklist2025"));
const LocalSEOTradies = lazy(() => import("@/pages/blog/LocalSEOTradies"));
const AISEOGuide = lazy(() => import("@/pages/blog/AISEOGuide"));
const LocalSEO2026 = lazy(() => import("@/pages/blog/LocalSEO2026"));
const WillAIReplaceSEO = lazy(() => import("@/pages/blog/WillAIReplaceSEO"));
const ContentMarketing = lazy(() => import("@/pages/blog/ContentMarketing"));
const ContentMarketingMatrix = lazy(() => import("@/pages/blog/ContentMarketingMatrix"));
const BeyondTheBoostPost = lazy(() => import("@/pages/blog/BeyondTheBoostPost"));
const GoogleAdsGuide = lazy(() => import("@/pages/blog/GoogleAdsGuide"));
const BlogPostSocialMedia = lazy(() => import("@/pages/blog/BlogPostSocialMedia"));
const BlogPostEmailMarketing = lazy(() => import("@/pages/blog/BlogPostEmailMarketing"));
const BlogPostAnalyticsCRO = lazy(() => import("@/pages/blog/BlogPostAnalyticsCRO"));
const ConversionRateOptimisation = lazy(() => import("@/pages/blog/ConversionRateOptimisation"));
const BlogPostWebDesign = lazy(() => import("@/pages/blog/BlogPostWebDesign"));
const ShopifySEO = lazy(() => import("@/pages/blog/ShopifySEO"));
const MarketingAutomation = lazy(() => import("@/pages/blog/MarketingAutomation"));
const DigitalMarketingMistakes = lazy(() => import("@/pages/blog/DigitalMarketingMistakes"));
const DigitalMarketingStrategy2026 = lazy(() => import("@/pages/blog/DigitalMarketingStrategy2026"));
const DataPrivacy2026 = lazy(() => import("@/pages/blog/DataPrivacy2026"));

// SEO Service pages
const SEO = lazy(() => import("@/pages/services/SEO"));
const SEOAgency = lazy(() => import("@/pages/services/SEOAgency"));
const LocalSEO = lazy(() => import("@/pages/services/LocalSEO"));
const EcommerceSEO = lazy(() => import("@/pages/services/EcommerceSEO"));
const WhiteLabelSEO = lazy(() => import("@/pages/services/WhiteLabelSEO"));
const BrisbaneSEO = lazy(() => import("@/pages/services/BrisbaneSEO"));
const MelbourneSEO = lazy(() => import("@/pages/services/MelbourneSEO"));
const SydneySEO = lazy(() => import("@/pages/services/SydneySEO"));
const PerthSEO = lazy(() => import("@/pages/services/PerthSEO"));
const AdelaideSEO = lazy(() => import("@/pages/services/AdelaideSEO"));
const HobartSEO = lazy(() => import("@/pages/services/HobartSEO"));
const GoldCoastSEO = lazy(() => import("@/pages/services/GoldCoastSEO"));
const CanberraSEO = lazy(() => import("@/pages/services/CanberraSEO"));
const NewcastleSEO = lazy(() => import("@/pages/services/NewcastleSEO"));
const DarwinSEO = lazy(() => import("@/pages/services/DarwinSEO"));
const LauncestonSEO = lazy(() => import("@/pages/services/LauncestonSEO"));
const BallaratSEO = lazy(() => import("@/pages/services/BallaratSEO"));

// Google Ads Service pages
const GoogleAds = lazy(() => import("@/pages/services/GoogleAds"));
const GoogleAdsManagement = lazy(() => import("@/pages/services/GoogleAdsManagement"));
const GoogleAdsSydney = lazy(() => import("@/pages/services/GoogleAdsSydney"));
const GoogleAdsMelbourne = lazy(() => import("@/pages/services/GoogleAdsMelbourne"));
const GoogleAdsBrisbane = lazy(() => import("@/pages/services/GoogleAdsBrisbane"));
const GoogleAdsPerth = lazy(() => import("@/pages/services/GoogleAdsPerth"));
const GoogleAdsAdelaide = lazy(() => import("@/pages/services/GoogleAdsAdelaide"));
const GoogleAdsHobart = lazy(() => import("@/pages/services/GoogleAdsHobart"));
const GoogleAdsGoldCoast = lazy(() => import("@/pages/services/GoogleAdsGoldCoast"));
const GoogleAdsCanberra = lazy(() => import("@/pages/services/GoogleAdsCanberra"));
const GoogleAdsNewcastle = lazy(() => import("@/pages/services/GoogleAdsNewcastle"));
const GoogleAdsDarwin = lazy(() => import("@/pages/services/GoogleAdsDarwin"));
const GoogleAdsLaunceston = lazy(() => import("@/pages/services/GoogleAdsLaunceston"));
const GoogleAdsBallarat = lazy(() => import("@/pages/services/GoogleAdsBallarat"));
const PPCManagement = lazy(() => import("@/pages/services/PPCManagement"));
const PPCAgency = lazy(() => import("@/pages/services/PPCAgency"));

// Social Media Service pages
const SocialMedia = lazy(() => import("@/pages/services/SocialMedia"));
const SocialMediaAdvertising = lazy(() => import("@/pages/services/SocialMediaAdvertising"));
const FacebookAdvertising = lazy(() => import("@/pages/services/FacebookAdvertising"));
const InstagramAdvertising = lazy(() => import("@/pages/services/InstagramAdvertising"));
const LinkedInAdvertising = lazy(() => import("@/pages/services/LinkedInAdvertising"));
const TikTokAdvertising = lazy(() => import("@/pages/services/TikTokAdvertising"));
const YouTubeAdvertising = lazy(() => import("@/pages/services/YouTubeAdvertising"));
const SocialMediaAdvertisingSydney = lazy(() => import("@/pages/services/SocialMediaAdvertisingSydney"));
const SocialMediaAdvertisingMelbourne = lazy(() => import("@/pages/services/SocialMediaAdvertisingMelbourne"));
const SocialMediaAdvertisingBrisbane = lazy(() => import("@/pages/services/SocialMediaAdvertisingBrisbane"));
const SocialMediaAdvertisingAdelaide = lazy(() => import("@/pages/services/SocialMediaAdvertisingAdelaide"));
const FacebookAdsSydney = lazy(() => import("@/pages/services/FacebookAdsSydney"));
const FacebookAdsMelbourne = lazy(() => import("@/pages/services/FacebookAdsMelbourne"));
const FacebookAdsBrisbane = lazy(() => import("@/pages/services/FacebookAdsBrisbane"));
const FacebookAdsPerth = lazy(() => import("@/pages/services/FacebookAdsPerth"));
const FacebookAdsAdelaide = lazy(() => import("@/pages/services/FacebookAdsAdelaide"));
const FacebookAdsHobart = lazy(() => import("@/pages/services/FacebookAdsHobart"));
const FacebookAdsGoldCoast = lazy(() => import("@/pages/services/FacebookAdsGoldCoast"));
const FacebookAdsCanberra = lazy(() => import("@/pages/services/FacebookAdsCanberra"));
const FacebookAdsNewcastle = lazy(() => import("@/pages/services/FacebookAdsNewcastle"));
const FacebookAdsDarwin = lazy(() => import("@/pages/services/FacebookAdsDarwin"));
const FacebookAdsLaunceston = lazy(() => import("@/pages/services/FacebookAdsLaunceston"));
const FacebookAdsBallarat = lazy(() => import("@/pages/services/FacebookAdsBallarat"));

// Other Service pages
const WebsiteDesign = lazy(() => import("@/pages/services/WebsiteDesign"));
const WebsiteDesignAndDevelopment = lazy(() => import("@/pages/services/WebsiteDesignAndDevelopment"));
const WebDesignSydney = lazy(() => import("@/pages/services/WebDesignSydney"));
const WebDesignMelbourne = lazy(() => import("@/pages/services/WebDesignMelbourne"));
const WebDesignBrisbane = lazy(() => import("@/pages/services/WebDesignBrisbane"));
const WebDesignPerth = lazy(() => import("@/pages/services/WebDesignPerth"));
const WebDesignAdelaide = lazy(() => import("@/pages/services/WebDesignAdelaide"));
const WebDesignHobart = lazy(() => import("@/pages/services/WebDesignHobart"));
const WebDesignGoldCoast = lazy(() => import("@/pages/services/WebDesignGoldCoast"));
const WebDesignCanberra = lazy(() => import("@/pages/services/WebDesignCanberra"));
const WebDesignNewcastle = lazy(() => import("@/pages/services/WebDesignNewcastle"));
const WebDesignDarwin = lazy(() => import("@/pages/services/WebDesignDarwin"));
const WebDesignLaunceston = lazy(() => import("@/pages/services/WebDesignLaunceston"));
const WebDesignBallarat = lazy(() => import("@/pages/services/WebDesignBallarat"));
const FunnelDevelopment = lazy(() => import("@/pages/services/FunnelDevelopment"));
const MarketingConsulting = lazy(() => import("@/pages/services/MarketingConsulting"));
const EmailMarketing = lazy(() => import("@/pages/services/EmailMarketing"));
const EmailMarketingAgency = lazy(() => import("@/pages/services/EmailMarketingAgency"));
const EcommerceAgency = lazy(() => import("@/pages/services/EcommerceAgency"));
const InfluencerAgency = lazy(() => import("@/pages/services/InfluencerAgency"));
const OnlineMarketingCompanySydney = lazy(() => import("@/pages/services/OnlineMarketingCompanySydney"));
const OnlineMarketingCompanyMelbourne = lazy(() => import("@/pages/services/OnlineMarketingCompanyMelbourne"));
const OnlineMarketingCompanyBrisbane = lazy(() => import("@/pages/services/OnlineMarketingCompanyBrisbane"));
const OnlineMarketingCompanyPerth = lazy(() => import("@/pages/services/OnlineMarketingCompanyPerth"));
const OnlineMarketingCompanyAdelaide = lazy(() => import("@/pages/services/OnlineMarketingCompanyAdelaide"));
const OnlineMarketingCompanyHobart = lazy(() => import("@/pages/services/OnlineMarketingCompanyHobart"));
const OnlineMarketingCompanyGoldCoast = lazy(() => import("@/pages/services/OnlineMarketingCompanyGoldCoast"));
const OnlineMarketingCompanyCanberra = lazy(() => import("@/pages/services/OnlineMarketingCompanyCanberra"));
const OnlineMarketingCompanyNewcastle = lazy(() => import("@/pages/services/OnlineMarketingCompanyNewcastle"));
const OnlineMarketingCompanyDarwin = lazy(() => import("@/pages/services/OnlineMarketingCompanyDarwin"));
const OnlineMarketingCompanyLaunceston = lazy(() => import("@/pages/services/OnlineMarketingCompanyLaunceston"));

// Industry pages
const Dermatologists = lazy(() => import("@/pages/industries/Dermatologists"));
const Dentists = lazy(() => import("@/pages/industries/Dentists"));
const CosmeticDentists = lazy(() => import("@/pages/industries/CosmeticDentists"));
const PediatricDentists = lazy(() => import("@/pages/industries/PediatricDentists"));
const FamilyDentists = lazy(() => import("@/pages/industries/FamilyDentists"));
const Orthodontists = lazy(() => import("@/pages/industries/Orthodontists"));
const DentalImplants = lazy(() => import("@/pages/industries/DentalImplants"));
const CosmeticSurgeons = lazy(() => import("@/pages/industries/CosmeticSurgeons"));
const PlasticSurgeons = lazy(() => import("@/pages/industries/PlasticSurgeons"));
const CosmeticClinics = lazy(() => import("@/pages/industries/CosmeticClinics"));
const FertilityClinics = lazy(() => import("@/pages/industries/FertilityClinics"));
const Ophthalmologists = lazy(() => import("@/pages/industries/Ophthalmologists"));
const Healthcare = lazy(() => import("@/pages/industries/Healthcare"));
const PharmaceuticalCompanies = lazy(() => import("@/pages/industries/PharmaceuticalCompanies"));
const Lawyers = lazy(() => import("@/pages/industries/Lawyers"));
const FamilyLawyers = lazy(() => import("@/pages/industries/FamilyLawyers"));
const ConveyancingLawyers = lazy(() => import("@/pages/industries/ConveyancingLawyers"));
const ImmigrationLawyers = lazy(() => import("@/pages/industries/ImmigrationLawyers"));
const PersonalInjuryLawyers = lazy(() => import("@/pages/industries/PersonalInjuryLawyers"));
const CriminalDefenseLawyers = lazy(() => import("@/pages/industries/CriminalDefenseLawyers"));
const AccountingFirms = lazy(() => import("@/pages/industries/AccountingFirms"));
const ArchitectureFirms = lazy(() => import("@/pages/industries/ArchitectureFirms"));
const InsuranceAgents = lazy(() => import("@/pages/industries/InsuranceAgents"));
const ProfessionalServices = lazy(() => import("@/pages/industries/ProfessionalServices"));
const Plumbers = lazy(() => import("@/pages/industries/Plumbers"));
const Electricians = lazy(() => import("@/pages/industries/Electricians"));
const HVACContractors = lazy(() => import("@/pages/industries/HVACContractors"));
const RoofingCompanies = lazy(() => import("@/pages/industries/RoofingCompanies"));
const LandscapingCompanies = lazy(() => import("@/pages/industries/LandscapingCompanies"));
const RealEstateAgents = lazy(() => import("@/pages/industries/RealEstateAgents"));
const LuxuryRealEstate = lazy(() => import("@/pages/industries/LuxuryRealEstate"));
const CommercialRealEstate = lazy(() => import("@/pages/industries/CommercialRealEstate"));
const SaasCompanies = lazy(() => import("@/pages/industries/SaasCompanies"));
const EnterpriseSoftware = lazy(() => import("@/pages/industries/EnterpriseSoftware"));
const FranchiseBusinesses = lazy(() => import("@/pages/industries/FranchiseBusinesses"));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SkipToContent />
        <MarketingFormProvider>
          <MarketingFormModal />
          <AppContent />
          <Suspense fallback={<RouteLoader />}>
            <Routes>
              {/* Core Routes */}
              <Route path="/" element={<Index />} />
              
              {/* Company Routes */}
              <Route path="/about" element={<About />} />
              <Route path="/our-ethos" element={<OurEthos />} />
              <Route path="/our-clients" element={<OurClients />} />
              
              {/* Service Overview Routes */}
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<OurIndustries />} />
              
              {/* Conversion Routes */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/strategy-session" element={<StrategySession />} />
              <Route path="/application" element={<Application />} />
              <Route path="/opt-in" element={<OptIn />} />
              <Route path="/free-trainings" element={<FreeTrainings />} />
              
              {/* Thank You Routes */}
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/free-trainings-thank-you" element={<FreeTrainingsThankYou />} />
              <Route path="/ads-thank-you" element={<AdsThankYou />} />
              <Route path="/t2-ads-thank-you" element={<T2AdsThankYou />} />
              
              {/* Booking & Calendar Routes */}
              <Route path="/lead-magnet-booking" element={<LeadMagnetBooking />} />
              <Route path="/ads-calendar" element={<AdsCalendar />} />
              <Route path="/yt-calendar" element={<YtCalendar />} />
              <Route path="/t2-ads-calendar" element={<T2AdsCalendar />} />
              <Route path="/onboarding" element={<Onboarding />} />
              
              {/* Legal Routes */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              
              {/* Blog Routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/tiktok-for-business" element={<TikTokForBusiness />} />
              <Route path="/blog/ai-seo-future-proof" element={<AISEOFutureProof />} />
              <Route path="/blog/seo-checklist-2025" element={<SEOChecklist2025 />} />
              <Route path="/blog/local-seo-tradies" element={<LocalSEOTradies />} />
              <Route path="/blog/ai-seo-guide" element={<AISEOGuide />} />
              <Route path="/blog/local-seo-2026" element={<LocalSEO2026 />} />
              <Route path="/blog/will-ai-replace-seo" element={<WillAIReplaceSEO />} />
              <Route path="/blog/content-marketing" element={<ContentMarketing />} />
              <Route path="/blog/content-marketing-matrix" element={<ContentMarketingMatrix />} />
              <Route path="/blog/beyond-the-boost-post" element={<BeyondTheBoostPost />} />
              <Route path="/blog/google-ads-guide" element={<GoogleAdsGuide />} />
              <Route path="/blog/social-media" element={<BlogPostSocialMedia />} />
              <Route path="/blog/email-marketing" element={<BlogPostEmailMarketing />} />
              <Route path="/blog/analytics-cro" element={<BlogPostAnalyticsCRO />} />
              <Route path="/blog/conversion-rate-optimisation" element={<ConversionRateOptimisation />} />
              <Route path="/blog/web-design" element={<BlogPostWebDesign />} />
              <Route path="/blog/shopify-seo" element={<ShopifySEO />} />
              <Route path="/blog/marketing-automation" element={<MarketingAutomation />} />
              <Route path="/blog/digital-marketing-mistakes" element={<DigitalMarketingMistakes />} />
              <Route path="/blog/digital-marketing-strategy-2026" element={<DigitalMarketingStrategy2026 />} />
              <Route path="/blog/data-privacy-2026" element={<DataPrivacy2026 />} />
              
              {/* SEO Service Routes */}
              <Route path="/services/seo" element={<SEO />} />
              <Route path="/seo-agency" element={<SEOAgency />} />
              <Route path="/local-seo" element={<LocalSEO />} />
              <Route path="/ecommerce-seo" element={<EcommerceSEO />} />
              <Route path="/white-label-seo" element={<WhiteLabelSEO />} />
              <Route path="/seo-brisbane" element={<BrisbaneSEO />} />
              <Route path="/seo-melbourne" element={<MelbourneSEO />} />
              <Route path="/seo-sydney" element={<SydneySEO />} />
              <Route path="/seo-perth" element={<PerthSEO />} />
              <Route path="/seo-adelaide" element={<AdelaideSEO />} />
              <Route path="/seo-hobart" element={<HobartSEO />} />
              <Route path="/seo-gold-coast" element={<GoldCoastSEO />} />
              <Route path="/seo-canberra" element={<CanberraSEO />} />
              <Route path="/seo-newcastle" element={<NewcastleSEO />} />
              <Route path="/seo-darwin" element={<DarwinSEO />} />
              <Route path="/seo-launceston" element={<LauncestonSEO />} />
              <Route path="/seo-ballarat" element={<BallaratSEO />} />
              
              {/* Google Ads Service Routes */}
              <Route path="/services/google-ads" element={<GoogleAds />} />
              <Route path="/google-ads-management" element={<GoogleAdsManagement />} />
              <Route path="/google-ads-sydney" element={<GoogleAdsSydney />} />
              <Route path="/google-ads-melbourne" element={<GoogleAdsMelbourne />} />
              <Route path="/google-ads-brisbane" element={<GoogleAdsBrisbane />} />
              <Route path="/google-ads-perth" element={<GoogleAdsPerth />} />
              <Route path="/google-ads-adelaide" element={<GoogleAdsAdelaide />} />
              <Route path="/google-ads-hobart" element={<GoogleAdsHobart />} />
              <Route path="/google-ads-gold-coast" element={<GoogleAdsGoldCoast />} />
              <Route path="/google-ads-canberra" element={<GoogleAdsCanberra />} />
              <Route path="/google-ads-newcastle" element={<GoogleAdsNewcastle />} />
              <Route path="/google-ads-darwin" element={<GoogleAdsDarwin />} />
              <Route path="/google-ads-launceston" element={<GoogleAdsLaunceston />} />
              <Route path="/google-ads-ballarat" element={<GoogleAdsBallarat />} />
              <Route path="/ppc-management" element={<PPCManagement />} />
              <Route path="/ppc-agency" element={<PPCAgency />} />
              
              {/* Social Media Service Routes */}
              <Route path="/services/social-media" element={<SocialMedia />} />
              <Route path="/social-media-advertising" element={<SocialMediaAdvertising />} />
              <Route path="/services/facebook-advertising" element={<FacebookAdvertising />} />
              <Route path="/services/instagram-advertising" element={<InstagramAdvertising />} />
              <Route path="/services/linkedin-advertising" element={<LinkedInAdvertising />} />
              <Route path="/services/tiktok-advertising" element={<TikTokAdvertising />} />
              <Route path="/services/youtube-advertising" element={<YouTubeAdvertising />} />
              <Route path="/social-media-advertising-sydney" element={<SocialMediaAdvertisingSydney />} />
              <Route path="/social-media-advertising-melbourne" element={<SocialMediaAdvertisingMelbourne />} />
              <Route path="/social-media-advertising-brisbane" element={<SocialMediaAdvertisingBrisbane />} />
              <Route path="/social-media-advertising-adelaide" element={<SocialMediaAdvertisingAdelaide />} />
              <Route path="/facebook-ads-sydney" element={<FacebookAdsSydney />} />
              <Route path="/facebook-ads-melbourne" element={<FacebookAdsMelbourne />} />
              <Route path="/facebook-ads-brisbane" element={<FacebookAdsBrisbane />} />
              <Route path="/facebook-ads-perth" element={<FacebookAdsPerth />} />
              <Route path="/facebook-ads-adelaide" element={<FacebookAdsAdelaide />} />
              <Route path="/facebook-ads-hobart" element={<FacebookAdsHobart />} />
              <Route path="/facebook-ads-gold-coast" element={<FacebookAdsGoldCoast />} />
              <Route path="/facebook-ads-canberra" element={<FacebookAdsCanberra />} />
              <Route path="/facebook-ads-newcastle" element={<FacebookAdsNewcastle />} />
              <Route path="/facebook-ads-darwin" element={<FacebookAdsDarwin />} />
              <Route path="/facebook-ads-launceston" element={<FacebookAdsLaunceston />} />
              <Route path="/facebook-ads-ballarat" element={<FacebookAdsBallarat />} />
              
              {/* Other Service Routes */}
              <Route path="/services/website-design" element={<WebsiteDesign />} />
              <Route path="/services/web-design" element={<WebsiteDesign />} />
              <Route path="/services/website-design-and-development" element={<WebsiteDesignAndDevelopment />} />
              <Route path="/web-design-sydney" element={<WebDesignSydney />} />
              <Route path="/web-design-melbourne" element={<WebDesignMelbourne />} />
              <Route path="/web-design-brisbane" element={<WebDesignBrisbane />} />
              <Route path="/web-design-perth" element={<WebDesignPerth />} />
              <Route path="/web-design-adelaide" element={<WebDesignAdelaide />} />
              <Route path="/web-design-hobart" element={<WebDesignHobart />} />
              <Route path="/web-design-gold-coast" element={<WebDesignGoldCoast />} />
              <Route path="/web-design-canberra" element={<WebDesignCanberra />} />
              <Route path="/web-design-newcastle" element={<WebDesignNewcastle />} />
              <Route path="/web-design-darwin" element={<WebDesignDarwin />} />
              <Route path="/web-design-launceston" element={<WebDesignLaunceston />} />
              <Route path="/web-design-ballarat" element={<WebDesignBallarat />} />
              <Route path="/services/funnel-development" element={<FunnelDevelopment />} />
              <Route path="/services/marketing-consulting" element={<MarketingConsulting />} />
              <Route path="/services/email-marketing" element={<EmailMarketing />} />
              <Route path="/email-marketing-agency" element={<EmailMarketingAgency />} />
              <Route path="/ecommerce-agency" element={<EcommerceAgency />} />
              <Route path="/influencer-agency" element={<InfluencerAgency />} />
              <Route path="/online-marketing-company-sydney" element={<OnlineMarketingCompanySydney />} />
              <Route path="/online-marketing-company-melbourne" element={<OnlineMarketingCompanyMelbourne />} />
              <Route path="/online-marketing-company-brisbane" element={<OnlineMarketingCompanyBrisbane />} />
              <Route path="/online-marketing-company-perth" element={<OnlineMarketingCompanyPerth />} />
              <Route path="/online-marketing-company-adelaide" element={<OnlineMarketingCompanyAdelaide />} />
              <Route path="/online-marketing-company-hobart" element={<OnlineMarketingCompanyHobart />} />
              <Route path="/online-marketing-company-gold-coast" element={<OnlineMarketingCompanyGoldCoast />} />
              <Route path="/online-marketing-company-canberra" element={<OnlineMarketingCompanyCanberra />} />
              <Route path="/online-marketing-company-newcastle" element={<OnlineMarketingCompanyNewcastle />} />
              <Route path="/online-marketing-company-darwin" element={<OnlineMarketingCompanyDarwin />} />
              <Route path="/online-marketing-company-launceston" element={<OnlineMarketingCompanyLaunceston />} />
              
              {/* Medical Industry Routes */}
              <Route path="/industries/dermatologists" element={<Dermatologists />} />
              <Route path="/industries/dentists" element={<Dentists />} />
              <Route path="/industries/cosmetic-dentists" element={<CosmeticDentists />} />
              <Route path="/industries/pediatric-dentists" element={<PediatricDentists />} />
              <Route path="/industries/family-dentists" element={<FamilyDentists />} />
              <Route path="/industries/orthodontists" element={<Orthodontists />} />
              <Route path="/industries/dental-implants" element={<DentalImplants />} />
              <Route path="/industries/cosmetic-surgeons" element={<CosmeticSurgeons />} />
              <Route path="/industries/plastic-surgeons" element={<PlasticSurgeons />} />
              <Route path="/industries/cosmetic-clinics" element={<CosmeticClinics />} />
              <Route path="/industries/fertility-clinics" element={<FertilityClinics />} />
              <Route path="/industries/ophthalmologists" element={<Ophthalmologists />} />
              <Route path="/industries/healthcare" element={<Healthcare />} />
              <Route path="/industries/pharmaceutical-companies" element={<PharmaceuticalCompanies />} />
              
              {/* Professional Services Industry Routes */}
              <Route path="/industries/lawyers" element={<Lawyers />} />
              <Route path="/industries/family-lawyers" element={<FamilyLawyers />} />
              <Route path="/industries/conveyancing-lawyers" element={<ConveyancingLawyers />} />
              <Route path="/industries/immigration-lawyers" element={<ImmigrationLawyers />} />
              <Route path="/industries/personal-injury-lawyers" element={<PersonalInjuryLawyers />} />
              <Route path="/industries/criminal-defense-lawyers" element={<CriminalDefenseLawyers />} />
              <Route path="/industries/accounting-firms" element={<AccountingFirms />} />
              <Route path="/industries/architecture-firms" element={<ArchitectureFirms />} />
              <Route path="/industries/insurance-agents" element={<InsuranceAgents />} />
              <Route path="/industries/professional-services" element={<ProfessionalServices />} />
              
              {/* Home Services Industry Routes */}
              <Route path="/industries/plumbers" element={<Plumbers />} />
              <Route path="/industries/electricians" element={<Electricians />} />
              <Route path="/industries/hvac-contractors" element={<HVACContractors />} />
              <Route path="/industries/roofing-companies" element={<RoofingCompanies />} />
              <Route path="/industries/landscaping-companies" element={<LandscapingCompanies />} />
              
              {/* Business Industry Routes */}
              <Route path="/industries/real-estate-agents" element={<RealEstateAgents />} />
              <Route path="/industries/luxury-real-estate" element={<LuxuryRealEstate />} />
              <Route path="/industries/commercial-real-estate" element={<CommercialRealEstate />} />
              <Route path="/industries/saas-companies" element={<SaasCompanies />} />
              <Route path="/industries/enterprise-software" element={<EnterpriseSoftware />} />
              <Route path="/industries/franchise-businesses" element={<FranchiseBusinesses />} />
              
              {/* 404 - Must be last */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </MarketingFormProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
