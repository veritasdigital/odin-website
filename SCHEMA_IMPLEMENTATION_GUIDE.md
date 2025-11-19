# Service Page Schema Implementation Guide

## Overview

All service pages now have comprehensive JSON-LD structured data to enhance SEO and enable rich snippets in search results.

## Implementation

### 1. Using the ServiceSchema Component

Import and use the `ServiceSchema` component on all service pages:

```tsx
import { ServiceSchema } from "@/components/ServiceSchema";

// In your component's return statement, add:
<ServiceSchema
  serviceName="Your Service Name"
  serviceType="Service Category"
  description="Detailed service description..."
  url="/services/your-service"
  benefits={["Benefit 1", "Benefit 2"]}
  features={["Feature 1", "Feature 2"]}
  faqs={faqs}
  breadcrumbs={breadcrumbs}
  pricing={{
    minPrice: "2000",
    maxPrice: "15000",
    priceCurrency: "AUD"
  }}
/>
```

### 2. For Location-Specific Services

Add the `city` parameter for location-based schema:

```tsx
<ServiceSchema
  serviceName="SEO Services Sydney"
  serviceType="Search Engine Optimization"
  city="Sydney"
  description="..."
  url="/services/sydney-seo"
  faqs={faqs}
  breadcrumbs={breadcrumbs}
/>
```

## Schema Types Generated

The ServiceSchema component automatically generates:

1. **ProfessionalService Schema** - Main service information
2. **LocalBusiness Schema** - For location-specific pages (when city is provided)
3. **FAQPage Schema** - When FAQs are provided
4. **BreadcrumbList Schema** - Site navigation structure
5. **WebPage Schema** - Page-level metadata

## Benefits

### SEO Advantages:
- **Rich Snippets** - Enhanced search results with ratings, pricing, and FAQs
- **Knowledge Graph** - Better chance of appearing in Google's Knowledge Panel
- **Local Pack** - Improved local search visibility for city-specific pages
- **Voice Search** - Optimized for voice assistant queries
- **Featured Snippets** - FAQ schema helps capture position zero

### Technical Benefits:
- **Structured Data** - Machine-readable content for search engines
- **Entity Recognition** - Helps Google understand relationships between services, locations, and organization
- **Click-Through Rate** - Rich snippets typically increase CTR by 20-30%

## Required Fields

### Minimum Required:
- `serviceName` - The service title
- `serviceType` - Category/type of service
- `description` - Detailed description
- `url` - Page URL path

### Recommended:
- `benefits` - Array of service benefits
- `features` - Array of service features
- `faqs` - Array of questions and answers
- `breadcrumbs` - Navigation hierarchy
- `pricing` - Price range information

### Optional for Location Pages:
- `city` - Enables LocalBusiness schema with geo-coordinates

## Implementation Status

### Completed:
- ✅ Schema utility functions created
- ✅ ServiceSchema component created
- ✅ SEO main service page updated
- ✅ Implementation guide created

### To Do:
- [ ] Add schema to all hub service pages (Google Ads, Facebook Ads, Web Design, etc.)
- [ ] Add schema to all location-specific pages (Sydney SEO, Melbourne SEO, etc.)
- [ ] Add schema to industry pages
- [ ] Test with Google Rich Results Test
- [ ] Monitor Search Console for rich snippet appearances

## Testing

Test your schema implementation:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema Markup Validator**: https://validator.schema.org/
3. **Google Search Console** - Monitor for rich result errors

## Example Implementations

### Hub Service Page (e.g., /services/seo)

```tsx
<ServiceSchema
  serviceName="SEO Services Australia"
  serviceType="Search Engine Optimization"
  description="Professional SEO services..."
  url="/services/seo"
  benefits={["150% Traffic Increase", "Top 3 Rankings"]}
  features={["Technical SEO", "Content Strategy", "Link Building"]}
  faqs={faqList}
  breadcrumbs={[
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "SEO Services", url: "/services/seo" }
  ]}
  pricing={{
    minPrice: "2000",
    maxPrice: "15000",
    priceCurrency: "AUD"
  }}
/>
```

### Location Service Page (e.g., /services/sydney-seo)

```tsx
<ServiceSchema
  serviceName="SEO Services Sydney"
  serviceType="Search Engine Optimization"
  city="Sydney"
  description="Expert SEO services in Sydney..."
  url="/services/sydney-seo"
  faqs={sydneyFaqList}
  breadcrumbs={[
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "SEO", url: "/services/seo" },
    { name: "Sydney SEO", url: "/services/sydney-seo" }
  ]}
/>
```

## Schema Markup Features

### Organization Schema
- Company information
- Contact details
- Service areas
- Aggregate ratings
- Social media profiles

### Service Schema
- Service name and type
- Detailed descriptions
- Pricing information
- Service benefits and features
- Area served (city/country)
- Provider information

### LocalBusiness Schema (Location Pages)
- Geographic coordinates
- Local address
- Opening hours
- Phone number
- Service area
- Ratings and reviews

### FAQ Schema
- Questions and answers
- Eligible for FAQ rich snippets
- Voice search optimization

### Breadcrumb Schema
- Site navigation hierarchy
- Improved SERP breadcrumbs
- Better user experience

## Best Practices

1. **Keep Descriptions Accurate** - Schema must match visible page content
2. **Update Regularly** - Keep pricing and information current
3. **Don't Spam Keywords** - Use natural language
4. **Validate Before Deploy** - Always test with Google's tools
5. **Monitor Performance** - Track rich snippet appearances in Search Console

## Resources

- [Schema.org Documentation](https://schema.org/)
- [Google Search Central - Structured Data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Rich Results Test](https://search.google.com/test/rich-results)
