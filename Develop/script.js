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
  var passwordLenCriteria = 0;
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
  var passwordStart = parseInt(prompt("How many characters would you like your password to contain?"));

  //variables to collect user inputs
  var uCase;
  var lCase;
  var numbers;
  var specialCharacter; 
  
  if (passwordStart < 8 || passwordStart> 128) { 
    alert("Must select between 8 to 128.");
    return;
  }
   uCase =confirm("Would you like to use upper case letters in your password?");
    lCase =confirm("Would you like to use lower case letters in your password?");
    numbers=confirm("Would you like to use numbers in your password?");
    specialCharacter=confirm("Would you like to use special characters in your password?");
  } if (!uCase && !lCase && !numbers && !specialCharacter) {
    //alert("At least one crtiera needs to be selected");
  //}


  }
