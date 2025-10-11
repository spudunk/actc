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
  aboutCopy: [], // hardcoded to page
  servicesCopy: [], // hardcoded to page
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
      link: "https://share.google/mNEMIP1KYjx2l2iV5",
      name: "Google",
      icon: googleIcon,
      iconAlt: "Google Logo",

      iconLabel: "Google Business Profile",
      reviewLink: "https://share.google/mNEMIP1KYjx2l2iV5",
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

const imageBasePath = "https://actc.pro/cdn-cgi/imagedelivery/XvH0UEoGmg1LgCBcC8XRgw";
// Home / Index page
export const homeGallery: ImageGallery = {
  basePath: imageBasePath,
  images: [
    {
      id: "7ce2479f-1270-408e-f30c-b29e8f1edc00",
      alt: "actc_kitchen00004.jpg",
      filename: "actc_kitchen00004.jpg",
    },
    {
      id: "cb913a2d-0214-4b3b-956a-6e91585c2700",
      alt: "actc_kitchen00003.jpg",
      filename: "actc_kitchen00003.jpg",
    },
    {
      id: "478097aa-f248-46dc-f67e-3c1e2d961600",
      alt: "actc_kitchen00001.jpg",
      filename: "actc_kitchen00001.jpg",
    },
    {
      id: "208b2fc7-ed8e-4253-6899-0d5c7f4ce400",
      alt: "actc_doors00004.jpg",
      filename: "actc_doors00004.jpg",
    },
    {
      id: "693695ee-4b01-4578-917b-61e9bce6d500",
      alt: "actc_windows00023.jpg",
      filename: "actc_windows00023.jpg",
    },
    {
      id: "6583c507-d2e8-4742-d170-0fbd60dad100",
      alt: "actc_windows00024.jpg",
      filename: "actc_windows00024.jpg",
    },
    {
      id: "72cbd524-717e-49e9-5f02-ca1b0d311d00",
      alt: "actc_siding00007.jpg",
      filename: "actc_siding00007.jpg",
    },
    {
      id: "493a90cc-bc62-4909-aebe-59186bfcd900",
      alt: "actc_siding00011.jpg",
      filename: "actc_siding00011.jpg",
    },
    {
      id: "ee853b84-b6c1-4044-1534-557b7ddb2100",
      alt: "actc_siding00010.jpg",
      filename: "actc_siding00010.jpg",
    },
    {
      id: "a9ce9e06-1ea7-42b7-fc83-999b1595ce00",
      alt: "actc_flooring00001.jpg",
      filename: "actc_flooring00001.jpg",
    },
    {
      id: "069ef7fe-0761-4dfd-f3e7-f2935f63b300",
      alt: "actc_decks00002.jpg",
      filename: "actc_decks00002.jpg",
    },
    {
      id: "320e4048-6c40-4953-b88a-88d5f2b1f700",
      alt: "actc_decks00005.jpg",
      filename: "actc_decks00005.jpg",
    },
    {
      id: "7a4fe2fc-599e-40ab-1a20-7114196d3d00",
      alt: "actc_decks00006.jpg",
      filename: "actc_decks00006.jpg",
    },
  ],
};

// Kitchen & Bath
export const kitchenGallery: ImageGallery = {
  basePath: imageBasePath,
  images: [
    {
      id: "31381092-e8af-4c66-684d-ab8bdae8da00",
      alt: "actc_bath00001.jpg",
      filename: "actc_bath00001.jpg",
    },
    {
      id: "1a511174-d712-4c22-ab75-5b507de91b00",
      alt: "actc_bath00002.jpg",
      filename: "actc_bath00002.jpg",
    },
    {
      id: "52b1d4f1-3784-41cb-ea73-bcdf3eaab400",
      alt: "actc_bath00003.jpg",
      filename: "actc_bath00003.jpg",
    },
    {
      id: "837f247b-b040-4e91-c9ef-0e6b973bb500",
      alt: "actc_bath00004.jpg",
      filename: "actc_bath00004.jpg",
    },
    {
      id: "7576f38f-c0b3-41ed-11bd-64b653c3f700",
      alt: "actc_bath00005.jpg",
      filename: "actc_bath00005.jpg",
    },
    {
      id: "371b898f-8ceb-48c6-9e52-8c8769d1d900",
      alt: "actc_bath00006.jpg",
      filename: "actc_bath00006.jpg",
    },
    {
      id: "8873ffa3-3af3-49c5-8985-8536e00aae00",
      alt: "actc_bath00007.jpg",
      filename: "actc_bath00007.jpg",
    },
    {
      id: "478097aa-f248-46dc-f67e-3c1e2d961600",
      alt: "actc_kitchen00001.jpg",
      filename: "actc_kitchen00001.jpg",
    },
    {
      id: "81ed8a4e-9285-4ef4-3258-fe707dded000",
      alt: "actc_kitchen00002.jpg",
      filename: "actc_kitchen00002.jpg",
    },
    {
      id: "cb913a2d-0214-4b3b-956a-6e91585c2700",
      alt: "actc_kitchen00003.jpg",
      filename: "actc_kitchen00003.jpg",
    },
    {
      id: "7ce2479f-1270-408e-f30c-b29e8f1edc00",
      alt: "actc_kitchen00004.jpg",
      filename: "actc_kitchen00004.jpg",
    },
  ],
};

