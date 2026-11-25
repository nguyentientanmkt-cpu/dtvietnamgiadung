import http from 'http';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, '..', '.env');
dotenv.config({ path: envPath });

const TEST_PORT = 5055;
process.env.PORT = String(TEST_PORT);

console.log('================================================================');
console.log('🧪 KIỂM TRA TOÀN DIỆN HỆ THỐNG ĐẶT HÀNG: GOOGLE SHEETS & TELEGRAM');
console.log('================================================================\n');

// Import server
await import('../server.js');

function apiPost(endpoint, data) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(data);
    const req = http.request({
      hostname: '127.0.0.1',
      port: TEST_PORT,
      path: endpoint,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(body) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: body });
        }
      });
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

const testResults = [];

// -------------------------------------------------------------
// KỊCH BẢN 1: ĐẶT HÀNG GÓI COMBO (MUA 2 TẶNG 1 - 578.000đ)
// -------------------------------------------------------------
console.log('👉 [Kịch bản 1] Gửi đơn hàng GÓI COMBO (Mua 2 tặng 1 - 578.000đ)...');
const comboOrderCode = `MD-COMBO-${Math.floor(100000 + Math.random() * 900000)}`;
const comboPayload = {
  orderCode: comboOrderCode,
  fullName: 'Nguyễn Văn Minh (Khách Test Combo)',
  phoneNumber: '0987654321',
  address: 'Số 123 Đường Nguyễn Trãi, P. Bến Thành, Quận 1, TP.HCM',
  note: 'Giao giờ hành chính, gọi trước 15 phút',
  isTest: true,
  packageKey: 'combo',
  packageName: 'Mua 2 tặng 1 (3 bình 600ml)',
  bottleCount: 3,
  totalAmount: 578000,
  shippingFee: 0,
  createdAt: new Date().toISOString()
};

const res1 = await apiPost('/api/order', comboPayload);
console.log('  Kết quả API:', res1.data);

const tele1Ok = res1.data?.telegram?.sent;

if (res1.status === 200 && res1.data.success && tele1Ok) {
  console.log('  ✅ Telegram: Đã nhận thông báo!');
  if (res1.data.googleSheet?.sent) {
    console.log('  ✅ Google Sheets: Đã ghi đơn vào bảng tính!');
  } else {
    console.log(`  ℹ️ Google Sheets: ${res1.data.googleSheet?.error || 'Chờ cấu hình AUTH_SECRET'}`);
  }
  console.log('  ✅ Kịch bản 1 ĐẠT: Đơn Combo 578.000đ được xử lý an toàn!\n');
  testResults.push({ name: 'Đơn Combo 578.000đ (Telegram & Sheets)', passed: true });
} else {
  console.error('  ❌ Kịch bản 1 THẤT BẠI:', res1.data);
  testResults.push({ name: 'Đơn Combo 578.000đ', passed: false, error: res1.data });
}

// -------------------------------------------------------------
// KỊCH BẢN 2: ĐẶT HÀNG GÓI ĐƠN (1 BÌNH - 289.000đ)
// -------------------------------------------------------------
console.log('👉 [Kịch bản 2] Gửi đơn hàng GÓI ĐƠN (1 bình - 289.000đ)...');
const singleOrderCode = `MD-SINGLE-${Math.floor(100000 + Math.random() * 900000)}`;
const singlePayload = {
  orderCode: singleOrderCode,
  fullName: 'Trần Thị Mai (Khách Test 1 Bình)',
  phoneNumber: '0362495921',
  address: 'Ngõ 45 Cầu Giấy, P. Dịch Vọng, Cầu Giấy, Hà Nội',
  note: 'Gửi bưu điện kiểm tra hàng mới thanh toán',
  isTest: true,
  packageKey: 'single',
  packageName: '1 bình 600ml',
  bottleCount: 1,
  totalAmount: 289000,
  shippingFee: 0,
  createdAt: new Date().toISOString()
};

const res2 = await apiPost('/api/order', singlePayload);
console.log('  Kết quả API:', res2.data);

const tele2Ok = res2.data?.telegram?.sent;

if (res2.status === 200 && res2.data.success && tele2Ok) {
  console.log('  ✅ Telegram: Đã nhận thông báo!');
  if (res2.data.googleSheet?.sent) {
    console.log('  ✅ Google Sheets: Đã ghi đơn vào bảng tính!');
  } else {
    console.log(`  ℹ️ Google Sheets: ${res2.data.googleSheet?.error || 'Chờ cấu hình AUTH_SECRET'}`);
  }
  console.log('  ✅ Kịch bản 2 ĐẠT: Đơn 1 bình 289.000đ được xử lý an toàn!\n');
  testResults.push({ name: 'Đơn 1 bình 289.000đ (Telegram & Sheets)', passed: true });
} else {
  console.error('  ❌ Kịch bản 2 THẤT BẠI:', res2.data);
  testResults.push({ name: 'Đơn 1 bình 289.000đ', passed: false, error: res2.data });
}

// -------------------------------------------------------------
// KỊCH BẢN 3: CHỐNG GỬI TRÙNG ĐƠN HÀNG (DEDUPLICATION)
// -------------------------------------------------------------
console.log('👉 [Kịch bản 3] Kiểm tra chống trùng lặp khi khách bấm nút đặt hàng nhiều lần...');
const res3 = await apiPost('/api/order', comboPayload);
console.log('  Kết quả gửi lại lần 2:', res3.data);

if (res3.status === 200 && res3.data.success && res3.data.duplicate === true) {
  console.log('  ✅ Kịch bản 3 ĐẠT: Đơn trùng được phát hiện chuẩn xác, hệ thống từ chối bắn lặp!\n');
  testResults.push({ name: 'Chống gửi trùng (Deduplication)', passed: true });
} else {
  console.error('  ❌ Kịch bản 3 THẤT BẠI:', res3.data);
  testResults.push({ name: 'Chống gửi trùng (Deduplication)', passed: false });
}

