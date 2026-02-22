/* app.js - fire particle canvas used on both pages */
(function(){
  // shared utility
  function setupCanvas(id){
    const c = document.getElementById(id);
    if(!c) return null;
    function resize(){ c.width = c.clientWidth * devicePixelRatio; c.height = c.clientHeight * devicePixelRatio; c.getContext('2d').scale(devicePixelRatio, devicePixelRatio); }
    window.addEventListener('resize', resize);
    resize();
    return c;
  }

  // tiny ember system
  function EmberSystem(canvas, options){
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.clientWidth, h = canvas.clientHeight;
    const embers = [];
    function spawn(){
      embers.push({
        x: w/2 + (Math.random()-0.5) * w*0.5,
        y: h - 10 + (Math.random()*8),
        vx: (Math.random()-0.5) * 0.6,
        vy: - (1 + Math.random()*2),
        life: 50 + Math.random()*80,
        size: 1 + Math.random()*3,
        hue: 20 + Math.random()*30
      });
    }
    for(let i=0;i<18;i++) spawn();

    let last=0;
    function frame(t){
      const dt = t - last; last = t;
      ctx.clearRect(0,0,canvas.clientWidth, canvas.clientHeight);
      // ambient glow gradient
      const g = ctx.createLinearGradient(0,0,0,canvas.clientHeight);
      g.addColorStop(0, 'rgba(255,120,40,0.02)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);

      // update embers
      for(let i=embers.length-1;i>=0;i--){
        const e = embers[i];
        e.x += e.vx * (dt*0.06);
        e.y += e.vy * (dt*0.06);
        e.vy += 0.02 * (dt*0.06);
        e.life -= dt*0.05;
        const alpha = Math.max(0, Math.min(1, e.life/120));
        // draw glow
        ctx.beginPath();
        ctx.fillStyle = `rgba(${255},${140 + Math.round(Math.random()*40)},${40},${alpha*0.8})`;
        ctx.arc(e.x, e.y, e.size, 0, Math.PI*2);
        ctx.fill();
        if(e.life < 10 || e.y < -20 || e.x < -50 || e.x > canvas.clientWidth+50){
          embers.splice(i,1);
          if(Math.random()<0.9) spawn();
        }
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  // setup on index page
  const c1 = setupCanvas('fire-canvas');
  EmberSystem(c1);

  // setup on result page bigger embers
  const c2 = setupCanvas('fire-canvas-result');
  EmberSystem(c2);

})();
