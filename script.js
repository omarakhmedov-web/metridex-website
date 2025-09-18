(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme init
  const saved = localStorage.getItem('theme');
  if(saved === 'light'){ root.classList.add('light'); toggle && (toggle.textContent='☀️'); }
  toggle && toggle.addEventListener('click', ()=>{
    root.classList.toggle('light');
    const isLight = root.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    toggle.textContent = isLight ? '☀️' : '🌙';
  });

  // Burger menu
  burger && burger.addEventListener('click', ()=>{
    const open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Normalize CTAs to bot
  const botLinks = document.querySelectorAll('.cta-bot, #connect-bot, a[data-bot]');
  botLinks.forEach(a => { a.href='https://t.me/MetridexBot'; a.target='_blank'; a.rel='noopener'; });
})();
