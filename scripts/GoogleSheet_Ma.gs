/**
 * ==============================================================================
 * HỆ THỐNG ĐỔ ĐƠN TỰ ĐỘNG TỪ WEBSITE D&T VÀO GOOGLE SHEETS
 * TAB NHẬN ĐƠN: "DATA LADIPAGE - XỊT MỐI"
 * ==============================================================================
 * 
 * QUY TẮC NGHIÊM NGẶT:
 * 1. Mở bảng tính bằng: SpreadsheetApp.openById(SPREADSHEET_ID).
 * 2. Cấu hình bảo mật qua Script Properties: SPREADSHEET_ID và AUTH_SECRET (Không dùng mã mặc định trong code).
 * 3. Chỉ nhận chính xác tab: "DATA LADIPAGE - XỊT MỐI".
 * 4. Tiêu đề bảng ở Dòng 5. Dữ liệu bắt đầu ghi từ Dòng 6 (Tuyệt đối không đè 5 dòng đầu).
 * 5. Tìm dòng trống thông minh: Kiểm tra toàn bộ các cột cần ghi (B, C, D, E, G, H, J, K),
 *    đảm bảo không có dữ liệu và không có công thức cũ mới được ghi.
 * 6. Bắt buộc có mã đơn hàng (orderCode) và chống trùng trên TOÀN BỘ dữ liệu của sheet (không giới hạn dòng).
 * 7. Kiểm tra đầy đủ thông tin khách hàng, chống tấn công chèn công thức (Formula Injection).
 * 8. Chỉ chấp nhận đúng 2 gói giá quy định: Gói 1 bình (289.000đ) và Gói Mua 2 tặng 1 (578.000đ).
 * 9. Giữ nguyên 100% các cột A, F, I (Bảo toàn nguyên vẹn công thức/định dạng có sẵn).
 */

var TARGET_SHEET_NAME = 'DATA LADIPAGE - XỊT MỐI';
var DATA_START_ROW = 6; // Dữ liệu bắt đầu từ dòng 6

// Các cột mục tiêu cần ghi: B(2), C(3), D(4), E(5), G(7), H(8), J(10), K(11)
var WRITE_COLUMN_INDEXES = [2, 3, 4, 5, 7, 8, 10, 11];

/**
 * 1. Xử lý yêu cầu POST từ Backend website D&T
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    // Khóa tránh xung đột khi nhiều khách bấm đặt hàng cùng một lúc (chờ tối đa 15s)
    lock.waitLock(15000);

    // Đọc cấu hình từ Script Properties
    var scriptProps = PropertiesService.getScriptProperties();
    var spreadsheetId = scriptProps.getProperty('SPREADSHEET_ID');
    var authSecret = scriptProps.getProperty('AUTH_SECRET');

    if (!spreadsheetId) {
      return responseJSON({
        success: false,
        error: 'Chưa cấu hình SPREADSHEET_ID trong Script Properties của Google Apps Script.'
      });
    }

    if (!authSecret) {
      return responseJSON({
        success: false,
        error: 'Chưa cấu hình AUTH_SECRET trong Script Properties của Google Apps Script.'
      });
    }

    // Kiểm tra dữ liệu gửi đến
    if (!e || !e.postData || !e.postData.contents) {
      return responseJSON({ success: false, error: 'Không nhận được dữ liệu đơn hàng (postData trống).' });
    }

    var data = {};
    try {
      data = JSON.parse(e.postData.contents);
    } catch (err) {
      return responseJSON({ success: false, error: 'Dữ liệu JSON không hợp lệ: ' + err.message });
    }

    // Xác thực mã bí mật AUTH_SECRET
    var clientSecret = (data.authKey || data.authSecret || '').toString().trim();
    if (clientSecret !== authSecret.trim()) {
      return responseJSON({
        success: false,
        error: 'Mã xác thực không hợp lệ. Sai AUTH_SECRET.'
      });
    }

    // Mở bảng tính bằng SpreadsheetApp.openById()
    var ss;
    try {
      ss = SpreadsheetApp.openById(spreadsheetId.trim());
    } catch (ssErr) {
      return responseJSON({
        success: false,
        error: 'Không thể mở bảng tính với SPREADSHEET_ID đã cấu hình: ' + ssErr.message
      });
    }

    // Thực hiện ghi đơn hàng vào bảng tính
    var result = processAppendOrder(ss, data);
    return responseJSON(result);

  } catch (error) {
    return responseJSON({ success: false, error: error.toString() });
  } finally {
    try {
      lock.releaseLock();
    } catch (ignore) {}
  }
}

/**
 * 2. Xử lý yêu cầu GET để kiểm tra trạng thái Web App qua trình duyệt
 */
