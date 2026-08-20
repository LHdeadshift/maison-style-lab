# MAISON Style Lab

Build a complete luxury fashion e-commerce website called "MAISON" 
from scratch. This is a research study site testing rule-based 
personalisation. Follow every single instruction below exactly 
with zero errors.

═══════════════════════════════════════════════════════
PART 1 — TECHNICAL FOUNDATION
═══════════════════════════════════════════════════════

Stack:
- React + Vite
- Tailwind CSS
- React Router DOM for all navigation
- React Context API for cart (NO localStorage anywhere)
- Google Fonts via index.html head tag

Font import in index.html <head>:
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">

Global CSS (apply in index.css):
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #FAFAF8; color: #1A1A1A; font-family: 'Inter', sans-serif; }
h1,h2,h3,h4,h5 { font-family: 'Playfair Display', serif; }

Color variables in :root {
  --cream: #FAFAF8;
  --black: #1A1A1A;
  --gold: #C9A96E;
  --gold-light: #F0E6CC;
  --gray: #6B6B6B;
  --border: #E8E8E4;
}

File structure:
src/
  context/CartContext.jsx
  data/products.js
  pages/Home.jsx
  pages/Collections.jsx
  pages/FindYourStyle.jsx
  pages/ProductDetail.jsx
  components/Navbar.jsx
  components/CartSidebar.jsx
  components/ProductCard.jsx
  components/Toast.jsx
  App.jsx
  main.jsx
  index.css

═══════════════════════════════════════════════════════
PART 2 — COMPLETE PRODUCT DATABASE
Save this in src/data/products.js
═══════════════════════════════════════════════════════

