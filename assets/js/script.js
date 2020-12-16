const DOM = (function(){
    /*initial 'load screen' */
    let body = document.getElementById('body');
    let button = document.createElement('button');
    let ticTacToe = document.createElement('h1'); 
    let container = document.createElement('div');
    container.setAttribute('id', 'container');
    body.appendChild(container);
    let introContainer = document.createElement('div');
    introContainer.setAttribute('id', 'introContainer');
    introContainer.appendChild(ticTacToe);
    introContainer.appendChild(button);
    container.appendChild(introContainer);
    ticTacToe.textContent = 'Tic Tac Toe';
    ticTacToe.setAttribute('class', 'heading')
    button.textContent = 'Start Game';
    button.setAttribute('id', 'startGame');
    body.appendChild(introContainer);
    button.addEventListener('click', choosePlayers)
    
    /*screen for game selection*/
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
            aiBtn.addEventListener('click', aiBoard);

    function aiBoard() {
        
       aiBtn.removeEventListener('click', aiBoard);
       twoPlayers.removeEventListener('click', twoPlayerBoard);
        let gameBoard = [];
        let gameBoardContainer = document.createElement('div');
        gameBoardContainer.setAttribute('id','gameBoardContainer');
        container.appendChild(gameBoardContainer);
            for(let i = 0; i < 9; i++){
                    let gameboardSquares = document.createElement('div');
                        gameboardSquares.setAttribute('class', 'squares');
                        gameboardSquares.setAttribute('id', `square${i}`);
                        gameBoard.push(gameboardSquares);
                        gameBoardContainer.appendChild(gameboardSquares);
                        body.appendChild(gameBoardContainer);
                    }
                /*function calls for game logic for ai */
                /*two player mode until ai programmed */
                twoPlayerGame(gameBoard)
        }
    
    function twoPlayerGame(gameBoard){
        let turnCounter = 0;
        let player1 = new playerFactory(`Player 1`, 'X');
        let player2 = new playerFactory('Player 2', 'O');
        gameBoard.forEach(element => {
            element.addEventListener('click', function(){
                if(this.textContent === player1.marker || this.textContent === player2.marker){
                    alert('Sorry, There is already a mark there')
                } else {
                    if(turnCounter % 2 === 0 && turnCounter <= 9){
                        this.textContent = player1.marker;
                        turnCounter++;
                    } else if (turnCounter % 2 != 0 && turnCounter <= 9) {
                        this.textContent = player2.marker;
                        turnCounter++;
                    }
                }
            });
        });
    }
    
function playerFactory(name, marker) {
    this.name = name;
    this.marker = marker;
}

        let twoPlayers = document.getElementById('button1');
        twoPlayers.textContent = 'Two Players';
        twoPlayers.setAttribute('class', 'slideTwoPlayer');
        twoPlayers.addEventListener('click', twoPlayerBoard);

        function twoPlayerBoard() {
            twoPlayers.removeEventListener('click', twoPlayerBoard);
            aiBtn.removeEventListener('click', aiBoard);
            let gameBoard = [];
            let gameBoardContainer = document.createElement('div')
                gameBoardContainer.setAttribute('id','gameBoardContainer');
                container.appendChild(gameBoardContainer);
                    for(let i = 0; i < 9; i++){
                        let gameboardSquares = document.createElement('div');
                            gameboardSquares.setAttribute('class', 'squares')
                            gameboardSquares.setAttribute('id', `square${i}`);
                            gameBoard.push(gameboardSquares);
                            gameBoardContainer.appendChild(gameboardSquares);
                            body.appendChild(gameBoardContainer);
                        }
                        twoPlayerGame(gameBoard);
        }

       
    }

    function winningSolution() {
        /*start here tomorrow
        maybe read on AI and minmax to create AI first
        then once AI is created, we can then worry about winning solution
        */
    }
 })();



