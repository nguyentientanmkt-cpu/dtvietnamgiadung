import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Load environment variables from .env
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cache & Deduplication store (stores order codes with expiration)
const processedOrders = new Map();
const ORDER_DEDUPE_TTL = 15 * 60 * 1000; // 15 minutes

// Clean up old deduplication entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [code, timestamp] of processedOrders.entries()) {
    if (now - timestamp > ORDER_DEDUPE_TTL) {
      processedOrders.delete(code);
    }
  }
}, 5 * 60 * 1000);

// Persistence store for orders backup
const DATA_DIR = path.join(__dirname, 'data');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');

function saveOrderToStorage(order) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    let orders = [];
    if (fs.existsSync(ORDERS_FILE)) {
      try {
        orders = JSON.parse(fs.readFileSync(ORDERS_FILE, 'utf8') || '[]');
      } catch (e) {
        orders = [];
      }
    }
    orders.push(order);
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2), 'utf8');
  } catch (err) {
    console.error('[Storage Error] Failed to persist order:', err.message);
  }
}

// Format Vietnam time (UTC+7)
function getVietnamTimeString(dateInput) {
  const date = dateInput ? new Date(dateInput) : new Date();
  return date.toLocaleString('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

// Format currency
function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
}

// Escape HTML for Telegram message
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Build Telegram Notification Message matching user template
function buildTelegramMessage(order) {
  const customerName = escapeHtml(order.fullName || 'Khách hàng');
  const phone = escapeHtml(order.phoneNumber || 'Chưa cung cấp');
  const address = escapeHtml(order.address || 'Chưa cung cấp');
  const note = order.note ? escapeHtml(order.note.trim()) : '';

  // Format product name cleanly
  let productText = '';
  if (order.packageKey === 'combo' || (order.packageName && order.packageName.toLowerCase().includes('mua 2'))) {
    productText = 'Mua 2 tặng 1 (3 bình 600ml)';
  } else if (order.packageKey === 'single' || (order.packageName && order.packageName.toLowerCase().includes('1 bình'))) {
    productText = '1 bình 600ml';
  } else {
    productText = escapeHtml(order.packageName || 'Bình xịt diệt mối Chaindrite Thái Lan');
  }

  // Format total price
  let priceText = '';
  if (order.totalAmount === 578000 || productText.includes('Mua 2')) {
    priceText = '578.000đ';
  } else if (order.totalAmount === 289000 || productText.includes('1 bình')) {
    priceText = '289.000đ';
  } else if (order.totalAmount) {
    priceText = formatVND(order.totalAmount);
  } else {
    priceText = '578.000đ';
  }

  const shippingText = 'Miễn phí';
  const paymentText = order.paymentMethod ? (order.paymentMethod.toUpperCase() === 'VIETQR' ? 'Chuyển khoản VietQR' : 'COD') : 'COD';
  const timeText = getVietnamTimeString(order.createdAt);

  let message = `🔔 <b>ĐƠN HÀNG MỚI – D&T</b>\n\n`;
  message += `👤 <b>Khách hàng:</b> ${customerName}\n\n`;
  message += `📞 <b>SĐT:</b> ${phone}\n\n`;
  message += `📍 <b>Địa chỉ:</b> ${address}\n\n`;
  if (note) {
    message += `📝 <b>Ghi chú:</b> ${note}\n\n`;
  }
  message += `📦 <b>Sản phẩm:</b> ${productText}\n\n`;
  message += `💰 <b>Tổng tiền:</b> ${priceText}\n\n`;
  message += `🚚 <b>Vận chuyển:</b> ${shippingText}\n\n`;
  message += `💵 <b>Thanh toán:</b> ${paymentText}\n\n`;
  message += `🕒 <b>Thời gian:</b> ${timeText}`;

  if (order.orderCode) {
    message += `\n\n🔖 <b>Mã đơn:</b> <code>${escapeHtml(order.orderCode)}</code>`;
  }

  return message;
}

// Send message to Telegram API
async function sendTelegramMessage(text, customToken = null, customChatId = null) {
  const token = customToken || process.env.TELEGRAM_BOT_TOKEN;
  const chatId = customChatId || process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId || token === 'your_telegram_bot_token_here' || chatId === 'your_telegram_chat_id_here') {
    const errorMsg = 'Chưa cấu hình TELEGRAM_BOT_TOKEN hoặc TELEGRAM_CHAT_ID trong .env';
    console.warn(`[Telegram Warning] ${errorMsg}`);
    return {
      success: false,
      configured: false,
      error: errorMsg
    };
  }

  const apiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    const data = await response.json();

    if (!response.ok || !data.ok) {
      console.error('[Telegram API Error]', data);
      return {
        success: false,
        configured: true,
        error: data.description || 'Lỗi gửi tin nhắn Telegram',
        details: data
      };
    }

    return {
      success: true,
      configured: true,
      messageId: data.result ? data.result.message_id : null
    };
  } catch (err) {
    clearTimeout(timeoutId);
    console.error('[Telegram Network Error]', err.message);
    return {
      success: false,
      configured: true,
      error: err.name === 'AbortError' ? 'Telegram API timeout sau 8 giây' : err.message
    };
  }
}

