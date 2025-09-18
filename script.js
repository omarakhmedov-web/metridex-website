// Пока просто для возможных будущих интерактивов / анимаций

document.addEventListener('DOMContentLoaded', () => {
  // Пример: плавная прокрутка к секциям при клике
  const links = document.querySelectorAll('nav ul li a');
  for (const link of links) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop - 20, 
          behavior: 'smooth'
        });
      }
    });
  }
});
