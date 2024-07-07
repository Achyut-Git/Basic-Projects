const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789'
const symbol = '@#$%^&*()-_=+/|{}[]><~';

const allChars = upperCase + lowerCase + number +symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
     password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password;
}

let containers = document.getElementsByClassName("container")
containers[0].lastElementChild.onclick = createPassword;

let copy = document.getElementById("copy")
copy.onclick =copyPassword;




// function copyPassword(){
//     passwordBox.select();
//     document.execCommand("copy") //simple without "copied"! popup
// }

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");

    // Show the copy popup
    let copyPopup = document.getElementById("copyPopup");
    copyPopup.style.display = "block";

    // Hide the popup after 2 seconds (2000 milliseconds)
    setTimeout(function() {
        copyPopup.style.display = "none";
    }, 2000);
}
