/**
 * ==============================================================================
 * HỆ THỐNG ĐỔ ĐƠN TỰ ĐỘNG TỪ WEBSITE D&T VÀO GOOGLE SHEETS
 * TAB NHẬN ĐƠN: "DATA LADIPAGE - XỊT MỐI"
 * ==============================================================================
 * 
 * QUY TẮC BẢNG TÍNH:
 * - Tiêu đề bảng ở Dòng 5.
 * - Dữ liệu bắt đầu ghi từ Dòng 6 (Tuyệt đối không ghi đè 5 dòng đầu).
 * - Chống trùng đơn BẰNG MÃ ĐƠN HÀNG (orderCode duy nhất). Không chặn theo SĐT
 *   hay Combo để khách cũ có thể đặt lại đơn mới bình thường.
 * - Mã xác thực bảo mật AUTH_SECRET được đọc từ Script Properties.
 * 
 * ÁNH XẠ CỘT:
 * - B: Ngày tạo (dd/MM/yyyy HH:mm:ss)
 * - C: Kênh đơn (Website)
 * - D: Khách hàng
 * - E: Số điện thoại (giữ nguyên số 0 ở đầu)
 * - G: Combo (Mua 2 tặng 1 / 1 bình)
 * - H: Địa chỉ (+ Ghi chú + [Mã đơn])
 * - J: Giá trị đơn (578000 / 289000)
 * - K: Tình trạng (Chờ xác nhận)
 * 
 * BẢO LƯU 100%: Cột A, F, I (Không ghi đè, bảo toàn công thức/định dạng có sẵn)
 */

var TARGET_SHEET_NAME = 'DATA LADIPAGE - XỊT MỐI';
var DATA_START_ROW = 6; // Tiêu đề ở dòng 5, dữ liệu bắt đầu ghi từ dòng 6

/**
 * 1. Xử lý yêu cầu POST từ Backend website D&T
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    // Khóa tránh xung đột khi nhiều khách bấm đặt hàng cùng lúc (chờ tối đa 15s)
    lock.waitLock(15000);

    // Kiểm tra cấu hình bảo mật trong Script Properties
    var scriptProps = PropertiesService.getScriptProperties();
    var authSecret = scriptProps.getProperty('AUTH_SECRET');

    if (!authSecret) {
      return responseJSON({
        success: false,
        error: 'Chưa cấu hình thuộc tính AUTH_SECRET trong Script Properties của Google Apps Script.'
      });
    }

    // Kiểm tra dữ liệu đầu vào
    if (!e || !e.postData || !e.postData.contents) {
      return responseJSON({ success: false, error: 'Không nhận được dữ liệu đơn hàng.' });
    }

    var data = {};
    try {
      data = JSON.parse(e.postData.contents);
    } catch (err) {
      return responseJSON({ success: false, error: 'Dữ liệu JSON không hợp lệ: ' + err.message });
    }

    // Kiểm tra mã xác thực từ backend gửi lên
    var clientSecret = (data.authKey || data.authSecret || '').toString().trim();
    if (clientSecret !== authSecret.trim()) {
      return responseJSON({
        success: false,
        error: 'Mã xác thực không hợp lệ. Sai AUTH_SECRET.'
      });
    }

    // Thực hiện ghi đơn hàng vào bảng tính
    var result = processAppendOrder(data);
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
  var hasAuth = !!scriptProps.getProperty('AUTH_SECRET');

  return responseJSON({
    status: 'ok',
    message: 'Google Apps Script Web App D&T đang hoạt động sẵn sàng nhận đơn!',
    sheetTarget: TARGET_SHEET_NAME,
    dataStartRow: DATA_START_ROW,
    authSecretConfigured: hasAuth,
    timestamp: new Date().toISOString()
  });
}

/**
 * 3. Logic xử lý ghi đơn vào bảng tính
 */
