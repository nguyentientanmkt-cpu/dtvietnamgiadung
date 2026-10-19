import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Star, 
  Truck, 
  PackageCheck, 
  Users, 
  CheckCircle2, 
  Eye, 
  X, 
  ExternalLink,
  MessageCircle,
  PhoneCall,
  ShoppingBag,
  Sparkles,
  Award,
  ThumbsUp,
  MapPin,
  Clock
} from 'lucide-react';
import { STORE_CONFIG } from '../data/config';
import { trackConversion } from '../utils/tracking';

interface CustomerTrustMidSectionProps {
  onScrollToWholesale?: () => void;
}

export const CustomerTrustMidSection: React.FC<CustomerTrustMidSectionProps> = ({ onScrollToWholesale }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    src: string;
    webpSrc: string;
    title: string;
    desc: string;
    badge: string;
    stat: string;
  } | null>(null);

  // 3 Hình ảnh thực tế khách hàng vừa gửi (người thật việc thật)
  const proofCards = [
    {
      src: '/images/don-hang-xuat-kho.jpg',
      webpSrc: '/images/don-hang-xuat-kho.webp',
      badge: 'Đơn Hàng Thực Tế Mỗi Ngày',
      badgeColor: 'bg-red-600 text-white',
      title: 'Hơn 1.000+ Kiện Hàng Đóng Gói Tỉ Mỉ Gửi Khách',
      desc: 'Mỗi đơn hàng lẻ tại Shopee, TikTok Shop hay Fanpage đều được in vận đơn riêng, kiểm tra kỹ tem mác và bọc xốp chống sốc trước khi xuất kho.',
      stat: '100% kiểm tra hàng trước khi nhận',
      location: 'Kho Tổng TP.HCM',
    },
    {
      src: '/images/giao-hang-xe-tai.jpg',
      webpSrc: '/images/giao-hang-xe-tai.webp',
      badge: 'Giao Hỏa Tốc Toàn Quốc',
      badgeColor: 'bg-emerald-600 text-white',
      title: 'Xe Tải & Xe Van Vận Chuyển Hàng Đi Ngày Đêm',
      desc: 'Hàng chục chuyến xe tải và xe bưu cục tiếp nhận hàng trực tiếp tại kho D&T Việt Nam, phân phối nhanh chóng tới 63 tỉnh thành qua chành xe và bưu tá.',
      stat: 'Giao hỏa tốc 1 - 3 ngày',
      location: 'Kết nối 63 tỉnh thành',
    },
    {
      src: '/images/kien-hang-san-kho.jpg',
      webpSrc: '/images/kien-hang-san-kho.webp',
      badge: 'Nguồn Hàng Sẵn Kho',
      badgeColor: 'bg-amber-500 text-slate-950 font-black',
      title: 'Kiện Hàng Nguyên Đai Đóng Thùng Xuất Sỉ Cho Đại Lý',
      desc: 'Thùng carton tiêu chuẩn, tem vạch kiểm định rõ ràng, lưu trữ ngăn nắp sẵn sàng đáp ứng đơn sỉ từ 1 thùng tới vài trăm thùng trong ngày.',
      stat: 'Sẵn kho 100.000+ sản phẩm',
      location: 'Hàng xuất xưởng chính hãng',
    }
  ];

  // Đánh giá thực tế từ khách hàng đã mua dùng
  const reviews = [
    {
      name: 'Anh Hoàng Nam',
      location: 'Thuận An, Bình Dương',
      product: 'Bình Xịt Mối Mọt Chaindrite Thái Lan 600ml',
      rating: 5,
      date: 'Hôm qua',
      comment: 'Xịt trực tiếp vào tổ mối gỗ ở chân cửa sổ, 2 hôm sau kiểm tra là chết sạch không còn con nào. Đóng gói rất cẩn thận, có vòi kim loại luồn sâu.',
      verified: 'Đã mua trên Shopee'
    },
    {
      name: 'Chị Thu Thảo',
      location: 'Cầu Giấy, Hà Nội',
      product: 'Chai Xịt Chuột Rat Off Thái Lan 200ml',
      rating: 5,
      date: '2 ngày trước',
      comment: 'Xịt vào khoang máy xe ô tô 3 tuần nay chuột không dám bén mảng vào nữa. Đặt giao từ kho TP.HCM ra Hà Nội mất 2 ngày là nhận được, hàng chuẩn có tem.',
      verified: 'Đã mua trên TikTok Shop'
    },
    {
      name: 'Bác Trần Minh',
      location: 'Hải Châu, Đà Nẵng',
      product: 'Bột Tẩy Rong Rêu D&T 500g Độc Quyền',
      rating: 5,
      date: '3 ngày trước',
      comment: 'Sân gạch rêu trơn trượt rắc bột tưới nước lên 10 phút sau xối nước là sạch bong kin kít. Rất đáng đồng tiền, kho tư vấn nhiệt tình.',
      verified: 'Đã mua qua Fanpage'
    },
    {
      name: 'Anh Quốc Huy',
      location: 'Ninh Kiều, Cần Thơ',
      product: 'Đại Lý Nhập Sỉ Đồ Gia Dụng Tiện Ích',
      rating: 5,
      date: '5 ngày trước',
      comment: 'Nhập thử 20 thùng dụng cụ vắt cam và xịt côn trùng, hàng đi chành xe về Cần Thơ nhận ngay trong ngày. Giá sỉ chiết khấu tốt, hỗ trợ đổi trả nhanh.',
      verified: 'Đại lý sỉ D&T'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12 sm:py-16 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 space-y-10">
        
        {/* HEADER SECTION: TIÊU ĐỀ UY TÍN & ĐƯỢC TIN TƯỞNG */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 border border-red-200 text-[11px] sm:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-xs">
            <ShieldCheck className="w-4 h-4 text-red-600 animate-pulse" />
            <span>NGƯỜI THẬT • VIỆC THẬT • ĐƯỢC HÀNG NGÀN KHÁCH HÀNG TIN CHỌN</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            MỖI NGÀY HÀNG TRĂM ĐƠN HÀNG <br className="hidden sm:block" />
            <span className="text-red-600">XUẤT KHO TRAO TẬN TAY</span> KHÁCH HÀNG
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-medium">
            Không chỉ cam kết bằng lời nói, <strong className="text-slate-900 font-bold">D&amp;T Việt Nam</strong> chứng minh chất lượng và uy tín bằng hàng ngàn kiện hàng được đóng gói tỉ mỉ, kiểm tra mã vận đơn kỹ càng và xuất kho liên tục mỗi ngày đến 63 tỉnh thành.
          </p>
        </div>

        {/* 4 CHỈ SỐ UY TÍN NỔI BẬT (TRUST METRICS BAR) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs hover:border-red-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-black shrink-0 border border-red-100">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">100.000+</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">Khách Hàng Toàn Quốc</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs hover:border-red-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black shrink-0 border border-emerald-100">
                <PackageCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">1.000+ Đơn</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">Xuất Kho Mỗi Ngày</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs hover:border-red-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-black shrink-0 border border-amber-100">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400 text-amber-500" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">4.9 / 5.0 ⭐</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">Đánh Giá Tích Cực</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs hover:border-red-300 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black shrink-0 border border-blue-100">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">63 Tỉnh Thành</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">Đồng Kiểm Khi Nhận</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 HÌNH ẢNH HOẠT ĐỘNG THỰC TẾ (NGƯỜI THẬT VIỆC THẬT) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {proofCards.map((item, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-red-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Zoom & Badge */}
              <div 
                className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 cursor-pointer"
                onClick={() => setSelectedPhoto(item)}
              >
                <picture className="w-full h-full block">
                  <source srcSet={item.webpSrc} type="image/webp" />
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </picture>

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none"></div>

                {/* Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`text-[10px] sm:text-xs font-black px-2.5 py-1 rounded-lg shadow-sm ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Location indicator */}
                <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-[10px] sm:text-xs text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                  <MapPin className="w-3 h-3 text-red-400" />
                  <span>{item.location}</span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-red-600" />
                    <span>Xem ảnh rõ nét</span>
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="font-black text-sm sm:text-base text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-bold">
                  <span className="text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{item.stat}</span>
                  </span>
                  <button
                    onClick={() => setSelectedPhoto(item)}
                    className="text-red-600 hover:text-red-700 font-bold flex items-center gap-0.5 cursor-pointer"
                  >
                    <span>Phóng to</span>
                    <Eye className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PHẦN ĐÁNH GIÁ THỰC TẾ TỪ KHÁCH HÀNG (CUSTOMER TESTIMONIALS) */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-amber-600 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                <span>Khách Hàng Nói Gì Về D&amp;T Việt Nam?</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                Đánh Giá Thực Tế Từ Khách Hàng Đã Trải Nghiệm
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-semibold">Xác thực qua:</span>
              <span className="bg-orange-50 text-orange-700 border border-orange-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Shopee
              </span>
              <span className="bg-slate-100 text-slate-800 border border-slate-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                TikTok Shop
              </span>
              <span className="bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Facebook
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.map((rev, i) => (
              <div 
                key={i}
                className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 border border-slate-200/80 flex flex-col justify-between space-y-3 hover:bg-red-50/20 hover:border-red-200 transition-colors"
              >
                <div className="space-y-2">
                  {/* Rating Stars */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-amber-400">
                      {[...Array(rev.rating)].map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400">{rev.date}</span>
                  </div>

                  {/* Comment */}
                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{rev.name}</span>
                    <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      {rev.verified}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {rev.location} • {rev.product}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CALL TO ACTION BUTTONS TRỰC TIẾP */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 text-white rounded-xl sm:rounded-2xl p-4 sm:p-5">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm sm:text-base font-bold flex items-center justify-center sm:justify-start gap-1.5 text-white">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Đặt Mua Trực Tiếp Qua Các Kênh Chính Hãng D&amp;T Việt Nam</span>
              </div>
              <p className="text-xs text-slate-300">
                Khách mua lẻ click chọn sàn để nhận voucher freeship • Khách nhập sỉ liên hệ Zalo nhận chiết khấu kho
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 shrink-0">
              <a
                href={STORE_CONFIG.shopeeStore}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion({
                  eventName: 'click_shopee',
                  buttonPosition: 'trust_mid_shopee',
                  additionalData: { source: 'customer_trust_mid_section' }
                })}
                className="inline-flex items-center gap-1.5 bg-[#EE4D2D] hover:bg-[#D73211] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-md cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Mua Shopee</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <a
                href={STORE_CONFIG.tiktokStore}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion({
                  eventName: 'click_tiktok',
                  buttonPosition: 'trust_mid_tiktok',
                  additionalData: { source: 'customer_trust_mid_section' }
                })}
                className="inline-flex items-center gap-1.5 bg-black hover:bg-slate-800 text-white border border-white/20 text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-md cursor-pointer"
              >
                <span>TikTok Shop</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <a
                href={STORE_CONFIG.zaloChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion({
                  eventName: 'click_zalo',
                  buttonPosition: 'trust_mid_zalo',
                  additionalData: { source: 'customer_trust_mid_section' }
                })}
                className="inline-flex items-center gap-1.5 bg-[#0068FF] hover:bg-blue-600 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Zalo Báo Sỉ</span>
              </a>

              <a
                href={`tel:${STORE_CONFIG.hotlineRaw}`}
                onClick={() => trackConversion({
                  eventName: 'click_hotline',
                  buttonPosition: 'trust_mid_hotline',
                  additionalData: { source: 'customer_trust_mid_section' }
                })}
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-md cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{STORE_CONFIG.hotline}</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL CHO ẢNH THỰC TẾ */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center">
              <picture className="w-full h-full block">
                <source srcSet={selectedPhoto.webpSrc} type="image/webp" />
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain"
                />
              </picture>
            </div>

            {/* Modal Info */}
            <div className="p-4 sm:p-6 space-y-2 bg-slate-900 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-red-600 text-white">
                  {selectedPhoto.badge}
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  {selectedPhoto.location}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-black text-white">
                {selectedPhoto.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedPhoto.desc}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
