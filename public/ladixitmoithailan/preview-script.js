/**
 * LANDING PAGE BÌNH XỊT DIỆT MỐI D&T VIỆT NAM (MUVADI STYLE)
 * Hotline/Zalo: 0362.495.921 | 0358.762.950
 * Tối ưu chuyển đổi Facebook Ads COD
 */

document.addEventListener('DOMContentLoaded', function () {
  // ==========================================================================
  // 1. COUNTDOWN TIMER (Urgency Urgency Urgency)
  // ==========================================================================
  function initCountdown() {
    let duration = 14 * 60 + 58; // 14 mins 58 secs default
    const savedTime = sessionStorage.getItem('dt_sale_timer');
    if (savedTime && parseInt(savedTime, 10) > 0) {
      duration = parseInt(savedTime, 10);
    }

    const hoursEl = document.getElementById('timer-hours');
    const minutesEl = document.getElementById('timer-minutes');
    const secondsEl = document.getElementById('timer-seconds');

    function updateTimer() {
      const hours = Math.floor(duration / 3600);
      const minutes = Math.floor((duration % 3600) / 60);
      const seconds = duration % 60;

      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
      if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

      if (duration > 0) {
        duration--;
        sessionStorage.setItem('dt_sale_timer', duration);
      } else {
        duration = 15 * 60; // reset loop
      }
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }
  initCountdown();

  // ==========================================================================
  // 2. INTERACTIVE PRODUCT GALLERY (MUVADI STYLE)
  // ==========================================================================
  const gallerySlides = document.querySelectorAll('.gallery-slide');
  const thumbItems = document.querySelectorAll('.thumb-item');
  const btnPrev = document.getElementById('galleryPrev');
  const btnNext = document.getElementById('galleryNext');
  let currentSlide = 0;

  function showSlide(index) {
    if (gallerySlides.length === 0) return;
    if (index >= gallerySlides.length) currentSlide = 0;
    else if (index < 0) currentSlide = gallerySlides.length - 1;
    else currentSlide = index;

    gallerySlides.forEach((slide, i) => {
      if (i === currentSlide) slide.classList.add('active');
      else slide.classList.remove('active');
    });

    thumbItems.forEach((thumb, i) => {
      if (i === currentSlide) {
        thumb.classList.add('active');
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        thumb.classList.remove('active');
      }
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => showSlide(currentSlide - 1));
  }
  if (btnNext) {
    btnNext.addEventListener('click', () => showSlide(currentSlide + 1));
  }

  thumbItems.forEach(thumb => {
    thumb.addEventListener('click', function () {
      const idx = parseInt(this.getAttribute('data-index'), 10);
      if (!isNaN(idx)) showSlide(idx);
    });
  });

  // Touch Swipe for Mobile Gallery
  const mainGallery = document.querySelector('.gallery-main-view');
  if (mainGallery) {
    let touchStartX = 0;
    let touchEndX = 0;
    mainGallery.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    mainGallery.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 40) showSlide(currentSlide + 1);
      if (touchEndX > touchStartX + 40) showSlide(currentSlide - 1);
    }, { passive: true });
  }

  // Interactive Video Demo Action
  const btnPlayDemo = document.getElementById('btnPlayDemo');
  const videoDemoWrap = document.getElementById('videoDemoWrap');
  if (btnPlayDemo && videoDemoWrap) {
    const handleDemoClick = () => {
      // Cuộn mượt đến phần hướng dẫn 3 bước hoặc form đặt hàng
      const huongDan = document.getElementById('cong-dung');
      if (huongDan) {
        huongDan.scrollIntoView({ behavior: 'smooth' });
      }
    };
    btnPlayDemo.addEventListener('click', handleDemoClick);
    videoDemoWrap.addEventListener('click', handleDemoClick);
  }

  // ==========================================================================
  // 3. ĐỒNG BỘ 2 GÓI SẢN PHẨM & TÍNH TIỀN TỰ ĐỘNG
  // Chuẩn: Gói 1 = 289K | Gói 2 (Mua 2 tặng 1) = 578K - Freeship cả 2 gói
  // ==========================================================================
  const COMBO_PACKAGES = {
    combo1: {
      id: 'combo1',
      name: 'Gói 1: Mua 1 Bình 600ml',
      bottles: 1,
      bottlesText: '1 bình xịt 600ml + 1 vòi kim loại',
      price: 289000,
      priceFormatted: '289.000đ',
      shipFee: 0,
      shipFeeText: '0đ (Miễn phí vận chuyển)',
      total: 289000,
      totalFormatted: '289.000đ',
      badge: 'Dùng Thử'
    },
    combo2: {
      id: 'combo2',
      name: 'Gói 2: Mua 2 Tặng 1 (Tổng 3 Bình)',
      bottles: 3,
      bottlesText: '3 bình xịt 600ml + 3 vòi kim loại (Chỉ ~193k/bình)',
      price: 578000,
      priceFormatted: '578.000đ',
      shipFee: 0,
      shipFeeText: '0đ (Miễn phí vận chuyển)',
      total: 578000,
      totalFormatted: '578.000đ',
      badge: 'Bán Chạy Nhất'
    }
  };

  const comboCards = document.querySelectorAll('.combo-radio-card');
  const summarySubtotalEl = document.getElementById('summarySubtotal');
  const summaryShippingEl = document.getElementById('summaryShipping');
  const summaryTotalEl = document.getElementById('summaryTotal');

  function updateSelectedCombo(comboId) {
    const pkg = COMBO_PACKAGES[comboId] || COMBO_PACKAGES['combo2'];

    // Update UI Cards
    comboCards.forEach(card => {
      const radio = card.querySelector('input[type="radio"]');
      if (radio && radio.value === comboId) {
        card.classList.add('selected');
        radio.checked = true;
      } else {
        card.classList.remove('selected');
        if (radio) radio.checked = false;
      }
    });

    // Update Live Summary Box
    if (summarySubtotalEl) summarySubtotalEl.textContent = pkg.priceFormatted;
    if (summaryShippingEl) summaryShippingEl.textContent = pkg.shipFeeText;
    if (summaryTotalEl) summaryTotalEl.textContent = pkg.totalFormatted;
  }

  // Radio card click
  comboCards.forEach(card => {
    card.addEventListener('click', function () {
      const radio = this.querySelector('input[type="radio"]');
      if (radio) {
        updateSelectedCombo(radio.value);
      }
    });
  });

  // Buttons in Pricing section (Phần 5) that select package and scroll to form
  const selectPkgBtns = document.querySelectorAll('[data-select-combo]');
  selectPkgBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const comboId = this.getAttribute('data-select-combo');
      updateSelectedCombo(comboId);
      const formSection = document.getElementById('dat-hang-ngay');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Mặc định chọn gói 2 (Mua 2 Tặng 1 - 578.000đ)
  updateSelectedCombo('combo2');

  // ==========================================================================
  // 4. REALTIME ORDER SOCIAL PROOF (POPUP THÔNG BÁO ĐƠN HÀNG MỚI)
  // Chỉ dùng 2 gói: Gói 1 (289k) và Gói 2 (578k)
  // ==========================================================================
  const customers = [
    { name: 'Anh Nguyễn Quốc H.', city: 'Hà Nội', combo: 'Gói 2: Mua 2 Tặng 1 (578.000đ)', time: '1 phút trước' },
    { name: 'Chị Trần Thu Thảo', city: 'TP. Hồ Chí Minh', combo: 'Gói 2: Mua 2 Tặng 1 (578.000đ)', time: '2 phút trước' },
    { name: 'Bác Lê Văn Dũng', city: 'Đà Nẵng', combo: 'Gói 2: Mua 2 Tặng 1 (578.000đ)', time: '4 phút trước' },
    { name: 'Anh Phạm Minh Đức', city: 'Bình Dương', combo: 'Gói 1: Mua 1 Bình (289.000đ)', time: '5 phút trước' },
    { name: 'Chị Hoàng Mai Phương', city: 'Hải Phòng', combo: 'Gói 2: Mua 2 Tặng 1 (578.000đ)', time: '7 phút trước' },
    { name: 'Anh Đoàn Văn Quyết', city: 'Cần Thơ', combo: 'Gói 2: Mua 2 Tặng 1 (578.000đ)', time: '9 phút trước' },
    { name: 'Chị Đỗ Bích Ngọc', city: 'Nghệ An', combo: 'Gói 2: Mua 2 Tặng 1 (578.000đ)', time: '11 phút trước' }
  ];

  const toastEl = document.getElementById('orderToast');
  const toastCustomerEl = document.getElementById('toastCustomer');
  const toastDescEl = document.getElementById('toastDesc');
  const toastTimeEl = document.getElementById('toastTime');
  let currentCustomerIdx = 0;

  function showOrderToast() {
    if (!toastEl) return;
    const c = customers[currentCustomerIdx];
    if (toastCustomerEl) toastCustomerEl.textContent = `${c.name} (${c.city})`;
    if (toastDescEl) toastDescEl.textContent = `Vừa đặt ${c.combo}`;
    if (toastTimeEl) toastTimeEl.textContent = c.time;

    toastEl.classList.add('show');
    setTimeout(() => {
      toastEl.classList.remove('show');
    }, 4500);

    currentCustomerIdx = (currentCustomerIdx + 1) % customers.length;
  }

  // Khởi chạy sau 3 giây, lặp mỗi 12 giây
  setTimeout(showOrderToast, 3000);
  setInterval(showOrderToast, 12000);

  // ==========================================================================
  // 5. VALIDATION VÀ SUBMISSION FORM ĐẶT HÀNG COD + PIXEL PURCHASE
  // ==========================================================================
  const orderForm = document.getElementById('orderForm');
  const successModal = document.getElementById('successModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  let hasTrackedPurchase = false;

  if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('custName');
      const phoneInput = document.getElementById('custPhone');
      const addressInput = document.getElementById('custAddress');
      const noteInput = document.getElementById('custNote');
      const selectedRadio = document.querySelector('input[name="selectedCombo"]:checked');

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const address = addressInput ? addressInput.value.trim() : '';
      const note = noteInput ? noteInput.value.trim() : '';
      const comboKey = selectedRadio ? selectedRadio.value : 'combo2';
      const comboData = COMBO_PACKAGES[comboKey] || COMBO_PACKAGES['combo2'];

      // Kiểm tra họ tên
      if (!name || name.length < 2) {
        alert('Vui lòng nhập họ và tên của bạn.');
        if (nameInput) nameInput.focus();
        return;
      }

      // Kiểm tra số điện thoại chuẩn Việt Nam (10 số, bắt đầu bằng 03, 05, 07, 08, 09)
      const cleanPhone = phone.replace(/[\s.-]/g, '');
      const phoneRegex = /^(0|84)(3[2-9]|5[25689]|7[06-9]|8[1-9]|9[0-9])[0-9]{7}$/;

      if (!phoneRegex.test(cleanPhone)) {
        alert('Vui lòng nhập số điện thoại hợp lệ (10 chữ số, ví dụ: 0362495921).');
        if (phoneInput) phoneInput.focus();
        return;
      }

      // Kiểm tra địa chỉ
      if (!address || address.length < 5) {
        alert('Vui lòng nhập địa chỉ nhận hàng chi tiết (Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành).');
        if (addressInput) addressInput.focus();
        return;
      }

      // Tạo mã đơn hàng ngẫu nhiên: MD-XXXXXX
      const orderId = 'MD-' + Math.floor(100000 + Math.random() * 900000);

      // Điền thông tin vào Modal Popup xác nhận
      const modalOrderId = document.getElementById('modalOrderId');
      const modalCustomer = document.getElementById('modalCustomer');
      const modalPhone = document.getElementById('modalPhone');
      const modalPackage = document.getElementById('modalPackage');
      const modalAddress = document.getElementById('modalAddress');
      const modalTotal = document.getElementById('modalTotal');

      if (modalOrderId) modalOrderId.textContent = orderId;
      if (modalCustomer) modalCustomer.textContent = name;
      if (modalPhone) modalPhone.textContent = cleanPhone;
      if (modalPackage) modalPackage.textContent = `${comboData.name} (${comboData.bottlesText})`;
      if (modalAddress) modalAddress.textContent = address;
      if (modalTotal) modalTotal.textContent = `${comboData.totalFormatted} (Freeship 0đ)`;

      // Lưu đơn hàng vào localStorage cho cả 'muvadi_orders' và 'dt_orders'
      const orderRecord = {
        orderId,
        name,
        phone: cleanPhone,
        address,
        note,
        comboId: comboData.id,
        comboName: comboData.name,
        bottles: comboData.bottles,
        total: comboData.total,
        totalFormatted: comboData.totalFormatted,
        shippingFee: 0,
        createdAt: new Date().toISOString()
      };

      try {
        const existingDt = JSON.parse(localStorage.getItem('dt_orders') || '[]');
        existingDt.push(orderRecord);
        localStorage.setItem('dt_orders', JSON.stringify(existingDt));

        const existingMuvadi = JSON.parse(localStorage.getItem('muvadi_orders') || '[]');
        existingMuvadi.push(orderRecord);
        localStorage.setItem('muvadi_orders', JSON.stringify(existingMuvadi));
      } catch (err) {
        console.warn('[D&T Orders] Storage warning:', err);
      }

      // ======================================================================
      // 6. FACEBOOK PIXEL & CONVERSION TRACKING (CHỈ GHI NHẬN KHI THÀNH CÔNG)
      // ======================================================================
      if (!hasTrackedPurchase) {
        hasTrackedPurchase = true;

        // Meta Facebook Pixel
        if (typeof window.fbq === 'function') {
          window.fbq('track', 'Purchase', {
            value: comboData.total,
            currency: 'VND',
            content_name: comboData.name,
            content_type: 'product',
            content_ids: [comboData.id],
            num_items: comboData.bottles,
            order_id: orderId
          });
          console.info('[D&T Tracking] 🎯 Facebook Pixel Purchase fired:', orderId);
        }

        // Google Tag Manager / GA4 DataLayer
        if (window.dataLayer && Array.isArray(window.dataLayer)) {
          window.dataLayer.push({
            event: 'purchase',
            ecommerce: {
              transaction_id: orderId,
              value: comboData.total,
              currency: 'VND',
              shipping: 0,
              items: [{
                item_id: comboData.id,
                item_name: comboData.name,
                price: comboData.total,
                quantity: comboData.bottles
              }]
            }
          });
          console.info('[D&T Tracking] 🎯 DataLayer Purchase fired:', orderId);
        }
      }

      // Mở Popup Modal xác nhận đặt hàng
      if (successModal) {
        successModal.classList.add('active');
      }

      // Reset form và giữ nguyên mặc định gói 2
      orderForm.reset();
      updateSelectedCombo('combo2');
    });
  }

  // Đóng Popup Modal
  if (modalCloseBtn && successModal) {
    modalCloseBtn.addEventListener('click', function () {
      successModal.classList.remove('active');
    });
  }

  if (successModal) {
    successModal.addEventListener('click', function (e) {
      if (e.target === successModal) {
        successModal.classList.remove('active');
      }
    });
  }

  // Smooth scroll cho các liên kết anchor
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
