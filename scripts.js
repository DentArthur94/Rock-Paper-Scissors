"use strict"

playGame();

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    const choices = document.querySelector(".choices");
    const humanScoreDiv = document.querySelector("#player-score");
    const computerScoreDiv = document.querySelector("#computer-score");
    const endGameMsg = document.querySelector(".end-game");


        choices.addEventListener("click", (event) => {
            endGameMsg.textContent = ""
            let target = event.target;
            let roundWinner = playRound(getComputerChoice(),target.textContent);
            switch (roundWinner) {
                case "Computer":
                computerScore++;
                break;

                case "Human":
                humanScore++;
                break;
            }

            computerScoreDiv.textContent = `Computer : ${computerScore}`;
            humanScoreDiv.textContent = `Human : ${humanScore}`;

            if (humanScore === 5) {
                endGameMsg.textContent = "You are the winner ! Click any button to start a new game!";
                humanScore = 0;
                computerScore = 0;
                return ;
            } else if (computerScore === 5) {
                endGameMsg.textContent = "You are the loser ! Click any button to start a new game!";
                humanScore = 0;
                computerScore = 0;
                return ;
            }
        })


        
}




function playRound(computerChoice,humanChoice) {
    const humanChoiceLogo = document.querySelector("#player-choice-img");
    const computerChoiceLogo = document.querySelector("#computer-choice-img");

    switch(computerChoice) {
        case("Rock"):
            computerChoiceLogo.setAttribute("src","img/rock.png");
            break;
        case("Paper"):
            computerChoiceLogo.setAttribute("src","img/paper.png");
            break;
        case("Scissors"):
            computerChoiceLogo.setAttribute("src","img/scissors.png");
            break;
    }

    switch(humanChoice) {
        case("Rock"):
            humanChoiceLogo.setAttribute("src","img/rock.png");
            break;
        case("Paper"):
            humanChoiceLogo.setAttribute("src","img/paper.png");
            break;
        case("Scissors"):
            humanChoiceLogo.setAttribute("src","img/scissors.png");
            break;
    }


    if (computerChoice === "Rock" && humanChoice === "Scissors" || computerChoice === "Scissors" && humanChoice === "Paper" || computerChoice === "Paper" && humanChoice === "Rock" ) {
        console.log(computerChoice,humanChoice);
        console.log("You lose !");
        return "Computer";
    } else if (computerChoice === "Scissors" && humanChoice === "Rock" || computerChoice === "Paper" && humanChoice === "Scissors" || computerChoice === "Rock" && humanChoice === "Paper"  ){
        console.log(computerChoice,humanChoice);
        console.log("You win !");
        return "Human";
    } else {    
        console.log(computerChoice,humanChoice);
        console.log("It's a draw !");
        return "Draw";
    }
}


function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);   //0,1,2
    switch (randomNumber) {
        case 0:
            return 'Rock';

        case 1:
            return 'Paper';

        case 2:
            return 'Scissors';
    }
    }

