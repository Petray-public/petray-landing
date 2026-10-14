export type BrandId = "fastron" | "boltz" | "lazeelab" | "chili" | "jimmy" | "vewior";
export type BusinessId = "fastron" | "chili" | "boltz" | "lazeelab";
export type ProductBrand = "fastron" | "boltz";
export type PanelId = "businesses" | "about" | "careers" | "partners";
export type SoftwareViewId = "support" | "issue-tree" | "ai-replies";
export interface LogoData { src: string; darkSrc?: string; alt: string; width: number; height: number }
export interface Business { id: BusinessId; index: string; category: string; headline: string; description: string; categories: string[]; website: string; websiteLabel: string; clients?: string; launchNote?: string }
export interface Product { name: string; category: string; image: string; url: string; width: number; height: number }
export interface SoftwareView { image: string; alt: string; caption: string; label: string }
export interface PartnerProduct { id: string; name: string; description: string; features: string[]; image: string; imageAlt: string; width: number; height: number; url: string; detailsLabel: string }
export interface DistributionPartner { id: "jimmy" | "vewior"; category: string; headline: string; description: string; website: string; rangeLabel: string; products: PartnerProduct[] }

export const brandLogos: Record<BrandId, LogoData> = {
  "fastron": {
    "src": "/assets/logos/fastron.png",
    "alt": "FASTRON",
    "width": 2048,
    "height": 404
  },
  "boltz": {
    "src": "/assets/logos/boltz.png",
    "alt": "BOLTZ Petcare",
    "width": 1000,
    "height": 1000
  },
  "lazeelab": {
    "src": "/assets/logos/lazeelab.webp",
    "alt": "LazeeLab",
    "width": 1600,
    "height": 1600
  },
  "chili": {
    "src": "/assets/logos/chili-logo.svg",
    "darkSrc": "/assets/logos/chili-logo-dark.svg",
    "alt": "Chili Labs",
    "width": 118,
    "height": 28
  },
  "jimmy": {
    "src": "/assets/logos/jimmy.png",
    "alt": "JIMMY",
    "width": 235,
    "height": 40
  },
  "vewior": {
    "src": "/assets/logos/vewior.png",
    "alt": "VEWIOR",
    "width": 300,
    "height": 110
  }
};

export const businesses: Business[] = [
  {
    "id": "fastron",
    "index": "01",
    "category": "Home and kitchen",
    "headline": "Appliances for the home.",
    "description": "The home appliance range covers cooling, cleaning, cooking and staying warm. From BLDC fans and air coolers to vacuum cleaners, air fryers and room heaters, the range is made for the spaces we live and work in.",
    "categories": [
      "Cooling",
      "Cleaning",
      "Kitchen",
      "Heating"
    ],
    "website": "https://www.fastron.in/",
    "websiteLabel": "fastron.in ↗"
  },
  {
    "id": "chili",
    "index": "02",
    "category": "Customer support software",
    "headline": "Customer support for Shopify.",
    "description": "Built for Shopify, the platform helps merchants handle customer support in one workspace. Guided issue flows give requests a clear starting point, while ticket routing, team assignments and AI-assisted replies help support teams manage the work.",
    "categories": [
      "Guided support",
      "Ticket management",
      "AI-assisted replies"
    ],
    "website": "https://chililabs.ai/",
    "websiteLabel": "chililabs.ai ↗",
    "clients": "Used by brands including UrbanGabru, UrbanYog and Seoulskin."
  },
  {
    "id": "boltz",
    "index": "03",
    "category": "Pet care",
    "headline": "Grooming, nutrition and pet care.",
    "description": "The petcare range covers the everyday needs of dogs, cats, birds, fish and small animals. The range brings together grooming tools, pet supplements, food, aquarium equipment and products that help keep pet spaces fresh.",
    "categories": [
      "Grooming & care",
      "Nutrition",
      "Aquarium essentials"
    ],
    "website": "https://www.boltzpetcare.com/",
    "websiteLabel": "boltzpetcare.com ↗"
  },
  {
    "id": "lazeelab",
    "index": "04",
    "category": "Wellness",
    "headline": "Wellness in a gummy.",
    "description": "Petray's wellness gummies brand offers Multivitamin, Omega and Probiotic options. Its approach is simple: make an everyday wellness routine easier to fit into real life, with a little more lazee.",
    "categories": [
      "Multivitamin",
      "Omega",
      "Probiotics"
    ],
    "website": "https://lazeelab.com/",
    "websiteLabel": "lazeelab.com ↗",
    "launchNote": "Meet the range. Online ordering opens soon."
  }
];

