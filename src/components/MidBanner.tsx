import React from 'react';
import { ArrowRight, ShieldCheck, Gift, Store, ExternalLink } from 'lucide-react';
import { ProductCategory } from '../types';
import { STORE_CONFIG } from '../data/config';

interface MidBannerProps {
  onSelectCategory: (cat: ProductCategory) => void;
}

export const MidBanner: React.FC<MidBannerProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-6 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-950 min-h-[220px] sm:min-h-[260px] flex items-center">
          
          {/* Background image using official Shopee shop cover */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/products/shop-cover.jpg')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/60"></div>
          </div>

          {/* Content & Product Showcase */}
          <div className="relative z-10 p-5 sm:p-8 md:p-10 w-full flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] sm:text-xs font-black uppercase tracking-wider mb-2">
                <Gift className="w-3.5 h-3.5" />
                ƯU ĐÃI ĐẶC BIỆT TỪ TỔNG KHO D&T
              </span>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight">
                XỊT MỐI MỌT THÁI LAN &amp; SÁP PHỤC HỒI ĐỒ GỖ
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
                Bình Xịt Diệt Mối Mọt Chaindrite nhập khẩu chính hãng Thái Lan 600ml kèm vòi kim loại luồn sâu + Sáp Ong Beewax tự nhiên phục hồi đồ gỗ sáng bóng. Cam kết hàng chính hãng 100%, giao hàng đồng kiểm toàn quốc.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onSelectCategory('duoi-chuot-con-trung')}
                  className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-md flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  <span>Xem Chi Tiết Ưu Đãi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={STORE_CONFIG.shopeeStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-white/20 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Store className="w-3.5 h-3.5 text-orange-400" />
                  <span>Mua Trên Shopee</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <div className="hidden sm:flex items-center gap-1.5 text-xs text-amber-300 font-semibold bg-white/10 backdrop-blur-xs px-3 py-2 rounded-xl border border-white/15">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Chính Hãng - Đồng kiểm COD</span>
                </div>
              </div>
            </div>

            {/* Authentic Dual Products Badge Card (Strictly Verified Images from shop 1477950332) */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <div className="w-28 h-28 aspect-square rounded-2xl bg-white p-2 shadow-xl border border-white/20 flex items-center justify-center">
                <img
                  src="/images/products/chaindrite-1.jpg"
                  alt="Bình Xịt Mối Chaindrite 600ml"
                  width="112"
                  height="112"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-28 h-28 aspect-square rounded-2xl bg-white p-2 shadow-xl border border-white/20 flex items-center justify-center">
                <img
                  src="/images/products/sap-ong-1.jpg"
                  alt="Sáp Ong Phục Hồi Đồ Gỗ Beewax"
                  width="112"
                  height="112"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