export const products = [

// ════════ WATCHES — 12 products, varied luxury brands ════════

{ id:"w1", name:"Submariner Homage", brand:"Oceanic Maison",
  category:"watches", style:["bold","classic"],
  occasion:["everyday","special event"], price:185000,
  priceRange:"80k+",
  image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
  description:"Swiss automatic, ceramic bezel, 300m water resistance. The definitive diver." },

{ id:"w2", name:"Slim Dress Watch No.4", brand:"Atelier Horlogé",
  category:"watches", style:["minimalist","classic"],
  occasion:["work","everyday"], price:42000,
  priceRange:"30k-80k",
  image:"https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
  description:"6.9mm ultra-thin, white lacquered dial, tan calf leather strap." },

{ id:"w3", name:"Royal Chronograph", brand:"Majestic Geneva",
  category:"watches", style:["bold","classic"],
  occasion:["special event","work"], price:320000,
  priceRange:"80k+",
  image:"https://images.unsplash.com/photo-1639037427455-b7be63d2b6d8?w=800&q=80",
  description:"Flyback chronograph, 18k gold case, blue sunray dial, exhibition caseback." },

{ id:"w4", name:"Field Watch Heritage", brand:"Nomad Temps",
  category:"watches", style:["minimalist","bold"],
  occasion:["everyday"], price:8900,
  priceRange:"under-10k",
  image:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&q=80",
  description:"Canvas NATO strap, Arabic numeral dial, anti-reflective mineral crystal." },

{ id:"w5", name:"Rose Perpetuelle", brand:"Lumière Paris",
  category:"watches", style:["romantic","classic"],
  occasion:["date night","special event"], price:275000,
  priceRange:"80k+",
  image:"https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80",
  description:"Rose gold case, blush mother-of-pearl dial, 11 brilliant-cut diamond indices." },

{ id:"w6", name:"Skeleton Noir", brand:"Obscura Watchworks",
  category:"watches", style:["bold"],
  occasion:["special event","date night"], price:145000,
  priceRange:"80k+",
  image:"https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&q=80",
  description:"Black PVD case, fully skeletonised manual-wind movement, sapphire caseback." },

{ id:"w7", name:"GMT Voyager II", brand:"Meridian Co.",
  category:"watches", style:["classic","minimalist"],
  occasion:["work","everyday"], price:92000,
  priceRange:"80k+",
  image:"https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80",
  description:"Dual timezone display, bidirectional 24hr bezel, Super-LumiNova indices." },

{ id:"w8", name:"Dress Moonphase", brand:"Celestine Horlogé",
  category:"watches", style:["romantic","minimalist"],
  occasion:["special event","date night"], price:68000,
  priceRange:"30k-80k",
  image:"https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80",
  description:"Moonphase complication, midnight blue dial, hand-stitched ostrich strap." },

{ id:"w9", name:"Titanium Diver Pro", brand:"Pelagic Instruments",
  category:"watches", style:["bold","minimalist"],
  occasion:["everyday"], price:55000,
  priceRange:"30k-80k",
  image:"https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=800&q=80",
  description:"Grade 5 titanium, 500m WR, helium escape valve, triple-safety clasp." },

{ id:"w10", name:"Vintage Reissue 1968", brand:"Archival Watch Co.",
  category:"watches", style:["classic","romantic"],
  occasion:["everyday","date night"], price:38000,
  priceRange:"30k-80k",
  image:"https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=800&q=80",
  description:"Faithful reissue of 1968 original, gilt dial, manual-wound caliber." },

{ id:"w11", name:"Sport Chronos Elite", brand:"Veloce Milano",
  category:"watches", style:["bold"],
  occasion:["everyday","work"], price:72000,
  priceRange:"30k-80k",
  image:"https://images.unsplash.com/photo-1548171916-c8fd5d56a0e8?w=800&q=80",
  description:"Tachymeter bezel, pushers at 2 and 4, bi-compax chronograph layout." },

{ id:"w12", name:"Minimalist No.1", brand:"Blanc Studio",
  category:"watches", style:["minimalist"],
  occasion:["everyday","work"], price:18500,
  priceRange:"10k-30k",
  image:"https://images.unsplash.com/photo-1560343776-97e7d202ff0e?w=800&q=80",
  description:"Brushed case, no-date dial, single-hand display. Distilled to its essence." },


// ════════ BAGS — 12 products, varied luxury brands ════════

{ id:"b1", name:"Birkin-Inspired Tote", brand:"Maison Verdeau",
  category:"bags", style:["classic","bold"],
  occasion:["work","special event"], price:285000,
  priceRange:"80k+",
  image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
  description:"Togo leather, palladium hardware, hand-stitched by a single artisan." },

{ id:"b2", name:"Structured Day Bag", brand:"Cortège Paris",
  category:"bags", style:["minimalist","classic"],
  occasion:["work","everyday"], price:68000,
  priceRange:"30k-80k",
  image:"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
  description:"Box calf leather, rigid silhouette, two internal compartments, gold clasp." },

{ id:"b3", name:"Evening Clutch Satin", brand:"Lumière Paris",
  category:"bags", style:["romantic","classic"],
  occasion:["date night","special event"], price:22000,
  priceRange:"10k-30k",
  image:"https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
  description:"Duchess satin body, magnetic envelope closure, removable chain strap." },

{ id:"b4", name:"Micro Croco Clutch", brand:"Selva Nera",
  category:"bags", style:["bold","romantic"],
  occasion:["date night","special event"], price:14500,
  priceRange:"10k-30k",
  image:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80",
  description:"Embossed crocodile leather, antique brass push-lock, wrist strap." },

{ id:"b5", name:"Quilted Chain Shoulder", brand:"Rue Cambon Studio",
  category:"bags", style:["romantic","classic"],
  occasion:["everyday","date night"], price:95000,
  priceRange:"80k+",
  image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
  description:"Diamond-quilted lambskin, woven leather-chain strap, burgundy grosgrain lining." },

{ id:"b6", name:"Canvas Weekender", brand:"Porteur & Co.",
  category:"bags", style:["classic","minimalist"],
  occasion:["everyday"], price:48000,
  priceRange:"30k-80k",
  image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
  description:"Coated canvas, full-grain leather base and trim, separate shoe compartment." },

{ id:"b7", name:"Box Bag Velvet", brand:"Obscura Maison",
  category:"bags", style:["bold","romantic"],
  occasion:["date night","special event"], price:32000,
  priceRange:"30k-80k",
  image:"https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80",
  description:"Midnight velvet exterior, aged brass hardware, push-lock with charm." },

{ id:"b8", name:"City Backpack", brand:"Nomad Maison",
  category:"bags", style:["minimalist","bold"],
  occasion:["everyday","work"], price:42000,
  priceRange:"30k-80k",
  image:"https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80",
  description:"Ballistic nylon, full-grain leather base, laptop sleeve, magnetic closures." },

{ id:"b9", name:"Hobo Soft Nappa", brand:"Venezia Atelier",
  category:"bags", style:["romantic","minimalist"],
  occasion:["everyday","date night"], price:58000,
  priceRange:"30k-80k",
  image:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
  description:"Supple nappa leather in a relaxed hobo silhouette, suede interior." },

{ id:"b10", name:"Structured Satchel", brand:"Cortège Paris",
  category:"bags", style:["classic","bold"],
  occasion:["work","everyday"], price:78000,
  priceRange:"30k-80k",
  image:"https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=800&q=80",
  description:"British-style doctor's bag silhouette, lock and key closure, briefcase handle." },

{ id:"b11", name:"Mini Crossbody", brand:"Selva Nera",
  category:"bags", style:["minimalist","romantic"],
  occasion:["everyday","date night"], price:16000,
  priceRange:"10k-30k",
  image:"https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
  description:"Compact pebbled leather, adjustable strap, two card slots inside." },

{ id:"b12", name:"Oversized Shopper", brand:"Maison Verdeau",
  category:"bags", style:["bold","classic"],
  occasion:["everyday"], price:125000,
  priceRange:"80k+",
  image:"https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800&q=80",
  description:"Buttery soft nappa in oversized format, magnetic snap, unlined for lightness." },


// ════════ FRAGRANCE — 12 products, varied luxury houses ════════

{ id:"f1", name:"Oud Absolu Intense", brand:"Al Baraka Parfums",
  category:"fragrance", style:["bold","classic"],
  occasion:["special event","date night"], price:18500,
  priceRange:"10k-30k",
  image:"https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=80",
  description:"Agarwood, benzoin, smoky vetiver. A deeply resonant oud for the discerning." },

{ id:"f2", name:"White Tea & Iris", brand:"Jardin Blanc",
  category:"fragrance", style:["minimalist"],
  occasion:["everyday","work"], price:8200,
  priceRange:"under-10k",
  image:"https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=800&q=80",
  description:"Cold-pressed white tea, orris root, clean musk. Quiet, present, effortless." },

{ id:"f3", name:"Rose Noir EDP", brand:"Lumière Paris",
  category:"fragrance", style:["romantic","classic"],
  occasion:["date night","special event"], price:24000,
  priceRange:"10k-30k",
  image:"https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80",
  description:"Centifolia rose absolute, dark patchouli, sandalwood base. A rose after dark." },

{ id:"f4", name:"Bergamot & Cedar", brand:"Jardin Blanc",
  category:"fragrance", style:["minimalist","classic"],
  occasion:["everyday","work"], price:6800,
  priceRange:"under-10k",
  image:"https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&q=80",
  description:"Calabrian bergamot, Atlas cedarwood, dry vetiver. Clean confidence." },

{ id:"f5", name:"Suede Musc", brand:"Obscura Parfums",
  category:"fragrance", style:["romantic","minimalist"],
  occasion:["date night","everyday"], price:16500,
  priceRange:"10k-30k",
  image:"https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80",
  description:"Suede accord, white musk, cashmere wood. Skin-close and intimate." },

{ id:"f6", name:"Tobacco Vert", brand:"Atelier Fume",
  category:"fragrance", style:["bold"],
  occasion:["special event","date night"], price:32000,
  priceRange:"30k-80k",
  image:"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
  description:"Green tobacco, saddle leather, dark oud. Unapologetic and rare." },

{ id:"f7", name:"Neroli Grandiflora", brand:"Côte d'Azur Studio",
  category:"fragrance", style:["romantic","minimalist"],
  occasion:["everyday","special event"], price:12000,
  priceRange:"10k-30k",
  image:"https://images.unsplash.com/photo-1600612253971-61a39647e1d8?w=800&q=80",
  description:"Tunisian neroli absolute, petitgrain, warm musk base. Mediterranean sunlight." },

{ id:"f8", name:"Amber Imperiale", brand:"Al Baraka Parfums",
  category:"fragrance", style:["bold","classic"],
  occasion:["special event","work"], price:42000,
  priceRange:"30k-80k",
  image:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80",
  description:"Labdanum amber, olibanum, aged patchouli. A resinous monument." },

{ id:"f9", name:"Violette Noir", brand:"Lumière Paris",
  category:"fragrance", style:["romantic","bold"],
  occasion:["date night","special event"], price:28000,
  priceRange:"10k-30k",
  image:"https://images.unsplash.com/photo-1590156562745-5d09f82db2be?w=800&q=80",
  description:"Parma violet, iris butter, dark plum accord. Velvet and intrigue." },

{ id:"f10", name:"Hinoki & Smoke", brand:"Atelier Fume",
  category:"fragrance", style:["minimalist","bold"],
  occasion:["everyday","work"], price:22000,
  priceRange:"10k-30k",
  image:"https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=800&q=80",
  description:"Japanese cypress, birch tar, white smoke accord. Meditative and grounding." },

{ id:"f11", name:"Gardenia Absolute", brand:"Côte d'Azur Studio",
  category:"fragrance", style:["romantic","classic"],
  occasion:["date night","everyday"], price:19500,
  priceRange:"10k-30k",
  image:"https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=80",
  description:"Indolic gardenia, tuberose heart, creamy sandalwood dry-down." },

{ id:"f12", name:"Vetiver Gris", brand:"Jardin Blanc",
  category:"fragrance", style:["minimalist","classic"],
  occasion:["work","everyday"], price:14000,
  priceRange:"10k-30k",
  image:"https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=800&q=80",
  description:"Haitian vetiver, grey pepper, cedar. The earthiest of elegances." },


// ════════ APPAREL — 12 products, varied luxury labels ════════

{ id:"a1", name:"Cashmere Long Coat", brand:"Sartoria Bianco",
  category:"apparel", style:["classic","minimalist"],
  occasion:["special event","work"], price:185000,
  priceRange:"80k+",
  image:"https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80",
  description:"100% Scottish cashmere, floor-length, covered horn buttons, internal belt." },

{ id:"a2", name:"Bouclé Cropped Jacket", brand:"Atelier Rue",
  category:"apparel", style:["romantic","classic"],
  occasion:["special event","date night"], price:95000,
  priceRange:"80k+",
  image:"https://images.unsplash.com/photo-1520012218364-3dbe62c99bee?w=800&q=80",
  description:"Ivory French bouclé, cropped at hip, contrast grosgrain trim, gilt buttons." },

{ id:"a3", name:"Wool Crepe Blazer", brand:"Sartoria Bianco",
  category:"apparel", style:["classic","minimalist"],
  occasion:["work","special event"], price:68000,
  priceRange:"30k-80k",
  image:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
  description:"Italian double-faced wool crepe, single button, notched lapel, half-canvassed." },

{ id:"a4", name:"Linen Oversized Blazer", brand:"Studio Neutre",
  category:"apparel", style:["minimalist"],
  occasion:["everyday","work"], price:18000,
  priceRange:"10k-30k",
  image:"https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80",
  description:"Stonewashed Belgian linen, relaxed fit, patch pockets, unlined." },

{ id:"a5", name:"Bias-Cut Silk Dress", brand:"Lumière Paris",
  category:"apparel", style:["romantic","bold"],
  occasion:["special event","date night"], price:145000,
  priceRange:"80k+",
  image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
  description:"19mm silk charmeuse, bias construction, adjustable straps, midi length." },

{ id:"a6", name:"Wide-Leg Crepe Trousers", brand:"Studio Neutre",
  category:"apparel", style:["bold","minimalist"],
  occasion:["work","everyday"], price:26000,
  priceRange:"10k-30k",
  image:"https://images.unsplash.com/photo-1594938298603-c8148c4b4051?w=800&q=80",
  description:"Fluid acetate crepe, high-rise waist, wide-leg silhouette, invisible zip." },

{ id:"a7", name:"Tuxedo Smoking Jacket", brand:"Maison Forêt",
  category:"apparel", style:["bold","classic"],
  occasion:["special event"], price:220000,
  priceRange:"80k+",
  image:"https://images.unsplash.com/photo-1598808503246-56c89e1a8f14?w=800&q=80",
  description:"Midnight navy wool-silk, satin peak lapels, jetted pockets, full canvas." },

{ id:"a8", name:"Silk Blouse — Ivory", brand:"Atelier Rue",
  category:"apparel", style:["romantic","minimalist","classic"],
  occasion:["work","everyday","date night"], price:38000,
  priceRange:"30k-80k",
  image:"https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&q=80",
  description:"16mm habotai silk, relaxed pussy-bow tie, mother-of-pearl buttons." },

{ id:"a9", name:"Knit Polo Cashmere", brand:"Sartoria Bianco",
  category:"apparel", style:["classic","minimalist"],
  occasion:["everyday","work"], price:42000,
  priceRange:"30k-80k",
  image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
  description:"2-ply Mongolian cashmere, three-button placket, ribbed cuffs and hem." },

{ id:"a10", name:"Leather Trench Coat", brand:"Maison Forêt",
  category:"apparel", style:["bold","classic"],
  occasion:["everyday","special event"], price:295000,
  priceRange:"80k+",
  image:"https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&q=80",
  description:"Butter-soft nappa leather, belted silhouette, storm flap, satin lining." },

{ id:"a11", name:"Pleated Midi Skirt", brand:"Studio Neutre",
  category:"apparel", style:["romantic","minimalist"],
  occasion:["everyday","date night"], price:22000,
  priceRange:"10k-30k",
  image:"https://images.unsplash.com/photo-1583496661160-fb5218ees766?w=800&q=80",
  description:"Permanent-pleated crepe, elasticated waist, falls just below the knee." },

{ id:"a12", name:"Double-Breasted Suit", brand:"Sartoria Bianco",
  category:"apparel", style:["bold","classic"],
  occasion:["work","special event"], price:165000,
  priceRange:"80k+",
  image:"https://images.unsplash.com/photo-1594938374182-a57369b25390?w=800&q=80",
  description:"Super 120s wool, peak lapels, 6x2 button stance, full brace buttons." },

]; // end of products array