// Windows & Doors
export const windowsGallery: ImageGallery = {
  basePath: imageBasePath,
  images: [
    {
      id: "048627a8-9d19-48a4-0acf-dae6fe1b5400",
      alt: "actc_doors00001.jpg",
      filename: "actc_doors00001.jpg",
    },
    {
      id: "3fcd058f-25d8-45b9-3089-466ea1130d00",
      alt: "actc_doors00002.jpg",
      filename: "actc_doors00002.jpg",
    },
    {
      id: "59a5b6a5-3473-4c39-7c0d-cbd8e6b6d300",
      alt: "actc_doors00003.jpg",
      filename: "actc_doors00003.jpg",
    },
    {
      id: "208b2fc7-ed8e-4253-6899-0d5c7f4ce400",
      alt: "actc_doors00004.jpg",
      filename: "actc_doors00004.jpg",
    },
    {
      id: "6b2e7f74-9fff-414d-67b1-873ced0f5700",
      alt: "actc_doors00005.jpg",
      filename: "actc_doors00005.jpg",
    },
    {
      id: "7ee9bb41-1aae-4b8f-6ed6-121877915f00",
      alt: "actc_doors00006.jpg",
      filename: "actc_doors00006.jpg",
    },
    {
      id: "0cdf238e-ccfd-4ec8-3f45-cf26876c6f00",
      alt: "actc_doors00007.jpg",
      filename: "actc_doors00007.jpg",
    },
    {
      id: "6cac6b17-986a-4f2d-4c28-7367f73f4a00",
      alt: "actc_doors00008.jpg",
      filename: "actc_doors00008.jpg",
    },
    {
      id: "9cf9e8c6-038d-498c-641a-3dbaac143800",
      alt: "actc_windows00001.jpg",
      filename: "actc_windows00001.jpg",
    },
    {
      id: "d406a0ed-d42f-4bb1-d015-311be5839d00",
      alt: "actc_windows00002.jpg",
      filename: "actc_windows00002.jpg",
    },
    {
      id: "cc093bd7-2225-4926-a846-583a56a86f00",
      alt: "actc_windows00003.jpg",
      filename: "actc_windows00003.jpg",
    },
    {
      id: "fd5205a1-d9ce-4b9b-0908-392208cd5e00",
      alt: "actc_windows00004.jpg",
      filename: "actc_windows00004.jpg",
    },
    {
      id: "c9237c40-42e2-43d8-a7c4-cebb74d8c300",
      alt: "actc_windows00005.jpg",
      filename: "actc_windows00005.jpg",
    },
    {
      id: "d417f7f6-d2f6-47ad-6a38-4faa7a873e00",
      alt: "actc_windows00006.jpg",
      filename: "actc_windows00006.jpg",
    },
    {
      id: "21480a65-20af-433f-e4ee-7f5be3639f00",
      alt: "actc_windows00007.jpg",
      filename: "actc_windows00007.jpg",
    },
    {
      id: "6e3b9715-b03c-4150-8c85-b33e3ca12900",
      alt: "actc_windows00008.jpg",
      filename: "actc_windows00008.jpg",
    },
    {
      id: "e898a042-2618-4e93-32c3-47051dc73500",
      alt: "actc_windows00009.jpg",
      filename: "actc_windows00009.jpg",
    },
    {
      id: "8ecce6fe-2e32-41a2-14ed-4ebed7090c00",
      alt: "actc_windows00010.jpg",
      filename: "actc_windows00010.jpg",
    },
    {
      id: "d7854971-1b26-4253-62fb-13d169e8b600",
      alt: "actc_windows00011.jpg",
      filename: "actc_windows00011.jpg",
    },
    {
      id: "7107120c-3395-454b-3de2-413dad831800",
      alt: "actc_windows00012.jpg",
      filename: "actc_windows00012.jpg",
    },
    {
      id: "24b3f81a-19fb-45dc-d42d-bdf233a78600",
      alt: "actc_windows00013.jpg",
      filename: "actc_windows00013.jpg",
    },
    {
      id: "f547b398-6a18-401f-24a2-29e8c2f36800",
      alt: "actc_windows00014.jpg",
      filename: "actc_windows00014.jpg",
    },
    {
      id: "bd1df0a7-8b27-4b19-15e0-a453dc3e2600",
      alt: "actc_windows00015.jpg",
      filename: "actc_windows00015.jpg",
    },
    {
      id: "92dfac8f-14ab-4592-c449-a55e6cd39300",
      alt: "actc_windows00016.jpg",
      filename: "actc_windows00016.jpg",
    },
    {
      id: "c72a6511-f944-4253-1cf6-b658817f8700",
      alt: "actc_windows00017.jpg",
      filename: "actc_windows00017.jpg",
    },
    {
      id: "436ce03c-7dc3-4a28-8238-2cb7ecfa9300",
      alt: "actc_windows00018.jpg",
      filename: "actc_windows00018.jpg",
    },
    {
      id: "4153fba3-9713-46f8-8cd5-50e79c632100",
      alt: "actc_windows00019.jpg",
      filename: "actc_windows00019.jpg",
    },
    {
      id: "49d179a9-1190-43e2-62b9-f858c0da1a00",
      alt: "actc_windows00020.jpg",
      filename: "actc_windows00020.jpg",
    },
    {
      id: "2cd47ca8-35c5-4c49-2643-efeb41cbe700",
      alt: "actc_windows00021.jpg",
      filename: "actc_windows00021.jpg",
    },
    {
      id: "9f7b50be-d6ce-46ee-5344-8c314611fd00",
      alt: "actc_windows00022.jpg",
      filename: "actc_windows00022.jpg",
    },
    {
      id: "693695ee-4b01-4578-917b-61e9bce6d500",
      alt: "actc_windows00023.jpg",
      filename: "actc_windows00023.jpg",
    },
    {
      id: "6583c507-d2e8-4742-d170-0fbd60dad100",
      alt: "actc_windows00024.jpg",
      filename: "actc_windows00024.jpg",
    },
    {
      id: "1e26b753-b664-45fb-597a-68c3866f4700",
      alt: "actc_windows00025.jpg",
      filename: "actc_windows00025.jpg",
    },
    {
      id: "7aabe36d-0eb7-43b8-3103-3ce2a4932a00",
      alt: "actc_windows00026.jpg",
      filename: "actc_windows00026.jpg",
    },
    {
      id: "11620c1e-8b9e-42da-0374-92d2d20ba500",
      alt: "actc_windows00027.jpg",
      filename: "actc_windows00027.jpg",
    },
    {
      id: "708ed00e-4438-45a0-2e67-edf590867500",
      alt: "actc_windows00028.jpg",
      filename: "actc_windows00028.jpg",
    },
    {
      id: "e46751ea-5172-4f8b-d4fd-24eb95387000",
      alt: "actc_windows00029.jpg",
      filename: "actc_windows00029.jpg",
    },
    {
      id: "3613f0d0-b706-4856-0528-b00dff284700",
      alt: "actc_windows00030.jpg",
      filename: "actc_windows00030.jpg",
    },
    {
      id: "9a93340c-ca29-4f72-e9b0-9e9b10360a00",
      alt: "actc_windows00031.jpg",
      filename: "actc_windows00031.jpg",
    },
    {
      id: "7651d932-96c1-48bd-68cc-2a6e8a3ff500",
      alt: "actc_windows00032.jpg",
      filename: "actc_windows00032.jpg",
    },
  ],
};