function processAppendOrder(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = findTargetSheet(ss, TARGET_SHEET_NAME);

  if (!sheet) {
    return {
      success: false,
      error: 'Không tìm thấy tab sheet "' + TARGET_SHEET_NAME + '". Vui lòng kiểm tra lại tên tab.'
    };
  }

  // Thu thập và chuẩn hóa dữ liệu
  var fullName = (data.fullName || '').toString().trim();
  var phoneRaw = (data.phoneNumber || '').toString().trim();
  var address = (data.address || '').toString().trim();
  var note = (data.note || '').toString().trim();
  var orderCode = (data.orderCode || '').toString().trim();

  if (!fullName) {
    return { success: false, error: 'Thiếu họ tên khách hàng.' };
  }
  if (!phoneRaw) {
    return { success: false, error: 'Thiếu số điện thoại.' };
  }

  // Chuẩn hóa số điện thoại: luôn giữ số 0 ở đầu
  var cleanPhone = phoneRaw.replace(/[\s.-]/g, '');
  if (cleanPhone.startsWith('84')) {
    cleanPhone = '0' + cleanPhone.substring(2);
  } else if (!cleanPhone.startsWith('0') && cleanPhone.length > 0) {
    cleanPhone = '0' + cleanPhone;
  }

  // CHỐNG TRÙNG ĐƠN HÀNG: Dựa vào mã đơn duy nhất (orderCode)
  if (orderCode && isDuplicateOrder(sheet, orderCode)) {
    return {
      success: true,
      duplicate: true,
      orderCode: orderCode,
      message: 'Mã đơn hàng ' + orderCode + ' đã được ghi nhận trước đó, bỏ qua không ghi trùng.'
    };
  }

  // Chuẩn hóa thông tin Combo (Cột G) và Giá bán (Cột J)
  var comboText = '';
  var priceNumber = 578000;
  var pkgKey = (data.packageKey || '').toString().toLowerCase();
  var pkgName = (data.packageName || '').toString();

  if (pkgKey === 'combo' || pkgName.toLowerCase().indexOf('mua 2') !== -1 || pkgName.indexOf('578') !== -1) {
    comboText = 'Mua 2 tặng 1 (3 bình 600ml)';
    priceNumber = 578000;
  } else if (pkgKey === 'single' || pkgName.toLowerCase().indexOf('1 bình') !== -1 || pkgName.indexOf('289') !== -1) {
    comboText = '1 bình 600ml';
    priceNumber = 289000;
  } else {
    comboText = pkgName || 'Combo Mua 2 Tặng 1';
    priceNumber = Number(data.totalAmount) || 578000;
  }

  // Địa chỉ chi tiết + ghi chú + mã đơn định danh (Cột H)
  var fullAddress = address;
  if (note) {
    fullAddress += ' (Ghi chú: ' + note + ')';
  }
  if (orderCode) {
    fullAddress += ' [Mã đơn: ' + orderCode + ']';
  }

  // Ngày tạo theo giờ Việt Nam UTC+7 (Cột B)
  var orderTime = Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm:ss');

  // Tìm dòng trống đầu tiên để chèn (bắt đầu từ Dòng 6)
  var targetRow = findFirstEmptyRow(sheet);

  // --------------------------------------------------------------------------
  // GHI CHÍNH XÁC VÀO CÁC CỘT QUY ĐỊNH (BẢO LƯU 100% CỘT A, F, I)
  // --------------------------------------------------------------------------
  // Cột A (1): BỎ QUA - GIỮ NGUYÊN (STT hoặc công thức tự động)
  
  // Cột B (2): Ngày tạo
  sheet.getRange(targetRow, 2).setValue(orderTime);

  // Cột C (3): Kênh đơn
  sheet.getRange(targetRow, 3).setValue('Website');

  // Cột D (4): Khách hàng
  sheet.getRange(targetRow, 4).setValue(fullName);

  // Cột E (5): Số điện thoại (format chuỗi '@' để luôn bảo toàn số 0 ở đầu)
  sheet.getRange(targetRow, 5).setNumberFormat('@').setValue("'" + cleanPhone);

  // Cột F (6): BỎ QUA - GIỮ NGUYÊN

  // Cột G (7): Combo
  sheet.getRange(targetRow, 7).setValue(comboText);

  // Cột H (8): Địa chỉ
  sheet.getRange(targetRow, 8).setValue(fullAddress);

  // Cột I (9): BỎ QUA - GIỮ NGUYÊN

  // Cột J (10): Giá trị đơn
  sheet.getRange(targetRow, 10).setValue(priceNumber);

  // Cột K (11): Tình trạng
  sheet.getRange(targetRow, 11).setValue('Chờ xác nhận');

  // Lưu mã đơn vào Cache trong 6 giờ để chống spam click tức thì
  if (orderCode) {
    try {
      CacheService.getScriptCache().put('PROCESSED_' + orderCode, '1', 21600);
    } catch (ignore) {}
  }

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
 * Tìm tab sheet theo tên chính xác hoặc không phân biệt hoa thường
 */
function findTargetSheet(ss, targetName) {
  var sheet = ss.getSheetByName(targetName);
  if (sheet) return sheet;

  var allSheets = ss.getSheets();
  for (var i = 0; i < allSheets.length; i++) {
    var name = allSheets[i].getName().trim().toUpperCase();
    if (name === targetName.trim().toUpperCase() || name.indexOf('XỊT MỐI') !== -1) {
      return allSheets[i];
    }
  }
  return null;
}

/**
 * Tìm dòng trống đầu tiên bắt đầu từ Dòng 6 (Không bao giờ đè lên 5 dòng đầu)
 */
function findFirstEmptyRow(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow < DATA_START_ROW) {
    return DATA_START_ROW; // Dòng 6
  }

  var numRows = lastRow - DATA_START_ROW + 1;
  // Lấy dữ liệu cột B (Ngày tạo) và cột D (Khách hàng) từ dòng 6 đến lastRow
  var rangeValues = sheet.getRange(DATA_START_ROW, 2, numRows, 3).getValues();

  for (var i = 0; i < rangeValues.length; i++) {
    var colB = rangeValues[i][0]; // Cột B
    var colD = rangeValues[i][2]; // Cột D
    if (!colB && !colD) {
      return DATA_START_ROW + i; // Tìm thấy dòng trống ở giữa
    }
  }

  return lastRow + 1; // Nối tiếp ở cuối
}

