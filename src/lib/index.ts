// place files you want to import through the `$lib` alias in this folder.
import type { ImageGallery, SiteData } from "./types";
import yelpIcon from "$lib/icons/yelp_burst.svg";
import facebookIcon from "$lib/icons/facebook.svg";
import googleIcon from "$lib/icons/google.svg";
import googleMapsIcon from "$lib/icons/google-maps.svg";

export const site: SiteData = {
  url: "https://actc.pro",
  title: "A Custom Touch Construction - Portland Home Contractor",
  heading: "The Better Remodel Contractor for Portland and Surrounding Areas",
  subheading: "Proudly improving homes since 1995",
  about: [], // hardcoded to page
  services: [], // hardcoded to page
  products: {
    // hardcoded to page
    description: "",
    lines: [],
  },
  company: {
    name: "A Custom Touch Construction",
    legalName: "A Custom Touch Construction",
    email: "mike@actc.pro",
    areaServed: "Portland, OR",
    telephone: "+19712015990",
    telephoneText: "(971) 201-5990",
    address: "North Plains, OR",
    sosLink:
      "https://egov.sos.state.or.us/br/pkg_web_name_srch_inq.do_name_srch?p_name=&p_regist_nbr=195440293&p_srch=PHASE1&p_print=FALSE&p_entity_status=ACTINA",
    foundingDate: "1995-05-01T00:00:00.000Z",
    priceRange: "$$",
  },
  license: {
    text: "OR LIC No. 112862",
    url: "https://search.ccb.state.or.us/search/search_result.aspx?id=112862",
  },

  description:
    "A Custom Touch Construction - Contractor Specializing in Windows, Doors, Siding, Kitchen, and Bath - Serving Portland and surrounding areas since 1995",
  socials: [
    {
      id: "facebook",
      link: "https://www.facebook.com/profile.php?id=100083274858015",
      name: "Facebook",
      icon: facebookIcon,
      iconAlt: "Facebook Logo",
      iconLabel: "Facebook Business Profile",
    },
    {
      id: "yelp",
      link: "https://www.yelp.com/biz/a-custom-touch-construction-north-plains-2",
      name: "Yelp",
      icon: yelpIcon,
      iconAlt: "Yelp Logo",
      iconLabel: "Yelp Business Profile",
      reviewLink:
        "https://www.yelp.com/biz/a-custom-touch-construction-north-plains-2#reviews",
      reviewText: "Yelp Reviews",
    },
    {
      id: "google",
      link: "https://www.google.com/search?q=a+custom+touch+construction+north+plains+oregon&sca_esv=594646980&sxsrf=AM9HkKkqMoXOEfLK7fnOO5erzKOYaSqQ_Q%3A1703975197858&source=hp&ei=HZmQZZmVMZDk0PEP45Gk8Ag&iflsig=AO6bgOgAAAAAZZCnLUTSHe3eBreqmDA09YNF-jK6KmE0&oq=a+custom+touch+construction+north+plains+&gs_lp=Egdnd3Mtd2l6IilhIGN1c3RvbSB0b3VjaCBjb25zdHJ1Y3Rpb24gbm9ydGggcGxhaW5zICoCCAAyBRAhGKABMgUQIRigATIFECEYoAFIhTlQAFivLnABeACQAQCYAcwBoAHjKaoBBjAuMzEuMbgBA8gBAPgBAvgBAagCCsICBxAjGOoCGCfCAgQQIxgnwgIKECMYgAQYigUYJ8ICERAuGIAEGLEDGIMBGMcBGNEDwgILEAAYgAQYsQMYgwHCAgsQLhiABBjHARjRA8ICDhAuGIAEGIoFGLEDGIMBwgIOEC4YgAQYsQMYxwEY0QPCAgUQLhiABMICDhAuGIAEGLEDGIMBGNQCwgILEC4YgAQYsQMYgwHCAgUQABiABMICCBAuGLEDGIAEwgILEC4YgAQYsQMY1ALCAggQABiABBixA8ICCxAuGIAEGMcBGK8BwgILEC4YrwEYxwEYgATCAgYQABgWGB7CAggQABgWGB4YD8ICCxAAGIAEGIoFGIYDwgIFECEYqwI&sclient=gws-wiz",
      name: "Google",
      icon: googleIcon,
      iconAlt: "Google Logo",
      iconLabel: "Google Business Profile",
      reviewLink:
        "https://www.google.com/search?q=a+custom+touch+construction+north+plains+oregon&sca_esv=594646980&sxsrf=AM9HkKkqMoXOEfLK7fnOO5erzKOYaSqQ_Q%3A1703975197858&source=hp&ei=HZmQZZmVMZDk0PEP45Gk8Ag&iflsig=AO6bgOgAAAAAZZCnLUTSHe3eBreqmDA09YNF-jK6KmE0&oq=a+custom+touch+construction+north+plains+&gs_lp=Egdnd3Mtd2l6IilhIGN1c3RvbSB0b3VjaCBjb25zdHJ1Y3Rpb24gbm9ydGggcGxhaW5zICoCCAAyBRAhGKABMgUQIRigATIFECEYoAFIhTlQAFivLnABeACQAQCYAcwBoAHjKaoBBjAuMzEuMbgBA8gBAPgBAvgBAagCCsICBxAjGOoCGCfCAgQQIxgnwgIKECMYgAQYigUYJ8ICERAuGIAEGLEDGIMBGMcBGNEDwgILEAAYgAQYsQMYgwHCAgsQLhiABBjHARjRA8ICDhAuGIAEGIoFGLEDGIMBwgIOEC4YgAQYsQMYxwEY0QPCAgUQLhiABMICDhAuGIAEGLEDGIMBGNQCwgILEC4YgAQYsQMYgwHCAgUQABiABMICCBAuGLEDGIAEwgILEC4YgAQYsQMY1ALCAggQABiABBixA8ICCxAuGIAEGMcBGK8BwgILEC4YrwEYxwEYgATCAgYQABgWGB7CAggQABgWGB4YD8ICCxAAGIAEGIoFGIYDwgIFECEYqwI&sclient=gws-wiz#lrd=0x48726993c8426b19:0x4a10e8457558261f,1,,,,",
      reviewText: "Google Reviews",
    },
    {
      id: "googleMaps",
      link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x48726993c8426b19:0x4a10e8457558261f?hl=en-US",
      name: "Google Maps",
      icon: googleMapsIcon,
      iconAlt: "Google Maps Logo",
      iconLabel: "Google Maps Location",
    },
  ],
};

