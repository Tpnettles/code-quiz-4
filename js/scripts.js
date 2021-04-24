//define variables // 

var startQuiz = document.getElementById('.start');
var highScore = document.getElementById('.highScore')
var timerCount = document.getElementById('.timer')
var mainPage = document.getElementById('.main')
var clearHighScore = document.getElementById('.clearScore')
var submitScores = document.getElementById ('.submit')

var questions = ['Strings are wrapped in?', 'Which is not a data type?','The "dot operator" represents?','Const variables may be redefined by updating the defined const variable?','String interpolations can be performed by using "template numerals"?','"Null" and "undefined" may be used interchangably?','How many primative data types are there?','Which will cause a syntax error?'];


//funtions//
function init() {




function startQuiz(){
    timerCount = 10;
//find dom element to show an area on html and show the first question there
getQuestion();
startTimer()
}
}

//get the next question
function getQuestion(){
// get the current question
//show the questiontt
//loop show the choices (buttons)
//add enent listener for each button created 
answerCheck();
}

//check user selection
function answerCheck(){
    //check the user selection against the correct answer
    //incorrect-removes seconds
    //set score
    getQuestion();
    //if questions.length
    endGame();
}

//end game
function endgame(){
    //set their scores
    //clear out timer
    //show end screen
}

//save high score
function saveHighScore(){
    //prompt for initials
    //save score to localstorage

}

//all event listeners//
//1. start button//
startButton.addEventListener('click', startQuiz);

// save high score
saveScore.addEventListener('click', saveHighScore)




// Calls init() so that it fires when page opened
init();