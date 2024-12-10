// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const video = document.querySelector("video"); // Get the YouTube video element

  if (video) {
    if (message.action === "play") {
      if (video.paused) {
        video.play().catch((err) => console.error("Error playing video:", err));
      }
    } else if (message.action === "pause") {
      if (!video.paused) {
        video.pause();
      }
    }
    sendResponse({ status: "success" }); // Respond to the message
  } else {
    console.warn("No video element found on the page.");
    sendResponse({ status: "no-video" }); // Respond if no video found
  }
  return true; // Keep the message channel open for async responses
});
