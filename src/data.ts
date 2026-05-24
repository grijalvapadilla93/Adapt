import { PricingPlan, TestimonialItem } from "./types";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Base",
    priceMonthly: 80,
    priceYearly: 64, // $80 with 20% discount
    description: "For focused individuals starting their performance journey.",
    features: [
      "Access to all gym floor equipment",
      "Locker room & shower access",
      "2 Guest passes per month"
    ],
    unsupportedFeatures: [
      "Personalized Coaching"
    ],
    ctaText: "SELECT BASE"
  },
  {
    name: "Pro",
    priceMonthly: 120,
    priceYearly: 96, // $120 with 20% discount
    description: "Comprehensive support for athletes seeking consistent gains and expert guidance.",
    features: [
      "All Base Tier features",
      "1:1 Personalized coaching session",
      "ADAPT Performance tracking app",
      "Priority class booking",
      "Biometric assessment every quarter"
    ],
    ctaText: "UPGRADE TO PRO",
    featured: true
  },
  {
    name: "Enterprise",
    priceMonthly: 260,
    priceYearly: 208, // $260 with 20% discount
    description: "The ultimate membership for elite competitors and high-performance lifestyle.",
    features: [
      "All Pro Tier features",
      "Unlimited Recovery Lounge access",
      "Complimentary Nutrition Bar usage",
      "Private lockers & laundry service"
    ],
    ctaText: "GO ELITE"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    name: "Marcus Thorne",
    role: "Professional Sprinter",
    quote: '"ADAPT isn\'t just a gym; it\'s a high-performance laboratory. My recovery times have halved since switching to their Recharge protocols."',
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Elena Rodriguez",
    role: "Ultra-Endurance Athlete",
    quote: '"The atmosphere here is electric. Being surrounded by elite talent pushes you to find that extra 1% you didn\'t know you had."',
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "David Chen",
    role: "Olympic Weightlifter",
    quote: '"From the equipment to the biometric tracking, everything is designed for results. This is where the best come to get better."',
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  }
];
