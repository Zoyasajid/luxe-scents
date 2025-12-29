'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Button from '@/components/Button';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();
  const total = getTotal();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-black py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-gold-500">Shopping Cart</h1>
          <div className="text-center py-16">
            <svg
              className="w-24 h-24 mx-auto text-charcoal-700 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="text-charcoal-400 text-xl mb-6">Your cart is empty</p>
            <Link href="/products">
              <Button variant="primary">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gold-500">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="bg-charcoal-900 border border-charcoal-800 rounded-lg p-6 flex flex-col sm:flex-row gap-6"
              >
                <div className="relative w-full sm:w-32 h-32 bg-charcoal-800 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                  <p className="text-charcoal-400 mb-2">Size: {item.size}</p>
                  <p className="text-gold-500 font-bold text-lg mb-4">${item.price.toFixed(2)}</p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-charcoal-400">Quantity:</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        className="w-8 h-8 border border-charcoal-700 rounded text-white hover:border-gold-500 transition-colors"
                      >
                        -
                      </button>
                      <span className="text-white font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        className="w-8 h-8 border border-charcoal-700 rounded text-white hover:border-gold-500 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-red-400 hover:text-red-300 text-sm transition-colors"
                  >
                    Remove
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-gold-500 font-bold text-xl">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-charcoal-900 border border-charcoal-800 rounded-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-white">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-charcoal-300">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-charcoal-300">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-charcoal-700 pt-4 flex justify-between text-white text-xl font-bold">
                  <span>Total</span>
                  <span className="text-gold-500">${total.toFixed(2)}</span>
                </div>
              </div>

              <Button variant="primary" className="w-full mb-4">
                Proceed to Checkout
              </Button>

              <Link href="/products">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

