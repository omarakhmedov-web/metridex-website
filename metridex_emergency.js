
/*! Emergency guard: runs after your script.js */
(function(){
  try {
    // 1) Remove reveal-related hiding so content shows
    var nodes = document.querySelectorAll('.reveal, .is-hidden, .invisible, .preload, .js-only');
    nodes.forEach(function(el){
      try {
        el.classList.remove('reveal','is-hidden','invisible','preload','js-only');
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.display = 'block';
        el.style.visibility = 'visible';
      } catch(e){}
    });
    // 2) If IntersectionObserver gates reveal, fail-open
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-io], [data-reveal]').forEach(function(el){
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    }
    // 3) Avoid fatal errors stopping the rest of the page (wrap known init)
    ['initFeatures','initScreens','initPricing','applyLanguage'].forEach(function(fn){
      if (typeof window[fn] === 'function'){
        try { window[fn](); } catch(e){ console.warn('Guarded '+fn, e); }
      }
    });
  } catch(e){
    console.error('Emergency guard failed', e);
  }
})();
