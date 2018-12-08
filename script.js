var pos = {x:0 , y: 0}
var speed={x: 0, y:0}
var picture;
var div
var toRightMovment;
var toLefttMovment;
var toUpMovment; 
var toDownMovment;
var myCanvas;
var context;
var width = 20;
var height = 20;
var foodPos = {x:0 , y: 0}

function init(){
   createSnakeForm()
   directions()
   createFood()
   eatFood()
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


function goToRight(){
    speed.x += ((Math.random()*1/1000));  
    pos.x+=speed.x
    div.style.left= pos.x + '%' ;  
     
}


function gotToLeft(){
    speed.x += ((Math.random()*1/1000));
    pos.x-=speed.x; 
    div.style.left= pos.x + '%' ;   
     
    
}

function goToDown(){
    speed.y+= ((Math.random()*1/1000));
    pos.y+=speed.y 
    div.style.top= pos.y + '%' ;  
      
}

function goToUp(){
    speed.y+= ((Math.random()*1/1000));
    pos.y-=speed.y; 
    div.style.top= pos.y + '%' ;    
    
}

function createFood(){
    myCanvas = document.querySelector("canvas#myCanvas");
    myCanvas.classList.add("foodPosition");
    foodPos.x+= Math.floor((Math.random()*200));
    foodPos.y+= Math.floor((Math.random()*200));
   
    context = myCanvas.getContext("2d");
    context.fillStyle =  "#FF0000";
    context.fillRect(foodPos.x,foodPos.y,width,height);

    
}

function eatFood(){
 

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
            if (pos.y < 0) {
                clearInterval(toUpMovment);
            }
            // up arrow
        }
        else if (key.keyCode == '40') {
            div.style.transform = "scaleY(-1)"
            clearInterval(toRightMovment);
            clearInterval(toLefttMovment);
            clearInterval(toUpMovment);

            div.style.flexDirection = "column"
            toDownMovment = setInterval(goToDown, 30)
            if (pos.y >90) {
                clearInterval(toDownMovment);
            }
            // down arrow
        }
        else if (key.keyCode == '37') {
            div.style.transform = "scaleX(-1)";             
            clearInterval(toRightMovment);
            clearInterval(toDownMovment);
            clearInterval(toUpMovment);
            div.style.flexDirection = "row"
            toLefttMovment = setInterval(gotToLeft, 30)
            (function s(){
                if (div.style.left < -1) {
                    clearInterval(toLefttMovment);
                    console.log(div.style.left)
                }
            })();
           // left arrow
        }
        else if (key.keyCode == '39') {
            div.style.transform = "scaleX(1)"
            clearInterval(toLefttMovment);
            clearInterval(toDownMovment);
            clearInterval(toUpMovment);
            div.style.flexDirection = "row"
            toRightMovment = setInterval(goToRight, 30)
            if (pos.x > 89) {
                clearInterval(toRightMovment);
            }
           // right arrow
        }
    }  
}