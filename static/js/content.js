chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggleExtension") {
    // Xử lý logic khi extension bật/tắt
    if (request.enabled) {
      // Bật extension
      console.log("Bật extension");
    } else {
      console.log("Tắt extension");
      // Tắt extension
    }
  }
});

// Đảm bảo đoạn mã sẽ chạy sau khi trang đã được tải hoàn toàn
$(document).ready(function() {
  // control html
  $("#openProxy").on("click", function() {
    // Kiểm tra trạng thái hiện tại của proxy
    chrome.storage.sync.get("proxyEnabled", function(data) {
      const proxyEnabled = data.proxyEnabled || false;

      // Đảo ngược trạng thái proxy và lưu vào storage
      chrome.storage.sync.set({ proxyEnabled: !proxyEnabled }, function() {
        // Hiển thị trạng thái mới
        updateProxyStatus(!proxyEnabled);
      });
    });
  });

  // Hàm cập nhật trạng thái proxy trên UI
  function updateProxyStatus(proxyEnabled) {
    const statusText = proxyEnabled ? "Proxy is Open" : "Proxy is Closed";
    const imageUrl = proxyEnabled ? "static/assets/toggle_on" : "static/assets/toggle_off";
    $("#status").text(statusText);
    $("#openProxy").css("background-image", "url(" + imageUrl + ")");

    // Thực hiện các thay đổi khác dựa trên trạng thái proxy nếu cần
    // Ví dụ: mở/rắt trạng thái nút, thay đổi màu sắc, vv.
  }
});