function doGet(e) {
  var scriptProps = PropertiesService.getScriptProperties();
  var spreadsheetId = scriptProps.getProperty('SPREADSHEET_ID');
  var authSecret = scriptProps.getProperty('AUTH_SECRET');

  return responseJSON({
    status: 'ok',
    message: 'Google Apps Script Web App D&T đang hoạt động sẵn sàng nhận đơn!',
    sheetTarget: TARGET_SHEET_NAME,
    dataStartRow: DATA_START_ROW,
    configured: {
      hasSpreadsheetId: !!spreadsheetId,
      hasAuthSecret: !!authSecret
    },
    timestamp: new Date().toISOString()
  });
}

/**
 * 3. Logic xử lý ghi đơn vào bảng tính
 */
function processAppendOrder(ss, data) {
  // Chỉ nhận chính xác tab: "DATA LADIPAGE - XỊT MỐI"
  var sheet = ss.getSheetByName(TARGET_SHEET_NAME);
  if (!sheet) {
    return {
      success: false,
      error: 'Không tìm thấy tab sheet chính xác "' + TARGET_SHEET_NAME + '" trong bảng tính. Vui lòng kiểm tra lại tên tab.'
    };
  }

  // 1. Kiểm tra bắt buộc có mã đơn hàng (orderCode)
  var orderCode = (data.orderCode || '').toString().trim();
  if (!orderCode || orderCode.length < 3) {
    return {
      success: false,
      error: 'Bắt buộc phải có mã đơn hàng duy nhất (orderCode).'
    };
  }

  // 2. Chống trùng đơn hàng trên TOÀN BỘ dữ liệu của sheet (không giới hạn dòng)
  if (isDuplicateOrderFullSheet(sheet, orderCode)) {
    return {
      success: true,
      duplicate: true,
      orderCode: orderCode,
      message: 'Mã đơn hàng ' + orderCode + ' đã tồn tại trong bảng tính, bỏ qua không ghi trùng.'
    };
  }

  // 3. Kiểm tra đầy đủ thông tin khách hàng
  var fullName = (data.fullName || '').toString().trim();
  var phoneRaw = (data.phoneNumber || '').toString().trim();
  var address = (data.address || '').toString().trim();
  var note = (data.note || '').toString().trim();

  if (!fullName || fullName.length < 2) {
    return { success: false, error: 'Họ tên khách hàng không hợp lệ (tối thiểu 2 ký tự).' };
  }

  var cleanPhone = phoneRaw.replace(/[\s.-]/g, '');
  var phoneRegex = /^(0|84)(3[2-9]|5[25689]|7[06-9]|8[1-9]|9[0-9])[0-9]{7}$/;
  if (!phoneRegex.test(cleanPhone)) {
    return { success: false, error: 'Số điện thoại không hợp lệ (phải là số di động 10 chữ số tại VN).' };
  }
  // Giữ số 0 ở đầu
  if (cleanPhone.startsWith('84')) {
    cleanPhone = '0' + cleanPhone.substring(2);
  }

  if (!address || address.length < 4) {
    return { success: false, error: 'Địa chỉ nhận hàng không được để trống (tối thiểu 4 ký tự).' };
  }

  // 4. Chỉ chấp nhận đúng hai gói giá: Gói 1 bình 289K hoặc Gói Mua 2 tặng 1 578K
  var pkgKey = (data.packageKey || '').toString().toLowerCase();
  var pkgName = (data.packageName || '').toString();
  var amount = Number(data.totalAmount) || 0;

  var comboText = '';
  var priceNumber = 0;

  if (amount === 578000 || pkgKey === 'combo' || pkgName.toLowerCase().indexOf('mua 2') !== -1 || pkgName.indexOf('578') !== -1) {
    comboText = 'Mua 2 tặng 1 (3 bình 600ml)';
    priceNumber = 578000;
  } else if (amount === 289000 || pkgKey === 'single' || pkgName.toLowerCase().indexOf('1 bình') !== -1 || pkgName.indexOf('289') !== -1) {
    comboText = '1 bình 600ml';
    priceNumber = 289000;
  } else {
    return {
      success: false,
      error: 'Giá trị đơn hàng không hợp lệ. Hệ thống chỉ chấp nhận 2 gói: Gói 1 bình (289.000đ) hoặc Gói Mua 2 tặng 1 (578.000đ).'
    };
  }

  // 5. Ngăn chặn tấn công chèn công thức (Formula Injection Prevention)
  var safeFullName = sanitizeFormulaInput(fullName);
  var safeAddress = sanitizeFormulaInput(address);
  var safeNote = sanitizeFormulaInput(note);
  var safeOrderCode = sanitizeFormulaInput(orderCode);

  var fullAddress = safeAddress;
  if (safeNote) {
    fullAddress += ' (Ghi chú: ' + safeNote + ')';
  }
  if (safeOrderCode) {
    fullAddress += ' [Mã đơn: ' + safeOrderCode + ']';
  }

  // 6. Tìm dòng trống từ dòng 6 (Kiểm tra tất cả các cột cần ghi: B, C, D, E, G, H, J, K)
  var targetRow = findSafeEmptyRow(sheet);

  // 7. Ghi chính xác vào từng ô (GIỮ NGUYÊN CỘT A, F, I)
  var orderTime = Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm:ss');

  // Cột B (2): Ngày tạo
  sheet.getRange(targetRow, 2).setValue(orderTime);

  // Cột C (3): Kênh đơn
  sheet.getRange(targetRow, 3).setValue('Website');

  // Cột D (4): Khách hàng
  sheet.getRange(targetRow, 4).setValue(safeFullName);

  // Cột E (5): Số điện thoại (format văn bản '@' và thêm dấu nháy đơn để luôn bảo toàn số 0 ở đầu)
  sheet.getRange(targetRow, 5).setNumberFormat('@').setValue("'" + cleanPhone);

  // Cột F (6): BỎ QUA - GIỮ NGUYÊN 100%

  // Cột G (7): Combo
  sheet.getRange(targetRow, 7).setValue(comboText);

  // Cột H (8): Địa chỉ
  sheet.getRange(targetRow, 8).setValue(fullAddress);

  // Cột I (9): BỎ QUA - GIỮ NGUYÊN 100%

  // Cột J (10): Giá trị đơn
  sheet.getRange(targetRow, 10).setValue(priceNumber);

  // Cột K (11): Tình trạng
  sheet.getRange(targetRow, 11).setValue('Chờ xác nhận');

  // Cột A (1): BỎ QUA - GIỮ NGUYÊN 100%

  // Lưu mã đơn vào Cache trong 6 giờ để chống spam click tức thì
  try {
    CacheService.getScriptCache().put('ORDER_' + orderCode, '1', 21600);
  } catch (ignore) {}

  return {
    success: true,
    message: 'Đã lưu đơn vào Google Sheet thành công!',
    row: targetRow,
    orderCode: orderCode,
    customer: fullName,
    phone: cleanPhone,
    combo: comboText,
    total: priceNumber
  };
}

