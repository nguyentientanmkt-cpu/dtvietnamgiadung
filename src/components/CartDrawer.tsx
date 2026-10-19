import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Tag, 
  ArrowRight, 
  Truck, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { CartItem, StoreVoucher } from '../types';
import { formatVND, VOUCHERS } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: (voucherCode: string, discount: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  const [voucherInput, setVoucherInput] = useState('');
  const [appliedVoucher, setAppliedVoucher] = useState<{
    code: string;
    discountText: string;
    discountVal: number;
    type: 'fixed' | 'percent';
  } | null>(null);
  const [voucherError, setVoucherError] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  // Free shipping threshold: 299,000đ
  const freeShipThreshold = 299000;
  const remainingForFreeShip = Math.max(0, freeShipThreshold - subtotal);
  const freeShipProgress = Math.min(100, Math.round((subtotal / freeShipThreshold) * 100));

  // Calculate voucher discount
  let discountAmount = 0;
  if (appliedVoucher) {
    if (appliedVoucher.type === 'percent') {
      discountAmount = Math.min(50000, Math.round((subtotal * appliedVoucher.discountVal) / 100));
    } else {
      discountAmount = appliedVoucher.discountVal;
    }
  }

  const shippingFee = subtotal >= freeShipThreshold || appliedVoucher?.code === 'FREESHIP' ? 0 : 30000;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyVoucher = (codeToApply?: string) => {
    const code = (codeToApply || voucherInput).trim().toUpperCase();
    setVoucherError('');

    const found = VOUCHERS.find((v: StoreVoucher) => v.code === code);
    if (!found) {
      setVoucherError('Mã khuyến mại không hợp lệ.');
      return;
    }

    if (subtotal < found.minOrderValue) {
      setVoucherError(`Đơn hàng tối thiểu ${formatVND(found.minOrderValue)} để áp dụng mã này.`);
      return;
    }

    setAppliedVoucher({
      code: found.code,
      discountText: found.description,
      discountVal: found.discountValue,
      type: found.discountType
    });
    setVoucherInput('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs">
      <div 
        className="absolute inset-y-0 right-0 max-w-full flex pl-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-rose-600" />
              <h2 className="font-extrabold text-base text-slate-900">
                Giỏ Hàng Của Bạn ({items.reduce((a, b) => a + b.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Đóng giỏ hàng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-4 py-3 bg-rose-50/70 border-b border-rose-100 text-xs">
            <div className="flex items-center justify-between font-semibold mb-1">
              <span className="flex items-center gap-1.5 text-slate-800">
                <Truck className="w-4 h-4 text-rose-600" />
                {remainingForFreeShip === 0 ? (
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Bạn đã được FREESHIP toàn quốc!
                  </span>
                ) : (
                  <span>
                    Mua thêm <strong className="text-rose-600">{formatVND(remainingForFreeShip)}</strong> để được Miễn Phí Vận Chuyển
                  </span>
                )}
              </span>
              <span className="text-rose-600 font-bold">{freeShipProgress}%</span>
            </div>
            <div className="w-full h-1.5 bg-rose-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-rose-600 rounded-full transition-all duration-300"
                style={{ width: `${freeShipProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-800 text-base">Giỏ hàng đang trống</h3>
                <p className="text-xs text-slate-500 max-w-xs">
                  Khám phá ngay các dòng giá đỡ nhôm xoay 360° và phụ kiện gia dụng thông minh chính hãng D&amp;T!
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 cursor-pointer"
                >
                  Tiếp Tục Mua Sắm
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-xl border border-slate-200 bg-white flex gap-3 items-center hover:border-slate-300 transition-all shadow-2xs"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.thumbnail}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-lg object-cover bg-slate-100 shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs text-slate-900 truncate" title={item.product.name}>
                      {item.product.name}
                    </h4>

                    {item.selectedVariant && (
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-[11px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded truncate">
                          Phân loại: {item.selectedVariant}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs font-black text-rose-600">
                        {formatVND(item.product.price)}
                      </span>

                      {/* Quantity buttons */}
                      <div className="flex items-center border border-slate-200 rounded-md overflow-hidden bg-slate-50">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-slate-600 hover:bg-slate-200 cursor-pointer"
                          aria-label="Giảm"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-slate-600 hover:bg-slate-200 cursor-pointer"
                          aria-label="Tăng"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer self-start"
                    aria-label="Xóa sản phẩm"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer with Voucher and Checkout Button */}
          {items.length > 0 && (
            <div className="p-4 border-t border-slate-200 bg-slate-50/80 space-y-3 shrink-0">
              {/* Voucher Input */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={voucherInput}
                      onChange={(e) => setVoucherInput(e.target.value)}
                      placeholder="Nhập mã: DTCHINHHANG..."
                      className="w-full pl-8 pr-3 py-1.5 text-xs uppercase bg-white rounded-lg border border-slate-300 focus:outline-rose-500 font-mono"
                    />
                    <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  </div>
                  <button
                    onClick={() => handleApplyVoucher()}
                    className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg cursor-pointer transition-colors"
                  >
                    Áp Dụng
                  </button>
                </div>

                {/* Quick Voucher Chips */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {VOUCHERS.map((v: StoreVoucher) => (
                    <button
                      key={v.code}
                      onClick={() => handleApplyVoucher(v.code)}
                      className={`text-[10px] px-2 py-0.5 rounded-md border font-mono font-bold transition-all cursor-pointer ${
                        appliedVoucher?.code === v.code
                          ? 'bg-rose-600 text-white border-rose-600'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-rose-300'
                      }`}
                    >
                      {v.code}
                    </button>
                  ))}
                </div>

                {appliedVoucher && (
                  <div className="flex items-center justify-between text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-emerald-600" />
                      Đã áp dụng mã: <strong>{appliedVoucher.code}</strong>
                    </span>
                    <button
                      onClick={() => setAppliedVoucher(null)}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}

                {voucherError && (
                  <p className="text-[11px] text-rose-600 font-medium">{voucherError}</p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1 text-xs text-slate-600 pt-1 border-t border-slate-200">
                <div className="flex justify-between">
                  <span>Tạm tính tiền hàng:</span>
                  <span className="font-semibold text-slate-900">{formatVND(subtotal)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-rose-600 font-medium">
                    <span>Giảm giá Voucher:</span>
                    <span>-{formatVND(discountAmount)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Phí vận chuyển:</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-emerald-600 font-bold">Miễn Phí</span>
                    ) : (
                      formatVND(shippingFee)
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-1.5 border-t border-slate-200">
                  <span>Tổng thanh toán:</span>
                  <span className="text-rose-600 text-base">{formatVND(finalTotal)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => {
                  onProceedToCheckout(appliedVoucher ? appliedVoucher.code : '', discountAmount);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-rose-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
              >
                <span>Đặt Hàng Ngay ({formatVND(finalTotal)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
