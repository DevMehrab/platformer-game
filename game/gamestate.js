let gameState = {
  character: null,
  hero: null,
  playerPosition: null,
  getPlayerPosition: () => {},
  setPlayerPosition: () => {},
};
export function getGameState() {
  return gameState;
}
export function initGameState() {
  gameState = {
    character: document.querySelector(".character"),
    hero: document.querySelector(".hero"),
    playerPosition: null,
    getPlayerPosition: function () {
      return parseInt(
        window.getComputedStyle(this.hero).getPropertyValue("left")
      );
    },
    setPlayerPosition: function (pos) {
      this.playerPosition = pos;
    },
  };
}
