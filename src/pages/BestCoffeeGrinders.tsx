import ProductPageLayout from "@/components/ProductPageLayout";

const products = [
  {
    rank: 1,
    name: 'Breville Smart Grinder Pro',
    tagline: 'Best Overall Coffee Grinder – Espresso to Pour-Over',
    image: '/images/breville-smart-grinder-pro.jpg',
    rating: 4.8,
    price: '$200-250',
    pros: [
      '60 grind settings via a single-action selector — finer resolution than most grinders in this price range, covering Turkish to cold brew',
      'Conical stainless steel burrs with a wide surface reduce heat buildup, preserving volatile aromatics that faster grinders lose',
      'Dosing IQ technology measures grind time to the 0.2-second interval — consistently hits your target dose within ±0.1g',
      'Single-dose or timed grinding modes with a dedicated portafilter holder (54mm fits most home espresso machines)',
      'Large 18oz hopper with an airtight shutter seals between grinds — prevents oxidation of beans left in the hopper'
    ],
    cons: [
      'Ground coffee retention in the chute is 0.5–1g per grind — noticeable for single-dosing purists (tapping clears most of it)',
      'The 60-setting rotary dial requires care for small espresso adjustments — not stepped clicks'
    ],
    amazonUrl: 'https://amazon.com/dp/B00OXGXW8O?tag=bestonamz0e-20',
    prime: true,
    award: 'Top Pick'
  },
  {
    rank: 2,
    name: 'Baratza Encore ESP',
    tagline: 'Best Entry-Level Burr Grinder for Espresso + Drip',
    image: '/images/baratza-encore.jpg',
    rating: 4.7,
    price: '$170-190',
    pros: [
      'Conical burrs with 40 grind settings calibrated for espresso through coarse drip — Baratza\'s most versatile budget grinder',
      'Best repair ecosystem at this price: nearly every component is available as a spare part; Baratza actively supports repairability',
      'Consistent particle size distribution competitive with grinders at 2× the price in blind cupping tests',
      'Pulse button enables short bursts for precise single-dose grinding — missing from many entry-level grinders',
      'Compact 4.7" × 6.3" footprint fits under most kitchen cabinets'
    ],
    cons: [
      'Motor noise is louder than the Fellow Ode or Breville — audible across a small apartment',
      'Not suitable for micro-adjustments needed by high-end lever espresso machines'
    ],
    amazonUrl: 'https://amazon.com/dp/B0BW272XCV?tag=bestonamz0e-20',
    prime: true,
    award: 'Best Entry-Level'
  },
  {
    rank: 3,
    name: 'Fellow Ode Gen 2',
    tagline: 'Best Grinder for Filter Coffee – Near-Zero Retention',
    image: '/images/fellow-ode-gen2.jpg',
    rating: 4.6,
    price: '$350-400',
    pros: [
      'Gen 2 burrs produce a noticeably more uniform grind than Gen 1 — significant improvement in cup clarity for pour-over, AeroPress, and French press',
      'Single-dose design with magnetic catch cup and anti-static coating results in under 0.1g retention — best in class for home filter grinders',
      'Anti-static grounds expulsion prevents grounds from clinging inside the chute',
      'Grinds at 1.5g per second — faster than hand grinders without heat risk from slower flat burr models',
      'Slim 3.5" wide footprint — the narrowest electric grinder on this list for tight kitchen layouts'
    ],
    cons: [
      'Not designed for espresso: grind range doesn\'t go fine enough for 9-bar extraction',
      'No hopper — built purely for single-dosing; requires re-loading beans for multiple cups'
    ],
    amazonUrl: 'https://amazon.com/dp/B0BLRMCM9Y?tag=bestonamz0e-20',
    prime: true,
    award: 'Best for Filter Coffee'
  },
  {
    rank: 4,
    name: 'Timemore C3 ESP Pro',
    tagline: 'Best Manual Grinder – Espresso-Capable Travel Pick',
    image: '/images/timemore-c3-esp-pro.jpg',
    rating: 4.5,
    price: '$100-120',
    pros: [
      'S2C burr upgrade adds stepped fine-grind settings for espresso — the only travel grinder in this price range that legitimately covers the espresso range',
      'Cold-forged stainless steel body is lighter than aluminum competitors while remaining dent-resistant',
      'Folding handle collapses flush with the body — fits in a jacket pocket or carry-on without breakage risk',
      'Numbered adjustment dial with audible clicks — repeatable settings across home, office, and travel',
      'Grinds 18g of espresso in about 60 seconds — faster than most manual grinders at fine settings'
    ],
    cons: [
      'Manual grinding 18g for espresso requires noticeable wrist effort — not practical for grinding multiple doses',
      'Narrow catch cup can trap grounds against the inner wall if not tapped after grinding'
    ],
    amazonUrl: 'https://amazon.com/dp/B0BZHFYWZD?tag=bestonamz0e-20',
    prime: true,
    award: 'Best Manual Grinder'
  },
  {
    rank: 5,
    name: 'OXO Brew Conical Burr Grinder',
    tagline: 'Best Simple Grinder – One-Button Operation',
    image: '/images/oxo-brew-conical.jpg',
    rating: 4.3,
    price: '$100-120',
    pros: [
      'One-button operation with a 15-position selector and integrated timer — most intuitive interface of any grinder on this list',
      'Stainless steel conical burrs produce consistent grinds for drip, French press, and pour-over',
      'Upper burr removes without tools for easy cleaning — under 5 minutes to clear retained grounds',
      'Compact hopper holds 0.75 lb of beans — practical for weekly household use'
    ],
    cons: [
      '15 grind settings is fewer than competing models — less precision for specialty pour-over dialing',
      'Cannot grind fine enough for espresso — minimum setting produces under-extracted shots on most machines'
    ],
    amazonUrl: 'https://amazon.com/dp/B07CSKGLMM?tag=bestonamz0e-20',
    prime: true,
    award: 'Easiest to Use'
  }
];

