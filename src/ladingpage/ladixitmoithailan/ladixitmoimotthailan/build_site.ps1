$html = [System.IO.File]::ReadAllText("$PSScriptRoot\original.html", [System.Text.Encoding]::UTF8)

# 1. Replace css & js paths
$html = $html.Replace("https://api.webcake.io/animate/animatev4.css?v=1", "css/animatev4.css")
$html = $html.Replace("https://api.webcake.io/render_iconfont/iconfont.css?v=1", "css/iconfont.css")
$html = $html.Replace("https://a.pancake.vn/js/fingerprint.js", "js/fingerprint.js")
$html = $html.Replace('src="/webcake/v4/f0ee6f35-6006-4f12-b6fe-528d3cc14ba6"', 'src="webcake/v4/f0ee6f35-6006-4f12-b6fe-528d3cc14ba6"')

# 2. Replace all image URLs from url_map.json
$jsonContent = [System.IO.File]::ReadAllText("$PSScriptRoot\url_map.json", [System.Text.Encoding]::UTF8)
$map = ConvertFrom-Json $jsonContent

$replaceCount = 0
foreach ($prop in $map.PSObject.Properties) {
    $origUrl = $prop.Name
    $localPath = $prop.Value
    
    # Direct replacement
    if ($html.Contains($origUrl)) {
        $html = $html.Replace($origUrl, $localPath)
        $replaceCount++
    }
    
    # Escaped slashes replacement for JSON inside script tags: https:\/\/...
    $escapedOrig = $origUrl.Replace("/", "\/")
    $escapedLocal = $localPath.Replace("/", "\/")
    if ($html.Contains($escapedOrig)) {
        $html = $html.Replace($escapedOrig, $escapedLocal)
        $replaceCount++
    }
}

Write-Host "Replaced $replaceCount URL instances."

# 3. Add a nice touch: Make sure form submits cleanly with feedback and modal
$enhancedScript = @"
<script>
  // Enhanced Form Handling for Standalone / Local Dev
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('o5h82ysn');
    if (form) {
      form.addEventListener('submit', function(e) {
        // Prevent redirect error if API offline, provide smooth user feedback
        var nameInput = form.querySelector('input[name="full_name"]');
        var phoneInput = form.querySelector('input[name="phone_number"]');
        var addressInput = form.querySelector('input[name="address"]');
        var radioInput = form.querySelector('input[type="radio"]:checked');
        
        var fullName = nameInput ? nameInput.value : '';
        var phone = phoneInput ? phoneInput.value : '';
        var address = addressInput ? addressInput.value : '';
        var packageChoosen = radioInput ? (radioInput.closest('label') ? radioInput.closest('label').innerText : radioInput.value) : 'Mua 2 bình: 599.000đ';

        console.log('Đơn hàng mới nhận được:', {
          fullName: fullName,
          phone: phone,
          address: address,
          package: packageChoosen,
          timestamp: new Date().toISOString()
        });

        // Show thank you modal popup
        setTimeout(function() {
          var popup = document.getElementById('order-success-modal');
          if (popup) {
            popup.style.display = 'flex';
          }
        }, 500);
      });
    }
  });

  function closeOrderModal() {
    var popup = document.getElementById('order-success-modal');
    if (popup) {
      popup.style.display = 'none';
    }
  }
</script>

<!-- Thank You Popup Modal for Completed Orders -->
<div id="order-success-modal" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.65); z-index:99999999; align-items:center; justify-content:center; backdrop-filter:blur(4px); -webkit-backdrop-filter:blur(4px);">
  <div style="background:#fff; border-radius:16px; max-width:400px; width:90%; padding:28px 24px; text-align:center; box-shadow:0 20px 40px rgba(0,0,0,0.25); position:relative; animation:modalPopIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
    <div style="width:68px; height:68px; background:#e8f5e9; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px; border:2px solid #4caf50;">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
    <h3 style="font-family:'Montserrat',sans-serif; font-size:22px; font-weight:700; color:#1b5e20; margin-bottom:8px;">ĐẶT HÀNG THÀNH CÔNG!</h3>
    <p style="font-size:14px; color:#4a5568; line-height:1.6; margin-bottom:18px;">
      Cảm ơn bạn đã tin tưởng lựa chọn <b>Bình xịt diệt mối Thái Lan Chaindrite</b>.<br>
      Chuyên viên tư vấn sẽ liên hệ lại qua số điện thoại để xác nhận đơn hàng và gửi hàng ngay hôm nay!
    </p>
    <div style="background:#f7fafc; border-radius:8px; padding:12px; font-size:13px; color:#2d3748; margin-bottom:20px; border-left:4px solid #e67e22; text-align:left;">
      🚚 <b>Giao hàng toàn quốc</b> - Kiểm tra hàng trước khi thanh toán<br>
      🎁 <b>Ưu đãi</b>: Miễn phí vận chuyển cho combo 2 bình
    </div>
    <button onclick="closeOrderModal()" style="background:linear-gradient(135deg, #e67e22, #d35400); color:#fff; border:none; border-radius:8px; padding:12px 32px; font-size:15px; font-weight:bold; cursor:pointer; width:100%; box-shadow:0 4px 12px rgba(230,126,34,0.4); transition:transform 0.2s;">
      ĐỒNG Ý
    </button>
  </div>
</div>
<style>
  @keyframes modalPopIn {
    0% { transform: scale(0.85); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
</style>
"@

$html = $html.Replace("</body>", "$enhancedScript`n</body>")

# 4. Save to index.html
[System.IO.File]::WriteAllText("$PSScriptRoot\index.html", $html, [System.Text.Encoding]::UTF8)

Write-Host "Created index.html successfully! Size: $( (Get-Item "$PSScriptRoot\index.html").Length ) bytes."
