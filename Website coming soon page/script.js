var countDownDate = new Date("August 16, 2024 00:00:00").getTime()
var x = setInterval(()=>{
var now = new Date().getTime()    
var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));  //1
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));   //2
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));   //3
var seconds = Math.floor((distance % (1000 * 60)) / 1000);   //4
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if(distance < 0){
    clearInterval(x)
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
}

},1000)

//1  distance represents a time duration in milliseconds. So, We divide distance by the total number of milliseconds in a day:(1000 * 60 * 60 * 24)...its like its covering that number of milliseconds in a day,  and so we divide total milliseconds by milliseconds in a day.

//2  after clearing for days we need hours so that will be the remaining(remainder from the days) i.e. "%", then we divided the outcome hours(remainder or remaining milliseconds)  by the total milliseconds in an hour: (1000 * 60 * 60).

//3 Similar to the previous step, we find the remainder after dividing distance by the total milliseconds in an "hour" : distance % (1000 * 60 * 60). Then we divide this remainder by the total milliseconds in a minute: (1000 * 60).

//4   Again, we find the remainder after dividing distance by the total milliseconds in a minute: distance % (1000 * 60). Then we divide this remainder by 1000 (since there are 1000 milliseconds in a second).
