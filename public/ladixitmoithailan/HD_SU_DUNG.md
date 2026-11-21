# HƯỚNG DẪN SỬ DỤNG VÀ XUẤT BẢN LANDING PAGE D&T VIỆT NAM (PHONG CÁCH MUVADI)

### 1. Giới thiệu dự án
Landing Page bán hàng **Bình Xịt Diệt Mối Sinh Học Thái Lan Chaendrite 600ml** của **Tổng Kho D&T Việt Nam** được thiết kế lại toàn diện theo chuẩn Muvadi tối ưu chuyển đổi Facebook Ads COD:
- **Hotline đặt hàng:** `0362.495.921` | **Zalo hỗ trợ:** `0358.762.950`
- **Địa chỉ kho:** 25/54 Bùi Quang Là, Phường An Hội Tây, TP. Hồ Chí Minh
- **Hình ảnh thương mại sắc nét trong `assets/`:**
  + Bộ 5 slide tương tác sản phẩm Chaendrite 600ml
  + Combo 3 bình Mua 2 Tặng 1
  + Thao tác xịt vòi kim loại 20cm luồn sâu khe gỗ
  + Ảnh so sánh thực tế trước & sau diệt sạch mối
  + Ảnh đánh giá khách hàng thật (Anh Hoàng, Chị Thảo, Bác Nhật, Anh Sơn)
  + Biểu tượng Thích Facebook và hiệu ứng đang nhập bình luận

### 2. Chuẩn 2 Gói Sản Phẩm & Giá Bán (Đã xóa 100% giá cũ 199K, 398K, 597K):
- **Gói 1: MUA 1 BÌNH (600ml)**
  + Giá bán: **289.000đ**
  + Miễn phí vận chuyển toàn quốc (0đ)
  + Nhận hàng, kiểm tra trước khi thanh toán (COD)
- **Gói 2: MUA 2 TẶNG 1 (TỔNG 3 BÌNH - ƯU TIÊN HIỂN THỊ - MẶC ĐỊNH CHỌN)**
  + Giá combo: **578.000đ / 3 bình**
  + Tính ra chỉ khoảng **193.000đ/bình** (Tiết kiệm 272.000đ)
  + Miễn phí vận chuyển toàn quốc (0đ)
  + Nhãn: **BÁN CHẠY NHẤT**
  + Nhận hàng, kiểm tra trước khi thanh toán (COD)

### 3. Cấu trúc thư mục:
```
public/ladixitmoithailan/
├── preview.html         # BẢN XEM TRƯỚC THEO PHONG CÁCH MUVADI (MỚI NHẤT)
├── preview-style.css    # Stylesheet responsive phong cách Muvadi (Cam/Đỏ, font Montserrat/Roboto)
├── preview-script.js    # Logic gallery slide, đếm ngược, tính tiền 289K/578K, form validate, Pixel
├── index.html           # File giao diện chính thức
├── style.css            # Stylesheet chính thức
├── script.js            # Script chính thức
├── assets/              # Thư mục hình ảnh, slide gallery, feedback
└── HD_SU_DUNG.md        # Hướng dẫn chi tiết
```

### 4. Cách mở xem trước (Preview)
1. **Mở trực tiếp file `preview.html`:**
   Bấm chuột phải vào `preview.html` -> Chọn **Open with** -> Chọn **Google Chrome** hoặc **Microsoft Edge**.
2. **Kiểm tra trên điện thoại di động:**
   Bật DevTools trình duyệt (phím F12 hoặc Ctrl+Shift+I) -> Chọn biểu tượng điện thoại (Toggle device toolbar) -> Chọn kích thước iPhone / Samsung để kiểm tra giao diện mobile cực kỳ sắc nét.
3. **Triển khai chính thức lên `index.html`:**
   Sau khi người dùng kiểm tra và đồng ý, sao chép nội dung từ `preview.html`, `preview-style.css`, `preview-script.js` sang `index.html`, `style.css`, `script.js`.
