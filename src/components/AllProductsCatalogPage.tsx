import React, { useState, useEffect, useMemo } from 'react';
import { 
  ArrowLeft, 
  Search, 
  X, 
  Filter, 
  SlidersHorizontal, 
  ChevronDown, 
  Store, 
  Sparkles,
  ShieldCheck,
  MessageCircle,
  PhoneCall
} from 'lucide-react';
import { Product, CatalogCategory } from '../types';
import { ProductCard } from './ProductCard';
import { STORE_CONFIG } from '../data/config';
import { 
  CATALOG_GROUPS, 
  filterProductsByCategory, 
  searchProducts 
} from '../utils/productFilter';
import { trackConversion } from '../utils/tracking';

interface AllProductsCatalogPageProps {
  products: Product[];
  selectedCategory: CatalogCategory;
  onSelectCategory: (category: CatalogCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenDetail: (product: Product) => void;
  onBackToHome: () => void;
  onScrollToWholesale?: () => void;
}

export const AllProductsCatalogPage: React.FC<AllProductsCatalogPageProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onOpenDetail,
  onBackToHome,
  onScrollToWholesale,
}) => {
  const [visibleCount, setVisibleCount] = useState(24);
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'price-asc' | 'price-desc'>('popular');
  const [priceFilter, setPriceFilter] = useState<'all' | 'under100k' | '100kto200k' | 'above200k'>('all');

  // Reset pagination when parameters change
  useEffect(() => {
    setVisibleCount(24);
  }, [selectedCategory, searchQuery, priceFilter, sortBy]);

  // Scroll to top on category change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategory]);

  // Lọc và sắp xếp sản phẩm
  const filteredProducts = useMemo(() => {
    // 1. Lọc theo search query (nếu có)
    let list = searchQuery.trim() 
      ? searchProducts(products, searchQuery) 
      : products;

    // 2. Lọc theo danh mục
    list = filterProductsByCategory(list, selectedCategory);

    // 3. Lọc theo khoảng giá
    if (priceFilter === 'under100k') {
      list = list.filter((p) => p.price < 100000);
    } else if (priceFilter === '100kto200k') {
      list = list.filter((p) => p.price >= 100000 && p.price <= 200000);
    } else if (priceFilter === 'above200k') {
      list = list.filter((p) => p.price > 200000);
    }

    // 4. Sắp xếp
    const sorted = [...list];
    if (sortBy === 'popular') {
      sorted.sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0));
    } else if (sortBy === 'rating') {
      sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    }

    return sorted;
  }, [products, selectedCategory, searchQuery, priceFilter, sortBy]);

  // Lấy thông tin nhóm hiện tại
  const currentGroupInfo = CATALOG_GROUPS.find((g) => g.id === selectedCategory);

  return (
    <div className="bg-[#f8fafc] min-h-screen py-5 sm:py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 space-y-6">
        
        {/* 1. TOP BREADCRUMB & BACK BUTTON */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-700 text-xs font-black transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Trang Chủ</span>
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              Catalog Sản Phẩm D&amp;T Việt Nam
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Hiển thị <strong>{filteredProducts.length}</strong> sản phẩm chính hãng</span>
          </div>
        </div>

        {/* 2. HEADER BANNER CỦA CATALOG */}
        <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-md">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-[10px] sm:text-xs font-black px-3 py-0.5 rounded-full uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Catalog Trực Tuyến • Không Cần Giỏ Hàng</span>
            </div>
            <h1 className="text-xl sm:text-3xl font-black tracking-tight">
              {currentGroupInfo ? `${currentGroupInfo.icon} ${currentGroupInfo.name}` : 'Tất Cả Sản Phẩm D&T Việt Nam'}
            </h1>
            <p className="text-xs sm:text-sm text-red-100 leading-relaxed">
              {currentGroupInfo 
                ? currentGroupInfo.description 
                : 'Tìm kiếm sản phẩm bạn cần, xem thông số công dụng và đặt mua trực tiếp qua Shopee Mall hoặc TikTok Shop.'}
            </p>
          </div>
        </div>

        {/* 3. CATEGORY TABS (7 NHÓM DANH MỤC + TẤT CẢ) */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              📦 Tất Cả ({products.length})
            </button>

            {CATALOG_GROUPS.map((group) => {
              const isSelected = selectedCategory === group.id;
              const count = filterProductsByCategory(products, group.id).length;

              return (
                <button
                  key={group.id}
                  onClick={() => onSelectCategory(group.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-red-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <span>{group.icon}</span>
                  <span>{group.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. TOOLBAR: TÌM KIẾM, LỌC GIÁ, SẮP XẾP */}
        <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Tìm theo tên, công dụng (mối, chuột, côn trùng, sáp gỗ...)"
                className="w-full pl-9 pr-8 py-2 bg-slate-50 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 rounded-xl border border-slate-300 focus:border-red-600 focus:outline-hidden"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter by Price & Sort */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Price Filter */}
              <select
                value={priceFilter}
                onChange={(e: any) => setPriceFilter(e.target.value)}
                className="bg-slate-50 border border-slate-300 text-xs font-bold text-slate-700 rounded-xl px-3 py-2 focus:outline-hidden focus:border-red-600 cursor-pointer"
              >
                <option value="all">Khoảng Giá: Tất Cả</option>
                <option value="under100k">Dưới 100.000₫</option>
                <option value="100kto200k">100.000₫ - 200.000₫</option>
                <option value="above200k">Trên 200.000₫</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="bg-slate-50 border border-slate-300 text-xs font-bold text-slate-700 rounded-xl px-3 py-2 focus:outline-hidden focus:border-red-600 cursor-pointer"
              >
                <option value="popular">Bán chạy nhất</option>
                <option value="rating">Đánh giá cao nhất</option>
                <option value="price-asc">Giá tăng dần</option>
                <option value="price-desc">Giá giảm dần</option>
              </select>
            </div>

          </div>
        </div>

        {/* 5. DANH SÁCH SẢN PHẨM CATALOG GRID */}
        {filteredProducts.length > 0 ? (
          <div>
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-4">
              {filteredProducts.slice(0, visibleCount).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenDetail={onOpenDetail}
                  positionContext="catalog_page"
                />
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredProducts.length && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 24)}
                  className="px-6 py-2.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-black rounded-xl text-xs sm:text-sm shadow-2xs transition-all cursor-pointer"
                >
                  Xem Thêm {Math.min(24, filteredProducts.length - visibleCount)} Sản Phẩm
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-800">
              Không tìm thấy sản phẩm phù hợp
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Không có sản phẩm nào khớp với tìm kiếm hoặc bộ lọc hiện tại. Vui lòng thử từ khóa khác hoặc xóa bộ lọc.
            </p>
            <button
              onClick={() => {
                onSearchChange('');
                onSelectCategory('all');
                setPriceFilter('all');
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-xl text-xs font-bold shadow-xs hover:bg-red-700 transition-colors"
            >
              Xem Toàn Bộ Sản Phẩm
            </button>
          </div>
        )}

        {/* 6. WHOLESALE BANNER AT BOTTOM OF CATALOG */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-amber-400 font-black text-xs uppercase tracking-wider">
              Khách Hàng Mua Sỉ &amp; Đại Lý
            </span>
            <h3 className="text-base sm:text-xl font-black">
              Bạn cần nhập hàng số lượng lớn theo giá xuất xưởng?
            </h3>
            <p className="text-xs text-slate-300">
              Liên hệ ngay để nhận chiết khấu đại lý tốt nhất và danh mục bảng giá PDF đầy đủ.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={STORE_CONFIG.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion({
                eventName: 'click_zalo',
                buttonPosition: 'wholesale_section_zalo'
              })}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black rounded-xl flex items-center gap-1.5 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Báo Giá Zalo</span>
            </a>

            <a
              href={`tel:${STORE_CONFIG.phoneRaw}`}
              onClick={() => trackConversion({
                eventName: 'click_hotline',
                buttonPosition: 'wholesale_section_hotline'
              })}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black rounded-xl flex items-center gap-1.5 shadow-md transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Hotline {STORE_CONFIG.hotline}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
