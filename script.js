document.addEventListener('DOMContentLoaded', function() {
  // Анимация параллакса при движении мыши
  document.addEventListener('mousemove', function(e) {
    const circle = document.querySelector('.parallax-circle');
    const aura = document.querySelector('.parallax-aura');
    if (circle && aura) {
      circle.style.transform = `translate(${e.clientX / 20}px, ${e.clientY / 20}px)`;
      aura.style.transform = `translate(${e.clientX / 10}px, ${e.clientY / 10}px)`;
    }
  });

  // Анимация текста
  const typewriterText = document.querySelector('.typewriter');
  if (typewriterText) {
    const words = [" выдающими", " запоминающимися", " вдохновляющими"];
    let wordIndex = 0;

    function typeWriter(text, i, fnCallback) {
      if (i < text.length) {
        typewriterText.innerHTML = text.substring(0, i + 1);
        setTimeout(() => typeWriter(text, i + 1, fnCallback), 100);
      } else if (fnCallback) {
        setTimeout(fnCallback, 700);
      }
    }

    function startTextAnimation(i) {
      if (i < words.length) {
        typeWriter(words[i], 0, () => startTextAnimation(i + 1));
      } else {
        wordIndex = 0;
        setTimeout(() => startTextAnimation(wordIndex), 2000);
      }
    }

    startTextAnimation(wordIndex);
  }

  
  // Управление видимостью изображений по одному
  const images = document.querySelectorAll('.fade-in');
  function checkVisibility() {
    images.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        img.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  checkVisibility(); // Initial check
});