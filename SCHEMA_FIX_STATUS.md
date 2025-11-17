# Schema Markup Migration Status

## Objective
Replace all Review, Service, and Organization schema on service pages with a single ProfessionalService schema containing aggregateRating.

## Completed Pages
- ✅ src/pages/industries/Dentists.tsx
- ✅ src/pages/industries/InsuranceAgents.tsx
- ✅ src/pages/industries/Dermatologists.tsx
- ✅ src/pages/industries/Lawyers.tsx
- ✅ src/pages/services/YouTubeAdvertising.tsx
- ✅ src/pages/services/GoogleAdsCanberra.tsx
- ✅ src/pages/services/GoogleAdsHobart.tsx
- ✅ src/pages/services/GoogleAdsSydney.tsx
- ✅ src/pages/services/GoogleAdsBrisbane.tsx

## Required ProfessionalService Schema Structure

```typescript
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://odindigital.com.au/[PAGE_URL]#professionalservice",
  "name": "[Service Name]",
  "description": "[Service Description]",
  "url": "https://odindigital.com.au/[PAGE_URL]",
  "provider": {
    "@id": "https://odindigital.com.au/#organization"
  },
  "areaServed": {
    "@type": "City", // or "Country" for national pages
    "name": "[City Name]", // or "Australia" for national
    "containedIn": { // only for city pages
      "@type": "State",
      "name": "[State Name]"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9", // From testimonials on page
    "reviewCount": "283", // From testimonials on page
    "bestRating": "5",
    "worstRating": "1"
  },
  "priceRange": "$$" // or "$$$" for Sydney
};
```

## Remaining Pages to Update

### Industries (~/20 pages)
- src/pages/industries/AccountingFirms.tsx
- src/pages/industries/ArchitectureFirms.tsx
- src/pages/industries/ConveyancingLawyers.tsx
- src/pages/industries/CosmeticClinics.tsx
- src/pages/industries/CosmeticDentists.tsx
- src/pages/industries/CosmeticSurgeons.tsx
- src/pages/industries/CriminalDefenseLawyers.tsx
- src/pages/industries/DentalImplants.tsx
- src/pages/industries/Electricians.tsx
- src/pages/industries/FamilyDentists.tsx
- src/pages/industries/FamilyLawyers.tsx
- src/pages/industries/FertilityClinics.tsx
- src/pages/industries/HVACContractors.tsx
- src/pages/industries/ImmigrationLawyers.tsx
- src/pages/industries/LandscapingCompanies.tsx
- src/pages/industries/Ophthalmologists.tsx
- src/pages/industries/Orthodontists.tsx
- src/pages/industries/PediatricDentists.tsx
- src/pages/industries/PersonalInjuryLawyers.tsx
- src/pages/industries/PlasticSurgeons.tsx
- src/pages/industries/Plumbers.tsx
- src/pages/industries/RealEstateAgents.tsx
- src/pages/industries/RoofingCompanies.tsx

### Google Ads Location Pages (~15 pages)
- src/pages/services/GoogleAdsAdelaide.tsx
- src/pages/services/GoogleAdsBallarat.tsx
- src/pages/services/GoogleAdsDarwin.tsx
- src/pages/services/GoogleAdsGoldCoast.tsx
- src/pages/services/GoogleAdsLaunceston.tsx
- src/pages/services/GoogleAdsMelbourne.tsx
- src/pages/services/GoogleAdsNewcastle.tsx
- src/pages/services/GoogleAdsPerth.tsx

### Facebook Ads Location Pages (~15 pages)
- src/pages/services/FacebookAdsAdelaide.tsx
- src/pages/services/FacebookAdsBallarat.tsx
- src/pages/services/FacebookAdsBrisbane.tsx
- src/pages/services/FacebookAdsCanberra.tsx
- src/pages/services/FacebookAdsDarwin.tsx
- src/pages/services/FacebookAdsGoldCoast.tsx
- src/pages/services/FacebookAdsHobart.tsx
- src/pages/services/FacebookAdsLaunceston.tsx
- src/pages/services/FacebookAdsMelbourne.tsx
- src/pages/services/FacebookAdsNewcastle.tsx
- src/pages/services/FacebookAdsPerth.tsx
- src/pages/services/FacebookAdsSydney.tsx