const faqs = [
  {
    question: "Burr grinder vs blade grinder: does it really make a difference?",
    answer: "The difference is dramatic and immediately noticeable. A blade grinder chops beans into irregular sizes — from powder to large chunks — which extract at different rates simultaneously: fine particles over-extract (bitter), large chunks under-extract (sour and weak). A burr grinder crushes beans between two surfaces into a uniform particle size, so water pulls the same compounds from every particle at the same rate. The result is balanced, clear coffee you can actually taste. If you currently use a blade grinder and find your coffee variable or hard to enjoy, switching to a burr grinder is the single biggest improvement you can make — more impactful than upgrading your brewer."
  },
  {
    question: "Which coffee grinder is best for espresso specifically?",
    answer: "Espresso demands the most precise grind adjustment of any brew method — small changes in grind size dramatically affect extraction time and shot quality. You need: (1) fine-enough grind settings, (2) small stepped or stepless adjustments, and (3) consistent particle size. The Breville Smart Grinder Pro is the best value espresso grinder on this list, hitting all three criteria and integrating with most 54mm portafilter home machines. The Baratza Encore ESP works for espresso on entry-level machines. The Fellow Ode and OXO Brew cannot grind fine enough for espresso at all. For high-end lever machines or prosumer setups, consider a dedicated espresso grinder (Eureka Mignon, Niche Zero) beyond the scope of this list."
  },
  {
    question: "Flat burrs vs conical burrs: which should I buy?",
    answer: "For most home users, conical burrs are the better choice. They run cooler (less heat damage to aromatics during grinding), have lower retention (less coffee left inside between grinds), and work well across different grind settings. Flat burrs produce slightly more uniform particle distribution that some specialty professionals prefer for competition pour-over, but the difference is marginal at home. Flat burr grinders also tend to run louder and warmer. All grinders on this list use conical burrs — unless you're competing in barista championships, flat burrs at this price range offer no real advantage for daily home use."
  },
  {
    question: "Does grinding fresh actually matter?",
    answer: "Yes, and the effect is larger than most people expect. Ground coffee loses volatile aromatics through oxidation rapidly — the window for optimal freshness is roughly 15–30 minutes after grinding. Pre-ground coffee sold in bags has typically been ground days or weeks prior; even stored in an airtight container, it loses significant aromatic complexity within 48 hours. This is why specialty coffee professionals insist on grinding fresh: the same beans ground fresh vs. stored 24 hours produce noticeably different cups in a blind test. For espresso this is especially pronounced — pre-ground espresso often produces flat, muted shots. For standard drip, the effect is real but more subtle."
  },
  {
    question: "How often should I clean my coffee grinder?",
    answer: "For a daily home grinder, a light cleaning every 2 weeks and a deep clean every 1–3 months is sufficient. Light cleaning: use a stiff brush to clear retained grounds from the burrs and chute — this prevents stale grounds from mixing into fresh batches. Deep cleaning: remove the upper burr (most home grinders require no tools) and use grinder cleaning tablets (like Grindz) or a dry cloth to clear coffee oil buildup from the burr surfaces. Coffee oils go rancid and coat the surfaces over time, adding bitter notes to your coffee. The OXO Brew is the easiest to clean on this list — top burr removes without tools in seconds."
  },
  {
    question: "Is a $200 burr grinder worth it over a $50 blade grinder?",
    answer: "If you drink coffee daily and care about what it tastes like, yes — the math is clear. Specialty whole-bean coffee costs $16–20/lb and produces noticeably better results in a burr grinder. A $190 Baratza Encore ESP lasts 7–10 years with basic maintenance, costing about $20–25/year amortized. More importantly, it actually unlocks the quality in your beans — a blade grinder produces the same muddy extraction regardless of how good your coffee is. If you're buying quality beans and using a blade grinder, you're spending money on beans you're not tasting. If you only drink office-drip-style coffee and don't particularly care about the result, a blade grinder is adequate. But if you notice the difference between good and bad coffee, a burr grinder makes that difference every single day."
  }
];

export default function BestCoffeeGrinders() {
  return (
    <ProductPageLayout
      title="Best Coffee Grinders on Amazon (2025): Burr Grinders Ranked"
      description="Find the best coffee grinders on Amazon in 2025. We tested and ranked burr grinders for espresso, pour-over, and drip from Baratza, Breville, Fellow, and Timemore — with honest buying advice."
      products={products}
      category="Coffee Grinders"
      lastUpdated="2025-02-25"
      faqs={faqs}
    />
  );
}