// Siding
export const sidingGallery: ImageGallery = {
  basePath: imageBasePath,
  images: [
    {
      id: "b5aef13f-057c-4f9c-a230-404a8aae2500",
      alt: "actc_siding00001.jpg",
      filename: "actc_siding00001.jpg",
    },
    {
      id: "11130d4b-abce-456c-34fe-a40a7de14000",
      alt: "actc_siding00002.jpg",
      filename: "actc_siding00002.jpg",
    },
    {
      id: "8e710e13-b135-44b3-8da8-4d3ed94fa000",
      alt: "actc_siding00003.jpg",
      filename: "actc_siding00003.jpg",
    },
    {
      id: "c8bed4e6-7903-41e4-6d77-ec9234a1d400",
      alt: "actc_siding00004.jpg",
      filename: "actc_siding00004.jpg",
    },
    {
      id: "3279e5b8-7262-4a84-30ae-3ef510ace000",
      alt: "actc_siding00005.jpg",
      filename: "actc_siding00005.jpg",
    },
    {
      id: "20480367-c725-4d53-d471-8d7f29ebe300",
      alt: "actc_siding00006.jpg",
      filename: "actc_siding00006.jpg",
    },
    {
      id: "72cbd524-717e-49e9-5f02-ca1b0d311d00",
      alt: "actc_siding00007.jpg",
      filename: "actc_siding00007.jpg",
    },
    {
      id: "096a4814-4b46-4fa6-1c21-96bbc5ae4700",
      alt: "actc_siding00008.jpg",
      filename: "actc_siding00008.jpg",
    },
    {
      id: "fe7924bd-2c76-4331-f5b8-73b820338800",
      alt: "actc_siding00009.jpg",
      filename: "actc_siding00009.jpg",
    },
    {
      id: "ee853b84-b6c1-4044-1534-557b7ddb2100",
      alt: "actc_siding00010.jpg",
      filename: "actc_siding00010.jpg",
    },
    {
      id: "493a90cc-bc62-4909-aebe-59186bfcd900",
      alt: "actc_siding00011.jpg",
      filename: "actc_siding00011.jpg",
    },
  ],
};

