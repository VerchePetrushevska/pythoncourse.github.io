const videoContainer = document.querySelector('.videa-container');
const videoIframe = videoContainer.querySelector('.video-iframe');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const videoIDs = ['8wXNbXLLvUQ', 'jMXHteu8V-k', '7ATl6akh0d8', 'jvtezdIqVg0', 'rk_50h93hdc', 'jwc0cptLRFg', 'FaPOP1ZbwlA', 'avx80lPQMVs'];

let currentVideoIndex = 0;

function loadVideo(index) {
  const videoID = videoIDs[index];
  const videoURL = `https://www.youtube.com/embed/${videoID}`;
  videoIframe.src = videoURL;
}

prevButton.addEventListener('click', () => {
  if (currentVideoIndex > 0) {
    currentVideoIndex--;
    loadVideo(currentVideoIndex);
  }
});

nextButton.addEventListener('click', () => {
  if (currentVideoIndex < videoIDs.length - 1) {
    currentVideoIndex++;
    loadVideo(currentVideoIndex);
  }
});

// Initial load of the first video
loadVideo(currentVideoIndex);
