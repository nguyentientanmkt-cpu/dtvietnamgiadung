/**
 * ==============================================================================
 * HỆ THỐNG ĐỒ ĐƠN TỰ ĐỘNG TỪ WEBSITE D&T VÀO GOOGLE SHEETS
 * TAB NHẬN ĐƠN: "DATA LADIPAGE - XỊT MỐI"
 * ==============================================================================
 * 
 * Ánh xạ cột:
 * - B: Ngày tạo
 * - C: Kênh đơn (Website)
 * - D: Khách hàng
 * - E: Số điện thoại (giữ nguyên số 0 ở đầu)
 * - G: Combo (Mua 2 tặng 1 / 1 bình)
 * - H: Địa chỉ
 * - J: Giá trị đơn (578.000đ / 289.000đ)
 * - K: Tình trạng (Chờ xác nhận)
 * 
 * CÁC CỘT ĐƯỢC GIỮ NGUYÊN 100%: Cột A, F, I (không ghi đè, không làm hỏng công thức)
 */

// Cấu hình tên Sheet nhận dữ liệu
var TARGET_SHEET_NAME = 'DATA LADIPAGE - XỊT MỐI';

// Khóa bí mật mặc định (nếu chưa cấu hình trong Script Properties)
var DEFAULT_AUTH_SECRET = 'DT_VIETNAM_SECRET_2026';

/**
 * 1. Xử lý yêu cầu POST từ Backend website D&T
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    // Khóa tránh xung đột khi có nhiều khách gửi form cùng 1 lúc (chờ tối đa 15 giây)
    lock.waitLock(15000);

    // Kiểm tra dữ liệu đầu vào
    if (!e || !e.postData || !e.postData.contents) {
      return responseJSON({ success: false, error: 'Không nhận được dữ liệu' });
    }

    var data = {};
    try {
      data = JSON.parse(e.postData.contents);
    } catch (err) {
      return responseJSON({ success: false, error: 'Dữ liệu JSON không hợp lệ' });
    }

    // Kiểm tra mã xác thực bảo mật (AUTH_SECRET)
    var scriptProps = PropertiesService.getScriptProperties();
    var validSecret = scriptProps.getProperty('AUTH_SECRET') || DEFAULT_AUTH_SECRET;
    var clientSecret = data.authKey || data.authSecret || '';

    if (validSecret && clientSecret !== validSecret) {
      return responseJSON({
        success: false,
        error: 'Mã xác thực không hợp lệ. Vui lòng kiểm tra AUTH_SECRET.'
      });
    }

    // Thực hiện ghi dữ liệu vào Sheet
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
  return responseJSON({
    status: 'ok',
    message: 'Google Apps Script Web App D&T đang hoạt động sẵn sàng nhận đơn!',
    sheetTarget: TARGET_SHEET_NAME,
    timestamp: new Date().toISOString()
  });
}

/**
 * 3. Hàm logic ghi đơn hàng vào đúng các cột và chống trùng
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

  // Thu thập và chuẩn hóa dữ liệu đơn hàng
  var fullName = (data.fullName || '').toString().trim();
  var phoneRaw = (data.phoneNumber || '').toString().trim();
  var address = (data.address || '').toString().trim();
  var note = (data.note || '').toString().trim();
  var orderCode = (data.orderCode || '').toString().trim();

  // Chuẩn hóa số điện thoại: giữ nguyên số 0 ở đầu
  var cleanPhone = phoneRaw.replace(/[\s.-]/g, '');
  if (cleanPhone.startsWith('84')) {
    cleanPhone = '0' + cleanPhone.substring(2);
  } else if (!cleanPhone.startsWith('0') && cleanPhone.length > 0) {
    cleanPhone = '0' + cleanPhone;
  }

  // Chuẩn hóa tên gói Combo (Cột G) & Giá trị đơn (Cột J)
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

  // Chuẩn hóa địa chỉ + ghi chú (Cột H)
  var fullAddress = address;
  if (note) {
    fullAddress += ' (Ghi chú: ' + note + ')';
  }

  // Thời gian đặt hàng theo giờ Việt Nam UTC+7 (Cột B)
  var orderTime = Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm:ss');

  // Tìm dòng trống đầu tiên để chèn (Dựa vào Cột B & D để không ghi đè dữ liệu cũ)
  var targetRow = findFirstEmptyRow(sheet);

  // CHỐNG TRÙNG ĐƠN HÀNG: Kiểm tra 100 dòng gần nhất
  if (isDuplicateOrder(sheet, targetRow, cleanPhone, comboText, address)) {
    return {
      success: true,
      duplicate: true,
      message: 'Đơn hàng đã được lưu trước đó, không ghi trùng dòng.',
      row: targetRow
    };
  }

  // -------------------------------------------------------------
  // GHI CHÍNH XÁC VÀO TỪNG CỘT (GIỮ NGUYÊN CỘT A, F, I)
  // -------------------------------------------------------------
  // Cột B (2): Ngày tạo
  sheet.getRange(targetRow, 2).setValue(orderTime);

  // Cột C (3): Kênh đơn
  sheet.getRange(targetRow, 3).setValue('Website');

  // Cột D (4): Khách hàng
  sheet.getRange(targetRow, 4).setValue(fullName);

  // Cột E (5): Số điện thoại (đặt format chuỗi văn bản để luôn giữ số 0 đầu)
  sheet.getRange(targetRow, 5).setNumberFormat('@').setValue("'" + cleanPhone);

  // CỘT F (6): BỎ QUA - GIỮ NGUYÊN

  // Cột G (7): Combo
  sheet.getRange(targetRow, 7).setValue(comboText);

  // Cột H (8): Địa chỉ
  sheet.getRange(targetRow, 8).setValue(fullAddress);

  // CỘT I (9): BỎ QUA - GIỮ NGUYÊN

  // Cột J (10): Giá trị đơn
  sheet.getRange(targetRow, 10).setValue(priceNumber);

  // Cột K (11): Tình trạng
  sheet.getRange(targetRow, 11).setValue('Chờ xác nhận');

  // CỘT A (1): BỎ QUA - GIỮ NGUYÊN (Nếu có mã đơn hoặc STT tự động)

  return {
    success: true,
    message: 'Đã lưu đơn hàng vào Google Sheets thành công!',
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

  // Tìm tương đối nếu có khoảng trắng thừa
  var allSheets = ss.getSheets();
  for (var i = 0; i < allSheets.length; i++) {
    var name = allSheets[i].getName().trim().toUpperCase();
    if (name === targetName.trim().toUpperCase() || name.indexOf('LADIPAGE') !== -1) {
      return allSheets[i];
    }
  }
  return null;
}

/**
 * Tìm dòng trống đầu tiên để thêm đơn hàng (bắt đầu từ dòng 2)
 */
