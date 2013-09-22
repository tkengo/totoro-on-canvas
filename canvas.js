var PARTICLES_COUNT = 10000;
var PARTICLE_RADIUS = 1;
var ANIMATION_INTERVAL = 5;

var canvas;
var context;
var count = 0;
var hue = -1;
var timer = -1;

$(function() {
  canvas = document.getElementById('stage');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  context = canvas.getContext('2d');

  timer = setInterval(draw, ANIMATION_INTERVAL);
});

function draw()
{
  document.getElementById('count').innerText = 't = ' + ((count / PARTICLES_COUNT) * 100 * Math.PI);

  var destination = f((count / PARTICLES_COUNT) * 100 * Math.PI);
  var x = canvas.width  / 2 + destination.x / 2;
  var y = canvas.height / 2 + destination.y / 2;

  count++;

  context.beginPath();
  context.fillStyle = color();
  context.arc(x, y, PARTICLE_RADIUS, 0, Math.PI * 2);
  context.fill();

  if (count == PARTICLES_COUNT) {
    clearTimeout(timer);
  }
}

function color()
{
  if (hue++ > 360) {
    hue = 0;
  }
  return "hsl(" + hue + ", 100%, 80%)";
}
