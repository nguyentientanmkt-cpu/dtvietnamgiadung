import dotenv from 'dotenv';

dotenv.config();

const webappUrl = process.argv[2] ? process.argv[2].trim() : process.env.GOOGLE_SHEET_WEBAPP_URL;
const authSecret = process.env.GOOGLE_SHEET_AUTH_SECRET || 'DT_VIETNAM_SECRET_2026';

console.log('================================================================');
console.log('📊 KIỂM TRA KẾT NỐI GOOGLE APPS SCRIPT WEB APP (D&T VIỆT NAM)');
console.log('================================================================\n');

if (!webappUrl || webappUrl === 'your_google_sheet_webapp_url_here') {
  console.log('⚠️ CHƯA TÌM THẤY GOOGLE_SHEET_WEBAPP_URL!');
  console.log('----------------------------------------------------------------');
  console.log('👉 Hướng dẫn lấy URL:');
  console.log('1. Mở dự án Google Apps Script:');
  console.log('   https://script.google.com/u/0/home/projects/1oiQ4g_a-PwWiUynHOsYcypac1otsU6iBkUOXVlgQ02JNOUuNcCh9w0mf/edit');
  console.log('2. Dán toàn bộ mã nguồn trong scripts/GoogleSheet_Ma.gs vào file Mã.gs');
  console.log('3. Nhấn "Triển khai" (Deploy) -> "Tùy chọn triển khai mới" (New deployment)');
  console.log('4. Chọn loại: "Ứng dụng web" (Web App)');
  console.log('   - Thực thi dưới dạng: Tôi (email của bạn)');
  console.log('   - Người có quyền truy cập: "Bất kỳ ai" (Anyone) -> Rất quan trọng!');
  console.log('5. Nhấn "Triển khai", cấp quyền và sao chép URL Ứng dụng web (kết thúc bằng /exec)');
  console.log('6. Chạy lại lệnh này kèm URL:');
  console.log('   bun scripts/test-google-sheet.js <URL_WEB_APP>\n');
  process.exit(0);
}

console.log(`🔗 Web App URL: ${webappUrl.substring(0, 35)}.../exec`);
console.log(`🔑 Auth Secret: ${authSecret ? 'Đã cấu hình' : 'Mặc định'}\n`);

// 1. Test GET request
console.log('[1/2] Kiểm tra kết nối GET Web App...');
try {
  const getRes = await fetch(webappUrl, { redirect: 'follow' });
  const getData = await getRes.json();
  console.log('✅ GET Status:', getRes.status);
  console.log('✅ Phản hồi từ Google Apps Script:', getData);
} catch (e) {
  console.warn('⚠️ Lỗi kiểm tra GET (có thể bỏ qua nếu Apps Script chỉ bật POST):', e.message);
}

// 2. Test POST request with sample order
console.log('\n[2/2] Đang gửi đơn hàng thử nghiệm vào Sheet "DATA LADIPAGE - XỊT MỐI"...');
const testOrder = {
  authKey: authSecret,
  orderCode: `TEST-GS-${Math.floor(100000 + Math.random() * 900000)}`,
  fullName: 'Nguyễn Văn Minh (Khách Test Google Sheet)',
  phoneNumber: '0987654321',
  address: 'Số 123 Đường Nguyễn Trãi, P. Bến Thành, Quận 1, TP.HCM',
  note: 'Giao giờ hành chính, gọi trước khi giao',
  packageKey: 'combo',
  packageName: 'GÓI 2: Mua 2 Tặng 1 (Tổng 3 bình - 578.000đ)',
  bottleCount: 3,
  totalAmount: 578000,
  shippingFee: 0,
  createdAt: new Date().toISOString()
};

try {
  const postRes = await fetch(webappUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(testOrder),
    redirect: 'follow'
  });

  const postData = await postRes.json();
  console.log('Status code:', postRes.status);
  console.log('Kết quả từ Sheet:', postData);

  if (postRes.ok && postData.success) {
    console.log('\n================================================================');
    console.log('🎉 THÀNH CÔNG! Đơn hàng thử nghiệm đã được lưu vào Google Sheet!');
    console.log(`- Dòng được chèn: Dòng ${postData.row || 'N/A'}`);
    console.log(`- Cột B: ${postData.time || 'Ngày tạo'}`);
    console.log(`- Cột C: Website`);
    console.log(`- Cột D: ${postData.customer}`);
    console.log(`- Cột E: ${postData.phone}`);
    console.log(`- Cột G: ${postData.combo}`);
    console.log(`- Cột H: Địa chỉ`);
    console.log(`- Cột J: ${postData.total}đ`);
    console.log(`- Cột K: Chờ xác nhận`);
    console.log('================================================================\n');
  } else {
    console.error('\n❌ GỬI THẤT BẠI:', postData);
  }
} catch (err) {
  console.error('\n❌ LỖI KẾT NỐI:', err.message);
}
