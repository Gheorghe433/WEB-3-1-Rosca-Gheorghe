
function calculateSum(a, b) {
  return a + b;
}


const sum1 = calculateSum(5, 7);
const sum2 = calculateSum(-3, 10);

console.log("Exercițiul 1:");
console.log("calculateSum(5, 7) =", sum1);
console.log("calculateSum(-3, 10) =", sum2);



const student = {
  name: "Andrei",
  age: 17,
  grade: 9,
  introduce: function () {
    const message = `Sunt ${this.name} și am ${this.age} ani.`;
    console.log(message);
    return message;
  }
};


console.log("\nExercițiul 2:");
student.introduce();

console.log("Nota inițială (grade):", student.grade);


student.grade = 10;
console.log("Noua notă (grade):", student.grade);



const options = ["piatra", "hartia", "foarfeca"];


const displayNames = {
  piatra: "🪨 Piatra",
  hartia: "📄 Hârtia",
  foarfeca: "✂️ Foarfeca"
};


const gameScore = {
  player: 0,
  computer: 0,
  draws: 0,
  displayScore: function () {
    const message =
      `Scor curent:\nTu: ${this.player}  |  Calculator: ${this.computer}  |  Egalități: ${this.draws}`;
    alert(message);
    return message;
  }
};

let roundsPlayed = 0;
const WINNING_SCORE = 5;
let gameOver = false;


const playerChoiceEl = document.getElementById("playerChoice");
const computerChoiceEl = document.getElementById("computerChoice");
const roundResultEl = document.getElementById("roundResult");
const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");
const drawScoreEl = document.getElementById("drawScore");
const leaderMessageEl = document.getElementById("leaderMessage");
const roundsPlayedEl = document.getElementById("roundsPlayed");
const newGameBtn = document.getElementById("newGameBtn");
const choiceButtons = document.querySelectorAll(".choice-btn");


function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}


function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "egalitate";
  }

  const playerWinsAgainst = {
    piatra: "foarfeca",
    foarfeca: "hartia",
    hartia: "piatra"
  };

  if (playerWinsAgainst[playerChoice] === computerChoice) {
    return "jucator";
  }

  return "calculator";
}


function updateLeaderMessage() {
  if (gameScore.player > gameScore.computer) {
    leaderMessageEl.textContent = "Tu conduci în scor! 🎉";
  } else if (gameScore.computer > gameScore.player) {
    leaderMessageEl.textContent = "Calculatorul conduce în scor.";
  } else {
    leaderMessageEl.textContent = "Scor egal — runda decisivă urmează.";
  }
}


function checkFinalWinner() {
  if (gameScore.player >= WINNING_SCORE) {
    gameOver = true;
    setTimeout(() => alert("🏆 Ai câștigat jocul! Felicitări!"), 100);
  } else if (gameScore.computer >= WINNING_SCORE) {
    gameOver = true;
    setTimeout(() => alert("💻 Calculatorul a câștigat jocul!"), 100);
  }
}


function playRound(playerChoice) {
  if (gameOver) {
    alert("Jocul s-a terminat. Apasă „Joc nou” pentru a relua.");
    return;
  }

  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);


  playerChoiceEl.textContent = displayNames[playerChoice];
  computerChoiceEl.textContent = displayNames[computerChoice];

  
  roundResultEl.classList.remove("win", "lose", "draw");

  if (result === "jucator") {
    gameScore.player++;
    roundResultEl.textContent = "Ai câștigat! 🎉";
    roundResultEl.classList.add("win");
  } else if (result === "calculator") {
    gameScore.computer++;
    roundResultEl.textContent = "Calculatorul a câștigat!";
    roundResultEl.classList.add("lose");
  } else {
    gameScore.draws++;
    roundResultEl.textContent = "Egalitate!";
    roundResultEl.classList.add("draw");
  }

  roundsPlayed++;

 
  playerScoreEl.textContent = gameScore.player;
  computerScoreEl.textContent = gameScore.computer;
  drawScoreEl.textContent = gameScore.draws;
  roundsPlayedEl.textContent = `Runde jucate: ${roundsPlayed}`;

  updateLeaderMessage();

  
  gameScore.displayScore();

  
  checkFinalWinner();
}


choiceButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const choice = button.getAttribute("data-choice");
    playRound(choice);
  });
});


newGameBtn.addEventListener("click", function () {
  gameScore.player = 0;
  gameScore.computer = 0;
  gameScore.draws = 0;
  roundsPlayed = 0;
  gameOver = false;

  playerScoreEl.textContent = "0";
  computerScoreEl.textContent = "0";
  drawScoreEl.textContent = "0";
  roundsPlayedEl.textContent = "Runde jucate: 0";
  playerChoiceEl.textContent = "—";
  computerChoiceEl.textContent = "—";
  roundResultEl.textContent = "Alege o variantă pentru a începe.";
  roundResultEl.classList.remove("win", "lose", "draw");
  leaderMessageEl.textContent = "";

  console.log("Joc resetat.");
});