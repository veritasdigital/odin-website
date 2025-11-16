// Location-specific hero images with SEO-optimized configurations
import melbourneSkyline from "@/assets/locations/melbourne-skyline.jpg";
import sydneyHarbor from "@/assets/locations/sydney-harbor.jpg";
import brisbaneCityscape from "@/assets/locations/brisbane-cityscape.jpg";
import adelaideCityscape from "@/assets/locations/adelaide-cityscape.jpg";
import perthSkyline from "@/assets/locations/perth-skyline.jpg";
import canberraParliament from "@/assets/locations/canberra-parliament.jpg";
import goldCoastBeach from "@/assets/locations/gold-coast-beach.jpg";
import hobartWaterfront from "@/assets/locations/hobart-waterfront.jpg";
import launcestonGorge from "@/assets/locations/launceston-gorge.jpg";
import darwinWaterfront from "@/assets/locations/darwin-waterfront.jpg";
import newcastleHarbor from "@/assets/locations/newcastle-harbor.jpg";
import ballaratHeritage from "@/assets/locations/ballarat-heritage.jpg";

export interface LocationImage {
  src: string;
  alt: string;
}

export const locationImages: Record<string, LocationImage> = {
  melbourne: {
    src: melbourneSkyline,
    alt: "SEO services Melbourne - Melbourne city skyline featuring Eureka Tower and Yarra River at sunset, representing digital marketing excellence in Victoria"
  },
  sydney: {
    src: sydneyHarbor,
    alt: "SEO Sydney - Sydney Harbour featuring iconic Opera House and Harbour Bridge at golden hour, symbolizing top digital marketing services in NSW"
  },
  brisbane: {
    src: brisbaneCityscape,
    alt: "SEO Brisbane - Brisbane city skyline with Story Bridge and Brisbane River at dusk, showcasing Queensland's digital marketing leadership"
  },
  adelaide: {
    src: adelaideCityscape,
    alt: "SEO Adelaide - Adelaide city skyline at sunset with modern architecture and parklands, representing South Australia's digital excellence"
  },
  perth: {
    src: perthSkyline,
    alt: "SEO Perth - Perth city skyline along Swan River at sunset, showcasing Western Australia's premier digital marketing services"
  },
  canberra: {
    src: canberraParliament,
    alt: "SEO Canberra - Parliament House with landscaped gardens, representing Australia's capital city digital marketing expertise"
  },
  goldcoast: {
    src: goldCoastBeach,
    alt: "SEO Gold Coast - Gold Coast pristine beach with turquoise ocean and high-rise buildings, symbolizing Queensland coastal digital marketing"
  },
  hobart: {
    src: hobartWaterfront,
    alt: "SEO Hobart - Hobart waterfront with Mount Wellington backdrop, showcasing Tasmania's digital marketing services"
  },
  launceston: {
    src: launcestonGorge,
    alt: "SEO Launceston - Cataract Gorge with walking trails and natural landscape, representing Tasmanian digital marketing excellence"
  },
  darwin: {
    src: darwinWaterfront,
    alt: "SEO Darwin - Darwin waterfront at sunset with tropical atmosphere, showcasing Northern Territory digital marketing leadership"
  },
  newcastle: {
    src: newcastleHarbor,
    alt: "SEO Newcastle - Newcastle harbor featuring coastline and city buildings, representing NSW coastal digital marketing services"
  },
  ballarat: {
    src: ballaratHeritage,
    alt: "SEO Ballarat - Historic Victorian architecture and heritage buildings in Ballarat, showcasing regional Victoria digital marketing"
  }
};

// Helper function to get location image with proper alt text
export const getLocationImage = (city: string, service: string = "SEO"): LocationImage => {
  const cityKey = city.toLowerCase().replace(/\s+/g, '');
  const image = locationImages[cityKey];
  
  if (!image) {
    // Fallback to default
    return locationImages.melbourne;
  }

  // Customize alt text based on service
  const baseAlt = image.alt;
  if (service !== "SEO") {
    return {
      ...image,
      alt: baseAlt.replace("SEO services", service).replace("SEO ", `${service} `)
    };
  }
  
  return image;
};
