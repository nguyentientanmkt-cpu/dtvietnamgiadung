import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQ_LIST } from '../data/products';
import { STORE_CONFIG } from '../data/config';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-10 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-[10px] font-extrabold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            HỎI ĐÁP KHÁCH HÀNG
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            CÂU HỎI THƯỜNG GẶP TẠI {STORE_CONFIG.name.toUpperCase()}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl mx-auto">
            Giải đáp mọi thắc mắc về liều lượng sử dụng bột tẩy rong rêu, bình xịt mối mọt Chaindrite, quy trình đồng kiểm khi nhận hàng.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className={`w-full text-left p-4 sm:p-4.5 flex items-center justify-between gap-3 font-extrabold text-xs sm:text-sm transition-colors cursor-pointer ${
                    isOpen ? 'bg-red-50/80 text-red-700' : 'bg-slate-50 hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs flex items-center justify-center font-bold shrink-0">
                      {idx + 1}
                    </span>
                    {(item.question || '').replace(/^\d+\.\s*/, '')}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-red-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help banner */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h5 className="font-extrabold text-sm text-slate-800">
              Bạn vẫn còn câu hỏi thắc mắc về sản phẩm?
            </h5>
            <p className="text-xs text-slate-500 mt-0.5">
              Đội ngũ kỹ thuật viên của {STORE_CONFIG.name} luôn sẵn sàng tư vấn và hướng dẫn sử dụng 24/7.
            </p>
          </div>
          <a
            href={STORE_CONFIG.phoneTel}
            className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs px-4 py-2.5 rounded-lg shadow-sm flex items-center gap-2 transition-colors shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Gọi Hotline: {STORE_CONFIG.hotline}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