### SEO Location Pages (~15 pages)
- src/pages/services/AdelaideSEO.tsx
- src/pages/services/BallaratSEO.tsx
- src/pages/services/BrisbaneSEO.tsx
- src/pages/services/CanberraSEO.tsx
- src/pages/services/DarwinSEO.tsx
- src/pages/services/GoldCoastSEO.tsx
- src/pages/services/HobartSEO.tsx
- src/pages/services/LauncestonSEO.tsx
- src/pages/services/MelbourneSEO.tsx
- src/pages/services/NewcastleSEO.tsx
- src/pages/services/PerthSEO.tsx
- src/pages/services/SydneySEO.tsx

### Web Design Location Pages (~15 pages)
- src/pages/services/WebDesignAdelaide.tsx
- src/pages/services/WebDesignBallarat.tsx
- src/pages/services/WebDesignBrisbane.tsx
- src/pages/services/WebDesignCanberra.tsx
- src/pages/services/WebDesignDarwin.tsx
- src/pages/services/WebDesignGoldCoast.tsx
- src/pages/services/WebDesignHobart.tsx
- src/pages/services/WebDesignLaunceston.tsx
- src/pages/services/WebDesignMelbourne.tsx
- src/pages/services/WebDesignNewcastle.tsx
- src/pages/services/WebDesignPerth.tsx
- src/pages/services/WebDesignSydney.tsx

### National Service Pages (~20 pages)
- src/pages/services/EcommerceAgency.tsx
- src/pages/services/EcommerceSEO.tsx
- src/pages/services/EmailMarketing.tsx
- src/pages/services/EmailMarketingAgency.tsx
- src/pages/services/FacebookAdvertising.tsx
- src/pages/services/GoogleAds.tsx
- src/pages/services/GoogleAdsManagement.tsx
- src/pages/services/InfluencerAgency.tsx
- src/pages/services/InstagramAdvertising.tsx
- src/pages/services/LinkedInAdvertising.tsx
- src/pages/services/LocalSEO.tsx
- src/pages/services/PPCAgency.tsx
- src/pages/services/PPCManagement.tsx
- src/pages/services/SEOAgency.tsx
- src/pages/services/SocialMediaAdvertising.tsx
- src/pages/services/TikTokAdvertising.tsx
- src/pages/services/WebsiteDesignAndDevelopment.tsx
- src/pages/services/WhiteLabelSEO.tsx
- src/pages/services/SocialMedia.tsx (summary only)
- src/pages/services/WebsiteDesign.tsx (summary only)
- src/pages/services/SEO.tsx (summary only)
- src/pages/services/FunnelDevelopment.tsx (summary only)
- src/pages/services/MarketingConsulting.tsx (summary only)

### Online Marketing Company Pages (~10 pages)
- src/pages/services/OnlineMarketingCompanyAdelaide.tsx
- src/pages/services/OnlineMarketingCompanyBrisbane.tsx
- src/pages/services/OnlineMarketingCompanyCanberra.tsx
- src/pages/services/OnlineMarketingCompanyDarwin.tsx
- src/pages/services/OnlineMarketingCompanyGoldCoast.tsx
- src/pages/services/OnlineMarketingCompanyHobart.tsx
- src/pages/services/OnlineMarketingCompanyLaunceston.tsx
- src/pages/services/OnlineMarketingCompanyMelbourne.tsx
- src/pages/services/OnlineMarketingCompanyNewcastle.tsx
- src/pages/services/OnlineMarketingCompanyPerth.tsx
- src/pages/services/OnlineMarketingCompanySydney.tsx

### Social Media Advertising Location Pages (~3 pages)
- src/pages/services/SocialMediaAdvertisingAdelaide.tsx
- src/pages/services/SocialMediaAdvertisingBrisbane.tsx
- src/pages/services/SocialMediaAdvertisingMelbourne.tsx
- src/pages/services/SocialMediaAdvertisingSydney.tsx

## Implementation Notes

1. All existing @graph arrays with Organization, Service, Review, LocalBusiness, WebPage, BreadcrumbList must be removed
2. Replace with single ProfessionalService object
3. aggregateRating values should match testimonials on each page (typically 4.9 / 283)
4. areaServed should be City for location pages, Country for national pages
5. priceRange is typically "$$" except Sydney pages use "$$$"
6. @id format: `https://odindigital.com.au/[PAGE_URL]#professionalservice`

## Validation Checklist

After updating each page, verify:
- ✅ No Organization schema in page (should only be in footer/global)
- ✅ No Service schema
- ✅ No Review schema
- ✅ No LocalBusiness schema
- ✅ Only ProfessionalService schema exists
- ✅ aggregateRating is included with correct values
- ✅ Schema validates at schema.org validator
