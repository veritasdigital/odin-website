# Schema Migration Guide: Service to ProfessionalService

## Overview
This document outlines the migration from generic `Service` schema to `ProfessionalService` schema with aggregateRating for all service and industry pages.

## Changes Required

### 1. Import the Schema Utilities
Add to the top of each file:
```typescript
import { getProfessionalServiceSchema, getFAQSchema, getOrganizationSchema } from "@/utils/schemaMarkup";
```

### 2. Replace Manual Schema with Utility Functions

**BEFORE:**
```typescript
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Odin Digital",
      // ... lots of manual organization schema
    },
    {
      "@type": "Service",  // ← Change this to ProfessionalService
      "serviceType": "...",
      "provider": { ... },
      "areaServed": { ... },
      "description": "..."
      // Missing aggregateRating! ← This is critical
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        // ...
      }))
    }
  ]
};
```

**AFTER:**
```typescript
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    getProfessionalServiceSchema(
      "Service Name - Odin Digital",
      "Service description",
      "/url-path",
      areaServed // optional - can be string like "Sydney" or object
    ),
    getFAQSchema(faqs) // if FAQs exist on the page
  ]
};
```

## Files to Update

### Service Pages (src/pages/services/)
- [x] YouTubeAdvertising.tsx ✅
- [ ] GoogleAdsCanberra.tsx
- [ ] GoogleAdsSydney.tsx
- [ ] GoogleAdsBrisbane.tsx
- [ ] GoogleAdsHobart.tsx
- [ ] GoogleAdsDarwin.tsx
- [ ] GoogleAdsAdelaide.tsx
- [ ] GoogleAdsPerth.tsx
- [ ] GoogleAdsBallarat.tsx
- [ ] GoogleAdsNewcastle.tsx
- [ ] GoogleAdsLaunceston.tsx
- [ ] GoogleAdsGoldCoast.tsx
- [ ] GoogleAdsMelbourne.tsx
- [ ] FacebookAdsSydney.tsx
- [ ] FacebookAdsBrisbane.tsx
- [ ] FacebookAdsMelbourne.tsx
- [ ] FacebookAdsAdelaide.tsx
- [ ] FacebookAdsCanberra.tsx
- [ ] FacebookAdsDarwin.tsx
- [ ] FacebookAdsPerth.tsx
- [ ] FacebookAdsGoldCoast.tsx
- [ ] FacebookAdsHobart.tsx
- [ ] FacebookAdsLaunceston.tsx
- [ ] FacebookAdsNewcastle.tsx
- [ ] FacebookAdsBallarat.tsx
- [ ] FacebookAdvertising.tsx
- [ ] SEO.tsx
- [ ] SEOAgency.tsx
- [ ] LocalSEO.tsx
- [ ] SydneySEO.tsx
- [ ] MelbourneSEO.tsx
- [ ] BrisbaneSEO.tsx
- [ ] AdelaideSEO.tsx
- [ ] CanberraSEO.tsx
- [ ] PerthSEO.tsx
- [ ] DarwinSEO.tsx
- [ ] HobartSEO.tsx
- [ ] LauncestonSEO.tsx
- [ ] BallaratSEO.tsx
- [ ] NewcastleSEO.tsx
- [ ] GoldCoastSEO.tsx
- [ ] SEONewcastle.tsx
- [ ] WebsiteDesign.tsx
- [ ] WebsiteDesignAndDevelopment.tsx
- [ ] WebDesignSydney.tsx
- [ ] WebDesignMelbourne.tsx
- [ ] WebDesignBrisbane.tsx
- [ ] WebDesignAdelaide.tsx
- [ ] WebDesignCanberra.tsx
- [ ] WebDesignPerth.tsx
- [ ] WebDesignDarwin.tsx
- [ ] WebDesignHobart.tsx
- [ ] WebDesignLaunceston.tsx
- [ ] WebDesignBallarat.tsx
- [ ] WebDesignNewcastle.tsx
- [ ] WebDesignGoldCoast.tsx
- [ ] GoogleAds.tsx
- [ ] GoogleAdsManagement.tsx
- [ ] PPCAgency.tsx
- [ ] PPCManagement.tsx
- [ ] SocialMedia.tsx
- [ ] SocialMediaAdvertising.tsx
- [ ] SocialMediaAdvertisingAdelaide.tsx
- [ ] SocialMediaAdvertisingBrisbane.tsx
- [ ] SocialMediaAdvertisingSydney.tsx
- [ ] SocialMediaAdvertisingMelbourne.tsx
- [ ] InstagramAdvertising.tsx
- [ ] LinkedInAdvertising.tsx
- [ ] TikTokAdvertising.tsx
- [ ] EcommerceAgency.tsx
- [ ] EcommerceSEO.tsx
- [ ] EmailMarketing.tsx
- [ ] EmailMarketingAgency.tsx
- [ ] FunnelDevelopment.tsx
- [ ] InfluencerAgency.tsx
- [ ] MarketingConsulting.tsx
- [ ] OnlineMarketingCompanyAdelaide.tsx
- [ ] OnlineMarketingCompanyBrisbane.tsx
- [ ] OnlineMarketingCompanyCanberra.tsx
- [ ] OnlineMarketingCompanyDarwin.tsx
- [ ] OnlineMarketingCompanyGoldCoast.tsx
- [ ] OnlineMarketingCompanyHobart.tsx
- [ ] OnlineMarketingCompanyLaunceston.tsx
- [ ] OnlineMarketingCompanyMelbourne.tsx
- [ ] OnlineMarketingCompanyNewcastle.tsx
- [ ] OnlineMarketingCompanyPerth.tsx
- [ ] OnlineMarketingCompanySydney.tsx
- [ ] WhiteLabelSEO.tsx

