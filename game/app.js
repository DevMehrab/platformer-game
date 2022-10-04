import { getGameState, initGameState } from "./gamestate.js";
import { moveRight } from "./moveright.js";
window.onload = () => {
  initGameState();
};

// key event listening
window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveRight();
    getGameState().character.classList.remove("rotate");
  }

  if (e.key === "ArrowLeft") {
    moveLeft();
    getGameState().character.classList.add("rotate");
  }
});
window.addEventListener("keyup", function (e) {
  if (e.key === "ArrowRight") {
    getGameState().character.classList.remove("moveRight");
  }
  if (e.key === "ArrowLeft") {
    getGameState().character.classList.remove("moveLeft");
  }
});

window.addEventListener("click", (e) => {
  getGameState().character.classList.add("attack1");
  setTimeout(() => {
    getGameState().character.classList.remove("attack1");
  }, 400);
});
window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  getGameState().character.classList.add("attack2");
  setTimeout(() => {
    getGameState().character.classList.remove("attack2");
  }, 400);
});
// functions
function moveLeft() {
  getGameState().character.classList.add("moveLeft");
  getGameState().hero.style.left = getGameState().playerPosition - 3 + "px";
  getGameState().playerPosition = parseInt(
    window.getComputedStyle(getGameState().hero).getPropertyValue("left")
  );
}
