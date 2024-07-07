let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName(){
    let name = document.getElementById("contact-name").value;  //storing the input value in the name variable

    if(name.length === 0){
        nameError.innerHTML = "Name is required"
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Please Enter your full name"
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validatePhone(){
    let phone = document.getElementById("contact-phone").value;

    if(phone.length === 0){
        phoneError.innerHTML = "Phone number is required"
        return false;
    }
    if(phone.length!==10){
        phoneError.innerHTML = "Write a 10 digits phone number"
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Invalid phone number"
        return false;
    }

        phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        return true;
    
}


// function validateEmail(){
//     let email = document.getElementById("contact-email").value;

//     if(email.length === 0){
//         emailError.innerHTML = "Phone number is required"
//         return false;
//     }
//     if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2-4}$/)){  //very restrictive
//         emailError.innerHTML = "Invalid Email";
//         return false
//     }
//     else{
//         emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
//         return true;
//     }
// }

function validateEmail(){
    let email = document.getElementById("contact-email").value;

    if(email.length === 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    // This regex pattern is more permissive and should work for most valid emails
    if(!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)){
        emailError.innerHTML = "Invalid Email";
        return false;
    }
    else{
        emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}


function validateMessage(){
let message = document.getElementById("contact-message").value;
let required = 30;
let left = required - message.length;

if(left > 0){
    messageError.innerHTML = "Minimum letters required is 30"
    return false;
}
 else{
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
 }
}



function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please input the fields to submit";
        setTimeout(()=>{ submitError.style.display = "none"; },3000)
        return false;
    }
}