═══════════════════════════════════════════════════════
PART 3 — CART CONTEXT
Save in src/context/CartContext.jsx
═══════════════════════════════════════════════════════

Create CartContext with:
- cartItems state (array)
- addToCart(product) — adds item or increments qty
- removeFromCart(id) — removes item completely
- updateQuantity(id, qty) — updates qty, removes if 0
- cartCount — total number of items
- cartTotal — sum of all item prices × quantities
- isCartOpen state + setIsCartOpen
- source tracking: when adding to cart, also store
  how the product was found:
  "style-match" if from FindYourStyle page
  "category-browse" if from Collections page
  "featured" if from Homepage
  Pass source as second argument to addToCart

Wrap entire App in CartProvider.


═══════════════════════════════════════════════════════
PART 4 — NAVBAR COMPONENT
═══════════════════════════════════════════════════════

Design:
- Height: 72px
- Background: #FAFAF8 with bottom border 1px #E8E8E4
- Position: sticky top-0, z-index 100
- Left: "MAISON" in Playfair Display 22px letter-spacing 0.15em
- Center: navigation links (desktop only)
  Home · Collections · Find Your Style · About
  Links in Inter 400 13px uppercase letter-spacing 0.1em
  Active link gets gold underline 2px
- Right: bag icon + item count badge
  Use a simple SVG tote bag icon
  Gold filled circle badge appears when cart > 0
  Badge shows count number in white Inter 500 10px
  Badge has subtle scale animation on new item added
