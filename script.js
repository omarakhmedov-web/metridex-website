(function(){
  // Early theme apply
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
    // Year
    var y = document.getElementById('year'); if(y){ y.textContent = new Date().getFullYear(); }

    // Theme toggle
    try {
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

    // Normalize a placeholder CTA (if present) to the bot link without moving layout
    try{
      var cands = ['a[href="#bot"]','a[data-bot]','a#bot','#open-bot','#connect-bot'];
      for (var i=0;i<cands.length;i++){
        var el = document.querySelector(cands[i]);
        if(el){
          el.setAttribute('href','https://t.me/MetridexBot');
          el.setAttribute('target','_blank');
          el.setAttribute('rel','noopener');
          break;
        }
      }
    }catch(e){}
  });
})();
/* MDX add-ons */

// Ensure toggle works even if inserted dynamically
document.addEventListener('DOMContentLoaded', function(){
  var t = document.getElementById('theme-toggle');
  if (t && !t._mdx_bound){
    t._mdx_bound = true;
    // reflect current state
    try{
      var cur = document.documentElement.getAttribute('data-theme') || 'dark';
      t.textContent = (cur === 'dark') ? '🌙' : '☀️';
    }catch(e){}
    t.addEventListener('click', function(){
      var now = document.documentElement.getAttribute('data-theme') || 'dark';
      var next = (now === 'dark') ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try{ localStorage.setItem('metridex.theme', next); }catch(e){}
      t.textContent = (next === 'dark') ? '🌙' : '☀️';
    }, {passive:true});
  }

  // Footer year
  var y = document.getElementById('year'); if(y){ y.textContent = new Date().getFullYear(); }

  // Normalize CTAs to bot
  var targets = ['#connect-bot','a[href="#bot"]','a[data-bot]','a#bot','#open-bot','#connect-bot'];
  for (var i=0;i<targets.length;i++){
    var el = document.querySelector(targets[i]);
    if (el){
      el.setAttribute('href','https://t.me/MetridexBot');
      el.setAttribute('target','_blank'); el.setAttribute('rel','noopener');
    }
  }
});
