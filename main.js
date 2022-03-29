const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 400;

const keys = [];

const player = {
  x: 226,
  y: 350,
  width: 32,
  height: 48,
  frameX: 0,
  frameY: 0,
  speed: 9,
  moving: false,
};

const playerSprite = new Image();
playerSprite.src = "images/protocoldroid2.png";
const background = new Image();
background.src = "images/cityscape07edit.jpg";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

window.addEventListener("keydown", function (e) {
  console.log(keys);
  keys[e.key] = true;
  player.moving = true;
});
window.addEventListener("keyup", function (e) {
  delete keys[e.key];
  player.moving = false;
});

function movePlayer() {
  if (keys["ArrowUp"] && player.y > 100) {
    player.y -= player.speed;
    player.frameY = 3;
    player.moving = true;
  }
  if (keys["ArrowDown"] && player.y < canvas.height - player.height) {
    player.y += player.speed;
    player.frameY = 0;
    player.moving = true;
  }
  if (keys["ArrowLeft"] && player.x > 0) {
    player.x -= player.speed;
    player.frameY = 1;
    player.moving = true;
  }
  if (keys["ArrowRight"] && player.x < canvas.width - player.width) {
    player.x += player.speed;
    player.frameY = 2;
    player.moving = true;
  }
}

// MOVEMENT FUNCTIONS FOR X-PAD///////////////////////////////////////////

// const arrowUp = document.getElementById("x-pad-up");
// arrowUp.addEventListener("mousedown", movePlayerUpMobile());

function movePlayerUpMobile() {
  if (player.y > 100) {
    player.y -= player.speed;
    player.frameY = 3;
    player.moving = true;
  }
}
function movePlayerDownMobile() {
  if (player.y < canvas.height - player.height) {
    player.y += player.speed;
    player.frameY = 0;
    player.moving = true;
  }
}
function movePlayerLeftMobile(){
  if (player.x > 0) {
    player.x -= player.speed;
    player.frameY = 1;
    player.moving = true;
  }
}
function movePlayerRightMobile(){
  if (player.x < canvas.width - player.width) {
    player.x += player.speed;
    player.frameY = 2;
    player.moving = true;
  }
}
function stopMovingMobile() {
  player.moving = false;
}
//////////////////////////////////////////////////////////////////////////

function handlePlayerFrame() {
  if (player.frameX < 3 && player.moving) player.frameX++;
  else player.frameX = 0;
}

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  animate();
}
function animate() {
  requestAnimationFrame(animate);
  now = Date.now();
  elapsed = now - then;
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    movePlayer();
    handlePlayerFrame();
  }
}
startAnimating(20);
