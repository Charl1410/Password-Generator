// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

//propt user for input returns true or false to variable
//PromtText is displayed text to user for preferences
//Returns true or false
function promptBoolean(promptText) {
  var response = prompt("Do you want to include " + promptText + "? {Y/N}");
  while (response !== "Y" && response !== "N") {
    response = prompt("Response must be Y or N. Please retry");
  }

  if (response === "Y") {
    return true;
  } else {
    return false;
  }
}

//Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Generates random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//generating password function
//returns generated password as a string
function generatePassword() {
  //promts input for password length
  var pwLength = prompt("How many characters do you want in your password?");
  while (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
    pwLength = prompt(
      "Value must be a number between 8 - 128. Please re-enter valid answer"
    );
  }

  //promts user for password characteristics
  var includeSymbols = promptBoolean("symbols");
  var includeLowers = promptBoolean("lowercase characters");
  var includeUppers = promptBoolean("uppercase characters");
  var includeNumbers = promptBoolean("numbers");

  
  //Checks whether a character type has been selected 
  
  while (
    !includeSymbols &&
    !includeLowers &&
    !includeUppers &&
    !includeNumbers
  ) {
    alert(
      "You must select at least one character type to include. Please try again"
    );

    includeSymbols = promptBoolean("symbols");
    includeLowers = promptBoolean("lowercase characters");
    includeUppers = promptBoolean("uppercase characters");
    includeNumbers = promptBoolean("numbers");
  }

  //generating string for possible chatacters for password generation
  var password = "";

  var finalAlphabet = "";
  if (includeSymbols) {
    finalAlphabet += alphabet.symbols;
    password += alphabet.symbols[getRandomInt(alphabet.symbols.length)];
  }
  if (includeLowers) {
    finalAlphabet += alphabet.lowercase;
    password += alphabet.lowercase[getRandomInt(alphabet.lowercase.length)];
  }
  if (includeUppers) {
    finalAlphabet += alphabet.uppercase;
    password += alphabet.uppercase[getRandomInt(alphabet.uppercase.length)];
  }
  if (includeNumbers) {
    finalAlphabet += alphabet.numbers;
    password += alphabet.numbers[getRandomInt(alphabet.numbers.length)];
  }

  var initialPwLength = password.length;

//for loop to create end of password 
  for (i = 0; i < pwLength - initialPwLength; i++) {
    console.log(pwLength + " " + password.length);
    password += finalAlphabet[getRandomInt(finalAlphabet.length)];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Creating object with password characters
