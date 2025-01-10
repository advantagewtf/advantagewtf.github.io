// Made by Lummit - https://obnoxious.club/ | https://github.com/Lumm1t/ | Discord: Lummit#0201
// Credits to expl0it, shellcode.team
// GitHub: https://github.com/Lumm1t/obnoxious.club

const canvas = document.getElementById('falling-dots');
    const ctx = canvas.getContext('2d');

    // Resize canvas to fill the window
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Dot class to represent each falling dot
    class Dot {
      constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = '#fff'; // White color
        this.speed = speed;
      }

      // Draw the dot on the canvas
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }

      // Update the dot's position
      update() {
        this.y += this.speed;
        if (this.y - this.radius > canvas.height) {
          this.y = -this.radius;
        }
        this.draw();
      }
    }

    // Initialize dots
    const dots = [];
    for (let i = 0; i < 150; i++) { // Increased number of dots for a denser effect
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 2 + 1; // Smaller radius for small dots
      const speed = Math.random() * 2 + 1;
      dots.push(new Dot(x, y, radius, speed));
    }

    // Animate the dots
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(dot => dot.update());
      requestAnimationFrame(animate);
    }

    animate();