- Mobile: hamburger menu (three lines SVG)
  Drawer slides in from left showing all nav links
  Full width, white background


═══════════════════════════════════════════════════════
PART 5 — HOMEPAGE (src/pages/Home.jsx)
═══════════════════════════════════════════════════════

SECTION 1 — Hero (full viewport height):
Background image (CSS background-image, cover, center):
https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80
Dark overlay: rgba(0,0,0,0.45)
Centered content:
  - "Dressed in Intention" — Playfair Display italic 68px white
  - "Discover luxury curated to your taste." 
    Inter 300 18px white opacity 0.85, margin-top 16px
  - Two buttons side by side, margin-top 40px:
    Button 1 (filled gold): "Explore Collection" → /collections
    Button 2 (outlined white): "Find Your Style" → /find-your-style
  Button style: 48px height, 32px horizontal padding, 
  Inter 500 13px uppercase letter-spacing 0.1em

SECTION 2 — Research transparency strip:
Background #1A1A1A, padding 48px
Centered italic text in Playfair Display 20px white:
"We do not track you. We do not learn from you.
Every recommendation on this site reflects 
what you tell us — nothing more."
Gold thin decorative line above and below text

SECTION 3 — Category Cards (4 columns):
Each card 480px tall, overflow hidden, cursor pointer
On click → navigate to /collections?category=X

