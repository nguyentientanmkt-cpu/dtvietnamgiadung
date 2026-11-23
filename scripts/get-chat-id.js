import dotenv from 'dotenv';

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;

console.log('====================================================');
console.log('🔍 HƯỚNG DẪN LẤY CHAT ID TỪ TELEGRAM BOT (@Dtvietnam_bot)');
console.log('====================================================');

if (!token || token === 'your_telegram_bot_token_here') {
  console.error('❌ LỖI: Chưa cấu hình TELEGRAM_BOT_TOKEN trong file .env');
  console.log('Vui lòng nhập Token cấp từ @BotFather vào file .env trước.');
  process.exit(1);
}

console.log(`Đang gọi Telegram API getUpdates với Token: ${token.substring(0, 8)}...`);

try {
  const res = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
  const data = await res.json();

  if (!res.ok || !data.ok) {
    console.error('❌ Telegram API trả về lỗi:', data);
    process.exit(1);
  }

  const updates = data.result || [];
  if (updates.length === 0) {
    console.log('\n⚠️ Chưa có tin nhắn nào gửi tới Bot @Dtvietnam_bot!');
    console.log('\n👉 CÁC BƯỚC CẦN LÀM NGAY:');
    console.log('1. Mở ứng dụng Telegram trên điện thoại hoặc máy tính.');
    console.log('2. Tìm kiếm bot: @Dtvietnam_bot (hoặc nhấn vào liên kết https://t.me/Dtvietnam_bot).');
    console.log('3. Nhấn nút START hoặc gửi tin nhắn bất kỳ (ví dụ: "chao bot" hoặc "/start").');
    console.log('4. Chạy lại lệnh này: bun scripts/get-chat-id.js');
    process.exit(0);
  }

  console.log(`\n✅ Tìm thấy ${updates.length} tương tác gần nhất:\n`);
  const seenChats = new Set();

  updates.forEach((u, i) => {
    const msg = u.message || u.channel_post || u.my_chat_member;
    if (msg && msg.chat) {
      const c = msg.chat;
      if (!seenChats.has(c.id)) {
        seenChats.add(c.id);
        console.log(`-----------------------------------------------`);
        console.log(`💬 Chat ID: ${c.id}`);
        console.log(`Loại Chat : ${c.type} (${c.type === 'private' ? 'Chat riêng' : 'Nhóm'})`);
        console.log(`Tên       : ${c.first_name || ''} ${c.last_name || ''} ${c.title || ''}`.trim());
        console.log(`Username  : @${c.username || 'Không có'}`);
        console.log(`Tin nhắn  : "${msg.text || ''}"`);
        console.log(`Thời gian : ${new Date((msg.date || 0) * 1000).toLocaleString('vi-VN')}`);
      }
    }
  });

  console.log(`-----------------------------------------------`);
  console.log('\n👉 HÃY SAO CHÉP CHAT ID TRÊN VÀ DÁN VÀO FILE .env:');
  console.log('TELEGRAM_CHAT_ID="<Chat ID ở trên>"');
} catch (err) {
  console.error('❌ Lỗi kết nối:', err.message);
}
