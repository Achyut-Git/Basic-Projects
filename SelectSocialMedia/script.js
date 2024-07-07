let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");

selectField.onclick = ()=>{
    list.classList.toggle("hide")
    arrowIcon.classList.toggle("rotate")
}

for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide")
        arrowIcon.classList.toggle("rotate")

        if(selectText.innerHTML.trim() === "facebook"){
            location.href = "https://facebook.com"
        }
       else if(selectText.innerHTML.trim() === "youtube"){
            location.href = "https://youtube.com"
        }
        else if(selectText.innerHTML.trim() === "twitter"){
            location.href = "https://twitter.com"
        }
       else if(selectText.innerHTML.trim() === "pinterest"){
            location.href = "https://pinterest.com"
        }
       else if(selectText.innerHTML.trim() === "WhatsApp"){
            location.href = "https://Whatsapp.com"
        }
    }
}