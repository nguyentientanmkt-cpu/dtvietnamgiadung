import dotenv from 'dotenv';

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

console.log('====================================================');
console.log('🤖 KIỂM TRA KẾT NỐI TELEGRAM BOT (@Dtvietnam_bot)');
console.log('====================================================');

if (!token || token === 'your_telegram_bot_token_here') {
  console.error('❌ LỖI: Chưa cấu hình TELEGRAM_BOT_TOKEN trong file .env');
  console.log('\nHướng dẫn khắc phục:');
  console.log('1. Mở file .env');
  console.log('2. Đặt giá trị TELEGRAM_BOT_TOKEN="<token_lay_tu_BotFather>"');
  console.log('3. Chạy lại lệnh: bun scripts/test-telegram.js');
  process.exit(1);
}

if (!chatId || chatId === 'your_telegram_chat_id_here') {
  console.error('❌ LỖI: Chưa cấu hình TELEGRAM_CHAT_ID trong file .env');
  console.log('\nHướng dẫn khắc phục:');
  console.log('1. Nhắn tin /start cho bot @Dtvietnam_bot trên Telegram');
  console.log('2. Chạy lệnh: bun scripts/get-chat-id.js để xem Chat ID');
  console.log('3. Nhập Chat ID vào file .env: TELEGRAM_CHAT_ID="<chat_id>"');
  process.exit(1);
}

console.log(`🔑 Bot Token : [Đã cấu hình - Bảo mật ẩn 100%]`);
console.log(`💬 Chat ID   : ${chatId}`);

const timeVN = new Date().toLocaleString('vi-VN', {
  timeZone: 'Asia/Ho_Chi_Minh',
  hour12: false
});

const message = `🔔 <b>TEST KẾT NỐI TELEGRAM BOT – D&T VIỆT NAM</b>\n\n` +
  `✅ <b>Trạng thái:</b> Kết nối thành công!\n` +
  `🤖 <b>Bot:</b> @Dtvietnam_bot\n` +
  `📍 <b>Landing Page:</b> Bình Xịt Diệt Mối D&T Thái Lan\n` +
  `🕒 <b>Thời gian kiểm tra:</b> ${timeVN}\n\n` +
  `<i>Hệ thống thông báo đơn hàng tự động đã sẵn sàng nhận đơn!</i>`;

console.log('\nĐang gửi tin nhắn thử nghiệm tới Telegram...');

try {
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML'
    })
  });

  const data = await res.json();

  if (res.ok && data.ok) {
    console.log('\n🎉 THÀNH CÔNG! Tin nhắn đã được gửi tới Telegram!');
    console.log(`Message ID: ${data.result?.message_id}`);
    console.log('Vui lòng mở ứng dụng Telegram để kiểm tra tin nhắn vừa nhận.');
  } else {
    console.error('\n❌ GỬI THẤT BẠI từ Telegram API:');
    console.error(data);
  }
} catch (err) {
  console.error('\n❌ LỖI KẾT NỐI MẠNG:', err.message);
}
