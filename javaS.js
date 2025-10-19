const button = document.querySelector("#butt")

let yourScore = 0;
let computerScore = 0;
let draw = 0;

function playRound(){
    let humanSelection = h_Choice().toLowerCase();
    let computerSelection = c_choice();

    if(humanSelection === computerSelection){
        console.log(`You chose ${humanSelection} and the computer chose ${computerSelection}`);
        console.log("It is a draw");
        draw++;    
    }else if((humanSelection == "rock" && computerSelection=="scissors")||(humanSelection=="paper"&&computerSelection=="rock")||(humanSelection=="scissors"&&computerSelection=="paper")){
        console.log(`You chose ${humanSelection} and computer chose ${computerSelection}`);
        console.log("You Win!");
        yourScore++;   
    }else {
        console.log(`You chose ${humanSelection} and computer chose ${computerSelection}`);
        console.log("You Lost!");
        computerScore++; 
    }
}

function h_Choice() {
    let humanchoice = prompt("Choose 'rock' 'paper' OR 'scissors'");
    return humanchoice;
}
function c_choice() {
    let r_number = Math.floor(Math.random()*3);
    if(r_number == 0) {
        return "rock";
    } else if(r_number == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
button.addEventListener("click", function play() {
    alert("So you challenged me to rock paper scissors?\n Best 3 out of 5 wins")
    for (let i=0; i<5; i++) {
        alert(`Round ${i+1}`)
        playRound();
    }
    if(yourScore>computerScore){
        console.log(`Your final score out of 5: ${yourScore}`);
        console.log("You defeated the boss");
    }else if(yourScore === computerScore){
        console.log(`Your final score out of 5: ${yourScore} \n Computer's score: ${computerScore}`);
        console.log("It Looks like we have a tie!");
    }else {
        console.log(`Your final score out of 5: ${yourScore} \n Computer's score: ${computerScore}`);
        console.log("Feel free to try again");
    }
})