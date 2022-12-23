const buyButton = document.getElementById('buy-button');
buyButton.addEventListener('click', function() {
  // Decrement the token count
  const tokenCountElement = document.getElementById('token-count');
  const currentCount = parseInt(tokenCountElement.innerHTML, 10);
  if (currentCount > 0) {
    tokenCountElement.innerHTML = currentCount - 1;
  }

  // Play the video
  const videoContainer = document.getElementById('video-container');
  const iframe = videoContainer.querySelector('iframe');
  iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
});
