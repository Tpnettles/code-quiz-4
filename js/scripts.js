//define variables // 

let startButton = document.getElementById('start');
let saveScore = document.getElementById(saveScore)

//funtions//
function startQuiz(){
    //start timer//
//find dom element to show an area on html and show the first question there
getQuestion();
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