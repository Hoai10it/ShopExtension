const pacScript = `
function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.macys.com")) {
    return "PROXY proxy.zf1.us:443";
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