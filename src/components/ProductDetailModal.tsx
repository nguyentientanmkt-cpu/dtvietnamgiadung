import React, { useState } from 'react';
import { 
  X, 
  Star, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Store, 
  PhoneCall, 
  MessageCircle, 
  ExternalLink,
  CheckCircle2,
  FileText,
  HelpCircle,
  Users,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Product } from '../types';
import { formatVND } from '../data/products';
import { STORE_CONFIG } from '../data/config';
import { trackConversion } from '../utils/tracking';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  allProducts?: Product[];
  onSelectProduct?: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  allProducts = [],
  onSelectProduct,
}) => {
  if (!isOpen || !product) return null;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Danh sách hình ảnh
  const images = product.images && product.images.length > 0 
    ? product.images 
    : [product.thumbnail];

  const currentImage = images[selectedImageIndex] || product.thumbnail;

  // Sàn bán lẻ
  const shopeeUrl = product.shopeeUrl || STORE_CONFIG.shopeeStore;
  const tiktokUrl = product.tiktokUrl || STORE_CONFIG.tiktokUrl;

  const handleShopeeClick = () => {
    trackConversion({
      eventName: 'click_shopee',
      productName: product.name,
      productId: product.id,
      category: product.category,
      buttonPosition: 'product_detail_shopee',
      additionalData: { url: shopeeUrl }
    });
  };

  const handleTikTokClick = () => {
    trackConversion({
      eventName: 'click_tiktok',
      productName: product.name,
      productId: product.id,
      category: product.category,
      buttonPosition: 'product_detail_tiktok',
      additionalData: { url: tiktokUrl }
    });
  };

  const handleZaloClick = () => {
    trackConversion({
      eventName: 'click_zalo',
      productName: product.name,
      productId: product.id,
      category: product.category,
      buttonPosition: 'product_detail_zalo',
      additionalData: { target: 'Zalo Tư Vấn / Mua Sỉ' }
    });
  };

  const handleHotlineClick = () => {
    trackConversion({
      eventName: 'click_hotline',
      productName: product.name,
      productId: product.id,
      category: product.category,
      buttonPosition: 'product_detail_hotline',
      additionalData: { phone: STORE_CONFIG.hotline }
    });
  };

  // Đối tượng phù hợp (suy luận thông minh nếu dữ liệu chưa có)
  const targetAudience = [
    'Hộ gia đình có nhu cầu chăm sóc, vệ sinh nhà cửa và bảo vệ môi trường sống',
    'Các cơ sở kinh doanh, nhà hàng, quán ăn, kho xưởng cần giải pháp diệt côn trùng & chuột hiệu quả',
    'Chủ xe ô tô cần bảo vệ khoang máy, chống chuột cắn phá dây điện',
    'Khách hàng mua sỉ, đại lý phân phối gia dụng & chế phẩm sinh học trên toàn quốc',
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-2 sm:p-4 text-center">
        
        {/* Modal Container */}
        <div 
          className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden text-left relative transform transition-all flex flex-col max-h-[92vh]"
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Header Bar */}
          <div className="p-3 sm:p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="bg-red-600 text-white text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full uppercase">
                D&amp;T Việt Nam
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-700 hidden sm:inline">
                Thông Tin Chi Tiết Sản Phẩm Chính Hãng
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Đóng cửa sổ"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* CỘT TRÁI: HÌNH ẢNH RÕ NÉT & GALLERY */}
              <div className="space-y-3">
                {/* Main Large Image */}
                <div className="relative aspect-square w-full bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden p-4 flex items-center justify-center">
                  <img
                    src={currentImage}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                  {product.tag && (
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-black px-2.5 py-1 rounded-lg shadow-sm">
                      {product.tag}
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white/95 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-200 shadow-2xs flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Chính hãng 100%</span>
                  </div>
                </div>

                {/* Thumbnails Strip */}
                {images.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`w-16 h-16 rounded-xl border-2 overflow-hidden shrink-0 bg-slate-50 p-1 cursor-pointer transition-all ${
                          selectedImageIndex === idx 
                            ? 'border-red-600 ring-2 ring-red-100 scale-105' 
                            : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-contain" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Cam kết D&T Việt Nam dưới ảnh */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-2 text-xs">
                  <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Cam Kết Chất Lượng D&amp;T Việt Nam</span>
                  </div>
                  <ul className="space-y-1 text-slate-600 text-[11px]">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Hàng chuẩn 100%, có tem mác &amp; xuất xứ rõ ràng</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Được đồng kiểm, kiểm tra hàng thoải mái trước khi nhận</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Đổi trả 1-1 trong 30 ngày nếu phát hiện lỗi nhà sản xuất</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CỘT PHẢI: TÊN, GIÁ THAM KHẢO, CÔNG DỤNG, THÔNG SỐ */}
              <div className="space-y-4">
                
                {/* Tên & Đánh giá */}
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{product.rating || 5.0}</span>
                      <span className="text-slate-400 font-normal">({product.reviewCount || 120} đánh giá)</span>
                    </div>
                    <span>•</span>
                    <span>Đã bán {product.soldCount > 1000 ? `${(product.soldCount/1000).toFixed(1)}k` : product.soldCount}+</span>
                    <span>•</span>
                    <span className="text-emerald-600 font-bold">Xuất xứ: {product.origin || 'Chính hãng'}</span>
                  </div>

                  <h2 className="text-base sm:text-xl font-black text-slate-900 leading-snug">
                    {product.name}
                  </h2>
                </div>

                {/* Giá tham khảo */}
                <div className="p-3 bg-red-50/70 border border-red-100 rounded-2xl flex items-baseline justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 block">
                      GIÁ BÁN THAM KHẢO TẠI KHO:
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-black text-red-600">
                        {formatVND(product.price)}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-xs sm:text-sm text-slate-400 line-through">
                          {formatVND(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                  {product.discountPercent > 0 && (
                    <span className="bg-red-600 text-white font-black text-xs px-2.5 py-1 rounded-lg">
                      Tiết kiệm {product.discountPercent}%
                    </span>
                  )}
                </div>

                {/* CÔNG DỤNG SẢN PHẨM (Yêu cầu 5) */}
                <div className="space-y-2">
                  <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-red-600" />
                    <span>Công Dụng Nổi Bật</span>
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {(product.uses && product.uses.length > 0 ? product.uses : [product.shortDescription]).map((use, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* HƯỚNG DẪN SỬ DỤNG (Yêu cầu 5) */}
                <div className="space-y-2">
                  <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>Hướng Dẫn Sử Dụng Hiệu Quả</span>
                  </h3>
                  <div className="bg-blue-50/50 rounded-xl p-3 border border-blue-100 text-xs text-slate-700 space-y-1.5">
                    {product.usageInstructions && product.usageInstructions.length > 0 ? (
                      product.usageInstructions.map((ins, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-5 h-5 rounded-full bg-blue-200 text-blue-800 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="leading-relaxed">{ins}</span>
                        </div>
                      ))
                    ) : (
                      <p className="leading-relaxed">
                        Lắc đều sản phẩm trước khi sử dụng. Xịt hoặc bôi trực tiếp vào khu vực cần xử lý. Đậy nắp kín sau khi dùng và để nơi thoáng mát.
                      </p>
                    )}
                  </div>
                </div>

                {/* ĐỐI TƯỢNG PHÙ HỢP (Yêu cầu 5) */}
                <div className="space-y-2">
                  <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span>Đối Tượng Phù Hợp</span>
                  </h3>
                  <div className="bg-purple-50/50 rounded-xl p-3 border border-purple-100 text-xs text-slate-700 space-y-1">
                    {targetAudience.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* THÔNG SỐ KỸ THUẬT (Yêu cầu 5) */}
                {product.specifications && Object.keys(product.specifications).length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
                      Thông Số Kỹ Thuật
                    </h3>
                    <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden text-xs">
                      <table className="w-full divide-y divide-slate-200">
                        <tbody className="divide-y divide-slate-100">
                          {Object.entries(product.specifications).map(([key, val]) => (
                            <tr key={key} className="hover:bg-slate-100/50">
                              <td className="py-1.5 px-3 font-bold text-slate-500 w-1/3 bg-slate-100/60">
                                {key}
                              </td>
                              <td className="py-1.5 px-3 text-slate-800 font-medium">
                                {val}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>

          {/* STICKY FOOTER CTA (YÊU CẦU 5: MUA NGAY SHOPEE / TIKTOK & ZALO / HOTLINE) */}
          <div className="p-3 sm:p-5 bg-white border-t border-slate-200 shadow-xl shrink-0 space-y-3">
            
            {/* CTA MUA NGAY TRÊN SÀN */}
            <div>
              <div className="text-[11px] font-black uppercase text-slate-500 tracking-wider mb-2 flex items-center justify-between">
                <span>MUA LẺ CHÍNH HÃNG TRỰC TIẾP TRÊN SÀN:</span>
                <span className="text-emerald-600 font-bold">Miễn Phí Đổi Trả</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                
                {/* SHOPEE */}
                <a
                  href={shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleShopeeClick}
                  className="py-3 px-4 bg-[#ee4d2d] hover:bg-[#d73211] text-white font-black rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer text-center group"
                >
                  <Store className="w-4 h-4 shrink-0" />
                  <span>MUA TRÊN SHOPEE</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* TIKTOK SHOP */}
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleTikTokClick}
                  className="py-3 px-4 bg-black hover:bg-slate-900 text-white font-black rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer text-center group"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.94-4.52V8.91a8.3 8.3 0 0 0 4.83 1.55v-3.77z"/>
                  </svg>
                  <span>MUA TRÊN TIKTOK SHOP</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                </a>

              </div>
            </div>

            {/* MUA SỈ / TƯ VẤN (ZALO & HOTLINE) */}
            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
              <span className="text-slate-600 font-bold text-center sm:text-left">
                Mua số lượng lớn hoặc cần tư vấn kỹ thuật?
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={STORE_CONFIG.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleZaloClick}
                  className="flex-1 sm:flex-initial py-2 px-3 bg-blue-50 hover:bg-blue-100 text-blue-700 font-black rounded-lg border border-blue-200 text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-blue-600" />
                  <span>CHAT ZALO</span>
                </a>

                <a
                  href={`tel:${STORE_CONFIG.phoneRaw}`}
                  onClick={handleHotlineClick}
                  className="flex-1 sm:flex-initial py-2 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-black rounded-lg border border-emerald-200 text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                  <span>GỌI HOTLINE</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
