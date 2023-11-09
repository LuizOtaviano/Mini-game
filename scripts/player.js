import { Coin, arrayCoin } from "./coin.js"

const campo = document.querySelector("#campo")
let playerX = 0
let playerY = 0
let widthMax = 0
let heightMax = 0

class Player {
  constructor(nome, cor, key) {
    this.id = nome
    this.wp = 20
    this.hp = 20
    this.color = cor
    this.x = Math.floor(Math.random() * (campo.clientWidth - this.wp))
    this.y = Math.floor(Math.random() * (campo.clientHeight - this.hp))
    this.createPlayer()
    this.eu = document.getElementById(this.id)
    this.key = key
    this.move()
  }

  createPlayer() {
    let player = document.createElement("div")
    player.setAttribute("id", this.id)
    player.setAttribute("name", this.nome)
    let estilo =
      `width: ${this.wp}px;` +
      `height: ${this.hp}px;` +
      `background-color: ${this.color};` +
      `position: absolute;` +
      `left: ${this.x}px;` +
      `top: ${this.y}px;`
    player.setAttribute("style", estilo)
    campo.appendChild(player)
  }

  move() {
    let context = this

    let keysPressed = {
      [context.key[0]]: false,
      [context.key[1]]: false,
      [context.key[2]]: false,
      [context.key[3]]: false,
    }

    window.addEventListener("keydown", (evt) => {
      keysPressed[evt.code] = true
      context.updatePlayerPosition(keysPressed)
    })

    window.addEventListener("keyup", evt => {
      keysPressed[evt.code] = false
    })
  }

  updatePlayerPosition(keysPressed) {
    playerX = parseInt(this.eu.style.left)
    playerY = parseInt(this.eu.style.top)
    widthMax = campo.clientWidth - 20
    heightMax = campo.clientHeight - 20

    let step = 10

    if (keysPressed[this.key[0]] && playerY > 0) {
      this.eu.style.top = playerY - step + "px"
    }

    if (keysPressed[this.key[1]] && playerY < heightMax) {
      this.eu.style.top = playerY + step + "px"
    }

    if (keysPressed[this.key[2]] && playerX > 0) {
      this.eu.style.left = playerX - step + "px"
    }

    if (keysPressed[this.key[3]] && playerX < widthMax) {
      this.eu.style.left = playerX + step + "px"
    }

    arrayCoin.map((el) => {
      let pp = this.eu.getBoundingClientRect() // Player position
      let pc = el.eu.getBoundingClientRect() // Coin position
      if (
        pp.right > pc.left &&
        pp.left < pc.right &&
        pp.bottom > pc.top &&
        pp.top < pc.bottom
      ) {
        el.coletar()
      }
    })
  }
}

export { Player }
