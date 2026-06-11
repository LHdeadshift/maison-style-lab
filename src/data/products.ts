import imgW1 from "../assets/p-w1.jpg";
import imgW2 from "../assets/p-w2.jpg";
import imgW3 from "../assets/p-w3.jpg";
import imgW4 from "../assets/p-w4.jpg";
import imgW5 from "../assets/p-w5.jpg";
import imgW6 from "../assets/p-w6.jpg";
import imgW7 from "../assets/p-w7.jpg";
import imgW8 from "../assets/p-w8.jpg";
import imgW9 from "../assets/p-w9.jpg";
import imgW10 from "../assets/p-w10.jpg";
import imgW11 from "../assets/p-w11.jpg";
import imgW12 from "../assets/p-w12.jpg";
import imgB4 from "../assets/p-b4.jpg";
import imgB7 from "../assets/p-b7.jpg";
import imgB9 from "../assets/p-b9.jpg";
import imgB11 from "../assets/p-b11.jpg";
import imgB12 from "../assets/p-b12.jpg";
import imgA4 from "../assets/p-a4.jpg";
import imgA5 from "../assets/p-a5.jpg";
import imgA6 from "../assets/p-a6.jpg";
import imgA7 from "../assets/p-a7.jpg";
import imgA8 from "../assets/p-a8.jpg";
import imgA9 from "../assets/p-a9.jpg";
import imgA10 from "../assets/p-a10.jpg";
import imgA11 from "../assets/p-a11.jpg";
import imgA12 from "../assets/p-a12.jpg";
import imgF1 from "../assets/p-f1.jpg";
import imgF2 from "../assets/p-f2.jpg";
import imgF3 from "../assets/p-f3.jpg";
import imgF4 from "../assets/p-f4.jpg";
import imgF5 from "../assets/p-f5.jpg";
import imgF6 from "../assets/p-f6.jpg";
import imgF7 from "../assets/p-f7.jpg";
import imgF8 from "../assets/p-f8.jpg";
import imgF9 from "../assets/p-f9.jpg";
import imgF10 from "../assets/p-f10.jpg";
import imgF11 from "../assets/p-f11.jpg";
import imgF12 from "../assets/p-f12.jpg";

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: "watches" | "bags" | "fragrance" | "apparel";
  style: string[];
  occasion: string[];
  price: number;
  priceRange: "under-10k" | "10k-30k" | "30k-80k" | "80k+";
  image: string;
  description: string;
};

