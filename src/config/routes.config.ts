import { lazy } from 'react';

/**
 * Centralized route configuration with lazy loading
 * Groups routes by category for better code splitting
 */

// Core pages - loaded eagerly (small bundle)
export const coreRoutes = {
  Index: lazy(() => import('../pages/Index')),
  NotFound: lazy(() => import('../pages/NotFound')),
};

// About & Company pages
export const companyRoutes = {
  About: lazy(() => import('../pages/About')),
  OurEthos: lazy(() => import('../pages/OurEthos')),
  OurClients: lazy(() => import('../pages/OurClients')),
};

// Services overview pages
export const serviceOverviewRoutes = {
  Services: lazy(() => import('../pages/Services')),
  OurIndustries: lazy(() => import('../pages/OurIndustries')),
  Industries: lazy(() => import('../pages/Industries')),
};

// Contact & conversion pages
export const conversionRoutes = {
  Contact: lazy(() => import('../pages/Contact')),
  StrategySession: lazy(() => import('../pages/StrategySession')),
  Application: lazy(() => import('../pages/Application')),
  OptIn: lazy(() => import('../pages/OptIn')),
  FreeTrainings: lazy(() => import('../pages/FreeTrainings')),
};

// Thank you pages
export const thankYouRoutes = {
  ThankYou: lazy(() => import('../pages/ThankYou')),
  FreeTrainingsThankYou: lazy(() => import('../pages/FreeTrainingsThankYou')),
  AdsThankYou: lazy(() => import('../pages/AdsThankYou')),
  T2AdsThankYou: lazy(() => import('../pages/T2AdsThankYou')),
};

// Calendar & booking pages
export const bookingRoutes = {
  LeadMagnetBooking: lazy(() => import('../pages/LeadMagnetBooking')),
  AdsCalendar: lazy(() => import('../pages/AdsCalendar')),
  YtCalendar: lazy(() => import('../pages/YtCalendar')),
  T2AdsCalendar: lazy(() => import('../pages/T2AdsCalendar')),
  Onboarding: lazy(() => import('../pages/Onboarding')),
};

// Legal pages
export const legalRoutes = {
  Privacy: lazy(() => import('../pages/Privacy')),
  Terms: lazy(() => import('../pages/Terms')),
};

// Blog pages - loaded on demand
export const blogRoutes = {
  Blog: lazy(() => import('../pages/Blog')),
  TikTokForBusiness: lazy(() => import('../pages/blog/TikTokForBusiness')),
  AISEOFutureProof: lazy(() => import('../pages/blog/AISEOFutureProof')),
  SEOChecklist2025: lazy(() => import('../pages/blog/SEOChecklist2025')),
  LocalSEOTradies: lazy(() => import('../pages/blog/LocalSEOTradies')),
  AISEOGuide: lazy(() => import('../pages/blog/AISEOGuide')),
  LocalSEO2026: lazy(() => import('../pages/blog/LocalSEO2026')),
  WillAIReplaceSEO: lazy(() => import('../pages/blog/WillAIReplaceSEO')),
  ContentMarketing: lazy(() => import('../pages/blog/ContentMarketing')),
  ContentMarketingMatrix: lazy(() => import('../pages/blog/ContentMarketingMatrix')),
  BeyondTheBoostPost: lazy(() => import('../pages/blog/BeyondTheBoostPost')),
  GoogleAdsGuide: lazy(() => import('../pages/blog/GoogleAdsGuide')),
  BlogPostSocialMedia: lazy(() => import('../pages/blog/BlogPostSocialMedia')),
  BlogPostEmailMarketing: lazy(() => import('../pages/blog/BlogPostEmailMarketing')),
  BlogPostAnalyticsCRO: lazy(() => import('../pages/blog/BlogPostAnalyticsCRO')),
  ConversionRateOptimisation: lazy(() => import('../pages/blog/ConversionRateOptimisation')),
  BlogPostWebDesign: lazy(() => import('../pages/blog/BlogPostWebDesign')),
  ShopifySEO: lazy(() => import('../pages/blog/ShopifySEO')),
  MarketingAutomation: lazy(() => import('../pages/blog/MarketingAutomation')),
  DigitalMarketingMistakes: lazy(() => import('../pages/blog/DigitalMarketingMistakes')),
  DigitalMarketingStrategy2026: lazy(() => import('../pages/blog/DigitalMarketingStrategy2026')),
  DataPrivacy2026: lazy(() => import('../pages/blog/DataPrivacy2026')),
};

