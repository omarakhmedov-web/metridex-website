(function(){
  const root = document.documentElement;
  const langBtn = document.getElementById('langToggle');
  const themeBtn = document.getElementById('themeToggle');
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // i18n (extend keys from previous version)
  const dict = (window.__i18nDict || {
    en: {'nav.videos':'Videos'},
    ru: {'nav.videos':'Видео'}
  });
  window.__i18nDict = dict;

  function applyLang(lang){
    root.setAttribute('data-lang', lang);
    try{ localStorage.setItem('metridex.lang', lang); }catch(e){}
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(dict[lang] && dict[lang][key]) el.textContent = dict[lang][key];
    });
    if(langBtn) langBtn.textContent = lang.toUpperCase();
  }
  let savedLang = 'en';
  try{ savedLang = localStorage.getItem('metridex.lang') || 'en'; }catch(e){}
  applyLang(savedLang);
  langBtn && langBtn.addEventListener('click', ()=>{
    const next = (root.getAttribute('data-lang')==='en') ? 'ru' : 'en';
    applyLang(next);
  });

  try{
    const saved = localStorage.getItem('metridex.theme') || localStorage.getItem('theme');
    if(saved === 'light'){ root.classList.add('light'); if(themeBtn) themeBtn.textContent='☀️'; }
  }catch(e){}
  themeBtn && themeBtn.addEventListener('click', ()=>{
    root.classList.toggle('light');
    const isLight = root.classList.contains('light');
    try{ localStorage.setItem('metridex.theme', isLight ? 'light' : 'dark'); }catch(e){}
    themeBtn.textContent = isLight ? '☀️' : '🌙';
  });

  burger && burger.addEventListener('click', ()=>{
    const open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.querySelectorAll('.cta-bot').forEach(a => { a.href='https://t.me/MetridexBot'; a.target='_blank'; a.rel='noopener'; });

  // Fixed nav offset
  const nav = document.getElementById('siteNav');
  function setOffset(){
    if(!nav) return;
    const h = nav.getBoundingClientRect().height || 72;
    document.body.classList.add('has-fixed-nav');
    document.body.style.paddingTop = h + 'px';
  }
  window.addEventListener('load', setOffset);
  window.addEventListener('resize', setOffset);

  // Reveal animations
  const observer = new IntersectionObserver((entries)=>{
    for(const e of entries){ if(e.isIntersecting){ e.target.classList.add('in'); observer.unobserve(e.target); } }
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

  // ---- Video lightbox ----
  const modal = document.getElementById('videoModal');
  const videoEl = document.getElementById('lightboxVideo');
  function openVideo(kind){
    if(!modal || !videoEl) return;
    // Clear previous sources
    while(videoEl.firstChild) videoEl.removeChild(videoEl.firstChild);
    // Inject sources (paths expected later)
    const sources = [
      {src:`/videos/${kind}.webm`, type:'video/webm'},
      {src:`/videos/${kind}.mp4`, type:'video/mp4'}
    ];
    sources.forEach(s=>{
      const el = document.createElement('source');
      el.src = s.src; el.type = s.type; videoEl.appendChild(el);
    });
    videoEl.poster = `/posters/${kind}.jpg`;
    videoEl.load();
    modal.hidden = false;
    videoEl.play().catch(()=>{});
    if(window.plausible){ window.plausible('Video Play', {props:{video:kind}}); }
  }
  function closeVideo(){
    if(!modal || !videoEl) return;
    modal.hidden = true;
    videoEl.pause();
    if(window.plausible){ window.plausible('Video Close', {props:{currentTime: Math.round(videoEl.currentTime)}}); }
  }
  document.querySelectorAll('[data-video]').forEach(el=>{
    el.addEventListener('click', ()=>openVideo(el.getAttribute('data-video')));
  });
  modal && modal.addEventListener('click', (e)=>{ if(e.target.hasAttribute('data-close')) closeVideo(); });
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && !modal.hidden) closeVideo(); });

  // Completion tracking
  if(videoEl){
    videoEl.addEventListener('ended', ()=>{ if(window.plausible){ window.plausible('Video Complete', {props:{video: videoEl.poster}}); } });
    // quartiles
    let marks = new Set();
    videoEl.addEventListener('timeupdate', ()=>{
      const dur = videoEl.duration || 0;
      if(!dur) return;
      const p = videoEl.currentTime / dur;
      const qs = [0.25,0.5,0.75];
      qs.forEach(q=>{
        if(p>=q && !marks.has(q)){
          marks.add(q);
          if(window.plausible){ window.plausible('Video Progress', {props:{q: q}}); }
        }
      });
    });
  }
})();
