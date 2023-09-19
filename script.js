// -------------------------USER PC SCORE-------------
const pcScore = document.getElementById("pc-score");
const userScore = document.getElementById("user-score");
//---------------------------BUTTONS-------------------
const rulesBtn = document.querySelectorAll(".rules-btn");
const nextBtn = document.getElementById("next-btn");
const playAgainBtn = document.querySelector("#play-again");
const replayBtn = document.querySelector("#replay");
const closeModalBtn = document.getElementById("close");
//---------------------------RULES DIV-------------------
const rulesModal = document.getElementById("rules-div");
const winGame = document.querySelector(".winning-page");
const playBoard = document.getElementById("play-board");
//---------------------------RESULT DIV-------------------
const resultBoard = document.getElementById("result-board");
const userResult = document.querySelector(".user-result");
const pcResult = document.querySelector(".pc-result");
let resultText = document.getElementById("result-text-1");
let resultText2 = document.getElementById("result-text-2");
let picked = document.querySelectorAll(".picked");
// --------------------WINNER HIGHLIGHT BACKGROUND-------
let userWin1 = document.querySelector(".user-div1");
let userWin2 = document.querySelector(".user-div2");
let userWin3 = document.querySelector(".user-div3");
let pcWin1 = document.querySelector(".pc-div1");
let pcWin2 = document.querySelector(".pc-div2");
let pcWin3 = document.querySelector(".pc-div3");


// -------------------------------------------------------------------------LOCAL STORAGE----------------------------------------------------------------------------------
let score = {
  user: 0,
  pc: 0,
};

if (localStorage.getItem("score")) {
  score = JSON.parse(localStorage.getItem("score"));
}

userScore.innerHTML = score.user;
pcScore.innerHTML = score.pc;

// --------------------------------------------------------------------------FUNCTIONS---------------------------------------------------------------------------------

const pcActions = ["rock", "paper", "scissors"];

function pcChoosed() {
  let pcChoose = Math.floor(Math.random() * 3);
  return pcActions[pcChoose];
}

function ruleButton() {
  rulesModal.style.display = "block";
}

function nextButton() {
  playBoard.style.display = "none";
  resultBoard.style.display = "none";
  winGame.style.display = "flex";
}

function closeButton() {
  rulesModal.style.display = "none";
}

function playAgain() {
  playBoard.style.display = "grid";
  resultBoard.style.display = "none";
  winGame.style.display = "none";
  nextBtn.style.display = "none";
}

function highlightUserWin() {
  pcWin1.classList.remove("winner-box-1");
  pcWin2.classList.remove("winner-box-2");
  pcWin3.classList.remove("winner-box-3");
  userWin1.classList.add("winner-box-1");
  userWin2.classList.add("winner-box-2");
  userWin3.classList.add("winner-box-3");
};

function highlightPcWin() {
  userWin1.classList.remove("winner-box-1");
  userWin2.classList.remove("winner-box-2");
  userWin3.classList.remove("winner-box-3");
  pcWin1.classList.add("winner-box-1");
  pcWin2.classList.add("winner-box-2");
  pcWin3.classList.add("winner-box-3");
}

function highlightRemove() {
  userWin1.classList.remove("winner-box-1");
  userWin2.classList.remove("winner-box-2");
  userWin3.classList.remove("winner-box-3");
  pcWin1.classList.remove("winner-box-1");
  pcWin2.classList.remove("winner-box-2");
  pcWin3.classList.remove("winner-box-3");
}

function setImg(picked) {
  let img = `<img src="./images/${picked}.png" alt=${picked} width="60px"/>`;
  console.log(picked);
  return img;
}

function setStyles() {
  resultBoard.style.marginTop = "3rem";

  picked.forEach((e) => {
    e.style.top = "300px";
  });

  for (let index = 0; index < 3; index++) {
    userResult.classList.remove("rock-div");
    userResult.classList.remove("paper-div");
    userResult.classList.remove("scissors-div");
    pcResult.classList.remove("rock-div");
    pcResult.classList.remove("paper-div");
    pcResult.classList.remove("scissors-div");
    playAgainBtn.style.display = "block";
    resultText2.style.display = "block";
    replayBtn.style.display = "none";
    nextBtn.style.display = "none";
  }
}


// ---------------------------------------------------START GAME------------------------------------------------------
const startGame = (userPicked) => {
  let pcPicked = pcChoosed();

  setStyles();

  if (userPicked === pcPicked) {
    resultText.innerHTML = "TIE UP";
    highlightRemove();
    playAgainBtn.style.display = "none";
    replayBtn.style.display = "block";
    resultText2.style.display = "none";
    resultBoard.style.marginTop = "6rem";

    picked.forEach((e) => {
      e.style.top = "256px";
    });
  }else if ((userPicked === "rock" && pcPicked === "scissors") || (userPicked === "paper" && pcPicked === "rock") || (userPicked === "scissors" && pcPicked === "paper")) {
    resultText.innerHTML = "YOU WIN";
    nextBtn.style.display = "block";
    highlightUserWin();
    score.user++;
  }else {
    resultText.innerHTML = "YOU LOST";
    highlightPcWin();
    score.pc++;
  }

  playBoard.style.display = "none";
  resultBoard.style.display = "flex";
  userResult.classList.add(`${userPicked}-div`);
  pcResult.classList.add(`${pcPicked}-div`);
  userResult.innerHTML = setImg(userPicked);
  pcResult.innerHTML = setImg(pcPicked);

  userScore.innerHTML = score.user;
  pcScore.innerHTML = score.pc;

  localStorage.setItem("score", JSON.stringify(score));
};
