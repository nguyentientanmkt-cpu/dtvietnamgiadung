import React from 'react';
import { 
  Store, 
  PhoneCall, 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  ExternalLink,
  ChevronRight,
  PackageCheck,
  CheckCircle2
} from 'lucide-react';
import { STORE_CONFIG } from '../data/config';
import { trackConversion } from '../utils/tracking';

interface HeroBannerProps {
  onScrollToWholesale?: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onScrollToWholesale }) => {
  return (
    <section className="bg-white py-4 sm:py-6 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 space-y-4 sm:space-y-6">
        
        {/* 
          1. BRAND BANNER: THIẾT KẾ MỚI HÀI HÒA & CHUYÊN NGHIỆP
          - Tiêu đề thương hiệu và cam kết được đặt ở thanh Header riêng biệt, sang trọng.
          - Hình ảnh kho hàng hiển thị TRỌN VẸN 100%, sáng rõ, không có bất kỳ hộp đen nào che khuất các dãy kệ hàng!
        */}
        <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-800 text-white">
          
          {/* Top Brand Info Strip - Đầy đủ thông tin, chữ to rõ, không che ảnh */}
          <div className="p-4 sm:p-6 md:p-7 pb-3 sm:pb-4 flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-white/10">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-red-600 text-white text-[10px] sm:text-xs font-black uppercase px-2.5 sm:px-3 py-1 rounded-full shadow-md tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span>Tổng Kho Phân Phối Trực Tiếp</span>
              </div>

              <h1 className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                TỔNG KHO GIA DỤNG <span className="text-red-500 drop-shadow-sm">D&amp;T VIỆT NAM</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-slate-300 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
                <span>Hàng chính hãng - Giao hàng toàn quốc</span>
              </p>
            </div>

            {/* Quick Guarantees Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-slate-200">
              <span className="bg-white/10 px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1 font-semibold">
                <Truck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Được kiểm tra hàng trước khi nhận</span>
              </span>
              <span className="bg-white/10 px-2.5 py-1 rounded-lg border border-white/10 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>1 đổi 1 trong 30 ngày nếu lỗi</span>
              </span>
            </div>
          </div>

          {/* 
            KHUNG ẢNH KHO TOÀN CẢNH (PANORAMIC WAREHOUSE SHOWCASE)
            - 100% HIỂN THỊ RÕ RÀNG, SÁNG SỦA, SẮC NÉT 2K CHUẨN HD
          */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[18/9] md:aspect-[21/10] max-h-[500px] overflow-hidden group bg-slate-950">
            <picture className="w-full h-full block">
              <source srcSet="/images/kho-dt-vietnam.webp" type="image/webp" />
              <source srcSet="/images/kho-dt-vietnam.jpg" type="image/jpeg" />
              <img
                src="/images/kho-dt-vietnam.jpg"
                alt="Tổng Kho Gia Dụng D&T Việt Nam - Hàng Chính Hãng Sẵn Kho"
                width="2560"
                height="1429"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </picture>

            {/* Subtle bottom shadow to anchor the photo */}
            <div className="absolute inset-x-0 bottom-0 h-10 sm:h-14 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none"></div>

            {/* Floating Live Badges: Nhỏ gọn ở 2 góc dưới, không che mất khung kho */}
            <div className="absolute bottom-2.5 left-2.5 sm:bottom-3.5 sm:left-4 flex items-center gap-2">
              <span className="bg-black/75 backdrop-blur-md text-white border border-white/20 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span>Kho Tổng: 25/54 Bùi Quang Là, TP.HCM</span>
              </span>
            </div>

            <div className="absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-4 flex items-center gap-2">
              <span className="bg-red-600/90 backdrop-blur-md text-white border border-white/20 text-[10px] sm:text-xs font-black px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                <PackageCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Sẵn kho 100.000+ sản phẩm</span>
              </span>
            </div>

          </div>

        </div>

        {/* 2. BA NÚT CTA KÊNH BÁN HÀNG LỚN (SHOPEE, TIKTOK SHOP, FANPAGE FACEBOOK) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          
          {/* NÚT SHOPEE */}
          <a
            href={STORE_CONFIG.shopeeStore}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion({
              eventName: 'click_shopee',
              buttonPosition: 'hero_shopee',
              additionalData: { store: 'Shopee D&T Việt Nam' }
            })}
            className="group relative overflow-hidden rounded-2xl bg-[#ee4d2d] hover:bg-[#d73211] text-white p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-between border-2 border-[#ee4d2d] cursor-pointer active:scale-[0.99]"
          >
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Store className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-orange-200 block">
                  Gian Hàng Chính Hãng
                </span>
                <span className="text-base sm:text-xl font-black text-white block leading-tight tracking-tight">
                  MUA TRÊN SHOPEE
                </span>
                <span className="text-xs sm:text-sm text-orange-100 font-medium block mt-0.5">
                  Xem sản phẩm &amp; ưu đãi miễn phí ship
                </span>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
              <ExternalLink className="w-4 h-4 text-white" />
            </div>
          </a>

          {/* NÚT TIKTOK SHOP */}
          <a
            href={STORE_CONFIG.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion({
              eventName: 'click_tiktok',
              buttonPosition: 'hero_tiktok',
              additionalData: { store: 'TikTok Shop D&T Việt Nam' }
            })}
            className="group relative overflow-hidden rounded-2xl bg-black hover:bg-slate-900 text-white p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-between border-2 border-slate-800 cursor-pointer active:scale-[0.99]"
          >
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-white" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.94-4.52V8.91a8.3 8.3 0 0 0 4.83 1.55v-3.77z"/>
                </svg>
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-rose-300 block">
                  Kênh Video &amp; Livestream
                </span>
                <span className="text-base sm:text-xl font-black text-white block leading-tight tracking-tight">
                  MUA TRÊN TIKTOK SHOP
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-medium block mt-0.5">
                  Xem video thực tế &amp; mua hàng nhanh
                </span>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
              <ExternalLink className="w-4 h-4 text-white" />
            </div>
          </a>

          {/* NÚT FANPAGE FACEBOOK */}
          <a
            href={STORE_CONFIG.facebookFanpage}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion({
              eventName: 'click_facebook',
              buttonPosition: 'hero_facebook',
              additionalData: { store: 'Fanpage Facebook D&T Việt Nam' }
            })}
            className="group relative overflow-hidden rounded-2xl bg-[#1877f2] hover:bg-[#0c63d4] text-white p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-between border-2 border-[#1877f2] cursor-pointer active:scale-[0.99] sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-200 block">
                  Kênh Tư Vấn &amp; Tin Tức
                </span>
                <span className="text-base sm:text-xl font-black text-white block leading-tight tracking-tight">
                  FANPAGE FACEBOOK
                </span>
                <span className="text-xs sm:text-sm text-blue-100 font-medium block mt-0.5">
                  Nhắn tin tư vấn &amp; cập nhật ưu đãi
                </span>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
              <ExternalLink className="w-4 h-4 text-white" />
            </div>
          </a>

        </div>

        {/* 3. BÊN DƯỚI: MUA SỈ / ĐẠI LÝ & HOTLINE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
          
          {/* MUA SỈ / ĐẠI LÝ (ZALO) */}
          <a
            href={STORE_CONFIG.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion({
              eventName: 'click_zalo',
              buttonPosition: 'hero_wholesale_zalo',
              additionalData: { target: 'Zalo Báo Giá Sỉ' }
            })}
            className="flex items-center justify-between p-3 sm:p-3.5 bg-blue-50/70 hover:bg-blue-100/80 border border-blue-200 rounded-xl transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-black text-blue-900 flex items-center gap-1.5">
                  <span>MUA SỈ / ĐẠI LÝ</span>
                  <span className="bg-blue-200 text-blue-800 text-[10px] font-bold px-1.5 py-0.2 rounded">
                    Giá kho
                  </span>
                </div>
                <div className="text-[11px] sm:text-xs text-blue-700">
                  Nhận báo giá số lượng lớn qua Zalo
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform shrink-0" />
          </a>

          {/* HOTLINE GỌI TRỰC TIẾP */}
          <a
            href={`tel:${STORE_CONFIG.phoneRaw}`}
            onClick={() => trackConversion({
              eventName: 'click_hotline',
              buttonPosition: 'hero_hotline',
              additionalData: { phone: STORE_CONFIG.hotline }
            })}
            className="flex items-center justify-between p-3 sm:p-3.5 bg-emerald-50/70 hover:bg-emerald-100/80 border border-emerald-200 rounded-xl transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-black text-emerald-900 flex items-center gap-1.5 flex-wrap">
                  <span>HOTLINE: {STORE_CONFIG.hotline} - {STORE_CONFIG.hotline2}</span>
                  <span className="bg-emerald-200 text-emerald-800 text-[10px] font-bold px-1.5 py-0.2 rounded">
                    24/7
                  </span>
                </div>
                <div className="text-[11px] sm:text-xs text-emerald-700">
                  Gọi tư vấn trực tiếp kỹ thuật &amp; sản phẩm
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform shrink-0" />
          </a>

        </div>

      </div>
    </section>
  );
};
