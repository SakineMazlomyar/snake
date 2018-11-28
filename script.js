var pos = {x:0 , y: 0}
var speed={x: 0, y:0}
var picture;
var div
var toRightMovment;
var toLefttMovment;
var toUpMovment; 
var toDownMovment;

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
    toRightMovment = setInterval(goToRight, 50)
}

function directions(){
 
    document.onkeydown = function(key){
        if (key.keyCode == '38') {
            div.style.transform = "scaleY(1)"
            // up arrow
        }
        else if (key.keyCode == '40') {
            //div.style.transform = "scaleY(-1)"
            clearInterval(toRightMovment);
            toDownMovment = setInterval(goToDown, 30)
            // down arrow
        }
        else if (key.keyCode == '37') {
            div.style.transform = "scaleX(-1)"
            clearInterval(toRightMovment);
            toLefttMovment = setInterval(gotToLeft, 30)
           // left arrow
        }
        else if (key.keyCode == '39') {
            div.style.transform = "scaleX(1)"
            clearInterval(toLefttMovment);
            toRightMovment = setInterval(goToRight, 30)
           // right arrow
        }
    }  
}

function goToRight(){
    speed.x += ((Math.random()*1/1000));
    if (pos.x > 89) {
        console.log("Failed ;(")
        clearInterval(toRightMovment);
    } else {
        pos.x+=speed.x
        div.style.left= pos.x + '%' ; 
        
 
    }
}
function gotToLeft(){
    if (pos.x < 0) {
        console.log("Failed ;(")
        clearInterval(toLefttMovment);
    } else {
        pos.x-=speed.x; 
        div.style.left= pos.x + '%' ; 
      
        
    }
}
function goToDown(){
    speed.x += ((Math.random()*1/1000));
    if (pos.y >100) {
        console.log("Failed ;(")
        clearInterval(toDownMovment);
    } else {
    
        div.style.left = pos.x + '%' ; 
        pos.y+=speed.x 
        div.style.bottom = pos.y + '%' ; 
      
        
    }
}
/* function goToUp(){
    if (pos.y < 0) {
        console.log("Failed ;(")
        clearInterval(toUpMovment);
    } else {
        pos.y+=speed.x; 
        div.style.bottom= pos.y + '%' ; 
      
        
    }
} */