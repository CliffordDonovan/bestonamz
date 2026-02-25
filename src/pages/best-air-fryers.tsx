import ProductPageLayout from '@/components/ProductPageLayout';

const products = [
  {
    rank: 1,
    name: 'Ninja AF161 Max XL Air Fryer',
    tagline: 'Best Overall Air Fryer – Best Performance for Most Homes',
    image: '/images/ninja-af161.jpg',
    rating: 4.7,
    price: '$100-130',
    pros: [
      '5.5 qt capacity fits a 3-lb batch of wings or fries for 4 people without stacking — the minimum size to handle a real family meal in one go',
      'Max Crisp technology reaches 450°F — higher than most competitors, which tops out at 400°F. That extra 50 degrees makes a visible difference on frozen foods and skin-on chicken',
      '7-in-1 versatility: air fry, roast, reheat, dehydrate, broil, bake, and max crisp in one appliance — legitimately replaces a toaster oven for 90% of tasks',
      'Square basket with a wide opening is easier to load than narrow-slot designs; nonstick basket is dishwasher-safe for quick cleanup',
      'Compact square footprint compared to circular models of the same capacity — fits in tighter counter spaces'
    ],
    cons: [
      'No viewing window — you have to open the basket to check doneness; the shake reminder helps but you\'re still guessing timing on new recipes',
      'Fan noise is noticeable at Max Crisp mode — louder than the Cosori or Instant Vortex at the same temperature setting'
    ],
    amazonUrl: 'https://amazon.com/dp/B07S6529ZZ?tag=bestonamz0e-20',
    prime: true,
    award: 'Top Pick'
  },
  {
    rank: 2,
    name: 'Cosori Pro Gen 2 Air Fryer 5.8 Qt',
    tagline: 'Best for Beginners – 13 Functions, 100 Paper Recipes Included',
    image: '/images/cosori-pro-gen2.jpg',
    rating: 4.7,
    price: '$80-100',
    pros: [
      '13 one-touch cooking functions cover every common air fryer task — no need to look up temperature and time settings for standard foods',
      'Cosori app gives access to 1,100+ online recipes with step-by-step cooking notifications that tell you when to shake, flip, or adjust',
      'Square basket design maximizes usable space vs round baskets — fits a full chicken breast flat without folding or overlap',
      'Shake reminder alarm activates at preset intervals and a keep-warm function holds food temperature automatically when the timer ends',
      'Runs notably quieter than the Ninja AF161 at equivalent temperatures — noticeably less disruptive in open-plan kitchens'
    ],
    cons: [
      'App connectivity requires Bluetooth pairing and occasional reconnection — not reliable enough to be the primary interface; most users rely on the manual controls',
      '5.8 qt is the nominal capacity; usable cooking space is closer to 4.5 qt once you account for the basket inner walls'
    ],
    amazonUrl: 'https://amazon.com/dp/B0BD4BYR11?tag=bestonamz0e-20',
    prime: true,
    award: 'Best for Beginners'
  },
  {
    rank: 3,
    name: 'Ninja Foodi DualZone DZ201 8 Qt',
    tagline: 'Best 2-Basket Air Fryer – Cook Two Things at Once',
    image: '/images/ninja-dualzone.jpg',
    rating: 4.7,
    price: '$150-200',
    pros: [
      'Two independent 4 qt baskets with separate temperature and time controls — cook chicken at 400°F in one basket and fries at 375°F in the other simultaneously',
      'DualZone Smart Finish technology syncs both baskets to finish cooking at exactly the same time — you set when you want dinner ready and it calculates backward for each basket independently',
      'Match Cook mode duplicates settings across both baskets instantly — useful for cooking a doubled batch of the same food without manually entering settings twice',
      '8 qt total capacity handles complete meals for 6 to 8 people, or a full week of meal prep in one session'
    ],
    cons: [
      'Large footprint requires a dedicated counter space; does not store easily in standard cabinets',
      'Two baskets need separate cleaning — more dishwasher space per meal compared to single-basket models'
    ],
    amazonUrl: 'https://amazon.com/dp/B089TQWJKK?tag=bestonamz0e-20',
    prime: true,
    award: 'Best Dual Basket'
  },
  {
    rank: 4,
    name: 'Instant Pot Vortex Plus 6 Qt Air Fryer',
    tagline: 'Best Value Large Air Fryer Under $70',
    image: '/images/instant-vortex.jpg',
    rating: 4.5,
    price: '$60-80',
    pros: [
      'Best price-to-capacity ratio on this list: 6 qt for under $70 regularly — often on sale in the $50 to $60 range',
      '6-in-1 functions (air fry, roast, broil, bake, reheat, dehydrate) cover all common air fryer tasks without unnecessary complexity',
      'EvenCrisp 360-degree airflow technology produces consistent results across the basket — edges and center cook at similar rates without hot spots',
      'Dishwasher-safe basket and tray; Instant brand reputation with good warranty support and widely available replacement accessories'
    ],
    cons: [
      'Max temperature is 400°F — cannot match the Ninja AF161 Max Crisp 450°F for extra-crispy results on frozen foods and skin-on poultry',
      'Control panel is simpler with fewer preset options — less intuitive for beginners who want guided cooking suggestions'
    ],
    amazonUrl: 'https://amazon.com/dp/B07VHFMZHJ?tag=bestonamz0e-20',
    prime: true,
    award: 'Best Value'
  },
  {
    rank: 5,
    name: 'Cosori 2.1 Qt Mini Air Fryer',
    tagline: 'Best Small Air Fryer for 1–2 People',
    image: '/images/cosori-mini.jpg',
    rating: 4.4,
    price: '$40-60',
    pros: [
      'Compact design at under 5 lbs fits on narrow counters, in dorms, and in RVs without dominating the space',
      '2.1 qt capacity handles 1 to 2 servings perfectly: a single chicken breast, personal-size pizza, or a portion of fries',
      'Lower wattage than larger models uses less electricity for small batches — practical for single-person households where a full-size air fryer is overkill',
      'Cosori app integration gives access to 30 in-app recipes specifically sized for the compact basket'
    ],
    cons: [
      '2.1 qt capacity cannot handle family-size portions — cooking for more than 2 people requires multiple batches, which eliminates the speed advantage of air frying',
      'Circular basket design uses space less efficiently than square designs — usable cooking area is smaller than the nominal capacity suggests'
    ],
    amazonUrl: 'https://amazon.com/dp/B0BDFRZX3F?tag=bestonamz0e-20',
    prime: true,
    award: 'Best Compact'
  }
];

