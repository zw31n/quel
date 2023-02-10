const noButton = document.querySelector('.no');

noButton.addEventListener('mouseenter', function() {
  let x = Math.random() * (400 - noButton.offsetWidth);
  let y = Math.random() * (400 - noButton.offsetHeight);
  
  noButton.style.left = x + 'px';
  noButton.style.top = y + 'px';
});