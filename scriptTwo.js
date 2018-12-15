
var snakeInterval = setInterval(draw, 30);
var x = 1;
var y = 0;
var xspeed = 1;
var yspeed = 0;
var width = 10;
var heigt = 10;
var context
function draw(){
    var myCanvas = document.querySelector("canvas#myCanvas");
    context = myCanvas.getContext("2d");
    context.clearRect(x, y, innerWidth, innerHeight); 
    context.fillStyle = "green";
    
    x += xspeed
    y += yspeed

    context.fillRect(x, y, width, heigt);

    if(x + width >590 || x < 0){
        clearInterval(snakeInterval)
        clearInterval(foodInterval)
    }
    if(y + heigt >590 || y < 0){
        clearInterval(snakeInterval)
        clearInterval(foodInterval)
    }
    eatFood(x, y, foodPos.x, foodPos.y, context)

}

//check the directions
(function directions(){
    document.onkeydown = function(key){
        if (key.keyCode == '38') {
            yspeed = -1
            xspeed = 0;
        
            // up arrow
        }
        else if (key.keyCode == '40') {
            yspeed = 1
            xspeed = 0;
            
            // down arrow
        }
        else if (key.keyCode == '37') {
            xspeed = -1
            yspeed = 0;
           // left arrow
        }
        else if (key.keyCode == '39') {
            xspeed = 1
            yspeed = 0;
          
           // right arrow
        }
    }  
})();
var foodPos = {x: 10, y: 10, foodWidth: 10, foodHeight: 10};

var foodInterval = setInterval(createFood, 4000);
function createFood(){
    var myCanvas = document.querySelector("canvas#myCanvas");
    var context = myCanvas.getContext("2d");
    context.clearRect(foodPos.x, foodPos.y, 10, 10); 
    foodPos.x += Math.floor((Math.random()*100));
    foodPos.y += Math.floor((Math.random()*100));
   

    context.fillStyle =  "red";
    context.fillRect(foodPos.x,foodPos.y, foodPos.foodWidth, foodPos.foodHeight);

    
    if(foodPos.x >590 || foodPos.x < 0){
        foodPos.x = 10
    
    }
    if(foodPos.y >590 || foodPos.y < 0){
        foodPos.y = 10
    }
    eatFood(x, y, foodPos.x, foodPos.y)
}

var i = 10;
function eatFood(xSnake, ySnake, xFood,yFood ){

    if(xSnake+ width == xFood + foodPos.foodWidth && ySnake+ heigt == yFood + foodPos.foodHeight){
        width +=i
        heigt = 10;
        context.fillRect(x, y, width, heigt);
    }
 

}













