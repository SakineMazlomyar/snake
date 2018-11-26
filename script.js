var pos = 0;
var picture;
var div
var toRightMovment;

function init(){
   createSnakeForm()
   directions()
  
}
function createSnakeForm(){
    div = document.createElement("div");
    div.classList.add("div")
    //create the pictures
    for(var i = 0; i<5; i++){
        picture = document.createElement("img");
        picture.classList.add("img")
        picture.src = "greenSquare.png";
        div.appendChild(picture);
    }
    document.body.appendChild(div)

    //Move the pictures
    toRightMovment = setInterval(moveToRight, 300)

}
function directions(){
 
    document.onkeydown = function(key){
        if (key.keyCode == '38') {
            div.style.transform = "scaleY(1)"
            // up arrow
        }
        else if (key.keyCode == '40') {
            div.style.transform = "scaleX(-1)"
            // down arrow
        }
        else if (key.keyCode == '37') {
            div.style.transform = "scaleX(-1)"
            toLeftMovment = setInterval(moveToLeft, 300)
           // left arrow
        }
        else if (key.keyCode == '39') {
            div.style.transform = "scaleX(1)"
            setInterval(moveToRight, 300)
           // right arrow
        }
    }  
}

function moveToRight(){
    if (pos == 350) {
        alert("Failed ;(")
        clearInterval(toRightMovment);
    } else {
        pos+=5; 
        var speed = 0.5
        div.style.left = pos * speed + 'px' ; 
        
        
    }
}
function moveToLeft(){
    if (pos == 0) {
        alert("Failed ;(")
        clearInterval(toLefttMovment);
    } else {
        pos-=5; 
        var speed = 0.5
        div.style.right = pos * speed + 'px' ; 
      
        
    }
}