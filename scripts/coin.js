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
    arrayCoin = arrayCoin.filter(el => {
      if (el.x < campo.clientWidth ||
        el.y < campo.clientHeight ||
        el.x > 0 || el.y > 0) {
          return el
        } else {
          console.log(el)
          el.eu.remove()
        }
    })
  }

  coletar() {
    console.log(arrayCoin)
    arrayCoin = arrayCoin.filter(el => {
      if (el.id != this.eu.id) {
        return el
      }
    })
    this.eu.remove()
    console.log(arrayCoin)
  }
}

export { Coin, arrayCoin }
