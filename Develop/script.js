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

/**************
 * click generate a password then series of prompts to ask the following
 * select criteria to include 
 * lenght of the password 8 -128 characters
 * lowercase, uppercase, numeric, and/or special characters
 * input should be validated and at least one character type should be selected
 * the password generated matches the selected criteria
 * either display in an alert or written to the page
 */
function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
  // Lowercser
  // Uppercase
  // numeric
  // special characters
var numCharacter = Number (prompt ("How many characters would you like your password to contain? Chose between 8 - 128."));
var lowerCase = ["a", "b", "c", "d", "e", "f", 'g', "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //26
var upperCase = ["A", "B", "C", "D", "E", "F", 'G', "H", "I", "J", "K", "L", "M", "N", "O", "p", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //26
var numericnum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //10
var specialChar = ["@", "#", "*", "!", "&", "5"]; //6

 
  
//validate input
//gerate password per the criteria input
//display password onto the page

}
