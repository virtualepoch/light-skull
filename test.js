// class ClickAndHold {
//   /**
//    * @param {EventTarget} target The HTML element to apply the event to
//    * @param {Function} callback The function to run once the target is clicked and held
//    */
//   constructor(target, callback) {
//     this.target = target;
//     this.callback = callback;
//     this.isHeld = false;
//     this.activeHoldTimeoutId = null;

//     ["mousedown", "touchstart"].forEach(type => {
//         this.target.addEventListener(type, this._onHoldStart.bind(this));
//     });
//     ["mouseup", "mouseleave", "mouseout", "touchend", "touchcancel"].forEach(type => {
//         this.target.addEventListener(type, this._onHoldEnd.bind(this));
//     });
//   }

//   _onHoldStart() {
//     this.isHeld = true;

//     this.activeHoldTimeoutId = setTimeout(() => {
//       if (this.isHeld) {
//         this.callback();
//       }
//     }, 1000);
//   }

//   _onHoldEnd() {
//     this.isHeld = false;
//     clearTimeout(this.activeHoldTimeoutId)
//     stopMovingMobile()
//   }
// }

// const xPadUp = document.getElementById("x-pad-up");

// new ClickAndHold(xPadUp, () => {
//     movePlayerUpMobile()
// });

// MOVEMENT FUNCTIONS FOR MOBILE X-PAD///////////////////////////////////////////
// const buttons = []

// window.addEventListener("mousedown", function(e) {
//   console.log(buttons);
//   buttons[e.button] = true;
//   player.moving = true;
// });
// window.addEventListener("mouseup", function(e) {
//   delete buttons[e.button];
//   player.moving = false;
// });

// const buttons = []



// window.addEventListener("touchstart", e => {
 
// });
// window.addEventListener("touchmove", e => {
//   console.log("moving");
// });
// window.addEventListener("touchend", e => {
//   console.log("end");
// });



function movePlayerUpMobile() {
  if (player.y > 100) {
    player.y -= player.speed;
    player.frameY = 3;
    player.moving = true;
  }
}
function movePlayerDownMobile() {
  if (player.y < canvas.height - player.height - 2) {
    player.y += player.speed;
    player.frameY = 0;
    player.moving = true;
  }
}
function movePlayerLeftMobile() {
  if (player.x > 1) {
    player.x -= player.speed;
    player.frameY = 1;
    player.moving = true;
  }
}
function movePlayerRightMobile() {
  if (player.x < canvas.width - player.width) {
    player.x += player.speed;
    player.frameY = 2;
    player.moving = true;
  }
}
function stopMovingMobile() {
  player.y.x = player.speed;
  player.moving = false;
}
