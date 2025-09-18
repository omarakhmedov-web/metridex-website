(function(){
  // ===== Theme bootstrap (before any paints if possible) =====
  try {
    var htmlEl = document.documentElement;
    var stored = localStorage.getItem('metridex.theme');
    if(stored === 'light' || stored === 'dark'){
      htmlEl.setAttribute('data-theme', stored);
    } else if(!htmlEl.getAttribute('data-theme')) {
      htmlEl.setAttribute('data-theme', 'dark');
    }
  } catch(e) {}

  document.addEventListener('DOMContentLoaded', function(){
    // Existing smooth scroll + your code:
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
        });
      }
    });
  }

  // 🌓 Переключение темы
  const themeToggle = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
  });
});


    // ===== Reliable theme toggle =====
    try {
      var htmlEl = document.documentElement;
      var btn = document.getElementById('theme-toggle');
      if(btn && htmlEl){
        // set initial icon based on theme
        var current = htmlEl.getAttribute('data-theme') || 'dark';
        btn.textContent = (current === 'dark') ? '🌙' : '☀️';
        btn.addEventListener('click', function(){
          var cur = htmlEl.getAttribute('data-theme') || 'dark';
          var next = (cur === 'dark') ? 'light' : 'dark';
          htmlEl.setAttribute('data-theme', next);
          try { localStorage.setItem('metridex.theme', next); } catch(e) {}
          btn.textContent = (next === 'dark') ? '🌙' : '☀️';
        }, {passive:true});
      }
    } catch(e){ console && console.warn && console.warn('Theme toggle init failed', e); }

    // ===== Bot CTA normalizer (no layout changes) =====
    try {
      var candidates = ['a[href="#bot"]','a[data-bot]','a#bot','#open-bot','#connect-bot'];
      for (var i=0;i<candidates.length;i++){
        var el = document.querySelector(candidates[i]);
        if(el){
          el.setAttribute('href','https://t.me/MetridexBot');
          el.setAttribute('target','_blank');
          el.setAttribute('rel','noopener');
          break;
        }
      }
    } catch(e){}
  });
})();
