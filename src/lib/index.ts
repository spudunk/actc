// place files you want to import through the `$lib` alias in this folder.
import type { Thing, WithContext, Organization, WebSite } from "schema-dts";

export const site = {
  url: "https://actc.pro/",
  title: "A Custom Touch Construction - Portland Home Contractor",
  company: {
    name: "A Custom Touch Construction",
    email: "mike@actc.pro",
    areaServed: "Portland, OR",
    telephone: "+19712015990",
    telephoneText: "(971) 201-5990",
    address: "North Plains, OR",
    sosLink:
      "https://egov.sos.state.or.us/br/pkg_web_name_srch_inq.do_name_srch?p_name=&p_regist_nbr=195440293&p_srch=PHASE1&p_print=FALSE&p_entity_status=ACTINA",
    foundingDate: "1995-05-01T00:00:00.000Z",
  },
  license: {
    text: "OR LIC No. 112862",
    url: "https://search.ccb.state.or.us/search/search_result.aspx?id=112862",
  },

  description:
    "A Custom Touch Construction - Contractor Specializing in Windows, Doors, Siding, Kitchen, and Bath - Serving Portland and surrounding areas since 1995",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100083274858015",
    yelp: "https://www.yelp.com/biz/a-custom-touch-construction-north-plains-2",
    google:
      "https://www.google.com/search?q=a+custom+touch+construction+north+plains+oregon&sca_esv=594646980&sxsrf=AM9HkKkqMoXOEfLK7fnOO5erzKOYaSqQ_Q%3A1703975197858&source=hp&ei=HZmQZZmVMZDk0PEP45Gk8Ag&iflsig=AO6bgOgAAAAAZZCnLUTSHe3eBreqmDA09YNF-jK6KmE0&oq=a+custom+touch+construction+north+plains+&gs_lp=Egdnd3Mtd2l6IilhIGN1c3RvbSB0b3VjaCBjb25zdHJ1Y3Rpb24gbm9ydGggcGxhaW5zICoCCAAyBRAhGKABMgUQIRigATIFECEYoAFIhTlQAFivLnABeACQAQCYAcwBoAHjKaoBBjAuMzEuMbgBA8gBAPgBAvgBAagCCsICBxAjGOoCGCfCAgQQIxgnwgIKECMYgAQYigUYJ8ICERAuGIAEGLEDGIMBGMcBGNEDwgILEAAYgAQYsQMYgwHCAgsQLhiABBjHARjRA8ICDhAuGIAEGIoFGLEDGIMBwgIOEC4YgAQYsQMYxwEY0QPCAgUQLhiABMICDhAuGIAEGLEDGIMBGNQCwgILEC4YgAQYsQMYgwHCAgUQABiABMICCBAuGLEDGIAEwgILEC4YgAQYsQMY1ALCAggQABiABBixA8ICCxAuGIAEGMcBGK8BwgILEC4YrwEYxwEYgATCAgYQABgWGB7CAggQABgWGB4YD8ICCxAAGIAEGIoFGIYDwgIFECEYqwI&sclient=gws-wiz",
    googleMaps:
      "https://www.google.com/maps/place//data=!4m2!3m1!1s0x48726993c8426b19:0x4a10e8457558261f?hl=en-US",
  },
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
  sameAs: [site.social.facebook, site.social.yelp, site.social.google],
  logo: `${site.url}/logo.svg`,
  image: `${site.url}/logo.svg`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "5",
  },
  foundingDate: site.company.foundingDate,
};

export const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.company.name,
  url: site.url,
};

export function serializeSchema(thing: Schema) {
  return `<script type="application/ld+json">${JSON.stringify(
    thing,
    null,
    2
  )}</script>`;
}

export type Image = { id: string; path: string; alt: string };
export type Schema = Thing | WithContext<Thing>;
