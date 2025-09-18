(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  try{
    const saved = localStorage.getItem('metridex.theme') || localStorage.getItem('theme');
    if(saved === 'light'){ root.classList.add('light'); if(toggle) toggle.textContent='☀️'; }
  }catch(e){}
  toggle && toggle.addEventListener('click', ()=>{
    root.classList.toggle('light');
    const isLight = root.classList.contains('light');
    try{ localStorage.setItem('metridex.theme', isLight ? 'light' : 'dark'); }catch(e){}
    toggle.textContent = isLight ? '☀️' : '🌙';
  });

  burger && burger.addEventListener('click', ()=>{
    const open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.querySelectorAll('.cta-bot').forEach(a => {
    a.href='https://t.me/MetridexBot'; a.target='_blank'; a.rel='noopener';
  });
})();
