// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// Write password to the #password input
function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
};

// function for generating a random password based on prompted conditions
function generatePassword() {
  var passwordLength = prompt("How long is your password? (min=1, max=128)?");

  var pwLength = parseFloat(passwordLength);

  if (pwLength>128){
      alert("password is too long!")
  } else if (pwLength===0) {
      alert("password too short!")
  } else {

  var passwordCaps = confirm("Do you want to include capital letters?");
  var passwordLower = confirm("Do you want to include lowercase letters?");
  var passwordSpecial = confirm("Do you want to include special characters?");
  var passwordNumber = confirm("Do you want to include numbers?");

  var capsSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowSet = "abcdefghijklmnopqrstuvwxyz";
  var specSet = "@%+/\,!#$^?:.}{[]()~`-_";
  var numSet ="1234567890";

  if (passwordCaps === true && passwordLower === true && passwordSpecial === true && passwordNumber === true) {
    alert("Thank you! your password is being generated...");
    var charset = capsSet + lowSet + specSet + numSet;
    var retVal = "";
    for (var i = 0, n = charset.length; i < pwLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
   } 
  } else if (passwordCaps === true && passwordLower === true && passwordSpecial === true && passwordNumber === false) {
    alert("Thank you! your password is being generated...");
    var charset = capsSet + lowSet + specSet;
    var retVal = "";
    for (var i = 0, n = charset.length; i < pwLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    } 
  } else if (passwordCaps === true && passwordLower === true && passwordSpecial === false && passwordNumber === false) {
    alert("Thank you! your password is being generated...");
    var charset = capsSet + lowSet;
    var retVal = "";
    for (var i = 0, n = charset.length; i < pwLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    } 
  } else if (passwordCaps === true && passwordLower === false && passwordSpecial === false && passwordNumber === false) {
    alert("Thank you! your password is being generated...");
    var charset = capsSet;
    var retVal = "";
    for (var i = 0, n = charset.length; i < pwLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    } 
  } else if (passwordCaps === false && passwordLower === true && passwordSpecial === true && passwordNumber === true) {
    alert("Thank you! your password is being generated...");
    var charset = lowSet + specSet + numSet;
    var retVal = "";
    for (var i = 0, n = charset.length; i < pwLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    } 
  } else if (passwordCaps === false && passwordLower === false && passwordSpecial === true && passwordNumber === true ) {
    alert("Thank you! your password is being generated...");
    var charset = specSet + numSet;
    var retVal = "";
    for (var i = 0, n = charset.length; i < pwLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    } 
  } else if (passwordCaps === false && passwordLower === false && passwordSpecial === false && passwordNumber === true) {
    alert("Thank you! your password is being generated...");
    var charset = numSet;
    var retVal = "";
    for (var i = 0, n = charset.length; i < pwLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
   } 
  } else if (passwordCaps === false && passwordLower === true && passwordSpecial === true && passwordNumber === false) {
    alert("Thank you! your password is being generated...");
    var charset = lowSet + specSet;
    var retVal = "";
    for (var i = 0, n = charset.length; i < pwLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
   } 
  } else if (passwordCaps === false && passwordLower === true && passwordSpecial === false && passwordNumber === true) {
    alert("Thank you! your password is being generated...");
    var charset = lowSet + numSet;
    var retVal = "";
    for (var i = 0, n = charset.length; i < pwLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
   } 
  } else if (passwordCaps === false && passwordLower === true && passwordSpecial === false && passwordNumber === false) {
    alert("Thank you! your password is being generated...");
    var charset = lowSet;
    var retVal = "";
    for (var i = 0, n = charset.length; i < pwLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
   } 
  } else if (passwordCaps === false && passwordLower === false && passwordSpecial === true && passwordNumber === false) {
    alert("Thank you! your password is being generated...");
    var charset = specSet;
    var retVal = "";
    for (var i = 0, n = charset.length; i < pwLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
   } 
  } else if (passwordCaps === true && passwordLower === false && passwordSpecial === true && passwordNumber === false) {
    alert("Thank you! your password is being generated...");
    var charset = capsSet + specSet;
    var retVal = "";
    for (var i = 0, n = charset.length; i < pwLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
   } 
  } else if (passwordCaps === true && passwordLower === false && passwordSpecial === false && passwordNumber === true) {
    alert("Thank you! your password is being generated...");
    var charset = capsSet + numSet;
    var retVal = "";
    for (var i = 0, n = charset.length; i < pwLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
   } 
  } else if (passwordCaps === true && passwordLower === true && passwordSpecial === false && passwordNumber === true) {
    alert("Thank you! your password is being generated...");
    var charset = capsSet + lowSet + numSet;
    var retVal = "";
    for (var i = 0, n = charset.length; i < pwLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
   }
  } else if (passwordCaps === true && passwordLower === false && passwordSpecial === true && passwordNumber === true) {
    alert("Thank you! your password is being generated...");
    var charset = capsSet + specSet + numSet;
    var retVal = "";
    for (var i = 0, n = charset.length; i < pwLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
   }
  } else {
    alert("Please try again and select character types");
  }
}
  return retVal;
};

// Function for copying contents of password text field
function copyToClipboard() {

  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
};

// Event Listeners for Generate and Copy Buttons
generateBtn.addEventListener("click", writePassword);

copyBtn.addEventListener("click", copyToClipboard);