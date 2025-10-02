(function(){
  const root = document.documentElement;
  const langBtn = document.getElementById('langToggle');
  const themeBtn = document.getElementById('themeToggle');
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const dict = {
    en: {'nav.home':'Home','nav.about':'About','nav.features':'Features','nav.screens':'Screens','nav.partners':'Partners','nav.how':'How it works','nav.security':'Security','nav.pricing':'Pricing','nav.articles':'Articles','nav.videos':'Videos','nav.faq':'FAQ','nav.contact':'Contact','cta.watch':'▶ Watch demo','hero.title_a':'On‑chain Risk Metrics','hero.title_b':'for DeFi & Telegram','hero.sub':'QuickScan in seconds. Deep checks on demand.','cta.open':'Open @MetridexBot','cta.features':'See features','hero.card_title':'QuickScan snapshot','hero.card_li1':'Δ 5m / 1h / 6h / 24h','hero.card_li2':'Liquidity & holders','hero.card_li3':'Honeypot flags','hero.card_li4':'Shareable report','about.title':'About','about.copy':'Metridex helps communities, launchpads and traders spot risk signals fast: liquidity, holder patterns, contract flags, domain reputation (WHOIS/RDAP), SSL, Wayback and more.','features.title':'Features','feat.quick_t':'⚡ Quick','feat.quick_d':'Instant QuickScan with Δ‑buttons. No waiting, no noise.','feat.deep_t':'🧠 Deep','feat.deep_d':'WHOIS/RDAP, SSL, Wayback; on‑chain roles — only when needed.','feat.tech_t':'🧱 Tech','feat.tech_d':'Render (Flask/Gunicorn) + Cloudflare Worker ds‑proxy.','feat.rel_t':'✅ Reliable','feat.rel_d':'Stateless callbacks, idempotent delivery, cache‑first detail scan.','screens.title':'Screens','screens.cap1':'QuickScan','screens.cap2':'More details','partners.title':'Trusted by','how.title':'How it works','how.s1_t':'Paste token/contract','how.s1_d':'Run QuickScan in seconds.','how.s2_t':'Review signals','how.s2_d':'Δ‑metrics, holders, liquidity, flags.','how.s3_t':'Deep on demand','how.s3_d':'WHOIS/RDAP, SSL, Wayback, on‑chain roles.','sec.title':'Security','sec.data_t':'Data handling','sec.data_li1':'No private keys, seed phrases, or wallets collected.','sec.data_li2':'Requests processed transit‑only; minimized logs.','sec.infra_t':'Infrastructure','sec.infra_li1':'HTTPS, security headers, environment isolation.','sec.infra_li2':'Cloudflare edge + Render app isolation.','sec.compliance_t':'Compliance','sec.compliance_li1':'GDPR‑friendly, deletion on request.','sec.compliance_li2':'Responsible disclosure contact.','pricing.title':'Pricing','pricing.basic_t':'Basic','pricing.basic_d':'QuickScan only','pricing.basic_p':'Free','pricing.pro_t':'Pro','pricing.pro_d':'QuickScan + Deep checks','pricing.pro_p':'$29/mo','pricing.ent_t':'Enterprise','pricing.ent_d':'White‑label + SLA','pricing.ent_p':'Contact','faq.title':'FAQ','faq.q1':'What does QuickScan check?','faq.a1':'Δ‑metrics, liquidity & holders, basic contract flags, and a shareable report.','faq.q2':'What’s in Deep checks?','faq.a2':'WHOIS/RDAP, SSL chains, Wayback snapshots, and on‑chain roles — on demand.','faq.q3':'Where can I use it?','faq.a3':'Works great for launchpads, pro traders, and Telegram communities.','contact.title':'Contact','contact.email':'Email:','footer.rights':'All rights reserved.','articles.title':'Articles','articles.sub':'Insights on on‑chain risk, token intel and Web3 security.','articles.p1_t':'QuickScan method: how we compress risk into seconds','articles.p1_d':'Our philosophy: “fast first, deep on demand” — metrics, signals, and design principles.','articles.p2_t':'WHOIS & Wayback: a domain tells you more than you think','articles.p2_d':'Using registrars, SSL chains and historical snapshots to catch red flags early.','articles.p3_t':'Telegram safety for token communities','articles.p3_d':'Moderation, anti‑spam, and what to automate with Metridex.','videos.title':'Videos','videos.promo_t':'Metridex — Promo','videos.promo_d':'60s intro for QuickScan and deep checks.','videos.tour_t':'Quick Tour','videos.tour_d':'2‑minute walkthrough of the main flows.','videos.use_t':'Use Case','videos.use_d':'Scanning a token with red flags and next actions.', 'pricing.free_t':'Free', 'pricing.free_d':'2 QuickScan total, slow lane', 'pricing.free_li1':'2 lifetime scans', 'pricing.free_li2':'No Deep checks', 'pricing.free_li3':'Watermarked report', 'pricing.free_p':'$0', 'pricing.free_cta':'Start in Telegram', 'pricing.pro_li1':'300 scans / month', 'pricing.pro_li2':'WHOIS/RDAP/SSL/Wayback', 'pricing.pro_li3':'Export PDF/CSV, private links', 'pricing.pro_cta':'Upgrade via Bot', 'pricing.teams_t':'Teams', 'pricing.teams_d':'For groups with higher limits', 'pricing.teams_li1':'1,500 scans / month', 'pricing.teams_li2':'5 seats, shared dashboard', 'pricing.teams_li3':'Webhooks, SSO‑ready', 'pricing.teams_p':'$99/mo', 'pricing.teams_cta':'Start via Bot', 'pricing.ent_li1':'Custom limits', 'pricing.ent_li2':'SSO, SLA', 'pricing.ent_li3':'Dedicated support', 'pricing.ent_cta':'Contact sales', 'feat.watch_t':'🔔 Watchlist (lite)', 'feat.watch_d':'Opt-in alerts on price Δ, liquidity, holder & LP-lock changes, and major flags.', 'hero.tip':'One-pagers summarizing Metridex (QuickScan, methodology, pricing, roadmap). Save for offline or share.', 'banner.title':'You have 1 free QuickScan left', 'banner.sub':'Unlock Deep checks, exports and fast lane', 'banner.cta_open':'Open Bot', 'banner.cta_day':'Day‑Pass $9', 'banner.cta_pro':'Go Pro $29/mo'},
    ru: {'nav.home':'Главная','nav.about':'О нас','nav.features':'Функции','nav.screens':'Скрины','nav.partners':'Партнёры','nav.how':'Как это работает','nav.security':'Безопасность','nav.pricing':'Тарифы','nav.articles':'Статьи','nav.videos':'Видео','nav.faq':'FAQ','nav.contact':'Контакты','cta.watch':'▶ Смотреть демо','hero.title_a':'Он‑чейн метрики риска','hero.title_b':'для DeFi и Telegram','hero.sub':'QuickScan за секунды. Глубокие проверки по требованию.','cta.open':'Открыть @MetridexBot','cta.features':'Смотреть функции','hero.card_title':'Снимок QuickScan','hero.card_li1':'Δ 5м / 1ч / 6ч / 24ч','hero.card_li2':'Ликвидность и холдеры','hero.card_li3':'Флаги honeypot','hero.card_li4':'Отчёт для шаринга','about.title':'О нас','about.copy':'Metridex помогает коммьюнити, лаунчпадам и трейдерам быстро видеть сигналы риска: ликвидность, распределение холдеров, флаги контракта, репутация домена (WHOIS/RDAP), SSL, Wayback и другое.','features.title':'Функции','feat.quick_t':'⚡ Быстро','feat.quick_d':'Мгновенный QuickScan с Δ‑кнопками. Никакого шума.','feat.deep_t':'🧠 Глубоко','feat.deep_d':'WHOIS/RDAP, SSL, Wayback; он‑чейн роли — по требованию.','feat.tech_t':'🧱 Технологии','feat.tech_d':'Render (Flask/Gunicorn) + Cloudflare Worker ds‑proxy.','feat.rel_t':'✅ Надёжно','feat.rel_d':'Stateless‑коллбеки, идемпотентная доставка, cache‑first детализация.','screens.title':'Скриншоты','screens.cap1':'QuickScan','screens.cap2':'Подробнее','partners.title':'Нам доверяют','how.title':'Как это работает','how.s1_t':'Вставьте токен/контракт','how.s1_d':'QuickScan за секунды.','how.s2_t':'Проверьте сигналы','how.s2_d':'Δ‑метрики, холдеры, ликвидность, флаги.','how.s3_t':'Глубже по запросу','how.s3_d':'WHOIS/RDAP, SSL, Wayback, он‑чейн роли.','sec.title':'Безопасность','sec.data_t':'Обращение с данными','sec.data_li1':'Не собираем приватные ключи, сид‑фразы, кошельки.','sec.data_li2':'Запросы обрабатываются транзитно; логи минимальны.','sec.infra_t':'Инфраструктура','sec.infra_li1':'HTTPS, security‑заголовки, изоляция окружений.','sec.infra_li2':'Cloudflare edge + изоляция приложений Render.','sec.compliance_t':'Комплаенс','sec.compliance_li1':'Дружественно к GDPR, удаление по запросу.','sec.compliance_li2':'Контакт для responsible disclosure.','pricing.title':'Тарифы','pricing.basic_t':'Базовый','pricing.basic_d':'Только QuickScan','pricing.basic_p':'Бесплатно','pricing.pro_t':'Pro','pricing.pro_d':'QuickScan + Глубокие проверки','pricing.pro_p':'$29/мес','pricing.ent_t':'Enterprise','pricing.ent_d':'White‑label + SLA','pricing.ent_p':'Связаться','faq.title':'FAQ','faq.q1':'Что проверяет QuickScan?','faq.a1':'Δ‑метрики, ликвидность и холдеры, базовые флаги контракта и отчёт для шаринга.','faq.q2':'Что входит в Deep‑проверки?','faq.a2':'WHOIS/RDAP, цепочки SSL, снимки Wayback и он‑чейн роли — по запросу.','faq.q3':'Где это использовать?','faq.a3':'Подходит для лаунчпадов, профи‑трейдеров и Telegram‑сообществ.','contact.title':'Контакты','contact.email':'Почта:','footer.rights':'Все права защищены.','articles.title':'Статьи','articles.sub':'Наблюдения о рисках он‑чейн, токен‑интеле и безопасности Web3.','articles.p1_t':'Метод QuickScan: как мы ужимаем риск в секунды','articles.p1_d':'Наша философия: «сначала быстро, глубоко по требованию» — метрики, сигналы и принципы дизайна.','articles.p2_t':'WHOIS и Wayback: домен расскажет больше, чем кажется','articles.p2_d':'Регистр, SSL‑цепочки и исторические снимки помогают ловить красные флаги заранее.','articles.p3_t':'Безопасность в Telegram для токен‑сообществ','articles.p3_d':'Модерация, анти‑спам и что автоматизировать с Metridex.','videos.title':'Видео','videos.promo_t':'Metridex — Промо','videos.promo_d':'60‑сек. интро по QuickScan и глубоким проверкам.','videos.tour_t':'Быстрый тур','videos.tour_d':'2‑минутный обзор основных сценариев.','videos.use_t':'Кейс','videos.use_d':'Сканирование токена с красными флагами и дальнейшие действия.', 'pricing.free_t':'Free', 'pricing.free_d':'2 QuickScan всего, медленная очередь', 'pricing.free_li1':'2 проверки навсегда', 'pricing.free_li2':'Без Deep‑проверок', 'pricing.free_li3':'Отчёт с водяным знаком', 'pricing.free_p':'$0', 'pricing.free_cta':'Открыть в Telegram', 'pricing.pro_li1':'300 проверок / мес', 'pricing.pro_li2':'WHOIS/RDAP/SSL/Wayback', 'pricing.pro_li3':'Экспорт PDF/CSV, приватные ссылки', 'pricing.pro_cta':'Оформить через бота', 'pricing.teams_t':'Teams', 'pricing.teams_d':'Для команд с высокими лимитами', 'pricing.teams_li1':'1 500 проверок / мес', 'pricing.teams_li2':'5 мест, общий дашборд', 'pricing.teams_li3':'Вебхуки, SSO‑готово', 'pricing.teams_p':'$99/мес', 'pricing.teams_cta':'Старт через бота', 'pricing.ent_li1':'Кастомные лимиты', 'pricing.ent_li2':'SSO, SLA', 'pricing.ent_li3':'Выделенная поддержка', 'pricing.ent_cta':'Связаться с продажами', 'feat.watch_t':'🔔 Watchlist (lite)', 'feat.watch_d':'Оповещения по цене, ликвидности, изменениям держателей и LP‑lock, а также важным флагам.', 'hero.tip':'One-pager’ы по Metridex (QuickScan, методология, цены, дорожная карта). Сохраните для офлайна или поделитесь.', 'banner.title':'У вас остался 1 бесплатный QuickScan', 'banner.sub':'Откройте Deep‑проверки, экспорт и быстрый доступ', 'banner.cta_open':'Открыть бота', 'banner.cta_day':'Day‑Pass $9', 'banner.cta_pro':'Pro $29/мес'}
  };
  try{ window.dict = dict; }catch(e){}

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

  // Theme
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

  // Burger
  burger && burger.addEventListener('click', ()=>{
    const open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // CTAs
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

  // Reveal
  const observer = new IntersectionObserver((entries)=>{
    for(const e of entries){ if(e.isIntersecting){ e.target.classList.add('in'); observer.unobserve(e.target); } }
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

  // Video lightbox
  const modal = document.getElementById('videoModal');
  const videoEl = document.getElementById('lightboxVideo');
  function openVideo(kind){
    if(!modal || !videoEl) return;
    while(videoEl.firstChild) videoEl.removeChild(videoEl.firstChild);
    [{src:`/videos/${kind}.webm`, type:'video/webm'},{src:`/videos/${kind}.mp4`, type:'video/mp4'}].forEach(s=>{
      const el = document.createElement('source'); el.src=s.src; el.type=s.type; videoEl.appendChild(el);
    });
    videoEl.poster = `/posters/${kind}.jpg`; videoEl.load(); modal.hidden=false; videoEl.play().catch(()=>{});
    if(window.plausible){ window.plausible('Video Play', {props:{video:kind}}); }
  }
  function closeVideo(){
    if(!modal || !videoEl) return;
    modal.hidden=true; videoEl.pause();
    if(window.plausible){ window.plausible('Video Close', {props:{currentTime: Math.round(videoEl.currentTime)}}); }
  }
  document.querySelectorAll('[data-video]').forEach(el=>el.addEventListener('click', ()=>openVideo(el.getAttribute('data-video'))));
  document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click', closeVideo));
  modal && modal.addEventListener('click', (e)=>{ if(e.target.hasAttribute('data-close')) closeVideo(); });
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && modal && !modal.hidden) closeVideo(); });

  // Video progress
  if(videoEl){
    videoEl.addEventListener('ended', ()=>{ if(window.plausible){ window.plausible('Video Complete'); } });
    let marks = new Set();
    videoEl.addEventListener('timeupdate', ()=>{
      const dur = videoEl.duration || 0; if(!dur) return;
      const p = videoEl.currentTime / dur;
      [0.25,0.5,0.75].forEach(q=>{ if(p>=q && !marks.has(q)){ marks.add(q); if(window.plausible){ window.plausible('Video Progress', {props:{q}}); } } });
    });
  }
})();



// --- Paywall banner logic ---
function showPaywallBanner(){
  const bar = document.getElementById('paywallBanner'); if(!bar) return;
  bar.hidden = false;
}
function hidePaywallBanner(){
  const bar = document.getElementById('paywallBanner'); if(!bar) return;
  bar.hidden = true;
}
// Banner close
document.addEventListener('click', (e)=>{
  const btn = e.target.closest('.banner-close');
  if(btn){ hidePaywallBanner(); try{ localStorage.setItem('metridex.bannerClosed','1'); }catch(_){} }
});
// After first "demo" interaction (watchDemo or any [data-video]), set demoUsed
(function bannerInit(){
  const lang = (document.documentElement.getAttribute('data-lang')||'en');
  try{
    const used = parseInt(localStorage.getItem('metridex.demoCount')||'0',10);
    const closed = localStorage.getItem('metridex.bannerClosed')==='1';
    if(used>=1 && !closed){ showPaywallBanner(); }
  }catch(_){}
  // Hook watch demo button
  document.querySelectorAll('[data-video]').forEach(el=>el.addEventListener('click', ()=>{
    try{
      const cnt = parseInt(localStorage.getItem('metridex.demoCount')||'0',10)+1;
      localStorage.setItem('metridex.demoCount', String(cnt));
      if(cnt===1){ setTimeout(showPaywallBanner, 800); }
    }catch(_){}
    if(window.plausible){ window.plausible('Demo Click'); }
  }));
  // Banner CTA routing
  document.querySelectorAll('#paywallBanner .cta-bot').forEach(a=>{
    a.addEventListener('click', ()=>{
      if(window.plausible){ window.plausible('Banner CTA'); }
    });
  });
})();


// Ensure CTA bot links always point to Telegram bot
document.querySelectorAll('.cta-bot').forEach(a => { a.href='https://t.me/MetridexBot'; a.target='_blank'; a.rel='noopener'; });


// Add title-translation support for [data-i18n-title]
(function(){
  function setTooltipTitles(lang){
    try {
      var L = (lang || (localStorage.getItem('metridex.lang')||localStorage.getItem('lang')||'en')).toLowerCase();
      var bag = (window.dict && window.dict[L]) || {};
      document.querySelectorAll('[data-i18n-title]').forEach(function(el){
        var key = el.getAttribute('data-i18n-title');
        if (key && bag[key]) el.setAttribute('title', bag[key]);
      });
    } catch(e){}
  }
  // On load
  if (document.readyState !== 'loading') setTooltipTitles();
  else document.addEventListener('DOMContentLoaded', function(){ setTooltipTitles(); });

  // Patch applyLanguage if present
  if (typeof window.applyLanguage === 'function'){
    var _orig = window.applyLanguage;
    window.applyLanguage = function(lang){
      try { _orig(lang); } finally { setTooltipTitles(lang); }
    };
  }
})();


/* Metridex Lightbox bootstrap (idempotent) */
(function(){
  function ensureLightbox(){
    var lb = document.getElementById('mdxLightbox');
    if(!lb){
      lb = document.createElement('div');
      lb.id = 'mdxLightbox';
      lb.className = 'mdx-lightbox';
      lb.setAttribute('hidden','');
      var img = document.createElement('img');
      var btn = document.createElement('button');
      btn.className = 'mdx-close'; btn.setAttribute('aria-label','Close'); btn.textContent = '✕';
      lb.appendChild(img); lb.appendChild(btn);
      document.body.appendChild(lb);
    }
    return lb;
  }
  function openLB(src){
    var lb = ensureLightbox();
    var img = lb.querySelector('img');
    var btn = lb.querySelector('.mdx-close');
    img.src = src;
    lb.classList.add('open');
    lb.removeAttribute('hidden');
    function close(){ lb.classList.remove('open'); lb.setAttribute('hidden',''); }
    lb.addEventListener('click', close, {once:true});
    btn && btn.addEventListener('click', close, {once:true});
    document.addEventListener('keydown', function esc(e){ if(e.key==='Escape'){ close(); document.removeEventListener('keydown', esc);} });
  }
  function bindScreens(){
    document.querySelectorAll('.mdx-frame .mdx-stage img').forEach(function(img){
      if(!img.dataset.lbBound){
        img.dataset.lbBound = '1';
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function(){ openLB(img.currentSrc || img.src); });
      }
    });
  }
  // Run on ready and after load (in case images are added later)
  if(document.readyState === 'complete' || document.readyState === 'interactive'){ bindScreens(); }
  else { document.addEventListener('DOMContentLoaded', bindScreens); }
  window.addEventListener('load', bindScreens);
})();


