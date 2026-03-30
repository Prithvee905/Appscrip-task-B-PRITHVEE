import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full py-12 px-4 md:px-8 mt-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-4">BE THE FIRST TO KNOW</h3>
            <p className="text-gray-400 mb-6 text-sm">Sign up for updates from us.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your e-mail..." 
                className="bg-white text-black px-4 py-3 rounded-md flex-1 sm:max-w-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <button className="bg-transparent border border-gray-400 hover:border-white text-white px-8 py-3 rounded-md font-semibold transition-colors uppercase tracking-wider">
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">CONTACT US</h3>
            <div className="text-gray-400 text-sm space-y-2">
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
            
            <h3 className="font-bold text-lg mt-8 mb-4">CURRENCY</h3>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">🇺🇸</span>
              <span className="font-semibold text-sm">USD</span>
            </div>
            <p className="text-gray-500 text-xs mt-2">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">metta muse</h3>
            <ul className="text-gray-400 text-sm space-y-3">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Stories</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Artisans</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Boutiques</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">EU Compliances Docs</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
            <ul className="text-gray-400 text-sm space-y-3">
              <li><Link href="#" className="hover:text-white transition-colors">Orders & Shipping</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Join/Login as a Seller</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Payment & Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Return & Refunds</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-4">FOLLOW US</h3>
            <div className="flex items-center gap-4 border-2 border-transparent">
              <Link href="#" className="border border-gray-700 p-2 rounded-full hover:border-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="border border-gray-700 p-2 rounded-full hover:border-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="border border-gray-700 p-2 rounded-full hover:border-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
            
            <h3 className="font-bold text-lg mt-8 mb-4">metta muse ACCEPTS</h3>
            <div className="flex items-center gap-2 flex-wrap">
              {/* Payment methods placeholder icons */}
              <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-black font-bold text-[10px]">GPay</div>
              <div className="w-12 h-8 bg-blue-800 rounded flex items-center justify-center text-white font-bold text-[10px] italic">Amex</div>
              <div className="w-12 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-bold text-[10px]">MC</div>
              <div className="w-12 h-8 bg-black border border-white rounded flex items-center justify-center text-white font-bold text-[10px]">Apple</div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-8 pb-4">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
