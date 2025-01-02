document.getElementById("audioToggle").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: toggleAudioOnly
      });
    });
  });
  
  document.getElementById("downloadAudio").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: downloadAudio
      });
    });
  });
  
  function toggleAudioOnly() {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.pause(); // Stop the video
      videoElement.removeAttribute('poster'); // Remove video poster to save resources
      videoElement.setAttribute('muted', true); // Mute the video
    }
  }
  
  function downloadAudio() {
    const audioURL = document.querySelector('video').src;
    if (audioURL) {
      chrome.downloads.download({
        url: audioURL,
        filename: "audio-only.mp4"
      });
    } else {
      alert("Audio URL not found!");
    }
  }
  