// === AURUM-DELTA: Screens (mdx-frame) bootstrap ===
(function(){
  function parseList(s){
    if(!s) return [];
    return s.split(',').map(function(x){ return x.trim(); }).filter(Boolean);
  }
  function initFrames(){
    document.querySelectorAll('.mdx-frame').forEach(function(frame){
      if(frame.dataset.mdxInit) return;
      frame.dataset.mdxInit = '1';
      var stage = frame.querySelector('.mdx-stage');
      if(!stage){ stage = document.createElement('div'); stage.className='mdx-stage'; frame.appendChild(stage); }
      var imgs = parseList(frame.getAttribute('data-images'));
      // fallback to background-image if no list
      var bg = (frame.style && frame.style.backgroundImage) ? frame.style.backgroundImage.replace(/^url\(["']?(.+?)["']?\)$/, '$1') : null;
      if(imgs.length===0 && bg){ imgs = [bg]; }
      var idx = 0;
      function render(){
        if(!imgs.length) return;
        stage.innerHTML = '';
        var img = document.createElement('img');
        img.src = imgs[idx];
        img.alt = (frame.getAttribute('data-alt')||'Screenshot') + ' ('+(idx+1)+'/'+imgs.length+')';
        img.loading = 'lazy';
        img.decoding = 'async';
        img.style.width = '100%';
        img.style.height = 'auto';
        stage.appendChild(img);
      }
      render();
      // wire nav if present
      var prev = frame.parentElement && frame.parentElement.querySelector('.mdx-prev');
      var next = frame.parentElement && frame.parentElement.querySelector('.mdx-next');
      if(prev && next){
        prev.addEventListener('click', function(){ if(!imgs.length) return; idx=(idx-1+imgs.length)%imgs.length; render(); });
        next.addEventListener('click', function(){ if(!imgs.length) return; idx=(idx+1)%imgs.length; render(); });
      }
    });
  }
  if(document.readyState === 'complete' || document.readyState === 'interactive'){ initFrames(); }
  else { document.addEventListener('DOMContentLoaded', initFrames); }
  window.addEventListener('load', initFrames);
})();


// === AURUM-DELTA: mdx-frame swipe + lightbox ===
(function(){
  function onSwipe(el, cb){
    var sx=0, sy=0, dx=0, dy=0, start=false;
    el.addEventListener('touchstart', function(e){ 
      var t=e.touches[0]; sx=t.clientX; sy=t.clientY; start=true; 
    }, {passive:true});
    el.addEventListener('touchmove', function(e){ 
      if(!start) return; var t=e.touches[0]; dx=t.clientX-sx; dy=t.clientY-sy; 
    }, {passive:true});
    el.addEventListener('touchend', function(){ 
      if(!start) return; start=false; 
      if(Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) cb(dx>0? 'right':'left');
      dx=dy=0;
    }, {passive:true});
  }

  // Lightweight lightbox
  var lb, lbImg, lbPrev, lbNext, lbClose;
  function ensureLightbox(){
    if(lb) return;
    lb = document.createElement('div');
    lb.className = 'mdx-lightbox';
    lb.innerHTML = [
      '<button class="mdx-lb-close" aria-label="Close">×</button>',
      '<button class="mdx-lb-prev" aria-label="Prev">‹</button>',
      '<img class="mdx-lb-img" alt="screenshot">',
      '<button class="mdx-lb-next" aria-label="Next">›</button>'
    ].join('');
    document.body.appendChild(lb);
    lbImg = lb.querySelector('.mdx-lb-img');
    lbPrev = lb.querySelector('.mdx-lb-prev');
    lbNext = lb.querySelector('.mdx-lb-next');
    lbClose= lb.querySelector('.mdx-lb-close');
    lb.addEventListener('click', function(e){ if(e.target===lb) hide(); });
    lbClose.addEventListener('click', hide);
    document.addEventListener('keydown', function(e){
      if(!lb.classList.contains('open')) return;
      if(e.key==='Escape') hide();
      if(e.key==='ArrowLeft') trigger('prev');
      if(e.key==='ArrowRight') trigger('next');
    });
  }
  var currentSet = [], currentIdx = 0;
  function show(set, idx){
    ensureLightbox();
    currentSet = set; currentIdx = idx;
    lbImg.src = set[idx];
    lb.classList.add('open');
  }
  function hide(){ lb && lb.classList.remove('open'); }
  function trigger(dir){
    if(!currentSet.length) return;
    if(dir==='prev') currentIdx = (currentIdx-1+currentSet.length)%currentSet.length;
    if(dir==='next') currentIdx = (currentIdx+1)%currentSet.length;
    lbImg.src = currentSet[currentIdx];
  }

  // Attach to frames after AURUM-DELTA initFrames
  function enhanceFrames(){
    document.querySelectorAll('.mdx-frame').forEach(function(frame){
      if(frame.dataset.mdxEnhanced) return;
      var stage = frame.querySelector('.mdx-stage');
      if(!stage) return;
      frame.dataset.mdxEnhanced = '1';
      var list = [];
      var attr = frame.getAttribute('data-images');
      if(attr){
        list = attr.split(',').map(function(s){return s.trim();}).filter(Boolean);
      } else {
        var img = stage.querySelector('img');
        if(img) list = [img.src];
      }
      // click -> lightbox
      stage.addEventListener('click', function(){
        var cur = stage.querySelector('img');
        var idx = 0;
        if(cur){
          var curSrc = cur.getAttribute('src');
          idx = Math.max(0, list.indexOf(curSrc));
        }
        show(list, idx);
      });
      // swipe
      onSwipe(stage, function(dir){
        var ev = new Event(dir==='left' ? 'mdx-next' : 'mdx-prev');
        frame.dispatchEvent(ev);
      });
      // keyboard arrows over frame
      frame.setAttribute('tabindex','0');
      frame.addEventListener('keydown', function(e){
        if(e.key==='ArrowLeft') { frame.dispatchEvent(new Event('mdx-prev')); }
        if(e.key==='ArrowRight'){ frame.dispatchEvent(new Event('mdx-next')); }
      });
      // integrate with existing nav buttons or our events
      var prev = frame.parentElement && frame.parentElement.querySelector('.mdx-prev');
      var next = frame.parentElement && frame.parentElement.querySelector('.mdx-next');
      function clickPrev(){ if(prev) prev.click(); else frame.dispatchEvent(new Event('mdx-prev')); }
      function clickNext(){ if(next) next.click(); else frame.dispatchEvent(new Event('mdx-next')); }
      frame.addEventListener('mdx-prev', clickPrev);
      frame.addEventListener('mdx-next', clickNext);
    });
  }

  // When our base initFrames has run, enhance
  if(document.readyState==='complete' || document.readyState==='interactive'){
    setTimeout(enhanceFrames, 50);
  } else {
    document.addEventListener('DOMContentLoaded', function(){ setTimeout(enhanceFrames, 50); });
  }
  window.addEventListener('load', function(){ setTimeout(enhanceFrames, 50); });
})();


// === AURUM-DELTA: Supplemental navigation handlers for mdx-frame ===
(function(){
  function augmentFrame(frame){
    if(frame.dataset.mdxAugmented) return;
    var stage = frame.querySelector('.mdx-stage');
    if(!stage) return;
    // Gather current images from data-images or current <img>
    var imgs = [];
    var attr = frame.getAttribute('data-images');
    if(attr){ imgs = attr.split(',').map(function(s){return s.trim();}).filter(Boolean); }
    else {
      var cur = stage.querySelector('img'); if(cur) imgs = [cur.getAttribute('src')];
    }
    if(!imgs.length) return;
    // Derive index from current <img>
    var cur = stage.querySelector('img');
    var idx = 0;
    if(cur){
      var src = cur.getAttribute('src');
      var i = imgs.indexOf(src);
      if(i>=0) idx = i;
    }
    // Save state on element
    frame._mdxImgs = imgs;
    frame._mdxIdx = idx;
    frame._mdxRender = function(){
      var img = stage.querySelector('img');
      if(!img){ img = document.createElement('img'); stage.innerHTML=''; stage.appendChild(img); }
      img.src = frame._mdxImgs[frame._mdxIdx];
      img.alt = 'Screenshot ('+(frame._mdxIdx+1)+'/'+frame._mdxImgs.length+')';
      img.loading = 'lazy'; img.decoding='async'; img.style.width='100%'; img.style.height='auto';
    };
    // Attach event handlers
    frame.addEventListener('mdx-prev', function(){
      frame._mdxIdx = (frame._mdxIdx - 1 + frame._mdxImgs.length) % frame._mdxImgs.length;
      frame._mdxRender();
    });
    frame.addEventListener('mdx-next', function(){
      frame._mdxIdx = (frame._mdxIdx + 1) % frame._mdxImgs.length;
      frame._mdxRender();
    });
    frame.dataset.mdxAugmented = '1';
  }
  function run(){
    document.querySelectorAll('.mdx-frame').forEach(augmentFrame);
  }
  if(document.readyState==='complete' || document.readyState==='interactive'){ setTimeout(run, 50); }
  else { document.addEventListener('DOMContentLoaded', function(){ setTimeout(run, 50); }); }
  window.addEventListener('load', function(){ setTimeout(run, 50); });
})();


// === AURUM-DELTA: reinforce nav + lightbox close ===
(function(){
  function ensureButtons(frame, clickPrev, clickNext){
    // If no explicit .mdx-prev/.mdx-next, add our own
    var hasPrev = frame.querySelector('.mdx-prev');
    var hasNext = frame.querySelector('.mdx-next');
    if(!hasPrev){
      var p = document.createElement('button'); p.className='mdx-prev'; p.type='button'; p.innerHTML='‹';
      p.addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); clickPrev(); });
      frame.appendChild(p);
    }
    if(!hasNext){
      var n = document.createElement('button'); n.className='mdx-next'; n.type='button'; n.innerHTML='›';
      n.addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); clickNext(); });
      frame.appendChild(n);
    }
  }
  function augmentAll(){
    document.querySelectorAll('.mdx-frame').forEach(function(frame){
      if(frame.dataset.mdxReinforced) return;
      var stage = frame.querySelector('.mdx-stage');
      if(!stage) return;

      // grab imgs list
      var imgs = [];
      var attr = frame.getAttribute('data-images');
      if(attr){ imgs = attr.split(',').map(function(s){return s.trim();}).filter(Boolean); }
      else {
        var cur1 = stage.querySelector('img'); if(cur1) imgs = [cur1.getAttribute('src')];
      }
      if(!imgs.length) return;

      // current index from current <img>
      var cur = stage.querySelector('img'); var idx = 0;
      if(cur){
        var src = cur.getAttribute('src');
        var i = imgs.indexOf(src); if(i>=0) idx=i;
      }

      function render(){
        var img = stage.querySelector('img');
        if(!img){ img = document.createElement('img'); stage.innerHTML=''; stage.appendChild(img); }
        img.src = imgs[idx]; img.alt='Screenshot ('+(idx+1)+'/'+imgs.length+')';
        img.loading='lazy'; img.decoding='async'; img.style.width='100%'; img.style.height='auto';
      }
      function prev(){ idx=(idx-1+imgs.length)%imgs.length; render(); }
      function next(){ idx=(idx+1)%imgs.length; render(); }

      // store handlers and render
      frame._mdxImgs = imgs; frame._mdxIdx = idx; frame._mdxRender = render;
      render();

      // buttons (always ensure)
      ensureButtons(frame, prev, next);

      // events
      frame.addEventListener('mdx-prev', function(e){ e.stopPropagation(); prev(); });
      frame.addEventListener('mdx-next', function(e){ e.stopPropagation(); next(); });

      // swipe
      (function(el){
        var sx=0, sy=0, dx=0, dy=0, start=false;
        el.addEventListener('touchstart', function(e){ var t=e.touches[0]; sx=t.clientX; sy=t.clientY; start=true; }, {passive:true});
        el.addEventListener('touchmove', function(e){ if(!start) return; var t=e.touches[0]; dx=t.clientX-sx; dy=t.clientY-sy; }, {passive:true});
        el.addEventListener('touchend', function(){ if(!start) return; start=false;
          if(Math.abs(dx)>40 && Math.abs(dx)>Math.abs(dy)){ if(dx<0) next(); else prev(); }
          dx=dy=0;
        }, {passive:true});
      })(stage);

      // keyboard
      frame.setAttribute('tabindex','0');
      frame.addEventListener('keydown', function(e){
        if(e.key==='ArrowLeft'){ e.preventDefault(); prev(); }
        if(e.key==='ArrowRight'){ e.preventDefault(); next(); }
      });

      frame.dataset.mdxReinforced='1';
    });
  }
  if(document.readyState==='complete' || document.readyState==='interactive'){ setTimeout(augmentAll, 50); }
  else { document.addEventListener('DOMContentLoaded', function(){ setTimeout(augmentAll, 50); }); }
  window.addEventListener('load', function(){ setTimeout(augmentAll, 50); });

  // Fix lightbox: ensure close works and doesn't bubble
  document.addEventListener('click', function(e){
    var btn = e.target.closest && e.target.closest('.mdx-lb-close');
    if(btn){
      e.preventDefault(); e.stopPropagation();
      var lb = document.querySelector('.mdx-lightbox'); if(lb) lb.classList.remove('open');
    }
  }, true);
})();


