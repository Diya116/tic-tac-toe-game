import Game from "./game.js"
import Gameview from "./gameview.js";
let game=new Game();
let gameview=new Gameview();
let tiles=document.querySelectorAll(".board-tile")
let win=document.querySelector(".win")

game.findWinningCombo()
tiles.forEach((tile) => {
    tile.addEventListener("click",()=>{
        onClick(tile.dataset.index)
    })
})
let replay=document.querySelector(".replay");
replay.addEventListener("click",()=>{ 
   tiles.forEach(tile => {
    tile.style.backgroundColor="black";
    tile.style.color="white"
    });
    // tiles.style.backgroundColor="black";
    //         tiles.style.color="white"
            win.style.display="none"
     game=new Game();
    gameview.updateBoard(game);
   
})
function onClick(i)
{ 
   game.makeMove(i);
   gameview.updateBoard(game);
   gameview.turnupdate(game);
  

} 
