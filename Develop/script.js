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

}
