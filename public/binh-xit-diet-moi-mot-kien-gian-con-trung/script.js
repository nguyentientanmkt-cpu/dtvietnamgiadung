/**
 * Ladipage Bình Xịt Diệt Mối Thái Lan Chaendrite
 * Hotline/Zalo: 0362.495.921
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. COUNTDOWN TIMER
  function startCountdown() {
    let duration = 14 * 60 + 58; // 14 mins 58 secs default
    const savedTime = sessionStorage.getItem('ladi_sale_timer');
    if (savedTime && parseInt(savedTime) > 0) {
      duration = parseInt(savedTime);
    }

    const hoursEl = document.getElementById('timer-hours');
    const minutesEl = document.getElementById('timer-minutes');
    const secondsEl = document.getElementById('timer-seconds');

    function update() {
      const hours = Math.floor(duration / 3600);
      const minutes = Math.floor((duration % 3600) / 60);
      const seconds = duration % 60;

      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
      if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

      if (duration > 0) {
        duration--;
        sessionStorage.setItem('ladi_sale_timer', duration);
      } else {
        duration = 15 * 60; // reset loop
      }
    }

    update();
    setInterval(update, 1000);
  }
  startCountdown();

  // 2. COMBO PRICING LOGIC
  const comboPackages = {
    combo1: {
      name: 'Combo 1: 1 Chai 600ml (Dùng Thử)',
      bottles: '1 chai 600ml',
      price: 199000,
      ship: 30000,
      total: 229000,
      textTotal: '229.000đ (Đã gồm 30k ship)'
    },
    combo2: {
      name: 'Combo 2: Mua 2 Tặng 1 (Tổng 3 Chai)',
      bottles: '3 chai 600ml',
      price: 398000,
      ship: 0,
      total: 398000,
      textTotal: '398.000đ (Miễn phí ship toàn quốc)'
    },
    combo3: {
      name: 'Combo 3: Mua 3 Tặng 2 (Tổng 5 Chai)',
      bottles: '5 chai 600ml + 1 Gói bột phòng mối',
      price: 597000,
      ship: 0,
      total: 597000,
      textTotal: '597.000đ (Miễn phí ship + Quà tặng)'
    }
  };

  const comboOptions = document.querySelectorAll('.combo-option-card');
  const totalAmountEl = document.getElementById('orderTotalAmount');

  function updateSelectedCombo(comboId) {
    comboOptions.forEach(card => {
      const radio = card.querySelector('input[type="radio"]');
      if (radio && radio.value === comboId) {
        card.classList.add('selected');
        radio.checked = true;
      } else {
        card.classList.remove('selected');
        if (radio) radio.checked = false;
      }
    });

    if (comboPackages[comboId] && totalAmountEl) {
      totalAmountEl.textContent = comboPackages[comboId].textTotal;
    }
  }

  comboOptions.forEach(card => {
    card.addEventListener('click', function () {
      const radio = this.querySelector('input[type="radio"]');
      if (radio) {
        updateSelectedCombo(radio.value);
      }
    });
  });

  // Buttons in Pricing section that select package and scroll to form
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

  // 3. FAQ ACCORDION
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 4. SOCIAL PROOF (REALTIME ORDER NOTIFICATION POPUP)
  const customers = [
    { name: 'Anh Nguyễn Quốc H.', city: 'Hà Nội', combo: 'Combo 2: Mua 2 Tặng 1', time: '1 phút trước' },
    { name: 'Chị Trần Thu T.', city: 'TP. Hồ Chí Minh', combo: 'Combo 3: Mua 3 Tặng 2', time: '3 phút trước' },
    { name: 'Bác Lê Văn D.', city: 'Đà Nẵng', combo: 'Combo 2: Mua 2 Tặng 1', time: '4 phút trước' },
    { name: 'Anh Phạm Minh Đ.', city: 'Bình Dương', combo: 'Combo 1: 1 Chai 600ml', time: '6 phút trước' },
    { name: 'Chị Hoàng Mai P.', city: 'Hải Phòng', combo: 'Combo 2: Mua 2 Tặng 1', time: '8 phút trước' },
    { name: 'Anh Đoàn Văn Q.', city: 'Cần Thơ', combo: 'Combo 3: Mua 3 Tặng 2', time: '10 phút trước' },
    { name: 'Chị Đỗ Bích N.', city: 'Nghệ An', combo: 'Combo 2: Mua 2 Tặng 1', time: '12 phút trước' }
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

  // First trigger after 3s, then loop every 11s
  setTimeout(showOrderToast, 3000);
  setInterval(showOrderToast, 11000);

  // 5. ORDER FORM VALIDATION & SUBMISSION
  const orderForm = document.getElementById('orderForm');
  const successModal = document.getElementById('successModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

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
      const comboData = comboPackages[comboKey] || comboPackages['combo2'];

      // Validate Vietnam Phone Number
      const phoneRegex = /^(0|84)(3|5|7|8|9)[0-9]{8}$/;
      const cleanPhone = phone.replace(/[\s.-]/g, '');

      if (!name) {
        alert('Vui lòng nhập họ và tên của bạn.');
        if (nameInput) nameInput.focus();
        return;
      }

      if (!phoneRegex.test(cleanPhone)) {
        alert('Vui lòng nhập số điện thoại hợp lệ (10 chữ số, ví dụ: 0362495921).');
        if (phoneInput) phoneInput.focus();
        return;
      }

      if (!address) {
        alert('Vui lòng nhập địa chỉ nhận hàng chi tiết để giao tận nơi.');
        if (addressInput) addressInput.focus();
        return;
      }

      // Generate Order ID
      const orderId = 'MD-' + Math.floor(100000 + Math.random() * 900000);

      // Populate Modal Details
      const modalOrderId = document.getElementById('modalOrderId');
      const modalCustomer = document.getElementById('modalCustomer');
      const modalPhone = document.getElementById('modalPhone');
      const modalPackage = document.getElementById('modalPackage');
      const modalTotal = document.getElementById('modalTotal');

      if (modalOrderId) modalOrderId.textContent = orderId;
      if (modalCustomer) modalCustomer.textContent = name;
      if (modalPhone) modalPhone.textContent = phone;
      if (modalPackage) modalPackage.textContent = comboData.name;
      if (modalTotal) modalTotal.textContent = comboData.textTotal;

      // Save to localStorage for demo persistence
      const orderData = {
        orderId,
        name,
        phone,
        address,
        note,
        combo: comboData.name,
        total: comboData.textTotal,
        createdAt: new Date().toISOString()
      };
      const orders = JSON.parse(localStorage.getItem('muvadi_orders') || '[]');
      orders.push(orderData);
      localStorage.setItem('muvadi_orders', JSON.stringify(orders));

      // Show modal
      if (successModal) {
        successModal.classList.add('active');
      }

      // Reset form
      orderForm.reset();
      updateSelectedCombo('combo2');
    });
  }

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
});
