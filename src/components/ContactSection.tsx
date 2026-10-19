import React, { useState } from 'react';
import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  User,
  Phone,
  Package,
  ShieldCheck
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { STORE_CONFIG } from '../data/config';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    productId: PRODUCTS[0]?.id || ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact-section" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-red-50 text-red-600 border border-red-200 uppercase tracking-wide">
            <PhoneCall className="w-3.5 h-3.5" />
            TƯ VẤN KỸ THUẬT &amp; ĐẶT HÀNG NHANH
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Liên Hệ {STORE_CONFIG.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Bạn cần hướng dẫn sử dụng bột tẩy rong rêu, bình xịt diệt mối mọt Chaindrite hay xịt chuột Rat Off? Nhân viên D&amp;T Việt Nam phản hồi trong 5 phút.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Store Directory */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-7 space-y-5">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 block mb-1">
                  ĐỊA CHỈ TỔNG KHO VÀ KÊNH LIÊN HỆ
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  {STORE_CONFIG.name}
                </h3>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3 text-xs text-slate-700">
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <strong className="block text-slate-900 font-bold text-xs sm:text-sm">Địa Chỉ Kho:</strong>
                    <span className="text-slate-600 text-[11px] sm:text-xs mt-0.5 block line-clamp-2">{STORE_CONFIG.address}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <strong className="block text-slate-900 font-bold text-xs sm:text-sm">Hotline / Zalo:</strong>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-1.5 mt-0.5">
                      <a href={STORE_CONFIG.phoneTel} className="text-red-600 font-black text-xs sm:text-sm hover:underline whitespace-nowrap">
                        {STORE_CONFIG.hotline}
                      </a>
                      <a href={STORE_CONFIG.phoneTel2} className="text-red-600 font-black text-xs sm:text-sm hover:underline whitespace-nowrap">
                        {STORE_CONFIG.hotline2}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <strong className="block text-slate-900 font-bold text-xs sm:text-sm">Thời Gian Mở Cửa:</strong>
                    <span className="text-slate-600 text-[11px] sm:text-xs mt-0.5 block">{STORE_CONFIG.workingHours}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <strong className="block text-slate-900 font-bold text-xs sm:text-sm">Email Hỗ Trợ:</strong>
                    <span className="text-slate-600 text-[11px] sm:text-xs mt-0.5 block truncate">{STORE_CONFIG.email}</span>
                  </div>
                </div>
              </div>

              {/* Direct Channel Links - 2 items per row on mobile */}
              <div className="pt-2 grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                <a
                  href={STORE_CONFIG.shopeeStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-50 hover:bg-orange-100 text-orange-700 px-2.5 py-2 rounded-xl text-[11px] font-bold border border-orange-200 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>🛒 Shopee D&amp;T</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={STORE_CONFIG.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-50 hover:bg-pink-100 text-pink-700 px-2.5 py-2 rounded-xl text-[11px] font-bold border border-pink-200 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>🎵 TikTok D&amp;T</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={STORE_CONFIG.facebookFanpage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-2.5 py-2 rounded-xl text-[11px] font-bold border border-blue-200 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>🌐 Fanpage D&amp;T</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={STORE_CONFIG.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-2.5 py-2 rounded-xl text-[11px] font-bold border border-emerald-200 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>💬 Zalo Tư Vấn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean & Compact Consultation Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-lg">
            
            <div className="mb-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-red-100 text-red-700 tracking-wider mb-1.5">
                <PhoneCall className="w-3 h-3" />
                <span>LIÊN HỆ NHANH</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                Đăng Ký Tư Vấn &amp; Báo Giá Sỉ
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Để lại số điện thoại, nhân viên D&amp;T sẽ liên hệ lại tư vấn trong <strong className="text-red-600">5 phút</strong>.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2 animate-in fade-in duration-200">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-extrabold text-sm text-emerald-950">
                  Đăng Ký Thành Công!
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Cảm ơn <strong>{formData.name || 'quý khách'}</strong>! D&amp;T Việt Nam sẽ gọi lại số <strong>{formData.phone}</strong> sớm nhất.
                </p>
                <div className="pt-2 flex items-center justify-center gap-3">
                  <a
                    href={STORE_CONFIG.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-[#0068FF] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm hover:bg-blue-600 transition-colors"
                  >
                    <span>Nhắn Zalo</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', productId: PRODUCTS[0]?.id || '' });
                    }}
                    className="text-xs font-bold text-slate-600 hover:text-slate-900 underline cursor-pointer"
                  >
                    Gửi lại
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* 1. Họ và tên */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Họ và tên quý khách
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ví dụ: Anh Tuấn / Chị Lan"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* 2. Số điện thoại */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-slate-700">
                      Số điện thoại (hoặc Zalo) <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Bảo mật 100%
                    </span>
                  </div>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-red-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ví dụ: 0362 495 921 hoặc 0342 450 786"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border-2 border-red-200 text-xs text-slate-900 bg-white hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all font-bold"
                    />
                  </div>
                </div>

                {/* 3. Nhu cầu / Sản phẩm quan tâm */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Sản phẩm hoặc nhu cầu cần tư vấn
                  </label>
                  <div className="relative">
                    <Package className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.productId}
                      onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all cursor-pointer font-medium"
                    >
                      <option value="">-- Chọn sản phẩm quan tâm --</option>
                      <option value="dt-xit-con-trung-chaindrite-thai-lan-600ml--62700">🛡️ Bình Xịt Diệt Mối Mọt Chaindrite Thái Lan 600ml</option>
                      <option value="dt-bot-tay-rong-reu-500g">🌿 Bột Tẩy Rong Rêu Sinh Học D&amp;T 500g</option>
                      <option value="dt-sap-ong-beewax">✨ Sáp Ong Đánh Bóng Đồ Gỗ Beewax</option>
                      <option value="dt-vat-cam-inox">🍊 Dụng Cụ Vắt Cam Ép Chanh Inox</option>
                      <option value="dt-rat-off-spray-300ml">🐭 Chai Xịt Đuổi Chuột Rat Off Thái Lan</option>
                      <option value="dt-khan-giay-sipiao-30">📦 Khăn Giấy Ăn Gấu Trúc Sipiao (Thùng 30)</option>
                      <option value="si-dai-ly">🏢 Báo Giá Sỉ &amp; Hợp Tác Đại Lý</option>
                      <option value="khac">💬 Nhu cầu khác (Tư vấn trực tiếp)</option>
                    </select>
                  </div>
                </div>

                {/* Nút gửi gọn gàng & nổi bật */}
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 mt-2"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>GỬI YÊU CẦU TƯ VẤN MIỄN PHÍ</span>
                </button>

                <p className="text-center text-[10px] text-slate-400 pt-1">
                  🔒 Cam kết bảo mật thông tin • Tư vấn miễn phí 100%
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
