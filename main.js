// console.log("Calculate");

const pi = 3.14159265359;

//STRINGS TO STORE THE DISPLAY, ANS AND THE MAIN CALCULATION STRING
let calcString = "";
let dispString = "";
let ansString = "";

// STORE THE HISTORY
const hist = [];

let disp = document.querySelector(".text-show"); // INPUT DISPLAY
let ansdisp = document.querySelector(".dispAns"); // ANSWER DISPLAY
let getButton = document.querySelectorAll(".button"); // GETTING THE BUTTONS

//TRAVERSE THE HISTORY ARRAY
let index = Math.max(hist.length - 1, 0);

if (disp.innerHTML.length >= 20) {
  alert("Only 10 digit calculation is allowed for one operator!!!");
  disp.innerHTML = "";
}

let histButtonUp = document.querySelector(".up"); // GO TO CALCULATION HISTORY (LATEST --> OLDEST) ONE-BY-ONE
let histButtonDown = document.querySelector(".down");// COMEBACK TO THE PRESENT CALCULATION RESULT ONE-BY-ONE

const handleHistUp = () => {
  if (hist.length && index >= 0) {
    dispString = "";
    index = Math.max(index - 1, 0);
    disp.innerHTML = hist[index].dispHist;
    ansdisp.innerHTML = hist[index].ansHist;
  }
};

const handleHistDown = () => {
  if (hist.length && index < hist.length) {
    index++;
    if (index < hist.length) {
      disp.innerHTML = hist[index].dispHist;
      ansdisp.innerHTML = hist[index].ansHist;
    } else {
      index = Math.max(hist.length - 1, 0);
    }
  }
};

histButtonUp.addEventListener("click", handleHistUp);
histButtonDown.addEventListener("click", handleHistDown);

getButton.forEach((val) => {
  val.addEventListener("click", () => {
    if (disp.innerHTML.length >= 20) {
      alert("Only 10 digit calculation is allowed for one operator!!!");
      dispString = "";
      disp.innerHTML = "";
    } else {
      if (val.id == "=") {
        try {
          if (calcString.length) {
            calcString = eval(calcString); //EVALUATE THE CALCULATION STRING

            // DIVISON BY ZERO
            if (
              calcString == "Infinity" ||
              calcString == "-Infinity" ||
              calcString == "NaN"
            ) {
              dispString = "";
              calcString = "";
              throw new Error("Division by zero");
            }
            ansdisp.innerHTML = calcString;
            ansString = calcString;
            const createHistory = new Object();
            createHistory.dispHist = dispString;
            createHistory.ansHist = ansString;
            hist.push(createHistory);
            index = hist.length - 1;

            //EMPTY THE STRINGS FOR NEXT CALCULATION
            dispString = "";
            calcString = "";
          }
        } catch (err) {
          if (err.message == "Division by zero") {
            disp.innerHTML = "";
            ansdisp.innerHTML = "Division by zero";
          } else {
            calcString = "";
            dispString = "";
            disp.innerHTML = "";
            ansdisp.innerHTML = "Syntax Error";
          }
        }
      } else if (val.id == "pi") {
        if (
          calcString == "" ||
          calcString.charAt(calcString.length - 1) == "+" ||
          calcString.charAt(calcString.length - 1) == "-" ||
          calcString.charAt(calcString.length - 1) == "*" ||
          calcString.charAt(calcString.length - 1) == "/"
        ) {
        } else {
          calcString += "*";
        }
        calcString += pi.toString();
        dispString += "\u03C0";
        disp.innerHTML = dispString;
      } else if (val.id == "ac") {
        calcString = "";
        dispString = "";
        disp.innerHTML = "";
        ansdisp.innerHTML = "";
        index = Math.max(hist.length, 0);
      } else if (val.id == "*") {
        calcString += val.id;
        dispString += "x";
        disp.innerHTML = dispString;
      } else if (val.id == "del") {
        if (calcString != "") {
          calcString = calcString.substring(0, calcString.length - 1);
          dispString = dispString.substring(0, dispString.length - 1);
          disp.innerHTML = dispString;
        }
      } else if (val.id == "ans") {
        if (
          calcString == "" ||
          calcString.charAt(calcString.length - 1) == "+" ||
          calcString.charAt(calcString.length - 1) == "-" ||
          calcString.charAt(calcString.length - 1) == "*" ||
          calcString.charAt(calcString.length - 1) == "/"
        ) {
        } else {
          calcString += "*";
        }
        calcString += ansString;
        if (dispString == "") {
          dispString = "Ans";
        } else {
          dispString += "Ans";
        }
        disp.innerHTML = dispString;
      } else {
        calcString += val.id;
        dispString += val.id;
        disp.innerHTML = dispString;
      }
    }
  });
});
