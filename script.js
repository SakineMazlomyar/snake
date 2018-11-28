var pos = {x:0 , y: 0}
var speed = {x: 0, y: 0}
var picture;
var div
var toRightMovment;
var toLefttMovment;

function init(){
   createSnakeForm()
   directions()
 
  
}
function createSnakeForm(){
    div = document.createElement("div");
    div.classList.add("div")
    //create every single square of snake
    for(var i = 0; i<5; i++){
        picture = document.createElement("img");
        picture.classList.add("img")
        picture.src = "greenSquare.png";
        div.appendChild(picture);
    }
    document.body.appendChild(div)

    //create initial movment
    toRightMovment = setInterval(goToRight, 300)
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
            clearInterval(toRightMovment);
            toLefttMovment = setInterval(gotToLeft, 300)
           // left arrow
        }
        else if (key.keyCode == '39') {
            div.style.transform = "scaleX(1)"
            clearInterval(toLefttMovment);
            toRightMovment = setInterval(goToRight, 300)
           // right arrow
        }
    }  
}

function goToRight(){
    speed.x += ((Math.random()*1/100));

    if (pos.x > 50) {
        alert("Failed ;(")
        clearInterval(toRightMovment);
    } else {
        pos.x+=speed.x
        div.style.left= pos.x + '%' ; 
        
        
    }
}
function gotToLeft(){
    if (pos.x == 0) {
        alert("Failed ;(")
        clearInterval(toLefttMovment);
    } else {
        pos.x-=speed.x; 
        div.style.left= pos.x + '%' ; 
      
        
    }
}