// Decks & Covers
export const decksGallery: ImageGallery = {
  basePath: imageBasePath,
  images: [
    {
      id: "ae3e62d8-da2c-4794-f96d-ae7a1c81e100",
      alt: "actc_decks00001.jpg",
      filename: "actc_decks00001.jpg",
    },
    {
      id: "069ef7fe-0761-4dfd-f3e7-f2935f63b300",
      alt: "actc_decks00002.jpg",
      filename: "actc_decks00002.jpg",
    },
    {
      id: "cb98b3c1-ed4e-4543-1d1d-d06600c57700",
      alt: "actc_decks00003.jpg",
      filename: "actc_decks00003.jpg",
    },
    {
      id: "8f0397f6-cba1-495b-d8d7-385b4c217100",
      alt: "actc_decks00004.jpg",
      filename: "actc_decks00004.jpg",
    },
    {
      id: "320e4048-6c40-4953-b88a-88d5f2b1f700",
      alt: "actc_decks00005.jpg",
      filename: "actc_decks00005.jpg",
    },
    {
      id: "7a4fe2fc-599e-40ab-1a20-7114196d3d00",
      alt: "actc_decks00006.jpg",
      filename: "actc_decks00006.jpg",
    },
    {
      id: "25b9bf4c-2dad-496c-dd93-b5e9ed41cf00",
      alt: "actc_decks00007.jpg",
      filename: "actc_decks00007.jpg",
    },
  ],
};

// Flooring
export const flooringGallery: ImageGallery = {
  basePath: imageBasePath,
  images: [
    {
      id: "a9ce9e06-1ea7-42b7-fc83-999b1595ce00",
      alt: "actc_flooring00001.jpg",
      filename: "actc_flooring00001.jpg",
    },
    {
      id: "eb7ef433-cccd-40bf-c329-f66e8b3e0600",
      alt: "actc_flooring00002.jpg",
      filename: "actc_flooring00002.jpg",
    },
    {
      id: "01b2494c-d695-4f4d-e094-aaafb9ebbc00",
      alt: "actc_flooring00003.jpg",
      filename: "actc_flooring00003.jpg",
    },
    {
      id: "154bf92c-01c3-4a28-b300-12ecd50a9000",
      alt: "actc_flooring00004.jpg",
      filename: "actc_flooring00004.jpg",
    },
    {
      id: "56631d3d-0ed6-4415-8cfc-ece00d790900",
      alt: "actc_flooring00005.jpg",
      filename: "actc_flooring00005.jpg",
    },
  ],
};