/**
 * Ngăn chặn tấn công chèn công thức (Formula Injection)
 * Nếu ký tự đầu là =, +, -, @, tab, xuống dòng -> thêm dấu nháy đơn ' ở trước để hiển thị dạng text
 */
function sanitizeFormulaInput(val) {
  if (val === null || val === undefined) return '';
  var s = String(val).trim();
  if (/^[=+\-@\t\r]/.test(s)) {
    return "'" + s;
  }
  return s;
}

/**
 * Tìm dòng trống an toàn từ dòng 6:
 * Kiểm tra tất cả các cột cần ghi (B, C, D, E, G, H, J, K).
 * Đảm bảo dòng đó không chứa bất kỳ giá trị nào và không chứa bất kỳ công thức cũ nào.
 */
function findSafeEmptyRow(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow < DATA_START_ROW) {
    return DATA_START_ROW; // Dòng 6
  }

  var numRows = lastRow - DATA_START_ROW + 1;
  // Lấy dữ liệu và công thức của 11 cột từ dòng 6 đến lastRow
  var values = sheet.getRange(DATA_START_ROW, 1, numRows, 11).getValues();
  var formulas = sheet.getRange(DATA_START_ROW, 1, numRows, 11).getFormulas();

  for (var r = 0; r < numRows; r++) {
    var isRowSafeAndEmpty = true;

    // Kiểm tra tất cả các cột cần ghi: B(2), C(3), D(4), E(5), G(7), H(8), J(10), K(11)
    for (var c = 0; c < WRITE_COLUMN_INDEXES.length; c++) {
      var colIdx = WRITE_COLUMN_INDEXES[c] - 1; // 0-based index
      var val = values[r][colIdx];
      var formula = formulas[r][colIdx];

      // Nếu ô có giá trị hoặc có công thức -> dòng này không hoàn toàn trống
      if ((val !== '' && val !== null && val !== undefined) || (formula !== '' && formula !== null)) {
        isRowSafeAndEmpty = false;
        break;
      }
    }

    if (isRowSafeAndEmpty) {
      return DATA_START_ROW + r; // Tìm thấy dòng trống an toàn
    }
  }

  return lastRow + 1; // Nối tiếp ở cuối bảng
}

