window.addEventListener('load', () => {
    const video = document.querySelector('video');
    if (video) {
      video.addEventListener('play', () => {
        video.playbackRate = 1; // Set default playback rate for smooth audio
      });
    }
  });
  