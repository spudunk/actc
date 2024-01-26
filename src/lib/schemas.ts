import { site } from "$lib";
import type { Organization, WebSite, WithContext, Thing } from "schema-dts";

export type Schema = Thing | WithContext<Thing>;

export function serializeSchema(thing: Schema) {
  return `<script type="application/ld+json">${JSON.stringify(
    thing,
    null,
    2
  )}</script>`;
}

export const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.company.name,
  url: site.url,
};

export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${site.url}#organization`,
  url: site.url,
  name: site.company.name,
  description: site.description,
  areaServed: site.company.areaServed,
  address: site.company.address,
  email: site.company.email,
  telephone: site.company.telephone,
  sameAs: site.socials.map((social) => social.link),
  logo: `${site.url}/logo.svg`,
  image: `${site.url}/logo.svg`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
  },
  foundingDate: site.company.foundingDate,
  priceRange: site.company.priceRange,
};
