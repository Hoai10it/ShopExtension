$(document).ready(function() {
  $('#toggleProxy').click(function() {
    // Gửi thông điệp đến background script khi nút được nhấp
    console.log("click")
    chrome.runtime.sendMessage({ toggleProxy: true });
  });
});