(function(){
  const root = document.documentElement;
  const langBtn = document.getElementById('langToggle');
  const themeBtn = document.getElementById('themeToggle');
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const dict = {
    en: {'nav.home':'Home','nav.about':'About','nav.features':'Features','nav.screens':'Screens','nav.partners':'Partners','nav.how':'How it works','nav.security':'Security','nav.pricing':'Pricing','nav.articles':'Articles','nav.videos':'Videos','nav.faq':'FAQ','nav.contact':'Contact','cta.watch':'▶ Watch demo','hero.title_a':'On‑chain Risk Metrics','hero.title_b':'for DeFi & Telegram','hero.sub':'QuickScan in seconds. Deep checks on demand.','cta.open':'Open @MetridexBot','cta.features':'See features','hero.card_title':'QuickScan snapshot','hero.card_li1':'Δ 5m / 1h / 6h / 24h','hero.card_li2':'Liquidity & holders','hero.card_li3':'Honeypot flags','hero.card_li4':'Shareable report','about.title':'About','about.copy':'Metridex helps communities, launchpads and traders spot risk signals fast: liquidity, holder patterns, contract flags, domain reputation (WHOIS/RDAP), SSL, Wayback and more.','features.title':'Features','feat.quick_t':'⚡ Quick','feat.quick_d':'Instant QuickScan with Δ‑buttons. No waiting, no noise.','feat.deep_t':'🧠 Deep','feat.deep_d':'WHOIS/RDAP, SSL, Wayback; on‑chain roles — only when needed.','feat.tech_t':'🧱 Tech','feat.tech_d':'Render (Flask/Gunicorn) + Cloudflare Worker ds‑proxy.','feat.rel_t':'✅ Reliable','feat.rel_d':'Stateless callbacks, idempotent delivery, cache‑first detail scan.','screens.title':'Screens','screens.cap1':'QuickScan','screens.cap2':'More details','partners.title':'Trusted by','how.title':'How it works','how.s1_t':'Paste token/contract','how.s1_d':'Run QuickScan in seconds.','how.s2_t':'Review signals','how.s2_d':'Δ‑metrics, holders, liquidity, flags.','how.s3_t':'Deep on demand','how.s3_d':'WHOIS/RDAP, SSL, Wayback, on‑chain roles.','sec.title':'Security','sec.data_t':'Data handling','sec.data_li1':'No private keys, seed phrases, or wallets collected.','sec.data_li2':'Requests processed transit‑only; minimized logs.','sec.infra_t':'Infrastructure','sec.infra_li1':'HTTPS, security headers, environment isolation.','sec.infra_li2':'Cloudflare edge + Render app isolation.','sec.compliance_t':'Compliance','sec.compliance_li1':'GDPR‑friendly, deletion on request.','sec.compliance_li2':'Responsible disclosure contact.','pricing.title':'Pricing','pricing.basic_t':'Basic','pricing.basic_d':'QuickScan only','pricing.basic_p':'Free','pricing.pro_t':'Pro','pricing.pro_d':'QuickScan + Deep checks','pricing.pro_p':'$29/mo','pricing.ent_t':'Enterprise','pricing.ent_d':'White‑label + SLA','pricing.ent_p':'Contact','faq.title':'FAQ','faq.q1':'What does QuickScan check?','faq.a1':'Δ‑metrics, liquidity & holders, basic contract flags, and a shareable report.','faq.q2':'What’s in Deep checks?','faq.a2':'WHOIS/RDAP, SSL chains, Wayback snapshots, and on‑chain roles — on demand.','faq.q3':'Where can I use it?','faq.a3':'Works great for launchpads, pro traders, and Telegram communities.','contact.title':'Contact','contact.email':'Email:','footer.rights':'All rights reserved.','articles.title':'Articles','articles.sub':'Insights on on‑chain risk, token intel and Web3 security.','articles.p1_t':'QuickScan method: how we compress risk into seconds','articles.p1_d':'Our philosophy: “fast first, deep on demand” — metrics, signals, and design principles.','articles.p2_t':'WHOIS & Wayback: a domain tells you more than you think','articles.p2_d':'Using registrars, SSL chains and historical snapshots to catch red flags early.','articles.p3_t':'Telegram safety for token communities','articles.p3_d':'Moderation, anti‑spam, and what to automate with Metridex.','videos.title':'Videos','videos.promo_t':'Metridex — Promo','videos.promo_d':'60s intro for QuickScan and deep checks.','videos.tour_t':'Quick Tour','videos.tour_d':'2‑minute walkthrough of the main flows.','videos.use_t':'Use Case','videos.use_d':'Scanning a token with red flags and next actions.', 'pricing.free_t':'Free', 'pricing.free_d':'2 QuickScan total, slow lane', 'pricing.free_li1':'2 lifetime scans', 'pricing.free_li2':'No Deep checks', 'pricing.free_li3':'Watermarked report', 'pricing.free_p':'$0', 'pricing.free_cta':'Start in Telegram', 'pricing.pro_li1':'300 scans / month', 'pricing.pro_li2':'WHOIS/RDAP/SSL/Wayback', 'pricing.pro_li3':'Export PDF/CSV, private links', 'pricing.pro_cta':'Upgrade via Bot', 'pricing.teams_t':'Teams', 'pricing.teams_d':'For groups with higher limits', 'pricing.teams_li1':'1,500 scans / month', 'pricing.teams_li2':'5 seats, shared dashboard', 'pricing.teams_li3':'Webhooks, SSO‑ready', 'pricing.teams_p':'$99/mo', 'pricing.teams_cta':'Start via Bot', 'pricing.ent_li1':'Custom limits', 'pricing.ent_li2':'SSO, SLA', 'pricing.ent_li3':'Dedicated support', 'pricing.ent_cta':'Contact sales', 'feat.watch_t':'🔔 Watchlist (lite)', 'feat.watch_d':'Opt-in alerts on price Δ, liquidity, holder & LP-lock changes, and major flags.', 'hero.tip':'Tip: Use Watchlist to keep an eye on tokens you care about. Alerts (lite) notify you on notable changes without spamming.', 'banner.title':'You have 1 free QuickScan left', 'banner.sub':'Unlock Deep checks, exports and fast lane', 'banner.cta_open':'Open Bot', 'banner.cta_day':'Day‑Pass $9', 'banner.cta_pro':'Go Pro $29/mo'},
    ru: {'nav.home':'Главная','nav.about':'О нас','nav.features':'Функции','nav.screens':'Скрины','nav.partners':'Партнёры','nav.how':'Как это работает','nav.security':'Безопасность','nav.pricing':'Тарифы','nav.articles':'Статьи','nav.videos':'Видео','nav.faq':'FAQ','nav.contact':'Контакты','cta.watch':'▶ Смотреть демо','hero.title_a':'Он‑чейн метрики риска','hero.title_b':'для DeFi и Telegram','hero.sub':'QuickScan за секунды. Глубокие проверки по требованию.','cta.open':'Открыть @MetridexBot','cta.features':'Смотреть функции','hero.card_title':'Снимок QuickScan','hero.card_li1':'Δ 5м / 1ч / 6ч / 24ч','hero.card_li2':'Ликвидность и холдеры','hero.card_li3':'Флаги honeypot','hero.card_li4':'Отчёт для шаринга','about.title':'О нас','about.copy':'Metridex помогает коммьюнити, лаунчпадам и трейдерам быстро видеть сигналы риска: ликвидность, распределение холдеров, флаги контракта, репутация домена (WHOIS/RDAP), SSL, Wayback и другое.','features.title':'Функции','feat.quick_t':'⚡ Быстро','feat.quick_d':'Мгновенный QuickScan с Δ‑кнопками. Никакого шума.','feat.deep_t':'🧠 Глубоко','feat.deep_d':'WHOIS/RDAP, SSL, Wayback; он‑чейн роли — по требованию.','feat.tech_t':'🧱 Технологии','feat.tech_d':'Render (Flask/Gunicorn) + Cloudflare Worker ds‑proxy.','feat.rel_t':'✅ Надёжно','feat.rel_d':'Stateless‑коллбеки, идемпотентная доставка, cache‑first детализация.','screens.title':'Скриншоты','screens.cap1':'QuickScan','screens.cap2':'Подробнее','partners.title':'Нам доверяют','how.title':'Как это работает','how.s1_t':'Вставьте токен/контракт','how.s1_d':'QuickScan за секунды.','how.s2_t':'Проверьте сигналы','how.s2_d':'Δ‑метрики, холдеры, ликвидность, флаги.','how.s3_t':'Глубже по запросу','how.s3_d':'WHOIS/RDAP, SSL, Wayback, он‑чейн роли.','sec.title':'Безопасность','sec.data_t':'Обращение с данными','sec.data_li1':'Не собираем приватные ключи, сид‑фразы, кошельки.','sec.data_li2':'Запросы обрабатываются транзитно; логи минимальны.','sec.infra_t':'Инфраструктура','sec.infra_li1':'HTTPS, security‑заголовки, изоляция окружений.','sec.infra_li2':'Cloudflare edge + изоляция приложений Render.','sec.compliance_t':'Комплаенс','sec.compliance_li1':'Дружественно к GDPR, удаление по запросу.','sec.compliance_li2':'Контакт для responsible disclosure.','pricing.title':'Тарифы','pricing.basic_t':'Базовый','pricing.basic_d':'Только QuickScan','pricing.basic_p':'Бесплатно','pricing.pro_t':'Pro','pricing.pro_d':'QuickScan + Глубокие проверки','pricing.pro_p':'$29/мес','pricing.ent_t':'Enterprise','pricing.ent_d':'White‑label + SLA','pricing.ent_p':'Связаться','faq.title':'FAQ','faq.q1':'Что проверяет QuickScan?','faq.a1':'Δ‑метрики, ликвидность и холдеры, базовые флаги контракта и отчёт для шаринга.','faq.q2':'Что входит в Deep‑проверки?','faq.a2':'WHOIS/RDAP, цепочки SSL, снимки Wayback и он‑чейн роли — по запросу.','faq.q3':'Где это использовать?','faq.a3':'Подходит для лаунчпадов, профи‑трейдеров и Telegram‑сообществ.','contact.title':'Контакты','contact.email':'Почта:','footer.rights':'Все права защищены.','articles.title':'Статьи','articles.sub':'Наблюдения о рисках он‑чейн, токен‑интеле и безопасности Web3.','articles.p1_t':'Метод QuickScan: как мы ужимаем риск в секунды','articles.p1_d':'Наша философия: «сначала быстро, глубоко по требованию» — метрики, сигналы и принципы дизайна.','articles.p2_t':'WHOIS и Wayback: домен расскажет больше, чем кажется','articles.p2_d':'Регистр, SSL‑цепочки и исторические снимки помогают ловить красные флаги заранее.','articles.p3_t':'Безопасность в Telegram для токен‑сообществ','articles.p3_d':'Модерация, анти‑спам и что автоматизировать с Metridex.','videos.title':'Видео','videos.promo_t':'Metridex — Промо','videos.promo_d':'60‑сек. интро по QuickScan и глубоким проверкам.','videos.tour_t':'Быстрый тур','videos.tour_d':'2‑минутный обзор основных сценариев.','videos.use_t':'Кейс','videos.use_d':'Сканирование токена с красными флагами и дальнейшие действия.', 'pricing.free_t':'Free', 'pricing.free_d':'2 QuickScan всего, медленная очередь', 'pricing.free_li1':'2 проверки навсегда', 'pricing.free_li2':'Без Deep‑проверок', 'pricing.free_li3':'Отчёт с водяным знаком', 'pricing.free_p':'$0', 'pricing.free_cta':'Открыть в Telegram', 'pricing.pro_li1':'300 проверок / мес', 'pricing.pro_li2':'WHOIS/RDAP/SSL/Wayback', 'pricing.pro_li3':'Экспорт PDF/CSV, приватные ссылки', 'pricing.pro_cta':'Оформить через бота', 'pricing.teams_t':'Teams', 'pricing.teams_d':'Для команд с высокими лимитами', 'pricing.teams_li1':'1 500 проверок / мес', 'pricing.teams_li2':'5 мест, общий дашборд', 'pricing.teams_li3':'Вебхуки, SSO‑готово', 'pricing.teams_p':'$99/мес', 'pricing.teams_cta':'Старт через бота', 'pricing.ent_li1':'Кастомные лимиты', 'pricing.ent_li2':'SSO, SLA', 'pricing.ent_li3':'Выделенная поддержка', 'pricing.ent_cta':'Связаться с продажами', 'feat.watch_t':'🔔 Watchlist (lite)', 'feat.watch_d':'Оповещения по цене, ликвидности, изменениям держателей и LP‑lock, а также важным флагам.', 'hero.tip':'Подсказка: используйте Watchlist для нужных токенов. Alerts (lite) сообщают только о существенных изменениях — без спама.', 'banner.title':'У вас остался 1 бесплатный QuickScan', 'banner.sub':'Откройте Deep‑проверки, экспорт и быстрый доступ', 'banner.cta_open':'Открыть бота', 'banner.cta_day':'Day‑Pass $9', 'banner.cta_pro':'Pro $29/мес'}
  };

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
      var L = (lang || (localStorage.getItem('lang')||'en')).toLowerCase();
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
