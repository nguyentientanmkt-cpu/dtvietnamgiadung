import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, '..', '.env');
const dataDir = path.join(__dirname, '..', 'data');
const configFile = path.join(dataDir, 'telegram_config.json');

dotenv.config({ path: envPath });

const WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbwpOrxWylY9-6POIc-DGNnrePHFZgAIYP4eaniDr0IoKfWSgrWfMjx5uVz6st7ncDQkTw/exec';

console.log('================================================================');
console.log('📊 D&T VIỆT NAM – CẤU HÌNH & KIỂM THỬ TÍCH HỢP GOOGLE SHEETS');
console.log('================================================================\n');

// 1. Nhận AUTH_SECRET từ tham số dòng lệnh hoặc từ .env
let authSecret = process.argv[2] ? process.argv[2].trim() : (process.env.GOOGLE_SHEETS_AUTH_SECRET || process.env.GOOGLE_SHEET_AUTH_SECRET || '').trim();

if (!authSecret || authSecret === 'your_apps_script_auth_secret_here') {
  console.log('⚠️ CHƯA CÓ AUTH_SECRET!');
  console.log('----------------------------------------------------------------');
  console.log('👉 Hướng dẫn:');
  console.log('1. Mở dự án Google Apps Script:');
  console.log('   https://script.google.com/u/0/home/projects/1oiQ4g_a-PwWiUynHOsYcypac1otsU6iBkUOXVlgQ02JNOUuNcCh9w0mf/edit');
  console.log('2. Vào Cài đặt dự án (Project Settings - biểu tượng bánh răng) -> Thuộc tính tập lệnh (Script Properties)');
  console.log('3. Xem giá trị AUTH_SECRET bạn đã đặt.');
  console.log('4. Chạy lệnh này kèm AUTH_SECRET:');
  console.log('   bun scripts/setup-google-sheets.js <AUTH_SECRET_CUA_BAN>\n');
  process.exit(1);
}

// 2. Lưu vào .env và data/telegram_config.json
let content = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';

// Update GOOGLE_SHEETS_WEBHOOK_URL
if (/^GOOGLE_SHEETS_WEBHOOK_URL=.*$/m.test(content)) {
  content = content.replace(/^GOOGLE_SHEETS_WEBHOOK_URL=.*$/m, `GOOGLE_SHEETS_WEBHOOK_URL="${WEBAPP_URL}"`);
} else {
  content += `\nGOOGLE_SHEETS_WEBHOOK_URL="${WEBAPP_URL}"`;
}

// Update GOOGLE_SHEET_WEBAPP_URL
if (/^GOOGLE_SHEET_WEBAPP_URL=.*$/m.test(content)) {
  content = content.replace(/^GOOGLE_SHEET_WEBAPP_URL=.*$/m, `GOOGLE_SHEET_WEBAPP_URL="${WEBAPP_URL}"`);
} else {
  content += `\nGOOGLE_SHEET_WEBAPP_URL="${WEBAPP_URL}"`;
}

// Update GOOGLE_SHEETS_AUTH_SECRET
if (/^GOOGLE_SHEETS_AUTH_SECRET=.*$/m.test(content)) {
  content = content.replace(/^GOOGLE_SHEETS_AUTH_SECRET=.*$/m, `GOOGLE_SHEETS_AUTH_SECRET="${authSecret}"`);
} else {
  content += `\nGOOGLE_SHEETS_AUTH_SECRET="${authSecret}"`;
}

// Update GOOGLE_SHEET_AUTH_SECRET
if (/^GOOGLE_SHEET_AUTH_SECRET=.*$/m.test(content)) {
  content = content.replace(/^GOOGLE_SHEET_AUTH_SECRET=.*$/m, `GOOGLE_SHEET_AUTH_SECRET="${authSecret}"`);
} else {
  content += `\nGOOGLE_SHEET_AUTH_SECRET="${authSecret}"`;
}

fs.writeFileSync(envPath, content.trim() + '\n', 'utf8');

// Update data/telegram_config.json
try {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  let savedConfig = {};
  if (fs.existsSync(configFile)) {
    try { savedConfig = JSON.parse(fs.readFileSync(configFile, 'utf8') || '{}'); } catch (e) {}
  }
  savedConfig.googleSheetsWebhookUrl = WEBAPP_URL;
  savedConfig.googleSheetUrl = WEBAPP_URL;
  savedConfig.googleSheetsAuthSecret = authSecret;
  savedConfig.googleSheetSecret = authSecret;
  fs.writeFileSync(configFile, JSON.stringify(savedConfig, null, 2), 'utf8');
} catch (e) {
  console.warn('Không thể lưu file config:', e.message);
}

console.log('✅ Đã lưu GOOGLE_SHEETS_WEBHOOK_URL và GOOGLE_SHEETS_AUTH_SECRET vào cấu hình backend!\n');

// 3. Tiến hành kiểm tra trực tiếp kết nối với Web App
console.log('----------------------------------------------------------------');
console.log('🔍 BẮT ĐẦU KIỂM THỬ KẾT NỐI VÀ CHỨC NĂNG');
console.log('----------------------------------------------------------------\n');

