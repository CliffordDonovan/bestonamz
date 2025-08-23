import ProductPageLayout from '@/components/ProductPageLayout';

const products = [
  {
    rank: 1,
    name: 'Coway Airmega 400S',
    tagline: 'Best Overall Air Purifier with Smart Features',
    image: '/lovable-uploads/ac6c8128-2ac5-403f-9fc6-6df935da4b90.png',
    rating: 4.8,
    price: '$400-500',
    pros: [
      'Covers up to 1,560 sq ft with dual HEPA filtration',
      'Real-time air quality monitoring with color-coded display',
      'Smart app control with scheduling and filter monitoring',
      'Energy Star certified for efficient operation',
      'Quiet operation even at high speeds'
    ],
    cons: [
      'Higher upfront cost',
      'Replacement filters can be expensive'
    ],
    amazonUrl: 'https://amazon.com/dp/B01C9RIAFS?tag=bestonamz0e-20',
    prime: true,
    award: 'Top Pick'
  },
  {
    rank: 2,
    name: 'Levoit Core 300',
    tagline: 'Best Value Compact Air Purifier',
    image: '/lovable-uploads/2ab6211f-f677-42f8-a103-add64ebbe5c4.png',
    rating: 4.7,
    price: '$80-120',
    pros: [
      'True HEPA filter removes 99.97% of particles',
      'Covers up to 219 sq ft efficiently',
      'Ultra-quiet operation under 24dB',
      'Compact design fits any room',
      'Affordable replacement filters'
    ],
    cons: [
      'Limited coverage area',
      'No smart features or app control'
    ],
    amazonUrl: 'https://amazon.com/dp/B07VVK39F7?tag=bestonamz0e-20',
    prime: true,
    award: 'Best Value'
  },
  {
    rank: 3,
    name: 'Dyson Purifier Cool TP07',
    tagline: 'Best Premium Air Purifier with Cooling',
    image: '/lovable-uploads/5a652c87-c1fb-4bce-9f6c-facc5b232b47.png',
    rating: 4.6,
    price: '$500-600',
    pros: [
      'Advanced HEPA and activated carbon filtration',
      'Doubles as a cooling fan for summer use',
      'Real-time air quality reports via app',
      '360-degree sealed filtration system',
      'Sleek, modern design'
    ],
    cons: [
      'Expensive initial investment',
      'Louder than dedicated air purifiers'
    ],
    amazonUrl: 'https://amazon.com/dp/B09LT8THGS?tag=bestonamz0e-20',
    prime: true
  },
  {
    rank: 4,
    name: 'Winix 5510',
    tagline: 'Best for Allergies and Pet Owners',
    image: '/lovable-uploads/6b014776-6582-4f96-b9a8-42d292a8d6b1.png',
    rating: 4.5,
    price: '$150-200',
    pros: [
      'True HEPA filter plus washable carbon filter',
      'PlasmaWave technology for odor elimination',
      'Auto mode adjusts to air quality',
      'Covers up to 360 sq ft',
      'Excellent for pet dander and allergens'
    ],
    cons: [
      'PlasmaWave produces minimal ozone',
      'Basic design and interface'
    ],
    amazonUrl: 'https://amazon.com/dp/B0DJG1731C?tag=bestonamz0e-20',
    prime: true
  },
  {
    rank: 5,
    name: 'Honeywell HPA5300B',
    tagline: 'Best for Large Rooms',
    image: '/lovable-uploads/ca1972a9-d2b4-4bc8-b02b-8b8bc7d32158.png',
    rating: 4.4,
    price: '$200-250',
    pros: [
      'Covers extra large rooms up to 465 sq ft',
      'True HEPA filter captures microscopic allergens',
      'Multiple cleaning levels including Turbo',
      'ENERGY STAR qualified',
      'Reliable brand with proven performance'
    ],
    cons: [
      'Bulky design takes up floor space',
      'Can be noisy on higher settings'
    ],
    amazonUrl: 'https://amazon.com/dp/B0925HB662?tag=bestonamz0e-20',
    prime: true
  },
  {
    rank: 6,
    name: 'Blueair Blue Pure 211+',
    tagline: 'Best Design and Customization',
    image: '/lovable-uploads/fc7daeee-686a-4281-8c32-200b23be68fa.png',
    rating: 4.3,
    price: '$250-300',
    pros: [
      'Covers up to 540 sq ft with powerful airflow',
      'Washable pre-filter in multiple colors',
      'HEPASilent technology for quiet operation',
      'Energy efficient with low power consumption',
      'Minimalist Scandinavian design'
    ],
    cons: [
      'No smart features or air quality monitoring',
      'Filter replacement costs add up'
    ],
    amazonUrl: 'https://amazon.com/dp/B0BN2MGV5H?tag=bestonamz0e-20',
    prime: true,
    award: 'Design Pick'
  }
];

const faqs = [
  {
    question: "Do air purifiers really work for allergies?",
    answer: "Yes, air purifiers with True HEPA filters remove 99.97% of particles 0.3 microns and larger, including pollen, dust mites, and pet dander. Models like the Coway Airmega 400S and Winix 5500-2 are particularly effective for allergy sufferers."
  },
  {
    question: "How often should I replace air purifier filters?",
    answer: "HEPA filters typically last 6-12 months depending on usage and air quality. Pre-filters should be replaced every 3 months or cleaned if washable. Most modern air purifiers have filter indicators to remind you when replacement is needed."
  },
  {
    question: "What room size air purifier do I need?",
    answer: "Choose an air purifier rated for at least your room size. For better performance, select one rated for 1.5x your room size. Small rooms (up to 300 sq ft) work with compact models, while large spaces need units covering 400+ sq ft."
  },
  {
    question: "Are air purifiers worth the cost?",
    answer: "For people with allergies, asthma, or pets, air purifiers provide significant health benefits. They reduce airborne pollutants, improve sleep quality, and can help with odor control. The long-term health benefits often justify the investment."
  },
  {
    question: "Should I run my air purifier 24/7?",
    answer: "Yes, for maximum effectiveness, run your air purifier continuously. Modern units like the Levoit Core 300 are energy efficient and designed for 24/7 operation. Many have auto modes that adjust speed based on air quality."
  }
];

export default function BestAirPurifiers() {
  return (
    <ProductPageLayout
      title="Best Air Purifiers on Amazon (2025)"
      description="Discover the best air purifiers on Amazon for allergies, pets, and clean air. Compare top HEPA air purifiers from Coway, Levoit, Dyson, and more with expert reviews and buying guides."
      products={products}
      category="air purifiers"
      lastUpdated="2024-12-15"
      faqs={faqs}
    />
  );
}