import React from 'react';
import { 
  Building2, 
  Store, 
  ShoppingBag, 
  ShieldCheck, 
  Sparkles, 
  Truck, 
  Award, 
  Users 
} from 'lucide-react';
import { STORE_CONFIG } from '../data/config';

interface AboutSectionProps {
  onContactClick?: () => void;
  onBrowseProductsClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  const scaleStats = [
    {
      icon: Store,
      value: 'Tổng Kho TP.HCM',
      label: '25/54 Bùi Quang Là, TP.HCM',
      desc: 'Kho tổng phân phối trực tiếp hàng hóa chính hãng toàn quốc',
      color: 'text-red-600',
      bg: 'bg-red-50'
    },
    {
      icon: ShoppingBag,
      value: '50+ SKU',
      label: 'Gia Dụng & Chế Phẩm',
      desc: 'Bình xịt diệt mối Chaindrite Thái Lan, sáp ong Beewax, dụng cụ vắt cam, máy đánh trứng, khăn giấy Sipiao...',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: Award,
      value: '100% Chính Hãng',
      label: 'Đầy Đủ Tem Kiểm Định',
      desc: 'Nói không với hàng giả, hàng kém chất lượng, hiệu quả cam kết',
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    },
    {
      icon: Users,
      value: '15.000+',
      label: 'Khách Hàng Toàn Quốc',
      desc: 'Tỷ lệ đánh giá 4.95 sao trên Shopee, TikTok Shop và Facebook',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    }
  ];

  return (
    <section id="about-section" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-red-100 text-red-700 uppercase tracking-wider mb-2">
            <Building2 className="w-3.5 h-3.5" />
            VỀ CHÚNG TÔI
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {STORE_CONFIG.name.toUpperCase()}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            {STORE_CONFIG.brandStory}
          </p>
        </div>

        {/* 4 Stat Cards - 2 thông tin mỗi hàng trên Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {scaleStats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-3.5 sm:p-5 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-2 sm:mb-3 shadow-xs`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    {item.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-slate-800 mt-0.5">
                    {item.label}
                  </div>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3 Core Commitments */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-red-50 text-red-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-slate-900">100% Đúng Mô Tả &amp; Hiệu Quả</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Các sản phẩm chế phẩm sinh học, hóa phẩm vệ sinh và đồ tiện ích đều được thử nghiệm thực tế và nhận hàng ngàn đánh giá tích cực trên Shopee.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-slate-900">Giao Hàng &amp; Đồng Kiểm COD</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Khách hàng được quyền kiểm tra hàng trước khi thanh toán. Đóng gói cẩn thận có màng chống sốc và hướng dẫn sử dụng kèm theo.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-slate-900">Tư Vấn Tận Tâm 24/7</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Đội ngũ kỹ thuật hỗ trợ trực tiếp qua Hotline/Zalo {STORE_CONFIG.hotline}, hướng dẫn cách pha chế, xịt đúng vị trí để đạt hiệu quả cao nhất.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