Watches card:
https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80

Bags card:
https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80

Fragrance card:
https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=80

Apparel card:
https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80

Each card:
- Image fills card with object-fit cover
- Linear gradient overlay: transparent top → rgba(0,0,0,0.65) bottom
- Bottom-left text: category name Playfair Display 26px white
- Bottom-left subtext: "12 pieces" Inter 300 13px white opacity 0.7
- Hover: image scales to 1.05 transition 0.5s ease

SECTION 4 — New Arrivals (4 featured products):
Show these 4 product IDs as featured: w1, b5, f3, a5
Section heading: "New Arrivals" Playfair Display 36px centered
Subheading: "Recently added to the collection" 
Inter 300 15px gray centered
4-column product card grid using ProductCard component


═══════════════════════════════════════════════════════
PART 6 — PRODUCT CARD COMPONENT
src/components/ProductCard.jsx
═══════════════════════════════════════════════════════

Card design:
- No border, no shadow by default
- Image container: aspect-ratio 3/4, overflow hidden
- Image: width 100%, height 100%, object-fit cover
- On hover: image scales to 1.06, transition 0.4s ease
  gold border 1px appears on card
- Below image:
  Brand name: Inter 400 11px uppercase 
  letter-spacing 0.12em color #6B6B6B, margin-top 12px
  Product name: Playfair Display 400 16px #1A1A1A margin-top 4px
  Price: Inter 500 15px #1A1A1A margin-top 6px 
  formatted as ₹X,XX,XXX

