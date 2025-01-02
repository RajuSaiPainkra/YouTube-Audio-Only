window.addEventListener('load', () => {
  const subscribeButton = document.querySelector('ytd-subscribe-button-renderer');
  if (subscribeButton) {
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.alignItems = 'center';
    buttonContainer.style.marginLeft = '10px';

    const playAudioButton = document.createElement('button');
    playAudioButton.textContent = 'Play Audio Only';
    playAudioButton.style.marginRight = '10px';
    playAudioButton.addEventListener('click', toggleAudioOnly);
    
    const downloadAudioButton = document.createElement('button');
    downloadAudioButton.textContent = 'Download Audio';
    downloadAudioButton.addEventListener('click', downloadAudio);

    buttonContainer.appendChild(playAudioButton);
    buttonContainer.appendChild(downloadAudioButton);
    
    subscribeButton.parentElement.appendChild(buttonContainer);
  }
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
