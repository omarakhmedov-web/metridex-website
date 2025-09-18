// build: v030b
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

  const botUrlHero = 'https://t.me/MetridexBot?start=web_landing&src=site&med=hero&ver=v030b';
  const botUrlFab  = 'https://t.me/MetridexBot?start=web_landing&src=site&med=fab&ver=v030b';
  document.querySelectorAll('.cta-row .cta-bot').forEach(a => { a.href=botUrlHero; a.target='_blank'; a.rel='noopener'; });
  const fab = document.querySelector('.float-cta'); if(fab) fab.href = botUrlFab;

  function track(event, extra){ try{ window.dataLayer = window.dataLayer || []; window.dataLayer.push({event, ...extra}); }catch(e){} }
  document.querySelectorAll('.cta-bot').forEach(a => a.addEventListener('click', ()=>track('bot_click', {place:a.className, ver:'v030b'})));
})();
