"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react";

const NAV_LINKS = ["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      {/* Top Banner */}
      <div className="w-full bg-black text-white text-xs py-2 px-4 flex justify-center items-center gap-8">
        <span className="hidden sm:inline">Lorem ipsum dolor</span>
        <span>Lorem ipsum dolor</span>
        <span className="hidden sm:inline">Lorem ipsum dolor</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link href="/" className="text-xl md:text-2xl font-bold tracking-widest pl-2">
              LOGO
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-sm font-semibold tracking-wide hover:text-gray-500 transition-colors"
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button aria-label="Search"><Search className="w-5 h-5 md:w-6 md:h-6" /></button>
            <button aria-label="Wishlist"><Heart className="w-5 h-5 md:w-6 md:h-6" /></button>
            <button aria-label="Cart"><ShoppingBag className="w-5 h-5 md:w-6 md:h-6" /></button>
            <button aria-label="User Profile" className="hidden sm:block"><User className="w-6 h-6" /></button>
            <select className="hidden md:block bg-transparent font-medium border-none outline-none cursor-pointer">
              <option>ENG</option>
              <option>SPA</option>
            </select>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[100px] bg-white z-40 p-4 shadow-lg border-t border-gray-100 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link}
              href="#"
              className="text-lg font-semibold tracking-wide border-b border-gray-100 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
