import { Player } from "./player.js"
import { Coin, arrayCoin } from "./coin.js"

let login = document.querySelector("#login")
let campo = document.querySelector("#campo")
let btnStart = document.querySelector("#btnStart")
let nomeP1 = document.querySelector("#inomep1")
let corP1 = document.querySelector("#icolorp1")
let nomeP2 = document.querySelector("#inomep2")
let corP2 = document.querySelector("#icolorp2")
let pointsP1 = document.querySelector(".playerPointsP1")
let pointsP2 = document.querySelector(".playerPointsP2")
let nameStatusP1 = document.querySelector("#scorePlayerP1Name")
let nameStatusP2 = document.querySelector("#scorePlayerP2Name")
let corStatusPlayer1 = document.querySelector("#corStatusPlayerP1")
let corStatusPlayer2 = document.querySelector("#corStatusPlayerP2")
let telaWin = document.querySelector("#win")
let btnWin = document.querySelector("#btnWin")
var interval

function StartGame(namePlayer1, corPlayer1, namePlayer2, corPlayer2) {

  function createCoin() {
    arrayCoin.push(new Coin)
  }

  // Define as teclas de movimentação para cada player
  let keyP1 = ["KeyW", "KeyS", "KeyA", "KeyD"]
  let keyP2 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]

  // Define um identificador para cada jogador e sua pontuação e cor
  pointsP1.classList.add(namePlayer1)
  pointsP2.classList.add(namePlayer2)
  
  corStatusPlayer1.style.backgroundColor = corPlayer1
  corStatusPlayer2.style.backgroundColor = corPlayer2
  
  // Cria os players e os coins
  let p1 = new Player(namePlayer1, corPlayer1, keyP1)
  let p2 = new Player(namePlayer2, corPlayer2, keyP2)
  interval = setInterval(createCoin, 1000)

  window.addEventListener("resize", () => {
    Coin.delete()
    p1.rezise()
    p2.rezise()
  })

}

btnStart.addEventListener("click", ()=> {
  login.style.display = "none"

  // Seta valores default caso o usuário não digite o nome dos jogadores
  if(nomeP1.value.length == 0) {
    nomeP1.value = "Player1"
  }
  if (nomeP2.value.length == 0) {
    nomeP2.value = "Player2"
  } 

  // Coloca os nomes definidos na parte superior onde mostra a pontuação
  nameStatusP1.innerHTML = nomeP1.value
  nameStatusP2.innerHTML = nomeP2.value
    
  StartGame(nomeP1.value, corP1.value, nomeP2.value, corP2.value)
})

btnWin.addEventListener("click", () => {
  // para de gerar novas bolinhas
  clearInterval(interval)

  // Remove todos os elementos do campo
  let elementos = [...campo.children]
  elementos.map(el => {
    campo.removeChild(el)
  })

  // Retira a tela de vencedor
  telaWin.style.display = "none"

  // Mostra a tela de login
  login.style.display = "flex"

  // Reseta os pontos dos jogadores
  Player.resetPoints()

  // Reseta o array de coins
  Coin.resetCoin()
})

