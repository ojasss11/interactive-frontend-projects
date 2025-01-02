const passwordBox = document.getElementById("password");

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialSymbols = "!@#$%^&*()_+-={}[]|:;'<>,.?/~`";


const allChars = upperCase + lowerCase + numbers + specialSymbols;

function createPassword() {
  let password = "";

  // Ensure at least one character from each category
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];

  // Fill the remaining password length with random characters from allChars
  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Set the generated password in the input box
  passwordBox.value = password;
}

function copyPassword(){
  passwordBox.select();
  document.execCommand("copy");
}