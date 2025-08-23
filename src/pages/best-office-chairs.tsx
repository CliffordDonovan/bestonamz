import ProductPageLayout from '@/components/ProductPageLayout';

const products = [
  {
    rank: 1,
    name: 'Herman Miller Aeron',
    tagline: 'Best Overall Ergonomic Office Chair',
    image: '/images/Aeron.jpg',
    rating: 4.9,
    price: '$1200-1500',
    pros: [
      'Legendary ergonomic design with PostureFit SL',
      '12-year manufacturer warranty',
      'Breathable mesh prevents overheating',
      'Highly adjustable for all body types',
      'Excellent resale value'
    ],
    cons: [
      'Very expensive initial investment',
      'May feel firm for some users'
    ],
    amazonUrl: 'https://amazon.com/dp/B01N0ZUN15?tag=bestonamz0e-20',
    prime: true,
    award: 'Top Pick'
  },
  {
    rank: 2,
    name: 'Steelcase Leap V2',
    tagline: 'Best Back Support Office Chair',
    image: '/images/SteelcaseLeapV2.jpg',
    rating: 4.8,
    price: '$900-1200',
    pros: [
      'LiveBack technology adapts to spine movement',
      'Excellent lumbar support adjustment',
      '12-year warranty coverage',
      'Durable build quality',
      'Great for long work sessions'
    ],
    cons: [
      'Premium pricing',
      'Can feel bulky in small spaces'
    ],
    amazonUrl: 'https://amazon.com/dp/B006H1QYBA?tag=bestonamz0e-20',
    prime: true
  },
  {
    rank: 3,
    name: 'Steelcase Gesture',
    tagline: 'Best Arm Support Office Chair',
    image: '/images/SteelcaseGesture.jpg',
    rating: 4.7,
    price: '$1100-1400',
    pros: [
      'Revolutionary arm tracking technology',
      'Supports natural arm and shoulder movement',
      'Excellent build quality and materials',
      '12-year comprehensive warranty',
      'Ideal for multi-monitor setups'
    ],
    cons: [
      'Premium pricing tier',
      'Large footprint may not fit smaller spaces'
    ],
    amazonUrl: 'https://amazon.com/dp/B08KL9BSCN?tag=bestonamz0e-20',
    prime: true
  },
  {
    rank: 4,
    name: 'Haworth Fern',
    tagline: 'Best Sustainable Office Chair',
    image: '/images/HaworthFern.jpg',
    rating: 4.6,
    price: '$800-1100',
    pros: [
      'Eco-friendly design with sustainable materials',
      'Excellent lumbar support system',
      'Breathable mesh construction',
      'Intuitive adjustment controls',
      'Modern aesthetic design'
    ],
    cons: [
      'Higher price point',
      'Limited color options'
    ],
    amazonUrl: 'https://amazon.com/dp/B0CKMKJBZZ?tag=bestonamz0e-20',
    prime: true
  },
  {
    rank: 5,
    name: 'TRALT Ergonomic Chair',
    tagline: 'Best Value Ergonomic Chair',
    image: '/images/TraltChair.jpg',
    rating: 4.5,
    price: '$300-400',
    pros: [
      'Excellent ergonomics for the price',
      'Adjustable headrest and lumbar support',
      'Breathable mesh back design',
      'Easy assembly process',
      'Good weight capacity up to 330 lbs'
    ],
    cons: [
      'Armrests could be more robust',
      'Some users report squeaking after extended use'
    ],
    amazonUrl: 'https://amazon.com/dp/B0F8VM7HYL?tag=bestonamz0e-20',
    prime: true,
    award: 'Best Value'
  },
  {
    rank: 6,
    name: 'Branch Verve Chair',
    tagline: 'Best Modern Office Chair',
    image: '/images/BranchVerve.jpg',
    rating: 4.4,
    price: '$400-500',
    pros: [
      'Sleek, modern design aesthetic',
      'High-performance foam cushioning',
      'Adjustable lumbar support',
      'Smooth rolling casters',
      'Good build quality for the price'
    ],
    cons: [
      'Limited adjustment options',
      'May feel too firm for some users'
    ],
    amazonUrl: 'https://amazon.com/dp/B0DFZM5QD8?tag=bestonamz0e-20',
    prime: true
  }
];

const faqs = [
  {
    question: "What makes a good office chair for long hours?",
    answer: "A good office chair should have adjustable lumbar support, breathable materials, multiple adjustment points (seat height, armrests, backrest), and quality foam that maintains its shape. Chairs like the Herman Miller Aeron and Steelcase Leap V2 excel in these areas."
  },
  {
    question: "How much should I spend on an office chair?",
    answer: "For daily 8+ hour use, invest $300-600 for a quality ergonomic chair. Premium options like Herman Miller ($1200+) offer superior durability and adjustability. Budget chairs under $200 like the IKEA MARKUS can work for lighter use."
  },
  {
    question: "Are gaming chairs good for office work?",
    answer: "Modern gaming chairs like the Secretlab TITAN Evo offer excellent ergonomics suitable for office work. However, they may have aggressive styling that doesn't fit all office environments. Traditional office chairs often provide more professional aesthetics."
  },
  {
    question: "How often should I replace my office chair?",
    answer: "A quality office chair should last 7-10 years with regular use. Signs to replace include worn cushioning, broken adjustments, or persistent discomfort. Premium chairs with long warranties like Herman Miller can last 15+ years."
  },
  {
    question: "Do I need armrests on my office chair?",
    answer: "Adjustable armrests help reduce shoulder and neck strain by supporting your arms while typing. They should adjust to elbow height when your shoulders are relaxed. Fixed armrests can sometimes interfere with desk positioning."
  }
];

export default function BestOfficeChairs() {
  return (
    <ProductPageLayout
      title="Best Office Chairs on Amazon (2025)"
      description="Discover the best office chairs on Amazon for ergonomic comfort and productivity. Compare top-rated chairs from Herman Miller, Steelcase, Secretlab, and more with expert reviews and buying guides."
      products={products}
      category="office chairs"
      lastUpdated="2024-12-15"
      faqs={faqs}
    />
  );
}