type ProductLine = {
  name: string;
  description: string;
  catalogs?: {
    title: string;
    link: string;
  }[];
  referral?: string;
  logo?: string;
  logoAlt?: string;
};

type Company = {
  name: string;
  legalName: string;
  email: string;
  areaServed: string;
  telephone: string;
  telephoneText: string;
  address: string;
  sosLink: string;
  priceRange: string;
  foundingDate?: string;
};

type Social = {
  id: "google" | "yelp" | "facebook" | "googleMaps" | "instagram" | "tiktok";
  name: string;
  icon: string;
  iconAlt: string;
  link: string;
  iconLabel: string;
  reviewLink?: string;
  reviewText?: string;
};

export type SiteData = {
  url: string;
  title: string;
  description: string;
  heading: string;
  subheading: string;
  about: string[];
  services: string[];
  products: {
    description: string;
    lines: ProductLine[];
  };
  company: Company;
  license: { text: string; url: string };
  socials: Social[];
};

type LocationPage = {
  name: string;
  heading: string;
  title: string;
  description: string;
  areaServed: string;
};
export type Locations = { [key: string]: LocationPage };

type Image = { id: string; alt: string; };
export type ImageGallery = {
  basePath: string;
  images: Image[];
};
