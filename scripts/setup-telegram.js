import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, '..', '.env');

dotenv.config({ path: envPath });

// Mask token for security
function maskToken(t) {
  if (!t || t.length < 15) return '***';
  return `${t.substring(0, 6)}...${t.substring(t.length - 4)}`;
}

// Update .env file helper
function updateEnvFile(token, chatId) {
  let content = '';
  if (fs.existsSync(envPath)) {
    content = fs.readFileSync(envPath, 'utf8');
  }

  // Replace or append TELEGRAM_BOT_TOKEN
  if (/^TELEGRAM_BOT_TOKEN=.*$/m.test(content)) {
    content = content.replace(/^TELEGRAM_BOT_TOKEN=.*$/m, `TELEGRAM_BOT_TOKEN="${token}"`);
  } else {
    content += `\nTELEGRAM_BOT_TOKEN="${token}"`;
  }

  // Replace or append TELEGRAM_CHAT_ID
  if (/^TELEGRAM_CHAT_ID=.*$/m.test(content)) {
    content = content.replace(/^TELEGRAM_CHAT_ID=.*$/m, `TELEGRAM_CHAT_ID="${chatId}"`);
  } else {
    content += `\nTELEGRAM_CHAT_ID="${chatId}"`;
  }

  fs.writeFileSync(envPath, content.trim() + '\n', 'utf8');
}

console.log('===============================================================');
console.log('🤖 D&T VIỆT NAM – THIẾT LẬP VÀ XÁC THỰC TELEGRAM BOT TỰ ĐỘNG');
console.log('===============================================================\n');

// 1. Get Token from CLI argument or .env
let token = process.argv[2] ? process.argv[2].trim() : (process.env.TELEGRAM_BOT_TOKEN || '').trim();

// Remove quotes or accidental spaces or 'bot' prefix if user typed it
if (token.startsWith('"') && token.endsWith('"')) token = token.slice(1, -1).trim();
if (token.startsWith("'") && token.endsWith("'")) token = token.slice(1, -1).trim();
if (token.startsWith('bot') && token.includes(':')) token = token.substring(3).trim();

if (!token || token === 'your_telegram_bot_token_here') {
  console.log('⚠️ CHƯA TÌM THẤY BOT TOKEN!');
  console.log('---------------------------------------------------------------');
  console.log('👉 HƯỚNG DẪN NHẬP TOKEN:');
  console.log('1. Mở file .env trong thư mục gốc của dự án.');
  console.log('2. Dán token từ @BotFather vào dòng:');
  console.log('   TELEGRAM_BOT_TOKEN="<dán_token_vào_đây>"');
  console.log('3. Hoặc chạy lệnh trực tiếp kèm token:');
  console.log('   bun scripts/setup-telegram.js <TOKEN_CUA_BAN>\n');
  console.log('📌 LƯU Ý VỀ LỖI 404 KHI GỌI TELEGRAM API:');
  console.log('- Telegram API yêu cầu định dạng: https://api.telegram.org/bot<TOKEN>/<HÀM>');
  console.log('- Lỗi 404 thường do:');
  console.log('  + Quên chữ "bot" ngay trước token (ví dụ gõ /bot123456:... thay vì gõ /123456:...)');
  console.log('  + Để nguyên dấu ngoặc nhọn "<" và ">" trong URL');
  console.log('  + Token bị thiếu số ID trước dấu hai chấm (:)\n');
  process.exit(0);
}

console.log(`[1/5] Đang kiểm tra cấu trúc Token: ${maskToken(token)}...`);

// Validate basic Telegram token regex (e.g. 123456789:ABCDefgh...)
const tokenRegex = /^\d{8,12}:[A-Za-z0-9_-]{30,}$/;
if (!tokenRegex.test(token)) {
  console.log('⚠️ Cảnh báo: Định dạng Token có thể chưa chuẩn Telegram (thường gồm 9-10 chữ số, dấu hai chấm :, và 35 ký tự bí mật).');
}

// 2. Call getMe API
console.log('[2/5] Đang gọi Telegram API getMe để xác thực Bot...');
const getMeUrl = `https://api.telegram.org/bot${token}/getMe`;

