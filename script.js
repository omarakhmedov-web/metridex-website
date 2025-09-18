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


// ===== Metridex helpers (appended, non-intrusive) =====
(function(){
  // Apply saved theme early if possible
  try {
    var htmlEl = document.documentElement;
    var stored = localStorage.getItem('metridex.theme');
    if(stored === 'light' || stored === 'dark'){
      htmlEl.setAttribute('data-theme', stored);
    } else if(!htmlEl.getAttribute('data-theme')){
      htmlEl.setAttribute('data-theme', 'dark');
    }
  } catch(e){}

  document.addEventListener('DOMContentLoaded', function(){
    // Theme toggle by #theme-toggle button
    try{
      var btn = document.getElementById('theme-toggle');
      if(btn){
        var cur = document.documentElement.getAttribute('data-theme') || 'dark';
        btn.textContent = (cur === 'dark') ? '🌙' : '☀️';
        btn.addEventListener('click', function(){
          var now = document.documentElement.getAttribute('data-theme') || 'dark';
          var next = (now === 'dark') ? 'light' : 'dark';
          document.documentElement.setAttribute('data-theme', next);
          try{ localStorage.setItem('metridex.theme', next); }catch(e){}
          btn.textContent = (next === 'dark') ? '🌙' : '☀️';
        }, {passive:true});
      }
    } catch(e){}

    // Normalize a placeholder bot CTA (without changing layout)
    try{
      var selectors = ['a[href="#bot"]','a[data-bot]','a#bot','#open-bot','#connect-bot'];
      for(var i=0;i<selectors.length;i++){
        var el = document.querySelector(selectors[i]);
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
