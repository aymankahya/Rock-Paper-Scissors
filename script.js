/*

============================
Rock Paper Scissors Project
============================
    
    From the console, the user should choose make his choice (Rock, Paper or Scissors), then the console should show the result after three rounds.

    Pseudocode :

        - Prompt the user to input his choice, if the choice is wrong an error shall be displayed and the prompt window shall reappear again for the user
        - Once the choice is made, the checking phase shall be performed to decide the outcome of the each round (three in total, the first to reach three wins, is declared the winner of the game)
    
        Key Points :
            => The choice of the computer is decided randomly.
            => The winning streak is tracked for each user.
*/

//Function declaration scope

let getRandomChoice = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

var userWins = 0 , computerWins = 0 , currentRound = 1;


function initializeVar(){
     userWins = computerWins = currentRound = 1;
}

const possibleChoices = ["rock","paper","scissors"];



// User choice making :



document.addEventListener('keypress' , function(event){
    if (event.code == 'Enter'){
        do{


            do{
        
                if (currentRound == 1){
                    var userChoice = prompt("Welcome to this Rock, Paper, Scissors Game :)\nPlease make your choice (Rock, Paper or Scissors) : ").toLowerCase();
                }else{
                    var userChoice = prompt(`Round ${currentRound} :\nPlease make your choice (Rock, Paper or Scissors) : `).toLowerCase();
                }
                var checkCorrectness = true;
                switch(userChoice){
                    case "rock": break;
                    case "paper": break;
                    case "scissors": break;
                    default:
                        alert("Sorry I didn't recognize your entry :(\nPlease enter a valid choice :");
                        checkCorrectness = false;
                }
        
            }while(!checkCorrectness)
        
        
            // Generate the computer choice
        
            let computerChoice = possibleChoices[getRandomChoice(1,3)-1];
        
            // Determine the result of the round
        
            switch(true){
                case (userChoice == "rock" && computerChoice == "scissors"):
                    userWins++;
                    break;
                case (userChoice == "scissors" && computerChoice == "paper"):
                    userWins++;
                    break;
                case (userChoice == "paper" && computerChoice == "rock"):
                    userWins++;
                    break;
                case (userChoice == computerChoice):
                    alert("It's a Draw !! Try again :D ");
                    break;
                default:
                    computerWins++;
            }
        
            currentRound++;
        
            console.log(`Computer Wins : ${computerWins} /  Computer Choice : ${computerChoice}\nUser Wins : ${userWins} / User Choice : ${userChoice}`);
        
        
        }while(computerWins < 3 && userWins < 3)
        
        if (computerWins == 3){
            alert("Sorry you lost the game :( Better luck next time :)");
            initializeVar();
        }else{
            alert("Congratulations you won the game !!");
            initializeVar();
        }
    }else{
        alert("You have to press ENTER to start the game !");
    };
}
);
 




