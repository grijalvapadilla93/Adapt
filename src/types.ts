export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  image: string;
  description?: string;
}

export interface ArenaFeature {
  title: string;
  image: string;
  items: string[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface PricingPlan {
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  unsupportedFeatures?: string[];
  ctaText: string;
  featured?: boolean;
}
