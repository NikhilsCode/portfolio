const canvas = document.getElementById('dustCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const maxParticles = 100; 
const particleSpeed = 0.0000001; 

let mouseX = canvas.width / 2; 
let mouseY = canvas.height / 2; 

window.addEventListener('mousemove', (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width; 
    this.y = Math.random() * canvas.height; 
    this.radius = Math.random() * 2; 
    this.xSpeed = (Math.random() - 0.5) * particleSpeed; 
    this.ySpeed = (Math.random() - 0.5) * particleSpeed; 
    this.opacity = Math.random() * 0.5 + 0.3; 
    this.life = Math.random() * 100 + 100; 
  }

  update() {
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const maxSpeed = 0.5;
    const moveX = (dx / distance) * maxSpeed;
    const moveY = (dy / distance) * maxSpeed;

    this.x += moveX;
    this.y += moveY;

    this.life -= 1; // Decrease life

    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`; 
    ctx.fill();
  }
}

function createParticle() {
  if (particles.length < maxParticles) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = particles.length - 1; i >= 0; i--) {
    const particle = particles[i];
    particle.update();
    particle.draw();

    if (particle.life <= 0) {
      particles.splice(i, 1); 
    }
  }

  createParticle();
  requestAnimationFrame(animateParticles);
}

animateParticles();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
