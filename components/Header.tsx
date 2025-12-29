'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function Header() {
  const { getItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = getItemCount();

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-charcoal-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gold-500 hover:text-gold-400 transition-colors">
            LUXE SCENTS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-gold-500 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-white hover:text-gold-500 transition-colors">
              Products
            </Link>
            <Link href="/category/men" className="text-white hover:text-gold-500 transition-colors">
              Men
            </Link>
            <Link href="/category/women" className="text-white hover:text-gold-500 transition-colors">
              Women
            </Link>
            <Link href="/category/oud" className="text-white hover:text-gold-500 transition-colors">
              Oud
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden md:block text-white hover:text-gold-500 transition-colors">
              Login
            </Link>
            <Link
              href="/cart"
              className="relative flex items-center gap-2 text-white hover:text-gold-500 transition-colors"
            >
              <svg
                className="w-6 h-6"
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
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-charcoal-800 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-white hover:text-gold-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-white hover:text-gold-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/category/men"
                className="text-white hover:text-gold-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Men
              </Link>
              <Link
                href="/category/women"
                className="text-white hover:text-gold-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Women
              </Link>
              <Link
                href="/category/oud"
                className="text-white hover:text-gold-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Oud
              </Link>
              <Link
                href="/login"
                className="text-white hover:text-gold-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