// ---------------- API ENDPOINTS ----------------

// 1. Order submission API
app.post('/api/order', async (req, res) => {
  try {
    const order = req.body;

    if (!order || typeof order !== 'object') {
      return res.status(400).json({ success: false, error: 'Dữ liệu đơn hàng không hợp lệ' });
    }

    // Basic validation
    const fullName = (order.fullName || '').trim();
    const phoneNumber = (order.phoneNumber || '').trim();
    const address = (order.address || '').trim();

    if (!fullName || fullName.length < 2) {
      return res.status(400).json({ success: false, error: 'Họ tên khách hàng không được để trống' });
    }
    if (!phoneNumber || phoneNumber.length < 9) {
      return res.status(400).json({ success: false, error: 'Số điện thoại không hợp lệ' });
    }
    if (!address || address.length < 4) {
      return res.status(400).json({ success: false, error: 'Địa chỉ không được để trống' });
    }

    // Ensure orderCode
    const orderCode = order.orderCode || `MD-${Math.floor(100000 + Math.random() * 900000)}`;
    order.orderCode = orderCode;
    order.createdAt = order.createdAt || new Date().toISOString();

    // Deduplication check
    const isDuplicate = processedOrders.has(orderCode);
    if (isDuplicate) {
      console.log(`[Order API] Bỏ qua gửi Telegram do đơn ${orderCode} đã được gửi trước đó (trùng lặp).`);
      return res.json({
        success: true,
        orderCode: orderCode,
        duplicate: true,
        message: 'Đơn hàng đã được ghi nhận trước đó.'
      });
    }

    // Mark as processed
    processedOrders.set(orderCode, Date.now());

    // 1. Persist to server storage
    saveOrderToStorage(order);
    console.log(`[Order API] Đã lưu thành công đơn hàng ${orderCode} từ ${fullName} (${phoneNumber})`);

    // 2. Format & Send Telegram notification
    const telegramText = buildTelegramMessage(order);
    const telegramResult = await sendTelegramMessage(telegramText);

    if (telegramResult.success) {
      console.log(`[Order API] Đã gửi thông báo đơn hàng ${orderCode} về Telegram thành công!`);
    } else {
      console.warn(`[Order API] Đơn hàng ${orderCode} đã lưu nhưng Telegram thông báo thất bại:`, telegramResult.error);
    }

    // Always return success to client so user experience is smooth and guaranteed
    return res.json({
      success: true,
      orderCode: orderCode,
      telegram: {
        sent: telegramResult.success,
        configured: telegramResult.configured,
        error: telegramResult.error || null
      },
      message: 'Đặt hàng thành công!'
    });
  } catch (error) {
    console.error('[Order API Error]', error);
    // Even on error, return safe response so customer sees confirmation
    return res.status(500).json({
      success: false,
      error: error.message || 'Lỗi xử lý đơn hàng trên máy chủ'
    });
  }
});

