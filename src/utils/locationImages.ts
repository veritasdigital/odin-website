// Location-specific hero images with SEO-optimized configurations (WebP + JPG fallbacks)
import melbourneSkylineWebp from "@/assets/locations/melbourne-skyline.webp";
import melbourneSkylineJpg from "@/assets/locations/melbourne-skyline.jpg";
import sydneyHarborWebp from "@/assets/locations/sydney-harbor.webp";
import sydneyHarborJpg from "@/assets/locations/sydney-harbor.jpg";
import brisbaneCityscapeWebp from "@/assets/locations/brisbane-cityscape.webp";
import brisbaneCityscapeJpg from "@/assets/locations/brisbane-cityscape.jpg";
import adelaideCityscapeWebp from "@/assets/locations/adelaide-cityscape.webp";
import adelaideCityscapeJpg from "@/assets/locations/adelaide-cityscape.jpg";
import perthSkylineWebp from "@/assets/locations/perth-skyline.webp";
import perthSkylineJpg from "@/assets/locations/perth-skyline.jpg";
import canberraParliamentWebp from "@/assets/locations/canberra-parliament.webp";
import canberraParliamentJpg from "@/assets/locations/canberra-parliament.jpg";
import goldCoastBeachWebp from "@/assets/locations/gold-coast-beach.webp";
import goldCoastBeachJpg from "@/assets/locations/gold-coast-beach.jpg";
import hobartWaterfrontWebp from "@/assets/locations/hobart-waterfront.webp";
import hobartWaterfrontJpg from "@/assets/locations/hobart-waterfront.jpg";
import launcestonGorgeWebp from "@/assets/locations/launceston-gorge.webp";
import launcestonGorgeJpg from "@/assets/locations/launceston-gorge.jpg";
import darwinWaterfrontWebp from "@/assets/locations/darwin-waterfront.webp";
import darwinWaterfrontJpg from "@/assets/locations/darwin-waterfront.jpg";
import newcastleHarborWebp from "@/assets/locations/newcastle-harbor.webp";
import newcastleHarborJpg from "@/assets/locations/newcastle-harbor.jpg";
import ballaratHeritageWebp from "@/assets/locations/ballarat-heritage.webp";
import ballaratHeritageJpg from "@/assets/locations/ballarat-heritage.jpg";

export interface LocationImage {
  webp: string;
  jpg: string;
  alt: string;
}

export const locationImages: Record<string, LocationImage> = {
  melbourne: {
    webp: melbourneSkylineWebp,
    jpg: melbourneSkylineJpg,
    alt: "SEO services Melbourne - Melbourne city skyline featuring Eureka Tower and Yarra River at sunset, representing digital marketing excellence in Victoria"
  },
  sydney: {
    webp: sydneyHarborWebp,
    jpg: sydneyHarborJpg,
    alt: "SEO Sydney - Sydney Harbour featuring iconic Opera House and Harbour Bridge at golden hour, symbolizing top digital marketing services in NSW"
  },
  brisbane: {
    webp: brisbaneCityscapeWebp,
    jpg: brisbaneCityscapeJpg,
    alt: "SEO Brisbane - Brisbane city skyline with Story Bridge and Brisbane River at dusk, showcasing Queensland's digital marketing leadership"
  },
  adelaide: {
    webp: adelaideCityscapeWebp,
    jpg: adelaideCityscapeJpg,
    alt: "SEO Adelaide - Adelaide city skyline at sunset with modern architecture and parklands, representing South Australia's digital excellence"
  },
  perth: {
    webp: perthSkylineWebp,
    jpg: perthSkylineJpg,
    alt: "SEO Perth - Perth city skyline along Swan River at sunset, showcasing Western Australia's premier digital marketing services"
  },
  canberra: {
    webp: canberraParliamentWebp,
    jpg: canberraParliamentJpg,
    alt: "SEO Canberra - Parliament House with landscaped gardens, representing Australia's capital city digital marketing expertise"
  },
  goldcoast: {
    webp: goldCoastBeachWebp,
    jpg: goldCoastBeachJpg,
    alt: "SEO Gold Coast - Gold Coast pristine beach with turquoise ocean and high-rise buildings, symbolizing Queensland coastal digital marketing"
  },
  hobart: {
    webp: hobartWaterfrontWebp,
    jpg: hobartWaterfrontJpg,
    alt: "SEO Hobart - Hobart waterfront with Mount Wellington backdrop, showcasing Tasmania's digital marketing services"
  },
  launceston: {
    webp: launcestonGorgeWebp,
    jpg: launcestonGorgeJpg,
    alt: "SEO Launceston - Cataract Gorge with walking trails and natural landscape, representing Tasmanian digital marketing excellence"
  },
  darwin: {
    webp: darwinWaterfrontWebp,
    jpg: darwinWaterfrontJpg,
    alt: "SEO Darwin - Darwin waterfront at sunset with tropical atmosphere, showcasing Northern Territory digital marketing leadership"
  },
  newcastle: {
    webp: newcastleHarborWebp,
    jpg: newcastleHarborJpg,
    alt: "SEO Newcastle - Newcastle harbor featuring coastline and city buildings, representing NSW coastal digital marketing services"
  },
  ballarat: {
    webp: ballaratHeritageWebp,
    jpg: ballaratHeritageJpg,
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
