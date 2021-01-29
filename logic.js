// var question [   [question,choice1,choice2,choice3,correct answer] ,[...]   ]
var counterv = 0;
var scoreCounter = 0;
var triesCounter = 3;
var x = localStorage.getItem("questions");
if (x == "") {
  x = null;
}

function getQuestions() {
  if (x === null) {
    return true;
  } else {
    console.log("questions  was removed");
    questions = [];
  }
  x = x.split(",");
  var q;
  for (i = 0, j = 5, c = 0; c < (x.length - 1) / 5; j = j + 5, c++) {
    q = x.slice(i, j);
    console.log(q);
    questions.push(q);
    i = j;
  }
}

var questions = [["please add some more questions", "", "", "", ""]];

getQuestions();

var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");
var label3 = document.getElementById("label3");
var btn = document.getElementById("btnSN");
var score = document.getElementById("score");
var tries = document.getElementById("tries");
var question = document.getElementById("question");
var result = document.getElementById("result");
var choices = [choice1, choice2, choice3];
var correctAnswer = "1";

function updateVariables() {
  var choice1 = document.getElementById("choice1");
  var choice2 = document.getElementById("choice2");
  var choice3 = document.getElementById("choice3");
  var label1 = document.getElementById("label1");
  var label2 = document.getElementById("label2");
  var label3 = document.getElementById("label3");
  var btn = document.getElementById("btnSN");
  var score = document.getElementById("score");
  var tries = document.getElementById("tries");
  var question = document.getElementById("question");
  var result = document.getElementById("result");
  var choices = [choice1, choice2, choice3];
  var correctAnswer = "1";
}

next();

function updateResults() {
  console.log(score);
  score.textContent = `${scoreCounter}`;
  tries.textContent = `${triesCounter}`;
}

function checkAnswer() {
  var useranswer;
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      useranswer = document.getElementById("label" + `${i + 1}`).textContent;
    }
  }

  if (useranswer == correctAnswer) {
    scoreCounter++;
    result.style.color = " #00b85f";
    result.innerText = "correct";
    counter();
    btnTonext();
  } else {
    triesCounter--;
    if (triesCounter == 0) {
      lose();
    }
    result.style.color = " #b8001f";
    result.innerText = "wrong";
  }
  updateResults();
}

function lose() {
  document.getElementById("questionsContainer").textContent = "You lost";
  var tryAgain = document.createElement("button");
  tryAgain.className = "btn";
  tryAgain.textContent = "Try again";
  tryAgain.onclick = function () {
    location.reload();
  };
  document.getElementById("questionsContainer").appendChild(tryAgain);
}

function counter() {
  counterv++;
  if (counterv > questions.length - 1) {
    counterv = 0;
    document.getElementById("questionsContainer").textContent = "Thats it ";
    var tryAgain = document.createElement("button");
    tryAgain.className = "btn";
    tryAgain.textContent = "Try again";
    tryAgain.onclick = function () {
      location.reload();
    };
    document.getElementById("questionsContainer").appendChild(tryAgain);
  }
}

function btnTonext() {
  btn.textContent = "next";
  btn.onclick = next;
}

function btnToSubmit() {
  btn.textContent = "submit";
  btn.onclick = checkAnswer;
}

function next() {
  removeSelection();
  question.textContent = questions[counterv][0];
  label1.textContent = questions[counterv][1];
  label2.textContent = questions[counterv][2];
  label3.textContent = questions[counterv][3];
  correctAnswer = questions[counterv][4];
  btnToSubmit();
}

function clearo() {
  document.getElementById("score").textContent = "0";
  document.getElementById("tries").textContent = "0";
  localStorage.setItem("questions", "");
  questions = [["please add some more questions", "", "", "", ""]];
  location.replace("/index.html");
}

function removeSelection() {
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choices[i].checked = false;
    }
  }
  result.innerText = "";
}

function gotoAddQuestion() {
  location.replace("/addQuestion.html");
}

function cppTest() {
  var x =
    "Is c++ a low or a high level language ?,low,high,neither,low,whats is the result of ( 0.1 + 0.2 ) in c++ ?,0.333333,0.3,0.30000000001,0.30000000001,How can we show something in the console in c++ ?,cout,printf,both,both,how to get the user input in c++ ?,cin,scanf,both,both,who invented c++ ?,Bjarne Stroustrup,Alan turing,Guido van Rossum,Bjarne Stroustrup,";
  localStorage.setItem("questions", x);
  location.replace("/index.html");
}
