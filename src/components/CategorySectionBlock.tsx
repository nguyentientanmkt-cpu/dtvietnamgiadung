import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Product, CatalogCategory } from '../types';
import { ProductCard } from './ProductCard';

interface CategorySectionBlockProps {
  id?: string;
  title: string;
  subtitle?: string;
  category: CatalogCategory;
  products: Product[];
  maxDisplay?: number;
  icon?: string;
  badge?: string;
  onOpenDetail: (product: Product) => void;
  onViewAllCategory: (category: CatalogCategory) => void;
}

export const CategorySectionBlock: React.FC<CategorySectionBlockProps> = ({
  id,
  title,
  subtitle,
  category,
  products,
  maxDisplay = 6,
  icon,
  badge,
  onOpenDetail,
  onViewAllCategory,
}) => {
  if (!products || products.length === 0) return null;

  // Giới hạn 4–6 sản phẩm nổi bật trên trang chủ (Yêu cầu 3)
  const displayProducts = products.slice(0, maxDisplay);

  return (
    <section id={id} className="py-7 sm:py-9 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-6 pb-3 border-b-2 border-red-600 gap-2">
          
          <div className="flex items-start gap-2.5">
            <div className="w-2.5 h-6 bg-red-600 rounded-xs mt-1 shrink-0"></div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                {icon && <span className="text-xl sm:text-2xl">{icon}</span>}
                <h3 className="text-base sm:text-xl font-black uppercase tracking-tight text-slate-900">
                  {title}
                </h3>
                {badge && (
                  <span className="text-[10px] font-black uppercase bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                    {badge}
                  </span>
                )}
                <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                  {products.length} SP
                </span>
              </div>
              {subtitle && (
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Nút Xem Tất Cả trên Header (Desktop) */}
          <button
            onClick={() => onViewAllCategory(category)}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-black text-red-600 hover:text-red-700 hover:underline transition-colors cursor-pointer group"
          >
            <span>XEM TẤT CẢ {products.length} SP</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>

        {/* Product Cards Grid (4-6 sản phẩm) */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-4">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetail={onOpenDetail}
              positionContext={`home_section_${category}`}
            />
          ))}
        </div>

        {/* NÚT CUỐI MỖI DANH MỤC: [XEM TẤT CẢ →] (YÊU CẦU 3) */}
        <div className="mt-5 sm:mt-6 text-center">
          <button
            onClick={() => onViewAllCategory(category)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-50 hover:bg-red-50 border border-slate-300 hover:border-red-400 text-slate-800 hover:text-red-700 text-xs sm:text-sm font-black rounded-xl shadow-2xs hover:shadow-sm transition-all cursor-pointer group"
          >
            <span>XEM TẤT CẢ SẢN PHẨM {title.toUpperCase()}</span>
            <ArrowRight className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