// 2. Test Telegram Bot API
app.all('/api/test-telegram', async (req, res) => {
  try {
    const customToken = (req.body && req.body.token) || req.query.token || null;
    const customChatId = (req.body && req.body.chat_id) || req.query.chat_id || null;

    const token = customToken || process.env.TELEGRAM_BOT_TOKEN;
    const chatId = customChatId || process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId || token === 'your_telegram_bot_token_here' || chatId === 'your_telegram_chat_id_here') {
      return res.status(400).json({
        success: false,
        error: 'Chưa cấu hình TELEGRAM_BOT_TOKEN hoặc TELEGRAM_CHAT_ID trong .env',
        instructions: {
          step1: 'Mở file .env trên máy chủ',
          step2: 'Thêm dòng TELEGRAM_BOT_TOKEN="<token của bạn>"',
          step3: 'Thêm dòng TELEGRAM_CHAT_ID="<chat_id của bạn>"',
          step4: 'Khởi động lại backend hoặc gọi lại API này'
        }
      });
    }

    const testTime = getVietnamTimeString();
    const testMessage = `🔔 <b>TEST KẾT NỐI TELEGRAM BOT – D&T VIỆT NAM</b>\n\n` +
      `✅ <b>Trạng thái:</b> Kết nối thành công!\n` +
      `🤖 <b>Bot:</b> @Dtvietnam_bot\n` +
      `📍 <b>Landing Page:</b> Bình Xịt Diệt Mối D&T Thái Lan\n` +
      `🕒 <b>Thời gian kiểm tra:</b> ${testTime}\n\n` +
      `<i>Hệ thống thông báo đơn hàng tự động đã sẵn sàng nhận đơn!</i>`;

    const result = await sendTelegramMessage(testMessage, token, chatId);

    if (result.success) {
      return res.json({
        success: true,
        message: 'Gửi tin nhắn thử nghiệm thành công về Telegram @Dtvietnam_bot!',
        chatId: chatId,
        time: testTime
      });
    } else {
      return res.status(500).json({
        success: false,
        error: result.error,
        details: result.details || null
      });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// 3. Helper to get Telegram Updates (Find Chat ID)
app.get('/api/telegram-get-updates', async (req, res) => {
  try {
    const token = req.query.token || process.env.TELEGRAM_BOT_TOKEN;
    if (!token || token === 'your_telegram_bot_token_here') {
      return res.status(400).json({
        success: false,
        error: 'Chưa có TELEGRAM_BOT_TOKEN. Vui lòng cung cấp token trong query ?token=... hoặc cấu hình trong .env'
      });
    }

    const resp = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
    const data = await resp.json();

    if (!data.ok) {
      return res.status(400).json({ success: false, error: data.description, data });
    }

    // Extract chat IDs
    const chats = [];
    if (Array.isArray(data.result)) {
      data.result.forEach(update => {
        const msg = update.message || update.channel_post || update.my_chat_member;
        if (msg && msg.chat) {
          chats.push({
            chat_id: msg.chat.id,
            type: msg.chat.type,
            title: msg.chat.title || null,
            username: msg.chat.username || null,
            first_name: msg.chat.first_name || null,
            date: msg.date ? new Date(msg.date * 1000).toISOString() : null,
            text: msg.text || null
          });
        }
      });
    }

    return res.json({
      success: true,
      instruction: 'Hãy gửi tin nhắn /start tới @Dtvietnam_bot trước khi gọi API này để thấy Chat ID của bạn.',
      detectedChats: chats,
      rawUpdatesCount: data.result ? data.result.length : 0
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// ---------------- STATIC SERVING & FALLBACK ----------------

const DIST_DIR = path.join(__dirname, 'dist');

// Landing page redirect rules
app.get('/binh-xit-diet-moi-mot-kien-gian-con-trung', (req, res) => {
  res.redirect(301, '/binh-xit-diet-moi-mot-kien-gian-con-trung/');
});
app.get('/ladixitmoithailan', (req, res) => {
  res.redirect(301, '/binh-xit-diet-moi-mot-kien-gian-con-trung/');
});
app.get('/ladixitmoithailan/*', (req, res) => {
  res.redirect(301, '/binh-xit-diet-moi-mot-kien-gian-con-trung/');
});

// Serve dist directory if exists
if (fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR, {
    maxAge: '1d',
    setHeaders: (res, filePath) => {
      if (/\.(js|css|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
    }
  }));

  // SPA fallback for React App
  app.get('*', (req, res) => {
    const indexPath = path.join(DIST_DIR, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send('Not Found');
    }
  });
}

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`[D&T Server] Backend server running on http://0.0.0.0:${PORT}`);
  console.log(`[D&T Server] Telegram Bot Token configured: ${process.env.TELEGRAM_BOT_TOKEN ? 'YES' : 'NO'}`);
  console.log(`[D&T Server] Telegram Chat ID configured: ${process.env.TELEGRAM_CHAT_ID ? 'YES' : 'NO'}`);
});
