import React from 'react';
import { Phone, X, ShoppingBag } from 'lucide-react';
import { STORE_CONFIG } from '../data/config';

interface StickyOfferBarProps {
  onClaimOffer?: () => void;
  onClose?: () => void;
}

export const StickyOfferBar: React.FC<StickyOfferBarProps> = ({
  onClose,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] py-2.5 sm:py-3 px-3 sm:px-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-end gap-3 sm:gap-4">
        
        {/* Nút Gọi ngay (Đen - To hơn, có hiệu ứng ánh sáng lướt qua & icon nhấp nháy) */}
        <a
          href={STORE_CONFIG.phoneTel}
          className="relative overflow-hidden bg-slate-950 hover:bg-slate-900 text-white flex-1 sm:flex-initial max-w-[210px] sm:max-w-[230px] px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full text-sm sm:text-base font-extrabold flex items-center justify-center gap-2.5 shadow-lg shadow-black/30 hover:shadow-xl hover:scale-[1.05] active:scale-95 transition-all duration-250 border border-slate-800"
          title={`Gọi ngay hotline: ${STORE_CONFIG.hotline}`}
        >
          {/* Hiệu ứng ánh sáng lướt qua (Shimmer sweep) */}
          <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none"></span>

          <Phone className="w-4.5 h-4.5 text-emerald-400 fill-emerald-400 animate-pulse shrink-0" />
          <span className="whitespace-nowrap tracking-tight">Gọi ngay</span>
        </a>

        {/* Nút Chat Zalo (Xanh Zalo - To hơn, có hiệu ứng ánh sáng lướt qua & đổ bóng phát sáng) */}
        <a
          href={STORE_CONFIG.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden bg-gradient-to-r from-[#0068FF] to-[#0084FF] hover:from-[#0058e6] hover:to-[#0074f0] text-white flex-1 sm:flex-initial max-w-[210px] sm:max-w-[230px] px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full text-sm sm:text-base font-black flex items-center justify-center shadow-lg shadow-blue-500/35 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-[1.05] active:scale-95 transition-all duration-250 cursor-pointer border border-blue-400/30"
          title={`Chat Zalo: ${STORE_CONFIG.hotline}`}
        >
          {/* Hiệu ứng ánh sáng lướt qua (Shimmer sweep) */}
          <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer pointer-events-none"></span>

          <span className="whitespace-nowrap tracking-tight">Chat Zalo</span>
        </a>

        {/* Nút đóng thanh bar */}
        {onClose && (
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors shrink-0"
            title="Đóng thanh ưu đãi"
            aria-label="Đóng thanh ưu đãi"
          >
            <X className="w-4 h-4" />
          </button>
        )}

      </div>
    </div>
  );
};