export const homeGallery: ImageGallery = {
  basePath: "https://actc.pro/cdn-cgi/imagedelivery/XvH0UEoGmg1LgCBcC8XRgw",
  images: [
    { id: "14071549-580a-4bb1-e204-ddb00e25fc00", alt: "windows complete" },
    { id: "6e4dc7ac-d2fa-4063-bf63-8e931060fb00", alt: "siding complete" },
    { id: "17bc8d88-6700-4fc1-6f40-0951dfb93100", alt: "kitchen stripped" },
    { id: "04a8adc3-4c65-41be-88ea-d1e3ca563d00", alt: "kitchen complete" },
    { id: "e95cf652-8a2b-4daf-af2f-9efd4056b300", alt: "bathroom sinks" },
    
  ],
};

export const kitchenGallery: ImageGallery = {
  basePath: "https://actc.pro/cdn-cgi/imagedelivery/XvH0UEoGmg1LgCBcC8XRgw",
  images: [
    { id: "17bc8d88-6700-4fc1-6f40-0951dfb93100", alt: "kitchen stripped" },
    { id: "04a8adc3-4c65-41be-88ea-d1e3ca563d00", alt: "kitchen complete" },
    { id: "e95cf652-8a2b-4daf-af2f-9efd4056b300", alt: "bathroom sinks" },    

  ]
}

export const windowsGallery: ImageGallery = {
  basePath: "https://actc.pro/cdn-cgi/imagedelivery/XvH0UEoGmg1LgCBcC8XRgw",
  images: [
    { id: "14071549-580a-4bb1-e204-ddb00e25fc00", alt: "windows complete" },

  ]
}

export const sidingGallery: ImageGallery = {
  basePath: "https://actc.pro/cdn-cgi/imagedelivery/XvH0UEoGmg1LgCBcC8XRgw",
  images: [
    { id: "6e4dc7ac-d2fa-4063-bf63-8e931060fb00", alt: "siding complete" },

  ]
}
