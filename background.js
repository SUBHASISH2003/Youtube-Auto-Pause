// Handle tab activation (switching between tabs)
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const activeTab = await chrome.tabs.get(activeInfo.tabId);

  if (activeTab.url && activeTab.url.includes("youtube.com")) {
    // Send "play" action to the active YouTube tab
    chrome.tabs.sendMessage(activeTab.id, { action: "play" }, (response) => {
      if (chrome.runtime.lastError) {
        console.warn("Content script not loaded on play:", chrome.runtime.lastError.message);
      }
    });
  } else {
    // Send "pause" action to all YouTube tabs
    const youtubeTabs = await chrome.tabs.query({ url: "*://www.youtube.com/*" });
    youtubeTabs.forEach((tab) => {
      chrome.tabs.sendMessage(tab.id, { action: "pause" }, (response) => {
        if (chrome.runtime.lastError) {
          console.warn("Content script not loaded on pause:", chrome.runtime.lastError.message);
        }
      });
    });
  }
});

// Handle tab updates (when a tab finishes loading)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url.includes("youtube.com")) {
    chrome.tabs.sendMessage(tabId, { action: "play" }, (response) => {
      if (chrome.runtime.lastError) {
        console.warn("Content script not loaded on tab update:", chrome.runtime.lastError.message);
      }
    });
  }
});
