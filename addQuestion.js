var x = "";
var c = localStorage.getItem("questions");
function gotoIndex() {
  location.replace("/index.html");
}

function submit() {
  x = "";
  c = localStorage.getItem("questions");
  x = x + document.getElementById("question").value + ",";
  x = x + document.getElementById("choice1").value + ",";
  x = x + document.getElementById("choice2").value + ",";
  x = x + document.getElementById("choice3").value + ",";
  x = x + document.getElementById("correctAnswer").value + ",";

  c = c + x;

  localStorage.setItem("questions", c);
  document.getElementById("question").value = "";
  document.getElementById("choice1").value = "";
  document.getElementById("choice2").value = "";
  document.getElementById("choice3").value = "";
  document.getElementById("correctAnswer").value = "";
}
