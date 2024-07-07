let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabName){
for(tabLink of tabLinks){
    tabLink.classList.remove("active-link")
}
for(tabContent of tabContents){
    tabContent.classList.remove("active-tab")
}
event.target.classList.add("active-link")
document.getElementById(tabName).classList.add("active-tab")
}

// =====================================Small Screen=======================================
let sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

//========================================Form Submission===================================

let url = "https://script.google.com/macros/s/AKfycbzebvLZhVoFjcbp6xGUXosZXvpYaNqMv72QbPIL_ZSKnCH6EIMDhHqQkzEJFej6Kudk/exec";
let form = document.forms['submitToGoogleSheet']

form.addEventListener('submit',(event)=>{
 event.preventDefault();
 fetch(url,{
    method:'POST',
    body: new FormData(form)
 })
 .then((response)=>{
    if(!response){
        console.log("NO good response")
    }
    form.reset();
 })
 .catch((error)=>{
    console.error(error.message)
 })
})