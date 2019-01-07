
var snakeInterval = setInterval(draw, 30);
var xspeed = 1;
var yspeed = 0;
var width = 10;
var heigt = 10;
var context
snakeCordinate = [
    {x:150, y: 150},
    {x:140, y: 150},
    {x:130, y: 150},
    {x:120, y: 150}
]
function draw(){
    var myCanvas = document.querySelector("canvas#myCanvas");
    context = myCanvas.getContext("2d");
    context.clearRect(snakeCordinate.x, snakeCordinate.y, innerWidth, innerHeight); 
    context.fillStyle = "green";
    
    snakeCordinate.x += xspeed
    snakeCordinate.y += yspeed
    console.log(snakeCordinate.x, )

    context.fillRect(snakeCordinate.x, snakeCordinate.y, width, heigt);

    //eatFood(x, y, foodPos.x, foodPos.y, context)
    if(snakeCordinate.x + width >590 || snakeCordinate.x < 0){
        clearInterval(snakeInterval)
        clearInterval(foodInterval)
    }
    if(snakeCordinate.y + heigt >590 ||  snakeCordinate.y < 0){
        clearInterval(snakeInterval)
        clearInterval(foodInterval)
    }
   /*  checkLocation(snakeCordinate.x, width, heigt, snakeCordinate.y, foodPos.x, foodPos.y) */
}

//check the directions
/* (function directions(){
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
var foodPos = {x: 0, y: 0, foodWidth: 10, foodHeight: 10};

var foodInterval = setInterval(createFood, 4000);
function createFood(){
    var myCanvas = document.querySelector("canvas#myCanvas");
    var contextt = myCanvas.getContext("2d");
    context.clearRect(foodPos.x, foodPos.y, foodPos.foodWidth, foodPos.foodHeight); 
    foodPos.x += Math.floor((Math.random()*50))
    foodPos.y += Math.floor((Math.random()*50))
   

    contextt.fillStyle =  "red";
    contextt.fillRect(foodPos.x,foodPos.y, foodPos.foodWidth, foodPos.foodHeight);
    //eatFood(x, y, foodPos.x, foodPos.y)

    console.log(foodPos.x, foodPos.y)
    if(foodPos.x +foodPos.foodWidth >590 || foodPos.x < 0){
        foodPos.x = 0;
        foodPos.y = 0;
      
        
    }
    if(foodPos.y +foodPos.foodHeight >590 || foodPos.y <0){
        foodPos.x = 0;
        foodPos.y = 0;
        
    }
    
    checkLocation(snakeCordinate.x, snakeCordinate.y, foodPos.x, foodPos.y)
} */

/* function checkLocation(x, y, foodX, foodY){
   

    if(x+width > foodX+foodPos.foodWidth){
        console.log("träff")
        
    }

} */
















