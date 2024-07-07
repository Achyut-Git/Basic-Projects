let [hours,minutes,seconds]=[0,0,0]
let timer = null;
let timeout;
let displayTime = document.getElementById("displayTime");

function stopWatch(){
    seconds++
    if(seconds==60){
        seconds = 0;
        minutes++
    }
    else if(minutes==60){
        minutes = 0;
        hours++
    }
    
    let h = hours<10? "0"+ hours: hours;
    let m = minutes<10? "0"+ minutes: minutes;
    let s = seconds<10? "0"+ seconds: seconds;
    displayTime.textContent = h + " : " + m + " : " + s;
    timeout = setTimeout(stopWatch,1000)
}


function watchStart(){
    if(!timer){  /* if timer is null, then !timer will be true. Otherwise, if timer has a non-null value (e.g., a timer ID), then !timer will be false.*/
        timer = 1;
        stopWatch();
    }
    // timer = setInterval(stopWatch, 1000)
}

function watchStop(){
    timer = null
    clearTimeout(timeout)
}
function watchReset(){
    clearTimeout(timeout);
    [hours,minutes,seconds] = [0,0,0]
    timer = null
    displayTime.textContent = hours + minutes + seconds;
    displayTime.innerHTML = "00 : 00 : 00"
}