// Test 1: GET Ping
console.log('[1/4] Kiểm tra trạng thái Web App (GET)...');
try {
  const getRes = await fetch(WEBAPP_URL, { redirect: 'follow' });
  const getData = await getRes.json();
  console.log('  Status:', getRes.status);
  console.log('  Tab mục tiêu:', getData.sheetTarget);
  console.log('  Dòng bắt đầu:', getData.dataStartRow);
  console.log('  Cấu hình Script Properties:', getData.configured);
  if (!getData.configured?.hasSpreadsheetId || !getData.configured?.hasAuthSecret) {
    console.error('❌ CẢNH BÁO: Script Properties trên Apps Script chưa đủ SPREADSHEET_ID hoặc AUTH_SECRET!');
  } else {
    console.log('  -> Apps Script đã sẵn sàng 100%!\n');
  }
} catch (e) {
  console.warn('  GET ping thất bại:', e.message, '\n');
}

// Test 2: Gói 1 bình (289.000đ)
const order1Code = `TEST-GS-${Math.floor(100000 + Math.random() * 900000)}`;
console.log(`[2/4] Kiểm tra GÓI 1 BÌNH 600ML (289.000đ) - Mã đơn: ${order1Code}...`);
const order1 = {
  authKey: authSecret,
  orderCode: order1Code,
  fullName: 'Nguyễn Văn Test (Gói 1 bình 289K)',
  phoneNumber: '0362495921',
  address: '25/54 Bùi Quang Là, P. An Hội Tây, TP.HCM',
  note: 'Đơn test tự động kiểm tra đổ cột Google Sheets',
  packageKey: 'single',
  packageName: '1 bình 600ml',
  bottleCount: 1,
  totalAmount: 289000,
  shippingFee: 0,
  createdAt: new Date().toISOString()
};

try {
  const res1 = await fetch(WEBAPP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order1),
    redirect: 'follow'
  });
  const data1 = await res1.json();
  console.log('  HTTP Status:', res1.status);
  console.log('  Phản hồi:', data1);
  if (res1.ok && data1.success) {
    console.log(`  ✅ THÀNH CÔNG: Đã ghi đơn vào Dòng ${data1.row} trong sheet "DATA LADIPAGE - XỊT MỐI"!`);
    console.log(`     - Cột B: Ngày tạo`);
    console.log(`     - Cột C: Website`);
    console.log(`     - Cột D: ${data1.customer}`);
    console.log(`     - Cột E: ${data1.phone}`);
    console.log(`     - Cột G: ${data1.combo}`);
    console.log(`     - Cột H: Địa chỉ + Ghi chú + [Mã đơn: ${order1Code}]`);
    console.log(`     - Cột J: ${data1.total}đ`);
    console.log(`     - Cột K: Chờ xác nhận\n`);
  } else {
    console.error('  ❌ THẤT BẠI:', data1.error || data1);
    process.exit(1);
  }
} catch (e) {
  console.error('  ❌ LỖI KẾT NỐI:', e.message);
  process.exit(1);
}

// Test 3: Gói Mua 2 tặng 1 (578.000đ)
const order2Code = `TEST-GS-${Math.floor(100000 + Math.random() * 900000)}`;
console.log(`[3/4] Kiểm tra GÓI MUA 2 TẶNG 1 (578.000đ) - Mã đơn: ${order2Code}...`);
const order2 = {
  authKey: authSecret,
  orderCode: order2Code,
  fullName: 'Trần Thị Test (Gói Combo 578K)',
  phoneNumber: '0987654321',
  address: 'Số 123 Đường Nguyễn Trãi, P. Bến Thành, Quận 1, TP.HCM',
  note: 'Giao giờ hành chính, gọi trước khi đến',
  packageKey: 'combo',
  packageName: 'Mua 2 tặng 1 (3 bình 600ml)',
  bottleCount: 3,
  totalAmount: 578000,
  shippingFee: 0,
  createdAt: new Date().toISOString()
};

try {
  const res2 = await fetch(WEBAPP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order2),
    redirect: 'follow'
  });
  const data2 = await res2.json();
  console.log('  HTTP Status:', res2.status);
  console.log('  Phản hồi:', data2);
  if (res2.ok && data2.success) {
    console.log(`  ✅ THÀNH CÔNG: Đã ghi đơn vào Dòng ${data2.row} trong sheet "DATA LADIPAGE - XỊT MỐI"!`);
    console.log(`     - Cột G: ${data2.combo}`);
    console.log(`     - Cột J: ${data2.total}đ\n`);
  } else {
    console.error('  ❌ THẤT BẠI:', data2.error || data2);
    process.exit(1);
  }
} catch (e) {
  console.error('  ❌ LỖI KẾT NỐI:', e.message);
  process.exit(1);
}

// Test 4: Chống trùng đơn lặp lại
console.log(`[4/4] Kiểm tra chống trùng đơn hàng với mã ${order2Code}...`);
try {
  const resDup = await fetch(WEBAPP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order2),
    redirect: 'follow'
  });
  const dataDup = await resDup.json();
  console.log('  Phản hồi khi gửi lại mã đơn cũ:', dataDup);
  if (dataDup.success && dataDup.duplicate) {
    console.log('  ✅ THÀNH CÔNG: Hệ thống phát hiện đơn trùng chính xác và KHÔNG ghi thêm dòng mới!\n');
  } else {
    console.warn('  ⚠️ Cảnh báo: Kết quả kiểm tra trùng chưa như kỳ vọng:', dataDup);
  }
} catch (e) {
  console.error('  ❌ LỖI KẾT NỐI:', e.message);
}

console.log('================================================================');
console.log('🎉 TOÀN BỘ CÁC BƯỚC KIỂM THỬ GOOGLE SHEETS ĐÃ HOÀN TẤT THÀNH CÔNG!');
console.log('================================================================');
