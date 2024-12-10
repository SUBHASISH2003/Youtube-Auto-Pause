
YouTube Auto Pause - Chrome Extension


Overview:
YouTube Auto Pause is a Chrome extension that automatically pauses YouTube videos when you switch away from a YouTube tab and resumes playback when you return to the tab. This ensures that you don't miss any content when multitasking.

Features:
Auto-Pause: Pauses YouTube videos when you switch tabs.
Auto-Resume: Resumes playback when you return to a YouTube tab.
Simple and lightweight implementation.

File Structure:
background.js: Handles tab events like activation and updates, sending play/pause messages to the appropriate tabs.
content.js: Receives messages from the background script and controls the YouTube video element.
manifest.json: Defines the extension's metadata, permissions, and resources.
popup.html(optional)


Installation
Clone or Download the Repository

Load the Extension:
Open Chrome and navigate to chrome://extensions/.
Enable Developer Mode (toggle in the top-right corner).
Click Load unpacked and select the folder containing the extension files.

Test the Extension:
Open a YouTube video in a Chrome tab.
Switch tabs to observe the video pausing automatically.
Return to the YouTube tab to see the video resume playback.


How It Works

1. Background Script Workflow:
      Detects tab changes and sends appropriate actions (play or pause) to YouTube tabs.
2. Content Script Workflow:
       Receives these actions and controls the video playback using YouTube's <video> element.

Known Limitations
     Only works on www.youtube.com pages.
     Requires tabs to fully load before actions can be executed.