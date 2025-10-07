// Simple interactions and subtle particles bg
document.addEventListener('DOMContentLoaded', function(){
  // subtle floating particles using canvas
  const canvas = document.createElement('canvas');
  canvas.id = 'p';
  canvas.style.position = 'fixed';
  canvas.style.left = 0;
  canvas.style.top = 0;
  canvas.style.zIndex = -1;
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  function resize(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; init(); }
  window.addEventListener('resize', resize);
  let parts = [];
  function init(){ parts = []; for(let i=0;i<80;i++){ parts.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.6+0.4,dx:(Math.random()-0.5)*0.6,dy:(Math.random()-0.5)*0.6}); } draw(); }
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let p of parts){
      p.x += p.dx; p.y += p.dy;
      if(p.x<0)p.x=canvas.width; if(p.x>canvas.width)p.x=0;
      if(p.y<0)p.y=canvas.height; if(p.y>canvas.height)p.y=0;
      ctx.beginPath();
      ctx.fillStyle = 'rgba(0,255,160,0.08)';
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  resize();

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const t = document.querySelector(a.getAttribute('href'));
      if(t) t.scrollIntoView({behavior:'smooth'});
    });
  });
});
