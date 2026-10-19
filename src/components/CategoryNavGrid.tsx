import React, { useState } from 'react';
import { CatalogCategory } from '../types';
import { CATALOG_GROUPS } from '../utils/productFilter';
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Flame, 
  ShieldAlert, 
  Bug, 
  Utensils, 
  Sparkles, 
  Zap,
  Target
} from 'lucide-react';

interface CategoryNavGridProps {
  selectedCategory: CatalogCategory;
  onSelectCategory: (category: CatalogCategory) => void;
  onScrollToCategorySection?: (categoryId: string) => void;
}

// Icon SVG chuyên dụng, sắc nét, không bị lỗi ô vuông font chữ
const getCategoryIcon = (id: CatalogCategory) => {
  switch (id) {
    case 'ban-chay':
      return <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />;
    case 'diet-moi-mot':
      return <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />;
    case 'diet-chuot':
      return <Target className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600" />;
    case 'xit-con-trung':
      return <Bug className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />;
    case 'cham-soc-nha-cua':
      return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />;
    case 'gia-dung':
      return <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />;
    case 'san-pham-moi':
      return <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />;
    default:
      return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />;
  }
};

const getCategoryBgColor = (id: CatalogCategory) => {
  switch (id) {
    case 'ban-chay':
      return 'bg-red-50 text-red-600 border-red-100';
    case 'diet-moi-mot':
      return 'bg-amber-50 text-amber-700 border-amber-100';
    case 'diet-chuot':
      return 'bg-rose-50 text-rose-700 border-rose-100';
    case 'xit-con-trung':
      return 'bg-emerald-50 text-emerald-700 border-emerald-100';
    case 'cham-soc-nha-cua':
      return 'bg-purple-50 text-purple-700 border-purple-100';
    case 'gia-dung':
      return 'bg-blue-50 text-blue-700 border-blue-100';
    case 'san-pham-moi':
      return 'bg-amber-50 text-amber-700 border-amber-100';
    default:
      return 'bg-slate-50 text-slate-700 border-slate-100';
  }
};

export const CategoryNavGrid: React.FC<CategoryNavGridProps> = ({
  selectedCategory,
  onSelectCategory,
  onScrollToCategorySection,
}) => {
  // Trạng thái thu gọn / mở rộng dành riêng cho Mobile
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-slate-50/70 py-4 sm:py-6 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 space-y-3 sm:space-y-4">
        
        {/* Section Heading */}
        <div className="flex items-center justify-between gap-2">
          <div>
            <div className="text-[10px] sm:text-xs font-black uppercase text-red-600 tracking-wider">
              DANH MỤC SẢN PHẨM CHÍNH HÃNG
            </div>
            <h2 className="text-base sm:text-xl font-black text-slate-900 tracking-tight">
              Tìm Nhanh Theo Nhu Cầu
            </h2>
          </div>

          {/* Nút xem thêm / thu gọn trên Header (CHỈ HIỂN THỊ TRÊN MOBILE / TABLET, ẨN HOÀN TOÀN TRÊN DESKTOP) */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden inline-flex items-center gap-1 px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-red-600 rounded-xl text-xs font-bold shadow-2xs transition-all cursor-pointer"
          >
            <span>{isExpanded ? 'Thu gọn' : `Xem thêm (${CATALOG_GROUPS.length - 4})`}</span>
            {isExpanded ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* 
          Category Cards Grid:
          - Trên Desktop (lg): Luôn luôn hiển thị đầy đủ cả 7 danh mục trên 1 hàng (7 cột ngang), không cần nút thu gọn.
          - Trên Mobile (< lg): Mặc định hiện 4 mục, nhấn Xem thêm sẽ hiện đủ 7 mục.
        */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3">
          {CATALOG_GROUPS.map((group, idx) => {
            const isSelected = selectedCategory === group.id;
            const bgClass = getCategoryBgColor(group.id);
            // Các mục thứ 5, 6, 7 ẩn trên mobile nếu chưa bấm mở, nhưng LUÔN HIỆN TRÊN DESKTOP (lg:flex)
            const isHiddenOnMobile = idx >= 4 && !isExpanded;

            return (
              <button
                key={group.id}
                onClick={() => {
                  onSelectCategory(group.id);
                  if (onScrollToCategorySection) {
                    onScrollToCategorySection(`category-section-${group.id}`);
                  }
                }}
                className={`group p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 flex-col justify-between cursor-pointer relative overflow-hidden ${
                  isHiddenOnMobile ? 'hidden lg:flex' : 'flex'
                } ${
                  isSelected
                    ? 'bg-white border-red-600 shadow-md ring-2 ring-red-100'
                    : 'bg-white hover:bg-slate-50 border-slate-200/90 hover:border-red-300 shadow-2xs'
                }`}
              >
                {/* Header thẻ: Badge + Icon */}
                <div className="flex items-center justify-between gap-1 mb-2">
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center border ${bgClass} shrink-0 group-hover:scale-105 transition-transform`}>
                    {getCategoryIcon(group.id)}
                  </div>

                  {group.badge && (
                    <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600 truncate max-w-[85px]">
                      {group.badge}
                    </span>
                  )}
                </div>

                {/* Tên danh mục */}
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-red-600 transition-colors leading-tight line-clamp-1">
                    {group.name}
                  </h3>
                </div>

                {/* Footer thẻ: Khám phá */}
                <div className="mt-1.5 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 group-hover:text-red-600 transition-colors">
                  <span>Khám phá</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Nút bấm lớn ở dưới thẻ (CHỈ HIỂN THỊ TRÊN MOBILE / TABLET, ẨN HOÀN TOÀN TRÊN DESKTOP) */}
        <div className="lg:hidden text-center pt-1">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-white hover:bg-red-50 border border-slate-300 hover:border-red-400 text-slate-700 hover:text-red-600 rounded-xl text-xs font-black shadow-2xs transition-all cursor-pointer"
          >
            <span>{isExpanded ? 'Thu gọn bớt danh mục' : `Xem thêm ${CATALOG_GROUPS.length - 4} danh mục khác`}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-red-600" />
            ) : (
              <ChevronDown className="w-4 h-4 text-red-600" />
            )}
          </button>
        </div>

      </div>
    </section>
  );
};
