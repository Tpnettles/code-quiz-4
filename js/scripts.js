const highScore = document.getElementById("highScore");
const timerCount = document.getElementById("timer");
const mainPage = document.getElementById("main");
const clearHighScore = document.getElementById("clearScore");
const submitScores = document.getElementById("submit");
const startButton = document.getElementById("start-button");

const questions = [
  "Strings are wrapped in?",
  "Which is not a data type?",
  'The "dot operator" represents?',
  "Const variables may be redefined by updating the defined const variable?",
  'String interpolations can be performed by using "template numerals"?',
  '"Null" and "undefined" may be used interchangeably?',
  "How many primitive data types are there?",
  "Which will cause a syntax error?",
];

function init() {
  function startQuiz() {
    timerCount = 10;
    //find dom element to show an area on html and show the first question there
    getQuestion();
    startTimer();
  }
}

//get the next question
function getQuestion() {
  // get the current question
  // show the questions
  // loop show the choices (buttons)
  // add enent listener for each button created
  answerCheck();
}

//check user selection
function answerCheck() {
  //check the user selection against the correct answer
  //incorrect-removes seconds
  //set score
  getQuestion();
  //if questions.length
  endGame();
}

//end game
function endgame() {
  //set their scores
  //clear out timer
  //show end screen
}

//save high score
function saveHighScore() {
  //prompt for initials
  //save score to localstorage
}

// open your browser inspection tool and take a look
startButton.addEventListener("click", () => {
  console.log("yap");
});

// save high score
saveScore.addEventListener("click", saveHighScore);

// Calls init() so that it fires when page opened
init();
