{
    const playGame = function (playerInput){
        clearMessages();
        const getMoveName = function (argMoveId){
            if(argMoveId == 1){
            return 'kamień';
            } else if(argMoveId == 2){
                return 'papier';
            } else if(argMoveId == 3){
                return 'nożyce';
            }
        
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }

        const randomNumber = Math.floor(Math.random() / 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

        const computerMove = getMoveName(randomNumber);

        printMessage('Mój ruch to: ' + computerMove);


        console.log('Gracz wpisał: ' + playerInput);

        const playerMove = getMoveName(playerInput);

        printMessage('Twój ruch to: ' + playerMove);


        const displayResult = function (argComputerMove, argPlayerMove){
            if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
                printMessage('Ty wygrywasz!');
            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
                printMessage('Ty wygrywasz!');
            } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
                printMessage('Ty wygrywasz!');
            } else if (argComputerMove == argPlayerMove) {
                printMessage('Remis!');
            } else if (argPlayerMove == 'nieznany ruch') {
                printMessage('Nieznany ruch, zagraj ponownie!')
            } else {
                printMessage('Przegrałeś!');
            }
        }

        displayResult(computerMove, playerMove);
    }

    const rock = document.getElementById('play-rock');
    rock.addEventListener('click', function(){
        playGame(1);
    });
    const paper = document.getElementById('play-paper');
    paper.addEventListener('click', function(){
        playGame(2);
    });
    const scissors = document.getElementById('play-scissors');  
    scissors.addEventListener('click', function(){
        playGame(3);
    });
}
