const resultBoard = document.getElementById('result-board');
const toggleImg = document.getElementById('playBoard');

resultBoard.style.display="none";

function startGame(value){
    toggleImg.style.display = "none";
    resultBoard.style.display="flex";
}

function playAgain(){
    toggleImg.style.display = "block";
    resultBoard.style.display="none";
}

const CHOICES = [
    {
      name: "paper",
      beats: "rock",
    },
    {
      name: "scissors",
      beats: "paper",
    },
    {
      name: "rock",
      beats: "scissors",
    },
  ];

let pcChoose = function pcChoose() {
const rand = Math.floor(Math.random() * CHOICES.length);
return CHOICES[rand];
}
console.log(pcChoose());