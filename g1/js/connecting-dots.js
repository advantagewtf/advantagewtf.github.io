// this is very poorly coded sorry for your eyes
// -cloud

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault());
  document.addEventListener("keydown", (e) => {
    if (e.key === "F12") e.preventDefault();
    if (e.ctrlKey && e.shiftKey && ["i", "j"].includes(e.key.toLowerCase()))
      e.preventDefault();
    if (e.ctrlKey && e.key.toLowerCase() === "u") e.preventDefault();
  });
 
  let d = false,
    t = 160;
  setInterval(() => {
    const w = window.outerWidth - window.innerWidth > t,
      h = window.outerHeight - window.innerHeight > t;
    if (w || h) {
      if (!d) {
        d = true;
        // alert("Developer tools detected!");
        // alerting the user we know is too nice :(
        document.body.innerHTML = "";
        document.body.style.backgroundColor = "#151515";
        var audio = document.createElement("audio")
        
        audio.src = "assets/audio/earrap.wav"
        audio.play()
       
        document.body.appendChild(
          document.createElement("audio")
        )
        let toggle = false;
        // fire method :3
        const flashInterval = setInterval(() => {
          document.body.style.backgroundColor = toggle ? "#ffffff" : "#151515";
          toggle = !toggle;
        }, 5);
      }
    } else d = false;
  }, 500);
});

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("contextmenu", (e) => e.preventDefault());
});


var canvas = document.getElementById("canvas");
// if (!canvas) {
  
//   canvas = document.createElement("canvas");
//   canvas.id = "canvas";
//   document.body.appendChild(canvas); // <-- actually adds it to the page
// }
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stars = [], // star array
  FPS = 60, // fps
  x = 100, // num of stars
  mouse = {
    x: 0,
    y: 0,
  }; // mouse loc

// push stars to array

for (var i = 0; i < x; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1 + 1,
    vx: Math.floor(Math.random() * 50) - 25,
    vy: Math.floor(Math.random() * 50) - 25,
  });
}

// draw scene

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.globalCompositeOperation = "lighter";

  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];

    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.stroke();
  }

  ctx.beginPath();
  for (var i = 0, x = stars.length; i < x; i++) {
    var starI = stars[i];
    ctx.moveTo(starI.x, starI.y);
    if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
    for (var j = 0, x = stars.length; j < x; j++) {
      var starII = stars[j];
      if (distance(starI, starII) < 150) {
        //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1)); // bro ;-;
        ctx.lineTo(starII.x, starII.y);
      }
    }
  }
  ctx.lineWidth = 0.05;
  ctx.strokeStyle = "white";
  ctx.stroke();
}

function distance(point1, point2) {
  var xs = 0;
  var ys = 0;

  xs = point2.x - point1.x;
  xs = xs * xs;

  ys = point2.y - point1.y;
  ys = ys * ys;

  return Math.sqrt(xs + ys);
}

//star locs

function update() {
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];

    s.x += s.vx / FPS; // :3
    s.y += s.vy / FPS; // :3

    if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
  }
}

canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// just run because why not and draw

function tick() {
  draw();
  update();
  requestAnimationFrame(tick);
}

tick();

