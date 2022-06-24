


const initialState = {              //defining beginning variable

    const playerX = 'x'             //identifying current players
    const playerO = 'o'             

    board: [                        //board starting point
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
}              

const winningState = [              //establishing winning conditions
    [00, 01, 02],
    [10, 11, 12],
    [20, 21, 22],
    [00, 10, 20],
    [01, 11, 21],
    [02, 12, 22],
    [00, 11, 22],
    [02, 11, 20]
];












let initialState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }
















// let tictactoe = [
//     ['d', null,null],  [null, null,null], [null, null,null]
// ]

// let board = document.getElementById("board")
// board.addEventListener("click", (event) => {
//    let id = event.target.id

//    let variable = id.split('')
//    console.log(tictactoe[Number(variable[0])][Number(variable[1])])
// }) 