### Industry Pages (src/pages/industries/)
- [ ] InsuranceAgents.tsx
- [ ] Lawyers.tsx
- [ ] Dermatologists.tsx
- [ ] AccountingFirms.tsx
- [ ] ArchitectureFirms.tsx
- [ ] ConveyancingLawyers.tsx
- [ ] CosmeticClinics.tsx
- [ ] CosmeticDentists.tsx
- [ ] CosmeticSurgeons.tsx
- [ ] CriminalDefenseLawyers.tsx
- [ ] DentalImplants.tsx
- [ ] Dentists.tsx
- [ ] Electricians.tsx
- [ ] FamilyDentists.tsx
- [ ] FamilyLawyers.tsx
- [ ] FertilityClinics.tsx
- [ ] HVACContractors.tsx
- [ ] ImmigrationLawyers.tsx
- [ ] LandscapingCompanies.tsx
- [ ] Ophthalmologists.tsx
- [ ] Orthodontists.tsx
- [ ] PediatricDentists.tsx
- [ ] PersonalInjuryLawyers.tsx
- [ ] PlasticSurgeons.tsx
- [ ] Plumbers.tsx
- [ ] RealEstateAgents.tsx
- [ ] RoofingCompanies.tsx

## Key Benefits

1. **ProfessionalService Schema**: More specific schema type for professional services
2. **AggregateRating Included**: Automatically includes 4.9 rating with 283 reviews
3. **Code Consistency**: All pages use same utility functions
4. **Easier Maintenance**: Changes to schema can be made in one place
5. **SEO Improvement**: Better structured data for search engines

## Example Migration

### Before (GoogleAdsCanberra.tsx):
```typescript
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "Organization",
    "name": "Odin Digital",
    // ... manual schema
  }, {
    "@type": "Service",  // Wrong type
    "serviceType": "PPC Management",
    // ... no aggregateRating
  }]
};
```

### After (GoogleAdsCanberra.tsx):
```typescript
import { getProfessionalServiceSchema, getFAQSchema, getOrganizationSchema } from "@/utils/schemaMarkup";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    getProfessionalServiceSchema(
      "Google Ads Management Canberra - Odin Digital",
      "Expert Pay-Per-Click (PPC) and Google Ads management services for businesses in Canberra, ACT, focusing on maximum Return on Ad Spend (ROAS).",
      "/google-ads-canberra",
      { "@type": "City", "name": "Canberra" }
    ),
    getFAQSchema(faqs)
  ]
};
```

## Validation
After migration, validate schema at: https://validator.schema.org/
