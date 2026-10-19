import React from 'react';
import { Store, PhoneCall, MessageCircle } from 'lucide-react';
import { STORE_CONFIG } from '../data/config';
import { trackConversion } from '../utils/tracking';

export const MobileStickyBar: React.FC = () => {
  return (
    <aside 
      aria-label="Thanh liên hệ nhanh"
      className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.12)] md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="grid grid-cols-4 divide-x divide-slate-100 py-1.5 px-1 max-w-lg mx-auto">
        
        {/* 1. SHOPEE */}
        <a
          href={STORE_CONFIG.shopeeStore}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversion({
            eventName: 'click_shopee',
            buttonPosition: 'mobile_sticky_shopee',
            additionalData: { store: 'Shopee D&T Việt Nam' }
          })}
          className="flex flex-col items-center justify-center py-1 text-center active:bg-orange-50 transition-colors group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-[#ee4d2d]/10 text-[#ee4d2d] flex items-center justify-center mb-0.5 group-hover:scale-110 transition-transform">
            <Store className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-black text-[#ee4d2d] leading-none uppercase">
            Shopee
          </span>
          <span className="text-[8px] text-slate-400 font-semibold mt-0.5">
            Mua lẻ
          </span>
        </a>

        {/* 2. TIKTOK */}
        <a
          href={STORE_CONFIG.tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversion({
            eventName: 'click_tiktok',
            buttonPosition: 'mobile_sticky_tiktok',
            additionalData: { store: 'TikTok Shop D&T Việt Nam' }
          })}
          className="flex flex-col items-center justify-center py-1 text-center active:bg-slate-100 transition-colors group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center mb-0.5 group-hover:scale-110 transition-transform">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.94-4.52V8.91a8.3 8.3 0 0 0 4.83 1.55v-3.77z"/>
            </svg>
          </div>
          <span className="text-[10px] font-black text-slate-900 leading-none uppercase">
            TikTok
          </span>
          <span className="text-[8px] text-slate-400 font-semibold mt-0.5">
            Video &amp; Shop
          </span>
        </a>

        {/* 3. ZALO */}
        <a
          href={STORE_CONFIG.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversion({
            eventName: 'click_zalo',
            buttonPosition: 'mobile_sticky_zalo',
            additionalData: { intent: 'Zalo Tư Vấn / Mua Sỉ' }
          })}
          className="flex flex-col items-center justify-center py-1 text-center active:bg-blue-50 transition-colors group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mb-0.5 group-hover:scale-110 transition-transform">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-black text-blue-700 leading-none uppercase">
            Zalo
          </span>
          <span className="text-[8px] text-slate-400 font-semibold mt-0.5">
            Báo giá sỉ
          </span>
        </a>

        {/* 4. GỌI NGAY */}
        <a
          href={`tel:${STORE_CONFIG.phoneRaw}`}
          onClick={() => trackConversion({
            eventName: 'click_hotline',
            buttonPosition: 'mobile_sticky_hotline',
            additionalData: { phone: STORE_CONFIG.hotline }
          })}
          className="flex flex-col items-center justify-center py-1 text-center active:bg-emerald-50 transition-colors group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-0.5 group-hover:scale-110 transition-transform animate-pulse">
            <PhoneCall className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-black text-emerald-700 leading-none uppercase">
            Gọi Ngay
          </span>
          <span className="text-[8px] text-slate-400 font-semibold mt-0.5">
            0362.495.921
          </span>
        </a>

      </div>
    </aside>
  );
};
