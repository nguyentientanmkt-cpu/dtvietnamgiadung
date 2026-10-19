import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  CreditCard, 
  ShieldCheck, 
  QrCode, 
  Copy, 
  Check, 
  PackageCheck,
  PhoneCall,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem, OrderInfo } from '../types';
import { formatVND } from '../data/products';
import { OfficialStoreBadge } from './Logo';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  voucherCode?: string;
  discountAmount: number;
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  voucherCode,
  discountAmount,
  onOrderSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    province: 'Hà Nội',
    district: 'Cầu Giấy',
    address: '',
    note: '',
    paymentMethod: 'cod' as 'cod' | 'vietqr',
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shippingFee = subtotal >= 299000 || voucherCode === 'FREESHIP' ? 0 : 30000;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Vui lòng nhập họ và tên người nhận.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      setErrorMsg('Vui lòng nhập số điện thoại hợp lệ để shipper liên hệ.');
      return;
    }
    if (!formData.address.trim()) {
      setErrorMsg('Vui lòng nhập địa chỉ cụ thể (số nhà, ngõ/đường).');
      return;
    }

    const generatedId = `DT-VN-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setOrderConfirmed(true);

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    onOrderSuccess();
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl text-slate-800 overflow-hidden my-auto max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-slate-50 shrink-0">
          <div className="flex items-center gap-2.5">
            <OfficialStoreBadge />
            <h2 className="font-extrabold text-sm sm:text-base text-slate-900">
              {orderConfirmed ? 'Xác Nhận Đơn Hàng Thành Công' : 'Thanh Toán & Đặt Hàng'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-6">
          {orderConfirmed ? (
            /* Order Confirmed View */
            <div className="space-y-5 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-black text-slate-900">
                  Đặt Hàng Thành Công!
                </h3>
                <p className="text-xs text-slate-500">
                  Cảm ơn bạn đã tin tưởng mua sắm tại <strong>D&amp;T Cửa Hàng Chính Hãng</strong>.
                </p>
              </div>

              {/* Order Info Badge */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left space-y-2.5 text-xs max-w-lg mx-auto">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200 font-bold">
                  <span className="text-slate-600">Mã đơn hàng:</span>
                  <span className="font-mono text-rose-600 font-black text-sm">{orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Người nhận:</span>
                  <span className="font-semibold text-slate-900">{formData.name} ({formData.phone})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Địa chỉ:</span>
                  <span className="font-semibold text-slate-900 text-right">
                    {formData.address}, {formData.district}, {formData.province}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Hình thức thanh toán:</span>
                  <span className="font-semibold text-slate-900 uppercase">
                    {formData.paymentMethod === 'cod' ? 'Thanh toán COD khi nhận hàng' : 'Chuyển khoản VietQR'}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200 font-black text-sm">
                  <span className="text-slate-800">Tổng thanh toán:</span>
                  <span className="text-rose-600">{formatVND(finalTotal)}</span>
                </div>
              </div>

              {/* VietQR Instructions if chosen */}
              {formData.paymentMethod === 'vietqr' && (
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-left space-y-3 max-w-lg mx-auto text-xs">
                  <div className="flex items-center gap-2 font-bold text-blue-900">
                    <QrCode className="w-4 h-4 text-blue-700" />
                    <span>Thông Tin Chuyển Khoản Ngân Hàng (VietQR)</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-3 rounded-lg border border-blue-100">
                    <div className="w-28 h-28 bg-slate-900 text-white rounded-lg flex flex-col items-center justify-center p-2 text-center shrink-0">
                      <QrCode className="w-16 h-16 text-white" />
                      <span className="text-[9px] font-mono mt-1 text-slate-300">VIETQR 24/7</span>
                    </div>

                    <div className="space-y-1.5 text-xs w-full">
                      <div>
                        <span className="text-slate-500">Ngân hàng: </span>
                        <strong className="text-slate-900">MB Bank (Quân Đội)</strong>
                      </div>
                      <div className="flex items-center justify-between bg-slate-50 p-1.5 rounded border border-slate-200">
                        <span>STK: <strong className="font-mono">8888 6688 9999</strong></span>
                        <button
                          onClick={() => handleCopy('888866889999')}
                          className="text-blue-600 text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                        >
                          {copiedAccount ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          {copiedAccount ? 'Đã sao chép' : 'Sao chép'}
                        </button>
                      </div>
                      <div>
                        <span className="text-slate-500">Chủ tài khoản: </span>
                        <strong className="text-slate-900">D&amp;T VIETNAM CO., LTD</strong>
                      </div>
                      <div>
                        <span className="text-slate-500">Nội dung CK: </span>
                        <strong className="text-rose-600 font-mono font-black">{orderId}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Delivery Timeline Notice */}
              <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-2">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Clock className="w-3.5 h-3.5 text-rose-600" />
                  Giao hàng dự kiến: 1 - 2 ngày làm việc
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                  Hotline: [BỔ SUNG]
                </span>
              </div>

              <button
                onClick={onClose}
                className="mt-4 px-8 py-3 rounded-xl bg-slate-900 text-white font-extrabold text-xs hover:bg-slate-800 transition-all cursor-pointer shadow-md"
              >
                Hoàn Tất &amp; Về Trang Chủ
              </button>
            </div>
          ) : (
            /* Checkout Form View */
            <form onSubmit={handleSubmitOrder} className="space-y-5">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              {/* Step 1: Customer Contact & Delivery Info */}
              <div className="space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <PackageCheck className="w-4 h-4 text-rose-600" />
                  1. Thông tin giao hàng nhận hàng
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Họ và tên người nhận *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ví dụ: Nguyễn Tiến Tân"
                      className="w-full px-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-300 focus:bg-white focus:outline-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Số điện thoại nhận hàng *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ví dụ: 0988 123 456"
                      className="w-full px-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-300 focus:bg-white focus:outline-rose-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Tỉnh / Thành phố
                    </label>
                    <select
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-300 focus:bg-white focus:outline-rose-500"
                    >
                      <option value="Hà Nội">Hà Nội</option>
                      <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                      <option value="Đà Nẵng">Đà Nẵng</option>
                      <option value="Hải Phòng">Hải Phòng</option>
                      <option value="Cần Thơ">Cần Thơ</option>
                      <option value="Bình Dương">Bình Dương</option>
                      <option value="Đồng Nai">Đồng Nai</option>
                      <option value="Khác">Tỉnh thành khác...</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Quận / Huyện
                    </label>
                    <input
                      type="text"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      placeholder="Ví dụ: Cầu Giấy, Quận 1..."
                      className="w-full px-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-300 focus:bg-white focus:outline-rose-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Địa chỉ chi tiết (Số nhà, tên ngõ, đường, phường/xã) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Ví dụ: Số 25 ngõ 68 đường Cầu Giấy, P. Quan Hoa"
                    className="w-full px-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-300 focus:bg-white focus:outline-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Ghi chú đơn hàng (Tùy chọn)
                  </label>
                  <input
                    type="text"
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder="Ví dụ: Giao giờ hành chính, gọi trước khi giao..."
                    className="w-full px-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-300 focus:bg-white focus:outline-rose-500"
                  />
                </div>
              </div>

              {/* Step 2: Payment Method */}
              <div className="space-y-3 pt-3 border-t border-slate-200">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-rose-600" />
                  2. Phương thức thanh toán
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className={`p-3.5 rounded-xl border flex flex-col gap-1 cursor-pointer transition-all ${
                      formData.paymentMethod === 'cod'
                        ? 'border-rose-600 bg-rose-50/50 ring-2 ring-rose-500/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-slate-900">
                        Thanh toán khi nhận hàng (COD)
                      </span>
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                        className="text-rose-600"
                      />
                    </div>
                    <span className="text-[11px] text-slate-500">
                      Được đồng kiểm tra hàng tại chỗ trước khi thanh toán.
                    </span>
                  </label>

                  <label
                    onClick={() => setFormData({ ...formData, paymentMethod: 'vietqr' })}
                    className={`p-3.5 rounded-xl border flex flex-col gap-1 cursor-pointer transition-all ${
                      formData.paymentMethod === 'vietqr'
                        ? 'border-rose-600 bg-rose-50/50 ring-2 ring-rose-500/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-slate-900">
                        Chuyển khoản VietQR 24/7
                      </span>
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={formData.paymentMethod === 'vietqr'}
                        onChange={() => setFormData({ ...formData, paymentMethod: 'vietqr' })}
                        className="text-rose-600"
                      />
                    </div>
                    <span className="text-[11px] text-slate-500">
                      Quét mã QR tự động điền số tiền và nội dung qua app ngân hàng.
                    </span>
                  </label>
                </div>
              </div>

              {/* Order Summary & Submit Button */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Tạm tính tiền hàng ({items.length} món):</span>
                  <span className="font-semibold text-slate-900">{formatVND(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-rose-600 font-medium">
                    <span>Mã giảm giá ({voucherCode}):</span>
                    <span>-{formatVND(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-600">
                  <span>Phí vận chuyển toàn quốc:</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-emerald-600 font-bold">Miễn Phí</span>
                    ) : (
                      formatVND(shippingFee)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Tổng tiền cần thanh toán:</span>
                  <span className="text-rose-600 text-base font-black">{formatVND(finalTotal)}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  Bằng cách bấm Đặt Hàng, bạn đồng ý với chính sách bảo hành 12 tháng của D&amp;T Store.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-extrabold text-sm shadow-md shadow-rose-600/30 transition-all cursor-pointer active:scale-98"
              >
                Xác Nhận Đặt Hàng ({formatVND(finalTotal)})
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
