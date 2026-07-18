
const heart = document.querySelector('.heart');

heart.addEventListener('click', function() {
  alert('I miss your ass 💕');
});
const hearts = document.querySelectorAll('.heart');

hearts.forEach(function(heart) {
  heart.addEventListener('click', function() {
    const message = heart.getAttribute('data-message');
    alert(message);
  });
});