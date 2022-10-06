export class Fighter {
    constructor(hero, character) {
        this.image = './img/sprites/woodcutter/Woodcutter_idle.png'
        this.health
        this.damage
        this.state = 'idle'
        this.hero = hero
        this.character = character
        this.frames
        this.frameWidth
    }
    keydownEvent(eventMsg) {
        if (eventMsg === "ArrowLeft") {
            this.character.classList.add('move')
            this.hero.classList.add('rotate')
            this.hero.style.left = this.playerPosition - 3 + "px"
            this.playerPosition = parseInt(window.getComputedStyle(this.hero).getPropertyValue("left"))
            this.image = "'./img/sprites/woodcutter/Woodcutter_walk.png'"
            
alert(parseInt(window.getComputedStyle(this.hero).getPropertyValue("bottom")));
        }
        if (eventMsg === "ArrowRight") {
            this.character.classList.add('move')
            this.hero.classList.remove('rotate')
            this.hero.style.left = this.playerPosition + 3 + "px"
            this.playerPosition = parseInt(window.getComputedStyle(this.hero).getPropertyValue("left"))
            this.image = "'./img/sprites/woodcutter/Woodcutter_walk.png'"
        }
        if (eventMsg === "ArrowUp") {
            this.jump()
        }

    }
    keyupEvent(eventMsg) {
        if (eventMsg === "ArrowLeft") {
            this.character.classList.remove('move')
            this.image = "'./img/sprites/woodcutter/Woodcutter_idle.png'"
        }
        if (eventMsg === "ArrowRight") {
            this.character.classList.remove('move')
            this.image = "'./img/sprites/woodcutter/Woodcutter_idle.png'"
        }

    }
    characterState() {
        let name = this.image
        this.character.style.backgroundImage = "url(" + name + ")"
        if (this.state === 'attack') {
            this.character.classList.add('attack')
        } 
        if (this.state === 'jump') {
            this.character.classList.add('attack')
        }
        else {
            this.character.classList.add('idle')
        }
    }
    attack1() {
        this.image = "'./img/sprites/woodcutter/Woodcutter_attack1.png'"
        this.damage = 34
        this.state = 'attack'
        setTimeout(() => {
            this.image = "'./img/sprites/woodcutter/Woodcutter_idle.png'"
            this.character.classList.remove('attack')
            this.state = 'idle'
        }, 400);
    }
    attack2() {
        this.image = "'./img/sprites/woodcutter/Woodcutter_attack3.png'"
        this.damage = 50
        this.character.classList.add('attack')
        this.hero.style.left = this.playerPosition + 9 + "px"
        this.playerPosition = parseInt(window.getComputedStyle(this.hero).getPropertyValue("left"))
        setTimeout(() => {
            this.image = "'./img/sprites/woodcutter/Woodcutter_idle.png'"
            this.character.classList.remove('attack')
        }, 400);
    }
    injury() {

    }
    jump(){
        this.image = "'./img/sprites/woodcutter/Woodcutter_jump.png'"
        this.hero.classList.add('jump')
        this.hero.style.left = this.playerPosition + 9 + "px"
        this.playerPosition = parseInt(window.getComputedStyle(this.hero).getPropertyValue("left"))
        setTimeout(() => {
            this.image = "'./img/sprites/woodcutter/Woodcutter_idle.png'"
            this.hero.classList.remove('jump')
        }, 400);
    }
    assets() {

    }
}