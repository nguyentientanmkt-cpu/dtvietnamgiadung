import React, { useState, useEffect } from 'react';
import { Flame, Clock, ArrowRight, ShoppingCart, Zap, Eye } from 'lucide-react';
import { Product } from '../types';
import { formatVND } from '../data/products';

interface FlashSaleSectionProps {
  products: Product[];
  onOpenProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const FlashSaleSection: React.FC<FlashSaleSectionProps> = ({
  products,
  onOpenProduct,
  onAddToCart,
}) => {
  // Real-time countdown timer (hours, minutes, seconds)
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 12, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatPad = (num: number) => String(num).padStart(2, '0');

  return (
    <section id="flash-sale" className="py-8 bg-gradient-to-b from-red-50/60 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Flash Sale Banner Header - Thiết kế hài hòa, sang trọng và dịu mắt */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-600 text-white flex items-center justify-center shadow-md shadow-red-600/20 shrink-0">
              <Zap className="w-6 h-6 fill-amber-300 text-amber-300 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-black text-base sm:text-xl uppercase tracking-tight text-slate-900 flex items-center gap-1.5">
                  GIÁ TỐT HÔM NAY
                  <span className="text-red-600 font-black">• FLASH SALE</span>
                </h3>
                <span className="bg-red-50 text-red-600 border border-red-200 text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Giảm tới 45%
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Số lượng có hạn, áp dụng cho các đơn hàng đặt mua trong khung giờ vàng
              </p>
            </div>
          </div>

          {/* Countdown Clock - Thiết kế tối giản, công nghệ, dễ nhìn */}
          <div className="self-start sm:self-auto flex items-center gap-2.5 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
              <Clock className="w-4 h-4 text-red-600 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="uppercase text-[11px] font-extrabold text-slate-700">Kết thúc sau:</span>
            </div>
            <div className="flex items-center gap-1 font-mono font-black text-xs sm:text-sm">
              <span className="bg-slate-900 text-white px-2 py-1 rounded-md shadow-xs">{formatPad(timeLeft.hours)}</span>
              <span className="text-slate-400 font-bold">:</span>
              <span className="bg-slate-900 text-white px-2 py-1 rounded-md shadow-xs">{formatPad(timeLeft.minutes)}</span>
              <span className="text-slate-400 font-bold">:</span>
              <span className="bg-red-600 text-white px-2 py-1 rounded-md shadow-xs animate-pulse">{formatPad(timeLeft.seconds)}</span>
            </div>
          </div>
        </div>

        {/* 4 Flash Sale Product Cards (2 mobile, 3-4 tablet/desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {products.slice(0, 4).map((product, idx) => {
            const soldProgress = 65 + (idx * 9); // e.g. 65%, 74%, 83%, 92%
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border-2 border-red-100 hover:border-red-400 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Image container with 1:1 ratio and object-contain */}
                  <div className="relative aspect-square overflow-hidden bg-white p-2.5 sm:p-3 flex items-center justify-center border-b border-slate-100">
                    <img
                      src={product.thumbnail}
                      alt={product.shortName || product.name}
                      width="300"
                      height="300"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />

                    {/* Badge Sale & Tag */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                      <span className="bg-red-600 text-white font-black text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-md shadow-xs uppercase tracking-wider">
                        -{product.discountPercent}%
                      </span>
                    </div>

                    <div className="absolute top-2 right-2 z-10">
                      <span className="bg-slate-900/80 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Chính Hãng
                      </span>
                    </div>

                    {/* Quick view button on hover */}
                    <button
                      onClick={() => onOpenProduct(product)}
                      className="absolute inset-0 bg-slate-950/20 backdrop-blur-3xs opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center justify-center gap-2 text-white font-bold text-xs cursor-pointer"
                    >
                      <span className="bg-white text-slate-900 px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-1.5 hover:bg-red-600 hover:text-white transition-colors">
                        <Eye className="w-4 h-4" />
                        Xem Nhanh
                      </span>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-2.5 sm:p-4">
                    <h4 
                      onClick={() => onOpenProduct(product)}
                      className="font-extrabold text-xs sm:text-sm text-slate-800 hover:text-red-600 transition-colors line-clamp-2 cursor-pointer leading-snug min-h-[32px] sm:min-h-[40px]"
                      title={product.name}
                    >
                      {product.shortName || product.name}
                    </h4>

                    {/* Price section */}
                    <div className="mt-2 sm:mt-3 flex items-baseline gap-1.5 sm:gap-2 flex-wrap">
                      <span className="text-sm sm:text-lg font-black text-red-600 tracking-tight">
                        {formatVND(product.price)}
                      </span>
                      <span className="text-[10px] sm:text-xs text-slate-400 line-through">
                        {formatVND(product.originalPrice)}
                      </span>
                    </div>

                    {/* Progress Bar (Đã Bán) */}
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-1">
                        <span className="text-red-600 flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5 fill-red-600" />
                          Đã bán {product.soldCount}
                        </span>
                        <span>Còn lại ít</span>
                      </div>
                      <div className="w-full h-2.5 bg-red-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full transition-all duration-500"
                          style={{ width: `${soldProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="p-4 pt-0">
                  <button
                    onClick={() => onAddToCart(product)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs py-2.5 px-4 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    MUA NGAY GIÁ SỐC
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
