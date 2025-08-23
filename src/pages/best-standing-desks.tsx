import ProductPageLayout from '@/components/ProductPageLayout';

const products = [
  {
    rank: 1,
    name: 'ErGear Electric Standing Desk with 4 Drawers',
    tagline: 'Best Overall Standing Desk with Built-in Storage',
    image: '/images/ErGear.jpg',
    rating: 4.8,
    price: '$260-380',
    pros: [
      '4 built-in storage drawers',
      'Dual-motor electric height adjustment',
      'Memory preset buttons',
      'Anti-collision technology',
      'Excellent value with storage'
    ],
    cons: [
      'Assembly can be complex',
      'Drawers may reduce leg room slightly'
    ],
    amazonUrl: 'https://amazon.com/dp/B0CXTG3BQL?tag=bestonamz0e-20',
    prime: true,
    award: 'Top Pick'
  },
  {
    rank: 2,
    name: 'FlexiSpot E6 MAX Standing Desk',
    tagline: 'Best Value Electric Standing Desk',
    image: '/images/FlexispotE6.jpg',
    rating: 4.7,
    price: '$350-500',
    pros: [
      'Excellent price-to-feature ratio',
      'Dual-motor system with anti-collision',
      '4 memory preset buttons',
      'Stable even at maximum height',
      '5-year warranty on frame'
    ],
    cons: [
      'Desktop options are limited',
      'Cable management could be better'
    ],
    amazonUrl: 'https://amazon.com/dp/B0CWGJCDXX?tag=bestonamz0e-20',
    prime: true,
    award: 'Best Value'
  },
  {
    rank: 3,
    name: 'VIVO Electric L-Shaped Corner Standing Desk',
    tagline: 'Best Corner Standing Desk for Large Workspaces',
    image: '/images/vivo.jpg',
    rating: 4.6,
    price: '$270',
    pros: [
      'L-shaped design maximizes workspace',
      'Electric height adjustment',
      'Memory height settings',
      'Anti-collision safety feature',
      'Perfect for dual monitor setups'
    ],
    cons: [
      'Requires more floor space',
      'Assembly can be challenging'
    ],
    amazonUrl: 'https://amazon.com/dp/B09B2VDSYJ?tag=bestonamz0e-20',
    prime: true,
    award: 'Best Corner Desk'
  },
  {
    rank: 4,
    name: 'Vari Electric Standing Desk',
    tagline: 'Best Premium Standing Desk with Monitor Arm',
    image: '/images/vari.jpg',
    rating: 4.7,
    price: '$899',
    pros: [
      'Premium bamboo desktop surface',
      'Smooth dual-motor operation',
      'Memory height presets',
      'Built-in cable management',
      'Commercial-grade build quality'
    ],
    cons: [
      'Higher price point',
      'Limited desktop size options'
    ],
    amazonUrl: 'https://amazon.com/dp/B0DFK8M6V3?tag=bestonamz0e-20',
    prime: true
  },
  {
    rank: 5,
    name: 'TRALT Electric Standing Desk with Storage',
    tagline: 'Best Storage Solution Standing Desk',
    image: '/images/Tralt.jpg',
    rating: 4.5,
    price: '$123',
    pros: [
      'Multiple storage compartments',
      'Electric height adjustment',
      'Anti-collision safety feature',
      'Memory preset buttons',
      'Great value with built-in storage'
    ],
    cons: [
      'Storage may reduce workspace',
      'Assembly instructions could be clearer'
    ],
    amazonUrl: 'https://amazon.com/dp/B0DXCYYHFM?tag=bestonamz0e-20',
    prime: true,
    award: 'Best Storage'
  },
  {
    rank: 6,
    name: 'ModernMate Executive Standing Desk',
    tagline: 'Best Executive Standing Desk with Premium Finish',
    image: '/images/Modernmate.jpg',
    rating: 4.6,
    price: '$500',
    pros: [
      'Executive-style bamboo finish',
      'One-piece desktop construction',
      'Smooth electric adjustment',
      'Memory height settings',
      'Professional appearance'
    ],
    cons: [
      'Premium pricing',
      'Limited color options'
    ],
    amazonUrl: 'https://amazon.com/dp/B0F1N66JPF?tag=bestonamz0e-20',
    prime: true,
    award: 'Executive Choice'
  }
];

const faqs = [
  {
    question: "Are standing desks worth the investment?",
    answer: "Yes, standing desks can reduce back pain, improve posture, and increase energy levels. Studies show alternating between sitting and standing throughout the day can improve productivity and reduce health risks associated with prolonged sitting."
  },
  {
    question: "How often should I stand at a standing desk?",
    answer: "Start with 15-30 minutes every hour and gradually increase. The ideal ratio is often cited as 1:1 or 2:1 sitting to standing. Listen to your body and adjust accordingly - the goal is movement variation, not standing all day."
  },
  {
    question: "What accessories do I need with a standing desk?",
    answer: "Essential accessories include an anti-fatigue mat, monitor arm for proper screen height, keyboard tray for ergonomics, and cable management solutions. A balance board can also help engage core muscles while standing."
  },
  {
    question: "Do I need a dual motor or single motor standing desk?",
    answer: "Dual motor desks like the UPLIFT V2 and FlexiSpot E7 offer better stability, faster height adjustment, and higher weight capacity. Single motor desks are more budget-friendly but may be slower and less stable at maximum height."
  },
  {
    question: "What's the ideal standing desk height?",
    answer: "Your elbows should be at 90-110 degrees when typing, with the monitor top at or slightly below eye level. Most desks adjust from 29-48 inches, accommodating users from 5'2\" to 6'6\". Memory presets make switching between sitting and standing heights effortless."
  }
];

export default function BestStandingDesks() {
  return (
    <ProductPageLayout
      title="Best Standing Desks on Amazon (2025)"
      description="Discover the best standing desks on Amazon for your home office. Compare top electric and manual standing desks from UPLIFT, FlexiSpot, VIVO, and more with expert reviews and ergonomic guidance."
      products={products}
      category="standing desks"
      lastUpdated="2024-12-15"
      faqs={faqs}
    />
  );
}