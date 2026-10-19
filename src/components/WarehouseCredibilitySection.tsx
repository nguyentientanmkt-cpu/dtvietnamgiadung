import React, { useState } from 'react';
import { 
  Building2, 
  Truck, 
  Package, 
  ShieldCheck, 
  CheckCircle2, 
  Eye, 
  X,
  ExternalLink,
  MessageCircle,
  PhoneCall,
  Sparkles,
  Award
} from 'lucide-react';
import { STORE_CONFIG } from '../data/config';
import { trackConversion } from '../utils/tracking';

export const WarehouseCredibilitySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    src: string;
    title: string;
    desc: string;
  } | null>(null);

  const realImages = [
    {
      src: '/images/kho-container.png',
      badge: 'Nhập Khẩu Trực Tiếp',
      title: 'Xe Container Nhập Kho Định Kỳ Hàng Tuần',
      desc: 'Hàng hóa nhập khẩu chính ngạch trực tiếp về tổng kho. Xe nâng bốc dỡ pallet chuyên nghiệp, nguồn hàng luôn sẵn sàng 100.000+ sản phẩm.',
      tagColor: 'bg-red-600 text-white',
    },
    {
      src: '/images/kho-dong-hang.jpg',
      badge: 'Năng Lực Cung Ứng Lớn',
      title: 'Đóng Gói Xuất Kho 1.000+ Đơn Mỗi Ngày',
      desc: 'Hàng trăm thùng hàng chuẩn bị xuất kho gửi đại lý và khách lẻ toàn quốc mỗi ngày qua chành xe liên tỉnh và chuyển phát nhanh hỏa tốc.',
      tagColor: 'bg-amber-500 text-slate-950 font-black',
    },
    {
      src: '/images/kho-kiem-hang.jpg',
      badge: 'Kiểm Định & QC Kỹ Càng',
      title: 'Kiểm Tra Tem Mác & Dán Vận Đơn Từng Sản Phẩm',
      desc: 'Đội ngũ nhân sự kiểm tra tỉ mỉ tem bảo hành, bao bì niêm phong trước khi xuất kho, đảm bảo 100% đơn hàng giao đến nơi chuẩn nguyên vẹn.',
      tagColor: 'bg-emerald-600 text-white',
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 space-y-8 sm:space-y-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-red-50 text-red-700 border border-red-200 text-[11px] sm:text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-red-600" />
            <span>UY TÍN TỔNG KHO • HÌNH ẢNH VẬN HÀNH THỰC TẾ</span>
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            NĂNG LỰC TỔNG KHO D&amp;T VIỆT NAM
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            Người thật - Việc thật - Kho thật. 100% hình ảnh thực tế ghi lại hoạt động tiếp nhận xe container, đóng gói đơn hàng và kiểm định chất lượng hàng ngày tại Tổng Kho D&amp;T Việt Nam.
          </p>
        </div>

        {/* 3 Real Operations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {realImages.map((item, idx) => (
            <div 
              key={idx}
              className="group bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Zoom & Badge */}
              <div 
                className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 cursor-pointer"
                onClick={() => setSelectedPhoto(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

                {/* Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`text-[10px] sm:text-xs font-black px-2.5 py-1 rounded-lg shadow-sm ${item.tagColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-red-600" />
                    <span>Xem Ảnh Lớn</span>
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-bold text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Xác thực tại tổng kho</span>
                  </span>
                  <button
                    onClick={() => setSelectedPhoto(item)}
                    className="text-red-600 hover:underline flex items-center gap-0.5 cursor-pointer"
                  >
                    <span>Phóng to</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Stats Highlight Bar */}
        <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl border border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center divide-x divide-slate-800">
            
            <div className="space-y-1">
              <div className="text-xl sm:text-3xl font-black text-red-500">100.000+</div>
              <div className="text-xs font-bold text-slate-300">Sản phẩm sẵn kho</div>
              <div className="text-[10px] text-slate-500 hidden sm:block">Chế phẩm &amp; gia dụng chính hãng</div>
            </div>

            <div className="space-y-1">
              <div className="text-xl sm:text-3xl font-black text-amber-400">1.500+</div>
              <div className="text-xs font-bold text-slate-300">Đơn hàng xuất kho / ngày</div>
              <div className="text-[10px] text-slate-500 hidden sm:block">Đóng gói &amp; giao hỏa tốc 24/7</div>
            </div>

            <div className="space-y-1">
              <div className="text-xl sm:text-3xl font-black text-blue-400">500+</div>
              <div className="text-xs font-bold text-slate-300">Đại lý &amp; Cộng tác viên</div>
              <div className="text-[10px] text-slate-500 hidden sm:block">Phân phối tận xưởng toàn quốc</div>
            </div>

            <div className="space-y-1">
              <div className="text-xl sm:text-3xl font-black text-emerald-400">99.8%</div>
              <div className="text-xs font-bold text-slate-300">Khách hàng hài lòng</div>
              <div className="text-[10px] text-slate-500 hidden sm:block">Đánh giá 5★ Shopee &amp; TikTok</div>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal (Phóng to xem ảnh sắc nét) */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 flex items-center justify-center"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="max-w-3xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20 text-white relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 bg-black/60 flex items-center justify-between border-b border-white/10">
              <div className="font-bold text-xs sm:text-sm text-slate-200">
                {selectedPhoto.title}
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>

            <div className="p-4 bg-slate-900 text-xs text-slate-300 border-t border-white/10">
              <p>{selectedPhoto.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
