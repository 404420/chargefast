export type Product = {
  slug: string;
  name: string;
  category: string;
  badge?: string;
  price: string;
  oldPrice?: string;
  rating: string;
  reviews: number;
  image: string;
  tint: string;
  bullets: string[];
};

export const products: Product[] = [
  {
    slug: 'trio-magsafe-station',
    name: 'Trio MagSafe Charging Station',
    category: 'MagSafe chargers',
    badge: 'Hot',
    price: '$39.00',
    oldPrice: '$59.00',
    rating: '★★★★★',
    reviews: 306,
    image: '/products/trio-magsafe-station.svg',
    tint: 'cyan',
    bullets: ['iPhone + Apple Watch + AirPods', 'Foldable desk and travel design', '15W wireless phone charging'],
  },
  {
    slug: 'usb-c-240w-braided-cable',
    name: '240W Braided USB-C Cable',
    category: 'USB-C fast charging',
    badge: '-18%',
    price: '$14.99',
    oldPrice: '$19.99',
    rating: '★★★★★',
    reviews: 188,
    image: '/products/usb-c-240w-braided-cable.svg',
    tint: 'lime',
    bullets: ['240W PD fast charge ready', 'Braided anti-tangle jacket', 'Works with laptops, tablets and phones'],
  },
  {
    slug: 'solar-panel-charger-20w',
    name: '20W Solar Panel Charger',
    category: 'Solar charging',
    badge: 'New',
    price: '$49.00',
    rating: '★★★★★',
    reviews: 92,
    image: '/products/solar-panel-charger-20w.svg',
    tint: 'amber',
    bullets: ['Foldable outdoor panel', 'USB-C and USB-A output', 'Built for camping and emergency kits'],
  },
  {
    slug: 'compact-gan-wall-charger',
    name: '65W Compact GaN Charger',
    category: 'Wall chargers',
    badge: 'Deal',
    price: '$29.99',
    oldPrice: '$39.99',
    rating: '★★★★★',
    reviews: 221,
    image: '/products/compact-gan-wall-charger.svg',
    tint: 'violet',
    bullets: ['65W USB-C power delivery', 'Small enough for daily carry', 'Charges phone, tablet and laptop'],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug) ?? products[0];
}
