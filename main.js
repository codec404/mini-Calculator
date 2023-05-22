console.log("Welcome");
let calcString = "";
const pi = 3.14159265359;
let dispString = "";
let ansString = "";
let disp = document.querySelector(".text-show");
let ansdisp = document.querySelector(".dispAns");
let getButton = document.querySelectorAll(".button");
// console.log(disp.innerHTML.length);
if (disp.innerHTML.length >= 20) {
  alert("Only 10 digit calculation is allowed for one operator!!!");
  disp.innerHTML = "";
}

getButton.forEach((val) => {
  val.addEventListener("click", () => {
    if (disp.innerHTML.length >= 20) {
      alert("Only 10 digit calculation is allowed for one operator!!!");
      dispString = "";
      disp.innerHTML = "";
    }
    else{
        if(val.id == "=")
        {
            try{
                calcString = eval(calcString);
                ansdisp.innerHTML = calcString;
                ansString = calcString;
            }
            catch(err){
                disp.innerHTML = "";
                ansdisp.innerHTML = "Syntax Error";
            }
        }
        else if(val.id == "pi")
        {
            if(calcString == "" || calcString.charAt(calcString.length - 1) == "+" || calcString.charAt(calcString.length - 1) == "-"||calcString.charAt(calcString.length - 1) == "*"||calcString.charAt(calcString.length - 1) == "/")
            {
                ;
            }
            else{
                calcString += '*';
            }
            calcString += pi.toString();
            dispString += "\u03C0";
            disp.innerHTML = dispString;
        }
        else if(val.id == "ac")
        {
            calcString = "";
            dispString = "";
            disp.innerHTML = "";
            ansdisp.innerHTML = "";
        }
        else if(val.id == "*")
        {
            calcString += val.id;
            dispString += 'x';
            disp.innerHTML = dispString;
        }
        else if(val.id == "del")
        {
           if(calcString != ""){
                calcString = calcString.substring(0,calcString.length - 1);
                dispString = dispString.substring(0,dispString.length - 1);
                disp.innerHTML = dispString;
            } 
        }
        else if(val.id == "ans")
        {
            if(calcString == "" || calcString.charAt(calcString.length - 1) == "+" || calcString.charAt(calcString.length - 1) == "-"||calcString.charAt(calcString.length - 1) == "*"||calcString.charAt(calcString.length - 1) == "/")
            {
                ;
            }
            else{
                calcString += '*';
            }
            calcString += ansString;
            if(dispString == "")
            {
                dispString = "Ans";
            }
            else{
                dispString += "Ans";
            }
            disp.innerHTML = dispString;
        }
        else{
            calcString += val.id;
            dispString += val.id;
            disp.innerHTML = dispString;
        }
    }
  });
});
