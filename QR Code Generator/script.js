let qrImage = document.getElementById("qrImage");
let imgBox = document.getElementById("imgBox");
let qrText = document.getElementById("qrText");

const generateQR = ()=>{
     if(qrText.value !== ""){
         qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
      imgBox.classList.add("showImg")
     }
     else{
         qrText.classList.add("error")
        setTimeout(() => {
            qrText.classList.remove("error")
        }, 2000);
     }
}

const btn = document.getElementById("btn");
btn.onclick = generateQR;