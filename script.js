document.addEventListener('DOMContentLoaded', () => {
  // 🔽 Плавная прокрутка к якорям
  const links = document.querySelectorAll('nav ul li a[href^="#"]');
  for (const link of links) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop - 40,
          behavior: 'smooth'
        }); }
      }
    });
  }

  // 🌓 Переключение темы
  const themeToggle = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  if(themeToggle && htmlEl){ themeToggle.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
  });
});
