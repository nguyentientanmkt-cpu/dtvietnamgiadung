import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  CheckCircle2, 
  Headphones,
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const guarantees = [
    {
      icon: ShieldCheck,
      title: '100% Chính Hãng D&T',
      desc: 'Tem niêm phong chính hãng, cam kết đền gấp 10 lần nếu phát hiện hàng giả',
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      border: 'border-rose-100',
    },
    {
      icon: CheckCircle2,
      title: 'Đồng Kiểm Khi Nhận Hàng',
      desc: 'Kiểm tra hàng thoải mái, đúng sản phẩm chuẩn mới nhận',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100',
    },
    {
      icon: RotateCcw,
      title: '1 Đổi 1 Trong 30 Ngày',
      desc: 'Lỗi kỹ thuật hoặc vỡ bể đổi mới 100% tận nhà hoàn toàn miễn phí',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-100',
    },
    {
      icon: Truck,
      title: 'Giao Nhanh Toàn Quốc',
      desc: 'Đóng gói thùng pallet cẩn thận, chuyển phát nhanh hỏa tốc toàn quốc',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-100',
    },
    {
      icon: Headphones,
      title: 'Tư Vấn Kỹ Thuật 24/7',
      desc: 'Hướng dẫn diệt mối, chuột, côn trùng và cách dùng sản phẩm qua Hotline/Zalo',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-100',
    },
  ];

  // Trên Mobile: mặc định chỉ hiện 2 mục đầu tiên, khi bấm mở sẽ hiện đủ 5 mục
  const displayedMobileGuarantees = isExpanded ? guarantees : guarantees.slice(0, 2);

  return (
    <section className="bg-slate-50/80 border-b border-slate-200 py-3 sm:py-4 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* DESKTOP VIEW: 5 cột ngang gọn gàng trên 1 dòng duy nhất */}
        <div className="hidden lg:grid grid-cols-5 gap-3">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200/90 hover:border-red-300 hover:shadow-xs transition-all bg-white group"
              >
                <div className={`p-2 rounded-lg ${item.bg} ${item.color} shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <h4 className="font-extrabold text-xs text-slate-900 group-hover:text-red-600 transition-colors leading-tight truncate">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 leading-snug line-clamp-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE & TABLET VIEW: Thu ngắn gọn 2 mục, có nút nhấn mở rộng nếu muốn xem thêm */}
        <div className="lg:hidden space-y-2.5">
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
            {displayedMobileGuarantees.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200 bg-white shadow-2xs"
                >
                  <div className={`p-2 rounded-lg ${item.bg} ${item.color} shrink-0`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <h4 className="font-bold text-xs text-slate-900 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 leading-snug line-clamp-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nút bấm mở rộng / thu gọn */}
          <div className="text-center pt-0.5">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 px-3 py-1 bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 rounded-full border border-slate-200 text-[11px] font-bold shadow-2xs transition-colors cursor-pointer"
            >
              <span>{isExpanded ? 'Thu gọn cam kết' : `Xem thêm quyền lợi D&T (${guarantees.length - 2})`}</span>
              {isExpanded ? (
                <ChevronUp className="w-3.5 h-3.5 text-slate-500" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
