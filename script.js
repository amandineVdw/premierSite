// Micro-interaction boutons Glow
document.querySelectorAll('.btn-glow').forEach(btn => {
  btn.addEventListener('click', () => {
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_6a1b6c3e3b.mp3?filename=click-124467.mp3');
    audio.volume = 0.2;
    audio.play();
  });
});

// Burger menu
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burger.classList.toggle('open');
});