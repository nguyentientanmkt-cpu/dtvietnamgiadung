import React from 'react';
import { 
  Building2, 
  Percent, 
  ShieldCheck, 
  Headphones, 
  Truck, 
  MessageCircle, 
  PhoneCall, 
  CheckCircle2, 
  ArrowRight,
  Flame,
  Award
} from 'lucide-react';
import { STORE_CONFIG } from '../data/config';
import { trackConversion } from '../utils/tracking';

export const WholesaleSection: React.FC = () => {
  const handleZaloClick = () => {
    trackConversion({
      eventName: 'click_zalo',
      buttonPosition: 'wholesale_section_zalo',
      additionalData: { intent: 'Báo Giá Sỉ & Đại Lý' }
    });
  };

  const handleHotlineClick = () => {
    trackConversion({
      eventName: 'click_hotline',
      buttonPosition: 'wholesale_section_hotline',
      additionalData: { phone: STORE_CONFIG.hotline }
    });
  };

  return (
    <section id="wholesale-section" className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-12 sm:py-16 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Flame className="w-4 h-4 fill-amber-400" />
            <span>Chính Sách Nhà Phân Phối &amp; Đại Lý</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            BẠN MUỐN NHẬP SỈ?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Tổng Kho D&amp;T Việt Nam là đối tác cung cấp nguồn hàng gia dụng tiện ích, hóa phẩm sinh học &amp; chế phẩm diệt côn trùng chính hãng tận xưởng cho hơn 500+ đại lý, cửa hàng và tổng kho trên toàn quốc.
          </p>
        </div>

        {/* 4 CỘT CHÍNH SÁCH ĐẠI LÝ (YÊU CẦU 6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          
          {/* 1. Giá sỉ theo số lượng */}
          <div className="bg-slate-800/80 backdrop-blur-xs p-5 sm:p-6 rounded-2xl border border-slate-700/80 hover:border-red-500/50 transition-all space-y-3 group">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Percent className="w-6 h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-black text-white">
              Giá Sỉ Theo Số Lượng
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Chiết khấu tận xưởng không qua trung gian. Bảng giá lũy tiến linh hoạt từ đơn nhỏ (10-50 sản phẩm) đến số lượng lớn (thùng, container).
            </p>
            <div className="pt-2 text-[11px] font-bold text-amber-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Giá cạnh tranh số 1 thị trường</span>
            </div>
          </div>

          {/* 2. Chính sách dành cho đại lý */}
          <div className="bg-slate-800/80 backdrop-blur-xs p-5 sm:p-6 rounded-2xl border border-slate-700/80 hover:border-amber-500/50 transition-all space-y-3 group">
            <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-black text-white">
              Chính Sách Cho Đại Lý
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Bảo vệ thị trường khu vực, bảo hành 1 đổi 1 trong 30 ngày. Cung cấp miễn phí kho tư liệu hình ảnh, video thực tế để chạy quảng cáo.
            </p>
            <div className="pt-2 text-[11px] font-bold text-amber-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Hỗ trợ tư liệu Marketing chuẩn sàn</span>
            </div>
          </div>

          {/* 3. Hỗ trợ tư vấn sản phẩm */}
          <div className="bg-slate-800/80 backdrop-blur-xs p-5 sm:p-6 rounded-2xl border border-slate-700/80 hover:border-blue-500/50 transition-all space-y-3 group">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-black text-white">
              Hỗ Trợ Tư Vấn Sản Phẩm
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Kỹ thuật viên chuyên nghiệp hỗ trợ giải đáp thành phần, tính năng và cách xử lý côn trùng, mối mọt, rong rêu cho khách lẻ 24/7.
            </p>
            <div className="pt-2 text-[11px] font-bold text-amber-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Đào tạo kỹ năng bán lẻ cho đại lý</span>
            </div>
          </div>

          {/* 4. Giao hàng toàn quốc */}
          <div className="bg-slate-800/80 backdrop-blur-xs p-5 sm:p-6 rounded-2xl border border-slate-700/80 hover:border-emerald-500/50 transition-all space-y-3 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-black text-white">
              Giao Hàng Toàn Quốc
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Gửi hàng nhanh chóng qua chành xe liên tỉnh Bắc - Trung - Nam, xe tải chuyên dụng hoặc chuyển phát nhanh Viettel Post đến tận cửa hàng.
            </p>
            <div className="pt-2 text-[11px] font-bold text-amber-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Đóng gói thùng carton pallet chuẩn</span>
            </div>
          </div>

        </div>

        {/* 2 CTA LỚN CHO KHÁCH SỈ (YÊU CẦU 6: KHÔNG CHUYỂN SANG SÀN) */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="space-y-1.5 text-center md:text-left">
              <div className="text-amber-400 text-xs font-black uppercase tracking-wider">
                Kết Nối Trực Tiếp Bộ Phận Kinh Doanh B2B
              </div>
              <h4 className="text-lg sm:text-2xl font-black text-white">
                Nhận Báo Giá Sỉ &amp; Chính Sách Đại Lý Ngay
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Gửi tin nhắn hoặc gọi điện trực tiếp để nhận catalogue sản phẩm &amp; file báo giá chi tiết trong 5 phút.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              
              {/* NÚT ZALO BÁO GIÁ SỈ */}
              <a
                href={STORE_CONFIG.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleZaloClick}
                className="py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all cursor-pointer text-center"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>NHẬN BÁO GIÁ SỈ QUA ZALO</span>
              </a>

              {/* NÚT GỌI HOTLINE */}
              <a
                href={`tel:${STORE_CONFIG.phoneRaw}`}
                onClick={handleHotlineClick}
                className="py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer text-center"
              >
                <PhoneCall className="w-5 h-5 shrink-0" />
                <span>GỌI HOTLINE: {STORE_CONFIG.hotlineDisplay}</span>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
