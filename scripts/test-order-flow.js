import http from 'http';

// We run this test against http://127.0.0.1:5005
process.env.PORT = '5005';
// We set test placeholder env
process.env.TELEGRAM_BOT_TOKEN = '123456789:TEST_TOKEN_ABC';
process.env.TELEGRAM_CHAT_ID = '987654321';

console.log('--- ĐANG KHỞI CHẠY TEST SERVER TRÊN CỔNG 5005 ---');
await import('../server.js');

// Helper to make HTTP request
function request(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: '127.0.0.1',
      port: 5005,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: data });
        }
      });
    });

    req.on('error', reject);
    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

// 1. Test Order Submission
console.log('\n1. Kiểm tra gửi đơn hàng mới tới POST /api/order...');
const sampleOrder = {
  orderCode: 'MD-TEST-999',
  fullName: 'Nguyễn Văn Test',
  phoneNumber: '0362495921',
  address: '25/54 Bùi Quang Là, P. An Hội Tây, TP.HCM',
  note: 'Giao hàng giờ hành chính',
  packageKey: 'combo',
  packageName: 'GÓI 2: Mua 2 Tặng 1 (Tổng 3 bình - 578.000đ)',
  bottleCount: 3,
  totalAmount: 578000,
  shippingFee: 0,
  createdAt: new Date().toISOString()
};

const orderRes = await request('POST', '/api/order', sampleOrder);
console.log('Status code:', orderRes.status);
console.log('Response body:', orderRes.body);

if (orderRes.body.success && orderRes.body.orderCode === 'MD-TEST-999') {
  console.log('✅ POST /api/order thành công!');
} else {
  console.error('❌ POST /api/order thất bại:', orderRes);
  process.exit(1);
}

// 2. Test Deduplication
console.log('\n2. Kiểm tra tính năng chống trùng lặp (Deduplication)...');
const dupRes = await request('POST', '/api/order', sampleOrder);
console.log('Duplicate test status:', dupRes.status);
console.log('Duplicate test body:', dupRes.body);

if (dupRes.body.success && dupRes.body.duplicate === true) {
  console.log('✅ Tính năng Deduplication hoạt động chính xác (đã nhận diện đơn trùng lặp và không gửi lặp Telegram)!');
} else {
  console.error('❌ Deduplication thất bại:', dupRes);
  process.exit(1);
}

// 3. Test getUpdates helper endpoint
console.log('\n3. Kiểm tra GET /api/telegram-get-updates...');
const updatesRes = await request('GET', '/api/telegram-get-updates');
console.log('Updates endpoint status:', updatesRes.status);
console.log('Updates endpoint body:', updatesRes.body);

console.log('\n🎉 TẤT CẢ CÁC BƯỚC TEST LOCAL ĐỀU ĐẠT CHUẨN 100%!');
process.exit(0);
