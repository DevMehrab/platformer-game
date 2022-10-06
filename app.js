import { Fighter } from "./class.js";
let character = document.querySelector('.character')
let hero = document.querySelector('.hero')

onclick = () => {
    fighter.attack1()
    fighter.characterState()
}
oncontextmenu = e => {
    e.preventDefault()
    fighter.attack2()
    fighter.characterState()
}


let fighter = new Fighter(hero, character)
window.addEventListener('keydown', function (e) {
    fighter.keydownEvent(e.key) 
});
window.addEventListener('keyup', function (e) {
    fighter.keyupEvent(e.key)
});
// window.addEventListener('keypress', function (e) {
//     fighter.keyupEvent(e.key)
// });


window.onanimationstart = () => {
    fighter.characterState()
}
