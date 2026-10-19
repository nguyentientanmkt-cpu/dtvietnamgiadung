import React, { useState } from 'react';
import { Award, Play, MapPin, CheckCircle2, ChevronRight, X } from 'lucide-react';

export const SunhouseBrandStats: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Red Network Card (Exact Sunhouse Vietnam Map Style) */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 via-red-600 to-rose-700 text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl min-h-[340px]">
            {/* Background Vietnam Map Dots Graphic */}
            <div className="absolute right-0 bottom-0 w-44 h-56 opacity-20 pointer-events-none flex items-center justify-center">
              <svg viewBox="0 0 100 200" className="w-full h-full stroke-white fill-none stroke-[2]">
                <path d="M40,20 Q60,35 45,60 Q30,85 50,110 Q70,135 40,165 Q35,180 50,195" />
                <circle cx="45" cy="35" r="4" fill="white" />
                <circle cx="50" cy="110" r="4" fill="white" />
                <circle cx="40" cy="165" r="4" fill="white" />
              </svg>
            </div>

            <div className="space-y-2 relative z-10">
              <p className="text-xs uppercase tracking-widest font-extrabold text-red-100">
                MẠNG LƯỚI PHỤC VỤ TRÊN:
              </p>
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                60.000++
              </div>
              <p className="text-xs sm:text-sm font-semibold text-red-100 max-w-xs leading-relaxed">
                Khách hàng tin dùng khắp 63 tỉnh thành qua hệ thống 5 gian hàng Shopee, TikTok Shop và 5 Fanpage.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <a
                href="#channels-section"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-red-600 hover:bg-red-50 text-xs font-black uppercase tracking-wider transition-transform active:scale-95 shadow-md"
              >
                <span>XEM THÊM HỆ THỐNG</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Deep Teal Service / Warranty Card with Golden Rosette Medal */}
          <div className="relative overflow-hidden rounded-3xl bg-[#004e57] text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl min-h-[340px] border border-[#00383f]">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest font-extrabold text-cyan-200">
                  DỊCH VỤ
                </p>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                  HẬU MÃI HÀNG ĐẦU
                </h3>
              </div>

              {/* Golden Rosette Medal Icon */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-amber-300 to-yellow-200 p-0.5 shadow-lg flex items-center justify-center shrink-0">
                <div className="w-full h-full rounded-full bg-[#004e57] flex items-center justify-center">
                  <Award className="w-7 h-7 text-amber-400" />
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-cyan-800/80">
              <div className="flex items-center gap-2 text-xs text-cyan-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Quy mô hơn 60 SKU gia dụng &amp; diệt côn trùng</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-cyan-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Kiểm tra hàng trước khi nhận tiền (COD)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-cyan-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Đổi mới trong 7 ngày nếu lỗi đóng gói / vỡ nứt</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-cyan-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Doanh thu trung bình ổn định ~200 triệu VNĐ/tháng</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#warranty-section"
                className="text-xs font-black text-amber-300 hover:text-amber-200 uppercase tracking-wider flex items-center gap-1"
              >
                Tra Cứu Bảo Hành Điện Tử <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: Video Preview Card with Circular Red Play Button */}
          <div 
            onClick={() => setShowVideoModal(true)}
            className="group relative overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl min-h-[340px] cursor-pointer flex flex-col justify-end p-6 border border-slate-800"
          >
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80"
              alt="Video D&T Việt Nam"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Circular Red Play Button in center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
              <Play className="w-7 h-7 fill-white translate-x-0.5" />
            </div>

            {/* Title */}
            <div className="relative z-10 space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider bg-red-600 text-white px-2.5 py-0.5 rounded shadow">
                VIDEO GIỚI THIỆU
              </span>
              <h4 className="text-base sm:text-lg font-black text-white tracking-tight">
                Tự Hào Chất Lượng Cho Ngôi Nhà Việt
              </h4>
              <p className="text-xs text-slate-300">
                Quy trình kiểm định và đóng gói đơn hàng tại kho D&amp;T Việt Nam
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl p-6 text-white space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black uppercase text-red-500">
                VIDEO GIỚI THIỆU SẢN PHẨM &amp; KHO VẬN D&amp;T VIỆT NAM
              </h3>
              <button
                onClick={() => setShowVideoModal(false)}
                className="p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video rounded-2xl bg-black overflow-hidden flex flex-col items-center justify-center text-center p-6 space-y-3 border border-slate-800">
              <div className="w-16 h-16 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center">
                <Play className="w-8 h-8 fill-red-500 translate-x-0.5" />
              </div>
              <p className="text-sm font-bold text-slate-200">
                Đang phát video thực tế: Thử nghiệm bột tẩy rong rêu D&amp;T trên sân gạch nung 15m²
              </p>
              <p className="text-xs text-slate-400 max-w-md">
                Hiệu quả làm sạch hoàn toàn rêu xanh mà không làm ăn mòn lớp men gạch. Đổi mới miễn phí trong 7 ngày nếu không sạch như cam kết.
              </p>
            </div>

            <div className="text-right">
              <button
                onClick={() => setShowVideoModal(false)}
                className="px-5 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-bold"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
