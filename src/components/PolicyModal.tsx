import React from 'react';
import { 
  X, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  FileText, 
  Lock, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';

export type PolicyType = 'purchase' | 'return' | 'privacy' | 'terms';

interface PolicyModalProps {
  isOpen: boolean;
  activePolicy: PolicyType;
  onClose: () => void;
  onSelectPolicy: (policy: PolicyType) => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  activePolicy,
  onClose,
  onSelectPolicy,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl text-slate-800 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-slate-50 shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-rose-600" />
            <h2 className="font-extrabold text-sm sm:text-base text-slate-900">
              Chính Sách &amp; Điều Khoản D&amp;T Việt Nam
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

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-100/60 overflow-x-auto text-xs shrink-0 px-3 pt-2 gap-1 scrollbar-none">
          <button
            onClick={() => onSelectPolicy('purchase')}
            className={`px-3 py-2 rounded-t-xl font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activePolicy === 'purchase'
                ? 'bg-white text-rose-600 border-t-2 border-rose-600 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <Truck className="w-4 h-4" />
            Chính Sách Mua Hàng
          </button>
          <button
            onClick={() => onSelectPolicy('return')}
            className={`px-3 py-2 rounded-t-xl font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activePolicy === 'return'
                ? 'bg-white text-rose-600 border-t-2 border-rose-600 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            Chính Sách Đổi Trả
          </button>
          <button
            onClick={() => onSelectPolicy('privacy')}
            className={`px-3 py-2 rounded-t-xl font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activePolicy === 'privacy'
                ? 'bg-white text-rose-600 border-t-2 border-rose-600 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <Lock className="w-4 h-4" />
            Chính Sách Bảo Mật
          </button>
          <button
            onClick={() => onSelectPolicy('terms')}
            className={`px-3 py-2 rounded-t-xl font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activePolicy === 'terms'
                ? 'bg-white text-rose-600 border-t-2 border-rose-600 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <FileText className="w-4 h-4" />
            Điều Khoản Sử Dụng
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-5 sm:p-6 text-xs text-slate-600 space-y-4 leading-relaxed">
          {activePolicy === 'purchase' && (
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900">
                1. Quy Định Mua Hàng &amp; Vận Chuyển Toàn Quốc
              </h3>
              <p>
                D&amp;T Việt Nam hỗ trợ giao hàng tận nhà trên toàn quốc thông qua các đối tác vận chuyển uy tín (Viettel Post, GHTK, GHN, Shopee Express).
              </p>
              
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2">
                <strong className="text-slate-900 font-bold block">Chính Sách Đồng Kiểm:</strong>
                <p>
                  Khách hàng khi nhận hàng có quyền mở hộp kiểm tra đúng mẫu mã, số lượng và quy cách sản phẩm đã đặt trước khi thanh toán tiền cho nhân viên giao hàng (COD).
                </p>
              </div>

              <div className="space-y-2">
                <strong className="text-slate-900 font-bold block">Thời Gian Nhận Hàng Dự Kiến:</strong>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Nội thành các thành phố lớn: 1 – 2 ngày làm việc.</li>
                  <li>Các tỉnh thành khác và khu vực huyện/xã: 2 – 4 ngày làm việc.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <strong className="text-slate-900 font-bold block">Hình Thức Thanh Toán:</strong>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Thanh toán tiền mặt khi nhận hàng (COD).</li>
                  <li>Chuyển khoản trực tiếp qua ngân hàng hoặc quét mã VietQR 24/7.</li>
                </ul>
              </div>
            </div>
          )}

          {activePolicy === 'return' && (
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900">
                2. Chính Sách Đổi Trả &amp; Bảo Hành
              </h3>
              <p>
                D&amp;T Việt Nam cam kết quyền lợi tối đa cho khách hàng với chính sách đổi mới minh bạch:
              </p>

              <div className="space-y-2">
                <strong className="text-slate-900 font-bold block">Thời Hạn &amp; Điều Kiện Đổi Trả:</strong>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li><strong>Trong vòng 7 ngày:</strong> Đổi mới 100% miễn phí nếu sản phẩm bị hư hại do vận chuyển (móp méo, rò rỉ dung dịch, gãy vỡ) hoặc giao sai chủng loại, số lượng.</li>
                  <li><strong>Lỗi từ nhà sản xuất:</strong> 1 đổi 1 hoặc hoàn tiền nhanh chóng theo yêu cầu của quý khách.</li>
                  <li>Sản phẩm đổi trả cần giữ nguyên tem nhãn niêm phong của D&amp;T Việt Nam (với các mặt hàng chai xịt hóa phẩm).</li>
                </ul>
              </div>

              <div className="bg-rose-50 p-3.5 rounded-xl border border-rose-200 text-rose-800 space-y-1">
                <strong className="font-bold block">Quy Trình Đổi Trả Siêu Tốc:</strong>
                <p>
                  Chụp ảnh hoặc quay video ngắn tình trạng sản phẩm và gửi cho D&amp;T qua kênh chat tư vấn. Đội ngũ chăm sóc khách hàng sẽ xác nhận và gửi sản phẩm thay thế ngay trong 24h.
                </p>
              </div>
            </div>
          )}

          {activePolicy === 'privacy' && (
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900">
                3. Chính Sách Bảo Mật Thông Tin Khách Hàng
              </h3>
              <p>
                D&amp;T Việt Nam tôn trọng và cam kết bảo mật tuyệt đối thông tin cá nhân của quý khách:
              </p>

              <div className="space-y-2">
                <strong className="text-slate-900 font-bold block">Mục Đích Thu Thập Thông Tin:</strong>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Xử lý đơn hàng, in vận đơn giao hàng và liên hệ giao nhận tận nhà.</li>
                  <li>Cung cấp hướng dẫn sử dụng và hỗ trợ kỹ thuật sau bán hàng.</li>
                  <li>Gửi mã ưu đãi giảm giá đặc quyền cho khách hàng thân thiết.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <strong className="text-slate-900 font-bold block">Cam Kết Không Tiết Lộ:</strong>
                <p>
                  D&amp;T Việt Nam cam kết không bán, chia sẻ hay cung cấp thông tin cá nhân của khách hàng cho bất kỳ bên thứ ba nào vì mục đích thương mại khi chưa có sự đồng ý.
                </p>
              </div>
            </div>
          )}

          {activePolicy === 'terms' && (
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900">
                4. Điều Khoản Sử Dụng Website
              </h3>
              <p>
                Khi truy cập và mua hàng trên hệ thống website của D&amp;T Việt Nam, quý khách đồng ý tuân thủ các điều khoản sau:
              </p>

              <div className="space-y-2">
                <strong className="text-slate-900 font-bold block">Tính Chính Xác Của Thông Tin Đặt Hàng:</strong>
                <p>
                  Quý khách vui lòng cung cấp đúng họ tên, số điện thoại và địa chỉ nhận hàng để đơn hàng được giao nhanh chóng và chính xác nhất.
                </p>
              </div>

              <div className="space-y-2">
                <strong className="text-slate-900 font-bold block">Bản Quyền Nội Dung &amp; Hình Ảnh:</strong>
                <p>
                  Tất cả nội dung, hình ảnh sản phẩm, video hướng dẫn và nhận diện thương hiệu trên website thuộc quyền quản lý của D&amp;T Việt Nam. Mọi hành vi sao chép nhằm mục đích trục lợi bất chính đều vi phạm quy định.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-400">
            D&amp;T Việt Nam – Uy Tín Khẳng Định Thương Hiệu
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Đã Hiểu &amp; Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
