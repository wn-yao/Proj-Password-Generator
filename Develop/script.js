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
//3. Generate passworod on to the web page

//declare varables for password length, lowercase letters, uppercase letters, numberic, and special character for pasword criteria
  //better to be global variavble
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //test the array assignments and lenghth
  //console.log(lowerCase);
  //console.log(lowerCase.length);
  var upperCase = lowerCase.map(lowerCase => lowerCase.toUpperCase());
  //check if lowerCase letters have been converted to upperCaseLetters
  //console.log(upperCase);'
  var numericNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
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

  //variable to hold new strings with user inputs 
  var availableCharacter = [];
  //variable to hold resultss
  var result = [];
  
  if (passwordLenCriteria < 8 || passwordLenCriteria> 128) { 
    alert("Must select between 8 to 128.");
    return;
  }

  //prompts to ask user if they would like to include these criteria in password

    uCase =confirm("Would you like to use upper case letters in your password?");
    lCase =confirm("Would you like to use lower case letters in your password?");
    numbers=confirm("Would you like to use numbers in your password?");
    specialCharacter=confirm("Would you like to use special characters in your password?");

  //condition for at least one criteria needs to be selected 

  if (!uCase && !lCase && !numbers && !specialCharacter) {
    alert("At least one crtiera needs to be selected");
  } 
//if uppercase selected - avaialbe characters
//if lower selected - available characters
//if number selected - available characters
//if special character selected - available characters 
var mustHaveCharacter = [];
//added codes to make sure if one criteria is selected, then at least one of the character must show in the final password
//delcared mustHaveCharacter string to store the must have character if user input is selected

if (uCase){
  availableCharacter = availableCharacter.concat(upperCase);
  //get uppercase character inside a var
  // get a upperCase char into new var. 
 var oneUpCase = upperCase[Math.floor(Math.random()*upperCase.length)];
 mustHaveCharacter = oneUpCase; 
}

if (lCase){
  availableCharacter = availableCharacter.concat(lowerCase);
  // get a lowerCase char into new var randomly from lowercase
  var oneLoCase = lowerCase[Math.floor(Math.random()*lowerCase.length)];
  mustHaveCharacter = mustHaveCharacter.concat(oneLoCase);
}

if (numbers){
  availableCharacter = availableCharacter.concat(numericNum);
  var oneNum = numericNum[Math.floor(Math.random()*numericNum.length)];
  mustHaveCharacter = mustHaveCharacter.concat(oneNum);
}

if (specialCharacter){
  availableCharacter = availableCharacter.concat(specialChar);
  var oneSpecialChar = specialChar[Math.floor(Math.random()*specialChar.length)];
  mustHaveCharacter = mustHaveCharacter.concat(oneSpecialChar);
}


// new varible = ['A', 'a', 1, '%']
console.log(mustHaveCharacter); //verified mustHaveCharacter worked with userinput

//console.log(availableCharacter) //checked if availableCharacter has all characters in the string

//using userinput numbers (passwordLenCriteria) to randomly select available characters to make the password.
//console.log(passwordLenCriteria-mustHaveCharacter.length);
// 8 lenghts of password
// declare another variable to store for all available character
//var randomCharacter=[];

var randomCharacter =[];
for (i=0; i < passwordLenCriteria - mustHaveCharacter.length; i++) {
  var userInputNumbers = availableCharacter[Math.floor(Math.random()*availableCharacter.length)];
  randomCharacter.push(userInputNumbers);
  
  
//}

// result = [1, 2, 3, 'a'] if passwordLenCriteria === 8
// result = result.concat(new variable)

//console.log(result) //checked to see if it's giving correct length and inlclude all characters selected
//wored with tutor to use join mehtod to get rid of the white space and return password onto the page
console.log(randomCharacter);
}
result=randomCharacter.concat(mustHaveCharacter);
return result.join("");}