import React, { useState } from 'react';
import { Search, ShieldCheck, CheckCircle2, Clock, PackageCheck, AlertCircle } from 'lucide-react';

export const SunhouseWarrantySection: React.FC = () => {
  const [query, setQuery] = useState('');
  const [lookupResult, setLookupResult] = useState<any>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setHasSearched(true);
    // Dynamic realistic mock lookup result
    setLookupResult({
      code: query.trim().toUpperCase(),
      customer: 'Khách Hàng D&T',
      phone: query.includes('0') ? query.trim() : '098****321',
      productName: 'Bột Tẩy Rong Rêu D&T 500g (Combo 3 Gói)',
      purchaseDate: '15/08/2026',
      warrantyPeriod: 'Bảo hành 1 đổi 1 trong 7 ngày - Hỗ trợ kỹ thuật trọn đời',
      channel: 'Gian Hàng Shopee Chính Hãng D&T',
      status: 'HỢP LỆ - BẢO HÀNH CHÍNH HÃNG',
    });
  };

  return (
    <section id="warranty-section" className="py-16 bg-gradient-to-b from-slate-50 via-slate-100 to-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Title & Subtitle */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-black uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-red-600" />
            TRUNG TÂM BẢO HÀNH &amp; HẬU MÃI D&amp;T VIỆT NAM
          </div>

          <h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight">
            TRA CỨU BẢO HÀNH &amp; ĐƠN HÀNG ĐIỆN TỬ
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Tất cả sản phẩm D&amp;T Việt Nam phân phối trên 5 gian hàng Shopee, TikTok Shop và đại lý đều hỗ trợ kiểm tra hàng trước khi thanh toán (COD) và đổi mới nhanh chóng.
          </p>
        </div>

        {/* Search Bar matching Sunhouse rounded pill style */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="relative flex items-center bg-white rounded-full shadow-lg border-2 border-slate-200 focus-within:border-red-500 transition-all p-1.5">
            <Search className="w-5 h-5 text-slate-400 ml-3 mr-2 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Nhập số điện thoại đặt hàng hoặc mã vận đơn..."
              className="w-full text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 bg-transparent focus:outline-none py-2"
            />
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-transform active:scale-95 shadow-md shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <span>TRA CỨU</span>
            </button>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            Ví dụ: Nhập <strong>0987654321</strong> hoặc mã đơn <strong>DT-2026</strong>
          </p>
        </form>

        {/* Lookup Result Modal / Card */}
        {hasSearched && lookupResult && (
          <div className="max-w-xl mx-auto bg-white rounded-3xl p-6 border border-emerald-300 shadow-xl text-left space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <PackageCheck className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-900">
                  KẾT QUẢ TRA CỨU ĐIỆN TỬ
                </span>
              </div>
              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                {lookupResult.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Sản Phẩm:</span>
                <strong className="text-slate-800">{lookupResult.productName}</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Kênh Bán:</span>
                <strong className="text-slate-800">{lookupResult.channel}</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Chính Sách Đổi Mới:</span>
                <strong className="text-slate-800">{lookupResult.warrantyPeriod}</strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Hỗ Trợ Kỹ Thuật:</span>
                <strong className="text-emerald-700 font-mono">[BỔ SUNG HOTLINE]</strong>
              </div>
            </div>

            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Sản phẩm chuẩn tem D&amp;T Việt Nam, được phép kiểm tra trước khi nhận COD.</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
