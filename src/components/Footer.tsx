import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  PhoneCall, 
  MapPin, 
  Clock, 
  Store, 
  CheckCircle, 
  Users, 
  ExternalLink,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { CatalogCategory } from '../types';
import { STORE_CONFIG } from '../data/config';
import { CATALOG_GROUPS } from '../utils/productFilter';
import { trackConversion } from '../utils/tracking';

interface FooterProps {
  onSelectCategory?: (category: CatalogCategory) => void;
  onScrollToWholesale?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onScrollToWholesale }) => {
  return (
    <footer id="showroom-section" className="bg-[#0f172a] text-slate-300 text-xs border-t-4 border-red-600">
      
      {/* Top Footer Banner: Hotline CSKH, Giờ làm việc & Địa chỉ kho */}
      <div className="bg-[#1e293b] py-3.5 sm:py-5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 items-stretch">
            
            {/* 1. Hotline */}
            <div className="flex items-center gap-2 p-2.5 sm:p-0 rounded-xl bg-slate-800/40 sm:bg-transparent">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block truncate">
                  TỔNG ĐÀI TƯ VẤN
                </span>
                <a 
                  href={STORE_CONFIG.phoneTel}
                  onClick={() => trackConversion({
                    eventName: 'click_hotline',
                    buttonPosition: 'footer',
                    additionalData: { phone: STORE_CONFIG.hotline }
                  })}
                  className="text-xs sm:text-base font-black text-white hover:text-amber-300 transition-colors whitespace-nowrap block mt-0.5"
                >
                  {STORE_CONFIG.hotline}
                </a>
              </div>
            </div>

            {/* 2. Giờ Hoạt Động */}
            <div className="flex items-center gap-2 p-2.5 sm:p-0 rounded-xl bg-slate-800/40 sm:bg-transparent">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block truncate">
                  GIỜ HOẠT ĐỘNG
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-white block mt-0.5 truncate">
                  {STORE_CONFIG.workingHours}
                </span>
              </div>
            </div>

            {/* 3. Địa Chỉ Kho */}
            <div className="flex items-center gap-2 p-2.5 sm:p-0 rounded-xl bg-slate-800/40 sm:bg-transparent">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block truncate">
                  ĐỊA CHỈ TỔNG KHO
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-white block mt-0.5 truncate" title={STORE_CONFIG.address}>
                  25/54 Bùi Quang Là, TP.HCM
                </span>
              </div>
            </div>

            {/* 4. Zalo Mua Sỉ */}
            <div className="flex items-center gap-2 p-2.5 sm:p-0 rounded-xl bg-slate-800/40 sm:bg-transparent">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block truncate">
                  BÁO GIÁ SỈ ZALO
                </span>
                <a 
                  href={STORE_CONFIG.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackConversion({
                    eventName: 'click_zalo',
                    buttonPosition: 'footer'
                  })}
                  className="text-xs sm:text-base font-black text-amber-300 hover:text-white transition-colors whitespace-nowrap block mt-0.5"
                >
                  {STORE_CONFIG.zalo}
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: GIỚI THIỆU D&T VIỆT NAM */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-red-600 text-white font-black text-xs rounded-full uppercase tracking-wider">
                D&amp;T VIỆT NAM
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px] sm:text-xs">
              {STORE_CONFIG.brandStory}
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={STORE_CONFIG.shopeeStore}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion({
                  eventName: 'click_shopee',
                  buttonPosition: 'footer'
                })}
                className="bg-orange-600/30 hover:bg-orange-600 text-orange-200 hover:text-white px-3 py-1 rounded-lg text-xs font-bold border border-orange-500/50 transition-colors flex items-center gap-1"
              >
                <Store className="w-3.5 h-3.5" />
                <span>Shopee D&amp;T</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <a
                href={STORE_CONFIG.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion({
                  eventName: 'click_tiktok',
                  buttonPosition: 'footer'
                })}
                className="bg-slate-800 hover:bg-slate-700 text-white px-3 py-1 rounded-lg text-xs font-bold border border-slate-700 transition-colors flex items-center gap-1"
              >
                <span>TikTok Shop</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>

          {/* Column 2: 7 DANH MỤC SẢN PHẨM */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              DANH MỤC SẢN PHẨM
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              {CATALOG_GROUPS.map((group) => (
                <li key={group.id}>
                  <button
                    onClick={() => onSelectCategory && onSelectCategory(group.id)}
                    className="hover:text-red-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{group.icon}</span>
                    <span>{group.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: CAM KẾT & CHÍNH SÁCH */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              CAM KẾT CHẤT LƯỢNG
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>100% Hàng chính hãng, nguồn gốc rõ ràng</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Giao hàng toàn quốc - Đồng kiểm trước khi nhận</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>1 đổi 1 trong 30 ngày nếu phát hiện lỗi</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Tư vấn kỹ thuật và cách sử dụng 24/7 qua Zalo</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={onScrollToWholesale}
                  className="text-amber-400 hover:underline font-black flex items-center gap-1 cursor-pointer"
                >
                  <span>Chính sách giá sỉ đại lý &amp; CTV →</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: KÊNH MUA HÀNG & PHÁP LÝ */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white border-b border-slate-800 pb-2 mb-3">
                KÊNH MUA HÀNG CHÍNH HÃNG
              </h4>
              <p className="text-slate-400 text-[11px] mb-2 leading-relaxed">
                Website giới thiệu và tra cứu thông tin sản phẩm. Khách mua lẻ được chuyển tiếp trực tiếp sang Shopee hoặc TikTok Shop:
              </p>
              <div className="flex flex-col gap-1.5">
                <span className="bg-slate-800/80 text-orange-300 px-3 py-1.5 rounded-lg border border-slate-700 font-bold flex items-center gap-1.5">
                  <Store className="w-3.5 h-3.5 text-orange-400" /> Shopee Mall: Shop D&amp;T Việt Nam
                </span>
                <span className="bg-slate-800/80 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400" /> TikTok Shop: @dtvietnam_
                </span>
              </div>
            </div>

            <div>
              <div className="bg-emerald-950/80 border border-emerald-700 text-emerald-300 px-3 py-1.5 rounded-lg flex items-center gap-2 text-[11px] font-bold">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 {STORE_CONFIG.name}. Tất cả quyền được bảo lưu.</p>
          <p className="flex items-center gap-3">
            <a href={STORE_CONFIG.facebookFanpage} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Fanpage</a>
            <span>•</span>
            <a href={STORE_CONFIG.tiktokUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">TikTok Shop</a>
            <span>•</span>
            <a href={STORE_CONFIG.shopeeStore} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Shopee Mall</a>
          </p>
        </div>

      </div>
    </footer>
  );
};
