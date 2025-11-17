# Content Clusters Implementation Progress

## ✅ Completed
1. Created `/src/utils/contentClusters.ts` - Hub-spoke relationship management
2. Created `/src/components/RelatedLocations.tsx` - Location cross-linking component
3. Created `/src/components/HubPageLocations.tsx` - Hub page spoke listings component
4. Updated all 4 hub pages with spoke listings:
   - `/services/seo` - SEO Services hub
   - `/services/google-ads` - Google Ads hub
   - `/services/social-media-advertising` - Social Media hub
   - `/our-industries` - Industries hub

## 🔄 In Progress - Spoke Page Updates

### SEO Location Pages (12 cities)
Need to add to each page:
- Link to SEO Services hub with anchor text "SEO services"
- Related locations component (4 other cities)
- Related services (Google Ads, Facebook Ads, Web Design)

### Google Ads Location Pages (12 cities)
Need to add to each page:
- Link to Google Ads hub with anchor text "Google Ads services"
- Related locations component (4 other cities)
- Related services (SEO, Facebook Ads, Web Design)

### Facebook Ads Location Pages (12 cities)
Need to add to each page:
- Link to Social Media hub with anchor text "social media advertising"
- Related locations component (4 other cities)
- Related services (SEO, Google Ads, Web Design)

### Web Design Location Pages (12 cities)
Need to add to each page:
- Link to Web Design hub with anchor text "web design services"
- Related locations component (4 other cities)
- Related services (SEO, Google Ads, Facebook Ads)

### Online Marketing Location Pages (11 cities)
Already have some internal linking, verify and enhance

### Industry Pages (16+ pages)
Need to add to each page:
- Link to Industries hub with anchor text "industries we serve"
- Related industries (2-3 similar industries)
- Related services (SEO, Google Ads for that industry)

## Implementation Pattern for Spoke Pages

### Location Pattern:
```tsx
// Add to imports
import { RelatedLocations } from "@/components/RelatedLocations";
import { getRelatedLocations, getRelatedServices, getHubForService } from "@/utils/contentClusters";

// In component body
const hub = getHubForService("SEO"); // or "Google Ads", "Facebook Ads", "Web Design"
const relatedLocations = getRelatedLocations("Melbourne", "SEO");
const relatedServices = getRelatedServices("SEO", "Melbourne");

// Add contextual link in first paragraph
<p>Looking for expert <Link to={hub.url}>{hub.anchorText}</Link> in Melbourne?</p>

// Add before FAQ section
<RelatedServices services={relatedServices} />
<RelatedLocations locations={relatedLocations} />
```

### Industry Pattern:
```tsx
// Add to imports
import { industriesCluster } from "@/utils/contentClusters";

// Add contextual link in introduction
<p>We specialize in digital marketing for {industry}. Explore all <Link to="/our-industries">industries we serve</Link>.</p>

// Add related industries and services before FAQ
```

## Next Steps
1. Update all SEO location pages (12 pages)
2. Update all Google Ads location pages (12 pages)
3. Update all Facebook Ads location pages (12 pages)
4. Update all Web Design location pages (12 pages)
5. Update all Online Marketing location pages (11 pages)
6. Update all Industry pages (16+ pages)
7. Create CONTENT_CLUSTERS_IMPLEMENTATION.md tracking document
