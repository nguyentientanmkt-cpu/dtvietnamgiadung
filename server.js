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
const CONFIG_FILE = path.join(DATA_DIR, 'telegram_config.json');

// Load persistent config if env not set
try {
  if (fs.existsSync(CONFIG_FILE)) {
    const saved = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8') || '{}');
    if (saved.token && (!process.env.TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN === 'your_telegram_bot_token_here')) {
      process.env.TELEGRAM_BOT_TOKEN = saved.token;
    }
    if (saved.chatId && (!process.env.TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHAT_ID === 'your_telegram_chat_id_here')) {
      process.env.TELEGRAM_CHAT_ID = saved.chatId;
    }
    if (saved.googleSheetUrl && (!process.env.GOOGLE_SHEET_WEBAPP_URL || process.env.GOOGLE_SHEET_WEBAPP_URL === 'your_google_sheet_webapp_url_here')) {
      process.env.GOOGLE_SHEET_WEBAPP_URL = saved.googleSheetUrl;
    }
  }
} catch (e) {
  console.warn('[Config Load Error]', e.message);
}

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

  const isTest = order.isTest || /test|thử|demo/i.test(order.fullName || '') || /test|thử|demo/i.test(order.note || '');
  let message = isTest ? `🔔 <b>ĐƠN HÀNG MỚI – D&T [ĐƠN THỬ NGHIỆM]</b>\n\n` : `🔔 <b>ĐƠN HÀNG MỚI – D&T</b>\n\n`;
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

