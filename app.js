const boxes = document.querySelectorAll(".box")
const resetBtn = document.querySelector(".reset-btn")
const msgContainer = document.querySelector(".msg-container")
const msg = document.querySelector("#msg")
const newGame = document.querySelector(".new-btn")


const winPatterns = [[0, 1, 2], 
                    [3, 4, 5], 
                    [6, 7, 8], 
                    [0, 3, 6], 
                    [1, 4, 7], 
                    [2, 5, 8], 
                    [0, 4, 8], 
                    [2, 4, 6],
];



let turnX = true
let count = 0
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box CLicked");
        
        if (turnX) {
            box.innerText = "X"
            box.style.color = "green"
            turnX = false
        }else{
            box.innerText = "O"
            box.style.color = "red"
            turnX = true
        }
        box.disabled = true
        count++
        checkWinners()
        
        let isWinner = checkWinners()
        if (count === 9 && !isWinner) {
            drawGame()
        }
    })
})

const drawGame = () => {
    msg.innerText = "Game was Draw\n Press New Game to start again"
    msgContainer.classList.remove("hide")
    disableBoxes()
}

const showWinner = (winner) => {
    msg.innerText = `Winner : Player ${winner}\n Press New Game to start again`
    msgContainer.classList.remove("hide")
    disableBoxes()
}

const checkWinners = () => {
    for(let patterns of winPatterns){
        
        let pos1 = boxes[patterns[0]].innerText
        let pos2 = boxes[patterns[1]].innerText
        let pos3 = boxes[patterns[2]].innerText

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1)
            }
        }
    }
}

const disableBoxes = () => {
    for(box of boxes) {
        box.disabled = true
    }
}

const enableBoxes = () => {
    for(box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
}


const resetGame = () => {
    turnX = true
    count = 0
    enableBoxes()
    msgContainer.classList.add("hide")
}


newGame.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)






