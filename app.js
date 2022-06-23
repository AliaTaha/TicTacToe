let tictactoe = [
    ['d', null,null],  [null, null,null], [null, null,null]
]

let board = document.getElementById("board")
board.addEventListener("click", (event) => {
   let id = event.target.id

   let variable = id.split('')
   console.log(tictactoe[Number(variable[0])][Number(variable[1])])
})