- "Add to Bag" button:
  Appears on card hover (opacity 0 → 1, translate Y 8px → 0)
  Full width, height 44px
  Background #1A1A1A, color white
  Inter 500 12px uppercase letter-spacing 0.1em
  On click: calls addToCart with source "category-browse"
  or "featured" depending on which page renders it

- Entire card is clickable → /product/:id


═══════════════════════════════════════════════════════
PART 7 — COLLECTIONS PAGE
src/pages/Collections.jsx
═══════════════════════════════════════════════════════

Page header:
- "The Collection" Playfair Display 48px centered
- Decorative gold line 60px centered below

Category tab bar (sticky below navbar):
- Tabs: All | Watches | Bags | Fragrance | Apparel
- Active tab: gold bottom border 2px, #1A1A1A text
- Inactive: #6B6B6B text
- Read ?category= from URL on mount and set active tab
- Changing tab updates URL param

Product grid:
- 4 columns desktop, 2 tablet, 1 mobile
- gap 32px horizontal, 48px vertical
- Shows filtered products using ProductCard component
- Source passed to addToCart: "category-browse"

Product count line below tabs:
"Showing X pieces" Inter 400 13px gray


═══════════════════════════════════════════════════════
PART 8 — FIND YOUR STYLE PAGE
src/pages/FindYourStyle.jsx
═══════════════════════════════════════════════════════

Page header:
"Find Your Style" Playfair Display 48px centered
"Tell us your preferences. We'll do the rest — 
with no algorithms involved."
Inter 300 16px gray centered, max-width 500px

3-step selector (NOT a quiz, just filter tiles):

STEP 1 — "Your aesthetic":
4 tiles in a row, each 200px wide:
  Minimalist / Classic / Bold / Romantic
Each tile: thin border, category label centered
Selected state: gold border 2px, gold-tinted background

STEP 2 — "The occasion":
4 tiles:
  Everyday / Date Night / Work / Special Event

STEP 3 — "Your budget":
4 tiles:
  Under ₹10,000 / ₹10K–₹30K / ₹30K–₹80K / ₹80K+