// === AURUM-DELTA: robust nav + close ===
(function(){
  function setupFrame(frame){
    if(frame.dataset.mdxFull) return;
    var stage = frame.querySelector('.mdx-stage');
    if(!stage){ stage = document.createElement('div'); stage.className='mdx-stage'; frame.appendChild(stage); }
    // images list
    var list = [];
    var attr = frame.getAttribute('data-images');
    if(attr){ list = attr.split(',').map(function(s){return s.trim();}).filter(Boolean); }
    var cur = stage.querySelector('img');
    if(!list.length && cur){ list=[cur.getAttribute('src')]; }
    if(!list.length){
      // Try background-image fallback
      var bg = (frame.style && frame.style.backgroundImage) ? frame.style.backgroundImage.replace(/^url\(["']?(.+?)["']?\)$/, '$1') : null;
      if(bg) list=[bg];
    }
    if(!list.length) return;

    var idx = 0;
    function render(){
      var img = stage.querySelector('img');
      if(!img){ img = document.createElement('img'); stage.innerHTML=''; stage.appendChild(img); }
      img.src = list[idx];
      img.alt = 'Screenshot ('+(idx+1)+'/'+list.length+')';
      img.loading='lazy'; img.decoding='async';
      img.style.width='100%'; img.style.height='auto';
    }
    function prev(){ idx=(idx-1+list.length)%list.length; render(); }
    function next(){ idx=(idx+1)%list.length; render(); }
    render();

    // always show overlay buttons inside frame
    function ensureBtn(cls, label, handler){
      var b = frame.querySelector('.'+cls);
      if(!b){
        b = document.createElement('button');
        b.type='button'; b.className=cls; b.textContent=label;
        b.addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); handler(); });
        frame.appendChild(b);
      }
    }
    ensureBtn('mdx-prev','‹', prev);
    ensureBtn('mdx-next','›', next);

    // swipe on stage
    (function(el){
      var sx=0, sy=0, dx=0, dy=0, start=false;
      el.addEventListener('touchstart', function(e){ var t=e.touches[0]; sx=t.clientX; sy=t.clientY; start=true; }, {passive:true});
      el.addEventListener('touchmove', function(e){ if(!start) return; var t=e.touches[0]; dx=t.clientX-sx; dy=t.clientY-sy; }, {passive:true});
      el.addEventListener('touchend', function(){ if(!start) return; start=false;
        if(Math.abs(dx)>40 && Math.abs(dx)>Math.abs(dy)){ if(dx<0) next(); else prev(); }
        dx=dy=0;
      }, {passive:true});
    })(stage);

    // keyboard
    frame.setAttribute('tabindex','0');
    frame.addEventListener('keydown', function(e){
      if(e.key==='ArrowLeft'){ e.preventDefault(); prev(); }
      if(e.key==='ArrowRight'){ e.preventDefault(); next(); }
    });

    // click to lightbox
    stage.addEventListener('click', function(){
      openLightbox(list, idx, function(i){ idx=i; render(); });
    });

    frame.dataset.mdxFull='1';
  }

  // Simple lightbox with reliable close
  var LB=null;
  function ensureLB(){
    if(LB) return;
    var wrap = document.createElement('div');
    wrap.className='mdx-lightbox';
    wrap.innerHTML = '<button class="mdx-lb-close" aria-label="Close">×</button><img class="mdx-lb-img"><button class="mdx-lb-prev">‹</button><button class="mdx-lb-next">›</button>';
    document.body.appendChild(wrap);
    LB = {
      el: wrap,
      img: wrap.querySelector('.mdx-lb-img'),
      prev: wrap.querySelector('.mdx-lb-prev'),
      next: wrap.querySelector('.mdx-lb-next'),
      close: wrap.querySelector('.mdx-lb-close'),
      set: [], idx: 0, onChange:null
    };
    function stop(e){ e.preventDefault(); e.stopPropagation(); }
    LB.close.addEventListener('click', function(e){ stop(e); wrap.classList.remove('open'); });
    LB.prev.addEventListener('click', function(e){ stop(e); move(-1); });
    LB.next.addEventListener('click', function(e){ stop(e); move(1); });
    wrap.addEventListener('click', function(e){ if(e.target===wrap){ wrap.classList.remove('open'); } });
    document.addEventListener('keydown', function(e){
      if(!wrap.classList.contains('open')) return;
      if(e.key==='Escape'){ wrap.classList.remove('open'); }
      if(e.key==='ArrowLeft'){ move(-1); }
      if(e.key==='ArrowRight'){ move(1); }
    });
    function move(d){
      LB.idx = (LB.idx + d + LB.set.length) % LB.set.length;
      LB.img.src = LB.set[LB.idx];
      if(LB.onChange) LB.onChange(LB.idx);
    }
    LB.move = move;
  }

  function openLightbox(set, idx, onChange){
    ensureLB();
    LB.set = set.slice();
    LB.idx = Math.max(0, Math.min(idx, set.length-1));
    LB.onChange = onChange || null;
    LB.img.src = LB.set[LB.idx];
    LB.el.classList.add('open');
  }

  function boot(){
    document.querySelectorAll('.mdx-frame').forEach(setupFrame);
  }
  if(document.readyState==='complete' || document.readyState==='interactive'){ setTimeout(boot, 50); }
  else { document.addEventListener('DOMContentLoaded', function(){ setTimeout(boot, 50); }); }
  window.addEventListener('load', function(){ setTimeout(boot, 50); });
})();