/**
 * Chống trùng đơn hàng BẰNG MÃ ĐƠN HÀNG (orderCode duy nhất)
 */
function isDuplicateOrder(sheet, orderCode) {
  if (!orderCode) return false;

  // 1. Kiểm tra Cache tức thì (bắt các lần click liên tiếp)
  try {
    var cache = CacheService.getScriptCache();
    if (cache.get('PROCESSED_' + orderCode)) {
      return true;
    }
  } catch (ignore) {}

  // 2. Quét tối đa 200 dòng dữ liệu gần nhất trong bảng tính từ dòng 6 trở đi
  var lastRow = sheet.getLastRow();
  if (lastRow < DATA_START_ROW) return false;

  var numRows = lastRow - DATA_START_ROW + 1;
  var checkRows = Math.min(numRows, 200);
  var startRow = lastRow - checkRows + 1;

  // Quét Cột A (nếu chứa mã đơn) và Cột H (Địa chỉ có kèm mã đơn)
  var colA = sheet.getRange(startRow, 1, checkRows, 1).getValues();
  var colH = sheet.getRange(startRow, 8, checkRows, 1).getValues();

  for (var i = 0; i < checkRows; i++) {
    var valA = (colA[i][0] || '').toString().trim();
    var valH = (colH[i][0] || '').toString();

    if (valA === orderCode || valH.indexOf(orderCode) !== -1) {
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
 * Nhấn "Chạy" (Run) với hàm testAppendOrder để thử thêm 1 dòng mẫu vào bảng
 * ==============================================================================
 */
function testAppendOrder() {
  var sample = {
    orderCode: 'TEST-SHEET-' + Math.floor(Math.random() * 90000 + 10000),
    fullName: 'Nguyễn Văn Test (Thử Nghiệm Dòng 6)',
    phoneNumber: '0362495921',
    address: '25/54 Bùi Quang Là, P. An Hội Tây, TP.HCM',
    note: 'Kiểm tra chèn từ dòng 6 và bảo toàn cột A, F, I',
    packageKey: 'combo',
    packageName: 'GÓI 2: Mua 2 Tặng 1 (Tổng 3 bình - 578.000đ)',
    totalAmount: 578000
  };

  var res = processAppendOrder(sample);
  Logger.log('Kết quả kiểm tra: ' + JSON.stringify(res));
  return res;
}
