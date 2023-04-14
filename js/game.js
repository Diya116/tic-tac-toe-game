export default class Game{

     constructor()
     {
        this.turn="X";
        this.board=new Array(9).fill(null);
     } 
   
     nextTurn() 
     {
        if(this.turn=="X")
        {
            this.turn="O"
        }
        else{
            this.turn="X"
        }
     }

     makeMove(i){
        if(this.board[i])
        {
             return;

        }
       if(this.endOfGame())
       { 
        return;
       }
         this.board[i]=this.turn;
        let winner= this.findWinningCombo();
        let boardtile=document.querySelector(".board-tile");
        let win=document.querySelector(".win")
        if(!winner) 
        {
            this.nextTurn();
        } 
        else{
            console.log(winner)
            console.log(win)
            win.innerText=`${this.turn} is won`
           win.style.display="block"
          winner.forEach(i => {
            const tile=document.querySelector(`.board-tile[data-index='${i}']`)
            // tile.style.backgroundColor="#9896f1";
            tile.style.backgroundColor="#9896f1";
            tile.style.color="black"
        //    setTimeout(()=>{
        //     tile.style.backgroundColor="black";
        //     tile.style.color="white"
        //     win.style.display="none"
        // },5000) 
           
            });
        }
    }
     findWinningCombo()
     {
        const winningCombo=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]

        ]

        for(const combination of winningCombo) 
        {
         
           const[a,b,c]=combination;
           
           if(this.board[a]&&(this.board[a]===this.board[b]&&this.board[a]==this.board[c])){
           return combination;
        }
         
        }
        return null;
     }

     endOfGame()
     {
        let winner= this.findWinningCombo();
        if(winner) 
          return true;
          else
          return false;
     }
     
}
