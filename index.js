let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
console.log(characters)
let passwordLength = 12

 function randomPassword() {
    createPassword()
 }

 function createPassword() {
    let password1El = document.getElementById("password-el-1")
    let password2El = document.getElementById("password-el-2")
    password1El.textContent = ''
    password2El.textContent = ''
    for (let i = 0; i < 12; i++) {
        let randomPassword1 = Math.floor(Math.random() * characeters.length);
        let randomPassword2 = Math.floor(Math.random() * characeters.length);

        password1El.textContent += characters[randomPassword1]
        password2El.textContent += characters[randompassword2]
    }
 }