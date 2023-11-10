import { Player } from "./player.js"
import { Coin, arrayCoin } from "./coin.js"

let login = document.querySelector("#login")
let btnStart = document.querySelector("#btnStart")
let nomeP1 = document.querySelector("#inomep1")
let corP1 = document.querySelector("#icolorp1")
let nomeP2 = document.querySelector("#inomep2")
let corP2 = document.querySelector("#icolorp2")
let pointsP1 = document.querySelector(".playerPointsP1")
let pointsP2 = document.querySelector(".playerPointsP2")

window.addEventListener("resize", () => {
  Coin.delete()
})

function StartGame(namePlayer1, corPlayer1, namePlayer2, corPlayer2) {

  function createCoin() {
    arrayCoin.push(new Coin)
  }

  let keyP1 = ["KeyW", "KeyS", "KeyA", "KeyD"]
  let keyP2 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]

  pointsP1.classList.add(namePlayer1)
  pointsP2.classList.add(namePlayer2)
  
  let p1 = new Player(namePlayer1, corPlayer1, keyP1)
  let p2 = new Player(namePlayer2, corPlayer2, keyP2)
  let interval = setInterval(createCoin, 5000)
}

btnStart.addEventListener("click", ()=> {
  login.style.display = "none"

  if(nomeP1.value.length == 0) {
    nomeP1.value = "Player1"
  }
  if (nomeP2.value.length == 0) {
    nomeP2.value = "Player2"
  } 
    
  StartGame(nomeP1.value, corP1.value, nomeP2.value, corP2.value)
})
