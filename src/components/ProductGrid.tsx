"use client";

import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Check } from 'lucide-react';
import ProductCard from './ProductCard';
import SidebarFilter from './SidebarFilter';
import { Product } from '../types';

interface ProductGridProps {
  initialProducts: Product[];
}

const SORT_OPTIONS = [
  { value: 'recommended', label: 'RECOMMENDED' },
  { value: 'newest', label: 'NEWEST FIRST' },
  { value: 'popular', label: 'POPULAR' },
  { value: 'price_high', label: 'PRICE: HIGH TO LOW' },
  { value: 'price_low', label: 'PRICE: LOW TO HIGH' },
];

export default function ProductGrid({ initialProducts }: ProductGridProps) {
  const [showFilters, setShowFilters] = useState(true);
  const [sortOption, setSortOption] = useState('recommended');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sorting Logic (bonus)
  const sortedProducts = useMemo(() => {
    const sorted = [...initialProducts];
    switch (sortOption) {
      case 'price_high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'price_low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'popular':
        return sorted.sort((a, b) => b.rating.count - a.rating.count);
      default:
        // recommended or newest
        return sorted;
    }
  }, [initialProducts, sortOption]);

  const activeSortLabel = SORT_OPTIONS.find(opt => opt.value === sortOption)?.label;

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 pb-16">
      <div className="border-t border-b border-gray-200 py-4 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <span className="font-bold hidden sm:inline">{sortedProducts.length} ITEMS</span>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="hidden lg:flex flex-row items-center gap-2 text-gray-500 hover:text-black transition-colors"
          >
            {showFilters ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            <span className="underline decoration-1 underline-offset-4 font-medium">
              {showFilters ? 'HIDE FILTER' : 'SHOW FILTER'}
            </span>
          </button>
          <button 
            className="lg:hidden font-bold"
            onClick={() => setIsMobileFilterOpen(true)}
          >
            FILTER
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center gap-2 font-bold focus:outline-none"
          >
            {activeSortLabel}
            <ChevronDown className="w-4 h-4" />
          </button>

          {isSortOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-100 shadow-xl z-20 py-2">
              {SORT_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors ${sortOption === option.value ? 'font-bold' : ''}`}
                  onClick={() => {
                    setSortOption(option.value);
                    setIsSortOpen(false);
                  }}
                >
                  {option.label}
                  {sortOption === option.value && <Check className="w-4 h-4" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <SidebarFilter isVisible={showFilters} />
        </div>

        {/* Mobile Sidebar */}
        {isMobileFilterOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white p-4 overflow-y-auto w-full">
            <SidebarFilter 
              isVisible={true} 
              onClose={() => setIsMobileFilterOpen(false)} 
              className="mt-16" 
            />
          </div>
        )}

        {/* Product Grid Layout */}
        <div className="flex-1 w-full">
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${!showFilters ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-x-6 gap-y-12`}>
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
