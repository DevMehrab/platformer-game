import { getGameState } from "../gamestate.js";
import { moveLeft, moveRight } from "../movement.js";

export function subscribeKeyboardEvent() {
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
      getGameState().character.classList.remove("move-right");
    }
    if (e.key === "ArrowLeft") {
      getGameState().character.classList.remove("move-left");
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
}