// Service pages - SEO
export const seoServiceRoutes = {
  SEO: lazy(() => import('../pages/services/SEO')),
  SEOAgency: lazy(() => import('../pages/services/SEOAgency')),
  LocalSEO: lazy(() => import('../pages/services/LocalSEO')),
  EcommerceSEO: lazy(() => import('../pages/services/EcommerceSEO')),
  WhiteLabelSEO: lazy(() => import('../pages/services/WhiteLabelSEO')),
  BrisbaneSEO: lazy(() => import('../pages/services/BrisbaneSEO')),
  MelbourneSEO: lazy(() => import('../pages/services/MelbourneSEO')),
  SydneySEO: lazy(() => import('../pages/services/SydneySEO')),
  PerthSEO: lazy(() => import('../pages/services/PerthSEO')),
  AdelaideSEO: lazy(() => import('../pages/services/AdelaideSEO')),
  HobartSEO: lazy(() => import('../pages/services/HobartSEO')),
  GoldCoastSEO: lazy(() => import('../pages/services/GoldCoastSEO')),
  CanberraSEO: lazy(() => import('../pages/services/CanberraSEO')),
  NewcastleSEO: lazy(() => import('../pages/services/SEONewcastle')),
  DarwinSEO: lazy(() => import('../pages/services/DarwinSEO')),
  LauncestonSEO: lazy(() => import('../pages/services/LauncestonSEO')),
  BallaratSEO: lazy(() => import('../pages/services/BallaratSEO')),
};

// Service pages - Google Ads
export const googleAdsServiceRoutes = {
  GoogleAds: lazy(() => import('../pages/services/GoogleAds')),
  GoogleAdsManagement: lazy(() => import('../pages/services/GoogleAdsManagement')),
  GoogleAdsSydney: lazy(() => import('../pages/services/GoogleAdsSydney')),
  GoogleAdsMelbourne: lazy(() => import('../pages/services/GoogleAdsMelbourne')),
  GoogleAdsBrisbane: lazy(() => import('../pages/services/GoogleAdsBrisbane')),
  GoogleAdsPerth: lazy(() => import('../pages/services/GoogleAdsPerth')),
  GoogleAdsAdelaide: lazy(() => import('../pages/services/GoogleAdsAdelaide')),
  GoogleAdsHobart: lazy(() => import('../pages/services/GoogleAdsHobart')),
  GoogleAdsGoldCoast: lazy(() => import('../pages/services/GoogleAdsGoldCoast')),
  GoogleAdsCanberra: lazy(() => import('../pages/services/GoogleAdsCanberra')),
  GoogleAdsNewcastle: lazy(() => import('../pages/services/GoogleAdsNewcastle')),
  GoogleAdsDarwin: lazy(() => import('../pages/services/GoogleAdsDarwin')),
  GoogleAdsLaunceston: lazy(() => import('../pages/services/GoogleAdsLaunceston')),
  GoogleAdsBallarat: lazy(() => import('../pages/services/GoogleAdsBallarat')),
  PPCManagement: lazy(() => import('../pages/services/PPCManagement')),
  PPCAgency: lazy(() => import('../pages/services/PPCAgency')),
};

