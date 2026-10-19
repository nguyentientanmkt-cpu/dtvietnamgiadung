import React from 'react';
import { FileText, Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { HOME_TIPS } from '../data/products';

export const HomeNewsSection: React.FC = () => {
  return (
    <section id="news-section" className="py-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header styled identically to shopcontrung.com.vn */}
        <div className="flex items-end justify-between mb-6 pb-2.5 border-b-2 border-red-600">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-6 bg-red-600 rounded-xs"></div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-tight text-slate-900 flex items-center gap-2">
                CẨM NANG &amp; KINH NGHIỆM GIA ĐÌNH
                <BookOpen className="w-4 h-4 text-red-600" />
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Mẹo hay sử dụng đồ gia dụng, công thức nấu nướng &amp; hướng dẫn bảo quản chuẩn chuyên gia
              </p>
            </div>
          </div>

          <a
            href="#news-section"
            className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 transition-colors group"
          >
            <span>Xem thêm bài viết</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4 Article Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOME_TIPS.map((tip) => (
            <article
              key={tip.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-red-300 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail - Tỉ lệ 4:3 chuẩn tạp chí, hình ảnh không bị cắt xén tiêu đề */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-slate-900/85 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-xs">
                    Mẹo Hay D&amp;T
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {tip.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 line-clamp-1">
                      <User className="w-3 h-3" />
                      {tip.author}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                    {tip.title}
                  </h4>

                  <p className="mt-2 text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>

              {/* Read more footer */}
              <div className="p-4 pt-0">
                <a
                  href="#news-section"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  <span>Đọc tiếp</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
