import React from 'react';
import { ProductCategory } from '../types';
import { FEATURED_CATEGORIES } from '../data/products';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedCategoriesStripProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
}

export const FeaturedCategoriesStrip: React.FC<FeaturedCategoriesStripProps> = ({
  onSelectCategory,
}) => {
  return (
    <section className="py-6 sm:py-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-5 pb-2 border-b-2 border-red-600">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-6 bg-red-600 rounded-xs"></div>
            <div>
              <h3 className="text-base sm:text-xl font-extrabold uppercase tracking-tight text-slate-900 flex items-center gap-1.5">
                DANH MỤC TIÊU BIỂU
                <Sparkles className="w-4 h-4 text-amber-500" />
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                Khám phá các dòng sản phẩm gia dụng &amp; chế phẩm sinh học bán chạy nhất của D&amp;T
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => onSelectCategory('all')}
            className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 transition-colors cursor-pointer group"
          >
            <span className="hidden sm:inline">Xem tất cả danh mục</span>
            <span className="sm:hidden">Tất cả</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Clean Rounded-Square Cards Grid (Preserving 1:1 Aspect Ratio Without Circular Crop) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-4">
          {FEATURED_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => onSelectCategory(cat.id as ProductCategory)}
              className="flex flex-col items-center p-2.5 sm:p-3 rounded-2xl bg-slate-50 hover:bg-red-50/70 border border-slate-200/80 hover:border-red-300 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer group text-center"
            >
              {/* Clean 1:1 Aspect Ratio Box */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 aspect-square rounded-xl overflow-hidden p-1.5 bg-white border border-slate-200 group-hover:border-red-500 shadow-inner transition-colors mb-2 group-hover:scale-105 duration-200 flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.title}
                  width="80"
                  height="80"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Tên danh mục */}
              <h4 className="font-extrabold text-[11px] sm:text-xs text-slate-800 group-hover:text-red-600 transition-colors line-clamp-1 leading-snug">
                {cat.title}
              </h4>
              
              <span className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                {cat.subtitle}
              </span>

              <span className="mt-1.5 text-[9px] font-bold text-red-700 bg-red-100/80 px-2 py-0.5 rounded-full">
                {cat.itemCount}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
