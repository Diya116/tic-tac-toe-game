export default class gameview{
    // constructor()
    // {
    //     console.log("heyyy")
    // }

    updateBoard(game)
    {  

        for (let i = 0; i < game.board.length; i++) {
           const tile=document.querySelector(`.board-tile[data-index='${i}']`)
           tile.textContent=game.board[i];
        }
    }
    turnupdate(game)
    { 
       
        let playerx=document.querySelector(".player-x");
        let playero=document.querySelector(".player-o");
       
    
        if(game.turn=="X")
        {
            console.log("x turn")
            playerx.style.borderBottom ="5px solid #8ef6e4"
            playero.style.borderBottom ="none"
            playerx.style.color="#8ef6e4"
            playero.style.color="white"
           

        }
        else if (game.turn=="O")
        {
            console.log("O turn")
            playero.style.borderBottom ="5px solid   #d59bf6"
            playerx.style.borderBottom ="none"
            playero.style.color="#d59bf6"
            playerx.style.color="white"
           
        }
    } 
    changeTheme()
    {
        
    }
}