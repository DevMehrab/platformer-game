
let character = document.querySelector('.character')
let hero = document.querySelector('.hero')
let h2 = document.querySelector('h2')
let des = document.querySelector('.des')

let playerPosition = parseInt(window.getComputedStyle(hero).getPropertyValue("left"))
let playerPositionBottom = parseInt(window.getComputedStyle(hero).getPropertyValue("bottom"))




// key event listening
window.addEventListener('keydown', function (e) {
    if (e.key === "ArrowRight") {
        
        moveRight()
        character.classList.remove('rotate')
    }
  
    if (e.key === "ArrowLeft") {
        moveLeft()
        character.classList.add('rotate')
    }
});
window.addEventListener('keyup', function (e) {
    if (e.key === "ArrowRight") {
        character.classList.remove('moveRight')
    }
    if (e.key === "ArrowLeft") {
        character.classList.remove('moveLeft')
    }
});

window.addEventListener("click", e => {
    character.classList.add('attack1')
    setTimeout(() => {
        character.classList.remove('attack1')
    }, 400)
})
window.addEventListener("contextmenu", e => {
    e.preventDefault()
    character.classList.add('attack2')
    setTimeout(() => {
        character.classList.remove('attack2')
    }, 400)
})
// functions 

function moveRight() {
    character.classList.add('moveRight')
    hero.style.left = playerPosition + 3 + "px"
    playerPosition = parseInt(window.getComputedStyle(hero).getPropertyValue("left"))
}
function moveLeft() {
    character.classList.add('moveLeft')
    hero.style.left = playerPosition - 3 + "px"
    playerPosition = parseInt(window.getComputedStyle(hero).getPropertyValue("left"))
}

