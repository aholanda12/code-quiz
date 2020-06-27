// create a list of questions and answers
var questionList = [
    {
        "question": "1. Where does the name ''Littlefoot'' come from?",
        "a": "Because he has a little foot.",
        "b": "It's actually his last name.",
        "c": "His father was called Littlefoot as a child.",
        "d": "It was a nickname he gave himself.",
        "correct": "c",
        "userAnswer": null
    },
    {
        "question": "2. What is Cera's dad's canonical name?",
        "a": "Mr. Topps.",
        "b": "Dr. Topps.",
        "c": "Tommy Topps.",
        "d": "Daddy Topps.",
        "correct": "d",
        "userAnswer": null
    },
    {
        "question": "3. Which movies does Chomper appear in?",
        "a": "II, V, XIV.",
        "b": "II, VI, XI.",
        "c": "III, V, XII.",
        "d": "III, VI, XIII.",
        "correct": "a",
        "userAnswer": null
    },
    {
        "question": "4. What is triggered if something happens to Saurus Rock?",
        "a": "There will be a big rock slide.",
        "b": "Bad luck will descend upon the Great Valley.",
        "c": "The lone dinosaur will return.",
        "d": "A meteor shower.",
        "correct": "b",
        "userAnswer": null
    },
    {
        "question": "5. Which one of these is not a Land Before Time movie title?",
        "a": "Journey Through the Mists.",
        "b": "Journey to Big Water.",
        "c": "Journey of the Brave.",
        "d": "Journey to Smoking Mountains.",
        "correct": "d",
        "userAnswer": null
    },
    {
        "question": "6. Which country singer celebrity made an appearance in The Land Before Time XIV?",
        "a": "Loretta Lynn",
        "b": "Dolly Parton.",
        "c": "Reba McEntire.",
        "d": "Shania Twain.",
        "correct": "c",
        "userAnswer": null
    },
    {
        "question": "7. What is the secret of the rainbowfaces?",
        "a": "They're space aliens.",
        "b": "They're sharpteeth in disguise.",
        "c": "They lived in the Great Valley the whole time.",
        "d": "They're related to Ducky.",
        "correct": "a",
        "userAnswer": null
    },
    {
        "question": "8. Which one of these characters is not a long neck?",
        "a": "Littlefoot.",
        "b": "Tippy.",
        "c": "Ali.",
        "d": "Shorty.",
        "correct": "b",
        "userAnswer": null
    },
    {
        "question": "9. What is the first natural disaster to befall the Great Valley?",
        "a": "Landslide.",
        "b": "Wildfire.",
        "c": "Flooding.",
        "d": "Tornado.",
        "correct": "a",
        "userAnswer": null
    },
    {
        "question": "10. Who directed the first Land Before Time movie?",
        "a": "Roy Allen Smith.",
        "b": "Charles Grosvenor.",
        "c": "Don Bluth.",
        "d": "Davis Doi.",
        "correct": "c",
        "userAnswer": null
    },
    {
        "question": "Bonus! Which part of the tree is the tree star?",
        "a": "Roots.",
        "b": "Trunk.",
        "c": "Bark.",
        "d": "Leaf.",
        "correct": "d",
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
        }, 1000);
        points = points + 100;
        pointsDisplay.textContent = points;
        scoreDisplay.textContent = points;
    }
    else{
        outcome.textContent = "You got it wrong. Try again!";
        subtractTime();
        points = points - 20;
        pointsDisplay.textContent = points;
        scoreDisplay.textContent = points;

    }

    if(questionIndex === questionList.length - 1){
        document.getElementById("game-over").style.display="block";
        document.getElementById("quiz-questions").style.display="none";
        minutesDisplay.textContent = "0";
        secondsDisplay.textContent = "00";  
        clearInterval(interval);
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
    document.getElementById("game-over").style.display="block";
    document.getElementById("quiz-questions").style.display="none";
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
var scoreDisplay = document.querySelector("#score");

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