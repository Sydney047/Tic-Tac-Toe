const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");

let map = [
    [4, 5, 6],
    [9, 8, 7],
    [8, 9, 5],
];

let round = 1;

function playGround(i, j, box){
    function play(){
        if ((round%2===1)&(!(map[i][j]===1)||!(map[i][j]===2))) {
            box.textContent = "X";
            map[i][j] = 1;
            round++;
            if ((round>=5)&&((map[0][0]===map[0][1]&&map[0][1]===map[0][2])||(map[1][0]===map[1][1]&&map[1][1]===map[1][2])||(map[2][0]===map[2][1]&&map[2][1]===map[2][2])||
                            (map[0][0]===map[1][0]&&map[1][0]===map[2][0])||(map[0][1]===map[1][1]&& map[1][1]===map[2][1])||(map[0][2]===map[1][2]&&map[1][2]===map[2][2])||
                            (map[0][0]===map[1][1]&&map[1][1]===map[2][2])||(map[0][2]===map[1][1]&&map[1][1]===map[2][0]))) {
                                alert(`Player1 won`);
                            }
        }else if ((round%2===0)&(!(map[i][j]===1)||!(map[i][j]===2))) {
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


function Player(){
    this.name;
    this.score;
    this.marker;
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