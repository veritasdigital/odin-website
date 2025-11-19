import { Helmet } from "react-helmet";
import { 
  getCompleteServiceSchema, 
  getLocationServiceSchema,
  getFAQSchema,
  getBreadcrumbSchema,
  getWebPageSchema
} from "@/utils/schemaMarkup";

interface ServiceSchemaProps {
  serviceName: string;
  serviceType: string;
  description: string;
  url: string;
  city?: string;
  benefits?: string[];
  features?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
  pricing?: {
    minPrice?: string;
    maxPrice?: string;
    priceCurrency?: string;
  };
}

/**
 * ServiceSchema Component
 * 
 * Automatically generates comprehensive JSON-LD structured data for service pages.
 * Supports both location-specific and general service pages.
 * 
 * @example
 * <ServiceSchema
 *   serviceName="SEO Services Sydney"
 *   serviceType="Search Engine Optimization"
 *   description="Expert SEO services in Sydney..."
 *   url="/services/sydney-seo"
 *   city="Sydney"
 *   benefits={["Increased traffic", "Higher rankings"]}
 *   features={["Technical SEO", "Content optimization"]}
 *   faqs={[{ question: "What is SEO?", answer: "..." }]}
 * />
 */
export const ServiceSchema = ({
  serviceName,
  serviceType,
  description,
  url,
  city,
  benefits,
  features,
  faqs,
  breadcrumbs,
  pricing
}: ServiceSchemaProps) => {
  // Generate appropriate service schema based on whether it's location-specific
  const serviceSchema = city 
    ? getLocationServiceSchema({
        serviceName,
        serviceType,
        city,
        description,
        url
      })
    : getCompleteServiceSchema({
        serviceName,
        serviceType,
        description,
        url,
        benefits,
        features,
        pricing
      });

  // Generate FAQ schema if FAQs provided
  const faqSchema = faqs && faqs.length > 0 ? getFAQSchema(faqs) : null;

  // Generate breadcrumb schema if breadcrumbs provided
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 
    ? getBreadcrumbSchema(breadcrumbs) 
    : null;

  // Generate webpage schema
  const webPageSchema = getWebPageSchema(
    serviceName,
    description,
    `https://odindigital.com.au${url}`,
    breadcrumbs
  );

  return (
    <Helmet>
      {/* Service Schema */}
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}

      {/* FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* WebPage Schema */}
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
    </Helmet>
  );
};
