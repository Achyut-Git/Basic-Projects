const apiUrl = "https://api.quotable.io/random";

const quote = document.getElementById('quote');
const author = document.getElementById('author');
 
async function getQuote(url){
const response = await fetch(url);
var data = await response.json();

quote.innerHTML = data.content
author.innerHTML = data.author
}


getQuote(apiUrl); // running it before onclick so that it will automatically load a quote on opening of the website.

let newQuote = document.getElementById("newQuote");
newQuote.onclick =()=>{ getQuote(apiUrl);
}
//wrapping it in a function ensures that getQuote is called with the apiUrl parameter only when the click event happens, rather than immediately during the assignment. This is a common pattern when dealing with event handlers in JavaScript, especially when the functions involved are asynchronous or require specific parameters to be passed.

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML + " Author__ " + author.innerHTML, "Tweet Window", "width=600, height=300"
    )
}
