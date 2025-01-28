"use strict"

playGame();

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0 ; i < 5 ; i++) {
        let roundWinner = playRound(getComputerChoice(),getHumanChoice());
        
        switch (roundWinner) {
            case "Computer":
            computerScore++;
            break;

            case "Human":
            humanScore++;
            break;
        }

    }

    console.log(`Computer : ${computerScore}`);
    console.log(`Human : ${humanScore}`);
}


function playRound(computerChoice,humanChoice) {

    let roundWinner;

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


function mapChoice(choiceNumber) {
    switch(choiceNumber) {
        case 0:
            return 'Rock';


        case 1:
            return 'Paper';


        case 2:
            return 'Scissors';
    }
}

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);   //0,1,2
    return mapChoice(randomNumber);

    }


function getHumanChoice() {

    let humanNumber;
    while (isNaN(humanNumber) || humanNumber < 0 || humanNumber > 2) {
        humanNumber = Number(prompt("Choose : 0 for Rock, 1 for Paper or  2 for Scissors ?"));
    }
    return mapChoice(humanNumber);
}

