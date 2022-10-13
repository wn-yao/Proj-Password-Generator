///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

//Steps
//1. Prompts for user input to password criteria
   // password length between 8 - 128
   // criteria lowercase, uppercase, numeric number, and special characters
//2. Validate the input 
   // at least one character type should be selected
//3. Generate passworo on to the web page

//declare varables for password length, lowercase letters, uppercase letters, numberic, and special character for pasword criteria
  //better to be global variavble
  var passwordLen;
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //test the array assignments and lenghth
  //console.log(lowerCase);
  //console.log(lowerCase.length);
  var upperCase = lowerCase.map(lowerCase => lowerCase.toUpperCase());
  //check if lowerCase letters have been converted to upperCaseLetters
  //console.log(upperCase);'
  var numericNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  //check if numeric numbers are listed
  //console.log(numericNum);
  var specialChar = ['!', "#", "%", "&", "*", "+", "/", "<", ">", "@", "~"]; //11
  //check if specialChar is set correctly
  //0console.log(specialChar);

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
  //prompt to start
  var passwordLenCriteria = parseInt(prompt("How many characters would you like your password to contain?"));

  //variables to collect user inputs
  var uCase;
  var lCase;
  var numbers;
  var specialCharacter; 
  var result;
  
  if (passwordLenCriteria < 8 || passwordLenCriteria> 128) { 
    alert("Must select between 8 to 128.");
    return;
  }
    upperCase =confirm("Would you like to use upper case letters in your password?");
    lowerCase =confirm("Would you like to use lower case letters in your password?");
    numericNum=confirm("Would you like to use numbers in your password?");
    specialChar=confirm("Would you like to use special characters in your password?");
  if (!upperCase && !lowerCase && !numericNum && !specialChar) {
    alert("At least one crtiera needs to be selected");
  } 

//if o
if (upperCase) {
  uCase = upperCase
}
for (i=0; i < passwordLenCriteria; i++){
  var userSelect = uCase[Math.floor(Math.random(upperCase)*upperCase.length)];
  result.push(userSelect);
}
console.log(result);
//if both  uppercase and lower selected, retrun password to user input # (length) of uppercase and lowercase letter
//if uppercase, lowercase and numbers are selected, retrun password to user input # (length) with selection
//if all selected, retrun password to user inpput # (length) with all selection
//start again 

}