import React from 'react';

export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fermi Energy",
    "url": "https://www.fermienergy.com",
    "logo": "https://www.fermienergy.com/img/LOGO.png",
    "founders": [
      {
        "@type": "Person",
        "name": "Zhengrui 'Ray' Xu",
      },
      {
        "@type": "Person",
        "name": "Feng Lin",
      }
    ],
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Blacksburg",
        "addressRegion": "VA",
        "addressCountry": "USA",
        "postalCode": "24060"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "37.2296",
        "longitude": "-80.4139"
      }
    },
    "sameAs": [
      "https://www.linkedin.com/company/fermi-energy"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
