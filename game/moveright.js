import { getGameState } from "./gamestate.js";

export function moveRight() {
  getGameState().character.classList.add("moveRight");
  getGameState().hero.style.left = playerPosition + 3 + "px";
  getGameState().playerPosition = parseInt(
    window.getComputedStyle(getGameState().hero).getPropertyValue("left")
  );
}
