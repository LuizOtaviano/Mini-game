const campo = document.querySelector("#campo")
let arrayCoin = []

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
    coin.setAttribute("class", "coin")

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

  static delete() {

    let getAllCoin = [...document.querySelectorAll(".coin")]
    let campo = document.querySelector("#campo")
    
    getAllCoin.map(el => {
      let coin = el.getBoundingClientRect()

      if (
        coin.left > campo.clientWidth ||
        coin.left < 0 ||
        coin.top > campo.clientHeight ||
        coin.top < 0
        ) {
          campo.removeChild(el)
          arrayCoin = arrayCoin.filter(coin => {
            if (coin.id != el.id) {
              return coin
            }
          })
        }
    })
  }

  coletar() {
    arrayCoin = arrayCoin.filter(el => {
      if (el.id != this.eu.id) {
        return el
      }
    })
    this.eu.remove()
  }

  static resetCoin() {
    arrayCoin = []
  }
}

export { Coin, arrayCoin }
