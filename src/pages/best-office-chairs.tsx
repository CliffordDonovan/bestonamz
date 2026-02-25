import ProductPageLayout from '@/components/ProductPageLayout';

const products = [
  {
    rank: 1,
    name: 'Herman Miller Aeron (Remastered)',
    tagline: 'Best Overall Ergonomic Office Chair – Premium',
    image: '/images/Aeron.jpg',
    rating: 4.9,
    price: '$1400-1700',
    pros: [
      'PostureFit SL supports both the sacrum and lumbar — the only chair that does both simultaneously',
      '8Z Pellicle mesh distributes weight evenly, eliminating pressure hotspots during 8+ hour sessions',
      'Fully reclinable with adjustable tension — lets you lean back without straining your back',
      '12-year manufacturer warranty covers all parts and labor — longest in the industry',
      'Three size options (A/B/C) so it actually fits your body rather than averaging everyone',
      'Proven resale value — used Aerons sell for $400–700 on eBay, unlike generic chairs'
    ],
    cons: [
      'Over $1,400 new — hard to justify unless you work 8+ hours a day in it',
      'The tilt can feel firm for users who prefer a softer recline'
    ],
    amazonUrl: 'https://amazon.com/dp/B01N0ZUN15?tag=bestonamz0e-20',
    prime: true,
    award: 'Top Pick'
  },
  {
    rank: 2,
    name: 'Steelcase Leap V2',
    tagline: 'Best for People with Back Pain',
    image: '/images/SteelcaseLeapV2.jpg',
    rating: 4.8,
    price: '$900-1200',
    pros: [
      'LiveBack technology flexes as you move — mimics your spine\'s natural S-curve dynamically',
      'Lower back firmness is independently adjustable — critical if you have lumbar pain',
      'Natural Glide System lets you recline while staying close to your work, reducing neck strain',
      '12-year warranty with better coverage for day-to-day mechanisms than Aeron',
      'Slightly more forgiving cushion than Aeron\'s mesh — preferred by users with tailbone sensitivity'
    ],
    cons: [
      'Arms are 4D but not as refined as the Gesture\'s arm system',
      'Heavier than the Aeron — noticeable if you move your chair frequently'
    ],
    amazonUrl: 'https://amazon.com/dp/B006H1QYBA?tag=bestonamz0e-20',
    prime: true,
    award: 'Best for Back Pain'
  },
  {
    rank: 3,
    name: 'Steelcase Gesture',
    tagline: 'Best for Multi-Monitor & Laptop Users',
    image: '/images/SteelcaseGesture.jpg',
    rating: 4.7,
    price: '$1100-1400',
    pros: [
      'Arm system tracks your entire arm and shoulder — the only chair designed specifically for touchscreen and tablet use',
      'Seat front adjusts to reduce pressure behind the knees — essential for taller users',
      'Recline system supports a wider range of seated postures, including cross-legged sitting',
      '360-degree arm pivot is genuinely useful for people who alternate between keyboard and touchscreen',
      '12-year warranty and Steelcase\'s best-in-class customer service'
    ],
    cons: [
      'Largest footprint of any chair on this list — needs a bigger office',
      'Arm system is complex — takes time to dial in correctly for the first time'
    ],
    amazonUrl: 'https://amazon.com/dp/B08KL9BSCN?tag=bestonamz0e-20',
    prime: true
  },
  {
    rank: 4,
    name: 'Secretlab TITAN Evo',
    tagline: 'Best Gaming Chair That\'s Also Good for Work',
    image: '/images/secretlab-titan-evo.jpg',
    rating: 4.6,
    price: '$449-549',
    pros: [
      'Magnetic 4-way lumbar support is removable and adjustable — more flexible than most office chairs',
      'SoftWeave Plus or NAPA leather options — better build quality than typical gaming chairs',
      'Reclines to 165° — genuinely useful for breaks and longer sessions',
      'Four size options (XS to XL) with weight limits up to 395 lbs',
      'Looks great outside a gaming context — available in clean, neutral colorways'
    ],
    cons: [
      'Side bolsters are pronounced — may feel constraining for people with wider builds',
      'Cold leather feel in winter; warm in summer — less breathable than mesh office chairs'
    ],
    amazonUrl: 'https://amazon.com/dp/B0B3RL6YFG?tag=bestonamz0e-20',
    prime: true,
    award: 'Best Mid-Range'
  },
  {
    rank: 5,
    name: 'Branch Verve Chair',
    tagline: 'Best Modern Office Chair Under $500',
    image: '/images/BranchVerve.jpg',
    rating: 4.5,
    price: '$400-500',
    pros: [
      'Auto-adjusting lumbar support responds to your sitting position without manual dialing',
      'Clean aesthetic works in home offices that aren\'t supposed to look like a cubicle',
      'WaveSuspension mesh provides firmer lateral support than typical mesh backs',
      'Ships flat-pack but assembles in 15 minutes with minimal tools',
      'Branch\'s 2-year warranty and responsive US-based customer support'
    ],
    cons: [
      'No headrest — not ideal if you like to recline during calls or breaks',
      'Armrests are 4D but have less range than Steelcase/Herman Miller equivalents'
    ],
    amazonUrl: 'https://amazon.com/dp/B0DFZM5QD8?tag=bestonamz0e-20',
    prime: true
  },
  {
    rank: 6,
    name: 'Humanscale Freedom Chair',
    tagline: 'Best Self-Adjusting Ergonomic Chair',
    image: '/images/humanscale-freedom.jpg',
    rating: 4.5,
    price: '$800-1200',
    pros: [
      'Self-weighing recline mechanism automatically calibrates to your body weight — no manual tension adjustment',
      'Headrest pivots as you recline to support your head in any position',
      'Exceptionally clean and minimal — one of the only premium chairs that doesn\'t look clinical',
      'Form-sensing mesh back conforms to your spine without levers',
      '15-year warranty on the mechanism'
    ],
    cons: [
      'Less adjustability overall than Aeron or Leap — the self-adjusting approach means fewer manual controls',
      'Headrest may interfere with sitting close to a high desk'
    ],
    amazonUrl: 'https://amazon.com/dp/B08577W8NB?tag=bestonamz0e-20',
    prime: true,
    award: 'Most Elegant'
  }
];

