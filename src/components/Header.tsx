import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Search, 
  PhoneCall, 
  ShieldCheck, 
  Truck, 
  X,
  Menu,
  ChevronDown,
  Store,
  Sparkles,
  ExternalLink,
  Flame,
  ArrowRight
} from 'lucide-react';
import { Product, CatalogCategory } from '../types';
import { STORE_CONFIG } from '../data/config';
import { CATALOG_GROUPS, POPULAR_SEARCH_KEYWORDS, searchProducts } from '../utils/productFilter';
import { trackConversion } from '../utils/tracking';
import { formatVND } from '../data/products';
import { Logo } from './Logo';

interface HeaderProps {
  selectedCategory: CatalogCategory;
  onSelectCategory: (category: CatalogCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  products: Product[];
  onOpenProduct: (product: Product) => void;
  onNavigateView: (view: 'home' | 'catalog') => void;
  currentView: 'home' | 'catalog';
  onScrollToWholesale: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  products,
  onOpenProduct,
  onNavigateView,
  currentView,
  onScrollToWholesale,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Suggestions search logic
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchProducts(products, searchQuery).slice(0, 6);
  }, [searchQuery, products]);

  // Handle outside click to close search suggestions
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearchFocused(false);
    onNavigateView('catalog');

    trackConversion({
      eventName: 'search_product',
      buttonPosition: 'header',
      additionalData: { query: searchQuery }
    });
  };

  const handleKeywordClick = (kw: string) => {
    onSearchChange(kw);
    setIsSearchFocused(false);
    onNavigateView('catalog');

    trackConversion({
      eventName: 'search_product',
      buttonPosition: 'search_autocomplete',
      additionalData: { keyword: kw }
    });
  };

  const handleSelectCatAndNavigate = (cat: CatalogCategory) => {
    onSelectCategory(cat);
    onNavigateView('catalog');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    onNavigateView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-slate-200">
      
      {/* 1. TOP BAR: Cam kết, Hotline & Thông báo chính hãng */}
      <div className="bg-red-700 text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="flex items-center gap-1 font-bold whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>Tổng Kho D&amp;T Việt Nam • 100% Chính Hãng</span>
            </span>
            <span className="hidden md:inline-block opacity-40">•</span>
            <span className="hidden md:flex items-center gap-1 text-red-100">
              <Truck className="w-3.5 h-3.5 shrink-0" />
              <span>Giao hàng toàn quốc - Kiểm tra hàng trước khi nhận</span>
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a 
              href={`tel:${STORE_CONFIG.phoneRaw}`} 
              onClick={() => trackConversion({
                eventName: 'click_hotline',
                buttonPosition: 'header',
                additionalData: { phone: STORE_CONFIG.hotline }
              })}
              className="flex items-center gap-1 font-black hover:text-amber-200 transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-amber-300" />
              <span className="hidden xs:inline">Hotline:</span>
              <span>{STORE_CONFIG.hotline}</span>
            </a>

            <a
              href={STORE_CONFIG.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion({
                eventName: 'click_zalo',
                buttonPosition: 'header'
              })}
              className="hidden sm:inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white px-2 py-0.5 rounded text-[10px] font-bold transition-all"
            >
              <span>Zalo Sỉ &amp; Lẻ</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. MAIN HEADER: Logo, Large Search Bar, Store Links */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3.5">
        <div className="flex items-center justify-between gap-2 sm:gap-6">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-red-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Mở menu danh mục"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo D&T Việt Nam */}
          <div 
            onClick={handleGoHome}
            className="cursor-pointer shrink-0 flex items-center gap-2 group"
          >
            <Logo size="md" variant="capsule" />
            <div className="hidden xl:block text-left leading-tight border-l border-slate-200 pl-3">
              <span className="block text-[11px] font-black text-slate-900 tracking-wider uppercase">TỔNG KHO GIA DỤNG</span>
              <span className="block text-[10px] text-slate-500 font-medium">Hàng chính hãng • Giá tận kho</span>
            </div>
          </div>

          {/* LARGE SEARCH BAR (YÊU CẦU 1 & 8) */}
          <div ref={searchContainerRef} className="relative flex-1 max-w-2xl mx-1 sm:mx-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  setIsSearchFocused(true);
                }}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Tìm sản phẩm bạn cần... (diệt mối, chuột, côn trùng, rong rêu...)"
                className="w-full pl-9 sm:pl-11 pr-20 sm:pr-24 py-2 sm:py-2.5 bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 rounded-full border border-slate-300 focus:border-red-600 focus:outline-hidden focus:ring-2 focus:ring-red-100 transition-all shadow-inner"
              />
              
              <Search className="absolute left-3 sm:left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-400" />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    onSearchChange('');
                  }}
                  className="absolute right-14 sm:right-16 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                type="submit"
                className="absolute right-1 sm:right-1.5 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 rounded-full transition-all flex items-center gap-1 cursor-pointer shadow-xs"
              >
                <span>Tìm</span>
              </button>
            </form>

            {/* INSTANT SUGGESTIONS DROPDOWN (YÊU CẦU 8) */}
            {isSearchFocused && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 text-slate-800 animate-in fade-in-50 duration-150">
                
                {/* Popular Keywords Row */}
                <div className="p-3 bg-slate-50/80 border-b border-slate-100">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span>Tìm kiếm phổ biến:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {POPULAR_SEARCH_KEYWORDS.map((kw) => (
                      <button
                        key={kw}
                        type="button"
                        onClick={() => handleKeywordClick(kw)}
                        className="text-[11px] font-medium bg-white hover:bg-red-50 hover:text-red-700 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200 hover:border-red-300 transition-colors cursor-pointer"
                      >
                        {kw}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Search Results Preview */}
                {searchQuery.trim() && (
                  <div className="p-2 max-h-80 overflow-y-auto divide-y divide-slate-100">
                    {searchResults.length > 0 ? (
                      <>
                        <div className="px-2 py-1 text-[11px] font-bold text-slate-400">
                          GỢI Ý SẢN PHẨM PHÙ HỢP ({searchResults.length})
                        </div>
                        {searchResults.map((product) => (
                          <div
                            key={product.id}
                            onClick={() => {
                              onOpenProduct(product);
                              setIsSearchFocused(false);
                            }}
                            className="p-2 hover:bg-red-50/60 rounded-xl transition-colors cursor-pointer flex items-center gap-3 group"
                          >
                            <img
                              src={product.thumbnail}
                              alt={product.shortName || product.name}
                              className="w-12 h-12 rounded-lg object-contain bg-slate-50 border border-slate-100 shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs font-bold text-slate-900 group-hover:text-red-600 truncate transition-colors">
                                {product.shortName || product.name}
                              </h4>
                              <p className="text-[11px] text-slate-500 truncate">
                                {product.uses?.[0] || product.shortDescription}
                              </p>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-xs font-extrabold text-red-600">
                                  {formatVND(product.price)}
                                </span>
                                {product.tag && (
                                  <span className="text-[9px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded">
                                    {product.tag}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="text-slate-400 group-hover:text-red-600 shrink-0">
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        ))}

                        <div className="p-2 pt-3 text-center border-t border-slate-100">
                          <button
                            type="button"
                            onClick={() => {
                              setIsSearchFocused(false);
                              onNavigateView('catalog');
                            }}
                            className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center justify-center gap-1 mx-auto"
                          >
                            <span>Xem tất cả kết quả cho "{searchQuery}"</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="py-6 text-center text-slate-500 text-xs">
                        Không tìm thấy sản phẩm khớp với "<strong>{searchQuery}</strong>". Thử tìm: <em>mối, chuột, côn trùng, rong rêu...</em>
                      </div>
                    )}
                  </div>
                )}

              </div>
            )}
          </div>

          {/* Quick Channels: Shopee & TikTok Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a
              href={STORE_CONFIG.shopeeStore}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion({
                eventName: 'click_shopee',
                buttonPosition: 'header',
                additionalData: { store: 'Shopee D&T Việt Nam' }
              })}
              className="bg-[#ee4d2d]/10 hover:bg-[#ee4d2d] text-[#ee4d2d] hover:text-white px-3 py-1.5 rounded-xl border border-[#ee4d2d]/30 text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs"
              title="Ghé thăm gian hàng Shopee D&T Việt Nam"
            >
              <Store className="w-3.5 h-3.5" />
              <span>Shopee Mall</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>

            <a
              href={STORE_CONFIG.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion({
                eventName: 'click_tiktok',
                buttonPosition: 'header',
                additionalData: { store: 'TikTok Shop D&T Việt Nam' }
              })}
              className="bg-black text-white hover:bg-slate-800 px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs"
              title="Xem video và mua hàng trên TikTok Shop"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.94-4.52V8.91a8.3 8.3 0 0 0 4.83 1.55v-3.77z"/>
              </svg>
              <span>TikTok Shop</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>

            <a
              href={STORE_CONFIG.facebookFanpage}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion({
                eventName: 'click_facebook',
                buttonPosition: 'header',
                additionalData: { store: 'Fanpage Facebook D&T Việt Nam' }
              })}
              className="bg-[#1877f2]/10 hover:bg-[#1877f2] text-[#1877f2] hover:text-white px-3 py-1.5 rounded-xl border border-[#1877f2]/30 text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs"
              title="Fanpage Facebook D&T Việt Nam"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Fanpage</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          </div>


        </div>
      </div>

      {/* 3. CATEGORY NAVIGATION BAR (7 Main Categories + Wholesale Tab) */}
      <nav className="bg-slate-50 border-t border-slate-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            
            <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none">
              
              <button
                onClick={handleGoHome}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  currentView === 'home' 
                    ? 'bg-red-600 text-white font-extrabold shadow-2xs' 
                    : 'hover:bg-slate-200/70 text-slate-700'
                }`}
              >
                <span>Trang Chủ</span>
              </button>

              <button
                onClick={() => {
                  onSelectCategory('all');
                  onNavigateView('catalog');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  currentView === 'catalog' && selectedCategory === 'all'
                    ? 'bg-red-600 text-white font-extrabold shadow-2xs'
                    : 'hover:bg-slate-200/70 text-slate-700'
                }`}
              >
                <span>Tất Cả Sản Phẩm</span>
              </button>

              {CATALOG_GROUPS.map((group) => {
                const isActive = currentView === 'catalog' && selectedCategory === group.id;
                return (
                  <button
                    key={group.id}
                    onClick={() => handleSelectCatAndNavigate(group.id)}
                    className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                      isActive
                        ? 'bg-red-600 text-white font-black shadow-2xs'
                        : 'hover:bg-slate-200/70 text-slate-700'
                    }`}
                  >
                    <span>{group.icon}</span>
                    <span>{group.shortTitle}</span>
                  </button>
                );
              })}
            </div>

            {/* Wholesale CTA Tab */}
            <div className="shrink-0 pl-2">
              <button
                onClick={onScrollToWholesale}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 shadow-2xs cursor-pointer"
              >
                <Flame className="w-3.5 h-3.5 text-red-700 fill-current" />
                <span>Nhập Sỉ / Đại Lý</span>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* 4. MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto">
            
            {/* Drawer Header */}
            <div>
              <div className="p-4 bg-red-600 text-white flex items-center justify-between">
                <Logo size="sm" variant="capsule" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-full bg-white/20 hover:bg-white/30 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="p-4 space-y-1">
                <button
                  onClick={handleGoHome}
                  className="w-full text-left px-3 py-2.5 rounded-xl font-extrabold text-sm text-slate-800 hover:bg-slate-100 flex items-center justify-between"
                >
                  <span>🏠 Trang Chủ</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>

                <button
                  onClick={() => {
                    onSelectCategory('all');
                    onNavigateView('catalog');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-xl font-bold text-sm text-slate-800 hover:bg-slate-100 flex items-center justify-between"
                >
                  <span>📦 Toàn Bộ Sản Phẩm (77 SP)</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>

                <div className="pt-2 pb-1 px-3 text-[11px] font-black text-slate-400 uppercase tracking-wider">
                  Danh Mục Sản Phẩm
                </div>

                {CATALOG_GROUPS.map((group) => (
                  <button
                    key={group.id}
                    onClick={() => handleSelectCatAndNavigate(group.id)}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-red-50 hover:text-red-600 flex items-center justify-between transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span>{group.icon}</span>
                      <span>{group.name}</span>
                    </span>
                    <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                      {group.badge || 'Xem'}
                    </span>
                  </button>
                ))}

                <div className="pt-3 border-t border-slate-200 mt-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onScrollToWholesale();
                    }}
                    className="w-full bg-amber-400 text-slate-950 font-black p-3 rounded-xl flex items-center justify-center gap-2 text-xs shadow-sm"
                  >
                    <Flame className="w-4 h-4 text-red-600" />
                    <span>BẠN MUỐN NHẬP SỈ? NHẬN BÁO GIÁ</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Drawer Bottom Support */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-2">
              <a
                href={STORE_CONFIG.shopeeStore}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion({
                  eventName: 'click_shopee',
                  buttonPosition: 'header'
                })}
                className="w-full py-2.5 px-3 bg-[#ee4d2d] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs"
              >
                <Store className="w-4 h-4" />
                <span>Mua Hàng Trên Shopee</span>
              </a>

              <a
                href={STORE_CONFIG.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion({
                  eventName: 'click_tiktok',
                  buttonPosition: 'header'
                })}
                className="w-full py-2.5 px-3 bg-black text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Mua Hàng Trên TikTok Shop</span>
              </a>

              <a
                href={STORE_CONFIG.facebookFanpage}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion({
                  eventName: 'click_facebook',
                  buttonPosition: 'header'
                })}
                className="w-full py-2.5 px-3 bg-[#1877f2] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Fanpage Facebook D&amp;T</span>
              </a>

              <div className="text-center text-[11px] text-slate-500 pt-2">
                Hotline tư vấn: <strong className="text-red-600">{STORE_CONFIG.hotline}</strong>
              </div>
            </div>

          </div>
        </div>
      )}

    </header>
  );
};
