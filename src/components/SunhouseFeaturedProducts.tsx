import React from 'react';
import { Sparkles, ShoppingCart, Eye, Star } from 'lucide-react';
import { Product } from '../types';
import { formatVND } from '../data/products';

interface SunhouseFeaturedProductsProps {
  products: Product[];
  onOpenProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const SunhouseFeaturedProducts: React.FC<SunhouseFeaturedProductsProps> = ({
  products,
  onOpenProduct,
  onAddToCart,
}) => {
  // Select the top 5 flagship items for the Sunhouse bento grid
  const bentoItems = [
    {
      product: products.find((p) => p.id === 'dt-bot-tay-rong-reu-500g') || products[0],
      customName: 'BỘT TẨY RONG RÊU D&T 500G CHUYÊN DỤNG',
      badge: 'BÁN CHẠY #1',
      span: 'lg:col-span-1',
    },
    {
      product: products.find((p) => p.id === 'dt-chaindrite-600ml') || products[1],
      customName: 'BÌNH XỊT CHAIND RITE THÁI LAN 600ML DIỆT MỐI KIẾN GIÁN',
      badge: 'NỘI ĐỊA THÁI',
      span: 'lg:col-span-1',
    },
    {
      product: products.find((p) => p.id === 'dt-rat-off-spray-300ml') || products[2],
      customName: 'XỊT ĐUỔI CHUỘT RAT OFF THÁI LAN 300ML KHOANG MÁY Ô TÔ',
      badge: 'KHUYÊN DÙNG',
      span: 'lg:col-span-1',
    },
    {
      product: products.find((p) => p.id === 'dt-tlex-500ml') || products[3],
      customName: 'NƯỚC TẨY DẦU MỠ ĐA NĂNG T-LEX 500ML SIÊU SẠCH',
      badge: 'MỚI 2026',
      span: 'lg:col-span-3 sm:col-span-1',
    },
    {
      product: products.find((p) => p.id === 'dt-loc-rac-inox-304') || products[4],
      customName: 'LỌC RÁC BỒN RỬA INOX 304 DẬP LIỀN KHỐI CHỐNG TẮC CỐNG',
      badge: 'HOT',
      span: 'lg:col-span-3 sm:col-span-1',
    },
  ];

  return (
    <section className="py-14 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-red-600">
            SẢN PHẨM NỔI BẬT
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Với quy mô hơn 60 SKU sản phẩm, vận hành 5 gian hàng Shopee, 1 TikTok Shop và hơn 5 Fanpage Facebook, sản phẩm D&amp;T Việt Nam đồng hành phục vụ hàng chục ngàn gia đình trên toàn quốc.
          </p>
        </div>

        {/* Bento Grid 1: 3 cards on top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bentoItems.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              onClick={() => onOpenProduct(item.product)}
              className="group relative bg-[#f5f7f9] hover:bg-[#eef2f5] rounded-2xl p-6 flex flex-col justify-between border border-slate-200/80 hover:border-red-300 transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer min-h-[360px]"
            >
              {/* Badge */}
              <div className="flex items-center justify-between">
                <span className="bg-red-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-2xs">
                  {item.badge}
                </span>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{item.product.rating}</span>
                </div>
              </div>

              {/* Centered Large Product Cutout Photo */}
              <div className="my-6 aspect-4/3 overflow-hidden flex items-center justify-center">
                <img
                  src={item.product.thumbnail}
                  alt={item.customName}
                  referrerPolicy="no-referrer"
                  className="max-h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bold Uppercase Product Title */}
              <div className="space-y-2 text-center pt-2 border-t border-slate-200/60">
                <h3 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                  {item.customName}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-base font-black text-red-600">
                    {formatVND(item.product.price)}
                  </span>
                  {item.product.originalPrice > item.product.price && (
                    <span className="text-xs text-slate-400 line-through">
                      {formatVND(item.product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bento Grid 2: 2 wider cards on bottom row (Sunhouse style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bentoItems.slice(3, 5).map((item, idx) => (
            <div
              key={idx}
              onClick={() => onOpenProduct(item.product)}
              className="group relative bg-[#f5f7f9] hover:bg-[#eef2f5] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-200/80 hover:border-red-300 transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer"
            >
              {/* Left: Text & Info */}
              <div className="space-y-3 flex-1 text-center sm:text-left">
                <span className="bg-red-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-2xs inline-block">
                  {item.badge}
                </span>

                <h3 className="text-sm sm:text-base font-black text-slate-900 tracking-tight leading-snug group-hover:text-red-600 transition-colors">
                  {item.customName}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2">
                  {item.product.shortDescription}
                </p>

                <div className="flex items-baseline gap-2 justify-center sm:justify-start pt-1">
                  <span className="text-lg font-black text-red-600">
                    {formatVND(item.product.price)}
                  </span>
                  {item.product.originalPrice > item.product.price && (
                    <span className="text-xs text-slate-400 line-through">
                      {formatVND(item.product.originalPrice)}
                    </span>
                  )}
                </div>

                <div className="pt-2 flex items-center gap-2 justify-center sm:justify-start">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenProduct(item.product);
                    }}
                    className="px-4 py-2 bg-slate-900 hover:bg-red-600 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Xem Chi Tiết &amp; Video
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(item.product);
                    }}
                    className="p-2 bg-white hover:bg-red-50 text-slate-800 hover:text-red-600 border border-slate-300 rounded-xl transition-colors cursor-pointer"
                    title="Thêm vào giỏ"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right: Product Image */}
              <div className="w-48 h-48 shrink-0 flex items-center justify-center">
                <img
                  src={item.product.thumbnail}
                  alt={item.customName}
                  referrerPolicy="no-referrer"
                  className="max-h-40 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
