import React, { useState } from 'react';
import { AlertTriangle, ShieldCheck, ChevronRight, Calendar, Sparkles } from 'lucide-react';

export const SunhouseNewsAndAdvice: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const adviceList = [
    {
      id: 'adv-1',
      title: 'Những câu hỏi thường gặp khi sử dụng xịt đuổi chuột khoang máy ô tô',
      date: '16.08.2026',
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=300&q=80',
      snippet: 'Nên xịt vào các vị trí dây điện, hốc gió điều hòa và đường ống dẫn xăng sau khi rửa sạch khoang máy để lưu mùi tinh dầu cay nồng hiệu quả nhất.',
    },
    {
      id: 'adv-2',
      title: 'Định mức pha bột tẩy rong rêu D&T 500g cho sân gạch và tường xi măng',
      date: '15.06.2026',
      image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=300&q=80',
      snippet: 'Mỗi gói 500g hòa tan với 5–10 lít nước ấm, tưới đều lên bề mặt ẩm ướt 10-15m², chờ 15 phút rêu tự bong tróc mà không cần cọ chà tốn sức.',
    },
    {
      id: 'adv-3',
      title: 'Phân biệt bình xịt Chaindrite Thái Lan chính ngạch và hàng trôi nổi',
      date: '04.05.2026',
      image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=300&q=80',
      snippet: 'Bình xịt Chaindrite chuẩn có vòi kim loại gắn thân bình, van xịt áp lực mạnh, chữ in sắc nét trên vỏ thép mạ kẽm không rỉ.',
    },
  ];

  return (
    <section className="py-14 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: TIN TỨC - SỰ KIỆN D&T VIỆT NAM (2 Cards) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-red-600">
                TIN TỨC - SỰ KIỆN D&amp;T VIỆT NAM
              </h2>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Cảnh Báo Giả Mạo (Exact Sunhouse style) */}
              <div 
                onClick={() => setSelectedArticle('fraud-alert')}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-red-300 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
                      alt="Cảnh báo giả mạo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded shadow-md flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      <span>THÔNG BÁO QUAN TRỌNG</span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-red-600 transition-colors uppercase line-clamp-2">
                      CẢNH BÁO GIẢ MẠO THƯƠNG HIỆU D&amp;T VIỆT NAM NHẰM LỪA ĐẢO TRỤC LỢI
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      Kính gửi Quý Khách hàng. Thời gian gần đây diễn ra tình trạng có các cá nhân/tổ chức MẠO DANH đại diện D&amp;T Việt Nam trên mạng xã hội để giao hàng kém chất lượng. D&amp;T khuyến cáo quý khách luôn yêu cầu ĐỒNG KIỂM trước khi thanh toán tiền mặt.
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> 18.09.2026
                  </span>
                  <span className="text-red-600 font-bold group-hover:underline flex items-center">
                    Chi tiết <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card 2: Hỗ Trợ Đổi Mới & Bảo Hành */}
              <div 
                onClick={() => setSelectedArticle('support-campaign')}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-red-300 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80"
                      alt="Hỗ trợ đổi mới mùa ẩm mốc"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#005b66] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded shadow-md flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-amber-300" />
                      <span>CAM KẾT CHÍNH HÃNG</span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-red-600 transition-colors uppercase line-clamp-2">
                      D&amp;T VIỆT NAM HỖ TRỢ ĐỔI MỚI &amp; TƯ VẤN ĐỊNH MỨC XỬ LÝ ẨM MỐC TOÀN DIỆN
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      Trước tình hình thời tiết ẩm mốc cao điểm, D&amp;T kích hoạt chương trình tư vấn liều lượng bột tẩy rêu và hỗ trợ 1 đổi 1 nhanh chóng trong 7 ngày nếu bao bì bị rò rỉ khi vận chuyển.
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> 10.09.2026
                  </span>
                  <span className="text-red-600 font-bold group-hover:underline flex items-center">
                    Chi tiết <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: TƯ VẤN SẢN PHẨM */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-red-600">
              TƯ VẤN SẢN PHẨM
            </h2>

            <div className="space-y-4">
              {adviceList.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedArticle(item.id)}
                  className="bg-white rounded-2xl p-3 border border-slate-200 hover:border-red-300 transition-all cursor-pointer group flex items-start gap-3.5 shadow-2xs hover:shadow-xs"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="space-y-1 flex-1 min-w-0">
                    <h3 className="text-xs font-bold text-slate-800 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Advisory CTA */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white space-y-2 shadow-md">
              <div className="flex items-center gap-2 font-bold text-xs">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Cần tư vấn chọn sản phẩm phù hợp?</span>
              </div>
              <p className="text-[11px] text-red-100">
                Gửi hình ảnh diện tích sân vườn hoặc vị trí chuột phá hoại để kỹ thuật viên D&amp;T tư vấn miễn phí.
              </p>
              <a
                href="#contact-section"
                className="inline-block mt-1 px-3.5 py-1.5 rounded-xl bg-white text-red-600 text-xs font-black hover:bg-red-50 transition-colors"
              >
                Gửi Yêu Cầu Ngay →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
