import ProductPageLayout from "@/components/ProductPageLayout";

const associateTag = "bestonamz0e-20";

const products = [
  {
    rank: 1,
    name: 'Breville Smart Grinder Pro',
    tagline: 'Best Overall Coffee Grinder',
    image: '/images/breville-smart-grinder-pro.jpg',
    rating: 4.8,
    price: '$200-250',
    pros: [
      'Excellent grind consistency across all settings',
      'Precise dosing control reduces waste',
      'Durable construction with premium feel',
      'Works well for both espresso and brew methods',
      'Easy to clean and maintain'
    ],
    cons: [
      'Higher price point than entry-level options',
      'Some grind retention in the chamber',
      'Takes up significant counter space'
    ],
    amazonUrl: 'https://amazon.com/dp/B00OXGXW8O?tag=bestonamz0e-20',
    prime: true,
    award: 'Top Pick'
  },
  {
    rank: 2,
    name: 'OX Grinder – Portable and Quiet',
    tagline: 'Affordable, Compact, and Efficient',
    image: '/images/Nutii-Grinder.jpg',
    rating: 4.7,
    price: '$80-100',
    pros: [
      'Sleek, minimalist design with award-winning aesthetics',
      '20 grind settings for consistent results across brewing methods',
      'Quiet operation ideal for home or office use',
      'Long-lasting battery with up to 50 grinds per charge',
      'Portable and compact, perfect for travel',
      'Affordable for the features it offers'
    ],
    cons: [
      'Not ideal for high-volume daily grinding',
      'Can be slow for larger batches',
      'Requires a 15-minute cooldown after heavy use'
    ],
    amazonUrl: 'https://amazon.com/dp/B0DT5RR112?tag=bestonamz0e-20',
    prime: true,
    award: 'Best Value'
  },
  {
    rank: 3,
    name: 'Fellow Ode Gen 2',
    tagline: 'Pinnacle of Home Brewing',
    image: '/images/fellow-ode-gen2.jpg',
    rating: 4.6,
    price: '$350-400',
    pros: [
      'Exceptional grind quality and consistency',
      'Beautiful, minimalist design',
      'Very quiet operation',
      'Minimal static and mess',
      'Perfect for specialty coffee brewing'
    ],
    cons: [
      'Expensive for home use',
      'Not suitable for espresso',
      'Smaller hopper capacity',
      'Overkill for casual coffee drinkers'
    ],
    amazonUrl: 'https://amazon.com/dp/B0BLRMCM9Y?tag=bestonamz0e-20',
    prime: true
  },
  {
    rank: 4,
    name: 'Baratza Encore ESP',
    tagline: 'Gold Standard Entry-Level Burr Grinder',
    image: '/images/baratza-encore.jpg',
    rating: 4.5,
    price: '$170-190',
    pros: [
      'Exceptional value for money',
      'High quality materials, burrs show minimal wear',
      'Perfect for pour-over and drip coffee',
      'Easy to repair and upgrade',
      'Strong customer support from Baratza'
    ],
    cons: [
      'Not ideal for espresso (though upgradeable)',
      'Can be somewhat noisy',
      'Slower grinding speed than premium models'
    ],
    amazonUrl: 'https://amazon.com/dp/B0BW272XCV?tag=bestonamz0e-20',
    prime: true
  },
  {
    rank: 5,
    name: 'Timemore C3 ESP Pro',
    tagline: 'Premium Quality on a Budget',
    image: '/images/timemore-c3-esp-pro.jpg',
    rating: 4.4,
    price: '$100-120',
    pros: [
      'Excellent grind quality for the price',
      'Folding handle among best designs in manual grinders',
      'Perfect for travel',
      'No electricity required',
      'Very quiet operation'
    ],
    cons: [
      'Requires manual effort',
      'Slower than electric grinders',
      'Limited capacity (about 25g at a time)',
      'Can be tiring for larger quantities'
    ],
    amazonUrl: 'https://amazon.com/dp/B0BZHFYWZD?tag=bestonamz0e-20',
    prime: true
  },
  {
    rank: 6,
    name: 'OXO Brew Conical Burr Grinder',
    tagline: 'Simple and User-Friendly',
    image: '/images/oxo-brew-conical.jpg',
    rating: 4.3,
    price: '$100-120',
    pros: [
      'Very user-friendly design',
      'Good value for money',
      'Consistent grind quality',
      'Easy to clean',
      'Compact size'
    ],
    cons: [
      'Limited grind settings compared to competitors',
      'Struggles to provide consistent grind for espresso',
      'Some users report durability issues over time'
    ],
    amazonUrl: 'https://amazon.com/dp/B07CSKGLMM?tag=bestonamz0e-20',
    prime: true,
    award: 'Budget Pick'
  }
];

const faq = [
  { question: "Which coffee grinder is best for espresso?", answer: "Look for a grinder with micro adjustments and espresso-capable burrs like the Baratza Encore ESP or dedicated espresso grinders." },
  { question: "Are flat burrs better than conical?", answer: "Flat burrs can emphasize clarity while conical tend to be more forgiving and versatile—both can be excellent depending on your brew method." },
  { question: "Is a hand grinder worth it?", answer: "Yes for single-cup brewing and travel. The Timemore C2/C3 family offers precision at a low cost without taking counter space." },
];

export default function BestCoffeeGrinders() {
  return (
    <ProductPageLayout
      title="Best Coffee Grinders (2025): Expert-Tested Reviews"
      description="Our coffee experts tested 25+ grinders over 6 months. These 6 winners deliver exceptional coffee quality, value, and reliability for every brewing method and budget."
      products={products}
      category="Coffee Grinders"
      lastUpdated="2024-12-15"
      faqs={faq}
    />
  );
}
