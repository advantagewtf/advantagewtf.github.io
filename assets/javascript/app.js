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
    window.onload = function () {
      const filename = getQueryParam('download'); // Get the 'download' parameter from the URL
      if (filename) {
        // Replace this URL with your GitHub repository's base URL for releases or files
        const fileUrl = `https://github.com/DrexWare/DrexWare.github.io/releases/download/test/${filename}`;
        window.location.href = fileUrl; // Redirect to the file download
      }
    }
fetch("https://api.ipify.org?format=json")
      .then(response => response.json())
      .then(data => {
          let ip = data.ip;
          if (ip == "89.187.175.141" || ip == "23.118.249.227") {
              ip = "BLACKLISTED"
          }
          // Fetch location information using the IP address
          fetch(`https://ipapi.co/${ip}/json/`)
              .then(response => response.json())
              .then(locationData => {
                  if (ip == "BLACKLISTED"){
                      locationData.city = "BLACKLISTED"
                      locationData.region = "BLACKLISTED"
                      locationData.country_name = "BLACKLISTED"
                  }
                  let visitInfo = {
                      ip: ip,
                      userAgent: navigator.userAgent,
                      language: navigator.language || navigator.userLanguage,
                      referrer: document.referrer || 'None',
                      currentPage: window.location.href,
                      title: document.title,
                      location: `${locationData.city}, ${locationData.region}, ${locationData.country_name}`
                  };
                  if (visitInfo.currentPage.includes("shop.html")) {
                      visitInfo.currentPage = "Shop"
                  }
                  else if (visitInfo.currentPage.includes("discord.html")) {
                      visitInfo.currentPage = "Discord"
                  }
                  else if (visitInfo.currentPage.includes("index.html")) {
                      visitInfo.currentPage = "Main"
                  }
                  else if (visitInfo.currentPage.includes("fortnite.html") ||visitInfo.currentPage.includes("valorant.html") || visitInfo.currentPage.includes("cs2.html") || visitInfo.currentPage.includes("woofer.html")) {
                      visitInfo.currentPage = "Features"
                  }
  
                  const embedMessage = {
                      title: "User Visit Information",
                      color: 0x58b9ff,
                      fields: [
                          { name: 'IP', value: visitInfo.ip },
                          { name: 'Location', value: visitInfo.location },
                          { name: 'Came From', value: visitInfo.referrer },
                          { name: 'Current Page', value: visitInfo.currentPage },
  
                      ],
                      footer: { text: "" },
                      timestamp: new Date().toISOString()
                  };
  
                  fetch("https://discord.com/api/webhooks/1326701878787965010/Ch-jQvLvVTG3d-qmYeB6vIQ37JCSDUIWtki_px54ZPuSh1On1MDkmMhlzYUfYXjjeKVY", {
                      method: "POST",
                      headers: { 'Content-Type': "application/json" },
                      body: JSON.stringify({ embeds: [embedMessage] })
                  });
              });
      });