try {
  const getMeRes = await fetch(getMeUrl);
  const getMeData = await getMeRes.json();

  if (!getMeRes.ok || !getMeData.ok) {
    console.error('\n❌ XÁC THỰC BOT THẤT BẠI!');
    console.error(`- Mã lỗi HTTP   : ${getMeRes.status}`);
    console.error(`- Mô tả từ Telegram: ${getMeData.description || 'Không có mô tả'}`);
    console.log('\n🔍 NGUYÊN NHÂN VÀ CÁCH KHẮC PHỤC:');
    if (getMeRes.status === 404) {
      console.log('• Lỗi 404: Telegram không tìm thấy endpoint. Hãy chắc chắn Token không chứa dấu cách hoặc ký tự đặc biệt lạ.');
    } else if (getMeRes.status === 401 || getMeData.error_code === 401) {
      console.log('• Lỗi 401 Unauthorized: Token không hợp lệ hoặc đã bị revoke/tạo lại trong @BotFather.');
      console.log('  -> Hãy mở @BotFather trên Telegram, gửi lệnh /token, chọn bot @Dtvietnam_bot để lấy lại Token mới nhất.');
    }
    process.exit(1);
  }

  const botInfo = getMeData.result;
  console.log('\n✅ KẾT NỐI VÀ XÁC THỰC BOT THÀNH CÔNG:');
  console.log(`- Tên Bot     : ${botInfo.first_name}`);
  console.log(`- Username    : @${botInfo.username}`);
  console.log(`- Bot ID      : ${botInfo.id}`);
  console.log(`- Hỗ trợ Group: ${botInfo.can_join_groups ? 'Có' : 'Không'}`);

  // 3. Guide user to send /start and fetch getUpdates
  console.log('\n[3/5] Đang tìm kiếm Chat ID của bạn qua API getUpdates...');
  console.log('👉 HƯỚNG DẪN KÍCH HOẠT:');
  console.log(`1. Mở Telegram, truy cập: https://t.me/${botInfo.username}`);
  console.log(`2. Nhấn nút START hoặc gửi tin nhắn "/start" cho bot @${botInfo.username}`);
  console.log('(Hệ thống đang tự động lắng nghe tin nhắn trong 60 giây...)\n');

  let detectedChatId = null;
  let detectedChatInfo = null;

  for (let attempt = 1; attempt <= 20; attempt++) {
    process.stdout.write(`\rĐang kiểm tra tin nhắn mới (lần ${attempt}/20)... `);
    try {
      const updatesRes = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
      const updatesData = await updatesRes.json();

      if (updatesData.ok && Array.isArray(updatesData.result) && updatesData.result.length > 0) {
        // Take the latest interaction
        const latestUpdate = updatesData.result[updatesData.result.length - 1];
        const msg = latestUpdate.message || latestUpdate.channel_post || latestUpdate.my_chat_member;
        if (msg && msg.chat && msg.chat.id) {
          detectedChatId = String(msg.chat.id);
          detectedChatInfo = msg.chat;
          break;
        }
      }
    } catch (e) {
      // ignore retry errors
    }

    // Wait 3 seconds before next poll
    await new Promise(r => setTimeout(r, 3000));
  }

  console.log(''); // newline

  if (!detectedChatId) {
    console.log('\n⚠️ Chưa phát hiện thấy tin nhắn mới từ bạn gửi cho bot @' + botInfo.username);
    console.log('Vui lòng đảm bảo bạn đã mở https://t.me/' + botInfo.username + ' và gửi ít nhất 1 tin nhắn (ví dụ: "/start").');
    console.log('Sau đó chạy lại lệnh này để hệ thống tự động bắt Chat ID.');
    process.exit(0);
  }

  console.log('\n🎉 ĐÃ TỰ ĐỘNG BẮT ĐƯỢC CHAT ID!');
  console.log(`- Chat ID    : ${detectedChatId}`);
  console.log(`- Người gửi  : ${detectedChatInfo.first_name || ''} ${detectedChatInfo.last_name || ''} (@${detectedChatInfo.username || 'Không có username'})`);
  console.log(`- Loại Chat  : ${detectedChatInfo.type}`);

  // 4. Save to .env
  console.log('\n[4/5] Đang tự động lưu Token và Chat ID vào file .env...');
  updateEnvFile(token, detectedChatId);
  console.log('✅ Đã cập nhật file .env an toàn trên máy chủ!');

  // 5. Send Test Message
  console.log('\n[5/5] Đang gửi tin nhắn thử nghiệm tới Telegram...');
  const timeVN = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false });
  const testMessage = `🔔 <b>Kết nối Telegram D&T thành công!</b>\n\n` +
    `🤖 <b>Bot:</b> @${botInfo.username} (${botInfo.first_name})\n` +
    `👤 <b>Người nhận:</b> ${detectedChatInfo.first_name || 'Admin'} (@${detectedChatInfo.username || 'N/A'})\n` +
    `💬 <b>Chat ID:</b> <code>${detectedChatId}</code>\n` +
    `🕒 <b>Thời gian:</b> ${timeVN}\n\n` +
    `🚀 <i>Hệ thống thông báo đơn hàng tự động từ website D&T đã sẵn sàng! Mỗi khi khách đặt hàng trên Landing Page, đơn hàng sẽ được gửi trực tiếp tới đây tức thì.</i>`;

  const sendRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: detectedChatId,
      text: testMessage,
      parse_mode: 'HTML'
    })
  });

  const sendData = await sendRes.json();

  if (sendRes.ok && sendData.ok) {
    console.log('\n===============================================================');
    console.log('🎉 THÀNH CÔNG RỰC RỠ! Tin nhắn xác nhận đã gửi về Telegram!');
    console.log('===============================================================');
    console.log('Vui lòng mở ứng dụng Telegram để kiểm tra tin nhắn vừa nhận.');
    console.log('Form đặt hàng trên Landing Page giờ đây sẽ tự động bắn đơn hàng về Telegram ngay khi khách đặt!');
  } else {
    console.error('\n❌ Gửi tin nhắn thử nghiệm thất bại:', sendData);
  }

} catch (err) {
  console.error('\n❌ LỖI KẾT NỐI:', err.message);
}
