const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1El")
let password2El = document.getElementById("password2El")
passwordLength = 12


function createRandomPassword() { 
    password1El.textContent = ""
    password2El.textContent = ""
   for (let i = 0; i < output.innerHTML; i++) {
       password1El.textContent += randomLetter() 
       password2El.textContent += randomLetter()
   } 
}

function randomLetter() { 
     let randomElement = Math.floor(Math.random() * characters.length)
    return characters[randomElement] 
}

function clearPassword() {
    password1El.textContent = ""
    password2El.textContent = ""
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}