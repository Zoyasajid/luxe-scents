export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'men' | 'women' | 'unisex' | 'oud' | 'gift-sets';
  fragranceType: 'woody' | 'floral' | 'fresh' | 'oriental';
  image: string;
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  sizes: {
    size: string;
    price: number;
  }[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Midnight Oud',
    description: 'A luxurious blend of oud, amber, and sandalwood. Perfect for evening wear.',
    price: 129.99,
    category: 'oud',
    fragranceType: 'oriental',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop',
    notes: {
      top: ['Bergamot', 'Saffron'],
      middle: ['Oud', 'Rose'],
      base: ['Amber', 'Sandalwood', 'Musk'],
    },
    sizes: [
      { size: '50ml', price: 129.99 },
      { size: '100ml', price: 219.99 },
    ],
  },
  {
    id: '2',
    name: 'Ocean Breeze',
    description: 'Fresh and invigorating with notes of sea salt, citrus, and white musk.',
    price: 89.99,
    category: 'unisex',
    fragranceType: 'fresh',
    image: 'https://images.unsplash.com/photo-1595425970377-c9700292f0d4?w=800&h=800&fit=crop',
    notes: {
      top: ['Lemon', 'Bergamot', 'Sea Salt'],
      middle: ['Jasmine', 'Lily of the Valley'],
      base: ['White Musk', 'Cedarwood'],
    },
    sizes: [
      { size: '50ml', price: 89.99 },
      { size: '100ml', price: 149.99 },
    ],
  },
  {
    id: '3',
    name: 'Royal Rose',
    description: 'Elegant floral fragrance with Bulgarian rose and vanilla.',
    price: 99.99,
    category: 'women',
    fragranceType: 'floral',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&h=800&fit=crop',
    notes: {
      top: ['Pink Pepper', 'Bergamot'],
      middle: ['Bulgarian Rose', 'Jasmine'],
      base: ['Vanilla', 'Patchouli', 'Amber'],
    },
    sizes: [
      { size: '50ml', price: 99.99 },
      { size: '100ml', price: 169.99 },
    ],
  },
  {
    id: '4',
    name: 'Sandalwood Elite',
    description: 'Rich and sophisticated with premium sandalwood and leather notes.',
    price: 119.99,
    category: 'men',
    fragranceType: 'woody',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop',
    notes: {
      top: ['Ginger', 'Cardamom'],
      middle: ['Sandalwood', 'Cedarwood'],
      base: ['Leather', 'Vetiver', 'Tonka Bean'],
    },
    sizes: [
      { size: '50ml', price: 119.99 },
      { size: '100ml', price: 199.99 },
    ],
  },
  {
    id: '5',
    name: 'Lavender Fields',
    description: 'Calming and serene with French lavender and chamomile.',
    price: 79.99,
    category: 'unisex',
    fragranceType: 'floral',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop',
    notes: {
      top: ['Lavender', 'Lemon'],
      middle: ['Chamomile', 'Lily'],
      base: ['Musk', 'Amber'],
    },
    sizes: [
      { size: '50ml', price: 79.99 },
      { size: '100ml', price: 139.99 },
    ],
  },
  {
    id: '6',
    name: 'Black Orchid',
    description: 'Mysterious and alluring with black orchid and dark chocolate.',
    price: 139.99,
    category: 'women',
    fragranceType: 'oriental',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop',
    notes: {
      top: ['Blackcurrant', 'Truffle'],
      middle: ['Black Orchid', 'Fruit'],
      base: ['Dark Chocolate', 'Vanilla', 'Incense'],
    },
    sizes: [
      { size: '50ml', price: 139.99 },
      { size: '100ml', price: 239.99 },
    ],
  },
  {
    id: '7',
    name: 'Cedar & Spice',
    description: 'Bold and masculine with cedar, black pepper, and tobacco.',
    price: 109.99,
    category: 'men',
    fragranceType: 'woody',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop',
    notes: {
      top: ['Black Pepper', 'Grapefruit'],
      middle: ['Cedar', 'Nutmeg'],
      base: ['Tobacco', 'Leather', 'Amber'],
    },
    sizes: [
      { size: '50ml', price: 109.99 },
      { size: '100ml', price: 189.99 },
    ],
  },
  {
    id: '8',
    name: 'Jasmine Dreams',
    description: 'Delicate and feminine with jasmine, tuberose, and white musk.',
    price: 94.99,
    category: 'women',
    fragranceType: 'floral',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop',
    notes: {
      top: ['Pear', 'Bergamot'],
      middle: ['Jasmine', 'Tuberose'],
      base: ['White Musk', 'Sandalwood'],
    },
    sizes: [
      { size: '50ml', price: 94.99 },
      { size: '100ml', price: 159.99 },
    ],
  },
  {
    id: '9',
    name: 'Citrus Burst',
    description: 'Energizing and vibrant with lemon, orange, and mint.',
    price: 69.99,
    category: 'unisex',
    fragranceType: 'fresh',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop',
    notes: {
      top: ['Lemon', 'Orange', 'Mint'],
      middle: ['Ginger', 'Jasmine'],
      base: ['Musk', 'Amberwood'],
    },
    sizes: [
      { size: '50ml', price: 69.99 },
      { size: '100ml', price: 119.99 },
    ],
  },
  {
    id: '10',
    name: 'Premium Oud Collection',
    description: 'Exclusive oud collection with three signature scents.',
    price: 349.99,
    category: 'gift-sets',
    fragranceType: 'oriental',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop',
    notes: {
      top: ['Saffron', 'Bergamot'],
      middle: ['Oud', 'Rose', 'Jasmine'],
      base: ['Amber', 'Sandalwood', 'Musk'],
    },
    sizes: [
      { size: 'Set of 3 (50ml each)', price: 349.99 },
    ],
  },
  {
    id: '11',
    name: 'Vanilla Noir',
    description: 'Sweet and sophisticated with vanilla, caramel, and tonka bean.',
    price: 104.99,
    category: 'women',
    fragranceType: 'oriental',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop',
    notes: {
      top: ['Bergamot', 'Pink Pepper'],
      middle: ['Vanilla', 'Caramel'],
      base: ['Tonka Bean', 'Amber', 'Musk'],
    },
    sizes: [
      { size: '50ml', price: 104.99 },
      { size: '100ml', price: 179.99 },
    ],
  },
  {
    id: '12',
    name: 'Tobacco Reserve',
    description: 'Rich and warm with tobacco, honey, and oud.',
    price: 124.99,
    category: 'men',
    fragranceType: 'woody',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop',
    notes: {
      top: ['Ginger', 'Cinnamon'],
      middle: ['Tobacco', 'Honey'],
      base: ['Oud', 'Leather', 'Amber'],
    },
    sizes: [
      { size: '50ml', price: 124.99 },
      { size: '100ml', price: 209.99 },
    ],
  },
  {
    id: '13',
    name: 'Gardenia Bloom',
    description: 'Fresh and elegant with gardenia, peony, and white tea.',
    price: 89.99,
    category: 'women',
    fragranceType: 'floral',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop',
    notes: {
      top: ['White Tea', 'Bergamot'],
      middle: ['Gardenia', 'Peony'],
      base: ['Musk', 'Cedarwood'],
    },
    sizes: [
      { size: '50ml', price: 89.99 },
      { size: '100ml', price: 149.99 },
    ],
  },
  {
    id: '14',
    name: 'Fresh Linen',
    description: 'Clean and crisp with white musk, cotton, and citrus.',
    price: 74.99,
    category: 'unisex',
    fragranceType: 'fresh',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop',
    notes: {
      top: ['Lemon', 'Lime'],
      middle: ['Cotton', 'Lily'],
      base: ['White Musk', 'Amber'],
    },
    sizes: [
      { size: '50ml', price: 74.99 },
      { size: '100ml', price: 129.99 },
    ],
  },
  {
    id: '15',
    name: 'Luxury Gift Set',
    description: 'Perfect gift set with our best-selling fragrances.',
    price: 299.99,
    category: 'gift-sets',
    fragranceType: 'oriental',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=800&fit=crop',
    notes: {
      top: ['Various'],
      middle: ['Various'],
      base: ['Various'],
    },
    sizes: [
      { size: 'Set of 4 (30ml each)', price: 299.99 },
    ],
  },
];

export const categories = [
  { slug: 'men', name: 'Men', description: 'Bold and sophisticated fragrances for men' },
  { slug: 'women', name: 'Women', description: 'Elegant and alluring fragrances for women' },
  { slug: 'unisex', name: 'Unisex', description: 'Versatile scents for everyone' },
  { slug: 'oud', name: 'Oud Collection', description: 'Premium oud-based fragrances' },
  { slug: 'gift-sets', name: 'Gift Sets', description: 'Perfect gift collections' },
];

export const fragranceTypes = [
  { value: 'woody', label: 'Woody' },
  { value: 'floral', label: 'Floral' },
  { value: 'fresh', label: 'Fresh' },
  { value: 'oriental', label: 'Oriental' },
];

