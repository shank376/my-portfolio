// Auto hide header on scroll
let lastScroll = 0;
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) header.style.top = '-80px';
  else header.style.top = '0';
  lastScroll = currentScroll;
});

// Electric glowing canvas background
const canvas = document.getElementById('electric-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let sparks = [];
for (let i = 0; i < 80; i++) {
  sparks.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    d: Math.random() * 0.5,
  });
}

function drawElectricity() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00d8ff';
  ctx.shadowColor = '#00d8ff';
  ctx.shadowBlur = 15;
  sparks.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });
  moveSparks();
}

function moveSparks() {
  sparks.forEach(s => {
    s.y += s.d;
    if (s.y > canvas.height) {
      s.y = 0;
      s.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawElectricity, 50);
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});