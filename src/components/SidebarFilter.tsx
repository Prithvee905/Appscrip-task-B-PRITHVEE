"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FILTER_SECTIONS = [
  { id: 'idealFor', title: 'IDEAL FOR', options: ['Men', 'Women', 'Baby & Kids'] },
  { id: 'occasion', title: 'OCCASION', options: ['Casual', 'Formal', 'Party'] },
  { id: 'work', title: 'WORK', options: ['Embroidered', 'Printed', 'Woven'] },
  { id: 'fabric', title: 'FABRIC', options: ['Cotton', 'Silk', 'Linen'] },
  { id: 'segment', title: 'SEGMENT', options: ['Ethnic', 'Western', 'Contemporary'] },
  { id: 'suitableFor', title: 'SUITABLE FOR', options: ['Summer', 'Winter', 'All Seasons'] },
  { id: 'rawMaterials', title: 'RAW MATERIALS', options: ['Organic', 'Synthetic', 'Blended'] },
  { id: 'pattern', title: 'PATTERN', options: ['Solid', 'Striped', 'Checked'] },
];

interface SidebarFilterProps {
  className?: string;
  isVisible: boolean;
  onClose?: () => void;
}

export default function SidebarFilter({ className = '', isVisible, onClose }: SidebarFilterProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    idealFor: true, // Default open
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (!isVisible) return null;

  return (
    <aside className={`w-full lg:w-64 flex-shrink-0 ${className}`}>
      {onClose && (
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <h2 className="text-xl font-bold">FILTERS</h2>
          <button onClick={onClose} className="text-sm underline text-gray-500">
            Close
          </button>
        </div>
      )}

      <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-4">
        <input type="checkbox" id="customizable" className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black" />
        <label htmlFor="customizable" className="font-bold text-sm tracking-wide">
          CUSTOMIZABLE
        </label>
      </div>

      <div className="space-y-6">
        {FILTER_SECTIONS.map((section) => (
          <div key={section.id} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleSection(section.id)}
              className="flex justify-between items-center w-full group"
            >
              <div className="flex flex-col text-left">
                <span className="font-bold text-sm tracking-wide">{section.title}</span>
                <span className="text-sm text-gray-500 mt-1 capitalize">All</span>
              </div>
              {openSections[section.id] ? (
                <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
              )}
            </button>
            
            <div className={`mt-4 space-y-3 overflow-hidden transition-all duration-300 ${openSections[section.id] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <button className="text-sm text-gray-500 underline mb-2 block text-left w-full hover:text-black">
                Unselect all
              </button>
              {section.options.map((option) => (
                <div key={option} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id={`filter-${section.id}-${option}`}
                    className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
                  />
                  <label
                    htmlFor={`filter-${section.id}-${option}`}
                    className="text-sm text-gray-700 cursor-pointer hover:text-black"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