/**
 * Chống trùng đơn hàng BẰNG MÃ ĐƠN HÀNG (orderCode duy nhất) trên TOÀN BỘ dữ liệu của sheet
 */
function isDuplicateOrderFullSheet(sheet, orderCode) {
  if (!orderCode) return false;

  // 1. Kiểm tra Cache tức thì
  try {
    var cache = CacheService.getScriptCache();
    if (cache.get('ORDER_' + orderCode)) {
      return true;
    }
  } catch (ignore) {}

  // 2. Quét TOÀN BỘ các dòng từ dòng 6 đến lastRow (không giới hạn 200 dòng)
  var lastRow = sheet.getLastRow();
  if (lastRow < DATA_START_ROW) return false;

  var totalRows = lastRow - DATA_START_ROW + 1;

  // Quét toàn bộ Cột A (Mã đơn nếu có) và Cột H (Địa chỉ có chứa mã đơn)
  var colA = sheet.getRange(DATA_START_ROW, 1, totalRows, 1).getValues();
  var colH = sheet.getRange(DATA_START_ROW, 8, totalRows, 1).getValues();

  var cleanCode = String(orderCode).trim();

  for (var i = 0; i < totalRows; i++) {
    var valA = (colA[i][0] || '').toString().trim();
    var valH = (colH[i][0] || '').toString();

    if (valA === cleanCode || valH.indexOf(cleanCode) !== -1) {
      return true;
    }
  }

  return false;
}

/**
 * Trả về JSON cho client
 */
function responseJSON(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * ==============================================================================
 * HÀM CHẠY THỬ NGHIỆM TRỰC TIẾP TRONG APPS SCRIPT EDITOR
 * Nhấn "Chạy" (Run) với hàm testAppendOrder để thử thêm 1 dòng mẫu an toàn từ Dòng 6
 * ==============================================================================
 */
function testAppendOrder() {
  var scriptProps = PropertiesService.getScriptProperties();
  var spreadsheetId = scriptProps.getProperty('SPREADSHEET_ID');

  if (!spreadsheetId) {
    Logger.log('LỖI: Bạn chưa thêm SPREADSHEET_ID vào Script Properties (Cài đặt dự án -> Thuộc tính tập lệnh).');
    return;
  }

  var ss = SpreadsheetApp.openById(spreadsheetId.trim());
  var sample = {
    orderCode: 'MD-TEST-' + Math.floor(Math.random() * 90000 + 10000),
    fullName: 'Nguyễn Văn Test (Thử Nghiệm Dòng 6)',
    phoneNumber: '0362495921',
    address: '25/54 Bùi Quang Là, P. An Hội Tây, TP.HCM',
    note: 'Kiểm tra chèn dòng an toàn từ dòng 6 và bảo toàn cột A, F, I',
    packageKey: 'combo',
    packageName: 'GÓI 2: Mua 2 Tặng 1 (Tổng 3 bình - 578.000đ)',
    totalAmount: 578000
  };

  var res = processAppendOrder(ss, sample);
  Logger.log('Kết quả kiểm tra: ' + JSON.stringify(res));
  return res;
}
