let gameState = {
  character: null,
  hero: null,
  playerPosition: null,
  playerPositionBottom: null,
};
export function getGameState() {
  return gameState;
}
export function initGameState() {
  gameState = {
    character: document.querySelector(".character"),
    hero: document.querySelector(".hero"),
    playerPosition: parseInt(
      window.getComputedStyle(getGameState().hero).getPropertyValue("left")
    ),
    playerPositionBottom: parseInt(
      window.getComputedStyle(getGameState().hero).getPropertyValue("bottom")
    ),
  };
}