'use client';

import { useState, useMemo } from 'react';
import { products, fragranceTypes } from '@/data/products';
import { Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFragranceType, setSelectedFragranceType] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState<string>('newest');

  const categories = ['all', 'men', 'women', 'unisex', 'oud', 'gift-sets'];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by fragrance type
    if (selectedFragranceType !== 'all') {
      filtered = filtered.filter((p) => p.fragranceType === selectedFragranceType);
    }

    // Filter by price range
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
        default:
          return 0; // Keep original order for newest
      }
    });

    return filtered;
  }, [selectedCategory, selectedFragranceType, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gold-500">All Products</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-charcoal-900 border border-charcoal-800 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6 text-white">Filters</h2>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-white font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2 accent-gold-500"
                      />
                      <span className="text-charcoal-300 capitalize">{cat === 'all' ? 'All Categories' : cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Fragrance Type Filter */}
              <div className="mb-6">
                <h3 className="text-white font-medium mb-3">Fragrance Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="fragranceType"
                      value="all"
                      checked={selectedFragranceType === 'all'}
                      onChange={(e) => setSelectedFragranceType(e.target.value)}
                      className="mr-2 accent-gold-500"
                    />
                    <span className="text-charcoal-300">All Types</span>
                  </label>
                  {fragranceTypes.map((type) => (
                    <label key={type.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="fragranceType"
                        value={type.value}
                        checked={selectedFragranceType === type.value}
                        onChange={(e) => setSelectedFragranceType(e.target.value)}
                        className="mr-2 accent-gold-500"
                      />
                      <span className="text-charcoal-300">{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-white font-medium mb-3">Price Range</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-charcoal-300 text-sm mb-2">
                      Min: ${priceRange[0]}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full accent-gold-500"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal-300 text-sm mb-2">
                      Max: ${priceRange[1]}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full accent-gold-500"
                    />
                  </div>
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedFragranceType('all');
                  setPriceRange([0, 500]);
                  setSortBy('newest');
                }}
                className="w-full btn-outline text-sm"
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-charcoal-400">
                Showing {filteredAndSortedProducts.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-charcoal-900 border border-charcoal-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-500"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-charcoal-400 text-lg">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

