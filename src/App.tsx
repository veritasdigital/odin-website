import { Suspense } from "react";
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

// Import route configurations
import {
  coreRoutes,
  companyRoutes,
  serviceOverviewRoutes,
  conversionRoutes,
  thankYouRoutes,
  bookingRoutes,
  legalRoutes,
  blogRoutes,
  seoServiceRoutes,
  googleAdsServiceRoutes,
  socialMediaServiceRoutes,
  otherServiceRoutes,
  medicalIndustryRoutes,
  professionalIndustryRoutes,
  homeServicesIndustryRoutes,
  businessIndustryRoutes,
} from "@/config/routes.config";

// Configure React Query with optimized defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
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
              <Route path="/" element={<coreRoutes.Index />} />
              
              {/* Company Routes */}
              <Route path="/about" element={<companyRoutes.About />} />
              <Route path="/our-ethos" element={<companyRoutes.OurEthos />} />
              <Route path="/our-clients" element={<companyRoutes.OurClients />} />
              
              {/* Service Overview Routes */}
              <Route path="/services" element={<serviceOverviewRoutes.Services />} />
              <Route path="/industries" element={<serviceOverviewRoutes.OurIndustries />} />
              
              {/* Conversion Routes */}
              <Route path="/contact" element={<conversionRoutes.Contact />} />
              <Route path="/strategy-session" element={<conversionRoutes.StrategySession />} />
              <Route path="/application" element={<conversionRoutes.Application />} />
              <Route path="/opt-in" element={<conversionRoutes.OptIn />} />
              <Route path="/free-trainings" element={<conversionRoutes.FreeTrainings />} />
              
              {/* Thank You Routes */}
              <Route path="/thank-you" element={<thankYouRoutes.ThankYou />} />
              <Route path="/free-trainings-thank-you" element={<thankYouRoutes.FreeTrainingsThankYou />} />
              <Route path="/ads-thank-you" element={<thankYouRoutes.AdsThankYou />} />
              <Route path="/t2-ads-thank-you" element={<thankYouRoutes.T2AdsThankYou />} />
              
              {/* Booking & Calendar Routes */}
              <Route path="/lead-magnet-booking" element={<bookingRoutes.LeadMagnetBooking />} />
              <Route path="/ads-calendar" element={<bookingRoutes.AdsCalendar />} />
              <Route path="/yt-calendar" element={<bookingRoutes.YtCalendar />} />
              <Route path="/t2-ads-calendar" element={<bookingRoutes.T2AdsCalendar />} />
              <Route path="/onboarding" element={<bookingRoutes.Onboarding />} />
              
              {/* Legal Routes */}
              <Route path="/privacy" element={<legalRoutes.Privacy />} />
              <Route path="/terms" element={<legalRoutes.Terms />} />
              
              {/* Blog Routes */}
              <Route path="/blog" element={<blogRoutes.Blog />} />
              <Route path="/blog/tiktok-for-business" element={<blogRoutes.TikTokForBusiness />} />
              <Route path="/blog/ai-seo-future-proof" element={<blogRoutes.AISEOFutureProof />} />
              <Route path="/blog/seo-checklist-2025" element={<blogRoutes.SEOChecklist2025 />} />
              <Route path="/blog/local-seo-tradies" element={<blogRoutes.LocalSEOTradies />} />
              <Route path="/blog/ai-seo-guide" element={<blogRoutes.AISEOGuide />} />
              <Route path="/blog/local-seo-2026" element={<blogRoutes.LocalSEO2026 />} />
              <Route path="/blog/will-ai-replace-seo" element={<blogRoutes.WillAIReplaceSEO />} />
              <Route path="/blog/content-marketing" element={<blogRoutes.ContentMarketing />} />
              <Route path="/blog/content-marketing-matrix" element={<blogRoutes.ContentMarketingMatrix />} />
              <Route path="/blog/beyond-the-boost-post" element={<blogRoutes.BeyondTheBoostPost />} />
              <Route path="/blog/google-ads-guide" element={<blogRoutes.GoogleAdsGuide />} />
              <Route path="/blog/social-media" element={<blogRoutes.BlogPostSocialMedia />} />
              <Route path="/blog/email-marketing" element={<blogRoutes.BlogPostEmailMarketing />} />
              <Route path="/blog/analytics-cro" element={<blogRoutes.BlogPostAnalyticsCRO />} />
              <Route path="/blog/conversion-rate-optimisation" element={<blogRoutes.ConversionRateOptimisation />} />
              <Route path="/blog/web-design" element={<blogRoutes.BlogPostWebDesign />} />
              <Route path="/blog/shopify-seo" element={<blogRoutes.ShopifySEO />} />
              <Route path="/blog/marketing-automation" element={<blogRoutes.MarketingAutomation />} />
              <Route path="/blog/digital-marketing-mistakes" element={<blogRoutes.DigitalMarketingMistakes />} />
              <Route path="/blog/digital-marketing-strategy-2026" element={<blogRoutes.DigitalMarketingStrategy2026 />} />
              <Route path="/blog/data-privacy-2026" element={<blogRoutes.DataPrivacy2026 />} />
              
              {/* SEO Service Routes */}
              <Route path="/services/seo" element={<seoServiceRoutes.SEO />} />
              <Route path="/seo-agency" element={<seoServiceRoutes.SEOAgency />} />
              <Route path="/local-seo" element={<seoServiceRoutes.LocalSEO />} />
              <Route path="/ecommerce-seo" element={<seoServiceRoutes.EcommerceSEO />} />
              <Route path="/white-label-seo" element={<seoServiceRoutes.WhiteLabelSEO />} />
              <Route path="/seo-brisbane" element={<seoServiceRoutes.BrisbaneSEO />} />
              <Route path="/seo-melbourne" element={<seoServiceRoutes.MelbourneSEO />} />
              <Route path="/seo-sydney" element={<seoServiceRoutes.SydneySEO />} />
              <Route path="/seo-perth" element={<seoServiceRoutes.PerthSEO />} />
              <Route path="/seo-adelaide" element={<seoServiceRoutes.AdelaideSEO />} />
              <Route path="/seo-hobart" element={<seoServiceRoutes.HobartSEO />} />
              <Route path="/seo-gold-coast" element={<seoServiceRoutes.GoldCoastSEO />} />
              <Route path="/seo-canberra" element={<seoServiceRoutes.CanberraSEO />} />
              <Route path="/seo-newcastle" element={<seoServiceRoutes.NewcastleSEO />} />
              <Route path="/seo-darwin" element={<seoServiceRoutes.DarwinSEO />} />
              <Route path="/seo-launceston" element={<seoServiceRoutes.LauncestonSEO />} />
              <Route path="/seo-ballarat" element={<seoServiceRoutes.BallaratSEO />} />
              
              {/* Google Ads Service Routes */}
              <Route path="/services/google-ads" element={<googleAdsServiceRoutes.GoogleAds />} />
              <Route path="/google-ads-management" element={<googleAdsServiceRoutes.GoogleAdsManagement />} />
              <Route path="/google-ads-sydney" element={<googleAdsServiceRoutes.GoogleAdsSydney />} />
              <Route path="/google-ads-melbourne" element={<googleAdsServiceRoutes.GoogleAdsMelbourne />} />
              <Route path="/google-ads-brisbane" element={<googleAdsServiceRoutes.GoogleAdsBrisbane />} />
              <Route path="/google-ads-perth" element={<googleAdsServiceRoutes.GoogleAdsPerth />} />
              <Route path="/google-ads-adelaide" element={<googleAdsServiceRoutes.GoogleAdsAdelaide />} />
              <Route path="/google-ads-hobart" element={<googleAdsServiceRoutes.GoogleAdsHobart />} />
              <Route path="/google-ads-gold-coast" element={<googleAdsServiceRoutes.GoogleAdsGoldCoast />} />
              <Route path="/google-ads-canberra" element={<googleAdsServiceRoutes.GoogleAdsCanberra />} />
              <Route path="/google-ads-newcastle" element={<googleAdsServiceRoutes.GoogleAdsNewcastle />} />
              <Route path="/google-ads-darwin" element={<googleAdsServiceRoutes.GoogleAdsDarwin />} />
              <Route path="/google-ads-launceston" element={<googleAdsServiceRoutes.GoogleAdsLaunceston />} />
              <Route path="/google-ads-ballarat" element={<googleAdsServiceRoutes.GoogleAdsBallarat />} />
              <Route path="/ppc-management" element={<googleAdsServiceRoutes.PPCManagement />} />
              <Route path="/ppc-agency" element={<googleAdsServiceRoutes.PPCAgency />} />
              
              {/* Social Media Service Routes */}
              <Route path="/services/social-media" element={<socialMediaServiceRoutes.SocialMedia />} />
              <Route path="/social-media-advertising" element={<socialMediaServiceRoutes.SocialMediaAdvertising />} />
              <Route path="/services/facebook-advertising" element={<socialMediaServiceRoutes.FacebookAdvertising />} />
              <Route path="/services/instagram-advertising" element={<socialMediaServiceRoutes.InstagramAdvertising />} />
              <Route path="/services/linkedin-advertising" element={<socialMediaServiceRoutes.LinkedInAdvertising />} />
              <Route path="/services/tiktok-advertising" element={<socialMediaServiceRoutes.TikTokAdvertising />} />
              <Route path="/services/youtube-advertising" element={<socialMediaServiceRoutes.YouTubeAdvertising />} />
              <Route path="/social-media-advertising-sydney" element={<socialMediaServiceRoutes.SocialMediaAdvertisingSydney />} />
              <Route path="/social-media-advertising-melbourne" element={<socialMediaServiceRoutes.SocialMediaAdvertisingMelbourne />} />
              <Route path="/social-media-advertising-brisbane" element={<socialMediaServiceRoutes.SocialMediaAdvertisingBrisbane />} />
              <Route path="/social-media-advertising-adelaide" element={<socialMediaServiceRoutes.SocialMediaAdvertisingAdelaide />} />
              <Route path="/facebook-ads-sydney" element={<socialMediaServiceRoutes.FacebookAdsSydney />} />
              <Route path="/facebook-ads-melbourne" element={<socialMediaServiceRoutes.FacebookAdsMelbourne />} />
              <Route path="/facebook-ads-brisbane" element={<socialMediaServiceRoutes.FacebookAdsBrisbane />} />
              <Route path="/facebook-ads-perth" element={<socialMediaServiceRoutes.FacebookAdsPerth />} />
              <Route path="/facebook-ads-adelaide" element={<socialMediaServiceRoutes.FacebookAdsAdelaide />} />
              <Route path="/facebook-ads-hobart" element={<socialMediaServiceRoutes.FacebookAdsHobart />} />
              <Route path="/facebook-ads-gold-coast" element={<socialMediaServiceRoutes.FacebookAdsGoldCoast />} />
              <Route path="/facebook-ads-canberra" element={<socialMediaServiceRoutes.FacebookAdsCanberra />} />
              <Route path="/facebook-ads-newcastle" element={<socialMediaServiceRoutes.FacebookAdsNewcastle />} />
              <Route path="/facebook-ads-darwin" element={<socialMediaServiceRoutes.FacebookAdsDarwin />} />
              <Route path="/facebook-ads-launceston" element={<socialMediaServiceRoutes.FacebookAdsLaunceston />} />
              <Route path="/facebook-ads-ballarat" element={<socialMediaServiceRoutes.FacebookAdsBallarat />} />
              
              {/* Other Service Routes */}
              <Route path="/services/website-design" element={<otherServiceRoutes.WebsiteDesign />} />
              <Route path="/services/web-design" element={<otherServiceRoutes.WebsiteDesign />} />
              <Route path="/services/website-design-and-development" element={<otherServiceRoutes.WebsiteDesignAndDevelopment />} />
              <Route path="/web-design-sydney" element={<otherServiceRoutes.WebDesignSydney />} />
              <Route path="/web-design-melbourne" element={<otherServiceRoutes.WebDesignMelbourne />} />
              <Route path="/web-design-brisbane" element={<otherServiceRoutes.WebDesignBrisbane />} />
              <Route path="/web-design-perth" element={<otherServiceRoutes.WebDesignPerth />} />
              <Route path="/web-design-adelaide" element={<otherServiceRoutes.WebDesignAdelaide />} />
              <Route path="/web-design-hobart" element={<otherServiceRoutes.WebDesignHobart />} />
              <Route path="/web-design-gold-coast" element={<otherServiceRoutes.WebDesignGoldCoast />} />
              <Route path="/web-design-canberra" element={<otherServiceRoutes.WebDesignCanberra />} />
              <Route path="/web-design-newcastle" element={<otherServiceRoutes.WebDesignNewcastle />} />
              <Route path="/web-design-darwin" element={<otherServiceRoutes.WebDesignDarwin />} />
              <Route path="/web-design-launceston" element={<otherServiceRoutes.WebDesignLaunceston />} />
              <Route path="/web-design-ballarat" element={<otherServiceRoutes.WebDesignBallarat />} />
              <Route path="/services/funnel-development" element={<otherServiceRoutes.FunnelDevelopment />} />
              <Route path="/services/marketing-consulting" element={<otherServiceRoutes.MarketingConsulting />} />
              <Route path="/services/email-marketing" element={<otherServiceRoutes.EmailMarketing />} />
              <Route path="/email-marketing-agency" element={<otherServiceRoutes.EmailMarketingAgency />} />
              <Route path="/ecommerce-agency" element={<otherServiceRoutes.EcommerceAgency />} />
              <Route path="/influencer-agency" element={<otherServiceRoutes.InfluencerAgency />} />
              <Route path="/online-marketing-company-sydney" element={<otherServiceRoutes.OnlineMarketingCompanySydney />} />
              <Route path="/online-marketing-company-melbourne" element={<otherServiceRoutes.OnlineMarketingCompanyMelbourne />} />
              <Route path="/online-marketing-company-brisbane" element={<otherServiceRoutes.OnlineMarketingCompanyBrisbane />} />
              <Route path="/online-marketing-company-perth" element={<otherServiceRoutes.OnlineMarketingCompanyPerth />} />
              <Route path="/online-marketing-company-adelaide" element={<otherServiceRoutes.OnlineMarketingCompanyAdelaide />} />
              <Route path="/online-marketing-company-hobart" element={<otherServiceRoutes.OnlineMarketingCompanyHobart />} />
              <Route path="/online-marketing-company-gold-coast" element={<otherServiceRoutes.OnlineMarketingCompanyGoldCoast />} />
              <Route path="/online-marketing-company-canberra" element={<otherServiceRoutes.OnlineMarketingCompanyCanberra />} />
              <Route path="/online-marketing-company-newcastle" element={<otherServiceRoutes.OnlineMarketingCompanyNewcastle />} />
              <Route path="/online-marketing-company-darwin" element={<otherServiceRoutes.OnlineMarketingCompanyDarwin />} />
              <Route path="/online-marketing-company-launceston" element={<otherServiceRoutes.OnlineMarketingCompanyLaunceston />} />
              
              {/* Medical Industry Routes */}
              <Route path="/industries/dermatologists" element={<medicalIndustryRoutes.Dermatologists />} />
              <Route path="/industries/dentists" element={<medicalIndustryRoutes.Dentists />} />
              <Route path="/industries/cosmetic-dentists" element={<medicalIndustryRoutes.CosmeticDentists />} />
              <Route path="/industries/pediatric-dentists" element={<medicalIndustryRoutes.PediatricDentists />} />
              <Route path="/industries/family-dentists" element={<medicalIndustryRoutes.FamilyDentists />} />
              <Route path="/industries/orthodontists" element={<medicalIndustryRoutes.Orthodontists />} />
              <Route path="/industries/dental-implants" element={<medicalIndustryRoutes.DentalImplants />} />
              <Route path="/industries/cosmetic-surgeons" element={<medicalIndustryRoutes.CosmeticSurgeons />} />
              <Route path="/industries/plastic-surgeons" element={<medicalIndustryRoutes.PlasticSurgeons />} />
              <Route path="/industries/cosmetic-clinics" element={<medicalIndustryRoutes.CosmeticClinics />} />
              <Route path="/industries/fertility-clinics" element={<medicalIndustryRoutes.FertilityClinics />} />
              <Route path="/industries/ophthalmologists" element={<medicalIndustryRoutes.Ophthalmologists />} />
              <Route path="/industries/healthcare" element={<medicalIndustryRoutes.Healthcare />} />
              <Route path="/industries/pharmaceutical-companies" element={<medicalIndustryRoutes.PharmaceuticalCompanies />} />
              
              {/* Professional Services Industry Routes */}
              <Route path="/industries/lawyers" element={<professionalIndustryRoutes.Lawyers />} />
              <Route path="/industries/family-lawyers" element={<professionalIndustryRoutes.FamilyLawyers />} />
              <Route path="/industries/conveyancing-lawyers" element={<professionalIndustryRoutes.ConveyancingLawyers />} />
              <Route path="/industries/immigration-lawyers" element={<professionalIndustryRoutes.ImmigrationLawyers />} />
              <Route path="/industries/personal-injury-lawyers" element={<professionalIndustryRoutes.PersonalInjuryLawyers />} />
              <Route path="/industries/criminal-defense-lawyers" element={<professionalIndustryRoutes.CriminalDefenseLawyers />} />
              <Route path="/industries/accounting-firms" element={<professionalIndustryRoutes.AccountingFirms />} />
              <Route path="/industries/architecture-firms" element={<professionalIndustryRoutes.ArchitectureFirms />} />
              <Route path="/industries/insurance-agents" element={<professionalIndustryRoutes.InsuranceAgents />} />
              <Route path="/industries/professional-services" element={<professionalIndustryRoutes.ProfessionalServices />} />
              
              {/* Home Services Industry Routes */}
              <Route path="/industries/plumbers" element={<homeServicesIndustryRoutes.Plumbers />} />
              <Route path="/industries/electricians" element={<homeServicesIndustryRoutes.Electricians />} />
              <Route path="/industries/hvac-contractors" element={<homeServicesIndustryRoutes.HVACContractors />} />
              <Route path="/industries/roofing-companies" element={<homeServicesIndustryRoutes.RoofingCompanies />} />
              <Route path="/industries/landscaping-companies" element={<homeServicesIndustryRoutes.LandscapingCompanies />} />
              
              {/* Business Industry Routes */}
              <Route path="/industries/real-estate-agents" element={<businessIndustryRoutes.RealEstateAgents />} />
              <Route path="/industries/luxury-real-estate" element={<businessIndustryRoutes.LuxuryRealEstate />} />
              <Route path="/industries/commercial-real-estate" element={<businessIndustryRoutes.CommercialRealEstate />} />
              <Route path="/industries/saas-companies" element={<businessIndustryRoutes.SaasCompanies />} />
              <Route path="/industries/enterprise-software" element={<businessIndustryRoutes.EnterpriseSoftware />} />
              <Route path="/industries/franchise-businesses" element={<businessIndustryRoutes.FranchiseBusinesses />} />
              
              {/* 404 - Must be last */}
              <Route path="*" element={<coreRoutes.NotFound />} />
            </Routes>
          </Suspense>
        </MarketingFormProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
