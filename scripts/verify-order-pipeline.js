import http from 'http';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, '..', '.env');
dotenv.config({ path: envPath });

const TEST_PORT = 5050;
process.env.PORT = String(TEST_PORT);

console.log('================================================================');
console.log('🧪 KIỂM TRA TOÀN DIỆN HỆ THỐNG ĐẶT HÀNG & THÔNG BÁO TELEGRAM');
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
console.log('👉 [Kịch bản 1] Kiểm tra gửi đơn hàng GÓI COMBO (Mua 2 tặng 1 - 578.000đ)...');
const comboOrderCode = `MD-COMBO-${Math.floor(100000 + Math.random() * 900000)}`;
const comboPayload = {
  orderCode: comboOrderCode,
  fullName: 'Nguyễn Văn Minh (Khách Test Combo)',
  phoneNumber: '0987654321',
  address: 'Số 123 Đường Nguyễn Trãi, P. Bến Thành, Quận 1, TP.HCM',
  note: 'Giao giờ hành chính, gọi trước 15 phút',
  isTest: true,
  packageKey: 'combo',
  packageName: 'GÓI 2: Mua 2 Tặng 1 (Tổng 3 bình - 578.000đ)',
  bottleCount: 3,
  totalAmount: 578000,
  shippingFee: 0,
  createdAt: new Date().toISOString()
};

const res1 = await apiPost('/api/order', comboPayload);
console.log('Kết quả API:', res1.data);

if (res1.status === 200 && res1.data.success && res1.data.telegram && res1.data.telegram.sent) {
  console.log('✅ Kịch bản 1 ĐẠT: Đơn Combo 578.000đ đã lưu và Telegram đã nhận thông báo thành công!\n');
  testResults.push({ name: 'Đơn Combo 578.000đ', passed: true });
} else {
  console.error('❌ Kịch bản 1 THẤT BẠI:', res1.data);
  testResults.push({ name: 'Đơn Combo 578.000đ', passed: false, error: res1.data });
}

// -------------------------------------------------------------
// KỊCH BẢN 2: ĐẶT HÀNG GÓI ĐƠN (1 BÌNH - 289.000đ)
// -------------------------------------------------------------
console.log('👉 [Kịch bản 2] Kiểm tra gửi đơn hàng GÓI ĐƠN (1 bình - 289.000đ)...');
const singleOrderCode = `MD-SINGLE-${Math.floor(100000 + Math.random() * 900000)}`;
const singlePayload = {
  orderCode: singleOrderCode,
  fullName: 'Trần Thị Mai (Khách Test Gói 1 Bình)',
  phoneNumber: '0912345678',
  address: 'Ngõ 45 Cầu Giấy, P. Dịch Vọng, Cầu Giấy, Hà Nội',
  note: 'Gửi bưu điện kiểm tra hàng mới thanh toán',
  isTest: true,
  packageKey: 'single',
  packageName: 'GÓI 1: Mua 1 bình (289.000đ)',
  bottleCount: 1,
  totalAmount: 289000,
  shippingFee: 0,
  createdAt: new Date().toISOString()
};

const res2 = await apiPost('/api/order', singlePayload);
console.log('Kết quả API:', res2.data);

if (res2.status === 200 && res2.data.success && res2.data.telegram && res2.data.telegram.sent) {
  console.log('✅ Kịch bản 2 ĐẠT: Đơn 1 bình 289.000đ đã lưu và Telegram đã nhận thông báo thành công!\n');
  testResults.push({ name: 'Đơn 1 bình 289.000đ', passed: true });
} else {
  console.error('❌ Kịch bản 2 THẤT BẠI:', res2.data);
  testResults.push({ name: 'Đơn 1 bình 289.000đ', passed: false, error: res2.data });
}

