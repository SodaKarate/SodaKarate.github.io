var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrsuvwxyz1234567890!@#$%^&*()_+-=[]{};:,.<>?/';
letters = letters.split('');

var fontSize = 10,
    columns;

var drops = [];

function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = canvas.width / fontSize;
  for (var i = 0; i < columns; i++) {
    drops[i] = drops[i] || 1;
  }
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

setCanvasSize();
setInterval(draw, 33);

window.addEventListener('resize', setCanvasSize);