const campo = document.querySelector("#campo")
let playerX = 0
let playerY = 0
let widthMax = 0
let heightMax = 0
let arrayCoin = []
let interval = null

class Player {
  constructor() {
    this.id = "Player1"
    this.wp = 20
    this.hp = 20
    this.color = "black"
    this.x = 0
    this.y = 0
    this.createPlayer()
    this.eu = document.getElementById(this.id)
    this.move()
  }

  createPlayer() {
    let player = document.createElement("div")
    player.setAttribute("id", this.id)
    let estilo =
      `width: ${this.wp}px;` +
      `height: ${this.hp}px;` +
      `background-color: ${this.color};` +
      `position: absolute;` +
      `left: ${this.x};` +
      `top: ${this.y};`
    player.setAttribute("style", estilo)
    campo.appendChild(player)
  }

  move() {
    let context = this
    window.onkeydown = function (evt) {
      console.log(context.eu)
      playerX = parseInt(context.eu.style.left)
      playerY = parseInt(context.eu.style.top)
      widthMax = campo.clientWidth - 20
      heightMax = campo.clientHeight - 20

      let step = 10

      switch (evt.code) {
        case "ArrowUp":
          if (playerY > 0) {
            context.eu.style.top = playerY - step + "px"
          }
          break

        case "ArrowDown":
          if (playerY < heightMax) {
            context.eu.style.top = playerY + step + "px"
          }
          break

        case "ArrowLeft":
          if (playerX > 0) {
            context.eu.style.left = playerX - step + "px"
          }
          break

        case "ArrowRight":
          if (playerX < widthMax) {
            context.eu.style.left = playerX + step + "px"
          }
          break
      }

      arrayCoin.map((el) => {
        let pp = context.eu.getBoundingClientRect() // Player position
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
}

class Coin {
  constructor() {
    this.id = "c" + Math.floor(Math.random() * 10000)
    this.wc = 20
    this.hc = 20
    this.color = "orange"
    this.x = Math.floor(Math.random() * (campo.clientWidth - this.wc))
    this.y = Math.floor(Math.random() * (campo.clientHeight - this.hc))
    this.create()
    this.eu = document.querySelector(`#${this.id}`)
  }

  create() {
    let coin = document.createElement("div")
    coin.setAttribute("id", this.id)

    let styleCoin =
      `position: absolute;` +
      `width: ${this.wc}px;` +
      `height: ${this.hc}px;` +
      `background-color: ${this.color};` +
      `left: ${this.x}px;` +
      `top: ${this.y}px;` +
      `border-radius: 50%;`

    coin.setAttribute("style", styleCoin)
    campo.appendChild(coin)
  }

  coletar() {
    this.eu.remove()
  }
}

function StartGame(namePlayer1, namePlayer2) {

  function createCoin() {
    arrayCoin.push(new Coin())
  }
  
  let p1 = new Player()
  interval = setInterval(createCoin, 5000)
  
  window.addEventListener("keydown", evt => {
    console.log(evt.code)
  })

}



