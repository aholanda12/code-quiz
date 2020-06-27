// create a list of questions and answers
var questionList = [
    {
        "question": "1. This is a placement question?",
        "a": "Wrong.",
        "b": "Wrong.",
        "c": "Wrong.",
        "d": "Correct.",
        "correct": "d",
        "userAnswer": null
    },
    {
        "question": "2. This is a placement question?",
        "a": "Wrong.",
        "b": "Wrong.",
        "c": "Correct.",
        "d": "Wrong.",
        "correct": "c",
        "userAnswer": null
    },
    {
        "question": "3. This is a placement question?",
        "a": "Wrong.",
        "b": "Correct.",
        "c": "Wrong.",
        "d": "Wrong.",
        "correct": "b",
        "userAnswer": null
    },
    {
        "question": "4. This is a placement question?",
        "a": "Correct.",
        "b": "Wrong.",
        "c": "Wrong.",
        "d": "Wrong.",
        "correct": "a",
        "userAnswer": null
    }
];

var questionTag = document.body.querySelector("#question");
var answerTagA = document.body.querySelector("#answer-a");
var answerTagB = document.body.querySelector("#answer-b");
var answerTagC = document.body.querySelector("#answer-c");
var answerTagD = document.body.querySelector("#answer-d");

var buttonA = document.body.querySelector("#button-a");
var buttonB = document.body.querySelector("#button-b");
var buttonC = document.body.querySelector("#button-c");
var buttonD = document.body.querySelector("#button-d");

var outcome = document.body.querySelector("#outcome");

var questionIndex = 0;

function buttonHandler(event) {
    var button = event.target;
    var userAnswer = button.getAttribute("data-answer");
    var questionId = parseInt(button.getAttribute("data-question"));
    console.log(button);
    console.log(userAnswer);
    console.log(questionId);
    questionList[questionId]["userAnswer"] = userAnswer;

    if(questionList[questionId]["userAnswer"] === questionList[questionId]["correct"]){
        outcome.textContent = "You got it correct!";
        setTimeout(function(){
            questionIndex++;
            initializeQuestion();
            outcome.textContent= "";
        }, 2000);
        points = points + 100;
        pointsDisplay.textContent = points;
    }
    else{
        outcome.textContent = "You got it wrong. Try again!";
        subtractTime();
        points = points - 20;
        pointsDisplay.textContent = points;
    }
}

buttonA.addEventListener("click",buttonHandler);
buttonB.addEventListener("click",buttonHandler);
buttonC.addEventListener("click",buttonHandler);
buttonD.addEventListener("click",buttonHandler);

function initializeQuestion(){
    console.log(questionList[questionIndex]);
    var wholeObj = questionList[questionIndex];
    var question = wholeObj.question;
    console.log(question);
    questionTag.textContent = question;
    questionTag.setAttribute("data-question", questionIndex);

    answerTagA.textContent = wholeObj.a;
    answerTagB.textContent = wholeObj.b;
    answerTagC.textContent = wholeObj.c;
    answerTagD.textContent = wholeObj.d;
    buttonA.setAttribute("data-question", questionIndex);
    buttonB.setAttribute("data-question", questionIndex);
    buttonC.setAttribute("data-question", questionIndex);
    buttonD.setAttribute("data-question", questionIndex);
}
initializeQuestion();










// TIMER

var beginButton = document.querySelector("#begin");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

// this function runs once a second
function runClockCb(){

  secondsElapsed++;
  console.log(secondsElapsed);

  // change the display
  minutesDisplay.textContent = Math.floor((totalSeconds - secondsElapsed) / 60);
  secondsDisplay.textContent = (totalSeconds - secondsElapsed) % 60;

  // we have to stop it at 0
  if(secondsElapsed >= totalSeconds){
    clearInterval(interval);
    minutesDisplay.textContent = "0";
    secondsDisplay.textContent = "00";
  }
}

var instructionsDisplay = document.querySelector("#instructions");
var questionsDisplay = document.querySelector("#quiz-questions");


function startTimer() {
  // Write code to start the timer here

  var minutes = 10;
  // set time using totalSeconds
  totalSeconds = minutes * 60;
  // initialize seconds on the play button
  secondsElapsed = 0;

  if(typeof interval !== 'undefined'){
    // if we have an interval we want to clear it
    clearInterval(interval);
  }

  // keep track of our interval
  interval = setInterval(runClockCb, 1000);

  document.getElementById("instructions").style.display="none"; 
  document.getElementById("quiz-questions").style.display="block"; 
}

function subtractTime(){

  //subtractTime
  secondsElapsed = secondsElapsed + 20;

  //change the display
  minutesDisplay.textContent = Math.floor((totalSeconds - secondsElapsed) / 60);
  secondsDisplay.textContent = (totalSeconds - secondsElapsed) % 60;
}

beginButton.addEventListener("click", startTimer);

// SCORE
var pointsDisplay = document.querySelector("#points");
var points = 0;

var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit-score");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

submitButton.addEventListener("click", function(event) {
  event.preventDefault();

  var initials = document.querySelector("#initials").value;

  if (initials === "") {
    displayMessage("error", "Initials cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    localStorage.setItem("initials", initials);
    localStorage.setItem("score", points);
  }
});

// GAME OVER

if (){
    document.getElementById("game-over").style.display="block";
    document.getElementById("quiz-questions").style.display="none";  
}