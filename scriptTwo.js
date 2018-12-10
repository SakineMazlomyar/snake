
var theInterval = setInterval(draw, 30);
var x = 1;
var y = 0;
var xspeed = 1;
var yspeed = 1;
function draw(){
    var myCanvas = document.querySelector("canvas#myCanvas");
    var context = myCanvas.getContext("2d");
    context.clearRect(x, y, innerWidth, innerHeight); 
    context.fillStyle = "green";
    
    x += xspeed
    y += yspeed
    context.fillRect(x, y, 10, 10);
    if(x >590 || x < 0){
        clearInterval(theInterval)
    }
    if(y >590 || y < 0){
        clearInterval(theInterval)
    }

}

//check the directions
(function directions(){
    document.onkeydown = function(key){
        if (key.keyCode == '38') {
            yspeed = -1
            // up arrow
        }
        else if (key.keyCode == '40') {
            yspeed = 1
            
            // down arrow
        }
        else if (key.keyCode == '37') {
            xspeed = -1
            console.log(xspeed)
           // left arrow
        }
        else if (key.keyCode == '39') {
            xspeed = 1
            console.log(xspeed)
           // right arrow
        }
    }  
})();
var foodPos = {x: 0, y: 0};
var ss = setInterval(createFood, 4000)
function createFood(){
    var myCanvas = document.querySelector("canvas#myCanvas");
    var context = myCanvas.getContext("2d");
    context.clearRect(foodPos.x, foodPos.y, 10, 10); 
    foodPos.x += Math.floor((Math.random()*100));
    foodPos.y += Math.floor((Math.random()*100));
   
    context.fillStyle =  "red";
    context.fillRect(foodPos.x,foodPos.y, 10, 10);
    console.log(foodPos.x)
    console.log(foodPos.y)

    if(foodPos.x >590 || foodPos.x < 0){
        clearInterval(ss);
        ss = setInterval(createFood, 4000);
    }
    if(foodPos.y >590 || foodPos.y < 0){
        clearInterval(ss);
        ss = setInterval(createFood, 4000);
    }
    
}
(function s(){
    if(foodPos.x >590 || foodPos.x < 0){
        clearInterval(ss);
        ss = setInterval(createFood, 4000);
    }
    if(foodPos.y >590 || foodPos.y < 0){
        clearInterval(ss);
        ss = setInterval(createFood, 4000);
    }
})();











