import React from 'react';
import { Award } from 'lucide-react';

export const BrandPartnersSection: React.FC = () => {
  const brands = [
    { name: 'D&T VIỆT NAM', country: 'Việt Nam', desc: 'Gia dụng & Chế phẩm tiện ích' },
    { name: 'CHAINDRITE', country: 'Thái Lan', desc: 'Xịt diệt mối mọt 600ml' },
    { name: 'BEEWAX', country: 'Việt Nam', desc: 'Sáp phục hồi đồ gỗ tự nhiên' },
    { name: 'SIPIAO', country: 'Việt Nam', desc: 'Khăn giấy gấu trúc sợi tre' },
    { name: 'INOX PRO', country: 'Việt Nam', desc: 'Dụng cụ ép cam & gia dụng bếp' },
    { name: 'SHERWOOD', country: 'Thái Lan', desc: 'Tập đoàn chế phẩm sinh học' }
  ];

  return (
    <section className="py-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-[10px] font-extrabold uppercase tracking-wider mb-1.5">
            <Award className="w-3.5 h-3.5" />
            NGUỒN GỐC &amp; THƯƠNG HIỆU HỢP TÁC
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
            THƯƠNG HIỆU CHÍNH HÃNG PHÂN PHỐI TẠI TỔNG KHO D&T
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Tổng Kho D&amp;T Việt Nam cam kết 100% sản phẩm có nguồn gốc xuất xứ rõ ràng, tem mã vạch chính hãng
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-3.5 border border-slate-200 hover:border-red-400 hover:shadow-md transition-all duration-200 text-center flex flex-col items-center justify-center group"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-red-50 text-slate-700 group-hover:text-red-600 flex items-center justify-center font-black text-xs mb-2 transition-colors">
                {brand.name.slice(0, 2)}
              </div>
              <span className="font-extrabold text-xs text-slate-800 group-hover:text-red-600 transition-colors tracking-tight">
                {brand.name}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5">
                {brand.country}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
