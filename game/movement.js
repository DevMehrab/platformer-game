import { getGameState } from "./gamestate.js";
function _walk(walkingAnimation, direction, speed = 3) {
  if (direction !== 1 && direction !== -1) return;
  getGameState().character.classList.add(walkingAnimation);
  getGameState().hero.style.left =
    getGameState().playerPosition + direction * speed + "px";
  getGameState().setPlayerPosition(
    parseInt(
      window.getComputedStyle(getGameState().hero).getPropertyValue("left")
    )
  );
}
export function moveRight() {
  _walk("move-right", 1);
}
export function moveLeft() {
  _walk("move-left", -1);
}
