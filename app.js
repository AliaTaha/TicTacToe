


const initialState = {              //defining beginning variable

  const player0 = 'x'             //identifying current players
  const player1 = 'o'             

    let board: [                        //board starting point
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


//using all elements that match CSS selectors
let cell = document.querySelectorAll('td')      //why query
//using id tag from html to save board elements
let board = document.getElementById('board')
//using winning text element to save message 
let winningText = document.getElementById('winningText')  //do I need div of winning text?
let restartButton = document.getElementById('restartButton')
let winningTextMessage = document.getElementById(winningTextMessage)




// board.addEventListener("click", (event) => {
//    let id = event.target.id

function buildInitialState() {

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