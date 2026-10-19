import React from 'react';
import { ShieldCheck, Star, ExternalLink, Eye, Store } from 'lucide-react';
import { Product } from '../types';
import { formatVND } from '../data/products';
import { trackConversion } from '../utils/tracking';

interface ProductCardProps {
  product: Product;
  onOpenDetail: (product: Product) => void;
  positionContext?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetail,
  positionContext = 'product_card',
}) => {
  const displayName = product.shortName || product.name;
  const shortBenefit = product.uses?.[0] || product.shortDescription || 'Sản phẩm chính hãng chất lượng cao từ Tổng Kho D&T Việt Nam';

  // Sàn bán hàng
  const hasShopee = Boolean(product.shopeeUrl);
  const hasTikTok = Boolean(product.tiktokUrl);

  const handleShopeeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    trackConversion({
      eventName: 'click_shopee',
      productName: product.name,
      productId: product.id,
      category: product.category,
      buttonPosition: 'product_card_shopee',
      additionalData: { context: positionContext }
    });
  };

  const handleTikTokClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    trackConversion({
      eventName: 'click_tiktok',
      productName: product.name,
      productId: product.id,
      category: product.category,
      buttonPosition: 'product_card_tiktok',
      additionalData: { context: positionContext }
    });
  };

  return (
    <div 
      className="group bg-white rounded-2xl border border-slate-200 hover:border-red-400 shadow-2xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden relative h-full"
    >
      
      {/* 1. TOP PART: Hình ảnh sản phẩm + Nhãn (Badges) */}
      <div>
        <div 
          onClick={() => onOpenDetail(product)}
          className="relative aspect-square w-full bg-slate-50/50 p-3 flex items-center justify-center overflow-hidden border-b border-slate-100 cursor-pointer"
        >
          {/* Discount & Tag Badges */}
          <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 items-start max-w-[75%]">
            {product.discountPercent > 0 && (
              <span className="bg-red-600 text-white font-black text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md shadow-xs whitespace-nowrap">
                -{product.discountPercent}%
              </span>
            )}
            
            {product.tag && (
              <span className={`text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-md text-white shadow-xs truncate ${
                product.tag === 'Bán Chạy' ? 'bg-amber-600' :
                product.tag === 'Hàng Mới Về' ? 'bg-indigo-600' :
                'bg-emerald-600'
              }`}>
                {product.tag}
              </span>
            )}
          </div>

          {/* Genuine 100% badge */}
          <div className="absolute top-2.5 right-2.5 z-10">
            <span className="bg-white/95 backdrop-blur-xs text-slate-700 text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-slate-200 shadow-2xs flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-500 shrink-0" />
              <span>Chính Hãng</span>
            </span>
          </div>

          {/* Authentic Product Image */}
          <img
            src={product.thumbnail}
            alt={displayName}
            width="320"
            height="320"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />

          {/* Hover Quick Action Overlay (Desktop) */}
          <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-3xs opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-white text-slate-900 text-xs font-bold shadow-md flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-red-600" />
              <span>Xem Thông Tin</span>
            </span>
          </div>
        </div>

        {/* 2. THÔNG TIN SẢN PHẨM: Tên, Đánh giá, Công dụng ngắn, Giá tham khảo */}
        <div className="p-3 sm:p-4">
          
          {/* Rating & Sold count */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
              <span>{product.rating || 5.0}</span>
              <span className="text-slate-400 font-normal text-[10px]">({product.reviewCount || 100}+)</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">
              Đã bán {product.soldCount > 1000 ? `${(product.soldCount / 1000).toFixed(1)}k` : product.soldCount}
            </span>
          </div>

          {/* Product Name (Line clamped 2 lines) */}
          <h3
            onClick={() => onOpenDetail(product)}
            className="text-xs sm:text-sm font-extrabold text-slate-900 hover:text-red-600 transition-colors line-clamp-2 cursor-pointer leading-snug min-h-[34px] sm:min-h-[38px]"
            title={product.name}
          >
            {displayName}
          </h3>

          {/* Công dụng ngắn (Yêu cầu 4) */}
          <p 
            onClick={() => onOpenDetail(product)}
            className="mt-1 text-[11px] text-slate-500 line-clamp-2 leading-relaxed cursor-pointer hover:text-slate-700 min-h-[32px]"
          >
            {shortBenefit}
          </p>

          {/* Giá tham khảo (Yêu cầu 4) */}
          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-baseline justify-between gap-1 flex-wrap">
            <div>
              <span className="text-[10px] text-slate-400 font-medium block">Giá tham khảo:</span>
              <span className="text-sm sm:text-base font-black text-red-600 tracking-tight">
                {formatVND(product.price)}
              </span>
            </div>
            {product.originalPrice > product.price && (
              <span className="text-[11px] text-slate-400 line-through">
                {formatVND(product.originalPrice)}
              </span>
            )}
          </div>

        </div>
      </div>

      {/* 3. NÚT MUA TRÊN SÀN (YÊU CẦU 4: MUA SHOPEE / MUA TIKTOK, ẨN NẾU CHƯA CÓ TRÊN SÀN) */}
      <div className="p-3 sm:p-4 pt-0 space-y-1.5">
        
        {/* Nút Shopee & TikTok */}
        <div className={`grid gap-1.5 ${hasShopee && hasTikTok ? 'grid-cols-2' : 'grid-cols-1'}`}>
          
          {hasShopee && (
            <a
              href={product.shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleShopeeClick}
              className="w-full py-2 px-2.5 rounded-xl bg-[#ee4d2d] hover:bg-[#d73211] text-white text-[11px] sm:text-xs font-black transition-all flex items-center justify-center gap-1 shadow-2xs cursor-pointer text-center group"
              title="Mua ngay trên Shopee chính hãng"
            >
              <Store className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">MUA SHOPEE</span>
              <ExternalLink className="w-2.5 h-2.5 shrink-0 opacity-75 group-hover:translate-x-0.5 transition-transform" />
            </a>
          )}

          {hasTikTok && (
            <a
              href={product.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleTikTokClick}
              className="w-full py-2 px-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-[11px] sm:text-xs font-black transition-all flex items-center justify-center gap-1 shadow-2xs cursor-pointer text-center group"
              title="Mua ngay trên TikTok Shop"
            >
              <svg className="w-3 h-3 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.94-4.52V8.91a8.3 8.3 0 0 0 4.83 1.55v-3.77z"/>
              </svg>
              <span className="truncate">MUA TIKTOK</span>
              <ExternalLink className="w-2.5 h-2.5 shrink-0 opacity-75 group-hover:translate-x-0.5 transition-transform" />
            </a>
          )}

        </div>

        {/* Chi tiết sản phẩm */}
        <button
          type="button"
          onClick={() => onOpenDetail(product)}
          className="w-full py-1 text-center text-[10px] sm:text-[11px] font-bold text-slate-500 hover:text-red-600 transition-colors flex items-center justify-center gap-1 cursor-pointer"
        >
          <Eye className="w-3 h-3" />
          <span>Xem chi tiết công dụng &amp; thông số</span>
        </button>

      </div>

    </div>
  );
};