const faqs = [
  {
    question: "What size air fryer do I actually need?",
    answer: "This is the most important decision and the most common mistake is buying too small. For 1 to 2 people: 2 to 4 qt is sufficient for single servings and small batches. For 3 to 4 people: 5 to 6 qt is the sweet spot — handles a 3-lb chicken wing batch or a pound of fries without stacking. For 5+ people or meal prep: 6 to 8 qt or a dual-basket model. The capacity listed on the box is the basket volume, not the usable cooking area — stacking food prevents airflow and produces uneven, soggy results. A properly loaded 5 qt basket holds about the same food as one sheet pan in a conventional oven."
  },
  {
    question: "What can you actually cook in an air fryer?",
    answer: "The honest answer is: almost anything that benefits from dry heat and crispiness. Air fryers excel at: frozen foods (fries, nuggets, fish sticks — dramatically better than oven), fresh chicken (skin comes out genuinely crispy), reheating pizza and fried foods (far better than microwave — the crust stays crispy), roasted vegetables, and bacon. They are less suited for: anything battered in wet batter (it drips), large roasts (not enough space for even heat penetration), anything that needs to steam or braise, and pastries that need to rise. If you are currently doing everything in a microwave and want actual hot food fast, an air fryer is a meaningful upgrade."
  },
  {
    question: "Does air-fried food really taste like deep-fried food?",
    answer: "Honest answer: no, but it is better than the oven for most things. Air frying produces a similar texture to deep frying — crispy exterior with moist interior — but without the oil-soaked depth of flavor. For foods that are already coated or breaded (chicken tenders, spring rolls, frozen fries), the difference from deep frying is minimal and most people cannot tell in a blind test. For foods that need to develop a crust from their own fat (skin-on chicken thighs, thick-cut bacon), air frying actually outperforms shallow pan frying. For doughnuts or traditional fried dough, the flavor difference is noticeable."
  },
  {
    question: "Single basket vs dual basket: which is better?",
    answer: "Dual basket air fryers like the Ninja DualZone are transformative for households that cook complete meals. The ability to cook chicken and fries simultaneously — each at the right temperature — and have them finish at exactly the same time is genuinely useful. For people who mostly cook for 1 to 2 people or use the air fryer for snacks and reheating, a single basket is simpler and takes up less space. The dual basket models are meaningfully larger (plan for 15 inches of counter space) and more expensive. The decision comes down to: do you use it for complete dinners (dual basket worth it) or as a snack and reheat appliance (single basket is enough)."
  },
  {
    question: "How does an air fryer compare to a convection oven?",
    answer: "An air fryer is essentially a small, powerful convection oven with a faster fan. The fan speed is higher, circulating air more aggressively — which is why it gets food crispier faster than a full convection oven. The practical differences: an air fryer preheats in 2 to 3 minutes vs 10 to 15 minutes for a full oven, uses significantly less electricity (1.5 kW vs 2.4 to 4 kW), and fits on a counter. A full convection oven handles larger batches and can bake, roast, and broil larger items. If you are cooking for 2 to 4 people and do not need to make sheet-pan meals or large roasts frequently, an air fryer replaces most of what a convection oven does at a fraction of the operating cost."
  },
  {
    question: "Is an air fryer worth it if I already have a good oven?",
    answer: "Yes, for two specific reasons. First, speed and convenience: an air fryer preheats instantly and produces crispy results in 8 to 15 minutes for most foods that would take 20 to 30 minutes in an oven. Second, it keeps your kitchen cooler — running a full oven for 30+ minutes generates significant heat; an air fryer produces minimal ambient heat. In summer, this alone is worth it. If you already meal-prep large quantities that need sheet pans, or frequently cook large roasts, the air fryer does not fully replace your oven. But as a daily-driver for quick meals, reheating leftovers, and making frozen foods actually crispy, it genuinely earns its counter space."
  }
];

export default function BestAirFryers() {
  return (
    <ProductPageLayout
      title="Best Air Fryers on Amazon (2025): Tested & Ranked by Size"
      description="Find the best air fryers on Amazon in 2025. We ranked top models from Ninja, Cosori, and Instant Pot by capacity, crispiness, and value — with honest size guidance for every household."
      products={products}
      category="air fryers"
      lastUpdated="2025-02-25"
      faqs={faqs}
    />
  );
}
