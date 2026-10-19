import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface FeaturedHomeProductsProps {
  products: Product[];
  onOpenDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onViewAllCatalog: () => void;
}

export const FeaturedHomeProducts: React.FC<FeaturedHomeProductsProps> = ({
  products,
  onOpenDetail,
  onAddToCart,
  onViewAllCatalog,
}) => {
  // Take top 8 prioritized / bestselling products
  const featuredList = products
    .filter((p) => p.isFeatured || p.tag === 'Bán Chạy')
    .slice(0, 8);

  const displayList = featuredList.length >= 8 ? featuredList : products.slice(0, 8);

  return (
    <section className="py-10 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b-2 border-red-600 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full mb-1.5 border border-red-200">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>TOP BÁN CHẠY NHẤT SHOPEE</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 uppercase tracking-tight">
              SẢN PHẨM NỔI BẬT
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Top 8 sản phẩm gia dụng & hóa phẩm sinh học được hàng ngàn khách hàng tin dùng và đánh giá 5 sao
            </p>
          </div>

          <button
            onClick={onViewAllCatalog}
            className="text-xs sm:text-sm font-extrabold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl flex items-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer self-start sm:self-auto shrink-0"
          >
            <span>Xem tất cả sản phẩm</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Product Grid: strictly max 4 columns on desktop, 2 on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {displayList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetail={onOpenDetail}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Guarantee Banner Strip */}
        <div className="mt-8 bg-slate-900 text-white rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/30 text-red-400 flex items-center justify-center shrink-0 border border-red-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-white">
                CAM KẾT 100% SẢN PHẨM CHÍNH HÃNG D&amp;T VIỆT NAM
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                Đồng kiểm hàng trước khi thanh toán (COD toàn quốc) • Đổi mới miễn phí trong 30 ngày nếu phát sinh lỗi
              </p>
            </div>
          </div>

          <button
            onClick={onViewAllCatalog}
            className="bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer shrink-0"
          >
            Xem Catalog 77 Sản Phẩm
          </button>
        </div>

      </div>
    </section>
  );
};
