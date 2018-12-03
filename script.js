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
   createFood()
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
            clearInterval(toDownMovment);
            clearInterval(toRightMovment);
            clearInterval(toLefttMovment);

            div.style.flexDirection = "column"
            toUpMovment = setInterval(goToUp, 30)
            // up arrow
        }
        else if (key.keyCode == '40') {
            //div.style.transform = "scaleY(-1)"
            clearInterval(toRightMovment);
            clearInterval(toLefttMovment);
            clearInterval(toUpMovment);

            div.style.flexDirection = "column"
            toDownMovment = setInterval(goToDown, 30)
            // down arrow
        }
        else if (key.keyCode == '37') {
            div.style.transform = "scaleX(-1)"
            clearInterval(toRightMovment);
            clearInterval(toDownMovment);
            clearInterval(toUpMovment);
            div.style.flexDirection = "row"
            toLefttMovment = setInterval(gotToLeft, 30)
           // left arrow
        }
        else if (key.keyCode == '39') {
            div.style.transform = "scaleX(1)"
            clearInterval(toLefttMovment);
            clearInterval(toDownMovment);
            clearInterval(toUpMovment);
            div.style.flexDirection = "row"
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
    speed.x += ((Math.random()*1/1000));
    if (pos.x < -1) {
        console.log("Failed ;(")
        clearInterval(toLefttMovment);
    } else {
        pos.x-=speed.x; 
        div.style.left= pos.x + '%' ;    
    }
}

function goToDown(){
    speed.y+= ((Math.random()*1/1000));
    if (pos.y >90) {
        console.log("Failed ;(")
        clearInterval(toDownMovment);
    } else {
        div.style.left = pos.x + '%' ; 
        pos.y+=speed.y 
        div.style.top= pos.y + '%' ;    
    }
}

function goToUp(){
    speed.y+= ((Math.random()*1/1000));
    if (pos.y < 0) {
        console.log("Failed ;(")
        clearInterval(toUpMovment);
    } else {
        pos.y-=speed.y; 
        div.style.top= pos.y + '%' ;    
    }
}

function createFood(){
    var myCanvas = document.querySelector("canvas#myCanvas");
    var context = myCanvas.getContext("2d");
    context.fillStyle =  "#FF0000";
    context.fillRect(0,0,150,75);

}