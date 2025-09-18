(function(){
  const root = document.documentElement;
  const langBtn = document.getElementById('langToggle');
  const themeBtn = document.getElementById('themeToggle');
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- i18n (EN/RU) ----
  const dict = {
    en: {
      'nav.about':'About','nav.features':'Features','nav.screens':'Screens','nav.pricing':'Pricing','nav.articles':'Articles','nav.faq':'FAQ','nav.contact':'Contact',
      'hero.title_a':'On‑chain Risk Metrics','hero.title_b':'for DeFi & Telegram','hero.sub':'QuickScan in seconds. Deep checks on demand.',
      'cta.open':'Open @MetridexBot','cta.features':'See features',
      'hero.card_title':'QuickScan snapshot','hero.card_li1':'Δ 5m / 1h / 6h / 24h','hero.card_li2':'Liquidity & holders','hero.card_li3':'Honeypot flags','hero.card_li4':'Shareable report',
      'about.title':'About','about.copy':'Metridex helps communities, launchpads and traders spot risk signals fast: liquidity, holder patterns, contract flags, domain reputation (WHOIS/RDAP), SSL, Wayback and more.',
      'features.title':'Features','feat.quick_t':'⚡ Quick','feat.quick_d':'Instant QuickScan with Δ‑buttons. No waiting, no noise.','feat.deep_t':'🧠 Deep','feat.deep_d':'WHOIS/RDAP, SSL, Wayback; on‑chain roles — only when needed.','feat.tech_t':'🧱 Tech','feat.tech_d':'Render (Flask/Gunicorn) + Cloudflare Worker ds‑proxy.','feat.rel_t':'✅ Reliable','feat.rel_d':'Stateless callbacks, idempotent delivery, cache‑first detail scan.',
      'screens.title':'Screens','screens.cap1':'QuickScan','screens.cap2':'More details','screens.hint':'Drop your PNGs to /screens/quickscan.png and /screens/details.png. Placeholders will be used if images are absent.',
      'pricing.title':'Pricing','pricing.basic_t':'Basic','pricing.basic_d':'QuickScan only','pricing.basic_p':'Free','pricing.pro_t':'Pro','pricing.pro_d':'QuickScan + Deep checks','pricing.pro_p':'$29/mo','pricing.ent_t':'Enterprise','pricing.ent_d':'White‑label + SLA','pricing.ent_p':'Contact',
      'faq.title':'FAQ','faq.q1':'What does QuickScan check?','faq.a1':'Δ‑metrics, liquidity & holders, basic contract flags, and a shareable report.','faq.q2':'What’s in Deep checks?','faq.a2':'WHOIS/RDAP, SSL chains, Wayback snapshots, and on‑chain roles — on demand.','faq.q3':'Where can I use it?','faq.a3':'Works great for launchpads, pro traders, and Telegram communities.',
      'contact.title':'Contact','contact.email':'Email:','footer.rights':'All rights reserved.',
      'articles.title':'Articles','articles.sub':'Insights on on‑chain risk, token intel and Web3 security.'
    },
    ru: {
      'nav.about':'О нас','nav.features':'Функции','nav.screens':'Скрины','nav.pricing':'Тарифы','nav.articles':'Статьи','nav.faq':'FAQ','nav.contact':'Контакты',
      'hero.title_a':'Он‑чейн метрики риска','hero.title_b':'для DeFi и Telegram','hero.sub':'QuickScan за секунды. Глубокие проверки по требованию.',
      'cta.open':'Открыть @MetridexBot','cta.features':'Смотреть функции',
      'hero.card_title':'Снимок QuickScan','hero.card_li1':'Δ 5м / 1ч / 6ч / 24ч','hero.card_li2':'Ликвидность и холдеры','hero.card_li3':'Флаги honeypot','hero.card_li4':'Отчёт для шаринга',
      'about.title':'О нас','about.copy':'Metridex помогает коммьюнити, лаунчпадам и трейдерам быстро видеть сигналы риска: ликвидность, распределение холдеров, флаги контракта, репутация домена (WHOIS/RDAP), SSL, Wayback и другое.',
      'features.title':'Функции','feat.quick_t':'⚡ Быстро','feat.quick_d':'Мгновенный QuickScan с Δ‑кнопками. Никакого шума.','feat.deep_t':'🧠 Глубоко','feat.deep_d':'WHOIS/RDAP, SSL, Wayback; он‑чейн роли — по требованию.','feat.tech_t':'🧱 Технологии','feat.tech_d':'Render (Flask/Gunicorn) + Cloudflare Worker ds‑proxy.','feat.rel_t':'✅ Надёжно','feat.rel_d':'Stateless‑коллбеки, идемпотентная доставка, cache‑first детализация.',
      'screens.title':'Скриншоты','screens.cap1':'QuickScan','screens.cap2':'Подробнее','screens.hint':'Положите PNG-файлы в /screens/quickscan.png и /screens/details.png. При отсутствии — покажем плейсхолдеры.',
      'pricing.title':'Тарифы','pricing.basic_t':'Базовый','pricing.basic_d':'Только QuickScan','pricing.basic_p':'Бесплатно','pricing.pro_t':'Pro','pricing.pro_d':'QuickScan + Глубокие проверки','pricing.pro_p':'$29/мес','pricing.ent_t':'Enterprise','pricing.ent_d':'White‑label + SLA','pricing.ent_p':'Связаться',
      'faq.title':'FAQ','faq.q1':'Что проверяет QuickScan?','faq.a1':'Δ‑метрики, ликвидность и холдеры, базовые флаги контракта и отчёт для шаринга.','faq.q2':'Что входит в Deep‑проверки?','faq.a2':'WHOIS/RDAP, цепочки SSL, снимки Wayback и он‑чейн роли — по запросу.','faq.q3':'Где это использовать?','faq.a3':'Подходит для лаунчпадов, профи‑трейдеров и Telegram‑сообществ.',
      'contact.title':'Контакты','contact.email':'Почта:','footer.rights':'Все права защищены.',
      'articles.title':'Статьи','articles.sub':'Наблюдения о рисках он‑чейн, токен‑интеле и безопасности Web3.'
    }
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
  // init language
  let savedLang = 'en';
  try{ savedLang = localStorage.getItem('metridex.lang') || 'en'; }catch(e){}
  applyLang(savedLang);
  langBtn && langBtn.addEventListener('click', ()=>{
    const next = (root.getAttribute('data-lang')==='en') ? 'ru' : 'en';
    applyLang(next);
  });

  // Theme init
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

  // Burger menu
  burger && burger.addEventListener('click', ()=>{
    const open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Normalize bot CTAs
  document.querySelectorAll('.cta-bot').forEach(a => {
    a.href='https://t.me/MetridexBot'; a.target='_blank'; a.rel='noopener';
  });

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
    for(const e of entries){
      if(e.isIntersecting){ e.target.classList.add('in'); observer.unobserve(e.target); }
    }
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
})();
