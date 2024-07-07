const searchForm = document.getElementById("searchForm");
const searchBox = document.getElementById("searchBox");
const searchedResult = document.getElementById("searchResult");
const showMoreBtn = document.getElementById("showMoreBtn");

let keyword = "";
let page = 1;

let accessKey = `wYRnDK1_hmnPoTzmBNiDilbbobGI5vjUROzABnSpTd4`;

async function searchImage(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=21`
   
const response = await fetch(url)
const data = await response.json();
// console.log(data)



if(page == 1){
    searchedResult.innerHTML = "";
}

const results = data.results;

results.map((result)=>{
const image = document.createElement("img")
image.src = result.urls.small;
const imageLink = document.createElement("a");
imageLink.href = result.links.html;

imageLink.target = "_blank"

imageLink.appendChild(image);

searchedResult.appendChild(imageLink);
})


showMoreBtn.style.display = "block"

}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    searchImage();
}) 



showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImage();
})