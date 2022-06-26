

//LETS GO

//establishing winning conditions
const winningState = [             
  [00, 01, 02],
  [10, 11, 12],
  [20, 21, 22],
  [00, 10, 20],
  [01, 11, 21],
  [02, 12, 22],
  [00, 11, 22],
  [02, 11, 20]
];

// HTML Elements
const cells = document.querySelectorAll(".cell");
const square1 = document.getElementById("00");
const square2 = document.getElementById("01");
const square3 = document.getElementById("02");
//^^Row 1
const square4 = document.getElementById("10");
const square5 = document.getElementById("11");
const square6 = document.getElementById("12");
//^^ Row 2
const square7 = document.getElementById("20");
const square8 = document.getElementById("21");
const square9 = document.getElementById("22");
//^^Row 3

const winMessage = document.getElementById("winningTextMessage");
const playAgainBox = document.getElementById("winningTextArea");
const winnerIsText = document.getElementById("winningTextMessage");


//automatically fill all tiles with null value
const boardState = Array(cells.length);
boardState.fill(null); 

console.log (boardState)
console.log (square1)




//defining beginning variable
//const initialState = {}            

  //identifying current players
  /*player0: 'x' ,           
  player1: 'o' ,         

  //board starting point
    board: [                        
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    count: 0

//using all elements that match CSS selectors
//let cell = document.querySelectorAll('td')      //why query
//using id tag from html to save board elements
let board = document.getElementById('board')

console.log(board)
//using winning text element to save message 
let winningText = document.getElementById('winningText')  //do I need div of winning text?
let restartButton = document.getElementById('restartButton')
let winningTextMessage = document.getElementById('winningTextMessage')



//have event list for board that has type of click, then func

board.addEventListener("click", (event) => {
    let id = event.target.id.split('')

    
    if(event.target.innerHTML === ''){

      if(initialState.count % 2 === 0){
        event.target.innerHTML = initialState.player0
        initialState.board[Number(id[0])][Number(id[1])] = initialState.player0
        initialState.count++
      }else{
        event.target.innerHTML = initialState.player1
        initialState.board[Number(id[0])][Number(id[1])] = initialState.player1
        initialState.count++
      }

    }
    console.log(initialState.board)

    })

function buildInitialState() {

}

// players entering names

let p2 = document.getElementById(playerButton)
let c1








/* let tictactoe = [
//     ['d', null,null],  [null, null,null], [null, null,null]
// ]

// let board = document.getElementById("board")
// board.addEventListener("click", (event) => {
//    let id = event.target.id

//    let variable = id.split('')
//    console.log(tictactoe[Number(variable[0])][Number(variable[1])])*/
