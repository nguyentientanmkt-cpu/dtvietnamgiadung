# HƯỚNG DẪN SỬ DỤNG VÀ XUẤT BẢN LANDING PAGE

### 1. Giới thiệu dự án
Landing Page bán hàng **Bình Xịt Diệt Mối Sinh Học Thái Lan Chaendrite 600ml** được xây dựng chuẩn thương mại điện tử (High-converting LadiPage) tại Việt Nam:
- **Hotline / Zalo chính thức:** `0362.495.921` (Đã được tích hợp vào toàn bộ nút gọi, nút chat Zalo, form đặt hàng và popup thông báo).
- **Hình ảnh thương mại sắc nét:** Đã tạo và đóng gói trong thư mục `assets/` (Chai xịt chính hãng, Combo Mua 2 tặng 1, cơ chế xịt vòi kim loại, trước & sau diệt mối, ảnh khách hàng).
- **Tính năng chuyển đổi cao:**
  + Đồng hồ đếm ngược Flash Sale tạo độ khan hiếm (Urgency Countdown).
  + Nút đặt hàng hiệu ứng nhịp tim (Pulsing Button) cuộn mượt xuống Form.
  + Bảng giá 3 Combo thông minh tự động tính phí ship và tổng tiền.
  + Form đặt hàng trực tiếp, validate số điện thoại Việt Nam chuẩn 10 số.
  + Popup Modal xác nhận đặt hàng thành công và lưu trữ đơn vào `localStorage`.
  + Popup thông báo đơn hàng ảo thời gian thực (Social Proof Toast) nhảy định kỳ tạo hiệu ứng khách mua tấp nập.
  + Thanh tiện ích ghim chân trang trên điện thoại di động (Sticky Bar) gồm Gọi Ngay, Chat Zalo và Đặt Hàng Nhanh.

---

### 2. Cấu trúc thư mục
```
d:/ladixitmoithailan/
├── index.html           # File giao diện chính LadiPage
├── style.css            # File phong cách giao diện hiện đại, responsive 100%
├── script.js            # Logic tương tác, giỏ hàng, countdown, popup
├── assets/
│   ├── product-hero.jpg     # Ảnh bình xịt Chaendrite 600ml
│   ├── product-combo.jpg    # Ảnh bộ 3 bình Mua 2 Tặng 1
│   ├── spray-action.jpg     # Ảnh thực tế xịt vòi kim loại vào khe gỗ
│   ├── before-after.jpg     # Ảnh so sánh tác hại mối ăn gỗ và nhà sạch mối
│   ├── avatar-1.jpg         # Ảnh đánh giá khách hàng (Anh Hoàng)
│   └── avatar-2.jpg         # Ảnh đánh giá khách hàng (Chị Thảo)
└── HD_SU_DUNG.md        # Hướng dẫn chi tiết
```

---

### 3. Cách mở và chạy thử nghiệm
1. Bạn có thể mở trực tiếp file `index.html` bằng bất kỳ trình duyệt nào (Google Chrome, Microsoft Edge, Cốc Cốc, Safari...).
2. Bấm chuột phải vào `index.html` -> Chọn **Open with** -> Chọn **Google Chrome** hoặc **Microsoft Edge**.

---

### 4. Cách đưa lên mạng / Tên miền riêng
- **Cách 1: Up lên Hosting / cPanel / DirectAdmin:**
  + Nén toàn bộ thư mục thành file `.zip`.
  + Upload lên thư mục `public_html` trên hosting của bạn và giải nén.
- **Cách 2: Up lên Netlify / Vercel / Cloudflare Pages (Miễn phí 100%):**
  + Kéo thả cả thư mục `d:\ladixitmoithailan` vào trang quản lý Netlify Drop (https://app.netlify.com/drop).
  + Sau 5 giây bạn sẽ có ngay 1 đường link online tốc độ cao có SSL (https://...).
  + Bạn có thể trỏ tên miền riêng vào rất dễ dàng.
- **Cách 3: Chèn vào nền tảng LadiPage:**
  + Nếu bạn sử dụng tài khoản LadiPage, bạn có thể tạo trang mới và sử dụng tính năng nhúng mã HTML/CSS/JS hoặc tải mã nguồn lên tên miền đã trỏ về LadiPage.
