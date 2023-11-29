console.log("hi"); // R6 Quiz

// Button Event Listener

document.getElementById("btn").addEventListener("click", btnClicked);

// Set Variable Values

function btnClicked() {
  let ans1 = document.getElementById("input1").value.toLowerCase();
  let ans2 = document.getElementById("input2").value.toLowerCase();
  let ans3 = document.getElementById("input3").value.toLowerCase();
  let ans4 = document.getElementById("input4").value.toLowerCase();
  // Check answers

  if (ans1 === "1721") {
    document.getElementById("q1a").innerHTML = "Correct!";
  } else {
    document.getElementById("q1a").innerHTML = "Incorrect.";
  }
  if (ans2 === "2017") {
    document.getElementById("q2a").innerHTML = "Correct!";
  } else {
    document.getElementById("q2a").innerHTML = "Incorrect.";
  }
  if (ans3 === "4") {
    document.getElementById("q3a").innerHTML = "Correct!";
  } else {
    document.getElementById("q3a").innerHTML = "Incorrect.";
  }
  if (ans4 === "blue" || ans4 === "white") {
    document.getElementById("q4a").innerHTML = "Correct!";
  } else {
    document.getElementById("q4a").innerHTML = "Incorrect.";
  }

  let sc = 0;

  if (ans1 === "1721") {
    sc++;
  }
  if (ans2 === "2017") {
    sc++;
  }
  if (ans3 === "4") {
    sc++;
  }
  if (ans4 === "blue" || ans4 === "white") {
    sc++;
  }

  if (sc === 0) {
    document.getElementById("score").innerHTML = "0/4 (0%)";
  } else if (sc === 1) {
    document.getElementById("score").innerHTML = "1/4 (25%)";
  } else if (sc === 2) {
    document.getElementById("score").innerHTML = "2/4 (50%)";
  } else if (sc === 3) {
    document.getElementById("score").innerHTML = "3/4 (75%)";
  } else if (sc === 4) {
    document.getElementById("score").innerHTML = "4/4 (100%)";
  }

  if (sc === 3) {
    document.getElementById("msg").innerHTML = "Good Job!";
  } else if (sc === 4) {
    document.getElementById("msg").innerHTML = "Exellent!";
  } else if (sc === 2) {
    document.getElementById("msg").innerHTML = "Keep Trying!";
  } else if (sc === 1) {
    document.getElementById("msg").innerHTML = "Close!";
  } else if (sc === 0) {
    document.getElementById("msg").innerHTML = "Yikes.";
  }
}