// -------------------------------------------------------------
// KỊCH BẢN 3: CHỐNG GỬI TRÙNG (KHÁCH NHẤN ĐẶT HÀNG NHIỀU LẦN)
// -------------------------------------------------------------
console.log('👉 [Kịch bản 3] Kiểm tra chống trùng lặp khi khách bấm nút đặt hàng nhiều lần...');
// Gửi lại đúng comboPayload vừa tạo
const res3 = await apiPost('/api/order', comboPayload);
console.log('Kết quả gửi lại lần 2:', res3.data);

if (res3.status === 200 && res3.data.success && res3.data.duplicate === true) {
  console.log('✅ Kịch bản 3 ĐẠT: Đơn trùng được phát hiện chuẩn xác, hệ thống từ chối bắn lặp về Telegram!\n');
  testResults.push({ name: 'Chống gửi trùng (Deduplication)', passed: true });
} else {
  console.error('❌ Kịch bản 3 THẤT BẠI:', res3.data);
  testResults.push({ name: 'Chống gửi trùng (Deduplication)', passed: false });
}

// -------------------------------------------------------------
// KỊCH BẢN 4: KHẢ NĂNG DỰ PHÒNG KHI TELEGRAM GẶP SỰ CỐ
// -------------------------------------------------------------
console.log('👉 [Kịch bản 4] Kiểm tra lưu đơn an toàn khi mạng Telegram bị gián đoạn...');
const originalToken = process.env.TELEGRAM_BOT_TOKEN;
// Giả lập token bị lỗi/mất mạng
process.env.TELEGRAM_BOT_TOKEN = '123456:INVALID_TOKEN_FOR_TESTING';

const failSafeOrderCode = `MD-FAILSAFE-${Math.floor(100000 + Math.random() * 900000)}`;
const failSafePayload = {
  orderCode: failSafeOrderCode,
  fullName: 'Lê Hoàng Nam (Khách Test Dự Phòng)',
  phoneNumber: '0903112233',
  address: 'Số 88 Lê Lợi, TP. Đà Nẵng',
  note: 'Test khả năng lưu đơn khi Telegram lỗi',
  isTest: true,
  packageKey: 'combo',
  packageName: 'GÓI 2: Mua 2 Tặng 1 (578.000đ)',
  bottleCount: 3,
  totalAmount: 578000,
  shippingFee: 0,
  createdAt: new Date().toISOString()
};

const res4 = await apiPost('/api/order', failSafePayload);
// Khôi phục lại token thật
process.env.TELEGRAM_BOT_TOKEN = originalToken;

console.log('Kết quả lưu đơn khi Telegram lỗi:', res4.data);

// Kiểm tra xem đơn có được lưu trong file data/orders.json không
let orderPersisted = false;
try {
  const ordersJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'orders.json'), 'utf8') || '[]');
  orderPersisted = ordersJson.some(o => o.orderCode === failSafeOrderCode);
} catch (e) {
  orderPersisted = false;
}

if (res4.status === 200 && res4.data.success && orderPersisted) {
  console.log('✅ Kịch bản 4 ĐẠT: Dù Telegram gặp sự cố, đơn hàng vẫn được lưu an toàn 100% vào hệ thống và khách hàng vẫn nhận thông báo thành công!\n');
  testResults.push({ name: 'Khả năng chịu lỗi (Fail-safe persistence)', passed: true });
} else {
  console.error('❌ Kịch bản 4 THẤT BẠI:', res4.data);
  testResults.push({ name: 'Khả năng chịu lỗi', passed: false });
}

// -------------------------------------------------------------
// TỔNG KẾT BÁO CÁO
// -------------------------------------------------------------
console.log('================================================================');
console.log('📊 BÁO CÁO KẾT QUẢ KIỂM TRA HỆ THỐNG ĐẶT HÀNG D&T');
console.log('================================================================');
testResults.forEach((t, i) => {
  console.log(`${i + 1}. ${t.name}: ${t.passed ? '✅ ĐẠT 100%' : '❌ KHÔNG ĐẠT'}`);
});
console.log('================================================================\n');

process.exit(0);
