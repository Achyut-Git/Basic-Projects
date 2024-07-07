var ImgBox = document.querySelector(".img-box");
var ImgWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg");

originalImg.style.width = ImgBox.offsetWidth + "px";


var leftSpace = ImgBox.offsetLeft;

ImgBox.onmousemove = (e)=>{
     var boxWidth = (e.pageX - leftSpace) + "px";
    ImgWrap.style.width = boxWidth;
}