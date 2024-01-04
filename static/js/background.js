const pacScript = `
  function FindProxyForURL(url, host) {
    console.log("proxy setting");
    if (shExpMatch(host, "*.macys.com")) {
      console.log("proxy enable");
      return "PROXY 142.147.114.50:8080";
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