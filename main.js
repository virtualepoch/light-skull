const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 400;

const keys = [];

const player = {
  x: 226,
  y: 300,
  width: 32,
  height: 48,
  frameX: 0,
  frameY: 0,
  speed: 9,
  moving: false,
};

const playerSprite = new Image();
playerSprite.src = "images/light-skull-sprite-1.png";
const background = new Image();
background.src = "images/cityscape07edit.jpg";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

const xPadUpArray = [];
const xPadDownArray = [];
const xPadLeftArray = [];
const xPadRightArray = [];
const xPadUp = document.getElementById("x-pad-up");
const xPadDown = document.getElementById("x-pad-down");
const xPadLeft = document.getElementById("x-pad-left");
const xPadRight = document.getElementById("x-pad-right");

window.addEventListener("keydown", function (e) {
  keys[e.key] = true;
});
window.addEventListener("keyup", function (e) {
  delete keys[e.key];
  player.moving = false;
});

xPadUp.addEventListener("touchstart", function () {
  xPadUpArray[xPadUp] = true;
  console.log(buttons);
});
xPadUp.addEventListener("touchend", function () {
  delete xPadUpArray[xPadUp];
  player.moving = false;
});

xPadDown.addEventListener("touchstart", function () {
  xPadDownArray[xPadDown] = true;
  console.log(buttons);
});
xPadDown.addEventListener("touchend", function () {
  delete xPadDownArray[xPadDown];
  player.moving = false;
});

xPadLeft.addEventListener("touchstart", function () {
  xPadLeftArray[xPadLeft] = true;
  console.log(buttons);
});
xPadLeft.addEventListener("touchend", function () {
  delete xPadLeftArray[xPadLeft];
  player.moving = false;
});

xPadRight.addEventListener("touchstart", function () {
  xPadRightArray[xPadRight] = true;
  console.log(buttons);
});
xPadRight.addEventListener("touchend", function () {
  delete xPadRightArray[xPadRight];
  player.moving = false;
});

function movePlayer() {
  if ((keys["ArrowUp"] && player.y > 60) || (keys["w"] && player.y > 60) || (xPadUpArray[xPadUp] && player.y > 60)) {
    player.y -= player.speed;
    player.frameY = 3;
    player.moving = true;
  }

  if ((keys["ArrowDown"] && player.y < canvas.height - player.height * 2 - 10) || (keys["s"] && player.y < canvas.height - player.height * 2 - 10) || (xPadDownArray[xPadDown] && player.y < canvas.height - player.height * 2 - 10)) {
    player.y += player.speed;
    player.frameY = 0;
    player.moving = true;
  }
  if ((keys["ArrowLeft"] && player.x > 1) || (keys["a"] && player.x > 1) || (xPadLeftArray[xPadLeft] && player.x > 1)) {
    player.x -= player.speed;
    player.frameY = 1;
    player.moving = true;
  }
  if ((keys["ArrowRight"] && player.x < canvas.width - player.width * 2 - 5) || (keys["d"] && player.x < canvas.width - player.width * 2 - 5) || (xPadRightArray[xPadRight] && player.x < canvas.width - player.width * 2 - 5)) {
    player.x += player.speed;
    player.frameY = 2;
    player.moving = true;
  }
}

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
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width * 2, player.height * 2);
    movePlayer();
    handlePlayerFrame();
  }
}
startAnimating(20);
