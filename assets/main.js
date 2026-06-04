/* PanPanTech aiesl.cn · 交互脚本 */
(function(){
  // 导航滚动态
  const nav=document.querySelector('.nav');
  const onScroll=()=>{ if(nav) nav.classList.toggle('scrolled',window.scrollY>20); };
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});

  // 移动端菜单
  const burger=document.querySelector('.burger');
  const menu=document.querySelector('.menu');
  if(burger&&menu){
    burger.addEventListener('click',()=>menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
  }

  // 滚动出现
  const io=new IntersectionObserver((es)=>{
    es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // 数字滚动
  const animate=(el)=>{
    const target=parseFloat(el.dataset.count);
    const dec=(el.dataset.dec|0);
    const dur=1600; const start=performance.now();
    const tick=(now)=>{
      const p=Math.min((now-start)/dur,1);
      const eased=1-Math.pow(1-p,3);
      el.textContent=(target*eased).toFixed(dec).replace(/\B(?=(\d{3})+(?!\d))/g,',');
      if(p<1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const cio=new IntersectionObserver((es)=>{
    es.forEach(e=>{ if(e.isIntersecting){ animate(e.target); cio.unobserve(e.target);} });
  },{threshold:.5});
  document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));

  // 表单（前端演示，无后端提交）
  const form=document.querySelector('#leadForm');
  if(form){
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      const ok=form.querySelector('.form-ok');
      if(ok){ ok.style.display='block'; ok.scrollIntoView({behavior:'smooth',block:'center'}); }
      form.querySelectorAll('input,textarea,select').forEach(f=>{ if(f.type!=='submit') f.value=''; });
    });
  }
})();