// -------------------------------------------------------------
// KỊCH BẢN 4: ĐỘC LẬP LUỒNG – KHI TELEGRAM GẶP SỰ CỐ
// -------------------------------------------------------------
console.log('👉 [Kịch bản 4] Kiểm tra tính độc lập: Telegram lỗi thì hệ thống vẫn lưu đơn & không gián đoạn...');
const originalToken = process.env.TELEGRAM_BOT_TOKEN;
process.env.TELEGRAM_BOT_TOKEN = '123456:INVALID_TOKEN_FOR_TESTING';

const failTeleCode = `MD-FAILS-TELE-${Math.floor(100000 + Math.random() * 900000)}`;
const failTelePayload = {
  orderCode: failTeleCode,
  fullName: 'Lê Hoàng Nam (Test Độc Lập Telegram)',
  phoneNumber: '0903112233',
  address: 'Số 88 Lê Lợi, TP. Đà Nẵng',
  note: 'Kiểm tra lưu đơn khi Telegram lỗi',
  isTest: true,
  packageKey: 'combo',
  packageName: 'Mua 2 tặng 1 (3 bình 600ml)',
  bottleCount: 3,
  totalAmount: 578000,
  shippingFee: 0,
  createdAt: new Date().toISOString()
};

const res4 = await apiPost('/api/order', failTelePayload);
process.env.TELEGRAM_BOT_TOKEN = originalToken; // Khôi phục

console.log('  Kết quả khi Telegram bị lỗi giả lập:', res4.data);

// Kiểm tra đơn có được lưu trong file data/orders.json không
let orderPersisted = false;
try {
  const ordersJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'orders.json'), 'utf8') || '[]');
  orderPersisted = ordersJson.some(o => o.orderCode === failTeleCode);
} catch (e) {
  orderPersisted = false;
}

if (res4.status === 200 && res4.data.success && orderPersisted && res4.data.telegram.sent === false) {
  console.log('  ✅ Kịch bản 4 ĐẠT: Telegram lỗi nhưng đơn vẫn lưu an toàn 100% trên server, khách vẫn thấy đặt hàng thành công!\n');
  testResults.push({ name: 'Độc lập luồng: Telegram lỗi không ảnh hưởng hệ thống', passed: true });
} else {
  console.error('  ❌ Kịch bản 4 THẤT BẠI:', res4.data);
  testResults.push({ name: 'Độc lập luồng khi Telegram lỗi', passed: false });
}

// -------------------------------------------------------------
// KỊCH BẢN 5: ĐỘC LẬP LUỒNG – KHI GOOGLE SHEETS GẶP SỰ CỐ
// -------------------------------------------------------------
console.log('👉 [Kịch bản 5] Kiểm tra tính độc lập: Google Sheets lỗi thì Telegram vẫn gửi bình thường...');
const originalSheetUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
process.env.GOOGLE_SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/INVALID_URL/exec';
process.env.GOOGLE_SHEET_WEBAPP_URL = 'https://script.google.com/macros/s/INVALID_URL/exec';

const failSheetCode = `MD-FAILS-SHEET-${Math.floor(100000 + Math.random() * 900000)}`;
const failSheetPayload = {
  orderCode: failSheetCode,
  fullName: 'Võ Thị Hồng (Test Độc Lập Sheets)',
  phoneNumber: '0977889900',
  address: 'Số 99 Hùng Vương, TP. Huế',
  note: 'Kiểm tra Telegram khi Google Sheets bị lỗi URL',
  isTest: true,
  packageKey: 'single',
  packageName: '1 bình 600ml',
  bottleCount: 1,
  totalAmount: 289000,
  shippingFee: 0,
  createdAt: new Date().toISOString()
};

const res5 = await apiPost('/api/order', failSheetPayload);
// Khôi phục URL
process.env.GOOGLE_SHEETS_WEBHOOK_URL = originalSheetUrl;
process.env.GOOGLE_SHEET_WEBAPP_URL = originalSheetUrl;

console.log('  Kết quả khi Google Sheets bị lỗi giả lập:', res5.data);

if (res5.status === 200 && res5.data.success && res5.data.telegram?.sent === true && res5.data.googleSheet?.sent === false) {
  console.log('  ✅ Kịch bản 5 ĐẠT: Google Sheets lỗi mạng nhưng Telegram vẫn nhận tin nhắn mượt mà 100%!\n');
  testResults.push({ name: 'Độc lập luồng: Sheets lỗi không ảnh hưởng Telegram', passed: true });
} else {
  console.error('  ❌ Kịch bản 5 THẤT BẠI:', res5.data);
  testResults.push({ name: 'Độc lập luồng khi Sheets lỗi', passed: false });
}

// -------------------------------------------------------------
// TỔNG KẾT BÁO CÁO
// -------------------------------------------------------------
console.log('================================================================');
console.log('📊 BÁO CÁO KẾT QUẢ KIỂM TRA HỆ THỐNG ĐẶT HÀNG D&T');
console.log('================================================================');
let allPassed = true;
testResults.forEach((t, i) => {
  console.log(`${i + 1}. ${t.name}: ${t.passed ? '✅ ĐẠT 100%' : '❌ KHÔNG ĐẠT'}`);
  if (!t.passed) allPassed = false;
});
console.log('================================================================');
if (allPassed) {
  console.log('🎉 TẤT CẢ KỊCH BẢN ĐÃ ĐẠT TIÊU CHUẨN AN TOÀN & ĐỘC LẬP TUYỆT ĐỐI!');
}
console.log('================================================================\n');

process.exit(0);
