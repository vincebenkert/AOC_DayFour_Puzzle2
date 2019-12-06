var pwdPossibleArray = new Array();
var startingInput = 109165;
var endingInput = 576723;
var currentEval = 0;
var doesItPass = false;
var numberOfPwdPossible = 0;

//save 467558

for (var i = 0; i < 467558; i++) {
  currentEval = startingInput + i;
  //console.log(currentEval);
  var switchToString = currentEval.toString();

  //console.log("Current length of string" + switchToString.length + " " + switchToString);

  //check switchToString for Doubles
  for (var x = 0; x < switchToString.length - 1; x++) {
  	//console.log(switchToString[x]+ " & " + switchToString[x + 1]);
    if (switchToString[x] == switchToString[x + 1]) {
      doesItPass = true;
      break;
    }
  }
  //console.log("After Doubles... Current Number: " + currentEval + " Current doesItPass: " + doesItPass);

  //check currentEval for Decreasing
  if(doesItPass){
  for (var x = 0; x < switchToString.length - 1; x++) {
  // console.log("Comparing " + switchToString[x] + " & " + switchToString[x + 1]  )
    if (Number(switchToString[x]) > Number(switchToString[x + 1])) {
      doesItPass = false;
      break;
    }

  }
//  console.log("After Decreasing... Current Number: " + currentEval + " Current doesItPass: " + doesItPass);
}

  if (doesItPass) {
    pwdPossibleArray.push(currentEval);
    //console.log("Current Values " + currentEval);
  }
  doesItPass = false;

}
numberOfPwdPossible = pwdPossibleArray.length;
console.log("Number of PWDs stored in array: " + numberOfPwdPossible);
console.log(pwdPossibleArray);
console.log("Program Finished....")
