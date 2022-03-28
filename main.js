const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

const keys = [];

const player = {
  x: 0,
  y: 0,
  width: 32,
  height: 48,
  frameX: 0,
  frameY: 0,
  speed: 9,
  moving: false,
};

const playerSprite = new Image();
playerSprite.src = "protocoldroid2.png";
const background = new Image();
background.src = "cityscape07.jpg";

function drawSprite() {
  ctx.drawImage();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
}
animate();
