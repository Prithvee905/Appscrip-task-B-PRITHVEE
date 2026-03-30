import React, { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlist, setIsWishlist] = useState(false);

  return (
    <div className="group cursor-pointer flex flex-col h-full bg-white transition-opacity duration-300">
      <div className="relative aspect-[3/4] w-full mb-4 bg-gray-50 flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          priority={false}
        />
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlist(!isWishlist);
          }}
          className={`absolute top-4 right-4 p-2 z-10 hover:scale-110 transition-transform ${isWishlist ? 'text-red-500' : 'text-gray-400 hover:text-gray-600'}`}
          aria-label="Add to Wishlist"
        >
          <Heart fill={isWishlist ? 'currentColor' : 'none'} className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      <div className="flex flex-col flex-1 px-1">
        <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 truncate" title={product.title}>
          {product.title}
        </h3>
        
        <div className="flex items-center mt-auto gap-4">
          <p className="text-sm font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </p>
          <div className="hidden group-hover:block ml-auto cursor-pointer text-gray-400 hover:text-red-500">
             <Heart className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