export const productRanges: Record<ProductBrand, Product[]> = {
  "fastron": [
    {
      "name": "3-in-1 Vacuum Cleaner",
      "category": "Vacuuming & floor mopping",
      "image": "fastron-vacuum.webp",
      "url": "https://www.fastron.in/product/b50a3fd0-84f6-4863-a24c-dcb8f8133af3",
      "width": 600,
      "height": 600
    },
    {
      "name": "3D Air Circulator",
      "category": "Remote-controlled BLDC fan",
      "image": "fastron-circulator.webp",
      "url": "https://www.fastron.in/product/49c13b9f-1a81-4fd3-9b2a-5abf011402ee",
      "width": 828,
      "height": 828
    },
    {
      "name": "AeroBreeze Nytro",
      "category": "BLDC ceiling fan",
      "image": "fastron-ceiling-fan.webp",
      "url": "https://www.fastron.in/product/23664725-2ead-4292-aa6c-420eba8934ba",
      "width": 828,
      "height": 828
    },
    {
      "name": "36L Air Cooler",
      "category": "Cooling with remote control",
      "image": "fastron-cooler.webp",
      "url": "https://www.fastron.in/product/3d5a48f6-733d-496c-922e-e251b955d78c",
      "width": 600,
      "height": 600
    },
    {
      "name": "Air Fryer",
      "category": "Touch control & preset programs",
      "image": "fastron-air-fryer.webp",
      "url": "https://www.fastron.in/product/964ac8a9-eece-409b-a413-08fbcc2d820e",
      "width": 800,
      "height": 600
    },
    {
      "name": "PTC Room Heater",
      "category": "Ceramic heating with remote",
      "image": "fastron-heater.webp",
      "url": "https://www.fastron.in/product/9065fe57-8d90-4458-9418-df77a32c14e7",
      "width": 600,
      "height": 600
    }
  ],
  "boltz": [
    {
      "name": "4-in-1 Grooming Kit",
      "category": "Hair, paws & nail grooming",
      "image": "boltz-trimmer.webp",
      "url": "https://www.boltzpetcare.com/product/9b1858f0-a033-40b1-b6ad-33fe15e8642b",
      "width": 828,
      "height": 828
    },
    {
      "name": "SILKIFUR Omega 3-6-9",
      "category": "Skin & coat tonic",
      "image": "boltz-silkifur.webp",
      "url": "https://www.boltzpetcare.com/product/e5bd9590-fec2-465b-86ad-cca17baf5951",
      "width": 600,
      "height": 600
    },
    {
      "name": "Parrot Food",
      "category": "Seed mix for big parrots",
      "image": "boltz-parrot-food.webp",
      "url": "https://www.boltzpetcare.com/product/124e6996-8d79-4c7c-bc2d-ee28f7c2162b",
      "width": 828,
      "height": 828
    },
    {
      "name": "Aquarium Filter",
      "category": "Submersible filter pump",
      "image": "boltz-filter.webp",
      "url": "https://www.boltzpetcare.com/product/25e92b8d-68c2-4abc-a89d-4a9e9b952a9c",
      "width": 828,
      "height": 828
    },
    {
      "name": "Odour & Urine Remover",
      "category": "Freshening pet spaces",
      "image": "boltz-odour-remover.webp",
      "url": "https://www.boltzpetcare.com/product/0813c0bc-6225-40b1-8813-d2570331859a",
      "width": 828,
      "height": 828
    },
    {
      "name": "Rabbit Pellet Food",
      "category": "Everyday small-animal nutrition",
      "image": "boltz-rabbit-food.webp",
      "url": "https://www.boltzpetcare.com/product/394fd831-7c4c-4dda-98a8-d5cfd09e14ab",
      "width": 569,
      "height": 569
    }
  ]
};

