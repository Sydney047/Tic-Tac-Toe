const button = document.querySelector("#butt");
const yours = document.querySelector("#yours");
const tied = document.querySelector("#draw");
const computer = document.querySelector("#ai");

let yourScore = 0;
let computerScore = 0;
let draw = 0;
let round = 1;

function playRound(){
    let humanSelection = h_Choice().toLowerCase();
    let computerSelection = c_choice();

    if(humanSelection === computerSelection){
        alert(`You chose ${humanSelection} and the computer chose ${computerSelection} \nIt is a draw`);
        draw++;
        tied.textContent = draw;    
    }else if((humanSelection == "rock" && computerSelection=="scissors")||(humanSelection=="paper"&&computerSelection=="rock")||(humanSelection=="scissors"&&computerSelection=="paper")){
        alert(`You chose ${humanSelection} and computer chose ${computerSelection} \n You Win!`);
        yourScore++;
        yours.textContent = yourScore;   
    }else {
        alert(`You chose ${humanSelection} and computer chose ${computerSelection} \n You Lost!`);
        computerScore++; 
        computer.textContent = computerScore;
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
    if (round < 6 ) {
        alert(`Round ${round}`)
        playRound();
        round++;
    } else {
        if(yourScore>computerScore){
            alert(`Your final score out of 5: ${yourScore} \n You defeated the boss`);
        }else if(yourScore === computerScore){
            alert(`Your final score out of 5: ${yourScore} \n Computer's score: ${computerScore} \n It Looks like we have a tie!`);
        }else {
            alert(`Your final score out of 5: ${yourScore} \n Computer's score: ${computerScore} \n Feel free to try again`);
    }
    }
})