//define variables // 
let introPage = document.getElementById('introPage');
let timerstartCount = document.getElementById('timer');
let startQuiz = document.getElementById('start-button');
let questionPage = document.getElementById('questionPage');
let questionBank = document.getElementById('question');
let highScorePage = document.getElementById('final-page');
let displayFinalScore = document.getElementById('final-score');
let submitScores = document.getElementById('submit');
let clearHighScore = document.getElementById('clearScore');
let choice1 = document.getElementById('choice1');
let choice2 = document.getElementById('choice2');
let choice3 = document.getElementById('choice3');
let choice4 = document.getElementById('choice4');
let multipleChoices = document.getElementById('multipleChoices');
let currentQuestion = 0;
let timeLeft = 20;
let timeCount;
let displayAllScores = document.getElementById('allScores');
let userInitials = document.getElementById('name');
let allScores;







//functions//
function startTimer() {
    console.log('here')
    timeCount = setInterval(function () {
      timeLeft--;
      timerstartCount.innerHTML = "Time Left: " + timeLeft;
  
      console.log(timeLeft);
      if (timeLeft <= 0 || currentQuestion >= questions.length) {
          timeLeft = 0
          timerstartCount.innerHTML = "Time Left: " + timeLeft;
        clearInterval(timeCount);
        endGame();
      }
    }, 1000);
  };
//functions//

//get the next question
function getQuestion() {
    // get the current question
     if (currentQuestion < questions.length) {
        questionPage.classList.remove('hide');
        introPage.classList.add('hide');
        questionBank.innerHTML = questions[currentQuestion].question;
        choice1.innerHTML= questions[currentQuestion].choices[0];
        choice2.innerHTML= questions[currentQuestion].choices[1];
        choice3.innerHTML= questions[currentQuestion].choices[2];
        choice4.innerHTML= questions[currentQuestion].choices[3];
        
    } else {
        endGame();
    }
};

function answerCheck(event) {
    //check the user selection against the correct answer
    //incorrect-removes seconds
    //set score
    // console.log('here')
    // console.log(questions.length, currentQuestion)
    if (questions.length > currentQuestion) {
    console.log(event);
        console.log(questions)
        if(event === questions[currentQuestion].correctChoice){
            alert('correct!');
            currentQuestion++;
            getQuestion();
        } else {
            timeLeft -= 7;
            alert('incorrect answer');
        }
    } else {
        endGame();
    }
};

//end game
function endGame() {
    highScorePage.classList.remove('hide');
    questionPage.classList.add('hide');
    clearInterval(timeCount);
};


//all event listeners//
startQuiz.addEventListener("click", function (event) {
    //timerCount = 10;
    //find dom element to show an area on html and show the first question there
    getQuestion();
    startTimer();
});

multipleChoices.addEventListener('click', function(event){
    console.log(event);
    console.log(event.target.innerHTML);
    answerCheck(event.target.innerHTML);
});

// save high score
submitScores.addEventListener("click", function (event){
    event.preventDefault();
    let initials = userInitials.value;
console.log('submit')
        allScores = JSON.parse(window.localStorage.getItem('score')) || [];
        let finalScore = {
        score: timeLeft,
        initials: initials
    }
    allScores.push(finalScore);
    console.log(allScores)
    window.localStorage.setItem('score', JSON.stringify(allScores));

    location.replace('./highscores.html');
});



