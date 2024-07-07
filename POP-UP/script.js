let btn = document.getElementById("btn");
let popup = document.getElementById("pop-up");
let Sbtn = document.getElementById("Sbtn");

btn.addEventListener("click", ()=>{
    popup.classList.add("open-popup")
})
Sbtn.onclick = ()=>{
    popup.classList.remove("open-popup")
}


