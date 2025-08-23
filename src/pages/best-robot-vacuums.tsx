
import ProductPageLayout from '@/components/ProductPageLayout';

const products = [
  {
    rank: 1,
    name: 'Shark PowerDetect NeverTouch Pro',
    tagline: 'Best Robot Vacuum & Mop Combo',
    image: '/images/Shark-Nevertouch.jpg',
    rating: 4.8,
    price: '$800-$1200',
    pros: [
      'Anti-Allergen Complete Seal with HEPA filtration',
      'NeverStuck Technology to lift over obstacles',
      'Self-emptying base holds up to 60 days of debris',
      'Self-cleaning pads for minimal maintenance',
      'Great for allergy sufferers and homes with pets'
    ],
    cons: [
      'Relatively expensive',
      'Limited mopping coverage compared to other models'
    ],
    amazonUrl: 'https://amazon.com/dp/B0DCPX2M8N?tag=bestonamz0e-20',
    prime: true,
    award: 'Top Pick'
  },
  {
    rank: 2,
    name: 'Roborock Saros Z70',
    tagline: 'Best Robot Vacuum with Mechanical Arm',
    image: '/images/Roborock-Saros-Z70.jpg',
    rating: 4.7,
    price: '$2000+',
    pros: [
      'Revolutionary mechanical arm for object handling and moving items out of the way',
      'Powerful 22,000Pa suction for effective cleaning on all surfaces',
      'Advanced obstacle avoidance with StarSight 3D navigation and Tri-Laser system',
      'Hot water mopping system for better stain removal'
    ],
    cons: [
      'High price point, making it a premium option',
      'Mechanical arm might not be necessary for everyone'
    ],
    amazonUrl: 'https://amazon.com/dp/B0DHCJ571Z?tag=bestonamz0e-20',
    prime: true
  },
  {
    rank: 3,
    name: 'Narwal Freo X Ultra',
    tagline: 'Best Value Robot Vacuum Mop Combo',
    image: '/images/Narwal-Freo-X.jpg',
    rating: 4.5,
    price: '$400-700',
    pros: [
      'Hands-free maintenance dock that washes, dries, and refills mop pads',
      '8,200Pa suction and advanced mop heads for deep cleaning',
      'Tri-Laser system for precise obstacle avoidance',
      'Excellent for homes with hard floors and pets'
    ],
    cons: [
      'Not ideal for deep carpet cleaning',
      'Lack of automatic dustbin emptying'
    ],
    amazonUrl: 'https://amazon.com/dp/B0CPLP422K?tag=bestonamz0e-20',
    prime: true,
    award: 'Best Value'
  },
  {
    rank: 4,
    name: 'Deebot X9 Pro Omni',
    tagline: 'Best for Full Automation with Self-Washing Mop',
    image: '/images/Deebot-X9.jpg',
    rating: 4.4,
    price: '$1500+',
    pros: [
      '16,600Pa suction with Blast Airflow for deep cleaning',
      'Self-washing mop technology ensures clean mopping every time',
      'Advanced AI navigation with real-time obstacle avoidance',
      'Multi-surface cleaning with automatic mop lifting for carpets'
    ],
    cons: [
      'On the pricier side for a robot vacuum',
      'Best for homes with hard floors, less effective on thick carpets'
    ],
    amazonUrl: 'https://amazon.com/dp/B0DZXFNVQ2?tag=bestonamz0e-20',
    prime: true
  },
  {
    rank: 5,
    name: 'Mova P10 Pro Ultra',
    tagline: 'Best for Smart Dirt Detection and Long Battery Life',
    image: '/images/Mova-P10.jpg',
    rating: 4.3,
    price: '$500-800',
    pros: [
      '13,000Pa suction and auto dirt detection for customized cleaning',
      'Hands-free docking station with mop washing and refilling',
      'Great battery life with up to 2.5 hours of cleaning time',
      'Pet-friendly design with hair tangle prevention'
    ],
    cons: [
      'Not ideal for thick carpets due to its suction limitations',
      'App performance could be better, with occasional bugs'
    ],
    amazonUrl: 'https://amazon.com/dp/B0DGR1VDTB?tag=bestonamz0e-20',
    prime: true
  },
  {
    rank: 6,
    name: 'Eureka E20 Plus',
    tagline: 'Best for Pet Owners with Self-Emptying Station',
    image: '/images/Eureka-E20.jpg',
    rating: 4.2,
    price: '$300-400',
    pros: [
      '8,000Pa suction for deep cleaning on hard floors and carpets',
      'Self-emptying station that reduces maintenance and saves money',
      'AI 3D obstacle avoidance and night vision for precision cleaning',
      'Pet-friendly design with anti-tangle brush for hair removal'
    ],
    cons: [
      'No mop feature',
      'Less advanced mopping capability compared to other models'
    ],
    amazonUrl: 'https://amazon.com/dp/B0DDXVGX8X?tag=bestonamz0e-20',
    prime: true,
    award: 'Budget Pick'
  }
];

const faqs = [
  {
    question: "Are robot vacuums worth the investment in 2025?",
    answer: "Absolutely. Modern robot vacuums like the Roborock Saros Z70 with robotic arms and advanced AI have revolutionized home cleaning. They save significant time, maintain consistent cleanliness, and many models now handle both vacuuming and mopping with minimal intervention."
  },
  {
    question: "How do robotic arms on robot vacuums work?",
    answer: "Advanced models like the Roborock Saros Z70 use AI-powered robotic arms to identify and move obstacles like socks, cables, and small toys before cleaning. The arm uses computer vision to recognize objects and carefully relocate them to continue cleaning underneath."
  },
  {
    question: "Can robot vacuums clean multiple floors?",
    answer: "Yes, many premium models support multi-level mapping. They can store maps for different floors and automatically recognize which level they're on, adjusting cleaning patterns accordingly. Some can handle up to 4 different floor plans."
  },
  {
    question: "How often do robot vacuum docks need maintenance?",
    answer: "Self-emptying docks typically need bag replacement every 2-3 months, depending on usage. Models with mop washing stations require weekly water tank cleaning and monthly deep cleaning of the wash system to prevent odors and maintain performance."
  },
  {
    question: "Do robot vacuums work well on different floor types?",
    answer: "Modern robot vacuums excel on multiple surfaces. They automatically adjust suction power for carpets, use appropriate cleaning modes for hardwood and tile, and many feature specialized brushes that adapt to different floor textures for optimal cleaning."
  }
];

export default function BestRobotVacuums() {
  return (
    <ProductPageLayout
      title="Best Robot Vacuums on Amazon (2025)"
      description="Discover the best robot vacuums on Amazon. Compare top-rated models from Roborock, Dreame, Narwal, and DEEBOT with advanced features like robotic arms, self-emptying, and intelligent mapping."
      products={products}
      category="robot vacuums"
      lastUpdated="2024-12-15"
      faqs={faqs}
    />
  );
}
