let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function(){
    productImg.src = "product/image1.png";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

btn[1].onclick = function(){
    productImg.src = "product/image2.png";

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

btn[2].onclick = function(){
    productImg.src = "product/image3.png"

    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

//The arrow functions do not have their own "this." context; they inherit it from the parent scope. In your case, this inside the arrow function does not refer to the button that was clicked, but to the global object (or undefined in strict mode).