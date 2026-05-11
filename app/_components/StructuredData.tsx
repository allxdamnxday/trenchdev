/**
 * Organization + Service JSON-LD. Inlined so it ships on the static HTML.
 * No claims about credentials Braden doesn't have — sticks to facts in positioning.md.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://trenchdev.com/#org",
        name: "Trench Dev",
        url: "https://trenchdev.com",
        description:
          "AI automation for SMB construction. One-week workflow audits and automation builds for subcontractors and specialty contractors in Southern California.",
        founder: {
          "@type": "Person",
          name: "Braden Freeman",
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Southern California",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "braden@trenchdev.com",
        },
      },
      {
        "@type": "Service",
        "@id": "https://trenchdev.com/#audit",
        name: "AI Workflow Audit",
        serviceType: "Process automation consulting",
        provider: { "@id": "https://trenchdev.com/#org" },
        description:
          "One-week audit of 3–5 back-office workflows for SMB construction subcontractors. Includes an ROI-ranked roadmap and one quick-win automation shipped by end of week.",
        offers: {
          "@type": "Offer",
          price: "3500",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        audience: {
          "@type": "BusinessAudience",
          audienceType:
            "SMB construction subcontractors ($2M–$20M revenue)",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
