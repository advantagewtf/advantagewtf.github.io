// Made by Lummit - https://obnoxious.club/ | https://github.com/Lumm1t/ | Discord: Lummit#0201
// Credits to expl0it, shellcode.team
// GitHub: https://github.com/Lumm1t/obnoxious.club
document.addEventListener("DOMContentLoaded", function () {
  // Create meta tags and append them to the document head

  // Charset meta tag
  let metaCharset = document.createElement('meta');
  metaCharset.setAttribute('charset', 'utf-8');
  document.head.appendChild(metaCharset);

  // Description meta tag
  let metaDescription = document.createElement('meta');
  metaDescription.setAttribute('name', 'description');
  metaDescription.setAttribute('content', 'Drexware - Best free and paid cheats');
  document.head.appendChild(metaDescription);

  // Keywords meta tag
  let metaKeywords = document.createElement('meta');
  metaKeywords.setAttribute('name', 'keywords');
  metaKeywords.setAttribute('content', 'drexware.gg, drexware, drexxy');
  document.head.appendChild(metaKeywords);

  // Author meta tag
  let metaAuthor = document.createElement('meta');
  metaAuthor.setAttribute('name', 'author');
  metaAuthor.setAttribute('content', 'drexware.gg');
  document.head.appendChild(metaAuthor);

  // Open Graph meta tags
  let ogType = document.createElement('meta');
  ogType.setAttribute('property', 'og:type');
  ogType.setAttribute('content', 'site');
  document.head.appendChild(ogType);

  let ogTitle = document.createElement('meta');
  ogTitle.setAttribute('property', 'og:title');
  ogTitle.setAttribute('content', 'drexware.gg');
  document.head.appendChild(ogTitle);

  let ogDescription = document.createElement('meta');
  ogDescription.setAttribute('property', 'og:description');
  ogDescription.setAttribute('content', 'Drexware - Best free and paid cheats');
  document.head.appendChild(ogDescription);

  let ogUrl = document.createElement('meta');
  ogUrl.setAttribute('property', 'og:url');
  ogUrl.setAttribute('content', 'index.html');
  document.head.appendChild(ogUrl);

  let ogImage = document.createElement('meta');
  ogImage.setAttribute('property', 'og:image');
  ogImage.setAttribute('content', 'assets/icons/vavy.png');
  document.head.appendChild(ogImage);

  // Itemprop meta tags
  let itempropName = document.createElement('meta');
  itempropName.setAttribute('itemprop', 'name');
  itempropName.setAttribute('content', 'drexware.gg');
  document.head.appendChild(itempropName);

  let itempropDescription = document.createElement('meta');
  itempropDescription.setAttribute('itemprop', 'description');
  itempropDescription.setAttribute('content', 'Drexware - Best free and paid cheats');
  document.head.appendChild(itempropDescription);

  let itempropImage = document.createElement('meta');
  itempropImage.setAttribute('itemprop', 'image');
  itempropImage.setAttribute('content', 'assets/icons/vavy.png');
  document.head.appendChild(itempropImage);

  // Viewport meta tag
  let metaViewport = document.createElement('meta');
  metaViewport.setAttribute('name', 'viewport');
  metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
  document.head.appendChild(metaViewport);

  // Title tag
  let title = document.createElement('title');
  title.textContent = 'Drexware.gg';
  document.head.appendChild(title);

  // Link to stylesheet
  let linkStylesheet = document.createElement('link');
  linkStylesheet.setAttribute('rel', 'stylesheet');
  linkStylesheet.setAttribute('type', 'text/css');
  linkStylesheet.setAttribute('href', 'assets/stylesheets/stylesheet.css');
  document.head.appendChild(linkStylesheet);
});

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
