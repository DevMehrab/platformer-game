import { initGameState } from "./gamestate.js";
import { subscribeKeyboardEvent } from "./keyboard/eventSubscriptions.js";
function _startGame() {
  initGameState();
  subscribeKeyboardEvent();
}

window.onload = () => {
  _startGame();
};