// Send order to Google Sheets Web App URL
async function sendGoogleSheetOrder(order, customUrl = null) {
  const webappUrl = customUrl || process.env.GOOGLE_SHEET_WEBAPP_URL;
  const authSecret = process.env.GOOGLE_SHEET_AUTH_SECRET || 'DT_VIETNAM_SECRET_2026';

  if (!webappUrl || webappUrl === 'your_google_sheet_webapp_url_here') {
    const errorMsg = 'Chưa cấu hình GOOGLE_SHEET_WEBAPP_URL trong .env';
    console.warn(`[Google Sheets Warning] ${errorMsg}`);
    return {
      success: false,
      configured: false,
      error: errorMsg
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000); // 12s timeout

  try {
    const payload = {
      authKey: authSecret,
      orderCode: order.orderCode,
      fullName: order.fullName,
      phoneNumber: order.phoneNumber,
      address: order.address,
      note: order.note || '',
      packageKey: order.packageKey,
      packageName: order.packageName,
      bottleCount: order.bottleCount,
      totalAmount: order.totalAmount,
      shippingFee: order.shippingFee || 0,
      createdAt: order.createdAt
    };

    const response = await fetch(webappUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      redirect: 'follow', // Quan trọng: theo sát redirect 302 của Google Apps Script
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    const data = await response.json();

    if (!response.ok || !data.success) {
      console.error('[Google Sheets API Error]', data);
      return {
        success: false,
        configured: true,
        error: data.error || 'Lỗi lưu vào Google Sheets',
        details: data
      };
    }

    return {
      success: true,
      configured: true,
      row: data.row || null,
      message: data.message || 'Đã lưu đơn vào Google Sheets'
    };
  } catch (err) {
    clearTimeout(timeoutId);
    console.error('[Google Sheets Network Error]', err.message);
    return {
      success: false,
      configured: true,
      error: err.name === 'AbortError' ? 'Google Sheets timeout sau 12 giây' : err.message
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
      console.log(`[Order API] Bỏ qua gửi Telegram & Google Sheet do đơn ${orderCode} đã được gửi trước đó (trùng lặp).`);
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

    // 2. Format & Send Telegram notification AND Google Sheets in parallel (Independent pipelines)
    const telegramText = buildTelegramMessage(order);
    const [telegramOutcome, sheetOutcome] = await Promise.allSettled([
      sendTelegramMessage(telegramText),
      sendGoogleSheetOrder(order)
    ]);

    const telegramResult = telegramOutcome.status === 'fulfilled'
      ? telegramOutcome.value
      : { success: false, configured: false, error: telegramOutcome.reason?.message };

    const sheetResult = sheetOutcome.status === 'fulfilled'
      ? sheetOutcome.value
      : { success: false, configured: false, error: sheetOutcome.reason?.message };

    if (telegramResult.success) {
      console.log(`[Order API] Đã gửi thông báo đơn hàng ${orderCode} về Telegram thành công!`);
    } else if (telegramResult.configured) {
      console.warn(`[Order API] Telegram thất bại cho đơn ${orderCode}:`, telegramResult.error);
    }

    if (sheetResult.success) {
      console.log(`[Order API] Đã lưu đơn hàng ${orderCode} vào Google Sheets thành công (Dòng ${sheetResult.row || 'N/A'})!`);
    } else if (sheetResult.configured) {
      console.warn(`[Order API] Google Sheets thất bại cho đơn ${orderCode}:`, sheetResult.error);
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
      googleSheet: {
        sent: sheetResult.success,
        configured: sheetResult.configured,
        error: sheetResult.error || null
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

// 2b. Test Google Sheets Web App Connection
app.all('/api/test-google-sheets', async (req, res) => {
  try {
    const customUrl = (req.body && req.body.url) || req.query.url || process.env.GOOGLE_SHEET_WEBAPP_URL;

    if (!customUrl || customUrl === 'your_google_sheet_webapp_url_here') {
      return res.status(400).json({
        success: false,
        error: 'Chưa cấu hình GOOGLE_SHEET_WEBAPP_URL trong .env hoặc tham số ?url=...',
        instructions: {
          step1: 'Triển khai Google Apps Script dưới dạng Ứng dụng web (Web App)',
          step2: 'Đặt quyền truy cập: "Bất kỳ ai" (Anyone)',
          step3: 'Sao chép URL kết thúc bằng /exec',
          step4: 'Cấu hình GOOGLE_SHEET_WEBAPP_URL trong .env hoặc gọi API này kèm ?url=...'
        }
      });
    }

    const sampleOrder = {
      orderCode: `TEST-GS-${Math.floor(100000 + Math.random() * 900000)}`,
      fullName: 'Kiểm Tra Kết Nối (D&T Vietnam)',
      phoneNumber: '0362495921',
      address: '25/54 Bùi Quang Là, P. An Hội Tây, TP.HCM',
      note: 'Tin nhắn thử nghiệm kiểm tra đồng bộ Google Sheets',
      packageKey: 'combo',
      packageName: 'GÓI 2: Mua 2 Tặng 1 (Tổng 3 bình - 578.000đ)',
      bottleCount: 3,
      totalAmount: 578000,
      shippingFee: 0,
      createdAt: new Date().toISOString()
    };

    const result = await sendGoogleSheetOrder(sampleOrder, customUrl);
    return res.json(result);
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// 2c. Save Google Sheets Web App URL directly to backend
app.all('/api/save-google-sheets-url', async (req, res) => {
  try {
    let url = (req.body && req.body.url) || req.query.url || null;
    if (!url || !url.startsWith('https://script.google.com/')) {
      return res.status(400).json({
        success: false,
        error: 'URL Web App không hợp lệ. URL phải bắt đầu bằng https://script.google.com/.../exec'
      });
    }

    url = url.trim();
    process.env.GOOGLE_SHEET_WEBAPP_URL = url;

    // Save to .env
    const envPath = path.join(__dirname, '.env');
    let content = '';
    if (fs.existsSync(envPath)) content = fs.readFileSync(envPath, 'utf8');
    if (/^GOOGLE_SHEET_WEBAPP_URL=.*$/m.test(content)) {
      content = content.replace(/^GOOGLE_SHEET_WEBAPP_URL=.*$/m, `GOOGLE_SHEET_WEBAPP_URL="${url}"`);
    } else {
      content += `\nGOOGLE_SHEET_WEBAPP_URL="${url}"`;
    }
    fs.writeFileSync(envPath, content.trim() + '\n', 'utf8');

    // Save to CONFIG_FILE
    try {
      if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
      let currentConfig = {};
      if (fs.existsSync(CONFIG_FILE)) {
        try { currentConfig = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8') || '{}'); } catch(e) {}
      }
      currentConfig.googleSheetUrl = url;
      fs.writeFileSync(CONFIG_FILE, JSON.stringify(currentConfig, null, 2), 'utf8');
    } catch(e) {}

    return res.json({
      success: true,
      message: 'Đã lưu và kích hoạt GOOGLE_SHEET_WEBAPP_URL thành công trên backend!',
      url: url
    });
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

// Helper to update .env on backend
function updateEnvFile(token, chatId) {
  const envPath = path.join(__dirname, '.env');
  let content = '';
  if (fs.existsSync(envPath)) {
    content = fs.readFileSync(envPath, 'utf8');
  }
  if (token) {
    if (/^TELEGRAM_BOT_TOKEN=.*$/m.test(content)) {
      content = content.replace(/^TELEGRAM_BOT_TOKEN=.*$/m, `TELEGRAM_BOT_TOKEN="${token}"`);
    } else {
      content += `\nTELEGRAM_BOT_TOKEN="${token}"`;
    }
    process.env.TELEGRAM_BOT_TOKEN = token;
  }
  if (chatId) {
    if (/^TELEGRAM_CHAT_ID=.*$/m.test(content)) {
      content = content.replace(/^TELEGRAM_CHAT_ID=.*$/m, `TELEGRAM_CHAT_ID="${chatId}"`);
    } else {
      content += `\nTELEGRAM_CHAT_ID="${chatId}"`;
    }
    process.env.TELEGRAM_CHAT_ID = chatId;
  }
  fs.writeFileSync(envPath, content.trim() + '\n', 'utf8');
}

// 4. Verify Bot Token (getMe)
app.all('/api/telegram-verify-token', async (req, res) => {
  try {
    let token = (req.body && req.body.token) || req.query.token || process.env.TELEGRAM_BOT_TOKEN;
    if (token) {
      token = token.trim();
      if (token.startsWith('"') && token.endsWith('"')) token = token.slice(1, -1).trim();
      if (token.startsWith("'") && token.endsWith("'")) token = token.slice(1, -1).trim();
      if (token.startsWith('bot') && token.includes(':')) token = token.substring(3).trim();
    }

    if (!token || token === 'your_telegram_bot_token_here') {
      return res.status(400).json({
        success: false,
        error: 'Chưa cung cấp Bot Token. Hãy truyền ?token=... hoặc cấu hình TELEGRAM_BOT_TOKEN trong .env',
        cause404Explanation: 'Lưu ý: Telegram API chỉ chấp nhận định dạng https://api.telegram.org/bot<TOKEN>/getMe (chữ bot viết liền với Token). Nếu thiếu chữ bot hoặc sai token, Telegram sẽ trả về lỗi 404.'
      });
    }

    const resp = await fetch(`https://api.telegram.org/bot${token}/getMe`);
    const data = await resp.json();

    if (!resp.ok || !data.ok) {
      let explanation = data.description || 'Không thể xác thực Bot Token';
      if (resp.status === 404) {
        explanation = 'Lỗi 404 Not Found từ Telegram: URL không hợp lệ hoặc Token sai định dạng (kiểm tra lại số ID và ký tự bí mật).';
      } else if (resp.status === 401 || data.error_code === 401) {
        explanation = 'Lỗi 401 Unauthorized: Token không đúng hoặc đã bị thu hồi/đổi mới trong @BotFather.';
      }
      return res.status(resp.status || 400).json({
        success: false,
        httpStatus: resp.status,
        error: explanation,
        raw: data
      });
    }

    return res.json({
      success: true,
      bot: {
        id: data.result.id,
        first_name: data.result.first_name,
        username: data.result.username,
        can_join_groups: data.result.can_join_groups
      },
      message: `Xác thực Bot @${data.result.username} thành công!`
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// 5. Auto Setup Telegram (Verify -> Fetch Chat ID -> Save .env -> Send Test message)
app.all('/api/telegram-auto-setup', async (req, res) => {
  try {
    let token = (req.body && req.body.token) || req.query.token || process.env.TELEGRAM_BOT_TOKEN;
    if (token) {
      token = token.trim();
      if (token.startsWith('"') && token.endsWith('"')) token = token.slice(1, -1).trim();
      if (token.startsWith("'") && token.endsWith("'")) token = token.slice(1, -1).trim();
      if (token.startsWith('bot') && token.includes(':')) token = token.substring(3).trim();
    }

    if (!token || token === 'your_telegram_bot_token_here') {
      return res.status(400).json({
        success: false,
        error: 'Chưa có TELEGRAM_BOT_TOKEN trong .env hoặc tham số truyền vào'
      });
    }

    // Step 1: getMe
    const meRes = await fetch(`https://api.telegram.org/bot${token}/getMe`);
    const meData = await meRes.json();
    if (!meRes.ok || !meData.ok) {
      return res.status(400).json({
        success: false,
        step: 'getMe',
        error: meData.description || 'Lỗi xác thực Token với Telegram'
      });
    }
    const bot = meData.result;

    // Step 2: getUpdates
    const upRes = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
    const upData = await upRes.json();
    if (!upRes.ok || !upData.ok) {
      return res.status(400).json({
        success: false,
        step: 'getUpdates',
        error: upData.description || 'Lỗi lấy updates từ Telegram'
      });
    }

    let targetChat = null;
    const directChatId = (req.body && req.body.chat_id) || req.query.chat_id || null;
    if (directChatId) {
      targetChat = { id: String(directChatId).trim(), first_name: 'Admin' };
    } else if (Array.isArray(upData.result) && upData.result.length > 0) {
      for (let i = upData.result.length - 1; i >= 0; i--) {
        const u = upData.result[i];
        const m = u.message || u.channel_post || u.my_chat_member;
        if (m && m.chat && m.chat.id) {
          targetChat = m.chat;
          break;
        }
      }
    }

    if (!targetChat) {
      return res.status(200).json({
        success: false,
        step: 'waiting_start_message',
        bot: { username: bot.username, name: bot.first_name },
        message: `Đã xác thực bot @${bot.username} thành công nhưng chưa nhận được tin nhắn nào từ bạn. Vui lòng mở https://t.me/${bot.username} và bấm START hoặc gửi /start, sau đó tải lại trang này.`
      });
    }

    const chatId = String(targetChat.id);

    // Step 3: Save to .env and data/telegram_config.json
    updateEnvFile(token, chatId);
    try {
      if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
      fs.writeFileSync(CONFIG_FILE, JSON.stringify({ token, chatId }, null, 2), 'utf8');
    } catch(e) {
      console.warn('[Config Save Error]', e.message);
    }

    // Step 4: Send Test Message
    const timeVN = getVietnamTimeString();
    const testMsg = `🔔 <b>Kết nối Telegram D&T thành công!</b>\n\n` +
      `🤖 <b>Bot:</b> @${bot.username} (${bot.first_name})\n` +
      `👤 <b>Người nhận:</b> ${targetChat.first_name || 'Admin'} (@${targetChat.username || 'N/A'})\n` +
      `💬 <b>Chat ID:</b> <code>${chatId}</code>\n` +
      `🕒 <b>Thời gian:</b> ${timeVN}\n\n` +
      `🚀 <i>Hệ thống thông báo đơn hàng tự động từ website D&T đã sẵn sàng! Mỗi khi khách đặt hàng trên Landing Page, đơn hàng sẽ được gửi trực tiếp tới đây tức thì.</i>`;

    const sendRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: testMsg,
        parse_mode: 'HTML'
      })
    });
    const sendData = await sendRes.json();

    return res.json({
      success: true,
      message: 'Kết nối Telegram D&T thành công!',
      bot: { username: bot.username, name: bot.first_name, id: bot.id },
      chat: { id: chatId, title: targetChat.first_name || targetChat.title },
      telegramMessageSent: sendRes.ok && sendData.ok,
      envSaved: true
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
