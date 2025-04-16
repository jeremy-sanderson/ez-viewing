// Content script that runs on specified domains
console.log('EZ Viewing content script loaded');

// Add your domain-specific functionality here

function makeLlamaEasier() {
  const fastPlaybackRate = 2;
  const mediaElts = [...document.querySelectorAll('audio'), ...document.querySelectorAll('video')];
  for (const mediaElt of mediaElts) {
    mediaElt.playbackRate = fastPlaybackRate;
    mediaElt.addEventListener('play', () => {
      // When the play button is pressed, Easy Llama resets the playbackRate.
      // We add slight delay to get around this.
      setTimeout(() => (mediaElt.playbackRate = fastPlaybackRate), 50);
    });
  }
}

function preventWindowBlurPause() {
  // Auto-resume media that gets paused by the window blur event
  let playingMedia: HTMLMediaElement[] = [];

  // Before blur, record which media elements are playing
  window.addEventListener('blur', () => {
    // Save all currently playing media elements
    // Find all playing media elements and cast them properly
    const mediaElements = document.querySelectorAll('audio, video');
    playingMedia = [];

    mediaElements.forEach((media: Element) => {
      const mediaElement = media as HTMLMediaElement;
      if (!mediaElement.ended && mediaElement.played.end(0) > 0) {
        playingMedia.push(mediaElement);
      }
    });
    console.log(`EZ Viewing: ${playingMedia.length} media elements were playing before blur`);
    // Resume any media that was playing but got paused
    playingMedia.forEach((media: HTMLMediaElement) => {
      if (media.paused) {
        console.log('EZ Viewing: Auto-resuming paused media');
        media.play().catch((e) => console.log('Could not auto-resume:', e));
      }
    });
  });
}

setInterval(() => {
  console.log('Upgrading viewing experience...');
  makeLlamaEasier();
  preventWindowBlurPause();
}, 5000);
 