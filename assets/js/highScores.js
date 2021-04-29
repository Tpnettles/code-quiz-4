var scoreDisp = document.getElementById('scoreDisp');

function init(){
    var allScores = JSON.parse(window.localStorage.getItem('score'));

    allScores.forEach(element => {
         var listItem = document.createElement("li");
         listItem.innerHTML = element.initials + " " + element.score;

         scoreDisp.appendChild(listItem);
    });
}

init();