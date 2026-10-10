// ===== JIESHUN · 官网共用脚本 =====
(function(){
  const header=document.querySelector('.header');
  // 顶部导航滚动效果
  window.addEventListener('scroll',()=>{
    header.classList.toggle('scrolled',window.scrollY>20);
  });

  // 移动端菜单
  const navToggle=document.querySelector('.nav-toggle');
  const navLinks=document.querySelector('.nav-links');
  if(navToggle){
    navToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
  }

  // 当前页面高亮(基于文件名)
  const path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const href=a.getAttribute('href');
    if(href===path||(path==='index.html'&&href==='index.html')||(path===''&&href==='index.html')){
      a.classList.add('active');
    }
  });

  // 页面进入动画
  requestAnimationFrame(()=>{
    document.querySelector('.page-enter')?.classList.add('in');
  });

  // 滚动渐入
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in');
        // 首页Hero触发
        const hero=document.querySelector('.hero');
        if(hero&&!hero.classList.contains('in')) hero.classList.add('in');
        io.unobserve(e.target);
      }
    });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // 首页Hero立即触发
  const hero=document.querySelector('.hero');
  if(hero){
    setTimeout(()=>hero.classList.add('in'),120);
  }

  // 数字滚动计数
  const counters=document.querySelectorAll('[data-count]');
  const cio=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        animateCount(e.target);
        cio.unobserve(e.target);
      }
    });
  },{threshold:0.5});
  counters.forEach(c=>cio.observe(c));

  function animateCount(el){
    const target=parseFloat(el.dataset.count);
    const decimals=(el.dataset.count.split('.')[1]||'').length;
    const dur=1600;
    const start=performance.now();
    function tick(now){
      const p=Math.min((now-start)/dur,1);
      const eased=1-Math.pow(1-p,3);
      const val=target*eased;
      el.textContent=val.toFixed(decimals);
      if(p<1)requestAnimationFrame(tick);
      else el.textContent=target.toFixed(decimals);
    }
    requestAnimationFrame(tick);
  }

  // 产品页Tab切换
  const ptabs=document.querySelectorAll('.ptab');
  if(ptabs.length){
    ptabs.forEach(tab=>{
      tab.addEventListener('click',()=>{
        ptabs.forEach(t=>t.classList.remove('active'));
        tab.classList.add('active');
        const cat=tab.dataset.cat;
        document.querySelectorAll('.pcard').forEach(card=>{
          const show=cat==='all'||!cat||card.dataset.cat===cat;
          card.style.display=show?'':'none';
        });
      });
    });
  }

  // 品质页流程图:进入视口逐节点激活
  const flowWrap=document.querySelector('.flow-wrap');
  if(flowWrap){
    const fio=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          const kids=flowWrap.children;
          Array.from(kids).forEach((c,i)=>{
            c.style.transitionDelay=(i*0.12)+'s';
            c.style.animationDelay=(i*0.12)+'s';
          });
          flowWrap.classList.add('active');
          fio.unobserve(e.target);
        }
      });
    },{threshold:0.35});
    fio.observe(flowWrap);
  }
})();
