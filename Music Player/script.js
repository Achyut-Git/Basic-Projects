const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime; 
}

function playPause(){
    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        controlIcon.classList.remove('fa-play');
        controlIcon.classList.add('fa-pause');

    }
}

// if(song.play()){                        //The code will automatically play the song each time we save the file so use the below one 
//     setInterval(()=>{
//        progress.value = song.currentTime; 
//     },500)
// }

if(!song.pause()){
    setInterval(()=>{
       progress.value = song.currentTime; 
    },500)
}

progress.onchange = function(){
    song.play();
     song.currentTime = progress.value; 
     controlIcon.classList.remove("fa-play");
     controlIcon.classList.add("fa-pause");
}


// document.getElementsByClassName("controls")[0].children[1].onclick = playPause; //selecting second children inside a parent div/class