// Service pages - Social Media
export const socialMediaServiceRoutes = {
  SocialMedia: lazy(() => import('../pages/services/SocialMedia')),
  SocialMediaAdvertising: lazy(() => import('../pages/services/SocialMediaAdvertising')),
  FacebookAdvertising: lazy(() => import('../pages/services/FacebookAdvertising')),
  InstagramAdvertising: lazy(() => import('../pages/services/InstagramAdvertising')),
  LinkedInAdvertising: lazy(() => import('../pages/services/LinkedInAdvertising')),
  TikTokAdvertising: lazy(() => import('../pages/services/TikTokAdvertising')),
  YouTubeAdvertising: lazy(() => import('../pages/services/YouTubeAdvertising')),
  SocialMediaAdvertisingSydney: lazy(() => import('../pages/services/SocialMediaAdvertisingSydney')),
  SocialMediaAdvertisingMelbourne: lazy(() => import('../pages/services/SocialMediaAdvertisingMelbourne')),
  SocialMediaAdvertisingBrisbane: lazy(() => import('../pages/services/SocialMediaAdvertisingBrisbane')),
  SocialMediaAdvertisingAdelaide: lazy(() => import('../pages/services/SocialMediaAdvertisingAdelaide')),
  FacebookAdsSydney: lazy(() => import('../pages/services/FacebookAdsSydney')),
  FacebookAdsMelbourne: lazy(() => import('../pages/services/FacebookAdsMelbourne')),
  FacebookAdsBrisbane: lazy(() => import('../pages/services/FacebookAdsBrisbane')),
  FacebookAdsPerth: lazy(() => import('../pages/services/FacebookAdsPerth')),
  FacebookAdsAdelaide: lazy(() => import('../pages/services/FacebookAdsAdelaide')),
  FacebookAdsHobart: lazy(() => import('../pages/services/FacebookAdsHobart')),
  FacebookAdsGoldCoast: lazy(() => import('../pages/services/FacebookAdsGoldCoast')),
  FacebookAdsCanberra: lazy(() => import('../pages/services/FacebookAdsCanberra')),
  FacebookAdsNewcastle: lazy(() => import('../pages/services/FacebookAdsNewcastle')),
  FacebookAdsDarwin: lazy(() => import('../pages/services/FacebookAdsDarwin')),
  FacebookAdsLaunceston: lazy(() => import('../pages/services/FacebookAdsLaunceston')),
  FacebookAdsBallarat: lazy(() => import('../pages/services/FacebookAdsBallarat')),
};

// Service pages - Other Services
export const otherServiceRoutes = {
  WebsiteDesign: lazy(() => import('../pages/services/WebsiteDesign')),
  WebsiteDesignAndDevelopment: lazy(() => import('../pages/services/WebsiteDesignAndDevelopment')),
  WebDesignSydney: lazy(() => import('../pages/services/WebDesignSydney')),
  WebDesignMelbourne: lazy(() => import('../pages/services/WebDesignMelbourne')),
  WebDesignBrisbane: lazy(() => import('../pages/services/WebDesignBrisbane')),
  WebDesignPerth: lazy(() => import('../pages/services/WebDesignPerth')),
  WebDesignAdelaide: lazy(() => import('../pages/services/WebDesignAdelaide')),
  WebDesignHobart: lazy(() => import('../pages/services/WebDesignHobart')),
  WebDesignGoldCoast: lazy(() => import('../pages/services/WebDesignGoldCoast')),
  WebDesignCanberra: lazy(() => import('../pages/services/WebDesignCanberra')),
  WebDesignNewcastle: lazy(() => import('../pages/services/WebDesignNewcastle')),
  WebDesignDarwin: lazy(() => import('../pages/services/WebDesignDarwin')),
  WebDesignLaunceston: lazy(() => import('../pages/services/WebDesignLaunceston')),
  WebDesignBallarat: lazy(() => import('../pages/services/WebDesignBallarat')),
  FunnelDevelopment: lazy(() => import('../pages/services/FunnelDevelopment')),
  MarketingConsulting: lazy(() => import('../pages/services/MarketingConsulting')),
  EmailMarketing: lazy(() => import('../pages/services/EmailMarketing')),
  EmailMarketingAgency: lazy(() => import('../pages/services/EmailMarketingAgency')),
  EcommerceAgency: lazy(() => import('../pages/services/EcommerceAgency')),
  InfluencerAgency: lazy(() => import('../pages/services/InfluencerAgency')),
  OnlineMarketingCompanySydney: lazy(() => import('../pages/services/OnlineMarketingCompanySydney')),
  OnlineMarketingCompanyMelbourne: lazy(() => import('../pages/services/OnlineMarketingCompanyMelbourne')),
  OnlineMarketingCompanyBrisbane: lazy(() => import('../pages/services/OnlineMarketingCompanyBrisbane')),
  OnlineMarketingCompanyPerth: lazy(() => import('../pages/services/OnlineMarketingCompanyPerth')),
  OnlineMarketingCompanyAdelaide: lazy(() => import('../pages/services/OnlineMarketingCompanyAdelaide')),
  OnlineMarketingCompanyHobart: lazy(() => import('../pages/services/OnlineMarketingCompanyHobart')),
  OnlineMarketingCompanyGoldCoast: lazy(() => import('../pages/services/OnlineMarketingCompanyGoldCoast')),
  OnlineMarketingCompanyCanberra: lazy(() => import('../pages/services/OnlineMarketingCompanyCanberra')),
  OnlineMarketingCompanyNewcastle: lazy(() => import('../pages/services/OnlineMarketingCompanyNewcastle')),
  OnlineMarketingCompanyDarwin: lazy(() => import('../pages/services/OnlineMarketingCompanyDarwin')),
  OnlineMarketingCompanyLaunceston: lazy(() => import('../pages/services/OnlineMarketingCompanyLaunceston')),
};

