import React, { useState } from 'react';
import { ProductCategory } from '../types';

interface SunhouseCategoryStripProps {
  onSelectCategory: (category: ProductCategory) => void;
  selectedCategory: ProductCategory;
}

export const SunhouseCategoryStrip: React.FC<SunhouseCategoryStripProps> = ({
  onSelectCategory,
  selectedCategory,
}) => {
  const [activeDot, setActiveDot] = useState(0);

  const categoryCards = [
    {
      id: 'gia-dung-tien-ich' as ProductCategory,
      label: 'ĐỒ GIA DỤNG',
      sub: 'Lọc rác, móc dán, khay Inox',
      image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'xu-ly-rong-reu' as ProductCategory,
      label: 'XỬ LÝ RONG RÊU',
      sub: 'Bột tẩy rêu D&T 500g',
      image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'diet-con-trung' as ProductCategory,
      label: 'DIỆT CÔN TRÙNG',
      sub: 'Chaindrite, King Bio, Hantox',
      image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'duoi-chuot' as ProductCategory,
      label: 'ĐUỔI CHUỘT THÁI',
      sub: 'Rat Off 300ml, Viên đuổi chuột',
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 've-sinh-tay-rua' as ProductCategory,
      label: 'VỆ SINH – TẨY RỬA',
      sub: 'T-LEX 500ml, Suzy Wood',
      image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'all' as ProductCategory,
      label: 'HÀNG NỘI ĐỊA THÁI',
      sub: 'Bình xịt chuyên dụng nhập khẩu',
      image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'gia-dung-tien-ich' as ProductCategory,
      label: 'TIỆN ÍCH GIA ĐÌNH',
      sub: 'Khay inox, đầu lọc nước',
      image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=300&q=80',
    }
  ];

  return (
    <div className="relative bg-[#cc181e] text-white pt-10 pb-12 overflow-hidden shadow-xl border-y-4 border-[#b7151a]">
      {/* Top Subtle Arc or Flare */}
      <div 
        className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        {/* Headline: "CHÀO MỪNG ĐẾN VỚI SUNHOUSE" style */}
        <div className="space-y-1">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-extrabold text-red-100 drop-shadow-sm">
            CHÀO MỪNG ĐẾN VỚI
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-wider uppercase text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
            D&amp;T VIỆT NAM®
          </h2>
        </div>

        {/* Carousel of Product Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 max-w-7xl mx-auto">
          {categoryCards.map((cat, idx) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <div
                key={idx}
                onClick={() => {
                  onSelectCategory(cat.id);
                  const el = document.getElementById('products-section');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`group flex flex-col items-center justify-between p-3 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-white/25 ring-2 ring-white scale-105 shadow-xl'
                    : 'bg-white/10 hover:bg-white/20 hover:scale-105'
                }`}
              >
                {/* Product thumbnail inside circle with soft glow */}
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white p-1.5 shadow-md group-hover:shadow-lg transition-transform duration-300 flex items-center justify-center overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Text Label */}
                <div className="mt-3 text-center space-y-0.5">
                  <h3 className="text-xs font-black uppercase tracking-wider text-white line-clamp-1 group-hover:text-amber-300 transition-colors">
                    {cat.label}
                  </h3>
                  <p className="text-[10px] text-red-100 font-medium line-clamp-1 opacity-90">
                    {cat.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => setActiveDot(dot)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeDot === dot ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Category page ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
