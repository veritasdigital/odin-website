/**
 * Location-specific data for differentiation across city pages
 * Includes local statistics, landmarks, business districts, and citations
 */

export interface LocationData {
  city: string;
  state: string;
  fullName: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  statistics: {
    population: string;
    businesses: string;
    gdp: string;
    growthRate: string;
  };
  landmarks: string[];
  businessDistricts: string[];
  keyIndustries: string[];
  caseStudy?: {
    business: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[];
  };
  citations: {
    name: string;
    address: string;
    phone: string;
    description: string;
  };
}

export const locationData: Record<string, LocationData> = {
  melbourne: {
    city: "Melbourne",
    state: "VIC",
    fullName: "Melbourne, Victoria",
    coordinates: { lat: -37.8136, lng: 144.9631 },
    statistics: {
      population: "5.2M",
      businesses: "420,000+",
      gdp: "$440B AUD",
      growthRate: "2.8% annually"
    },
    landmarks: ["Federation Square", "Flinders Street Station", "Queen Victoria Market", "Royal Botanic Gardens"],
    businessDistricts: ["Melbourne CBD", "Docklands", "Southbank", "Richmond", "Collingwood"],
    keyIndustries: ["Finance", "Professional Services", "Healthcare", "Education", "Retail"],
    caseStudy: {
      business: "Melbourne Dental Group",
      industry: "Healthcare - Dentistry",
      challenge: "Struggling to rank against corporate dental chains in Melbourne CBD searches",
      solution: "Hyper-local SEO targeting specific Melbourne suburbs + Google Ads focused on high-intent keywords",
      results: [
        "312% increase in new patient enquiries within 6 months",
        "Ranking #1 for 'dentist Melbourne CBD' and 15+ related keywords",
        "$85,000 additional monthly revenue from digital channels"
      ]
    },
    citations: {
      name: "Odin Digital - Melbourne Office",
      address: "Collins Street, Melbourne VIC 3000",
      phone: "1300 123 456",
      description: "Leading digital marketing agency serving Melbourne businesses with SEO, PPC, and web design services."
    }
  },
  sydney: {
    city: "Sydney",
    state: "NSW",
    fullName: "Sydney, New South Wales",
    coordinates: { lat: -33.8688, lng: 151.2093 },
    statistics: {
      population: "5.3M",
      businesses: "450,000+",
      gdp: "$480B AUD",
      growthRate: "3.1% annually"
    },
    landmarks: ["Sydney Opera House", "Harbour Bridge", "Circular Quay", "Bondi Beach", "Darling Harbour"],
    businessDistricts: ["Sydney CBD", "North Sydney", "Parramatta", "Macquarie Park", "Barangaroo"],
    keyIndustries: ["Finance", "Technology", "Professional Services", "Tourism", "Real Estate"],
    caseStudy: {
      business: "Sydney Legal Partners",
      industry: "Legal Services",
      challenge: "High competition from established law firms in Sydney's saturated legal market",
      solution: "Targeted Google Ads campaigns + content marketing focused on niche practice areas",
      results: [
        "420% ROI on ad spend within 4 months",
        "67 qualified leads per month (up from 12)",
        "Reduced cost per acquisition by 58%"
      ]
    },
    citations: {
      name: "Odin Digital - Sydney Office",
      address: "George Street, Sydney NSW 2000",
      phone: "1300 123 456",
      description: "Expert digital marketing services for Sydney businesses including SEO, Google Ads, and web development."
    }
  },
  brisbane: {
    city: "Brisbane",
    state: "QLD",
    fullName: "Brisbane, Queensland",
    coordinates: { lat: -27.4698, lng: 153.0251 },
    statistics: {
      population: "2.6M",
      businesses: "240,000+",
      gdp: "$185B AUD",
      growthRate: "3.4% annually"
    },
    landmarks: ["Story Bridge", "South Bank Parklands", "Brisbane Botanic Gardens", "Lone Pine Koala Sanctuary"],
    businessDistricts: ["Brisbane CBD", "Fortitude Valley", "South Brisbane", "Milton", "Newstead"],
    keyIndustries: ["Mining Services", "Healthcare", "Education", "Tourism", "Construction"],
    caseStudy: {
      business: "Brisbane Property Group",
      industry: "Real Estate",
      challenge: "Competing against national real estate portals for Brisbane property searches",
      solution: "Local SEO optimization + Facebook Ads targeting Brisbane homebuyers and investors",
      results: [
        "285% increase in website enquiries",
        "52 properties sold directly through digital channels in 6 months",
        "Ranking in top 3 for 'Brisbane real estate' and 23 suburb-specific searches"
      ]
    },
    citations: {
      name: "Odin Digital - Brisbane Office",
      address: "Queen Street, Brisbane QLD 4000",
      phone: "1300 123 456",
      description: "Brisbane's trusted digital marketing partner for SEO, PPC, social media, and web design services."
    }
  },
  perth: {
    city: "Perth",
    state: "WA",
    fullName: "Perth, Western Australia",
    coordinates: { lat: -31.9505, lng: 115.8605 },
    statistics: {
      population: "2.1M",
      businesses: "185,000+",
      gdp: "$160B AUD",
      growthRate: "2.5% annually"
    },
    landmarks: ["Kings Park", "Swan River", "Fremantle Markets", "Cottesloe Beach", "Perth Mint"],
    businessDistricts: ["Perth CBD", "Northbridge", "Subiaco", "Fremantle", "Joondalup"],
    keyIndustries: ["Mining", "Oil & Gas", "Professional Services", "Healthcare", "Tourism"],
    caseStudy: {
      business: "Perth Mining Supplies",
      industry: "Industrial - Mining Equipment",
      challenge: "Limited online visibility in competitive Perth mining services market",
      solution: "Technical SEO + LinkedIn Ads targeting mining decision-makers across Western Australia",
      results: [
        "$2.4M in new contracts attributed to digital marketing",
        "340% increase in B2B enquiries",
        "Dominant presence for 'mining equipment Perth' searches"
      ]
    },
    citations: {
      name: "Odin Digital - Perth Office",
      address: "Murray Street, Perth WA 6000",
      phone: "1300 123 456",
      description: "Perth digital marketing specialists delivering SEO, PPC, and web solutions to WA businesses."
    }
  },
  adelaide: {
    city: "Adelaide",
    state: "SA",
    fullName: "Adelaide, South Australia",
    coordinates: { lat: -34.9285, lng: 138.6007 },
    statistics: {
      population: "1.4M",
      businesses: "125,000+",
      gdp: "$105B AUD",
      growthRate: "2.2% annually"
    },
    landmarks: ["Adelaide Oval", "Adelaide Central Market", "North Terrace", "Glenelg Beach", "Adelaide Botanic Garden"],
    businessDistricts: ["Adelaide CBD", "North Adelaide", "Norwood", "Unley", "Glenelg"],
    keyIndustries: ["Manufacturing", "Defence", "Healthcare", "Wine & Agriculture", "Education"],
    caseStudy: {
      business: "Adelaide Wine Tours",
      industry: "Tourism & Hospitality",
      challenge: "Seasonal business with inconsistent bookings and heavy reliance on word-of-mouth",
      solution: "Google Ads + Instagram marketing targeting interstate and international wine tourists",
      results: [
        "Year-round bookings increased by 215%",
        "42% increase in average booking value",
        "$180,000 additional revenue in first year"
      ]
    },
    citations: {
      name: "Odin Digital - Adelaide Office",
      address: "King William Street, Adelaide SA 5000",
      phone: "1300 123 456",
      description: "Adelaide digital marketing agency specializing in SEO, Google Ads, and conversion-focused web design."
    }
  },
  canberra: {
    city: "Canberra",
    state: "ACT",
    fullName: "Canberra, Australian Capital Territory",
    coordinates: { lat: -35.2809, lng: 149.1300 },
    statistics: {
      population: "456,000",
      businesses: "42,000+",
      gdp: "$48B AUD",
      growthRate: "2.4% annually"
    },
    landmarks: ["Parliament House", "Australian War Memorial", "Lake Burley Griffin", "National Gallery", "Questacon"],
    businessDistricts: ["Canberra City", "Civic", "Braddon", "Barton", "Kingston"],
    keyIndustries: ["Government", "Defence", "Education", "Healthcare", "Professional Services"],
    caseStudy: {
      business: "Canberra Accounting Solutions",
      industry: "Professional Services - Accounting",
      challenge: "Difficulty attracting government contractors and SMEs in competitive Canberra market",
      solution: "SEO focused on government contracting keywords + LinkedIn Ads targeting public servants",
      results: [
        "185% increase in qualified leads",
        "38 new retained clients worth $240K annual recurring revenue",
        "Ranking #1 for 'Canberra business accountant' and 12 related terms"
      ]
    },
    citations: {
      name: "Odin Digital - Canberra Office",
      address: "London Circuit, Canberra ACT 2600",
      phone: "1300 123 456",
      description: "Canberra's digital marketing experts providing SEO, PPC, and web design for ACT businesses."
    }
  },
  hobart: {
    city: "Hobart",
    state: "TAS",
    fullName: "Hobart, Tasmania",
    coordinates: { lat: -42.8821, lng: 147.3272 },
    statistics: {
      population: "240,000",
      businesses: "22,000+",
      gdp: "$15B AUD",
      growthRate: "2.1% annually"
    },
    landmarks: ["Mount Wellington", "Salamanca Market", "MONA", "Battery Point", "Cascade Brewery"],
    businessDistricts: ["Hobart CBD", "Salamanca Place", "Sandy Bay", "North Hobart", "Battery Point"],
    keyIndustries: ["Tourism", "Agriculture", "Seafood", "Arts & Culture", "Education"],
    caseStudy: {
      business: "Hobart Seafood Direct",
      industry: "E-Commerce - Seafood",
      challenge: "Limited mainland awareness of premium Tasmanian seafood products",
      solution: "E-commerce website + Facebook/Instagram Ads targeting mainland foodies and restaurants",
      results: [
        "1,240% increase in online sales",
        "Expanded to 3 mainland states",
        "$420,000 in e-commerce revenue (up from $32,000)"
      ]
    },
    citations: {
      name: "Odin Digital - Hobart Office",
      address: "Elizabeth Street, Hobart TAS 7000",
      phone: "1300 123 456",
      description: "Hobart digital marketing agency delivering results-driven SEO, PPC, and web solutions for Tasmanian businesses."
    }
  },
  darwin: {
    city: "Darwin",
    state: "NT",
    fullName: "Darwin, Northern Territory",
    coordinates: { lat: -12.4634, lng: 130.8456 },
    statistics: {
      population: "148,000",
      businesses: "15,000+",
      gdp: "$10B AUD",
      growthRate: "1.8% annually"
    },
    landmarks: ["Mindil Beach", "Crocosaurus Cove", "Darwin Waterfront", "Museum & Art Gallery NT", "Kakadu National Park"],
    businessDistricts: ["Darwin CBD", "Stuart Park", "Parap", "Fannie Bay", "The Wharf Precinct"],
    keyIndustries: ["Mining", "Defence", "Tourism", "Agriculture", "Construction"],
    caseStudy: {
      business: "Darwin Construction Group",
      industry: "Construction & Trades",
      challenge: "Seasonal fluctuations and difficulty competing against southern construction firms",
      solution: "Local SEO + Google Ads targeting Wet/Dry season keywords + government tenders",
      results: [
        "$1.8M in new contracts from digital enquiries",
        "Year-round lead flow (eliminated seasonal gaps)",
        "Reduced cost per lead by 64%"
      ]
    },
    citations: {
      name: "Odin Digital - Darwin Office",
      address: "Smith Street, Darwin NT 0800",
      phone: "1300 123 456",
      description: "Darwin's digital marketing specialists helping NT businesses with SEO, Google Ads, and web design."
    }
  },
  goldCoast: {
    city: "Gold Coast",
    state: "QLD",
    fullName: "Gold Coast, Queensland",
    coordinates: { lat: -28.0167, lng: 153.4000 },
    statistics: {
      population: "680,000",
      businesses: "68,000+",
      gdp: "$38B AUD",
      growthRate: "3.2% annually"
    },
    landmarks: ["Surfers Paradise", "Burleigh Heads", "Currumbin Wildlife Sanctuary", "SkyPoint", "Broadwater Parklands"],
    businessDistricts: ["Surfers Paradise", "Southport", "Broadbeach", "Burleigh Heads", "Robina"],
    keyIndustries: ["Tourism", "Construction", "Retail", "Healthcare", "Hospitality"],
    caseStudy: {
      business: "Gold Coast Cosmetic Clinic",
      industry: "Healthcare - Cosmetic Medicine",
      challenge: "Fierce competition from 40+ cosmetic clinics in high-cost Gold Coast market",
      solution: "SEO + Google Ads with geo-targeting + Instagram influencer partnerships",
      results: [
        "485% ROI on marketing investment",
        "120 new patients per month (up from 28)",
        "$680,000 increase in annual revenue"
      ]
    },
    citations: {
      name: "Odin Digital - Gold Coast Office",
      address: "Surfers Paradise Boulevard, Gold Coast QLD 4217",
      phone: "1300 123 456",
      description: "Gold Coast digital marketing agency specializing in tourism, hospitality, and healthcare marketing."
    }
  },
  newcastle: {
    city: "Newcastle",
    state: "NSW",
    fullName: "Newcastle, New South Wales",
    coordinates: { lat: -32.9283, lng: 151.7817 },
    statistics: {
      population: "520,000",
      businesses: "48,000+",
      gdp: "$32B AUD",
      growthRate: "2.6% annually"
    },
    landmarks: ["Newcastle Beach", "Fort Scratchley", "Nobby's Lighthouse", "Newcastle Museum", "King Edward Park"],
    businessDistricts: ["Newcastle CBD", "Honeysuckle", "Hamilton", "Charlestown", "Kotara"],
    keyIndustries: ["Mining Services", "Healthcare", "Education", "Manufacturing", "Tourism"],
    caseStudy: {
      business: "Newcastle Machinery Hire",
      industry: "Industrial - Equipment Rental",
      challenge: "Competing against Sydney-based equipment rental companies in Hunter Region",
      solution: "Local SEO + Google Ads emphasizing Newcastle-based service and faster response times",
      results: [
        "$1.2M in additional annual revenue",
        "290% increase in online enquiries",
        "Dominant rankings for 'machinery hire Newcastle' and Hunter Valley searches"
      ]
    },
    citations: {
      name: "Odin Digital - Newcastle Office",
      address: "Hunter Street, Newcastle NSW 2300",
      phone: "1300 123 456",
      description: "Newcastle digital marketing experts serving Hunter Region businesses with SEO, PPC, and web design."
    }
  },
  launceston: {
    city: "Launceston",
    state: "TAS",
    fullName: "Launceston, Tasmania",
    coordinates: { lat: -41.4332, lng: 147.1441 },
    statistics: {
      population: "110,000",
      businesses: "11,000+",
      gdp: "$7B AUD",
      growthRate: "1.9% annually"
    },
    landmarks: ["Cataract Gorge", "City Park", "Queen Victoria Museum", "Tamar Valley", "Boag's Brewery"],
    businessDistricts: ["Launceston CBD", "Kings Meadows", "Riverside", "Mowbray", "Invermay"],
    keyIndustries: ["Agriculture", "Manufacturing", "Tourism", "Healthcare", "Education"],
    caseStudy: {
      business: "Launceston Boutique Hotel",
      industry: "Hospitality - Accommodation",
      challenge: "Competing against national hotel chains and limited visibility beyond Tasmania",
      solution: "SEO + Google Hotel Ads + Instagram marketing targeting mainland travelers",
      results: [
        "340% increase in direct bookings",
        "78% occupancy rate (up from 42%)",
        "$380,000 additional annual revenue"
      ]
    },
    citations: {
      name: "Odin Digital - Launceston Office",
      address: "St John Street, Launceston TAS 7250",
      phone: "1300 123 456",
      description: "Launceston digital marketing agency helping Northern Tasmanian businesses grow with SEO and PPC."
    }
  },
  ballarat: {
    city: "Ballarat",
    state: "VIC",
    fullName: "Ballarat, Victoria",
    coordinates: { lat: -37.5622, lng: 143.8503 },
    statistics: {
      population: "115,000",
      businesses: "12,000+",
      gdp: "$8.5B AUD",
      growthRate: "2.3% annually"
    },
    landmarks: ["Sovereign Hill", "Lake Wendouree", "Ballarat Botanical Gardens", "Eureka Centre", "Art Gallery of Ballarat"],
    businessDistricts: ["Ballarat CBD", "Wendouree", "Sebastopol", "Bakery Hill", "Lake Gardens"],
    keyIndustries: ["Manufacturing", "Education", "Healthcare", "Tourism", "Agriculture"],
    caseStudy: {
      business: "Ballarat Manufacturing Co",
      industry: "Manufacturing - Industrial Parts",
      challenge: "Limited online presence and reliance on legacy customer relationships",
      solution: "Website redesign + LinkedIn Ads + SEO targeting B2B manufacturing keywords",
      results: [
        "$950,000 in new B2B contracts",
        "145% increase in qualified leads",
        "Expanded client base to Melbourne and regional Victoria"
      ]
    },
    citations: {
      name: "Odin Digital - Ballarat Office",
      address: "Sturt Street, Ballarat VIC 3350",
      phone: "1300 123 456",
      description: "Ballarat digital marketing specialists providing SEO, Google Ads, and web design for regional Victoria."
    }
  }
};

export function getLocationData(city: string): LocationData | null {
  const key = city.toLowerCase().replace(/\s+/g, '');
  return locationData[key] || null;
}

export function getAllCities(): string[] {
  return Object.values(locationData).map(loc => loc.city);
}
