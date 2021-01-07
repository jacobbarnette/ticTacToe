const DOM = (function(){
    const cellElements = document.querySelectorAll('[data-cell]');
    const board = document.getElementById('board');
    const X_class = 'x';
    const CIRCLE_CLASS = 'circle';
    let circleTurn;
    const winningSolution = [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    cellElements.forEach(element => {
        element.addEventListener('click', handleClick, { once: true})
    });

    let body = document.getElementById('body');
    let button = document.createElement('button');
    let ticTacToe = document.getElementById('header'); 
    let introContainer = document.createElement('div');
    introContainer.setAttribute('id', 'introContainer');
    introContainer.appendChild(ticTacToe);
    introContainer.appendChild(button);
    body.appendChild(introContainer);
   
    
    button.textContent = 'Start Game';
    button.setAttribute('id', 'startGame');
    body.appendChild(introContainer);
    button.addEventListener('click', choosePlayers)
   
    function choosePlayers() {
        ticTacToe.setAttribute('class', 'moveHeading');
        ticTacToe.classList.remove('heading')
        introContainer.removeChild(button);
        let choosePlayerContainer = document.createElement('div');
        for(let i = 0; i < 2; i++){      
            choosePlayerContainer.setAttribute('id', 'choosePlayerContainer');
            let button = document.createElement('button');
            button.setAttribute('id', `button${i}`)
            choosePlayerContainer.appendChild(button);
            body.appendChild(choosePlayerContainer);
        }
       
        let aiBtn = document.getElementById('button0');
        aiBtn.textContent = 'AI';
        aiBtn.setAttribute('class', 'slideAiBtn');
        aiBtn.addEventListener('click', gameBoard);
        let twoPlayers = document.getElementById('button1');
        twoPlayers.textContent = 'Two Players';
        twoPlayers.setAttribute('class', 'slideTwoPlayer');
        twoPlayers.addEventListener('click', gameBoard);
    }
        

        function gameBoard(event){
            board.classList.remove('hidden');
            board.classList.add('board')
        }

        function handleClick(e){
            const cell = e.target;
            const currentClass = circleTurn ? CIRCLE_CLASS : X_class
            
            placeMark(cell, currentClass);
            if(checkWin(currentClass)) {
              if(currentClass === X_class){
                   
                    const winMsgContainer = document.createElement('div');
                  winMsgContainer.classList.add('winning-message')
            const winMsg =  document.createElement('div');
            winMsg.textContent = 'X Won!'   
            const restartBtn = document.createElement('button')
            restartBtn.textContent = 'Restart';
            winMsgContainer.classList.add('winning-message');
            winMsgContainer.appendChild(winMsg);
            body.appendChild(winMsgContainer)
              }
              
            }
           
        }


function placeMark(cell, currentClass){
    cell.classList.add(currentClass);
    swapTurn()
    setBoardHoverClass()
}

function swapTurn(){
    circleTurn = !circleTurn;
}

function setBoardHoverClass(){
    board.classList.remove(X_class);
    board.classList.remove(CIRCLE_CLASS);
    if(circleTurn){
        board.classList.add(CIRCLE_CLASS);
    } else {
        board.classList.add(X_class);
    }
}

function checkWin(currentlClass) {
   return winningSolution.some(combination => {
       return combination.every(index => {
           return cellElements[index].classList.contains(currentlClass)
       })
   })
}
    
 })();






