let button = document.querySelector(".row button")


const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


button.addEventListener("click", 
 function(){
    if(inputBox.value ===''){
        alert("Input the value")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);

    }
    inputBox.value = '';
    saveData()
}
)

listContainer.addEventListener("click",(value)=>{
if(value.target.tagName === "LI"){
    value.target.classList.toggle("checked");
    saveData()
}
else if(value.target.tagName === "SPAN"){
    value.target.parentElement.remove();
    saveData()
}
}, false)


let saveData = ()=>{
    localStorage.setItem("data", listContainer.innerHTML)
}
let showTask = ()=>{
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()
