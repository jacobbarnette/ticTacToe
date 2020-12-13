const DOM = (function(){
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

        function gameBoard(event){
            removeEvent();
            let gameBoard = [];
            let gameBoardContainer = document.createElement('div')
                gameBoardContainer.setAttribute('id','gameBoardContainer');
                container.appendChild(gameBoardContainer);
            for(let i = 0; i < 9; i++){
                let gameboardSquares = document.createElement('div');
                gameboardSquares.setAttribute('class', 'squares')
                gameboardSquares.setAttribute('id', `square${i.toString()}`);
                gameBoard.push(gameboardSquares);
                gameBoardContainer.appendChild(gameboardSquares);
                console.log(gameboardSquares)
            }
            ;
        }

        function removeEvent() {
            aiBtn.removeEventListener('click', gameBoard)
            twoPlayers.removeEventListener('click', gameBoard)
        }
    }
    
 })();




