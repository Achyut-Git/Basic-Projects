let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


function time(){
   setInterval (()=>{
    let currentTime = new Date();
// hrs.innerHTML = currentTime.getHours();
// min.innerHTML = currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds(); //We can use ternary operators to make it optimized

if(currentTime.getHours()<10){
    hrs.innerHTML = "0" + currentTime.getHours();

}else{
   hrs.innerHTML = currentTime.getHours();
}

if(currentTime.getMinutes()<10){
    min.innerHTML = "0" + currentTime.getMinutes();

}else{
   min.innerHTML = currentTime.getMinutes();
}

// if(currentTime.getSeconds()<10){
//     sec.innerHTML = "0" + currentTime.getSeconds();

// }else{
//    sec.innerHTML = currentTime.getSeconds();
// }

},1000)
}
time();