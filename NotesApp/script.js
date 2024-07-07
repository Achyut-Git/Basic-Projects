const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inputBox");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes')
}
showNotes();

function updateStorage(){
    localStorage.setItem('notes', notesContainer.innerHTML);
}


createBtn.addEventListener("click",()=>{
let inputBox = document.createElement("p");
let img = document.createElement("img");
inputBox.className = "inputBox";
inputBox.setAttribute('contenteditable', "true");
img.src = "images/delete.png";
notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click",(e)=>{
 if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();

    updateStorage();
 }
else if(e.target.tagName === "P"){
    notes = document.querySelectorAll(".inputBox")
    notes.forEach(nts => {
        nts.onkeyup = ()=>{
            updateStorage();
        }
    })
}

})

document.addEventListener("keydown", event=>{
if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
}
})



// The variable e or event in the code snippet represents an event object. When an event (such as a click) occurs, the browser automatically passes an event object to the event handler function. This object contains information about the event, including details like the target element that triggered the event (e.target)