export const softwareViews: Record<SoftwareViewId, SoftwareView> = {
  "support": {
    "image": "chili-support.png",
    "alt": "Chili Labs published product visual showing its customer support request page.",
    "caption": "A clear starting point for customer support.",
    "label": "Support page"
  },
  "issue-tree": {
    "image": "chili-issue-tree.png",
    "alt": "Chili Labs published product visual showing structured issue flows.",
    "caption": "Guided issue flows give every request the right context.",
    "label": "Issue flows"
  },
  "ai-replies": {
    "image": "chili-ai-replies.png",
    "alt": "Chili Labs published product visual showing AI-assisted draft replies.",
    "caption": "AI-assisted drafts help teams prepare customer replies.",
    "label": "AI replies"
  }
};

export const distributionPartners: DistributionPartner[] = [
  {
    "id": "jimmy",
    "category": "Mattress and sofa care",
    "headline": "Mattress and sofa cleaning.",
    "description": "A home-appliance brand from KingClean, with a range spanning cordless and mattress vacuum cleaners. Our distribution partnership brings its mattress-cleaning products to customers in India.",
    "website": "https://www.jimmyindia.in/",
    "rangeLabel": "Selected products",
    "products": [
      {
        "id": "bx7-pro-title",
        "name": "BX7 Pro",
        "description": "Mattress vacuum cleaner",
        "features": [
          "Built-in dust sensor",
          "Motorised roller brush",
          "Three cleaning modes"
        ],
        "image": "/assets/brands/jimmy-bx7-pro.webp",
        "imageAlt": "JIMMY BX7 Pro mattress vacuum cleaner.",
        "width": 500,
        "height": 500,
        "url": "https://www.jimmyindia.in/product/d6ca691e-89f2-4d90-a414-1cd2e740ce87",
        "detailsLabel": "Product details"
      },
      {
        "id": "bx7-max-title",
        "name": "BX7 Pro Max",
        "description": "Mattress vacuum cleaner",
        "features": [
          "LED status display",
          "65°C hot-air technology",
          "Automatic suction adjustment"
        ],
        "image": "/assets/brands/jimmy-bx7-pro-max.webp",
        "imageAlt": "JIMMY BX7 Pro Max mattress vacuum cleaner.",
        "width": 500,
        "height": 500,
        "url": "https://www.jimmyindia.in/product/dffd3f57-efaf-4a40-9696-ecf03f11ebb5",
        "detailsLabel": "Product details"
      }
    ]
  },
  {
    "id": "vewior",
    "category": "Indoor air care",
    "headline": "Air purifiers and replacement filters.",
    "description": "A home-appliance brand offering air purifiers and replacement filters. Through our distribution partnership, we bring its compact A1 air purifier to customers in India.",
    "website": "https://vewiorlife.in/",
    "rangeLabel": "Product highlight",
    "products": [
      {
        "id": "a1-title",
        "name": "A1 Air Purifier",
        "description": "Filtration with air-quality monitoring",
        "features": [
          "Three-stage filtration with H13 HEPA",
          "PM2.5 air-quality display",
          "Three fan speeds",
          "Six timer settings, from 2 to 12 hours",
          "Built-in aroma pad"
        ],
        "image": "/assets/brands/vewior-a1.jpg",
        "imageAlt": "VEWIOR A1 air purifier with its digital display and top aroma pad.",
        "width": 1200,
        "height": 1500,
        "url": "https://vewiorlife.com/products/vewior-air-purifier-a1",
        "detailsLabel": "Manufacturer's product details"
      }
    ]
  }
];