const faqs = [
  {
    question: "Herman Miller Aeron vs Steelcase Leap V2 — which should I buy?",
    answer: "Both are exceptional but they suit different people. The Aeron excels for hot-running people (the mesh breathes far better), people who want a proven classic with excellent resale value, and those who run hot in summer. The Leap V2 is better for people with chronic lower back pain (its lumbar adjustment is more granular), those who prefer a slight cushion over pure mesh, and people who recline a lot during the day. If you're buying used, the Leap V2 holds up better mechanically — the mechanisms are simpler and less prone to wear. Both have 12-year warranties and are available refurbished for $300–600 from reputable dealers, which is how most people buy them."
  },
  {
    question: "Is it worth spending $1,000+ on an office chair?",
    answer: "If you sit 6–8+ hours a day, yes — the math works out clearly. A $1,400 Herman Miller Aeron lasts 12–15 years with heavy use, costing roughly $100–120/year. A $250 budget chair typically lasts 2–3 years (often less) and degrades noticeably after year one, costing $80–125/year while causing significantly more physical discomfort. More importantly, chronic back and neck pain from poor seating is expensive to treat and affects focus and productivity. The ergonomic benefit alone tends to be worth it for anyone sitting more than 4 hours a day. If budget is a constraint, the used market for Herman Miller and Steelcase is excellent — refurbished Aerons sell for $350–550 from dealers like Crandall Office Furniture."
  },
  {
    question: "What's the difference between mesh and foam/leather office chairs?",
    answer: "Mesh backs are more breathable — you won't get a sweaty back after hours of sitting, which makes a real quality-of-life difference in summer or warm climates. Mesh also provides more consistent support because it adapts to your back's shape rather than compressing over time like foam. The tradeoff: mesh can feel harder than foam, and some people with bony prominences find the Aeron's mesh uncomfortable at first. High-density foam or cushioned backs (like the Leap V2's) provide more initial comfort and better suit people who find mesh too firm. If you run hot, mesh almost always wins long-term."
  },
  {
    question: "What should I look for in an ergonomic office chair?",
    answer: "In order of importance: (1) Lumbar support — it should be adjustable in both height and depth, not just in/out. (2) Seat depth adjustment — your feet should rest flat on the floor while leaving 2–3 fingers of space between the seat edge and the back of your knees. If the seat is too deep, you'll either strain your back or slouch. (3) Armrest height and width — arms should rest at approximately elbow height without lifting your shoulders. 4D armrests that adjust in/out and rotate make a significant difference for typing comfort. (4) Recline tension — you should be able to recline easily; if reclining takes effort, you'll avoid it and your back suffers. (5) Chair size for your body — many premium chairs come in multiple sizes, and buying the wrong size (too large or too small) undermines all the ergonomic benefits."
  },
  {
    question: "Can gaming chairs like the Secretlab TITAN be used for office work?",
    answer: "Yes, with caveats. The modern Secretlab TITAN Evo is genuinely ergonomic — it has proper lumbar support, adjustable armrests, and high weight limits. It's a meaningful step above the cheap racing-style gaming chairs sold at Walmart. However, it uses foam/leather rather than breathable mesh, so it gets warmer during long sessions. It also has pronounced side bolsters that some people find comfortable and others find restrictive. For 4–6 hour sessions in a home office, it's a solid choice — especially if aesthetics matter and you don't want a clinical-looking office chair. For 8+ hour work-from-home use, a proper ergonomic chair from Herman Miller or Steelcase is still the better investment."
  },
  {
    question: "How do I know if my chair fits my body correctly?",
    answer: "Sit all the way back in the chair with your back against the backrest. Your feet should rest flat on the floor (or on a footrest) with your knees at roughly 90 degrees. There should be 2–3 finger widths of gap between the front edge of the seat and the back of your knees — if there's no gap, the seat is too deep and will cut off circulation. Your armrests should support your forearms at elbow height with your shoulders relaxed (not elevated). The lumbar support should contact the curve of your lower back — not your mid-back or your tailbone. If it's touching your tailbone, the lumbar support is too low. Most people set their lumbar support too low."
  },
  {
    question: "What office chair is best for someone who is tall (6'2\" or over)?",
    answer: "Tall people (6'2\"+) have specific needs: seat depth, seat height range, and backrest height all matter more at extreme heights. The Herman Miller Aeron size C is specifically designed for taller and larger users (5'11\"–6'7\"). The Steelcase Gesture has an unusually wide seat height range (15.5\"–20.5\") that accommodates very tall users well. Avoid chairs with a seat height max below 20\" if you're over 6'2\" — your knees will end up above your hips and you'll slump. The Secretlab TITAN XL also works well for taller users, with an extended seat height and backrest."
  }
];

export default function BestOfficeChairs() {
  return (
    <ProductPageLayout
      title="Best Office Chairs on Amazon (2025): Ranked by Comfort & Ergonomics"
      description="Find the best office chairs on Amazon in 2025. We ranked the top ergonomic chairs from Herman Miller, Steelcase, Secretlab, and more — with detailed comparisons for back pain, all-day sitting, and different budgets."
      products={products}
      category="office chairs"
      lastUpdated="2025-02-25"
      faqs={faqs}
    />
  );
}