"Show My Picks" button:
Gold filled, full width max-width 400px centered
Only active when all 3 steps are selected
On click: runs rule engine and scrolls to results

RULE ENGINE (hardcoded in component):
const rules = {
  "minimalist-everyday":     ["w2","f2","b2","a4","w12","f4"],
  "minimalist-work":         ["w2","b2","a3","f4","w12","a8"],
  "minimalist-date night":   ["w2","b5","f5","a8","w9","f2"],
  "minimalist-special event":["w9","a3","b2","f5","w1","a1"],
  "classic-work":            ["w1","b2","a3","f4","w7","a9"],
  "classic-special event":   ["w3","b1","a1","f3","w5","a7"],
  "classic-date night":      ["w5","b3","f3","a8","w10","b5"],
  "classic-everyday":        ["w2","b6","a9","f4","w10","b2"],
  "bold-special event":      ["w3","a7","b1","f6","w6","a5"],
  "bold-everyday":           ["w4","a6","b8","f4","w11","b6"],
  "bold-date night":         ["w6","b4","f6","a5","w3","b7"],
  "bold-work":               ["w11","a3","b2","f1","w8","a7"],
  "romantic-date night":     ["b3","f3","a5","w5","b7","f9"],
  "romantic-special event":  ["a5","f3","b5","w5","a2","f9"],
  "romantic-everyday":       ["b5","f5","a8","w9","b11","f7"],
}

Default fallback: filter all products by selected 
priceRange and show first 6 across categories

After results show:
Display this message in italic Playfair Display 16px 
centered, gold color, margin-top 24px:
"These pieces were selected based on your stated 
preferences only. No browsing history, 
no behavioural data, no algorithms."


═══════════════════════════════════════════════════════
PART 9 — PRODUCT DETAIL PAGE
src/pages/ProductDetail.jsx
═══════════════════════════════════════════════════════

Layout: 2 columns on desktop (50/50), stacked on mobile

LEFT COLUMN:
- Product image full height, object-fit cover
- Aspect ratio 4/5

RIGHT COLUMN (padding 48px):
- Category breadcrumb: Inter 400 11px uppercase 
  letter-spacing 0.12em gold
  e.g. "Watches · Oceanic Maison"
- Product name: Playfair Display 400 38px, margin-top 12px
- Price: Inter 500 26px, margin-top 16px
- Divider line, margin 24px 0
- Description: Inter 300 16px line-height 1.8 gray

If category is "apparel":
  Size selector: XS S M L XL as pill buttons
  Selected: gold border + gold text
  Inter 400 13px

Quantity selector:
  "−" [number] "+" horizontal, 
  bordered box, Inter 500 16px

"Add to Bag" button:
  Full width, height 56px
  Background #1A1A1A, white text
  Inter 500 13px uppercase letter-spacing 0.12em
  On click: addToCart with source "product-page"
  After click: button text changes to "Added to Bag ✓"
  for 2 seconds then resets

Small text below button:
"Complimentary gift wrapping on all orders"
Inter 300 12px gray centered

Divider

"You might also like" section:
Heading: Playfair Display 22px
Show 3 products from SAME category 
(exclude current product, take first 3)
Display using ProductCard component in a 3-column grid

NO reviews section
NO ratings
NO "customers also bought"


═══════════════════════════════════════════════════════
PART 10 — CART SIDEBAR
src/components/CartSidebar.jsx
═══════════════════════════════════════════════════════

Trigger: clicking bag icon in navbar
Overlay: rgba(0,0,0,0.4) covers page, 
  clicking overlay closes sidebar

Sidebar:
- Slides in from right
- Width: 440px desktop, 100vw mobile
- Background: #FAFAF8
- z-index: 200

Header:
- "Your Bag" Playfair Display 22px
- "(X items)" Inter 300 14px gray
- X close button top-right

Each cart item:
- Product image: 88px × 108px object-fit cover
- Right of image:
  Brand Inter 400 11px uppercase gold letter-spacing 0.1em
  Name Playfair Display 15px
  Price Inter 500 14px
  Source tag (small pill):
    "Style match" if source is "style-match"  
    "Browsed" if source is "category-browse"
    "Featured" if source is "featured"
    "Added" if source is "product-page"
  Pill style: Inter 400 10px, gold border, gold text, 
  4px padding horizontal, border-radius 12px
  
  Quantity row: "−" [qty] "+" Inter 500 14px
  Remove: Inter 400 12px underline gray

