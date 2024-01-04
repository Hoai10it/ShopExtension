chrome.runtime.onInstalled.addListener(function() {
  console.log("Start of background.js");

  const pacScript = `
  function FindProxyForURL(url, host) {
    console.log("proxy setting");
    if (shExpMatch(url, "http://*") || shExpMatch(url, "https://*")) {
      if (shExpMatch(host, "*.macys.com")) {
        console.log("proxy enable");
        return "PROXY proxy.zf1.us:80";
      } else {
        return "DIRECT";
      }
    } else {
      return "DIRECT";
    }
  }
  `;

chrome.proxy.settings.set({
  value: {
    mode: "pac_script",
    pacScript: {
      data: pacScript
    }
  },
  scope: "regular"
});

console.log("End of background.js");
});