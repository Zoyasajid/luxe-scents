'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: product.sizes[0].size,
      image: product.image,
    });
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className="card group cursor-pointer">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold-500 transition-colors">
            {product.name}
          </h3>
          <p className="text-charcoal-400 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-gold-500 font-bold text-xl">${product.price.toFixed(2)}</span>
            <span className="text-charcoal-500 text-xs uppercase">{product.fragranceType}</span>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full btn-outline"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}

