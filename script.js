//Variables declaration scope
var userWins = 0 , computerWins = 0 , currentRound = 1;
const possibleChoices = ["rock","paper","scissors"];
var parentNode = document.querySelector("#container");
const welcome = "Welcome to a Game of Rock, Paper, Scissors\nChoose your weapon !"
console.log(welcome);
//Function declaration scope

let getRandomChoice = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


function initializeVar(){
     userWins = computerWins = currentRound = 1;
}

function clearPage(){
    document.querySelector("#container").innerHTML = '';
}

function welcomeMessage(){
    clearPage();

    
    let childNode = document.createElement("p");
    childNode.setAttribute("style" , "text-align: center;\
                                    color: azure;\
                                    font-family: Cormorant SC;\
                                    font-weight: 100;\
                                    font-size: 40px;\
                                    animation: fadeIn 2s;");
    parentNode.appendChild(childNode);
    var textBuffer = '';
    welcome.split('').forEach(function(letter , i){
        setTimeout( () => {

            textBuffer += letter;
            childNode.innerText = textBuffer;
        
    } , i*70);
});
}

function generateChoices(){
    let choicesContainer = document.createElement("div");
    choicesContainer.setAttribute("style" , "display: flex;\
                                            gap: 70px;\
                                            animation: fadeIn 2s;\
                                            justidy-content: space-evenly;\
                                            color: azure;\
                                            font-family: Cormorant SC;\
                                            font-size: 50px;");

    let rock = document.createElement("input");
    let paper =  document.createElement("input");
    let scissors =  document.createElement("input");

    rock.setAttribute("type" , "image");
    rock.setAttribute("src" , "./images/rock.png");

    paper.setAttribute("type" , "image");
    paper.setAttribute("src" , "./images/paper.png");

    scissors.setAttribute("type" , "image");
    scissors.setAttribute("src" , "./images/scissors.png");


    choicesContainer.appendChild(rock);
    choicesContainer.appendChild(paper);
    choicesContainer.appendChild(scissors);

    parentNode.appendChild(choicesContainer);

}


// User choice making :



document.addEventListener('keypress' , function(event){
    if (event.code == 'Enter'){

        welcomeMessage();
        setTimeout(generateChoices , 5000);

        /* do{

    

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
        alert("You have to press ENTER to start the game !"); */
    };
} , {once:true}
);
 