// === SG v1 (2025-10-02) — screens block rebuilt cleanly ===
(function(){
  // Build (or reuse) a single lightbox in <body>
  let lb = document.querySelector('.sg-lightbox');
  if(!lb){
    lb = document.createElement('div');
    lb.className = 'sg-lightbox';
    lb.setAttribute('hidden','');
    lb.innerHTML = [
      '<button class="sg-close" aria-label="Close">✕</button>',
      '<button class="sg-lb-prev" aria-label="Prev">❮</button>',
      '<img class="sg-lb-img" alt="Preview">',
      '<button class="sg-lb-next" aria-label="Next">❯</button>'
    ].join('');
    document.body.appendChild(lb);
  }else{
    // Ensure correct inner markup
    lb.innerHTML = [
      '<button class="sg-close" aria-label="Close">✕</button>',
      '<button class="sg-lb-prev" aria-label="Prev">❮</button>',
      '<img class="sg-lb-img" alt="Preview">',
      '<button class="sg-lb-next" aria-label="Next">❯</button>'
    ].join('');
  }
  const body = document.body;
  const imgEl = lb.querySelector('.sg-lb-img');
  const btnClose = lb.querySelector('.sg-close');
  const btnPrev = lb.querySelector('.sg-lb-prev');
  const btnNext = lb.querySelector('.sg-lb-next');

  let groups = {};
  let current = { key:null, i:-1 };

  // Init carousels
  document.querySelectorAll('#screens .sg-card').forEach(card => {
    const key = card.getAttribute('data-group') || 'G';
    const imgs = Array.from(card.querySelectorAll('.sg-track img')).map(x => x.getAttribute('src'));
    groups[key] = imgs;

    // Click to open
    card.querySelectorAll('.sg-track img').forEach((im, i) => {
      im.addEventListener('click', () => openLB(key, i));
    });

    // Arrows: scroll container by card width
    const track = card.querySelector('.sg-track');
    card.querySelector('.sg-prev').addEventListener('click', () => track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' }));
    card.querySelector('.sg-next').addEventListener('click', () => track.scrollBy({ left:  track.clientWidth, behavior: 'smooth' }));
  });

  function openLB(key, i){
    current.key = key; current.i = i;
    imgEl.setAttribute('src', groups[key][i]);
    lb.classList.add('open');
    lb.removeAttribute('hidden');
    body.classList.add('sg-no-scroll');
  }
  function closeLB(){
    lb.classList.remove('open');
    lb.setAttribute('hidden','');
    body.classList.remove('sg-no-scroll');
  }
  function step(d){
    const arr = groups[current.key] || [];
    if(!arr.length) return;
    current.i = (current.i + d + arr.length) % arr.length;
    imgEl.setAttribute('src', arr[current.i]);
  }

  btnClose.addEventListener('click', closeLB);
  btnPrev.addEventListener('click', () => step(-1));
  btnNext.addEventListener('click', () => step(1));
  lb.addEventListener('click', (e) => { if(e.target === lb) closeLB(); });
  document.addEventListener('keydown', (e) => {
    if(!lb.classList.contains('open')) return;
    if(e.key === 'Escape') closeLB();
    if(e.key === 'ArrowLeft') step(-1);
    if(e.key === 'ArrowRight') step(1);
  });
})();
