const buyButton = document.getElementById('buy-button');
buyButton.addEventListener('click', function() {
  // Decrement the token count and play the video
  // ...

  // Disable the button for 250 seconds
  buyButton.disabled = true;
  setTimeout(function() {
    buyButton.disabled = false;
  }, 250000); // 250 seconds in milliseconds
});
