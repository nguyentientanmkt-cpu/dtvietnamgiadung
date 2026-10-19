import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadge?: boolean;
  showText?: boolean;
  className?: string;
  theme?: 'dark' | 'light' | 'sunhouse';
  variant?: 'capsule' | 'monogram';
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showBadge = true,
  showText = true,
  className = '',
  theme = 'sunhouse',
  variant = 'capsule',
}) => {
  // Sunhouse-style iconic red stadium capsule logo
  if (variant === 'capsule') {
    const capsulePaddings = {
      sm: 'px-3.5 py-1 text-xs',
      md: 'px-5 py-1.5 text-sm',
      lg: 'px-6 py-2 text-base',
      xl: 'px-8 py-2.5 text-lg',
    };

    return (
      <div className={`flex items-center select-none ${className}`}>
        <div
          className={`relative rounded-full bg-gradient-to-r from-red-600 via-red-600 to-rose-700 text-white font-black tracking-wider uppercase shadow-md border-2 border-white/90 flex items-center justify-center gap-1.5 transition-transform hover:scale-105 ${capsulePaddings[size]}`}
          style={{ boxShadow: '0 4px 14px rgba(220, 38, 38, 0.45)' }}
        >
          <span className="tracking-widest drop-shadow-xs font-black">
            D&amp;T VIỆT NAM
          </span>
          <span className="text-[9px] font-bold opacity-90 -mt-1">®</span>
        </div>
      </div>
    );
  }

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const isLight = theme === 'light';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Monogram recreation */}
      <div className={`relative flex flex-col items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100" height="100" rx="20" fill={isLight ? 'transparent' : '#dc2626'} />
          <path
            d="M24 24 H48 C68 24 78 36 78 52 C78 68 68 80 48 80 H24 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <path
            d="M36 24 V70 H48 C60 70 66 62 66 52 C66 43 62 38 52 35"
            fill="none"
            stroke="#ffffff"
            strokeWidth="7"
            strokeLinecap="square"
          />
          <path
            d="M24 24 H74"
            stroke="#ffffff"
            strokeWidth="9"
            strokeLinecap="square"
          />
          <path
            d="M48 24 V64"
            stroke="#ffffff"
            strokeWidth="9"
            strokeLinecap="square"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className={`font-black tracking-tight leading-none ${size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl'} text-white`}>
              D&amp;T
            </span>
            {showBadge && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-red-600 text-white uppercase shadow-xs">
                Chính Hãng
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-[0.25em] font-bold text-slate-300 uppercase mt-0.5">
            VIET NAM
          </span>
        </div>
      )}
    </div>
  );
};

export const OfficialStoreBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`inline-flex items-center rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white px-3.5 py-1 shadow-sm border border-red-400/40 ${className}`}
    >
      <span className="font-black text-xs tracking-wider pr-2 border-r border-white/30">
        D&amp;T
      </span>
      <span className="pl-2 text-[10px] font-bold tracking-wide uppercase">
        CỬA HÀNG CHÍNH HÃNG
      </span>
    </div>
  );
};
