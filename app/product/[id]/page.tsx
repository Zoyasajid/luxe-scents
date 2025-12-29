'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find((p) => p.id === productId);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<{ size: string; price: number }>({ size: '', price: 0 });
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || { size: '', price: 0 });
    }
  }, [product]);

  if (!product) {
    notFound();
  }

  const currentPrice = selectedSize.price || product.price;
  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.fragranceType === product.fragranceType))
    .slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: currentPrice,
        size: selectedSize.size,
        image: product.image,
      });
    }
  };

  const handleAddAllRelated = () => {
    relatedProducts.forEach((relatedProduct) => {
      addToCart({
        id: relatedProduct.id,
        name: relatedProduct.name,
        price: relatedProduct.price,
        size: relatedProduct.sizes[0].size,
        image: relatedProduct.image,
      });
    });
  };

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="relative h-[600px] bg-charcoal-900 rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4 text-gold-500">{product.name}</h1>
            <p className="text-2xl font-semibold mb-6 text-white">${currentPrice.toFixed(2)}</p>
            
            <div className="mb-6">
              <p className="text-charcoal-300 mb-4">{product.description}</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-charcoal-400">Category:</span>
                <span className="text-gold-500 capitalize">{product.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-charcoal-400">Type:</span>
                <span className="text-gold-500 capitalize">{product.fragranceType}</span>
              </div>
            </div>

            {/* Fragrance Notes */}
            <div className="mb-6 bg-charcoal-900 border border-charcoal-800 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Fragrance Notes</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gold-500 font-medium">Top Notes:</span>
                  <p className="text-charcoal-300">{product.notes.top.join(', ')}</p>
                </div>
                <div>
                  <span className="text-gold-500 font-medium">Middle Notes:</span>
                  <p className="text-charcoal-300">{product.notes.middle.join(', ')}</p>
                </div>
                <div>
                  <span className="text-gold-500 font-medium">Base Notes:</span>
                  <p className="text-charcoal-300">{product.notes.base.join(', ')}</p>
                </div>
              </div>
            </div>

            {/* Size Selection */}
            {product.sizes.length > 1 && (
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3">Select Size</h3>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-lg border-2 transition-all ${
                        selectedSize.size === size.size
                          ? 'border-gold-500 bg-gold-500/10 text-gold-500'
                          : 'border-charcoal-700 text-charcoal-300 hover:border-gold-500/50'
                      }`}
                    >
                      {size.size} - ${size.price.toFixed(2)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-charcoal-700 rounded-lg text-white hover:border-gold-500 transition-colors"
                >
                  -
                </button>
                <span className="text-white text-lg font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-charcoal-700 rounded-lg text-white hover:border-gold-500 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              variant="primary"
              onClick={handleAddToCart}
              className="w-full mb-4"
            >
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Frequently Bought Together */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gold-500">Frequently Bought Together</h2>
              <Button variant="outline" onClick={handleAddAllRelated}>
                Add All to Cart
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

