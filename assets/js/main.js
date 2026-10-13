
(function(){
 function apply(l){
  document.documentElement.lang=l;
  document.querySelectorAll('[data-en]').forEach(function(e){var v=e.getAttribute('data-'+l);if(v!==null)e.textContent=v;});
  document.querySelectorAll('[data-en-html]').forEach(function(e){var v=e.getAttribute('data-'+l+'-html');if(v!==null)e.innerHTML=v;});
  try{localStorage.setItem('cka_lang',l);}catch(e){}
  document.querySelectorAll('.langtoggle').forEach(function(b){b.textContent=(l==='en'?'NL':'EN');});
 }
 var l='nl';try{l=localStorage.getItem('cka_lang')||'nl';}catch(e){}
 apply(l);
 document.querySelectorAll('.langtoggle').forEach(function(b){b.addEventListener('click',function(){apply(document.documentElement.lang==='en'?'nl':'en');});});
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.12});
 document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
 var t=document.querySelector('.navtoggle'),n=document.getElementById('nav');
 if(t)t.addEventListener('click',function(){n.classList.toggle('open');});
 document.querySelectorAll('#nav a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');});});
 document.querySelectorAll('.photoslides').forEach(function(box){
  var imgs=box.querySelectorAll('img');if(imgs.length<2)return;var i=0;
  setInterval(function(){imgs[i].classList.remove('on');i=(i+1)%imgs.length;imgs[i].classList.add('on');},4000);
 });
})();
