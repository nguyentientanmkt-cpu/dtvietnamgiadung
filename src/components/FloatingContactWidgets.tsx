import React, { useState, useEffect } from 'react';
import { ArrowUp, PhoneCall, MessageCircle, Store, X } from 'lucide-react';
import { STORE_CONFIG } from '../data/config';
import { trackConversion } from '../utils/tracking';

export const FloatingContactWidgets: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside 
      aria-label="Kênh liên hệ nhanh Tổng Kho D&T Việt Nam"
      className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-center gap-2.5 select-none"
    >
      {/* NÚT CUỘN LÊN ĐẦU TRANG */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-slate-900/90 hover:bg-slate-950 text-white shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs border border-white/20"
          title="Lên đầu trang"
          aria-label="Cuộn lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* DANH SÁCH CÁC KÊNH KHI MỞ RỘNG */}
      {isOpen && (
        <div className="flex flex-col items-center gap-2.5 animate-in slide-in-from-bottom-2 duration-200">
          
          {/* SHOPEE */}
          <a
            href={STORE_CONFIG.shopeeStore}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion({
              eventName: 'click_shopee',
              buttonPosition: 'floating_widget_zalo',
              additionalData: { source: 'floating_shopee' }
            })}
            className="w-11 h-11 rounded-full bg-[#ee4d2d] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
            title="Ghé thăm Shopee D&T Việt Nam"
          >
            <Store className="w-5 h-5" />
          </a>

          {/* TIKTOK */}
          <a
            href={STORE_CONFIG.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion({
              eventName: 'click_tiktok',
              buttonPosition: 'floating_widget_zalo',
              additionalData: { source: 'floating_tiktok' }
            })}
            className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
            title="Ghé thăm TikTok Shop D&T Việt Nam"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.94-4.52V8.91a8.3 8.3 0 0 0 4.83 1.55v-3.77z"/>
            </svg>
          </a>

          {/* ZALO */}
          <a
            href={STORE_CONFIG.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion({
              eventName: 'click_zalo',
              buttonPosition: 'floating_widget_zalo'
            })}
            className="w-11 h-11 rounded-full bg-[#0068ff] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
            title="Chat Zalo Tư Vấn & Báo Giá Sỉ"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          {/* HOTLINE */}
          <a
            href={`tel:${STORE_CONFIG.phoneRaw}`}
            onClick={() => trackConversion({
              eventName: 'click_hotline',
              buttonPosition: 'floating_widget_hotline',
              additionalData: { phone: STORE_CONFIG.hotline }
            })}
            className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
            title={`Gọi Hotline ${STORE_CONFIG.hotline}`}
          >
            <PhoneCall className="w-5 h-5" />
          </a>

        </div>
      )}

      {/* NÚT SPEED DIAL CHÍNH */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl shadow-red-600/30 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer relative border-2 border-white"
        title="Liên hệ Tổng Kho D&T Việt Nam"
        aria-label="Mở kênh hỗ trợ"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative flex items-center justify-center">
            <span className="absolute w-full h-full rounded-full bg-red-400 animate-ping opacity-60"></span>
            <PhoneCall className="w-6 h-6" />
          </div>
        )}
      </button>
    </aside>
  );
};
