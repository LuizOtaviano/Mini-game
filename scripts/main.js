import { Player } from "./player.js"
import { Coin, arrayCoin } from "./coin.js"

function StartGame(namePlayer1="Player 1", namePlayer2="Player 2") {

  function createCoin() {
    arrayCoin.push(new Coin)
  }

  let keyP1 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
  let keyP2 = ["KeyW", "KeyS", "KeyA", "KeyD"]
  
  let p1 = new Player(namePlayer1, "red", keyP1)
  let p2 = new Player(namePlayer2, "green", keyP2)
  let interval = setInterval(createCoin, 5000)
}

StartGame()


