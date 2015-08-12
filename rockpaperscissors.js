'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) 
{
    move = move || getInput();
    return move;
}

function getComputerMove(move) {
    move = move || randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    var winCond1 = playerMove === 'rock' && computerMove === 'scissors';
    var winCond2 = playerMove === 'scissors' && computerMove === 'paper';
    var winCond3 = playerMove === 'paper' && computerMove === 'rock';
    if (playerMove ===computerMove)
    {
        winner = 'tie';
    }
    else if (winCond1 || winCond2 || winCond3)
    {
        winner = 'player';
    }
    else
    {
        winner = 'computer';
    }
    console.log("Your move was " + playerMove + ", computer's move was " + computerMove);
    
    return winner;
}

function playToFive(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var gamesPlayed = 0;
    var i;

    if (x == null)
    {
        x = 5;
    }
  
    for(var i = 0;i < x;i ++)
    {
        playOnce();
        gamesPlayed ++;
    }
    function playOnce()
    {
        var pMove = getPlayerMove();
        var cMove = getComputerMove();
        var winner = getWinner(pMove,cMove);
        if (winner != 'tie')
        {
            console.log(winner + " is the winner!");     
            if (winner === 'player')
            {
                playerWins ++; 
            }
            else if (winner === 'computer')
            {
                computerWins ++;
            }
        }
        else
        {
            console.log("Tie!!");
        }
    }
    console.log("Player won " + playerWins + " times. Computer won " + computerWins + " times.");
    return [playerWins, computerWins];
}
playToFive();
