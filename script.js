const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");
const addButton = document.querySelector("#addBtn");
const closeButton = document.querySelector("#close");
const dialog = document.querySelector(".dialog");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const players = document.querySelector(".players");

let map = [
    [4, 5, 6],
    [9, 8, 7],
    [8, 9, 5],
];

let round = 1;

function playGround(i, j, box){
    function play(){
        if ((round%2===1)&(!(map[i][j]===1)&!(map[i][j]===2))) {
            box.textContent = "X";
            map[i][j] = 1;
            round++;
            if ((round>=5)&&((map[0][0]===map[0][1]&&map[0][1]===map[0][2])||(map[1][0]===map[1][1]&&map[1][1]===map[1][2])||(map[2][0]===map[2][1]&&map[2][1]===map[2][2])||
                            (map[0][0]===map[1][0]&&map[1][0]===map[2][0])||(map[0][1]===map[1][1]&& map[1][1]===map[2][1])||(map[0][2]===map[1][2]&&map[1][2]===map[2][2])||
                            (map[0][0]===map[1][1]&&map[1][1]===map[2][2])||(map[0][2]===map[1][1]&&map[1][1]===map[2][0]))) {
                                alert(`Player1 won`);
                            }
        }else if ((round%2===0)&(!(map[i][j]===1)&!(map[i][j]===2))) {
            box.textContent = "O";
            map[i][j] = 2;
            round++;
            if ((round>=6)&&((map[0][0]===map[0][1]&&map[0][1]===map[0][2])||(map[1][0]===map[1][1]&&map[1][1]===map[1][2])||(map[2][0]===map[2][1]&&map[2][1]===map[2][2])||
                            (map[0][0]===map[1][0]&&map[1][0]===map[2][0])||(map[0][1]===map[1][1]&& map[1][1]===map[2][1])||(map[0][2]===map[1][2]&&map[1][2]===map[2][2])||
                            (map[0][0]===map[1][1]&&map[1][1]===map[2][2])||(map[0][2]===map[1][1]&&map[1][1]===map[2][0]))) {
                                alert(`Player2 won`);
                            }
        }
    }
    return play;
}
let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
function clear(){
    for (let box of boxes){
        box.textContent = '';
    }
    map[0][0] = 3;
    map[0][1] = 4;
    map[0][2] = 5;
    map[1][0] = 6;
    map[1][1] = 7;
    map[1][2] = 8;
    map[2][0] = 9;
    map[2][1] = 0;
    map[2][2] = 0;
}


function Player(){
    this.name;
    this.score;
    this.marker;
}
function CreatePlayerNames(name1, name2){
    const play1 = new Player();
    play1.name = name1;
    play1.marker = "X";
    play1.score = 0;

    const play2 = new Player();
    play2.name = name2;
    play2.marker = "O";
    play2.score = 0;

    const div1 = document.createElement("div");
    const header1 = document.createElement("h3");
    const marker1 = document.createElement("p");
    const score1 = document.createElement("p");

    const div2 = document.createElement("div");
    const header2 = document.createElement("h3");
    const marker2 = document.createElement("p");
    const score2 = document.createElement("p");

    header1.textContent = play1.name;
    marker1.textContent = `Marker ${play1.marker}`;
    score1.textContent = `Score ${play1.score}`;

    header2.textContent = play2.name;
    marker2.textContent = `Marker ${play2.marker}`;
    score2.textContent = `Score ${play2.score}`;

    div1.appendChild(header1);
    div1.appendChild(marker1);
    div1.appendChild(score1);

    div2.appendChild(header2);
    div2.appendChild(marker2);
    div2.appendChild(score2);

    players.appendChild(div1);
    players.appendChild(div2);

    return {play1, play2}
}

box1Round = playGround(0,0, box1);
box2Round = playGround(0,1, box2);
box3Round = playGround(0,2, box3);
box4Round = playGround(1,0, box4);
box5Round = playGround(1,1, box5);
box6Round = playGround(1,2, box6);
box7Round = playGround(2,0, box7);
box8Round = playGround(2,1, box8);
box9Round = playGround(2,2, box9);

box1.addEventListener("click", box1Round);
box2.addEventListener("click", box2Round);
box3.addEventListener("click", box3Round);
box4.addEventListener("click", box4Round);
box5.addEventListener("click", box5Round);
box6.addEventListener("click", box6Round);
box7.addEventListener("click", box7Round);
box8.addEventListener("click", box8Round);
box9.addEventListener("click", box9Round);

addButton.addEventListener("click", ()=> dialog.showModal());

closeButton.addEventListener("click", function close() {
    const player1Name = player1.value;
    const player2Name = player2.value;

    CreatePlayerNames(player1Name, player2Name);
    dialog.close();
});