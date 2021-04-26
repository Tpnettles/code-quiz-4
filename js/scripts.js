//define variables // 
let introPage = document.getElementById ('intro-page');
let timerCount = document.getElementById('timer');
let startQuiz = document.getElementById('start-button');
let questionPage = document.getElementById ('question-page');
let questionBank = document.getElementById('questions');
let multipleChoices = document.getElementById('answers');
let highScorePage = document.getElementById('final-page');
let finalScore = document.getElementById('final-score');
let HighScore = document.getElementById('submit highScore');
let clearHighScore = document.getElementById('clearScore');
let submitScores = document.getElementById ('submit');
let currentQuestion = [0];


//functions//

//get the next question
function getQuestion() {
    // get the current question
    if (currentQuestion < questions.length) {
        questionPage.classList.remove('hide');
        introPage.classList.add('hide');
        questionBank.innerHTML = questions[currentQuestion].question;
        
    } else {
        endGame();
    }
}