Divider between items

Footer of sidebar:
Subtotal: "Subtotal" Inter 400 14px gray
         "₹X,XX,XXX" Inter 600 18px black
margin-top 8px

Research disclaimer in italic Inter 300 11px gray:
"This is a research study prototype.
No real transaction will occur."

Two buttons:
1. "Continue Browsing" — gold filled, full width, 
   closes sidebar
2. "Save My Selections" — outlined black, full width,
   copies product names + prices to clipboard,
   shows "Copied!" confirmation for 2 seconds

Empty state:
Simple centered content:
  SVG shopping bag outline icon 48px gray
  "Your bag is empty" Playfair Display 20px
  "Start exploring the collection" Inter 300 14px gray
  "Browse Collection" button → /collections


═══════════════════════════════════════════════════════
PART 11 — TOAST NOTIFICATION
src/components/Toast.jsx
═══════════════════════════════════════════════════════

Appears top-right corner on addToCart
Slides in from right, auto-dismisses after 2.5 seconds
Content:
  Small product image 48×48 object-fit cover border-radius 4px
  "Added to your bag" Inter 500 13px
  Product name Inter 300 12px gray
Background white, thin gold left border 3px
Subtle drop shadow
z-index 300


═══════════════════════════════════════════════════════
PART 12 — FOOTER
═══════════════════════════════════════════════════════

4-column layout, background #1A1A1A, padding 64px 0

Column 1:
  "MAISON" Playfair Display 24px white letter-spacing 0.15em
  "Curated luxury. Rule-based discovery."
  Inter 300 13px white opacity 0.5, margin-top 8px

Column 2: "Navigate"
  Links in Inter 300 14px white opacity 0.6
  Home / Collections / Find Your Style

Column 3: "Research Study"
  Heading Inter 500 13px uppercase letter-spacing 0.1em 
  gold, margin-bottom 12px
  Body text Inter 300 12px white opacity 0.5:
  "This site is part of a research study on 
  AI-driven personalisation and brand loyalty. 
  Recommendations are generated by manual 
  preference selection only. No machine learning, 
  behavioural tracking, or cookies are used."

Column 4: "Participate"
  Heading same style as column 3
  "Share your experience by completing our 
  short survey after browsing." 
  Inter 300 12px white opacity 0.5
  Button: "Take the Survey" outlined gold, 
  href="#" (placeholder for Google Form link)

Bottom bar:
Thin top border white opacity 0.1
"© 2025 MAISON Research Project. 
For academic purposes only."
Inter 300 11px white opacity 0.3 centered


═══════════════════════════════════════════════════════
PART 13 — ROUTING (App.jsx)
═══════════════════════════════════════════════════════

Routes:
/ → Home
/collections → Collections
/find-your-style → FindYourStyle
/product/:id → ProductDetail

Wrap everything in:

    
    
    
    ...
    


  


Scroll to top on every route change.


═══════════════════════════════════════════════════════
PART 14 — FINAL QUALITY CHECKLIST
Apply all of these before finishing:
═══════════════════════════════════════════════════════

✓ Every product image uses its Unsplash URL with ?w=800&q=80
✓ All images have aspect-ratio 3/4 with object-fit cover
✓ Zero broken image placeholders
✓ Playfair Display on ALL h1-h5 elements
✓ Inter on ALL body text, buttons, labels
✓ Gold color #C9A96E used for all accents and CTAs
✓ No blue default link colors anywhere
✓ Mobile responsive at 375px, 768px, 1280px
✓ Cart state uses React Context, zero localStorage
✓ Cart resets on page refresh
✓ All 48 products render correctly
✓ Category filtering works on Collections page
✓ Rule engine returns correct products on FindYourStyle
✓ Toast appears on every addToCart action
✓ CartSidebar opens and closes correctly
✓ No console errors
✓ Research disclaimer visible on cart sidebar and footer

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://maison-style-lab.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9cbf18ff-9ac3-4293-8477-9acded81593a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
