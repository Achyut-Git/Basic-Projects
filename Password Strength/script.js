let pass = document.getElementById("password");
let message = document.getElementById("message");
let strength = document.getElementById("strength");

pass.addEventListener("input", ()=>{
    if(pass.value.length>0){
        message.style.display = "block"
    }
    else{
        message.style.display = "none"
    }

    if(pass.value.length < 4){
        strength.innerHTML = "weak"
        pass.style.borderColor = "red"
        message.style.color ="red"
    }
   else if(pass.value.length < 6 && pass.value.length >=4){
        strength.innerHTML = "medium"
         pass.style.borderColor = "yellow"
        message.style.color ="yellow"
    }
    else if(pass.value.length <= 8 ){
        strength.innerHTML = "strong"
         pass.style.borderColor = "green"
        message.style.color ="green"
    }
})