function findFirstEmptyRow(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return 2;

  // Lấy dữ liệu cột B và D từ dòng 2 đến lastRow
  var range = sheet.getRange(2, 2, lastRow - 1, 3).getValues(); // B, C, D
  for (var i = 0; i < range.length; i++) {
    var colB = range[i][0]; // Cột B (Ngày tạo)
    var colD = range[i][2]; // Cột D (Khách hàng)
    if (!colB && !colD) {
      return i + 2; // Dòng trống tìm thấy
    }
  }
  return lastRow + 1;
}

/**
 * Kiểm tra xem đơn hàng có bị trùng lặp trong 100 dòng gần nhất không
 */
function isDuplicateOrder(sheet, currentRow, phone, combo, address) {
  var startRow = Math.max(2, currentRow - 100);
  var numRows = currentRow - startRow;
  if (numRows <= 0) return false;

  // Lấy cột E (SĐT - col 5) và cột G (Combo - col 7)
  var phoneValues = sheet.getRange(startRow, 5, numRows, 1).getValues();
  var comboValues = sheet.getRange(startRow, 7, numRows, 1).getValues();

  var cleanTestPhone = phone.replace(/^'/, '').trim();

  for (var i = numRows - 1; i >= 0; i--) {
    var existingPhone = (phoneValues[i][0] || '').toString().replace(/^'/, '').trim();
    var existingCombo = (comboValues[i][0] || '').toString().trim();

    if (existingPhone === cleanTestPhone && existingCombo === combo) {
      // Đã có cùng số điện thoại và cùng combo trong các dòng gần đây
      return true;
    }
  }
  return false;
}

/**
 * Trả về kết quả JSON cho client
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
  var sampleData = {
    authKey: DEFAULT_AUTH_SECRET,
    orderCode: 'TEST-SHEET-' + Math.floor(Math.random() * 90000 + 10000),
    fullName: 'Nguyễn Văn Test (Thử Nghiệm)',
    phoneNumber: '0362495921',
    address: '25/54 Bùi Quang Là, P. An Hội Tây, TP.HCM',
    note: 'Đơn test tự động kiểm tra cột Google Sheet',
    packageKey: 'combo',
    packageName: 'GÓI 2: Mua 2 Tặng 1 (Tổng 3 bình - 578.000đ)',
    totalAmount: 578000
  };

  var res = processAppendOrder(sampleData);
  Logger.log('Kết quả kiểm tra: ' + JSON.stringify(res));
  return res;
}
