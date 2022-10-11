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

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
  //prompt to start
  passwordLen = prompt("How many characters would you like your password to contain?");

  //declare varables for password length, lowercase letters, uppercase letters, numberic, and special character for pasword criteria
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
  console.log(specialChar);
}