export const products: Product[] = [
  { id:"w1", name:"Submariner Homage", brand:"Oceanic Maison", category:"watches", style:["bold","classic"], occasion:["everyday","special event"], price:185000, priceRange:"80k+", image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80", description:"Swiss automatic, ceramic bezel, 300m water resistance. The definitive diver." },
  { id:"w2", name:"Slim Dress Watch No.4", brand:"Atelier Horlogé", category:"watches", style:["minimalist","classic"], occasion:["work","everyday"], price:42000, priceRange:"30k-80k", image:"https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80", description:"6.9mm ultra-thin, white lacquered dial, tan calf leather strap." },
  { id:"w3", name:"Royal Chronograph", brand:"Majestic Geneva", category:"watches", style:["bold","classic"], occasion:["special event","work"], price:320000, priceRange:"80k+", image:imgW3, description:"Flyback chronograph, 18k gold case, blue sunray dial, exhibition caseback." },
  { id:"w4", name:"Field Watch Heritage", brand:"Nomad Temps", category:"watches", style:["minimalist","bold"], occasion:["everyday"], price:8900, priceRange:"under-10k", image:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80", description:"Canvas NATO strap, Arabic numeral dial, anti-reflective mineral crystal." },
  { id:"w5", name:"Rose Perpetuelle", brand:"Lumière Paris", category:"watches", style:["romantic","classic"], occasion:["date night","special event"], price:275000, priceRange:"80k+", image:imgW5, description:"Rose gold case, blush mother-of-pearl dial, 11 brilliant-cut diamond indices." },
  { id:"w6", name:"Skeleton Noir", brand:"Obscura Watchworks", category:"watches", style:["bold"], occasion:["special event","date night"], price:145000, priceRange:"80k+", image:imgW6, description:"Black PVD case, fully skeletonised manual-wind movement, sapphire caseback." },
  { id:"w7", name:"GMT Voyager II", brand:"Meridian Co.", category:"watches", style:["classic","minimalist"], occasion:["work","everyday"], price:92000, priceRange:"80k+", image:"https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80", description:"Dual timezone display, bidirectional 24hr bezel, Super-LumiNova indices." },
  { id:"w8", name:"Dress Moonphase", brand:"Celestine Horlogé", category:"watches", style:["romantic","minimalist"], occasion:["special event","date night"], price:68000, priceRange:"30k-80k", image:"https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80", description:"Moonphase complication, midnight blue dial, hand-stitched ostrich strap." },
  { id:"w9", name:"Titanium Diver Pro", brand:"Pelagic Instruments", category:"watches", style:["bold","minimalist"], occasion:["everyday"], price:55000, priceRange:"30k-80k", image:"https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800&q=80", description:"Grade 5 titanium, 500m WR, helium escape valve, triple-safety clasp." },
  { id:"w10", name:"Vintage Reissue 1968", brand:"Archival Watch Co.", category:"watches", style:["classic","romantic"], occasion:["everyday","date night"], price:38000, priceRange:"30k-80k", image:"https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=800&q=80", description:"Faithful reissue of 1968 original, gilt dial, manual-wound caliber." },
  { id:"w11", name:"Sport Chronos Elite", brand:"Veloce Milano", category:"watches", style:["bold"], occasion:["everyday","work"], price:72000, priceRange:"30k-80k", image:imgW11, description:"Tachymeter bezel, pushers at 2 and 4, bi-compax chronograph layout." },
  { id:"w12", name:"Minimalist No.1", brand:"Blanc Studio", category:"watches", style:["minimalist"], occasion:["everyday","work"], price:18500, priceRange:"10k-30k", image:imgW12, description:"Brushed case, no-date dial, single-hand display. Distilled to its essence." },

  { id:"b1", name:"Birkin-Inspired Tote", brand:"Maison Verdeau", category:"bags", style:["classic","bold"], occasion:["work","special event"], price:285000, priceRange:"80k+", image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80", description:"Togo leather, palladium hardware, hand-stitched by a single artisan." },
  { id:"b2", name:"Structured Day Bag", brand:"Cortège Paris", category:"bags", style:["minimalist","classic"], occasion:["work","everyday"], price:68000, priceRange:"30k-80k", image:"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80", description:"Box calf leather, rigid silhouette, two internal compartments, gold clasp." },
  { id:"b3", name:"Evening Clutch Satin", brand:"Lumière Paris", category:"bags", style:["romantic","classic"], occasion:["date night","special event"], price:22000, priceRange:"10k-30k", image:"https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80", description:"Duchess satin body, magnetic envelope closure, removable chain strap." },
  { id:"b4", name:"Micro Croco Clutch", brand:"Selva Nera", category:"bags", style:["bold","romantic"], occasion:["date night","special event"], price:14500, priceRange:"10k-30k", image:imgB4, description:"Embossed crocodile leather, antique brass push-lock, wrist strap." },
  { id:"b5", name:"Quilted Chain Shoulder", brand:"Rue Cambon Studio", category:"bags", style:["romantic","classic"], occasion:["everyday","date night"], price:95000, priceRange:"80k+", image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80", description:"Diamond-quilted lambskin, woven leather-chain strap, burgundy grosgrain lining." },
  { id:"b6", name:"Canvas Weekender", brand:"Porteur & Co.", category:"bags", style:["classic","minimalist"], occasion:["everyday"], price:48000, priceRange:"30k-80k", image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80", description:"Coated canvas, full-grain leather base and trim, separate shoe compartment." },
  { id:"b7", name:"Box Bag Velvet", brand:"Obscura Maison", category:"bags", style:["bold","romantic"], occasion:["date night","special event"], price:32000, priceRange:"30k-80k", image:imgB7, description:"Midnight velvet exterior, aged brass hardware, push-lock with charm." },
  { id:"b8", name:"City Backpack", brand:"Nomad Maison", category:"bags", style:["minimalist","bold"], occasion:["everyday","work"], price:42000, priceRange:"30k-80k", image:"https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80", description:"Ballistic nylon, full-grain leather base, laptop sleeve, magnetic closures." },
  { id:"b9", name:"Hobo Soft Nappa", brand:"Venezia Atelier", category:"bags", style:["romantic","minimalist"], occasion:["everyday","date night"], price:58000, priceRange:"30k-80k", image:imgB9, description:"Supple nappa leather in a relaxed hobo silhouette, suede interior." },
  { id:"b10", name:"Structured Satchel", brand:"Cortège Paris", category:"bags", style:["classic","bold"], occasion:["work","everyday"], price:78000, priceRange:"30k-80k", image:"https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=800&q=80", description:"British-style doctor's bag silhouette, lock and key closure, briefcase handle." },
  { id:"b11", name:"Mini Crossbody", brand:"Selva Nera", category:"bags", style:["minimalist","romantic"], occasion:["everyday","date night"], price:16000, priceRange:"10k-30k", image:imgB11, description:"Compact pebbled leather, adjustable strap, two card slots inside." },
  { id:"b12", name:"Raffia Summer Tote", brand:"Côte d'Azur Studio", category:"bags", style:["minimalist","romantic"], occasion:["everyday"], price:38000, priceRange:"30k-80k", image:imgB12, description:"Hand-woven natural raffia with cognac leather trim and top handles. Resort essential." },

  { id:"f1", name:"Oud Absolu Intense", brand:"Al Baraka Parfums", category:"fragrance", style:["bold","classic"], occasion:["special event","date night"], price:18500, priceRange:"10k-30k", image:imgF1, description:"Agarwood, benzoin, smoky vetiver. A deeply resonant oud for the discerning." },
  { id:"f2", name:"White Tea & Iris", brand:"Jardin Blanc", category:"fragrance", style:["minimalist"], occasion:["everyday","work"], price:8200, priceRange:"under-10k", image:imgF2, description:"Cold-pressed white tea, orris root, clean musk. Quiet, present, effortless." },
  { id:"f3", name:"Rose Noir EDP", brand:"Lumière Paris", category:"fragrance", style:["romantic","classic"], occasion:["date night","special event"], price:24000, priceRange:"10k-30k", image:imgF3, description:"Centifolia rose absolute, dark patchouli, sandalwood base. A rose after dark." },
  { id:"f4", name:"Bergamot & Cedar", brand:"Jardin Blanc", category:"fragrance", style:["minimalist","classic"], occasion:["everyday","work"], price:6800, priceRange:"under-10k", image:imgF4, description:"Calabrian bergamot, Atlas cedarwood, dry vetiver. Clean confidence." },
  { id:"f5", name:"Suede Musc", brand:"Obscura Parfums", category:"fragrance", style:["romantic","minimalist"], occasion:["date night","everyday"], price:16500, priceRange:"10k-30k", image:imgF5, description:"Suede accord, white musk, cashmere wood. Skin-close and intimate." },
  { id:"f6", name:"Tobacco Vert", brand:"Atelier Fume", category:"fragrance", style:["bold"], occasion:["special event","date night"], price:32000, priceRange:"30k-80k", image:imgF6, description:"Green tobacco, saddle leather, dark oud. Unapologetic and rare." },
  { id:"f7", name:"Neroli Grandiflora", brand:"Côte d'Azur Studio", category:"fragrance", style:["romantic","minimalist"], occasion:["everyday","special event"], price:12000, priceRange:"10k-30k", image:imgF7, description:"Tunisian neroli absolute, petitgrain, warm musk base. Mediterranean sunlight." },
  { id:"f8", name:"Amber Imperiale", brand:"Al Baraka Parfums", category:"fragrance", style:["bold","classic"], occasion:["special event","work"], price:42000, priceRange:"30k-80k", image:imgF8, description:"Labdanum amber, olibanum, aged patchouli. A resinous monument." },
  { id:"f9", name:"Violette Noir", brand:"Lumière Paris", category:"fragrance", style:["romantic","bold"], occasion:["date night","special event"], price:28000, priceRange:"10k-30k", image:imgF9, description:"Parma violet, iris butter, dark plum accord. Velvet and intrigue." },
  { id:"f10", name:"Hinoki & Smoke", brand:"Atelier Fume", category:"fragrance", style:["minimalist","bold"], occasion:["everyday","work"], price:22000, priceRange:"10k-30k", image:imgF10, description:"Japanese cypress, birch tar, white smoke accord. Meditative and grounding." },
  { id:"f11", name:"Gardenia Absolute", brand:"Côte d'Azur Studio", category:"fragrance", style:["romantic","classic"], occasion:["date night","everyday"], price:19500, priceRange:"10k-30k", image:imgF11, description:"Indolic gardenia, tuberose heart, creamy sandalwood dry-down." },
  { id:"f12", name:"Vetiver Gris", brand:"Jardin Blanc", category:"fragrance", style:["minimalist","classic"], occasion:["work","everyday"], price:14000, priceRange:"10k-30k", image:imgF12, description:"Haitian vetiver, grey pepper, cedar. The earthiest of elegances." },

  { id:"a1", name:"Cashmere Long Coat", brand:"Sartoria Bianco", category:"apparel", style:["classic","minimalist"], occasion:["special event","work"], price:185000, priceRange:"80k+", image:"https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80", description:"100% Scottish cashmere, floor-length, covered horn buttons, internal belt." },
  { id:"a2", name:"Bouclé Cropped Jacket", brand:"Atelier Rue", category:"apparel", style:["romantic","classic"], occasion:["special event","date night"], price:95000, priceRange:"80k+", image:"https://images.unsplash.com/photo-1520012218364-3dbe62c99bee?w=800&q=80", description:"Ivory French bouclé, cropped at hip, contrast grosgrain trim, gilt buttons." },
  { id:"a3", name:"Wool Crepe Blazer", brand:"Sartoria Bianco", category:"apparel", style:["classic","minimalist"], occasion:["work","special event"], price:68000, priceRange:"30k-80k", image:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80", description:"Italian double-faced wool crepe, single button, notched lapel, half-canvassed." },
  { id:"a4", name:"Linen Oversized Blazer", brand:"Studio Neutre", category:"apparel", style:["minimalist"], occasion:["everyday","work"], price:18000, priceRange:"10k-30k", image:"https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80", description:"Stonewashed Belgian linen, relaxed fit, patch pockets, unlined." },
  { id:"a5", name:"Bias-Cut Silk Dress", brand:"Lumière Paris", category:"apparel", style:["romantic","bold"], occasion:["special event","date night"], price:145000, priceRange:"80k+", image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80", description:"19mm silk charmeuse, bias construction, adjustable straps, midi length." },
  { id:"a6", name:"Wide-Leg Crepe Trousers", brand:"Studio Neutre", category:"apparel", style:["bold","minimalist"], occasion:["work","everyday"], price:26000, priceRange:"10k-30k", image:imgA6, description:"Fluid acetate crepe, high-rise waist, wide-leg silhouette, invisible zip." },
  { id:"a7", name:"Tuxedo Smoking Jacket", brand:"Maison Forêt", category:"apparel", style:["bold","classic"], occasion:["special event"], price:220000, priceRange:"80k+", image:imgA7, description:"Midnight navy wool-silk, satin peak lapels, jetted pockets, full canvas." },
  { id:"a8", name:"Silk Blouse — Ivory", brand:"Atelier Rue", category:"apparel", style:["romantic","minimalist","classic"], occasion:["work","everyday","date night"], price:38000, priceRange:"30k-80k", image:"https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&q=80", description:"16mm habotai silk, relaxed pussy-bow tie, mother-of-pearl buttons." },
  { id:"a9", name:"Knit Polo Cashmere", brand:"Sartoria Bianco", category:"apparel", style:["classic","minimalist"], occasion:["everyday","work"], price:42000, priceRange:"30k-80k", image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80", description:"2-ply Mongolian cashmere, three-button placket, ribbed cuffs and hem." },
  { id:"a10", name:"Leather Trench Coat", brand:"Maison Forêt", category:"apparel", style:["bold","classic"], occasion:["everyday","special event"], price:295000, priceRange:"80k+", image:"https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&q=80", description:"Butter-soft nappa leather, belted silhouette, storm flap, satin lining." },
  { id:"a11", name:"Pleated Midi Skirt", brand:"Studio Neutre", category:"apparel", style:["romantic","minimalist"], occasion:["everyday","date night"], price:22000, priceRange:"10k-30k", image:imgA11, description:"Permanent-pleated crepe, elasticated waist, falls just below the knee." },
  { id:"a12", name:"Double-Breasted Suit", brand:"Sartoria Bianco", category:"apparel", style:["bold","classic"], occasion:["work","special event"], price:165000, priceRange:"80k+", image:imgA12, description:"Super 120s wool, peak lapels, 6x2 button stance, full brace buttons." },
];

export const formatINR = (n: number) => "₹" + n.toLocaleString("en-IN");
