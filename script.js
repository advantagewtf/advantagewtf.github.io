// Particle background
(() => {
  const canvas = document.getElementById('dot-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });

  let w = canvas.width = innerWidth;
  let h = canvas.height = innerHeight;
  const DOT_COUNT = Math.max(24, Math.floor((w * h) / 90000));
  const DOT_SIZE = 1.2;
  const MAX_SPEED = 0.25;
  const LINE_DIST = Math.min(200, Math.max(80, Math.hypot(w,h)/12));
  const dots = [];
  const accentA = [199,112,255]; 
  const accentB = [255,94,221];

  function rand(min, max){ return Math.random()*(max-min)+min; }
  function mix(a,b,t){ return a + (b-a)*t; }

  for (let i=0;i<DOT_COUNT;i++){
    dots.push({
      x: Math.random()*w,
      y: Math.random()*h,
      vx: rand(-MAX_SPEED, MAX_SPEED),
      vy: rand(-MAX_SPEED, MAX_SPEED),
      r: rand(DOT_SIZE*0.6, DOT_SIZE*1.8),
      t: Math.random()
    });
  }

  function resize(){ w = canvas.width = innerWidth; h = canvas.height = innerHeight; }
  window.addEventListener('resize', resize);

  function draw(){
    ctx.clearRect(0,0,w,h);
    const g = ctx.createLinearGradient(0,0,w,h);
    g.addColorStop(0,'rgba(0,0,0,0.00)');
    g.addColorStop(1,'rgba(0,0,0,0.02)');
    ctx.fillStyle = g;
    ctx.fillRect(0,0,w,h);

    for (let i=0;i<dots.length;i++){
      const a = dots[i];
      for (let j=i+1;j<dots.length;j++){
        const b = dots[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.hypot(dx, dy);
        if(d>LINE_DIST) continue;
        const alpha = 0.28*(1-d/LINE_DIST);
        const t = (a.t+b.t)/2;
        const r = Math.round(mix(accentA[0],accentB[0],t));
        const gcol = Math.round(mix(accentA[1],accentB[1],t));
        const bcol = Math.round(mix(accentA[2],accentB[2],t));
        ctx.strokeStyle = `rgba(${r},${gcol},${bcol},${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(a.x,a.y);
        ctx.lineTo(b.x,b.y);
        ctx.stroke();
      }
    }

    for (let i=0;i<dots.length;i++){
      const d = dots[i];
      d.x += d.vx; d.y += d.vy;
      if(d.x < -10) d.x = w+10;
      if(d.y < -10) d.y = h+10;
      if(d.x > w+10) d.x = -10;
      if(d.y > h+10) d.y = -10;
      const t = d.t;
      const r = Math.round(mix(accentA[0],accentB[0],t));
      const gcol = Math.round(mix(accentA[1],accentB[1],t));
      const bcol = Math.round(mix(accentA[2],accentB[2],t));
      const grad = ctx.createRadialGradient(d.x,d.y,0,d.x,d.y,Math.max(6,d.r*8));
      grad.addColorStop(0,`rgba(${r},${gcol},${bcol},0.85)`);
      grad.addColorStop(0.3,`rgba(${r},${gcol},${bcol},0.2)`);
      grad.addColorStop(1,`rgba(${r},${gcol},${bcol},0.0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(d.x,d.y,d.r*6,0,Math.PI*2);
      ctx.fill();
      ctx.fillStyle = `rgba(${r},${gcol},${bcol},0.95)`;
      ctx.beginPath();
      ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
      ctx.fill();
      d.t += 0.001*(0.5+Math.random()*0.5);
      if(d.t>1) d.t=0;
    }
    requestAnimationFrame(draw);
  }
  resize();
  requestAnimationFrame(draw);
})();

// 3D Mouse hover effect for hero card
const card = document.querySelector('.hero-content');
document.addEventListener('mousemove', e=>{
  const {innerWidth, innerHeight} = window;
  const x = e.clientX - innerWidth/2;
  const y = e.clientY - innerHeight/2;
  const rotateX = (y/innerHeight)*15;
  const rotateY = (x/innerWidth)*15;
  card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
});
document.addEventListener('mouseleave', ()=>{
  card.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0)`;
});
