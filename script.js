// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!#$%&'()*+,-./:;<=>?@[\]^_|~";


  var lowercasePref = confirm("Do you want lowercase letters in your password?");
  var uppercasePref = confirm("Do you want uppercase letters in your password?");
  var numbersPref = confirm("Do you want numbers in your password?");
  var specialPref = confirm("Do you want special characters in your password?");

  alert ("You must select at least one character type for your password");

  var passwordLength = prompt("How long do you want your password to be?");

  if (passwordLength <8) {
    alert("Error: Password must be at least 8 characters");
    return "";
  }else if (passwordLength >128) {
    alert("Error: Password must be less than 128 characters");
    return "";
  }else alert("Password meets the correct requirements");

  var passwordCharacters = "";

  if (lowercasePref) {
    passwordCharacters +=lowercase;
  }

  if (uppercasePref) {
    passwordCharacters += uppercase;
  }

  if (numbersPref) {
    passwordCharacters += numbers;
  }

  if (specialPref) {
    passwordCharacters += special;
  }

  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }

  console.log(password)
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