// Industry pages - Medical
export const medicalIndustryRoutes = {
  Dermatologists: lazy(() => import('../pages/industries/Dermatologists')),
  Dentists: lazy(() => import('../pages/industries/Dentists')),
  CosmeticDentists: lazy(() => import('../pages/industries/CosmeticDentists')),
  PediatricDentists: lazy(() => import('../pages/industries/PediatricDentists')),
  FamilyDentists: lazy(() => import('../pages/industries/FamilyDentists')),
  Orthodontists: lazy(() => import('../pages/industries/Orthodontists')),
  DentalImplants: lazy(() => import('../pages/industries/DentalImplants')),
  CosmeticSurgeons: lazy(() => import('../pages/industries/CosmeticSurgeons')),
  PlasticSurgeons: lazy(() => import('../pages/industries/PlasticSurgeons')),
  CosmeticClinics: lazy(() => import('../pages/industries/CosmeticClinics')),
  FertilityClinics: lazy(() => import('../pages/industries/FertilityClinics')),
  Ophthalmologists: lazy(() => import('../pages/industries/Ophthalmologists')),
  Healthcare: lazy(() => import('../pages/industries/Healthcare')),
  PharmaceuticalCompanies: lazy(() => import('../pages/industries/PharmaceuticalCompanies')),
};

// Industry pages - Professional Services
export const professionalIndustryRoutes = {
  Lawyers: lazy(() => import('../pages/industries/Lawyers')),
  FamilyLawyers: lazy(() => import('../pages/industries/FamilyLawyers')),
  ConveyancingLawyers: lazy(() => import('../pages/industries/ConveyancingLawyers')),
  ImmigrationLawyers: lazy(() => import('../pages/industries/ImmigrationLawyers')),
  PersonalInjuryLawyers: lazy(() => import('../pages/industries/PersonalInjuryLawyers')),
  CriminalDefenseLawyers: lazy(() => import('../pages/industries/CriminalDefenseLawyers')),
  AccountingFirms: lazy(() => import('../pages/industries/AccountingFirms')),
  ArchitectureFirms: lazy(() => import('../pages/industries/ArchitectureFirms')),
  InsuranceAgents: lazy(() => import('../pages/industries/InsuranceAgents')),
  ProfessionalServices: lazy(() => import('../pages/industries/ProfessionalServices')),
};

// Industry pages - Home Services
export const homeServicesIndustryRoutes = {
  Plumbers: lazy(() => import('../pages/industries/Plumbers')),
  Electricians: lazy(() => import('../pages/industries/Electricians')),
  HVACContractors: lazy(() => import('../pages/industries/HVACContractors')),
  RoofingCompanies: lazy(() => import('../pages/industries/RoofingCompanies')),
  LandscapingCompanies: lazy(() => import('../pages/industries/LandscapingCompanies')),
};

// Industry pages - Real Estate & Business
export const businessIndustryRoutes = {
  RealEstateAgents: lazy(() => import('../pages/industries/RealEstateAgents')),
  LuxuryRealEstate: lazy(() => import('../pages/industries/LuxuryRealEstate')),
  CommercialRealEstate: lazy(() => import('../pages/industries/CommercialRealEstate')),
  SaasCompanies: lazy(() => import('../pages/industries/SaasCompanies')),
  EnterpriseSoftware: lazy(() => import('../pages/industries/EnterpriseSoftware')),
  FranchiseBusinesses: lazy(() => import('../pages/industries/FranchiseBusinesses')),
};
