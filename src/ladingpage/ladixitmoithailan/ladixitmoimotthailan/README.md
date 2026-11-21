# Landing Page Bình Xịt Diệt Mối Thái Lan Chaindrite

Dự án Landing Page được nhân bản và tối ưu hoàn chỉnh 100% từ mẫu gốc:
`https://dathang.muvadi.com/xitmoithailan`

---

## 🚀 Cách khởi chạy Dev Server

1. **Mở qua PowerShell**:
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\server.ps1 -port 5500
   ```
2. **Truy cập**:
   - Local: [http://localhost:5500/](http://localhost:5500/)
   - Mạng nội bộ (điện thoại/máy tính bảng cùng wifi): `http://<IP-may-tinh>:5500/`

---

## 📂 Cấu trúc thư mục

- `index.html`: Toàn bộ cấu trúc landing page, typography, styling, responsive mobile/desktop và form đặt hàng.
- `assets/`: Đầy đủ 59 tệp hình ảnh, banner, icon, feedback khách hàng đã được tải offline về máy (không sợ lỗi ảnh hoặc bị chặn CDN).
- `css/`: File stylesheet hiệu ứng (`animatev4.css`, `iconfont.css`).
- `js/`: Scripts tiện ích (`fingerprint.js`).
- `webcake/v4/`: Bộ runtime engine xử lý slide gallery ảnh, đồng hồ đếm ngược (countdown timer), nút mua hàng cuộn mượt và form validate.
- `server.ps1`: Dev server HTTP tích hợp sẵn trên PowerShell, tự động nhận diện MIME type và hỗ trợ hot reload/preview trực tiếp.

---

## ✨ Các tính năng nổi bật đã hoàn thiện

1. **Giao diện chuẩn 1:1**: Đúng từng pixel, font chữ Roboto & Montserrat, màu sắc cam/đỏ hút mắt, tối ưu cả Desktop và Mobile.
2. **Slide Album ảnh tương tác**: Bộ sưu tập hình ảnh sản phẩm thực tế và feedback, có nút chuyển tiếp và thumbnail xem nhanh.
3. **Đồng hồ đếm ngược**: Tạo hiệu ứng khan hiếm và kích thích mua hàng (FOMO).
4. **Nút "MUA NGAY" trôi cố định (Floating Sticky Button)**: Bám theo màn hình, bấm vào tự cuộn mượt xuống form đặt hàng.
5. **Form Đặt Hàng Thông Minh**:
   - Tích hợp kiểm tra đúng định dạng số điện thoại Việt Nam (Regex `03x`, `05x`, `07x`, `08x`, `09x`).
   - Lựa chọn 2 gói ưu đãi: 1 bình 299K hoặc Combo 2 bình 599K (Freeship + quà tặng).
   - Tích hợp sẵn Popup thông báo đặt hàng thành công chuyên nghiệp.
